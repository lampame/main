(function () {
  'use strict';

  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function main() {
    //Get Account or Guest
    var account = Lampa.Storage.get('account');
    var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
    //const deviceCode = Lampa.Storage.get('lmeTraktDeviceCode')[profileId];

    Lampa.SettingsApi.addComponent({
      component: "lmeTrakt",
      name: 'Trakt.TV',
      icon: "<svg width=\"800\" height=\"800\" viewBox=\"0 0 800 800\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g clip-path=\"url(#clip0_226_2)\">\n                    <path d=\"M400 800C179.5 800 0 620.5 0 400C0 179.5 179.5 0 400 0C620.5 0 800 179.5 800 400C800 620.5 620.5 800 400 800ZM400 40.3667C201.667 40.3667 40.3667 201.667 40.3667 400C40.3667 598.333 201.667 759.667 400 759.667C598.333 759.667 759.667 598.333 759.667 400C759.667 201.667 598.333 40.3667 400 40.3667ZM163 617.7C221.533 681.7 306.133 721.467 400 721.467C447.967 721.467 493.367 711.033 534.233 692.267L311 469.6L163 617.7ZM639.267 615.467C690.633 558.467 722.067 482.467 722.067 399.933C722.067 270.433 645.833 159.433 536.467 107.933L333.5 310.467L638.967 615.467H639.267ZM310.033 334.5L140.9 503L118.267 480.333L296.167 302.467L503.833 94.9667C471.233 84.0333 436.5 78 400 78C222.1 77.9 77.9 222.1 77.9 400C77.9 472.4 101.667 539.267 142.533 593.367L311.067 424.867L323.033 435.833L564.533 677.333C569.533 674.6 574.033 671.867 578.533 668.467L311 401.667L149.2 563.5L126.567 540.867L311.067 356.367L323.033 367.4L605.033 648.633C609.533 645.3 613.533 641.467 617.533 638.1L313 334.233L310.233 334.733L310.033 334.5ZM411.6 368.767L389 346.233L548.6 186.567L571.233 209.533L411.6 369.033V368.767ZM563 149.5L379 333.5L356.333 310.867L540.367 126.867L563 149.667V149.5Z\" fill=\"white\"/>\n                    </g>\n                    <defs>\n                    <clipPath id=\"clip0_226_2\">\n                    <rect width=\"800\" height=\"800\" fill=\"white\"/>\n                    </clipPath>\n                    </defs>\n                </svg>"
    });
    //Get Code
    if (!Lampa.Storage.get('lmeTraktDeviceCode')[profileId]) $.get('https://lme-trakt.deno.dev/auth/codes', function (response) {
      // Устанавливаем значение в Lampa.Storage
      Lampa.Storage.add('lmeTraktDevice', _defineProperty({}, profileId, response));
      var device = Lampa.Storage.get('lmeTraktDevice').find(function (obj) {
        return Object.keys(obj);
      })[profileId];
      // Добавляем параметр в SettingsApi с полученным user_code
      Lampa.SettingsApi.addParam({
        component: "lmeTrakt",
        param: {
          name: "lmeTraktCode",
          type: "title"
        },
        field: {
          name: 'https://trakt.tv/activate',
          description: device.user_code // Используем полученный user_code
        },
        onRender: function onRender() {
          if (!device) {
            Lampa.Noty.show('Error: Device not found');
            return;
          }
          var settings = {
            url: "https://lme-trakt.deno.dev/auth/token",
            method: "POST",
            timeout: 0,
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify({
              device_code: device.device_code
            })
          };
          $.ajax(settings).done(function (response) {
            if (response.error) {
              if (response.error === "Response code 409 (Conflict)") {
                console.log('TraktTV', 'Conflict Error:', response.error);
              } else {
                Lampa.Noty.show('Error');
                console.log('TraktTV', response.error);
              }
            } else {
              Lampa.Storage.add('lmeTraktToken', _defineProperty({}, profileId, response));
              Lampa.Noty.show('Success');
              console.log('Success:', Lampa.Storage.get('lmeTraktToken'));
            }
          }).fail(function (jqXHR, textStatus, errorThrown) {
            Lampa.Noty.show('Error');
            console.log('TraktTV', textStatus, errorThrown);
          });
        }
      });
    });
    //Reset auth
    Lampa.SettingsApi.addParam({
      component: "lmeTrakt",
      param: {
        name: "lmeTraktReset",
        type: "button"
      },
      field: {
        name: 'Reset auth'
      },
      onChange: function onChange(val) {
        // Получаем массив объектов
        var devices = Lampa.Storage.get('lmeTraktDevice');
        // Фильтруем массив, исключая объект с нужным profileId
        var updatedDevices = devices.filter(function (obj) {
          return !obj.hasOwnProperty(profileId);
        });
        // Сохраняем обновленный массив обратно в хранилище
        Lampa.Storage.set('lmeTraktDevice', updatedDevices);
        Lampa.Noty.show(Lampa.Lang.translate('traktLampaRestart'));
      }
    });
  }
  var config = {
    main: main
  };

  var account$1 = Lampa.Storage.get('account');
  var profileId$1 = account$1 && Object.keys(account$1).length > 0 ? account$1.profile.id : null;
  var traktTokens = Lampa.Storage.get('lmeTraktToken');
  var token = null;
  if (traktTokens && profileId$1) {
    token = traktTokens.find(function (obj) {
      return Object.keys(obj);
    })[profileId$1];
  }
  var tmdbLang = Lampa.Storage.field('tmdb_lang');
  function upnext$1(params, oncomplite, onerror) {
    sendRequest("https://lme-trakt.deno.dev/my/upnext", {
      lang: tmdbLang,
      tokenData: token
    }, oncomplite, onerror);
  }
  function watchlist$1(params, oncomplite, onerror) {
    sendRequest("https://lme-trakt.deno.dev/my/watchlist", {
      lang: tmdbLang,
      tokenData: token
    }, oncomplite, onerror);
  }
  function sendRequest(url, data, oncomplite, onerror) {
    Lampa.Noty.show(Lampa.Lang.translate('trakttvLoading'));
    var settings = {
      url: url,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data)
    };
    $.ajax(settings).done(function (response) {
      response.collection = false;
      oncomplite(response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      onerror(errorThrown);
    });
  }
  function updateTokenIfNeeded() {
    if (!profileId$1 || !traktTokens) {
      console.error('TraktTV', 'Profile ID or tokens not available.');
      return;
    }
    var tokenObj = traktTokens.find(function (obj) {
      return Object.keys(obj)[0] === profileId$1.toString();
    });
    var token = tokenObj ? tokenObj[profileId$1] : null;
    if (!token) {
      console.error('TraktTV', 'Token not found for profile ID:', profileId$1);
      return;
    }
    var currentTime = Date.now();
    var expiresIn = token.expires - currentTime;

    // Если токен истекает в течение недели (7 дней * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд)
    var oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
    if (expiresIn < oneWeekInMillis) {
      // Токен скоро истечет, нужно обновить
      var settings = {
        url: "https://lme-trakt.deno.dev/auth/refresh",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(token)
      };
      $.ajax(settings).done(function (response) {
        // Обновляем токен в хранилище
        tokenObj[profileId$1] = response;
        Lampa.Storage.set('lmeTraktToken', traktTokens);
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthUpdated'));
      }).fail(function (jqXHR, textStatus, errorThrown) {
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
        console.log('TraktTV', 'TraktTV', textStatus, errorThrown);
      });
    } else {
      console.log('TraktTV', 'Token is still valid.');
    }
  }
  function clear() {
    network.clear();
  }
  var api = {
    upnext: upnext$1,
    watchlist: watchlist$1,
    clear: clear,
    updateTokenIfNeeded: updateTokenIfNeeded
  };

  function upnext(object) {
    var comp = new Lampa.InteractionCategory(object);
    comp.create = function () {
      api.upnext(object, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push({
          url: '',
          component: 'full',
          id: element.id,
          method: element.method,
          card: {
            id: element.id
          },
          source: element.source || 'tmdb'
        });
      };
    };
    return comp;
  }
  function watchlist(object) {
    var comp = new Lampa.InteractionCategory(object);
    comp.create = function () {
      api.watchlist(object, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push({
          url: '',
          component: 'full',
          id: element.id,
          method: element.method,
          card: {
            id: element.id
          },
          source: element.source || 'tmdb'
        });
      };
    };
    return comp;
  }
  var Catalog = {
    upnext: upnext,
    watchlist: watchlist
  };

  function Main() {
    Lampa.Lang.add({
      trakttvAuthMissed: {
        ru: "Не авторизированы",
        en: "Not logged",
        uk: "Не авторизовані"
      },
      trakttvAuthOk: {
        ru: "Авторизированы",
        en: "Logged",
        uk: "Авторизовані"
      },
      trakttvAuthUpdated: {
        ru: "Авторизация обновлена",
        en: "Auth success updated",
        uk: "Авторизацію оновлено"
      },
      trakttvAuthError: {
        ru: "Ошибка авторизации",
        en: "Auth error",
        uk: "Помилка авторизаці"
      },
      traktLampaRestart: {
        ru: "Перезагрузите приложение",
        en: "Please restart application",
        uk: "Перезавантажте додаток"
      },
      trakttvLoading: {
        ru: "Загрузка, а пока сделай кофе",
        en: "Loading and go drink coffee",
        uk: "Завантаження, а поки зроби собі кавусю"
      }
    });
  }

  var account = Lampa.Storage.get('account');
  var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
  var manifest = {
    type: "other",
    version: "0.1",
    author: '@lme_chat',
    name: "Trakt.TV",
    description: "Get content from Trakt.TV",
    component: "lmeTrakt"
  };
  function add() {
    //Lang.main()
    Lampa.Manifest.plugins = manifest;
    config.main();
    Main();
    //Refresh Auth
    api.updateTokenIfNeeded();
    //Add menu item
    var lmeTrakt_upnext = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg width=\"800\" height=\"800\" viewBox=\"0 0 800 800\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_226_2)\">\n        <path d=\"M400 800C179.5 800 0 620.5 0 400C0 179.5 179.5 0 400 0C620.5 0 800 179.5 800 400C800 620.5 620.5 800 400 800ZM400 40.3667C201.667 40.3667 40.3667 201.667 40.3667 400C40.3667 598.333 201.667 759.667 400 759.667C598.333 759.667 759.667 598.333 759.667 400C759.667 201.667 598.333 40.3667 400 40.3667ZM163 617.7C221.533 681.7 306.133 721.467 400 721.467C447.967 721.467 493.367 711.033 534.233 692.267L311 469.6L163 617.7ZM639.267 615.467C690.633 558.467 722.067 482.467 722.067 399.933C722.067 270.433 645.833 159.433 536.467 107.933L333.5 310.467L638.967 615.467H639.267ZM310.033 334.5L140.9 503L118.267 480.333L296.167 302.467L503.833 94.9667C471.233 84.0333 436.5 78 400 78C222.1 77.9 77.9 222.1 77.9 400C77.9 472.4 101.667 539.267 142.533 593.367L311.067 424.867L323.033 435.833L564.533 677.333C569.533 674.6 574.033 671.867 578.533 668.467L311 401.667L149.2 563.5L126.567 540.867L311.067 356.367L323.033 367.4L605.033 648.633C609.533 645.3 613.533 641.467 617.533 638.1L313 334.233L310.233 334.733L310.033 334.5ZM411.6 368.767L389 346.233L548.6 186.567L571.233 209.533L411.6 369.033V368.767ZM563 149.5L379 333.5L356.333 310.867L540.367 126.867L563 149.667V149.5Z\" fill=\"white\"/>\n        </g>\n    <defs>\n        <clipPath id=\"clip0_226_2\">\n            <rect width=\"800\" height=\"800\" fill=\"white\"/>\n        </clipPath>\n    </defs></svg>\n            </div>\n            <div class=\"menu__text\">UpNext</div>\n        </li>");
    lmeTrakt_upnext.on('hover:enter', function () {
      if (!Array.isArray(Lampa.Storage.get('lmeTraktToken')) || !Lampa.Storage.get('lmeTraktToken').find(function (obj) {
        return Object.keys(obj)[0] === profileId.toString();
      })) {
        Lampa.Noty.show(Lampa.Lang.translate('authMissed'));
        return; // Останавливаем выполнение функции
      }
      Lampa.Activity.push({
        url: '',
        title: 'UpNext',
        component: 'lmeTrakt_upnext',
        page: 1
      });
    });
    var lmeTrakt_watchlist = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg width=\"800\" height=\"800\" viewBox=\"0 0 800 800\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_226_2)\">\n        <path d=\"M400 800C179.5 800 0 620.5 0 400C0 179.5 179.5 0 400 0C620.5 0 800 179.5 800 400C800 620.5 620.5 800 400 800ZM400 40.3667C201.667 40.3667 40.3667 201.667 40.3667 400C40.3667 598.333 201.667 759.667 400 759.667C598.333 759.667 759.667 598.333 759.667 400C759.667 201.667 598.333 40.3667 400 40.3667ZM163 617.7C221.533 681.7 306.133 721.467 400 721.467C447.967 721.467 493.367 711.033 534.233 692.267L311 469.6L163 617.7ZM639.267 615.467C690.633 558.467 722.067 482.467 722.067 399.933C722.067 270.433 645.833 159.433 536.467 107.933L333.5 310.467L638.967 615.467H639.267ZM310.033 334.5L140.9 503L118.267 480.333L296.167 302.467L503.833 94.9667C471.233 84.0333 436.5 78 400 78C222.1 77.9 77.9 222.1 77.9 400C77.9 472.4 101.667 539.267 142.533 593.367L311.067 424.867L323.033 435.833L564.533 677.333C569.533 674.6 574.033 671.867 578.533 668.467L311 401.667L149.2 563.5L126.567 540.867L311.067 356.367L323.033 367.4L605.033 648.633C609.533 645.3 613.533 641.467 617.533 638.1L313 334.233L310.233 334.733L310.033 334.5ZM411.6 368.767L389 346.233L548.6 186.567L571.233 209.533L411.6 369.033V368.767ZM563 149.5L379 333.5L356.333 310.867L540.367 126.867L563 149.667V149.5Z\" fill=\"white\"/>\n        </g>\n        <defs>\n            <clipPath id=\"clip0_226_2\">\n                <rect width=\"800\" height=\"800\" fill=\"white\"/>\n            </clipPath>\n        </defs></svg>\n            </div>\n            <div class=\"menu__text\">Watchlist</div>\n        </li>");
    lmeTrakt_watchlist.on('hover:enter', function () {
      if (!Array.isArray(Lampa.Storage.get('lmeTraktToken')) || !Lampa.Storage.get('lmeTraktToken').find(function (obj) {
        return Object.keys(obj)[0] === profileId.toString();
      })) {
        Lampa.Noty.show(Lampa.Lang.translate('authMissed'));
        return; // Останавливаем выполнение функции
      }
      Lampa.Activity.push({
        url: '',
        title: 'Watchlist',
        component: 'lmeTrakt_watchlist',
        page: 1
      });
    });
    $('.menu .menu__list').eq(0).append(lmeTrakt_upnext);
    $('.menu .menu__list').eq(0).append(lmeTrakt_watchlist);
  }
  function startPlugin() {
    window.plugin_lmeTrakt_ready = true;
    Lampa.Component.add('lmeTrakt_upnext', Catalog.upnext);
    Lampa.Component.add('lmeTrakt_watchlist', Catalog.watchlist);
    if (window.appready) add();else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") add();
      });
    }
  }
  if (!window.plugin_lmeTrakt_ready) startPlugin();

})();
