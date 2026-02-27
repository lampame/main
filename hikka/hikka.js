(function () {
  'use strict';

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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  var PROXY_URL = 'https://proxy.lme.isroot.in/';
  var API_BASE = 'https://api.hikka.io/';
  var ENDPOINTS = {
    ANIME: PROXY_URL + API_BASE + 'anime',
    GENRES: PROXY_URL + API_BASE + 'genres',
    DETAILS: function DETAILS(slug) {
      return PROXY_URL + API_BASE + 'anime/' + slug;
    },
    CHARACTERS: function CHARACTERS(slug) {
      return PROXY_URL + API_BASE + 'anime/' + slug + '/characters';
    },
    FRANCHISE: function FRANCHISE(slug) {
      return PROXY_URL + API_BASE + 'related/anime/' + slug + '/franchise';
    },
    // External APIs (via proxy)
    MAL_API: function MAL_API(id) {
      return PROXY_URL + 'https://animeapi.my.id/myanimelist/' + id;
    },
    TRAKT_SEARCH: function TRAKT_SEARCH(id, type) {
      return PROXY_URL + 'https://api.trakt.tv/search/trakt/' + id + '?type=' + type;
    }
  };
  function getProxyHeaders() {
    var additionalHeaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread2({
      'x-requested-with': 'lme-ukraine'
    }, additionalHeaders);
  }

  var STATUS_MAP = {
    'finished': 'Завершено',
    'ongoing': 'Виходить',
    'announced': 'Анонсовано',
    'paused': 'Призупинено',
    'discontinued': 'Скасовано'
  };
  var STATUS_STD_MAP = {
    'finished': 'ended',
    'ongoing': 'returning_series',
    'announced': 'planned',
    'paused': 'in_production',
    'discontinued': 'canceled'
  };
  var MEDIA_TYPE_MAP = {
    'tv': 'ТВ Серіал',
    'movie': 'Фільм',
    'ova': 'OVA',
    'ona': 'ONA',
    'special': 'Спеціальний',
    'music': 'Музичний'
  };
  var GENRE_TYPE_MAP = {
    'theme': 'Тематичне',
    'genre': 'Основне',
    'demographic': 'Демографічне',
    'explicit': 'Для дорослих'
  };
  var PAGINATION = {
    ITEMS_PER_PAGE: 60,
    LIMIT_VIEW: 12,
    LIMIT_COLLECTION: 36
  };
  var FILTER_OPTIONS = {
    media_type: [{
      title: 'Всі типи',
      value: ''
    }, {
      title: 'ТВ Серіал',
      value: 'tv'
    }, {
      title: 'Фільм',
      value: 'movie'
    }, {
      title: 'OVA',
      value: 'ova'
    }, {
      title: 'ONA',
      value: 'ona'
    }, {
      title: 'Спеціальний',
      value: 'special'
    }, {
      title: 'Музичний',
      value: 'music'
    }],
    status: [{
      title: 'Всі статуси',
      value: ''
    }, {
      title: 'Завершено',
      value: 'finished'
    }, {
      title: 'Виходить',
      value: 'ongoing'
    }, {
      title: 'Анонсовано',
      value: 'announced'
    }, {
      title: 'Призупинено',
      value: 'paused'
    }, {
      title: 'Скасовано',
      value: 'discontinued'
    }],
    season: [{
      title: 'Всі сезони',
      value: ''
    }, {
      title: 'Зима',
      value: 'winter'
    }, {
      title: 'Весна',
      value: 'spring'
    }, {
      title: 'Літо',
      value: 'summer'
    }, {
      title: 'Осінь',
      value: 'fall'
    }],
    rating: [{
      title: 'Всі рейтинги',
      value: ''
    }, {
      title: 'G',
      value: 'g'
    }, {
      title: 'PG',
      value: 'pg'
    }, {
      title: 'PG-13',
      value: 'pg_13'
    }, {
      title: 'R',
      value: 'r'
    }, {
      title: 'R+',
      value: 'r_plus'
    }, {
      title: 'Rx',
      value: 'rx'
    }],
    sort: [{
      title: 'За рейтингом ↓',
      value: 'score:desc'
    }, {
      title: 'За рейтингом ↑',
      value: 'score:asc'
    }, {
      title: 'За датою ↓',
      value: 'start_date:desc'
    }, {
      title: 'За датою ↑',
      value: 'start_date:asc'
    }, {
      title: 'За назвою ↓',
      value: 'title:desc'
    }, {
      title: 'За назвою ↑',
      value: 'title:asc'
    }],
    genres: [{
      title: 'Всі жанри',
      value: ''
    }]
  };

  function normalizeAnimeData(anime) {
    // Отримуємо правильну локалізовану назву типу медіа
    var getMediaTypeLabel = function getMediaTypeLabel(mediaType) {
      return MEDIA_TYPE_MAP[mediaType] || mediaType || 'ТВ Серіал';
    };
    return {
      id: anime.slug,
      title: anime.title_ua || anime.title_en || anime.title_ja,
      name: anime.media_type !== 'movie' ? anime.title_ua || anime.title_en || anime.title_ja : undefined,
      original_title: anime.title_en || anime.title_ja || anime.title_ua,
      // КЛЮЧОВЕ ПОЛЕ: original_name визначає тип картки (TV vs MOV)
      original_name: anime.media_type === 'movie' ? null : anime.title_en || anime.title_ja || anime.title_ua,
      source: 'hikka',
      img: anime.image,
      poster: anime.image,
      // НЕ додаємо poster_path/backdrop_path - вони викликають TMDB prefix при створенні Card!
      // Тільки для Full потрібні ці поля, там вони передаються окремо через buildFullPayloadFromDetails
      vote_average: anime.score || anime.native_score || 0,
      overview: anime.synopsis_ua || anime.synopsis_en || '',
      year: anime.year,
      release_year: anime.year || '2023',
      // Побудова дат для Full (fallback з року)
      release_date: anime.year ? anime.year + '-01-01' : undefined,
      first_air_date: anime.media_type !== 'movie' && anime.year ? anime.year + '-01-01' : undefined,
      status: STATUS_MAP[anime.status] || anime.status,
      media_type: anime.media_type,
      // Quality: 'UA' if translated, otherwise undefined (or real quality if we had it)
      quality: anime.translated_ua ? 'UA' : undefined,
      // Custom label for our badge
      media_type_label: getMediaTypeLabel(anime.media_type),
      // Поле для іконки перекладу
      has_translation: anime.translated_ua,
      translated_ua: anime.translated_ua,
      hikka_slug: anime.slug
    };
  }
  function buildFullPayloadFromDetails(details) {
    var mediaType = details && details.media_type === 'movie' ? 'movie' : 'tv';
    var title_ua = details && details.title_ua;
    var title_en = details && details.title_en;
    var title_ja = details && details.title_ja;
    var year = details && details.year;
    var image = details && details.image;
    // Для Full потрібно передавати стандартизований ключ статусу
    var statusKey = details ? STATUS_STD_MAP[details.status] || details.status : undefined;
    var card = {
      id: details && details.slug,
      title: title_ua || title_en || title_ja,
      name: mediaType !== 'movie' ? title_ua || title_en || title_ja : undefined,
      original_title: title_ja || title_en || title_ua,
      original_name: mediaType !== 'movie' ? title_en || title_ja || title_ua : null,
      // Використати title_ja як tagline для відображення оригінальної назви
      tagline: title_ja || '',
      overview: function () {
        var raw = details && (details.synopsis_ua || details.synopsis_en) || '';
        // Очистити Markdown-посилання: [текст](url) -> текст
        return raw.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      }(),
      poster_path: image,
      img: image,
      backdrop_path: details && details.backdrop || image,
      vote_average: details && (details.score || details.native_score) || 0,
      status: statusKey,
      release_date: year ? year + '-01-01' : undefined,
      first_air_date: mediaType !== 'movie' && year ? year + '-01-01' : undefined,
      // runtime for movies (duration in minutes from Hikka)
      runtime: details && typeof details.duration === 'number' ? details.duration : undefined,
      // Ensure countries arrays to avoid join errors in Full
      production_countries: Array.isArray(details && details.countries) ? details.countries.map(function (c) {
        if (typeof c === 'string') return {
          name: c
        };
        return {
          iso_3166_1: c && c.iso_3166_1 || undefined,
          name: c && c.name || ''
        };
      }) : [],
      countries: Array.isArray(details && details.countries) ? details.countries.map(function (c) {
        return typeof c === 'string' ? c : c && c.name || '';
      }) : [],
      source: 'hikka'
    };

    // Жанри
    if (details && Array.isArray(details.genres)) {
      card.genres = details.genres.map(function (g, i) {
        return {
          id: g.slug || i,
          name: g.name_ua || g.name_en || g.name
        };
      });
    }

    // Кількість сезонів/епізодів
    if (details && typeof details.seasons_count === 'number') card.number_of_seasons = details.seasons_count;
    if (details && typeof details.episodes_count === 'number') card.number_of_episodes = details.episodes_count;
    // Додаткові лічильники випущених/загальних епізодів + fallback для Start
    if (typeof details.episodes_total === 'number') {
      card.episodes_total = details.episodes_total;
      if (!card.number_of_episodes) card.number_of_episodes = details.episodes_total;
    }
    if (typeof details.episodes_released === 'number') card.episodes_released = details.episodes_released;

    // Компанії виробництва (щоб Full міг відобразити без TMDB)
    if (details && Array.isArray(details.companies)) {
      card.production_companies = details.companies.map(function (c) {
        return {
          id: c && c.company && c.company.slug || undefined,
          name: c && c.company && c.company.name || ''
        };
      });
    }

    // Епізоди
    // Ensure no episodes for pure movies to avoid empty tab
    var episodes;
    if (details && Array.isArray(details.episodes) && details.episodes.length) {
      var seasonNumber = details.season || 1;
      episodes = {
        name: 'Season ' + seasonNumber,
        episodes: details.episodes.map(function (ep, idx) {
          return {
            id: ep.id || undefined,
            air_date: ep.air_date || (year ? year + '-01-01' : undefined),
            episode_number: ep.number || ep.episode_number || idx + 1,
            season_number: ep.season || ep.season_number || seasonNumber,
            name: ep.title_ua || ep.title_en || ep.name || 'Епізод ' + (ep.number || idx + 1),
            overview: ep.synopsis_ua || ep.synopsis_en || ep.overview || '',
            still_path: ep.image || ep.still_path || image || null
          };
        })
      };
      if (!card.number_of_episodes) card.number_of_episodes = episodes.episodes.length;
    }
    return {
      card: card,
      episodes: episodes,
      method: mediaType,
      id: details && details.slug
    };
  }

  var Cache = /*#__PURE__*/function () {
    function Cache() {
      _classCallCheck(this, Cache);
      this.details = new Map();
    }
    return _createClass(Cache, [{
      key: "has",
      value: function has(key) {
        return this.details.has(key);
      }
    }, {
      key: "get",
      value: function get(key) {
        return this.details.get(key);
      }
    }, {
      key: "set",
      value: function set(key, value) {
        this.details.set(key, value);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.details.clear();
      }
    }]);
  }();
  var Cache$1 = new Cache();

  var network = new Lampa.Reguest();
  var Api = {
    buildFullPayloadFromDetails: buildFullPayloadFromDetails,
    getAnimeList: function getAnimeList(success, error) {
      var url = ENDPOINTS.ANIME;
      var postData = {
        media_type: [],
        status: [],
        season: [],
        rating: [],
        years: [],
        genres: [],
        studios: [],
        only_translated: false,
        sort: ['score:desc']
      };
      console.log('[Hikka] Fetching anime list...');
      network["native"](url, function (data) {
        console.log('[Hikka] Response:', data);
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse response:', e);
            error();
            return;
          }
        }
        if (data && data.list) {
          var results = data.list.map(normalizeAnimeData);
          success({
            results: results,
            total_pages: data.pagination ? data.pagination.pages : 1,
            page: 1
          });
        } else {
          console.log('[Hikka] No data received');
          error();
        }
      }, function (err) {
        console.log('[Hikka] Error:', err);
        error();
      }, JSON.stringify(postData), {
        method: 'POST',
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    getAnimeListWithFilters: function getAnimeListWithFilters(filters, page, success, error) {
      var url = ENDPOINTS.ANIME;

      // Add page as URL parameter, not in POST body
      if (page > 1) {
        url += '?page=' + page;
      }
      var postData = {
        media_type: filters.media_type || [],
        status: filters.status || [],
        season: filters.season || [],
        rating: filters.rating || [],
        years: filters.years || [],
        genres: filters.genres || [],
        // Додаємо підтримку жанрів
        studios: filters.studios || [],
        // Додаємо підтримку студій
        only_translated: filters.only_translated || false,
        // Додаємо підтримку only_translated
        sort: filters.sort || ['score:desc']
      };
      console.log('[Hikka] Fetching anime with filters:', postData, 'Page:', page);
      network["native"](url, function (data) {
        console.log('[Hikka] Response:', data);
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse response:', e);
            error();
            return;
          }
        }
        if (data && data.list) {
          var results = data.list.map(normalizeAnimeData);
          success({
            results: results,
            total_pages: data.pagination ? data.pagination.pages : 1,
            page: data.pagination ? data.pagination.page : 1
          });
        } else {
          console.log('[Hikka] No data received');
          error();
        }
      }, function (err) {
        console.log('[Hikka] Error:', err);
        error();
      }, JSON.stringify(postData), {
        method: 'POST',
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    getAnimeDetails: function getAnimeDetails(hikka_slug, success, error) {
      console.log('[Hikka] Fetching anime details for:', hikka_slug);

      // Return from cache if available
      if (Cache$1.has(hikka_slug)) {
        var cached = Cache$1.get(hikka_slug);
        console.log('[Hikka] Details from cache:', hikka_slug);
        success(cached);
        return;
      }
      var url = ENDPOINTS.DETAILS(hikka_slug);
      network.silent(url, function (data) {
        console.log('[Hikka] Details response:', data);
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse details response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data) {
          // Save to cache
          Cache$1.set(hikka_slug, data);
          success(data);
        } else {
          console.log('[Hikka] No details data received');
          if (error) error('No details');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching details:', err);
        if (error) error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    getGenres: function getGenres(success, error) {
      console.log('[Hikka] Fetching genres from API');
      var url = ENDPOINTS.GENRES;
      network.silent(url, function (data) {
        console.log('[Hikka] Genres response:', data);
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse genres response:', e);
            error();
            return;
          }
        }
        if (data && data.list) {
          success(data);
        } else {
          console.log('[Hikka] No genres data received');
          error();
        }
      }, function (err) {
        console.log('[Hikka] Error fetching genres:', err);
        error();
      }, false, {
        headers: getProxyHeaders({
          'origin': 'origin'
        })
      });
    },
    // Hikka Characters API: GET /anime/{slug}/characters
    getCharacters: function getCharacters(slug, success, error) {
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.CHARACTERS(slug);
      network.silent(url, function (data) {
        success && success(data);
      }, function (err) {
        console.log('[Hikka] Error fetching characters:', err);
        error && error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    // Hikka Related Franchise API: GET /related/anime/{slug}/franchise
    getFranchise: function getFranchise(slug, success, error) {
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.FRANCHISE(slug);
      network.silent(url, function (data) {
        success && success(data);
      }, function (err) {
        console.log('[Hikka] Error fetching franchise:', err);
        error && error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    }
  };

  var NavigationManager = /*#__PURE__*/function () {
    function NavigationManager(component, contentContainer, scroll, navigator) {
      _classCallCheck(this, NavigationManager);
      this.component = component;
      this.contentContainer = contentContainer;
      this.scroll = scroll;
      this.navigator = navigator; // Reference to global Navigator or passed object
    }
    return _createClass(NavigationManager, [{
      key: "init",
      value: function init() {
        var _this = this;
        Lampa.Controller.add('content', {
          link: this.component,
          toggle: function toggle() {
            Lampa.Controller.collectionSet(_this.contentContainer, _this.scroll.render(true));

            // Re-add filter buttons to collection
            var filterButtons = _this.component.html.querySelectorAll('.simple-button--filter.selector');
            filterButtons.forEach(function (button) {
              Lampa.Controller.collectionAppend(button);
            });
            Lampa.Controller.collectionFocus(_this.component.last || false, _this.contentContainer, _this.scroll.render(true));
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            if (Navigator.canmove('down')) Navigator.move('down');else if (_this.component.current_page < _this.component.total_pages && !_this.component.loading) {
              _this.component.current_page++;
              _this.component.load();
            }
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        });
      }
    }, {
      key: "start",
      value: function start() {
        if (Lampa.Activity.active().activity !== this.component.activity) return;
        this.init();
        Lampa.Controller.toggle('content');
      }
    }, {
      key: "refresh",
      value: function refresh() {
        if (!Lampa.Controller.own(this.component)) return;
        Lampa.Controller.collectionSet(this.contentContainer, this.scroll.render(true));
        var filterButtons = this.component.html.querySelectorAll('.simple-button--filter.selector');
        filterButtons.forEach(function (button) {
          Lampa.Controller.collectionAppend(button);
        });
        Lampa.Controller.collectionFocus(this.component.last || false, this.contentContainer, this.scroll.render(true));
      }
    }]);
  }();

  var CardFactory = /*#__PURE__*/function () {
    function CardFactory() {
      _classCallCheck(this, CardFactory);
    }
    return _createClass(CardFactory, null, [{
      key: "create",
      value: function create(element) {
        // КРИТИЧНО: Використовуємо Lampa.Maker.make('Card') замість deprecated AnimeCard
        // Params мають бути в data.params, а НЕ окремим аргументом!
        // ВАЖЛИВО: НЕ передаємо poster_path/backdrop_path, бо Card додає TMDB prefix!
        // Hikka вже має повні URL в img/poster
        var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({
          title: element.title || element.name,
          original_title: element.original_title || element.original_name,
          release_date: element.release_date || element.first_air_date,
          vote_average: element.vote_average,
          vote_count: element.vote_count,
          overview: element.overview,
          // НЕ передаємо poster_path та backdrop_path - вони викликають TMDB prefix
          // poster_path: element.poster_path,
          // backdrop_path: element.backdrop_path,
          img: element.img,
          // Повний URL від Hikka
          poster: element.poster,
          // Повний URL від Hikka
          // Hikka специфічні поля
          hikka_slug: element.hikka_slug,
          quality: element.quality,
          has_translation: element.has_translation
        }, element), {}, {
          // ВАЖЛИВО: params має бути в data.params
          params: {
            card_category: false,
            card_small: false
          }
        }));
        card.create();
        return card;
      }
    }]);
  }();

  var CardRenderer = /*#__PURE__*/function () {
    function CardRenderer() {
      _classCallCheck(this, CardRenderer);
    }
    return _createClass(CardRenderer, null, [{
      key: "render",
      value: function render(card, element, scroll, activity) {
        var callbacks = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        // card.render() повертає jQuery об'єкт
        var render = card.render();
        render.addClass('selector');
        render.addClass('hikka-card'); // Add scoped class

        // Hide standard type and add custom one
        render.addClass('hikka-hide-type');
        if (element.media_type_label) {
          var customBadge = document.createElement('div');
          customBadge.className = 'hikka-custom-type-badge';
          customBadge.innerText = element.media_type_label;
          var viewElement = render[0].querySelector('.card__view');
          if (viewElement) {
            viewElement.appendChild(customBadge);
          }
        }

        // Handle UA translation badge
        if (element.translated_ua) {
          var translateBadge = document.createElement('div');
          translateBadge.className = 'hikka-custom-translate-badge';
          translateBadge.innerText = 'Солов\'їна';
          var _viewElement = render[0].querySelector('.card__view');
          if (_viewElement) {
            _viewElement.appendChild(translateBadge);
          }
        }

        // Важливо: підписка на події ПЕРЕД додаванням в DOM
        render.on('hover:touch hover:enter hover:focus', function () {
          if (callbacks.onFocus) callbacks.onFocus(card, render[0]);
        });
        render.on('hover:focus', function () {
          // КРИТИЧНО: спочатку оновлюємо скрол
          scroll.update(render[0]);
          var card_data = element;
          if (card_data.img || card_data.poster) {
            Lampa.Background.change(card_data.img || card_data.poster);
          }
        });

        // Перевизначаємо стандартну поведінку hover:enter
        render.off('hover:enter');
        render.on('hover:enter', function () {
          console.log('[Hikka] Clicked on card:', element.hikka_slug);
          activity.loader(true);
          var slug = element.hikka_slug || element.id;
          Api.getAnimeDetails(slug, function (details) {
            var payload = Api.buildFullPayloadFromDetails(details);
            if (payload && payload.id && payload.card) {
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: payload.id,
                method: payload.method === 'movie' ? 'movie' : 'tv',
                card: payload.card,
                episodes: payload.episodes,
                search: payload.card && (payload.card.original_title || payload.card.title) || '',
                search_one: payload.card && payload.card.title || '',
                search_two: payload.card && payload.card.original_title || '',
                source: 'hikka'
              });
            } else {
              console.log('[Hikka] Invalid payload from details, cannot open Full');
              Lampa.Noty.show('Помилка формування картки Hikka');
            }
            activity.loader(false);
          }, function (error) {
            activity.loader(false);
            console.log('[Hikka] Error loading Hikka details:', error);
            Lampa.Noty.show('Помилка завантаження деталей Hikka');
          });
        });
        return render;
      }
    }]);
  }();

  var FilterManager = /*#__PURE__*/function () {
    function FilterManager(component) {
      _classCallCheck(this, FilterManager);
      this.component = component;
      this.filters = {
        media_type: [],
        status: [],
        season: [],
        rating: [],
        sort: ['score:desc'],
        genres: [],
        studios: [],
        only_translated: false
      };
    }
    return _createClass(FilterManager, [{
      key: "applyInitialFilters",
      value: function applyInitialFilters(object) {
        try {
          if (!object || !object.filters) return;
          var incoming = object.filters || {};
          var toArray = function toArray(v) {
            return Array.isArray(v) ? v : v ? [v] : [];
          };
          if (incoming.media_type !== undefined) this.filters.media_type = toArray(incoming.media_type);
          if (incoming.status !== undefined) this.filters.status = toArray(incoming.status);
          if (incoming.season !== undefined) this.filters.season = toArray(incoming.season);
          if (incoming.rating !== undefined) this.filters.rating = toArray(incoming.rating);
          if (incoming.sort !== undefined) this.filters.sort = toArray(incoming.sort);
          if (incoming.genres !== undefined) this.filters.genres = toArray(incoming.genres);
          if (incoming.studios !== undefined) this.filters.studios = toArray(incoming.studios);
          if (typeof incoming.only_translated === 'boolean') this.filters.only_translated = incoming.only_translated;
        } catch (e) {
          console.log('[Hikka] Apply initial filters error:', e);
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.filters = {
          media_type: [],
          status: [],
          season: [],
          rating: [],
          sort: ['score:desc'],
          genres: [],
          studios: [],
          only_translated: false
        };
      }
    }, {
      key: "get",
      value: function get() {
        return this.filters;
      }
    }]);
  }();

  var FilterPanel = /*#__PURE__*/function () {
    function FilterPanel(component, filterManager) {
      _classCallCheck(this, FilterPanel);
      this.component = component;
      this.filterManager = filterManager;
      this.genresCache = null;
    }
    return _createClass(FilterPanel, [{
      key: "render",
      value: function render() {
        var _this = this;
        var filterPanel = document.createElement('div');
        filterPanel.className = 'filter-panel';
        var filterScroll = new Lampa.Scroll({
          mask: false,
          over: true,
          horizontal: true
        });
        var filterBody = document.createElement('div');
        filterBody.className = 'hikka torrent-filter';

        // Helper to create buttons
        var createBtn = function createBtn(title, type, options) {
          var btn = document.createElement('div');
          btn.className = 'simple-button simple-button--filter selector';
          btn.innerHTML = "<span>".concat(title, "</span>");
          $(btn).on('hover:enter', function () {
            _this.showFilterSelect(type, options, btn);
          });
          return btn;
        };

        // Media Type
        filterBody.appendChild(createBtn('Тип', 'media_type', FILTER_OPTIONS.media_type));
        // Status
        filterBody.appendChild(createBtn('Статус', 'status', FILTER_OPTIONS.status));
        // Season
        filterBody.appendChild(createBtn('Сезон', 'season', FILTER_OPTIONS.season));
        // Rating
        filterBody.appendChild(createBtn('Рейтинг', 'rating', FILTER_OPTIONS.rating));
        // Sort
        filterBody.appendChild(createBtn('Сортування', 'sort', FILTER_OPTIONS.sort.filter(function (item) {
          return !item.value.includes('title');
        })));

        // Genre
        var genreBtn = document.createElement('div');
        genreBtn.className = 'simple-button simple-button--filter selector';
        genreBtn.innerHTML = '<span>Жанр</span>';
        $(genreBtn).on('hover:enter', function () {
          _this.showGenresSelector(genreBtn);
        });
        filterBody.appendChild(genreBtn);

        // Only Translated
        var onlyTranslatedBtn = document.createElement('div');
        onlyTranslatedBtn.className = 'simple-button simple-button--filter selector';
        onlyTranslatedBtn.innerHTML = '<span>Переклад</span>';
        $(onlyTranslatedBtn).on('hover:enter', function () {
          _this.toggleOnlyTranslated(onlyTranslatedBtn);
        });
        filterBody.appendChild(onlyTranslatedBtn);

        // Reset
        var resetBtn = document.createElement('div');
        resetBtn.className = 'simple-button simple-button--filter selector';
        resetBtn.innerHTML = '<span>Скинути</span>';
        $(resetBtn).on('hover:enter', function () {
          _this.resetAllFilters(filterBody);
        });
        filterBody.appendChild(resetBtn);
        filterScroll.append(filterBody);
        filterPanel.appendChild(filterScroll.render()[0]);
        return filterPanel;
      }
    }, {
      key: "showFilterSelect",
      value: function showFilterSelect(filterType, options, buttonElement) {
        var _this2 = this;
        var controller = Lampa.Controller.enabled().name;
        Lampa.Select.show({
          title: 'Оберіть опцію',
          items: options,
          onSelect: function onSelect(item) {
            console.log('[Hikka Filter] Selected:', filterType, item);
            if (filterType === 'sort') {
              _this2.filterManager.filters.sort = [item.value];
            } else {
              _this2.filterManager.filters[filterType] = item.value ? [item.value] : [];
            }
            _this2.updateButtonText(buttonElement, item.title);
            _this2.component.reload();
            setTimeout(function () {
              _this2.component.navigationManager && _this2.component.navigationManager.refresh();
            }, 0);
          },
          onBack: function onBack() {
            Lampa.Controller.toggle(controller);
            setTimeout(function () {
              _this2.component.navigationManager && _this2.component.navigationManager.refresh();
            }, 0);
          }
        });
      }
    }, {
      key: "updateButtonText",
      value: function updateButtonText(buttonElement, title) {
        var shortTitle = title;
        if (title.length > 15) {
          if (title === 'За рейтингом ↓') shortTitle = 'Рейтинг ↓';else if (title === 'За рейтингом ↑') shortTitle = 'Рейтинг ↑';else if (title === 'За датою ↓') shortTitle = 'Дата ↓';else if (title === 'За датою ↑') shortTitle = 'Дата ↑';else if (title === 'За назвою ↓') shortTitle = 'Назва ↓';else if (title === 'За назвою ↑') shortTitle = 'Назва ↑';else if (title.startsWith('Всі')) shortTitle = 'Всі';else shortTitle = title.substring(0, 12) + '...';
        }
        buttonElement.querySelector('span').textContent = shortTitle;
      }
    }, {
      key: "toggleOnlyTranslated",
      value: function toggleOnlyTranslated(buttonElement) {
        var _this3 = this;
        this.filterManager.filters.only_translated = !this.filterManager.filters.only_translated;
        buttonElement.querySelector('span').textContent = this.filterManager.filters.only_translated ? 'З перекладом' : 'Переклад';
        this.component.reload();
        setTimeout(function () {
          _this3.component.navigationManager && _this3.component.navigationManager.refresh();
        }, 0);
      }
    }, {
      key: "resetAllFilters",
      value: function resetAllFilters(filterBody) {
        var _this4 = this;
        this.filterManager.reset();

        // Reset button texts
        var spans = filterBody.querySelectorAll('.simple-button--filter.selector span');
        var titles = ['Тип', 'Статус', 'Сезон', 'Рейтинг', 'Сортування', 'Жанр', 'Переклад', 'Скинути'];
        spans.forEach(function (span, i) {
          if (titles[i]) span.textContent = titles[i];
        });
        Lampa.Noty.show('Фільтри скинуто');
        this.component.reload();
        setTimeout(function () {
          _this4.component.navigationManager && _this4.component.navigationManager.refresh();
        }, 0);
      }

      // Genre Logic
    }, {
      key: "loadGenres",
      value: function loadGenres(callback) {
        var _this5 = this;
        if (this.genresCache) {
          callback(this.genresCache);
          return;
        }
        Api.getGenres(function (data) {
          if (data && data.list) {
            _this5.genresCache = data.list;
            callback(_this5.genresCache);
          } else {
            console.error('[Hikka] No genres received');
            callback([]);
          }
        }, function (error) {
          console.error('[Hikka] Error loading genres:', error);
          callback([]);
        });
      }
    }, {
      key: "groupGenresByType",
      value: function groupGenresByType(genres) {
        var grouped = {};
        genres.forEach(function (genre) {
          var type = genre.type;
          if (!grouped[type]) grouped[type] = [];
          grouped[type].push(genre);
        });
        return grouped;
      }
    }, {
      key: "showGenresSelector",
      value: function showGenresSelector(buttonElement, controllerName) {
        var _this6 = this;
        this.loadGenres(function (genres) {
          if (genres.length === 0) {
            Lampa.Noty.show('Помилка завантаження жанрів');
            return;
          }
          var controller = controllerName || Lampa.Controller.enabled().name;
          var grouped = _this6.groupGenresByType(genres);
          var typeItems = Object.keys(grouped).map(function (type) {
            return {
              title: GENRE_TYPE_MAP[type] || type,
              value: type,
              genres: grouped[type]
            };
          });
          Lampa.Select.show({
            title: 'Оберіть тип жанру',
            items: typeItems,
            onSelect: function onSelect(selectedType) {
              var genreItems = selectedType.genres.map(function (genre) {
                return {
                  title: genre.name_ua || genre.name_en,
                  value: genre.slug,
                  genre: genre
                };
              });
              genreItems.unshift({
                title: 'Всі жанри цього типу',
                value: '',
                genre: null
              });
              Lampa.Select.show({
                title: selectedType.title,
                items: genreItems,
                onSelect: function onSelect(selectedGenre) {
                  if (selectedGenre.value) {
                    _this6.filterManager.filters.genres = [selectedGenre.value];
                    var shortGenreName = selectedGenre.title;
                    if (shortGenreName.length > 10) shortGenreName = shortGenreName.substring(0, 10) + '...';
                    buttonElement.querySelector('span').textContent = shortGenreName;
                  } else {
                    _this6.filterManager.filters.genres = [];
                    buttonElement.querySelector('span').textContent = 'Жанр';
                  }
                  _this6.component.reload();
                  setTimeout(function () {
                    _this6.component.navigationManager && _this6.component.navigationManager.refresh();
                  }, 0);
                },
                onBack: function onBack() {
                  _this6.showGenresSelector(buttonElement, controller);
                }
              });
            },
            onBack: function onBack() {
              Lampa.Controller.toggle(controller);
              setTimeout(function () {
                _this6.component.navigationManager && _this6.component.navigationManager.refresh();
              }, 0);
            }
          });
        });
      }
    }]);
  }();

  var Component = /*#__PURE__*/function () {
    function Component(object) {
      _classCallCheck(this, Component);
      this.object = object;
      this.html = document.createElement('div');
      this.contentContainer = document.createElement('div');
      this.scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      this.items = [];
      this.active = 0;
      this.last = null;
      this.total_pages = 1;
      this.current_page = 1;
      this.loading = false;

      // PageView system
      this.pages = {};
      this.added = 0;
      this.filterManager = new FilterManager(this);
      this.filterPanel = new FilterPanel(this, this.filterManager);
      this.navigationManager = new NavigationManager(this, this.contentContainer, this.scroll);
      this.activity = null; // Will be set by Lampa
    }
    return _createClass(Component, [{
      key: "create",
      value: function create() {
        var _this = this;
        console.log('[Hikka] Component.create called');
        if (this.rendered) return this.html;
        this.rendered = true;

        // Lampa passes the activity instance to the component function context, 
        // but here we are a class. Usually 'this' in the component function is the activity context.
        // We'll handle this in the wrapper function in index.js.
        // For now, assume this.activity is set before create() or we access global Lampa.Activity.active()

        if (!this.activity) {
          console.warn('[Hikka] this.activity is missing in create(), attempting to fix');
          this.activity = Lampa.Activity.active().activity;
        }
        this.activity.loader(true);
        this.html.classList.add('layer--wheight');
        this.html.classList.add('hikka-component'); // Scoped class

        // Apply initial filters
        this.filterManager.applyInitialFilters(this.object);

        // Render Filters
        var filterRender = this.filterPanel.render();
        this.html.appendChild(filterRender);

        // Content Container
        this.contentContainer.classList.add('category-full', 'items', 'items--cards', 'cols--6');
        this.scroll.append(this.contentContainer);

        // Scroll Events
        this.scroll.onScroll = function () {
          _this.updateNavigator();
        };
        this.scroll.onAnimateEnd = function () {
          _this.pageView();
          _this.updateNavigator();
        };
        this.scroll.onWheel = function (step) {
          if (!Lampa.Controller.own(_this)) _this.start();
          if (step > 0) Navigator.move('down');else Navigator.move('up');
        };

        // Append scroll
        var scrollRendered = this.scroll.render();
        this.html.appendChild(scrollRendered instanceof jQuery ? scrollRendered[0] : scrollRendered);
        this.load();
        return this.html;
      }
    }, {
      key: "render",
      value: function render() {
        return this.create();
      }
    }, {
      key: "start",
      value: function start() {
        this.navigationManager.start();
      }
    }, {
      key: "pause",
      value: function pause() {}
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "destroy",
      value: function destroy() {
        this.rendered = false;
        Lampa.Arrays.destroy(this.items);
        this.scroll.destroy();
        this.html.remove();
        this.contentContainer.remove();
        this.items = [];
      }
    }, {
      key: "load",
      value: function load() {
        var _this2 = this;
        if (this.loading) return;
        this.loading = true;
        if (this.current_page === 1) this.activity.loader(true);
        Api.getAnimeListWithFilters(this.filterManager.get(), this.current_page, function (data) {
          _this2.loading = false;
          if (_this2.current_page === 1) _this2.activity.loader(false);
          if (data && data.results && data.results.length) {
            _this2.total_pages = data.total_pages || 1;
            _this2.append(data.results);
            if (_this2.current_page === 1) {
              _this2.scroll.minus();
            }
            if (_this2.current_page < _this2.total_pages) {
              _this2.scroll.onEnd = function () {
                if (!_this2.loading) {
                  _this2.current_page++;
                  _this2.load();
                }
              };
            } else {
              _this2.scroll.onEnd = null;
            }
          } else if (_this2.current_page === 1) {
            _this2.empty();
          }
        }, function () {
          _this2.loading = false;
          if (_this2.current_page === 1) _this2.activity.loader(false);
          if (_this2.current_page === 1) {
            _this2.empty();
          }
        });
      }
    }, {
      key: "append",
      value: function append(results) {
        var _this3 = this;
        var fragment = document.createDocumentFragment();
        results.forEach(function (element) {
          var card = CardFactory.create(element);

          // Render with callbacks
          var render = CardRenderer.render(card, element, _this3.scroll, _this3.activity, {
            onFocus: function onFocus(c, el) {
              _this3.last = el;
              _this3.active = _this3.items.indexOf(c);
            }
          });
          fragment.appendChild(render[0]);
          _this3.items.push(card);
          if (!_this3.last) {
            _this3.last = render[0];
            _this3.active = 0;
          }

          // PageView logic
          _this3.added++;
          var page = Math.ceil(_this3.added / PAGINATION.ITEMS_PER_PAGE);
          if (!_this3.pages[page]) _this3.pages[page] = {
            items: []
          };
          _this3.pages[page].items.push(card);
        });
        this.contentContainer.appendChild(fragment);
        if (this.current_page === 1) {
          Lampa.Layer.update(this.html);
          this.activity.toggle();
          this.start();
          this.navigationManager.refresh();
          setTimeout(function () {
            if (Lampa.Activity.active().activity === _this3.activity) {
              Lampa.Controller.toggle('content');
              _this3.navigationManager.refresh();
            }
          }, 50);
        }
        this.updateNavigator();
      }
    }, {
      key: "empty",
      value: function empty() {
        var empty = new Lampa.Empty();
        this.contentContainer.appendChild(empty.render(true));
        this.start = empty.start.bind(empty);
        this.activity.toggle();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.items.forEach(function (item) {
          return item.destroy();
        });
        this.items = [];
        this.contentContainer.innerHTML = '';
        this.last = null;
        this.active = 0;
        this.pages = {};
        this.added = 0;
      }
    }, {
      key: "reload",
      value: function reload() {
        this.current_page = 1;
        this.clear();
        this.load();
      }
    }, {
      key: "updateNavigator",
      value: function updateNavigator() {
        if (Lampa.Controller.own(this)) {
          Navigator.setCollection(this.items.slice(Math.max(0, this.active - PAGINATION.LIMIT_COLLECTION), this.active + PAGINATION.LIMIT_COLLECTION).map(function (c) {
            return c.render(true);
          }));
          if (this.last) {
            Navigator.focused(this.last);
          } else if (this.items.length) {
            this.last = this.items[0].render(true);
            this.active = 0;
            Lampa.Controller.collectionFocus(this.last, this.contentContainer, this.scroll.render(true));
          }
        }
        Lampa.Layer.visible(this.scroll.render(true));
      }
    }, {
      key: "pageView",
      value: function pageView() {
        var _this4 = this;
        var item = this.items[this.active];
        var page = 1;
        var anyscroll = false;
        var screen = Lampa.Platform.screen('tv');
        var item_position = 0;
        var scroll_position = screen ? 0 : this.scroll.render(true).scrollTop;
        if (item) {
          for (var p in this.pages) {
            this.pages[p].items.find(function (i) {
              return i.data == item.data;
            }) && (page = p);
          }
        }
        if (this.last) item_position = screen ? this.last.getBoundingClientRect().top : this.last.offsetTop;
        var _loop = function _loop() {
          var current = _this4.pages[_p];
          var visible = _p >= page - 1 && _p - 1 <= page;
          if (visible && current.removed) {
            current.removed = false;
            var frag = document.createDocumentFragment();
            current.items.forEach(function (i) {
              return frag.appendChild(i.render(true));
            });
            current.items.forEach(function (i) {
              return i.render(true).style.visibility = 'visible';
            });
            current.placeholder.replaceWith(frag);
            current.placeholder = null;
            anyscroll = true;
          } else if (!visible && !current.removed) {
            current.removed = true;
            current.placeholder = document.createElement('div');
            current.placeholder.style.display = 'none';
            if (current.items[0]) current.items[0].render(true).after(current.placeholder);
            current.items.forEach(function (i) {
              return i.render(true).remove();
            });
            anyscroll = true;
          }
        };
        for (var _p in this.pages) {
          _loop();
        }
        if (anyscroll && this.last) {
          if (screen) {
            this.scroll.shift(this.last.getBoundingClientRect().top - item_position);
          } else {
            this.scroll.render(true).scrollTop = scroll_position + (this.last.offsetTop - item_position);
          }
        }
      }
    }]);
  }();

  var HikkaCharacter = /*#__PURE__*/function () {
    function HikkaCharacter(object) {
      _classCallCheck(this, HikkaCharacter);
      this.object = object || {};
      this.html = document.createElement('div');
      this.body = document.createElement('div');
      this.scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      this.activity = null;
    }
    return _createClass(HikkaCharacter, [{
      key: "create",
      value: function create() {
        var _this = this;
        if (this.rendered) return this.html;
        this.rendered = true;
        if (!this.activity) {
          this.activity = Lampa.Activity.active().activity;
        }
        this.activity.loader(true);
        this.html.classList.add('layer--wheight', 'hikka-character');
        var data = this.object.character_data || this.object;
        var name = this.object.name || this.object.title || data.name_ua || data.name_en || data.name_ja || '—';
        var role = this.object.role || this.object.character || data.character || data.role || '';
        var img = this.object.img || this.object.image || data.image || '';
        var description = this.object.description_ua || this.object.description_en || this.object.description_ja || data.description_ua || data.description_en || data.description_ja || data.description || data.about || '';
        var content = document.createElement('div');
        content.className = 'hikka-character__content';
        if (img) {
          var image = document.createElement('img');
          image.className = 'hikka-character__image';
          image.src = img;
          image.alt = name;
          content.appendChild(image);
        }
        var nameEl = document.createElement('div');
        nameEl.className = 'hikka-character__name';
        nameEl.textContent = name;
        content.appendChild(nameEl);
        if (role) {
          var roleEl = document.createElement('div');
          roleEl.className = 'hikka-character__role';
          roleEl.textContent = role;
          content.appendChild(roleEl);
        }
        var metaItems = [];
        var gender = data.gender || data.sex;
        var age = data.age || data.age_years;
        var birthday = data.birthday || data.birth || data.birth_date;
        if (gender) metaItems.push({
          label: 'Стать',
          value: gender
        });
        if (age) metaItems.push({
          label: 'Вік',
          value: String(age)
        });
        if (birthday) metaItems.push({
          label: 'Народження',
          value: String(birthday)
        });
        if (metaItems.length) {
          var meta = document.createElement('div');
          meta.className = 'hikka-character__meta';
          metaItems.forEach(function (item) {
            var row = document.createElement('div');
            row.className = 'hikka-character__meta-row';
            var label = document.createElement('span');
            label.className = 'hikka-character__meta-label';
            label.textContent = item.label;
            var value = document.createElement('span');
            value.className = 'hikka-character__meta-value';
            value.textContent = item.value;
            row.appendChild(label);
            row.appendChild(value);
            meta.appendChild(row);
          });
          content.appendChild(meta);
        }
        if (description) {
          var descr = document.createElement('div');
          descr.className = 'hikka-character__description';
          descr.textContent = description;
          content.appendChild(descr);
        }
        this.body.className = 'hikka-character__body';
        this.body.appendChild(content);
        this.scroll.onWheel = function (step) {
          if (!Lampa.Controller.own(_this)) _this.start();
          _this.scroll.wheel(step > 0 ? 150 : -150);
        };
        this.scroll.append(this.body);
        this.html.appendChild(this.scroll.render(true));
        if (img && Lampa.Background && typeof Lampa.Background.change === 'function') {
          Lampa.Background.change(img);
        }
        this.activity.loader(false);
        this.activity.toggle();
        return this.html;
      }
    }, {
      key: "render",
      value: function render() {
        return this.create();
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;
        var controller = {
          link: this,
          toggle: function toggle() {
            Lampa.Controller.collectionSet(_this2.scroll.render(true));
            Lampa.Controller.collectionFocus(_this2.last || false, _this2.scroll.render(true));
          },
          left: function left() {
            Lampa.Controller.toggle('menu');
          },
          right: function right() {},
          up: function up() {
            if (_this2.scroll.position && _this2.scroll.position() === 0) Lampa.Controller.toggle('head');else _this2.scroll.wheel(-150);
          },
          down: function down() {
            _this2.scroll.wheel(150);
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        };
        Lampa.Controller.add('content', controller);
        Lampa.Controller.toggle('content');
      }
    }, {
      key: "pause",
      value: function pause() {}
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "destroy",
      value: function destroy() {
        this.rendered = false;
        this.scroll.destroy();
        this.html.remove();
        this.body.remove();
      }
    }]);
  }();

  function addMenuItem() {
    var button = Lampa.Menu.addButton('<svg><use xlink:href="#sprite-anime"></use></svg>', 'Hikka Anime', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Hikka Anime',
        component: 'hikka_anime',
        page: 1
      });
    });
    button.addClass('my_class');
  }

  function toArray(value) {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === '') return [];
    return [value];
  }
  function buildFiltersFromParams(params) {
    var filters = {
      media_type: [],
      status: [],
      season: [],
      rating: [],
      years: [],
      genres: [],
      studios: [],
      only_translated: false,
      sort: ['score:desc']
    };
    if (!params) return filters;
    if (params.filters && _typeof(params.filters) === 'object') {
      var incoming = params.filters;
      if (incoming.media_type !== undefined) filters.media_type = toArray(incoming.media_type);
      if (incoming.status !== undefined) filters.status = toArray(incoming.status);
      if (incoming.season !== undefined) filters.season = toArray(incoming.season);
      if (incoming.rating !== undefined) filters.rating = toArray(incoming.rating);
      if (incoming.years !== undefined) filters.years = toArray(incoming.years);
      if (incoming.genres !== undefined) filters.genres = toArray(incoming.genres);
      if (incoming.studios !== undefined) filters.studios = toArray(incoming.studios);
      if (incoming.only_translated !== undefined) filters.only_translated = !!incoming.only_translated;
      if (incoming.sort !== undefined) filters.sort = toArray(incoming.sort);
    }
    if (params.filter) {
      if (typeof params.filter === 'string') {
        try {
          var parsed = JSON.parse(params.filter);
          if (parsed && _typeof(parsed) === 'object') {
            if (parsed.media_type !== undefined) filters.media_type = toArray(parsed.media_type);
            if (parsed.status !== undefined) filters.status = toArray(parsed.status);
            if (parsed.season !== undefined) filters.season = toArray(parsed.season);
            if (parsed.rating !== undefined) filters.rating = toArray(parsed.rating);
            if (parsed.years !== undefined) filters.years = toArray(parsed.years);
            if (parsed.genres !== undefined) filters.genres = toArray(parsed.genres);
            if (parsed.studios !== undefined) filters.studios = toArray(parsed.studios);
            if (parsed.only_translated !== undefined) filters.only_translated = !!parsed.only_translated;
            if (parsed.sort !== undefined) filters.sort = toArray(parsed.sort);
          }
        } catch (e) {
          // ignore non-JSON filter strings
        }
      } else if (_typeof(params.filter) === 'object') {
        var _parsed = params.filter;
        if (_parsed.media_type !== undefined) filters.media_type = toArray(_parsed.media_type);
        if (_parsed.status !== undefined) filters.status = toArray(_parsed.status);
        if (_parsed.season !== undefined) filters.season = toArray(_parsed.season);
        if (_parsed.rating !== undefined) filters.rating = toArray(_parsed.rating);
        if (_parsed.years !== undefined) filters.years = toArray(_parsed.years);
        if (_parsed.genres !== undefined) filters.genres = toArray(_parsed.genres);
        if (_parsed.studios !== undefined) filters.studios = toArray(_parsed.studios);
        if (_parsed.only_translated !== undefined) filters.only_translated = !!_parsed.only_translated;
        if (_parsed.sort !== undefined) filters.sort = toArray(_parsed.sort);
      }
    }
    if (params.media_type) filters.media_type = toArray(params.media_type);
    if (params.status) filters.status = toArray(params.status);
    if (params.season) filters.season = toArray(params.season);
    if (params.rating) filters.rating = toArray(params.rating);
    if (params.years) filters.years = toArray(params.years);
    if (params.genres) filters.genres = toArray(params.genres);
    if (params.studios) filters.studios = toArray(params.studios);
    if (!filters.studios.length && params.companies) filters.studios = toArray(params.companies);
    if (!filters.studios.length && params.company) filters.studios = toArray(params.company);
    if (params.only_translated !== undefined) filters.only_translated = !!params.only_translated;
    if (params.sort !== undefined) filters.sort = toArray(params.sort);
    if (!filters.media_type.length && params.url) {
      var allowedMedia = ['movie', 'tv', 'ova', 'ona', 'special', 'music'];
      if (allowedMedia.indexOf(params.url) !== -1) filters.media_type = [params.url];
    }
    return filters;
  }

  /**
   * Hikka Source Provider for Lampa Api.sources
   * Implements: full(params, oncomplite, onerror)
   * Returns local data to Full component to avoid any TMDB/CUB requests
   */
  var HikkaSourceProvider = {
    /**
     * Main page data for Lampa Main component
     * Signature: main(params, oncomplite, onerror)
     */
    main: function main() {
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var buildRows = function buildRows(genres) {
        var baseRows = [{
          title: 'Hikka Anime',
          url: '',
          filters: {
            sort: ['score:desc']
          }
        }, {
          title: 'Фільми',
          url: 'movie',
          filters: {
            media_type: ['movie'],
            sort: ['score:desc']
          }
        }, {
          title: 'ТВ серіали',
          url: 'tv',
          filters: {
            media_type: ['tv'],
            sort: ['score:desc']
          }
        }];
        var list = Array.isArray(genres) ? genres.filter(function (g) {
          return g && g.slug;
        }) : [];
        var mapRows = function mapRows(items, limit) {
          return items.slice(0, limit).map(function (g) {
            return {
              title: g.name_ua || g.name_en || g.name || g.slug,
              url: '',
              filters: {
                genres: [g.slug],
                sort: ['score:desc']
              }
            };
          });
        };
        var genreRows = mapRows(list.filter(function (g) {
          return g.type === 'genre';
        }), 3);
        var themeRows = mapRows(list.filter(function (g) {
          return g.type === 'theme';
        }), 2);
        var demographicRows = mapRows(list.filter(function (g) {
          return g.type === 'demographic';
        }), 2);
        return baseRows.concat(genreRows, themeRows, demographicRows);
      };
      var loadRows = function loadRows(rows) {
        var pending = rows.length;
        var result = new Array(rows.length);
        var done = function done() {
          pending--;
          if (pending <= 0) {
            oncomplite && oncomplite(result.filter(Boolean));
          }
        };
        rows.forEach(function (row, index) {
          var filters = buildFiltersFromParams({
            filters: row.filters,
            url: row.url
          });
          Api.getAnimeListWithFilters(filters, 1, function (data) {
            result[index] = {
              title: row.title,
              url: row.url,
              source: 'hikka',
              filter: JSON.stringify(row.filters),
              filters: row.filters,
              results: data && data.results || []
            };
            done();
          }, function (err) {
            console.log('[Hikka] main row error:', err);
            result[index] = {
              title: row.title,
              url: row.url,
              source: 'hikka',
              filter: JSON.stringify(row.filters),
              filters: row.filters,
              results: []
            };
            done();
          });
        });
      };
      Api.getGenres(function (data) {
        var list = Array.isArray(data && data.list) ? data.list : [];
        loadRows(buildRows(list));
      }, function () {
        loadRows(buildRows([]));
      });
    },
    /**
     * Build Full data from Hikka details
     * @param {Object} params - object from Activity.push to Full (expects id=slug, method, source='hikka')
     * @param {Function} oncomplite - callback with data object: { movie, episodes?, persons?, discuss? ... }
     * @param {Function} onerror - error callback
     */
    full: function full() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.card && (params.card.hikka_slug || params.card.id) || null;
        if (!slug) {
          console.log('[Hikka] SourceProvider: missing slug in params', params);
          if (onerror) onerror('Hikka Source: slug is empty');
          return;
        }

        // 1) Load base details (uses in-memory cache internally)
        Api.getAnimeDetails(slug, function (details) {
          var payload = Api.buildFullPayloadFromDetails(details);
          if (!payload || !payload.card) {
            console.log('[Hikka] SourceProvider: invalid payload after details', payload);
            if (onerror) onerror('Hikka Source: invalid payload');
            return;
          }

          // Base data object expected by Full
          var data = {
            movie: payload.card,
            episodes: payload.episodes || null,
            // Ensure countries array exists at top-level to avoid join errors in Full
            countries: Array.isArray(payload.card && payload.card.countries) ? payload.card.countries : [],
            // Sections to be filled below
            persons: {
              cast: [],
              crew: []
            },
            collection: null,
            recomend: null,
            simular: null,
            videos: null,
            reactions: null,
            discuss: null
          };

          // 2) Parallel fetch: persons (characters) and franchise collection
          var pending = 2;
          var done = function done() {
            pending--;
            if (pending <= 0) {
              oncomplite && oncomplite(data);
            }
          };

          // 2.a) Characters -> persons.cast (Hikka schema: { pagination, list: [{ main, character: {...} }] })
          Api.getCharacters(slug, function (chars) {
            try {
              var list = Array.isArray(chars && chars.list) ? chars.list : [];
              var cast = list.map(function (item, idx) {
                var ch = item && item.character || {};
                var roleText = item && item.main ? 'Головний персонаж' : 'Персонаж';
                return {
                  id: ch.slug || 'ch_' + idx,
                  name: ch.name_ua || ch.name_en || ch.name_ja || '—',
                  name_ua: ch.name_ua,
                  name_en: ch.name_en,
                  name_ja: ch.name_ja,
                  character: roleText,
                  // Використовуємо прямий URL як img, щоб обійти Api.img для TMDB
                  profile_path: null,
                  img: ch.image || null,
                  description_ua: ch.description_ua || ch.description || ch.about,
                  description_en: ch.description_en,
                  description_ja: ch.description_ja,
                  source: 'hikka',
                  params: {
                    emit: {
                      onEnter: function onEnter(html, element) {
                        var name = element && (element.name || element.title) || 'Персонаж';
                        Lampa.Activity.push({
                          url: '',
                          title: name,
                          component: 'hikka_character',
                          page: 1,
                          source: 'hikka',
                          name: element && element.name,
                          name_ua: element && element.name_ua,
                          name_en: element && element.name_en,
                          name_ja: element && element.name_ja,
                          character: element && element.character,
                          img: element && element.img,
                          description_ua: element && element.description_ua,
                          description_en: element && element.description_en,
                          description_ja: element && element.description_ja,
                          character_data: ch
                        });
                      }
                    }
                  }
                };
              });
              data.persons = {
                cast: cast,
                crew: []
              };
            } catch (e) {
              console.log('[Hikka] SourceProvider: map characters error', e);
              data.persons = {
                cast: [],
                crew: []
              };
            }
            done();
          }, function (err) {
            console.log('[Hikka] SourceProvider: characters error', err);
            data.persons = {
              cast: [],
              crew: []
            };
            done();
          });

          // 2.c) Franchise -> collection slider
          Api.getFranchise(slug, function (rel) {
            try {
              var animeList = Array.isArray(rel && rel.anime) ? rel.anime : [];
              var results = animeList.map(function (item, idx) {
                var mediaType = item.media_type === 'movie' ? 'movie' : 'tv';
                var year = item.year;
                var startDate = item.start_date ? new Date(item.start_date * 1000).toISOString().slice(0, 10) : undefined;
                return {
                  id: item.slug || 'fr_' + idx,
                  title: item.title_ua || item.title_en || item.title_ja || '',
                  original_title: item.title_en || item.title_ja || item.title_ua || '',
                  // Для колекційних карток не використовуємо *_path, аби уникнути Api.img з TMDB
                  poster_path: null,
                  backdrop_path: null,
                  poster: item.image || null,
                  img: item.image || null,
                  vote_average: item.score || item.native_score || 0,
                  release_date: mediaType === 'movie' ? year ? year + '-01-01' : startDate : undefined,
                  first_air_date: mediaType !== 'movie' ? year ? year + '-01-01' : startDate : undefined,
                  media_type: mediaType,
                  source: 'hikka'
                };
              }).slice(0, 19);
              data.collection = {
                title: 'Франшиза',
                results: results
              };
            } catch (e) {
              console.log('[Hikka] SourceProvider: map franchise error', e);
              data.collection = {
                title: 'Франшиза',
                results: []
              };
            }
            done();
          }, function (err) {
            console.log('[Hikka] SourceProvider: franchise error', err);
            data.collection = {
              title: 'Франшиза',
              results: []
            };
            done();
          });
        }, function (err) {
          console.log('[Hikka] SourceProvider: error loading details', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] SourceProvider: exception', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Lazy-load comments for Discuss component
     * Signature: discussGet(params, oncomplite, onerror)
     * params: { id|slug|object, page }
     */
    discussGet: function discussGet() {
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        if (onerror) onerror('Hikka discussGet disabled');
      } catch (e) {
        console.log('[Hikka] discussGet exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Open catalog by genre chip from Full Descr
     * Signature: category(params, oncomplite, onerror)
     * params: { id, page, ... }
     */
    category: function category() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var genreId = params.id || params.genres;
        var page = params.page || 1;
        if (!genreId) {
          if (onerror) onerror('Hikka category: genre id is empty');
          return;
        }
        var filters = buildFiltersFromParams(params);
        filters.genres = toArray(genreId);
        Api.getAnimeListWithFilters(filters, page, function (data) {
          oncomplite && oncomplite(data);
        }, function (err) {
          console.log('[Hikka] category error:', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] category exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Open catalog by production company chip from Full Descr
     * Signature: company(params, oncomplite, onerror)
     * params: { id, page, ... }
     */
    company: function company() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var studioId = params.id;
        var page = params.page || 1;
        if (!studioId) {
          if (onerror) onerror('Hikka company: studio id is empty');
          return;
        }
        var filters = buildFiltersFromParams(params);
        filters.studios = toArray(studioId);
        Api.getAnimeListWithFilters(filters, page, function (data) {
          oncomplite && oncomplite(data);
        }, function (err) {
          console.log('[Hikka] company error:', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] company exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Full category list for component 'category_full'
     * Signature: list(params, oncomplite, onerror)
     */
    list: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var page = params.page || 1;
        var filters = buildFiltersFromParams(params);
        Api.getAnimeListWithFilters(filters, page, function (data) {
          oncomplite && oncomplite(data);
        }, function (err) {
          console.log('[Hikka] list error:', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] list exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Catalog menu for Lampa menu "Catalog"
     * Signature: menu(params, oncomplite)
     */
    menu: function menu() {
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      Api.getGenres(function (data) {
        var list = Array.isArray(data && data.list) ? data.list : [];
        var items = list.filter(function (g) {
          return g && g.slug;
        }).filter(function (g) {
          return g.type === 'genre';
        }).map(function (g) {
          return {
            title: g.name_ua || g.name_en || g.name || g.slug,
            id: g.slug
          };
        });
        oncomplite && oncomplite(items);
      }, function () {
        oncomplite && oncomplite([]);
      });
    },
    /**
     * Optional category menu presets for source=hikka
     * Signature: menuCategory(params, oncomplite)
     */
    menuCategory: function menuCategory() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var lang = Lampa && Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate : function (v) {
        return v;
      };
      var action = params.action || '';
      var isMovie = action === 'movie';
      var isTv = action === 'tv';
      var currentYear = new Date().getFullYear();
      var baseFilters = {};
      if (isMovie) baseFilters.media_type = ['movie'];
      if (isTv) baseFilters.media_type = ['tv'];
      var items = [{
        title: lang('title_popular'),
        filter: JSON.stringify(_objectSpread2(_objectSpread2({}, baseFilters), {}, {
          sort: ['score:desc']
        }))
      }, {
        title: lang('title_new'),
        filter: JSON.stringify(_objectSpread2(_objectSpread2({}, baseFilters), {}, {
          sort: ['start_date:desc']
        }))
      }, {
        title: lang('title_new_this_year'),
        filter: JSON.stringify(_objectSpread2(_objectSpread2({}, baseFilters), {}, {
          years: [String(currentYear)],
          sort: ['start_date:desc']
        }))
      }, {
        title: lang('title_in_top'),
        filter: JSON.stringify(_objectSpread2(_objectSpread2({}, baseFilters), {}, {
          sort: ['score:desc']
        }))
      }, {
        title: lang('title_hight_voite'),
        filter: JSON.stringify(_objectSpread2(_objectSpread2({}, baseFilters), {}, {
          sort: ['score:desc']
        }))
      }];
      oncomplite && oncomplite(items);
    }
  };

  function overrideFullChipsAndDiscuss() {
    var tagsObserver = null;
    function getSourceFromObject(obj) {
      return obj && (obj.source || obj.card && obj.card.source || obj.movie && obj.movie.source);
    }
    function cleanupObservers() {
      if (tagsObserver) {
        tagsObserver.disconnect();
        tagsObserver = null;
      }
    }
    function setHikkaFullState(active) {
      document.body.classList.toggle('hikka-full-active', active);
    }

    // Хелпер для перев’язки чипів жанрів/студій на наш компонент
    function rebindChips(movie) {
      var tagsContainer = document.querySelector('.full-descr__tags');
      if (!tagsContainer) return;
      var chips = tagsContainer.querySelectorAll('.selector');
      chips.forEach(function (chip) {
        var name = (chip.textContent || '').trim();
        var matched = null;
        var type = null;
        if (movie && Array.isArray(movie.genres)) {
          matched = movie.genres.find(function (g) {
            return (g.name || '').trim() === name;
          });
          if (matched) type = 'genre';
        }
        if (!matched && movie && Array.isArray(movie.production_companies)) {
          matched = movie.production_companies.find(function (c) {
            return (c.name || '').trim() === name;
          });
          if (matched) type = 'company';
        }
        if (matched) {
          // Відв’язуємо усі попередні обробники і навішуємо наш
          $(chip).off('hover:enter');
          $(chip).on('hover:enter', function () {
            var filt = type === 'genre' ? {
              genres: [matched.id]
            } : {
              studios: [matched.id]
            };
            Lampa.Activity.push(_objectSpread2({
              url: '',
              title: name,
              component: 'category_full',
              page: 1,
              source: 'hikka'
            }, filt));
            return false; // зупинити стандартну дію
          });
        }
      });
    }
    Lampa.Listener.follow('full', function (e) {
      if (e.type === 'complite' && e.object && getSourceFromObject(e.object) === 'hikka') {
        // Прибрати лайки/футер у відгуках, кнопку "Ще" (More) та блок реакцій у шапці
        var cleanupHikkaFullUI = function cleanupHikkaFullUI() {
          try {
            // Reactions blocks (new and legacy) та кнопки реакцій
            document.querySelectorAll('.full-start-new__reactions, .full-start__reactions, .button--reaction').forEach(function (el) {
              return el.remove();
            });

            // "Ще" (More) блок, який тригерить CUB discuss fetch
            document.querySelectorAll('.full-review-all').forEach(function (el) {
              return el.remove();
            });

            // Лайки у футері кожного відгуку
            document.querySelectorAll('.full-review__footer').forEach(function (el) {
              return el.remove();
            });

            // Приховати блок додавання коментаря, але не ламати навігацію
            document.querySelectorAll('.full-review-add').forEach(function (el) {
              el.classList.remove('selector');
              el.classList.add('hide');
            });
          } catch (err) {
            console.log('[Hikka] Cleanup UI error:', err);
          }
        }; // Одноразове очищення + повтори після можливих асинхронних вставок
        // Хелпер для оновлення відображення епізодів у шапці (3/12 або 12) — завжди додаємо власний бейдж
        var _updateEpisodesHeader = function updateEpisodesHeader(movie) {
          if (!movie) return;
          var total = Number(movie.episodes_total || movie.number_of_episodes || 0);
          Number(movie.episodes_released || 0);
          if (!total) return;
          var header = document.querySelector('.full-start') || document.querySelector('.full-start-new');
          if (!header) {
            // якщо шапка ще не промальована, повторимо пізніше
            setTimeout(function () {
              return _updateEpisodesHeader(movie);
            }, 300);
            return;
          }
          var tagsWrap = header.querySelector('.full-start__tags') || header.querySelector('.full-start-new__details') || header;
          if (!tagsWrap) {
            setTimeout(function () {
              return _updateEpisodesHeader(movie);
            }, 300);
            return;
          }
        }; // Хелпер для перевизначення бейджа типу (TV → розширений тип Hikka)
        var updateTypeBadge = function updateTypeBadge(movie) {
          if (!movie) return;
          var MAP = {
            tv: 'ТВ Серіал',
            movie: 'Фільм',
            ova: 'OVA',
            ona: 'ONA',
            special: 'Спеціальний',
            music: 'Музичний'
          };
          var label = MAP[movie.media_type] || movie.quality || movie.media_type || 'TV';
          var typeEl = document.querySelector('.card__type');
          if (typeEl) typeEl.textContent = label;
        }; // Первинна перев’язка чипів після complite + оновлення лічильника епізодів
        cleanupObservers();
        setHikkaFullState(true);
        // Приховати форму додавання коментаря для джерела hikka
        try {
          var addReview = document.querySelector('.full-review-add.selector');
          if (addReview) addReview.remove();
        } catch (err) {
          console.log('[Hikka] Hide add review error:', err);
        }
        cleanupHikkaFullUI();
        setTimeout(cleanupHikkaFullUI, 300);
        setTimeout(cleanupHikkaFullUI, 1000);
        try {
          var movie = e.data && e.data.movie ? e.data.movie : null;
          rebindChips(movie);
          _updateEpisodesHeader(movie);
          updateTypeBadge(movie);
        } catch (err) {
          console.log('[Hikka] Override chips error:', err);
        }

        // Додатково спостерігаємо за змінами тегів і перев’язуємо при оновленні DOM; також оновлюємо епізоди при зміні
        try {
          var tagsContainer = document.querySelector('.full-descr__tags');
          var _movie = e.data && e.data.movie ? e.data.movie : null;
          if (tagsContainer) {
            tagsObserver = new MutationObserver(function () {
              rebindChips(_movie);
            });
            tagsObserver.observe(tagsContainer, {
              childList: true,
              subtree: true
            });
          }
          var startContainer = document.querySelector('.full-start') || document.querySelector('.full-start-new');
        } catch (err) {
          console.log('[Hikka] Chips/Episodes/Likes observer error:', err);
        }
      }
    });
    Lampa.Listener.follow('activity', function (e) {
      if (e.type === 'destroy' && e.component === 'full' && getSourceFromObject(e.object) === 'hikka') {
        cleanupObservers();
        setHikkaFullState(false);
      }
    });
  }

  var initialized = false;
  function createCall(config) {
    return function (params, screen) {
      if (screen !== 'main') return;
      return function (call) {
        Api.getAnimeListWithFilters(config.filters, 1, function (data) {
          var results = data && Array.isArray(data.results) ? data.results : [];
          if (!results.length) return call();
          call({
            title: config.title,
            url: '',
            source: 'hikka',
            filter: JSON.stringify(config.filters),
            results: results,
            total_pages: data && data.total_pages ? data.total_pages : 1,
            page: 1
          });
        }, function () {
          return call();
        });
      };
    };
  }
  function registerRows() {
    var rows = [{
      name: 'HikkaMainOngoing',
      title: 'Hikka · Онгоїнги',
      index: 0,
      filters: {
        media_type: [],
        status: ['ongoing'],
        season: [],
        rating: [],
        years: [],
        genres: [],
        studios: [],
        only_translated: true,
        sort: []
      }
    }, {
      name: 'HikkaMainFinishedTop',
      title: 'Hikka · Завершені й високооцінені',
      index: 1,
      filters: {
        media_type: ['tv', 'ova', 'ona'],
        status: ['finished'],
        season: [],
        rating: [],
        years: [],
        genres: [],
        studios: [],
        only_translated: true,
        sort: ['score:desc']
      }
    }, {
      name: 'HikkaMainAnnounced',
      title: 'Hikka · Анонсовані',
      index: 2,
      filters: {
        media_type: ['tv', 'movie', 'ona'],
        status: ['announced'],
        season: [],
        rating: [],
        years: [],
        genres: [],
        studios: [],
        only_translated: false,
        sort: ['start_date:asc']
      }
    }];
    rows.forEach(function (row) {
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: ['main'],
        call: createCall(row)
      });
    });
  }
  function initRows() {
    if (initialized) return;
    if (!Lampa || !Lampa.ContentRows || typeof Lampa.ContentRows.add !== 'function') return;
    initialized = true;
    registerRows();
  }

  function init() {
    // Додаємо стилі для плагіну через шаблонну систему
    Lampa.Template.add('hikka_styles', "\n        <style>\n        .hikka-card .card__icons .icon--ua{background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.hikka-card.hikka-hide-type .card__type{display:none !important;visibility:hidden !important;opacity:0 !important;position:absolute !important;left:-9999px !important;z-index:-1 !important}.hikka-card .hikka-anime-card__rating,.hikka-card .hikka-anime-card__episodes,.hikka-card .hikka-anime-card__status{font-size:12px;color:rgba(255,255,255,0.8);margin-top:2px}.hikka-card .hikka-anime-card__rating{color:#ffd700}.hikka-card .hikka-anime-card__status{color:#90ee90}.hikka-card.hikka-hide-type .card__type{display:none !important}.hikka-card .hikka-custom-translate-badge{position:absolute;bottom:8px;left:8px;background:-webkit-gradient(linear,left top,right top,from(#0057b7),to(#ffd700));background:-webkit-linear-gradient(left,#0057b7 0,#ffd700 100%);background:-o-linear-gradient(left,#0057b7 0,#ffd700 100%);background:linear-gradient(90deg,#0057b7 0,#ffd700 100%);color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.5);padding:2px 6px;-webkit-border-radius:3px;border-radius:3px;text-transform:uppercase;z-index:10}.hikka-card .hikka-custom-type-badge{position:absolute;top:8px;left:8px;background:-webkit-linear-gradient(315deg,#667eea 0,#764ba2 100%);background:-o-linear-gradient(315deg,#667eea 0,#764ba2 100%);background:linear-gradient(135deg,#667eea 0,#764ba2 100%);color:white;padding:2px 6px;-webkit-border-radius:3px;border-radius:3px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;z-index:10}.hikka-card.card--tv .hikka-custom-type-badge{background-color:rgba(0,123,255,0.8) !important}.hikka-card.card--movie .hikka-custom-type-badge{background-color:rgba(220,53,69,0.8) !important}.hikka-card.card--ova .hikka-custom-type-badge,.hikka-card.card--ona .hikka-custom-type-badge,.hikka-card.card--special .hikka-custom-type-badge,.hikka-card.card--music .hikka-custom-type-badge{background-color:rgba(108,117,125,0.8) !important}.hikka-character{padding:2em 1.5em}.hikka-character__body{max-width:48em;margin:0 auto}.hikka-character__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:1em;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.hikka-character__image{width:12em;height:12em;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 .6em 1.4em rgba(0,0,0,0.35);box-shadow:0 .6em 1.4em rgba(0,0,0,0.35)}.hikka-character__name{font-size:1.8em;font-weight:700;color:rgba(255,255,255,0.8)}.hikka-character__role{font-size:1.1em;color:rgba(255,255,255,0.6)}.hikka-character__meta{display:grid;gap:.4em;padding:.8em 1em;-webkit-border-radius:.8em;border-radius:.8em;background:rgba(255,255,255,0.06)}.hikka-character__meta-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:1em;font-size:.95em}.hikka-character__meta-label{color:rgba(255,255,255,0.6)}.hikka-character__meta-value{color:rgba(255,255,255,0.8)}.hikka-character__description{max-width:40em;line-height:1.6;color:rgba(255,255,255,0.8)}.hikka-full-active .full-review-add,.hikka-full-active .full-review__footer,.hikka-full-active .full-review__like,.hikka-full-active .full-review__like-icon{display:none !important}\n        </style>\n    ");
    // Inject styles
    $('body').append(Lampa.Template.get('hikka_styles'));

    // Додаємо пункт меню
    addMenuItem();

    // Реєстрація провайдера джерела для Full
    try {
      if (Lampa.Api) {
        Lampa.Api.sources = Lampa.Api.sources || {};
        if (!Lampa.Api.sources.hikka) {
          Lampa.Api.sources.hikka = HikkaSourceProvider;
          console.log('[Hikka] Source provider registered');
        }
      }
    } catch (e) {
      console.warn('[Hikka] Failed to register source provider:', e);
    }

    // Додаємо лайни Hikka на головну через ContentRows
    initRows();

    // Реєструємо компонент
    Lampa.Component.add('hikka_anime', Component);
    Lampa.Component.add('hikka_character', HikkaCharacter);

    // Перевизначення поведінки чипів Full та приховування форми додавання коментаря
    overrideFullChipsAndDiscuss();

    // Перехоплення переходів у company → перенаправлення у category_full (для source=hikka)
    try {
      if (!Lampa.__hikkaPatchedPush) {
        Lampa.__hikkaPatchedPush = true;
        var __origPush = Lampa.Activity.push;
        Lampa.Activity.push = function (obj) {
          try {
            var source = obj && (obj.source || obj.card && obj.card.source || obj.movie && obj.movie.source);
            if (obj && source === 'hikka' && obj.component === 'actor') {
              var name = obj.name || obj.title || obj.character || 'Персонаж';
              if (obj.name || obj.character || obj.img) {
                return __origPush({
                  url: '',
                  title: name,
                  component: 'hikka_character',
                  page: 1,
                  source: 'hikka',
                  name: obj.name,
                  character: obj.character || obj.role,
                  img: obj.img
                });
              }
              Lampa.Noty.show('Персонажі Hikka недоступні');
              return;
            }
            if (obj && source === 'hikka' && obj.component === 'company') {
              var studios = obj.id ? [obj.id] : [];
              return __origPush({
                url: '',
                title: obj.title || obj.name || 'Hikka Studio',
                component: 'category_full',
                page: 1,
                source: 'hikka',
                studios: studios
              });
            }
          } catch (err) {
            console.log('[Hikka] interceptActivityPush error:', err);
          }
          return __origPush(obj);
        };
      }
    } catch (e) {
      console.log('[Hikka] Failed to patch Activity.push:', e);
    }
  }

  if (!window.plugin_hikka_ready) {
    window.plugin_hikka_ready = true;
    if (window.appready) {
      init();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          init();
        }
      });
    }
  }

})();
