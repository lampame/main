(function () {
    'use strict';

    function Component$1() {
      Lampa.Lang.add({
        pathMovie: {
          "ru": "Путь сохранения фильмов",
          "en": "Path to save movies",
          "uk": "Шлях збереження фільмів"
        },
        pathTV: {
          "ru": "Путь сохранения сериалов",
          "en": "Path to save TV shows",
          "uk": "Шлях збереження серіалів"
        },
        universalAction: {
          ru: "Действие",
          en: "Action",
          uk: "Дія",
          zh: "行动"
        },
        openUniversal: {
          ru: "Открывать в клиенте",
          en: "Open in external client",
          uk: "Відкрити у застосунку",
          zh: "在外部客户端打开"
        },
        copyUniversal: {
          ru: "Копировать ссылку",
          en: "Copy link",
          uk: "Скопіювати посилання",
          zh: "复制到缓冲区"
        },
        tweak: {
          ru: "Tweak",
          en: "Tweak",
          uk: "Tweak",
          zh: "高级设置"
        },
        LMEProxy: {
          ru: "Прокси",
          en: "Proxy",
          uk: "Проксі",
          zh: "Proxy"
        },
        LMEProxyDescription: {
          en: "The proxy service from the LME project can help when connecting through external addresses. For example, Keenetic or Synology DNS",
          ru: "Прокси сервис от проекта LME, может помочь при подключении через внешние адреса. Например Keenetic или Synology DNS",
          uk: "Проксі-сервіс від проєкту LME може допомогти при підключенні через зовнішні адреси. Наприклад, Keenetic або Synology DNS"
        },
        TransmissionRPCRoute: {
          ru: "RPC Path",
          en: "RPC Path",
          uk: "RPC Path",
          zh: "RPC 路径"
        },
        TransmissionRPCRouteDescription: {
          ru: "Изменение пути API. Не трогать без необходимости, если используете KeenDNS указать /app/transmission/rpc",
          en: "Change api route. Do not change without need, if you use KeenDNS, specify /app/transmission/rpc",
          uk: "Змінити маршрут API. Не чіпати без нагальної потреби, якщо ви використовуєте KeenDNS, вкажіть /app/transmission/rpc",
          zh: "更改API路径。如无必要，请勿更改, 如使用 KeenDNS，请指定 /app/transmission/rpc"
        },
        //Auth
        AuthSuccess: {
          en: "Authentication successful",
          ru: "Аутентификация успешна",
          uk: "Аутентифікація успішна"
        },
        AuthDenied: {
          en: "Authentication denied",
          ru: "Аутентификация отклонена",
          uk: "Аутентифікацію відхилено"
        },
        //Panel
        clientNotClient: {
          en: "Either the client is not configured or the server is not responding, check the console, you might find the answer there",
          ru: "Или клиент не настроен или сервер не отвечает, узри консоль, возможно там найдешь ответ",
          uk: "Або клієнт не налаштований, або сервер не відповідає, перевір консоль, можливо там знайдеш відповідь"
        },
        somethingWentWrong: {
          en: "Something went wrong",
          ru: "Что-то пошло не так",
          uk: "Щось пішло не так"
        },
        //Panel action
        actionWithTorrent: {
          en: "Action with torrent",
          ru: "Действие с торрентом",
          uk: "Дія з торрентом"
        },
        resume: {
          en: "Resume",
          ru: "Возобновить",
          uk: "Відновити"
        },
        pause: {
          en: "Pause",
          ru: "Пауза",
          uk: "Пауза"
        },
        "delete": {
          en: "Delete",
          ru: "Удалить",
          uk: "Видалити"
        },
        fullDelete: {
          en: "Full delete",
          ru: "Полное удаление",
          uk: "Повне видалення"
        },
        actionSentSuccessfully: {
          "en": "Action sent successfully",
          "ru": "Действие успешно отправлено",
          "uk": "Дію успішно надіслано"
        },
        actionReturnedError: {
          en: "Action returned an error",
          ru: "Действие вернуло ошибку",
          uk: "Дія повернула помилку"
        },
        torrent_select_file: {
          en: "Select file to play",
          ru: "Выберите файл для воспроизведения",
          uk: "Виберіть файл для відтворення"
        },
        sort_by_name: {
          en: "Sort by name",
          ru: "Сортировать по имени",
          uk: "Сортувати за назвою"
        },
        sort_by_size: {
          en: "Sort by size",
          ru: "Сортировать по размеру",
          uk: "Сортувати за розміром"
        },
        sort_by_progress: {
          en: "Sort by progress",
          ru: "Сортировать по прогрессу",
          uk: "Сортувати за прогресом"
        },
        openCard: {
          en: "Open",
          ru: "Открыть",
          uk: "Відкрити"
        },
        add_metadata: {
          en: "Add metadata",
          ru: "Добавить метаданные",
          uk: "Додати метадані"
        },
        add_metadata_all: {
          en: "Parse all",
          ru: "Парсить все",
          uk: "Парсити все"
        },
        selectResult: {
          en: "Select result",
          ru: "Выберите результат",
          uk: "Виберіть результат"
        }
      });
    }

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
    function _inherits(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && _setPrototypeOf(t, e);
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
    function _setPrototypeOf(t, e) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
        return t.__proto__ = e, t;
      }, _setPrototypeOf(t, e);
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
    function _wrapRegExp() {
      _wrapRegExp = function (e, r) {
        return new BabelRegExp(e, void 0, r);
      };
      var e = RegExp.prototype,
        r = new WeakMap();
      function BabelRegExp(e, t, p) {
        var o = RegExp(e, t);
        return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
      }
      function buildGroups(e, t) {
        var p = r.get(t);
        return Object.keys(p).reduce(function (r, t) {
          var o = p[t];
          if ("number" == typeof o) r[t] = e[o];else {
            for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
            r[t] = e[o[i]];
          }
          return r;
        }, Object.create(null));
      }
      return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
        var t = e.exec.call(this, r);
        if (t) {
          t.groups = buildGroups(t, this);
          var p = t.indices;
          p && (p.groups = buildGroups(p, this));
        }
        return t;
      }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
        if ("string" == typeof p) {
          var o = r.get(this);
          return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
            if ("" === t) return e;
            var p = o[r];
            return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
          }));
        }
        if ("function" == typeof p) {
          var i = this;
          return e[Symbol.replace].call(this, t, function () {
            var e = arguments;
            return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
          });
        }
        return e[Symbol.replace].call(this, t, p);
      }, _wrapRegExp.apply(this, arguments);
    }

    function getPosterFromLabels(labels) {
      return new Promise(function (resolve, reject) {
        // Ищем лейблы, которые начинаются на tv или movie и содержат цифры после косой
        var labelArray = Array.isArray(labels) ? labels : labels.split(',');

        // Find label matching tv/movie pattern
        var label = labelArray.find(function (label) {
          return /^(tv|movie)\/\d+$/.test(label);
        });
        if (!label) {
          return resolve('./img/img_load.svg');
        }
        var directTMDBApi = "".concat(Lampa.TMDB.api(label), "/images?api_key=").concat(Lampa.TMDB.key()); // Прямой запрос к API TMDB
        var directTMDBImage = Lampa.TMDB.image("t/p/"); // Прямой запрос к API TMDB для получения изображения
        var proxyTMDBApi;
        var proxyTMDBImage;
        if (Lampa.Storage.field('lmetorrentproxyTMDB') == true) {
          proxyTMDBApi = "https://lampame.v6.rocks/https://tmdb.melonhu.cn/get/".concat(label, "/images?api_key=").concat(Lampa.TMDB.key());
          proxyTMDBImage = 'https://lampame.v6.rocks/https://tmdb.melonhu.cn/img/t/p/';
        }

        // Делаем GET-запрос к API TMDB
        $.ajax({
          url: Lampa.Storage.field('lmetorrentproxyTMDB') == true ? proxyTMDBApi : directTMDBApi,
          method: 'GET',
          headers: {
            "x-requested-with": "lme-plugins"
          },
          success: function success(response) {
            try {
              // Проверяем, есть ли постеры в ответе
              var poster = response.posters && response.posters[0];
              if (poster && poster.file_path) {
                // Формируем ссылку на изображение
                //const imageUrl = Lampa.TMDB.image(`t/p/${(Lampa.Storage.field('poster_size')||'w200')+poster.file_path}`);
                var imageUrl = Lampa.Storage.field('lmetorrentproxyTMDB') == true ? proxyTMDBImage + (Lampa.Storage.field('poster_size') || 'w200') + poster.file_path : directTMDBImage + (Lampa.Storage.field('poster_size') || 'w200') + poster.file_path;
                resolve(imageUrl);
              } else {
                resolve('./img/img_load.svg'); // Если постеров нет, возвращаем картинку по умолчанию
              }
            } catch (error) {
              //resolve('./img/img_load.svg'); // Если постеров нет, возвращаем картинку по умолчанию
              reject(new Error('Ошибка при обработке ответа TMDB'));
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            //reject(new Error(`Ошибка запроса к TMDB: ${textStatus} - ${errorThrown}`));
            resolve('./img/img_load.svg'); // Если постеров нет, возвращаем картинку по умолчанию
          }
        });
      });
    }

    var url$1 = Lampa.Storage.field("lmetorrentqBittorentUrl");
    var proxy$1 = "";
    if (Lampa.Storage.field("lmetorrentqBittorentProxy") === true) {
      proxy$1 = 'https://lampame.v6.rocks/';
    }
    function getHeaders$3(type) {
      var headers = {};
      if (type) headers["Content-Type"] = type;
      if (Lampa.Storage.get("lmetorrentqBittorentKey")) headers["set-cookie"] = Lampa.Storage.get("lmetorrenttransmissionKey");
      if (Lampa.Storage.field('lmetorrentqBittorentProxy') === true) headers["x-requested-with"] = 'lme-plugins';
      return headers;
    }
    function auth$3() {}
    function GetData$3() {
      var settings = {
        url: "".concat(proxy$1).concat(url$1, "/api/v2/sync/maindata"),
        method: "GET",
        timeout: 0,
        headers: getHeaders$3()
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(/*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(response) {
            var torrents, standardizedResponse, _t8;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.p = 0;
                  if (response.torrents) {
                    _context2.n = 1;
                    break;
                  }
                  resolve([]);
                  return _context2.a(2);
                case 1:
                  torrents = Object.values(response.torrents);
                  _context2.n = 2;
                  return Promise.all(torrents.map(/*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent) {
                      var _t, _t2, _t3, _t4, _t5, _t6, _t7;
                      return _regenerator().w(function (_context) {
                        while (1) switch (_context.n) {
                          case 0:
                            _t = torrent.name;
                            _t2 = torrent.infohash_v1;
                            _t3 = torrent.size;
                            _t4 = torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1);
                            _t5 = torrent.tags;
                            _context.n = 1;
                            return getPosterFromLabels(torrent.tags);
                          case 1:
                            _t6 = _context.v;
                            _t7 = torrent.progress;
                            return _context.a(2, {
                              name: _t,
                              id: _t2,
                              size: _t3,
                              state: _t4,
                              labels: _t5,
                              image: _t6,
                              completed: _t7
                            });
                        }
                      }, _callee);
                    }));
                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));
                case 2:
                  standardizedResponse = _context2.v;
                  resolve(standardizedResponse);
                  _context2.n = 4;
                  break;
                case 3:
                  _context2.p = 3;
                  _t8 = _context2.v;
                  console.log('TDM', 'GetData:', _t8, response);
                  reject(new Error('Ошибка при обработке данных'));
                case 4:
                  return _context2.a(2);
              }
            }, _callee2, null, [[0, 3]]);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).fail(function (jqXHR, textStatus, errorThrown) {
          reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(textStatus, " - ").concat(errorThrown)));
        });
      });
    }
    function GetInfo$3() {
      var settings = {
        url: "".concat(proxy$1).concat(url$1, "/api/v2/sync/maindata"),
        method: "GET",
        timeout: 0,
        headers: getHeaders$3()
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            var standardizedResponse = {
              "space": response.server_state.free_space_on_disk
            };
            resolve(standardizedResponse);
          } catch (error) {
            reject(new Error('Ошибка при обработке данных'));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(textStatus, " - ").concat(errorThrown)));
        });
      });
    }
    function SendCommand$3(btn, torrent_data) {
      return new Promise(function (resolve, reject) {
        // First check qBittorrent version
        $.ajax({
          url: "".concat(proxy$1).concat(url$1, "/api/v2/app/version"),
          method: "GET",
          headers: getHeaders$3()
        }).then(function (version) {
          var versionNumber = parseFloat(version.replace(/[^\d.]/g, ''));

          // Adjust action based on version
          if (versionNumber >= 5) {
            if (btn.action === 'resume') btn.action = 'start';
            if (btn.action === 'pause') btn.action = 'stop';
          }

          // Then send the command
          var deleteFiles = btn.deleteFiles ? "true" : "";
          return $.ajax({
            url: "".concat(proxy$1).concat(url$1, "/api/v2/torrents/").concat(btn.action),
            method: "POST",
            timeout: 0,
            headers: getHeaders$3("application/x-www-form-urlencoded"),
            data: {
              "hashes": torrent_data.id,
              deleteFiles: deleteFiles
            }
          });
        }).then(function () {
          resolve(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionSentSuccessfully')
          }));
        })["catch"](function (error) {
          console.log('TDM', 'Send command:', error);
          reject(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionReturnedError')
          }));
        });
      });
    }
    function SendTask$3(selectedTorrent, labels, dtype) {
      if (!selectedTorrent) {
        return;
      }
      var settings = {
        url: "".concat(proxy$1).concat(url$1, "/api/v2/torrents/add"),
        method: "POST",
        timeout: 0,
        headers: getHeaders$3("application/x-www-form-urlencoded"),
        "data": {
          "tags": labels,
          "urls": selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link,
          "category": Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) ? Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) : '',
          "firstLastPiecePrio": Lampa.Storage.field("lmetorrentqBittorentfirstLastPiecePrio") ? "true" : "false",
          "sequentialDownload": Lampa.Storage.field("lmetorrentqBittorentSequentialDownload") ? "true" : "false"
        }
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            console.log('TDM', 'Send file:', response);
            resolve(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            }));
          } catch (error) {
            console.log('TDM', 'Send file:', error);
            reject(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            }));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionReturnedError')
          }));
        });
      });
    }
    var Qbittorent = {
      auth: auth$3,
      GetData: GetData$3,
      GetInfo: GetInfo$3,
      SendCommand: SendCommand$3,
      SendTask: SendTask$3
    };

    /**
     * Torrent Parser Utility
     * 
     * This module provides functionality to parse torrent names and
     * fetch corresponding metadata from TMDB.
     */

    // TMDB API key
    var TMDB_API_KEY = '4ef0d7355d9ffb5151e987764708ce96';

    /**
     * Clean torrent name by removing quality, year, and other technical information
     * 
     * @param {string} name - Original torrent name
     * @returns {string} - Cleaned name suitable for metadata search
     */
    function cleanName(name) {
      if (!name) return '';

      // Regular expression to extract the main title from torrent name
      // Removes season/episode markers, year, quality indicators, etc.
      var regex = /*#__PURE__*/_wrapRegExp(/^(.+?)(?:[.\s(]((19|20)\d{2})[.\s)]|S\d{1,2}(?:E\d{1,2})?|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv)/i, {
        title: 1
      });
      var match = name.match(regex);

      // If we have a match with a title group, use it
      if (match && match.groups && match.groups.title) {
        // Replace dots between words with spaces
        return match.groups.title.replace(/\./g, ' ').trim();
      }

      // Fallback: just replace dots with spaces
      return name.replace(/\./g, ' ').trim();
    }

    /**
     * Search for media metadata on TMDB
     * 
     * @param {string} query - Search query
     * @returns {Promise<Object>} - Promise resolving to TMDB response
     */
    function searchTMDB(_x) {
      return _searchTMDB.apply(this, arguments);
    }
    /**
     * Handle case when multiple results are found
     * 
     * @param {Array} results - Array of TMDB results
     * @returns {Promise<Object>} - Promise resolving to selected media info
     */
    function _searchTMDB() {
      _searchTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
        var url, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              url = "https://api.themoviedb.org/3/search/multi?include_adult=true&query=".concat(encodeURIComponent(query), "&api_key=").concat(TMDB_API_KEY);
              _context.p = 1;
              _context.n = 2;
              return $.ajax({
                url: url,
                method: 'GET',
                timeout: 10000 // 10 second timeout
              });
            case 2:
              return _context.a(2, _context.v);
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('TMDB', 'search error:', _t);
              throw new Error("Failed to fetch data from TMDB: ".concat(_t.statusText || _t.message));
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
      return _searchTMDB.apply(this, arguments);
    }
    function handleMultipleResults(results) {
      return new Promise(function (resolve, reject) {
        var enabled = Lampa.Controller.enabled().name;

        // Format menu items with title and date information
        var menuItems = results.map(function (result) {
          return {
            title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === 'tv' && result.first_air_date ? " - ".concat(result.first_air_date) : '') + (result.media_type === 'movie' && result.release_date ? " - ".concat(result.release_date) : ''),
            media_type: result.media_type,
            id: result.id
          };
        });

        // Show selection menu
        Lampa.Select.show({
          title: Lampa.Lang.translate('selectResult'),
          items: menuItems,
          onBack: function onBack() {
            // Повертаємось до попереднього контролера, якщо він існує
            var currentController = Lampa.Controller.enabled();
            if (currentController && currentController.name !== enabled) {
              Lampa.Controller.toggle(enabled);
            } else {
              // Якщо контролер не змінився, просто вимикаємо меню
              Lampa.Controller.toggle('menu');
            }
            reject(new Error('Selection canceled by user'));
          },
          onSelect: function onSelect(selected) {
            resolve({
              media_type: selected.media_type,
              id: selected.id
            });
          }
        });
      });
    }

    /**
     * Process torrents to find metadata
     * 
     * @param {Object|Array} torrentData - Torrent data to process
     * @returns {Promise<Array>} - Promise resolving to array of media info
     */
    function processTorrents(_x2) {
      return _processTorrents.apply(this, arguments);
    }
    function _processTorrents() {
      _processTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrentData) {
        var torrents, results, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              console.log('TDM', 'Processing torrents:', _typeof(torrentData), torrentData);

              // Ensure we're working with an array
              torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
              _context3.p = 1;
              _context3.n = 2;
              return Promise.all(torrents.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
                  var name, cleanedName, response, _t2;
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        _context2.p = 0;
                        // Clean the torrent name
                        name = torrent.name || torrent;
                        cleanedName = cleanName(name);
                        if (cleanedName) {
                          _context2.n = 1;
                          break;
                        }
                        console.warn('TDM', 'Empty torrent name after cleaning');
                        return _context2.a(2, null);
                      case 1:
                        _context2.n = 2;
                        return searchTMDB(cleanedName);
                      case 2:
                        response = _context2.v;
                        if (!(!response.results || response.results.length === 0)) {
                          _context2.n = 3;
                          break;
                        }
                        console.log('TDM', 'No results found for ', cleanedName);
                        return _context2.a(2, null);
                      case 3:
                        if (!(response.results.length === 1)) {
                          _context2.n = 4;
                          break;
                        }
                        return _context2.a(2, response.results[0]);
                      case 4:
                        _context2.n = 5;
                        return handleMultipleResults(response.results);
                      case 5:
                        return _context2.a(2, _context2.v);
                      case 6:
                        _context2.p = 6;
                        _t2 = _context2.v;
                        console.error('TDM', 'torrent processing error:', _t2);
                        return _context2.a(2, null);
                    }
                  }, _callee2, null, [[0, 6]]);
                }));
                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
              results = _context3.v;
              return _context3.a(2, results.filter(function (result) {
                return result !== null;
              }));
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              console.error('TDM', 'torrent processing overall error:', _t3);
              throw _t3;
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      return _processTorrents.apply(this, arguments);
    }

    // Configuration constants
    var CONFIG_PREFIX$1 = 'lmetorrenttransmission';
    var DEFAULT_RPC_PATH$1 = '/transmission/rpc';

    // Status mapping
    var TRANSMISSION_STATUS$1 = {
      0: "Stopped",
      1: "Queued to verify local data",
      2: "Verifying local data",
      3: "Queued to download",
      4: "Downloading",
      5: "Queued to seed",
      6: "Seeding"
    };

    /**
     * Get client configuration from storage
     * 
     * @returns {Object} - Client configuration
     */
    function getConfig$1() {
      return {
        url: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Url")),
        user: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "User")),
        pass: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Pass")),
        path: Lampa.Storage.get("".concat(CONFIG_PREFIX$1, "Path")) || DEFAULT_RPC_PATH$1,
        useProxy: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Proxy")) === true,
        autostart: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Autostart")),
        sequentialDownload: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "SequentialDownload")),
        proxy: 'https://lampame.v6.rocks/'
      };
    }

    /**
     * Get request headers for Transmission API
     * 
     * @returns {Object} - Headers object
     */
    function getHeaders$2() {
      var config = getConfig$1();
      var headers = {
        'Authorization': "Basic ".concat(btoa(config.user + ":" + config.pass)),
        'Content-Type': 'application/json'
      };

      // Add session ID if available
      var sessionId = Lampa.Storage.get("".concat(CONFIG_PREFIX$1, "Key"));
      if (sessionId) {
        headers['X-Transmission-Session-Id'] = sessionId;
      }

      // Add proxy headers if needed
      if (config.useProxy) {
        headers['x-requested-with'] = 'lme-plugins';
      }
      return headers;
    }

    /**
     * Get the full API URL
     * 
     * @returns {string} - Complete API URL
     */
    function getApiUrl$1() {
      var config = getConfig$1();
      return "".concat(config.useProxy ? config.proxy : '').concat(config.url).concat(config.path);
    }

    /**
     * Make a request to the Transmission API
     * 
     * @param {Object} data - Request data
     * @param {number} timeout - Request timeout in ms
     * @returns {Promise<Object>} - Promise resolving to API response
     */
    function makeRequest$1(_x) {
      return _makeRequest$1.apply(this, arguments);
    }
    /**
     * Authenticate with the Transmission server
     * 
     * @returns {Promise<void>}
     */
    function _makeRequest$1() {
      _makeRequest$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var timeout,
          settings,
          sessionId,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10000;
              settings = {
                url: getApiUrl$1(),
                method: 'POST',
                timeout: timeout,
                headers: getHeaders$2(),
                data: JSON.stringify(data)
              };
              _context.p = 1;
              _context.n = 2;
              return $.ajax(settings);
            case 2:
              return _context.a(2, _context.v);
            case 3:
              _context.p = 3;
              _t = _context.v;
              if (!(_t.status === 409)) {
                _context.n = 5;
                break;
              }
              sessionId = _t.getResponseHeader('X-Transmission-Session-Id');
              if (!sessionId) {
                _context.n = 5;
                break;
              }
              Lampa.Storage.set("".concat(CONFIG_PREFIX$1, "Key"), sessionId);
              // Retry the request with the new session ID
              settings.headers = getHeaders$2();
              _context.n = 4;
              return $.ajax(settings);
            case 4:
              return _context.a(2, _context.v);
            case 5:
              throw _t;
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
      return _makeRequest$1.apply(this, arguments);
    }
    function auth$2() {
      return _auth$1.apply(this, arguments);
    }
    /**
     * Get torrent data from Transmission
     * 
     * @returns {Promise<Array>} - Promise resolving to array of torrent data
     */
    function _auth$1() {
      _auth$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var sessionId, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return makeRequest$1({
                method: 'session-get'
              });
            case 1:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('AuthSuccess')
              });
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              if (_t2.status === 409) {
                // 409 is expected for the first request (CSRF protection)
                sessionId = _t2.getResponseHeader('X-Transmission-Session-Id');
                if (sessionId) {
                  Lampa.Storage.set("".concat(CONFIG_PREFIX$1, "Key"), sessionId);
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('AuthSuccess')
                  });
                }
              } else {
                console.error('TDM', 'Authentication failed.', _t2);
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('AuthDenied')
                });
              }
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      return _auth$1.apply(this, arguments);
    }
    function GetData$2() {
      return _GetData$2.apply(this, arguments);
    }
    /**
     * Get session information from Transmission
     * 
     * @returns {Promise<Object>} - Promise resolving to session info
     */
    function _GetData$2() {
      _GetData$2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return makeRequest$1({
                method: 'torrent-get',
                arguments: {
                  fields: ['labels', 'status', 'totalSize', 'percentComplete', 'percentDone', 'name', 'labels', 'id']
                }
              });
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return Promise.all(response.arguments.torrents.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
                  var imageUrl;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        _context3.n = 1;
                        return getPosterFromLabels(torrent.labels);
                      case 1:
                        imageUrl = _context3.v;
                        return _context3.a(2, {
                          name: torrent.name,
                          id: torrent.id,
                          size: torrent.totalSize,
                          state: TRANSMISSION_STATUS$1[torrent.status],
                          labels: torrent.labels,
                          image: imageUrl,
                          completed: torrent.percentDone
                        });
                    }
                  }, _callee3);
                }));
                return function (_x7) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
              return _context4.a(2, _context4.v);
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('TDM', 'Error fetching torrent data:', _t3);
              throw new Error("Failed to fetch torrent data: ".concat(_t3.statusText || _t3.message));
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 3]]);
      }));
      return _GetData$2.apply(this, arguments);
    }
    function GetInfo$2() {
      return _GetInfo$2.apply(this, arguments);
    }
    /**
     * Send a command to Transmission
     * 
     * @param {Object} action - Action to perform
     * @param {Object|Array} torrentData - Torrent data to act on
     * @returns {Promise<void>} - Promise resolving when command completes
     */
    function _GetInfo$2() {
      _GetInfo$2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return makeRequest$1({
                method: 'session-get'
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, {
                space: response.arguments['download-dir-free-space']
              });
            case 2:
              _context5.p = 2;
              _t4 = _context5.v;
              console.error('TDM', 'Error fetching session info:', _t4);
              throw new Error("Failed to fetch session info: ".concat(_t4.statusText || _t4.message));
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }));
      return _GetInfo$2.apply(this, arguments);
    }
    function SendCommand$2(_x2, _x3) {
      return _SendCommand$1.apply(this, arguments);
    }
    /**
     * Send a new torrent task to Transmission
     * 
     * @param {Object} selectedTorrent - Torrent to add
     * @param {string} labels - Labels to apply
     * @param {string} dtype - Download type (Movies/TV)
     * @returns {Promise<void>} - Promise resolving when task is added
     */
    function _SendCommand$1() {
      _SendCommand$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(action, torrentData) {
        var response, mediaTypeId, method, _t5, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.p = 0;
              if (!(action.action === 'parse' || action.action === 'parse-all')) {
                _context6.n = 4;
                break;
              }
              _context6.n = 1;
              return processTorrents(torrentData);
            case 1:
              response = _context6.v;
              if (!(!response || response.length === 0)) {
                _context6.n = 2;
                break;
              }
              throw new Error('No valid metadata found');
            case 2:
              mediaTypeId = "".concat(response[0].media_type, "/").concat(response[0].id);
              _context6.n = 3;
              return makeRequest$1({
                method: 'torrent-set',
                arguments: {
                  ids: torrentData.id,
                  labels: [mediaTypeId]
                }
              });
            case 3:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              });
              return _context6.a(2);
            case 4:
              _t5 = action.action;
              _context6.n = _t5 === 'resume' ? 5 : _t5 === 'pause' ? 6 : _t5 === 'delete' ? 7 : 8;
              break;
            case 5:
              method = 'torrent-start';
              return _context6.a(3, 9);
            case 6:
              method = 'torrent-stop';
              return _context6.a(3, 9);
            case 7:
              method = 'torrent-remove';
              return _context6.a(3, 9);
            case 8:
              throw new Error("Unknown action: ".concat(action.action));
            case 9:
              _context6.n = 10;
              return makeRequest$1({
                method: method,
                arguments: {
                  ids: torrentData.id,
                  'delete-local-data': action.deleteFiles ? true : false
                }
              });
            case 10:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              });
              _context6.n = 12;
              break;
            case 11:
              _context6.p = 11;
              _t6 = _context6.v;
              console.error('TDM', 'Error sending command:', _t6);
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionReturnedError')
              });
              throw _t6;
            case 12:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 11]]);
      }));
      return _SendCommand$1.apply(this, arguments);
    }
    function SendTask$2(_x4, _x5, _x6) {
      return _SendTask$1.apply(this, arguments);
    }
    function _SendTask$1() {
      _SendTask$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(selectedTorrent, labels, dtype) {
        var config, _addResponse$argument, addResponse, torrentId, labelResponse, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (selectedTorrent) {
                _context7.n = 1;
                break;
              }
              throw new Error('No torrent selected');
            case 1:
              config = getConfig$1();
              _context7.p = 2;
              _context7.n = 3;
              return makeRequest$1({
                method: 'torrent-add',
                arguments: _objectSpread2({
                  paused: config.autostart ? true : false,
                  sequentialDownload: config.sequentialDownload ? true : false,
                  filename: selectedTorrent.MagnetUri || selectedTorrent.Link,
                  labels: [labels]
                }, Lampa.Storage.get("".concat(CONFIG_PREFIX$1).concat(dtype)) ? {
                  'download-dir': Lampa.Storage.get("".concat(CONFIG_PREFIX$1).concat(dtype))
                } : {})
              });
            case 3:
              addResponse = _context7.v;
              if (!(addResponse.result !== 'success' || Object.keys(addResponse.arguments).length === 0)) {
                _context7.n = 4;
                break;
              }
              throw new Error("Failed to add torrent: ".concat(addResponse.result));
            case 4:
              // Get the torrent ID
              torrentId = (_addResponse$argument = addResponse.arguments['torrent-added']) === null || _addResponse$argument === void 0 ? void 0 : _addResponse$argument.id;
              if (torrentId) {
                _context7.n = 5;
                break;
              }
              throw new Error('Torrent added but no ID returned');
            case 5:
              _context7.n = 6;
              return makeRequest$1({
                method: 'torrent-set',
                arguments: {
                  ids: torrentId,
                  labels: [labels]
                }
              });
            case 6:
              labelResponse = _context7.v;
              if (!(labelResponse.result !== 'success')) {
                _context7.n = 7;
                break;
              }
              throw new Error("Failed to set labels: ".concat(labelResponse.result));
            case 7:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              });
              _context7.n = 9;
              break;
            case 8:
              _context7.p = 8;
              _t7 = _context7.v;
              console.error('TDM', 'Error adding torrent:', _t7);
              Lampa.Bell.push({
                text: _t7.message || Lampa.Lang.translate('actionReturnedError')
              });
              throw _t7;
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 8]]);
      }));
      return _SendTask$1.apply(this, arguments);
    }
    var Transmission = {
      auth: auth$2,
      GetData: GetData$2,
      GetInfo: GetInfo$2,
      SendCommand: SendCommand$2,
      SendTask: SendTask$2,
      transmissionStatus: TRANSMISSION_STATUS$1
    };

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
      // Спочатку розбиваємо по наявних переносах рядків
      var initialLines = text.split('\n');
      var lines = [];

      // Функція для розбиття довгого слова на частини
      function breakLongWord(word, maxWidth) {
        var brokenLines = [];
        var currentPart = '';
        for (var i = 0; i < word.length; i++) {
          var _char = word[i];
          var testPart = currentPart + _char;
          var metrics = context.measureText(testPart);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && currentPart !== '') {
            brokenLines.push(currentPart);
            currentPart = _char;
          } else {
            currentPart = testPart;
          }
        }
        if (currentPart !== '') {
          brokenLines.push(currentPart);
        }
        return brokenLines;
      }

      // Потім для кожного рядка застосовуємо переноси за шириною
      initialLines.forEach(function (initialLine) {
        var words = initialLine.split(' ');
        var currentLine = '';
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          // Перевіряємо, чи слово не занадто довге
          var wordMetrics = context.measureText(word);
          if (wordMetrics.width > width - 40) {
            // Якщо є поточний рядок, додаємо його до списку
            if (currentLine !== '') {
              lines.push(currentLine);
              currentLine = '';
            }
            // Розбиваємо довге слово на частини
            var brokenWordLines = breakLongWord(word, width - 40);
            lines.push.apply(lines, _toConsumableArray(brokenWordLines));
          } else {
            // Слово не занадто довге, обробляємо звичайним чином
            var testLine = currentLine === '' ? word : currentLine + ' ' + word;
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > width - 40 && currentLine !== '') {
              lines.push(currentLine);
              currentLine = word;
            } else {
              currentLine = testLine;
            }
          }
        }
        // Додаємо останній рядок, якщо він не порожній
        if (currentLine !== '') {
          lines.push(currentLine);
        }
      });

      // Відображення тексту
      var lineHeight = 58;
      var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
      lines.forEach(function (line, index) {
        context.fillText(line, width / 2, startY + index * lineHeight);
      });
      return canvas.toDataURL('image/png');
    }

    /**
     * @file IndexedDB утиліти для зберігання метаданих торрентів.
     * Інкапсулює логіку роботи з Lampa.DB (IndexedDB).
     */

    var DB_NAME = 'lme_torrentmanager';
    var DB_VERSION = 4; // Збільшено версію для гарантованого оновлення

    /**
     * Отримує список всіх можливих імен таблиць для всіх клієнтів.
     * @returns {string[]} Масив імен таблиць.
     */
    function getAllTableNames() {
      var clients = ['synology', 'qbittorent', 'transmission', 'keenetic', 'universal']; // Додайте сюди інших клієнтів за потреби
      return clients.map(function (client) {
        return "".concat(client, "_metadata");
      });
    }

    /**
     * Допоміжна функція для отримання назви таблиці (сховища) на основі активного клієнта.
     * @returns {string} Назва таблиці, напр. 'synology_metadata'.
     */
    function getTableName() {
      var client = Lampa.Storage.field('lmetorrentSelect');
      if (!client) {
        console.error('[DB] Активний клієнт не вибрано!');
        return 'default_metadata';
      }
      return "".concat(client.toLowerCase(), "_metadata");
    }
    var dbPromise = null;

    /**
     * Ініціалізує та відкриває IndexedDB, використовуючи патерн singleton promise.
     * @returns {Promise<object>} Promise, який вирішується об'єктом бази даних Lampa.DB.
     */
    function initDB() {
      if (dbPromise) {
        return dbPromise;
      }
      dbPromise = new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
          var allTables, db, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (Lampa.DB) {
                  _context.n = 1;
                  break;
                }
                console.error('Lampa.DB не визначено.');
                dbPromise = null; // Скидаємо для повторної спроби
                return _context.a(2, reject(new Error('Lampa.DB is not defined')));
              case 1:
                allTables = getAllTableNames();
                db = new Lampa.DB(DB_NAME, allTables, DB_VERSION);
                _context.p = 2;
                _context.n = 3;
                return db.openDatabase();
              case 3:
                console.log("TDM", "Database '".concat(DB_NAME, "' successfully opened/updated to version ").concat(DB_VERSION, "."));
                resolve(db);
                _context.n = 5;
                break;
              case 4:
                _context.p = 4;
                _t = _context.v;
                console.error("TDM", "Critical error '".concat(DB_NAME, "':"), _t);
                dbPromise = null; // Скидаємо для повторної спроби
                reject(_t);
              case 5:
                return _context.a(2);
            }
          }, _callee, null, [[2, 4]]);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      return dbPromise;
    }

    /**
     * Зберігає метадані для ключа.
     * @param {string} key - Ключ (ідентифікатор торренту).
     * @param {any} value - Значення для збереження.
     * @returns {Promise<void>}
     */
    function saveMetadata(_x3, _x4) {
      return _saveMetadata.apply(this, arguments);
    }

    /**
     * Отримує метадані за ключем.
     * @param {string} key - Ключ (ідентифікатор торренту).
     * @returns {Promise<any|null>}
     */
    function _saveMetadata() {
      _saveMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, value) {
        var db, tableName, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return initDB();
            case 1:
              db = _context2.v;
              tableName = getTableName();
              _context2.n = 2;
              return db.rewriteData(tableName, key, value);
            case 2:
              console.log("TDM", "Metadata for key '".concat(key, "' successfully saved in table '").concat(tableName, "'."));
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error("TDM", "Error in saveMetadata:", _t2);
              throw _t2;
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 3]]);
      }));
      return _saveMetadata.apply(this, arguments);
    }
    function getMetadata(_x5) {
      return _getMetadata.apply(this, arguments);
    }
    function _getMetadata() {
      _getMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key) {
        var db, tableName, result, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return initDB();
            case 1:
              db = _context3.v;
              tableName = getTableName();
              _context3.n = 2;
              return db.getData(tableName, key);
            case 2:
              result = _context3.v;
              if (!result) {
                _context3.n = 3;
                break;
              }
              return _context3.a(2, result);
            case 3:
              return _context3.a(2, null);
            case 4:
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t3 = _context3.v;
              console.error("TDM", "Error in getMetadata:", _t3);
              throw _t3;
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 5]]);
      }));
      return _getMetadata.apply(this, arguments);
    }

    var url = Lampa.Storage.field("lmetorrentsynologyUrl");
    var user = Lampa.Storage.field("lmetorrentsynologyUser");
    var pass = Lampa.Storage.field("lmetorrentsynologyPass");
    var proxy = "";
    if (Lampa.Storage.field("lmetorrentsynologyProxy") === true) {
      proxy = 'https://lampame.v6.rocks/';
    }
    function getHeaders$1() {
      var headers = {
        Authorization: "Basic ".concat(btoa(user + ":" + pass)),
        "Content-Type": "application/json"
      };
      if (Lampa.Storage.get("lmetorrenttransmissionKey")) {
        headers["X-Transmission-Session-Id"] = Lampa.Storage.get("lmetorrenttransmissionKey");
      }
      if (Lampa.Storage.field('lmetorrenttransmissionProxy') === true) {
        headers['x-requested-with'] = 'lme-plugins';
      }
      return headers;
    }
    function auth$1() {
      $.ajax({
        url: "".concat(proxy).concat(url, "/webapi/auth.cgi?api=SYNO.API.Auth&method=login&account=").concat(user, "&passwd=").concat(pass, "&format=sid&version=7&session=LMETorrentManager"),
        method: "GET",
        headers: getHeaders$1(),
        // Если getHeaders возвращает объект с ключом headers
        contentType: "application/json",
        success: function success(response, textStatus, jqXHR) {
          var data = {
            sID: response.data.sid,
            createDate: Math.floor(Date.now() / 1000)
          };
          Lampa.Storage.set("lmetorrentsynologyKey", JSON.stringify(data));
          Lampa.Bell.push({
            text: Lampa.Lang.translate('AuthSuccess')
          });
        },
        error: function error(jqXHR) {
          if (jqXHR.status !== 200) {
            console.log('TDM', 'Synology auth', jqXHR.status, jqXHR);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('AuthDenied')
            });
          }
        }
      });
    }
    function GetData$1() {
      return _GetData$1.apply(this, arguments);
    }
    /**
     * Get session information from Synology
     *
     * @returns {Promise<Object>} - Promise resolving to session info
     */
    function _GetData$1() {
      _GetData$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var settings;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              settings = {
                url: "".concat(proxy).concat(url, "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=3&method=list&additional=file,transfer&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID, "&limit=-1"),
                method: "GET",
                timeout: 0,
                headers: getHeaders$1() // Если getHeaders возвращает объект с ключом headers
              };
              return _context3.a(2, new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
                  var response, parsedResponse, standardizedResponse, _t;
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        _context2.p = 0;
                        _context2.n = 1;
                        return $.ajax(settings);
                      case 1:
                        response = _context2.v;
                        parsedResponse = JSON.parse(response);
                        if (!(!parsedResponse.data || !parsedResponse.data.tasks)) {
                          _context2.n = 2;
                          break;
                        }
                        throw new Error('Invalid response structure');
                      case 2:
                        _context2.n = 3;
                        return Promise.all(parsedResponse.data.tasks.map(/*#__PURE__*/function () {
                          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent) {
                            var metadata, imageUrl;
                            return _regenerator().w(function (_context) {
                              while (1) switch (_context.n) {
                                case 0:
                                  _context.n = 1;
                                  return getMetadata(torrent.id);
                                case 1:
                                  metadata = _context.v;
                                  // Спочатку перевіряємо, чи є метадані та постер, інакше створюємо картинку з тексту
                                  imageUrl = metadata && metadata.poster ? metadata.poster : textToImage(torrent.title);
                                  return _context.a(2, {
                                    name: torrent.title,
                                    id: torrent.id,
                                    size: torrent.size,
                                    state: torrent.status.charAt(0).toUpperCase() + torrent.status.slice(1),
                                    completed: torrent.additional.transfer.size_downloaded / torrent.size,
                                    image: imageUrl,
                                    tmdb_id: metadata ? metadata.tmdb_id : null,
                                    media_type: metadata ? metadata.media_type : null
                                  });
                              }
                            }, _callee);
                          }));
                          return function (_x3) {
                            return _ref2.apply(this, arguments);
                          };
                        }()));
                      case 3:
                        standardizedResponse = _context2.v;
                        resolve(standardizedResponse);
                        _context2.n = 5;
                        break;
                      case 4:
                        _context2.p = 4;
                        _t = _context2.v;
                        console.error('TDM', 'GetData error:', _t);
                        reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(_t.message || _t)));
                      case 5:
                        return _context2.a(2);
                    }
                  }, _callee2, null, [[0, 4]]);
                }));
                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));
          }
        }, _callee3);
      }));
      return _GetData$1.apply(this, arguments);
    }
    function GetInfo$1() {
      return _GetInfo$1.apply(this, arguments);
    }
    function _GetInfo$1() {
      _GetInfo$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var volumeSettings, volumeResponse, volumeData, moviesPath, tvPath, matchingShare, _iterator, _step, share, normalizedMoviesPath, normalizedTvPath, normalizedSharePath, _t2, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.p = 0;
              // Get volume status information
              volumeSettings = {
                url: "".concat(proxy).concat(url, "/webapi/entry.cgi?version=2&api=SYNO.FileStation.List&method=list_share&additional=[\"volume_status\"]&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID),
                method: "GET",
                timeout: 0,
                headers: getHeaders$1()
              };
              _context4.n = 1;
              return $.ajax(volumeSettings);
            case 1:
              volumeResponse = _context4.v;
              // Parse response if it's a string, otherwise use as is
              volumeData = typeof volumeResponse === 'string' ? JSON.parse(volumeResponse) : volumeResponse;
              if (!(!volumeData.success || !volumeData.data || !volumeData.data.shares)) {
                _context4.n = 2;
                break;
              }
              throw new Error('Failed to fetch volume information');
            case 2:
              // Get the configured paths for Movies and TV shows
              moviesPath = Lampa.Storage.get('lmetorrentsynologyPathMovies');
              tvPath = Lampa.Storage.get('lmetorrentsynologyPathTV'); // If both paths are not set, return an error
              if (!(!moviesPath && !tvPath)) {
                _context4.n = 3;
                break;
              }
              throw new Error('NaN undefined');
            case 3:
              // Find the share that matches either moviesPath or tvPath
              matchingShare = null; // Check each share to see if its path matches our configured paths
              _iterator = _createForOfIteratorHelper(volumeData.data.shares);
              _context4.p = 4;
              _iterator.s();
            case 5:
              if ((_step = _iterator.n()).done) {
                _context4.n = 10;
                break;
              }
              share = _step.value;
              // Normalize paths by adding leading slash if not present
              normalizedMoviesPath = moviesPath.startsWith('/') ? moviesPath : '/' + moviesPath;
              normalizedTvPath = tvPath.startsWith('/') ? tvPath : '/' + tvPath;
              normalizedSharePath = share.path; // Check if either moviesPath or tvPath starts with the share path
              if (!(normalizedMoviesPath && normalizedMoviesPath.startsWith(normalizedSharePath + '/'))) {
                _context4.n = 6;
                break;
              }
              matchingShare = share;
              return _context4.a(3, 10);
            case 6:
              if (!(normalizedTvPath && normalizedTvPath.startsWith(normalizedSharePath + '/'))) {
                _context4.n = 7;
                break;
              }
              matchingShare = share;
              return _context4.a(3, 10);
            case 7:
              if (!(normalizedMoviesPath && normalizedMoviesPath === normalizedSharePath)) {
                _context4.n = 8;
                break;
              }
              matchingShare = share;
              return _context4.a(3, 10);
            case 8:
              if (!(normalizedTvPath && normalizedTvPath === normalizedSharePath)) {
                _context4.n = 9;
                break;
              }
              matchingShare = share;
              return _context4.a(3, 10);
            case 9:
              _context4.n = 5;
              break;
            case 10:
              _context4.n = 12;
              break;
            case 11:
              _context4.p = 11;
              _t2 = _context4.v;
              _iterator.e(_t2);
            case 12:
              _context4.p = 12;
              _iterator.f();
              return _context4.f(12);
            case 13:
              if (!(matchingShare && matchingShare.additional && matchingShare.additional.volume_status)) {
                _context4.n = 14;
                break;
              }
              return _context4.a(2, {
                space: matchingShare.additional.volume_status.freespace
              });
            case 14:
              throw new Error('NaN undefined');
            case 15:
              _context4.p = 15;
              _t3 = _context4.v;
              console.error('TDM', 'Error fetching session info:', _t3);
              throw new Error("Failed to fetch session info: ".concat(_t3.message));
            case 16:
              return _context4.a(2);
          }
        }, _callee4, null, [[4, 11, 12, 13], [0, 15]]);
      }));
      return _GetInfo$1.apply(this, arguments);
    }
    function SendCommand$1(a, torrent_data) {
      var settings = {
        url: "".concat(proxy).concat(url, "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=").concat(a.action, "&id=").concat(torrent_data.id, "&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID),
        method: "GET",
        timeout: 0,
        headers: getHeaders$1() // Если getHeaders возвращает объект с ключом headers
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          response = JSON.parse(response);
          try {
            resolve(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            }));
          } catch (error) {
            console.log('TDM', 'Send action:', error);
            reject(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            }));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionReturnedError')
          }));
        });
      });
    }
    function SendTask$1(selectedTorrent, labels, dtype) {
      var path = Lampa.Storage.get("lmetorrentsynologyPath".concat(dtype)) ? "&destination=".concat(Lampa.Storage.get("lmetorrentsynologyPath".concat(dtype))) : '';
      var settings = {
        url: "".concat(proxy).concat(url, "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=create&uri=").concat(encodeURIComponent(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link)).concat(path, "&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID),
        method: "GET",
        timeout: 0,
        headers: getHeaders$1() // Если getHeaders возвращает объект с ключом headers
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          response = JSON.parse(response);
          try {
            resolve(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            }));
          } catch (error) {
            console.log('TDM', 'Send action:', error);
            reject(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            }));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionReturnedError')
          }));
        });
      });
    }
    var Synology = {
      auth: auth$1,
      GetData: GetData$1,
      GetInfo: GetInfo$1,
      SendCommand: SendCommand$1,
      SendTask: SendTask$1
    };

    //import Utils from "../utils/math";

    // Configuration constants
    var CONFIG_PREFIX = 'lmetorrentkeenetic';
    var DEFAULT_RPC_PATH = '/transmission/rpc';

    // Status mapping
    var TRANSMISSION_STATUS = {
      0: "Stopped",
      1: "Queued to verify local data",
      2: "Verifying local data",
      3: "Queued to download",
      4: "Downloading",
      5: "Queued to seed",
      6: "Seeding"
    };

    /**
     * Get client configuration from storage
     * 
     * @returns {Object} - Client configuration
     */
    function getConfig() {
      return {
        url: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Url")),
        user: Lampa.Storage.field("".concat(CONFIG_PREFIX, "User")),
        pass: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Pass")),
        path: Lampa.Storage.get("".concat(CONFIG_PREFIX, "Path")) || DEFAULT_RPC_PATH,
        useProxy: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Proxy")) === true,
        autostart: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Autostart")),
        sequentialDownload: Lampa.Storage.field("".concat(CONFIG_PREFIX, "SequentialDownload")),
        webdavUrl: Lampa.Storage.field("".concat(CONFIG_PREFIX, "WebdavUrl")),
        proxy: 'https://lampame.v6.rocks/'
      };
    }

    /**
     * Get request headers for Transmission API
     * 
     * @returns {Object} - Headers object
     */
    function getHeaders() {
      var config = getConfig();
      var headers = {
        'Authorization': "Basic ".concat(btoa(config.user + ":" + config.pass)),
        'Content-Type': 'application/json'
      };

      // Add session ID if available
      var sessionId = Lampa.Storage.get("".concat(CONFIG_PREFIX, "Key"));
      if (sessionId) {
        headers['X-Transmission-Session-Id'] = sessionId;
      }

      // Add proxy headers if needed
      if (config.useProxy) {
        headers['x-requested-with'] = 'lme-plugins';
      }
      return headers;
    }

    /**
     * Get the full API URL
     * 
     * @returns {string} - Complete API URL
     */
    function getApiUrl() {
      var config = getConfig();
      return "".concat(config.useProxy ? config.proxy : '').concat(config.url).concat(config.path);
    }

    /**
     * Make a request to the Transmission API
     *
     * @param {Object} data - Request data
     * @param {number} timeout - Request timeout in ms
     * @returns {Promise<Object>} - Promise resolving to API response
     */
    function makeRequest(_x) {
      return _makeRequest.apply(this, arguments);
    }
    /**
     * Authenticate with the Transmission server
     *
     * @returns {Promise<void>}
     */
    function _makeRequest() {
      _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var timeout,
          settings,
          sessionId,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10000;
              settings = {
                url: getApiUrl(),
                method: 'POST',
                timeout: timeout,
                headers: getHeaders(),
                data: JSON.stringify(data)
              };
              _context.p = 1;
              _context.n = 2;
              return $.ajax(settings);
            case 2:
              return _context.a(2, _context.v);
            case 3:
              _context.p = 3;
              _t = _context.v;
              if (!(_t.status === 409)) {
                _context.n = 5;
                break;
              }
              sessionId = _t.getResponseHeader('X-Transmission-Session-Id');
              if (!sessionId) {
                _context.n = 5;
                break;
              }
              Lampa.Storage.set("".concat(CONFIG_PREFIX, "Key"), sessionId);
              // Retry the request with the new session ID
              settings.headers = getHeaders();
              _context.n = 4;
              return $.ajax(settings);
            case 4:
              return _context.a(2, _context.v);
            case 5:
              throw _t;
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
      return _makeRequest.apply(this, arguments);
    }
    function auth() {
      return _auth.apply(this, arguments);
    }
    /**
     * Get torrent data from Transmission
     *
     * @returns {Promise<Array>} - Promise resolving to array of torrent data
     */
    function _auth() {
      _auth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var sessionId, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return makeRequest({
                method: 'session-get'
              });
            case 1:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('AuthSuccess')
              });
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              if (_t2.status === 409) {
                // 409 is expected for the first request (CSRF protection)
                sessionId = _t2.getResponseHeader('X-Transmission-Session-Id');
                if (sessionId) {
                  Lampa.Storage.set("".concat(CONFIG_PREFIX, "Key"), sessionId);
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('AuthSuccess')
                  });
                }
              } else {
                console.error('TDM', 'Authentication failed', _t2);
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('AuthDenied')
                });
              }
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      return _auth.apply(this, arguments);
    }
    function GetData() {
      return _GetData.apply(this, arguments);
    }
    /**
     * Get session information from Transmission
     *
     * @returns {Promise<Object>} - Promise resolving to session info
     */
    function _GetData() {
      _GetData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return makeRequest({
                method: 'torrent-get',
                arguments: {
                  fields: ['labels', 'status', 'totalSize', 'percentComplete', 'percentDone', 'name', 'labels', 'id', "downloadDir", 'files']
                }
              });
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return Promise.all(response.arguments.torrents.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
                  var imageUrl;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        _context3.n = 1;
                        return getPosterFromLabels(torrent.labels);
                      case 1:
                        imageUrl = _context3.v;
                        return _context3.a(2, {
                          name: torrent.name,
                          id: torrent.id,
                          size: torrent.totalSize,
                          state: TRANSMISSION_STATUS[torrent.status],
                          labels: torrent.labels,
                          image: imageUrl,
                          completed: torrent.percentDone,
                          downloadDir: torrent.downloadDir,
                          files: torrent.files
                        });
                    }
                  }, _callee3);
                }));
                return function (_x7) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
              return _context4.a(2, _context4.v);
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('TDM', 'Error fetching torrent data:', _t3);
              throw new Error("Failed to fetch torrent data: ".concat(_t3.statusText || _t3.message));
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 3]]);
      }));
      return _GetData.apply(this, arguments);
    }
    function GetInfo() {
      return _GetInfo.apply(this, arguments);
    }
    /**
     * Send a command to Transmission
     *
     * @param {Object} action - Action to perform
     * @param {Object|Array} torrentData - Torrent data to act on
     * @returns {Promise<void>} - Promise resolving when command completes
     */
    function _GetInfo() {
      _GetInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return makeRequest({
                method: 'session-get'
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, {
                space: response.arguments['download-dir-free-space']
              });
            case 2:
              _context5.p = 2;
              _t4 = _context5.v;
              console.error('TDM', 'Error fetching session info:', _t4);
              throw new Error("Failed to fetch session info: ".concat(_t4.statusText || _t4.message));
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }));
      return _GetInfo.apply(this, arguments);
    }
    function SendCommand(_x2, _x3) {
      return _SendCommand.apply(this, arguments);
    }
    /**
     * Send a new torrent task to Transmission
     * 
     * @param {Object} selectedTorrent - Torrent to add
     * @param {string} labels - Labels to apply
     * @param {string} dtype - Download type (Movies/TV)
     * @returns {Promise<void>} - Promise resolving when task is added
     */
    function _SendCommand() {
      _SendCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(action, torrentData) {
        var response, mediaTypeId, config, mediaFiles, downloadDir, dirName, sortFiles, file, filePath, webdavFilePath, authUrl, _updateFileList, method, _t5, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.p = 0;
              if (!(action.action === 'parse' || action.action === 'parse-all')) {
                _context6.n = 4;
                break;
              }
              _context6.n = 1;
              return processTorrents(torrentData);
            case 1:
              response = _context6.v;
              if (!(!response || response.length === 0)) {
                _context6.n = 2;
                break;
              }
              throw new Error('No valid metadata found');
            case 2:
              mediaTypeId = "".concat(response[0].media_type, "/").concat(response[0].id);
              _context6.n = 3;
              return makeRequest({
                method: 'torrent-set',
                arguments: {
                  ids: torrentData.id,
                  labels: [mediaTypeId]
                }
              });
            case 3:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              });
              return _context6.a(2);
            case 4:
              if (!(action.action === 'play')) {
                _context6.n = 9;
                break;
              }
              if (!(!torrentData.files || torrentData.files.length === 0)) {
                _context6.n = 5;
                break;
              }
              throw new Error('No files available for playback');
            case 5:
              config = getConfig();
              if (config.webdavUrl) {
                _context6.n = 6;
                break;
              }
              throw new Error('WebDAV URL not configured');
            case 6:
              // Create playlist from files
              mediaFiles = torrentData.files.filter(function (file) {
                var ext = file.name.split('.').pop().toLowerCase();
                return ['mp4', 'mkv', 'avi', 'mov', 'webm', 'ts', 'm4v', 'mpg', 'mpeg'].includes(ext);
              });
              if (!(mediaFiles.length === 0)) {
                _context6.n = 7;
                break;
              }
              throw new Error('No media files found in torrent');
            case 7:
              // Extract the last part of the download directory path
              downloadDir = torrentData.downloadDir || '';
              dirName = downloadDir.split('/').filter(Boolean).pop() || ''; // Sort files by name for better display
              sortFiles = function sortFiles(files) {
                var sortType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
                return _toConsumableArray(files).sort(function (a, b) {
                  if (sortType === 'name') {
                    var an = a.name.replace(/\d+/g, function (m) {
                      return m.length > 3 ? m : ('000' + m).substr(-4);
                    });
                    var bn = b.name.replace(/\d+/g, function (m) {
                      return m.length > 3 ? m : ('000' + m).substr(-4);
                    });
                    return an.localeCompare(bn);
                  } else if (sortType === 'size') {
                    return b.length - a.length;
                  } else if (sortType === 'progress') {
                    var aProgress = a.bytesCompleted / a.length || 0;
                    var bProgress = b.bytesCompleted / b.length || 0;
                    return bProgress - aProgress;
                  }
                  return 0;
                });
              }; // Default sort by name
              mediaFiles = sortFiles(mediaFiles, 'name');

              // If only one file, play it directly
              if (!(mediaFiles.length === 1)) {
                _context6.n = 8;
                break;
              }
              file = mediaFiles[0];
              filePath = file.name;
              webdavFilePath = "".concat(config.webdavUrl, "/").concat(dirName, "/").concat(filePath);
              authUrl = "".concat(config.user, ":").concat(config.pass, "@").concat(webdavFilePath.replace(/^https?:\/\//, ''));
              Lampa.Player.play({
                url: "https://".concat(authUrl),
                title: file.name.split('/').pop(),
                timeline: false
              });
              return _context6.a(2);
            case 8:
              // Function to update the file list with new sorting
              _updateFileList = function updateFileList(sortType) {
                var sortedFiles = sortFiles(mediaFiles, sortType);

                // Create new items list
                var newItems = sortedFiles.map(function (file) {
                  var fileName = file.name.split('/').pop();
                  var fileSize = file.length ? Lampa.Utils.bytesToSize(file.length) : '';
                  var fileExt = fileName.split('.').pop().toLowerCase();

                  // Calculate download progress if available
                  var progressText = '';
                  if (file.bytesCompleted !== undefined && file.length) {
                    var percent = Math.round(file.bytesCompleted / file.length * 100);
                    progressText = percent + '% • ';
                  }

                  // Add icon based on file type
                  var icon = '';
                  if (['mp4', 'mov', 'm4v'].includes(fileExt)) icon = '🎬';else if (['mkv', 'avi'].includes(fileExt)) icon = '🎞️';else if (['ts', 'mpg', 'mpeg'].includes(fileExt)) icon = '📺';else icon = '🎥';
                  return {
                    title: icon + ' ' + fileName,
                    subtitle: progressText + fileSize,
                    file: file,
                    template: 'selectbox_item',
                    selected: false
                  };
                });

                // Add sort buttons
                var sortButtons = [{
                  title: '🔤 ' + Lampa.Lang.translate('sort_by_name'),
                  sort: 'name',
                  separator: true
                }, {
                  title: '📊 ' + Lampa.Lang.translate('sort_by_size'),
                  sort: 'size'
                }, {
                  title: '📥 ' + Lampa.Lang.translate('sort_by_progress'),
                  sort: 'progress'
                }];

                // Show the select dialog with updated items
                Lampa.Select.show({
                  title: Lampa.Lang.translate('torrent_select_file'),
                  items: [].concat(sortButtons, _toConsumableArray(newItems)),
                  onSelect: function onSelect(item) {
                    // If this is a sort button
                    if (item.sort) {
                      _updateFileList(item.sort);
                      return;
                    }

                    // Otherwise it's a file selection
                    var file = item.file;
                    var filePath = file.name;
                    var webdavFilePath = "".concat(config.webdavUrl, "/").concat(dirName, "/").concat(filePath);
                    "".concat(config.user, ":").concat(config.pass, "@").concat(webdavFilePath.replace(/^https?:\/\//, ''));

                    // Create playlist from all files
                    var playlist = mediaFiles.map(function (f) {
                      var path = f.name;
                      var webdavPath = "".concat(config.webdavUrl, "/").concat(dirName, "/").concat(path);
                      var auth = "".concat(config.user, ":").concat(config.pass, "@").concat(webdavPath.replace(/^https?:\/\//, ''));
                      return {
                        url: "https://".concat(auth),
                        title: f.name.split('/').pop(),
                        timeline: false
                      };
                    });

                    // Find selected file index in playlist
                    var index = mediaFiles.findIndex(function (f) {
                      return f.name === file.name;
                    });

                    // Start playback with selected file
                    Lampa.Player.play(playlist[index]);
                    Lampa.Player.playlist(playlist);
                  },
                  onBack: function onBack() {
                    Lampa.Controller.toggle('content');
                  }
                });
              }; // Initial file list display
              _updateFileList('name');
              return _context6.a(2);
            case 9:
              _t5 = action.action;
              _context6.n = _t5 === 'resume' ? 10 : _t5 === 'pause' ? 11 : _t5 === 'delete' ? 12 : 13;
              break;
            case 10:
              method = 'torrent-start';
              return _context6.a(3, 14);
            case 11:
              method = 'torrent-stop';
              return _context6.a(3, 14);
            case 12:
              method = 'torrent-remove';
              return _context6.a(3, 14);
            case 13:
              throw new Error("Unknown action: ".concat(action.action));
            case 14:
              _context6.n = 15;
              return makeRequest({
                method: method,
                arguments: {
                  ids: torrentData.id,
                  'delete-local-data': action.deleteFiles ? true : false
                }
              });
            case 15:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              });
              _context6.n = 17;
              break;
            case 16:
              _context6.p = 16;
              _t6 = _context6.v;
              console.error('TDM', 'Error sending command:', _t6);
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionReturnedError')
              });
              throw _t6;
            case 17:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 16]]);
      }));
      return _SendCommand.apply(this, arguments);
    }
    function SendTask(_x4, _x5, _x6) {
      return _SendTask.apply(this, arguments);
    }
    function _SendTask() {
      _SendTask = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(selectedTorrent, labels, dtype) {
        var config, _addResponse$argument, addResponse, torrentId, labelResponse, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (selectedTorrent) {
                _context7.n = 1;
                break;
              }
              throw new Error('No torrent selected');
            case 1:
              config = getConfig();
              _context7.p = 2;
              _context7.n = 3;
              return makeRequest({
                method: 'torrent-add',
                arguments: _objectSpread2({
                  paused: config.autostart ? true : false,
                  sequentialDownload: config.sequentialDownload ? true : false,
                  filename: selectedTorrent.MagnetUri || selectedTorrent.Link,
                  labels: [labels]
                }, Lampa.Storage.get("".concat(CONFIG_PREFIX).concat(dtype)) ? {
                  'download-dir': Lampa.Storage.get("".concat(CONFIG_PREFIX).concat(dtype))
                } : {})
              });
            case 3:
              addResponse = _context7.v;
              if (!(addResponse.result !== 'success' || Object.keys(addResponse.arguments).length === 0)) {
                _context7.n = 4;
                break;
              }
              throw new Error("Failed to add torrent: ".concat(addResponse.result));
            case 4:
              // Get the torrent ID
              torrentId = (_addResponse$argument = addResponse.arguments['torrent-added']) === null || _addResponse$argument === void 0 ? void 0 : _addResponse$argument.id;
              if (torrentId) {
                _context7.n = 5;
                break;
              }
              throw new Error('Torrent added but no ID returned');
            case 5:
              _context7.n = 6;
              return makeRequest({
                method: 'torrent-set',
                arguments: {
                  ids: torrentId,
                  labels: [labels]
                }
              });
            case 6:
              labelResponse = _context7.v;
              if (!(labelResponse.result !== 'success')) {
                _context7.n = 7;
                break;
              }
              throw new Error("Failed to set labels: ".concat(labelResponse.result));
            case 7:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              });
              _context7.n = 9;
              break;
            case 8:
              _context7.p = 8;
              _t7 = _context7.v;
              console.error('TDM', 'Error adding torrent:', _t7);
              Lampa.Bell.push({
                text: _t7.message || Lampa.Lang.translate('actionReturnedError')
              });
              throw _t7;
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 8]]);
      }));
      return _SendTask.apply(this, arguments);
    }
    var Keenetic = {
      auth: auth,
      GetData: GetData,
      GetInfo: GetInfo,
      SendCommand: SendCommand,
      SendTask: SendTask,
      transmissionStatus: TRANSMISSION_STATUS
    };

    var regexp2 = /(?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv/;
    function Item(data) {
      this.id = data.id; // зберігаємо ідентифікатор торренту

      var itemN = Lampa.Template.get('lmetorrent_item__card', {
        title: data.name,
        size: Lampa.Utils.bytesToSize(data.size, 0),
        state: data.state,
        "data-completed": Number((data.completed * 100).toFixed(2)),
        completed: Number((data.completed * 100).toFixed(2)) + "%",
        image: data.image,
        quality: data.name.match(regexp2) ? data.name.match(regexp2).toString().replace(/[ .()]/g, '') : ''
      });
      this.render = function () {
        return itemN;
      };

      // Метод для оновлення статусу та прогресу
      this.update = function (newData) {
        // Припускається, що відповідні елементи мають класи для статусу та прогресу
        itemN.find('.lmetorrent_card__state').text(newData.state);
        var progress = Number((newData.completed * 100).toFixed(2));
        itemN.attr("data-completed", progress);
        itemN.find('.lmetorrent_card__completed').text(progress + "%");
      };
      this.destroy = function () {
        itemN.remove();
      };
    }

    function Header(data) {
      var item = Lampa.Template.get("lmetorrent_header", {
        space: Lampa.Utils.bytesToSize(data.space, 0)
      });
      this.render = function () {
        return item;
      };
      this.destroy = function () {
        item.remove();
      };
    }

    /**
     * Оновлює метадані для одного або кількох торрентів.
     * Отримує дані з TMDB та зберігає їх у базу даних.
     * @param {object|object[]} torrentData - Дані одного або кількох торрентів.
     */
    function update(_x) {
      return _update.apply(this, arguments);
    }
    function _update() {
      _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrentData) {
        var torrents, _iterator, _step, torrent, cleanTitle, searchResults, initialMetadata, fullMetadata, detailsUrl, imageUrl, imagePath, useProxy, posterSize, directBaseUrl, proxyBaseUrl, baseUrl, metadataToSave, generatedImage, _t, _t2, _t3;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
              _iterator = _createForOfIteratorHelper(torrents);
              _context.p = 1;
              _iterator.s();
            case 2:
              if ((_step = _iterator.n()).done) {
                _context.n = 18;
                break;
              }
              torrent = _step.value;
              _context.p = 3;
              cleanTitle = torrent.title || torrent.name;
              if (cleanTitle) {
                _context.n = 4;
                break;
              }
              console.warn('TDM', 'MetadataManager: Torrent has no title or name', torrent);
              Lampa.Bell.push({
                text: "Skipping torrent without title: ".concat(torrent.id)
              });
              return _context.a(3, 17);
            case 4:
              _context.n = 5;
              return processTorrents(cleanTitle);
            case 5:
              searchResults = _context.v;
              // processTorrents повертає масив, беремо перший результат
              initialMetadata = searchResults && searchResults.length > 0 ? searchResults[0] : null;
              if (!(initialMetadata && initialMetadata.media_type && initialMetadata.id)) {
                _context.n = 13;
                break;
              }
              fullMetadata = void 0; // Якщо processTorrents повернув лише id та тип, отримуємо повні дані
              if (!(!initialMetadata.poster_path && !initialMetadata.backdrop_path)) {
                _context.n = 10;
                break;
              }
              detailsUrl = "https://api.themoviedb.org/3/".concat(initialMetadata.media_type, "/").concat(initialMetadata.id, "?api_key=4ef0d7355d9ffb5151e987764708ce96&language=uk,ru,en");
              _context.p = 6;
              _context.n = 7;
              return $.ajax({
                url: detailsUrl,
                method: 'GET'
              });
            case 7:
              fullMetadata = _context.v;
              _context.n = 9;
              break;
            case 8:
              _context.p = 8;
              _t = _context.v;
              console.error('TDM', 'Failed to fetch full metadata:', _t);
              fullMetadata = initialMetadata; // Повертаємось до початкових даних
            case 9:
              _context.n = 11;
              break;
            case 10:
              fullMetadata = initialMetadata;
            case 11:
              imageUrl = '';
              imagePath = fullMetadata.poster_path || fullMetadata.backdrop_path;
              if (imagePath) {
                useProxy = Lampa.Storage.field('lmetorrentproxyTMDB') === true;
                posterSize = Lampa.Storage.field('poster_size') || 'w200'; // Базовий URL з Lampa
                directBaseUrl = Lampa.TMDB.image('t/p/'); // Проксі URL
                proxyBaseUrl = 'https://lampame.v6.rocks/https://tmdb.melonhu.cn/img/t/p/';
                baseUrl = useProxy ? proxyBaseUrl : directBaseUrl; // Формуємо фінальний URL, додаючи слеш між розміром та шляхом
                // imagePath від API приходить з початковим слешем, видаляємо його
                imageUrl = baseUrl + posterSize + '/' + imagePath.replace(/^\//, '');
              } else {
                console.log('TDM', 'MetadataManager: No poster or backdrop path found, using textToImage', cleanTitle);
                imageUrl = textToImage(cleanTitle);
              }

              // Зберігаємо URL постера та інші метадані в базу даних
              metadataToSave = {
                poster: imageUrl,
                tmdb_id: fullMetadata.id,
                media_type: fullMetadata.media_type || initialMetadata.media_type
              };
              _context.n = 12;
              return saveMetadata(torrent.id, metadataToSave);
            case 12:
              Lampa.Bell.push({
                text: "Metadata added for: ".concat(cleanTitle)
              });
              _context.n = 15;
              break;
            case 13:
              console.log('TDM', 'MetadataManager: No TMDB metadata found for', cleanTitle);
              generatedImage = textToImage(cleanTitle);
              _context.n = 14;
              return saveMetadata(torrent.id, {
                poster: generatedImage
              });
            case 14:
              Lampa.Bell.push({
                text: "No metadata found for: ".concat(cleanTitle)
              });
            case 15:
              _context.n = 17;
              break;
            case 16:
              _context.p = 16;
              _t2 = _context.v;
              console.error('TDM', 'MetadataManager update error:', _t2);
              Lampa.Bell.push({
                text: "Error adding metadata for ".concat(torrent.title || torrent.name, ": ").concat(_t2.message)
              });
            case 17:
              _context.n = 2;
              break;
            case 18:
              _context.n = 20;
              break;
            case 19:
              _context.p = 19;
              _t3 = _context.v;
              _iterator.e(_t3);
            case 20:
              _context.p = 20;
              _iterator.f();
              return _context.f(20);
            case 21:
              return _context.a(2);
          }
        }, _callee, null, [[6, 8], [3, 16], [1, 19, 20, 21]]);
      }));
      return _update.apply(this, arguments);
    }

    // Constants
    var UPDATE_INTERVAL_MS = 5000;

    /**
     * Parse torrent labels to extract media information
     * 
     * @param {Array|string} labels - Labels to parse
     * @returns {Object|null} - Parsed media type and ID, or null if not found
     */
    function parseLabels$1(labels) {
      if (!labels) return null;

      // Convert string to array if needed
      var labelArray = Array.isArray(labels) ? labels : labels.split(',');

      // Find label matching tv/movie pattern
      var matchedLabel = labelArray.find(function (label) {
        return /^(tv|movie)\/\d+$/.test(label);
      });
      if (!matchedLabel) return null;

      // Split matched label into parts
      var _matchedLabel$split = matchedLabel.split('/'),
        _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
        method = _matchedLabel$split2[0],
        tID = _matchedLabel$split2[1];
      return {
        method: method,
        tID: tID
      };
    }

    /**
     * Main Panel Component
     */
    function Component() {
      // Component state
      var network = new Lampa.Reguest();
      var client = Lampa.Storage.field('lmetorrentSelect');
      var updateInterval;
      var items = [];
      var active, last;
      // UI elements
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250
      });
      var html = $("<div class='lmetorrent-module'></div>");
      var head = $("<div class='lmetorrent-head'></div>");
      var body = $('<div class="lmetorrent-catalog--list category-full"></div>');

      /**
       * Initialize the component
       */
      this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var result, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.activity.loader(true);
              _context.p = 1;
              _context.n = 2;
              return fetchClientData(client);
            case 2:
              result = _context.v;
              if (result) {
                this.build(result);
              } else {
                this.showError(result);
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              this.showError(_t);
            case 4:
              return _context.a(2, this.render());
          }
        }, _callee, this, [[1, 3]]);
      }));

      /**
       * Fetch data from the selected torrent client
       * 
       * @param {string} clientType - Type of torrent client
       * @returns {Promise<Object>} - Client data and info
       */
      function fetchClientData(_x) {
        return _fetchClientData.apply(this, arguments);
      }
      /**
       * Display error message when client connection fails
       * 
       * @param {Object} data - Error data
       */
      function _fetchClientData() {
        _fetchClientData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(clientType) {
          var _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _yield$Promise$all3, _yield$Promise$all4, trData, trInfo, _yield$Promise$all5, _yield$Promise$all6, keData, keInfo, _yield$Promise$all7, _yield$Promise$all8, syData, syInfo, _t3;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _t3 = clientType;
                _context3.n = _t3 === 'qBittorent' ? 1 : _t3 === 'transmission' ? 3 : _t3 === 'keenetic' ? 5 : _t3 === 'synology' ? 7 : 9;
                break;
              case 1:
                _context3.n = 2;
                return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
              case 2:
                _yield$Promise$all = _context3.v;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                qbData = _yield$Promise$all2[0];
                qbInfo = _yield$Promise$all2[1];
                return _context3.a(2, {
                  data: qbData,
                  info: qbInfo
                });
              case 3:
                _context3.n = 4;
                return Promise.all([Transmission.GetData(), Transmission.GetInfo()]);
              case 4:
                _yield$Promise$all3 = _context3.v;
                _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
                trData = _yield$Promise$all4[0];
                trInfo = _yield$Promise$all4[1];
                return _context3.a(2, {
                  data: trData,
                  info: trInfo
                });
              case 5:
                _context3.n = 6;
                return Promise.all([Keenetic.GetData(), Keenetic.GetInfo()]);
              case 6:
                _yield$Promise$all5 = _context3.v;
                _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2);
                keData = _yield$Promise$all6[0];
                keInfo = _yield$Promise$all6[1];
                return _context3.a(2, {
                  data: keData,
                  info: keInfo
                });
              case 7:
                _context3.n = 8;
                return Promise.all([Synology.GetData(), Synology.GetInfo()]);
              case 8:
                _yield$Promise$all7 = _context3.v;
                _yield$Promise$all8 = _slicedToArray(_yield$Promise$all7, 2);
                syData = _yield$Promise$all8[0];
                syInfo = _yield$Promise$all8[1];
                return _context3.a(2, {
                  data: syData,
                  info: syInfo
                });
              case 9:
                throw new Error('Unknown client type');
              case 10:
                return _context3.a(2);
            }
          }, _callee3);
        }));
        return _fetchClientData.apply(this, arguments);
      }
      this.showError = function (data) {
        console.log('TDM', 'Error fetching data:', data);
        scroll.append(body);
        html.append(scroll.render());
        var errorMessage = "<div class=\"lmetorrent-error_body\">\n            <div>".concat(Lampa.Lang.translate('somethingWentWrong'), "</div>\n            <div class=\"lmetorrent-error_result\">").concat(Lampa.Lang.translate('clientNotClient'), "</div>\n        </div>");
        body.append(errorMessage);
        this.activity.loader(false);
        this.activity.toggle();
      };

      /**
       * Build the panel UI with the fetched data
       * 
       * @param {Object} result - Data from the torrent client
       */
      this.build = function (result) {
        scroll.minus();

        // Add header
        if (result.info) {
          this.renderHeader(result.info);
        }

        // Add torrent items
        if (result.data) {
          this.renderTorrentList(result.data);
        } else {
          this.renderTorrentList(result);
        }

        // Assemble UI
        scroll.append(head);
        scroll.append(body);
        html.append(scroll.render());
        this.activity.loader(false);
        this.activity.toggle();

        // Start auto-update
        startAutoUpdate();
      };

      /**
       * Render the panel header
       * 
       * @param {Object} data - Header data
       */
      this.renderHeader = function (data) {
        var item = new Header(data);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        });

        // Add click handler for the update button
        item.render()[0].on("hover:enter", function () {
          Lampa.Activity.replace({
            url: "",
            title: client.toUpperCase() + " Manager",
            component: "lmetorrentPanel",
            page: 1
          });
          Lampa.Bell.push({
            text: "Reloaded"
          });
        });
        head.append(item.render());
        items.push(item);
      };

      /**
       * Render the list of torrents
       * 
       * @param {Array} torrents - List of torrents to display
       */
      this.renderTorrentList = function (torrents) {
        torrents.forEach(function (torrentData) {
          var item = new Item(torrentData);
          item.render().on("hover:focus", function () {
            last = item.render()[0];
            active = items.indexOf(item);
            scroll.update(items[active].render(), true);
          }).on("hover:enter", function () {
            showTorrentMenu(torrentData, torrents);
          });
          body.append(item.render());
          items.push(item);
        });
      };

      /**
       * Show the torrent action menu
       * 
       * @param {Object} torrentData - Data for the selected torrent
       * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
       */
      function showTorrentMenu(torrentData, allTorrents) {
        var enabled = Lampa.Controller.enabled().name;
        var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels$1(torrentData.labels);
        var menuItems = [{
          title: Lampa.Lang.translate('resume'),
          action: 'resume'
        }, {
          title: Lampa.Lang.translate('pause'),
          action: 'pause'
        }, {
          title: Lampa.Lang.translate('delete'),
          action: 'delete'
        }].concat(_toConsumableArray(hasMetadata ? [{
          title: Lampa.Lang.translate('openCard'),
          action: 'card'
        }] : []), [{
          title: Lampa.Lang.translate('add_metadata'),
          action: 'parse'
        }, {
          title: Lampa.Lang.translate('add_metadata_all'),
          action: 'parse-all'
        }]);
        if (client === 'keenetic') {
          menuItems.push({
            title: 'Play',
            action: 'play'
          });
        }
        if (client != 'synology') {
          menuItems.push({
            title: Lampa.Lang.translate('fullDelete'),
            action: 'delete',
            deleteFiles: true
          });
        }
        Lampa.Select.show({
          title: torrentData.name,
          items: menuItems,
          onBack: function onBack() {
            // Повертаємось до попереднього контролера, якщо він існує
            var currentController = Lampa.Controller.enabled();
            if (currentController && currentController.name !== enabled) {
              Lampa.Controller.toggle(enabled);
            } else {
              // Якщо контролер не змінився, просто вимикаємо меню
              Lampa.Controller.toggle('menu');
            }
          },
          onSelect: function onSelect(action) {
            handleTorrentAction(action, torrentData, allTorrents);
          }
        });
      }

      /**
       * Handle torrent action selection
       * 
       * @param {Object} action - Selected action
       * @param {Object} torrentData - Data for the selected torrent
       * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
       */
      function handleTorrentAction(action, torrentData, allTorrents) {
        if (action.action === 'card') {
          var cardInfo = null;
          // Спочатку перевіряємо новий метод (з DB)
          if (torrentData.tmdb_id && torrentData.media_type) {
            cardInfo = {
              tID: torrentData.tmdb_id,
              method: torrentData.media_type
            };
          }
          // Якщо не вийшло, перевіряємо старий метод (з labels)
          else {
            cardInfo = parseLabels$1(torrentData.labels);
          }
          if (cardInfo) {
            Lampa.Activity.push({
              url: '',
              component: 'full',
              id: cardInfo.tID,
              method: cardInfo.method,
              source: Lampa.Storage.field('source') || 'tmdb'
            });
          } else {
            Lampa.Bell.push({
              text: 'No metadata available for this torrent'
            });
          }
        } else {
          // Send command to the appropriate client
          switch (client) {
            case 'qBittorent':
              return Qbittorent.SendCommand(action, torrentData);
            case 'transmission':
              return Transmission.SendCommand(action, action.action === 'parse-all' ? allTorrents : torrentData);
            case 'keenetic':
              return Keenetic.SendCommand(action, action.action === 'parse-all' ? allTorrents : torrentData);
            case 'synology':
              if (action.action === 'parse') {
                return update(torrentData);
              } else if (action.action === 'parse-all') {
                return update(allTorrents);
              } else {
                return Synology.SendCommand(action, torrentData);
              }
            default:
              Lampa.Bell.push({
                text: 'Unknown client type'
              });
              return null;
          }
        }
      }

      /**
       * Start auto-update for torrent data
       */
      function startAutoUpdate() {
        // Select the appropriate data function based on client
        var getDataFunc;
        switch (client) {
          case 'qBittorent':
            getDataFunc = Qbittorent.GetData;
            break;
          case 'transmission':
            getDataFunc = Transmission.GetData;
            break;
          case 'keenetic':
            getDataFunc = Keenetic.GetData;
            break;
          case 'synology':
            getDataFunc = Synology.GetData;
            break;
          default:
            console.error('TDM', 'Unknown client type');
            return;
        }

        // Set up interval for updates
        updateInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var result, _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.p = 0;
                _context2.n = 1;
                return getDataFunc();
              case 1:
                result = _context2.v;
                // Update existing items with new data
                result.forEach(function (newTorrent) {
                  items.forEach(function (item) {
                    if (item.id === newTorrent.id) {
                      item.update(newTorrent);
                    }
                  });
                });
                _context2.n = 3;
                break;
              case 2:
                _context2.p = 2;
                _t2 = _context2.v;
                console.error('TDM', 'Auto update error:', _t2);
              case 3:
                return _context2.a(2);
            }
          }, _callee2, null, [[0, 2]]);
        })), UPDATE_INTERVAL_MS);
      }

      /**
       * Handle back button
       */
      this.back = function () {
        Lampa.Activity.backward();
      };

      /**
       * Set background
       */
      this.background = function () {
        Lampa.Background.immediately("");
      };

      /**
       * Start the component
       */
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        this.background();
        Lampa.Controller.add("content", {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          left: function left() {
            if (Navigator.canmove("left")) Navigator.move("left");else Lampa.Controller.toggle("menu");
          },
          right: function right() {
            Navigator.move("right");
          },
          up: function up() {
            if (Navigator.canmove("up")) Navigator.move("up");else Lampa.Controller.toggle("head");
          },
          down: function down() {
            if (Navigator.canmove("down")) Navigator.move("down");
          },
          back: this.back
        });
        Lampa.Controller.toggle("content");
      };

      /**
       * Pause the component
       */
      this.pause = function () {
        // Placeholder for pause functionality
      };

      /**
       * Stop the component
       */
      this.stop = function () {
        // Placeholder for stop functionality
      };

      /**
       * Render the component
       * 
       * @returns {JQuery} - Component HTML
       */
      this.render = function () {
        return html;
      };

      /**
       * Clean up resources when component is destroyed
       */
      this.destroy = function () {
        network.clear();
        Lampa.Arrays.destroy(items);
        scroll.destroy();
        html.remove();
        if (updateInterval) {
          clearInterval(updateInterval);
        }
        items = null;
        network = null;
      };
    }

    function Main$1(manifest) {
      //Создание пункта меню
      Lampa.SettingsApi.addComponent({
        component: manifest.component,
        name: manifest.name,
        icon: manifest.icon
      });
      //Select Client
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + 'Select',
          type: 'select',
          "default": 'no_client',
          values: {
            no_client: 'None',
            universalClient: "Universal",
            qBittorent: "qBittorent",
            transmission: "Transmission",
            keenetic: "Keenetic Transmission",
            synology: "Synology"
          }
        },
        field: {
          name: "Выбор клиента"
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Proxy TMDB
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + 'proxyTMDB',
          type: 'trigger',
          "default": 'false',
          values: {
            "true": Lampa.Lang.translate('true'),
            "false": Lampa.Lang.translate('false')
          }
        },
        field: {
          name: 'Proxy TMDB posters'
        },
        onRender: function onRender(item) {
          var forbiddenValues = ["universalClient", "synology", "no_client"];
          var clientValue = Lampa.Storage.field(manifest.component + 'proxyTMDB');
          // indexOf возвращает -1, если значения нет в массиве
          if (forbiddenValues.indexOf(clientValue) === -1) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Universal action
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + 'UniversalAction',
          type: 'select',
          "default": 'no_client',
          values: {
            open: Lampa.Lang.translate('openUniversal'),
            click: Lampa.Lang.translate('copyUniversal')
          }
        },
        field: {
          name: Lampa.Lang.translate('UniversalAction')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "universalClient") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //qBittorent
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentUrl",
          type: "input",
          //доступно select,input,trigger,title,static
          //values: `${Lampa.Storage.get("qBittorentUrl") || ""}`,
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: "Address"
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false,
          name: manifest.component + "qBittorentTweak"
        },
        field: {
          name: Lampa.Lang.translate('tweak')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      // qBittorent Tweak part
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentSequentialDownload",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: 'Sequential Download'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentfirstLastPiecePrio",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: 'Prioritize download first last piece'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentProxy",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('LMEProxy'),
          description: Lampa.Lang.translate('LMEProxyDescription')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentMovies",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathMovie')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentTV",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathTV')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      //Transmission
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionUrl",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Address'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionUser",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Login'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionPass",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Password'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false,
          name: manifest.component + "transmissionTweak"
        },
        field: {
          name: Lampa.Lang.translate('tweak')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      // Transmission Tweak part
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionAutostart",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": true
        },
        field: {
          name: 'Autostop'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionSequentialDownload",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: 'SequentialDownload'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionProxy",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('LMEProxy'),
          description: Lampa.Lang.translate('LMEProxyDescription')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionPath",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '/transmission/rpc',
          values: '/transmission/rpc',
          "default": '/transmission/rpc'
        },
        field: {
          name: Lampa.Lang.translate('TransmissionRPCRoute'),
          description: Lampa.Lang.translate('TransmissionRPCRouteDescription')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionMovies",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathMovie')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "transmissionTV",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathTV')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      //Synology
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "synologyUrl",
          type: "input",
          //доступно select,input,trigger,title,static
          //values: `${Lampa.Storage.get("synologyUrl") || ""}`,
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Address'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "synologyUser",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Login'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "synologyPass",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Password'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "synologyPathMovies",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathMovie')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "synologyPathTV",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathTV')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false,
          name: manifest.component + "synologyProxy"
        },
        field: {
          name: Lampa.Lang.translate('LMEProxy'),
          description: Lampa.Lang.translate('LMEProxyDescription')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      // Synology Tweak part

      // Keenetic Transmission
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticUrl",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Address'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticUser",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Login'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticPass",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'Password'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticWebdavUrl",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: 'WebDAV URL',
          description: 'URL for WebDAV access to files'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false,
          name: manifest.component + "keeneticTweak"
        },
        field: {
          name: Lampa.Lang.translate('tweak')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });

      // Keenetic Tweak part
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticAutostart",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": true
        },
        field: {
          name: 'Autostop'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticSequentialDownload",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: 'SequentialDownload'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticProxy",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('LMEProxy'),
          description: Lampa.Lang.translate('LMEProxyDescription')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticPath",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '/transmission/rpc',
          values: '/transmission/rpc',
          "default": '/transmission/rpc'
        },
        field: {
          name: Lampa.Lang.translate('TransmissionRPCRoute'),
          description: Lampa.Lang.translate('TransmissionRPCRouteDescription')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticMovies",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathMovie')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "keeneticTV",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathTV')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
    }

    function Main(selectedTorrent) {
      if (Lampa.Storage.field("lmetorrentUniversalAction") === "open") {
        //if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click()
        //else
        window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
      } else {
        Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('copy_secuses')
          });
        }, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('copy_error')
          });
        });
      }
    }

    //Import Clients
    function Send() {
      function send2qBittorrent(selectedTorrent, labels, dtype) {
        Qbittorent.SendTask(selectedTorrent, labels, dtype);
      }
      function send2synology(selectedTorrent, labels, dtype) {
        Synology.SendTask(selectedTorrent, labels, dtype);
      }
      function send2transmission(selectedTorrent, labels, dtype) {
        Transmission.SendTask(selectedTorrent, labels, dtype);
      }
      function send2keenetic(selectedTorrent, labels, dtype) {
        Keenetic.SendTask(selectedTorrent, labels, dtype);
      }
      function send2universal(selectedTorrent, labels) {
        Main(selectedTorrent);
      }
      Lampa.Listener.follow('torrent', function (e) {
        if (e.type === 'onlong') {
          var _Lampa$Activity$activ, _Lampa$Activity$activ2, _Lampa$Activity$activ3;
          var selectedTorrent = e.element;
          var labels = "".concat((_Lampa$Activity$activ = Lampa.Activity.active().movie) !== null && _Lampa$Activity$activ !== void 0 && _Lampa$Activity$activ.first_air_date ? "tv" : "movie", "/").concat((_Lampa$Activity$activ2 = Lampa.Activity.active().movie) === null || _Lampa$Activity$activ2 === void 0 ? void 0 : _Lampa$Activity$activ2.id);
          var dtype = (_Lampa$Activity$activ3 = Lampa.Activity.active().movie) !== null && _Lampa$Activity$activ3 !== void 0 && _Lampa$Activity$activ3.first_air_date ? "TV" : "Movies";
          var onSelectApp = function onSelectApp(a) {
            a.send2app(selectedTorrent, labels ? labels : null, dtype);
          };
          if (Lampa.Storage.field("lmetorrentSelect") === 'qBittorent') {
            e.menu.push({
              title: "<div class=\"btnTDdownload wait\">\n                            <svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> <path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path> </g></svg>\n                            qBittorrent</div>",
              send2app: send2qBittorrent,
              onSelect: onSelectApp
            });
          }
          if (Lampa.Storage.field("lmetorrentSelect") === 'transmission') {
            e.menu.push({
              title: "<div class=\"btnTDdownload wait\">\n                            <svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> <path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path> </g></svg>\n                            Transmission</div>",
              send2app: send2transmission,
              onSelect: onSelectApp
            });
          }
          if (Lampa.Storage.field("lmetorrentSelect") === 'keenetic') {
            e.menu.push({
              title: "<div class=\"btnTDdownload wait\">\n                            <svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> <path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path> </g></svg>\n                            Keenetic</div>",
              send2app: send2keenetic,
              onSelect: onSelectApp
            });
          }
          if (Lampa.Storage.field("lmetorrentSelect") === 'synology') {
            e.menu.push({
              title: "<div class=\"btnTDdownload wait\">\n                            <svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> <path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path> </g></svg>\n                            Synology</div>",
              send2app: send2synology,
              onSelect: onSelectApp
            });
          }
          //Universal
          if (Lampa.Storage.field("lmetorrentSelect") === 'universalClient') {
            e.menu.push({
              title: "<div class=\"btnTDdownload wait\">\n                            <svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> <path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path> </g></svg>\n                            Universal</div>",
              send2app: send2universal,
              onSelect: onSelectApp
            });
          }
        }
      });
    }

    var client = Lampa.Storage.field('lmetorrentSelect');
    function startClient(_x) {
      return _startClient.apply(this, arguments);
    }
    function _startClient() {
      _startClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(client) {
        var result, _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _yield$Promise$all3, _yield$Promise$all4, trData, trInfo, _yield$Promise$all5, _yield$Promise$all6, keData, keInfo, _t, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _t = client;
              _context2.n = _t === 'qBittorent' ? 1 : _t === 'transmission' ? 3 : _t === 'synology' ? 5 : _t === 'keenetic' ? 7 : 9;
              break;
            case 1:
              _context2.n = 2;
              return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
            case 2:
              _yield$Promise$all = _context2.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              qbData = _yield$Promise$all2[0];
              qbInfo = _yield$Promise$all2[1];
              result = {
                data: qbData,
                info: qbInfo
              };
              return _context2.a(3, 10);
            case 3:
              _context2.n = 4;
              return Promise.all([Transmission.GetData(), Transmission.GetInfo()]);
            case 4:
              _yield$Promise$all3 = _context2.v;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              trData = _yield$Promise$all4[0];
              trInfo = _yield$Promise$all4[1];
              result = {
                data: trData,
                info: trInfo
              };
              return _context2.a(3, 10);
            case 5:
              _context2.n = 6;
              return Synology.GetData();
            case 6:
              result = _context2.v;
              return _context2.a(3, 10);
            case 7:
              _context2.n = 8;
              return Promise.all([Keenetic.GetData(), Keenetic.GetInfo()]);
            case 8:
              _yield$Promise$all5 = _context2.v;
              _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2);
              keData = _yield$Promise$all6[0];
              keInfo = _yield$Promise$all6[1];
              result = {
                data: keData,
                info: keInfo
              };
              return _context2.a(3, 10);
            case 9:
              throw new Error('Unknown client type');
            case 10:
              console.log('TDM:', result);
              return _context2.a(2, result);
            case 11:
              _context2.p = 11;
              _t2 = _context2.v;
              console.error('TDM', 'Error fetching client data:', _t2);
              throw _t2;
            case 12:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 11]]);
      }));
      return _startClient.apply(this, arguments);
    }
    function torrentInfo() {
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
          setTimeout(function () {
            function findTorrent(data, method, id) {
              var searchLabel = "".concat(method, "/").concat(id);
              return data.find(function (item) {
                return item.labels && item.labels.includes(searchLabel);
              });
            }
            startClient(client).then(function (r) {
              if (r && r.data) {
                var torrent = findTorrent(r.data, e.object.method, e.object.id);
                if (torrent) {
                  // Create button element
                  var $button = $("<div class=\"full-start__button selector button--lme_torrent\">\n                                <svg fill=\"currentColor\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 588.601 588.6\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <path d=\"M168.405,288.048c-3.019,0.084-4.936,0.419-5.864,0.728v20.174l5.632-0.059c6.463-0.078,10.558-4.35,10.558-10.768 C178.73,291.017,174.636,287.869,168.405,288.048z\"></path> <path d=\"M82.324,290.445c-8.177,0.227-12.49,10.278-12.49,22.491c0,12.045,4.588,21.674,12.49,21.737 c8.089,0.079,12.701-9.761,12.701-22.412C95.018,300.86,90.688,290.213,82.324,290.445z\"></path> <path d=\"M125.722,289.235c-2.813,0.082-4.617,0.396-5.484,0.696v19.515l5.276-0.059c6.03-0.074,9.858-4.203,9.858-10.404 C135.372,292.117,131.544,289.074,125.722,289.235z\"></path> <path d=\"M539.568,49.201h-178.2c-0.786,0-1.561,0.074-2.347,0.124V0L11.228,46.419v494.562L359.032,588.6v-50.814 c0.78,0.053,1.55,0.115,2.341,0.115h178.2c20.852,0,37.8-16.959,37.8-37.8v-413.1C577.368,66.161,560.425,49.201,539.568,49.201z M361.368,70.801h178.2c8.928,0,16.2,7.267,16.2,16.2v271.329c-23.272-58.704-70.2-90.393-132.864-99.347 c-18.879-2.705-21.79,0.886-19.687,19.517c1.482,13.252,11.786,9.158,18.747,10.022c56.574,7.085,103.982,49.642,115.288,104.147 c7.267,34.974-1.266,71.872-21.305,101.05h-14.08c36.64-49.116,38.834-102.389,2.964-149.575 c-33.307-43.802-99.62-61.505-145.8-42.604V71.043C359.797,70.93,360.572,70.801,361.368,70.801z M359.032,333.687 c2.226-0.891,4.25-1.703,6.265-2.479c45.752-17.649,97.817-0.606,122.096,39.946c23.757,39.726,14.223,90.034-22.892,122.565 h-14.122c3.912-2.942,7.73-6.181,11.411-9.734c26.314-25.376,35.374-56.162,24.01-90.925 c-11.527-35.258-37.446-55.244-74.007-60.592c-18.114-2.647-36.956,1.244-52.761,9.661V333.687z M359.032,378.891 c0.169-0.163,0.327-0.354,0.506-0.517c22.939-22.17,62.259-21.479,84.555,1.397c22.687,23.277,22.887,60.307-2.479,81.949 c-13.11,11.175-29.995,20.408-46.659,24.49c-11.935,2.921-23.905,4.777-35.923,6.021V378.891z M296.331,275.25l49.401-1.7v11.156 l-19.232,0.514v61.077l-11.938-0.19v-60.57l-18.236,0.493V275.25H296.331z M60.247,292.37l-12.49,0.332v49.265l-7.771-0.11v-48.953 l-11.929,0.321V284.5l32.189-1.113V292.37z M81.857,343.459c-12.677-0.211-20.545-12.983-20.545-30.26 c0-18.077,8.521-31.118,21.209-31.572c13.458-0.466,21.526,12.714,21.526,30.085C104.048,332.153,94.521,343.67,81.857,343.459z M136.836,343.343c-0.738-1.867-1.917-6.982-3.31-14.776c-1.395-8.147-3.73-10.721-8.819-10.895l-4.47,0.025v25.393l-8.701-0.138 v-60.515c3.267-0.828,8.208-1.55,13.324-1.73c7.056-0.242,11.907,1.071,15.238,4.504c2.745,2.797,4.316,7.148,4.316,12.469 c0,8.137-4.398,13.685-9.042,15.868v0.284c3.533,1.641,5.688,6.012,6.951,12.056c1.572,7.857,2.911,15.161,3.963,17.607 L136.836,343.343z M180.312,344.023c-0.788-1.935-2.059-7.229-3.554-15.298c-1.484-8.427-3.995-11.096-9.429-11.264l-4.788,0.021 v26.262l-9.305-0.143v-62.574c3.488-0.865,8.754-1.608,14.241-1.798c7.549-0.274,12.738,1.086,16.313,4.627 c2.942,2.896,4.617,7.394,4.617,12.906c0,8.412-4.704,14.16-9.682,16.428v0.295c3.783,1.688,6.096,6.207,7.446,12.477 c1.68,8.127,3.119,15.684,4.237,18.22L180.312,344.023z M231.742,344.82l-33.874-0.533v-65.646l32.598-1.118v10.083l-22.539,0.609 v17.075l21.266-0.306v9.978l-21.266,0.137v19.438l23.815,0.189V344.82z M241.052,277.151l12.234-0.422l15.515,29.141 c4.061,7.668,7.604,15.688,10.434,23.235h0.19c-0.73-9.313-1.004-18.299-1.004-28.94v-24.301l10.491-0.366v70.208l-11.675-0.18 l-15.881-30.47c-3.828-7.515-7.791-15.884-10.702-23.535l-0.264,0.105c0.43,8.812,0.517,17.819,0.517,29.072v24.421l-9.848-0.152 v-67.816H241.052z M539.568,516.301h-4.915c8.644-11.56,15.746-23.467,21.115-35.743v19.543 C555.769,509.035,548.507,516.301,539.568,516.301z\"></path> </g> </g></svg>\n                                <span>".concat(torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state, "</span>\n                            </div>"));

                  // Attach event handlers
                  $button.on("hover:enter", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                    var enabled, menu;
                    return _regenerator().w(function (_context) {
                      while (1) switch (_context.n) {
                        case 0:
                          enabled = Lampa.Controller.enabled().name;
                          menu = [];
                          menu.push({
                            title: Lampa.Lang.translate('resume'),
                            action: 'resume'
                          }, {
                            title: Lampa.Lang.translate('pause'),
                            action: 'pause'
                          }, {
                            title: Lampa.Lang.translate('delete'),
                            action: 'delete'
                          });

                          // Add play option for Keenetic client
                          if (client === 'keenetic') {
                            menu.push({
                              title: Lampa.Lang.translate('play'),
                              action: 'play'
                            });
                          }

                          // Add full delete option for clients that support it
                          if (client !== 'synology') menu.push({
                            title: Lampa.Lang.translate('fullDelete'),
                            action: 'delete',
                            deleteFiles: true
                          });

                          // Set menu
                          Lampa.Select.show({
                            title: torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state,
                            items: menu,
                            onBack: function onBack() {
                              // Повертаємось до попереднього контролера, якщо він існує
                              var currentController = Lampa.Controller.enabled();
                              if (currentController && currentController.name !== enabled) {
                                Lampa.Controller.toggle(enabled);
                              } else {
                                // Якщо контролер не змінився, просто вимикаємо меню
                                Lampa.Controller.toggle('menu');
                              }
                            },
                            onSelect: function onSelect(a) {
                              switch (client) {
                                case 'qBittorent':
                                  return Qbittorent.SendCommand(a, torrent);
                                case 'transmission':
                                  return Transmission.SendCommand(a, torrent);
                                case 'synology':
                                  return Synology.SendCommand(a, torrent);
                                case 'keenetic':
                                  return Keenetic.SendCommand(a, torrent);
                                default:
                                  return 'Неизвестный клиент';
                              }
                            }
                          });
                        case 1:
                          return _context.a(2);
                      }
                    }, _callee);
                  })));

                  // Append button to container
                  e.object.activity.render().find('.full-start-new__buttons').append($button);
                }
              } else {
                console.error('TDM', 'Failed to get torrent client data');
              }
            });
          }, 100);
        }
      });
    }

    var TorrentStateManager = /*#__PURE__*/function () {
      function TorrentStateManager() {
        _classCallCheck(this, TorrentStateManager);
        this.torrents = [];
        this.interval = null;
        this.listener = Lampa.Listener;
        this.clients = {
          'transmission': Transmission,
          'qbittorent': Qbittorent,
          'keenetic': Keenetic,
          'synology': Synology,
          'universal': Main
        };
      }
      return _createClass(TorrentStateManager, [{
        key: "start",
        value: function start() {
          this.interval = setInterval(this.update.bind(this), 5000); // Оновлювати кожні 5 секунд
          this.update();
        }
      }, {
        key: "stop",
        value: function stop() {
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }
      }, {
        key: "update",
        value: function () {
          var _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var client_name, client, new_torrents, has_active_downloads_before, has_active_downloads_after;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.p = 0;
                  client_name = Lampa.Storage.get('lmetorrentSelect');
                  client = this.clients[client_name];
                  if (client) {
                    _context.n = 1;
                    break;
                  }
                  return _context.a(2);
                case 1:
                  _context.n = 2;
                  return client.GetData();
                case 2:
                  new_torrents = _context.v;
                  if (new_torrents) {
                    has_active_downloads_before = this.hasActiveDownloads();
                    this.torrents = new_torrents;
                    has_active_downloads_after = this.hasActiveDownloads();
                    this.listener.send('torrents:updated', {
                      torrents: this.torrents
                    });
                    if (has_active_downloads_before !== has_active_downloads_after) {
                      this.listener.send('torrents:status_changed', {
                        active: has_active_downloads_after
                      });
                    }
                  }
                  _context.n = 4;
                  break;
                case 3:
                  _context.p = 3;
                  _context.v;
                case 4:
                  return _context.a(2);
              }
            }, _callee, this, [[0, 3]]);
          }));
          function update() {
            return _update.apply(this, arguments);
          }
          return update;
        }()
      }, {
        key: "hasActiveDownloads",
        value: function hasActiveDownloads() {
          return this.torrents.some(function (t) {
            return t.state === 'downloading' || t.state === 'checking';
          });
        }
      }, {
        key: "on",
        value: function on(event, callback) {
          this.listener.follow(event, callback);
        }
      }]);
    }();
    var TorrentStateManager$1 = new TorrentStateManager();

    /**
     * Parse torrent labels to extract media information
     * 
     * @param {Array|string} labels - Labels to parse
     * @returns {Object|null} - Parsed media type and ID, or null if not found
     */
    function parseLabels(labels) {
      if (!labels) return null;

      // Convert string to array if needed
      var labelArray = Array.isArray(labels) ? labels : labels.split(',');

      // Find label matching tv/movie pattern
      var matchedLabel = labelArray.find(function (label) {
        return /^(tv|movie)\/\d+$/.test(label);
      });
      if (!matchedLabel) return null;

      // Split matched label into parts
      var _matchedLabel$split = matchedLabel.split('/'),
        _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
        method = _matchedLabel$split2[0],
        tID = _matchedLabel$split2[1];
      return {
        method: method,
        tID: tID
      };
    }

    /**
     * Show the torrent action menu
     * 
     * @param {Object} torrentData - Data for the selected torrent
     * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
     */
    function showTorrentMenu(torrentData, allTorrents) {
      var client = Lampa.Storage.field('lmetorrentSelect');
      var enabled = Lampa.Controller.enabled().name;
      var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels(torrentData.labels);
      var menuItems = [{
        title: Lampa.Lang.translate('resume'),
        action: 'resume'
      }, {
        title: Lampa.Lang.translate('pause'),
        action: 'pause'
      }, {
        title: Lampa.Lang.translate('delete'),
        action: 'delete'
      }].concat(_toConsumableArray(hasMetadata ? [{
        title: Lampa.Lang.translate('openCard'),
        action: 'card'
      }] : []), [{
        title: Lampa.Lang.translate('add_metadata'),
        action: 'parse'
      }, {
        title: Lampa.Lang.translate('add_metadata_all'),
        action: 'parse-all'
      }]);
      if (client === 'keenetic') {
        menuItems.push({
          title: 'Play',
          action: 'play'
        });
      }
      if (client != 'synology') {
        menuItems.push({
          title: Lampa.Lang.translate('fullDelete'),
          action: 'delete',
          deleteFiles: true
        });
      }
      Lampa.Select.show({
        title: torrentData.name,
        items: menuItems,
        onBack: function onBack() {
          // Повертаємось до попереднього контролера, якщо він існує
          var currentController = Lampa.Controller.enabled();
          if (currentController && currentController.name !== enabled) {
            Lampa.Controller.toggle(enabled);
          } else {
            // Якщо контролер не змінився, просто вимикаємо меню
            Lampa.Controller.toggle('menu');
          }
        },
        onSelect: function onSelect(action) {
          handleTorrentAction(action, torrentData, allTorrents);
        }
      });
    }

    /**
     * Handle torrent action selection
     * 
     * @param {Object} action - Selected action
     * @param {Object} torrentData - Data for the selected torrent
     * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
     */
    function handleTorrentAction(_x, _x2, _x3) {
      return _handleTorrentAction.apply(this, arguments);
    }
    function _handleTorrentAction() {
      _handleTorrentAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(action, torrentData, allTorrents) {
        var client, cardInfo, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              client = Lampa.Storage.field('lmetorrentSelect');
              if (!(action.action === 'card')) {
                _context.n = 1;
                break;
              }
              cardInfo = null; // Спочатку перевіряємо новий метод (з DB)
              if (torrentData.tmdb_id && torrentData.media_type) {
                cardInfo = {
                  tID: torrentData.tmdb_id,
                  method: torrentData.media_type
                };
              }
              // Якщо не вийшло, перевіряємо старий метод (з labels)
              else {
                cardInfo = parseLabels(torrentData.labels);
              }
              if (cardInfo) {
                Lampa.Activity.push({
                  url: '',
                  component: 'full',
                  id: cardInfo.tID,
                  method: cardInfo.method,
                  source: Lampa.Storage.field('source') || 'tmdb'
                });
              } else {
                Lampa.Bell.push({
                  text: 'No metadata available for this torrent'
                });
              }
              _context.n = 17;
              break;
            case 1:
              _context.p = 1;
              _t = client;
              _context.n = _t === 'qBittorent' ? 2 : _t === 'transmission' ? 4 : _t === 'keenetic' ? 6 : _t === 'synology' ? 8 : 14;
              break;
            case 2:
              _context.n = 3;
              return Qbittorent.SendCommand(action, torrentData);
            case 3:
              return _context.a(3, 15);
            case 4:
              _context.n = 5;
              return Transmission.SendCommand(action, action.action === 'parse-all' ? allTorrents : torrentData);
            case 5:
              return _context.a(3, 15);
            case 6:
              _context.n = 7;
              return Keenetic.SendCommand(action, action.action === 'parse-all' ? allTorrents : torrentData);
            case 7:
              return _context.a(3, 15);
            case 8:
              if (!(action.action === 'parse')) {
                _context.n = 10;
                break;
              }
              _context.n = 9;
              return update(torrentData);
            case 9:
              _context.n = 13;
              break;
            case 10:
              if (!(action.action === 'parse-all')) {
                _context.n = 12;
                break;
              }
              _context.n = 11;
              return update(allTorrents);
            case 11:
              _context.n = 13;
              break;
            case 12:
              _context.n = 13;
              return Synology.SendCommand(action, torrentData);
            case 13:
              return _context.a(3, 15);
            case 14:
              Lampa.Bell.push({
                text: 'Unknown client type'
              });
            case 15:
              _context.n = 17;
              break;
            case 16:
              _context.p = 16;
              _t2 = _context.v;
              console.error('TDM', 'Error handling action:', _t2);
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionReturnedError')
              });
            case 17:
              return _context.a(2);
          }
        }, _callee, null, [[1, 16]]);
      }));
      return _handleTorrentAction.apply(this, arguments);
    }

    /**
     * Utility functions for Torrent Manager plugin
     */

    /**
     * Create a panel navigation item for Lampa.Select.show
     * @returns {Function} Function that calls Lampa.Activity.push
     */
    function createPanelNavigationItem() {
      return function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Storage.get('lmetorrentSelect').toUpperCase() + " Manager",
          component: 'lmetorrentPanel',
          page: 1
        });
      };
    }

    var HeaderIconController = /*#__PURE__*/function () {
      function HeaderIconController(element) {
        _classCallCheck(this, HeaderIconController);
        this.element = element;
        this.bind();
        this.listen();
      }
      return _createClass(HeaderIconController, [{
        key: "bind",
        value: function bind() {
          this.element.on('hover:enter', this.showSidebar.bind(this));
        }
      }, {
        key: "listen",
        value: function listen() {
          TorrentStateManager$1.on('torrents:status_changed', this.updateColor.bind(this));
        }
      }, {
        key: "showSidebar",
        value: function showSidebar() {
          var torrents = TorrentStateManager$1.torrents.filter(function (t) {
            return t.state !== 'Finished' && t.completed !== 1;
          });
          var sortedTorrents = this.sortTorrents(torrents);
          var activeDownloads = torrents.filter(function (t) {
            return t.state === 'Downloading' || t.state === 'Сhecking';
          }).length;
          // Create items for Lampa.Select.show
          var items = [
          // Panel navigation item
          //createPanelNavigationItem(),
          {
            title: Lampa.Storage.get('lmetorrentSelect').toUpperCase() + " Manager",
            action: 'panel',
            onSelect: function onSelect() {
              createPanelNavigationItem()();
            }
          }].concat(_toConsumableArray(sortedTorrents.map(function (torrent) {
            return {
              title: "".concat(torrent.name, " (").concat(Math.round((torrent.completed || 0) * 100), "%)"),
              action: 'torrent',
              torrent: torrent
            };
          })));
          Lampa.Select.show({
            title: "Torrents (".concat(activeDownloads, "/").concat(TorrentStateManager$1.torrents.length, ")"),
            items: items,
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            },
            onSelect: function onSelect(item) {
              if (item.action === 'torrent') {
                showTorrentMenu(item.torrent);
              } else if (item.action === 'panel') {
                item.onSelect();
              }
              // For summary item, we could show a general menu or just do nothing
            }
          });
        }
      }, {
        key: "sortTorrents",
        value: function sortTorrents(torrents) {
          return torrents.sort(function (a, b) {
            if (a.state === 'downloading' && b.state !== 'downloading') return -1;
            if (a.state !== 'downloading' && b.state === 'downloading') return 1;
            return b.id - a.id;
          });
        }
      }, {
        key: "updateColor",
        value: function updateColor(event) {
          if (event.active) {
            this.element.style.color = 'yellow';
          } else {
            this.element.style.color = 'limegreen';
          }
        }
      }]);
    }();

    function headerIcon() {
      var icon_html = "\n        <div class=\"head__action selector torrent-manager-icon\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M12 4L12 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n                <path d=\"M16 10L12 14L8 10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n                <path d=\"M4 18H20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            </svg>\n        </div>";
      var element = document.createElement('div');
      element.innerHTML = icon_html;
      return element.firstElementChild;
    }
    var DomInjector = /*#__PURE__*/function () {
      function DomInjector() {
        _classCallCheck(this, DomInjector);
      }
      return _createClass(DomInjector, [{
        key: "inject",
        value: function inject() {
          var iconElement = headerIcon();
          Lampa.Head.render().find('.open--search').after(iconElement);
          return new HeaderIconController(iconElement);
        }
      }]);
    }();
    var DomInjector$1 = new DomInjector();

    /**
     * Torrent Manager Plugin for Lampa
     * 
     * This plugin provides integration with various torrent clients
     * to manage torrents directly from the Lampa interface.
     * 
     * @version 2.3
     * @author @lme_chat
     */

    /** 
     * Plugin manifest information
     */
    var MANIFEST = {
      type: 'other',
      version: '2.6',
      author: '@lme_chat',
      name: 'Torrent Manager',
      description: 'Manager and Runner query',
      component: 'lmetorrent',
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M13.684 23.94a12.013 12.013 0 0 0 9.599-7.79c-.118.044-.26.096-.432.147c-2 .59-3.404-.466-3.687-.649c-.283-.18-.587-.48-.643-.464c-.183 1.132-1.218 2.706-3.58 3.42c-1.295.391-2.687.4-3.681-.157l.328.822c.13.328.351.866.488 1.192c0 0 .858 2.044 1.608 3.48M2.723 7.153l3.54-.66c.323-.059.68.124.794.407l2.432 6.07c.332.633.399.773.615 1.043c0 0 1.68 2.398 4.24 1.812c1.726-.394 2.532-1.69 2.587-2.612c.057-.296-.032-.669-.185-1.016L13.832 5.61c-.117-.266.022-.527.306-.581l2.953-.55a.69.69 0 0 1 .706.376l3.227 6.91c.13.276.394.712.588.966c0 0 .671.964 1.747.78c.266 0 .569-.143.569-.143c.047-.43.072-.866.072-1.31c0-6.627-5.373-12-12.002-12C5.372.06 0 5.433 0 12.06c0 5.319 3.46 9.827 8.252 11.402a24.768 24.768 0 0 1-.919-2.121L2.298 7.808c-.111-.297.083-.59.425-.654\"/></svg>"
    };

    /**
     * Register all UI templates with Lampa
     */
    function registerTemplates() {
      // CSS styles
      Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed[data-completed]:nth-child(n):nth-last-child(n+51){--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed[data-completed]:nth-child(n+51):nth-last-child(n+2){--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed[data-completed='100']{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.lmetorrent-item{margin-right:.5em;margin-bottom:1em;width:13%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}.torrent-manager-icon{--icon-status-color:limegreen;color:var(--icon-status-color)}.torrent-manager-sidebar{position:fixed;top:0;right:-350px;width:350px;height:100%;background-color:rgba(0,0,0,0.85);z-index:1000;-webkit-transition:right .3s;-o-transition:right .3s;transition:right .3s;color:white;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.torrent-manager-sidebar.visible{right:0}.torrent-manager-sidebar__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;font-weight:bold;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.torrent-manager-sidebar__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;background-color:rgba(255,255,255,0.1);-webkit-border-radius:5px;border-radius:5px;cursor:pointer;gap:10px}.torrent-manager-sidebar__item:hover{background-color:rgba(255,255,255,0.2)}.torrent-manager-sidebar__item-name{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item-percent{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}\n        </style>\n    ");

      // Header template
      Lampa.Template.add('lmetorrent_header', "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n          <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n        ");

      // List item template
      Lampa.Template.add('lmetorrent_item', "<div class=\"card selector lmetorrent-item\">\n            <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n        </div>");

      // Card item template
      Lampa.Template.add('lmetorrent_item__card', "<div class=\"card card--category selector layer--visible layer--render\">\n            <div class=\"card__view\">\n                <img src=\"{image}\" alt=\"{title}\" class=\"card__img\">\n                <div class=\"card__icons\">\n                    <div class=\"card__icons-inner\">\n                    </div>\n                </div>\n                <div class=\"lmetorrent_card__state\">{state}</div>\n                <div class=\"lmetorrent_card__size\">{size}</div>\n                <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n            </div>\n        </div>");
    }

    /**
     * Check if a session key date is older than 5 days
     * 
     * @param {number} keyDate - Timestamp of the key creation date
     * @returns {boolean} - True if the key is old or doesn't exist
     */
    function isKeyDateOld(keyDate) {
      if (!keyDate) {
        return true;
      }
      var currentTimestamp = Math.floor(Date.now() / 1000);
      var fiveDaysInSeconds = 5 * 24 * 60 * 60;
      var timestampFiveDaysAgo = currentTimestamp - fiveDaysInSeconds;
      return keyDate < timestampFiveDaysAgo;
    }

    /**
     * Create and add menu button for the plugin
     * 
     * @returns {JQuery} - The created button element
     */
    function createMenuButton() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">".concat(MANIFEST.icon, "</div>\n            <div class=\"menu__text\">").concat(MANIFEST.name, "</div>\n        </li>"));
      button.on('hover:enter', function () {
        createPanelNavigationItem()();
      });
      return button;
    }

    /**
     * Initialize client authentication based on selected client
     */
    function initializeClientAuth() {
      var selectedClient = Lampa.Storage.get(MANIFEST.component + 'Select');
      if (selectedClient === 'transmission') {
        Transmission.auth();
      } else if (selectedClient === 'synology') {
        var synologyKey = Lampa.Storage.field('lmetorrentsynologyKey');
        if (isKeyDateOld(synologyKey.createDate)) {
          Synology.auth();
        }
      } else if (selectedClient === 'keenetic') {
        Keenetic.auth();
      }
    }

    /**
     * Main plugin initialization function
     */
    function initializePlugin() {
      try {
        // Initialize language support
        Component$1();

        // Register UI templates
        registerTemplates();

        // Register panel component
        Lampa.Component.add('lmetorrentPanel', Component);

        // Register plugin in manifest
        Lampa.Manifest.plugins = MANIFEST;

        // Add menu button if not using universal client
        var selectedClient = Lampa.Storage.get(MANIFEST.component + 'Select');
        if (selectedClient !== 'universalClient') {
          torrentInfo();
          $('.menu .menu__list').eq(0).append(createMenuButton());
        }

        // Add CSS styles
        $('body').append(Lampa.Template.get('lmemStyle', {}, true));

        // Initialize configuration
        Main$1(MANIFEST);

        // Initialize downloader
        Send();

        // Initialize client authentication
        initializeClientAuth();

        // Initialize new header feature
        var iconController = DomInjector$1.inject();
        TorrentStateManager$1.start();
      } catch (error) {
        console.error('TDM', 'Error initializing Torrent Manager plugin:', error);
      }
    }

    /**
     * Start the plugin when Lampa is ready
     */
    function startPlugin() {
      window.plugin_lmetorrent_ready = true;
      if (window.appready) {
        initializePlugin();
      } else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') {
            initializePlugin();
          }
        });
      }
    }

    // Initialize the plugin if not already initialized
    if (!window.plugin_lmetorrent_ready) {
      startPlugin();
    }

})();
