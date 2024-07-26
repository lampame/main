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

  function Item(data, typeCat) {
    var item = Lampa.Template.get("lmeMusic_item", {
      thumbnails: data.thumbnails && data.thumbnails[1] ? data.thumbnails[1].url : './img/img_load.svg',
      typeCat: typeCat,
      type: data.type,
      name: data.name,
      artist: data.artist ? data.artist.name : ''
    });
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }

  function Main$2(_x, _x2) {
    return _Main.apply(this, arguments);
  }
  function _Main() {
    _Main = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, itemNumber) {
      var cache, delay, results, i, item, id, lmeMusicHSL, response, result, formattedResult, progress;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cache = new Map();
            delay = function delay(ms) {
              return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
              });
            };
            results = [];
            i = 0;
          case 4:
            if (!(i < data.length)) {
              _context.next = 39;
              break;
            }
            item = data[i];
            id = item.id || item.videoId; // Используем id или videoId
            if (id) {
              _context.next = 10;
              break;
            }
            console.error('LME Music', "\u041D\u0435\u0442 id \u0438\u043B\u0438 videoId \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430:", item);
            return _context.abrupt("continue", 36);
          case 10:
            if (!cache.has(id)) {
              _context.next = 14;
              break;
            }
            results.push(cache.get(id));
            _context.next = 36;
            break;
          case 14:
            _context.prev = 14;
            _context.next = 17;
            return delay(100);
          case 17:
            // Задержка в 1 секунду между запросами
            lmeMusicHSL = Lampa.Storage.field('LMEMusicHSL');
            _context.next = 20;
            return fetch("".concat(lmeMusicHSL && lmeMusicHSL !== 'undefined' ? lmeMusicHSL : 'https://pipedapi.r4fo.com', "/streams/").concat(id));
          case 20:
            response = _context.sent;
            if (response.ok) {
              _context.next = 23;
              break;
            }
            throw new Error('Network response was not ok');
          case 23:
            _context.next = 25;
            return response.json();
          case 25:
            result = _context.sent;
            formattedResult = {
              title: result.title,
              url: result.hls
            };
            results.push(formattedResult);
            cache.set(id, formattedResult);

            // Обновляем прогресс
            progress = Math.floor((i + 1) / data.length * 100);
            Lampa.Noty.show("".concat(Lampa.Lang.translate('LMEM_received'), " ").concat(progress, "% (").concat(i + 1, "/").concat(data.length, ")"));
            _context.next = 36;
            break;
          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](14);
            console.error('LME Music', "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0434\u043B\u044F id: ".concat(id), _context.t0);
          case 36:
            i++;
            _context.next = 4;
            break;
          case 39:
            // Воспроизводим выбранный элемент и весь плейлист
            if (results[itemNumber]) {
              Lampa.Player.play(results[itemNumber]);
            }
            Lampa.Player.playlist(results);
          case 41:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[14, 33]]);
    }));
    return _Main.apply(this, arguments);
  }

  function Main$1(playlistId) {
    var settings = {
      "url": "https://delicious-verene-gwynnbleiidd-fe8dd6c5.koyeb.app/playlists/".concat(playlistId),
      "method": "GET",
      "timeout": 0
    };
    $.ajax(settings).done(function (response) {
      Main$2(response.videos, 0);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      Lampa.Noty.show('Бядаб бядося');
      console.log('LME Music', jqXHR, textStatus, errorThrown);
    });
  }

  function Artist$1(data) {
    var item = Lampa.Template.get("lmeMusic_searchitem", {
      thumbnails: data.thumbnailUrl ? data.thumbnailUrl : data.thumbnails && data.thumbnails[1] && data.thumbnails[1].url ? data.thumbnails[1].url : './img/img_load.svg',
      subscribers: data.subscribers ? data.subscribers : '',
      name: data.name
    });
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }
  function Songs(data) {
    var item = Lampa.Template.get("lmeMusic_songitem", {
      thumbnails: data.thumbnails && data.thumbnails[1] ? data.thumbnails[1].url : './img/img_load.svg',
      type: data.type,
      name: data.name,
      artist: data.artist ? data.artist.name : ''
    });
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }
  var SearchItem = {
    Artist: Artist$1,
    Songs: Songs
  };

  function SearchResult(component) {
    var network = new Lampa.Reguest();
    var result = component.response;
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var items = [];
    var html = $("<div class='lmeMusic-module'></div>");
    var head = $("<div class='lmeMusic-head torrent-filter'><div class='lmeMusic-head__home simple-button simple-button--filter selector'>Home</div><div class='lmeMusic-head__search simple-button simple-button--filter selector'>".concat(Lampa.Lang.translate('LMEM_searchPerformer'), "</div></div>"));
    var body = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var active, last;
    this.create = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.activity.loader(true);
            this.build(result);
            return _context.abrupt("return", this.render());
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    this.build = function (result) {
      scroll.minus();
      //Put header
      this.headerAction();
      //Put Data
      this.body(result);
      //Put blank
      scroll.append(head);
      scroll.append(body);
      //Put all in page
      html.append(scroll.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.headerAction = function () {
      var searchElement = head.find('.lmeMusic-head__search');
      searchElement.on('hover:enter', function () {
        Lampa.Input.edit({
          free: true,
          nosave: true,
          nomic: true,
          value: ''
        }, function (val) {
          if (val) {
            GetArtists.Search(val);
          } else {
            Lampa.Controller.toggle('content');
          }
        });
      });
      var homeElement = head.find('.lmeMusic-head__home');
      homeElement.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'LME Music',
          component: 'lmeMusic',
          page: 1
        });
      });
    };
    this.body = function (data) {
      data.forEach(function (artist_data) {
        var item = new SearchItem.Artist(artist_data);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                GetArtists.Info(artist_data.artistId);
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
        body.append(item.render());
        items.push(item);
      });
    };
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
  function Page(component) {
    var network = new Lampa.Reguest();
    var result = component.response;
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var items = [];
    var html = $("<div class='lmeMusic-module items-line'></div>");
    var head = $("<div class='lmeMusic-head torrent-filter'><div class='lmeMusic-head__home simple-button simple-button--filter selector'>Home</div><div class='lmeMusic-head__search simple-button simple-button--filter selector'>".concat(Lampa.Lang.translate('LMEM_searchPerformer'), "</div></div>"));
    var body = $('<div class="lmeMusic-catalog--list category-full"></div>');
    //Headers
    var featuredOnHead = $('<div class="lmeMusic-catalog--list items-line__head items-line__title">Featured On</div>');
    var topAlbumsHead = $('<div class="lmeMusic-catalog--list  items-line__head items-line__title">Top Albums</div>');
    var topSinglesHead = $('<div class="lmeMusic-catalog--list  items-line__head items-line__title">Top Singles</div>');
    var topVideosHead = $('<div class="lmeMusic-catalog--list  items-line__head items-line__title">Top Videos</div>');
    var similarArtistsHead = $('<div class="lmeMusic-catalog--list  items-line__head items-line__title">Similar Artists</div>');
    //similarArtists
    //Category
    var featuredOn = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var topAlbums = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var topSingles = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var topVideos = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var similarArtists = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var active, last;
    this.create = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            this.activity.loader(true);
            this.build(result);
            return _context3.abrupt("return", this.render());
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    this.build = function (result) {
      scroll.minus();
      //Put header
      this.headerAction();
      //Put Songs
      //this.body(result)
      //Put featuredOn
      this.featuredOn(result);
      //Put topVideos
      //this.topVideos(result)
      //Put topAlbums
      this.topAlbums(result);
      //Put topSingles
      this.topSingles(result);
      //Put similarArtists
      this.similarArtists(result);
      //Put fragment
      var fragment = $(document.createDocumentFragment());
      fragment.append(head);
      fragment.append(body);
      fragment.append(featuredOnHead);
      fragment.append(featuredOn);
      fragment.append(topAlbumsHead);
      fragment.append(topAlbums);
      fragment.append(topSinglesHead);
      fragment.append(topSingles);
      fragment.append(topVideosHead);
      fragment.append(topVideos);
      fragment.append(similarArtistsHead);
      fragment.append(similarArtists);
      scroll.append(fragment);
      //Put all in page
      html.append(scroll.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.headerAction = function () {
      var searchElement = head.find('.lmeMusic-head__search');
      searchElement.on('hover:enter', function () {
        Lampa.Input.edit({
          free: true,
          nosave: true,
          nomic: true,
          value: ''
        }, function (val) {
          if (val) {
            GetArtists.Search(val);
          } else {
            Lampa.Controller.toggle('content');
          }
        });
      });
      var homeElement = head.find('.lmeMusic-head__home');
      homeElement.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'LME Music',
          component: 'lmeMusic',
          page: 1
        });
      });
    };
    //Video
    this.body = function (data) {
      data.topSongs.forEach(function (videoItem) {
        videoItem.url = "https://www.youtube.com/watch?v=".concat(videoItem.videoId);
        videoItem.title = videoItem.name;
        var item = new SearchItem.Songs(videoItem);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Main$2(data.topSongs, items.indexOf(item));
              case 2:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })));
        body.append(item.render());
        items.push(item);
      });
    };
    this.topVideos = function (data) {
      data.topVideos.forEach(function (videoItem) {
        var item = new SearchItem.Songs(videoItem);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Main$2(data.topVideos, items.indexOf(item));
              case 2:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })));
        topVideos.append(item.render());
        items.push(item);
      });
    };
    //Playlist
    this.featuredOn = function (data) {
      data.featuredOn.forEach(function (videoItem) {
        var item = new SearchItem.Songs(videoItem);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                Main$1(videoItem.playlistId);
              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        })));
        featuredOn.append(item.render());
        items.push(item);
      });
    };
    this.topAlbums = function (data) {
      data.topAlbums.forEach(function (videoItem) {
        var item = new SearchItem.Songs(videoItem);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                Main$1(videoItem.playlistId);
              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        })));
        topAlbums.append(item.render());
        items.push(item);
      });
    };
    this.topSingles = function (data) {
      data.topSingles.forEach(function (videoItem) {
        var item = new SearchItem.Songs(videoItem);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                Main$1(videoItem.playlistId);
              case 1:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        })));
        topSingles.append(item.render());
        items.push(item);
      });
    };
    //similarArtists
    this.similarArtists = function (data) {
      data.similarArtists.forEach(function (artist_data) {
        var item = new SearchItem.Artist(artist_data);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                GetArtists.Info(artist_data.artistId);
              case 1:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        })));
        similarArtists.append(item.render());
        items.push(item);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.background = function () {
      Lampa.Background.immediately(result.thumbnails[result.thumbnails.length - 1]);
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
  var Artist = {
    SearchResult: SearchResult,
    Page: Page
  };

  function Search(val) {
    var settings = {
      "url": "https://delicious-verene-gwynnbleiidd-fe8dd6c5.koyeb.app/search/artists?query=".concat(val),
      "method": "GET",
      "timeout": 0
    };
    $.ajax(settings).done(function (response) {
      Lampa.Activity.push({
        url: '',
        title: 'LME Music',
        component: 'lmeMusicSearch',
        response: response,
        page: 1
      });
    }).fail(function (jqXHR, textStatus, errorThrown) {
      Lampa.Noty.show('Бядаб бядося');
      console.log('LME Music', jqXHR, textStatus, errorThrown);
    });
  }
  function Info(val) {
    var settings = {
      "url": "https://delicious-verene-gwynnbleiidd-fe8dd6c5.koyeb.app/artists/".concat(val),
      "method": "GET",
      "timeout": 0
    };
    $.ajax(settings).done(function (response) {
      Lampa.Activity.push({
        url: '',
        title: 'LME Music ' + response.name,
        component: 'lmeMusicArtist',
        response: response,
        page: 1
      });
    }).fail(function (jqXHR, textStatus, errorThrown) {
      Lampa.Noty.show('Бядаб бядося');
      console.log('LME Music', jqXHR, textStatus, errorThrown);
    });
  }
  var GetArtists = {
    Search: Search,
    Info: Info
  };

  function Component() {
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var items = [];
    var html = $("<div class='lmeMusic-module'></div>");
    var body = "<span>a</span>";
    var head = $("<div class='lmeMusic-head torrent-filter'><div class='lmeMusic-head__search simple-button simple-button--filter selector'>".concat(Lampa.Lang.translate('LMEM_searchPerformer'), "</div><div class='lmeMusic-head__server simple-button simple-button--filter selector'>").concat(Lampa.Lang.translate('LMEM_server'), "</div></div>"));
    var blockOneBody = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var blockTwoBody = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var blockThreeBody = $('<div class="lmeMusic-catalog--list category-full"></div>');
    var active, last;
    this.create = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var settings;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.activity.loader(true);
            settings = {
              "url": "https://delicious-verene-gwynnbleiidd-fe8dd6c5.koyeb.app/home",
              "method": "GET",
              "timeout": 0
            };
            $.ajax(settings).done(function (response) {
              this.build(response);
            }.bind(this)).fail(function (jqXHR, textStatus, errorThrown) {
              this.errorClient(jqXHR, textStatus, errorThrown);
            }.bind(this));
            return _context.abrupt("return", this.render());
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    this.errorClient = function (jqXHR, textStatus, errorThrown) {
      scroll.append(body);
      //Put all in page
      html.append(scroll.render());
      body.append(error_body);
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.build = function (result) {
      //Const
      var blockOne = $("<div class=\"lmeMusic-catalog--list  items-line__head items-line__title\">".concat(result[0].title, "</div>"));
      var blockTwo = $("<div class=\"lmeMusic-catalog--list  items-line__head items-line__title\">".concat(result[1].title, "</div>"));
      var blockThree = $("<div class=\"lmeMusic-catalog--list  items-line__head items-line__title\">".concat(result[2].title, "</div>"));
      scroll.minus();
      //Put header
      this.headerAction();
      //Put Data
      //this.body(result)
      this.blockOneBody(result[0]);
      this.blockTwoBody(result[1]);
      this.blockThreeBody(result[2]);
      //Put blank
      scroll.append(head);
      scroll.append(blockOne);
      scroll.append(blockOneBody);
      scroll.append(blockTwo);
      scroll.append(blockTwoBody);
      scroll.append(blockThree);
      scroll.append(blockThreeBody);
      //Put all in page
      html.append(scroll.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.headerAction = function () {
      var searchElement = head.find('.lmeMusic-head__search');
      searchElement.on('hover:enter', function () {
        Lampa.Input.edit({
          free: true,
          nosave: true,
          nomic: true,
          value: ''
        }, function (val) {
          if (val) {
            GetArtists.Search(val);
          } else {
            Lampa.Controller.toggle('content');
          }
        });
      });
      var serverElement = head.find('.lmeMusic-head__server');
      serverElement.on('hover:enter', function () {
        var settings = {
          "url": "https://piped-instances.kavin.rocks/",
          "method": "GET",
          "timeout": 0
        };
        $.ajax(settings).done(function (response) {
          // Проверяем, что response является массивом
          if (Array.isArray(response)) {
            // Проходим по каждому элементу массива
            response.forEach(function (item) {
              if (item.name) {
                item.title = "".concat(item.api_url === Lampa.Storage.field('LMEMusicHSL') ? "✓" : "", " ").concat(item.cdn ? "[CDN] " : "", " ").concat(item.name, " [").concat(item.locations, "]"); // Переименовываем name в title
                delete item.name; // Удаляем старое свойство name
              }
            });
          }
          // Показываем выбор сервера
          Lampa.Select.show({
            title: Lampa.Lang.translate('LMEM_selectServer'),
            items: response,
            onBack: function onBack() {
              Lampa.Controller.toggle("content");
            },
            onSelect: function onSelect(a) {
              Lampa.Storage.set('LMEMusicHSL', a.api_url);
              Lampa.Activity.push({
                url: '',
                title: 'LME Music',
                component: 'lmeMusic',
                page: 1
              });
            }
          });
        }).fail(function () {
          // Показываем уведомление об ошибке
          Lampa.Noty.show("Бяда, бядося");
        });
      }).on('hover:long', function () {
        localStorage.removeItem('LMEMusicHSL');
        Lampa.Activity.push({
          url: '',
          title: 'LME Music',
          component: 'lmeMusic',
          page: 1
        });
        Lampa.Noty.show('Server reset to default');
      });
    };
    this.blockOneBody = function (data) {
      data.contents.forEach(function (videoItem) {
        if (videoItem.type === 'SONG') {
          videoItem.url = "https://www.youtube.com/watch?v=".concat(videoItem.videoId);
          videoItem.title = "".concat(videoItem.artist.name, " - ").concat(videoItem.name);
        }
        var item = new Item(videoItem, '');
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(videoItem.type === 'SONG')) {
                  _context2.next = 5;
                  break;
                }
                _context2.next = 3;
                return Main$2(data.contents, items.indexOf(item));
              case 3:
                _context2.next = 6;
                break;
              case 5:
                Main$1(videoItem.playlistId);
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
        blockOneBody.append(item.render());
        items.push(item);
      });
    };
    this.blockTwoBody = function (data) {
      data.contents.forEach(function (videoItem) {
        if (videoItem.type === 'SONG') {
          videoItem.url = "https://www.youtube.com/watch?v=".concat(videoItem.videoId);
          videoItem.title = "".concat(videoItem.artist.name, " - ").concat(videoItem.name);
        }
        var item = new Item(videoItem, '');
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(videoItem.type === 'SONG')) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 3;
                return Main$2(data.contents, videoItem);
              case 3:
                _context3.next = 6;
                break;
              case 5:
                Main$1(videoItem.playlistId);
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })));
        blockTwoBody.append(item.render());
        items.push(item);
      });
    };
    this.blockThreeBody = function (data) {
      data.contents.forEach(function (videoItem) {
        if (videoItem.type === 'SONG') {
          videoItem.url = "https://www.youtube.com/watch?v=".concat(videoItem.videoId);
          videoItem.title = "".concat(videoItem.artist.name, " - ").concat(videoItem.name);
        }
        var item = new Item(videoItem, '');
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (videoItem.type === 'SONG') {
                  Lampa.Player.play(videoItem);
                  Lampa.Player.playlist(data.contents);
                } else {
                  Main$1(videoItem.playlistId);
                }
              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })));
        blockThreeBody.append(item.render());
        items.push(item);
      });
    };
    this.body = function (data) {
      data.forEach(function (typeCat) {
        typeCat.contents.forEach(function (videoItem) {
          if (videoItem.type === 'SONG') {
            videoItem.url = "https://www.youtube.com/watch?v=".concat(videoItem.videoId);
            videoItem.title = "".concat(videoItem.artist.name, " - ").concat(videoItem.name);
          }
        });
      });
      data.forEach(function (typeCat) {
        typeCat.contents.forEach(function (videoItem) {
          var item = new Item(videoItem, typeCat.title);
          item.render().on("hover:focus", function () {
            last = item.render()[0];
            active = items.indexOf(item);
            scroll.update(items[active].render(), true);
          }).on("hover:enter", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (videoItem.type === 'SONG') {
                    Lampa.Player.play(videoItem);
                    Lampa.Player.playlist(typeCat.contents);
                  } else {
                    Main$1(videoItem.playlistId);
                  }
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })));
          body.append(item.render());
          items.push(item);
        });
      });
    };
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

  function component(manifest) {
    var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0,0,300,150\">\n                    <g fill=\"#ffffff\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g transform=\"scale(5.12,5.12)\"><path d=\"M8.03125,8.45703c-0.26088,0.00188 -0.52094,0.1055 -0.71094,0.3125c-3.925,4.272 -6.32031,9.97147 -6.32031,16.23047c0,6.259 2.39531,11.95847 6.32031,16.23047c0.38,0.414 1.03659,0.41262 1.43359,0.01563l2.12891,-2.12891c0.383,-0.383 0.38058,-0.99253 0.01758,-1.39453c-3.045,-3.37 -4.90039,-7.83366 -4.90039,-12.72266c0,-4.889 1.85539,-9.35266 4.90039,-12.72266c0.363,-0.402 0.36542,-1.01053 -0.01758,-1.39453l-2.12891,-2.12891c-0.1985,-0.1985 -0.46178,-0.29875 -0.72266,-0.29687zM41.96875,8.45703c-0.26112,-0.00162 -0.52416,0.09838 -0.72266,0.29688l-2.13086,2.13086c-0.383,0.383 -0.38058,0.99058 -0.01758,1.39258c3.046,3.369 4.90234,7.83366 4.90234,12.72266c0,4.889 -1.85539,9.35266 -4.90039,12.72266c-0.363,0.402 -0.36542,1.01053 0.01758,1.39453l2.12891,2.12891c0.397,0.397 1.05359,0.39738 1.43359,-0.01562c3.925,-4.272 6.32031,-9.97147 6.32031,-16.23047c0,-6.259 -2.39531,-11.95847 -6.32031,-16.23047c-0.19,-0.207 -0.44981,-0.31087 -0.71094,-0.3125zM35.625,14.83789c-0.26987,-0.01338 -0.54541,0.08251 -0.75391,0.29101l-2.13086,2.13086c-0.359,0.359 -0.39827,0.93717 -0.07227,1.32617c1.456,1.738 2.33203,3.97506 2.33203,6.41406c0,2.439 -0.87603,4.67511 -2.33203,6.41211c-0.326,0.389 -0.28674,0.96717 0.07227,1.32617l2.13086,2.13281c0.417,0.417 1.09642,0.37959 1.48242,-0.06641c2.272,-2.629 3.64648,-6.05669 3.64648,-9.80469c0,-3.748 -1.37448,-7.17569 -3.64648,-9.80469c-0.193,-0.223 -0.45864,-0.34405 -0.72852,-0.35742zM14.375,14.83984c-0.26988,0.01337 -0.53552,0.13442 -0.72852,0.35742c-2.272,2.628 -3.64648,6.05473 -3.64648,9.80273c0,3.748 1.37448,7.17569 3.64648,9.80469c0.386,0.446 1.06542,0.48341 1.48242,0.06641l2.13086,-2.13086c0.359,-0.359 0.39827,-0.93717 0.07227,-1.32617c-1.456,-1.738 -2.33203,-3.97506 -2.33203,-6.41406c0,-2.439 0.87603,-4.67511 2.33203,-6.41211c0.326,-0.389 0.28674,-0.96717 -0.07227,-1.32617l-2.13086,-2.13281c-0.2085,-0.2085 -0.48403,-0.30244 -0.75391,-0.28906zM25,19c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c3.314,0 6,-2.686 6,-6c0,-3.314 -2.686,-6 -6,-6z\"></path></g></g>\n                </svg>\n            </div>\n            <div class=\"menu__text\">LME Music</div>\n        </li>");
    button.on("hover:enter", function () {
      Lampa.Activity.push({
        url: '',
        title: 'LME Music',
        component: 'lmeMusic',
        page: 1
      });
    });
    $(".menu .menu__list").eq(0).append(button);
  }

  function Main() {
    Lampa.Lang.add({
      LMEM_searchPerformer: {
        en: "Search performer",
        ru: "Поиск исполнителя",
        uk: "Пошук виконавця"
      },
      LMEM_server: {
        en: "Server",
        ru: "Сервер",
        uk: "Сервер"
      },
      LMEM_selectServer: {
        en: "Select server",
        ru: "Выбор сервера",
        uk: "Вибір сервера"
      },
      LMEM_received: {
        en: "Received",
        ru: "Получено",
        uk: "Отримано"
      }
    });
  }

  function add() {
    //Add Lang
    Main();
    //Add style and Component's
    Lampa.Template.add('lmemusicStyle', "\n        <style>\n            .lmeMusic-head.torrent-filter{padding:0 2em}.lmeMusic-head__server{margin-left:auto}.lmeMusic-item{margin-left:1em;margin-bottom:1em;width:13%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeMusic-item__imgbox{background-color:#3e3e3e;padding-bottom:100%;position:relative;-webkit-border-radius:.3em;border-radius:.3em}.lmeMusic-item__type{top:.5em;left:.5em}.lmeMusic-item__typeCat{bottom:.5em;left:.5em}.lmeMusic-item__type,.lmeMusic-item__typeCat{position:absolute;background-color:#eee;padding:.1em .3em;font-size:.7em;font-weight:bold;color:#292d32;-webkit-border-radius:.25em;border-radius:.25em}.lmeMusic-item__img{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-border-radius:.4em;border-radius:.4em}.lmeMusic-item__name,.lmeMusic-item__artist{font-size:1.1em;margin-top:.8em}.lmeMusic-item.focus .lmeMusic-item__imgbox::after{border:solid .26em #fff;content:'';display:block;position:absolute;left:-0.5em;top:-0.5em;right:-0.5em;bottom:-0.5em;-webkit-border-radius:.8em;border-radius:.8em}\n        </style>\n    ");
    Lampa.Template.add("lmeMusic_item", "<div class=\"selector lmeMusic-item\">\n                <div class=\"lmeMusic-item__imgbox\">\n                    <img class=\"lmeMusic-item__img\" src=\"{thumbnails}\"/>\n                    <div class=\"lmeMusic-item__type\">{type}</div>\n                    <div class=\"lmeMusic-item__typeCat\">{typeCat}</div>\n                </div>\n                <div class=\"lmeMusic-item__name\">{name}</div>\n                <div class=\"lmeMusic-item__artist\">{artist}</div>\n            </div>");
    Lampa.Template.add("lmeMusic_searchitem", "<div class=\"selector lmeMusic-item\">\n                <div class=\"lmeMusic-item__imgbox\">\n                    <img class=\"lmeMusic-item__img\" src=\"{thumbnails}\"/>\n                    <div class=\"lmeMusic-item__typeCat\">{subscribers}</div>\n                </div>\n                <div class=\"lmeMusic-item__artist\">{name}</div>\n            </div>");
    Lampa.Template.add("lmeMusic_songitem", "<div class=\"selector lmeMusic-item\">\n                <div class=\"lmeMusic-item__imgbox\">\n                    <img class=\"lmeMusic-item__img\" src=\"{thumbnails}\"/>\n                    <div class=\"lmeMusic-item__type\">{type}</div>\n                </div>\n                <div class=\"lmeMusic-item__name\">{name}</div>\n                <div class=\"lmeMusic-item__artist\">{artist}</div>\n            </div>");
    Lampa.Manifest.plugins = {
      type: "other",
      version: "0.2",
      author: '@lme_chat',
      name: "LME Music",
      description: "Music content from YouTube",
      component: "lmeMusic"
    };
    Lampa.Component.add('lmeMusic', Component);
    Lampa.Component.add('lmeMusicSearch', Artist.SearchResult);
    Lampa.Component.add('lmeMusicArtist', Artist.Page);
    component();
    $('body').append(Lampa.Template.get('lmemusicStyle', {}, true));
  }
  function startPlugin() {
    window.plugin_lmelm_ready = true;
    if (window.appready) add();else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") add();
      });
    }
  }
  if (!window.plugin_lmelm_ready) startPlugin();

})();
