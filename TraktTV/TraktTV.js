(function () {
  'use strict';

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
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

  var CLIENT_ID = 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b';
  var CLIENT_SECRET = 'a8cf25070f8c9a609782deecf56197f99e96084b080c1c86fccf9dc682465f1b';
  var API_URL = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://api.trakt.tv';
  function requestApi(method, url) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var unauthorized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var settings = {
      url: API_URL + url,
      type: method,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': CLIENT_ID
      },
      data: JSON.stringify(params)
    };
    if (!unauthorized && Lampa.Storage.get('trakt_token')) {
      settings.headers['Authorization'] = 'Bearer ' + Lampa.Storage.get('trakt_token');
    }
    return $.ajax(settings);
  }
  function formatTraktResults(items) {
    return {
      results: items.map(function (item) {
        var media = item.movie || item.show;
        return {
          component: 'full',
          id: media.ids.tmdb,
          title: media.title,
          original_title: media.title,
          release_date: media.year + '',
          vote_average: media.rating || 0,
          poster: "https://".concat(media.images.poster) || '',
          image: "https://".concat(media.images.fanart) || '',
          method: item.movie ? 'movie' : 'tv'
        };
      })
    };
  }
  var api = {
    watchlist: function watchlist(params, oncomplete, onerror) {
      requestApi('GET', '/sync/watchlist/movies,shows/added/asc?extended=images').then(function (response) {
        oncomplete(formatTraktResults(response));
      })["catch"](function (error) {
        onerror(error);
      });
    },
    calendars: function calendars(params, oncomplete, onerror) {
      requestApi('GET', '/calendars/my/shows/2025-05-18/7?extended=images').then(function (response) {
        oncomplete(formatTraktResults(response));
      })["catch"](function (error) {
        onerror(error);
      });
    },
    upnext: function upnext(params, oncomplete, onerror) {
      requestApi('GET', '/sync/watched/shows?extended=images,full,seasons').then(function (watchedResponse) {
        var watched = Array.isArray(watchedResponse) ? watchedResponse : [];
        Promise.all(watched.map(function (item) {
          return requestApi('GET', "/shows/".concat(item.show.ids.slug, "/progress/watched?extended=full")).then(function (progress) {
            return _objectSpread2(_objectSpread2({}, item), {}, {
              progress: progress
            });
          })["catch"](function () {
            return item;
          });
        })).then(function (shows) {
          var watching = shows.filter(function (item) {
            if (!item.progress) return false;

            // Загальна кількість епізодів
            var aired = item.progress.aired;

            // Кількість переглянутих епізодів
            var watched = item.progress.completed;

            // Пропускаємо тільки якщо немає даних про кількість епізодів
            return aired && aired > watched;
          });
          var results = watching.map(function (item) {
            var _item$show$images, _item$show$images2;
            // Отримуємо дату наступного епізоду
            var next_episode = item.progress.next_episode;
            var air_date = next_episode ? next_episode.first_aired : '';
            return {
              component: 'full',
              id: item.show.ids.tmdb || item.show.ids.trakt,
              title: item.show.title,
              original_title: item.show.original_title || item.show.title,
              release_date: item.show.year ? String(item.show.year) : '',
              vote_average: item.show.rating || 0,
              poster: Array.isArray((_item$show$images = item.show.images) === null || _item$show$images === void 0 ? void 0 : _item$show$images.poster) ? "https://".concat(item.show.images.poster[0]) : '',
              image: Array.isArray((_item$show$images2 = item.show.images) === null || _item$show$images2 === void 0 ? void 0 : _item$show$images2.fanart) ? "https://".concat(item.show.images.fanart[0]) : '',
              method: 'tv',
              release_quality: "".concat(item.progress.completed, "/").concat(item.progress.aired),
              air_date: air_date,
              status: item.show.status
            };
          });

          // Сортуємо за датою виходу наступного епізоду (від нових до старих)
          results.sort(function (a, b) {
            var dateA = new Date(a.air_date).getTime();
            var dateB = new Date(b.air_date).getTime();
            if (!a.air_date) return 1; // Якщо немає дати - в кінець
            if (!b.air_date) return -1; // Якщо немає дати - в кінець

            return dateB - dateA;
          });
          oncomplete({
            results: results
          });
        });
      })["catch"](onerror);
    },
    auth: {
      login: function login() {
        return requestApi('POST', '/oauth/device/code', {
          client_id: CLIENT_ID
        }, true);
      },
      poll: function poll(device_code) {
        return requestApi('POST', '/oauth/device/token', {
          code: device_code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }, true);
      },
      logout: function logout() {
        Lampa.Storage.remove('trakt_token');
      }
    },
    refresh: function refresh() {
      return requestApi('POST', '/oauth/token', {
        refresh_token: Lampa.Storage.get('trakt_refresh_token'),
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token'
      }, true).then(function (response) {
        Lampa.Storage.set('trakt_token', response.access_token);
        Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
        return response;
      });
    },
    addToWatchlist: function addToWatchlist(params, oncomplete, onerror) {
      var data = {
        movies: [],
        shows: []
      };
      if (params.method === 'movie') {
        data.movies.push({
          ids: {
            tmdb: params.id
          }
        });
      } else {
        data.shows.push({
          ids: {
            tmdb: params.id
          }
        });
      }
      requestApi('POST', '/sync/watchlist', data).then(function (response) {
        oncomplete(response);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    removeFromWatchlist: function removeFromWatchlist(params, oncomplete, onerror) {
      var data = {
        movies: [],
        shows: []
      };
      if (params.method === 'movie') {
        data.movies.push({
          ids: {
            tmdb: params.id
          }
        });
      } else {
        data.shows.push({
          ids: {
            tmdb: params.id
          }
        });
      }
      requestApi('POST', '/sync/watchlist/remove', data).then(function (response) {
        oncomplete(response);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    inWatchlist: function inWatchlist(params, oncomplete, onerror) {
      var type = params.method === 'movie' ? 'movies' : 'shows';
      var url = "/sync/watchlist/".concat(type, "?extended=full");
      requestApi('GET', url).then(function (response) {
        var found = response.find(function (item) {
          var _item$movie, _item$show;
          return ((_item$movie = item.movie) === null || _item$movie === void 0 ? void 0 : _item$movie.ids.tmdb) === params.id || ((_item$show = item.show) === null || _item$show === void 0 ? void 0 : _item$show.ids.tmdb) === params.id;
        });
        oncomplete(!!found);
      })["catch"](function (error) {
        onerror(error);
      });
    }
  };

  function main() {
    Lampa.Settings.listener.follow('open', function (e) {
      if (e.name == 'trakt') {
        // Check auth status and refresh token if needed
        if (Lampa.Storage.get('trakt_token')) {
          api.refresh().then(function () {
            $('.settings-param__status', e.body).removeClass('active error wait').addClass('active');
          })["catch"](function () {
            $('.settings-param__status', e.body).removeClass('active error wait').addClass('error');
          });
        }
      }
    });
    Lampa.SettingsApi.addComponent({
      component: 'trakt',
      name: 'Trakt.TV',
      icon: "<svg style=\"filter:invert(0);\" fill=\"#ffffff\" viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg>"
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_login',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogin')
      },
      onRender: function onRender(item) {
        var status = $('<div class="settings-param__status"></div>');
        item.find('.settings-param__value').append(status);
        if (!Lampa.Storage.get('trakt_token')) {
          item.show();
          status.removeClass('active error wait').addClass('wait');
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        if (Lampa.Storage.get('trakt_token')) return;
        api.auth.login().then(function (response) {
          var modal = $("<div class=\"about\">\n                        <div class=\"about__text\">".concat(response.verification_url, "</div>\n                        <div class=\"about__text\">Code: ").concat(response.user_code, "</div>\n                    </div>"));
          Lampa.Modal.open({
            title: 'Trakt Auth',
            html: modal,
            size: 'small',
            onBack: function onBack() {
              Lampa.Modal.close();
              Lampa.Controller.toggle('settings_component');
            }
          });
          pollAuth(response);
        })["catch"](function (err) {
          Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_logout',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogout')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) {
          item.show();
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        api.auth.logout();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvLogoutNoty'));
        Lampa.Settings.update();
      }
    });
  }
  function pollAuth(data) {
    var interval = setInterval(function () {
      api.auth.poll(data.device_code).then(function (response) {
        clearInterval(interval);
        Lampa.Storage.set('trakt_token', response.access_token);
        Lampa.Modal.close();
        Lampa.Settings.update();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthOk'));
      })["catch"](function (err) {
        if (err.status == 400) {
          // Keep polling
          return;
        }
        clearInterval(interval);
        Lampa.Modal.close();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
      });
    }, (data.interval + 1) * 1000);
  }
  var config = {
    main: main
  };

  var _Lampa = Lampa,
    InteractionCategory = _Lampa.InteractionCategory;
  function baseComponent(object, type) {
    var comp = new InteractionCategory(object);
    comp.create = function () {
      api[type](object, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push(card.data);
      };
    };
    return comp;
  }
  function watchlist$1(object) {
    return new baseComponent(object, 'watchlist');
  }
  function upnext(object) {
    return new baseComponent(object, 'upnext');
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext
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
      },
      trakttv_remove_from_collection: {
        ru: "Удалить из watchlist",
        en: "Remove from watchlist",
        uk: "Видалити з watchlist"
      },
      trakttv_add_to_collection: {
        ru: "Добавить в watchlist",
        en: "Add to watchlist",
        uk: "Додати в watchlist"
      },
      trakttv_WatchlistSort: {
        ru: "Сортировка watchlist",
        en: "Sort watchlist",
        uk: "Сортування watchlist"
      },
      trakttvLogin: {
        ru: "Войти в Trakt.TV",
        en: "Login to Trakt.TV",
        uk: "Увійти в Trakt.TV"
      },
      trakttvLogout: {
        ru: "Выйти из Trakt.TV",
        en: "Logout from Trakt.TV",
        uk: "Вийти з Trakt.TV"
      },
      trakttvLogoutNoty: {
        ru: "Вы вышли из Trakt.TV",
        en: "You have logged out from Trakt.TV",
        uk: "Ви вийшли з Trakt.TV"
      }
    });
  }

  function addWatchlistButton(card) {
    var button = document.createElement('div');
    button.className = 'full-start__button selector watchlist-button';
    button.innerHTML = "\n        <svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>\n    ";

    // Перевіряємо чи є в списку
    api.inWatchlist(card.movie, function (isAdded) {
      updateButtonStyle(button, isAdded);
    }, function () {
      button.style.display = 'none';
    });

    // Додаємо обробник кліку
    button.addEventListener('hover:enter', function () {
      var isAdded = button.classList.contains('added');
      if (isAdded) {
        api.removeFromWatchlist(card.movie, function () {
          Lampa.Noty.show('Видалено з watchlist');
          updateButtonStyle(button, false);
        }, function () {
          return Lampa.Noty.show('Помилка при видаленні');
        });
      } else {
        api.addToWatchlist(card.movie, function () {
          Lampa.Noty.show('Додано до watchlist');
          updateButtonStyle(button, true);
        }, function () {
          return Lampa.Noty.show('Помилка при додаванні');
        });
      }
    });
    return button;
  }
  function updateButtonStyle(button, isAdded) {
    if (isAdded) {
      button.classList.add('added');
      button.style.color = '#37ff54';
    } else {
      button.classList.remove('added');
      button.style.color = '';
    }
  }
  var watchlist = {
    addWatchlistButton: addWatchlistButton
  };

  function startPlugin() {
    window.plugin_trakt_ready = true;
    // Добавляем компоненты
    Lampa.Component.add('trakt_watchlist', function (object) {
      return new Catalog.watchlist(object);
    });
    Lampa.Component.add('trakt_upnext', function (object) {
      return new Catalog.upnext(object);
    });

    // Додаємо новий компонент
    Lampa.Component.add('trakt_timetable', function (object) {
      return new TraktTimetable(object);
    });
    Lampa.Component.add('trakt_calendars', function (object) {
      return Calendar(object);
    });
    //Добавляем переводы
    Main();
    // Следим за готовностью приложения
    Lampa.Listener.follow('app', function (e) {
      if (e.type === 'ready') {
        config.main();
        addMenuItems();
      }
    });

    // Додаємо кнопку watchlist на картку
    Lampa.Listener.follow('full', function (e) {
      if (e.type === 'complite' && Lampa.Storage.get('trakt_token')) {
        var button = watchlist.addWatchlistButton(e.data);
        e.object.activity.render().find('.full-start-new__buttons').append(button);
      }
    });
  }
  function addMenuItems() {
    var watchlist = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n        <div class=\"menu__text\">Watchlist</div>\n    </li>");
    var upnext = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n        <div class=\"menu__text\">Up Next</div>\n    </li>");

    // Додаємо пункт меню для Timetable
    // let timetable = $(`<li class="menu__item selector">
    //     <div class="menu__ico">
    //         <svg viewBox="0 0 24 24">
    //             <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
    //             <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none"/>
    //         </svg>
    //     </div>
    //     <div class="menu__text">Timetable</div>
    // </li>`);

    watchlist.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Watchlist',
        component: 'trakt_watchlist',
        page: 1
      });
    });
    upnext.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Up Next',
        component: 'trakt_upnext',
        page: 1
      });
    });

    // Додаємо обробник для відкриття Timetable
    // timetable.on('hover:enter', () => {
    //     Lampa.Activity.push({
    //         url: '',
    //         title: 'Timetable',
    //         component: 'trakt_timetable',
    //         page: 1
    //     });
    // });

    var menuList = $('.menu .menu__list').eq(0);
    menuList.append(watchlist);
    menuList.append(upnext);
    // menuList.append(timetable); // Додаємо пункт у меню
  }
  if (!window.plugin_trakt_ready) startPlugin();

})();
