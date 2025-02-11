(function () {
    'use strict';

    var url;
    var network = new Lampa.Reguest();
    function init() {
      Lampa.Storage.set('parser_torrent_type', Lampa.Storage.get('parser_torrent_type') || 'jackett');
      var source = {
        title: Lampa.Lang.translate('title_parser'),
        search: function search(params, oncomplite) {
          get({
            search: decodeURIComponent(params.query),
            other: true,
            from_search: true
          }, function (json) {
            json.title = Lampa.Lang.translate('title_parser');
            json.results = json.Results.slice(0, 20);
            json.Results = null;
            json.results.forEach(function (element) {
              element.Title = Lampa.Utils.shortText(element.Title, 110);
            });
            oncomplite(json.results.length ? [json] : []);
          }, function () {
            oncomplite([]);
          });
        },
        onCancel: function onCancel() {
          network.clear();
        },
        params: {
          lazy: true,
          align_left: true,
          isparser: true,
          card_events: {
            onMenu: function onMenu() {}
          }
        },
        onMore: function onMore(params, close) {
          close();
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('title_torrents'),
            component: 'torrents',
            search: params.query,
            from_search: true,
            noinfo: true,
            movie: {
              title: params.query,
              original_title: '',
              img: './img/img_broken.svg',
              genres: []
            },
            page: 1
          });
        },
        onSelect: function onSelect(params, close) {
          Lampa.Torrent.start(params.element, {
            title: params.element.Title
          });
          Lampa.Torrent.back(params.line.toggle.bind(params.line));
        }
      };
      function addSource() {
        var reg = Lampa.Platform.is('android') ? true : Lampa.Torserver.url();
        if (Lampa.Storage.field('parse_in_search') && reg) Lampa.Search.addSource(source);
      }
      Lampa.Storage.listener.follow('change', function (e) {
        if (e.name == 'parse_in_search' || e.name == 'torrserver_url' || e.name == 'torrserver_url_two' || e.name == 'torrserver_use_link') {
          Lampa.Search.removeSource(source);
          addSource();
        }
      });
      addSource();
    }
    function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      function complite(data) {
        oncomplite(data);
      }
      function error(e) {
        onerror(e);
      }
      if (Lampa.Storage.field('parser_torrent_type') == 'jackett') {
        if (Lampa.Storage.field('jackett_url')) {
          url = Lampa.Utils.checkEmptyUrl(Lampa.Storage.field('jackett_url'));
          var ignore = false; //params.from_search && !url.match(/\d+\.\d+\.\d+/g)

          if (ignore) error('');else {
            jackett(params, complite, error);
          }
        } else {
          error(Lampa.Lang.translate('torrent_parser_set_link') + ': Jackett');
        }
      } else if (Lampa.Storage.field('parser_torrent_type') == 'prowlarr') {
        if (Lampa.Storage.field('prowlarr_url')) {
          url = Lampa.Utils.checkEmptyUrl(Lampa.Storage.field('prowlarr_url'));
          prowlarr(params, complite, error);
        } else {
          error(Lampa.Lang.translate('torrent_parser_set_link') + ': Prowlarr');
        }
      } else if (Lampa.Storage.field('parser_torrent_type') == 'torrserver') {
        if (Lampa.Storage.field(Lampa.Storage.field('torrserver_use_link') == 'two' ? 'torrserver_url_two' : 'torrserver_url')) {
          url = Lampa.Utils.checkEmptyUrl(Lampa.Storage.field(Lampa.Storage.field('torrserver_use_link') == 'two' ? 'torrserver_url_two' : 'torrserver_url'));
          torrserver(params, complite, error);
        } else {
          error(Lampa.Lang.translate('torrent_parser_set_link') + ': TorrServer');
        }
      }
    }
    function viewed(hash) {
      var view = Lampa.Storage.cache('torrents_view', 5000, []);
      return view.indexOf(hash) > -1;
    }
    function jackett() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      network.timeout(1000 * Lampa.Storage.field('parse_timeout'));
      var u = url + '/api/v2.0/indexers/' + (Lampa.Storage.field('jackett_interview') === 'healthy' ? 'status:healthy' : 'all') + '/results?apikey=' + Lampa.Storage.field('jackett_key') + '&Tracker%5B%5D=noname-clubl&Tracker%5B%5D=kinozal-magnet&Tracker%5B%5D=rutracker&Category%5B%5D=3020&Category%5B%5D=100048&Category%5B%5D=100258&Category%5B%5D=100883&Category%5B%5D=100955&Query=' + encodeURIComponent(params.search);
      if (!params.from_search) {
        var genres = params.movie.genres.map(function (a) {
          return a.name;
        });
        if (!params.clarification) {
          u = Lampa.Utils.addUrlComponent(u, 'title=' + encodeURIComponent(params.movie.title));
          u = Lampa.Utils.addUrlComponent(u, 'title_original=' + encodeURIComponent(params.movie.original_title));
        }
        u = Lampa.Utils.addUrlComponent(u, 'year=' + encodeURIComponent(((params.movie.release_date || params.movie.first_air_date || '0000') + '').slice(0, 4)));
        u = Lampa.Utils.addUrlComponent(u, 'is_serial=' + (params.movie.original_name ? '2' : params.other ? '0' : '1'));
        u = Lampa.Utils.addUrlComponent(u, 'genres=' + encodeURIComponent(genres.join(',')));
        u = Lampa.Utils.addUrlComponent(u, 'Category[]=' + (params.movie.number_of_seasons > 0 ? 5000 : 2000) + (params.movie.original_language == 'ja' ? ',5070' : ''));
      }
      network["native"](u, function (json) {
        if (json.Results) {
          json.Results = json.Results.filter(function (element) {
            return element.TrackerId !== "toloka";
          });
          json.Results.forEach(function (element) {
            element.PublisTime = Lampa.Utils.strToTime(element.PublishDate);
            element.hash = Lampa.Utils.hash(element.Title);
            element.viewed = viewed(element.hash);
            element.size = Lampa.Utils.bytesToSize(element.Size);
          });
          oncomplite(json);
        } else onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
      }, function (a, c) {
        onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
      });
    }

    // доки https://wiki.servarr.com/en/prowlarr/search#search-feed
    function prowlarr() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      var q = [];
      q.push({
        name: 'apikey',
        value: Lampa.Storage.field('prowlarr_key')
      });
      q.push({
        name: 'query',
        value: params.search
      });
      if (!params.from_search) {
        var isSerial = !!params.movie.original_name;
        if (params.movie.number_of_seasons > 0) {
          q.push({
            name: 'categories',
            value: '5000'
          });
        }
        if (params.movie.original_language == 'ja') {
          q.push({
            name: 'categories',
            value: '5070'
          });
        }
        q.push({
          name: 'type',
          value: isSerial ? 'tvsearch' : 'search'
        });
      }
      var u = Lampa.Utils.buildUrl(url, '/api/v1/search', q);
      network.timeout(1000 * Lampa.Storage.field('parse_timeout'));
      network["native"](u, function (json) {
        if (Array.isArray(json)) {
          oncomplite({
            Results: json.filter(function (e) {
              return e.protocol === 'torrent';
            }).map(function (e) {
              var hash = Lampa.Utils.hash(e.title);
              return {
                Title: e.title,
                Tracker: e.indexer,
                size: Lampa.Utils.bytesToSize(e.size),
                PublishDate: Lampa.Utils.strToTime(e.publishDate),
                Seeders: parseInt(e.seeders),
                Peers: parseInt(e.leechers),
                MagnetUri: e.downloadUrl,
                viewed: viewed(hash),
                hash: hash
              };
            })
          });
        } else {
          onerror(Lampa.Lang.translate('torrent_parser_request_error') + ' (' + JSON.stringify(json) + ')');
        }
      }, function () {
        onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
      });
    }
    function torrserver() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      network.timeout(1000 * Lampa.Storage.field('parse_timeout'));
      var u = Lampa.Utils.buildUrl(url, '/search/', [{
        name: 'query',
        value: params.search
      }]);
      network["native"](u, function (json) {
        if (Array.isArray(json)) {
          oncomplite({
            Results: json.map(function (e) {
              var hash = Lampa.Utils.hash(e.Title);
              return {
                Title: e.Title,
                Tracker: e.Tracker,
                size: e.Size,
                PublishDate: Lampa.Utils.strToTime(e.CreateDate),
                Seeders: parseInt(e.Seed),
                Peers: parseInt(e.Peer),
                MagnetUri: e.Magnet,
                viewed: viewed(hash),
                CategoryDesc: e.Categories,
                bitrate: '-',
                hash: hash
              };
            })
          });
        } else onerror(Lampa.Lang.translate('torrent_parser_request_error') + ' (' + JSON.stringify(json) + ')');
      }, function (a, c) {
        onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
      });
    }
    function clear() {
      network.clear();
    }
    var Parser = {
      init: init,
      get: get,
      jackett: jackett,
      clear: clear
    };

    function component(object) {
      console.log('object', object);
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      var files = new Lampa.Explorer(object);
      var filter;
      var results = [];
      var filtred = [];
      var total_pages = 1;
      var last;
      var initialized;
      var filter_items = {
        quality: [Lampa.Lang.translate('torrent_parser_any_one'), '4k', '1080p', '720p'],
        hdr: [Lampa.Lang.translate('torrent_parser_no_choice'), Lampa.Lang.translate('torrent_parser_yes'), Lampa.Lang.translate('torrent_parser_no')],
        dv: [Lampa.Lang.translate('torrent_parser_no_choice'), 'Dolby Vision', 'Dolby Vision TV', Lampa.Lang.translate('torrent_parser_no')],
        sub: [Lampa.Lang.translate('torrent_parser_no_choice'), Lampa.Lang.translate('torrent_parser_yes'), Lampa.Lang.translate('torrent_parser_no')],
        voice: [],
        tracker: [Lampa.Lang.translate('torrent_parser_any_two')],
        year: [Lampa.Lang.translate('torrent_parser_any_two')],
        lang: [Lampa.Lang.translate('torrent_parser_any_two')]
      };
      var filter_translate = {
        quality: Lampa.Lang.translate('torrent_parser_quality'),
        hdr: 'HDR',
        dv: 'Dolby Vision',
        sub: Lampa.Lang.translate('torrent_parser_subs'),
        voice: Lampa.Lang.translate('torrent_parser_voice'),
        tracker: Lampa.Lang.translate('torrent_parser_tracker'),
        year: Lampa.Lang.translate('torrent_parser_year'),
        season: Lampa.Lang.translate('torrent_parser_season'),
        lang: Lampa.Lang.translate('title_language_short')
      };
      var filter_multiple = ['quality', 'voice', 'tracker', 'season', 'lang'];
      var sort_translate = {
        Seeders: Lampa.Lang.translate('torrent_parser_sort_by_seeders'),
        Size: Lampa.Lang.translate('torrent_parser_sort_by_size'),
        Title: Lampa.Lang.translate('torrent_parser_sort_by_name'),
        Tracker: Lampa.Lang.translate('torrent_parser_sort_by_tracker'),
        PublisTime: Lampa.Lang.translate('torrent_parser_sort_by_date'),
        viewed: Lampa.Lang.translate('torrent_parser_sort_by_viewed')
      };
      var i = 20,
        y = new Date().getFullYear();
      while (i--) {
        filter_items.year.push(y - (19 - i) + '');
      }
      var viewed = Lampa.Storage.cache('torrents_view', 5000, []);
      var finded_seasons = [];
      var finded_seasons_full = [];
      var voices = ["Laci", "Kerob", "LE-Production", "Parovoz Production", "Paradox", "Omskbird", "LostFilm", "Причудики", "BaibaKo", "NewStudio", "AlexFilm", "FocusStudio", "Gears Media", "Jaskier", "ViruseProject", "Кубик в Кубе", "IdeaFilm", "Sunshine Studio", "Ozz.tv", "Hamster Studio", "Сербин", "To4ka", "Кравец", "Victory-Films", "SNK-TV", "GladiolusTV", "Jetvis Studio", "ApofysTeam", "ColdFilm", "Agatha Studdio", "KinoView", "Jimmy J.", "Shadow Dub Project", "Amedia", "Red Media", "Selena International", "Гоблин", "Universal Russia", "Kiitos", "Paramount Comedy", "Кураж-Бамбей", "Студия Пиратского Дубляжа", "Чадов", "Карповский", "RecentFilms", "Первый канал", "Alternative Production", "NEON Studio", "Колобок", "Дольский", "Синема УС", "Гаврилов", "Живов", "SDI Media", "Алексеев", "GreenРай Studio", "Михалев", "Есарев", "Визгунов", "Либергал", "Кузнецов", "Санаев", "ДТВ", "Дохалов", "Sunshine Studio", "Горчаков", "LevshaFilm", "CasStudio", "Володарский", "ColdFilm", "Шварко", "Карцев", "ETV+", "ВГТРК", "Gravi-TV", "1001cinema", "Zone Vision Studio", "Хихикающий доктор", "Murzilka", "turok1990", "FOX", "STEPonee", "Elrom", "Колобок", "HighHopes", "SoftBox", "GreenРай Studio", "NovaFilm", "Четыре в квадрате", "Greb&Creative", "MUZOBOZ", "ZM-Show", "RecentFilms", "Kerems13", "Hamster Studio", "New Dream Media", "Игмар", "Котов", "DeadLine Studio", "Jetvis Studio", "РенТВ", "Андрей Питерский", "Fox Life", "Рыбин", "Trdlo.studio", "Studio Victory Аsia", "Ozeon", "НТВ", "CP Digital", "AniLibria", "STEPonee", "Levelin", "FanStudio", "Cmert", "Интерфильм", "SunshineStudio", "Kulzvuk Studio", "Кашкин", "Вартан Дохалов", "Немахов", "Sedorelli", "СТС", "Яроцкий", "ICG", "ТВЦ", "Штейн", "AzOnFilm", "SorzTeam", "Гаевский", "Мудров", "Воробьев Сергей", "Студия Райдо", "DeeAFilm Studio", "zamez", "ViruseProject", "Иванов", "STEPonee", "РенТВ", "СВ-Дубль", "BadBajo", "Комедия ТВ", "Мастер Тэйп", "5-й канал СПб", "SDI Media", "Гланц", "Ох! Студия", "СВ-Кадр", "2x2", "Котова", "Позитив", "RusFilm", "Назаров", "XDUB Dorama", "Реальный перевод", "Kansai", "Sound-Group", "Николай Дроздов", "ZEE TV", "Ozz.tv", "MTV", "Сыендук", "GoldTeam", "Белов", "Dream Records", "Яковлев", "Vano", "SilverSnow", "Lord32x", "Filiza Studio", "Sony Sci-Fi", "Flux-Team", "NewStation", "XDUB Dorama", "Hamster Studio", "Dream Records", "DexterTV", "ColdFilm", "Good People", "RusFilm", "Levelin", "AniDUB", "SHIZA Project", "AniLibria.TV", "StudioBand", "AniMedia", "Kansai", "Onibaku", "JWA Project", "MC Entertainment", "Oni", "Jade", "Ancord", "ANIvoice", "Nika Lenina", "Bars MacAdams", "JAM", "Anika", "Berial", "Kobayashi", "Cuba77", "RiZZ_fisher", "OSLIKt", "Lupin", "Ryc99", "Nazel & Freya", "Trina_D", "JeFerSon", "Vulpes Vulpes", "Hamster", "KinoGolos", "Fox Crime", "Денис Шадинский", "AniFilm", "Rain Death", "LostFilm", "New Records", "Ancord", "Первый ТВЧ", "RG.Paravozik", "Profix Media", "Tycoon", "RealFake", "HDrezka", "Jimmy J.", "AlexFilm", "Discovery", "Viasat History", "AniMedia", "JAM", "HiWayGrope", "Ancord", "СВ-Дубль", "Tycoon", "SHIZA Project", "GREEN TEA", "STEPonee", "AlphaProject", "AnimeReactor", "Animegroup", "Shachiburi", "Persona99", "3df voice", "CactusTeam", "AniMaunt", "AniMedia", "AnimeReactor", "ShinkaDan", "Jaskier", "ShowJet", "RAIM", "RusFilm", "Victory-Films", "АрхиТеатр", "Project Web Mania", "ko136", "КураСгречей", "AMS", "СВ-Студия", "Храм Дорам ТВ", "TurkStar", "Медведев", "Рябов", "BukeDub", "FilmGate", "FilmsClub", "Sony Turbo", "ТВЦ", "AXN Sci-Fi", "NovaFilm", "DIVA Universal", "Курдов", "Неоклассика", "fiendover", "SomeWax", "Логинофф", "Cartoon Network", "Sony Turbo", "Loginoff", "CrezaStudio", "Воротилин", "LakeFilms", "Andy", "CP Digital", "XDUB Dorama + Колобок", "SDI Media", "KosharaSerials", "Екатеринбург Арт", "Julia Prosenuk", "АРК-ТВ Studio", "Т.О Друзей", "Anifilm", "Animedub", "AlphaProject", "Paramount Channel", "Кириллица", "AniPLague", "Видеосервис", "JoyStudio", "HighHopes", "TVShows", "AniFilm", "GostFilm", "West Video", "Формат AB", "Film Prestige", "West Video", "Екатеринбург Арт", "SovetRomantica", "РуФилмс", "AveBrasil", "Greb&Creative", "BTI Studios", "Пифагор", "Eurochannel", "NewStudio", "Кармен Видео", "Кошкин", "Кравец", "Rainbow World", "Воротилин", "Варус-Видео", "ClubFATE", "HiWay Grope", "Banyan Studio", "Mallorn Studio", "Asian Miracle Group", "Эй Би Видео", "AniStar", "Korean Craze", "LakeFilms", "Невафильм", "Hallmark", "Netflix", "Mallorn Studio", "Sony Channel", "East Dream", "Bonsai Studio", "Lucky Production", "Octopus", "TUMBLER Studio", "CrazyCatStudio", "Amber", "Train Studio", "Анастасия Гайдаржи", "Мадлен Дюваль", "Fox Life", "Sound Film", "Cowabunga Studio", "Фильмэкспорт", "VO-Production", "Sound Film", "Nickelodeon", "MixFilm", "GreenРай Studio", "Sound-Group", "Back Board Cinema", "Кирилл Сагач", "Bonsai Studio", "Stevie", "OnisFilms", "MaxMeister", "Syfy Universal", "TUMBLER Studio", "NewStation", "Neo-Sound", "Муравский", "IdeaFilm", "Рутилов", "Тимофеев", "Лагута", "Дьяконов", "Zone Vision Studio", "Onibaku", "AniMaunt", "Voice Project", "AniStar", "Пифагор", "VoicePower", "StudioFilms", "Elysium", "AniStar", "BeniAffet", "Selena International", "Paul Bunyan", "CoralMedia", "Кондор", "Игмар", "ViP Premiere", "FireDub", "AveTurk", "Sony Sci-Fi", "Янкелевич", "Киреев", "Багичев", "2x2", "Лексикон", "Нота", "Arisu", "Superbit", "AveDorama", "VideoBIZ", "Киномания", "DDV", "Alternative Production", "WestFilm", "Анастасия Гайдаржи + Андрей Юрченко", "Киномания", "Agatha Studdio", "GreenРай Studio", "VSI Moscow", "Horizon Studio", "Flarrow Films", "Amazing Dubbing", "Asian Miracle Group", "Видеопродакшн", "VGM Studio", "FocusX", "CBS Drama", "NovaFilm", "Novamedia", "East Dream", "Дасевич", "Анатолий Гусев", "Twister", "Морозов", "NewComers", "kubik&ko", "DeMon", "Анатолий Ашмарин", "Inter Video", "Пронин", "AMC", "Велес", "Volume-6 Studio", "Хоррор Мэйкер", "Ghostface", "Sephiroth", "Акира", "Деваль Видео", "RussianGuy27", "neko64", "Shaman", "Franek Monk", "Ворон", "Andre1288", "Selena International", "GalVid", "Другое кино", "Студия NLS", "Sam2007", "HaseRiLLoPaW", "Севастьянов", "D.I.M.", "Марченко", "Журавлев", "Н-Кино", "Lazer Video", "SesDizi", "Red Media", "Рудой", "Товбин", "Сергей Дидок", "Хуан Рохас", "binjak", "Карусель", "Lizard Cinema", "Варус-Видео", "Акцент", "RG.Paravozik", "Max Nabokov", "Barin101", "Васька Куролесов", "Фортуна-Фильм", "Amalgama", "AnyFilm", "Студия Райдо", "Козлов", "Zoomvision Studio", "Пифагор", "Urasiko", "VIP Serial HD", "НСТ", "Кинолюкс", "Project Web Mania", "Завгородний", "AB-Video", "Twister", "Universal Channel", "Wakanim", "SnowRecords", "С.Р.И", "Старый Бильбо", "Ozz.tv", "Mystery Film", "РенТВ", "Латышев", "Ващенко", "Лайко", "Сонотек", "Psychotronic", "DIVA Universal", "Gremlin Creative Studio", "Нева-1", "Максим Жолобов", "Good People", "Мобильное телевидение", "Lazer Video", "IVI", "DoubleRec", "Milvus", "RedDiamond Studio", "Astana TV", "Никитин", "КТК", "D2Lab", "НСТ", "DoubleRec", "Black Street Records", "Останкино", "TatamiFilm", "Видеобаза", "Crunchyroll", "Novamedia", "RedRussian1337", "КонтентикOFF", "Creative Sound", "HelloMickey Production", "Пирамида", "CLS Media", "Сонькин", "Мастер Тэйп", "Garsu Pasaulis", "DDV", "IdeaFilm", "Gold Cinema", "Че!", "Нарышкин", "Intra Communications", "OnisFilms", "XDUB Dorama", "Кипарис", "Королёв", "visanti-vasaer", "Готлиб", "Paramount Channel", "СТС", "диктор CDV", "Pazl Voice", "Прямостанов", "Zerzia", "НТВ", "MGM", "Дьяков", "Вольга", "АРК-ТВ Studio", "Дубровин", "МИР", "Netflix", "Jetix", "Кипарис", "RUSCICO", "Seoul Bay", "Филонов", "Махонько", "Строев", "Саня Белый", "Говинда Рага", "Ошурков", "Horror Maker", "Хлопушка", "Хрусталев", "Антонов Николай", "Золотухин", "АрхиАзия", "Попов", "Ultradox", "Мост-Видео", "Альтера Парс", "Огородников", "Твин", "Хабар", "AimaksaLTV", "ТНТ", "FDV", "3df voice", "The Kitchen Russia", "Ульпаней Эльром", "Видеоимпульс", "GoodTime Media", "Alezan", "True Dubbing Studio", "FDV", "Карусель", "Интер", "Contentica", "Мельница", "RealFake", "ИДДК", "Инфо-фильм", "Мьюзик-трейд", "Кирдин | Stalk", "ДиоНиК", "Стасюк", "TV1000", "Hallmark", "Тоникс Медиа", "Бессонов", "Gears Media", "Бахурани", "NewDub", "Cinema Prestige", "Набиев", "New Dream Media", "ТВ3", "Малиновский Сергей", "Superbit", "Кенс Матвей", "LE-Production", "Voiz", "Светла", "Cinema Prestige", "JAM", "LDV", "Videogram", "Индия ТВ", "RedDiamond Studio", "Герусов", "Элегия фильм", "Nastia", "Семыкина Юлия", "Электричка", "Штамп Дмитрий", "Пятница", "Oneinchnales", "Gravi-TV", "D2Lab", "Кинопремьера", "Бусов Глеб", "LE-Production", "1001cinema", "Amazing Dubbing", "Emslie", "1+1", "100 ТВ", "1001 cinema", "2+2", "2х2", "3df voice", "4u2ges", "5 канал", "A. Lazarchuk", "AAA-Sound", "AB-Video", "AdiSound", "ALEKS KV", "AlexFilm", "AlphaProject", "Alternative Production", "Amalgam", "AMC", "Amedia", "AMS", "Andy", "AniLibria", "AniMedia", "Animegroup", "Animereactor", "AnimeSpace Team", "Anistar", "AniUA", "AniWayt", "Anything-group", "AOS", "Arasi project", "ARRU Workshop", "AuraFilm", "AvePremier", "AveTurk", "AXN Sci-Fi", "Azazel", "AzOnFilm", "BadBajo", "BadCatStudio", "BBC Saint-Petersburg", "BD CEE", "Black Street Records", "Bonsai Studio", "Boльгa", "Brain Production", "BraveSound", "BTI Studios", "Bubble Dubbing Company", "Byako Records", "Cactus Team", "Cartoon Network", "CBS Drama", "CDV", "Cinema Prestige", "CinemaSET GROUP", "CinemaTone", "ColdFilm", "Contentica", "CP Digital", "CPIG", "Crunchyroll", "Cuba77", "D1", "D2lab", "datynet", "DDV", "DeadLine", "DeadSno", "DeMon", "den904", "Description", "DexterTV", "Dice", "Discovery", "DniproFilm", "DoubleRec", "DreamRecords", "DVD Classic", "East Dream", "Eladiel", "Elegia", "ELEKTRI4KA", "Elrom", "ELYSIUM", "Epic Team", "eraserhead", "erogg", "Eurochannel", "Extrabit", "F-TRAIN", "Family Fan Edition", "FDV", "FiliZa Studio", "Film Prestige", "FilmGate", "FilmsClub", "FireDub", "Flarrow Films", "Flux-Team", "FocusStudio", "FOX", "Fox Crime", "Fox Russia", "FoxLife", "Foxlight", "Franek Monk", "Gala Voices", "Garsu Pasaulis", "Gears Media", "Gemini", "General Film", "GetSmart", "Gezell Studio", "Gits", "GladiolusTV", "GoldTeam", "Good People", "Goodtime Media", "GoodVideo", "GostFilm", "Gramalant", "Gravi-TV", "GREEN TEA", "GreenРай Studio", "Gremlin Creative Studio", "Hallmark", "HamsterStudio", "HiWay Grope", "Horizon Studio", "hungry_inri", "ICG", "ICTV", "IdeaFilm", "IgVin &amp; Solncekleshka", "ImageArt", "INTERFILM", "Ivnet Cinema", "IНТЕР", "Jakob Bellmann", "JAM", "Janetta", "Jaskier", "JeFerSon", "jept", "JetiX", "Jetvis", "JimmyJ", "KANSAI", "KIHO", "kiitos", "KinoGolos", "Kinomania", "KosharaSerials", "Kолобок", "L0cDoG", "LakeFilms", "LDV", "LE-Production", "LeDoyen", "LevshaFilm", "LeXiKC", "Liga HQ", "Line", "Lisitz", "Lizard Cinema Trade", "Lord32x", "lord666", "LostFilm", "Lucky Production", "Macross", "madrid", "Mallorn Studio", "Marclail", "Max Nabokov", "MC Entertainment", "MCA", "McElroy", "Mega-Anime", "Melodic Voice Studio", "metalrus", "MGM", "MifSnaiper", "Mikail", "Milirina", "MiraiDub", "MOYGOLOS", "MrRose", "MTV", "Murzilka", "MUZOBOZ", "National Geographic", "NemFilm", "Neoclassica", "NEON Studio", "New Dream Media", "NewComers", "NewStation", "NewStudio", "Nice-Media", "Nickelodeon", "No-Future", "NovaFilm", "Novamedia", "Octopus", "Oghra-Brown", "OMSKBIRD", "Onibaku", "OnisFilms", "OpenDub", "OSLIKt", "Ozz TV", "PaDet", "Paramount Comedy", "Paramount Pictures", "Parovoz Production", "PashaUp", "Paul Bunyan", "Pazl Voice", "PCB Translate", "Persona99", "PiratVoice", "Postmodern", "Profix Media", "Project Web Mania", "Prolix", "QTV", "R5", "Radamant", "RainDeath", "RATTLEBOX", "RealFake", "Reanimedia", "Rebel Voice", "RecentFilms", "Red Media", "RedDiamond Studio", "RedDog", "RedRussian1337", "Renegade Team", "RG Paravozik", "RinGo", "RoxMarty", "Rumble", "RUSCICO", "RusFilm", "RussianGuy27", "Saint Sound", "SakuraNight", "Satkur", "Sawyer888", "Sci-Fi Russia", "SDI Media", "Selena", "seqw0", "SesDizi", "SGEV", "Shachiburi", "SHIZA", "ShowJet", "Sky Voices", "SkyeFilmTV", "SmallFilm", "SmallFilm", "SNK-TV", "SnowRecords", "SOFTBOX", "SOLDLUCK2", "Solod", "SomeWax", "Sony Channel", "Sony Turbo", "Sound Film", "SpaceDust", "ssvss", "st.Elrom", "STEPonee", "SunshineStudio", "Superbit", "Suzaku", "sweet couple", "TatamiFilm", "TB5", "TF-AniGroup", "The Kitchen Russia", "The Mike Rec.", "Timecraft", "To4kaTV", "Tori", "Total DVD", "TrainStudio", "Troy", "True Dubbing Studio", "TUMBLER Studio", "turok1990", "TV 1000", "TVShows", "Twister", "Twix", "Tycoon", "Ultradox", "Universal Russia", "VashMax2", "VendettA", "VHS", "VicTeam", "VictoryFilms", "Video-BIZ", "Videogram", "ViruseProject", "visanti-vasaer", "VIZ Media", "VO-production", "Voice Project Studio", "VoicePower", "VSI Moscow", "VulpesVulpes", "Wakanim", "Wayland team", "WestFilm", "WiaDUB", "WVoice", "XL Media", "XvidClub Studio", "zamez", "ZEE TV", "Zendos", "ZM-SHOW", "Zone Studio", "Zone Vision", "Агапов", "Акопян", "Алексеев", "Артемьев", "Багичев", "Бессонов", "Васильев", "Васильцев", "Гаврилов", "Герусов", "Готлиб", "Григорьев", "Дасевич", "Дольский", "Карповский", "Кашкин", "Киреев", "Клюквин", "Костюкевич", "Матвеев", "Михалев", "Мишин", "Мудров", "Пронин", "Савченко", "Смирнов", "Тимофеев", "Толстобров", "Чуев", "Шуваев", "Яковлев", "ААА-sound", "АБыГДе", "Акалит", "Акира", "Альянс", "Амальгама", "АМС", "АнВад", "Анубис", "Anubis", "Арк-ТВ", "АРК-ТВ Studio", "Б. Федоров", "Бибиков", "Бигыч", "Бойков", "Абдулов", "Белов", "Вихров", "Воронцов", "Горчаков", "Данилов", "Дохалов", "Котов", "Кошкин", "Назаров", "Попов", "Рукин", "Рутилов", "Варус Видео", "Васька Куролесов", "Ващенко С.", "Векшин", "Велес", "Весельчак", "Видеоимпульс", "Витя «говорун»", "Войсовер", "Вольга", "Ворон", "Воротилин", "Г. Либергал", "Г. Румянцев", "Гей Кино Гид", "ГКГ", "Глуховский", "Гризли", "Гундос", "Деньщиков", "Есарев", "Нурмухаметов", "Пучков", "Стасюк", "Шадинский", "Штамп", "sf@irat", "Держиморда", "Домашний", "ДТВ", "Дьяконов", "Е. Гаевский", "Е. Гранкин", "Е. Лурье", "Е. Рудой", "Е. Хрусталёв", "ЕА Синема", "Екатеринбург Арт", "Живаго", "Жучков", "З Ранку До Ночі", "Завгородний", "Зебуро", "Зереницын", "И. Еремеев", "И. Клушин", "И. Сафронов", "И. Степанов", "ИГМ", "Игмар", "ИДДК", "Имидж-Арт", "Инис", "Ирэн", "Ист-Вест", "К. Поздняков", "К. Филонов", "К9", "Карапетян", "Кармен Видео", "Карусель", "Квадрат Малевича", "Килька", "Кипарис", "Королев", "Котова", "Кравец", "Кубик в Кубе", "Кураж-Бамбей", "Л. Володарский", "Лазер Видео", "ЛанселаП", "Лапшин", "Лексикон", "Ленфильм", "Леша Прапорщик", "Лизард", "Люсьена", "Заугаров", "Иванов", "Иванова и П. Пашут", "Латышев", "Ошурков", "Чадов", "Яроцкий", "Максим Логинофф", "Малиновский", "Марченко", "Мастер Тэйп", "Махонько", "Машинский", "Медиа-Комплекс", "Мельница", "Мика Бондарик", "Миняев", "Мительман", "Мост Видео", "Мосфильм", "Муравский", "Мьюзик-трейд", "Н-Кино", "Н. Антонов", "Н. Дроздов", "Н. Золотухин", "Н.Севастьянов seva1988", "Набиев", "Наталья Гурзо", "НЕВА 1", "Невафильм", "НеЗупиняйПродакшн", "Неоклассика", "Несмертельное оружие", "НЛО-TV", "Новий", "Новый диск", "Новый Дубляж", "Новый Канал", "Нота", "НСТ", "НТВ", "НТН", "Оверлорд", "Огородников", "Омикрон", "Гланц", "Карцев", "Морозов", "Прямостанов", "Санаев", "Парадиз", "Пепелац", "Первый канал ОРТ", "Переводман", "Перец", "Петербургский дубляж", "Петербуржец", "Пирамида", "Пифагор", "Позитив-Мультимедиа", "Прайд Продакшн", "Премьер Видео", "Премьер Мультимедиа", "Причудики", "Р. Янкелевич", "Райдо", "Ракурс", "РенТВ", "Россия", "РТР", "Русский дубляж", "Русский Репортаж", "РуФилмс", "Рыжий пес", "С. Визгунов", "С. Дьяков", "С. Казаков", "С. Кузнецов", "С. Кузьмичёв", "С. Лебедев", "С. Макашов", "С. Рябов", "С. Щегольков", "С.Р.И.", "Сolumbia Service", "Самарский", "СВ Студия", "СВ-Дубль", "Светла", "Селена Интернешнл", "Синема Трейд", "Синема УС", "Синта Рурони", "Синхрон", "Советский", "Сокуров", "Солодухин", "Сонотек", "Сонькин", "Союз Видео", "Союзмультфильм", "СПД - Сладкая парочка", "Строев", "СТС", "Студии Суверенного Лепрозория", "Студия «Стартрек»", "KOleso", "Студия Горького", "Студия Колобок", "Студия Пиратского Дубляжа", "Студия Райдо", "Студия Трёх", "Гуртом", "Супербит", "Сыендук", "Так Треба Продакшн", "ТВ XXI век", "ТВ СПб", "ТВ-3", "ТВ6", "ТВИН", "ТВЦ", "ТВЧ 1", "ТНТ", "ТО Друзей", "Толмачев", "Точка Zрения", "Трамвай-фильм", "ТРК", "Уолт Дисней Компани", "Хихидок", "Хлопушка", "Цікава Ідея", "Четыре в квадрате", "Швецов", "Штамп", "Штейн", "Ю. Живов", "Ю. Немахов", "Ю. Сербин", "Ю. Товбин", "Я. Беллманн", "Red Head Sound", "UKR"];
      var filter_langs = [{
        title: '#{filter_lang_ru}',
        code: 'ru'
      }, {
        title: '#{filter_lang_uk}',
        code: 'uk'
      }, {
        title: '#{filter_lang_en}',
        code: 'en'
      }, {
        title: '#{filter_lang_be}',
        code: 'be'
      }, {
        title: '#{filter_lang_zh}',
        code: 'zh|cn'
      }, {
        title: '#{filter_lang_ja}',
        code: 'ja'
      }, {
        title: '#{filter_lang_ko}',
        code: 'ko'
      }, {
        title: '#{filter_lang_af}',
        code: 'af'
      }, {
        title: '#{filter_lang_sq}',
        code: 'sq'
      }, {
        title: '#{filter_lang_ar}',
        code: 'ar'
      }, {
        title: '#{filter_lang_az}',
        code: 'az'
      }, {
        title: '#{filter_lang_hy}',
        code: 'hy'
      }, {
        title: '#{filter_lang_ba}',
        code: 'ba'
      }, {
        title: '#{filter_lang_bg}',
        code: 'bg'
      }, {
        title: '#{filter_lang_bn}',
        code: 'bn'
      }, {
        title: '#{filter_lang_bs}',
        code: 'bs'
      }, {
        title: '#{filter_lang_ca}',
        code: 'ca'
      }, {
        title: '#{filter_lang_ce}',
        code: 'ce'
      }, {
        title: '#{filter_lang_cs}',
        code: 'cs'
      }, {
        title: '#{filter_lang_da}',
        code: 'da'
      }, {
        title: '#{filter_lang_ka}',
        code: 'ka'
      }, {
        title: '#{filter_lang_de}',
        code: 'de'
      }, {
        title: '#{filter_lang_el}',
        code: 'el'
      }, {
        title: '#{filter_lang_es}',
        code: 'es'
      }, {
        title: '#{filter_lang_et}',
        code: 'et'
      }, {
        title: '#{filter_lang_fa}',
        code: 'fa'
      }, {
        title: '#{filter_lang_fi}',
        code: 'fi'
      }, {
        title: '#{filter_lang_fr}',
        code: 'fr'
      }, {
        title: '#{filter_lang_ga}',
        code: 'ga'
      }, {
        title: '#{filter_lang_gl}',
        code: 'gl'
      }, {
        title: '#{filter_lang_gn}',
        code: 'gn'
      }, {
        title: '#{filter_lang_he}',
        code: 'he'
      }, {
        title: '#{filter_lang_hi}',
        code: 'hi'
      }, {
        title: '#{filter_lang_hr}',
        code: 'hr'
      }, {
        title: '#{filter_lang_hu}',
        code: 'hu'
      }, {
        title: '#{filter_lang_id}',
        code: 'id'
      }, {
        title: '#{filter_lang_is}',
        code: 'is'
      }, {
        title: '#{filter_lang_it}',
        code: 'it'
      }, {
        title: '#{filter_lang_kk}',
        code: 'kk'
      }, {
        title: '#{filter_lang_ks}',
        code: 'ks'
      }, {
        title: '#{filter_lang_ku}',
        code: 'ku'
      }, {
        title: '#{filter_lang_ky}',
        code: 'ky'
      }, {
        title: '#{filter_lang_lt}',
        code: 'lt'
      }, {
        title: '#{filter_lang_lv}',
        code: 'lv'
      }, {
        title: '#{filter_lang_mi}',
        code: 'mi'
      }, {
        title: '#{filter_lang_mk}',
        code: 'mk'
      }, {
        title: '#{filter_lang_mn}',
        code: 'mn'
      }, {
        title: '#{filter_lang_mo}',
        code: 'mo'
      }, {
        title: '#{filter_lang_mt}',
        code: 'mt'
      }, {
        title: '#{filter_lang_no}',
        code: 'no|nb|nn'
      }, {
        title: '#{filter_lang_ne}',
        code: 'ne'
      }, {
        title: '#{filter_lang_nl}',
        code: 'nl'
      }, {
        title: '#{filter_lang_pa}',
        code: 'pa'
      }, {
        title: '#{filter_lang_pl}',
        code: 'pl'
      }, {
        title: '#{filter_lang_ps}',
        code: 'ps'
      }, {
        title: '#{filter_lang_pt}',
        code: 'pt'
      }, {
        title: '#{filter_lang_ro}',
        code: 'ro'
      }, {
        title: '#{filter_lang_si}',
        code: 'si'
      }, {
        title: '#{filter_lang_sk}',
        code: 'sk'
      }, {
        title: '#{filter_lang_sl}',
        code: 'sl'
      }, {
        title: '#{filter_lang_sm}',
        code: 'sm'
      }, {
        title: '#{filter_lang_so}',
        code: 'so'
      }, {
        title: '#{filter_lang_sr}',
        code: 'sr'
      }, {
        title: '#{filter_lang_sv}',
        code: 'sv'
      }, {
        title: '#{filter_lang_sw}',
        code: 'sw'
      }, {
        title: '#{filter_lang_ta}',
        code: 'ta'
      }, {
        title: '#{filter_lang_tg}',
        code: 'tg'
      }, {
        title: '#{filter_lang_th}',
        code: 'th'
      }, {
        title: '#{filter_lang_tk}',
        code: 'tk'
      }, {
        title: '#{filter_lang_tr}',
        code: 'tr'
      }, {
        title: '#{filter_lang_tt}',
        code: 'tt'
      }, {
        title: '#{filter_lang_ur}',
        code: 'ur'
      }, {
        title: '#{filter_lang_uz}',
        code: 'uz'
      }, {
        title: '#{filter_lang_vi}',
        code: 'vi'
      }, {
        title: '#{filter_lang_yi}',
        code: 'yi'
      }];
      filter_items.lang = filter_items.lang.concat(filter_langs.map(function (a) {
        return Lampa.Lang.translate(a.title);
      }));
      scroll.minus(files.render().find('.explorer__files-head'));
      scroll.body().addClass('torrent-list');
      this.create = function () {
        return this.render();
      };
      this.initialize = function () {
        var _this = this;
        this.activity.loader(true);
        if (object.movie.original_language === 'ja' && object.movie.genres.find(function (g) {
          return g.id === 16;
        }) && Lampa.Storage.field('language') !== 'en') {
          network.silent(Lampa.TMDB.api((object.movie.name ? 'tv' : 'movie') + '/' + object.movie.id + '?api_key=' + Lampa.TMDB.key() + '&language=en'), function (result) {
            object.search_two = result.name || result.title;
            _this.parse();
          }, this.parse.bind(this));
        } else {
          this.parse();
        }
        scroll.onEnd = this.next.bind(this);
        return this.render();
      };
      this.parse = function () {
        var _this2 = this;
        filter = new Lampa.Filter(object);
        Parser.get(object, function (data) {
          results = data;
          _this2.build();
          Lampa.Layer.update(scroll.render(true));
          _this2.activity.loader(false);
          _this2.activity.toggle();
        }, function (text) {
          _this2.empty(Lampa.Lang.translate('torrent_error_connect') + ': ' + text);
        });
        filter.onSearch = function (value) {
          Lampa.Activity.replace({
            search: value,
            clarification: true
          });
        };
        filter.onBack = function () {
          _this2.start();
        };
        filter.render().find('.selector').on('hover:focus', function (e) {
          e.target;
        });
        filter.addButtonBack();
        files.appendHead(filter.render());
      };
      this.empty = function (descr) {
        var empty = new Lampa.Empty({
          descr: descr
        });
        files.render().find('.explorer__files-head').addClass('hide');
        files.appendFiles(empty.render(filter.empty()));
        empty.render().find('.simple-button').on('hover:enter', function () {
          filter.render().find('.filter--search').trigger('hover:enter');
        });
        this.start = empty.start;
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.listEmpty = function () {
        var em = Lampa.Template.get('empty_filter');
        var bn = $('<div class="simple-button selector"><span>' + Lampa.Lang.translate('filter_clarify') + '</span></div>');
        bn.on('hover:enter', function () {
          filter.render().find('.filter--filter').trigger('hover:enter');
        });
        em.find('.empty-filter__title').remove();
        em.find('.empty-filter__buttons').removeClass('hide').append(bn);
        scroll.append(em);
      };
      this.buildSorted = function () {
        var need = Lampa.Storage.get('torrents_sort', 'Seeders');
        var select = [{
          title: Lampa.Lang.translate('torrent_parser_sort_by_seeders'),
          sort: 'Seeders'
        }, {
          title: Lampa.Lang.translate('torrent_parser_sort_by_size'),
          sort: 'Size'
        }, {
          title: Lampa.Lang.translate('torrent_parser_sort_by_name'),
          sort: 'Title'
        }, {
          title: Lampa.Lang.translate('torrent_parser_sort_by_tracker'),
          sort: 'Tracker'
        }, {
          title: Lampa.Lang.translate('torrent_parser_sort_by_date'),
          sort: 'PublisTime'
        }, {
          title: Lampa.Lang.translate('torrent_parser_sort_by_viewed'),
          sort: 'viewed'
        }];
        select.forEach(function (element) {
          if (element.sort === need) element.selected = true;
        });
        filter.sort(results.Results, need);
        this.sortWithPopular();
        filter.set('sort', select);
        this.selectedSort();
      };
      this.sortWithPopular = function () {
        var popular = [];
        var other = [];
        results.Results.forEach(function (a) {
          if (a.viewing_request) popular.push(a);else other.push(a);
        });
        popular.sort(function (a, b) {
          return b.viewing_average - a.viewing_average;
        });
        results.Results = popular.concat(other);
      };
      this.cardID = function () {
        return object.movie.id + ':' + (object.movie.number_of_seasons ? 'tv' : 'movie');
      };
      this.getFilterData = function () {
        var all = Lampa.Storage.cache('torrents_filter_data', 500, {});
        var cid = this.cardID();
        return all[cid] || Lampa.Storage.get('torrents_filter', '{}');
      };
      this.setFilterData = function (filter) {
        var all = Lampa.Storage.cache('torrents_filter_data', 500, {});
        var cid = this.cardID();
        all[cid] = filter;
        Lampa.Storage.set('torrents_filter_data', all);
        Lampa.Storage.set('torrents_filter', filter);
      };
      this.buildFilterd = function () {
        var need = this.getFilterData();
        var select = [];
        var add = function add(type, title) {
          var items = filter_items[type];
          var subitems = [];
          var multiple = filter_multiple.indexOf(type) >= 0;
          var value = need[type];
          if (multiple) value = Lampa.Arrays.toArray(value);
          items.forEach(function (name, i) {
            subitems.push({
              title: name,
              //selected: multiple ? i === 0 : value === i,
              checked: multiple && value.indexOf(name) >= 0,
              checkbox: multiple && i > 0,
              noselect: true,
              index: i
            });
          });
          select.push({
            title: title,
            subtitle: multiple ? value.length ? value.join(', ') : items[0] : typeof value === 'undefined' ? items[0] : items[value],
            items: subitems,
            noselect: true,
            stype: type
          });
        };
        filter_items.voice = [Lampa.Lang.translate('torrent_parser_any_two'), Lampa.Lang.translate('torrent_parser_voice_dubbing'), Lampa.Lang.translate('torrent_parser_voice_polyphonic'), Lampa.Lang.translate('torrent_parser_voice_two'), Lampa.Lang.translate('torrent_parser_voice_amateur')];
        filter_items.tracker = [Lampa.Lang.translate('torrent_parser_any_two')];
        filter_items.season = [Lampa.Lang.translate('torrent_parser_any_two')];
        results.Results.forEach(function (element) {
          var title = element.Title.toLowerCase(),
            tracker = element.Tracker;
          for (var _i = 0; _i < voices.length; _i++) {
            var voice = voices[_i].toLowerCase();
            if (title.indexOf(voice) >= 0) {
              if (filter_items.voice.indexOf(voices[_i]) === -1) filter_items.voice.push(voices[_i]);
            }
            if (element.info && element.info.voices) {
              if (element.info.voices.map(function (v) {
                return v.toLowerCase();
              }).indexOf(voice) >= 0) {
                if (filter_items.voice.indexOf(voices[_i]) === -1) filter_items.voice.push(voices[_i]);
              }
            }
          }
          tracker.split(',').forEach(function (t) {
            if (filter_items.tracker.indexOf(t.trim()) === -1) filter_items.tracker.push(t.trim());
          });
          var season = title.match(/.?s\[(\d+)-].?|.?s(\d+).?|.?\((\d+) сезон.?|.?season (\d+),.?/);
          if (season) {
            season = season.filter(function (c) {
              return c;
            });
            if (season.length > 1) {
              var orig = season[1];
              var number = parseInt(orig) + '';
              if (number && finded_seasons.indexOf(number) === -1) {
                finded_seasons.push(number);
                finded_seasons_full.push(orig);
              }
            }
          }
        });
        finded_seasons_full.sort(function (a, b) {
          var ac = parseInt(a);
          var bc = parseInt(b);
          if (ac > bc) return 1;else if (ac < bc) return -1;else return 0;
        });
        finded_seasons.sort(function (a, b) {
          var ac = parseInt(a);
          var bc = parseInt(b);
          if (ac > bc) return 1;else if (ac < bc) return -1;else return 0;
        });
        if (finded_seasons.length) filter_items.season = filter_items.season.concat(finded_seasons);

        //надо очистить от отсутствующих ключей
        need.voice = Lampa.Arrays.removeNoIncludes(Lampa.Arrays.toArray(need.voice), filter_items.voice);
        need.tracker = Lampa.Arrays.removeNoIncludes(Lampa.Arrays.toArray(need.tracker), filter_items.tracker);
        need.season = Lampa.Arrays.removeNoIncludes(Lampa.Arrays.toArray(need.season), filter_items.season);
        this.setFilterData(need);
        select.push({
          title: Lampa.Lang.translate('torrent_parser_reset'),
          reset: true
        });
        add('quality', Lampa.Lang.translate('torrent_parser_quality'));
        add('tracker', Lampa.Lang.translate('torrent_parser_tracker'));
        add('year', Lampa.Lang.translate('torrent_parser_year'));
        filter.set('filter', select);
        this.selectedFilter();
      };
      this.selectedFilter = function () {
        var need = this.getFilterData(),
          select = [];
        for (var _i2 in need) {
          if (need[_i2]) {
            if (Lampa.Arrays.isArray(need[_i2])) {
              if (need[_i2].length) select.push(filter_translate[_i2] + ':' + need[_i2].join(', '));
            } else {
              select.push(filter_translate[_i2] + ': ' + filter_items[_i2][need[_i2]]);
            }
          }
        }
        filter.chosen('filter', select);
      };
      this.selectedSort = function () {
        var select = Lampa.Storage.get('torrents_sort', 'Seeders');
        filter.chosen('sort', [sort_translate[select]]);
      };
      this.build = function () {
        var _this3 = this;
        this.buildSorted();
        this.buildFilterd();
        this.filtred();
        filter.onSelect = function (type, a, b) {
          if (type === 'sort') {
            Lampa.Storage.set('torrents_sort', a.sort);
            filter.sort(results.Results, a.sort);
            _this3.sortWithPopular();
          } else {
            if (a.reset) {
              _this3.setFilterData({});
              _this3.buildFilterd();
            } else {
              a.items.forEach(function (n) {
                return n.checked = false;
              });
              var filter_data = _this3.getFilterData();
              filter_data[a.stype] = filter_multiple.indexOf(a.stype) >= 0 ? [] : b.index;
              a.subtitle = b.title;
              _this3.setFilterData(filter_data);
            }
          }
          _this3.applyFilter();
          _this3.start();
        };
        filter.onCheck = function (type, a, b) {
          var data = _this3.getFilterData(),
            need = Lampa.Arrays.toArray(data[a.stype]);
          if (b.checked && need.indexOf(b.title)) need.push(b.title);else if (!b.checked) Lampa.Arrays.remove(need, b.title);
          data[a.stype] = need;
          _this3.setFilterData(data);
          a.subtitle = need.length ? need.join(', ') : a.items[0].title;
          _this3.applyFilter();
        };
        if (results.Results.length) this.showResults();else {
          this.empty(Lampa.Lang.translate('torrent_parser_empty'));
        }
      };
      this.applyFilter = function () {
        this.filtred();
        this.selectedFilter();
        this.selectedSort();
        this.reset();
        this.showResults();
        last = scroll.render().find('.torrent-item:eq(0)')[0];
        if (last) scroll.update(last);else scroll.reset();
      };
      this.filtred = function () {
        var filter_data = this.getFilterData();
        var filter_any = false;
        for (var _i3 in filter_data) {
          var filr = filter_data[_i3];
          if (filr) {
            if (Lampa.Arrays.isArray(filr)) {
              if (filr.length) filter_any = true;
            } else filter_any = true;
          }
        }
        filtred = results.Results.filter(function (element) {
          if (filter_any) {
            var passed = false,
              nopass = false,
              title = element.Title.toLowerCase(),
              tracker = element.Tracker;
            var qua = Lampa.Arrays.toArray(filter_data.quality),
              hdr = filter_data.hdr,
              dv = filter_data.dv,
              sub = filter_data.sub,
              voi = Lampa.Arrays.toArray(filter_data.voice),
              tra = Lampa.Arrays.toArray(filter_data.tracker),
              ses = Lampa.Arrays.toArray(filter_data.season),
              lng = Lampa.Arrays.toArray(filter_data.lang),
              yer = filter_data.year;
            var test = function test(search, test_index) {
              var regex = new RegExp(search);
              return test_index ? title.indexOf(search) >= 0 : regex.test(title);
            };
            var check = function check(search, invert) {
              if (test(search)) {
                if (invert) nopass = true;else passed = true;
              } else {
                if (invert) passed = true;else nopass = true;
              }
            };
            var includes = function includes(type, arr) {
              if (!arr.length) return;
              var any = false;
              arr.forEach(function (a) {
                if (type === 'quality') {
                  if (a === '4k' && test('(4k|uhd)[ |\\]|,|$]|2160[pр]|ultrahd')) any = true;
                  if (a === '1080p' && test('fullhd|1080[pр]')) any = true;
                  if (a === '720p' && test('720[pр]')) any = true;
                }
                if (type === 'voice') {
                  var p = filter_items.voice.indexOf(a);
                  var n = element.info && element.info.voices ? element.info.voices.map(function (v) {
                    return v.toLowerCase();
                  }) : [];
                  if (p === 1) {
                    if (test('дублирован|дубляж|  apple| dub| d[,| |$]|[,|\\s]дб[,|\\s|$]')) any = true;
                  } else if (p === 2) {
                    if (test('многоголос| p[,| |$]|[,|\\s](лм|пм)[,|\\s|$]')) any = true;
                  } else if (p === 3) {
                    if (test('двухголос|двуголос| l2[,| |$]|[,|\\s](лд|пд)[,|\\s|$]')) any = true;
                  } else if (p === 4) {
                    if (test('любитель|авторский| l1[,| |$]|[,|\\s](ло|ап)[,|\\s|$]')) any = true;
                  } else if (test(a.toLowerCase(), true)) any = true;else if (n.length && n.indexOf(a.toLowerCase()) >= 0) any = true;
                }
                if (type === 'lang') {
                  var _p = filter_items.lang.indexOf(a);
                  var c = filter_langs[_p - 1];
                  if (element.languages) {
                    if (element.languages.find(function (l) {
                      return l.toLowerCase().slice(0, 2) === c.code;
                    })) any = true;
                  } else if (title.indexOf(c.code) >= 0) any = true;
                }
                if (type === 'tracker') {
                  if (tracker.split(',').find(function (t) {
                    return t.trim().toLowerCase() === a.toLowerCase();
                  })) any = true;
                }
                if (type === 'season') {
                  var pad = function pad(n) {
                    return n < 10 && n !== '01' ? '0' + n : n;
                  };
                  var _i4 = finded_seasons.indexOf(a);
                  var f = finded_seasons_full[_i4];
                  var SES1 = title.match(/\[s(\d+)-(\d+)]/);
                  var SES2 = title.match(/season (\d+)-(\d+)/);
                  var SES3 = title.match(/season (\d+) - (\d+).?/);
                  var SES4 = title.match(/сезон: (\d+)-(\d+) \/.?/);
                  if (Array.isArray(SES1) && (f >= SES1[1] && f <= SES1[2] || pad(f) >= SES1[1] && pad(f) <= SES1[2] || f >= pad(SES1[1]) && f <= pad(SES1[2]))) any = true;
                  if (Array.isArray(SES2) && (f >= SES2[1] && f <= SES2[2] || pad(f) >= SES2[1] && pad(f) <= SES2[2] || f >= pad(SES2[1]) && f <= pad(SES2[2]))) any = true;
                  if (Array.isArray(SES3) && (f >= SES3[1] && f <= SES3[2] || pad(f) >= SES3[1] && pad(f) <= SES3[2] || f >= pad(SES3[1]) && f <= pad(SES3[2]))) any = true;
                  if (Array.isArray(SES4) && (f >= SES4[1] && f <= SES4[2] || pad(f) >= SES4[1] && pad(f) <= SES4[2] || f >= pad(SES4[1]) && f <= pad(SES4[2]))) any = true;
                  if (test('.?\\[0' + f + 'x0.?|.?\\[s' + f + '-.?|.?-' + f + '\\].?|.?\\[s0' + f + '\\].?|.?\\[s' + f + '\\].?|.?s' + f + 'e.?|.?s' + f + '-.?|.?сезон: ' + f + ' .?|.?сезон:' + f + '.?|сезон ' + f + ',.?|\\[' + f + ' сезон.?|.?\\(' + f + ' сезон.?|.?season ' + f + '.?')) any = true;
                }
              });
              if (any) passed = true;else nopass = true;
            };
            includes('quality', qua);
            includes('voice', voi);
            includes('tracker', tra);
            includes('season', ses);
            includes('lang', lng);
            if (hdr) check('[\\[| ]hdr[10| |\\]|,|$]', hdr !== 1);
            if (dv === 0) {
              check(filter_items.dv[dv], dv !== 1);
            } else if (dv === 1) {
              check('dolby vision');
            } else if (dv === 2) {
              check('dolby vision tv');
            } else if (dv === 3) {
              check('dolby vision', dv !== 0);
            }
            if (sub) check(' sub|[,|\\s]ст[,|\\s|$]', sub !== 1);
            if (yer) {
              check(filter_items.year[yer]);
            }
            return nopass ? false : passed;
          } else return true;
        });
      };
      this.showResults = function () {
        total_pages = Math.ceil(filtred.length / 20);
        if (filtred.length) {
          this.append(filtred.slice(0, 20));
        } else {
          this.listEmpty();
        }
        files.appendFiles(scroll.render());
      };
      this.reset = function () {
        last = false;
        scroll.clear();
      };
      this.next = function () {
        if (object.page < 15 && object.page < total_pages) {
          object.page++;
          var offset = (object.page - 1) * 20;
          this.append(filtred.slice(offset, offset + 20), true);
        }
      };
      this.loadMagnet = function (element, call) {
        var _this4 = this;
        Parser.marnet(element, function () {
          Lampa.Modal.close();
          element.poster = object.movie.img;
          _this4.start();
          if (call) call();else Lampa.Torrent.start(element, object.movie);
        }, function (text) {
          Lampa.Modal.update(Lampa.Template.get('error', {
            title: Lampa.Lang.translate('title_error'),
            text: text
          }));
        });
        Lampa.Modal.open({
          title: '',
          html: Lampa.Template.get('modal_pending', {
            text: Lampa.Lang.translate('torrent_get_magnet')
          }),
          onBack: function onBack() {
            Lampa.Modal.close();
            network.clear();
            Lampa.Controller.toggle('content');
          }
        });
      };
      this.mark = function (element, item, add) {
        if (add) {
          if (viewed.indexOf(element.hash) === -1) {
            viewed.push(element.hash);
            item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
          }
        } else {
          element.viewed = true;
          Lampa.Arrays.remove(viewed, element.hash);
          item.find('.torrent-item__viewed').remove();
        }
        element.viewed = add;
        Lampa.Storage.set('torrents_view', viewed);
        if (!add) Lampa.Storage.remove('torrents_view', element.hash);
      };
      this.addToBase = function (element) {
        Lampa.Torserver.add({
          poster: object.movie.img,
          title: object.movie.title + ' / ' + object.movie.original_title,
          link: element.MagnetUri || element.Link,
          data: {
            lampa: true,
            movie: object.movie
          }
        }, function () {
          Lampa.Noty.show(object.movie.title + ' - ' + Lampa.Lang.translate('torrent_parser_added_to_mytorrents'));
        });
      };
      this.append = function (items, append) {
        var _this5 = this;
        items.forEach(function (element) {
          var date = Lampa.Utils.parseTime(element.PublishDate);
          var bitrate = object.movie.runtime ? Lampa.Utils.calcBitrate(element.Size, object.movie.runtime) : 0;
          Lampa.Arrays.extend(element, {
            title: element.Title,
            date: date.full,
            tracker: element.Tracker,
            bitrate: bitrate,
            size: !isNaN(parseInt(element.Size)) ? Lampa.Utils.bytesToSize(element.Size) : element.size,
            seeds: element.Seeders,
            grabs: element.Peers
          });
          var item = Lampa.Template.get('torrent', element);
          if (element.ffprobe) {
            var ffprobe_elem = item.find('.torrent-item__ffprobe');
            var ffprobe_tags = [];
            var video = element.ffprobe.find(function (a) {
              return a.codec_type === 'video';
            });
            var audio = element.ffprobe.filter(function (a) {
              return a.codec_type === 'audio' && a.tags;
            });
            var subs = element.ffprobe.filter(function (a) {
              return a.codec_type === 'subtitle' && a.tags;
            });
            var voice = element.info && element.info.voices ? element.info.voices : [];
            if (video) ffprobe_tags.push({
              media: 'video',
              value: video.width + 'x' + video.height
            });
            var is_71 = element.ffprobe.find(function (a) {
              return a.codec_type === 'audio' && a.channels === 8;
            });
            var is_51 = element.ffprobe.find(function (a) {
              return a.codec_type === 'audio' && a.channels === 6;
            });
            if (is_71) ffprobe_tags.push({
              media: 'channels',
              value: '7.1'
            });
            if (is_51) ffprobe_tags.push({
              media: 'channels',
              value: '5.1'
            });
            audio.forEach(function (a) {
              var line = [];
              var lang = (a.tags.language || '').toUpperCase();
              var name = a.tags.title || a.tags.handler_name;
              if (lang) line.push(lang);
              if (name && lang !== 'ENG') {
                var translate = voice.find(function (v) {
                  return name.toLowerCase().indexOf(v.toLowerCase()) >= 0;
                });
                name = translate ? translate : name;
                if (name.toLowerCase().indexOf('dub') >= 0 || name.toLowerCase() === 'd') name = Lampa.Lang.translate('torrent_parser_voice_dubbing');
                line.push(Lampa.Utils.shortText(Lampa.Utils.capitalizeFirstLetter(name), 20));
              }
              if (line.length) ffprobe_tags.push({
                media: 'audio',
                value: line.join(' - ')
              });
            });
            var find_subtitles = [];
            subs.forEach(function (a) {
              var lang = (a.tags.language || '').toUpperCase();
              if (lang) find_subtitles.push(lang);
            });
            find_subtitles = find_subtitles.filter(function (el, pos) {
              return find_subtitles.indexOf(el) === pos;
            });
            find_subtitles.slice(0, 4).forEach(function (a) {
              ffprobe_tags.push({
                media: 'subtitle',
                value: a
              });
            });
            if (find_subtitles.length > 4) ffprobe_tags.push({
              media: 'subtitle',
              value: '+' + (find_subtitles.length - 4)
            });
            ffprobe_tags = ffprobe_tags.filter(function (el, pos) {
              return ffprobe_tags.map(function (a) {
                return a.value + a.media;
              }).indexOf(el.value + el.media) === pos;
            });
            ffprobe_tags.forEach(function (tag) {
              ffprobe_elem.append('<div class="m-' + tag.media + '">' + tag.value + '</div>');
            });
            if (ffprobe_tags.length) ffprobe_elem.removeClass('hide');
          }
          if (!bitrate) item.find('.bitrate').remove();
          if (element.viewed) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
          if (!element.size || parseInt(element.size) === 0) item.find('.torrent-item__size').remove();
          item.on('hover:focus', function (e) {
            last = e.target;
            scroll.update($(e.target), true);
            Lampa.Helper.show('torrents', Lampa.Lang.translate('helper_torrents'), item);
          }).on('hover:hover hover:touch', function (e) {
            last = e.target;
            Navigator.focused(last);
          }).on('hover:enter', function (e) {
            last = e.target;
            Lampa.Torrent.opened(function () {
              _this5.mark(element, item, true);
            });
            if (element.reguest && !element.MagnetUri) {
              _this5.loadMagnet(element);
            } else {
              element.poster = object.movie.img;
              _this5.start();
              Lampa.Torrent.start(element, object.movie);
            }
            Lampa.Listener.send('torrent', {
              type: 'onenter',
              element: element,
              item: item
            });
          }).on('hover:long', function () {
            var enabled = Lampa.Controller.enabled().name;
            var menu = [{
              title: Lampa.Lang.translate('torrent_parser_add_to_mytorrents'),
              tomy: true
            }, {
              title: Lampa.Lang.translate('torrent_parser_label_title'),
              subtitle: Lampa.Lang.translate('torrent_parser_label_descr'),
              mark: true
            }, {
              title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
              subtitle: Lampa.Lang.translate('torrent_parser_label_cancel_descr'),
              unmark: true
            }];
            Lampa.Listener.send('torrent', {
              type: 'onlong',
              element: element,
              item: item,
              menu: menu
            });
            Lampa.Select.show({
              title: Lampa.Lang.translate('title_action'),
              items: menu,
              onBack: function onBack() {
                Lampa.Controller.toggle(enabled);
              },
              onSelect: function onSelect(a) {
                if (a.tomy) {
                  if (element.reguest && !element.MagnetUri) {
                    _this5.loadMagnet(element, function () {
                      _this5.addToBase(element);
                    });
                  } else _this5.addToBase(element);
                } else if (a.mark) {
                  _this5.mark(element, item, true);
                } else if (a.unmark) {
                  _this5.mark(element, item, false);
                }
                Lampa.Controller.toggle(enabled);
              }
            });
          });
          Lampa.Listener.send('torrent', {
            type: 'render',
            element: element,
            item: item
          });
          scroll.append(item);
          if (append) Lampa.Controller.collectionAppend(item);
        });
      };
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        if (!initialized) {
          initialized = true;
          this.initialize();
        }
        Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(object.movie));
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render(), files.render(true));
            Lampa.Controller.collectionFocus(last || false, scroll.render(true));
          },
          update: function update() {},
          up: function up() {
            if (Navigator.canmove('up')) {
              Navigator.move('up');
            } else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');else filter.render().find('.filter--filter').trigger('hover:enter');
          },
          left: function left() {
            var poster = files.render().find('.explorer-card__head-img');
            if (poster.hasClass('focus')) Lampa.Controller.toggle('menu');else if (Navigator.canmove('left')) Navigator.move('left');else Navigator.focus(poster[0]);
          },
          back: this.back
        });
        Lampa.Controller.toggle('content');
      };
      this.pause = function () {};
      this.stop = function () {};
      this.render = function () {
        return files.render();
      };
      this.destroy = function () {
        network.clear();
        Parser.clear();
        files.destroy();
        scroll.destroy();
        results = null;
        network = null;
      };
    }

    function startPlugin() {
      window.lmeConcertSearch_ready = true;
      var manifest = {
        type: 'other',
        version: '0.1',
        name: 'Concert Search',
        description: '',
        component: 'lmeConcertSearch'
      };
      Lampa.Manifest.plugins = manifest;
      Lampa.Component.add('lmeConcertSearch', component);
      function add() {
        var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M60 30.0187C60 13.452 46.5667 0.0218048 30 0.0218048C13.4302 0.0218048 0 13.4552 0 30.0187C0 42.7886 7.99522 53.668 19.239 57.9942L13.5766 31.6757L11.9757 24.238L9.1414 11.0818L20.1204 8.71782L24.1788 27.5893C25.2751 32.6848 27.5862 35.4194 31.3922 34.5972C34.4041 33.9493 35.6811 31.4981 36.0237 29.6231C36.1763 28.913 36.0642 28.0347 35.8773 27.175L31.3829 6.29153L42.3588 3.93376L47.4855 27.7637C49.5473 37.3474 55.1287 38.8144 55.1287 38.8144C55.1287 38.8144 47.5945 40.4371 44.4363 41.113C41.2843 41.7951 39.1601 36.1576 39.1601 36.1576L38.9421 36.2043C38.0451 38.6493 37.0328 42.6204 29.2027 44.3086C28.6296 44.43 28.0689 44.5079 27.5145 44.5671L30.8285 59.9782C47.0058 59.539 60 46.305 60 30.0187Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(manifest.name, "</div>\n        </li>"));
        button.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: manifest.name,
            component: manifest.component,
            search: '',
            from_search: true,
            noinfo: true,
            movie: {
              title: '',
              original_title: '',
              img: './img/img_broken.svg',
              genres: []
            },
            page: 1
          });
        });
        $('.menu .menu__list').eq(0).append(button);
      }
      if (window.appready) add();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') add();
        });
      }
    }
    if (!window.lmeConcertSearch_ready) startPlugin();

})();
