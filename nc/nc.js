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
        nc_country: {
          ru: "Страна",
          en: "Country",
          uk: "Країна",
          zh: "国家" // Chinese translation
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
        nc_networksListGeoAdd: {
          ru: "Страна успешно выбрана",
          en: "The country has been successfully selected",
          uk: "Країну успішно обрано",
          zh: "该国已成功入选" // Chinese translation
        },
        nc_networksListGeoDeleted: {
          ru: "Страна успешно удалена",
          en: "Country successfully deleted",
          uk: "Країну успішно видалено",
          zh: "该国家已被成功删除" // Chinese translation
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
        nc_openAction: {
          "ru": "Открыть",
          "en": "Open",
          "uk": "Відкрити",
          "zh": "开放" // Chinese translation
        },
        nc_networkstat: {
          "ru": "Найдено записей",
          "en": "Records found",
          "uk": "Знайдено записів",
          "zh": "已找到记录" // Chinese translation
        },
        nc_bookmarksstat: {
          "ru": "Найдено записей",
          "en": "Records found",
          "uk": "Знайдено записів",
          "zh": "已找到记录" // Chinese translation
        },
        nc_favoriteAdded: {
          ru: "Вкладка успешно добавлена",
          en: "Tab successfully added",
          uk: "Вкладка успішно додана",
          zh: "成功添加选项卡" // Chinese translation
        },
        nc_favoriteAdd: {
          "ru": "Добавить в Меню - ",
          "en": "Add to Menu - ",
          "uk": "Додати до Меню - ",
          "zh": "添加到收藏夹 - " // Chinese translation
        },
        nc_favoriteDeleted: {
          ru: "Вкладка успешно удалена",
          en: "The tab has been successfully deleted",
          uk: "Вкладка успішно видалена",
          zh: "标签已成功删除" // Chinese translation
        },
        nc_favoriteMigrateAlert: {
          "ru": "Система Избранного была обновлена, удалите все текущие избранные сервисы и добавьте заново!",
          "en": "The Favorites system has been updated, please remove all current favorite services and add them again!",
          "uk": "Система Favorites була оновлена, видаліть усі поточні вибрані сервіси та додайте їх знову!",
          "zh": "收藏系统已更新，请删除所有当前的收藏服务并重新添加！"
        },
        nc_favoriteMigrate: {
          "ru": "Если вы видите это сообщение, значит мы удалили вкладки с сериалами стриминговых сервисов. Не беспокойтесь, в настройках вас ждет новый раздел с еще более интересными сервисами ;)",
          "en": "If you are seeing this message, then we have removed the tabs for streaming service series. Don't worry, in the settings you will find a new section with even more exciting services ;)",
          "uk": "Якщо ви бачите це повідомлення, це означає, що ми видалили вкладки з серіалами стрімінгових сервісів. Не хвилюйтеся, у налаштуваннях вас чекає новий розділ з ще цікавішими сервісами ;)",
          "zh": "如果您看到此消息，则我们已删除流媒体服务系列的选项卡。不用担心，在设置中您将找到一个新部分，其中包含更多令人兴奋的服务 ;)" // Chinese translation
        },
        nc_bookmark: {
          ru: "Закладки",
          en: "Bookmarks",
          uk: "Закладки",
          zh: "书签" // Chinese translation
        },
        nc_bookmarkAdd: {
          ru: "Добавить закладку",
          en: "Add Bookmark",
          uk: "Додати закладку",
          zh: "添加书签" // Chinese translation
        },
        nc_bookmarkDuplicate: {
          ru: "Закладка уже существует",
          en: "A bookmark already exists",
          uk: "Закладка вже існує",
          zh: "书签已经存在" // Chinese translation
        },
        nc_bookmarkAdded: {
          ru: "Закладка успешно добавлена",
          en: "Bookmark successfully added",
          uk: "Закладка успішно додана",
          zh: "成功添加书签" // Chinese translation
        },
        nc_bookmarkDelete: {
          ru: "Удалить закладку",
          en: "Delete Bookmark",
          uk: "Видалити закладку",
          zh: "删除书签" // Chinese translation
        },
        nc_bookmarkDeleted: {
          ru: "Закладка удалена",
          en: "Bookmark removed",
          uk: "Закладка видалена",
          zh: "已删除书签" // Chinese translation
        },
        nc_bookmarkDeleteError: {
          ru: "Ошибка удаления",
          en: "Deletion error",
          uk: "Помилка видалення",
          zh: "删除错误" // Chinese translation
        },
        //Collections
        lmeCollections: {
          ru: "LME Collections",
          en: "LME Collections",
          uk: "LME Collections",
          zh: "LME Collections" // Chinese translation
        }
      });
    }
    var lang = {
      data: data
    };

    var NEW_ITEM_SOURCES = ["tmdb", "cub"];
    var Episode = function Episode(data) {
      var card = data.card || data;
      var episode = data.next_episode_to_air || data.episode || {};
      if (card.source == undefined) card.source = 'tmdb';
      Lampa.Arrays.extend(card, {
        title: card.name,
        original_title: card.original_name,
        release_date: card.first_air_date
      });
      card.release_year = ((card.release_date || '0000') + '').slice(0, 4);
      function remove(elem) {
        if (elem) elem.remove();
      }
      this.build = function () {
        this.card = Lampa.Template.js('card_episode');
        this.img_poster = this.card.querySelector('.card__img') || {};
        this.img_episode = this.card.querySelector('.full-episode__img img') || {};
        this.card.querySelector('.card__title').innerText = card.title;
        this.card.querySelector('.full-episode__num').innerText = card.unwatched || '';
        if (episode && episode.air_date) {
          this.card.querySelector('.full-episode__name').innerText = 's' + (episode.season_number || '?') + 'e' + (episode.episode_number || '?') + '. ' + (episode.name || Lampa.Lang.translate('noname'));
          this.card.querySelector('.full-episode__date').innerText = episode.air_date ? Lampa.Utils.parseTime(episode.air_date).full : '----';
        }
        if (card.release_year == '0000') {
          remove(this.card.querySelector('.card__age'));
        } else {
          this.card.querySelector('.card__age').innerText = card.release_year;
        }
        this.card.addEventListener('visible', this.visible.bind(this));
      };
      this.image = function () {
        var _this = this;
        this.img_poster.onload = function () {};
        this.img_poster.onerror = function () {
          _this.img_poster.src = './img/img_broken.svg';
        };
        this.img_episode.onload = function () {
          _this.card.querySelector('.full-episode__img').classList.add('full-episode__img--loaded');
        };
        this.img_episode.onerror = function () {
          _this.img_episode.src = './img/img_broken.svg';
        };
      };
      this.create = function () {
        var _this2 = this;
        this.build();
        this.card.addEventListener('hover:focus', function () {
          if (_this2.onFocus) _this2.onFocus(_this2.card, card);
        });
        this.card.addEventListener('hover:hover', function () {
          if (_this2.onHover) _this2.onHover(_this2.card, card);
        });
        this.card.addEventListener('hover:enter', function () {
          if (_this2.onEnter) _this2.onEnter(_this2.card, card);
        });
        this.image();
      };
      this.visible = function () {
        if (card.poster_path) this.img_poster.src = Lampa.Api.img(card.poster_path);else if (card.profile_path) this.img_poster.src = Lampa.Api.img(card.profile_path);else if (card.poster) this.img_poster.src = card.poster;else if (card.img) this.img_poster.src = card.img;else this.img_poster.src = './img/img_broken.svg';
        if (card.still_path) this.img_episode.src = Lampa.Api.img(episode.still_path, 'w300');else if (card.backdrop_path) this.img_episode.src = Lampa.Api.img(card.backdrop_path, 'w300');else if (episode.img) this.img_episode.src = episode.img;else if (card.img) this.img_episode.src = card.img;else this.img_episode.src = './img/img_broken.svg';
        if (this.onVisible) this.onVisible(this.card, card);
      };
      this.destroy = function () {
        this.img_poster.onerror = function () {};
        this.img_poster.onload = function () {};
        this.img_episode.onerror = function () {};
        this.img_episode.onload = function () {};
        this.img_poster.src = '';
        this.img_episode.src = '';
        remove(this.card);
        this.card = null;
        this.img_poster = null;
        this.img_episode = null;
      };
      this.render = function (js) {
        return js ? this.card : $(this.card);
      };
    };
    var SourceTMDB = function SourceTMDB(parrent) {
      this.network = new Lampa.Reguest();
      this.discovery = false;
      this.main = function () {
        var owner = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
        var onerror = arguments.length > 2 ? arguments[2] : undefined;
        var parts_limit = 6;
        console.log('LMENetworks', parts_limit);
        var parts_data = [function (call) {
          owner.get('movie/now_playing', params, function (json) {
            json.title = Lampa.Lang.translate('title_now_watch');
            call(json);
          }, call);
        }, function (call) {
          call({
            source: 'tmdb',
            results: Lampa.TimeTable.lately().slice(0, 20),
            title: Lampa.Lang.translate('title_upcoming_episodes'),
            nomore: true,
            cardClass: function cardClass(_elem, _params) {
              return new Episode(_elem);
            }
          });
        }, function (call) {
          owner.get('trending/all/day', params, function (json) {
            json.title = Lampa.Lang.translate('title_trend_day');
            call(json);
          }, call);
        }, function (call) {
          owner.get('trending/all/week', params, function (json) {
            json.title = Lampa.Lang.translate('title_trend_week');
            call(json);
          }, call);
        }];

        //Integrate LME_Networks
        function addNetworkFunctions() {
          var networkLists = Lampa.Storage.get('nc_networkLists');
          networkLists.forEach(function (networkOne) {
            var withNetworks = networkOne.card_data.$id;
            var sortBy = networkOne.type === 'new' ? 'first_air_date.desc' : undefined;
            var params = {};
            if (sortBy) {
              params.sort_by = sortBy;
            }

            // Додаємо анонімну функцію до parts_data
            parts_data.splice(1, 0, function (call) {
              owner.get("discover/tv?with_networks=".concat(withNetworks), params, function (json) {
                json.title = "".concat(networkOne.type.toUpperCase(), " ").concat(networkOne.card_data.name);
                call(json);
                parts_limit++; // Збільшуємо parts_limit
              }, call);
            });
          });
        }

        // Виклик функції для додавання мереж
        addNetworkFunctions();
        //END Integrate LME_Networks

        Lampa.Arrays.insert(parts_data, 0, Lampa.Api.partPersons(parts_data, parts_data.length - 1, 'movie'));
        parrent.genres.movie.forEach(function (genre) {
          var event = function event(call) {
            owner.get('discover/movie?with_genres=' + genre.id, params, function (json) {
              json.title = Lampa.Lang.translate(genre.title.replace(/[^a-z_]/g, ''));
              call(json);
            }, call);
          };
          parts_data.push(event);
        });
        function loadPart(partLoaded, partEmpty) {
          Lampa.Api.partNext(parts_data, parts_limit, partLoaded, partEmpty);
        }
        loadPart(oncomplite, onerror);
        return loadPart;
      };
    };
    function catSubmenu(type) {
      if (type === 'nc_cartoon') {
        var NEW_ITEM_TEXT = Lampa.Lang.translate('nc_cartoon');
        var NEW_ITEM_SVG = "<svg height=\"173\" viewBox=\"0 0 180 173\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M126 3C126 18.464 109.435 31 89 31C68.5655 31 52 18.464 52 3C52 2.4505 52.0209 1.90466 52.0622 1.36298C21.3146 15.6761 0 46.8489 0 83C0 132.706 40.2944 173 90 173C139.706 173 180 132.706 180 83C180 46.0344 157.714 14.2739 125.845 0.421326C125.948 1.27051 126 2.13062 126 3ZM88.5 169C125.779 169 156 141.466 156 107.5C156 84.6425 142.314 64.6974 122 54.0966C116.6 51.2787 110.733 55.1047 104.529 59.1496C99.3914 62.4998 94.0231 66 88.5 66C82.9769 66 77.6086 62.4998 72.4707 59.1496C66.2673 55.1047 60.3995 51.2787 55 54.0966C34.6864 64.6974 21 84.6425 21 107.5C21 141.466 51.2208 169 88.5 169Z\" fill=\"currentColor\"></path><path d=\"M133 121.5C133 143.315 114.196 161 91 161C67.804 161 49 143.315 49 121.5C49 99.6848 67.804 116.5 91 116.5C114.196 116.5 133 99.6848 133 121.5Z\" fill=\"currentColor\"></path><path d=\"M72 81C72 89.8366 66.1797 97 59 97C51.8203 97 46 89.8366 46 81C46 72.1634 51.8203 65 59 65C66.1797 65 72 72.1634 72 81Z\" fill=\"currentColor\"></path><path d=\"M131 81C131 89.8366 125.18 97 118 97C110.82 97 105 89.8366 105 81C105 72.1634 110.82 65 118 65C125.18 65 131 72.1634 131 81Z\" fill=\"currentColor\"></path></svg>";
        Lampa.Menu.addButton(NEW_ITEM_SVG, NEW_ITEM_TEXT, function () {
          var _Lampa$Activity$activ = Lampa.Activity.active(),
            currentSource = _Lampa$Activity$activ.source;
          var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
          Lampa.Activity.push({
            url: "movie",
            title: "".concat(NEW_ITEM_TEXT, " - ").concat(source.toUpperCase()),
            component: "category",
            genres: 16,
            id: 16,
            source: source,
            card_type: true,
            page: 1
          });
        });
      }
      if (type === 'nc_documentary') {
        var _NEW_ITEM_TEXT = Lampa.Lang.translate('nc_documentary');
        var _NEW_ITEM_SVG = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>";
        Lampa.Menu.addButton(_NEW_ITEM_SVG, _NEW_ITEM_TEXT, function () {
          var _Lampa$Activity$activ2 = Lampa.Activity.active(),
            currentSource = _Lampa$Activity$activ2.source;
          var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
          Lampa.Activity.push({
            url: "movie",
            title: "".concat(_NEW_ITEM_TEXT, " - ").concat(source.toUpperCase()),
            component: "category",
            genres: 99,
            id: 99,
            source: source,
            card_type: true,
            page: 1
          });
        });
      }
      if (type === 'nc_documentary2') {
        var _NEW_ITEM_TEXT2 = Lampa.Lang.translate('nc_documentary2');
        var _NEW_ITEM_SVG2 = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>";
        Lampa.Menu.addButton(_NEW_ITEM_SVG2, _NEW_ITEM_TEXT2, function () {
          Lampa.Activity.push({
            url: "discover/tv",
            title: "".concat(_NEW_ITEM_TEXT2),
            component: "category_full",
            networks: '2360|2382|3541|5433|65|1354|1755|3953|106|1079|3900|6903|64|2087|4353|6026|4462|2692|5470|5408|5431|4440|4741|4883|3045|4983|4987|5192|1302|4784|6966|100',
            sort_by: 'first_air_date.desc',
            source: 'tmdb',
            card_type: true,
            page: 1
          });
        });
      }
      if (type === 'nc_networksList') {
        var _NEW_ITEM_TEXT3 = Lampa.Lang.translate('nc_networksList');
        var _NEW_ITEM_SVG3 = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                </svg>";
        Lampa.Menu.addButton(_NEW_ITEM_SVG3, _NEW_ITEM_TEXT3, function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_networksList'),
            component: Lampa.Storage.get("nc_networksListHome") || 'lmeNetworks',
            page: 1
          });
        });

        // Insert Home block's - SourceTMDB integration
        console.log('LMENetworks', 'Try inject');
        if (Lampa.Storage.get('nc_networkLists') !== []) {
          var lme_networks = Object.assign({}, Lampa.Api.sources.tmdb, new SourceTMDB(Lampa.Api.sources.tmdb));
          Lampa.Api.sources.lme_networks = lme_networks;
          Object.defineProperty(Lampa.Api.sources, 'TMDBs', {
            get: function get() {
              return lme_networks;
            }
          });
          Lampa.Params.select('source', Object.assign({}, Lampa.Params.values['source'], {
            'TMDBs': 'TMDB + Streaming'
          }), 'tmdb');
        }
      }
      //nc_lmeCollection
      if (type === 'nc_lmeCollections') {
        var _NEW_ITEM_TEXT4 = Lampa.Lang.translate('lmeCollections');
        var _NEW_ITEM_SVG4 = "<svg width=\"191\" height=\"239\" viewBox=\"0 0 191 239\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.3438 35.3414V26.7477C35.3438 19.9156 38.0594 13.3543 42.8934 8.51604C47.7297 3.68251 54.2874 0.967027 61.125 0.966431H164.25C171.086 0.966431 177.643 3.68206 182.482 8.51604C187.315 13.3524 190.031 19.91 190.031 26.7477V186.471C190.031 189.87 189.022 193.192 187.133 196.018C185.245 198.844 182.561 201.046 179.421 202.347C176.28 203.647 172.825 203.988 169.492 203.325C166.158 202.662 163.096 201.026 160.692 198.623L155.656 193.587V220.846C155.656 224.245 154.647 227.567 152.758 230.393C150.87 233.219 148.186 235.421 145.046 236.722C141.905 238.022 138.45 238.363 135.117 237.7C131.783 237.037 128.721 235.401 126.317 232.998L78.3125 184.993L30.3078 232.998C27.9041 235.401 24.8419 237.037 21.5084 237.7C18.1748 238.363 14.7195 238.022 11.5794 236.722C8.43922 235.421 5.75517 233.219 3.86654 230.393C1.9779 227.567 0.969476 224.245 0.96875 220.846V61.1227C0.96875 54.2906 3.68437 47.7293 8.51836 42.891C13.3547 38.0575 19.9124 35.342 26.75 35.3414H35.3438ZM138.469 220.846V61.1227C138.469 58.8435 137.563 56.6576 135.952 55.046C134.34 53.4343 132.154 52.5289 129.875 52.5289H26.75C24.4708 52.5289 22.2849 53.4343 20.6733 55.046C19.0617 56.6576 18.1562 58.8435 18.1562 61.1227V220.846L66.1609 172.841C69.3841 169.619 73.755 167.809 78.3125 167.809C82.87 167.809 87.2409 169.619 90.4641 172.841L138.469 220.846ZM155.656 169.284L172.844 186.471V26.7477C172.844 24.4685 171.938 22.2826 170.327 20.671C168.715 19.0593 166.529 18.1539 164.25 18.1539H61.125C58.8458 18.1539 56.6599 19.0593 55.0483 20.671C53.4367 22.2826 52.5312 24.4685 52.5312 26.7477V35.3414H129.875C136.711 35.3414 143.268 38.0571 148.107 42.891C152.94 47.7274 155.656 54.285 155.656 61.1227V169.284Z\" fill=\"currentColor\"/>\n                </svg>";
        Lampa.Menu.addButton(_NEW_ITEM_SVG4, _NEW_ITEM_TEXT4, function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('lmeCollections'),
            component: Lampa.Storage.get("nc_CollectionHome") || 'lmeCollections',
            page: 1
          });
        });
      }
      if (type === Lampa.Storage.get('nc_networkLists') && Lampa.Storage.get('nc_networkLists') !== []) {
        Lampa.Storage.get('nc_networkLists').forEach(function (item) {
          var NEW_ITEM_TEXT = "".concat(item.card_data.name);
          var New = "";
          var legacyFavorite = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
          if (item.type === "new") New = 'first_air_date.desc';

          // Create img tag for network logo
          var NEW_ITEM_IMG = "<img class='networkLogo' src='".concat(Lampa.TMDB.image("t/p/w200/".concat(item.card_data.poster_path)), "' alt=\"img\">");
          Lampa.Menu.addButton(NEW_ITEM_IMG, "".concat(legacyFavorite ? "OLD " : "").concat(NEW_ITEM_TEXT), function () {
            //Migration alert
            if (legacyFavorite === true) {
              Lampa.Noty.show(Lampa.Lang.translate('nc_favoriteMigrateAlert'));
            } else {
              Lampa.Activity.push({
                url: 'discover/tv',
                title: "".concat(item.type.toUpperCase(), " ").concat(NEW_ITEM_TEXT),
                component: "category_full",
                networks: item.card_data.$id,
                sort_by: New,
                source: 'tmdb',
                card_type: true,
                page: 1
              });
            }
          });

          // Note: Badge functionality from original code is lost in v3 API
          // Original had: <div class="nc_badge">${Lampa.Lang.translate(item.type === 'top' ? 'nc_toptv' : 'nc_newtv')}</div>
          // This would require custom HTML via Lampa.Menu.addaddElement if badges are critical
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

    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function _classCallCheck(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }
    function _defineProperty(e, r, t) {
      return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e,
          n,
          i,
          u,
          a = [],
          f = !0,
          o = !1;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = !1;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
          o = !0, n = r;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _toConsumableArray(r) {
      return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }

    var network = new Lampa.Reguest();
    var api_url = 'https://cloud.appwrite.io/v1/databases/65fd540d95317ea2a89f/collections/TVNetworksSource/documents?queries[0]={"method":"limit","values":[36]}&queries[]={"method":"orderDesc","values":["$createdAt"]}';
    var api_urlCollection = 'https://cloud.appwrite.io/v1/databases/65fd540d95317ea2a89f/collections/CollectionSource/documents?queries[0]={"method":"limit","values":[36]}&queries[]={"method":"orderDesc","values":["$createdAt"]}';
    var auth = {
      headers: {
        "X-Appwrite-Project": "65fd523956f5ca97eaff"
      }
    };
    var allNetworks = []; // Store all networks globally

    function main$2(params, oncomplite, onerror) {
      var trakt_headers = {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b'
      };

      // Ensure page starts from 0
      var page = Math.max(0, (params.page || 1) - 1);
      network["native"]('https://api.trakt.tv/networks', function (networks) {
        if (params.searchQuery) {
          console.log('Search query:', params.searchQuery);
          networks = networks.filter(function (network) {
            return network.name.toLowerCase().includes(params.searchQuery.toLowerCase());
          });
          console.log('Filtered networks by searchQuery:', networks);
        }
        if (!params.searchQuery && (params.geoSearchQuery || Lampa.Storage.get('nc_networksListGeo'))) {
          var countryCode = (Lampa.Storage.get('nc_networksListGeo') || params.geoSearchQuery).toLowerCase();
          networks = networks.filter(function (network) {
            return network.country && network.country.toLowerCase() === countryCode;
          });
        }
        allNetworks = networks;
        processPage(page, _toConsumableArray(allNetworks), oncomplite);
      }, function (error) {
        onerror(error);
      }, false, {
        headers: trakt_headers
      });
    }
    function processPage(page, networks, oncomplite) {
      var itemsPerPage = 36;
      var start = page * itemsPerPage;
      var end = start + itemsPerPage;

      // If no networks or start index is out of bounds
      if (!networks.length || start >= networks.length) {
        oncomplite({
          collection: true,
          total_pages: Math.max(1, Math.ceil(networks.length / itemsPerPage)),
          total: networks.length,
          documents: []
        });
        return;
      }
      var pageNetworks = networks.slice(start, end);
      var promises = pageNetworks.map(function (network_item) {
        return new Promise(function (resolve) {
          if (network_item.ids.tmdb) {
            var tmdbUrl = "".concat(Lampa.TMDB.api('network/' + network_item.ids.tmdb + '/images' + '?api_key=' + Lampa.TMDB.key()));
            network["native"](tmdbUrl, function (json) {
              var _json$logos, _network_item$country;
              resolve({
                name: network_item.name,
                logo_path: ((_json$logos = json.logos) === null || _json$logos === void 0 || (_json$logos = _json$logos[0]) === null || _json$logos === void 0 ? void 0 : _json$logos.file_path) || '',
                origin_country: ((_network_item$country = network_item.country) === null || _network_item$country === void 0 ? void 0 : _network_item$country.toUpperCase()) || null,
                $id: network_item.ids.tmdb,
                tmdb_id: network_item.ids.tmdb
              });
            }, function () {
              var _network_item$country2;
              resolve({
                name: network_item.name,
                logo_path: '',
                origin_country: ((_network_item$country2 = network_item.country) === null || _network_item$country2 === void 0 ? void 0 : _network_item$country2.toUpperCase()) || null,
                $id: network_item.ids.tmdb,
                tmdb_id: network_item.ids.tmdb
              });
            });
          } else {
            var _network_item$country3;
            resolve({
              name: network_item.name,
              logo_path: '',
              origin_country: ((_network_item$country3 = network_item.country) === null || _network_item$country3 === void 0 ? void 0 : _network_item$country3.toUpperCase()) || null,
              $id: network_item.ids.tmdb,
              tmdb_id: null
            });
          }
        });
      });
      Promise.all(promises).then(function (documents) {
        var data = {
          collection: true,
          total_pages: Math.ceil(networks.length / itemsPerPage),
          total: networks.length,
          documents: documents
        };
        data.documents.forEach(function (element) {
          element.poster_path = element.logo_path;
        });
        oncomplite(data);
      });
    }
    function full(params, oncomplite, onerror) {
      var apiUrl = api_url;
      if (params.searchQuery && params.searchQuery !== "") {
        apiUrl += "&queries[]={\"method\":\"search\",\"attribute\":\"name\",\"values\":[\"".concat(params.searchQuery, "\"]}");
      }
      if (!params.searchQuery && (params.geoSearchQuery && params.geoSearchQuery !== "" || Lampa.Storage.get('nc_networksListGeo') && Lampa.Storage.get('nc_networksListGeo') !== "null")) {
        apiUrl += "&queries[]={\"method\":\"equal\",\"attribute\":\"origin_country\",\"values\":[\"".concat(Lampa.Storage.get('nc_networksListGeo') || params.geoSearchQuery, "\"]}");
      }
      network.silent(encodeURI(apiUrl + "&queries[]={\"method\":\"offset\",\"values\":[".concat(params.page * 36, "]}")), function (data) {
        data.collection = true;
        data.total_pages = data.total / 36;
        data.documents.forEach(function (element) {
          element.poster_path = element.logo_path;
          if (element.origin_country !== null) {
            element.name = "".concat(element.name, " ").concat(element.origin_country);
          }
        });
        oncomplite(data);
      }, onerror, false, auth);
    }
    function bookmarkSave(data) {
      if (data.action === 'bookmarkAdd') {
        try {
          var currentItems = Lampa.Storage.get('nc_bookmarks') || [];
          var isDuplicate = currentItems.some(function (item) {
            return item.$id === data.card_data.$id;
          });
          if (isDuplicate) {
            return false;
          }
          Lampa.Storage.add('nc_bookmarks', data.card_data);
          return true;
        } catch (error) {
          return false;
        }
      }
    }
    function bookmarkRemove(data) {
      if (data.action === 'bookmarkRemove') {
        try {
          var currentItems = Lampa.Storage.get('nc_bookmarks');
          var updatedItems = currentItems.filter(function (item) {
            return item.$id !== data.card_data.$id;
          });
          if (currentItems.length === updatedItems.length) {
            console.error('Ошибка: Запись не найдена');
            return false;
          }
          Lampa.Storage.set('nc_bookmarks', JSON.stringify(updatedItems));
          return true;
        } catch (error) {
          console.error('Произошла ошибка при удалении записи:', error);
          return false;
        }
      }
    }
    /* Collection */
    function mainCollection(params, oncomplite, onerror) {
      var apiUrl = api_urlCollection;
      if (params.searchQuery && params.searchQuery !== "") {
        // Получаем значение языка из хранилища
        var language = Lampa.Storage.get('language');

        // Определяем атрибут для поиска в зависимости от языка
        var searchAttribute = language === 'uk' ? 'uk' : language === 'ru' ? 'ru' : 'name';
        apiUrl += "&queries[]={\"method\":\"search\",\"attribute\":\"".concat(searchAttribute, "\",\"values\":[\"").concat(params.searchQuery, "\"]}");
      }
      network.silent(encodeURI(apiUrl), function (data) {
        data.collection = false;
        data.total_pages = data.total / 36;
        data.documents.forEach(function (element) {
          var language = Lampa.Storage.get('language');
          if (language === 'uk') {
            element.name = element.uk || element.name;
          } else if (language === 'ru') {
            element.name = element.ru || element.name;
          } else {
            element.name = "".concat(element.name);
          }
        });
        oncomplite(data);
      }, onerror, false, auth);
    }
    function fullCollection(params, oncomplite, onerror) {
      var apiUrl = api_urlCollection;
      if (params.searchQuery && params.searchQuery !== "") {
        apiUrl += "&queries[]={\"method\":\"search\",\"attribute\":\"name\",\"values\":[\"".concat(params.searchQuery, "\"]}");
      }
      network.silent(encodeURI(apiUrl + "&queries[]={\"method\":\"offset\",\"values\":[".concat(params.page * 36, "]}")), function (data) {
        data.collection = false;
        data.total_pages = data.total / 36;
        data.documents.forEach(function (element) {
          var language = Lampa.Storage.get('language');
          if (language === 'uk') {
            element.name = element.uk || element.name;
          } else if (language === 'ru') {
            element.name = element.ru || element.name;
          } else {
            element.name = "".concat(element.name);
          }
        });
        oncomplite(data);
      }, onerror, false, auth);
    }
    function mainCollectionGet(params, oncomplite, onerror) {
      var apiUrlTMDB = 'https://api.themoviedb.org/3/';
      var apiUrlProxy = 'apitmdb.' + (Lampa.Manifest && Lampa.Manifest.cub_domain ? Lampa.Manifest.cub_domain : 'cub.red') + '/3/';
      var request = "collection/".concat(params.collectionID, "?api_key=4ef0d7355d9ffb5151e987764708ce96&language=").concat(Lampa.Storage.get('language'));
      var apiUrl = Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request;
      network.silent(apiUrl, function (data) {
        //data = data.contents;
        data.results = data.parts;
        data.total_pages = data.total / 36;
        oncomplite(data);
      }, onerror, false);
    }
    function collectionBookmarkSave(action, card_data) {
      if (action === 'collectionBookmarkAdd') {
        try {
          var currentItems = Lampa.Storage.get('nc_collectionBookmarks') || [];
          var isDuplicate = currentItems.some(function (item) {
            return item.$id === card_data.$id;
          });
          if (isDuplicate) {
            return false;
          }
          Lampa.Storage.add('nc_collectionBookmarks', card_data);
          return true;
        } catch (error) {
          return false;
        }
      }
    }
    function collectionBookmarkRemove(action, card_data) {
      if (action === 'collectionBookmarkRemove') {
        try {
          var currentItems = Lampa.Storage.get('nc_collectionBookmarks');
          var updatedItems = currentItems.filter(function (item) {
            return item.$id !== card_data.$id;
          });
          if (currentItems.length === updatedItems.length) {
            console.error('Ошибка: Запись не найдена');
            return false;
          }
          Lampa.Storage.set('nc_collectionBookmarks', JSON.stringify(updatedItems));
          return true;
        } catch (error) {
          console.error('Произошла ошибка при удалении записи:', error);
          return false;
        }
      }
    }
    function clear() {
      network.clear();
    }
    var Api = {
      main: main$2,
      full: full,
      bookmarkRemove: bookmarkRemove,
      bookmarkSave: bookmarkSave,
      mainCollection: mainCollection,
      fullCollection: fullCollection,
      mainCollectionGet: mainCollectionGet,
      collectionBookmarkSave: collectionBookmarkSave,
      collectionBookmarkRemove: collectionBookmarkRemove,
      clear: clear
    };

    var Favorites$1 = /*#__PURE__*/function () {
      function Favorites() {
        _classCallCheck(this, Favorites);
      }
      return _createClass(Favorites, null, [{
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
            Lampa.Noty.show(Lampa.Lang.translate('nc_favoriteDeleted') + ' ' + find.card_data.name);
          }
        }
      }, {
        key: "add",
        value: function add(favorite) {
          var list = this.get();
          var find = this.find(favorite);
          if (!find) {
            Lampa.Arrays.extend(favorite, {
              //id: Lampa.Utils.uid(),
              id: favorite.type + favorite.card_data.$id,
              added: Date.now()
            });
            list.push(favorite);
            Lampa.Storage.set('nc_networkLists', list);
            Lampa.Noty.show("Add, need reboot");
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
    }();

    function list() {
      return {
        "results": [{
          "iso_3166_1": "CN",
          "english_name": "China",
          "native_name": "China"
        }, {
          "iso_3166_1": "US",
          "english_name": "United States of America",
          "native_name": "United States"
        }, {
          "iso_3166_1": "FR",
          "english_name": "France",
          "native_name": "France"
        }, {
          "iso_3166_1": "GB",
          "english_name": "United Kingdom",
          "native_name": "United Kingdom"
        }, {
          "iso_3166_1": "RU",
          "english_name": "Russia",
          "native_name": "Russia"
        }, {
          "iso_3166_1": "AD",
          "english_name": "Andorra",
          "native_name": "Andorra"
        }, {
          "iso_3166_1": "AE",
          "english_name": "United Arab Emirates",
          "native_name": "United Arab Emirates"
        }, {
          "iso_3166_1": "AG",
          "english_name": "Antigua and Barbuda",
          "native_name": "Antigua & Barbuda"
        }, {
          "iso_3166_1": "AL",
          "english_name": "Albania",
          "native_name": "Albania"
        }, {
          "iso_3166_1": "AR",
          "english_name": "Argentina",
          "native_name": "Argentina"
        }, {
          "iso_3166_1": "AT",
          "english_name": "Austria",
          "native_name": "Austria"
        }, {
          "iso_3166_1": "AU",
          "english_name": "Australia",
          "native_name": "Australia"
        }, {
          "iso_3166_1": "BA",
          "english_name": "Bosnia and Herzegovina",
          "native_name": "Bosnia & Herzegovina"
        }, {
          "iso_3166_1": "BB",
          "english_name": "Barbados",
          "native_name": "Barbados"
        }, {
          "iso_3166_1": "BE",
          "english_name": "Belgium",
          "native_name": "Belgium"
        }, {
          "iso_3166_1": "BG",
          "english_name": "Bulgaria",
          "native_name": "Bulgaria"
        }, {
          "iso_3166_1": "BH",
          "english_name": "Bahrain",
          "native_name": "Bahrain"
        }, {
          "iso_3166_1": "BM",
          "english_name": "Bermuda",
          "native_name": "Bermuda"
        }, {
          "iso_3166_1": "BO",
          "english_name": "Bolivia",
          "native_name": "Bolivia"
        }, {
          "iso_3166_1": "BR",
          "english_name": "Brazil",
          "native_name": "Brazil"
        }, {
          "iso_3166_1": "BS",
          "english_name": "Bahamas",
          "native_name": "Bahamas"
        }, {
          "iso_3166_1": "CA",
          "english_name": "Canada",
          "native_name": "Canada"
        }, {
          "iso_3166_1": "CH",
          "english_name": "Switzerland",
          "native_name": "Switzerland"
        }, {
          "iso_3166_1": "CI",
          "english_name": "Cote D'Ivoire",
          "native_name": "Côte d’Ivoire"
        }, {
          "iso_3166_1": "CL",
          "english_name": "Chile",
          "native_name": "Chile"
        }, {
          "iso_3166_1": "CO",
          "english_name": "Colombia",
          "native_name": "Colombia"
        }, {
          "iso_3166_1": "CR",
          "english_name": "Costa Rica",
          "native_name": "Costa Rica"
        }, {
          "iso_3166_1": "CU",
          "english_name": "Cuba",
          "native_name": "Cuba"
        }, {
          "iso_3166_1": "CV",
          "english_name": "Cape Verde",
          "native_name": "Cape Verde"
        }, {
          "iso_3166_1": "CZ",
          "english_name": "Czech Republic",
          "native_name": "Czech Republic"
        }, {
          "iso_3166_1": "DE",
          "english_name": "Germany",
          "native_name": "Germany"
        }, {
          "iso_3166_1": "DK",
          "english_name": "Denmark",
          "native_name": "Denmark"
        }, {
          "iso_3166_1": "DO",
          "english_name": "Dominican Republic",
          "native_name": "Dominican Republic"
        }, {
          "iso_3166_1": "DZ",
          "english_name": "Algeria",
          "native_name": "Algeria"
        }, {
          "iso_3166_1": "EC",
          "english_name": "Ecuador",
          "native_name": "Ecuador"
        }, {
          "iso_3166_1": "EE",
          "english_name": "Estonia",
          "native_name": "Estonia"
        }, {
          "iso_3166_1": "EG",
          "english_name": "Egypt",
          "native_name": "Egypt"
        }, {
          "iso_3166_1": "ES",
          "english_name": "Spain",
          "native_name": "Spain"
        }, {
          "iso_3166_1": "FI",
          "english_name": "Finland",
          "native_name": "Finland"
        }, {
          "iso_3166_1": "FJ",
          "english_name": "Fiji",
          "native_name": "Fiji"
        }, {
          "iso_3166_1": "GF",
          "english_name": "French Guiana",
          "native_name": "French Guiana"
        }, {
          "iso_3166_1": "GH",
          "english_name": "Ghana",
          "native_name": "Ghana"
        }, {
          "iso_3166_1": "GI",
          "english_name": "Gibraltar",
          "native_name": "Gibraltar"
        }, {
          "iso_3166_1": "GP",
          "english_name": "Guadaloupe",
          "native_name": "Guadeloupe"
        }, {
          "iso_3166_1": "GQ",
          "english_name": "Equatorial Guinea",
          "native_name": "Equatorial Guinea"
        }, {
          "iso_3166_1": "GR",
          "english_name": "Greece",
          "native_name": "Greece"
        }, {
          "iso_3166_1": "GT",
          "english_name": "Guatemala",
          "native_name": "Guatemala"
        }, {
          "iso_3166_1": "HK",
          "english_name": "Hong Kong",
          "native_name": "Hong Kong SAR China"
        }, {
          "iso_3166_1": "HN",
          "english_name": "Honduras",
          "native_name": "Honduras"
        }, {
          "iso_3166_1": "HR",
          "english_name": "Croatia",
          "native_name": "Croatia"
        }, {
          "iso_3166_1": "HU",
          "english_name": "Hungary",
          "native_name": "Hungary"
        }, {
          "iso_3166_1": "ID",
          "english_name": "Indonesia",
          "native_name": "Indonesia"
        }, {
          "iso_3166_1": "IE",
          "english_name": "Ireland",
          "native_name": "Ireland"
        }, {
          "iso_3166_1": "IL",
          "english_name": "Israel",
          "native_name": "Israel"
        }, {
          "iso_3166_1": "IN",
          "english_name": "India",
          "native_name": "India"
        }, {
          "iso_3166_1": "IQ",
          "english_name": "Iraq",
          "native_name": "Iraq"
        }, {
          "iso_3166_1": "IS",
          "english_name": "Iceland",
          "native_name": "Iceland"
        }, {
          "iso_3166_1": "IT",
          "english_name": "Italy",
          "native_name": "Italy"
        }, {
          "iso_3166_1": "JM",
          "english_name": "Jamaica",
          "native_name": "Jamaica"
        }, {
          "iso_3166_1": "JO",
          "english_name": "Jordan",
          "native_name": "Jordan"
        }, {
          "iso_3166_1": "JP",
          "english_name": "Japan",
          "native_name": "Japan"
        }, {
          "iso_3166_1": "KE",
          "english_name": "Kenya",
          "native_name": "Kenya"
        }, {
          "iso_3166_1": "KR",
          "english_name": "South Korea",
          "native_name": "South Korea"
        }, {
          "iso_3166_1": "KW",
          "english_name": "Kuwait",
          "native_name": "Kuwait"
        }, {
          "iso_3166_1": "LB",
          "english_name": "Lebanon",
          "native_name": "Lebanon"
        }, {
          "iso_3166_1": "LC",
          "english_name": "St. Lucia",
          "native_name": "St. Lucia"
        }, {
          "iso_3166_1": "LI",
          "english_name": "Liechtenstein",
          "native_name": "Liechtenstein"
        }, {
          "iso_3166_1": "LT",
          "english_name": "Lithuania",
          "native_name": "Lithuania"
        }, {
          "iso_3166_1": "LV",
          "english_name": "Latvia",
          "native_name": "Latvia"
        }, {
          "iso_3166_1": "LY",
          "english_name": "Libyan Arab Jamahiriya",
          "native_name": "Libya"
        }, {
          "iso_3166_1": "MA",
          "english_name": "Morocco",
          "native_name": "Morocco"
        }, {
          "iso_3166_1": "MC",
          "english_name": "Monaco",
          "native_name": "Monaco"
        }, {
          "iso_3166_1": "MD",
          "english_name": "Moldova",
          "native_name": "Moldova"
        }, {
          "iso_3166_1": "MK",
          "english_name": "Macedonia",
          "native_name": "Macedonia"
        }, {
          "iso_3166_1": "MT",
          "english_name": "Malta",
          "native_name": "Malta"
        }, {
          "iso_3166_1": "MU",
          "english_name": "Mauritius",
          "native_name": "Mauritius"
        }, {
          "iso_3166_1": "MX",
          "english_name": "Mexico",
          "native_name": "Mexico"
        }, {
          "iso_3166_1": "MY",
          "english_name": "Malaysia",
          "native_name": "Malaysia"
        }, {
          "iso_3166_1": "MZ",
          "english_name": "Mozambique",
          "native_name": "Mozambique"
        }, {
          "iso_3166_1": "NE",
          "english_name": "Niger",
          "native_name": "Niger"
        }, {
          "iso_3166_1": "NG",
          "english_name": "Nigeria",
          "native_name": "Nigeria"
        }, {
          "iso_3166_1": "NL",
          "english_name": "Netherlands",
          "native_name": "Netherlands"
        }, {
          "iso_3166_1": "NO",
          "english_name": "Norway",
          "native_name": "Norway"
        }, {
          "iso_3166_1": "NZ",
          "english_name": "New Zealand",
          "native_name": "New Zealand"
        }, {
          "iso_3166_1": "OM",
          "english_name": "Oman",
          "native_name": "Oman"
        }, {
          "iso_3166_1": "PA",
          "english_name": "Panama",
          "native_name": "Panama"
        }, {
          "iso_3166_1": "PE",
          "english_name": "Peru",
          "native_name": "Peru"
        }, {
          "iso_3166_1": "PF",
          "english_name": "French Polynesia",
          "native_name": "French Polynesia"
        }, {
          "iso_3166_1": "PH",
          "english_name": "Philippines",
          "native_name": "Philippines"
        }, {
          "iso_3166_1": "PK",
          "english_name": "Pakistan",
          "native_name": "Pakistan"
        }, {
          "iso_3166_1": "PL",
          "english_name": "Poland",
          "native_name": "Poland"
        }, {
          "iso_3166_1": "PS",
          "english_name": "Palestinian Territory",
          "native_name": "Palestinian Territories"
        }, {
          "iso_3166_1": "PT",
          "english_name": "Portugal",
          "native_name": "Portugal"
        }, {
          "iso_3166_1": "PY",
          "english_name": "Paraguay",
          "native_name": "Paraguay"
        }, {
          "iso_3166_1": "QA",
          "english_name": "Qatar",
          "native_name": "Qatar"
        }, {
          "iso_3166_1": "RO",
          "english_name": "Romania",
          "native_name": "Romania"
        }, {
          "iso_3166_1": "RS",
          "english_name": "Serbia",
          "native_name": "Serbia"
        }, {
          "iso_3166_1": "SA",
          "english_name": "Saudi Arabia",
          "native_name": "Saudi Arabia"
        }, {
          "iso_3166_1": "SC",
          "english_name": "Seychelles",
          "native_name": "Seychelles"
        }, {
          "iso_3166_1": "SE",
          "english_name": "Sweden",
          "native_name": "Sweden"
        }, {
          "iso_3166_1": "SG",
          "english_name": "Singapore",
          "native_name": "Singapore"
        }, {
          "iso_3166_1": "SI",
          "english_name": "Slovenia",
          "native_name": "Slovenia"
        }, {
          "iso_3166_1": "SK",
          "english_name": "Slovakia",
          "native_name": "Slovakia"
        }, {
          "iso_3166_1": "SM",
          "english_name": "San Marino",
          "native_name": "San Marino"
        }, {
          "iso_3166_1": "SN",
          "english_name": "Senegal",
          "native_name": "Senegal"
        }, {
          "iso_3166_1": "SV",
          "english_name": "El Salvador",
          "native_name": "El Salvador"
        }, {
          "iso_3166_1": "TC",
          "english_name": "Turks and Caicos Islands",
          "native_name": "Turks & Caicos Islands"
        }, {
          "iso_3166_1": "TH",
          "english_name": "Thailand",
          "native_name": "Thailand"
        }, {
          "iso_3166_1": "TN",
          "english_name": "Tunisia",
          "native_name": "Tunisia"
        }, {
          "iso_3166_1": "TR",
          "english_name": "Turkey",
          "native_name": "Turkey"
        }, {
          "iso_3166_1": "TT",
          "english_name": "Trinidad and Tobago",
          "native_name": "Trinidad & Tobago"
        }, {
          "iso_3166_1": "TW",
          "english_name": "Taiwan",
          "native_name": "Taiwan"
        }, {
          "iso_3166_1": "TZ",
          "english_name": "Tanzania",
          "native_name": "Tanzania"
        }, {
          "iso_3166_1": "UG",
          "english_name": "Uganda",
          "native_name": "Uganda"
        }, {
          "iso_3166_1": "UY",
          "english_name": "Uruguay",
          "native_name": "Uruguay"
        }, {
          "iso_3166_1": "VA",
          "english_name": "Holy See",
          "native_name": "Vatican City"
        }, {
          "iso_3166_1": "VE",
          "english_name": "Venezuela",
          "native_name": "Venezuela"
        }, {
          "iso_3166_1": "XK",
          "english_name": "Kosovo",
          "native_name": "Kosovo"
        }, {
          "iso_3166_1": "YE",
          "english_name": "Yemen",
          "native_name": "Yemen"
        }, {
          "iso_3166_1": "ZA",
          "english_name": "South Africa",
          "native_name": "South Africa"
        }, {
          "iso_3166_1": "ZM",
          "english_name": "Zambia",
          "native_name": "Zambia"
        }]
      };
    }
    var GeoBase$1 = list();

    function setGeo(a) {
      if (Lampa.Storage.get('nc_networksListGeo') === a.id) {
        nullGeo();
      } else {
        Lampa.Storage.set('nc_networksListGeo', a.id);
        Lampa.Noty.show(Lampa.Lang.translate('nc_networksListGeoAdd'));
      }
    }
    function nullGeo() {
      Lampa.Storage.set('nc_networksListGeo', null);
      Lampa.Noty.show(Lampa.Lang.translate('nc_networksListGeoDeleted'));
    }
    function component$4(object) {
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
        header.className = 'lme-catalog lme-header lme-error';
        //Bookmarks
        var bookmarks = document.createElement('div');
        bookmarks.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        bookmarks.innerHTML = "<svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill=\"currentColor\" d=\"M11.4589 57.5318L30 47.7841L48.5411 57.5318L45 36.8859L60 22.2646L39.2704 19.2526L30 0.468231L20.7293 19.2526L0 22.2646L15 36.8859L11.4589 57.5318ZM9.3698 25.3092L23.6248 23.2378L30 10.3206L36.3752 23.2378L50.6302 25.3092L40.3154 35.3639L42.7504 49.5613L30.0003 42.8582L17.2502 49.5613L19.6852 35.3639L9.3698 25.3092Z\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('nc_bookmark'), "</div>");
        bookmarks.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_bookmark'),
            component: 'lmeNetworksBookmarks',
            page: 1
          });
        });
        bookmarks.on('hover:long', function () {
          Lampa.Storage.set("nc_networksListHome", 'lmeNetworksBookmarks');
          Lampa.Noty.show('Главный раздел изменен');
        });

        //Favorites
        var favorites = document.createElement('div');
        favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        favorites.innerHTML = "<svg width=\"46\" height=\"36\" viewBox=\"0 0 46 36\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M3 3H43M3 18H43M3 33H43\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
        favorites.on('hover:enter', function () {
          var itemsFavs = [];
          Favorites$1.get().forEach(function (item) {
            var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
            itemsFavs.push({
              title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
              id: item.id
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsFavs,
            onSelect: function onSelect(a) {
              Favorites$1.remove(a);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        header.appendChild(favorites);
        //Bookmarks
        header.appendChild(bookmarks);
        var button = document.createElement('div');
        button.className = 'empty simple-button simple-button--invisible selector button--clear';
        button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        button.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
        var empty = new Lampa.Empty();
        if (button) empty.append(button);
        html.addClass('lmeCatalog');
        html.appendChild(header);
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
        Api.main(object, resolve.bind(this), reject.bind(this));
      };
      this.append = function (data, append) {
        var _this2 = this;
        data.documents.forEach(function (element) {
          // Migrate to Lampa.Maker.make('Card')
          var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
            params: {
              // No special params needed for default card
            }
          }));
          card.create();

          // In v3, use card.render() to get DOM element
          var cardElement = card.render(true);
          var _cardElement$children = _slicedToArray(cardElement.children, 2),
            viewElement = _cardElement$children[0],
            titleElement = _cardElement$children[1];

          // Перевірка наявності елементів
          if (viewElement && titleElement) {
            var iconsContainer = viewElement.querySelector('.card__icons');
            if (iconsContainer) {
              titleElement.classList.add('networkTitle');
              // Видаляємо title з попереднього місця
              cardElement.removeChild(titleElement);
              // Додаємо до icons
              iconsContainer.appendChild(titleElement);

              // Add flag image if country exists
              if (card.data.origin_country) {
                var flagImg = document.createElement('img');
                flagImg.src = "https://flagsapi.com/".concat(card.data.origin_country, "/flat/64.png");
                iconsContainer.appendChild(flagImg);
              }
            }
          }

          // Use .use() method for event handling in v3
          card.use({
            onFocus: function onFocus() {
              last = this.render(true);
              active = items.indexOf(card);
              scroll.update(this.render(true));
            },
            onTouch: function onTouch() {
              last = this.render(true);
              active = items.indexOf(card);
            },
            onEnter: function onEnter() {
              var enabled = Lampa.Controller.enabled().name;
              var card_data = this.data;
              var menu = [];
              menu.push({
                title: "".concat(Lampa.Lang.translate('nc_openAction'), " New"),
                action: 'open',
                sort_by: 'first_air_date.desc',
                type: 'New',
                card_data: card_data
              });
              menu.push({
                title: "".concat(Lampa.Lang.translate('nc_openAction'), " Top"),
                action: 'open',
                sort_by: '',
                type: 'Top',
                card_data: card_data
              });
              menu.push({
                title: Lampa.Lang.translate('nc_bookmarkAdd'),
                action: 'bookmarkAdd',
                card_data: card_data
              });
              menu.push({
                title: Lampa.Lang.translate('nc_favoriteAdd') + ' New',
                action: 'favorite',
                card_data: card_data,
                type: 'new'
              });
              menu.push({
                title: Lampa.Lang.translate('nc_favoriteAdd') + ' Top',
                action: 'favorite',
                card_data: card_data,
                type: 'top'
              });
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
                title: 'Country',
                country: true
              });
              menu.push({
                title: 'Reset',
                reset: true
              });
              Lampa.Select.show({
                title: "".concat(card_data.name, " [").concat(card_data.$id, "]"),
                items: menu,
                onBack: function onBack() {
                  Lampa.Controller.toggle(enabled);
                },
                onSelect: function onSelect(a) {
                  if (a.action === 'favorite') {
                    Favorites$1.add(a);
                  }
                  if (a.action === 'bookmarkAdd') {
                    var result = Api.bookmarkSave(a);
                    if (result === true) {
                      console.log('Запись была успешно добавлена.');
                      Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
                    } else if (result === false) {
                      console.error('Не удалось добавить запись.');
                      Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
                    }
                  }
                  if (a.action === 'open') {
                    Lampa.Activity.push({
                      url: 'discover/tv',
                      title: "".concat(a.type, " ").concat(a.card_data.title),
                      //a.title + " " + a.card_data.title,
                      component: "category_full",
                      networks: a.card_data.$id,
                      sort_by: a.sort_by,
                      source: 'tmdb',
                      card_type: true,
                      page: 1
                    });
                  }
                  if (a.favorites) {
                    var itemsFavs = [];
                    Favorites$1.get().forEach(function (item) {
                      var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
                      itemsFavs.push({
                        title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
                        id: item.id
                      });
                    });
                    Lampa.Select.show({
                      title: Lampa.Lang.translate('nc_networksList'),
                      items: itemsFavs,
                      onSelect: function onSelect(a) {
                        Favorites$1.remove(a);
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
                  if (a.country) {
                    var itemsGeo = [];
                    GeoBase$1.results.forEach(function (item) {
                      itemsGeo.push({
                        title: item.english_name,
                        id: item.iso_3166_1
                      });
                    });
                    Lampa.Select.show({
                      title: Lampa.Lang.translate('nc_networksList'),
                      items: itemsGeo,
                      onSelect: function onSelect(a) {
                        object.geoSearchQuery = a.id;
                        Lampa.Activity.replace(object);
                      },
                      onLong: function onLong(a) {
                        setGeo(a);
                      },
                      onBack: function onBack() {
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
            }
          });
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
        //Bookmarks
        var bookmarks = document.createElement('div');
        bookmarks.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        bookmarks.innerHTML = "<svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill=\"currentColor\" d=\"M11.4589 57.5318L30 47.7841L48.5411 57.5318L45 36.8859L60 22.2646L39.2704 19.2526L30 0.468231L20.7293 19.2526L0 22.2646L15 36.8859L11.4589 57.5318ZM9.3698 25.3092L23.6248 23.2378L30 10.3206L36.3752 23.2378L50.6302 25.3092L40.3154 35.3639L42.7504 49.5613L30.0003 42.8582L17.2502 49.5613L19.6852 35.3639L9.3698 25.3092Z\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('nc_bookmark'), "</div>");
        bookmarks.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_bookmark'),
            component: 'lmeNetworksBookmarks',
            page: 1
          });
        });
        bookmarks.on('hover:long', function () {
          Lampa.Storage.set("nc_networksListHome", 'lmeNetworksBookmarks');
          Lampa.Noty.show('Главный раздел изменен');
        });

        //Favorites
        var favorites = document.createElement('div');
        favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        favorites.innerHTML = "<svg width=\"46\" height=\"36\" viewBox=\"0 0 46 36\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M3 3H43M3 18H43M3 33H43\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
        favorites.on('hover:enter', function () {
          var itemsFavs = [];
          Favorites$1.get().forEach(function (item) {
            var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
            itemsFavs.push({
              title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
              id: item.id
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsFavs,
            onSelect: function onSelect(a) {
              Favorites$1.remove(a);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        var baseInfo = document.createElement('div');
        baseInfo.className = 'lme-baseInfo';
        baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_networkstat'), ": ").concat(data.total === 5000 ? '5000+' : data.total);
        var search = document.createElement('div');
        search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
        search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div class=\"nc_tv\">Search</div>\n        ";
        var clear = document.createElement('div');
        clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div class=\"nc_tv\">Reset search</div>\n        ";
        clear.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_networksList'),
            component: 'lmeNetworks',
            page: 1
          });
        });
        var geo = document.createElement('div');
        geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div class=\"nc_tv\">".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
        geo.on('hover:enter', function () {
          var itemsGeo = [];
          GeoBase$1.results.forEach(function (item) {
            itemsGeo.push({
              title: item.english_name,
              id: item.iso_3166_1
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsGeo,
            onSelect: function onSelect(a) {
              object.geoSearchQuery = a.id;
              Lampa.Activity.replace(object);
            },
            onLong: function onLong(a) {
              setGeo(a);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        geo.on('hover:long', function () {
          nullGeo();
        });
        header.appendChild(search);
        header.appendChild(clear);
        header.appendChild(geo);
        header.appendChild(favorites);
        //Bookmarks
        header.appendChild(bookmarks);
        header.appendChild(baseInfo);
        if (data.documents.length) {
          total_pages = data.total_pages;
          body.classList.add('lme-catalog', 'category-full', 'cols--6');
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
              object.geoSearchQuery = "";
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

    function component$3(object) {
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
        //Api.bookmark(this.build.bind(this), this.empty.bind(this))
        if (Lampa.Storage.get('nc_bookmarks')) this.build(Lampa.Storage.get('nc_bookmarks'));else this.empty(new Error("No results found"));
      };
      this.empty = function () {
        var panel = document.createElement('div');
        panel.className = 'panelNC blockNC';
        var ncMain = document.createElement('div');
        ncMain.className = 'nc-main simple-button simple-button--invisible simple-button--filter selector';
        ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>All service</div>";
        ncMain.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_networksList'),
            component: 'lmeNetworks',
            page: 1
          });
        });
        ncMain.on('hover:long', function () {
          Lampa.Storage.set("nc_networksListHome", 'lmeNetworks');
          Lampa.Noty.show('Главный раздел изменен');
        });
        var button = document.createElement('div');
        button.className = 'nc-empty simple-button simple-button--invisible selector button--clear';
        button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        button.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
        var empty = new Lampa.Empty();
        if (button) panel.append(button);
        if (button) panel.append(ncMain);
        empty.append(panel);
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
        data.forEach(function (element) {
          // Migrate to Lampa.Maker.make('Card')
          var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
            params: {
              // No special params needed for default card
            }
          }));
          card.create();

          // Use .use() method for event handling in v3
          card.use({
            onFocus: function onFocus() {
              last = this.render(true);
              active = items.indexOf(card);
              scroll.update(this.render(true));
            },
            onTouch: function onTouch() {
              last = this.render(true);
              active = items.indexOf(card);
            },
            onEnter: function onEnter() {
              var enabled = Lampa.Controller.enabled().name;
              var card_data = this.data;
              var menu = [];
              menu.push({
                title: "".concat(Lampa.Lang.translate('nc_openAction'), " New"),
                action: 'open',
                sort_by: 'first_air_date.desc',
                type: 'New',
                card_data: card_data
              });
              menu.push({
                title: "".concat(Lampa.Lang.translate('nc_openAction'), " Top"),
                action: 'open',
                sort_by: '',
                type: 'Top',
                card_data: card_data
              });
              menu.push({
                title: Lampa.Lang.translate('nc_favoriteAdd') + ' New',
                action: 'favorite',
                card_data: card_data,
                type: 'new'
              });
              menu.push({
                title: Lampa.Lang.translate('nc_favoriteAdd') + ' Top',
                action: 'favorite',
                card_data: card_data,
                type: 'top'
              });
              menu.push({
                title: Lampa.Lang.translate('nc_bookmarkDelete'),
                action: 'bookmarkRemove',
                card_data: card_data
              });
              menu.push({
                title: '-----------------'
              });
              menu.push({
                title: 'Favorites',
                favorites: true
              });
              Lampa.Select.show({
                title: Lampa.Lang.translate('title_action') + ' ' + card_data.name,
                items: menu,
                onBack: function onBack() {
                  Lampa.Controller.toggle(enabled);
                },
                onSelect: function onSelect(a) {
                  if (a.action === 'favorite') {
                    Favorites$1.add(a);
                  }
                  if (a.action === 'bookmarkRemove') {
                    //Api.bookmarkRemove(a)
                    var result = Api.bookmarkRemove(a);
                    if (result === true) {
                      console.log('Запись была успешно удалена.');
                      Lampa.Activity.replace({
                        url: '',
                        title: Lampa.Lang.translate('nc_bookmark'),
                        component: 'lmeNetworksBookmarks',
                        page: 1
                      });
                      Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleted'));
                    } else if (result === false) {
                      console.error('Не удалось удалить запись.');
                      Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleteError'));
                    }
                  }
                  if (a.action === 'open') {
                    Lampa.Activity.push({
                      url: 'discover/tv',
                      title: "".concat(a.type, " ").concat(a.card_data.title),
                      //a.title + " " + a.card_data.title,
                      component: "category_full",
                      networks: a.card_data.$id,
                      sort_by: a.sort_by,
                      source: 'tmdb',
                      card_type: true,
                      page: 1
                    });
                  }
                  if (a.favorites) {
                    var itemsFavs = [];
                    Favorites$1.get().forEach(function (item) {
                      var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
                      itemsFavs.push({
                        title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
                        id: item.id
                      });
                    });
                    Lampa.Select.show({
                      title: Lampa.Lang.translate('nc_networksList'),
                      items: itemsFavs,
                      onSelect: function onSelect(a) {
                        Favorites$1.remove(a);
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
                  if (a.country) {
                    var itemsGeo = [];
                    GeoBase$1.results.forEach(function (item) {
                      itemsGeo.push({
                        title: item.english_name,
                        id: item.iso_3166_1
                      });
                    });
                    Lampa.Select.show({
                      title: Lampa.Lang.translate('nc_networksList'),
                      items: itemsGeo,
                      onSelect: function onSelect(a) {
                        object.geoSearchQuery = a.id;
                        Lampa.Activity.replace(object);
                      },
                      onBack: function onBack() {
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
            }
          });
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
        //Main
        var ncMain = document.createElement('div');
        ncMain.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('nc_networksList'), "</div>");
        ncMain.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_networksList'),
            component: 'lmeNetworks',
            page: 1
          });
        });
        ncMain.on('hover:long', function () {
          Lampa.Storage.set("nc_networksListHome", 'lmeNetworks');
          Lampa.Noty.show('Главный раздел изменен');
        });
        var favorites = document.createElement('div');
        favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        favorites.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n                        <path fill=\"currentColor\" d=\"M478.354,146.286H33.646c-12.12,0-21.943,9.823-21.943,21.943v321.829c0,12.12,9.823,21.943,21.943,21.943h444.709\n                            c12.12,0,21.943-9.823,21.943-21.943V168.229C500.297,156.109,490.474,146.286,478.354,146.286z M456.411,468.114H55.589V190.171\n                            h400.823V468.114z\"/>\n                        <path fill=\"currentColor\" d=\"M441.783,73.143H70.217c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h371.566\n                            c12.12,0,21.943-9.823,21.943-21.943C463.726,82.966,453.903,73.143,441.783,73.143z\"/>\n                        <path fill=\"currentColor\" d=\"M405.211,0H106.789c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h298.423\n                            c12.12,0,21.943-9.823,21.943-21.943C427.154,9.823,417.331,0,405.211,0z\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
        favorites.on('hover:enter', function () {
          var itemsFavs = [];
          Favorites$1.get().forEach(function (item) {
            var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
            itemsFavs.push({
              title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
              id: item.id
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsFavs,
            onSelect: function onSelect(a) {
              Favorites$1.remove(a);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        var baseInfo = document.createElement('div');
        baseInfo.className = 'lme-baseInfo';
        baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_bookmarksstat'), ": ").concat(data.length);
        var search = document.createElement('div');
        search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
        search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div>Search</div>\n        ";
        var clear = document.createElement('div');
        clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        clear.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
        var geo = document.createElement('div');
        geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div>".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
        geo.on('hover:enter', function () {
          var itemsGeo = [];
          GeoBase$1.results.forEach(function (item) {
            itemsGeo.push({
              title: item.english_name,
              id: item.iso_3166_1
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsGeo,
            onSelect: function onSelect(a) {
              object.geoSearchQuery = a.id;
              Lampa.Activity.replace(object);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });

        //header.appendChild(search)
        //header.appendChild(clear)
        //header.appendChild(geo)
        header.appendChild(favorites);
        header.appendChild(ncMain);
        header.appendChild(baseInfo);
        if (data.length) {
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
          //this.buildSearch()
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
              object.geoSearchQuery = "";
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

    function component$2(object) {
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
        Api.mainCollection(object, this.build.bind(this), this.empty.bind(this));
      };
      this.empty = function () {
        var button = document.createElement('div');
        button.className = 'empty simple-button simple-button--invisible selector button--clear';
        button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        button.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
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
        Api.fullCollection(object, resolve.bind(this), reject.bind(this));
      };
      this.append = function (data, append) {
        var _this2 = this;
        data.documents.forEach(function (element) {
          // Migrate to Lampa.Maker.make('Card')
          var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
            params: {
              // No special params needed for default card
            }
          }));
          card.create();

          // Use .use() method for event handling in v3
          card.use({
            onFocus: function onFocus() {
              last = this.render(true);
              active = items.indexOf(card);
              scroll.update(this.render(true));
            },
            onTouch: function onTouch() {
              last = this.render(true);
              active = items.indexOf(card);
            },
            onMenu: function onMenu() {
              var result = Api.collectionBookmarkSave('collectionBookmarkAdd', this.data);
              if (result === true) {
                console.log('Запись была успешно добавлена.');
                Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
              } else if (result === false) {
                console.error('Не удалось добавить запись.');
                Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
              }
            },
            onEnter: function onEnter() {
              Lampa.Activity.push({
                url: '',
                title: this.data.name,
                collectionID: this.data.$id,
                component: 'lmeCollection',
                page: 1
              });
            }
          });
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
        //Bookmarks
        var bookmarks = document.createElement('div');
        bookmarks.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        bookmarks.innerHTML = "<svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill=\"currentColor\" d=\"M11.4589 57.5318L30 47.7841L48.5411 57.5318L45 36.8859L60 22.2646L39.2704 19.2526L30 0.468231L20.7293 19.2526L0 22.2646L15 36.8859L11.4589 57.5318ZM9.3698 25.3092L23.6248 23.2378L30 10.3206L36.3752 23.2378L50.6302 25.3092L40.3154 35.3639L42.7504 49.5613L30.0003 42.8582L17.2502 49.5613L19.6852 35.3639L9.3698 25.3092Z\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('nc_bookmark'), "</div>");
        bookmarks.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('nc_bookmark'),
            component: 'lmeCollectionBookmark',
            page: 1
          });
        });
        bookmarks.on('hover:long', function () {
          Lampa.Storage.set("nc_collectionHome", 'lmeCollectionBookmark');
          Lampa.Noty.show('Главный раздел изменен');
        });

        //Favorites
        var favorites = document.createElement('div');
        favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        favorites.innerHTML = "<svg width=\"46\" height=\"36\" viewBox=\"0 0 46 36\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M3 3H43M3 18H43M3 33H43\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
        favorites.on('hover:enter', function () {
          var itemsFavs = [];
          Favorites$1.get().forEach(function (item) {
            var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
            itemsFavs.push({
              title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
              id: item.id
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsFavs,
            onSelect: function onSelect(a) {
              Favorites$1.remove(a);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        var baseInfo = document.createElement('div');
        baseInfo.className = 'lme-baseInfo';
        baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_networkstat'), ": ").concat(data.total === 5000 ? '5000+' : data.total);
        var search = document.createElement('div');
        search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
        search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div class=\"nc_tv\">Search</div>\n        ";
        var clear = document.createElement('div');
        clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div class=\"nc_tv\">Reset search</div>\n        ";
        clear.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
        var geo = document.createElement('div');
        geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div class=\"nc_tv\">".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
        geo.on('hover:enter', function () {
          var itemsGeo = [];
          GeoBase$1.results.forEach(function (item) {
            itemsGeo.push({
              title: item.english_name,
              id: item.iso_3166_1
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsGeo,
            onSelect: function onSelect(a) {
              object.geoSearchQuery = a.id;
              Lampa.Activity.replace(object);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });
        header.appendChild(search);
        header.appendChild(clear);
        //Bookmarks
        header.appendChild(bookmarks);
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
              object.geoSearchQuery = "";
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

    function component$1(object) {
      console.log('Collection', object);
      var comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        Api.mainCollectionGet(object, this.build.bind(this), this.empty.bind(this));
      };
      return comp;
    }

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
        //Api.bookmark(this.build.bind(this), this.empty.bind(this))
        if (Lampa.Storage.get('nc_collectionBookmarks')) this.build(Lampa.Storage.get('nc_collectionBookmarks'));else this.empty(new Error("No results found"));
      };
      this.empty = function () {
        var panel = document.createElement('div');
        panel.className = 'panelNC blockNC';
        var ncMain = document.createElement('div');
        ncMain.className = 'nc-main simple-button simple-button--invisible simple-button--filter selector';
        ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>All Collections</div>";
        ncMain.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: 'Collections',
            component: 'lmeCollections',
            page: 1
          });
        });
        ncMain.on('hover:long', function () {
          Lampa.Storage.set("nc_collectionHome", 'lmeCollections');
          Lampa.Noty.show('Главный раздел изменен');
        });
        var button = document.createElement('div');
        button.className = 'nc-empty simple-button simple-button--invisible selector button--clear';
        button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        button.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
        var empty = new Lampa.Empty();
        if (button) panel.append(button);
        if (button) panel.append(ncMain);
        empty.append(panel);
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
        data.forEach(function (element) {
          // Migrate to Lampa.Maker.make('Card')
          var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
            params: {
              // No special params needed for default card
            }
          }));
          card.create();

          // Use .use() method for event handling in v3
          card.use({
            onFocus: function onFocus() {
              last = this.render(true);
              active = items.indexOf(card);
              scroll.update(this.render(true));
            },
            onTouch: function onTouch() {
              last = this.render(true);
              active = items.indexOf(card);
            },
            onMenu: function onMenu() {
              var result = Api.collectionBookmarkRemove('collectionBookmarkRemove', this.data);
              if (result === true) {
                console.log('Запись была успешно удалена.');
                Lampa.Activity.replace({
                  url: '',
                  title: Lampa.Lang.translate('nc_bookmark'),
                  component: 'lmeCollectionBookmark',
                  page: 1
                });
                Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleted'));
              } else if (result === false) {
                console.error('Не удалось удалить запись.');
                Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleteError'));
              }
            },
            onEnter: function onEnter() {
              Lampa.Activity.push({
                url: '',
                title: this.data.name,
                collectionID: this.data.$id,
                component: 'lmeCollection',
                page: 1
              });
            }
          });
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
        //Main
        var ncMain = document.createElement('div');
        ncMain.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('lmeCollections'), "</div>");
        ncMain.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('lmeCollections'),
            component: 'lmeCollections',
            page: 1
          });
        });
        ncMain.on('hover:long', function () {
          Lampa.Storage.set("nc_networksListHome", 'lmeCollections');
          Lampa.Noty.show('Главный раздел изменен');
        });
        var favorites = document.createElement('div');
        favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
        favorites.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n                        <path fill=\"currentColor\" d=\"M478.354,146.286H33.646c-12.12,0-21.943,9.823-21.943,21.943v321.829c0,12.12,9.823,21.943,21.943,21.943h444.709\n                            c12.12,0,21.943-9.823,21.943-21.943V168.229C500.297,156.109,490.474,146.286,478.354,146.286z M456.411,468.114H55.589V190.171\n                            h400.823V468.114z\"/>\n                        <path fill=\"currentColor\" d=\"M441.783,73.143H70.217c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h371.566\n                            c12.12,0,21.943-9.823,21.943-21.943C463.726,82.966,453.903,73.143,441.783,73.143z\"/>\n                        <path fill=\"currentColor\" d=\"M405.211,0H106.789c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h298.423\n                            c12.12,0,21.943-9.823,21.943-21.943C427.154,9.823,417.331,0,405.211,0z\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
        favorites.on('hover:enter', function () {
          var itemsFavs = [];
          Favorites.get().forEach(function (item) {
            var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
            itemsFavs.push({
              title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
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
        baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_bookmarksstat'), ": ").concat(data.length);
        var search = document.createElement('div');
        search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
        search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div>Search</div>\n        ";
        var clear = document.createElement('div');
        clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
        clear.on('hover:enter', function () {
          object.searchQuery = "";
          object.geoSearchQuery = "";
          Lampa.Activity.replace(object);
        });
        var geo = document.createElement('div');
        geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
        geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div>".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
        geo.on('hover:enter', function () {
          var itemsGeo = [];
          GeoBase.results.forEach(function (item) {
            itemsGeo.push({
              title: item.english_name,
              id: item.iso_3166_1
            });
          });
          Lampa.Select.show({
            title: Lampa.Lang.translate('nc_networksList'),
            items: itemsGeo,
            onSelect: function onSelect(a) {
              object.geoSearchQuery = a.id;
              Lampa.Activity.replace(object);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });

        //header.appendChild(search)
        //header.appendChild(clear)
        //header.appendChild(geo)
        //header.appendChild(favorites)
        header.appendChild(ncMain);
        header.appendChild(baseInfo);
        if (data.length) {
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
          //this.buildSearch()
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
              object.geoSearchQuery = "";
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

    function createCollectionButton(e) {
      var nc_collection = "<div class=\"full-start__button selector button--nc_collection\">\n        <svg width=\"191\" height=\"239\" viewBox=\"0 0 191 239\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.3438 35.3414V26.7477C35.3438 19.9156 38.0594 13.3543 42.8934 8.51604C47.7297 3.68251 54.2874 0.967027 61.125 0.966431H164.25C171.086 0.966431 177.643 3.68206 182.482 8.51604C187.315 13.3524 190.031 19.91 190.031 26.7477V186.471C190.031 189.87 189.022 193.192 187.133 196.018C185.245 198.844 182.561 201.046 179.421 202.347C176.28 203.647 172.825 203.988 169.492 203.325C166.158 202.662 163.096 201.026 160.692 198.623L155.656 193.587V220.846C155.656 224.245 154.647 227.567 152.758 230.393C150.87 233.219 148.186 235.421 145.046 236.722C141.905 238.022 138.45 238.363 135.117 237.7C131.783 237.037 128.721 235.401 126.317 232.998L78.3125 184.993L30.3078 232.998C27.9041 235.401 24.8419 237.037 21.5084 237.7C18.1748 238.363 14.7195 238.022 11.5794 236.722C8.43922 235.421 5.75517 233.219 3.86654 230.393C1.9779 227.567 0.969476 224.245 0.96875 220.846V61.1227C0.96875 54.2906 3.68437 47.7293 8.51836 42.891C13.3547 38.0575 19.9124 35.342 26.75 35.3414H35.3438ZM138.469 220.846V61.1227C138.469 58.8435 137.563 56.6576 135.952 55.046C134.34 53.4343 132.154 52.5289 129.875 52.5289H26.75C24.4708 52.5289 22.2849 53.4343 20.6733 55.046C19.0617 56.6576 18.1562 58.8435 18.1562 61.1227V220.846L66.1609 172.841C69.3841 169.619 73.755 167.809 78.3125 167.809C82.87 167.809 87.2409 169.619 90.4641 172.841L138.469 220.846ZM155.656 169.284L172.844 186.471V26.7477C172.844 24.4685 171.938 22.2826 170.327 20.671C168.715 19.0593 166.529 18.1539 164.25 18.1539H61.125C58.8458 18.1539 56.6599 19.0593 55.0483 20.671C53.4367 22.2826 52.5312 24.4685 52.5312 26.7477V35.3414H129.875C136.711 35.3414 143.268 38.0571 148.107 42.891C152.94 47.7274 155.656 54.285 155.656 61.1227V169.284Z\" fill=\"currentColor\"/>\n        </svg>\n        <span>".concat(Lampa.Lang.translate('title_collection'), "</span>\n    </div>");
      e.object.activity.render().find('.full-start-new__buttons').append(nc_collection);
      return {
        $id: e.data.movie.belongs_to_collection.id,
        poster_path: e.data.movie.belongs_to_collection.poster_path,
        backdrop_path: e.data.movie.belongs_to_collection.backdrop_path,
        name: e.data.movie.belongs_to_collection.name
      };
    }
    function handleLongHover(card_data) {
      var result = Api.collectionBookmarkSave('collectionBookmarkAdd', card_data);
      if (result === true) {
        console.log('Запись была успешно добавлена.');
        Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
      } else if (result === false) {
        console.error('Не удалось добавить запись.');
        Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
      }
    }
    function handleEnterHover(card_data) {
      Lampa.Activity.push({
        url: '',
        title: card_data.name,
        collectionID: card_data.$id,
        component: 'lmeCollection',
        page: 1
      });
    }
    function setupCollectionButtonHandlers(card_data) {
      $(".button--nc_collection").on("hover:long hover:enter", function (event) {
        if (event.type === "hover:long") {
          handleLongHover(card_data);
        } else if (event.type === "hover:enter") {
          handleEnterHover(card_data);
        }
      });
    }
    function createNetworkTag(name, items, call) {
      var logo = $('<img/>').attr({
        src: Lampa.TMDB.image("t/p/w92" + items[0].logo_path),
        alt: items[0].name
      })[0].outerHTML;
      var elem = $("<div class=\"tag-count selector\">\n        <div class=\"tag-count__name\">".concat(name, "</div>\n        <div class=\"tag-count__count\">").concat(items.length > 1 ? items.length : logo, "</div>\n    </div>"));
      var controller = Lampa.Controller.enabled().name;
      elem.on('hover:enter', function () {
        if (items.length > 1) {
          var select = items.map(function (a) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = Lampa.TMDB.image("t/p/w154" + a.logo_path);
            img.onload = function () {
              var canvas = document.createElement('canvas');
              var context = canvas.getContext('2d');
              canvas.width = img.width;
              canvas.height = img.height;
              context.drawImage(img, 0, 0, img.width, img.height);
              var imageData = context.getImageData(0, 0, img.width, img.height);
              var data = imageData.data;
              var isDark = true;
              for (var i = 0; i < data.length; i += 4) {
                var brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255 * 100;
                if (brightness > 50) {
                  isDark = false;
                  break;
                }
              }
              if (isDark) {
                document.getElementById("logo-".concat(a.id)).style.filter = 'invert(1)';
              }
            };
            return {
              title: "<div style=\"display: inline-block; padding: 5px;\">\n                    <img id=\"logo-".concat(a.id, "\" src=\"").concat(img.src, "\" alt=\"").concat(a.name, "\" />\n                </div>"),
              elem: a
            };
          });
          Lampa.Select.show({
            title: name,
            items: select,
            onSelect: function onSelect(a) {
              Lampa.Controller.toggle(controller);
              call(a.elem);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle(controller);
            }
          });
        } else {
          call(items[0]);
        }
      });
      return elem;
    }
    function handleNetworkClick(network) {
      var card_data = {
        $id: network.id,
        logo_path: network.logo_path,
        poster_path: network.logo_path,
        name: "".concat(network.name, " ").concat(network.origin_country),
        title: "".concat(network.name, " ").concat(network.origin_country),
        origin_country: network.origin_country
      };
      var enabled = Lampa.Controller.enabled().name;
      var menu = [{
        title: "".concat(Lampa.Lang.translate('nc_openAction'), " New"),
        action: 'open',
        sort_by: 'first_air_date.desc',
        type: 'New',
        card_data: card_data
      }, {
        title: "".concat(Lampa.Lang.translate('nc_openAction'), " Top"),
        action: 'open',
        sort_by: '',
        type: 'Top',
        card_data: card_data
      }, {
        title: Lampa.Lang.translate('nc_bookmarkAdd'),
        action: 'bookmarkAdd',
        card_data: card_data
      }, {
        title: Lampa.Lang.translate('nc_favoriteAdd') + ' New',
        action: 'favorite',
        card_data: card_data,
        type: 'new'
      }, {
        title: Lampa.Lang.translate('nc_favoriteAdd') + ' Top',
        action: 'favorite',
        card_data: card_data,
        type: 'top'
      }];
      Lampa.Select.show({
        title: card_data.name,
        items: menu,
        onBack: function onBack() {
          Lampa.Controller.toggle(enabled);
        },
        onSelect: function onSelect(a) {
          if (a.action === 'favorite') {
            Favorites$1.add(a);
          }
          if (a.action === 'bookmarkAdd') {
            var result = Api.bookmarkSave(a);
            if (result === true) {
              console.log('Запись была успешно добавлена.');
              Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
            } else if (result === false) {
              console.error('Не удалось добавить запись.');
              Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
            }
          }
          if (a.action === 'open') {
            Lampa.Activity.push({
              url: 'discover/tv',
              title: "".concat(a.type, " ").concat(a.card_data.name),
              component: "category_full",
              networks: a.card_data.$id,
              sort_by: a.sort_by,
              source: 'tmdb',
              card_type: true,
              page: 1
            });
          }
        }
      });
    }
    function main$1() {
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite' && e.object.method === 'movie' && Lampa.Storage.field('nc_networksList') === true) {
          if (e.data.movie.belongs_to_collection) {
            var card_data = createCollectionButton(e);
            setupCollectionButtonHandlers(card_data);
          }
        }
        if (e.type === 'complite' && e.object.method === 'tv' && Lampa.Storage.field('nc_networksList') === true) {
          if (e.data.movie.networks && e.data.movie.networks.length > 0) {
            var networkTag = createNetworkTag('Networks', e.data.movie.networks, handleNetworkClick);
            e.object.activity.render().find('.full-descr__tags').append(networkTag);
          }
        }
      });
    }

    var manifest = {
      type: "other",
      version: "5.0.0",
      name: "New category",
      description: "Add new category and TV Show stream service",
      component: "nc"
    };
    var main = function main() {
      // Check Lampa version for v3 API compatibility
      if (Lampa.Manifest.app_digital < 300) {
        console.error('NC Plugin requires Lampa v3.0.0 or higher');
        Lampa.Noty.show('NC Plugin requires Lampa v3.0.0+');
        return;
      }
      if (Lampa.Storage.field('nc_anime') === true || Lampa.Storage.field('nc_cartoon') === true) {
        localStorage.removeItem('nc_anime');
        localStorage.removeItem('nc_cartoon');
      }
      Lampa.Manifest.plugins = manifest;
      Lampa.Component.add('lmeNetworks', component$4);
      Lampa.Component.add('lmeNetworksBookmarks', component$3);
      Lampa.Component.add('lmeCollections', component$2);
      Lampa.Component.add('lmeCollection', component$1);
      Lampa.Component.add('lmeCollectionBookmark', component);
      Lampa.Template.add('ncStyle', "\n        <style>\n            @charset 'UTF-8';.panelNC.blockNC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;gap:10px;padding:10px}@media(max-width:767px){.nc_tv{display:none}}.nc-empty,.nc-main{margin:0 5px}.nc-empty svg,.nc-main svg{display:block;margin:0 auto}.nc-empty div,.nc-main div{text-align:center}div.ncSubmenu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ncSubmenu>svg.ncIcon{margin-right:5px;width:36px;height:36px}div.nc_bookmark{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}div.nc_menu{position:relative}div.nc_badge{left:100%;top:0;margin-left:.5em;margin-top:-1em;background-color:#fff;color:#000;padding:.2em .4em;font-size:.5em;-webkit-border-radius:.5em;border-radius:.5em;font-weight:700;text-transform:uppercase}.lme-catalog.lme-header.lme-error{margin-bottom:2%}.lme-catalog.lme-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.lme-baseInfo{padding:0 0 0 2%}.empty.simple-button.simple-button--invisible.selector.button--clear{margin:auto}.lme-baseInfo,.lme-favorites,.lme-search,.lme-clear,.lme-filter{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:1.5em;padding-right:1.5em;margin-left:.5em;margin-right:.5em}.lme-clear div,.lme-filter div{margin-left:1em}.lme-catalog.category-full .card__img{-o-object-fit:contain;object-fit:contain;padding:5%}.networkLogo{-o-object-fit:contain;object-fit:contain;padding:2%}.networkTitle{position:absolute;top:8px;left:8px;background-color:rgba(0,0,0,0.6);color:white;padding:4px 8px;-webkit-border-radius:4px;border-radius:4px;line-height:1.2;z-index:1}\n        </style>\n    ");
      lang.data();
      config.setting();
      // Menu 2.0
      var submenuCatalogkeys = Object.keys(localStorage).filter(function (key) {
        return key.indexOf('nc_') === 0;
      });
      function addsubmenu(category) {
        switch (category) {
          case 'nc_cartoon':
          case 'nc_documentary':
          case 'nc_networksList':
          case 'nc_documentary2':
          case 'nc_lmeCollections':
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
                Lampa.Noty.show(Lampa.Lang.translate('nc_favoriteMigrate'));
              } else {
                console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441 \u043A\u043B\u044E\u0447\u043E\u043C ".concat(Lampa.Storage.get(category), " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 localStorage."));
              }
            }
        }
      }

      // Menu 2.0
      submenuCatalogkeys.forEach(addsubmenu);
      $('body').append(Lampa.Template.get('ncStyle', {}, true));
      //Get Stream in card
      main$1();
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
