(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
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
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
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

  var CLIENT_ID = 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b';
  var CLIENT_SECRET = 'a8cf25070f8c9a609782deecf56197f99e96084b080c1c86fccf9dc682465f1b';
  var API_URL = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://api.trakt.tv';
  function requestApi(method, url) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var unauthorized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var settings = {
      url: API_URL + url,
      type: method,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': CLIENT_ID
      },
      data: JSON.stringify(params)
    };
    if (!unauthorized && Lampa.Storage.get('trakt_token')) {
      settings.headers['Authorization'] = 'Bearer ' + Lampa.Storage.get('trakt_token');
    }
    return $.ajax(settings);
  }
  function formatTraktResults(items) {
    return {
      results: items.map(function (item) {
        var media = item.movie || item.show;
        return {
          component: 'full',
          id: media.ids.tmdb,
          title: media.title,
          original_title: media.title,
          release_date: media.year + '',
          vote_average: media.rating || 0,
          poster: "https://".concat(media.images.poster) || '',
          image: "https://".concat(media.images.fanart) || '',
          method: item.movie ? 'movie' : 'tv'
        };
      })
    };
  }
  var api = {
    get: function get(url) {
      var unauthorized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return requestApi('GET', url, {}, unauthorized);
    },
    watchlist: function watchlist(params, oncomplete, onerror) {
      requestApi('GET', '/sync/watchlist/movies,shows/added/asc?extended=images').then(function (response) {
        oncomplete(formatTraktResults(response));
      })["catch"](function (error) {
        onerror(error);
      });
    },
    calendars: function calendars(params, oncomplete, onerror) {
      requestApi('GET', '/calendars/my/shows/2025-05-18/7?extended=images').then(function (response) {
        oncomplete(formatTraktResults(response));
      })["catch"](function (error) {
        onerror(error);
      });
    },
    upnext: function upnext(params, oncomplete, onerror) {
      requestApi('GET', '/sync/watched/shows?extended=images,full,seasons').then(function (watchedResponse) {
        var watched = Array.isArray(watchedResponse) ? watchedResponse : [];
        Promise.all(watched.map(function (item) {
          return requestApi('GET', "/shows/".concat(item.show.ids.slug, "/progress/watched?extended=full")).then(function (progress) {
            return _objectSpread2(_objectSpread2({}, item), {}, {
              progress: progress
            });
          })["catch"](function () {
            return item;
          });
        })).then(function (shows) {
          var watching = shows.filter(function (item) {
            if (!item.progress) return false;

            // Загальна кількість епізодів
            var aired = item.progress.aired;

            // Кількість переглянутих епізодів
            var watched = item.progress.completed;

            // Пропускаємо тільки якщо немає даних про кількість епізодів
            return aired && aired > watched;
          });
          var results = watching.map(function (item) {
            var _item$show$images, _item$show$images2;
            // Отримуємо дату наступного епізоду
            var next_episode = item.progress.next_episode;
            var air_date = next_episode ? next_episode.first_aired : '';
            return {
              component: 'full',
              id: item.show.ids.tmdb || item.show.ids.trakt,
              title: item.show.title,
              original_title: item.show.original_title || item.show.title,
              release_date: item.show.year ? String(item.show.year) : '',
              vote_average: item.show.rating || 0,
              poster: Array.isArray((_item$show$images = item.show.images) === null || _item$show$images === void 0 ? void 0 : _item$show$images.poster) ? "https://".concat(item.show.images.poster[0]) : '',
              image: Array.isArray((_item$show$images2 = item.show.images) === null || _item$show$images2 === void 0 ? void 0 : _item$show$images2.fanart) ? "https://".concat(item.show.images.fanart[0]) : '',
              method: 'tv',
              release_quality: "".concat(item.progress.completed, "/").concat(item.progress.aired),
              air_date: air_date,
              status: item.show.status
            };
          });

          // Сортуємо за датою виходу наступного епізоду (від нових до старих)
          results.sort(function (a, b) {
            var dateA = new Date(a.air_date).getTime();
            var dateB = new Date(b.air_date).getTime();
            if (!a.air_date) return 1; // Якщо немає дати - в кінець
            if (!b.air_date) return -1; // Якщо немає дати - в кінець

            return dateB - dateA;
          });
          oncomplete({
            results: results
          });
        });
      })["catch"](onerror);
    },
    auth: {
      login: function login() {
        return requestApi('POST', '/oauth/device/code', {
          client_id: CLIENT_ID
        }, true);
      },
      poll: function poll(device_code) {
        return requestApi('POST', '/oauth/device/token', {
          code: device_code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }, true);
      },
      logout: function logout() {
        Lampa.Storage.set('trakt_token', null);
        Lampa.Storage.set('trakt_refresh_token', null);
      }
    },
    refresh: function refresh() {
      return requestApi('POST', '/oauth/token', {
        refresh_token: Lampa.Storage.get('trakt_refresh_token'),
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token'
      }, true).then(function (response) {
        Lampa.Storage.set('trakt_token', response.access_token);
        Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
        return response;
      });
    },
    addToWatchlist: function addToWatchlist(params, oncomplete, onerror) {
      var data = {
        movies: [],
        shows: []
      };
      if (params.method === 'movie') {
        data.movies.push({
          ids: {
            tmdb: params.id
          }
        });
      } else {
        data.shows.push({
          ids: {
            tmdb: params.id
          }
        });
      }
      requestApi('POST', '/sync/watchlist', data).then(function (response) {
        oncomplete(response);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    removeFromWatchlist: function removeFromWatchlist(params, oncomplete, onerror) {
      var data = {
        movies: [],
        shows: []
      };
      if (params.method === 'movie') {
        data.movies.push({
          ids: {
            tmdb: params.id
          }
        });
      } else {
        data.shows.push({
          ids: {
            tmdb: params.id
          }
        });
      }
      requestApi('POST', '/sync/watchlist/remove', data).then(function (response) {
        oncomplete(response);
      })["catch"](function (error) {
        onerror(error);
      });
    },
    inWatchlist: function inWatchlist(params, oncomplete, onerror) {
      var type = params.method === 'movie' ? 'movies' : 'shows';
      var url = "/sync/watchlist/".concat(type, "?extended=full");
      requestApi('GET', url).then(function (response) {
        var found = response.find(function (item) {
          var _item$movie, _item$show;
          return ((_item$movie = item.movie) === null || _item$movie === void 0 ? void 0 : _item$movie.ids.tmdb) === params.id || ((_item$show = item.show) === null || _item$show === void 0 ? void 0 : _item$show.ids.tmdb) === params.id;
        });
        oncomplete(!!found);
      })["catch"](function (error) {
        onerror(error);
      });
    }
  };

  function insertUserInfoBlock(body, user, stats) {
    // Видаляємо попередній блок, якщо є
    body.find('.trakt-user-info-block').remove();
    var html = $('<div class="trakt-user-info-block settings-param"></div>');
    if (user) {
      var minutes = 0;
      if (stats) {
        var _stats$movies, _stats$episodes;
        var movieMinutes = ((_stats$movies = stats.movies) === null || _stats$movies === void 0 ? void 0 : _stats$movies.minutes) || 0;
        var episodeMinutes = ((_stats$episodes = stats.episodes) === null || _stats$episodes === void 0 ? void 0 : _stats$episodes.minutes) || 0;
        minutes = movieMinutes + episodeMinutes;
      }
      var funnyLine = '';
      if (minutes > 0) {
        // Наприклад, у Lampa.Lang має бути trakttvHumorMinutes з плейсхолдером {time}
        funnyLine = "<span style=\"color:#f39c12;\">".concat(Lampa.Lang.translate('trakttvHumorMinutes').replace('{time}', minutes), "</span>");
      }
      html.append("<div class=\"settings-param__name\"><b>Trakt.TV User</b></div>");
      html.append("<div class=\"settings-param__value\">Username: ".concat(user.username, " ").concat(user.vip ? 'VIP' : '', "</div><br />"));
      html.append("<div class=\"settings-param__value\">".concat(funnyLine, "</div><br />"));
      if (stats) {
        var _stats$movies2, _stats$movies3, _stats$episodes2, _stats$episodes3;
        html.append("\n                <div class=\"settings-param__value\">\n                    <b>Movies:</b>\n                    ".concat(Lampa.Lang.translate('trakttvStatWatched'), ": ").concat(((_stats$movies2 = stats.movies) === null || _stats$movies2 === void 0 ? void 0 : _stats$movies2.watched) || 0, ", \n                    ").concat(Lampa.Lang.translate('trakttvStatMinutes'), ": ").concat(((_stats$movies3 = stats.movies) === null || _stats$movies3 === void 0 ? void 0 : _stats$movies3.minutes) || 0, "\n                </div><br />\n                <div class=\"settings-param__value\">\n                    <b>Episodes:</b>\n                    ").concat(Lampa.Lang.translate('trakttvStatWatched'), ": ").concat(((_stats$episodes2 = stats.episodes) === null || _stats$episodes2 === void 0 ? void 0 : _stats$episodes2.watched) || 0, ", \n                    ").concat(Lampa.Lang.translate('trakttvStatMinutes'), ": ").concat(((_stats$episodes3 = stats.episodes) === null || _stats$episodes3 === void 0 ? void 0 : _stats$episodes3.minutes) || 0, "\n                </div>\n            "));
      }
    } else {
      html.append("<div>Not authorized</div>");
    }

    // Вставляємо перед кнопкою Logout
    body.find('.settings-param[data-name="trakt_logout"]').before(html);
  }
  function fetchAndShowUserInfo(body) {
    // Отримаємо обидва запити паралельно
    Promise.all([api.get('/users/me'), api.get('/users/me/stats')]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        user = _ref2[0],
        stats = _ref2[1];
      insertUserInfoBlock(body, user, stats);
    })["catch"](function () {
      insertUserInfoBlock(body, null, null);
    });
  }
  function main() {
    Lampa.Settings.listener.follow('open', function (e) {
      if (e.name == 'trakt') {
        if (Lampa.Storage.get('trakt_token')) {
          fetchAndShowUserInfo(e.body);
          api.refresh().then(function () {
            $('.settings-param__status', e.body).removeClass('active error wait').addClass('active');
          })["catch"](function () {
            $('.settings-param__status', e.body).removeClass('active error wait').addClass('error');
          });
        } else {
          insertUserInfoBlock(e.body, null, null);
        }
      }
    });
    Lampa.SettingsApi.addComponent({
      component: 'trakt',
      name: 'Trakt.TV',
      icon: "<svg style=\"filter:invert(0);\" fill=\"#ffffff\" viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg>"
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_login',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogin')
      },
      onRender: function onRender(item) {
        var status = $('<div class="settings-param__status"></div>');
        item.find('.settings-param__value').append(status);
        if (!Lampa.Storage.get('trakt_token')) {
          item.show();
          status.removeClass('active error wait').addClass('wait');
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        if (Lampa.Storage.get('trakt_token')) return;
        api.auth.login().then(function (response) {
          var modal = $("<div class=\"about\">\n                        <div class=\"about__text\">".concat(response.verification_url, "</div>\n                        <div class=\"about__text\">Code: ").concat(response.user_code, "</div>\n                    </div>"));
          Lampa.Modal.open({
            title: 'Trakt Auth',
            html: modal,
            size: 'small',
            onBack: function onBack() {
              Lampa.Modal.close();
              Lampa.Controller.toggle('settings_component');
            }
          });
          pollAuth(response);
        })["catch"](function (err) {
          Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_logout',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvLogout')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) {
          item.show();
        } else {
          item.hide();
        }
      },
      onChange: function onChange() {
        api.auth.logout();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvLogoutNoty'));
        Lampa.Settings.update();
      }
    });
  }
  function pollAuth(data) {
    var interval = setInterval(function () {
      api.auth.poll(data.device_code).then(function (response) {
        clearInterval(interval);
        Lampa.Storage.set('trakt_token', response.access_token);
        Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
        Lampa.Modal.close();
        Lampa.Settings.update();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthOk'));
      })["catch"](function (err) {
        if (err.status == 400) {
          // Keep polling
          return;
        }
        clearInterval(interval);
        Lampa.Modal.close();
        Lampa.Noty.show(Lampa.Lang.translate('trakttvAuthError'));
      });
    }, (data.interval + 1) * 1000);
  }
  var config = {
    main: main
  };

  var _Lampa = Lampa,
    InteractionCategory = _Lampa.InteractionCategory;
  function baseComponent(object, type) {
    var comp = new InteractionCategory(object);
    comp.create = function () {
      api[type](object, this.build.bind(this), this.empty.bind(this));
    };
    comp.cardRender = function (object, element, card) {
      card.onMenu = false;
      card.onEnter = function () {
        Lampa.Activity.push(card.data);
      };
    };
    return comp;
  }
  function watchlist$1(object) {
    return new baseComponent(object, 'watchlist');
  }
  function upnext(object) {
    return new baseComponent(object, 'upnext');
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext
  };

  function Main() {
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
      },
      trakttv_WatchlistSort: {
        ru: "Сортировка watchlist",
        en: "Sort watchlist",
        uk: "Сортування watchlist"
      },
      trakttvLogin: {
        ru: "Войти в Trakt.TV",
        en: "Login to Trakt.TV",
        uk: "Увійти в Trakt.TV"
      },
      trakttvLogout: {
        ru: "Выйти из Trakt.TV",
        en: "Logout from Trakt.TV",
        uk: "Вийти з Trakt.TV"
      },
      trakttvLogoutNoty: {
        ru: "Вы вышли из Trakt.TV",
        en: "You have logged out from Trakt.TV",
        uk: "Ви вийшли з Trakt.TV"
      },
      trakttvHumorMinutes: {
        ru: "Потрачено {time} минут на просмотр! Уже почти Netflix-чемпион",
        en: "Spent {time} minutes watching! Almost a Netflix champion",
        uk: "Витрачено {time} хвилин на перегляд! Ти вже майже Netflix-чемпіон"
      },
      trakttvStatPlays: {
        ru: "просмотров",
        en: "plays",
        uk: "переглядів"
      },
      trakttvStatWatched: {
        ru: "просмотрено",
        en: "watched",
        uk: "переглянуто"
      },
      trakttvStatMinutes: {
        ru: "минут",
        en: "minutes",
        uk: "хвилин"
      },
      trakttv_no_series: {
        ru: "Нет сериалов",
        en: "No series",
        uk: "Немає серіалів"
      },
      trakttv_episodes_on: {
        ru: "Серии на",
        en: "Episodes on",
        uk: "Серії на"
      }
    });
  }

  /**
   * Утиліти для TraktTV timetable
   */

  /**
   * Повертає сьогоднішню дату у форматі YYYY-MM-DD
   */
  function getTodayString() {
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = String(now.getMonth() + 1).padStart(2, '0');
    var dd = String(now.getDate()).padStart(2, '0');
    return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
  }

  /**
   * Нормалізує URL постера
   * @param {Array<string>} posterArr
   * @returns {string}
   */
  function normalizePoster(posterArr) {
    if (!Array.isArray(posterArr) || !posterArr[0]) return '';
    var url = posterArr[0];
    if (url.startsWith('http')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    if (url.startsWith('walter-')) return 'https://' + url;
    return url;
  }

  function TraktTimetableAll() {
    var _this2 = this;
    var Scroll = Lampa.Scroll;
    var Activity = Lampa.Activity;
    var Modal = Lampa.Modal;
    var Template = Lampa.Template;
    var Empty = Lampa.Empty;
    this.activity = null;
    var scroll = new Scroll({
      mask: true,
      over: true,
      step: 300
    });
    var html = $('<div></div>');
    var body = $('<div class="timetable"></div>');
    var last;
    var DAYS = 31;
    var episodeTypes = [{
      key: 'series_finale',
      color: '#8d6e63'
    }, {
      key: 'season_finale',
      color: '#e74c3c'
    }, {
      key: 'mid_season_finale',
      color: '#fbc02d'
    }, {
      key: 'series_premiere',
      color: '#40b3ff'
    }, {
      key: 'season_premiere',
      color: '#29b6f6'
    }, {
      key: 'mid_season_premiere',
      color: '#7e57c2'
    }, {
      key: 'standard',
      color: '#aaa'
    }];
    function groupEpisodesByDate(episodes) {
      var grouped = {};
      episodes.forEach(function (ep) {
        if (!grouped[ep.air_date]) grouped[ep.air_date] = [];
        grouped[ep.air_date].push(ep);
      });
      return grouped;
    }
    function groupEpisodesByShow(episodes) {
      var byShow = {};
      episodes.forEach(function (ep) {
        var sid = ep.card.id;
        if (!byShow[sid]) byShow[sid] = {
          card: ep.card,
          episodes: []
        };
        byShow[sid].episodes.push(ep);
      });
      return byShow;
    }
    function prepareTimetableData(traktData) {
      var shows = {};
      traktData.forEach(function (item) {
        var tmdbId = item.show.ids.tmdb;
        if (!tmdbId) return;
        var posterUrl = '';
        if (item.show.images && Array.isArray(item.show.images.poster)) {
          posterUrl = normalizePoster(item.show.images.poster);
        }
        if (!shows[tmdbId]) {
          shows[tmdbId] = {
            id: tmdbId,
            season: item.episode.season,
            episodes: [],
            card: {
              id: tmdbId,
              name: item.show.title,
              poster: posterUrl,
              source: 'tmdb'
            }
          };
        }
        shows[tmdbId].episodes.push({
          air_date: item.first_aired ? item.first_aired.slice(0, 10) : '',
          season_number: item.episode.season,
          episode_number: item.episode.number,
          episode_type: item.episode.episode_type,
          name: item.episode.title,
          still_path: '',
          card: shows[tmdbId].card
        });
      });
      return Object.values(shows).flatMap(function (show) {
        return show.episodes.map(function (ep) {
          return _objectSpread2(_objectSpread2({}, ep), {}, {
            card: show.card
          });
        });
      });
    }
    function fetchTraktCalendar() {
      return _fetchTraktCalendar.apply(this, arguments);
    }
    function _fetchTraktCalendar() {
      _fetchTraktCalendar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var dateString;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              dateString = getTodayString();
              _context2.prev = 1;
              _context2.next = 4;
              return api.get("/calendars/my/shows/".concat(dateString, "/").concat(DAYS, "?extended=images,full"));
            case 4:
              return _context2.abrupt("return", _context2.sent);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](1);
              Lampa.Noty.show(Lampa.Lang.translate('trakttv_calendar_error') || 'Trakt Calendar load error');
              return _context2.abrupt("return", []);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 7]]);
      }));
      return _fetchTraktCalendar.apply(this, arguments);
    }
    this.create = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this = this;
      var traktData, episodes, groupedByDate, startDate, dates, i, d, y, m, day, hasAny;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (this.activity) this.activity.loader(true);
            _context.next = 3;
            return fetchTraktCalendar();
          case 3:
            traktData = _context.sent;
            episodes = prepareTimetableData(traktData);
            groupedByDate = groupEpisodesByDate(episodes);
            startDate = new Date();
            dates = [];
            for (i = 0; i < DAYS; i++) {
              d = new Date(startDate);
              d.setDate(startDate.getDate() + i);
              y = d.getFullYear();
              m = String(d.getMonth() + 1).padStart(2, '0');
              day = String(d.getDate()).padStart(2, '0');
              dates.push("".concat(y, "-").concat(m, "-").concat(day));
            }
            hasAny = false;
            dates.forEach(function (date) {
              if ((groupedByDate[date] || []).length) hasAny = true;
              _this.append(date, groupedByDate[date] || []);
            });
            if (!hasAny) this.empty();
            scroll.minus(); // scroll готовий до рендеру
            scroll.append(body); // додаємо body в scroll
            html.append(scroll.render()); // додаємо scroll в html

            if (this.activity) this.activity.loader(false);

            // Зберігаємо посилання для контролера
            this.body = body;
            this.scroll = scroll;
            this.html = html;

            // Відразу активуємо фокус
            if (this.activity && typeof this.activity.toggle === 'function') {
              this.activity.toggle();
            }
            return _context.abrupt("return", this.render());
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    this.empty = function () {
      var empty = new Empty({
        descr: Lampa.Lang.translate('trakttv_no_upcoming') || 'No upcoming episodes'
      });
      html.append(empty.render());
      _this2.start = empty.start;
      if (_this2.activity) _this2.activity.loader(false);
    };
    this.append = function (date, eps) {
      var item = $("\n            <div class=\"timetable__item selector\">\n                <div class=\"timetable__inner\">\n                    <div class=\"timetable__date\">".concat(date, "</div>\n                    <div class=\"timetable__body\"></div>\n                </div>\n            </div>\n        "));
      if (eps.length) {
        var byShow = groupEpisodesByShow(eps);
        Object.values(byShow).forEach(function (show) {
          var card = show.card;
          var typesSet = _toConsumableArray(new Set(show.episodes.map(function (ep) {
            return ep.episode_type;
          }).filter(Boolean)));
          var foundType = episodeTypes.find(function (typeObj) {
            return typesSet.includes(typeObj.key);
          }) || episodeTypes[episodeTypes.length - 1];
          var mainTypeKey = foundType.key;
          var mainTypeColor = foundType.color;
          item.find('.timetable__body').append("\n                    <div>\n                        <span title=\"".concat(mainTypeKey, "\" style=\"display:inline-block;width:0.9em;height:0.9em;border-radius:0.2em;margin-right:0.3em;background:").concat(mainTypeColor, ";vertical-align:middle\"></span>\n                        ").concat(card.name || '', "\n                    </div>\n                "));
        });
        item.addClass('timetable__item--any');
      } else {
        item.find('.timetable__body').append("<div class=\"timetable__empty\">".concat(Lampa.Lang.translate('trakttv_no_series') || 'No series', "</div>"));
      }
      item.on('hover:focus', function () {
        last = $(this)[0];
        scroll.update($(this)); // ВАЖЛИВО! Оновлення скролу
      }).on('hover:hover', function () {
        last = $(this)[0];
      }).on('hover:enter', function () {
        last = $(this)[0];
        if (eps.length) {
          var _byShow = groupEpisodesByShow(eps);
          var modal = $('<div></div>');
          Object.values(_byShow).forEach(function (show) {
            var card = show.card;
            var noty = Template.get('notice_card', {
              time: date,
              title: card.name,
              descr: show.episodes.map(function (ep) {
                return "S: <b>".concat(ep.season_number, "</b> E: <b>").concat(ep.episode_number, "</b> \u2014 ").concat(ep.name);
              }).join('<br>')
            });
            noty.find('.notice__img').remove();
            if (card.poster) {
              noty.find('.notice__left').css('margin-right', '5em');
              noty.find('.notice__left').prepend("<img src=\"".concat(card.poster, "\" style=\"max-width:120px;max-height:170px;display:block;margin-bottom:1em;\">"));
            }
            noty.on('hover:enter', function () {
              Modal.close();
              Activity.push({
                url: '',
                component: 'full',
                id: card.id,
                method: 'tv',
                card: card,
                source: card.source
              });
            });
            modal.append(noty);
          });
          Modal.open({
            title: "".concat(Lampa.Lang.translate('trakttv_episodes_on') || 'Episodes on', " ").concat(date),
            size: 'medium',
            html: modal,
            onBack: function onBack() {
              Modal.close();
              Lampa.Controller.toggle('content');
            }
          });
        }
      });
      body.append(item);
    };
    this.back = function () {
      Activity.backward();
    };
    this.start = function () {
      if (this.activity) this.activity.loader(false);
      Lampa.Controller.add('content', {
        link: this,
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          if (!last) {
            last = body.find('.timetable__item.selector').get(0);
          }
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        right: function right() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('right')) Navigator.move('right');else Navigator.move('right');
        },
        up: function up() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        down: function down() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');
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
      scroll.destroy();
      html.remove();
    };
  }

  function addWatchlistButton(card) {
    var button = document.createElement('div');
    button.className = 'full-start__button selector watchlist-button';
    button.innerHTML = "\n        <svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>\n    ";

    // Перевіряємо чи є в списку
    api.inWatchlist(card.movie, function (isAdded) {
      updateButtonStyle(button, isAdded);
    }, function () {
      button.style.display = 'none';
    });

    // Додаємо обробник кліку
    button.addEventListener('hover:enter', function () {
      var isAdded = button.classList.contains('added');
      if (isAdded) {
        api.removeFromWatchlist(card.movie, function () {
          Lampa.Noty.show('Видалено з watchlist');
          updateButtonStyle(button, false);
        }, function () {
          return Lampa.Noty.show('Помилка при видаленні');
        });
      } else {
        api.addToWatchlist(card.movie, function () {
          Lampa.Noty.show('Додано до watchlist');
          updateButtonStyle(button, true);
        }, function () {
          return Lampa.Noty.show('Помилка при додаванні');
        });
      }
    });
    return button;
  }
  function updateButtonStyle(button, isAdded) {
    if (isAdded) {
      button.classList.add('added');
      button.style.color = '#37ff54';
    } else {
      button.classList.remove('added');
      button.style.color = '';
    }
  }
  var watchlist = {
    addWatchlistButton: addWatchlistButton
  };

  function startPlugin() {
    window.plugin_trakt_ready = true;
    // Фонове оновлення токена при старті
    if (Lampa.Storage.get('trakt_refresh_token')) {
      api.refresh()["catch"](function () {});
    }
    // Добавляем компоненты
    Lampa.Component.add('trakt_watchlist', function (object) {
      return new Catalog.watchlist(object);
    });
    Lampa.Component.add('trakt_upnext', function (object) {
      return new Catalog.upnext(object);
    });

    // Додаємо новий компонент
    Lampa.Component.add('trakt_timetable_all', TraktTimetableAll);
    //Добавляем переводы
    Main();
    // Следим за готовностью приложения
    Lampa.Listener.follow('app', function (e) {
      if (e.type === 'ready') {
        config.main();
        addMenuItems();
      }
    });

    // Додаємо кнопку watchlist на картку
    Lampa.Listener.follow('full', function (e) {
      if (e.type === 'complite' && Lampa.Storage.get('trakt_token')) {
        var button = watchlist.addWatchlistButton(e.data);
        e.object.activity.render().find('.full-start-new__buttons').append(button);
      }
    });
  }
  function addMenuItems() {
    var watchlist = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n        <div class=\"menu__text\">Watchlist</div>\n    </li>");
    var upnext = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n        <div class=\"menu__text\">Up Next</div>\n    </li>");
    var timetable = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">\n         <div class=\"menu__ico\"><svg><svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>Trakt icon</title><path fill=\"currentColor\" d=\"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79 22.79 17.95 22.79 12 17.95 1.211 12 1.211zm-7.11 17.32c1.756 1.92 4.294 3.113 7.11 3.113 1.439 0 2.801-.313 4.027-.876l-6.697-6.68-4.44 4.443zm14.288-.067c1.541-1.71 2.484-3.99 2.484-6.466 0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076 9.164 9.15h.009zm-9.877-8.429L4.227 15.09l-.679-.68 5.337-5.336 6.23-6.225c-.978-.328-2.02-.509-3.115-.509C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055.359.329 7.245 7.245c.15-.082.285-.164.42-.266L9.33 12.05l-4.854 4.855-.679-.679 5.535-5.535.359.331 8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015-.006-.007zm3.047 1.028l-.678-.676 4.788-4.79.679.689-4.789 4.785v-.008zm4.542-6.578l-5.52 5.52-.68-.679 5.521-5.52.679.684v-.005z\"></path></g></svg></svg></div>\n    </div>\n    <div class=\"menu__text\">Calendar</div>\n    </li>");
    timetable.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Calendar',
        component: 'trakt_timetable_all',
        id: 'trakt_timetable_all'
      });
    });
    watchlist.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Watchlist',
        component: 'trakt_watchlist',
        page: 1
      });
    });
    upnext.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: 'Up Next',
        component: 'trakt_upnext',
        page: 1
      });
    });
    var menuList = $('.menu .menu__list').eq(0);
    menuList.append(watchlist);
    menuList.append(upnext);
    menuList.append(timetable);
  }
  if (!window.plugin_trakt_ready) startPlugin();

})();
