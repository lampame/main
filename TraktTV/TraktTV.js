(function () {
  'use strict';

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
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
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
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
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

  /**
   * Генерує зображення з текстом за допомогою Canvas API.
   * @param {string} text - Текст для відображення на зображенні.
   * @returns {string} - URL зображення у форматі data:image/png;base64.
   */
  function textToImage(text) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = 400;
    var height = 600;
    canvas.width = width;
    canvas.height = height;

    // Фон
    context.fillStyle = '#1a202c'; // Темно-сірий фон
    context.fillRect(0, 0, width, height);

    // Налаштування тексту
    context.fillStyle = '#ffffff'; // Білий колір тексту
    context.font = 'bold 48px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Розбивка тексту на рядки
    var words = text.split(' ');
    var lines = [];
    var currentLine = words[0] || '';
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var testLine = currentLine + ' ' + word;
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > width - 40 && currentLine !== '') {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    // Відображення тексту
    var lineHeight = 58;
    var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
    lines.forEach(function (line, index) {
      context.fillText(line, width / 2, startY + index * lineHeight);
    });
    return canvas.toDataURL('image/png');
  }

  var CLIENT_ID = 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b';
  var CLIENT_SECRET = 'a8cf25070f8c9a609782deecf56197f99e96084b080c1c86fccf9dc682465f1b';
  var API_URL = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://api.trakt.tv';
  var TOKEN_EXPIRY_SKEW_MS = 2 * 60 * 1000;
  var DEVICE_AUTH_STALE_MS = 20 * 60 * 1000;
  function getStorageNumber(name) {
    var value = Number(Lampa.Storage.get(name));
    return Number.isFinite(value) ? value : null;
  }
  function clearTokenExpiryMeta() {
    Lampa.Storage.set('trakt_token_created_at', null);
    Lampa.Storage.set('trakt_token_expires_in', null);
    Lampa.Storage.set('trakt_token_expires_at', null);
  }
  function clearAuthStorage() {
    Lampa.Storage.set('trakt_token', null);
    Lampa.Storage.set('trakt_refresh_token', null);
    clearTokenExpiryMeta();
    Lampa.Storage.set('trakt_active_device_auth', false);
    Lampa.Storage.set('trakt_active_device_auth_started_at', null);
  }
  function saveTokens() {
    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!response || _typeof(response) !== 'object') return;
    if (response.access_token) {
      Lampa.Storage.set('trakt_token', response.access_token);
    }
    if (response.refresh_token) {
      Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
    }
    var expiresIn = Number(response.expires_in);
    var createdAt = Number(response.created_at) || Math.floor(Date.now() / 1000);
    if (Number.isFinite(expiresIn) && expiresIn > 0) {
      var expiresAt = createdAt * 1000 + expiresIn * 1000;
      Lampa.Storage.set('trakt_token_created_at', createdAt);
      Lampa.Storage.set('trakt_token_expires_in', expiresIn);
      Lampa.Storage.set('trakt_token_expires_at', expiresAt);
    } else if (response.access_token || response.refresh_token) {
      clearTokenExpiryMeta();
    }
  }
  function getTokenExpiryMeta() {
    var createdAt = getStorageNumber('trakt_token_created_at');
    var expiresIn = getStorageNumber('trakt_token_expires_in');
    var expiresAt = getStorageNumber('trakt_token_expires_at');
    if (!expiresAt && createdAt && expiresIn) {
      expiresAt = createdAt * 1000 + expiresIn * 1000;
      Lampa.Storage.set('trakt_token_expires_at', expiresAt);
    }
    return {
      createdAt: createdAt,
      expiresIn: expiresIn,
      expiresAt: expiresAt
    };
  }
  function isTokenExpiringSoon() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$skewMs = _ref.skewMs,
      skewMs = _ref$skewMs === void 0 ? TOKEN_EXPIRY_SKEW_MS : _ref$skewMs;
    var _getTokenExpiryMeta = getTokenExpiryMeta(),
      expiresAt = _getTokenExpiryMeta.expiresAt;
    if (!expiresAt || expiresAt <= 0) return true;
    return Date.now() + skewMs >= expiresAt;
  }
  function isDeviceAuthActive() {
    if (Lampa.Storage.get('trakt_active_device_auth') !== true) {
      return false;
    }
    var startedAt = getStorageNumber('trakt_active_device_auth_started_at');
    var now = Date.now();
    var isStale = !startedAt || now - startedAt > DEVICE_AUTH_STALE_MS;
    if (isStale) {
      Lampa.Storage.set('trakt_active_device_auth', false);
      Lampa.Storage.set('trakt_active_device_auth_started_at', null);
      if (Lampa.Storage.field('trakt_enable_logging')) {
        console.warn('TraktTV', 'Device auth flag was stale and has been reset.');
      }
      return false;
    }
    return true;
  }
  function getImageUrl(media) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'poster';
    var imageSet = media.images && media.images[type];
    var imageUrl = '';
    if (imageSet) {
      if (_typeof(imageSet) === 'object' && !Array.isArray(imageSet)) {
        imageUrl = imageSet.medium || imageSet.thumb || imageSet.full || '';
      } else if (Array.isArray(imageSet) && imageSet.length > 0) {
        imageUrl = imageSet[0];
      } else if (typeof imageSet === 'string') {
        imageUrl = imageSet;
      }
    }
    if (imageUrl && !imageUrl.startsWith('http')) {
      var finalUrl = 'https://' + imageUrl.replace(/^\/+/, '');
      return finalUrl;
    }
    return imageUrl;
  }
  function addToHistory$1(data) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var body = {
      movies: [],
      shows: []
    };

    // Логування для налагодження

    // Перевірка, чи data має структуру для епізодів (викликається з watching.js)
    if (data.episodes) {
      // Якщо це епізоди, додаємо їх до shows
      body.shows.push({
        ids: data.ids || {},
        // Використовуємо передані ids або порожній об'єкт
        seasons: [{
          number: data.season_number || 1,
          episodes: data.episodes.map(function (ep) {
            return {
              number: ep.number,
              watched_at: ep.watched_at || new Date().toISOString()
            };
          })
        }]
      });
      return requestApi('POST', '/sync/history', body);
    }

    // Перевірка, чи data має структуру для фільму
    if (data.method === 'movie') {
      // Перевірка наявності необхідних даних
      if (!data.id) {
        return Promise.reject(new Error(Lampa.Lang.translate('trakttv_movie_id_missed')));
      }
      body.movies.push({
        ids: {
          tmdb: data.id
        },
        watched_at: new Date().toISOString()
      });
      return requestApi('POST', '/sync/history', body);
    }
    // Перевірка, чи data має структуру для серіалу
    else if (data.method === 'show' || data.method === 'tv') {
      // Перевірка наявності необхідних даних
      if (!data.id) {
        return Promise.reject(new Error(Lampa.Lang.translate('trakttv_show_id_missed')));
      }
      if (mode === 'all') {
        // Додаємо весь серіал в історію
        body.shows.push({
          ids: data.ids || {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
        return requestApi('POST', '/sync/history', body);
      } else if (mode === 'last_season' || mode === 'last_episode') {
        var _data$ids;
        // Спочатку отримуємо історію серіалу, щоб визначити які епізоди вже переглянуті
        return getShowHistory(data.id, (_data$ids = data.ids) === null || _data$ids === void 0 ? void 0 : _data$ids.trakt).then(function (historyData) {
          var _data$ids2;
          // Отримуємо інформацію про серіал для визначення всіх сезонів та епізодів
          return getShowInfo(data.id, (_data$ids2 = data.ids) === null || _data$ids2 === void 0 ? void 0 : _data$ids2.trakt).then(function (showInfo) {
            // Отримуємо останній сезон
            var lastSeason = showInfo.last_season || data.season || 1;

            // Отримуємо список всіх переглянутих епізодів
            var watchedEpisodes = {};
            if (historyData && historyData.length > 0) {
              historyData.forEach(function (item) {
                if (item.episode) {
                  var s = item.episode.season;
                  var e = item.episode.number;
                  if (!watchedEpisodes[s]) {
                    watchedEpisodes[s] = [];
                  }
                  if (!watchedEpisodes[s].includes(e)) {
                    watchedEpisodes[s].push(e);
                  }
                }
              });
            }

            // Отримуємо інформацію про останній сезон
            var seasonUrl = Lampa.TMDB.api('tv/' + data.id + '/season/' + lastSeason + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
            return new Promise(function (resolve, reject) {
              var network = new Lampa.Reguest();
              network.silent(seasonUrl, function (seasonData) {
                if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  // Знаходимо всі епізоди сезону
                  var allEpisodes = seasonData.episodes.map(function (e) {
                    return e.episode_number;
                  }).sort(function (a, b) {
                    return a - b;
                  });

                  // Знаходимо невідмічені епізоди
                  var unwatchedEpisodes = allEpisodes.filter(function (e) {
                    return !watchedEpisodes[lastSeason] || !watchedEpisodes[lastSeason].includes(e);
                  });
                  if (mode === 'last_episode' && unwatchedEpisodes.length > 0) {
                    // Додаємо перший невідмічений епізод
                    var nextEpisode = unwatchedEpisodes[0];
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        episodes: [{
                          number: nextEpisode,
                          watched_at: new Date().toISOString()
                        }]
                      }]
                    });
                  } else if (mode === 'last_season' && unwatchedEpisodes.length > 0) {
                    // Додаємо всі невідмічені епізоди сезону
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        episodes: unwatchedEpisodes.map(function (e) {
                          return {
                            number: e,
                            watched_at: new Date().toISOString()
                          };
                        })
                      }]
                    });
                  } else {
                    // Якщо всі епізоди вже переглянуті, додаємо весь сезон
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        watched_at: new Date().toISOString()
                      }]
                    });
                  }
                  resolve(requestApi('POST', '/sync/history', body));
                } else {
                  // Якщо не вдалося отримати дані про епізоди, додаємо весь сезон
                  body.shows.push({
                    ids: data.ids || {
                      tmdb: data.id
                    },
                    seasons: [{
                      number: lastSeason,
                      watched_at: new Date().toISOString()
                    }]
                  });
                  resolve(requestApi('POST', '/sync/history', body));
                }
              }, function () {
                // У випадку помилки додаємо весь сезон
                body.shows.push({
                  ids: data.ids || {
                    tmdb: data.id
                  },
                  seasons: [{
                    number: lastSeason,
                    watched_at: new Date().toISOString()
                  }]
                });
                resolve(requestApi('POST', '/sync/history', body));
              });
            });
          });
        })["catch"](function (error) {
          var _data$ids3;
          // Fallback to original behavior if there's an error
          return getShowInfo(data.id, (_data$ids3 = data.ids) === null || _data$ids3 === void 0 ? void 0 : _data$ids3.trakt).then(function (showInfo) {
            var lastSeason = showInfo.last_season || data.season || 1;
            var lastEpisode = showInfo.last_episode || data.episode || 1;
            if (mode === 'last_season') {
              body.shows.push({
                ids: data.ids || {
                  tmdb: data.id
                },
                seasons: [{
                  number: lastSeason,
                  watched_at: new Date().toISOString()
                }]
              });
            } else if (mode === 'last_episode') {
              body.shows.push({
                ids: data.ids || {
                  tmdb: data.id
                },
                seasons: [{
                  number: lastSeason,
                  episodes: [{
                    number: lastEpisode,
                    watched_at: new Date().toISOString()
                  }]
                }]
              });
            }
            return requestApi('POST', '/sync/history', body);
          });
        });
      } else {
        // Якщо mode не вказаний або інший, додаємо весь серіал
        // Використовуємо передані ids або формуватимемо за TMDB ID
        body.shows.push({
          ids: data.ids || {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
        return requestApi('POST', '/sync/history', body);
      }
    } else {
      // Якщо тип вмісту не визначено, повертаємо помилку
      return Promise.reject(new Error(Lampa.Lang.translate('trakttv_unknown_content')));
    }
  }

  // Функція для отримання інформації про серіал з TMDB або Trakt
  function getShowInfo(tmdbId) {
    var traktId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      // Якщо переданий Trakt ID, отримуємо інформацію з Trakt
      if (traktId) {
        requestApi('GET', "/shows/".concat(traktId, "?extended=full")).then(function (showData) {
          if (showData && showData.seasons) {
            // Знаходимо останній сезон (виключаючи спеціальні сезони з номером 0)
            var regularSeasons = showData.seasons.filter(function (s) {
              return s.number > 0;
            });
            var lastSeasonData = regularSeasons.length > 0 ? regularSeasons.reduce(function (prev, current) {
              return prev.number > current.number ? prev : current;
            }) : null;

            // Якщо знайдено останній сезон, отримуємо інформацію про його епізоди
            if (lastSeasonData) {
              requestApi('GET', "/shows/".concat(traktId, "/seasons/").concat(lastSeasonData.number, "?extended=full")).then(function (seasonData) {
                if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  // Знаходимо останній епізод сезону
                  var lastEpisodeData = seasonData.episodes.reduce(function (prev, current) {
                    return prev.number > current.number ? prev : current;
                  });
                  resolve({
                    last_season: lastSeasonData.number,
                    last_episode: lastEpisodeData.number,
                    total_seasons: regularSeasons.length,
                    total_episodes: seasonData.episodes.length
                  });
                } else {
                  resolve({
                    last_season: lastSeasonData.number,
                    last_episode: 1
                  });
                }
              })["catch"](function () {
                // Якщо не вдалося отримати дані про епізоди, повертаємо хоча б номер сезону
                resolve({
                  last_season: lastSeasonData.number,
                  last_episode: 1
                });
              });
            } else {
              resolve({
                last_season: 1,
                last_episode: 1
              });
            }
          } else {
            resolve({
              last_season: 1,
              last_episode: 1
            });
          }
        })["catch"](function () {
          // У випадку помилки повертаємо значення за замовчуванням
          resolve({
            last_season: 1,
            last_episode: 1
          });
        });
        return;
      }

      // Використовуємо Lampa.TMDB для отримання інформації про серіал
      var url = Lampa.TMDB.api('tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
      var network = new Lampa.Reguest();
      network.silent(url, function (data) {
        if (data && data.seasons) {
          // Знаходимо останній сезон (виключаючи спеціальні сезони з номером 0)
          var regularSeasons = data.seasons.filter(function (s) {
            return s.season_number > 0;
          });
          var lastSeasonData = regularSeasons.length > 0 ? regularSeasons.reduce(function (prev, current) {
            return prev.season_number > current.season_number ? prev : current;
          }) : null;

          // Якщо знайдено останній сезон, отримуємо інформацію про його епізоди
          if (lastSeasonData) {
            var seasonUrl = Lampa.TMDB.api('tv/' + tmdbId + '/season/' + lastSeasonData.season_number + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
            network.silent(seasonUrl, function (seasonData) {
              if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                // Знаходимо останній епізод сезону
                var lastEpisodeData = seasonData.episodes.reduce(function (prev, current) {
                  return prev.episode_number > current.episode_number ? prev : current;
                });
                resolve({
                  last_season: lastSeasonData.season_number,
                  last_episode: lastEpisodeData.episode_number,
                  total_seasons: regularSeasons.length,
                  total_episodes: seasonData.episodes.length
                });
              } else {
                resolve({
                  last_season: lastSeasonData.season_number,
                  last_episode: 1
                });
              }
            }, function () {
              // Якщо не вдалося отримати дані про епізоди, повертаємо хоча б номер сезону
              resolve({
                last_season: lastSeasonData.season_number,
                last_episode: 1
              });
            });
          } else {
            resolve({
              last_season: 1,
              last_episode: 1
            });
          }
        } else {
          resolve({
            last_season: 1,
            last_episode: 1
          });
        }
      }, function () {
        // У випадку помилки повертаємо значення за замовчуванням
        resolve({
          last_season: 1,
          last_episode: 1
        });
      });
    });
  }

  /**
   * Refresh tokens using refresh_token
   * unauthorized = true
   * Note: blocked while device auth polling is active
   */
  function refreshTokens() {
    return _refreshTokens.apply(this, arguments);
  }
  function _refreshTokens() {
    _refreshTokens = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _ref13,
        redirect_uri,
        _ref13$reason,
        reason,
        refresh_token,
        logging,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _ref13 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, redirect_uri = _ref13.redirect_uri, _ref13$reason = _ref13.reason, reason = _ref13$reason === void 0 ? 'manual' : _ref13$reason;
            refresh_token = Lampa.Storage.get('trakt_refresh_token');
            logging = Lampa.Storage.field('trakt_enable_logging');
            if (refresh_token) {
              _context.n = 1;
              break;
            }
            if (logging) {
              console.error('TraktTV', 'refreshTokens: No refresh_token found.');
            }
            return _context.a(2, Promise.reject(Object.assign(new Error('No refresh_token'), {
              status: 0,
              code: 'no_refresh_token'
            })));
          case 1:
            if (!isDeviceAuthActive()) {
              _context.n = 2;
              break;
            }
            if (logging) {
              console.warn('TraktTV', 'refreshTokens: skipped because device auth is active', {
                reason: reason
              });
            }
            return _context.a(2, Promise.reject(Object.assign(new Error('Device auth is active'), {
              status: 423,
              code: 'device_auth_active'
            })));
          case 2:
            if (logging) {
              console.log('TraktTV', 'refreshTokens:start', {
                reason: reason
              });
            }
            return _context.a(2, _performRequest('POST', '/oauth/token', {
              refresh_token: refresh_token,
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              redirect_uri: redirect_uri || '',
              grant_type: 'refresh_token'
            }, true).then(function (res) {
              if (res && res.access_token) {
                saveTokens(res);
                if (logging) {
                  console.log('TraktTV', 'refreshTokens: Token refreshed successfully.', {
                    reason: reason
                  });
                }
              }
              return res;
            })["catch"](function (error) {
              if (error && (error.status === 400 || error.status === 401)) {
                clearAuthStorage();
              }
              if (logging) {
                console.error('TraktTV', 'refreshTokens: Failed to refresh token:', error);
              }
              throw error;
            }));
        }
      }, _callee);
    }));
    return _refreshTokens.apply(this, arguments);
  }
  var refreshPromise = null;
  function runRefreshFlow() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (refreshPromise) {
      return refreshPromise;
    }
    refreshPromise = refreshTokens(options)["finally"](function () {
      refreshPromise = null;
    });
    return refreshPromise;
  }
  function ensureValidAccessToken() {
    return _ensureValidAccessToken.apply(this, arguments);
  }
  function _ensureValidAccessToken() {
    _ensureValidAccessToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _ref14,
        _ref14$reason,
        reason,
        _ref14$force,
        force,
        _ref14$skewMs,
        skewMs,
        token,
        refreshToken,
        noAccessToken,
        shouldRefreshByExpiry,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref14 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref14$reason = _ref14.reason, reason = _ref14$reason === void 0 ? 'preflight' : _ref14$reason, _ref14$force = _ref14.force, force = _ref14$force === void 0 ? false : _ref14$force, _ref14$skewMs = _ref14.skewMs, skewMs = _ref14$skewMs === void 0 ? TOKEN_EXPIRY_SKEW_MS : _ref14$skewMs;
            token = Lampa.Storage.get('trakt_token');
            refreshToken = Lampa.Storage.get('trakt_refresh_token');
            if (refreshToken) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, null);
          case 1:
            if (!isDeviceAuthActive()) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, null);
          case 2:
            noAccessToken = !token;
            shouldRefreshByExpiry = force || isTokenExpiringSoon({
              skewMs: Number(skewMs) || TOKEN_EXPIRY_SKEW_MS
            });
            if (!(!noAccessToken && !shouldRefreshByExpiry)) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, null);
          case 3:
            return _context2.a(2, runRefreshFlow({
              reason: reason
            }));
        }
      }, _callee2);
    }));
    return _ensureValidAccessToken.apply(this, arguments);
  }
  function requestApi(_x, _x2) {
    return _requestApi.apply(this, arguments);
  }
  function _requestApi() {
    _requestApi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(method, url) {
      var params,
        unauthorized,
        retryCount,
        MAX_RETRIES,
        logging,
        _args3 = arguments,
        _t,
        _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            params = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            unauthorized = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
            retryCount = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : 0;
            MAX_RETRIES = 1; // Обмеження кількості повторних спроб
            logging = Lampa.Storage.field('trakt_enable_logging');
            if (!unauthorized) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, _performRequest(method, url, params, true));
          case 1:
            if (!Lampa.Storage.get('trakt_refresh_token')) {
              _context3.n = 6;
              break;
            }
            _context3.p = 2;
            _context3.n = 3;
            return ensureValidAccessToken({
              reason: "preflight:".concat(method, ":").concat(url)
            });
          case 3:
            _context3.n = 6;
            break;
          case 4:
            _context3.p = 4;
            _t = _context3.v;
            if (!(_t && (_t.status === 400 || _t.status === 401))) {
              _context3.n = 5;
              break;
            }
            throw _t;
          case 5:
            if (logging) {
              console.warn('TraktTV', 'requestApi: preflight refresh failed, continue with existing token', {
                method: method,
                url: url,
                status: _t && _t.status
              });
            }
          case 6:
            _context3.p = 6;
            _context3.n = 7;
            return _performRequest(method, url, params, false);
          case 7:
            return _context3.a(2, _context3.v);
          case 8:
            _context3.p = 8;
            _t2 = _context3.v;
            if (!(_t2.status === 401 && retryCount < MAX_RETRIES)) {
              _context3.n = 10;
              break;
            }
            if (logging) {
              console.log('TraktTV', "401 Unauthorized for ".concat(url, ". Attempting token refresh and retry."), {
                retryCount: retryCount
              });
            }
            _context3.n = 9;
            return runRefreshFlow({
              reason: "401:".concat(method, ":").concat(url)
            });
          case 9:
            return _context3.a(2, requestApi(method, url, params, false, retryCount + 1));
          case 10:
            throw _t2;
          case 11:
            return _context3.a(2);
        }
      }, _callee3, null, [[6, 8], [2, 4]]);
    }));
    return _requestApi.apply(this, arguments);
  }
  function _performRequest(method, url) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var unauthorized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return new Promise(function (resolve, reject) {
      var network = new Lampa.Reguest();
      var headers = ensureHeaders({
        unauthorized: unauthorized
      });
      var logging = Lampa.Storage.field('trakt_enable_logging');
      var reqUrl = API_URL + url;
      var requestParams = {
        timeout: 15000,
        headers: headers,
        type: method,
        dataType: 'json'
      };
      var postData = method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null;
      if (logging) {
        try {
          console.log('TraktTV', 'request', method, url);
        } catch (e) {}
      }
      network.quiet(reqUrl, function (data) {
        if (logging) {
          try {
            console.log('TraktTV', 'response', method, url, 200);
          } catch (e) {}
        }
        resolve(data);
      }, function (error) {
        var status = error && error.status ? error.status : 0;
        if (logging) {
          try {
            console.log('TraktTV', 'response', method, url, status, 'Error details:', error);
          } catch (e) {}
        }
        reject(Object.assign(new Error('TraktTV API Error'), {
          status: status,
          originalError: error || {}
        }));
      }, postData, requestParams);
    });
  }

  /**
   * Ensure Trakt headers (canonical).
   * Always sets:
   * - 'Content-Type': 'application/json'
   * - 'trakt-api-key': CLIENT_ID
   * - 'trakt-api-version': '2'
   * - 'x-requested-with': 'lme-plugins'
   * When unauthorized === true, DO NOT add Authorization Bearer header.
   * When unauthorized === false and access token exists, add Bearer.
   * Signature: function ensureHeaders({ unauthorized } = { unauthorized: false })
   */
  function ensureHeaders() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        unauthorized: false
      },
      unauthorized = _ref2.unauthorized;
    var headers = {
      'Content-Type': 'application/json',
      'trakt-api-key': CLIENT_ID,
      'trakt-api-version': '2',
      'x-requested-with': 'lme-plugins'
    };
    if (!unauthorized) {
      var token = Lampa.Storage.get('trakt_token');
      if (token) headers['Authorization'] = "Bearer ".concat(token);
    }
    return headers;
  }
  function formatTraktResults() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return {
      results: (Array.isArray(items) ? items : []).map(function (item) {
        var media = item.movie || item.show;
        if (!media || !media.ids) return null;
        return {
          component: 'full',
          id: media.ids.tmdb || media.ids.trakt,
          ids: media.ids,
          title: media.title,
          original_title: media.title,
          release_date: media.year ? String(media.year) : '',
          vote_average: media.rating || 0,
          poster: getImageUrl(media, 'poster'),
          image: getImageUrl(media, 'fanart'),
          method: item.movie ? 'movie' : 'tv',
          card_type: item.movie ? 'movie' : 'tv'
        };
      }).filter(Boolean)
    };
  }

  // Функція для отримання історії серіалу за TMDB ID
  function getShowHistory(tmdbId) {
    var traktId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      // Якщо переданий Trakt ID, отримуємо інформацію з Trakt
      if (traktId) {
        requestApi('GET', "/shows/".concat(traktId, "/history")).then(function (historyData) {
          resolve(historyData);
        })["catch"](function (error) {
          reject(error);
        });
        return;
      }

      // Спочатку отримуємо Trakt ID за TMDB ID
      requestApi('GET', "/search/tmdb/".concat(tmdbId, "?type=show")).then(function (response) {
        if (response && response.length > 0 && response[0].show && response[0].show.ids.trakt) {
          var foundTraktId = response[0].show.ids.trakt;

          // Отримуємо історію серіалу за Trakt ID
          requestApi('GET', "/sync/history/shows/".concat(foundTraktId)).then(function (historyData) {
            resolve(historyData);
          })["catch"](function (error) {
            reject(error);
          });
        } else {
          reject(new Error('Show not found in Trakt'));
        }
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
  function resolveTraktIds() {
    var _params$external_ids, _params$external_ids2, _params$external_ids3;
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rawIds = params.ids && Object.keys(params.ids).length ? _objectSpread2({}, params.ids) : {};
    var tmdbId = params.id || params.tmdb || ((_params$external_ids = params.external_ids) === null || _params$external_ids === void 0 ? void 0 : _params$external_ids.tmdb_id);
    var traktId = (_params$external_ids2 = params.external_ids) === null || _params$external_ids2 === void 0 ? void 0 : _params$external_ids2.trakt_id;
    var imdbId = ((_params$external_ids3 = params.external_ids) === null || _params$external_ids3 === void 0 ? void 0 : _params$external_ids3.imdb_id) || params.imdb;
    if (traktId && !rawIds.trakt) rawIds.trakt = traktId;
    if (tmdbId && !rawIds.tmdb) rawIds.tmdb = tmdbId;
    if (imdbId && !rawIds.imdb) rawIds.imdb = imdbId;
    return rawIds;
  }
  function normalizeMediaType() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (params.method || params.type || '').toString().toLowerCase();
    return method === 'movie' ? 'movie' : 'show';
  }
  function buildSyncPayload() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ids = resolveTraktIds(params);
    if (!ids || !Object.keys(ids).length) {
      throw new Error('TraktTV media ids are missing');
    }
    return normalizeMediaType(params) === 'movie' ? {
      movies: [{
        ids: ids
      }],
      shows: []
    } : {
      movies: [],
      shows: [{
        ids: ids
      }]
    };
  }
  function sameAnyId() {
    var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!left || !right) return false;
    var keys = ['trakt', 'tmdb', 'imdb'];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (left[key] && right[key] && String(left[key]) === String(right[key])) {
        return true;
      }
    }
    return false;
  }
  function extractMediaFromSyncItem() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (item.movie) return {
      media: item.movie,
      type: 'movie'
    };
    if (item.show) return {
      media: item.show,
      type: 'show'
    };
    return {
      media: null,
      type: null
    };
  }
  function normalizeListCardData(item) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$likedListIds = _ref3.likedListIds,
      likedListIds = _ref3$likedListIds === void 0 ? [] : _ref3$likedListIds,
      _ref3$wide = _ref3.wide,
      wide = _ref3$wide === void 0 ? false : _ref3$wide,
      _ref3$canManage = _ref3.canManage,
      canManage = _ref3$canManage === void 0 ? false : _ref3$canManage;
    var list = item && item.list ? item.list : item;
    if (!list) return null;
    var ids = list.ids || {};
    var listId = ids.trakt || list.id;
    if (!listId) return null;
    var likedIds = Array.isArray(likedListIds) ? likedListIds : [];
    var rawTitle = list.name || list.title || '';
    var title = rawTitle.replace(/^\s*\[\d+\]\s*/, '').trim();
    var description = list.description || '';
    var poster = getImageUrl(list, 'poster') || textToImage(title || rawTitle || 'List');
    var image = getImageUrl(list, 'fanart');
    var cardTitle = wide ? '' : title;
    var card = {
      component: 'trakt_list',
      id: listId,
      list_id: listId,
      ids: ids,
      slug: ids.slug || list.slug || '',
      title: cardTitle,
      list_title: title,
      original_title: cardTitle,
      description: description,
      overview: description,
      poster: poster,
      image: image,
      cover: image || poster,
      method: 'list',
      item_count: list.item_count || 0,
      privacy: list.privacy || '',
      display_numbers: !!list.display_numbers,
      allow_comments: !!list.allow_comments,
      updated_at: list.updated_at || list.updated || '',
      can_manage: !!canManage,
      is_liked: likedIds.includes(listId)
    };
    if (wide) {
      card.params = {
        style: {
          name: 'wide'
        }
      };
    }
    return card;
  }
  function formatListCards(items) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var results = (Array.isArray(items) ? items : []).map(function (item) {
      return normalizeListCardData(item, options);
    }).filter(Boolean);
    return {
      results: results
    };
  }
  function sanitizeListPayload() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var normalized = {};
    var name = (payload.name || payload.title || '').toString().trim();
    var description = (payload.description || '').toString().trim();
    var privacy = (payload.privacy || '').toString().trim();
    if (name) normalized.name = name;
    if (description) normalized.description = description;
    if (privacy) normalized.privacy = privacy;
    if (typeof payload.display_numbers === 'boolean') normalized.display_numbers = payload.display_numbers;
    if (typeof payload.allow_comments === 'boolean') normalized.allow_comments = payload.allow_comments;
    if (typeof payload.sort_by === 'string' && payload.sort_by) normalized.sort_by = payload.sort_by;
    if (typeof payload.sort_how === 'string' && payload.sort_how) normalized.sort_how = payload.sort_how;
    return normalized;
  }
  function makePaginationMeta(items, page, limit) {
    var count = Array.isArray(items) ? items.length : 0;
    var total = (page - 1) * limit + count;
    var total_pages = count === limit ? page + 1 : page;
    return {
      total: total,
      total_pages: total_pages,
      page: page
    };
  }
  function withNoCache(url) {
    var separator = url.indexOf('?') >= 0 ? '&' : '?';
    return "".concat(url).concat(separator, "_=").concat(Date.now());
  }

  /* duplicate ensureHeaders removed */

  var api$1 = {
    addToHistory: addToHistory$1,
    formatListsResults: function formatListsResults(items) {
      var likedListIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      try {
        return formatListCards(items, _objectSpread2({
          likedListIds: likedListIds
        }, options));
      } catch (error) {
        return {
          results: []
        };
      }
    },
    get: function get(url) {
      var unauthorized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return requestApi('GET', url, {}, unauthorized);
    },
    // Normalize ids for watchlist/history operations.
    // Prefer params.ids when filled; fall back to tmdb_id/trakt_id when needed.
    recommendations: function recommendations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = options.limit || 36;
      var page = options.page || 1;
      return new Promise(function (resolve, reject) {
        // Fetch a larger set to allow for pagination
        var fetchLimit = limit * 5; // Fetch more items to have enough for pagination

        var moviesRequest = requestApi('GET', "/recommendations/movies?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(fetchLimit));
        var showsRequest = requestApi('GET', "/recommendations/shows?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(fetchLimit));
        Promise.all([moviesRequest, showsRequest]).then(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            moviesResponse = _ref5[0],
            showsResponse = _ref5[1];
          var formattedMovies = moviesResponse.map(function (movie) {
            return {
              component: 'full',
              id: movie.ids.tmdb,
              ids: movie.ids,
              // Додаємо всі ids
              title: movie.title,
              original_title: movie.title,
              release_date: movie.year + '',
              vote_average: movie.rating || 0,
              poster: getImageUrl(movie, 'poster'),
              method: 'movie',
              card_type: 'movie'
            };
          });
          var formattedShows = showsResponse.map(function (show) {
            return {
              component: 'full',
              id: show.ids.tmdb,
              ids: show.ids,
              // Додаємо всі ids
              title: show.title,
              original_title: show.title,
              release_date: show.year + '',
              vote_average: show.rating || 0,
              poster: getImageUrl(show, 'poster'),
              type: 'tv',
              method: 'tv',
              card_type: 'tv'
            };
          });
          var combinedResults = [].concat(_toConsumableArray(formattedMovies), _toConsumableArray(formattedShows));

          // Перемішування результатів
          for (var i = combinedResults.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref6 = [combinedResults[j], combinedResults[i]];
            combinedResults[i] = _ref6[0];
            combinedResults[j] = _ref6[1];
          }

          // Calculate total pages
          var total = combinedResults.length;
          var total_pages = Math.max(1, Math.ceil(total / limit));

          // Apply pagination
          var offset = (page - 1) * limit;
          var paginatedResults = combinedResults.slice(offset, offset + limit);

          // Return with pagination info
          resolve({
            results: paginatedResults,
            total: total,
            total_pages: total_pages,
            page: page
          });
        })["catch"](function (error) {
          console.error('TraktTV', error);

          // Fallback to just movies if the combined request fails
          requestApi('GET', "/recommendations/movies?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(fetchLimit)).then(function (response) {
            var formattedResults = response.map(function (movie) {
              return {
                component: 'full',
                id: movie.ids.tmdb,
                ids: movie.ids,
                // Додаємо всі ids
                title: movie.title,
                original_title: movie.title,
                release_date: movie.year + '',
                vote_average: movie.rating || 0,
                poster: getImageUrl(movie, 'poster'),
                method: 'movie',
                card_type: 'movie'
              };
            });

            // Calculate total pages
            var total = formattedResults.length;
            var total_pages = Math.max(1, Math.ceil(total / limit));

            // Apply pagination to the results
            var offset = (page - 1) * limit;
            var paginatedResults = formattedResults.slice(offset, offset + limit);

            // Format and return the results with pagination info
            resolve({
              results: paginatedResults,
              total: total,
              total_pages: total_pages,
              page: page
            });
          })["catch"](function (fallbackError) {
            console.error('TraktTV', fallbackError);
            reject(fallbackError);
          });
        });
      });
    },
    watchlist: function watchlist(params) {
      return new Promise(function (resolve, reject) {
        var page = params.page || 1;
        var limit = params.limit || 36;
        requestApi('GET', '/sync/watchlist/movies,shows/added/asc?extended=images').then(function (response) {
          // Calculate total items and pages
          var total = response.length;
          var total_pages = Math.max(1, Math.ceil(total / limit));

          // Apply pagination
          var offset = (page - 1) * limit;
          var paginatedResults = response.slice(offset, offset + limit);

          // Format and return with pagination info
          var formattedData = formatTraktResults(paginatedResults);
          formattedData.total = total;
          formattedData.total_pages = total_pages;
          formattedData.page = page;
          resolve(formattedData);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    upnext: function upnext(params) {
      var logging = Lampa.Storage.field('trakt_enable_logging');
      return new Promise(function (resolve, reject) {
        var page = params.page || 1;
        var limit = params.limit || 36;
        requestApi('GET', '/sync/watched/shows?extended=images,full,seasons').then(function (watchedResponse) {
          if (logging) console.log('TraktTV', 'upnext: watchedResponse', watchedResponse);
          var watched = Array.isArray(watchedResponse) ? watchedResponse : [];

          // Фільтруємо серіали з непереглянутими епізодами
          var watching = watched.filter(function (item) {
            if (!item.show || typeof item.show.aired_episodes !== 'number') return false;
            var totalEpisodes = item.show.aired_episodes;
            var watchedEpisodes = 0;
            if (Array.isArray(item.seasons)) {
              item.seasons.forEach(function (season) {
                if (Array.isArray(season.episodes) && season.number > 0) {
                  watchedEpisodes += season.episodes.length;
                }
              });
            }
            return totalEpisodes > watchedEpisodes;
          });
          if (logging) console.log('TraktTV', 'upnext: watching (filtered)', watching);

          // Отримуємо інформацію про останній вийшовший епізод для кожного серіалу паралельно
          var lastEpisodePromises = watching.map(function (item) {
            var showId = item.show.ids.trakt;
            return requestApi('GET', "/shows/".concat(showId, "/last_episode?extended=full")).then(function (lastEpisode) {
              var watchedEpisodes = 0;
              if (Array.isArray(item.seasons)) {
                item.seasons.forEach(function (season) {
                  if (Array.isArray(season.episodes) && season.number > 0) {
                    watchedEpisodes += season.episodes.length;
                  }
                });
              }
              return {
                component: 'full',
                id: item.show.ids.tmdb || item.show.ids.trakt,
                ids: item.show.ids,
                title: item.show.title,
                original_title: item.show.original_title || item.show.title,
                release_date: item.show.year ? String(item.show.year) : '',
                vote_average: item.show.rating || 0,
                poster: getImageUrl(item.show, 'poster'),
                image: getImageUrl(item.show, 'fanart'),
                method: 'tv',
                trakt_upnext_watched: watchedEpisodes,
                trakt_upnext_total: item.show.aired_episodes,
                trakt_upnext_progress: "".concat(watchedEpisodes, "/").concat(item.show.aired_episodes),
                status: item.show.status,
                last_aired: (lastEpisode === null || lastEpisode === void 0 ? void 0 : lastEpisode.first_aired) || null
              };
            })["catch"](function (error) {
              // Якщо не вдалося отримати останній епізод, повертаємо без дати
              if (logging) console.warn('TraktTV', "Failed to get last episode for show ".concat(item.show.title, ":"), error);
              var watchedEpisodes = 0;
              if (Array.isArray(item.seasons)) {
                item.seasons.forEach(function (season) {
                  if (Array.isArray(season.episodes) && season.number > 0) {
                    watchedEpisodes += season.episodes.length;
                  }
                });
              }
              return {
                component: 'full',
                id: item.show.ids.tmdb || item.show.ids.trakt,
                ids: item.show.ids,
                title: item.show.title,
                original_title: item.show.original_title || item.show.title,
                release_date: item.show.year ? String(item.show.year) : '',
                vote_average: item.show.rating || 0,
                poster: getImageUrl(item.show, 'poster'),
                image: getImageUrl(item.show, 'fanart'),
                method: 'tv',
                trakt_upnext_watched: watchedEpisodes,
                trakt_upnext_total: item.show.aired_episodes,
                trakt_upnext_progress: "".concat(watchedEpisodes, "/").concat(item.show.aired_episodes),
                status: item.show.status,
                last_aired: null
              };
            });
          });

          // Чекаємо на всі запити
          return Promise.all(lastEpisodePromises);
        }).then(function (results) {
          if (logging) console.log('TraktTV', 'upnext: results (mapped)', results);

          // Сортуємо по даті виходу останнього епізоду (найновіші першими)
          results.sort(function (a, b) {
            if (!a.last_aired && !b.last_aired) return 0;
            if (!a.last_aired) return 1;
            if (!b.last_aired) return -1;
            return new Date(b.last_aired) - new Date(a.last_aired);
          });

          // Calculate total items and pages
          var total = results.length;
          var total_pages = Math.max(1, Math.ceil(total / limit));

          // Apply pagination
          var offset = (page - 1) * limit;
          var paginatedResults = results.slice(offset, offset + limit);

          // Return with pagination info
          resolve({
            results: paginatedResults,
            total: total,
            total_pages: total_pages,
            page: page
          });
        })["catch"](reject);
      });
    },
    auth: {
      /**
       * Build Standard OAuth authorize URL
       * params: { redirect_uri, state?, signup?, prompt? }
       */
      startStandardOAuth: function startStandardOAuth() {
        var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          redirect_uri = _ref7.redirect_uri,
          state = _ref7.state,
          signup = _ref7.signup,
          prompt = _ref7.prompt;
        var base = 'https://trakt.tv/oauth/authorize';
        var qs = new URLSearchParams({
          client_id: CLIENT_ID,
          redirect_uri: redirect_uri,
          response_type: 'code'
        });
        if (state) qs.set('state', state);
        if (typeof signup !== 'undefined') qs.set('signup', String(signup));
        if (prompt) qs.set('prompt', prompt);
        return base + '?' + qs.toString();
      },
      /**
       * Exchange authorization code for tokens
       * Body: { code, client_id, client_secret, redirect_uri, grant_type: 'authorization_code' }
       * unauthorized = true
       */
      exchangeCode: function exchangeCode(_ref8) {
        var code = _ref8.code,
          redirect_uri = _ref8.redirect_uri;
        return requestApi('POST', '/oauth/token', {
          code: code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        }, true).then(function (res) {
          if (res && res.access_token) {
            saveTokens(res);
          }
          return res;
        });
      },
      /**
       * Refresh tokens using refresh_token
       * unauthorized = true
       */
      refresh: function refresh() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return runRefreshFlow(_objectSpread2({
          reason: 'manual-refresh'
        }, options));
      },
      ensureValid: function ensureValid() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ensureValidAccessToken(options);
      },
      storeTokens: function storeTokens() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        saveTokens(response);
        return response;
      },
      clear: function clear() {
        clearAuthStorage();
      },
      /**
       * Revoke token best-effort
       * unauthorized = true
       */
      revoke: function revoke(_ref9) {
        var token = _ref9.token;
        return requestApi('POST', '/oauth/revoke', {
          token: token,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }, true);
      },
      device: {
        /**
         * Device OAuth: start
         */
        login: function login() {
          return _performRequest('POST', '/oauth/device/code', {
            client_id: CLIENT_ID
          }, true);
        },
        /**
         * Device OAuth: poll token
         * unauthorized = true
         */
        poll: function poll(device_code) {
          return _performRequest('POST', '/oauth/device/token', {
            code: device_code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
          }, true).then(function (response) {
            if (response && response.access_token) {
              saveTokens(response);
            }
            return response;
          });
        }
      },
      logout: function logout() {
        clearAuthStorage();
      }
    },
    addToWatchlist: function addToWatchlist(params) {
      return requestApi('POST', '/sync/watchlist', buildSyncPayload(params));
    },
    removeFromWatchlist: function removeFromWatchlist(params) {
      return requestApi('POST', '/sync/watchlist/remove', buildSyncPayload(params));
    },
    inWatchlist: function inWatchlist(params) {
      var type = normalizeMediaType(params) === 'movie' ? 'movies' : 'shows';
      var ids = resolveTraktIds(params);
      return requestApi('GET', "/sync/watchlist/".concat(type, "?extended=full")).then(function (response) {
        var found = (Array.isArray(response) ? response : []).find(function (item) {
          var entity = extractMediaFromSyncItem(item);
          return entity.media && sameAnyId(entity.media.ids || {}, ids);
        });
        return !!found;
      });
    },
    inHistory: function inHistory(params) {
      var type = normalizeMediaType(params) === 'movie' ? 'movies' : 'shows';
      var ids = resolveTraktIds(params);
      return requestApi('GET', "/sync/history/".concat(type, "?extended=full")).then(function (response) {
        var found = (Array.isArray(response) ? response : []).find(function (item) {
          var entity = extractMediaFromSyncItem(item);
          return entity.media && sameAnyId(entity.media.ids || {}, ids);
        });
        return !!found;
      });
    },
    // liked lists (read-only)
    likesLists: function likesLists() {
      var _this = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = params.page || 1;
      var limit = params.limit || 36;
      return requestApi('GET', withNoCache("/users/me/likes/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images"))).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var likedListIds = raw.map(function (item) {
          var _item$list;
          return item === null || item === void 0 || (_item$list = item.list) === null || _item$list === void 0 || (_item$list = _item$list.ids) === null || _item$list === void 0 ? void 0 : _item$list.trakt;
        }).filter(Boolean);
        var formatted = _this.formatListsResults(raw, likedListIds, {
          wide: false,
          canManage: false
        });
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    // alias for backward compatibility
    lists: function lists() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.likesLists(params);
    },
    // personal lists (CRUD enabled)
    myLists: function myLists() {
      var _this2 = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = params.page || 1;
      var limit = params.limit || 36;
      return requestApi('GET', withNoCache("/users/me/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images"))).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = _this2.formatListsResults(raw, [], {
          wide: true,
          canManage: true
        });
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    myList: function myList() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.listId || params.id;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('GET', withNoCache("/users/me/lists/".concat(encodeURIComponent(listId), "?extended=images"))).then(function (response) {
        return normalizeListCardData(response, {
          wide: true,
          canManage: true
        });
      });
    },
    createList: function createList() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var body = sanitizeListPayload(payload);
      if (!body.name) return Promise.reject(new Error('List name is missing'));
      if (!body.privacy) body.privacy = 'private';
      return requestApi('POST', '/users/me/lists', body);
    },
    updateList: function updateList() {
      var _ref0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref0.listId,
        payload = _ref0.payload;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var body = sanitizeListPayload(payload);
      if (!body.name) return Promise.reject(new Error('List name is missing'));
      return requestApi('PUT', "/users/me/lists/".concat(encodeURIComponent(listId)), body);
    },
    deleteList: function deleteList() {
      var _ref1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref1.listId;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('DELETE', "/users/me/lists/".concat(encodeURIComponent(listId)));
    },
    addToList: function addToList() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref10.listId,
        item = _ref10.item;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('POST', "/users/me/lists/".concat(encodeURIComponent(listId), "/items"), buildSyncPayload(item || {}));
    },
    removeFromList: function removeFromList() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref11.listId,
        item = _ref11.item;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('POST', "/users/me/lists/".concat(encodeURIComponent(listId), "/items/remove"), buildSyncPayload(item || {}));
    },
    myListItems: function myListItems() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.listId || params.id;
      var page = params.page || 1;
      var limit = params.limit || 36;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var url = withNoCache("/users/me/lists/".concat(encodeURIComponent(listId), "/items?extended=images&page=").concat(page, "&limit=").concat(limit));
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    inList: function inList() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref12.listId,
        item = _ref12.item,
        _ref12$limit = _ref12.limit,
        limit = _ref12$limit === void 0 ? 100 : _ref12$limit,
        _ref12$maxPages = _ref12.maxPages,
        maxPages = _ref12$maxPages === void 0 ? 10 : _ref12$maxPages;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var ids = resolveTraktIds(item || {});
      if (!Object.keys(ids).length) return Promise.resolve(false);
      var page = 1;
      var _checkPage = function checkPage() {
        var url = withNoCache("/users/me/lists/".concat(encodeURIComponent(listId), "/items?extended=images&page=").concat(page, "&limit=").concat(limit));
        return requestApi('GET', url).then(function (response) {
          var raw = Array.isArray(response) ? response : [];
          var found = raw.some(function (entry) {
            var entity = extractMediaFromSyncItem(entry);
            return entity.media && sameAnyId(entity.media.ids || {}, ids);
          });
          if (found) return true;
          if (!raw.length || raw.length < limit || page >= maxPages) return false;
          page += 1;
          return _checkPage();
        });
      };
      return _checkPage();
    },
    // public list detail (liked/shared)
    list: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.id || params.list_id || params.listId;
      var page = params.page || 1;
      var limit = params.limit || 36;
      if (!listId) {
        return Promise.reject(new Error('List ID is missing'));
      }
      var url = withNoCache("/lists/".concat(encodeURIComponent(listId), "/items?extended=images&page=").concat(page, "&limit=").concat(limit));
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    // Новий метод для отримання списків, пов'язаних з медіа (фільмом або серіалом)
    getMediaLists: function getMediaLists(params) {
      return new Promise(function (resolve, reject) {
        var tmdbId = params.id;
        var mediaType = params.method; // 'movie' or 'show'

        if (!tmdbId || !mediaType) {
          reject(new Error('Media ID or type is missing'));
          return;
        }

        // Спочатку отримуємо Trakt ID за TMDB ID
        requestApi('GET', "/search/tmdb/".concat(tmdbId, "?type=").concat(mediaType)).then(function (searchResponse) {
          var traktId = null;
          if (searchResponse && searchResponse.length > 0) {
            if (mediaType === 'movie' && searchResponse[0].movie) {
              traktId = searchResponse[0].movie.ids.trakt;
            } else if (mediaType === 'show' && searchResponse[0].show) {
              traktId = searchResponse[0].show.ids.trakt;
            }
          }
          if (!traktId) {
            reject(new Error("Trakt ID not found for TMDB ID: ".concat(tmdbId)));
            return;
          }
          var url = '';
          if (mediaType === 'movie') {
            url = "/movies/".concat(traktId, "/lists");
          } else if (mediaType === 'show') {
            url = "/shows/".concat(traktId, "/lists");
          }
          requestApi('GET', url).then(function (response) {
            var formattedData = api$1.formatListsResults(response);
            resolve(formattedData.results);
          })["catch"](function (error) {
            reject(error);
          });
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  };

  // Глобальний обробник Unhandled Promise Rejection для діагностики
  if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', function (event) {
      if (Lampa.Storage.field('trakt_enable_logging')) {
        console.error('TraktTV', 'Unhandled promise rejection:', event.reason);
      }
    });
  }

  // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
  var Api$2 = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;

  // Version check for Lampa 3.0+ modular system
  var isLampa3 = window.Lampa && window.Lampa.Manifest && window.Lampa.Manifest.app_digital >= 300;
  function resolveUpnextProgress$1() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var watched = Number(element.trakt_upnext_watched);
    var total = Number(element.trakt_upnext_total);
    var text = (element.trakt_upnext_progress || '').toString().trim();
    var safeWatched = Number.isFinite(watched) ? watched : 0;
    var safeTotal = Number.isFinite(total) ? total : 0;
    if (!text && safeTotal > 0) {
      text = "".concat(safeWatched, "/").concat(safeTotal);
    }
    if ((!safeWatched || !safeTotal) && text.indexOf('/') > -1) {
      var parts = text.split('/');
      var parsedWatched = Number(parts[0]);
      var parsedTotal = Number(parts[1]);
      if (Number.isFinite(parsedWatched) && parsedWatched >= 0) safeWatched = parsedWatched;
      if (Number.isFinite(parsedTotal) && parsedTotal > 0) safeTotal = parsedTotal;
    }
    if (!text) return null;
    var percent = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round(safeWatched / safeTotal * 100))) : null;
    return {
      text: text,
      percent: percent
    };
  }
  function renderUpnextCardProgress(card, element) {
    var progress = resolveUpnextProgress$1(element || {});
    if (!progress) return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView) return;
    var badge = cardView.querySelector('.trakt-upnext-progress');
    if (!badge) {
      badge = document.createElement('div');
      badge.className = 'trakt-upnext-progress';
      cardView.appendChild(badge);
    }
    badge.textContent = progress.text;
    if (progress.percent !== null) {
      badge.style.setProperty('--trakt-upnext-progress', "".concat(progress.percent, "%"));
    } else {
      badge.style.removeProperty('--trakt-upnext-progress');
    }
  }
  function renderTvTypeBadge(card, element) {
    if (!element || element.method !== 'tv' && element.type !== 'show') return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardNode || !cardView) return;
    cardNode.classList.add('card--tv');
    if (!cardView.querySelector('.card__type')) {
      var type = document.createElement('div');
      type.className = 'card__type';
      type.textContent = Lampa.Lang.translate('trakttv_card_type_tv');
      cardView.appendChild(type);
    }
  }
  function baseComponent(object, type) {
    var comp;
    var total_pages = 0;
    var waitload = false;

    // Use modular system for Lampa 3.0+, fallback to old system for compatibility
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          var params = _objectSpread2({}, object);
          if ((type === 'list' || type === 'myListItems') && object.id) {
            params.id = object.id;
          } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
            params.id = object.list_id;
          }
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2) {
            var _Lampa;
            if ((_Lampa = Lampa) !== null && _Lampa !== void 0 && (_Lampa = _Lampa.Storage) !== null && _Lampa !== void 0 && _Lampa.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing');
            this.empty();
            return;
          }
          Api$2[type](params).then(function (data) {
            if (type !== 'upnext' && data && data.total_pages) {
              total_pages = data.total_pages;
            }
            _this.build(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
              results: []
            });
          })["catch"](function () {
            _this.empty();
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this2 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page < total_pages) {
            waitload = true;
            object.page++;
            var params = _objectSpread2({}, object);
            if ((type === 'list' || type === 'myListItems') && object.id) {
              params.id = object.id;
            } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
              params.id = object.list_id;
            }
            params.limit = 36;
            if (!Api$2) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2[type](params).then(function (data) {
              resolve.call(_this2, data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
                results: []
              });
              waitload = false;
            })["catch"](function () {
              waitload = false;
              reject.call(_this2);
            });
          } else {
            reject.call(this);
          }
        },
        onInstance: function onInstance(card, element) {
          card.use({
            onCreate: function onCreate() {
              renderTvTypeBadge(this, element);
              if (type === 'upnext') {
                renderUpnextCardProgress(this, element);
              }
            }
          });
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              Lampa.Activity.push(this.data);
            },
            onLong: function onLong() {
              if (type === 'myListItems' && object && object.can_manage && object.id) {
                openMyListItemActions(object, element);
              }
            }
          });
        }
      });
    } else {
      // Backward compatibility for Lampa < 3.0
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this3 = this;
        var params = _objectSpread2({}, object);
        if ((type === 'list' || type === 'myListItems') && object.id) {
          params.id = object.id;
        } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
          params.id = object.list_id;
        }
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2) {
          var _Lampa2;
          if ((_Lampa2 = Lampa) !== null && _Lampa2 !== void 0 && (_Lampa2 = _Lampa2.Storage) !== null && _Lampa2 !== void 0 && _Lampa2.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing');
          return;
        }
        Api$2[type](params).then(function (data) {
          if (type !== 'upnext' && data && data.total_pages) {
            total_pages = data.total_pages;
          }
          _this3.build(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
            results: []
          });
          if (_this3.activity.scroll) {
            _this3.activity.scroll.onEnd = _this3.next.bind(_this3);
          }
        })["catch"](function () {
          _this3.empty();
        });
      };
      comp.next = function () {
        var _this4 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          if ((type === 'list' || type === 'myListItems') && object.id) {
            params.id = object.id;
          } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
            params.id = object.list_id;
          }
          params.limit = 36;
          if (!Api$2) {
            var _Lampa3;
            if ((_Lampa3 = Lampa) !== null && _Lampa3 !== void 0 && (_Lampa3 = _Lampa3.Storage) !== null && _Lampa3 !== void 0 && _Lampa3.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing');
            return;
          }
          Api$2[type](params).then(function (data) {
            _this4.append(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
              results: []
            });
            waitload = false;
          })["catch"](function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (_, element, card) {
        renderTvTypeBadge(card, element);
        if (type === 'upnext') {
          renderUpnextCardProgress(card, element);
        }
        card.onMenu = type === 'myListItems' && object && object.can_manage && object.id ? function () {
          return openMyListItemActions(object, element);
        } : false;
        card.onEnter = function () {
          Lampa.Activity.push(card.data);
        };
      };
    }
    return comp;
  }
  function baseRecommendations(object) {
    var comp;
    var total_pages = 0;
    var waitload = false;

    // Use modular system for Lampa 3.0+, fallback to old system for compatibility
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this5 = this;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2) {
            var _Lampa4;
            if ((_Lampa4 = Lampa) !== null && _Lampa4 !== void 0 && (_Lampa4 = _Lampa4.Storage) !== null && _Lampa4 !== void 0 && _Lampa4.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing');
            this.empty();
            return;
          }
          Api$2.recommendations(params).then(function (recommendations) {
            _this5.build(recommendations && _typeof(recommendations) === 'object' && Array.isArray(recommendations.results) ? recommendations : {
              results: []
            });
            if (recommendations && recommendations.total_pages) {
              total_pages = recommendations.total_pages;
            }
          })["catch"](function () {
            _this5.empty();
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this6 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page < total_pages) {
            waitload = true;
            object.page++;
            var params = _objectSpread2({}, object);
            params.limit = 36;
            if (!Api$2) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2.recommendations(params).then(function (data) {
              resolve.call(_this6, data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
                results: []
              });
              waitload = false;
            })["catch"](function () {
              waitload = false;
              reject.call(_this6);
            });
          } else {
            reject.call(this);
          }
        },
        onInstance: function onInstance(card, element) {
          if (element.method === 'tv') {
            card.render().addClass('card--tv').append('<div class="card__type">' + Lampa.Lang.translate('trakttv_card_type_tv') + '</div>');
          }
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: element.id,
                method: element.method,
                card: this.data,
                source: 'tmdb'
              });
            }
          });
        }
      });
    } else {
      // Backward compatibility for Lampa < 3.0
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this7 = this;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2) {
          var _Lampa5;
          if ((_Lampa5 = Lampa) !== null && _Lampa5 !== void 0 && (_Lampa5 = _Lampa5.Storage) !== null && _Lampa5 !== void 0 && _Lampa5.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing');
          return;
        }
        Api$2.recommendations(params).then(function (recommendations) {
          _this7.build(recommendations && _typeof(recommendations) === 'object' && Array.isArray(recommendations.results) ? recommendations : {
            results: []
          });
          if (recommendations && recommendations.total_pages) {
            total_pages = recommendations.total_pages;
          }
          if (_this7.activity.scroll) {
            _this7.activity.scroll.onEnd = _this7.next.bind(_this7);
          }
        })["catch"](function () {
          _this7.empty();
        });
      };
      comp.next = function () {
        var _this8 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          if (!Api$2) {
            var _Lampa6;
            if ((_Lampa6 = Lampa) !== null && _Lampa6 !== void 0 && (_Lampa6 = _Lampa6.Storage) !== null && _Lampa6 !== void 0 && _Lampa6.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing');
            return;
          }
          Api$2.recommendations(params).then(function (data) {
            _this8.append(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
              results: []
            });
            waitload = false;
          })["catch"](function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (object, element, card) {
        if (element.method === 'tv') {
          card.render().addClass('card--tv').append('<div class="card__type">' + Lampa.Lang.translate('trakttv_card_type_tv') + '</div>');
        }
        card.onMenu = false;
        card.onEnter = function () {
          Lampa.Activity.push({
            url: '',
            component: 'full',
            id: element.id,
            method: element.method,
            card: card,
            source: 'tmdb'
          });
        };
      };
    }
    return comp;
  }
  function t$2(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function notify$1(text) {
    Lampa.Bell.push({
      text: text
    });
  }
  function getListName() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (element.list_title || element.title || element.name || '').trim();
  }
  function restoreContentController() {
    setTimeout(function () {
      if (Lampa && Lampa.Controller) Lampa.Controller.toggle('content');
    }, 0);
  }
  function formatNamedListTitle(name, itemCount) {
    var safeName = (name || '').trim();
    var hasCount = typeof itemCount === 'number' && itemCount >= 0;
    if (safeName && hasCount) return "".concat(safeName, " (").concat(itemCount, ")");
    if (safeName) return safeName;
    return t$2('trakt_list_detail', 'List Content');
  }
  function refreshActivity(object, component) {
    if (!Lampa || !Lampa.Activity || typeof Lampa.Activity.replace !== 'function') return;
    var next = _objectSpread2(_objectSpread2({}, object), {}, {
      component: component || object.component,
      page: 1,
      refresh: Date.now()
    });
    Lampa.Activity.replace(next);
  }
  function refreshMyListsAfterCreate(activityObject, createdList) {
    var listId = createdList && createdList.ids ? createdList.ids.trakt || createdList.id : createdList && createdList.id;
    var maxAttempts = 8;
    var delayMs = 900;
    if (!Api$2 || !listId) {
      refreshActivity(activityObject, 'trakt_my_lists');
      return;
    }
    var _attempt = function attempt(index) {
      Api$2.myLists({
        page: 1,
        limit: 100
      }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        var found = results.some(function (item) {
          return String(item.id) === String(listId);
        });
        if (found || index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt(index + 1);
        }, delayMs);
      })["catch"](function () {
        if (index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt(index + 1);
        }, delayMs);
      });
    };
    _attempt(1);
  }
  function refreshMyListsAfterDelete(activityObject, deletedListId) {
    var listId = deletedListId;
    var maxAttempts = 8;
    var delayMs = 900;
    if (!Api$2 || !listId) {
      refreshActivity(activityObject, 'trakt_my_lists');
      return;
    }
    var _attempt2 = function attempt(index) {
      Api$2.myLists({
        page: 1,
        limit: 100
      }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        var stillExists = results.some(function (item) {
          return String(item.id) === String(listId);
        });
        if (!stillExists || index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt2(index + 1);
        }, delayMs);
      })["catch"](function () {
        if (index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt2(index + 1);
        }, delayMs);
      });
    };
    _attempt2(1);
  }
  function showApiError(error) {
    var fallbackKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trakt_list_action_error';
    var status = error && error.status;
    var message = t$2(fallbackKey, 'Trakt request failed');
    if (status === 420) message = t$2('trakt_list_limit_reached', 'List limit reached');else if (status === 409) message = t$2('trakt_list_conflict', 'Conflict while updating list');else if (status === 401 || status === 403) message = t$2('trakttvAuthMissed', 'Not logged');
    notify$1(message);
    if (Lampa.Storage.field('trakt_enable_logging')) {
      console.error('TraktTV', 'List API error', status, error);
    }
  }
  function buildCreateListCard() {
    return {
      id: '__trakt_create_list__',
      title: t$2('trakt_list_create_short', 'Create'),
      description: '',
      overview: '',
      method: 'list',
      can_manage: true,
      is_create_action: true,
      cover: './img/img_load.svg',
      poster: './img/img_load.svg',
      params: {
        style: {
          name: 'wide'
        }
      }
    };
  }
  function withCreateListAction(data, page) {
    if (page !== 1) return data;
    var normalized = data && _typeof(data) === 'object' && Array.isArray(data.results) ? _objectSpread2(_objectSpread2({}, data), {}, {
      results: data.results.slice()
    }) : {
      results: []
    };
    normalized.results.unshift(buildCreateListCard());
    return normalized;
  }
  function openListDetail(element) {
    var componentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trakt_list_detail';
    var listName = getListName(element);
    Lampa.Activity.push({
      url: '',
      title: formatNamedListTitle(listName, element.item_count),
      component: componentName,
      id: element.id,
      list_id: element.id,
      name: listName,
      description: element.description,
      privacy: element.privacy,
      can_manage: !!element.can_manage,
      page: 1,
      source: 'tmdb'
    });
  }
  function openListEditor(list, onSubmit) {
    var source = list || {};
    var defaultName = source.list_title || source.title || source.name || '';
    var defaultDescription = source.description || '';
    var defaultPrivacy = source.privacy || 'private';
    Lampa.Input.edit({
      title: t$2('trakt_list_name_input', 'List name'),
      value: defaultName,
      free: true,
      nosave: true,
      nomic: true
    }, function (nameValue) {
      restoreContentController();
      var name = (nameValue || '').trim();
      if (!name) {
        notify$1(t$2('trakt_list_name_required', 'List name is required'));
        return;
      }
      onSubmit({
        name: name,
        description: defaultDescription,
        privacy: defaultPrivacy,
        display_numbers: !!source.display_numbers,
        allow_comments: !!source.allow_comments
      });
    });
  }
  function createMyList(activityObject) {
    if (!Api$2) return;
    openListEditor({}, function (payload) {
      Api$2.createList(payload).then(function (createdList) {
        notify$1(t$2('trakt_list_created', 'List created'));
        refreshMyListsAfterCreate(activityObject, createdList);
      })["catch"](function (error) {
        return showApiError(error, 'trakt_list_create_error');
      });
    });
  }
  function editMyList(activityObject, element) {
    if (!Api$2 || !element || !element.id) return;
    openListEditor(element, function (payload) {
      Api$2.updateList({
        listId: element.id,
        payload: payload
      }).then(function () {
        notify$1(t$2('trakt_list_updated', 'List updated'));
        refreshActivity(activityObject, 'trakt_my_lists');
      })["catch"](function (error) {
        return showApiError(error, 'trakt_list_edit_error');
      });
    });
  }
  function deleteMyList(activityObject, element) {
    if (!Api$2 || !element || !element.id) return;
    Lampa.Select.show({
      title: t$2('trakt_list_confirm_delete', 'Delete this list?'),
      items: [{
        title: t$2('trakt_list_delete_confirm_action', 'Delete'),
        confirm: true
      }, {
        title: t$2('cancel', 'Cancel')
      }],
      onSelect: function onSelect(item) {
        if (!item.confirm) {
          Lampa.Controller.toggle('content');
          return;
        }
        Api$2.deleteList({
          listId: element.id
        }).then(function () {
          notify$1(t$2('trakt_list_deleted', 'List deleted'));
          refreshMyListsAfterDelete(activityObject, element.id);
        })["catch"](function (error) {
          return showApiError(error, 'trakt_list_delete_error');
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openMyListActions(activityObject, element) {
    if (!element) return;
    if (element.is_create_action) {
      createMyList(activityObject);
      return;
    }
    Lampa.Select.show({
      title: t$2('title_action', 'Action'),
      items: [{
        title: t$2('trakt_list_open', 'Open list'),
        action: 'open'
      }, {
        title: t$2('trakt_list_edit', 'Edit list'),
        action: 'edit'
      }, {
        title: t$2('trakt_list_delete', 'Delete list'),
        action: 'delete'
      }],
      onSelect: function onSelect(item) {
        if (item.action === 'open') openListDetail(element, 'trakt_my_list_detail');
        if (item.action === 'edit') editMyList(activityObject, element);
        if (item.action === 'delete') deleteMyList(activityObject, element);
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openMyListItemActions(object, element) {
    if (!Api$2 || !object || !object.id || !element) return;
    Lampa.Select.show({
      title: t$2('title_action', 'Action'),
      items: [{
        title: t$2('trakt_remove_from_list', 'Remove from this list'),
        action: 'remove'
      }],
      onSelect: function onSelect(item) {
        if (item.action !== 'remove') return;
        Api$2.removeFromList({
          listId: object.id,
          item: element
        }).then(function () {
          notify$1(t$2('trakt_item_removed_from_list', 'Item removed from list'));
          refreshActivity(object, 'trakt_my_list_detail');
        })["catch"](function (error) {
          return showApiError(error, 'trakt_remove_from_list_error');
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function renderWideListCard(card, element) {
    var root = card.render();
    root.addClass('trakt-list-wide-card');
    var promo = root.find('.card__promo');
    if (element.is_create_action) {
      root.addClass('trakt-list-wide-card--create');
      return;
    }
    if (promo.length) {
      // For list cards without real posters use only generated cover text.
      promo.remove();
    }
  }
  function listCatalog(object, apiMethod) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread2({
      detailComponent: 'trakt_list_detail',
      manage: false,
      addCreateAction: false
    }, options);
    var comp;
    var total_pages = 0;
    var waitload = false;
    var withActions = function withActions(data, page) {
      return config.addCreateAction ? withCreateListAction(data, page) : data;
    };
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this9 = this;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2 || !Api$2[apiMethod]) {
            this.empty();
            return;
          }
          Api$2[apiMethod](params).then(function (data) {
            total_pages = data && data.total_pages ? data.total_pages : 0;
            _this9.build(withActions(data, params.page));
          })["catch"](function () {
            return _this9.empty();
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this0 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page < total_pages) {
            waitload = true;
            object.page++;
            var params = _objectSpread2({}, object);
            params.limit = 36;
            if (!Api$2 || !Api$2[apiMethod]) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2[apiMethod](params).then(function (data) {
              resolve.call(_this0, withActions(data, params.page));
              waitload = false;
            })["catch"](function () {
              waitload = false;
              reject.call(_this0);
            });
          } else {
            reject.call(this);
          }
        },
        onInstance: function onInstance(card, element) {
          renderWideListCard(card, element);
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              if (element.is_create_action) {
                createMyList(object);
                return;
              }
              openListDetail(element, config.detailComponent);
            },
            onLong: function onLong() {
              if (config.manage) openMyListActions(object, element);
            }
          });
        }
      });
    } else {
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this1 = this;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2 || !Api$2[apiMethod]) return;
        Api$2[apiMethod](params).then(function (data) {
          total_pages = data && data.total_pages ? data.total_pages : 0;
          _this1.build(withActions(data, params.page));
          if (_this1.activity.scroll) _this1.activity.scroll.onEnd = _this1.next.bind(_this1);
        })["catch"](function () {
          return _this1.empty();
        });
      };
      comp.next = function () {
        var _this10 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          if (!Api$2 || !Api$2[apiMethod]) return;
          Api$2[apiMethod](params).then(function (data) {
            _this10.append(withActions(data, params.page));
            waitload = false;
          })["catch"](function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (_, element, card) {
        renderWideListCard(card, element);
        card.onEnter = function () {
          if (element.is_create_action) {
            createMyList(object);
            return;
          }
          openListDetail(element, config.detailComponent);
        };
        card.onMenu = config.manage ? function () {
          return openMyListActions(object, element);
        } : false;
      };
    }
    return comp;
  }
  function watchlist$1(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'watchlist');
  }
  function upnext(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'upnext');
  }
  function recommendations(object) {
    if (!object.page) object.page = 1;
    return new baseRecommendations(object);
  }
  function liked_lists(object) {
    if (!object.page) object.page = 1;
    return listCatalog(object, 'likesLists', {
      detailComponent: 'trakt_list_detail',
      manage: false,
      addCreateAction: false
    });
  }
  function lists(object) {
    return liked_lists(object);
  }
  function my_lists(object) {
    if (!object.page) object.page = 1;
    return listCatalog(object, 'myLists', {
      detailComponent: 'trakt_my_list_detail',
      manage: true,
      addCreateAction: true
    });
  }
  function list_detail(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'list');
  }
  function my_list_detail(object) {
    if (!object.page) object.page = 1;
    object.can_manage = true;
    return new baseComponent(object, 'myListItems');
  }
  function trakt_list_detail(object) {
    if (!object.page) object.page = 1;
    var paramsForBaseComponent = _objectSpread2(_objectSpread2({}, object), {}, {
      id: object.id || object.list_id,
      page: object.page,
      limit: object.limit
    });
    return new baseComponent(paramsForBaseComponent, 'list');
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext,
    recommendations: recommendations,
    lists: lists,
    liked_lists: liked_lists,
    my_lists: my_lists,
    list_detail: list_detail,
    my_list_detail: my_list_detail,
    trakt_list_detail: trakt_list_detail
  };

  function Main() {
    Lampa.Lang.add({
      trakttvAuthMissed: {
        ru: "Не авторизированы",
        en: "Not logged",
        uk: "Не авторизовані"
      },
      trakttvAuthOk: {
        ru: "Авторизированы",
        en: "Logged",
        uk: "Авторизовані"
      },
      trakttvAuthUpdated: {
        ru: "Авторизация обновлена",
        en: "Auth success updated",
        uk: "Авторизацію оновлено"
      },
      trakttvAuthError: {
        ru: "Ошибка авторизации",
        en: "Auth error",
        uk: "Помилка авторизаці"
      },
      traktLampaRestart: {
        ru: "Перезагрузите приложение",
        en: "Please restart application",
        uk: "Перезавантажте додаток"
      },
      trakttvLoading: {
        ru: "Загрузка, а пока сделай кофе",
        en: "Loading and go drink coffee",
        uk: "Завантаження, а поки зроби собі кавусю"
      },
      trakttv_remove_from_collection: {
        ru: "Удалить из watchlist",
        en: "Remove from watchlist",
        uk: "Видалити з watchlist"
      },
      trakttv_add_to_collection: {
        ru: "Добавить в watchlist",
        en: "Add to watchlist",
        uk: "Додати в watchlist"
      },
      trakttv_WatchlistSort: {
        ru: "Сортировка watchlist",
        en: "Sort watchlist",
        uk: "Сортування watchlist"
      },
      trakttvLogin: {
        ru: "Войти в Trakt.TV",
        en: "Login to Trakt.TV",
        uk: "Увійти в Trakt.TV"
      },
      trakttvLogout: {
        ru: "Выйти из Trakt.TV",
        en: "Logout from Trakt.TV",
        uk: "Вийти з Trakt.TV"
      },
      trakttvLogoutNoty: {
        ru: "Вы вышли из Trakt.TV",
        en: "You have logged out from Trakt.TV",
        uk: "Ви вийшли з Trakt.TV"
      },
      trakttvKeyCleanered: {
        ru: "Ключ очищен",
        en: "Key cleaned",
        uk: "Ключ очищено"
      },
      trakttvFullClearNoty: {
        ru: "Все очищено",
        en: "All cleared",
        uk: "Все очищено"
      },
      trakttvHumorMinutes: {
        ru: "Потрачено {time} минут на просмотр! Уже почти Netflix-чемпион",
        en: "Spent {time} minutes watching! Almost a Netflix champion",
        uk: "Витрачено {time} хвилин на перегляд! Ти вже майже Netflix-чемпіон"
      },
      trakttvStatPlays: {
        ru: "просмотров",
        en: "plays",
        uk: "переглядів"
      },
      trakttvStatWatched: {
        ru: "просмотрено",
        en: "watched",
        uk: "переглянуто"
      },
      trakttvStatMinutes: {
        ru: "минут",
        en: "minutes",
        uk: "хвилин"
      },
      trakttv_no_series: {
        ru: "Нет сериалов",
        en: "No series",
        uk: "Немає серіалів"
      },
      trakttv_episodes_on: {
        ru: "Серии на",
        en: "Episodes on",
        uk: "Серії на"
      },
      trakttv_calendar_error: {
        ru: "Ошибка загрузки календаря Trakt",
        en: "Trakt Calendar load error",
        uk: "Помилка завантаження календаря Trakt"
      },
      trakttv_no_upcoming: {
        ru: "Нет предстоящих эпизодов",
        en: "No upcoming episodes",
        uk: "Немає майбутніх епізодів"
      },
      trakttvFullClear: {
        ru: "Очистить все ключи Trakt.TV",
        en: "Clear all Trakt.TV keys",
        uk: "Очистити всі ключі Trakt.TV"
      },
      trakt_componentDisable: {
        ru: "Компонент отключен",
        en: "Component disabled",
        uk: "Компонент вимкнено"
      },
      trakt_componentEnable: {
        ru: "Компонент включен",
        en: "Component enabled",
        uk: "Компонент увімкнено"
      },
      trakt_history_added: {
        ru: "Добавлено в историю просмотров",
        en: "Added to watch history",
        uk: "Додано до історії переглядів"
      },
      trakt_history_addError: {
        ru: "Ошибка добавления в историю",
        en: "Error adding to history",
        uk: "Помилка додавання до історії"
      },
      trakt_history_all: {
        ru: "Весь сериал",
        en: "Entire series",
        uk: "Весь серіал"
      },
      trakt_history_season: {
        ru: "Последний сезон",
        en: "Last season",
        uk: "Останній сезон"
      },
      trakt_history_episodes: {
        ru: "Последний эпизод",
        en: "Last episode",
        uk: "Остання серія"
      },
      trakt_history_title: {
        ru: "Что отправить в историю?",
        en: "What to send to history?",
        uk: "Що відправити до історії?"
      },
      trakt_history_removed: {
        ru: "Удалено из истории просмотров",
        en: "Removed from watch history",
        uk: "Видалено з історії переглядів"
      },
      trakt_history_button: {
        ru: "Добавить в историю",
        en: "Add to history",
        uk: "Додати до історії"
      },
      trakt_watchlist_button: {
        ru: "Добавить в watchlist",
        en: "Add to watchlist",
        uk: "Додати до watchlist"
      },
      trakt_watchlist_remove: {
        ru: "Удалить из watchlist",
        en: "Remove from watchlist",
        uk: "Видалити з watchlist"
      },
      trakt_watchlist_add: {
        ru: "Добавлено в watchlist",
        en: "Added to watchlist",
        uk: "Додано до watchlist"
      },
      trakt_history_in: {
        ru: "В истории",
        en: "In history",
        uk: "В історії"
      },
      trakt_history_not_in: {
        ru: "Добавить в историю",
        en: "Add to history",
        uk: "Додати до історії"
      },
      trakttv_recommendations: {
        ru: "Рекомендации",
        en: "Recommendations",
        uk: "Рекомендації"
      },
      trakttv_no_recommendations: {
        ru: "Нет рекомендаций",
        en: "No recommendations",
        uk: "Немає рекомендацій"
      },
      trakttv_show_recommendations: {
        ru: "Показывать рекомендации TraktTV на главной",
        en: "Show TraktTV recommendations on main page",
        uk: "Показувати рекомендації TraktTV на головній сторінці"
      },
      trakt_progress_section: {
        ru: "Настройки прогресса",
        en: "Progress settings",
        uk: "Налаштування прогресу"
      },
      trakttv_show_tv_progress: {
        ru: "Показывать прогресс просмотра сериалов",
        en: "Show TV progress",
        uk: "Показувати прогрес прогляду серіалів"
      },
      trakttv_related_lists: {
        ru: "Связанные списки",
        en: "Related lists",
        uk: "Пов'язані списки"
      },
      trakt_list_detail: {
        ru: "Содержимое списка",
        en: "List Content",
        uk: "Вміст списку"
      },
      trakt_my_lists: {
        ru: "Мои списки",
        en: "My Lists",
        uk: "Мої списки"
      },
      trakt_liked_lists: {
        ru: "Понравившиеся списки",
        en: "Liked Lists",
        uk: "Вподобані списки"
      },
      trakt_no_lists: {
        ru: "Нет списков",
        en: "No lists",
        uk: "Немає списків"
      },
      trakt_list_items: {
        ru: "Элементы списка",
        en: "List Items",
        uk: "Елементи списку"
      },
      trakt_list_items_short: {
        ru: "элем.",
        en: "items",
        uk: "елем."
      },
      trakt_list_open: {
        ru: "Открыть список",
        en: "Open list",
        uk: "Відкрити список"
      },
      trakt_list_create: {
        ru: "Создать список",
        en: "Create list",
        uk: "Створити список"
      },
      trakt_list_create_short: {
        ru: "Создать",
        en: "Create",
        uk: "Створити"
      },
      trakt_list_create_hint: {
        ru: "Создайте новый список Trakt",
        en: "Create a new Trakt list",
        uk: "Створіть новий список Trakt"
      },
      trakt_list_name_input: {
        ru: "Название списка",
        en: "List name",
        uk: "Назва списку"
      },
      trakt_list_description_input: {
        ru: "Описание списка",
        en: "List description",
        uk: "Опис списку"
      },
      trakt_list_name_required: {
        ru: "Укажите название списка",
        en: "List name is required",
        uk: "Вкажіть назву списку"
      },
      trakt_list_privacy: {
        ru: "Приватность списка",
        en: "List privacy",
        uk: "Приватність списку"
      },
      trakt_list_privacy_private: {
        ru: "Приватный",
        en: "Private",
        uk: "Приватний"
      },
      trakt_list_privacy_friends: {
        ru: "Для друзей",
        en: "Friends",
        uk: "Для друзів"
      },
      trakt_list_privacy_public: {
        ru: "Публичный",
        en: "Public",
        uk: "Публічний"
      },
      trakt_list_created: {
        ru: "Список создан",
        en: "List created",
        uk: "Список створено"
      },
      trakt_list_create_error: {
        ru: "Ошибка создания списка",
        en: "Failed to create list",
        uk: "Помилка створення списку"
      },
      trakt_list_edit: {
        ru: "Редактировать список",
        en: "Edit list",
        uk: "Редагувати список"
      },
      trakt_list_updated: {
        ru: "Список обновлен",
        en: "List updated",
        uk: "Список оновлено"
      },
      trakt_list_edit_error: {
        ru: "Ошибка обновления списка",
        en: "Failed to update list",
        uk: "Помилка оновлення списку"
      },
      trakt_list_delete: {
        ru: "Удалить список",
        en: "Delete list",
        uk: "Видалити список"
      },
      trakt_list_confirm_delete: {
        ru: "Удалить этот список?",
        en: "Delete this list?",
        uk: "Видалити цей список?"
      },
      trakt_list_delete_confirm_action: {
        ru: "Удалить",
        en: "Delete",
        uk: "Видалити"
      },
      trakt_list_deleted: {
        ru: "Список удален",
        en: "List deleted",
        uk: "Список видалено"
      },
      trakt_list_delete_error: {
        ru: "Ошибка удаления списка",
        en: "Failed to delete list",
        uk: "Помилка видалення списку"
      },
      trakt_add_to_list_action: {
        ru: "Добавить в список",
        en: "Add to list",
        uk: "Додати до списку"
      },
      trakt_remove_from_list_action: {
        ru: "Удалить из списка",
        en: "Remove from list",
        uk: "Прибрати зі списку"
      },
      trakt_remove_from_list: {
        ru: "Удалить из этого списка",
        en: "Remove from this list",
        uk: "Прибрати з цього списку"
      },
      trakt_item_added_to_list: {
        ru: "Элемент добавлен в список",
        en: "Item added to list",
        uk: "Елемент додано до списку"
      },
      trakt_item_removed_from_list: {
        ru: "Элемент удален из списка",
        en: "Item removed from list",
        uk: "Елемент прибрано зі списку"
      },
      trakt_remove_from_list_error: {
        ru: "Ошибка удаления элемента из списка",
        en: "Failed to remove item from list",
        uk: "Помилка видалення елемента зі списку"
      },
      trakt_list_action_error: {
        ru: "Ошибка операции со списком",
        en: "List action failed",
        uk: "Помилка операції зі списком"
      },
      trakt_list_limit_reached: {
        ru: "Достигнут лимит списков Trakt",
        en: "Trakt lists limit reached",
        uk: "Досягнуто ліміт списків Trakt"
      },
      trakt_list_conflict: {
        ru: "Элемент уже есть в списке",
        en: "Item is already in this list",
        uk: "Елемент уже є у цьому списку"
      },
      trakt_lists_button: {
        ru: "Списки",
        en: "Manage lists",
        uk: "Списки"
      },
      trakt_lists_button_in_watchlist: {
        ru: "В watchlist",
        en: "In watchlist",
        uk: "У watchlist"
      },
      trakt_manage_lists_title: {
        ru: "Управление списками",
        en: "Manage lists",
        uk: "Керування списками"
      },
      trakt_watchlist_action_error: {
        ru: "Ошибка операции с watchlist",
        en: "Watchlist action failed",
        uk: "Помилка операції з watchlist"
      },
      trakttv_user_info: {
        ru: "Пользователь Trakt.TV",
        en: "Trakt.TV User",
        uk: "Користувач Trakt.TV"
      },
      trakttv_username: {
        ru: "Имя пользователя",
        en: "Username",
        uk: "Ім'я користувача"
      },
      trakttv_vip_status: {
        ru: "VIP",
        en: "VIP",
        uk: "VIP"
      },
      trakttv_vip_enabled: {
        ru: "Активирован",
        en: "Activated",
        uk: "Активовано"
      },
      trakttv_vip_disabled: {
        ru: "Не активирован",
        en: "Not activated",
        uk: "Не активовано"
      },
      trakttv_movies: {
        ru: "Фильмы",
        en: "Movies",
        uk: "Фільми"
      },
      trakttv_episodes: {
        ru: "Эпизоды",
        en: "Episodes",
        uk: "Епізоди"
      },
      trakttv_code: {
        ru: "Код",
        en: "Code",
        uk: "Код"
      },
      trakttv_auth: {
        ru: "Авторизация Trakt",
        en: "Trakt Auth",
        uk: "Авторизація Trakt"
      },
      trakttv_enable_watching: {
        ru: "Включить отслеживание просмотра",
        en: "Enable watch tracking",
        uk: "Ввімкнути відстеження перегляду"
      },
      trakttv_enable_watching_descr: {
        ru: "Автоматически отмечать просмотренные эпизоды и добавлять сериалы в \"Смотрю\"",
        en: "Automatically mark watched episodes and add series to \"Watching\"",
        uk: "Автоматично позначати переглянуті епізоди та додавати серіали в \"Дивлюся\""
      },
      trakttv_min_progress_threshold: {
        ru: "Порог просмотра",
        en: "Viewing threshold",
        uk: "Поріг перегляду"
      },
      trakttv_min_progress_threshold_descr: {
        ru: "Минимальный процент просмотра для отметки эпизода на Trakt.TV",
        en: "Minimum percentage of viewing to mark an episode on Trakt.TV",
        uk: "Мінімальний відсоток перегляду для позначення епізоду на Trakt.TV"
      },
      trakttv_enable_logging: {
        ru: "Включить логирование",
        en: "Enable logging",
        uk: "Увімкнути логування"
      },
      trakttv_enable_logging_descr: {
        ru: "Логирование для тестирования механизма отслеживания просмотра",
        en: "Logging for testing the watch tracking mechanism",
        uk: "Логування для тестування механізму відстеження перегляду"
      },
      trakttv_card_type_tv: {
        ru: "TV",
        en: "TV",
        uk: "TV"
      },
      trakt_list_title_named: {
        ru: "Список - {name}",
        en: "List - {name}",
        uk: "Список - {name}"
      },
      trakttv_movie_id_missed: {
        ru: "Отсутствует ID фильма",
        en: "Movie ID is missing",
        uk: "Відсутній ID фільму"
      },
      trakttv_show_id_missed: {
        ru: "Отсутствует ID сериала",
        en: "Show ID is missing",
        uk: "Відсутній ID серіалу"
      },
      trakttv_unknown_content: {
        ru: "Неизвестный тип контента",
        en: "Unknown content type",
        uk: "Невідомий тип контенту"
      },
      trakttv_show_not_found: {
        ru: "Сериал не найден в Trakt",
        en: "Show not found in Trakt",
        uk: "Серіал не знайдено в Trakt"
      },
      trakttv_params_missed: {
        ru: "Отсутствуют параметры",
        en: "Params is missing",
        uk: "Відсутні параметри"
      },
      trakttv_media_id_missed: {
        ru: "Отсутствует ID медиа",
        en: "Media ID is missing",
        uk: "Відсутній ID медіа"
      },
      trakttv_list_id_missed: {
        ru: "Отсутствует ID списка",
        en: "List ID is missing",
        uk: "Відсутній ID списку"
      },
      trakttv_upnext: {
        ru: "Смотреть дальше",
        en: "Up Next",
        uk: "Дивитись далі"
      },
      trakttv_topshelf: {
        ru: "Top Shelf (Apple TV)",
        en: "Top Shelf (Apple TV)",
        uk: "Top Shelf (Apple TV)"
      },
      trakttv_topshelf_descr: {
        ru: "Обновлять Top Shelf на Apple TV",
        en: "Update Top Shelf on Apple TV",
        uk: "Оновлювати Top Shelf на Apple TV"
      },
      trakt_bookmarks_sync_section: {
        ru: "Синхронизация закладок",
        en: "Bookmarks sync",
        uk: "Синхронізація закладок"
      },
      trakt_bookmarks_mode: {
        ru: "Режим синхронизации",
        en: "Sync mode",
        uk: "Режим синхронізації"
      },
      trakt_bookmarks_mode_watchlist: {
        ru: "Watchlist",
        en: "Watchlist",
        uk: "Watchlist"
      },
      trakt_bookmarks_mode_my_lists: {
        ru: "Мои списки",
        en: "My Lists",
        uk: "Мої списки"
      },
      trakt_bookmarks_import_button: {
        ru: "Импортировать закладки из Trakt",
        en: "Import bookmarks from Trakt",
        uk: "Імпортувати закладки з Trakt"
      },
      trakt_bookmarks_export_button: {
        ru: "Экспортировать закладки в Trakt",
        en: "Export bookmarks to Trakt",
        uk: "Експортувати закладки у Trakt"
      },
      trakt_bookmarks_auth_required: {
        ru: "Сначала войдите в Trakt.TV",
        en: "Login to Trakt.TV first",
        uk: "Спочатку увійдіть у Trakt.TV"
      },
      trakt_bookmarks_local_unavailable: {
        ru: "Локальные закладки недоступны",
        en: "Local bookmarks are unavailable",
        uk: "Локальні закладки недоступні"
      },
      trakt_bookmarks_operation_in_progress: {
        ru: "Синхронизация уже выполняется",
        en: "Sync is already running",
        uk: "Синхронізація вже виконується"
      },
      trakt_bookmarks_import_start: {
        ru: "Запуск импорта закладок",
        en: "Starting bookmarks import",
        uk: "Запуск імпорту закладок"
      },
      trakt_bookmarks_export_start: {
        ru: "Запуск экспорта закладок",
        en: "Starting bookmarks export",
        uk: "Запуск експорту закладок"
      },
      trakt_bookmarks_progress_prepare: {
        ru: "Подготовка",
        en: "Preparing",
        uk: "Підготовка"
      },
      trakt_bookmarks_progress_loading_source: {
        ru: "Загрузка источника",
        en: "Loading source",
        uk: "Завантаження джерела"
      },
      trakt_bookmarks_progress_loading_target: {
        ru: "Загрузка цели",
        en: "Loading target",
        uk: "Завантаження цілі"
      },
      trakt_bookmarks_progress_import: {
        ru: "Импорт элементов",
        en: "Importing items",
        uk: "Імпорт елементів"
      },
      trakt_bookmarks_progress_export: {
        ru: "Экспорт элементов",
        en: "Exporting items",
        uk: "Експорт елементів"
      },
      trakt_bookmarks_import_select_list: {
        ru: "Выберите список для импорта",
        en: "Select list to import",
        uk: "Оберіть список для імпорту"
      },
      trakt_bookmarks_export_select_list: {
        ru: "Выберите список для экспорта",
        en: "Select list to export",
        uk: "Оберіть список для експорту"
      },
      trakt_bookmarks_no_lists: {
        ru: "Нет персональных списков",
        en: "No personal lists found",
        uk: "Немає персональних списків"
      },
      trakt_bookmarks_lists_load_error: {
        ru: "Не удалось загрузить персональные списки",
        en: "Failed to load personal lists",
        uk: "Не вдалося завантажити персональні списки"
      },
      trakt_bookmarks_added: {
        ru: "Добавлено",
        en: "Added",
        uk: "Додано"
      },
      trakt_bookmarks_duplicates: {
        ru: "Дубликаты",
        en: "Duplicates",
        uk: "Дублікати"
      },
      trakt_bookmarks_skipped_unsupported: {
        ru: "Пропущено (без TMDB)",
        en: "Skipped (no TMDB)",
        uk: "Пропущено (без TMDB)"
      },
      trakt_bookmarks_failed: {
        ru: "Ошибки",
        en: "Failed",
        uk: "Помилки"
      },
      trakt_bookmarks_import_done: {
        ru: "Импорт завершен",
        en: "Import completed",
        uk: "Імпорт завершено"
      },
      trakt_bookmarks_export_done: {
        ru: "Экспорт завершен",
        en: "Export completed",
        uk: "Експорт завершено"
      },
      trakt_bookmarks_canceled: {
        ru: "Операция отменена",
        en: "Operation canceled",
        uk: "Операцію скасовано"
      },
      trakt_bookmarks_sync_failed: {
        ru: "Ошибка синхронизации закладок",
        en: "Bookmarks sync failed",
        uk: "Помилка синхронізації закладок"
      },
      trakttv_scan_qr_code: {
        ru: "Отсканируйте QR-код",
        en: "Scan QR code",
        uk: "Відскануйте QR-код"
      },
      trakttv_scan_qr: {
        ru: "Отсканируйте QR-код",
        en: "Scan QR code",
        uk: "Відскануйте QR-код"
      }
    });
  }

  /**
   * Утиліти для TraktTV timetable
   */

  /**
   * Повертає сьогоднішню дату у форматі YYYY-MM-DD
   */
  function getTodayString() {
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = String(now.getMonth() + 1).padStart(2, '0');
    var dd = String(now.getDate()).padStart(2, '0');
    return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
  }

  /**
   * Нормалізує URL постера
   * @param {Array<string>} posterArr
   * @returns {string}
   */
  function normalizePoster(posterArr) {
    if (!Array.isArray(posterArr) || !posterArr[0]) return '';
    var url = posterArr[0];
    if (url.startsWith('http')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    if (url.startsWith('walter-')) return 'https://' + url;
    return url;
  }

  function TraktTimetableAll() {
    var _this2 = this;
    var Scroll = Lampa.Scroll;
    var Activity = Lampa.Activity;
    var Modal = Lampa.Modal;
    var Template = Lampa.Template;
    var Empty = Lampa.Empty;
    this.activity = null;
    var scroll = new Scroll({
      mask: true,
      over: true,
      step: 300
    });
    var html = $('<div></div>');
    var body = $('<div class="timetable"></div>');
    var last;
    var DAYS = 31;
    var episodeTypes = [{
      key: 'series_finale',
      color: '#8d6e63'
    }, {
      key: 'season_finale',
      color: '#e74c3c'
    }, {
      key: 'mid_season_finale',
      color: '#fbc02d'
    }, {
      key: 'series_premiere',
      color: '#40b3ff'
    }, {
      key: 'season_premiere',
      color: '#29b6f6'
    }, {
      key: 'mid_season_premiere',
      color: '#7e57c2'
    }, {
      key: 'standard',
      color: '#aaa'
    }];
    function groupEpisodesByDate(episodes) {
      var grouped = {};
      episodes.forEach(function (ep) {
        if (!grouped[ep.air_date]) grouped[ep.air_date] = [];
        grouped[ep.air_date].push(ep);
      });
      return grouped;
    }
    function groupEpisodesByShow(episodes) {
      var byShow = {};
      episodes.forEach(function (ep) {
        var sid = ep.card.id;
        if (!byShow[sid]) byShow[sid] = {
          card: ep.card,
          episodes: []
        };
        byShow[sid].episodes.push(ep);
      });
      return byShow;
    }
    function prepareTimetableData(traktData) {
      var shows = {};
      traktData.forEach(function (item) {
        var tmdbId = item.show.ids.tmdb;
        if (!tmdbId) return;
        var posterUrl = '';
        if (item.show.images && Array.isArray(item.show.images.poster)) {
          posterUrl = normalizePoster(item.show.images.poster);
        }
        if (!shows[tmdbId]) {
          shows[tmdbId] = {
            id: tmdbId,
            season: item.episode.season,
            episodes: [],
            card: {
              id: tmdbId,
              name: item.show.title,
              poster: posterUrl,
              source: 'tmdb'
            }
          };
        }
        shows[tmdbId].episodes.push({
          air_date: item.first_aired ? item.first_aired.slice(0, 10) : '',
          season_number: item.episode.season,
          episode_number: item.episode.number,
          episode_type: item.episode.episode_type,
          name: item.episode.title,
          still_path: '',
          card: shows[tmdbId].card
        });
      });
      return Object.values(shows).flatMap(function (show) {
        return show.episodes.map(function (ep) {
          return _objectSpread2(_objectSpread2({}, ep), {}, {
            card: show.card
          });
        });
      });
    }
    function fetchTraktCalendar() {
      return _fetchTraktCalendar.apply(this, arguments);
    }
    function _fetchTraktCalendar() {
      _fetchTraktCalendar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var dateString;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              dateString = getTodayString();
              _context2.p = 1;
              _context2.n = 2;
              return api$1.get("/calendars/my/shows/".concat(dateString, "/").concat(DAYS, "?extended=images,full"));
            case 2:
              return _context2.a(2, _context2.v);
            case 3:
              _context2.p = 3;
              _context2.v;
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakttv_calendar_error')
              });
              return _context2.a(2, []);
          }
        }, _callee2, null, [[1, 3]]);
      }));
      return _fetchTraktCalendar.apply(this, arguments);
    }
    this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _this = this;
      var traktData, episodes, groupedByDate, startDate, dates, i, d, y, m, day, hasAny;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (this.activity) this.activity.loader(true);
            _context.n = 1;
            return fetchTraktCalendar();
          case 1:
            traktData = _context.v;
            episodes = prepareTimetableData(traktData);
            groupedByDate = groupEpisodesByDate(episodes);
            startDate = new Date();
            dates = [];
            for (i = 0; i < DAYS; i++) {
              d = new Date(startDate);
              d.setDate(startDate.getDate() + i);
              y = d.getFullYear();
              m = String(d.getMonth() + 1).padStart(2, '0');
              day = String(d.getDate()).padStart(2, '0');
              dates.push("".concat(y, "-").concat(m, "-").concat(day));
            }
            hasAny = false;
            dates.forEach(function (date) {
              if ((groupedByDate[date] || []).length) hasAny = true;
              _this.append(date, groupedByDate[date] || []);
            });
            if (!hasAny) this.empty();
            scroll.minus(); // scroll готовий до рендеру
            scroll.append(body); // додаємо body в scroll
            html.append(scroll.render()); // додаємо scroll в html

            if (this.activity) this.activity.loader(false);

            // Зберігаємо посилання для контролера
            this.body = body;
            this.scroll = scroll;
            this.html = html;

            // Відразу активуємо фокус
            if (this.activity && typeof this.activity.toggle === 'function') {
              this.activity.toggle();
            }
            return _context.a(2, this.render());
        }
      }, _callee, this);
    }));
    this.empty = function () {
      var empty = new Empty({
        descr: Lampa.Lang.translate('trakttv_no_upcoming')
      });
      html.append(empty.render());
      _this2.start = empty.start;
      if (_this2.activity) _this2.activity.loader(false);
    };
    this.append = function (date, eps) {
      var item = $("\n            <div class=\"timetable__item selector\">\n                <div class=\"timetable__inner\">\n                    <div class=\"timetable__date\">".concat(date, "</div>\n                    <div class=\"timetable__body\"></div>\n                </div>\n            </div>\n        "));
      if (eps.length) {
        var byShow = groupEpisodesByShow(eps);
        Object.values(byShow).forEach(function (show) {
          var card = show.card;
          var typesSet = _toConsumableArray(new Set(show.episodes.map(function (ep) {
            return ep.episode_type;
          }).filter(Boolean)));
          var foundType = episodeTypes.find(function (typeObj) {
            return typesSet.includes(typeObj.key);
          }) || episodeTypes[episodeTypes.length - 1];
          var mainTypeKey = foundType.key;
          var mainTypeColor = foundType.color;
          item.find('.timetable__body').append("\n                    <div>\n                        <span title=\"".concat(mainTypeKey, "\" style=\"display:inline-block;width:0.9em;height:0.9em;border-radius:0.2em;margin-right:0.3em;background:").concat(mainTypeColor, ";vertical-align:middle\"></span>\n                        ").concat(card.name || '', "\n                    </div>\n                "));
        });
        item.addClass('timetable__item--any');
      } else {
        item.find('.timetable__body').append("<div class=\"timetable__empty\">".concat(Lampa.Lang.translate('trakttv_no_series'), "</div>"));
      }
      item.on('hover:focus', function () {
        last = $(this)[0];
        scroll.update($(this)); // ВАЖЛИВО! Оновлення скролу
      }).on('hover:hover', function () {
        last = $(this)[0];
      }).on('hover:enter', function () {
        last = $(this)[0];
        if (eps.length) {
          var _byShow = groupEpisodesByShow(eps);
          var modal = $('<div></div>');
          Object.values(_byShow).forEach(function (show) {
            var card = show.card;
            var noty = Template.get('notice_card', {
              time: date,
              title: card.name,
              descr: show.episodes.map(function (ep) {
                return "S: <b>".concat(ep.season_number, "</b> E: <b>").concat(ep.episode_number, "</b> \u2014 ").concat(ep.name);
              }).join('<br>')
            });
            noty.find('.notice__img').remove();
            if (card.poster) {
              noty.find('.notice__left').css('margin-right', '5em');
              noty.find('.notice__left').prepend("<img src=\"".concat(card.poster, "\" style=\"max-width:120px;max-height:170px;display:block;margin-bottom:1em;\">"));
            }
            noty.on('hover:enter', function () {
              Modal.close();
              Activity.push({
                url: '',
                component: 'full',
                id: card.id,
                method: 'tv',
                card: card,
                source: card.source
              });
            });
            modal.append(noty);
          });
          Modal.open({
            title: "".concat(Lampa.Lang.translate('trakttv_episodes_on'), " ").concat(date),
            size: 'medium',
            html: modal,
            onBack: function onBack() {
              Modal.close();
              Lampa.Controller.toggle('content');
            }
          });
        }
      });
      body.append(item);
    };
    this.back = function () {
      Activity.backward();
    };
    this.start = function () {
      if (this.activity) this.activity.loader(false);
      Lampa.Controller.add('content', {
        link: this,
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          if (!last) {
            last = body.find('.timetable__item.selector').get(0);
          }
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        right: function right() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('right')) Navigator.move('right');else Navigator.move('right');
        },
        up: function up() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        down: function down() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');
        },
        back: this.back
      });
      Lampa.Controller.toggle('content');
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

  /**
   * Файл з SVG іконками для використання в плагіні
   * Це дозволяє уникнути дублювання коду та легко змінювати іконки
   */

  // Стилі для заголовків з іконками
  var HEADER_STYLE = 'display:flex; align-items:center; gap:10px;';
  var ICON_STYLE = 'width:52px; height:52px;';
  var LINE_TITLE_STYLE = 'display:inline-flex; align-items:center; gap:.4em;';
  var LINE_ICON_STYLE = 'width:1em; height:1em; display:inline-block;';

  // Основна іконка Trakt.TV
  var TRAKT_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_2\" viewBox=\"0 0 48 48\" fill=\"currentColor\">\n  <g id=\"_x2D_-production\">\n    <path id=\"logomark.square.white\" class=\"cls-1\" d=\"M30.17,30.22l-1.46-1.46,19.16-19.17c-.05-.39-.13-.77-.23-1.15l-20.31,20.33,2.16,2.16-1.46,1.46-3.62-3.62L46.85,6.29c-.15-.3-.31-.6-.5-.88l-23.33,23.35,4.31,4.31-1.46,1.46-14.39-14.4,1.46-1.46,8.62,8.62L45.1,3.72c-2.07-2.29-5.05-3.72-8.37-3.72H11.27C5.05,0,0,5.05,0,11.27v25.48c0,6.22,5.05,11.26,11.27,11.26h25.47c6.22,0,11.27-5.04,11.27-11.26V12.38l-17.83,17.84ZM21.54,25.91l-7.91-7.93,1.46-1.46,7.91,7.92-1.46,1.47ZM23.69,23.74l-7.91-7.92,1.46-1.46,7.92,7.92-1.47,1.46ZM43.4,35.12c0,4.57-3.71,8.28-8.28,8.28H12.88c-4.56,0-8.28-3.71-8.28-8.28V12.88c0-4.57,3.71-8.28,8.28-8.28h20.78v2.08H12.88c-3.42,0-6.2,2.78-6.2,6.2v22.23c0,3.42,2.78,6.21,6.2,6.21h22.24c3.42,0,6.2-2.79,6.2-6.21v-3.51h2.08v3.51Z\"/>\n  </g>\n</svg>";

  // Іконка для watchlist
  var WATCHLIST_ICON = "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>";

  // Іконка для історії (галочка)
  var HISTORY_ICON = "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>";

  // Функція для створення заголовка з іконкою
  function createHeaderWithIcon(icon, text) {
    return "<div class=\"trakt-header\" style=\"".concat(HEADER_STYLE, "\"><div class=\"trakt-icon\" style=\"").concat(ICON_STYLE, "\">").concat(icon, "</div><div class=\"trakt-title\">").concat(text, "</div></div>");
  }
  function createLineTitle(text) {
    var sizedIcon = TRAKT_ICON.replace('<svg ', "<svg style=\"width:100%; height:100%; display:block;\" ");
    var root = document.createElement('span');
    root.className = 'trakt-line-title';
    root.setAttribute('style', LINE_TITLE_STYLE);
    var iconWrap = document.createElement('span');
    iconWrap.className = 'trakt-line-title__icon';
    iconWrap.setAttribute('style', LINE_ICON_STYLE);
    iconWrap.innerHTML = sizedIcon;
    var label = document.createElement('span');
    label.textContent = text;
    root.appendChild(iconWrap);
    root.appendChild(label);
    return root;
  }

  // Експортуємо всі іконки та утиліти
  var icons = {
    TRAKT_ICON: TRAKT_ICON,
    WATCHLIST_ICON: WATCHLIST_ICON,
    HISTORY_ICON: HISTORY_ICON,
    HEADER_STYLE: HEADER_STYLE,
    ICON_STYLE: ICON_STYLE,
    createHeaderWithIcon: createHeaderWithIcon,
    createLineTitle: createLineTitle
  };

  function t$1(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function notify(text) {
    Lampa.Bell.push({
      text: text
    });
  }
  function normalizeCardParams(cardData) {
    var _cardData$movie, _cardData$data;
    var source = (cardData === null || cardData === void 0 ? void 0 : cardData.movie) || (cardData === null || cardData === void 0 ? void 0 : cardData.card) || (cardData === null || cardData === void 0 ? void 0 : cardData.data) || cardData || {};
    var method = (cardData === null || cardData === void 0 ? void 0 : cardData.method) || source.method || source.card_type || (source.first_air_date || source.name ? 'tv' : 'movie');
    var externalIds = (cardData === null || cardData === void 0 ? void 0 : cardData.external_ids) || source.external_ids || {};
    var ids = _objectSpread2(_objectSpread2({}, source.ids || {}), (cardData === null || cardData === void 0 ? void 0 : cardData.ids) || {});
    var rawId = source.id || (cardData === null || cardData === void 0 ? void 0 : cardData.id) || (cardData === null || cardData === void 0 || (_cardData$movie = cardData.movie) === null || _cardData$movie === void 0 ? void 0 : _cardData$movie.id) || (cardData === null || cardData === void 0 || (_cardData$data = cardData.data) === null || _cardData$data === void 0 ? void 0 : _cardData$data.id) || externalIds.tmdb_id;
    if (!ids.tmdb && externalIds.tmdb_id) ids.tmdb = externalIds.tmdb_id;
    if (!ids.trakt && externalIds.trakt_id) ids.trakt = externalIds.trakt_id;
    if (!ids.imdb && externalIds.imdb_id) ids.imdb = externalIds.imdb_id;
    if (!ids.tmdb && rawId) ids.tmdb = rawId;
    return _objectSpread2(_objectSpread2({}, source), {}, {
      method: method,
      ids: ids,
      id: rawId || ids.tmdb
    });
  }
  function loadMyListsMembership(params, lists) {
    var safeLists = Array.isArray(lists) ? lists : [];
    var checks = safeLists.map(function (list) {
      return api$1.inList({
        listId: list.id,
        item: params,
        limit: 100,
        maxPages: 5
      }).then(function (inList) {
        return _objectSpread2(_objectSpread2({}, list), {}, {
          inList: !!inList
        });
      })["catch"](function () {
        return _objectSpread2(_objectSpread2({}, list), {}, {
          inList: false
        });
      });
    });
    return Promise.all(checks);
  }
  function buildManagerItems(watchlistState, lists) {
    var items = [];
    items.push({
      title: watchlistState ? t$1('trakt_watchlist_remove', 'Remove from watchlist') : t$1('trakt_watchlist_add', 'Add to watchlist'),
      target: 'watchlist',
      inList: !!watchlistState
    });
    (lists || []).forEach(function (list) {
      var listName = (list.list_title || list.title || '').trim();
      if (!listName) return;
      var actionTitle = list.inList ? t$1('trakt_remove_from_list_action', 'Remove from list') : t$1('trakt_add_to_list_action', 'Add to list');
      items.push({
        title: "".concat(listName, " \xB7 ").concat(actionTitle),
        target: 'list',
        listId: list.id,
        listTitle: listName,
        inList: !!list.inList
      });
    });
    return items;
  }
  function updateButtonStyle(button, textNode, isAdded) {
    if (isAdded) {
      button.classList.add('added');
      button.style.color = '#37ff54';
      if (textNode) textNode.textContent = t$1('trakt_lists_button_in_watchlist', 'In watchlist');
    } else {
      button.classList.remove('added');
      button.style.color = '';
      if (textNode) textNode.textContent = t$1('trakt_lists_button', 'Manage lists');
    }
  }
  function refreshButtonState(button, textNode, params) {
    api$1.inWatchlist(params).then(function (isAdded) {
      return updateButtonStyle(button, textNode, !!isAdded);
    })["catch"](function () {
      return updateButtonStyle(button, textNode, false);
    });
  }
  function handleSelectAction(item, params, onDone) {
    if (item.target === 'watchlist') {
      var request = item.inList ? api$1.removeFromWatchlist(params) : api$1.addToWatchlist(params);
      request.then(function () {
        notify(item.inList ? t$1('trakt_watchlist_remove', 'Removed from watchlist') : t$1('trakt_watchlist_add', 'Added to watchlist'));
        if (onDone) onDone();
      })["catch"](function () {
        return notify(t$1('trakt_watchlist_action_error', 'Watchlist action failed'));
      });
      return;
    }
    if (item.target === 'list' && item.listId) {
      var _request = item.inList ? api$1.removeFromList({
        listId: item.listId,
        item: params
      }) : api$1.addToList({
        listId: item.listId,
        item: params
      });
      _request.then(function () {
        notify(item.inList ? t$1('trakt_item_removed_from_list', 'Item removed from list') : t$1('trakt_item_added_to_list', 'Item added to list'));
        if (onDone) onDone();
      })["catch"](function (error) {
        if (error && error.status === 409) {
          notify(t$1('trakt_list_conflict', 'Item is already in this list'));
          return;
        }
        notify(t$1('trakt_list_action_error', 'List action failed'));
      });
    }
  }
  function openListManager(params, button, textNode) {
    Promise.all([api$1.inWatchlist(params)["catch"](function () {
      return false;
    }), api$1.myLists({
      page: 1,
      limit: 100
    })["catch"](function () {
      return {
        results: []
      };
    })]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        watchlistState = _ref2[0],
        myListsResponse = _ref2[1];
      var lists = myListsResponse && Array.isArray(myListsResponse.results) ? myListsResponse.results : [];
      loadMyListsMembership(params, lists).then(function (withMembership) {
        Lampa.Select.show({
          title: t$1('trakt_manage_lists_title', 'Manage lists'),
          items: buildManagerItems(!!watchlistState, withMembership),
          onSelect: function onSelect(item) {
            handleSelectAction(item, params, function () {
              return refreshButtonState(button, textNode, params);
            });
          },
          onBack: function onBack() {
            Lampa.Controller.toggle('content');
          }
        });
      });
    })["catch"](function () {
      notify(t$1('trakt_list_action_error', 'List action failed'));
    });
  }
  function addWatchlistButton(card) {
    var button = document.createElement('div');
    button.className = 'full-start__button selector watchlist-button trakt-list-manager-button';
    button.innerHTML = "\n        ".concat(icons.WATCHLIST_ICON, "\n        <span>").concat(t$1('trakt_lists_button', 'Manage lists'), "</span>\n    ");
    var textNode = button.querySelector('span');
    var params = normalizeCardParams(card);
    refreshButtonState(button, textNode, params);
    button.on('hover:enter', function () {
      openListManager(params, button, textNode);
    });
    return button;
  }
  var watchlist = {
    addWatchlistButton: addWatchlistButton
  };

  var TraktHistory = {
    // Функція для відображення прогресу перегляду серіалу
    showWatchProgress: function showWatchProgress(data, element) {
      // Перевіряємо чи це серіал
      if (data.movie && data.movie.first_air_date && element.object.method === 'tv') {
        // Отримуємо історію серіалу
        getShowHistory(data.movie.id).then(function (historyData) {
          if (historyData && historyData.length > 0) {
            // Отримуємо останній переглянутий епізод
            var lastWatched = historyData[0];
            if (lastWatched && lastWatched.episode) {
              var _Lampa;
              var season = lastWatched.episode.season;
              var episode = lastWatched.episode.number;
              var hasApplecation = Array.isArray((_Lampa = Lampa) === null || _Lampa === void 0 || (_Lampa = _Lampa.Manifest) === null || _Lampa === void 0 ? void 0 : _Lampa.plugins) && Lampa.Manifest.plugins.some(function (plugin) {
                return plugin && plugin.name === 'Applecation';
              });
              var renderRoot = element.object.activity.render();

              // Для Applecation вставляємо прогрес у блок інформації, перед бейджами якості
              if (hasApplecation) {
                var tryInsertApplecation = function tryInsertApplecation() {
                  var _rootNode$querySelect, _cardRoot$querySelect;
                  var rootNode = renderRoot && renderRoot.get ? renderRoot.get(0) : null;
                  var cardRoot = (rootNode === null || rootNode === void 0 || (_rootNode$querySelect = rootNode.querySelector) === null || _rootNode$querySelect === void 0 ? void 0 : _rootNode$querySelect.call(rootNode, '.full-start-new.applecation')) || document.querySelector('.full-start-new.applecation');
                  var applecationInfo = cardRoot === null || cardRoot === void 0 || (_cardRoot$querySelect = cardRoot.querySelector) === null || _cardRoot$querySelect === void 0 ? void 0 : _cardRoot$querySelect.call(cardRoot, '.applecation__info');
                  if (!applecationInfo) return false;
                  var existingDefault = cardRoot.querySelector('.full-start-new__details.trakt');
                  if (existingDefault) existingDefault.remove();
                  var existingApplecation = applecationInfo.querySelector('.trakt-applecation-progress');
                  if (existingApplecation) existingApplecation.remove();
                  var applecationProgress = document.createElement('span');
                  applecationProgress.className = 'trakt-applecation-progress';
                  applecationProgress.innerHTML = "\n                                        <span class=\"trakt-icon\">".concat(icons.TRAKT_ICON, "</span>\n                                        <span class=\"trakt-applecation-progress__text\">S").concat(season, " \xB7 E").concat(episode, "</span>\n                                    ");
                  var badges = applecationInfo.querySelector('.applecation__quality-badges');
                  if (badges) {
                    badges.before(applecationProgress);
                  } else {
                    applecationInfo.append(applecationProgress);
                  }
                  return true;
                };
                if (tryInsertApplecation()) return;
                var attempts = 0;
                var _retryInsert = function retryInsert() {
                  if (tryInsertApplecation()) return;
                  attempts += 1;
                  if (attempts < 10) setTimeout(_retryInsert, 200);
                };
                _retryInsert();
                return;
              }

              // Створюємо елемент для відображення прогресу
              var progressElement = document.createElement('div');
              progressElement.className = 'full-start-new__details trakt';
              progressElement.innerHTML = "\n                                <div class=\"trakt-icon\" style=\"width:48px; height:48px;\">".concat(icons.TRAKT_ICON, "</div>\n                                <span>").concat(Lampa.Lang.translate('full_season'), ": ").concat(season, "</span><span class=\"full-start-new__split\">\u25CF</span>\n                                <span>").concat(Lampa.Lang.translate('full_episode'), ": ").concat(episode, "</span>\n                            ");

              // Знаходимо елемент після якого вставити прогрес
              var taglineElement = renderRoot.find('.full-start-new__rate-line');
              if (taglineElement.length) {
                // Перевіряємо чи вже є елемент прогресу
                var existingProgress = renderRoot.find('.full-start-new__details.trakt');
                if (existingProgress.length) {
                  existingProgress.remove();
                }
                taglineElement.after(progressElement);
              }
            }
          }
        })["catch"](function (error) {
          if (Lampa.Storage.field('trakt_enable_logging')) {
            console.error('TraktTV', 'Error getting show history:', error);
          }
        });
      }
    },
    addHistoryButton: function addHistoryButton(data) {
      var button = document.createElement('div');
      button.className = 'full-start__button selector trakt_history-button';
      button.innerHTML = "\n               ".concat(icons.HISTORY_ICON, " \n                <span>").concat(Lampa.Lang.translate('trakt_history_not_in'), "</span>\n");

      // Перевіряємо чи є в історії
      inHistory(data.movie, function (isInHistory) {
        updateButtonStyle(button, isInHistory);
      }, function () {
        button.style.display = 'none';
      });
      function updateButtonStyle(button, isInHistory) {
        if (isInHistory) {
          button.classList.add('added');
          button.style.color = '#37ff54';
          button.querySelector('span').textContent = Lampa.Lang.translate('trakt_history_in');
        } else {
          button.classList.remove('added');
          button.style.color = '';
          button.querySelector('span').textContent = Lampa.Lang.translate('trakt_history_not_in');
        }
      }

      // Обробник кліку для кнопки, що працює на всіх платформах
      $(button).on('hover:enter', function () {
        var isInHistory = button.classList.contains('added');
        if (isInHistory) {
          // Вже в історії, видаляємо
          var _type = data.movie.first_air_date ? 'show' : 'movie';

          // Створюємо об'єкт для передачі в API
          var _apiData = {
            method: _type === 'movie' ? 'movie' : 'show',
            id: data.movie.id,
            season: data.movie.season_number || 1,
            episode: data.movie.episode_number || 1
          };
          if (_type === 'movie') {
            removeFromHistory(_apiData).then(function () {
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakt_history_removed')
              });
              updateButtonStyle(button, false);
            })["catch"](function (err) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakt_history_removeError'),
                err: err
              });
            });
          } else if (_type === 'show') {
            Lampa.Select.show({
              title: Lampa.Lang.translate('trakt_history_title'),
              items: [{
                title: Lampa.Lang.translate('trakt_history_all'),
                action: 'all'
              }, {
                title: Lampa.Lang.translate('trakt_history_season'),
                action: 'last_season'
              }, {
                title: Lampa.Lang.translate('trakt_history_episodes'),
                action: 'last_episode'
              }],
              onSelect: function onSelect(a) {
                removeFromHistory(_apiData, a.action).then(function () {
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('trakt_history_removed', {
                      type: a.title
                    })
                  });
                  updateButtonStyle(button, false);
                })["catch"](function (err) {
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('trakt_history_removeError'),
                    err: err
                  });
                });
              },
              onBack: function onBack() {
                Lampa.Controller.toggle('menu');
              }
            });
          }
          return;
        }
        var type = data.movie.first_air_date ? 'show' : 'movie';

        // Створюємо об'єкт для передачі в API
        var apiData = {
          method: type === 'movie' ? 'movie' : 'show',
          id: data.movie.id,
          season: data.movie.season_number || 1,
          episode: data.movie.episode_number || 1
        };
        if (type === 'movie') {
          addToHistory(apiData).then(function () {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_history_added')
            });
            updateButtonStyle(button, true);
          })["catch"](function (err) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_history_addError'),
              err: err
            });
          });
        } else if (type === 'show') {
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakt_history_title'),
            items: [{
              title: Lampa.Lang.translate('trakt_history_all'),
              action: 'all'
            }, {
              title: Lampa.Lang.translate('trakt_history_season'),
              action: 'last_season'
            }, {
              title: Lampa.Lang.translate('trakt_history_episodes'),
              action: 'last_episode'
            }],
            onSelect: function onSelect(a) {
              addToHistory(apiData, a.action).then(function () {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('trakt_history_added', {
                    type: a.title
                  })
                });
                updateButtonStyle(button, true);
              })["catch"](function (err) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('trakt_history_addError'),
                  err: err
                });
              });
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('menu');
            }
          });
        }
      });
      return button;
    }
  };

  /**
   * Модуль для роботи з меню TraktTV
   */
  function addMenuItems() {
    var watchlist = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">Watchlist</div>\n    </li>"));
    var upnext = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">Up Next</div>\n    </li>"));
    var timetable = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">\n         <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n    </div>\n    <div class=\"menu__text\">Calendar</div>\n    </li>"));
    var myLists = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(Lampa.Lang.translate('trakt_my_lists'), "</div>\n    </li>"));
    var likedLists = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(Lampa.Lang.translate('trakt_liked_lists'), "</div>\n    </li>"));
    timetable.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Calendar',
        component: 'trakt_timetable_all',
        id: 'trakt_timetable_all'
      });
    });
    watchlist.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Watchlist',
        component: 'trakt_watchlist',
        page: 1
      });
    });
    upnext.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Up Next',
        component: 'trakt_upnext',
        page: 1
      });
    });
    myLists.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: Lampa.Lang.translate('trakt_my_lists'),
        component: 'trakt_my_lists',
        page: 1
      });
    });
    likedLists.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: Lampa.Lang.translate('trakt_liked_lists'),
        component: 'trakt_lists',
        page: 1
      });
    });

    // Combine menu items
    var items = [{
      title: 'Up Next',
      component: 'trakt_upnext'
    }, {
      title: 'Watchlist',
      component: 'trakt_watchlist'
    }, {
      title: 'Calendar',
      component: 'trakt_timetable_all'
    }, {
      title: 'Recommendations',
      component: 'trakttv_recommendations',
      toggleOption: 'trakttv_show_recommendations'
    }];

    // Додаємо пункти меню для списків Trakt
    items.push({
      title: Lampa.Lang.translate('trakt_my_lists'),
      component: 'trakt_my_lists'
    });
    items.push({
      title: Lampa.Lang.translate('trakt_liked_lists'),
      component: 'trakt_lists'
    });
    var menuList = $('.menu .menu__list').eq(0);
    var sideMenuMap = {
      trakt_watchlist: watchlist,
      trakt_upnext: upnext,
      trakt_timetable_all: timetable,
      trakt_my_lists: myLists,
      trakt_lists: likedLists
    };
    function syncSideMenuItem(key) {
      var menuItem = sideMenuMap[key];
      if (!menuItem) return;
      var shouldShow = Lampa.Storage.get(key) === true;
      var alreadyAdded = menuItem.parent().length > 0;
      if (shouldShow && !alreadyAdded) menuList.append(menuItem);
      if (!shouldShow && alreadyAdded) menuItem.remove();
    }
    var combineButton = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">TraktTV</div>\n    </li>"));
    combineButton.on('hover:enter', function () {
      Lampa.Select.show({
        title: 'TraktTV',
        items: items,
        onSelect: function onSelect(a) {
          Lampa.Activity.push({
            url: '',
            title: a.title,
            component: a.component,
            page: 1
          });
        },
        onLong: function onLong(a) {
          // Визначаємо ключ для перемикання
          var toggleKey = a.toggleOption || a.component;

          // Отримуємо поточне значення
          var currentValue = Lampa.Storage.field(toggleKey, true);

          // Перемикаємо значення
          if (currentValue === true) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_componentDisable')
            });
            Lampa.Storage.set(toggleKey, false);
          } else {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_componentEnable')
            });
            Lampa.Storage.set(toggleKey, true);
          }
          syncSideMenuItem(toggleKey);
        },
        onBack: function onBack() {
          Lampa.Controller.toggle('menu');
        }
      });
    });
    menuList.append(combineButton);

    // Перевіряємо кожен елемент локального сховища і додаємо відповідні пункти меню
    items.forEach(function (item) {
      var key = item.component;
      syncSideMenuItem(key);
    });
  }

  var PAGE_LIMIT = 100;
  var MAX_PAGES = 100;
  function toNumericId(value) {
    var numeric = Number(value);
    if (!Number.isFinite(numeric) || numeric <= 0) return 0;
    return numeric;
  }
  function cancelError() {
    var error = new Error('Operation canceled');
    error.code = 'canceled';
    return error;
  }
  function isCanceled(checkCancel) {
    return typeof checkCancel === 'function' && checkCancel() === true;
  }
  function normalizeResults(response) {
    return response && Array.isArray(response.results) ? response.results : [];
  }
  function detectTraktType() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (item.method || item.type || '').toString().toLowerCase();
    return method === 'movie' ? 'movie' : 'show';
  }
  function detectLampaType() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (card.method || card.type || '').toString().toLowerCase();
    if (method === 'movie') return 'movie';
    if (method === 'tv' || method === 'show') return 'show';
    if (card.first_air_date || card.name || card.original_name || card.number_of_seasons) {
      return 'show';
    }
    return 'movie';
  }
  function buildLocalDuplicateKey() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!card || typeof card.id === 'undefined' || card.id === null) return '';
    return String(card.id);
  }
  function getComparableKeys(type) {
    var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var keys = [];
    if (!ids || _typeof(ids) !== 'object') return keys;
    if (ids.tmdb) keys.push("".concat(type, ":tmdb:").concat(String(ids.tmdb)));
    if (ids.trakt) keys.push("".concat(type, ":trakt:").concat(String(ids.trakt)));
    if (ids.imdb) keys.push("".concat(type, ":imdb:").concat(String(ids.imdb).toLowerCase()));
    return keys;
  }
  function extractIdsFromLocalCard() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var sourceIds = card && card.ids && _typeof(card.ids) === 'object' ? card.ids : {};
    var ids = {};
    if (sourceIds.tmdb) ids.tmdb = sourceIds.tmdb;
    if (sourceIds.trakt) ids.trakt = sourceIds.trakt;
    if (sourceIds.imdb) ids.imdb = sourceIds.imdb;
    if (!ids.tmdb) {
      var tmdbId = toNumericId(card.id);
      if (tmdbId) ids.tmdb = tmdbId;
    }
    return ids;
  }
  function mapTraktToLampaCard() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ids = item && item.ids && _typeof(item.ids) === 'object' ? item.ids : {};
    var tmdbId = toNumericId(ids.tmdb);
    if (!tmdbId) return null;
    var type = detectTraktType(item);
    var title = item.title || item.name || item.original_title || item.original_name || '';
    var originalTitle = item.original_title || item.original_name || title;
    var releaseDate = item.release_date || item.first_air_date || '';
    var voteAverage = Number(item.vote_average) || 0;
    var poster = item.poster || '';
    var image = item.image || item.background_image || '';
    if (type === 'movie') {
      return {
        id: tmdbId,
        title: title,
        original_title: originalTitle,
        release_date: releaseDate,
        poster: poster,
        background_image: image,
        vote_average: voteAverage,
        source: 'tmdb'
      };
    }
    return {
      id: tmdbId,
      title: title,
      name: title,
      original_title: originalTitle,
      original_name: originalTitle,
      first_air_date: releaseDate,
      release_date: releaseDate,
      poster: poster,
      background_image: image,
      vote_average: voteAverage,
      number_of_seasons: Number(item.number_of_seasons) || 0,
      source: 'tmdb'
    };
  }
  function mapLampaToTraktItem() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    if (!Object.keys(ids).length) return null;
    return {
      type: type,
      method: type === 'movie' ? 'movie' : 'show',
      ids: ids
    };
  }
  function parseWriteStatus(response, type) {
    var section = type === 'movie' ? 'movies' : 'shows';
    var added = Number(response && response.added && response.added[section]) || 0;
    var existing = Number(response && response.existing && response.existing[section]) || 0;
    var notFoundRaw = response && response.not_found ? response.not_found[section] : null;
    var notFound = Array.isArray(notFoundRaw) ? notFoundRaw.length : Number(notFoundRaw || 0);
    if (notFound > 0) return 'failed';
    if (added > 0) return 'added';
    if (existing > 0) return 'duplicate';
    return 'added';
  }
  function loadSourceItems(_x) {
    return _loadSourceItems.apply(this, arguments);
  }
  function _loadSourceItems() {
    _loadSourceItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
      var api, source, listId, checkCancel, onProgress, items, page, response, chunk, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            api = _ref.api, source = _ref.source, listId = _ref.listId, checkCancel = _ref.checkCancel, onProgress = _ref.onProgress;
            items = [];
            page = 1;
          case 1:
            if (!(page <= MAX_PAGES)) {
              _context.n = 9;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context.n = 2;
              break;
            }
            throw cancelError();
          case 2:
            onProgress && onProgress({
              phase: 'loading_source',
              page: page,
              processed: items.length,
              total: 0,
              percent: 0
            });
            if (!(source === 'watchlist')) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return api.watchlist({
              page: page,
              limit: PAGE_LIMIT
            });
          case 3:
            _t = _context.v;
            _context.n = 6;
            break;
          case 4:
            _context.n = 5;
            return api.myListItems({
              listId: listId,
              page: page,
              limit: PAGE_LIMIT
            });
          case 5:
            _t = _context.v;
          case 6:
            response = _t;
            chunk = normalizeResults(response);
            if (chunk.length) {
              _context.n = 7;
              break;
            }
            return _context.a(3, 9);
          case 7:
            items.push.apply(items, _toConsumableArray(chunk));
            if (!(chunk.length < PAGE_LIMIT)) {
              _context.n = 8;
              break;
            }
            return _context.a(3, 9);
          case 8:
            page += 1;
            _context.n = 1;
            break;
          case 9:
            return _context.a(2, items);
        }
      }, _callee);
    }));
    return _loadSourceItems.apply(this, arguments);
  }
  function loadTargetItems(_x2) {
    return _loadTargetItems.apply(this, arguments);
  }
  function _loadTargetItems() {
    _loadTargetItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref2) {
      var api, target, listId, checkCancel, onProgress, items, page, response, chunk, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            api = _ref2.api, target = _ref2.target, listId = _ref2.listId, checkCancel = _ref2.checkCancel, onProgress = _ref2.onProgress;
            items = [];
            page = 1;
          case 1:
            if (!(page <= MAX_PAGES)) {
              _context2.n = 9;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context2.n = 2;
              break;
            }
            throw cancelError();
          case 2:
            onProgress && onProgress({
              phase: 'loading_target',
              page: page,
              processed: items.length,
              total: 0,
              percent: 0
            });
            if (!(target === 'watchlist')) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return api.watchlist({
              page: page,
              limit: PAGE_LIMIT
            });
          case 3:
            _t2 = _context2.v;
            _context2.n = 6;
            break;
          case 4:
            _context2.n = 5;
            return api.myListItems({
              listId: listId,
              page: page,
              limit: PAGE_LIMIT
            });
          case 5:
            _t2 = _context2.v;
          case 6:
            response = _t2;
            chunk = normalizeResults(response);
            if (chunk.length) {
              _context2.n = 7;
              break;
            }
            return _context2.a(3, 9);
          case 7:
            items.push.apply(items, _toConsumableArray(chunk));
            if (!(chunk.length < PAGE_LIMIT)) {
              _context2.n = 8;
              break;
            }
            return _context2.a(3, 9);
          case 8:
            page += 1;
            _context2.n = 1;
            break;
          case 9:
            return _context2.a(2, items);
        }
      }, _callee2);
    }));
    return _loadTargetItems.apply(this, arguments);
  }
  function importBookmarks(_x3) {
    return _importBookmarks.apply(this, arguments);
  }
  function _importBookmarks() {
    _importBookmarks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref3) {
      var api, favorite, _ref3$source, source, _ref3$listId, listId, checkCancel, onProgress, items, localCards, localIds, summary, index, item, mappedCard, duplicateKey;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            api = _ref3.api, favorite = _ref3.favorite, _ref3$source = _ref3.source, source = _ref3$source === void 0 ? 'watchlist' : _ref3$source, _ref3$listId = _ref3.listId, listId = _ref3$listId === void 0 ? null : _ref3$listId, checkCancel = _ref3.checkCancel, onProgress = _ref3.onProgress;
            if (api) {
              _context3.n = 1;
              break;
            }
            throw new Error('Trakt API is not available');
          case 1:
            if (favorite) {
              _context3.n = 2;
              break;
            }
            throw new Error('Favorite API is not available');
          case 2:
            _context3.n = 3;
            return loadSourceItems({
              api: api,
              source: source,
              listId: listId,
              checkCancel: checkCancel,
              onProgress: onProgress
            });
          case 3:
            items = _context3.v;
            localCards = favorite.get({
              type: 'book'
            }) || [];
            localIds = new Set(localCards.map(buildLocalDuplicateKey).filter(Boolean));
            summary = {
              total: items.length,
              processed: 0,
              added: 0,
              duplicates: 0,
              skipped_unsupported: 0,
              failed: 0
            };
            index = 0;
          case 4:
            if (!(index < items.length)) {
              _context3.n = 7;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context3.n = 5;
              break;
            }
            throw cancelError();
          case 5:
            item = items[index];
            mappedCard = mapTraktToLampaCard(item);
            summary.processed += 1;
            if (!mappedCard) {
              summary.skipped_unsupported += 1;
            } else {
              duplicateKey = buildLocalDuplicateKey(mappedCard);
              if (duplicateKey && localIds.has(duplicateKey)) {
                summary.duplicates += 1;
              } else {
                try {
                  favorite.add('book', mappedCard);
                  if (duplicateKey) localIds.add(duplicateKey);
                  summary.added += 1;
                } catch (error) {
                  summary.failed += 1;
                }
              }
            }
            onProgress && onProgress({
              phase: 'processing_import',
              processed: summary.processed,
              total: summary.total,
              percent: summary.total ? Math.round(summary.processed / summary.total * 100) : 100
            });
            if (!(index % 20 === 0)) {
              _context3.n = 6;
              break;
            }
            _context3.n = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });
          case 6:
            index++;
            _context3.n = 4;
            break;
          case 7:
            return _context3.a(2, summary);
        }
      }, _callee3);
    }));
    return _importBookmarks.apply(this, arguments);
  }
  function exportBookmarks(_x4) {
    return _exportBookmarks.apply(this, arguments);
  }
  function _exportBookmarks() {
    _exportBookmarks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_ref4) {
      var api, favorite, _ref4$target, target, _ref4$listId, listId, checkCancel, onProgress, bookmarks, targetItems, targetSet, summary, index, card, mapped, compareKeys, isDuplicate, response, status, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            api = _ref4.api, favorite = _ref4.favorite, _ref4$target = _ref4.target, target = _ref4$target === void 0 ? 'watchlist' : _ref4$target, _ref4$listId = _ref4.listId, listId = _ref4$listId === void 0 ? null : _ref4$listId, checkCancel = _ref4.checkCancel, onProgress = _ref4.onProgress;
            if (api) {
              _context4.n = 1;
              break;
            }
            throw new Error('Trakt API is not available');
          case 1:
            if (favorite) {
              _context4.n = 2;
              break;
            }
            throw new Error('Favorite API is not available');
          case 2:
            bookmarks = favorite.get({
              type: 'book'
            }) || [];
            _context4.n = 3;
            return loadTargetItems({
              api: api,
              target: target,
              listId: listId,
              checkCancel: checkCancel,
              onProgress: onProgress
            });
          case 3:
            targetItems = _context4.v;
            targetSet = new Set();
            targetItems.forEach(function (item) {
              var type = detectTraktType(item);
              var ids = item && item.ids && _typeof(item.ids) === 'object' ? item.ids : {};
              getComparableKeys(type, ids).forEach(function (key) {
                return targetSet.add(key);
              });
            });
            summary = {
              total: bookmarks.length,
              processed: 0,
              added: 0,
              duplicates: 0,
              skipped_unsupported: 0,
              failed: 0
            };
            index = 0;
          case 4:
            if (!(index < bookmarks.length)) {
              _context4.n = 15;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context4.n = 5;
              break;
            }
            throw cancelError();
          case 5:
            card = bookmarks[index];
            mapped = mapLampaToTraktItem(card);
            summary.processed += 1;
            if (mapped) {
              _context4.n = 6;
              break;
            }
            summary.skipped_unsupported += 1;
            _context4.n = 13;
            break;
          case 6:
            compareKeys = getComparableKeys(mapped.type, mapped.ids);
            isDuplicate = compareKeys.some(function (key) {
              return targetSet.has(key);
            });
            if (!isDuplicate) {
              _context4.n = 7;
              break;
            }
            summary.duplicates += 1;
            _context4.n = 13;
            break;
          case 7:
            _context4.p = 7;
            if (!(target === 'watchlist')) {
              _context4.n = 9;
              break;
            }
            _context4.n = 8;
            return api.addToWatchlist({
              method: mapped.method,
              ids: mapped.ids
            });
          case 8:
            _t3 = _context4.v;
            _context4.n = 11;
            break;
          case 9:
            _context4.n = 10;
            return api.addToList({
              listId: listId,
              item: {
                method: mapped.method,
                ids: mapped.ids
              }
            });
          case 10:
            _t3 = _context4.v;
          case 11:
            response = _t3;
            status = parseWriteStatus(response, mapped.type);
            if (status === 'added') {
              summary.added += 1;
              compareKeys.forEach(function (key) {
                return targetSet.add(key);
              });
            } else if (status === 'duplicate') {
              summary.duplicates += 1;
              compareKeys.forEach(function (key) {
                return targetSet.add(key);
              });
            } else {
              summary.failed += 1;
            }
            _context4.n = 13;
            break;
          case 12:
            _context4.p = 12;
            _context4.v;
            summary.failed += 1;
          case 13:
            onProgress && onProgress({
              phase: 'processing_export',
              processed: summary.processed,
              total: summary.total,
              percent: summary.total ? Math.round(summary.processed / summary.total * 100) : 100
            });
            if (!(index % 20 === 0)) {
              _context4.n = 14;
              break;
            }
            _context4.n = 14;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });
          case 14:
            index++;
            _context4.n = 4;
            break;
          case 15:
            return _context4.a(2, summary);
        }
      }, _callee4, null, [[7, 12]]);
    }));
    return _exportBookmarks.apply(this, arguments);
  }
  var bookmarksSync = {
    importBookmarks: importBookmarks,
    exportBookmarks: exportBookmarks
  };

  // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
  var Api$1 = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var isBookmarksSyncRunning = false;
  function main() {
    // Додаємо компонент Trakt.TV у налаштування
    Lampa.SettingsApi.addComponent({
      component: 'trakt',
      name: 'Trakt.TV',
      icon: icons.TRAKT_ICON
    });

    // Користувацька інфа
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_userinfo',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        var token = Lampa.Storage.get('trakt_token');
        if (!token) {
          item.append("<div>".concat(Lampa.Lang.translate('trakttvAuthMissed'), "</div>"));
          return;
        }
        // Показати лоадер
        var loading = $("<div class=\"settings-param__value\">".concat(Lampa.Lang.translate('loading'), "</div>"));
        item.append(loading);
        if (!Api$1) {
          var _Lampa;
          if ((_Lampa = Lampa) !== null && _Lampa !== void 0 && (_Lampa = _Lampa.Storage) !== null && _Lampa !== void 0 && _Lampa.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing in', 'plugins/TraktTV/config.js');
          return;
        }
        Api$1.get('/users/me').then(function (user) {
          loading.remove();
          var vipEnabled = !!(user && user.vip);
          var vipStatusKey = vipEnabled ? 'trakttv_vip_enabled' : 'trakttv_vip_disabled';
          var vipClass = vipEnabled ? 'trakt-vip-badge--enabled' : 'trakt-vip-badge--disabled';
          item.append("<div class=\"settings-param__name\"><b>".concat(Lampa.Lang.translate('trakttv_user_info'), "</b></div>"));
          item.append("<div class=\"settings-param__value trakt-userinfo-name\">".concat(Lampa.Lang.translate('trakttv_username'), ": ").concat((user === null || user === void 0 ? void 0 : user.username) || '-', "</div>"));
          item.append("\n                    <div class=\"settings-param__value trakt-userinfo-vip\">\n                        <span class=\"trakt-userinfo-vip__label\">".concat(Lampa.Lang.translate('trakttv_vip_status'), ":</span>\n                        <span class=\"trakt-vip-badge ").concat(vipClass, "\">").concat(Lampa.Lang.translate(vipStatusKey), "</span>\n                    </div>\n                "));
        })["catch"](function () {
          loading.remove();
          item.append("<div>".concat(Lampa.Lang.translate('trakttvAuthError'), "</div>"));
        });
      }
    });

    // Кнопка авторизації — чистий Device OAuth
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_login',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogin')
      },
      onRender: function onRender(item) {
        var status = $('<div class="settings-param__status"></div>');
        item.find('.settings-param__value').append(status);
        if (!Lampa.Storage.get('trakt_token')) {
          item.show();
          status.removeClass('active error wait').addClass('wait');
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        if (Lampa.Storage.get('trakt_token')) return;

        // Device OAuth only
        if (!Api$1) {
          var _Lampa2;
          if ((_Lampa2 = Lampa) !== null && _Lampa2 !== void 0 && (_Lampa2 = _Lampa2.Storage) !== null && _Lampa2 !== void 0 && _Lampa2.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing in', 'plugins/TraktTV/config.js');
          return;
        }
        (Api$1 && Api$1.auth.device.login()).then(function (data) {
          // Expect raw body: { device_code, user_code, verification_url, interval, expires_in }
          if (!data || !data.user_code || !data.verification_url) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakttvAuthError')
            });
            return;
          }
          var safeVerification = String(data.verification_url || '');
          var safeUserCode = String(data.user_code || '');
          var activateUrl = "https://trakt.tv/activate/".concat(safeUserCode);
          var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=' + encodeURIComponent(activateUrl);
          var modal = $("\n                        <div class=\"about trakt-device-auth\">\n                            <div class=\"trakt-device-auth__qr-container\">\n                                <a href=\"".concat(activateUrl, "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"trakt-device-auth__qr-link\">\n                                    <img src=\"").concat(qrCodeUrl, "\" alt=\"Trakt.TV QR Code\" class=\"trakt-device-auth__qr-image\">\n                                </a>\n                                <div class=\"trakt-device-auth__qr-caption\">").concat(Lampa.Lang.translate('trakttv_scan_qr_code'), "</div>\n                            </div>\n                            <div class=\"about__text trakt-device-auth__verification\">").concat(safeVerification, "</div>\n                            <div class=\"about__text trakt-device-auth__code\">").concat(Lampa.Lang.translate('trakttv_code'), ": <strong>").concat(safeUserCode, "</strong></div>\n                        </div>\n                    "));
          modal.find('.trakt-device-auth__qr-image').on('error', function () {
            modal.find('.trakt-device-auth__qr-container').addClass('trakt-device-auth__qr-container--hidden');
          });
          Lampa.Modal.open({
            title: Lampa.Lang.translate('trakttv_auth'),
            html: modal,
            size: Lampa.Platform.screen('mobile') ? 'medium' : 'small',
            scroll: {
              nopadding: true
            },
            onBack: function onBack() {
              // stop polling, clear flag
              // Stop polling and clear flag on modal close
              if (currentPollTimeoutId) {
                clearTimeout(currentPollTimeoutId);
                currentPollTimeoutId = null;
              }
              Lampa.Storage.set('trakt_active_device_auth', false);
              Lampa.Storage.set('trakt_active_device_auth_started_at', null);
              Lampa.Modal.close();
              Lampa.Controller.toggle('settings_component');
            }
          });

          // If already polling due to a previous attempt, do not start a new one
          // This check is crucial to prevent multiple polling loops
          if (Lampa.Storage.get('trakt_active_device_auth') === true) {
            var startedAt = Number(Lampa.Storage.get('trakt_active_device_auth_started_at') || 0);
            var isStale = !startedAt || Date.now() - startedAt > 20 * 60 * 1000;
            if (isStale) {
              Lampa.Storage.set('trakt_active_device_auth', false);
              Lampa.Storage.set('trakt_active_device_auth_started_at', null);
            } else {
              log('already-active-skip-start');
              return;
            }
          }

          // Mark as active and start polling
          Lampa.Storage.set('trakt_active_device_auth', true);
          Lampa.Storage.set('trakt_active_device_auth_started_at', Date.now());
          pollAuth(data, Lampa.Modal); // Pass Lampa.Modal to pollAuth for direct control
        })["catch"](function (error) {
          log('login-init-error', error);
          Lampa.Bell.push({
            text: Lampa.Lang.translate('trakttvAuthError')
          });
        });
      }
    });

    // Кнопка logout
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_logout',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogout')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) {
          item.show();
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        if (!Api$1) {
          var _Lampa3;
          if ((_Lampa3 = Lampa) !== null && _Lampa3 !== void 0 && (_Lampa3 = _Lampa3.Storage) !== null && _Lampa3 !== void 0 && _Lampa3.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing in', 'plugins/TraktTV/config.js');
          return;
        }
        Api$1 && Api$1.auth.logout();
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvLogoutNoty')
        });
        Lampa.Settings.update();
      }
    });

    // Кнопка повного очищення Trakt
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_full_clear',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvFullClear')
      },
      onRender: function onRender(item) {
        item.show();
      },
      onChange: function onChange() {
        Object.keys(localStorage).forEach(function (key) {
          if (key.toLowerCase().includes('trakt')) {
            localStorage.removeItem(key);
          }
        });
        if (typeof Lampa.Storage.set === 'function') {
          Lampa.Storage.set('trakt_token', null);
          Lampa.Storage.set('trakt_refresh_token', null);
          Lampa.Storage.set('trakt_token_created_at', null);
          Lampa.Storage.set('trakt_token_expires_in', null);
          Lampa.Storage.set('trakt_token_expires_at', null);
          Lampa.Storage.set('trakt_active_device_auth', false);
          Lampa.Storage.set('trakt_active_device_auth_started_at', null);
        }
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvFullClearNoty')
        });
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_sync_section',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        item.append("<div class=\"settings-param__name\"><b>".concat(t('trakt_bookmarks_sync_section', 'Bookmarks sync'), "</b></div>"));
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_mode',
        type: 'select',
        "default": 'watchlist',
        values: {
          watchlist: t('trakt_bookmarks_mode_watchlist', 'Watchlist'),
          my_lists: t('trakt_bookmarks_mode_my_lists', 'My Lists')
        }
      },
      field: {
        name: t('trakt_bookmarks_mode', 'Sync mode')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_import',
        type: 'button'
      },
      field: {
        name: t('trakt_bookmarks_import_button', 'Import bookmarks from Trakt')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) item.show();else item.hide();
      },
      onChange: function onChange() {
        startBookmarksImportFlow();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_bookmarks_export',
        type: 'button'
      },
      field: {
        name: t('trakt_bookmarks_export_button', 'Export bookmarks to Trakt')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) item.show();else item.hide();
      },
      onChange: function onChange() {
        startBookmarksExportFlow();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_progress_section',
        type: 'static'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        item.empty();
        item.append("<div class=\"settings-param__name\"><b>".concat(t('trakt_progress_section', 'Progress configuration'), "</b></div>"));
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakttv_show_tv_progress',
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('trakttv_show_tv_progress')
      }
    });
    if (Lampa.Platform.is('apple_tv') === true) {
      Lampa.SettingsApi.addParam({
        component: 'trakt',
        param: {
          name: 'trakttv_topshelf',
          type: 'trigger',
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('trakttv_topshelf'),
          description: Lampa.Lang.translate('trakttv_topshelf_descr')
        }
      });
    }

    // Параметр для ввімкнення/вимкнення відстеження перегляду
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_enable_watching',
        type: 'trigger',
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('trakttv_enable_watching'),
        description: Lampa.Lang.translate('trakttv_enable_watching_descr')
      }
    });

    // Параметр для вибору мінімального відсотку перегляду
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_min_progress',
        type: 'select',
        "default": '90',
        values: {
          '50': '50%',
          '60': '60%',
          '70': '70%',
          '80': '80%',
          '85': '85%',
          '90': '90%',
          '95': '95%',
          '100': '100%'
        }
      },
      field: {
        name: Lampa.Lang.translate('trakttv_min_progress_threshold'),
        description: Lampa.Lang.translate('trakttv_min_progress_threshold_descr')
      }
    });

    // Параметр для ввімкнення/вимкнення логування
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_enable_logging',
        type: 'trigger',
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('trakttv_enable_logging'),
        description: Lampa.Lang.translate('trakttv_enable_logging_descr')
      }
    });
  }
  function t(key, fallback) {
    if (typeof Lampa === 'undefined' || !Lampa || !Lampa.Lang || typeof Lampa.Lang.translate !== 'function') {
      return fallback || key;
    }
    var translated = Lampa.Lang.translate(key);
    if (!translated || translated === key) {
      return fallback || translated || key;
    }
    return translated;
  }
  function ensureBookmarksSyncAvailable() {
    if (!Lampa.Storage.get('trakt_token')) {
      Lampa.Bell.push({
        text: t('trakt_bookmarks_auth_required', 'Login to Trakt.TV first')
      });
      return false;
    }
    if (!Api$1) {
      log('Api missing in plugins/TraktTV/config.js');
      Lampa.Bell.push({
        text: t('trakt_bookmarks_sync_failed', 'Bookmarks sync failed')
      });
      return false;
    }
    if (!Lampa.Favorite) {
      Lampa.Bell.push({
        text: t('trakt_bookmarks_local_unavailable', 'Local bookmarks are unavailable')
      });
      return false;
    }
    return true;
  }
  function getBookmarksSyncMode() {
    var mode = Lampa.Storage.field('trakt_bookmarks_mode');
    return mode === 'my_lists' ? 'my_lists' : 'watchlist';
  }
  function buildProgressBar(percent) {
    var total = 12;
    var safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
    var filled = Math.round(safePercent / 100 * total);
    return '[' + '#'.repeat(filled) + '-'.repeat(Math.max(0, total - filled)) + ']';
  }
  function formatSyncProgressText(operation) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var percent = Math.max(0, Math.min(100, Number(payload.percent) || 0));
    var bar = buildProgressBar(percent);
    var phaseText = '';
    switch (payload.phase) {
      case 'loading_source':
        phaseText = t('trakt_bookmarks_progress_loading_source', 'Loading source') + " (p".concat(payload.page || 1, ")");
        break;
      case 'loading_target':
        phaseText = t('trakt_bookmarks_progress_loading_target', 'Loading target') + " (p".concat(payload.page || 1, ")");
        break;
      case 'processing_import':
        phaseText = t('trakt_bookmarks_progress_import', 'Importing');
        break;
      case 'processing_export':
        phaseText = t('trakt_bookmarks_progress_export', 'Exporting');
        break;
      default:
        phaseText = t('trakt_bookmarks_progress_prepare', 'Preparing');
        break;
    }
    var counter = '';
    if (payload.total) {
      counter = " ".concat(payload.processed || 0, "/").concat(payload.total);
    }
    return "".concat(bar, " ").concat(percent, "% ").concat(phaseText).concat(counter);
  }
  function formatSyncSummary(operation) {
    var summary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var prefix = operation === 'import' ? t('trakt_bookmarks_import_done', 'Import completed') : t('trakt_bookmarks_export_done', 'Export completed');
    return "".concat(prefix, ": ").concat(t('trakt_bookmarks_added', 'Added'), " ").concat(summary.added || 0, ", ").concat(t('trakt_bookmarks_duplicates', 'Duplicates'), " ").concat(summary.duplicates || 0, ", ").concat(t('trakt_bookmarks_skipped_unsupported', 'Skipped'), " ").concat(summary.skipped_unsupported || 0, ", ").concat(t('trakt_bookmarks_failed', 'Failed'), " ").concat(summary.failed || 0);
  }
  function selectMyList(title, _onSelect) {
    if (!Api$1) return;
    Api$1.myLists({
      page: 1,
      limit: 100
    }).then(function (response) {
      var lists = response && Array.isArray(response.results) ? response.results.filter(function (list) {
        return !!list.id;
      }) : [];
      if (!lists.length) {
        Lampa.Bell.push({
          text: t('trakt_bookmarks_no_lists', 'No personal lists found')
        });
        return;
      }
      var items = lists.map(function (list) {
        var listTitle = list.list_title || list.title || list.name || String(list.id);
        var itemCount = Number(list.item_count) || 0;
        return {
          title: "".concat(listTitle, " (").concat(itemCount, ")"),
          listId: list.id,
          listTitle: listTitle
        };
      });
      items.push({
        title: t('cancel', 'Cancel'),
        cancel: true
      });
      Lampa.Select.show({
        title: title,
        items: items,
        onSelect: function onSelect(item) {
          if (!item || item.cancel) {
            if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
            return;
          }
          if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
          _onSelect && _onSelect(item);
        },
        onBack: function onBack() {
          if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
        }
      });
    })["catch"](function () {
      Lampa.Bell.push({
        text: t('trakt_bookmarks_lists_load_error', 'Failed to load personal lists')
      });
    });
  }
  function runBookmarksSyncOperation(_x) {
    return _runBookmarksSyncOperation.apply(this, arguments);
  }
  function _runBookmarksSyncOperation() {
    _runBookmarksSyncOperation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(operation) {
      var _ref,
        _ref$source,
        source,
        _ref$target,
        target,
        _ref$listId,
        listId,
        isCanceled,
        startText,
        summary,
        _args = arguments,
        _t,
        _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$source = _ref.source, source = _ref$source === void 0 ? 'watchlist' : _ref$source, _ref$target = _ref.target, target = _ref$target === void 0 ? 'watchlist' : _ref$target, _ref$listId = _ref.listId, listId = _ref$listId === void 0 ? null : _ref$listId;
            if (ensureBookmarksSyncAvailable()) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!isBookmarksSyncRunning) {
              _context.n = 2;
              break;
            }
            Lampa.Bell.push({
              text: t('trakt_bookmarks_operation_in_progress', 'Bookmarks sync already in progress')
            });
            return _context.a(2);
          case 2:
            isBookmarksSyncRunning = true;
            isCanceled = false;
            startText = operation === 'import' ? t('trakt_bookmarks_import_start', 'Starting import') : t('trakt_bookmarks_export_start', 'Starting export');
            Lampa.Loading.start(function () {
              isCanceled = true;
            }, startText);
            _context.p = 3;
            if (!(operation === 'import')) {
              _context.n = 5;
              break;
            }
            _context.n = 4;
            return bookmarksSync.importBookmarks({
              api: Api$1,
              favorite: Lampa.Favorite,
              source: source,
              listId: listId,
              checkCancel: function checkCancel() {
                return isCanceled;
              },
              onProgress: function onProgress(payload) {
                Lampa.Loading.setText(formatSyncProgressText(operation, payload));
              }
            });
          case 4:
            _t = _context.v;
            _context.n = 7;
            break;
          case 5:
            _context.n = 6;
            return bookmarksSync.exportBookmarks({
              api: Api$1,
              favorite: Lampa.Favorite,
              target: target,
              listId: listId,
              checkCancel: function checkCancel() {
                return isCanceled;
              },
              onProgress: function onProgress(payload) {
                Lampa.Loading.setText(formatSyncProgressText(operation, payload));
              }
            });
          case 6:
            _t = _context.v;
          case 7:
            summary = _t;
            Lampa.Bell.push({
              text: formatSyncSummary(operation, summary)
            });
            log('bookmarks-sync-summary', operation, summary);
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t2 = _context.v;
            if (_t2 && _t2.code === 'canceled') {
              Lampa.Bell.push({
                text: t('trakt_bookmarks_canceled', 'Operation canceled')
              });
            } else {
              Lampa.Bell.push({
                text: t('trakt_bookmarks_sync_failed', 'Bookmarks sync failed')
              });
              log('bookmarks-sync-error', operation, _t2);
            }
          case 9:
            _context.p = 9;
            Lampa.Loading.stop();
            isBookmarksSyncRunning = false;
            return _context.f(9);
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[3, 8, 9, 10]]);
    }));
    return _runBookmarksSyncOperation.apply(this, arguments);
  }
  function startBookmarksImportFlow() {
    if (!ensureBookmarksSyncAvailable()) return;
    if (getBookmarksSyncMode() === 'my_lists') {
      selectMyList(t('trakt_bookmarks_import_select_list', 'Select source list'), function (item) {
        runBookmarksSyncOperation('import', {
          source: 'my_list',
          listId: item.listId
        });
      });
      return;
    }
    runBookmarksSyncOperation('import', {
      source: 'watchlist'
    });
  }
  function startBookmarksExportFlow() {
    if (!ensureBookmarksSyncAvailable()) return;
    if (getBookmarksSyncMode() === 'my_lists') {
      selectMyList(t('trakt_bookmarks_export_select_list', 'Select target list'), function (item) {
        runBookmarksSyncOperation('export', {
          target: 'my_list',
          listId: item.listId
        });
      });
      return;
    }
    runBookmarksSyncOperation('export', {
      target: 'watchlist'
    });
  }

  // Helper for logging
  function log(message) {
    if (Lampa.Storage.field('trakt_enable_logging')) {
      var _console;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (_console = console).log.apply(_console, ['TraktTV', message].concat(args));
    }
  }
  var currentPollTimeoutId = null; // Змінна для зберігання ідентифікатора таймауту опитування

  // Centralized error handling and polling stop
  function handlePollingError(modalInstance, messageKey, defaultMessage, code) {
    var stop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    log('error-stop', code);
    if (stop) {
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
        currentPollTimeoutId = null;
      }
      Lampa.Storage.set('trakt_active_device_auth', false);
      Lampa.Storage.set('trakt_active_device_auth_started_at', null);
    }
    if (modalInstance) {
      modalInstance.close();
    }
    Lampa.Bell.push({
      text: Lampa.Lang.translate(messageKey) || defaultMessage
    });
  }

  // Function to handle successful authentication
  function handleAuthSuccess(modalInstance, response) {
    log('success', 200);
    if (currentPollTimeoutId) {
      clearTimeout(currentPollTimeoutId);
      currentPollTimeoutId = null;
    }
    if (Api$1 && Api$1.auth && typeof Api$1.auth.storeTokens === 'function') {
      Api$1.auth.storeTokens(response);
    } else {
      Lampa.Storage.set('trakt_token', response.access_token);
      Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
    }
    Lampa.Storage.set('trakt_active_device_auth', false);
    Lampa.Storage.set('trakt_active_device_auth_started_at', null);
    if (modalInstance) {
      modalInstance.close();
    }
    Lampa.Settings.update();
    Lampa.Bell.push({
      text: Lampa.Lang.translate('trakttvAuthOk')
    });
  }

  // Окрема функція для poll авторизації
  function pollAuth(data, modalInstance) {
    var originalIntervalSec = Number(data && data.interval);
    var currentPollingStepMs = Number.isFinite(originalIntervalSec) ? originalIntervalSec * 1000 : 5000; // Default to 5 seconds
    var expiresMs = Number.isFinite(Number(data && data.expires_in)) ? Number(data.expires_in) * 1000 : 600 * 1000; // Default to 10 minutes

    if (!data || !data.device_code) {
      handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', 'missing-device_code');
      return;
    }
    var startTime = Date.now();
    log('start-polling', {
      currentPollingStepMs: currentPollingStepMs,
      expiresMs: expiresMs
    });

    // Clear any existing poll timeout before starting a new one
    if (currentPollTimeoutId) {
      clearTimeout(currentPollTimeoutId);
      currentPollTimeoutId = null;
    }
    var _executePoll = function executePoll() {
      // Check for timeout BEFORE making the API call
      if (Date.now() - startTime >= expiresMs) {
        log('timeout');
        handlePollingError(modalInstance, 'trakttvExpired', 'Expired, please restart', 'timeout');
        return; // Stop polling
      }
      log('tick');
      if (!Api$1) {
        log('Api missing in plugins/TraktTV/config.js');
        handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', 'api-missing');
        return;
      }
      Api$1.auth.device.poll(data.device_code).then(function (response) {
        // Trakt.tv returns 200 OK with token on success
        handleAuthSuccess(modalInstance, response);
      })["catch"](function (error) {
        var status = error && error.status;
        log('poll-error', status);
        switch (status) {
          case 400:
            // authorization_pending, do not stop polling
            log('pending-400');
            // Schedule next poll with currentPollingStepMs
            currentPollTimeoutId = setTimeout(_executePoll, currentPollingStepMs);
            break;
          case 404:
            // invalid_device_code
            handlePollingError(modalInstance, 'trakttvInvalidCode', 'Invalid device code', status);
            break;
          case 409:
            // already_used
            handlePollingError(modalInstance, 'trakttvAuthOk', 'Already authorized', status); // This is a success case for the user
            break;
          case 410:
            // expired_token
            handlePollingError(modalInstance, 'trakttvExpired', 'Expired, please restart', status);
            break;
          case 418:
            // denied
            handlePollingError(modalInstance, 'trakttvDenied', 'Access denied', status);
            break;
          case 429:
            // slow_down - implement exponential backoff with jitter
            // Increase polling step, but cap it to avoid excessively long delays
            currentPollingStepMs = Math.min(currentPollingStepMs * 2, 60 * 1000); // Double, max 60 seconds
            var jitter = Math.random() * 1000; // Add random jitter up to 1 second
            log('slow_down', {
              newPollingStep: currentPollingStepMs + jitter
            });
            currentPollTimeoutId = setTimeout(_executePoll, currentPollingStepMs + jitter);
            break;
          default:
            // Any other error
            handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', status || 'unknown-error');
            break;
        }
      });
    };

    // Start the first poll immediately
    _executePoll();
  }
  var config = {
    main: main
  };

  /**
   * Simple in-memory idempotency cache and per-key lock to avoid duplicate Trakt finish calls on Smart TV.
   * Persisted in Lampa.Storage session scope under 'trakt_completion_cache'.
   * Record shape: { ts:number, token:string, status:'intent'|'finishing'|'finished' }
   */

  var completionCache = new Map(); // key -> { ts, token, status }
  var lockQueues = new Map(); // key -> array of resolvers for queued locks
  var requestInProgress = {}; // Об'єкт для відстеження запитів, що виконуються
  var hashMetaCache = new Map(); // hash -> { ts, card, season, episode, ids }
  var HASH_META_TTL_SEC = 60 * 60 * 24 * 7; // 7 days

  function nowSec() {
    return Math.floor(Date.now() / 1000);
  }
  function sleep(ms) {
    return new Promise(function (r) {
      return setTimeout(r, ms);
    });
  }
  function getTTL() {
    // 6h default to prevent duplicate finishes from periodic timeline saves in long sessions.
    var def = 60 * 60 * 6;
    var v = Lampa.Storage.field('trakt_completion_ttl');
    var num = parseInt(v !== undefined ? v : def);
    return isNaN(num) ? def : num;
  }
  function getDebounceMs() {
    var def = 400;
    var v = Lampa.Storage.field('trakt_finish_debounce');
    var num = parseInt(v !== undefined ? v : def);
    return isNaN(num) ? def : num;
  }
  function logEnabled() {
    return Lampa.Storage.field('trakt_enable_logging');
  }
  function slog() {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (logEnabled()) (_console = console).log.apply(_console, ['TraktTV'].concat(args));
  }
  function normalizeCardForCache(card) {
    if (!card) return null;
    return {
      id: card.id,
      ids: card.ids,
      original_name: card.original_name,
      name: card.name,
      original_title: card.original_title,
      title: card.title,
      first_air_date: card.first_air_date,
      created_by: card.created_by,
      number_of_seasons: card.number_of_seasons,
      number_of_episodes: card.number_of_episodes,
      episode_run_time: card.episode_run_time,
      card_type: card.card_type,
      media_type: card.media_type,
      method: card.method
    };
  }
  function loadHashMetaCache() {
    var raw = Lampa.Storage.get('trakt_hash_meta_cache');
    var now = nowSec();
    hashMetaCache.clear();
    if (raw && Array.isArray(raw.entries)) {
      raw.entries.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        if (v && now - v.ts <= HASH_META_TTL_SEC) {
          hashMetaCache.set(k, v);
        }
      });
    }
    slog('hashMetaCache restored', Object.fromEntries(hashMetaCache));
  }
  function persistHashMetaCache() {
    var now = nowSec();
    var _iterator = _createForOfIteratorHelper(hashMetaCache.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];
        if (!v || now - v.ts > HASH_META_TTL_SEC) hashMetaCache["delete"](k);
      }
      // keep cache small
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (hashMetaCache.size > 300) {
      var ordered = Array.from(hashMetaCache.entries()).sort(function (a, b) {
        return (a[1].ts || 0) - (b[1].ts || 0);
      });
      ordered.slice(0, hashMetaCache.size - 300).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          k = _ref4[0];
        return hashMetaCache["delete"](k);
      });
    }
    var payload = {
      ts: now,
      entries: Array.from(hashMetaCache.entries())
    };
    Lampa.Storage.set('trakt_hash_meta_cache', payload);
  }
  function setHashMeta(hash, meta) {
    if (!hash || !meta) return;
    var next = {
      ts: nowSec(),
      card: normalizeCardForCache(meta.card),
      season: meta.season,
      episode: meta.episode,
      ids: meta.ids || meta.card && meta.card.ids
    };
    hashMetaCache.set(hash, next);
    persistHashMetaCache();
  }
  function getHashMeta(hash) {
    if (!hash) return null;
    var rec = hashMetaCache.get(hash);
    if (!rec) return null;
    if (nowSec() - rec.ts > HASH_META_TTL_SEC) {
      hashMetaCache["delete"](hash);
      return null;
    }
    return rec;
  }
  function extractSeasonEpisode(obj) {
    if (!obj) return {};
    var season = obj.season_number || obj.season || obj.seasonNumber || obj.s;
    var episode = obj.episode_number || obj.episode || obj.episodeNumber || obj.e;
    return {
      season: season,
      episode: episode
    };
  }

  /**
   * Build idempotency key for media card or episode
   * movie: 'movie:trakt:ID' | 'movie:tmdb:ID' | 'movie:hash:...'
   * episode: 'episode:trakt:showID:Sx:Ey' or fallback by hash
   */
  function getCompletionKey(media) {
    try {
      var type = getContentType$1(media) === 'show' ? 'episode' : 'movie';
      var ids = media.ids || {};
      if (type === 'movie') {
        if (ids.trakt) return "movie:trakt:".concat(ids.trakt);
        if (media.id) return "movie:tmdb:".concat(media.id);
        if (media.hash) return "movie:hash:".concat(media.hash);
      } else {
        // Prefer show trakt id + season/episode if present on card
        var showTrakt = ids && ids.trakt || media.show && media.show.ids && media.show.ids.trakt;
        var s = media.season_number || media.season || media.seasonNumber;
        var e = media.episode_number || media.episode || media.episodeNumber;
        if (showTrakt && s && e) return "episode:trakt:".concat(showTrakt, ":S").concat(s, ":E").concat(e);
        // fallback tmdb
        if (media.id && s && e) return "episode:tmdb:".concat(media.id, ":S").concat(s, ":E").concat(e);
        if (media.hash) return "episode:hash:".concat(media.hash);
      }
    } catch (e) {}
    // ultimate fallback: hashed title
    var title = media.original_title || media.original_name || media.name || media.title || 'unknown';
    return "unknown:".concat(Lampa.Utils.hash(title));
  }

  /**
   * Persist/restore cache in session storage with TTL cleanup
   */
  function loadSessionCache() {
    var raw = Lampa.Storage.get('trakt_completion_cache');
    var ttl = getTTL();
    var now = nowSec();
    completionCache.clear();
    if (raw && Array.isArray(raw.entries)) {
      raw.entries.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          k = _ref6[0],
          v = _ref6[1];
        if (v && now - v.ts <= ttl) {
          completionCache.set(k, v);
        }
      });
    }
    slog('completionCache restored', Object.fromEntries(completionCache));
  }
  function persistSessionCache() {
    var ttl = getTTL();
    var now = nowSec();
    // cleanup expired
    var _iterator2 = _createForOfIteratorHelper(completionCache.entries()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          k = _step2$value[0],
          v = _step2$value[1];
        if (!v || now - v.ts > ttl) completionCache["delete"](k);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var payload = {
      ts: now,
      entries: Array.from(completionCache.entries())
    };
    Lampa.Storage.set('trakt_completion_cache', payload);
  }

  /**
   * Check if finish is allowed once within TTL for a key
   * Returns { allow:boolean, reason:string }
   */
  function canFinishOnce(key) {
    var ttl = getTTL();
    var rec = completionCache.get(key);
    var now = nowSec();

    // DEBUG: Log canFinishOnce check
    if (Lampa.Storage.field('trakt_enable_logging')) {
      slog('DEBUG - canFinishOnce check:', {
        key: key,
        record: rec,
        ttl: ttl,
        now: now,
        recordAge: rec ? now - rec.ts : null
      });
    }
    if (!rec) return {
      allow: true,
      reason: 'no_record'
    };
    if (now - rec.ts > ttl) {
      // expired
      completionCache["delete"](key);
      return {
        allow: true,
        reason: 'expired'
      };
    }
    if (rec.status === 'finished') return {
      allow: false,
      reason: 'already_finished'
    };
    if (rec.status === 'finishing') return {
      allow: false,
      reason: 'already_finishing'
    };
    // intent within debounce might still be allowed by finish() flow, but finishWithIdempotency reads allow flag
    return {
      allow: true,
      reason: 'has_intent'
    };
  }

  /**
   * Update record and persist
   */
  function markFinished(key, token, status) {
    var rec = {
      ts: nowSec(),
      token: token,
      status: status
    };
    completionCache.set(key, rec);
    persistSessionCache();
    slog('markFinished', key, rec);
  }

  /**
   * Simple per-key mutex using a queue of Promises
   */
  function withPerKeyLock(_x, _x2) {
    return _withPerKeyLock.apply(this, arguments);
  }
  /**
   * Idempotent finisher with limited retries
   * doFinish must perform actual network call; it should throw error with {status} when HTTP error known
   */
  function _withPerKeyLock() {
    _withPerKeyLock = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key, fn) {
      var queue, release, p, prev;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            queue = lockQueues.get(key);
            if (!queue) {
              queue = [];
              lockQueues.set(key, queue);
            }
            p = new Promise(function (res) {
              return release = res;
            });
            prev = queue.length ? queue[queue.length - 1] : Promise.resolve();
            queue.push(p);
            _context.p = 1;
            _context.n = 2;
            return prev;
          case 2:
            _context.n = 3;
            return fn();
          case 3:
            return _context.a(2, _context.v);
          case 4:
            _context.p = 4;
            release(); // resolve current
            queue.shift(); // remove current
            if (!queue.length) lockQueues["delete"](key);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1,, 4, 5]]);
    }));
    return _withPerKeyLock.apply(this, arguments);
  }
  function finishWithIdempotency(_x3) {
    return _finishWithIdempotency.apply(this, arguments);
  }
  /**
   * Debounced finish intent setter
   */
  function _finishWithIdempotency() {
    _finishWithIdempotency = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref7) {
      var key, token, doFinish, _ref7$logPrefix, logPrefix;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            key = _ref7.key, token = _ref7.token, doFinish = _ref7.doFinish, _ref7$logPrefix = _ref7.logPrefix, logPrefix = _ref7$logPrefix === void 0 ? 'finish' : _ref7$logPrefix;
            return _context3.a(2, withPerKeyLock(key, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var check, delays, lastErr, attempt, res, status, _t;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    check = canFinishOnce(key);
                    slog(logPrefix, 'canFinishOnce', key, check);
                    if (check.allow) {
                      _context2.n = 1;
                      break;
                    }
                    return _context2.a(2, {
                      skipped: true,
                      reason: check.reason
                    });
                  case 1:
                    // set finishing
                    markFinished(key, token, 'finishing');
                    delays = [500, 1500, 4500];
                    lastErr = null;
                    attempt = 0;
                  case 2:
                    if (!(attempt < delays.length)) {
                      _context2.n = 10;
                      break;
                    }
                    _context2.p = 3;
                    _context2.n = 4;
                    return doFinish();
                  case 4:
                    res = _context2.v;
                    // On success 2xx
                    markFinished(key, token, 'finished');
                    return _context2.a(2, {
                      ok: true,
                      status: res && res.status,
                      data: res
                    });
                  case 5:
                    _context2.p = 5;
                    _t = _context2.v;
                    status = _t && _t.status; // Treat 409 as finished without retries
                    if (!(status === 409)) {
                      _context2.n = 6;
                      break;
                    }
                    slog(logPrefix, '409 conflict -> treat as finished, no retries');
                    markFinished(key, token, 'finished');
                    return _context2.a(2, {
                      ok: true,
                      status: 409,
                      conflict: true
                    });
                  case 6:
                    if (!(!status || status >= 500 && status < 600)) {
                      _context2.n = 8;
                      break;
                    }
                    lastErr = _t;
                    slog(logPrefix, "retry attempt ".concat(attempt + 1), {
                      status: status,
                      err: _t
                    });
                    if (!(attempt < delays.length - 1)) {
                      _context2.n = 7;
                      break;
                    }
                    _context2.n = 7;
                    return sleep(delays[attempt]);
                  case 7:
                    return _context2.a(3, 9);
                  case 8:
                    // Other 4xx => no retries
                    slog(logPrefix, 'abort on client error', {
                      status: status,
                      err: _t
                    });
                    // roll back to intent so later we might attempt again if user retriggers after TTL
                    markFinished(key, token, 'intent');
                    return _context2.a(2, {
                      ok: false,
                      status: status,
                      clientError: true
                    });
                  case 9:
                    attempt++;
                    _context2.n = 2;
                    break;
                  case 10:
                    // all retries exhausted -> rollback to intent
                    markFinished(key, token, 'intent');
                    return _context2.a(2, {
                      ok: false,
                      error: lastErr
                    });
                }
              }, _callee2, null, [[3, 5]]);
            }))));
        }
      }, _callee3);
    }));
    return _finishWithIdempotency.apply(this, arguments);
  }
  var intentTimers = new Map(); // key -> timeout id
  function markFinishIntent(key) {
    var token = Lampa.Storage.get('trakt_token');
    var ttl = getTTL();
    var now = nowSec();

    // DEBUG: Log intent marking
    if (Lampa.Storage.field('trakt_enable_logging')) {
      slog('DEBUG - markFinishIntent called:', {
        key: key,
        tokenAvailable: !!token,
        existingRecord: completionCache.get(key),
        timestamp: new Date().toISOString()
      });
    }
    var rec = completionCache.get(key);
    var isFresh = rec && now - rec.ts <= ttl;

    // Do not downgrade terminal states to intent inside TTL window.
    if (isFresh && (rec.status === 'finished' || rec.status === 'finishing')) {
      slog('markFinishIntent skipped (terminal state preserved)', key, rec);
      return {
        skipped: true,
        reason: rec.status
      };
    }
    var next = {
      ts: now,
      token: token,
      status: 'intent'
    };
    completionCache.set(key, next);
    persistSessionCache();

    // debounce persist bursts
    var wait = getDebounceMs();
    if (intentTimers.has(key)) clearTimeout(intentTimers.get(key));
    var t = setTimeout(function () {
      var cur = completionCache.get(key);
      // keep latest ts fresh only for intent state
      if (cur && cur.status === 'intent') {
        completionCache.set(key, _objectSpread2(_objectSpread2({}, cur), {}, {
          ts: nowSec()
        }));
        persistSessionCache();
        slog('markFinishIntent debounced persisted', key);
      }
    }, wait);
    intentTimers.set(key, t);
    slog('markFinishIntent', key, next);
    return {
      ok: true
    };
  }

  /**
   * Compute finish for given media via API:
   * - movie -> /sync/history
   * - show episode -> /sync/history with show/episodes derived by hash/season/episode
   * This function is the only entry point that sends final Trakt request.
   */
  function finish(_x4) {
    return _finish.apply(this, arguments);
  }
  /**
   * Визначає тип вмісту (фільм чи серіал) на основі даних картки
   * @param {Object} card - Картка вмісту
   * @returns {string} 'movie' або 'show'
   */
  function _finish() {
    _finish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(media) {
      var token, key, doFinish, result;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            token = Lampa.Storage.get('trakt_token'); // DEBUG: Log finish function call
            if (Lampa.Storage.field('trakt_enable_logging')) {
              slog('DEBUG - finish function called:', {
                mediaId: media.id,
                mediaHash: media.hash,
                mediaType: getContentType$1(media),
                tokenAvailable: !!token,
                timestamp: new Date().toISOString()
              });
            }
            if (token) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, {
              skipped: true,
              reason: 'no_token'
            });
          case 1:
            key = getCompletionKey(media); // START -- RACE CONDITION FIX
            if (!requestInProgress[key]) {
              _context5.n = 2;
              break;
            }
            slog('Request for key is already in progress, skipping.', key);
            return _context5.a(2, {
              skipped: true,
              reason: 'in_progress'
            });
          case 2:
            requestInProgress[key] = true;
            // END -- RACE CONDITION FIX
            _context5.p = 3;
            // DEBUG: Log key used in finish
            if (Lampa.Storage.field('trakt_enable_logging')) {
              slog('DEBUG - finish function key:', {
                key: key,
                mediaIds: media.ids,
                mediaId: media.id,
                mediaHash: media.hash
              });
            }
            doFinish = /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                var type, tmdbId, search, e, traktId, res, _tmdbId, _search, _e, traktShowId, season, episode, seasons, _e2, last, originalName, found, _iterator3, _step3, s, _iterator4, _step4, ep, epHash, _e3, _res, _t2, _t3;
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      // replicate existing logic but only final "history" call
                      type = getContentType$1(media); // if movie -> addToHistory({method:'movie', id, ids})
                      if (!(type === 'movie')) {
                        _context4.n = 4;
                        break;
                      }
                      // look up trakt id if needed
                      tmdbId = media.id || media.ids && media.ids.tmdb;
                      _context4.n = 1;
                      return api$1.get("/search/tmdb/".concat(tmdbId, "?type=movie"));
                    case 1:
                      search = _context4.v;
                      if (!(!search || !search.length || !search[0].movie || !search[0].movie.ids)) {
                        _context4.n = 2;
                        break;
                      }
                      e = new Error('Movie not found');
                      e.status = 404;
                      throw e;
                    case 2:
                      traktId = search[0].movie.ids.trakt;
                      _context4.n = 3;
                      return api$1.addToHistory({
                        method: 'movie',
                        id: tmdbId,
                        ids: _objectSpread2({
                          trakt: traktId
                        }, media.ids || {})
                      });
                    case 3:
                      res = _context4.v;
                      return _context4.a(2, {
                        status: 200,
                        data: res
                      });
                    case 4:
                      // show episode
                      _tmdbId = media.id || media.ids && media.ids.tmdb;
                      _context4.n = 5;
                      return api$1.get("/search/tmdb/".concat(_tmdbId, "?type=show"));
                    case 5:
                      _search = _context4.v;
                      if (!(!_search || !_search.length || !_search[0].show || !_search[0].show.ids)) {
                        _context4.n = 6;
                        break;
                      }
                      _e = new Error('Show not found');
                      _e.status = 404;
                      throw _e;
                    case 6:
                      traktShowId = _search[0].show.ids.trakt; // Prefer season/episode from media; otherwise try to resolve by timeline hash if available
                      season = media.season_number || media.season || media.seasonNumber;
                      episode = media.episode_number || media.episode || media.episodeNumber;
                      if (!(!season || !episode)) {
                        _context4.n = 23;
                        break;
                      }
                      _context4.n = 7;
                      return api$1.get("/shows/".concat(traktShowId, "/seasons?extended=episodes"));
                    case 7:
                      seasons = _context4.v;
                      if (seasons) {
                        _context4.n = 8;
                        break;
                      }
                      _e2 = new Error('Seasons not found');
                      _e2.status = 404;
                      throw _e2;
                    case 8:
                      // try map by stored last timeline hash + title
                      last = Lampa.Storage.get('trakt_last_card', media) || media;
                      originalName = last.original_name || last.name || last.original_title || last.title || '';
                      _iterator3 = _createForOfIteratorHelper(seasons);
                      _context4.p = 9;
                      _iterator3.s();
                    case 10:
                      if ((_step3 = _iterator3.n()).done) {
                        _context4.n = 20;
                        break;
                      }
                      s = _step3.value;
                      if (s.episodes) {
                        _context4.n = 11;
                        break;
                      }
                      return _context4.a(3, 19);
                    case 11:
                      _iterator4 = _createForOfIteratorHelper(s.episodes);
                      _context4.p = 12;
                      _iterator4.s();
                    case 13:
                      if ((_step4 = _iterator4.n()).done) {
                        _context4.n = 15;
                        break;
                      }
                      ep = _step4.value;
                      epHash = Lampa.Utils.hash([s.number, s.number > 10 ? ':' : '', ep.number, originalName].join(''));
                      if (!(media.hash && epHash === media.hash)) {
                        _context4.n = 14;
                        break;
                      }
                      season = s.number;
                      episode = ep.number;
                      found = true;
                      return _context4.a(3, 15);
                    case 14:
                      _context4.n = 13;
                      break;
                    case 15:
                      _context4.n = 17;
                      break;
                    case 16:
                      _context4.p = 16;
                      _t2 = _context4.v;
                      _iterator4.e(_t2);
                    case 17:
                      _context4.p = 17;
                      _iterator4.f();
                      return _context4.f(17);
                    case 18:
                      if (!found) {
                        _context4.n = 19;
                        break;
                      }
                      return _context4.a(3, 20);
                    case 19:
                      _context4.n = 10;
                      break;
                    case 20:
                      _context4.n = 22;
                      break;
                    case 21:
                      _context4.p = 21;
                      _t3 = _context4.v;
                      _iterator3.e(_t3);
                    case 22:
                      _context4.p = 22;
                      _iterator3.f();
                      return _context4.f(22);
                    case 23:
                      if (!(!season || !episode)) {
                        _context4.n = 24;
                        break;
                      }
                      _e3 = new Error('Episode index not resolved');
                      _e3.status = 422;
                      throw _e3;
                    case 24:
                      _context4.n = 25;
                      return api$1.addToHistory({
                        method: 'show',
                        id: _tmdbId,
                        ids: _objectSpread2({
                          trakt: traktShowId
                        }, media.ids || {}),
                        season_number: season,
                        episodes: [{
                          number: episode,
                          watched_at: new Date().toISOString()
                        }]
                      });
                    case 25:
                      _res = _context4.v;
                      return _context4.a(2, {
                        status: 200,
                        data: _res
                      });
                    case 26:
                      return _context4.a(2);
                  }
                }, _callee4, null, [[12, 16, 17, 18], [9, 21, 22, 23]]);
              }));
              return function doFinish() {
                return _ref9.apply(this, arguments);
              };
            }();
            _context5.n = 4;
            return finishWithIdempotency({
              key: key,
              token: token,
              doFinish: doFinish,
              logPrefix: 'finish'
            });
          case 4:
            result = _context5.v;
            slog('finish result', key, result);
            return _context5.a(2, result);
          case 5:
            _context5.p = 5;
            delete requestInProgress[key]; // Завжди знімаємо блокування
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[3,, 5, 6]]);
    }));
    return _finish.apply(this, arguments);
  }
  function getContentType$1(card) {
    if (!card) return 'movie';
    if (card.method === 'tv' || card.method === 'show') return 'show';
    if (card.card_type === 'tv' || card.card_type === 'show') return 'show';
    if (card.media_type === 'tv' || card.media_type === 'show') return 'show';
    if (card.original_name || card.name) return 'show';
    if (card.episode_run_time || card.first_air_date || card.created_by || card.number_of_seasons || card.number_of_episodes) {
      return 'show';
    }
    return 'movie';
  }
  var isAddingShowToWatching = false;
  var isInitialized$1 = false;

  /**
   * Модуль для відстеження перегляду в Trakt.TV
   */
  var watching = {
    /**
     * Перевіряє, чи увімкнено логування
     * @returns {boolean} true, якщо логування увімкнено
     */
    isLoggingEnabled: function isLoggingEnabled() {
      return Lampa.Storage.field('trakt_enable_logging');
    },
    /**
     * Ініціалізує обробники подій відстеження перегляду
     */
    init: function init() {
      if (isInitialized$1) {
        slog('watching.init called while already initialized, skipping');
        return;
      }
      isInitialized$1 = true;

      // Restore cache from session
      loadSessionCache();
      loadHashMetaCache();
      slog('watching.init');

      // Слідкуємо за оновленнями Timeline
      if (window.Lampa && Lampa.Timeline && Lampa.Timeline.listener) {
        Lampa.Timeline.listener.follow('update', this.processTimelineUpdate.bind(this));
        slog('Timeline listener attached');
      }

      // Слідкуємо за стартом програвача для збереження поточної картки
      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        Lampa.Player.listener.follow('start', this.onPlayerStart.bind(this));
        slog('Player listener attached');
      }
    },
    /**
     * Обробник події старту програвача
     * @param {Object} data - Дані події
     */
    onPlayerStart: function onPlayerStart(data) {
      if (this.isLoggingEnabled()) {
        slog('Player start event received', data);
      }
      var card = data.card || Lampa.Activity.active() && Lampa.Activity.active().movie;
      if (this.isLoggingEnabled()) {
        slog('Card determined in onPlayerStart', card);
      }
      if (!card) {
        if (this.isLoggingEnabled()) {
          slog('No card found in onPlayerStart');
        }
        return;
      }

      // Зберігаємо поточну картку для подальшої обробки
      Lampa.Storage.set('trakt_last_card', card);
      if (this.isLoggingEnabled()) {
        slog('Card saved to storage', card);
      }

      // Кешуємо відповідність hash -> card/season/episode для стабільного фінішу
      var timeline = data && data.timeline;
      var hash = timeline && timeline.hash;
      if (hash) {
        var se = extractSeasonEpisode(data);
        setHashMeta(hash, {
          card: card,
          season: se.season,
          episode: se.episode,
          ids: card && card.ids
        });
        if (this.isLoggingEnabled()) {
          slog('Hash meta cached from player start', {
            hash: hash,
            season: se.season,
            episode: se.episode
          });
        }
      }
    },
    /**
     * Обробник оновлень Timeline
     * @param {Object} data - Дані події
     */
    processTimelineUpdate: function processTimelineUpdate(data) {
      // Додаткове логування для налагодження подвійних викликів
      slog('processTimelineUpdate called with data:', data);
      if (this.isLoggingEnabled()) {
        slog('Timeline update received', data);
      }

      // Перевіряємо налаштування trakt_enable_watching
      var enableWatching = Lampa.Storage.field('trakt_enable_watching');
      slog('trakt_enable_watching setting:', enableWatching);
      if (!enableWatching) {
        if (this.isLoggingEnabled()) {
          slog('Watching is disabled by settings');
        }
        return;
      }
      if (!data || !data.data || !data.data.hash || !data.data.road) {
        if (this.isLoggingEnabled()) {
          slog('Invalid data received', data);
        }
        slog('Invalid data - data:', data);
        slog('Invalid data - data.data:', data && data.data);
        slog('Invalid data - data.data.hash:', data && data.data && data.data.hash);
        slog('Invalid data - data.data.road:', data && data.data && data.data.road);
        return;
      }
      var hash = data.data.hash;
      var road = data.data.road || {};
      var percent = parseFloat(road.percent || 0);
      if (isNaN(percent)) percent = 0;
      var token = Lampa.Storage.get('trakt_token');
      var minProgress = parseInt(Lampa.Storage.field('trakt_min_progress') || config.minProgress);
      window.last_timeline_event = {
        data: {
          hash: hash,
          road: road
        },
        ts: Date.now()
      };
      slog('Timeline update data:', {
        hash: hash,
        percent: percent,
        token: !!token,
        minProgress: minProgress
      });
      if (this.isLoggingEnabled()) {
        slog('Processing timeline update', {
          hash: hash,
          percent: percent,
          token: !!token,
          minProgress: minProgress
        });
      }
      if (!token) {
        if (this.isLoggingEnabled()) {
          slog('No token found, skipping update');
        }
        slog('No token found');
        return;
      }
      var card = this.getCurrentCard();
      var meta = getHashMeta(hash);
      if (!card && meta && meta.card) {
        card = meta.card;
        if (this.isLoggingEnabled()) {
          slog('Card restored from hash meta cache', card);
        }
      }
      if (card && hash) {
        var se = extractSeasonEpisode(card);
        setHashMeta(hash, {
          card: card,
          season: se.season,
          episode: se.episode,
          ids: card.ids
        });
      }
      slog('Card from getCurrentCard:', card);
      if (!card) {
        if (this.isLoggingEnabled()) {
          slog('No card found, skipping update');
        }
        slog('No card found, skipping update');
        return;
      }

      // Перевіряємо, чи потрібно додати серіал в "Смотрю"
      slog('Calling checkAndAddToShow');
      this.checkAndAddToShow(card, hash, percent, token);

      // Інтеграція нового фініш-флоу: при досягненні порогу формуємо key і викликаємо finish()
      slog('Checking if should finish with idempotency, percent:', percent, 'minProgress:', minProgress);
      var watchedByPercent = (typeof percent === 'number' ? percent : 0) >= minProgress;
      var watchedByTime = road && road.time && road.duration ? road.time / road.duration * 100 >= minProgress : false;
      if (watchedByPercent || watchedByTime) {
        var media = Object.assign({}, card, {
          hash: hash
        });
        if (meta) {
          if (!media.season_number && meta.season) media.season_number = meta.season;
          if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
          if (!media.ids && meta.ids) media.ids = meta.ids;
        }

        // DEBUG: Log media object and hash source
        if (this.isLoggingEnabled()) {
          slog('DEBUG - Timeline route media:', {
            cardId: card.id,
            cardType: getContentType$1(card),
            percent: percent,
            minProgress: minProgress,
            currentHash: hash,
            mediaHash: media.hash
          });
        }
        var key = getCompletionKey(media);

        // DEBUG: Log key generation
        if (this.isLoggingEnabled()) {
          slog('DEBUG - Timeline route key generation:', {
            key: key,
            mediaIds: media.ids,
            mediaId: media.id,
            mediaHash: media.hash,
            contentType: getContentType$1(media)
          });
        }
        slog('Timeline threshold reached, finish intent and attempt', {
          key: key,
          percent: percent
        });
        // Mark intent quickly so event-driven finishes coalesce
        markFinishIntent(key);
        // Fire idempotent finish
        finish(media)["catch"](function (e) {
          return slog('finish error', e);
        });
      } else {
        slog('Below minProgress, no finish');
      }
    },
    /**
     * Отримує поточну картку
     * @returns {Object|null} Поточна картка
     */
    getCurrentCard: function getCurrentCard() {
      var card = Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie) || null;
      if (!card) card = Lampa.Storage.get('trakt_last_card', null);

      // Додаткове логування для налагодження
      slog('getCurrentCard - Activity.active():', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active());
      slog('getCurrentCard - card_data:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().card_data);
      slog('getCurrentCard - card:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().card);
      slog('getCurrentCard - movie:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().movie);
      slog('getCurrentCard - trakt_last_card from storage:', Lampa.Storage.get('trakt_last_card', null));
      slog('getCurrentCard - final card:', card);
      if (this.isLoggingEnabled()) {
        slog('Current card determined', card);
      }
      return card;
    },
    /**
     * Перевіряє, чи потрібно додати серіал в "Смотрю"
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {number} percent - Відсоток перегляду
     * @param {string} token - Токен авторизації
     */
    checkAndAddToShow: function checkAndAddToShow(card, hash, percent, token) {
      var originalName = card.original_name || card.name || card.original_title || card.title;
      var firstEpisodeHash = Lampa.Utils.hash('11' + originalName);

      // Додаткове логування для налагодження
      slog('checkAndAddToShow called with:', {
        card: card,
        hash: hash,
        percent: percent,
        originalName: originalName,
        firstEpisodeHash: firstEpisodeHash
      });
      if (this.isLoggingEnabled()) {
        slog('Checking if show should be added to watching', {
          card: card,
          hash: hash,
          percent: percent,
          firstEpisodeHash: firstEpisodeHash,
          shouldAdd: hash === firstEpisodeHash
        });
      }
      var shouldAdd = hash === firstEpisodeHash;
      slog('Should add show to watching:', shouldAdd);
      if (shouldAdd) {
        slog('Adding show to watching');
        this.addShowToWatching(card, token);
      } else {
        slog('Not adding show to watching');
      }
    },
    /**
     * Додає серіал в "Смотрю"
     * @param {Object} card - Картка серіалу
     * @param {string} token - Токен авторизації
     */
    addShowToWatching: function addShowToWatching(card, token) {
      var _this = this;
      // Уникнення подвійних запитів
      if (isAddingShowToWatching) {
        slog('addShowToWatching called while already adding, skipping');
        return;
      }
      isAddingShowToWatching = true;
      if (this.isLoggingEnabled()) {
        slog('Adding show to watching', card);
      }

      // Додаткове логування для налагодження
      slog('addShowToWatching called with card:', card);
      var tmdbId = card.id || card.ids && card.ids.tmdb;
      slog('Determined tmdbId:', tmdbId);
      if (!tmdbId) {
        slog('No tmdbId found, returning');
        return;
      }

      // Визначаємо тип вмісту
      var contentType = getContentType$1(card);
      slog('Determined content type:', contentType);

      // Отримуємо Trakt ID за TMDB ID
      slog('Searching for content by tmdbId:', tmdbId, 'type:', contentType);
      api$1.get("/search/tmdb/".concat(tmdbId, "?type=").concat(contentType)).then(function (response) {
        slog('Search response:', response);
        if (response && response.length > 0) {
          var item = response[0];
          var traktId = item.show && item.show.ids.trakt || item.movie && item.movie.ids.trakt;
          slog('Found traktId:', traktId);

          // Додаємо вміст в "Смотрю"
          var body = {};
          if (contentType === 'show') {
            body.shows = [{
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              // Завжди додаємо traktId
              watched_at: new Date().toISOString()
            }];
          } else {
            body.movies = [{
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              // Завжди додаємо traktId
              watched_at: new Date().toISOString()
            }];
          }
          slog('Body for adding content to watching:', body);
          if (_this.isLoggingEnabled()) {
            slog('Sending request to add content to watching', body);
          }
          return api$1.get('/sync/watchlist', body);
        } else {
          slog('No show found or no traktId in response');
        }
      })["catch"](function (error) {
        console.error('TraktTV', 'Error adding show to watching', error);
      })["finally"](function () {
        // Скидаємо стан після виконання запиту
        isAddingShowToWatching = false;
      });
    },
    /**
     * Позначення наміру завершити (події onEnded/onStop/onHidden тощо)
     * Використовується замість прямих фінальних запитів.
     */
    markFinishIntent: markFinishIntent,
    /**
     * Отримати кешовані метадані за hash
     */
    getMetaByHash: getHashMeta,
    /**
     * Запам'ятати метадані за hash
     */
    rememberHashMeta: setHashMeta,
    /**
     * Публічний доступ до єдиного генератора completion key
     */
    getCompletionKey: getCompletionKey,
    /**
     * Публічний доступ до визначення типу контенту
     */
    getContentType: getContentType$1,
    /**
     * Єдиний шлях відправити фінальний запит з ідемпотентністю
     */
    finish: finish,
    /**
     * Знаходить інформацію про епізод за хешем
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {Array} seasons - Сезони серіалу
     * @returns {Object|null} Інформація про епізод
     */
    findEpisodeByHash: function findEpisodeByHash(card, hash, seasons) {
      var originalName = card.original_name || card.name || card.original_title || card.title;

      // Додаткове логування для налагодження
      slog('findEpisodeByHash called with:', {
        card: card,
        hash: hash,
        seasons: seasons && seasons.length
      });
      slog('originalName:', originalName);
      for (var i = 0; i < seasons.length; i++) {
        var season = seasons[i];
        if (!season.episodes) continue;
        for (var j = 0; j < season.episodes.length; j++) {
          var episode = season.episodes[j];
          var episodeHashStr = [season.number, season.number > 10 ? ':' : '', episode.number, originalName].join('');
          var episodeHash = Lampa.Utils.hash(episodeHashStr);

          // Додаткове логування для налагодження
          slog('Checking episode:', {
            season: season.number,
            episode: episode.number,
            episodeHashStr: episodeHashStr,
            episodeHash: episodeHash,
            ids: episode.ids
          });
          if (episodeHash === hash && episode.ids && episode.ids.trakt) {
            var result = {
              traktId: episode.ids.trakt,
              season: season.number,
              episode: episode.number
            };
            slog('Found matching episode:', result);
            return result;
          }
        }
      }
      slog('No matching episode found');
      return null;
    }
  };

  var isInitialized = false;
  function resolveUpnextProgress() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var watched = Number(data.trakt_upnext_watched);
    var total = Number(data.trakt_upnext_total);
    var text = (data.trakt_upnext_progress || '').toString().trim();
    var safeWatched = Number.isFinite(watched) ? watched : 0;
    var safeTotal = Number.isFinite(total) ? total : 0;
    if (!text && safeTotal > 0) {
      text = "".concat(safeWatched, "/").concat(safeTotal);
    }
    if ((!safeWatched || !safeTotal) && text.indexOf('/') > -1) {
      var parts = text.split('/');
      var parsedWatched = Number(parts[0]);
      var parsedTotal = Number(parts[1]);
      if (Number.isFinite(parsedWatched) && parsedWatched >= 0) safeWatched = parsedWatched;
      if (Number.isFinite(parsedTotal) && parsedTotal > 0) safeTotal = parsedTotal;
    }
    if (!text) return null;
    var percent = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round(safeWatched / safeTotal * 100))) : null;
    return {
      text: text,
      percent: percent
    };
  }
  function renderUpnextProgressBadge(cardInstance) {
    if (!cardInstance || !cardInstance.data || !cardInstance.render) return;
    var progress = resolveUpnextProgress(cardInstance.data);
    if (!progress) return;
    var cardNode = cardInstance.render(true);
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView) return;
    var badge = cardView.querySelector('.trakt-upnext-progress');
    if (!badge) {
      badge = document.createElement('div');
      badge.className = 'trakt-upnext-progress';
      cardView.appendChild(badge);
    }
    badge.textContent = progress.text;
    if (progress.percent !== null) {
      badge.style.setProperty('--trakt-upnext-progress', "".concat(progress.percent, "%"));
    } else {
      badge.style.removeProperty('--trakt-upnext-progress');
    }
  }
  function decorateUpnextLine(event) {
    if (!event || !event.data || event.data.trakt_row !== 'upnext') return;
    if (!Array.isArray(event.items)) return;
    event.items.forEach(renderUpnextProgressBadge);
  }

  /**
   * Модуль для обробки подій плагіна
   */
  var events = {
    /**
     * Ініціалізує обробники подій
     */
    init: function init() {
      var _this = this;
      if (isInitialized) {
        if (Lampa.Storage.field('trakt_enable_logging')) {
          console.log('TraktTV', 'events.init called while already initialized, skipping');
        }
        return;
      }
      isInitialized = true;

      // Следим за готовностью приложения
      if (window.appready) this.onAppReady();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') _this.onAppReady();
        });
      }

      // Додаємо кнопку watchlist на картку
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite' && Lampa.Storage.get('trakt_token')) {
          _this.onFullCardReady(e);
        }
      });
      Lampa.Listener.follow('line', function (e) {
        if (!e || !e.type) return;
        if (e.type === 'append' || e.type === 'visible' || e.type === 'toggle') {
          decorateUpnextLine(e);
        }
      });

      // Переадресація завершальних подій програвача на idempotent intent
      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        // onEnded / onStop / onHidden -> markFinishIntent for the current media key
        var routeFinishIntent = function routeFinishIntent(evt) {
          try {
            if (!Lampa.Storage.field('trakt_enable_watching')) return;
            var token = Lampa.Storage.get('trakt_token');
            if (!token) return;
            var card = Lampa.Activity.active && Lampa.Activity.active() && (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie) || Lampa.Storage.get('trakt_last_card');
            if (!card) return;
            // Include last known hash if available from timeline storage
            var lastTimeline = window.last_timeline_event && window.last_timeline_event.data || {};
            var media = Object.assign({}, card, {
              hash: lastTimeline.hash
            });
            var meta = watching && typeof watching.getMetaByHash === 'function' ? watching.getMetaByHash(lastTimeline.hash) : null;
            if (meta) {
              if (!media.season_number && meta.season) media.season_number = meta.season;
              if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
              if (!media.ids && meta.ids) media.ids = meta.ids;
            }

            // DEBUG: Log media object and hash source
            if (Lampa.Storage.field('trakt_enable_logging')) {
              console.log('TraktTV', 'DEBUG - Event route media:', {
                cardId: card.id,
                cardType: card.first_air_date ? 'show' : 'movie',
                eventId: evt && evt.type,
                lastTimelineHash: lastTimeline.hash,
                currentMediaHash: media.hash
              });
            }
            var key = watching && typeof watching.getCompletionKey === 'function' ? watching.getCompletionKey(media) : null;
            if (key && watching && typeof watching.markFinishIntent === 'function') {
              // DEBUG: Log intent marking
              if (Lampa.Storage.field('trakt_enable_logging')) {
                console.log('TraktTV', 'DEBUG - Event route markFinishIntent called:', {
                  key: key,
                  eventId: evt && evt.type,
                  timestamp: new Date().toISOString()
                });
              }
              watching.markFinishIntent(key);
              if (Lampa.Storage.field('trakt_enable_logging')) {
                console.log('TraktTV', 'Finish intent marked from event', evt && evt.type, key);
              }
            }

            // Primary finish route is timeline update.
            // Fallback to direct finish only when "ended" happened without known timeline hash.
            var shouldFallbackFinish = !!(evt && evt.type === 'ended' && !lastTimeline.hash);
            if (shouldFallbackFinish && watching && typeof watching.finish === 'function') {
              var contentType = watching && typeof watching.getContentType === 'function' ? watching.getContentType(media) : 'movie';
              var season = media.season_number || media.season || media.seasonNumber;
              var episode = media.episode_number || media.episode || media.episodeNumber;
              var canFinishSafely = contentType === 'movie' || season && episode || media.hash;
              if (canFinishSafely) {
                if (Lampa.Storage.field('trakt_enable_logging')) {
                  console.log('TraktTV', 'Fallback finish from event route', {
                    eventType: evt && evt.type,
                    contentType: contentType,
                    hasHash: !!media.hash,
                    season: season,
                    episode: episode
                  });
                }
                watching.finish(media)["catch"](function (e) {
                  if (Lampa.Storage.field('trakt_enable_logging')) {
                    console.log('TraktTV', 'Finish error from event route', e);
                  }
                });
              } else if (Lampa.Storage.field('trakt_enable_logging')) {
                console.log('TraktTV', 'Skip fallback finish from event route: insufficient episode context', {
                  eventType: evt && evt.type,
                  contentType: contentType,
                  hasHash: !!media.hash,
                  season: season,
                  episode: episode
                });
              }
            }
          } catch (e) {
            // swallow
            if (Lampa.Storage.field('trakt_enable_logging')) {
              console.log('TraktTV', 'DEBUG - Event route error:', e);
            }
          }
        };
        Lampa.Player.listener.follow('ended', routeFinishIntent);
        Lampa.Player.listener.follow('stop', routeFinishIntent);
        Lampa.Player.listener.follow('visibility', function (e) {
          if (e && e.hidden) routeFinishIntent({
            type: 'hidden'
          });
        });
      }
    },
    /**
     * Обробник події готовності додатку
     */
    onAppReady: function onAppReady() {
      // Імпортуємо config динамічно, щоб уникнути циклічних залежностей
      config.main();

      // Імпортуємо addMenuItems динамічно
      addMenuItems();
    },
    /**
     * Додає блок з пов'язаними списками в картку медіа
     * @param {Object} e - Об'єкт події
     */
    addRelatedListsBlock: function addRelatedListsBlock(e) {
      var _e$object;
      // Перевіряємо наявність об'єкта події
      if (!e) {
        console.error('TraktTV', 'Cannot add related lists block - event object is missing');
        return;
      }

      // Перевірка чи вже додано (дедуплікація)
      if (e.object && e.object.activity && typeof e.object.activity.render === 'function') {
        if (e.object.activity.render().find('.tag-count.trakttv-lists').length > 0) {
          if (Lampa.Storage.field('trakt_enable_logging')) {
            console.log('TraktTV', 'Related lists block already exists, skipping');
          }
          return;
        }
      }

      // Перевіряємо наявність даних картки
      var card = e.data;
      if (!card) {
        console.error('TraktTV', 'Cannot add related lists block - missing card data');
        return;
      }

      // Визначаємо тип контенту - e.object.method є primary джерело
      var method = (_e$object = e.object) === null || _e$object === void 0 ? void 0 : _e$object.method; // 'tv' or 'movie'

      // Fallback через евристики з e.data.movie
      if (!method && e.data && e.data.movie) {
        method = e.data.movie.name || e.data.movie.first_air_date ? 'tv' : 'movie';
      }

      // Fallback через card евристики
      if (!method && card) {
        method = card.method || card.card_type || (card.first_air_date || card.name ? 'tv' : 'movie');
      }
      if (Lampa.Storage.field('trakt_enable_logging')) {
        var _e$object2;
        console.log('TraktTV', 'addRelatedListsBlock method:', method, 'from e.object.method:', (_e$object2 = e.object) === null || _e$object2 === void 0 ? void 0 : _e$object2.method);
      }

      // Перевіряємо наявність ID
      if (!card.id && (!card.external_ids || !card.external_ids.trakt_id)) {
        console.error('TraktTV', 'Cannot add related lists block - missing card ID');
        return;
      }

      // Параметри для запиту
      // Trakt API використовує 'show' замість 'tv'
      var params = {
        id: card.id,
        method: method === 'tv' ? 'show' : 'movie'
      };

      // Додаємо trakt_id, якщо він доступний
      if (card.external_ids && card.external_ids.trakt_id) {
        params.ids = {
          trakt: card.external_ids.trakt_id
        };
      }

      // Отримуємо пов'язані списки та списки, які користувач лайкнув
      // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
      var Api = typeof api !== 'undefined' && api || window.TraktTV && window.TraktTV.api || null;
      if (!Api) {
        var _Lampa;
        if ((_Lampa = Lampa) !== null && _Lampa !== void 0 && (_Lampa = _Lampa.Storage) !== null && _Lampa !== void 0 && _Lampa.field('trakt_enable_logging')) console.log('TraktTV', 'Api missing in', 'plugins/TraktTV/plugins/events.js');
        return;
      }
      Promise.all([Api && Api.getMediaLists(params), Api && Api.likesLists({
        page: 1,
        limit: 1000
      }) // Отримуємо всі лайкнуті списки
      ]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          mediaListsResponse = _ref2[0],
          likedListsResponse = _ref2[1];
        var formattedMediaLists = mediaListsResponse; // getMediaLists вже повертає відформатовані дані
        var likedListIds = likedListsResponse.results.map(function (list) {
          return list.id;
        });

        // Перевіряємо наявність списків
        if (!formattedMediaLists || !Array.isArray(formattedMediaLists) || formattedMediaLists.length === 0) {
          return;
        }

        // Перевіряємо наявність activity та render
        if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') {
          return;
        }

        // Знаходимо блок з тегами
        var tagsBlock = e.object.activity.render().find('.full-descr__tags');
        if (tagsBlock.length === 0) {
          return;
        }

        // Створюємо елемент для відображення кількості списків
        var listsCountElement = $("\n                <div class=\"tag-count selector trakttv-lists\">\n                    <div class=\"tag-count__name\">".concat(Lampa.Lang.translate('trakttv_related_lists'), "</div>\n                </div>\n            "));

        // Додаємо обробник кліку для відображення списків
        listsCountElement.on('hover:enter', function () {
          var selectItems = formattedMediaLists.map(function (list) {
            return {
              title: list.title,
              item_count: list.item_count,
              id: list.id,
              component: 'trakt_list_detail',
              // Вказуємо компонент
              list_id: list.id,
              // Передаємо list_id
              page: 1,
              // Початкова сторінка
              liked: likedListIds.includes(list.id) // Додаємо статус лайку
            };
          });
          if (selectItems.length === 0) {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_no_lists'));
            return;
          }
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakttv_related_lists'),
            items: selectItems,
            onSelect: function onSelect(a) {
              var listTitle = typeof a.item_count === 'number' ? "".concat(a.title, " (").concat(a.item_count, ")") : a.title;
              Lampa.Activity.push({
                url: '',
                title: listTitle,
                component: a.component,
                list_id: a.list_id,
                page: a.page
              });
            },
            onRender: function onRender(item, element) {
              if (element.liked) {
                item.find('.selectbox__title').append('<span class="selectbox__lables"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 22 22" xml:space="preserve"><path fill="currentColor" d="M11,20c-0.3,0-0.5-0.1-0.7-0.3l-8.5-8.5c-0.9-0.9-1.4-2-1.4-3.3c0-2.6,2.1-4.7,4.7-4.7c1.4,0,2.7,0.6,3.6,1.5l2.3,2.3l2.3-2.3c0.9-0.9,2.2-1.5,3.6-1.5c2.6,0,4.7,2.1,4.7,4.7c0,1.3-0.5,2.4-1.4,3.3l-8.5,8.5C11.5,19.9,11.3,20,11,20z"></path></svg></span>');
              }
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });

        // Додаємо елемент в кінець блоку з тегами
        tagsBlock.append(listsCountElement);
      })["catch"](function (error) {});
    },
    /**
     * Обробник події готовності картки фільму/серіалу
     * @param {Object} e - Об'єкт події
     */
    onFullCardReady: function onFullCardReady(e) {
      // Перевіряємо наявність необхідних даних
      if (!e || !e.data) {
        return;
      }

      // Логування для дебагу
      if (Lampa.Storage.field('trakt_enable_logging')) {
        var _e$object3, _e$data, _e$data2, _e$data3, _e$data4;
        console.log('TraktTV', 'onFullCardReady:', {
          'e.object.method': (_e$object3 = e.object) === null || _e$object3 === void 0 ? void 0 : _e$object3.method,
          'e.data.movie.name': (_e$data = e.data) === null || _e$data === void 0 || (_e$data = _e$data.movie) === null || _e$data === void 0 ? void 0 : _e$data.name,
          'e.data.movie.first_air_date': (_e$data2 = e.data) === null || _e$data2 === void 0 || (_e$data2 = _e$data2.movie) === null || _e$data2 === void 0 ? void 0 : _e$data2.first_air_date,
          'card.id': (_e$data3 = e.data) === null || _e$data3 === void 0 ? void 0 : _e$data3.id,
          'card.ids': (_e$data4 = e.data) === null || _e$data4 === void 0 ? void 0 : _e$data4.ids
        });
      }

      // Перевіряємо наявність activity
      if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') {
        return;
      }
      var buttonsContainer = e.object.activity.render().find('.full-start-new__buttons');
      if (buttonsContainer.find('.trakt-list-manager-button').length === 0) {
        var button = watchlist.addWatchlistButton(e.data);
        buttonsContainer.append(button);
      }

      // Видалено кнопку TraktHistory.addHistoryButton згідно з завданням
      // const historyButton = TraktHistory.addHistoryButton(e.data);
      // e.object.activity.render().find('.full-start-new__buttons').append(historyButton);

      // Додаємо блок з пов'язаними списками
      // Перевіряємо наявність необхідних даних для списків
      // Виправлено: додано більше логування для налагодження

      if (!e.data.id) {
        // Спробуємо отримати ID з інших джерел

        // Перевіряємо наявність ID в різних можливих полях
        if (e.data.card && e.data.card.id) {
          e.data.id = e.data.card.id;
        } else if (e.data.data && e.data.data.id) {
          e.data.id = e.data.data.id;
        } else if (e.data.movie && e.data.movie.id) {
          e.data.id = e.data.movie.id;
        } else if (e.data.show && e.data.show.id) {
          e.data.id = e.data.show.id;
        } else if (e.data.external_ids && e.data.external_ids.tmdb_id) {
          e.data.id = e.data.external_ids.tmdb_id;
        } else {
          return;
        }
      }

      // Перевіряємо наявність external_ids
      if (!e.data.external_ids) {
        e.data.external_ids = {};
      }

      // Створюємо глибоку копію об'єкта події для передачі в addRelatedListsBlock
      var eventForLists = {
        data: JSON.parse(JSON.stringify(e.data)),
        object: {
          method: e.object.method,
          activity: e.object.activity
        }
      };

      // Додаткова перевірка копії даних
      if (!eventForLists.data.id) {
        eventForLists.data.id = e.data.id; // Явно копіюємо ID
      }
      this.addRelatedListsBlock(eventForLists);

      // Додаємо прогрес перегляду для серіалів
      if (e.object.method === 'tv') {
        // Перевіряємо налаштування trakttv_show_tv_progress
        var showProgress = Lampa.Storage.field('trakttv_show_tv_progress');
        // Показуємо прогрес, якщо налаштування не існуё true
        if (showProgress === undefined || showProgress === true) {
          TraktHistory.showWatchProgress(e.data, e);
        }
      }
    }
  };

  /**
   * Helper functions for ContentRows integration (Lampa 3.0+)
   */

  /**
   * Check if user has permission to see UpNext content
   * @returns {boolean}
   */
  function checkUpNextPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Check if user has permission to see Recommendations content
   * @returns {boolean}
   */
  function checkRecommendationsPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Unified content type detection
   * @param {Object} data - Item data
   * @returns {string} - Content type: 'movie', 'tv', 'show', 'episode'
   */
  function getContentType(data) {
    if (data.method) return data.method;
    if (data.type) return data.type;
    if (data.card_type) return data.card_type;
    return data.name ? 'tv' : 'movie';
  }

  /**
   * Normalize content data for display (Lampa 3.0+)
   * Always adds params.emit for modular card system
   * @param {Array} items - Array of content items
   * @returns {Array} - Normalized items with params.emit
   */
  function normalizeContentData(items) {
    return items.map(function (item) {
      var normalized = _objectSpread2({}, item);
      var contentType = getContentType(item);
      if (contentType === 'tv' || contentType === 'show') {
        normalized.name = item.title || item.original_title;
        normalized.first_air_date = item.release_date;
        normalized.type = 'tv';
        normalized.card_type = 'tv';
      }
      if (contentType === 'movie') {
        delete normalized.name;
        normalized.release_date = item.release_date;
        normalized.title = item.title || item.original_title;
        normalized.type = 'movie';
        normalized.card_type = 'movie';
      }
      if (contentType === 'episode') {
        normalized.name = item.title || item.original_title;
        normalized.first_air_date = item.release_date;
        normalized.type = 'episode';
        normalized.card_type = 'episode';
      }

      // Add params.emit for Lampa 3.0+ modular system.
      // Use onlyEnter to avoid default navigation firing as well.
      // CRITICAL: Use normalized closure variables instead of this.data
      // to prevent runtime modification by Lampa.
      normalized.params = {
        emit: {
          onlyEnter: function onlyEnter() {
            var _this$data3;
            // Use normalized.method (fixed at creation time) instead of getContentType(this.data)
            var fixedMethod = normalized.method || normalized.card_type || normalized.type;
            if (Lampa.Storage.field('trakt_enable_logging')) {
              var _this$data, _this$data2;
              console.log('TraktTV', 'onEnter called:', {
                'normalized.method': normalized.method,
                'normalized.id': normalized.id,
                'normalized.title': normalized.title || normalized.name,
                'this.data.method': (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.method,
                'this.data.id': (_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2.id,
                'fixedMethod': fixedMethod
              });
            }
            Lampa.Activity.push({
              url: ((_this$data3 = this.data) === null || _this$data3 === void 0 ? void 0 : _this$data3.url) || normalized.url,
              component: 'full',
              id: normalized.id,
              // Use normalized.id (fixed)
              method: fixedMethod,
              // Use fixed method from normalized
              card: normalized,
              // Pass normalized instead of this.data
              source: normalized.source || 'tmdb',
              season: normalized.season,
              episode: normalized.episode
            });
          }
        }
      };
      return normalized;
    });
  }

  /**
   * Filter items by content type
   * @param {Array} items - Array of items to filter
   * @param {string} filterType - Type to filter: 'movie', 'tv', 'show'
   * @returns {Array} - Filtered items
   */
  function filterByContentType(items, filterType) {
    return items.filter(function (item) {
      var type = getContentType(item);
      if (filterType === 'tv') {
        return type === 'tv' || type === 'show';
      }
      return type === filterType;
    });
  }

  var STORAGE_KEY = 'appletv_topshelf';
  var CUSTOM_KEY = 'appletv_topshelf_custom';
  var SETTINGS_KEY = 'trakttv_topshelf';
  var ROW_UPNEXT = 'content_rows_TraktUpNextRow';
  var ROW_RECOMMENDATIONS = 'content_rows_TraktRecommendationsRow';
  var MAX_ITEMS = 10;
  var sectionsState = {
    upnext: null,
    recommendations: null
  };
  var listenersBound = false;
  function isEnabled() {
    if (!Lampa || !Lampa.Platform || !Lampa.Storage) return false;
    return Lampa.Platform.is('apple_tv') === true && Lampa.Storage.field(SETTINGS_KEY);
  }
  function syncCustomFlag(enabled) {
    if (typeof localStorage === 'undefined') return;
    try {
      if (enabled) localStorage.setItem(CUSTOM_KEY, 'true');else localStorage.removeItem(CUSTOM_KEY);
    } catch (error) {
      if (Lampa.Storage.field('trakt_enable_logging')) {
        console.error('TraktTV', 'TopShelf custom flag update failed:', error);
      }
    }
  }
  function isRowEnabled(key) {
    var value = Lampa.Storage.get(key, 'true');
    return value === true || value === 'true';
  }
  function normalizeUrl(url) {
    if (!url) return '';
    if (String(url).startsWith('http')) return url;
    return 'https://' + String(url).replace(/^\/+/, '');
  }
  function getItemTitle(item) {
    return item.title || item.name || item.original_title || item.original_name || '';
  }
  function getItemMedia(item) {
    var type = item.method || item.card_type || item.type;
    return type === 'movie' ? 'movie' : 'tv';
  }
  function getItemImage(item, shape) {
    if (shape === 'poster') return normalizeUrl(item.poster || item.image);
    return normalizeUrl(item.image || item.poster);
  }
  function mapItems(items, shape) {
    return items.slice(0, MAX_ITEMS).map(function (item) {
      var id = item.id;
      var title = getItemTitle(item);
      var media = getItemMedia(item);
      var imageURL = getItemImage(item, shape);
      var source = item.source || 'tmdb';
      if (!id || !title || !imageURL) return null;
      return {
        id: String(id),
        title: title,
        imageURL: imageURL,
        deepLink: "lampa://topshelf?card=".concat(encodeURIComponent(id), "&media=").concat(encodeURIComponent(media), "&source=").concat(encodeURIComponent(source))
      };
    }).filter(Boolean);
  }
  function buildSections() {
    var sections = [];
    if (isRowEnabled(ROW_UPNEXT) && Array.isArray(sectionsState.upnext) && sectionsState.upnext.length) {
      sections.push({
        title: Lampa.Lang.translate('trakttv_upnext'),
        imageShape: 'poster',
        items: mapItems(sectionsState.upnext, 'poster')
      });
    }
    if (isRowEnabled(ROW_RECOMMENDATIONS) && Array.isArray(sectionsState.recommendations) && sectionsState.recommendations.length) {
      sections.push({
        title: Lampa.Lang.translate('trakttv_recommendations'),
        imageShape: 'poster',
        items: mapItems(sectionsState.recommendations, 'poster')
      });
    }
    return sections.filter(function (section) {
      return section.items && section.items.length;
    });
  }
  function writePayload() {
    if (typeof localStorage === 'undefined') return;
    var sections = buildSections();
    if (!sections.length) return;
    var payload = {
      updatedAt: Math.floor(Date.now() / 1000),
      sections: sections
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      if (typeof window !== 'undefined' && window.location && window.location.assign) {
        window.location.assign('lampa://topshelfupdate');
      }
    } catch (error) {
      if (Lampa.Storage.field('trakt_enable_logging')) {
        console.error('TraktTV', 'TopShelf update failed:', error);
      }
    }
  }
  function bindTopshelfListeners() {
    if (listenersBound || typeof window === 'undefined') return;
    listenersBound = true;
    window.addEventListener('appletv:app-background', function () {
      if (!isEnabled()) return;
      writePayload();
    });
    window.addEventListener('appletv:app-request-topshelf-update', function () {
      if (!isEnabled()) return;
      writePayload();
    });
    if (Lampa.Storage && Lampa.Storage.listener) {
      Lampa.Storage.listener.follow('change', function (e) {
        if (e && e.name === SETTINGS_KEY) {
          syncCustomFlag(isEnabled());
        }
      });
    }
  }
  function updateTopshelf(section, items) {
    if (!isEnabled()) {
      syncCustomFlag(false);
      return;
    }
    if (!sectionsState.hasOwnProperty(section)) return;
    sectionsState[section] = Array.isArray(items) ? items : [];
    syncCustomFlag(true);
    bindTopshelfListeners();
    writePayload();
  }

  // Local safe resolver for Api
  var Api = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;

  /**
   * Initialize ContentRows for TraktTV plugin (Lampa 3.0+)
   * Registers content rows for main and category screens
   */
  function initContentRows() {
    // Cleanup deprecated cache keys
    Lampa.Storage.set('trakttv_cached_upnext', null);
    Lampa.Storage.set('trakttv_cached_recommendations', null);

    // Register UpNext row
    registerUpNextRow();

    // Register Recommendations rows
    registerRecommendationsRows();
  }

  /**
   * Register UpNext content row
   * Shows on: Main screen, TV category only
   */
  function registerUpNextRow() {
    Lampa.ContentRows.add({
      name: 'TraktUpNextRow',
      title: 'Trakt UpNext',
      index: 1,
      screen: ['main', 'category'],
      call: function call(params, screen) {
        // Filter: only show on main OR tv category
        if (screen === 'category' && params.url !== 'tv') return;

        // Permission checks
        if (!checkUpNextPermissions()) return;
        return function (call) {
          // Load data directly from API without caching
          if (!Api) {
            console.error('TraktTV', 'Api not available in registerUpNextRow');
            return call();
          }
          Api.upnext({
            limit: 20
          }).then(function (data) {
            if (!data || !Array.isArray(data.results) || data.results.length === 0) {
              return call();
            }

            // Normalize data
            var normalizedResults = normalizeContentData(data.results);
            if (screen === 'main') {
              updateTopshelf('upnext', data.results);
            }
            call({
              title: icons.createLineTitle(Lampa.Lang.translate('trakttv_upnext')),
              trakt_row: 'upnext',
              results: normalizedResults,
              onMore: function onMore() {
                Lampa.Activity.push({
                  title: Lampa.Lang.translate('trakttv_upnext'),
                  component: "trakt_upnext"
                });
              }
            });
          })["catch"](function (error) {
            console.error('TraktTV', 'UpNext load error:', error);
            call(); // Call empty callback on error
          });
        };
      }
    });
  }

  /**
   * Register Recommendations content rows
   * Shows on: Main screen (all), Movie category (movies only), TV category (TV only)
   */
  function registerRecommendationsRows() {
    // Main screen: show all recommendations (mixed)
    Lampa.ContentRows.add({
      name: 'TraktRecommendationsRow',
      title: 'Trakt Recommendations',
      index: 2,
      screen: ['main'],
      call: function call(params, screen) {
        // Permission checks
        if (!checkRecommendationsPermissions()) return;
        return function (call) {
          // Load data directly from API without caching
          if (!Api) {
            console.error('TraktTV', 'Api not available in registerRecommendationsRows (main)');
            return call();
          }
          Api.recommendations({
            limit: 20
          }).then(function (data) {
            if (!data || !Array.isArray(data.results) || data.results.length === 0) {
              return call();
            }

            // Normalize data
            var normalizedResults = normalizeContentData(data.results);
            if (screen === 'main') {
              updateTopshelf('recommendations', data.results);
            }
            call({
              title: icons.createLineTitle(Lampa.Lang.translate('trakttv_recommendations')),
              results: normalizedResults,
              onMore: function onMore() {
                Lampa.Activity.push({
                  title: Lampa.Lang.translate('trakttv_recommendations'),
                  component: "trakttv_recommendations"
                });
              }
            });
          })["catch"](function (error) {
            console.error('TraktTV', 'Recommendations load error (main):', error);
            call(); // Call empty callback on error
          });
        };
      }
    });

    // Movie category: show only movies
    Lampa.ContentRows.add({
      name: 'TraktRecommendationsRow',
      title: 'Trakt Recommendations in Movie',
      index: 2,
      screen: ['category'],
      call: function call(params, screen) {
        // Only show on Movie category
        if (params.url !== 'movie') return;

        // Permission checks
        if (!checkRecommendationsPermissions()) return;
        return function (call) {
          // Load data directly from API without caching
          if (!Api) {
            console.error('TraktTV', 'Api not available in registerRecommendationsRows (movie)');
            return call();
          }
          Api.recommendations({
            limit: 20
          }).then(function (data) {
            if (!data || !Array.isArray(data.results) || data.results.length === 0) {
              return call();
            }

            // Filter movies only
            var filtered = filterByContentType(data.results, 'movie');
            if (filtered.length === 0) return call();

            // Normalize data
            var normalizedResults = normalizeContentData(filtered);
            call({
              title: icons.createLineTitle(Lampa.Lang.translate('trakttv_recommendations')),
              results: normalizedResults,
              onMore: function onMore() {
                Lampa.Activity.push({
                  title: Lampa.Lang.translate('trakttv_recommendations'),
                  component: "trakttv_recommendations"
                });
              }
            });
          })["catch"](function (error) {
            console.error('TraktTV', 'Recommendations load error (movie):', error);
            call(); // Call empty callback on error
          });
        };
      }
    });

    // TV category: show only TV shows
    Lampa.ContentRows.add({
      name: 'TraktRecommendationsRow',
      title: 'Trakt Recommendations in TV',
      index: 2,
      screen: ['category'],
      call: function call(params, screen) {
        // Only show on TV category
        if (params.url !== 'tv') return;

        // Permission checks
        if (!checkRecommendationsPermissions()) return;
        return function (call) {
          // Load data directly from API without caching
          if (!Api) {
            console.error('TraktTV', 'Api not available in registerRecommendationsRows (tv)');
            return call();
          }
          Api.recommendations({
            limit: 20
          }).then(function (data) {
            if (!data || !Array.isArray(data.results) || data.results.length === 0) {
              return call();
            }

            // Filter TV shows only
            var filtered = filterByContentType(data.results, 'tv');
            if (filtered.length === 0) return call();

            // Normalize data
            var normalizedResults = normalizeContentData(filtered);
            call({
              title: icons.createLineTitle(Lampa.Lang.translate('trakttv_recommendations')),
              results: normalizedResults,
              onMore: function onMore() {
                Lampa.Activity.push({
                  title: Lampa.Lang.translate('trakttv_recommendations'),
                  component: "trakttv_recommendations"
                });
              }
            });
          })["catch"](function (error) {
            console.error('TraktTV', 'Recommendations load error (tv):', error);
            call(); // Call empty callback on error
          });
        };
      }
    });
  }

  /**
   * LampaJS plugin for Trakt.TV (Lampa 3.0+ only)
   * Global API bridge:
   * - Exposes api on window.TraktTV.api inside startPlugin() to support non-ESM runtime usage (dev bundle)
   * - Adds a local helper getter getGlobalApi() (not exported)
   * - Idempotent and guarded; no throws if window/Lampa missing
   */

  // Helper getter: prefer module api, fallback to global bridge
  function getGlobalApi() {
    try {
      if (typeof api$1 !== 'undefined' && api$1) return api$1;
    } catch (e) {/* noop */}
    try {
      if (typeof window !== 'undefined' && window.TraktTV && window.TraktTV.api) {
        return window.TraktTV.api;
      }
    } catch (e) {/* noop */}
    return null;
  }
  function startPlugin() {
    window.plugin_trakt_ready = true;

    // Establish global bridge only after window is available
    try {
      if (typeof window !== 'undefined') {
        window.TraktTV = window.TraktTV || {};
        var current = typeof api$1 !== 'undefined' && api$1 ? api$1 : null;
        var existing = window.TraktTV.api || null;

        // Assign if not set or differs; keep existing if current is null
        if (!existing || existing !== current) {
          window.TraktTV.api = current || existing || null;
        }

        // Optional guarded logging
        try {
          if (typeof Lampa !== 'undefined' && Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
            if (Lampa.Storage.field('trakt_enable_logging')) {
              console.log('TraktTV', {
                hasModuleApi: !!current,
                hadExisting: !!existing,
                finalHas: !!window.TraktTV.api
              });
            }
          }
        } catch (e) {/* noop */}
      }
    } catch (e) {/* noop */}

    // Додаємо стилі
    Lampa.Template.add('trakt_style', "<style>@charset 'UTF-8';.full-start-new__details.trakt{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff}.full-start-new__details.trakt .trakt-icon{margin-right:.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.full-start-new__details.trakt .full-start-new__split{margin:0 .5em}.trakt-applecation-progress{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em;margin-right:.6em;margin-left:.6em}.trakt-applecation-progress .trakt-icon{width:18px;height:18px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.trakt-applecation-progress .trakt-icon svg{width:100%;height:100%}.trakt-applecation-progress__text{white-space:nowrap}.trakt-upnext-progress{position:absolute;top:.45em;right:.45em;z-index:3;min-width:3.2em;text-align:center;font-size:.95em;font-weight:700;line-height:1.1;color:#fff;background:rgba(0,0,0,0.7);-webkit-border-radius:.45em;border-radius:.45em;padding:.28em .5em .42em;pointer-events:none}.trakt-upnext-progress::after{content:'';position:absolute;left:.35em;right:.35em;bottom:.16em;height:.14em;-webkit-border-radius:.2em;border-radius:.2em;background:rgba(255,255,255,0.22)}.trakt-upnext-progress::before{content:'';position:absolute;left:.35em;bottom:.16em;height:.14em;width:var(--trakt-upnext-progress,0);max-width:-webkit-calc(100% - 0.7em);max-width:calc(100% - 0.7em);-webkit-border-radius:.2em;border-radius:.2em;background:#ffe216}.trakt-lists-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1em;padding:1em}.trakt-list-card{width:150px;background:rgba(255,255,255,0.1);-webkit-border-radius:.5em;border-radius:.5em;padding:.5em;cursor:pointer;-webkit-transition:background .3s ease;-o-transition:background .3s ease;transition:background .3s ease}.trakt-list-card:hover{background:rgba(255,255,255,0.2)}.trakt-list-card__poster{width:100%;height:225px;background-size:cover;background-position:center;-webkit-border-radius:.5em;border-radius:.5em;margin-bottom:.5em}.trakt-list-card__title{font-size:.9em;text-align:center;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.trakt-list-detail-header{padding:1em;background:rgba(0,0,0,0.3);margin-bottom:1em}.trakt-list-detail-title{font-size:1.5em;margin-bottom:.5em}.trakt-list-detail-description{font-size:1em;opacity:.8}.trakt-head-action{color:#ff4d4d}.trakt-head-action--ok{color:#37ff54}.trakt-head-action--error{color:#ff4d4d}.trakt-head-action svg{width:100%;height:100%;display:block}.trakt-head-icon{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.trakt-list-manager-button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em}.trakt-list-manager-button svg{width:1.2em;height:1.2em}.trakt-list-wide-card__meta{margin-top:.6em;font-size:1.1em;opacity:.8}.trakt-list-wide-card:not(.trakt-list-wide-card--create) .card__promo{display:none !important}.trakt-list-wide-card--create .card__view{background:-webkit-linear-gradient(315deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));background:-o-linear-gradient(315deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));background:linear-gradient(135deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));-webkit-border-radius:1em;border-radius:1em}.trakt-list-wide-card--create .card__view::before{content:'+';position:absolute;inset:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:6em;line-height:1;color:rgba(255,255,255,0.82);font-weight:500;z-index:0}.trakt-list-wide-card--create .card__img{opacity:0}.trakt-list-wide-card--create .card__promo{z-index:2}.trakt-list-wide-card--create .card__promo-title{font-weight:700}.trakt-userinfo-name{line-height:1.35;margin-bottom:.3em}.trakt-userinfo-vip{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.35;margin-top:.1em}.trakt-userinfo-vip__label{opacity:.75}.trakt-vip-badge{display:inline-block;-webkit-border-radius:999px;border-radius:999px;padding:.2em .65em;font-size:.9em;line-height:1.25;border:1px solid transparent;vertical-align:middle}.trakt-vip-badge--enabled{color:#1be26f;border-color:rgba(27,226,111,0.45);background:rgba(27,226,111,0.14)}.trakt-vip-badge--disabled{color:#aeb5bc;border-color:rgba(174,181,188,0.45);background:rgba(174,181,188,0.12)}.trakt-device-auth{text-align:center;padding:0 1.2em 1.2em}.trakt-device-auth__qr-container{margin:0 auto 1.2em;width:min(100%,22em)}.trakt-device-auth__qr-container--hidden{display:none}.trakt-device-auth__qr-link{display:block}.trakt-device-auth__qr-image{display:block;width:100%;height:auto;background:#fff;border:2px solid #e3e3e3;-webkit-border-radius:.8em;border-radius:.8em;padding:.35em;-webkit-box-sizing:border-box;box-sizing:border-box}.trakt-device-auth__qr-caption{margin-top:.6em;font-size:.95em;opacity:.72}.trakt-device-auth__verification{font-size:1.05em;line-height:1.5;word-break:break-word;opacity:.9}.trakt-device-auth__code{margin-top:.2em}.trakt-device-auth__code strong{letter-spacing:.08em}@media screen and (max-width:480px){.trakt-device-auth{padding:0 .6em -webkit-calc(0.8em + env(safe-area-inset-bottom));padding:0 .6em calc(0.8em + env(safe-area-inset-bottom))}.trakt-device-auth__qr-container{width:min(100%,18.5em)}}</style>");
    $('body').append(Lampa.Template.get('trakt_style', {}, true));

    // Фонова валідація токена при старті (єдиний шлях auth lifecycle).
    if (Lampa.Storage.get('trakt_refresh_token')) {
      var _getGlobalApi;
      var authApi = (_getGlobalApi = getGlobalApi()) === null || _getGlobalApi === void 0 ? void 0 : _getGlobalApi.auth;
      if (authApi && typeof authApi.ensureValid === 'function') {
        authApi.ensureValid({
          reason: 'startup'
        })["catch"](function (error) {
          if (Lampa.Storage.field('trakt_enable_logging')) {
            console.error('TraktTV', 'Startup token validation failed:', error);
          }
        });
      } else if (authApi && typeof authApi.refresh === 'function') {
        authApi.refresh({
          reason: 'startup-fallback'
        })["catch"](function (error) {
          if (Lampa.Storage.field('trakt_enable_logging')) {
            console.error('TraktTV', 'Startup token refresh fallback failed:', error);
          }
        });
      } else if (Lampa.Storage.field('trakt_enable_logging')) {
        console.error('TraktTV', 'Auth API is not available for startup token validation.', {
          authApi: !!authApi
        });
      }
    }

    // Рекомендації завантажуються динамічно при потребі
    // Добавляем компоненты
    Lampa.Component.add('trakt_watchlist', function (object) {
      return new Catalog.watchlist(object);
    });
    Lampa.Component.add('trakt_upnext', function (object) {
      return new Catalog.upnext(object);
    });

    // Додаємо нові компоненти
    Lampa.Component.add('trakt_timetable_all', TraktTimetableAll);
    Lampa.Component.add('trakttv_recommendations', Catalog.recommendations);
    Lampa.Component.add('trakt_list_detail', Catalog.list_detail);
    Lampa.Component.add('trakt_my_list_detail', Catalog.my_list_detail);
    Lampa.Component.add('trakt_lists', Catalog.lists);
    Lampa.Component.add('trakt_my_lists', Catalog.my_lists);

    // Додаємо переклади
    Main();

    // Ініціалізуємо обробники подій
    events.init();
    // Ініціалізуємо модуль відстеження перегляду
    watching.init();

    // Initialize ContentRows (Lampa 3.0+ required)
    try {
      initContentRows();
    } catch (error) {
      console.error('TraktTV', 'ContentRows initialization failed:', error);
    }
    if (window.appready) {
      initTraktHeadButton();
    } else if (Lampa.Listener) {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') initTraktHeadButton();
      });
    }
  }
  function initTraktHeadButton() {
    if (typeof Lampa === 'undefined' || !Lampa.Head) return;
    if (window.trakt_head_button) return;
    var head = Lampa.Head.render ? Lampa.Head.render() : null;
    if (!head || !head.find) return;
    if (head.find('.trakt-head-action').length) return;
    var iconSvg = icons.TRAKT_ICON.replace('<svg ', '<svg style="width:100%; height:100%; display:block;" ');
    var button = Lampa.Head.addIcon("<span class=\"trakt-head-icon\">".concat(iconSvg, "</span>"), openTraktSettings);
    button.addClass('trakt-head-action');
    window.trakt_head_button = button;
    var scheduleUpdate = function scheduleUpdate() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (window.trakt_head_status_timer) clearTimeout(window.trakt_head_status_timer);
      window.trakt_head_status_timer = setTimeout(function () {
        updateTraktHeadStatus(button);
      }, delay);
    };
    scheduleUpdate(0);
    if (Lampa.Storage && Lampa.Storage.listener) {
      Lampa.Storage.listener.follow('change', function (e) {
        if (!e || !e.name) return;
        if (e.name === 'trakt_token' || e.name === 'trakt_refresh_token') {
          scheduleUpdate(300);
        }
      });
    }
  }
  function openTraktSettings() {
    if (typeof Lampa === 'undefined') return;
    var open = function open() {
      if (Lampa.Controller) Lampa.Controller.toggle('settings');
      setTimeout(function () {
        if (Lampa.Settings && typeof Lampa.Settings.create === 'function') {
          Lampa.Settings.create('trakt');
        }
      }, 0);
    };
    if (Lampa.ParentalControl && typeof Lampa.ParentalControl.personal === 'function') {
      Lampa.ParentalControl.personal('settings', open, false, true);
    } else {
      open();
    }
  }
  function updateTraktHeadStatus(button) {
    if (!button) return;
    var token = Lampa.Storage && Lampa.Storage.get ? Lampa.Storage.get('trakt_token') : null;
    if (!token) return setTraktHeadStatus(button, 'error');
    var Api = getGlobalApi();
    if (!Api || typeof Api.get !== 'function') return setTraktHeadStatus(button, 'error');
    Api.get('/users/me').then(function () {
      return setTraktHeadStatus(button, 'ok');
    })["catch"](function () {
      return setTraktHeadStatus(button, 'error');
    });
  }
  function setTraktHeadStatus(button, status) {
    button.removeClass('trakt-head-action--ok trakt-head-action--error');
    if (status === 'ok') button.addClass('trakt-head-action--ok');else button.addClass('trakt-head-action--error');
  }
  if (!window.plugin_trakt_ready) {
    // Додаємо глобальний обробник unhandledrejection на самому початку
    window.addEventListener('unhandledrejection', function (event) {
      console.error('TraktTV', 'Unhandled promise rejection:', event.reason);
    });
    startPlugin();
  }

})();
