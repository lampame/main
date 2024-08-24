(function () {
    'use strict';

    function translate() {
      Lampa.Lang.add({
        lme_parser: {
          ru: 'Каталог парсеров',
          en: 'Parsers catalog',
          uk: 'Каталог парсерів',
          zh: '解析器目录' // Chinese translation
        },
        lme_parser_description: {
          ru: 'Нажмите для выбора парсера из ',
          en: 'Click to select a parser from the ',
          uk: 'Натисніть для вибору парсера з ',
          zh: '单击以从可用的 '
        },
        lme_pubtorr: {
          ru: 'Каталог TorrServer',
          en: 'TorrServer catalog',
          uk: 'Каталог TorrServer',
          zh: '解析器目录' // Chinese translation
        },
        lme_pubtorr_description: {
          ru: 'Бесплатные серверы от проекта LME',
          en: 'Free servers from the LME project',
          uk: 'Безкоштовні сервери від проєкту LME',
          zh: '来自 LME 项目的免费服务器 '
        }
      });
    }
    var Lang = {
      translate: translate
    };

    var parsersInfo = [{
      base: 'jacred_xyz',
      name: 'Jacred.xyz',
      settings: {
        url: 'jacred.xyz',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'jacred_viewbox_dev',
      name: 'Viewbox',
      settings: {
        url: 'jacred.viewbox.dev',
        key: 'viewbox',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'spawn_jackett',
      name: 'Spawn Jackett',
      settings: {
        url: 'spawn.pp.ua:59117',
        key: '2',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'spawn_jacred',
      name: 'Spawn Jacred',
      settings: {
        url: 'spawn.pp.ua:59118',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'unknown',
      name: 'Unknown',
      settings: {
        url: '188.119.113.252:9117',
        key: '1',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'trs_my_to',
      name: 'trs.my.to',
      settings: {
        url: 'trs.my.to:9118',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'jacred_my_to',
      name: 'jacred.my.to',
      settings: {
        url: 'jacred.my.to',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'lampa_app',
      name: 'lampa.app',
      settings: {
        url: 'lampa.app',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }];

    var proto = location.protocol === "https:" ? 'https://' : 'http://';
    function checkAlive(type) {
      if (type === 'parser') {
        var requests = parsersInfo.map(function (parser, index) {
          var protocol = parser.base === "lme_jackett" || parser.base === "lme_prowlarr" ? "" : proto;
          var endPoint = parser.settings.parser_torrent_type === 'prowlarr' ? '/api/v1/health?apikey=' + parser.settings.key : "/api/v2.0/indexers/status:healthy/results?apikey=".concat(parser.settings.url === 'spawn.pp.ua:59117' ? '2' : parser.base === 'lme_jackett' ? parser.settings.key : '');
          var myLink = protocol + parser.settings.url + endPoint;
          var mySelector = "body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(".concat(index + 2, ") > div");

          // Проверяем наличие кеша
          var cachedResponse = sessionStorage.getItem(myLink);
          if (cachedResponse) {
            var _JSON$parse = JSON.parse(cachedResponse),
              color = _JSON$parse.color;
            $(mySelector).css('color', color);
            return Promise.resolve();
          }
          return new Promise(function (resolve) {
            setTimeout(function () {
              if ($('body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(1) > div').text() !== 'Не выбран') return resolve();
              $.ajax({
                url: myLink,
                method: 'GET',
                success: function success(response, textStatus, xhr) {
                  var color;
                  // Используем xhr для получения статуса
                  if (xhr.status === 200) {
                    color = '1aff00'; // Успех
                  } else if (xhr.status === 401) {
                    color = 'ff2e36'; // Ошибка авторизации
                  } else {
                    color = 'ff2e36'; // Другие ошибки
                  }
                  $(mySelector).css('color', color);

                  // Кешируем ответ только в случае успеха или ошибки авторизации
                  if (color) {
                    sessionStorage.setItem(myLink, JSON.stringify({
                      color: color
                    }));
                  }
                },
                error: function error() {
                  $(mySelector).css('color', 'ff2e36');
                },
                complete: function complete() {
                  return resolve();
                }
              });
            }, 1000);
          });
        });
        return Promise.all(requests).then(function () {
          return console.log('All requests completed');
        });
      }
    }

    Lampa.Controller.listener.follow('toggle', function (e) {
      if (e.name === 'select') {
        checkAlive("parser");
      }
    });
    function changeParser() {
      var jackettUrlTwo = Lampa.Storage.get("jackett_url_two");
      var selectedParser = parsersInfo.find(function (parser) {
        return parser.base === jackettUrlTwo;
      });
      if (selectedParser) {
        var settings = selectedParser.settings;
        Lampa.Storage.set(settings.parser_torrent_type === 'prowlarr' ? "prowlarr_url" : "jackett_url", settings.url);
        Lampa.Storage.set(settings.parser_torrent_type === 'prowlarr' ? "prowlarr_key" : "jackett_key", settings.key);
        Lampa.Storage.set("parser_torrent_type", settings.parser_torrent_type);
      } else {
        console.warn("Jackett URL not found in parsersInfo");
      }
    }
    var s_values = parsersInfo.reduce(function (prev, _ref) {
      var base = _ref.base,
        name = _ref.name;
      prev[base] = name;
      return prev;
    }, {
      no_parser: 'Не выбран'
    });
    function parserSetting() {
      Lampa.SettingsApi.addParam({
        component: 'parser',
        param: {
          name: 'jackett_url_two',
          type: 'select',
          values: s_values,
          "default": 'no_parser'
        },
        field: {
          name: "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"font-size:1.0em\">".concat(Lampa.Lang.translate('lme_parser'), "</div></div>"),
          description: "".concat(Lampa.Lang.translate('lme_parser_description'), " ").concat(parsersInfo.length)
        },
        onChange: function onChange(value) {
          changeParser();
          Lampa.Settings.update();
        },
        onRender: function onRender(item) {
          changeParser();
          setTimeout(function () {
            $('div[data-children="parser"]').on('hover:enter', function () {
              Lampa.Settings.update();
            });
            if (Lampa.Storage.field('parser_use')) {
              item.show();
              $('.settings-param__name', item).css('color', 'f3d900');
              $('div[data-name="jackett_url_two"]').insertAfter('div[data-children="parser"]');
            } else {
              item.hide();
            }
          });
        }
      });
      Lampa.Settings.listener.follow('open', function (e) {
        if (e.name === 'parser') {
          e.body.find('[data-name="jackett_url2"]').remove();
        }
      });
    }
    var Parser = {
      parserSetting: parserSetting
    };

    Lampa.Platform.tv();
    function add() {
      Lang.translate();
      Parser.parserSetting();
    }
    function startPlugin() {
      window.plugin_lmepublictorr_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') add();
        });
      }
    }
    if (!window.plugin_lmepublictorr_ready) startPlugin();

})();
