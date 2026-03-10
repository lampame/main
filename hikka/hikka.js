(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var API_BASE = 'https://apx.lme.isroot.in/hikka/';
  var ENDPOINTS = {
    ANIME: API_BASE + 'anime',
    GENRES: API_BASE + 'genres',
    SCHEDULE_ANIME: function SCHEDULE_ANIME() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      return API_BASE + 'schedule/anime?page=' + page + '&size=' + size;
    },
    DETAILS: function DETAILS(slug) {
      return API_BASE + 'anime/' + slug;
    },
    EPISODES: function EPISODES(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return API_BASE + 'anime/' + encodeURIComponent(slug) + '/episodes?page=' + page + '&size=' + size;
    },
    COMMENTS: function COMMENTS(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return API_BASE + 'comments/anime/' + encodeURIComponent(slug) + '/list?page=' + page + '&size=' + size;
    },
    CHARACTERS: function CHARACTERS(slug) {
      return API_BASE + 'anime/' + slug + '/characters';
    },
    STAFF: function STAFF(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return API_BASE + 'anime/' + encodeURIComponent(slug) + '/staff?page=' + page + '&size=' + size;
    },
    CHARACTER_VOICES: function CHARACTER_VOICES(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return API_BASE + 'characters/' + encodeURIComponent(slug) + '/voices?page=' + page + '&size=' + size;
    },
    PEOPLE: function PEOPLE(slug) {
      return API_BASE + 'people/' + encodeURIComponent(slug);
    },
    PEOPLE_ANIME: function PEOPLE_ANIME(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return API_BASE + 'people/' + encodeURIComponent(slug) + '/anime?page=' + page + '&size=' + size;
    },
    FRANCHISE: function FRANCHISE(slug) {
      return API_BASE + 'related/anime/' + slug + '/franchise';
    },
    // External APIs
    MAL_API: function MAL_API(id) {
      return 'https://animeapi.my.id/myanimelist/' + id;
    },
    TRAKT_SEARCH: function TRAKT_SEARCH(id, type) {
      return 'https://api.trakt.tv/search/trakt/' + id + '?type=' + type;
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

  function safeText$1(value) {
    return String(value || '');
  }
  function escapeHtml$1(value) {
    return safeText$1(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function sanitizeUrl$1(url) {
    var value = safeText$1(url).trim();
    if (!/^https?:\/\//i.test(value)) return '#';
    return value.replace(/"/g, '%22');
  }
  function renderInlineMarkdown$1(text) {
    var html = escapeHtml$1(text);
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function (match, label, url) {
      return '<a class="hikka-md-link" href="' + sanitizeUrl$1(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml$1(label) + '</a>';
    });
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    html = html.replace(/~~([^~]+)~~/g, '<s>$1</s>');
    html = html.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>');
    html = html.replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>');
    return html;
  }
  function markdownToHtml(text) {
    var source = safeText$1(text).trim();
    if (!source) return '';
    var lines = source.replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var inList = false;
    lines.forEach(function (rawLine) {
      var line = rawLine.trimEnd();
      var listMatch = line.match(/^\s*[-*]\s+(.+)$/);
      var quoteMatch = line.match(/^\s*>\s?(.*)$/);
      if (listMatch) {
        if (!inList) {
          html.push('<ul class="hikka-md-list">');
          inList = true;
        }
        html.push('<li>' + renderInlineMarkdown$1(listMatch[1]) + '</li>');
        return;
      }
      if (inList) {
        html.push('</ul>');
        inList = false;
      }
      if (!line.trim()) {
        html.push('<br>');
        return;
      }
      if (quoteMatch) {
        html.push('<blockquote class="hikka-md-quote">' + renderInlineMarkdown$1(quoteMatch[1]) + '</blockquote>');
        return;
      }
      html.push('<span>' + renderInlineMarkdown$1(line) + '</span>');
    });
    if (inList) html.push('</ul>');
    return html.join('');
  }
  function markdownToPlainText(text) {
    var source = safeText$1(text);
    if (!source.trim()) return '';
    var plain = source.replace(/\r\n/g, '\n');
    plain = plain.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$1');
    plain = plain.replace(/`([^`]+)`/g, '$1');
    plain = plain.replace(/\*\*([^*]+)\*\*/g, '$1');
    plain = plain.replace(/__([^_]+)__/g, '$1');
    plain = plain.replace(/~~([^~]+)~~/g, '$1');
    plain = plain.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?:;]|$)/g, '$1$2');
    plain = plain.replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,!?:;]|$)/g, '$1$2');
    plain = plain.replace(/^\s*[-*]\s+/gm, '');
    plain = plain.replace(/^\s*>\s?/gm, '');
    plain = plain.replace(/\n{3,}/g, '\n\n');
    return plain.trim();
  }
  function markdownExcerpt(text) {
    var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 280;
    var plain = markdownToPlainText(text).replace(/\s+/g, ' ').trim();
    if (!plain) return '';
    if (plain.length <= maxLength) return plain;
    return plain.slice(0, maxLength - 1).trim() + '…';
  }

  function normalizeTimestampToIsoDateTime(timestamp) {
    var value = Number(timestamp || 0);
    if (!value) return '';
    var date = new Date(value * 1000);
    if (Number.isNaN(date.getTime())) return '';
    return date.toISOString().replace('T', ' ').slice(0, 19);
  }
  function normalizeTimestampToIsoDate(timestamp) {
    var full = normalizeTimestampToIsoDateTime(timestamp);
    return full ? full.slice(0, 10) : '';
  }
  function normalizeEpisodeNumber(entry, index) {
    var value = Number(entry && (entry.episode || entry.number || entry.episode_number) || 0);
    if (value > 0) return value;
    return Number(index || 0) + 1;
  }
  function extractSeasonNumberFromText$1(value) {
    var text = String(value || '').trim();
    if (!text) return 0;
    var patterns = [/\bseason[\s._-]*([0-9]{1,2})\b/i, /\b([0-9]{1,2})(?:st|nd|rd|th)?[\s._-]*season\b/i, /\bсезон[\s._-]*([0-9]{1,2})\b/i, /\b([0-9]{1,2})[\s._-]*(?:й|ий|ій)?[\s._-]*сезон\b/i, /(?:^|[-_])season[-_]*([0-9]{1,2})(?:$|[-_])/i, /(?:^|[-_])([0-9]{1,2})(?:st|nd|rd|th)?[-_]*season(?:$|[-_])/i];
    for (var i = 0; i < patterns.length; i++) {
      var match = text.match(patterns[i]);
      if (!match || !match[1]) continue;
      var number = Number(match[1]);
      if (number > 0) return number;
    }
    return 0;
  }
  function inferSeasonNumber$1(details) {
    var numericValue = Number(details && (details.season_number || details.season) || 0);
    if (numericValue > 0) return numericValue;
    var candidates = [details && details.title_ua, details && details.title_en, details && details.title_ja, details && details.name, details && details.slug];
    for (var i = 0; i < candidates.length; i++) {
      var parsed = extractSeasonNumberFromText$1(candidates[i]);
      if (parsed > 0) return parsed;
    }
    return 1;
  }
  function normalizeEpisodeImageFields$1(entry, fallbackImage) {
    var raw = entry && (entry.image || entry.still_path) || fallbackImage || null;
    if (!raw) return {
      still_path: null,
      img: null
    };
    var image = String(raw).trim();
    if (!image) return {
      still_path: null,
      img: null
    };
    if (/^(https?:)?\/\//i.test(image) || /^data:image\//i.test(image)) {
      return {
        still_path: null,
        img: image
      };
    }
    if (image.charAt(0) === '/') {
      return {
        still_path: image,
        img: null
      };
    }
    return {
      still_path: null,
      img: image
    };
  }
  function extractScheduleEntries(details) {
    return Array.isArray(details && details.schedule) ? details.schedule : [];
  }
  function buildNextEpisodeFromSchedule(scheduleEntries) {
    var now = Math.floor(Date.now() / 1000);
    var future = (Array.isArray(scheduleEntries) ? scheduleEntries : []).filter(function (entry) {
      return Number(entry && entry.airing_at || 0) > now;
    }).sort(function (a, b) {
      return Number(a && a.airing_at || 0) - Number(b && b.airing_at || 0);
    });
    var next = future.length ? future[0] : null;
    if (!next) return null;
    var airDate = normalizeTimestampToIsoDateTime(next.airing_at);
    if (!airDate) return null;
    return {
      air_date: airDate,
      episode_number: normalizeEpisodeNumber(next, 0)
    };
  }
  function buildScheduleEpisodes(scheduleEntries, details, image) {
    var schedule = Array.isArray(scheduleEntries) ? scheduleEntries : [];
    if (!schedule.length) return null;
    var seasonNumber = inferSeasonNumber$1(details);
    var year = details && details.year;
    var fallbackDate = year ? year + '-01-01' : undefined;
    var byEpisode = {};
    schedule.forEach(function (entry, index) {
      var episodeNumber = normalizeEpisodeNumber(entry, index);
      var airDate = normalizeTimestampToIsoDate(entry && entry.airing_at) || fallbackDate;
      var imageFields = normalizeEpisodeImageFields$1(entry, image);
      if (!byEpisode[episodeNumber]) {
        byEpisode[episodeNumber] = {
          id: 'hikka_schedule_ep_' + episodeNumber,
          air_date: airDate,
          episode_number: episodeNumber,
          season_number: seasonNumber,
          name: 'Епізод ' + episodeNumber,
          overview: '',
          still_path: imageFields.still_path,
          img: imageFields.img
        };
      }
    });
    var episodes = Object.keys(byEpisode).map(function (key) {
      return byEpisode[key];
    }).sort(function (a, b) {
      return Number(a.episode_number || 0) - Number(b.episode_number || 0);
    });
    if (!episodes.length) return null;
    return {
      name: 'Season ' + seasonNumber,
      episodes: episodes
    };
  }
  function buildScheduleStats(scheduleEntries) {
    var schedule = Array.isArray(scheduleEntries) ? scheduleEntries : [];
    if (!schedule.length) return {
      total: 0,
      released: 0
    };
    var now = Math.floor(Date.now() / 1000);
    var maxEpisode = 0;
    var released = 0;
    schedule.forEach(function (entry, index) {
      var episodeNumber = normalizeEpisodeNumber(entry, index);
      if (episodeNumber > maxEpisode) maxEpisode = episodeNumber;
      var airingAt = Number(entry && entry.airing_at || 0);
      if (airingAt && airingAt <= now) released++;
    });
    return {
      total: maxEpisode,
      released: released
    };
  }
  function normalizeAnimeData(anime) {
    return {
      id: anime.slug,
      mal_id: anime.mal_id,
      kinopoisk_id: anime.kinopoisk_id || anime.mal_id,
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
      overview: markdownToPlainText(anime.synopsis_ua || anime.synopsis_en || ''),
      year: anime.year,
      release_year: anime.year || '2023',
      // Побудова дат для Full (fallback з року)
      release_date: anime.year ? anime.year + '-01-01' : undefined,
      first_air_date: anime.media_type !== 'movie' && anime.year ? anime.year + '-01-01' : undefined,
      status: STATUS_MAP[anime.status] || anime.status,
      media_type: anime.media_type,
      // Quality: 'UA' if translated, otherwise undefined (or real quality if we had it)
      quality: anime.translated_ua ? 'Солов’їна' : undefined,
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
    var rawBackdrop = String(details && details.backdrop || '').trim();
    var normalizedBackdrop = rawBackdrop && rawBackdrop !== 'null' && rawBackdrop !== 'undefined' ? rawBackdrop : '';
    var hasBackdrop = !!normalizedBackdrop;
    var isBackdropUrl = /^(https?:)?\/\//i.test(normalizedBackdrop) || /^data:image\//i.test(normalizedBackdrop);
    var backdropPath = hasBackdrop && normalizedBackdrop.charAt(0) === '/' ? normalizedBackdrop : null;
    var backgroundImage = hasBackdrop && !backdropPath && isBackdropUrl ? normalizedBackdrop : null;
    // Для Full потрібно передавати стандартизований ключ статусу
    var statusKey = details ? STATUS_STD_MAP[details.status] || details.status : undefined;
    var card = {
      id: details && details.slug,
      mal_id: details && details.mal_id,
      kinopoisk_id: details && (details.kinopoisk_id || details.mal_id),
      title: title_ua || title_en || title_ja,
      name: mediaType !== 'movie' ? title_ua || title_en || title_ja : undefined,
      original_title: title_ja || title_en || title_ua,
      original_name: mediaType !== 'movie' ? title_en || title_ja || title_ua : null,
      // Використати title_ja як tagline для відображення оригінальної назви
      tagline: title_ja || '',
      overview: markdownToHtml(details && (details.synopsis_ua || details.synopsis_en) || ''),
      poster_path: image,
      img: image,
      backdrop_path: backdropPath,
      background_image: backgroundImage,
      images: {
        // Applecation fallback: блокуємо TMDB /images для Hikka-карток.
        logos: [{
          iso_639_1: 'uk',
          file_path: '__hikka_skip_logo__'
        }, {
          iso_639_1: 'ru',
          file_path: '__hikka_skip_logo__'
        }, {
          iso_639_1: 'en',
          file_path: '__hikka_skip_logo__'
        }, {
          iso_639_1: null,
          file_path: '__hikka_skip_logo__'
        }]
      },
      vote_average: details && (details.score || details.native_score) || 0,
      status: statusKey,
      release_date: year ? year + '-01-01' : undefined,
      first_air_date: mediaType !== 'movie' && year ? year + '-01-01' : undefined,
      // runtime for movies (duration in minutes from Hikka)
      runtime: details && typeof details.duration === 'number' ? details.duration : undefined,
      // Applecation нативно читає runtime серій з episode_run_time[0].
      episode_run_time: mediaType !== 'movie' && details && typeof details.duration === 'number' ? [details.duration] : undefined,
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

    // Компанії виробництва (повертаємо всі студії/компанії, як у нативному потоці)
    card.production_companies = Array.isArray(details && details.companies) ? details.companies.map(function (item) {
      return {
        id: item && item.company ? item.company.slug : undefined,
        name: item && item.company ? item.company.name : '',
        type: String(item && item.type || '').toLowerCase()
      };
    }).filter(function (item) {
      return item.id && item.name;
    }) : [];
    var scheduleEntries = extractScheduleEntries(details);
    var scheduleStats = buildScheduleStats(scheduleEntries);
    if (!card.episodes_total && scheduleStats.total > 0) card.episodes_total = scheduleStats.total;
    if (!card.number_of_episodes && card.episodes_total) card.number_of_episodes = card.episodes_total;
    if (!card.episodes_released && scheduleStats.released > 0) card.episodes_released = scheduleStats.released;
    if (!card.next_episode_to_air) {
      var nextEpisode = buildNextEpisodeFromSchedule(scheduleEntries);
      if (nextEpisode) card.next_episode_to_air = nextEpisode;
    }

    // Епізоди
    // Ensure no episodes for pure movies to avoid empty tab
    var episodes;
    if (details && Array.isArray(details.episodes) && details.episodes.length) {
      var seasonNumber = inferSeasonNumber$1(details);
      episodes = {
        name: 'Season ' + seasonNumber,
        episodes: details.episodes.map(function (ep, idx) {
          var imageFields = normalizeEpisodeImageFields$1(ep, image);
          return {
            id: ep.id || undefined,
            air_date: ep.air_date || (year ? year + '-01-01' : undefined),
            episode_number: ep.number || ep.episode_number || idx + 1,
            season_number: ep.season || ep.season_number || seasonNumber,
            name: ep.title_ua || ep.title_ja || ep.title_en || ep.name || 'Епізод ' + (ep.number || idx + 1),
            overview: markdownToPlainText(ep.synopsis_ua || ep.synopsis_en || ep.overview || ''),
            still_path: imageFields.still_path,
            img: imageFields.img
          };
        })
      };
      if (!card.number_of_episodes) card.number_of_episodes = episodes.episodes.length;
    } else if (mediaType !== 'movie') {
      var fallbackEpisodes = buildScheduleEpisodes(scheduleEntries, details, image);
      if (fallbackEpisodes && Array.isArray(fallbackEpisodes.episodes) && fallbackEpisodes.episodes.length) {
        episodes = fallbackEpisodes;
        if (!card.number_of_episodes) card.number_of_episodes = fallbackEpisodes.episodes.length;
      }
    }
    return {
      card: card,
      episodes: episodes,
      method: mediaType,
      id: details && details.slug
    };
  }
  function formatCommentDate(timestamp) {
    var ts = Number(timestamp);
    if (!ts) return '';
    var date = new Date(ts * 1000);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('uk-UA');
  }
  function normalizeCommentText(text) {
    return String(text || '').replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  function formatScore(score) {
    var value = Number(score || 0);
    if (value > 0) return '+' + value;
    return String(value);
  }
  function countBranchReplies(items) {
    if (!Array.isArray(items) || !items.length) return 0;
    return items.reduce(function (acc, item) {
      if (!item || item.hidden) return acc;
      return acc + 1 + countBranchReplies(item.replies);
    }, 0);
  }
  function appendThread(item, lines) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!item || item.hidden) return;
    var text = normalizeCommentText(item.text);
    if (!text) return;
    var author = item.author && item.author.username || 'Анонім';
    var date = formatCommentDate(item.created || item.updated);
    var score = formatScore(item.vote_score);
    var prefix = level > 0 ? '  '.repeat(Math.min(level, 5)) + '-> ' : '';
    var header = prefix + author + (date ? ' | ' + date : '') + ' | ' + score;
    lines.push(header);
    text.split('\n').forEach(function (line) {
      lines.push((level > 0 ? '  '.repeat(Math.min(level, 5)) : '') + line);
    });
    lines.push('');
    if (Array.isArray(item.replies) && item.replies.length) {
      item.replies.forEach(function (reply) {
        return appendThread(reply, lines, level + 1);
      });
    }
  }
  function appendThreadEntries(item, entries) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!item || item.hidden) return;
    var text = normalizeCommentText(item.text);
    if (text) {
      var author = item.author && item.author.username || 'Анонім';
      var dateLabel = formatCommentDate(item.created || item.updated);
      var score = Number(item.vote_score || 0);
      entries.push({
        id: item.reference || 'hikka_thread_' + entries.length,
        author: author,
        created_label: dateLabel,
        score: score,
        score_label: formatScore(score),
        level: Math.max(0, Number(level || 0)),
        text: text
      });
    }
    if (Array.isArray(item.replies) && item.replies.length) {
      item.replies.forEach(function (reply) {
        return appendThreadEntries(reply, entries, level + 1);
      });
    }
  }
  function mapTopLevelComment(item, index) {
    if (!item || item.hidden) return null;
    var text = normalizeCommentText(item.text);
    if (!text) return null;
    var author = item.author && item.author.username || 'Анонім';
    var dateLabel = formatCommentDate(item.created || item.updated);
    var score = Number(item.vote_score || 0);
    var scoreLabel = formatScore(score);
    var repliesCount = countBranchReplies(item.replies);
    var threadLines = [];
    appendThread(item, threadLines, 0);
    var threadText = threadLines.join('\n').trim() || text;
    var threadEntries = [];
    appendThreadEntries(item, threadEntries, 0);
    var threadCommentsCount = threadEntries.length || repliesCount + 1;
    return {
      id: item.reference || 'hikka_comment_' + index,
      text: text,
      comment: threadText,
      author: author,
      created_label: dateLabel,
      score: score,
      score_label: scoreLabel,
      replies_count: repliesCount,
      thread_comments_count: threadCommentsCount,
      thread_entries: threadEntries,
      source: 'hikka'
    };
  }
  function mapTopLevelComments(items) {
    if (!Array.isArray(items) || !items.length) return [];
    var mapped = [];
    items.forEach(function (item, index) {
      var normalized = mapTopLevelComment(item, index);
      if (normalized) mapped.push(normalized);
    });
    return mapped;
  }
  function buildDiscussPayloadFromComments(commentsResponse) {
    var pagination = commentsResponse && commentsResponse.pagination ? commentsResponse.pagination : {};
    var result = mapTopLevelComments(commentsResponse && commentsResponse.list);
    return {
      page: Number(pagination.page || 1),
      total_pages: Number(pagination.pages || 1),
      total_results: Number(pagination.total || result.length),
      result: result
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
  function isSeasonYearTuple(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'string' && (typeof value[1] === 'number' || typeof value[1] === 'string');
  }
  function normalizeYearsForApi(years) {
    var source = Array.isArray(years) ? years : [];
    if (!source.length) return [];
    var allTuples = source.every(isSeasonYearTuple);
    if (!allTuples) return source;
    var normalized = source.map(function (item) {
      return [item[0], Number(item[1]) || item[1]];
    });

    // Hikka API валідатор відхиляє years з єдиним season-year елементом.
    // Для сумісності дублюємо один елемент.
    if (normalized.length === 1) return [normalized[0], normalized[0]];
    return normalized;
  }
  var Api = {
    buildFullPayloadFromDetails: buildFullPayloadFromDetails,
    buildDiscussPayloadFromComments: buildDiscussPayloadFromComments,
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
        years: normalizeYearsForApi(filters.years),
        genres: filters.genres || [],
        // Додаємо підтримку жанрів
        studios: filters.studios || [],
        // Додаємо підтримку студій
        only_translated: filters.only_translated || false,
        // Додаємо підтримку only_translated
        sort: filters.sort || ['score:desc']
      };
      if (Array.isArray(filters.score) && filters.score.length) {
        postData.score = filters.score;
      }
      var query = typeof filters.query === 'string' ? filters.query.trim() : '';
      if (query) postData.query = query;
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
    searchAnime: function searchAnime(query) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      var safeQuery = String(query || '').trim();
      if (!safeQuery) {
        if (success) {
          success({
            results: [],
            total_pages: 1,
            page: 1
          });
        }
        return;
      }
      this.getAnimeListWithFilters(_objectSpread2(_objectSpread2({}, filters || {}), {}, {
        query: safeQuery
      }), page, success, error);
    },
    cancelRequests: function cancelRequests() {
      try {
        network.clear();
      } catch (e) {
        console.log('[Hikka] cancelRequests error:', e);
      }
    },
    getScheduleAnime: function getScheduleAnime(filters) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      var url = ENDPOINTS.SCHEDULE_ANIME(page, size);
      var postData = {
        airing_season: Array.isArray(filters && filters.airing_season) ? filters.airing_season : [],
        status: Array.isArray(filters && filters.status) ? filters.status : ['ongoing', 'announced']
      };
      network["native"](url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse schedule response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && Array.isArray(data.list)) {
          if (success) success(data);
        } else {
          if (error) error('No schedule data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching schedule:', err);
        if (error) error(err);
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
    // Hikka Episodes API: GET /anime/{slug}/episodes?page={page}&size={size}
    getAnimeEpisodes: function getAnimeEpisodes(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.EPISODES(slug, page, size);
      network.silent(url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse episodes response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && Array.isArray(data.list)) {
          if (success) success(data);
        } else {
          if (error) error('No episodes data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching episodes:', err);
        if (error) error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    getComments: function getComments(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.COMMENTS(slug, page, size);
      network.silent(url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse comments response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && Array.isArray(data.list)) {
          if (success) success(data);
        } else {
          if (error) error('No comments data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching comments:', err);
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
    // Hikka Staff API: GET /anime/{slug}/staff?page={page}&size={size}
    getAnimeStaff: function getAnimeStaff(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.STAFF(slug, page, size);
      network.silent(url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse staff response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && Array.isArray(data.list)) {
          if (success) success(data);
        } else {
          if (error) error('No staff data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching staff:', err);
        if (error) error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    // Hikka Character Voices API: GET /characters/{slug}/voices?page={page}&size={size}
    getCharacterVoices: function getCharacterVoices(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.CHARACTER_VOICES(slug, page, size);
      network.silent(url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse voices response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && Array.isArray(data.list)) {
          if (success) success(data);
        } else {
          if (error) error('No voices data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching voices:', err);
        if (error) error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    // Hikka Person API: GET /people/{slug}
    getPerson: function getPerson(slug, success, error) {
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.PEOPLE(slug);
      network.silent(url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse person response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && _typeof(data) === 'object') {
          if (success) success(data);
        } else {
          if (error) error('No person data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching person:', err);
        if (error) error(err);
      }, false, {
        headers: getProxyHeaders({
          'Content-Type': 'application/json'
        })
      });
    },
    // Hikka Person Anime API: GET /people/{slug}/anime?page={page}&size={size}
    getPersonAnime: function getPersonAnime(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      if (!slug) {
        if (error) error('No slug');
        return;
      }
      var url = ENDPOINTS.PEOPLE_ANIME(slug, page, size);
      network.silent(url, function (data) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            console.error('[Hikka] Failed to parse person anime response:', e);
            if (error) error(e);
            return;
          }
        }
        if (data && Array.isArray(data.list)) {
          if (success) success(data);
        } else {
          if (error) error('No person anime data');
        }
      }, function (err) {
        console.log('[Hikka] Error fetching person anime:', err);
        if (error) error(err);
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
      value: function render(card, element, scroll, _activity) {
        var callbacks = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        // card.render() повертає jQuery об'єкт
        var render = card.render();
        render.addClass('selector');
        render.addClass('hikka-card'); // Add scoped class

        var viewElement = render[0] ? render[0].querySelector('.card__view') : null;

        // UA badge in native Lampa style
        if (element.translated_ua && viewElement && !viewElement.querySelector('.card__quality')) {
          var translateBadge = document.createElement('div');
          translateBadge.className = 'card__quality';
          translateBadge.classList.add('hikka-translate-quality');
          var translateBadgeInner = document.createElement('div');
          translateBadgeInner.innerText = 'Солов’їна';
          translateBadge.appendChild(translateBadgeInner);
          viewElement.appendChild(translateBadge);
        }

        // Для колекцій у Full показуємо реальний media_type (TV/ONA/OVA/...)
        if (element && element.hikka_collection && viewElement) {
          var typeLabel = String(element.hikka_media_type_label || element.media_type || '').toUpperCase();
          var typeNode = viewElement.querySelector('.card__type');
          if (typeNode && typeLabel) {
            typeNode.innerText = typeLabel;
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

        // Enter -> нативний потік Full через source-provider (без prefetch details тут)
        render.off('hover:enter');
        render.on('hover:enter', function () {
          var slug = element.hikka_slug || element.id;
          if (!slug) {
            Lampa.Noty.show('Не вдалося відкрити картку: відсутній slug');
            return;
          }
          var cardData = _objectSpread2(_objectSpread2({}, element), {}, {
            id: slug,
            hikka_slug: element.hikka_slug || slug,
            source: 'hikka'
          });
          Lampa.Activity.push({
            url: '',
            component: 'full',
            id: slug,
            method: element.media_type === 'movie' ? 'movie' : 'tv',
            card: cardData,
            search: cardData.original_title || cardData.title || '',
            search_one: cardData.title || '',
            search_two: cardData.original_title || '',
            source: 'hikka'
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
        years: [],
        score: [],
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
          if (incoming.years !== undefined) this.filters.years = toArray(incoming.years);
          if (incoming.score !== undefined) this.filters.score = toArray(incoming.score);
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
          years: [],
          score: [],
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
      this.nextWait = false;
      this.buildedTime = Date.now();
      this.destroyed = false;
      this.onEndHandler = this.loadNext.bind(this);

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
        this.destroyed = false;

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
        this.destroyed = true;
        Lampa.Arrays.destroy(this.items);
        this.scroll.destroy();
        this.html.remove();
        this.contentContainer.remove();
        this.items = [];
      }
    }, {
      key: "syncOnEnd",
      value: function syncOnEnd() {
        if (!this.items.length || this.current_page >= this.total_pages) {
          this.scroll.onEnd = null;
          return;
        }
        this.scroll.onEnd = this.onEndHandler;
      }
    }, {
      key: "loadNext",
      value: function loadNext() {
        if (this.nextWait || this.loading) return;
        if (!this.items.length) return;
        if (this.current_page >= this.total_pages) return;
        if (this.buildedTime > Date.now() - 1000) return;
        this.nextWait = true;
        this.current_page++;
        this.load();
      }
    }, {
      key: "load",
      value: function load() {
        var _this2 = this;
        if (this.loading) return;
        var fromNext = this.nextWait;
        this.loading = true;
        if (this.current_page === 1) this.activity.loader(true);
        Api.getAnimeListWithFilters(this.filterManager.get(), this.current_page, function (data) {
          if (_this2.destroyed) return;
          _this2.loading = false;
          _this2.nextWait = false;
          if (_this2.current_page === 1) _this2.activity.loader(false);
          if (data && data.results && data.results.length) {
            _this2.total_pages = data.total_pages || 1;
            _this2.append(data.results);
            _this2.buildedTime = Date.now();
            if (_this2.current_page === 1) {
              _this2.scroll.minus();
            }
            _this2.syncOnEnd();
          } else if (_this2.current_page === 1) {
            _this2.empty();
          } else {
            _this2.syncOnEnd();
          }
        }, function () {
          if (_this2.destroyed) return;
          _this2.loading = false;
          if (fromNext && _this2.current_page > 1) _this2.current_page--;
          _this2.nextWait = false;
          if (_this2.current_page === 1) _this2.activity.loader(false);
          if (_this2.current_page === 1) {
            _this2.empty();
          } else {
            _this2.syncOnEnd();
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
        this.loading = false;
        this.nextWait = false;
        this.total_pages = 1;
        this.buildedTime = Date.now();
        this.scroll.onEnd = null;
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

  function HikkaMainLinesComponent() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var params = _objectSpread2(_objectSpread2({}, object || {}), {}, {
      source: 'hikka'
    });
    try {
      var MainComponent = Lampa && Lampa.Component && typeof Lampa.Component.get === 'function' ? Lampa.Component.get('main') : null;
      if (typeof MainComponent === 'function') {
        return MainComponent(params);
      }
    } catch (e) {
      console.log('[Hikka] Failed to start lines component, fallback to legacy:', e);
    }
    return new Component(params);
  }

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

  var DAY_MS = 24 * 60 * 60 * 1000;
  var DEFAULT_STATUSES = ['ongoing', 'announced'];
  function getCurrentSeasonYear$1() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    if (month <= 3) return {
      season: 'winter',
      year: year
    };
    if (month <= 6) return {
      season: 'spring',
      year: year
    };
    if (month <= 9) return {
      season: 'summer',
      year: year
    };
    return {
      season: 'fall',
      year: year
    };
  }
  function pad2(value) {
    return String(value).padStart(2, '0');
  }
  function dateKeyFromDate(date) {
    return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
  }
  function dateKeyFromUnix(timestamp) {
    var ts = Number(timestamp || 0);
    if (!ts) return '';
    var date = new Date(ts * 1000);
    if (Number.isNaN(date.getTime())) return '';
    return dateKeyFromDate(date);
  }
  function timeLabelFromUnix(timestamp) {
    var ts = Number(timestamp || 0);
    if (!ts) return '--:--';
    var date = new Date(ts * 1000);
    if (Number.isNaN(date.getTime())) return '--:--';
    return pad2(date.getHours()) + ':' + pad2(date.getMinutes());
  }
  function buildCardFromAnime(anime, index) {
    var safe = anime || {};
    var mediaType = safe.media_type === 'movie' ? 'movie' : 'tv';
    var title = safe.title_ua || safe.title_en || safe.title_ja || '—';
    var year = safe.year;
    var fallbackDate = year ? String(year) + '-01-01' : undefined;
    return {
      id: safe.slug || 'hikka_schedule_card_' + index,
      hikka_slug: safe.slug || undefined,
      mal_id: safe.mal_id,
      kinopoisk_id: safe.kinopoisk_id || safe.mal_id,
      title: title,
      name: mediaType !== 'movie' ? title : undefined,
      original_title: safe.title_en || safe.title_ja || safe.title_ua || title,
      original_name: mediaType !== 'movie' ? safe.title_en || safe.title_ja || safe.title_ua || title : null,
      media_type: mediaType,
      source: 'hikka',
      poster_path: null,
      backdrop_path: null,
      poster: safe.image || null,
      img: safe.image || null,
      vote_average: safe.score || safe.native_score || 0,
      release_date: mediaType === 'movie' ? fallbackDate : undefined,
      first_air_date: mediaType !== 'movie' ? fallbackDate : undefined,
      translated_ua: !!safe.translated_ua,
      has_translation: !!safe.translated_ua
    };
  }
  function mapScheduleItem(item, index) {
    if (!item || !item.anime) return null;
    var anime = item.anime;
    var card = buildCardFromAnime(anime, index);
    var airingAt = Number(item.airing_at || 0);
    return {
      id: anime.slug ? anime.slug + '_' + String(airingAt || index) : 'hikka_schedule_' + index,
      airing_at: airingAt,
      date_key: dateKeyFromUnix(airingAt),
      time_label: timeLabelFromUnix(airingAt),
      episode: Number(item.episode || anime.episodes_released || 0) || 0,
      anime: anime,
      card: card
    };
  }
  function normalizeScheduleList(list) {
    var source = Array.isArray(list) ? list : [];
    var mapped = [];
    var seen = {};
    source.forEach(function (item, index) {
      var normalized = mapScheduleItem(item, index);
      if (!normalized || !normalized.date_key) return;
      var key = normalized.card.id + '::' + normalized.airing_at + '::' + normalized.episode;
      if (seen[key]) return;
      seen[key] = true;
      mapped.push(normalized);
    });
    mapped.sort(function (a, b) {
      return Number(a.airing_at || 0) - Number(b.airing_at || 0);
    });
    return mapped;
  }
  function groupByDate(items) {
    var grouped = {};
    var source = Array.isArray(items) ? items : [];
    source.forEach(function (item) {
      var key = item && item.date_key;
      if (!key) return;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });
    Object.keys(grouped).forEach(function (key) {
      grouped[key].sort(function (a, b) {
        return Number(a.airing_at || 0) - Number(b.airing_at || 0);
      });
    });
    return grouped;
  }
  function buildDateRange(startDate, days) {
    var dates = [];
    var begin = new Date(startDate.getTime());
    begin.setHours(0, 0, 0, 0);
    for (var i = 0; i < days; i++) {
      dates.push(new Date(begin.getTime() + i * DAY_MS));
    }
    return dates;
  }
  function fetchAllSchedule(filters, oncomplite, onerror) {
    var pageSize = 50;
    var maxPages = 40;
    var collected = [];
    var _loadPage = function loadPage(page) {
      Api.getScheduleAnime(filters, page, pageSize, function (response) {
        var list = Array.isArray(response && response.list) ? response.list : [];
        var pages = Math.max(1, Number(response && response.pagination && response.pagination.pages) || 1);
        list.forEach(function (item) {
          return collected.push(item);
        });
        if (page < pages && page < maxPages) {
          _loadPage(page + 1);
        } else {
          oncomplite(normalizeScheduleList(collected));
        }
      }, function (err) {
        if (page === 1) {
          if (onerror) onerror(err);
          return;
        }
        oncomplite(normalizeScheduleList(collected));
      });
    };
    _loadPage(1);
  }
  function HikkaScheduleComponent(object) {
    var _this = this;
    var Scroll = Lampa.Scroll;
    var Activity = Lampa.Activity;
    var Modal = Lampa.Modal;
    var Template = Lampa.Template;
    var Empty = Lampa.Empty;
    var Controller = Lampa.Controller;
    var Utils = Lampa.Utils;
    var Background = Lampa.Background;
    var Lang = Lampa.Lang;
    var scroll = new Scroll({
      mask: true,
      over: true,
      step: 300
    });
    var html = $('<div></div>');
    var body = $('<div class="timetable"></div>');
    var weeks = [Lang.translate('week_7'), Lang.translate('week_1'), Lang.translate('week_2'), Lang.translate('week_3'), Lang.translate('week_4'), Lang.translate('week_5'), Lang.translate('week_6')];
    var seasonInfo = getCurrentSeasonYear$1();
    var last = null;
    var grouped = {};
    var allEntries = [];
    this.activity = null;
    this.empty = function (descr) {
      var empty = new Empty({
        descr: descr || 'Розклад Hikka порожній'
      });
      html.append(empty.render());
      _this.start = empty.start.bind(empty);
      if (_this.activity) _this.activity.loader(false);
      if (_this.activity) _this.activity.toggle();
    };
    this.openDayModal = function (dateKey, dayEntries) {
      var entries = Array.isArray(dayEntries) ? dayEntries : [];
      if (!entries.length) return;
      var modal = $('<div></div>');
      entries.forEach(function (entry) {
        var card = entry.card || {};
        var anime = entry.anime || {};
        var title = card.name || card.title || '—';
        var synopsisRaw = anime.synopsis_ua || anime.synopsis_en || '';
        var synopsis = markdownExcerpt(synopsisRaw, 280) || 'Опис відсутній';
        var episode = entry.episode ? 'Епізод ' + entry.episode : 'Епізод —';
        var noty = Template.get('notice_card', {
          time: dateKey + ' ' + entry.time_label,
          title: title,
          descr: synopsis
        });
        var footer = $('<div class="notice__footer"></div>');
        footer.append('<div>' + episode + '</div>');
        footer.append('<div>' + (anime.status || '') + '</div>');
        noty.find('.notice__descr').append(footer);
        if (card.img) {
          Utils.imgLoad(noty.find('img'), card.img, function () {
            noty.addClass('image--loaded');
          }, function () {
            noty.find('img').remove();
          });
        } else {
          noty.find('img').remove();
        }
        noty.on('hover:enter', function () {
          Modal.close();
          Activity.push({
            url: '',
            component: 'full',
            id: card.hikka_slug || card.id,
            method: card.media_type === 'movie' ? 'movie' : 'tv',
            card: card,
            source: 'hikka'
          });
        });
        modal.append(noty);
      });
      Modal.open({
        title: 'Hikka Розклад',
        size: 'medium',
        html: modal,
        onBack: function onBack() {
          Modal.close();
          Controller.toggle('content');
        }
      });
    };
    this.appendDay = function (date, dayEntries) {
      var item = $("\n            <div class=\"timetable__item selector\">\n                <div class=\"timetable__inner\">\n                    <div class=\"timetable__date\"></div>\n                    <div class=\"timetable__body\"></div>\n                </div>\n            </div>\n        ");
      var dateKey = dateKeyFromDate(date);
      var entries = Array.isArray(dayEntries) ? dayEntries : [];
      var dayTime = Utils.parseTime(date.getTime());
      if (entries.length) {
        entries.slice(0, 3).forEach(function (entry) {
          var cardTitle = entry.card && (entry.card.name || entry.card.title) || '—';
          var dotColor = Utils.stringToHslColor(cardTitle, 55, 52);
          var episodeLabel = entry.episode ? ' · E' + entry.episode : '';
          item.find('.timetable__body').append('<div><span style="background-color: ' + dotColor + '"></span>' + cardTitle + ' ' + entry.time_label + episodeLabel + '</div>');
        });
        if (entries.length > 3) {
          item.find('.timetable__body').append('<div>+' + (entries.length - 3) + '</div>');
        }
        if (entries.length === 1 && entries[0].card && entries[0].card.img) {
          var preview = $('<div class="timetable__preview"><img><div>Епізод ' + (entries[0].episode || '—') + '</div></div>');
          Utils.imgLoad(preview.find('img'), entries[0].card.img, false, function () {
            preview.find('img').remove();
          });
          item.find('.timetable__body').prepend(preview);
        }
        item.addClass('timetable__item--any');
      }
      item.find('.timetable__date').text(dayTime["short"] + ' - ' + weeks[date.getDay()] + '.');
      item.on('hover:focus', function () {
        last = $(this)[0];
        scroll.update($(this));
      }).on('hover:hover', function () {
        last = $(this)[0];
        if (typeof Navigator !== 'undefined' && Navigator.focused) Navigator.focused(last);
      }).on('hover:enter', function () {
        last = item[0];
        _this.openDayModal(dateKey, entries);
      });
      body.append(item);
    };
    this.create = function () {
      var _this2 = this;
      if (!this.activity) {
        var active = Lampa.Activity.active();
        this.activity = active && active.activity ? active.activity : null;
      }
      if (this.activity) this.activity.loader(true);
      var filters = {
        airing_season: [seasonInfo.season, seasonInfo.year],
        status: DEFAULT_STATUSES
      };
      fetchAllSchedule(filters, function (entries) {
        allEntries = entries;
        grouped = groupByDate(entries);
        var today = new Date();
        var dates = buildDateRange(today, 45);
        var hasAny = dates.some(function (date) {
          var key = dateKeyFromDate(date);
          var list = grouped[key];
          return Array.isArray(list) && list.length > 0;
        });
        if (!hasAny && allEntries.length) {
          var fallbackStart = new Date((allEntries[0].airing_at || 0) * 1000);
          if (!Number.isNaN(fallbackStart.getTime())) {
            dates = buildDateRange(fallbackStart, 30);
            hasAny = dates.some(function (date) {
              var key = dateKeyFromDate(date);
              var list = grouped[key];
              return Array.isArray(list) && list.length > 0;
            });
          }
        }
        dates.forEach(function (date) {
          var key = dateKeyFromDate(date);
          _this2.appendDay(date, grouped[key] || []);
        });
        if (!hasAny) {
          _this2.empty('Немає епізодів у розкладі Hikka для поточного сезону');
          return;
        }
        scroll.minus();
        scroll.append(body);
        html.append(scroll.render());
        if (_this2.activity) _this2.activity.loader(false);
        if (_this2.activity) _this2.activity.toggle();
      }, function () {
        _this2.empty('Не вдалося завантажити розклад Hikka');
      });
      return this.render();
    };
    this.back = function () {
      Activity.backward();
    };
    this.start = function () {
      Controller.add('content', {
        link: this,
        toggle: function toggle() {
          Controller.collectionSet(scroll.render());
          if (!last) {
            last = body.find('.timetable__item.selector').get(0) || false;
          }
          Controller.collectionFocus(last || false, scroll.render());
          Background.change('');
        },
        left: function left() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');else Controller.toggle('menu');
        },
        right: function right() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('right')) Navigator.move('right');
        },
        up: function up() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');else Controller.toggle('head');
        },
        down: function down() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');
        },
        back: this.back
      });
      Controller.toggle('content');
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      scroll.destroy();
      html.remove();
    };
  }

  var iconCounter = 0;
  function createGradientId() {
    iconCounter += 1;
    return 'hikka-logo-gradient-' + iconCounter;
  }
  function createLogoIconSvg() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var gradientId = createGradientId();
    var cssClass = className ? ' ' + className : '';
    return "<svg class=\"hikka-logo-icon".concat(cssClass, "\" viewBox=\"0 0 118 118\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <defs>\n            <linearGradient id=\"").concat(gradientId, "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n                <stop offset=\"0%\" stop-color=\"#D792F8\"/>\n                <stop offset=\"100%\" stop-color=\"#5277CB\"/>\n            </linearGradient>\n        </defs>\n        <path d=\"M 92.00 117.50 L 87.00 117.50 L 86.00 116.50 L 85.00 116.50 L 62.00 93.50 L 61.00 93.50 L 60.00 92.50 L 56.00 92.50 L 55.00 93.50 L 54.00 93.50 L 31.00 116.50 L 30.00 116.50 L 29.00 117.50 L 23.00 117.50 L 13.00 107.50 L 12.00 107.50 L 0.50 96.00 L 0.50 95.00 L -0.50 94.00 L -0.50 88.00 L 2.50 85.00 L 2.50 84.00 L 23.50 63.00 L 23.50 62.00 L 24.50 61.00 L 24.50 56.00 L 23.50 55.00 L 23.50 54.00 L 0.50 31.00 L 0.50 30.00 L -0.50 29.00 L -0.50 24.00 L 0.50 23.00 L 0.50 22.00 L 21.00 1.50 L 22.00 1.50 L 23.00 0.50 L 25.00 0.50 L 26.00 -0.50 L 27.00 0.50 L 30.00 0.50 L 53.00 23.50 L 54.00 23.50 L 55.00 24.50 L 56.00 24.50 L 57.00 25.50 L 60.00 25.50 L 61.00 24.50 L 62.00 24.50 L 81.50 5.00 L 81.50 4.00 L 84.00 1.50 L 85.00 1.50 L 88.00 -0.50 L 93.00 -0.50 L 95.00 1.50 L 96.00 1.50 L 115.50 21.00 L 115.50 22.00 L 117.50 25.00 L 117.50 29.00 L 116.50 30.00 L 116.50 31.00 L 92.50 55.00 L 92.50 56.00 L 91.50 57.00 L 91.50 61.00 L 92.50 62.00 L 92.50 63.00 L 115.50 86.00 L 115.50 87.00 L 116.50 88.00 L 116.50 94.00 L 115.50 95.00 L 115.50 96.00 L 96.00 115.50 L 95.00 115.50 L 92.00 117.50 Z\" fill=\"url(#").concat(gradientId, ")\"/>\n    </svg>");
  }

  function addMenuItem() {
    var button = Lampa.Menu.addButton(createLogoIconSvg(), 'Anime', function () {
      Lampa.Activity.push({
        url: '',
        title: Lampa.Lang.translate('menu_anime'),
        component: 'hikka_anime',
        page: 1,
        source: 'hikka'
      });
    });
    button.addClass('my_class');
    var scheduleButton = Lampa.Menu.addButton(createLogoIconSvg(), 'Schedule', function () {
      Lampa.Activity.push({
        url: '',
        title: Lampa.Lang.translate('title_timetable'),
        component: 'hikka_schedule',
        page: 1,
        source: 'hikka'
      });
    });
    scheduleButton.addClass('my_class');
  }

  function safeText(value) {
    return String(value || '').trim();
  }
  function escapeHtml(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function sanitizeUrl(url) {
    var value = safeText(url);
    if (!/^https?:\/\//i.test(value)) return '#';
    return value.replace(/"/g, '%22');
  }
  function renderInlineMarkdown(text) {
    var html = escapeHtml(text);
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function (match, label, url) {
      return '<a class="hikka-md-link" href="' + sanitizeUrl(url) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
    });
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    html = html.replace(/~~([^~]+)~~/g, '<s>$1</s>');
    html = html.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>');
    html = html.replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>');
    return html;
  }
  function renderMarkdownPreview(text) {
    return safeText(text).replace(/\r\n/g, '\n').split('\n').map(function (line) {
      return renderInlineMarkdown(line);
    }).join('<br>');
  }
  function renderMarkdownToHtml(text) {
    var source = safeText(text);
    if (!source) return '—';
    var lines = source.replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var inList = false;
    lines.forEach(function (rawLine) {
      var line = rawLine.trimEnd();
      var listMatch = line.match(/^\s*[-*]\s+(.+)$/);
      var quoteMatch = line.match(/^\s*>\s?(.*)$/);
      if (listMatch) {
        if (!inList) {
          html.push('<ul class="hikka-md-list">');
          inList = true;
        }
        html.push('<li>' + renderInlineMarkdown(listMatch[1]) + '</li>');
        return;
      }
      if (inList) {
        html.push('</ul>');
        inList = false;
      }
      if (!line.trim()) {
        html.push('<br>');
        return;
      }
      if (quoteMatch) {
        html.push('<blockquote class="hikka-md-quote">' + renderInlineMarkdown(quoteMatch[1]) + '</blockquote>');
        return;
      }
      html.push('<span>' + renderInlineMarkdown(line) + '</span>');
    });
    if (inList) html.push('</ul>');
    return html.join('');
  }
  function createChip(text, modifier) {
    var chip = document.createElement('span');
    chip.className = 'hikka-comment-chip' + (modifier ? ' hikka-comment-chip--' + modifier : '');
    chip.textContent = safeText(text);
    return chip;
  }
  function splitWords(text, maxLength) {
    var words = safeText(text).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    var chunks = [];
    var current = '';
    words.forEach(function (word) {
      var candidate = current ? current + ' ' + word : word;
      if (candidate.length > maxLength && current) {
        chunks.push(current);
        current = word;
      } else {
        current = candidate;
      }
    });
    if (current) chunks.push(current);
    return chunks;
  }
  function splitTextToChunks(text) {
    var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 360;
    var content = safeText(text);
    if (!content) return ['—'];
    var paragraphs = content.replace(/\r\n/g, '\n').split('\n').map(function (line) {
      return line.trim();
    }).filter(Boolean);
    if (!paragraphs.length) return ['—'];
    var chunks = [];
    var current = '';
    paragraphs.forEach(function (paragraph) {
      var lines = paragraph.length > maxLength ? splitWords(paragraph, maxLength) : [paragraph];
      lines.forEach(function (line) {
        var candidate = current ? current + '\n' + line : line;
        if (candidate.length > maxLength && current) {
          chunks.push(current);
          current = line;
        } else {
          current = candidate;
        }
      });
    });
    if (current) chunks.push(current);
    return chunks.length ? chunks : ['—'];
  }
  function drawThreadItem(itemNode, entry, textChunk, isFirstChunk, chunkIndex, chunkCount) {
    var level = Math.max(0, Math.min(5, Number(entry && entry.level || 0)));
    var wrapper = document.createElement('div');
    var head = document.createElement('div');
    var text = document.createElement('div');
    wrapper.className = 'hikka-thread-entry';
    wrapper.style.marginLeft = level * 0.9 + 'em';
    head.className = 'hikka-thread-entry__head';
    text.className = 'hikka-thread-entry__text';
    text.innerHTML = renderMarkdownToHtml(textChunk);
    if (isFirstChunk) {
      head.appendChild(createChip(entry && entry.author || 'Анонім', 'author'));
      head.appendChild(createChip(entry && entry.created_label || 'Невідома дата', 'date'));
      head.appendChild(createChip('Оцінка ' + (entry && entry.score_label || '0'), 'score'));
      if (level > 0) head.appendChild(createChip('Рівень ' + (level + 1), 'level'));
    } else {
      head.appendChild(createChip(entry && entry.author || 'Анонім', 'author'));
      head.appendChild(createChip('Продовження ' + chunkIndex + '/' + chunkCount, 'continuation'));
      if (level > 0) head.appendChild(createChip('Рівень ' + (level + 1), 'level'));
    }
    wrapper.appendChild(head);
    wrapper.appendChild(text);
    itemNode.classList.add('hikka-thread-item');
    itemNode.innerHTML = '';
    itemNode.appendChild(wrapper);
  }
  function buildThreadItems(comment) {
    var entries = Array.isArray(comment && comment.thread_entries) && comment.thread_entries.length ? comment.thread_entries : [{
      author: comment && comment.author || 'Анонім',
      created_label: comment && comment.created_label || '',
      score_label: comment && comment.score_label || '0',
      level: 0,
      text: comment && (comment.comment || comment.text) || ''
    }];
    var items = [];
    entries.forEach(function (entry) {
      var chunks = splitTextToChunks(entry.text, 360);
      chunks.forEach(function (chunk, index) {
        var chunkIndex = index + 1;
        var chunkCount = chunks.length;
        items.push({
          title: ' ',
          subtitle: ' ',
          noenter: true,
          onDraw: function onDraw(item) {
            var node = item && item[0] ? item[0] : item;
            if (!node) return;
            drawThreadItem(node, entry, chunk, index === 0, chunkIndex, chunkCount);
          }
        });
      });
    });
    if (!items.length) {
      items.push({
        title: 'Немає даних',
        subtitle: 'Коментарі відсутні',
        noenter: true
      });
    }
    return items;
  }
  function openThreadSidebar(comment) {
    var previousController = Lampa.Controller.enabled();
    var author = safeText(comment && comment.author) || 'Анонім';
    var repliesCount = Number(comment && comment.replies_count || 0);
    var commentsInThread = Number(comment && comment.thread_comments_count || 0) || repliesCount + 1;
    Lampa.Select.show({
      title: 'Гілка: ' + author,
      items: buildThreadItems(comment),
      nomark: true,
      onFullDraw: function onFullDraw(selectScroll) {
        var body = selectScroll && selectScroll.body ? selectScroll.body(true) : null;
        if (!body) return;
        var panel = document.createElement('div');
        var head = document.createElement('div');
        panel.className = 'hikka-comment-sidebar';
        head.className = 'hikka-comment-sidebar__head';
        head.appendChild(createChip('Коментарів ' + commentsInThread, 'replies'));
        if (repliesCount > 0) {
          head.appendChild(createChip('Відповідей ' + repliesCount, 'replies'));
        }
        panel.appendChild(head);
        body.prepend(panel);
      },
      onBack: function onBack() {
        if (previousController && previousController.name) {
          Lampa.Controller.toggle(previousController.name);
        }
      }
    });
  }
  var HikkaCommentItem = /*#__PURE__*/function () {
    function HikkaCommentItem(data) {
      _classCallCheck(this, HikkaCommentItem);
      this.data = data || {};
      this.html = null;
    }
    return _createClass(HikkaCommentItem, [{
      key: "create",
      value: function create() {
        var _this = this;
        var author = safeText(this.data.author) || 'Анонім';
        var dateLabel = safeText(this.data.created_label) || 'Невідома дата';
        var scoreLabel = safeText(this.data.score_label) || '0';
        var repliesCount = Number(this.data.replies_count || 0);
        var commentsInThread = Number(this.data.thread_comments_count || 0) || repliesCount + 1;
        var text = safeText(this.data.text) || 'Текст коментаря відсутній';
        var root = document.createElement('div');
        var topMeta = document.createElement('div');
        var textNode = document.createElement('div');
        var bottomMeta = document.createElement('div');
        root.className = 'full-review selector layer--visible hikka-comment-card';
        topMeta.className = 'hikka-comment-meta';
        textNode.className = 'full-review__text hikka-comment-card__text';
        bottomMeta.className = 'hikka-comment-card__footer';
        topMeta.appendChild(createChip(author, 'author'));
        topMeta.appendChild(createChip(dateLabel, 'date'));
        textNode.innerHTML = renderMarkdownPreview(text);
        bottomMeta.appendChild(createChip('Оцінка ' + scoreLabel, 'score'));
        bottomMeta.appendChild(createChip('Коментарів ' + commentsInThread, 'replies'));
        root.appendChild(topMeta);
        root.appendChild(textNode);
        root.appendChild(bottomMeta);
        if (typeof root.on === 'function') {
          root.on('hover:enter', function () {
            return openThreadSidebar(_this.data);
          });
        }
        this.html = root;
      }
    }, {
      key: "render",
      value: function render(js) {
        return js ? this.html : $(this.html);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.html) this.html.remove();
      }
    }]);
  }();

  var SEASONS = ['winter', 'spring', 'summer', 'fall'];
  function normalizeDate(date) {
    return date instanceof Date ? date : new Date();
  }
  function getCurrentSeasonYear() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var now = normalizeDate(date);
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    if (month <= 3) return {
      season: 'winter',
      year: year
    };
    if (month <= 6) return {
      season: 'spring',
      year: year
    };
    if (month <= 9) return {
      season: 'summer',
      year: year
    };
    return {
      season: 'fall',
      year: year
    };
  }
  function shiftSeason(source) {
    var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var point = source || getCurrentSeasonYear();
    var index = Math.max(0, SEASONS.indexOf(point.season));
    var current = index + Number(delta || 0);
    var wrapped = (current % SEASONS.length + SEASONS.length) % SEASONS.length;
    var yearsShift = Math.floor((index + Number(delta || 0)) / SEASONS.length);
    return {
      season: SEASONS[wrapped],
      year: Number(point.year || new Date().getFullYear()) + yearsShift
    };
  }
  function buildSeasonYearWindow() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var fromOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var toOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var current = getCurrentSeasonYear(date);
    var start = Math.min(Number(fromOffset || 0), Number(toOffset || 0));
    var end = Math.max(Number(fromOffset || 0), Number(toOffset || 0));
    var result = [];
    for (var offset = start; offset <= end; offset++) {
      var shifted = shiftSeason(current, offset);
      result.push([shifted.season, shifted.year]);
    }
    return result;
  }

  function createBaseFilters() {
    return {
      media_type: [],
      status: [],
      season: [],
      rating: [],
      years: [],
      genres: [],
      studios: [],
      score: [],
      only_translated: false,
      sort: ['score:desc']
    };
  }
  function withBaseFilters(partial) {
    return _objectSpread2(_objectSpread2({}, createBaseFilters()), partial || {});
  }
  function getMainLinePresets() {
    return getComponentLinePresets().map(function (line) {
      return {
        name: line.name.replace('HikkaComponent', 'HikkaMain'),
        title: line.title,
        index: line.index,
        screen: ['main'],
        buildFilters: line.buildFilters
      };
    });
  }
  function getComponentLinePresets() {
    return [{
      name: 'HikkaComponentOngoingUA',
      title: 'Онгоїнги',
      index: 3,
      buildFilters: function buildFilters() {
        return withBaseFilters({
          status: ['ongoing'],
          years: [],
          only_translated: true,
          sort: ['score:desc']
        });
      }
    }, {
      name: 'HikkaComponentFinishedPrevSeasonUA',
      title: 'Минулий сезон',
      index: 4,
      buildFilters: function buildFilters() {
        return withBaseFilters({
          media_type: ['tv', 'ova', 'ona'],
          status: ['finished'],
          years: buildSeasonYearWindow(new Date(), -1, -1),
          only_translated: true,
          sort: ['score:desc']
        });
      }
    }, {
      name: 'HikkaComponentAnnounced',
      title: 'Анонси',
      index: 5,
      buildFilters: function buildFilters() {
        return withBaseFilters({
          media_type: ['tv', 'movie', 'ona'],
          status: ['announced'],
          years: buildSeasonYearWindow(new Date(), 0, 1),
          only_translated: false,
          sort: ['start_date:asc']
        });
      }
    }, {
      name: 'HikkaComponentTopMoviesUA',
      title: 'Високо оцінені фільми',
      index: 6,
      buildFilters: function buildFilters() {
        return withBaseFilters({
          media_type: ['movie'],
          years: [],
          score: ['7', '10'],
          only_translated: true,
          sort: ['start_date:desc']
        });
      }
    }];
  }

  var characterVoicesCache = new Map();
  var personAnimeCache = new Map();
  var personDetailsCache = new Map();
  function toArray(value) {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === '') return [];
    return [value];
  }
  function decodeQuery$1(value) {
    if (typeof value !== 'string') return '';
    if (!value.trim()) return '';
    try {
      return decodeURIComponent(value).trim();
    } catch (e) {
      return value.trim();
    }
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
      score: [],
      only_translated: false,
      sort: ['score:desc'],
      query: ''
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
      if (incoming.score !== undefined) filters.score = toArray(incoming.score);
      if (incoming.only_translated !== undefined) filters.only_translated = !!incoming.only_translated;
      if (incoming.sort !== undefined) filters.sort = toArray(incoming.sort);
      if (incoming.query !== undefined) filters.query = String(incoming.query || '');
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
            if (parsed.score !== undefined) filters.score = toArray(parsed.score);
            if (parsed.only_translated !== undefined) filters.only_translated = !!parsed.only_translated;
            if (parsed.sort !== undefined) filters.sort = toArray(parsed.sort);
            if (parsed.query !== undefined) filters.query = String(parsed.query || '');
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
        if (_parsed.score !== undefined) filters.score = toArray(_parsed.score);
        if (_parsed.only_translated !== undefined) filters.only_translated = !!_parsed.only_translated;
        if (_parsed.sort !== undefined) filters.sort = toArray(_parsed.sort);
        if (_parsed.query !== undefined) filters.query = String(_parsed.query || '');
      }
    }
    if (params.media_type) filters.media_type = toArray(params.media_type);
    if (params.status) filters.status = toArray(params.status);
    if (params.season) filters.season = toArray(params.season);
    if (params.rating) filters.rating = toArray(params.rating);
    if (params.years) filters.years = toArray(params.years);
    if (params.genres) filters.genres = toArray(params.genres);
    if (params.studios) filters.studios = toArray(params.studios);
    if (params.score) filters.score = toArray(params.score);
    if (!filters.studios.length && params.companies) filters.studios = toArray(params.companies);
    if (!filters.studios.length && params.company) filters.studios = toArray(params.company);
    if (params.only_translated !== undefined) filters.only_translated = !!params.only_translated;
    if (params.sort !== undefined) filters.sort = toArray(params.sort);
    if (params.query !== undefined) filters.query = decodeQuery$1(params.query);
    if (!filters.media_type.length && params.url) {
      var allowedMedia = ['movie', 'tv', 'ova', 'ona', 'special', 'music'];
      if (allowedMedia.indexOf(params.url) !== -1) filters.media_type = [params.url];
    }
    return filters;
  }
  function decorateDiscussResult(discuss) {
    if (!discuss || !Array.isArray(discuss.result)) return discuss;
    discuss.result = discuss.result.map(function (comment) {
      var params = comment && comment.params && _typeof(comment.params) === 'object' ? comment.params : {};
      params.createInstance = function (item) {
        return new HikkaCommentItem(item);
      };
      return _objectSpread2(_objectSpread2({}, comment), {}, {
        params: params
      });
    });
    return discuss;
  }
  function pickPersonName(person) {
    return person && (person.name_ua || person.name_en || person.name_native || person.name) || '—';
  }
  function pickCharacterName(character) {
    return character && (character.name_ua || character.name_en || character.name_ja || character.name) || 'Персонаж';
  }
  function pickAnimeTitle(anime) {
    return anime && (anime.title_ua || anime.title_en || anime.title_ja || anime.name) || '';
  }
  function formatDateFromUnix(timestamp) {
    var value = Number(timestamp || 0);
    if (!value) return undefined;
    var date = new Date(value * 1000);
    if (Number.isNaN(date.getTime())) return undefined;
    return date.toISOString().slice(0, 10);
  }
  function normalizeEpisodeDate(episode) {
    var aired = Number(episode && (episode.aired || episode.airing_at || episode.air_date) || 0);
    if (aired > 0) return formatDateFromUnix(aired);
    var airDate = String(episode && episode.air_date || '').trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(airDate)) return airDate.slice(0, 10);
    return undefined;
  }
  function normalizeEpisodeIndex(episode, fallbackIndex) {
    var value = Number(episode && (episode.index || episode.number || episode.episode_number || episode.episode) || 0);
    if (value > 0) return value;
    return Number(fallbackIndex || 0) + 1;
  }
  function normalizeEpisodeTitle(episode, episodeNumber) {
    var title = episode && (episode.title_ua || episode.title_ja || episode.title_en || episode.name) || '';
    return title || 'Епізод ' + episodeNumber;
  }
  function extractSeasonNumberFromText(value) {
    var text = String(value || '').trim();
    if (!text) return 0;
    var patterns = [/\bseason[\s._-]*([0-9]{1,2})\b/i, /\b([0-9]{1,2})(?:st|nd|rd|th)?[\s._-]*season\b/i, /\bсезон[\s._-]*([0-9]{1,2})\b/i, /\b([0-9]{1,2})[\s._-]*(?:й|ий|ій)?[\s._-]*сезон\b/i, /(?:^|[-_])season[-_]*([0-9]{1,2})(?:$|[-_])/i, /(?:^|[-_])([0-9]{1,2})(?:st|nd|rd|th)?[-_]*season(?:$|[-_])/i];
    for (var i = 0; i < patterns.length; i++) {
      var match = text.match(patterns[i]);
      if (!match || !match[1]) continue;
      var number = Number(match[1]);
      if (number > 0) return number;
    }
    return 0;
  }
  function inferSeasonNumber(details) {
    var numericValue = Number(details && (details.season_number || details.season) || 0);
    if (numericValue > 0) return numericValue;
    var candidates = [details && details.title_ua, details && details.title_en, details && details.title_ja, details && details.name, details && details.slug];
    for (var i = 0; i < candidates.length; i++) {
      var parsed = extractSeasonNumberFromText(candidates[i]);
      if (parsed > 0) return parsed;
    }
    return 1;
  }
  function normalizeEpisodeImageFields(entry, fallbackImage) {
    var raw = entry && (entry.image || entry.still_path) || fallbackImage || null;
    if (!raw) return {
      still_path: null,
      img: null
    };
    var image = String(raw).trim();
    if (!image) return {
      still_path: null,
      img: null
    };
    if (/^(https?:)?\/\//i.test(image) || /^data:image\//i.test(image)) {
      return {
        still_path: null,
        img: image
      };
    }
    if (image.charAt(0) === '/') {
      return {
        still_path: image,
        img: null
      };
    }
    return {
      still_path: null,
      img: image
    };
  }
  function buildEpisodesPayloadFromApi(episodes, details, image) {
    var source = Array.isArray(episodes) ? episodes : [];
    if (!source.length) return null;
    var byEpisode = {};
    var seasonNumber = inferSeasonNumber(details);
    source.forEach(function (entry, index) {
      var episodeNumber = normalizeEpisodeIndex(entry, index);
      if (!episodeNumber) return;
      var imageFields = normalizeEpisodeImageFields(entry, image);
      if (!byEpisode[episodeNumber]) {
        byEpisode[episodeNumber] = {
          id: 'hikka_ep_' + episodeNumber,
          episode_number: episodeNumber,
          season_number: seasonNumber,
          air_date: normalizeEpisodeDate(entry),
          name: normalizeEpisodeTitle(entry, episodeNumber),
          overview: String(entry && (entry.synopsis_ua || entry.synopsis_en || entry.overview) || ''),
          still_path: imageFields.still_path,
          img: imageFields.img
        };
      }
    });
    var mapped = Object.keys(byEpisode).map(function (key) {
      return byEpisode[key];
    }).sort(function (a, b) {
      return Number(a.episode_number || 0) - Number(b.episode_number || 0);
    });
    if (!mapped.length) return null;
    return {
      name: 'Season ' + seasonNumber,
      episodes: mapped
    };
  }
  function normalizeEpisodeSeasonNumber(episode, details, fallbackSeasonNumber) {
    var directSeason = Number(episode && (episode.season || episode.season_number) || 0);
    if (directSeason > 0) return directSeason;
    var candidates = [episode && episode.title_ua, episode && episode.title_en, episode && episode.title_ja, episode && episode.name, episode && episode.slug];
    for (var i = 0; i < candidates.length; i++) {
      var parsed = extractSeasonNumberFromText(candidates[i]);
      if (parsed > 0) return parsed;
    }
    var inferred = inferSeasonNumber(details);
    if (inferred > 0) return inferred;
    return Number(fallbackSeasonNumber || 1);
  }
  function createSeasonPayload(seasonNumber, seasonsCount) {
    var safeSeason = Number(seasonNumber || 1) || 1;
    var safeCount = Math.max(Number(seasonsCount || 0), safeSeason);
    return {
      id: 'hikka_season_' + safeSeason,
      name: 'Season ' + safeSeason,
      season_number: safeSeason,
      overview: '',
      air_date: '',
      vote_average: 0,
      episodes: [],
      seasons_count: safeCount
    };
  }
  function buildSeasonsPayloadFromEpisodes(episodes, details, image) {
    var source = Array.isArray(episodes) ? episodes : [];
    var fallbackSeasonNumber = inferSeasonNumber(details);
    var bySeason = {};
    source.forEach(function (entry, index) {
      var episodeNumber = normalizeEpisodeIndex(entry, index);
      if (!episodeNumber) return;
      var seasonNumber = normalizeEpisodeSeasonNumber(entry, details, fallbackSeasonNumber);
      if (!bySeason[seasonNumber]) bySeason[seasonNumber] = {};
      if (bySeason[seasonNumber][episodeNumber]) return;
      var imageFields = normalizeEpisodeImageFields(entry, image);
      bySeason[seasonNumber][episodeNumber] = {
        id: 'hikka_ep_' + seasonNumber + '_' + episodeNumber,
        episode_number: episodeNumber,
        season_number: seasonNumber,
        air_date: normalizeEpisodeDate(entry),
        name: normalizeEpisodeTitle(entry, episodeNumber),
        overview: String(entry && (entry.synopsis_ua || entry.synopsis_en || entry.overview) || ''),
        still_path: imageFields.still_path,
        img: imageFields.img
      };
    });
    var seasonNumbers = Object.keys(bySeason).map(function (key) {
      return Number(key);
    }).filter(function (number) {
      return number > 0;
    }).sort(function (a, b) {
      return a - b;
    });
    var detailsSeasonsCount = Number(details && details.seasons_count) || 0;
    var seasonsCount = Math.max(detailsSeasonsCount, seasonNumbers.length, fallbackSeasonNumber || 1);
    var map = {};
    seasonNumbers.forEach(function (seasonNumber) {
      var episodesMap = bySeason[seasonNumber] || {};
      var episodesList = Object.keys(episodesMap).map(function (key) {
        return episodesMap[key];
      }).sort(function (a, b) {
        return Number(a.episode_number || 0) - Number(b.episode_number || 0);
      });
      var seasonPayload = createSeasonPayload(seasonNumber, seasonsCount);
      seasonPayload.episodes = episodesList;
      map[seasonNumber] = seasonPayload;
    });
    return {
      map: map,
      seasonNumbers: seasonNumbers,
      seasonsCount: seasonsCount
    };
  }
  function buildRequestedSeasonsPayload(from, grouped, details, tv) {
    var requested = Array.isArray(from) && from.length ? from : [0];
    var groupedMap = grouped && grouped.map ? grouped.map : {};
    var groupedSeasonNumbers = grouped && Array.isArray(grouped.seasonNumbers) ? grouped.seasonNumbers : [];
    var groupedSeasonsCount = Number(grouped && grouped.seasonsCount) || 0;
    var detailsSeasonsCount = Number(details && details.seasons_count) || 0;
    var cardSeasonsCount = Number(tv && tv.number_of_seasons) || 0;
    var inferredSeason = inferSeasonNumber(details) || 1;
    var availableLastSeason = groupedSeasonNumbers.length ? groupedSeasonNumbers[groupedSeasonNumbers.length - 1] : 0;
    var fallbackSeason = availableLastSeason || detailsSeasonsCount || cardSeasonsCount || inferredSeason || 1;
    var seasonsCount = Math.max(groupedSeasonsCount, groupedSeasonNumbers.length, detailsSeasonsCount, cardSeasonsCount, fallbackSeason);
    var result = {};
    requested.forEach(function (value) {
      var numericRequest = Number(value);
      var requestedSeason = numericRequest > 0 ? numericRequest : fallbackSeason;
      var payload = groupedMap[requestedSeason] ? _objectSpread2(_objectSpread2({}, groupedMap[requestedSeason]), {}, {
        seasons_count: seasonsCount
      }) : createSeasonPayload(requestedSeason, seasonsCount);
      var requestKey = String(value);
      var seasonKey = String(requestedSeason);
      result[requestKey] = payload;
      if (requestKey !== seasonKey && !result[seasonKey]) {
        result[seasonKey] = payload;
      }
    });
    return result;
  }
  function applyEpisodesStatsToCard(card, episodesPayload) {
    if (!card || !episodesPayload || !Array.isArray(episodesPayload.episodes)) return;
    var list = episodesPayload.episodes;
    var now = Date.now();
    var released = 0;
    var nextEpisode = null;
    list.forEach(function (item) {
      var airDate = item && item.air_date ? new Date(item.air_date + 'T00:00:00').getTime() : NaN;
      if (Number.isNaN(airDate)) return;
      if (airDate <= now) {
        released++;
      } else if (!nextEpisode || airDate < nextEpisode.time) {
        nextEpisode = {
          time: airDate,
          air_date: item.air_date + ' 00:00:00',
          episode_number: item.episode_number
        };
      }
    });
    if (!card.number_of_episodes) card.number_of_episodes = list.length;
    if (!card.episodes_total) card.episodes_total = list.length;
    if (!card.episodes_released) card.episodes_released = released;
    if (!card.next_episode_to_air && nextEpisode) {
      card.next_episode_to_air = {
        air_date: nextEpisode.air_date,
        episode_number: nextEpisode.episode_number
      };
    }
  }
  function loadAllAnimeEpisodes(slug, oncomplite, onerror) {
    var pageSize = 100;
    var maxPages = 20;
    var all = [];
    var page = 1;
    var _next = function next() {
      Api.getAnimeEpisodes(slug, page, pageSize, function (data) {
        var list = Array.isArray(data && data.list) ? data.list : [];
        var pages = Math.max(1, Number(data && data.pagination && data.pagination.pages) || 1);
        list.forEach(function (item) {
          return all.push(item);
        });
        if (page < pages && page < maxPages) {
          page++;
          _next();
          return;
        }
        oncomplite(all);
      }, function (err) {
        if (page === 1) {
          onerror && onerror(err);
          return;
        }
        oncomplite(all);
      });
    };
    _next();
  }
  function mapPersonAnimeCard(entry, index) {
    var anime = entry && entry.anime || null;
    if (!anime) return null;
    var mediaTypeRaw = String(anime.media_type || 'tv').toLowerCase();
    var mediaType = mediaTypeRaw || 'tv';
    var isMovie = mediaType === 'movie';
    var title = pickAnimeTitle(anime);
    var yearDate = anime.year ? anime.year + '-01-01' : undefined;
    var startDate = formatDateFromUnix(anime.start_date);
    var dateValue = startDate || yearDate;
    var roleLabels = Array.isArray(entry && entry.roles) ? entry.roles.map(function (role) {
      return role && (role.name_ua || role.name_en);
    }).filter(Boolean) : [];
    return {
      id: anime.slug || 'hikka_person_anime_' + index,
      hikka_slug: anime.slug,
      title: title || '—',
      name: !isMovie ? title || '—' : undefined,
      original_title: anime.title_en || anime.title_ja || anime.title_ua || title || '',
      original_name: !isMovie ? anime.title_en || anime.title_ja || anime.title_ua || title || '' : null,
      poster_path: null,
      backdrop_path: null,
      poster: anime.image || null,
      img: anime.image || null,
      media_type: mediaType,
      vote_average: anime.score || anime.native_score || 0,
      release_date: isMovie ? dateValue : undefined,
      first_air_date: !isMovie ? dateValue : undefined,
      source: 'hikka',
      character: roleLabels.join(', ')
    };
  }
  function normalizePersonMediaType(value) {
    var type = String(value || 'tv').toLowerCase();
    var allowed = ['tv', 'movie', 'ona', 'ova', 'special', 'music'];
    if (allowed.indexOf(type) !== -1) return type;
    return 'other';
  }
  function getPersonMediaTypeLabel(type) {
    var labels = {
      tv: 'TV',
      movie: 'Movie',
      ona: 'ONA',
      ova: 'OVA',
      special: 'Special',
      music: 'Music',
      other: 'Інше'
    };
    return labels[type] || labels.other;
  }
  function getPersonMediaTypeOrder(type) {
    var order = {
      tv: 0,
      movie: 1,
      ona: 2,
      ova: 3,
      special: 4,
      music: 5,
      other: 6
    };
    return order[type] !== undefined ? order[type] : 99;
  }
  function collectCharacterVoices(characterSlug, animeSlug, oncomplite) {
    if (!characterSlug) {
      oncomplite([]);
      return;
    }
    var cacheKey = characterSlug + '::' + animeSlug;
    if (characterVoicesCache.has(cacheKey)) {
      oncomplite(characterVoicesCache.get(cacheKey) || []);
      return;
    }
    var pageSize = 20;
    var filterForAnime = function filterForAnime(list) {
      var safeList = Array.isArray(list) ? list : [];
      return safeList.filter(function (item) {
        return item && item.anime && item.anime.slug === animeSlug;
      });
    };
    Api.getCharacterVoices(characterSlug, 1, pageSize, function (firstPage) {
      var firstList = Array.isArray(firstPage && firstPage.list) ? firstPage.list : [];
      var pages = Math.max(1, Number(firstPage && firstPage.pagination && firstPage.pagination.pages) || 1);
      var firstMatched = filterForAnime(firstList);
      if (firstMatched.length) {
        characterVoicesCache.set(cacheKey, firstMatched);
        oncomplite(firstMatched);
        return;
      }
      if (pages <= 1) {
        characterVoicesCache.set(cacheKey, firstList);
        oncomplite(firstList);
        return;
      }
      var page = 2;
      var _scanNextPage = function scanNextPage() {
        if (page > pages) {
          characterVoicesCache.set(cacheKey, firstList);
          oncomplite(firstList);
          return;
        }
        Api.getCharacterVoices(characterSlug, page, pageSize, function (nextPage) {
          var list = Array.isArray(nextPage && nextPage.list) ? nextPage.list : [];
          var matched = filterForAnime(list);
          if (matched.length) {
            characterVoicesCache.set(cacheKey, matched);
            oncomplite(matched);
            return;
          }
          page++;
          _scanNextPage();
        }, function () {
          page++;
          _scanNextPage();
        });
      };
      _scanNextPage();
    }, function () {
      characterVoicesCache.set(cacheKey, []);
      oncomplite([]);
    });
  }
  function buildVoiceCastFromCharacters(characters, animeSlug, oncomplite) {
    var sourceList = Array.isArray(characters) ? characters : [];
    if (!sourceList.length) {
      oncomplite([]);
      return;
    }
    var prepared = sourceList.map(function (item, position) {
      return _objectSpread2(_objectSpread2({}, item), {}, {
        __characterOrder: position
      });
    }).filter(function (item) {
      return item && item.character && item.character.slug;
    }).sort(function (a, b) {
      var mainDiff = Number(!!(b && b.main)) - Number(!!(a && a.main));
      if (mainDiff !== 0) return mainDiff;
      return Number(a && a.__characterOrder || 0) - Number(b && b.__characterOrder || 0);
    }).slice(0, 24);
    if (!prepared.length) {
      oncomplite([]);
      return;
    }
    var actorMap = {};
    var index = 0;
    var active = 0;
    var maxParallel = 4;
    var appendFromVoices = function appendFromVoices(characterItem, voices) {
      var character = characterItem && characterItem.character ? characterItem.character : {};
      var characterName = pickCharacterName(character);
      var isMain = !!(characterItem && characterItem.main);
      var rawCharacterOrder = Number(characterItem && characterItem.__characterOrder);
      var characterOrder = Number.isFinite(rawCharacterOrder) ? rawCharacterOrder : 9999;
      var list = Array.isArray(voices) ? voices : [];
      list.forEach(function (voice) {
        var person = voice && voice.person || {};
        var personSlug = person.slug;
        if (!personSlug) return;
        var languageRaw = String(voice && voice.language || 'unknown').toLowerCase();
        var language = languageRaw || 'unknown';
        var key = personSlug + '::' + language;
        if (!actorMap[key]) {
          actorMap[key] = {
            id: personSlug,
            slug: personSlug,
            name: pickPersonName(person),
            image: person.image || null,
            language: language,
            characters: [],
            mainCount: 0,
            hasMainCharacter: false,
            firstCharacterOrder: characterOrder
          };
        }
        var row = actorMap[key];
        var exists = row.characters.some(function (item) {
          return item.name === characterName;
        });
        if (!exists) {
          row.characters.push({
            name: characterName,
            main: isMain,
            order: characterOrder
          });
        }
        if (isMain) {
          row.mainCount++;
          row.hasMainCharacter = true;
        }
        if (characterOrder < Number(row.firstCharacterOrder || 9999)) {
          row.firstCharacterOrder = characterOrder;
        }
      });
    };
    var buildCast = function buildCast() {
      var cast = Object.keys(actorMap).map(function (key) {
        var row = actorMap[key];
        var orderedCharacters = row.characters.slice().sort(function (a, b) {
          var mainDiff = Number(!!b.main) - Number(!!a.main);
          if (mainDiff !== 0) return mainDiff;
          return Number(a.order || 9999) - Number(b.order || 9999);
        }).map(function (item) {
          return item.name;
        });
        var preview = orderedCharacters.slice(0, 2);
        var tailCount = orderedCharacters.length > 2 ? orderedCharacters.length - 2 : 0;
        var previewText = preview.join(', ') + (tailCount > 0 ? ' +' + tailCount : '');
        var languageLabel = row.language && row.language !== 'unknown' ? row.language.toUpperCase() : '';
        var roleParts = [];
        if (languageLabel) roleParts.push(languageLabel);
        if (previewText) roleParts.push(previewText);
        return {
          id: row.id,
          name: row.name,
          character: roleParts.join(' • ') || 'Актор озвучки',
          known_for_department: 'Acting',
          profile_path: null,
          img: row.image,
          source: 'hikka',
          gender: 0,
          voice_language: languageLabel || '—',
          voice_characters_count: orderedCharacters.length,
          voice_characters: orderedCharacters,
          __sort_weight: row.mainCount * 100 + orderedCharacters.length,
          __has_main_character: row.hasMainCharacter ? 1 : 0,
          __first_character_order: Number(row.firstCharacterOrder || 9999)
        };
      });
      cast.sort(function (a, b) {
        var mainCharacterDiff = Number(b.__has_main_character || 0) - Number(a.__has_main_character || 0);
        if (mainCharacterDiff !== 0) return mainCharacterDiff;
        var characterOrderDiff = Number(a.__first_character_order || 9999) - Number(b.__first_character_order || 9999);
        if (characterOrderDiff !== 0) return characterOrderDiff;
        var scoreDiff = Number(b.__sort_weight || 0) - Number(a.__sort_weight || 0);
        if (scoreDiff !== 0) return scoreDiff;
        return String(a.name || '').localeCompare(String(b.name || ''), 'uk');
      });
      cast.forEach(function (item) {
        delete item.__sort_weight;
        delete item.__has_main_character;
        delete item.__first_character_order;
      });
      oncomplite(cast.slice(0, 30));
    };
    var _runQueue = function runQueue() {
      if (index >= prepared.length && active <= 0) {
        buildCast();
        return;
      }
      var _loop = function _loop() {
        var current = prepared[index++];
        var characterSlug = current && current.character ? current.character.slug : null;
        active++;
        collectCharacterVoices(characterSlug, animeSlug, function (voices) {
          appendFromVoices(current, voices);
          active--;
          _runQueue();
        });
      };
      while (active < maxParallel && index < prepared.length) {
        _loop();
      }
    };
    _runQueue();
  }
  function loadAllPersonAnime(personSlug, oncomplite) {
    if (!personSlug) {
      oncomplite([]);
      return;
    }
    if (personAnimeCache.has(personSlug)) {
      oncomplite(personAnimeCache.get(personSlug) || []);
      return;
    }
    var pageSize = 20;
    var all = [];
    var _loadPage = function loadPage(page) {
      Api.getPersonAnime(personSlug, page, pageSize, function (data) {
        var list = Array.isArray(data && data.list) ? data.list : [];
        var pages = Math.max(1, Number(data && data.pagination && data.pagination.pages) || 1);
        list.forEach(function (item) {
          all.push(item);
        });
        if (page < pages) {
          _loadPage(page + 1);
        } else {
          personAnimeCache.set(personSlug, all);
          oncomplite(all);
        }
      }, function () {
        personAnimeCache.set(personSlug, all);
        oncomplite(all);
      });
    };
    _loadPage(1);
  }
  function buildPersonPayload(personData, animeEntries) {
    var person = personData || {};
    var name = pickPersonName(person);
    var animeList = Array.isArray(animeEntries) ? animeEntries : [];
    var bySlug = {};
    animeList.forEach(function (entry, index) {
      var card = mapPersonAnimeCard(entry, index);
      if (!card) return;
      var slug = card.hikka_slug || card.id || 'person_anime_' + index;
      if (!bySlug[slug]) {
        bySlug[slug] = _objectSpread2(_objectSpread2({}, card), {}, {
          __roles: []
        });
      }
      if (card.character && bySlug[slug].__roles.indexOf(card.character) === -1) {
        bySlug[slug].__roles.push(card.character);
      }
    });
    var credits = Object.keys(bySlug).map(function (slug) {
      var item = bySlug[slug];
      if (item.__roles && item.__roles.length) {
        item.character = item.__roles.join(', ');
      }
      delete item.__roles;
      return item;
    });
    var groupedCredits = {};
    credits.forEach(function (item) {
      var type = normalizePersonMediaType(item && item.media_type);
      if (!groupedCredits[type]) groupedCredits[type] = [];
      groupedCredits[type].push(item);
    });
    var knownFor = Object.keys(groupedCredits).map(function (type) {
      return {
        type: type,
        name: getPersonMediaTypeLabel(type),
        credits: groupedCredits[type]
      };
    }).filter(function (section) {
      return Array.isArray(section.credits) && section.credits.length;
    }).sort(function (a, b) {
      var byCount = Number(b.credits.length || 0) - Number(a.credits.length || 0);
      if (byCount !== 0) return byCount;
      var byOrder = getPersonMediaTypeOrder(a.type) - getPersonMediaTypeOrder(b.type);
      if (byOrder !== 0) return byOrder;
      return String(a.name || '').localeCompare(String(b.name || ''), 'uk');
    }).map(function (section) {
      return {
        name: section.name,
        credits: section.credits
      };
    });
    var stats = [];
    if (typeof person.anime_count === 'number') stats.push('Аніме: ' + person.anime_count);
    if (typeof person.characters_count === 'number') stats.push('Персонажів: ' + person.characters_count);
    if (typeof person.comments_count === 'number' && person.comments_count > 0) {
      stats.push('Коментарів: ' + person.comments_count);
    }
    var statsLine = stats.join(' • ');
    var description = person.description_ua || person.description_en || '';
    var biography = statsLine ? description ? statsLine + '\n\n' + description : statsLine : description;
    return {
      person: {
        id: person.slug || '',
        slug: person.slug || '',
        name: name || '—',
        profile_path: null,
        img: person.image || null,
        biography: biography || '',
        birthday: person.birthday || null,
        place_of_birth: person.place_of_birth || null,
        known_for_department: 'Acting',
        source: 'hikka'
      },
      credits: {
        knownFor: knownFor
      }
    };
  }
  function buildGenreLinePresets(genres, startIndex) {
    var list = Array.isArray(genres) ? genres : [];
    var filtered = list.filter(function (item) {
      return item && item.slug && item.type === 'genre';
    }).sort(function (a, b) {
      var aPriority = a.slug === 'award-winning' ? 0 : 1;
      var bPriority = b.slug === 'award-winning' ? 0 : 1;
      if (aPriority !== bPriority) return aPriority - bPriority;
      return 0;
    });
    return filtered.map(function (genre, index) {
      var slug = genre.slug;
      var title = genre.name_ua || genre.name_en || genre.name || slug;
      return {
        name: 'HikkaComponentGenre_' + slug,
        title: title,
        index: Number(startIndex || 0) + index,
        buildFilters: function buildFilters() {
          return buildFiltersFromParams({
            filters: {
              genres: [slug],
              score: ['7', '10'],
              only_translated: true,
              sort: ['start_date:desc', 'score:desc']
            }
          });
        }
      };
    });
  }
  function mapFranchiseResults(rel) {
    var rawList = Array.isArray(rel && rel.anime) ? rel.anime : Array.isArray(rel && rel.list) ? rel.list : [];
    var sorted = rawList.slice().sort(function (a, b) {
      var yearA = Number(a && a.year || 0);
      var yearB = Number(b && b.year || 0);
      if (yearB !== yearA) return yearB - yearA;
      var startA = Number(a && a.start_date || 0);
      var startB = Number(b && b.start_date || 0);
      if (startB !== startA) return startB - startA;
      return 0;
    });
    return sorted.map(function (item, idx) {
      var mediaTypeRaw = String(item && item.media_type || 'tv').toLowerCase();
      var mediaType = mediaTypeRaw || 'tv';
      var year = item && item.year;
      var startDate = item && item.start_date ? new Date(item.start_date * 1000).toISOString().slice(0, 10) : undefined;
      return {
        id: item.slug || 'fr_' + idx,
        hikka_slug: item.slug || 'fr_' + idx,
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
        // Для нормального TV-style картки залишаємо non-movie original_name,
        // а лейбл типу оновимо в CardRenderer.
        original_name: mediaType === 'movie' ? null : item.title_en || item.title_ja || item.title_ua || '',
        source: 'hikka',
        hikka_collection: true,
        hikka_media_type_label: mediaType.toUpperCase()
      };
    }).slice(0, 19);
  }
  function pickStaffRoleLabel(entry) {
    var roles = Array.isArray(entry && entry.roles) ? entry.roles : [];
    var labels = roles.map(function (role) {
      return role && (role.name_ua || role.name_en || role.name);
    }).filter(Boolean);
    if (labels.length) return labels.slice(0, 2).join(', ');
    var direct = entry && (entry.role_ua || entry.role_en || entry.role || entry.department) || '';
    return String(direct || '').trim();
  }
  function mapStaffToCrew(list) {
    var source = Array.isArray(list) ? list : [];
    var byPerson = {};
    source.forEach(function (entry, index) {
      var person = entry && entry.person || entry || {};
      var slug = person.slug || 'hikka_staff_' + index;
      var role = pickStaffRoleLabel(entry) || 'Автор';
      if (!byPerson[slug]) {
        byPerson[slug] = {
          id: slug,
          name: pickPersonName(person),
          character: role,
          known_for_department: 'Production',
          profile_path: null,
          img: person.image || null,
          source: 'hikka',
          gender: 0,
          // Full будує staff-лайн тільки для job === 'Director'
          job: 'Director'
        };
        return;
      }
      var prev = String(byPerson[slug].character || '');
      if (prev.indexOf(role) === -1) {
        byPerson[slug].character = prev ? prev + ', ' + role : role;
      }
    });
    return Object.keys(byPerson).map(function (key) {
      return byPerson[key];
    }).slice(0, 24);
  }
  function buildStaffLoadingPlaceholder(slug) {
    return [{
      id: 'hikka_lazy_staff_loading_' + slug,
      name: 'Завантаження авторів...',
      character: 'Триває завантаження',
      known_for_department: 'Production',
      profile_path: null,
      img: null,
      source: 'hikka',
      gender: 0,
      job: 'Director',
      hikka_lazy_type: 'staff',
      hikka_lazy_slug: slug,
      hikka_lazy_loaded: false,
      params: {
        emit: {
          onlyEnter: function onlyEnter() {}
        }
      }
    }];
  }
  function buildCastLoadingPlaceholder(slug) {
    return [{
      id: 'hikka_lazy_cast_loading_' + slug,
      name: 'Завантаження акторів...',
      character: 'Триває завантаження',
      known_for_department: 'Acting',
      profile_path: null,
      img: null,
      source: 'hikka',
      gender: 0,
      hikka_lazy_type: 'cast',
      hikka_lazy_slug: slug,
      hikka_lazy_loaded: false,
      params: {
        emit: {
          onlyEnter: function onlyEnter() {}
        }
      }
    }];
  }
  function buildDiscussLoadingPlaceholder(slug) {
    var discuss = decorateDiscussResult({
      page: 1,
      total_pages: 1,
      total_results: 1,
      result: [{
        id: 'hikka_lazy_discuss_loading_' + slug,
        text: 'Завантаження коментарів...',
        comment: 'Завантаження коментарів...',
        author: 'Hikka',
        created_label: '',
        score: 0,
        score_label: '0',
        replies_count: 0,
        thread_comments_count: 1,
        thread_entries: [],
        source: 'hikka',
        hikka_lazy_placeholder: true,
        hikka_lazy_type: 'discuss',
        hikka_lazy_slug: slug,
        hikka_lazy_loaded: false
      }]
    });
    discuss.hikka_lazy_type = 'discuss';
    discuss.hikka_lazy_slug = slug;
    discuss.hikka_lazy_loaded = false;
    return discuss;
  }
  function buildFranchiseLoadingPlaceholder(slug) {
    return {
      title: 'Франшиза',
      results: [{
        id: 'hikka_lazy_franchise_loading_' + slug,
        title: 'Завантаження...',
        original_title: '',
        poster_path: null,
        backdrop_path: null,
        poster: null,
        img: null,
        vote_average: 0,
        media_type: 'tv',
        source: 'hikka',
        hikka_lazy_placeholder: true,
        hikka_lazy_type: 'franchise',
        hikka_lazy_slug: slug,
        hikka_lazy_loaded: false,
        params: {
          emit: {
            onlyEnter: function onlyEnter() {}
          }
        }
      }],
      total_pages: 1,
      page: 1,
      hikka_lazy_type: 'franchise',
      hikka_lazy_slug: slug,
      hikka_lazy_loaded: false
    };
  }
  function buildRowFromPreset(preset, filters, data) {
    return {
      title: preset.title,
      url: '',
      source: 'hikka',
      filter: JSON.stringify(filters),
      filters: filters,
      results: data && Array.isArray(data.results) ? data.results : [],
      total_pages: data && data.total_pages ? data.total_pages : 1,
      page: 1
    };
  }
  function loadPresetChunk(state, onloaded, onempty) {
    var presets = state && Array.isArray(state.presets) ? state.presets : [];
    var chunkSize = Number(state && state.chunkSize) > 0 ? Number(state.chunkSize) : 3;
    if (!presets.length || state.cursor >= presets.length) {
      if (onempty) onempty();
      return;
    }
    var chunk = presets.slice(state.cursor, state.cursor + chunkSize);
    state.cursor += chunk.length;
    var pending = chunk.length;
    var rows = [];
    var done = function done() {
      pending--;
      if (pending > 0) return;
      if (rows.length) {
        onloaded && onloaded(rows);
        return;
      }

      // Пропускаємо порожні чанки, але не завершуємо завчасно всю послідовність.
      loadPresetChunk(state, onloaded, onempty);
    };
    chunk.forEach(function (preset) {
      var filters = typeof preset.buildFilters === 'function' ? preset.buildFilters() : buildFiltersFromParams({
        filters: preset.filters || {}
      });
      Api.getAnimeListWithFilters(filters, 1, function (data) {
        var row = buildRowFromPreset(preset, filters, data);
        if (Array.isArray(row.results) && row.results.length) rows.push(row);
        done();
      }, function (err) {
        console.log('[Hikka] main row error:', err);
        done();
      });
    });
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
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var basePresets = getComponentLinePresets();
        if (!basePresets.length) {
          if (onerror) onerror('Hikka main: no presets');
          return;
        }
        var shouldAppendGenreLines = params && params.component === 'hikka_anime';
        var chunkSize = shouldAppendGenreLines ? 2 : 3;
        var state = {
          presets: [],
          cursor: 0,
          chunkSize: chunkSize
        };
        var loadPart = function loadPart(partLoaded, partEmpty) {
          loadPresetChunk(state, partLoaded, partEmpty);
        };
        var loadInitial = function loadInitial() {
          loadPart(oncomplite, function () {
            if (onerror) onerror('Hikka main: empty');else oncomplite && oncomplite([]);
          });
        };
        var setPresetsAndStart = function setPresetsAndStart(presets) {
          state.presets = Array.isArray(presets) ? presets : [];
          state.cursor = 0;
          loadInitial();
        };
        if (!shouldAppendGenreLines) {
          setPresetsAndStart(basePresets);
        } else {
          Api.getGenres(function (data) {
            var genres = Array.isArray(data && data.list) ? data.list : [];
            var genrePresets = buildGenreLinePresets(genres, basePresets.length);
            setPresetsAndStart(basePresets.concat(genrePresets));
          }, function () {
            setPresetsAndStart(basePresets);
          });
        }
        return function (resolve, reject) {
          loadPart(resolve, reject);
        };
      } catch (e) {
        console.log('[Hikka] main exception:', e);
        if (onerror) onerror(e);
      }
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
          var finalize = function finalize() {
            applyEpisodesStatsToCard(payload.card, payload.episodes);

            // Base data object expected by Full
            var data = {
              movie: payload.card,
              episodes: payload.episodes || null,
              // Ensure countries array exists at top-level to avoid join errors in Full
              countries: Array.isArray(payload.card && payload.card.countries) ? payload.card.countries : [],
              // Sections to be filled below
              persons: {
                cast: buildCastLoadingPlaceholder(slug),
                crew: buildStaffLoadingPlaceholder(slug)
              },
              collection: buildFranchiseLoadingPlaceholder(slug),
              recomend: null,
              simular: null,
              videos: null,
              reactions: null,
              discuss: buildDiscussLoadingPlaceholder(slug)
            };
            oncomplite && oncomplite(data);
          };
          var hasEpisodes = !!(payload.episodes && Array.isArray(payload.episodes.episodes) && payload.episodes.episodes.length);
          var mediaType = payload.card && payload.card.media_type;
          var needEpisodesRequest = mediaType !== 'movie' && !hasEpisodes;
          if (!needEpisodesRequest) {
            finalize();
            return;
          }
          loadAllAnimeEpisodes(slug, function (episodesList) {
            var builtEpisodes = buildEpisodesPayloadFromApi(episodesList, details, payload.card && (payload.card.img || payload.card.poster_path));
            if (builtEpisodes && Array.isArray(builtEpisodes.episodes) && builtEpisodes.episodes.length) {
              payload.episodes = builtEpisodes;
            }
            finalize();
          }, function () {
            finalize();
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
     * Seasons data for Episodes component
     * Signature: seasons(tv, from, oncomplite)
     */
    seasons: function seasons() {
      var tv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
      var finish = function finish(payload) {
        oncomplite && oncomplite(payload && _typeof(payload) === 'object' ? payload : {});
      };
      try {
        var slug = tv && (tv.hikka_slug || tv.id || tv.slug) || null;
        if (!slug) {
          finish({});
          return;
        }
        var requested = Array.isArray(from) && from.length ? from : [0];
        var completeWith = function completeWith(details, episodesList) {
          var image = details && details.image || tv && (tv.img || tv.poster || tv.poster_path) || null;
          var grouped = buildSeasonsPayloadFromEpisodes(episodesList, details, image);
          finish(buildRequestedSeasonsPayload(requested, grouped, details, tv));
        };
        Api.getAnimeDetails(slug, function (details) {
          var detailsEpisodes = Array.isArray(details && details.episodes) ? details.episodes : [];
          var detailsSeasonsCount = Number(details && details.seasons_count) || 0;
          var shouldLoadAllEpisodes = detailsSeasonsCount > 1 || !detailsEpisodes.length;
          if (!shouldLoadAllEpisodes) {
            completeWith(details, detailsEpisodes);
            return;
          }
          loadAllAnimeEpisodes(slug, function (allEpisodes) {
            if (Array.isArray(allEpisodes) && allEpisodes.length) {
              completeWith(details, allEpisodes);
              return;
            }
            completeWith(details, detailsEpisodes);
          }, function () {
            completeWith(details, detailsEpisodes);
          });
        }, function () {
          var fallbackDetails = {
            slug: slug,
            season_number: Number(tv && tv.number_of_seasons) || 1,
            seasons_count: Number(tv && tv.number_of_seasons) || 0
          };
          loadAllAnimeEpisodes(slug, function (allEpisodes) {
            completeWith(fallbackDetails, allEpisodes);
          }, function () {
            var emptyGrouped = {
              map: {},
              seasonNumbers: [],
              seasonsCount: Number(tv && tv.number_of_seasons) || 0
            };
            finish(buildRequestedSeasonsPayload(requested, emptyGrouped, fallbackDetails, tv));
          });
        });
      } catch (e) {
        console.log('[Hikka] seasons exception:', e);
        finish({});
      }
    },
    /**
     * Lazy-load comments for Discuss component
     * Signature: discussGet(params, oncomplite, onerror)
     * params: { id|slug|object, page }
     */
    discussGet: function discussGet() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.slug || params.card && (params.card.hikka_slug || params.card.id) || null;
        var page = Number(params.page || 1) || 1;
        if (!slug) {
          if (onerror) onerror('Hikka discussGet: slug is empty');
          return;
        }
        Api.getComments(slug, page, 20, function (comments) {
          var discuss = decorateDiscussResult(Api.buildDiscussPayloadFromComments(comments));
          oncomplite && oncomplite(discuss);
        }, function (err) {
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] discussGet exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Lazy-load franchise cards for Full component
     * Signature: franchiseGet(params, oncomplite, onerror)
     */
    franchiseGet: function franchiseGet() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.slug || params.card && (params.card.hikka_slug || params.card.id) || null;
        if (!slug) {
          if (onerror) onerror('Hikka franchiseGet: slug is empty');
          return;
        }
        Api.getFranchise(slug, function (rel) {
          try {
            var results = mapFranchiseResults(rel);
            oncomplite && oncomplite({
              title: 'Франшиза',
              results: results,
              total_pages: 1,
              page: 1
            });
          } catch (e) {
            if (onerror) onerror(e);
          }
        }, function (err) {
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] franchiseGet exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Lazy-load real staff/authors for Full component
     * Signature: staffGet(params, oncomplite, onerror)
     */
    staffGet: function staffGet() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.slug || params.card && (params.card.hikka_slug || params.card.id) || null;
        if (!slug) {
          if (onerror) onerror('Hikka staffGet: slug is empty');
          return;
        }
        var pageSize = 20;
        var maxPages = 2;
        var collected = [];
        var page = 1;
        var _next2 = function next() {
          Api.getAnimeStaff(slug, page, pageSize, function (data) {
            var list = Array.isArray(data && data.list) ? data.list : [];
            var pages = Math.max(1, Number(data && data.pagination && data.pagination.pages) || 1);
            list.forEach(function (item) {
              return collected.push(item);
            });
            if (page < pages && page < maxPages) {
              page++;
              _next2();
              return;
            }
            oncomplite && oncomplite({
              crew: mapStaffToCrew(collected),
              cast: []
            });
          }, function (err) {
            if (page === 1) {
              if (onerror) onerror(err);
              return;
            }
            oncomplite && oncomplite({
              crew: mapStaffToCrew(collected),
              cast: []
            });
          });
        };
        _next2();
      } catch (e) {
        console.log('[Hikka] staffGet exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Lazy-load real cast (voices) for Full component
     * Signature: castGet(params, oncomplite, onerror)
     */
    castGet: function castGet() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.slug || params.card && (params.card.hikka_slug || params.card.id) || null;
        if (!slug) {
          if (onerror) onerror('Hikka castGet: slug is empty');
          return;
        }
        Api.getCharacters(slug, function (chars) {
          try {
            var list = Array.isArray(chars && chars.list) ? chars.list : [];
            buildVoiceCastFromCharacters(list, slug, function (cast) {
              oncomplite && oncomplite({
                cast: Array.isArray(cast) ? cast : [],
                crew: []
              });
            });
          } catch (e) {
            if (onerror) onerror(e);
          }
        }, function (err) {
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('[Hikka] castGet exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Person page data for component 'actor'
     * Signature: person(params, oncomplite, onerror)
     */
    person: function person() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.slug || null;
        if (!slug) {
          if (onerror) onerror('Hikka person: slug is empty');
          return;
        }
        var personData = null;
        var personAnime = [];
        var pending = 2;
        var done = function done() {
          pending--;
          if (pending > 0) return;
          if (!personData) {
            personData = {
              slug: slug,
              name_ua: params.name || params.title || slug,
              image: params.img || null
            };
          }
          var payload = buildPersonPayload(personData, personAnime);
          if (payload && payload.person) {
            oncomplite && oncomplite(payload);
          } else if (onerror) {
            onerror('Hikka person: empty payload');
          }
        };
        if (personDetailsCache.has(slug)) {
          personData = personDetailsCache.get(slug);
          done();
        } else {
          Api.getPerson(slug, function (person) {
            personData = person;
            personDetailsCache.set(slug, person);
            done();
          }, function (err) {
            console.log('[Hikka] person details error:', err);
            done();
          });
        }
        loadAllPersonAnime(slug, function (entries) {
          personAnime = Array.isArray(entries) ? entries : [];
          done();
        });
      } catch (e) {
        console.log('[Hikka] person exception:', e);
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
        var query = typeof filters.query === 'string' ? filters.query.trim() : '';
        if (query) {
          Api.searchAnime(query, page, filters, function (data) {
            oncomplite && oncomplite(data);
          }, function (err) {
            console.log('[Hikka] list search error:', err);
            if (onerror) onerror(err);
          });
          return;
        }
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
    var uiObserver = null;
    var cleanupBusy = false;
    var currentMovie = null;
    var currentFullBody = null;
    var lastApplecationApplyAt = 0;
    var applecationApplyLock = false;
    var lazyDiscussCache = new Map();
    var lazyDiscussWaiters = new Map();
    var lazyFranchiseCache = new Map();
    var lazyFranchiseWaiters = new Map();
    var lazyStaffCache = new Map();
    var lazyStaffWaiters = new Map();
    var lazyCastCache = new Map();
    var lazyCastWaiters = new Map();
    function getSourceFromObject(obj) {
      return obj && (obj.source || obj.card && obj.card.source || obj.movie && obj.movie.source);
    }
    function resolveElement(ref) {
      if (!ref) return null;
      if (typeof HTMLElement !== 'undefined' && ref instanceof HTMLElement) return ref;
      if (ref[0] && typeof HTMLElement !== 'undefined' && ref[0] instanceof HTMLElement) return ref[0];
      return null;
    }
    function getHikkaProvider() {
      if (Lampa && Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.hikka) return Lampa.Api.sources.hikka;
      return HikkaSourceProvider;
    }
    function resolveLazyType(rowData, firstResult) {
      var rootType = rowData && rowData.hikka_lazy_type;
      var itemType = firstResult && firstResult.hikka_lazy_type;
      if (rootType || itemType) return rootType || itemType;
      var id = String(firstResult && firstResult.id || '');
      if (id.indexOf('hikka_lazy_discuss_') === 0) return 'discuss';
      if (id.indexOf('hikka_lazy_franchise_') === 0) return 'franchise';
      if (id.indexOf('hikka_lazy_staff_') === 0) return 'staff';
      if (id.indexOf('hikka_lazy_cast_') === 0) return 'cast';
      return null;
    }
    function resolveLazySlug(data, object) {
      return data && data.hikka_lazy_slug || data && data.movie && (data.movie.hikka_slug || data.movie.id) || object && object.id || object && object.card && (object.card.hikka_slug || object.card.id) || null;
    }
    function runLazyRequest(cache, waiters, slug, request, onResult) {
      if (!slug) {
        onResult(null);
        return;
      }
      if (cache.has(slug)) {
        onResult(cache.get(slug));
        return;
      }
      if (waiters.has(slug)) {
        waiters.get(slug).push(onResult);
        return;
      }
      waiters.set(slug, [onResult]);
      var settled = false;
      var timeoutId = null;
      var flush = function flush(value) {
        if (settled) return;
        settled = true;
        if (timeoutId) clearTimeout(timeoutId);
        cache.set(slug, value);
        var queue = waiters.get(slug) || [];
        waiters["delete"](slug);
        queue.forEach(function (cb) {
          try {
            cb(value);
          } catch (err) {
            console.log('[Hikka] lazy waiter error:', err);
          }
        });
      };
      timeoutId = setTimeout(function () {
        return flush(null);
      }, 12000);
      try {
        request(function (value) {
          return flush(value);
        }, function () {
          return flush(null);
        });
      } catch (err) {
        console.log('[Hikka] lazy request error:', err);
        flush(null);
      }
    }
    function createFranchiseStatusItem(slug, text) {
      return {
        id: 'hikka_lazy_franchise_status_' + slug,
        title: text,
        original_title: '',
        poster_path: null,
        backdrop_path: null,
        poster: null,
        img: null,
        vote_average: 0,
        media_type: 'tv',
        source: 'hikka',
        params: {
          emit: {
            onlyEnter: function onlyEnter() {}
          }
        }
      };
    }
    function createCastStatusItem(slug, text) {
      return {
        id: 'hikka_lazy_cast_status_' + slug,
        name: text,
        character: '',
        known_for_department: 'Acting',
        profile_path: null,
        img: null,
        source: 'hikka',
        gender: 0,
        params: {
          emit: {
            onlyEnter: function onlyEnter() {}
          }
        }
      };
    }
    function createStaffStatusItem(slug, text) {
      return {
        id: 'hikka_lazy_staff_status_' + slug,
        name: text,
        character: '',
        known_for_department: 'Production',
        profile_path: null,
        img: null,
        source: 'hikka',
        gender: 0,
        job: 'Director',
        params: {
          emit: {
            onlyEnter: function onlyEnter() {}
          }
        }
      };
    }
    function rebuildLineItems(line) {
      if (!line || !line.scroll || typeof line.emit !== 'function') return;
      try {
        if (Array.isArray(line.items)) {
          line.items.forEach(function (item) {
            if (item && typeof item.destroy === 'function') item.destroy();
          });
        }
      } catch (err) {
        console.log('[Hikka] destroy line items error:', err);
      }
      line.items = [];
      line.active = 0;
      line.last = null;
      if (line.more) {
        try {
          if (typeof line.more.destroy === 'function') line.more.destroy();
        } catch (err) {
          console.log('[Hikka] destroy line more error:', err);
        }
        line.more = null;
      }
      if (typeof line.scroll.clear === 'function') line.scroll.clear();
      var results = Array.isArray(line.data && line.data.results) ? line.data.results : [];
      var view = Number(line.view || line.params && line.params.items && line.params.items.view || 7);
      results.slice(0, view).forEach(function (element) {
        line.emit('createAndAppend', element);
      });
      line.emit('scroll');
      if (Lampa && Lampa.Layer && typeof Lampa.Layer.visible === 'function') {
        Lampa.Layer.visible(line.scroll.render(true));
      }
    }
    function setLineTitle(line, title) {
      if (!line || !title) return;
      if (line.data) line.data.title = title;
      try {
        var titleEl = line.html && typeof line.html.find === 'function' ? line.html.find('.items-line__title') : null;
        if (titleEl && titleEl.length) titleEl.text(title);
      } catch (err) {
        console.log('[Hikka] setLineTitle error:', err);
      }
    }
    function cloneParamsTemplate(params) {
      if (!params || _typeof(params) !== 'object') return null;
      var template = _objectSpread2({}, params);
      if (params.emit && _typeof(params.emit) === 'object') {
        template.emit = _objectSpread2({}, params.emit);
        // placeholder-only handler блокує нативний onEnter у Person/Card
        delete template.emit.onlyEnter;
      }
      return template;
    }
    function inheritLineItemParams(items, template) {
      var list = Array.isArray(items) ? items : [];
      if (!template) return list;
      return list.map(function (item) {
        if (!item || _typeof(item) !== 'object') return item;
        var currentParams = item.params && _typeof(item.params) === 'object' ? item.params : {};
        var nextParams = _objectSpread2(_objectSpread2({}, template), currentParams);
        if (template.emit || currentParams.emit) {
          nextParams.emit = _objectSpread2(_objectSpread2({}, template.emit || {}), currentParams.emit || {});
          delete nextParams.emit.onlyEnter;
        }
        return _objectSpread2(_objectSpread2({}, item), {}, {
          params: nextParams
        });
      });
    }
    function applyDiscussLazy(line, rowData, slug, discuss) {
      var result = discuss && Array.isArray(discuss.result) ? discuss.result : [];
      var fallback = Array.isArray(rowData.results) ? rowData.results.slice() : [];
      var next = result.length ? result : fallback;
      rowData.hikka_lazy_loading = false;
      rowData.hikka_lazy_loaded = true;
      rowData.total_pages = discuss && discuss.total_pages ? discuss.total_pages : 1;
      rowData.page = discuss && discuss.page ? discuss.page : 1;
      rowData.results = next;
      if (!result.length && rowData.results[0]) {
        rowData.results[0].text = 'Коментарі відсутні';
        rowData.results[0].comment = 'Коментарі відсутні';
        rowData.results[0].author = rowData.results[0].author || 'Hikka';
        rowData.results[0].email = rowData.results[0].email || 'Hikka';
      }
      if (line && line.data) {
        line.data.total_pages = rowData.total_pages;
        line.data.page = rowData.page;
        line.data.results = rowData.results;
        rebuildLineItems(line);
      }
    }
    function applyFranchiseLazy(line, rowData, slug, collection) {
      var result = collection && Array.isArray(collection.results) ? collection.results : [];
      var fallback = Array.isArray(rowData.results) ? rowData.results.slice() : [];
      var next = result.length ? result : fallback.length ? fallback : [createFranchiseStatusItem(slug, 'Франшиза відсутня')];
      rowData.hikka_lazy_loading = false;
      rowData.hikka_lazy_loaded = true;
      rowData.total_pages = 1;
      rowData.page = 1;
      rowData.results = next;
      if (!result.length && rowData.results[0]) {
        rowData.results[0].title = 'Франшиза відсутня';
      }
      if (line && line.data) {
        line.data.total_pages = rowData.total_pages;
        line.data.page = rowData.page;
        line.data.results = rowData.results;
        rebuildLineItems(line);
      }
    }
    function applyCastLazy(line, rowData, slug, castPayload) {
      var currentResults = Array.isArray(rowData.results) ? rowData.results : [];
      var firstCurrent = currentResults.length ? currentResults[0] : null;
      var paramsTemplate = cloneParamsTemplate(firstCurrent && firstCurrent.params);
      var cast = castPayload && Array.isArray(castPayload.cast) ? castPayload.cast : [];
      var nextBase = cast.length ? cast : [createCastStatusItem(slug, 'Актори відсутні')];
      var next = inheritLineItemParams(nextBase, paramsTemplate);
      rowData.hikka_lazy_loading = false;
      rowData.hikka_lazy_loaded = true;
      rowData.results = next;
      if (line && line.data) {
        line.data.results = rowData.results;
        rebuildLineItems(line);
      }
    }
    function applyStaffLazy(line, rowData, slug, staffPayload) {
      var currentResults = Array.isArray(rowData.results) ? rowData.results : [];
      var firstCurrent = currentResults.length ? currentResults[0] : null;
      var paramsTemplate = cloneParamsTemplate(firstCurrent && firstCurrent.params);
      var crew = staffPayload && Array.isArray(staffPayload.crew) ? staffPayload.crew : [];
      var nextBase = crew.length ? crew : [createStaffStatusItem(slug, 'Автори відсутні')];
      var next = inheritLineItemParams(nextBase, paramsTemplate);
      rowData.hikka_lazy_loading = false;
      rowData.hikka_lazy_loaded = true;
      rowData.results = next;
      rowData.title = 'Автори';
      if (line && line.data) {
        line.data.results = rowData.results;
        setLineTitle(line, 'Автори');
        rebuildLineItems(line);
      }
    }
    function loadDiscussLazy(slug, callback) {
      var provider = getHikkaProvider();
      if (!provider || typeof provider.discussGet !== 'function') {
        callback(null);
        return;
      }
      runLazyRequest(lazyDiscussCache, lazyDiscussWaiters, slug, function (resolve, reject) {
        provider.discussGet({
          id: slug,
          source: 'hikka',
          page: 1
        }, resolve, reject);
      }, callback);
    }
    function loadFranchiseLazy(slug, callback) {
      var provider = getHikkaProvider();
      if (!provider || typeof provider.franchiseGet !== 'function') {
        callback(null);
        return;
      }
      runLazyRequest(lazyFranchiseCache, lazyFranchiseWaiters, slug, function (resolve, reject) {
        provider.franchiseGet({
          id: slug,
          source: 'hikka',
          page: 1
        }, resolve, reject);
      }, callback);
    }
    function loadCastLazy(slug, callback) {
      var provider = getHikkaProvider();
      if (!provider || typeof provider.castGet !== 'function') {
        callback(null);
        return;
      }
      runLazyRequest(lazyCastCache, lazyCastWaiters, slug, function (resolve, reject) {
        provider.castGet({
          id: slug,
          source: 'hikka'
        }, resolve, reject);
      }, callback);
    }
    function loadStaffLazy(slug, callback) {
      var provider = getHikkaProvider();
      if (!provider || typeof provider.staffGet !== 'function') {
        callback(null);
        return;
      }
      runLazyRequest(lazyStaffCache, lazyStaffWaiters, slug, function (resolve, reject) {
        provider.staffGet({
          id: slug,
          source: 'hikka'
        }, resolve, reject);
      }, callback);
    }
    function handleLazyBuild(event) {
      var rowData = event && event.data;
      var line = event && event.item;
      var object = event && event.object;
      if (!rowData || !line) return;
      var firstResult = Array.isArray(rowData.results) && rowData.results.length ? rowData.results[0] : null;
      var lazyType = resolveLazyType(rowData, firstResult);
      if (lazyType !== 'discuss' && lazyType !== 'franchise') return;
      if (rowData.hikka_lazy_loaded || rowData.hikka_lazy_loading) return;
      rowData.hikka_lazy_type = lazyType;
      var slug = resolveLazySlug(rowData, object) || firstResult && firstResult.hikka_lazy_slug;
      if (!slug) return;
      rowData.hikka_lazy_loading = true;
      if (lazyType === 'discuss') {
        loadDiscussLazy(slug, function (discuss) {
          applyDiscussLazy(line, rowData, slug, discuss);
          cleanupHikkaFullUI();
          setTimeout(cleanupHikkaFullUI, 0);
        });
        return;
      }
      loadFranchiseLazy(slug, function (collection) {
        applyFranchiseLazy(line, rowData, slug, collection);
      });
    }
    function handlePersonsLazyBuild(event) {
      if (!event || event.name !== 'persons' || !event.data || !event.item) return;
      var rowData = event.data;
      var line = event.item;
      var firstResult = Array.isArray(rowData.results) && rowData.results.length ? rowData.results[0] : null;
      var lazyType = resolveLazyType(rowData, firstResult);
      if (lazyType !== 'cast' && lazyType !== 'staff') return;
      if (rowData.hikka_lazy_loaded || rowData.hikka_lazy_loading) return;
      rowData.hikka_lazy_type = lazyType;
      var slug = firstResult && firstResult.hikka_lazy_slug || resolveLazySlug(rowData, event.object);
      if (!slug) return;
      if (lazyType === 'staff') {
        setLineTitle(line, 'Автори');
      }
      rowData.hikka_lazy_loading = true;
      if (lazyType === 'staff') {
        loadStaffLazy(slug, function (staffPayload) {
          applyStaffLazy(line, rowData, slug, staffPayload);
        });
        return;
      }
      loadCastLazy(slug, function (castPayload) {
        applyCastLazy(line, rowData, slug, castPayload);
      });
    }
    function focusFirstVisibleCommentFrom(element) {
      try {
        var line = element && element.closest && element.closest('.items-line') || null;
        var target = line && line.querySelector('.hikka-comment-card.selector') || document.querySelector('.hikka-comment-card.selector');
        if (target && Lampa && Lampa.Controller && typeof Lampa.Controller.focus === 'function') {
          setTimeout(function () {
            return Lampa.Controller.focus(target);
          }, 0);
        }
      } catch (err) {
        console.log('[Hikka] focusFirstVisibleCommentFrom error:', err);
      }
    }
    function cleanupHikkaFullUI() {
      if (!isActiveHikkaFullContext()) return;
      if (cleanupBusy) return;
      cleanupBusy = true;
      try {
        // Reactions blocks (new and legacy) та кнопки реакцій
        document.querySelectorAll('.full-start-new__reactions, .full-start__reactions, .button--reaction').forEach(function (el) {
          return el.remove();
        });

        // "Ще" (More) блок CUB discuss – повністю прибираємо з DOM
        document.querySelectorAll('.full-review-all').forEach(function (el) {
          var wasFocused = el.classList.contains('focus');
          if (wasFocused) focusFirstVisibleCommentFrom(el);
          el.remove();
        });

        // Add review картка від CUB: повністю прибираємо з DOM,
        // щоб вона ніколи не могла бути ціллю TV-навігації
        document.querySelectorAll('.full-review-add').forEach(function (el) {
          var wasFocused = el.classList.contains('focus');
          if (wasFocused) focusFirstVisibleCommentFrom(el);
          el.remove();
        });

        // Лайки у футері штатних відгуків
        document.querySelectorAll('.full-review__footer').forEach(function (el) {
          return el.remove();
        });
      } catch (err) {
        console.log('[Hikka] Cleanup UI error:', err);
      } finally {
        cleanupBusy = false;
      }
    }
    function startUiObserver() {
      if (uiObserver) return;
      uiObserver = new MutationObserver(function (mutations) {
        if (!isActiveHikkaFullContext()) return;
        var needCleanup = false;
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes && mutations[i].addedNodes.length) {
            needCleanup = true;
            break;
          }
        }
        if (needCleanup) {
          cleanupHikkaFullUI();
          if (currentMovie) {
            var now = Date.now();
            if (now - lastApplecationApplyAt > 350) applyApplecationIntegration(currentMovie, 0, currentFullBody);
          }
        }
      });
      uiObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    function cleanupObservers() {
      if (tagsObserver) {
        tagsObserver.disconnect();
        tagsObserver = null;
      }
      if (uiObserver) {
        uiObserver.disconnect();
        uiObserver = null;
      }
    }
    function setHikkaFullState(active) {
      document.body.classList.toggle('hikka-full-active', active);
    }
    function resolveActiveFullHost(bodyHint) {
      var hinted = resolveElement(bodyHint);
      if (hinted) return hinted;
      var activeSlide = document.querySelector('.activity--active');
      if (activeSlide) {
        var activeFull = activeSlide.querySelector('.full');
        if (activeFull) return activeFull;
      }
      return document.querySelector('.full');
    }
    function resolveApplecationRoot(bodyHint) {
      var host = resolveActiveFullHost(bodyHint);
      if (!host) return null;
      if (host.matches && host.matches('.full-start-new.applecation')) return host;
      return host.querySelector('.full-start-new.applecation');
    }
    function isActiveHikkaFullContext() {
      if (!document.body.classList.contains('hikka-full-active')) return false;
      if (!Lampa || !Lampa.Activity || typeof Lampa.Activity.active !== 'function') return true;
      var active = Lampa.Activity.active();
      if (!active || active.component !== 'full') return false;
      return getSourceFromObject(active) === 'hikka';
    }
    function resetHikkaFullContext() {
      var restoreTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      cleanupObservers();
      currentMovie = null;
      currentFullBody = null;
      applecationApplyLock = false;
      lastApplecationApplyAt = 0;
      setHikkaFullState(false);
      if (restoreTheme) restoreBackgroundTheme();
    }
    function hasBackdropImage(movie) {
      if (!movie || _typeof(movie) !== 'object') return false;
      return !!(String(movie.backdrop_path || '').trim() || String(movie.background_image || '').trim());
    }
    function applyDarkBackgroundFallback(movie) {
      if (hasBackdropImage(movie)) return;
      if (!Lampa || !Lampa.Background || typeof Lampa.Background.theme !== 'function') return;
      Lampa.Background.theme('black');
    }
    function restoreBackgroundTheme() {
      if (!Lampa || !Lampa.Background || typeof Lampa.Background.theme !== 'function') return;
      var isBlackStyle = !!(Lampa.Storage && typeof Lampa.Storage.field === 'function' && Lampa.Storage.field('black_style'));
      Lampa.Background.theme(isBlackStyle ? 'black' : 'reset');
    }
    function escapeHtml(value) {
      return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    function decodeHtmlEntities(value) {
      var text = String(value || '');
      if (!text || typeof document === 'undefined') return text;
      var holder = document.createElement('textarea');
      holder.innerHTML = text;
      return String(holder.value || '');
    }
    function normalizeDescriptionHtml(value) {
      var text = String(value || '').trim();
      if (!text) return 'Опис відсутній';
      if (text.indexOf('<') !== -1) return text;
      var decoded = decodeHtmlEntities(text).trim();
      if (decoded.indexOf('<') !== -1) return decoded;
      return escapeHtml(decoded || text).replace(/\r\n/g, '\n').replace(/\n/g, '<br>');
    }
    function resolveStatusLabel(movie) {
      var status = String(movie && movie.status || '').trim().toLowerCase();
      if (!status) return '';
      if (Lampa && Lampa.Lang && typeof Lampa.Lang.translate === 'function') {
        var key = 'tv_status_' + status.replace(/\s+/g, '_');
        var translated = Lampa.Lang.translate(key);
        if (translated && translated !== key) return translated;
      }
      var labels = {
        returning_series: 'Виходить',
        ended: 'Завершено',
        planned: 'Анонсовано',
        in_production: 'У виробництві',
        canceled: 'Скасовано',
        pilot: 'Пілот'
      };
      return labels[status] || '';
    }
    function resolveEpisodesLabel(movie) {
      var total = Number(movie && (movie.episodes_total || movie.number_of_episodes) || 0);
      var released = Number(movie && movie.episodes_released || 0);
      if (!total || !released || released >= total) return '';
      return released + '/' + total;
    }
    function getCurrentLang() {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        return String(Lampa.Storage.get('language', 'ru') || 'ru').toLowerCase();
      }
      return 'ru';
    }
    function translateLabel(key, fallback) {
      if (Lampa && Lampa.Lang && typeof Lampa.Lang.translate === 'function') {
        var value = Lampa.Lang.translate(key);
        if (value && value !== key) return String(value).replace(/\./g, '').trim();
      }
      return fallback;
    }
    function isSeriesCard(movie) {
      if (!movie || _typeof(movie) !== 'object') return false;
      return !!(movie.name || movie.original_name || movie.media_type === 'tv');
    }
    function resolveApplecationTypeLabel(movie) {
      var lang = getCurrentLang();
      var isSeries = isSeriesCard(movie);
      var map = {
        ru: {
          series: 'Сериал',
          movie: 'Фильм'
        },
        uk: {
          series: 'Серіал',
          movie: 'Фільм'
        },
        en: {
          series: 'TV Series',
          movie: 'Movie'
        },
        be: {
          series: 'Серыял',
          movie: 'Фільм'
        },
        bg: {
          series: 'Сериал',
          movie: 'Филм'
        },
        cs: {
          series: 'Seriál',
          movie: 'Film'
        },
        pt: {
          series: 'Série',
          movie: 'Filme'
        },
        he: {
          series: 'סדרה',
          movie: 'סרט'
        },
        zh: {
          series: '剧集',
          movie: '电影'
        }
      };
      var dict = map[lang] || map.ru;
      return isSeries ? dict.series : dict.movie;
    }
    function resolvePrimaryMetaText(movie) {
      var parts = [resolveApplecationTypeLabel(movie)];
      var genres = Array.isArray(movie && movie.genres) ? movie.genres.map(function (genre) {
        return String(genre && genre.name || '').trim();
      }).filter(Boolean) : [];
      if (genres.length) parts.push.apply(parts, _toConsumableArray(genres));
      return parts.filter(Boolean).join(' · ');
    }
    function resolveRuntimeForSeries(movie) {
      if (Array.isArray(movie && movie.episode_run_time) && movie.episode_run_time.length) {
        var _value = Number(movie.episode_run_time[0] || 0);
        if (_value > 0) return _value;
      }
      var value = Number(movie && (movie.duration || movie.runtime) || 0);
      return value > 0 ? value : 0;
    }
    function resolvePrimaryInfoText(movie) {
      var parts = [];
      var date = String(movie && (movie.release_date || movie.first_air_date) || '').trim();
      if (date) {
        var year = date.split('-')[0];
        if (year) parts.push(year);
      } else if (movie && movie.year) {
        parts.push(String(movie.year));
      }
      if (isSeriesCard(movie)) {
        var runtime = resolveRuntimeForSeries(movie);
        if (runtime > 0) {
          parts.push(runtime + ' ' + translateLabel('time_m', 'хв'));
        }
      } else {
        var _runtime = Number(movie && (movie.runtime || movie.duration) || 0);
        if (_runtime > 0) {
          var hours = Math.floor(_runtime / 60);
          var minutes = _runtime % 60;
          var hLabel = translateLabel('time_h', 'h');
          var mLabel = translateLabel('time_m', 'm');
          if (hours > 0 && minutes > 0) parts.push(hours + ' ' + hLabel + ' ' + minutes + ' ' + mLabel);else if (hours > 0) parts.push(hours + ' ' + hLabel);else parts.push(minutes + ' ' + mLabel);
        }
      }
      return parts.join(' · ');
    }
    function renderApplecationPrimaryInfo(movie, root) {
      if (!root || !movie) return;
      var metaTextNode = root.querySelector('.applecation__meta-text');
      if (metaTextNode) {
        var currentMeta = String(metaTextNode.textContent || '').trim();
        if (!currentMeta) metaTextNode.textContent = resolvePrimaryMetaText(movie);
      }
      var infoNode = root.querySelector('.applecation__info');
      if (!infoNode) return;
      var fallbackInfo = resolvePrimaryInfoText(movie);
      var badgesNode = infoNode.querySelector('.applecation__quality-badges');
      var currentText = String(infoNode.textContent || '').replace(/\s+/g, ' ').trim();
      var badgesText = String(badgesNode && badgesNode.textContent || '').replace(/\s+/g, ' ').trim();
      var hasInfoText = currentText && (!badgesText || currentText !== badgesText);
      if (!hasInfoText && fallbackInfo) {
        var badgesClone = badgesNode ? badgesNode.cloneNode(true) : null;
        infoNode.innerHTML = '';
        var textNode = document.createElement('span');
        textNode.textContent = fallbackInfo;
        infoNode.appendChild(textNode);
        if (badgesClone) infoNode.appendChild(badgesClone);else {
          var emptyBadges = document.createElement('span');
          emptyBadges.className = 'applecation__quality-badges';
          infoNode.appendChild(emptyBadges);
        }
      }
    }
    function buildApplecationMetaItems(movie) {
      var list = [];
      if (!movie || _typeof(movie) !== 'object') return list;
      var rating = Number(movie.vote_average || 0);
      if (rating > 0) list.push({
        text: '★ ' + rating.toFixed(1),
        mod: 'rating'
      });
      var status = resolveStatusLabel(movie);
      if (status) list.push({
        text: status,
        mod: 'status'
      });
      var episodes = resolveEpisodesLabel(movie);
      if (episodes) list.push({
        text: 'Епізоди: ' + episodes,
        mod: 'episodes'
      });
      var unique = [];
      var seen = new Set();
      list.forEach(function (item) {
        var text = item && item.text ? String(item.text).trim() : '';
        if (!text || seen.has(text)) return;
        seen.add(text);
        unique.push(item);
      });
      return unique.slice(0, 7);
    }
    function renderApplecationMeta(movie, root) {
      if (!root || !movie) return;
      var wrapper = root.querySelector('.applecation__content-wrapper');
      var anchor = wrapper && (wrapper.querySelector('.applecation__meta') || wrapper.firstChild);
      if (!wrapper || !anchor) return;
      var items = buildApplecationMetaItems(movie);
      var signature = items.map(function (item) {
        return (item && item.mod || '') + ':' + (item && item.text || '');
      }).join('|');
      var containers = Array.from(wrapper.querySelectorAll('.hikka-applecation-meta'));
      if (containers.length > 1) {
        containers.slice(1).forEach(function (node) {
          return node.remove();
        });
      }
      var container = containers[0] || null;
      if (!items.length) {
        if (container) container.remove();
        return;
      }
      if (!container) {
        container = document.createElement('div');
        container.className = 'hikka-applecation-meta';
        if (anchor.nextSibling) wrapper.insertBefore(container, anchor.nextSibling);else wrapper.appendChild(container);
      }
      if (container.dataset.signature === signature) return;
      container.innerHTML = '';
      container.dataset.signature = signature;
      items.forEach(function (item) {
        if (!item || !item.text) return;
        var chip = document.createElement('span');
        chip.className = 'hikka-applecation-meta__item' + (item.mod ? ' hikka-applecation-meta__item--' + item.mod : '');
        chip.textContent = item.text;
        container.appendChild(chip);
      });
    }
    function ensureApplecationVisibility(root) {
      if (!root) return;
      var showSelectors = ['.applecation__meta', '.applecation__ratings', '.applecation__description-wrapper', '.applecation__info'];
      showSelectors.forEach(function (selector) {
        var node = root.querySelector(selector);
        if (!node) return;
        node.classList.add('show');
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        node.style.visibility = 'visible';
      });
    }
    function closeApplecationOverlay() {
      var overlay = document.querySelector('.applecation-description-overlay');
      if (!overlay) return;
      overlay.classList.remove('show');
      setTimeout(function () {
        if (Lampa && Lampa.Controller && typeof Lampa.Controller.toggle === 'function') {
          Lampa.Controller.toggle('content');
        }
      }, 260);
    }
    function openApplecationOverlay(movie, root, bodyHint) {
      var title = String(movie && (movie.title || movie.name || movie.original_title) || '').trim();
      var textHtml = normalizeDescriptionHtml(movie && movie.overview);
      var overlay = document.querySelector('.applecation-description-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'applecation-description-overlay';
        overlay.innerHTML = '' + '<div class="applecation-description-overlay__bg"></div>' + '<div class="applecation-description-overlay__content selector">' + '<div class="applecation-description-overlay__logo" style="display:none;"></div>' + '<div class="applecation-description-overlay__title"></div>' + '<div class="applecation-description-overlay__text"></div>' + '</div>';
        document.body.appendChild(overlay);
        var bg = overlay.querySelector('.applecation-description-overlay__bg');
        if (bg) bg.addEventListener('click', closeApplecationOverlay);
      }
      var host = resolveActiveFullHost(bodyHint) || root;
      var overlayTitle = host && host.querySelector('.applecation-description-overlay__title') || overlay.querySelector('.applecation-description-overlay__title');
      var overlayText = host && host.querySelector('.applecation-description-overlay__text') || overlay.querySelector('.applecation-description-overlay__text');
      if (overlayTitle) {
        overlayTitle.textContent = title;
        overlayTitle.style.display = title ? '' : 'none';
      }
      if (overlayText) {
        overlayText.classList.add('hikka-applecation-description');
        overlayText.innerHTML = textHtml;
      }
      setTimeout(function () {
        return overlay.classList.add('show');
      }, 10);
      if (Lampa && Lampa.Controller) {
        if (!overlay.dataset.hikkaControllerCreated && typeof Lampa.Controller.add === 'function') {
          Lampa.Controller.add('hikka_applecation_description', {
            toggle: function toggle() {
              if (typeof Lampa.Controller.collectionSet === 'function') Lampa.Controller.collectionSet($(overlay));
              if (typeof Lampa.Controller.collectionFocus === 'function') {
                Lampa.Controller.collectionFocus($(overlay).find('.applecation-description-overlay__content'), $(overlay));
              }
            },
            back: closeApplecationOverlay
          });
          overlay.dataset.hikkaControllerCreated = '1';
        }
        if (typeof Lampa.Controller.toggle === 'function') {
          Lampa.Controller.toggle('hikka_applecation_description');
        }
      }
    }
    function ensureApplecationDescriptionInteraction(movie, root, bodyHint) {
      if (!root) return;
      var wrapper = root.querySelector('.applecation__description-wrapper');
      if (!wrapper) return;
      wrapper.classList.add('selector');
      if (Lampa && Lampa.Controller && typeof Lampa.Controller.collectionAppend === 'function') {
        var lastAppend = Number(wrapper.dataset.hikkaCollectionAppendAt || 0);
        var now = Date.now();
        if (!lastAppend || now - lastAppend > 240) {
          wrapper.dataset.hikkaCollectionAppendAt = String(now);
          Lampa.Controller.collectionAppend($(wrapper));
        }
      }
      $(wrapper).off('hover:enter.hikka_applecation').on('hover:enter.hikka_applecation', function () {
        openApplecationOverlay(movie, root, bodyHint);
      });
    }
    function renderApplecationDescription(movie, root, bodyHint) {
      if (!root) return;
      var html = normalizeDescriptionHtml(movie && movie.overview);
      var signature = String(html.length) + ':' + html.slice(0, 140);
      var description = root.querySelector('.applecation__description');
      if (description) {
        description.classList.add('hikka-applecation-description');
        if (description.dataset.hikkaSignature !== signature) {
          description.innerHTML = html;
          description.dataset.hikkaSignature = signature;
        }
        if (!description.innerHTML.trim()) description.innerHTML = 'Опис відсутній';
      }
      var host = resolveActiveFullHost(bodyHint) || root;
      var overlayText = host && host.querySelector('.applecation-description-overlay__text') || document.querySelector('.applecation-description-overlay__text');
      if (overlayText) {
        overlayText.classList.add('hikka-applecation-description');
        if (overlayText.dataset.hikkaSignature !== signature) {
          overlayText.innerHTML = html;
          overlayText.dataset.hikkaSignature = signature;
        }
      }
    }
    function ensureApplecationTitle(movie, root, bodyHint) {
      if (!root || !movie) return;
      var title = String(movie.title || movie.name || movie.original_title || '').trim();
      var titleNode = root.querySelector('.full-start-new__title');
      if (titleNode && title) {
        if (titleNode.textContent !== title) titleNode.textContent = title;
        titleNode.style.display = '';
        titleNode.classList.remove('hide');
      }
      var logo = root.querySelector('.applecation__logo img');
      if (logo) {
        var src = String(logo.getAttribute('src') || '');
        if (src.indexOf('R0lGODlhAQABAIAAAAAAAP///') !== -1 || src.indexOf('__hikka_skip_logo__') !== -1) {
          var logoWrap = root.querySelector('.applecation__logo');
          if (logoWrap) {
            logoWrap.innerHTML = '';
            logoWrap.classList.remove('loaded');
          }
        }
      }
      var host = resolveActiveFullHost(bodyHint) || root;
      var overlayTitle = host && host.querySelector('.applecation-description-overlay__title') || document.querySelector('.applecation-description-overlay__title');
      if (overlayTitle && title) {
        overlayTitle.textContent = title;
        overlayTitle.style.display = '';
      }
    }
    function applyApplecationIntegration(movie) {
      var attempt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var bodyHint = arguments.length > 2 ? arguments[2] : undefined;
      if (!movie) return;
      if (getSourceFromObject(movie) !== 'hikka') return;
      if (!isActiveHikkaFullContext()) return;
      var now = Date.now();
      if (applecationApplyLock && attempt === 0) return;
      if (attempt === 0 && now - lastApplecationApplyAt < 140) return;
      var targetBody = resolveElement(bodyHint) || currentFullBody;
      var root = resolveApplecationRoot(targetBody);
      if (!root) {
        if (attempt < 10) {
          setTimeout(function () {
            return applyApplecationIntegration(movie, attempt + 1, targetBody);
          }, 140);
        }
        return;
      }
      applecationApplyLock = true;
      lastApplecationApplyAt = now;
      try {
        ensureApplecationTitle(movie, root, targetBody);
        renderApplecationPrimaryInfo(movie, root);
        ensureApplecationVisibility(root);
        renderApplecationDescription(movie, root, targetBody);
        ensureApplecationDescriptionInteraction(movie, root, targetBody);
        renderApplecationMeta(movie, root);
      } finally {
        setTimeout(function () {
          applecationApplyLock = false;
        }, 0);
      }
      if (attempt < 3) {
        setTimeout(function () {
          return applyApplecationIntegration(movie, attempt + 1, targetBody);
        }, 220);
      }
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
      if (!e) return;
      if (e.type === 'build' && (e.name === 'discuss' || e.name === 'cards')) {
        handleLazyBuild(e);
        if (e.name === 'discuss') {
          cleanupHikkaFullUI();
          setTimeout(cleanupHikkaFullUI, 0);
        }
        return;
      }
      if (e.type === 'build' && e.name === 'persons') {
        handlePersonsLazyBuild(e);
        return;
      }
      var source = e.object ? getSourceFromObject(e.object) : null;
      if (source !== 'hikka') {
        if (e.type === 'start' || e.type === 'complite') resetHikkaFullContext(e.type === 'start');
        return;
      }
      if (e.type === 'start') {
        currentFullBody = resolveElement(e.body);
      }
      if (e.type === 'complite') {
        // Хелпер для оновлення відображення епізодів у шапці (3/12 або 12)
        var _updateEpisodesHeader = function updateEpisodesHeader(movie) {
          var attempt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          if (!movie) return;
          var total = Number(movie.episodes_total || movie.number_of_episodes || 0);
          var released = Number(movie.episodes_released || 0);
          if (!total) return;
          var desired = released && released < total ? released + '/' + total : String(total);
          var episodesTitle = Lampa && Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate('title_episodes') : 'Епізоди';
          var header = document.querySelector('.full-start') || document.querySelector('.full-start-new');
          if (!header) {
            if (attempt < 8) setTimeout(function () {
              return _updateEpisodesHeader(movie, attempt + 1);
            }, 250);
            return;
          }
          var tagsWrap = header.querySelector('.full-start__tags') || header.querySelector('.full-start-new__details') || header;
          if (!tagsWrap) {
            if (attempt < 8) setTimeout(function () {
              return _updateEpisodesHeader(movie, attempt + 1);
            }, 250);
            return;
          }
          var nodes = tagsWrap.querySelectorAll('span');
          var applied = false;
          nodes.forEach(function (node) {
            var text = String(node && node.textContent || '').trim();
            if (!text) return;
            if (text.indexOf(episodesTitle + ':') === 0 || /^episodes\s*:/i.test(text) || /^епізод/i.test(text)) {
              node.textContent = episodesTitle + ': ' + desired;
              applied = true;
            }
          });
          if (!applied && attempt < 8) {
            setTimeout(function () {
              return _updateEpisodesHeader(movie, attempt + 1);
            }, 250);
          }
        }; // Хелпер для перевизначення бейджа типу (TV -> розширений тип Hikka)
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
        }; // Первинна перев’язка чипів після complite
        cleanupObservers();
        currentFullBody = resolveElement(e.body);
        setHikkaFullState(true);
        startUiObserver();
        cleanupHikkaFullUI();
        setTimeout(cleanupHikkaFullUI, 300);
        setTimeout(cleanupHikkaFullUI, 1000);
        try {
          var movie = e.data && e.data.movie ? e.data.movie : null;
          currentMovie = movie;
          applyDarkBackgroundFallback(movie);
          rebindChips(movie);
          _updateEpisodesHeader(movie);
          updateTypeBadge(movie);
          applyApplecationIntegration(movie, 0, currentFullBody);
        } catch (err) {
          console.log('[Hikka] Override chips error:', err);
        }

        // Додатково спостерігаємо за змінами тегів і перев’язуємо при оновленні DOM
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
        } catch (err) {
          console.log('[Hikka] Chips observer error:', err);
        }
      }
    });
    Lampa.Listener.follow('activity', function (e) {
      if (e.component === 'full' && e.type === 'start' && getSourceFromObject(e.object) !== 'hikka') {
        resetHikkaFullContext(true);
        return;
      }
      if (e.type === 'destroy' && e.component === 'full' && getSourceFromObject(e.object) === 'hikka') {
        cleanupObservers();
        lazyDiscussWaiters.clear();
        lazyFranchiseWaiters.clear();
        lazyStaffWaiters.clear();
        lazyCastWaiters.clear();
        currentMovie = null;
        currentFullBody = null;
        setHikkaFullState(false);
        restoreBackgroundTheme();
      }
    });
  }

  var initialized$1 = false;
  var UI_DEADLINE_MAIN_MS = 2400;
  var STALE_CACHE_TTL_MS = 1000 * 60 * 60 * 6;
  var STORAGE_CACHE_PREFIX = 'hikka_line_cache_v1_';
  function getFiltersFingerprint() {
    var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      return JSON.stringify(filters);
    } catch (err) {
      return 'filters_parse_error';
    }
  }
  function buildRowCacheKey(config, screen, filters) {
    return STORAGE_CACHE_PREFIX + [config && config.name ? config.name : 'unknown', screen || 'unknown', getFiltersFingerprint(filters)].join('|');
  }
  function saveLineToCache(cacheKey, line) {
    if (!line || !Array.isArray(line.results) || !line.results.length) return;
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      Lampa.Storage.set(cacheKey, {
        time: Date.now(),
        line: line
      });
    } catch (err) {
      console.warn('[Hikka] rows cache save error:', err);
    }
  }
  function clearLineCache(cacheKey) {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      Lampa.Storage.set(cacheKey, null);
    } catch (err) {
      console.warn('[Hikka] rows cache clear error:', err);
    }
  }
  function loadLineFromCache(cacheKey) {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return null;
    try {
      var cached = Lampa.Storage.get(cacheKey);
      var time = Number(cached && cached.time || 0);
      var line = cached && cached.line;
      if (!time || !line || !Array.isArray(line.results) || !line.results.length) return null;
      if (Date.now() - time > STALE_CACHE_TTL_MS) return null;
      return line;
    } catch (err) {
      console.warn('[Hikka] rows cache load error:', err);
      return null;
    }
  }
  function createLinePayload(config, filters, data) {
    var results = data && Array.isArray(data.results) ? data.results : [];
    if (!results.length) return null;
    return {
      title: config.title,
      url: '',
      source: 'hikka',
      hikka_line: true,
      hikka_line_title: config.title,
      filter: JSON.stringify(filters),
      results: results,
      total_pages: data && data.total_pages ? data.total_pages : 1,
      page: 1
    };
  }
  function createLineTitle(text) {
    var root = document.createElement('span');
    var icon = document.createElement('span');
    var label = document.createElement('span');
    root.className = 'hikka-line-title';
    root.style.display = 'inline-flex';
    root.style.alignItems = 'center';
    root.style.gap = '.45em';
    icon.className = 'hikka-line-title__icon';
    icon.style.display = 'inline-block';
    icon.style.width = '1em';
    icon.style.height = '1em';
    icon.style.flexShrink = '0';
    icon.innerHTML = createLogoIconSvg();
    label.textContent = text;
    root.appendChild(icon);
    root.appendChild(label);
    return root;
  }
  function registerLineTitleDecorator() {
    Lampa.Listener.follow('line', function (e) {
      if (!e || e.type !== 'create' || !e.data || !e.data.hikka_line) return;
      try {
        var titleNode = createLineTitle(e.data.hikka_line_title || e.data.title || '');
        var container = e.line.render().find('.items-line__title');
        if (container && container.length) container.empty().append(titleNode);
      } catch (err) {
        console.error('[Hikka] line title decorate error', err);
      }
    });
  }
  function createCall(config) {
    return function (params, screen) {
      if (screen !== 'main') return;
      return function (call) {
        var filters = typeof config.buildFilters === 'function' ? config.buildFilters() : config.filters || {};
        var cacheKey = buildRowCacheKey(config, screen, filters);
        var staleLine = loadLineFromCache(cacheKey);
        var done = false;
        var timeoutId = null;
        var finish = function finish(line) {
          if (done) return;
          done = true;
          if (timeoutId) clearTimeout(timeoutId);
          if (line && Array.isArray(line.results) && line.results.length) call(line);else call();
        };
        timeoutId = setTimeout(function () {
          finish(staleLine);
        }, UI_DEADLINE_MAIN_MS);
        Api.getAnimeListWithFilters(filters, 1, function (data) {
          var line = createLinePayload(config, filters, data);
          if (line) saveLineToCache(cacheKey, line);else clearLineCache(cacheKey);
          if (!done) finish(line);
        }, function () {
          if (!done) finish(staleLine);
        });
      };
    };
  }
  function registerRows() {
    var rows = getMainLinePresets();
    rows.forEach(function (row) {
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen || ['main'],
        call: createCall(row)
      });
    });
  }
  function initRows() {
    if (initialized$1) return;
    if (!Lampa || !Lampa.ContentRows || typeof Lampa.ContentRows.add !== 'function') return;
    initialized$1 = true;
    registerLineTitleDecorator();
    registerRows();
  }

  var initialized = false;
  var MEDIA_TYPE_ORDER = ['movie', 'tv', 'special', 'ova', 'ona', 'music'];
  var MEDIA_TYPE_TITLES = {
    special: 'Спешл',
    movie: 'Фільм',
    ova: 'OVA',
    ona: 'ONA',
    tv: 'TV Серіал',
    music: 'Музика'
  };
  function decodeQuery(value) {
    if (!value) return '';
    if (typeof value !== 'string') return String(value);
    try {
      return decodeURIComponent(value);
    } catch (e) {
      return value;
    }
  }
  function groupResultsByMediaType(results) {
    var source = Array.isArray(results) ? results : [];
    var groups = {};
    MEDIA_TYPE_ORDER.forEach(function (type) {
      groups[type] = [];
    });
    source.forEach(function (item) {
      var type = String(item && item.media_type || '').toLowerCase();
      if (groups[type]) groups[type].push(item);
    });
    return MEDIA_TYPE_ORDER.filter(function (type) {
      return groups[type].length > 0;
    }).map(function (type) {
      return {
        type: type,
        title: MEDIA_TYPE_TITLES[type] || type,
        results: groups[type]
      };
    });
  }
  function createSearchSource() {
    return {
      title: 'Hikka',
      params: {
        save: true
      },
      search: function search(params, oncomplite) {
        var query = decodeQuery(params && params.query).trim();
        if (!query) {
          oncomplite([]);
          return;
        }
        Api.searchAnime(query, 1, {}, function (data) {
          var results = data && Array.isArray(data.results) ? data.results : [];
          var grouped = groupResultsByMediaType(results);
          if (!grouped.length) {
            oncomplite([]);
            return;
          }
          oncomplite(grouped.map(function (group) {
            return {
              title: group.title,
              type: group.type,
              media_type: group.type,
              source: 'hikka',
              query: query,
              filter: JSON.stringify({
                query: query,
                media_type: [group.type],
                sort: ['score:desc']
              }),
              results: group.results,
              total_pages: data && data.total_pages ? data.total_pages : 1,
              page: data && data.page ? data.page : 1
            };
          }));
        }, function () {
          oncomplite([]);
        });
      },
      onMore: function onMore(params, close) {
        var query = decodeQuery(params && params.query).trim();
        var mediaType = params && params.data ? params.data.media_type || params.data.type || '' : '';
        if (!query) {
          close && close();
          return;
        }
        var title = Lampa && Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate('search') + ' - ' + query : 'Search - ' + query;
        var filter = params && params.data && params.data.filter ? params.data.filter : JSON.stringify({
          query: query,
          media_type: mediaType ? [mediaType] : [],
          sort: ['score:desc']
        });
        close && close();
        Lampa.Activity.push({
          url: '',
          title: title,
          component: 'category_full',
          page: 2,
          source: 'hikka',
          query: encodeURIComponent(query),
          filter: filter
        });
      },
      onCancel: function onCancel() {
        Api.cancelRequests();
      }
    };
  }
  function initSearchIntegration() {
    if (initialized) return;
    if (!Lampa || !Lampa.Search || typeof Lampa.Search.addSource !== 'function') return;
    Lampa.Search.addSource(createSearchSource());
    initialized = true;
  }

  function htmlToPlainText(value) {
    var source = String(value || '').trim();
    if (!source) return '';
    if (source.indexOf('<') === -1) return source;
    var prepared = source.replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|blockquote|ul|ol|h[1-6])>/gi, '\n');
    if (typeof document === 'undefined') {
      return prepared.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }
    var holder = document.createElement('div');
    holder.innerHTML = prepared;
    return String(holder.textContent || holder.innerText || '').replace(/\u00A0/g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  function init() {
    // Додаємо стилі для плагіну через шаблонну систему
    Lampa.Template.add('hikka_styles', "\n        <style>\n        .hikka-card .card__icons .icon--ua{background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.hikka-card .card__quality{text-transform:none}.hikka-card .hikka-anime-card__rating,.hikka-card .hikka-anime-card__episodes,.hikka-card .hikka-anime-card__status{font-size:12px;color:rgba(255,255,255,0.8);margin-top:2px}.hikka-card .hikka-anime-card__rating{color:#ffd700}.hikka-card .hikka-anime-card__status{color:#90ee90}.hikka-character{padding:2em 1.5em}.hikka-character__body{max-width:48em;margin:0 auto}.hikka-character__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:1em;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.hikka-character__image{width:12em;height:12em;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 .6em 1.4em rgba(0,0,0,0.35);box-shadow:0 .6em 1.4em rgba(0,0,0,0.35)}.hikka-character__name{font-size:1.8em;font-weight:700;color:rgba(255,255,255,0.8)}.hikka-character__role{font-size:1.1em;color:rgba(255,255,255,0.6)}.hikka-character__meta{display:grid;gap:.4em;padding:.8em 1em;-webkit-border-radius:.8em;border-radius:.8em;background:rgba(255,255,255,0.06)}.hikka-character__meta-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:1em;font-size:.95em}.hikka-character__meta-label{color:rgba(255,255,255,0.6)}.hikka-character__meta-value{color:rgba(255,255,255,0.8)}.hikka-character__description{max-width:40em;line-height:1.6;color:rgba(255,255,255,0.8)}.hikka-full-active .full-descr__text .hikka-md-link{color:rgba(178,211,255,0.98);text-decoration:underline}.hikka-full-active .full-descr__text .hikka-md-list{margin:.3em 0 .35em 1.25em;padding:0}.hikka-full-active .full-descr__text .hikka-md-quote{margin:.3em 0;padding:.35em .55em;border-left:.2em solid rgba(255,255,255,0.34);background:rgba(255,255,255,0.06);-webkit-border-radius:.3em;border-radius:.3em}.hikka-full-active .full-start-new.applecation .hikka-applecation-meta{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.45em;margin:.45em 0 .55em}.hikka-full-active .full-start-new.applecation .hikka-applecation-meta__item{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:1.82em;padding:0 .62em;-webkit-border-radius:.62em;border-radius:.62em;font-size:.88em;line-height:1.2;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.1);color:rgba(243,247,255,0.9)}.hikka-full-active .full-start-new.applecation .hikka-applecation-meta__item--rating{border-color:rgba(255,214,102,0.42);background:rgba(255,214,102,0.16);color:rgba(255,233,166,0.96)}.hikka-full-active .full-start-new.applecation .hikka-applecation-meta__item--status{background:rgba(129,255,175,0.11)}.hikka-full-active .applecation .applecation__description.hikka-applecation-description,.hikka-full-active .applecation-description-overlay__text.hikka-applecation-description{white-space:normal;line-height:1.35;color:rgba(239,245,255,0.9)}.hikka-full-active .applecation .applecation__description.hikka-applecation-description>span,.hikka-full-active .applecation-description-overlay__text.hikka-applecation-description>span{display:block;margin:.03em 0 .2em}.hikka-full-active .applecation .applecation__description.hikka-applecation-description .hikka-md-link,.hikka-full-active .applecation-description-overlay__text.hikka-applecation-description .hikka-md-link{color:rgba(171,210,255,0.98);text-decoration:underline}.hikka-full-active .applecation .applecation__description.hikka-applecation-description .hikka-md-list,.hikka-full-active .applecation-description-overlay__text.hikka-applecation-description .hikka-md-list{margin:.22em 0 .34em 1.05em;padding:0}.hikka-full-active .applecation .applecation__description.hikka-applecation-description .hikka-md-quote,.hikka-full-active .applecation-description-overlay__text.hikka-applecation-description .hikka-md-quote{margin:.28em 0;padding:.28em .52em;border-left:.18em solid rgba(255,255,255,0.34);background:rgba(255,255,255,0.08);-webkit-border-radius:.3em;border-radius:.3em}.hikka-full-active .applecation .full-episode__name{line-height:1.22 !important;margin-bottom:.22em !important}.hikka-full-active .applecation .full-episode__overview{line-height:1.25 !important;min-height:0 !important;height:auto !important;margin-bottom:.3em !important}.hikka-full-active .applecation .full-episode__overview:empty{display:none !important;margin-bottom:0 !important}.hikka-full-active .applecation .full-episode__date{margin-top:0 !important;line-height:1.2 !important}.hikka-full-active .full-review-add,.hikka-full-active .full-review__footer,.hikka-full-active .full-review__like,.hikka-full-active .full-review__like-icon{display:none !important}.hikka-full-active .mapping--line>.hikka-comment-card{min-width:17em;max-width:21em;padding:.9em;-webkit-border-radius:.9em;border-radius:.9em;background:-webkit-linear-gradient(290deg,rgba(16,19,25,0.92),rgba(10,12,16,0.94));background:-o-linear-gradient(290deg,rgba(16,19,25,0.92),rgba(10,12,16,0.94));background:linear-gradient(160deg,rgba(16,19,25,0.92),rgba(10,12,16,0.94));border:1px solid rgba(255,255,255,0.16);-webkit-box-shadow:0 10px 24px rgba(0,0,0,0.28);box-shadow:0 10px 24px rgba(0,0,0,0.28);gap:.6em}.hikka-full-active .hikka-comment-card.focus{border-color:rgba(255,255,255,0.52);background:rgba(20,24,31,0.97);-webkit-box-shadow:0 0 0 .2em rgba(255,255,255,0.12),0 16px 28px rgba(0,0,0,0.35);box-shadow:0 0 0 .2em rgba(255,255,255,0.12),0 16px 28px rgba(0,0,0,0.35);color:rgba(242,247,255,0.95)}.hikka-full-active .hikka-comment-card.focus .hikka-comment-card__text,.hikka-full-active .hikka-comment-card.focus .hikka-comment-chip{color:rgba(242,247,255,0.95)}.hikka-full-active .hikka-comment-meta{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.45em}.hikka-full-active .hikka-comment-card__footer{margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.45em}.hikka-full-active .hikka-comment-chip{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1.75em;padding:0 .58em;-webkit-border-radius:.55em;border-radius:.55em;font-size:.88em;font-weight:500;background:rgba(255,255,255,0.12);color:rgba(240,245,255,0.92);border:1px solid rgba(255,255,255,0.16);letter-spacing:.01em}.hikka-full-active .hikka-comment-chip--author{background:rgba(255,255,255,0.18)}.hikka-full-active .hikka-comment-chip--date,.hikka-full-active .hikka-comment-chip--score,.hikka-full-active .hikka-comment-chip--replies,.hikka-full-active .hikka-comment-chip--level,.hikka-full-active .hikka-comment-chip--continuation{background:rgba(255,255,255,0.12)}.hikka-full-active .hikka-comment-chip--continuation{opacity:.82}.hikka-full-active .hikka-comment-card__text{font-size:1.02em;line-height:1.33;margin:0;-webkit-line-clamp:5;line-clamp:5;color:rgba(236,242,255,0.92)}.hikka-full-active .hikka-comment-sidebar{-webkit-border-radius:.9em;border-radius:.9em;padding:.85em;margin-bottom:.75em;border:1px solid rgba(255,255,255,0.14);background:rgba(15,19,26,0.82)}.hikka-full-active .hikka-comment-sidebar__head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.45em;margin-bottom:.25em}.hikka-full-active .hikka-thread-item{background:transparent !important;padding:.65em 1.15em !important;border-bottom:1px solid rgba(255,255,255,0.08)}.hikka-full-active .hikka-thread-item.focus{background:rgba(255,255,255,0.06) !important}.hikka-full-active .hikka-thread-entry{border:1px solid rgba(255,255,255,0.14);-webkit-border-radius:.74em;border-radius:.74em;background:rgba(9,11,16,0.72);padding:.72em .8em}.hikka-full-active .hikka-thread-entry__head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.4em;margin-bottom:.5em}.hikka-full-active .hikka-thread-entry__text{white-space:pre-wrap;word-wrap:break-word;color:rgba(240,245,255,0.93);font-size:1.06em;line-height:1.36}.hikka-full-active .hikka-comment-card__text strong,.hikka-full-active .hikka-thread-entry__text strong{font-weight:700;color:rgba(255,255,255,0.98)}.hikka-full-active .hikka-comment-card__text em,.hikka-full-active .hikka-thread-entry__text em{font-style:italic}.hikka-full-active .hikka-comment-card__text code,.hikka-full-active .hikka-thread-entry__text code{font-family:monospace;font-size:.92em;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.14);-webkit-border-radius:.36em;border-radius:.36em;padding:.05em .35em}.hikka-full-active .hikka-comment-card__text .hikka-md-link,.hikka-full-active .hikka-thread-entry__text .hikka-md-link{color:rgba(178,211,255,0.98);text-decoration:underline}.hikka-full-active .hikka-comment-card__text .hikka-md-list,.hikka-full-active .hikka-thread-entry__text .hikka-md-list{margin:.25em 0 .3em 1.1em;padding:0}.hikka-full-active .hikka-comment-card__text .hikka-md-quote,.hikka-full-active .hikka-thread-entry__text .hikka-md-quote{margin:.3em 0;padding:.35em .55em;border-left:.2em solid rgba(255,255,255,0.34);background:rgba(255,255,255,0.06);-webkit-border-radius:.3em;border-radius:.3em}.hikka-full-active .hikka-comment-sidebar__content{margin:0;white-space:pre-wrap;word-wrap:break-word;font-size:1.02em;line-height:1.36;color:rgba(242,247,255,0.92);font-family:inherit}.hikka-full-active .applecation .mapping--line>.hikka-comment-card{min-width:18em;max-width:22em;padding:.9em .92em;-webkit-border-radius:.85em;border-radius:.85em;border:1px solid rgba(255,255,255,0.14);background:rgba(255,255,255,0.08);-webkit-box-shadow:0 10px 26px rgba(0,0,0,0.24);box-shadow:0 10px 26px rgba(0,0,0,0.24);-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px)}.hikka-full-active .applecation .hikka-comment-card.focus{border-color:rgba(255,255,255,0.38);background:rgba(255,255,255,0.14);-webkit-box-shadow:0 0 0 .14em rgba(255,255,255,0.14),0 16px 30px rgba(0,0,0,0.32);box-shadow:0 0 0 .14em rgba(255,255,255,0.14),0 16px 30px rgba(0,0,0,0.32)}.hikka-full-active .applecation .hikka-comment-chip{font-size:.84em;min-height:1.68em;-webkit-border-radius:.52em;border-radius:.52em;background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.16)}.hikka-full-active .applecation .hikka-comment-chip--author{background:rgba(255,255,255,0.2)}.hikka-full-active .applecation .hikka-comment-card__text{line-height:1.31;-webkit-line-clamp:4;line-clamp:4}.hikka-full-active .applecation .hikka-thread-entry{border-color:rgba(255,255,255,0.16);background:rgba(255,255,255,0.08)}\n        </style>\n    ");
    // Inject styles
    $('body').append(Lampa.Template.get('hikka_styles'));

    // Локальний sentinel для сумісності з Applecation без TMDB images API.
    try {
      if (!Lampa.__hikkaPatchedTmdbImage && Lampa.TMDB && typeof Lampa.TMDB.image === 'function') {
        var __origTmdbImage = Lampa.TMDB.image;
        var EMPTY_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        Lampa.TMDB.image = function (path) {
          var value = String(path || '');
          if (value.indexOf('__hikka_skip_logo__') !== -1) return EMPTY_PIXEL;
          return __origTmdbImage.apply(this, arguments);
        };
        Lampa.__hikkaPatchedTmdbImage = true;
      }
    } catch (e) {
      console.log('[Hikka] Failed to patch TMDB.image:', e);
    }

    // Захист від "битих" елементів у collection, які можуть ламати toggleClass у Controller.
    try {
      if (!Lampa.__hikkaPatchedNavigatorCollection && typeof Navigator !== 'undefined') {
        var sanitizeCollection = function sanitizeCollection(collection) {
          if (!Array.isArray(collection)) return [];
          return collection.filter(function (item) {
            return item && typeof item.toggleClass === 'function';
          });
        };
        if (Navigator && typeof Navigator.setCollection === 'function') {
          var __origSetCollection = Navigator.setCollection;
          Navigator.setCollection = function (collection) {
            return __origSetCollection.call(this, sanitizeCollection(collection));
          };
        }
        if (Navigator && typeof Navigator.multiAdd === 'function') {
          var __origMultiAdd = Navigator.multiAdd;
          Navigator.multiAdd = function (collection) {
            return __origMultiAdd.call(this, sanitizeCollection(collection));
          };
        }
        Lampa.__hikkaPatchedNavigatorCollection = true;
      }
    } catch (e) {
      console.log('[Hikka] Failed to patch Navigator collection:', e);
    }

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

    // Додаємо джерело Hikka у нативний глобальний пошук Lampa
    initSearchIntegration();

    // Реєструємо компонент
    Lampa.Component.add('hikka_anime', HikkaMainLinesComponent);
    Lampa.Component.add('hikka_character', HikkaCharacter);
    Lampa.Component.add('hikka_schedule', HikkaScheduleComponent);

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
            if (obj && source === 'hikka' && obj.component === 'episodes' && obj.card) {
              var card = _objectSpread2({}, obj.card);

              // Explorer пріоритетно читає poster_path через TMDB.img,
              // тому для Hikka примусово використовуємо прямий card.img.
              if (card.img) card.poster_path = null;
              if (typeof card.overview === 'string' && card.overview.indexOf('<') !== -1) {
                card.overview = htmlToPlainText(card.overview);
              }
              return __origPush(_objectSpread2(_objectSpread2({}, obj), {}, {
                card: card
              }));
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
