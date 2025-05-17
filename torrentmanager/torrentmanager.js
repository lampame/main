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
          ru: "Изменение пути API. Не трогать без необходимости",
          en: "Change api route. Do not change without need",
          uk: "Змінити маршрут API. Не чіпати без нагальної потреби",
          zh: "更改API路径。如无必要，请勿更改"
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
    function _regeneratorRuntime() {
      _regeneratorRuntime = function () {
        return r;
      };
      var t,
        r = {},
        e = Object.prototype,
        n = e.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag";
      function c(t, r, e, n) {
        return Object.defineProperty(t, r, {
          value: e,
          enumerable: !n,
          configurable: !n,
          writable: !n
        });
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, r, e) {
          return t[r] = e;
        };
      }
      function h(r, e, n, o) {
        var i = e && e.prototype instanceof Generator ? e : Generator,
          a = Object.create(i.prototype);
        return c(a, "_invoke", function (r, e, n) {
          var o = 1;
          return function (i, a) {
            if (3 === o) throw Error("Generator is already running");
            if (4 === o) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var u = n.delegate;
              if (u) {
                var c = d(u, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (1 === o) throw o = 4, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = 3;
              var h = s(r, e, n);
              if ("normal" === h.type) {
                if (o = n.done ? 4 : 2, h.arg === f) continue;
                return {
                  value: h.arg,
                  done: n.done
                };
              }
              "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg);
            }
          };
        }(r, n, new Context(o || [])), !0), a;
      }
      function s(t, r, e) {
        try {
          return {
            type: "normal",
            arg: t.call(r, e)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      r.wrap = h;
      var f = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var l = {};
      c(l, i, function () {
        return this;
      });
      var p = Object.getPrototypeOf,
        y = p && p(p(x([])));
      y && y !== e && n.call(y, i) && (l = y);
      var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l);
      function g(t) {
        ["next", "throw", "return"].forEach(function (r) {
          c(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function AsyncIterator(t, r) {
        function e(o, i, a, u) {
          var c = s(t[o], t, i);
          if ("throw" !== c.type) {
            var h = c.arg,
              f = h.value;
            return f && "object" == typeof f && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) {
              e("next", t, a, u);
            }, function (t) {
              e("throw", t, a, u);
            }) : r.resolve(f).then(function (t) {
              h.value = t, a(h);
            }, function (t) {
              return e("throw", t, a, u);
            });
          }
          u(c.arg);
        }
        var o;
        c(this, "_invoke", function (t, n) {
          function i() {
            return new r(function (r, o) {
              e(t, n, r, o);
            });
          }
          return o = o ? o.then(i, i) : i();
        }, !0);
      }
      function d(r, e) {
        var n = e.method,
          o = r.i[n];
        if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
        var i = s(o, r.i, e.arg);
        if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;
        var a = i.arg;
        return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);
      }
      function w(t) {
        this.tryEntries.push(t);
      }
      function m(r) {
        var e = r[4] || {};
        e.type = "normal", e.arg = t, r[4] = e;
      }
      function Context(t) {
        this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0);
      }
      function x(r) {
        if (null != r) {
          var e = r[i];
          if (e) return e.call(r);
          if ("function" == typeof r.next) return r;
          if (!isNaN(r.length)) {
            var o = -1,
              a = function e() {
                for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;
                return e.value = t, e.done = !0, e;
              };
            return a.next = a;
          }
        }
        throw new TypeError(typeof r + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));
      }, r.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;
      }, r.awrap = function (t) {
        return {
          __await: t
        };
      }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () {
        return this;
      }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(h(t, e, n, o), i);
        return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, g(v), c(v, u, "Generator"), c(v, i, function () {
        return this;
      }), c(v, "toString", function () {
        return "[object Generator]";
      }), r.keys = function (t) {
        var r = Object(t),
          e = [];
        for (var n in r) e.unshift(n);
        return function t() {
          for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t;
          return t.done = !0, t;
        };
      }, r.values = x, Context.prototype = {
        constructor: Context,
        reset: function (r) {
          if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0][4];
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (r) {
          if (this.done) throw r;
          var e = this;
          function n(t) {
            a.type = "throw", a.arg = r, e.next = t;
          }
          for (var o = e.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              a = i[4],
              u = this.prev,
              c = i[1],
              h = i[2];
            if (-1 === i[0]) return n("end"), !1;
            if (!c && !h) throw Error("try statement without catch or finally");
            if (null != i[0] && i[0] <= u) {
              if (u < c) return this.method = "next", this.arg = t, n(c), !0;
              if (u < h) return n(h), !1;
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
              var o = n;
              break;
            }
          }
          o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null);
          var i = o ? o[4] : {};
          return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i);
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f;
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e[0] === t) {
              var n = e[4];
              if ("throw" === n.type) {
                var o = n.arg;
                m(e);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (r, e, n) {
          return this.delegate = {
            i: x(r),
            r: e,
            n: n
          }, "next" === this.method && (this.arg = t), f;
        }
      }, r;
    }
    function _setPrototypeOf(t, e) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
        return t.__proto__ = e, t;
      }, _setPrototypeOf(t, e);
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
          proxyTMDBApi = "https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://tmdb.melonhu.cn/get/".concat(label, "/images?api_key=").concat(Lampa.TMDB.key());
          proxyTMDBImage = 'https://tmdb.melonhu.cn/img/t/p/';
        }

        // Делаем GET-запрос к API TMDB
        $.ajax({
          url: Lampa.Storage.field('lmetorrentproxyTMDB') == true ? proxyTMDBApi : directTMDBApi,
          method: 'GET',
          headers: {
            "x-requested-with": "lampame"
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

    var url$2 = Lampa.Storage.field("lmetorrentqBittorentUrl");
    var proxy$2 = "";
    if (Lampa.Storage.field("lmetorrentqBittorentProxy") === true) {
      proxy$2 = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/';
    }
    function getHeaders$2(type) {
      var headers = {};
      if (type) headers["Content-Type"] = type;
      if (Lampa.Storage.get("lmetorrentqBittorentKey")) headers["set-cookie"] = Lampa.Storage.get("lmetorrenttransmissionKey");
      if (Lampa.Storage.field('lmetorrentqBittorentProxy') === true) headers["x-requested-with"] = "lampame";
      return headers;
    }
    function auth$2() {}
    function GetData$2() {
      var settings = {
        url: "".concat(proxy$2).concat(url$2, "/api/v2/sync/maindata"),
        method: "GET",
        timeout: 0,
        headers: getHeaders$2()
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
            var torrents, standardizedResponse;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  if (response.torrents) {
                    _context2.next = 4;
                    break;
                  }
                  resolve([]);
                  return _context2.abrupt("return");
                case 4:
                  torrents = Object.values(response.torrents);
                  _context2.next = 7;
                  return Promise.all(torrents.map( /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(torrent) {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.t0 = torrent.name;
                            _context.t1 = torrent.infohash_v1;
                            _context.t2 = torrent.size;
                            _context.t3 = torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1);
                            _context.t4 = torrent.tags;
                            _context.next = 7;
                            return getPosterFromLabels(torrent.tags);
                          case 7:
                            _context.t5 = _context.sent;
                            _context.t6 = torrent.progress;
                            return _context.abrupt("return", {
                              name: _context.t0,
                              id: _context.t1,
                              size: _context.t2,
                              state: _context.t3,
                              labels: _context.t4,
                              image: _context.t5,
                              completed: _context.t6
                            });
                          case 10:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));
                case 7:
                  standardizedResponse = _context2.sent;
                  resolve(standardizedResponse);
                  _context2.next = 15;
                  break;
                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](0);
                  console.log('TDM', 'GetData:', _context2.t0, response);
                  reject(new Error('Ошибка при обработке данных'));
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 11]]);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).fail(function (jqXHR, textStatus, errorThrown) {
          reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(textStatus, " - ").concat(errorThrown)));
        });
      });
    }
    function GetInfo$1() {
      var settings = {
        url: "".concat(proxy$2).concat(url$2, "/api/v2/sync/maindata"),
        method: "GET",
        timeout: 0,
        headers: getHeaders$2()
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
    function SendCommand$2(btn, torrent_data) {
      return new Promise(function (resolve, reject) {
        // First check qBittorrent version
        $.ajax({
          url: "".concat(proxy$2).concat(url$2, "/api/v2/app/version"),
          method: "GET",
          headers: getHeaders$2()
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
            url: "".concat(proxy$2).concat(url$2, "/api/v2/torrents/").concat(btn.action),
            method: "POST",
            timeout: 0,
            headers: getHeaders$2("application/x-www-form-urlencoded"),
            data: {
              "hashes": torrent_data.id,
              deleteFiles: deleteFiles
            }
          });
        }).then(function () {
          resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
        })["catch"](function (error) {
          console.log('TDM', 'Send command:', error);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    function SendTask$2(selectedTorrent, labels, dtype) {
      if (!selectedTorrent) {
        return;
      }
      var settings = {
        url: "".concat(proxy$2).concat(url$2, "/api/v2/torrents/add"),
        method: "POST",
        timeout: 0,
        headers: getHeaders$2("application/x-www-form-urlencoded"),
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
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('TDM', 'Send file:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    var Qbittorent = {
      auth: auth$2,
      GetData: GetData$2,
      GetInfo: GetInfo$1,
      SendCommand: SendCommand$2,
      SendTask: SendTask$2
    };

    function cleanName(name) {
      // Оновлений регулярний вираз для видалення інформації про сезон, рік, якість та інші зайві частини
      var regex = /*#__PURE__*/_wrapRegExp(/(.*?)(?:[.\s]S\d{1,2}(?:E\d{1,2})?|[.\s]\d{4}|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB\x2DRip|WEB\x2DDL|WEB|TS|(?:PPV )?WEB\x2D?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv).*$/i, {
        title: 1
      });
      var match = name.match(regex);
      if (match && match.groups && match.groups.title) {
        // Замінюємо крапки між словами на пробіли
        return match.groups.title.replace(/\./g, ' ').trim();
      }
      return name.replace(/\./g, ' ').trim();
    }
    function processTorrents(torrentData) {
      console.log("TDM:", _typeof(torrentData), torrentData);
      var torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
      return Promise.all(torrents.map(function (torrent) {
        var clearName = cleanName(torrent.name || torrent);
        var settings = {
          url: "https://api.themoviedb.org/3/search/multi?include_adult=true&query=".concat(encodeURIComponent(clearName), "&api_key=4ef0d7355d9ffb5151e987764708ce96"),
          method: "GET",
          timeout: 0
        };
        return new Promise(function (resolve, reject) {
          $.ajax(settings).done(function (response) {
            if (response.results && response.results.length === 1) {
              var result = response.results[0];
              resolve({
                media_type: result.media_type,
                id: result.id
              });
            } else if (response.results && response.results.length > 1) {
              var enabled = Lampa.Controller.enabled().name;
              var menu = response.results.map(function (result) {
                return {
                  title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === "tv" && result.first_air_date ? " - ".concat(result.first_air_date) : "") + (result.media_type === "movie" && result.release_date ? " - ".concat(result.release_date) : ""),
                  media_type: result.media_type,
                  id: result.id
                };
              });
              Lampa.Select.show({
                title: Lampa.Lang.translate("selectResult"),
                items: menu,
                onBack: function onBack() {
                  Lampa.Controller.toggle(enabled);
                  reject(new Error("Selection canceled by user"));
                },
                onSelect: function onSelect(selected) {
                  resolve({
                    media_type: selected.media_type,
                    id: selected.id
                  });
                }
              });
            } else {
              resolve(null); // No valid result
            }
          }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data from TMDB:", textStatus, errorThrown);
            reject(new Error("Failed to fetch data from TMDB"));
          });
        });
      })).then(function (results) {
        return results.filter(function (result) {
          return result !== null;
        });
      }); // Filter out null results
    }

    var url$1 = Lampa.Storage.field("lmetorrenttransmissionUrl");
    var user$1 = Lampa.Storage.field("lmetorrenttransmissionUser");
    var pass$1 = Lampa.Storage.field("lmetorrenttransmissionPass");
    var path = "".concat(Lampa.Storage.get("lmetorrenttransmissionPath") || "/transmission/rpc");
    var proxy$1 = "";
    var transmissionStatus = {
      0: "Stopped",
      1: "Queued to verify local data",
      2: "Verifying local data",
      3: "Queued to download",
      4: "Downloading",
      5: "Queued to seed",
      6: "Seeding"
    };
    if (Lampa.Storage.field("lmetorrenttransmissionProxy") === true) {
      proxy$1 = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/';
    }
    // Tweaks
    function getHeaders$1() {
      var headers = {
        Authorization: "Basic ".concat(btoa(user$1 + ":" + pass$1)),
        "Content-Type": "application/json"
      };
      if (Lampa.Storage.get("lmetorrenttransmissionKey")) {
        headers["X-Transmission-Session-Id"] = Lampa.Storage.get("lmetorrenttransmissionKey");
      }
      if (Lampa.Storage.field('lmetorrenttransmissionProxy') === true) {
        headers["x-requested-with"] = "lampame";
      }
      return headers;
    }
    function auth$1() {
      $.ajax({
        url: "".concat(proxy$1).concat(url$1).concat(path),
        method: "POST",
        headers: getHeaders$1(),
        // Если getHeaders возвращает объект с ключом headers
        contentType: "application/json",
        success: function success(response, textStatus, jqXHR) {
          //resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
        },
        error: function error(jqXHR) {
          if (jqXHR.status === 409) {
            Lampa.Storage.set("lmetorrenttransmissionKey", jqXHR.getResponseHeader("X-Transmission-Session-Id"));
            Lampa.Noty.show(Lampa.Lang.translate('AuthSuccess'));
          }
          if (jqXHR.status !== 200 && jqXHR.status !== 409) {
            console.log('TDM', 'Transmission auth', jqXHR.status, jqXHR);
            Lampa.Noty.show(Lampa.Lang.translate('AuthDenied'));
          }
        }
      });
    }
    function GetData$1() {
      var settings = {
        url: "".concat(proxy$1).concat(url$1).concat(path),
        method: "POST",
        timeout: 0,
        headers: getHeaders$1(),
        data: JSON.stringify({
          "method": "torrent-get",
          "arguments": {
            "fields": ["labels", "status", "totalSize", "percentComplete", "percentDone", "name", "labels", "id"]
          }
        })
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
            var standardizedResponse;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Promise.all(response.arguments.torrents.map( /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(torrent) {
                      var imageUrl;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return getPosterFromLabels(torrent.labels);
                          case 2:
                            imageUrl = _context.sent;
                            return _context.abrupt("return", {
                              name: torrent.name,
                              id: torrent.id,
                              size: torrent.totalSize,
                              state: transmissionStatus[torrent.status],
                              labels: torrent.labels,
                              image: imageUrl,
                              // Используем результат
                              completed: torrent.percentDone
                            });
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));
                case 3:
                  standardizedResponse = _context2.sent;
                  resolve(standardizedResponse);
                  _context2.next = 10;
                  break;
                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                  reject(new Error('Ошибка при обработке данных'));
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 7]]);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).fail(function (jqXHR, textStatus, errorThrown) {
          reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(textStatus, " - ").concat(errorThrown)));
        });
      });
    }
    function GetInfo() {
      var settings = {
        url: "".concat(proxy$1).concat(url$1).concat(path),
        method: "POST",
        timeout: 0,
        headers: getHeaders$1(),
        data: JSON.stringify({
          "method": "session-get"
        })
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            var standardizedResponse = {
              "space": response.arguments['download-dir-free-space']
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
    function SendCommand$1(btn, torrent_data) {
      var method;
      if (btn.action === 'resume') method = "torrent-start";
      if (btn.action === 'pause') method = "torrent-stop";
      if (btn.action === 'delete') method = "torrent-remove";
      if (btn.action === 'parse' || btn.action === 'parse-all') {
        return processTorrents(torrent_data).then(function (response) {
          if (response && response.length > 0) {
            console.log('TDM:', torrent_data, response);
            var mediaTypeId = "".concat(response[0].media_type, "/").concat(response[0].id); // Assuming processTorrents returns an array of media_type/id
            var _settings = {
              url: "".concat(proxy$1).concat(url$1).concat(path),
              method: "POST",
              timeout: 0,
              headers: getHeaders$1(),
              data: JSON.stringify({
                method: "torrent-set",
                arguments: {
                  ids: torrent_data.id,
                  labels: [mediaTypeId]
                }
              })
            };
            return new Promise(function (resolve, reject) {
              $.ajax(_settings).done(function () {
                resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
              }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
                reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
              });
            });
          } else {
            return Promise.reject(new Error('No valid response from processTorrents'));
          }
        })["catch"](function (error) {
          console.error('Error in parse action:', error);
          return Promise.reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      }
      var settings = {
        url: "".concat(proxy$1).concat(url$1).concat(path),
        method: "POST",
        timeout: 0,
        headers: getHeaders$1(),
        data: JSON.stringify({
          "method": method,
          "arguments": {
            "ids": torrent_data.id,
            "delete-local-data": btn.deleteFiles ? "true" : ""
          }
        })
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('TDM', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    function SendTask$1(selectedTorrent, labels, dtype) {
      if (!selectedTorrent) {
        return;
      }
      var initialSettings = {
        url: "".concat(proxy$1).concat(url$1).concat(path),
        method: "POST",
        timeout: 0,
        headers: getHeaders$1(),
        data: JSON.stringify({
          method: "torrent-add",
          arguments: _objectSpread2({
            paused: Lampa.Storage.field("lmetorrenttransmissionAutostart") ? "true" : "false",
            sequentialDownload: Lampa.Storage.field("lmetorrenttransmissionSequentialDownload") ? "true" : "false",
            filename: selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link,
            labels: [labels]
          }, Lampa.Storage.get("lmetorrenttransmission".concat(dtype)) ? {
            "download-dir": Lampa.Storage.get("lmetorrenttransmission".concat(dtype))
          } : {})
        })
      };
      return new Promise(function (resolve, reject) {
        // Крок 1: Виконуємо перший запит до initialSettings
        $.ajax(initialSettings).then(function (response) {
          var _response$arguments$t;
          // Перевірка першого відповіді
          if (response.result !== "success" || Object.keys(response.arguments).length === 0) {
            // Якщо помилка — викидаємо помилку, щоб зупинити цілісно
            throw new Error("".concat(Lampa.Lang.translate('actionReturnedError'), ": ").concat(response.result));
          }

          // Отримуємо torrentId або null, якщо його немає
          var torrentId = ((_response$arguments$t = response.arguments['torrent-added']) === null || _response$arguments$t === void 0 ? void 0 : _response$arguments$t.id) || null;

          // Створюємо налаштування для другого запиту
          var labelSettings = {
            url: "".concat(proxy$1).concat(url$1).concat(path),
            method: "POST",
            timeout: 0,
            headers: getHeaders$1(),
            data: JSON.stringify({
              method: "torrent-set",
              arguments: {
                ids: torrentId,
                labels: [labels]
              }
            })
          };

          // Виконуємо другий запит
          return $.ajax(labelSettings);
        }).then(function (response) {
          // Перевірка другого відповіді
          if (response.result === "success") {
            // Успішна відповідь — показуємо повідомлення
            Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully'));
            resolve();
          } else {
            // Якщо помилка — викидаємо помилку
            throw new Error("".concat(Lampa.Lang.translate('actionReturnedError'), ": ").concat(response.result));
          }
        })["catch"](function (error) {
          // Ловимо будь-яку помилку з двох запитів
          console.log('TDM', 'Error:', error);
          Lampa.Noty.show(error.message || error);
          reject(error); // Відхиляємо Promise
        })["finally"](function () {
          // Виконується завжди, незалежно від результату
          console.log('Promise execution completed');
        });
      });
    }
    var Transmission = {
      auth: auth$1,
      GetData: GetData$1,
      GetInfo: GetInfo,
      SendCommand: SendCommand$1,
      transmissionStatus: transmissionStatus,
      SendTask: SendTask$1
    };

    // Constant
    var url = Lampa.Storage.field("lmetorrentsynologyUrl");
    var user = Lampa.Storage.field("lmetorrentsynologyUser");
    var pass = Lampa.Storage.field("lmetorrentsynologyPass");
    var proxy = "";
    if (Lampa.Storage.field("lmetorrentsynologyProxy") === true) {
      proxy = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/';
    }
    function getHeaders() {
      var headers = {
        Authorization: "Basic ".concat(btoa(user + ":" + pass)),
        "Content-Type": "application/json"
      };
      if (Lampa.Storage.get("lmetorrenttransmissionKey")) {
        headers["X-Transmission-Session-Id"] = Lampa.Storage.get("lmetorrenttransmissionKey");
      }
      if (Lampa.Storage.field('lmetorrenttransmissionProxy') === true) {
        headers["x-requested-with"] = "lampame";
      }
      return headers;
    }
    function auth() {
      $.ajax({
        url: "".concat(proxy).concat(url, "/webapi/auth.cgi?api=SYNO.API.Auth&method=login&account=").concat(user, "&passwd=").concat(pass, "&format=sid&version=7&session=LMETorrentManager"),
        method: "GET",
        headers: getHeaders(),
        // Если getHeaders возвращает объект с ключом headers
        contentType: "application/json",
        success: function success(response, textStatus, jqXHR) {
          var data = {
            sID: response.data.sid,
            createDate: Math.floor(Date.now() / 1000)
          };
          Lampa.Storage.set("lmetorrentsynologyKey", JSON.stringify(data));
          Lampa.Noty.show(Lampa.Lang.translate('AuthSuccess'));
        },
        error: function error(jqXHR) {
          if (jqXHR.status !== 200) {
            console.log('TDM', 'Synology auth', jqXHR.status, jqXHR);
            Lampa.Noty.show(Lampa.Lang.translate('AuthDenied'));
          }
        }
      });
    }
    function GetData() {
      var settings = {
        url: "".concat(proxy).concat(url, "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=3&method=list&additional=file,transfer&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID, "&limit=-1"),
        method: "GET",
        timeout: 0,
        headers: getHeaders() // Если getHeaders возвращает объект с ключом headers
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          response = JSON.parse(response);
          try {
            var standardizedResponse = response.data.tasks.map(function (torrent) {
              return {
                name: torrent.title,
                id: torrent.id,
                size: torrent.size,
                state: torrent.status.charAt(0).toUpperCase() + torrent.status.slice(1),
                completed: torrent.additional.transfer.size_downloaded / torrent.size // или другой соответствующий атрибут
              };
            });
            resolve(standardizedResponse);
          } catch (error) {
            reject(new Error('Ошибка при обработке данных'));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(textStatus, " - ").concat(errorThrown)));
        });
      });
    }
    function SendCommand(a, torrent_data) {
      var settings = {
        url: "".concat(proxy).concat(url, "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=").concat(a.action, "&id=").concat(torrent_data.id, "&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID),
        method: "GET",
        timeout: 0,
        headers: getHeaders() // Если getHeaders возвращает объект с ключом headers
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          response = JSON.parse(response);
          try {
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('TDM', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    function SendTask(selectedTorrent, labels, dtype) {
      var path = Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) ? "&destination=".concat(Lampa.Storage.get("lmetorrentqBittorent".concat(dtype))) : '';
      var settings = {
        url: "".concat(proxy).concat(url, "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=create&uri=").concat(encodeURIComponent(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link)).concat(path, "&_sid=").concat(Lampa.Storage.field('lmetorrentsynologyKey').sID),
        method: "GET",
        timeout: 0,
        headers: getHeaders() // Если getHeaders возвращает объект с ключом headers
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          response = JSON.parse(response);
          try {
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('TDM', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    var Synology = {
      auth: auth,
      GetData: GetData,
      SendCommand: SendCommand,
      SendTask: SendTask
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
    function Component() {
      var network = new Lampa.Reguest();
      var client = Lampa.Storage.field('lmetorrentSelect');
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250
      });
      var updateInterval; // Змінна для setInterval
      var items = [];
      var html = $("<div class='lmetorrent-module'></div>");
      var head = $("<div class='lmetorrent-head'></div>");
      var body = $('<div class="lmetorrent-catalog--list category-full"></div>');
      var active, last;
      this.create = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var startClient, _startClient, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _startClient = function _startClient3() {
                _startClient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(client) {
                  var _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _yield$Promise$all3, _yield$Promise$all4, trData, trInfo;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = client;
                        _context.next = _context.t0 === 'qBittorent' ? 3 : _context.t0 === 'transmission' ? 10 : _context.t0 === 'synology' ? 17 : 18;
                        break;
                      case 3:
                        _context.next = 5;
                        return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
                      case 5:
                        _yield$Promise$all = _context.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        qbData = _yield$Promise$all2[0];
                        qbInfo = _yield$Promise$all2[1];
                        return _context.abrupt("return", {
                          data: qbData,
                          info: qbInfo
                        });
                      case 10:
                        _context.next = 12;
                        return Promise.all([Transmission.GetData(), Transmission.GetInfo()]);
                      case 12:
                        _yield$Promise$all3 = _context.sent;
                        _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
                        trData = _yield$Promise$all4[0];
                        trInfo = _yield$Promise$all4[1];
                        return _context.abrupt("return", {
                          data: trData,
                          info: trInfo
                        });
                      case 17:
                        return _context.abrupt("return", Synology.GetData());
                      case 18:
                        throw new Error('Кто ты воин?');
                      case 19:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return _startClient.apply(this, arguments);
              };
              startClient = function _startClient2(_x) {
                return _startClient.apply(this, arguments);
              };
              this.activity.loader(true);
              _context2.prev = 3;
              _context2.next = 6;
              return startClient(client);
            case 6:
              result = _context2.sent;
              if (result) {
                this.build(result);
              } else {
                this.errorClient(result);
              }
              _context2.next = 13;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](3);
              this.errorClient(_context2.t0);
            case 13:
              return _context2.abrupt("return", this.render());
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 10]]);
      }));
      this.errorClient = function (data) {
        console.log('TDM', 'Try get data:', data);
        scroll.append(body);
        //Put all in page
        html.append(scroll.render());
        var error_body = "<div class=\"lmetorrent-error_body\">\n            <div>".concat(Lampa.Lang.translate('somethingWentWrong'), "</div>\n            <div class=\"lmetorrent-error_result\">").concat(Lampa.Lang.translate('clientNotClient'), "</div>");
        body.append(error_body);
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.build = function (result) {
        scroll.minus();
        //Put header
        if (result.info) this.header(result.info);
        if (client === 'synology') this.header("{'space':0}");
        //Put Data
        if (result.data) {
          this.body(result.data);
        } else {
          this.body(result);
        }
        //Put blank
        scroll.append(head);
        scroll.append(body);
        //Put all in page
        html.append(scroll.render());
        this.activity.loader(false);
        this.activity.toggle();
        // Запуск автооновлення після первинного завантаження
        startAutoUpdate();
      };
      this.header = function (data) {
        var item = new Header(data);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        });
        // Добавляем обработчик события только для элемента с классом 'lmetorrent-header__update'
        item.render()[0].on("hover:enter", function () {
          Lampa.Activity.replace({
            url: "",
            title: "LME Torrent Manager",
            component: "lmetorrentPanel",
            page: 1
          });
          Lampa.Noty.show("Reloaded");
        });
        head.append(item.render());
        items.push(item);
      };
      this.body = function (data) {
        data.forEach(function (torrent_data) {
          var item = new Item(torrent_data);
          item.render().on("hover:focus", function () {
            last = item.render()[0];
            active = items.indexOf(item);
            scroll.update(items[active].render(), true);
          }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var enabled, menu;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  enabled = Lampa.Controller.enabled().name;
                  menu = [];
                  menu.push({
                    title: 'Open card',
                    action: 'card'
                  }, {
                    title: 'Add metadata',
                    action: 'parse'
                  }, {
                    title: 'Add metadata all',
                    action: 'parse-all'
                  }, {
                    title: Lampa.Lang.translate('resume'),
                    action: 'resume'
                  }, {
                    title: Lampa.Lang.translate('pause'),
                    action: 'pause'
                  }, {
                    title: Lampa.Lang.translate('delete'),
                    action: 'delete'
                  });
                  if (client !== 'synology') menu.push({
                    title: Lampa.Lang.translate('fullDelete'),
                    action: 'delete',
                    deleteFiles: true
                  });

                  // Set menu
                  Lampa.Select.show({
                    title: torrent_data.name,
                    //Lampa.Lang.translate('actionWithTorrent'),
                    items: menu,
                    onBack: function onBack() {
                      Lampa.Controller.toggle(enabled);
                    },
                    onSelect: function onSelect(a) {
                      if (a.action === 'card') {
                        var cardOpen = parseLabels(torrent_data.labels);
                        Lampa.Activity.push({
                          url: '',
                          component: 'full',
                          id: cardOpen.tID,
                          method: cardOpen.method,
                          //card: element.data,
                          source: Lampa.Storage.field('source') || 'tmdb'
                        });
                      } else {
                        switch (client) {
                          case 'qBittorent':
                            return Qbittorent.SendCommand(a, torrent_data);
                          case 'transmission':
                            return Transmission.SendCommand(a, a.action === 'parse-all' ? data : torrent_data);
                          case 'synology':
                            return Synology.SendCommand(a, torrent_data);
                          default:
                            return 'Неизвестный клиент';
                        }
                      }
                    }
                  });
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
          body.append(item.render());
          items.push(item);
        });
      };
      this.append = function (element) {};
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.background = function () {
        Lampa.Background.immediately("");
      };
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
      this.pause = function () {};
      this.stop = function () {};
      this.render = function () {
        return html;
      };

      // Функція автооновлення
      function startAutoUpdate() {
        var getDataFunc;
        switch (client) {
          case 'qBittorent':
            getDataFunc = Qbittorent.GetData;
            break;
          case 'transmission':
            getDataFunc = Transmission.GetData;
            break;
          case 'synology':
            getDataFunc = Synology.GetData;
            break;
          default:
            console.error('Неизвестный клиент');
            return;
        }
        updateInterval = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var result;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return getDataFunc();
              case 3:
                result = _context4.sent;
                // Якщо для transmission/qBittorent отримуємо масив даних
                // Проходимо по новому набору даних і оновлюємо існуючі елементи за id
                result.forEach(function (newTorrent) {
                  items.forEach(function (item) {
                    if (item.id === newTorrent.id) {
                      item.update(newTorrent);
                    }
                  });
                });
                _context4.next = 10;
                break;
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.error('Auto update error:', _context4.t0);
              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[0, 7]]);
        })), 5000);
      }
      this.destroy = function () {
        network.clear();
        Lampa.Arrays.destroy(items);
        scroll.destroy();
        html.remove();
        if (updateInterval) clearInterval(updateInterval);
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
    }

    function Main(selectedTorrent) {
      if (Lampa.Storage.field("lmetorrentUniversalAction") === "open") {
        //if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click()
        //else
        window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
      } else {
        Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
          Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
        }, function () {
          Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
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
      _startClient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client) {
        var result, _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _yield$Promise$all3, _yield$Promise$all4, trData, trInfo;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.t0 = client;
              _context2.next = _context2.t0 === 'qBittorent' ? 4 : _context2.t0 === 'transmission' ? 12 : _context2.t0 === 'synology' ? 20 : 24;
              break;
            case 4:
              _context2.next = 6;
              return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
            case 6:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              qbData = _yield$Promise$all2[0];
              qbInfo = _yield$Promise$all2[1];
              result = {
                data: qbData,
                info: qbInfo
              };
              return _context2.abrupt("break", 25);
            case 12:
              _context2.next = 14;
              return Promise.all([Transmission.GetData(), Transmission.GetInfo()]);
            case 14:
              _yield$Promise$all3 = _context2.sent;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              trData = _yield$Promise$all4[0];
              trInfo = _yield$Promise$all4[1];
              result = {
                data: trData,
                info: trInfo
              };
              return _context2.abrupt("break", 25);
            case 20:
              _context2.next = 22;
              return Synology.GetData();
            case 22:
              result = _context2.sent;
              return _context2.abrupt("break", 25);
            case 24:
              throw new Error('Unknown client type');
            case 25:
              console.log('TDM:', result);
              return _context2.abrupt("return", result);
            case 29:
              _context2.prev = 29;
              _context2.t1 = _context2["catch"](0);
              console.error('Error fetching client data:', _context2.t1);
              throw _context2.t1;
            case 33:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 29]]);
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
                  $button.on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var enabled, menu;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
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
                              Lampa.Controller.toggle(enabled);
                            },
                            onSelect: function onSelect(a) {
                              switch (client) {
                                case 'qBittorent':
                                  return Qbittorent.SendCommand(a, torrent);
                                case 'transmission':
                                  return Transmission.SendCommand(a, torrent);
                                case 'synology':
                                  return Synology.SendCommand(a, torrent);
                                default:
                                  return 'Неизвестный клиент';
                              }
                            }
                          });
                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));

                  // Append button to container
                  e.object.activity.render().find('.full-start-new__buttons').append($button);
                }
              } else {
                console.error('Failed to get torrent client data');
              }
            });
          }, 100);
        }
      });
    }

    function add() {
      // Lang
      Component$1();
      //live.torrentList();
      // Style
      Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed[data-completed]:nth-child(n):nth-last-child(n+51){--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed[data-completed]:nth-child(n+51):nth-last-child(n+2){--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed[data-completed='100']{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.lmetorrent-item{margin-right:.5em;margin-bottom:1em;width:13%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}\n        </style>\n    ");
      Lampa.Template.add("lmetorrent_header", "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n              <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n            ");
      Lampa.Template.add("lmetorrent_item", "<div class=\"card selector lmetorrent-item\">\n                <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n                <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n                <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n            </div>");
      //<img src="./img/img_load.svg" class="card__img" />
      Lampa.Template.add("lmetorrent_item__card", "<div class=\"card card--category selector layer--visible layer--render\">\n                <div class=\"card__view\">\n                    <img src=\"{image}\" alt=\"{title}\" class=\"card__img\">\n                    <div class=\"card__icons\">\n                        <div class=\"card__icons-inner\">\n                        </div>\n                    </div>\n                   <div class=\"lmetorrent_card__state\">{state}</div>\n                    <div class=\"lmetorrent_card__size\">{size}</div>\n                    <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n                </div>\n                <!-- <div class=\"card__title\">{title}</div> -->\n            </div>");
      // Components
      Lampa.Component.add('lmetorrentPanel', Component);
      // Manifest
      var manifest = {
        type: "other",
        version: "2.3",
        author: '@lme_chat',
        name: "LME Torrent Manager",
        description: "Manager and Runner query",
        component: "lmetorrent",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 48 48\" width=\"48px\" height=\"48px\">\n                        <path fill=\"currentColor\" d=\"M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M34 .90429729 .314453 C34 .25029734 .64845328 .81135921 .06957826 .94335935 .51757826 .31640643 .76367226 .39257843 .91406233 .17699342 .92392538 .87264541 .50576441 .66015632 .48437541 .60366532 .48546541 .54628432 .48641841 .52929732 .48632838 .92840532 .47256736 .60755231 .57296734 .90429729 .314453 z\"></path>\n                    </svg>"
      };
      Lampa.Manifest.plugins = manifest;
      // Insert
      var button = $("<li class=\"menu__item selector\">\n                <div class=\"menu__ico\">\n                    ".concat(manifest.icon, "\n                </div>\n                <div class=\"menu__text\">").concat(manifest.name, "</div>\n            </li>"));
      button.on("hover:enter", function () {
        Lampa.Activity.push({
          url: "",
          title: manifest.name,
          component: 'lmetorrentPanel',
          page: 1
        });
      });
      if (Lampa.Storage.get(manifest.component + 'Select') !== 'universalClient') {
        torrentInfo();
        $(".menu .menu__list").eq(0).append(button);
      }
      $('body').append(Lampa.Template.get('lmemStyle', {}, true));
      Main$1(manifest);
      Send();
      // Start Transmission Auth */
      if (Lampa.Storage.get(manifest.component + 'Select') === 'transmission') Transmission.auth();
      // Start Synology Auth */
      if (Lampa.Storage.get(manifest.component + 'Select') === 'synology') {
        // Synology.auth()
        var isKeyDateOld = function isKeyDateOld(keyDate) {
          if (!keyDate) {
            return true;
          }
          var currentTimestamp = Math.floor(Date.now() / 1000);
          var fiveDaysInSeconds = 5 * 24 * 60 * 60;
          var timestampFiveDaysAgo = currentTimestamp - fiveDaysInSeconds;
          // Проверяем, старше ли keyDate на 5 дней
          return keyDate < timestampFiveDaysAgo;
        }; // Используем функцию для проверки
        if (isKeyDateOld(Lampa.Storage.field('lmetorrentsynologyKey').createDate)) {
          Synology.auth();
        }
      }
    }
    function startPlugin() {
      window.plugin_lmetorrent_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_lmetorrent_ready) startPlugin();

})();
