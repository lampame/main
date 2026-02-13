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

  var API_BASE$1 = 'https://tzbe.lme.isroot.in/v1';
  var CACHE_KEY = 'tryzubtv_tv_cache_v1';
  var CACHE_TTL = 15 * 60 * 1000;
  var CATALOG_CACHE_KEY = 'tryzubtv_catalog_cache_v1';
  var CATALOG_TTL = 24 * 60 * 60 * 1000;
  function parseResponse$1(payload) {
    if (!payload) return {};
    if (typeof payload === 'string') {
      try {
        return JSON.parse(payload);
      } catch (error) {
        return {};
      }
    }
    return payload;
  }
  function request$3(url) {
    var run = function run(params) {
      return new Promise(function (resolve, reject) {
        Lampa.Network.silent(url, function (data) {
          return resolve(parseResponse$1(data));
        }, reject, false, params);
      });
    };

    // Some TV environments fail with forced text mode.
    return run({
      dataType: 'text'
    })["catch"](function () {
      return run();
    });
  }
  function readCache(forceStale) {
    if (!Lampa.Storage) return null;
    var cached = Lampa.Storage.get(CACHE_KEY, null);
    if (!cached || _typeof(cached) !== 'object') return null;
    var time = typeof cached.time === 'number' ? cached.time : 0;
    var items = Array.isArray(cached.items) ? cached.items : null;
    if (!time || !items) return null;
    if (!forceStale && Date.now() - time > CACHE_TTL) return null;
    return items;
  }
  function writeCache(items) {
    if (!Lampa.Storage) return;
    Lampa.Storage.set(CACHE_KEY, {
      time: Date.now(),
      items: items
    });
  }
  function fetchAllChannels(_x) {
    return _fetchAllChannels.apply(this, arguments);
  }
  function _fetchAllChannels() {
    _fetchAllChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(force) {
      var cached, response, items, stale, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            cached = !force ? readCache(false) : null;
            if (!cached) {
              _context.n = 1;
              break;
            }
            return _context.a(2, cached);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return request$3("".concat(API_BASE$1, "/channels"));
          case 2:
            response = _context.v;
            items = response && Array.isArray(response.items) ? response.items : [];
            writeCache(items);
            return _context.a(2, items);
          case 3:
            _context.p = 3;
            _t = _context.v;
            stale = readCache(true);
            if (!stale) {
              _context.n = 4;
              break;
            }
            return _context.a(2, stale);
          case 4:
            throw _t;
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _fetchAllChannels.apply(this, arguments);
  }
  function fetchChannelsByCategory(_x2) {
    return _fetchChannelsByCategory.apply(this, arguments);
  }
  function _fetchChannelsByCategory() {
    _fetchChannelsByCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(categoryKey) {
      var url, response;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (categoryKey) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, fetchAllChannels(false));
          case 1:
            url = "".concat(API_BASE$1, "/channels?category_key=").concat(encodeURIComponent(categoryKey));
            _context2.n = 2;
            return request$3(url);
          case 2:
            response = _context2.v;
            return _context2.a(2, response && Array.isArray(response.items) ? response.items : []);
        }
      }, _callee2);
    }));
    return _fetchChannelsByCategory.apply(this, arguments);
  }
  function readCatalogCache(forceStale) {
    if (!Lampa.Storage) return null;
    var cached = Lampa.Storage.get(CATALOG_CACHE_KEY, null);
    if (!cached || _typeof(cached) !== 'object') return null;
    var time = typeof cached.time === 'number' ? cached.time : 0;
    var lines = Array.isArray(cached.lines) ? cached.lines : null;
    if (!time || !lines) return null;
    if (!forceStale && Date.now() - time > CATALOG_TTL) return null;
    return lines;
  }
  function writeCatalogCache(lines) {
    if (!Lampa.Storage) return;
    Lampa.Storage.set(CATALOG_CACHE_KEY, {
      time: Date.now(),
      lines: lines
    });
  }
  function fetchCatalogLines$1(_x3) {
    return _fetchCatalogLines$1.apply(this, arguments);
  }
  function _fetchCatalogLines$1() {
    _fetchCatalogLines$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(force) {
      var cached, response, lines, stale, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            cached = !force ? readCatalogCache(false) : null;
            if (!cached) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, cached);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return request$3("".concat(API_BASE$1, "/catalog"));
          case 2:
            response = _context3.v;
            lines = response && Array.isArray(response.lines) ? response.lines : [];
            writeCatalogCache(lines);
            return _context3.a(2, lines);
          case 3:
            _context3.p = 3;
            _t2 = _context3.v;
            stale = readCatalogCache(true);
            if (!stale) {
              _context3.n = 4;
              break;
            }
            return _context3.a(2, stale);
          case 4:
            throw _t2;
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return _fetchCatalogLines$1.apply(this, arguments);
  }
  var TvApi = {
    fetchAllChannels: fetchAllChannels,
    fetchChannelsByCategory: fetchChannelsByCategory,
    fetchCatalogLines: fetchCatalogLines$1
  };

  var API_BASE = 'https://tzbe.lme.isroot.in/v1';
  function parseResponse(payload) {
    if (!payload) return {};
    if (typeof payload === 'string') {
      var text = payload.trim();

      // Some backends may return stream URL as plain text.
      if (text.indexOf('http://') === 0 || text.indexOf('https://') === 0) {
        return {
          url: text
        };
      }
      try {
        return JSON.parse(text);
      } catch (error) {
        return {};
      }
    }
    return payload;
  }
  function request$2(url) {
    var run = function run(params) {
      return new Promise(function (resolve, reject) {
        Lampa.Network.silent(url, function (data) {
          return resolve(parseResponse(data));
        }, reject, false, params);
      });
    };

    // TV clients may fail with forced text mode; retry with default transport.
    return run({
      dataType: 'text'
    })["catch"](function () {
      return run();
    });
  }
  function fetchCatalog() {
    return _fetchCatalog.apply(this, arguments);
  }
  function _fetchCatalog() {
    _fetchCatalog = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return request$2("".concat(API_BASE, "/catalog"));
          case 1:
            response = _context.v;
            return _context.a(2, response && Array.isArray(response.lines) ? response.lines : []);
          case 2:
            _context.p = 2;
            _context.v;
            return _context.a(2, []);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return _fetchCatalog.apply(this, arguments);
  }
  function fetchChannels(_x) {
    return _fetchChannels.apply(this, arguments);
  }
  function _fetchChannels() {
    _fetchChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(categoryKey) {
      var url, response, items, title;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            url = "".concat(API_BASE, "/channels?category_key=").concat(encodeURIComponent(categoryKey));
            _context2.n = 1;
            return request$2(url);
          case 1:
            response = _context2.v;
            items = response && Array.isArray(response.items) ? response.items : [];
            title = response && response.category_title ? response.category_title : '';
            return _context2.a(2, {
              categoryTitle: title,
              items: items
            });
          case 2:
            _context2.p = 2;
            _context2.v;
            return _context2.a(2, {
              categoryTitle: '',
              items: []
            });
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return _fetchChannels.apply(this, arguments);
  }
  function fetchStream(_x2, _x3) {
    return _fetchStream.apply(this, arguments);
  }
  function _fetchStream() {
    _fetchStream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(provider, channelId) {
      var url, response;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            // Stream URLs are short-lived; bypass any intermediate cache.
            url = "".concat(API_BASE, "/stream/").concat(encodeURIComponent(provider), "/").concat(encodeURIComponent(channelId), "?_=").concat(Date.now());
            _context3.n = 1;
            return request$2(url);
          case 1:
            response = _context3.v;
            if (!(response && response.url)) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2, response.url);
          case 2:
            if (!(response && response.raw && response.raw.p)) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2, response.raw.p);
          case 3:
            if (!(typeof response === 'string' && (response.indexOf('http://') === 0 || response.indexOf('https://') === 0))) {
              _context3.n = 4;
              break;
            }
            return _context3.a(2, response);
          case 4:
            return _context3.a(2, '');
        }
      }, _callee3);
    }));
    return _fetchStream.apply(this, arguments);
  }
  function fetchEpg(_x4, _x5) {
    return _fetchEpg.apply(this, arguments);
  }
  function _fetchEpg() {
    _fetchEpg = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(provider, channelId) {
      var url, response, payload;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            url = "".concat(API_BASE, "/epg/").concat(encodeURIComponent(provider), "/").concat(encodeURIComponent(channelId));
            _context4.n = 1;
            return request$2(url);
          case 1:
            response = _context4.v;
            payload = response && response.data && _typeof(response.data) === 'object' ? response.data : response;
            return _context4.a(2, {
              items: payload && payload.items ? payload.items : [],
              position: typeof (payload && payload.position) === 'number' ? payload.position : 0
            });
        }
      }, _callee4);
    }));
    return _fetchEpg.apply(this, arguments);
  }
  var Tzbe = {
    fetchCatalog: fetchCatalog,
    fetchChannels: fetchChannels,
    fetchStream: fetchStream,
    fetchEpg: fetchEpg
  };

  var REPLAY_BASE$1 = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://a.maincast.tv/items';
  var REPLAY_LIMIT = 10;
  var QR_CARD_POSTER$1 = 'https://iili.io/fkdGkSj.png';
  var CATALOG_ORDER_KEY = 'tryzubtv_catalog_order';
  var CATALOG_HIDE_KEY = 'tryzubtv_catalog_hidden';
  var SOURCE_TV = 'tv';
  var SOURCE_REPLAY = 'replay';
  var PROVIDER_DYVY = 'dyvy';
  var PROVIDER_YOUTV = 'youtv';
  function request$1(url) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(url, resolve, reject);
    });
  }
  function translateCategoryName(name) {
    var raw = name || '';
    if (!raw) return '';
    var key = "tryzubtv_category_".concat(raw);
    var translated = Lampa.Lang ? Lampa.Lang.translate(key) : key;
    return translated === key ? raw : translated;
  }
  function normalizeLineId(id) {
    if (!id) return '';
    if (id.includes(':')) return id;
    return "".concat(SOURCE_TV, ":").concat(id);
  }
  function getStoredArray(key) {
    var value = Lampa.Storage ? Lampa.Storage.get(key, []) : [];
    if (Array.isArray(value)) return value.slice();
    if (typeof value === 'string') {
      try {
        var parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return value.split(',').map(function (item) {
          return item.trim();
        }).filter(Boolean);
      }
    }
    return [];
  }
  function normalizeStoredList(list) {
    var normalized = [];
    list.forEach(function (item) {
      var id = normalizeLineId(item);
      if (id) normalized.push(id);
    });
    return normalized;
  }
  function setStoredList(key, list, original) {
    if (!Lampa.Storage) return;
    var normalized = normalizeStoredList(list);
    var current = JSON.stringify(original);
    var updated = JSON.stringify(normalized);
    if (current !== updated) {
      Lampa.Storage.set(key, normalized);
    }
  }
  function getCatalogOrder() {
    var order = getStoredArray(CATALOG_ORDER_KEY);
    setStoredList(CATALOG_ORDER_KEY, order, order);
    return normalizeStoredList(order);
  }
  function getCatalogHidden() {
    var hidden = getStoredArray(CATALOG_HIDE_KEY);
    setStoredList(CATALOG_HIDE_KEY, hidden, hidden);
    return normalizeStoredList(hidden);
  }
  function sortCatalogLines(lines) {
    var order = getCatalogOrder();
    if (!order.length) {
      var tv = lines.filter(function (line) {
        return line.source === SOURCE_TV;
      });
      var replay = lines.filter(function (line) {
        return line.source === SOURCE_REPLAY;
      });
      var defaultOrder = tv.concat(replay);
      var _mergedOrder = defaultOrder.map(function (line) {
        return line.id;
      });
      if (Lampa.Storage) Lampa.Storage.set(CATALOG_ORDER_KEY, _mergedOrder);
      return defaultOrder;
    }
    var map = new Map();
    lines.forEach(function (line) {
      if (line && line.id) map.set(line.id, line);
    });
    var ordered = [];
    order.forEach(function (id) {
      var normalized = normalizeLineId(id);
      if (map.has(normalized)) {
        ordered.push(map.get(normalized));
        map["delete"](normalized);
      }
    });
    lines.forEach(function (line) {
      if (line && map.has(line.id)) {
        ordered.push(line);
        map["delete"](line.id);
      }
    });
    var mergedOrder = ordered.map(function (line) {
      return line.id;
    });
    if (Lampa.Storage && JSON.stringify(mergedOrder) !== JSON.stringify(order)) {
      Lampa.Storage.set(CATALOG_ORDER_KEY, mergedOrder);
    }
    return ordered;
  }
  function buildQrCard() {
    return {
      poster: QR_CARD_POSTER$1,
      cover: QR_CARD_POSTER$1,
      img: QR_CARD_POSTER$1,
      overview: '',
      tryzubtv_action: 'qr_modal',
      params: {
        style: {
          name: 'wide'
        }
      }
    };
  }
  function mapChannelToCard(channel, categoryKey, categoryTitle, view) {
    if (!channel || _typeof(channel) !== 'object') return null;
    var provider = channel.provider || PROVIDER_YOUTV;
    var logo = channel.logo || '';
    var banner = channel.banner || '';
    var poster = logo || banner || '';
    var cover = logo || banner || '';
    var title = translateCategoryName(categoryTitle || '');
    var styleName = view === 'category' ? 'default' : 'wide';
    if (provider === PROVIDER_DYVY) {
      var nowTitle = channel.epg_current && channel.epg_current.name ? channel.epg_current.name : '';
      var fallbackTitle = channel.name || '';
      return {
        title: nowTitle || fallbackTitle,
        poster: poster,
        cover: cover,
        img: logo || banner,
        overview: channel.description || '',
        tryzubtv_source: SOURCE_TV,
        tryzubtv_provider: PROVIDER_DYVY,
        tryzubtv_channel_id: channel.id || channel.slug || '',
        tryzubtv_slug: channel.slug || '',
        tryzubtv_link: channel.link || '',
        tryzubtv_epg: channel.epg_current || null,
        tryzubtv_type: channel.type || '',
        tryzubtv_logo: logo || banner,
        tryzubtv_now: channel.epg_current ? channel.epg_current.name : '',
        tryzubtv_category_key: categoryKey || '',
        tryzubtv_category_title: title,
        params: {
          style: {
            name: styleName
          }
        }
      };
    }
    if (provider !== PROVIDER_YOUTV) return null;
    return {
      title: channel.name || '',
      poster: poster,
      cover: cover,
      img: logo || banner,
      overview: '',
      tryzubtv_source: SOURCE_TV,
      tryzubtv_provider: PROVIDER_YOUTV,
      tryzubtv_channel_id: channel.id || channel.slug || '',
      tryzubtv_slug: channel.slug || '',
      tryzubtv_link: channel.link || '',
      tryzubtv_epg: channel.epg_current || null,
      tryzubtv_logo: logo || banner,
      tryzubtv_now: channel.epg_current ? channel.epg_current.name : '',
      tryzubtv_category_key: categoryKey || '',
      tryzubtv_category_title: title,
      params: {
        style: {
          name: styleName
        }
      }
    };
  }
  function mapReplayToCard(vod) {
    try {
      if (!vod.link || !vod.link.startsWith('http')) return null;
      var url = new URL(vod.link);
      var v = url.searchParams.get('v');
      if (!v) return null;
      var description = vod.description || '';
      var release_date = vod.date ? new Date(vod.date).toLocaleDateString() : '';
      var cover = '';
      if (vod.cover) {
        cover = vod.cover.startsWith('http') ? vod.cover : "https://a.maincast.tv/assets/".concat(vod.cover);
      } else if (vod.cover_url) {
        cover = vod.cover_url;
      } else if (vod.poster) {
        cover = vod.poster.startsWith('http') ? vod.poster : "https://a.maincast.tv/assets/".concat(vod.poster);
      }
      return {
        title: vod.name,
        cover: cover,
        poster: cover,
        overview: description,
        salo_description: description,
        salo_release_date: release_date,
        salo_vod_id: v,
        tryzubtv_source: SOURCE_REPLAY,
        params: {
          style: {
            name: 'wide'
          }
        }
      };
    } catch (e) {
      return null;
    }
  }
  function fetchReplayDisciplines() {
    return _fetchReplayDisciplines.apply(this, arguments);
  }
  function _fetchReplayDisciplines() {
    _fetchReplayDisciplines = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var url, response;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            url = "".concat(REPLAY_BASE$1, "/discipline?filter={\"category\":\"sport\"}&fields=name,id,icon");
            _context.n = 1;
            return request$1(url);
          case 1:
            response = _context.v;
            return _context.a(2, response && response.data ? response.data : []);
        }
      }, _callee);
    }));
    return _fetchReplayDisciplines.apply(this, arguments);
  }
  function buildLineMetaReplay(discipline) {
    var rawTitle = discipline && discipline.name ? discipline.name : '';
    var title = translateCategoryName(rawTitle);
    return {
      id: "".concat(SOURCE_REPLAY, ":").concat(discipline.id),
      source: SOURCE_REPLAY,
      title: title,
      rawTitle: rawTitle,
      discipline_id: discipline.id
    };
  }
  function fetchCatalogLines() {
    return _fetchCatalogLines.apply(this, arguments);
  }
  function _fetchCatalogLines() {
    _fetchCatalogLines = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$Promise$all, _yield$Promise$all2, lines, disciplines, tvLines, replayLines;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return Promise.all([Tzbe.fetchCatalog(), fetchReplayDisciplines()]);
          case 1:
            _yield$Promise$all = _context2.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            lines = _yield$Promise$all2[0];
            disciplines = _yield$Promise$all2[1];
            tvLines = (lines || []).map(function (line) {
              return {
                id: line.id || "".concat(SOURCE_TV, ":").concat(line.category_key || ''),
                source: line.source || SOURCE_TV,
                title: translateCategoryName(line.title),
                rawTitle: line.title,
                category_key: line.category_key
              };
            });
            replayLines = (disciplines || []).map(buildLineMetaReplay);
            return _context2.a(2, tvLines.concat(replayLines));
        }
      }, _callee2);
    }));
    return _fetchCatalogLines.apply(this, arguments);
  }
  function buildLineShell(meta, LineModule, index) {
    var baseParams = {
      tryzubtv_source: meta.source,
      tryzubtv_line_id: meta.id,
      tryzubtv_line_index: index,
      tryzubtv_line_title: meta.title
    };
    var params = _objectSpread2(_objectSpread2({}, baseParams), {}, {
      items: {
        view: 6
      }
    });
    if (meta.source === SOURCE_TV) {
      params.tryzubtv_category_key = meta.category_key;
      params.tryzubtv_category_title = meta.title;
      params.tryzubtv_category_raw = meta.rawTitle;
      params.more = {
        title: meta.title,
        component: 'tryzubtv_category',
        category_key: meta.category_key
      };
    } else {
      params.tryzubtv_replay_id = meta.discipline_id;
      var morePrefix = Lampa.Lang ? Lampa.Lang.translate('tryzubtv_more_videos') : 'All videos:';
      params.more = {
        title: "".concat(morePrefix, " ").concat(meta.title),
        component: 'salopower_category',
        disciplineId: meta.discipline_id
      };
    }
    if (LineModule) {
      params.module = LineModule.MASK.base;
    }
    return {
      title: meta.title,
      results: [],
      total_pages: 1,
      params: params
    };
  }
  function loadMain(_x, _x2) {
    return _loadMain.apply(this, arguments);
  }
  function _loadMain() {
    _loadMain = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(oncomplete, onerror) {
      var linesMeta, ordered, hidden, isTvEnabled, isReplayEnabled, visible, LineModule, lines, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return fetchCatalogLines();
          case 1:
            linesMeta = _context3.v;
            ordered = sortCatalogLines(linesMeta);
            hidden = getCatalogHidden();
            isTvEnabled = Lampa.Storage.get('tryzubtv_source_tv', true);
            isReplayEnabled = Lampa.Storage.get('tryzubtv_source_replay', true);
            visible = ordered.filter(function (line) {
              if (hidden.includes(line.id)) return false;
              if (line.source === SOURCE_TV) return isTvEnabled;
              if (line.source === SOURCE_REPLAY) return isReplayEnabled;
              return true;
            });
            LineModule = Lampa.Maker && Lampa.Maker.module ? Lampa.Maker.module('Line') : null;
            lines = visible.map(function (meta, index) {
              return buildLineShell(meta, LineModule, index);
            });
            oncomplete(lines);
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t = _context3.v;
            console.error('TryzubTV: loadMain failed', _t);
            onerror(_t);
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return _loadMain.apply(this, arguments);
  }
  function loadCategory$1(_x3, _x4, _x5, _x6) {
    return _loadCategory$1.apply(this, arguments);
  }
  function _loadCategory$1() {
    _loadCategory$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(categorySlug, categoryTitle, oncomplete, onerror) {
      var categoryKey, response, shortKey, title, channels, items, total, lineTitle, _t2, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            categoryKey = categorySlug || '';
            if (!categoryKey) {
              _context4.n = 2;
              break;
            }
            _context4.n = 1;
            return Tzbe.fetchChannels(categoryKey);
          case 1:
            _t2 = _context4.v;
            _context4.n = 3;
            break;
          case 2:
            _t2 = {
              items: [],
              categoryTitle: ''
            };
          case 3:
            response = _t2;
            if (!((!response.items || !response.items.length) && categoryKey.includes(':'))) {
              _context4.n = 5;
              break;
            }
            shortKey = categoryKey.split(':').pop();
            if (!shortKey) {
              _context4.n = 5;
              break;
            }
            _context4.n = 4;
            return Tzbe.fetchChannels(shortKey);
          case 4:
            response = _context4.v;
          case 5:
            title = translateCategoryName(categoryTitle || response.categoryTitle || categoryKey || '');
            channels = Array.isArray(response.items) ? response.items : [];
            items = channels.map(function (channel) {
              return mapChannelToCard(channel, categoryKey, title, 'category');
            }).filter(Boolean);
            total = items.length;
            lineTitle = total ? "".concat(title, " \xB7 ").concat(total) : title;
            oncomplete({
              title: lineTitle,
              results: items,
              total_pages: 1,
              params: {
                items: {
                  mapping: 'grid',
                  cols: 4
                },
                tryzubtv_source: SOURCE_TV,
                tryzubtv_category_key: categoryKey || '',
                tryzubtv_category_title: title,
                tryzubtv_category_total: total
              }
            });
            _context4.n = 7;
            break;
          case 6:
            _context4.p = 6;
            _t3 = _context4.v;
            console.error('TryzubTV: loadCategory failed', _t3);
            onerror(_t3);
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 6]]);
    }));
    return _loadCategory$1.apply(this, arguments);
  }
  function loadLineItems(_x7) {
    return _loadLineItems.apply(this, arguments);
  }
  function _loadLineItems() {
    _loadLineItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(lineData) {
      var params, source, categoryKey, response, title, channels, items, total, disciplineId, url, _response, vods, mapped, hasMore, _items;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            params = lineData && lineData.params || {};
            source = params.tryzubtv_source;
            if (!(source === SOURCE_TV)) {
              _context5.n = 3;
              break;
            }
            categoryKey = params.tryzubtv_category_key;
            if (categoryKey) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, {
              items: [],
              total: 0,
              total_pages: 1
            });
          case 1:
            _context5.n = 2;
            return Tzbe.fetchChannels(categoryKey);
          case 2:
            response = _context5.v;
            title = translateCategoryName(params.tryzubtv_category_raw || params.tryzubtv_category_title || response.categoryTitle || '');
            channels = Array.isArray(response.items) ? response.items : [];
            items = channels.map(function (channel) {
              return mapChannelToCard(channel, categoryKey, title, 'line');
            }).filter(Boolean);
            total = items.length;
            return _context5.a(2, {
              items: items,
              total: total,
              title: title
            });
          case 3:
            if (!(source === SOURCE_REPLAY)) {
              _context5.n = 6;
              break;
            }
            disciplineId = params.tryzubtv_replay_id;
            if (disciplineId) {
              _context5.n = 4;
              break;
            }
            return _context5.a(2, {
              items: [],
              total: 0,
              total_pages: 1
            });
          case 4:
            url = "".concat(REPLAY_BASE$1, "/vod?filter={\"discipline\":").concat(disciplineId, "}&sort=-date&limit=").concat(REPLAY_LIMIT + 1);
            _context5.n = 5;
            return request$1(url);
          case 5:
            _response = _context5.v;
            vods = (_response && _response.data ? _response.data : []).filter(function (vod) {
              return vod && vod.link && !vod.link.includes('youtube');
            });
            mapped = vods.map(mapReplayToCard).filter(Boolean);
            hasMore = mapped.length > REPLAY_LIMIT;
            _items = hasMore ? mapped.slice(0, REPLAY_LIMIT) : mapped;
            return _context5.a(2, {
              items: _items,
              total: null,
              total_pages: hasMore ? 2 : 1
            });
          case 6:
            return _context5.a(2, {
              items: [],
              total: 0,
              total_pages: 1
            });
        }
      }, _callee5);
    }));
    return _loadLineItems.apply(this, arguments);
  }
  var Api$1 = {
    loadMain: loadMain,
    loadCategory: loadCategory$1,
    loadLineItems: loadLineItems,
    fetchCatalogLines: fetchCatalogLines,
    sortCatalogLines: sortCatalogLines,
    getCatalogHidden: getCatalogHidden,
    getCatalogOrder: getCatalogOrder,
    buildQrCard: buildQrCard,
    SOURCE_TV: SOURCE_TV,
    SOURCE_REPLAY: SOURCE_REPLAY,
    PROVIDER_DYVY: PROVIDER_DYVY,
    PROVIDER_YOUTV: PROVIDER_YOUTV
  };

  function toPlaylistItems(items, fallbackTitle) {
    return (items || []).filter(function (item) {
      return item && (item.link || item.url);
    }).map(function (item) {
      return {
        title: item.name || fallbackTitle || '',
        url: item.link || item.url
      };
    });
  }
  function formatProgramTime(timestamp) {
    var date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  function renderProgramList(container, items, position) {
    container.empty();
    if (!items.length) {
      var empty = document.createElement('div');
      empty.classList.add('player-panel-iptv-item__prog-item');
      empty.innerHTML = "<span>".concat(Lampa.Lang.translate('tryzubtv_now_empty'), "</span>");
      container[0].append(empty);
      return;
    }
    var startIndex = Math.max(0, position || 0);
    var view = items.slice(startIndex, startIndex + 7);
    view.forEach(function (item, index) {
      var absoluteIndex = startIndex + index;
      var row = document.createElement('div');
      row.classList.add('player-panel-iptv-item__prog-item');
      if (absoluteIndex === position) row.classList.add('watch');
      var span = document.createElement('span');
      span.textContent = "".concat(formatProgramTime(item.start), " - ").concat(formatProgramTime(item.finish), "  ").concat(item.name);
      row.append(span);
      container[0].append(row);
    });
  }
  function getCurrentProgramIndex(items, currentItem) {
    if (!items.length) return 0;
    if (currentItem && currentItem.id) {
      var idx = items.findIndex(function (item) {
        return item.id === currentItem.id;
      });
      if (idx >= 0) return idx;
    }
    var now = Math.floor(Date.now() / 1000);
    var idxByTime = items.findIndex(function (item) {
      return item.start <= now && item.finish >= now;
    });
    return idxByTime >= 0 ? idxByTime : 0;
  }
  var streamCache = new Map();
  function getStreamCacheKey(provider, channelId) {
    return "".concat(provider || '', ":").concat(channelId || '');
  }
  function resolveStream(_x, _x2) {
    return _resolveStream.apply(this, arguments);
  }
  function _resolveStream() {
    _resolveStream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(provider, channelId) {
      var cacheKey, cached, url;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            cacheKey = getStreamCacheKey(provider, channelId);
            cached = streamCache.get(cacheKey);
            if (!(cached && cached.url)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, cached.url);
          case 1:
            _context3.n = 2;
            return Tzbe.fetchStream(provider, channelId);
          case 2:
            url = _context3.v;
            streamCache.set(cacheKey, {
              time: Date.now(),
              url: url
            });
            return _context3.a(2, url);
        }
      }, _callee3);
    }));
    return _resolveStream.apply(this, arguments);
  }
  function resolveStreamFresh(_x3, _x4) {
    return _resolveStreamFresh.apply(this, arguments);
  }
  function _resolveStreamFresh() {
    _resolveStreamFresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(provider, channelId) {
      var url, cacheKey;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return Tzbe.fetchStream(provider, channelId);
          case 1:
            url = _context4.v;
            cacheKey = getStreamCacheKey(provider, channelId);
            if (url) streamCache.set(cacheKey, {
              time: Date.now(),
              url: url
            });
            return _context4.a(2, url);
        }
      }, _callee4);
    }));
    return _resolveStreamFresh.apply(this, arguments);
  }
  function ensurePlayableUrl(_x5) {
    return _ensurePlayableUrl.apply(this, arguments);
  }
  function _ensurePlayableUrl() {
    _ensurePlayableUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(channel) {
      var fallback, fresh, _t;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (channel) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, '');
          case 1:
            fallback = channel.url || '';
            if (channel.id) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, fallback);
          case 2:
            _context5.p = 2;
            _context5.n = 3;
            return resolveStreamFresh(channel.provider, channel.id);
          case 3:
            fresh = _context5.v;
            if (!fresh) {
              _context5.n = 4;
              break;
            }
            channel.url = fresh;
            return _context5.a(2, fresh);
          case 4:
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t = _context5.v;
            console.error('TryzubTV: fresh stream resolve failed', _t);
          case 6:
            return _context5.a(2, fallback);
        }
      }, _callee5, null, [[2, 5]]);
    }));
    return _ensurePlayableUrl.apply(this, arguments);
  }
  function prefetchStreams(_x6, _x7) {
    return _prefetchStreams.apply(this, arguments);
  }
  function _prefetchStreams() {
    _prefetchStreams = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(channels, limit) {
      var queue, concurrency, index, worker, workers, i;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            queue = (channels || []).filter(function (channel) {
              return channel && channel.id && !channel.url;
            });
            if (queue.length) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            concurrency = Math.max(1, limit || 4);
            index = 0;
            worker = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
                var current, url, _t2;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.n) {
                    case 0:
                      if (!(index < queue.length)) {
                        _context6.n = 5;
                        break;
                      }
                      current = queue[index];
                      index += 1;
                      _context6.p = 1;
                      _context6.n = 2;
                      return resolveStream(current.provider, current.id);
                    case 2:
                      url = _context6.v;
                      if (url) current.url = url;
                      _context6.n = 4;
                      break;
                    case 3:
                      _context6.p = 3;
                      _t2 = _context6.v;
                      console.error('TryzubTV: stream prefetch failed', _t2);
                    case 4:
                      _context6.n = 0;
                      break;
                    case 5:
                      return _context6.a(2);
                  }
                }, _callee6, null, [[1, 3]]);
              }));
              return function worker() {
                return _ref3.apply(this, arguments);
              };
            }();
            workers = [];
            for (i = 0; i < concurrency; i += 1) {
              workers.push(worker());
            }
            _context7.n = 2;
            return Promise.all(workers);
          case 2:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return _prefetchStreams.apply(this, arguments);
  }
  function fetchCategoryChannels(_x8) {
    return _fetchCategoryChannels.apply(this, arguments);
  }
  function _fetchCategoryChannels() {
    _fetchCategoryChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(categoryKey) {
      var response, items;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return Tzbe.fetchChannels(categoryKey);
          case 1:
            response = _context8.v;
            items = response.items || [];
            return _context8.a(2, {
              title: response.categoryTitle || '',
              items: items.map(function (channel) {
                var id = channel.id || channel.slug || '';
                return {
                  provider: channel.provider || Api$1.PROVIDER_DYVY,
                  id: id,
                  name: channel.name || '',
                  slug: channel.slug || id,
                  url: channel.link || '',
                  logo: channel.logo || '',
                  epg_current: channel.epg_current || null
                };
              })
            });
        }
      }, _callee8);
    }));
    return _fetchCategoryChannels.apply(this, arguments);
  }
  function fetchChannelEpg(_x9, _x0) {
    return _fetchChannelEpg.apply(this, arguments);
  }
  function _fetchChannelEpg() {
    _fetchChannelEpg = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(provider, channelId) {
      var response, items, position;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.n = 1;
            return Tzbe.fetchEpg(provider, channelId);
          case 1:
            response = _context9.v;
            items = response.items || [];
            position = typeof response.position === 'number' ? response.position : getCurrentProgramIndex(items, null);
            return _context9.a(2, {
              items: items,
              position: position
            });
        }
      }, _callee9);
    }));
    return _fetchChannelEpg.apply(this, arguments);
  }
  function buildSingleChannel(cardData, provider, channelId, title, logo) {
    return {
      provider: provider,
      id: channelId,
      name: title,
      slug: cardData.tryzubtv_slug || channelId || '',
      url: cardData.tryzubtv_link || '',
      logo: logo,
      epg_current: cardData.tryzubtv_epg || null
    };
  }
  function normalizeIndex(value, total) {
    var index = typeof value === 'number' ? value : 0;
    if (index < 0) index = 0;
    if (index >= total) index = 0;
    return index;
  }
  function resolveStartIndex(list, startIndex, startRef) {
    var start = normalizeIndex(startIndex, list.length);
    if (!startRef || !list.length) return start;
    var targetId = startRef.id || startRef.slug || startRef.channelId || '';
    if (!targetId) return start;
    var targetProvider = startRef.provider || '';
    var matched = list.findIndex(function (channel) {
      if (String(channel.id || '') !== String(targetId)) return false;
      if (targetProvider && String(channel.provider || '') !== String(targetProvider)) return false;
      return true;
    });
    return matched >= 0 ? matched : start;
  }
  function ensureChannelUrl(_x1) {
    return _ensureChannelUrl.apply(this, arguments);
  }
  function _ensureChannelUrl() {
    _ensureChannelUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(channel) {
      var cacheKey, cached, playable;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            if (channel) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2, '');
          case 1:
            if (channel.url) {
              channel.url = String(channel.url).trim();
            }
            if (!channel.url) {
              _context0.n = 2;
              break;
            }
            return _context0.a(2, channel.url);
          case 2:
            if (channel.id) {
              _context0.n = 3;
              break;
            }
            return _context0.a(2, '');
          case 3:
            cacheKey = getStreamCacheKey(channel.provider, channel.id);
            cached = streamCache.get(cacheKey);
            if (!(cached && cached.url)) {
              _context0.n = 4;
              break;
            }
            channel.url = cached.url;
            return _context0.a(2, cached.url);
          case 4:
            _context0.n = 5;
            return ensurePlayableUrl(channel);
          case 5:
            playable = _context0.v;
            channel.url = playable || '';
            return _context0.a(2, channel.url);
        }
      }, _callee0);
    }));
    return _ensureChannelUrl.apply(this, arguments);
  }
  function resolvePlayableStartIndex(_x10, _x11) {
    return _resolvePlayableStartIndex.apply(this, arguments);
  }
  function _resolvePlayableStartIndex() {
    _resolvePlayableStartIndex = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(list, preferred) {
      var probeIndexes, total, start, maxProbe, step, next, prev, i, index, channel, playableUrl;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (list.length) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2, -1);
          case 1:
            probeIndexes = [];
            total = list.length;
            start = normalizeIndex(preferred, total);
            maxProbe = Math.min(total, 12);
            probeIndexes.push(start);
            step = 1;
          case 2:
            if (!(probeIndexes.length < maxProbe)) {
              _context1.n = 5;
              break;
            }
            next = start + step;
            prev = start - step;
            if (next < total) probeIndexes.push(next);
            if (!(probeIndexes.length >= maxProbe)) {
              _context1.n = 3;
              break;
            }
            return _context1.a(3, 5);
          case 3:
            if (prev >= 0) probeIndexes.push(prev);
            if (!(next >= total && prev < 0)) {
              _context1.n = 4;
              break;
            }
            return _context1.a(3, 5);
          case 4:
            step += 1;
            _context1.n = 2;
            break;
          case 5:
            i = 0;
          case 6:
            if (!(i < probeIndexes.length)) {
              _context1.n = 10;
              break;
            }
            index = probeIndexes[i];
            channel = list[index];
            if (channel) {
              _context1.n = 7;
              break;
            }
            return _context1.a(3, 9);
          case 7:
            _context1.n = 8;
            return ensureChannelUrl(channel);
          case 8:
            playableUrl = _context1.v;
            if (!playableUrl) {
              _context1.n = 9;
              break;
            }
            return _context1.a(2, index);
          case 9:
            i += 1;
            _context1.n = 6;
            break;
          case 10:
            return _context1.a(2, -1);
        }
      }, _callee1);
    }));
    return _resolvePlayableStartIndex.apply(this, arguments);
  }
  function playIptvList(channels, startIndex, groupTitle) {
    var epgCache = {};
    var data = {
      title: channels[startIndex].name,
      url: channels[startIndex].url,
      total: channels.length,
      position: startIndex,
      onPlay: function onPlay(selected) {
        if (!selected || !selected.id || selected.url) return;
        Lampa.Bell && Lampa.Bell.push({
          text: Lampa.Lang.translate('tryzubtv_stream_loading'),
          time: 1500
        });
        resolveStreamFresh(selected.provider, selected.id).then(function (url) {
          if (url) selected.url = url;
        })["catch"](function (error) {
          console.error('TryzubTV: stream resolve failed', error);
        });
      },
      onGetChannel: function onGetChannel(position) {
        var channel = channels[position];
        if (!channel) return null;
        var nowTitle = channel.epg_current && channel.epg_current.name ? channel.epg_current.name : channel.name;
        var selected = {
          name: nowTitle,
          group: channel.name || groupTitle,
          logo: channel.logo,
          url: channel.url,
          slug: channel.slug,
          epg_current: channel.epg_current,
          provider: channel.provider,
          id: channel.id
        };
        if (!selected.url && selected.id) {
          var _cacheKey = getStreamCacheKey(selected.provider, selected.id);
          var _cached = streamCache.get(_cacheKey);
          if (_cached && _cached.url) {
            selected.url = _cached.url;
            channel.url = _cached.url;
          }
        }
        if (!selected.id) return selected;
        var cacheKey = getStreamCacheKey(selected.provider, selected.id);
        var cached = epgCache[cacheKey];
        if (cached) {
          Lampa.Player.programReady({
            channel: selected,
            position: cached.position,
            total: cached.items.length
          });
          return selected;
        }
        fetchChannelEpg(selected.provider, selected.id).then(function (data) {
          var items = data.items || [];
          var position = typeof data.position === 'number' ? data.position : getCurrentProgramIndex(items, null);
          epgCache[cacheKey] = {
            items: items,
            position: position
          };
          Lampa.Player.programReady({
            channel: selected,
            position: position,
            total: items.length
          });
        })["catch"](function (error) {
          console.error('TryzubTV: channel epg load failed', error);
          epgCache[cacheKey] = {
            items: [],
            position: 0
          };
          Lampa.Player.programReady({
            channel: selected,
            position: 0,
            total: 0
          });
        });
        return selected;
      },
      onGetProgram: function onGetProgram(selected, position, container) {
        if (!selected || !selected.id) {
          renderProgramList(container, [], 0);
          return;
        }
        var cacheKey = getStreamCacheKey(selected.provider, selected.id);
        var cached = epgCache[cacheKey];
        if (cached) {
          var hasCachedPosition = typeof cached.position === 'number' && cached.position > 0;
          var usePosition = typeof position === 'number' && position > 0 ? position : hasCachedPosition ? cached.position : 0;
          renderProgramList(container, cached.items || [], usePosition);
          return;
        }
        renderProgramList(container, [], 0);
      },
      onPlaylistProgram: function onPlaylistProgram(selected, position) {
        if (!selected || !selected.id) return;
        var cacheKey = getStreamCacheKey(selected.provider, selected.id);
        var cached = epgCache[cacheKey];
        if (cached) {
          Lampa.Player.playlist(toPlaylistItems(cached.items || [], selected.name));
          return;
        }
        fetchChannelEpg(selected.provider, selected.id).then(function (data) {
          var items = data.items || [];
          var position = typeof data.position === 'number' ? data.position : getCurrentProgramIndex(items, null);
          epgCache[cacheKey] = {
            items: items,
            position: position
          };
          var playlist = toPlaylistItems(items, selected.name);
          if (!playlist.length) {
            Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_epg_failed'));
            return;
          }
          Lampa.Player.playlist(playlist);
        })["catch"](function (error) {
          console.error('TryzubTV: playlist load failed', error);
          Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_epg_failed'));
        });
      }
    };
    Lampa.Player.iptv(data);
  }
  function playChannelList(_x12, _x13, _x14, _x15) {
    return _playChannelList.apply(this, arguments);
  }
  function _playChannelList() {
    _playChannelList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(channels, startIndex, groupTitle, startRef) {
      var list, startByRef, playableStart, startChannel, _t3;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            list = (channels || []).map(function (channel) {
              var provider = channel.provider || Api$1.PROVIDER_DYVY;
              var id = channel.id || channel.slug || '';
              return {
                provider: provider,
                id: id,
                name: channel.name || channel.title || '',
                slug: channel.slug || id,
                url: String(channel.url || channel.link || '').trim(),
                logo: channel.logo || '',
                epg_current: channel.epg_current || null
              };
            }).filter(function (channel) {
              return channel.id || channel.url;
            });
            if (list.length) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2, false);
          case 1:
            startByRef = resolveStartIndex(list, startIndex, startRef);
            Lampa.Bell && Lampa.Bell.push({
              text: Lampa.Lang.translate('tryzubtv_stream_loading'),
              time: 1500
            });
            Lampa.Loading.start();
            _context10.p = 2;
            _context10.n = 3;
            return resolvePlayableStartIndex(list, startByRef);
          case 3:
            playableStart = _context10.v;
            if (!(playableStart < 0)) {
              _context10.n = 4;
              break;
            }
            Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_no_link'));
            return _context10.a(2, false);
          case 4:
            startChannel = list[playableStart];
            if (!(!startChannel || !startChannel.url)) {
              _context10.n = 5;
              break;
            }
            Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_no_link'));
            return _context10.a(2, false);
          case 5:
            prefetchStreams(list.slice(0, 12), 4)["catch"](function () {});
            playIptvList(list, playableStart, groupTitle);
            return _context10.a(2, true);
          case 6:
            _context10.p = 6;
            _t3 = _context10.v;
            console.error('TryzubTV: channel list play failed', _t3);
            Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_no_link'));
            return _context10.a(2, false);
          case 7:
            _context10.p = 7;
            Lampa.Loading.stop();
            return _context10.f(7);
          case 8:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 6, 7, 8]]);
    }));
    return _playChannelList.apply(this, arguments);
  }
  function playChannel(cardData) {
    if (!cardData) return;
    var provider = cardData.tryzubtv_provider || Api$1.PROVIDER_DYVY;
    var channelId = cardData.tryzubtv_channel_id || cardData.tryzubtv_slug || '';
    var title = cardData.title || '';
    var logo = cardData.tryzubtv_logo || '';
    var categoryKey = cardData.tryzubtv_category_key || '';
    var categoryTitle = cardData.tryzubtv_category_title || Lampa.Lang.translate('tryzubtv_title');
    if (channelId) {
      Lampa.Loading.start();
      Lampa.Bell && Lampa.Bell.push({
        text: Lampa.Lang.translate('tryzubtv_stream_loading'),
        time: 1500
      });
      resolveStreamFresh(provider, channelId).then(function (url) {
        Lampa.Loading.stop();
        var playableUrl = url || cardData.tryzubtv_link || '';
        if (!playableUrl) {
          Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_no_link'));
          return;
        }
        playIptvList([{
          provider: provider,
          id: channelId,
          name: title,
          slug: cardData.tryzubtv_slug || '',
          url: playableUrl,
          logo: logo,
          epg_current: cardData.tryzubtv_epg || null
        }], 0, categoryTitle);
      })["catch"](function (error) {
        Lampa.Loading.stop();
        console.error('TryzubTV: stream resolve failed', error);
        Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_no_link'));
      });
      return;
    }
    if (categoryKey) {
      Lampa.Bell && Lampa.Bell.push({
        text: Lampa.Lang.translate('tryzubtv_stream_loading'),
        time: 1500
      });
      Lampa.Loading.start();
      fetchCategoryChannels(categoryKey).then(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(payload) {
          var channels, groupTitle, startIndex;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                Lampa.Loading.stop();
                channels = payload.items || [];
                groupTitle = payload.title || categoryTitle;
                if (channels.length) {
                  _context.n = 2;
                  break;
                }
                _context.n = 1;
                return playChannelList([buildSingleChannel(cardData, provider, channelId, title, logo)], 0, groupTitle, {
                  provider: provider,
                  id: channelId
                });
              case 1:
                return _context.a(2);
              case 2:
                _context.n = 3;
                return prefetchStreams(channels, 6);
              case 3:
                startIndex = channels.findIndex(function (channel) {
                  return String(channel.id) === String(channelId);
                });
                if (startIndex < 0) startIndex = 0;
                _context.n = 4;
                return playChannelList(channels, startIndex, groupTitle, {
                  provider: provider,
                  id: channelId
                });
              case 4:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function (_x16) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(error) {
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                Lampa.Loading.stop();
                console.error('TryzubTV: category channels load failed', error);
                _context2.n = 1;
                return playChannelList([buildSingleChannel(cardData, provider, channelId, title, logo)], 0, categoryTitle, {
                  provider: provider,
                  id: channelId
                });
              case 1:
                return _context2.a(2);
            }
          }, _callee2);
        }));
        return function (_x17) {
          return _ref2.apply(this, arguments);
        };
      }());
      return;
    }
    playIptvList([{
      provider: provider,
      id: channelId,
      name: title,
      slug: cardData.tryzubtv_slug || '',
      url: cardData.tryzubtv_link,
      logo: logo,
      epg_current: cardData.tryzubtv_epg || null
    }], 0, categoryTitle);
  }
  var Player = {
    playChannel: playChannel,
    playChannelList: playChannelList
  };

  var FAVORITES_KEY = 'tryzubtv_favorites_v1';
  function normalizeKey(provider, channelId) {
    var safeProvider = provider ? String(provider) : '';
    var safeId = channelId ? String(channelId) : '';
    return "".concat(safeProvider, ":").concat(safeId);
  }
  function readList() {
    var stored = Lampa.Storage ? Lampa.Storage.get(FAVORITES_KEY, []) : [];
    if (Array.isArray(stored)) return stored.slice();
    if (typeof stored === 'string') {
      try {
        var parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return stored.split(',').map(function (item) {
          return item.trim();
        }).filter(Boolean);
      }
    }
    return [];
  }
  function writeList(list) {
    if (!Lampa.Storage) return;
    Lampa.Storage.set(FAVORITES_KEY, list);
  }
  function isFavorite(provider, channelId) {
    var key = normalizeKey(provider, channelId);
    if (!key) return false;
    var list = readList();
    return list.indexOf(key) !== -1;
  }
  function addFavorite(provider, channelId) {
    var key = normalizeKey(provider, channelId);
    if (!key) return false;
    var list = readList();
    if (list.indexOf(key) === -1) {
      list.unshift(key);
      writeList(list);
    }
    return true;
  }
  function removeFavorite(provider, channelId) {
    var key = normalizeKey(provider, channelId);
    if (!key) return false;
    var list = readList();
    var next = list.filter(function (item) {
      return item !== key;
    });
    writeList(next);
    return true;
  }
  function toggleFavorite(provider, channelId) {
    var key = normalizeKey(provider, channelId);
    if (!key) return {
      added: false,
      key: ''
    };
    var list = readList();
    var exists = list.indexOf(key) !== -1;
    if (exists) {
      writeList(list.filter(function (item) {
        return item !== key;
      }));
      return {
        added: false,
        key: key
      };
    }
    list.unshift(key);
    writeList(list);
    return {
      added: true,
      key: key
    };
  }
  function listFavorites() {
    return readList();
  }
  var Favorites = {
    normalizeKey: normalizeKey,
    isFavorite: isFavorite,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    toggleFavorite: toggleFavorite,
    listFavorites: listFavorites
  };

  function normalizeText(value) {
    return String(value || '').toLowerCase();
  }
  function capitalize(value) {
    var text = String(value || '');
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  function channelKey(channel) {
    var provider = channel.provider || channel.tryzubtv_provider || 'youtv';
    var id = channel.id || channel.slug || channel.tryzubtv_channel_id || '';
    return Favorites.normalizeKey(provider, id);
  }
  function buildSearchIndex(channel) {
    var chunks = [];
    chunks.push(channel.name || '');
    chunks.push(channel.slug || '');
    if (Array.isArray(channel.categories)) chunks.push(channel.categories.join(' '));
    if (Array.isArray(channel.categories_raw)) chunks.push(channel.categories_raw.join(' '));
    return normalizeText(chunks.join(' '));
  }
  function mapChannelCard(channel) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var provider = channel.provider || 'youtv';
    var id = channel.id || channel.slug || '';
    var logo = channel.logo || channel.banner || '';
    var categoryLabel = channel._categoryLabel || '';
    return {
      title: channel.name || '',
      poster: logo,
      cover: logo,
      img: logo,
      overview: '',
      tryzubtv_provider: provider,
      tryzubtv_channel_id: id,
      tryzubtv_slug: channel.slug || id,
      tryzubtv_link: channel.link || '',
      tryzubtv_logo: logo,
      tryzubtv_categories: channel.categories || [],
      tryzubtv_category_label: categoryLabel,
      tryzubtv_category_key: context.categoryKey || '',
      tryzubtv_category_title: context.categoryTitle || '',
      params: {
        style: {
          name: 'default'
        }
      }
    };
  }
  function component$5() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var activity;
    var html;
    var header;
    var searchButton;
    var filterAll;
    var categoryButton;
    var body;
    var scroll;
    var items = [];
    var filtered = [];
    var cards = [];
    var last;
    var headLast;
    var searchQuery = '';
    var showFavorites = false;
    var categoryKey = '';
    var categoryMap = {};
    var totalCount = 0;
    var playLock = false;
    var playLockTimer = null;
    function setLoading(state) {
      if (activity) activity.loader(state);
    }
    function updateSearchLabel() {
      var placeholder = Lampa.Lang.translate('tryzubtv_search_placeholder');
      var text = searchQuery ? searchQuery : placeholder;
      searchButton.toggleClass('filled', Boolean(searchQuery));
      searchButton.find('div').text(text);
    }
    function updateFilterButtons() {
      var allLabel = "".concat(Lampa.Lang.translate('tryzubtv_all'), " \xB7 ").concat(totalCount);
      filterAll.find('div').text(allLabel);
      filterAll.toggleClass('active', !showFavorites && !categoryKey);
      if (categoryButton) categoryButton.toggleClass('hide', showFavorites);
    }
    function filterChannels() {
      var base = showFavorites ? items.filter(function (channel) {
        return Favorites.isFavorite(channel.provider, channel.id || channel.slug);
      }) : items;
      if (categoryKey) {
        base = base.filter(function (channel) {
          return Array.isArray(channel.categories) && channel.categories.indexOf(categoryKey) !== -1;
        });
      }
      if (!searchQuery) return base;
      var query = normalizeText(searchQuery);
      return base.filter(function (channel) {
        return channel._searchIndex && channel._searchIndex.indexOf(query) !== -1;
      });
    }
    function clearCards() {
      cards.forEach(function (card) {
        return card.destroy();
      });
      cards = [];
      body.empty();
      last = null;
    }
    function lockPlay() {
      var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
      playLock = true;
      if (playLockTimer) clearTimeout(playLockTimer);
      playLockTimer = setTimeout(function () {
        playLock = false;
        playLockTimer = null;
      }, ms);
    }
    function renderEmpty(message) {
      var empty = $("<div class=\"tryzubtv-tv__empty\">".concat(message, "</div>"));
      body.append(empty);
    }
    function renderLogoBackground(render) {
      var img = render.querySelector('.card__img');
      if (!img) return;
      var canSampleImage = function canSampleImage() {
        var src = img.currentSrc || img.src || '';
        if (!src) return false;
        if (src.indexOf('data:') === 0 || src.indexOf('blob:') === 0) return true;
        try {
          var link = document.createElement('a');
          link.href = src;
          var origin = "".concat(link.protocol, "//").concat(link.host);
          return origin === window.location.origin;
        } catch (error) {
          return false;
        }
      };
      var apply = function apply() {
        if (!canSampleImage()) {
          fallback();
          return;
        }
        try {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var size = 24;
          canvas.width = size;
          canvas.height = size;
          ctx.drawImage(img, 0, 0, size, size);
          var data = ctx.getImageData(0, 0, size, size).data;
          var r = 0;
          var g = 0;
          var b = 0;
          var count = 0;
          for (var i = 0; i < data.length; i += 4) {
            var alpha = data[i + 3];
            if (alpha < 20) continue;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count += 1;
          }
          if (!count) return;
          r = Math.round(r / count);
          g = Math.round(g / count);
          b = Math.round(b / count);
          var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          var bg = {
            r: r,
            g: g,
            b: b
          };
          if (luminance < 60) {
            bg = {
              r: 78,
              g: 78,
              b: 78
            };
          } else if (luminance > 200) {
            bg = {
              r: 28,
              g: 28,
              b: 28
            };
          } else {
            var mix = 0.45;
            var base = 22;
            bg = {
              r: Math.round(r * mix + base * (1 - mix)),
              g: Math.round(g * mix + base * (1 - mix)),
              b: Math.round(b * mix + base * (1 - mix))
            };
          }
          var dark = {
            r: Math.max(14, Math.round(bg.r * 0.8)),
            g: Math.max(14, Math.round(bg.g * 0.8)),
            b: Math.max(14, Math.round(bg.b * 0.8))
          };
          render.style.setProperty('--tryzubtv-logo-bg', "rgb(".concat(bg.r, ", ").concat(bg.g, ", ").concat(bg.b, ")"));
          render.style.setProperty('--tryzubtv-logo-bg-dark', "rgb(".concat(dark.r, ", ").concat(dark.g, ", ").concat(dark.b, ")"));
        } catch (error) {}
      };
      var fallback = function fallback() {
        render.style.setProperty('--tryzubtv-logo-bg', 'rgb(54, 54, 54)');
        render.style.setProperty('--tryzubtv-logo-bg-dark', 'rgb(38, 38, 38)');
      };
      if (img.complete) apply();else img.addEventListener('load', apply, {
        once: true
      });
      img.addEventListener('error', fallback, {
        once: true
      });
    }
    function renderCards(list) {
      clearCards();
      filtered = list;
      if (!list.length) {
        var emptyText = showFavorites ? Lampa.Lang.translate('tryzubtv_favorites_empty') : searchQuery ? Lampa.Lang.translate('tryzubtv_search_empty') : Lampa.Lang.translate('tryzubtv_empty');
        renderEmpty(emptyText);
        Lampa.Layer.visible(scroll.render(true));
        return;
      }
      var fragment = document.createDocumentFragment();
      list.forEach(function (channel, index) {
        var data = mapChannelCard(channel);
        var card = Lampa.Maker.make('Card', data);
        card.create();
        var render = card.render(true);
        render.classList.add('card--tryzubtv');
        render.classList.add('card--tryzubtv-tv');
        renderLogoBackground(render);
        if (data.tryzubtv_category_label) {
          var label = document.createElement('div');
          label.classList.add('tryzubtv-tv__category');
          label.textContent = data.tryzubtv_category_label;
          render.appendChild(label);
        }
        $(render).on('hover:focus', function () {
          last = render;
          scroll.update(render, false);
        });
        $(render).on('hover:enter', function () {
          playFromList(index);
        });
        $(render).on('hover:long', function (event) {
          if (event && event.stopPropagation) event.stopPropagation();
          if (event && event.preventDefault) event.preventDefault();
          toggleFavorite(channel);
          return false;
        });
        render.addEventListener('contextmenu', function (event) {
          if (event && event.preventDefault) event.preventDefault();
        });
        fragment.appendChild(render);
        cards.push(card);
      });
      body.append(fragment);
      if (cards.length) last = cards[0].render(true);
      Lampa.Layer.visible(scroll.render(true));
      if (Lampa.Controller.enabled().name === 'content') {
        Lampa.Controller.collectionSet(body);
        Lampa.Controller.collectionFocus(last || false, body);
      }
    }
    function getCategoryTitleByKey(key) {
      if (!key) return '';
      var isUkrainian = Lampa.Storage ? Lampa.Storage.get('language', 'ru') === 'uk' : false;
      if (isUkrainian && categoryMap[key]) return categoryMap[key];
      return categoryMap[key] || capitalize(key);
    }
    function applyFilters() {
      var list = filterChannels();
      renderCards(list);
    }
    function setSearch(query) {
      searchQuery = String(query || '').trim();
      updateSearchLabel();
      applyFilters();
    }
    function openSearch() {
      Lampa.Controller.add('settings_component', {
        toggle: function toggle() {
          Lampa.Controller.toggle('tryzubtv_tv_head');
        },
        back: function back() {
          Lampa.Controller.toggle('tryzubtv_tv_head');
        }
      });
      Lampa.Input.edit({
        title: Lampa.Lang.translate('tryzubtv_search_placeholder'),
        value: searchQuery,
        free: true,
        nosave: true,
        align: 'center'
      }, function (value) {
        setSearch(value);
        Lampa.Controller.toggle('tryzubtv_tv_head');
      });
    }
    function toggleFavorite(channel) {
      var result = Favorites.toggleFavorite(channel.provider, channel.id || channel.slug);
      Lampa.Noty.show(result.added ? Lampa.Lang.translate('tryzubtv_favorite_added') : Lampa.Lang.translate('tryzubtv_favorite_removed'));
      if (showFavorites) {
        applyFilters();
      }
    }
    function loadChannels() {
      return _loadChannels.apply(this, arguments);
    }
    function _loadChannels() {
      _loadChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$Promise$allSet, _yield$Promise$allSet2, listState, catalogState, list, catalog, isUkrainian, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setLoading(true);
              _context.p = 1;
              _context.n = 2;
              return Promise.allSettled([TvApi.fetchAllChannels(false), TvApi.fetchCatalogLines(false)]);
            case 2:
              _yield$Promise$allSet = _context.v;
              _yield$Promise$allSet2 = _slicedToArray(_yield$Promise$allSet, 2);
              listState = _yield$Promise$allSet2[0];
              catalogState = _yield$Promise$allSet2[1];
              list = listState.status === 'fulfilled' ? listState.value : [];
              catalog = catalogState.status === 'fulfilled' ? catalogState.value : [];
              if (listState.status === 'rejected') {
                console.error('TryzubTV: tv channels request failed', listState.reason);
              }
              if (catalogState.status === 'rejected') {
                console.error('TryzubTV: tv catalog request failed', catalogState.reason);
              }
              categoryMap = {};
              (catalog || []).forEach(function (line) {
                if (line && line.source === 'tv' && line.category_key) {
                  categoryMap[line.category_key] = line.title || line.category_key;
                }
              });
              isUkrainian = Lampa.Storage ? Lampa.Storage.get('language', 'ru') === 'uk' : false;
              items = list.map(function (channel) {
                var provider = channel.provider || 'youtv';
                var id = channel.id || channel.slug || '';
                var primaryKey = Array.isArray(channel.categories) && channel.categories.length ? channel.categories[0] : '';
                var categoryLabel = primaryKey ? isUkrainian && categoryMap[primaryKey] ? categoryMap[primaryKey] : capitalize(primaryKey) : '';
                var normalized = _objectSpread2(_objectSpread2({}, channel), {}, {
                  provider: provider,
                  id: id,
                  _key: channelKey(channel),
                  _searchIndex: buildSearchIndex(channel),
                  _categoryLabel: categoryLabel
                });
                return normalized;
              });
              totalCount = items.length;
              updateFilterButtons();
              applyFilters();
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('TryzubTV: tv channels load failed', _t);
              renderCards([]);
            case 4:
              _context.p = 4;
              setLoading(false);
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }));
      return _loadChannels.apply(this, arguments);
    }
    function playFromList(_x) {
      return _playFromList.apply(this, arguments);
    }
    function _playFromList() {
      _playFromList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(index) {
        var channel, fallbackCard, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!playLock) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              if (!(Lampa.Player && typeof Lampa.Player.opened === 'function' && Lampa.Player.opened())) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              lockPlay(2500);
              if (filtered.length) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
              channel = filtered[index];
              if (channel) {
                _context2.n = 4;
                break;
              }
              return _context2.a(2);
            case 4:
              _context2.p = 4;
              Player.playChannel(mapChannelCard(channel));
              return _context2.a(2);
            case 5:
              _context2.p = 5;
              _t2 = _context2.v;
              console.error('TryzubTV: play failed', _t2);
              fallbackCard = mapChannelCard(channel, {
                categoryKey: categoryKey,
                categoryTitle: getCategoryTitleByKey(categoryKey)
              });
              Player.playChannel(fallbackCard);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[4, 5]]);
      }));
      return _playFromList.apply(this, arguments);
    }
    function openCategoryFilter() {
      var restoreHeaderFocus = function restoreHeaderFocus() {
        headLast = categoryButton ? categoryButton[0] : headLast;
        setTimeout(function () {
          Lampa.Controller.toggle('tryzubtv_tv_head');

          // Select closes asynchronously; force focus again after close animation.
          setTimeout(function () {
            Lampa.Controller.collectionSet(header);
            Lampa.Controller.collectionFocus(headLast || searchButton[0], header);
          }, 60);
        }, 0);
      };
      var isUkrainian = Lampa.Storage ? Lampa.Storage.get('language', 'ru') === 'uk' : false;
      var items = [];
      items.push({
        title: Lampa.Lang.translate('tryzubtv_all_categories'),
        key: '',
        selected: !categoryKey
      });
      Object.keys(categoryMap).forEach(function (key) {
        var title = isUkrainian && categoryMap[key] ? categoryMap[key] : capitalize(key);
        items.push({
          title: title,
          key: key,
          selected: key === categoryKey
        });
      });
      Lampa.Select.show({
        title: Lampa.Lang.translate('tryzubtv_filter_category'),
        items: items,
        onSelect: function onSelect(item) {
          categoryKey = item.key || '';
          categoryButton.find('div').text(categoryKey ? item.title : Lampa.Lang.translate('tryzubtv_filter_category'));
          applyFilters();
          restoreHeaderFocus();
        },
        onBack: function onBack() {
          restoreHeaderFocus();
        }
      });
    }
    function createHeader() {
      header = $('<div class="tryzubtv-tv__header"></div>');
      searchButton = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector tryzubtv-tv__search\">" + "<div>".concat(Lampa.Lang.translate('tryzubtv_search_placeholder'), "</div>") + "</div>");
      searchButton.on('hover:enter', openSearch);
      searchButton.on('hover:focus', function () {
        headLast = searchButton[0];
      });
      var filters = $('<div class="tryzubtv-tv__filters"></div>');
      filterAll = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector\">" + "<div>".concat(Lampa.Lang.translate('tryzubtv_all'), "</div>") + "</div>");
      categoryButton = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector\">" + "<div>".concat(Lampa.Lang.translate('tryzubtv_filter_category'), "</div>") + "</div>");
      filterAll.on('hover:enter', function () {
        showFavorites = false;
        categoryKey = '';
        searchQuery = '';
        if (categoryButton) categoryButton.find('div').text(Lampa.Lang.translate('tryzubtv_filter_category'));
        updateSearchLabel();
        updateFilterButtons();
        applyFilters();
      });
      categoryButton.on('hover:enter', function () {
        openCategoryFilter();
      });
      filterAll.on('hover:focus', function () {
        headLast = filterAll[0];
      });
      categoryButton.on('hover:focus', function () {
        headLast = categoryButton[0];
      });
      searchButton.on('hover:focus', function () {
        headLast = searchButton[0];
      });

      // Favorites filter is temporarily hidden from UI.
      filters.append(filterAll, categoryButton, searchButton);
      header.append(filters);
    }
    function ensureControllers() {
      Lampa.Controller.add('tryzubtv_tv_head', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(header);
          Lampa.Controller.collectionFocus(headLast || searchButton[0], header);
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          Lampa.Controller.toggle('content');
        },
        up: function up() {
          if (object.onHead) object.onHead();else Lampa.Controller.toggle('head');
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
    }
    function bindScroll() {
      scroll.onScroll = function () {
        Lampa.Layer.visible(scroll.render(true));
      };
    }
    return {
      create: function create() {
        activity = this.activity;
        html = $('<div class="tryzubtv-tv"></div>');
        body = $('<div class="tryzubtv-tv__body mapping--grid cols--4"></div>');
        scroll = new Lampa.Scroll({
          mask: true,
          over: true,
          step: 250,
          end_ratio: 2
        });
        createHeader();
        updateSearchLabel();
        updateFilterButtons();
        scroll.append(body);
        html.append(header, scroll.render());
        scroll.minus(header);
        bindScroll();
        ensureControllers();
        loadChannels();
        return this.render();
      },
      render: function render(js) {
        return js ? html[0] : html;
      },
      start: function start() {
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
            Navigator.move('right');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('tryzubtv_tv_head');
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
        if (playLockTimer) clearTimeout(playLockTimer);
        playLockTimer = null;
        playLock = false;
        if (scroll) scroll.destroy();
        if (html) html.remove();
      }
    };
  }

  var QR_URL = 'https://lampame.donatik.me';
  var QR_TEXT = "<a href=\"".concat(QR_URL, "\">\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F</a>");
  var QR_BODY = 'Донат автору плагіну TryzubTV добровільний, на розвиток якого витрачено багато часу та сил.';
  var QR_CARD_POSTER = 'https://iili.io/fkdGkSj.png';
  function openQrModal() {
    var html = $('<div class="tryzubtv-qr-modal" style="display:flex;flex-direction:column;gap:1.2em;align-items:center;text-align:center;">' + '<div class="account-modal-split__info" style="max-width:28em;">' + //`<div class="account-modal-split__title">${QR_TITLE}</div>` +
    "<div class=\"account-modal-split__text\"><img src=\"".concat(QR_CARD_POSTER, "\" class=\"tryzubtv-qr-modal__img\"><br />").concat(QR_BODY, "</div>") + '</div>' + '<div class="account-modal-split__qr">' + '<div class="account-modal-split__qr-code" style="margin-bottom:0;width: 13em;height: 13em;"></div>' + "<div class=\"account-modal-split__qr-text\">".concat(QR_TEXT, "</div>") + '</div>' + '</div>');
    var qrElement = html.find('.account-modal-split__qr-code');
    Lampa.Utils.qrcode(QR_URL, qrElement, function (error) {
      console.error(error);
    });
    var svg = qrElement.find('svg');
    if (svg[0]) {
      svg[0].style.setProperty('width', '12em', 'important');
      svg[0].style.setProperty('height', '12em', 'important');
    }
    var enabledController = Lampa.Controller.enabled().name;
    Lampa.Modal.open({
      title: '',
      html: html,
      size: 'medium',
      onBack: function onBack() {
        Lampa.Modal.close();
        Lampa.Controller.toggle(enabledController);
      }
    });
  }

  var SocketManager = function () {
    var instance;
    var socket;
    var key;
    function createInstance() {
      var connect = function connect() {
        return new Promise(function (resolve, reject) {
          if (socket && socket.readyState === WebSocket.OPEN && key) {
            return resolve(key);
          }
          if (socket && socket.readyState === WebSocket.CONNECTING) {
            socket.onmessage = function (event) {
              handleMessage(event, resolve, reject);
            };
            return;
          }
          socket = new WebSocket('wss://vod-maincast.cosmonova-broadcast.tv/ws');
          socket.onopen = function () {
            console.log('TryzubTV: WebSocket connected');
          };
          socket.onmessage = function (event) {
            handleMessage(event, resolve, reject);
          };
          socket.onerror = function () {
            console.error('TryzubTV: WebSocket error');
            reject('TryzubTV: WebSocket error');
            disconnect();
          };
          socket.onclose = function () {
            console.log('TryzubTV: WebSocket disconnected');
            socket = null;
            key = null;
          };
        });
      };
      var handleMessage = function handleMessage(event, resolve, reject) {
        try {
          var data = JSON.parse(event.data);
          if (data.type === 'auth' && data.payload && data.payload.hash) {
            key = data.payload.hash;
            console.log('TryzubTV: Key received');
            resolve(key);
          } else {
            reject('TryzubTV: Invalid auth response');
          }
        } catch (e) {
          reject('TryzubTV: Failed to parse message');
        }
      };
      var disconnect = function disconnect() {
        if (socket) socket.close();
      };
      var listen = function listen() {
        Lampa.Player.listener.follow('destroy', function () {
          console.log('TryzubTV: Player destroyed, closing socket.');
          disconnect();
        });
      };
      return {
        connect: connect,
        disconnect: disconnect,
        listen: listen
      };
    }
    return {
      getInstance: function getInstance() {
        if (!instance) instance = createInstance();
        return instance;
      }
    };
  }();

  function appendReplayOverlay$1(cardItem, cardData) {
    try {
      var cardElement = cardItem.render ? cardItem.render(true) : null;
      if (!cardElement) return;
      var $card = $(cardElement);
      var card_view = $card.find('.card__view');
      if (!card_view.length || !cardData) return;
      var title = cardData.title || '';
      var desc = cardData.salo_description || cardData.description || '';
      var date = cardData.salo_release_date || cardData.release_date || '';
      if (!title && !desc && !date) return;
      $card.addClass('card--salopower');
      var tpl = Lampa.Template.get('salopower_episode_card_data', {
        title: title,
        salo_description: desc,
        salo_release_date: date
      });
      card_view.append(tpl);
    } catch (e) {
      console.error('TryzubTV: replay card overlay error', e);
    }
  }
  function playReplay$1(_x) {
    return _playReplay$1.apply(this, arguments);
  }
  function _playReplay$1() {
    _playReplay$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(cardData) {
      var socket, key, newLink, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(!cardData || !cardData.salo_vod_id)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            Lampa.Loading.start();
            _context.p = 2;
            socket = SocketManager.getInstance();
            _context.n = 3;
            return socket.connect();
          case 3:
            key = _context.v;
            newLink = "https://vod-maincast.cosmonova-broadcast.tv/".concat(cardData.salo_vod_id, "/master.m3u8?key=").concat(key);
            Lampa.Player.play({
              title: cardData.title,
              url: newLink
            });
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('TryzubTV: replay playback failed', _t);
            Lampa.Noty.show('Не вдалося отримати ключ для відтворення.');
          case 5:
            _context.p = 5;
            Lampa.Loading.stop();
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return _playReplay$1.apply(this, arguments);
  }
  function loadLineContent$1(lineItem, lineData) {
    if (!lineItem || !lineData || lineData.tryzubtv_loaded) return;
    lineData.tryzubtv_loaded = true;
    Api$1.loadLineItems(lineData).then(function (payload) {
      var items = payload.items || [];
      var total = payload.total;
      var view = 6;
      var totalCount = typeof total === 'number' ? total : items.length;
      var hasMore = totalCount > view;
      var totalPages = hasMore ? 2 : 1;
      if (!items.length) {
        lineItem.destroy();
        return;
      }
      lineData.results = items.slice(0, view);
      lineData.total_pages = totalPages;
      var initial = lineData.results.slice(0, view);
      initial.forEach(function (element) {
        lineItem.emit('createAndAppend', element);
      });
      if (totalPages > 1) {
        lineItem.emit('scroll');
      }
    })["catch"](function (error) {
      console.error('TryzubTV: replay line load failed', error);
      lineData.tryzubtv_loaded = false;
    });
  }
  function component$4() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var comp = Lampa.Maker.make('Main', object);
    var mainInstance;
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.render().addClass('tryzubtv-activity');
        this.activity.render().addClass('tryzubtv-replay');
        mainInstance = this;
        this.activity.loader(true);
        Api$1.loadMain(function (lines) {
          var replayLines = (lines || []).filter(function (line) {
            return line && line.params && line.params.tryzubtv_source === Api$1.SOURCE_REPLAY;
          });
          if (replayLines && replayLines.length) _this.build(replayLines);else _this.empty();
          _this.activity.loader(false);
        }, function () {
          _this.activity.loader(false);
          _this.empty();
        });
      },
      onBack: function onBack() {
        Lampa.Activity.backward();
      },
      onUp: function onUp() {
        this.active -= 1;
        if (this.active < 0) {
          this.active = 0;
          if (object.onHead && typeof object.onHead === 'function') object.onHead();else Lampa.Controller.toggle('head');
        } else if (this.items && this.items[this.active]) {
          this.items[this.active].toggle();
        }
      },
      onController: function onController(controller) {
        if (object.onHead && typeof object.onHead === 'function') {
          controller.up = function () {
            var atTop = Boolean(mainInstance && mainInstance.scroll && typeof mainInstance.scroll.position === 'function' && mainInstance.scroll.position() <= 0);
            if (atTop) {
              object.onHead();
              return;
            }
            if (Navigator.canmove('up')) Navigator.move('up');else object.onHead();
          };
        }
      },
      onInstance: function onInstance(lineItem, lineData) {
        var params = lineData.params || {};
        var lineIndex = typeof params.tryzubtv_line_index === 'number' ? params.tryzubtv_line_index : 0;
        var forceVisible = lineIndex < 4;
        lineData.tryzubtv_force_visible = forceVisible;
        lineItem.use({
          onVisible: function onVisible() {
            loadLineContent$1(lineItem, lineData);
          },
          onPush: function onPush(item) {
            if (lineData.tryzubtv_force_visible && item && typeof item.visible === 'function') {
              item.visible();
            }
          },
          onMore: function onMore() {
            var more = params.more || {};
            if (more.component === 'salopower_category' && more.disciplineId) {
              Lampa.Activity.push({
                url: '',
                title: more.title || lineData.title || Lampa.Lang.translate('tryzubtv_title'),
                component: 'salopower_category',
                disciplineId: more.disciplineId
              });
              return;
            }
            if (!more.category_key) return;
            Lampa.Activity.push({
              url: '',
              title: more.title || lineData.title || Lampa.Lang.translate('tryzubtv_title'),
              component: 'tryzubtv_category',
              category_key: more.category_key,
              category_title: more.title || lineData.title || '',
              params: {
                empty: {
                  title: more.title || Lampa.Lang.translate('tryzubtv_title'),
                  descr: Lampa.Lang.translate('tryzubtv_empty')
                }
              }
            });
          },
          onInstance: function onInstance(cardItem, cardData) {
            cardItem.use({
              onCreate: function onCreate() {
                if (this.html && this.html.classList) {
                  this.html.classList.add('card--tryzubtv');
                }
                if (cardData && cardData.salo_vod_id) {
                  appendReplayOverlay$1(cardItem, cardData);
                }
              },
              onEnter: function onEnter() {
                if (cardData && cardData.tryzubtv_action === 'qr_modal') {
                  openQrModal();
                  return;
                }
                if (cardData && cardData.salo_vod_id) {
                  playReplay$1(cardData);
                  return;
                }
                Player.playChannel(cardData);
              },
              onMenu: function onMenu() {
                return false;
              }
            });
          }
        });
        if (forceVisible) {
          setTimeout(function () {
            loadLineContent$1(lineItem, lineData);
          }, 0);
        }
      }
    });
    return comp;
  }

  function component$3() {
    var activity;
    var html;
    var navigation;
    var body;
    var views = {};
    var activeTab = 'tv';
    function buildTabs() {
      navigation = $('<div class="tryzubtv-hub__tabs"></div>');
      var tabs = [{
        id: 'tv',
        title: Lampa.Lang.translate('tryzubtv_tab_tv')
      }, {
        id: 'replay',
        title: Lampa.Lang.translate('tryzubtv_tab_replay')
      }];
      tabs.forEach(function (tab, index) {
        var button = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector tryzubtv-hub__tab\">" + "<div>".concat(tab.title, "</div>") + "</div>");
        if (tab.id === activeTab) button.addClass('active');
        button.on('hover:enter', function () {
          switchTab(tab.id);
        });
        navigation.append(button);
      });
    }
    function updateTabs() {
      navigation.find('.tryzubtv-hub__tab').removeClass('active');
      var index = activeTab === 'tv' ? 0 : 1;
      navigation.find('.tryzubtv-hub__tab').eq(index).addClass('active');
    }
    function getView(tabId) {
      if (views[tabId]) return views[tabId];
      var onHead = function onHead() {
        Lampa.Controller.toggle('tryzubtv_tabs');
      };
      var view = tabId === 'tv' ? component$5({
        onHead: onHead
      }) : component$4({
        onHead: onHead
      });
      view.activity = activity;
      view.create();
      var render = view.render(true);
      render.classList.add('tryzubtv-hub__view');
      render.classList.add("tryzubtv-hub__view--".concat(tabId));
      body.append(render);
      views[tabId] = view;
      return view;
    }
    function hideView(view) {
      if (!view) return;
      var render = view.render(true);
      render.classList.add('hide');
      if (view.pause) view.pause();
    }
    function showView(view) {
      if (!view) return;
      var render = view.render(true);
      render.classList.remove('hide');
      if (view.start) view.start();
    }
    function switchTab(tabId) {
      if (tabId === activeTab) {
        Lampa.Controller.toggle('content');
        return;
      }
      var current = views[activeTab];
      hideView(current);
      activeTab = tabId;
      updateTabs();
      var next = getView(tabId);
      showView(next);
    }
    function ensureTabsController() {
      Lampa.Controller.add('tryzubtv_tabs', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(navigation);
          var index = activeTab === 'tv' ? 0 : 1;
          var button = navigation.find('.tryzubtv-hub__tab').eq(index)[0];
          Lampa.Controller.collectionFocus(button, navigation);
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          Lampa.Controller.toggle('content');
        },
        up: function up() {
          Lampa.Controller.toggle('head');
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
    }
    return {
      create: function create() {
        activity = this.activity;
        activity.render().addClass('tryzubtv-activity');
        activity.render().addClass('tryzubtv-hub-activity');
        html = $('<div class="tryzubtv-hub"></div>');
        body = $('<div class="tryzubtv-hub__body"></div>');
        buildTabs();
        html.append(navigation, body);
        ensureTabsController();
        var initial = getView(activeTab);
        showView(initial);
        return this.render();
      },
      render: function render() {
        return html;
      },
      start: function start() {
        var current = getView(activeTab);
        if (current && current.start) current.start();
      },
      pause: function pause() {
        var current = views[activeTab];
        if (current && current.pause) current.pause();
      },
      destroy: function destroy() {
        Object.values(views).forEach(function (view) {
          if (view && view.destroy) view.destroy();
        });
        if (html) html.remove();
        views = {};
      }
    };
  }

  function appendReplayOverlay(cardItem, cardData) {
    try {
      var cardElement = cardItem.render ? cardItem.render(true) : null;
      if (!cardElement) return;
      var $card = $(cardElement);
      var card_view = $card.find('.card__view');
      if (!card_view.length || !cardData) return;
      var title = cardData.title || '';
      var desc = cardData.salo_description || cardData.description || '';
      var date = cardData.salo_release_date || cardData.release_date || '';
      if (!title && !desc && !date) return;
      $card.addClass('card--salopower');
      var tpl = Lampa.Template.get('salopower_episode_card_data', {
        title: title,
        salo_description: desc,
        salo_release_date: date
      });
      card_view.append(tpl);
    } catch (e) {
      console.error('TryzubTV: replay card overlay error', e);
    }
  }
  function playReplay(_x) {
    return _playReplay.apply(this, arguments);
  }
  function _playReplay() {
    _playReplay = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(cardData) {
      var socket, key, newLink, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(!cardData || !cardData.salo_vod_id)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            Lampa.Loading.start();
            _context.p = 2;
            socket = SocketManager.getInstance();
            _context.n = 3;
            return socket.connect();
          case 3:
            key = _context.v;
            newLink = "https://vod-maincast.cosmonova-broadcast.tv/".concat(cardData.salo_vod_id, "/master.m3u8?key=").concat(key);
            Lampa.Player.play({
              title: cardData.title,
              url: newLink
            });
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('TryzubTV: replay playback failed', _t);
            Lampa.Noty.show('Не вдалося отримати ключ для відтворення.');
          case 5:
            _context.p = 5;
            Lampa.Loading.stop();
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return _playReplay.apply(this, arguments);
  }
  function loadLineContent(lineItem, lineData) {
    if (!lineItem || !lineData || lineData.tryzubtv_loaded) return;
    lineData.tryzubtv_loaded = true;
    Api$1.loadLineItems(lineData).then(function (payload) {
      var items = payload.items || [];
      var total = payload.total;
      var view = 6;
      var totalCount = typeof total === 'number' ? total : items.length;
      var hasMore = totalCount > view;
      var totalPages = hasMore ? 2 : 1;
      if (!items.length) {
        lineItem.destroy();
        return;
      }
      lineData.results = items.slice(0, view);
      lineData.total_pages = totalPages;
      if (payload.title && lineData.params && lineData.params.tryzubtv_source === Api$1.SOURCE_TV) {
        lineData.params.tryzubtv_category_title = payload.title;
      }
      if (typeof total === 'number' && total > 0 && lineData.params && lineData.params.tryzubtv_source === Api$1.SOURCE_TV) {
        var title = lineData.params.tryzubtv_category_title || lineData.title;
        var newTitle = "".concat(title, " \xB7 ").concat(total);
        lineData.title = newTitle;
        var titleNode = lineItem.render().find('.items-line__title');
        if (titleNode.length) titleNode.text(newTitle);
      }
      if (lineData.params && lineData.params.tryzubtv_line_index === 0 && !lineData.tryzubtv_qr_added) {
        var donateEnabled = Lampa.Storage.get('tryzubtv_donate_card', true);
        if (donateEnabled) {
          lineData.results.unshift(Api$1.buildQrCard());
          lineData.results = lineData.results.slice(0, view);
        }
        lineData.tryzubtv_qr_added = true;
      }
      var initial = lineData.results.slice(0, view);
      initial.forEach(function (element) {
        lineItem.emit('createAndAppend', element);
      });
      if (totalPages > 1) {
        lineItem.emit('scroll');
      }
    })["catch"](function (error) {
      console.error('TryzubTV: line load failed', error);
      lineData.tryzubtv_loaded = false;
    });
  }
  function component$2(object) {
    var comp = Lampa.Maker.make('Main', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.render().addClass('tryzubtv-activity');
        this.activity.render().addClass('tryzubtv-main');
        this.activity.loader(true);
        Api$1.loadMain(function (lines) {
          if (lines && lines.length) _this.build(lines);else _this.empty();
          _this.activity.loader(false);
        }, function () {
          _this.activity.loader(false);
          _this.empty();
        });
      },
      onBack: function onBack() {
        Lampa.Activity.backward();
      },
      onInstance: function onInstance(lineItem, lineData) {
        var params = lineData.params || {};
        var lineIndex = typeof params.tryzubtv_line_index === 'number' ? params.tryzubtv_line_index : 0;
        var forceVisible = lineIndex < 4;
        lineData.tryzubtv_force_visible = forceVisible;
        lineItem.use({
          onVisible: function onVisible() {
            loadLineContent(lineItem, lineData);
          },
          onPush: function onPush(item) {
            if (lineData.tryzubtv_force_visible && item && typeof item.visible === 'function') {
              item.visible();
            }
          },
          onMore: function onMore() {
            var more = params.more || {};
            if (more.component === 'salopower_category' && more.disciplineId) {
              Lampa.Activity.push({
                url: '',
                title: more.title || lineData.title || Lampa.Lang.translate('tryzubtv_title'),
                component: 'salopower_category',
                disciplineId: more.disciplineId
              });
              return;
            }
            if (!more.category_key) return;
            Lampa.Activity.push({
              url: '',
              title: more.title || lineData.title || Lampa.Lang.translate('tryzubtv_title'),
              component: 'tryzubtv_category',
              category_key: more.category_key,
              category_title: more.title || lineData.title || '',
              params: {
                empty: {
                  title: more.title || Lampa.Lang.translate('tryzubtv_title'),
                  descr: Lampa.Lang.translate('tryzubtv_empty')
                }
              }
            });
          },
          onInstance: function onInstance(cardItem, cardData) {
            cardItem.use({
              onCreate: function onCreate() {
                if (this.html && this.html.classList) {
                  this.html.classList.add('card--tryzubtv');
                }
                if (cardData && cardData.salo_vod_id) {
                  appendReplayOverlay(cardItem, cardData);
                }
              },
              onEnter: function onEnter() {
                if (cardData && cardData.tryzubtv_action === 'qr_modal') {
                  openQrModal();
                  return;
                }
                if (cardData && cardData.salo_vod_id) {
                  playReplay(cardData);
                  return;
                }
                Player.playChannel(cardData);
              },
              onMenu: function onMenu() {
                return false;
              }
            });
          }
        });
        if (forceVisible) {
          setTimeout(function () {
            loadLineContent(lineItem, lineData);
          }, 0);
        }
      }
    });
    return comp;
  }

  function component$1(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.render().addClass('tryzubtv-activity');
        this.activity.render().addClass('tryzubtv-category');
        this.activity.render().addClass('tryzubtv-category-tv');
        this.activity.loader(true);
        if (!object.category_key) {
          this.activity.loader(false);
          this.empty();
          return;
        }
        Api$1.loadCategory(object.category_key, object.category_title, function (line) {
          if (line && line.results && line.results.length) _this.build(line);else _this.empty();
          _this.activity.loader(false);
        }, function () {
          _this.activity.loader(false);
          _this.empty();
        });
      },
      onBack: function onBack() {
        Lampa.Activity.backward();
      },
      onInstance: function onInstance(cardItem, cardData) {
        cardItem.use({
          onCreate: function onCreate() {
            if (this.html && this.html.classList) {
              this.html.classList.add('card--tryzubtv');
            }
          },
          onEnter: function onEnter() {
            Player.playChannel(cardData);
          },
          onMenu: function onMenu() {
            return false;
          }
        });
      }
    });
    return comp;
  }

  function lang () {
    Lampa.Lang.add({
      tryzubtv_title: {
        en: 'TryzubTV',
        uk: 'TryzubTV'
      },
      tryzubtv_no_link: {
        en: 'No stream link',
        uk: 'Немає посилання на трансляцію'
      },
      tryzubtv_epg_failed: {
        en: 'Failed to load playlist',
        uk: 'Не вдалося завантажити плейліст'
      },
      tryzubtv_now: {
        en: 'Now',
        uk: 'Зараз'
      },
      tryzubtv_now_empty: {
        en: 'No EPG data',
        uk: 'Немає даних EPG'
      },
      tryzubtv_empty: {
        en: 'No channels available',
        uk: 'Немає доступних каналів'
      },
      tryzubtv_stream_loading: {
        en: 'Loading channel...',
        uk: 'Завантаження каналу...'
      },
      tryzubtv_settings_donate: {
        en: 'Donate',
        uk: 'Донат'
      },
      tryzubtv_settings_catalog: {
        en: 'Catalog settings',
        uk: 'Налаштування каталогу'
      },
      tryzubtv_settings_source_tv: {
        en: 'TV channels',
        uk: 'ТВ Канали'
      },
      tryzubtv_settings_source_replay: {
        en: 'Sports replays',
        uk: 'Спортивні реплеї'
      },
      tryzubtv_tab_tv: {
        en: 'TV Channels',
        uk: 'ТБ Канали'
      },
      tryzubtv_tab_replay: {
        en: 'Replays',
        uk: 'Реплеї'
      },
      tryzubtv_search_placeholder: {
        en: 'Search channel',
        uk: 'Пошук каналу'
      },
      tryzubtv_all: {
        en: 'All',
        uk: 'Всі'
      },
      tryzubtv_favorites: {
        en: 'Favorites',
        uk: 'Вибране'
      },
      tryzubtv_filter_category: {
        en: 'Category',
        uk: 'Категорія'
      },
      tryzubtv_all_categories: {
        en: 'All categories',
        uk: 'Всі категорії'
      },
      tryzubtv_favorites_empty: {
        en: 'No favorite channels yet',
        uk: 'Немає вибраних каналів'
      },
      tryzubtv_search_empty: {
        en: 'Nothing found',
        uk: 'Нічого не знайдено'
      },
      tryzubtv_favorite_added: {
        en: 'Added to favorites',
        uk: 'Додано у вибране'
      },
      tryzubtv_favorite_removed: {
        en: 'Removed from favorites',
        uk: 'Видалено з вибраного'
      },
      tryzubtv_settings_donate_card: {
        en: 'Donate card',
        uk: 'Картка доната'
      },
      tryzubtv_settings_donate_sad: {
        en: 'You made the developer sad',
        uk: 'Ви засмутили розробника'
      },
      tryzubtv_settings_source_required: {
        en: 'At least one source must stay enabled',
        uk: 'Мінімум одне джерело має бути увімкненим'
      },
      tryzubtv_more_videos: {
        en: 'All videos:',
        uk: 'Усі відео:'
      },
      tryzubtv_category_Movies: {
        en: 'Movies',
        uk: 'Фільми'
      },
      tryzubtv_category_Entertainment: {
        en: 'Entertainment',
        uk: 'Розваги'
      },
      tryzubtv_category_Series: {
        en: 'Series',
        uk: 'Серіали'
      },
      tryzubtv_category_Cognitive: {
        en: 'Cognitive',
        uk: 'Когнітивні'
      },
      tryzubtv_category_News: {
        en: 'News',
        uk: 'Новини'
      },
      tryzubtv_category_Music: {
        en: 'Music',
        uk: 'Музика'
      },
      tryzubtv_category_Sport: {
        en: 'Sport',
        uk: 'Спорт'
      },
      tryzubtv_category_Kids: {
        en: 'Kids',
        uk: 'Дитячі'
      }
    });
  }

  var REPLAY_BASE = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://a.maincast.tv/items';
  function request(url) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(url, resolve, reject);
    });
  }
  function mapVodToCard(vod) {
    try {
      if (!vod.link || !vod.link.startsWith('http')) return null;
      var url = new URL(vod.link);
      var v = url.searchParams.get('v');
      if (!v) return null;
      var description = vod.description || '';
      var release_date = vod.date ? new Date(vod.date).toLocaleDateString() : '';
      var cover = '';
      if (vod.cover) {
        cover = vod.cover.startsWith('http') ? vod.cover : "https://a.maincast.tv/assets/".concat(vod.cover);
      } else if (vod.cover_url) {
        cover = vod.cover_url;
      } else if (vod.poster) {
        cover = vod.poster.startsWith('http') ? vod.poster : "https://a.maincast.tv/assets/".concat(vod.poster);
      }
      return {
        title: vod.name,
        cover: cover,
        poster: cover,
        description: description,
        salo_description: description,
        salo_release_date: release_date,
        salo_vod_id: v,
        params: {
          style: {
            name: 'default'
          }
        }
      };
    } catch (e) {
      return null;
    }
  }
  function loadCategory(_x, _x2, _x3) {
    return _loadCategory.apply(this, arguments);
  }
  function _loadCategory() {
    _loadCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(disciplineId, oncomplete, onerror) {
      var url, response, vods, items, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            url = "".concat(REPLAY_BASE, "/vod?filter={\"discipline\":").concat(disciplineId, "}&sort=-date&limit=100");
            _context.n = 1;
            return request(url);
          case 1:
            response = _context.v;
            vods = (response && response.data ? response.data : []).filter(function (vod) {
              return vod && vod.link && !vod.link.includes('youtube');
            });
            items = vods.map(mapVodToCard).filter(Boolean);
            oncomplete({
              title: '',
              results: items,
              total_pages: 1,
              params: {
                salopower: true,
                disciplineId: disciplineId
              }
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("TryzubTV: Failed to load replay category ".concat(disciplineId), _t);
            if (onerror) onerror(_t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return _loadCategory.apply(this, arguments);
  }
  var Api = {
    loadCategory: loadCategory
  };

  function component(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        if (this.activity && this.activity.render) {
          this.activity.render().addClass('tryzubtv-activity');
          this.activity.render().addClass('tryzubtv-category');
          this.activity.render().addClass('tryzubtv-category-replay');
        }
        this.activity.loader(true);
        Api.loadCategory(object.disciplineId, function (line) {
          if (line && line.results && line.results.length) _this.build(line);else _this.empty();
          _this.activity.loader(false);
        }, function () {
          _this.activity.loader(false);
          _this.empty();
        });
      },
      onInstance: function onInstance(card_item, card_data) {
        card_item.use({
          onCreate: function onCreate() {
            try {
              var cardElement = this.render ? this.render(true) : card_item.render ? card_item.render(true) : null;
              if (!cardElement) return;
              var $card = $(cardElement);
              var card_view = $card.find('.card__view');
              if (!card_view.length || !card_data) return;
              var title = card_data.title || '';
              var desc = card_data.salo_description || card_data.description || '';
              var date = card_data.salo_release_date || card_data.release_date || '';
              if (!title && !desc && !date) return;
              $card.addClass('card--salopower');
              var tpl = Lampa.Template.get('salopower_episode_card_data', {
                title: title,
                salo_description: desc,
                salo_release_date: date
              });
              card_view.append(tpl);
            } catch (e) {
              console.error('TryzubTV: replay card overlay create error', e);
            }
          },
          onEnter: function () {
            var _onEnter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var socket, key, newLink, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!(!card_data || !card_data.salo_vod_id)) {
                      _context.n = 1;
                      break;
                    }
                    return _context.a(2);
                  case 1:
                    Lampa.Loading.start();
                    _context.p = 2;
                    socket = SocketManager.getInstance();
                    _context.n = 3;
                    return socket.connect();
                  case 3:
                    key = _context.v;
                    newLink = "https://vod-maincast.cosmonova-broadcast.tv/".concat(card_data.salo_vod_id, "/master.m3u8?key=").concat(key);
                    Lampa.Player.play({
                      title: card_data.title,
                      url: newLink
                    });
                    _context.n = 5;
                    break;
                  case 4:
                    _context.p = 4;
                    _t = _context.v;
                    console.error('TryzubTV: Failed to start replay playback', _t);
                    Lampa.Noty.show('Не вдалося отримати ключ для відтворення.');
                  case 5:
                    _context.p = 5;
                    Lampa.Loading.stop();
                    return _context.f(5);
                  case 6:
                    return _context.a(2);
                }
              }, _callee, null, [[2, 4, 5, 6]]);
            }));
            function onEnter() {
              return _onEnter.apply(this, arguments);
            }
            return onEnter;
          }()
        });
      }
    });
    return comp;
  }

  function startPlugin() {
    window.tryzubtv_merged = true;
    if (Lampa.Storage) Lampa.Storage.set('tryzubtv_merged', true);
    var manifest = {
      type: 'iptv',
      version: '2.1.0',
      name: 'TryzubTV',
      description: 'Ukrainian TV channels',
      component: 'tryzubtv_hub'
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('tryzubtv_hub', component$3);
    Lampa.Component.add('tryzubtv_main', component$2);
    Lampa.Component.add('tryzubtv_category', component$1);
    Lampa.Component.add('salopower_category', component);
    lang();
    //initSettings()

    Lampa.Template.add('tryzubtv_style', "\n        <style>\n            .tryzubtv-hub{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.tryzubtv-hub,.tryzubtv-tv{--tryzubtv-btn-bg:linear-gradient(180deg,rgba(34,34,34,0.82),rgba(20,20,20,0.78));--tryzubtv-btn-border:rgba(255,255,255,0.08);--tryzubtv-btn-text:rgba(255,255,255,0.92);--tryzubtv-btn-active-bg:linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.24));--tryzubtv-btn-active-border:rgba(255,255,255,0.28);--tryzubtv-btn-focus-bg:linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,248,248,0.94))}.tryzubtv-hub__tabs{margin:.8em 0 .2em;padding:0 1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1em;width:100%}.tryzubtv-hub__tabs .simple-button{margin-right:0;-webkit-box-flex:1;-webkit-flex:1 1 12em;-ms-flex:1 1 12em;flex:1 1 12em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:10em}.tryzubtv-hub__tab.active>div{color:rgba(255,255,255,0.95)}.tryzubtv-hub__body{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0}.tryzubtv-hub__view.hide{display:none}.tryzubtv-hub__view{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-height:0}.tryzubtv-tv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-height:0}.tryzubtv-tv__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em;padding:.8em 1.5em .2em}.tryzubtv-tv__search{min-width:18em;max-width:28em}.tryzubtv-tv__search>div{display:block;width:100%;margin-left:0;padding:0;background:transparent;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.tryzubtv-tv__search.filled>div{color:rgba(255,255,255,0.95)}.tryzubtv-tv__filters{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.tryzubtv-tv__filters .simple-button{margin-right:0;-webkit-box-flex:1;-webkit-flex:1 1 10em;-ms-flex:1 1 10em;flex:1 1 10em;min-width:9em}.tryzubtv-tv__search{-webkit-box-flex:2;-webkit-flex:2 1 16em;-ms-flex:2 1 16em;flex:2 1 16em}.tryzubtv-hub .simple-button,.tryzubtv-tv .simple-button{height:3.2em;font-size:1.25em;padding:.45em 1.2em;-webkit-border-radius:.95em;border-radius:.95em;border:1px solid var(--tryzubtv-btn-border);background:var(--tryzubtv-btn-bg);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.03),0 .35em .9em rgba(0,0,0,0.32);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.03),0 .35em .9em rgba(0,0,0,0.32);color:var(--tryzubtv-btn-text);-webkit-transition:background-color .18s ease,border-color .18s ease,color .18s ease,-webkit-box-shadow .18s ease,-webkit-transform .18s ease;transition:background-color .18s ease,border-color .18s ease,color .18s ease,-webkit-box-shadow .18s ease,-webkit-transform .18s ease;-o-transition:background-color .18s ease,border-color .18s ease,box-shadow .18s ease,color .18s ease,transform .18s ease;transition:background-color .18s ease,border-color .18s ease,box-shadow .18s ease,color .18s ease,transform .18s ease;transition:background-color .18s ease,border-color .18s ease,box-shadow .18s ease,color .18s ease,transform .18s ease,-webkit-box-shadow .18s ease,-webkit-transform .18s ease}.tryzubtv-hub .simple-button--invisible:not(.focus),.tryzubtv-tv .simple-button--invisible:not(.focus){background:var(--tryzubtv-btn-bg)}.tryzubtv-hub .simple-button--filter>div,.tryzubtv-tv .simple-button--filter>div{margin-left:0;padding:0;background:transparent;font-size:.88em;font-weight:600;letter-spacing:.01em;line-height:1.2;color:inherit;text-align:center}.tryzubtv-hub .simple-button.active,.tryzubtv-tv .simple-button.active,.tryzubtv-tv .tryzubtv-tv__search.filled{background:var(--tryzubtv-btn-active-bg);border-color:var(--tryzubtv-btn-active-border);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.06),0 .45em 1.1em rgba(0,0,0,0.35);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.06),0 .45em 1.1em rgba(0,0,0,0.35);color:rgba(255,255,255,0.95)}.tryzubtv-hub .simple-button.focus,.tryzubtv-tv .simple-button.focus{background:var(--tryzubtv-btn-focus-bg);border-color:rgba(255,255,255,0.92);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.4),0 .6em 1.35em rgba(0,0,0,0.35);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.4),0 .6em 1.35em rgba(0,0,0,0.35);color:rgba(5,18,40,0.98);-webkit-transform:translateY(-0.04em);-ms-transform:translateY(-0.04em);transform:translateY(-0.04em)}.tryzubtv-hub .simple-button.focus>div,.tryzubtv-tv .simple-button.focus>div{color:rgba(5,18,40,0.98)}.tryzubtv-hub__tab.active,.tryzubtv-tv__filters .simple-button.active,.tryzubtv-tv__search.filled{-webkit-transform:translateY(-0.02em);-ms-transform:translateY(-0.02em);transform:translateY(-0.02em)}.tryzubtv-tv__body{padding:.6em 1.5em 1.5em}.tryzubtv-tv__category{margin-top:.4em;font-size:1em;color:rgba(255,255,255,0.6)}.tryzubtv-tv .card--tryzubtv-tv .card__title,.tryzubtv-tv .card--tryzubtv-tv .card__age{display:none}.tryzubtv-tv__empty{padding:2em 0;color:rgba(255,255,255,0.6);font-size:1.2em}.tryzubtv-tv .scroll{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.tryzubtv-tv .scroll__content{min-height:100%}.tryzubtv-tv .card--tryzubtv-tv .card__view{position:relative;padding-bottom:60%;-webkit-border-radius:1em;border-radius:1em;overflow:visible;background:-webkit-gradient(linear,left top,left bottom,from(var(--tryzubtv-logo-bg,#343434)),to(var(--tryzubtv-logo-bg-dark,#262626)));background:-webkit-linear-gradient(top,var(--tryzubtv-logo-bg,#343434),var(--tryzubtv-logo-bg-dark,#262626));background:-o-linear-gradient(top,var(--tryzubtv-logo-bg,#343434),var(--tryzubtv-logo-bg-dark,#262626));background:linear-gradient(180deg,var(--tryzubtv-logo-bg,#343434),var(--tryzubtv-logo-bg-dark,#262626));-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.04);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.04)}.tryzubtv-tv .card--tryzubtv-tv .card__img{background-color:transparent;-webkit-border-radius:1em;border-radius:1em;overflow:hidden}.tryzubtv-tv .card--tryzubtv-tv.focus .card__view::after,.tryzubtv-tv .card--tryzubtv-tv.hover .card__view::after{z-index:2;border-width:.26em}@media screen and (max-width:1024px){.tryzubtv-tv__header{padding:.6em 1em .2em}.tryzubtv-tv__search{min-width:12em;max-width:100%;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}}@media screen and (max-width:720px){.tryzubtv-tv__header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.tryzubtv-tv__filters{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}}\n        </style>\n    ");
    $('body').append(Lampa.Template.get('tryzubtv_style', {}, true));
    var style = document.createElement('style');
    style.textContent = "\n        .card--tryzubtv .card__img {\n            object-fit: contain;\n            object-position: center;\n            background: transparent;\n        }\n\n        .tryzubtv-main .card--tryzubtv.card--wide {\n            width: 15em;\n        }\n\n        .tryzubtv-category .card--tryzubtv.card--wide {\n            width: auto;\n        }\n\n        .card--tryzubtv .card__promo-title {\n            font-size: 1em;\n            line-height: 1.2;\n            max-height: 2.4em;\n            overflow: hidden;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            line-clamp: 2;\n            -webkit-box-orient: vertical;\n            text-overflow: ellipsis;\n        }\n\n        .card--tryzubtv .card__promo-text {\n            display: none;\n        }\n\n        .card--tryzubtv.card--wide .card__title {\n            display: none;\n        }\n\n        .card--tryzubtv .card__promo {\n            overflow: hidden;\n            padding: 2em 1em 1em 1em;\n        }\n\n        .tryzubtv-category .card--tryzubtv .card__promo {\n            display: none;\n        }\n\n        .tryzubtv-category-tv .card--tryzubtv .card__view {\n            padding-bottom: 90%;\n            margin-bottom: 0.6em;\n        }\n\n        .tryzubtv-category-tv .card--tryzubtv .card__title {\n            font-size: 1.1em;\n            max-height: 2.4em;\n            -webkit-line-clamp: 2;\n            line-clamp: 2;\n        }\n\n        .tryzubtv-activity .items-line {\n            padding-bottom: 1em;\n        }\n\n        .card--wide.card--salopower .card__view {\n            position: relative;\n        }\n\n        .card--wide.card--salopower .card__body--salopower {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            padding: 1.2em 1.5em;\n            background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%);\n            pointer-events: none;\n        }\n\n        .card--wide.card--salopower .card__promo {\n            display: none;\n        }\n\n        .tryzubtv-category .card--salopower .card__body--salopower {\n            display: none;\n        }\n\n        .card--wide.card--salopower .card__body--salopower .card__title {\n            font-size: 1.6em;\n            font-weight: 700;\n        }\n\n        .card--wide.card--salopower .card__salopower-data {\n            margin-top: auto;\n            padding-top: 1em;\n        }\n\n        .card--salopower .card__description {\n            font-size: 1.3em;\n            color: rgba(255, 255, 255, 0.7);\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            display: -webkit-box;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .card--salopower .card__release-date {\n            font-size: 1.2em;\n            color: rgba(255, 255, 255, 0.5);\n            margin-top: 0.5em;\n        }\n        .account-modal-split__text {\n            margin-bottom: 0;\n        }\n        .account-modal-split__qr-text>a {\n            text-decoration: none;\n            color: #d8c39a;\n        }\n    ";
    document.head.appendChild(style);
    Lampa.Template.add('salopower_episode_card_data', "\n        <div class=\"card__body card__body--salopower\">\n            <div class=\"card__title\">{title}</div>\n            <div class=\"card__salopower-data\">\n                <div class=\"card__description\">{salo_description}</div>\n                <div class=\"card__release-date\">{salo_release_date}</div>\n            </div>\n        </div>\n    ");
    SocketManager.getInstance().listen();
    function addMenu() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#ffffff\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"_x36_0\"></g> <g id=\"_x35_9\"></g> <g id=\"_x35_8\"></g> <g id=\"_x35_7\"></g> <g id=\"_x35_6\"></g> <g id=\"_x35_5\"></g> <g id=\"_x35_4\"></g> <g id=\"_x35_3\"></g> <g id=\"_x35_2\"></g> <g id=\"_x35_1\"></g> <g id=\"_x35_0\"></g> <g id=\"_x34_9\"></g> <g id=\"_x34_8\"></g> <g id=\"_x34_7\"></g> <g id=\"_x34_6\"></g> <g id=\"_x34_5\"></g> <g id=\"_x34_4\"></g> <g id=\"_x34_3\"></g> <g id=\"_x34_2\"></g> <g id=\"_x34_1\"></g> <g id=\"_x34_0\"></g> <g id=\"_x33_9\"></g> <g id=\"_x33_8\"></g> <g id=\"_x33_7\"></g> <g id=\"_x33_6\"></g> <g id=\"_x33_5\"></g> <g id=\"_x33_4\"></g> <g id=\"_x33_3\"></g> <g id=\"_x33_2\"></g> <g id=\"_x33_1\"></g> <g id=\"_x33_0\"></g> <g id=\"_x32_9\"></g> <g id=\"_x32_8\"></g> <g id=\"_x32_7\"></g> <g id=\"_x32_6\"></g> <g id=\"_x32_5\"></g> <g id=\"_x32_4_1_\"></g> <g id=\"_x32_3\"></g> <g id=\"_x32_2\"></g> <g id=\"_x32_1\"></g> <g id=\"_x32_0\"></g> <g id=\"_x31_9\"></g> <g id=\"_x31_8\"></g> <g id=\"_x31_7\"></g> <g id=\"_x31_6\"></g> <g id=\"_x31_5\"></g> <g id=\"_x31_4\"></g> <g id=\"_x31_3\"></g> <g id=\"_x31_2\"> <path d=\"M30.1181641,15l0.7763672-1.5527344c0.1357422-0.2714844,0.140625-0.5893555,0.0141602-0.8652344 c-0.1269531-0.2753906-0.3720703-0.4785156-0.6660156-0.5522461L27,11.2192383V11c0-0.5522461-0.4477539-1-1-1h-2.5859375 L22,8.5859375V7c0-0.3081055-0.1420898-0.5986328-0.3847656-0.7880859 c-0.2431641-0.1899414-0.5605469-0.2583008-0.8579102-0.1821289l-4,1 c-0.2412109,0.0605469-0.4511719,0.2084961-0.5893555,0.4155273l-1.0439453,1.5664063l-0.2294922-0.4589844 c-0.144043-0.2875977-0.4169922-0.4882813-0.734375-0.5400391c-0.3144531-0.0488281-0.6401367,0.0537109-0.8671875,0.2802734 l-0.5336914,0.5336914L8.371582,7.0712891C8.152832,6.9838867,7.909668,6.9770508,7.6835938,7.0512695l-3,1 C4.159668,8.2260742,3.8764648,8.7924805,4.0512695,9.3164063l0.7255859,2.1772461l-1.2241211,0.6118164 C3.2138672,12.2749023,3,12.6210938,3,13v1.3818359l-1.4472656,0.7236328 c-0.4941406,0.2470703-0.6943359,0.8476563-0.4472656,1.3417969l1,2C2.2749023,18.7861328,2.6210938,19,3,19h4 c0.2651367,0,0.5195313-0.1054688,0.7070313-0.2929688l0.8330078-0.8330078l2.1899414-0.7299805L13.5859375,20 l-1.2929688,1.2929688c-0.0761719,0.0756836-0.1391602,0.1635742-0.1875,0.2597656l-1,2 c-0.1923828,0.3852539-0.1166992,0.8500977,0.1875,1.1542969l1,1C12.4804688,25.8945313,12.7348633,26,13,26h1 c0.2651367,0,0.5195313-0.1054688,0.7070313-0.2929688L16,24.4140625l0.2929688,0.2929688 c0.2270508,0.2265625,0.5483398,0.3286133,0.8671875,0.2802734c0.3173828-0.0517578,0.590332-0.2524414,0.734375-0.5400391 L18,24.2358398V25c0,0.3789063,0.2138672,0.7250977,0.5527344,0.8945313L20,26.6181641V27 c0,0.3466797,0.1796875,0.668457,0.4741211,0.8505859C20.6347656,27.949707,20.8173828,28,21,28 c0.152832,0,0.3061523-0.0351563,0.4472656-0.1054688l4-2c0.1933594-0.0966797,0.3505859-0.2539063,0.4472656-0.4472656l1-2 c0.1923828-0.3852539,0.1166992-0.8500977-0.1875-1.1542969c-0.3032227-0.3037109-0.7685547-0.3793945-1.1542969-0.1875 l-1.1054688,0.5527344l-0.1386719-0.2773438l4.2060547-2.5234375c0.1630859-0.0976563,0.2949219-0.2402344,0.3798828-0.4101563 L29.6181641,18H30c0.3466797,0,0.668457-0.1796875,0.8505859-0.4741211 c0.1821289-0.2949219,0.1987305-0.6630859,0.0439453-0.9731445L30.1181641,15z M28.1054688,14.5527344 c-0.140625,0.2817383-0.140625,0.612793,0,0.8945313l0.3554688,0.7104492 c-0.1494141,0.0957031-0.2729492,0.2304688-0.3554688,0.3950195l-0.8696289,1.7397461l-4.7504883,2.8500977 c-0.4477539,0.2685547-0.6132813,0.8374023-0.3798828,1.3046875l1,2c0.0537109,0.1074219,0.1240234,0.2006836,0.206543,0.2788086 l-1.4697266,0.7348633c-0.0957031-0.1494141-0.2304688-0.2729492-0.3950195-0.3554688L20,24.3818359v-0.1459961 l0.8945313-1.7885742c0.1547852-0.3100586,0.1381836-0.6782227-0.0439453-0.9731445C20.668457,21.1796875,20.3466797,21,20,21h-2 c-0.3789063,0-0.7250977,0.2138672-0.8945313,0.5527344l-0.3793945,0.7592773l-0.019043-0.019043 c-0.390625-0.390625-1.0234375-0.390625-1.4140625,0L13.5859375,24h-0.171875l-0.1972656-0.1972656l0.6049805-1.2104492 l1.8852539-1.8852539c0.390625-0.390625,0.390625-1.0234375,0-1.4140625l-4-4 c-0.2680664-0.269043-0.6640625-0.3623047-1.0234375-0.2416992l-3,1c-0.1469727,0.0493164-0.2807617,0.1318359-0.390625,0.2416992 L6.5859375,17H3.6181641l-0.2763672-0.5527344l1.1054688-0.5527344C4.7861328,15.7250977,5,15.3789063,5,15v-1.3818359 l1.4472656-0.7236328c0.4448242-0.2226563,0.6586914-0.7387695,0.5014648-1.2109375L6.2651367,9.6323242L7.96875,9.0644531 l4.659668,1.8642578c0.3720703,0.1479492,0.7963867,0.0620117,1.0786133-0.2216797l0.019043-0.019043l0.3793945,0.7592773 c0.159668,0.3188477,0.4765625,0.5288086,0.8325195,0.5507813c0.3510742,0.0263672,0.6962891-0.1469727,0.894043-0.4433594 l1.7856445-2.6782227L20,8.2807617V9c0,0.2651367,0.1054688,0.5195313,0.2929688,0.7070313l2,2 C22.4804688,11.8945313,22.7348633,12,23,12h2c0,0.4589844,0.3125,0.8588867,0.7573242,0.9702148l2.7905273,0.6977539 L28.1054688,14.5527344z\" fill=\"#ffffff\"></path> </g> <g id=\"_x31_1\"></g> <g id=\"_x31_0\"></g> <g id=\"_x39_\"></g> <g id=\"_x38_\"></g> <g id=\"_x37_\"></g> <g id=\"_x36_\"></g> <g id=\"_x35_\"></g> <g id=\"_x34_\"></g> <g id=\"_x33_\"></g> <g id=\"_x32_\"></g> <g id=\"_x31_\"></g> <g id=\"topic\"></g> <g id=\"Guides\"></g> </g></svg>\n            </div>\n            <div class=\"menu__text\">".concat(Lampa.Lang.translate('tryzubtv_title'), "</div>\n        </li>"));
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('tryzubtv_title') + " | Спільнота t.me/mmssixxx",
          component: 'tryzubtv_hub',
          page: 1,
          params: {
            empty: {
              title: Lampa.Lang.translate('tryzubtv_title'),
              descr: Lampa.Lang.translate('tryzubtv_empty')
            }
          }
        });
      });
      $('.menu .menu__list').eq(0).append(button);
    }
    if (window.appready) addMenu();else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') addMenu();
      });
    }
  }
  if (Lampa.Manifest.app_digital >= 300) startPlugin();

  return startPlugin;

})();
