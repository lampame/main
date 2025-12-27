(function () {
    'use strict';

    function main$8() {
      Lampa.Lang.add({
        lme_EngData_desc: {
          ru: "Добавляет английское название произведения, и заменяет описание если оно отсутсвует",
          en: "Adds the English title and replaces the description if it is missing",
          uk: "Додає англійську назву твору та замінює опис, якщо він відсутній"
        },
        lme_quality_desc: {
          ru: "Для источников кроме Cub, добавляет лейбл с качеством. Где это возможно",
          en: "For sources other than Cub, adds a quality label where possible",
          uk: "Для джерел, окрім Cub, додає лейбл з якістю. Де це можливо"
        },
        lme_wmquality_desc: {
          ru: "Ключ нужно получить на сайте api.watchmode.com",
          en: "The key must be obtained on the api.watchmode.com website",
          uk: "Ключ потрібно отримати на сайті api.watchmode.com"
        },
        lme_averageRuntime_desc: {
          ru: "Добавляет среднее время серии",
          en: "Adds average episode runtime",
          uk: "Додає середній час серії"
        },
        lme_switchsource_desc: {
          ru: "Добавляет переключение источников из шапки",
          en: "Adds source switcher",
          uk: "Додає перемикач джерел у шапці"
        },
        lme_switchsource_modss_desc: {
          ru: "При наличии Modss добавляет источники Filmix и KinoPub",
          en: "If install Modss add Filmix and KinoPub",
          uk: "Якщо є Modss додає джерела Filmix та KinoPub"
        },
        lme_switchsource_lmenc_desc: {
          ru: "При наличии NewCategory добавляет источник TMDB Streaming",
          en: "If install Modss add TMDB Streaming",
          uk: "Якщо є Modss додає джерелo TMDB Streaming"
        },
        lme_showbutton_desc: {
          ru: "Выводит все кнопки действий в карточке",
          en: "Show all action button in card",
          uk: "Виводить усі кнопки дій у картці"
        },
        lme_showbuttonwn_desc: {
          ru: "Показивать только иконки",
          en: "Show only icon",
          uk: "Відображати тільки іконки"
        },
        lme_ratings_desc: {
          ru: "Добавляет рейтинги от mdblist.com. Бесплатный ключ можно получить на сайте",
          en: "Adds ratings from mdblist.com. You can get a free key on the site",
          uk: "Додає рейтинги від mdblist.com. Безкоштовний ключ можна отримати на сайті"
        },
        lme_streamingdiscovery_desc: {
          ru: "Добавляет рейтинги от различных сервисов (IMDb, Metacritic, TMDB, Rotten Tomatoes и др.)",
          en: "Adds ratings from various services (IMDb, Metacritic, TMDB, Rotten Tomatoes, etc.)",
          uk: "Додає рейтинги від різних сервісів (IMDb, Metacritic, TMDB, Rotten Tomatoes тощо)"
        }
      });
    }
    var Lang = {
      main: main$8
    };

    var STYLE_ID = 'lme-button-style';
    var ORDER_KEY = 'lme_buttonsort';
    var HIDE_KEY = 'lme_buttonhide';
    var lastFullContainer = null;
    var lastStartInstance = null;
    var FALLBACK_TITLES = {
      'button--play': function buttonPlay() {
        return Lampa.Lang.translate('title_watch');
      },
      'button--book': function buttonBook() {
        return Lampa.Lang.translate('settings_input_links');
      },
      'button--reaction': function buttonReaction() {
        return Lampa.Lang.translate('title_reactions');
      },
      'button--subscribe': function buttonSubscribe() {
        return Lampa.Lang.translate('title_subscribe');
      },
      'button--options': function buttonOptions() {
        return Lampa.Lang.translate('more');
      },
      'view--torrent': function viewTorrent() {
        return Lampa.Lang.translate('full_torrents');
      },
      'view--trailer': function viewTrailer() {
        return Lampa.Lang.translate('full_trailers');
      }
    };
    function ensureStyles() {
      if (document.getElementById(STYLE_ID)) return;
      var style = "\n        .lme-buttons {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 10px;\n        }\n        .lme-button-hide {\n            display: none !important;\n        }\n        .lme-button-text-hidden span {\n            display: none;\n        }\n    ";
      $('head').append("<style id=\"".concat(STYLE_ID, "\">").concat(style, "</style>"));
    }
    function readArray(key) {
      var value = Lampa.Storage.get(key);
      if (Array.isArray(value)) return value.slice();
      if (typeof value === 'string') {
        try {
          var parsed = JSON.parse(value);
          return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
          return value.split(',').map(function (v) {
            return v.trim();
          }).filter(Boolean);
        }
      }
      return [];
    }
    function getFullContainer(e) {
      if (e && e.body) return e.body;
      if (e && e.link && e.link.html) return e.link.html;
      if (e && e.object && e.object.activity && typeof e.object.activity.render === 'function') return e.object.activity.render();
      return null;
    }
    function resolveActiveFullContainer() {
      var current = $('.full-start-new').first();
      if (current.length) return current;
      return null;
    }
    function getButtonId($button) {
      var className = ($button.attr('class') || '').split(/\s+/);
      var idClass = className.find(function (c) {
        return c.startsWith('button--') && c !== 'button--priority';
      }) || className.find(function (c) {
        return c.startsWith('view--');
      });
      if (idClass) return idClass;
      var dataId = $button.data('id') || $button.data('name') || $button.attr('data-name');
      if (dataId) return "data:".concat(dataId);
      var title = $button.text().trim();
      if (title) return "text:".concat(title);
      return "html:".concat(Lampa.Utils.hash($button.clone().removeClass('focus').prop('outerHTML')));
    }
    function getButtonTitle(id, $button) {
      var label = $button.find('span').first().text().trim() || $button.text().trim();
      if (label) return label;
      if (FALLBACK_TITLES[id]) return FALLBACK_TITLES[id]();
      return id;
    }
    function scanButtons(fullContainer, detach) {
      var targetContainer = fullContainer.find('.full-start-new__buttons');
      var extraContainer = fullContainer.find('.buttons--container');
      var items = [];
      var map = {};
      function collect($buttons) {
        $buttons.each(function () {
          var $btn = $(this);
          if ($btn.hasClass('button--play') || $btn.hasClass('button--priority')) return;
          var id = getButtonId($btn);
          if (!id || map[id]) return;
          map[id] = detach ? $btn.detach() : $btn;
          items.push(id);
        });
      }
      collect(targetContainer.find('.full-start__button'));
      collect(extraContainer.find('.full-start__button'));
      return {
        items: items,
        map: map,
        targetContainer: targetContainer,
        extraContainer: extraContainer
      };
    }
    function normalizeOrder(order, ids) {
      var result = [];
      var known = new Set(ids);
      order.forEach(function (id) {
        if (known.has(id)) result.push(id);
      });
      ids.forEach(function (id) {
        if (!result.includes(id)) result.push(id);
      });
      return result;
    }
    function applyHidden(map) {
      var hidden = new Set(readArray(HIDE_KEY));
      Object.keys(map).forEach(function (id) {
        map[id].toggleClass('lme-button-hide', hidden.has(id));
      });
    }
    function applyLayout(fullContainer) {
      if (!fullContainer || !fullContainer.length) return;
      ensureStyles();
      var priority = fullContainer.find('.full-start-new__buttons .button--priority').detach();
      fullContainer.find('.full-start-new__buttons .button--play').remove();
      var _scanButtons = scanButtons(fullContainer, true),
        items = _scanButtons.items,
        map = _scanButtons.map,
        targetContainer = _scanButtons.targetContainer;
      var order = normalizeOrder(readArray(ORDER_KEY), items);
      targetContainer.empty();
      if (priority.length) targetContainer.append(priority);
      order.forEach(function (id) {
        if (map[id]) targetContainer.append(map[id]);
      });
      targetContainer.toggleClass('lme-button-text-hidden', Lampa.Storage.get('lme_showbuttonwn') == true);
      targetContainer.addClass('lme-buttons');
      applyHidden(map);
      Lampa.Controller.toggle("full_start");
      if (lastStartInstance && lastStartInstance.html && fullContainer[0] === lastStartInstance.html[0]) {
        var firstButton = targetContainer.find('.full-start__button.selector').not('.hide').not('.lme-button-hide').first();
        if (firstButton.length) lastStartInstance.last = firstButton[0];
      }
    }
    function openEditor(fullContainer) {
      if (!fullContainer || !fullContainer.length) return;
      var _scanButtons2 = scanButtons(fullContainer, false),
        items = _scanButtons2.items,
        map = _scanButtons2.map;
      var order = normalizeOrder(readArray(ORDER_KEY), items);
      var hidden = new Set(readArray(HIDE_KEY));
      var list = $('<div class="menu-edit-list"></div>');
      order.forEach(function (id) {
        var $btn = map[id];
        if (!$btn || !$btn.length) return;
        var title = getButtonTitle(id, $btn);
        var icon = $btn.find('svg').first().prop('outerHTML') || '';
        var item = $("<div class=\"menu-edit-list__item\" data-id=\"".concat(id, "\">\n            <div class=\"menu-edit-list__icon\"></div>\n            <div class=\"menu-edit-list__title\">").concat(title, "</div>\n            <div class=\"menu-edit-list__move move-up selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 12L11 3L20 12\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__move move-down selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 2L11 11L20 2\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__toggle toggle selector\">\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"1.89111\" y=\"1.78369\" width=\"21.793\" height=\"21.793\" rx=\"3.5\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M7.44873 12.9658L10.8179 16.3349L18.1269 9.02588\" stroke=\"currentColor\" stroke-width=\"3\" class=\"dot\" opacity=\"0\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n        </div>"));
        if (icon) item.find('.menu-edit-list__icon').append(icon);
        item.toggleClass('lme-button-hidden', hidden.has(id));
        item.find('.dot').attr('opacity', hidden.has(id) ? 0 : 1);
        item.find('.move-up').on('hover:enter', function () {
          var prev = item.prev();
          if (prev.length) item.insertBefore(prev);
        });
        item.find('.move-down').on('hover:enter', function () {
          var next = item.next();
          if (next.length) item.insertAfter(next);
        });
        item.find('.toggle').on('hover:enter', function () {
          item.toggleClass('lme-button-hidden');
          item.find('.dot').attr('opacity', item.hasClass('lme-button-hidden') ? 0 : 1);
        });
        list.append(item);
      });
      Lampa.Modal.open({
        title: 'Edit buttons',
        html: list,
        size: 'small',
        scroll_to_center: true,
        onBack: function onBack() {
          var newOrder = [];
          var newHidden = [];
          list.find('.menu-edit-list__item').each(function () {
            var id = $(this).data('id');
            if (!id) return;
            newOrder.push(id);
            if ($(this).hasClass('lme-button-hidden')) newHidden.push(id);
          });
          Lampa.Storage.set(ORDER_KEY, newOrder);
          Lampa.Storage.set(HIDE_KEY, newHidden);
          Lampa.Modal.close();
          applyLayout(fullContainer);
        }
      });
    }
    function openEditorFromSettings() {
      if (!lastFullContainer || !lastFullContainer.length || !document.body.contains(lastFullContainer[0])) {
        var current = resolveActiveFullContainer();
        if (current) {
          lastFullContainer = current;
        }
      }
      if (!lastFullContainer || !lastFullContainer.length || !document.body.contains(lastFullContainer[0])) {
        Lampa.Modal.open({
          title: Lampa.Lang.translate('title_error'),
          html: Lampa.Template.get('error', {
            title: Lampa.Lang.translate('title_error'),
            text: 'Open a movie card to edit buttons'
          }),
          size: 'small',
          scroll_to_center: true,
          onBack: function onBack() {
            Lampa.Modal.close();
          }
        });
        return;
      }
      openEditor(lastFullContainer);
    }
    function main$7() {
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'build' && e.name === 'start' && e.item && e.item.html) {
          lastStartInstance = e.item;
        }
        if (e.type === 'complite') {
          var fullContainer = getFullContainer(e);
          if (!fullContainer) return;
          lastFullContainer = fullContainer;
          setTimeout(function () {
            applyLayout(fullContainer);
          }, 0);
        }
      });
    }
    var showButton = {
      main: main$7,
      openEditorFromSettings: openEditorFromSettings
    };

    function main$6() {
      Lampa.SettingsApi.addComponent({
        component: "lme",
        name: 'Movie Enhancer',
        icon: '<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 431.661 431.661" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffffff;" d="M180.355,213.668l40.079,40.085L42.526,431.661L2.446,391.576L180.355,213.668z M228.877,245.316 l-40.079-40.085l68.905-68.911l40.091,40.079L228.877,245.316z"></path> <polygon style="fill:#ffffff;" points="380.066,218.525 391.999,218.519 391.999,181.309 429.215,181.309 429.215,169.376 391.999,169.376 391.999,132.166 380.066,132.166 380.066,169.376 342.862,169.376 342.862,181.309 380.066,181.309 "></polygon> <polygon style="fill:#ffffff;" points="393.282,260.424 393.282,248.49 356.073,248.49 356.073,211.281 344.145,211.281 344.145,248.49 306.93,248.49 306.93,260.424 344.145,260.424 344.145,297.633 356.073,297.633 356.073,260.424 "></polygon> <polygon style="fill:#ffffff;" points="302.956,37.209 265.741,37.209 265.741,0 253.807,0 253.807,37.209 216.603,37.209 216.603,49.143 253.807,49.143 253.807,86.353 265.741,86.353 265.741,49.143 302.956,49.143 "></polygon> <polygon style="fill:#ffffff;" points="223.853,73.148 186.638,73.148 186.638,35.932 174.71,35.932 174.71,73.148 137.495,73.148 137.495,85.076 174.71,85.076 174.71,122.291 186.638,122.291 186.638,85.076 223.853,85.076 "></polygon> </g> </g></svg>'
      });
      //Quality Watchmode
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_wmquality",
          type: "input",
          placeholder: '',
          values: ''
        },
        field: {
          name: 'Quality by Watchmode',
          description: Lampa.Lang.translate('lme_wmquality_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('lme_quality', false);
          Lampa.Settings.update();
        }
      });
      //English data
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_endata",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'English data',
          description: Lampa.Lang.translate('lme_EngData_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //TV Show time
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_averageRuntime",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Show time',
          description: Lampa.Lang.translate('lme_averageRuntime_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Streaming Discovery Ratings
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_streamingdiscovery",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Streaming Discovery Ratings',
          description: Lampa.Lang.translate('lme_streamingdiscovery_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Additional rating
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_ratings",
          type: "input",
          placeholder: '',
          values: ''
        },
        field: {
          name: 'Show additional ratings',
          description: Lampa.Lang.translate('lme_ratings_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Button in one line
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_showbutton",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'All button in card',
          description: Lampa.Lang.translate('lme_showbutton_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      if (Lampa.Storage.get('lme_showbutton') == true) {
        Lampa.SettingsApi.addParam({
          component: "lme",
          param: {
            name: "lme_showbuttonwn",
            type: "trigger",
            "default": false
          },
          field: {
            name: 'Hide text',
            description: Lampa.Lang.translate('lme_showbuttonwn_desc')
          },
          onChange: function onChange(value) {
            Lampa.Settings.update();
          }
        });
        Lampa.SettingsApi.addParam({
          component: "lme",
          param: {
            name: "lme_button_editor",
            type: "button"
          },
          field: {
            name: 'Edit buttons',
            description: 'Reorder and hide card buttons'
          },
          onChange: function onChange() {
            showButton.openEditorFromSettings();
          }
        });
      }
      //Switch Source
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_switchsource",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Source switch',
          description: Lampa.Lang.translate('lme_switchsource_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Switch Source additional
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_switchsource_modss",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Add Modss source',
          description: Lampa.Lang.translate('lme_switchsource_modss_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Switch Source additional №2
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_switchsource_lmenc",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Add TMDBs source',
          description: Lampa.Lang.translate('lme_switchsource_lmenc_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
    }
    var CONFIG = {
      main: main$6
    };

    var API_BASE = "https://sociable-necessary-road.anvil.app/_/api/wm";
    var STORAGE_KEY = "lme_wm_quality_map";
    function debounce(func, wait) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          return func.apply(context, args);
        }, wait);
      };
    }
    function Cache() {
      var self = this;
      var cacheSize = 1000;
      var cacheTime = 1000 * 60 * 60 * 12; // 12h
      var storage = {};
      self.save = debounce(function () {
        Lampa.Storage.set(STORAGE_KEY, storage);
      }, 500);
      self.init = function () {
        storage = Lampa.Storage.get(STORAGE_KEY, {});
        self.init = function () {};
      };
      self.get = function (id) {
        var memory = storage[id];
        if (memory) {
          var cacheTimestamp = Date.now() - cacheTime;
          if (memory.timestamp > cacheTimestamp) return memory.value;
          for (var cacheId in storage) {
            var node = storage[cacheId];
            if (!(node && node.timestamp > cacheTimestamp)) delete storage[cacheId];
          }
        }
        return null;
      };
      self.set = function (id, value) {
        var timestamp = Date.now();
        var size = Object.keys(storage).length;
        if (size >= cacheSize) {
          var cacheTimestamp = timestamp - cacheTime;
          for (var cacheId in storage) {
            var node = storage[cacheId];
            if (!(node && node.timestamp > cacheTimestamp)) delete storage[cacheId];
          }
          size = Object.keys(storage).length;
          if (size >= cacheSize) {
            var timestamps = [];
            for (var _cacheId in storage) {
              var _node = storage[_cacheId];
              timestamps.push(_node && _node.timestamp || 0);
            }
            timestamps.sort(function (a, b) {
              return a - b;
            });
            cacheTimestamp = timestamps[Math.floor(timestamps.length / 2)];
            for (var _cacheId2 in storage) {
              var _node2 = storage[_cacheId2];
              if (!(_node2 && _node2.timestamp > cacheTimestamp)) delete storage[_cacheId2];
            }
          }
        }
        storage[id] = {
          timestamp: timestamp,
          value: value
        };
        self.save();
      };
    }
    function buildTid(object) {
      var _object$card, _object$movie, _object$data, _object$movie2, _object$data2, _object$card2, _object$movie3, _object$movie4;
      var imdbId = (object === null || object === void 0 ? void 0 : object.imdb_id) || (object === null || object === void 0 || (_object$card = object.card) === null || _object$card === void 0 ? void 0 : _object$card.imdb_id) || (object === null || object === void 0 || (_object$movie = object.movie) === null || _object$movie === void 0 ? void 0 : _object$movie.imdb_id) || (object === null || object === void 0 || (_object$data = object.data) === null || _object$data === void 0 ? void 0 : _object$data.imdb_id);
      if (imdbId) return imdbId;
      var id = (object === null || object === void 0 ? void 0 : object.id) || (object === null || object === void 0 || (_object$movie2 = object.movie) === null || _object$movie2 === void 0 ? void 0 : _object$movie2.id) || (object === null || object === void 0 || (_object$data2 = object.data) === null || _object$data2 === void 0 ? void 0 : _object$data2.id);
      if (!id) return null;
      var mediaType = (object === null || object === void 0 ? void 0 : object.media_type) || (object === null || object === void 0 || (_object$card2 = object.card) === null || _object$card2 === void 0 ? void 0 : _object$card2.media_type) || (object === null || object === void 0 || (_object$movie3 = object.movie) === null || _object$movie3 === void 0 ? void 0 : _object$movie3.media_type) || (object !== null && object !== void 0 && object.first_air_date || object !== null && object !== void 0 && object.number_of_seasons || object !== null && object !== void 0 && (_object$movie4 = object.movie) !== null && _object$movie4 !== void 0 && _object$movie4.first_air_date ? "tv" : "movie");
      return "".concat(mediaType, "-").concat(id);
    }
    function fetchBestQualityItem(object) {
      try {
        var tid = buildTid(object);
        var apiKey = Lampa.Storage.get("lme_wmquality");
        if (!tid || !apiKey) return Promise.resolve(null);
        var url = "".concat(API_BASE, "?tid=").concat(encodeURIComponent(tid), "&apiKey=").concat(encodeURIComponent(apiKey));
        return new Promise(function (resolve) {
          Lampa.Network.silent(url, function (response) {
            return resolve(response && response.quality ? response.quality : null);
          }, function () {
            return resolve(null);
          }, null, {
            timeout: 10000
          });
        });
      } catch (error) {
        console.error("LME", error);
        return Promise.resolve(null);
      }
    }
    function renderQuality(html, quality) {
      if (!quality) return;
      var qualityContainer = $(".card__quality", html);
      if (qualityContainer.length !== 1) {
        qualityContainer = $('<div class="card__quality"><div></div></div>');
        var icons = $(".card__icons", html);
        if (icons.length) icons.after(qualityContainer);else $(".card__view", html).append(qualityContainer);
      }
      $("div", qualityContainer).text(quality);
    }
    function appendQualityElement(bestItem, selector) {
      if (!bestItem) return;
      if (Lampa.Platform.screen("mobile") !== true) {
        var container = $(selector);
        container.find(".card__quality").remove();
        var quality = $("<div>", {
          "class": "card__quality",
          css: {
            zIndex: 999,
            fontSize: "75%"
          }
        });
        quality.append($("<div>", {
          text: bestItem
        }));
        $(selector).append(quality);
      }
    }
    function main$5() {
      var cache = new Cache();
      cache.init();
      var inflight = {};
      var card = Lampa.Maker.map("Card");
      var onVisible = card.Card.onVisible;
      card.Card.onVisible = function () {
        var self = this;
        onVisible.apply(self);
        if (!self.data || Lampa.Storage.field("source") === "cub") return;
        var tid = buildTid(self.data);
        if (!tid) return;
        var qualityCache = cache.get(tid);
        if (qualityCache) {
          renderQuality(self.html, qualityCache);
          return;
        }
        if (inflight[tid]) return;
        inflight[tid] = true;
        fetchBestQualityItem(self.data).then(function (bestItem) {
          if (bestItem) {
            cache.set(tid, bestItem);
            renderQuality(self.html, bestItem);
          }
        })["finally"](function () {
          delete inflight[tid];
        });
      };
      Lampa.Listener.follow("full", function (e) {
        if (e.type === "complite") {
          var _e$data;
          fetchBestQualityItem(e.object || ((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.movie)).then(function (bestItem) {
            appendQualityElement(bestItem, ".full-start-new__poster");
          });
        }
      });
    }
    var StreamQuality = {
      main: main$5
    };

    function main$4() {
      Lampa.Listener.follow("full", function (cardData) {
        //if (e.type === "complite" && Lampa.Storage.field('source') !== 'cub')
        if (cardData.type === "complite" && Lampa.Storage.field('source') === 'tmdb') {
          var _cardData$object = cardData.object,
            method = _cardData$object.method,
            id = _cardData$object.id;
          var apiKey = "4ef0d7355d9ffb5151e987764708ce96";
          var apiUrlTMDB = 'https://api.themoviedb.org/3/';
          var apiUrlProxy = 'apitmdb.' + (Lampa.Storage && Lampa.Storage.get('cub_domain') ? Lampa.Storage.get('cub_domain') : 'cub.red') + '/3/';
          var request = "".concat(method, "/").concat(id, "?api_key=").concat(apiKey, "&language=en");
          var url = Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request;
          $.ajax({
            url: url,
            method: "GET",
            timeout: 0
          }).done(function (response) {
            var englishTitle = method === "movie" ? response.title : response.name || "Not found";
            var englishDesc = response.overview || "";
            /**
            $("<div>", {
                class: "english-title",
                text: englishTitle,
            }).appendTo(".full-start-new__head");
            **/
            cardData.object.activity.render().find('.full-start-new__head').append($("<div>", {
              "class": "english-title",
              text: englishTitle
            }));
            if (cardData.data.movie.overview === '') {
              $(".full-descr__text").html($("<div>", {
                "class": "english-desc",
                text: englishDesc
              }));
            }
          }).fail(function () {
            /**
            $("<div>", {
                class: "english-title",
                text: "Not found",
            }).appendTo(".full-start-new__head");
            **/

            cardData.object.activity.render().find('.full-start-new__head').append($("<div>", {
              "class": "english-title",
              text: "Not found"
            }));
          });
        }
      });
    }
    var englishData = {
      main: main$4
    };

    function main$3() {
      Lampa.Listener.follow("full", function (cardData) {
        if (cardData.type === "complite" && cardData.object.method === "tv") {
          var imdbId = cardData.data.movie.imdb_id;
          if (imdbId) {
            $.ajax({
              url: "https://api.tvmaze.com/lookup/shows?imdb=".concat(imdbId),
              method: "GET",
              success: function success(response) {
                var averageRuntime = response.averageRuntime;
                var hours = Math.floor(averageRuntime / 60);
                var minutes = averageRuntime % 60;
                var formattedRuntime = "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
                var runtimeSpan = $("<span>", {
                  id: "averageRuntime",
                  text: formattedRuntime
                });
                var splitSpan = $("<span>", {
                  "class": "full-start-new__split",
                  text: "●"
                });
                cardData.object.activity.render().find('.full-start-new__details').prepend(runtimeSpan, splitSpan);
              },
              error: function error(_error) {
                console.error("Error during request:", _error);
              }
            });
          } else {
            console.warn("IMDB ID is missing in movie data.");
          }
        }
      });
    }
    var averageRuntime = {
      main: main$3
    };

    function main$2() {
      var allSources = ['tmdb', 'cub']; // Усі плеери
      var logos = {
        tmdb: "<svg width=\"161\" height=\"37\" viewBox=\"0 0 161 37\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.0846 35.8986H17.8727V7.01351H27.9572V0H0V6.99324H10.0846V35.8986ZM38.1417 35.8986H45.9298V8.36149H46.0296L54.9659 35.8784H60.9568L70.1927 8.36149H70.2925V35.8784H78.0806V0H66.3485L58.1611 23.4122H58.0612L49.9237 0H38.1417V35.8986ZM89.0039 0.121622H100.686C103.406 0.125865 106.115 0.466206 108.754 1.13514C111.157 1.7138 113.421 2.77522 115.414 4.25676C117.34 5.72744 118.892 7.64602 119.937 9.85135C121.118 12.4714 121.689 15.3326 121.604 18.2128C121.658 20.8662 121.104 23.4961 119.987 25.8953C118.946 28.0542 117.453 29.9565 115.613 31.4696C113.73 33.0023 111.579 34.1611 109.273 34.8851C106.835 35.6708 104.292 36.064 101.734 36.0507H89.0039V0.121622ZM96.792 28.7027H100.786C102.466 28.7143 104.141 28.5273 105.778 28.1453C107.239 27.8443 108.621 27.2329 109.832 26.3513C110.988 25.4631 111.908 24.2961 112.508 22.9561C113.209 21.335 113.55 19.5772 113.506 17.8074C113.536 16.2216 113.194 14.6514 112.508 13.2264C111.885 11.9635 110.987 10.8612 109.882 10.0034C108.733 9.13749 107.437 8.49491 106.058 8.10811C104.537 7.67642 102.964 7.46152 101.385 7.46959H96.792V28.7027ZM132.887 0.121622H146.067C147.613 0.122387 149.158 0.234152 150.69 0.456081C152.142 0.647089 153.551 1.09291 154.853 1.77365C156.07 2.41433 157.102 3.36414 157.849 4.5304C158.677 5.95358 159.076 7.59212 158.997 9.24324C159.065 11.0819 158.473 12.883 157.329 14.3108C156.163 15.6827 154.625 16.6765 152.906 17.1689V17.2297C154.012 17.39 155.084 17.7323 156.081 18.2432C157.002 18.7125 157.831 19.3479 158.528 20.1182C159.218 20.8897 159.75 21.7922 160.095 22.7736C160.467 23.8129 160.653 24.9112 160.644 26.0169C160.704 27.6822 160.288 29.3295 159.446 30.7601C158.663 32.0054 157.603 33.0468 156.351 33.8007C155.035 34.6026 153.593 35.1683 152.087 35.473C150.535 35.8108 148.952 35.9807 147.365 35.9797H132.887V0.121622ZM140.675 14.4628H146.316C146.914 14.4661 147.511 14.3981 148.094 14.2601C148.651 14.1373 149.182 13.9142 149.661 13.6014C150.129 13.2951 150.516 12.8776 150.789 12.3851C151.082 11.8239 151.226 11.1955 151.209 10.5608C151.241 9.91579 151.088 9.27513 150.769 8.71622C150.46 8.2373 150.038 7.8438 149.541 7.57095C148.985 7.28738 148.389 7.09253 147.774 6.99324C147.165 6.87376 146.547 6.81268 145.927 6.81081H140.635L140.675 14.4628ZM140.675 29.3108H147.664C148.279 29.3125 148.892 29.2445 149.491 29.1081C150.087 28.9843 150.654 28.7433 151.159 28.3986C151.663 28.0612 152.083 27.6103 152.387 27.0811C152.715 26.4768 152.877 25.7943 152.856 25.1047C152.883 24.3773 152.664 23.6623 152.237 23.0777C151.818 22.5517 151.276 22.1405 150.66 21.8818C150.02 21.6112 149.349 21.4239 148.663 21.3243C147.985 21.2266 147.301 21.1758 146.616 21.1723H140.725L140.675 29.3108Z\" fill=\"currentColor\"/> </svg>",
        cub: "<svg width=\"110\" height=\"39\" viewBox=\"0 0 110 39\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M66.8379 22.2598H71.623C71.5592 23.6452 71.1855 24.8665 70.502 25.9238C69.8184 26.9811 68.8704 27.806 67.6582 28.3984C66.4551 28.9818 65.0332 29.2734 63.3926 29.2734C62.0618 29.2734 60.8724 29.0501 59.8242 28.6035C58.7852 28.1569 57.901 27.5143 57.1719 26.6758C56.4518 25.8372 55.9004 24.821 55.5176 23.627C55.1439 22.4329 54.957 21.0885 54.957 19.5938V18.5137C54.957 17.0189 55.153 15.6745 55.5449 14.4805C55.946 13.2773 56.5111 12.2565 57.2402 11.418C57.9785 10.5703 58.8626 9.92318 59.8926 9.47656C60.9225 9.02995 62.0664 8.80664 63.3242 8.80664C65.056 8.80664 66.5189 9.11654 67.7129 9.73633C68.9069 10.3561 69.832 11.2083 70.4883 12.293C71.1445 13.3685 71.5319 14.5944 71.6504 15.9707H66.8652C66.847 15.2233 66.7194 14.599 66.4824 14.0977C66.2454 13.5872 65.8717 13.2044 65.3613 12.9492C64.8509 12.694 64.1719 12.5664 63.3242 12.5664C62.7318 12.5664 62.2168 12.6758 61.7793 12.8945C61.3418 13.1133 60.9772 13.4596 60.6855 13.9336C60.3939 14.4076 60.1751 15.0228 60.0293 15.7793C59.8926 16.5267 59.8242 17.429 59.8242 18.4863V19.5938C59.8242 20.651 59.888 21.5534 60.0156 22.3008C60.1432 23.0482 60.3483 23.6589 60.6309 24.1328C60.9134 24.6068 61.278 24.9577 61.7246 25.1855C62.1803 25.4043 62.7363 25.5137 63.3926 25.5137C64.1217 25.5137 64.737 25.3997 65.2383 25.1719C65.7396 24.9349 66.127 24.5794 66.4004 24.1055C66.6738 23.6224 66.8197 23.0072 66.8379 22.2598ZM84.6934 9.09375H89.4922V22.0957C89.4922 23.6452 89.1686 24.9577 88.5215 26.0332C87.8743 27.0996 86.9674 27.9062 85.8008 28.4531C84.6341 29 83.2624 29.2734 81.6855 29.2734C80.127 29.2734 78.7552 29 77.5703 28.4531C76.3945 27.9062 75.474 27.0996 74.8086 26.0332C74.1523 24.9577 73.8242 23.6452 73.8242 22.0957V9.09375H78.6367V22.0957C78.6367 22.916 78.7552 23.5859 78.9922 24.1055C79.2292 24.6159 79.5755 24.9896 80.0312 25.2266C80.487 25.4635 81.0384 25.582 81.6855 25.582C82.3418 25.582 82.8932 25.4635 83.3398 25.2266C83.7865 24.9896 84.1237 24.6159 84.3516 24.1055C84.5794 23.5859 84.6934 22.916 84.6934 22.0957V9.09375ZM100.635 20.5371H95.5078L95.4805 17.3926H99.6367C100.384 17.3926 100.981 17.3105 101.428 17.1465C101.874 16.9733 102.198 16.7227 102.398 16.3945C102.608 16.0664 102.713 15.6562 102.713 15.1641C102.713 14.599 102.608 14.1432 102.398 13.7969C102.189 13.4505 101.856 13.1999 101.4 13.0449C100.954 12.8809 100.375 12.7988 99.6641 12.7988H97.3125V29H92.5137V9.09375H99.6641C100.895 9.09375 101.993 9.20768 102.959 9.43555C103.925 9.6543 104.745 9.99154 105.42 10.4473C106.104 10.903 106.623 11.4772 106.979 12.1699C107.334 12.8535 107.512 13.6602 107.512 14.5898C107.512 15.401 107.339 16.1621 106.992 16.873C106.646 17.584 106.067 18.1628 105.256 18.6094C104.454 19.0469 103.355 19.2747 101.961 19.293L100.635 20.5371ZM100.443 29H94.3457L95.9863 25.3086H100.443C101.1 25.3086 101.624 25.2083 102.016 25.0078C102.417 24.7982 102.704 24.5247 102.877 24.1875C103.059 23.8411 103.15 23.4583 103.15 23.0391C103.15 22.5286 103.064 22.0866 102.891 21.7129C102.727 21.3392 102.462 21.0521 102.098 20.8516C101.733 20.6419 101.245 20.5371 100.635 20.5371H96.6016L96.6289 17.3926H101.455L102.576 18.6504C103.907 18.5957 104.96 18.7826 105.734 19.2109C106.518 19.6393 107.079 20.2044 107.416 20.9062C107.753 21.6081 107.922 22.3418 107.922 23.1074C107.922 24.4108 107.639 25.5 107.074 26.375C106.518 27.25 105.684 27.9062 104.572 28.3438C103.46 28.7812 102.084 29 100.443 29Z\" fill=\"currentColor\"/> <path d=\"M11.1313 0H32.8687L44 18.9021H37.9656L14.0447 5.09141L11.1313 0Z\" fill=\"currentColor\"/> <path d=\"M28.7313 18.9021H21.9475L18.5055 12.887L28.7313 18.9021Z\" fill=\"currentColor\"/> <path d=\"M18.484 25.3498L21.9475 19.322H28.7313L18.484 25.3498Z\" fill=\"currentColor\"/> <path d=\"M13.9958 33.161L37.9656 19.322H44L32.9737 38.3292H11.0262L13.9958 33.161Z\" fill=\"currentColor\"/> <path d=\"M0 19.1122L10.7112 0L13.7566 5.32936V32.8387L10.6062 38.3294L0 19.1122Z\" fill=\"currentColor\"/> <path d=\"M18.3771 13.4153L21.6325 19.1122L18.3771 24.7858V13.4153Z\" fill=\"currentColor\"/> </svg>",
        TMDBs: "<svg width=\"161\" height=\"37\" viewBox=\"0 0 161 37\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.0846 35.8986H17.8727V7.01351H27.9572V0H0V6.99324H10.0846V35.8986ZM38.1417 35.8986H45.9298V8.36149H46.0296L54.9659 35.8784H60.9568L70.1927 8.36149H70.2925V35.8784H78.0806V0H66.3485L58.1611 23.4122H58.0612L49.9237 0H38.1417V35.8986ZM89.0039 0.121622H100.686C103.406 0.125865 106.115 0.466206 108.754 1.13514C111.157 1.7138 113.421 2.77522 115.414 4.25676C117.34 5.72744 118.892 7.64602 119.937 9.85135C121.118 12.4714 121.689 15.3326 121.604 18.2128C121.658 20.8662 121.104 23.4961 119.987 25.8953C118.946 28.0542 117.453 29.9565 115.613 31.4696C113.73 33.0023 111.579 34.1611 109.273 34.8851C106.835 35.6708 104.292 36.064 101.734 36.0507H89.0039V0.121622ZM96.792 28.7027H100.786C102.466 28.7143 104.141 28.5273 105.778 28.1453C107.239 27.8443 108.621 27.2329 109.832 26.3513C110.988 25.4631 111.908 24.2961 112.508 22.9561C113.209 21.335 113.55 19.5772 113.506 17.8074C113.536 16.2216 113.194 14.6514 112.508 13.2264C111.885 11.9635 110.987 10.8612 109.882 10.0034C108.733 9.13749 107.437 8.49491 106.058 8.10811C104.537 7.67642 102.964 7.46152 101.385 7.46959H96.792V28.7027ZM132.887 0.121622H146.067C147.613 0.122387 149.158 0.234152 150.69 0.456081C152.142 0.647089 153.551 1.09291 154.853 1.77365C156.07 2.41433 157.102 3.36414 157.849 4.5304C158.677 5.95358 159.076 7.59212 158.997 9.24324C159.065 11.0819 158.473 12.883 157.329 14.3108C156.163 15.6827 154.625 16.6765 152.906 17.1689V17.2297C154.012 17.39 155.084 17.7323 156.081 18.2432C157.002 18.7125 157.831 19.3479 158.528 20.1182C159.218 20.8897 159.75 21.7922 160.095 22.7736C160.467 23.8129 160.653 24.9112 160.644 26.0169C160.704 27.6822 160.288 29.3295 159.446 30.7601C158.663 32.0054 157.603 33.0468 156.351 33.8007C155.035 34.6026 153.593 35.1683 152.087 35.473C150.535 35.8108 148.952 35.9807 147.365 35.9797H132.887V0.121622ZM140.675 14.4628H146.316C146.914 14.4661 147.511 14.3981 148.094 14.2601C148.651 14.1373 149.182 13.9142 149.661 13.6014C150.129 13.2951 150.516 12.8776 150.789 12.3851C151.082 11.8239 151.226 11.1955 151.209 10.5608C151.241 9.91579 151.088 9.27513 150.769 8.71622C150.46 8.2373 150.038 7.8438 149.541 7.57095C148.985 7.28738 148.389 7.09253 147.774 6.99324C147.165 6.87376 146.547 6.81268 145.927 6.81081H140.635L140.675 14.4628ZM140.675 29.3108H147.664C148.279 29.3125 148.892 29.2445 149.491 29.1081C150.087 28.9843 150.654 28.7433 151.159 28.3986C151.663 28.0612 152.083 27.6103 152.387 27.0811C152.715 26.4768 152.877 25.7943 152.856 25.1047C152.883 24.3773 152.664 23.6623 152.237 23.0777C151.818 22.5517 151.276 22.1405 150.66 21.8818C150.02 21.6112 149.349 21.4239 148.663 21.3243C147.985 21.2266 147.301 21.1758 146.616 21.1723H140.725L140.675 29.3108Z\" fill=\"currentColor\"/> </svg>",
        pub: "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16 22.6666C19.6819 22.6666 22.6666 19.6818 22.6666 15.9999C22.6666 12.318 19.6819 9.33325 16 9.33325C12.3181 9.33325 9.33331 12.318 9.33331 15.9999C9.33331 19.6818 12.3181 22.6666 16 22.6666Z\" fill=\"currentColor\"/> <path d=\"M8.66665 9.99992C9.40303 9.99992 9.99998 9.40297 9.99998 8.66659C9.99998 7.93021 9.40303 7.33325 8.66665 7.33325C7.93027 7.33325 7.33331 7.93021 7.33331 8.66659C7.33331 9.40297 7.93027 9.99992 8.66665 9.99992Z\" fill=\"currentColor\"/> <path d=\"M9.33331 16H16L9.33331 29.3333V16Z\" fill=\"currentColor\"/> <path d=\"M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z\" fill=\"currentColor\"/> </svg>",
        filmix: "<svg width=\"160\" height=\"48\" viewBox=\"0 0 160 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g clip-path=\"url(#clip0_296_49)\"> <path d=\"M7.22157 16.4142V12.0327C7.22157 9.76567 7.71552 7.73842 8.70418 5.95095C9.69284 4.1199 11.0682 2.68117 12.8304 1.63485C14.6361 0.54495 16.7636 0 19.2141 0C20.7611 0 22.1365 0.239775 23.3403 0.719325C24.5871 1.19888 25.7687 1.89645 26.8868 2.81197L22.0507 8.82832C21.664 8.52315 21.2343 8.3052 20.7611 8.1744C20.3315 8.00002 19.8153 7.9128 19.2141 7.9128C18.0961 7.9128 17.2154 8.26155 16.5706 8.95912C15.9686 9.61305 15.6677 10.5286 15.6677 11.7057V16.4142H35.2686V48H26.8217V23.9346H15.6677V48H7.22157V23.9346H0V16.4142H7.22157Z\" fill=\"currentColor\"/> <path d=\"M42.763 47.9999V0.719238H51.2091V47.9999H42.763Z\" fill=\"currentColor\"/> <path d=\"M79.0032 48.0001V29.3625C79.0032 27.5314 78.4228 26.1146 77.2618 25.1118C76.1445 24.0655 74.7476 23.5423 73.0713 23.5423C71.9532 23.5423 70.9431 23.7822 70.041 24.2617C69.1381 24.6977 68.429 25.3516 67.9128 26.2236C67.3974 27.0955 67.1394 28.1418 67.1394 29.3625L67.1393 48.0001H58.6932V16.4143H67.1393V19.1547C67.8948 18.4066 68.7545 17.7765 69.7186 17.2644C71.5236 16.2617 73.5653 15.7603 75.8435 15.7603C77.9932 15.7603 79.9483 16.2617 81.7112 17.2644C83.1879 18.0682 84.408 19.1628 85.3717 20.5483C86.4136 19.1999 87.6861 18.127 89.19 17.3298C91.0816 16.2835 93.1876 15.7603 95.5087 15.7603C97.8299 15.7603 99.9144 16.2617 101.763 17.2644C103.611 18.2235 105.073 19.6186 106.147 21.4497C107.222 23.2808 107.759 25.4606 107.759 27.9892V48.0001H99.3125V29.3625C99.3125 27.5314 98.7328 26.1146 97.5718 25.1118C96.4545 24.0655 95.0576 23.5423 93.3813 23.5423C92.3061 23.5423 91.296 23.7822 90.351 24.2617C89.4481 24.6977 88.739 25.3516 88.2228 26.2236C87.7102 27.0908 87.4521 28.1305 87.4494 29.3428V48.0001H79.0032Z\" fill=\"currentColor\"/> <path d=\"M114.606 48.0001V16.4143H123.116V48.0001H114.606Z\" fill=\"currentColor\"/> <path d=\"M144.01 39.3188L137.949 48.0001H128.02L139.029 32.1841L128.02 16.4143H138.014L144.01 25.0286L150.006 16.4143H160L148.991 32.1841L160 48.0001H150.071L144.01 39.3188Z\" fill=\"currentColor\"/> <path d=\"M115.454 12.8891C116.363 13.7991 117.511 14.2541 118.896 14.2541C120.326 14.2541 121.473 13.7991 122.339 12.8891C123.248 11.9357 123.703 10.7657 123.703 9.37915C123.703 8.03575 123.248 6.88743 122.339 5.9341C121.473 4.98078 120.326 4.50415 118.896 4.50415C117.511 4.50415 116.363 4.98078 115.454 5.9341C114.545 6.88743 114.09 8.03575 114.09 9.37915C114.09 10.7657 114.545 11.9357 115.454 12.8891Z\" fill=\"currentColor\"/> <path d=\"M26.7188 12.8891C27.6276 13.7991 28.7752 14.2541 30.161 14.2541C31.5904 14.2541 32.7373 13.7991 33.6039 12.8891C34.5127 11.9357 34.9675 10.7657 34.9675 9.37915C34.9675 8.03575 34.5127 6.88743 33.6039 5.9341C32.7373 4.98078 31.5904 4.50415 30.161 4.50415C28.7752 4.50415 27.6276 4.98078 26.7188 5.9341C25.8093 6.88743 25.3545 8.03575 25.3545 9.37915C25.3545 10.7657 25.8093 11.9357 26.7188 12.8891Z\" fill=\"currentColor\"/> </g> <defs> <clipPath id=\"clip0_296_49\"> <rect width=\"160\" height=\"48\" fill=\"currentColor\"/> </clipPath> </defs> </svg>"
      };

      // Визначаємо джерела в залежності від умов
      var sources = allSources.slice(0, 2); // За замовчуванням беремо перші два джерела

      if (Lampa.Storage.get('lme_switchsource_modss') === true) {
        sources.push.apply(sources, ['pub', 'filmix']);
      }
      if (Lampa.Storage.get('lme_switchsource_lmenc') === true) {
        sources.push('TMDBs'); // Додаємо TMDBs, якщо умова виконується
      }

      // Отримуємо поточне джерело з Storage
      var currentSource = Lampa.Storage.get('source');
      var currentSourceIndex = sources.indexOf(currentSource);

      // Якщо поточне джерело не знайдено, встановлюємо перше джерело за замовчуванням
      if (currentSourceIndex === -1) {
        currentSourceIndex = 0;
        currentSource = sources[currentSourceIndex]; // Встановлюємо перше джерело як поточне
        Lampa.Storage.set('source', currentSource); // Зберігаємо його в Storage
      }

      // Создаем новый div элемент
      var sourceDiv = $('<div>', {
        'class': 'head__action selector sources',
        'style': 'position: relative;',
        'html': "<div class=\"source-logo\" style=\"text-align: center;\"></div>"
      });

      // Добавляем новый div как первый дочерний элемент контейнера '.head__actions'
      $('.head__actions').prepend(sourceDiv);

      // Обновляем логотип плеера під іконкою, відображаємо наступний логотип
      var nextSourceIndex = (currentSourceIndex + 1) % sources.length; // Наступний індекс
      var nextSourceLogo = logos[sources[nextSourceIndex]]; // Логотип наступного джерела
      sourceDiv.find('.source-logo').html(nextSourceLogo); // Відображаємо логотип

      // Добавляем обработчик события 'hover:enter' для переключения
      sourceDiv.on('hover:enter', function () {
        currentSourceIndex = (currentSourceIndex + 1) % sources.length; // Переключаем индекс
        var selectedSource = sources[currentSourceIndex]; // Получаем выбранный
        Lampa.Storage.set('source', selectedSource); // Сохраняем выбор в Storage

        var nextLogo = logos[sources[(currentSourceIndex + 1) % sources.length]]; // Логотип наступного джерела
        sourceDiv.find('.source-logo').html(nextLogo); // Обновляем логотип под иконкой

        Lampa.Activity.replace({
          source: selectedSource,
          title: Lampa.Lang.translate("title_main") + ' - ' + selectedSource.toUpperCase() // Название источника в верхнем регистре
        });
      });
    }
    var sourceSwitch = {
      main: main$2
    };

    function main$1() {
      // Add CSS styles first
      var styleElement = $('<style>').text("\n        .card__lmerating {\n            position: absolute;\n            right: -0.8em;\n            padding: 0.4em 0.4em;\n            background: linear-gradient(90deg, #2c2c2c, #1a1a1a);\n            color: #fff;\n            font-size: 0.8em;\n            border-radius: 0.3em;\n            text-transform: uppercase;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n        }\n\n        @media (max-width: 768px) {\n            .card__lmerating {\n                right: 0.2em;\n                font-size: 0.7em;\n            }\n        }\n\n        @media (max-width: 480px) {\n            .card__lmerating {\n                right: 0.5em;\n                font-size: 0.6em;\n            }\n        }\n    ");
      $('head').append(styleElement);

      // Add ratings listener
      Lampa.Listener.follow("full", function (e) {
        var cardData = e.object;
        if (e.type == "complite") {
          var settings = {
            url: "https://api.mdblist.com/tmdb/".concat(cardData.method == 'tv' ? 'show' : cardData.method, "/").concat(cardData.id, "?apikey=").concat(Lampa.Storage.get('lme_ratings')),
            method: "GET",
            timeout: 0
          };
          $.ajax(settings).done(function (response) {
            var ratings = response.ratings;
            var validRatings = ratings.filter(function (rating) {
              if (cardData.source === 'cub') {
                return rating.value !== null && rating.source !== 'tmdb' && rating.source !== 'imdb';
              }
              return rating.value !== null && rating.source !== 'tmdb';
            });
            var posterContainer = $('.full-start-new__poster.loaded');
            var topOffset = 1;
            var spacing = 2;
            validRatings.forEach(function (rating, index) {
              if (rating.value) {
                var topPosition = topOffset + index * spacing;
                var ratingElement = $("<div class=\"card__lmerating ".concat(rating.source, "\" style=\"top: ").concat(topPosition, "em; bottom: auto;\">").concat(rating.source, ": ").concat(rating.value, "</div>"));
                posterContainer.append(ratingElement);
              }
            });
          });
        }
      });
    }
    var ratings = {
      main: main$1
    };

    function main() {
      console.log('StreamingDiscovery: Module initialized');

      // Add CSS styles first
      var styleElement = $('<style>').text("\n        .full-start-new__streaming-ratings {\n            display: flex;\n            align-items: center;\n            margin-bottom: 1em;\n            flex-wrap: wrap;\n        }\n        \n        .streaming-rating {\n            display: flex;\n            align-items: center;\n            margin-right: 1.5em;\n            margin-bottom: 0.5em;\n        }\n        \n        .streaming-rating__icon {\n            width: 2em;\n            height: 2em;\n            margin-right: 0.5em;\n            border-radius: 0.3em;\n            object-fit: contain;\n        }\n        \n        .streaming-rating__score {\n            font-size: 1.2em;\n            font-weight: bold;\n        }\n        \n        @media (max-width: 768px) {\n            .streaming-rating__icon {\n                width: 1.8em;\n                height: 1.8em;\n            }\n            \n            .streaming-rating__score {\n                font-size: 1.1em;\n            }\n        }\n        \n        @media (max-width: 480px) {\n            .streaming-rating__icon {\n                width: 1.5em;\n                height: 1.5em;\n            }\n            \n            .streaming-rating__score {\n                font-size: 1em;\n            }\n        }\n    ");
      $('head').append(styleElement);
      console.log('StreamingDiscovery: CSS styles added');

      // Add streaming discovery listener
      Lampa.Listener.follow("full", function (e) {
        console.log('StreamingDiscovery: "full" event received', e.type);
        var cardData = e.object;
        if (e.type == "complite") {
          console.log('StreamingDiscovery: Card data loaded', cardData);

          // Get IMDB ID from card data
          var imdbId = '';
          if (cardData.card.imdb_id) {
            imdbId = cardData.card.imdb_id;
            console.log('StreamingDiscovery: Found IMDB ID in cardData.imdb_id', imdbId);
          } else if (cardData.movie && cardData.movie.imdb_id) {
            imdbId = cardData.movie.imdb_id;
            console.log('StreamingDiscovery: Found IMDB ID in cardData.movie.imdb_id', imdbId);
          } else if (cardData.external_ids && cardData.external_ids.imdb_id) {
            imdbId = cardData.external_ids.imdb_id;
            console.log('StreamingDiscovery: Found IMDB ID in cardData.external_ids.imdb_id', imdbId);
          } else {
            console.log('StreamingDiscovery: No IMDB ID found in card data', cardData.card.imdb_id);
          }

          // If IMDB ID is found, make the API request
          if (imdbId) {
            // Ensure IMDB ID has the 'tt' prefix
            if (!imdbId.startsWith('tt')) {
              imdbId = 'tt' + imdbId;
              console.log('StreamingDiscovery: Added tt prefix to IMDB ID', imdbId);
            }
            var settings = {
              url: "https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://www.streamingdiscovery.com/api/public/cache/ratings/movie?id=".concat(imdbId),
              method: "GET",
              timeout: 0
            };
            console.log('StreamingDiscovery: Making API request', settings.url);
            $.ajax(settings).done(function (response) {
              console.log('StreamingDiscovery: API response received', response);
              if (response && response.Data) {
                var data = response.Data;
                console.log('StreamingDiscovery: Data extracted from response', data);
                var ratingServices = [{
                  name: 'imdb',
                  label: 'IMDb',
                  value: data.imdb
                }, {
                  name: 'metacritic',
                  label: 'Metacritic',
                  value: data.metacritic
                }, {
                  name: 'tmdb',
                  label: 'TMDB',
                  value: data.tmdb
                }, {
                  name: 'rotten-tomatoes',
                  label: 'Rotten Tomatoes',
                  value: data.rottenTomatoes
                }, {
                  name: 'trakt',
                  label: 'Trakt',
                  value: data.trakt
                }, {
                  name: 'film-affinity',
                  label: 'FilmAffinity',
                  value: data.filmAffinity
                }];
                console.log('StreamingDiscovery: Rating services prepared', ratingServices);

                // Create container for streaming ratings
                var ratingsContainer = $('<div class="full-start-new__streaming-ratings"></div>');

                // Add each available rating
                ratingServices.forEach(function (service) {
                  if (service.value) {
                    console.log('StreamingDiscovery: Adding rating for', service.name, service.value);
                    var ratingElement = $("\n                                    <div class=\"streaming-rating streaming-rating--".concat(service.name, "\">\n                                        <img class=\"streaming-rating__icon\" style=\"filter: grayscale(100%)\" src=\"https://www.streamingdiscovery.com/logo/").concat(service.name, ".png\" alt=\"").concat(service.label, "\">\n                                        <div class=\"streaming-rating__score\">").concat(service.value, "</div>\n                                    </div>\n                                "));
                    ratingsContainer.append(ratingElement);
                  }
                });

                // Find the rate line element and insert our ratings before it
                var rateLineElement = $('.full-start-new__rate-line');
                console.log('StreamingDiscovery: Rate line element found?', rateLineElement.length > 0);
                if (rateLineElement.length) {
                  // /* if (rateLineElement.length) {
                  //     rateLineElement.before(ratingsContainer);
                  //     console.log('StreamingDiscovery: Ratings container inserted before rate line');
                  // } else {
                  //     console.log('StreamingDiscovery: Rate line element not found, trying alternative insertion');
                  //     // Try alternative insertion points
                  //     const fullInfo = $('.full-start-new__details');
                  //     if (fullInfo.length) {
                  //         fullInfo.prepend(ratingsContainer);
                  //         console.log('StreamingDiscovery: Ratings container inserted at beginning of details');
                  //     } else {
                  //         console.log('StreamingDiscovery: No suitable insertion point found');
                  //     }
                  // }*/

                  // Replace the contents of the rate line element
                  rateLineElement.html(ratingsContainer);
                  console.log('StreamingDiscovery: Ratings container replaced contents of rate line');
                } else {
                  // Fallback insertion point
                  var fullInfo = $('.full-start-new__details');
                  if (fullInfo.length) {
                    fullInfo.prepend(ratingsContainer);
                    console.log('StreamingDiscovery: Ratings container inserted at beginning of details');
                  } else {
                    console.log('StreamingDiscovery: No suitable insertion point found');
                  }
                }
              } else {
                console.log('StreamingDiscovery: No data in response or invalid response format', response);
              }
            }).fail(function (jqXHR, textStatus, errorThrown) {
              console.error("StreamingDiscovery request failed:", textStatus, errorThrown);
              console.log('StreamingDiscovery: AJAX error details', jqXHR);
            });
          } else {
            console.log('StreamingDiscovery: No valid IMDB ID found, skipping API request');
          }
        }
      });
      console.log('StreamingDiscovery: Event listener registered');
    }
    var streamingdiscovery = {
      main: main
    };

    var manifest = {
      type: "other",
      version: "0.0.5",
      author: '@lme_chat',
      name: "Lampa Movie Enhancer",
      description: "Some tweaks for movie content",
      component: "lme"
    };
    function add() {
      Lang.main();
      Lampa.Manifest.plugins = manifest;
      CONFIG.main();
      //if(Lampa.Storage.get('lme_quality')) Lampa.Storage.get('lme_quality')
      if (Lampa.Storage.get('lme_quality') == true) localStorage.removeItem('lme_quality');
      if (Lampa.Storage.get('lme_wmquality')) StreamQuality.main();
      if (Lampa.Storage.get('lme_endata') == true) englishData.main();
      if (Lampa.Storage.get('lme_averageRuntime') == true) averageRuntime.main();
      if (Lampa.Storage.get('lme_switchsource') == true) sourceSwitch.main();
      if (Lampa.Storage.get('lme_showbutton') == true) showButton.main();
      if (Lampa.Storage.get('lme_ratings') !== null && Lampa.Storage.get('lme_ratings') !== undefined && Lampa.Storage.get('lme_ratings') !== '') ratings.main();
      if (Lampa.Storage.get('lme_streamingdiscovery') == true) streamingdiscovery.main();
    }
    function startPlugin() {
      window.plugin_lme_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_lme_ready) startPlugin();

})();
