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

  var API_BASE = 'https://dyvy.tv/api/v1';
  function request$1(url) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(url, resolve, reject);
    });
  }
  function isFreeChannel(channel) {
    return channel && channel.package_block == null;
  }
  function translateCategoryName(name) {
    var raw = name || '';
    if (!raw) return '';
    var key = "tryzubtv_category_".concat(raw);
    var translated = Lampa.Lang ? Lampa.Lang.translate(key) : key;
    return translated === key ? raw : translated;
  }
  function mapChannelToCard(channel, category) {
    var logo = channel.icon_url || channel.icon_url_2 || '';
    var poster = logo || channel.frame_url || channel.frame_url_origin || '';
    var categorySlug = category ? category.slug : '';
    var categoryTitle = translateCategoryName(category ? category.name : '');
    var nowTitle = channel.epg_current && channel.epg_current.name ? channel.epg_current.name : '';
    var fallbackTitle = channel.name || '';
    return {
      title: nowTitle || fallbackTitle,
      poster: poster,
      cover: poster,
      img: logo,
      overview: channel.description || '',
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
  function loadMain(_x, _x2) {
    return _loadMain.apply(this, arguments);
  }
  function _loadMain() {
    _loadMain = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(oncomplete, onerror) {
      var response, categories, LineModule, lines, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return request$1("".concat(API_BASE, "/categories?is_main=1"));
          case 1:
            response = _context2.v;
            categories = response && response.data ? response.data : [];
            LineModule = Lampa.Maker && Lampa.Maker.module ? Lampa.Maker.module('Line') : null;
            _context2.n = 2;
            return Promise.all(categories.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(category) {
                var url, channelsResponse, channels, total, categoryName, displayTitle, items, lineTitle, line, _t;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      _context.p = 0;
                      url = "".concat(API_BASE, "/channels?category_slug=").concat(encodeURIComponent(category.slug || ''), "&limit=500");
                      _context.n = 1;
                      return request$1(url);
                    case 1:
                      channelsResponse = _context.v;
                      channels = channelsResponse && channelsResponse.data ? channelsResponse.data : [];
                      total = channelsResponse && channelsResponse.meta && channelsResponse.meta.total ? channelsResponse.meta.total : channels.length;
                      categoryName = category && category.name ? category.name : '';
                      displayTitle = translateCategoryName(categoryName);
                      items = channels.filter(isFreeChannel).filter(function (channel) {
                        return channel && channel.link;
                      }).map(function (channel) {
                        return mapChannelToCard(channel, category);
                      }).filter(Boolean);
                      if (items.length) {
                        _context.n = 2;
                        break;
                      }
                      return _context.a(2, null);
                    case 2:
                      lineTitle = total ? "".concat(displayTitle, " \xB7 ").concat(total) : displayTitle;
                      line = {
                        title: lineTitle,
                        results: items,
                        total_pages: 2,
                        params: {
                          tryzubtv_category: category.slug || '',
                          tryzubtv_category_title: displayTitle,
                          tryzubtv_category_total: total
                        }
                      };
                      if (LineModule) {
                        line.params.module = LineModule.toggle(LineModule.MASK.base, 'More');
                        line.params.more = {
                          title: displayTitle,
                          component: 'tryzubtv_category',
                          category_slug: category.slug || ''
                        };
                      }
                      return _context.a(2, line);
                    case 3:
                      _context.p = 3;
                      _t = _context.v;
                      console.error('TryzubTV: load category channels failed', category.slug, _t);
                      return _context.a(2, null);
                  }
                }, _callee, null, [[0, 3]]);
              }));
              return function (_x7) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 2:
            lines = _context2.v.filter(Boolean);
            oncomplete(lines);
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error('TryzubTV: loadMain failed', _t2);
            onerror(_t2);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return _loadMain.apply(this, arguments);
  }
  function loadCategory(_x3, _x4, _x5, _x6) {
    return _loadCategory.apply(this, arguments);
  }
  function _loadCategory() {
    _loadCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(categorySlug, categoryTitle, oncomplete, onerror) {
      var url, response, channels, total, title, lineTitle, items, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            url = "".concat(API_BASE, "/channels?category_slug=").concat(encodeURIComponent(categorySlug), "&limit=500");
            _context3.n = 1;
            return request$1(url);
          case 1:
            response = _context3.v;
            channels = response && response.data ? response.data : [];
            total = response && response.meta && response.meta.total ? response.meta.total : channels.length;
            title = translateCategoryName(categoryTitle || categorySlug || '');
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
                tryzubtv_category: categorySlug || '',
                tryzubtv_category_title: title,
                tryzubtv_category_total: total
              }
            }]);
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            console.error('TryzubTV: loadCategory failed', _t3);
            onerror(_t3);
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return _loadCategory.apply(this, arguments);
  }
  var Api = {
    loadMain: loadMain,
    loadCategory: loadCategory,
    API_BASE: API_BASE
  };

  function request(url) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(url, resolve, reject);
    });
  }
  function buildChannelEpgUrl(slug) {
    return "".concat(Api.API_BASE, "/channels/").concat(encodeURIComponent(slug), "?expand=epg_items");
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
            url = "".concat(Api.API_BASE, "/channels?category_slug=").concat(encodeURIComponent(categorySlug), "&limit=500");
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

  function component$1(object) {
    var comp = Lampa.Maker.make('Main', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.loader(true);
        Api.loadMain(function (lines) {
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
        lineItem.use({
          onMore: function onMore() {
            var more = params.more || {};
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

  function component(object) {
    var comp = Lampa.Maker.make('Category', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.loader(true);
        if (!object.category_slug) {
          this.activity.loader(false);
          this.empty();
          return;
        }
        Api.loadCategory(object.category_slug, object.category_title, function (lines) {
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

  function startPlugin() {
    var manifest = {
      type: 'iptv',
      version: '1.0.2',
      name: 'TryzubTV',
      description: 'Ukrainian TV channels',
      component: 'tryzubtv_main'
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('tryzubtv_main', component$1);
    Lampa.Component.add('tryzubtv_category', component);
    lang();
    var style = document.createElement('style');
    style.textContent = "\n        .card--tryzubtv .card__img {\n            object-fit: contain;\n            object-position: center;\n            background: transparent;\n        }\n    ";
    document.head.appendChild(style);
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
