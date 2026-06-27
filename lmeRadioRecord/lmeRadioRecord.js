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
        _prepare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!(audio.canPlayType('audio/vnd.apple.mpegurl') || url.indexOf('.aacp') > 0)) {
                  _context.n = 2;
                  break;
                }
                _context.n = 1;
                return load();
              case 1:
                _context.n = 6;
                break;
              case 2:
                if (!(Hls.isSupported() && url.indexOf('.aacp') > 0)) {
                  _context.n = 5;
                  break;
                }
                _context.p = 3;
                hls = new Hls();
                hls.attachMedia(audio);
                hls.loadSource(url);
                return _context.a(2, new Promise(function (resolve, reject) {
                  hls.on(Hls.Events.MANIFEST_LOADED, resolve);
                  hls.on(Hls.Events.ERROR, reject);
                }));
              case 4:
                _context.p = 4;
                _context.v;
                Lampa.Noty.show('Ошибка в загрузке потока');
                _context.n = 6;
                break;
              case 5:
                _context.n = 6;
                return load();
              case 6:
                return _context.a(2);
            }
          }, _callee, null, [[3, 4]]);
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
        _start = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.p = 0;
                _context2.n = 1;
                return audio.play();
              case 1:
                console.log('Radio', 'start playing');
                _context2.n = 3;
                break;
              case 2:
                _context2.p = 2;
                _t2 = _context2.v;
                Lampa.Noty.show("Play promise error: ".concat(_t2.message));
              case 3:
                return _context2.a(2);
            }
          }, _callee2, null, [[0, 2]]);
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
