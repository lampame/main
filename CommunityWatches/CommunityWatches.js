(function () {
  'use strict';

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

  var API_BASE_URL = 'https://wh.lme.isroot.in';
  var TOP_ENDPOINT = '/top';
  var DEFAULT_PERIOD = '7d';
  var DEFAULT_TOP = 'desc';
  var CACHE_TTL = 1000 * 60 * 5;
  var LIST_PAGE_SIZE = 60;
  var TMDB_CACHE_LIFE = 60 * 24;
  var CONCURRENT_LOAD_LIMIT = 8;
  var cache = {};
  function normalizeMinRating(value) {
    var rating = parseFloat(value);
    return Number.isFinite(rating) && rating > 0 ? rating : 0;
  }
  function createCacheKey(params) {
    var type = params.type || '';
    var period = params.period || DEFAULT_PERIOD;
    var top = params.top || DEFAULT_TOP;
    var _short = typeof params["short"] == 'boolean' ? params["short"] ? 'true' : 'false' : '';
    var minRating = normalizeMinRating(params.min_rating);
    return [type, period, top, _short, minRating].join('|');
  }
  function parseTopId(rawId) {
    if (typeof rawId !== 'string') return null;
    var parsed = rawId.match(/^(movie|tv):(\d+)$/);
    if (!parsed) return null;
    return {
      type: parsed[1],
      id: parseInt(parsed[2], 10)
    };
  }
  function buildTopUrl() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var query = new URLSearchParams();
    var period = params.period || DEFAULT_PERIOD;
    var top = params.top || DEFAULT_TOP;
    query.set('period', period);
    query.set('top', top);
    if (params.type) query.set('type', params.type);
    if (typeof params["short"] == 'boolean') query.set('short', params["short"] ? 'true' : 'false');
    return API_BASE_URL + TOP_ENDPOINT + '?' + query.toString();
  }
  function parseLineUrl() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var safeUrl = String(url || '');
    var queryText = safeUrl.indexOf('?') >= 0 ? safeUrl.split('?')[1] : '';
    var query = new URLSearchParams(queryText);
    var top = query.get('top');
    var period = query.get('period');
    var type = query.get('type');
    var minRating = normalizeMinRating(query.get('min_rating'));
    return {
      top: top == 'asc' ? 'asc' : DEFAULT_TOP,
      period: period || DEFAULT_PERIOD,
      type: type == 'movie' || type == 'tv' ? type : '',
      min_rating: minRating
    };
  }
  function buildLineUrl() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var query = new URLSearchParams();
    var period = params.period || DEFAULT_PERIOD;
    var top = params.top || DEFAULT_TOP;
    query.set('period', period);
    query.set('top', top);
    if (params.type) query.set('type', params.type);
    if (normalizeMinRating(params.min_rating) > 0) query.set('min_rating', String(normalizeMinRating(params.min_rating)));
    return 'top?' + query.toString();
  }
  function requestTop() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(buildTopUrl(params), function (json) {
        resolve(Array.isArray(json) ? json : []);
      }, reject);
    });
  }
  function requestTmdbCard(type, id) {
    return new Promise(function (resolve) {
      if (!Lampa.Api || !Lampa.Api.sources || !Lampa.Api.sources.tmdb) {
        return resolve(null);
      }
      Lampa.Api.sources.tmdb.get(type + '/' + id, {}, function (card) {
        resolve(card || null);
      }, function () {
        resolve(null);
      }, {
        life: TMDB_CACHE_LIFE
      });
    });
  }
  function mapWithLimit(items, limit, mapItem) {
    return new Promise(function (resolve) {
      if (!items.length) return resolve([]);
      var result = new Array(items.length);
      var active = 0;
      var index = 0;
      var done = 0;
      function next() {
        if (done >= items.length && active === 0) {
          resolve(result);
          return;
        }
        var _loop = function _loop() {
          var currentIndex = index++;
          active++;
          Promise.resolve(mapItem(items[currentIndex], currentIndex)).then(function (value) {
            result[currentIndex] = value || null;
          })["catch"](function () {
            result[currentIndex] = null;
          })["finally"](function () {
            active--;
            done++;
            next();
          });
        };
        while (active < limit && index < items.length) {
          _loop();
        }
      }
      next();
    });
  }
  function fetchTopCards() {
    return _fetchTopCards.apply(this, arguments);
  }
  function _fetchTopCards() {
    _fetchTopCards = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var params,
        minRating,
        rows,
        parsed,
        cards,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            minRating = normalizeMinRating(params.min_rating);
            _context2.n = 1;
            return requestTop(params);
          case 1:
            rows = _context2.v;
            parsed = rows.map(function (item) {
              var idInfo = parseTopId(item && item.id);
              if (!idInfo) return null;
              return _objectSpread2(_objectSpread2({}, idInfo), {}, {
                requests_count: Number(item.requests_count || 0),
                source_id: item.id
              });
            }).filter(Boolean);
            if (parsed.length) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, []);
          case 2:
            _context2.n = 3;
            return mapWithLimit(parsed, CONCURRENT_LOAD_LIMIT, /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(entry) {
                var card;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      _context.n = 1;
                      return requestTmdbCard(entry.type, entry.id);
                    case 1:
                      card = _context.v;
                      if (card) {
                        _context.n = 2;
                        break;
                      }
                      return _context.a(2, null);
                    case 2:
                      if (!(minRating > 0 && Number(card.vote_average || 0) < minRating)) {
                        _context.n = 3;
                        break;
                      }
                      return _context.a(2, null);
                    case 3:
                      return _context.a(2, _objectSpread2(_objectSpread2({}, card), {}, {
                        community_watches_requests_count: entry.requests_count,
                        community_watches_source_id: entry.source_id
                      }));
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          case 3:
            cards = _context2.v;
            return _context2.a(2, cards.filter(Boolean));
        }
      }, _callee2);
    }));
    return _fetchTopCards.apply(this, arguments);
  }
  function fetchTopCardsCached() {
    return _fetchTopCardsCached.apply(this, arguments);
  }
  function _fetchTopCardsCached() {
    _fetchTopCardsCached = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var params,
        key,
        now,
        cached,
        cards,
        _args3 = arguments;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
            key = createCacheKey(params);
            now = Date.now();
            cached = cache[key];
            if (!(cached && now - cached.time < CACHE_TTL)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, cached.cards);
          case 1:
            _context3.n = 2;
            return fetchTopCards(params);
          case 2:
            cards = _context3.v;
            cache[key] = {
              time: now,
              cards: cards
            };
            return _context3.a(2, cards);
        }
      }, _callee3);
    }));
    return _fetchTopCardsCached.apply(this, arguments);
  }
  function paginate(cards) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var total = cards.length;
    var totalPages = Math.max(1, Math.ceil(total / LIST_PAGE_SIZE));
    var safePage = Math.max(1, Math.min(parseInt(page, 10) || 1, totalPages));
    var from = (safePage - 1) * LIST_PAGE_SIZE;
    var to = from + LIST_PAGE_SIZE;
    return {
      page: safePage,
      total_pages: totalPages,
      results: cards.slice(from, to)
    };
  }
  function line() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var oncomplete = arguments.length > 1 ? arguments[1] : undefined;
    var onerror = arguments.length > 2 ? arguments[2] : undefined;
    fetchTopCardsCached(_objectSpread2(_objectSpread2({}, params), {}, {
      "short": true
    })).then(oncomplete)["catch"](function () {
      if (onerror) onerror();
    });
  }
  function listByUrl(url, page, oncomplete, onerror) {
    var parsed = parseLineUrl(url);
    fetchTopCardsCached(parsed).then(function (cards) {
      var paged = paginate(cards, page);
      oncomplete(_objectSpread2(_objectSpread2({}, paged), {}, {
        source: 'community_watches',
        url: buildLineUrl(parsed)
      }));
    })["catch"](function () {
      if (onerror) onerror();
    });
  }
  var Api = {
    buildLineUrl: buildLineUrl,
    line: line,
    listByUrl: listByUrl
  };

  function list() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
    var onerror = arguments.length > 2 ? arguments[2] : undefined;
    Api.listByUrl(params.url || '', params.page || 1, oncomplite, onerror);
  }
  var Source = {
    list: list
  };

  var initialized = false;
  var iconCounter = 0;
  function createLineIcon() {
    iconCounter += 1;
    var gradientId = 'community-watches-flag-' + iconCounter;
    return "<svg viewBox=\"0 0 110 104\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <defs>\n            <linearGradient id=\"".concat(gradientId, "\" x1=\"55\" y1=\"0\" x2=\"55\" y2=\"104\" gradientUnits=\"userSpaceOnUse\">\n                <stop offset=\"50%\" stop-color=\"#0057B7\"/>\n                <stop offset=\"50%\" stop-color=\"#FFD700\"/>\n            </linearGradient>\n        </defs>\n        <path d=\"M81.6744 103.11C98.5682 93.7234 110 75.6967 110 55C110 24.6243 85.3757 0 55 0C24.6243 0 0 24.6243 0 55C0 75.6967 11.4318 93.7234 28.3255 103.11C14.8869 94.3724 6 79.224 6 62C6 34.938 27.938 13 55 13C82.062 13 104 34.938 104 62C104 79.224 95.1131 94.3725 81.6744 103.11Z\" fill=\"url(#").concat(gradientId, ")\"/>\n        <path d=\"M92.9546 80.0076C95.5485 74.5501 97 68.4446 97 62C97 38.804 78.196 20 55 20C31.804 20 13 38.804 13 62C13 68.4446 14.4515 74.5501 17.0454 80.0076C16.3618 77.1161 16 74.1003 16 71C16 49.4609 33.4609 32 55 32C76.5391 32 94 49.4609 94 71C94 74.1003 93.6382 77.1161 92.9546 80.0076Z\" fill=\"url(#").concat(gradientId, ")\"/>\n        <path d=\"M55 89C69.3594 89 81 77.3594 81 63C81 57.9297 79.5486 53.1983 77.0387 49.1987C82.579 54.7989 86 62.5 86 71C86 88.1208 72.1208 102 55 102C37.8792 102 24 88.1208 24 71C24 62.5 27.421 54.7989 32.9613 49.1987C30.4514 53.1983 29 57.9297 29 63C29 77.3594 40.6406 89 55 89Z\" fill=\"url(#").concat(gradientId, ")\"/>\n        <path d=\"M73 63C73 72.9411 64.9411 81 55 81C45.0589 81 37 72.9411 37 63C37 53.0589 45.0589 45 55 45C64.9411 45 73 53.0589 73 63Z\" fill=\"url(#").concat(gradientId, ")\"/>\n    </svg>");
  }
  function createLineTitle(text) {
    var root = document.createElement('span');
    var icon = document.createElement('span');
    var label = document.createElement('span');
    root.className = 'community-watches-line-title';
    root.style.display = 'inline-flex';
    root.style.alignItems = 'center';
    root.style.gap = '.45em';
    icon.className = 'community-watches-line-title__icon';
    icon.style.display = 'inline-block';
    icon.style.width = '1em';
    icon.style.height = '1em';
    icon.style.flexShrink = '0';
    icon.innerHTML = createLineIcon();
    label.textContent = text;
    root.appendChild(icon);
    root.appendChild(label);
    return root;
  }
  function registerLineTitleDecorator() {
    Lampa.Listener.follow('line', function (e) {
      if (!e || e.type !== 'create' || !e.data || !e.data.community_watches) return;
      try {
        var titleNode = createLineTitle(e.data.community_watches_title || e.data.title || '');
        var container = e.line.render().find('.items-line__title');
        if (container && container.length) {
          container.empty().append(titleNode);
        }
      } catch (err) {
        console.error('CommunityWatches: line title decorate error', err);
      }
    });
  }
  function createCall(config) {
    return function (params, screen) {
      if (config.category && screen == 'category' && params.url !== config.category) return;
      return function (call) {
        Api.line(config.query, function (cards) {
          if (!cards.length) return call();
          var line = {
            title: config.displayTitle,
            url: Api.buildLineUrl(config.query),
            source: 'community_watches',
            community_watches: true,
            community_watches_title: config.displayTitle,
            results: cards,
            total_pages: 2
          };
          call(line);
        }, call);
      };
    };
  }
  function registerRows() {
    var rows = [{
      name: 'CommunityWatchesMainHiddenGems',
      title: 'Community watches · Головна · Сховані геми',
      screen: ['main'],
      index: 1,
      displayTitle: 'Сховані геми спільноти',
      query: {
        period: '7d',
        top: 'asc',
        min_rating: 7
      }
    }, {
      name: 'CommunityWatchesMainWeeklyTop',
      title: 'Community watches · Головна · Топ тижня',
      screen: ['main'],
      index: 0,
      displayTitle: 'Спільнота дивиться на тижні',
      query: {
        period: '7d',
        top: 'desc'
      }
    }, {
      name: 'CommunityWatchesMovieHiddenGems',
      title: 'Community watches · Фільми · Сховані геми',
      screen: ['category'],
      category: 'movie',
      index: 1,
      displayTitle: 'Сховані геми спільноти',
      query: {
        period: '7d',
        top: 'asc',
        type: 'movie',
        min_rating: 7
      }
    }, {
      name: 'CommunityWatchesMovieWeeklyTop',
      title: 'Community watches · Фільми · Топ тижня',
      screen: ['category'],
      category: 'movie',
      index: 0,
      displayTitle: 'Спільнота дивиться на тижні',
      query: {
        period: '7d',
        top: 'desc',
        type: 'movie'
      }
    }, {
      name: 'CommunityWatchesTvHiddenGems',
      title: 'Community watches · Серіали · Сховані геми',
      screen: ['category'],
      category: 'tv',
      index: 1,
      displayTitle: 'Сховані геми спільноти',
      query: {
        period: '7d',
        top: 'asc',
        type: 'tv',
        min_rating: 7
      }
    }, {
      name: 'CommunityWatchesTvWeeklyTop',
      title: 'Community watches · Серіали · Топ тижня',
      screen: ['category'],
      category: 'tv',
      index: 0,
      displayTitle: 'Спільнота дивиться на тижні',
      query: {
        period: '7d',
        top: 'desc',
        type: 'tv'
      }
    }];
    rows.forEach(function (row) {
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen,
        call: createCall(row)
      });
    });
  }
  function initRows() {
    if (initialized) return;
    initialized = true;
    registerLineTitleDecorator();
    registerRows();
  }

  var manifest = {
    type: 'video',
    version: '0.0.2',
    name: 'Community watches',
    description: 'Лайни популярного контенту спільноти за даними community top API',
    component: 'community_watches'
  };
  function registerSource() {
    if (!Lampa.Api || !Lampa.Api.sources) return;
    if (!Lampa.Api.sources.community_watches) {
      Lampa.Api.sources.community_watches = Source;
    }
  }
  function add() {
    Lampa.Manifest.plugins = manifest;
    registerSource();
    initRows();
  }
  function startPlugin() {
    window.plugin_community_watches_ready = true;
    if (window.appready) add();else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') add();
      });
    }
  }
  if (Lampa.Manifest.app_digital >= 300 && !window.plugin_community_watches_ready) startPlugin();

  return startPlugin;

})();
