(function () {
    'use strict';

    function item(data) {
      var item = Lampa.Template.get('lmeRadioRecord_item', {
        name: data.title
      });
      var img = item.find('img')[0];
      img.onerror = function () {
        img.src = './img/img_broken.svg';
      };
      img.src = data.icon_gray;
      this.render = function () {
        return item;
      };
      this.destroy = function () {
        img.onerror = function () {};
        img.onload = function () {};
        img.src = '';
        item.remove();
      };
    }

    function component() {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250
      });
      var player = window.radio_player;
      var items = [];
      var html = $('<div class="lmeRadioRecord"></div>');
      var body = $('<div class="lmeRadioRecordItem"></div>');
      var active = '';
      var last = '';
      this.create = function () {
        this.activity.loader(true);
        network["native"](Lampa.Platform.is('webos') || Lampa.Platform.is('tizen') ? '' : Lampa.Storage.field('proxy_other') === false ? '' : 'https://lampaplugins.github.io/store/stations.json', this.build.bind(this), function () {
          var empty = new Lampa.Empty();
          html.append(empty.render());
          this.start = empty.start;
          this.activity.loader(false);
          this.activity.toggle();
        });
        return this.render();
      };
      this.build = function (data) {
        scroll.minus();
        var stations = data.result.stations.sort(function (a, b) {
          return a.sort - b.sort;
        });
        this.append(stations);
        scroll.append(body);
        html.append(scroll.render());
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.append = function (element) {
        element.forEach(function (el) {
          var item$1 = new item(el);
          item$1.render().on('hover:focus', function () {
            last = item$1.render()[0];
            active = items.indexOf(item$1);
            scroll.update(items[active].render(), true);
          }).on('hover:enter', function () {
            player.play(el);
          });
          body.append(item$1.render());
          items.push(item$1);
        });
      };
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.background = function () {
        Lampa.Background.immediately('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBlZaLrsMgDENXxAf3/9XHFdXNZLm2YZHQymPk4CS0277v9+ffrut62nEcn/M8nzb69cxj6le1+75f/RqrZ9fatm3F9wwMR7yhawilNke4Gis/7j9srQbdaVFBnkcQ1WrfgmIIBcTrvgqqsKiTzvpOQbUnAykVW4VVqZXyyDllYFSKx9QaVrO7nGJIB63g+FAq/xhcHWBYdwCsmAtvFZUKE0MlVZWCT4idOlyhTp3K35R/6Nzlq0uBnsKWlEzgSh1VGJxv6rmpXMO7EK+XWUPnDFRWqitQFeY2UyZVryuWlI8ulLgGf19FooAUwC9gCWLcwzWPb7Wa60qdlZxjx6ooUuUqVQsK+y1VoAJyBeJAVsLJeYmg/RIXdG2kPhwYPBUQQyYF0XC8lwP3MTCrYAXB88556peCbUUZV7WccwkUQfCZC4PXdA5hKhSVhythZqjZM0J39w5m8BRadKAcrsIpNZsLIYdOqcZ9hExhZ1MH+QL+ciFzXzmYhZr/M6yUUwp2dp5U4naZDwAF5JRSefdScJZ3SkU0nl8xpaAy+7ml1EqvMXSs1HRrZ9bc3eZUSXmGa/mdyjbmqyX7A9RaYQa9IRJ0AAAAAElFTkSuQmCC');
      };
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        this.background();
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            Navigator.move('right');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            if (Navigator.canmove('down')) Navigator.move('down');
          },
          back: this.back
        });
        Lampa.Controller.toggle('content');
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

    function player() {
      var html = Lampa.Template.get('lmeRadioRecord_player', {});
      var audio = new Audio();
      var url = '';
      var played = false;
      var hls = '';
      audio.addEventListener("play", function (event) {
        played = true;
        html.toggleClass('loading', false);
      });
      function prepare() {
        return _prepare.apply(this, arguments);
      }
      function _prepare() {
        _prepare = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(audio.canPlayType('audio/vnd.apple.mpegurl') || url.indexOf('.aacp') > 0)) {
                  _context.next = 5;
                  break;
                }
                _context.next = 3;
                return load();
              case 3:
                _context.next = 20;
                break;
              case 5:
                if (!(Hls.isSupported() && url.indexOf('.aacp') > 0)) {
                  _context.next = 18;
                  break;
                }
                _context.prev = 6;
                hls = new Hls();
                hls.attachMedia(audio);
                hls.loadSource(url);
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  hls.on(Hls.Events.MANIFEST_LOADED, resolve);
                  hls.on(Hls.Events.ERROR, reject);
                }));
              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                Lampa.Noty.show('Ошибка в загрузке потока');
              case 16:
                _context.next = 20;
                break;
              case 18:
                _context.next = 20;
                return load();
              case 20:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[6, 13]]);
        }));
        return _prepare.apply(this, arguments);
      }
      function load() {
        audio.src = url;
        audio.load();
        return new Promise(function (resolve) {
          resolve(start());
        });
      }
      function start() {
        return _start.apply(this, arguments);
      }
      function _start() {
        _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return audio.play();
              case 3:
                console.log('Radio', 'start playing');
                _context2.next = 9;
                break;
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                Lampa.Noty.show("Play promise error: ".concat(_context2.t0.message));
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 6]]);
        }));
        return _start.apply(this, arguments);
      }
      function play() {
        html.toggleClass('loading', true);
        html.toggleClass('stop', false);
        prepare().then(function () {
          return start();
        })["catch"](function (error) {
          Lampa.Noty.show("Prepare promise error: ".concat(error.message));
        });
        return Promise.resolve(); // Возвращаем пустой промис для корректной работы цепочки промисов
      }
      function stop() {
        played = false;
        html.toggleClass('stop', true);
        html.toggleClass('loading', false);
        if (hls) {
          hls.destroy();
          hls = false;
        }
        audio.src = '';
      }
      html.on('hover:enter', function () {
        if (played) stop();else if (url) play();
      });
      this.create = function () {
        $('.head__actions .open--search').before(html);
      };
      this.play = function (data) {
        stop();
        url = data.stream_320 ? data.stream_320 : data.stream_128 ? data.stream_128 : data.stream_hls.replace('playlist.m3u8', '96/playlist.m3u8');
        html.find('.lmeRadioRecord-player__name').html("<span>".concat(data.title, " <p class=\"lmeBit\">").concat(data.stream_320 ? '320kbps' : data.stream_128 ? '128kbps' : 'HLS', "</p></span>"));
        html.toggleClass('hide', false);
        play();
      };
    }

    function startPlugin() {
      window.lmeRadio = true;
      Lampa.Component.add('lmeRadioRecord', component);
      Lampa.Template.add('lmeRadioRecord_item', "<div class=\"selector lmeRadioRecord-item\">\n        <div class=\"lmeRadioRecord-item__imgbox\">\n            <img class=\"lmeRadioRecord-item__img\" />\n        </div>\n\n        <div class=\"lmeRadioRecord-item__name\">{name}</div>\n    </div>");
      Lampa.Template.add('lmeRadioRecord_player', "<div class=\"selector lmeRadioRecord-player stop hide\">\n        <div class=\"lmeRadioRecord-player__name\">Radio Record</div>\n\n        <div class=\"lmeRadioRecord-player__button\">\n            <i></i>\n            <i></i>\n            <i></i>\n            <i></i>\n        </div>\n    </div>");
      Lampa.Template.add('lmeRadioRecord_style', "<style>@charset 'UTF-8';.lmeRadioRecordItem{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.lmeRadioRecord-item{width:8em;margin-left:1em;margin-bottom:.5em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-item__imgbox{background-color:#3e3e3e;padding-bottom:83%;position:relative;-webkit-border-radius:.3em;border-radius:.3em}.lmeRadioRecord-item__img{position:absolute;top:0;left:0;width:100%;height:100%}.lmeRadioRecord-item__name{font-size:1.1em;margin-top:.8em}.lmeRadioRecord-item.focus .lmeRadioRecord-item__imgbox:after{border:solid .26em #fff;content:'';display:block;position:absolute;left:-0.5em;top:-0.5em;right:-0.5em;bottom:-0.5em;-webkit-border-radius:.8em;border-radius:.8em}.lmeRadioRecord-item+.lmeRadioRecord-item{margin-left:1em}@-webkit-keyframes sound{0%{height:.1em}100%{height:1em}}@-o-keyframes sound{0%{height:.1em}100%{height:1em}}@keyframes sound{0%{height:.1em}100%{height:1em}}@-webkit-keyframes sound-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes sound-loading{0%{-o-transform:rotate(0);transform:rotate(0)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sound-loading{0%{-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.lmeRadioRecord-player{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;border-radius:.3em;padding:.2em .8em;background-color:#3e3e3e}.lmeRadioRecord-player__name{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-right:1em;white-space:nowrap;position:relative;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;max-width:8em}.lmeRadioRecord-player__name span{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;white-space:nowrap;width:-webkit-calc(1% + 50px);width:calc(1% + 50px);-webkit-animation-name:scrollingAnimation;-o-animation-name:scrollingAnimation;animation-name:scrollingAnimation;-webkit-animation-duration:5s;-o-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;-o-animation-direction:alternate;animation-direction:alternate}.lmeRadioRecord-player__name span p.lmeBit{background-color:#fff;margin:auto 10% auto;color:#000;padding:.2em .4em;font-size:.75em;-webkit-border-radius:.5em;border-radius:.5em;font-weight:700}@-webkit-keyframes scrollingAnimation{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:opacity .2s linear,visibility .1s linear,-o-transform .5s ease-in-out;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out,-o-transform .5s ease-in-out}}@-o-keyframes scrollingAnimation{from{-o-transform:translateX(0);transform:translateX(0)}to{-o-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:opacity .2s linear,visibility .1s linear,-o-transform .5s ease-in-out;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out,-o-transform .5s ease-in-out}}@keyframes scrollingAnimation{from{-webkit-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:opacity .2s linear,visibility .1s linear,-o-transform .5s ease-in-out;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out,-o-transform .5s ease-in-out}}@media screen and (max-width:385px){.lmeRadioRecord-player__name{display:none}}.lmeRadioRecord-player__button{position:relative;width:1.5em;height:1.5em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player__button i{display:block;width:.2em;background-color:#fff;margin:0 .1em;-webkit-animation:sound 0ms -800ms linear infinite alternate;-o-animation:sound 0ms -800ms linear infinite alternate;animation:sound 0ms -800ms linear infinite alternate;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player__button i:nth-child(1){-webkit-animation-duration:474ms;-o-animation-duration:474ms;animation-duration:474ms}.lmeRadioRecord-player__button i:nth-child(2){-webkit-animation-duration:433ms;-o-animation-duration:433ms;animation-duration:433ms}.lmeRadioRecord-player__button i:nth-child(3){-webkit-animation-duration:407ms;-o-animation-duration:407ms;animation-duration:407ms}.lmeRadioRecord-player__button i:nth-child(4){-webkit-animation-duration:458ms;-o-animation-duration:458ms;animation-duration:458ms}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button{-webkit-border-radius:100%;border-radius:100%;border:.2em solid #fff}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button i{display:none}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button:after{content:'';width:.5em;height:.5em;background-color:#fff}.lmeRadioRecord-player.loading .lmeRadioRecord-player__button:before{content:'';display:block;border-top:.2em solid #fff;border-left:.2em solid transparent;border-right:.2em solid transparent;border-bottom:.2em solid transparent;-webkit-animation:sound-loading 1s linear infinite;-o-animation:sound-loading 1s linear infinite;animation:sound-loading 1s linear infinite;width:.9em;height:.9em;-webkit-border-radius:100%;border-radius:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player.loading .lmeRadioRecord-player__button i{display:none}.lmeRadioRecord-player.focus{background-color:#fff;color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button{border-color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button i,.lmeRadioRecord-player.focus .lmeRadioRecord-player__button:after{background-color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button:before{border-top-color:#000}</style>");
      window.radio_player = new player();
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
          var lmeRadio = $("\n                    <li class=\"menu__item selector\" data-action=\"lmeRadioRecord\">\n                      <div class=\"menu__ico\">\n                        <svg width=\"61\" height=\"61\" viewBox=\"0 0 61 61\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M47.6255 10.6335H22.6255C20.3006 10.6335 19.1381 10.6335 18.1843 10.8891C15.5962 11.5826 13.5745 13.6042 12.881 16.1924C12.6255 17.1461 12.6255 18.3566 12.6255 20.6815M12.6255 20.6815C13.4112 20.6335 14.3798 20.6335 15.6255 20.6335H44.6255C47.4257 20.6335 48.826 20.6335 49.8955 21.1785C50.8362 21.6579 51.6012 22.4228 52.0805 23.3636C52.6255 24.4331 52.6255 25.8333 52.6255 28.6335V42.6335C52.6255 45.4338 52.6255 46.834 52.0805 47.9035C51.6012 48.8443 50.8362 49.6093 49.8955 50.0885C48.826 50.6335 47.4257 50.6335 44.6255 50.6335H15.6255C12.8252 50.6335 11.4251 50.6335 10.3555 50.0885C9.41471 49.6093 8.64981 48.8443 8.17046 47.9035C7.62549 46.834 7.62549 45.4338 7.62549 42.6335V28.6335C7.62549 25.8333 7.62549 24.4331 8.17046 23.3636C8.64981 22.4228 9.41471 21.6579 10.3555 21.1785C10.9493 20.876 11.645 20.7414 12.6255 20.6815ZM35.1255 30.6335H45.1255M35.1255 40.6335H45.1255M25.1255 35.6335C25.1255 38.395 22.8869 40.6335 20.1255 40.6335C17.3641 40.6335 15.1255 38.395 15.1255 35.6335C15.1255 32.872 17.3641 30.6335 20.1255 30.6335C22.8869 30.6335 25.1255 32.872 25.1255 35.6335Z\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        </svg>\n                      </div>\n                      <div class=\"menu__text\">Radio Record</div>\n                    </li>\n                ");
          lmeRadio.on('hover:enter', function () {
            Lampa.Activity.push({
              url: '',
              title: 'Radio Record',
              component: 'lmeRadioRecord',
              page: 1
            });
          });
          $('.menu .menu__list').eq(0).append(lmeRadio);
          $('body').append(Lampa.Template.get('lmeRadioRecord_style', {}, true));
          window.radio_player.create();
        }
      });
    }
    if (!window.lmeRadio) startPlugin();

})();
