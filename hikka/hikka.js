(function () {
  'use strict';

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
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
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _superPropGet(t, o, e, r) {
    var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
    return 2 & r && "function" == typeof p ? function (t) {
      return p.apply(e, t);
    } : p;
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

  var network = new Lampa.Reguest();
  var proxy_url = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/';
  var api_url = proxy_url + 'https://api.hikka.io/';

  // Функція для створення заголовків з проксі хедером
  function getProxyHeaders() {
    var additionalHeaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread2({
      'x-requested-with': 'lme-ukraine'
    }, additionalHeaders);
  }

  // Маппінг статусів для локалізації
  var STATUS_MAP = {
    'finished': 'Завершено',
    'ongoing': 'Виходить',
    'announced': 'Анонсовано',
    'paused': 'Призупинено',
    'discontinued': 'Скасовано'
  };
  var MEDIA_TYPE_MAP = {
    'tv': 'ТВ Серіал',
    'movie': 'Фільм',
    'ova': 'OVA',
    'ona': 'ONA',
    'special': 'Спеціальний',
    'music': 'Музичний'
  };
  function normalizeAnimeData(anime) {
    // Отримуємо правильну локалізовану назву типу медіа
    var getMediaTypeLabel = function getMediaTypeLabel(mediaType) {
      return MEDIA_TYPE_MAP[mediaType] || mediaType || 'ТВ Серіал';
    };
    return {
      id: anime.slug,
      title: anime.title_ua || anime.title_en || anime.title_ja,
      name: anime.title_ua || anime.title_en,
      original_title: anime.title_en || anime.title_ja,
      // КЛЮЧОВЕ ПОЛЕ: original_name визначає тип картки (TV vs MOV)
      original_name: anime.media_type === 'movie' ? null : anime.title_en || anime.title_ja || anime.title_ua,
      img: anime.image,
      poster: anime.image,
      vote_average: anime.score || anime.native_score || 0,
      overview: anime.synopsis_ua || anime.synopsis_en || '',
      year: anime.year,
      release_year: anime.year || '2023',
      status: STATUS_MAP[anime.status] || anime.status,
      // Використовуємо quality для заміни стандартного бейджу типу
      quality: getMediaTypeLabel(anime.media_type),
      // Поле для іконки перекладу
      has_translation: anime.translated_ua,
      translated_ua: true,
      // Для іконки українського прапора
      hikka_slug: anime.slug
    };
  }
  var Api = {
    getAnimeList: function getAnimeList(success, error) {
      var url = api_url + 'anime';
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
      var url = api_url + 'anime';

      // Add page as URL parameter, not in POST body
      if (page > 1) {
        url += '?page=' + page;
      }
      var postData = {
        media_type: filters.media_type || [],
        status: filters.status || [],
        season: filters.season || [],
        rating: filters.rating || [],
        years: [],
        genres: filters.genres || [],
        // Додаємо підтримку жанрів
        studios: [],
        only_translated: filters.only_translated || false,
        // Додаємо підтримку only_translated
        sort: filters.sort || ['score:desc']
      };
      console.log('[Hikka] Fetching anime with filters:', postData, 'Page:', page);
      network["native"](url, function (data) {
        console.log('[Hikka] Response:', data);
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
    getTmdbId: function getTmdbId(hikka_slug, success, error) {
      console.log('[Hikka] Starting TMDB mapping for:', hikka_slug);

      // Step 1: Get anime details from Hikka API to get mal_id
      var hikka_url = api_url + 'anime/' + hikka_slug;
      network.silent(hikka_url, function (hikka_data) {
        console.log('[Hikka] Hikka response:', hikka_data);
        if (hikka_data && hikka_data.mal_id) {
          var mal_id = hikka_data.mal_id;
          console.log('[Hikka] Found MAL ID:', mal_id);

          // Step 2: Get Trakt data from MyAnimeList API
          var mal_api_url = proxy_url + 'https://animeapi.my.id/myanimelist/' + mal_id;
          network.silent(mal_api_url, function (mal_data) {
            console.log('[Hikka] MAL API response:', mal_data);
            if (mal_data && mal_data.trakt && mal_data.trakt_type) {
              var trakt_id = mal_data.trakt;
              var trakt_type = mal_data.trakt_type;

              // Remove 's' from end of trakt_type (movies -> movie, shows -> show)
              if (trakt_type.endsWith('s')) {
                trakt_type = trakt_type.slice(0, -1);
              }
              console.log('[Hikka] Found Trakt ID:', trakt_id, 'Type:', trakt_type);

              // Step 3: Get TMDB ID from Trakt API
              var trakt_api_url = proxy_url + 'https://api.trakt.tv/search/trakt/' + trakt_id + '?type=' + trakt_type;
              network.silent(trakt_api_url, function (trakt_data) {
                console.log('[Hikka] Trakt API response:', trakt_data);
                if (trakt_data && trakt_data.length > 0) {
                  var tmdb_id = null;
                  var media_type = null;

                  // Extract TMDB ID based on type
                  if (trakt_data[0].movie && trakt_data[0].movie.ids && trakt_data[0].movie.ids.tmdb) {
                    tmdb_id = trakt_data[0].movie.ids.tmdb;
                    media_type = 'movie';
                  } else if (trakt_data[0].show && trakt_data[0].show.ids && trakt_data[0].show.ids.tmdb) {
                    tmdb_id = trakt_data[0].show.ids.tmdb;
                    media_type = 'tv';
                  }
                  if (tmdb_id) {
                    console.log('[Hikka] Success! TMDB ID:', tmdb_id, 'Type:', media_type);
                    success(tmdb_id, media_type);
                  } else {
                    console.log('[Hikka] No TMDB ID found in Trakt response');
                    error('TMDB ID не знайдено в Trakt відповіді');
                  }
                } else {
                  console.log('[Hikka] Empty Trakt response');
                  error('Порожня відповідь від Trakt API');
                }
              }, function (trakt_error) {
                console.log('[Hikka] Trakt API error:', trakt_error);
                error('Помилка Trakt API');
              }, false, {
                headers: getProxyHeaders({
                  'trakt-api-version': '2',
                  'trakt-api-key': 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b'
                })
              });
            } else {
              console.log('[Hikka] No Trakt data in MAL response');
              error('Trakt дані не знайдені в MAL відповіді');
            }
          }, function (mal_error) {
            console.log('[Hikka] MAL API error:', mal_error);
            error('Помилка MAL API');
          });
        } else {
          console.log('[Hikka] No MAL ID in Hikka response');
          error('MAL ID не знайдено в Hikka відповіді');
        }
      }, function (hikka_error) {
        console.log('[Hikka] Hikka API error:', hikka_error);
        error('Помилка Hikka API');
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    getGenres: function getGenres(success, error) {
      console.log('[Hikka] Fetching genres from API');
      var url = api_url + 'genres';
      network.silent(url, function (data) {
        console.log('[Hikka] Genres response:', data);
        if (data && data.list) {
          success(data);
        } else {
          console.log('[Hikka] No genres data received');
          error();
        }
      }, function (err) {
        console.log('[Hikka] Error fetching genres:', err);
        error();
      });
    }
  };

  // Функція для видалення елемента
  function remove(elem) {
    if (elem) elem.remove();
  }

  // Кастомна аніме картка з розширеними параметрами
  var AnimeCard = /*#__PURE__*/function (_Lampa$Card) {
    function AnimeCard(data) {
      var _this;
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, AnimeCard);
      _this = _callSuper(this, AnimeCard, [data, params]);
      _this.data = data;
      return _this;
    }
    _inherits(AnimeCard, _Lampa$Card);
    return _createClass(AnimeCard, [{
      key: "build",
      value: function build() {
        console.log('[Hikka] Starting AnimeCard build for:', this.data.title || 'Unknown');

        // Спочатку викликаємо батьківський build для ініціалізації стандартної структури
        _superPropGet(AnimeCard, "build", this, 3)([]);

        // Перевіряємо чи карта була створена правильно
        if (!this.card) {
          console.error('[Hikka] Card element not created by parent build');
          return;
        }
        console.log('[Hikka] Parent build completed, card structure exists');

        // Створюємо кастомний бейдж типу для всіх карток
        this.createCustomTypeBadge();

        // Додаємо іконку перекладу для has_translation після створення бейджу
        if (this.data.has_translation) {
          console.log('[Hikka] Adding translation icon');
          this.addicon('book'); // Використовуємо book як тимчасову іконку
        }
      }

      /**
       * Завантажити зображення
       */
    }, {
      key: "image",
      value: function image() {
        var _this2 = this;
        // Перевизначаємо батьківський метод для використання правильного джерела зображення
        if (this.data.img) {
          this.img.src = this.data.img;
        } else if (this.data.poster) {
          this.img.src = this.data.poster;
        } else {
          this.img.src = './img/img_broken.svg';
        }
        this.img.onload = function () {
          _this2.card.classList.add('card--loaded');
        };
        this.img.onerror = function () {
          _this2.img.src = './img/img_broken.svg';
        };
      }

      /**
       * Створити картку
       */
    }, {
      key: "create",
      value: function create() {
        var _this3 = this;
        this.build();
        this.card.addEventListener('hover:focus', function () {
          if (_this3.onFocus) _this3.onFocus(_this3.card, _this3.data);
        });
        this.card.addEventListener('hover:touch', function () {
          if (_this3.onTouch) _this3.onTouch(_this3.card, _this3.data);
        });
        this.card.addEventListener('hover:hover', function () {
          if (_this3.onHover) _this3.onHover(_this3.card, _this3.data);
        });
        this.card.addEventListener('hover:enter', function () {
          // Запобігаємо повторним натисканням
          if (_this3.loading) return;
          _this3.loading = true;

          // Показуємо індикатор завантаження
          var loader = document.createElement('div');
          loader.innerHTML = '⏳';
          loader.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 20px; z-index: 1000;';
          _this3.card.appendChild(loader);

          // Використовуємо централізований API метод
          Api.getTmdbId(_this3.data.id, function (tmdb_id, media_type) {
            _this3.loading = false;

            // Видаляємо індикатор завантаження
            if (loader.parentNode) loader.parentNode.removeChild(loader);
            if (tmdb_id) {
              console.log('Navigating to TMDB card:', tmdb_id, media_type);
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: tmdb_id,
                method: media_type === 'movie' ? 'movie' : 'tv',
                card: _objectSpread2(_objectSpread2({}, _this3.data), {}, {
                  id: tmdb_id
                }),
                source: 'tmdb'
              });
            } else {
              // Якщо не вдалося отримати TMDB ID, показуємо детальну інформацію з hikka
              console.log('Navigating to Hikka details');
              Lampa.Activity.push({
                url: _this3.data.id,
                title: _this3.data.title || _this3.data.name,
                component: 'hikka_anime_details',
                anime_data: _this3.data,
                page: 1
              });
            }
          }, function (error) {
            _this3.loading = false;
            if (loader.parentNode) loader.parentNode.removeChild(loader);
            console.log('[Hikka] Error getting TMDB ID:', error);
            Lampa.Noty.show('Помилка при пошуку TMDB ID: ' + error);
          });
        });
        this.image();
      }

      /**
       * Завантажити зображення коли картка видима
       */
    }, {
      key: "visible",
      value: function visible() {
        if (this.onVisible) this.onVisible(this.card, this.data);
      }

      /**
       * Знищити картку
       */
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.img) {
          this.img.onerror = function () {};
          this.img.onload = function () {};
          this.img.src = '';
        }
        remove(this.card);
        this.card = null;
        this.img = null;
      }

      /**
       * Створюємо кастомний бейдж типу замість стандартного
       */
    }, {
      key: "createCustomTypeBadge",
      value: function createCustomTypeBadge() {
        console.log('[Hikka] Creating custom type badge:', this.data.quality);

        // Ховаємо стандартний бейдж типу
        this.card.classList.add('hikka-hide-type');

        // Створюємо кастомний бейдж типу
        if (this.data.quality) {
          var customBadge = document.createElement('div');
          customBadge.className = 'hikka-custom-type-badge';
          customBadge.innerText = this.data.quality;

          // Додаємо кастомний бейдж в card__view
          var viewElement = this.card.querySelector('.card__view');
          if (viewElement) {
            viewElement.appendChild(customBadge);
            console.log('[Hikka] Custom type badge created:', this.data.quality);
          }
        }
      }

      /**
       * Рендер
       */
    }, {
      key: "render",
      value: function render(js) {
        return js ? this.card : $(this.card);
      }
    }]);
  }(Lampa.Card);

  function component(object) {
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var items = [];
    var html = document.createElement('div');
    var contentContainer = document.createElement('div');
    var active = 0;
    var last;
    var total_pages = 1;
    var current_page = 1;
    var loading = false;

    // Фільтри
    var filters = {
      media_type: [],
      status: [],
      season: [],
      rating: [],
      sort: ['score:desc'],
      genres: [],
      // Додаємо genres фільтр
      only_translated: false // Додаємо only_translated фільтр
    };

    // Кеш для жанрів
    var genresCache = null;
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
      }
      // Жанри будуть завантажені динамічно
      ]
    };
    this.create = function () {
      var _this = this;
      this.activity.loader(true);
      html.classList.add('layer--wheight');

      // Create custom filter panel
      this.buildFilters();

      // Content container for scrollable items
      contentContainer.classList.add('category-full', 'items', 'items--cards');
      scroll.append(contentContainer);
      scroll.onScroll = this.limit.bind(this);
      scroll.onWheel = function (step) {
        if (!Lampa.Controller.own(_this)) _this.start();
        if (step > 0) Navigator.move('down');else Navigator.move('up');
      };

      // Append scroll to html
      var scrollRendered = scroll.render();
      html.appendChild(scrollRendered instanceof jQuery ? scrollRendered[0] : scrollRendered);
      this.load();
      return html;
    };
    this.buildFilters = function () {
      var _this2 = this;
      // Create custom filter panel
      var filterPanel = document.createElement('div');
      filterPanel.className = 'filter-panel';
      var filterScroll = new Lampa.Scroll({
        mask: false,
        over: true,
        horizontal: true
      });
      var filterBody = document.createElement('div');
      filterBody.className = 'hikka torrent-filter';

      // Media Type filter
      var mediaTypeBtn = document.createElement('div');
      mediaTypeBtn.className = 'simple-button simple-button--filter selector';
      mediaTypeBtn.innerHTML = '<span>Тип</span>';
      $(mediaTypeBtn).on('hover:enter', function () {
        _this2.showFilterSelect('media_type', FILTER_OPTIONS.media_type, mediaTypeBtn);
      });

      // Status filter
      var statusBtn = document.createElement('div');
      statusBtn.className = 'simple-button simple-button--filter selector';
      statusBtn.innerHTML = '<span>Статус</span>';
      $(statusBtn).on('hover:enter', function () {
        _this2.showFilterSelect('status', FILTER_OPTIONS.status, statusBtn);
      });

      // Season filter
      var seasonBtn = document.createElement('div');
      seasonBtn.className = 'simple-button simple-button--filter selector';
      seasonBtn.innerHTML = '<span>Сезон</span>';
      $(seasonBtn).on('hover:enter', function () {
        _this2.showFilterSelect('season', FILTER_OPTIONS.season, seasonBtn);
      });

      // Rating filter
      var ratingBtn = document.createElement('div');
      ratingBtn.className = 'simple-button simple-button--filter selector';
      ratingBtn.innerHTML = '<span>Рейтинг</span>';
      $(ratingBtn).on('hover:enter', function () {
        _this2.showFilterSelect('rating', FILTER_OPTIONS.rating, ratingBtn);
      });

      // Sort filter
      var sortBtn = document.createElement('div');
      sortBtn.className = 'simple-button simple-button--filter selector';
      sortBtn.innerHTML = '<span>Сортування</span>';
      $(sortBtn).on('hover:enter', function () {
        _this2.showFilterSelect('sort', FILTER_OPTIONS.sort.filter(function (item) {
          return !item.value.includes('title');
        }), sortBtn);
      });

      // Genre filter - новий фільтр зі спеціальною логікою
      var genreBtn = document.createElement('div');
      genreBtn.className = 'simple-button simple-button--filter selector';
      genreBtn.innerHTML = '<span>Жанр</span>';
      $(genreBtn).on('hover:enter', function () {
        // Використовуємо спеціальну функцію для жанрів замість стандартної
        _this2.showGenresSelector(genreBtn);
      });

      // Only Translated toggle filter
      var onlyTranslatedBtn = document.createElement('div');
      onlyTranslatedBtn.className = 'simple-button simple-button--filter selector';
      onlyTranslatedBtn.innerHTML = '<span>Переклад</span>';
      $(onlyTranslatedBtn).on('hover:enter', function () {
        _this2.showOnlyTranslatedToggle(onlyTranslatedBtn);
      });

      // Reset filters button
      var resetBtn = document.createElement('div');
      resetBtn.className = 'simple-button simple-button--filter selector';
      resetBtn.innerHTML = '<span>Скинути</span>';
      $(resetBtn).on('hover:enter', function () {
        _this2.resetAllFilters();
      });
      filterBody.appendChild(mediaTypeBtn);
      filterBody.appendChild(statusBtn);
      filterBody.appendChild(seasonBtn);
      filterBody.appendChild(ratingBtn);
      filterBody.appendChild(sortBtn);
      filterBody.appendChild(genreBtn); // Додаємо кнопку жанрів
      filterBody.appendChild(onlyTranslatedBtn); // Додаємо кнопку перекладу
      filterBody.appendChild(resetBtn); // Додаємо кнопку скидання

      filterScroll.append(filterBody);
      filterPanel.appendChild(filterScroll.render()[0]);
      html.appendChild(filterPanel);
    };
    this.showFilterSelect = function (filterType, options, buttonElement) {
      var _this3 = this;
      Lampa.Select.show({
        title: 'Оберіть опцію',
        items: options,
        onSelect: function onSelect(item) {
          console.log('[Hikka Filter] Selected:', filterType, item);

          // Update filter value
          if (filterType === 'sort') {
            filters.sort = [item.value];
          } else {
            filters[filterType] = item.value ? [item.value] : [];
          }

          // Update button text with shorter format
          var shortTitle = item.title;
          if (item.title.length > 15) {
            // Скорочуємо довгі назви
            if (item.title === 'За рейтингом ↓') shortTitle = 'Рейтинг ↓';else if (item.title === 'За рейтингом ↑') shortTitle = 'Рейтинг ↑';else if (item.title === 'За датою ↓') shortTitle = 'Дата ↓';else if (item.title === 'За датою ↑') shortTitle = 'Дата ↑';else if (item.title === 'За назвою ↓') shortTitle = 'Назва ↓';else if (item.title === 'За назвою ↑') shortTitle = 'Назва ↑';else if (item.title.startsWith('Всі')) shortTitle = 'Всі';else shortTitle = item.title.substring(0, 12) + '...';
          }
          buttonElement.querySelector('span').textContent = shortTitle;
          current_page = 1;
          _this3.clear();
          _this3.load();
        }
      });
    };
    this.load = function () {
      var _this4 = this;
      if (loading) return;
      loading = true;
      Api.getAnimeListWithFilters(filters, current_page, function (data) {
        loading = false;
        _this4.activity.loader(false);
        if (data && data.results && data.results.length) {
          total_pages = data.total_pages || 1;
          _this4.append(data.results);
          if (current_page === 1) {
            scroll.minus();
          }
          if (current_page < total_pages) {
            scroll.onEnd = function () {
              if (!loading) {
                current_page++;
                _this4.load();
              }
            };
          } else {
            scroll.onEnd = null;
          }
        } else if (current_page === 1) {
          _this4.empty();
        }
      }, function () {
        loading = false;
        _this4.activity.loader(false);
        if (current_page === 1) {
          _this4.empty();
        }
      });
    };
    this.append = function (results) {
      var _this5 = this;
      results.forEach(function (element) {
        var card = new AnimeCard(element, {
          object: object,
          card_category: true,
          card_small: false
        });
        card.create();
        card.onFocus = function (target, card_data) {
          last = target;
          active = items.indexOf(card);
          scroll.update(card.render(true));
          if (card_data.img || card_data.poster) {
            Lampa.Background.change(card_data.img || card_data.poster);
          }
        };
        card.onEnter = function (target, card_data) {
          console.log('[Hikka] Clicked on card:', card_data.hikka_slug);
          _this5.activity.loader(true);
          Api.getTmdbId(card_data.hikka_slug, function (tmdb_id, media_type) {
            console.log('[Hikka] Found TMDB ID:', tmdb_id, 'Type:', media_type);
            if (tmdb_id) {
              // Переходимо до стандартного компонента full з TMDB даними
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: tmdb_id,
                method: media_type === 'movie' ? 'movie' : 'tv',
                card: _objectSpread2(_objectSpread2({}, card_data), {}, {
                  id: tmdb_id
                }),
                source: 'tmdb'
              });
              _this5.activity.loader(false);
            } else {
              _this5.activity.loader(false);
              console.log('[Hikka] TMDB ID not found for:', card_data.hikka_slug);
              Lampa.Noty.show('TMDB ID не знайдено для цього аніме');
            }
          }, function (error) {
            _this5.activity.loader(false);
            console.log('[Hikka] Error getting TMDB ID:', error);
            Lampa.Noty.show('Помилка при пошуку TMDB ID: ' + error);
          });
        };
        var cardElement = card.render(true);
        cardElement.classList.add('selector');
        contentContainer.appendChild(cardElement);
        items.push(card);
      });
      if (current_page === 1) {
        Lampa.Layer.update(html);
        this.activity.toggle();
        this.start();
      } else {
        results.forEach(function (element, index) {
          var cardIndex = items.length - results.length + index;
          if (items[cardIndex]) {
            Lampa.Controller.collectionAppend(items[cardIndex].render(true));
          }
        });
      }
      this.limit();
    };
    this.limit = function () {
      var limit_view = 12;
      var limit_collection = 36;
      var collection = items.slice(Math.max(0, active - limit_view), active + limit_view);
      items.forEach(function (item) {
        if (collection.indexOf(item) === -1) {
          item.render(true).classList.remove('layer--render');
        } else {
          item.render(true).classList.add('layer--render');
        }
      });
      Navigator.setCollection(items.slice(Math.max(0, active - limit_collection), active + limit_collection).map(function (c) {
        return c.render(true);
      }));
      Navigator.focused(last);
      Lampa.Layer.visible(scroll.render(true));
    };
    this.render = function () {
      return html;
    };
    this.clear = function () {
      items.forEach(function (item) {
        return item.destroy();
      });
      items = [];
      contentContainer.innerHTML = '';
      last = null;
      active = 0;
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      contentContainer.appendChild(empty.render(true));
      this.start = empty.start;
      this.activity.toggle();
    };
    this.start = function () {
      var _this6 = this;
      if (Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        link: this,
        toggle: function toggle() {
          if (_this6.activity.canRefresh()) return false;
          Lampa.Controller.collectionSet(contentContainer, scroll.render(true));
          var filterButtons = html.querySelectorAll('.simple-button--filter.selector');
          filterButtons.forEach(function (button) {
            Lampa.Controller.collectionAppend(button);
          });
          Lampa.Controller.collectionFocus(last || false, contentContainer, scroll.render(true));
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
          if (Navigator.canmove('down')) Navigator.move('down');else if (current_page < total_pages && !loading) {
            current_page++;
            _this6.load();
          }
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
    };
    this.pause = function () {};
    this.stop = function () {};
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      contentContainer.remove();
      items = [];
    };

    // Мапа типів жанрів для локалізації
    var GENRE_TYPE_MAP = {
      'theme': 'Тематичне',
      'genre': 'Основне',
      'demographic': 'Демографічне',
      'explicit': 'Для дорослих'
    };

    // Функція для групування жанрів за типами
    this.groupGenresByType = function (genres) {
      var grouped = {};
      genres.forEach(function (genre) {
        var type = genre.type;
        if (!grouped[type]) {
          grouped[type] = [];
        }
        grouped[type].push(genre);
      });
      return grouped;
    };

    // Функція для завантаження жанрів
    this.loadGenres = function (callback) {
      if (genresCache) {
        callback(genresCache);
        return;
      }
      Api.getGenres(function (data) {
        if (data && data.list) {
          genresCache = data.list;
          callback(genresCache);
        } else {
          console.error('[Hikka] No genres received');
          callback([]);
        }
      }, function (error) {
        console.error('[Hikka] Error loading genres:', error);
        callback([]);
      });
    };

    // Спеціальна функція для показу селектора жанрів
    this.showGenresSelector = function (buttonElement) {
      var _this7 = this;
      this.loadGenres(function (genres) {
        if (genres.length === 0) {
          Lampa.Noty.show('Помилка завантаження жанрів');
          return;
        }
        var grouped = _this7.groupGenresByType(genres);

        // Створюємо список типів жанрів для першого кроку
        var typeItems = Object.keys(grouped).map(function (type) {
          return {
            title: GENRE_TYPE_MAP[type] || type,
            value: type,
            genres: grouped[type]
          };
        });

        // Показуємо перший рівень - типи жанрів
        Lampa.Select.show({
          title: 'Оберіть тип жанру',
          items: typeItems,
          onSelect: function onSelect(selectedType) {
            // Показуємо другий рівень - конкретні жанри
            var genreItems = selectedType.genres.map(function (genre) {
              return {
                title: genre.name_ua || genre.name_en,
                value: genre.slug,
                genre: genre
              };
            });

            // Додаємо опцію "Всі" на початок
            genreItems.unshift({
              title: 'Всі жанри цього типу',
              value: '',
              genre: null
            });
            Lampa.Select.show({
              title: selectedType.title,
              items: genreItems,
              onSelect: function onSelect(selectedGenre) {
                console.log('[Hikka] Selected genre:', selectedGenre);

                // Оновлюємо фільтр
                if (selectedGenre.value) {
                  filters.genres = [selectedGenre.value];
                  // Скорочуємо назву жанру для кнопки
                  var shortGenreName = selectedGenre.title;
                  if (shortGenreName.length > 10) {
                    shortGenreName = shortGenreName.substring(0, 10) + '...';
                  }
                  buttonElement.querySelector('span').textContent = shortGenreName;
                } else {
                  filters.genres = [];
                  buttonElement.querySelector('span').textContent = 'Жанр';
                }

                // Перезавантажуємо дані
                current_page = 1;
                _this7.clear();
                _this7.load();
              },
              onBack: function onBack() {
                // Повертаємося до вибору типу жанру
                _this7.showGenresSelector(buttonElement);
              }
            });
          }
        });
      });
    };
    this.showOnlyTranslatedToggle = function (buttonElement) {
      filters.only_translated = !filters.only_translated;

      // Використовуємо короткі позначення
      buttonElement.querySelector('span').textContent = filters.only_translated ? 'З перекладом' : 'Переклад';
      current_page = 1;
      this.clear();
      this.load();
    };
    this.resetAllFilters = function () {
      // Скидаємо всі фільтри до значень за замовчуванням
      filters = {
        media_type: [],
        status: [],
        season: [],
        rating: [],
        sort: ['score:desc'],
        genres: [],
        only_translated: false
      };

      // Оновлюємо текст всіх кнопок фільтрів до початкових коротких назв
      var filterButtons = html.querySelectorAll('.simple-button--filter.selector span');
      filterButtons.forEach(function (span, index) {
        // Визначаємо кнопку за позицією або текстом
        if (index === 0 || span.textContent.includes('Тип') || span.textContent === 'Всі') {
          span.textContent = 'Тип';
        } else if (index === 1 || span.textContent.includes('Статус') || span.textContent.includes('Завершено')) {
          span.textContent = 'Статус';
        } else if (index === 2 || span.textContent.includes('Сезон') || span.textContent.includes('Зима')) {
          span.textContent = 'Сезон';
        } else if (index === 3 || span.textContent.includes('Рейтинг') || span.textContent === 'G') {
          span.textContent = 'Рейтинг';
        } else if (index === 4 || span.textContent.includes('Сортування') || span.textContent.includes('↓') || span.textContent.includes('↑')) {
          span.textContent = 'Сортування';
        } else if (index === 5 || span.textContent.includes('Жанр') || span.textContent.includes('...')) {
          span.textContent = 'Жанр';
        } else if (index === 6 || span.textContent.includes('Переклад') || span.textContent.includes('перекладом')) {
          span.textContent = 'Переклад';
        } else if (index === 7 || span.textContent === 'Скинути') ;
      });

      // Показуємо повідомлення про скидання
      Lampa.Noty.show('Фільтри скинуто');
      current_page = 1;
      this.clear();
      this.load();
    };
  }

  function startPlugin() {
    // Додаємо стилі для плагіну через шаблонну систему
    function addStyles() {
      Lampa.Template.add('hikka_styles', "\n            <style>\n            @charset 'UTF-8';.card__icons .icon--ua{background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.card__quality[data-quality=ua]{display:none}.card__quality[data-quality=ua]::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.card__icons .icon--ua{background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.card--tv .card__type,.card--movie .card__type,.card--ova .card__type,.card--ona .card__type,.card--special .card__type,.card--music .card__type{display:none !important;visibility:hidden !important;opacity:0 !important;position:absolute !important;left:-9999px !important;z-index:-1 !important}.hikka-custom-type-badge{position:absolute;top:8px;left:8px;background:-webkit-linear-gradient(315deg,#667eea 0,#764ba2 100%);background:-o-linear-gradient(315deg,#667eea 0,#764ba2 100%);background:linear-gradient(135deg,#667eea 0,#764ba2 100%);color:white;padding:2px 6px;-webkit-border-radius:3px;border-radius:3px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;z-index:10}.hikka-anime-card__rating,.hikka-anime-card__episodes,.hikka-anime-card__status{font-size:12px;color:rgba(255,255,255,0.8);margin-top:2px}.hikka-anime-card__rating{color:#ffd700}.hikka-anime-card__status{color:#90ee90}.hikka-custom-type.card--tv,.card--tv .hikka-custom-type{background-color:rgba(0,123,255,0.8) !important}.hikka-custom-type.card--movie,.card--movie .hikka-custom-type{background-color:rgba(220,53,69,0.8) !important}.hikka-custom-type.card--ova,.hikka-custom-type.card--ona,.hikka-custom-type.card--special,.hikka-custom-type.card--music,.card--ova .hikka-custom-type,.card--ona .hikka-custom-type,.card--special .hikka-custom-type,.card--music .hikka-custom-type{background-color:rgba(108,117,125,0.8) !important}\n            </style>\n        ");
    }

    // Додаємо пункт у меню
    function addMenuItem() {
      var button = $("<li class=\"menu__item selector\" data-action=\"hikka_anime\">\n            <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\">\n                    <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n                    <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n                    <g id=\"SVGRepo_iconCarrier\">\n                        <defs>\n                            <style>.a{fill:currentColor;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;}</style>\n                        </defs>\n                        <rect class=\"a\" x=\"6.1336\" y=\"9.4032\" width=\"35.7327\" height=\"26.5581\" rx=\"6.7532\"></rect>\n                        <line class=\"a\" x1=\"17.4835\" y1=\"4.5\" x2=\"20.4078\" y2=\"9.4032\"></line>\n                        <line class=\"a\" x1=\"13.2594\" y1=\"21.6849\" x2=\"20.0829\" y2=\"18.9592\"></line>\n                        <line class=\"a\" x1=\"30.5165\" y1=\"4.5\" x2=\"27.5922\" y2=\"9.4032\"></line>\n                        <line class=\"a\" x1=\"34.7406\" y1=\"21.6849\" x2=\"27.9171\" y2=\"18.9592\"></line>\n                        <path class=\"a\" d=\"M29.0544,24.9161c-.5827,1.4721-1.1508,2.54-2.5273,2.54-1.074,0-1.666-.4976-2.5271-1.8363-.8611,1.3387-1.4531,1.8363-2.5271,1.8363-1.3765,0-1.9446-1.0682-2.5273-2.54\"></path>\n                        <path class=\"a\" d=\"M25.9676,35.9613v2.033s8.6917.2889,8.6917,5.5057H13.3407c0-5.2168,8.6917-5.5057,8.6917-5.5057v-2.033\"></path>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"menu__text\">Hikka Anime</div>\n        </li>");

      // Додаємо обробник події
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'Hikka Anime',
          component: 'hikka_anime',
          page: 1
        });
      });

      // Вставляємо пункт у меню
      $('.menu .menu__list').eq(0).append(button);
    }

    // Реєструємо компонент
    Lampa.Component.add('hikka_anime', component);

    // Додаємо стилі та пункт меню після завантаження додатка
    if (window.appready) {
      addStyles();
      addMenuItem();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          addStyles();
          addMenuItem();
        }
      });
    }
  }

  // Ініціалізація плагіна
  if (!window.plugin_hikka_ready) {
    window.plugin_hikka_ready = true;
    startPlugin();
  }

})();
