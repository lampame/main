(function () {
    'use strict';

    function uaflix(component, _object) {
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
      var api_base = 'https://fearless-accomplished-kestrel.anvil.app/_/api/v1';
      var self = this;
      this.searchByTitle = function (_object, title) {
        object = _object;
        search(title);
      };
      this.search = function (_object, data) {
        object = _object;
        if (!data || !data.length) return component.doesNotAnswer();
        selected = data[0];
        series = null;
        episodes_cache = {};
        if (isMovie(selected.href)) loadMovie(selected.href);else loadSeries(selected.href);
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
      this.destroy = function () {
        network.clear();
        selected = null;
        series = null;
        episodes_cache = {};
      };
      function isMovie(href) {
        return /\/films\//.test(href) || /\/film\//.test(href);
      }
      function addParam(url, key, value) {
        if (!value) return url;
        return Lampa.Utils.addUrlComponent(url, key + '=' + encodeURIComponent(value));
      }
      function getYear(movie) {
        var date = movie.release_date || movie.first_air_date || movie.year || movie.start_date;
        return date ? (date + '').slice(0, 4) : '';
      }
      function search(title) {
        var url = api_base + '/search';
        var movie = object.movie || {};
        url = addParam(url, 'source', 'uaflix');
        url = addParam(url, 'title', title);
        url = addParam(url, 'original_title', movie.original_title || movie.original_name);
        url = addParam(url, 'imdb_id', movie.imdb_id);
        url = addParam(url, 'kinopoisk_id', movie.kinopoisk_id);
        url = addParam(url, 'year', getYear(movie));
        network.silent(url, function (json) {
          var items = json && json.ok ? json.items || [] : [];
          if (!items.length) {
            component.doesNotAnswer();
            return;
          }
          items = items.map(function (item) {
            return {
              id: item.href,
              title: item.title,
              year: item.year,
              href: item.href,
              poster: item.poster
            };
          });
          if (items.length == 1 || object.clarification) {
            self.search(object, items);
          } else {
            component.similars(items);
            component.loading(false);
          }
        }, function () {
          component.doesNotAnswer();
        });
      }
      function loadMovie(href) {
        var url = api_base + '/uaflix/movie';
        url = addParam(url, 'href', href);
        network.silent(url, function (json) {
          var streams = json && json.ok ? json.streams || [] : [];
          if (!streams.length) {
            component.doesNotAnswer();
            return;
          }
          var stream_info = buildQualityMap(streams);
          var item = {
            title: object.movie.title,
            file: stream_info.file,
            quality: stream_info.label,
            qualitys: stream_info.qualitys,
            info: ''
          };
          component.draw([item], {
            onEnter: function onEnter(element) {
              var first = {
                url: element.file,
                timeline: element.timeline,
                quality: element.qualitys,
                title: element.title,
                subtitles: element.subtitles
              };
              Lampa.Player.play(first);
              Lampa.Player.playlist([first]);
              element.mark();
            },
            onContextMenu: function onContextMenu(element, html, data, call) {
              call({
                file: element.file,
                quality: element.qualitys
              });
            }
          });
          component.loading(false);
        }, function () {
          component.doesNotAnswer();
        });
      }
      function loadSeries(href) {
        var url = api_base + '/uaflix/series';
        url = addParam(url, 'href', href);
        network.silent(url, function (json) {
          if (!json || !json.ok) {
            component.doesNotAnswer();
            return;
          }
          series = json;
          filter();
          buildEpisodes();
        }, function () {
          component.doesNotAnswer();
        });
      }
      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        if (series) {
          if (series.voices && series.voices.length) {
            filter_items.voice = series.voices.map(function (voice) {
              return voice.display_name || voice.id;
            });
          }
          if (series.seasons && series.seasons.length) {
            filter_items.season = series.seasons.map(function (season) {
              return Lampa.Lang.translate('torrent_serial_season') + ' ' + season;
            });
          }
        }
        if (choice.season >= filter_items.season.length) choice.season = 0;
        if (choice.voice >= filter_items.voice.length) choice.voice = 0;
        if (filter_items.voice[choice.voice]) choice.voice_name = filter_items.voice[choice.voice];
        component.filter(filter_items, choice);
      }
      function buildEpisodes() {
        if (!series || !series.voices || !series.voices.length || !series.seasons || !series.seasons.length) {
          component.loading(false);
          return component.doesNotAnswer();
        }
        var voice = series.voices[choice.voice] || series.voices[0];
        var season = series.seasons[choice.season] || series.seasons[0];
        var cache_key = voice.id + ':' + season;
        choice.voice_name = voice.display_name || voice.id;
        if (episodes_cache[cache_key]) {
          renderEpisodes(episodes_cache[cache_key], season, voice);
          return;
        }
        var url = api_base + '/uaflix/episodes';
        url = addParam(url, 'href', selected.href);
        url = addParam(url, 'voice', voice.id);
        url = addParam(url, 'season', season);
        network.silent(url, function (json) {
          var episodes = json && json.ok ? json.episodes || [] : [];
          if (!episodes.length) {
            component.doesNotAnswer();
            return;
          }
          episodes_cache[cache_key] = episodes;
          renderEpisodes(episodes, season, voice);
        }, function () {
          component.doesNotAnswer();
        });
      }
      function renderEpisodes(episodes, season, voice) {
        var items = episodes.map(function (episode) {
          return {
            title: episode.title,
            file: episode.file,
            id: episode.id,
            season: season,
            episode: episode.number,
            info: voice.display_name || voice.id,
            voice_name: voice.display_name || voice.id,
            voice_id: voice.id
          };
        });
        component.draw(items, {
          onEnter: function onEnter(item) {
            getStream(item, function (stream) {
              var first = {
                url: stream.file,
                timeline: item.timeline,
                quality: stream.qualitys,
                title: item.title,
                subtitles: item.subtitles
              };
              Lampa.Player.play(first);
              var playlist = [];
              items.forEach(function (elem) {
                var cell = {
                  url: function url(call) {
                    getStream(elem, function (next) {
                      cell.url = next.file;
                      cell.quality = next.qualitys;
                      elem.mark();
                      call();
                    }, function () {
                      cell.url = '';
                      call();
                    });
                  },
                  timeline: elem.timeline,
                  title: elem.title,
                  subtitles: elem.subtitles
                };
                if (elem == item) {
                  cell.url = stream.file;
                  cell.quality = stream.qualitys;
                }
                playlist.push(cell);
              });
              Lampa.Player.playlist(playlist);
              item.mark();
            }, function () {
              Lampa.Noty.show(Lampa.Lang.translate('online_nolink'));
            });
          },
          onContextMenu: function onContextMenu(item, html, data, call) {
            getStream(item, function (stream) {
              call({
                file: stream.file,
                quality: stream.qualitys
              });
            });
          }
        });
        component.loading(false);
      }
      function buildQualityMap(streams) {
        var qualitys = {};
        streams.forEach(function (stream) {
          if (stream.quality && stream.url) qualitys[stream.quality] = stream.url;
        });
        var preferred = Lampa.Storage.get('video_quality_default', '1080') + 'p';
        var keys = Object.keys(qualitys).sort(function (a, b) {
          return parseInt(b) - parseInt(a);
        });
        var file = qualitys[preferred] || qualitys[keys[0]];
        if (!file && streams[0]) file = streams[0].url;
        return {
          file: file,
          qualitys: qualitys,
          label: keys.length ? keys[0] : ''
        };
      }
      function getStream(item, success, fail) {
        var url = api_base + '/uaflix/stream';
        url = addParam(url, 'url', item.file);
        network.silent(url, function (json) {
          var streams = json && json.ok ? json.streams || [] : [];
          if (!streams.length) {
            if (fail) fail();
            return;
          }
          success(buildQualityMap(streams));
        }, function () {
          if (fail) fail();
        });
      }
    }

    function uatut(component, _object) {
      var network = new Lampa.Reguest();
      var object = _object;
      var selected = null;
      var series = null;
      var filter_items = {
        season: [],
        voice: []
      };
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      var api_base = 'https://fearless-accomplished-kestrel.anvil.app/_/api/v1';
      var self = this;
      this.searchByTitle = function (_object, title) {
        object = _object;
        search(title);
      };
      this.search = function (_object, data) {
        object = _object;
        if (!data || !data.length) return component.doesNotAnswer();
        selected = data[0];
        series = null;
        if (isMovie(selected.category)) loadMovie(selected.id);else loadSeries(selected.id);
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
      this.destroy = function () {
        network.clear();
        selected = null;
        series = null;
      };
      function isMovie(category) {
        if (!category) return false;
        return /фільм|фильм/i.test(category);
      }
      function addParam(url, key, value) {
        if (!value) return url;
        return Lampa.Utils.addUrlComponent(url, key + '=' + encodeURIComponent(value));
      }
      function getYear(movie) {
        var date = movie.release_date || movie.first_air_date || movie.year || movie.start_date;
        return date ? (date + '').slice(0, 4) : '';
      }
      function search(title) {
        var url = api_base + '/search';
        var movie = object.movie || {};
        url = addParam(url, 'source', 'uatut');
        url = addParam(url, 'title', title);
        url = addParam(url, 'original_title', movie.original_title || movie.original_name);
        url = addParam(url, 'imdb_id', movie.imdb_id);
        url = addParam(url, 'kinopoisk_id', movie.kinopoisk_id);
        url = addParam(url, 'year', getYear(movie));
        network.silent(url, function (json) {
          var items = json && json.ok ? json.items || [] : [];
          if (movie.imdb_id) {
            var exact = items.filter(function (item) {
              return item.imdb_id == movie.imdb_id;
            });
            if (exact.length) items = exact;
          }
          if (!items.length) {
            component.doesNotAnswer();
            return;
          }
          items = items.map(function (item) {
            return {
              id: item.id,
              imdb_id: item.imdb_id,
              title: item.title,
              year: item.year,
              category: item.category
            };
          });
          if (items.length == 1 || object.clarification) {
            self.search(object, items);
          } else {
            component.similars(items);
            component.loading(false);
          }
        }, function () {
          component.doesNotAnswer();
        });
      }
      function loadMovie(id) {
        var url = api_base + '/uatut/movie';
        url = addParam(url, 'id', id);
        network.silent(url, function (json) {
          if (!json || !json.ok || !json.stream) {
            component.doesNotAnswer();
            return;
          }
          var item = {
            title: object.movie.title,
            file: json.stream,
            quality: '',
            info: ''
          };
          component.draw([item], {
            onEnter: function onEnter(element) {
              var first = {
                url: element.file,
                timeline: element.timeline,
                title: element.title,
                subtitles: element.subtitles
              };
              Lampa.Player.play(first);
              Lampa.Player.playlist([first]);
              element.mark();
            },
            onContextMenu: function onContextMenu(element, html, data, call) {
              call({
                file: element.file
              });
            }
          });
          component.loading(false);
        }, function () {
          component.doesNotAnswer();
        });
      }
      function loadSeries(id) {
        var url = api_base + '/uatut/series';
        url = addParam(url, 'id', id);
        network.silent(url, function (json) {
          if (!json || !json.ok || !json.voices || !json.voices.length) {
            component.doesNotAnswer();
            return;
          }
          series = json;
          filter();
          buildEpisodes();
        }, function () {
          component.doesNotAnswer();
        });
      }
      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        if (series && series.voices && series.voices.length) {
          filter_items.voice = series.voices.map(function (voice) {
            return normalizeTitle(voice.name);
          });
          var active_voice = series.voices[choice.voice] || series.voices[0];
          var seasons = active_voice.seasons || [];
          filter_items.season = seasons.map(function (season) {
            return normalizeTitle(season.title);
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
        var season = seasons[choice.season];
        if (!season || !season.episodes || !season.episodes.length) {
          component.doesNotAnswer();
          return;
        }
        var season_number = parseNumber(season.title, choice.season + 1);
        var items = season.episodes.map(function (episode, index) {
          return {
            title: episode.title,
            file: episode.file,
            id: episode.id,
            season: season_number,
            episode: parseNumber(episode.title, index + 1),
            info: normalizeTitle(voice.name),
            voice_name: normalizeTitle(voice.name)
          };
        });
        component.draw(items, {
          onEnter: function onEnter(item) {
            var first = {
              url: item.file,
              timeline: item.timeline,
              title: item.title,
              subtitles: item.subtitles
            };
            Lampa.Player.play(first);
            var playlist = [];
            items.forEach(function (elem) {
              var cell = {
                url: elem.file,
                timeline: elem.timeline,
                title: elem.title,
                subtitles: elem.subtitles
              };
              playlist.push(cell);
            });
            Lampa.Player.playlist(playlist);
            item.mark();
          },
          onContextMenu: function onContextMenu(item, html, data, call) {
            call({
              file: item.file
            });
          }
        });
        component.loading(false);
      }
      function normalizeTitle(value) {
        return (value || '').trim();
      }
      function parseNumber(value, fallback) {
        var match = (value || '').match(/(\\d+)/);
        return match ? parseInt(match[1]) : fallback;
      }
    }

    function kurwabober(component, _object) {
      var network = new Lampa.Reguest();
      var object = _object;
      var selected = null;
      var series = null;
      var filter_items = {
        season: [],
        voice: []
      };
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      var api_base = 'https://fearless-accomplished-kestrel.anvil.app/_/api/v1';
      var self = this;
      this.searchByTitle = function (_object, title) {
        object = _object;
        search(title);
      };
      this.search = function (_object, data) {
        object = _object;
        if (!data || !data.length) return component.doesNotAnswer();
        selected = data[0];
        series = null;
        resolve(selected);
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
      this.destroy = function () {
        network.clear();
        selected = null;
        series = null;
      };
      function addParam(url, key, value) {
        if (!value) return url;
        return Lampa.Utils.addUrlComponent(url, key + '=' + encodeURIComponent(value));
      }
      function search(title) {
        var url = api_base + '/kurwabober/search';
        var movie = object.movie || {};
        url = addParam(url, 'title', title);
        url = addParam(url, 'original_title', movie.original_title || movie.original_name);
        network.silent(url, function (json) {
          var items = json && json.ok ? json.items || [] : [];
          if (!items.length) {
            component.doesNotAnswer();
            return;
          }
          items = items.map(function (item) {
            return {
              id: item.tortuga || item.ashdi || item.name || item.eng_name,
              title: item.name,
              orig_title: item.eng_name,
              year: item.year,
              tortuga: item.tortuga,
              ashdi: item.ashdi
            };
          });
          if (items.length == 1 || object.clarification) {
            self.search(object, items);
          } else {
            component.similars(items);
            component.loading(false);
          }
        }, function () {
          component.doesNotAnswer();
        });
      }
      function resolve(item) {
        var url = api_base + '/kurwabober/resolve';
        url = addParam(url, 'tortuga', item.tortuga);
        url = addParam(url, 'ashdi', item.ashdi);
        network.silent(url, function (json) {
          var sources = json && json.ok ? json.sources || {} : {};
          var source_list = Object.keys(sources).map(function (key) {
            return {
              id: key,
              data: sources[key]
            };
          });
          if (!source_list.length) {
            component.doesNotAnswer();
            return;
          }
          var has_series = source_list.some(function (entry) {
            return entry.data && entry.data.type == 'series';
          });
          if (has_series) {
            series = buildSeriesVoices(source_list);
            filter();
            buildEpisodes();
          } else {
            buildMovies(source_list);
          }
        }, function () {
          component.doesNotAnswer();
        });
      }
      function buildSeriesVoices(source_list) {
        var voices = [];
        source_list.forEach(function (entry) {
          var data = entry.data;
          if (!data || data.type !== 'series' || !data.voices || !data.voices.length) return;
          data.voices.forEach(function (voice) {
            voices.push({
              name: voice.name || entry.id,
              seasons: voice.seasons || []
            });
          });
        });
        return {
          voices: voices
        };
      }
      function buildMovies(source_list) {
        var items = source_list.map(function (entry) {
          var data = entry.data || {};
          return {
            title: object.movie.title,
            file: data.file,
            quality: '',
            info: entry.id
          };
        }).filter(function (item) {
          return item.file;
        });
        if (!items.length) {
          component.doesNotAnswer();
          return;
        }
        component.draw(items, {
          onEnter: function onEnter(element) {
            var first = {
              url: element.file,
              timeline: element.timeline,
              title: element.title,
              subtitles: element.subtitles
            };
            Lampa.Player.play(first);
            Lampa.Player.playlist([first]);
            element.mark();
          },
          onContextMenu: function onContextMenu(element, html, data, call) {
            call({
              file: element.file
            });
          }
        });
        component.loading(false);
      }
      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        if (series && series.voices && series.voices.length) {
          filter_items.voice = series.voices.map(function (voice) {
            return normalizeTitle(voice.name);
          });
          var active_voice = series.voices[choice.voice] || series.voices[0];
          var seasons = active_voice.seasons || [];
          filter_items.season = seasons.map(function (season) {
            return normalizeTitle(season.title);
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
        var season = seasons[choice.season];
        if (!season || !season.episodes || !season.episodes.length) {
          component.doesNotAnswer();
          return;
        }
        var season_number = parseNumber(season.title, choice.season + 1);
        var items = season.episodes.map(function (episode, index) {
          return {
            title: episode.title,
            file: episode.file,
            id: episode.id,
            season: season_number,
            episode: parseNumber(episode.title, index + 1),
            info: normalizeTitle(voice.name),
            voice_name: normalizeTitle(voice.name)
          };
        });
        component.draw(items, {
          onEnter: function onEnter(item) {
            var first = {
              url: item.file,
              timeline: item.timeline,
              title: item.title,
              subtitles: item.subtitles
            };
            Lampa.Player.play(first);
            var playlist = [];
            items.forEach(function (elem) {
              var cell = {
                url: elem.file,
                timeline: elem.timeline,
                title: elem.title,
                subtitles: elem.subtitles
              };
              playlist.push(cell);
            });
            Lampa.Player.playlist(playlist);
            item.mark();
          },
          onContextMenu: function onContextMenu(item, html, data, call) {
            call({
              file: item.file
            });
          }
        });
        component.loading(false);
      }
      function normalizeTitle(value) {
        if (value === null || value === undefined) return '';
        return String(value).trim();
      }
      function parseNumber(value, fallback) {
        var match = String(value || '').match(/(\\d+)/);
        return match ? parseInt(match[1]) : fallback;
      }
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
        uatut: uatut,
        uaflix: uaflix,
        kurwabober: kurwabober
      };
      var balanser_titles = {
        uaflix: 'UAflix',
        uatut: 'UATuT',
        kurwabober: 'KurwaBober'
      };
      var last;
      var extended;
      var selected_id;
      var source;
      var balanser;
      var initialized;
      var balanser_timer;
      var images = [];
      var filter_sources = ['uatut', 'uaflix', 'kurwabober'];
      var filter_translate = {
        season: Lampa.Lang.translate('torrent_serial_season'),
        voice: Lampa.Lang.translate('torrent_parser_voice'),
        source: Lampa.Lang.translate('settings_rest_source')
      };
      this.initialize = function () {
        var _this = this;
        source = this.createSource();
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
        var donateButton = $('<div class="simple-button simple-button--filter selector filter--donate">' + '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.730 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"></path></g></svg>' + '<span>Подяка</span><div class="hide"></div>' + '</div>');
        filter.render().find('.filter--filter').after(donateButton);
        donateButton.on('hover:enter', function () {
          openQrModal();
        });
        files.appendFiles(scroll.render());
        files.appendHead(filter.render());
        scroll.body().addClass('torrent-list');
        scroll.minus(files.render().find('.explorer__files-head'));
        this.search();
      };
      this.changeBalanser = function (balanser_name) {
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
        if (!sources[balanser]) {
          balanser = 'uatut';
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
        var _this2 = this;
        var url = this.proxy('videocdn') + 'https://videocdn.tv/api/short';
        var query = object.search;
        url = Lampa.Utils.addUrlComponent(url, 'api_token=3i40G5TSECmLF77oAqnEgbx61ZWaOYaE');
        var display = function display(json) {
          if (object.movie.imdb_id) {
            var imdb = json.data.filter(function (elem) {
              return elem.imdb_id == object.movie.imdb_id;
            });
            if (imdb.length) json.data = imdb;
          }
          if (json.data && json.data.length) {
            if (json.data.length == 1 || object.clarification) {
              _this2.extendChoice();
              var kinopoisk_id = json.data[0].kp_id || json.data[0].filmId;
              if (kinopoisk_id && source.searchByKinopoisk) {
                source.searchByKinopoisk(object, kinopoisk_id);
              } else if (json.data[0].imdb_id && source.searchByImdbID) {
                source.searchByImdbID(object, json.data[0].imdb_id);
              } else if (source.search) {
                source.search(object, json.data);
              } else {
                _this2.doesNotAnswer();
              }
            } else {
              _this2.similars(json.data);
              _this2.loading(false);
            }
          } else _this2.doesNotAnswer(query);
        };
        var pillow = function pillow(a, c) {
          network.timeout(1000 * 15);
          network["native"]('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=' + encodeURIComponent(query), function (json) {
            json.data = json.films;
            display(json);
          }, function (a, c) {
            _this2.doesNotAnswer();
          }, false, {
            headers: {
              'X-API-KEY': '2d55adfd-019d-4567-bbf7-67d503f61b5a'
            }
          });
        };
        var letgo = function letgo(imdb_id) {
          if (imdb_id && source.searchByImdbID) {
            _this2.extendChoice();
            source.searchByImdbID(object, imdb_id);
          } else {
            var url_end = Lampa.Utils.addUrlComponent(url, imdb_id ? 'imdb_id=' + encodeURIComponent(imdb_id) : 'title=' + encodeURIComponent(query));
            network.timeout(1000 * 15);
            network["native"](url_end, function (json) {
              if (json.data && json.data.length) display(json);else {
                network["native"](Lampa.Utils.addUrlComponent(url, 'title=' + encodeURIComponent(query)), display.bind(_this2), pillow.bind(_this2));
              }
            }, pillow.bind(_this2));
          }
        };
        if (source.searchByTitle) {
          this.extendChoice();
          source.searchByTitle(object, object.movie.title || object.movie.name);
        } else if (object.movie.kinopoisk_id && source.searchByKinopoisk) {
          this.extendChoice();
          source.searchByKinopoisk(object, object.movie.kinopoisk_id);
        } else if (object.movie.imdb_id) {
          letgo(object.movie.imdb_id);
        } else if (object.movie.source == 'tmdb' || object.movie.source == 'cub') {
          var tmdburl = (object.movie.name ? 'tv' : 'movie') + '/' + object.movie.id + '/external_ids?api_key=4ef0d7355d9ffb5151e987764708ce96&language=ru';
          var baseurl = Lampa.TMDB.api(tmdburl);
          network.timeout(1000 * 10);
          network["native"](baseurl, function (ttid) {
            letgo(ttid.imdb_id);
          }, function (a, c) {
            letgo();
          });
        } else {
          letgo();
        }
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
        var _this3 = this;
        json.forEach(function (elem) {
          var info = [];
          var year = ((elem.start_date || elem.year || '') + '').slice(0, 4);
          if (elem.rating && elem.rating !== 'null' && elem.filmId) info.push(Lampa.Template.get('bandera_online_rate', {
            rate: elem.rating
          }, true));
          if (year) info.push(year);
          if (elem.countries && elem.countries.length) {
            info.push((elem.filmId ? elem.countries.map(function (c) {
              return c.country;
            }) : elem.countries).join(', '));
          }
          if (elem.categories && elem.categories.length) {
            info.push(elem.categories.slice(0, 4).join(', '));
          }
          var name = elem.title || elem.ru_title || elem.en_title || elem.nameRu || elem.nameEn;
          var orig = elem.orig_title || elem.nameEn || '';
          elem.title = name + (orig && orig !== name ? ' / ' + orig : '');
          elem.time = elem.filmLength || '';
          elem.info = info.join('<span class="online-prestige-split">●</span>');
          var item = Lampa.Template.get('bandera_online_folder', elem);
          item.on('hover:enter', function () {
            _this3.activity.loader(true);
            _this3.reset();
            object.search_date = year;
            selected_id = elem.id;
            _this3.extendChoice();
            var kinopoisk_id = elem.kp_id || elem.filmId;
            if (kinopoisk_id && source.searchByKinopoisk) {
              source.searchByKinopoisk(object, kinopoisk_id);
            } else if (source.search) {
              source.search(object, [elem]);
            } else {
              _this3.doesNotAnswer();
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
        var _this4 = this;
        var select = [];
        var add = function add(type, title) {
          var need = _this4.getChoice();
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
        filter.set('sort', filter_sources.map(function (e) {
          return {
            title: balanser_titles[e] || e,
            source: e,
            selected: e == balanser
          };
        }));
        this.selected(filter_items);
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
        var _this5 = this;
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!items.length) return this.empty();
        scroll.append(Lampa.Template.get('bandera_online_watched', {}));
        this.updateWatched();
        this.getEpisodes(items[0].season, function (episodes) {
          var viewed = Lampa.Storage.cache('bandera_online_view', 5000, []);
          var serial = object.movie.name ? true : false;
          var choice = _this5.getChoice();
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
              element.translate_episode_end = _this5.getLastEpisode(items);
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
              choice = _this5.getChoice();
              if (!serial) {
                choice.movie_view = hash_behold;
              } else {
                choice.episodes_view[element.season] = episode_num;
              }
              _this5.saveChoice(choice);
              _this5.watched({
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
            _this5.contextMenu({
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
        var _this6 = this;
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
            var keys = Lampa.Arrays.getKeys(sources);
            var indx = keys.indexOf(balanser);
            var next = keys[indx + 1];
            if (!next) next = keys[0];
            balanser = next;
            if (Lampa.Activity.active().activity == _this6.activity) _this6.changeBalanser(balanser);
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
      this.pause = function () {};
      this.stop = function () {};
      this.destroy = function () {
        network.clear();
        this.clearImages();
        files.destroy();
        scroll.destroy();
        clearInterval(balanser_timer);
        if (source) source.destroy();
      };
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
        version: '2.0.0',
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
        }
      });
      Lampa.Template.add('bandera_online_css', "\n        <style>\n        @charset 'UTF-8';.online-prestige{position:relative;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;will-change:transform}.online-prestige__body{padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}@media screen and (max-width:480px){.online-prestige__body{padding:.8em 1.2em}}.online-prestige__img{position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}.online-prestige__img>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.online-prestige__img--loaded>img{opacity:1}@media screen and (max-width:480px){.online-prestige__img{width:7em;min-height:6em}}.online-prestige__folder{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige__folder>svg{width:4.4em !important;height:4.4em !important}.online-prestige__viewed{position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}.online-prestige__viewed>svg{width:1.5em !important;height:1.5em !important}.online-prestige__episode-number{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}.online-prestige__loader{position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain}.online-prestige__head,.online-prestige__footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__timeline{margin:.8em 0}.online-prestige__timeline>.time-line{display:block !important}.online-prestige__title{font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}@media screen and (max-width:480px){.online-prestige__title{font-size:1.4em}}.online-prestige__time{padding-left:2em}.online-prestige__info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__info>*{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.online-prestige__quality{padding-left:1em;white-space:nowrap}.online-prestige__scan-file{position:absolute;bottom:0;left:0;right:0}.online-prestige__scan-file .broadcast__scan{margin:0}.online-prestige .online-prestige-split{font-size:.8em;margin:0 1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige.focus::after{content:'';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;-moz-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}.online-prestige+.online-prestige{margin-top:1.5em}.online-prestige--folder .online-prestige__footer{margin-top:.8em}.online-prestige-watched{padding:1em}.online-prestige-watched__icon>svg{width:1.5em;height:1.5em}.online-prestige-watched__body{padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.online-prestige-watched__body>span+span::before{content:' ● ';vertical-align:top;display:inline-block;margin:0 .5em}.online-prestige-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige-rate>svg{width:1.3em !important;height:1.3em !important}.online-prestige-rate>span{font-weight:600;font-size:1.1em;padding-left:.7em}.online-empty{line-height:1.4}.online-empty__title{font-size:1.8em;margin-bottom:.3em}.online-empty__time{font-size:1.2em;font-weight:300;margin-bottom:1.6em}.online-empty__buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-empty__buttons>*+*{margin-left:1em}.online-empty__button{background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;-moz-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}.online-empty__button.focus{background:#fff;color:black}.online-empty__templates .online-empty-template:nth-child(2){opacity:.5}.online-empty__templates .online-empty-template:nth-child(3){opacity:.2}.online-empty-template{background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template>*{background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template__ico{width:4em;height:4em;margin-right:2.4em}.online-empty-template__body{height:1.7em;width:70%}.online-empty-template+.online-empty-template{margin-top:1em}\n        </style>\n    ");
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
              title: "Спільнота t.me/mmssixxx",
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
