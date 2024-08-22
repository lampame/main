(function () {
  'use strict';

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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function main() {
    //Get Account or Guest
    var account = Lampa.Storage.get('account');
    var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
    //const deviceCode = Lampa.Storage.get('lmeTraktDeviceCode')[profileId];

    Lampa.SettingsApi.addComponent({
      component: "lmeTrakt",
      name: 'Trakt.TV',
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" id=\"Trakt\"><path d=\"M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M4.383,14.003c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l10.36-10.36c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-10.36,10.36C4.767,13.93,4.575,14.003,4.383,14.003z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M19.95 20.7c-.192 0-.384-.073-.53-.22L8.64 9.7c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l10.78 10.78c.293.293.293.768 0 1.061C20.334 20.627 20.143 20.7 19.95 20.7zM11.793 9.672c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.229-4.229c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4.229 4.229C12.177 9.599 11.985 9.672 11.793 9.672zM13.207 11.086c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.828-2.828c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.828 2.828C13.591 11.013 13.399 11.086 13.207 11.086zM18.39 22.01c-.192 0-.384-.073-.53-.22l-8.938-8.938-3.71 3.718c-.292.295-.769.293-1.061.002-.294-.293-.294-.768-.002-1.061l4.24-4.25c.141-.142.332-.221.531-.221l0 0c.199 0 .39.079.53.22l9.47 9.47c.293.293.293.768 0 1.061C18.773 21.937 18.582 22.01 18.39 22.01z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M16.55,23.04c-0.192,0-0.384-0.073-0.53-0.22l-7.099-7.099l-4.54,4.549c-0.292,0.292-0.768,0.293-1.062,0.001c-0.293-0.293-0.293-0.768-0.001-1.062l5.07-5.08c0.141-0.141,0.332-0.22,0.531-0.22l0,0c0.199,0,0.39,0.079,0.53,0.22l7.63,7.63c0.293,0.293,0.293,0.768,0,1.061C16.934,22.967,16.742,23.04,16.55,23.04z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path></svg>"
    });
    //Get Code
    var lmeTraktDevices = Lampa.Storage.field('lmeTraktDevice');
    if (!Array.isArray(lmeTraktDevices)) {
      // Если lmeTraktDevices не массив, создаем пустой массив
      lmeTraktDevices = [];
    }
    function fetchAndSetDevice(isFirstTime) {
      $.get('https://lme-trakt.deno.dev/auth/codes', function (response) {
        // Устанавливаем значение в Lampa.Storage
        if (isFirstTime) {
          Lampa.Storage.set('lmeTraktDevice', [_defineProperty({}, profileId, response)]);
        } else {
          Lampa.Storage.add('lmeTraktDevice', _defineProperty({}, profileId, response));
        }
        var device = Lampa.Storage.get('lmeTraktDevice').find(function (obj) {
          return obj.hasOwnProperty(profileId);
        })[profileId];
        console.log('Get device', device.user_code, device);

        // Добавляем параметр в SettingsApi с полученным user_code
        Lampa.SettingsApi.addParam({
          component: "lmeTrakt",
          param: {
            name: "lmeTraktCode",
            type: "title"
          },
          field: {
            name: 'https://trakt.tv/activate',
            description: device.user_code
          },
          onRender: function onRender() {
            if (!device) {
              Lampa.Noty.show('Error: Device not found');
              return;
            }
            var settings = {
              url: "https://lme-trakt.deno.dev/auth/token",
              method: "POST",
              timeout: 0,
              headers: {
                "Content-Type": "application/json"
              },
              data: JSON.stringify({
                device_code: device.device_code
              })
            };
            $.ajax(settings).done(function (response) {
              if (response.error) {
                if (response.error === "Response code 409 (Conflict)") {
                  console.log('TraktTV', 'Conflict Error:', response.error);
                } else {
                  Lampa.Noty.show('Error');
                  console.log('TraktTV', response.error);
                }
              } else {
                Lampa.Storage.add('lmeTraktToken', _defineProperty({}, profileId, response));
                Lampa.Noty.show('Success');
                console.log('Success:', Lampa.Storage.get('lmeTraktToken'));
              }
            }).fail(function (jqXHR, textStatus, errorThrown) {
              Lampa.Noty.show('Error');
              console.log('TraktTV', textStatus, errorThrown);
            });
          }
        });
      });
    }
    if (lmeTraktDevices.length === 0) {
      fetchAndSetDevice(true); // Первый раз, используем set
    } else if (!lmeTraktDevices.find(function (obj) {
      return obj.hasOwnProperty(profileId);
    })) {
      fetchAndSetDevice(false); // Не первый раз, используем add
    }
    //Reset auth
    Lampa.SettingsApi.addParam({
      component: "lmeTrakt",
      param: {
        name: "lmeTraktReset",
        type: "button"
      },
      field: {
        name: 'Reset auth'
      },
      onChange: function onChange(val) {
        // Получаем массив объектов
        var devices = Lampa.Storage.get('lmeTraktDevice');
        // Фильтруем массив, исключая объект с нужным profileId
        var updatedDevices = devices.filter(function (obj) {
          return !obj.hasOwnProperty(profileId);
        });
        // Сохраняем обновленный массив обратно в хранилище
        Lampa.Storage.set('lmeTraktDevice', updatedDevices);
        Lampa.Noty.show(Lampa.Lang.translate('traktLampaRestart'));
      }
    });
  }
  var config = {
    main: main
  };

  var account$1 = Lampa.Storage.get('account');
  var profileId$1 = account$1 && Object.keys(account$1).length > 0 ? account$1.profile.id : null;
  var traktTokens = Lampa.Storage.get('lmeTraktToken');
  var token = null;
  if (traktTokens && profileId$1) {
    var tokenObj = traktTokens.find(function (obj) {
      return obj.hasOwnProperty(profileId$1);
    });
    if (tokenObj) {
      token = tokenObj[profileId$1];
    }
  }
  var tmdbLang = Lampa.Storage.field('tmdb_lang');
  function upnext$1(params, oncomplite, onerror) {
    sendRequest("https://lme-trakt.deno.dev/my/upnext", {
      lang: tmdbLang,
      tokenData: token
    }, oncomplite, onerror);
  }
  function watchlist$1(params, oncomplite, onerror) {
    sendRequest("https://lme-trakt.deno.dev/my/watchlist", {
      lang: tmdbLang,
      tokenData: token
    }, oncomplite, onerror);
  }
  function sendRequest(url, data, oncomplite, onerror) {
    Lampa.Noty.show(Lampa.Lang.translate('trakttvLoading'));
    var settings = {
      url: url,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data)
    };
    $.ajax(settings).done(function (response) {
      response.collection = false;
      oncomplite(response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      onerror(errorThrown);
    });
  }
  function updateTokenIfNeeded() {
    if (!profileId$1 || !traktTokens) {
      console.error('TraktTV', 'Profile ID or tokens not available.');
      return;
    }
    var tokenObj = traktTokens.find(function (obj) {
      return obj.hasOwnProperty(profileId$1);
    });
    if (tokenObj) {
      token = tokenObj[profileId$1];
    }
    if (!token) {
      console.error('TraktTV', 'Token not found for profile ID:', profileId$1);
      return;
    }
    var currentTime = Date.now();
    var expiresIn = token.expires - currentTime;

    // Если токен истекает в течение недели (7 дней * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд)
    var oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
    if (expiresIn < oneWeekInMillis) {
      // Токен скоро истечет, нужно обновить
      var settings = {
        url: "https://lme-trakt.deno.dev/auth/refresh",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(token)
      };
      $.ajax(settings).done(function (response) {
        // Обновляем токен в хранилище
        tokenObj[profileId$1] = response;
        Lampa.Storage.set('lmeTraktToken', traktTokens);
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthUpdated'));
      }).fail(function (jqXHR, textStatus, errorThrown) {
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
        console.log('TraktTV', 'TraktTV', textStatus, errorThrown);
      });
    } else {
      console.log('TraktTV', 'Token is still valid.');
    }
  }
  function clear() {
    network.clear();
  }
  var api = {
    upnext: upnext$1,
    watchlist: watchlist$1,
    clear: clear,
    updateTokenIfNeeded: updateTokenIfNeeded
  };

  function upnext(object) {
    var comp = new Lampa.InteractionCategory(object);
    comp.create = function () {
      api.upnext(object, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push({
          url: '',
          component: 'full',
          id: element.id,
          method: element.method,
          card: {
            id: element.id
          },
          source: element.source || 'tmdb'
        });
      };
    };
    return comp;
  }
  function watchlist(object) {
    var comp = new Lampa.InteractionCategory(object);
    comp.create = function () {
      api.watchlist(object, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push({
          url: '',
          component: 'full',
          id: element.id,
          method: element.method,
          card: {
            id: element.id
          },
          source: element.source || 'tmdb'
        });
      };
    };
    return comp;
  }
  var Catalog = {
    upnext: upnext,
    watchlist: watchlist
  };

  function Main$1() {
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
      }
    });
  }

  function Main() {
    Lampa.Listener.follow('full', function (e) {
      var account = Lampa.Storage.get('account');
      var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
      var traktTokens = Lampa.Storage.get('lmeTraktToken');
      var tokenData = null;
      if (traktTokens && profileId) {
        var tokenObj = traktTokens.find(function (obj) {
          return obj.hasOwnProperty(profileId);
        });
        if (tokenObj) {
          tokenData = tokenObj[profileId];
        }
      }
      if (e.type === "complite") {
        var lookupWatchlistItem = function lookupWatchlistItem() {
          var settings = {
            "url": "https://gwb-trakt.deno.dev/watchlistItem",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "action": "lookup",
              "tmdb": {
                "id": e.object.id,
                "type": e.object.method
              },
              "tokenData": tokenData
            })
          };
          $.ajax(settings).done(function (response) {
            console.log(response);
            updateButtonState(response.added);
          }).fail(function () {
            Lampa.Noty.show('Error');
          });
        };
        var updateButtonState = function updateButtonState(added) {
          var button = $('.button--lmeTraktWatchlist span');
          if (added) {
            button.text(Lampa.Lang.translate('trakttv_remove_from_collection'));
            button.closest('.button--lmeTraktWatchlist').attr('data-action', 'delete');
          } else {
            button.text(Lampa.Lang.translate('trakttv_add_to_collection'));
            button.closest('.button--lmeTraktWatchlist').attr('data-action', 'add');
          }
        };
        var handleButtonClick = function handleButtonClick() {
          var action = $(this).attr('data-action');
          var settings = {
            "url": "https://gwb-trakt.deno.dev/watchlistItem",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "action": action,
              "tmdb": {
                "id": e.object.id,
                "type": e.object.method
              },
              "tokenData": tokenData
            })
          };
          $.ajax(settings).done(function (response) {
            console.log(response);
            if (response.success) {
              Lampa.Noty.show(action === 'add' ? 'Added' : 'Deleted');
              updateButtonState(action === 'add' ? true : false);
            } else {
              Lampa.Noty.show('Error');
            }
          }).fail(function () {
            Lampa.Noty.show('Error');
          });
        };
        lookupWatchlistItem();
        var lmeTraktWatchlist = "<div class=\"full-start__button selector button--lmeTraktWatchlist\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>\n                <span>Watchlist</span>\n            </div>";
        e.object.activity.render().find('.full-start-new__buttons').append(lmeTraktWatchlist);
        $(document).on('click', '.button--lmeTraktWatchlist', handleButtonClick);
      }
    });
  }

  function handleWatchlistAction(_x) {
    return _handleWatchlistAction.apply(this, arguments);
  }
  function _handleWatchlistAction() {
    _handleWatchlistAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var account, profileId, traktTokens, tokenData, tokenObj, lookupSettings, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            account = Lampa.Storage.get('account');
            profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
            traktTokens = Lampa.Storage.get('lmeTraktToken');
            tokenData = null;
            if (traktTokens && profileId) {
              tokenObj = traktTokens.find(function (obj) {
                return obj.hasOwnProperty(profileId);
              });
              if (tokenObj) {
                tokenData = tokenObj[profileId];
              }
            }

            // Уведомление о начале поиска в ватчлисте
            Lampa.Noty.show('Ищем в ватчлисте...');
            lookupSettings = {
              url: "https://gwb-trakt.deno.dev/watchlistItem",
              method: "POST",
              timeout: 0,
              headers: {
                "Content-Type": "application/json"
              },
              data: JSON.stringify({
                action: "lookup",
                tmdb: {
                  id: e.id,
                  type: e.method
                },
                tokenData: tokenData
              })
            };
            _context.prev = 7;
            _context.next = 10;
            return $.ajax(lookupSettings);
          case 10:
            response = _context.sent;
            console.log(response);

            // Если элемент найден, выполняем действие
            if (!response.added) {
              _context.next = 17;
              break;
            }
            _context.next = 15;
            return updateWatchlist("delete", e, tokenData);
          case 15:
            _context.next = 19;
            break;
          case 17:
            _context.next = 19;
            return updateWatchlist("add", e, tokenData);
          case 19:
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](7);
            Lampa.Noty.show('Ошибка при поиске в ватчлисте');
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 21]]);
    }));
    return _handleWatchlistAction.apply(this, arguments);
  }
  function updateWatchlist(_x2, _x3, _x4) {
    return _updateWatchlist.apply(this, arguments);
  }
  function _updateWatchlist() {
    _updateWatchlist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(action, e, tokenData) {
      var updateSettings, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            Lampa.Noty.show(action === 'add' ? 'Добавляем...' : 'Удаляем...');
            updateSettings = {
              url: "https://gwb-trakt.deno.dev/watchlistItem",
              method: "POST",
              timeout: 0,
              headers: {
                "Content-Type": "application/json"
              },
              data: JSON.stringify({
                action: action,
                tmdb: {
                  id: e.id,
                  type: e.method
                },
                tokenData: tokenData
              })
            };
            _context2.prev = 2;
            _context2.next = 5;
            return $.ajax(updateSettings);
          case 5:
            response = _context2.sent;
            console.log('TraktTV', response);
            if (response.success) {
              Lampa.Noty.show(action === 'add' ? 'Добавлено' : 'Удалено');
            } else {
              Lampa.Noty.show('Ошибка при обновлении ватчлиста');
            }
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            Lampa.Noty.show('Ошибка при обновлении ватчлиста');
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 10]]);
    }));
    return _updateWatchlist.apply(this, arguments);
  }

  var account = Lampa.Storage.get('account');
  var profileId = account && Object.keys(account).length > 0 ? account.profile.id : null;
  function resetTemplates() {
    Lampa.Template.add("online", "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"64\" cy=\"64\" r=\"56\" stroke=\"white\" stroke-width=\"16\"/>\n                    <path d=\"M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
    Lampa.Template.add("online_folder", "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"/>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"/>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
  }
  var manifest = {
    type: "video",
    version: "0.2",
    author: '@lme_chat',
    name: "Trakt.TV",
    description: "Watchlist and UpNext",
    component: "lmeTrakt",
    onContextMenu: function onContextMenu(object) {
      return {
        name: "Watchlist",
        description: ""
      };
    },
    onContextLauch: function onContextLauch(object) {
      resetTemplates();
      if (object.number_of_seasons) {
        object.method = 'tv';
      } else {
        object.method = 'movie';
      }
      console.log('enter', object);
      handleWatchlistAction(object);
    }
  };
  function add() {
    //Lang.main()
    Lampa.Manifest.plugins = manifest;
    config.main();
    Main$1();
    //Button Watchlist
    Main();
    //Refresh Auth
    api.updateTokenIfNeeded();
    //Add menu item
    var lmeTrakt_upnext = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\"><svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" id=\"Trakt\"><path d=\"M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M4.383,14.003c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l10.36-10.36c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-10.36,10.36C4.767,13.93,4.575,14.003,4.383,14.003z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M19.95 20.7c-.192 0-.384-.073-.53-.22L8.64 9.7c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l10.78 10.78c.293.293.293.768 0 1.061C20.334 20.627 20.143 20.7 19.95 20.7zM11.793 9.672c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.229-4.229c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4.229 4.229C12.177 9.599 11.985 9.672 11.793 9.672zM13.207 11.086c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.828-2.828c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.828 2.828C13.591 11.013 13.399 11.086 13.207 11.086zM18.39 22.01c-.192 0-.384-.073-.53-.22l-8.938-8.938-3.71 3.718c-.292.295-.769.293-1.061.002-.294-.293-.294-.768-.002-1.061l4.24-4.25c.141-.142.332-.221.531-.221l0 0c.199 0 .39.079.53.22l9.47 9.47c.293.293.293.768 0 1.061C18.773 21.937 18.582 22.01 18.39 22.01z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M16.55,23.04c-0.192,0-0.384-0.073-0.53-0.22l-7.099-7.099l-4.54,4.549c-0.292,0.292-0.768,0.293-1.062,0.001c-0.293-0.293-0.293-0.768-0.001-1.062l5.07-5.08c0.141-0.141,0.332-0.22,0.531-0.22l0,0c0.199,0,0.39,0.079,0.53,0.22l7.63,7.63c0.293,0.293,0.293,0.768,0,1.061C16.934,22.967,16.742,23.04,16.55,23.04z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path></svg></div>\n            <div class=\"menu__text\">UpNext</div>\n        </li>");
    lmeTrakt_upnext.on('hover:enter', function () {
      if (!Array.isArray(Lampa.Storage.get('lmeTraktToken')) || !Lampa.Storage.get('lmeTraktToken').find(function (obj) {
        return Object.keys(obj)[0] === profileId.toString();
      })) {
        Lampa.Noty.show(Lampa.Lang.translate('authMissed'));
        return; // Останавливаем выполнение функции
      }
      Lampa.Activity.push({
        url: '',
        title: 'UpNext',
        component: 'lmeTrakt_upnext',
        page: 1
      });
    });
    var lmeTrakt_watchlist = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\"><svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" id=\"Trakt\"><path d=\"M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M4.383,14.003c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l10.36-10.36c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-10.36,10.36C4.767,13.93,4.575,14.003,4.383,14.003z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M19.95 20.7c-.192 0-.384-.073-.53-.22L8.64 9.7c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l10.78 10.78c.293.293.293.768 0 1.061C20.334 20.627 20.143 20.7 19.95 20.7zM11.793 9.672c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.229-4.229c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4.229 4.229C12.177 9.599 11.985 9.672 11.793 9.672zM13.207 11.086c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.828-2.828c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.828 2.828C13.591 11.013 13.399 11.086 13.207 11.086zM18.39 22.01c-.192 0-.384-.073-.53-.22l-8.938-8.938-3.71 3.718c-.292.295-.769.293-1.061.002-.294-.293-.294-.768-.002-1.061l4.24-4.25c.141-.142.332-.221.531-.221l0 0c.199 0 .39.079.53.22l9.47 9.47c.293.293.293.768 0 1.061C18.773 21.937 18.582 22.01 18.39 22.01z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path><path d=\"M16.55,23.04c-0.192,0-0.384-0.073-0.53-0.22l-7.099-7.099l-4.54,4.549c-0.292,0.292-0.768,0.293-1.062,0.001c-0.293-0.293-0.293-0.768-0.001-1.062l5.07-5.08c0.141-0.141,0.332-0.22,0.531-0.22l0,0c0.199,0,0.39,0.079,0.53,0.22l7.63,7.63c0.293,0.293,0.293,0.768,0,1.061C16.934,22.967,16.742,23.04,16.55,23.04z\" fill=\"#ffffff\" class=\"color000000 svgShape\"></path></svg></div>\n            <div class=\"menu__text\">Watchlist</div>\n        </li>");
    lmeTrakt_watchlist.on('hover:enter', function () {
      if (!Array.isArray(Lampa.Storage.get('lmeTraktToken')) || !Lampa.Storage.get('lmeTraktToken').find(function (obj) {
        return Object.keys(obj)[0] === profileId.toString();
      })) {
        Lampa.Noty.show(Lampa.Lang.translate('authMissed'));
        return; // Останавливаем выполнение функции
      }
      Lampa.Activity.push({
        url: '',
        title: 'Watchlist',
        component: 'lmeTrakt_watchlist',
        page: 1
      });
    });
    $('.menu .menu__list').eq(0).append(lmeTrakt_upnext);
    $('.menu .menu__list').eq(0).append(lmeTrakt_watchlist);
  }
  function startPlugin() {
    window.plugin_lmeTrakt_ready = true;
    Lampa.Component.add('lmeTrakt_upnext', Catalog.upnext);
    Lampa.Component.add('lmeTrakt_watchlist', Catalog.watchlist);
    if (window.appready) add();else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") add();
      });
    }
  }
  if (!window.plugin_lmeTrakt_ready) startPlugin();

})();
