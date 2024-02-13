(function () {
    'use strict';

    Lampa.Platform.tv();
    var proto = location.protocol === "https:" ? 'https://' : 'http://';
    var parserBase = ['jac.lampa32.ru', 'jacred.xyz', 'jacred.ru', 'jacred.viewbox.dev', 'spawn.pp.ua:59118', 'spawn.pp.ua:59117', '188.119.113.252:9117'];
    var parserName = ['Lampa32', 'Jacred.xyz', 'Jacred.ru', 'Viewbox', 'Spawn Jackett', 'Spawn Jacred', 'Unknown'];
    function myRequest(i) {
      setTimeout(function () {
        var myLink;
        var myAdder = '';
        if (parserBase[i] === 'spawn.pp.ua:59117') {
          myAdder = '2';
        }
        var k = i + 2;
        var mySelector = 'body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(' + k + ') > div';
        if ($('body > div.selectbox > div.selectbox__content.layer--height > div.selectbox__body.layer--wheight > div > div > div > div:nth-child(1) > div').text() !== 'Не выбран') return;
        myLink = proto + parserBase[i] + '/api/v2.0/indexers/status:healthy/results?apikey=' + myAdder;
        var xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.open("GET", myLink, true);
        xhr.send();
        xhr.ontimeout = function () {
          if ($(mySelector).text() === parserName[i]) $(mySelector).css('color', 'ff2e36');
        };
        xhr.onerror = function () {
          if ($(mySelector).text() === parserName[i]) $(mySelector).css('color', 'ff2e36');
        };
        xhr.onload = function () {
          if (xhr.status === 200) {
            if ($(mySelector).text() === parserName[i]) $(mySelector).css('color', '1aff00');
          }
          if (xhr.status === 401) {
            if ($(mySelector).text() === parserName[i]) $(mySelector).css('color', 'ff2e36');
          }
        };
      }, 1000);
    }
    function checkAlive() {
      for (var i = 0; i <= parserBase.length - 1; i++) {
        myRequest(i);
      }
    }
    Lampa.Controller.listener.follow('toggle', function (e) {
      if (e.name === 'select') {
        setTimeout(function () {
          checkAlive();
        }, 10);
      }
    });
    function changeParser() {
      var jackettUrlTwo = Lampa.Storage.get('jackett_url_two');
      Lampa.Storage.get('jackett_url');
      Lampa.Storage.get('jackett_key');
      var parserSettings = {
        no_parser: {
          url: '',
          key: ''
        },
        jac_lampa32_ru: {
          url: 'jac.lampa32.ru',
          key: ''
        },
        spawn_jacred: {
          url: 'spawn.pp.ua:59118',
          key: ''
        },
        jacred_xyz: {
          url: 'jacred.xyz',
          key: ''
        },
        spawn_jackett: {
          url: 'spawn.pp.ua:59117',
          key: '2'
        },
        jacred_ru: {
          url: 'jacred.ru',
          key: ''
        },
        unknown: {
          url: '188.119.113.252:9117',
          key: '1'
        },
        jacred_viewbox_dev: {
          url: 'jacred.viewbox.dev',
          key: 'viewbox'
        }
      };
      var settings = parserSettings[jackettUrlTwo] || parserSettings.no_parser;
      Lampa.Storage.set('jackett_url', settings.url);
      Lampa.Storage.set('jackett_key', settings.key);
    }
    Lampa.SettingsApi.addParam({
      component: 'parser',
      param: {
        name: 'jackett_url_two',
        type: 'select',
        values: {
          no_parser: 'Не выбран',
          jac_lampa32_ru: 'Lampa32',
          jacred_xyz: 'Jacred.xyz',
          jacred_ru: 'Jacred.ru',
          jacred_viewbox_dev: 'Viewbox',
          spawn_jackett: 'Spawn Jackett',
          spawn_jacred: 'Spawn Jacred',
          unknown: 'Unknown'
        },
        "default": 'jacred_xyz'
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
