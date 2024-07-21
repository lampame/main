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
    function _regeneratorRuntime() {
      _regeneratorRuntime = function () {
        return e;
      };
      var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        c = i.asyncIterator || "@@asyncIterator",
        u = i.toStringTag || "@@toStringTag";
      function define(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[e];
      }
      try {
        define({}, "");
      } catch (t) {
        define = function (t, e, r) {
          return t[e] = r;
        };
      }
      function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator,
          a = Object.create(i.prototype),
          c = new Context(n || []);
        return o(a, "_invoke", {
          value: makeInvokeMethod(t, r, c)
        }), a;
      }
      function tryCatch(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart",
        l = "suspendedYield",
        f = "executing",
        s = "completed",
        y = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var p = {};
      define(p, a, function () {
        return this;
      });
      var d = Object.getPrototypeOf,
        v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t) {
        ["next", "throw", "return"].forEach(function (e) {
          define(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
          var c = tryCatch(t[r], t, o);
          if ("throw" !== c.type) {
            var u = c.arg,
              h = u.value;
            return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
              invoke("next", t, i, a);
            }, function (t) {
              invoke("throw", t, i, a);
            }) : e.resolve(h).then(function (t) {
              u.value = t, i(u);
            }, function (t) {
              return invoke("throw", t, i, a);
            });
          }
          a(c.arg);
        }
        var r;
        o(this, "_invoke", {
          value: function (t, n) {
            function callInvokeWithMethodAndArg() {
              return new e(function (e, r) {
                invoke(t, n, e, r);
              });
            }
            return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e, r, n) {
        var o = h;
        return function (i, a) {
          if (o === f) throw Error("Generator is already running");
          if (o === s) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: !0
            };
          }
          for (n.method = i, n.arg = a;;) {
            var c = n.delegate;
            if (c) {
              var u = maybeInvokeDelegate(c, n);
              if (u) {
                if (u === y) continue;
                return u;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (o === h) throw o = s, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = f;
            var p = tryCatch(e, r, n);
            if ("normal" === p.type) {
              if (o = n.done ? s : l, p.arg === y) continue;
              return {
                value: p.arg,
                done: n.done
              };
            }
            "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
          }
        };
      }
      function maybeInvokeDelegate(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
      }
      function pushTryEntry(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function Context(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values(e) {
        if (e || "" === e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function next() {
                for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                return next.value = t, next.done = !0, next;
              };
            return i.next = i;
          }
        }
        throw new TypeError(typeof e + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
      }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
      }, e.awrap = function (t) {
        return {
          __await: t
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
        return this;
      }), define(g, "toString", function () {
        return "[object Generator]";
      }), e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function next() {
          for (; r.length;) {
            var t = r.pop();
            if (t in e) return next.value = t, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function handle(n, o) {
            return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              a = i.completion;
            if ("root" === i.tryLoc) return handle("end");
            if (i.tryLoc <= this.prev) {
              var c = n.call(i, "catchLoc"),
                u = n.call(i, "finallyLoc");
              if (c && u) {
                if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
              } else if (c) {
                if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              } else {
                if (!u) throw Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                resetTryEntry(r);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: values(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
          args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(undefined);
        });
      };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    /* Constant */
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
        url: "".concat(proxy$2).concat(url$2, "/api/v2/torrents/info"),
        method: "GET",
        timeout: 0,
        headers: getHeaders$2()
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            var standardizedResponse = response.map(function (torrent) {
              return {
                name: torrent.name,
                id: torrent.hash,
                size: torrent.size,
                state: torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1),
                completed: torrent.progress // или другой соответствующий атрибут
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
      var deleteFiles = btn.deleteFiles ? "true" : "";
      var settings = {
        url: "".concat(proxy$2).concat(url$2, "/api/v2/torrents/").concat(btn.action),
        method: "POST",
        timeout: 0,
        headers: getHeaders$2("application/x-www-form-urlencoded"),
        "data": {
          "hashes": torrent_data.id,
          deleteFiles: deleteFiles
        }
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('LME Torrent manager', 'Send command:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('LME Torrent manager', 'Send command: Fail', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    function SendTask$2(selectedTorrent) {
      if (!selectedTorrent) {
        return;
      }
      var settings = {
        url: "".concat(proxy$2).concat(url$2, "/api/v2/torrents/add"),
        method: "POST",
        timeout: 0,
        headers: getHeaders$2("application/x-www-form-urlencoded"),
        "data": {
          "urls": selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link,
          "category": selectedTorrent.CategoryDesc ? Lampa.Storage.get("lmetorrentqBittorent".concat(selectedTorrent.CategoryDesc)) : '',
          "firstLastPiecePrio": Lampa.Storage.field("lmetorrentqBittorentfirstLastPiecePrio") ? "true" : "false",
          "sequentialDownload": Lampa.Storage.field("lmetorrentqBittorentSequentialDownload") ? "true" : "false"
        }
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('LME Torrent manager', 'Send file:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('LME Torrent manager', 'Send file:', textStatus, errorThrown, jqXHR);
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

    /* Constant */
    var url$1 = Lampa.Storage.field("lmetorrenttransmissionUrl");
    var user$1 = Lampa.Storage.field("lmetorrenttransmissionUser");
    var pass$1 = Lampa.Storage.field("lmetorrenttransmissionPass");
    var path = "".concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc");
    var proxy$1 = "";
    var transmissionStatus = {
      0: "Torrent is stopped",
      1: "Torrent is queued to verify local data",
      2: "Torrent is verifying local data",
      3: "Torrent is queued to download",
      4: "Torrent is downloading",
      5: "Torrent is queued to seed",
      6: "Torrent is seeding"
    };
    if (Lampa.Storage.field("lmetorrenttransmissionProxy") === true) {
      proxy$1 = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/';
    }
    /* Tweaks */
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
            console.log('LME Torrent manager', 'Synology auth', jqXHR.status, jqXHR);
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
            "fields": ["status", "totalSize", "percentComplete", "percentDone", "name", "id"]
          }
        })
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            var standardizedResponse = response.arguments.torrents.map(function (torrent) {
              return {
                name: torrent.name,
                id: torrent.id,
                size: torrent.totalSize,
                //state: torrent.status,
                state: transmissionStatus[torrent.status],
                completed: torrent.percentComplete // или другой соответствующий атрибут
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
            console.log('LME Torrent manager', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('LME Torrent manager', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    function SendTask$1(selectedTorrent) {
      if (!selectedTorrent) {
        return;
      }
      var settings = {
        url: "".concat(proxy$1).concat(url$1).concat(path),
        method: "POST",
        timeout: 0,
        headers: getHeaders$1(),
        "data": JSON.stringify({
          "method": "torrent-add",
          "arguments": {
            "paused": Lampa.Storage.field("lmetorrenttransmissionAutostart") ? "true" : "false",
            "download-dir": selectedTorrent.CategoryDesc ? Lampa.Storage.get("lmetorrenttransmission".concat(selectedTorrent.CategoryDesc)) : '',
            "filename": selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link
          }
        })
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            resolve(Lampa.Noty.show(Lampa.Lang.translate('actionSentSuccessfully')));
          } catch (error) {
            console.log('LME Torrent manager', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('LME Torrent manager', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    var Transmission = {
      auth: auth$1,
      GetData: GetData$1,
      GetInfo: GetInfo,
      SendCommand: SendCommand$1,
      SendTask: SendTask$1
    };

    /* Constant */
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
            console.log('LME Torrent manager', 'Synology auth', jqXHR.status, jqXHR);
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
            console.log('LME Torrent manager', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('LME Torrent manager', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
        });
      });
    }
    function SendTask(selectedTorrent) {
      var path = selectedTorrent.CategoryDesc ? "&destination=".concat(Lampa.Storage.get("lmetorrenttransmission".concat(selectedTorrent.CategoryDesc))) : '';
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
            console.log('LME Torrent manager', 'Send action:', error);
            reject(Lampa.Noty.show(Lampa.Lang.translate('actionReturnedError')));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('LME Torrent manager', 'Send file:', textStatus, errorThrown, jqXHR);
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
      Lampa.Template.get("lmetorrent_item", {
        name: data.name,
        size: Lampa.Utils.bytesToSize(data.size, 0),
        state: data.state,
        completed: Number((data.completed * 100).toFixed(2)) + "%"
      });
      var itemN = Lampa.Template.get('lmetorrent_item__card', {
        title: data.name,
        size: Lampa.Utils.bytesToSize(data.size, 0),
        state: data.state,
        "data-completed": Number((data.completed * 100).toFixed(2)),
        completed: Number((data.completed * 100).toFixed(2)) + "%",
        quality: data.name.match(regexp2) ? data.name.match(regexp2).toString().replace(/[ .()]/g, '') : ''
      });
      this.render = function () {
        return itemN;
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

    function Component() {
      var network = new Lampa.Reguest();
      var client = Lampa.Storage.field('lmetorrentSelect');
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250
      });
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
        console.log('LME Torrent manager', 'Try get data:', data);
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
                    title: "Resume",
                    action: 'resume'
                  }, {
                    title: "Pause",
                    action: 'pause'
                  }, {
                    title: 'Delete',
                    action: 'delete'
                  });
                  if (client !== 'synology') menu.push({
                    title: 'Full delete',
                    action: 'delete',
                    deleteFiles: true
                  });

                  /* Set menu */
                  Lampa.Select.show({
                    title: "Action with torrent",
                    items: menu,
                    onBack: function onBack() {
                      Lampa.Controller.toggle(enabled);
                    },
                    onSelect: function onSelect(a) {
                      switch (client) {
                        case 'qBittorent':
                          return Qbittorent.SendCommand(a, torrent_data);
                        case 'transmission':
                          return Transmission.SendCommand(a, torrent_data);
                        case 'synology':
                          return Synology.SendCommand(a, torrent_data);
                        default:
                          return 'Неизвестный клиент';
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
      this.destroy = function () {
        network.clear();
        Lampa.Arrays.destroy(items);
        scroll.destroy();
        html.remove();
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
      /**
      Lampa.SettingsApi.addParam({
          component: manifest.component,
          param: {
              name: manifest.component+"qBittorentUser",
              type: "input", //доступно select,input,trigger,title,static
              placeholder: '',
              values: '',
              default: ''
          },
          field: {
              name: "Login",
          },  onRender: function (item) {
              if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
                  item.show();
              } else item.hide();
          }, onChange: function (item) {
              Lampa.Settings.update();
          },
      });
      Lampa.SettingsApi.addParam({
          component: manifest.component,
          param: {
              name: manifest.component+"qBittorentPass",
              type: "input", //доступно select,input,trigger,title,static
              placeholder: '',
              values: '',
              default: ''
          },
          field: {
              name: "Password",
          },  onRender: function (item) {
              if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
                  item.show();
              } else item.hide();
          }, onChange: function (item) {
              Lampa.Settings.update();
          },
      });
       **/
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
        if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click();else window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
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
      function send2qBittorrent(selectedTorrent) {
        Qbittorent.SendTask(selectedTorrent);
      }
      function send2synology(selectedTorrent) {
        Synology.SendTask(selectedTorrent);
      }
      function send2transmission(selectedTorrent) {
        Transmission.SendTask(selectedTorrent);
      }
      function send2universal(selectedTorrent) {
        Main(selectedTorrent);
      }
      Lampa.Listener.follow('torrent', function (e) {
        if (e.type === 'onlong') {
          var selectedTorrent = e.element;
          var onSelectApp = function onSelectApp(a) {
            a.send2app(selectedTorrent);
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

    /* Backlog */
    // TODO: Clear all Log and add normal logs
    // TODO: Add translate(?) for status

    function add() {
      /* Lang */
      Component$1();
      /* Style */
      Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed[data-completed]:nth-child(n):nth-last-child(n+51){--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed[data-completed]:nth-child(n+51):nth-last-child(n+2){--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed[data-completed='100']{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.lmetorrent-item{margin-right:.5em;margin-bottom:1em;width:13%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}\n        </style>\n    ");
      Lampa.Template.add("lmetorrent_header", "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n              <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n            ");
      Lampa.Template.add("lmetorrent_item", "<div class=\"card selector lmetorrent-item\">\n                <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n                <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n                <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n            </div>");
      Lampa.Template.add("lmetorrent_item__card", "<div class=\"card card--collection selector layer--visible layer--render\">\n                <div class=\"card__view\">\n                    <img src=\"./img/img_load.svg\" class=\"card__img\" />\n                    <div class=\"card__icons\">\n                        <div class=\"card__icons-inner\">\n                        </div>\n                    </div>\n                   <div class=\"lmetorrent_card__state\">{state}</div>\n                    <div class=\"lmetorrent_card__size\">{size}</div>\n                    <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n                </div>\n                <div class=\"card__title\">{title}</div>\n            </div>");
      /* Components */
      Lampa.Component.add('lmetorrentPanel', Component);
      /* Manifest */
      var manifest = {
        type: "other",
        version: "0.0.1",
        author: '@lme_chat',
        name: "LME Torrent Manager",
        description: "Torrent manager and Runner",
        component: "lmetorrent",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 48 48\" width=\"48px\" height=\"48px\">\n                        <path fill=\"white\" d=\"M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M34 .90429729 .314453 C34 .25029734 .64845328 .81135921 .06957826 .94335935 .51757826 .31640643 .76367226 .39257843 .91406233 .17699342 .92392538 .87264541 .50576441 .66015632 .48437541 .60366532 .48546541 .54628432 .48641841 .52929732 .48632838 .92840532 .47256736 .60755231 .57296734 .90429729 .314453 z\"></path>\n                    </svg>"
      };
      Lampa.Manifest.plugins = manifest;
      /* Insert */
      var button = $("<li class=\"menu__item selector\">\n                <div class=\"menu__ico\">\n                    ".concat(manifest.icon, "\n                </div>\n                <div class=\"menu__text\">").concat(manifest.name, "</div>\n            </li>"));
      button.on("hover:enter", function () {
        Lampa.Activity.push({
          url: "",
          title: manifest.name,
          component: 'lmetorrentPanel',
          page: 1
        });
      });
      if (Lampa.Storage.get(manifest.component + 'Select') !== 'universalClient') $(".menu .menu__list").eq(0).append(button);
      $('body').append(Lampa.Template.get('lmemStyle', {}, true));
      Main$1(manifest);
      Send();
      /**/
      //if (Lampa.Storage.get(manifest.component + 'Select') === 'qBittorent') qBittorent.auth()
      /* Start Transmission Auth */
      if (Lampa.Storage.get(manifest.component + 'Select') === 'transmission') Transmission.auth();
      /* Start Synology Auth */
      if (Lampa.Storage.get(manifest.component + 'Select') === 'synology') {
        // Synology.auth()
        var isKeyDateOld = function isKeyDateOld(keyDate) {
          if (!keyDate) {
            return true; // Если keyDate не существует, считаем его "старым"
          }

          // Получаем текущий таймштамп в секундах
          var currentTimestamp = Math.floor(Date.now() / 1000);

          // Вычисляем таймштамп 5 дней назад (5 дней * 24 часа * 60 минут * 60 секунд)
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
