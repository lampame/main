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
      Lampa.Template.add('lmeRadioRecord_style', "<style>@charset 'UTF-8';.lmeRadioRecordItem{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.lmeRadioRecord-item{width:8em;margin-left:1em;margin-bottom:.5em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-item__imgbox{background-color:#3e3e3e;padding-bottom:83%;position:relative;-webkit-border-radius:.3em;border-radius:.3em}.lmeRadioRecord-item__img{position:absolute;top:0;left:0;width:100%;height:100%}.lmeRadioRecord-item__name{font-size:1.1em;margin-top:.8em}.lmeRadioRecord-item.focus .lmeRadioRecord-item__imgbox:after{border:solid .26em #fff;content:'';display:block;position:absolute;left:-0.5em;top:-0.5em;right:-0.5em;bottom:-0.5em;-webkit-border-radius:.8em;border-radius:.8em}.lmeRadioRecord-item+.lmeRadioRecord-item{margin-left:1em}@-webkit-keyframes sound{0%{height:.1em}100%{height:1em}}@keyframes sound{0%{height:.1em}100%{height:1em}}@-webkit-keyframes sound-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sound-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.lmeRadioRecord-player{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;border-radius:.3em;padding:.2em .8em;background-color:#3e3e3e}.lmeRadioRecord-player__name{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:1em;white-space:nowrap;position:relative;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;max-width:8em}.lmeRadioRecord-player__name span{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;white-space:nowrap;width:-webkit-calc(1% + 50px);width:calc(1% + 50px);-webkit-animation-name:scrollingAnimation;animation-name:scrollingAnimation;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.lmeRadioRecord-player__name span p.lmeBit{background-color:#fff;margin:auto 10% auto;color:#000;padding:.2em .4em;font-size:.75em;-webkit-border-radius:.5em;border-radius:.5em;font-weight:700}@-webkit-keyframes scrollingAnimation{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out}}@keyframes scrollingAnimation{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out}}@media screen and (max-width:385px){.lmeRadioRecord-player__name{display:none}}.lmeRadioRecord-player__button{position:relative;width:1.5em;height:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player__button i{display:block;width:.2em;background-color:#fff;margin:0 .1em;-webkit-animation:sound 0ms -800ms linear infinite alternate;animation:sound 0ms -800ms linear infinite alternate;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player__button i:nth-child(1){-webkit-animation-duration:474ms;animation-duration:474ms}.lmeRadioRecord-player__button i:nth-child(2){-webkit-animation-duration:433ms;animation-duration:433ms}.lmeRadioRecord-player__button i:nth-child(3){-webkit-animation-duration:407ms;animation-duration:407ms}.lmeRadioRecord-player__button i:nth-child(4){-webkit-animation-duration:458ms;animation-duration:458ms}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button{-webkit-border-radius:100%;border-radius:100%;border:.2em solid #fff}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button i{display:none}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button:after{content:'';width:.5em;height:.5em;background-color:#fff}.lmeRadioRecord-player.loading .lmeRadioRecord-player__button:before{content:'';display:block;border-top:.2em solid #fff;border-left:.2em solid transparent;border-right:.2em solid transparent;border-bottom:.2em solid transparent;-webkit-animation:sound-loading 1s linear infinite;animation:sound-loading 1s linear infinite;width:.9em;height:.9em;-webkit-border-radius:100%;border-radius:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player.loading .lmeRadioRecord-player__button i{display:none}.lmeRadioRecord-player.focus{background-color:#fff;color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button{border-color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button i,.lmeRadioRecord-player.focus .lmeRadioRecord-player__button:after{background-color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button:before{border-top-color:#000}</style>");
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
