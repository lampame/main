(function () {
  'use strict';

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

      // Закрываем параметры и продолжаем запрос
      query += ") {\n                    id\n                    name\n                    russian\n                    licenseNameRu\n                    english\n                    japanese\n                    kind\n                    score\n                    status\n                    season\n                    poster {\n                        originalUrl\n                    }\n                }\n            }\n        ";
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
    $.get("https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://animeapi.my.id/shikimori/".concat(animeData.id), function (response) {
      if (response.code === 404) {
        // Если получили 404, продолжаем искать на TMDB
        searchTmdb(animeData.name, function (tmdbResponse) {
          handleTmdbResponse(tmdbResponse, animeData.japanese);
        });
      } else if (response.themoviedb === null) {
        // Если themoviedb: null, делаем запрос к https://api.themoviedb.org/3/search/multi?include_adult=true&query={animeData.name}
        searchTmdb(animeData.name, function (tmdbResponse) {
          handleTmdbResponse(tmdbResponse, animeData.japanese);
        });
      } else {
        // Если themoviedb не равно null, делаем запрос к https://api.themoviedb.org/3/movie/{response.themoviedb}
        getTmdb(response.themoviedb, processResults);
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
    function getTmdb(id, callback) {
      var apiKey = "4ef0d7355d9ffb5151e987764708ce96";
      var apiUrlTMDB = 'https://api.themoviedb.org/3/';
      var apiUrlProxy = 'apitmdb.' + (Lampa.Manifest && Lampa.Manifest.cub_domain ? Lampa.Manifest.cub_domain : 'cub.red') + '/3/';
      var request = "movie/".concat(id, "?api_key=").concat(apiKey, "&language=").concat(Lampa.Storage.field('language'));
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
          method: 'movie',
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
      seasonID: data.season,
      season: formattedSeason
    });
    if (!formattedSeason) {
      $(item).find('.LMEShikimori.card__season').addClass('no-season');
    }
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }

  function Component(object) {
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
          }, filters.status, filters.AnimeKindEnum, filters.kind, filters.sort],
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
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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

  function add() {
    var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg width=\"105\" height=\"105\" viewBox=\"0 0 105 105\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g clip-path=\"url(#clip0_212_2)\">\n                    <path d=\"M6.73242 103.945C6.65577 103.881 6.2342 103.702 5.79985 103.536C5.35272 103.383 4.9567 103.178 4.91837 103.076C4.88005 102.974 5.23775 102.552 5.78707 102.054C7.4095 100.598 8.71255 99.1796 9.41517 98.1193C9.78565 97.5572 10.4499 96.7013 10.8843 96.203C13.3243 93.482 16.5564 88.5764 19.2519 83.5047C20.9893 80.2343 21.1043 79.8894 21.2576 77.4238C21.4492 74.2811 21.3087 70.1931 20.8616 65.9263C20.6444 63.8951 20.4655 62.1704 20.4655 62.1193C20.4655 61.9533 20.1078 62.0938 17.2846 63.3457C15.4705 64.1506 14.5252 64.6488 14.193 64.9554C13.9247 65.2109 13.1966 65.6836 12.5706 66.0285C11.2037 66.7567 10.846 66.7822 8.64867 66.3095C6.57912 65.8752 5.68487 65.377 3.577 63.5246C3.09155 63.103 2.7083 62.6942 2.7083 62.6176C2.7083 62.477 1.8396 61.1612 0.6132 59.4366L0 58.5679L0.217175 57.7503C0.396025 57.086 0.43435 56.5878 0.38325 55.2208C0.33215 54.0966 0.3577 53.4196 0.4599 53.2663C0.53655 53.1385 0.574875 52.7169 0.549325 52.3592L0.511 51.6949L1.26472 51.35C1.6863 51.1456 2.22285 51.0051 2.51667 51.0179C2.87437 51.0179 3.12987 50.9284 3.34705 50.7368C4.26685 49.9064 4.94392 49.702 5.64655 50.0597C5.95315 50.213 5.96592 50.2514 5.91482 51.4394C5.86372 52.8447 5.8765 52.8575 6.98792 53.0874C8.06102 53.3046 9.44072 53.1768 13.0944 52.5125C16.4797 51.8993 21.1426 51.1712 21.6664 51.1712C21.9091 51.1712 22.1135 51.0051 22.4968 50.4813C22.7778 50.1108 23.3016 49.536 23.6848 49.2038L24.3619 48.5906L25.5117 48.68C27.5557 48.8206 29.9446 49.1399 30.7111 49.3827C31.4393 49.6126 31.5159 49.6126 32.8956 49.3827C33.6877 49.2549 34.9268 49.0888 35.6678 49.0122C39.0404 48.6545 39.5003 48.5778 39.6408 48.4118C39.7302 48.2968 39.858 48.2712 39.9985 48.3607C40.1518 48.4373 40.3179 48.4118 40.5351 48.2968C41.7487 47.5942 41.9275 47.5431 43.8438 47.5175C44.9169 47.5047 46.105 47.4153 46.6671 47.3003C49.1965 46.7766 56.7338 45.844 60.2852 45.6013L61.5883 45.5118L61.4094 45.1541C61.1539 44.6815 61.1667 44.5282 61.4477 44.5537C61.5627 44.5665 62.0354 44.5537 62.4953 44.5537L63.3257 44.5282L64.0027 43.5956C64.3732 43.0974 64.7565 42.5608 64.8587 42.4203C65.0247 42.1776 65.0631 42.1903 65.7912 42.9057C66.2128 43.3273 66.6855 43.9405 66.8516 44.2854L67.1454 44.9114L68.9978 44.8475C71.7316 44.7581 79.0389 44.6176 79.9332 44.6431C80.3547 44.6559 81.3512 44.7453 82.1432 44.8475C82.9353 44.9497 83.8423 45.0392 84.1617 45.0392C84.8515 45.0392 84.8643 45.103 83.6124 43.4167C82.7437 42.2542 81.5939 41.2194 80.7891 40.8745C80.5464 40.7851 80.1887 40.5551 79.9843 40.3891C79.7799 40.2102 78.7706 39.8014 77.6337 39.4182C76.5095 39.0477 75.4875 38.6261 75.2831 38.4473C75.0787 38.2812 74.8359 38.1407 74.7465 38.1407C74.6443 38.1407 74.0311 38.0257 73.3924 37.8724C72.4087 37.6424 72.2043 37.553 72.2043 37.3614C72.2043 36.9143 73.3413 37.1059 75.9474 38.0001C77.046 38.3706 77.442 38.46 77.442 38.3323C77.442 38.2173 76.765 37.9363 75.5897 37.5402C74.491 37.1825 73.7373 36.8632 73.7373 36.7737C73.7373 36.6843 73.8395 36.6077 73.9545 36.6077C74.2738 36.6077 74.0567 36.4671 73.584 36.3649C73.2902 36.3011 73.1752 36.2116 73.2007 36.0583C73.2263 35.9434 73.1752 35.8412 73.0858 35.8412C73.0091 35.8412 72.9708 35.7517 73.0219 35.6495C73.0602 35.5473 73.0474 35.4579 72.9836 35.4579C72.8175 35.4579 72.3959 35.9817 71.8977 36.8121C71.6422 37.2464 71.3611 37.6297 71.2717 37.6552C71.1951 37.6935 70.7224 37.668 70.2242 37.6169C69.7387 37.5658 69.2022 37.5147 69.0489 37.5147C68.8445 37.5019 68.755 37.4253 68.755 37.272C68.755 37.0548 68.5634 37.0165 67.0815 36.8759C65.8679 36.761 65.3697 36.7482 65.2675 36.8504C65.0758 37.042 64.9225 37.0292 64.9225 36.8121C64.9225 36.6843 64.7181 36.6077 64.2582 36.5566C63.3895 36.4671 60.0297 36.1989 59.3399 36.1605C59.0588 36.135 58.7522 36.0839 58.6756 36.0456C58.4839 35.9178 58.254 36.0839 58.3306 36.2883C58.3562 36.3777 58.3051 36.4927 58.2029 36.531C57.9218 36.646 57.9218 36.646 57.8707 36.25C57.8324 35.905 57.8196 35.905 56.7849 35.8667C56.1078 35.8412 55.7245 35.8795 55.7245 35.9689C55.7245 36.0328 55.8267 36.0967 55.9545 36.0967C56.0695 36.0967 56.3761 36.2244 56.6188 36.3777C56.8615 36.5182 57.2703 36.6588 57.513 36.6843C57.7558 36.6971 58.0368 36.7099 58.1262 36.7226C58.2029 36.7354 58.2795 36.7993 58.2795 36.8759C58.2795 36.9526 58.0751 37.0037 57.8069 36.9909C57.5386 36.9781 56.9765 36.9781 56.5549 36.9909L55.7884 37.0165L56.2994 37.1442C56.5932 37.2209 56.9254 37.4253 57.1042 37.6297L57.3853 38.0001L56.6571 38.1407C56.2483 38.2301 55.8395 38.3323 55.7373 38.3706C55.584 38.4217 55.5712 38.3067 55.6479 37.7063L55.7245 36.9654L55.2519 37.0548C54.9964 37.1059 54.6514 37.2464 54.4854 37.3742C54.2426 37.553 53.9999 37.5913 53.2717 37.5658L52.3519 37.5275L52.237 37.1059C52.0709 36.4544 51.9687 36.4288 51.5854 36.927C51.3938 37.1698 51.1511 37.3742 51.0489 37.3742C50.9084 37.3742 50.8828 37.4508 50.9339 37.6297C50.985 37.7957 50.9595 37.8852 50.8445 37.8852C50.7551 37.8979 48.7366 37.9235 46.3605 37.949C43.9843 37.9746 41.7359 38.064 41.3782 38.1407C41.0077 38.2045 40.5478 38.294 40.3307 38.3195C40.1263 38.3323 40.3307 38.3706 40.8033 38.3834C41.2632 38.3834 41.7359 38.4345 41.8509 38.4728C42.413 38.69 41.8637 38.7794 39.9602 38.7794C37.8395 38.7794 37.4307 38.8688 37.9034 39.2138C38.095 39.3543 38.0184 39.3926 37.3285 39.4565C36.8814 39.5076 36.2554 39.5459 35.9361 39.5459C35.4506 39.5587 35.3867 39.5715 35.5911 39.6992C35.7317 39.7759 36.1149 39.8014 36.5109 39.7631C37.2008 39.6864 37.4052 39.8142 36.9836 40.0441C36.8559 40.108 36.1277 40.1847 35.3484 40.223C33.9559 40.2996 32.4996 40.619 32.193 40.9256C32.1163 41.0023 31.7203 41.0789 31.3243 41.0789C30.941 41.0789 30.4173 41.1428 30.1745 41.2067C29.9318 41.2833 29.0376 41.3983 28.1944 41.4749C27.1852 41.5516 26.4826 41.6793 26.1504 41.8454C25.6777 42.0754 25.3839 42.0881 21.8708 42.0243C18.2171 41.9732 16.748 41.871 15.6749 41.6027C15.3939 41.526 14.6146 41.3472 13.9503 41.2067C12.0213 40.7723 8.55925 38.8816 7.16677 37.5019C5.85095 36.2116 5.68487 35.7901 5.0589 32.2003C4.76507 30.4757 4.73952 30.0541 4.79062 27.9845C4.8545 25.3529 5.02057 24.5864 5.95315 22.6063C7.88217 18.5438 10.7438 16.6787 13.7459 17.5474C15.0617 17.9306 16.4925 18.2117 17.0674 18.2117C17.9872 18.2117 19.8268 18.4927 19.9545 18.6716C20.2228 18.9782 19.6735 19.0804 17.3357 19.1315C14.7679 19.2081 14.1675 19.3103 12.8516 19.9491C11.8935 20.409 11.357 20.9966 10.9354 22.0058L10.731 22.4913L11.3059 23.0023C12.4045 23.986 14.308 24.9441 16.3775 25.5317C16.978 25.7106 18.7537 26.03 20.3378 26.2471C21.9219 26.4643 23.3271 26.707 23.4549 26.7837C23.5954 26.8603 23.8509 26.9498 24.0298 26.9753C24.2086 27.0009 24.924 27.0903 25.6139 27.1797C26.8914 27.333 27.4024 27.6268 26.1887 27.4991C25.6394 27.448 25.5628 27.4608 25.8055 27.563C26.0099 27.6652 26.342 27.6652 26.968 27.5757C27.8623 27.4352 28.5138 27.4863 28.5138 27.6779C28.5138 27.7418 28.4244 27.7929 28.2966 27.7929C28.1816 27.7929 28.1178 27.8185 28.1561 27.8568C28.1944 27.9079 28.7693 27.9845 29.4208 28.0612C32.7423 28.4061 40.7267 29.1982 40.8928 29.1982C41.0077 29.1982 41.1866 29.262 41.2888 29.3259C41.4549 29.4409 41.4549 29.4792 41.2505 29.6325C41.0588 29.7858 41.0972 29.8114 41.6976 29.9391C42.2597 30.0413 42.3874 30.0285 42.5152 29.8625C42.6302 29.6964 42.9879 29.6581 44.5209 29.6581C46.3221 29.6453 46.386 29.6581 46.5138 29.9263C46.6287 30.1818 46.5904 30.2074 46.0028 30.3351C45.6451 30.4118 45.2618 30.4884 45.1468 30.4884C44.4059 30.5523 48.545 30.9739 49.9502 30.9867C50.5379 30.9867 51.7771 31.1016 52.6969 31.2549C54.1277 31.4849 54.8942 31.5232 57.7047 31.5104C59.5315 31.4977 61.7799 31.5488 62.6869 31.6382C63.8367 31.7404 64.5648 31.7404 65.0503 31.651C65.4719 31.5743 65.7785 31.5615 65.8296 31.6382C65.8679 31.7021 66.5577 31.8681 67.3626 32.0214C68.1674 32.162 69.1638 32.3919 69.5854 32.5197C70.4286 32.7879 72.9963 33.2223 74.8998 33.4011C75.5641 33.4778 76.7011 33.695 77.442 33.8994C78.183 34.1165 79.2178 34.372 79.7415 34.4742C81.4023 34.8192 84.4172 35.9689 84.6599 36.3394C84.6982 36.416 85.1454 36.6843 85.6564 36.9526C88.0197 38.1918 89.4378 40.6446 89.821 44.1449C89.8977 44.8859 89.8977 45.2819 89.8082 45.3969C89.6294 45.6013 89.6166 45.6013 90.6386 45.844C91.6606 46.0867 92.6954 46.6488 92.5932 46.9043C92.5549 47.0065 92.491 47.1598 92.4527 47.2492C92.3377 47.5047 93.1936 48.4118 93.7429 48.6034C94.024 48.7056 94.4328 48.91 94.65 49.0505C95.0204 49.2805 95.0715 49.3827 95.0715 49.8809C95.0715 50.328 95.1865 50.6218 95.5825 51.235C95.8636 51.6566 96.2852 52.2059 96.5407 52.4487C97.0389 52.9213 97.1028 53.3174 96.8089 53.9306C96.7067 54.135 96.464 55.1314 96.2852 56.1534C95.9019 58.2485 95.8253 58.389 94.6627 58.9767C93.9346 59.3472 93.8579 59.4238 93.1553 60.4969C92.5676 61.3784 92.6698 61.7233 93.6791 62.4259C94.3561 62.8986 93.5896 62.8092 92.4782 62.2854C91.9033 62.0171 91.469 62.0938 90.7408 62.592C90.2298 62.9497 89.9999 63.0008 88.7862 63.1158L87.9431 63.1797L86.3207 62.0938C85.3753 61.455 84.5705 61.0079 84.3789 61.0079C84.2128 61.0079 83.2802 60.5736 82.3221 60.0242C81.364 59.4877 80.3675 58.9511 80.1248 58.8234C79.7415 58.6318 73.1624 56.7922 72.8558 56.7922C72.7919 56.7922 73.0602 57.5842 73.4435 58.5551C74.5677 61.4039 75.2831 63.9717 75.6535 66.565C76.1645 70.1804 76.9821 74.8177 77.1993 75.4948C77.8764 77.4877 79.0261 79.3273 82.2965 83.5558C85.3753 87.5544 89.0417 92.5111 89.3228 93.0732C89.7571 93.9163 90.6003 97.1612 90.6003 97.966C90.6003 98.1193 90.4342 98.2726 90.1021 98.4003C89.5783 98.6047 89.4505 98.873 89.4505 99.7673C89.4505 100.342 88.8884 101.147 87.7004 102.297C86.8189 103.153 86.6145 103.28 86.0652 103.37C85.0815 103.536 83.3185 103.498 82.6798 103.306C81.3001 102.897 81.2234 102.846 80.9807 102.335C80.8402 102.054 80.5208 101.569 80.2653 101.249C80.0098 100.93 79.5371 100.304 79.205 99.8439C78.4002 98.7069 77.5826 97.9788 76.5733 97.5189C75.7302 97.1356 74.3633 96.2541 72.958 95.1683C71.8849 94.3507 71.0545 93.367 70.4158 92.1789C70.0964 91.5913 69.5343 90.6715 69.1638 90.1477C68.244 88.8191 67.7969 87.8482 67.3881 86.3535C67.0687 85.1782 67.0432 84.8844 67.0176 82.2144C66.9921 80.6303 66.9282 76.4657 66.8643 72.9525C66.7238 66.2329 66.711 66.0413 66.0212 63.3713C65.689 62.0682 63.7217 55.668 63.6195 55.5785C63.5939 55.5402 62.8402 55.4508 61.9587 55.3741C60.579 55.2464 60.1319 55.2592 58.8289 55.4508C57.7302 55.6169 56.9765 55.6424 56.0184 55.5785C54.9708 55.5147 54.7025 55.5274 54.7025 55.668C54.7025 56.2556 55.1752 58.2996 55.6734 59.8709C56.2739 61.7616 58.2668 71.2279 58.7905 74.6261C59.1099 76.7084 59.1355 80.0427 58.8544 82.8021C58.6245 85.0377 58.369 86.1619 57.6536 87.8993C57.1937 89.0363 57.0404 89.2662 56.2994 89.9561C55.4563 90.7481 55.2135 91.1569 55.2135 91.7957C55.2135 92.23 54.2554 93.5842 53.7189 93.9035C53.5272 94.0185 53.1568 94.4273 52.914 94.8233C52.6713 95.2066 52.3519 95.5771 52.2242 95.6537C52.0964 95.7304 51.7387 96.0114 51.4449 96.2797C50.7167 96.944 50.1035 97.1739 48.8771 97.2634C46.9864 97.3783 46.8587 97.3017 44.5336 95.0022C43.2561 93.7375 42.1064 92.741 41.4549 92.3067C40.6373 91.7701 40.3562 91.4891 40.2157 91.1314C39.973 90.5565 38.4911 89.2534 37.4818 88.7424C37.0475 88.5253 36.677 88.2442 36.6004 88.0526C36.5237 87.8865 36.1277 87.4905 35.7189 87.1839C35.3101 86.8773 34.8757 86.4302 34.748 86.1874C34.6075 85.9447 34.3647 85.6381 34.1987 85.5104C34.0326 85.3826 33.7643 85.0377 33.611 84.7694C33.4449 84.4884 33.1767 84.169 33.0106 84.054C32.7551 83.8879 32.7168 83.773 32.7679 83.428C32.8062 83.1598 32.7679 82.9043 32.6529 82.7382C32.474 82.4955 32.4868 82.4699 32.7168 82.4699C32.8701 82.4699 32.985 82.4316 32.985 82.3933C32.985 82.3549 32.4996 81.729 31.8992 81.0008C31.2987 80.2726 30.8133 79.6466 30.8133 79.6083C30.8133 79.57 31.6053 79.9277 32.5762 80.4131C33.5344 80.8858 35.4251 81.7162 36.7537 82.2527C38.095 82.7893 39.8708 83.5175 40.7139 83.8879C42.413 84.6417 42.9879 84.7183 43.55 84.3095C44.3292 83.7474 44.3676 83.5302 44.4825 78.7524C44.6103 73.949 44.7125 72.5821 45.2107 68.2258C45.5045 65.6836 45.5429 64.751 45.5429 61.3017C45.5556 59.1044 45.5173 57.2776 45.479 57.2393C45.3768 57.1371 42.3236 57.4309 41.4293 57.6353C40.9694 57.7375 40.0879 57.993 39.462 58.2102C38.836 58.4146 37.6224 58.7212 36.7664 58.9C35.9233 59.0661 34.8246 59.2961 34.3264 59.3983C33.841 59.5005 32.308 59.7049 30.941 59.8709L28.4627 60.152L27.9389 60.6374C27.6579 60.8929 27.0702 61.3145 26.6231 61.5828C25.7672 62.081 25.665 62.2215 25.4606 63.2819C25.0262 65.4153 25.2817 68.1364 26.1504 71.0363C26.6742 72.7226 26.8786 73.1825 27.7217 74.4855C29.1781 76.7467 29.638 78.2542 29.753 81.1285C29.8168 82.7637 29.8424 82.9681 30.1745 83.5558C30.3662 83.9135 30.5578 84.3478 30.5961 84.5267C30.7111 84.961 30.264 86.6984 29.8679 87.3755C29.7019 87.6693 29.5358 88.0654 29.4847 88.257C29.3569 88.8063 28.3349 89.7389 27.0447 90.5054C26.1504 91.0419 25.4478 91.6296 23.8765 93.1881C22.7523 94.2868 21.4109 95.7048 20.8743 96.3308C19.1625 98.3748 15.956 101.62 15.5855 101.696C15.3939 101.747 14.9978 101.965 14.6912 102.195C13.8609 102.833 13.3499 103.05 12.5578 103.127C12.1618 103.153 11.6252 103.268 11.357 103.37C10.6799 103.625 9.87507 103.6 9.42795 103.306L9.05747 103.05L8.13767 103.561C7.19232 104.072 6.93682 104.149 6.73242 103.945ZM85.5031 44.6687C85.3242 44.5409 85.107 44.4515 85.0176 44.4898C84.7877 44.5793 85.1965 44.8986 85.5542 44.8986C85.7841 44.9114 85.7841 44.8859 85.5031 44.6687ZM76.2923 36.6077C76.4584 36.5055 76.4456 36.4799 76.2412 36.4799C76.1134 36.4799 75.9218 36.3777 75.8324 36.2627C75.6791 36.0456 75.6663 36.0583 75.6535 36.3138C75.6535 36.5438 75.7813 36.6971 76.0368 36.7226C76.0751 36.7226 76.1901 36.6715 76.2923 36.6077ZM54.958 35.9689C55.0602 35.905 55.1113 35.8156 55.0602 35.7773C54.9325 35.6495 54.4343 35.8412 54.5109 35.9817C54.6131 36.1222 54.7153 36.1222 54.958 35.9689ZM70.9651 35.1896C71.5911 35.0619 71.6805 34.998 71.7188 34.7042C71.7572 34.3848 71.7955 34.372 72.4598 34.372C72.843 34.3848 73.5329 34.4231 73.9928 34.4742C74.7976 34.5509 74.6443 34.4487 73.7117 34.2443C73.5073 34.206 73.354 34.1165 73.354 34.0399C73.354 33.9505 73.6351 33.9377 74.1972 34.0016C74.8359 34.0654 75.0276 34.0527 74.9637 33.9377C74.9126 33.8483 74.7593 33.8227 74.6315 33.861C74.5038 33.8994 74.0822 33.8483 73.699 33.7333C73.0219 33.5417 72.9836 33.5417 72.4598 33.8099C72.0127 34.0527 71.7955 34.0782 70.9907 34.0143C70.3902 33.976 70.007 34.0016 69.9176 34.091C69.8154 34.1932 69.6748 34.1549 69.3938 33.9505C69.0616 33.7077 68.87 33.6694 67.7714 33.6822L66.5194 33.695L68.6656 34.1165C69.8537 34.3465 70.8501 34.5764 70.8885 34.6148C71.029 34.7553 70.3902 34.6914 68.1163 34.372C66.8899 34.1932 65.7146 34.0654 65.4974 34.0654C65.293 34.0782 65.5868 34.1549 66.1745 34.2443C67.7458 34.487 69.0105 34.7936 69.5854 35.0747C70.2242 35.3685 70.1092 35.3557 70.9651 35.1896Z\" fill=\"white\"/>\n                    <path d=\"M58.7905 37.3869C58.7905 37.0803 58.9694 36.8632 59.2249 36.8632C59.5187 36.8632 59.672 36.9526 59.9275 37.2847C60.0808 37.4891 60.0553 37.5019 59.4421 37.5019C59.0844 37.5019 58.7905 37.4508 58.7905 37.3869Z\" fill=\"white\"/>\n                    <path d=\"M47.1015 30.2841C47.4847 29.9647 47.9191 29.7858 48.6728 29.6581C49.1582 29.5814 49.1966 29.6964 48.8005 30.0541C48.3279 30.4757 47.9829 30.6034 47.3314 30.6034L46.7182 30.5907L47.1015 30.2841Z\" fill=\"white\"/>\n                    <path d=\"M82.2582 27.9718C82.2199 27.9335 82.2199 27.5119 82.2582 27.0392C82.3349 26.0939 82.1305 25.519 81.4662 24.8164C81.0446 24.382 78.7707 23.2323 77.2632 22.6957C73.8651 21.4949 64.8076 20.5623 52.3775 20.1279C44.687 19.8597 41.2505 19.668 39.973 19.4253C39.4875 19.3359 38.8871 19.2848 38.6699 19.3231C38.44 19.3614 38.2228 19.3231 38.1717 19.2465C38.1206 19.157 37.7374 19.1443 37.0731 19.1954C36.3449 19.2465 36.0511 19.2337 36.0511 19.1187C36.0511 19.0421 35.8467 18.9782 35.5528 18.9782C34.978 18.9782 34.748 18.7738 35.1568 18.6205C35.3484 18.5566 34.8758 18.4289 33.5983 18.2372C31.4521 17.9051 31.5798 17.9051 31.5798 18.1478C31.5798 18.25 31.5287 18.3394 31.4521 18.3394C31.3882 18.3394 31.3243 18.2756 31.3243 18.1989C31.3243 18.0967 31.2604 18.0967 31.1327 18.2117C30.9027 18.4033 30.5578 18.2883 30.5578 18.0201C30.5578 17.7773 30.2384 17.6496 29.0887 17.458C28.6032 17.3685 28.0667 17.2791 27.9134 17.2408C27.7473 17.2152 27.6196 17.2408 27.6196 17.3174C27.6196 17.3813 27.7729 17.4452 27.9773 17.4452C28.5266 17.4452 28.8971 17.5857 28.8971 17.7901C28.8971 17.9434 28.7693 17.969 28.2328 17.8923C27.0319 17.7262 26.4059 17.5218 26.3676 17.2919C26.3421 17.1386 26.4059 17.0619 26.5592 17.0619C26.7509 17.0619 26.7636 17.0364 26.5976 16.9342C26.4954 16.8703 26.291 16.8064 26.1632 16.8064C26.0227 16.8064 25.8183 16.7298 25.7161 16.6404C25.6011 16.5382 24.3619 16.1038 22.9567 15.6695C16.3265 13.5999 13.8481 12.3096 11.4209 9.71631C10.6288 8.87316 9.60681 7.50624 9.60681 7.30184C9.60681 7.09744 10.0028 7.26351 10.1306 7.51901C10.3094 7.86394 11.0632 8.57934 11.7786 9.07756C12.0724 9.28196 12.4684 9.63966 12.6345 9.86961C12.8133 10.0996 13.0177 10.2912 13.0816 10.2912C13.1455 10.2912 13.5415 10.5595 13.9631 10.8788C14.7935 11.5176 16.582 12.5013 16.7864 12.4374C16.863 12.4118 16.6842 12.2202 16.3903 12.0286C15.8155 11.6198 14.9595 10.6106 13.5798 8.70709L12.6728 7.45514V8.13221C12.66 8.74541 12.6473 8.79651 12.494 8.59211C12.3918 8.46436 12.1235 7.81284 11.8935 7.14854C11.5869 6.26706 11.3314 5.76884 10.9226 5.29616C10.2967 4.55521 10.0667 4.17196 10.1689 4.05699C10.2967 3.94201 11.1526 4.82349 11.3825 5.30894C11.4975 5.56444 11.7786 5.99879 12.0085 6.26706L12.4173 6.77806V6.35649C12.4173 5.80716 12.5706 5.83271 13.9248 6.50979C15.9815 7.54456 17.4379 8.01724 18.8048 8.08111C19.5458 8.11944 20.5933 8.28551 21.4876 8.50269C23.4038 8.98814 25.4734 9.34584 27.6196 9.56301C29.357 9.74186 31.171 9.76741 31.4137 9.61411C31.4776 9.57579 32.3719 9.58856 33.3811 9.65244C36.8176 9.86961 38.0184 9.92071 37.9545 9.85684C37.8907 9.79296 31.1582 9.26919 30.4045 9.26919C30.0979 9.26919 30.0468 9.23086 30.1618 9.10311C30.2768 8.96259 30.8644 8.93704 33.1511 8.98814C35.0291 9.02646 36.1533 9.00091 36.4471 8.91149C36.8814 8.77096 38.8488 8.59211 42.3108 8.37494C43.5755 8.29829 44.3931 8.18331 44.8914 8.00446C45.5301 7.78729 47.0503 7.48069 49.4009 7.09744C50.8573 6.85471 51.2278 6.73974 51.7515 6.35649C52.1987 6.02434 52.4414 5.94769 52.9652 5.94769C53.3229 5.93491 53.8722 5.88381 54.1916 5.81994C54.562 5.74329 56.1206 5.79439 58.6628 5.93491C60.8984 6.07544 62.9424 6.12654 63.4534 6.07544C64.8842 5.93491 69.4705 6.15209 71.6039 6.45869C73.1113 6.67586 73.8523 6.85471 74.8871 7.26351C75.628 7.54456 76.5989 7.90226 77.0588 8.05556C78.9623 8.70709 80.3548 9.62689 81.8878 11.2365C83.1908 12.6162 83.4463 13.1656 84.5322 16.7426C85.3626 19.4764 85.3881 19.6042 85.4903 21.4693C85.6436 24.2415 85.4392 24.9186 84.0595 26.1322C83.7146 26.426 83.4463 26.7709 83.4463 26.9115C83.4463 27.6141 82.6287 28.3423 82.2582 27.9718Z\" fill=\"white\"/>\n                    </g>\n                    <defs>\n                    <clipPath id=\"clip0_212_2\">\n                    <rect width=\"104.5\" height=\"104.5\" fill=\"white\"/>\n                    </clipPath>\n                    </defs>\n                </svg>\n            </div>\n            <div class=\"menu__text\">Shikimori</div>\n        </li>");
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
      version: "0.3",
      name: "LME Shikimori",
      description: "Add Shikimori catalogue",
      component: "LMEShikimori"
    };
    Lampa.Manifest.plugins = manifest;
    //Set Style and Template
    Lampa.Template.add('LMEShikimoriStyle', "<style>\n            .LMEShikimori-head.torrent-filter{margin-left:1.5em}.LMEShikimori .card__season{position:absolute;left:-0.8em;top:3.4em;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.LMEShikimori .card__status{position:absolute;left:-0.8em;bottom:1em;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.LMEShikimori.card__season.no-season{display:none}\n        </style>");
    Lampa.Template.add("LMEShikimori-Card", "<div class=\"LMEShikimori card selector layer--visible layer--render\">\n                <div class=\"LMEShikimori card__view\">\n                    <img src=\"{img}\" class=\"LMEShikimori card__img\" />\n                    <div class=\"LMEShikimori card__type\">{type}</div>\n                    <div class=\"LMEShikimori card__vote\">{rate}</div>\n                    <div class=\"LMEShikimori card__season\">{season}</div>\n                    <div class=\"LMEShikimori card__status\">{status}</div>\n                </div>\n                <div class=\"LMEShikimori card__title\">{title}</div>\n            </div>");
    Lampa.Component.add(manifest.component, Component);
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
