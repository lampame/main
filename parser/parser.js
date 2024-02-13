(function () {
    'use strict';

    Lampa.Platform.tv();
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
        url: 'spawn.pp.ua:59118',
        key: ''
      }
    }, {
      base: 'spawn_jacred',
      name: 'Spawn Jacred',
      settings: {
        url: 'spawn.pp.ua:59117',
        key: '2'
      }
    }, {
      base: 'unknown',
      name: 'Unknown',
      settings: {
        url: '188.119.113.252:9117',
        key: '1'
      }
    }];
    /**
    function checkAlive() {
        for (let i = 0; i <= parsersInfo.length - 1; i++) {
            setTimeout(function () {
                let myLink;
                let myAdder = '';
                if (parsersInfo[i].settings.url === 'spawn.pp.ua:59117') {
                    myAdder = '2';
                }
                let k = i + 2;
                let mySelector = 'body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(' + k + ') > div';
                if ($('body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(1) > div').text() !== 'Не выбран') return;
                myLink = proto + parsersInfo[i].settings.url + '/api/v2.0/indexers/status:healthy/results?apikey=' + myAdder;
                let xhr = new XMLHttpRequest();
                xhr.timeout = 2000;
                xhr.open("GET", myLink, true);
                xhr.send();
                xhr.ontimeout = function () {
                    if ($(mySelector).text() === parsersInfo[i].name) $(mySelector).css('color', 'ff2e36');
                }
                xhr.onerror = function () {
                    if ($(mySelector).text() === parsersInfo[i].name) $(mySelector).css('color', 'ff2e36');
                }
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        if ($(mySelector).text() === parsersInfo[i].name) $(mySelector).css('color', '1aff00')
                    }
                    if (xhr.status === 401) {
                        if ($(mySelector).text() === parsersInfo[i].name) $(mySelector).css('color', 'ff2e36')
                    }
                }
            }, 1000)
        }
    }
    */
    function checkAlive() {
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
      Promise.all(requests).then(function () {
        return console.log('All requests completed');
      });
    }
    Lampa.Controller.listener.follow('toggle', function (e) {
      if (e.name === 'select') {
        setTimeout(function () {
          checkAlive();
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
    Lampa.SettingsApi.addParam({
      component: 'parser',
      param: {
        name: 'jackett_url_two',
        type: 'select',
        values: s_values,
        "default": 'no_parser'
      },
      field: {
        name: '<div class="settings-folder" style="padding:0!important"><div style="font-size:1.0em">Каталог парсеров</div></div>',
        description: 'Нажмите для выбора парсера'
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

})();
