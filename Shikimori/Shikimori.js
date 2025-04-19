(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
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
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
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
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function main(params, oncomplite, onerror) {
    $(document).ready(function () {
      // Начинаем формировать запрос с базовыми параметрами
      var query = "\n            query Animes {\n                animes(limit: 36, order: ".concat(params.sort || 'aired_on', ", page: ").concat(params.page, "\n        ");

      // Добавляем фильтры, если они присутствуют в params
      if (params.kind) {
        query += ", kind: \"".concat(params.kind, "\"");
      }
      if (params.status) {
        query += ", status: \"".concat(params.status, "\"");
      }
      if (params.genre) {
        query += ", genre: \"".concat(params.genre, "\"");
      }
      if (params.seasons) {
        query += ", season: \"".concat(params.seasons, "\"");
      }

      // Закрываем параметры и продолжаем запрос
      query += ") {\n                    id\n                    name\n                    russian\n                    licenseNameRu\n                    english\n                    japanese\n                    kind\n                    score\n                    status\n                    season\n                    airedOn { year }\n                    poster {\n                        originalUrl\n                    }\n                }\n            }\n        ";
      $.ajax({
        url: 'https://shikimori.one/api/graphql',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          query: query
        }),
        success: function success(response) {
          oncomplite(response.data.animes);
        },
        error: function error(_error) {
          console.error('Error:', _error);
          onerror(_error); // Вызов onerror при ошибке запроса
        }
      });
    });
  }
  function search(animeData) {
    //Cleaner
    function cleanName(name) {
      // Регулярное выражение для удаления фраз "Season", "Part" и цифр рядом с ними
      var regex = /\b(Season|Part)\s*\d*\.?\d*\b/gi;

      // Удаляем нежелательные фразы
      var cleanedName = name.replace(regex, '').trim();

      // Удаляем лишние пробелы
      cleanedName = cleanedName.replace(/\s{2,}/g, ' ');
      return cleanedName;
    }

    // Первый GET запрос к https://animeapi.my.id/shikimori/{animeData.id}
    $.get("https://arm.haglund.dev/api/v2/ids?source=myanimelist&id=".concat(animeData.id), function (response) {
      if (response === null) {
        console.log('We here step#1');
        // Если получили 404, продолжаем искать на TMDB
        searchTmdb(animeData.name, function (tmdbResponse) {
          handleTmdbResponse(tmdbResponse, animeData.japanese);
        });
      } else if (response.themoviedb === null) {
        console.log('We here step#2');
        // Если themoviedb: null, делаем запрос к https://api.themoviedb.org/3/search/multi?include_adult=true&query={animeData.name}
        searchTmdb(animeData.name, function (tmdbResponse) {
          handleTmdbResponse(tmdbResponse, animeData.japanese);
        });
      } else {
        console.log('We here step#3', animeData.kind);
        // Если themoviedb не равно null, делаем запрос к https://api.themoviedb.org/3/movie/{response.themoviedb}
        getTmdb(response.themoviedb, animeData.kind, processResults);
      }
    }).fail(function (jqXHR) {
      if (jqXHR.status === 404) {
        // Если получили 404, продолжаем искать на TMDB
        searchTmdb(animeData.name, function (tmdbResponse) {
          handleTmdbResponse(tmdbResponse, animeData.japanese);
        });
      } else {
        console.error('Error fetching data from animeapi.my.id:', jqXHR.status);
      }
    });
    function searchTmdb(query, callback) {
      //PFS
      var apiKey = "4ef0d7355d9ffb5151e987764708ce96";
      var apiUrlTMDB = 'https://api.themoviedb.org/3/';
      var apiUrlProxy = 'apitmdb.' + (Lampa.Manifest && Lampa.Manifest.cub_domain ? Lampa.Manifest.cub_domain : 'cub.red') + '/3/';
      var request = "search/multi?api_key=".concat(apiKey, "&language=").concat(Lampa.Storage.field('language'), "&include_adult=true&query=").concat(cleanName(query));
      $.get(Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request, callback);
    }
    function getTmdb(id) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'movie';
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      console.log(id, type);
      var apiKey = "4ef0d7355d9ffb5151e987764708ce96";
      var apiUrlTMDB = 'https://api.themoviedb.org/3/';
      var apiUrlProxy = 'apitmdb.' + (Lampa.Manifest && Lampa.Manifest.cub_domain ? Lampa.Manifest.cub_domain : 'cub.red') + '/3/';
      var request = "".concat(type, "/").concat(id, "?api_key=").concat(apiKey, "&language=").concat(Lampa.Storage.field('language'));
      $.get(Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request, callback);
    }
    function handleTmdbResponse(tmdbResponse, fallbackQuery) {
      if (tmdbResponse.total_results === 0) {
        // Если результатов нет, делаем запрос с японским именем
        searchTmdb(fallbackQuery, handleFallbackResponse);
      } else {
        processResults(tmdbResponse);
      }
    }
    function handleFallbackResponse(fallbackResponse) {
      processResults(fallbackResponse);
    }
    function processResults(response) {
      var menu = [];
      if (response.total_results !== undefined) {
        // Обработка результата от поиска (search/multi)
        if (response.total_results === 0) {
          Lampa.Noty.show('Бядосе, обыскали все углы и ничего не нашли');
        } else if (response.total_results === 1) {
          Lampa.Activity.push({
            url: '',
            component: 'full',
            id: response.results[0].id,
            method: response.results[0].media_type,
            card: response.results[0]
          });
        } else if (response.total_results > 1) {
          response.results.forEach(function (animeItem) {
            menu.push({
              title: "[".concat(animeItem.media_type.toUpperCase(), "] ").concat(animeItem.name ? animeItem.name : animeItem.title),
              card: animeItem
            });
          });
          Lampa.Select.show({
            title: 'Find',
            items: menu,
            onBack: function onBack() {
              Lampa.Controller.toggle("content");
            },
            onSelect: function onSelect(a) {
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: a.card.id,
                method: a.card.media_type,
                card: a.card
              });
            }
          });
        }
      } else {
        // Обработка результата от запроса по ID (movie/{id})
        Lampa.Activity.push({
          url: '',
          component: 'full',
          id: response.id,
          method: response.number_of_episodes ? 'tv' : 'movie',
          card: response
        });
      }
    }
  }
  var API = {
    main: main,
    search: search
  };

  function Card(data, userLang) {
    var formattedSeason = data.season ? data.season.replace('_', ' ').replace(/^\w/, function (c) {
      return c.toUpperCase();
    }) : '';
    function capitalizeFirstLetter(string) {
      if (!string) return string; // Проверка на пустую строку или null/undefined
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var item = Lampa.Template.get("LMEShikimori-Card", {
      img: data.poster.originalUrl,
      type: data.kind.toUpperCase(),
      status: capitalizeFirstLetter(data.status),
      rate: data.score,
      title: userLang === 'ru' ? data.russian || data.name || data.japanese : data.name || data.japanese,
      //seasonID: data.season,
      //seasonID: data.season !== null ? data.season : data.airedOn.year, // Проверка на null
      season: data.season !== null ? formattedSeason : data.airedOn.year // Проверка на null,
    });
    /**
    if (!formattedSeason) {
        $(item).find('.LMEShikimori.card__season').addClass('no-season');
    }
    **/
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }

  function Component$1(object) {
    var userLang = Lampa.Storage.field('language');
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var items = [];
    var html = $("<div class='LMEShikimori-module'></div>");
    var head = $("<div class='LMEShikimori-head torrent-filter'><div class='LMEShikimori__home simple-button simple-button--filter selector'>Home</div><div class='LMEShikimori__search simple-button simple-button--filter selector'>Filter</div></div>");
    var body = $('<div class="LMEShikimori-catalog--list category-full"></div>');
    var active, last;

    //Start
    this.create = function () {
      API.main(object, this.build.bind(this), this.empty.bind(this));
    };

    //Build
    this.build = function (result) {
      var _this = this;
      //Scroll
      scroll.minus();
      scroll.onWheel = function (step) {
        if (!Lampa.Controller.own(_this)) _this.start();
        if (step > 0) Navigator.move('down');else Navigator.move('up');
      };
      scroll.onEnd = function () {
        // Используем стрелочную функцию здесь
        object.page++;
        API.main(object, _this.build.bind(_this), _this.empty.bind(_this));
      };
      this.headeraction();
      //Put Data
      this.body(result);

      //Put blank
      scroll.append(head);
      scroll.append(body);

      //Put all in page
      html.append(scroll.render(true));
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.headeraction = function () {
      var settings = {
        "url": "https://shikimori.one/api/genres",
        "method": "GET",
        "timeout": 0
      };
      var filters = {};
      $.ajax(settings).done(function (response) {
        var filteredResponse = response.filter(function (item) {
          return item.entry_type === "Anime";
        });
        var modifiedResponse = filteredResponse.map(function (item) {
          return _objectSpread2(_objectSpread2({}, item), {}, {
            title: item.name,
            name: undefined // Удаляем старый ключ name
          });
        });
        filters.kind = {
          title: 'Genre',
          items: modifiedResponse
        };
      });
      filters.AnimeKindEnum = {
        title: 'Type',
        items: [{
          title: "TV Series",
          code: "tv"
        }, {
          title: "Movie",
          code: "movie"
        }, {
          title: "OVA",
          code: "ova"
        }, {
          title: "ONA",
          code: "ona"
        }, {
          title: "Special",
          code: "special"
        }, {
          title: "TV Special",
          code: "tv_special"
        }, {
          title: "Music",
          code: "music"
        }, {
          title: "PV",
          code: "pv"
        }, {
          title: "CM",
          code: "cm"
        }]
      };
      filters.status = {
        title: 'Status',
        items: [{
          title: "Planned",
          code: "anons"
        }, {
          title: "Airing",
          code: "ongoing"
        }, {
          title: "Released",
          code: "released"
        }]
      };
      filters.sort = {
        title: 'Sort',
        items: [{
          title: "By ID",
          code: "id"
        }, {
          title: "id_desc",
          code: "id_desc"
        }, {
          title: "By rank",
          code: "ranked"
        }, {
          title: "By type",
          code: "kind"
        }, {
          title: "By popularity",
          code: "popularity"
        }, {
          title: "In alphabetical order",
          code: "name"
        }, {
          title: "By release date",
          code: "aired_on"
        }, {
          title: "By number of episodes",
          code: "episodes"
        }, {
          title: "By status",
          code: "status"
        }, {
          title: "By random",
          code: "random"
        }, {
          title: "By random",
          code: "ranked_random"
        }, {
          title: "By Shikimori ranking",
          code: "ranked_shiki"
        }, {
          title: "created_at",
          code: "created_at"
        }, {
          title: "created_at_desc",
          code: "created_at_desc"
        }]
      };
      /** Season Range **/
      function getCurrentSeason() {
        var now = new Date();
        var month = now.getMonth();
        var year = now.getFullYear();
        var seasons = ['winter', 'spring', 'summer', 'fall'];
        var seasonIndex = (month + 1) % 12 === 0 ? 0 : Math.floor((month + 1) / 3); // Визначення індексу сезону
        return "".concat(seasons[seasonIndex], "_").concat(month === 11 ? year + 1 : year);
      }
      function generateDynamicSeasons() {
        var now = new Date();
        var seasons = new Set([getCurrentSeason()]);

        // Додаємо наступні три сезони
        for (var i = 1; i <= 3; i++) {
          var nextDate = new Date(now);
          nextDate.setMonth(now.getMonth() + 3 * i);
          seasons.add(getCurrentSeason());
        }
        return Array.from(seasons); // Перетворюємо Set назад в масив
      }
      function generateYearRanges() {
        var currentYear = new Date().getFullYear();
        var ranges = [];

        // Генеруємо діапазони по 10 років
        for (var startYear = currentYear; startYear >= 2000; startYear -= 10) {
          var endYear = Math.max(startYear - 9, 2000);
          ranges.push("".concat(endYear, "_").concat(startYear));
        }

        // Додаємо статичні діапазони для старіших років
        ranges.push("199x", "198x", "ancient");
        return ranges;
      }
      function generateSeasonJSON() {
        var dynamicSeasons = generateDynamicSeasons();
        var yearRanges = generateYearRanges();
        var allSeasons = _toConsumableArray(new Set([].concat(_toConsumableArray(dynamicSeasons), _toConsumableArray(yearRanges))));
        return allSeasons.map(function (season) {
          return {
            "code": season,
            "title": season.replace(/_/g, '-') // Замінюємо підкреслення на пробіли для читабельності
          };
        });
      }

      // Приклад використання
      //console.log(generateSeasonJSON());
      filters.seasons = {
        title: 'Season',
        items: generateSeasonJSON()
      };
      var serverElement = head.find('.LMEShikimori__search');
      function queryForShikimori() {
        var query = {};
        filters.AnimeKindEnum.items.forEach(function (a) {
          if (a.selected) query.kind = a.code;
        });
        filters.status.items.forEach(function (a) {
          if (a.selected) query.status = a.code;
        });
        filters.kind.items.forEach(function (a) {
          if (a.selected) query.genre = a.id;
        });
        filters.sort.items.forEach(function (a) {
          if (a.selected) query.sort = a.code;
        });
        filters.seasons.items.forEach(function (a) {
          if (a.selected) query.seasons = a.code;
        });
        return query;
      }
      function selected(where) {
        var title = [];
        where.items.forEach(function (a) {
          if (a.selected || a.checked) title.push(a.title);
        });
        where.subtitle = title.length ? title.join(', ') : Lampa.Lang.translate('nochoice');
      }
      function select(where, a) {
        where.forEach(function (element) {
          element.selected = false;
        });
        a.selected = true;
      }
      function submenu(item, main) {
        Lampa.Select.show({
          title: item.title,
          items: item.items,
          onBack: main,
          onSelect: function onSelect(a) {
            select(item.items, a);
            main();
          }
        });
      }
      function mainMenu() {
        for (var i in filters) selected(filters[i]);
        Lampa.Select.show({
          title: 'Filters',
          items: [{
            title: Lampa.Lang.translate('search_start'),
            searchShikimori: true
          }, filters.status, filters.AnimeKindEnum, filters.kind, filters.sort, filters.seasons],
          onBack: function onBack() {
            Lampa.Controller.toggle("content");
          },
          onSelect: function onSelect(a) {
            if (a.searchShikimori) {
              search();
            } else submenu(a, mainMenu);
          }
        });
      }
      function search() {
        var query = queryForShikimori();
        var params = {
          url: '',
          title: 'Shikimori',
          component: 'LMEShikimori',
          page: 1
        };

        // Добавляем параметры только если они существуют
        if (query.kind) {
          params.kind = query.kind;
        }
        if (query.status) {
          params.status = query.status;
        }
        if (query.genre) {
          params.genre = query.genre;
        }
        if (query.sort) {
          params.sort = query.sort;
        }
        if (query.seasons) {
          params.seasons = query.seasons;
        }
        Lampa.Activity.push(params);
      }
      serverElement.on('hover:enter', function () {
        mainMenu();
      });
      var homeElement = head.find('.LMEShikimori__home');
      homeElement.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'Shikimori',
          component: 'LMEShikimori',
          page: 1
        });
      });
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      html.appendChild(empty.render(true));
      this.start = empty.start;
      this.activity.loader(false);
      this.activity.toggle();
    };

    //Catalog build
    this.body = function (data) {
      data.forEach(function (anime) {
        var item = new Card(anime, userLang);
        item.render(true).on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(true), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                API.search(anime);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
        body.append(item.render(true));
        items.push(item);
      });
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) return;
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
    this.render = function (js) {
      return js ? html : $(html);
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

  function Component() {
    Lampa.Listener.follow("full", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var getMAL, response, dubbers, subbers, shikimoriRates;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(e.type === "complite")) {
                _context.next = 21;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return $.ajax({
                url: "https://arm.haglund.dev/api/v2/themoviedb?id=".concat(e.object.id),
                method: "GET",
                timeout: 0
              });
            case 4:
              getMAL = _context.sent;
              if (getMAL.length) {
                _context.next = 8;
                break;
              }
              console.warn("No data found for the provided ID.");
              return _context.abrupt("return");
            case 8:
              _context.next = 10;
              return $.ajax({
                url: "https://shikimori.one/api/animes/".concat(getMAL[0].myanimelist),
                method: "GET",
                timeout: 0
              });
            case 10:
              response = _context.sent;
              dubbers = "\n                    <div class=\"full-descr__info\">\n                        <div class=\"full-descr__info-name\">Fan Dubbers</div>\n                        <div class=\"full-descr__text\">".concat(response.fandubbers.join(', '), "</div>\n                    </div>");
              subbers = "\n                    <div class=\"full-descr__info\">\n                        <div class=\"full-descr__info-name\">Fan Subbers</div>\n                        <div class=\"full-descr__text\">".concat(response.fansubbers.join(', '), "</div>\n                    </div>");
              e.object.activity.render().find(".full-descr__right").append(dubbers, subbers);
              shikimoriRates = "<div class=\"full-start__rate rate--shikimori\"><div>".concat(response.score, "</div><div>Shikimori</div></div>");
              e.object.activity.render().find(".full-start-new__rate-line").prepend(shikimoriRates);
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);
              console.error("Error fetching data:", _context.t0);
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 18]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  function add() {
    var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg fill=\"currentColor\" viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Shikimori icon</title><path d=\"M2.8025.0025C2.7779.03 2.8332.1223 2.9834.3c.0981.1134.1594.2328.233.4444.0551.1594.1198.3157.1443.3464.0368.049.0396.037.0427-.1102V.8181l.218.3004c.331.4568.5365.6992.6744.7973.0706.046.1136.0919.0952.098-.049.0153-.4785-.2208-.6778-.374-.1012-.0767-.196-.1411-.2114-.1411-.0153 0-.0644-.0461-.1073-.1013-.0399-.0552-.1348-.1408-.2053-.1898-.1717-.1196-.3527-.2913-.3957-.374C2.763.7721 2.668.7323 2.668.7814c0 .049.245.377.435.5793.5825.6224 1.1776.932 2.7688 1.4287.3373.1043.6347.2085.6623.233.0246.0215.0737.0398.1074.0398.0306 0 .0795.0152.104.0305.0399.0245.0367.031-.0093.031-.0368 0-.0521.018-.046.0548.0092.0552.1595.1045.4477.1444.1287.0184.1593.0124.1593-.0244 0-.049-.0889-.083-.2207-.083-.049 0-.0858-.0151-.0858-.0304 0-.0184.031-.025.0708-.0188.0368.0092.1652.0306.2817.052.276.046.353.0768.353.135 0 .0644.0826.092.1377.046.0307-.0276.046-.0274.046-.0028 0 .0183.0151.0337.0304.0337.0184 0 .031-.0214.031-.046 0-.0582-.0309-.0586.4842.0212.3066.046.42.077.374.0923-.098.0368-.0428.0858.0952.0858.0705 0 .1195.0153.1195.0337 0 .0276.0704.0306.2452.0183.1594-.0123.2516-.0093.2639.0122.0122.0184.0643.0275.1195.0183.0521-.0092.1961.0034.3126.0248.3066.0583 1.1313.1044 2.977.1688 2.983.1042 5.157.3277 5.9726.6159.3617.1287.9075.4048 1.0087.509.1594.1686.2082.3066.1898.5334-.0092.1135-.0092.2149 0 .2241.089.089.2855-.0859.2855-.2545 0-.0338.0639-.1165.1467-.187.331-.2913.3803-.454.3436-1.1194-.0246-.4476-.031-.4782-.2302-1.1343-.2606-.8585-.3215-.9903-.6342-1.3214-.3679-.3863-.7023-.6072-1.1592-.7635-.1103-.0368-.3434-.1224-.5212-.1899-.2483-.098-.4262-.141-.788-.1931-.512-.0736-1.6126-.1256-1.956-.0919-.1226.0123-.6132 0-1.1498-.0337-.61-.0337-.984-.046-1.0729-.0277-.0766.0154-.2085.0274-.2944.0305-.1257 0-.1837.0187-.291.0984-.1257.092-.2149.1194-.5644.1777-.5641.092-.929.1653-1.0823.2175-.1196.0429-.3157.0706-.6192.089-.8309.0521-1.3029.0952-1.4071.129-.0706.0214-.3406.0274-.7913.0182-.5488-.0123-.6895-.006-.7171.0277-.0276.0306-.0155.0398.0581.0398.1809 0 1.7968.1258 1.8121.141.0154.0154-.273.003-1.0977-.0491-.2423-.0154-.4567-.0186-.472-.0094-.0583.0368-.4939.0307-.9108-.0122-.515-.0521-1.0115-.138-1.4714-.2545-.2146-.0521-.4662-.0916-.644-.1008-.328-.0153-.6778-.129-1.1714-.3773-.325-.1625-.3614-.1684-.3614-.0366v.1008L3.244.5331c-.0552-.0644-.1224-.1689-.15-.2302-.0552-.1165-.2609-.328-.2915-.3004zm.4584 3.1887c-.5697.0269-1.0938.4707-1.47 1.2628-.2238.4752-.2635.6593-.2789 1.291-.0122.4966-.0063.598.0642 1.0119.1503.8615.19.9625.5058 1.2721.3342.3312 1.1654.785 1.6284.8892.1594.0338.3464.0768.4139.0952.2575.0644.61.0885 1.4868.1008.8431.0153.9136.0125 1.027-.0427.0797-.0398.2486-.0707.4908-.089.2023-.0184.4165-.0459.4748-.0643.0582-.0153.1841-.0309.276-.0309.0951 0 .1903-.0182.2087-.0366.0735-.0735.4228-.1503.757-.1687.187-.0092.3621-.0273.3928-.0427.1011-.0551.052-.0859-.1135-.0675-.095.0092-.187.003-.2207-.0154-.0491-.0307-.034-.0335.0825-.0366.0766 0 .2269-.0093.3342-.0216.1655-.0153.1842-.0248.1382-.0585-.1134-.0828-.0153-.1041.4936-.1041.4568 0 .5886-.0215.4537-.0736-.0275-.0092-.1413-.0216-.2517-.0216-.1134-.003-.1624-.0119-.1134-.015.0521-.006.1628-.0277.2517-.043.0859-.0185.6255-.0399 1.1958-.046.5702-.0061 1.0542-.0124 1.0757-.0155.0276 0 .0338-.0215.0216-.0614-.0123-.043-.0061-.061.0276-.061.0245 0 .083-.049.129-.1073.0919-.1195.1161-.1137.156.0427l.0277.1012.2207.0094c.1748.0061.2333-.003.2916-.046.0398-.0306.1224-.0645.1837-.0768l.1135-.0216-.0183.1782c-.0184.144-.0152.1716.0215.1593.0246-.0092.1222-.0338.2203-.0553l.1749-.0337-.0675-.089c-.043-.0491-.1226-.098-.1931-.1163l-.1224-.031.1838-.006a4.812 4.812 0 0 1 .3004 0c.0644.003.1135-.0089.1135-.0272 0-.0184-.0182-.034-.0366-.037-.0215-.0031-.089-.0064-.1472-.0095-.0582-.006-.1564-.0398-.2147-.0735-.0582-.0368-.1317-.067-.1593-.067-.0307 0-.0553-.0157-.0553-.031 0-.0215.092-.0305.2545-.0244.2483.0092.2514.0091.2606.0919.0123.095.0122.095.0797.0675a.0498.0498 0 0 0 .0305-.0581c-.0184-.049.037-.0893.083-.0586.0183.0092.0918.0215.1593.0276.1655.0092.9718.0737 1.1803.0952.1103.0122.1593.0307.1593.0614 0 .0521.037.0549.083.0089.0245-.0245.1442-.021.4354.0066.3557.0337.4017.0425.4017.0946 0 .0368.0213.0556.0704.0586.0368 0 .1656.0121.2821.0244.1196.0123.2329.0181.2513.009.0214-.0062.0891-.0979.1504-.2021.1196-.1993.2208-.3253.2607-.3253.0153 0 .018.0219.0089.0464-.0123.0245-.003.046.0154.046.0215 0 .0338.0244.0277.052-.0061.0367.0213.0582.0919.0735.1134.0246.1657.0582.089.0582-.0276 0-.0525.0183-.0525.0398 0 .0215.1812.0984.4448.1842.2821.095.4444.1623.4444.1899 0 .0306-.095.0092-.3586-.0797-.6254-.2146-.898-.2606-.898-.1533 0 .046.0488.0676.285.1228.1532.0368.3002.0642.3248.0642.0214 0 .0798.0338.1289.0736.049.043.294.144.5638.233.273.092.5153.19.5644.233.049.0398.1349.0952.1931.1166.1932.0828.4693.3309.6778.6099.3005.4047.2973.3895.1317.3895-.0766 0-.2946-.0214-.4847-.046-.19-.0245-.429-.0461-.53-.0492-.2147-.0061-1.9684.0278-2.6245.0493l-.4449.0154-.0703-.1504c-.0398-.0828-.1533-.2298-.2545-.331-.1747-.1717-.1837-.175-.2236-.1167-.0245.0337-.1168.1626-.2057.2822l-.1622.2236-.1992.0065c-.1104 0-.2242.0031-.2517 0-.0675-.006-.0703.0305-.009.144l.0427.0857-.3126.0216c-.8524.0582-2.661.282-3.268.4078-.135.0276-.4203.049-.6778.052-.46.0061-.5028.0184-.794.187-.0522.0276-.0922.0339-.129.0155-.0337-.0215-.0643-.0154-.0858.0122-.0337.0398-.144.058-.9534.1439-.1778.0184-.475.0584-.665.089-.3312.0552-.3499.0552-.5246 0-.184-.0582-.7572-.135-1.2478-.1687l-.276-.0216-.1622.1472c-.092.0797-.218.2177-.2855.3066-.092.1257-.141.166-.1992.166-.1257 0-1.2448.1743-2.0573.3215-.8768.1594-1.2077.1904-1.4652.1382-.2668-.0551-.2701-.0583-.2578-.3956.0122-.2851.0093-.2941-.0643-.3309-.1686-.0858-.331-.0371-.5517.1622-.052.046-.1133.0675-.1992.0675-.0705-.003-.1993.0306-.3004.0797l-.181.083.009.1593c.006.0858-.0032.1868-.0216.2175-.0245.0368-.0306.1994-.0183.4692.0123.328.003.4476-.0398.607l-.052.1964.1471.2086c.2943.4139.503.7294.503.763 0 .0185.0916.1169.208.218.506.4446.7207.5642 1.2174.6685.5273.1134.6131.1072.9412-.0675.1502-.0828.3251-.1965.3895-.2578.0797-.0736.3067-.1931.742-.3863.6776-.3004.7631-.3342.7631-.2943 0 .0122.043.426.0952.9135.1073 1.024.1411 2.0052.0951 2.7595-.0368.5917-.0644.6743-.4814 1.4591-.6469 1.2172-1.4224 2.3947-2.008 3.0477-.1043.1196-.2636.325-.3525.4599-.1686.2544-.4815.595-.871.9445-.1317.1195-.2177.2206-.2085.2451.0092.0245.1046.0734.2119.1102.1042.0398.2052.083.2236.0984.049.049.1101.0303.337-.0924l.2207-.1223.0891.0614c.1073.0705.3006.0763.4631.015.0644-.0245.1932-.052.2883-.0581.19-.0184.3126-.0703.5118-.2236.0736-.0552.1687-.1073.2147-.1195.089-.0184.8585-.7976 1.2694-1.2881.1287-.1502.4506-.4905.7204-.7542.3771-.374.5457-.5148.7603-.6436.3096-.184.5548-.4076.5854-.5395.0123-.046.052-.1413.0919-.2118.095-.1625.2024-.5792.1748-.6835-.0092-.0429-.0552-.147-.1012-.233-.0797-.141-.0855-.1901-.1008-.5826-.0276-.6898-.138-1.0515-.4875-1.5941-.2023-.3127-.2516-.4231-.3773-.8278-.2085-.696-.2697-1.3493-.1655-1.8613.049-.2545.0735-.2883.279-.4078.1072-.0644.2484-.1656.3159-.227l.1256-.1162.5948-.0675c.328-.0398.6958-.0889.8123-.1134.1196-.0245.3831-.0797.5855-.1195.2054-.043.497-.1164.6473-.1655.1502-.0521.3616-.1137.472-.1383.2146-.049.9472-.1192.9717-.0946.0092.0092.0185.4476.0155.975 0 .8277-.0092 1.0515-.0797 1.6616-.1196 1.0455-.1442 1.3732-.1749 2.526-.0276 1.1466-.0365 1.1986-.2236 1.3335-.1349.0981-.2728.0802-.6806-.1007-.2023-.089-.6286-.264-.9505-.3928-.3189-.1288-.7727-.3277-1.0027-.4411-.233-.1165-.4232-.2028-.4232-.1936 0 .0092.1165.1595.2606.3342.144.1748.2606.325.2606.3342 0 .0092-.0274.0188-.0642.0188-.0552 0-.0584.006-.0155.0642.0276.0398.0369.101.0277.1654-.0123.0828-.0032.1106.058.1505.04.0276.1046.1041.1445.1716.0368.0643.1012.147.141.1776.04.0307.098.1044.1318.1627.0306.0582.1348.1654.233.239.098.0736.193.1687.2113.2086.0184.046.1077.1133.2119.1655.2422.1226.5975.4353.6557.5732.0338.0859.1015.1534.2977.2822.1564.1042.4321.3433.7387.6469.558.5518.5887.5703 1.0425.5427.2943-.0214.4416-.0768.6164-.2362.0705-.0644.1563-.1316.187-.15.0306-.0184.1072-.1072.1655-.1992.0582-.095.147-.1932.193-.2208.1288-.0766.3587-.402.3587-.5062 0-.1533.0582-.251.2606-.441.1778-.1656.2149-.2213.3253-.4941.1717-.417.2326-.6864.2878-1.223.0674-.6622.0616-1.4623-.015-1.962-.1257-.8156-.604-3.0876-.7481-3.5414-.1196-.377-.233-.8676-.233-1.0087 0-.0337.064-.0369.3155-.0215.23.0153.4108.0094.6745-.0305.3127-.046.4202-.049.7514-.0183.2115.0184.3923.0396.3984.0488.0245.0214.4968 1.5575.5765 1.8702.1656.6408.1688.687.2025 2.2996.0153.8431.0304 1.8426.0366 2.2228.0061.6407.0124.7111.089.9932.0981.3587.2054.5919.4261.9108.089.1257.2238.3464.3005.4874.1533.2852.3527.521.6103.7172.3372.2606.6652.4724.8676.5644.2422.1103.4382.2849.6314.5577.0797.1104.1932.2609.2545.3375.0613.0767.1378.1932.1716.2607.0582.1226.0766.1348.4078.233.1532.0459.5762.0548.8123.015.1318-.0216.1812-.052.3928-.2574.285-.276.42-.469.42-.607 0-.2146.0303-.279.156-.3281.0798-.0307.1196-.0673.1196-.1041 0-.1932-.2023-.9723-.3066-1.1747-.0674-.1349-.9471-1.324-1.686-2.2836-.7849-1.0148-1.061-1.4567-1.2234-1.935-.0521-.1624-.2481-1.2754-.3708-2.143-.0889-.6224-.2608-1.2386-.5306-1.9223-.092-.233-.1564-.4228-.141-.4228.0735 0 1.6526.4415 1.7445.4875.0583.0307.2974.159.5274.2878.23.1318.4537.2363.4935.2363.046 0 .239.1073.466.2606l.3895.2606.2025-.0155c.2912-.0276.346-.0398.4687-.1256.1748-.1196.2792-.138.4172-.0736.2667.1257.4507.1472.2883.0338-.2422-.1687-.2667-.2516-.1257-.4632.1687-.2575.1867-.2757.3614-.3646.279-.141.2976-.1745.3895-.6774.043-.2452.1011-.4848.1257-.5338.0705-.1472.0553-.2419-.0642-.3553-.0614-.0583-.1627-.1904-.2302-.2916-.095-.1472-.1223-.2175-.1223-.3248 0-.1196-.0124-.144-.1013-.1992a1.3114 1.3114 0 0 0-.218-.1074c-.1318-.046-.3369-.2635-.3093-.3248a2.3155 2.3155 0 0 0 .0337-.083c.0246-.0613-.2239-.1962-.4692-.2545-.2452-.0582-.2421-.0583-.1992-.1073.0215-.0276.0212-.1227.0028-.3005-.092-.84-.4321-1.4285-.9993-1.7259-.1226-.0644-.2299-.1288-.239-.1471-.0583-.089-.7818-.365-1.1803-.4477-.1257-.0245-.3744-.0857-.5522-.1378-.1778-.049-.4504-.1016-.6098-.12-.4568-.043-1.073-.147-1.2754-.2114-.1012-.0307-.3403-.0858-.5335-.1195-.1931-.0368-.3587-.0766-.368-.0919-.0122-.0184-.0858-.0156-.187.0028-.1164.0215-.2912.0217-.5671-.0028-.2177-.0215-.7573-.034-1.1957-.031-.6745.0031-.8585-.0057-1.2019-.0609-.2207-.0368-.518-.0646-.659-.0646-.3373-.0031-1.331-.1042-1.1531-.1196.0276 0 .1195-.0181.2053-.0365.141-.0307.1504-.0372.1228-.0985-.0306-.0644-.0458-.0673-.478-.0642-.368 0-.4539.0094-.4815.0492-.0306.0399-.0615.0428-.1964.0183-.144-.0306-.1533-.0368-.1073-.0736.049-.0368.0492-.046.0094-.0736-.0246-.0153-.0676-.031-.0952-.031-.0399 0-1.9562-.19-2.7533-.2727-.1564-.0184-.2941-.0365-.3033-.0488-.0092-.0092.0061-.0154.0337-.0154.0307 0 .052-.0124.052-.0277 0-.046-.156-.058-.3707-.0244-.1502.0215-.2303.0213-.2794-.0032-.0582-.0246-.0395-.0273.0924-.015.2912.0306.1683-.0401-.1383-.077-.1656-.0214-.3372-.043-.3801-.0491a.486.486 0 0 1-.1379-.046c-.0306-.0184-.3679-.0763-.748-.1284-.3802-.0521-.8065-.1291-.9506-.172-.4967-.141-.9532-.371-1.2169-.607l-.1382-.1224.0492-.1167c.1011-.2422.2299-.3832.4598-.4936.3158-.1533.46-.178 1.0762-.1964.561-.0122.693-.0365.6286-.1101-.0307-.043-.472-.1106-.6928-.1106-.138 0-.4815-.0674-.7973-.1594a1.2257 1.2257 0 0 0-.4003-.0488zm8.8497 2.9503a.3051.3051 0 0 0-.0675.0051c-.181.0307-.285.0734-.3769.15l-.0919.0736.1472.0033c.1564 0 .239-.0306.3525-.1317.0713-.0644.0838-.0963.0366-.1003zm5.7762.951c.0383-.0023.0814.0089.1626.0319.092.0276.193.0401.2236.031.0307-.0093.0674-.0033.0797.0182.0153.0276-.0305.0308-.1838.0155-.1349-.0154-.2025-.0126-.2025.0089 0 .0184.0368.04.0858.0492.2238.049.2607.0737.0675.0553-.1103-.0123-.276-.0213-.368-.0244-.1594 0-.1684.003-.1776.0797-.0092.0705-.0307.0856-.181.1163-.2053.0398-.1775.0428-.3308-.0277-.138-.0674-.4418-.141-.819-.1992-.141-.0215-.2112-.0396-.1621-.0427.0521 0 .3342.0307.6286.0736.5457.0767.6988.0919.6651.0582-.0092-.0092-.2483-.0644-.5334-.1196l-.5151-.1012.3004-.0033c.2637-.003.3098.0064.3895.0647.0675.049.1011.0583.1256.0337.0215-.0214.1133-.028.2574-.0187.1931.0153.2452.0095.3525-.0488.0628-.0322.0966-.0483.135-.0506zm-4.3466.5128c.0152-.0005.0284.0022.036.0099.0124.0092.0002.0306-.0243.0459-.0582.0368-.0828.037-.1073.0033-.0138-.0253.0499-.0575.0956-.059zm4.9869.09c.0057-.002.0158.0105.0342.0366.0214.0276.0673.052.098.052.049 0 .0524.006.0126.0305-.0245.0153-.0522.0276-.0614.0276-.0613-.0061-.0919-.0428-.0919-.098.0015-.0306.0027-.0468.0085-.0487zm-3.9515.1805c-.0613 0-.104.052-.104.1256 0 .0153.0702.0276.156.0276.1472 0 .1536-.003.1168-.052-.0613-.0797-.0983-.1012-.1688-.1012zm6.1901 1.8304c.0215-.0092.0738.012.1167.0426.0675.0521.0674.0584.0122.0553-.0858 0-.184-.0765-.1289-.098Z\"></path></g></svg>\n            </div>\n            <div class=\"menu__text\">Shikimori</div>\n        </li>");
    button.on("hover:enter", function () {
      Lampa.Activity.push({
        url: '',
        title: 'Shikimori',
        component: 'LMEShikimori',
        page: 1
      });
    });
    $(".menu .menu__list").eq(0).append(button);
  }
  function startPlugin() {
    window.plugin_shikimori_ready = true;
    var manifest = {
      type: "other",
      version: "0.1",
      name: "LME Shikimori",
      description: "Add Shikimori catalogue",
      component: "LMEShikimori"
    };
    Lampa.Manifest.plugins = manifest;
    //Set Style and Template
    Lampa.Template.add('LMEShikimoriStyle', "<style>\n            .LMEShikimori-catalog--list.category-full{-webkit-box-pack:justify !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.LMEShikimori-head.torrent-filter{margin-left:1.5em}.LMEShikimori.card__type{background:#ff4242;color:#fff}.LMEShikimori .card__season{position:absolute;left:-0.8em;top:3.4em;padding:.4em .4em;background:#05f;color:#fff;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.LMEShikimori .card__status{position:absolute;left:-0.8em;bottom:1em;padding:.4em .4em;background:#ffe216;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.LMEShikimori.card__season.no-season{display:none}\n        </style>");
    Lampa.Template.add("LMEShikimori-Card", "<div class=\"LMEShikimori card selector layer--visible layer--render\">\n                <div class=\"LMEShikimori card__view\">\n                    <img src=\"{img}\" class=\"LMEShikimori card__img\" />\n                    <div class=\"LMEShikimori card__type\">{type}</div>\n                    <div class=\"LMEShikimori card__vote\">{rate}</div>\n                    <div class=\"LMEShikimori card__season\">{season}</div>\n                    <div class=\"LMEShikimori card__status\">{status}</div>\n                </div>\n                <div class=\"LMEShikimori card__title\">{title}</div>\n            </div>");
    Lampa.Component.add(manifest.component, Component$1);
    //Set Franchise for FullCard
    Component();
    //Set menu
    $('body').append(Lampa.Template.get('LMEShikimoriStyle', {}, true));
    if (window.appready) add();else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") add();
      });
    }
  }
  if (!window.plugin_shikimori_ready) startPlugin();

})();
