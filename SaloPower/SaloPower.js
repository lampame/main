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

  function component$1(object) {
    var comp = Lampa.Maker.make('Main', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.loader(true);

        // Беремо 10 для UI, Api.load сам вирішує total_pages та More
        Api.load({
          limit: 10
        }, function (lines) {
          _this.build(lines);
          _this.activity.loader(false);
        }, this.empty.bind(this));
      },
      onInstance: function onInstance(line_item, line_data) {
        var params = line_data.params || {};
        line_item.use({
          // Обробник для core-модуля More
          onMore: function onMore() {
            var more = params && params.more || {};

            // Очікуємо, що Api.load підготував дані для переходу у salopower_category
            if (more.component === 'salopower_category' && more.disciplineId) {
              Lampa.Activity.push({
                url: '',
                title: more.title || 'Усі відео: ' + (line_data.title || ''),
                component: 'salopower_category',
                disciplineId: more.disciplineId
              });
            }
          },
          onInstance: function onInstance(card_item, card_data) {
            card_item.use({
              onCreate: function onCreate() {
                try {
                  // Отримуємо DOM картки з урахуванням Maker-обгортки
                  var cardElement = this.render ? this.render(true) : card_item.render ? card_item.render(true) : null;
                  if (!cardElement) return;
                  var $card = $(cardElement);
                  var card_view = $card.find('.card__view');
                  if (!card_view.length || !card_data) return;
                  var title = card_data.title || '';
                  var desc = card_data.salo_description || card_data.description || '';
                  var date = card_data.salo_release_date || card_data.release_date || '';
                  if (!title && !desc && !date) return;

                  // Позначаємо як SaloPower-карту (CSS таргетує тільки ці)
                  $card.addClass('card--salopower');
                  var tpl = Lampa.Template.get('salopower_episode_card_data', {
                    title: title,
                    salo_description: desc,
                    salo_release_date: date
                  });
                  card_view.append(tpl);
                } catch (e) {
                  console.error('SaloPower: card overlay create error', e);
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
    var manifest = {
      type: 'video',
      version: '0.0.2',
      name: 'SaloPower',
      description: 'Спортивні replay з SaloPower',
      component: 'salopower'
    };

    // TODO: якщо ядро підтримує масив, краще пушити, але лишаємо як у вихідному коді
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('salopower_main', component$1);
    Lampa.Component.add('salopower_category', component);

    // Шаблон для додаткових даних поверх картки
    // ВАЖЛИВО: без {if(...)} синтаксису ядра, умови контролюються в JS (main.js/category.js)
    Lampa.Template.add('salopower_episode_card_data', "\n        <div class=\"card__body card__body--salopower\">\n            <div class=\"card__title\">{title}</div>\n            <div class=\"card__salopower-data\">\n                <div class=\"card__description\">{salo_description}</div>\n                <div class=\"card__release-date\">{salo_release_date}</div>\n            </div>\n        </div>\n    ");
    var style = document.createElement('style');
    style.textContent = "\n        /* \u0422\u0430\u0440\u0433\u0435\u0442\u0443\u0454\u043C\u043E \u0442\u0456\u043B\u044C\u043A\u0438 \u043D\u0430\u0448\u0456 \u043A\u0430\u0440\u0442\u043A\u0438, \u043D\u0435 \u043B\u0430\u043C\u0430\u0454\u043C\u043E \u0456\u043D\u0448\u0456 wide-\u043A\u0430\u0440\u0442\u0438 */\n        .card--wide.card--salopower .card__view {\n            position: relative;\n        }\n        .card--wide.card--salopower .card__body--salopower {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            padding: 1.2em 1.5em;\n            background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%);\n            pointer-events: none; /* \u043D\u0435 \u0431\u043B\u043E\u043A\u0443\u0454\u043C\u043E hover/enter */\n        }\n        /* \u0425\u043E\u0432\u0430\u0454\u043C\u043E \u0448\u0442\u0430\u0442\u043D\u0438\u0439 \u043F\u0440\u043E\u043C\u043E-\u0431\u043B\u043E\u043A \u0442\u0456\u043B\u044C\u043A\u0438 \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u043A\u0430\u0440\u0442\u0430\u0445 */\n        .card--wide.card--salopower .card__promo {\n            display: none;\n        }\n        .card--wide.card--salopower .card__body--salopower .card__title {\n            font-size: 1.6em;\n            font-weight: 700;\n        }\n        .card--wide.card--salopower .card__salopower-data {\n            margin-top: auto;\n            padding-top: 1em;\n        }\n        .card--salopower .card__description {\n            font-size: 1.3em;\n            color: rgba(255, 255, 255, 0.7);\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            display: -webkit-box;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .card--salopower .card__release-date {\n            font-size: 1.2em;\n            color: rgba(255, 255, 255, 0.5);\n            margin-top: 0.5em;\n        }\n    ";
    document.head.appendChild(style);

    // Ініціалізуємо слухача подій плеєра
    SocketManager.getInstance().listen();
    function add() {
      var button = $("<li class=\"menu__item selector\">  \n            <div class=\"menu__ico\">  \n                <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">  \n                    <circle cx=\"19\" cy=\"19\" r=\"17\" stroke=\"currentColor\" stroke-width=\"3\"/>  \n                    <path d=\"M19 10V28M10 19H28\" stroke=\"currentColor\" stroke-width=\"3\"/>  \n                </svg>  \n            </div>  \n            <div class=\"menu__text\">".concat(manifest.name, "</div>  \n        </li>"));
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: manifest.name,
          component: 'salopower_main',
          page: 1
        });
      });
      $('.menu .menu__list').eq(0).append(button);
    }
    if (window.appready) add();else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') add();
      });
    }
  }
  if (Lampa.Manifest.app_digital >= 300) startPlugin();

  return startPlugin;

})();
