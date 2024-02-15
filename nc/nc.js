(function () {
    'use strict';

    function data() {
      Lampa.Lang.add({
        nc_title: {
          ru: "Добавить категории",
          en: "Add category",
          uk: "Додати категорії",
          zh: "新类别" // Chinese translation
        },
        nc_concert: {
          ru: "Концерты",
          en: "Concerts",
          uk: "Концерты",
          zh: "音乐会" // Chinese translation
        },
        nc_cartoon: {
          ru: "Мультфильмы",
          en: "Cartoons",
          uk: "Мультфільми",
          zh: "漫画" // Chinese translation
        },
        nc_documentary: {
          ru: "Документалки",
          en: "Documentaries",
          uk: "Документальні",
          zh: "纪录片" // Chinese translation
        }
      });
    }
    var lang = {
      data: data
    };

    function catAdd(type) {
      var NEW_ITEM_SOURCES = ["tmdb", "cub"];
      var ITEM_TV_SELECTOR = '[data-action="tv"]';
      var ITEM_MOVE_TIMEOUT = 2000;
      var moveItemAfter = function moveItemAfter(item, after) {
        return setTimeout(function () {
          return $(item).insertAfter($(after));
        }, ITEM_MOVE_TIMEOUT);
      };
      if (type === 'nc_concert') {
        var NEW_ITEM_ATTR = 'data-action="nc_concert"';
        var NEW_ITEM_SELECTOR = "[".concat(NEW_ITEM_ATTR, "]");
        var NEW_ITEM_TEXT = Lampa.Lang.translate('nc_concert');
        var field = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(NEW_ITEM_ATTR, ">\n             <div class=\"menu__ico\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><g id=\"Music_Concert\" data-name=\"Music Concert\"><path d=\"M30,9V6.672A2.013,2.013,0,0,0,28.546,4.74a46.312,46.312,0,0,0-25.092,0A2.013,2.013,0,0,0,2,6.672V9a2,2,0,0,0,2,2V22a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2H8a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2h4a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2V11A2,2,0,0,0,30,9ZM4,6.665a44.107,44.107,0,0,1,24,0,.018.018,0,0,1,0,.01V9H4ZM26,18H24V15h2Zm-4,4H17V16.535l1.055-.7a1,1,0,1,0-1.11-1.664l-3,2A1,1,0,0,0,15,17.858V22H10V11H22ZM6,15H8v3H6Zm2-4v2H6V11ZM6,20H8v2H6ZM4,25V24H8v1Zm18,2H10V24H22Zm6-2H24V24h4Zm-4-3V20h2v2Zm2-9H24V11h2Z\" id=\"id_101\" style=\"fill: currentColor\"></path></g></svg>\n             </div>\n             <div class=\"menu__text\">").concat(NEW_ITEM_TEXT, "</div>\n          </li>\n        "));
        field.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/movie",
            title: "".concat(NEW_ITEM_TEXT),
            component: "category_full",
            genres: 10402,
            id: 10402,
            keywords: "156205-concert-film",
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(field);
        moveItemAfter(NEW_ITEM_SELECTOR, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_cartoon') {
        var _NEW_ITEM_ATTR = 'data-action="nc_cartoon"';
        var _NEW_ITEM_SELECTOR = "[".concat(_NEW_ITEM_ATTR, "]");
        var _NEW_ITEM_TEXT = Lampa.Lang.translate('nc_cartoon');
        var _field = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR, ">\n             <div class=\"menu__ico\">\n                <svg height=\"173\" viewBox=\"0 0 180 173\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M126 3C126 18.464 109.435 31 89 31C68.5655 31 52 18.464 52 3C52 2.4505 52.0209 1.90466 52.0622 1.36298C21.3146 15.6761 0 46.8489 0 83C0 132.706 40.2944 173 90 173C139.706 173 180 132.706 180 83C180 46.0344 157.714 14.2739 125.845 0.421326C125.948 1.27051 126 2.13062 126 3ZM88.5 169C125.779 169 156 141.466 156 107.5C156 84.6425 142.314 64.6974 122 54.0966C116.6 51.2787 110.733 55.1047 104.529 59.1496C99.3914 62.4998 94.0231 66 88.5 66C82.9769 66 77.6086 62.4998 72.4707 59.1496C66.2673 55.1047 60.3995 51.2787 55 54.0966C34.6864 64.6974 21 84.6425 21 107.5C21 141.466 51.2208 169 88.5 169Z\" fill=\"currentColor\"></path><path d=\"M133 121.5C133 143.315 114.196 161 91 161C67.804 161 49 143.315 49 121.5C49 99.6848 67.804 116.5 91 116.5C114.196 116.5 133 99.6848 133 121.5Z\" fill=\"currentColor\"></path><path d=\"M72 81C72 89.8366 66.1797 97 59 97C51.8203 97 46 89.8366 46 81C46 72.1634 51.8203 65 59 65C66.1797 65 72 72.1634 72 81Z\" fill=\"currentColor\"></path><path d=\"M131 81C131 89.8366 125.18 97 118 97C110.82 97 105 89.8366 105 81C105 72.1634 110.82 65 118 65C125.18 65 131 72.1634 131 81Z\" fill=\"currentColor\"></path></svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT, "</div>\n          </li>\n        "));
        _field.on("hover:enter", function () {
          var _Lampa$Activity$activ = Lampa.Activity.active(),
            currentSource = _Lampa$Activity$activ.source;
          var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
          Lampa.Activity.push({
            url: "movie",
            title: "".concat(_NEW_ITEM_TEXT, " - ").concat(source.toUpperCase()),
            component: "category",
            genres: 16,
            id: 16,
            source: source,
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field);
        moveItemAfter(_NEW_ITEM_SELECTOR, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_documentary') {
        var _NEW_ITEM_ATTR2 = 'data-action="nc_documentary"';
        var _NEW_ITEM_SELECTOR2 = "[".concat(_NEW_ITEM_ATTR2, "]");
        var _NEW_ITEM_TEXT2 = Lampa.Lang.translate('nc_documentary');
        var _field2 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR2, ">\n             <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT2, "</div>\n          </li>\n        "));
        _field2.on("hover:enter", function () {
          var _Lampa$Activity$activ2 = Lampa.Activity.active(),
            currentSource = _Lampa$Activity$activ2.source;
          var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
          Lampa.Activity.push({
            url: "movie",
            title: "".concat(_NEW_ITEM_TEXT2, " - ").concat(source.toUpperCase()),
            component: "category",
            genres: 99,
            id: 99,
            source: source,
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field2);
        moveItemAfter(_NEW_ITEM_SELECTOR2, ITEM_TV_SELECTOR);
      }
    }
    var insert = {
      catAdd: catAdd
    };

    function setting() {
      Lampa.SettingsApi.addComponent({
        component: "addCategory",
        name: Lampa.Lang.translate('nc_title'),
        icon: '<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M66.6667 215.921C66.6667 170.027 66.6667 147.08 74.056 128.94C84.215 104.002 104.002 84.215 128.94 74.056C147.08 66.6667 170.027 66.6667 215.921 66.6667C261.814 66.6667 284.761 66.6667 302.901 74.056C327.839 84.215 347.627 104.002 357.787 128.94C365.173 147.08 365.173 170.027 365.173 215.921C365.173 261.814 365.173 284.761 357.787 302.901C347.627 327.839 327.839 347.627 302.901 357.787C284.761 365.173 261.814 365.173 215.921 365.173C170.027 365.173 147.08 365.173 128.94 357.787C104.002 347.627 84.215 327.839 74.056 302.901C66.6667 284.761 66.6667 261.814 66.6667 215.921Z" fill="white"/>\n' + '<path d="M66.6667 584.08C66.6667 538.187 66.6667 515.24 74.056 497.1C84.215 472.163 104.002 452.373 128.94 442.217C147.08 434.827 170.027 434.827 215.921 434.827C261.814 434.827 284.761 434.827 302.901 442.217C327.839 452.373 347.627 472.163 357.787 497.1C365.173 515.24 365.173 538.187 365.173 584.08C365.173 629.973 365.173 652.92 357.787 671.06C347.627 696 327.839 715.787 302.901 725.943C284.761 733.333 261.814 733.333 215.921 733.333C170.027 733.333 147.08 733.333 128.94 725.943C104.002 715.787 84.215 696 74.056 671.06C66.6667 652.92 66.6667 629.973 66.6667 584.08Z" fill="white"/>\n' + '<path d="M434.83 584.08C434.83 538.187 434.83 515.24 442.22 497.1C452.38 472.163 472.167 452.373 497.103 442.217C515.243 434.827 538.19 434.827 584.083 434.827C629.98 434.827 652.927 434.827 671.063 442.217C696.003 452.373 715.79 472.163 725.95 497.1C733.34 515.24 733.34 538.187 733.34 584.08C733.34 629.973 733.34 652.92 725.95 671.06C715.79 696 696.003 715.787 671.063 725.943C652.927 733.333 629.98 733.333 584.083 733.333C538.19 733.333 515.243 733.333 497.103 725.943C472.167 715.787 452.38 696 442.22 671.06C434.83 652.92 434.83 629.973 434.83 584.08Z" fill="white"/>\n' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M559.083 315.922C559.083 329.729 570.273 340.923 584.083 340.923C597.89 340.923 609.083 329.729 609.083 315.922V240.922H684.083C697.89 240.922 709.083 229.729 709.083 215.922C709.083 202.115 697.89 190.922 684.083 190.922H609.083V115.922C609.083 102.115 597.89 90.922 584.083 90.922C570.273 90.922 559.083 102.115 559.083 115.922V190.922H484.083C470.273 190.922 459.083 202.115 459.083 215.922C459.083 229.729 470.273 240.922 484.083 240.922H559.083V315.922Z" fill="white"/>\n' + '</svg>'
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_concert",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_concert'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_concert');else $('body').find('.menu [data-action="nc_concert"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_cartoon",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_cartoon'),
          description: "TMDB/CUB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_cartoon');else $('body').find('.menu [data-action="nc_cartoon"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_documentary",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_documentary'),
          description: "TMDB/CUB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_documentary');else $('body').find('.menu [data-action="nc_documentary"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.Settings.listener.follow("open", function (e) {});
    }
    var config = {
      setting: setting
    };

    var manifest = {
      type: "other",
      version: "0.2",
      name: "New category",
      description: "Add new category to mein menu",
      component: "nc"
    };
    var main = function main() {
      Lampa.Manifest.plugins = manifest;
      lang.data();
      config.setting();
      if (Lampa.Storage.get('nc_concert')) insert.catAdd('nc_concert');
      if (Lampa.Storage.get('nc_cartoon')) insert.catAdd('nc_cartoon');
      if (Lampa.Storage.get('nc_documentary')) insert.catAdd('nc_documentary');
    };
    if (window.appready) {
      main();
    } else {
      Lampa.Listener.follow("app", function (event) {
        if (event.type === "ready") {
          main();
        }
      });
    }

})();
