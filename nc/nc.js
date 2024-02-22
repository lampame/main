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
        },
        nc_toptv: {
          ru: " Top serials",
          en: " Top serials",
          uk: " Top serials",
          zh: " Top serials" // Chinese translation
        },
        nc_topmovie: {
          ru: " Top movie",
          en: " Top movie",
          uk: " Top movie",
          zh: " Top movie" // Chinese translation
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

      //universal
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
      //movie
      if (type === 'nc_movienetflix') {
        var _NEW_ITEM_ATTR3 = 'data-action="nc_movienetflix"';
        var _NEW_ITEM_SELECTOR3 = "[".concat(_NEW_ITEM_ATTR3, "]");
        var _NEW_ITEM_TEXT3 = Lampa.Lang.translate('nc_topmovie');
        var _field3 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR3, ">\n             <div class=\"menu__ico\">\n                <svg\n                   id=\"Netflix_Symbol_RGB\"\n                   viewBox=\"0 0 551.11109 999.99998\"\n                   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                   xmlns=\"http://www.w3.org/2000/svg\"\n                   xmlns:svg=\"http://www.w3.org/2000/svg\"\n                   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n                   xmlns:cc=\"http://creativecommons.org/ns#\"\n                   xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n                  <metadata\n                     id=\"metadata12\">\n                    <rdf:RDF>\n                      <cc:Work\n                         rdf:about=\"\">\n                        <dc:format>image/svg+xml</dc:format>\n                        <dc:type\n                           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n                      </cc:Work>\n                    </rdf:RDF>\n                  </metadata>\n                  <defs\n                     id=\"defs4\">\n                    <linearGradient\n                       id=\"linearGradient35887\">\n                      <stop\n                         style=\"stop-color:#b1060f;stop-opacity:1;\"\n                         offset=\"0\"\n                         id=\"stop35883\" />\n                      <stop\n                         style=\"stop-color:#7b010c;stop-opacity:1\"\n                         offset=\"0.62500739\"\n                         id=\"stop36053\" />\n                      <stop\n                         style=\"stop-color:#b1060f;stop-opacity:0;\"\n                         offset=\"1\"\n                         id=\"stop35885\" />\n                    </linearGradient>\n                    <linearGradient\n                       id=\"linearGradient19332\">\n                      <stop\n                         style=\"stop-color:#b1060f;stop-opacity:1\"\n                         offset=\"0\"\n                         id=\"stop19328\" />\n                      <stop\n                         style=\"stop-color:#7b010c;stop-opacity:1\"\n                         offset=\"0.54607224\"\n                         id=\"stop19560\" />\n                      <stop\n                         style=\"stop-color:#e50914;stop-opacity:0;\"\n                         offset=\"1\"\n                         id=\"stop19330\" />\n                    </linearGradient>\n                    <style\n                       id=\"style2\">.cls-1{fill:#e50914;}</style>\n                    <linearGradient\n                       xlink:href=\"#linearGradient19332\"\n                       id=\"linearGradient13368\"\n                       x1=\"78.23394\"\n                       y1=\"423.76712\"\n                       x2=\"221.66281\"\n                       y2=\"365.09167\"\n                       gradientUnits=\"userSpaceOnUse\" />\n                    <linearGradient\n                       xlink:href=\"#linearGradient35887\"\n                       id=\"linearGradient35889\"\n                       x1=\"456.36462\"\n                       y1=\"521.55957\"\n                       x2=\"309.67599\"\n                       y2=\"583.49475\"\n                       gradientUnits=\"userSpaceOnUse\" />\n                  </defs>\n                  <path\n                     style=\"fill:url(#linearGradient13368);stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1\"\n                     d=\"M -1.1524947,-1.1524946 2.3049893,1002.6704 C 75.577724,988.55904 133.19716,990.10098 198.22908,984.23044 V 0 Z\"\n                     id=\"path6055\" />\n                  <path\n                     style=\"fill:url(#linearGradient35889);stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1\"\n                     d=\"m 353.81586,0 h 199.38158 l 2.30498,1000.3654 -202.83905,-33.42238 z\"\n                     id=\"path678\" />\n                  <path\n                     style=\"fill:#e50914;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                     d=\"M 1.1524964,-3.6590427e-7 C 5.7624764,11.524946 346.90086,981.92546 346.90086,981.92546 c 56.0558,-0.40033 131.2191,8.75315 205.1441,17.28745 L 197.07656,-3.6590427e-7 Z\"\n                     id=\"path362\" />\n                </svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT3, "</div>\n          </li>\n        "));
        _field3.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/movie",
            title: "Netflix ".concat(_NEW_ITEM_TEXT3),
            component: "category_full",
            watch_region: "US",
            watch_providers: 8,
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field3);
        moveItemAfter(_NEW_ITEM_SELECTOR3, ITEM_TV_SELECTOR);
      }
      //tv
      if (type === 'nc_tvnetflix') {
        var _NEW_ITEM_ATTR4 = 'data-action="nc_tvnetflix"';
        var _NEW_ITEM_SELECTOR4 = "[".concat(_NEW_ITEM_ATTR4, "]");
        var _NEW_ITEM_TEXT4 = Lampa.Lang.translate('nc_toptv');
        var _field4 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR4, ">\n             <div class=\"menu__ico\">\n                <svg\n                   id=\"Netflix_Symbol_RGB\"\n                   viewBox=\"0 0 551.11109 999.99998\"\n                   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                   xmlns=\"http://www.w3.org/2000/svg\"\n                   xmlns:svg=\"http://www.w3.org/2000/svg\"\n                   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n                   xmlns:cc=\"http://creativecommons.org/ns#\"\n                   xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n                  <metadata\n                     id=\"metadata12\">\n                    <rdf:RDF>\n                      <cc:Work\n                         rdf:about=\"\">\n                        <dc:format>image/svg+xml</dc:format>\n                        <dc:type\n                           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n                      </cc:Work>\n                    </rdf:RDF>\n                  </metadata>\n                  <defs\n                     id=\"defs4\">\n                    <linearGradient\n                       id=\"linearGradient35887\">\n                      <stop\n                         style=\"stop-color:#b1060f;stop-opacity:1;\"\n                         offset=\"0\"\n                         id=\"stop35883\" />\n                      <stop\n                         style=\"stop-color:#7b010c;stop-opacity:1\"\n                         offset=\"0.62500739\"\n                         id=\"stop36053\" />\n                      <stop\n                         style=\"stop-color:#b1060f;stop-opacity:0;\"\n                         offset=\"1\"\n                         id=\"stop35885\" />\n                    </linearGradient>\n                    <linearGradient\n                       id=\"linearGradient19332\">\n                      <stop\n                         style=\"stop-color:#b1060f;stop-opacity:1\"\n                         offset=\"0\"\n                         id=\"stop19328\" />\n                      <stop\n                         style=\"stop-color:#7b010c;stop-opacity:1\"\n                         offset=\"0.54607224\"\n                         id=\"stop19560\" />\n                      <stop\n                         style=\"stop-color:#e50914;stop-opacity:0;\"\n                         offset=\"1\"\n                         id=\"stop19330\" />\n                    </linearGradient>\n                    <style\n                       id=\"style2\">.cls-1{fill:#e50914;}</style>\n                    <linearGradient\n                       xlink:href=\"#linearGradient19332\"\n                       id=\"linearGradient13368\"\n                       x1=\"78.23394\"\n                       y1=\"423.76712\"\n                       x2=\"221.66281\"\n                       y2=\"365.09167\"\n                       gradientUnits=\"userSpaceOnUse\" />\n                    <linearGradient\n                       xlink:href=\"#linearGradient35887\"\n                       id=\"linearGradient35889\"\n                       x1=\"456.36462\"\n                       y1=\"521.55957\"\n                       x2=\"309.67599\"\n                       y2=\"583.49475\"\n                       gradientUnits=\"userSpaceOnUse\" />\n                  </defs>\n                  <path\n                     style=\"fill:url(#linearGradient13368);stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1\"\n                     d=\"M -1.1524947,-1.1524946 2.3049893,1002.6704 C 75.577724,988.55904 133.19716,990.10098 198.22908,984.23044 V 0 Z\"\n                     id=\"path6055\" />\n                  <path\n                     style=\"fill:url(#linearGradient35889);stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1\"\n                     d=\"m 353.81586,0 h 199.38158 l 2.30498,1000.3654 -202.83905,-33.42238 z\"\n                     id=\"path678\" />\n                  <path\n                     style=\"fill:#e50914;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                     d=\"M 1.1524964,-3.6590427e-7 C 5.7624764,11.524946 346.90086,981.92546 346.90086,981.92546 c 56.0558,-0.40033 131.2191,8.75315 205.1441,17.28745 L 197.07656,-3.6590427e-7 Z\"\n                     id=\"path362\" />\n                </svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT4, "</div>\n          </li>\n        "));
        _field4.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/tv",
            title: "Netflix ".concat(_NEW_ITEM_TEXT4),
            component: "category_full",
            networks: 213,
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field4);
        moveItemAfter(_NEW_ITEM_SELECTOR4, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_appletv') {
        var _NEW_ITEM_ATTR5 = 'data-action="nc_appletv"';
        var _NEW_ITEM_SELECTOR5 = "[".concat(_NEW_ITEM_ATTR5, "]");
        var _NEW_ITEM_TEXT5 = Lampa.Lang.translate('nc_toptv');
        var _field5 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR5, ">\n             <div class=\"menu__ico\">\n                <svg version=\"1.1\" id=\"katman_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    \t viewBox=\"0 0 560 400\"  fill=\"currentColor\" xml:space=\"preserve\">\n                    <style type=\"text/css\">\n                    \t.st0{fill-rule:evenodd;clip-rule:evenodd;}\n                    </style>\n                    <path class=\"st0\" d=\"M152.3,150c5.5-6.8,8.1-15.4,7.3-24c-8.4,0.8-16.3,4.9-21.9,11.3c-5.6,6.3-8.4,14.4-7.9,22.8\n                    \tC138.4,160.5,146.8,156.7,152.3,150 M159.4,161.5c-12.2-0.8-22.6,6.9-28.1,6.9s-14.7-6.6-24.4-6.4c-12.8,0.3-24.5,7.5-30.6,18.7\n                    \tc-13.2,22.6-3.5,56.4,9.4,74.5c6.2,9.4,13.6,18.8,23.5,18.8c9.9,0,12.9-6,24.2-6c11.3,0,14.5,6,24.4,5.8c9.9-0.2,16.6-9.4,22.7-18.2\n                    \tc4.4-6.4,7.8-13.5,10.1-20.9c-12-5.3-19.7-17.2-19.6-30.3c0.2-11.5,6.3-22.1,16-28.1c-6.3-8.9-16.3-14.4-27.1-14.7\"/>\n                    <path class=\"st0\" d=\"M255.5,149.5v23.4h18.7v16.1h-18.7V244c0,8.5,3.7,12.5,12.1,12.5c2.3,0,4.5-0.2,6.8-0.5v16\n                    \tc-3.7,0.7-7.5,1-11.3,0.9c-20.2,0-28.1-7.6-28.1-26.9v-56.8h-14.2v-16.4h14.4v-23.4L255.5,149.5z M342.9,272.7h-21.8l-36-99.7h21.8\n                    \tl25,79.6l25.3-79.6h21.4L342.9,272.7z M490.1,212.9h-39.7v-39.8h-18.9v39.8h-39.5v18.7h39.5v40h18.9v-40h39.7V212.9z\"/>\n                    </svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT5, "</div>\n          </li>\n        "));
        _field5.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/tv",
            title: "AppleTV ".concat(_NEW_ITEM_TEXT5),
            component: "category_full",
            networks: 2552,
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field5);
        moveItemAfter(_NEW_ITEM_SELECTOR5, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_paramountplus') {
        var _NEW_ITEM_ATTR6 = 'data-action="nc_paramountplus"';
        var _NEW_ITEM_SELECTOR6 = "[".concat(_NEW_ITEM_ATTR6, "]");
        var _NEW_ITEM_TEXT6 = Lampa.Lang.translate('nc_toptv');
        var _field6 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR6, ">\n             <div class=\"menu__ico\">\n                <svg version=\"1.0\" id=\"katman_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    \t viewBox=\"0 0 560 400\" fill=\"currentColor\" xml:space=\"preserve\">\n                    <g>\n                    \t<path d=\"M260.2,203.3c-0.9-0.4-2.4-2,0.1-6.6l5.6-11.8c0.2-0.4-0.2-0.8-0.5-0.5l-4.9,5c-2.3,2.4-6.3,9.3-7.1,10.6l-6,9.9\n                    \t\tc0.6,0,1,0.7,0.7,1.2l-5.5,9.2c-1.3,2.3,1.1,3.9,1.4,3.4c8.6-13.9,13.6-12.8,13.6-12.8l2.9-6.7\n                    \t\tC260.8,203.8,260.6,203.4,260.2,203.3\"/>\n                    \t<path d=\"M279.8,87.2c-49.3,0-89.3,40-89.3,89.3c0,19.9,6.5,38.2,17.4,53c3.7-1.6,5.8-4,7.3-5.9l16.6-21.3c0.4-0.4,0.8-0.8,1.3-1\n                    \t\tl2.5-1.1l27.3-34.7l4-3.1l8.1-11.3c0.2-0.3,0.5-0.6,0.8-0.8l3.6-2.6c0.9-0.6,2.1-0.7,3,0l4.3,3c2.3,1.6,4.1,3.7,5.4,6.2l17.3,30.3\n                    \t\tc0.4,0.7,0.7,1,1.4,1.3c3.4,1.7,5.4,2,9.9,6.8c2.1,2.3,11.1,12.4,23.8,28.1c1.8,2.4,4,4.4,7.2,5.8c10.9-14.8,17.4-33.1,17.4-52.9\n                    \t\tC369.1,127.2,329.1,87.2,279.8,87.2 M214.6,181.3l-5.8-1.9l-3.6,4.9v-6.1l-5.8-1.9l5.8-1.9v-6.1l3.6,4.9l5.8-1.9l-3.6,4.9\n                    \t\tL214.6,181.3z M213.3,201.3l-1.9,5.8l-1.9-5.8h-6.1l4.9-3.6l-1.9-5.8l4.9,3.6l4.9-3.6l-1.9,5.8l4.9,3.6H213.3z M214.4,155.2\n                    \t\tl1.9,5.8l-4.9-3.6l-4.9,3.6l1.9-5.8l-4.9-3.6h6.1l1.9-5.8l1.9,5.8h6.1L214.4,155.2z M224.2,142.1l-3.6-4.9l-5.8,1.9l3.6-4.9\n                    \t\tl-3.6-4.9l5.8,1.9l3.6-4.9v6.1l5.8,1.9l-5.8,1.9V142.1z M239.4,120.8l-1.9,5.8l-1.9-5.8h-6.1l4.9-3.6l-1.9-5.8l4.9,3.6l4.9-3.6\n                    \t\tl-1.9,5.8l4.9,3.6H239.4z M258.6,111.1l-3.6,4.9v-6.1l-5.8-1.9l5.8-1.9v-6l3.6,4.9l5.8-1.9l-3.6,4.9l3.6,4.9L258.6,111.1z\n                    \t\t M282.9,105.4l1.9,5.8l-4.9-3.6l-4.9,3.6l1.9-5.8l-4.9-3.6h6.1L280,96l1.9,5.8h6.1L282.9,105.4z M304.7,109.9v6.1l-3.6-4.9\n                    \t\tl-5.8,1.9l3.6-4.9l-3.6-4.9l5.8,1.9l3.6-4.9v6.1l5.8,1.9L304.7,109.9z M345,171.4l5.8,1.9l3.6-4.9v6.1l5.8,1.9l-5.8,1.9v6.1\n                    \t\tl-3.6-4.9l-5.8,1.9l3.6-4.9L345,171.4z M322.1,126.6l-1.9-5.8h-6.1l4.9-3.6l-1.9-5.8l4.9,3.6l4.9-3.6l-1.9,5.8l4.9,3.6H324\n                    \t\tL322.1,126.6z M335.5,142.1v-6l-5.8-1.9l5.8-1.9v-6.1l3.6,4.9l5.8-1.9l-3.6,4.9l3.6,4.9l-5.8-1.9L335.5,142.1z M346.4,151.6\n                    \t\tl1.9-5.8l1.9,5.8h6.1l-4.9,3.6l1.9,5.8l-4.9-3.6l-4.9,3.6l1.9-5.8l-4.9-3.6H346.4z M350.2,201.3l-1.9,5.8l-1.9-5.8h-6.1l4.9-3.6\n                    \t\tl-1.9-5.8l4.9,3.6l4.9-3.6l-1.9,5.8l4.9,3.6H350.2z\"/>\n                    \t<path d=\"M312.2,228.1c0.4-0.6,1.1-2.3-0.2-5.5l-3.9-10.6c-0.5-1.4,0.6-2.2,1.4-1.3c0,0,7.5,8.6,9.4,12.2l3.7,6.1\n                    \t\tc3.2,0.2,11.9,0.5,20.3,0.5c-0.8-0.8-1.6-1.7-2.4-2.7C326.1,209,317,199.1,317,199c-2.9-3.2-4.3-3.8-6.5-4.8\n                    \t\tc-0.3-0.1-0.7-0.3-1-0.5v2.7c0,0.4-0.4,0.5-0.6,0.2l-21.1-37.1l-0.1-0.1c-0.9-1.7-2.2-3.2-3.8-4.4l-2.1-1.4l-10.1,23.2\n                    \t\tc1.6,0,2.6,1.6,2,3l-9.3,21.5h8.5c3.3,0,6.6,0.6,9.6,1.9l2.2,0.9c0,0-6.8,14-6.8,21.3c0,1.3,0.2,2.7,0.6,4h15.6l-0.7-4.4\n                    \t\tC293.6,224.9,303,227.2,312.2,228.1\"/>\n                    \t<path d=\"M191.4,250.7c0-14.4-15.2-21.3-33.3-21.3c-19.4,0-37.1,8.6-43.7,21.9c-1.8,3.5-2.7,7.5-2.7,11.4c-0.1,3.5,0.9,6.9,2.7,9.7\n                    \t\tc2.8,4.1,7.8,6.7,15.1,6.7c9,0,16.1-4.9,16.1-13.5c0,0,0.1-2.4-2.7-2.4c-2.3,0-2.9,1.6-2.8,2.4c0.3,6.7-3.7,12.1-10.8,12.1\n                    \t\tc-8,0-11.3-6.8-11.3-14c0-14.8,11.2-24.7,22.8-29c5.5-2.1,11.2-3.1,17-3c13.2,0,24,5.1,24,18.6c0,11.3-9.5,21-20.9,21.8l0.5-1.5\n                    \t\tc2.3-8.3,5.2-17.4,9.9-24.2c0.3-0.4,0.7-1.1,1.3-1.7l-0.7-0.8c-1,0.6-1.9,1.3-2.9,2c-21.8,17-22.5,65-51.6,65c-1,0-2-0.1-3-0.2\n                    \t\tc-6.1-1-9.2-5.1-9.2-10.7c0-1.1,0.4-2.7,0.4-3.5c0.1-1.6-1.3-3-2.9-3h-0.3c-2.6,0-3.7,2.1-3.7,5c-0.2,8.4,6.1,13.4,15.7,14.3\n                    \t\tc1.1,0.1,2.1,0.1,3.3,0.1c22.7,0,36.6-17.2,42.5-38c3-0.3,6-1,8.9-1.9C179.5,270.2,191.4,263,191.4,250.7\"/>\n                    \t<path d=\"M407.5,255.7h-8l-1.8,4.2l-3.1,7.1h-3.7l-1.1,2.4h3.9l-4.7,10.3c-3.3,7.3-8.5,14.4-11.5,14.4c-0.7,0-1.1-0.3-1.1-0.9\n                    \t\tc0-0.6,0.2-1.3,0.9-3.1c0.9-2.2,2.5-5.4,3.6-7.7c1.7-3.4,4.3-8.6,4.3-11.2c0-2.6-1.7-4.7-4.9-4.7c-3.7,0-7,2.2-10,5.4l2-4.8h-7.5\n                    \t\tl-6.1,14c-2.5,4.9-7.5,13.1-10.6,13.1c-0.7,0-0.9-0.4-0.9-1.1c0.1-0.6,0.2-1.1,0.5-1.7c0.3-0.6,3.9-9.2,3.9-9.2l6.7-15.2H350\n                    \t\tl-6.5,14.8c-2,4.6-7.1,12.4-10.3,12.4c-0.5,0.1-1.1-0.3-1.1-0.9v-0.3c0-0.8,0.6-2.3,1.1-3.3l3.4-7.5l7-15.2h-8.1l-1.6,3.5\n                    \t\tc-1.2,2.3-3.2,5.1-6.4,5.1c-1.5,0-2.3-0.6-2.6-1.2c-0.5-5.1-3.7-7.8-8.5-7.8c-6.6,0-11.4,3.9-14.5,8.7c-2.1,3.3-3.7,6.9-4.8,10.6\n                    \t\tc-2.9,4.7-5.9,8.4-8.3,8.4c-0.6,0-1-0.3-1-1.1c0-0.8,0.8-2.6,1.1-3.3l5.3-11.2c1.5-3.5,2.5-5.7,2.5-8c0-2.4-1.7-4.1-4.4-4.1\n                    \t\tc-3.8,0-7.9,2.2-11.2,5.8c0.1-0.6,0.1-1.1,0.1-1.7c0-2.7-1.3-4-4.1-4c-3.5,0-7.1,2.1-10.3,5.8l2.1-5.2h-7.3l-6.2,14\n                    \t\tc-2.9,6.6-7.7,13.1-10.3,13.1c-0.6,0-1-0.3-1-1.1c0-1.3,1.4-4.4,1.9-5.7l8.2-18.6c0.6-1.4-3.3-2.3-8.3-2.3\n                    \t\tc-5.1,0-10.4,2.5-14.2,5.8c-2.7,2.3-4.7,3.4-5.7,3.4c-0.5,0-0.7-0.3-0.7-0.6c0-1.1,2.7-4.3,2.7-6.8c0-1.1-0.6-1.9-2.1-1.9\n                    \t\tc-2.9,0-6.4,2.8-8.9,5.7l2.1-5.1h-7.2l-6.2,14c-2.9,6.6-7.8,13.5-10.5,13.5c-0.6,0-1-0.3-1-1.1c0-1.3,1.3-4.3,2.1-5.9l8.2-18.6\n                    \t\tc0.6-1.4-3.3-2.3-8.3-2.3c-7.4,0-14.6,5-18.4,10.1c-4.2,5.5-7.1,11.4-7.1,16.2c-0.1,3.9,1.9,6.3,5.9,6.3c4.5,0,8.1-3.5,10.1-6.2\n                    \t\tc-0.1,0.5-0.2,1.1-0.3,1.6c0,2.7,1.1,4.6,4.3,4.6c2.9,0,6.7-2.4,9.7-6.2l-2.5,5.7h7.8l7.7-17.4c2.5-5.7,5.4-8.6,6.2-8.6\n                    \t\tc0.3,0,0.4,0.1,0.4,0.3c0,0.6-1.2,2.2-1.2,3.6c0,1.5,0.8,2.6,2.9,2.6c1.7,0,3.5-0.8,5.2-1.9c-3.9,5.3-6.6,10.9-6.6,15.5\n                    \t\tc-0.1,3.9,1.9,6.3,5.9,6.3c4.2,0,8.1-4,10.3-6.7c-0.1,0.6-0.1,1.2-0.1,1.9c0,2.6,1.5,4.8,4.5,4.8c3.3,0,6-2.1,9.3-6.1l-2.5,5.6h8\n                    \t\tl7.3-16.6c3.2-7.2,7.5-11,9.7-11c0.5-0.1,1,0.3,1.1,0.9v0.2c-0.1,0.8-0.3,1.6-0.7,2.3l-10.5,24.3h8.2l7.5-16.9\n                    \t\tc3.2-7.3,6.7-10.8,9.4-10.8c0.8,0,1.1,0.4,1.1,1.3c-0.1,0.9-0.3,1.9-0.7,2.7l-7.2,15.3c-0.7,1.5-1.1,3.1-1.2,4.7\n                    \t\tc0,2.3,1.3,4.4,4.9,4.4c4.7,0,8.2-3.5,12.2-8.8v1.1c0.3,4.2,2.7,7.9,8.9,7.9c7.3,0,13.3-5.1,16.8-13.1c1.3-2.9,2.3-5.9,2.6-9\n                    \t\tc0.8,0.4,1.7,0.6,2.6,0.5c1.2,0,2.4-0.3,3.5-0.9l-1.3,2.7c-1.5,3.1-3.1,6.5-4.3,9.3c-0.8,1.7-1.3,3.5-1.4,5.4\n                    \t\tc0,2.9,1.6,4.9,4.9,4.9s7.7-3.1,10.9-7.4h0.1c-0.2,0.9-0.3,1.8-0.3,2.7c0,2.4,0.7,4.7,4.1,4.7c3.9,0,6.9-2.8,9.8-6.3l-2.5,5.6h8\n                    \t\tl6.5-14.6c3.7-8.3,7.3-13.2,10.7-13.2c0.6,0,1.1,0.4,1.1,1v0.2c0,1.4-2,5.2-3.8,9c-1.7,3.5-2.9,6.1-3.8,8.2\n                    \t\tc-0.8,1.7-1.3,3.6-1.4,5.5c0,2.5,1.4,4.5,4.5,4.5c4.7,0,9.4-4.5,11.9-7.9c-0.6,1.7-0.9,3.3-0.9,5.1c0,4.7,2.8,7,6.7,7\n                    \t\tc2.6,0,5.1-0.9,7.3-2.4c3.1-2.1,5.5-5.3,7.6-8.2l-1.4-1.3c-1.9,2.7-4.1,5.3-6.3,6.9c-1.2,1-2.6,1.5-4.1,1.6c-1.7,0-2.7-0.9-2.7-3\n                    \t\tc0-2.1,1-5,2.5-8.9c0.1-0.1,2.3-5,4.3-9.7c1.7-4,3.5-7.9,3.8-8.7h5.3l1.1-2.4h-5.2L407.5,255.7z M180.5,294c-1.1,0-1.9-0.4-1.9-1.9\n                    \t\tc0.1-3.9,3.3-10.9,7.4-16.5c2.9-3.9,6.6-6.7,10.6-6.7l-5.1,11.3C187.7,288.8,183.6,294,180.5,294 M230.3,294c-1.1,0-1.9-0.4-2-1.9\n                    \t\tc0.1-3.9,3.3-10.9,7.4-16.5c2.9-3.9,6.6-6.7,10.6-6.7l-5.1,11.3C237.4,289,233.4,294,230.3,294 M318.7,272c-0.2,4.3-4,14.8-8.4,21\n                    \t\tc-1.8,2.5-3.3,3.3-4.7,3.3c-1.9,0-2.4-1.5-2.1-3.8c0.4-3.9,3.7-13.1,8.2-19.4c2.1-2.9,3.5-4.1,5.1-4.1\n                    \t\tC318.3,269,318.8,270.3,318.7,272\"/>\n                    \t<polygon points=\"442.9,266.8 450.2,249.9 441.6,249.9 434.2,266.8 415.8,266.8 412.7,274 431.2,274 423.8,291 432.5,291 439.8,274 \n                    \t\t458.3,274 461.4,266.8 \t\"/>\n                    </g>\n                    </svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT6, "</div>\n          </li>\n        "));
        _field6.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/tv",
            title: "Paramount+ ".concat(_NEW_ITEM_TEXT6),
            component: "category_full",
            networks: 4330,
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field6);
        moveItemAfter(_NEW_ITEM_SELECTOR6, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_disneyplus') {
        var _NEW_ITEM_ATTR7 = 'data-action="nc_disneyplus"';
        var _NEW_ITEM_SELECTOR7 = "[".concat(_NEW_ITEM_ATTR7, "]");
        var _NEW_ITEM_TEXT7 = Lampa.Lang.translate('nc_toptv');
        var _field7 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR7, ">\n             <div class=\"menu__ico\">\n                <svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                \t viewBox=\"0 0 960.2 723.3\" fill=\"currentColor\" xml:space=\"preserve\">\n                <style type=\"text/css\">\n                \t.st0{fill:#101C50;}\n                \t.st1{fill:url(#SVGID_1_);}\n                </style>\n                <path class=\"st0\" d=\"M447,431.2l0.9,0.1c6.5,0.9,12.9,2,17.7,4.2c4.2,1.7,7.6,4.9,9.6,9c3.7,7.4,3.9,16.1,0.6,23.6\n                \tc-2.5,5.4-7.9,9.9-12.9,12.3c-5.1,2.4-10.5,3.9-16.1,4.4c-10.5,1-21-0.9-30.5-5.4c-5.4-2.6-12.1-7.2-15.4-13.1\n                \tc-2.5-4.4-2.3-9.8,0.6-14c4.8-6.5,15-8,22.7-7.7c7.5,0.5,14.9,1.8,22,4c1.5,0.6,7.2,2.8,8.2,3.8c0.8,0.7,1.1,1.7,0.8,2.7\n                \tc-1.3,3.9-10.8,6-13.5,6.4c-7.3,1.1-11.1-1.7-19.5-4.9c-2.2-0.9-4.6-1.6-6.9-1.9c-3.8-0.4-8.4,0.7-9.1,4.8c-0.4,2.1,2.1,4.1,4,5\n                \tc3.9,1.8,8.2,2.7,12.5,2.7c13,0.2,27.6-1.9,38.2-9.5c1.5-1,2.9-2.6,2.9-4.5c0-3.9-6.7-6.2-6.7-6.2c-7.1-3-20.4-4.4-27.2-5\n                \tc-7.1-0.6-18.4-1.5-21.1-2c-2.8-0.3-5.6-1-8.2-2c-2.6-1.2-4.6-3.5-5.5-6.2c-1.2-4.9,0.3-10.9,3-14.8c7.1-10.2,23.7-14.1,36.1-15.6\n                \tc12-1.5,31.5-1.5,43.3,4.8c1.8,1,2.8,1.9,2.4,3.8c-0.8,3.4-3.4,6.2-6.9,7c-3.5,1.1-10.7,1.5-13.9,1.8c-14.2,0.8-31.4,0.4-45,4.1\n                \tc-1.1,0.3-2.9,0.8-3.5,1.5c-2.1,2.3,3.9,3,5.2,3.2c0.3,0.1,0.6,0.1,0.9,0.2L447,431.2 M362.2,367.7c0,0,2.3-3.5,4.2-6.1\n                \tc4.4-5.7,9.3-10.9,14.7-15.6c1.5-1.2,3.2-2.7,3.2-2.7s-2.7,0.3-4.2,0.6c-3.6,0.7-9,4.3-11.7,6.6c-4.4,3.8-9.3,9.9-7.1,15.4\n                \tC361.7,366.7,362.2,367.7,362.2,367.7 M386.8,374.3c6.9-0.5,13.6-2.5,19.6-5.9c6-3.3,14.7-9.8,13.8-17.5c-0.2-2.3-1.7-4.4-3.9-5.3\n                \tc-2.7-1.1-4-1-7.5,0c-2.1,0.5-4.1,1.4-5.9,2.5c-6.8,4-16.5,12.5-21.8,19.3c-1.2,1.6-2.5,3.4-3.4,4.6c-0.6,0.8-1.1,1.5-1,1.6\n                \tC376.9,374.5,384.1,374.4,386.8,374.3 M369.1,387.3c-0.9,1.3-1.6,2.6-2.3,3.9c-0.5,0.8-1,1.4-1.7,2c-1.8,1.3-3.4,1.4-5.1-0.1\n                \tc-2.5-2.3-3.9-5.5-4-8.8c0.1-1.4,0.1-2.8-0.1-4.2c-0.5-2-2.5-4.1-3.6-6.1c-1.4-2.8-2.2-5.8-2.5-8.9c-0.4-8,3.8-15.4,9.3-21.3\n                \tc5.8-6.1,12.9-10.9,20.7-14.2c7.5-3.1,18.4-5.3,26.5-2.4c3.2,1.1,6,3,8.2,5.5c0.3,0.5,0.7,0.9,1.1,1.3c0.7,0.2,1.4,0.4,2.1,0.5\n                \tc2.9,0.7,5.6,1.9,7.9,3.7c2.9,2.2,4.8,5.4,5.5,8.9c1.6,7.4-2.7,15.6-7.6,20.5c-8.3,8.5-16.6,14.5-27.2,18.7\n                \tc-4.7,1.8-12,3.5-17.3,3.1c-1.6-0.1-3.4-0.6-5-0.7c-1.4-0.2-2.8-0.6-4.1-1.1C369.7,387.5,369.2,387.3,369.1,387.3 M378.6,403.8\n                \tc0.4,0.1,0.9,0.2,1.3,0.4c3.7,1.4,5.3,4.9,6.2,8.7c2.1,8.8,3,28.4,3.4,36c0.3,5.7,0.4,11.4,0.6,17.1c0.2,4.8,0.6,11.2-0.4,15.7\n                \tc-0.4,1.8-1.5,3.4-3,4.5c-1.8,1.1-5.8,1.2-8,0.8c-5.5-1.1-7.2-4.6-8-10.1c-1.9-12.9-1-38.3,0.1-49c0.4-3.5,1.7-14.9,3.5-19.6\n                \tC375,406.6,376.4,403.3,378.6,403.8 M212.1,425.3c0,0-8.1,0.6-13.8,1.2c-7.1,0.8-20.6,3.1-28.3,5.9c-2.3,0.8-7,2.8-7.4,5.2\n                \ts1.1,4.4,2.8,6.4c1,1.2,6.6,6.5,8.1,7.8c6.6,5.5,19.9,14,29.7,18c3.4,1.4,8.9,3.4,8.9,3.4s-0.4-15.9-0.3-31.5\n                \tC211.9,433.5,212.1,425.3,212.1,425.3 M361.4,431.7c0.5,4.3-0.6,12.3-0.8,13.4c-0.6,3-1.4,5.9-2.5,8.8c-1.4,3.1-2.9,6.1-4.5,9.1\n                \tc-3.5,5.8-7.8,11.1-12.8,15.7c-14,12.1-35.7,19-54.4,21.3c-13.5,1.6-27.2,1.2-40.6-1.2c-4.6-0.8-11.5-2.4-11.5-2.4s0,2.7-0.2,4.7\n                \tc-0.2,1.4-0.6,2.7-1.1,3.9c-0.9,1.9-2.8,3.2-4.9,3.5c-2.8,0.5-5.8,0.7-8.4-0.4c-4.3-1.8-5.8-5.8-6.5-10.4\n                \tc-0.6-3.7-1.2-10.1-1.2-10.1s-3.2-1.5-5.8-2.8c-7.9-3.9-15.5-8.6-22.7-13.9c-1.9-1.4-9.9-8.2-11.7-9.8c-5-4.7-9.5-9.5-12.9-15.5\n                \tc-2.7-4.7-3.4-8.9-1.4-13.9c2.8-7,12.8-12.2,19.6-15.2c5-2.2,20.7-7.3,27.2-8.3c3.1-0.4,7.8-1.3,8.1-1.5c0.1-0.1,0.2-0.2,0.3-0.3\n                \tc0.1-0.2,0.4-7.1,0.4-9.6c-0.1-2.5,1.8-18.8,2.4-22.3c0.3-1.9,1.7-9.1,3.2-10.9c0.9-1.3,2.6-1.2,4-0.3c7.4,4.6,9.7,20.7,10.3,28.9\n                \tc0.3,5,0.5,12.5,0.5,12.5s8.6-0.2,13.8-0.1c5.4,0.2,10.7,0.8,16,1.8c6.8,1.1,20,4,27.6,7.8c6.2,3.2,12.1,8.5,14,14.1\n                \tc1.8,5.2,1.5,8.8-1.2,13.4c-3,5.3-8.7,9.2-14.5,9.5c-1.7,0.1-8.2-0.8-10.2-2.3c-0.7-0.6-0.8-1.7-0.2-2.5c0.2-0.3,3.2-1.9,5-2.8\n                \tc0.8-0.5,1.6-1,2.3-1.6c1.5-1.3,2.8-2.8,2.7-4.4c-0.2-2.2-2.5-3.5-4.7-4.4c-10.4-4.1-31-7.5-41-8.1c-3.9-0.2-9.5-0.4-9.5-0.4\n                \tl1.2,55.2c0,0,4.6,0.9,8.2,1.5c2.1,0.3,10.9,1.1,13.2,1.2c17.8,0.5,37.8-1.1,54.1-8.9c7.2-3.4,13.8-7.6,18.8-13.3\n                \tc6.8-7.9,10.1-18.3,9.1-28.6c-1-11.8-9.3-25.8-15.9-34.3c-17.5-22.5-47.5-41-73.8-51.8c-26.9-11.1-53.5-17.4-82.1-18.5\n                \tc-7.4-0.3-23.4,0.1-31.6,2.3c-1.2,0.3-2.3,0.7-3.4,1c-0.9,0.2-1.8,0.6-2.6,1.1c-0.2,0.2-0.4,0.4-0.4,0.4s0.5,0.3,1,0.5\n                \tc0.9,0.4,4.5,0.6,6.4,1c1.6,0.2,3.1,1.1,4.1,2.4c0.7,0.9,0.7,2.2-0.1,3.1c-1.9,2.2-8.8,1.8-11.8,1.3c-3-0.5-7.1-1.5-7.8-4.2\n                \tc-0.8-3.2,0.7-6.4,2.4-9.4c3.3-5.9,8.2-9,15.2-10.9c10.5-2.8,21.2-4.5,32-5c21.3-0.8,41.5,2.9,62.2,9.2c13.2,4.1,26.1,9.1,38.6,15\n                \tc9.7,4.8,19.1,10.1,28.2,15.8c2.3,1.5,15.6,11.3,17.6,13c4.3,3.5,9.9,8.6,14,12.6c7.9,7.8,17.7,19.8,22.5,29.3\n                \tc1.1,2.3,2,4.5,3.5,7.2c1.2,2.6,2.2,5.2,3,7.9c0.4,1.5,0.9,3.8,1,3.9C360.6,425.2,361.6,429.9,361.4,431.7 M629.6,419.4\n                \tc-10,2.3-36.3,3.6-36.3,3.6l-3.3,10.4c0,0,13.1-1.1,22.7-0.1c0,0,3.1-0.4,3.5,3.5c0.1,2.5,0,5-0.3,7.5c0,0-0.2,2.3-3.5,2.9\n                \tc-3.6,0.6-28.3,1.5-28.3,1.5l-4,13.5c0,0-1.5,3.1,1.9,2.2c3.1-0.8,29-5.7,32.3-5c3.6,0.9,7.6,5.7,6.5,10.1\n                \tc-1.4,5.4-27.2,21.9-42.9,20.8c0,0-8.3,0.5-15.2-10.6C556,469.1,565,449,565,449s-4.1-9.4-1.1-12.6c0,0,1.8-1.6,7-2l6.3-13\n                \tc0,0-7.2,0.5-11.5-4.8c-4-5-4.3-7.3-1.3-8.7c3.3-1.6,33.3-7.1,54-6.4c0,0,7.2-0.7,13.4,11.8C631.8,413.2,634.8,418.2,629.6,419.4\n                \t M551.9,469.8c-2.7,6.2-9.6,12.9-18.3,8.8c-8.7-4.1-22.2-32.1-22.2-32.1s-5.2-10.4-6.2-10.2c0,0-1.1-2-1.8,9.4s0.1,33.5-4.4,37\n                \tc-4.3,3.5-9.5,2.1-12.2-2c-2.5-4-3.5-13.6-2.1-30.3c1.6-16.8,5.5-34.7,10.5-40.3s9-1.5,10.5,0c0,0,6.7,6,17.6,23.8l1.9,3.3\n                \tc0,0,10,16.8,11,16.7c0,0,0.8,0.8,1.5,0.2c1-0.3,0.6-5.7,0.6-5.7s-2.1-18.2-11.2-49.1c-0.8-2.4-1-5-0.5-7.5c0.9-3.6,4.6-1.9,4.6-1.9\n                \ts14.1,7.1,21,30.1S554.6,463.5,551.9,469.8 M703.8,456c-6.4,11.2-24.5,34.6-48.7,29.1c-8,19.3-14.7,38.8-18.5,68.1\n                \tc0,0-0.8,5.7-5.6,3.7c-4.7-1.6-12.4-9.4-13.9-20.2c-1.7-14.1,4.6-38,17.5-65.4c-3.8-6.1-6.3-14.8-4.1-27.2c0,0,3.2-23,26.4-43.8\n                \tc0,0,2.8-2.4,4.4-1.7c1.8,0.8,1,8.2-0.5,11.9S649.1,432,649.1,432s-6.4,12-4.6,21.5c12.1-18.6,39.7-56.3,56.8-44.4\n                \tc5.7,4.1,8.4,13,8.4,22.7C709.7,440.3,707.7,449.3,703.8,456 M698.9,426.5c0,0-1-7.4-8.2,0.8c-6.2,6.9-17.5,19.8-26.5,37.4\n                \tc9.5-1.1,18.7-6.2,21.4-8.8C690.1,451.7,700.6,440.9,698.9,426.5 M836.7,424.8h-44.2c-0.9-15-2.7-29.9-5.5-44.7\n                \tc-0.3-1.6-1.6-2.7-3.2-2.7h-10.2c-1.7,0-3,1.4-3,3c0,0.2,0,0.4,0.1,0.6c2.9,14.5,4.8,29.1,5.6,43.8h-42.5c-2,0-3.6,1.6-3.6,3.6v9.2\n                \tc0,2,1.6,3.6,3.6,3.6h43.1c0,2.3,0,4.3,0,6.2c0.1,12.2-0.6,24.4-1.9,36.5c-0.2,1.8,1.1,3.5,3,3.7c0.1,0,0.2,0,0.3,0h9.5\n                \tc1.8,0,3.4-1.4,3.6-3.2c1.3-12.3,1.9-24.6,1.9-36.9c0-1.9,0-3.9,0-6.2h43.6c2,0,3.6-1.6,3.6-3.6v-9.2\n                \tC840.3,426.4,838.7,424.8,836.7,424.8\"/>\n                <linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"805.0671\" y1=\"169.64\" x2=\"271.3658\" y2=\"97.4812\" gradientTransform=\"matrix(1 0 0 1 -14.88 122.67)\">\n                \t<stop  offset=\"0\" style=\"stop-color:#101C50\"/>\n                \t<stop  offset=\"0.24\" style=\"stop-color:#0D267A\"/>\n                \t<stop  offset=\"0.5\" style=\"stop-color:#085AA4\"/>\n                \t<stop  offset=\"0.65\" style=\"stop-color:#058BBF\"/>\n                \t<stop  offset=\"1\" style=\"stop-color:#B1FFFF\"/>\n                </linearGradient>\n                <path class=\"st1\" d=\"M245.8,301.7c-0.6,0.9-0.8,2.1-0.4,3.2c0.4,1.1,1.2,1.9,2.2,2.2l7.9,2.7c0.5,0.1,0.9,0.2,1.4,0.2\n                \tc1.5,0,2.9-0.8,3.7-2c53.7-79,143-126.3,238.5-126.3c115.9,0,220.5,69.4,265.6,176.1c0.7,1.5,2.2,2.5,3.8,2.5h9.5\n                \tc1.8,0,3.3-1.5,3.3-3.3c0-0.4-0.1-0.8-0.2-1.2c-63.3-155.7-241-230.6-396.7-167.3C328,211.4,279.7,250.9,245.8,301.7\"/>\n                </svg>\n\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT7, "</div>\n          </li>\n        "));
        _field7.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/tv",
            title: "Disney+ ".concat(_NEW_ITEM_TEXT7),
            component: "category_full",
            networks: 2739,
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field7);
        moveItemAfter(_NEW_ITEM_SELECTOR7, ITEM_TV_SELECTOR);
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
      Lampa.Settings.listener.follow("open", function (e) {
        console.log("TDDev", e);
        if (e.name === "addCategory") {
          var components = ["universal", "movie", "tv"];
          components.forEach(function (component) {
            if (Lampa.Settings.main().render().find('[data-component="' + component + '"]').length === 0) {
              Lampa.SettingsApi.addComponent({
                component: component
              });
            }
            Lampa.Settings.main().update();
            Lampa.Settings.main().render().find('[data-component="' + component + '"]').addClass("hide");
          });
        }
      });
      //Type
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "universal",
          type: "static",
          //доступно select,input,trigger,title,static
          "default": true
        },
        field: {
          name: "Universal",
          description: ""
        },
        onRender: function onRender(item) {
          item.on("hover:enter", function () {
            Lampa.Settings.create("universal");
            Lampa.Controller.enabled().controller.back = function () {
              Lampa.Settings.create("addCategory");
            };
          });
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "movie",
          type: "static",
          //доступно select,input,trigger,title,static
          "default": true
        },
        field: {
          name: "Movie",
          description: ""
        },
        onRender: function onRender(item) {
          item.on("hover:enter", function () {
            Lampa.Settings.create("movie");
            Lampa.Controller.enabled().controller.back = function () {
              Lampa.Settings.create("addCategory");
            };
          });
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "tv",
          type: "static",
          //доступно select,input,trigger,title,static
          "default": true
        },
        field: {
          name: "TV",
          description: ""
        },
        onRender: function onRender(item) {
          item.on("hover:enter", function () {
            Lampa.Settings.create("tv");
            Lampa.Controller.enabled().controller.back = function () {
              Lampa.Settings.create("addCategory");
            };
          });
        }
      });
      // Universal
      Lampa.SettingsApi.addParam({
        component: "universal",
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
        component: "universal",
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
        component: "universal",
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
      // Movie
      Lampa.SettingsApi.addParam({
        component: "movie",
        param: {
          name: "nc_movienetflix",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: "Netflix" + Lampa.Lang.translate('nc_topmovie'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_movienetflix');else $('body').find('.menu [data-action="nc_movienetflix"]').remove();
          Lampa.Settings.update();
        }
      });
      // TV
      Lampa.SettingsApi.addParam({
        component: "tv",
        param: {
          name: "nc_tvnetflix",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: "Netflix" + Lampa.Lang.translate('nc_toptv'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_tvnetflix');else $('body').find('.menu [data-action="nc_tvnetflix"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "tv",
        param: {
          name: "nc_appletv",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: "AppleTV+" + Lampa.Lang.translate('nc_toptv'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_appletv');else $('body').find('.menu [data-action="nc_appletv"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "tv",
        param: {
          name: "nc_paramountplus",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: "Paramount+" + Lampa.Lang.translate('nc_toptv'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_paramountplus');else $('body').find('.menu [data-action="nc_paramountplus"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "tv",
        param: {
          name: "nc_disneyplus",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: "Disney+" + Lampa.Lang.translate('nc_toptv'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catAdd('nc_disneyplus');else $('body').find('.menu [data-action="nc_disneyplus"]').remove();
          Lampa.Settings.update();
        }
      });
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
      //universal
      if (Lampa.Storage.get('nc_concert')) insert.catAdd('nc_concert');
      if (Lampa.Storage.get('nc_cartoon')) insert.catAdd('nc_cartoon');
      if (Lampa.Storage.get('nc_documentary')) insert.catAdd('nc_documentary');
      //movie
      if (Lampa.Storage.get('nc_movienetflix')) insert.catAdd('nc_movienetflix');
      //tv
      if (Lampa.Storage.get('nc_tvnetflix')) insert.catAdd('nc_tvnetflix');
      if (Lampa.Storage.get('nc_appletv')) insert.catAdd('nc_appletv');
      if (Lampa.Storage.get('nc_paramountplus')) insert.catAdd('nc_paramountplus');
      if (Lampa.Storage.get('nc_disneyplus')) insert.catAdd('nc_disneyplus');
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
