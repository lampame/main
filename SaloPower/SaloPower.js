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

  var Api = {
    load: function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(oncomplete, onerror) {
        var disciplines_response, vod_response, disciplines, vods, disciplineMap, grouped, lines, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return new Promise(function (resolve, reject) {
                Lampa.Network.silent('https://a.maincast.tv/items/discipline?filter={"category":"sport"}&fields=name,id', resolve, reject, false, {
                  dataType: 'json',
                  timeout: 10000
                });
              });
            case 1:
              disciplines_response = _context.v;
              _context.n = 2;
              return new Promise(function (resolve, reject) {
                Lampa.Network.silent('https://a.maincast.tv/items/vod?filter={"discipline":{"category":"sport"}}&sort=-date&limit=500', resolve, reject, false, {
                  dataType: 'json',
                  timeout: 10000
                });
              });
            case 2:
              vod_response = _context.v;
              disciplines = disciplines_response.data;
              vods = vod_response.data.filter(function (vod) {
                return vod.link && !vod.link.includes('youtube');
              });
              disciplineMap = {};
              disciplines.forEach(function (d) {
                disciplineMap[d.id] = d.name;
              });
              grouped = {};
              vods.forEach(function (vod) {
                if (!grouped[vod.discipline]) {
                  grouped[vod.discipline] = [];
                }
                grouped[vod.discipline].push(vod);
              });
              lines = [];
              Object.keys(grouped).forEach(function (disciplineId) {
                var disciplineName = disciplineMap[disciplineId] || 'Інше';
                var items = grouped[disciplineId].map(function (vod) {
                  try {
                    if (!vod.link || !vod.link.startsWith('http')) {
                      return null;
                    }
                    var url = new URL(vod.link);
                    var v = url.searchParams.get('v');
                    if (!v) return null;
                    return {
                      title: vod.description || vod.name,
                      // Стандартне поле Lampa
                      promo_title: vod.description || vod.name,
                      // Поле для кастомного шаблону
                      release_date: vod.date,
                      // Стандартне поле Lampa
                      cover: "https://maincast.tv/api/assets/".concat(vod.cover),
                      poster: "https://maincast.tv/api/assets/".concat(vod.cover),
                      vod_id: v,
                      params: {
                        style: {
                          name: 'wide'
                        }
                      }
                    };
                  } catch (e) {
                    console.error("SaloPower: Error processing VOD item", vod, e);
                    return null;
                  }
                }).filter(function (item) {
                  return item !== null;
                });
                if (items.length > 0) {
                  lines.push({
                    title: disciplineName,
                    results: items
                  });
                }
              });
              oncomplete(lines);
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('SaloPower API Error:', _t);
              onerror(_t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }));
      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }
      return load;
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

  function component(object) {
    var comp = Lampa.Maker.make('Main', object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        this.activity.loader(true);
        Api.load(function (data) {
          _this.build(data);
          _this.activity.loader(false);
        }, this.empty.bind(this));
      },
      onInstance: function onInstance(item, data) {
        item.use({
          onInstance: function onInstance(card, card_data) {
            card.use({
              onEnter: function () {
                var _onEnter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var socket, key, newLink, _t;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        Lampa.Loading.start();
                        _context.p = 1;
                        socket = SocketManager.getInstance();
                        _context.n = 2;
                        return socket.connect();
                      case 2:
                        key = _context.v;
                        newLink = "https://vod-maincast.cosmonova-broadcast.tv/".concat(card_data.vod_id, "/master.m3u8?key=").concat(key);
                        Lampa.Player.play({
                          title: card_data.title,
                          url: newLink
                        });
                        _context.n = 4;
                        break;
                      case 3:
                        _context.p = 3;
                        _t = _context.v;
                        console.error('SaloPower: Failed to start playback', _t);
                        Lampa.Noty.show('Не вдалося отримати ключ для відтворення.');
                      case 4:
                        _context.p = 4;
                        Lampa.Loading.stop();
                        return _context.f(4);
                      case 5:
                        return _context.a(2);
                    }
                  }, _callee, null, [[1, 3, 4, 5]]);
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
      version: '0.0.1',
      name: 'SaloPower',
      description: 'Спортивні replay з SaloPower',
      component: 'salopower'
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('salopower_main', component);

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
