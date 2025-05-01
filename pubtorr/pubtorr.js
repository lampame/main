(function () {
    'use strict';

    function translate() {
      Lampa.Lang.add({
        lme_parser: {
          ru: 'Каталог парсеров',
          en: 'Parsers catalog',
          uk: 'Каталог парсерів',
          zh: '解析器目录' // Chinese translation
        },
        lme_parser_description: {
          ru: 'Нажмите для выбора парсера из ',
          en: 'Click to select a parser from the ',
          uk: 'Натисніть для вибору парсера з ',
          zh: '单击以从可用的 '
        },
        lme_pubtorr: {
          ru: 'Каталог TorrServer',
          en: 'TorrServer catalog',
          uk: 'Каталог TorrServer',
          zh: '解析器目录' // Chinese translation
        },
        lme_pubtorr_description: {
          ru: 'Бесплатные серверы от проекта LME',
          en: 'Free servers from the LME project',
          uk: 'Безкоштовні сервери від проєкту LME',
          zh: '来自 LME 项目的免费服务器 '
        },
        lme_pubtorr_firstrun: {
          "ru": "Привет! Ты установил плагин LME PubTorr, учти что если стоит Mods's то в разделе парсеров будет ошибка, которая не влияет на работу. Хочешь избавиться - оставь или LME PubTorr или Mods's.",
          "en": "Hello! You have installed the LME PubTorr plugin. Note that if Mods's is enabled, there will be an error in the parsers section that does not affect functionality. If you want to get rid of it, keep either LME PubTorr or Mods's.",
          "uk": "Привіт! Ви встановили плагін LME PubTorr, врахуйте, що якщо активовано Mods's, то в розділі парсерів буде помилка, яка не впливає на роботу. Якщо хочете позбутися - залиште або LME PubTorr, або Mods's.",
          "zh": "你好！你安装了LME PubTorr插件，请注意，如果启用了Mods's，解析器部分将出现错误，但这不会影响功能。如果你想摆脱它，请保留LME PubTorr或Mods's。"
        }
      });
    }
    var Lang = {
      translate: translate
    };

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

    var parsersInfo = [{
      base: 'lampa_app',
      name: 'Lampa.app',
      settings: {
        url: 'lampa.app',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'jacred_viewbox_dev',
      name: 'Viewbox',
      settings: {
        url: 'jacred.viewbox.dev',
        key: 'viewbox',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'unknown',
      name: 'Unknown',
      settings: {
        url: '188.119.113.252:9117',
        key: '1',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'trs_my_to',
      name: 'Trs.my.to',
      settings: {
        url: 'trs.my.to:9118',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'jacred_my_to',
      name: 'Jacred.my.to',
      settings: {
        url: 'jacred.my.to',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'jacred_xyz',
      name: 'Jacred.xyz',
      settings: {
        url: 'jacred.xyz',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }, {
      base: 'jac_red_ru',
      name: 'jac-red.ru',
      settings: {
        url: 'jac-red.ru',
        key: '',
        parser_torrent_type: 'jackett'
      }
    }];

    /**
     * Determines protocol based on current location
     * @type {string}
     */
    var proto = location.protocol === "https:" ? 'https://' : 'http://';

    /**
     * Cache object with TTL (10 minutes)
     * @type {Object}
     */
    var cache = {
      data: {},
      TTL: 10 * 60 * 1000,
      // 10 minutes
      get: function get(key) {
        var cached = this.data[key];
        if (cached && Date.now() < cached.expiresAt) {
          return cached;
        }
        return null;
      },
      set: function set(key, value) {
        this.data[key] = _objectSpread2(_objectSpread2({}, value), {}, {
          expiresAt: Date.now() + this.TTL
        });
      }
    };

    /**
     * Creates health check endpoint URL
     * @param {Object} parser - Parser configuration object
     * @returns {string} Health check URL
     */
    function createHealthCheckUrl(parser) {
      var protocol = parser.base === "lme_jackett" || parser.base === "lme_prowlarr" ? "" : proto;
      var apiKey = '';
      if (parser.settings.parser_torrent_type === 'prowlarr') {
        apiKey = parser.settings.key;
      } else if (parser.settings.url === 'spawn.pp.ua:59117') {
        apiKey = '2';
      } else if (parser.base === 'lme_jackett') {
        apiKey = parser.settings.key;
      }
      var basePath = parser.settings.parser_torrent_type === 'prowlarr' ? '/api/v1/health' : '/api/v2.0/indexers/status:healthy/results';
      return "".concat(protocol).concat(parser.settings.url).concat(basePath, "?apikey=").concat(apiKey);
    }

    /**
     * Finds parser element in DOM
     * @param {string} parserName - Name of parser to find
     * @returns {jQuery} jQuery element
     */
    function findParserElement(parserName) {
      return $('div.selectbox-item__title').filter(function () {
        return $(this).text().trim() === parserName;
      });
    }

    /**
     * Handles health check response
     * @param {jQuery} element - DOM element to update
     * @param {string} color - Color code
     * @param {Function} resolve - Promise resolver
     * @returns {void}
     */
    function handleResponse(element, color, resolve) {
      element.css('color', color);
      if (color && resolve) {
        resolve();
      }
    }

    /**
     * Validates parser configuration
     * @param {Object} parser - Parser configuration
     * @returns {boolean} Validation result
     */
    function validateParser(parser) {
      var _parser$settings;
      if (!(parser !== null && parser !== void 0 && (_parser$settings = parser.settings) !== null && _parser$settings !== void 0 && _parser$settings.url)) {
        console.warn('Invalid parser configuration: missing URL', parser);
        return false;
      }
      return true;
    }

    /**
     * Checks health status of all parsers
     * @param {string} type - Type of check ('parser')
     * @returns {Promise} Promise resolving when all checks complete
     */
    function checkAlive(_x) {
      return _checkAlive.apply(this, arguments);
    }
    function _checkAlive() {
      _checkAlive = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
        var requests;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(type !== 'parser')) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", Promise.resolve());
            case 2:
              requests = parsersInfo.filter(validateParser).map(function (parser) {
                return new Promise(function (resolve) {
                  var requestUrl = createHealthCheckUrl(parser);
                  var parserElement = findParserElement(parser.name);

                  // Skip if element not found
                  if (!parserElement.length) {
                    console.warn("Parser element not found: ".concat(parser.name));
                    return resolve();
                  }

                  // Use cached value if available
                  var cached = cache.get(requestUrl);
                  if (cached) {
                    console.log('Using cached response for', requestUrl, cached);
                    handleResponse(parserElement, cached.color, resolve);
                    return;
                  }

                  // Make AJAX request
                  $.ajax({
                    url: requestUrl,
                    method: 'GET',
                    timeout: 5000,
                    // 5-second timeout
                    success: function success(response, textStatus, xhr) {
                      var color;
                      switch (xhr.status) {
                        case 200:
                          color = '1aff00'; // Success
                          break;
                        case 401:
                          color = 'ff2e36'; // Auth error
                          break;
                        default:
                          color = 'ff2e36';
                        // Other errors
                      }

                      // Cache successful responses
                      if (xhr.status === 200 || xhr.status === 401) {
                        cache.set(requestUrl, {
                          color: color
                        });
                      }
                      handleResponse(parserElement, color, resolve);
                    },
                    error: function error(xhr, textStatus, errorThrown) {
                      console.error("Health check failed for ".concat(parser.name, ":"), {
                        status: xhr.status,
                        error: errorThrown,
                        parser: parser
                      });
                      handleResponse(parserElement, 'ff2e36', resolve);
                    }
                  });
                });
              });
              return _context.abrupt("return", Promise.allSettled(requests).then(function () {
                console.log('All health checks completed');
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _checkAlive.apply(this, arguments);
    }

    // Register toggle event listener for parser health check
    Lampa.Controller.listener.follow('toggle', function (_ref) {
      var name = _ref.name;
      if (name === 'select') checkAlive("parser");
    });

    /**
     * Updates storage with selected parser's configuration
     * @param {string} jackettUrlTwo - Selected parser URL
     */
    function changeParser() {
      var jackettUrlTwo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Lampa.Storage.get("lme_url_two");
      var selectedParser = parsersInfo.find(function (parser) {
        return parser.base === jackettUrlTwo;
      });
      if (!selectedParser) {
        console.warn("Selected parser configuration not found");
        return;
      }
      var settings = selectedParser.settings;
      var parserType = settings.parser_torrent_type || 'jackett';
      try {
        // Update storage with parser-specific values
        Lampa.Storage.set(parserType === 'prowlarr' ? "prowlarr_url" : "jackett_url", settings.url);
        Lampa.Storage.set(parserType === 'prowlarr' ? "prowlarr_key" : "jackett_key", settings.key);
        Lampa.Storage.set("parser_torrent_type", parserType);
      } catch (error) {
        console.error("Failed to update parser storage:", error);
      }
    }

    // Create parser selection options for settings UI
    var parserSelectionOptions = parsersInfo.reduce(function (options, _ref2) {
      var base = _ref2.base,
        name = _ref2.name;
      options[base] = name;
      return options;
    }, {
      no_parser: 'Не выбран'
    });

    /**
     * Initializes parser settings in the UI
     */
    function parserSetting() {
      Lampa.SettingsApi.addParam({
        component: 'parser',
        param: {
          name: 'lme_url_two',
          type: 'select',
          values: parserSelectionOptions,
          "default": 'no_parser'
        },
        field: {
          name: "<div class=\"settings-folder\" style=\"padding:0!important\">\n                    <div style=\"font-size:1.0em\">".concat(Lampa.Lang.translate('lme_parser'), "</div>\n                   </div>"),
          description: "".concat(Lampa.Lang.translate('lme_parser_description'), " ").concat(parsersInfo.length)
        },
        onChange: function onChange(value) {
          changeParser(value);
          Lampa.Settings.update();
        },
        onRender: function onRender(item) {
          try {
            // Clean up existing parser name display
            $('.settings-param__value p.parserName').remove();

            // Initial parser update
            changeParser();

            // Debounce DOM updates for performance
            requestAnimationFrame(function () {
              var $container = $('div[data-children="parser"]');

              // Set up hover event listener
              $container.off('hover:enter').on('hover:enter', function () {
                Lampa.Settings.update();
              });

              // Conditional UI updates based on parser usage
              if (Lampa.Storage.field('parser_use')) {
                item.show();
                $('.settings-param__name', item).css('color', '#f3d900');
                $('div[data-name="lme_url_two"]').insertAfter($container);
              } else {
                item.hide();
              }
            });
          } catch (error) {
            console.error("Settings render error:", error);
          }
        }
      });
    }
    var Parser = {
      parserSetting: parserSetting
    };

    Lampa.Platform.tv();
    function add() {
      Lang.translate();
      Parser.parserSetting();
    }
    function startPlugin() {
      window.plugin_lmepublictorr_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') add();
        });
      }
    }
    if (!window.plugin_lmepublictorr_ready) startPlugin();

})();
