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
        ncInfo: {
          ru: "О плагине",
          en: "About plugin",
          uk: "Про розширення",
          zh: "关于插件" // Chinese translation
        },
        ncInfoGr: {
          ru: "Группа плагина",
          en: "Plugin group",
          uk: "Група плагіна",
          zh: "Plugin group" // Chinese translation
        },
        ncInfoDesc: {
          ru: "Плагин добавляет новые категории с контентом, сериалы добавляются двух категорий Топ и Новинки по стриминг сервисам. В некоторых категориях возможны дубликаты, так как сериал может выйти на нескольких стриминг сервисах.",
          en: "The plugin adds new categories with content, series are added to two categories, Top and New, based on streaming services. In some categories, duplicates are possible, since a series can be released on several streaming services.",
          uk: "Плагін додає нові категорії з контентом, серіали додаються до двох категорій, Топ і Новинки, на основі потокових сервісів. У деяких категоріях можливі дублікати, оскільки серіал може вийти на кількох потокових сервісах.",
          zh: "该插件添加了带有内容的新类别，根据流媒体服务将电视剧添加到两个类别（热门和新剧）中。在某些类别中可能存在重复项，因为电视剧可以在多个流媒体服务中发布。" // Chinese translation
        },
        nc_choice: {
          ru: "Выбрать раздел",
          en: "Choice category",
          uk: "Обрати розділ",
          zh: "选择类别" // Chinese translation
        },
        nc_subuniversal: {
          ru: "Общие",
          en: "General",
          uk: "Загальні",
          zh: "一般情况" // Chinese translation
        },
        nc_submovie: {
          ru: "Кино",
          en: "Movie",
          uk: "Кіно",
          zh: "Movie" // Chinese translation
        },
        nc_subtv: {
          ru: "TV Топ",
          en: "TV Тор",
          uk: "TV Топ",
          zh: "TV Тор" // Chinese translation
        },
        nc_newsubtv: {
          ru: "TV Новинки",
          en: "TV New",
          uk: "TV Новинки",
          zh: "TV New" // Chinese translation
        },
        nc_networksList: {
          ru: "TV Show стриминги",
          en: "TV Show Networks",
          uk: "TV Show Networks",
          zh: "TV Show Networks" // Chinese translation
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
        nc_documentary2: {
          ru: "Документалки 2",
          en: "Documentaries 2",
          uk: "Документальні 2",
          zh: "纪录片 2" // Chinese translation
        },
        nc_toptv: {
          ru: "Top",
          en: "Top",
          uk: "Top",
          zh: "Top" // Chinese translation
        },
        nc_newtv: {
          ru: "New",
          en: "New",
          uk: "New",
          zh: "New" // Chinese translation
        },
        nc_topmovie: {
          ru: " Top",
          en: " Top",
          uk: " Top",
          zh: " Top" // Chinese translation
        },
        nc_bookmarkAdded: {
          ru: "Вкладка успешно добавлена",
          en: "Tab successfully added",
          uk: "Вкладка успішно додана",
          zh: "成功添加选项卡" // Chinese translation
        },
        nc_bookmarkAdd: {
          "ru": "Добавить в избранное",
          "en": "Add to favorites",
          "uk": "Додати до обраного",
          "zh": "添加到收藏夹" // Chinese translation
        },
        nc_bookmarkDeleted: {
          ru: "Вкладка успешно удалена",
          en: "The tab has been successfully deleted",
          uk: "Вкладка успішно видалена",
          zh: "标签已成功删除" // Chinese translation
        },
        nc_bookmarkMigrate: {
          "ru": "Если вы видите это сообщение, значит мы удалили вкладки с сериалами стриминговых сервисов. Не беспокойтесь, в настройках вас ждет новый раздел с еще более интересными сервисами ;)",
          "en": "If you are seeing this message, then we have removed the tabs for streaming service series. Don't worry, in the settings you will find a new section with even more exciting services ;)",
          "uk": "Якщо ви бачите це повідомлення, це означає, що ми видалили вкладки з серіалами стрімінгових сервісів. Не хвилюйтеся, у налаштуваннях вас чекає новий розділ з ще цікавішими сервісами ;)",
          "zh": "如果您看到此消息，则我们已删除流媒体服务系列的选项卡。不用担心，在设置中您将找到一个新部分，其中包含更多令人兴奋的服务 ;)" // Chinese translation
        }
      });
    }
    var lang = {
      data: data
    };

    var NEW_ITEM_SOURCES = ["tmdb", "cub"];
    var ITEM_TV_SELECTOR = '[data-action="tv"]';
    var ITEM_MOVE_TIMEOUT = 2000;
    var moveItemAfter = function moveItemAfter(item, after) {
      return setTimeout(function () {
        return $(item).insertAfter($(after));
      }, ITEM_MOVE_TIMEOUT);
    };
    function catSubmenu(type) {
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
      if (type === 'nc_anime') {
        var _NEW_ITEM_ATTR = 'data-action="nc_anime"';
        var _NEW_ITEM_SELECTOR = "[".concat(_NEW_ITEM_ATTR, "]");
        var _NEW_ITEM_TEXT = 'TMDB Anime';
        var _field = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR, ">\n             <div class=\"menu__ico\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 58.125C45.533 58.125 58.125 45.533 58.125 30C58.125 14.467 45.533 1.875 30 1.875C14.467 1.875 1.875 14.467 1.875 30C1.875 45.533 14.467 58.125 30 58.125Z\" fill=\"#00ADFE\"/>\n                    <path opacity=\"0.3\" d=\"M30 52.5C42.4264 52.5 52.5 42.4264 52.5 30C52.5 17.5736 42.4264 7.5 30 7.5C17.5736 7.5 7.5 17.5736 7.5 30C7.5 42.4264 17.5736 52.5 30 52.5Z\" fill=\"#356CB6\"/>\n                    <path d=\"M30 58.125C37.2607 58.1329 44.2412 55.3232 49.4719 50.2875C49.0031 39.7734 47.625 24.2766 43.5422 15.0469C41.2781 9.92813 35.9719 6.50626 30 6.50626C24.0281 6.50626 18.4453 9.7875 16.4578 15.0469C12.9281 24.3422 11.4141 39.9984 10.7812 50.5125C15.9822 55.4082 22.8573 58.1314 30 58.125Z\" fill=\"#393C54\"/>\n                    <path d=\"M39.4359 16.9359C37.7859 12.9609 34.5234 10.9266 30.1828 10.8422H29.8172C25.4765 10.9453 22.214 12.9797 20.564 16.9359C18.8625 21.0188 18.3 27.1406 20.564 35.3063C22.7625 43.275 25.5047 44.9109 29.8172 44.9953H30.1828C34.4953 44.9109 37.214 43.2516 39.4359 35.3063C41.7187 27.1406 41.1375 21.0188 39.4359 16.9359Z\" fill=\"white\"/>\n                    <path d=\"M36.3656 24.7641H38.4328\" stroke=\"#393C54\" stroke-width=\"2.58281\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n                    <path d=\"M32.1094 41.25C30.7107 41.4562 29.2893 41.4562 27.8906 41.25C27.3047 41.0953 26.7188 40.725 26.7188 40.0781C26.7188 39.4313 27.2813 39.0797 27.8906 38.9063C29.2793 38.5922 30.7207 38.5922 32.1094 38.9063C32.6766 39.0516 33.2812 39.4313 33.2812 40.0781C33.2812 40.725 32.6859 41.1 32.1094 41.25Z\" fill=\"#393C54\"/>\n                    <path d=\"M38.461 27.239C37.5682 27.4476 36.6336 27.3872 35.775 27.0656\" stroke=\"#393C54\" stroke-width=\"1.03594\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n                    <path d=\"M35.3531 30.4688C35.3951 30.089 35.5756 29.7382 35.8602 29.4833C36.1447 29.2284 36.5133 29.0875 36.8953 29.0875C37.2773 29.0875 37.6459 29.2284 37.9305 29.4833C38.2151 29.7382 38.3956 30.089 38.4375 30.4688C38.4375 31.3266 36.886 37.1859 35.8547 37.1859C35.3531 37.1672 35.3531 31.3078 35.3531 30.4688Z\" fill=\"#A7AECE\"/>\n                    <path d=\"M35.3297 21.0938C35.3297 21.5059 35.4934 21.9011 35.7848 22.1925C36.0763 22.4839 36.4715 22.6477 36.8836 22.6477C37.2957 22.6477 37.691 22.4839 37.9824 22.1925C38.2738 21.9011 38.4375 21.5059 38.4375 21.0938C38.4375 20.2406 37.2235 16.4438 36.3703 16.4438C35.5172 16.4438 35.3297 20.2453 35.3297 21.0938Z\" fill=\"#A7AECE\"/>\n                    <path d=\"M21.5672 24.7641H23.6344\" stroke=\"#393C54\" stroke-width=\"2.58281\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n                    <path d=\"M24.225 27.075C23.3364 27.3987 22.3707 27.4461 21.4547 27.211\" stroke=\"#393C54\" stroke-width=\"1.03594\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n                    <path d=\"M24.6703 21.0938C24.6703 21.5059 24.5066 21.9011 24.2152 22.1925C23.9238 22.4839 23.5285 22.6477 23.1164 22.6477C22.7043 22.6477 22.309 22.4839 22.0176 22.1925C21.7262 21.9011 21.5625 21.5059 21.5625 21.0938C21.5625 20.2406 22.7766 16.4438 23.6297 16.4438C24.4828 16.4438 24.6703 20.2453 24.6703 21.0938Z\" fill=\"#A7AECE\"/>\n                    <path d=\"M24.6469 30.4688C24.6049 30.089 24.4244 29.7382 24.1398 29.4833C23.8553 29.2284 23.4867 29.0875 23.1047 29.0875C22.7227 29.0875 22.3541 29.2284 22.0695 29.4833C21.785 29.7382 21.6044 30.089 21.5625 30.4688C21.5625 31.3266 23.1141 37.1859 24.1453 37.1859C24.6469 37.1672 24.6469 31.3078 24.6469 30.4688Z\" fill=\"#A7AECE\"/>\n                    <path d=\"M32.0672 42.3375C32.0672 42.9094 31.1297 43.3734 30 43.3734C28.8703 43.3734 27.9328 42.9047 27.9328 42.3375C27.9328 42.0469 28.8703 42.2109 30 42.2109C31.1297 42.2109 32.0672 42.0469 32.0672 42.3375Z\" fill=\"#A7AECE\"/>\n                    <path opacity=\"0.2\" d=\"M39.4359 16.9359C38.9496 15.7276 38.2369 14.6234 37.3359 13.6828C38.0156 18.5203 37.6312 24.7641 36.6984 33.3047C35.7187 42.2578 31.3406 44.2266 26.8547 44.5547C27.8187 44.8521 28.8224 45.0007 29.8312 44.9953H30.1969C34.5094 44.9109 37.2281 43.2515 39.45 35.3062C41.7187 27.1406 41.1375 21.0187 39.4359 16.9359Z\" fill=\"#393C54\"/>\n                </svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT, "</div>\n          </li>\n        "));
        _field.on("hover:enter", function () {
          Lampa.Activity.push({
            url: "discover/movie",
            title: "New ".concat(_NEW_ITEM_TEXT),
            component: "category_full",
            keywords: "210024-anime",
            sort_by: 'primary_release_date.desc',
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field);
        moveItemAfter(_NEW_ITEM_SELECTOR, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_cartoon') {
        var _NEW_ITEM_ATTR2 = 'data-action="nc_cartoon"';
        var _NEW_ITEM_SELECTOR2 = "[".concat(_NEW_ITEM_ATTR2, "]");
        var _NEW_ITEM_TEXT2 = Lampa.Lang.translate('nc_cartoon');
        var _field2 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR2, ">\n             <div class=\"menu__ico\">\n                <svg height=\"173\" viewBox=\"0 0 180 173\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M126 3C126 18.464 109.435 31 89 31C68.5655 31 52 18.464 52 3C52 2.4505 52.0209 1.90466 52.0622 1.36298C21.3146 15.6761 0 46.8489 0 83C0 132.706 40.2944 173 90 173C139.706 173 180 132.706 180 83C180 46.0344 157.714 14.2739 125.845 0.421326C125.948 1.27051 126 2.13062 126 3ZM88.5 169C125.779 169 156 141.466 156 107.5C156 84.6425 142.314 64.6974 122 54.0966C116.6 51.2787 110.733 55.1047 104.529 59.1496C99.3914 62.4998 94.0231 66 88.5 66C82.9769 66 77.6086 62.4998 72.4707 59.1496C66.2673 55.1047 60.3995 51.2787 55 54.0966C34.6864 64.6974 21 84.6425 21 107.5C21 141.466 51.2208 169 88.5 169Z\" fill=\"currentColor\"></path><path d=\"M133 121.5C133 143.315 114.196 161 91 161C67.804 161 49 143.315 49 121.5C49 99.6848 67.804 116.5 91 116.5C114.196 116.5 133 99.6848 133 121.5Z\" fill=\"currentColor\"></path><path d=\"M72 81C72 89.8366 66.1797 97 59 97C51.8203 97 46 89.8366 46 81C46 72.1634 51.8203 65 59 65C66.1797 65 72 72.1634 72 81Z\" fill=\"currentColor\"></path><path d=\"M131 81C131 89.8366 125.18 97 118 97C110.82 97 105 89.8366 105 81C105 72.1634 110.82 65 118 65C125.18 65 131 72.1634 131 81Z\" fill=\"currentColor\"></path></svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT2, "</div>\n          </li>\n        "));
        _field2.on("hover:enter", function () {
          var _Lampa$Activity$activ = Lampa.Activity.active(),
            currentSource = _Lampa$Activity$activ.source;
          var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
          Lampa.Activity.push({
            url: "movie",
            title: "".concat(_NEW_ITEM_TEXT2, " - ").concat(source.toUpperCase()),
            component: "category",
            genres: 16,
            id: 16,
            source: source,
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field2);
        moveItemAfter(_NEW_ITEM_SELECTOR2, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_documentary') {
        var _NEW_ITEM_ATTR3 = 'data-action="nc_documentary"';
        var _NEW_ITEM_SELECTOR3 = "[".concat(_NEW_ITEM_ATTR3, "]");
        var _NEW_ITEM_TEXT3 = Lampa.Lang.translate('nc_documentary');
        var _field3 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR3, ">\n             <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT3, "</div>\n          </li>\n        "));
        _field3.on("hover:enter", function () {
          var _Lampa$Activity$activ2 = Lampa.Activity.active(),
            currentSource = _Lampa$Activity$activ2.source;
          var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
          Lampa.Activity.push({
            url: "movie",
            title: "".concat(_NEW_ITEM_TEXT3, " - ").concat(source.toUpperCase()),
            component: "category",
            genres: 99,
            id: 99,
            source: source,
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field3);
        moveItemAfter(_NEW_ITEM_SELECTOR3, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_documentary2') {
        var _NEW_ITEM_ATTR4 = 'data-action="nc_documentary2"';
        var _NEW_ITEM_SELECTOR4 = "[".concat(_NEW_ITEM_ATTR4, "]");
        var _NEW_ITEM_TEXT4 = Lampa.Lang.translate('nc_documentary2');
        var _field4 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR4, ">\n             <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT4, "</div>\n          </li>\n        "));
        _field4.on("hover:enter", function () {
          var _Lampa$Activity$activ3 = Lampa.Activity.active();
            _Lampa$Activity$activ3.source;
          Lampa.Activity.push({
            url: "discover/tv",
            title: "".concat(_NEW_ITEM_TEXT4),
            component: "category_full",
            networks: '2360|2382|3541|5433|65|1354|1755|3953|106|1079|3900|6903|64|2087|4353|6026|4462|2692|5470|5408|5431|4440|4741|4883|3045|4983|4987|5192|1302|4784|6966|100',
            sort_by: 'first_air_date.desc',
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field4);
        moveItemAfter(_NEW_ITEM_SELECTOR4, ITEM_TV_SELECTOR);
      }
      if (type === 'nc_networksList') {
        var _NEW_ITEM_ATTR5 = 'data-action="nc_networksList"';
        var _NEW_ITEM_SELECTOR5 = "[".concat(_NEW_ITEM_ATTR5, "]");
        var _NEW_ITEM_TEXT5 = Lampa.Lang.translate('nc_networksList');
        var _field5 = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(_NEW_ITEM_ATTR5, ">\n             <div class=\"menu__ico\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                </svg>\n             </div>\n             <div class=\"menu__text\">").concat(_NEW_ITEM_TEXT5, "</div>\n          </li>\n        "));
        _field5.on("hover:enter", function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_networksList'),
            component: 'lmeNetworks',
            page: 1
          });
        });
        Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(_field5);
        moveItemAfter(_NEW_ITEM_SELECTOR5, ITEM_TV_SELECTOR);
      }
      if (type === Lampa.Storage.get('nc_networkLists') && Lampa.Storage.get('nc_networkLists') !== []) {
        Lampa.Storage.get('nc_networkLists').forEach(function (item) {
          var NEW_ITEM_ATTR = "data-action=\"nc_".concat(item.id, "\"");
          var NEW_ITEM_SELECTOR = "[".concat(NEW_ITEM_ATTR, "]");
          var NEW_ITEM_TEXT = "".concat(item.card_data.name);
          var New = "";
          if (item.type === "new") New = 'first_air_date.desc';
          var field = $( /* html */"\n          <li class=\"menu__item selector\" ".concat(NEW_ITEM_ATTR, ">\n             <div class=\"menu__ico\">\n                <img class='networkLogo' src='").concat(Lampa.TMDB.image("t/p/w200/".concat(item.card_data.poster_path)), "' alt=\"img\">\n             </div>\n             <div class=\"menu__text\">").concat(NEW_ITEM_TEXT, "</div> <div class=\"nc_badge\">").concat(Lampa.Lang.translate(item.type === 'top' ? 'nc_toptv' : 'nc_newtv'), "</div></div>\n          </li>\n        "));
          field.on("hover:enter", function () {
            Lampa.Activity.push({
              url: 'discover/tv',
              title: "".concat(item.type.toUpperCase(), " ").concat(NEW_ITEM_TEXT),
              component: "category_full",
              networks: item.card_data.id,
              sort_by: New,
              source: 'tmdb',
              card_type: true,
              page: 1
            });
          });
          Lampa.Menu.render().find(ITEM_TV_SELECTOR).after(field);
          moveItemAfter(NEW_ITEM_SELECTOR, ITEM_TV_SELECTOR);
        });
      }
    }
    var insert = {
      catSubmenu: catSubmenu
    };

    function setting() {
      Lampa.SettingsApi.addComponent({
        component: "addCategory",
        name: Lampa.Lang.translate('nc_title'),
        icon: '<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M66.6667 215.921C66.6667 170.027 66.6667 147.08 74.056 128.94C84.215 104.002 104.002 84.215 128.94 74.056C147.08 66.6667 170.027 66.6667 215.921 66.6667C261.814 66.6667 284.761 66.6667 302.901 74.056C327.839 84.215 347.627 104.002 357.787 128.94C365.173 147.08 365.173 170.027 365.173 215.921C365.173 261.814 365.173 284.761 357.787 302.901C347.627 327.839 327.839 347.627 302.901 357.787C284.761 365.173 261.814 365.173 215.921 365.173C170.027 365.173 147.08 365.173 128.94 357.787C104.002 347.627 84.215 327.839 74.056 302.901C66.6667 284.761 66.6667 261.814 66.6667 215.921Z" fill="white"/>\n' + '<path d="M66.6667 584.08C66.6667 538.187 66.6667 515.24 74.056 497.1C84.215 472.163 104.002 452.373 128.94 442.217C147.08 434.827 170.027 434.827 215.921 434.827C261.814 434.827 284.761 434.827 302.901 442.217C327.839 452.373 347.627 472.163 357.787 497.1C365.173 515.24 365.173 538.187 365.173 584.08C365.173 629.973 365.173 652.92 357.787 671.06C347.627 696 327.839 715.787 302.901 725.943C284.761 733.333 261.814 733.333 215.921 733.333C170.027 733.333 147.08 733.333 128.94 725.943C104.002 715.787 84.215 696 74.056 671.06C66.6667 652.92 66.6667 629.973 66.6667 584.08Z" fill="white"/>\n' + '<path d="M434.83 584.08C434.83 538.187 434.83 515.24 442.22 497.1C452.38 472.163 472.167 452.373 497.103 442.217C515.243 434.827 538.19 434.827 584.083 434.827C629.98 434.827 652.927 434.827 671.063 442.217C696.003 452.373 715.79 472.163 725.95 497.1C733.34 515.24 733.34 538.187 733.34 584.08C733.34 629.973 733.34 652.92 725.95 671.06C715.79 696 696.003 715.787 671.063 725.943C652.927 733.333 629.98 733.333 584.083 733.333C538.19 733.333 515.243 733.333 497.103 725.943C472.167 715.787 452.38 696 442.22 671.06C434.83 652.92 434.83 629.973 434.83 584.08Z" fill="white"/>\n' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M559.083 315.922C559.083 329.729 570.273 340.923 584.083 340.923C597.89 340.923 609.083 329.729 609.083 315.922V240.922H684.083C697.89 240.922 709.083 229.729 709.083 215.922C709.083 202.115 697.89 190.922 684.083 190.922H609.083V115.922C609.083 102.115 597.89 90.922 584.083 90.922C570.273 90.922 559.083 102.115 559.083 115.922V190.922H484.083C470.273 190.922 459.083 202.115 459.083 215.922C459.083 229.729 470.273 240.922 484.083 240.922H559.083V315.922Z" fill="white"/>\n' + '</svg>'
      });
      //Info
      Lampa.Settings.listener.follow("open", function (e) {
        if (e.name === "addCategory") {
          if (Lampa.Settings.main().render().find('[data-component="ncInfo"]').length === 0) {
            Lampa.SettingsApi.addComponent({
              component: "ncInfo",
              name: Lampa.Lang.translate('ncInfo')
            });
          }
          Lampa.Settings.main().update();
          Lampa.Settings.main().render().find('[data-component="ncInfo"]').addClass("hide");
        }
      });
      //Info
      Lampa.SettingsApi.addParam({
        component: 'addCategory',
        param: {
          name: "ncInfo",
          type: 'static',
          "default": true
        },
        field: {
          name: Lampa.Lang.translate('ncInfo')
        },
        onRender: function onRender(item) {
          item.show();
          item.on("hover:enter", function () {
            Lampa.Settings.create("ncInfo");
            var enabledController = Lampa.Controller.enabled();
            enabledController.controller.back = function () {
              Lampa.Settings.create('ncInfo');
            };
          });
        }
      });
      Lampa.SettingsApi.addParam({
        component: 'ncInfo',
        param: {
          name: "group",
          type: "static"
        },
        field: {
          name: "<img src=\"https://cdn.glitch.global/d9956867-398e-4a85-9c42-31911adc9981/groupLTD.jpg?v=1702216657917\" alt=\"GroupLTD\" width=\"100%\" height=\"auto\">",
          description: Lampa.Lang.translate('ncInfoGr')
        }
      });
      Lampa.SettingsApi.addParam({
        component: 'ncInfo',
        param: {
          name: "group",
          type: "static"
        },
        field: {
          name: "<b>Info</b>",
          description: Lampa.Lang.translate('ncInfoDesc')
        }
      });
      //Stream Network
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_networksList",
          type: "trigger",
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_networksList'),
          description: ""
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catSubmenu('nc_networksList');else $('body').find('.menu [data-action="nc_networksList"]').remove();
          Lampa.Settings.update();
        }
      });
      // Menu 2.0
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_anime",
          type: "trigger",
          "default": false
        },
        field: {
          name: "New Anime movie",
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catSubmenu('nc_anime');else $('body').find('.menu [data-action="nc_anime"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_cartoon",
          type: "trigger",
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_cartoon'),
          description: "TMDB/CUB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catSubmenu('nc_cartoon');else $('body').find('.menu [data-action="nc_cartoon"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_documentary",
          type: "trigger",
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_documentary'),
          description: "TMDB/CUB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catSubmenu('nc_documentary');else $('body').find('.menu [data-action="nc_documentary"]').remove();
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: "addCategory",
        param: {
          name: "nc_documentary2",
          type: "trigger",
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('nc_documentary2'),
          description: "TMDB"
        },
        onChange: function onChange(value) {
          if (value === 'true') insert.catSubmenu('nc_documentary2');else $('body').find('.menu [data-action="nc_documentary2"]').remove();
          Lampa.Settings.update();
        }
      });
      //End Universal
    }
    var config = {
      setting: setting
    };

    var network = new Lampa.Reguest();
    var api_url = 'https://cloud.appwrite.io/v1/databases/65fd540d95317ea2a89f/collections/65fd541c268c09686a0e/documents?queries[]=limit(36)';
    var auth = {
      headers: {
        "X-Appwrite-Project": "65fd523956f5ca97eaff"
      }
    };
    function main$1(params, oncomplite, onerror) {
      var apiUrl = api_url;
      if (params.searchQuery && params.searchQuery !== "") {
        apiUrl += "&queries[]=search(\"name\", \"".concat(params.searchQuery, "\")");
      } else {
        apiUrl += "&queries[]=orderDesc(\"rating\")";
      }
      network.silent(encodeURI(apiUrl), function (data) {
        data.collection = true;
        data.total_pages = data.total / 36;
        data.documents.forEach(function (element) {
          element.poster_path = element.logo_path;
          element.name = "".concat(element.name, " ").concat(element.origin_country);
        });
        oncomplite(data);
      }, onerror, false, auth);
    }
    function full(params, oncomplite, onerror) {
      network.silent(encodeURI(api_url + "&queries[]=offset(".concat(params.page * 36, ")")), function (data) {
        data.collection = true;
        data.total_pages = data.total / 36;
        data.documents.forEach(function (element) {
          element.poster_path = element.logo_path;
          element.name = "".concat(element.name, " ").concat(element.origin_country);
        });
        oncomplite(data);
      }, onerror, false, auth);
    }
    function clear() {
      network.clear();
    }
    var Api = {
      main: main$1,
      full: full,
      clear: clear
    };

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
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    var Favorites = /*#__PURE__*/function () {
      function Favorites() {
        _classCallCheck(this, Favorites);
      }
      _createClass(Favorites, null, [{
        key: "get",
        value: function get() {
          return Lampa.Storage.get('nc_networkLists', '[]');
        }
      }, {
        key: "find",
        value: function find(favorite) {
          return this.get().find(function (a) {
            return a.id === favorite.id;
          });
        }
      }, {
        key: "remove",
        value: function remove(favorite) {
          var list = this.get();
          var find = this.find(favorite);
          if (find) {
            Lampa.Arrays.remove(list, find);
            Lampa.Storage.set('nc_networkLists', list);
            Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleted') + ' ' + find.card_data.name);
          }
        }
      }, {
        key: "add",
        value: function add(favorite) {
          var list = this.get();
          var find = this.find(favorite);
          if (!find) {
            Lampa.Arrays.extend(favorite, {
              id: Lampa.Utils.uid(),
              added: Date.now()
            });
            list.push(favorite);
            Lampa.Storage.set('nc_networkLists', list);
            Lampa.Noty.show("Add need reboot");
          }
        }
      }, {
        key: "update",
        value: function update(favorite) {
          var list = this.get();
          var find = this.find(favorite);
          if (find) {
            Lampa.Storage.set('nc_networkLists', list);
          }
        }
      }, {
        key: "toggle",
        value: function toggle(favorite) {
          return this.find(favorite) ? this.remove(favorite) : this.add(favorite);
        }
      }]);
      return Favorites;
    }();

    function component(object) {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250,
        end_ratio: 2
      });
      var items = [];
      var html = document.createElement('div');
      var header = document.createElement('div');
      var body = document.createElement('div');
      var total_pages = 0;
      var last;
      var waitload;
      var active = 0;
      this.create = function () {
        Api.main(object, this.build.bind(this), this.empty.bind(this));
      };
      this.empty = function () {
        var button = document.createElement('div');
        button.className = 'empty simple-button simple-button--invisible selector button--clear';
        button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        button.on('hover:enter', function () {
          object.searchQuery = "";
          Lampa.Activity.replace(object);
        });

        //let button = '<div>foobar</div>'

        var empty = new Lampa.Empty();
        if (button) empty.append(button);
        html.appendChild(empty.render(true));
        this.start = empty.start;
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.next = function () {
        var _this = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          this.nextPageReuest(object, function (result) {
            _this.append(result, true);
            waitload = false;
            _this.limit();
          }, function () {
            waitload = false;
          });
        }
      };
      this.nextPageReuest = function (object, resolve, reject) {
        Api.full(object, resolve.bind(this), reject.bind(this));
      };
      this.append = function (data, append) {
        var _this2 = this;
        data.documents.forEach(function (element) {
          var card = new Lampa.Card(element, {
            object: object,
            card_category: typeof card_category == 'undefined' ? true : data.category,
            card_wide: data.wide,
            card_small: data.small,
            card_collection: data.collection
          });
          card.create();
          card.onFocus = function (target, card_data) {
            last = target;
            active = items.indexOf(card);
            scroll.update(card.render(true));
          };
          card.onTouch = function (target, card_data) {
            last = target;
            active = items.indexOf(card);
          };
          card.onMenu = function (target, card_data) {
            var enabled = Lampa.Controller.enabled().name;
            var menu = [];
            menu.push({
              title: Lampa.Lang.translate('nc_bookmarkAdd') + ' New',
              card_data: card_data,
              type: 'new'
            });
            menu.push({
              title: Lampa.Lang.translate('nc_bookmarkAdd') + ' Top',
              card_data: card_data,
              type: 'top'
            });
            //TODO: Исправить костыль
            menu.push({
              title: '-----------------'
            });
            menu.push({
              title: 'Favorites',
              favorites: true
            });
            menu.push({
              title: 'Search',
              search: true
            });
            menu.push({
              title: 'Reset',
              reset: true
            });
            Lampa.Select.show({
              title: Lampa.Lang.translate('title_action') + ' ' + card_data.name,
              items: menu,
              onBack: function onBack() {
                Lampa.Controller.toggle(enabled);
              },
              onSelect: function onSelect(a) {
                if (a.type) {
                  Favorites.add(a);
                }
                if (a.favorites) {
                  var itemsFavs = [];
                  Favorites.get().forEach(function (item) {
                    itemsFavs.push({
                      title: item.type + ' ' + item.card_data.name,
                      id: item.id
                    });
                  });
                  Lampa.Select.show({
                    title: Lampa.Lang.translate('nc_networksList'),
                    items: itemsFavs,
                    onSelect: function onSelect(a) {
                      Favorites.remove(a);
                    },
                    onBack: function onBack() {
                      Lampa.Controller.toggle('content');
                    }
                  });
                }
                if (a.search) {
                  Lampa.Input.edit({
                    free: true,
                    nosave: true,
                    nomic: true,
                    value: ''
                  }, function (val) {
                    if (val) {
                      //this.clearButtons(false, val)
                      object.searchQuery = val;
                      Lampa.Activity.replace(object);
                    } else {
                      Lampa.Controller.toggle('content');
                    }
                  });
                }
                if (a.reset) {
                  object.searchQuery = "";
                  Lampa.Activity.replace(object);
                }
              }
            });
          };
          card.onEnter = function (target, card_data) {
            last = target;
            Lampa.Select.show({
              title: Lampa.Lang.translate('title_action'),
              items: [{
                title: "New",
                type: 'first_air_date.desc',
                card_data: card_data
              }, {
                title: "Top",
                type: '',
                card_data: card_data
              }],
              onSelect: function onSelect(a) {
                Lampa.Activity.push({
                  url: 'discover/tv',
                  title: a.title + " " + a.card_data.title,
                  component: "category_full",
                  networks: a.card_data.id,
                  sort_by: a.type,
                  source: 'tmdb',
                  card_type: true,
                  page: 1
                });
              }
            });
          };
          body.appendChild(card.render(true));
          items.push(card);
          if (_this2.cardRender) _this2.cardRender(object, element, card);
          if (append) Lampa.Controller.collectionAppend(card.render(true));
        });
      };
      this.limit = function () {
        var limit_view = 12;
        var lilit_collection = 36;
        var colection = items.slice(Math.max(0, active - limit_view), active + limit_view);
        items.forEach(function (item) {
          if (colection.indexOf(item) === -1) {
            item.render(true).classList.remove('layer--render');
          } else {
            item.render(true).classList.add('layer--render');
          }
        });
        Navigator.setCollection(items.slice(Math.max(0, active - lilit_collection), active + lilit_collection).map(function (c) {
          return c.render(true);
        }));
        Navigator.focused(last);
        Lampa.Layer.visible(scroll.render(true));
      };
      this.build = function (data) {
        var _this3 = this;
        header.className = 'lme-catalog lme-header';
        var favorites = document.createElement('div');
        favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        favorites.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n                        <path fill=\"currentColor\" d=\"M478.354,146.286H33.646c-12.12,0-21.943,9.823-21.943,21.943v321.829c0,12.12,9.823,21.943,21.943,21.943h444.709\n                            c12.12,0,21.943-9.823,21.943-21.943V168.229C500.297,156.109,490.474,146.286,478.354,146.286z M456.411,468.114H55.589V190.171\n                            h400.823V468.114z\"/>\n                        <path fill=\"currentColor\" d=\"M441.783,73.143H70.217c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h371.566\n                            c12.12,0,21.943-9.823,21.943-21.943C463.726,82.966,453.903,73.143,441.783,73.143z\"/>\n                        <path fill=\"currentColor\" d=\"M405.211,0H106.789c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h298.423\n                            c12.12,0,21.943-9.823,21.943-21.943C427.154,9.823,417.331,0,405.211,0z\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
        favorites.on('hover:enter', function () {
          var itemsFavs = [];
          Favorites.get().forEach(function (item) {
            itemsFavs.push({
              title: item.type + ' ' + item.card_data.name,
              id: item.id
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsFavs,
            onSelect: function onSelect(a) {
              Favorites.remove(a);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        var baseInfo = document.createElement('div');
        baseInfo.className = 'lme-baseInfo';
        baseInfo.innerHTML = "TV Shows networks in TMDB Base: ".concat(data.total);
        var search = document.createElement('div');
        search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
        search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div>Search</div>\n        ";
        var clear = document.createElement('div');
        clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        clear.on('hover:enter', function () {
          object.searchQuery = "";
          Lampa.Activity.replace(object);
        });
        header.appendChild(search);
        header.appendChild(clear);
        header.appendChild(favorites);
        header.appendChild(baseInfo);
        if (data.documents.length) {
          total_pages = data.total_pages;
          body.classList.add('lme-catalog', 'category-full');
          scroll.minus();
          scroll.onEnd = this.next.bind(this);
          scroll.onScroll = this.limit.bind(this);
          scroll.onWheel = function (step) {
            if (!Lampa.Controller.own(_this3)) _this3.start();
            if (step > 0) Navigator.move('down');else Navigator.move('up');
          };
          this.append(data);
          scroll.append(body);
          html.addClass('lmeCatalog');
          html.appendChild(header);
          html.appendChild(scroll.render(true));
          this.buildSearch();
          this.limit();
          this.activity.loader(false);
          this.activity.toggle();
        } else {
          this.empty();
        }
      };
      this.buildSearch = function () {
        var btn = html.find('.button--search');
        btn.on('hover:enter', function () {
          Lampa.Input.edit({
            free: true,
            nosave: true,
            nomic: true,
            value: ''
          }, function (val) {
            if (val) {
              //this.clearButtons(false, val)
              object.searchQuery = val;
              Lampa.Activity.replace(object);
            } else {
              Lampa.Controller.toggle('content');
            }
          });
        });
      };
      this.start = function () {
        var _this4 = this;
        Lampa.Controller.add('content', {
          link: this,
          toggle: function toggle() {
            if (_this4.activity.canRefresh()) return false;
            Lampa.Controller.collectionSet(header, scroll.render(true));
            Lampa.Controller.collectionFocus(last || false, header, scroll.render(true));
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            if (_this4.onRight) {
              if (Navigator.canmove('right')) Navigator.move('right');else _this4.onRight();
            } else Navigator.move('right');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            if (Navigator.canmove('down')) Navigator.move('down');
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        });
        Lampa.Controller.toggle('content');
      };
      this.refresh = function () {
        this.activity.needRefresh();
      };
      this.pause = function () {};
      this.stop = function () {};
      this.render = function (js) {
        return js ? html : $(html);
      };
      this.clearButtons = function (category, search) {
        var btn_search = html.find('.button--search');
        btn_search.find('div').addClass('hide').text('');
        btn_search.find('div').removeClass('hide').text(search);
      };
      this.destroy = function () {
        network.clear();
        Lampa.Arrays.destroy(items);
        scroll.destroy();
        html.remove();
        body.remove();
        items = [];
      };
    }

    var manifest = {
      type: "other",
      version: "3.0",
      name: "New category",
      description: "Add new category to mein menu",
      component: "nc"
    };
    var main = function main() {
      Lampa.Manifest.plugins = manifest;
      Lampa.Component.add('lmeNetworks', component);
      Lampa.Template.add('ncStyle', "\n        <style>\n            @charset 'UTF-8';div.ncSubmenu{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.ncSubmenu>svg.ncIcon{margin-right:5px;width:36px;height:36px}div.nc_bookmark{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}div.nc_menu{position:relative}div.nc_badge{left:100%;top:0;margin-left:.5em;margin-top:-1em;background-color:#fff;color:#000;padding:.2em .4em;font-size:.5em;-webkit-border-radius:.5em;border-radius:.5em;font-weight:700;text-transform:uppercase}.lme-catalog.lme-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.lme-baseInfo{padding:0 0 0 2%}.empty.simple-button.simple-button--invisible.selector.button--clear{margin:auto}.lme-baseInfo,.lme-favorites,.lme-search,.lme-clear,.lme-filter{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding-left:1.5em;padding-right:1.5em;margin-left:.5em;margin-right:.5em}.lme-clear div,.lme-filter div{margin-left:1em}.lme-catalog.category-full .card__img{-o-object-fit:contain;object-fit:contain;padding:5%}.networkLogo{-o-object-fit:contain;object-fit:contain;padding:2%}\n        </style>\n    ");
      lang.data();
      config.setting();
      // Menu 2.0
      var submenuCatalogkeys = Object.keys(localStorage).filter(function (key) {
        return key.startsWith('nc_');
      });
      function addsubmenu(category) {
        switch (category) {
          case 'nc_anime':
          //case 'nc_concert':
          case 'nc_cartoon':
          case 'nc_documentary':
          case 'nc_networksList':
          case 'nc_documentary2':
            // Вызываем функцию insert.catSubmenu(category)
            if (Lampa.Storage.get(category) === true) {
              insert.catSubmenu(category);
            }
            break;
          case 'nc_networkLists':
            if (Array.isArray(Lampa.Storage.get('nc_networkLists')) && Lampa.Storage.get('nc_networkLists').length > 0) {
              insert.catSubmenu(Lampa.Storage.get('nc_networkLists'));
            }
            break;
          default:
            // Вызываем функцию bookmarks(info)
            if (Lampa.Storage.get(category).available === true || Lampa.Storage.get('nc_concert') === true) {
              if (Lampa.Storage.get(category)) {
                localStorage.removeItem(category);
                Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkMigrate'));
              } else {
                console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441 \u043A\u043B\u044E\u0447\u043E\u043C ".concat(Lampa.Storage.get(category), " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 localStorage."));
              }
            }
        }
      }

      // Menu 2.0
      submenuCatalogkeys.forEach(addsubmenu);
      $('body').append(Lampa.Template.get('ncStyle', {}, true));
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
