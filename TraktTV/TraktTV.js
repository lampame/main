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
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" id=\"Trakt\"><path d=\"M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M4.383,14.003c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l10.36-10.36c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-10.36,10.36C4.767,13.93,4.575,14.003,4.383,14.003z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M19.95 20.7c-.192 0-.384-.073-.53-.22L8.64 9.7c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l10.78 10.78c.293.293.293.768 0 1.061C20.334 20.627 20.143 20.7 19.95 20.7zM11.793 9.672c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.229-4.229c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4.229 4.229C12.177 9.599 11.985 9.672 11.793 9.672zM13.207 11.086c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.828-2.828c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.828 2.828C13.591 11.013 13.399 11.086 13.207 11.086zM18.39 22.01c-.192 0-.384-.073-.53-.22l-8.938-8.938-3.71 3.718c-.292.295-.769.293-1.061.002-.294-.293-.294-.768-.002-1.061l4.24-4.25c.141-.142.332-.221.531-.221l0 0c.199 0 .39.079.53.22l9.47 9.47c.293.293.293.768 0 1.061C18.773 21.937 18.582 22.01 18.39 22.01z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M16.55,23.04c-0.192,0-0.384-0.073-0.53-0.22l-7.099-7.099l-4.54,4.549c-0.292,0.292-0.768,0.293-1.062,0.001c-0.293-0.293-0.293-0.768-0.001-1.062l5.07-5.08c0.141-0.141,0.332-0.22,0.531-0.22l0,0c0.199,0,0.39,0.079,0.53,0.22l7.63,7.63c0.293,0.293,0.293,0.768,0,1.061C16.934,22.967,16.742,23.04,16.55,23.04z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path></svg>"
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

  function Main$1() {
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
      },
      trakttv_remove_from_collection: {
        ru: "Удалить из коллекции",
        en: "Remove from collection",
        uk: "Видалити з колекці"
      },
      trakttv_add_to_collection: {
        ru: "Добавить в коллекцию",
        en: "Add to collection",
        uk: "Додати в колекцію"
      }
    });
  }

  function Main() {
    Lampa.Listener.follow('full', function (e) {
      var account = Lampa.Storage.get('account');
      var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
      var traktTokens = Lampa.Storage.get('lmeTraktToken');
      var tokenData = null;
      if (traktTokens && profileId) {
        tokenData = traktTokens.find(function (obj) {
          return Object.keys(obj);
        })[profileId];
      }
      if (e.type === "complite") {
        var lookupWatchlistItem = function lookupWatchlistItem() {
          var settings = {
            "url": "https://gwb-trakt.deno.dev/watchlistItem",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "action": "lookup",
              "tmdb": {
                "id": e.object.id,
                "type": e.object.method
              },
              "tokenData": tokenData
            })
          };
          $.ajax(settings).done(function (response) {
            console.log(response);
            updateButtonState(response.added);
          }).fail(function () {
            Lampa.Noty.show('Error');
          });
        };
        var updateButtonState = function updateButtonState(added) {
          var button = $('.button--lmeTraktWatchlist span');
          if (added) {
            button.text(Lampa.Lang.translate('trakttv_remove_from_collection'));
            button.closest('.button--lmeTraktWatchlist').attr('data-action', 'delete');
          } else {
            button.text(Lampa.Lang.translate('trakttv_add_to_collection'));
            button.closest('.button--lmeTraktWatchlist').attr('data-action', 'add');
          }
        };
        var handleButtonClick = function handleButtonClick() {
          var action = $(this).attr('data-action');
          var settings = {
            "url": "https://gwb-trakt.deno.dev/watchlistItem",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "action": action,
              "tmdb": {
                "id": e.object.id,
                "type": e.object.method
              },
              "tokenData": tokenData
            })
          };
          $.ajax(settings).done(function (response) {
            console.log(response);
            if (response.success) {
              Lampa.Noty.show(action === 'add' ? 'Added' : 'Deleted');
              updateButtonState(action === 'add' ? true : false);
            } else {
              Lampa.Noty.show('Error');
            }
          }).fail(function () {
            Lampa.Noty.show('Error');
          });
        };
        lookupWatchlistItem();
        var lmeTraktWatchlist = "<div class=\"full-start__button selector button--lmeTraktWatchlist\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>\n                <span>Watchlist</span>\n            </div>";
        e.object.activity.render().find('.full-start-new__buttons').append(lmeTraktWatchlist);
        $(document).on('click', '.button--lmeTraktWatchlist', handleButtonClick);
      }
    });
  }

  var account = Lampa.Storage.get('account');
  var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
  var manifest = {
    type: "other",
    version: "0.2",
    author: '@lme_chat',
    name: "Trakt.TV",
    description: "Get content from Trakt.TV",
    component: "lmeTrakt"
  };
  function add() {
    //Lang.main()
    Lampa.Manifest.plugins = manifest;
    config.main();
    Main$1();
    //Button Watchlist
    Main();
    //Refresh Auth
    api.updateTokenIfNeeded();
    //Add menu item
    var lmeTrakt_upnext = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\"><svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" id=\"Trakt\"><path d=\"M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M4.383,14.003c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l10.36-10.36c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-10.36,10.36C4.767,13.93,4.575,14.003,4.383,14.003z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M19.95 20.7c-.192 0-.384-.073-.53-.22L8.64 9.7c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l10.78 10.78c.293.293.293.768 0 1.061C20.334 20.627 20.143 20.7 19.95 20.7zM11.793 9.672c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.229-4.229c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4.229 4.229C12.177 9.599 11.985 9.672 11.793 9.672zM13.207 11.086c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.828-2.828c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.828 2.828C13.591 11.013 13.399 11.086 13.207 11.086zM18.39 22.01c-.192 0-.384-.073-.53-.22l-8.938-8.938-3.71 3.718c-.292.295-.769.293-1.061.002-.294-.293-.294-.768-.002-1.061l4.24-4.25c.141-.142.332-.221.531-.221l0 0c.199 0 .39.079.53.22l9.47 9.47c.293.293.293.768 0 1.061C18.773 21.937 18.582 22.01 18.39 22.01z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M16.55,23.04c-0.192,0-0.384-0.073-0.53-0.22l-7.099-7.099l-4.54,4.549c-0.292,0.292-0.768,0.293-1.062,0.001c-0.293-0.293-0.293-0.768-0.001-1.062l5.07-5.08c0.141-0.141,0.332-0.22,0.531-0.22l0,0c0.199,0,0.39,0.079,0.53,0.22l7.63,7.63c0.293,0.293,0.293,0.768,0,1.061C16.934,22.967,16.742,23.04,16.55,23.04z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path></svg></div>\n            <div class=\"menu__text\">UpNext</div>\n        </li>");
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
    var lmeTrakt_watchlist = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\"><svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" id=\"Trakt\"><path d=\"M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M4.383,14.003c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l10.36-10.36c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-10.36,10.36C4.767,13.93,4.575,14.003,4.383,14.003z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M19.95 20.7c-.192 0-.384-.073-.53-.22L8.64 9.7c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l10.78 10.78c.293.293.293.768 0 1.061C20.334 20.627 20.143 20.7 19.95 20.7zM11.793 9.672c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.229-4.229c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4.229 4.229C12.177 9.599 11.985 9.672 11.793 9.672zM13.207 11.086c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.828-2.828c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.828 2.828C13.591 11.013 13.399 11.086 13.207 11.086zM18.39 22.01c-.192 0-.384-.073-.53-.22l-8.938-8.938-3.71 3.718c-.292.295-.769.293-1.061.002-.294-.293-.294-.768-.002-1.061l4.24-4.25c.141-.142.332-.221.531-.221l0 0c.199 0 .39.079.53.22l9.47 9.47c.293.293.293.768 0 1.061C18.773 21.937 18.582 22.01 18.39 22.01z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M16.55,23.04c-0.192,0-0.384-0.073-0.53-0.22l-7.099-7.099l-4.54,4.549c-0.292,0.292-0.768,0.293-1.062,0.001c-0.293-0.293-0.293-0.768-0.001-1.062l5.07-5.08c0.141-0.141,0.332-0.22,0.531-0.22l0,0c0.199,0,0.39,0.079,0.53,0.22l7.63,7.63c0.293,0.293,0.293,0.768,0,1.061C16.934,22.967,16.742,23.04,16.55,23.04z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path></svg></div>\n            <div class=\"menu__text\">Watchlist</div>\n        </li>");
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
