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
  var API_URL = 'https://lampame.v6.rocks/https://api.trakt.tv';
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
  function requestApi(method, url) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var unauthorized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return new Promise(function (resolve, reject) {
      var network = new Lampa.Reguest();
      var headers = {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': CLIENT_ID,
        'x-requested-with': 'lme-plugins'
      };
      if (!unauthorized && Lampa.Storage.get('trakt_token')) {
        headers['Authorization'] = 'Bearer ' + Lampa.Storage.get('trakt_token');
      }
      var requestParams = {
        timeout: 15000,
        headers: headers,
        type: method,
        dataType: 'json'
      };
      var postData = method === 'POST' ? JSON.stringify(params) : null;
      network.quiet(API_URL + url, function (data) {
        resolve(data);
      }, function (error) {
        reject(error);
      }, postData, requestParams);
    });
  }
  function formatTraktResults(items) {
    return {
      results: items.map(function (item) {
        var media = item.movie || item.show;
        return {
          component: 'full',
          id: media.ids.tmdb,
          title: media.title,
          original_title: media.title,
          release_date: media.year + '',
          vote_average: media.rating || 0,
          poster: getImageUrl(media, 'poster'),
          image: getImageUrl(media, 'fanart'),
          method: item.movie ? 'movie' : 'tv'
        };
      })
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
  var api = {
    addToHistory: addToHistory$1,
    // Переміщені функції на початок об'єкта
    formatListsResults: function formatListsResults(items) {
      var likedListIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      try {
        var results = items.map(function (item) {
          if (!item) return null;
          var list = item && item.list ? item.list : item;
          if (!list || !list.ids || !list.ids.trakt) {
            console.warn('TraktTV Debug: Invalid list item received', item);
            return null;
          }
          var isLiked = likedListIds.includes(list.ids.trakt);
          var result = {
            component: 'trakt_list',
            id: list.ids.trakt,
            title: list.name || '',
            original_title: list.name || '',
            description: list.description || '',
            poster: getImageUrl(list, 'poster') || textToImage("[".concat(list.item_count || 0, "] ").concat(list.name || '')),
            image: getImageUrl(list, 'fanart'),
            method: 'list',
            item_count: list.item_count || 0,
            is_liked: isLiked
          };
          return result;
        }).filter(function (item) {
          return item !== null;
        });
        return {
          results: results
        };
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
    recommendations: function recommendations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = options.limit || 36;
      var page = options.page || 1;
      return new Promise(function (resolve, reject) {
        // Fetch a larger set to allow for pagination
        var fetchLimit = limit * 5; // Fetch more items to have enough for pagination

        var moviesRequest = requestApi('GET', "/recommendations/movies?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(fetchLimit));
        var showsRequest = requestApi('GET', "/recommendations/shows?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(fetchLimit));
        Promise.all([moviesRequest, showsRequest]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            moviesResponse = _ref2[0],
            showsResponse = _ref2[1];
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
            var _ref3 = [combinedResults[j], combinedResults[i]];
            combinedResults[i] = _ref3[0];
            combinedResults[j] = _ref3[1];
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
      return new Promise(function (resolve, reject) {
        var page = params.page || 1;
        var limit = params.limit || 36;
        requestApi('GET', '/sync/watched/shows?extended=images,full,seasons').then(function (watchedResponse) {
          var watched = Array.isArray(watchedResponse) ? watchedResponse : [];
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
          var results = watching.map(function (item) {
            var watchedEpisodes = 0;
            var lastWatchedDate = null;
            if (Array.isArray(item.seasons)) {
              item.seasons.forEach(function (season) {
                if (Array.isArray(season.episodes) && season.number > 0) {
                  watchedEpisodes += season.episodes.length;
                  season.episodes.forEach(function (episode) {
                    if (episode.last_watched_at) {
                      var episodeDate = new Date(episode.last_watched_at);
                      if (!lastWatchedDate || episodeDate > lastWatchedDate) {
                        lastWatchedDate = episodeDate;
                      }
                    }
                  });
                }
              });
            }
            return {
              component: 'full',
              id: item.show.ids.tmdb || item.show.ids.trakt,
              ids: item.show.ids,
              // Додаємо всі ids
              title: item.show.title,
              original_title: item.show.original_title || item.show.title,
              release_date: item.show.year ? String(item.show.year) : '',
              vote_average: item.show.rating || 0,
              poster: getImageUrl(item.show, 'poster'),
              image: getImageUrl(item.show, 'fanart'),
              method: 'tv',
              release_quality: "".concat(watchedEpisodes, "/").concat(item.show.aired_episodes),
              status: item.show.status,
              last_watched: lastWatchedDate
            };
          });
          results.sort(function (a, b) {
            if (!a.last_watched && !b.last_watched) return 0;
            if (!a.last_watched) return 1;
            if (!b.last_watched) return -1;
            return new Date(b.last_watched) - new Date(a.last_watched);
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
      login: function login() {
        return requestApi('POST', '/oauth/device/code', {
          client_id: CLIENT_ID
        }, true);
      },
      poll: function poll(device_code) {
        return requestApi('POST', '/oauth/device/token', {
          code: device_code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }, true);
      },
      logout: function logout() {
        Lampa.Storage.set('trakt_token', null);
        Lampa.Storage.set('trakt_refresh_token', null);
      }
    },
    refresh: function refresh() {
      return requestApi('POST', '/oauth/token', {
        refresh_token: Lampa.Storage.get('trakt_refresh_token'),
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token'
      }, true).then(function (response) {
        Lampa.Storage.set('trakt_token', response.access_token);
        Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
        return response;
      });
    },
    addToWatchlist: function addToWatchlist(params) {
      return new Promise(function (resolve, reject) {
        var data = {
          movies: [],
          shows: []
        };
        if (params.method === 'movie') {
          data.movies.push({
            ids: params.ids || {
              tmdb: params.id
            }
          });
        } else {
          data.shows.push({
            ids: params.ids || {
              tmdb: params.id
            }
          });
        }
        requestApi('POST', '/sync/watchlist', data).then(function (response) {
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    removeFromWatchlist: function removeFromWatchlist(params) {
      return new Promise(function (resolve, reject) {
        var data = {
          movies: [],
          shows: []
        };
        if (params.method === 'movie') {
          data.movies.push({
            ids: params.ids || {
              tmdb: params.id
            }
          });
        } else {
          data.shows.push({
            ids: params.ids || {
              tmdb: params.id
            }
          });
        }
        requestApi('POST', '/sync/watchlist/remove', data).then(function (response) {
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    inWatchlist: function inWatchlist(params) {
      return new Promise(function (resolve, reject) {
        var type = params.method === 'movie' ? 'movies' : 'shows';
        var url = "/sync/watchlist/".concat(type, "?extended=full");
        requestApi('GET', url).then(function (response) {
          var found = response.find(function (item) {
            var _item$movie, _item$show, _item$movie2, _item$show2;
            return ((_item$movie = item.movie) === null || _item$movie === void 0 ? void 0 : _item$movie.ids.tmdb) === params.id || ((_item$show = item.show) === null || _item$show === void 0 ? void 0 : _item$show.ids.tmdb) === params.id || params.ids && (((_item$movie2 = item.movie) === null || _item$movie2 === void 0 ? void 0 : _item$movie2.ids.trakt) === params.ids.trakt || ((_item$show2 = item.show) === null || _item$show2 === void 0 ? void 0 : _item$show2.ids.trakt) === params.ids.trakt);
          });
          resolve(!!found);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    inHistory: function inHistory(params) {
      return new Promise(function (resolve, reject) {
        var type = params.method === 'movie' ? 'movies' : 'shows';
        var url = "/sync/history/".concat(type, "?extended=full");
        requestApi('GET', url).then(function (response) {
          var found = response.find(function (item) {
            var _item$movie3, _item$show3, _item$movie4, _item$show4;
            return ((_item$movie3 = item.movie) === null || _item$movie3 === void 0 ? void 0 : _item$movie3.ids.tmdb) === params.id || ((_item$show3 = item.show) === null || _item$show3 === void 0 ? void 0 : _item$show3.ids.tmdb) === params.id || params.ids && (((_item$movie4 = item.movie) === null || _item$movie4 === void 0 ? void 0 : _item$movie4.ids.trakt) === params.ids.trakt || ((_item$show4 = item.show) === null || _item$show4 === void 0 ? void 0 : _item$show4.ids.trakt) === params.ids.trakt);
          });
          resolve(!!found);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    // Новий метод для отримання списків, які користувач лайкнув
    likesLists: function likesLists(params) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var page = params.page || 1;
        var limit = params.limit || 36;
        requestApi('GET', "/users/me/likes/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images")).then(function (response) {
          // Calculate total items and pages
          var total = response.length;
          var total_pages = Math.max(1, Math.ceil(total / limit));

          // Apply pagination
          var offset = (page - 1) * limit;
          response.slice(offset, offset + limit);
          var formattedData = _this.formatListsResults(response, response.map(function (item) {
            return item.list.ids.trakt;
          })); // Передаємо сирий масив response та ID лайкнутих списків
          formattedData.total = total;
          formattedData.total_pages = total_pages;
          formattedData.page = page;
          resolve(formattedData);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    lists: function lists(params) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var page = params.page || 1;
        var limit = params.limit || 36;
        requestApi('GET', "/users/me/likes/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images")).then(function (response) {
          // Calculate total items and pages
          var total = response.length;
          var total_pages = Math.max(1, Math.ceil(total / limit));

          // Apply pagination
          var offset = (page - 1) * limit;
          response.slice(offset, offset + limit);
          var formattedData = _this2.formatListsResults(response, response.map(function (item) {
            return item.list.ids.trakt;
          })); // Передаємо сирий масив response та ID лайкнутих списків
          formattedData.total = total;
          formattedData.total_pages = total_pages;
          formattedData.page = page;
          resolve(formattedData);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    // Метод для отримання вмісту конкретного листа за його ID
    // Використовує endpoint: https://api.trakt.tv/lists/{id}/items
    // params: { list_id: string, page: number, limit: number }
    list: function list(params) {
      return new Promise(function (resolve, reject) {
        // Отримуємо ID листа з параметрів
        var listId = params.id; // Використовуємо params.id, оскільки baseComponent передає id

        // Перевіряємо наявність ID
        if (!listId) {
          reject(new Error('List ID is missing'));
          return;
        }

        // Створюємо URL для запиту
        // За специфікацією, type не передаємо
        var page = params.page || 1;
        var limit = params.limit || 36;
        var url = "/lists/".concat(listId, "/items?extended=images&page=").concat(page, "&limit=").concat(limit);
        requestApi('GET', url).then(function (response) {
          // Припускаємо, що відповідь має структуру, схожу на watchlist
          // Масив об'єктів, де кожен об'єкт містить movie або show
          // Потрібно форматувати ці дані для відображення в Lampa

          // Форматуємо результати
          var formattedData = formatTraktResults(response);

          // Додаємо інформацію про пагінацію
          // Оскільки API може не повертати заголовки пагінації,
          // ми припускаємо, що якщо кількість елементів дорівнює ліміту,
          // можливо є ще сторінки. Це не ідеально, але краще ніж нічого.
          // Для точного визначення пагінації потрібно аналізувати заголовки відповіді.
          // requestApi повертає лише тіло відповіді, тому заголовки недоступні.
          // Тимчасово встановлюємо total_pages = page + 1, якщо отримали повну сторінку.
          var total_items = Array.isArray(response) ? response.length : 0;
          var total_pages = total_items === limit ? page + 1 : page;
          formattedData.total = total_items;
          formattedData.total_pages = total_pages;
          formattedData.page = page;
          resolve(formattedData);
        })["catch"](function (error) {
          reject(error);
        });
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
            var formattedData = api.formatListsResults(response);
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

  function baseComponent(object, type) {
    var comp = new Lampa.InteractionCategory(object);
    var total_pages = 0;
    var waitload = false;
    comp.create = function () {
      var _this = this;
      var params = _objectSpread2({}, object); // Копіюємо всі властивості

      // Явно встановлюємо id для типу 'list', щоб уникнути можливих перетворень
      if (type === 'list' && object.id) {
        params.id = object.id;
      } else if (type === 'list' && object.list_id) {
        // Додаємо fallback, якщо раптом object.id не спрацює
        params.id = object.list_id;
      }

      // Встановлюємо ліміт для різних типів
      if (type === 'upnext') {
        params.limit = 36;
      } else {
        params.limit = 36;
      }

      // Встановлюємо номер сторінки, якщо не вказано
      params.page = params.page || 1;
      api[type](params).then(function (data) {
        // Зберігаємо загальну кількість сторінок
        if (data.total_pages) {
          total_pages = data.total_pages;
        }
        _this.build(data);

        // Налаштовуємо скрол для завантаження наступної сторінки
        if (_this.activity.scroll) {
          _this.activity.scroll.onEnd = _this.next.bind(_this);
        }
      })["catch"](function () {
        _this.empty();
      });
    };

    // Метод для завантаження наступної сторінки
    comp.next = function () {
      var _this2 = this;
      if (waitload) return;
      if (object.page < total_pages) {
        waitload = true;
        object.page++;
        var params = _objectSpread2({}, object);
        // Явно встановлюємо id для типу 'list' в next, якщо object.id є
        if (type === 'list' && object.id) {
          params.id = object.id;
        } else if (type === 'list' && object.list_id) {
          params.id = object.list_id;
        }
        if (type === 'upnext') {
          params.limit = 36;
        } else {
          params.limit = 36;
        }
        api[type](params).then(function (data) {
          _this2.append(data);
          waitload = false;
        })["catch"](function () {
          waitload = false;
        });
      }
    };
    comp.cardRender = function (object, element, card) {
      if (element.method === 'tv' || element.type === 'show') {
        card.render().addClass('card--tv').append('<div class="card__type">' + Lampa.Lang.translate('trakttv_card_type_tv') + '</div>');
      }
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push(card.data);
      };
    };
    return comp;
  }
  function baseRecommendations(object) {
    var comp = new Lampa.Lampa.InteractionCategory(object);
    var total_pages = 0;
    var waitload = false;
    comp.create = function () {
      var _this3 = this;
      // Встановлюємо параметри для рекомендацій
      var params = _objectSpread2({}, object);
      params.limit = 36; // Зменшуємо ліміт для пагінації
      params.page = params.page || 1;
      api.recommendations(params).then(function (recommendations) {
        // Перевіряємо чи є results і чи він не порожній
        if (recommendations && recommendations.results && recommendations.results.length > 0) {
          // Зберігаємо загальну кількість сторінок, якщо є
          if (recommendations.total_pages) {
            total_pages = recommendations.total_pages;
          }
          _this3.build(recommendations);

          // Налаштовуємо скрол для завантаження наступної сторінки
          if (_this3.activity.scroll) {
            _this3.activity.scroll.onEnd = _this3.next.bind(_this3);
          }
        } else {
          _this3.empty();
        }
      })["catch"](function (error) {
        _this3.empty();
      });
    };

    // Метод для завантаження наступної сторінки
    comp.next = function () {
      var _this4 = this;
      if (waitload) return;
      if (object.page < total_pages) {
        waitload = true;
        object.page++;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        api.recommendations(params).then(function (data) {
          _this4.append(data);
          waitload = false;
        })["catch"](function () {
          waitload = false;
        });
      }
    };
    comp.cardRender = function (object, element, card) {
      // Додаємо мітку TV для серіалів
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
    return comp;
  }
  function watchlist$1(object) {
    // Встановлюємо початкову сторінку, якщо не вказано
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'watchlist');
  }
  function upnext(object) {
    // Встановлюємо початкову сторінку, якщо не вказано
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'upnext');
  }
  function recommendations(object) {
    // Встановлюємо початкову сторінку, якщо не вказано
    if (!object.page) object.page = 1;
    return new baseRecommendations(object);
  }
  function lists(object) {
    var comp = new Lampa.InteractionCategory(object);
    var total_pages = 0;
    var waitload = false;
    comp.create = function () {
      var _this5 = this;
      var params = _objectSpread2({}, object);
      params.limit = 36;
      params.page = params.page || 1;
      api.likesLists(params).then(function (data) {
        if (data.total_pages) {
          total_pages = data.total_pages;
        }
        _this5.build(data);
        if (_this5.activity.scroll) {
          _this5.activity.scroll.onEnd = _this5.next.bind(_this5);
        }
      })["catch"](function (error) {
        console.error('TraktTV Likes Lists API response:', error);
        _this5.empty();
      });
    };
    comp.next = function () {
      var _this6 = this;
      if (waitload) return;
      if (object.page < total_pages) {
        waitload = true;
        object.page++;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        api.likesLists(params).then(function (data) {
          _this6.append(data);
          waitload = false;
        })["catch"](function () {
          waitload = false;
        });
      }
    };
    comp.cardRender = function (object, element, card) {
      card.render().find('.card__title').remove();
      var itemCountText = element.item_count ? "[".concat(element.item_count, "] ") : '';
      card.render().find('.card__view').append("<div class=\"card__title\">".concat(itemCountText).concat(element.title, "</div>"));
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('trakt_list_title_named').replace('{name}', element.title),
          component: 'trakt_list_detail',
          id: element.id,
          name: element.title,
          description: element.description,
          source: 'tmdb'
        });
      };
    };
    return comp;
  }
  function list_detail(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'list');
  }
  function trakt_list_detail(object) {
    if (!object.page) object.page = 1;

    // Створюємо новий об'єкт, який гарантовано матиме 'id'
    var paramsForBaseComponent = {
      id: object.id,
      // Використовуємо object.id, який приходить з Lampa.Activity.push
      page: object.page,
      limit: object.limit // Передаємо limit, якщо він є в object
    };
    return new baseComponent(paramsForBaseComponent, 'list');
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext,
    recommendations: recommendations,
    lists: lists,
    list_detail: list_detail,
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
      trakttv_show_tv_progress: {
        ru: "Показывать прогресс просмотра сериалов",
        en: "Show TV progress",
        uk: "Показувати прогрес прогляду серіалів"
      },
      trakttv_related_lists: {
        ru: "Пов'язані списки",
        en: "Related lists",
        uk: "Пов'язані списки"
      },
      trakt_list_detail: {
        ru: "Содержимое списка",
        en: "List Content",
        uk: "Вміст списку"
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
      trakttv_add_threshold: {
        ru: "Порог добавления сериала",
        en: "Series adding threshold",
        uk: "Поріг додавання серіалу"
      },
      trakttv_add_threshold_descr: {
        ru: "Когда добавлять сериал в список \"Смотрю\" на Trakt.TV",
        en: "When to add a series to the \"Watching\" list on Trakt.TV",
        uk: "Коли додавати серіал до списку \"Дивлюся\" на Trakt.TV"
      },
      trakttv_add_immediately: {
        ru: "Сразу при запуске",
        en: "Immediately upon launch",
        uk: "Одразу при запуску"
      },
      trakttv_add_after_5: {
        ru: "После 5% просмотра",
        en: "After 5% view",
        uk: "Після 5% перегляду"
      },
      trakttv_add_after_10: {
        ru: "После 10% просмотра",
        en: "After 10% view",
        uk: "Після 10% перегляду"
      },
      trakttv_add_after_15: {
        ru: "После 15% просмотра",
        en: "After 15% view",
        uk: "Після 15% перегляду"
      },
      trakttv_add_after_20: {
        ru: "После 20% просмотра",
        en: "After 20% view",
        uk: "Після 20% перегляду"
      },
      trakttv_add_after_25: {
        ru: "После 25% просмотра",
        en: "After 25% view",
        uk: "Після 25% перегляду"
      },
      trakttv_add_after_30: {
        ru: "После 30% просмотра",
        en: "After 30% view",
        uk: "Після 30% перегляду"
      },
      trakttv_add_after_35: {
        ru: "После 35% просмотра",
        en: "After 35% view",
        uk: "Після 35% перегляду"
      },
      trakttv_add_after_40: {
        ru: "После 40% просмотра",
        en: "After 40% view",
        uk: "Після 40% перегляду"
      },
      trakttv_add_after_45: {
        ru: "После 45% просмотра",
        en: "After 45% view",
        uk: "Після 45% перегляду"
      },
      trakttv_add_after_50: {
        ru: "После 50% просмотра",
        en: "After 50% view",
        uk: "Після 50% перегляду"
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
              return api.get("/calendars/my/shows/".concat(dateString, "/").concat(DAYS, "?extended=images,full"));
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

  // Експортуємо всі іконки та утиліти
  var icons = {
    TRAKT_ICON: TRAKT_ICON,
    WATCHLIST_ICON: WATCHLIST_ICON,
    HISTORY_ICON: HISTORY_ICON,
    HEADER_STYLE: HEADER_STYLE,
    ICON_STYLE: ICON_STYLE,
    createHeaderWithIcon: createHeaderWithIcon
  };

  /**
   * Плагін для відображення рекомендацій на головній сторінці
   */
  var recommendationsPlugin = {
    type: "video",
    version: "2.5",
    author: '@lme_chat',
    name: "LME TraktTV",
    /**
     * Функція для відображення рекомендацій на головній сторінці
     * @returns {Object} Об'єкт з результатами для відображення
     */
    onMain: function onMain() {
      if (!Lampa.Storage.field('trakttv_show_on_main', true)) return {
        results: []
      };
      var userHasPermission = Lampa.Storage.get('trakt_token') && Lampa.Storage.field('trakttv_show_recommendations', true);
      if (!userHasPermission) return {
        results: []
      };

      // Отримуємо кешовані дані
      var recommendations = Lampa.Storage.get('trakttv_cached_recommendations', []);
      if (typeof recommendations === 'string') {
        try {
          recommendations = JSON.parse(recommendations);
        } catch (e) {
          recommendations = [];
        }
      }

      // Запускаємо оновлення в фоні (не блокуючи onMain)
      this.updateRecommendationsInBackground();
      if (!Array.isArray(recommendations) || recommendations.length === 0) {
        return {
          results: []
        };
      }

      // Нормалізуємо дані
      var normalizedResults = recommendations.map(function (item) {
        var normalized = _objectSpread2({}, item);
        if (item.type === 'tv' || item.card_type === 'tv') {
          normalized.name = item.title || item.original_title;
          normalized.first_air_date = item.release_date;
        }
        if (item.type === 'movie' || item.card_type === 'movie') {
          delete normalized.name;
          normalized.release_date = item.release_date;
          normalized.title = item.title || item.original_title;
        }
        return normalized;
      });
      return {
        title: icons.createHeaderWithIcon(icons.TRAKT_ICON, Lampa.Lang.translate('trakttv_recommendations')),
        results: normalizedResults,
        line_type: 'trakttv_recommendations',
        onMore: function onMore() {
          Lampa.Activity.push({
            title: Lampa.Lang.translate('trakttv_recommendations'),
            component: "trakttv_recommendations"
          });
        },
        cardClass: function cardClass(item, params) {
          var card = new Lampa.Card(item, params);
          card.onEnter = function (target, card_data) {
            Lampa.Activity.push({
              url: card_data.url,
              component: 'full',
              id: card_data.id,
              method: card_data.type || card_data.card_type || (card_data.name ? 'tv' : 'movie'),
              card: card_data,
              source: card_data.source || params.object.source
            });
          };
          setTimeout(function () {
            // Отримуємо рендер-картку (елемент)
            var card_element = card.render();

            // Додаємо клас, якщо потрібно
            if ((item.method || item.type || item.card_type || (item.name ? 'tv' : 'movie')) === 'tv') {
              $(card_element).addClass('card--tv');

              // Створюємо елемент типу
              var cardTypeElement = $("<div>", {
                "class": "card__type",
                text: Lampa.Lang.translate('trakttv_card_type_tv')
              });

              // Додаємо у .card__view якщо знайдено
              $(card_element).find(".card__view").append(cardTypeElement);
            }
          }, 1); // Можливо треба більшу затримку, якщо картка ще не в DOM (наприклад, 50 чи 100 мс)
          return card;
        }
      };
    },
    /**
     * Оновлює рекомендації в фоновому режимі
     * @param {boolean} isMainPage - Чи викликається з головної сторінки
     */
    updateRecommendationsInBackground: function updateRecommendationsInBackground() {
      var isMainPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Оновлюємо дані в фоні
      // Якщо запит з головної сторінки, обмежуємо до 10 результатів
      // Якщо запит зі сторінки рекомендацій, отримуємо 50 результатів
      var limit = isMainPage ? 20 : 50;
      api.recommendations({
        limit: limit
      }).then(function (data) {
        if (data && data.results && data.results.length > 0) {
          Lampa.Storage.set('trakttv_cached_recommendations', data.results);
        }
      })["catch"](function (error) {
        console.error('TraktTV', error);
      });
    }
  };

  /**
   * Плагін для відображення Up Next на головній сторінці
   */
  var upnextPlugin = {
    type: "video",
    version: "1.0",
    author: '@lme_chat',
    name: "LME TraktTV Up Next",
    /**
     * Функція для відображення Up Next на головній сторінці
     * @returns {Object} Об'єкт з результатами для відображення
     */
    onMain: function onMain() {
      if (!Lampa.Storage.field('trakttv_show_on_main', true)) return {
        results: []
      };
      var userHasPermission = Lampa.Storage.get('trakt_token');
      if (!userHasPermission) return {
        results: []
      };

      // Отримуємо список серій Up Next
      var upnext = Lampa.Storage.get('trakttv_cached_upnext', []);
      if (typeof upnext === 'string') {
        try {
          upnext = JSON.parse(upnext);
        } catch (e) {
          upnext = [];
        }
      }

      // Завантажуємо Up Next в фоні
      this.updateUpNextInBackground();
      if (!Array.isArray(upnext) || upnext.length === 0) {
        return {
          results: []
        };
      }

      // Нормалізуємо дані
      var normalizedResults = upnext.map(function (item) {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          name: item.title || item.original_title,
          first_air_date: item.release_date,
          title: item.title || item.original_title
        });
      });
      return {
        title: icons.createHeaderWithIcon(icons.TRAKT_ICON, Lampa.Lang.translate('trakttv_upnext')),
        results: normalizedResults,
        line_type: 'trakttv_upnext',
        onMore: function onMore() {
          Lampa.Activity.push({
            title: Lampa.Lang.translate('trakttv_upnext'),
            component: "trakt_upnext"
          });
        },
        cardClass: function cardClass(item, params) {
          var card = new Lampa.Card(item, params);
          card.onEnter = function (target, card_data) {
            Lampa.Activity.push({
              url: card_data.url,
              component: 'full',
              id: card_data.id,
              method: 'tv',
              card: card_data,
              source: card_data.source || params.object.source,
              season: card_data.season,
              episode: card_data.episode
            });
          };
          return card;
        }
      };
    },
    /**
     * Оновлює Up Next в фоновому режимі
     * @param {boolean} isMainPage - Чи викликається з головної сторінки
     */
    updateUpNextInBackground: function updateUpNextInBackground() {
      var isMainPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Якщо запит з головної сторінки, обмежуємо до 20 результатів
      // Якщо запит зі сторінки Up Next, отримуємо 50 результатів
      var limit = isMainPage ? 20 : 50;

      // Отримуємо UpNext від API - використовуємо правильний метод
      api.upnext({
        limit: limit
      }, function (data) {
        if (data && data.results && data.results.length > 0) {
          Lampa.Storage.set('trakttv_cached_upnext', data.results);

          // Оновлюємо головну сторінку якщо вона активна
          if (Lampa.Activity.active().component === 'main') ;
        }
      }, function (error) {
        console.error('TraktTV', error);
      });
    }
  };

  function addWatchlistButton(card) {
    var button = document.createElement('div');
    button.className = 'full-start__button selector watchlist-button';
    button.innerHTML = "\n        ".concat(icons.WATCHLIST_ICON, "\n        <span>").concat(Lampa.Lang.translate('trakt_watchlist_button'), "</span>\n    ");

    // Перевіряємо чи є в списку
    api.inWatchlist(card.movie, function (isAdded) {
      updateButtonStyle(button, isAdded);
    }, function () {
      button.style.display = 'none';
    });

    // Додаємо обробник кліку
    button.on('hover:enter', function () {
      var isAdded = button.classList.contains('added');
      if (isAdded) {
        api.removeFromWatchlist(card.movie, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('trakt_watchlist_remove')
          });
          updateButtonStyle(button, false);
        }, function () {
          return Lampa.Bell.push({
            text: 'Помилка при видаленні'
          });
        });
      } else {
        api.addToWatchlist(card.movie, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('trakt_watchlist_add')
          });
          updateButtonStyle(button, true);
        }, function () {
          return Lampa.Bell.push({
            text: 'Помилка при додаванні'
          });
        });
      }
    });
    return button;
  }
  function updateButtonStyle(button, isAdded) {
    if (isAdded) {
      button.classList.add('added');
      button.style.color = '#37ff54';
    } else {
      button.classList.remove('added');
      button.style.color = '';
    }
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
              var season = lastWatched.episode.season;
              var episode = lastWatched.episode.number;

              // Створюємо елемент для відображення прогресу
              var progressElement = document.createElement('div');
              progressElement.className = 'full-start-new__details trakt';
              progressElement.innerHTML = "\n                                <div class=\"trakt-icon\" style=\"width:48px; height:48px;\">".concat(icons.TRAKT_ICON, "</div>\n                                <span>").concat(Lampa.Lang.translate('full_season'), ": ").concat(season, "</span><span class=\"full-start-new__split\">\u25CF</span>\n                                <span>").concat(Lampa.Lang.translate('full_episode'), ": ").concat(episode, "</span>\n                            ");

              // Знаходимо елемент після якого вставити прогрес
              var taglineElement = element.object.activity.render().find('.full-start-new__rate-line');
              if (taglineElement.length) {
                // Перевіряємо чи вже є елемент прогресу
                var existingProgress = element.object.activity.render().find('.full-start-new__details.trakt');
                if (existingProgress.length) {
                  existingProgress.remove();
                }
                taglineElement.after(progressElement);
              }
            }
          }
        })["catch"](function (error) {
          console.error('Error getting show history:', error);
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

    // Додаємо новий пункт меню для списків користувача
    items.push({
      title: 'Liked Lists',
      component: 'trakt_lists'
    });
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
        },
        onBack: function onBack() {
          Lampa.Controller.toggle('menu');
        }
      });
    });
    var menuList = $('.menu .menu__list').eq(0);
    menuList.append(combineButton);

    // Перевіряємо кожен елемент локального сховища і додаємо відповідні пункти меню
    items.forEach(function (item) {
      var key = item.component;
      if (Lampa.Storage.get(key) === true) {
        // Якщо значення true, додаємо пункт меню
        if (key === 'trakt_watchlist') menuList.append(watchlist);
        if (key === 'trakt_upnext') menuList.append(upnext);
        if (key === 'trakt_timetable_all') menuList.append(timetable);
      }
    });
  }

  function main() {
    // Додаємо компонент Trakt.TV у налаштування
    Lampa.SettingsApi.addComponent({
      component: 'trakt',
      name: 'Trakt.TV',
      icon: icons.TRAKT_ICON
    });

    //Користувацька інфа (user + stats) через custom param
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
        Promise.all([api.get('/users/me'), api.get('/users/me/stats')]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            user = _ref2[0],
            stats = _ref2[1];
          loading.remove();
          var minutes = 0;
          if (stats) {
            var _stats$movies, _stats$episodes;
            var movieMinutes = ((_stats$movies = stats.movies) === null || _stats$movies === void 0 ? void 0 : _stats$movies.minutes) || 0;
            var episodeMinutes = ((_stats$episodes = stats.episodes) === null || _stats$episodes === void 0 ? void 0 : _stats$episodes.minutes) || 0;
            minutes = movieMinutes + episodeMinutes;
          }
          var funnyLine = '';
          if (minutes > 0) {
            funnyLine = "<span style=\"color:#f39c12;\">".concat(Lampa.Lang.translate('trakttvHumorMinutes').replace('{time}', minutes), "</span>");
          }
          item.append("<div class=\"settings-param__name\"><b>".concat(Lampa.Lang.translate('trakttv_user_info'), "</b></div>"));
          item.append("<div class=\"settings-param__value\">".concat(Lampa.Lang.translate('trakttv_username'), ": ").concat(user.username, " ").concat(user.vip ? 'VIP' : '', "</div>"));
          if (funnyLine) item.append("<div class=\"settings-param__value\">".concat(funnyLine, "</div>"));
          if (stats) {
            var _stats$movies2, _stats$movies3, _stats$episodes2, _stats$episodes3;
            item.append("\n                        <div class=\"settings-param__value\">\n                            <b>".concat(Lampa.Lang.translate('trakttv_movies'), ":</b>\n                            ").concat(Lampa.Lang.translate('trakttvStatWatched'), ": ").concat(((_stats$movies2 = stats.movies) === null || _stats$movies2 === void 0 ? void 0 : _stats$movies2.watched) || 0, ",\n                            ").concat(Lampa.Lang.translate('trakttvStatMinutes'), ": ").concat(((_stats$movies3 = stats.movies) === null || _stats$movies3 === void 0 ? void 0 : _stats$movies3.minutes) || 0, "\n                        </div>\n                        <div class=\"settings-param__value\">\n                            <b>").concat(Lampa.Lang.translate('trakttv_episodes'), ":</b>\n                            ").concat(Lampa.Lang.translate('trakttvStatWatched'), ": ").concat(((_stats$episodes2 = stats.episodes) === null || _stats$episodes2 === void 0 ? void 0 : _stats$episodes2.watched) || 0, ",\n                            ").concat(Lampa.Lang.translate('trakttvStatMinutes'), ": ").concat(((_stats$episodes3 = stats.episodes) === null || _stats$episodes3 === void 0 ? void 0 : _stats$episodes3.minutes) || 0, "\n                        </div>\n                    "));
          }
        })["catch"](function () {
          loading.remove();
          item.append("<div>".concat(Lampa.Lang.translate('trakttvAuthError'), "</div>"));
        });
      }
    });

    // Кнопка авторизації
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
        api.auth.login().then(function (response) {
          var modal = $("<div class=\"about\">\n                        <div class=\"about__text\">".concat(response.verification_url, "</div>\n                        <div class=\"about__text\">").concat(Lampa.Lang.translate('trakttv_code'), ": ").concat(response.user_code, "</div>\n                    </div>"));
          Lampa.Modal.open({
            title: Lampa.Lang.translate('trakttv_auth'),
            html: modal,
            size: 'small',
            onBack: function onBack() {
              Lampa.Modal.close();
              Lampa.Controller.toggle('settings_component');
            }
          });
          pollAuth(response);
        })["catch"](function (err) {
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
        api.auth.logout();
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
        }
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvFullClearNoty')
        });
        Lampa.Settings.update();
      }
    });

    // Параметр для відображення рекомендацій на головній
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakttv_show_on_main',
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('trakttv_show_recommendations'),
        description: Lampa.Lang.translate('trakttv_show_recommendations')
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

    // Параметр для вибору порогу додавання серіалу
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_add_threshold',
        type: 'select',
        "default": '0',
        values: {
          '0': Lampa.Lang.translate('trakttv_add_immediately'),
          '5': Lampa.Lang.translate('trakttv_add_after_5'),
          '10': Lampa.Lang.translate('trakttv_add_after_10'),
          '15': Lampa.Lang.translate('trakttv_add_after_15'),
          '20': Lampa.Lang.translate('trakttv_add_after_20'),
          '25': Lampa.Lang.translate('trakttv_add_after_25'),
          '30': Lampa.Lang.translate('trakttv_add_after_30'),
          '35': Lampa.Lang.translate('trakttv_add_after_35'),
          '40': Lampa.Lang.translate('trakttv_add_after_40'),
          '45': Lampa.Lang.translate('trakttv_add_after_45'),
          '50': Lampa.Lang.translate('trakttv_add_after_50')
        }
      },
      field: {
        name: Lampa.Lang.translate('trakttv_add_threshold'),
        description: Lampa.Lang.translate('trakttv_add_threshold_descr')
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

  // Окрема функція для poll авторизації
  function pollAuth(data) {
    var interval = setInterval(function () {
      api.auth.poll(data.device_code).then(function (response) {
        clearInterval(interval);
        Lampa.Storage.set('trakt_token', response.access_token);
        Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
        Lampa.Modal.close();
        Lampa.Settings.update();
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvAuthOk')
        });
      })["catch"](function (err) {
        if (err.status == 400) {
          return; // Очікуємо
        }
        clearInterval(interval);
        Lampa.Modal.close();
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvAuthError')
        });
      });
    }, (data.interval + 1) * 1000);
  }
  var config = {
    main: main
  };

  /**
   * Визначає тип вмісту (фільм чи серіал) на основі даних картки
   * @param {Object} card - Картка вмісту
   * @returns {string} 'movie' або 'show'
   */
  function getContentType(card) {
    // Якщо є поля, характерні для серіалів, вважаємо, що це серіал
    if (card.episode_run_time || card.first_air_date || card.created_by || card.number_of_seasons || card.number_of_episodes) {
      return 'show';
    }
    // В іншому випадку вважаємо, що це фільм
    return 'movie';
  }

  // Змінні для уникнення подвійних запитів
  var isMarkingEpisodeAsWatched = false;
  var isAddingShowToWatching = false;
  var isInitialized = false;

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
      // Уникнення подвійної ініціалізації
      if (isInitialized) {
        console.log('TraktTV', 'watching.init called while already initialized, skipping');
        return;
      }
      isInitialized = true;

      // Додаткове логування для налагодження подвійної ініціалізації
      console.log('TraktTV', 'watching.init called');
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Initializing watching module');
      }

      // Слідкуємо за оновленнями Timeline
      if (window.Lampa && Lampa.Timeline && Lampa.Timeline.listener) {
        Lampa.Timeline.listener.follow('update', this.processTimelineUpdate.bind(this));
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'Timeline listener attached');
        }
      }

      // Слідкуємо за стартом програвача для збереження поточної картки
      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        Lampa.Player.listener.follow('start', this.onPlayerStart.bind(this));
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'Player listener attached');
        }
      }
    },
    /**
     * Обробник події старту програвача
     * @param {Object} data - Дані події
     */
    onPlayerStart: function onPlayerStart(data) {
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Player start event received', data);
      }
      var card = data.card || Lampa.Activity.active() && Lampa.Activity.active().movie;
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Card determined in onPlayerStart', card);
      }
      if (!card) {
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'No card found in onPlayerStart');
        }
        return;
      }

      // Зберігаємо поточну картку для подальшої обробки
      Lampa.Storage.set('trakt_last_card', card);
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Card saved to storage', card);
      }
    },
    /**
     * Обробник оновлень Timeline
     * @param {Object} data - Дані події
     */
    processTimelineUpdate: function processTimelineUpdate(data) {
      // Додаткове логування для налагодження подвійних викликів
      console.log('TraktTV', 'processTimelineUpdate called with data:', data);
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Timeline update received', data);
      }

      // Перевіряємо налаштування trakt_enable_watching
      var enableWatching = Lampa.Storage.field('trakt_enable_watching');
      console.log('TraktTV', 'trakt_enable_watching setting:', enableWatching);
      if (!enableWatching) {
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'Watching is disabled by settings');
        }
        return;
      }
      if (!data || !data.data || !data.data.hash || !data.data.road) {
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'Invalid data received', data);
        }
        console.log('TraktTV', 'Invalid data - data:', data);
        console.log('TraktTV', 'Invalid data - data.data:', data && data.data);
        console.log('TraktTV', 'Invalid data - data.data.hash:', data && data.data && data.data.hash);
        console.log('TraktTV', 'Invalid data - data.data.road:', data && data.data && data.data.road);
        return;
      }
      var hash = data.data.hash;
      var percent = data.data.road.percent;
      var token = Lampa.Storage.get('trakt_token');
      var minProgress = parseInt(Lampa.Storage.field('trakt_min_progress') || config.minProgress);
      var addThreshold = parseInt(Lampa.Storage.field('trakt_add_threshold') || config.addThreshold);
      console.log('TraktTV', 'Timeline update data:', {
        hash: hash,
        percent: percent,
        token: !!token,
        minProgress: minProgress,
        addThreshold: addThreshold
      });
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Processing timeline update', {
          hash: hash,
          percent: percent,
          token: !!token,
          minProgress: minProgress,
          addThreshold: addThreshold
        });
      }
      if (!token) {
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'No token found, skipping update');
        }
        console.log('TraktTV', 'No token found');
        return;
      }
      var card = this.getCurrentCard();
      console.log('TraktTV', 'Card from getCurrentCard:', card);
      if (!card) {
        if (this.isLoggingEnabled()) {
          console.log('TraktTV', 'No card found, skipping update');
        }
        console.log('TraktTV', 'No card found, skipping update');
        return;
      }

      // Перевіряємо, чи потрібно додати серіал в "Смотрю"
      console.log('TraktTV', 'Calling checkAndAddToShow');
      this.checkAndAddToShow(card, hash, percent, addThreshold, token);

      // Перевіряємо, чи потрібно відзначити епізод як переглянутий
      console.log('TraktTV', 'Checking if episode should be marked as watched, percent:', percent, 'minProgress:', minProgress);
      if (percent >= minProgress) {
        console.log('TraktTV', 'Marking episode as watched');
        this.markEpisodeAsWatched(card, hash, token);
      } else {
        console.log('TraktTV', 'Episode not marked as watched, percent < minProgress');
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
      console.log('TraktTV', 'getCurrentCard - Activity.active():', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active());
      console.log('TraktTV', 'getCurrentCard - card_data:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().card_data);
      console.log('TraktTV', 'getCurrentCard - card:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().card);
      console.log('TraktTV', 'getCurrentCard - movie:', Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && Lampa.Activity.active().movie);
      console.log('TraktTV', 'getCurrentCard - trakt_last_card from storage:', Lampa.Storage.get('trakt_last_card', null));
      console.log('TraktTV', 'getCurrentCard - final card:', card);
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Current card determined', card);
      }
      return card;
    },
    /**
     * Перевіряє, чи потрібно додати серіал в "Смотрю"
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {number} percent - Відсоток перегляду
     * @param {number} addThreshold - Поріг додавання
     * @param {string} token - Токен авторизації
     */
    checkAndAddToShow: function checkAndAddToShow(card, hash, percent, addThreshold, token) {
      var originalName = card.original_name || card.original_title || card.title;
      var firstEpisodeHash = Lampa.Utils.hash('11' + originalName);

      // Додаткове логування для налагодження
      console.log('TraktTV', 'checkAndAddToShow called with:', {
        card: card,
        hash: hash,
        percent: percent,
        addThreshold: addThreshold,
        originalName: originalName,
        firstEpisodeHash: firstEpisodeHash
      });
      if (this.isLoggingEnabled()) {
        console.log('TraktTV: Checking if show should be added to watching', {
          card: card,
          hash: hash,
          percent: percent,
          addThreshold: addThreshold,
          firstEpisodeHash: firstEpisodeHash,
          shouldAdd: hash === firstEpisodeHash && percent >= addThreshold || addThreshold === 0 && hash === firstEpisodeHash
        });
      }
      var shouldAdd = hash === firstEpisodeHash && percent >= addThreshold || addThreshold === 0 && hash === firstEpisodeHash;
      console.log('TraktTV', 'Should add show to watching:', shouldAdd);
      if (shouldAdd) {
        console.log('TraktTV', 'Adding show to watching');
        this.addShowToWatching(card, token);
      } else {
        console.log('TraktTV', 'Not adding show to watching');
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
        console.log('TraktTV', 'addShowToWatching called while already adding, skipping');
        return;
      }
      isAddingShowToWatching = true;
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Adding show to watching', card);
      }

      // Додаткове логування для налагодження
      console.log('TraktTV', 'addShowToWatching called with card:', card);
      var tmdbId = card.id || card.ids && card.ids.tmdb;
      console.log('TraktTV', 'Determined tmdbId:', tmdbId);
      if (!tmdbId) {
        console.log('TraktTV', 'No tmdbId found, returning');
        return;
      }

      // Визначаємо тип вмісту
      var contentType = getContentType(card);
      console.log('TraktTV', 'Determined content type:', contentType);

      // Отримуємо Trakt ID за TMDB ID
      console.log('TraktTV', 'Searching for content by tmdbId:', tmdbId, 'type:', contentType);
      api.get("/search/tmdb/".concat(tmdbId, "?type=").concat(contentType)).then(function (response) {
        console.log('TraktTV', 'Search response:', response);
        if (response && response.length > 0) {
          var item = response[0];
          var traktId = item.show && item.show.ids.trakt || item.movie && item.movie.ids.trakt;
          console.log('TraktTV', 'Found traktId:', traktId);

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
          console.log('TraktTV', 'Body for adding content to watching:', body);
          if (_this.isLoggingEnabled()) {
            console.log('TraktTV', 'Sending request to add content to watching', body);
          }
          return api.get('/sync/watchlist', body);
        } else {
          console.log('TraktTV', 'No show found or no traktId in response');
        }
      })["catch"](function (error) {
        console.error('TraktTV: Error adding show to watching', error);
        console.log('TraktTV', 'Error details:', error);
      })["finally"](function () {
        // Скидаємо стан після виконання запиту
        isAddingShowToWatching = false;
      });
    },
    /**
     * Відзначає епізод як переглянутий
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {string} token - Токен авторизації
     */
    markEpisodeAsWatched: function markEpisodeAsWatched(card, hash, token) {
      var _this2 = this;
      // Уникнення подвійних запитів
      if (isMarkingEpisodeAsWatched) {
        console.log('TraktTV', 'markEpisodeAsWatched called while already marking, skipping');
        return;
      }
      isMarkingEpisodeAsWatched = true;
      if (this.isLoggingEnabled()) {
        console.log('TraktTV', 'Marking episode as watched', {
          card: card,
          hash: hash
        });
      }

      // Додаткове логування для налагодження
      console.log('TraktTV', 'markEpisodeAsWatched called with:', {
        card: card,
        hash: hash
      });
      var tmdbId = card.id || card.ids && card.ids.tmdb;
      console.log('TraktTV', 'Determined tmdbId:', tmdbId);
      if (!tmdbId) {
        console.log('TraktTV', 'No tmdbId found, returning');
        return;
      }

      // Визначаємо тип вмісту
      var contentType = getContentType(card);
      console.log('TraktTV', 'Determined content type:', contentType);

      // Отримуємо інформацію про вміст
      console.log('TraktTV', 'Searching for content by tmdbId:', tmdbId, 'type:', contentType);
      api.get("/search/tmdb/".concat(tmdbId, "?type=").concat(contentType)).then(function (response) {
        console.log('TraktTV', 'Search response:', response);
        if (response && response.length > 0) {
          var item = response[0];
          var traktId = item.show && item.show.ids.trakt || item.movie && item.movie.ids.trakt;
          console.log('TraktTV', 'Found traktId:', traktId);
          if (_this2.isLoggingEnabled()) {
            console.log('TraktTV', 'Found show Trakt ID', traktId);
          }

          // Якщо це фільм, відзначаємо його як переглянутий
          if (contentType === 'movie') {
            return api.addToHistory({
              method: 'movie',
              id: card.id || card.ids && card.ids.tmdb,
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids)
            });
          }

          // Якщо це серіал, отримуємо інформацію про сезони та епізоди
          console.log('TraktTV', 'Getting seasons for traktId:', traktId);
          return api.get("/shows/".concat(traktId, "/seasons?extended=episodes")).then(function (seasons) {
            console.log('TraktTV', 'Seasons response:', seasons);
            if (!seasons) {
              console.log('TraktTV', 'No seasons data received');
              return;
            }
            if (_this2.isLoggingEnabled()) {
              console.log('TraktTV', 'Received seasons data', seasons.length);
            }

            // Знаходимо відповідний епізод за хешем
            console.log('TraktTV', 'Finding episode by hash');
            var episodeInfo = _this2.findEpisodeByHash(card, hash, seasons);
            console.log('TraktTV', 'Episode info found:', episodeInfo);
            if (!episodeInfo) {
              console.log('TraktTV', 'No episode info found, returning');
              return;
            }
            if (_this2.isLoggingEnabled()) {
              console.log('TraktTV', 'Found episode info', episodeInfo);
            }

            // Відзначаємо епізод як переглянутий
            return api.addToHistory({
              method: 'show',
              // Вказуємо тип вмісту
              id: card.id || card.ids && card.ids.tmdb,
              // ID серіалу
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              // Завжди додаємо traktId
              season_number: episodeInfo.season,
              // Номер сезону
              episodes: [{
                number: episodeInfo.episode,
                // Номер епізоду
                watched_at: new Date().toISOString() // Час перегляду
              }]
            });
          });
        } else {
          console.log('TraktTV', 'No show found or no traktId in response');
        }
      })["catch"](function (error) {
        console.error('TraktTV: Error marking episode as watched', error);
        console.log('TraktTV', 'Error details:', error);
      })["finally"](function () {
        // Скидаємо стан після виконання запиту
        isMarkingEpisodeAsWatched = false;
      });
    },
    /**
     * Знаходить інформацію про епізод за хешем
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {Array} seasons - Сезони серіалу
     * @returns {Object|null} Інформація про епізод
     */
    findEpisodeByHash: function findEpisodeByHash(card, hash, seasons) {
      var originalName = card.original_name || card.original_title || card.title;

      // Додаткове логування для налагодження
      console.log('TraktTV', 'findEpisodeByHash called with:', {
        card: card,
        hash: hash,
        seasons: seasons && seasons.length
      });
      console.log('TraktTV', 'originalName:', originalName);
      for (var i = 0; i < seasons.length; i++) {
        var season = seasons[i];
        if (!season.episodes) continue;
        for (var j = 0; j < season.episodes.length; j++) {
          var episode = season.episodes[j];
          var episodeHashStr = '' + season.number + episode.number + originalName;
          var episodeHash = Lampa.Utils.hash(episodeHashStr);

          // Додаткове логування для налагодження
          console.log('TraktTV', 'Checking episode:', {
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
            console.log('TraktTV', 'Found matching episode:', result);
            return result;
          }
        }
      }
      console.log('TraktTV', 'No matching episode found');
      return null;
    }
  };

  /**
   * Модуль для обробки подій плагіна
   */
  var events = {
    /**
     * Ініціалізує обробники подій
     */
    init: function init() {
      var _this = this;
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

      // Ініціалізуємо обробники відстеження перегляду
      // watching.init() викликається в TraktTV.js, тому тут не потрібно
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
      // Перевіряємо наявність об'єкта події
      if (!e) {
        console.error('TraktTV', 'Cannot add related lists block - event object is missing');
        return;
      }

      // Перевіряємо наявність даних картки
      var card = e.data;
      if (!card) {
        console.error('TraktTV', 'Cannot add related lists block - missing card data');
        return;
      }

      // Перевіряємо наявність методу
      var method = e.object && e.object.method ? e.object.method : card.method || 'movie';

      // Перевіряємо наявність ID
      if (!card.id && (!card.external_ids || !card.external_ids.trakt_id)) {
        console.error('TraktTV', 'Cannot add related lists block - missing card ID');
        return;
      }

      // Параметри для запиту
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
      Promise.all([api.getMediaLists(params), api.likesLists({
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
        var listsCountElement = $("\n                <div class=\"tag-count selector\">\n                    <div class=\"tag-count__name\">".concat(Lampa.Lang.translate('trakttv_related_lists'), "</div>\n                </div>\n            "));

        // Додаємо обробник кліку для відображення списків
        listsCountElement.on('hover:enter', function () {
          var selectItems = formattedMediaLists.map(function (list) {
            return {
              title: list.title,
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
              Lampa.Activity.push({
                url: '',
                title: a.title,
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

      // Перевіряємо наявність activity
      if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') {
        return;
      }
      var button = watchlist.addWatchlistButton(e.data);
      e.object.activity.render().find('.full-start-new__buttons').append(button);

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

  //LampaJS plugin for Trakt.TV
  function startPlugin() {
    window.plugin_trakt_ready = true;

    // Додаємо стилі
    Lampa.Template.add('trakt_style', "<style>@charset 'UTF-8';.full-start-new__details.trakt{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff}.full-start-new__details.trakt .trakt-icon{margin-right:.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.full-start-new__details.trakt .full-start-new__split{margin:0 .5em}.trakt-lists-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1em;padding:1em}.trakt-list-card{width:150px;background:rgba(255,255,255,0.1);-webkit-border-radius:.5em;border-radius:.5em;padding:.5em;cursor:pointer;-webkit-transition:background .3s ease;-o-transition:background .3s ease;transition:background .3s ease}.trakt-list-card:hover{background:rgba(255,255,255,0.2)}.trakt-list-card__poster{width:100%;height:225px;background-size:cover;background-position:center;-webkit-border-radius:.5em;border-radius:.5em;margin-bottom:.5em}.trakt-list-card__title{font-size:.9em;text-align:center;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.trakt-list-detail-header{padding:1em;background:rgba(0,0,0,0.3);margin-bottom:1em}.trakt-list-detail-title{font-size:1.5em;margin-bottom:.5em}.trakt-list-detail-description{font-size:1em;opacity:.8}</style>");
    $('body').append(Lampa.Template.get('trakt_style', {}, true));

    // Реєструємо плагін для рекомендацій
    Lampa.Manifest.plugins = recommendationsPlugin;

    // Реєструємо плагін для Up Next
    Lampa.Manifest.plugins = upnextPlugin;

    // Фонове оновлення токена при старті
    if (Lampa.Storage.get('trakt_refresh_token')) {
      api.refresh()["catch"](function () {});
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
    Lampa.Component.add('trakt_lists', Catalog.lists);

    // Додаємо переклади
    Main();

    // Ініціалізуємо обробники подій
    events.init();
    // Ініціалізуємо модуль відстеження перегляду
    watching.init();
  }
  if (!window.plugin_trakt_ready) startPlugin();

})();
