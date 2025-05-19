(function () {
    'use strict';

    function Main() {
      Lampa.Lang.add({
        ttvAuthMissed: {
          ru: "Не авторизированы в Trakt.tv",
          en: "Not logged in to Trakt.tv",
          uk: "Не авторизовані в Trakt.tv"
        },
        ttvAuthOk: {
          ru: "Авторизированы в Trakt.tv",
          en: "Logged in to Trakt.tv",
          uk: "Авторизовані в Trakt.tv"
        },
        ttvAuthUpdated: {
          ru: "Авторизация в Trakt.tv обновлена",
          en: "Trakt.tv auth updated",
          uk: "Авторизацію в Trakt.tv оновлено"
        },
        ttvAuthError: {
          ru: "Ошибка авторизации в Trakt.tv",
          en: "Trakt.tv auth error",
          uk: "Помилка авторизації в Trakt.tv"
        },
        ttvLampaRestart: {
          ru: "Перезагрузите приложение",
          en: "Please restart application",
          uk: "Перезавантажте додаток"
        },
        trakt_auth_title: {
          ru: "Авторизация в Trakt.tv",
          en: "Trakt.tv Authorization",
          uk: "Авторизація в Trakt.tv"
        },
        trakt_auth_value: {
          ru: "Подключиться к Trakt.tv",
          en: "Connect to Trakt.tv",
          uk: "Підключитися до Trakt.tv"
        },
        trakt_auth_descr: {
          ru: "Авторизуйтесь для синхронизации смотреть позже",
          en: "Sign in to sync Watch Later list",
          uk: "Увійдіть для синхронізації списку 'Подивитися пізніше'"
        },
        trakt_sync_title: {
          ru: "Синхронизация с Trakt.tv",
          en: "Trakt.tv Sync",
          uk: "Синхронізація з Trakt.tv"
        },
        trakt_sync_value: {
          ru: "Синхронизировать смотреть позже",
          en: "Sync Watch Later list",
          uk: "Синхронізувати список 'Подивитися пізніше'"
        }
      });
    }
    var Lang = {
      Main: Main
    };

    // Trakt.tv API network module
    var TraktNetwork = {
      // Base API URL
      baseUrl: 'https://api.trakt.tv',
      // API version
      version: '2',
      // Client ID (you should register your own application on Trakt.tv)
      clientId: 'YOUR_CLIENT_ID_HERE',
      // Initialize network request with proper headers
      init: function init() {
        this.headers = {
          'Content-Type': 'application/json',
          'trakt-api-version': this.version,
          'trakt-api-key': this.clientId
        };

        // Add authorization header if token exists
        var token = Lampa.Storage.get('trakt_token', '');
        if (token) {
          this.headers['Authorization'] = 'Bearer ' + token;
        }
        return this.headers;
      },
      // Make API request
      request: function request(endpoint) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
        var url = this.baseUrl + endpoint;
        var options = {
          method: method,
          headers: this.init()
        };
        if (method === 'POST' || method === 'PUT') {
          options.body = JSON.stringify(params);
        }
        return fetch(url, options).then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error! status: ".concat(response.status));
          }
          return response.json();
        })["catch"](function (error) {
          console.error('Trakt API Error:', error);
          Lampa.Noty.show('Trakt.tv API Error: ' + error.message);
          return null;
        });
      },
      // Get authorization URL
      getAuthUrl: function getAuthUrl() {
        var redirectUri = encodeURIComponent('urn:ietf:wg:oauth:2.0:oob');
        return "https://trakt.tv/oauth/authorize?response_type=code&client_id=".concat(this.clientId, "&redirect_uri=").concat(redirectUri);
      },
      // Exchange authorization code for token
      getToken: function getToken(code) {
        return this.request('/oauth/token', {
          code: code,
          client_id: this.clientId,
          client_secret: 'YOUR_CLIENT_SECRET_HERE',
          redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
          grant_type: 'authorization_code'
        }, 'POST');
      },
      // Refresh access token
      refreshToken: function refreshToken() {
        var refreshToken = Lampa.Storage.get('trakt_refresh_token', '');
        if (!refreshToken) {
          return Promise.reject(new Error('No refresh token available'));
        }
        return this.request('/oauth/token', {
          refresh_token: refreshToken,
          client_id: this.clientId,
          client_secret: 'YOUR_CLIENT_SECRET_HERE',
          redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
          grant_type: 'refresh_token'
        }, 'POST');
      },
      // Get user profile
      getUserProfile: function getUserProfile() {
        return this.request('/users/me/settings');
      },
      // Sync watchlist
      syncWatchlist: function syncWatchlist() {
        return this.request('/sync/watchlist/movies');
      }
    };

    // TraktNetwork import moved to top level
    function ttv_auth() {
      // Component factory
      {
        // Create component instance
        var instance = {
          // Create component UI
          create: function create() {
            this.els = {};
            this.els.box = Lampa.Template.get('settings_trakt');
            this.els.container = this.els.box.find('.settings-param');

            // Initialize auth state
            this.updateAuthUI();
            return this.els.box;
          },
          // Component show handler
          show: function show() {
            // Setup event listeners when component is shown
            this.handleSettingsEvents();
          },
          // Component hide handler
          hide: function hide() {
            // Cleanup event listeners when component is hidden
            $('[data-name="trakt_auth"]').off('hover:enter');
            $('[data-name="trakt_logout"]').off('hover:enter');
          },
          // Component destroy handler
          destroy: function destroy() {
            // Cleanup all resources
            this.els = {};
          },
          // Handle settings events
          handleSettingsEvents: function handleSettingsEvents() {
            var self = this;

            // Handle Trakt auth button click
            $('[data-name="trakt_auth"]').on('hover:enter', function () {
              self.startOAuthFlow();
            });

            // Handle logout
            $('[data-name="trakt_logout"]').on('hover:enter', function () {
              self.logout();
            });
          },
          // Start OAuth flow
          startOAuthFlow: function startOAuthFlow() {
            var _this = this;
            var authUrl = TraktNetwork.getAuthUrl();

            // Open Trakt OAuth page
            Lampa.Utils.open(authUrl, {
              success: function success(url) {
                // Extract authorization code from redirect URL
                var codeMatch = url.match(/[?&]code=([^&]+)/);
                if (codeMatch && codeMatch[1]) {
                  var code = codeMatch[1];
                  _this.handleOAuthCallback(code);
                }
              },
              error: function error() {
                Lampa.Noty.show('Failed to connect to Trakt.tv');
              }
            });
          },
          // Handle OAuth callback
          handleOAuthCallback: function handleOAuthCallback(code) {
            var _this2 = this;
            TraktNetwork.getToken(code).then(function (response) {
              if (response && response.access_token) {
                // Store tokens
                Lampa.Storage.set('trakt_token', response.access_token);
                Lampa.Storage.set('trakt_refresh_token', response.refresh_token);

                // Update UI
                _this2.updateAuthUI();

                // Show success message
                Lampa.Noty.show('Successfully connected to Trakt.tv');
              }
            })["catch"](function (error) {
              console.error('OAuth error:', error);
              Lampa.Noty.show('Failed to connect to Trakt.tv: ' + error.message);
            });
          },
          // Update auth UI based on current state
          updateAuthUI: function updateAuthUI() {
            var token = Lampa.Storage.get('trakt_token', '');
            if (token) {
              // Get user profile
              TraktNetwork.getUserProfile().then(function (profile) {
                if (profile && profile.user) {
                  // Update settings UI to show logged-in state
                  $('[data-name="trakt_auth"] .settings-param__name').text(profile.user.username);
                  $('[data-name="trakt_auth"] .settings-param__value').text('Logout');
                  $('[data-name="trakt_auth"] .settings-param__descr').text('Connected to Trakt.tv');

                  // Add logout button if not exists
                  if (!$('[data-name="trakt_logout"]').length) {
                    $('[data-name="trakt_auth"]').after("\n                                        <div class=\"settings-param selector\" data-name=\"trakt_logout\" data-static=\"true\">\n                                            <div class=\"settings-param__name\">Logout</div>\n                                            <div class=\"settings-param__value\">Disconnect from Trakt.tv</div>\n                                        </div>\n                                    ");
                  }
                }
              });
            } else {
              // Reset to logged-out state
              $('[data-name="trakt_auth"] .settings-param__name').text('#{trakt_auth_title}');
              $('[data-name="trakt_auth"] .settings-param__value').text('#{trakt_auth_value}');
              $('[data-name="trakt_auth"] .settings-param__descr').text('#{trakt_auth_descr}');

              // Remove logout button if exists
              $('[data-name="trakt_logout"]').remove();
            }
          },
          // Logout from Trakt.tv
          logout: function logout() {
            // Clear stored tokens
            Lampa.Storage.remove('trakt_token');
            Lampa.Storage.remove('trakt_refresh_token');

            // Update UI
            this.updateAuthUI();

            // Show success message
            Lampa.Noty.show('Successfully disconnected from Trakt.tv');
          }
        };
        return instance;
      }
    }
    var ttv_auth$1 = {
      ttv_auth: ttv_auth
    };

    function startPlugin() {
      Lang.Main();
      // Register plugin manifest
      Lampa.Manifest.plugins = {
        type: 'plugin',
        version: '1.0.0',
        name: 'Trakt.tv',
        description: 'Authentication and integration with Trakt.tv',
        component: 'ttv_auth'
      };

      // Add plugin component
      Lampa.Component.add('ttv_auth', ttv_auth$1); // Use module directly without function call

      // Add settings section
      Lampa.Template.add('settings_trakt', "\n        <div>\n            <div class=\"settings-param selector\" data-type=\"input\" data-name=\"trakt_token\" placeholder=\"Enter Trakt API token\">\n                <div class=\"settings-param__name\">Trakt API Token</div>\n                <div class=\"settings-param__value\"></div>\n                <div class=\"settings-param__descr\">Get your token from https://trakt.tv/oauth/application/new</div>\n            </div>\n            <div class=\"settings-param selector\" data-name=\"trakt_auth\" data-static=\"true\">\n                <div class=\"settings-param__name\">#{trakt_auth_title}</div>\n                <div class=\"settings-param__value\">#{trakt_auth_value}</div>\n                <div class=\"settings-param__descr\">#{trakt_auth_descr}</div>\n            </div>\n            <div class=\"settings-param selector\" data-name=\"trakt_sync\" data-static=\"true\">\n                <div class=\"settings-param__name\">#{trakt_sync_title}</div>\n                <div class=\"settings-param__value\">#{trakt_sync_value}</div>\n            </div>\n        </div>\n    ");
    }

    // Add settings icon to menu
    function addSettingsMenu() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z\" fill=\"currentColor\"/>\n                    <path d=\"M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z\" fill=\"currentColor\"/>\n            <path d=\"M19.14 12.92C19.1335 12.7324 19.1024 12.5463 19.0475 12.3675C18.9926 12.1888 18.9144 12.0192 18.8152 11.8639C18.716 11.7087 18.5968 11.5692 18.4611 11.4494C18.3254 11.3296 18.1748 11.2308 18.0135 11.1557C17.8523 11.0806 17.6822 11.0299 17.508 11.0051C17.3338 10.9803 17.1573 10.9818 16.9836 11.0095C16.8099 11.0372 16.6408 11.0907 16.4811 11.1684C16.3214 11.2461 16.1727 11.3472 16.0395 11.4689C15.9063 11.5906 15.7899 11.7316 15.6941 11.8875C15.5983 12.0434 15.5242 12.2125 15.474 12.39C15.4238 12.5675 15.3981 12.7517 15.3981 12.9375C15.3981 13.1233 15.4238 13.3075 15.474 13.485C15.5242 13.6625 15.5983 13.8316 15.6941 13.9875C15.7899 14.1434 15.9063 14.2844 16.0395 14.4061C16.1727 14.5278 16.3214 14.6289 16.4811 14.7066C16.6408 14.7843 16.8099 14.8378 16.9836 14.8655C17.1573 14.8932 17.3338 14.8947 17.508 14.8699C17.6822 14.8451 17.8523 14.7944 18.0135 14.7193C18.1748 14.6442 18.3254 14.5454 18.4611 14.4256C18.5968 14.3058 18.716 14.1663 18.8152 14.011C18.9144 13.8558 18.9926 13.6862 19.0475 13.5074C19.1024 13.3287 19.1335 13.1426 19.14 12.955V12.92ZM12 17.75C10.62 17.75 9.27975 17.3405 8.17725 16.5823C7.07475 15.824 6.26025 14.7553 5.85975 13.5315C5.45925 12.3078 5.49225 10.9898 5.955 9.7665C6.41775 8.54325 7.28775 7.47975 8.4285 6.729C9.56925 5.97825 10.923 5.57925 12.312 5.5875C13.701 5.59575 15.057 5.99925 16.191 6.75C17.325 7.50075 18.1905 8.5605 18.6615 9.78C19.1325 10.9995 19.185 12.315 18.8115 13.5315C18.438 14.748 17.658 15.819 16.5855 16.5823C15.513 17.3455 14.199 17.75 12.84 17.75H12Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">Trakt.tv</div>\n        </li>");
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'Trakt.tv',
          component: 'ttv_auth',
          page: 1
        });
      });
      $('.menu .menu__list').eq(0).append(button);
    }

    // Add settings menu item when app is ready
    if (window.appready) addSettingsMenu();else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') addSettingsMenu();
      });
    }

    // Only start plugin if not already loaded
    if (!window.ttv_auth_ready) {
      startPlugin();
    }

})();
