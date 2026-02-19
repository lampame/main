(function () {
    'use strict';

    var cache = {};
    var cacheTtlMs = 1000 * 60 * 10;
    var listOpened = false;
    var listProbeRequested = false;
    function log() {
    }
    function stopAutostart() {
      if (typeof Lampa !== 'undefined' && Lampa.Keypad && Lampa.Keypad.listener) {
        Lampa.Keypad.listener.send('keydown', {
          code: 0,
          enabled: false,
          event: {}
        });
      }
    }
    function stopAutostartSoon() {
      setTimeout(stopAutostart, 0);
    }
    function cacheGet(key) {
      var item = cache[key];
      if (!item) return null;
      if (Date.now() - item.ts > cacheTtlMs) {
        delete cache[key];
        return null;
      }
      return item.data;
    }
    function cacheSet(key, data) {
      cache[key] = {
        ts: Date.now(),
        data: data
      };
    }
    function getEmptyResult() {
      return {
        streams: [],
        format: {},
        chapters: []
      };
    }
    function storageGet(name, empty) {
      if (Lampa.Storage && typeof Lampa.Storage.get == 'function') {
        return Lampa.Storage.get(name, empty || '');
      }
      return empty || '';
    }
    function storageField(name) {
      if (Lampa.Storage && typeof Lampa.Storage.field == 'function') {
        return Lampa.Storage.field(name);
      }
      return storageGet(name);
    }
    function storageValue(name, empty) {
      if (Lampa.Storage && typeof Lampa.Storage.value == 'function') {
        return Lampa.Storage.value(name, empty || '');
      }
      return storageGet(name, empty || '');
    }
    function normalizeUrl(url) {
      if (!url) return '';
      var result = (url + '').trim();
      if (!result) return '';
      if (!/^https?:\/\//i.test(result)) result = 'http://' + result;
      return result.replace(/\/+$/, '');
    }
    function getTorrserverUrl() {
      var one = normalizeUrl(storageGet('torrserver_url', ''));
      var two = normalizeUrl(storageGet('torrserver_url_two', ''));
      var useLink = storageField('torrserver_use_link') || storageGet('torrserver_use_link', 'one') || 'one';
      return useLink == 'two' ? two || one : one || two;
    }
    function isTorrserverAuthEnabled() {
      var value = storageField('torrserver_auth');
      return value === true || value == 'true' || value == '1';
    }
    function encodeBase64(value) {
      try {
        return window.btoa(unescape(encodeURIComponent(value)));
      } catch (e) {
        try {
          return window.btoa(value);
        } catch (e2) {
          return '';
        }
      }
    }
    function getAuthHeader() {
      if (!isTorrserverAuthEnabled()) return '';
      var login = storageGet('torrserver_login', '') || '';
      var password = storageValue('torrserver_password', '') || '';
      var token = encodeBase64(login + ':' + password);
      return token ? 'Basic ' + token : '';
    }
    function getProbeIndex(params) {
      var value = parseInt(params && params.id, 10);
      return !isNaN(value) && value > 0 ? value : 1;
    }
    function getProbeUrl(params) {
      var torrserverUrl = getTorrserverUrl();
      var torrentHash = params && params.torrent_hash;
      if (!torrserverUrl || !torrentHash) return '';
      return torrserverUrl + '/ffp/' + torrentHash + '/' + getProbeIndex(params);
    }
    function reguest(params, callback) {
      if (!params || !params.torrent_hash) {
        if (params && params.ffprobe) {
          setTimeout(function () {
            callback({
              streams: params.ffprobe
            });
          }, 200);
        } else {
          callback(getEmptyResult());
        }
        return;
      }
      var probeUrl = getProbeUrl(params);
      if (!probeUrl) {
        callback(getEmptyResult());
        return;
      }
      var cacheKey = probeUrl;
      var cached = cacheGet(cacheKey);
      if (cached) {
        callback(cached);
        return;
      }
      var net = new Lampa.Reguest();
      net.timeout(1000 * 15);
      var head = {
        dataType: 'text'
      };
      var authHeader = getAuthHeader();
      if (authHeader) {
        head.headers = {
          Authorization: authHeader
        };
      }
      net["native"](probeUrl, function (str) {
        var json = {};
        try {
          json = JSON.parse(str);
        } catch (e) {}
        var meta = json && json.response && json.response.metadata ? json.response.metadata : json;
        if (meta && meta.streams) {
          var result = {
            streams: meta.streams,
            format: meta.format || {},
            chapters: meta.chapters || []
          };
          cacheSet(cacheKey, result);
          callback(result);
        } else {
          callback(getEmptyResult());
        }
      }, function (error) {
        log('Tracks', 'probe request fail', error && error.status ? error.status : error);
        callback(getEmptyResult());
      }, false, head);
    }
    function subscribeTracks(data) {
      var inited = false;
      var initedParse = false;
      var webosReplace = {};
      function getTracks() {
        var video = Lampa.PlayerVideo.video();
        return video.audioTracks || [];
      }
      function getSubs() {
        var video = Lampa.PlayerVideo.video();
        return video.textTracks || [];
      }
      function setTracks() {
        if (initedParse) {
          var newTracks = [];
          var videoTracks = getTracks();
          var parseTracks = initedParse.streams.filter(function (a) {
            return a.codec_type == 'audio';
          });
          var minus = 1;
          log('Tracks', 'set tracks:', videoTracks.length);
          if (parseTracks.length !== videoTracks.length) parseTracks = parseTracks.filter(function (a) {
            return a.codec_name !== 'dts';
          });
          parseTracks = parseTracks.filter(function (a) {
            return a.tags;
          });
          log('Tracks', 'filtred tracks:', parseTracks.length);
          parseTracks.forEach(function (track) {
            var orig = videoTracks[track.index - minus];
            var elem = {
              index: track.index - minus,
              language: track.tags.language,
              label: track.tags.title || track.tags.handler_name,
              ghost: orig ? false : true,
              selected: orig ? orig.selected == true || orig.enabled == true : false
            };
            Object.defineProperty(elem, "enabled", {
              set: function set(v) {
                if (v) {
                  var aud = getTracks();
                  var trk = aud[elem.index];
                  for (var i = 0; i < aud.length; i++) {
                    aud[i].enabled = false;
                    aud[i].selected = false;
                  }
                  if (trk) {
                    trk.enabled = true;
                    trk.selected = true;
                  }
                }
              },
              get: function get() {}
            });
            newTracks.push(elem);
          });
          if (parseTracks.length) Lampa.PlayerPanel.setTracks(newTracks);
        }
      }
      function setSubs() {
        if (initedParse) {
          var newSubs = [];
          var videoSubs = getSubs();
          var parseSubs = initedParse.streams.filter(function (a) {
            return a.codec_type == 'subtitle';
          });
          var minus = initedParse.streams.filter(function (a) {
            return a.codec_type == 'audio';
          }).length + 1;
          log('Tracks', 'set subs:', videoSubs.length);
          parseSubs = parseSubs.filter(function (a) {
            return a.tags;
          });
          log('Tracks', 'filtred subs:', parseSubs.length);
          parseSubs.forEach(function (track) {
            var orig = videoSubs[track.index - minus];
            var elem = {
              index: track.index - minus,
              language: track.tags.language,
              label: track.tags.title || track.tags.handler_name,
              ghost: videoSubs[track.index - minus] ? false : true,
              selected: orig ? orig.selected == true || orig.mode == 'showing' : false
            };
            Object.defineProperty(elem, "mode", {
              set: function set(v) {
                if (v) {
                  var txt = getSubs();
                  var sub = txt[elem.index];
                  for (var i = 0; i < txt.length; i++) {
                    txt[i].mode = 'disabled';
                    txt[i].selected = false;
                  }
                  if (sub) {
                    sub.mode = 'showing';
                    sub.selected = true;
                  }
                }
              },
              get: function get() {}
            });
            newSubs.push(elem);
          });
          if (parseSubs.length) Lampa.PlayerPanel.setSubs(newSubs);
        }
      }
      function listenTracks() {
        setTracks();
        Lampa.PlayerVideo.listener.remove('tracks', listenTracks);
      }
      function listenSubs() {
        setSubs();
        Lampa.PlayerVideo.listener.remove('subs', listenSubs);
      }
      function canPlay() {
        if (webosReplace.tracks) setWebosTracks(webosReplace.tracks);else setTracks();
        if (webosReplace.subs) setWebosSubs(webosReplace.subs);else setSubs();
        Lampa.PlayerVideo.listener.remove('canplay', canPlay);
      }
      function setWebosTracks(videoTracks) {
        if (initedParse) {
          var parseTracks = initedParse.streams.filter(function (a) {
            return a.codec_type == 'audio';
          });
          log('Tracks', 'webos set tracks:', videoTracks.length);
          if (parseTracks.length !== videoTracks.length) {
            parseTracks = parseTracks.filter(function (a) {
              return a.codec_name !== 'truehd';
            });
            if (parseTracks.length !== videoTracks.length) {
              parseTracks = parseTracks.filter(function (a) {
                return a.codec_name !== 'dts';
              });
            }
          }
          parseTracks = parseTracks.filter(function (a) {
            return a.tags;
          });
          parseTracks.forEach(function (track, i) {
            if (videoTracks[i]) {
              videoTracks[i].language = track.tags.language;
              videoTracks[i].label = track.tags.title || track.tags.handler_name;
            }
          });
        }
      }
      function setWebosSubs(videoSubs) {
        if (initedParse) {
          var parseSubs = initedParse.streams.filter(function (a) {
            return a.codec_type == 'subtitle';
          });
          log('Tracks', 'webos set subs:', videoSubs.length);
          if (parseSubs.length !== videoSubs.length - 1) parseSubs = parseSubs.filter(function (a) {
            return a.codec_name !== 'hdmv_pgs_subtitle';
          });
          parseSubs = parseSubs.filter(function (a) {
            return a.tags;
          });
          parseSubs.forEach(function (track, a) {
            var i = a + 1;
            if (videoSubs[i]) {
              videoSubs[i].language = track.tags.language;
              videoSubs[i].label = track.tags.title || track.tags.handler_name;
            }
          });
        }
      }
      function listenWebosSubs(_data) {
        webosReplace.subs = _data.subs;
        if (initedParse) setWebosSubs(_data.subs);
      }
      function listenWebosTracks(_data) {
        webosReplace.tracks = _data.tracks;
        if (initedParse) setWebosTracks(_data.tracks);
      }
      function listenStart() {
        inited = true;
        reguest(data, function (result) {
          initedParse = result;
          if (inited) {
            if (webosReplace.subs) setWebosSubs(webosReplace.subs);else setSubs();
            if (webosReplace.tracks) setWebosTracks(webosReplace.tracks);else setTracks();
          }
        });
      }
      function listenDestroy() {
        inited = false;
        Lampa.Player.listener.remove('destroy', listenDestroy);
        Lampa.PlayerVideo.listener.remove('tracks', listenTracks);
        Lampa.PlayerVideo.listener.remove('subs', listenSubs);
        Lampa.PlayerVideo.listener.remove('webos_subs', listenWebosSubs);
        Lampa.PlayerVideo.listener.remove('webos_tracks', listenWebosTracks);
        Lampa.PlayerVideo.listener.remove('canplay', canPlay);
      }
      Lampa.Player.listener.follow('destroy', listenDestroy);
      Lampa.PlayerVideo.listener.follow('tracks', listenTracks);
      Lampa.PlayerVideo.listener.follow('subs', listenSubs);
      Lampa.PlayerVideo.listener.follow('webos_subs', listenWebosSubs);
      Lampa.PlayerVideo.listener.follow('webos_tracks', listenWebosTracks);
      Lampa.PlayerVideo.listener.follow('canplay', canPlay);
      listenStart();
    }
    function parseMetainfo(data) {
      var loading = Lampa.Template.get('ts_tracks_probe_loading');
      var requestData = {};
      for (var key in data.element) requestData[key] = data.element[key];
      requestData.id = 1;
      data.item.after(loading);
      reguest(requestData, function (result) {
        if (listOpened) {
          var append = function append(name, fields) {
            if (fields.length) {
              var block = Lampa.Template.get('ts_tracks_probe_metainfo_block', {});
              block.find('.tracks-metainfo__label').text(Lampa.Lang.translate(name == 'video' ? 'extensions_hpu_video' : name == 'audio' ? 'player_tracks' : 'player_' + name));
              fields.forEach(function (data) {
                var item = $('<div class="tracks-metainfo__item tracks-metainfo__item--' + name + ' selector"></div>');
                item.on('hover:focus', function () {
                  Lampa.Modal.scroll().update(item);
                });
                for (var i in data) {
                  var div = $('<div class="tracks-metainfo__column--' + i + '"></div>');
                  div.text(data[i]);
                  item.append(div);
                }
                block.find('.tracks-metainfo__info').append(item);
              });
              html.append(block);
            }
          };
          var video = [];
          var audio = [];
          var subs = [];
          var codecVideo = result.streams.filter(function (a) {
            return a.codec_type == 'video';
          });
          var codecAudio = result.streams.filter(function (a) {
            return a.codec_type == 'audio';
          });
          var codecSubs = result.streams.filter(function (a) {
            return a.codec_type == 'subtitle';
          });
          codecVideo.slice(0, 1).forEach(function (v) {
            var line = {};
            if (v.width && v.height) line.video = v.width + 'x' + v.height;
            if (v.codec_name) line.codec = v.codec_name.toUpperCase();
            if (Boolean(v.is_avc)) line.avc = 'AVC';
            if (Lampa.Arrays.getKeys(line).length) video.push(line);
          });
          codecAudio.forEach(function (a, i) {
            var line = {
              num: i + 1
            };
            if (a.tags) {
              line.lang = (a.tags.language || '').toUpperCase();
            }
            line.name = a.tags ? a.tags.title || a.tags.handler_name : '';
            if (a.codec_name) line.codec = a.codec_name.toUpperCase();
            if (a.channel_layout) line.channels = a.channel_layout.replace('(side)', '').replace('stereo', '2.0');
            var bit = a.bit_rate ? a.bit_rate : a.tags && (a.tags.BPS || a.tags["BPS-eng"]) ? a.tags.BPS || a.tags["BPS-eng"] : '--';
            line.rate = bit == '--' ? bit : Math.round(bit / 1000) + ' ' + Lampa.Lang.translate('speed_kb');
            if (Lampa.Arrays.getKeys(line).length) audio.push(line);
          });
          codecSubs.forEach(function (a, i) {
            var line = {
              num: i + 1
            };
            if (a.tags) {
              line.lang = (a.tags.language || '').toUpperCase();
            }
            line.name = a.tags ? a.tags.title || a.tags.handler_name : '';
            if (Lampa.Arrays.getKeys(line).length) subs.push(line);
          });
          var html = Lampa.Template.get('ts_tracks_probe_metainfo', {});
          append('video', video);
          append('audio', audio);
          append('subs', subs);
          loading.remove();
          if (video.length || audio.length || subs.length) {
            data.item.after(html);
          }
          if (Lampa.Controller.enabled().name == 'modal') Lampa.Controller.toggle('modal');
        }
      });
    }
    function initTracks() {
      Lampa.Player.listener.follow('start', function (data) {
        if (data.torrent_hash) subscribeTracks(data);
      });
      Lampa.Listener.follow('torrent_file', function (data) {
        if (data.type == 'list_open') {
          listOpened = true;
          listProbeRequested = false;
        }
        if (data.type == 'list_close') {
          listOpened = false;
          listProbeRequested = false;
        }
        if (data.type == 'render' && data.items.length == 1 && listOpened) {
          stopAutostartSoon();
          parseMetainfo(data);
        }
        if (data.type == 'render' && listOpened && data.items.length > 1 && !listProbeRequested) {
          if (data.items[data.items.length - 1] === data.element) {
            listProbeRequested = true;
            parseMetainfo(data);
          }
        }
      });
    }

    function addTemplates() {
      Lampa.Template.add('ts_tracks_probe_loading', "\n        <div class=\"tracks-loading\">\n            <span>#{loading}...</span>\n        </div>\n    ");
      Lampa.Template.add('ts_tracks_probe_metainfo', "\n        <div class=\"tracks-metainfo\"></div>\n    ");
      Lampa.Template.add('ts_tracks_probe_metainfo_block', "\n        <div class=\"tracks-metainfo__line\">\n            <div class=\"tracks-metainfo__label\"></div>\n            <div class=\"tracks-metainfo__info\"></div>\n        </div>\n    ");
      Lampa.Template.add('ts_tracks_probe_css', "\n        <style>\n        .tracks-loading{margin-top:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.tracks-loading:before{content:'';display:inline-block;width:1.3em;height:1.3em;background:url('./img/loader.svg') no-repeat 50% 50%;background-size:contain;margin-right:.4em}.tracks-loading>span{font-size:1.1em;line-height:1.1}.tracks-metainfo{margin-top:1em}.tracks-metainfo__line+.tracks-metainfo__line{margin-top:2em}.tracks-metainfo__label{opacity:.5;font-weight:600}.tracks-metainfo__info{padding-top:1em;line-height:1.2}.tracks-metainfo__info>div{background-color:rgba(0,0,0,0.22);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-border-radius:.3em;border-radius:.3em;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.tracks-metainfo__info>div.focus{background-color:rgba(255,255,255,0.06)}.tracks-metainfo__info>div>div{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.tracks-metainfo__info>div>div:not(:last-child){padding-right:1.5em}.tracks-metainfo__info>div+div{margin-top:1em}.tracks-metainfo__column--video,.tracks-metainfo__column--name{margin-right:auto}.tracks-metainfo__column--num{min-width:3em;padding-right:0}.tracks-metainfo__column--rate{min-width:7em;text-align:right}.tracks-metainfo__column--channels{min-width:5em;text-align:right}\n        </style>\n    ");
      $('body').append(Lampa.Template.get('ts_tracks_probe_css', {}, true));
    }

    var manifest = {
      type: "other",
      version: "1.0.0",
      name: "TS Tracks Probe",
      description: "Audio/subtitle track parsing via TorrServer ffprobe API",
      component: "tracks"
    };
    function add() {
      Lampa.Manifest.plugins = manifest;
      addTemplates();
      initTracks();
    }
    function startPlugin() {
      window.plugin_ts_tracks_probe_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_ts_tracks_probe_ready) startPlugin();

})();
