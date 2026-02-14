(function () {
    'use strict';

    var api_base = 'https://banderabackend.lme.isroot.in/api/v2';

    function createV2(sourceKey) {
      return function v2(component, _object) {
        var network = new Lampa.Reguest();
        var object = _object;
        var selected = null;
        var series = null;
        var episodes_cache = {};
        var filter_items = {
          season: [],
          voice: []
        };
        var choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        var disabled_source_codes = {
          NO_RESULTS: true,
          NOT_FOUND: true,
          CONTENT_REMOVED: true,
          NO_PLAYER_DATA: true,
          NO_STREAM_DATA: true,
          NO_STREAMS: true,
          NO_STREAM: true,
          NO_MOVIE_STREAM: true,
          NO_MOVIE_STREAMS: true,
          NO_EPISODES: true,
          NO_VOICES: true,
          NO_SERIAL_STRUCTURE: true,
          NO_ANIME_INFO: true,
          NO_ANIME_STRUCTURE: true,
          VOICE_NOT_FOUND: true
        };
        this.searchByTitle = function (_object, title) {
          object = _object;
          search({
            title: title
          });
        };
        this.searchByImdbID = function (_object, imdb_id) {
          object = _object;
          search({
            imdb_id: imdb_id
          });
        };
        this.searchByKinopoisk = function (_object, kinopoisk_id) {
          object = _object;
          search({
            kinopoisk_id: kinopoisk_id
          });
        };
        this.search = function (_object, data) {
          object = _object;
          if (!data || !data.length) return component.doesNotAnswer();
          var first = data[0] || {};
          if (first.ref) {
            selected = first;
            loadContent(first.ref);
            return;
          }
          search({
            title: first.title || first.name || object.movie.title || object.movie.name,
            original_title: first.orig_title || first.original_title || first.nameEn || object.movie.original_title || object.movie.original_name,
            imdb_id: first.imdb_id,
            kinopoisk_id: first.kp_id || first.kinopoisk_id || first.filmId,
            year: getYear(object.movie || {})
          });
        };
        this.extendChoice = function (saved) {
          Lampa.Arrays.extend(choice, saved, true);
        };
        this.reset = function () {
          component.reset();
          choice = {
            season: 0,
            voice: 0,
            voice_name: ''
          };
          filter();
          buildEpisodes();
        };
        this.filter = function (type, a, b) {
          choice[a.stype] = b.index;
          if (a.stype == 'voice' && filter_items.voice[b.index]) {
            choice.voice_name = filter_items.voice[b.index];
          }
          component.reset();
          filter();
          buildEpisodes();
        };
        this.cancel = function () {
          network.clear();
        };
        this.destroy = function () {
          network.clear();
          selected = null;
          series = null;
          episodes_cache = {};
        };
        function apiBase() {
          if (api_base.indexOf('/api/v1') !== -1) return api_base.replace('/api/v1', '/api/v2');
          if (api_base.indexOf('/api/v2') !== -1) return api_base;
          return api_base.replace(/\/$/, '') + '/api/v2';
        }
        function addParam(url, key, value) {
          if (!value) return url;
          return Lampa.Utils.addUrlComponent(url, key + '=' + encodeURIComponent(value));
        }
        function postJson(url, data, success, fail) {
          network.silent(url, success, fail, JSON.stringify(data), {
            dataType: 'json',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        }
        function normalizeErrorCode(json) {
          return json && (json.error_code || json.meta && json.meta.code) || '';
        }
        function extractErrorText(json) {
          return json && (json.error || json.message || json.error_code) || '';
        }
        function handleSourceError(json) {
          var code = normalizeErrorCode(json);
          var text = extractErrorText(json) || code;
          if (code && disabled_source_codes[code]) {
            component.disableSource(sourceKey, code);
            component.empty();
            return;
          }
          if (text) component.pushError(text);
          component.empty();
        }
        function handleStreamError(json) {
          var text = extractErrorText(json);
          if (text) component.pushError(text);
        }
        function getYear(movie) {
          var date = movie.release_date || movie.first_air_date || movie.year || movie.start_date;
          return date ? (date + '').slice(0, 4) : '';
        }
        function normalizeVoiceName(voice) {
          return voice.display_name || voice.displayName || voice.name || voice.id || '';
        }
        function getSeasonNumber(value, fallback) {
          var match = String(value || '').match(/(\\d+)/);
          return match ? parseInt(match[1]) : fallback;
        }
        function normalizeEpisodeTitle(episode, number) {
          return episode.title || episode.name || Lampa.Lang.translate('torrent_serial_episode') + ' ' + number;
        }
        function buildSearchUrl(params) {
          var url = apiBase() + '/search';
          var movie = object.movie || {};
          url = addParam(url, 'source', sourceKey);
          url = addParam(url, 'title', params.title || movie.title || movie.name);
          url = addParam(url, 'original_title', params.original_title || movie.original_title || movie.original_name);
          url = addParam(url, 'imdb_id', params.imdb_id || movie.imdb_id);
          url = addParam(url, 'kinopoisk_id', params.kinopoisk_id || movie.kinopoisk_id);
          url = addParam(url, 'year', params.year || getYear(movie));
          if (movie.name) url = addParam(url, 'type', 'series');else url = addParam(url, 'type', 'movie');
          return url;
        }
        function search(params) {
          var url = buildSearchUrl(params || {});
          network.silent(url, function (json) {
            if (!json || !json.ok) {
              handleSourceError(json);
              return;
            }
            if (json.meta && json.meta.code == 'NO_RESULTS') {
              component.disableSource(sourceKey, json.meta.code);
              component.empty();
              return;
            }
            var items = json.items || [];
            if (!items.length) {
              component.empty();
              return;
            }
            if (items.length > 1 && !object.clarification) {
              component.similars(items.map(function (item) {
                return {
                  id: item.ref && (item.ref.id || item.ref.href || item.ref.url) || item.title,
                  title: item.title || item.name,
                  orig_title: item.title_en || item.original_title,
                  year: item.year,
                  imdb_id: item.imdb_id,
                  kinopoisk_id: item.kinopoisk_id,
                  ref: item.ref
                };
              }));
              component.loading(false);
              return;
            }
            selected = items[0];
            loadContent(selected.ref);
          }, function () {
            component.doesNotAnswer();
          });
        }
        function loadContent(ref) {
          var url = apiBase() + '/content';
          postJson(url, {
            source: sourceKey,
            ref: ref,
            full: true
          }, function (json) {
            if (!json || !json.ok) {
              handleSourceError(json);
              return;
            }
            if (json.type == 'series') {
              series = normalizeSeries(json);
              filter();
              buildEpisodes();
            } else {
              drawMovie(json);
            }
          }, function () {
            component.doesNotAnswer();
          });
        }
        function normalizeSeries(json) {
          var voices = Array.isArray(json.voices) ? json.voices : [];
          voices = voices.map(function (voice, index) {
            var seasons = Array.isArray(voice.seasons) ? voice.seasons : [];
            return {
              id: voice.id || voice.voice_id || index,
              display_name: normalizeVoiceName(voice) || 'Voice ' + (index + 1),
              seasons: seasons
            };
          });
          return {
            voices: voices
          };
        }
        function filter() {
          filter_items = {
            season: [],
            voice: []
          };
          if (series && series.voices && series.voices.length) {
            filter_items.voice = series.voices.map(function (voice) {
              return voice.display_name || voice.id;
            });
            var seasons = series.voices[0].seasons || [];
            filter_items.season = seasons.map(function (season, index) {
              var season_num = getSeasonNumber(season.title || season.season || season.number, index + 1);
              return Lampa.Lang.translate('torrent_serial_season') + ' ' + season_num;
            });
          }
          if (choice.season >= filter_items.season.length) choice.season = 0;
          if (choice.voice >= filter_items.voice.length) choice.voice = 0;
          if (filter_items.voice[choice.voice]) choice.voice_name = filter_items.voice[choice.voice];
          component.filter(filter_items, choice);
        }
        function buildEpisodes() {
          if (!series || !series.voices || !series.voices.length) {
            component.loading(false);
            return component.doesNotAnswer();
          }
          var voice = series.voices[choice.voice] || series.voices[0];
          var seasons = voice.seasons || [];
          if (!seasons.length) {
            component.loading(false);
            return component.doesNotAnswer();
          }
          var season_index = choice.season;
          if (season_index >= seasons.length) season_index = 0;
          var season = seasons[season_index];
          var season_num = getSeasonNumber(season.title || season.season || season.number, season_index + 1);
          var cache_key = voice.id + ':' + season_num;
          choice.voice_name = voice.display_name || voice.id;
          if (episodes_cache[cache_key]) {
            renderEpisodes(episodes_cache[cache_key], season_num, voice);
            return;
          }
          var episodes = Array.isArray(season.episodes) ? season.episodes : [];
          if (!episodes.length) {
            component.loading(false);
            return component.doesNotAnswer();
          }
          episodes_cache[cache_key] = episodes;
          renderEpisodes(episodes, season_num, voice);
        }
        function renderEpisodes(episodes, season, voice) {
          var items = episodes.map(function (episode, index) {
            var number = episode.number || episode.episode || index + 1;
            return {
              title: normalizeEpisodeTitle(episode, number),
              season: season,
              episode: number,
              ref: episode.ref,
              info: voice.display_name || voice.id,
              voice_name: voice.display_name || voice.id,
              voice_id: voice.id
            };
          });
          component.draw(items, {
            onEnter: function onEnter(item) {
              getStream(item.ref, function (streams) {
                var prepared = prepareStreams(streams);
                var first = prepared.first;
                var qualitys = applyProxyToQualitys(prepared.qualitys);
                var play_url = first ? normalizeStreamUrl(first.url) : '';
                if (!first || !play_url) {
                  component.pushError(Lampa.Lang.translate('online_nolink'));
                  return;
                }
                Lampa.Player.play({
                  url: play_url,
                  timeline: item.timeline,
                  quality: qualitys,
                  title: item.title,
                  subtitles: first.subtitles
                });
                var playlist = [];
                items.forEach(function (elem) {
                  var cell = {
                    url: function url(call) {
                      getStream(elem.ref, function (next_streams) {
                        var prepared_next = prepareStreams(next_streams);
                        var next_first = prepared_next.first;
                        cell.url = next_first ? normalizeStreamUrl(next_first.url) : '';
                        cell.quality = applyProxyToQualitys(prepared_next.qualitys);
                        elem.mark();
                        call();
                      }, function () {
                        cell.url = '';
                        call();
                      });
                    },
                    title: elem.title,
                    timeline: elem.timeline,
                    quality: {},
                    subtitles: [],
                    mark: elem.mark
                  };
                  playlist.push(cell);
                });
                Lampa.Player.playlist(playlist);
              }, function (errorText) {
                component.pushError(errorText || Lampa.Lang.translate('online_nolink'));
              });
            }
          });
          component.loading(false);
        }
        function drawMovie(json) {
          var item = {
            title: object.movie.title || object.movie.name,
            info: '',
            voice_name: '',
            file: '',
            streams: json.streams || [],
            stream_ref: json.stream_ref || null
          };
          component.draw([item], {
            onEnter: function onEnter(movie) {
              getMovieStream(movie, function (prepared) {
                var first = prepared.first;
                var qualitys = applyProxyToQualitys(prepared.qualitys);
                var play_url = first ? normalizeStreamUrl(first.url) : '';
                if (!first || !play_url) {
                  component.pushError(Lampa.Lang.translate('online_nolink'));
                  return;
                }
                Lampa.Player.play({
                  url: play_url,
                  timeline: movie.timeline,
                  quality: qualitys,
                  title: movie.title,
                  subtitles: first.subtitles
                });
              }, function (errorText) {
                component.pushError(errorText || Lampa.Lang.translate('online_nolink'));
              });
            }
          });
          component.loading(false);
        }
        function prepareStreams(streams) {
          var qualitys = {};
          var first = null;
          if (Array.isArray(streams)) {
            streams.forEach(function (stream, index) {
              var label = stream.title || stream.quality || 'stream-' + (index + 1);
              var url = normalizeStreamUrl(stream && stream.url);
              if (url) qualitys[label] = url;
              if (!first && url) first = Object.assign({}, stream, {
                url: url
              });
            });
          }
          return {
            first: first,
            qualitys: qualitys
          };
        }
        function normalizeStreamUrl(url) {
          if (!url) return url;
          if (!shouldUseAshdiProxy(url)) return url;
          return wrapAshdiProxy(url);
        }
        function applyProxyToQualitys(qualitys) {
          var result = {};
          Object.keys(qualitys || {}).forEach(function (key) {
            result[key] = normalizeStreamUrl(qualitys[key]);
          });
          return result;
        }
        function shouldUseAshdiProxy(url) {
          var player = Lampa.Storage.get('player');
          if (player && player !== 'inner') return false;
          return isAshdiUrl(url);
        }
        function isAshdiUrl(url) {
          return /(^|\/\/)([^\/]*\.)?ashdi\.vip(\/|$)/i.test(url || '');
        }
        function wrapAshdiProxy(url) {
          var base = 'https://tut.im/proxy.php?url=';
          if (url.indexOf(base) === 0) return url;
          return base + encodeURIComponent(url);
        }
        function getStream(ref, success, fail) {
          var url = apiBase() + '/stream';
          if (!ref) {
            if (fail) fail();
            return;
          }
          postJson(url, {
            source: sourceKey,
            ref: ref
          }, function (json) {
            if (!json || !json.ok || !Array.isArray(json.streams)) {
              handleStreamError(json);
              if (fail) fail(extractErrorText(json));
              return;
            }
            success(json.streams);
          }, function () {
            if (fail) fail();
          });
        }
        function getMovieStream(movie, success, fail) {
          if (movie.stream_ref) {
            getStream(movie.stream_ref, function (streams) {
              success(prepareStreams(streams));
            }, function (errorText) {
              if (fail) fail(errorText);
            });
            return;
          }
          if (movie.streams && movie.streams.length) {
            var direct = movie.streams.filter(function (stream) {
              return stream && stream.url;
            });
            if (direct.length) {
              success(prepareStreams(direct));
              return;
            }
            var ref = movie.streams[0] && movie.streams[0].ref;
            if (ref) {
              getStream(ref, function (streams) {
                success(prepareStreams(streams));
              }, function (errorText) {
                if (fail) fail(errorText);
              });
              return;
            }
          }
          success({
            first: null,
            qualitys: {}
          });
        }
      };
    }

    var QR_URL = 'https://lampame.donatik.me';
    var QR_TEXT = "<a href=\"".concat(QR_URL, "\">\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F</a>");
    var QR_BODY = 'Подяка автору плагіну BanderaOnline добровільна, на розвиток якого витрачено багато часу та сил.';
    var QR_CARD_POSTER = 'https://iili.io/fkdGkSj.png';
    function openQrModal() {
      var html = $('<div class="banderaonline-qr-modal">' + '<style>' + '.banderaonline-qr-modal__content{display:flex;flex-direction:row;gap:1.2em;align-items:center;text-align:center}' + '.banderaonline-qr-modal__info{max-width:28em}' + '.banderaonline-qr-modal__qr{display:flex;flex-direction:column;align-items:center}' + '@media (max-width: 600px){.banderaonline-qr-modal__content{flex-direction:column}}' + '</style>' + '<div class="banderaonline-qr-modal__content">' + '<div class="account-modal-split__info banderaonline-qr-modal__info">' + //`<div class="account-modal-split__title">${QR_TITLE}</div>` +
      "<div class=\"account-modal-split__text\"><img src=\"".concat(QR_CARD_POSTER, "\" class=\"banderaonline-qr-modal__img\"><br />").concat(QR_BODY, "</div>") + '</div>' + '<div class="account-modal-split__qr banderaonline-qr-modal__qr">' + '<div class="account-modal-split__qr-code" style="margin-bottom:0;width: 13em;height: 13em;"></div>' + "<div class=\"account-modal-split__qr-text\">".concat(QR_TEXT, "</div>") + '</div>' + '</div>' + '</div>');
      var qrElement = html.find('.account-modal-split__qr-code');
      var renderQr = function renderQr() {
        if (!window.qrcode) {
          qrElement.text('QR недоступний');
          return;
        }
        Lampa.Utils.qrcode(QR_URL, qrElement, function (error) {
          console.error(error);
        });
      };
      if (!window.qrcode && Lampa.Utils.putScript) {
        var qrLib = window.location.protocol == 'file:' ? Lampa.Manifest.github_lampa + 'vender/qrcode/qrcode.js' : './vender/qrcode/qrcode.js';
        Lampa.Utils.putScript([qrLib], renderQr, renderQr, null, false);
      } else {
        renderQr();
      }
      var svg = qrElement.find('svg');
      if (svg[0]) {
        svg[0].style.setProperty('width', '12em', 'important');
        svg[0].style.setProperty('height', '12em', 'important');
      }
      var enabledController = Lampa.Controller.enabled().name;
      Lampa.Modal.open({
        title: '',
        html: html,
        size: 'medium',
        onBack: function onBack() {
          Lampa.Modal.close();
          Lampa.Controller.toggle(enabledController);
        }
      });
    }

    function component(object) {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      var files = new Lampa.Explorer(object);
      var filter = new Lampa.Filter(object);
      var sources = {
        uatut: createV2('uatut'),
        uaflix: createV2('uaflix'),
        kurwaborz: createV2('kurwaborz'),
        bambooua: createV2('bambooua'),
        animeon: createV2('animeon'),
        starlight: createV2('starlight'),
        mikai: createV2('mikai'),
        midnight: createV2('midnight'),
        uakino: createV2('uakino'),
        ashdibase: createV2('ashdibase')
      };
      var balanser_titles = {
        uaflix: 'UAflix',
        uatut: 'UATuT',
        kurwaborz: 'Kurwaborz',
        bambooua: 'BambooUA',
        animeon: 'AnimeON',
        starlight: 'StarLight',
        mikai: 'Mikai',
        midnight: 'Midnight',
        uakino: 'UAKino',
        ashdibase: 'AshdiBase'
      };
      var last;
      var extended;
      var selected_id;
      var source;
      var balanser;
      var initialized;
      var balanser_timer;
      var images = [];
      var disabled_sources = {};
      var filter_sources = buildFilterSources(object && object.movie);
      var available_sources = null;
      var sources_base = api_base;
      var sources_key = 'BO_SOURCES';
      var sources_sort_key = 'BO_SOURCES_SORT';
      var sources_hide_key = 'BO_SOURCES_HIDE';
      var filter_translate = {
        season: Lampa.Lang.translate('torrent_serial_season'),
        voice: Lampa.Lang.translate('torrent_parser_voice'),
        source: Lampa.Lang.translate('settings_rest_source')
      };
      function isSourceDisabled(name) {
        return !!disabled_sources[name];
      }
      function buildSourceSortItems() {
        return filter_sources.map(function (key) {
          var disabled = isSourceDisabled(key);
          return {
            title: balanser_titles[key] || key,
            source: key,
            selected: key == balanser,
            ghost: disabled,
            noenter: disabled
          };
        });
      }
      function updateSourceSort() {
        if (!filter) return;
        filter.set('sort', buildSourceSortItems());
        filter.chosen('sort', [balanser_titles[balanser] || balanser]);
      }
      function buildFilterSources(movie) {
        var sources = getBaseSources();
        var include_anime = shouldIncludeAnimeSources(movie);
        var include_starlight = shouldIncludeStarlightSource(movie);
        var include_midnight = shouldIncludeMidnightSource(movie);
        if (include_anime) {
          if (sources.indexOf('bambooua') === -1) sources.push('bambooua');
          if (sources.indexOf('animeon') === -1) sources.push('animeon');
          if (sources.indexOf('mikai') === -1) sources.push('mikai');
        } else {
          sources = sources.filter(function (name) {
            return name !== 'bambooua' && name !== 'animeon' && name !== 'mikai';
          });
        }
        if (include_starlight) {
          if (sources.indexOf('starlight') === -1) sources.push('starlight');
        } else {
          sources = sources.filter(function (name) {
            return name !== 'starlight';
          });
        }
        if (include_midnight) {
          if (sources.indexOf('midnight') === -1) sources.push('midnight');
        } else {
          sources = sources.filter(function (name) {
            return name !== 'midnight';
          });
        }
        sources = filterEnabledSources(sources);
        sources = applyUserSources(sources);
        if (!sources.length) {
          sources = ['uatut', 'uaflix', 'kurwaborz', 'uakino', 'ashdibase'];
          if (include_anime) {
            sources.push('bambooua', 'animeon');
            sources.push('mikai');
          }
          if (include_starlight) {
            sources.push('starlight');
          }
          if (include_midnight) {
            sources.push('midnight');
          }
        }
        return sources;
      }
      function getUserHiddenSources() {
        var hidden = Lampa.Storage.get(sources_hide_key, []);
        if (!Array.isArray(hidden)) return [];
        return hidden.map(mapSourceName).filter(Boolean);
      }
      function getUserSortedSources() {
        var sorted = Lampa.Storage.get(sources_sort_key, []);
        if (!Array.isArray(sorted)) return [];
        return sorted.map(mapSourceName).filter(Boolean);
      }
      function applyUserSources(list) {
        var hidden = getUserHiddenSources();
        var sorted = getUserSortedSources();
        var result = list.slice(0);
        if (sorted.length) {
          var ordered = [];
          sorted.forEach(function (key) {
            if (result.indexOf(key) !== -1) ordered.push(key);
          });
          result.forEach(function (key) {
            if (ordered.indexOf(key) === -1) ordered.push(key);
          });
          result = ordered;
        }
        if (hidden.length) result = result.filter(function (name) {
          return hidden.indexOf(name) === -1;
        });
        return result;
      }
      function getBaseSources() {
        var from_api = getEnabledSources();
        if (from_api) {
          return from_api.filter(function (name) {
            return sources[name];
          });
        }
        return ['uatut', 'uaflix', 'kurwaborz', 'mikai', 'uakino', 'ashdibase'];
      }
      function filterEnabledSources(list) {
        var enabled = getEnabledSources();
        if (!enabled) return list;
        return list.filter(function (name) {
          return enabled.indexOf(name) !== -1;
        });
      }
      function normalizeSourceName(name) {
        return (name || '').toString().trim().toLowerCase();
      }
      function mapSourceName(name) {
        var key = normalizeSourceName(name);
        return key;
      }
      function getEnabledSources() {
        if (!available_sources || !available_sources.length) return null;
        var enabled = available_sources.filter(function (item) {
          return item && item.enabled !== false;
        }).map(function (item) {
          return mapSourceName(item.key || item.name);
        }).filter(Boolean);
        enabled = enabled.filter(function (name) {
          return sources[name];
        });
        return enabled.length ? enabled : null;
      }
      function loadAvailableSources(call) {
        var cached = Lampa.Storage.get(sources_key, null);
        network.silent(sources_base + '/sources', function (json) {
          if (json && json.ok && Array.isArray(json.sources)) {
            applyAvailableSources(json.sources);
            Lampa.Storage.set(sources_key, available_sources);
          } else if (cached && Array.isArray(cached)) {
            applyAvailableSources(cached);
          }
          call();
        }, function () {
          if (cached && Array.isArray(cached)) applyAvailableSources(cached);
          call();
        });
      }
      function applyAvailableSources(list) {
        available_sources = list;
        list.forEach(function (item) {
          if (!item || !item.name && !item.key) return;
          var display = extractSourceTitle(item);
          var key = mapSourceName(item.key || item.name);
          if (display && key && sources[key]) balanser_titles[key] = display;
        });
      }
      function extractSourceTitle(item) {
        if (!item) return '';
        return item.display_name || item.displayName || item.display || item.title || item.label || item.name || '';
      }
      function shouldIncludeAnimeSources(movie) {
        if (!movie) return true;
        var lang = movie.original_language;
        var has_lang = !!lang;
        var is_anime_lang = lang == 'ja' || lang == 'zh';
        var is_dorama_lang = lang == 'ko';
        var has_anime_genre = Array.isArray(movie.genres) && movie.genres.some(function (g) {
          return g && g.id == 16;
        });
        var title = movie.original_title || movie.original_name || movie.title || movie.name || '';
        var has_japanese_title = Lampa.Utils.containsJapanese ? Lampa.Utils.containsJapanese(title) : false;
        var is_anime = is_anime_lang && (has_anime_genre || has_japanese_title) || has_japanese_title;
        return !has_lang || is_anime || is_dorama_lang;
      }
      function shouldIncludeStarlightSource(movie) {
        if (!movie) return false;
        return (movie.original_language || '').toLowerCase() == 'uk';
      }
      function shouldIncludeMidnightSource(movie) {
        if (!movie) return false;
        return (movie.original_language || '').toLowerCase() == 'uk';
      }
      function getYear(movie) {
        var date = movie.release_date || movie.first_air_date || movie.year || movie.start_date;
        return date ? (date + '').slice(0, 4) : '';
      }
      this.initialize = function () {
        var _this = this;
        loadAvailableSources(function () {
          filter_sources = buildFilterSources(object && object.movie);
          source = _this.createSource();
          filter.onSearch = function (value) {
            Lampa.Activity.replace({
              search: value,
              clarification: true
            });
          };
          filter.onBack = function () {
            _this.start();
          };
          filter.render().find('.selector').on('hover:enter', function () {
            clearInterval(balanser_timer);
          });
          filter.onSelect = function (type, a, b) {
            if (type == 'filter') {
              if (a.reset) {
                if (extended) source.reset();else _this.start();
              } else {
                source.filter(type, a, b);
              }
            } else if (type == 'sort') {
              Lampa.Select.close();
              _this.changeBalanser(a.source);
            }
          };
          if (filter.addButtonBack) filter.addButtonBack();
          filter.render().find('.filter--sort span').text(Lampa.Lang.translate('online_balanser'));
          var donateButton = $('<div class="simple-button simple-button--filter selector filter--donate">' + '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.730 1.108-.730 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"></path></g></svg>' + '<span>Подяка</span><div class="hide"></div>' + '</div>');
          filter.render().find('.filter--filter').after(donateButton);
          donateButton.on('hover:enter', function () {
            openQrModal();
          });
          files.appendFiles(scroll.render());
          files.appendHead(filter.render());
          scroll.body().addClass('torrent-list');
          scroll.minus(files.render().find('.explorer__files-head'));
          _this.search();
        });
      };
      this.changeBalanser = function (balanser_name) {
        if (isSourceDisabled(balanser_name)) return;
        var last_select_balanser = Lampa.Storage.cache('bandera_online_last_balanser', 3000, {});
        last_select_balanser[object.movie.id] = balanser_name;
        Lampa.Storage.set('bandera_online_last_balanser', last_select_balanser);
        Lampa.Storage.set('bandera_online_balanser', balanser_name);
        var to = this.getChoice(balanser_name);
        var from = this.getChoice();
        if (from.voice_name) to.voice_name = from.voice_name;
        this.saveChoice(to, balanser_name);
        Lampa.Activity.replace();
      };
      this.createSource = function () {
        var last_select_balanser = Lampa.Storage.cache('bandera_online_last_balanser', 3000, {});
        if (last_select_balanser[object.movie.id]) {
          balanser = last_select_balanser[object.movie.id];
          Lampa.Storage.set('bandera_online_last_balanser', last_select_balanser);
        } else {
          balanser = Lampa.Storage.get('bandera_online_balanser', 'uatut');
        }
        if (!sources[balanser] || filter_sources.indexOf(balanser) === -1) {
          balanser = filter_sources[0] || 'uatut';
        }
        return new sources[balanser](this, object);
      };
      this.proxy = function (name) {
        var prox = Lampa.Storage.get('bandera_online_proxy_all');
        var need = Lampa.Storage.get('bandera_online_proxy_' + name);
        if (need) prox = need;
        if (prox && prox.slice(-1) !== '/') {
          prox += '/';
        }
        return prox;
      };

      /**
       * Подготовка
       */
      this.create = function () {
        return this.render();
      };

      /**
       * Начать поиск
       */
      this.search = function () {
        this.activity.loader(true);
        this.filter({
          source: filter_sources
        }, this.getChoice());
        this.find();
      };
      this.find = function () {
        if (object.movie.imdb_id && source.searchByImdbID) {
          this.extendChoice();
          source.searchByImdbID(object, object.movie.imdb_id);
          return;
        }
        if (object.movie.kinopoisk_id && source.searchByKinopoisk) {
          this.extendChoice();
          source.searchByKinopoisk(object, object.movie.kinopoisk_id);
          return;
        }
        if (source.searchByTitle) {
          this.extendChoice();
          source.searchByTitle(object, object.movie.title || object.movie.name);
          return;
        }
        if (source.search) {
          this.extendChoice();
          source.search(object, [{
            title: object.movie.title || object.movie.name,
            original_title: object.movie.original_title || object.movie.original_name,
            imdb_id: object.movie.imdb_id,
            kinopoisk_id: object.movie.kinopoisk_id,
            year: getYear(object.movie)
          }]);
          return;
        }
        this.doesNotAnswer();
      };
      this.getChoice = function (for_balanser) {
        var data = Lampa.Storage.cache('bandera_online_choice_' + (for_balanser || balanser), 3000, {});
        var save = data[selected_id || object.movie.id] || {};
        Lampa.Arrays.extend(save, {
          season: 0,
          voice: 0,
          voice_name: '',
          voice_id: 0,
          episodes_view: {},
          movie_view: ''
        });
        return save;
      };
      this.extendChoice = function () {
        extended = true;
        source.extendChoice(this.getChoice());
      };
      this.saveChoice = function (choice, for_balanser) {
        var data = Lampa.Storage.cache('bandera_online_choice_' + (for_balanser || balanser), 3000, {});
        data[selected_id || object.movie.id] = choice;
        Lampa.Storage.set('bandera_online_choice_' + (for_balanser || balanser), data);
      };

      /**
       * Есть похожие карточки
       * @param {Object} json 
       */
      this.similars = function (json) {
        var _this2 = this;
        json.forEach(function (elem) {
          var info = [];
          var year = ((elem.year || elem.start_date || '') + '').slice(0, 4);
          if (year) info.push(year);
          if (elem.season) info.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + elem.season);
          var name = elem.title || elem.name || '';
          var orig = elem.title_en || elem.original_title || elem.orig_title || '';
          elem.title = name + (orig && orig !== name ? ' / ' + orig : '');
          elem.time = elem.time || '';
          elem.info = info.join('<span class="online-prestige-split">●</span>');
          var item = Lampa.Template.get('bandera_online_folder', elem);
          item.on('hover:enter', function () {
            _this2.activity.loader(true);
            _this2.reset();
            object.search_date = year;
            selected_id = elem.id;
            _this2.extendChoice();
            var kinopoisk_id = elem.kp_id || elem.filmId;
            if (kinopoisk_id && source.searchByKinopoisk) {
              source.searchByKinopoisk(object, kinopoisk_id);
            } else if (source.search) {
              source.search(object, [elem]);
            } else {
              _this2.doesNotAnswer();
            }
          }).on('hover:focus', function (e) {
            last = e.target;
            scroll.update($(e.target), true);
          });
          scroll.append(item);
        });
      };
      this.clearImages = function () {
        images.forEach(function (img) {
          img.onerror = function () {};
          img.onload = function () {};
          img.src = '';
        });
        images = [];
      };

      /**
       * Очистить список файлов
       */
      this.reset = function () {
        last = false;
        clearInterval(balanser_timer);
        network.clear();
        this.clearImages();
        scroll.render().find('.empty').remove();
        scroll.clear();
      };

      /**
       * Загрузка
       */
      this.loading = function (status) {
        if (status) this.activity.loader(true);else {
          this.activity.loader(false);
          this.activity.toggle();
        }
      };

      /**
       * Построить фильтр
       */
      this.filter = function (filter_items, choice) {
        var _this3 = this;
        var select = [];
        var add = function add(type, title) {
          var need = _this3.getChoice();
          var items = filter_items[type];
          var subitems = [];
          var value = need[type];
          items.forEach(function (name, i) {
            subitems.push({
              title: name,
              selected: value == i,
              index: i
            });
          });
          select.push({
            title: title,
            subtitle: items[value],
            items: subitems,
            stype: type
          });
        };
        filter_items.source = filter_sources;
        select.push({
          title: Lampa.Lang.translate('torrent_parser_reset'),
          reset: true
        });
        this.saveChoice(choice);
        if (filter_items.voice && filter_items.voice.length) add('voice', Lampa.Lang.translate('torrent_parser_voice'));
        if (filter_items.season && filter_items.season.length) add('season', Lampa.Lang.translate('torrent_serial_season'));
        filter.set('filter', select);
        filter.set('sort', buildSourceSortItems());
        this.selected(filter_items);
      };
      this.disableSource = function (source_name, reason) {
        var key = mapSourceName(source_name);
        if (!key) return;
        if (!disabled_sources[key]) {
          disabled_sources[key] = {
            reason: reason || ''
          };
          updateSourceSort();
        }
      };
      this.pushError = function (text) {
        if (text) Lampa.Bell.push({
          text: text
        });
      };

      /**
       * Закрыть фильтр
       */
      this.closeFilter = function () {
        if ($('body').hasClass('selectbox--open')) Lampa.Select.close();
      };

      /**
       * Показать что выбрано в фильтре
       */
      this.selected = function (filter_items) {
        var need = this.getChoice(),
          select = [];
        for (var i in need) {
          if (filter_items[i] && filter_items[i].length) {
            if (i == 'voice') {
              select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
            } else if (i !== 'source') {
              if (filter_items.season.length >= 1) {
                select.push(filter_translate.season + ': ' + filter_items[i][need[i]]);
              }
            }
          }
        }
        filter.chosen('filter', select);
        filter.chosen('sort', [balanser_titles[balanser] || balanser]);
      };
      this.getEpisodes = function (season, call) {
        var episodes = [];
        if (typeof object.movie.id == 'number' && object.movie.name) {
          Lampa.Api.sources.tmdb.get('tv/' + object.movie.id + '/season/' + season, {}, function (data) {
            episodes = data.episodes || [];
            call(episodes);
          }, function () {
            call(episodes);
          });
        } else call(episodes);
      };

      /**
       * Добавить элементы в список
       */
      this.append = function (item) {
        item.on('hover:focus', function (e) {
          last = e.target;
          scroll.update($(e.target), true);
        });
        scroll.append(item);
      };
      this.watched = function (set) {
        var file_id = Lampa.Utils.hash(object.movie.number_of_seasons ? object.movie.original_name : object.movie.original_title);
        var watched = Lampa.Storage.cache('bandera_online_watched_last', 5000, {});
        if (set) {
          if (!watched[file_id]) watched[file_id] = {};
          Lampa.Arrays.extend(watched[file_id], set, true);
          Lampa.Storage.set('bandera_online_watched_last', watched);
          this.updateWatched();
        } else {
          return watched[file_id];
        }
      };
      this.updateWatched = function () {
        var watched = this.watched();
        var body = scroll.body().find('.online-prestige-watched .online-prestige-watched__body').empty();
        if (watched) {
          var line = [];
          if (watched.balanser_name) line.push(watched.balanser_name);
          if (watched.voice_name) line.push(watched.voice_name);
          if (watched.season) line.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + watched.season);
          if (watched.episode) line.push(Lampa.Lang.translate('torrent_serial_episode') + ' ' + watched.episode);
          line.forEach(function (n) {
            body.append('<span>' + n + '</span>');
          });
        } else body.append('<span>' + Lampa.Lang.translate('online_no_watch_history') + '</span>');
      };

      /**
       * Отрисовка файлов
       */
      this.draw = function (items) {
        var _this4 = this;
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!items.length) return this.empty();
        scroll.append(Lampa.Template.get('bandera_online_watched', {}));
        this.updateWatched();
        this.getEpisodes(items[0].season, function (episodes) {
          var viewed = Lampa.Storage.cache('bandera_online_view', 5000, []);
          var serial = object.movie.name ? true : false;
          var choice = _this4.getChoice();
          var fully = window.innerWidth > 480;
          var scroll_to_element = false;
          var scroll_to_mark = false;
          items.forEach(function (element, index) {
            var episode = serial && episodes.length && !params.similars ? episodes.find(function (e) {
              return e.episode_number == element.episode;
            }) : false;
            var episode_num = element.episode || index + 1;
            var episode_last = choice.episodes_view[element.season];
            Lampa.Arrays.extend(element, {
              info: '',
              quality: '',
              time: Lampa.Utils.secondsToTime((episode ? episode.runtime : object.movie.runtime) * 60, true)
            });
            var hash_timeline = Lampa.Utils.hash(element.season ? [element.season, element.episode, object.movie.original_title].join('') : object.movie.original_title);
            var hash_behold = Lampa.Utils.hash(element.season ? [element.season, element.episode, object.movie.original_title, element.voice_name].join('') : object.movie.original_title + element.voice_name);
            var data = {
              hash_timeline: hash_timeline,
              hash_behold: hash_behold
            };
            var info = [];
            if (element.season) {
              element.translate_episode_end = _this4.getLastEpisode(items);
              element.translate_voice = element.voice_name;
            }
            element.timeline = Lampa.Timeline.view(hash_timeline);
            if (episode) {
              element.title = episode.name;
              if (element.info.length < 30 && episode.vote_average) info.push(Lampa.Template.get('bandera_online_rate', {
                rate: parseFloat(episode.vote_average + '').toFixed(1)
              }, true));
              if (episode.air_date && fully) info.push(Lampa.Utils.parseTime(episode.air_date).full);
            } else if (object.movie.release_date && fully) {
              info.push(Lampa.Utils.parseTime(object.movie.release_date).full);
            }
            if (!serial && object.movie.tagline && element.info.length < 30) info.push(object.movie.tagline);
            if (element.info) info.push(element.info);
            if (info.length) element.info = info.map(function (i) {
              return '<span>' + i + '</span>';
            }).join('<span class="online-prestige-split">●</span>');
            var html = Lampa.Template.get('bandera_online_full', element);
            var loader = html.find('.online-prestige__loader');
            var image = html.find('.online-prestige__img');
            if (!serial) {
              if (choice.movie_view == hash_behold) scroll_to_element = html;
            } else if (typeof episode_last !== 'undefined' && episode_last == episode_num) {
              scroll_to_element = html;
            }
            if (serial && !episode) {
              image.append('<div class="online-prestige__episode-number">' + ('0' + (element.episode || index + 1)).slice(-2) + '</div>');
              loader.remove();
            } else {
              var img = html.find('img')[0];
              img.onerror = function () {
                img.src = './img/img_broken.svg';
              };
              img.onload = function () {
                image.addClass('online-prestige__img--loaded');
                loader.remove();
                if (serial) image.append('<div class="online-prestige__episode-number">' + ('0' + (element.episode || index + 1)).slice(-2) + '</div>');
              };
              img.src = Lampa.TMDB.image('t/p/w300' + (episode ? episode.still_path : object.movie.backdrop_path));
              images.push(img);
            }
            html.find('.online-prestige__timeline').append(Lampa.Timeline.render(element.timeline));
            if (viewed.indexOf(hash_behold) !== -1) {
              scroll_to_mark = html;
              html.find('.online-prestige__img').append('<div class="online-prestige__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
            }
            element.mark = function () {
              viewed = Lampa.Storage.cache('bandera_online_view', 5000, []);
              if (viewed.indexOf(hash_behold) == -1) {
                viewed.push(hash_behold);
                Lampa.Storage.set('bandera_online_view', viewed);
                if (html.find('.online-prestige__viewed').length == 0) {
                  html.find('.online-prestige__img').append('<div class="online-prestige__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
                }
              }
              choice = _this4.getChoice();
              if (!serial) {
                choice.movie_view = hash_behold;
              } else {
                choice.episodes_view[element.season] = episode_num;
              }
              _this4.saveChoice(choice);
              _this4.watched({
                balanser: balanser,
                balanser_name: balanser_titles[balanser] || Lampa.Utils.capitalizeFirstLetter(balanser),
                voice_id: choice.voice_id,
                voice_name: choice.voice_name || element.voice_name,
                episode: element.episode,
                season: element.season
              });
            };
            element.unmark = function () {
              viewed = Lampa.Storage.cache('bandera_online_view', 5000, []);
              if (viewed.indexOf(hash_behold) !== -1) {
                Lampa.Arrays.remove(viewed, hash_behold);
                Lampa.Storage.set('bandera_online_view', viewed);
                if (Lampa.Manifest.app_digital >= 177) Lampa.Storage.remove('bandera_online_view', hash_behold);
                html.find('.online-prestige__viewed').remove();
              }
            };
            element.timeclear = function () {
              element.timeline.percent = 0;
              element.timeline.time = 0;
              element.timeline.duration = 0;
              Lampa.Timeline.update(element.timeline);
            };
            html.on('hover:enter', function () {
              if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
              if (params.onEnter) params.onEnter(element, html, data);
            }).on('hover:focus', function (e) {
              last = e.target;
              if (params.onFocus) params.onFocus(element, html, data);
              scroll.update($(e.target), true);
            });
            if (params.onRender) params.onRender(element, html, data);
            _this4.contextMenu({
              html: html,
              element: element,
              onFile: function onFile(call) {
                if (params.onContextMenu) params.onContextMenu(element, html, data, call);
              },
              onClearAllMark: function onClearAllMark() {
                items.forEach(function (elem) {
                  elem.unmark();
                });
              },
              onClearAllTime: function onClearAllTime() {
                items.forEach(function (elem) {
                  elem.timeclear();
                });
              }
            });
            scroll.append(html);
          });
          if (serial && episodes.length > items.length && !params.similars) {
            var left = episodes.slice(items.length);
            left.forEach(function (episode) {
              var info = [];
              if (episode.vote_average) info.push(Lampa.Template.get('bandera_online_rate', {
                rate: parseFloat(episode.vote_average + '').toFixed(1)
              }, true));
              if (episode.air_date) info.push(Lampa.Utils.parseTime(episode.air_date).full);
              var air = new Date((episode.air_date + '').replace(/-/g, '/'));
              var now = Date.now();
              var day = Math.round((air.getTime() - now) / (24 * 60 * 60 * 1000));
              var txt = Lampa.Lang.translate('full_episode_days_left') + ': ' + day;
              var html = Lampa.Template.get('bandera_online_full', {
                time: Lampa.Utils.secondsToTime((episode ? episode.runtime : object.movie.runtime) * 60, true),
                info: info.length ? info.map(function (i) {
                  return '<span>' + i + '</span>';
                }).join('<span class="online-prestige-split">●</span>') : '',
                title: episode.name,
                quality: day > 0 ? txt : ''
              });
              var loader = html.find('.online-prestige__loader');
              var image = html.find('.online-prestige__img');
              var season = items[0] ? items[0].season : 1;
              html.find('.online-prestige__timeline').append(Lampa.Timeline.render(Lampa.Timeline.view(Lampa.Utils.hash([season, episode.episode_number, object.movie.original_title].join('')))));
              var img = html.find('img')[0];
              if (episode.still_path) {
                img.onerror = function () {
                  img.src = './img/img_broken.svg';
                };
                img.onload = function () {
                  image.addClass('online-prestige__img--loaded');
                  loader.remove();
                  image.append('<div class="online-prestige__episode-number">' + ('0' + episode.episode_number).slice(-2) + '</div>');
                };
                img.src = Lampa.TMDB.image('t/p/w300' + episode.still_path);
                images.push(img);
              } else {
                loader.remove();
                image.append('<div class="online-prestige__episode-number">' + ('0' + episode.episode_number).slice(-2) + '</div>');
              }
              html.on('hover:focus', function (e) {
                last = e.target;
                scroll.update($(e.target), true);
              });
              scroll.append(html);
            });
          }
          if (scroll_to_element) {
            last = scroll_to_element[0];
          } else if (scroll_to_mark) {
            last = scroll_to_mark[0];
          }
          Lampa.Controller.enable('content');
        });
      };

      /**
       * Меню
       */
      this.contextMenu = function (params) {
        params.html.on('hover:long', function () {
          function show(extra) {
            var enabled = Lampa.Controller.enabled().name;
            var menu = [];
            if (Lampa.Platform.is('webos')) {
              menu.push({
                title: Lampa.Lang.translate('player_lauch') + ' - Webos',
                player: 'webos'
              });
            }
            if (Lampa.Platform.is('android')) {
              menu.push({
                title: Lampa.Lang.translate('player_lauch') + ' - Android',
                player: 'android'
              });
            }
            menu.push({
              title: Lampa.Lang.translate('player_lauch') + ' - Lampa',
              player: 'lampa'
            });
            menu.push({
              title: Lampa.Lang.translate('online_video'),
              separator: true
            });
            menu.push({
              title: Lampa.Lang.translate('torrent_parser_label_title'),
              mark: true
            });
            menu.push({
              title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
              unmark: true
            });
            menu.push({
              title: Lampa.Lang.translate('time_reset'),
              timeclear: true
            });
            if (extra) {
              menu.push({
                title: Lampa.Lang.translate('copy_link'),
                copylink: true
              });
            }
            menu.push({
              title: Lampa.Lang.translate('more'),
              separator: true
            });
            if (Lampa.Account.logged() && params.element && typeof params.element.season !== 'undefined' && params.element.translate_voice) {
              menu.push({
                title: Lampa.Lang.translate('online_voice_subscribe'),
                subscribe: true
              });
            }
            menu.push({
              title: Lampa.Lang.translate('online_clear_all_marks'),
              clearallmark: true
            });
            menu.push({
              title: Lampa.Lang.translate('online_clear_all_timecodes'),
              timeclearall: true
            });
            Lampa.Select.show({
              title: Lampa.Lang.translate('title_action'),
              items: menu,
              onBack: function onBack() {
                Lampa.Controller.toggle(enabled);
              },
              onSelect: function onSelect(a) {
                if (a.mark) params.element.mark();
                if (a.unmark) params.element.unmark();
                if (a.timeclear) params.element.timeclear();
                if (a.clearallmark) params.onClearAllMark();
                if (a.timeclearall) params.onClearAllTime();
                Lampa.Controller.toggle(enabled);
                if (a.player) {
                  Lampa.Player.runas(a.player);
                  params.html.trigger('hover:enter');
                }
                if (a.copylink) {
                  if (extra.quality) {
                    var qual = [];
                    for (var i in extra.quality) {
                      qual.push({
                        title: i,
                        file: extra.quality[i]
                      });
                    }
                    Lampa.Select.show({
                      title: Lampa.Lang.translate('settings_server_links'),
                      items: qual,
                      onBack: function onBack() {
                        Lampa.Controller.toggle(enabled);
                      },
                      onSelect: function onSelect(b) {
                        Lampa.Utils.copyTextToClipboard(b.file, function () {
                          Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                        }, function () {
                          Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
                        });
                      }
                    });
                  } else {
                    Lampa.Utils.copyTextToClipboard(extra.file, function () {
                      Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                    }, function () {
                      Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
                    });
                  }
                }
                if (a.subscribe) {
                  Lampa.Account.subscribeToTranslation({
                    card: object.movie,
                    season: params.element.season,
                    episode: params.element.translate_episode_end,
                    voice: params.element.translate_voice
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('online_voice_success'));
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('online_voice_error'));
                  });
                }
              }
            });
          }
          params.onFile(show);
        }).on('hover:focus', function () {
          if (Lampa.Helper) Lampa.Helper.show('online_file', Lampa.Lang.translate('helper_online_file'), params.html);
        });
      };

      /**
       * Показать пустой результат
       */
      this.empty = function (msg) {
        var html = Lampa.Template.get('bandera_online_does_not_answer', {});
        html.find('.online-empty__buttons').remove();
        html.find('.online-empty__title').text(Lampa.Lang.translate('empty_title_two'));
        html.find('.online-empty__time').text(Lampa.Lang.translate('empty_text'));
        scroll.append(html);
        this.loading(false);
      };
      this.doesNotAnswer = function () {
        var _this5 = this;
        this.reset();
        var html = Lampa.Template.get('bandera_online_does_not_answer', {
          balanser: balanser_titles[balanser] || balanser
        });
        var tic = 10;
        html.find('.cancel').on('hover:enter', function () {
          clearInterval(balanser_timer);
        });
        html.find('.change').on('hover:enter', function () {
          clearInterval(balanser_timer);
          filter.render().find('.filter--sort').trigger('hover:enter');
        });
        scroll.append(html);
        this.loading(false);
        balanser_timer = setInterval(function () {
          tic--;
          html.find('.timeout').text(tic);
          if (tic == 0) {
            clearInterval(balanser_timer);
            var keys = filter_sources.slice(0);
            if (!keys.length) keys = Lampa.Arrays.getKeys(sources);
            var indx = keys.indexOf(balanser);
            var next = null;
            for (var i = 1; i <= keys.length; i++) {
              var candidate = keys[(indx + i) % keys.length];
              if (!isSourceDisabled(candidate)) {
                next = candidate;
                break;
              }
            }
            if (next && next !== balanser) {
              balanser = next;
              if (Lampa.Activity.active().activity == _this5.activity) _this5.changeBalanser(balanser);
            }
          }
        }, 1000);
      };
      this.getLastEpisode = function (items) {
        var last_episode = 0;
        items.forEach(function (e) {
          if (typeof e.episode !== 'undefined') last_episode = Math.max(last_episode, parseInt(e.episode));
        });
        return last_episode;
      };

      /**
       * Начать навигацию по файлам
       */
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        if (!initialized) {
          initialized = true;
          this.initialize();
        }
        Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(object.movie));
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render(), files.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          up: function up() {
            if (Navigator.canmove('up')) {
              Navigator.move('up');
            } else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');else filter.show(Lampa.Lang.translate('title_filter'), 'filter');
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          gone: function gone() {
            clearInterval(balanser_timer);
          },
          back: this.back
        });
        Lampa.Controller.toggle('content');
      };
      this.render = function () {
        return files.render();
      };
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.pause = function () {
        this.stop();
      };
      this.stop = function () {
        network.clear();
        clearInterval(balanser_timer);
        if (source && source.cancel) source.cancel();
      };
      this.destroy = function () {
        network.clear();
        this.clearImages();
        files.destroy();
        scroll.destroy();
        clearInterval(balanser_timer);
        if (source) source.destroy();
      };
    }

    var SOURCES_KEY = 'BO_SOURCES';
    var SOURCES_SORT_KEY = 'BO_SOURCES_SORT';
    var SOURCES_HIDE_KEY = 'BO_SOURCES_HIDE';
    function normalizeSourceName(name) {
      return (name || '').toString().trim().toLowerCase();
    }
    function mapSourceName(name) {
      var key = normalizeSourceName(name);
      return key;
    }
    function extractSourceTitle(item) {
      if (!item) return '';
      return item.display_name || item.displayName || item.display || item.title || item.label || item.name || item.key || '';
    }
    function getStoredSources() {
      var sources = Lampa.Storage.get(SOURCES_KEY, null);
      return Array.isArray(sources) ? sources : [];
    }
    function setStoredSources(list) {
      Lampa.Storage.set(SOURCES_KEY, list);
    }
    function getHiddenSources() {
      var hidden = Lampa.Storage.get(SOURCES_HIDE_KEY, []);
      if (!Array.isArray(hidden)) return [];
      return hidden.map(mapSourceName).filter(Boolean);
    }
    function getSortedSources() {
      var sorted = Lampa.Storage.get(SOURCES_SORT_KEY, []);
      if (!Array.isArray(sorted)) return [];
      return sorted.map(mapSourceName).filter(Boolean);
    }
    function buildSourcesList() {
      var sources = getStoredSources();
      if (!sources.length) {
        return $("<div class=\"settings-param-text\">".concat(Lampa.Lang.translate('bandera_online_sources_empty'), "</div>"));
      }
      var hidden = getHiddenSources();
      var sorted = getSortedSources();
      var items = sources.map(function (item) {
        var key = mapSourceName(item.key || item.name);
        return {
          key: key,
          title: extractSourceTitle(item),
          enabled: item.enabled !== false
        };
      }).filter(function (item) {
        return item.key;
      });
      if (sorted.length) {
        var ordered = [];
        sorted.forEach(function (key) {
          var found = items.find(function (item) {
            return item.key === key;
          });
          if (found) ordered.push(found);
        });
        items.forEach(function (item) {
          if (!sorted.includes(item.key)) ordered.push(item);
        });
        items = ordered;
      }
      var list = $('<div class="menu-edit-list"></div>');
      items.forEach(function (item) {
        var status_key = item.enabled ? 'bandera_online_sources_enabled' : 'bandera_online_sources_disabled';
        var status = Lampa.Lang.translate(status_key);
        var row = $("<div class=\"menu-edit-list__item bandera-online-sources__item\" data-key=\"".concat(item.key, "\">\n            <div class=\"menu-edit-list__title bandera-online-sources__title selector\">\n                <span class=\"bandera-online-sources__name\">").concat(item.title || item.key, "</span>\n                <span class=\"bandera-online-sources__status ").concat(item.enabled ? 'is-enabled' : 'is-disabled', "\">").concat(status, "</span>\n            </div>\n            <div class=\"menu-edit-list__move move-up selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 12L11 3L20 12\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__move move-down selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 2L11 11L20 2\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__toggle toggle selector\">\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"1.89111\" y=\"1.78369\" width=\"21.793\" height=\"21.793\" rx=\"3.5\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M7.44873 12.9658L10.8179 16.3349L18.1269 9.02588\" stroke=\"currentColor\" stroke-width=\"3\" class=\"dot\" opacity=\"0\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n        </div>"));
        row.toggleClass('hidden', hidden.includes(item.key));
        row.find('.dot').attr('opacity', row.hasClass('hidden') ? 0 : 1);
        row.find('.move-up').on('hover:enter', function () {
          var prev = row.prev();
          if (prev.length) row.insertBefore(prev);
        });
        row.find('.move-down').on('hover:enter', function () {
          var next = row.next();
          if (next.length) row.insertAfter(next);
        });
        row.find('.toggle').on('hover:enter', function () {
          row.toggleClass('hidden');
          row.find('.dot').attr('opacity', row.hasClass('hidden') ? 0 : 1);
        });
        list.append(row);
      });
      return list;
    }
    function saveSourcesSettings(list) {
      var sort = [];
      var hide = [];
      list.find('.menu-edit-list__item').each(function () {
        var key = mapSourceName($(this).data('key'));
        if (!key) return;
        sort.push(key);
        if ($(this).hasClass('hidden')) hide.push(key);
      });
      Lampa.Storage.set(SOURCES_SORT_KEY, sort);
      Lampa.Storage.set(SOURCES_HIDE_KEY, hide);
    }
    function openThanksModal() {
      openQrModal();
    }
    function openSourcesModal() {
      var wrapper = $('<div class="bandera-online-sources"></div>');
      var list = null;
      var actions = null;
      function buildActions() {
        var container = $('<div class="bandera-online-sources__actions"></div>');
        var syncButton = $('<div class="modal__button bandera-online-sources__action selector"></div>');
        syncButton.addClass('bandera-online-sources__action--sync');
        syncButton.text(Lampa.Lang.translate('bandera_online_sources_sync'));
        syncButton.on('click hover:enter', sync);
        container.append(syncButton);
        return container;
      }
      function render(update_modal) {
        list = buildSourcesList();
        if (!actions) actions = buildActions();
        wrapper.empty().append(actions).append(list);
        if (update_modal && Lampa.Modal && Lampa.Modal.update) {
          Lampa.Modal.update(wrapper);
        }
      }
      function sync() {
        var network = new Lampa.Reguest();
        network.silent(api_base + '/sources', function (json) {
          if (json && json.ok && Array.isArray(json.sources)) {
            setStoredSources(json.sources);
            render(true);
            Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_sync_success'));
          } else {
            Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_sync_error'));
          }
        }, function () {
          Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_sync_error'));
        });
      }
      function closeAndSave() {
        if (list && list.hasClass('menu-edit-list')) saveSourcesSettings(list);
        Lampa.Modal.close();
        Lampa.Controller.toggle('settings_component');
      }
      render();
      Lampa.Modal.open({
        title: Lampa.Lang.translate('bandera_online_settings_sources'),
        html: wrapper,
        size: 'medium',
        scroll_to_center: true,
        select: actions && actions.find('.bandera-online-sources__action--sync')[0],
        onBack: function onBack() {
          closeAndSave();
        }
      });
    }
    function initSettings() {
      var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
      if (!SettingsApi || !SettingsApi.addComponent) return;
      SettingsApi.addComponent({
        component: 'bandera_online',
        name: Lampa.Lang.translate('bandera_online_settings_title'),
        icon: "<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"currentColor\"></rect>\n            <path d=\"M0 10.6667H28V0H0V10.6667Z\" fill=\"#156DD1\"></path>\n            <path d=\"M0 20H28V10.6667H0V20Z\" fill=\"#FFD948\"></path>\n        </svg>"
      });
      SettingsApi.addParam({
        component: 'bandera_online',
        param: {
          name: 'bandera_online_thanks',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('bandera_online_settings_thanks')
        },
        onChange: function onChange() {
          openThanksModal();
        }
      });
      SettingsApi.addParam({
        component: 'bandera_online',
        param: {
          name: 'bandera_online_sources',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('bandera_online_settings_sources')
        },
        onChange: function onChange() {
          openSourcesModal();
        }
      });
    }

    function startPlugin() {
      window.bandera_online = true;
      function resetTemplates() {
        Lampa.Template.add('bandera_online_full', "<div class=\"online-prestige online-prestige--full selector\">\n            <div class=\"online-prestige__img\">\n                <img alt=\"\">\n                <div class=\"online-prestige__loader\"></div>\n            </div>\n            <div class=\"online-prestige__body\">\n                <div class=\"online-prestige__head\">\n                    <div class=\"online-prestige__title\">{title}</div>\n                    <div class=\"online-prestige__time\">{time}</div>\n                </div>\n\n                <div class=\"online-prestige__timeline\"></div>\n\n                <div class=\"online-prestige__footer\">\n                    <div class=\"online-prestige__info\">{info}</div>\n                    <div class=\"online-prestige__quality\">{quality}</div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add('bandera_online_does_not_answer', "<div class=\"online-empty\">\n            <div class=\"online-empty__title\">\n                #{online_balanser_dont_work}\n            </div>\n            <div class=\"online-empty__time\">\n                #{online_balanser_timeout}\n            </div>\n            <div class=\"online-empty__buttons\">\n                <div class=\"online-empty__button selector cancel\">#{cancel}</div>\n                <div class=\"online-empty__button selector change\">#{online_change_balanser}</div>\n            </div>\n            <div class=\"online-empty__templates\">\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add('bandera_online_rate', "<div class=\"online-prestige-rate\">\n            <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z\" fill=\"#fff\"></path>\n            </svg>\n            <span>{rate}</span>\n        </div>");
        Lampa.Template.add('bandera_online_folder', "<div class=\"online-prestige online-prestige--folder selector\">\n            <div class=\"online-prestige__folder\">\n                <svg viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"></rect>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"></path>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"></rect>\n                </svg>\n            </div>\n            <div class=\"online-prestige__body\">\n                <div class=\"online-prestige__head\">\n                    <div class=\"online-prestige__title\">{title}</div>\n                    <div class=\"online-prestige__time\">{time}</div>\n                </div>\n\n                <div class=\"online-prestige__footer\">\n                    <div class=\"online-prestige__info\">{info}</div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add('bandera_online_watched', "<div class=\"online-prestige online-prestige-watched selector\">\n            <div class=\"online-prestige-watched__icon\">\n                <svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"10.5\" cy=\"10.5\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M14.8477 10.5628L8.20312 14.399L8.20313 6.72656L14.8477 10.5628Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"online-prestige-watched__body\">\n                \n            </div>\n        </div>");
      }
      var manifest = {
        type: 'video',
        version: '2.6.5',
        name: '[Free] Bandera Online',
        //description: 'Плагин для просмотра онлайн сериалов и фильмов',
        component: 'bandera_online',
        onContextMenu: function onContextMenu(object) {
          return {
            name: Lampa.Lang.translate('online_watch'),
            description: ''
          };
        },
        onContextLauch: function onContextLauch(object) {
          resetTemplates();
          Lampa.Component.add('bandera_online', component);
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('title_online'),
            component: 'bandera_online',
            search: object.title,
            search_one: object.title,
            search_two: object.original_title,
            movie: object,
            page: 1
          });
        }
      };
      Lampa.Manifest.plugins = manifest;
      Lampa.Lang.add({
        online_watch: {
          ru: 'Смотреть онлайн',
          en: 'Watch online',
          ua: 'Дивитися онлайн',
          zh: '在线观看'
        },
        online_no_watch_history: {
          ru: 'Нет истории просмотра',
          en: 'No browsing history',
          ua: 'Немає історії перегляду',
          zh: '没有浏览历史'
        },
        online_video: {
          ru: 'Видео',
          en: 'Video',
          ua: 'Відео',
          zh: '视频'
        },
        online_nolink: {
          ru: 'Не удалось извлечь ссылку',
          uk: 'Неможливо отримати посилання',
          en: 'Failed to fetch link',
          zh: '获取链接失败'
        },
        online_waitlink: {
          ru: 'Работаем над извлечением ссылки, подождите...',
          uk: 'Працюємо над отриманням посилання, зачекайте...',
          en: 'Working on extracting the link, please wait...',
          zh: '正在提取链接，请稍候...'
        },
        online_balanser: {
          ru: 'Источник',
          uk: 'Джерело',
          en: 'Source',
          zh: '来源'
        },
        helper_online_file: {
          ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
          uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
          en: 'Hold the "OK" key to bring up the context menu',
          zh: '按住“确定”键调出上下文菜单'
        },
        online_query_start: {
          ru: 'По запросу',
          uk: 'На запит',
          en: 'On request',
          zh: '根据要求'
        },
        online_query_end: {
          ru: 'нет результатов',
          uk: 'немає результатів',
          en: 'no results',
          zh: '没有结果'
        },
        title_proxy: {
          ru: 'Прокси',
          uk: 'Проксі',
          en: 'Proxy',
          zh: '代理人'
        },
        online_proxy_title: {
          ru: 'Основной прокси',
          uk: 'Основний проксі',
          en: 'Main proxy',
          zh: '主要代理'
        },
        online_proxy_descr: {
          ru: 'Будет использоваться для всех балансеров',
          uk: 'Використовуватиметься для всіх балансерів',
          en: 'Will be used for all balancers',
          zh: '将用于所有平衡器'
        },
        online_proxy_placeholder: {
          ru: 'Например: http://proxy.com',
          uk: 'Наприклад: http://proxy.com',
          en: 'For example: http://proxy.com',
          zh: '例如：http://proxy.com'
        },
        online_voice_subscribe: {
          ru: 'Подписаться на перевод',
          uk: 'Підписатися на переклад',
          en: 'Subscribe to translation',
          zh: '订阅翻译'
        },
        online_voice_success: {
          ru: 'Вы успешно подписались',
          uk: 'Ви успішно підписалися',
          en: 'You have successfully subscribed',
          zh: '您已成功订阅'
        },
        online_voice_error: {
          ru: 'Возникла ошибка',
          uk: 'Виникла помилка',
          en: 'An error has occurred',
          zh: '发生了错误'
        },
        online_clear_all_marks: {
          ru: 'Очистить все метки',
          uk: 'Очистити всі мітки',
          en: 'Clear all labels',
          zh: '清除所有标签'
        },
        online_clear_all_timecodes: {
          ru: 'Очистить все тайм-коды',
          uk: 'Очистити всі тайм-коди',
          en: 'Clear all timecodes',
          zh: '清除所有时间代码'
        },
        online_change_balanser: {
          ru: 'Изменить балансер',
          uk: 'Змінити балансер',
          en: 'Change balancer',
          zh: '更改平衡器'
        },
        online_balanser_dont_work: {
          ru: 'Балансер ({balanser}) не отвечает на запрос.',
          uk: 'Балансер ({balanser}) не відповідає на запит.',
          en: 'Balancer ({balanser}) does not respond to the request.',
          zh: '平衡器（{balanser}）未响应请求。'
        },
        online_balanser_timeout: {
          ru: 'Балансер будет переключен автоматически через <span class="timeout">10</span> секунд.',
          uk: 'Балансер буде переключено автоматично через <span class="timeout">10</span> секунд.',
          en: 'Balancer will be switched automatically in <span class="timeout">10</span> seconds.',
          zh: '平衡器将在<span class="timeout">10</span>秒内自动切换。'
        },
        bandera_online_settings_title: {
          ru: 'Bandera Online',
          uk: 'Bandera Online',
          ua: 'Bandera Online',
          en: 'Bandera Online'
        },
        bandera_online_settings_thanks: {
          ru: 'Подяка',
          uk: 'Подяка',
          ua: 'Подяка',
          en: 'Thanks'
        },
        bandera_online_settings_sources: {
          ru: 'Джерела',
          uk: 'Джерела',
          ua: 'Джерела',
          en: 'Sources'
        },
        bandera_online_sources_sync: {
          ru: 'Синхронізувати джерела',
          uk: 'Синхронізувати джерела',
          ua: 'Синхронізувати джерела',
          en: 'Sync sources'
        },
        bandera_online_sources_save: {
          ru: 'Зберегти та закрити',
          uk: 'Зберегти та закрити',
          ua: 'Зберегти та закрити',
          en: 'Save and close'
        },
        bandera_online_sources_empty: {
          ru: 'Список джерел ще не синхронізований.',
          uk: 'Список джерел ще не синхронізований.',
          ua: 'Список джерел ще не синхронізований.',
          en: 'Sources list has not been synced yet.'
        },
        bandera_online_sources_enabled: {
          ru: 'Увімкнено',
          uk: 'Увімкнено',
          ua: 'Увімкнено',
          en: 'Enabled'
        },
        bandera_online_sources_disabled: {
          ru: 'Вимкнено',
          uk: 'Вимкнено',
          ua: 'Вимкнено',
          en: 'Disabled'
        },
        bandera_online_sources_sync_success: {
          ru: 'Джерела синхронізовано',
          uk: 'Джерела синхронізовано',
          ua: 'Джерела синхронізовано',
          en: 'Sources synced'
        },
        bandera_online_sources_sync_error: {
          ru: 'Не вдалося синхронізувати джерела',
          uk: 'Не вдалося синхронізувати джерела',
          ua: 'Не вдалося синхронізувати джерела',
          en: 'Failed to sync sources'
        }
      });
      initSettings();
      Lampa.Template.add('bandera_online_css', "\n        <style>\n        @charset 'UTF-8';.online-prestige{position:relative;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;will-change:transform}.online-prestige__body{padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}@media screen and (max-width:480px){.online-prestige__body{padding:.8em 1.2em}}.online-prestige__img{position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}.online-prestige__img>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.online-prestige__img--loaded>img{opacity:1}@media screen and (max-width:480px){.online-prestige__img{width:7em;min-height:6em}}.online-prestige__folder{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige__folder>svg{width:4.4em !important;height:4.4em !important}.online-prestige__viewed{position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}.online-prestige__viewed>svg{width:1.5em !important;height:1.5em !important}.online-prestige__episode-number{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}.online-prestige__loader{position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain}.online-prestige__head,.online-prestige__footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__timeline{margin:.8em 0}.online-prestige__timeline>.time-line{display:block !important}.online-prestige__title{font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}@media screen and (max-width:480px){.online-prestige__title{font-size:1.4em}}.online-prestige__time{padding-left:2em}.online-prestige__info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__info>*{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.online-prestige__quality{padding-left:1em;white-space:nowrap}.online-prestige__scan-file{position:absolute;bottom:0;left:0;right:0}.online-prestige__scan-file .broadcast__scan{margin:0}.online-prestige .online-prestige-split{font-size:.8em;margin:0 1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige.focus::after{content:'';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;-moz-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}.online-prestige+.online-prestige{margin-top:1.5em}.online-prestige--folder .online-prestige__footer{margin-top:.8em}.online-prestige-watched{padding:1em}.online-prestige-watched__icon>svg{width:1.5em;height:1.5em}.online-prestige-watched__body{padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.online-prestige-watched__body>span+span::before{content:' ● ';vertical-align:top;display:inline-block;margin:0 .5em}.online-prestige-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige-rate>svg{width:1.3em !important;height:1.3em !important}.online-prestige-rate>span{font-weight:600;font-size:1.1em;padding-left:.7em}.online-empty{line-height:1.4}.online-empty__title{font-size:1.8em;margin-bottom:.3em}.online-empty__time{font-size:1.2em;font-weight:300;margin-bottom:1.6em}.online-empty__buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-empty__buttons>*+*{margin-left:1em}.online-empty__button{background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;-moz-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}.online-empty__button.focus{background:#fff;color:black}.online-empty__templates .online-empty-template:nth-child(2){opacity:.5}.online-empty__templates .online-empty-template:nth-child(3){opacity:.2}.online-empty-template{background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template>*{background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template__ico{width:4em;height:4em;margin-right:2.4em}.online-empty-template__body{height:1.7em;width:70%}.online-empty-template+.online-empty-template{margin-top:1em}\n        .bandera-online-sources__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1.2em;position:-webkit-sticky;position:sticky;top:0;z-index:2;background:-webkit-gradient(linear,left top,left bottom,from(#262829),to(rgba(38,40,41,0.92)));background:-webkit-linear-gradient(top,#262829 0,rgba(38,40,41,0.92) 100%);background:-o-linear-gradient(top,#262829 0,rgba(38,40,41,0.92) 100%);background:linear-gradient(180deg,#262829 0,rgba(38,40,41,0.92) 100%);padding-bottom:.4em}.bandera-online-sources__action{padding:.7em 1.1em;font-size:1em}.bandera-online-sources__title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.6em}.bandera-online-sources__name{font-size:1em;line-height:1.2}.bandera-online-sources__status{font-size:.7em;padding:.2em .5em;-webkit-border-radius:.3em;border-radius:.3em;color:#fff;text-transform:uppercase;line-height:1}.bandera-online-sources__status.is-enabled{background-color:#46b85a}.bandera-online-sources__status.is-disabled{background-color:#d24a4a}\n        </style>\n    ");
      $('body').append(Lampa.Template.get('bandera_online_css', {}, true));
      var button = "<div class=\"full-start__button selector view--online\" data-subtitle=\"[Free] Bandera Online v".concat(manifest.version, "\">\n        <svg viewBox=\"0 -4 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g clip-path=\"url(#clip0_503_2809)\"> <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"white\"></rect> <mask id=\"mask0_503_2809\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"28\" height=\"20\"> <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"white\"></rect> </mask> <g mask=\"url(#mask0_503_2809)\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 10.6667H28V0H0V10.6667Z\" fill=\"#156DD1\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 20H28V10.6667H0V20Z\" fill=\"#FFD948\"></path> </g> </g> <defs> <clipPath id=\"clip0_503_2809\"> <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"white\"></rect> </clipPath> </defs> </g></svg>\n        <span>\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 t.me/mmssixxx</span>\n    </div>");
      Lampa.Component.add('bandera_online', component);
      resetTemplates();
      Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
          var btn = $(Lampa.Lang.translate(button));
          btn.on('hover:enter', function () {
            resetTemplates();
            Lampa.Component.add('bandera_online', component);
            Lampa.Activity.push({
              url: '',
              title: "Спільнота - t.me/mmssixxx",
              component: 'bandera_online',
              search: e.data.movie.title,
              search_one: e.data.movie.title,
              search_two: e.data.movie.original_title,
              movie: e.data.movie,
              page: 1
            });
          });
          e.object.activity.render().find('.view--torrent').after(btn);
        }
      });
    }
    if (!window.bandera_online && Lampa.Manifest.app_digital >= 155) startPlugin();

})();
