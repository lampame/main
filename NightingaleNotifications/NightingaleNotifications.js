(function () {
    'use strict';

    var manifest = {
      type: 'other',
      version: '0.2.0',
      name: 'Nightingale Notifications',
      description: 'Episode notifications channel with external subscriptions service',
      component: 'nightingale_notifications'
    };
    var SETTINGS_COMPONENT = 'nightingale_notifications';
    var NOTICE_CHANNEL = 'nightingale';
    var NOTICE_DB = 'nightingale_notifications_notice';
    var SUBSCRIBES_COMPONENT = 'nightingale_subscribes';
    var MENU_BUTTON_CLASS = 'nightingale-notifications-menu-button';
    var SERVICE_HOST = 'notifications.lme.isroot.in';
    var API_BASE = 'https://' + SERVICE_HOST;
    var STORAGE_KEYS = {
      enabled: 'nightingale_notifications_enabled',
      syncUid: 'nightingale_notifications_sync_uid'
    };
    var WS_RECONNECT_MIN = 2000;
    var WS_RECONNECT_MAX = 60000;
    var REQUEST_TIMEOUT = 12000;
    var DETAILS_CACHE_TTL = 1000 * 60 * 60 * 6;
    var SUBSCRIPTION_STATUS_TTL = 1000 * 15;

    var state = {
      started: false,
      menuButtonAdded: false,
      subscribesComponentRegistered: false,
      ws: null,
      wsUrl: '',
      wsTimer: null,
      wsPingTimer: null,
      wsPongTimer: null,
      wsDelay: WS_RECONNECT_MIN,
      subscriptions: new Set(),
      subscriptionsImdb: new Set(),
      subscriptionsByImdb: new Map(),
      subscriptionsLoaded: false,
      subscriptionsSyncedAt: 0,
      subscriptionsPromise: null,
      subscriptionStatusSyncedAt: new Map(),
      subscriptionStatusRequests: new Map(),
      subscriptionStatusByContentId: new Map(),
      buttonTargets: new Map(),
      pendingToggle: new Set(),
      detailsCache: new Map()
    };

    function injectStyles() {
      if (document.getElementById('nightingale-notifications-style')) return;
      Lampa.Template.add('nightingale_notifications_style', "<style id=\"nightingale-notifications-style\">\n        .nightingale-notifications__uid{font-family:monospace;opacity:.86}.nightingale-notifications__bell-body{fill:rgba(127,147,170,0.08);stroke:#8ea4bf;-webkit-transition:fill .2s ease,stroke .2s ease;-o-transition:fill .2s ease,stroke .2s ease;transition:fill .2s ease,stroke .2s ease}.nightingale-notifications__bell-clapper{fill:#a2b2c6;-webkit-transition:fill .2s ease,opacity .2s ease;-o-transition:fill .2s ease,opacity .2s ease;transition:fill .2s ease,opacity .2s ease}.button--nightingale-subscribe .nightingale-notifications__bell{-webkit-filter:none;filter:none;opacity:1;-webkit-transition:opacity .2s ease,-webkit-filter .2s ease;transition:opacity .2s ease,-webkit-filter .2s ease;-o-transition:filter .2s ease,opacity .2s ease;transition:filter .2s ease,opacity .2s ease;transition:filter .2s ease,opacity .2s ease,-webkit-filter .2s ease}.button--nightingale-subscribe.active .nightingale-notifications__bell{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.button--nightingale-subscribe.active .nightingale-notifications__bell-body{fill:rgba(0,91,187,0.24);stroke:#005bbb}.button--nightingale-subscribe.active .nightingale-notifications__bell-clapper{fill:#ffd500}.button--nightingale-subscribe.nightingale-notifications--unavailable{opacity:.72}.button--nightingale-subscribe.nightingale-notifications--unavailable .nightingale-notifications__bell-body{fill:rgba(127,147,170,0.04);stroke:#72849b}.button--nightingale-subscribe.nightingale-notifications--unavailable .nightingale-notifications__bell-clapper{fill:#8ea4bf}.button--nightingale-subscribe.nightingale-notifications--busy{opacity:.62;pointer-events:none}\n    </style>");
      $('body').append(Lampa.Template.get('nightingale_notifications_style', {}, true));
    }

    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }

    function registerTranslations() {
      if (!Lampa.Lang || typeof Lampa.Lang.add !== 'function') return;
      Lampa.Lang.add({
        nn_settings_component_name: {
          en: 'Nightingale Notifications',
          uk: 'Nightingale Notifications',
          ru: 'Nightingale Notifications'
        },
        nn_settings_enable_name: {
          en: 'Enable plugin',
          uk: 'Увімкнути плагін',
          ru: 'Включить плагин'
        },
        nn_settings_enable_descr: {
          en: 'Adds a separate Nightingale bell for series subscriptions.',
          uk: 'Додає окремий дзвоник Nightingale для підписок на серіали.',
          ru: 'Добавляет отдельный колокольчик Nightingale для подписок на сериалы.'
        },
        nn_settings_sync_title: {
          en: 'User sync',
          uk: 'Синхронізація користувача',
          ru: 'Синхронизация пользователя'
        },
        nn_settings_device_uid_name: {
          en: 'Device UID',
          uk: 'UID пристрою',
          ru: 'UID устройства'
        },
        nn_settings_current_lampa_uid: {
          en: 'Current lampa_uid',
          uk: 'Поточний lampa_uid',
          ru: 'Текущий lampa_uid'
        },
        nn_settings_sync_uid: {
          en: 'Sync UID',
          uk: 'Sync UID',
          ru: 'Sync UID'
        },
        nn_settings_effective_user_id: {
          en: 'Effective user id',
          uk: 'Ефективний user id',
          ru: 'Эффективный user id'
        },
        nn_settings_sync_override_name: {
          en: 'Sync UID override',
          uk: 'Перевизначення Sync UID',
          ru: 'Переопределение Sync UID'
        },
        nn_settings_sync_override_descr: {
          en: 'If filled, this UID is used instead of local lampa_uid.',
          uk: 'Якщо заповнено, цей UID використовується замість локального lampa_uid.',
          ru: 'Если заполнено, этот UID используется вместо локального lampa_uid.'
        },
        nn_settings_sync_override_placeholder: {
          en: 'Optional lampa_uid from another device',
          uk: 'Необовʼязковий lampa_uid з іншого пристрою',
          ru: 'Необязательный lampa_uid с другого устройства'
        },
        nn_settings_sync_clear_name: {
          en: 'Clear sync UID',
          uk: 'Очистити Sync UID',
          ru: 'Очистить Sync UID'
        },
        nn_settings_health_name: {
          en: 'Health check',
          uk: 'Перевірка сервісу',
          ru: 'Проверка сервиса'
        },
        nn_settings_open_subscribes_name: {
          en: 'Open subscriptions',
          uk: 'Відкрити підписки',
          ru: 'Открыть подписки'
        },
        nn_menu_subscribes: {
          en: 'Nightingale',
          uk: 'Nightingale',
          ru: 'Nightingale'
        },
        nn_subscribes_title: {
          en: 'Nightingale Subscriptions',
          uk: 'Підписки Nightingale',
          ru: 'Подписки Nightingale'
        },
        nn_subscribes_empty_title: {
          en: 'No subscriptions yet',
          uk: 'Підписок поки немає',
          ru: 'Подписок пока нет'
        },
        nn_subscribes_empty_descr: {
          en: 'Subscribe to a TV series with the Nightingale bell in the card.',
          uk: 'Підпишіться на серіал через дзвоник Nightingale у картці.',
          ru: 'Подпишитесь на сериал через колокольчик Nightingale в карточке.'
        },
        nn_subscribes_disabled_title: {
          en: 'Plugin is disabled',
          uk: 'Плагін вимкнено',
          ru: 'Плагин отключен'
        },
        nn_subscribes_disabled_descr: {
          en: 'Enable Nightingale Notifications in settings.',
          uk: 'Увімкніть Nightingale Notifications у налаштуваннях.',
          ru: 'Включите Nightingale Notifications в настройках.'
        },
        nn_subscribes_uid_title: {
          en: 'Sync UID is required',
          uk: 'Потрібен Sync UID',
          ru: 'Требуется Sync UID'
        },
        nn_subscribes_uid_descr: {
          en: 'Set Sync UID or ensure local lampa_uid exists on this device.',
          uk: 'Вкажіть Sync UID або переконайтесь, що локальний lampa_uid існує на цьому пристрої.',
          ru: 'Укажите Sync UID или убедитесь, что локальный lampa_uid существует на этом устройстве.'
        },
        nn_subscribes_action_unsubscribe: {
          en: 'Unsubscribe',
          uk: 'Відписатися',
          ru: 'Отписаться'
        },
        nn_subscribes_action_unsubscribe_descr: {
          en: 'Remove this series from Nightingale',
          uk: 'Видалити цей серіал із підписок',
          ru: 'Удалить этот сериал из подписок'
        },
        nn_button_title: {
          en: 'Nightingale',
          uk: 'Nightingale',
          ru: 'Nightingale'
        },
        nn_button_state_not_subscribed: {
          en: 'Not subscribed',
          uk: 'Не підписано',
          ru: 'Не подписано'
        },
        nn_button_state_subscribed: {
          en: 'Subscribed',
          uk: 'Підписано',
          ru: 'Подписано'
        },
        nn_button_state_unavailable: {
          en: 'Unavailable',
          uk: 'Недоступно',
          ru: 'Недоступно'
        },
        nn_notice_channel_name: {
          en: 'Nightingale',
          uk: 'Nightingale',
          ru: 'Nightingale'
        },
        nn_notice_new_episode: {
          en: 'New episode is available',
          uk: 'Доступна нова серія',
          ru: 'Доступна новая серия'
        },
        nn_notice_series_update: {
          en: 'Series update is available',
          uk: 'Доступне оновлення серіалу',
          ru: 'Доступно обновление сериала'
        },
        nn_series_name: {
          en: 'Series',
          uk: 'Серіал',
          ru: 'Сериал'
        },
        nn_noty_prefix: {
          en: 'Nightingale',
          uk: 'Nightingale',
          ru: 'Nightingale'
        },
        nn_noty_subscribed: {
          en: 'Subscription enabled',
          uk: 'Підписку увімкнено',
          ru: 'Подписка включена'
        },
        nn_noty_unsubscribed: {
          en: 'Subscription removed',
          uk: 'Підписку вимкнено',
          ru: 'Подписка отключена'
        },
        nn_noty_unsubscribe_by_error: {
          en: 'Subscription cancelled because series was not found in database',
          uk: 'Нажаль ваша підписка скасована, так як ми не знайшли його в базі',
          ru: 'Подписка отменена, так как сериал не найден в базе'
        },
        nn_noty_sync_uid_required: {
          en: 'Set Sync UID or ensure local lampa_uid exists.',
          uk: 'Вкажіть Sync UID або переконайтесь, що локальний lampa_uid існує.',
          ru: 'Укажите Sync UID или убедитесь, что локальный lampa_uid существует.'
        },
        nn_noty_sync_uid_cleared: {
          en: 'Sync UID is cleared',
          uk: 'Sync UID очищено',
          ru: 'Sync UID очищен'
        },
        nn_noty_request_failed: {
          en: 'Request failed',
          uk: 'Запит не виконано',
          ru: 'Запрос не выполнен'
        },
        nn_noty_series_not_releasing: {
          en: 'This series is no longer releasing',
          uk: 'Цей серіал більше не виходить',
          ru: 'Этот сериал больше не выходит'
        },
        nn_noty_no_subscription_target: {
          en: 'No available series to subscribe',
          uk: 'Немає на що підписуватись',
          ru: 'Нет доступного сериала для подписки'
        },
        nn_noty_subscribe_not_confirmed: {
          en: 'Subscription is not confirmed',
          uk: 'Підписку не підтверджено',
          ru: 'Подписка не подтверждена'
        },
        nn_noty_unsubscribe_not_confirmed: {
          en: 'Unsubscribe is not confirmed',
          uk: 'Відписку не підтверджено',
          ru: 'Отписка не подтверждена'
        },
        nn_noty_health_prefix: {
          en: 'Health',
          uk: 'Стан сервісу',
          ru: 'Состояние сервиса'
        }
      });
    }
    function t(key) {
      if (!Lampa.Lang || typeof Lampa.Lang.translate !== 'function') return key;
      return Lampa.Lang.translate(key);
    }
    function fallbackSeriesTitle(tmdbId) {
      return t('nn_series_name') + ' #' + String(tmdbId || 0);
    }
    function withPrefix(message) {
      return t('nn_noty_prefix') + ': ' + String(message || '');
    }

    function buildContentId(rawId) {
      if (rawId === null || rawId === undefined) return '';
      var str = String(rawId).trim();
      if (!str) return '';
      var tvMatch = str.match(/^tv:(\d+)$/i);
      if (tvMatch) {
        var tmdbId = parseInt(tvMatch[1], 10);
        return tmdbId > 0 ? 'tv:' + tmdbId : '';
      }
      var numericMatch = str.match(/^(\d+)$/);
      if (numericMatch) {
        var _tmdbId = parseInt(numericMatch[1], 10);
        return _tmdbId > 0 ? 'tv:' + _tmdbId : '';
      }
      return '';
    }
    function resolveSubscriptionContentId(row) {
      if (!row || _typeof(row) !== 'object') return '';
      var candidates = [row._id, row.tmdb_id, row.id, row.content_id];
      for (var i = 0; i < candidates.length; i++) {
        var contentId = buildContentId(candidates[i]);
        if (contentId) return contentId;
      }
      return '';
    }
    function parseTmdbId(contentId) {
      var match = String(contentId || '').match(/^tv:(\d+)$/);
      if (!match) return 0;
      return parseInt(match[1], 10) || 0;
    }
    function resolveTvContentIds(input) {
      var list = [];
      var cards = Array.isArray(input) ? input : [input];
      cards.forEach(function (card) {
        appendTvCardCandidates(list, card);
      });
      return list;
    }
    function appendTvCardCandidates(list, card) {
      if (!card || _typeof(card) !== 'object') return;
      var source = String(card.source || '').toLowerCase();
      var isTmdbSource = source === 'tmdb';
      var beforeStrong = list.length;
      pushContentId(list, card.nightingale_content_id);
      pushContentId(list, card.content_id);
      pushContentId(list, card.tmdb_id);
      pushContentId(list, card.tmdbId);
      if (typeof card._id === 'string' && /^tv:\d+$/i.test(card._id.trim())) {
        pushContentId(list, card._id);
      }
      if (isTmdbSource) {
        pushContentId(list, card.id);
        pushContentId(list, card._id);
        return;
      }
      if (list.length === beforeStrong) {
        var beforeFallback = list.length;
        pushContentId(list, card.id);
        if (list.length === beforeFallback) {
          pushContentId(list, card._id);
        }
      }
    }
    function pushContentId(list, rawValue) {
      var contentId = buildContentId(rawValue);
      if (!contentId) return;
      if (list.indexOf(contentId) >= 0) return;
      list.push(contentId);
    }
    function normalizeImdbId(value) {
      if (!value) return '';
      var raw = String(value).trim().toLowerCase();
      if (!raw) return '';
      if (/^tt\d+$/.test(raw)) return raw;
      var digits = raw.replace(/[^\d]/g, '');
      if (!digits) return '';
      return 'tt' + digits;
    }
    function isTvCard(event, movie) {
      if (event && event.object && event.object.method === 'tv') return true;
      if (movie && movie.number_of_seasons) return true;
      if (movie && movie.first_air_date) return true;
      return false;
    }
    function parseDetectedAt(value) {
      if (!value) return Date.now();
      var timestamp = Date.parse(String(value));
      if (isNaN(timestamp)) return Date.now();
      return timestamp;
    }
    function parsePositiveInt(value) {
      var parsed = parseInt(value, 10);
      return isNaN(parsed) || parsed < 1 ? 0 : parsed;
    }
    function resolveSeriesTitle(card, tmdbId) {
      if (!card) return fallbackSeriesTitle(tmdbId);
      if (Lampa.Lang && typeof Lampa.Lang.selected === 'function' && Lampa.Lang.selected(['ru', 'uk', 'be'])) {
        return card.name || card.title || card.original_name || card.original_title || fallbackSeriesTitle(tmdbId);
      }
      return card.original_name || card.original_title || card.name || card.title || fallbackSeriesTitle(tmdbId);
    }
    function escapeHtml(value) {
      return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function isPluginEnabled() {
      return Lampa.Storage.get(STORAGE_KEYS.enabled, false) === true;
    }
    function getLocalLampaUid() {
      var fromStorage = String(Lampa.Storage.get('lampa_uid', '') || '').trim();
      if (fromStorage) return fromStorage;
      var fromLocalStorage = String(window.localStorage.getItem('lampa_uid') || '').trim();
      return fromLocalStorage;
    }
    function getSyncUid() {
      return String(Lampa.Storage.get(STORAGE_KEYS.syncUid, '') || '').trim();
    }
    function getEffectiveUserId() {
      return getSyncUid() || getLocalLampaUid();
    }
    function isRuntimeAvailable() {
      if (!isPluginEnabled()) return false;
      if (!getEffectiveUserId()) return false;
      return true;
    }

    function apiRequest(path, options) {
      var params = options || {};
      var method = params.method || 'GET';
      var timeout = params.timeout || REQUEST_TIMEOUT;
      return new Promise(function (resolve, reject) {
        var headers = {};
        if (params.auth !== false) {
          var userId = getEffectiveUserId();
          if (!userId) {
            reject(createApiError(t('nn_noty_sync_uid_required'), 0));
            return;
          }
          headers['x-user-id'] = userId;
        }
        var ajaxOptions = {
          url: API_BASE + path,
          type: method,
          timeout: timeout,
          dataType: 'json',
          headers: headers
        };
        if (typeof params.body !== 'undefined') {
          ajaxOptions.contentType = 'application/json; charset=utf-8';
          ajaxOptions.data = JSON.stringify(params.body);
          ajaxOptions.processData = false;
        }
        $.ajax(ajaxOptions).done(function (result) {
          resolve(result || {});
        }).fail(function (jqXHR, textStatus, errorThrown) {
          var payload = jqXHR && jqXHR.responseJSON ? jqXHR.responseJSON : null;
          var reason = payload && payload.error ? payload.error : errorThrown || textStatus || t('nn_noty_request_failed');
          reject(createApiError(reason, jqXHR ? jqXHR.status : 0, payload));
        });
      });
    }
    function subscribeToSeries(contentId, imdbId) {
      var body = {
        _id: contentId
      };
      if (imdbId) body.imdb_id = imdbId;
      return apiRequest('/v1/subscriptions', {
        method: 'POST',
        body: body
      });
    }
    function unsubscribeFromSeries(contentId) {
      return apiRequest('/v1/subscriptions/' + encodeURIComponent(contentId), {
        method: 'DELETE'
      });
    }
    function getSubscriptionStatus(contentId) {
      var normalizedContentId = buildContentId(contentId);
      if (!normalizedContentId) {
        return Promise.reject(createApiError(t('nn_noty_no_subscription_target'), 422));
      }
      return apiRequest('/v1/subscriptions/' + encodeURIComponent(normalizedContentId) + '/status', {
        method: 'GET'
      });
    }
    function loadSubscriptions(state, redrawAllSubscribeButtons) {
      if (state.subscriptionsPromise) return state.subscriptionsPromise;
      state.subscriptionsPromise = apiRequest('/v1/subscriptions', {
        method: 'GET'
      }).then(function (result) {
        var next = new Set();
        var nextImdb = new Set();
        var nextByImdb = new Map();
        var rows = result && Array.isArray(result.results) ? result.results : [];
        rows.forEach(function (row) {
          var contentId = resolveSubscriptionContentId(row);
          if (contentId) next.add(contentId);
          var imdbId = normalizeImdbId(row && row.imdb_id ? row.imdb_id : '');
          if (imdbId) {
            nextImdb.add(imdbId);
            if (contentId && !nextByImdb.has(imdbId)) nextByImdb.set(imdbId, contentId);
          }
        });
        state.subscriptions = next;
        state.subscriptionsImdb = nextImdb;
        state.subscriptionsByImdb = nextByImdb;
        if (state.subscriptionStatusSyncedAt && typeof state.subscriptionStatusSyncedAt.clear === 'function') {
          state.subscriptionStatusSyncedAt.clear();
        }
        state.subscriptionsLoaded = true;
        state.subscriptionsSyncedAt = Date.now();
        if (typeof redrawAllSubscribeButtons === 'function') {
          redrawAllSubscribeButtons();
        }
        return rows;
      })["catch"](function (error) {
        state.subscriptionsLoaded = false;
        if (typeof redrawAllSubscribeButtons === 'function') {
          redrawAllSubscribeButtons();
        }
        throw error;
      })["finally"](function () {
        state.subscriptionsPromise = null;
      });
      return state.subscriptionsPromise;
    }
    function checkHealth() {
      return apiRequest('/health', {
        method: 'GET',
        auth: false
      }).then(function (result) {
        var status = result && result.status ? String(result.status) : 'ok';
        Lampa.Noty.show(withPrefix(t('nn_noty_health_prefix') + ': ' + status));
      })["catch"](function (error) {
        var message = error && error.message ? error.message : t('nn_noty_request_failed');
        Lampa.Noty.show(withPrefix(t('nn_noty_health_prefix') + ': ' + message));
      });
    }
    function createApiError(message, status, payload) {
      var error = new Error(String(message || t('nn_noty_request_failed')));
      error.status = status || 0;
      error.payload = payload || null;
      return error;
    }

    function registerSettings(restartRuntime) {
      var settingsApi = Lampa.SettingsApi || Lampa.Settings;
      if (!settingsApi || typeof settingsApi.addComponent !== 'function') return;
      settingsApi.addComponent({
        component: SETTINGS_COMPONENT,
        name: t('nn_settings_component_name'),
        icon: getSettingsIcon()
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          type: 'title'
        },
        field: {
          name: t('nn_settings_component_name')
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          name: STORAGE_KEYS.enabled,
          type: 'trigger',
          "default": false
        },
        field: {
          name: t('nn_settings_enable_name'),
          description: t('nn_settings_enable_descr')
        },
        onChange: function onChange() {
          restartRuntime('settings_enabled');
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          type: 'title'
        },
        field: {
          name: t('nn_settings_sync_title')
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          type: 'static'
        },
        field: {
          name: t('nn_settings_device_uid_name'),
          description: ''
        },
        onRender: function onRender(item) {
          var localUid = getLocalLampaUid() || '-';
          var effectiveUid = getEffectiveUserId() || '-';
          var syncUid = getSyncUid() || '-';
          item.find('.settings-param__name').text(t('nn_settings_current_lampa_uid') + ': ' + localUid);
          item.find('.settings-param__descr').remove();
          item.append("<div class=\"settings-param__descr\">\n                ".concat(escapeHtml(t('nn_settings_sync_uid')), ": <span class=\"nightingale-notifications__uid\">").concat(escapeHtml(syncUid), "</span><br>\n                ").concat(escapeHtml(t('nn_settings_effective_user_id')), ": <span class=\"nightingale-notifications__uid\">").concat(escapeHtml(effectiveUid), "</span>\n            </div>"));
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          name: STORAGE_KEYS.syncUid,
          type: 'input',
          "default": '',
          values: '',
          placeholder: t('nn_settings_sync_override_placeholder')
        },
        field: {
          name: t('nn_settings_sync_override_name'),
          description: t('nn_settings_sync_override_descr')
        },
        onChange: function onChange() {
          restartRuntime('settings_sync_uid');
          Lampa.Settings.update();
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          name: 'nightingale_notifications_sync_uid_clear',
          type: 'button'
        },
        field: {
          name: t('nn_settings_sync_clear_name')
        },
        onRender: function onRender(item) {
          item.toggleClass('hide', !Boolean(getSyncUid()));
        },
        onChange: function onChange() {
          Lampa.Storage.set(STORAGE_KEYS.syncUid, '');
          Lampa.Noty.show(withPrefix(t('nn_noty_sync_uid_cleared')));
          restartRuntime('settings_clear_sync_uid');
          Lampa.Settings.update();
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          name: 'nightingale_notifications_open_subscribes',
          type: 'button'
        },
        field: {
          name: t('nn_settings_open_subscribes_name')
        },
        onChange: function onChange() {
          if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
          if (Lampa.Controller && typeof Lampa.Controller.toggle === 'function') {
            Lampa.Controller.toggle('settings');
          }
          setTimeout(function () {
            Lampa.Activity.push({
              url: '',
              title: t('nn_subscribes_title'),
              component: SUBSCRIBES_COMPONENT,
              page: 1
            });
          }, 0);
        }
      });
      settingsApi.addParam({
        component: SETTINGS_COMPONENT,
        param: {
          name: 'nightingale_notifications_health_check',
          type: 'button'
        },
        field: {
          name: t('nn_settings_health_name')
        },
        onChange: function onChange() {
          checkHealth();
        }
      });
    }
    function getSettingsIcon() {
      if (Lampa.Template && typeof Lampa.Template.string === 'function') {
        try {
          var icon = Lampa.Template.string('icon_bell');
          if (icon) return icon;
        } catch (error) {}
      }
      return "<svg width=\"28\" height=\"28\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\" fill=\"currentColor\"></path>\n        <path d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke=\"currentColor\" stroke-width=\"2.6\"></path>\n    </svg>";
    }

    function registerNoticeChannel() {
      if (!Lampa.Notice || !Lampa.NoticeClassLampa) return;
      if (Lampa.Notice.classes && Lampa.Notice.classes[NOTICE_CHANNEL]) return;
      Lampa.Notice.addClass(NOTICE_CHANNEL, new Lampa.NoticeClassLampa({
        name: t('nn_notice_channel_name'),
        db_name: NOTICE_DB
      }));
    }
    function pushNotice(notice) {
      return new Promise(function (resolve) {
        if (!Lampa.Notice || typeof Lampa.Notice.pushNotice !== 'function') {
          resolve(false);
          return;
        }
        Lampa.Notice.pushNotice(NOTICE_CHANNEL, notice, function () {
          resolve(true);
        }, function () {
          resolve(false);
        });
      });
    }

    var BUTTON_CLASS = 'button--nightingale-subscribe';
    var TERMINAL_SERIES_STATUSES = ['ended', 'canceled', 'cancelled', 'released'];
    function createButtonsController(params) {
      var state = params.state;
      var isPluginEnabled = params.isPluginEnabled;
      var isRuntimeAvailable = params.isRuntimeAvailable;
      var subscribeToSeries = params.subscribeToSeries;
      var unsubscribeFromSeries = params.unsubscribeFromSeries;
      var getSubscriptionStatus = params.getSubscriptionStatus;
      if (!state.subscriptionStatusSyncedAt) state.subscriptionStatusSyncedAt = new Map();
      if (!state.subscriptionStatusRequests) state.subscriptionStatusRequests = new Map();
      if (!state.subscriptionStatusByContentId) state.subscriptionStatusByContentId = new Map();
      function onFullEvent(event) {
        if (!event || event.type !== 'build' || event.name !== 'start') return;
        var startItem = event.item;
        var root = startItem && startItem.html ? startItem.html : null;
        var movie = event.data && event.data.movie ? event.data.movie : null;
        if (!root || !root.length || !movie) return;
        if (!isPluginEnabled()) {
          removeNightingaleButtons(root);
          return;
        }
        if (!isTvCard(event, movie)) return;
        var button = ensureNightingaleButton(root);
        if (!button.length) return;
        button.off('hover:enter.nightingale hover:focus.nightingale');
        button.on('hover:focus.nightingale', function () {
          if (startItem) startItem.last = button[0];
        });
        var objectContentId = resolveEventObjectContentId(event);
        var contentIds = resolveTvContentIds([movie, event && event.object ? event.object.card : null, event && event.object ? event.object.movie : null, event && event.object ? {
          id: event.object.id,
          source: event.object.source
        } : null]);
        if (objectContentId && contentIds.indexOf(objectContentId) === -1) {
          contentIds.unshift(objectContentId);
        }
        var imdbId = normalizeImdbId(movie && movie.imdb_id ? movie.imdb_id : '');
        var normalizedIds = normalizeContentIds(contentIds);
        if (!normalizedIds.length) {
          setupUnavailableButton(button);
          return;
        }
        var contentId = normalizedIds[0];
        button.on('hover:enter.nightingale', function () {
          onSubscribeButtonEnter(contentId, normalizedIds, movie);
        });
        registerButtonTarget(contentId, normalizedIds, imdbId, button[0]);
        redrawSubscribeButton(contentId);
        syncSubscriptionStatus(contentId, normalizedIds, imdbId, true);
      }
      function ensureNightingaleButton(root) {
        var container = root.find('.full-start-new__buttons');
        if (!container.length) return $();
        var button = container.find('.' + BUTTON_CLASS);
        if (button.length) return button;
        button = $(createButtonTemplate());
        var optionsButton = container.find('.button--options').first();
        if (optionsButton.length) optionsButton.before(button);else container.append(button);
        return button;
      }
      function createButtonTemplate() {
        return "<div class=\"full-start__button selector ".concat(BUTTON_CLASS, "\">\n            <svg class=\"nightingale-notifications__bell\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path class=\"nightingale-notifications__bell-clapper\" d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\"></path>\n                <path class=\"nightingale-notifications__bell-body\" d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke-width=\"2.6\"></path>\n            </svg>\n            <span>").concat(escapeHtml(t('nn_button_state_not_subscribed')), "</span>\n        </div>");
      }
      function removeNightingaleButtons(root) {
        if (!root || !root.length) return;
        root.find('.' + BUTTON_CLASS).each(function () {
          unregisterButtonTarget(this);
        }).remove();
      }
      function registerButtonTarget(contentId, contentIds, imdbId, node) {
        if (!node) return;
        var resolvedIds = normalizeContentIds(contentIds && contentIds.length ? contentIds : [contentId]);
        var primaryContentId = resolvedIds.length ? resolvedIds[0] : buildContentId(contentId);
        if (!primaryContentId) return;
        unregisterButtonTarget(node);
        node.dataset.nightingaleContentId = primaryContentId;
        node.dataset.nightingaleContentIds = resolvedIds.join(',');
        node.dataset.nightingaleImdbId = imdbId || '';
        node.dataset.nightingaleSubscribed = resolveKnownSubscribedValue(primaryContentId);
        node.dataset.nightingaleUnavailable = '0';
        if (!state.buttonTargets.has(primaryContentId)) {
          state.buttonTargets.set(primaryContentId, new Set());
        }
        state.buttonTargets.get(primaryContentId).add(node);
      }
      function setupUnavailableButton(button) {
        if (!button || !button.length) return;
        var node = button[0];
        unregisterButtonTarget(node);
        node.dataset.nightingaleUnavailable = '1';
        node.dataset.nightingaleSubscribed = '0';
        var label = t('nn_button_state_unavailable');
        button.toggleClass('hide', !isPluginEnabled());
        button.removeClass('active');
        button.removeClass('nightingale-notifications--busy');
        button.addClass('nightingale-notifications--unavailable');
        button.attr('data-subtitle', label);
        button.find('span').text(label);
        applyButtonVisualState(button, false, true);
        button.on('hover:enter.nightingale', function () {
          Lampa.Noty.show(withPrefix(t('nn_noty_no_subscription_target')));
        });
      }
      function unregisterButtonTarget(node) {
        if (!node || !node.dataset) return;
        var oldContentId = node.dataset.nightingaleContentId;
        delete node.dataset.nightingaleContentIds;
        delete node.dataset.nightingaleImdbId;
        delete node.dataset.nightingaleSubscribed;
        delete node.dataset.nightingaleUnavailable;
        if (!oldContentId) return;
        var targets = state.buttonTargets.get(oldContentId);
        if (!targets) return;
        targets["delete"](node);
        if (!targets.size) state.buttonTargets["delete"](oldContentId);
      }
      function redrawAllSubscribeButtons() {
        state.buttonTargets.forEach(function (_, contentId) {
          redrawSubscribeButton(contentId);
        });
        $('.' + BUTTON_CLASS).each(function () {
          if (this && this.dataset && this.dataset.nightingaleContentId) return;
          var button = $(this);
          var enabled = isPluginEnabled();
          button.toggleClass('hide', !enabled);
          if (!enabled) {
            button.removeClass('active');
            button.removeClass('nightingale-notifications--busy');
          }
        });
      }
      function redrawSubscribeButton(contentId) {
        var targets = state.buttonTargets.get(contentId);
        if (!targets || !targets.size) return;
        var enabled = isPluginEnabled();
        var pending = state.pendingToggle.has(contentId);
        var removed = [];
        targets.forEach(function (node) {
          if (!node || !document.body.contains(node)) {
            removed.push(node);
            return;
          }
          var button = $(node);
          var nodeContentIds = readNodeContentIds(node);
          var nodeImdbId = normalizeImdbId(node.dataset.nightingaleImdbId || '');
          var subscribedOverride = resolveSubscribedFromStatusMap(nodeContentIds, nodeImdbId);
          var subscribed = subscribedOverride === null ? isSubscribed(nodeContentIds, nodeImdbId) : subscribedOverride;
          var unavailable = String(node.dataset.nightingaleUnavailable || '') === '1';
          var label = resolveButtonLabel(subscribed, unavailable);
          button.toggleClass('hide', !enabled);
          button.toggleClass('active', subscribed);
          button.toggleClass('nightingale-notifications--busy', pending);
          button.toggleClass('nightingale-notifications--unavailable', unavailable);
          button.attr('data-subtitle', label);
          button.find('span').text(label);
          applyButtonVisualState(button, subscribed, unavailable);
          if (!enabled) {
            button.removeClass('active');
            button.removeClass('nightingale-notifications--busy');
            button.removeClass('nightingale-notifications--unavailable');
          }
        });
        removed.forEach(function (node) {
          targets["delete"](node);
        });
        if (!targets.size) state.buttonTargets["delete"](contentId);
      }
      function onSubscribeButtonEnter(contentId, contentIds, movie) {
        if (state.pendingToggle.has(contentId)) return;
        if (!isRuntimeAvailable()) {
          Lampa.Noty.show(withPrefix(t('nn_noty_sync_uid_required')));
          return;
        }
        var normalizedIds = normalizeContentIds(contentIds && contentIds.length ? contentIds : [contentId]);
        if (!normalizedIds.length) {
          Lampa.Noty.show(withPrefix(t('nn_noty_no_subscription_target')));
          return;
        }
        var primaryContentId = normalizedIds[0];
        var imdbId = normalizeImdbId(movie && movie.imdb_id ? movie.imdb_id : '');
        state.pendingToggle.add(primaryContentId);
        redrawSubscribeButton(primaryContentId);
        syncSubscriptionStatus(primaryContentId, normalizedIds, imdbId, true)["catch"](function () {})["finally"](function () {
          var resolvedSubscribedContentId = resolveSubscribedContentId(normalizedIds, imdbId);
          var resolvedSubscribed = !!resolvedSubscribedContentId || isImdbSubscribed(imdbId);
          if (resolvedSubscribed && !resolvedSubscribedContentId) {
            state.pendingToggle["delete"](primaryContentId);
            redrawSubscribeButton(primaryContentId);
            Lampa.Noty.show(withPrefix(t('nn_noty_request_failed')));
            return;
          }
          var action = resolvedSubscribed ? unsubscribeFromSeries(resolvedSubscribedContentId) : subscribeToSeries(primaryContentId, imdbId);
          action.then(function (rawActionResult) {
            var requestedSubscribe = !resolvedSubscribed;
            var actionResult = normalizeStatusResponse(rawActionResult);
            var hasExplicitSubscribed = hasSubscribedField(actionResult);
            var expectedSubscribed = requestedSubscribe;
            if (hasExplicitSubscribed) {
              expectedSubscribed = parseSubscribedFlag(actionResult.subscribed);
              var updatedContentId = applySubscriptionStatus(actionResult, normalizedIds, imdbId);
              state.subscriptionStatusByContentId.set(primaryContentId, expectedSubscribed);
              setTargetsSubscribed(primaryContentId, expectedSubscribed);
              if (updatedContentId && updatedContentId !== primaryContentId) {
                state.subscriptionStatusByContentId.set(updatedContentId, expectedSubscribed);
                setTargetsSubscribed(updatedContentId, expectedSubscribed);
              }
            } else {
              if (requestedSubscribe) {
                applyLocalSubscriptionState(primaryContentId, imdbId, true);
              } else {
                applyLocalSubscriptionState(resolvedSubscribedContentId || primaryContentId, imdbId, false);
                if (resolvedSubscribedContentId && resolvedSubscribedContentId !== primaryContentId) {
                  applyLocalSubscriptionState(primaryContentId, imdbId, false);
                }
              }
            }
            state.subscriptionsLoaded = true;
            state.subscriptionsSyncedAt = Date.now();
            state.subscriptionStatusSyncedAt.set(primaryContentId, Date.now());
            setTargetsUnavailable(primaryContentId, false);
            redrawSubscribeButton(primaryContentId);
            return syncSubscriptionStatus(primaryContentId, normalizedIds, imdbId, true).then(function () {
              var finalSubscribed = resolveCurrentSubscribedState(normalizedIds, imdbId);
              showToggleResultMessage(requestedSubscribe, finalSubscribed);
            })["catch"](function () {
              showToggleResultMessage(requestedSubscribe, expectedSubscribed);
            });
          })["catch"](function (error) {
            var message = resolveToggleErrorMessage(error);
            Lampa.Noty.show(withPrefix(message));
          })["finally"](function () {
            state.pendingToggle["delete"](primaryContentId);
            redrawSubscribeButton(primaryContentId);
          });
        });
      }
      function syncSubscriptionStatus(contentId, contentIds, imdbId, force) {
        if (!getSubscriptionStatus || typeof getSubscriptionStatus !== 'function') return Promise.resolve(null);
        if (!isRuntimeAvailable()) return Promise.resolve(null);
        var normalizedIds = normalizeContentIds(contentIds && contentIds.length ? contentIds : [contentId]);
        if (!normalizedIds.length) return Promise.resolve(null);
        var primaryContentId = normalizedIds[0];
        if (state.subscriptionStatusRequests.has(primaryContentId)) {
          return state.subscriptionStatusRequests.get(primaryContentId);
        }
        var syncedAt = parseInt(state.subscriptionStatusSyncedAt.get(primaryContentId) || 0, 10) || 0;
        if (!force && syncedAt && Date.now() - syncedAt < SUBSCRIPTION_STATUS_TTL) {
          return Promise.resolve({
            cached: true
          });
        }
        var request = getSubscriptionStatus(primaryContentId).then(function (rawResult) {
          var result = normalizeStatusResponse(rawResult);
          var updatedContentId = applySubscriptionStatus(result, normalizedIds, imdbId);
          var statusSubscribed = parseSubscribedFlag(result && result.subscribed);
          state.subscriptionStatusSyncedAt.set(primaryContentId, Date.now());
          state.subscriptionStatusByContentId.set(primaryContentId, statusSubscribed);
          setTargetsSubscribed(primaryContentId, statusSubscribed);
          setTargetsUnavailable(primaryContentId, false);
          redrawSubscribeButton(primaryContentId);
          if (updatedContentId && updatedContentId !== primaryContentId) {
            state.subscriptionStatusByContentId.set(updatedContentId, statusSubscribed);
            setTargetsSubscribed(updatedContentId, statusSubscribed);
            setTargetsUnavailable(updatedContentId, false);
            redrawSubscribeButton(updatedContentId);
          }
          return result;
        })["catch"](function (error) {
          if (error && (parseInt(error.status || 0, 10) === 404 || parseInt(error.status || 0, 10) === 422)) {
            state.subscriptionStatusByContentId.set(primaryContentId, false);
            setTargetsSubscribed(primaryContentId, false);
            setTargetsUnavailable(primaryContentId, true);
            redrawSubscribeButton(primaryContentId);
          }
          throw error;
        })["finally"](function () {
          state.subscriptionStatusRequests["delete"](primaryContentId);
        });
        state.subscriptionStatusRequests.set(primaryContentId, request);
        return request;
      }
      function applyLocalSubscriptionState(contentId, imdbId, subscribed) {
        var normalizedContentId = buildContentId(contentId);
        if (!normalizedContentId) return;
        if (subscribed) {
          state.subscriptions.add(normalizedContentId);
          if (imdbId) {
            state.subscriptionsImdb.add(imdbId);
            if (state.subscriptionsByImdb) state.subscriptionsByImdb.set(imdbId, normalizedContentId);
          }
        } else {
          state.subscriptions["delete"](normalizedContentId);
          if (imdbId) {
            state.subscriptionsImdb["delete"](imdbId);
            if (state.subscriptionsByImdb) state.subscriptionsByImdb["delete"](imdbId);
          }
          pruneImdbMappingsByContentIds([normalizedContentId]);
        }
        state.subscriptionStatusByContentId.set(normalizedContentId, subscribed);
        setTargetsSubscribed(normalizedContentId, subscribed);
      }
      function resolveCurrentSubscribedState(contentIds, imdbId) {
        var fromStatusMap = resolveSubscribedFromStatusMap(contentIds, imdbId);
        if (fromStatusMap !== null) return fromStatusMap;
        return isSubscribed(contentIds, imdbId);
      }
      function showToggleResultMessage(requestedSubscribe, finalSubscribed) {
        if (requestedSubscribe) {
          Lampa.Noty.show(withPrefix(finalSubscribed ? t('nn_noty_subscribed') : t('nn_noty_subscribe_not_confirmed')));
          return;
        }
        Lampa.Noty.show(withPrefix(finalSubscribed ? t('nn_noty_unsubscribe_not_confirmed') : t('nn_noty_unsubscribed')));
      }
      function isSubscribed(contentIds, imdbId) {
        if (resolveSubscribedContentId(contentIds, imdbId)) return true;
        if (isImdbSubscribed(imdbId)) return true;
        return false;
      }
      function isImdbSubscribed(imdbId) {
        return !!(imdbId && state.subscriptionsImdb && state.subscriptionsImdb.has(imdbId));
      }
      function resolveSubscribedContentId(contentIds, imdbId) {
        var normalizedIds = normalizeContentIds(contentIds);
        for (var i = 0; i < normalizedIds.length; i++) {
          if (state.subscriptions.has(normalizedIds[i])) return normalizedIds[i];
        }
        if (imdbId && state.subscriptionsByImdb && state.subscriptionsByImdb.has(imdbId)) {
          var fromMap = buildContentId(state.subscriptionsByImdb.get(imdbId));
          if (fromMap && state.subscriptions.has(fromMap)) return fromMap;
        }
        return '';
      }
      function applySubscriptionStatus(result, contentIds, imdbId) {
        var normalizedIds = normalizeContentIds(contentIds);
        var resolvedContentId = buildContentId(result && (result._id || result.tmdb_id || ''));
        var resolvedImdbId = normalizeImdbId(result && result.imdb_id ? result.imdb_id : imdbId);
        var subscribed = parseSubscribedFlag(result && result.subscribed);
        if (resolvedContentId && normalizedIds.indexOf(resolvedContentId) === -1) {
          normalizedIds.unshift(resolvedContentId);
        }
        if (subscribed) {
          var actualContentId = resolvedContentId || normalizedIds[0];
          if (!actualContentId) return '';
          state.subscriptions.add(actualContentId);
          if (resolvedImdbId) {
            state.subscriptionsImdb.add(resolvedImdbId);
            if (state.subscriptionsByImdb) state.subscriptionsByImdb.set(resolvedImdbId, actualContentId);
          }
          return actualContentId;
        }
        normalizedIds.forEach(function (id) {
          state.subscriptions["delete"](id);
        });
        if (resolvedImdbId) {
          state.subscriptionsImdb["delete"](resolvedImdbId);
          if (state.subscriptionsByImdb) state.subscriptionsByImdb["delete"](resolvedImdbId);
        }
        pruneImdbMappingsByContentIds(normalizedIds);
        return resolvedContentId || '';
      }
      function pruneImdbMappingsByContentIds(contentIds) {
        if (!state.subscriptionsByImdb || !state.subscriptionsByImdb.forEach) return;
        var normalizedIds = normalizeContentIds(contentIds);
        if (!normalizedIds.length) return;
        var keysToDelete = [];
        state.subscriptionsByImdb.forEach(function (mappedContentId, imdbId) {
          var normalizedMappedId = buildContentId(mappedContentId);
          if (normalizedMappedId && normalizedIds.indexOf(normalizedMappedId) >= 0) {
            keysToDelete.push(imdbId);
          }
        });
        keysToDelete.forEach(function (imdbId) {
          state.subscriptionsByImdb["delete"](imdbId);
          state.subscriptionsImdb["delete"](imdbId);
        });
      }
      function readNodeContentIds(node) {
        if (!node || !node.dataset) return [];
        var fromList = String(node.dataset.nightingaleContentIds || '').split(',').map(function (id) {
          return String(id || '').trim();
        });
        fromList.push(String(node.dataset.nightingaleContentId || '').trim());
        return normalizeContentIds(fromList);
      }
      function normalizeContentIds(values) {
        var list = Array.isArray(values) ? values : [values];
        var normalized = [];
        list.forEach(function (value) {
          var contentId = buildContentId(value);
          if (!contentId || normalized.indexOf(contentId) >= 0) return;
          normalized.push(contentId);
        });
        return normalized;
      }
      function resolveEventObjectContentId(event) {
        var object = event && event.object ? event.object : null;
        if (!object) return '';
        var method = String(object.method || '').toLowerCase();
        if (method !== 'tv') return '';
        return buildContentId(object.id);
      }
      function setTargetsUnavailable(contentId, unavailable) {
        var targets = state.buttonTargets.get(contentId);
        if (targets && targets.size) {
          targets.forEach(function (node) {
            if (!node || !node.dataset) return;
            node.dataset.nightingaleUnavailable = unavailable ? '1' : '0';
          });
        }
        var direct = findDomTargetsByContentId(contentId);
        direct.forEach(function (node) {
          if (!node || !node.dataset) return;
          node.dataset.nightingaleUnavailable = unavailable ? '1' : '0';
          renderSingleButtonNode(node);
        });
      }
      function setTargetsSubscribed(contentId, subscribed) {
        var targets = state.buttonTargets.get(contentId);
        if (targets && targets.size) {
          targets.forEach(function (node) {
            if (!node || !node.dataset) return;
            node.dataset.nightingaleSubscribed = subscribed ? '1' : '0';
          });
        }
        var direct = findDomTargetsByContentId(contentId);
        direct.forEach(function (node) {
          if (!node || !node.dataset) return;
          node.dataset.nightingaleSubscribed = subscribed ? '1' : '0';
          renderSingleButtonNode(node);
        });
      }
      function resolveSubscribedFromStatusMap(contentIds, imdbId) {
        var normalizedIds = normalizeContentIds(contentIds);
        for (var i = 0; i < normalizedIds.length; i++) {
          var contentId = normalizedIds[i];
          if (!state.subscriptionStatusByContentId.has(contentId)) continue;
          var value = state.subscriptionStatusByContentId.get(contentId);
          if (typeof value === 'boolean') return value;
        }
        if (imdbId && state.subscriptionsByImdb && state.subscriptionsByImdb.has(imdbId)) {
          var mapped = buildContentId(state.subscriptionsByImdb.get(imdbId));
          if (mapped && state.subscriptionStatusByContentId.has(mapped)) {
            var mappedValue = state.subscriptionStatusByContentId.get(mapped);
            if (typeof mappedValue === 'boolean') return mappedValue;
          }
        }
        return null;
      }
      function resolveButtonLabel(subscribed, unavailable) {
        if (unavailable) return t('nn_button_state_unavailable');
        return subscribed ? t('nn_button_state_subscribed') : t('nn_button_state_not_subscribed');
      }
      function resolveKnownSubscribedValue(contentId) {
        if (!contentId) return '';
        if (!state.subscriptionStatusByContentId || !state.subscriptionStatusByContentId.has(contentId)) return '';
        return state.subscriptionStatusByContentId.get(contentId) ? '1' : '0';
      }
      function findDomTargetsByContentId(contentId) {
        if (!contentId || typeof document === 'undefined' || !document.querySelectorAll) return [];
        var matches = document.querySelectorAll('.' + BUTTON_CLASS);
        var nodes = [];
        for (var i = 0; i < matches.length; i++) {
          var node = matches[i];
          if (!node || !node.dataset) continue;
          var nodeContentId = buildContentId(node.dataset.nightingaleContentId || '');
          if (nodeContentId !== contentId) continue;
          nodes.push(node);
        }
        return nodes;
      }
      function renderSingleButtonNode(node) {
        if (!node || !node.dataset) return;
        var button = $(node);
        var enabled = isPluginEnabled();
        var contentId = buildContentId(node.dataset.nightingaleContentId || '');
        var pending = contentId ? state.pendingToggle.has(contentId) : false;
        var nodeContentIds = readNodeContentIds(node);
        var nodeImdbId = normalizeImdbId(node.dataset.nightingaleImdbId || '');
        var subscribedOverride = resolveSubscribedFromStatusMap(nodeContentIds, nodeImdbId);
        var subscribed = subscribedOverride === null ? isSubscribed(nodeContentIds, nodeImdbId) : subscribedOverride;
        var unavailable = String(node.dataset.nightingaleUnavailable || '') === '1';
        var label = resolveButtonLabel(subscribed, unavailable);
        button.toggleClass('hide', !enabled);
        button.toggleClass('active', subscribed);
        button.toggleClass('nightingale-notifications--busy', pending);
        button.toggleClass('nightingale-notifications--unavailable', unavailable);
        button.attr('data-subtitle', label);
        button.find('span').text(label);
        applyButtonVisualState(button, subscribed, unavailable);
      }
      function applyButtonVisualState(button, subscribed, unavailable) {
        if (!button || !button.length) return;
        var node = button[0];
        if (!node || typeof node.querySelector !== 'function') return;
        var body = node.querySelector('.nightingale-notifications__bell-body');
        var clapper = node.querySelector('.nightingale-notifications__bell-clapper');
        if (!body || !clapper) return;
        if (unavailable) {
          body.style.fill = 'rgba(127, 147, 170, 0.04)';
          body.style.stroke = '#72849b';
          clapper.style.fill = '#8ea4bf';
          return;
        }
        if (subscribed) {
          body.style.fill = 'rgba(0, 91, 187, 0.24)';
          body.style.stroke = '#005BBB';
          clapper.style.fill = '#FFD500';
          return;
        }
        body.style.fill = 'rgba(127, 147, 170, 0.08)';
        body.style.stroke = '#8ea4bf';
        clapper.style.fill = '#a2b2c6';
      }
      function resolveToggleErrorMessage(error) {
        if (!error) return t('nn_noty_request_failed');
        var statusCode = parseInt(error.status || 0, 10) || 0;
        var payload = error.payload || {};
        var payloadStatus = String(payload.status || '').toLowerCase();
        var payloadError = String(payload.error || '').toLowerCase();
        if (statusCode === 404) {
          return t('nn_noty_no_subscription_target');
        }
        if (statusCode === 409 && isTerminalSeriesStatus(payloadStatus, payloadError)) {
          return t('nn_noty_series_not_releasing');
        }
        return error && error.message ? error.message : t('nn_noty_request_failed');
      }
      function isTerminalSeriesStatus(status, message) {
        if (TERMINAL_SERIES_STATUSES.indexOf(String(status || '').toLowerCase()) >= 0) return true;
        var text = String(message || '').toLowerCase();
        if (!text) return false;
        if (text.indexOf('series is not eligible for subscription') >= 0) return true;
        for (var i = 0; i < TERMINAL_SERIES_STATUSES.length; i++) {
          if (text.indexOf(TERMINAL_SERIES_STATUSES[i]) >= 0) return true;
        }
        return false;
      }
      function parseSubscribedFlag(value) {
        if (value === true || value === 1) return true;
        if (typeof value === 'string') {
          var normalized = value.trim().toLowerCase();
          return normalized === 'true' || normalized === '1' || normalized === 'yes' || normalized === 'on';
        }
        return false;
      }
      function hasSubscribedField(value) {
        if (!value || _typeof(value) !== 'object') return false;
        return Object.prototype.hasOwnProperty.call(value, 'subscribed');
      }
      function normalizeStatusResponse(raw) {
        if (!raw || _typeof(raw) !== 'object') return {};
        var fromData = raw.data && _typeof(raw.data) === 'object' ? raw.data : null;
        var fromResult = raw.result && _typeof(raw.result) === 'object' ? raw.result : null;
        if (fromData && hasStatusFields(fromData)) return fromData;
        if (fromResult && hasStatusFields(fromResult)) return fromResult;
        return raw;
      }
      function hasStatusFields(value) {
        if (!value || _typeof(value) !== 'object') return false;
        return Object.prototype.hasOwnProperty.call(value, 'subscribed') || Object.prototype.hasOwnProperty.call(value, '_id') || Object.prototype.hasOwnProperty.call(value, 'tmdb_id');
      }
      return {
        onFullEvent: onFullEvent,
        redrawAllSubscribeButtons: redrawAllSubscribeButtons,
        redrawSubscribeButton: redrawSubscribeButton
      };
    }

    var cachedCategoryClass = null;
    var LEGACY_MENU_TITLES = ['Підписки Nightingale', 'Nightingale Subscriptions', 'Подписки Nightingale'];
    function registerSubscribesFeature(params) {
      registerSubscribesComponent(params);
      registerMenuButton(params);
    }
    function registerSubscribesComponent(params) {
      var state = params.state;
      if (!state || state.subscribesComponentRegistered) return;
      if (!Lampa.Component || typeof Lampa.Component.add !== 'function') return;
      Lampa.Component.add(SUBSCRIBES_COMPONENT, function (object) {
        return createSubscribesComponent(object, params);
      });
      state.subscribesComponentRegistered = true;
    }
    function registerMenuButton(params) {
      var state = params.state;
      if (!state || state.menuButtonAdded) return;
      var addButton = function addButton() {
        if (state.menuButtonAdded) return;
        if (!Lampa.Menu || typeof Lampa.Menu.addButton !== 'function') return;
        migrateStoredMenuTitles();
        var existing = $('.' + MENU_BUTTON_CLASS);
        if (existing.length) {
          state.menuButtonAdded = true;
          return;
        }
        var button = Lampa.Menu.addButton(getMenuIcon(), t('nn_menu_subscribes'), function () {
          openSubscribesActivity();
        });
        button.addClass(MENU_BUTTON_CLASS);
        state.menuButtonAdded = true;
      };
      if (window.appready) {
        addButton();
        return;
      }
      if (!Lampa.Listener || typeof Lampa.Listener.follow !== 'function') return;
      Lampa.Listener.follow('app', function (event) {
        if (!event || event.type !== 'ready') return;
        addButton();
      });
    }
    function createSubscribesComponent(object, params) {
      var comp = createCategoryComponent(object);
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          var isPluginEnabled = params.isPluginEnabled();
          var isRuntimeAvailable = params.isRuntimeAvailable();
          if (!isPluginEnabled) {
            setEmptyState(this, 'disabled');
            this.empty();
            return;
          }
          if (!isRuntimeAvailable) {
            setEmptyState(this, 'uid');
            this.empty();
            return;
          }
          setEmptyState(this, 'empty');
          params.loadSubscriptions().then(function (rows) {
            return buildCardsFromRows(rows, params.resolveSeriesDetails);
          }).then(function (cards) {
            if (!cards.length) {
              _this.empty();
              return;
            }
            _this.build({
              results: cards
            });
          })["catch"](function () {
            _this.empty();
          });
        },
        onInstance: function onInstance(item, data) {
          item.use({
            onlyEnter: function onlyEnter() {
              openFullCard(data);
            },
            onFocus: function onFocus() {
              if (!Lampa.Background || !Lampa.Utils || typeof Lampa.Utils.cardImgBackground !== 'function') return;
              Lampa.Background.change(Lampa.Utils.cardImgBackground(data));
            },
            onMenu: function onMenu(menu) {
              menu.unshift({
                title: t('nn_subscribes_action_unsubscribe'),
                subtitle: t('nn_subscribes_action_unsubscribe_descr'),
                onSelect: function onSelect() {
                  unsubscribeCard(params, data);
                }
              });
            }
          });
        }
      });
      return comp;
    }
    function createCategoryComponent(object) {
      var categoryClass = resolveCategoryClass();
      if (categoryClass && Lampa.Utils && typeof Lampa.Utils.createInstance === 'function') {
        return Lampa.Utils.createInstance(categoryClass, object, {
          empty: {
            account: false
          }
        });
      }
      return createFallbackComponent(object);
    }
    function createFallbackComponent(object) {
      var comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        this.empty();
      };
      return comp;
    }
    function resolveCategoryClass() {
      if (cachedCategoryClass) return cachedCategoryClass;
      if (!Lampa.Component || typeof Lampa.Component.get !== 'function') return null;
      var subscribesFactory = Lampa.Component.get('subscribes');
      if (typeof subscribesFactory !== 'function') return null;
      try {
        var probe = new subscribesFactory({
          params: {}
        });
        if (probe && probe.constructor) {
          cachedCategoryClass = probe.constructor;
          if (typeof probe.destroy === 'function') probe.destroy();
          return cachedCategoryClass;
        }
      } catch (error) {}
      return null;
    }
    function buildCardsFromRows(rows, resolveSeriesDetails) {
      var list = Array.isArray(rows) ? rows : [];
      var refs = collectSubscriptionRefs(list);
      if (!refs.length) return Promise.resolve([]);
      var tasks = refs.map(function (ref) {
        var contentId = ref.contentId;
        var tmdbId = parseTmdbId(contentId);
        if (!tmdbId) return Promise.resolve(null);
        return resolveSeriesDetails(tmdbId).then(function (details) {
          return buildCard(details, tmdbId, contentId, ref.imdbId);
        })["catch"](function () {
          return buildCard(null, tmdbId, contentId, ref.imdbId);
        });
      });
      return Promise.all(tasks).then(function (cards) {
        return cards.filter(Boolean);
      });
    }
    function collectSubscriptionRefs(rows) {
      var seen = new Set();
      var list = [];
      rows.forEach(function (row) {
        var contentId = resolveSubscriptionContentId(row);
        if (!contentId || seen.has(contentId)) return;
        seen.add(contentId);
        list.push({
          contentId: contentId,
          imdbId: normalizeImdbId(row && row.imdb_id ? row.imdb_id : '')
        });
      });
      return list;
    }
    function buildCard(details, tmdbId, contentId, imdbId) {
      var fromDetails = details && details.card ? details.card : {};
      var fallbackTitle = fallbackSeriesTitle(tmdbId);
      var title = details && details.title ? details.title : fromDetails.name || fromDetails.title || fallbackTitle;
      var resolvedContentId = buildContentId(contentId) || buildContentId(tmdbId);
      return {
        id: fromDetails.id || tmdbId,
        source: fromDetails.source || 'tmdb',
        name: fromDetails.name || title,
        title: fromDetails.title || title,
        original_name: fromDetails.original_name || '',
        original_title: fromDetails.original_title || '',
        poster_path: fromDetails.poster_path || '',
        backdrop_path: fromDetails.backdrop_path || '',
        number_of_seasons: fromDetails.number_of_seasons || 1,
        nightingale_content_id: resolvedContentId,
        nightingale_imdb_id: imdbId || ''
      };
    }
    function setEmptyState(comp, type) {
      if (!comp.params) comp.params = {};
      if (!comp.params.empty) comp.params.empty = {};
      comp.params.empty.account = false;
      comp.params.empty.icon = Lampa.Template && typeof Lampa.Template.string === 'function' ? Lampa.Template.string('icon_empty_subscribe') : '';
      if (type === 'disabled') {
        comp.params.empty.title = t('nn_subscribes_disabled_title');
        comp.params.empty.descr = t('nn_subscribes_disabled_descr');
        return;
      }
      if (type === 'uid') {
        comp.params.empty.title = t('nn_subscribes_uid_title');
        comp.params.empty.descr = t('nn_subscribes_uid_descr');
        return;
      }
      comp.params.empty.title = t('nn_subscribes_empty_title');
      comp.params.empty.descr = t('nn_subscribes_empty_descr');
    }
    function openSubscribesActivity() {
      if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
      Lampa.Activity.push({
        url: '',
        title: t('nn_subscribes_title'),
        component: SUBSCRIBES_COMPONENT,
        page: 1
      });
    }
    function openFullCard(card) {
      if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
      if (!card || !card.id) return;
      Lampa.Activity.push({
        url: '',
        component: 'full',
        id: card.id,
        method: 'tv',
        card: card,
        source: card.source || 'tmdb'
      });
    }
    function getMenuIcon() {
      return "<svg class=\"nightingale-notifications__bell\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"nightingale-notifications__bell-clapper\" d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\"></path>\n        <path class=\"nightingale-notifications__bell-body\" d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke-width=\"2.6\"></path>\n    </svg>";
    }
    function unsubscribeCard(params, cardData) {
      var unsubscribe = params.unsubscribeFromSeries;
      if (typeof unsubscribe !== 'function') return;
      var contentId = getCardContentId(cardData);
      if (!contentId) return;
      if (params.state && params.state.pendingToggle && params.state.pendingToggle.has(contentId)) return;
      if (params.state && params.state.pendingToggle) {
        params.state.pendingToggle.add(contentId);
      }
      unsubscribe(contentId).then(function () {
        if (params.state && params.state.subscriptions) {
          params.state.subscriptions["delete"](contentId);
          var imdbId = getCardImdbId(cardData);
          if (imdbId && params.state.subscriptionsImdb) {
            params.state.subscriptionsImdb["delete"](imdbId);
            if (params.state.subscriptionsByImdb) {
              params.state.subscriptionsByImdb["delete"](imdbId);
            }
          }
          params.state.subscriptionsLoaded = true;
          params.state.subscriptionsSyncedAt = Date.now();
        }
        if (typeof params.onSubscriptionsChanged === 'function') {
          params.onSubscriptionsChanged();
        }
        Lampa.Noty.show(withPrefix(t('nn_noty_unsubscribed')));
        if (Lampa.Activity && typeof Lampa.Activity.replace === 'function') {
          Lampa.Activity.replace();
        }
      })["catch"](function (error) {
        var message = error && error.message ? error.message : t('nn_noty_request_failed');
        Lampa.Noty.show(withPrefix(message));
      })["finally"](function () {
        if (params.state && params.state.pendingToggle) {
          params.state.pendingToggle["delete"](contentId);
        }
      });
    }
    function migrateStoredMenuTitles() {
      if (!Lampa.Storage || typeof Lampa.Storage.get !== 'function' || typeof Lampa.Storage.set !== 'function') return;
      var nextTitle = String(t('nn_menu_subscribes') || '').trim();
      if (!nextTitle || nextTitle === 'nn_menu_subscribes') return;
      migrateStorageArray('menu_sort', nextTitle);
      migrateStorageArray('menu_hide', nextTitle);
    }
    function migrateStorageArray(key, nextTitle) {
      var current = normalizeStorageArray(Lampa.Storage.get(key, '[]'));
      if (!current.length) return;
      var changed = false;
      var migrated = current.map(function (title) {
        var value = String(title || '').trim();
        if (!value) return '';
        if (value === nextTitle) return nextTitle;
        if (LEGACY_MENU_TITLES.indexOf(value) >= 0) {
          changed = true;
          return nextTitle;
        }
        return value;
      }).filter(Boolean);
      var deduped = dedupeTitles(migrated);
      if (!changed && isSameArray(current, deduped)) return;
      Lampa.Storage.set(key, deduped, true);
    }
    function normalizeStorageArray(value) {
      if (Array.isArray(value)) return value;
      if (typeof value === 'string') {
        try {
          var parsed = JSON.parse(value);
          if (Array.isArray(parsed)) return parsed;
        } catch (error) {}
      }
      return [];
    }
    function dedupeTitles(list) {
      var seen = new Set();
      var result = [];
      list.forEach(function (title) {
        if (seen.has(title)) return;
        seen.add(title);
        result.push(title);
      });
      return result;
    }
    function isSameArray(left, right) {
      if (left.length !== right.length) return false;
      for (var i = 0; i < left.length; i++) {
        if (String(left[i] || '').trim() !== String(right[i] || '').trim()) return false;
      }
      return true;
    }
    function getCardContentId(cardData) {
      if (!cardData) return '';
      var direct = buildContentId(cardData.nightingale_content_id || '');
      if (direct) return direct;
      return buildContentId(cardData.id || '');
    }
    function getCardImdbId(cardData) {
      if (!cardData) return '';
      return normalizeImdbId(cardData.nightingale_imdb_id || cardData.imdb_id || '');
    }

    var PING_INTERVAL = 1000 * 30;
    var PONG_TIMEOUT = 1000 * 8;
    function createWsController(params) {
      var state = params.state;
      var isRuntimeAvailable = params.isRuntimeAvailable;
      var getEffectiveUserId = params.getEffectiveUserId;
      var pushNotice = params.pushNotice;
      var resolveSeriesDetails = params.resolveSeriesDetails;
      var redrawAllSubscribeButtons = params.redrawAllSubscribeButtons;
      function connectWebSocket() {
        if (!isRuntimeAvailable()) return;
        var wsUrl = buildWsUrl();
        if (!wsUrl) return;
        if (state.ws && (state.ws.readyState === WebSocket.OPEN || state.ws.readyState === WebSocket.CONNECTING) && state.wsUrl === wsUrl) {
          return;
        }
        stopWebSocket();
        clearTimeout(state.wsTimer);
        state.wsTimer = null;
        var ws;
        try {
          ws = new WebSocket(wsUrl);
        } catch (error) {
          scheduleReconnect();
          return;
        }
        ws.__nightingaleManualClose = false;
        ws.__nightingaleAlive = true;
        state.ws = ws;
        state.wsUrl = wsUrl;
        ws.onopen = function () {
          if (state.ws !== ws) return;
          state.wsDelay = WS_RECONNECT_MIN;
          startPingLoop(ws);
        };
        ws.onmessage = function (event) {
          if (state.ws !== ws) return;
          if (!event) return;
          if (event && event.data === 'pong') {
            markPong(ws);
            return;
          }
          var payload = parseWsJson(event.data);
          if (payload && payload.method === 'pong') {
            markPong(ws);
            return;
          }
          if (payload && payload.method === 'ping') {
            sendPong(ws, payload.data && payload.data.ts ? String(payload.data.ts) : '');
            return;
          }
          onWsPayload(payload);
        };
        ws.onerror = function () {};
        ws.onclose = function () {
          if (state.ws === ws) {
            state.ws = null;
            state.wsUrl = '';
          }
          stopPingLoop();
          if (!ws.__nightingaleManualClose) scheduleReconnect();
        };
      }
      function stopWebSocket() {
        clearTimeout(state.wsTimer);
        state.wsTimer = null;
        stopPingLoop();
        var ws = state.ws;
        state.ws = null;
        state.wsUrl = '';
        if (ws) {
          ws.__nightingaleManualClose = true;
          ws.onopen = null;
          ws.onmessage = null;
          ws.onerror = null;
          ws.onclose = null;
          try {
            ws.close();
          } catch (error) {}
        }
      }
      function buildWsUrl() {
        var userId = getEffectiveUserId();
        if (!userId) return '';
        return 'wss://' + SERVICE_HOST + '/lme/ws?user_id=' + encodeURIComponent(userId);
      }
      function scheduleReconnect() {
        if (!isRuntimeAvailable()) return;
        clearTimeout(state.wsTimer);
        var delay = state.wsDelay;
        state.wsDelay = Math.min(state.wsDelay * 2, WS_RECONNECT_MAX);
        state.wsTimer = setTimeout(function () {
          connectWebSocket();
        }, delay);
      }
      function startPingLoop(ws) {
        stopPingLoop();
        var ping = function ping() {
          if (state.ws !== ws || ws.readyState !== WebSocket.OPEN) return;
          var pingTs = new Date().toISOString();
          ws.__nightingaleAlive = false;
          ws.__nightingaleLastPingTs = pingTs;
          try {
            ws.send(JSON.stringify({
              method: 'ping',
              data: {
                ts: pingTs
              }
            }));
          } catch (error) {}
          clearTimeout(state.wsPongTimer);
          state.wsPongTimer = setTimeout(function () {
            if (state.ws !== ws) return;
            if (ws.__nightingaleAlive) return;
            try {
              ws.close();
            } catch (error) {}
          }, PONG_TIMEOUT);
        };
        ping();
        state.wsPingTimer = setInterval(ping, PING_INTERVAL);
      }
      function markPong(ws) {
        if (!ws) return;
        ws.__nightingaleAlive = true;
        clearTimeout(state.wsPongTimer);
        state.wsPongTimer = null;
      }
      function sendPong(ws, requestTs) {
        if (!ws || state.ws !== ws || ws.readyState !== WebSocket.OPEN) return;
        var payload = {
          method: 'pong',
          data: {
            ts: new Date().toISOString()
          }
        };
        if (requestTs) payload.data.request_ts = requestTs;
        try {
          ws.send(JSON.stringify(payload));
        } catch (error) {}
      }
      function parseWsJson(raw) {
        if (typeof raw !== 'string') return null;
        try {
          var parsed = JSON.parse(raw);
          return parsed && _typeof(parsed) === 'object' ? parsed : null;
        } catch (error) {
          return null;
        }
      }
      function stopPingLoop() {
        clearInterval(state.wsPingTimer);
        clearTimeout(state.wsPongTimer);
        state.wsPingTimer = null;
        state.wsPongTimer = null;
      }
      function onWsPayload(payload) {
        if (!payload || !payload.method) return;
        if (payload.method === 'lme_episode_new') {
          handleEpisodePayload(payload.data || {});
          return;
        }
        if (payload.method === 'unsubscribe_by_error') {
          handleUnsubscribeByErrorPayload(payload.data || {});
        }
      }
      function handleEpisodePayload(data) {
        var eventId = String(data && data.event_id ? data.event_id : '').trim();
        if (!eventId) return;
        buildEpisodeNotice(data).then(function (notice) {
          if (!notice) return;
          pushNotice(notice)["finally"](function () {
            sendAck(eventId);
          });
        })["catch"](function () {
          sendAck(eventId);
        });
      }
      function handleUnsubscribeByErrorPayload(data) {
        var eventId = String(data && data.event_id ? data.event_id : '').trim();
        if (!eventId) return;
        Promise.resolve().then(function () {
          processUnsubscribeByError(data);
        })["finally"](function () {
          sendAck(eventId);
        });
      }
      function sendAck(eventId) {
        if (!eventId) return;
        if (!state.ws || state.ws.readyState !== 1) return;
        try {
          state.ws.send(JSON.stringify({
            method: 'lme_ask',
            data: {
              event_id: eventId
            }
          }));
        } catch (error) {}
      }
      function buildEpisodeNotice(data) {
        var eventId = String(data && data.event_id ? data.event_id : '').trim();
        if (!eventId) return Promise.resolve(null);
        var contentId = buildContentId(data && data._id ? data._id : '');
        var tmdbId = parseTmdbId(contentId);
        var season = parsePositiveInt(data && data.season);
        var episode = parsePositiveInt(data && data.episode);
        var detectedAt = parseDetectedAt(data && data.detected_at);
        return resolveSeriesDetails(tmdbId).then(function (details) {
          var labels = [];
          if (season > 0) labels.push('S - <b>' + season + '</b>');
          if (episode > 0) labels.push('E - <b>' + episode + '</b>');
          var card = details.card || {
            id: tmdbId,
            source: 'tmdb',
            number_of_seasons: 1
          };
          var title = details.title || fallbackSeriesTitle(tmdbId);
          var text = season > 0 && episode > 0 ? t('nn_notice_new_episode') : t('nn_notice_series_update');
          return {
            id: eventId,
            from: NOTICE_CHANNEL,
            time: detectedAt,
            title: title,
            text: text,
            poster: details.poster || '',
            card: card,
            labels: labels
          };
        });
      }
      function processUnsubscribeByError(data) {
        var contentId = buildContentId(data && data._id ? data._id : '');
        var imdbId = normalizeImdbId(data && data.imdb_id ? data.imdb_id : '');
        if (contentId) {
          state.subscriptions["delete"](contentId);
          state.subscriptionStatusByContentId.set(contentId, false);
          state.subscriptionStatusSyncedAt.set(contentId, Date.now());
          pruneImdbMappingsByContentId(contentId);
        }
        if (imdbId) {
          state.subscriptionsImdb["delete"](imdbId);
          state.subscriptionsByImdb["delete"](imdbId);
        }
        state.subscriptionsLoaded = true;
        state.subscriptionsSyncedAt = Date.now();
        if (typeof Lampa !== 'undefined' && Lampa.Noty && typeof Lampa.Noty.show === 'function') {
          Lampa.Noty.show(withPrefix(t('nn_noty_unsubscribe_by_error')));
        }
        if (typeof redrawAllSubscribeButtons === 'function') {
          redrawAllSubscribeButtons();
        }
      }
      function pruneImdbMappingsByContentId(contentId) {
        if (!contentId) return;
        if (!state.subscriptionsByImdb || typeof state.subscriptionsByImdb.forEach !== 'function') return;
        var toDelete = [];
        state.subscriptionsByImdb.forEach(function (mappedContentId, mappedImdbId) {
          if (buildContentId(mappedContentId) === contentId) {
            toDelete.push(mappedImdbId);
          }
        });
        toDelete.forEach(function (mappedImdbId) {
          state.subscriptionsByImdb["delete"](mappedImdbId);
          state.subscriptionsImdb["delete"](mappedImdbId);
        });
      }
      return {
        connectWebSocket: connectWebSocket,
        stopWebSocket: stopWebSocket
      };
    }

    function resolveSeriesDetails(state, tmdbId) {
      if (!tmdbId) {
        return Promise.resolve({
          title: t('nn_series_name'),
          poster: '',
          card: null
        });
      }
      var cached = state.detailsCache.get(tmdbId);
      if (cached && Date.now() - cached.time < DETAILS_CACHE_TTL) {
        return Promise.resolve(cached.value);
      }
      var tmdbSource = Lampa.Api && Lampa.Api.sources ? Lampa.Api.sources.tmdb : null;
      if (!tmdbSource || typeof tmdbSource.get !== 'function') {
        var fallback = {
          title: fallbackSeriesTitle(tmdbId),
          poster: '',
          card: {
            id: tmdbId,
            source: 'tmdb',
            number_of_seasons: 1
          }
        };
        state.detailsCache.set(tmdbId, {
          time: Date.now(),
          value: fallback
        });
        return Promise.resolve(fallback);
      }
      return new Promise(function (resolve) {
        tmdbSource.get('tv/' + tmdbId, {}, function (card) {
          var details = {
            title: resolveSeriesTitle(card, tmdbId),
            poster: card && card.poster_path ? card.poster_path : '',
            card: {
              id: card && card.id ? card.id : tmdbId,
              source: 'tmdb',
              name: card && card.name ? card.name : '',
              original_name: card && card.original_name ? card.original_name : '',
              poster_path: card && card.poster_path ? card.poster_path : '',
              backdrop_path: card && card.backdrop_path ? card.backdrop_path : '',
              number_of_seasons: card && card.number_of_seasons ? card.number_of_seasons : 1
            }
          };
          state.detailsCache.set(tmdbId, {
            time: Date.now(),
            value: details
          });
          resolve(details);
        }, function () {
          var fallback = {
            title: fallbackSeriesTitle(tmdbId),
            poster: '',
            card: {
              id: tmdbId,
              source: 'tmdb',
              number_of_seasons: 1
            }
          };
          state.detailsCache.set(tmdbId, {
            time: Date.now(),
            value: fallback
          });
          resolve(fallback);
        }, {
          life: 60 * 24
        });
      });
    }

    var buttonsController;
    var loadSubscriptionsSafe = function loadSubscriptionsSafe() {
      if (!isRuntimeAvailable()) return Promise.resolve([]);
      return loadSubscriptions(state, buttonsController ? buttonsController.redrawAllSubscribeButtons : null);
    };
    var wsController = createWsController({
      state: state,
      isRuntimeAvailable: isRuntimeAvailable,
      getEffectiveUserId: getEffectiveUserId,
      pushNotice: pushNotice,
      redrawAllSubscribeButtons: function redrawAllSubscribeButtons() {
        if (!buttonsController || typeof buttonsController.redrawAllSubscribeButtons !== 'function') return;
        buttonsController.redrawAllSubscribeButtons();
      },
      resolveSeriesDetails: function resolveSeriesDetails$1(tmdbId) {
        return resolveSeriesDetails(state, tmdbId);
      }
    });
    buttonsController = createButtonsController({
      state: state,
      isPluginEnabled: isPluginEnabled,
      isRuntimeAvailable: isRuntimeAvailable,
      subscribeToSeries: subscribeToSeries,
      unsubscribeFromSeries: unsubscribeFromSeries,
      getSubscriptionStatus: getSubscriptionStatus
    });
    function startPlugin() {
      window.plugin_nightingale_notifications_ready = true;
      if (window.appready) init();else {
        Lampa.Listener.follow('app', function (event) {
          if (event.type === 'ready') init();
        });
      }
    }
    function init() {
      if (state.started) return;
      state.started = true;
      Lampa.Manifest.plugins = manifest;
      registerTranslations();
      injectStyles();
      registerSubscribesFeature({
        state: state,
        isPluginEnabled: isPluginEnabled,
        isRuntimeAvailable: isRuntimeAvailable,
        loadSubscriptions: loadSubscriptionsSafe,
        unsubscribeFromSeries: unsubscribeFromSeries,
        onSubscriptionsChanged: buttonsController.redrawAllSubscribeButtons,
        resolveSeriesDetails: function resolveSeriesDetails$1(tmdbId) {
          return resolveSeriesDetails(state, tmdbId);
        }
      });
      registerSettings(restartRuntime);
      registerNoticeChannel();
      Lampa.Listener.follow('full', buttonsController.onFullEvent);
      if (Lampa.Storage && Lampa.Storage.listener) {
        Lampa.Storage.listener.follow('change', onStorageChange);
      }
      restartRuntime();
    }
    function onStorageChange(event) {
      if (!event || !event.name) return;
      var watched = [STORAGE_KEYS.enabled, STORAGE_KEYS.syncUid, 'lampa_uid'];
      if (watched.indexOf(event.name) >= 0) restartRuntime();
    }
    function restartRuntime(reason) {
      wsController.stopWebSocket();
      if (!isRuntimeAvailable()) {
        state.subscriptionsLoaded = false;
        state.subscriptionsSyncedAt = 0;
        state.subscriptions.clear();
        state.subscriptionsImdb.clear();
        state.subscriptionsByImdb.clear();
        if (state.subscriptionStatusSyncedAt) state.subscriptionStatusSyncedAt.clear();
        if (state.subscriptionStatusRequests) state.subscriptionStatusRequests.clear();
        if (state.subscriptionStatusByContentId) state.subscriptionStatusByContentId.clear();
        buttonsController.redrawAllSubscribeButtons();
        return;
      }
      wsController.connectWebSocket();
    }
    if (!window.plugin_nightingale_notifications_ready) startPlugin();

})();
