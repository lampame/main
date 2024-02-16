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

    var proto = location.protocol === "https:" ? 'https://' : 'http://';
    var parsersInfo = [{
      base: 'jac_lampa32_ru',
      name: 'Lampa32',
      settings: {
        url: 'jac.lampa32.ru',
        key: ''
      }
    }, {
      base: 'jacred_xyz',
      name: 'Jacred.xyz',
      settings: {
        url: 'jacred.xyz',
        key: ''
      }
    }, {
      base: 'jacred_ru',
      name: 'Jacred.ru',
      settings: {
        url: 'jacred.ru',
        key: ''
      }
    }, {
      base: 'jacred_viewbox_dev',
      name: 'Viewbox',
      settings: {
        url: 'jacred.viewbox.dev',
        key: 'viewbox'
      }
    }, {
      base: 'spawn_jackett',
      name: 'Spawn Jackett',
      settings: {
        url: 'spawn.pp.ua:59117',
        key: '2'
      }
    }, {
      base: 'spawn_jacred',
      name: 'Spawn Jacred',
      settings: {
        url: 'spawn.pp.ua:59118',
        key: ''
      }
    }, {
      base: 'unknown',
      name: 'Unknown',
      settings: {
        url: '188.119.113.252:9117',
        key: '1'
      }
    }];
    function checkAlive$1(type) {
      console.log("TDDev", "type");
      if (type === 'parser') {
        var requests = parsersInfo.map(function (parser, index) {
          var myLink = proto + parser.settings.url + '/api/v2.0/indexers/status:healthy/results?apikey=' + (parser.settings.url === 'spawn.pp.ua:59117' ? '2' : '');
          return new Promise(function (resolve) {
            setTimeout(function () {
              var mySelector = "body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(".concat(index + 2, ") > div");
              if ($('body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(1) > div').text() !== 'Не выбран') return resolve();
              fetch(myLink).then(function (response) {
                if (response.ok) {
                  $(mySelector).css('color', '1aff00');
                } else if (response.status === 401) {
                  $(mySelector).css('color', 'ff2e36');
                }
              })["catch"](function () {
                $(mySelector).css('color', 'ff2e36');
              })["finally"](function () {
                return resolve();
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
        setTimeout(function () {
          checkAlive$1("parser");
        }, 10);
      }
    });
    function changeParser() {
      var jackettUrlTwo = Lampa.Storage.get("jackett_url_two");
      var selectedParser = parsersInfo.find(function (parser) {
        return parser.base === jackettUrlTwo;
      });
      if (selectedParser) {
        var settings = selectedParser.settings;
        Lampa.Storage.set("jackett_url", settings.url);
        Lampa.Storage.set("jackett_key", settings.key);
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
            if (Lampa.Storage.field('parser_use')) item.show() & $('.settings-param__name', item).css('color', 'f3d900') & $('div[data-name="jackett_url_two"]').insertAfter('div[data-children="parser"]');else item.hide();
          }, 0);
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

    var trInfo = [{
      "name": "[DE] Gutsy Gibbon",
      "server": "https://trs-lme.koyeb.app"
    }];
    function checkAlive(type) {
      console.log("TDDev", "type");
      if (type === 'torr') {
        var requests = trInfo.map(function (torr, index) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              var mySelector = "body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(".concat(index + 2, ") > div");
              if ($('body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(1) > div').text() !== 'Не выбран') return resolve();
              var torrAPI = torr.server + '/echo';
              fetch(torrAPI).then(function (response) {
                if (response.ok) {
                  $(mySelector).css('color', '1aff00');
                } else if (response.status === 401) {
                  $(mySelector).css('color', 'ff2e36');
                }
              })["catch"](function () {
                $(mySelector).css('color', 'ff2e36');
              })["finally"](function () {
                return resolve();
              });
            }, 1000);
          });
        });
        if (type === 'torr') return Promise.all(requests).then(function () {
          return console.log('LME', 'All requests completed');
        });
      }
    }
    Lampa.Controller.listener.follow('toggle', function (e) {
      if (e.name === 'select') {
        setTimeout(function () {
          checkAlive("torr");
        }, 10);
      }
    });
    function changeTorr() {
      var publicTorr = Lampa.Storage.get("pubTorr");
      var selectedTorr = trInfo.find(function (sTorr) {
        return sTorr.server === publicTorr;
      });
      if (selectedTorr) {
        Lampa.Storage.set("torrserver_url_two", selectedTorr.server);
      } else {
        console.warn('LME', "TorrServer URL not found");
      }
    }
    var pubTorr_values = trInfo.reduce(function (prev, _ref, index) {
      var server = _ref.server,
        name = _ref.name;
      prev[server] = "".concat(name);
      return prev;
    }, {
      no_server: 'Не выбран'
    });
    function pubSetting() {
      Lampa.SettingsApi.addParam({
        component: 'server',
        param: {
          name: 'pubTorr',
          type: 'select',
          values: pubTorr_values,
          "default": 'no_server'
        },
        field: {
          name: '<div class="settings-folder" style="padding:0!important"><div style="font-size:1.0em">' + Lampa.Lang.translate('lme_pubtorr') + '</div></div>',
          description: Lampa.Lang.translate('lme_pubtorr_description')
        },
        onChange: function onChange(value) {
          changeTorr();
          Lampa.Settings.update();
        },
        onRender: function onRender(item) {
          changeTorr();
          setTimeout(function () {
            $('div[data-children="parser"]').on('hover:enter', function () {
              Lampa.Settings.update();
            });
            $('.settings-param__name', item).css('color', 'f3d900') & $('div[data-name="pubTorr"]').insertBefore('div[data-name="torrserver_use_link"]');
          }, 0);
        }
      });
      Lampa.Settings.listener.follow('open', function (e) {
        if (e.name === 'parser') {
          e.body.find('[data-name="pubTorr"]').remove();
        }
      });
    }
    var Torrent = {
      pubSetting: pubSetting
    };

    Lampa.Platform.tv();
    function migration() {
      if (Lampa.Storage.get("torrserver_url_two") === "https://trs-gwynnbleiidd.koyeb.app") {
        Lampa.Storage.set("torrserver_url_two", "https://trs-lme.koyeb.app");
        Lampa.Storage.set("pubTorr", "https://trs-lme.koyeb.app");
        Lampa.Noty.show("Second torrserver updated");
      }
    }
    function add() {
      migration();
      Lang.translate();
      Parser.parserSetting();
      Torrent.pubSetting();
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
