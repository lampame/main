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
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var API_BASE = 'https://dyvy.tv/api/v1';
  var REPLAY_BASE = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://a.maincast.tv/items';
  var REPLAY_LIMIT = 10;
  var QR_CARD_POSTER$1 = 'https://iili.io/fkdGkSj.png';
  var CATALOG_ORDER_KEY = 'tryzubtv_catalog_order';
  var CATALOG_HIDE_KEY = 'tryzubtv_catalog_hidden';
  var SOURCE_TV = 'tv';
  var SOURCE_REPLAY = 'replay';
  function request$1(url) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(url, resolve, reject);
    });
  }
  function isFreeChannel(channel) {
    return channel && channel.package_block == null;
  }
  function translateCategoryName$1(name) {
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
  function mapChannelToCard(channel, category) {
    var logo = channel.icon_url || channel.icon_url_2 || '';
    var poster = logo || channel.frame_url || channel.frame_url_origin || '';
    var categorySlug = category ? category.slug : '';
    var categoryTitle = translateCategoryName$1(category ? category.name : '');
    var nowTitle = channel.epg_current && channel.epg_current.name ? channel.epg_current.name : '';
    var fallbackTitle = channel.name || '';
    return {
      title: nowTitle || fallbackTitle,
      poster: poster,
      cover: poster,
      img: logo,
      overview: channel.description || '',
      tryzubtv_source: SOURCE_TV,
      tryzubtv_slug: channel.slug || '',
      tryzubtv_link: channel.link || '',
      tryzubtv_epg: channel.epg_current || null,
      tryzubtv_type: channel.type || '',
      tryzubtv_logo: logo,
      tryzubtv_now: channel.epg_current ? channel.epg_current.name : '',
      tryzubtv_category: categorySlug,
      tryzubtv_category_title: categoryTitle,
      params: {
        style: {
          name: 'wide'
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
  function fetchCategories() {
    return _fetchCategories.apply(this, arguments);
  }
  function _fetchCategories() {
    _fetchCategories = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return request$1("".concat(API_BASE, "/categories?is_main=1"));
          case 1:
            response = _context.v;
            return _context.a(2, response && response.data ? response.data : []);
        }
      }, _callee);
    }));
    return _fetchCategories.apply(this, arguments);
  }
  function fetchReplayDisciplines() {
    return _fetchReplayDisciplines.apply(this, arguments);
  }
  function _fetchReplayDisciplines() {
    _fetchReplayDisciplines = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var url, response;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            url = "".concat(REPLAY_BASE, "/discipline?filter={\"category\":\"sport\"}&fields=name,id,icon");
            _context2.n = 1;
            return request$1(url);
          case 1:
            response = _context2.v;
            return _context2.a(2, response && response.data ? response.data : []);
        }
      }, _callee2);
    }));
    return _fetchReplayDisciplines.apply(this, arguments);
  }
  function buildLineMetaTv(category) {
    var rawTitle = category && category.name ? category.name : '';
    var title = translateCategoryName$1(rawTitle);
    var slug = category && category.slug ? category.slug : '';
    return {
      id: "".concat(SOURCE_TV, ":").concat(slug),
      source: SOURCE_TV,
      title: title,
      rawTitle: rawTitle,
      category_slug: slug
    };
  }
  function buildLineMetaReplay(discipline) {
    var rawTitle = discipline && discipline.name ? discipline.name : '';
    var title = translateCategoryName$1(rawTitle);
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
    _fetchCatalogLines = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$Promise$all, _yield$Promise$all2, categories, disciplines, tvLines, replayLines;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return Promise.all([fetchCategories(), fetchReplayDisciplines()]);
          case 1:
            _yield$Promise$all = _context3.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            categories = _yield$Promise$all2[0];
            disciplines = _yield$Promise$all2[1];
            tvLines = (categories || []).map(buildLineMetaTv);
            replayLines = (disciplines || []).map(buildLineMetaReplay);
            return _context3.a(2, tvLines.concat(replayLines));
        }
      }, _callee3);
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
    var params = _objectSpread2({}, baseParams);
    if (meta.source === SOURCE_TV) {
      params.tryzubtv_category = meta.category_slug;
      params.tryzubtv_category_title = meta.title;
      params.tryzubtv_category_raw = meta.rawTitle;
      params.more = {
        title: meta.title,
        component: 'tryzubtv_category',
        category_slug: meta.category_slug
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
      params.module = LineModule.toggle(LineModule.MASK.base, 'More');
    }
    return {
      title: meta.title,
      results: [],
      total_pages: 2,
      params: params
    };
  }
  function loadMain(_x, _x2) {
    return _loadMain.apply(this, arguments);
  }
  function _loadMain() {
    _loadMain = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(oncomplete, onerror) {
      var linesMeta, ordered, hidden, isTvEnabled, isReplayEnabled, visible, LineModule, lines, _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return fetchCatalogLines();
          case 1:
            linesMeta = _context4.v;
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
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t = _context4.v;
            console.error('TryzubTV: loadMain failed', _t);
            onerror(_t);
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    return _loadMain.apply(this, arguments);
  }
  function loadCategory(_x3, _x4, _x5, _x6) {
    return _loadCategory.apply(this, arguments);
  }
  function _loadCategory() {
    _loadCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(categorySlug, categoryTitle, oncomplete, onerror) {
      var url, response, channels, total, title, lineTitle, items, _t2;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            url = "".concat(API_BASE, "/channels?category_slug=").concat(encodeURIComponent(categorySlug), "&limit=500");
            _context5.n = 1;
            return request$1(url);
          case 1:
            response = _context5.v;
            channels = response && response.data ? response.data : [];
            total = response && response.meta && response.meta.total ? response.meta.total : channels.length;
            title = translateCategoryName$1(categoryTitle || categorySlug || '');
            lineTitle = total ? "".concat(title, " \xB7 ").concat(total) : title;
            items = channels.filter(isFreeChannel).filter(function (channel) {
              return channel && channel.link;
            }).map(function (channel) {
              return mapChannelToCard(channel, {
                slug: categorySlug,
                name: title
              });
            }).filter(Boolean);
            oncomplete([{
              title: lineTitle,
              results: items,
              total_pages: 1,
              params: {
                tryzubtv_source: SOURCE_TV,
                tryzubtv_category: categorySlug || '',
                tryzubtv_category_title: title,
                tryzubtv_category_total: total
              }
            }]);
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t2 = _context5.v;
            console.error('TryzubTV: loadCategory failed', _t2);
            onerror(_t2);
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return _loadCategory.apply(this, arguments);
  }
  function loadLineItems(_x7) {
    return _loadLineItems.apply(this, arguments);
  }
  function _loadLineItems() {
    _loadLineItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(lineData) {
      var params, source, slug, url, response, channels, total, title, items, disciplineId, _url, _response, vods, mapped, hasMore, _items;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            params = lineData && lineData.params || {};
            source = params.tryzubtv_source;
            if (!(source === SOURCE_TV)) {
              _context6.n = 3;
              break;
            }
            slug = params.tryzubtv_category;
            if (slug) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, {
              items: [],
              total: 0,
              total_pages: 1
            });
          case 1:
            url = "".concat(API_BASE, "/channels?category_slug=").concat(encodeURIComponent(slug), "&limit=500");
            _context6.n = 2;
            return request$1(url);
          case 2:
            response = _context6.v;
            channels = response && response.data ? response.data : [];
            total = response && response.meta && response.meta.total ? response.meta.total : channels.length;
            title = translateCategoryName$1(params.tryzubtv_category_raw || params.tryzubtv_category_title || '');
            items = channels.filter(isFreeChannel).filter(function (channel) {
              return channel && channel.link;
            }).map(function (channel) {
              return mapChannelToCard(channel, {
                slug: slug,
                name: title
              });
            }).filter(Boolean);
            return _context6.a(2, {
              items: items,
              total: total,
              title: title
            });
          case 3:
            if (!(source === SOURCE_REPLAY)) {
              _context6.n = 6;
              break;
            }
            disciplineId = params.tryzubtv_replay_id;
            if (disciplineId) {
              _context6.n = 4;
              break;
            }
            return _context6.a(2, {
              items: [],
              total: 0,
              total_pages: 1
            });
          case 4:
            _url = "".concat(REPLAY_BASE, "/vod?filter={\"discipline\":").concat(disciplineId, "}&sort=-date&limit=").concat(REPLAY_LIMIT + 1);
            _context6.n = 5;
            return request$1(_url);
          case 5:
            _response = _context6.v;
            vods = (_response && _response.data ? _response.data : []).filter(function (vod) {
              return vod && vod.link && !vod.link.includes('youtube');
            });
            mapped = vods.map(mapReplayToCard).filter(Boolean);
            hasMore = mapped.length > REPLAY_LIMIT;
            _items = hasMore ? mapped.slice(0, REPLAY_LIMIT) : mapped;
            return _context6.a(2, {
              items: _items,
              total: null,
              total_pages: hasMore ? 2 : 1
            });
          case 6:
            return _context6.a(2, {
              items: [],
              total: 0,
              total_pages: 1
            });
        }
      }, _callee6);
    }));
    return _loadLineItems.apply(this, arguments);
  }
  var Api$1 = {
    loadMain: loadMain,
    loadCategory: loadCategory,
    loadLineItems: loadLineItems,
    fetchCategories: fetchCategories,
    fetchCatalogLines: fetchCatalogLines,
    sortCatalogLines: sortCatalogLines,
    getCatalogHidden: getCatalogHidden,
    getCatalogOrder: getCatalogOrder,
    buildQrCard: buildQrCard,
    API_BASE: API_BASE,
    SOURCE_TV: SOURCE_TV,
    SOURCE_REPLAY: SOURCE_REPLAY
  };

  function request(url) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(url, resolve, reject);
    });
  }
  function buildChannelEpgUrl(slug) {
    return "".concat(Api$1.API_BASE, "/channels/").concat(encodeURIComponent(slug), "?expand=epg_items");
  }
  function toPlaylistItems(items, fallbackTitle) {
    return (items || []).filter(function (item) {
      return item && item.link;
    }).map(function (item) {
      return {
        title: item.name || fallbackTitle || '',
        url: item.link
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
  function fetchChannelEpg(slug) {
    var url = buildChannelEpgUrl(slug);
    return request(url).then(function (data) {
      return data && data.data ? data.data : null;
    });
  }
  function fetchCategoryChannels(_x) {
    return _fetchCategoryChannels.apply(this, arguments);
  }
  function _fetchCategoryChannels() {
    _fetchCategoryChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(categorySlug) {
      var url, response, channels;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            url = "".concat(Api$1.API_BASE, "/channels?category_slug=").concat(encodeURIComponent(categorySlug), "&limit=500");
            _context.n = 1;
            return request(url);
          case 1:
            response = _context.v;
            channels = response && response.data ? response.data : [];
            return _context.a(2, channels.filter(function (channel) {
              return channel && channel.package_block == null && channel.link;
            }).map(function (channel) {
              return {
                name: channel.name || '',
                slug: channel.slug || '',
                url: channel.link || '',
                logo: channel.icon_url || channel.icon_url_2 || '',
                epg_current: channel.epg_current || null
              };
            }));
        }
      }, _callee);
    }));
    return _fetchCategoryChannels.apply(this, arguments);
  }
  function playIptvList(channels, startIndex, groupTitle) {
    var epgCache = {};
    var data = {
      title: channels[startIndex].name,
      url: channels[startIndex].url,
      total: channels.length,
      position: startIndex,
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
          epg_current: channel.epg_current
        };
        if (!selected.slug) return selected;
        var cached = epgCache[selected.slug];
        if (cached) {
          Lampa.Player.programReady({
            channel: selected,
            position: cached.position,
            total: cached.items.length
          });
          return selected;
        }
        fetchChannelEpg(selected.slug).then(function (data) {
          var items = data && data.epg_items ? data.epg_items : [];
          var current = data && data.epg_current ? data.epg_current : null;
          var position = getCurrentProgramIndex(items, current);
          epgCache[selected.slug] = {
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
          epgCache[selected.slug] = {
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
        if (!selected || !selected.slug) {
          renderProgramList(container, [], 0);
          return;
        }
        var cached = epgCache[selected.slug];
        if (cached) {
          var hasCachedPosition = typeof cached.position === 'number' && cached.position > 0;
          var usePosition = typeof position === 'number' && position > 0 ? position : hasCachedPosition ? cached.position : 0;
          renderProgramList(container, cached.items || [], usePosition);
          return;
        }
        renderProgramList(container, [], 0);
      },
      onPlaylistProgram: function onPlaylistProgram(selected, position) {
        if (!selected || !selected.slug) return;
        var cached = epgCache[selected.slug];
        if (cached) {
          Lampa.Player.playlist(toPlaylistItems(cached.items || [], selected.name));
          return;
        }
        fetchChannelEpg(selected.slug).then(function (data) {
          var items = data && data.epg_items ? data.epg_items : [];
          var current = data && data.epg_current ? data.epg_current : null;
          var position = getCurrentProgramIndex(items, current);
          epgCache[selected.slug] = {
            items: items,
            position: position
          };
          Lampa.Player.playlist(toPlaylistItems(items, selected.name));
        })["catch"](function (error) {
          console.error('TryzubTV: playlist load failed', error);
          Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_epg_failed'));
        });
      }
    };
    Lampa.Player.iptv(data);
  }
  function playChannel(cardData) {
    if (!cardData || !cardData.tryzubtv_link) {
      Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_no_link'));
      return;
    }
    var title = cardData.title || '';
    var logo = cardData.tryzubtv_logo || '';
    cardData.tryzubtv_now || Lampa.Lang.translate('tryzubtv_now_empty');
    var categorySlug = cardData.tryzubtv_category || '';
    var categoryTitle = cardData.tryzubtv_category_title || cardData.tryzubtv_category || Lampa.Lang.translate('tryzubtv_title');
    if (categorySlug) {
      Lampa.Loading.start();
      fetchCategoryChannels(categorySlug).then(function (channels) {
        Lampa.Loading.stop();
        if (!channels.length) {
          playIptvList([{
            name: title,
            slug: cardData.tryzubtv_slug || '',
            url: cardData.tryzubtv_link,
            logo: logo,
            epg_current: cardData.tryzubtv_epg || null
          }], 0, categoryTitle);
          return;
        }
        var startIndex = Math.max(0, channels.findIndex(function (channel) {
          return channel.slug === cardData.tryzubtv_slug;
        }));
        playIptvList(channels, startIndex, categoryTitle);
      })["catch"](function (error) {
        Lampa.Loading.stop();
        console.error('TryzubTV: category channels load failed', error);
        playIptvList([{
          name: title,
          slug: cardData.tryzubtv_slug || '',
          url: cardData.tryzubtv_link,
          logo: logo,
          epg_current: cardData.tryzubtv_epg || null
        }], 0, categoryTitle);
      });
    } else {
      playIptvList([{
        name: title,
        slug: cardData.tryzubtv_slug || '',
        url: cardData.tryzubtv_link,
        logo: logo,
        epg_current: cardData.tryzubtv_epg || null
      }], 0, categoryTitle);
    }
    if (!cardData.tryzubtv_slug) return;
    fetchChannelEpg(cardData.tryzubtv_slug).then(function (data) {
      var items = data && data.epg_items ? data.epg_items : [];
      var playlist = toPlaylistItems(items, title);
      if (playlist.length) Lampa.Player.playlist(playlist);
    })["catch"](function (error) {
      console.error('TryzubTV: epg list load failed', error);
      Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_epg_failed'));
    });
  }
  var Player = {
    playChannel: playChannel
  };

  var QR_URL = 'https://lampame.donatik.me';
  var QR_TEXT = "<a href=\"".concat(QR_URL, "\">\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F</a>");
  var QR_BODY = 'Донат автору плагіну TryzubTV добровільний, на розвиток якого витрачено багато часу та сил.';
  var QR_CARD_POSTER = 'https://iili.io/fkdGkSj.png';
  function openQrModal() {
    var html = $('<div class="account-modal-split">' + '<div class="account-modal-split__qr">' + '<div class="account-modal-split__qr-code" style="margin-bottom:0;width: 13em;height: 13em;"></div>' + "<div class=\"account-modal-split__qr-text\">".concat(QR_TEXT, "</div>") + '</div>' + '<div class="account-modal-split__info">' + //`<div class="account-modal-split__title">${QR_TITLE}</div>` +
    "<div class=\"account-modal-split__text\"><img src=\"".concat(QR_CARD_POSTER, "\" class=\"tryzubtv-qr-modal__img\"><br />").concat(QR_BODY, "</div>") + '</div>' + '</div>');
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
            // Якщо вже підключаємось, просто чекаємо
            socket.onmessage = function (event) {
              handleMessage(event, resolve, reject);
            };
            return;
          }
          socket = new WebSocket('wss://vod-maincast.cosmonova-broadcast.tv/ws');
          socket.onopen = function () {
            console.log('SaloPower: WebSocket connected');
          };
          socket.onmessage = function (event) {
            handleMessage(event, resolve, reject);
          };
          socket.onerror = function (error) {
            console.error('SaloPower: WebSocket error');
            reject('SaloPower: WebSocket error');
            disconnect();
          };
          socket.onclose = function () {
            console.log('SaloPower: WebSocket disconnected');
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
            console.log('SaloPower: Key received');
            resolve(key);
          } else {
            reject('SaloPower: Invalid auth response');
          }
        } catch (e) {
          reject('SaloPower: Failed to parse message');
        }
      };
      var disconnect = function disconnect() {
        if (socket) {
          socket.close();
        }
      };

      // Слухаємо подію знищення плеєра, щоб закрити сокет
      var listen = function listen() {
        Lampa.Player.listener.follow('destroy', function () {
          console.log('SaloPower: Player destroyed, closing socket.');
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
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  }();

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
      var totalPages = payload.total_pages || (items.length ? 2 : 1);
      lineData.results = items;
      lineData.total_pages = totalPages;
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
        }
        lineData.tryzubtv_qr_added = true;
      }
      var view = lineItem.params && lineItem.params.items ? lineItem.params.items.view : 7;
      var initial = lineData.results.slice(0, view);
      initial.forEach(function (element) {
        lineItem.emit('createAndAppend', element);
      });
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
            if (!more.category_slug) return;
            Lampa.Activity.push({
              url: '',
              title: more.title || lineData.title || Lampa.Lang.translate('tryzubtv_title'),
              component: 'tryzubtv_category',
              category_slug: more.category_slug,
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
        this.activity.loader(true);
        if (!object.category_slug) {
          this.activity.loader(false);
          this.empty();
          return;
        }
        Api$1.loadCategory(object.category_slug, object.category_title, function (lines) {
          if (lines && lines[0] && lines[0].results && lines[0].results.length) _this.build(lines);else _this.empty();
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
        lineItem.use({
          onInstance: function onInstance(cardItem, cardData) {
            cardItem.use({
              onCreate: function onCreate() {
                if (this.html && this.html.classList) {
                  this.html.classList.add('card--tryzubtv');
                }
              },
              onEnter: function onEnter() {
                Player.playChannel(cardData);
              }
            });
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

  var ORDER_KEY = 'tryzubtv_catalog_order';
  var HIDE_KEY = 'tryzubtv_catalog_hidden';
  function translateCategoryName(name) {
    var raw = name || '';
    if (!raw) return '';
    var key = "tryzubtv_category_".concat(raw);
    var translated = Lampa.Lang ? Lampa.Lang.translate(key) : key;
    return translated === key ? raw : translated;
  }
  function saveList(list) {
    var order = [];
    var hidden = [];
    list.find('.menu-edit-list__item').each(function () {
      var item = $(this);
      var lineId = item.data('lineId');
      if (lineId) order.push(lineId);
      if (item.hasClass('hidden')) hidden.push(lineId);
    });
    Lampa.Storage.set(ORDER_KEY, order);
    Lampa.Storage.set(HIDE_KEY, hidden);
  }
  function openCatalogEditor() {
    Lampa.Loading.start();
    Api$1.fetchCatalogLines().then(function (lines) {
      var storedHidden = Api$1.getCatalogHidden();
      var ordered = Api$1.sortCatalogLines(lines);
      var list = $('<div class="menu-edit-list"></div>');
      ordered.forEach(function (line) {
        var title = translateCategoryName(line.title || line.rawTitle || line.id);
        var item = $("<div class=\"menu-edit-list__item\">\n                    <div class=\"menu-edit-list__icon\"></div>\n                    <div class=\"menu-edit-list__title\">".concat(title, "</div>\n                    <div class=\"menu-edit-list__move move-up selector\">\n                        <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M2 12L11 3L20 12\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                        </svg>\n                    </div>\n                    <div class=\"menu-edit-list__move move-down selector\">\n                        <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M2 2L11 11L20 2\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                        </svg>\n                    </div>\n                    <div class=\"menu-edit-list__toggle toggle selector\">\n                        <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <rect x=\"1.89111\" y=\"1.78369\" width=\"21.793\" height=\"21.793\" rx=\"3.5\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                            <path d=\"M7.44873 12.9658L10.8179 16.3349L18.1269 9.02588\" stroke=\"currentColor\" stroke-width=\"3\" class=\"dot\" opacity=\"0\" stroke-linecap=\"round\"/>\n                        </svg>\n                    </div>\n                </div>"));
        item.data('lineId', line.id);
        item.find('.move-up').on('hover:enter', function () {
          var prev = item.prev();
          if (prev.length) item.insertBefore(prev);
        });
        item.find('.move-down').on('hover:enter', function () {
          var next = item.next();
          if (next.length) item.insertAfter(next);
        });
        var isHidden = storedHidden.indexOf(line.id) !== -1;
        if (isHidden) item.addClass('hidden');
        item.find('.toggle').on('hover:enter', function () {
          item.toggleClass('hidden');
          item.find('.dot').attr('opacity', item.hasClass('hidden') ? 0 : 1);
        }).find('.dot').attr('opacity', isHidden ? 0 : 1);
        list.append(item);
      });
      Lampa.Modal.open({
        title: Lampa.Lang.translate('tryzubtv_settings_catalog'),
        html: list,
        size: 'small',
        scroll_to_center: true,
        select: list.find('.selector').first(),
        onBack: function onBack() {
          saveList(list);
          Lampa.Modal.close();
          Lampa.Controller.toggle('settings_component');
        }
      });
      setTimeout(function () {
        Lampa.Modal.toggle(list.find('.selector').first());
      }, 0);
    })["catch"](function (error) {
      console.error('TryzubTV: catalog editor load failed', error);
      Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_empty'));
    })["finally"](function () {
      Lampa.Loading.stop();
    });
  }

  var SOURCE_TV_KEY = 'tryzubtv_source_tv';
  var SOURCE_REPLAY_KEY = 'tryzubtv_source_replay';
  var DONATE_CARD_KEY = 'tryzubtv_donate_card';
  function ensureAtLeastOne(enabledKey) {
    var tvEnabled = Lampa.Storage.get(SOURCE_TV_KEY, true);
    var replayEnabled = Lampa.Storage.get(SOURCE_REPLAY_KEY, true);
    if (!tvEnabled && !replayEnabled) {
      Lampa.Storage.set(enabledKey, true);
      Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_settings_source_required'));
    }
    Lampa.Settings.update();
  }
  function initSettings() {
    var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
    if (!SettingsApi || !SettingsApi.addComponent) return;
    SettingsApi.addComponent({
      component: 'tryzubtv',
      name: Lampa.Lang.translate('tryzubtv_title'),
      icon: "<svg viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#ffffff\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"_x36_0\"></g> <g id=\"_x35_9\"></g> <g id=\"_x35_8\"></g> <g id=\"_x35_7\"></g> <g id=\"_x35_6\"></g> <g id=\"_x35_5\"></g> <g id=\"_x35_4\"></g> <g id=\"_x35_3\"></g> <g id=\"_x35_2\"></g> <g id=\"_x35_1\"></g> <g id=\"_x35_0\"></g> <g id=\"_x34_9\"></g> <g id=\"_x34_8\"></g> <g id=\"_x34_7\"></g> <g id=\"_x34_6\"></g> <g id=\"_x34_5\"></g> <g id=\"_x34_4\"></g> <g id=\"_x34_3\"></g> <g id=\"_x34_2\"></g> <g id=\"_x34_1\"></g> <g id=\"_x34_0\"></g> <g id=\"_x33_9\"></g> <g id=\"_x33_8\"></g> <g id=\"_x33_7\"></g> <g id=\"_x33_6\"></g> <g id=\"_x33_5\"></g> <g id=\"_x33_4\"></g> <g id=\"_x33_3\"></g> <g id=\"_x33_2\"></g> <g id=\"_x33_1\"></g> <g id=\"_x33_0\"></g> <g id=\"_x32_9\"></g> <g id=\"_x32_8\"></g> <g id=\"_x32_7\"></g> <g id=\"_x32_6\"></g> <g id=\"_x32_5\"></g> <g id=\"_x32_4_1_\"></g> <g id=\"_x32_3\"></g> <g id=\"_x32_2\"></g> <g id=\"_x32_1\"></g> <g id=\"_x32_0\"></g> <g id=\"_x31_9\"></g> <g id=\"_x31_8\"></g> <g id=\"_x31_7\"></g> <g id=\"_x31_6\"></g> <g id=\"_x31_5\"></g> <g id=\"_x31_4\"></g> <g id=\"_x31_3\"></g> <g id=\"_x31_2\"> <path d=\"M30.1181641,15l0.7763672-1.5527344c0.1357422-0.2714844,0.140625-0.5893555,0.0141602-0.8652344 c-0.1269531-0.2753906-0.3720703-0.4785156-0.6660156-0.5522461L27,11.2192383V11c0-0.5522461-0.4477539-1-1-1h-2.5859375 L22,8.5859375V7c0-0.3081055-0.1420898-0.5986328-0.3847656-0.7880859 c-0.2431641-0.1899414-0.5605469-0.2583008-0.8579102-0.1821289l-4,1 c-0.2412109,0.0605469-0.4511719,0.2084961-0.5893555,0.4155273l-1.0439453,1.5664063l-0.2294922-0.4589844 c-0.144043-0.2875977-0.4169922-0.4882813-0.734375-0.5400391c-0.3144531-0.0488281-0.6401367,0.0537109-0.8671875,0.2802734 l-0.5336914,0.5336914L8.371582,7.0712891C8.152832,6.9838867,7.909668,6.9770508,7.6835938,7.0512695l-3,1 C4.159668,8.2260742,3.8764648,8.7924805,4.0512695,9.3164063l0.7255859,2.1772461l-1.2241211,0.6118164 C3.2138672,12.2749023,3,12.6210938,3,13v1.3818359l-1.4472656,0.7236328 c-0.4941406,0.2470703-0.6943359,0.8476563-0.4472656,1.3417969l1,2C2.2749023,18.7861328,2.6210938,19,3,19h4 c0.2651367,0,0.5195313-0.1054688,0.7070313-0.2929688l0.8330078-0.8330078l2.1899414-0.7299805L13.5859375,20 l-1.2929688,1.2929688c-0.0761719,0.0756836-0.1391602,0.1635742-0.1875,0.2597656l-1,2 c-0.1923828,0.3852539-0.1166992,0.8500977,0.1875,1.1542969l1,1C12.4804688,25.8945313,12.7348633,26,13,26h1 c0.2651367,0,0.5195313-0.1054688,0.7070313-0.2929688L16,24.4140625l0.2929688,0.2929688 c0.2270508,0.2265625,0.5483398,0.3286133,0.8671875,0.2802734c0.3173828-0.0517578,0.590332-0.2524414,0.734375-0.5400391 L18,24.2358398V25c0,0.3789063,0.2138672,0.7250977,0.5527344,0.8945313L20,26.6181641V27 c0,0.3466797,0.1796875,0.668457,0.4741211,0.8505859C20.6347656,27.949707,20.8173828,28,21,28 c0.152832,0,0.3061523-0.0351563,0.4472656-0.1054688l4-2c0.1933594-0.0966797,0.3505859-0.2539063,0.4472656-0.4472656l1-2 c0.1923828-0.3852539,0.1166992-0.8500977-0.1875-1.1542969c-0.3032227-0.3037109-0.7685547-0.3793945-1.1542969-0.1875 l-1.1054688,0.5527344l-0.1386719-0.2773438l4.2060547-2.5234375c0.1630859-0.0976563,0.2949219-0.2402344,0.3798828-0.4101563 L29.6181641,18H30c0.3466797,0,0.668457-0.1796875,0.8505859-0.4741211 c0.1821289-0.2949219,0.1987305-0.6630859,0.0439453-0.9731445L30.1181641,15z M28.1054688,14.5527344 c-0.140625,0.2817383-0.140625,0.612793,0,0.8945313l0.3554688,0.7104492 c-0.1494141,0.0957031-0.2729492,0.2304688-0.3554688,0.3950195l-0.8696289,1.7397461l-4.7504883,2.8500977 c-0.4477539,0.2685547-0.6132813,0.8374023-0.3798828,1.3046875l1,2c0.0537109,0.1074219,0.1240234,0.2006836,0.206543,0.2788086 l-1.4697266,0.7348633c-0.0957031-0.1494141-0.2304688-0.2729492-0.3950195-0.3554688L20,24.3818359v-0.1459961 l0.8945313-1.7885742c0.1547852-0.3100586,0.1381836-0.6782227-0.0439453-0.9731445C20.668457,21.1796875,20.3466797,21,20,21h-2 c-0.3789063,0-0.7250977,0.2138672-0.8945313,0.5527344l-0.3793945,0.7592773l-0.019043-0.019043 c-0.390625-0.390625-1.0234375-0.390625-1.4140625,0L13.5859375,24h-0.171875l-0.1972656-0.1972656l0.6049805-1.2104492 l1.8852539-1.8852539c0.390625-0.390625,0.390625-1.0234375,0-1.4140625l-4-4 c-0.2680664-0.269043-0.6640625-0.3623047-1.0234375-0.2416992l-3,1c-0.1469727,0.0493164-0.2807617,0.1318359-0.390625,0.2416992 L6.5859375,17H3.6181641l-0.2763672-0.5527344l1.1054688-0.5527344C4.7861328,15.7250977,5,15.3789063,5,15v-1.3818359 l1.4472656-0.7236328c0.4448242-0.2226563,0.6586914-0.7387695,0.5014648-1.2109375L6.2651367,9.6323242L7.96875,9.0644531 l4.659668,1.8642578c0.3720703,0.1479492,0.7963867,0.0620117,1.0786133-0.2216797l0.019043-0.019043l0.3793945,0.7592773 c0.159668,0.3188477,0.4765625,0.5288086,0.8325195,0.5507813c0.3510742,0.0263672,0.6962891-0.1469727,0.894043-0.4433594 l1.7856445-2.6782227L20,8.2807617V9c0,0.2651367,0.1054688,0.5195313,0.2929688,0.7070313l2,2 C22.4804688,11.8945313,22.7348633,12,23,12h2c0,0.4589844,0.3125,0.8588867,0.7573242,0.9702148l2.7905273,0.6977539 L28.1054688,14.5527344z\" fill=\"#ffffff\"></path> </g> <g id=\"_x31_1\"></g> <g id=\"_x31_0\"></g> <g id=\"_x39_\"></g> <g id=\"_x38_\"></g> <g id=\"_x37_\"></g> <g id=\"_x36_\"></g> <g id=\"_x35_\"></g> <g id=\"_x34_\"></g> <g id=\"_x33_\"></g> <g id=\"_x32_\"></g> <g id=\"_x31_\"></g> <g id=\"topic\"></g> <g id=\"Guides\"></g> </g></svg>"
    });
    SettingsApi.addParam({
      component: 'tryzubtv',
      param: {
        name: 'tryzubtv_donate',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('tryzubtv_settings_donate')
      },
      onChange: function onChange() {
        openQrModal();
      }
    });
    SettingsApi.addParam({
      component: 'tryzubtv',
      param: {
        name: DONATE_CARD_KEY,
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('tryzubtv_settings_donate_card')
      },
      onChange: function onChange() {
        var enabled = Lampa.Storage.get(DONATE_CARD_KEY, true);
        if (!enabled) {
          Lampa.Noty.show(Lampa.Lang.translate('tryzubtv_settings_donate_sad'));
        }
      }
    });
    SettingsApi.addParam({
      component: 'tryzubtv',
      param: {
        name: SOURCE_TV_KEY,
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('tryzubtv_settings_source_tv')
      },
      onChange: function onChange() {
        ensureAtLeastOne(SOURCE_TV_KEY);
      }
    });
    SettingsApi.addParam({
      component: 'tryzubtv',
      param: {
        name: SOURCE_REPLAY_KEY,
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('tryzubtv_settings_source_replay')
      },
      onChange: function onChange() {
        ensureAtLeastOne(SOURCE_REPLAY_KEY);
      }
    });
    SettingsApi.addParam({
      component: 'tryzubtv',
      param: {
        name: 'tryzubtv_catalog',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('tryzubtv_settings_catalog')
      },
      onChange: function onChange() {
        openCatalogEditor();
      }
    });
  }

  // Утилітарна функція для мапінгу VOD в картку
  function mapVodToCard(vod) {
    try {
      if (!vod.link || !vod.link.startsWith('http')) return null;
      var url = new URL(vod.link);
      var v = url.searchParams.get('v');
      if (!v) return null;
      var description = vod.description || '';
      var release_date = vod.date ? new Date(vod.date).toLocaleDateString() : '';
      return {
        title: vod.name,
        cover: "https://maincast.tv/api/assets/".concat(vod.cover),
        poster: "https://maincast.tv/api/assets/".concat(vod.cover),
        description: description,
        salo_description: description,
        release_date: release_date,
        salo_release_date: release_date,
        salo_vod_id: v,
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
  var Api = {
    // Головна сторінка: по limit_ui елементів на дисципліну + 1 для перевірки More, з підтримкою card-more
    load: function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(params, oncomplete, onerror) {
        var limit_ui, disciplines_response, disciplines, LineModule, line_promises, lines, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              limit_ui = params && params.limit ? params.limit : 10;
              _context2.n = 1;
              return new Promise(function (resolve, reject) {
                Lampa.Network.silent('https://a.maincast.tv/items/discipline?filter={"category":"sport"}&fields=name,id,icon', resolve, reject);
              });
            case 1:
              disciplines_response = _context2.v;
              disciplines = disciplines_response.data || [];
              LineModule = Lampa.Maker && Lampa.Maker.module ? Lampa.Maker.module('Line') : null;
              line_promises = disciplines.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(discipline) {
                  var vod_response, vods, mapped, hasMore, items, line, _t;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        _context.p = 0;
                        _context.n = 1;
                        return new Promise(function (resolve, reject) {
                          Lampa.Network.silent("https://a.maincast.tv/items/vod?filter={\"discipline\":".concat(discipline.id, "}&sort=-date&limit=").concat(limit_ui + 1), resolve, reject);
                        });
                      case 1:
                        vod_response = _context.v;
                        vods = (vod_response.data || []).filter(function (vod) {
                          return vod.link && !vod.link.includes('youtube');
                        });
                        if (vods.length) {
                          _context.n = 2;
                          break;
                        }
                        return _context.a(2, null);
                      case 2:
                        mapped = vods.map(mapVodToCard).filter(Boolean);
                        if (mapped.length) {
                          _context.n = 3;
                          break;
                        }
                        return _context.a(2, null);
                      case 3:
                        hasMore = mapped.length > limit_ui; // Для card-more core очікує, що всі results вже в items, а more докидається окремо модулем
                        // Тому results = перші limit_ui, але total_pages > 1 + модуль More з params.more
                        items = hasMore ? mapped.slice(0, limit_ui) : mapped;
                        if (items.length) {
                          _context.n = 4;
                          break;
                        }
                        return _context.a(2, null);
                      case 4:
                        line = {
                          title: discipline.name,
                          results: items,
                          total_pages: hasMore ? 2 : 1,
                          params: {
                            salopower: true,
                            disciplineId: discipline.id
                          }
                        };
                        if (hasMore && LineModule) {
                          // MASK.base вже включає Items/Create, додаємо More згідно рекомендацій deepwiki
                          line.params.module = LineModule.toggle(LineModule.MASK.base, 'More');

                          // Конфіг для компонента More (card-more) + для onMore
                          line.params.more = {
                            title: 'Усі відео: ' + discipline.name,
                            component: 'salopower_category',
                            disciplineId: discipline.id
                          };
                        }
                        return _context.a(2, line);
                      case 5:
                        _context.p = 5;
                        _t = _context.v;
                        console.error("SaloPower: Failed to load VODs for discipline ".concat(discipline.id), _t);
                        return _context.a(2, null);
                    }
                  }, _callee, null, [[0, 5]]);
                }));
                return function (_x4) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context2.n = 2;
              return Promise.all(line_promises);
            case 2:
              lines = _context2.v.filter(Boolean);
              oncomplete(lines);
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error('SaloPower API Error:', _t2);
              onerror(_t2);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 3]]);
      }));
      function load(_x, _x2, _x3) {
        return _load.apply(this, arguments);
      }
      return load;
    }(),
    // Категорія: до 100 елементів по дисципліні, без More (full список)
    loadCategory: function () {
      var _loadCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(disciplineId, oncomplete, onerror) {
        var url, vod_response, vods, items, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.p = 0;
              url = "https://a.maincast.tv/items/vod?filter={\"discipline\":".concat(disciplineId, "}&sort=-date&limit=100");
              _context3.n = 1;
              return new Promise(function (resolve, reject) {
                Lampa.Network.silent(url, resolve, reject);
              });
            case 1:
              vod_response = _context3.v;
              vods = (vod_response.data || []).filter(function (vod) {
                return vod.link && !vod.link.includes('youtube');
              });
              items = vods.map(mapVodToCard).filter(Boolean);
              oncomplete([{
                title: '',
                results: items,
                total_pages: 1,
                params: {
                  salopower: true,
                  disciplineId: disciplineId
                }
              }]);
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("SaloPower: Failed to load category for discipline ".concat(disciplineId), _t3);
              onerror(_t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      function loadCategory(_x5, _x6, _x7) {
        return _loadCategory.apply(this, arguments);
      }
      return loadCategory;
    }()
  };

  function component(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.loader(true);

        // Api.loadCategory вже повертає масив line-обʼєктів для build
        Api.loadCategory(object.disciplineId, function (lines) {
          _this.build(lines);
          _this.activity.loader(false);
        }, this.empty.bind(this));
      },
      onInstance: function onInstance(line_item, line_data) {
        line_data.params || {};
        line_item.use({
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
                  console.error('SaloPower Category: card overlay create error', e);
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
                        console.error('SaloPower: Failed to start playback', _t);
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
      }
    });
    return comp;
  }

  function startPlugin() {
    window.tryzubtv_merged = true;
    if (Lampa.Storage) Lampa.Storage.set('tryzubtv_merged', true);
    var manifest = {
      type: 'iptv',
      version: '1.5.0',
      name: 'TryzubTV',
      description: 'Ukrainian TV channels',
      component: 'tryzubtv_main'
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('tryzubtv_main', component$2);
    Lampa.Component.add('tryzubtv_category', component$1);
    Lampa.Component.add('salopower_category', component);
    lang();
    initSettings();
    var style = document.createElement('style');
    style.textContent = "\n        .card--tryzubtv .card__img {\n            object-fit: contain;\n            object-position: center;\n            background: transparent;\n        }\n\n        .card--tryzubtv.card--wide {\n            width: 15em;\n        }\n\n        .card--tryzubtv .card__promo-title {\n            font-size: 1em;\n            line-height: 1.2;\n            max-height: 2.4em;\n            overflow: hidden;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            line-clamp: 2;\n            -webkit-box-orient: vertical;\n            text-overflow: ellipsis;\n        }\n\n        .card--tryzubtv .card__promo-text {\n            display: none;\n        }\n\n        .card--tryzubtv.card--wide .card__title {\n            display: none;\n        }\n\n        .card--tryzubtv .card__promo {\n            overflow: hidden;\n            padding: 2em 1em 1em 1em;\n        }\n\n        .tryzubtv-activity .items-line {\n            padding-bottom: 1em;\n        }\n\n        .card--wide.card--salopower .card__view {\n            position: relative;\n        }\n\n        .card--wide.card--salopower .card__body--salopower {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            padding: 1.2em 1.5em;\n            background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%);\n            pointer-events: none;\n        }\n\n        .card--wide.card--salopower .card__promo {\n            display: none;\n        }\n\n        .card--wide.card--salopower .card__body--salopower .card__title {\n            font-size: 1.6em;\n            font-weight: 700;\n        }\n\n        .card--wide.card--salopower .card__salopower-data {\n            margin-top: auto;\n            padding-top: 1em;\n        }\n\n        .card--salopower .card__description {\n            font-size: 1.3em;\n            color: rgba(255, 255, 255, 0.7);\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            display: -webkit-box;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .card--salopower .card__release-date {\n            font-size: 1.2em;\n            color: rgba(255, 255, 255, 0.5);\n            margin-top: 0.5em;\n        }\n    ";
    document.head.appendChild(style);
    Lampa.Template.add('salopower_episode_card_data', "\n        <div class=\"card__body card__body--salopower\">\n            <div class=\"card__title\">{title}</div>\n            <div class=\"card__salopower-data\">\n                <div class=\"card__description\">{salo_description}</div>\n                <div class=\"card__release-date\">{salo_release_date}</div>\n            </div>\n        </div>\n    ");
    SocketManager.getInstance().listen();
    function addMenu() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\" version=\"1.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#ffffff\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"_x36_0\"></g> <g id=\"_x35_9\"></g> <g id=\"_x35_8\"></g> <g id=\"_x35_7\"></g> <g id=\"_x35_6\"></g> <g id=\"_x35_5\"></g> <g id=\"_x35_4\"></g> <g id=\"_x35_3\"></g> <g id=\"_x35_2\"></g> <g id=\"_x35_1\"></g> <g id=\"_x35_0\"></g> <g id=\"_x34_9\"></g> <g id=\"_x34_8\"></g> <g id=\"_x34_7\"></g> <g id=\"_x34_6\"></g> <g id=\"_x34_5\"></g> <g id=\"_x34_4\"></g> <g id=\"_x34_3\"></g> <g id=\"_x34_2\"></g> <g id=\"_x34_1\"></g> <g id=\"_x34_0\"></g> <g id=\"_x33_9\"></g> <g id=\"_x33_8\"></g> <g id=\"_x33_7\"></g> <g id=\"_x33_6\"></g> <g id=\"_x33_5\"></g> <g id=\"_x33_4\"></g> <g id=\"_x33_3\"></g> <g id=\"_x33_2\"></g> <g id=\"_x33_1\"></g> <g id=\"_x33_0\"></g> <g id=\"_x32_9\"></g> <g id=\"_x32_8\"></g> <g id=\"_x32_7\"></g> <g id=\"_x32_6\"></g> <g id=\"_x32_5\"></g> <g id=\"_x32_4_1_\"></g> <g id=\"_x32_3\"></g> <g id=\"_x32_2\"></g> <g id=\"_x32_1\"></g> <g id=\"_x32_0\"></g> <g id=\"_x31_9\"></g> <g id=\"_x31_8\"></g> <g id=\"_x31_7\"></g> <g id=\"_x31_6\"></g> <g id=\"_x31_5\"></g> <g id=\"_x31_4\"></g> <g id=\"_x31_3\"></g> <g id=\"_x31_2\"> <path d=\"M30.1181641,15l0.7763672-1.5527344c0.1357422-0.2714844,0.140625-0.5893555,0.0141602-0.8652344 c-0.1269531-0.2753906-0.3720703-0.4785156-0.6660156-0.5522461L27,11.2192383V11c0-0.5522461-0.4477539-1-1-1h-2.5859375 L22,8.5859375V7c0-0.3081055-0.1420898-0.5986328-0.3847656-0.7880859 c-0.2431641-0.1899414-0.5605469-0.2583008-0.8579102-0.1821289l-4,1 c-0.2412109,0.0605469-0.4511719,0.2084961-0.5893555,0.4155273l-1.0439453,1.5664063l-0.2294922-0.4589844 c-0.144043-0.2875977-0.4169922-0.4882813-0.734375-0.5400391c-0.3144531-0.0488281-0.6401367,0.0537109-0.8671875,0.2802734 l-0.5336914,0.5336914L8.371582,7.0712891C8.152832,6.9838867,7.909668,6.9770508,7.6835938,7.0512695l-3,1 C4.159668,8.2260742,3.8764648,8.7924805,4.0512695,9.3164063l0.7255859,2.1772461l-1.2241211,0.6118164 C3.2138672,12.2749023,3,12.6210938,3,13v1.3818359l-1.4472656,0.7236328 c-0.4941406,0.2470703-0.6943359,0.8476563-0.4472656,1.3417969l1,2C2.2749023,18.7861328,2.6210938,19,3,19h4 c0.2651367,0,0.5195313-0.1054688,0.7070313-0.2929688l0.8330078-0.8330078l2.1899414-0.7299805L13.5859375,20 l-1.2929688,1.2929688c-0.0761719,0.0756836-0.1391602,0.1635742-0.1875,0.2597656l-1,2 c-0.1923828,0.3852539-0.1166992,0.8500977,0.1875,1.1542969l1,1C12.4804688,25.8945313,12.7348633,26,13,26h1 c0.2651367,0,0.5195313-0.1054688,0.7070313-0.2929688L16,24.4140625l0.2929688,0.2929688 c0.2270508,0.2265625,0.5483398,0.3286133,0.8671875,0.2802734c0.3173828-0.0517578,0.590332-0.2524414,0.734375-0.5400391 L18,24.2358398V25c0,0.3789063,0.2138672,0.7250977,0.5527344,0.8945313L20,26.6181641V27 c0,0.3466797,0.1796875,0.668457,0.4741211,0.8505859C20.6347656,27.949707,20.8173828,28,21,28 c0.152832,0,0.3061523-0.0351563,0.4472656-0.1054688l4-2c0.1933594-0.0966797,0.3505859-0.2539063,0.4472656-0.4472656l1-2 c0.1923828-0.3852539,0.1166992-0.8500977-0.1875-1.1542969c-0.3032227-0.3037109-0.7685547-0.3793945-1.1542969-0.1875 l-1.1054688,0.5527344l-0.1386719-0.2773438l4.2060547-2.5234375c0.1630859-0.0976563,0.2949219-0.2402344,0.3798828-0.4101563 L29.6181641,18H30c0.3466797,0,0.668457-0.1796875,0.8505859-0.4741211 c0.1821289-0.2949219,0.1987305-0.6630859,0.0439453-0.9731445L30.1181641,15z M28.1054688,14.5527344 c-0.140625,0.2817383-0.140625,0.612793,0,0.8945313l0.3554688,0.7104492 c-0.1494141,0.0957031-0.2729492,0.2304688-0.3554688,0.3950195l-0.8696289,1.7397461l-4.7504883,2.8500977 c-0.4477539,0.2685547-0.6132813,0.8374023-0.3798828,1.3046875l1,2c0.0537109,0.1074219,0.1240234,0.2006836,0.206543,0.2788086 l-1.4697266,0.7348633c-0.0957031-0.1494141-0.2304688-0.2729492-0.3950195-0.3554688L20,24.3818359v-0.1459961 l0.8945313-1.7885742c0.1547852-0.3100586,0.1381836-0.6782227-0.0439453-0.9731445C20.668457,21.1796875,20.3466797,21,20,21h-2 c-0.3789063,0-0.7250977,0.2138672-0.8945313,0.5527344l-0.3793945,0.7592773l-0.019043-0.019043 c-0.390625-0.390625-1.0234375-0.390625-1.4140625,0L13.5859375,24h-0.171875l-0.1972656-0.1972656l0.6049805-1.2104492 l1.8852539-1.8852539c0.390625-0.390625,0.390625-1.0234375,0-1.4140625l-4-4 c-0.2680664-0.269043-0.6640625-0.3623047-1.0234375-0.2416992l-3,1c-0.1469727,0.0493164-0.2807617,0.1318359-0.390625,0.2416992 L6.5859375,17H3.6181641l-0.2763672-0.5527344l1.1054688-0.5527344C4.7861328,15.7250977,5,15.3789063,5,15v-1.3818359 l1.4472656-0.7236328c0.4448242-0.2226563,0.6586914-0.7387695,0.5014648-1.2109375L6.2651367,9.6323242L7.96875,9.0644531 l4.659668,1.8642578c0.3720703,0.1479492,0.7963867,0.0620117,1.0786133-0.2216797l0.019043-0.019043l0.3793945,0.7592773 c0.159668,0.3188477,0.4765625,0.5288086,0.8325195,0.5507813c0.3510742,0.0263672,0.6962891-0.1469727,0.894043-0.4433594 l1.7856445-2.6782227L20,8.2807617V9c0,0.2651367,0.1054688,0.5195313,0.2929688,0.7070313l2,2 C22.4804688,11.8945313,22.7348633,12,23,12h2c0,0.4589844,0.3125,0.8588867,0.7573242,0.9702148l2.7905273,0.6977539 L28.1054688,14.5527344z\" fill=\"#ffffff\"></path> </g> <g id=\"_x31_1\"></g> <g id=\"_x31_0\"></g> <g id=\"_x39_\"></g> <g id=\"_x38_\"></g> <g id=\"_x37_\"></g> <g id=\"_x36_\"></g> <g id=\"_x35_\"></g> <g id=\"_x34_\"></g> <g id=\"_x33_\"></g> <g id=\"_x32_\"></g> <g id=\"_x31_\"></g> <g id=\"topic\"></g> <g id=\"Guides\"></g> </g></svg>\n            </div>\n            <div class=\"menu__text\">".concat(Lampa.Lang.translate('tryzubtv_title'), "</div>\n        </li>"));
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('tryzubtv_title') + " | Спільнота t.me/mmssixxx",
          component: 'tryzubtv_main',
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
