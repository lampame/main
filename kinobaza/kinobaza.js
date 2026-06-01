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
  var BASE_URL$3 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$4 = new Lampa.Reguest();

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
  function addParam(u, params) {
    return u + (/\?/.test(u) ? '&' : '?') + params;
  }

  /**
   * Будує повний URL з query параметрами
   * @param {string} path
   * @param {object} params
   * @returns {string}
   */
  function buildUrl$9(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var u = BASE_URL$3 + path;
    var _loop = function _loop(key) {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        if (Array.isArray(params[key])) {
          params[key].forEach(function (v) {
            u = addParam(u, key + '[]=' + encodeURIComponent(v));
          });
        } else {
          u = addParam(u, key + '=' + encodeURIComponent(params[key]));
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
  function getHeaders$1() {
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
  function get(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var resolve = arguments.length > 2 ? arguments[2] : undefined;
    var reject = arguments.length > 3 ? arguments[3] : undefined;
    var u = buildUrl$9(path, params);
    network$4.silent(u, function (json) {
      resolve(json);
    }, function (a, c) {
      if (reject) reject(a, c);
    }, false, {
      headers: getHeaders$1()
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
      get('/titles', params, resolve, reject);
    });
  }

  /**
   * GET /titles/{slug} — деталі тайтлу
   * @param {string} slug
   * @returns {Promise<k6.c0>}
   */
  function getTitle(slug) {
    return new Promise(function (resolve, reject) {
      get('/titles/' + encodeURIComponent(slug), {
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
      get('/titles/' + encodeURIComponent(titleSlug) + '/episodes', {
        season: seasonNumber
      }, resolve, reject);
    });
  }

  /**
   * GET /persons/{slug} — деталі персони
   * @param {string} slug
   * @returns {Promise<k6.p>}
   */
  function getPerson(slug) {
    return new Promise(function (resolve, reject) {
      get('/persons/' + encodeURIComponent(slug), {}, resolve, reject);
    });
  }

  /**
   * GET /titles?q={query} — пошук тайтлів
   * @param {string} query
   * @returns {Promise<{total: number, data: [k6.d0]}>}
   */
  function searchTitles(query) {
    return new Promise(function (resolve, reject) {
      get('/titles', {
        q: query
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
      get('/lists', params, resolve, reject);
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
      get('/comments', {
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
      get('/reviews', {
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
      get('/persons', {
        title_id: titleId,
        type: 10
      }, resolve, reject);
    });
  }

  /**
   * Очистити pending запити
   */
  function clear$4() {
    network$4.clear();
  }
  var api$1 = {
    cdn: cdn,
    getTitles: getTitles,
    getTitle: getTitle,
    getEpisodes: getEpisodes,
    getPerson: getPerson,
    searchTitles: searchTitles,
    getLists: getLists,
    getComments: getComments,
    getReviews: getReviews,
    getDubPersons: getDubPersons,
    clear: clear$4,
    BASE_URL: BASE_URL$3
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
    if (tmdbPath) {
      return Lampa.TMDB.image('t/p/' + size + '/' + tmdbPath.replace(/^\//, ''));
    }
    if (kbzPath) {
      return api$1.cdn(kbzPath, size);
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
      networks: mapSimpleList(data.networks),
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
  function mapPerson(data) {
    if (!data) return {};
    var posterUrl = resolveImage$1(data.poster_tmdb, data.poster_kinobaza, 'w300');
    var profileRaw = data.poster_tmdb || data.poster_kinobaza || '';
    return {
      id: data.id,
      slug: data.slug,
      source: SOURCE,
      imdb_id: data.imdb_id || '',
      name: data.name_uk || data.name_en || '',
      original_name: data.name_en || '',
      biography: data.biography || '',
      poster: posterUrl,
      profile_path: profileRaw,
      birthday: data.birthday || '',
      deathday: data.deathday || '',
      age: data.age || 0,
      height: data.height || 0,
      zodiac: data.zodiac || '',
      birthplace: data.birthplace_uk || data.birthplace_en || '',
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
  var card = {
    mapOne: mapOne,
    mapList: mapList,
    mapFull: mapFull,
    mapPerson: mapPerson,
    mapGenres: mapGenres,
    mapPersons: mapPersons,
    mapCrew: mapCrew,
    mapEpisodes: mapEpisodes,
    SOURCE: SOURCE
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
  function main(params, oncomplite, onerror) {
    var parts_limit = 7;
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
  function search(params, oncomplite) {
    api$1.searchTitles(params.query).then(function (json) {
      var items = [];
      if (json.data && json.data.length) {
        var mapped = card.mapList(json.data);
        json.results = mapped;
        json = Lampa.Utils.addSource(json, 'kinobaza');
        items.push({
          title: Lampa.Lang.translate('kinobaza_search'),
          type: 'movie',
          results: mapped
        });
      }
      oncomplite(items);
    })["catch"](function () {
      oncomplite([]);
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
      return {
        id: p.id,
        slug: p.slug || '',
        name: p.name_uk || p.name_en || '',
        character: p.character || '',
        profile_path: profileRaw,
        poster: p.poster_tmdb ? Lampa.TMDB.image('t/p/w300/' + p.poster_tmdb.replace(/^\//, '')) : p.poster_kinobaza ? api$1.cdn(p.poster_kinobaza, 'w300') : './img/img_broken.svg',
        source: source
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
    if (params.slug) {
      api$1.getPerson(params.slug).then(function (data) {
        oncomplite(card.mapPerson(data));
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
          params[kv[0]] = decodeURIComponent(kv[1]);
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
  function menu(params, oncomplite) {
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
        api$1.searchTitles(params.query).then(function (data) {
          var mapped = card.mapList(data.data || []);
          var wrapper = {
            results: mapped
          };
          Lampa.Utils.addSource(wrapper, 'kinobaza');
          oncomplite([{
            title: Lampa.Lang.translate('kinobaza_search') || 'Результати пошуку',
            type: 'movie',
            results: mapped
          }]);
        })["catch"](function () {
          oncomplite([]);
        });
      },
      params: {
        save: true
      },
      onSelect: function onSelect(params, close) {
        close();
        Lampa.Activity.push({
          url: '',
          component: 'full',
          slug: params.element.slug,
          id: params.element.id,
          method: params.element.original_name ? 'tv' : 'movie',
          source: source,
          card: params.element,
          page: 1
        });
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
    main: main,
    category: category,
    full: full,
    search: search,
    menu: menu,
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
    cartoons: sourceCartoons
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
    getCategoryLines: getCategoryLines
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
          api$1.getReviews(movie.id).then(function (reviewsData) {
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
            api$1.getComments(movie.id, 7).then(function (commentsData) {
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
          api$1.getDubPersons(movie.id).then(function (dubData) {
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
                source: 'kinobaza'
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
  var registered$3 = false;

  /**
   * Реєструє anime override listener
   * Додає kinobaza_anime source та перехоплює menu action для аніме
   */
  function registerAnimeOverride() {
    if (registered$3) return;
    registered$3 = true;
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
  var registered$2 = false;

  /**
   * Реєструє cartoon override listener
   * Додає kinobaza_cartoons source та перехоплює menu action для мультфільмів
   */
  function registerCartoonOverride() {
    if (registered$2) return;
    registered$2 = true;
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

  var registered$1 = false;

  /**
   * Реєструє ContentRows integration
   */
  function registerContentRows() {
    if (registered$1) return;
    registered$1 = true;

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

  var registered = false;
  var origFull = null;

  /**
   * Реєструє override для Lampa.Api.full
   * Коли активна КіноБаза — пробує завантажити картку через Kinobaza API
   * за slug або imdb_id. Якщо не знайдено — fallback на оригінальний source.
   */
  function registerSourceOverride() {
    if (registered) return;
    registered = true;
    try {
      if (!Lampa.Api || !Lampa.Api.sources || !Lampa.Api.sources.kinobaza) return;
      origFull = Lampa.Api.full;
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
   * Kinobaza Trailers API
   * Endpoint: GET /api/v1/trailers
   * Пагінація: курсор (after)
   * Без автентифікації
   */

  var BASE_URL$2 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$2 = new Lampa.Reguest();

  /**
   * Будує повний URL з query параметрами
   * @param {string} path
   * @param {object} params
   * @returns {string}
   */
  function buildUrl$1(path, params) {
    var u = BASE_URL$2 + path;
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
    var u = buildUrl$1('/trailers', params);
    network$2.silent(u, function (json) {
      if (resolve) resolve(json);
    }, function (a, c) {
      if (reject) reject(a, c);
    });
  }

  /**
   * Очистити pending запити
   */
  function clear$2() {
    network$2.clear();
  }
  var api = {
    getTrailers: getTrailers,
    clear: clear$2,
    BASE_URL: BASE_URL$2
  };

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
        _this.card.addClass('card--loaded');
      };
      this.img.onerror = function () {
        _this.img.src = './img/img_broken.svg';
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
      this.img.onerror = function () {};
      this.img.onload = function () {};
      this.img.src = '';
      this.card.remove();
      this.card = null;
      this.img = null;
      this.parentData = null;
    };
    this.visible = function () {
      if (this.visibled) return;
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
  function startPlugin$3() {
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

  if (!window.plugin_kinobaza_trailers_ready) startPlugin$3();

  /**
   * Kinobaza Releases API
   * Цифрові релізи (itunes, netflix, rakuten, sweet, megogo, primevideo, тощо)
   * 
   * Ендпоінт: GET /titles?order_by=date_desc&{platform}_audio=1&{platform}_subtitles=1&page={page}
   * Без автентифікації
   * Відповідь: { total: number, data: [k6.d0] }
   */

  var BASE_URL$1 = 'https://apx.lme.isroot.in/destination/https://kinobaza.com.ua/api/v1';
  var network$1 = new Lampa.Reguest();

  /**
   * Будує URL з query параметрами
   * @param {string} path
   * @param {object} params
   * @returns {string}
   */
  function buildUrl(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var u = BASE_URL$1 + path;
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
    var url = buildUrl('/titles', params);
    network$1.silent(url, function (json) {
      resolve(json);
    }, function (a, c) {
      if (reject) reject(a, c);
    });
  }

  /**
   * Очистити мережеві запити
   */
  function clear$1() {
    network$1.clear();
  }
  var releasesApi = {
    getReleases: getReleases,
    clear: clear$1
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
  function component$2(object) {
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
  function startPlugin$2() {
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

    Lampa.Component.add('kinobaza_releases', component$2);

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
    startPlugin$2();
  }

  /**
   * Kinobaza Collections API
   * Endpoints:
   *   GET /lists?order_by=date_added_desc&type=1&page={page}
   *   GET /titles?list_type=13&list_id={id}&page={page}
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
   * GET /lists?order_by=date_added_desc&type=1&page={page}
   * Список колекцій (списків) КіноБази
   * @param {number} page
   * @param {function} resolve
   * @param {function} reject
   */
  function getCollections(page, resolve, reject) {
    var url = BASE_URL + '/lists?order_by=date_added_desc&type=1&page=' + (page || 1);
    network.silent(url, function (json) {
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
    var url = BASE_URL + '/titles?list_type=13&list_id=' + listId + '&page=' + (page || 1);
    network.silent(url, function (json) {
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
   * Очистити всі pending запити
   */
  function clear() {
    network.clear();
  }
  var Api = {
    getCollections: getCollections,
    getCollectionItems: getCollectionItems,
    clear: clear
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
        _this.item[0].classList.add('card--loaded');
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
      this.img.attr('src', resolveImage(data.poster_tmdb, data.poster_kinobaza, 'w300'));
      if (this.onVisible) this.onVisible(this.item[0], data);
    };

    /**
     * destroy — очищення
     */
    this.destroy = function () {
      this.img.off('load error');
      this.img.attr('src', '');
      remove(this.item[0]);
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
  function component$1(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        Api.getCollections(object.page || 1, function (data) {
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
        Api.getCollections(this.object.page, function (data) {
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
  function component(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        if (!object.url) {
          this.empty();
          return;
        }
        Api.getCollectionItems(object.url, object.page || 1, function (data) {
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
        Api.getCollectionItems(object.url, this.object.page, function (data) {
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
  function startPlugin$1() {
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

    Lampa.Component.add('kinobaza_collections', component$1);
    Lampa.Component.add('kinobaza_collection_view', component);

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
    startPlugin$1();
  }

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
        version: '0.1a',
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
   * Завантажує CSS стилі плагіна
   */
  function loadStyles() {
    if (!document.getElementById('kinobaza-styles')) {
      var link = document.createElement('link');
      link.id = 'kinobaza-styles';
      link.rel = 'stylesheet';
      link.href = 'plugins/kinobaza/css/kinobaza.css';
      document.head.appendChild(link);
    }
  }

  /**
   * Додає inline-стилі для рейтингів (якщо CSS ще не завантажився)
   */
  function loadInlineStyles() {
    if (!document.getElementById('kinobaza-rates-style')) {
      var style = document.createElement('style');
      style.id = 'kinobaza-rates-style';
      style.textContent = '.full-start__rate.rate--metacritic>div:first-child{background:#6c3!important}.full-start__rate.rate--rotten>div:first-child{background:#c33!important}';
      document.head.appendChild(style);
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

    // 5.5. Додати кнопку в головне меню (замість deprecated onMain)
    try {
      if (Lampa.Menu && typeof Lampa.Menu.addButton === 'function') {
        var menuBtn = Lampa.Menu.addButton('<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>', Lampa.Lang.translate('kinobaza_title') || 'КіноБаза', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('kinobaza_title') || 'КіноБаза',
            component: 'category_full',
            source: 'kinobaza',
            page: 1
          });
        });
        if (menuBtn && typeof menuBtn.addClass === 'function') {
          menuBtn.addClass('kinobaza-menu-btn');
        }
      }
    } catch (e) {
      // мовчки ігноруємо помилки додавання кнопки
    }

    // 6. Реєстрація listener для вставки акторів дубляжу через DOM
    registerFullListener();

    // 7. Реєстрація listener для DOM-інжекції в шапку картки (рейтинги, релізи, MPAA)
    registerFullStartListener();

    // 8. Реєстрація override для аніме меню (обходить хардкод Lampa: action == 'anime' ? 'cub' : ...)
    registerAnimeOverride();

    // 9. Реєстрація override для мультфільмів меню (обходить хардкод Lampa: cartoon -> movie + genres: 16)
    registerCartoonOverride();

    // 9.5. Реєстрація override для Lampa.Api.full — перехоплення відкриття карток
    // Коли активна КіноБаза, пробує завантажити картку через Kinobaza API
    // навіть якщо вона збережена з source=tmdb
    registerSourceOverride();

    // 10. Реєстрація ContentRows інтеграції для всіх категорій
    registerContentRows();

    // 11. Завантаження стилів
    loadStyles();
    loadInlineStyles();
  }

  // ============== GUARD ==============

  if (!window.plugin_kinobaza_ready) {
    startPlugin();
  }

})();
