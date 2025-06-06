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
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var CLIENT_ID = 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b';
  var CLIENT_SECRET = 'a8cf25070f8c9a609782deecf56197f99e96084b080c1c86fccf9dc682465f1b';
  var API_URL = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://api.trakt.tv';
  function addToHistory(data) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var body = {
      movies: [],
      shows: []
    };
    if (data.method === 'movie') {
      body.movies.push({
        ids: {
          tmdb: data.id
        },
        watched_at: new Date().toISOString()
      });
    } else if (data.method === 'show') {
      if (mode === 'all') {
        body.shows.push({
          ids: {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
      } else if (mode === 'last_season') {
        body.shows.push({
          ids: {
            tmdb: data.id
          },
          seasons: [{
            number: data.season,
            watched_at: new Date().toISOString()
          }]
        });
      } else if (mode === 'last_episode') {
        body.shows.push({
          ids: {
            tmdb: data.id
          },
          seasons: [{
            number: data.season,
            episodes: [{
              number: data.episode,
              watched_at: new Date().toISOString()
            }]
          }]
        });
      }
    }
    return requestApi('POST', '/sync/history', body);
  }
  function removeFromHistory(data) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var body = {
      movies: [],
      shows: []
    };
    if (data.method === 'movie') {
      body.movies.push({
        ids: {
          tmdb: data.id
        }
      });
    } else if (data.method === 'show') {
      if (mode === 'all') {
        body.shows.push({
          ids: {
            tmdb: data.id
          }
        });
      } else if (mode === 'last_season') {
        body.shows.push({
          ids: {
            tmdb: data.id
          },
          seasons: [{
            number: data.season
          }]
        });
      } else if (mode === 'last_episode') {
        body.shows.push({
          ids: {
            tmdb: data.id
          },
          seasons: [{
            number: data.season,
            episodes: [{
              number: data.episode
            }]
          }]
        });
      }
    }
    return requestApi('POST', '/sync/history/remove', body);
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
        'x-requested-with': "lampame"
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
          poster: "https://".concat(media.images.poster) || '',
          image: "https://".concat(media.images.fanart) || '',
          method: item.movie ? 'movie' : 'tv'
        };
      })
    };
  }
  var api = {
    addToHistory: addToHistory,
    removeFromHistory: removeFromHistory,
    get: function get(url) {
      var unauthorized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return requestApi('GET', url, {}, unauthorized);
    },
    recommendations: function recommendations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = options.limit || 50;
      return new Promise(function (resolve, reject) {
        var moviesRequest = requestApi('GET', "/recommendations/movies?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(limit));
        var showsRequest = requestApi('GET', "/recommendations/shows?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(limit));
        Promise.all([moviesRequest, showsRequest]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            moviesResponse = _ref2[0],
            showsResponse = _ref2[1];
          var formattedMovies = moviesResponse.map(function (movie) {
            var _movie$images;
            return {
              component: 'full',
              id: movie.ids.tmdb,
              title: movie.title,
              original_title: movie.title,
              release_date: movie.year + '',
              vote_average: movie.rating || 0,
              poster: Array.isArray((_movie$images = movie.images) === null || _movie$images === void 0 ? void 0 : _movie$images.poster) ? "https://".concat(movie.images.poster[0]) : '',
              method: 'movie',
              card_type: 'movie'
            };
          });
          var formattedShows = showsResponse.map(function (show) {
            var _show$images;
            return {
              component: 'full',
              id: show.ids.tmdb,
              title: show.title,
              original_title: show.title,
              release_date: show.year + '',
              vote_average: show.rating || 0,
              poster: Array.isArray((_show$images = show.images) === null || _show$images === void 0 ? void 0 : _show$images.poster) ? "https://".concat(show.images.poster[0]) : '',
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
          var finalResults = limit ? combinedResults.slice(0, limit) : combinedResults;
          resolve({
            results: finalResults
          });
        })["catch"](function (error) {
          console.error('TraktTV', error);
          requestApi('GET', "/recommendations/movies?extended=images&ignore_collected=true&ignore_watchlisted=true&limit=".concat(limit)).then(function (response) {
            var formattedResults = response.map(function (movie) {
              var _movie$images2;
              return {
                component: 'full',
                id: movie.ids.tmdb,
                title: movie.title,
                original_title: movie.title,
                release_date: movie.year + '',
                vote_average: movie.rating || 0,
                poster: Array.isArray((_movie$images2 = movie.images) === null || _movie$images2 === void 0 ? void 0 : _movie$images2.poster) ? "https://".concat(movie.images.poster[0]) : '',
                method: 'movie',
                card_type: 'movie'
              };
            });
            resolve({
              results: limit ? formattedResults.slice(0, limit) : formattedResults
            });
          })["catch"](function (fallbackError) {
            console.error('TraktTV', fallbackError);
            reject(fallbackError);
          });
        });
      });
    },
    watchlist: function watchlist(params, oncomplete, onerror) {
      requestApi('GET', '/sync/watchlist/movies,shows/added/asc?extended=images').then(function (response) {
        oncomplete(formatTraktResults(response));
      })["catch"](function (error) {
        onerror(error);
      });
    },
    upnext: function upnext(params, oncomplete, onerror) {
      var limit = params.limit || 20;
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
          var _item$show$images, _item$show$images2;
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
            title: item.show.title,
            original_title: item.show.original_title || item.show.title,
            release_date: item.show.year ? String(item.show.year) : '',
            vote_average: item.show.rating || 0,
            poster: Array.isArray((_item$show$images = item.show.images) === null || _item$show$images === void 0 ? void 0 : _item$show$images.poster) ? "https://".concat(item.show.images.poster[0]) : '',
            image: Array.isArray((_item$show$images2 = item.show.images) === null || _item$show$images2 === void 0 ? void 0 : _item$show$images2.fanart) ? "https://".concat(item.show.images.fanart[0]) : '',
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
        var limitedResults = limit ? results.slice(0, limit) : results;
        oncomplete({
          results: limitedResults
        });
      })["catch"](onerror);
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
    addToWatchlist: function addToWatchlist(params, oncomplete, onerror) {
      var data = {
        movies: [],
        shows: []
      };
      if (params.method === 'movie') {
        data.movies.push({
          ids: {
            tmdb: params.id
          }
        });
      } else {
        data.shows.push({
          ids: {
            tmdb: params.id
          }
        });
      }
      requestApi('POST', '/sync/watchlist', data).then(function (response) {
        oncomplete(response);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    removeFromWatchlist: function removeFromWatchlist(params, oncomplete, onerror) {
      var data = {
        movies: [],
        shows: []
      };
      if (params.method === 'movie') {
        data.movies.push({
          ids: {
            tmdb: params.id
          }
        });
      } else {
        data.shows.push({
          ids: {
            tmdb: params.id
          }
        });
      }
      requestApi('POST', '/sync/watchlist/remove', data).then(function (response) {
        oncomplete(response);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    inWatchlist: function inWatchlist(params, oncomplete, onerror) {
      var type = params.method === 'movie' ? 'movies' : 'shows';
      var url = "/sync/watchlist/".concat(type, "?extended=full");
      requestApi('GET', url).then(function (response) {
        var found = response.find(function (item) {
          var _item$movie, _item$show;
          return ((_item$movie = item.movie) === null || _item$movie === void 0 ? void 0 : _item$movie.ids.tmdb) === params.id || ((_item$show = item.show) === null || _item$show === void 0 ? void 0 : _item$show.ids.tmdb) === params.id;
        });
        oncomplete(!!found);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    inHistory: function inHistory(params, oncomplete, onerror) {
      var type = params.method === 'movie' ? 'movies' : 'shows';
      var url = "/sync/history/".concat(type, "?extended=full");
      requestApi('GET', url).then(function (response) {
        var found = response.find(function (item) {
          var _item$movie2, _item$show2;
          return ((_item$movie2 = item.movie) === null || _item$movie2 === void 0 ? void 0 : _item$movie2.ids.tmdb) === params.id || ((_item$show2 = item.show) === null || _item$show2 === void 0 ? void 0 : _item$show2.ids.tmdb) === params.id;
        });
        oncomplete(!!found);
      })["catch"](function (error) {
        onerror(error);
      });
    }
  };

  var _Lampa = Lampa,
    InteractionCategory = _Lampa.InteractionCategory;
  function baseComponent(object, type) {
    var comp = new InteractionCategory(object);
    comp.create = function () {
      // Для сторінки Up Next встановлюємо ліміт 50
      var params = _objectSpread2({}, object);
      if (type === 'upnext') {
        params.limit = 100;
      }
      api[type](params, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push(card.data);
      };
    };
    return comp;
  }
  function baseRecommendations(object) {
    var comp = new Lampa.InteractionCategory(object);
    comp.create = function () {
      var _this = this;
      // Використовуємо ліміт 50 для сторінки рекомендацій
      api.recommendations({
        limit: 50
      }).then(function (recommendations) {
        // Перевіряємо чи є results і чи він не порожній
        if (recommendations && recommendations.results && recommendations.results.length > 0) {
          // Кешування видалено - рекомендації завантажуються кожен раз заново
          _this.build(recommendations); // Передаємо весь об'єкт з results
        } else {
          _this.empty();
        }
      })["catch"](function (error) {
        console.error('TraktTV', error);
        _this.empty();
      });
    };
    comp.cardRender = function (object, element, card) {
      // Додаємо мітку TV для серіалів
      if (element.method === 'tv') {
        card.render().addClass('card--tv').append('<div class="card__type">TV</div>');
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
    return new baseComponent(object, 'watchlist');
  }
  function upnext(object) {
    return new baseComponent(object, 'upnext');
  }
  function recommendations(object) {
    return new baseRecommendations(object);
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext,
    recommendations: recommendations
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
              Lampa.Noty.show(Lampa.Lang.translate('trakttv_calendar_error') || 'Trakt Calendar load error');
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
        descr: Lampa.Lang.translate('trakttv_no_upcoming') || 'No upcoming episodes'
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
        item.find('.timetable__body').append("<div class=\"timetable__empty\">".concat(Lampa.Lang.translate('trakttv_no_series') || 'No series', "</div>"));
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
            title: "".concat(Lampa.Lang.translate('trakttv_episodes_on') || 'Episodes on', " ").concat(date),
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
    version: "2.4",
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
            title: 'Recommendations',
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
                text: "TV"
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
        title: icons.createHeaderWithIcon(icons.TRAKT_ICON, 'Up Next'),
        results: normalizedResults,
        line_type: 'trakttv_upnext',
        onMore: function onMore() {
          Lampa.Activity.push({
            title: 'Up Next',
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
          if (Lampa.Activity.active().component === 'main') {
            console.log('TraktTV: Up Next оновлено');
          }
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
    button.addEventListener('hover:enter', function () {
      var isAdded = button.classList.contains('added');
      if (isAdded) {
        api.removeFromWatchlist(card.movie, function () {
          Lampa.Noty.show(Lampa.Lang.translate('trakt_watchlist_remove'));
          updateButtonStyle(button, false);
        }, function () {
          return Lampa.Noty.show('Помилка при видаленні');
        });
      } else {
        api.addToWatchlist(card.movie, function () {
          Lampa.Noty.show(Lampa.Lang.translate('trakt_watchlist_add'));
          updateButtonStyle(button, true);
        }, function () {
          return Lampa.Noty.show('Помилка при додаванні');
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
    addHistoryButton: function addHistoryButton(data) {
      var button = document.createElement('div');
      button.className = 'full-start__button selector trakt_history-button';
      button.innerHTML = "\n               ".concat(icons.HISTORY_ICON, " \n                <span>").concat(Lampa.Lang.translate('trakt_history_not_in'), "</span>\n");

      // Перевіряємо чи є в історії
      api.inHistory(data.movie, function (isInHistory) {
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
      button.addEventListener('hover:enter', function () {
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
            api.removeFromHistory(_apiData).then(function () {
              Lampa.Noty.show(Lampa.Lang.translate('trakt_history_removed'));
              updateButtonStyle(button, false);
            })["catch"](function (err) {
              Lampa.Noty.show(Lampa.Lang.translate('trakt_history_removeError'), err);
            });
          } else if (_type === 'show') {
            Lampa.Select.show({
              title: Lampa.Lang.translate('trakt_history_title'),
              items: [{
                title: Lampa.Lang.translate('trakt_history_all'),
                action: 'all'
              }
              // { title: Lampa.Lang.translate('trakt_history_season'), action: 'last_season'},
              // { title: Lampa.Lang.translate('trakt_history_episodes'), action: 'last_episode'}
              ],
              onSelect: function onSelect(a) {
                api.removeFromHistory(_apiData, a.action).then(function () {
                  Lampa.Noty.show(Lampa.Lang.translate('trakt_history_removed', {
                    type: a.title
                  }));
                  updateButtonStyle(button, false);
                })["catch"](function (err) {
                  Lampa.Noty.show(Lampa.Lang.translate('trakt_history_removeError'), err);
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
          api.addToHistory(apiData).then(function () {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_history_added'));
            updateButtonStyle(button, true);
          })["catch"](function (err) {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_history_addError'), err);
          });
        } else if (type === 'show') {
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakt_history_title'),
            items: [{
              title: Lampa.Lang.translate('trakt_history_all'),
              action: 'all'
            }
            // { title: Lampa.Lang.translate('trakt_history_season'), action: 'last_season'},
            // { title: Lampa.Lang.translate('trakt_history_episodes'), action: 'last_episode'}
            ],
            onSelect: function onSelect(a) {
              api.addToHistory(apiData, a.action).then(function () {
                Lampa.Noty.show(Lampa.Lang.translate('trakt_history_added', {
                  type: a.title
                }));
                updateButtonStyle(button, true);
              })["catch"](function (err) {
                Lampa.Noty.show(Lampa.Lang.translate('trakt_history_addError'), err);
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
    var combineButton = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">TraktTV</div>\n    </li>"));
    combineButton.on('hover:enter', function () {
      Lampa.Select.show({
        title: 'TraktTV',
        items: items,
        onSelect: function onSelect(a) {
          Lampa.Activity.push({
            url: '',
            title: a.title,
            component: a.component
          });
        },
        onLong: function onLong(a) {
          // Визначаємо ключ для перемикання
          var toggleKey = a.toggleOption || a.component;

          // Отримуємо поточне значення
          var currentValue = Lampa.Storage.field(toggleKey, true);

          // Перемикаємо значення
          if (currentValue === true) {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_componentDisable'));
            Lampa.Storage.set(toggleKey, false);
          } else {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_componentEnable'));
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
        var loading = $('<div class="settings-param__value">Loading...</div>');
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
          item.append("<div class=\"settings-param__name\"><b>Trakt.TV User</b></div>");
          item.append("<div class=\"settings-param__value\">Username: ".concat(user.username, " ").concat(user.vip ? 'VIP' : '', "</div>"));
          if (funnyLine) item.append("<div class=\"settings-param__value\">".concat(funnyLine, "</div>"));
          if (stats) {
            var _stats$movies2, _stats$movies3, _stats$episodes2, _stats$episodes3;
            item.append("\n                        <div class=\"settings-param__value\">\n                            <b>Movies:</b>\n                            ".concat(Lampa.Lang.translate('trakttvStatWatched'), ": ").concat(((_stats$movies2 = stats.movies) === null || _stats$movies2 === void 0 ? void 0 : _stats$movies2.watched) || 0, ", \n                            ").concat(Lampa.Lang.translate('trakttvStatMinutes'), ": ").concat(((_stats$movies3 = stats.movies) === null || _stats$movies3 === void 0 ? void 0 : _stats$movies3.minutes) || 0, "\n                        </div>\n                        <div class=\"settings-param__value\">\n                            <b>Episodes:</b>\n                            ").concat(Lampa.Lang.translate('trakttvStatWatched'), ": ").concat(((_stats$episodes2 = stats.episodes) === null || _stats$episodes2 === void 0 ? void 0 : _stats$episodes2.watched) || 0, ", \n                            ").concat(Lampa.Lang.translate('trakttvStatMinutes'), ": ").concat(((_stats$episodes3 = stats.episodes) === null || _stats$episodes3 === void 0 ? void 0 : _stats$episodes3.minutes) || 0, "\n                        </div>\n                    "));
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
          var modal = $("<div class=\"about\">\n                        <div class=\"about__text\">".concat(response.verification_url, "</div>\n                        <div class=\"about__text\">Code: ").concat(response.user_code, "</div>\n                    </div>"));
          Lampa.Modal.open({
            title: 'Trakt Auth',
            html: modal,
            size: 'small',
            onBack: function onBack() {
              Lampa.Modal.close();
              Lampa.Controller.toggle('settings_component');
            }
          });
          pollAuth(response);
        })["catch"](function (err) {
          Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
        });
      }
    });

    // // Кнопка імпорту закладок з Trakt
    // Lampa.SettingsApi.addParam({
    //     component: 'trakt',
    //     param: {
    //         name: 'trakt_import',
    //         type: 'button'
    //     },
    //     field: {
    //         name: 'Імпортувати закладки з Trakt'
    //     },
    //     onRender: function(item){
    //         if(Lampa.Storage.get('trakt_token')){
    //             item.show();
    //         } else {
    //             item.hide();
    //         }
    //     },
    //     onChange: function(){
    //         importTraktToLampa();
    //     }
    // });

    // // Кнопка експорту закладок у Trakt
    // Lampa.SettingsApi.addParam({
    //     component: 'trakt',
    //     param: {
    //         name: 'trakt_export',
    //         type: 'button'
    //     },
    //     field: {
    //         name: 'Експортувати закладки у Trakt'
    //     },
    //     onRender: function(item){
    //         if(Lampa.Storage.get('trakt_token')){
    //             item.show();
    //         } else {
    //             item.hide();
    //         }
    //     },
    //     onChange: function(){
    //         exportLampaToTrakt();
    //     }
    // });

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
        Lampa.Noty.show(Lampa.Lang.translate('trakttvLogoutNoty'));
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
        Lampa.Noty.show(Lampa.Lang.translate('trakttvFullClearNoty'));
        Lampa.Settings.update();
      }
    });

    // Параметр для відображення рекомендацій на головній
    Lampa.SettingsApi.addParam({
      component: 'interface',
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
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthOk'));
      })["catch"](function (err) {
        if (err.status == 400) {
          return; // Очікуємо
        }
        clearInterval(interval);
        Lampa.Modal.close();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
      });
    }, (data.interval + 1) * 1000);
  }
  var config = {
    main: main
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
     * Обробник події готовності картки фільму/серіалу
     * @param {Object} e - Об'єкт події
     */
    onFullCardReady: function onFullCardReady(e) {
      var button = watchlist.addWatchlistButton(e.data);
      e.object.activity.render().find('.full-start-new__buttons').append(button);

      // Додаємо нову кнопку
      var historyButton = TraktHistory.addHistoryButton(e.data);
      e.object.activity.render().find('.full-start-new__buttons').append(historyButton);
    }
  };

  //LampaJS plugin for Trakt.TV
  function startPlugin() {
    window.plugin_trakt_ready = true;

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

    // Додаємо переклади
    Main();

    // Ініціалізуємо обробники подій
    events.init();
  }
  if (!window.plugin_trakt_ready) startPlugin();

})();
