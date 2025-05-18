(function () {
    'use strict';

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
      upnext: function upnext(params, oncomplete, onerror) {
        requestApi('GET', '/sync/watched/shows?extended=images,full').then(function (watchedResponse) {
          console.log('Trakt watchedResponse:', watchedResponse);
          var watched = Array.isArray(watchedResponse) ? watchedResponse : [];
          console.log('Trakt watched:', watched);
          // 2. Відфільтрувати ті, у яких ще є непросмотрені епізоди
          var watching = watched.filter(function (item) {
            var show = item.show;
            var plays = item.plays;
            var valid = show.aired_episodes && typeof plays === 'number' && show.aired_episodes - plays > 0;
            return valid;
          });
          console.log('Trakt watching:', watching);
          // 3. Повернути у форматі results, використовуючи тільки дані Trakt
          var results = watching.map(function (item) {
            var _item$show$images, _item$show$images2;
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
              release_quality: "".concat(item.plays, "/").concat(item.show.aired_episodes)
              // додаємо інші потрібні поля з show за потреби
            };
          });
          console.log('Ttv results:', results);
          // 4. Відсортувати за датою останнього епізоду (за спаданням)
          results.sort(function (a, b) {
            var _a$last_episode_to_ai, _b$last_episode_to_ai;
            var dateA = (_a$last_episode_to_ai = a.last_episode_to_air) !== null && _a$last_episode_to_ai !== void 0 && _a$last_episode_to_ai.air_date ? new Date(a.last_episode_to_air.air_date).getTime() : 0;
            var dateB = (_b$last_episode_to_ai = b.last_episode_to_air) !== null && _b$last_episode_to_ai !== void 0 && _b$last_episode_to_ai.air_date ? new Date(b.last_episode_to_air.air_date).getTime() : 0;
            return dateB - dateA;
          });
          oncomplete({
            results: results
          });
        })["catch"](function (error) {
          onerror(error);
        });
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
        console.log('Card data', card.data);
        card.onMenu = false;
        card.onEnter = function () {
          Lampa.Activity.push(card.data);
        };
      };
      return comp;
    }
    function watchlist(object) {
      return new baseComponent(object, 'watchlist');
    }
    function upnext(object) {
      return new baseComponent(object, 'upnext');
    }
    var Catalog = {
      watchlist: watchlist,
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

    function startPlugin() {
      window.plugin_trakt_ready = true;
      // Добавляем компоненты
      Lampa.Component.add('trakt_watchlist', function (object) {
        return new Catalog.watchlist(object);
      });
      Lampa.Component.add('trakt_upnext', function (object) {
        return new Catalog.upnext(object);
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
    }
    function addMenuItems() {
      var watchlist = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n        <div class=\"menu__text\">Watchlist</div>\n    </li>");
      var upnext = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n        <div class=\"menu__text\">Up Next</div>\n    </li>");
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
      var menuList = $('.menu .menu__list').eq(0);
      menuList.append(watchlist);
      menuList.append(upnext);
    }
    if (!window.plugin_trakt_ready) startPlugin();

})();
