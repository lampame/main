(function () {
  'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  /**
   * Kinobaza storage & translations
   * Token храниться в Lampa.Storage с ключем 'kinobaza_token'
   *
   * ПОРЯДОК РОБОТИ З ТЕКСТАМИ:
   * — По максимуму використовуємо вбудовані Lampa.Lang ключі (title_new, title_popular_movie, ...)
   * — Додаємо ТІЛЬКИ специфічні для КіноБази переклади
   * — Не дублюємо те, що вже є в Lampa.Lang
   */

  var TOKEN_KEY = 'kinobaza_token';

  /**
   * Отримати Bearer токен
   * @returns {string|null}
   */
  function getToken() {
    return Lampa.Storage.get(TOKEN_KEY, '');
  }

  /**
   * Зберегти Bearer токен
   * @param {string} token
   */
  function setToken(token) {
    Lampa.Storage.set(TOKEN_KEY, token);
  }

  /**
   * Видалити токен
   */
  function removeToken() {
    Lampa.Storage.set(TOKEN_KEY, '');
  }

  /**
   * Чи є токен
   * @returns {boolean}
   */
  function hasToken() {
    return !!getToken();
  }

  /**
   * Зареєструвати переклади
   *
   * ДОДАЄМО ТІЛЬКИ специфічні для КіноБази ключі.
   * Загальні тексти (Новинки, Рекомендації, Колекція, ...) беремо з Lampa.Lang.translate('title_xxx').
   */
  function registerTranslations() {
    Lampa.Lang.add({
      // ===== КОНТЕНТ-ЛАЙНИ (специфічні для КіноБази) =====

      kinobaza_title: {
        uk: 'КіноБаза',
        ru: 'КиноБаза',
        en: 'KinoBaza',
        be: 'КінаБаза'
      },
      kinobaza_top: {
        uk: 'Топ КіноБаза',
        ru: 'Топ КиноБаза',
        en: 'Top Kinobaza',
        be: 'Топ КінаБаза'
      },
      kinobaza_upcoming: {
        uk: 'Незабаром',
        ru: 'Скоро',
        en: 'Coming Soon',
        be: 'Неўзабаве'
      },
      kinobaza_best_movies: {
        uk: 'Кращі фільми',
        ru: 'Лучшие фильмы',
        en: 'Best Movies',
        be: 'Лепшыя фільмы'
      },
      kinobaza_best_series: {
        uk: 'Кращі серіали',
        ru: 'Лучшие сериалы',
        en: 'Best Series',
        be: 'Лепшыя серыялы'
      },
      kinobaza_ukr_audio_anime: {
        uk: 'Аніме з укр. аудіо',
        ru: 'Аниме с укр. аудио',
        en: 'Anime with Ukr. Audio'
      },
      kinobaza_home: {
        uk: 'Вдома',
        ru: 'Дома',
        en: 'At Home',
        be: 'Дома'
      },
      kinobaza_home_movies: {
        uk: 'Вдома (фільми)',
        ru: 'Дома (фильмы)',
        en: 'At Home (Movies)',
        be: 'Дома (фільмы)'
      },
      kinobaza_home_tv: {
        uk: 'Вдома (серіали)',
        ru: 'Дома (сериалы)',
        en: 'At Home (TV Shows)',
        be: 'Дома (серыялы)'
      },
      kinobaza_popular_movies_7d: {
        uk: 'Популярні фільми за 7 днів',
        ru: 'Популярные фильмы за 7 дней',
        en: 'Popular Movies (7d)',
        be: 'Папулярныя фільмы за 7 дзён'
      },
      kinobaza_popular_tv_7d: {
        uk: 'Популярні серіали за 7 днів',
        ru: 'Популярные сериалы за 7 дней',
        en: 'Popular TV Shows (7d)',
        be: 'Папулярныя серыялы за 7 дзён'
      },
      kinobaza_popular_cartoons: {
        uk: 'Популярні мультфільми',
        ru: 'Популярные мультфильмы',
        en: 'Popular Cartoons',
        be: 'Папулярныя мультфільмы'
      },
      kinobaza_popular_anime: {
        uk: 'Популярні аніме',
        ru: 'Популярные аниме',
        en: 'Popular Anime',
        be: 'Папулярныя анімэ'
      },
      kinobaza_new_on_netflix: {
        uk: 'Нове на Netflix',
        ru: 'Новое на Netflix',
        en: 'New on Netflix',
        be: 'Новае на Netflix'
      },
      kinobaza_new_on_megogo: {
        uk: 'Нове на Megogo',
        ru: 'Новое на Megogo',
        en: 'New on Megogo',
        be: 'Новае на Megogo'
      },
      // ===== ІНТЕРФЕЙС (специфічний для КіноБази) =====

      kinobaza_persons: {
        uk: 'Особи',
        ru: 'Личности',
        en: 'People',
        be: 'Асобы'
      },
      kinobaza_myperson: {
        uk: 'Особи',
        ru: 'Личности',
        en: 'People',
        be: 'Асобы'
      },
      kinobaza_search: {
        uk: 'Результати пошуку',
        ru: 'Результаты поиска',
        en: 'Search Results',
        be: 'Вынікі пошуку'
      },
      kinobaza_dub_actors: {
        uk: 'Актори дубляжу',
        ru: 'Актёры дубляжа',
        en: 'Dub Actors'
      },
      kinobaza_reviews: {
        uk: 'Рецензії',
        ru: 'Рецензии',
        en: 'Reviews'
      },
      kinobaza_trailers: {
        uk: 'Трейлери',
        ru: 'Трейлеры',
        en: 'Trailers',
        be: 'Трэйлеры'
      },
      kinobaza_networks: {
        uk: 'Мережі',
        ru: 'Сети',
        en: 'Networks',
        be: 'Сеткі'
      },
      // ===== ПРОФЕСІЇ ПЕРСОН =====

      kinobaza_job_unknown: {
        uk: 'Невідомо',
        ru: 'Неизвестно',
        en: 'Unknown',
        be: 'Невядома'
      },
      kinobaza_job_actor: {
        uk: 'Актор',
        ru: 'Актер',
        en: 'Actor',
        be: 'Акцёр'
      },
      kinobaza_job_director: {
        uk: 'Режисер',
        ru: 'Режиссер',
        en: 'Director',
        be: 'Рэжысёр'
      },
      kinobaza_job_writer: {
        uk: 'Сценарист',
        ru: 'Сценарист',
        en: 'Screenwriter',
        be: 'Сцэнарыст'
      },
      kinobaza_job_creator: {
        uk: 'Творець',
        ru: 'Создатель',
        en: 'Creator',
        be: 'Стваральнік'
      },
      kinobaza_job_composer: {
        uk: 'Композитор',
        ru: 'Композитор',
        en: 'Composer',
        be: 'Кампазітар'
      }
    });
  }
  var storage = {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken,
    hasToken: hasToken,
    registerTranslations: registerTranslations,
    TOKEN_KEY: TOKEN_KEY
  };

  /**
   * Kinobaza API
   * Base URL: https://kinobaza.com.ua/api/v1/
   * CDN:     https://i.kinobaza.com.ua/{size}/{path}
   * Auth:    Bearer token (опціональний)
   */
  var BASE_URL$4 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$5 = new Lampa.Reguest();

  /**
   * CDN URL для зображень
   * @param {string} path  - шлях з API (напр. '/tmdb/poster.jpg')
   * @param {string} size  - розмір: 'w90', 'w180', 'w300', 'w2000', 'original'
   * @returns {string}
   */
  function cdn(path) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'w300';
    if (!path) return '';
    return 'https://i.kinobaza.com.ua/' + size + '/' + path.replace(/^\//, '');
  }

  /**
   * Додає параметри до URL
   * @param {string} u
   * @param {string} params
   * @returns {string}
   */
  function addParam$1(u, params) {
    return u + (/\?/.test(u) ? '&' : '?') + params;
  }

  /**
   * Будує повний URL з query параметрами
   * @param {string} path
   * @param {object} params
   * @returns {string}
   */
  function buildUrl$a(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var u = BASE_URL$4 + path;
    var _loop = function _loop(key) {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        if (Array.isArray(params[key])) {
          params[key].forEach(function (v) {
            u = addParam$1(u, key + '[]=' + encodeURIComponent(v));
          });
        } else {
          u = addParam$1(u, key + '=' + encodeURIComponent(params[key]));
        }
      }
    };
    for (var key in params) {
      _loop(key);
    }
    return u;
  }

  /**
   * Отримує заголовки для запиту
   * @returns {object}
   */
  function getHeaders$2() {
    var headers = {};
    var token = storage.getToken();
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }
    return headers;
  }

  /**
   * Виконує GET-запит
   * @param {string} path   - шлях (напр. '/titles')
   * @param {object} params - query параметри
   * @param {function} resolve
   * @param {function} reject
   */
  function get$1(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var resolve = arguments.length > 2 ? arguments[2] : undefined;
    var reject = arguments.length > 3 ? arguments[3] : undefined;
    var u = buildUrl$a(path, params);
    network$5.silent(u, function (json) {
      resolve(json);
    }, function (a, c) {
      if (reject) reject(a, c);
    }, false, {
      headers: getHeaders$2()
    });
  }

  /**
   * GET /titles — список тайтлів з пагінацією
   * @param {object} params — {list_type, page, type, q, genres, ...}
   * @returns {Promise<{total: number, data: [k6.d0]}>}
   */
  function getTitles() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      get$1('/titles', params, resolve, reject);
    });
  }

  /**
   * GET /titles/{slug} — деталі тайтлу
   * @param {string} slug
   * @returns {Promise<k6.c0>}
   */
  function getTitle(slug) {
    return new Promise(function (resolve, reject) {
      get$1('/titles/' + encodeURIComponent(slug), {
        include_posters: 1,
        include_networks: 1,
        include_user_links: 1
      }, resolve, reject);
    });
  }

  /**
   * GET /titles/{title}/episodes?season={n} — епізоди сезону
   * @param {string} titleSlug
   * @param {number} seasonNumber
   * @returns {Promise<{data: [k6.d]}>}
   */
  function getEpisodes(titleSlug, seasonNumber) {
    return new Promise(function (resolve, reject) {
      get$1('/titles/' + encodeURIComponent(titleSlug) + '/episodes', {
        season: seasonNumber
      }, resolve, reject);
    });
  }

  /**
   * GET /persons/{slug} — деталі персони
   * @param {string} slug
   * @returns {Promise<k6.p>}
   */
  function getPerson$1(slug) {
    return new Promise(function (resolve, reject) {
      get$1('/persons/' + encodeURIComponent(slug), {
        include_user_links: 1
      }, resolve, reject);
    });
  }

  /**
   * GET /titles?q={query} — пошук тайтлів
   * @param {string} query
   * @returns {Promise<{total: number, data: [k6.d0]}>}
   */
  function searchTitles(query) {
    return new Promise(function (resolve, reject) {
      get$1('/titles', {
        q: query
      }, resolve, reject);
    });
  }

  /**
   * GET /titles?person_id={id}&page={page} — тайтли персони
   * @param {number} personId
   * @param {number} page
   * @returns {Promise<{total: number, data: array}>}
   */
  function getPersonTitles$1(personId, page) {
    return new Promise(function (resolve, reject) {
      get$1('/titles', {
        person_id: personId,
        page: page || 1
      }, resolve, reject);
    });
  }

  /**
   * GET /lists — список списків
   * @param {object} params
   * @returns {Promise}
   */
  function getLists() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      get$1('/lists', params, resolve, reject);
    });
  }

  /**
   * GET /comments?id={id}&type={type} — коментарі
   * @param {number} id
   * @param {number} type
   * @returns {Promise}
   */
  function getComments(id, type) {
    return new Promise(function (resolve, reject) {
      get$1('/comments', {
        id: id,
        type: type
      }, resolve, reject);
    });
  }

  /**
   * GET /reviews?title_id={id} — рецензії
   * @param {number} titleId
   * @returns {Promise}
   */
  function getReviews(titleId) {
    return new Promise(function (resolve, reject) {
      get$1('/reviews', {
        title_id: titleId
      }, resolve, reject);
    });
  }

  /**
   * GET /persons — актори дубляжу
   * @param {number} titleId
   * @returns {Promise}
   */
  function getDubPersons(titleId) {
    return new Promise(function (resolve, reject) {
      get$1('/persons', {
        title_id: titleId,
        type: 10
      }, resolve, reject);
    });
  }

  /**
   * Очистити pending запити
   */
  function clear$5() {
    network$5.clear();
  }

  /**
   * GET /persons?q={query}&page={page} — пошук персон
   * @param {string} query
   * @param {number} page
   * @returns {Promise<{total: number, data: [k6.p]}>}
   */
  function searchPersons(query, page) {
    return new Promise(function (resolve, reject) {
      var params = {
        q: query
      };
      if (page && page > 1) params.page = page;
      get$1('/persons', params, resolve, reject);
    });
  }
  var api$1 = {
    cdn: cdn,
    getTitles: getTitles,
    getTitle: getTitle,
    getEpisodes: getEpisodes,
    getPerson: getPerson$1,
    getPersonTitles: getPersonTitles$1,
    searchTitles: searchTitles,
    searchPersons: searchPersons,
    getLists: getLists,
    getComments: getComments,
    getReviews: getReviews,
    getDubPersons: getDubPersons,
    clear: clear$5,
    BASE_URL: BASE_URL$4
  };

  /**
   * Formatter utils — допоміжні функції для форматування
   */

  /**
   * Форматує дату з YYYY-MM-DD у DD.MM.YYYY
   * @param {string} d
   * @returns {string}
   */
  function fmtDate(d) {
    if (!d) return '';
    var parts = d.split('-');
    if (parts.length !== 3) return d;
    return parts[2] + '.' + parts[1] + '.' + parts[0];
  }

  /**
   * Повертає емодзі для рейтингу
   * @param {number} rating
   * @returns {string}
   */
  function getRatingEmoji(rating) {
    if (rating >= 10) return "\uD83C\uDFC6"; // 🏆
    if (rating >= 9) return "\uD83C\uDF1F"; // 🌟
    if (rating >= 8) return "\u2B50"; // ⭐
    if (rating >= 7) return "\uD83D\uDC4D"; // 👍
    if (rating >= 6) return "\uD83D\uDE10"; // 😐
    return "\uD83D\uDC4E"; // 👎
  }

  /**
   * Card маппінг — конвертація даних Kinobaza API у формат Lampa
   * Використовує utils/formatter та utils/mapper для допоміжних функцій
   */
  var SOURCE = 'kinobaza';
  var BROKEN = './img/img_broken.svg';

  /**
   * Визначає правильний URL для зображення:
   * poster_tmdb → Lampa.TMDB.image (image.tmdb.org)
   * poster_kinobaza → api.cdn (i.kinobaza.com.ua)
   * @param {string} tmdbPath   — poster_tmdb поле
   * @param {string} kbzPath    — poster_kinobaza поле
   * @param {string} size       — 'w300' (постер) або 'w2000' (бекдроп)
   * @returns {string}
   */
  function resolveImage$1(tmdbPath, kbzPath) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'w300';
    // TMDB шляхи завжди починаються з /
    // Якщо poster_tmdb має формат "69fdf197a6076.jpg" — це насправді kinobaza шлях
    var isRealTmdb = tmdbPath && tmdbPath.charAt(0) === '/';
    if (isRealTmdb) {
      return Lampa.TMDB.image('t/p/' + size + '/' + tmdbPath.replace(/^\//, ''));
    }
    if (kbzPath) {
      return api$1.cdn(kbzPath, size);
    }
    // Фолбек: пробуємо TMDB навіть без /
    if (tmdbPath) {
      return Lampa.TMDB.image('t/p/' + size + '/' + tmdbPath.replace(/^\//, ''));
    }
    return BROKEN;
  }

  /**
   * Визначає правильний URL для бекдропу
   */
  function resolveBackdrop(tmdbPath) {
    if (tmdbPath) {
      return Lampa.TMDB.image('t/p/w1280/' + tmdbPath.replace(/^\//, ''));
    }
    return '';
  }

  /**
   * Маппінг одного елемента списку (k6.d0 → Lampa card)
   * @param {object} item  — k6.d0 (TitleList item)
   * @returns {object}     — Lampa card object
   */
  function mapOne(item) {
    if (!item) return null;
    var isTV = (item.number_of_episodes || 0) > 0;
    // Lampa дискримінує TV за наявністю поля name / original_name
    var tvName = item.name_original || item.name_en || '';
    var card = {
      // Ідентифікатори
      id: item.id,
      kinobaza_id: item.id,
      slug: item.slug,
      needsEnrichment: true,
      source: SOURCE,
      // Назви
      title: item.name_uk || item.name_en || '',
      original_title: item.name_original || item.name_en || '',
      // TV дискримінація: name / original_name тільки якщо серіал
      name: isTV ? tvName : undefined,
      original_name: isTV ? tvName : undefined,
      // Рік
      year: item.year || 0,
      // Зображення
      poster: resolveImage$1(item.poster_tmdb, item.poster_kinobaza, 'w300'),
      backdrop: resolveBackdrop(item.backdrop_tmdb),
      poster_path: item.poster_tmdb || item.poster_kinobaza || '',
      backdrop_path: item.backdrop_tmdb || '',
      // Опис
      description: item.plot_uk || item.tagline_uk || '',
      // Рейтинги (Kinobaza = 0–100, Lampa очікує 0–10)
      vote_average: (item.rating || 0) / 10,
      vote: (item.imdb_rating || 0) / 10,
      voting: item.rating || 0,
      // Дата
      release_date: item.released_en || item.released_ua || '',
      // Користувацькі позначки
      myRating: item.myRating || 0,
      myFavorite: item.myFavorite || false,
      myWatchlist: item.myWatchlist || false,
      // Додаткове
      has_ukr_translation: item.has_ukr_translation === 1,
      has_only_subtitles: item.has_only_subtitles === 1,
      year_formatted: item.year_formatted || ''
    };
    return card;
  }

  /**
   * Маппінг списку (k6.d0[] → Lampa cards[])
   * @param {array} items
   * @returns {array}
   */
  function mapList(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(function (item) {
      return mapOne(item);
    });
  }

  /**
   * Маппінг повної картки (k6.c0 → Lampa full movie)
   * @param {object} data  — k6.c0 (Title Detail)
   * @returns {object}     — Lampa full movie object
   */
  function mapFull(data) {
    if (!data) return {};
    var poster = resolveImage$1(data.poster_tmdb, data.poster_kinobaza, 'w300');
    var backdrop = resolveBackdrop(data.backdrop_tmdb);
    // Зберігаємо raw шляхи для сумісності з Lampa.full компонентом
    var posterRaw = data.poster_tmdb || data.poster_kinobaza || '';
    var backdropRaw = data.backdrop_tmdb || '';
    // Якщо бекдропу нема, але є трейлер — беремо YouTube thumbnail
    if (!backdropRaw && data.trailer) {
      backdropRaw = data.trailer;
      backdrop = 'https://img.youtube.com/vi/' + data.trailer + '/hqdefault.jpg';
    }
    var isTV = (data.number_of_episodes || 0) > 0;
    var tvName = data.name_original || data.name_en || '';
    var movie = {
      // Ідентифікатори
      id: data.themoviedb_id || data.id,
      kinobaza_id: data.id,
      slug: data.slug,
      themoviedb_id: data.themoviedb_id || 0,
      needsEnrichment: false,
      source: SOURCE,
      imdb_id: data.imdb_id ? 'tt' + data.imdb_id : '',
      // Назви
      title: data.name_uk || data.name_en || '',
      original_title: data.name_original || data.name_en || '',
      // TV дискримінація: name / original_name тільки якщо серіал
      name: isTV ? tvName : undefined,
      original_name: isTV ? tvName : undefined,
      // Рік і дата
      year: data.year || 0,
      release_date: data.released_ua || data.released_en || '',
      year_formatted: data.year_formatted || '',
      // Зображення
      poster_path: posterRaw,
      backdrop_path: backdropRaw,
      poster: poster,
      backdrop: backdrop,
      // Опис
      overview: data.plot_uk || '',
      description: data.plot_uk || '',
      tagline: data.tagline_uk || '',
      // Рейтинги (Kinobaza = 0–100, Lampa очікує 0–10)
      vote_average: (data.rating || 0) / 10,
      vote: (data.imdb_rating || 0) / 10,
      vote_count: data.votes || 0,
      voting: data.rating || 0,
      imdb_rating: data.imdb_rating || 0,
      imdb_votes: data.imdb_votes || 0,
      metascore: data.metascore || 0,
      tomato_meter: data.tomato_meter || 0,
      rating_breakdown: data.rating_breakdown || null,
      // Тип
      type: data.type || 1,
      type_tmdb: data.type_tmdb || 0,
      // Тривалість
      runtime: data.runtime || 0,
      // Сезони/епізоди
      number_of_seasons: data.number_of_seasons || 0,
      number_of_episodes: data.number_of_episodes || 0,
      number_of_episodes_released: data.number_of_episodes_released || 0,
      // Жанри
      genres: mapGenres(data.genres),
      // Країни
      countries: mapSimpleList(data.countries),
      production_countries: mapProductionCountries(data.countries),
      // Рейтинг MPAA / віковий
      rating_mpaa: data.rating_mpaa || '',
      rating_mpaa_description: data.rating_mpaa_description || '',
      rating_age: data.rating_age || 0,
      // Бюджет
      budget: data.budget || 0,
      revenue: data.gross || 0,
      gross: data.gross || 0,
      gross_ua_usd: data.gross_ua_usd || 0,
      gross_us: data.gross_us || 0,
      // Трейлер
      trailer: data.trailer || '',
      // Відео
      videos: mapVideos(data.trailer, data.videos),
      // Credits
      credits: {
        cast: mapPersons(data.actors),
        crew: mapCrew(data.directors, data.writers)
      },
      // Рекомендації / колекції
      recommendations: data.recommendations || [],
      collectionMovies: data.collectionMovies || [],
      // Зображення
      images: data.images || [],
      images_posters: mapImages(data.images, 'w300'),
      images_backdrops: data.backdrop_tmdb ? [resolveBackdrop(data.backdrop_tmdb)] : [],
      // Додаткові
      has_ukr_translation: data.has_ukr_translation === 1,
      has_only_subtitles: data.has_only_subtitles === 0,
      online: data.online || [],
      facts: data.facts || [],
      lists: data.lists || [],
      keywords: {
        keywords: (data.keywords || []).map(function (k) {
          return {
            id: k.id,
            name: k.title || k.name || ''
          };
        })
      },
      companies: mapSimpleList(data.companies),
      production_companies: mapProductionCompanies(data.companies),
      networks: mapNetworks(data.networks),
      homepage: '',
      status: '',
      spoken_languages: [],
      comments_count: data.comments_count || 0,
      // Користувацькі дані
      myRating: data.myRating || 0,
      myFavorite: data.myFavorite || false,
      myWatchlist: data.myWatchlist || false,
      mySeenlist: data.mySeenlist || false,
      myStatus: data.myStatus || '',
      myStatusLabel: data.myStatusLabel || '',
      // Рецензії
      reviewPreview: data.reviewPreview || null,
      friendsRatings: data.friendsRatings || [],
      hasDubInfo: data.hasDubInfo || false,
      // Релізні дати
      released_ua: data.released_ua || '',
      released_en: data.released_en || '',
      premiere_dvd: data.premiere_dvd || '',
      premiere_bluray: data.premiere_bluray || '',
      premiere_digital: data.premiere_digital || ''
    };
    return movie;
  }

  /**
   * Маппінг персони (k6.p → Lampa person card)
   * @param {object} data  — k6.p (Person Detail)
   * @returns {object}
   */
  function mapPerson$1(data) {
    if (!data) return {};
    var posterUrl = resolveImage$1(data.poster_tmdb, data.poster_kinobaza, 'w300');
    var profileRaw = data.poster_tmdb || data.poster_kinobaza || '';

    // TMDB шлях починається з /, Kinobaza — просто ім'я файлу
    var isRealTmdb = profileRaw && profileRaw.charAt(0) === '/';
    // profile_path — тільки TMDB шлях (для TMDB.img()), інакше img fallback
    var profilePath = isRealTmdb ? profileRaw : '';
    // img — повний URL для About module як fallback
    var imgUrl = posterUrl;
    return {
      id: data.id,
      slug: data.slug,
      source: SOURCE,
      imdb_id: data.imdb_id || '',
      name: data.name_uk || data.name_en || '',
      original_name: data.name_en || '',
      biography: data.biography || '',
      poster: posterUrl,
      profile_path: profilePath,
      img: imgUrl,
      birthday: data.birthday || '',
      deathday: data.deathday || '',
      age: data.age || 0,
      height: data.height || 0,
      zodiac: data.zodiac || '',
      birthplace: data.birthplace_uk || data.birthplace_en || '',
      place_of_birth: data.birthplace_uk || data.birthplace_en || '',
      character: data.character || '',
      extra: data.extra || '',
      myFavorite: data.my_favorite || false,
      posters: data.posters || [],
      backdrops: data.backdrops || []
    };
  }

  /**
   * Маппінг жанрів (k6.y[] → [{id, name}])
   */
  function mapGenres(genres) {
    if (!genres || !Array.isArray(genres)) return [];
    return genres.map(function (g) {
      return {
        id: parseInt(g.id, 10) || 0,
        name: g.title || g.name || ''
      };
    }).filter(function (g) {
      return g.name;
    });
  }

  /**
   * Маппінг простого списку (k6.y[] → [string])
   * @param {array|null} items
   * @returns {array}
   */
  function mapSimpleList(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(function (item) {
      return item.title || item.name || '';
    }).filter(Boolean);
  }

  /**
   * Маппінг мереж (networks) у формат [{id, name, logo, logo_svg}]
   * @param {array|null} items
   * @returns {array}
   */
  function mapNetworks(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(function (item) {
      return {
        id: parseInt(item.id, 10) || 0,
        name: item.title || item.name || '',
        logo: item.logo || '',
        logo_svg: item.logo_svg || ''
      };
    }).filter(function (n) {
      return n.name;
    });
  }

  /**
   * Маппінг компаній у TMDB формат [{id, name, logo_path}]
   */
  function mapProductionCompanies(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(function (item) {
      return {
        id: parseInt(item.id, 10) || 0,
        name: item.title || item.name || '',
        logo_path: null
      };
    });
  }

  /**
   * Маппінг країн у TMDB формат [{iso_3166_1, name}]
   */
  function mapProductionCountries(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(function (item) {
      return {
        iso_3166_1: item.id || '',
        name: item.title || item.name || ''
      };
    });
  }

  /**
   * Маппінг акторів (k6.q[] → [{character, name, profile_path}])
   * @param {array|null} actors
   * @returns {array}
   */
  function mapPersons(actors) {
    if (!actors || !Array.isArray(actors)) return [];
    return actors.map(function (a) {
      var profileRaw = a.poster_tmdb || a.poster_kinobaza || '';
      return {
        id: a.id,
        slug: a.slug || '',
        cast_id: a.id,
        character: a.character || '',
        name: a.name_uk || a.name_en || '',
        original_name: a.name_en || '',
        profile_path: profileRaw,
        poster: resolveImage$1(a.poster_tmdb, a.poster_kinobaza, 'w300'),
        source: SOURCE,
        order: 0
      };
    });
  }

  /**
   * Маппінг знімальної групи
   * @param {array|null} directors
   * @param {array|null} writers
   * @returns {array}
   */
  function mapCrew(directors, writers) {
    var crew = [];
    if (directors && Array.isArray(directors)) {
      directors.forEach(function (a) {
        var profileRaw = a.poster_tmdb || a.poster_kinobaza || '';
        crew.push({
          id: a.id,
          slug: a.slug || '',
          name: a.name_uk || a.name_en || '',
          profile_path: profileRaw,
          poster: resolveImage$1(a.poster_tmdb, a.poster_kinobaza, 'w300'),
          job: 'Director',
          department: 'Directing',
          source: SOURCE
        });
      });
    }
    if (writers && Array.isArray(writers)) {
      writers.forEach(function (a) {
        var profileRaw = a.poster_tmdb || a.poster_kinobaza || '';
        crew.push({
          id: a.id,
          slug: a.slug || '',
          name: a.name_uk || a.name_en || '',
          profile_path: profileRaw,
          poster: resolveImage$1(a.poster_tmdb, a.poster_kinobaza, 'w300'),
          job: 'Writer',
          department: 'Writing',
          source: SOURCE
        });
      });
    }
    return crew;
  }

  /**
   * Маппінг відео/трейлерів
   * @param {string} trailer  — youtube ID трейлера
   * @param {array|null} videos — k6.l0[]
   * @returns {array}
   */
  function mapVideos(trailer, videos) {
    var result = [];
    if (trailer) {
      result.push({
        id: trailer,
        key: trailer,
        site: 'YouTube',
        type: 'Trailer',
        name: 'Трейлер'
      });
    }
    if (videos && Array.isArray(videos)) {
      videos.forEach(function (v) {
        if (v.id) {
          result.push({
            id: v.id,
            key: v.id,
            site: 'YouTube',
            type: v.title || 'Video',
            name: v.title || ''
          });
        }
      });
    }
    return result;
  }

  /**
   * Маппінг зображень
   * @param {array} images
   * @param {string} size
   * @returns {array}
   */
  function mapImages(images, size) {
    if (!images || !Array.isArray(images)) return [];
    return images.map(function (img) {
      return api$1.cdn(img, size);
    }).filter(Boolean);
  }

  /**
   * Маппінг епізодів сезону
   * @param {array} episodes  — k6.d[]
   * @returns {array}
   */
  function mapEpisodes(episodes) {
    if (!episodes || !Array.isArray(episodes)) return [];
    return episodes.map(function (ep) {
      return {
        id: ep.id,
        episode_number: ep.episode || 0,
        season_number: ep.season || 0,
        name: ep.title || '',
        overview: ep.body || '',
        still_path: ep.poster_tmdb || '',
        air_date: ep.release_date || '',
        source: SOURCE
      };
    });
  }

  /**
   * Маппінг кодів професій у назви (Lampa.Lang ключі)
   * Код → ключ перекладу
   */
  var JOB_TRANSLATION_KEYS = {
    0: 'kinobaza_job_unknown',
    1: 'kinobaza_job_actor',
    2: 'kinobaza_job_director',
    3: 'kinobaza_job_writer',
    4: 'kinobaza_job_creator',
    5: 'kinobaza_job_composer'
  };
  var JOB_EMOJI = {
    0: '❓',
    1: '🎭',
    2: '🎬',
    3: '✍️',
    4: '🏛️',
    5: '🎵'
  };

  /**
   * Повертає назву професії з jobs масиву (перша знайдена, окрім 0)
   * @param {number[]} jobs  — масив кодів професій
   * @returns {string}
   */
  function getJobName(jobs) {
    if (!jobs || !Array.isArray(jobs) || !jobs.length) return '';
    for (var i = 0; i < jobs.length; i++) {
      var code = jobs[i];
      if (code !== 0 && JOB_TRANSLATION_KEYS[code]) {
        return Lampa.Lang.translate(JOB_TRANSLATION_KEYS[code]) || '';
      }
    }
    return '';
  }

  /**
   * Повертає емодзі для першої знайденої професії (окрім 0)
   * @param {number[]} jobs
   * @returns {string}
   */
  function getJobEmoji(jobs) {
    if (!jobs || !Array.isArray(jobs) || !jobs.length) return '';
    for (var i = 0; i < jobs.length; i++) {
      var code = jobs[i];
      if (code !== 0 && JOB_EMOJI[code]) {
        return JOB_EMOJI[code];
      }
    }
    return '';
  }

  /**
   * Картка персони для результатів пошуку
   * 
   * API /persons не повертає jobs — тільки базові поля:
   *   {id, slug, name_uk, name_en, poster_kinobaza, poster_tmdb,
   *    birthday, deathday, gender, age, my_favorite}
   * 
   * @param {object} item  — k6.p (Person list item)
   * @returns {object}     — Lampa card object для пошуку
   */
  function mapPersonSearch(item) {
    if (!item) return null;
    var personName = item.name_uk || item.name_en || '';
    var profileUrl = resolveImage$1(item.poster_tmdb, item.poster_kinobaza, 'w300');
    var isDeceased = !!(item.deathday && item.deathday !== '');
    var displayName = isDeceased ? '† ' + personName : personName;

    // Card module getPosterPath(): profile_path → TMDB.img() → ламається якщо це не TMDB шлях
    // TMDB шляхи завжди починаються з /, кінобазівські — просто файл
    var hasValidTmdb = item.poster_tmdb && item.poster_tmdb.charAt(0) === '/';
    var card = {
      id: item.id,
      slug: item.slug,
      source: SOURCE,
      gender: item.gender || 2,
      // ← потрібно для old line.js: без gender відкриває full (фільм)

      title: displayName,
      original_title: displayName,
      // Не ставимо original_name — уникаємо "TV" badge від Icons module
      // Не ставимо release_date — Release module видалить card__age
      // (slice(0,4) обрізає все до 4 символів, тому рік/вік марні)
      release_date: '',
      // profile_path — тільки valid TMDB (починається з /), інакше Card module
      // піде через TMDB.img() і отримає біту картинку
      poster: profileUrl,
      profile_path: hasValidTmdb ? item.poster_tmdb : '',
      media_type: 'person',
      type: 'person'
    };

    // Налаштовуємо маршрутизацію: при Enter відкриваємо картку актора
    // Activity.push зберігає slug (Router.call його втрачає)
    card.params = {
      emit: {
        onEnter: function onEnter() {
          Lampa.Activity.push({
            url: '',
            component: 'kinobaza_person_detail',
            source: SOURCE,
            slug: card.slug,
            id: card.id,
            page: 1
          });
        }
      }
    };
    return card;
  }

  /**
   * Маппінг списку персон для пошуку
   * @param {array} items
   * @returns {array}
   */
  function mapPersonSearchList(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(function (item) {
      return mapPersonSearch(item);
    }).filter(Boolean);
  }
  var card = {
    mapOne: mapOne,
    mapList: mapList,
    mapFull: mapFull,
    mapPerson: mapPerson$1,
    mapPersonSearch: mapPersonSearch,
    mapPersonSearchList: mapPersonSearchList,
    mapGenres: mapGenres,
    mapNetworks: mapNetworks,
    mapPersons: mapPersons,
    mapCrew: mapCrew,
    mapEpisodes: mapEpisodes,
    SOURCE: SOURCE,
    getJobName: getJobName,
    getJobEmoji: getJobEmoji,
    JOB_TRANSLATION_KEYS: JOB_TRANSLATION_KEYS,
    JOB_EMOJI: JOB_EMOJI
  };

  /**
   * Kinobaza Trailers API
   * Endpoint: GET /api/v1/trailers
   * Пагінація: курсор (after)
   * Без автентифікації
   */

  var BASE_URL$3 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$4 = new Lampa.Reguest();

  /**
   * Будує повний URL з query параметрами
   * @param {string} path
   * @param {object} params
   * @returns {string}
   */
  function buildUrl$9(path, params) {
    var u = BASE_URL$3 + path;
    var keys = Object.keys(params || {});
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = params[key];
      if (val !== undefined && val !== null && val !== '') {
        u += (/\?/.test(u) ? '&' : '?') + key + '=' + encodeURIComponent(val);
      }
    }
    return u;
  }

  /**
   * Отримує список трейлерів з курсорною пагінацією
   * @param {object} options — { after: string }
   * @param {function} resolve
   * @param {function} reject
   */
  function getTrailers(options, resolve, reject) {
    var params = {
      language: 'uk',
      order_by: 'date_added_desc'
    };
    if (options && options.after) {
      params.after = options.after;
    }
    var u = buildUrl$9('/trailers', params);
    network$4.silent(u, function (json) {
      if (resolve) resolve(json);
    }, function (a, c) {
      if (reject) reject(a, c);
    });
  }

  /**
   * Очистити pending запити
   */
  function clear$4() {
    network$4.clear();
  }
  var api = {
    getTrailers: getTrailers,
    clear: clear$4,
    BASE_URL: BASE_URL$3
  };

  /**
   * Line-генератор "Вдома"
   * list_type=5 — головна сторінка КіноБази
   *
   * @module lines/home
   */

  /**
   * Створює Line "Вдома" для ContentRows
   * @param {object}   [options]             - параметри
   * @param {string}   [options.title]       - заголовок рядка (default: 'Вдома')
   * @param {string}   [options.type]        - тип контенту (default: 'movie')
   * @param {boolean}  [options.withUkrAudio] - тільки з укр. аудіо
   * @param {string}   [options.platform]    - ключ платформи (netflix, megogo, ...)
   * @param {number}   [options.limit]       - ліміт (default: 20)
   * @returns {object} Line object для ContentRows
   */
  function createHomeLine(options) {
    options = options || {};
    var title = options.title || 'Вдома';
    var type = options.type || 'movie';
    var withUkrAudio = options.withUkrAudio || false;
    var platform = options.platform || null;
    options.limit || 20;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$8(withUkrAudio, platform, orderBy),
      type: type,
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$8(withUkrAudio, platform, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту
   * @param {boolean} withUkrAudio
   * @param {string|null} platform
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$8(withUkrAudio, platform, orderBy) {
    var params = ['list_type=5'];
    params.push('order_by=' + orderBy);
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    if (platform) {
      params.push(platform + '_audio=1');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Line-генератор "Популярні за 7 днів"
   * list_type=31 — популярний контент за останній тиждень
   * Підтримує type=1 (фільми) та type=2 (серіали)
   *
   * @module lines/popular7d
   */

  /**
   * Створює Line "Популярні за 7 днів" для ContentRows
   * @param {object}   [options]                - параметри
   * @param {string}   [options.title]          - заголовок рядка (default: 'Популярні за 7 днів')
   * @param {string}   [options.type]           - тип: 'movie' | 'tv' | 'all' (default: 'movie')
   * @param {boolean}  [options.withUkrAudio]   - тільки з укр. аудіо
   * @param {string}   [options.platform]       - ключ платформи (netflix, megogo, ...)
   * @returns {object} Line object для ContentRows
   */
  function createPopular7dLine(options) {
    options = options || {};
    var title = options.title || 'Популярні за 7 днів';
    var type = options.type || 'movie';
    var withUkrAudio = options.withUkrAudio || false;
    var platform = options.platform || null;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$7(type, withUkrAudio, platform, orderBy),
      type: type === 'all' ? 'movie' : type,
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$7(type, withUkrAudio, platform, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту
   * @param {string} type
   * @param {boolean} withUkrAudio
   * @param {string|null} platform
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$7(type, withUkrAudio, platform, orderBy) {
    var params = ['list_type=31'];
    params.push('order_by=' + orderBy);
    if (type === 'movie') {
      params.push('type=1');
    } else if (type === 'tv') {
      params.push('type=2');
    }
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    if (platform) {
      params.push(platform + '_audio=1');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Line-генератор "Аніме"
   * Використовує genres[]=32 + countries[]=39,214,97,96,92 для фільтрації аніме-контенту.
   * Ключовий файл для обходу хардкоду Lampa (cub source для anime).
   *
   * @module lines/anime
   */

  /**
   * Створює Line "Аніме" для ContentRows
   * @param {object}   [options]                - параметри
   * @param {string}   [options.title]          - заголовок рядка (default: 'Аніме')
   * @param {string}   [options.type]           - тип: 'all' | 'movie' | 'tv' (default: 'all')
   * @param {boolean}  [options.withUkrAudio]   - тільки з укр. аудіо
   * @param {string}   [options.platform]       - ключ платформи (netflix, megogo, ...)
   * @param {number}   [options.listType]       - list_type (5=вдома, 31=популярні, 3=топ)
   * @returns {object} Line object для ContentRows
   */
  function createAnimeLine(options) {
    options = options || {};
    var title = options.title || 'Аніме';
    var type = options.type || 'all';
    var withUkrAudio = options.withUkrAudio || false;
    var platform = options.platform || null;
    var listType = options.listType || null;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$6(type, withUkrAudio, platform, listType, orderBy),
      type: type === 'tv' ? 'tv' : 'movie',
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$6(type, withUkrAudio, platform, listType, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту з фільтром аніме
   * @param {string} type
   * @param {boolean} withUkrAudio
   * @param {string|null} platform
   * @param {number|null} listType
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$6(type, withUkrAudio, platform, listType, orderBy) {
    var params = ['genres[]=32', 'countries[]=39', 'countries[]=214', 'countries[]=97', 'countries[]=96', 'countries[]=92'];
    params.push('order_by=' + orderBy);
    if (listType) {
      params.push('list_type=' + listType);
    }
    if (type === 'movie') {
      params.push('type=1');
    } else if (type === 'tv') {
      params.push('type=2');
    }
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    if (platform) {
      params.push(platform + '_audio=1');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Створює source override для аніме
   * Використовується коли користувач обирає "Аніме" з kinobaza source
   * @returns {object} Source object { category, list }
   */
  function createAnimeSource() {
    return {
      category: function category(params, oncomplite, onerror) {
        var type = params.url === 'anime_tv' ? 2 : 1;
        api$1.getTitles({
          genres: [32],
          countries: [39, 214, 97, 96, 92],
          type: type,
          page: 1
        }).then(function (json) {
          json = api$1.addSource(json);
          json.title = 'Аніме - КіноБаза';
          json.type = 'anime';
          json.url = 'titles?genres[]=32&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92&type=' + type;
          if (json.data) {
            json.results = card.mapList(json.data);
          }
          oncomplite([json]);
        })["catch"](onerror);
      },
      list: function list(params, oncomplite, onerror) {
        api$1.getTitles({
          genres: [32],
          countries: [39, 214, 97, 96, 92],
          type: params.type === 'tv' ? 2 : 1,
          page: params.page || 1
        }).then(function (json) {
          json = api$1.addSource(json);
          if (json.data) {
            json.results = card.mapList(json.data);
          }
          oncomplite(json);
        })["catch"](onerror);
      }
    };
  }

  /**
   * Line-генератор "Мультфільми"
   * Використовує genres[]=12 (анімація) та exclude_genres[]=32 (виключити аніме).
   * Таким чином мультфільми та аніме розділені.
   *
   * @module lines/cartoons
   */

  /**
   * Створює Line "Мультфільми" для ContentRows
   * @param {object}   [options]                - параметри
   * @param {string}   [options.title]          - заголовок рядка (default: 'Мультфільми')
   * @param {string}   [options.type]           - тип: 'movie' | 'tv' | 'all' (default: 'movie')
   * @param {boolean}  [options.withUkrAudio]   - тільки з укр. аудіо
   * @param {string}   [options.platform]       - ключ платформи (netflix, megogo, ...)
   * @param {number}   [options.listType]       - list_type (5=вдома, 31=популярні, 3=топ)
   * @returns {object} Line object для ContentRows
   */
  function createCartoonsLine(options) {
    options = options || {};
    var title = options.title || 'Мультфільми';
    var type = options.type || 'movie';
    var withUkrAudio = options.withUkrAudio || false;
    var platform = options.platform || null;
    var listType = options.listType || null;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$5(type, withUkrAudio, platform, listType, orderBy),
      type: type === 'tv' ? 'tv' : 'movie',
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$5(type, withUkrAudio, platform, listType, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту з фільтром мультфільмів (без аніме)
   * @param {string} type
   * @param {boolean} withUkrAudio
   * @param {string|null} platform
   * @param {number|null} listType
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$5(type, withUkrAudio, platform, listType, orderBy) {
    var params = ['genres[]=12', 'exclude_genres[]=32'];
    params.push('order_by=' + orderBy);
    if (listType) {
      params.push('list_type=' + listType);
    }
    if (type === 'movie') {
      params.push('type=1');
    } else if (type === 'tv') {
      params.push('type=2');
    }
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    if (platform) {
      params.push(platform + '_audio=1');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Створює source override для мультфільмів
   * @returns {object} Source object { category, list }
   */
  function createCartoonsSource() {
    return {
      category: function category(params, oncomplite, onerror) {
        api$1.getTitles({
          genres: [12],
          exclude_genres: [32],
          type: 1,
          page: 1
        }).then(function (json) {
          json = api$1.addSource(json);
          json.title = 'Мультфільми - КіноБаза';
          json.type = 'cartoons';
          json.url = 'titles?genres[]=12&exclude_genres[]=32&type=1';
          if (json.data) {
            json.results = card.mapList(json.data);
          }
          oncomplite([json]);
        })["catch"](onerror);
      },
      list: function list(params, oncomplite, onerror) {
        api$1.getTitles({
          genres: [12],
          exclude_genres: [32],
          type: params.type === 'tv' ? 2 : 1,
          page: params.page || 1
        }).then(function (json) {
          json = api$1.addSource(json);
          if (json.data) {
            json.results = card.mapList(json.data);
          }
          oncomplite(json);
        })["catch"](onerror);
      }
    };
  }

  /**
   * Line-генератор "Трейлери" (для головної сторінки)
   * Бере дані з /trailers API, відображає 12 широких карток
   * При кліку — відтворює конкретний трейлер через Lampa.Player
   *
   * @module lines/trailers-line
   */

  /**
   * Створює parts_data entry для трейлерів на головній сторінці
   * @param {function} call — callback від parts_data
   */
  function createTrailersPart(call) {
    api.getTrailers({}, function (response) {
      if (response && response.data && response.data.length) {
        var items = response.data.slice(0, 12);
        var results = items.map(function (t) {
          var movie = t.movie || {};
          var posterUrl = 'https://img.youtube.com/vi/' + t.youtube_id + '/hqdefault.jpg';
          return {
            id: t.youtube_id,
            //title: movie.name_uk || movie.name_en || t.youtube_title || '',
            poster: posterUrl,
            cover: posterUrl,
            //year: (movie.year || '').toString(),
            slug: movie.slug || '',
            source: 'kinobaza',
            youtube_id: t.youtube_id,
            params: {
              style: {
                name: 'wide'
              }
            },
            _openTrailers: true
          };
        });
        call({
          title: Lampa.Lang.translate('kinobaza_trailers') || 'Трейлери',
          type: 'trailers',
          url: 'trailers',
          results: results,
          total_pages: 2,
          _trailersLine: true,
          params: {
            type: 'trailers',
            scroll: {
              horizontal: true,
              step: 600
            },
            items: {
              view: 3
            }
          }
        });
      } else {
        call(false);
      }
    }, function () {
      call(false);
    });
  }

  // PLACEHOLDER — заміни на реальний SVG логотип
  var ITUNES_SVG = '<svg fill="#ffffff" width="800px" height="800px" viewBox="7104.335 7104.337 191.331 191.331" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M7151.891 7212.926c-1.299 2.881-1.922 4.166-3.595 6.711-2.334 3.556-5.625 7.979-9.703 8.019-3.625.033-4.557-2.357-9.475-2.332-4.917.026-5.943 2.373-9.566 2.34-4.078-.037-7.197-4.033-9.533-7.586-6.528-9.938-7.211-21.6-3.186-27.799 2.861-4.404 7.376-6.982 11.622-6.982 4.323 0 7.04 2.369 10.612 2.369 3.467 0 5.578-2.373 10.576-2.373 3.776 0 7.778 2.059 10.631 5.609-9.342 5.119-7.823 18.456 1.617 22.024z"/> <path d="M7135.854 7181.319c1.815-2.33 3.194-5.619 2.694-8.982-2.967.205-6.437 2.092-8.461 4.551-1.838 2.232-3.355 5.543-2.766 8.762 3.239.099 6.589-1.835 8.533-4.331z"/> <g> <path d="M7168.464 7197.131c0 2.019-1.535 3.647-3.938 3.647-2.305 0-3.84-1.631-3.792-3.647-.048-2.11 1.487-3.694 3.84-3.694s3.843 1.584 3.89 3.694zm-7.536 30.004v-23.476h7.297v23.476h-7.297zM7180.56 7200.924h-8.688v-6.144h24.865v6.144h-8.832v26.211h-7.347l.002-26.211zM7219.921 7219.599c0 3.071.097 5.567.19 7.537h-6.336l-.336-3.312h-.146c-.912 1.439-3.121 3.842-7.346 3.842-4.753 0-8.257-2.979-8.257-10.227v-13.775h7.345v12.625c0 3.408 1.104 5.471 3.648 5.471 2.018 0 3.169-1.391 3.648-2.543.19-.432.237-1.008.237-1.584v-13.969h7.347v15.936h.006v-.001zM7225.775 7211.147c0-2.93-.096-5.426-.191-7.487h6.336l.336 3.217h.146c.959-1.487 3.357-3.744 7.248-3.744 4.801 0 8.398 3.168 8.398 10.08v13.922h-7.295v-13.01c0-3.022-1.057-5.088-3.695-5.088-2.018 0-3.217 1.394-3.695 2.733-.191.48-.287 1.152-.287 1.824v13.537h-7.297v-15.983l-.004-.001zM7259.52 7217.726c.24 3.024 3.217 4.465 6.625 4.465 2.496 0 4.513-.336 6.479-.959l.961 4.942c-2.399.961-5.328 1.487-8.498 1.487-7.97 0-12.528-4.655-12.528-12.002 0-5.953 3.696-12.526 11.856-12.526 7.586 0 10.465 5.901 10.465 11.713 0 1.248-.145 2.353-.238 2.879l-15.122.001zm8.593-4.995c0-1.774-.77-4.752-4.129-4.752-3.072 0-4.32 2.783-4.514 4.752h8.643zM7279.199 7220.75c1.347.813 4.129 1.774 6.289 1.774 2.209 0 3.121-.77 3.121-1.969s-.721-1.775-3.457-2.688c-4.849-1.631-6.721-4.271-6.672-7.008 0-4.416 3.744-7.73 9.554-7.73 2.735 0 5.187.625 6.625 1.346l-1.297 5.041c-1.058-.576-3.071-1.346-5.088-1.346-1.774 0-2.784.721-2.784 1.92 0 1.105.912 1.682 3.792 2.689 4.465 1.535 6.337 3.793 6.385 7.248 0 4.369-3.456 7.633-10.177 7.633-3.07 0-5.811-.722-7.585-1.683l1.294-5.227z"/> </g> </g></svg>';

  // PLACEHOLDER — заміни на реальний SVG логотип
  var NETFLIX_SVG = '<svg width="800px" height="800px" viewBox="0 -187 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g> <path d="M340.657183,0 L340.657183,100.203061 C353.016406,100.778079 365.344207,101.473198 377.637095,102.293306 L377.637095,123.537553 C358.204486,122.242243 338.690182,121.253471 319.094879,120.57923 L319.094879,0 L340.657183,0 Z M512,0.0118710746 L483.922918,65.1060972 L511.993017,137.54371 L511.961595,137.557485 C503.784957,136.3909 495.597845,135.289637 487.386294,134.233936 L471.623048,93.5776798 L455.709676,130.459835 C448.168455,129.627123 440.61676,128.839275 433.047609,128.100899 L460.419447,64.6708546 L435.351871,0.0118710746 L458.677285,0.0118710746 L472.712335,36.1957639 L488.318473,0.0118710746 L512,0.0118710746 Z M245.093161,119.526252 L245.092462,0.0114869428 L305.282574,0.0114869428 L305.282574,21.4467074 L266.654767,21.4467074 L266.654767,49.2277266 L295.881884,49.2277266 L295.881884,70.4719734 L266.654767,70.4719734 L266.654767,119.521329 L245.093161,119.526252 Z M164.580156,21.448488 L164.579458,0.0103695593 L231.270382,0.0103695593 L231.270382,21.4469875 L208.705375,21.4469875 L208.705375,120.107799 C201.508397,120.296154 194.3191,120.519389 187.144466,120.790104 L187.144466,21.448488 L164.580156,21.448488 Z M90.8682168,126.966224 L90.8682168,0.0139657936 L150.758077,0.0139657936 L150.758077,21.4491862 L112.42703,21.4491862 L112.42703,50.4849807 C121.233151,50.3722116 133.754021,50.2444297 141.543822,50.2632828 L141.543822,71.5092753 C131.792954,71.388127 120.786264,71.6429923 112.42703,71.7264345 L112.42703,103.88974 C125.166805,102.887736 137.944984,102.011069 150.758077,101.270912 L150.758077,122.517253 C130.704017,123.672422 110.740031,125.160591 90.8682168,126.966224 Z M48.5710466,77.8540254 L48.5696502,0.0104745953 L70.1319549,0.0104745953 L70.1319549,128.968837 C62.2496338,129.779728 54.3823252,130.642465 46.5286328,131.553346 L21.5609083,59.8244682 L21.5609083,134.625696 C14.3597408,135.563565 7.17323695,136.54141 0,137.562338 L0,0.0118710746 L20.4911722,0.0118710746 L48.5710466,77.8540254 Z M395.425298,124.819071 L395.425298,124.819211 L395.425298,0.0120101224 L416.987603,0.0120101224 L416.987603,126.599777 C409.809478,125.960833 402.624371,125.369895 395.425298,124.819071 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g></svg>';

  // PLACEHOLDER — заміни на реальний SVG логотип
  var RAKUTEN_SVG = '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1549 463" width="1549" height="463">	<title>4755</title>	<style>		.s0 { fill: #ffffff } 	</style>	<g>		<path class="s0" d="m385 462.2l-74.7-74.7h937.4z"/>		<path fill-rule="evenodd" class="s0" d="m454.7 86.3v252.3h-58.7v-11.1c-15.9 11.1-33.1 17.2-53.9 17.2-66.1 0-116.2-60-116.2-132.3 0-72.2 51.4-132.2 116.2-132.2 20.8 0 36.7 6.1 53.9 17.2v-11.1zm-56.3 124.9c0-40.6-25.2-73.4-56.3-73.4-31.1 0-56.3 32.8-56.3 73.4 0 40.6 25.2 73.5 56.3 73.5 31.1 0 56.3-32.9 56.3-73.5z"/>		<path class="s0" d="m918.5 86.3v255.9h-57.5v-8.5c0 0-20.8 14.6-48.9 14.6-61.2 0-102.8-51.4-102.8-112.6v-149.4h57.5v149.4c0 28.2 18.3 52.7 46.5 52.7 28.1 0 46.5-24.5 46.5-52.7v-149.4z"/>		<path class="s0" d="m1339.5 338.6v-254.7h57.5v8.6c0 0 20.8-14.7 49-14.7 61.2 0 102.8 51.4 102.8 112.6v149.4h-57.5v-149.4c0-28.2-18.4-52.6-46.5-52.6-28.2 0-46.6 24.4-46.6 52.6v149.4z"/>		<path fill-rule="evenodd" class="s0" d="m60.7 337.3h-60v-317.1h99.1c61.2 0 110.2 50.2 110.2 110.2 0 36.7-18.4 68.6-46.5 89.4l89.3 120h-74.7l-74.6-99.2h-42.8zm0-156.7h39.1c26.9 0 49-20.8 49-49 0-26.9-20.8-49-49-49h-39.1c0 0 0 96.8 0 98z"/>		<path class="s0" d="m1110.7 331.2c-17.2 11-39.2 17.1-56.3 17.1-42.9 0-85.7-35.5-85.7-91.8v-110.2h-29.4v-60h29.4v-63.6h57.5v63.6h49v60h-49v109c0 24.5 18.4 31.8 28.2 31.8 7.3 0 12.2-2.4 18.3-6.1z"/>		<path class="s0" d="m714.2 339.8h-82l-84.5-104.1v104.1h-59.9v-339.2h59.9v173.9l69.8-88.2h79.5l-99.1 117.6z"/>		<path fill-rule="evenodd" class="s0" d="m1317.5 233.3h-166.5c8.6 57.5 73.5 86.9 112.6 29.3l50.2 29.4c-34.3 45.3-73.4 56.3-102.8 56.3-60 0-119.9-56.3-119.9-134.6 0-77.2 46.5-134.7 113.8-134.7 67.3 0 126 60 112.6 154.3zm-165.2-53.9h104c-12.2-63.7-91.8-60-104 0z"/>	</g></svg>';

  // PLACEHOLDER — заміни на реальний SVG логотип
  var GOOGLE_PLAY_SVG = '<svg width="800px" height="800px" viewBox="0 -197 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M81.281306,77.0029082 C95.2544406,69.3304036 105.847857,63.4840368 106.760926,63.0297736 C109.681838,61.4761937 112.698146,57.3651121 106.760926,54.1716421 C104.843936,53.1677206 94.5230769,47.5030591 81.281306,40.1985076 L62.924532,58.7369868 L81.281306,77.0029082 Z" fill="#ffffff"> </path> <path d="M62.924532,58.7369868 L4.47449206,117.645833 C5.84636678,117.827538 7.39540413,117.464127 9.22154201,116.460206 C13.055523,114.36151 53.6984473,92.1662123 81.281306,77.0074509 L62.924532,58.7369868 Z" fill="#ffffff"> </path> <path d="M62.924532,58.7369868 L81.281306,40.2893602 C81.281306,40.2893602 13.3326235,3.20785899 9.22154201,1.01831059 C7.67250466,0.100699022 5.93721941,-0.17185887 4.38363943,0.100699022 L62.924532,58.7369868 Z" fill="#ffffff"> </path> <path d="M62.924532,58.7369868 L4.38363943,0.100699022 C2.00784314,0.650357437 0,2.7490532 0,7.04184 C0,13.8921284 0,105.04003 0,110.704692 C0,114.634068 1.55357998,117.464127 4.47449206,117.736685 L62.924532,58.7369868 Z" fill="#ffffff"> </path> </g> <path d="M253.533351,47.0442533 C243.030787,47.0442533 234.354361,55.1710211 234.354361,66.3140962 C234.354361,77.3663188 242.939934,85.5839392 253.533351,85.5839392 C264.126768,85.5839392 272.712341,77.4571714 272.712341,66.3140962 C272.712341,55.1710211 264.126768,47.0442533 253.533351,47.0442533 Z M253.533351,77.9159772 C247.777837,77.9159772 242.758229,73.073532 242.758229,66.2277862 C242.758229,59.2866453 247.78238,54.5395953 253.533351,54.5395953 C259.284323,54.5395953 264.308473,59.2866453 264.308473,66.2277862 C264.308473,73.073532 259.284323,77.9159772 253.533351,77.9159772 Z M211.795653,47.0442533 C201.202236,47.0442533 192.616662,55.1710211 192.616662,66.3140962 C192.616662,77.3663188 201.202236,85.5839392 211.795653,85.5839392 C222.389069,85.5839392 230.974643,77.4571714 230.974643,66.3140962 C230.974643,55.1710211 222.389069,47.0442533 211.795653,47.0442533 Z M211.795653,77.9159772 C206.040138,77.9159772 201.020531,73.073532 201.020531,66.2277862 C201.020531,59.2866453 206.044681,54.5395953 211.795653,54.5395953 C217.551167,54.5395953 222.570775,59.2866453 222.570775,66.2277862 C222.570775,73.073532 217.637477,77.9159772 211.795653,77.9159772 L211.795653,77.9159772 Z M162.203744,52.9814727 L162.203744,61.1082405 L181.56444,61.1082405 C181.014781,65.6735852 179.465744,69.053303 177.1808,71.3382467 C174.350741,74.1683062 169.967101,77.2754661 162.203744,77.2754661 C150.238453,77.2754661 141.016911,67.5951183 141.016911,55.6298269 C141.016911,43.6645354 150.242995,33.8024824 162.203744,33.8024824 C168.686079,33.8024824 173.346819,36.3599839 176.81739,39.6488491 L182.568361,33.893335 C177.725916,29.2371377 171.243581,25.6757145 162.203744,25.6757145 C145.854813,25.6757145 132.154237,39.0991907 132.154237,55.4481216 C132.154237,71.7970525 145.854813,85.2205287 162.203744,85.2205287 C171.061876,85.2205287 177.639606,82.2996166 182.936314,76.8166603 C188.323875,71.4290993 189.968308,63.8474473 189.968308,57.7285226 C189.968308,55.8115321 189.786603,54.0762469 189.509502,52.6135195 L162.203744,52.9814727 Z M365.136723,59.2821026 C363.583143,54.9893158 358.654387,47.0442533 348.787792,47.0442533 C338.921196,47.0442533 330.794428,54.8076106 330.794428,66.3140962 C330.794428,77.0892182 338.921196,85.5839392 349.700861,85.5839392 C358.468139,85.5839392 363.49229,80.1963782 365.590986,77.0892182 L359.108651,72.7055788 C356.914559,75.9035914 353.993647,78.0022872 349.700861,78.0022872 C345.408074,78.0022872 342.396309,76.0852967 340.474776,72.1559204 L365.954396,61.471651 L365.136723,59.2821026 Z M339.198297,65.7689805 C339.016591,58.3690337 344.953811,54.5350527 349.151202,54.5350527 C352.53092,54.5350527 355.270127,56.1794853 356.274048,58.6461342 L339.198297,65.7689805 Z M318.465726,84.3074597 L326.869595,84.3074597 L326.869595,27.8652629 L318.465726,27.8652629 L318.465726,84.3074597 Z M304.769692,51.3370401 L304.497134,51.3370401 C302.580144,49.0520964 299.018721,47.0442533 294.448833,47.0442533 C284.859338,47.0442533 276.182912,55.5389742 276.182912,66.3140962 C276.182912,77.0892182 284.950191,85.4930866 294.448833,85.4930866 C299.014178,85.4930866 302.575601,83.4852434 304.497134,81.1094471 L304.769692,81.1094471 L304.769692,83.848654 C304.769692,91.2486007 300.840316,95.1734344 294.539686,95.1734344 C289.424683,95.1734344 286.22667,91.430306 284.950191,88.323146 L277.645639,91.430306 C279.744335,96.5453091 285.318144,102.845939 294.539686,102.845939 C304.401739,102.845939 312.714755,96.9995722 312.714755,82.8447324 L312.714755,48.2298801 L304.769692,48.2298801 L304.769692,51.3370401 L304.769692,51.3370401 Z M295.180197,77.9159772 C289.424683,77.9159772 284.58678,73.073532 284.58678,66.3186389 C284.58678,59.5637458 289.429225,54.6304479 295.180197,54.6304479 C300.844858,54.6304479 305.410203,59.5637458 305.410203,66.3186389 C305.405661,72.9826793 300.840316,77.9159772 295.180197,77.9159772 Z M404.31692,27.8652629 L384.22486,27.8652629 L384.22486,84.3074597 L392.628729,84.3074597 L392.628729,62.9343784 L404.31692,62.9343784 C413.633857,62.9343784 422.764546,56.1749427 422.764546,45.3998207 C422.764546,34.6246987 413.633857,27.8652629 404.31692,27.8652629 Z M404.589477,55.0847111 L392.715039,55.0847111 L392.715039,35.7194729 L404.589477,35.7194729 C410.799255,35.7194729 414.45153,40.9253286 414.45153,45.3998207 C414.36522,49.7834601 410.803797,55.0847111 404.589477,55.0847111 L404.589477,55.0847111 Z M456.284624,46.9534006 C450.256552,46.9534006 443.955922,49.6017548 441.398421,55.6298269 L448.798367,58.7369868 C450.4428,55.6298269 453.363712,54.6259053 456.470872,54.6259053 C460.854512,54.6259053 465.238151,57.2742595 465.329004,61.9304568 L465.329004,62.4801152 C463.775424,61.5670463 460.581954,60.2860242 456.561725,60.2860242 C448.52581,60.2860242 440.394499,64.7605163 440.394499,72.9826793 C440.394499,80.5643314 446.97223,85.4022339 454.276781,85.4022339 C459.941443,85.4022339 463.04406,82.8447324 464.96105,79.8329677 L465.233608,79.8329677 L465.233608,84.2166071 L473.360376,84.2166071 L473.360376,62.5709679 C473.269524,52.6180622 465.874119,46.9534006 456.284624,46.9534006 Z M455.280703,77.8251245 C452.541496,77.8251245 448.702972,76.4532498 448.702972,73.0780746 C448.702972,68.6944352 453.450022,67.0500025 457.561104,67.0500025 C461.213379,67.0500025 462.948665,67.8722189 465.233608,68.9669931 C464.593097,74.1728488 460.118605,77.8251245 455.280703,77.8251245 Z M502.67852,48.2344227 L493.089025,72.6192688 L492.816467,72.6192688 L482.863561,48.2344227 L473.823725,48.2344227 L488.800781,82.3904692 L480.30606,101.478607 L489.073339,101.478607 L511.995457,48.2344227 L502.67852,48.2344227 Z M427.425286,84.3074597 L435.829154,84.3074597 L435.829154,27.8652629 L427.425286,27.8652629 L427.425286,84.3074597 Z" fill="#ffffff"> </path> </g> </g></svg>';

  // PLACEHOLDER — заміни на реальний SVG логотип
  var SWEET_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="197" height="35" viewBox="0 0 197 35" fill="none">    <path d="M179.112 34.9467H20.2294C10.3397 34.9467 2.34155 27.1493 2.34155 17.508C2.34155 7.86669 10.3397 0.0693359 20.2294 0.0693359H179.112C189.002 0.0693359 197 7.86669 197 17.508C197 27.0966 189.002 34.9467 179.112 34.9467Z" fill="white"/>    <path d="M56.0592 13.2918C55.897 13.5026 55.7349 13.7133 55.5728 13.766C55.4107 13.8714 55.1945 13.9241 54.9243 13.9241C54.6541 13.9241 54.3839 13.8714 54.1137 13.766C53.8435 13.6606 53.5192 13.5026 53.195 13.3972C52.8707 13.2391 52.4924 13.1338 52.1141 13.0284C51.6818 12.923 51.2494 12.8704 50.709 12.8704C49.9524 12.8704 49.412 13.0284 48.9797 13.2918C48.6014 13.5553 48.3852 13.9767 48.3852 14.4509C48.3852 14.8197 48.4933 15.0831 48.7635 15.3465C49.0337 15.5573 49.358 15.768 49.7903 15.9788C50.2226 16.1368 50.709 16.3476 51.2494 16.5056C51.7899 16.6637 52.3303 16.8217 52.9247 17.0325C53.5192 17.2432 54.0596 17.4539 54.6 17.7174C55.1405 17.9808 55.6268 18.2969 56.0592 18.7184C56.4915 19.0872 56.8158 19.5613 57.086 20.1409C57.3562 20.6677 57.4643 21.3526 57.4643 22.1429C57.4643 23.0912 57.3021 23.9342 56.9238 24.7771C56.5455 25.5674 56.0592 26.2523 55.3566 26.8318C54.6541 27.4114 53.7894 27.8328 52.7626 28.2016C51.7358 28.5177 50.5469 28.6758 49.1959 28.6758C48.5474 28.6758 47.8448 28.6231 47.1963 28.5177C46.5478 28.4124 45.8993 28.2543 45.2508 28.0436C44.6023 27.8328 44.0619 27.5694 43.5215 27.306C42.981 27.0426 42.5487 26.7265 42.1704 26.3577L43.5215 24.2503C43.6836 23.9869 43.8457 23.8288 44.1159 23.6707C44.3321 23.5127 44.6563 23.46 45.0346 23.46C45.3589 23.46 45.6831 23.5127 45.9533 23.6707C46.2236 23.8288 46.4938 23.9869 46.818 24.1449C47.1423 24.303 47.5206 24.461 47.9529 24.6191C48.3852 24.7771 48.9256 24.8298 49.5201 24.8298C49.9524 24.8298 50.3307 24.7771 50.655 24.6718C50.9792 24.5664 51.1954 24.461 51.4116 24.303C51.6277 24.1449 51.7358 23.9869 51.8439 23.7761C51.952 23.5654 51.952 23.3546 51.952 23.1439C51.952 22.7751 51.8439 22.459 51.5737 22.1956C51.3035 21.9321 50.9792 21.7214 50.5469 21.5634C50.1146 21.4053 49.6282 21.1946 49.0878 21.0892C48.5474 20.9311 48.0069 20.7731 47.4125 20.5623C46.8721 20.3516 46.2776 20.1409 45.7372 19.8774C45.1968 19.614 44.7104 19.2452 44.278 18.8237C43.8457 18.4023 43.5215 17.8754 43.2512 17.2432C42.981 16.611 42.873 15.8734 42.873 15.0304C42.873 14.2402 43.0351 13.4499 43.3593 12.7123C43.6836 11.9747 44.17 11.3425 44.8185 10.763C45.467 10.1834 46.2776 9.76195 47.2503 9.44584C48.2231 9.12973 49.358 8.97168 50.655 8.97168C51.3575 8.97168 52.0601 9.02436 52.7086 9.18242C53.3571 9.28779 54.0056 9.49853 54.546 9.70927C55.1405 9.92001 55.6268 10.1834 56.1132 10.4995C56.5996 10.8156 57.0319 11.1318 57.3562 11.5006L56.0592 13.2918Z" fill="#D8271C"/>    <path d="M57.3562 9.39355H62.0578C62.4902 9.39355 62.8144 9.49892 63.0846 9.65698C63.3548 9.86772 63.571 10.0785 63.6791 10.3419L65.6246 18.9295C65.7867 19.5617 65.9489 20.1939 66.0569 20.8262C66.165 21.4584 66.2731 22.0379 66.3812 22.6701C66.5433 22.0906 66.7595 21.4584 66.9216 20.8262C67.0837 20.1939 67.2999 19.5617 67.5161 18.9295L69.9479 10.3419C70.056 10.0785 70.2182 9.81503 70.4884 9.65698C70.7586 9.44624 71.0828 9.39355 71.4611 9.39355H74.0551C74.4875 9.39355 74.8117 9.49892 75.0819 9.65698C75.3521 9.86772 75.5683 10.0785 75.6764 10.3419L78.0002 18.9295C78.1623 19.5617 78.3785 20.1939 78.5406 20.8262C78.7027 21.4584 78.8649 22.0379 79.027 22.6701C79.1351 22.0379 79.2431 21.4584 79.4053 20.8262C79.5674 20.1939 79.7295 19.5617 79.8916 18.9295L81.9452 10.3419C82.0533 10.0785 82.2154 9.81503 82.4857 9.65698C82.7559 9.44624 83.0801 9.39355 83.4584 9.39355H87.9439L81.8372 28.5181H77.0815C76.8113 28.5181 76.5951 28.4655 76.433 28.3074C76.2708 28.1493 76.1087 27.9386 76.0006 27.5698L73.1905 18.0339C73.0283 17.6124 72.9203 17.1909 72.8122 16.7694C72.7041 16.3479 72.596 15.9265 72.542 15.505C72.4339 15.9265 72.3798 16.3479 72.2718 16.7694C72.1637 17.1909 72.0556 17.6124 71.8935 18.0339L69.0833 27.5171C68.8671 28.1493 68.4888 28.4655 67.8403 28.4655H63.4629L57.3562 9.39355Z" fill="#D8271C"/>    <path d="M96.9686 8.81348C98.2656 8.81348 99.4545 9.02422 100.535 9.39301C101.616 9.7618 102.535 10.3413 103.291 11.0789C104.048 11.8165 104.697 12.7648 105.129 13.8185C105.561 14.9249 105.777 16.1367 105.777 17.5065C105.777 17.9279 105.777 18.2967 105.723 18.5602C105.669 18.8236 105.615 19.0343 105.507 19.1924C105.399 19.3504 105.291 19.4558 105.075 19.5085C104.913 19.5612 104.697 19.6139 104.426 19.6139H93.1856C93.3478 21.1944 93.8882 22.3535 94.6988 23.0911C95.5094 23.8286 96.5362 24.1448 97.8332 24.1448C98.5358 24.1448 99.0762 24.0921 99.6166 23.8813C100.103 23.7233 100.535 23.5652 100.914 23.3545C101.292 23.1437 101.67 22.9857 101.994 22.8276C102.319 22.6696 102.643 22.5642 103.021 22.5642C103.508 22.5642 103.832 22.7223 104.102 23.0384L105.831 25.0931C105.237 25.778 104.588 26.3048 103.886 26.7263C103.183 27.1478 102.481 27.4639 101.724 27.7273C100.968 27.9907 100.265 28.1488 99.5085 28.2015C98.7519 28.3069 98.0494 28.3595 97.4009 28.3595C96.0499 28.3595 94.7528 28.1488 93.5639 27.7273C92.375 27.3058 91.2942 26.6209 90.4295 25.778C89.5108 24.935 88.8082 23.8286 88.2678 22.5642C87.7274 21.2998 87.5112 19.8246 87.5112 18.086C87.5112 16.8216 87.7274 15.6098 88.1597 14.4507C88.5921 13.2917 89.2406 12.2907 90.1052 11.4477C90.9159 10.6048 91.9427 9.91986 93.1316 9.39301C94.1584 9.0769 95.5094 8.81348 96.9686 8.81348ZM97.0766 12.7648C95.9418 12.7648 95.0771 13.0809 94.4286 13.7132C93.7801 14.3454 93.4018 15.241 93.1856 16.4001H100.481C100.481 15.9259 100.427 15.5044 100.319 15.083C100.211 14.6615 99.9949 14.2927 99.7247 13.9239C99.4545 13.6078 99.0762 13.2917 98.6439 13.0809C98.2656 12.8702 97.7252 12.7648 97.0766 12.7648Z" fill="#D8271C"/>    <path d="M117.559 8.81348C118.856 8.81348 120.045 9.02422 121.125 9.39301C122.206 9.7618 123.125 10.3413 123.882 11.0789C124.638 11.8165 125.233 12.7648 125.719 13.8185C126.151 14.9249 126.368 16.1367 126.368 17.5065C126.368 17.9279 126.368 18.2967 126.313 18.5602C126.259 18.8236 126.205 19.0343 126.097 19.1924C125.989 19.3504 125.881 19.4558 125.665 19.5085C125.503 19.5612 125.287 19.6139 125.016 19.6139H113.722C113.884 21.1944 114.424 22.3535 115.235 23.0911C116.046 23.8286 117.072 24.1448 118.369 24.1448C119.072 24.1448 119.612 24.0921 120.153 23.8813C120.639 23.7233 121.071 23.5652 121.45 23.3545C121.828 23.1437 122.206 22.9857 122.531 22.8276C122.855 22.6696 123.179 22.5642 123.557 22.5642C124.044 22.5642 124.368 22.7223 124.638 23.0384L126.313 25.0931C125.719 25.778 125.071 26.3048 124.368 26.7263C123.665 27.1478 122.963 27.4639 122.206 27.7273C121.45 27.9907 120.747 28.1488 119.991 28.2015C119.234 28.3069 118.531 28.3595 117.883 28.3595C116.532 28.3595 115.235 28.1488 113.992 27.7273C112.803 27.3058 111.722 26.6209 110.858 25.778C109.939 24.935 109.236 23.8286 108.696 22.5642C108.155 21.2998 107.885 19.8246 107.885 18.086C107.885 16.8216 108.101 15.6098 108.534 14.4507C108.966 13.2917 109.615 12.2907 110.479 11.4477C111.344 10.6048 112.317 9.91986 113.506 9.39301C114.749 9.0769 116.046 8.81348 117.559 8.81348ZM117.667 12.7648C116.532 12.7648 115.667 13.0809 115.019 13.7132C114.37 14.3454 113.992 15.241 113.776 16.4001H121.071C121.071 15.9259 121.017 15.5044 120.909 15.083C120.801 14.6615 120.585 14.2927 120.315 13.9239C120.045 13.6078 119.666 13.2917 119.234 13.0809C118.856 12.8702 118.315 12.7648 117.667 12.7648Z" fill="#D8271C"/>    <path d="M146.796 24.0402C146.633 23.6714 146.363 23.3026 146.093 23.0392C145.769 22.7757 145.444 22.5123 145.012 22.3543C144.202 22.0382 143.175 22.0382 142.364 22.3543C141.932 22.5123 141.608 22.7757 141.283 23.0392C140.959 23.3026 140.743 23.6714 140.581 24.0402C140.419 24.409 140.311 24.8305 140.311 25.3046C140.311 25.7788 140.419 26.2003 140.581 26.5691C140.743 26.9905 141.013 27.3066 141.283 27.5701C141.608 27.8862 141.932 28.0969 142.364 28.255C142.796 28.413 143.229 28.5184 143.715 28.5184C144.202 28.5184 144.634 28.413 145.012 28.255C145.39 28.0969 145.769 27.8862 146.093 27.5701C146.417 27.3066 146.633 26.9378 146.796 26.5164C146.958 26.0949 147.066 25.6734 147.066 25.2519C147.066 24.8305 146.958 24.409 146.796 24.0402Z" fill="#D8271C"/>    <path d="M175.005 28.5181H169.655L162.035 9.39355H166.899C167.331 9.39355 167.655 9.49892 167.926 9.65698C168.196 9.86772 168.412 10.0785 168.52 10.3419L171.222 18.9295C171.438 19.6144 171.655 20.2993 171.871 20.9842C172.033 21.6691 172.195 22.3013 172.357 22.9862C172.519 22.3013 172.681 21.6691 172.844 20.9842C173.006 20.2993 173.276 19.6144 173.492 18.9295L176.302 10.3419C176.41 10.0785 176.572 9.81503 176.897 9.65698C177.167 9.44624 177.491 9.39355 177.869 9.39355H182.517L175.005 28.5181Z" fill="#D8271C"/>    <path d="M137.608 23.9875C137.5 23.7767 137.338 23.6714 137.23 23.566C137.068 23.4606 136.851 23.4079 136.635 23.4079C136.473 23.4079 136.311 23.4606 136.203 23.5133C136.095 23.566 135.987 23.6187 135.879 23.6714C135.825 23.7241 135.717 23.7241 135.608 23.7767C135.5 23.8294 135.392 23.8294 135.23 23.8294C134.96 23.8294 134.798 23.7767 134.69 23.566C134.528 23.3553 134.474 23.1445 134.474 22.7757V14.5569H138.851V10.2894H134.474V5.49512H129.718V5.5478C128.961 5.70586 128.421 6.39076 128.421 7.12835V23.0918C128.421 23.8821 128.529 24.6197 128.799 25.3046C129.069 25.9895 129.394 26.569 129.88 27.0432C130.366 27.5174 130.961 27.8862 131.663 28.1496C132.366 28.413 133.123 28.5184 134.041 28.5184C134.96 28.5184 135.933 28.413 136.797 28.1496C137.716 27.8862 138.527 27.4647 139.229 26.9905L139.5 26.7798L137.608 23.9875Z" fill="#D8271C"/>    <path d="M160.198 23.9875C160.09 23.7767 159.928 23.6714 159.82 23.566C159.657 23.4606 159.441 23.4079 159.225 23.4079C159.063 23.4079 158.901 23.4606 158.793 23.5133C158.685 23.566 158.577 23.6187 158.468 23.6714C158.414 23.7241 158.306 23.7241 158.198 23.7767C158.09 23.8294 157.982 23.8294 157.82 23.8294C157.55 23.8294 157.388 23.7767 157.28 23.566C157.117 23.3553 157.063 23.1445 157.063 22.7757V14.5569H161.441V10.2894H157.063V5.49512H152.308V5.5478C151.551 5.70586 151.011 6.39076 151.011 7.12835V23.0918C151.011 23.8821 151.119 24.6197 151.389 25.3046C151.659 25.9895 151.983 26.569 152.47 27.0432C152.956 27.5174 153.551 27.8862 154.253 28.1496C154.956 28.413 155.712 28.5184 156.631 28.5184C157.55 28.5184 158.523 28.413 159.387 28.1496C160.306 27.8862 161.117 27.4647 161.819 26.9905L162.089 26.7798L160.198 23.9875Z" fill="#D8271C"/>    <path d="M18.2837 0.333008C8.39402 0.333008 0.341797 8.07767 0.341797 17.6663C0.341797 27.2549 8.39402 34.9996 18.2837 34.9996C28.1733 34.9996 36.2255 27.2549 36.2255 17.6663C36.2796 8.07767 28.2274 0.333008 18.2837 0.333008ZM24.7146 17.0341L15.0412 22.1972C14.2305 22.6187 13.582 22.1445 13.582 21.1435L13.4739 11.6602C13.4739 10.6592 14.1225 10.1324 14.9331 10.5539L24.6606 15.5062C25.4712 15.9277 25.5253 16.6126 24.7146 17.0341Z" fill="#15394C"/>    <path opacity="0.24" d="M19.9048 0.0166016C9.90705 0.0166016 1.80078 7.86664 1.80078 17.508C1.80078 27.1493 9.90705 34.9993 19.9048 34.9993C29.9025 34.9993 37.2522 27.1493 37.2522 17.508C37.3062 7.86664 29.9025 0.0166016 19.9048 0.0166016ZM26.3898 16.8757L16.6623 22.0388C15.8517 22.4603 15.2031 21.9862 15.1491 20.9851L15.041 11.4492C15.041 10.4482 15.6895 9.92134 16.5002 10.3428L26.3358 15.3479C27.1464 15.7694 27.2004 16.4543 26.3898 16.8757Z" fill="#15394C"/>    <path d="M36.0094 13.4519C35.3609 10.5016 31.9563 4.75892 29.7946 3.86328C27.741 3.02033 26.6602 1.59784 25.8496 1.43978C25.093 1.28173 21.5262 -0.193447 20.2833 0.0699768C19.0403 0.333401 17.2569 -0.0880767 16.2301 0.0172929C15.2033 0.175347 9.74511 1.33441 6.66473 4.07402C3.74647 6.65558 2.8818 8.07807 2.8818 8.07807C2.8818 8.07807 -2.57642 18.615 1.53076 19.8795C2.61159 20.1956 2.44947 20.8278 2.50351 21.9342C2.50351 23.5674 2.01713 23.7781 3.2601 24.7265C4.50306 25.6748 5.80006 23.8835 6.8809 24.9372C7.90769 25.9909 5.8541 28.309 8.77236 29.8896C11.6906 31.4174 11.2583 27.4134 13.3119 28.0983C15.4195 28.7832 13.5821 31.6282 15.9599 31.7862C18.3378 31.997 17.4731 28.8886 18.8782 29.0993C20.2833 29.31 19.4726 31.5228 22.3909 30.9959C25.3091 30.4691 23.3636 28.0456 24.9309 27.5714C26.5521 27.0973 27.0925 30.153 30.227 27.2026C33.3614 24.2523 30.3891 24.305 31.0916 23.1459C31.7401 21.9868 32.4427 23.9889 33.3614 21.3019C34.3341 18.615 33.4695 19.616 33.3614 18.3516C33.2533 17.1398 36.6579 16.4023 36.0094 13.4519Z" fill="white"/>    <path d="M30.3889 22.3552H28.1732C27.957 22.3552 27.7949 22.1972 27.7949 21.9864V21.4069C27.7949 21.1961 27.957 21.0381 28.1732 21.0381H30.3889C30.6051 21.0381 30.7672 21.1961 30.7672 21.4069V21.9864C30.7132 22.1445 30.5511 22.3552 30.3889 22.3552Z" fill="#D8271C"/>    <path d="M30.9296 15.9284C30.8756 15.9284 30.8215 15.9284 30.7134 15.8757L30.2271 15.5596C30.119 15.5069 30.0649 15.4015 30.0649 15.3488C30.0649 15.2435 30.0649 15.1381 30.119 15.0854L31.2539 13.1887C31.3619 13.0307 31.5781 12.9253 31.7402 13.0307L32.2266 13.3468C32.3347 13.3995 32.3887 13.5049 32.3887 13.5575C32.3887 13.6629 32.3887 13.7683 32.3347 13.821L31.1998 15.7176C31.1998 15.8757 31.0377 15.9284 30.9296 15.9284Z" fill="#D8271C"/>    <path d="M27.7952 11.9771C27.7412 11.9771 27.6872 11.9771 27.6331 11.9244L27.1467 11.6083C26.9846 11.503 26.9306 11.2922 27.0387 11.0815L28.1735 9.18484C28.2816 9.02679 28.4978 8.92142 28.6599 9.02679L29.1463 9.3429C29.2544 9.39558 29.3084 9.50095 29.3084 9.55364C29.3084 9.65901 29.3084 9.76438 29.2544 9.81706L28.1195 11.7664C28.0114 11.8718 27.9033 11.9771 27.7952 11.9771Z" fill="#F6BF48"/>    <path d="M24.8229 7.44581C24.7688 7.44581 24.7148 7.44581 24.6607 7.39313C24.5527 7.34044 24.4986 7.28776 24.4446 7.18239L23.688 5.075C23.634 4.96963 23.634 4.86426 23.688 4.81157C23.742 4.7062 23.7961 4.65352 23.9042 4.60084L24.4446 4.3901C24.6607 4.33741 24.8769 4.3901 24.931 4.60084L25.6875 6.70823C25.7416 6.91897 25.6875 7.1297 25.4714 7.18239L24.931 7.39313C24.931 7.44581 24.8769 7.44581 24.8229 7.44581Z" fill="#D8271C"/>    <path d="M21.7424 8.23552C21.6883 8.28821 21.6883 8.28821 21.6343 8.34089C21.5262 8.39358 21.4722 8.39358 21.3641 8.39358L19.1484 7.81404C19.0403 7.81404 18.9863 7.70867 18.9322 7.65599C18.8782 7.55062 18.8782 7.44525 18.8782 7.39257L19.0403 6.86572C19.0943 6.65498 19.3105 6.54961 19.4726 6.60229L21.6883 7.18183C21.7964 7.18183 21.8505 7.28719 21.9045 7.33988C21.9586 7.44525 21.9586 7.55062 21.9586 7.6033L21.7964 8.13015C21.7964 8.18284 21.7964 8.23552 21.7424 8.23552Z" fill="#20BEC6"/>    <path d="M16.3384 4.44265C16.1763 4.44265 16.0142 4.33728 15.9601 4.12654L15.8521 3.54701C15.8521 3.44164 15.852 3.33627 15.9061 3.28358C15.9601 3.17821 16.0682 3.12553 16.1223 3.12553L18.2839 2.65137C18.392 2.65137 18.5001 2.65137 18.5541 2.70405C18.6622 2.75674 18.7163 2.86211 18.7163 2.91479L18.8243 3.49432C18.8784 3.70506 18.7163 3.9158 18.5541 3.96849L16.3925 4.44265H16.3384Z" fill="#F6BF48"/>    <path d="M22.7691 25.7799C22.7151 25.7799 22.661 25.7799 22.607 25.7272L22.1206 25.4111C21.9585 25.3057 21.9044 25.095 22.0125 24.8842L23.1474 22.9876C23.2555 22.8295 23.4717 22.7242 23.6338 22.8295L24.1202 23.1456C24.2283 23.1983 24.2823 23.3037 24.2823 23.3564C24.2823 23.4617 24.2823 23.5671 24.2283 23.6198L23.0934 25.5165C22.9853 25.7272 22.8772 25.7799 22.7691 25.7799Z" fill="#20BEC6"/>    <path d="M6.66481 12.1347L4.7193 11.1864C4.55718 11.081 4.4491 10.8702 4.55718 10.7122L4.82739 10.1853C4.93547 9.97461 5.15164 9.92192 5.31376 10.0273L7.25927 10.9756C7.4214 11.081 7.52948 11.2917 7.4214 11.4498L7.15119 11.9766C7.0431 12.1347 6.82694 12.2401 6.66481 12.1347Z" fill="#F6BF48"/>    <path d="M6.88103 21.5125C6.82699 21.4598 6.77294 21.4071 6.77294 21.3544L6.50274 20.8276C6.39465 20.6695 6.50274 20.4061 6.66486 20.3007L8.6644 19.247C8.77249 19.1943 8.88057 19.1943 8.93461 19.1943C9.0427 19.247 9.09674 19.2997 9.15078 19.3524L9.42099 19.8792C9.47503 19.9846 9.47503 20.09 9.42099 20.1427C9.36695 20.248 9.31291 20.3007 9.25886 20.3534L7.25932 21.4071C7.15124 21.4598 7.04315 21.4598 6.98911 21.4598C6.93507 21.5125 6.88103 21.5125 6.88103 21.5125Z" fill="#20BEC6"/>    <path d="M9.42106 8.4996C9.36702 8.4996 9.31297 8.4996 9.20489 8.44691L8.71851 8.1308C8.55639 8.02543 8.50235 7.8147 8.61043 7.60396L9.74531 5.7073C9.85339 5.54925 10.0696 5.44388 10.2317 5.54925L10.7181 5.86536C10.8261 5.91804 10.8802 6.02341 10.8802 6.0761C10.8802 6.18147 10.8802 6.28684 10.8261 6.33952L9.69127 8.23617C9.63722 8.34154 9.58318 8.39423 9.4751 8.39423C9.4751 8.4996 9.42106 8.4996 9.42106 8.4996Z" fill="#D8271C"/>    <path d="M8.0159 17.1402C7.90781 17.2456 7.69164 17.2456 7.58356 17.0875L5.85422 15.665C5.6921 15.507 5.6921 15.2962 5.80018 15.1382L6.17847 14.7167C6.23252 14.664 6.3406 14.6113 6.44868 14.6113C6.55677 14.6113 6.66485 14.6113 6.71889 14.7167L8.44823 16.1392C8.50227 16.1919 8.55631 16.2972 8.61036 16.4026C8.61036 16.508 8.61036 16.6134 8.55631 16.666L8.17802 17.0875C8.06994 17.1402 8.06994 17.1402 8.0159 17.1402Z" fill="#D8271C"/>    <path d="M10.0693 26.6758C9.90716 26.6758 9.74504 26.5705 9.69099 26.4124L9.09654 24.2523C9.04249 24.0416 9.15058 23.8309 9.36674 23.7782L9.90716 23.6201C10.0152 23.6201 10.1233 23.6201 10.1774 23.6728C10.2855 23.7255 10.3395 23.7782 10.3395 23.8835L10.934 26.0436C10.934 26.149 10.934 26.2544 10.8799 26.307C10.8259 26.4124 10.7718 26.4651 10.6637 26.4651L10.1233 26.6231C10.1774 26.6758 10.1233 26.6758 10.0693 26.6758Z" fill="#D8271C"/>    <path d="M17.3651 27.7823C17.203 27.7823 17.0408 27.6769 16.9868 27.5189L16.4464 25.3588C16.3923 25.148 16.5004 24.9373 16.7166 24.8846L17.257 24.7266C17.3651 24.7266 17.4732 24.7266 17.5272 24.7792C17.6353 24.8319 17.6893 24.9373 17.6893 24.99L18.2838 27.1501C18.2838 27.2554 18.2838 27.3608 18.2298 27.4135C18.1757 27.5189 18.1217 27.5715 18.0136 27.5715L17.4732 27.7296C17.4191 27.7823 17.4191 27.7823 17.3651 27.7823Z" fill="#F6BF48"/>    <path d="M26.5521 15.1904L14.0685 8.86822C13.0417 8.34137 12.177 8.97359 12.177 10.2907L12.2851 22.4082C12.2851 23.7253 13.1498 24.3049 14.1765 23.778L26.5521 17.1924C27.633 16.6129 27.5789 15.7172 26.5521 15.1904Z" fill="#20BEC6"/>    <path d="M26.5521 15.1904L14.0685 8.86822C13.0417 8.34137 12.177 8.97359 12.177 10.2907V11.9239L24.6607 18.1407L26.4981 17.1397C27.633 16.6129 27.5789 15.7172 26.5521 15.1904Z" fill="#15394C"/></svg>';

  // PLACEHOLDER — заміни на реальний SVG логотип
  var MEGOGO_SVG = '<svg   version="1.1"   id="Слой_1"   x="0px"   y="0px"   viewBox="0 0 383.20001 180.88855"   xml:space="preserve"   sodipodi:docname="MEGOGO.svg"   width="383.20001"   height="180.88855"   inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg"><defs   id="defs51">			</defs><sodipodi:namedview   id="namedview49"   pagecolor="#ffffff"   bordercolor="#666666"   borderopacity="1.0"   inkscape:showpageshadow="2"   inkscape:pageopacity="0.0"   inkscape:pagecheckerboard="0"   inkscape:deskcolor="#d1d1d1"   showgrid="false"   inkscape:zoom="1.3740404"   inkscape:cx="172.48401"   inkscape:cy="91.336471"   inkscape:current-layer="Слой_1" /><style   type="text/css"   id="style2">	.st0{fill:#41B6A9;}</style><g   id="g363"   transform="translate(-48.1,-15.711456)"   inkscape:export-filename="MEGOGO.png"   inkscape:export-xdpi="300.62628"   inkscape:export-ydpi="300.62628"><path     class="st0"     d="M 378.4,33.2 C 378.2,33.1 378,33 377.9,32.9 L 341.8,16.1 c -1,-0.5 -2.2,-0.5 -3.2,-0.1 L 239.9,57.7 141.2,16 c -1,-0.4 -2.2,-0.4 -3.2,0.1 l -36.1,16.8 v 0 c -0.2,0.1 -0.3,0.2 -0.5,0.3 -1.1,0.7 -1.8,2 -1.8,3.3 v 156.1 c 0,2.2 1.8,4 4,4 h 272.8 c 2.2,0 4,-1.8 4,-4 V 36.5 c -0.2,-1.3 -0.9,-2.6 -2,-3.3 z m -34.3,-7.3 22.4,10.4 -22.4,9.5 z m -100.3,38.8 92.3,-39 v 23.6 l -92.3,39.3 z m -100.3,-39 92.4,39 V 88.6 L 143.5,49.3 Z m -7.9,0.2 v 20 l -22.4,-9.5 z m -21.7,162.8 27.2,-24.1 h 197.6 l 27.2,24.1 z m 258.3,-4.9 -28.2,-25 v -21.5 h -7.9 v 19.3 H 143.5 v -19.3 h -7.9 v 21.5 l -28.2,25 V 42.5 l 28.2,12 V 111 h 7.9 V 57.9 l 94.8,40.3 v 0 c 1,0.4 2.1,0.4 3.1,0 L 336.2,57.9 V 111 h 7.9 V 54.5 l 28.2,-12 v 141.3 z"     id="path4" /><g     id="g18">		<path   d="m 81.4,140.7 h -7.6 v -19.3 l -8.6,14 h -0.9 l -8.6,-14 v 19.3 h -7.6 v -33.1 h 7.6 l 9,14.7 9,-14.7 h 7.6 v 33.1 z"   id="path6" />		<path   d="m 148.6,133.4 v 7.3 h -24.4 v -33.1 h 24.4 v 7.3 h -16.9 v 5.5 h 16.9 v 7.2 h -16.9 v 5.9 h 16.9 z"   id="path8" />		<path   d="m 218.6,125.1 c 0,10.1 -7,16.3 -16.3,16.3 -10.4,0 -17.9,-7.7 -17.9,-17.2 0,-9.6 7.6,-17.3 17.4,-17.3 6.3,0 11.7,3.1 14.5,7.6 l -6.4,3.7 c -1.4,-2.2 -4.4,-3.9 -8.1,-3.9 -5.6,0 -9.7,4.1 -9.7,9.9 0,5.6 4,9.7 10.4,9.7 4.4,0 7.3,-1.9 8.5,-5.1 h -9 v -6.6 h 16.6 z"   id="path10" />		<path   d="m 254.7,124.2 c 0,-9.7 7.7,-17.2 17.2,-17.2 9.5,0 17.2,7.5 17.2,17.2 0,9.7 -7.7,17.2 -17.2,17.2 -9.5,0 -17.2,-7.5 -17.2,-17.2 z m 26.9,0 c 0,-5.9 -4.3,-9.8 -9.6,-9.8 -5.4,0 -9.6,3.9 -9.6,9.8 0,5.9 4.3,9.8 9.6,9.8 5.3,0 9.6,-3.9 9.6,-9.8 z"   id="path12" />		<path   d="m 359,125.1 c 0,10.1 -7,16.3 -16.3,16.3 -10.4,0 -17.9,-7.7 -17.9,-17.2 0,-9.6 7.6,-17.3 17.4,-17.3 6.3,0 11.7,3.1 14.5,7.6 l -6.4,3.7 c -1.4,-2.2 -4.4,-3.9 -8.1,-3.9 -5.6,0 -9.7,4.1 -9.7,9.9 0,5.6 4,9.7 10.4,9.7 4.4,0 7.3,-1.9 8.5,-5.1 h -8.8 v -6.6 H 359 Z"   id="path14" />		<path   d="m 396.9,124.2 c 0,-9.7 7.7,-17.2 17.2,-17.2 9.5,0 17.2,7.5 17.2,17.2 0,9.7 -7.7,17.2 -17.2,17.2 -9.5,0 -17.2,-7.5 -17.2,-17.2 z m 26.8,0 c 0,-5.9 -4.3,-9.8 -9.6,-9.8 -5.4,0 -9.6,3.9 -9.6,9.8 0,5.9 4.3,9.8 9.6,9.8 5.4,0 9.6,-3.9 9.6,-9.8 z"   id="path16" />	</g></g></svg>';

  // PLACEHOLDER — заміни на реальний SVG логотип
  var TAKFLIX_SVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 698.92 128.56" style="enable-background:new 0 0 698.92 128.56;" xml:space="preserve"><style type="text/css">	.st0{fill:#240F66;}	.st1{fill:#9000FF;}	.st2{fill:#5200B8;}	.st3{fill:#FFFFFF;}	.st4{fill:#FFDEFF;}	.st5{display:none;}	.st6{display:inline;opacity:0.6;}</style><g id="Layer_1">	<g>		<path class="st3" d="M101.96,12.49l-3.34,19.27H68.46l-14.58,84.28h-24.4l14.65-84.28H14.47l3.41-19.27L101.96,12.49 M101.96,7.49			H17.89c-2.43,0-4.5,1.74-4.92,4.13L9.55,30.89c-0.26,1.46,0.14,2.95,1.09,4.08s2.35,1.79,3.83,1.79h23.71l-13.62,78.43			c-0.25,1.45,0.15,2.95,1.1,4.07c0.95,1.13,2.35,1.78,3.83,1.78h24.4c2.43,0,4.51-1.75,4.93-4.15l13.86-80.13h25.95			c2.43,0,4.51-1.75,4.93-4.15l3.34-19.27c0.25-1.45-0.15-2.94-1.1-4.07C104.83,8.14,103.43,7.49,101.96,7.49L101.96,7.49z			 M101.96,17.49L101.96,17.49L101.96,17.49L101.96,17.49z"/>		<path class="st3" d="M173.1,12.49l19.13,103.56h-25.32l-2.49-19.42h-33.07l-9.18,19.42H95.36l54.83-103.56H173.1 M173.1,7.49			h-22.9c-1.85,0-3.55,1.02-4.42,2.66L90.94,113.71c-0.82,1.55-0.77,3.42,0.14,4.92c0.9,1.5,2.53,2.42,4.28,2.42h26.81			c1.93,0,3.69-1.12,4.52-2.86l7.82-16.55h25.51l1.93,15.05c0.32,2.5,2.44,4.36,4.96,4.36h25.32c1.49,0,2.89-0.66,3.84-1.8			s1.34-2.65,1.07-4.11L178.01,11.58C177.58,9.21,175.51,7.49,173.1,7.49L173.1,7.49z"/>		<path class="st3" d="M157.38,41.72l4.55,35.7h-21.48L157.38,41.72 M157.38,37.52c-1.6,0-3.09,0.92-3.79,2.4l-16.93,35.7			c-0.62,1.3-0.52,2.83,0.25,4.04c0.77,1.22,2.11,1.95,3.55,1.95h21.48c1.21,0,2.35-0.52,3.15-1.42c0.8-0.91,1.17-2.11,1.01-3.31			l-4.55-35.7c-0.24-1.85-1.66-3.32-3.51-3.62C157.82,37.54,157.6,37.52,157.38,37.52L157.38,37.52z"/>		<path class="st3" d="M320.05,12.49L320.05,12.49 M320.05,12.49l-42.96,46.87l23.83,56.69h-27.81l-14.05-36.87			c0,0-0.21-0.63-0.65-0.73c-0.51-0.12-1.03,0.42-1.03,0.42l-10.7,10.04c0,0-0.61,0.53-0.74,0.78c-0.17,0.33-0.28,1.2-0.28,1.2			l-4.41,25.17h-24.32l17.91-103.57h24.4l-6.32,36.14c-0.15,0.82-0.08,1.78,1.21,2.35c1.39,0.61,2.4-0.35,2.81-0.81l4.65-5.66			l26.89-32.01L320.05,12.49 M259.24,12.49L259.24,12.49 M320.06,7.49L320.06,7.49h-31.58c-1.48,0-2.88,0.65-3.83,1.78l-24.96,29.72			l4.45-25.46c0.07-0.34,0.11-0.69,0.11-1.04c0-2.76-2.24-5-5-5h-0.01h-24.4c-2.43,0-4.51,1.75-4.93,4.15L211.99,115.2			c-0.25,1.45,0.15,2.94,1.1,4.07c0.95,1.13,2.35,1.78,3.83,1.78h24.32c2.43,0,4.51-1.74,4.92-4.14l4.34-24.74l6.01-5.63l11.93,31.3			c0.74,1.94,2.6,3.22,4.67,3.22h27.81c1.67,0,3.24-0.84,4.16-2.23c0.93-1.39,1.09-3.16,0.44-4.7l-22.59-53.73l40.73-44.44			c0.86-0.9,1.38-2.11,1.38-3.45C325.05,9.73,322.82,7.49,320.06,7.49L320.06,7.49z M320.05,17.49L320.05,17.49L320.05,17.49			L320.05,17.49z"/>		<path class="st3" d="M417.68,12.49L417.68,12.49 M417.68,12.49l-3.34,19.27h-42.96l-4.13,23.83h39.05l-3.34,19.2h-39.05			l-7.18,41.25H332.4l17.92-103.55H417.68 M417.68,7.49L417.68,7.49h-67.36c-2.43,0-4.51,1.75-4.93,4.15L327.47,115.2			c-0.25,1.45,0.15,2.94,1.1,4.07s2.35,1.78,3.83,1.78h24.32c2.43,0,4.51-1.75,4.93-4.14l6.46-37.11h34.84			c2.43,0,4.51-1.75,4.93-4.14l3.34-19.2c0.25-1.45-0.15-2.95-1.1-4.08c-0.95-1.13-2.35-1.78-3.83-1.78h-33.11l2.39-13.83h38.75			c2.43,0,4.51-1.75,4.93-4.15l3.31-19.09c0.07-0.33,0.11-0.68,0.11-1.03C422.68,9.73,420.45,7.49,417.68,7.49L417.68,7.49z			 M417.68,17.49L417.68,17.49L417.68,17.49L417.68,17.49z"/>		<path class="st3" d="M471.04,12.49l-14.65,84.35h42.18l-3.34,19.2h-66.5l17.92-103.55H471.04 M498.57,96.84L498.57,96.84			 M471.04,7.49h-24.4c-2.43,0-4.51,1.75-4.93,4.15L423.8,115.2c-0.25,1.45,0.15,2.94,1.1,4.07s2.35,1.78,3.83,1.78h66.5			c2.43,0,4.51-1.75,4.93-4.14l3.31-19.02c0.07-0.33,0.11-0.68,0.11-1.04c0-2.76-2.24-5-5-5h-0.01h-36.23l13.63-78.5			c0.25-1.45-0.15-2.95-1.1-4.07S472.52,7.49,471.04,7.49L471.04,7.49z M471.04,17.49L471.04,17.49L471.04,17.49L471.04,17.49z"/>		<path class="st3" d="M565.29,12.49l-17.92,103.56h-24.32l17.99-103.56H565.29 M565.29,7.49h-24.25c-2.43,0-4.51,1.75-4.93,4.14			l-18,103.56c-0.25,1.45,0.15,2.95,1.1,4.07c0.95,1.13,2.35,1.78,3.83,1.78h24.32c2.43,0,4.51-1.75,4.93-4.15l17.92-103.56			c0.25-1.45-0.15-2.94-1.1-4.07C568.16,8.14,566.76,7.49,565.29,7.49L565.29,7.49z M565.29,17.49L565.29,17.49L565.29,17.49			L565.29,17.49z"/>		<path class="st3" d="M684.45,12.49L684.45,12.49 M684.45,12.49L647.6,64.84l20.27,51.21h-26.96l-9.74-29.88			c0,0-0.47-1.72-2.1-1.81c-1.69-0.09-2.51,1.4-2.51,1.4l-19.37,30.29h-29.09l37.7-53.2l-19.63-50.36h26.67l9.32,29.19			c0,0,0.42,1.66,2.04,1.8c1.72,0.15,2.56-1.4,2.56-1.4l18.78-29.59H684.45 M684.45,7.49L684.45,7.49h-28.88			c-1.71,0-3.3,0.88-4.22,2.32l-16.03,25.26l-7.7-24.1c-0.66-2.07-2.59-3.48-4.76-3.48h-26.67c-1.65,0-3.2,0.82-4.13,2.18			s-1.13,3.1-0.53,4.64l18.65,47.85l-36.14,51c-1.08,1.53-1.22,3.53-0.36,5.19s2.57,2.7,4.44,2.7h29.09c1.71,0,3.29-0.87,4.21-2.31			l16.64-26.02l8.11,24.88c0.67,2.06,2.59,3.45,4.75,3.45h26.96c1.66,0,3.2-0.82,4.14-2.19c0.93-1.37,1.12-3.11,0.51-4.65			l-19.28-48.7l35.22-50.04c0.62-0.83,0.99-1.86,0.99-2.98C689.45,9.73,687.21,7.49,684.45,7.49L684.45,7.49z M684.45,17.49			L684.45,17.49L684.45,17.49L684.45,17.49z"/>	</g></g><g id="Layer_2" class="st5"></g></svg>';

  /**
   * Line-генератор "Мережі" (для головної сторінки)
   * Відображає логотипи 7 мереж як широкі прямокутні картки
   * Кожна картка веде на відповідний фільтр (category_full)
   *
   * @module lines/networks-line
   */

  var NETWORKS = [{
    key: 'itunes_audio',
    name: 'iTunes',
    svg: ITUNES_SVG
  }, {
    key: 'netflix_audio',
    name: 'Netflix',
    svg: NETFLIX_SVG
  }, {
    key: 'rakuten_audio',
    name: 'Rakuten',
    svg: RAKUTEN_SVG
  }, {
    key: 'playmarket_audio',
    name: 'Google Play',
    svg: GOOGLE_PLAY_SVG
  }, {
    key: 'sweet_audio',
    name: 'Sweet TV',
    svg: SWEET_SVG
  }, {
    key: 'megogo_audio',
    name: 'Megogo',
    svg: MEGOGO_SVG
  }, {
    key: 'takflix_audio',
    name: 'Takflix',
    svg: TAKFLIX_SVG
  }];
  function svgToDataUri(svg) {
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  }

  /**
   * Створює parts_data entry для мереж на головній сторінці
   * @param {function} call — callback від parts_data
   */
  function createNetworksPart(call) {
    var results = NETWORKS.map(function (net) {
      var netPoster = svgToDataUri(net.svg);
      return {
        id: 'network_' + net.key,
        title: net.name,
        poster: netPoster,
        cover: netPoster,
        source: 'kinobaza',
        params: {
          style: {
            name: 'wide'
          }
        },
        _networkCard: net.key
      };
    });
    call({
      title: Lampa.Lang.translate('kinobaza_networks') || 'Мережі',
      type: 'networks',
      url: 'networks',
      results: results,
      total_pages: 1,
      nomore: true,
      params: {
        type: 'networks',
        scroll: {
          horizontal: true,
          step: 600
        },
        items: {
          view: 3
        },
        on: {
          enter: function enter(item, element) {
            if (element && element._networkCard) {
              var filterKey = element._networkCard;
              Lampa.Activity.push({
                url: 'titles?' + filterKey + '=1',
                component: 'category_full',
                source: 'kinobaza',
                title: element.title || '',
                page: 1
              });
            }
          }
        }
      }
    });
  }

  /**
   * Line-генератор "Netflix"
   * Фільтрація контенту за netflix_audio=1
   *
   * @module lines/platforms/netflix
   */
  var PLATFORM_KEY$2 = 'netflix';
  var PLATFORM_NAME$2 = 'Netflix';

  /**
   * Створює Line для Netflix
   * @param {object}   [options]                  - параметри
   * @param {string}   [options.title]            - заголовок рядка (default: 'Нове на Netflix')
   * @param {string}   [options.type]             - тип: 'all' | 'movie' | 'tv'
   * @param {boolean}  [options.withUkrAudio]     - тільки з укр. аудіо
   * @param {boolean}  [options.popular7d]        - популярне за 7 днів (list_type=31)
   * @returns {object} Line object для ContentRows
   */
  function createNetflixLine(options) {
    options = options || {};
    var title = options.title || 'Нове на ' + PLATFORM_NAME$2;
    var type = options.type || 'all';
    var withUkrAudio = options.withUkrAudio || false;
    var popular7d = options.popular7d || false;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$4(type, withUkrAudio, popular7d, orderBy),
      type: type === 'tv' ? 'tv' : 'movie',
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$4(type, withUkrAudio, popular7d, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту
   * @param {string} type
   * @param {boolean} withUkrAudio
   * @param {boolean} popular7d
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$4(type, withUkrAudio, popular7d, orderBy) {
    var params = [PLATFORM_KEY$2 + '_audio=1'];
    params.push('order_by=' + orderBy);
    if (popular7d) {
      params.push('list_type=31');
    }
    if (type === 'movie') {
      params.push('type=1');
    } else if (type === 'tv') {
      params.push('type=2');
    }
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Line-генератор "Megogo"
   * Фільтрація контенту за megogo_audio=1
   *
   * @module lines/platforms/megogo
   */
  var PLATFORM_KEY$1 = 'megogo';
  var PLATFORM_NAME$1 = 'Megogo';

  /**
   * Створює Line для Megogo
   * @param {object}   [options]                  - параметри
   * @param {string}   [options.title]            - заголовок рядка (default: 'Нове на Megogo')
   * @param {string}   [options.type]             - тип: 'all' | 'movie' | 'tv'
   * @param {boolean}  [options.withUkrAudio]     - тільки з укр. аудіо
   * @param {boolean}  [options.popular7d]        - популярне за 7 днів (list_type=31)
   * @returns {object} Line object для ContentRows
   */
  function createMegogoLine(options) {
    options = options || {};
    var title = options.title || 'Нове на ' + PLATFORM_NAME$1;
    var type = options.type || 'all';
    var withUkrAudio = options.withUkrAudio || false;
    var popular7d = options.popular7d || false;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$3(type, withUkrAudio, popular7d, orderBy),
      type: type === 'tv' ? 'tv' : 'movie',
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$3(type, withUkrAudio, popular7d, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту
   * @param {string} type
   * @param {boolean} withUkrAudio
   * @param {boolean} popular7d
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$3(type, withUkrAudio, popular7d, orderBy) {
    var params = [PLATFORM_KEY$1 + '_audio=1'];
    params.push('order_by=' + orderBy);
    if (popular7d) {
      params.push('list_type=31');
    }
    if (type === 'movie') {
      params.push('type=1');
    } else if (type === 'tv') {
      params.push('type=2');
    }
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Line-генератор "Sweet TV"
   * Фільтрація контенту за sweet_audio=1
   *
   * @module lines/platforms/sweet
   */
  var PLATFORM_KEY = 'sweet';
  var PLATFORM_NAME = 'Sweet TV';

  /**
   * Створює Line для Sweet TV
   * @param {object}   [options]                  - параметри
   * @param {string}   [options.title]            - заголовок рядка (default: 'Нове на Sweet TV')
   * @param {string}   [options.type]             - тип: 'all' | 'movie' | 'tv'
   * @param {boolean}  [options.withUkrAudio]     - тільки з укр. аудіо
   * @param {boolean}  [options.popular7d]        - популярне за 7 днів (list_type=31)
   * @returns {object} Line object для ContentRows
   */
  function createSweetLine(options) {
    options = options || {};
    var title = options.title || 'Нове на ' + PLATFORM_NAME;
    var type = options.type || 'all';
    var withUkrAudio = options.withUkrAudio || false;
    var popular7d = options.popular7d || false;
    var orderBy = options.orderBy || 'popularity';
    return {
      title: title,
      url: buildUrl$2(type, withUkrAudio, popular7d, orderBy),
      type: type === 'tv' ? 'tv' : 'movie',
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: buildUrl$2(type, withUkrAudio, popular7d, orderBy),
          component: 'category_full',
          source: 'kinobaza',
          title: title,
          page: 1
        });
      }
    };
  }

  /**
   * Будує URL для API запиту
   * @param {string} type
   * @param {boolean} withUkrAudio
   * @param {boolean} popular7d
   * @param {string} orderBy
   * @returns {string}
   */
  function buildUrl$2(type, withUkrAudio, popular7d, orderBy) {
    var params = [PLATFORM_KEY + '_audio=1'];
    params.push('order_by=' + orderBy);
    if (popular7d) {
      params.push('list_type=31');
    }
    if (type === 'movie') {
      params.push('type=1');
    } else if (type === 'tv') {
      params.push('type=2');
    }
    if (withUkrAudio) {
      params.push('translated=has_ukr_audio');
    }
    return 'titles?' + params.join('&');
  }

  /**
   * Lines — система line-генераторів для ContentRows та Menu override
   * Кожен модуль створює line object для Lampa.ContentRows
   *
   * @module lines/index
   */

  /**
   * Створює масив default lines для головної сторінки
   * Використовується за замовчуванням для ContentRows інтеграції
   * @returns {object[]} Масив Line objectів
   */
  function createDefaultLines() {
    return [createHomeLine({
      title: Lampa.Lang.translate('kinobaza_home'),
      withUkrAudio: true,
      orderBy: 'popularity'
    }), createPopular7dLine({
      title: Lampa.Lang.translate('kinobaza_popular_movies_7d'),
      type: 'movie',
      orderBy: 'popularity'
    }), createPopular7dLine({
      title: Lampa.Lang.translate('kinobaza_popular_tv_7d'),
      type: 'tv',
      orderBy: 'popularity'
    }), createAnimeLine({
      title: Lampa.Lang.translate('menu_anime'),
      listType: 31,
      orderBy: 'popularity'
    }), createCartoonsLine({
      title: Lampa.Lang.translate('menu_multmovie'),
      listType: 31,
      orderBy: 'popularity'
    }), createNetflixLine({
      title: Lampa.Lang.translate('kinobaza_new_on_netflix'),
      popular7d: true,
      orderBy: 'popularity'
    }), createMegogoLine({
      title: Lampa.Lang.translate('kinobaza_new_on_megogo'),
      popular7d: true,
      orderBy: 'popularity'
    })];
  }

  /**
   * Kinobaza Anime Source
   * Окремий source для аніме (genres[]=32 + countries[]=39,214,97,96,92)
   * Використовується коли користувач обирає "Аніме" в меню з kinobaza source
   *
   * Реєструється в Lampa.Api.sources.kinobaza_anime через listeners/anime-override.js
   * Експортується також через source.js як Lampa.Api.sources.kinobaza.anime
   */

  /**
   * Category для аніме
   * Викликається при переході в категорію аніме
   *
   * @param {object} params  — {url: 'anime'|'anime_tv'}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function category$2(params, oncomplite, onerror) {
    var isTV = params.url === 'anime_tv';
    var type = isTV ? 2 : 1;
    api$1.getTitles({
      genres: [32],
      countries: [39, 214, 97, 96, 92],
      type: type,
      page: 1,
      order_by: 'popularity'
    }).then(function (json) {
      json.title = (Lampa.Lang.translate('menu_anime') || 'Аніме') + (isTV ? ' (серіали)' : ' (фільми)');
      json.type = isTV ? 'tv' : 'movie';
      json.url = 'titles?genres[]=32&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92&type=' + type + '&order_by=popularity';
      if (json.data) {
        json.results = card.mapList(json.data);
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
      }
      json = Lampa.Utils.addSource(json, 'kinobaza_anime');
      oncomplite([json]);
    })["catch"](onerror);
    return function (resolve, reject) {
      // Для наступної сторінки
      api$1.getTitles({
        genres: [32],
        countries: [39, 214, 97, 96, 92],
        type: type,
        page: 2,
        order_by: 'popularity'
      }).then(function (json) {
        if (json.data) {
          json.results = card.mapList(json.data);
        }
        json = Lampa.Utils.addSource(json, 'kinobaza_anime');
        resolve(json);
      })["catch"](reject);
    };
  }

  /**
   * List для аніме
   * Пагінований список з фільтром genres[]=32 + countries[]=39,214,97,96,92
   *
   * @param {object} params  — {url, page, type}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function list$2(params, oncomplite, onerror) {
    var queryParams = {
      genres: [32],
      countries: [39, 214, 97, 96, 92],
      page: params.page || 1,
      order_by: 'popularity'
    };
    if (params.type === 'tv') {
      queryParams.type = 2;
    } else {
      queryParams.type = 1;
    }
    api$1.getTitles(queryParams).then(function (json) {
      if (json.data) {
        json.results = card.mapList(json.data);
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
      }
      json = Lampa.Utils.addSource(json, 'kinobaza_anime');
      oncomplite(json);
    })["catch"](onerror);
  }
  var sourceAnime = {
    category: category$2,
    list: list$2
  };

  /**
   * Kinobaza Cartoons Source
   * Окремий source для мультфільмів (genres[]=12 & exclude_genres[]=32)
   * Використовується коли користувач обирає "Мультфільми" в меню з kinobaza source
   *
   * Реєструється в Lampa.Api.sources.kinobaza_cartoons через listeners/cartoon-override.js
   * Експортується також через source.js як Lampa.Api.sources.kinobaza.cartoons
   */

  /**
   * Category для мультфільмів
   * Викликається при переході в категорію мультфільмів
   * Використовує genres[]=12 (анімація) та exclude_genres[]=32 (без аніме)
   *
   * @param {object} params  — {url: 'cartoons'|'cartoons_tv'}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function category$1(params, oncomplite, onerror) {
    var isTV = params.url === 'cartoons_tv';
    var type = isTV ? 2 : 1;
    api$1.getTitles({
      genres: [12],
      exclude_genres: [32],
      type: type,
      page: 1,
      order_by: 'popularity'
    }).then(function (json) {
      json.title = (Lampa.Lang.translate('menu_multmovie') || 'Мультфільми') + (isTV ? ' (серіали)' : ' (фільми)');
      json.type = isTV ? 'tv' : 'movie';
      json.url = 'titles?genres[]=12&exclude_genres[]=32&type=' + type + '&order_by=popularity';
      if (json.data) {
        json.results = card.mapList(json.data);
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
      }
      json = Lampa.Utils.addSource(json, 'kinobaza_cartoons');
      oncomplite([json]);
    })["catch"](onerror);
    return function (resolve, reject) {
      api$1.getTitles({
        genres: [12],
        exclude_genres: [32],
        type: type,
        page: 2,
        order_by: 'popularity'
      }).then(function (json) {
        if (json.data) {
          json.results = card.mapList(json.data);
        }
        json = Lampa.Utils.addSource(json, 'kinobaza_cartoons');
        resolve(json);
      })["catch"](reject);
    };
  }

  /**
   * List для мультфільмів
   * Пагінований список з фільтром genres[]=12 & exclude_genres[]=32
   *
   * @param {object} params  — {url, page, type}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function list$1(params, oncomplite, onerror) {
    var queryParams = {
      genres: [12],
      exclude_genres: [32],
      page: params.page || 1,
      order_by: 'popularity'
    };
    if (params.type === 'tv') {
      queryParams.type = 2;
    } else {
      queryParams.type = 1;
    }
    api$1.getTitles(queryParams).then(function (json) {
      if (json.data) {
        json.results = card.mapList(json.data);
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
      }
      json = Lampa.Utils.addSource(json, 'kinobaza_cartoons');
      oncomplite(json);
    })["catch"](onerror);
  }
  var sourceCartoons = {
    category: category$1,
    list: list$1
  };

  /**
   * Kinobaza source provider
   * Інтегрується в Lampa.Api.sources.kinobaza
   * Патерни з tmdb.js / cub.js
   */
  var network$3 = new Lampa.Reguest();
  var source = 'kinobaza';

  // Кеш маппінгу Kinobaza ID → TMDB ID (оптимізація: ID стабільні)
  var tmdbIdCache = {};

  // Кеш Kinobaza person ID → slug
  // Потрібен бо при кліку на актора зі сторінки фільму Lampa втрачає slug
  var personSlugCache = {};

  /**
   * Збагачення картки TMDB ID при збереженні зі списку
   * @param {object} card - картка з needsEnrichment: true
   * @returns {Promise}
   */
  function enrichCard(card) {
    return new Promise(function (resolve) {
      if (!card.needsEnrichment) {
        resolve(card);
        return;
      }

      // Спроба з кеша
      if (tmdbIdCache[card.kinobaza_id]) {
        card.id = tmdbIdCache[card.kinobaza_id];
        card.needsEnrichment = false;
        resolve(card);
        return;
      }

      // Запит деталей
      var slug = card.slug || '';
      if (!slug) {
        card.id = 'kb_' + card.id;
        card.needsEnrichment = false;
        resolve(card);
        return;
      }
      api$1.getTitle(slug).then(function (data) {
        var tmdbId = data.themoviedb_id;
        card.id = tmdbId || card.id;
        card.kinobaza_id = data.id;
        card.imdb_id = data.imdb_id ? 'tt' + data.imdb_id : '';
        card.themoviedb_id = tmdbId || 0;
        if (tmdbId) {
          tmdbIdCache[card.kinobaza_id] = tmdbId;
        }
        card.needsEnrichment = false;
        resolve(card);
      })["catch"](function () {
        card.id = 'kb_' + card.id;
        card.needsEnrichment = false;
        resolve(card);
      });
    });
  }

  // ============== MAIN ==============

  /**
   * Головна сторінка — 7 контентних рядів (без платформ)
   * 
   * Маппінг згідно kinobaza-lines-mapping.md §9.1 + §11:
   *   1. list_type=1  → title_now_watch   (Зараз дивляться)
   *   2. list_type=2  → title_upcoming    (Незабаром у кіно)
   *   3. list_type=31 → title_trend_week  (У тренді за тиждень)
   *   5. list_type=3  → kinobaza_top      (Топ КіноБази) — custom
   *   6. list_type=5  → kinobaza_home      (Останнє додавання / Вдома)
   *   7. list_type=20 → kinobaza_best_movies (Кращі фільми)
   *   7. list_type=4  → kinobaza_best_series (Кращі серіали)
   *
   * Платформенні лайни (Netflix, Megogo, Sweet TV) — прибрано.
   *
   * @param {object} params
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function main$1(params, oncomplite, onerror) {
    var parts_limit = 9;
    var parts_data = [
    // 1. Зараз дивляться (list_type=1)
    function (call) {
      api$1.getTitles({
        list_type: 1,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('title_now_watch');
        json.type = 'now_watch';
        json.url = 'titles?list_type=1';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 2. Незабаром у кіно (list_type=2)
    function (call) {
      api$1.getTitles({
        list_type: 2,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('kinobaza_upcoming');
        json.type = 'upcoming';
        json.url = 'titles?list_type=2';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 3. У тренді за тиждень (list_type=31)
    function (call) {
      api$1.getTitles({
        list_type: 31,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('title_trend_week');
        json.type = 'trend_week';
        json.url = 'titles?list_type=31';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 4. Топ КіноБази (list_type=3) — custom translation
    function (call) {
      api$1.getTitles({
        list_type: 3,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('kinobaza_top');
        json.type = 'top';
        json.url = 'titles?list_type=3';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 6. Вдома / Останнє додавання (list_type=5)
    function (call) {
      api$1.getTitles({
        list_type: 5,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('kinobaza_home');
        json.type = 'latest';
        json.url = 'titles?list_type=5';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 7. Кращі фільми (list_type=20)
    function (call) {
      api$1.getTitles({
        list_type: 20,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('kinobaza_best_movies');
        json.type = 'best_movies';
        json.url = 'titles?list_type=20';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 8. Кращі серіали (list_type=4)
    function (call) {
      api$1.getTitles({
        list_type: 4,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('kinobaza_best_series');
        json.type = 'best_series';
        json.url = 'titles?list_type=4';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    },
    // 9. Трейлери (тільки для головної сторінки)
    function (call) {
      createTrailersPart(call);
    },
    // 10. Мережі (тільки для головної сторінки)
    function (call) {
      createNetworksPart(call);
    }];
    if (Lampa.ContentRows && typeof Lampa.ContentRows.call === 'function') {
      Lampa.ContentRows.call('main', params, parts_data);
    }
    function loadPart(partLoaded, partEmpty) {
      if (Lampa.Api && typeof Lampa.Api.partNext === 'function') {
        Lampa.Api.partNext(parts_data, parts_limit, partLoaded, partEmpty);
      } else {
        fallbackLoad(parts_data, parts_limit, partLoaded, partEmpty);
      }
    }
    loadPart(oncomplite, onerror);
    return loadPart;
  }

  /**
   * Універсальний fallback для main та category
   */
  function fallbackLoad(parts_data, parts_limit, oncomplite, onerror) {
    var status = new Lampa.Status(parts_limit);
    status.onComplite = function () {
      var fulldata = [];
      for (var key in status.data) {
        if (status.data[key] && status.data[key].results && status.data[key].results.length) {
          fulldata.push(status.data[key]);
        }
      }
      if (fulldata.length) oncomplite(fulldata);else onerror();
    };
    parts_data.forEach(function (part) {
      part(function (json) {
        if (json && json.type) {
          status.append(json.type, json);
        } else {
          status.error();
        }
      });
    });
  }

  // ============== CATEGORY ==============

  /**
   * Категорія: фільми / серіали / мультфільми / аніме
   *
   * Маппінг згідно kinobaza-lines-mapping.md §9.2-9.5:
   *
   * Фільми (type=1):  Зараз дивляться | Незабаром | Популярне | Топ фільми |
   *                   Минулий рік | Варто переглянути | З високим рейтингом |
   *                   Новинки року | 15 жанрових рядів
   * Серіали (type=2): Популярне | Топ серіали | Минулий рік | На цьому тижні |
   *                   З високим рейтингом | Варто переглянути | Онгоїнги |
   *                   15 жанрових рядів
   * Мультфільми:     Вдома | Популярні | Новинки мультфільми | Новинки мультсеріали
   * Аніме:           Вдома | Популярне | Новинки фільми | Новинки серіали |
   *                   З укр. аудіо
   *
   * Платформенні лайни — прибрано з усіх категорій.
   *
   * @param {object} params  — {url: 'movie'|'tv'|'anime', genres: number}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function category(params, oncomplite, onerror) {
    var lampaGenre = parseInt(params.genres) || 0;
    var genreMap = {
      16: 12
    }; // Lampa cartoon(16) -> Kinobaza cartoon(12)
    var kbGenre = genreMap[lampaGenre] || lampaGenre;
    var isMovie = params.url === 'movie';
    var type = isMovie ? 1 : 2;
    var isAnime = params.url === 'anime';
    var isCartoons = !isAnime && kbGenre === 12;
    var isTV = params.url === 'tv';
    var parts_limit = 0;
    var parts_data = [];
    var currentYear = new Date().getFullYear();

    // Список жанрів для жанрових рядів (Kinobaza ID)
    var genreRows = [{
      id: 1,
      name: Lampa.Lang.translate('filter_genre_ac') || 'Екшн'
    }, {
      id: 2,
      name: Lampa.Lang.translate('filter_genre_ad') || 'Пригоди'
    }, {
      id: 3,
      name: Lampa.Lang.translate('filter_genre_fe') || 'Фентезі'
    }, {
      id: 4,
      name: Lampa.Lang.translate('filter_genre_ho') || 'Жахи'
    }, {
      id: 5,
      name: Lampa.Lang.translate('filter_genre_tr') || 'Трилер'
    }, {
      id: 6,
      name: Lampa.Lang.translate('filter_genre_cm') || 'Комедія'
    }, {
      id: 7,
      name: Lampa.Lang.translate('filter_genre_dr') || 'Драма'
    }, {
      id: 8,
      name: Lampa.Lang.translate('filter_genre_bi') || 'Біографія'
    }, {
      id: 9,
      name: Lampa.Lang.translate('filter_genre_hi') || 'Історичний'
    }, {
      id: 10,
      name: Lampa.Lang.translate('filter_genre_cr') || 'Кримінальний'
    }, {
      id: 11,
      name: Lampa.Lang.translate('filter_genre_md') || 'Мелодрама'
    }, {
      id: 13,
      name: Lampa.Lang.translate('filter_genre_fm') || 'Сімейний'
    }, {
      id: 14,
      name: Lampa.Lang.translate('filter_genre_fa') || 'Фантастика'
    }, {
      id: 15,
      name: Lampa.Lang.translate('filter_genre_mi') || 'Військовий'
    }, {
      id: 20,
      name: Lampa.Lang.translate('filter_genre_dc') || 'Документальний'
    }];

    // ============== МУЛЬТФІЛЬМИ (cartoon) ==============
    if (isCartoons) {
      parts_limit = 4;
      var cartoonFilter = {
        genres: [12],
        exclude_genres: [32]
      };
      parts_data = [
      // 1. Вдома (мультфільми)
      function (call) {
        var query = Object.assign({
          list_type: 5,
          page: 1
        }, cartoonFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = Lampa.Lang.translate('kinobaza_home');
          json.type = 'latest';
          json.url = 'titles?list_type=5&genres[]=12&exclude_genres[]=32';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 2. Популярні мультфільми
      function (call) {
        var query = Object.assign({
          list_type: 31,
          page: 1
        }, cartoonFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = Lampa.Lang.translate('kinobaza_popular_cartoons');
          json.type = 'popular';
          json.url = 'titles?list_type=31&genres[]=12&exclude_genres[]=32';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 3. Новинки мультфільми
      function (call) {
        var query = Object.assign({
          type: 1,
          order_by: 'date_desc',
          page: 1
        }, cartoonFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = (Lampa.Lang.translate('title_new') || 'Новинки') + ' (фільми)';
          json.type = 'new_movies';
          json.url = 'titles?genres[]=12&exclude_genres[]=32&type=1&order_by=date_desc';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 4. Новинки мультсеріали
      function (call) {
        var query = Object.assign({
          type: 2,
          order_by: 'date_desc',
          page: 1
        }, cartoonFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = (Lampa.Lang.translate('title_new') || 'Новинки') + ' (серіали)';
          json.type = 'new_series';
          json.url = 'titles?genres[]=12&exclude_genres[]=32&type=2&order_by=date_desc';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      }];
      if (Lampa.ContentRows && typeof Lampa.ContentRows.call === 'function') {
        Lampa.ContentRows.call('category', params, parts_data);
      }
      (function loadGenre(partLoaded, partEmpty) {
        if (Lampa.Api && typeof Lampa.Api.partNext === 'function') {
          Lampa.Api.partNext(parts_data, parts_limit, partLoaded, partEmpty);
        } else {
          fallbackLoad(parts_data, parts_limit, partLoaded, partEmpty);
        }
      })(oncomplite, onerror);
      return function () {};
    }

    // ============== АНІМЕ (anime) ==============
    if (isAnime) {
      parts_limit = 5;
      var animeFilter = {
        genres: [32]
      };
      parts_data = [
      // 1. Вдома (аніме)
      function (call) {
        var query = Object.assign({
          list_type: 5,
          page: 1
        }, animeFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = Lampa.Lang.translate('kinobaza_home');
          json.type = 'latest';
          json.url = 'titles?list_type=5&genres[]=32';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 2. Популярне аніме
      function (call) {
        api$1.getTitles({
          genres: [32],
          order_by: 'popularity',
          page: 1
        }).then(function (json) {
          json.title = Lampa.Lang.translate('kinobaza_popular_anime');
          json.type = 'popular';
          json.url = 'titles?genres[]=32&order_by=popularity';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 3. Новинки — аніме фільми
      function (call) {
        var query = Object.assign({
          type: 1,
          order_by: 'date_desc',
          page: 1
        }, animeFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = (Lampa.Lang.translate('title_new') || 'Новинки') + ' (фільми)';
          json.type = 'new_movies';
          json.url = 'titles?genres[]=32&type=1&order_by=date_desc';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 4. Новинки — аніме серіали
      function (call) {
        var query = Object.assign({
          type: 2,
          order_by: 'date_desc',
          page: 1
        }, animeFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = (Lampa.Lang.translate('title_new') || 'Новинки') + ' (серіали)';
          json.type = 'new_series';
          json.url = 'titles?genres[]=32&type=2&order_by=date_desc';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      },
      // 5. З українським аудіо
      function (call) {
        var query = Object.assign({
          translated: 'has_ukr_audio',
          order_by: 'popularity',
          page: 1
        }, animeFilter);
        api$1.getTitles(query).then(function (json) {
          json.title = Lampa.Lang.translate('kinobaza_ukr_audio_anime') || 'З укр. аудіо';
          json.type = 'ukr_audio';
          json.url = 'titles?genres[]=32&translated=has_ukr_audio';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      }];
      if (Lampa.ContentRows && typeof Lampa.ContentRows.call === 'function') {
        Lampa.ContentRows.call('category', params, parts_data);
      }
      (function loadGenre(partLoaded, partEmpty) {
        if (Lampa.Api && typeof Lampa.Api.partNext === 'function') {
          Lampa.Api.partNext(parts_data, parts_limit, partLoaded, partEmpty);
        } else {
          fallbackLoad(parts_data, parts_limit, partLoaded, partEmpty);
        }
      })(oncomplite, onerror);
      return function () {};
    }

    // ============== ФІЛЬМИ / СЕРІАЛИ ==============

    // Спільні лайни (для фільмів і серіалів)

    // 1. Зараз дивляться (тільки фільми, list_type=1 — в прокаті)
    if (isMovie) {
      parts_data.push(function (call) {
        api$1.getTitles({
          list_type: 1,
          page: 1
        }).then(function (json) {
          json.title = Lampa.Lang.translate('title_now_watch');
          json.type = 'now_watch';
          json.url = 'titles?list_type=1';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      });
    }

    // 2. Незабаром (тільки фільми, list_type=2 — майбутні прем'єри)
    if (isMovie) {
      parts_data.push(function (call) {
        api$1.getTitles({
          list_type: 2,
          page: 1
        }).then(function (json) {
          json.title = Lampa.Lang.translate('kinobaza_upcoming');
          json.type = 'upcoming';
          json.url = 'titles?list_type=2';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      });
    }

    // 3. Популярне з фільтром за типом
    parts_data.push(function (call) {
      api$1.getTitles({
        list_type: 31,
        page: 1,
        type: type
      }).then(function (json) {
        json.title = isMovie ? Lampa.Lang.translate('title_popular_movie') || 'Популярні фільми' : Lampa.Lang.translate('title_popular_tv') || 'Популярні серіали';
        json.type = 'popular';
        json.url = 'titles?list_type=31&type=' + type;
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    });

    // 4. Топ (для фільмів — list_type=3, для серіалів — list_type=4)
    parts_data.push(function (call) {
      var lt = isMovie ? 3 : 4;
      api$1.getTitles({
        list_type: lt,
        page: 1
      }).then(function (json) {
        json.title = isMovie ? Lampa.Lang.translate('title_top_movie') || 'Топ фільми' : Lampa.Lang.translate('title_top_tv') || 'Топ серіали';
        json.type = 'top';
        json.url = 'titles?list_type=' + lt;
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    });

    // 5. Минулий рік
    parts_data.push(function (call) {
      var prevYear = currentYear - 1;
      api$1.getTitles({
        ys: prevYear,
        ye: prevYear,
        type: type,
        list_type: 31,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('title_last_year');
        json.type = 'last_year';
        json.url = 'titles?ys=' + prevYear + '&ye=' + prevYear + '&type=' + type + '&list_type=31';
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    });

    // 6. Варто переглянути
    if (isMovie) {
      parts_data.push(function (call) {
        var ys = currentYear - 7;
        var ye = currentYear - 2;
        api$1.getTitles({
          ys: ys,
          ye: ye,
          rating: 6,
          type: type,
          page: 1
        }).then(function (json) {
          json.title = Lampa.Lang.translate('title_worth_rewatch');
          json.type = 'worth';
          json.url = 'titles?ys=' + ys + '&ye=' + ye + '&rating=6&type=' + type;
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      });
    }

    // 7. З високим рейтингом
    parts_data.push(function (call) {
      api$1.getTitles({
        imdb_rating: 8,
        type: type,
        page: 1
      }).then(function (json) {
        json.title = Lampa.Lang.translate('title_hight_voite');
        json.type = 'high_rated';
        json.url = 'titles?imdb_rating=8&type=' + type;
        if (json.data) {
          json.results = card.mapList(json.data);
          json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        }
        json = Lampa.Utils.addSource(json, 'kinobaza');
        call(json);
      })["catch"](function () {
        call(false);
      });
    });

    // 8. Новинки року (тільки фільми)
    if (isMovie) {
      parts_data.push(function (call) {
        api$1.getTitles({
          ys: currentYear,
          type: type,
          list_type: 31,
          page: 1
        }).then(function (json) {
          json.title = Lampa.Lang.translate('title_new_this_year');
          json.type = 'new_year';
          json.url = 'titles?ys=' + currentYear + '&type=' + type + '&list_type=31';
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      });
    }

    // 9. Онгоїнги (TV)
    if (isTV) {
      // 9a. Онгоїнги
      parts_data.push(function (call) {
        api$1.getTitles({
          list_type: 31,
          type: type,
          page: 1
        }).then(function (json) {
          json.title = Lampa.Lang.translate('title_ongoing');
          json.type = 'ongoing';
          json.url = 'titles?list_type=31&type=' + type;
          if (json.data) {
            json.results = card.mapList(json.data);
            json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
          }
          json = Lampa.Utils.addSource(json, 'kinobaza');
          call(json);
        })["catch"](function () {
          call(false);
        });
      });
    }

    // 10. Жанрові лайни (для фільмів і серіалів)
    for (var gi = 0; gi < genreRows.length; gi++) {
      var g = genreRows[gi];
      (function (genreId, genreName) {
        parts_data.push(function (call) {
          api$1.getTitles({
            type: type,
            genres: [genreId],
            list_type: 31,
            page: 1
          }).then(function (json) {
            json.title = genreName;
            json.type = 'genre_' + genreId;
            json.url = 'titles?type=' + type + '&genres[]=' + genreId + '&list_type=31';
            if (json.data) {
              json.results = card.mapList(json.data);
              json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
            }
            json = Lampa.Utils.addSource(json, 'kinobaza');
            call(json);
          })["catch"](function () {
            call(false);
          });
        });
      })(g.id, g.name);
    }

    // parts_limit = основні лайни + жанрові
    var baseCount = isMovie ? 8 : isTV ? 5 : 4; // without genres
    parts_limit = baseCount + genreRows.length;
    if (Lampa.ContentRows && typeof Lampa.ContentRows.call === 'function') {
      Lampa.ContentRows.call('category', params, parts_data);
    }
    function loadPart(partLoaded, partEmpty) {
      if (Lampa.Api && typeof Lampa.Api.partNext === 'function') {
        Lampa.Api.partNext(parts_data, parts_limit, partLoaded, partEmpty);
      } else {
        fallbackLoad(parts_data, parts_limit, partLoaded, partEmpty);
      }
    }
    loadPart(oncomplite, onerror);
    return loadPart;
  }

  /**
   * Пошук
   * @param {object} params  — {query: string}
   * @param {function} oncomplite
   */
  function search$1(params, oncomplite) {
    // Lampa передає query вже URL-закодованим (encodeURIComponent).
    // Потрібно декодувати, щоб api.buildUrl не зробили подвійне кодування.
    var rawQuery = params.query ? decodeURIComponent(params.query) : '';
    var loaded = 0;
    var total = 2;

    // Зберігаємо секції окремо, будуємо items в чіткому порядку
    var movieSection = null;
    var seriesSection = null;
    var personSection = null;
    function tryComplete() {
      loaded++;
      if (loaded >= total) {
        var items = [];
        // Фільми → Серіали → Особи
        if (movieSection) items.push(movieSection);
        if (seriesSection) items.push(seriesSection);
        if (personSection) items.push(personSection);
        oncomplite(items);
      }
    }

    // ===== 1. Titles (фільми + серіали) =====
    api$1.searchTitles(rawQuery).then(function (json) {
      var movies = [];
      var series = [];
      if (json.data && json.data.length) {
        for (var i = 0; i < json.data.length; i++) {
          var item = json.data[i];
          if (item.number_of_episodes > 0) {
            series.push(item);
          } else {
            movies.push(item);
          }
        }
      }
      if (movies.length) {
        var movieResults = card.mapList(movies);
        var movieWrapper = {
          results: movieResults
        };
        Lampa.Utils.addSource(movieWrapper, 'kinobaza');
        movieSection = {
          title: Lampa.Lang.translate('menu_movies'),
          type: 'movie',
          results: movieResults
        };
      }
      if (series.length) {
        var seriesResults = card.mapList(series);
        var seriesWrapper = {
          results: seriesResults
        };
        Lampa.Utils.addSource(seriesWrapper, 'kinobaza');
        seriesSection = {
          title: Lampa.Lang.translate('menu_tv'),
          type: 'tv',
          results: seriesResults
        };
      }
      tryComplete();
    })["catch"](function () {
      tryComplete();
    });

    // ===== 2. Persons =====
    api$1.searchPersons(rawQuery).then(function (json) {
      var personData = json.data || [];
      if (personData.length) {
        var personResults = card.mapPersonSearchList(personData);
        var personWrapper = {
          results: personResults
        };
        Lampa.Utils.addSource(personWrapper, 'kinobaza');
        personSection = {
          title: Lampa.Lang.translate('kinobaza_persons'),
          type: 'person',
          results: personResults
        };
      }
      tryComplete();
    })["catch"](function () {
      tryComplete();
    });
  }

  // ============== FULL ==============

  /**
   * Детальна картка фільму/серіалу
   * @param {object} params  — {slug, id, method}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function full(params, oncomplite, onerror) {
    // Пріоритет: slug → imdb_id → card.slug → card.imdb_id → card.original_title/card.original_name
    var card = params.card || {};
    var lookupKey = params.slug || params.imdb_id || card.slug || card.imdb_id || '';
    if (lookupKey) {
      // Швидкий шлях: slug або imdb_id → деталі
      api$1.getTitle(lookupKey).then(function (data) {
        onFullLoaded(data, oncomplite);
      })["catch"](function () {
        // Fallback: search by title
        searchByTitle(card, oncomplite, onerror);
      });
    } else {
      // Повільний шлях: пошук за назвою
      searchByTitle(card, oncomplite, onerror);
    }
  }

  /**
   * Пошук тайтлу за назвою і відкриття деталей
   */
  function searchByTitle(card, oncomplite, onerror) {
    var query = card.original_name || card.original_title || card.title || card.name || '';
    if (!query) {
      if (onerror) onerror();
      return;
    }

    // Додаємо рік для точнішого пошуку (якщо є)
    var year = '';
    if (card.first_air_date) {
      year = (card.first_air_date + '').slice(0, 4);
    } else if (card.release_date) {
      year = (card.release_date + '').slice(0, 4);
    }
    var searchQuery = year ? query + ' ' + year : query;
    api$1.searchTitles(searchQuery).then(function (json) {
      var items = json.data || [];

      // Фільтруємо: шукаємо збіг за типом (TV/фільм) та роком
      var isTV = !!(card.original_name || card.name);
      var cardYear = parseInt(year, 10);
      var found = items.find(function (item) {
        // Перевіряємо тип: чи співпадає TV/фільм
        var itemIsTV = (item.number_of_episodes || 0) > 0;
        if (itemIsTV !== isTV) return false;

        // Перевіряємо рік
        if (cardYear && item.year !== cardYear) return false;

        // Перевіряємо назву
        var itemName = (item.name_original || item.name_en || '').toLowerCase();
        var cardName = query.toLowerCase();
        if (itemName !== cardName) return false;
        return true;
      });

      // Якщо точний збіг не знайдено — беремо перший результат з правильним типом
      if (!found) {
        found = items.find(function (item) {
          var itemIsTV = (item.number_of_episodes || 0) > 0;
          return itemIsTV === isTV;
        });
      }

      // Якщо все ще нічого — беремо перший
      if (!found) {
        found = items[0];
      }
      if (found && found.slug) {
        api$1.getTitle(found.slug).then(function (data) {
          onFullLoaded(data, oncomplite);
        })["catch"](function () {
          if (onerror) onerror();
        });
      } else {
        if (onerror) onerror();
      }
    })["catch"](function () {
      if (onerror) onerror();
    });
  }

  /**
   * Обробка повної картки після отримання деталей
   */
  function onFullLoaded(data, oncomplite) {
    var movie = card.mapFull(data);
    var result = {
      movie: movie,
      persons: {
        cast: mapCreditCards(data.actors || []),
        crew: mapCreditCards([].concat(data.directors || [], data.writers || []))
      },
      recomend: {
        title: Lampa.Lang.translate('title_recomendations'),
        results: card.mapList(data.recommendations || [])
      },
      collection: {
        title: Lampa.Lang.translate('title_collection'),
        results: card.mapList(data.collectionMovies || [])
      },
      simular: {
        results: []
      },
      discuss: null,
      videos: {
        results: data.videos ? data.videos.map(function (v) {
          return {
            key: v.id,
            site: 'YouTube',
            type: v.title || 'Trailer',
            name: v.title || ''
          };
        }) : []
      },
      reactions: {
        result: []
      },
      episodes: null
    };
    Lampa.Utils.addSource(result.recomend, 'kinobaza');
    Lampa.Utils.addSource(result.collection, 'kinobaza');

    // НЕ додаємо episodes в початковий результат — Lampa викличе seasons() при потребі
    // Якщо додати порожній episodes: [], Lampa крашить рендер

    // discuss формується в registerFullListener() через e.link.rows.push/splice
    // Тут залишаємо null — вставлятиметься при complite

    oncomplite(result);
  }

  /**
   * Маппінг персон для credits
   */
  function mapCreditCards(persons) {
    if (!persons || !Array.isArray(persons)) return [];
    return persons.map(function (p) {
      var profileRaw = p.poster_tmdb || p.poster_kinobaza || '';
      // Зберігаємо slug в кеш для source-override.js
      if (p.slug) personSlugCache[p.id] = p.slug;
      return {
        id: p.id,
        slug: p.slug || '',
        name: p.name_uk || p.name_en || '',
        character: p.character || '',
        profile_path: profileRaw,
        poster: p.poster_tmdb ? Lampa.TMDB.image('t/p/w300/' + p.poster_tmdb.replace(/^\//, '')) : p.poster_kinobaza ? api$1.cdn(p.poster_kinobaza, 'w300') : './img/img_broken.svg',
        source: source,
        gender: p.gender || 2
      };
    });
  }

  // ============== SEASONS ==============

  /**
   * Завантаження епізодів для сезонів
   * @param {object} tv      — {id, slug, number_of_seasons}
   * @param {array}  from    — масив номерів сезонів
   * @param {function} oncomplite
   */
  function seasons(tv, from, oncomplite) {
    if (!from || !from.length) {
      oncomplite(null);
      return;
    }
    var slug = tv.slug || tv.original_title || '';
    var seasonNumber = from[0];
    api$1.getEpisodes(slug, seasonNumber).then(function (data) {
      var episodes = card.mapEpisodes(data.data || []);
      oncomplite({
        name: Lampa.Lang.translate('title_seasons') + ' ' + seasonNumber,
        season_number: seasonNumber,
        episodes: episodes,
        seasons_count: tv.number_of_seasons || 0,
        episodes_original: episodes
      });
    })["catch"](function () {
      oncomplite(null);
    });
  }

  // ============== PERSON ==============

  /**
   * Деталі персони
   * @param {object} params  — {slug}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function person(params, oncomplite, onerror) {
    // Використовується тільки як fallback.
    // Основний потік: картка → kinobaza_person_detail компонент (завантажує все сам).
    // Повертаємо персону без кредитів — рядки не створюються.
    if (params.slug) {
      api$1.getPerson(params.slug).then(function (data) {
        oncomplite({
          person: card.mapPerson(data),
          credits: {
            knownFor: []
          }
        });
      })["catch"](onerror);
    } else {
      // Делегуємо tmdb якщо немає slug
      if (Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb && Lampa.Api.sources.tmdb.person) {
        Lampa.Api.sources.tmdb.person(params, oncomplite, onerror);
      } else {
        onerror();
      }
    }
  }

  // ============== LIST ==============

  /**
   * Пагінований список
   * @param {object} params  — {url, page}
   * @param {function} oncomplite
   * @param {function} onerror
   */
  function list(params, oncomplite, onerror) {
    var queryParams = parseListUrl(params.url);
    queryParams.page = params.page || 1;
    api$1.getTitles(queryParams).then(function (json) {
      if (json.data) {
        json.results = card.mapList(json.data);
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
      }
      json = Lampa.Utils.addSource(json, 'kinobaza');
      oncomplite(json);
    })["catch"](onerror);
  }

  /**
   * Парсинг URL списку в query параметри
   * Підтримує array params (genres[]=1&genres[]=2 → genres: ['1', '2'])
   */
  function parseListUrl(url) {
    var params = {};
    if (!url) return params;
    var parts = url.split('?');
    if (parts.length > 1) {
      var queryString = parts[1];
      queryString.split('&').forEach(function (pair) {
        var kv = pair.split('=');
        if (kv.length === 2) {
          var key = decodeURIComponent(kv[0]);
          var value = decodeURIComponent(kv[1]);

          // Handle array params (genres[]=1&genres[]=2)
          if (key.indexOf('[]') > 0) {
            key = key.replace('[]', '');
            if (!params[key]) params[key] = [];
            params[key].push(value);
          } else {
            params[key] = value;
          }
        }
      });
    }
    return params;
  }

  // ============== MENU ==============

  /**
   * Меню жанрів для каталогу
   * @param {object} params
   * @param {function} oncomplite
   */
  function menu$1(params, oncomplite) {
    var genres = [{
      title: Lampa.Lang.translate('filter_genre_ac') || 'Бойовик',
      id: '1'
    }, {
      title: Lampa.Lang.translate('filter_genre_ad') || 'Пригоди',
      id: '2'
    }, {
      title: Lampa.Lang.translate('filter_genre_fe') || 'Фентезі',
      id: '3'
    }, {
      title: Lampa.Lang.translate('filter_genre_ho') || 'Жахи',
      id: '4'
    }, {
      title: Lampa.Lang.translate('filter_genre_tr') || 'Трилер',
      id: '5'
    }, {
      title: Lampa.Lang.translate('filter_genre_cm') || 'Комедія',
      id: '6'
    }, {
      title: Lampa.Lang.translate('filter_genre_dr') || 'Драма',
      id: '7'
    }, {
      title: Lampa.Lang.translate('filter_genre_bi') || 'Біографія',
      id: '8'
    }, {
      title: Lampa.Lang.translate('filter_genre_hi') || 'Історичний',
      id: '9'
    }, {
      title: Lampa.Lang.translate('filter_genre_cr') || 'Кримінальний',
      id: '10'
    }, {
      title: Lampa.Lang.translate('filter_genre_md') || 'Мелодрама',
      id: '11'
    }, {
      title: Lampa.Lang.translate('filter_genre_mv') || 'Мультфільм',
      id: '12'
    }, {
      title: Lampa.Lang.translate('filter_genre_fa') || 'Фантастика',
      id: '14'
    }, {
      title: Lampa.Lang.translate('filter_genre_mi') || 'Військовий',
      id: '15'
    }, {
      title: Lampa.Lang.translate('filter_genre_dc') || 'Документальний',
      id: '20'
    }, {
      title: Lampa.Lang.translate('filter_genre_an') || 'Аніме',
      id: '32'
    }, {
      title: Lampa.Lang.translate('filter_genre_fm') || 'Сімейний',
      id: '13'
    }];
    oncomplite(genres);
  }

  // ============== MENU CATEGORY ==============

  /**
   * Підменю для категорії
   * @param {object} params  — {action: 'movie'|'tv'}
   * @param {function} oncomplite
   */
  function menuCategory(params, oncomplite) {
    var type = params.action === 'tv' ? 2 : 1;
    var items = [{
      title: Lampa.Lang.translate('title_popular') || 'Популярне',
      url: 'titles?list_type=31&type=' + type
    }, {
      title: Lampa.Lang.translate('title_new') || 'Новинки',
      url: 'titles?list_type=1&type=' + type
    }, {
      title: Lampa.Lang.translate('title_in_top') || 'За рейтингом',
      url: 'titles?list_type=3&type=' + type
    }, {
      title: Lampa.Lang.translate('kinobaza_home'),
      url: 'titles?list_type=5&type=' + type
    }, {
      title: '──────────',
      separator: true
    }, {
      title: 'Netflix',
      url: 'titles?netflix_audio=1&type=' + type
    }, {
      title: 'Megogo',
      url: 'titles?megogo_audio=1&type=' + type
    }, {
      title: 'Sweet TV',
      url: 'titles?sweet_audio=1&type=' + type
    }, {
      title: 'iTunes',
      url: 'titles?itunes_audio=1&type=' + type
    }, {
      title: 'Rakuten',
      url: 'titles?rakuten_audio=1&type=' + type
    }, {
      title: 'Google Play',
      url: 'titles?playmarket_audio=1&type=' + type
    }, {
      title: 'Takflix',
      url: 'titles?takflix_audio=1&type=' + type
    }, {
      title: 'Apple TV+',
      url: 'titles?apple_tv_subtitles=1&type=' + type
    }];
    oncomplite(items);
  }

  // ============== DISCOVERY ==============

  /**
   * Discovery — глобальний пошук для вибору джерела
   * @returns {object}
   */
  function discovery() {
    return {
      title: Lampa.Lang.translate('kinobaza_title') || 'КіноБаза',
      search: function search(params, oncomplite) {
        // Lampa передає query вже URL-закодованим — декодуємо перед відправкою
        var rawQuery = params.query ? decodeURIComponent(params.query) : '';
        var loaded = 0;
        var total = 2;
        var movieSection = null;
        var seriesSection = null;
        var personSection = null;
        function tryComplete() {
          loaded++;
          if (loaded >= total) {
            var items = [];
            if (movieSection) items.push(movieSection);
            if (seriesSection) items.push(seriesSection);
            if (personSection) items.push(personSection);
            oncomplite(items);
          }
        }

        // ===== 1. Titles =====
        api$1.searchTitles(rawQuery).then(function (data) {
          var raw = data.data || [];
          if (raw.length) {
            var movies = [];
            var series = [];
            for (var i = 0; i < raw.length; i++) {
              if (raw[i].number_of_episodes > 0) {
                series.push(raw[i]);
              } else {
                movies.push(raw[i]);
              }
            }
            if (movies.length) {
              var movieResults = card.mapList(movies);
              var movieWrapper = {
                results: movieResults
              };
              Lampa.Utils.addSource(movieWrapper, 'kinobaza');
              movieSection = {
                title: Lampa.Lang.translate('menu_movies'),
                type: 'movie',
                results: movieResults
              };
            }
            if (series.length) {
              var seriesResults = card.mapList(series);
              var seriesWrapper = {
                results: seriesResults
              };
              Lampa.Utils.addSource(seriesWrapper, 'kinobaza');
              seriesSection = {
                title: Lampa.Lang.translate('menu_tv'),
                type: 'tv',
                results: seriesResults
              };
            }
          }
          tryComplete();
        })["catch"](function () {
          tryComplete();
        });

        // ===== 2. Persons =====
        api$1.searchPersons(rawQuery).then(function (data) {
          var personData = data.data || [];
          if (personData.length) {
            var personResults = card.mapPersonSearchList(personData);
            var personWrapper = {
              results: personResults
            };
            Lampa.Utils.addSource(personWrapper, 'kinobaza');
            personSection = {
              title: Lampa.Lang.translate('kinobaza_persons'),
              type: 'person',
              results: personResults
            };
          }
          tryComplete();
        })["catch"](function () {
          tryComplete();
        });
      },
      params: {
        save: true
      },
      onSelect: function onSelect(params, close) {
        var card = params.element || {};
        if (close) close();
        if (card.gender !== undefined || card.slug && card._job_name) {
          // Картка персони → kinobaza_person_detail
          Lampa.Activity.push({
            url: '',
            component: 'kinobaza_person_detail',
            source: 'kinobaza',
            slug: card.slug,
            id: card.id,
            page: 1
          });
        } else {
          // Картка фільму/серіалу → full
          Lampa.Activity.push({
            url: '',
            component: 'full',
            slug: card.slug,
            id: card.id,
            method: card.original_name || card.name ? 'tv' : 'movie',
            source: source,
            card: card,
            page: 1
          });
        }
      },
      onMore: function onMore(params, close) {
        close();
        Lampa.Activity.push({
          url: '',
          component: 'category_full',
          page: 2,
          query: encodeURIComponent(params.query || ''),
          source: source
        });
      },
      onCancel: function onCancel() {
        api$1.clear();
        network$3.clear();
      }
    };
  }

  // ============== CLEAR ==============

  function clear$3() {
    api$1.clear();
    network$3.clear();
  }

  /**
   * Слухач подій закладок для збагачення карток
   */
  function initBookmarksListener() {
    Lampa.Listener.follow('state:changed', function (e) {
      if (e.target === 'favorite' && e.card && e.card.source === source && e.card.needsEnrichment) {
        enrichCard(e.card).then(function () {
          Lampa.Favorite.read();
        });
      }
    });
  }
  var source$1 = {
    main: main$1,
    category: category,
    full: full,
    search: search$1,
    menu: menu$1,
    menuCategory: menuCategory,
    list: list,
    person: person,
    seasons: seasons,
    discovery: discovery,
    clear: clear$3,
    enrichCard: enrichCard,
    initBookmarksListener: initBookmarksListener,
    // Sub-sources для anime/cartoons (доступні як Lampa.Api.sources.kinobaza.anime)
    anime: sourceAnime,
    cartoons: sourceCartoons,
    // Slug cache для source-override (id → slug, бо Lampa втрачає slug при кліку)
    personSlugCache: personSlugCache
  };

  /**
   * Lines Initialization Module
   * Цей файл гарантує що всі line-генератори будуть включені в збірку
   * 
   * Використовується для ініціалізації ContentRows integration
   */

  /**
   * Ініціалізує ContentRows integration
   * Викликається один раз при старті плагіна
   */
  function initLines() {
    // Створюємо default lines для демонстрації що функції працюють
    var defaultLines = createDefaultLines();

    // Реєструємо anime source
    if (Lampa.Api && Lampa.Api.sources) {
      Lampa.Api.sources.kinobaza_anime = createAnimeSource();
      Lampa.Api.sources.kinobaza_cartoons = createCartoonsSource();
    }

    // Повертаємо lines для використання в ContentRows
    return defaultLines;
  }

  /**
   * Створює масив lines для головної сторінки
   */
  function getHomeLines() {
    return [createHomeLine({
      title: Lampa.Lang.translate('kinobaza_home'),
      withUkrAudio: true,
      orderBy: 'popularity'
    }), createHomeLine({
      title: Lampa.Lang.translate('kinobaza_home_movies'),
      type: 'movie',
      withUkrAudio: true,
      orderBy: 'popularity'
    }), createHomeLine({
      title: Lampa.Lang.translate('kinobaza_home_tv'),
      type: 'tv',
      withUkrAudio: true,
      orderBy: 'popularity'
    }), createPopular7dLine({
      title: Lampa.Lang.translate('kinobaza_popular_movies_7d'),
      type: 'movie',
      orderBy: 'popularity'
    }), createPopular7dLine({
      title: Lampa.Lang.translate('kinobaza_popular_tv_7d'),
      type: 'tv',
      orderBy: 'popularity'
    }), createAnimeLine({
      title: Lampa.Lang.translate('menu_anime'),
      listType: 31,
      orderBy: 'popularity'
    }), createCartoonsLine({
      title: Lampa.Lang.translate('menu_multmovie'),
      listType: 31,
      orderBy: 'popularity'
    }), createNetflixLine({
      title: 'Netflix',
      popular7d: true,
      orderBy: 'popularity'
    }), createMegogoLine({
      title: 'Megogo',
      popular7d: true,
      orderBy: 'popularity'
    }), createSweetLine({
      title: 'Sweet TV',
      popular7d: true,
      orderBy: 'popularity'
    })];
  }

  /**
   * Створює масив lines для категорії
   */
  function getCategoryLines(categoryType) {
    var isTV = categoryType === 'tv';
    var type = isTV ? 'tv' : 'movie';
    var homeTitle = isTV ? Lampa.Lang.translate('kinobaza_home_tv') : Lampa.Lang.translate('kinobaza_home_movies');
    var popularTitle = isTV ? Lampa.Lang.translate('kinobaza_popular_tv_7d') : Lampa.Lang.translate('kinobaza_popular_movies_7d');
    return [createHomeLine({
      title: homeTitle,
      type: type
    }), createPopular7dLine({
      title: popularTitle,
      type: type
    }), createNetflixLine({
      title: 'Netflix (' + type + ')',
      type: type
    }), createMegogoLine({
      title: 'Megogo (' + type + ')',
      type: type
    })];
  }
  var linesInit = {
    init: initLines,
    getHomeLines: getHomeLines,
    getCategoryLines: getCategoryLines,
    createTrailersPart: createTrailersPart,
    createNetworksPart: createNetworksPart
  };

  /**
   * Full listener — DOM-інжекції для акторів дубляжу, рецензій, коментарів
   * Паттерн: lampa-source/plugins/online/online.js
   */

  /**
   * Реєструє listener для повної картки фільму
   * Вставляє: актори дубляжу, рецензії, коментарі
   */
  function registerFullListener() {
    Lampa.Listener.follow('full', function (e) {
      if (e.type !== 'complite') return;
      try {
        var loadReviewsAndComments = function loadReviewsAndComments() {
          // 2. Рецензії
          api$1.getReviews(movie.kinobaza_id || movie.id).then(function (reviewsData) {
            if (!reviewsData || !reviewsData.data || !reviewsData.data.length) {
              loadComments();
              return;
            }
            var reviewResults = reviewsData.data.map(function (r) {
              var author = r.user && r.user.name || 'Користувач';
              var fullText = (r.spoilers ? '⚠️ СПОЙЛЕРИ\n' : '') + (r.title || '') + '\n' + (r.body || '');
              return {
                id: 'review_' + r.id,
                email: author + (r.rating ? ' ★ ' + r.rating + '/10' : ''),
                text: fullText,
                comment: fullText,
                like_count: r.likes || 0,
                liked: r.likes || 0
              };
            });
            rows.splice(cardsIdx, 0, ['discuss', {
              title: Lampa.Lang.translate('kinobaza_reviews') || 'Рецензії',
              results: reviewResults,
              movie: movie,
              page: 1,
              total_pages: 1,
              total_results: reviewResults.length
            }]);
            cardsIdx++;
            loadComments();
          })["catch"](function () {
            loadComments();
          });
        };
        var loadComments = function loadComments() {
          // 3. Коментарі
          if (movie.comments_count > 0) {
            api$1.getComments(movie.kinobaza_id || movie.id, 7).then(function (commentsData) {
              if (!commentsData || !commentsData.data || !commentsData.data.length) return;
              var commentResults = commentsData.data.map(function (c) {
                var author = c.user && c.user.name || '';
                return {
                  id: c.id,
                  email: author + (c.rating ? ' ★ ' + c.rating + '/10' : ''),
                  text: c.body || '',
                  comment: c.body || '',
                  like_count: c.likes || 0,
                  liked: c.likes || 0
                };
              });
              rows.splice(cardsIdx, 0, ['discuss', {
                title: Lampa.Lang.translate('title_comments'),
                results: commentResults,
                movie: movie,
                page: 1,
                total_pages: 1,
                total_results: commentResults.length
              }]);
            })["catch"](function () {});
          }
        };
        var movie = e.data && e.data.movie;
        if (!movie || movie.source !== 'kinobaza') return;
        var rows = e.link && e.link.rows;
        if (!rows) return;

        // Знаходимо індекс persons
        var personIdx = -1;
        for (var i = 0; i < rows.length; i++) {
          if (rows[i] && rows[i][0] === 'persons') {
            personIdx = i;
            break;
          }
        }

        // Знаходимо індекс cards
        var cardsIdx = rows.length;
        for (var i = 0; i < rows.length; i++) {
          if (rows[i] && rows[i][0] === 'cards') {
            cardsIdx = i;
            break;
          }
        }

        // 1. Дубляж — завжди першим
        if (movie.hasDubInfo) {
          api$1.getDubPersons(movie.kinobaza_id || movie.id).then(function (dubData) {
            if (!dubData || !dubData.data || !dubData.data.length) {
              loadReviewsAndComments();
              return;
            }
            var dubResults = dubData.data.map(function (a) {
              var poster = a.poster_tmdb || a.poster_kinobaza || '';
              return {
                id: a.id,
                slug: a.slug || '',
                name: a.name_uk || a.name_en || '',
                original_name: a.name_en || '',
                profile_path: poster,
                poster: poster ? a.poster_tmdb ? Lampa.TMDB.image('t/p/w276_and_h350_face/' + a.poster_tmdb.replace(/^\//, '')) : 'https://i.kinobaza.com.ua/w300/' + a.poster_kinobaza : './img/img_broken.svg',
                character: a.character || '',
                source: 'kinobaza',
                gender: a.gender || 2
              };
            });
            var insertAt = personIdx >= 0 ? personIdx + 1 : rows.length;
            rows.splice(insertAt, 0, ['persons', {
              title: Lampa.Lang.translate('kinobaza_dub_actors'),
              results: dubResults
            }]);

            // Оновлюємо cardsIdx після вставки
            if (insertAt <= cardsIdx) cardsIdx++;
            loadReviewsAndComments();
          })["catch"](function () {
            loadReviewsAndComments();
          });
        } else {
          loadReviewsAndComments();
        }
      } catch (err) {}
    });
  }

  /**
   * Full-start listener — DOM-інжекції в шапку картки
   * Вставляє: rating breakdown, Metacritic, Rotten Tomatoes, release dates, PG
   * Паттерн: lampa-source/src/sass/components/full/start.scss
   */

  /**
   * Реєструє listener для шапки повної картки
   */
  function registerFullStartListener() {
    Lampa.Listener.follow('full', function (e) {
      if (e.type !== 'complite') return;
      try {
        var movie = e.data && e.data.movie;
        if (!movie || movie.source !== 'kinobaza') return;
        var $full = e.object && e.object.activity && e.object.activity.render();
        if (!$full || !$full.length) return;

        // 1. Rating breakdown — топ-3 оцінки + загальна кількість
        var breakdown = movie.rating_breakdown;
        var totalVotes = parseInt(movie.vote_count) || parseInt(movie.votes) || 0;
        if (breakdown && totalVotes > 0) {
          // Збираємо всі оцінки від 10 до 1
          var ratings = [];
          for (var i = 1; i <= 10; i++) {
            var v = parseInt(breakdown[i]) || 0;
            if (v > 0) ratings.push({
              rating: i,
              votes: v
            });
          }
          ratings.sort(function (a, b) {
            return b.rating - a.rating;
          });
          var topText = ratings.map(function (r) {
            return getRatingEmoji(r.rating) + r.rating + ': ' + r.votes;
          }).join('  ');
          var $reactions = $full.find('.full-start-new__reactions div').first();
          if ($reactions.length) {
            $reactions.text(topText + '  ·  всього ' + totalVotes);
          }
        }

        // 2. Metacritic — лаконічний бейдж перед PG
        var $pg = $full.find('.full-start__pg');
        if (movie.metascore > 0 && $pg.length) {
          var metaColor = movie.metascore >= 61 ? '#6c3' : movie.metascore >= 40 ? '#fc3' : '#f00';
          $pg.before('<div class="full-start__rate rate--metacritic">' + '<div style="background:' + metaColor + ';color:#000;border-radius:0.3em;font-weight:700;padding:0 0.4em">' + movie.metascore + '</div>' + '<div style="font-size:0.65em;text-transform:uppercase;letter-spacing:0.05em">Metacritic</div>' + '</div>');
        }

        // 3. Rotten Tomatoes — лаконічний бейдж з томатом перед PG
        if (movie.tomato_meter > 0 && $pg.length) {
          var rtColor = movie.tomato_meter >= 75 ? '#6c3' : movie.tomato_meter >= 60 ? '#fc3' : '#f00';
          var rtSymbol = movie.tomato_meter >= 60 ? '' : '💀';
          $pg.before('<div class="full-start__rate rate--rotten">' + '<div style="background:' + rtColor + ';color:#000;border-radius:0.3em;font-weight:700;padding:0 0.4em">' + rtSymbol + ' ' + movie.tomato_meter + '%</div>' + '<div style="font-size:0.65em;text-transform:uppercase;letter-spacing:0.05em">Rotten</div>' + '</div>');
        }

        // 4. Release dates — власний клас full--releases, формат DD.MM.YYYY
        var releases = [];
        if (movie.released_ua) releases.push({
          label: '🇺🇦',
          date: movie.released_ua
        });
        if (movie.released_en) releases.push({
          label: '🌍',
          date: movie.released_en
        });
        if (movie.premiere_dvd) releases.push({
          label: '📀 DVD',
          date: movie.premiere_dvd
        });
        if (movie.premiere_bluray) releases.push({
          label: '💿 Blu-ray',
          date: movie.premiere_bluray
        });
        if (movie.premiere_digital) releases.push({
          label: '📱 Digital',
          date: movie.premiere_digital
        });
        if (releases.length > 1) {
          var releaseText = releases.map(function (r) {
            return r.label + ' ' + fmtDate(r.date);
          }).join(' | ');
          var $details = $full.find('.full-descr__details');
          $details.append('<div class="full-descr__info full--releases" style="flex-basis:100%"><div class="full-descr__info-name">Релізи</div><div class="full-descr__info-body">' + releaseText + '</div></div>');
        }

        // 5. PG / віковий рейтинг — показуємо в full-start__pg
        var pgText = movie.rating_mpaa;
        if (!pgText && movie.rating_age > 0) pgText = movie.rating_age + '+';
        if (pgText) {
          var $pg = $full.find('.full-start__pg');
          if ($pg.length) {
            $pg.removeClass('hide').text(pgText);
          }
        }

        // 6. Networks — логотипи мереж в кінці тегів
        var networks = movie.networks;
        if (networks && Array.isArray(networks) && networks.length) {
          var $tags = $full.find('.full-descr__tags');
          if ($tags.length) {
            var networkLogoUrl = function networkLogoUrl(n) {
              return n.logo_svg ? 'https://image.tmdb.org/t/p/original/' + n.logo_svg.replace(/^\//, '') : n.logo ? 'https://image.tmdb.org/t/p/original/' + n.logo.replace(/^\//, '') : '';
            };
            var networkPush = function networkPush(n) {
              Lampa.Activity.push({
                url: 'titles?network=' + n.id,
                title: n.name,
                component: 'category_full',
                source: 'kinobaza',
                page: 1
              });
            };
            if (networks.length === 1) {
              // Одна мережа — tag-count з лого всередині
              var n = networks[0];
              var src = networkLogoUrl(n);
              if (src) {
                var $netTag = $('<div class="tag-count selector kinobaza-single-network" title="' + n.name + '">' + '<span class="kinobaza-network-logo-wrap"><img src="' + src + '" class="kinobaza-network-logo" alt="' + n.name + '"></span>' + '</div>');
                $netTag.on('hover:enter', function () {
                  networkPush(n);
                });
                $tags.append($netTag);
              }
            } else {
              // Дві і більше — tag-count з лічильником
              var $netTag = $('<div class="tag-count selector">' + '<div class="tag-count__name">' + (Lampa.Lang.translate('kinobaza_networks') || 'Мережі') + '</div>' + '<div class="tag-count__count">' + networks.length + '</div>' + '</div>');
              $netTag.on('hover:enter', function () {
                var selectItems = networks.map(function (n) {
                  var logoUrl = networkLogoUrl(n);
                  return {
                    title: logoUrl ? '<img src="' + logoUrl + '" style="height:1.2em;vertical-align:middle;margin-right:0.5em"> ' + n.name : n.name,
                    elem: n
                  };
                });
                Lampa.Select.show({
                  title: Lampa.Lang.translate('kinobaza_networks') || 'Мережі',
                  items: selectItems,
                  onSelect: function onSelect(a) {
                    networkPush(a.elem);
                  },
                  onBack: function onBack() {
                    Lampa.Controller.toggle('full_descr');
                  }
                });
              });
              $tags.append($netTag);
            }
          }
        }
      } catch (err) {}
    });
  }

  /**
   * Anime Override Listener
   * Перехоплює клік на "Аніме" в меню та підміняє source на kinobaza
   *
   * Обходить хардкод Lampa: action == 'anime' ? 'cub' : Storage.field('source')
   *
   * @module listeners/anime-override
   */
  var registered$5 = false;

  /**
   * Реєструє anime override listener
   * Додає kinobaza_anime source та перехоплює menu action для аніме
   */
  function registerAnimeOverride() {
    if (registered$5) return;
    registered$5 = true;
    try {
      // 1. Додаємо kinobaza_anime до available sources
      if (Lampa.Api && Lampa.Api.sources) {
        Lampa.Api.sources.kinobaza_anime = createAnimeSource();
      }
    } catch (err) {
      // мовчки ігноруємо
    }

    // 2. Listener на menu action — перехоплює клік "Аніме"
    if (Lampa.Listener) {
      Lampa.Listener.follow('menu', function (e) {
        try {
          if (e.type !== 'action') return;
          if (e.action !== 'anime') return;

          // Перевіряємо чи обрано kinobaza
          var currentSource = Lampa.Storage && Lampa.Storage.field ? Lampa.Storage.field('source') : '';
          if (currentSource !== 'kinobaza') return;

          // Запобігаємо стандартній поведінці (перехід на cub source)
          e.abort();

          // Відкриваємо категорію аніме через kinobaza source з genres: 12 + countries: 39,214,97,96,92
          if (Lampa.Router) {
            Lampa.Router.call('category', {
              url: 'anime',
              title: (Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate('menu_anime') : 'Аніме') + ' - КіноБаза',
              source: 'kinobaza',
              genres: 12
            });
          }
        } catch (err) {
          // мовчки ігноруємо помилки в listener
        }
      });
    }
  }

  /**
   * Cartoon Override Listener
   * Перехоплює клік на "Мультфільми" в меню та підміняє source на kinobaza
   *
   * Обходить хардкод Lampa: cartoon -> url: 'movie' + genres: 16
   * Використовує genres[]=12 (анімація) та exclude_genres[]=32 (без аніме)
   *
   * @module listeners/cartoon-override
   */
  var registered$4 = false;

  /**
   * Реєструє cartoon override listener
   * Додає kinobaza_cartoons source та перехоплює menu action для мультфільмів
   */
  function registerCartoonOverride() {
    if (registered$4) return;
    registered$4 = true;
    try {
      // 1. Додаємо kinobaza_cartoons до available sources
      if (Lampa.Api && Lampa.Api.sources) {
        Lampa.Api.sources.kinobaza_cartoons = createCartoonsSource();
      }
    } catch (err) {
      // мовчки ігноруємо
    }

    // 2. Listener на menu action — перехоплює клік "Мультфільми"
    if (Lampa.Listener) {
      Lampa.Listener.follow('menu', function (e) {
        try {
          if (e.type !== 'action') return;
          if (e.action !== 'cartoon') return;

          // Перевіряємо чи обрано kinobaza
          var currentSource = Lampa.Storage && Lampa.Storage.field ? Lampa.Storage.field('source') : '';
          if (currentSource !== 'kinobaza') return;

          // Запобігаємо стандартній поведінці (хардкод Lampa: cartoon -> url: 'movie', genres: 16)
          e.abort();

          // Відкриваємо категорію мультфільмів через kinobaza source з genres=12
          // source.js category() при genres=12 потрапляє в гілку isCartoons,
          // яка створює 5 мультфільм-специфічних parts_data
          if (Lampa.Router) {
            Lampa.Router.call('category', {
              url: 'movie',
              title: (Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate('menu_multmovie') : 'Мультфільми') + ' - КіноБаза',
              source: 'kinobaza',
              genres: 12
            });
          }
        } catch (err) {
          // мовчки ігноруємо помилки в listener
        }
      });
    }
  }

  /**
   * ContentRows Integration
   * Додає Kinobaza lines у категорії (anime, cartoons)
   *
   * Handler'и для movie/tv тепер прямо в source.js — не дублюються тут.
   * Тут тільки спеціалізовані handler'и для sub-source (anime, cartoons).
   *
   * Використовує нативний Lampa.ContentRows API (Lampa v3):
   *   Lampa.ContentRows.add({ name, title, screen, index, call })
   *   Lampa.ContentRows.remove(row)
   *
   * @module listeners/content-rows
   */

  var registered$3 = false;

  /**
   * Реєструє ContentRows integration
   */
  function registerContentRows() {
    if (registered$3) return;
    registered$3 = true;

    // ============== ANIME ==============

    var animeRow = {
      name: 'kinobaza_anime',
      title: 'Kinobaza Anime',
      screen: ['category'],
      index: 0,
      call: function call(params, screen) {
        try {
          var source = params.source;
          var isAnime = source === 'kinobaza_anime' || params.url === 'anime';
          if (!isAnime) return;
          if (screen !== 'category') return;
          return [
          // 1. Популярні аніме за 7 днів
          function (call) {
            if (!Lampa.Api.sources.kinobaza_anime) {
              call(false);
              return;
            }
            Lampa.Api.sources.kinobaza_anime.list({
              url: 'titles?list_type=31&genres[]=12&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92',
              page: 1
            }, function (json) {
              call({
                title: 'Популярні аніме за 7 днів',
                type: 'anime',
                url: 'titles?list_type=31&genres[]=12&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92',
                results: json.results || [],
                total_pages: Math.ceil((json.total || 30) / 30) || 1
              });
            }, function () {
              call(false);
            });
          },
          // 2. Аніме фільми
          function (call) {
            if (!Lampa.Api.sources.kinobaza_anime) {
              call(false);
              return;
            }
            Lampa.Api.sources.kinobaza_anime.list({
              url: 'titles?genres[]=12&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92&type=1',
              page: 1
            }, function (json) {
              call({
                title: 'Аніме фільми',
                type: 'anime',
                url: 'titles?genres[]=12&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92&type=1',
                results: json.results || [],
                total_pages: Math.ceil((json.total || 30) / 30) || 1
              });
            }, function () {
              call(false);
            });
          },
          // 3. Аніме серіали
          function (call) {
            if (!Lampa.Api.sources.kinobaza_anime) {
              call(false);
              return;
            }
            Lampa.Api.sources.kinobaza_anime.list({
              url: 'titles?genres[]=12&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92&type=2',
              page: 1
            }, function (json) {
              call({
                title: 'Аніме серіали',
                type: 'anime',
                url: 'titles?genres[]=12&countries[]=39&countries[]=214&countries[]=97&countries[]=96&countries[]=92&type=2',
                results: json.results || [],
                total_pages: Math.ceil((json.total || 30) / 30) || 1
              });
            }, function () {
              call(false);
            });
          }];
        } catch (err) {
          // мовчки ігноруємо
        }
      }
    };
    Lampa.ContentRows.add(animeRow);

    // ============== CARTOONS ==============

    var cartoonsRow = {
      name: 'kinobaza_cartoons',
      title: 'Kinobaza Cartoons',
      screen: ['category'],
      index: 0,
      call: function call(params, screen) {
        try {
          var source = params.source;
          var isCartoons = source === 'kinobaza_cartoons' || params.genres == 12 && params.exclude_genres == 32;
          if (!isCartoons) return;
          if (screen !== 'category') return;
          return [
          // 1. Популярні мультфільми за 7 днів
          function (call) {
            if (!Lampa.Api.sources.kinobaza_cartoons) {
              call(false);
              return;
            }
            Lampa.Api.sources.kinobaza_cartoons.list({
              url: 'titles?list_type=31&genres[]=12&exclude_genres[]=32',
              page: 1
            }, function (json) {
              call({
                title: 'Популярні мультфільми за 7 днів',
                type: 'cartoons',
                url: 'titles?list_type=31&genres[]=12&exclude_genres[]=32',
                results: json.results || [],
                total_pages: Math.ceil((json.total || 30) / 30) || 1
              });
            }, function () {
              call(false);
            });
          },
          // 2. Мультфільми фільми
          function (call) {
            if (!Lampa.Api.sources.kinobaza_cartoons) {
              call(false);
              return;
            }
            Lampa.Api.sources.kinobaza_cartoons.list({
              url: 'titles?genres[]=12&exclude_genres[]=32&type=1',
              page: 1
            }, function (json) {
              call({
                title: 'Мультфільми (фільми)',
                type: 'cartoons',
                url: 'titles?genres[]=12&exclude_genres[]=32&type=1',
                results: json.results || [],
                total_pages: Math.ceil((json.total || 30) / 30) || 1
              });
            }, function () {
              call(false);
            });
          },
          // 3. Мультсеріали
          function (call) {
            if (!Lampa.Api.sources.kinobaza_cartoons) {
              call(false);
              return;
            }
            Lampa.Api.sources.kinobaza_cartoons.list({
              url: 'titles?genres[]=12&exclude_genres[]=32&type=2',
              page: 1
            }, function (json) {
              call({
                title: 'Мультсеріали',
                type: 'cartoons',
                url: 'titles?genres[]=12&exclude_genres[]=32&type=2',
                results: json.results || [],
                total_pages: Math.ceil((json.total || 30) / 30) || 1
              });
            }, function () {
              call(false);
            });
          }];
        } catch (err) {
          // мовчки ігноруємо
        }
      }
    };
    Lampa.ContentRows.add(cartoonsRow);
  }

  /**
   * Source Override Listener
   * Перехоплює Lampa.Api.full коли активна КіноБаза, щоб відкривати картки
   * через Kinobaza API навіть якщо вони збережені з source=tmdb
   *
   * @module listeners/source-override
   */

  var registered$2 = false;
  var origFull = null;
  var origPush = null;
  var origPerson = null;

  /**
   * Дістає slug персони з кеша за ID
   */
  function lookupPersonSlug(id) {
    if (!id || !Lampa.Api.sources || !Lampa.Api.sources.kinobaza || !Lampa.Api.sources.kinobaza.personSlugCache) return '';
    return Lampa.Api.sources.kinobaza.personSlugCache[id] || '';
  }

  /**
   * Реєструє override для Lampa.Api.full
   * Коли активна КіноБаза — пробує завантажити картку через Kinobaza API
   * за slug або imdb_id. Якщо не знайдено — fallback на оригінальний source.
   */
  function registerSourceOverride() {
    if (registered$2) return;
    registered$2 = true;
    try {
      if (!Lampa.Api || !Lampa.Api.sources || !Lampa.Api.sources.kinobaza) return;
      origFull = Lampa.Api.full;

      // ========== 0. Перехоплюємо Background.change ==========
      // Для карток мереж (SVG логотипи) — не міняємо фон, бо data URI виглядає погано
      if (Lampa.Background && typeof Lampa.Background.change === 'function') {
        var origBgChange = Lampa.Background.change;
        Lampa.Background.change = function (url) {
          if (typeof url === 'string' && url.indexOf('data:image/svg') === 0) return;
          return origBgChange(url);
        };
      }

      // ========== 1. Перехоплюємо Router route 'full' ==========
      // components/main.js біндить onEnter → Router.call('full', data)
      // Для трейлерів (data._openTrailers) → граємо YouTube відео прямо в Lampa.Player
      // Для мереж (data._networkCard) → повертаємо activity з прапорцем для Activity.push
      if (Lampa.Router && Lampa.Router.routes) {
        for (var ri = 0; ri < Lampa.Router.routes.length; ri++) {
          if (Lampa.Router.routes[ri].name === 'full') {
            var origFullRoute = Lampa.Router.routes[ri].callback;
            Lampa.Router.routes[ri].callback = function (data) {
              // Трейлер — граємо відео напряму
              if (data && data._openTrailers && data.youtube_id) {
                try {
                  if (Lampa.Manifest && Lampa.Manifest.app_digital >= 183) {
                    Lampa.Player.play({
                      title: data.title || '',
                      id: data.youtube_id,
                      youtube: true,
                      url: 'https://www.youtube.com/watch?v=' + data.youtube_id,
                      icon: '<img class="size-youtube" src="https://img.youtube.com/vi/' + data.youtube_id + '/default.jpg" />',
                      template: 'selectbox_icon'
                    });
                    Lampa.Player.playlist([{
                      title: data.title || '',
                      id: data.youtube_id,
                      youtube: true,
                      url: 'https://www.youtube.com/watch?v=' + data.youtube_id
                    }]);
                  } else {
                    Lampa.YouTube.play(data.youtube_id);
                  }
                } catch (e) {
                  // fallback — відкриваємо компонент
                  return {
                    url: '',
                    title: data.title || Lampa.Lang.translate('kinobaza_trailers'),
                    component: 'full',
                    _openTrailers: true
                  };
                }
                // Повертаємо пустий activity щоб Router.call не крашив
                return {
                  url: '',
                  title: '',
                  component: 'full',
                  _dummy: true
                };
              }
              // Мережа — повертаємо activity з прапорцем
              if (data && data._networkCard) {
                return {
                  url: 'titles?' + data._networkCard + '=1',
                  title: data.title || '',
                  component: 'full',
                  _networkCard: data._networkCard,
                  source: 'kinobaza'
                };
              }
              return origFullRoute(data);
            };
            break;
          }
        }
      }

      // ========== 1.5. Перехоплюємо Router route 'category_full' ==========
      // Кнопка "Далі" на трейлерах → 'category_full' (закріплено в components/main.js)
      // Перенаправляємо на компонент kinobaza_trailers
      if (Lampa.Router && Lampa.Router.routes) {
        for (ri = 0; ri < Lampa.Router.routes.length; ri++) {
          if (Lampa.Router.routes[ri].name === 'category_full') {
            var origCategoryRoute = Lampa.Router.routes[ri].callback;
            Lampa.Router.routes[ri].callback = function (data) {
              if (data && data._trailersLine) {
                Lampa.Activity.push({
                  url: '',
                  title: data.title || Lampa.Lang.translate('kinobaza_trailers'),
                  component: 'kinobaza_trailers',
                  page: 1
                });
                return {
                  url: '',
                  title: '',
                  component: 'full',
                  _dummy: true
                };
              }
              return origCategoryRoute(data);
            };
            break;
          }
        }
      }

      // ========== 2. Перехоплюємо Activity.push ==========
      // Актор: {component:'actor', id, source:'kinobaza'} → kinobaza_person_detail
      // Мережа: {_networkCard} → category_full з фільтром
      // _dummy: true — пропускаємо пуш (трейлер вже грає)
      if (Lampa.Activity && Lampa.Activity.push) {
        origPush = Lampa.Activity.push;
        Lampa.Activity.push = function (object) {
          // Пропускаємо dummy — граємо трейлер без навігації
          if (object && object._dummy) {
            delete object._dummy;
            return;
          }
          // Перехоплення актора
          if (object && object.component === 'actor' && object.source === 'kinobaza') {
            var slug = object.slug || lookupPersonSlug(object.id);
            if (slug) {
              object.component = 'kinobaza_person_detail';
              object.slug = slug;
              object.title = object.title || slug;
            }
          }
          // Перехоплення трейлера (fallback — якщо Player не спрацював)
          if (object && object._openTrailers) {
            object.component = 'kinobaza_trailers';
            object.url = '';
            object.page = 1;
            delete object._openTrailers;
          }
          // Перехоплення мережі
          if (object && object._networkCard) {
            var filterKey = object._networkCard;
            object.url = 'titles?' + filterKey + '=1';
            object.component = 'category_full';
            object.source = 'kinobaza';
            object.page = 1;
            delete object._networkCard;
          }
          origPush(object);
        };
      }

      // ========== 3. Перехоплюємо Router.routes для 'actor' ==========
      // Дублюючий захист, якщо хтось використовує Router напряму
      if (Lampa.Router && Lampa.Router.routes) {
        // Шукаємо існуючий route 'actor'
        var actorRouteIdx = -1;
        for (var ri = 0; ri < Lampa.Router.routes.length; ri++) {
          if (Lampa.Router.routes[ri].name === 'actor') {
            actorRouteIdx = ri;
            break;
          }
        }
        if (actorRouteIdx >= 0) {
          var origActorCallback = Lampa.Router.routes[actorRouteIdx].callback;
          Lampa.Router.routes[actorRouteIdx].callback = function (data) {
            var base = origActorCallback(data);
            if (data.source === 'kinobaza') {
              var slug = data.slug || lookupPersonSlug(data.id);
              if (slug) {
                base.slug = slug;
                base.title = data.title || slug;
                base.id = data.id;
              }
            }
            return base;
          };
        }
      }

      // ========== 4. Перехоплюємо Api.person (safety net) ==========
      origPerson = Lampa.Api.person;
      Lampa.Api.person = function (params, oncomplite, onerror) {
        if (params.source === 'kinobaza') {
          var slug = params.slug || lookupPersonSlug(params.id);
          if (slug) {
            // Якщо дійшли сюди без Activity.push — значить actor вже створено.
            // push нову активність (не replace — active() ще не в стеку)
            Lampa.Activity.push({
              url: '',
              component: 'kinobaza_person_detail',
              source: 'kinobaza',
              slug: slug,
              id: params.id || 0,
              page: 1,
              title: params.name || params.title || slug
            });
            return;
          }
          if (origPerson) origPerson(params, oncomplite, onerror);
          return;
        }
        if (origPerson) origPerson(params, oncomplite, onerror);
      };
      Lampa.Api.full = function (params, oncomplite, onerror) {
        try {
          // Перевіряємо чи активна КіноБаза
          var activeSource = Lampa.Storage && typeof Lampa.Storage.field === 'function' ? Lampa.Storage.field('source') : '';

          // Якщо активна КіноБаза І картка не з КіноБази — пробуємо перехопити
          // source.js full() сама знайде тайтл по slug, imdb_id або original_title
          if (activeSource === 'kinobaza' && params.source !== 'kinobaza') {
            var kbParams = Object.assign({}, params, {
              source: 'kinobaza'
            });
            Lampa.Api.sources.kinobaza.full(kbParams, function (result) {
              if (result && result.movie && result.movie.id) {
                if (oncomplite) oncomplite(result);
              } else {
                if (origFull) origFull(params, oncomplite, onerror);
              }
            }, function () {
              if (origFull) origFull(params, oncomplite, onerror);
            });
            return;
          }

          // Всі інші випадки — стандартна поведінка
          if (origFull) origFull(params, oncomplite, onerror);
        } catch (e) {
          if (origFull) origFull(params, oncomplite, onerror);
        }
      };
    } catch (e) {
      // мовчки ігноруємо
    }
  }

  /**
   * MyPerson Override Listener
   * Перехоплює клік на "Особи" в штатному меню Lampa
   * та перенаправляє на kinobaza_myperson компонент
   *
   * Обходить стандартний myperson компонент, який використовує TMDB/Account API
   *
   * @module listeners/myperson-override
   */

  var registered$1 = false;

  /**
   * Реєструє myperson override listener
   */
  function registerMyPersonOverride() {
    if (registered$1) return;
    registered$1 = true;

    // Listener на menu action — перехоплює клік "Особи"
    if (Lampa.Listener) {
      Lampa.Listener.follow('menu', function (e) {
        try {
          if (e.type !== 'action') return;
          if (e.action !== 'myperson') return;

          // Перевіряємо чи обрано kinobaza
          var currentSource = Lampa.Storage && Lampa.Storage.field ? Lampa.Storage.field('source') : '';
          if (currentSource !== 'kinobaza') return;

          // Запобігаємо стандартній поведінці (TMDB/Account persons)
          e.abort();

          // Відкриваємо наш компонент списку осіб
          if (Lampa.Router) {
            Lampa.Router.call('kinobaza_myperson', {
              title: Lampa.Lang.translate('kinobaza_myperson') || 'Особи'
            });
          }
        } catch (err) {
          // мовчки ігноруємо помилки в listener
        }
      });
    }
  }

  /**
   * Kinobaza Trailer card
   * Картка трейлера з YouTube thumbnail, назвою фільму, роком, тривалістю
   * Підтримує playlist (всі картки поточної сторінки)
   *
   * Паттерн: t_cub.js Trailer
   */

  /**
   * Форматує тривалість в секундах у формат хв:сс
   * @param {number} seconds
   * @returns {string}
   */
  function formatDuration(seconds) {
    if (!seconds && seconds !== 0) return '';
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m + ':' + (s < 10 ? '0' + s : s);
  }

  /**
   * Trailer card constructor
   * @param {object} data — k6.h0 Trailer
   */
  function Trailer(data) {
    /** @type {object} посилання на масив всіх трейлерів поточної сторінки для playlist */
    this.parentData = null;
    this.build = function () {
      var durationStr = formatDuration(data.duration);
      var yearStr = data.movie && data.movie.year || '';
      var details = [yearStr, durationStr].filter(Boolean).join(" \u2022 ");
      this.card = Lampa.Template.get('kinobaza_trailer', {
        youtube_id: data.youtube_id,
        title: data.movie && (data.movie.name_uk || data.movie.name_en) || data.youtube_title || '',
        details: details
      });
      this.img = this.card.find('img.card__img')[0];
    };
    this.cardImgBackground = function () {
      if (Lampa.Storage.field('background')) {
        return 'https://img.youtube.com/vi/' + data.youtube_id + '/hqdefault.jpg';
      }
      return '';
    };
    this.image = function () {
      var _this = this;
      this.img.onload = function () {
        if (_this.card) _this.card.addClass('card--loaded');
      };
      this.img.onerror = function () {
        if (_this.img) _this.img.src = './img/img_broken.svg';
      };
    };

    /**
     * Будує playlist item для Lampa.Player
     * @param {object} trailerData
     * @returns {object}
     */
    function buildPlayItem(trailerData) {
      var title = trailerData.youtube_title || trailerData.movie && (trailerData.movie.name_uk || trailerData.movie.name_en) || '';
      return {
        title: Lampa.Utils.shortText(title, 50),
        id: trailerData.youtube_id,
        youtube: true,
        url: 'https://www.youtube.com/watch?v=' + trailerData.youtube_id,
        icon: '<img class="size-youtube" src="https://img.youtube.com/vi/' + trailerData.youtube_id + '/default.jpg" />',
        template: 'selectbox_icon'
      };
    }

    /**
     * Відтворює трейлер через YouTube player
     * Всі трейлери з поточної сторінки додаються в плейлист
     */
    this.play = function () {
      var item = buildPlayItem(data);
      var playlist = [];
      if (this.parentData && Array.isArray(this.parentData)) {
        playlist = this.parentData.map(buildPlayItem);
      } else {
        playlist = [item];
      }
      if (Lampa.Manifest.app_digital >= 183) {
        Lampa.Player.play(item);
        Lampa.Player.playlist(playlist);
      } else {
        Lampa.YouTube.play(data.youtube_id);
      }
    };

    /**
     * Показує Select з опцією "Докладніше"
     * Відкриває повну картку фільму
     */
    this.showActions = function () {
      var items = [{
        title: Lampa.Lang.translate('kinobaza_trailers_more'),
        view: true
      }];
      Lampa.Select.show({
        title: Lampa.Lang.translate('title_action'),
        items: items,
        onSelect: function onSelect(item) {
          Lampa.Controller.toggle('content');
          if (item.view && data.movie) {
            Lampa.Activity.push({
              url: '',
              component: 'full',
              id: data.movie.id,
              method: 'movie',
              card: {
                id: data.movie.id,
                title: data.movie.name_uk || data.movie.name_en || '',
                slug: data.movie.slug || '',
                source: 'kinobaza',
                year: data.movie.year || 0
              },
              source: 'kinobaza'
            });
          }
        },
        onBack: function onBack() {
          Lampa.Controller.toggle('content');
        }
      });
    };
    this.create = function () {
      var _this = this;
      this.build();
      this.card.on('hover:focus', function (e, is_mouse) {
        Lampa.Background.change(_this.cardImgBackground());
        if (typeof _this.onFocus === 'function') {
          _this.onFocus(e.target, data, is_mouse);
        }
      }).on('hover:enter', function () {
        _this.play();
      }).on('hover:long', function () {
        _this.showActions();
      });
      this.image();
    };
    this.destroy = function () {
      if (this.img) {
        this.img.onerror = function () {};
        this.img.onload = function () {};
        this.img.src = '';
      }
      if (this.card) {
        this.card.remove();
      }
      this.card = null;
      this.img = null;
      this.parentData = null;
    };
    this.visible = function () {
      if (this.visibled || !this.img) return;
      this.img.src = 'https://img.youtube.com/vi/' + data.youtube_id + '/hqdefault.jpg';
      this.visibled = true;
    };
    this.render = function () {
      return this.card;
    };
  }

  /**
   * Kinobaza Trailers Component
   * Головний екран трейлерів: сітка карток, пагінація при скролі, playlist
   *
   * Паттерн: t_cub.js Component (full page, card grid)
   */
  function Component(object) {
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250,
      end_ratio: 2
    });
    var items = [];
    var itemsData = [];
    var html = $('<div></div>');
    var body = $('<div class="category-full category-full--trailers"></div>');
    var last;
    var after = '';
    var loading = false;
    var hasMore = true;

    /**
     * Завантажує наступну сторінку трейлерів через after курсор
     */
    this.fetchNext = function () {
      if (loading || !hasMore) return;
      loading = true;
      api.getTrailers({
        after: after
      }, function (response) {
        loading = false;
        if (response && response.data && response.data.length) {
          after = response.next_cursor || '';
          hasMore = !!response.next_cursor;
          response.data.forEach(function (trailerData) {
            var card = new Trailer(trailerData);
            card.create();
            card.visible();
            card.onFocus = function (target, card_data) {
              last = target;
              scroll.update(card.render(), true);
            };

            // Посилання на масив всіх даних для playlist
            card.parentData = itemsData;
            body.append(card.render());
            items.push(card);
            itemsData.push(trailerData);
          });
          if (items.length) {
            this.activity.loader(false);
            this.activity.toggle();
          }
        } else {
          hasMore = false;
          this.activity.loader(false);
          if (!items.length) this.empty();
        }
      }.bind(this), function () {
        loading = false;
        hasMore = false;
        this.activity.loader(false);
        if (!items.length) this.empty();
      }.bind(this));
    };

    /**
     * Показує empty state коли немає даних
     */
    this.empty = function () {
      var empty = new Lampa.Empty();
      scroll.append(empty.render());
      this.start = empty.start;
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.create = function () {
      this.activity.loader(true);
      scroll.minus();
      html.append(scroll.render());
      scroll.append(body);
      scroll.onEnd = this.fetchNext.bind(this);
      this.fetchNext();
      return this.render();
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        right: function right() {
          Navigator.move('right');
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
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      body.remove();
      items = [];
      itemsData = [];
      after = '';
      loading = false;
      hasMore = true;
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
  }

  /**
   * Kinobaza Трейлери — entry point
   * Головний екран трейлерів з YouTube плеєром, пагінацією та плейлистом
   *
   * Паттерн: collections.js (entry point + component registration + menu button)
   * Паттерн: kinobaza/kinobaza.js (module imports, guard, startPlugin)
   * Паттерн: t_cub.js (trailer card, CSS, play button)
   */
  function startPlugin$4() {
    window.plugin_kinobaza_trailers_ready = true;

    // ==================== 1. MANIFEST ====================

    var manifest = {
      type: 'video',
      version: '1.0.0',
      name: Lampa.Lang.translate('kinobaza_trailers_title'),
      component: 'kinobaza_trailers'
    };
    Lampa.Manifest.plugins = manifest;

    // ==================== 2. COMPONENT REGISTRATION ====================

    Lampa.Component.add('kinobaza_trailers', Component);

    // ==================== 3. TEMPLATES ====================

    Lampa.Template.add('kinobaza_trailer', '\n        <div class="card selector card--trailer layer--render layer--visible">\n            <div class="card__view">\n                <img src="./img/img_load.svg" class="card__img">\n                <div class="card__promo">\n                    <div class="card__promo-text">\n                        <div class="card__title">{title}</div>\n                    </div>\n                    <div class="card__details">{details}</div>\n                </div>\n            </div>\n            <div class="card__play">\n                <img src="./img/icons/player/play.svg">\n            </div>\n        </div>\n    ');

    // ==================== 4. CSS ====================

    Lampa.Template.add('kinobaza_trailers_css', '\n        <style>\n        .card.card--trailer,\n        .card-more.more--trailers {\n            width: 25.7em;\n        }\n\n        .card.card--trailer .card__view {\n            padding-bottom: 56%;\n            margin-bottom: 0;\n        }\n\n        .card.card--trailer .card__details {\n            margin-top: 0.8em;\n        }\n\n        .card.card--trailer .card__play {\n            position: absolute;\n            top: 1.4em;\n            left: 1.5em;\n            background: #000000b8;\n            width: 2.2em;\n            height: 2.2em;\n            border-radius: 100%;\n            text-align: center;\n            padding-top: 0.6em;\n        }\n\n        .card.card--trailer .card__play img {\n            width: 0.9em;\n            height: 1em;\n        }\n\n        .card-more.more--trailers .card-more__box {\n            padding-bottom: 56%;\n        }\n\n        .category-full--trailers .card {\n            margin-bottom: 1.5em;\n        }\n\n        .category-full--trailers .card {\n            width: 33.3%;\n        }\n\n        @media screen and (max-width: 767px) {\n            .category-full--trailers .card {\n                width: 50%;\n            }\n        }\n\n        @media screen and (max-width: 400px) {\n            .category-full--trailers .card {\n                width: 100%;\n            }\n        }\n        </style>\n    ');
    if (!$('#kinobaza_trailers_style').length) {
      $('body').append(Lampa.Template.get('kinobaza_trailers_css', {}, true));
    }

    // ==================== 5. TRANSLATIONS ====================

    Lampa.Lang.add({
      kinobaza_trailers_title: {
        uk: "\u0422\u0440\u0435\u0439\u043B\u0435\u0440\u0438",
        ru: "\u0422\u0440\u0435\u0439\u043B\u0435\u0440\u044B",
        en: 'Trailers',
        be: "\u0422\u0440\u044D\u0439\u043B\u0435\u0440\u044B"
      },
      kinobaza_trailers_more: {
        uk: "\u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435",
        ru: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
        en: 'More details',
        be: "\u041F\u0430\u0434\u0440\u0430\u0431\u044F\u0437\u043D\u0435\u0439"
      }
    });

    // ==================== 6. MENU BUTTON ====================

    function add() {
      var button = $('<li class="menu__item selector">\n            <div class="menu__ico">\n                <svg height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.2555 2.08955C74.6975 3.2397 77.4083 6.62804 78.3283 10.9306C80 18.7291 80 35 80 35C80 35 80 51.2709 78.3283 59.0694C77.4083 63.372 74.6975 66.7603 71.2555 67.9104C65.0167 70 40 70 40 70C40 70 14.9833 70 8.74453 67.9104C5.3025 66.7603 2.59172 63.372 1.67172 59.0694C0 51.2709 0 35 0 35C0 35 0 18.7291 1.67172 10.9306C2.59172 6.62804 5.3025 3.2395 8.74453 2.08955C14.9833 0 40 0 40 0C40 0 65.0167 0 71.2555 2.08955ZM55.5909 35.0004L29.9773 49.5714V20.4286L55.5909 35.0004Z" fill="currentColor"/>\n                </svg>\n            </div>\n            <div class="menu__text">' + Lampa.Lang.translate('kinobaza_trailers_title') + '</div>\n        </li>');
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('kinobaza_trailers_title'),
          component: 'kinobaza_trailers',
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

  // ==================== GUARD ====================

  if (!window.plugin_kinobaza_trailers_ready) startPlugin$4();

  /**
   * Kinobaza Releases API
   * Цифрові релізи (itunes, netflix, rakuten, sweet, megogo, primevideo, тощо)
   * 
   * Ендпоінт: GET /titles?order_by=date_desc&{platform}_audio=1&{platform}_subtitles=1&page={page}
   * Без автентифікації
   * Відповідь: { total: number, data: [k6.d0] }
   */

  var BASE_URL$2 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$2 = new Lampa.Reguest();

  /**
   * Будує URL з query параметрами
   * @param {string} path
   * @param {object} params
   * @returns {string}
   */
  function buildUrl$1(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var u = BASE_URL$2 + path;
    var first = true;
    for (var key in params) {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        u += (first ? '?' : '&') + key + '=' + encodeURIComponent(params[key]);
        first = false;
      }
    }
    return u;
  }

  /**
   * Отримує список цифрових релізів з пагінацією
   * 
   * @param {number} page    — номер сторінки (1-based)
   * @param {function} resolve — callback з { total, data }
   * @param {function} reject  — callback з помилкою
   */
  function getReleases(page, resolve, reject) {
    var params = {
      order_by: 'date_desc',
      itunes_audio: 1,
      itunes_subtitles: 1,
      rakuten_audio: 1,
      rakuten_subtitles: 1,
      netflix_audio: 1,
      netflix_subtitles: 1,
      playmarket_audio: 1,
      playmarket_subtitles: 1,
      takflix_audio: 1,
      apple_tv_subtitles: 1,
      sweet_audio: 1,
      sweet_subtitles: 1,
      primevideo_audio: 1,
      primevideo_subtitles: 1,
      bluraymania_audio: 1,
      megogo_audio: 1,
      megogo_subtitles: 1,
      page: page
    };
    var url = buildUrl$1('/titles', params);
    network$2.silent(url, function (json) {
      resolve(json);
    }, function (a, c) {
      if (reject) reject(a, c);
    });
  }

  /**
   * Очистити мережеві запити
   */
  function clear$2() {
    network$2.clear();
  }
  var releasesApi = {
    getReleases: getReleases,
    clear: clear$2
  };

  /**
   * Kinobaza Releases Component
   * 
   * Використовує Lampa.Maker.make('Category') для вбудованої пагінації (Lampa >= 3.0.0).
   * Маппінг k6.d0 → Lampa card через card.mapOne() / card.mapList().
   * Замінює year на released_ua (або released_en) у форматі DD.MM.YYYY.
   * 
   * Натискання на картку → Activity.push({ component: 'full', source: 'kinobaza', slug })
   */

  /**
   * Повертає форматовану дату релізу: released_ua > released_en
   * @param {object} raw — k6.d0 title item
   * @returns {string}
   */
  function getReleaseDate(raw) {
    var date = raw.released_ua || raw.released_en || '';
    return date ? fmtDate(date) : '';
  }

  /**
   * Override year → форматована дата релізу для всіх карток
   * @param {array} items — результат card.mapList()
   * @param {array} rawList — оригінальні дані json.data
   */
  function overrideYear(items, rawList) {
    rawList.forEach(function (raw, i) {
      if (items[i]) {
        var formatted = getReleaseDate(raw);
        if (formatted) {
          items[i].year = formatted;
        }
      }
    });
  }
  function component$4(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        releasesApi.getReleases(object.page || 1, function (json) {
          var items = card.mapList(json.data || []);
          var total = json.total || 0;
          var pages = Math.ceil(total / 30) || 1;
          overrideYear(items, json.data || []);
          this.build({
            results: items,
            total_pages: pages
          });
        }.bind(this), this.empty.bind(this));
      },
      onNext: function onNext(resolve, reject) {
        releasesApi.getReleases(this.object.page, function (json) {
          var items = card.mapList(json.data || []);
          overrideYear(items, json.data || []);
          resolve({
            results: items
          });
        }, reject);
      },
      onInstance: function onInstance(item, element) {
        item.use({
          onEnter: function onEnter() {
            Lampa.Activity.push({
              url: '',
              title: element.title,
              component: 'full',
              slug: element.slug,
              source: 'kinobaza',
              page: 1
            });
          }
        });
      }
    });
    return comp;
  }

  /**
   * Kinobaza Digital Releases (Цифрові Релізи)
   * 
   * Плагін-компонент для перегляду цифрових релізів з платформ:
   * iTunes, Netflix, Rakuten, Sweet.tv, Megogo, Prime Video, Takflix, Google Play, Apple TV, Bluraymania
   * 
   * Використовує:
   * - Lampa.InteractionCategory для пагінації
   * - card.mapList() для маппінгу k6.d0 → Lampa cards
   * - fmtDate() для форматування released_en → DD.MM.YYYY
   */
  function startPlugin$3() {
    window.plugin_kinobaza_releases_ready = true;

    // ============== 1. MANIFEST ==============

    Lampa.Manifest.plugins = {
      type: 'video',
      version: '1.0.0',
      name: Lampa.Lang.translate('kinobaza_releases_title'),
      component: 'kinobaza_releases',
      description: 'Цифрові релізи: iTunes, Netflix, Rakuten, Sweet.tv, Megogo та інші'
    };

    // ============== 2. TEMPLATES ==============

    Lampa.Template.add('kinobaza_releases_css', "<style>\n        .kinobaza-releases-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n            gap: 12px;\n            padding: 16px;\n        }\n    </style>");

    // ============== 3. CSS INJECTION ==============

    if (!$('#kinobaza_releases_style').length) {
      $('body').append(Lampa.Template.get('kinobaza_releases_css', {}, true));
    }

    // ============== 4. TRANSLATIONS ==============

    Lampa.Lang.add({
      kinobaza_releases_title: {
        ru: 'Цифровые релизы',
        uk: 'Цифрові релізи',
        en: 'Digital Releases',
        be: 'Лiчбавыя рэлізы'
      }
    });

    // ============== 5. COMPONENT REGISTRATION ==============

    Lampa.Component.add('kinobaza_releases', component$4);

    // ============== 6. MENU BUTTON ==============

    function add() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM10 17V7L17 12L10 17Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(Lampa.Lang.translate('kinobaza_releases_title'), "</div>\n        </li>"));
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('kinobaza_releases_title'),
          component: 'kinobaza_releases',
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

  // ============== GUARD ==============

  if (!window.plugin_kinobaza_releases_ready) {
    startPlugin$3();
  }

  /**
   * Kinobaza Collections API
   * Endpoints:
   *   GET /lists?order_by=date_added_desc&type=1&page={page}
   *   GET /titles?list_type=13&list_id={id}&page={page}
   */
  var BASE_URL$1 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$1 = new Lampa.Reguest();

  /**
   * Заголовки з Bearer токеном (опціонально)
   */
  function getHeaders$1() {
    var token = storage.getToken();
    if (token) {
      return {
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
    }
    return {};
  }

  /**
   * GET /lists?order_by=date_added_desc&type=1&page={page}
   * Список колекцій (списків) КіноБази
   * @param {number} page
   * @param {function} resolve
   * @param {function} reject
   */
  function getCollections(page, resolve, reject) {
    var url = BASE_URL$1 + '/lists?order_by=date_added_desc&type=1&page=' + (page || 1);
    network$1.silent(url, function (json) {
      if (json && json.data) {
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        resolve(json);
      } else {
        if (reject) reject();
      }
    }, function (a, c) {
      if (reject) reject(a, c);
    }, false, getHeaders$1());
  }

  /**
   * GET /titles?list_type=13&list_id={listId}&page={page}
   * Вміст колекції (title items)
   * @param {number} listId
   * @param {number} page
   * @param {function} resolve
   * @param {function} reject
   */
  function getCollectionItems(listId, page, resolve, reject) {
    if (!listId) {
      if (reject) reject();
      return;
    }
    var url = BASE_URL$1 + '/titles?list_type=13&list_id=' + listId + '&page=' + (page || 1);
    network$1.silent(url, function (json) {
      if (json && json.data) {
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        resolve(json);
      } else {
        if (reject) reject();
      }
    }, function (a, c) {
      if (reject) reject(a, c);
    }, false, getHeaders$1());
  }

  /**
   * Очистити всі pending запити
   */
  function clear$1() {
    network$1.clear();
  }
  var Api$1 = {
    getCollections: getCollections,
    getCollectionItems: getCollectionItems,
    clear: clear$1
  };

  /**
   * Collection card клас
   * Портретна картка (~15-16em) для відображення колекції КіноБази
   * Сумісний з Lampa.Maker API через createInstance
   * Події (onEnter) реєструються в component.js через item.use()
   */

  /**
   * Визначає правильний URL для зображення
   */
  function resolveImage(tmdbPath, kbzPath, size) {
    size = size || 'w300';
    if (tmdbPath) {
      return Lampa.TMDB.image('t/p/' + size + '/' + tmdbPath.replace(/^\//, ''));
    }
    if (kbzPath) {
      return api$1.cdn(kbzPath, size);
    }
    return './img/img_broken.svg';
  }
  function Collection(data) {
    this.data = data;
    function remove(elem) {
      if (elem) elem.remove();
    }

    /**
     * build — створює DOM з шаблону
     */
    this.build = function () {
      var authorName = data.user && data.user.name || '';
      var avatarUrl = data.user && data.user.avatar ? api$1.cdn(data.user.avatar, 'avatars') : '';
      this.item = Lampa.Template.get('kinobaza_collection_card', {
        title: data.title || '',
        items_count: data.items_count || 0,
        author_name: authorName,
        likes: data.likes || 0,
        avatar_url: avatarUrl
      });
      this.img = this.item.find('.card__img');
      this.item[0].addEventListener('visible', this.visible.bind(this));
    };

    /**
     * image — налаштовує onload/onerror для зображення
     */
    this.image = function () {
      var _this = this;
      this.img[0].onload = function () {
        if (_this.item) _this.item[0].classList.add('card--loaded');
      };
      this.img[0].onerror = function () {
        this.src = './img/img_broken.svg';
      };
    };

    /**
     * create — створення картки
     * hover:enter обробляється тут (бо кастомний клас не має Maker .use())
     */
    this.create = function () {
      this.build();
      this.item.on('hover:enter', function () {
        Lampa.Activity.push({
          url: data.id,
          title: data.title || '',
          component: 'kinobaza_collection_view',
          page: 1
        });
      });
      this.image();
    };

    /**
     * visible — завантажує зображення коли картка стає видимою
     */
    this.visible = function () {
      if (!this.img) return;
      this.img.attr('src', resolveImage(data.poster_tmdb, data.poster_kinobaza, 'w300'));
      if (this.onVisible && this.item) this.onVisible(this.item[0], data);
    };

    /**
     * destroy — очищення
     */
    this.destroy = function () {
      if (this.img) {
        this.img.off('load error');
        this.img[0].onload = null;
        this.img[0].onerror = null;
        this.img.attr('src', '');
      }
      if (this.item) {
        remove(this.item[0]);
      }
      this.item = null;
      this.img = null;
    };

    /**
     * render — повертає jQuery елемент
     * @param {boolean} js — якщо true, повертає raw DOM
     * @returns {object}
     */
    this.render = function (js) {
      return js ? this.item[0] : this.item;
    };
  }

  /**
   * Список колекцій (списків) КіноБази
   * Паттерн: collections/category.js — Lampa.Maker.make('Category')
   * Різниця: портретні картки (Collection card class через createInstance)
   * API: GET /lists?order_by=date_added_desc&type=1&page={page}
   */
  function component$3(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        Api$1.getCollections(object.page || 1, function (data) {
          data.results = (data.data || []).map(function (elem) {
            elem.params = elem.params || {};
            elem.params.createInstance = function (itemData) {
              return new Collection(itemData);
            };
            return elem;
          });
          data.total_pages = data.total_pages || 1;
          this.build(data);
        }.bind(this), this.empty.bind(this));
      },
      onNext: function onNext(resolve, reject) {
        Api$1.getCollections(this.object.page, function (data) {
          data.results = (data.data || []).map(function (elem) {
            elem.params = elem.params || {};
            elem.params.createInstance = function (itemData) {
              return new Collection(itemData);
            };
            return elem;
          });
          resolve(data);
        }, reject);
      }
    });
    return comp;
  }

  /**
   * Вміст колекції (title items) КіноБази
   * Паттерн: collections/view.js — Lampa.Maker.make('Category')
   * API: GET /titles?list_type=13&list_id={id}&page={page}
   * Використовує card.mapList() для маппінгу в стандартні Lampa картки
   */
  function component$2(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        if (!object.url) {
          this.empty();
          return;
        }
        Api$1.getCollectionItems(object.url, object.page || 1, function (data) {
          if (data && data.data) {
            data.results = card.mapList(data.data);
          }
          this.build(data);
        }.bind(this), this.empty.bind(this));
      },
      onNext: function onNext(resolve, reject) {
        if (!object.url) {
          reject();
          return;
        }
        Api$1.getCollectionItems(object.url, this.object.page, function (data) {
          if (data && data.data) {
            data.results = card.mapList(data.data);
          }
          resolve(data);
        }, reject);
      },
      onInstance: function onInstance(item, element) {
        item.use({
          onEnter: function onEnter() {
            Lampa.Activity.push({
              url: '',
              title: element.title,
              component: 'full',
              slug: element.slug,
              source: 'kinobaza',
              page: 1
            });
          }
        });
      }
    });
    return comp;
  }

  /**
   * Kinobaza Collections — entry point
   * Реєструє компоненти колекцій, шаблони, CSS, переклади, кнопку меню
   * Паттерн: Lampa.Native.Collections/collections.js
   */
  function startPlugin$2() {
    window.plugin_kinobaza_collections_ready = true;

    // ==================== MANIFEST ====================

    Lampa.Manifest.plugins = {
      type: 'video',
      version: '1.0.0',
      name: Lampa.Lang.translate('kinobaza_collections'),
      component: 'kinobaza_collections',
      description: 'Колекції КіноБази (списки фільмів та серіалів)'
    };

    // ==================== COMPONENTS ====================

    Lampa.Component.add('kinobaza_collections', component$3);
    Lampa.Component.add('kinobaza_collection_view', component$2);

    // ==================== TEMPLATES ====================

    Lampa.Template.add('kinobaza_collection_card', '<div class="card cub-collection-card selector layer--render layer--visible">' + '<div class="card__view">' + '<img src="./img/img_load.svg" class="card__img">' + '<div class="cub-collection-card__head">' + '<div class="cub-collection-card__items">{items_count}</div>' + '</div>' + '<div class="cub-collection-card__bottom">' + '<div class="cub-collection-card__liked">' + '<div class="full-review__like-icon">' + '<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.0131 9.05733H3.75799C2.76183 9.05903 1.80696 9.45551 1.10257 10.1599C0.39818 10.8643 0.00170332 11.8192 0 12.8153V23.0778C0.00170332 24.074 0.39818 25.0289 1.10257 25.7333C1.80696 26.4377 2.76183 26.8341 3.75799 26.8358H23.394C24.2758 26.8354 25.1294 26.5252 25.8056 25.9594C26.4819 25.3936 26.9379 24.6082 27.094 23.7403L28.9408 13.4821C29.038 12.9408 29.0153 12.3849 28.8743 11.8534C28.7333 11.3218 28.4774 10.8277 28.1247 10.4058C27.7721 9.98391 27.3311 9.6445 26.833 9.41151C26.3349 9.17852 25.7918 9.05762 25.2419 9.05733H18.5043V3.63509C18.5044 2.90115 18.2824 2.18438 17.8673 1.57908C17.4522 0.973783 16.8636 0.508329 16.179 0.243966C15.4943 -0.0203976 14.7456 -0.0712821 14.0315 0.0980078C13.3173 0.267298 12.6712 0.648829 12.178 1.1924L12.1737 1.19669C10.5632 2.98979 9.70849 5.78681 8.79584 7.79142C8.6423 8.14964 8.45537 8.49259 8.23751 8.81574C8.16898 8.90222 8.09358 8.98301 8.01203 9.05733H8.0131ZM6.54963 23.6147H3.75799C3.68706 23.6147 3.61686 23.6005 3.55156 23.5728C3.48626 23.5452 3.42719 23.5046 3.37789 23.4536C3.32786 23.4047 3.28819 23.3463 3.26126 23.2817C3.23433 23.2171 3.22068 23.1478 3.22113 23.0778V12.8164C3.22068 12.7464 3.23433 12.6771 3.26126 12.6125C3.28819 12.548 3.32786 12.4895 3.37789 12.4406C3.42719 12.3896 3.48626 12.3491 3.55156 12.3214C3.61686 12.2937 3.68706 12.2795 3.75799 12.2795H6.54963V23.6147ZM9.77077 11.7599C10.3704 11.336 10.8649 10.7803 11.216 10.1353C11.8221 8.94289 12.3599 7.71687 12.8265 6.46324C13.2315 5.33852 13.818 4.28775 14.5627 3.3527C14.6197 3.29181 14.6935 3.24913 14.7747 3.23003C14.8559 3.21093 14.9409 3.21625 15.0191 3.24533C15.0976 3.27557 15.165 3.32913 15.2122 3.3988C15.2594 3.46848 15.2842 3.55093 15.2832 3.63509V10.6679C15.2831 10.8794 15.3246 11.0889 15.4055 11.2844C15.4864 11.4799 15.605 11.6575 15.7546 11.8071C15.9042 11.9566 16.0818 12.0753 16.2773 12.1562C16.4727 12.237 16.6822 12.2786 16.8938 12.2785H25.2419C25.3207 12.2784 25.3986 12.2961 25.4698 12.3301C25.5409 12.3641 25.6036 12.4136 25.6531 12.4749C25.7042 12.5345 25.7411 12.6049 25.7612 12.6807C25.7813 12.7566 25.784 12.836 25.7691 12.913L23.9223 23.1723C23.8993 23.296 23.834 23.4077 23.7376 23.4885C23.6412 23.5692 23.5197 23.6138 23.394 23.6147H9.77077V11.7599Z" fill="currentColor"></path>' + '</svg>' + '</div>' + '<div class="full-review__like-counter">{likes}</div>' + '</div>' + '<img class="cub-collection-card__avatar" src="{avatar_url}" alt="">' + '<div class="cub-collection-card__user-name">{author_name}</div>' + '</div>' + '</div>' + '<div class="card__title">{title}</div>' + '</div>');
    Lampa.Template.add('kinobaza_collections_css', '<style id="kinobaza-collections-style">' + '.cub-collection-card{overflow:hidden}' + '.cub-collection-card .card__view{padding-bottom:150%}' + '.cub-collection-card .card__img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}' + '.cub-collection-card .cub-collection-card__head{position:absolute;top:.7em;left:.7em;font-size:.85em;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,.8)}' + '.cub-collection-card .cub-collection-card__bottom{position:absolute;bottom:0;left:0;right:0;padding:.7em .5em .5em;display:flex;justify-content:center;align-items:center;gap:.5em;font-size:.75em;background:linear-gradient(transparent,rgba(0,0,0,.85))}' + '.cub-collection-card .cub-collection-card__liked{display:flex;align-items:center;gap:.3em}' + '.cub-collection-card .full-review__like-icon{width:1.1em;height:1em}' + '.cub-collection-card .full-review__like-icon svg{width:100%;height:100%}' + '.cub-collection-card .cub-collection-card__avatar{width:1.4em;height:1.4em;border-radius:50%;object-fit:cover;flex-shrink:0}' + '.cub-collection-card .cub-collection-card__avatar[src=""]{display:none}' + '.cub-collection-card .cub-collection-card__user-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' + '</style>');

    // ==================== CSS INJECTION ====================

    if (!$('#kinobaza-collections-style').length) {
      $('body').append(Lampa.Template.get('kinobaza_collections_css', {}, true));
    }

    // ==================== TRANSLATIONS ====================

    Lampa.Lang.add({
      kinobaza_collections: {
        uk: 'Колекції',
        ru: 'Коллекции',
        en: 'Collections',
        be: 'Калекцыі'
      },
      kinobaza_collections_items: {
        uk: 'елементів',
        ru: 'элементов',
        en: 'items',
        be: 'элементаў'
      }
    });

    // ==================== MENU BUTTON ====================

    function add() {
      var button = $('<li class="menu__item selector">' + '<div class="menu__ico">' + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' + '</svg>' + '</div>' + '<div class="menu__text">' + Lampa.Lang.translate('kinobaza_collections') + '</div>' + '</li>');
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('kinobaza_collections'),
          component: 'kinobaza_collections',
          page: 1
        });
      });
      $('.menu .menu__list').eq(0).append(button);
    }
    if (window.appready) {
      add();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') add();
      });
    }
  }

  // ==================== GUARD ====================

  if (!window.plugin_kinobaza_collections_ready) {
    startPlugin$2();
  }

  /**
   * Kinobaza MyPerson API
   * GET /persons — список осіб з пагінацією
   */
  var BASE_URL = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network = new Lampa.Reguest();

  /**
   * Заголовки з Bearer токеном (опціонально)
   */
  function getHeaders() {
    var token = storage.getToken();
    if (token) {
      return {
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
    }
    return {};
  }

  /**
   * Додає параметри до URL
   */
  function addParam(u, params) {
    return u + (/\?/.test(u) ? '&' : '?') + params;
  }

  /**
   * Будує повний URL з query параметрами
   */
  function buildUrl(path, params) {
    var u = BASE_URL + path;
    for (var key in params) {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        u = addParam(u, key + '=' + encodeURIComponent(params[key]));
      }
    }
    return u;
  }

  /**
   * Виконує GET-запит
   */
  function get(path, params, resolve, reject) {
    var u = buildUrl(path, params);
    network.silent(u, function (json) {
      if (json && json.data) {
        json.total_pages = Math.ceil((json.total || json.data.length) / 30) || 1;
        resolve(json);
      } else {
        if (reject) reject();
      }
    }, function (a, c) {
      if (reject) reject(a, c);
    }, false, getHeaders());
  }

  /**
   * GET /persons — список осіб з пагінацією
   * @param {number} page — номер сторінки
   * @param {function} resolve
   * @param {function} reject
   */
  function getPersons(page, resolve, reject) {
    get('/persons', {
      page: page || 1
    }, resolve, reject);
  }

  /**
   * GET /persons/{slug} — деталі персони
   * Використовує окремий запит БЕЗ перевірки json.data (бо відповідь — плоский об'єкт)
   */
  function getPerson(slug, resolve, reject) {
    var u = buildUrl('/persons/' + encodeURIComponent(slug), {
      include_user_links: 1
    });
    network.silent(u, function (json) {
      if (json && json.id) {
        resolve(json);
      } else {
        if (reject) reject();
      }
    }, function (a, c) {
      if (reject) reject(a, c);
    }, false, getHeaders());
  }

  /**
   * GET /titles?person_id={id}&page={page} — тайтли персони
   */
  function getPersonTitles(personId, page, resolve, reject) {
    get('/titles', {
      order_by: 'date_desc',
      person_id: personId,
      page: page || 1
    }, resolve, reject);
  }
  function clear() {
    network.clear();
  }
  var Api = {
    getPersons: getPersons,
    getPerson: getPerson,
    getPersonTitles: getPersonTitles,
    clear: clear
  };

  /**
   * Kinobaza MyPerson — список осіб з пагінацією
   * Паттерн: collections/component.js — Lampa.Maker.make('Category')
   * API: GET /persons?page={page}
   */

  /**
   * Конвертує одну особу з API в картку Lampa
   * (аналогічно card.mapPersonSearch, але без імпорту всього card.js)
   */
  function mapPerson(item) {
    if (!item) return null;
    var personName = item.name_uk || item.name_en || '';
    var isDeceased = !!(item.deathday && item.deathday !== '');
    var displayName = isDeceased ? '† ' + personName : personName;

    // Визначаємо правильний URL постера
    var isRealTmdb = item.poster_tmdb && item.poster_tmdb.charAt(0) === '/';
    var posterUrl = '';
    if (isRealTmdb) {
      posterUrl = Lampa.TMDB.image('t/p/w300/' + item.poster_tmdb.replace(/^\//, ''));
    } else if (item.poster_kinobaza) {
      posterUrl = 'https://i.kinobaza.com.ua/w300/' + item.poster_kinobaza.replace(/^\//, '');
    } else if (item.poster_tmdb) {
      posterUrl = Lampa.TMDB.image('t/p/w300/' + item.poster_tmdb.replace(/^\//, ''));
    } else {
      posterUrl = './img/img_broken.svg';
    }
    var card = {
      id: item.id,
      slug: item.slug,
      source: 'kinobaza',
      gender: item.gender || 2,
      // ← критично: без gender відкриває full (фільм) в старому line.js та discovery onSelect

      title: displayName,
      original_title: displayName,
      // Не ставимо original_name — уникаємо TV badge
      // Не ставимо release_date — Release module видалить card__age

      poster: posterUrl,
      profile_path: isRealTmdb ? item.poster_tmdb : '',
      media_type: 'person',
      type: 'person'
    };

    // Налаштовуємо відкриття картки актора при Enter
    // Використовуємо кастомний компонент kinobaza_person_detail
    // замість стандартного actor (який використовує Line замість Category)
    card.params = {
      emit: {
        onEnter: function onEnter() {
          Lampa.Activity.push({
            url: '',
            component: 'kinobaza_person_detail',
            source: 'kinobaza',
            slug: card.slug,
            id: card.id,
            page: 1
          });
        }
      }
    };
    return card;
  }

  /**
   * Компонент списку осіб
   */
  function component$1(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        Api.getPersons(object.page || 1, function (json) {
          var items = json.data || [];
          var results = items.map(function (item) {
            return mapPerson(item);
          }).filter(Boolean);
          json.results = results;
          json.total_pages = Math.ceil((json.total || items.length) / 30) || 1;
          Lampa.Utils.addSource(json, 'kinobaza');
          this.build(json);
        }.bind(this), this.empty.bind(this));
      },
      onNext: function onNext(resolve, reject) {
        Api.getPersons(this.object.page, function (json) {
          var items = json.data || [];
          var results = items.map(function (item) {
            return mapPerson(item);
          }).filter(Boolean);
          json.results = results;
          resolve(json);
        }, reject);
      }
    });
    return comp;
  }

  /**
   * Kinobaza Person Detail — TryzubTV tv.js pattern
   * Sync: header + scroll setup. Async: data loading.
   */
  var JOB_NAMES = {
    1: 'Актор',
    2: 'Режисер',
    3: 'Сценарист',
    4: 'Творець',
    5: 'Композитор'
  };
  function component(object) {
    var activity, html, body, scroll, header;
    var cards = [],
      last;
    var page = 1,
      totalPages = 1,
      loading = false;
    var personId = object.id || 0;
    var personSlug = object.slug || '';
    function clearCards() {
      cards.forEach(function (c) {
        c.destroy();
      });
      cards = [];
      last = null;
      body.empty();
    }
    function createCards(list) {
      if (!list || !list.length) return;
      var fragment = document.createDocumentFragment();
      list.forEach(function (data) {
        if (!data) return;
        var card = Lampa.Maker.make('Card', data);
        card.create();
        var render = card.render(true);
        if (!render) return;
        if (data._job_name) {
          var $view = $(render).find('.card__view');
          var $tv = $view.find('.card__type');
          var cls = $tv.length ? 'kb_jobs' : 'kb_jobs kb_jobs--first';
          $view.append('<div class="' + cls + '">' + data._job_name + '</div>');
        }
        $(render).on('hover:focus', function () {
          last = render;
          scroll.update(render, false);
        });
        $(render).on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            component: 'full',
            slug: data.slug,
            id: data.id,
            source: 'kinobaza',
            page: 1
          });
        });
        fragment.appendChild(render);
        cards.push(card);
      });
      body.append(fragment);
      if (cards.length && !last) last = cards[0].render(true);
      Lampa.Layer.visible(scroll.render(true));
      if (Lampa.Controller.enabled().name === 'content') {
        Lampa.Controller.collectionSet(body);
        Lampa.Controller.collectionFocus(last || false, body);
      }
    }
    function loadPage(p) {
      if (loading || p > totalPages) return;
      loading = true;
      if (activity) activity.loader(true);
      Api.getPersonTitles(personId, p, function (json) {
        loading = false;
        if (activity) activity.loader(false);
        totalPages = Math.ceil((json.total || (json.data || []).length) / 30) || 1;
        page = p;
        var items = (json.data || []).map(mapCard).filter(Boolean);
        createCards(items);
      }, function () {
        loading = false;
        if (activity) activity.loader(false);
      });
    }
    function mapCard(item) {
      if (!item) return null;
      var isTV = (item.number_of_episodes || 0) > 0;
      var tvName = item.name_original || item.name_en || '';
      var poster = './img/img_broken.svg';
      if (item.poster_tmdb && item.poster_tmdb.charAt(0) === '/') {
        poster = Lampa.TMDB.image('t/p/w300/' + item.poster_tmdb.replace(/^\//, ''));
      } else if (item.poster_kinobaza) {
        poster = 'https://i.kinobaza.com.ua/w300/' + item.poster_kinobaza.replace(/^\//, '');
      }
      var jobCode = 0;
      if (item.jobs && item.jobs.length) {
        for (var j = 0; j < item.jobs.length; j++) {
          if (item.jobs[j] !== 0) {
            jobCode = item.jobs[j];
            break;
          }
        }
      }
      return {
        id: item.id,
        kinobaza_id: item.id,
        slug: item.slug,
        source: 'kinobaza',
        title: item.name_uk || item.name_en || '',
        original_title: item.name_original || item.name_en || '',
        name: isTV ? tvName : undefined,
        original_name: isTV ? tvName : undefined,
        year: item.year || 0,
        poster: poster,
        poster_path: item.poster_tmdb || item.poster_kinobaza || '',
        backdrop_path: item.backdrop_tmdb || '',
        vote_average: (item.rating || 0) / 10,
        vote: (item.imdb_rating || 0) / 10,
        voting: item.rating || 0,
        release_date: item.released_ua || item.released_en || '',
        number_of_episodes: item.number_of_episodes || 0,
        _job_code: jobCode,
        _job_name: JOB_NAMES[jobCode] || ''
      };
    }
    function fillPersonHeader(data) {
      if (!header || !data) return;

      // header from Template.js() might be jQuery or raw DOM
      var $h = $(header);
      var name = data.name_uk || data.name_en || '-';
      var birthday = data.birthday || '';
      var place = data.birthplace_uk || data.birthplace_en || '';
      $h.find('.person-start__name').text(name);
      if (birthday) {
        var formatted = birthday;
        if (Lampa.Utils && Lampa.Utils.parseTime) formatted = Lampa.Utils.parseTime(birthday).full;
        $h.find('.person-start__tag div').text(formatted);
      } else {
        $h.find('.person-start__tags').remove();
      }
      if (place) $h.find('.person-start__place').text(place);

      // Photo — raw DOM for reliability
      var photoUrl = './img/actor.svg';
      if (data.poster_tmdb && data.poster_tmdb.charAt(0) === '/') {
        photoUrl = Lampa.TMDB.image('t/p/w300/' + data.poster_tmdb.replace(/^\//, ''));
      } else if (data.poster_kinobaza) {
        photoUrl = 'https://i.kinobaza.com.ua/w300/' + data.poster_kinobaza.replace(/^\//, '');
      }
      var img = $h[0].querySelector('.person-start__img');
      if (img) {
        img.src = photoUrl;
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        });
      }

      // Hide subscribe button
      var subBtn = $h[0].querySelector('.button--subscribe');
      if (subBtn) subBtn.style.display = 'none';

      // Info button → biography modal
      var infoBtn = $h[0].querySelector('.button--info');
      if (infoBtn && data.biography) {
        $(infoBtn).on('hover:enter', function () {
          if (typeof Lampa.Modal !== 'undefined' && Lampa.Modal) {
            Lampa.Modal.open({
              title: name,
              size: 'large',
              html: $('<div class="about">' + data.biography.replace(/\n/g, '<br>') + '</div>'),
              onBack: function onBack() {
                Lampa.Modal.close();
                Lampa.Controller.toggle('content');
              }
            });
          }
        });
      }
    }
    function bindScroll() {
      scroll.onScroll = function () {
        Lampa.Layer.visible(scroll.render(true));
      };
      scroll.onEnd = function () {
        if (page < totalPages && !loading) loadPage(page + 1);
      };
    }

    // ============ COMPONENT LIFECYCLE (tv.js pattern) ============

    return {
      create: function create() {
        activity = this.activity;

        // 1. Build sync DOM
        html = $('<div class="kinobaza-person-detail"></div>');
        body = $('<div class="mapping--grid cols--6"></div>');
        scroll = new Lampa.Scroll({
          mask: true,
          over: true,
          step: 250,
          end_ratio: 2
        });

        // Person header — sync build, async fill
        header = Lampa.Template.js('person_start');

        // Add scroll body
        scroll.append(body[0]);

        // Append header (outside scroll) + scroll to root html
        html.append(header, scroll.render());
        scroll.minus(header[0]);
        bindScroll();

        // 2. Async data load
        if (personSlug) {
          Api.getPerson(personSlug, function (data) {
            if (data) fillPersonHeader(data);
          });
        }
        loadPage(1);
        return this.render();
      },
      render: function render(js) {
        return js ? html[0] : html;
      },
      start: function start() {
        // Controller навігації в заголовку особи
        Lampa.Controller.add('person_head', {
          link: this,
          toggle: function toggle() {
            Lampa.Controller.collectionSet(header);
            Lampa.Controller.collectionFocus(false, header);
          },
          up: function up() {
            Lampa.Controller.toggle('head');
          },
          left: function left() {
            Lampa.Controller.toggle('menu');
          },
          down: function down() {
            Lampa.Controller.toggle('content');
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        });

        // Controller сітки карток
        Lampa.Controller.add('content', {
          link: this,
          toggle: function toggle() {
            Lampa.Controller.collectionSet(body);
            Lampa.Controller.collectionFocus(last || false, body);
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('person_head');
          },
          down: function down() {
            if (Navigator.canmove('down')) Navigator.move('down');
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        });
        Lampa.Controller.toggle('content');
      },
      pause: function pause() {},
      destroy: function destroy() {
        clearCards();
        if (scroll) scroll.destroy();
        if (html) html.remove();
        cards = [];
        header = null;
      }
    };
  }

  /**
   * Kinobaza MyPerson — entry point
   * Реєструє компонент списку осіб та переклади
   * Перехоплення штатного меню "Особи" — в listeners/myperson-override.js
   * Паттерн: collections/collections.js, trailers/trailers.js
   */
  function startPlugin$1() {
    window.plugin_kinobaza_myperson_ready = true;

    // ==================== MANIFEST ====================

    Lampa.Manifest.plugins = {
      type: 'video',
      version: '1.0.0',
      name: Lampa.Lang.translate('kinobaza_myperson'),
      component: 'kinobaza_myperson',
      description: 'Список осіб КіноБази (актори, режисери)'
    };

    // ==================== COMPONENT ====================

    Lampa.Component.add('kinobaza_myperson', component$1);
    Lampa.Component.add('kinobaza_person_detail', component);

    // ==================== TRANSLATIONS ====================

    Lampa.Lang.add({
      kinobaza_myperson: {
        uk: 'Особи',
        ru: 'Личности',
        en: 'People',
        be: 'Асобы'
      }
    });
  }

  // ==================== GUARD ====================

  if (!window.plugin_kinobaza_myperson_ready) {
    startPlugin$1();
  }

  /**
   * Kinobaza Discover — дані фільтрів
   *
   * Патерн: content_filter/data.js (lampa-source/src/interaction/content_filter/data.js)
   * Адаптовано для API КіноБази:
   *   - type: 1 (фільм), 2 (серіал)
   *   - rating: рейтинг КіноБази (0-10)
   *   - imdb_rating: рейтинг IMDb (0-10)
   *   - year: рік/діапазон (ys/ye)
   *   - genres: масив ID жанрів КіноБази (genres[])
   *   - translated: has_ukr_audio / has_ukr_subtitles
   *   - sort: order_by
   */

  var data = {};
  data.type = {
    title: 'Тип',
    items: [{
      title: 'Фільм',
      selected: true,
      type: 1
    }, {
      title: 'Серіал',
      type: 2
    }]
  };
  data.rating = {
    title: 'Рейтинг КіноБази',
    items: [{
      title: 'Будь-який'
    }, {
      title: 'Від 8',
      start: 8
    }, {
      title: 'Від 7',
      start: 7
    }, {
      title: 'Від 6',
      start: 6
    }, {
      title: 'Від 5',
      start: 5
    }, {
      title: '1 — 3',
      range: '1-3'
    }, {
      title: '3 — 5',
      range: '3-5'
    }, {
      title: '5 — 7',
      range: '5-7'
    }, {
      title: '7 — 9',
      range: '7-9'
    }, {
      title: '9 — 10',
      range: '9-10'
    }]
  };
  data.imdb_rating = {
    title: 'Рейтинг IMDb',
    items: [{
      title: 'Будь-який'
    }, {
      title: 'Від 8',
      start: 8
    }, {
      title: 'Від 7',
      start: 7
    }, {
      title: 'Від 6',
      start: 6
    }, {
      title: 'Від 5',
      start: 5
    }, {
      title: '1 — 3',
      range: '1-3'
    }, {
      title: '3 — 5',
      range: '3-5'
    }, {
      title: '5 — 7',
      range: '5-7'
    }, {
      title: '7 — 9',
      range: '7-9'
    }, {
      title: '9 — 10',
      range: '9-10'
    }]
  };
  data.year = {
    title: 'Рік',
    items: [{
      title: 'Будь-який',
      any: true
    }]
  };

  // Динамічні роки — точно як в content_filter/data.js
  var y = new Date().getFullYear();
  var i = 100;
  for (var a = 0; a < 5; a++) {
    data.year.items.push({
      title: y - a
    });
  }
  while (i -= 5) {
    var end = y - (99 - i);
    data.year.items.push({
      title: end + 5 + '-' + end
    });
  }
  data.genres = {
    title: 'Жанри',
    items: [{
      id: 1,
      title: 'Бойовик',
      checkbox: true
    }, {
      id: 2,
      title: 'Пригоди',
      checkbox: true
    }, {
      id: 3,
      title: 'Фентезі',
      checkbox: true
    }, {
      id: 4,
      title: 'Жахи',
      checkbox: true
    }, {
      id: 5,
      title: 'Трилер',
      checkbox: true
    }, {
      id: 6,
      title: 'Комедія',
      checkbox: true
    }, {
      id: 7,
      title: 'Драма',
      checkbox: true
    }, {
      id: 8,
      title: 'Біографія',
      checkbox: true
    }, {
      id: 9,
      title: 'Історичний',
      checkbox: true
    }, {
      id: 10,
      title: 'Кримінальний',
      checkbox: true
    }, {
      id: 11,
      title: 'Мелодрама',
      checkbox: true
    }, {
      id: 13,
      title: 'Сімейний',
      checkbox: true
    }, {
      id: 14,
      title: 'Фантастика',
      checkbox: true
    }, {
      id: 15,
      title: 'Військовий',
      checkbox: true
    }, {
      id: 20,
      title: 'Документальний',
      checkbox: true
    }]
  };
  data.translated = {
    title: 'Переклад',
    items: [{
      title: 'Будь-який'
    }, {
      title: 'З укр. аудіо',
      code: 'has_ukr_audio'
    }, {
      title: 'З укр. субтитрами',
      code: 'has_ukr_subtitles'
    }]
  };
  data.sort = {
    title: 'Сортування',
    items: [{
      title: 'Будь-який'
    }, {
      title: 'Популярністю',
      order: 'popularity'
    }, {
      title: "Новинки (дата прем'єри)",
      order: 'date_desc'
    }, {
      title: 'Рейтинг КіноБази',
      order: 'rating_desc'
    }, {
      title: 'Рейтинг IMDb',
      order: 'imdb_rating_desc'
    }, {
      title: 'Голоси КіноБази',
      order: 'votes_desc'
    }, {
      title: 'Голоси IMDb',
      order: 'imdb_votes_desc'
    }]
  };

  /**
   * Kinobaza Discover — UI фільтр-меню
   *
   * Патерн: content_filter/menu.js (lampa-source/src/interaction/content_filter/menu.js)
   * Адаптовано для API КіноБази:
   *   - queryForKinobaza() будує URL з params для /titles
   *   - Всі фільтри відповідають kinobaza API (type, rating, imdb_rating, ys/ye, genres[], translated, order_by)
   *   - Типи контенту: ТІЛЬКИ Фільм (type=1) та Серіал (type=2)
   */

  /**
   * Вибирає елемент (single-select)
   * @param {Array} where - масив елементів
   * @param {Object} a - вибраний елемент
   */
  function select(where, a) {
    where.forEach(function (element) {
      element.selected = false;
    });
    a.selected = true;
  }

  /**
   * Оновлює підзаголовок групи фільтрів
   * @param {Object} where - об'єкт з масивом items
   */
  function selected(where) {
    var titles = [];
    where.items.forEach(function (a) {
      if (a.selected || a.checked) titles.push(a.title);
    });
    where.subtitle = titles.length ? titles.join(', ') : Lampa.Lang.translate('nochoice');
  }

  /**
   * Головне меню фільтрації
   */
  function main() {
    for (var i in data) selected(data[i]);
    if (!Lampa.Select || typeof Lampa.Select.show !== 'function') return;
    var items = [{
      title: Lampa.Lang.translate('search_start'),
      search: true
    }, data.type, data.rating, data.imdb_rating, data.genres, data.year, data.translated, data.sort];
    Lampa.Select.show({
      title: Lampa.Lang.translate('title_filter'),
      items: items,
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      },
      onSelect: function onSelect(a) {
        if (a.search) search();else submenu(a);
      }
    });
  }

  /**
   * Підменю для конкретного фільтру
   * @param {Object} item - об'єкт елемента (data.type, data.rating, etc.)
   */
  function submenu(item) {
    if (!Lampa.Select || typeof Lampa.Select.show !== 'function') return;
    Lampa.Select.show({
      title: item.title,
      items: item.items,
      onBack: main,
      onSelect: function onSelect(a) {
        select(item.items, a);
        main();
      }
    });
  }

  /**
   * Будує URL-рядок для API КіноБази з обраних фільтрів
   *
   * Підтримує:
   *   type, rating/rating_max, imdb_rating/imdb_rating_max,
   *   ys/ye (роки), genres[] (жанри), translated, order_by
   *
   * @returns {string} - URL для Lampa.Activity.push (напр. 'titles?type=1&rating=7&genres[]=1&genres[]=2&ys=2020&ye=2025')
   */
  function queryForKinobaza() {
    var query = [];
    var genres = [];

    // ===== TYPE =====
    var typeItem = data.type.items.find(function (s) {
      return s.selected;
    });
    if (typeItem && typeItem.type) {
      query.push('type=' + typeItem.type);
    }

    // ===== RATING (КіноБаза) =====
    data.rating.items.forEach(function (a) {
      if (a.selected) {
        if (a.start) {
          query.push('rating=' + a.start);
        } else if (a.range) {
          var rParts = a.range.split('-');
          query.push('rating=' + rParts[0]);
          query.push('rating_max=' + rParts[1]);
        }
      }
    });

    // ===== IMDB RATING =====
    data.imdb_rating.items.forEach(function (a) {
      if (a.selected) {
        if (a.start) {
          query.push('imdb_rating=' + a.start);
        } else if (a.range) {
          var iParts = a.range.split('-');
          query.push('imdb_rating=' + iParts[0]);
          query.push('imdb_rating_max=' + iParts[1]);
        }
      }
    });

    // ===== YEAR =====
    data.year.items.forEach(function (a) {
      if (a.selected && !a.any) {
        var titleStr = String(a.title);
        if (titleStr.indexOf('-') >= 0) {
          // Діапазон: "2027-2022" → ys=2022, ye=2027
          var yParts = titleStr.split('-');
          query.push('ys=' + yParts[1]);
          query.push('ye=' + yParts[0]);
        } else {
          // Конкретний рік
          query.push('ys=' + titleStr);
          query.push('ye=' + titleStr);
        }
      }
    });

    // ===== GENRES (checkbox) =====
    data.genres.items.forEach(function (a) {
      if (a.checked) {
        genres.push(a.id);
      }
    });
    if (genres.length) {
      genres.forEach(function (id) {
        query.push('genres[]=' + id);
      });
    }

    // ===== TRANSLATED =====
    data.translated.items.forEach(function (a) {
      if (a.selected && a.code) {
        query.push('translated=' + a.code);
      }
    });

    // ===== SORT =====
    data.sort.items.forEach(function (a) {
      if (a.selected && a.order) {
        query.push('order_by=' + a.order);
      }
    });
    return 'titles?' + query.join('&');
  }

  /**
   * Запуск пошуку — конвертує вибір в Activity.push
   */
  function search() {
    Lampa.Controller.toggle('content');
    var query = queryForKinobaza();
    var activity = {
      url: query,
      title: Lampa.Lang.translate('title_filter'),
      component: 'category_full',
      source: 'kinobaza',
      card_type: true,
      page: 1
    };
    var activeObj = Lampa.Activity.active();

    // Якщо вже на category_full — замінити (поведінка як в оригінальному content_filter)
    if (activeObj && activeObj.component === 'category_full' && activeObj.url && activeObj.url.indexOf('titles?') === 0) {
      Lampa.Activity.replace(activity, true);
    } else {
      Lampa.Activity.push(activity);
    }
  }

  /**
   * Показати фільтр
   */
  function show() {
    main();
  }
  var menu = {
    show: show
  };

  /**
   * Kinobaza Discover — реєстрація listener
   *
   * Перехоплює клік "filter" в меню Lampa (Lampa.Listener.send('menu', {type: 'action', action: 'filter'}))
   * і замінює стандартний TMDB/CUB фільтр на власний з параметрами КіноБази.
   *
   * Патерн: listeners/anime-override.js, listeners/cartoon-override.js
   *
   * Flow:
   *   1. Lampa.Listener.follow('menu', ...) перехоплює action === 'filter'
   *   2. Перевіряє Storage.field('source') === 'kinobaza'
   *   3. e.abort() — запобігає стандартному Filter.show()
   *   4. menu.show() — показує Select.show() з фільтрами КіноБази
   */
  var registered = false;

  /**
   * Реєструє listener на menu action
   */
  function register() {
    if (registered) return;
    registered = true;
    try {
      if (!Lampa.Listener) return;
      Lampa.Listener.follow('menu', function (e) {
        try {
          // Тільки action події
          if (e.type !== 'action') return;
          if (e.action !== 'filter') return;

          // Перевіряємо чи обрано kinobaza
          var currentSource = Lampa.Storage && typeof Lampa.Storage.field === 'function' ? Lampa.Storage.field('source') : '';
          if (currentSource !== 'kinobaza') return;

          // Запобігаємо стандартній поведінці Lampa Filter
          e.abort();

          // Показуємо власне фільтр-меню КіноБази
          if (menu && typeof menu.show === 'function') {
            menu.show();
          }
        } catch (err) {
          // мовчки ігноруємо помилки в listener
        }
      });
    } catch (err) {
      // мовчки ігноруємо
    }
  }

  /**
   * Kinobaza Discover Filter — entry point
   *
   * Самовиконуваний модуль з guard патерном (window.kinobaza_discover_ready).
   * При імпорті в kinobaza.js реєструє listener на menu action "filter"
   * для показу власного фільтр-меню КіноБази.
   *
   * Патерн: trailers/trailers.js, releases/releases.js, collections/collections.js
   * (self-executing IIFE + guard + register)
   *
   * Використовує:
   *   - discover/index.js — реєстрація listener
   *   - discover/data.js   — дані фільтрів
   *   - discover/menu.js   — UI меню (Select.show)
   *   - category_full      — компонент для результатів (через source: 'kinobaza')
   */
  (function () {

    if (window.kinobaza_discover_ready) return;
    window.kinobaza_discover_ready = true;
    register();
  })();

  /**
   * Додає 'kinobaza' в селектор джерела (source)
   */
  function registerSourceSelector() {
    try {
      if (!Lampa.Params || typeof Lampa.Params.select !== 'function') return;
      var baseValues = Lampa.Params.values && _typeof(Lampa.Params.values.source) === 'object' ? Lampa.Params.values.source : {
        tmdb: 'TMDB',
        cub: 'CUB'
      };
      var sourceValues = Object.assign({}, baseValues, {
        kinobaza: 'КіноБаза'
      });
      var paramsDefault = Lampa.Params.defaults && Lampa.Params.defaults.source ? Lampa.Params.defaults.source : 'tmdb';
      var defaultValue = sourceValues[paramsDefault] ? paramsDefault : 'tmdb';
      var storedSource = Lampa.Storage && typeof Lampa.Storage.field === 'function' ? Lampa.Storage.field('source') : '';
      var safeDefault = storedSource && sourceValues[storedSource] ? storedSource : defaultValue;
      Lampa.Params.select('source', sourceValues, safeDefault);
    } catch (error) {
      // мовчки ігноруємо помилки реєстрації
    }
  }

  /**
   * Реєструє Manifest плагіна
   */
  function registerManifest() {
    try {
      if (!Lampa.Manifest) return;
      var manifest = {
        type: 'video',
        version: '0.4',
        name: Lampa.Lang.translate('kinobaza_title') || 'КіноБаза',
        component: 'kinobaza',
        description: 'Контент-провайдер КіноБаза (kinobaza.com.ua)'
      };
      Lampa.Manifest.plugins = manifest;
    } catch (error) {
      // мовчки ігноруємо
    }
  }

  /**
   * Завантажує CSS стилі плагіна через Lampa.Template
   */
  function loadStyles() {
    if (!$('#kinobaza_style').length) {
      Lampa.Template.add('kinobaza_css', "\n            <style id=\"kinobaza_style\">\n            @charset 'UTF-8';.full-start__rate.rate--metacritic>div:first-child{background:#6c3 !important;color:#000;-webkit-border-radius:.3em;border-radius:.3em;font-weight:700;padding:0 .4em}.full-start__rate.rate--rotten>div:first-child{background:#c33 !important;color:#000;-webkit-border-radius:.3em;border-radius:.3em;font-weight:700;padding:0 .4em}.full-descr__info.full--releases{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;margin-top:1em}.full-descr__info.full--releases .full-descr__info-name{font-size:1.1em;margin-bottom:.5em}.full-descr__info.full--releases .full-descr__info-body{font-size:1em;line-height:1.6}.full-persons--dub .card{border:solid .2em rgba(102,204,102,0.3)}.full-persons--dub .card.focus{border-color:rgba(102,204,102,0.8)}.full-discuss--reviews .discuss-item{border-left:solid .2em #fc3}.full-discuss--comments .discuss-item{border-left:solid .2em #6cf}.kb_jobs{position:absolute;top:1.4em;left:2.5em;padding:.35em .55em;background:rgba(0,0,0,0.75);color:#fff;font-size:.75em;-webkit-border-radius:.3em;border-radius:.3em;z-index:1;pointer-events:none;white-space:nowrap}.kb_jobs--first{left:-0.8em}.kinobaza-single-network{padding:.2em .3em}.kinobaza-single-network.focus{background-color:rgba(0,0,0,0.45) !important;-webkit-box-shadow:0 0 0 .2em rgba(255,255,255,0.65);box-shadow:0 0 0 .2em rgba(255,255,255,0.65)}.kinobaza-network-logo-wrap{display:inline-block;width:60px;height:1.2em;overflow:hidden;vertical-align:middle}.kinobaza-network-logo{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;vertical-align:top}.items-line--type-trailers .card--wide{width:34.3em}.items-line--type-trailers .card--wide .card__view{padding-bottom:56%;background:#111}.items-line--type-trailers .card--wide .card__img{-o-object-fit:cover;object-fit:cover;background:#222}.items-line--type-networks .card--wide{width:34.3em;-webkit-border-radius:.6em;border-radius:.6em;overflow:hidden}.items-line--type-networks .card--wide .card__view{padding-bottom:56%;background:transparent;-webkit-border-radius:0;border-radius:0}.items-line--type-networks .card--wide.focus .card__view::after,.items-line--type-networks .card--wide.hover .card__view::after{-webkit-border-radius:.6em;border-radius:.6em}.items-line--type-networks .card--wide .card__img{width:100% !important;height:100% !important;-o-object-fit:contain !important;object-fit:contain !important;padding:1.5em;background:rgba(255,255,255,0.04);-webkit-border-radius:0;border-radius:0}.items-line--type-networks .card--wide .card__promo{display:none !important}.items-line--type-networks .card--wide .card__title{display:none}\n            </style>\n        ");
      $('body').append(Lampa.Template.get('kinobaza_css', {}, true));
    }
  }

  /**
   * Міграція старих закладок Kinobaza (якщо користувач вже мав збережені картки
   * з числовим Kinobaza ID як основним id до впровадження TMDB ID)
   */
  function migrateOldBookmarks() {
    try {
      if (!Lampa.Storage || typeof Lampa.Storage.get !== 'function') return;
      var favorite = Lampa.Storage.get('favorite', '{}');
      var migrated = false;
      if (favorite.card && Array.isArray(favorite.card)) {
        favorite.card.forEach(function (card) {
          // Старі картки: source === 'kinobaza', id числовий, немає kinobaza_id
          if (card.source === 'kinobaza' && typeof card.id === 'number' && !card.kinobaza_id) {
            card.kinobaza_id = card.id;
            card.needsEnrichment = true;
            // Не змінюємо card.id — нехай залишається Kinobaza ID,
            // enrichCard оновить його на TMDB ID при першому збереженні
            migrated = true;
          }
        });
      }
      if (migrated) {
        Lampa.Storage.set('favorite', favorite);
        console.log('Kinobaza', 'migrated old bookmarks');
      }
    } catch (e) {
      // мовчки ігноруємо помилки міграції
    }
  }

  /**
   * Головна функція запуску плагіна
   */
  function startPlugin() {
    window.plugin_kinobaza_ready = true;

    // Міграція старих закладок
    migrateOldBookmarks();

    // 1. Реєстрація source провайдера
    if (Lampa.Api) {
      Lampa.Api.sources = Lampa.Api.sources || {};
      Lampa.Api.sources.kinobaza = source$1;

      // Ініціалізація слухача закладок для збагачення карток
      if (source$1 && typeof source$1.initBookmarksListener === 'function') {
        source$1.initBookmarksListener();
      }
    }

    // 2. Ініціалізація Lines system (це гарантує що всі line функції будуть в збірці)
    if (typeof linesInit === 'function') {
      linesInit.init();
    } else if (linesInit && typeof linesInit.init === 'function') {
      linesInit.init();
    }

    // 2.5. Розширити card_fields для збереження Kinobaza-специфічних полів
    try {
      if (Lampa.Utils && Lampa.Utils.card_fields) {
        var kbFields = ['kinobaza_id', 'slug', 'themoviedb_id', 'needsEnrichment'];
        kbFields.forEach(function (field) {
          if (Lampa.Utils.card_fields.indexOf(field) === -1) {
            Lampa.Utils.card_fields.push(field);
          }
        });
      }
    } catch (e) {
      // мовчки ігноруємо
    }

    // 3. Додати до вибору джерела в налаштуваннях
    registerSourceSelector();

    // 4. Зареєструвати переклади
    storage.registerTranslations();

    // 5. Реєстрація Manifest
    registerManifest();

    // 6. Реєстрація listener для вставки акторів дубляжу через DOM
    registerFullListener();

    // 7. Реєстрація listener для DOM-інжекції в шапку картки (рейтинги, релізи, MPAA)
    registerFullStartListener();

    // 8. Реєстрація override для аніме меню (обходить хардкод Lampa: action == 'anime' ? 'cub' : ...)
    registerAnimeOverride();

    // 9. Реєстрація override для мультфільмів меню (обходить хардкод Lampa: cartoon -> movie + genres: 16)
    registerCartoonOverride();

    // 9. Реєстрація override для меню "Особи"
    registerMyPersonOverride();

    // 9.5. Реєстрація override для Lampa.Api.full — перехоплення відкриття карток
    // Коли активна КіноБаза, пробує завантажити картку через Kinobaza API
    // навіть якщо вона збережена з source=tmdb
    registerSourceOverride();

    // 10. Реєстрація ContentRows інтеграції для всіх категорій
    registerContentRows();

    // 11. Завантаження стилів
    loadStyles();
  }

  // ============== GUARD ==============

  if (!window.plugin_kinobaza_ready) {
    startPlugin();
  }

})();
