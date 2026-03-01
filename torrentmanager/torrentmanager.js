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
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
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
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
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
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapRegExp() {
    _wrapRegExp = function (e, r) {
      return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype,
      r = new WeakMap();
    function BabelRegExp(e, t, p) {
      var o = RegExp(e, t);
      return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
      var p = r.get(t);
      return Object.keys(p).reduce(function (r, t) {
        var o = p[t];
        if ("number" == typeof o) r[t] = e[o];else {
          for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
          r[t] = e[o[i]];
        }
        return r;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
      var t = e.exec.call(this, r);
      if (t) {
        t.groups = buildGroups(t, this);
        var p = t.indices;
        p && (p.groups = buildGroups(p, this));
      }
      return t;
    }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
      if ("string" == typeof p) {
        var o = r.get(this);
        return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
          if ("" === t) return e;
          var p = o[r];
          return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
        }));
      }
      if ("function" == typeof p) {
        var i = this;
        return e[Symbol.replace].call(this, t, function () {
          var e = arguments;
          return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
        });
      }
      return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
  }

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
      pathMovieQbit: {
        "ru": "Категория/Метка для фильмов",
        "en": "Category/Label for movies",
        "uk": "Категорія/Мітка для фільмів"
      },
      pathTVQbit: {
        "ru": "Категория/Метка для сериалов",
        "en": "Category/Label for TV shows",
        "uk": "Категорія/Мітка для серіалів"
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
        ru: "Изменение пути API. Не трогать без необходимости, если используете KeenDNS указать /app/transmission/rpc",
        en: "Change api route. Do not change without need, if you use KeenDNS, specify /app/transmission/rpc",
        uk: "Змінити маршрут API. Не чіпати без нагальної потреби, якщо ви використовуєте KeenDNS, вкажіть /app/transmission/rpc",
        zh: "更改API路径。如无必要，请勿更改, 如使用 KeenDNS，请指定 /app/transmission/rpc"
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
      torrentmanager_auth_mode: {
        en: "Auth mode",
        ru: "Режим авторизации",
        uk: "Режим авторизації"
      },
      torrentmanager_auth_mode_session: {
        en: "Session (qB <= 5.1)",
        ru: "Сессия (qB <= 5.1)",
        uk: "Сесія (qB <= 5.1)"
      },
      torrentmanager_auth_mode_apikey: {
        en: "API key (qB >= 5.2 beta)",
        ru: "API key (qB >= 5.2 beta)",
        uk: "API key (qB >= 5.2 beta)"
      },
      torrentmanager_api_key: {
        en: "API key",
        ru: "API key",
        uk: "API key"
      },
      torrentmanager_test_connection: {
        en: "Test connection",
        ru: "Проверить подключение",
        uk: "Перевірити підключення"
      },
      torrentmanager_reauth_now: {
        en: "Re-auth now",
        ru: "Переавторизоваться",
        uk: "Переавторизуватись"
      },
      torrentmanager_retry: {
        en: "Retry",
        ru: "Повторить",
        uk: "Повторити"
      },
      torrentmanager_open_settings: {
        en: "Open settings",
        ru: "Открыть настройки",
        uk: "Відкрити налаштування"
      },
      torrentmanager_state_loading: {
        en: "Loading torrents",
        ru: "Загрузка торрентов",
        uk: "Завантаження торрентів"
      },
      torrentmanager_state_empty_title: {
        en: "No torrents found",
        ru: "Торренты не найдены",
        uk: "Торрентів не знайдено"
      },
      torrentmanager_state_empty_description: {
        en: "The list is empty right now",
        ru: "Список сейчас пуст",
        uk: "Список зараз порожній"
      },
      torrentmanager_state_auth_title: {
        en: "Authorization required",
        ru: "Требуется авторизация",
        uk: "Потрібна авторизація"
      },
      torrentmanager_state_auth_description: {
        en: "Check credentials and reconnect to the torrent client",
        ru: "Проверьте учетные данные и повторите подключение к торрент-клиенту",
        uk: "Перевірте облікові дані та повторіть підключення до торрент-клієнта"
      },
      torrentmanager_state_network_title: {
        en: "Connection error",
        ru: "Ошибка соединения",
        uk: "Помилка з'єднання"
      },
      torrentmanager_state_network_description: {
        en: "Cannot reach torrent client. Check address, proxy, and network",
        ru: "Не удалось подключиться к торрент-клиенту. Проверьте адрес, прокси и сеть",
        uk: "Не вдалося підключитися до торрент-клієнта. Перевірте адресу, проксі та мережу"
      },
      torrentmanager_state_server_title: {
        en: "Server unavailable",
        ru: "Сервер недоступен",
        uk: "Сервер недоступний"
      },
      torrentmanager_state_server_description: {
        en: "Torrent client returned a server error",
        ru: "Торрент-клиент вернул серверную ошибку",
        uk: "Торрент-клієнт повернув серверну помилку"
      },
      torrentmanager_secret_set: {
        en: "saved",
        ru: "сохранен",
        uk: "збережено"
      },
      torrentmanager_secret_not_set: {
        en: "not set",
        ru: "не задан",
        uk: "не задано"
      },
      torrentmanager_secret_saved: {
        en: "Secret updated",
        ru: "Секрет обновлен",
        uk: "Секрет оновлено"
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
      actionWithTorrent: {
        en: "Action with torrent",
        ru: "Действие с торрентом",
        uk: "Дія з торрентом"
      },
      resume: {
        en: "Resume",
        ru: "Возобновить",
        uk: "Відновити"
      },
      pause: {
        en: "Pause",
        ru: "Пауза",
        uk: "Пауза"
      },
      "delete": {
        en: "Delete",
        ru: "Удалить",
        uk: "Видалити"
      },
      fullDelete: {
        en: "Full delete",
        ru: "Полное удаление",
        uk: "Повне видалення"
      },
      actionSentSuccessfully: {
        "en": "Action sent successfully",
        "ru": "Действие успешно отправлено",
        "uk": "Дію успішно надіслано"
      },
      actionReturnedError: {
        en: "Action returned an error",
        ru: "Действие вернуло ошибку",
        uk: "Дія повернула помилку"
      },
      torrent_select_file: {
        en: "Select file to play",
        ru: "Выберите файл для воспроизведения",
        uk: "Виберіть файл для відтворення"
      },
      sort_by_name: {
        en: "Sort by name",
        ru: "Сортировать по имени",
        uk: "Сортувати за назвою"
      },
      sort_by_size: {
        en: "Sort by size",
        ru: "Сортировать по размеру",
        uk: "Сортувати за розміром"
      },
      sort_by_progress: {
        en: "Sort by progress",
        ru: "Сортировать по прогрессу",
        uk: "Сортувати за прогресом"
      },
      openCard: {
        en: "Open",
        ru: "Открыть",
        uk: "Відкрити"
      },
      add_metadata: {
        en: "Add metadata",
        ru: "Добавить метаданные",
        uk: "Додати метадані"
      },
      torrentmanager_nothing_found: {
        en: "Nothing found",
        ru: "Ничего не найдено",
        uk: "Нічого не знайдено"
      },
      torrentmanager_metadata_updated: {
        en: "Metadata updated",
        ru: "Метаданные обновлены",
        uk: "Метадані оновлено"
      },
      torrentmanager_metadata_error: {
        en: "Metadata error",
        ru: "Ошибка метаданных",
        uk: "Помилка метаданів"
      },
      torrentmanager_metadata_updated_all: {
        en: "Metadata updated",
        ru: "Метаданные обновлены",
        uk: "Метадані оновлено"
      },
      torrentmanager_metadata_added: {
        en: "Metadata added",
        ru: "Метаданные добавлены",
        uk: "Метадані додано"
      },
      add_metadata_all: {
        en: "Parse all",
        ru: "Парсить все",
        uk: "Парсити все"
      },
      selectResult: {
        en: "Select result",
        ru: "Выберите результат",
        uk: "Виберіть результат"
      }
    });
  }

  var regexp2 = /(?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv/;
  function getProgressClass(progress) {
    if (progress >= 100) {
      return 'is-high';
    }
    if (progress >= 50) {
      return 'is-mid';
    }
    return 'is-low';
  }
  function Item(data) {
    this.id = data.id; // зберігаємо ідентифікатор торренту
    var initialProgress = Number((data.completed * 100).toFixed(2));
    var itemN = Lampa.Template.get('lmetorrent_item__card', {
      title: data.name,
      size: Lampa.Utils.bytesToSize(data.size, 0),
      state: data.state,
      "data-completed": initialProgress,
      completed: initialProgress + "%",
      image: data.image,
      image_src: '',
      quality: data.name.match(regexp2) ? data.name.match(regexp2).toString().replace(/[ .()]/g, '') : ''
    });
    itemN.find('.lmetorrent_card__completed').addClass(getProgressClass(initialProgress));
    this.render = function () {
      return itemN;
    };

    // Метод для оновлення статусу та прогресу
    this.update = function (newData) {
      // Припускається, що відповідні елементи мають класи для статусу та прогресу
      itemN.find('.lmetorrent_card__state').text(newData.state);
      var progress = Number((newData.completed * 100).toFixed(2));
      itemN.attr("data-completed", progress);
      itemN.find('.lmetorrent_card__completed').removeClass('is-low is-mid is-high').addClass(getProgressClass(progress)).text(progress + "%");
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

  function buildTmdbImageUrl(path) {
    var posterSize = Lampa.Storage.field('poster_size') || 'w200';
    return Lampa.Api.img(path, posterSize);
  }
  function buildTmdbImagesApiUrl(label) {
    var tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
    return Lampa.TMDB.api("".concat(label, "/images?api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
  }
  function fetchPosterFromSource(method, id) {
    var source = Lampa.Storage.get('source', 'tmdb');
    if (!source || source === 'tmdb') return Promise.resolve('');
    return new Promise(function (resolve) {
      Lampa.Api.full({
        id: id,
        method: method,
        source: source
      }, function (data) {
        var movie = data.movie || data;
        var poster = movie.poster || movie.img || '';
        if (poster) return resolve(poster);
        var path = movie.poster_path || movie.backdrop_path || movie.profile_path || '';
        if (path) return resolve(buildTmdbImageUrl(path));
        resolve('');
      }, function () {
        return resolve('');
      });
    });
  }
  function getPosterFromLabels(_x) {
    return _getPosterFromLabels.apply(this, arguments);
  }
  function _getPosterFromLabels() {
    _getPosterFromLabels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(labels) {
      var labelArray, label, _label$split, _label$split2, method, id, sourcePoster, response, poster, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            // Ищем лейблы, которые начинаются на tv или movie и содержат цифры после косой
            labelArray = Array.isArray(labels) ? labels : labels.split(','); // Find label matching tv/movie pattern
            label = labelArray.find(function (label) {
              return /^(tv|movie)\/\d+$/.test(label);
            });
            if (label) {
              _context.n = 1;
              break;
            }
            return _context.a(2, './img/img_load.svg');
          case 1:
            _label$split = label.split('/'), _label$split2 = _slicedToArray(_label$split, 2), method = _label$split2[0], id = _label$split2[1];
            _context.n = 2;
            return fetchPosterFromSource(method, id);
          case 2:
            sourcePoster = _context.v;
            if (!sourcePoster) {
              _context.n = 3;
              break;
            }
            return _context.a(2, sourcePoster);
          case 3:
            _context.p = 3;
            _context.n = 4;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(buildTmdbImagesApiUrl(label), resolve, reject);
            });
          case 4:
            response = _context.v;
            poster = response && response.posters && response.posters[0];
            if (!(poster && poster.file_path)) {
              _context.n = 5;
              break;
            }
            return _context.a(2, buildTmdbImageUrl(poster.file_path));
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.log('getPosterFromLabels: images API failed', _t);
          case 7:
            return _context.a(2, './img/img_load.svg');
        }
      }, _callee, null, [[3, 6]]);
    }));
    return _getPosterFromLabels.apply(this, arguments);
  }

  var LME_PROXY_URL = "https://apx.lme.isroot.in/destination/";
  var LME_SIMKL_URL = "https://apx.lme.isroot.in/simkl/";

  var CONFIG_PREFIX$1 = "lmetorrentqBittorent";
  function getConfig$1() {
    var rawApiKey = Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "ApiKey"));
    return {
      url: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Url")) || "",
      useProxy: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Proxy")) === true,
      apiKey: rawApiKey && rawApiKey !== "undefined" && rawApiKey !== "null" ? rawApiKey : ""
    };
  }
  function getApiBase$1() {
    var config = getConfig$1();
    return "".concat(config.useProxy ? LME_PROXY_URL : "").concat(config.url);
  }
  function getHeaders$1(contentType) {
    var config = getConfig$1();
    var headers = {};
    if (contentType) {
      headers["Content-Type"] = contentType;
    }
    if (config.useProxy) {
      headers["x-requested-with"] = "lme-plugins";
    }
    if (config.apiKey) {
      headers.Authorization = "Bearer ".concat(config.apiKey);
    }
    return headers;
  }
  function isAuthError$1(error) {
    return error && (error.status === 401 || error.status === 403);
  }
  function normalizeError(error, fallback) {
    var message = error && (error.responseText || error.statusText || error.message) || fallback;
    var normalized = new Error(message);
    if (error && typeof error.status !== "undefined") {
      normalized.status = error.status;
    }
    return normalized;
  }
  function ajaxRequest(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    getConfig$1();
    var method = (options.method || "GET").toUpperCase();
    var settings = {
      url: "".concat(getApiBase$1()).concat(path),
      method: method,
      timeout: typeof options.timeout === "number" ? options.timeout : 10000,
      headers: getHeaders$1(options.contentType)
    };
    if (options.data) {
      settings.data = options.data;
    }
    return $.ajax(settings);
  }
  function makeRequest(_x) {
    return _makeRequest.apply(this, arguments);
  }
  function _makeRequest() {
    _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
      var options,
        retryOnAuthError,
        config,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            retryOnAuthError = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
            config = getConfig$1();
            if (config.url) {
              _context.n = 1;
              break;
            }
            throw new Error("qBittorrent URL is not configured");
          case 1:
            _context.p = 1;
            _context.n = 2;
            return ajaxRequest(path, options);
          case 2:
            return _context.a(2, _context.v);
          case 3:
            _context.p = 3;
            _t = _context.v;
            if (!(retryOnAuthError && !config.apiKey && isAuthError$1(_t))) {
              _context.n = 5;
              break;
            }
            _context.n = 4;
            return auth$1(false);
          case 4:
            return _context.a(2, ajaxRequest(path, options));
          case 5:
            throw normalizeError(_t, "qBittorrent request failed");
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _makeRequest.apply(this, arguments);
  }
  function auth$1() {
    return _auth$1.apply(this, arguments);
  }
  function _auth$1() {
    _auth$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var showNotification,
        config,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            showNotification = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            config = getConfig$1();
            if (config.url) {
              _context2.n = 1;
              break;
            }
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied")
              });
            }
            throw new Error("qBittorrent URL is not configured");
          case 1:
            if (!config.apiKey) {
              _context2.n = 2;
              break;
            }
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthSuccess")
              });
            }
            return _context2.a(2, true);
          case 2:
            _context2.p = 2;
            _context2.n = 3;
            return ajaxRequest("/api/v2/app/version", {
              method: "GET"
            });
          case 3:
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthSuccess")
              });
            }
            return _context2.a(2, true);
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.log("TDM", "qBittorrent auth error:", _t2);
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied")
              });
            }
            throw normalizeError(_t2, "qBittorrent auth failed");
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return _auth$1.apply(this, arguments);
  }
  function GetData$1() {
    return _GetData$1.apply(this, arguments);
  }
  function _GetData$1() {
    _GetData$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, torrents, _t0;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return makeRequest("/api/v2/sync/maindata", {
              method: "GET"
            });
          case 1:
            response = _context4.v;
            if (!(!response || !response.torrents)) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2, []);
          case 2:
            torrents = Object.values(response.torrents);
            return _context4.a(2, Promise.all(torrents.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
                var _t3, _t4, _t5, _t6, _t7, _t8, _t9;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      _t3 = torrent.name;
                      _t4 = torrent.infohash_v1 || torrent.hash;
                      _t5 = torrent.size;
                      _t6 = torrent.state ? torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1) : "";
                      _t7 = torrent.tags;
                      _context3.n = 1;
                      return getPosterFromLabels(torrent.tags);
                    case 1:
                      _t8 = _context3.v;
                      _t9 = Number(torrent.progress) || 0;
                      return _context3.a(2, {
                        name: _t3,
                        id: _t4,
                        size: _t5,
                        state: _t6,
                        labels: _t7,
                        image: _t8,
                        completed: _t9
                      });
                  }
                }, _callee3);
              }));
              return function (_x9) {
                return _ref.apply(this, arguments);
              };
            }())));
          case 3:
            _context4.p = 3;
            _t0 = _context4.v;
            console.log("TDM", "qBittorrent GetData error:", _t0);
            throw _t0;
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return _GetData$1.apply(this, arguments);
  }
  function GetInfo$1() {
    return _GetInfo$1.apply(this, arguments);
  }
  function _GetInfo$1() {
    _GetInfo$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var response;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return makeRequest("/api/v2/sync/maindata", {
              method: "GET"
            });
          case 1:
            response = _context5.v;
            return _context5.a(2, {
              space: response && response.server_state ? response.server_state.free_space_on_disk : 0
            });
        }
      }, _callee5);
    }));
    return _GetInfo$1.apply(this, arguments);
  }
  function normalizeActionByVersion(action, versionString) {
    var match = String(versionString || "").match(/^v?(\d+)(?:\.\d+)?/i);
    var major = match ? Number(match[1]) : 0;
    var normalized = _objectSpread2({}, action);
    if (major >= 5) {
      if (normalized.action === "resume") normalized.action = "start";
      if (normalized.action === "pause") normalized.action = "stop";
    }
    return normalized;
  }
  function SendCommand$1(_x2, _x3) {
    return _SendCommand$1.apply(this, arguments);
  }
  function _SendCommand$1() {
    _SendCommand$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(action, torrentData) {
      var version, normalizedAction, commandPath, requestData, _t1;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return makeRequest("/api/v2/app/version", {
              method: "GET"
            });
          case 1:
            version = _context6.v;
            normalizedAction = normalizeActionByVersion(action, version);
            commandPath = "/api/v2/torrents/".concat(normalizedAction.action);
            requestData = {
              hashes: torrentData.id
            };
            if (normalizedAction.action === "delete") {
              requestData.deleteFiles = normalizedAction.deleteFiles ? "true" : "false";
            }
            _context6.n = 2;
            return makeRequest(commandPath, {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: requestData
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionSentSuccessfully")
            });
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t1 = _context6.v;
            console.log("TDM", "qBittorrent SendCommand error:", _t1);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
            throw _t1;
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return _SendCommand$1.apply(this, arguments);
  }
  function SendTask$1(_x4, _x5, _x6) {
    return _SendTask$1.apply(this, arguments);
  }
  function _SendTask$1() {
    _SendTask$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(selectedTorrent, labels, dtype) {
      var _t10;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (selectedTorrent) {
              _context7.n = 1;
              break;
            }
            throw new Error("No torrent selected");
          case 1:
            _context7.p = 1;
            _context7.n = 2;
            return makeRequest("/api/v2/torrents/add", {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: {
                tags: labels || "",
                urls: selectedTorrent.MagnetUri || selectedTorrent.Link,
                category: Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) || "",
                firstLastPiecePrio: Lampa.Storage.field("lmetorrentqBittorentfirstLastPiecePrio") ? "true" : "false",
                sequentialDownload: Lampa.Storage.field("lmetorrentqBittorentSequentialDownload") ? "true" : "false"
              }
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionSentSuccessfully")
            });
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t10 = _context7.v;
            console.log("TDM", "qBittorrent SendTask error:", _t10);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
            throw _t10;
          case 4:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    }));
    return _SendTask$1.apply(this, arguments);
  }
  function setTags(_x7, _x8) {
    return _setTags.apply(this, arguments);
  }
  function _setTags() {
    _setTags = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(torrentId, tags) {
      var tagValue;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            tagValue = Array.isArray(tags) ? tags.join(",") : tags;
            return _context8.a(2, makeRequest("/api/v2/torrents/addTags", {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: {
                hashes: torrentId,
                tags: tagValue
              }
            }));
        }
      }, _callee8);
    }));
    return _setTags.apply(this, arguments);
  }
  var Qbittorent = {
    auth: auth$1,
    GetData: GetData$1,
    GetInfo: GetInfo$1,
    SendCommand: SendCommand$1,
    SendTask: SendTask$1,
    setTags: setTags
  };

  /**
   * Torrent Parser Utility
   * 
   * This module provides functionality to parse torrent names and
   * fetch corresponding metadata from TMDB.
   */

  /**
   * Clean torrent name by removing quality, year, and other technical information
   * 
   * @param {string} name - Original torrent name
   * @returns {string} - Cleaned name suitable for metadata search
   */
  function cleanName(name) {
    if (!name) return {
      query: '',
      year: null
    };

    // Regular expression to extract the main title from torrent name
    // Removes season/episode markers, year, quality indicators, etc.
    var regex = /*#__PURE__*/_wrapRegExp(/^(.+?)(?:[.\s(](19\d{2}|20\d{2})[.\s)]|S\d{1,2}(?:E\d{1,2})?|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv)/i, {
      title: 1,
      year: 2
    });
    var match = name.match(regex);

    // If we have a match with a title group, use it
    if (match && match.groups && match.groups.title) {
      // Replace dots between words with spaces
      return {
        query: match.groups.title.replace(/\./g, ' ').trim(),
        year: match.groups.year || null
      };
    }

    // Fallback: just replace dots with spaces
    return {
      query: name.replace(/\./g, ' ').trim(),
      year: null
    };
  }

  /**
   * Search for media metadata on TMDB
   * 
   * @param {string} query - Search query
   * @returns {Promise<Object>} - Promise resolving to TMDB response
   */
  function searchTMDB(_x) {
    return _searchTMDB.apply(this, arguments);
  }
  /**
   * Handle case when multiple results are found
   * 
   * @param {Array} results - Array of TMDB results
   * @returns {Promise<Object>} - Promise resolving to selected media info
   */
  function _searchTMDB() {
    _searchTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
      var tmdbLang, url, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
            url = Lampa.TMDB.api("search/multi?include_adult=true&query=".concat(encodeURIComponent(query), "&api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
            _context.p = 1;
            _context.n = 2;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(url, resolve, reject, null, {
                timeout: 10000
              });
            });
          case 2:
            return _context.a(2, _context.v);
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error('TMDB', 'search error:', _t);
            throw new Error("Failed to fetch data from TMDB: ".concat(_t.statusText || _t.message));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _searchTMDB.apply(this, arguments);
  }
  function handleMultipleResults(results) {
    return new Promise(function (resolve, reject) {
      var enabled = Lampa.Controller.enabled().name;

      // Format menu items with title and date information
      var menuItems = results.map(function (result) {
        return {
          title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === 'tv' && result.first_air_date ? " - ".concat(result.first_air_date) : '') + (result.media_type === 'movie' && result.release_date ? " - ".concat(result.release_date) : ''),
          media_type: result.media_type,
          id: result.id
        };
      });

      // Show selection menu
      Lampa.Select.show({
        title: Lampa.Lang.translate('selectResult'),
        items: menuItems,
        onBack: function onBack() {
          // Повертаємось до попереднього контролера, якщо він існує
          var currentController = Lampa.Controller.enabled();
          if (currentController && currentController.name !== enabled) {
            Lampa.Controller.toggle(enabled);
          } else {
            // Якщо контролер не змінився, просто вимикаємо меню
            Lampa.Controller.toggle('menu');
          }
          reject(new Error('Selection canceled by user'));
        },
        onSelect: function onSelect(selected) {
          resolve({
            media_type: selected.media_type,
            id: selected.id
          });
        }
      });
    });
  }

  /**
   * Process torrents to find metadata
   * 
   * @param {Object|Array} torrentData - Torrent data to process
   * @returns {Promise<Array>} - Promise resolving to array of media info
   */
  function processTorrents(_x2) {
    return _processTorrents.apply(this, arguments);
  }
  function _processTorrents() {
    _processTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrentData) {
      var torrents, results, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            console.log('TDM', 'Processing torrents:', _typeof(torrentData), torrentData);

            // Ensure we're working with an array
            torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
            _context3.p = 1;
            _context3.n = 2;
            return Promise.all(torrents.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
                var name, cleanedNameInfo, response, strictMatches, _t2;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      _context2.p = 0;
                      // Clean the torrent name
                      name = torrent.name || torrent;
                      cleanedNameInfo = cleanName(name);
                      if (cleanedNameInfo.query) {
                        _context2.n = 1;
                        break;
                      }
                      console.warn('TDM', 'Empty torrent name after cleaning');
                      return _context2.a(2, null);
                    case 1:
                      _context2.n = 2;
                      return searchTMDB(cleanedNameInfo.query);
                    case 2:
                      response = _context2.v;
                      if (!(!response.results || response.results.length === 0)) {
                        _context2.n = 3;
                        break;
                      }
                      console.log('TDM', 'No results found for ', cleanedNameInfo.query);
                      return _context2.a(2, null);
                    case 3:
                      if (!(response.results.length === 1)) {
                        _context2.n = 4;
                        break;
                      }
                      return _context2.a(2, response.results[0]);
                    case 4:
                      if (!cleanedNameInfo.year) {
                        _context2.n = 5;
                        break;
                      }
                      strictMatches = response.results.filter(function (r) {
                        var rYear = (r.release_date || r.first_air_date || '').slice(0, 4);
                        return rYear === cleanedNameInfo.year;
                      });
                      if (!(strictMatches.length === 1)) {
                        _context2.n = 5;
                        break;
                      }
                      return _context2.a(2, strictMatches[0]);
                    case 5:
                      _context2.n = 6;
                      return handleMultipleResults(response.results);
                    case 6:
                      return _context2.a(2, _context2.v);
                    case 7:
                      _context2.p = 7;
                      _t2 = _context2.v;
                      console.error('TDM', 'torrent processing error:', _t2);
                      return _context2.a(2, null);
                  }
                }, _callee2, null, [[0, 7]]);
              }));
              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 2:
            results = _context3.v;
            return _context3.a(2, results.filter(function (result) {
              return result !== null;
            }));
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error('TDM', 'torrent processing overall error:', _t3);
            throw _t3;
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return _processTorrents.apply(this, arguments);
  }

  var DEFAULT_RPC_PATH = "/transmission/rpc";
  var DEFAULT_STATUS_MAP = {
    0: "Stopped",
    1: "Queued to verify local data",
    2: "Verifying local data",
    3: "Queued to download",
    4: "Downloading",
    5: "Queued to seed",
    6: "Seeding"
  };
  function createTransmissionLikeClient() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var configPrefix = options.configPrefix;
    var clientName = options.clientName || "Transmission-like";
    var statusMap = options.statusMap || DEFAULT_STATUS_MAP;
    var extraFields = Array.isArray(options.extraFields) ? options.extraFields : [];
    var getExtraConfig = typeof options.getExtraConfig === "function" ? options.getExtraConfig : function () {
      return {};
    };
    var mapTorrentData = typeof options.mapTorrentData === "function" ? options.mapTorrentData : null;
    var handleCustomAction = typeof options.handleCustomAction === "function" ? options.handleCustomAction : null;
    if (!configPrefix) {
      throw new Error("configPrefix is required for transmissionLikeClient");
    }
    function getConfig() {
      return _objectSpread2({
        url: Lampa.Storage.field("".concat(configPrefix, "Url")),
        user: Lampa.Storage.field("".concat(configPrefix, "User")),
        pass: Lampa.Storage.field("".concat(configPrefix, "Pass")),
        path: Lampa.Storage.get("".concat(configPrefix, "Path")) || DEFAULT_RPC_PATH,
        useProxy: Lampa.Storage.field("".concat(configPrefix, "Proxy")) === true,
        autostart: Lampa.Storage.field("".concat(configPrefix, "Autostart")),
        sequentialDownload: Lampa.Storage.field("".concat(configPrefix, "SequentialDownload")),
        proxy: LME_PROXY_URL
      }, getExtraConfig(configPrefix));
    }
    function getHeaders() {
      var config = getConfig();
      var headers = {
        Authorization: "Basic ".concat(btoa((config.user || "") + ":" + (config.pass || ""))),
        "Content-Type": "application/json"
      };
      var sessionId = Lampa.Storage.get("".concat(configPrefix, "Key"));
      if (sessionId) {
        headers["X-Transmission-Session-Id"] = sessionId;
      }
      if (config.useProxy) {
        headers["x-requested-with"] = "lme-plugins";
      }
      return headers;
    }
    function getApiUrl() {
      var config = getConfig();
      return "".concat(config.useProxy ? config.proxy : "").concat(config.url).concat(config.path);
    }
    function reguest(headers, body, timeout) {
      return new Promise(function (resolve, reject) {
        var network = new Lampa.Reguest();
        network.timeout(timeout);
        network.quiet(getApiUrl(), resolve, reject, body, {
          headers: headers,
          type: "POST",
          dataType: "json"
        });
      });
    }
    function makeRequest(_x) {
      return _makeRequest.apply(this, arguments);
    }
    function _makeRequest() {
      _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var timeout,
          body,
          sessionId,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10000;
              body = JSON.stringify(data);
              _context.p = 1;
              _context.n = 2;
              return reguest(getHeaders(), body, timeout);
            case 2:
              return _context.a(2, _context.v);
            case 3:
              _context.p = 3;
              _t = _context.v;
              if (!(_t.status === 409)) {
                _context.n = 4;
                break;
              }
              sessionId = _t.getResponseHeader ? _t.getResponseHeader("X-Transmission-Session-Id") : null;
              if (!sessionId) {
                _context.n = 4;
                break;
              }
              Lampa.Storage.set("".concat(configPrefix, "Key"), sessionId);
              return _context.a(2, reguest(getHeaders(), body, timeout));
            case 4:
              throw _t;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
      return _makeRequest.apply(this, arguments);
    }
    function setLabels(_x2, _x3) {
      return _setLabels.apply(this, arguments);
    }
    function _setLabels() {
      _setLabels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrentId, labels) {
        var labelList;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              labelList = Array.isArray(labels) ? labels : [labels];
              _context2.n = 1;
              return makeRequest({
                method: "torrent-set",
                arguments: {
                  ids: [torrentId],
                  labels: labelList
                }
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return _setLabels.apply(this, arguments);
    }
    function auth() {
      return _auth.apply(this, arguments);
    }
    function _auth() {
      _auth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var showNotification,
          sessionId,
          _args3 = arguments,
          _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              showNotification = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : true;
              _context3.p = 1;
              _context3.n = 2;
              return makeRequest({
                method: "session-get"
              });
            case 2:
              if (showNotification) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate("AuthSuccess")
                });
              }
              _context3.n = 5;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              if (!(_t2.status === 409)) {
                _context3.n = 4;
                break;
              }
              sessionId = _t2.getResponseHeader("X-Transmission-Session-Id");
              if (!sessionId) {
                _context3.n = 4;
                break;
              }
              Lampa.Storage.set("".concat(configPrefix, "Key"), sessionId);
              if (showNotification) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate("AuthSuccess")
                });
              }
              return _context3.a(2);
            case 4:
              console.error("TDM", "".concat(clientName, " authentication failed"), _t2);
              if (showNotification) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate("AuthDenied")
                });
              }
              throw _t2;
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      return _auth.apply(this, arguments);
    }
    function GetData() {
      return _GetData.apply(this, arguments);
    }
    function _GetData() {
      _GetData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var fields, response, _t0;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.p = 0;
              fields = ["labels", "status", "totalSize", "percentComplete", "percentDone", "name", "id"].concat(_toConsumableArray(extraFields));
              _context5.n = 1;
              return makeRequest({
                method: "torrent-get",
                arguments: {
                  fields: fields
                }
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, Promise.all(response.arguments.torrents.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(torrent) {
                  var baseItem, extraData, _t3, _t4, _t5, _t6, _t7, _t8, _t9;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.n) {
                      case 0:
                        _t3 = torrent.name;
                        _t4 = torrent.id;
                        _t5 = torrent.totalSize;
                        _t6 = statusMap[torrent.status];
                        _t7 = torrent.labels;
                        _context4.n = 1;
                        return getPosterFromLabels(torrent.labels);
                      case 1:
                        _t8 = _context4.v;
                        _t9 = torrent.percentDone;
                        baseItem = {
                          name: _t3,
                          id: _t4,
                          size: _t5,
                          state: _t6,
                          labels: _t7,
                          image: _t8,
                          completed: _t9
                        };
                        if (mapTorrentData) {
                          _context4.n = 2;
                          break;
                        }
                        return _context4.a(2, baseItem);
                      case 2:
                        extraData = mapTorrentData(torrent, baseItem, getConfig()) || {};
                        return _context4.a(2, _objectSpread2(_objectSpread2({}, baseItem), extraData));
                    }
                  }, _callee4);
                }));
                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }())));
            case 2:
              _context5.p = 2;
              _t0 = _context5.v;
              console.error("TDM", "".concat(clientName, " GetData error:"), _t0);
              throw new Error("Failed to fetch torrent data: ".concat(_t0.statusText || _t0.message));
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }));
      return _GetData.apply(this, arguments);
    }
    function GetInfo() {
      return _GetInfo.apply(this, arguments);
    }
    function _GetInfo() {
      _GetInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, _t1;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return makeRequest({
                method: "session-get"
              });
            case 1:
              response = _context6.v;
              return _context6.a(2, {
                space: response.arguments["download-dir-free-space"]
              });
            case 2:
              _context6.p = 2;
              _t1 = _context6.v;
              console.error("TDM", "".concat(clientName, " GetInfo error:"), _t1);
              throw new Error("Failed to fetch session info: ".concat(_t1.statusText || _t1.message));
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }));
      return _GetInfo.apply(this, arguments);
    }
    function handleParseAction(_x4, _x5) {
      return _handleParseAction.apply(this, arguments);
    }
    function _handleParseAction() {
      _handleParseAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(action, torrentData) {
        var response, mediaTypeId;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!(action.action !== "parse" && action.action !== "parse-all")) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2, false);
            case 1:
              _context7.n = 2;
              return processTorrents(torrentData);
            case 2:
              response = _context7.v;
              if (!(!response || response.length === 0)) {
                _context7.n = 3;
                break;
              }
              throw new Error("No valid metadata found");
            case 3:
              mediaTypeId = "".concat(response[0].media_type, "/").concat(response[0].id);
              _context7.n = 4;
              return makeRequest({
                method: "torrent-set",
                arguments: {
                  ids: torrentData.id,
                  labels: [mediaTypeId]
                }
              });
            case 4:
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionSentSuccessfully")
              });
              return _context7.a(2, true);
          }
        }, _callee7);
      }));
      return _handleParseAction.apply(this, arguments);
    }
    function handleDefaultCommand(_x6, _x7) {
      return _handleDefaultCommand.apply(this, arguments);
    }
    function _handleDefaultCommand() {
      _handleDefaultCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(action, torrentData) {
        var method, _t10;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              method = "";
              _t10 = action.action;
              _context8.n = _t10 === "resume" ? 1 : _t10 === "pause" ? 2 : _t10 === "delete" ? 3 : 4;
              break;
            case 1:
              method = "torrent-start";
              return _context8.a(3, 5);
            case 2:
              method = "torrent-stop";
              return _context8.a(3, 5);
            case 3:
              method = "torrent-remove";
              return _context8.a(3, 5);
            case 4:
              throw new Error("Unknown action: ".concat(action.action));
            case 5:
              _context8.n = 6;
              return makeRequest({
                method: method,
                arguments: {
                  ids: torrentData.id,
                  "delete-local-data": action.deleteFiles ? true : false
                }
              });
            case 6:
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionSentSuccessfully")
              });
            case 7:
              return _context8.a(2);
          }
        }, _callee8);
      }));
      return _handleDefaultCommand.apply(this, arguments);
    }
    function SendCommand(_x8, _x9) {
      return _SendCommand.apply(this, arguments);
    }
    function _SendCommand() {
      _SendCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(action, torrentData) {
        var parsed, handled, _t11;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return handleParseAction(action, torrentData);
            case 1:
              parsed = _context9.v;
              if (!parsed) {
                _context9.n = 2;
                break;
              }
              return _context9.a(2);
            case 2:
              if (!handleCustomAction) {
                _context9.n = 4;
                break;
              }
              _context9.n = 3;
              return handleCustomAction({
                action: action,
                torrentData: torrentData,
                getConfig: getConfig,
                makeRequest: makeRequest,
                statusMap: statusMap
              });
            case 3:
              handled = _context9.v;
              if (!handled) {
                _context9.n = 4;
                break;
              }
              return _context9.a(2);
            case 4:
              _context9.n = 5;
              return handleDefaultCommand(action, torrentData);
            case 5:
              _context9.n = 7;
              break;
            case 6:
              _context9.p = 6;
              _t11 = _context9.v;
              console.error("TDM", "".concat(clientName, " SendCommand error:"), _t11);
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionReturnedError")
              });
              throw _t11;
            case 7:
              return _context9.a(2);
          }
        }, _callee9, null, [[0, 6]]);
      }));
      return _SendCommand.apply(this, arguments);
    }
    function SendTask(_x0, _x1, _x10) {
      return _SendTask.apply(this, arguments);
    }
    function _SendTask() {
      _SendTask = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(selectedTorrent, labels, dtype) {
        var config, addResponse, torrentId, labelResponse, _t12;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (selectedTorrent) {
                _context0.n = 1;
                break;
              }
              throw new Error("No torrent selected");
            case 1:
              config = getConfig();
              _context0.p = 2;
              _context0.n = 3;
              return makeRequest({
                method: "torrent-add",
                arguments: _objectSpread2({
                  paused: config.autostart ? true : false,
                  sequentialDownload: config.sequentialDownload ? true : false,
                  filename: selectedTorrent.MagnetUri || selectedTorrent.Link,
                  labels: [labels]
                }, Lampa.Storage.get("".concat(configPrefix).concat(dtype)) ? {
                  "download-dir": Lampa.Storage.get("".concat(configPrefix).concat(dtype))
                } : {})
              });
            case 3:
              addResponse = _context0.v;
              if (!(addResponse.result !== "success" || Object.keys(addResponse.arguments).length === 0)) {
                _context0.n = 4;
                break;
              }
              throw new Error("Failed to add torrent: ".concat(addResponse.result));
            case 4:
              torrentId = addResponse.arguments["torrent-added"] && addResponse.arguments["torrent-added"].id;
              if (torrentId) {
                _context0.n = 5;
                break;
              }
              throw new Error("Torrent added but no ID returned");
            case 5:
              _context0.n = 6;
              return makeRequest({
                method: "torrent-set",
                arguments: {
                  ids: torrentId,
                  labels: [labels]
                }
              });
            case 6:
              labelResponse = _context0.v;
              if (!(labelResponse.result !== "success")) {
                _context0.n = 7;
                break;
              }
              throw new Error("Failed to set labels: ".concat(labelResponse.result));
            case 7:
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionSentSuccessfully")
              });
              _context0.n = 9;
              break;
            case 8:
              _context0.p = 8;
              _t12 = _context0.v;
              console.error("TDM", "".concat(clientName, " SendTask error:"), _t12);
              Lampa.Bell.push({
                text: _t12.message || Lampa.Lang.translate("actionReturnedError")
              });
              throw _t12;
            case 9:
              return _context0.a(2);
          }
        }, _callee0, null, [[2, 8]]);
      }));
      return _SendTask.apply(this, arguments);
    }
    return {
      auth: auth,
      GetData: GetData,
      GetInfo: GetInfo,
      SendCommand: SendCommand,
      SendTask: SendTask,
      setLabels: setLabels,
      transmissionStatus: statusMap
    };
  }

  var Transmission = createTransmissionLikeClient({
    configPrefix: "lmetorrenttransmission",
    clientName: "Transmission"
  });

  /**
   * Генерує зображення з текстом за допомогою Canvas API.
   * @param {string} text - Текст для відображення на зображенні.
   * @returns {string} - URL зображення у форматі data:image/png;base64.
   */
  function textToImage(text) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = 400;
    var height = 600;
    canvas.width = width;
    canvas.height = height;

    // Фон
    context.fillStyle = '#1a202c'; // Темно-сірий фон
    context.fillRect(0, 0, width, height);

    // Налаштування тексту
    context.fillStyle = '#ffffff'; // Білий колір тексту
    context.font = 'bold 48px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Розбивка тексту на рядки
    // Спочатку розбиваємо по наявних переносах рядків
    var initialLines = text.split('\n');
    var lines = [];

    // Функція для розбиття довгого слова на частини
    function breakLongWord(word, maxWidth) {
      var brokenLines = [];
      var currentPart = '';
      for (var i = 0; i < word.length; i++) {
        var _char = word[i];
        var testPart = currentPart + _char;
        var metrics = context.measureText(testPart);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && currentPart !== '') {
          brokenLines.push(currentPart);
          currentPart = _char;
        } else {
          currentPart = testPart;
        }
      }
      if (currentPart !== '') {
        brokenLines.push(currentPart);
      }
      return brokenLines;
    }

    // Потім для кожного рядка застосовуємо переноси за шириною
    initialLines.forEach(function (initialLine) {
      var words = initialLine.split(' ');
      var currentLine = '';
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // Перевіряємо, чи слово не занадто довге
        var wordMetrics = context.measureText(word);
        if (wordMetrics.width > width - 40) {
          // Якщо є поточний рядок, додаємо його до списку
          if (currentLine !== '') {
            lines.push(currentLine);
            currentLine = '';
          }
          // Розбиваємо довге слово на частини
          var brokenWordLines = breakLongWord(word, width - 40);
          lines.push.apply(lines, _toConsumableArray(brokenWordLines));
        } else {
          // Слово не занадто довге, обробляємо звичайним чином
          var testLine = currentLine === '' ? word : currentLine + ' ' + word;
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > width - 40 && currentLine !== '') {
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }
      }
      // Додаємо останній рядок, якщо він не порожній
      if (currentLine !== '') {
        lines.push(currentLine);
      }
    });

    // Відображення тексту
    var lineHeight = 58;
    var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
    lines.forEach(function (line, index) {
      context.fillText(line, width / 2, startY + index * lineHeight);
    });
    return canvas.toDataURL('image/png');
  }

  /**
   * @file IndexedDB утиліти для зберігання метаданих торрентів.
   * Інкапсулює логіку роботи з Lampa.DB (IndexedDB).
   */

  var DB_NAME = 'lme_torrentmanager';
  var DB_VERSION = 4; // Збільшено версію для гарантованого оновлення

  /**
   * Отримує список всіх можливих імен таблиць для всіх клієнтів.
   * @returns {string[]} Масив імен таблиць.
   */
  function getAllTableNames() {
    var clients = ['synology', 'qbittorent', 'transmission', 'keenetic', 'universal']; // Додайте сюди інших клієнтів за потреби
    return clients.map(function (client) {
      return "".concat(client, "_metadata");
    });
  }

  /**
   * Допоміжна функція для отримання назви таблиці (сховища) на основі активного клієнта.
   * @returns {string} Назва таблиці, напр. 'synology_metadata'.
   */
  function getTableName() {
    var client = Lampa.Storage.field('lmetorrentSelect');
    if (!client) {
      console.error('[DB] Активний клієнт не вибрано!');
      return 'default_metadata';
    }
    return "".concat(client.toLowerCase(), "_metadata");
  }
  var dbPromise = null;

  /**
   * Ініціалізує та відкриває IndexedDB, використовуючи патерн singleton promise.
   * @returns {Promise<object>} Promise, який вирішується об'єктом бази даних Lampa.DB.
   */
  function initDB() {
    if (dbPromise) {
      return dbPromise;
    }
    dbPromise = new Promise(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
        var allTables, db, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (Lampa.DB) {
                _context.n = 1;
                break;
              }
              console.error('Lampa.DB не визначено.');
              dbPromise = null; // Скидаємо для повторної спроби
              return _context.a(2, reject(new Error('Lampa.DB is not defined')));
            case 1:
              allTables = getAllTableNames();
              db = new Lampa.DB(DB_NAME, allTables, DB_VERSION);
              _context.p = 2;
              _context.n = 3;
              return db.openDatabase();
            case 3:
              console.log("TDM", "Database '".concat(DB_NAME, "' successfully opened/updated to version ").concat(DB_VERSION, "."));
              resolve(db);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error("TDM", "Critical error '".concat(DB_NAME, "':"), _t);
              dbPromise = null; // Скидаємо для повторної спроби
              reject(_t);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    return dbPromise;
  }

  /**
   * Зберігає метадані для ключа.
   * @param {string} key - Ключ (ідентифікатор торренту).
   * @param {any} value - Значення для збереження.
   * @returns {Promise<void>}
   */
  function saveMetadata(_x3, _x4) {
    return _saveMetadata.apply(this, arguments);
  }

  /**
   * Отримує метадані за ключем.
   * @param {string} key - Ключ (ідентифікатор торренту).
   * @returns {Promise<any|null>}
   */
  function _saveMetadata() {
    _saveMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, value) {
      var db, tableName, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return initDB();
          case 1:
            db = _context2.v;
            tableName = getTableName();
            _context2.n = 2;
            return db.rewriteData(tableName, key, value);
          case 2:
            console.log("TDM", "Metadata for key '".concat(key, "' successfully saved in table '").concat(tableName, "'."));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("TDM", "Error in saveMetadata:", _t2);
            throw _t2;
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return _saveMetadata.apply(this, arguments);
  }
  function getMetadata(_x5) {
    return _getMetadata.apply(this, arguments);
  }
  function _getMetadata() {
    _getMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key) {
      var db, tableName, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return initDB();
          case 1:
            db = _context3.v;
            tableName = getTableName();
            _context3.n = 2;
            return db.getData(tableName, key);
          case 2:
            result = _context3.v;
            if (!result) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2, result);
          case 3:
            return _context3.a(2, null);
          case 4:
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            console.error("TDM", "Error in getMetadata:", _t3);
            throw _t3;
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 5]]);
    }));
    return _getMetadata.apply(this, arguments);
  }

  var SIMKL_SEARCH_URL = "".concat(LME_SIMKL_URL, "search/file");
  function parseResponse$1(response) {
    if (!response) {
      return null;
    }
    if (typeof response === 'string') {
      try {
        return JSON.parse(response);
      } catch (error) {
        return null;
      }
    }
    if (_typeof(response) !== 'object') {
      return null;
    }
    return response;
  }
  function normalizeTmdbId(value) {
    var id = String(value || '').trim();
    if (!/^\d+$/.test(id)) {
      return null;
    }
    var numericId = Number(id);
    return Number.isFinite(numericId) && numericId > 0 ? numericId : null;
  }
  function normalizeMoviePayload(payload) {
    var movieIds = payload && payload.movie && payload.movie.ids ? payload.movie.ids : {};
    var tmdbId = normalizeTmdbId(movieIds.moviedb || movieIds.tmdb);
    if (!tmdbId) {
      return null;
    }
    return {
      media_type: 'movie',
      tmdb_id: tmdbId
    };
  }
  function normalizeShowPayload(payload) {
    var showIds = payload && payload.show && payload.show.ids ? payload.show.ids : {};
    var tmdbId = normalizeTmdbId(showIds.tmdbtv || showIds.tmdb);
    if (!tmdbId) {
      return null;
    }
    return {
      media_type: 'tv',
      tmdb_id: tmdbId
    };
  }
  function normalizeSimklPayload(payload) {
    var type = String(payload && payload.type || '').toLowerCase();
    if (type === 'movie') {
      return normalizeMoviePayload(payload);
    }
    if (type === 'episode' || type === 'show') {
      return normalizeShowPayload(payload);
    }
    return null;
  }
  function buildRequestOptions() {
    return {
      timeout: 10000,
      type: 'POST',
      dataType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
  }
  function requestSearchByFileName(_x) {
    return _requestSearchByFileName.apply(this, arguments);
  }
  function _requestSearchByFileName() {
    _requestSearchByFileName = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(fileName) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, new Promise(function (resolve, reject) {
              Lampa.Network.silent(SIMKL_SEARCH_URL, resolve, reject, JSON.stringify({
                file: fileName,
                part: 1
              }), buildRequestOptions());
            }));
        }
      }, _callee);
    }));
    return _requestSearchByFileName.apply(this, arguments);
  }
  function resolveTmdbFromSimkl(_x2) {
    return _resolveTmdbFromSimkl.apply(this, arguments);
  }
  function _resolveTmdbFromSimkl() {
    _resolveTmdbFromSimkl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(fileName) {
      var normalizedFileName, response, payload, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            normalizedFileName = String(fileName || '').trim();
            if (normalizedFileName) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, null);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return requestSearchByFileName(normalizedFileName);
          case 2:
            response = _context2.v;
            payload = parseResponse$1(response);
            if (payload) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, null);
          case 3:
            return _context2.a(2, normalizeSimklPayload(payload));
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            console.log('TDM', 'Simkl search error:', _t);
            return _context2.a(2, null);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return _resolveTmdbFromSimkl.apply(this, arguments);
  }

  var CONFIG_PREFIX = 'lmetorrentsynology';
  var AUTH_ERROR_CODES = [105, 106, 107, 119];
  var SIMKL_RETRY_INTERVAL = 1000 * 60 * 60 * 12;
  var simklSearchCache = {};
  function getConfig() {
    return {
      url: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Url")),
      user: Lampa.Storage.field("".concat(CONFIG_PREFIX, "User")),
      pass: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Pass")),
      useProxy: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Proxy")) === true
    };
  }
  function getApiBase() {
    var config = getConfig();
    return "".concat(config.useProxy ? LME_PROXY_URL : '').concat(config.url);
  }
  function getHeaders() {
    var config = getConfig();
    var headers = {
      Authorization: "Basic ".concat(btoa((config.user || '') + ':' + (config.pass || ''))),
      'Content-Type': 'application/json'
    };
    if (config.useProxy) {
      headers['x-requested-with'] = 'lme-plugins';
    }
    return headers;
  }
  function buildQuery(params) {
    return Object.keys(params).filter(function (key) {
      return params[key] !== undefined && params[key] !== null;
    }).map(function (key) {
      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
    }).join('&');
  }
  function makeUrl(path, params) {
    var query = buildQuery(params || {});
    var base = getApiBase();
    var urlPath = "".concat(base).concat(path);
    if (!query) return urlPath;
    return urlPath.includes('?') ? "".concat(urlPath, "&").concat(query) : "".concat(urlPath, "?").concat(query);
  }
  function parseResponse(response) {
    if (typeof response === 'string') {
      return JSON.parse(response);
    }
    if (!response || _typeof(response) !== 'object') {
      throw new Error('Invalid Synology response');
    }
    return response;
  }
  function parseErrorPayload(error) {
    if (!error) {
      return null;
    }
    if (error.responseJSON) {
      return error.responseJSON;
    }
    if (typeof error.responseText === 'string' && error.responseText.trim()) {
      try {
        return JSON.parse(error.responseText);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  function getSynologyErrorCode(payload) {
    if (!payload || payload.success !== false || !payload.error) {
      return null;
    }
    var code = Number(payload.error.code);
    return Number.isNaN(code) ? null : code;
  }
  function createSynologyError(message, code) {
    var error = new Error(message);
    if (code !== undefined && code !== null) {
      error.code = Number(code);
    }
    return error;
  }
  function clearSid() {
    Lampa.Storage.set("".concat(CONFIG_PREFIX, "Key"), '');
  }
  function saveSid(sid) {
    Lampa.Storage.set("".concat(CONFIG_PREFIX, "Key"), {
      sID: sid,
      createDate: Math.floor(Date.now() / 1000)
    });
  }
  function getSid() {
    var session = Lampa.Storage.field("".concat(CONFIG_PREFIX, "Key"));
    if (session && _typeof(session) === 'object' && session.sID) {
      return session.sID;
    }
    return '';
  }
  var authPromise = null;
  function auth() {
    return _auth.apply(this, arguments);
  }
  function _auth() {
    _auth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var showNotification,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            showNotification = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            if (!authPromise) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, authPromise);
          case 1:
            authPromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var config, response, payload, code, _payload, _code, normalizedError, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    config = getConfig();
                    if (!(!config.url || !config.user || !config.pass)) {
                      _context.n = 1;
                      break;
                    }
                    clearSid();
                    if (showNotification) {
                      Lampa.Bell.push({
                        text: Lampa.Lang.translate('AuthDenied')
                      });
                    }
                    authPromise = null;
                    throw createSynologyError('Synology credentials are not configured');
                  case 1:
                    _context.p = 1;
                    _context.n = 2;
                    return new Promise(function (resolve, reject) {
                      var network = new Lampa.Reguest();
                      network.quiet(makeUrl('/webapi/auth.cgi', {
                        api: 'SYNO.API.Auth',
                        method: 'login',
                        account: config.user,
                        passwd: config.pass,
                        format: 'sid',
                        version: 7,
                        session: 'LMETorrentManager'
                      }), resolve, reject, null, {
                        headers: getHeaders(),
                        type: 'GET',
                        dataType: 'json'
                      });
                    });
                  case 2:
                    response = _context.v;
                    payload = parseResponse(response);
                    code = getSynologyErrorCode(payload);
                    if (!(code !== null || !payload.data || !payload.data.sid)) {
                      _context.n = 3;
                      break;
                    }
                    throw createSynologyError("Synology auth error: ".concat(code), code);
                  case 3:
                    saveSid(payload.data.sid);
                    if (showNotification) {
                      Lampa.Bell.push({
                        text: Lampa.Lang.translate('AuthSuccess')
                      });
                    }
                    authPromise = null;
                    return _context.a(2, payload.data.sid);
                  case 4:
                    _context.p = 4;
                    _t = _context.v;
                    clearSid();
                    _payload = parseErrorPayload(_t);
                    _code = getSynologyErrorCode(_payload);
                    normalizedError = _code !== null ? createSynologyError("Synology auth error: ".concat(_code), _code) : _t instanceof Error ? _t : createSynologyError('Synology auth failed');
                    console.log('TDM', 'Synology auth', normalizedError.code || '', normalizedError);
                    if (showNotification) {
                      Lampa.Bell.push({
                        text: Lampa.Lang.translate('AuthDenied')
                      });
                    }
                    authPromise = null;
                    throw normalizedError;
                  case 5:
                    return _context.a(2);
                }
              }, _callee, null, [[1, 4]]);
            }))();
            return _context2.a(2, authPromise);
        }
      }, _callee2);
    }));
    return _auth.apply(this, arguments);
  }
  function requestSynology(_x) {
    return _requestSynology.apply(this, arguments);
  }
  function _requestSynology() {
    _requestSynology = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(path) {
      var params,
        options,
        requestOptions,
        requestParams,
        sid,
        response,
        payload,
        code,
        _payload2,
        _code2,
        _args3 = arguments,
        _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            params = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            requestOptions = {
              method: options.method || 'GET',
              requiresSid: options.requiresSid !== false,
              retryOnAuthError: options.retryOnAuthError !== false
            };
            requestParams = _objectSpread2({}, params);
            if (!requestOptions.requiresSid) {
              _context3.n = 4;
              break;
            }
            sid = getSid();
            if (sid) {
              _context3.n = 2;
              break;
            }
            _context3.n = 1;
            return auth(false);
          case 1:
            sid = getSid();
          case 2:
            if (sid) {
              _context3.n = 3;
              break;
            }
            throw createSynologyError('Synology SID is not available');
          case 3:
            requestParams._sid = sid;
          case 4:
            _context3.p = 4;
            _context3.n = 5;
            return new Promise(function (resolve, reject) {
              var network = new Lampa.Reguest();
              network.quiet(makeUrl(path, requestParams), resolve, reject, null, {
                headers: getHeaders(),
                type: requestOptions.method,
                dataType: 'json'
              });
            });
          case 5:
            response = _context3.v;
            payload = parseResponse(response);
            code = getSynologyErrorCode(payload);
            if (!(code !== null && AUTH_ERROR_CODES.includes(code) && requestOptions.requiresSid && requestOptions.retryOnAuthError)) {
              _context3.n = 7;
              break;
            }
            if (getSid() === requestParams._sid) {
              clearSid();
            }
            _context3.n = 6;
            return auth(false);
          case 6:
            return _context3.a(2, requestSynology(path, params, _objectSpread2(_objectSpread2({}, requestOptions), {}, {
              retryOnAuthError: false
            })));
          case 7:
            if (!(code !== null)) {
              _context3.n = 8;
              break;
            }
            throw createSynologyError("Synology API error: ".concat(code), code);
          case 8:
            return _context3.a(2, payload);
          case 9:
            _context3.p = 9;
            _t2 = _context3.v;
            _payload2 = parseErrorPayload(_t2);
            _code2 = getSynologyErrorCode(_payload2);
            if (!(_code2 !== null && AUTH_ERROR_CODES.includes(_code2) && requestOptions.requiresSid && requestOptions.retryOnAuthError)) {
              _context3.n = 11;
              break;
            }
            if (getSid() === requestParams._sid) {
              clearSid();
            }
            _context3.n = 10;
            return auth(false);
          case 10:
            return _context3.a(2, requestSynology(path, params, _objectSpread2(_objectSpread2({}, requestOptions), {}, {
              retryOnAuthError: false
            })));
          case 11:
            throw _code2 !== null ? createSynologyError("Synology API error: ".concat(_code2), _code2) : _t2 instanceof Error ? _t2 : createSynologyError('Synology request failed');
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 9]]);
    }));
    return _requestSynology.apply(this, arguments);
  }
  function getFileTransferTotals(task) {
    var files = task && task.additional && Array.isArray(task.additional.file) ? task.additional.file : [];
    return files.reduce(function (acc, file) {
      acc.size += Number(file && file.size) || 0;
      acc.downloaded += Number(file && file.size_downloaded) || 0;
      return acc;
    }, {
      size: 0,
      downloaded: 0
    });
  }
  function getTaskProgress(task) {
    var transfer = task && task.additional && task.additional.transfer ? task.additional.transfer : {};
    var fileTotals = getFileTransferTotals(task);
    var size = Number(task && task.size) || 0;
    var downloaded = Number(transfer.size_downloaded) || 0;

    // Synology may return size=0 or downloaded=0 for some tasks even when file stats are present.
    if (!size && fileTotals.size > 0) {
      size = fileTotals.size;
    }
    if (!downloaded && fileTotals.downloaded > 0) {
      downloaded = fileTotals.downloaded;
    }
    var completed = size > 0 ? downloaded / size : 0;
    var status = String(task && task.status || '').toLowerCase();
    if ((status === 'finished' || status === 'seeding') && completed < 1) {
      completed = 1;
    }
    completed = Math.max(0, Math.min(1, completed));
    return {
      size: size,
      completed: completed
    };
  }
  function normalizeTaskState(status, completed) {
    var raw = String(status || '');
    var lower = raw.toLowerCase();

    // If progress is already full, do not keep "downloading" in UI.
    if (completed >= 1 && lower.indexOf('download') >= 0) {
      return 'Finished';
    }
    return raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : '';
  }
  function hasMetadataReference(metadata) {
    return Boolean(metadata && metadata.tmdb_id && (metadata.media_type === 'movie' || metadata.media_type === 'tv'));
  }
  function shouldTrySimklLookup(metadata, title) {
    if (!title) {
      return false;
    }
    if (hasMetadataReference(metadata)) {
      return false;
    }
    var failedAt = Number(metadata && metadata.simkl_failed_at) || 0;
    if (!failedAt) {
      return true;
    }
    return Date.now() - failedAt > SIMKL_RETRY_INTERVAL;
  }
  function getSimklCacheKey(title) {
    return String(title || '').trim().toLowerCase();
  }
  function resolveSimklWithCache(_x2) {
    return _resolveSimklWithCache.apply(this, arguments);
  }
  function _resolveSimklWithCache() {
    _resolveSimklWithCache = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(title) {
      var cacheKey;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            cacheKey = getSimklCacheKey(title);
            if (cacheKey) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, null);
          case 1:
            if (!simklSearchCache[cacheKey]) {
              simklSearchCache[cacheKey] = resolveTmdbFromSimkl(title)["finally"](function () {
                delete simklSearchCache[cacheKey];
              });
            }
            return _context4.a(2, simklSearchCache[cacheKey]);
        }
      }, _callee4);
    }));
    return _resolveSimklWithCache.apply(this, arguments);
  }
  function resolvePosterByMetadata(_x3) {
    return _resolvePosterByMetadata.apply(this, arguments);
  }
  function _resolvePosterByMetadata() {
    _resolvePosterByMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(metadata) {
      var label, resolvedPoster;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (hasMetadataReference(metadata)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, '');
          case 1:
            label = "".concat(metadata.media_type, "/").concat(metadata.tmdb_id);
            _context5.n = 2;
            return getPosterFromLabels(label);
          case 2:
            resolvedPoster = _context5.v;
            if (!(!resolvedPoster || resolvedPoster === './img/img_load.svg')) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, '');
          case 3:
            return _context5.a(2, resolvedPoster);
        }
      }, _callee5);
    }));
    return _resolvePosterByMetadata.apply(this, arguments);
  }
  function hydrateMetadataFromSimkl(_x4, _x5, _x6) {
    return _hydrateMetadataFromSimkl.apply(this, arguments);
  }
  function _hydrateMetadataFromSimkl() {
    _hydrateMetadataFromSimkl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(torrentId, title, metadata) {
      var now, currentMetadata, match, failedMetadata, nextMetadata, resolvedPoster, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (shouldTrySimklLookup(metadata, title)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, metadata);
          case 1:
            now = Date.now();
            currentMetadata = metadata && _typeof(metadata) === 'object' ? metadata : {};
            _context6.n = 2;
            return resolveSimklWithCache(title);
          case 2:
            match = _context6.v;
            if (!(!match || !match.tmdb_id || !match.media_type)) {
              _context6.n = 4;
              break;
            }
            failedMetadata = _objectSpread2(_objectSpread2({}, currentMetadata), {}, {
              simkl_checked_at: now,
              simkl_failed_at: now
            });
            _context6.n = 3;
            return saveMetadata(String(torrentId), failedMetadata);
          case 3:
            return _context6.a(2, failedMetadata);
          case 4:
            nextMetadata = _objectSpread2(_objectSpread2({}, currentMetadata), {}, {
              tmdb_id: match.tmdb_id,
              media_type: match.media_type,
              simkl_checked_at: now,
              simkl_failed_at: 0,
              updated_at: now
            });
            _context6.p = 5;
            _context6.n = 6;
            return resolvePosterByMetadata(nextMetadata);
          case 6:
            resolvedPoster = _context6.v;
            if (resolvedPoster) {
              nextMetadata.poster = resolvedPoster;
            }
            _context6.n = 8;
            break;
          case 7:
            _context6.p = 7;
            _t3 = _context6.v;
            console.log('TDM', 'Synology Simkl poster resolve error:', _t3);
          case 8:
            _context6.n = 9;
            return saveMetadata(String(torrentId), nextMetadata);
          case 9:
            return _context6.a(2, nextMetadata);
        }
      }, _callee6, null, [[5, 7]]);
    }));
    return _hydrateMetadataFromSimkl.apply(this, arguments);
  }
  function GetData() {
    return _GetData.apply(this, arguments);
  }
  function _GetData() {
    _GetData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var payload, tasks, _t5;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.p = 0;
            _context8.n = 1;
            return requestSynology('/webapi/DownloadStation/task.cgi', {
              api: 'SYNO.DownloadStation.Task',
              version: 3,
              method: 'list',
              additional: 'file,transfer',
              limit: -1
            });
          case 1:
            payload = _context8.v;
            tasks = payload && payload.data && Array.isArray(payload.data.tasks) ? payload.data.tasks : [];
            return _context8.a(2, Promise.all(tasks.map(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(torrent) {
                var metadata, title, progress, imageUrl, resolvedPoster, nextMetadata, _t4;
                return _regenerator().w(function (_context7) {
                  while (1) switch (_context7.n) {
                    case 0:
                      _context7.n = 1;
                      return getMetadata(torrent.id);
                    case 1:
                      metadata = _context7.v;
                      title = torrent.title || torrent.id;
                      progress = getTaskProgress(torrent);
                      _context7.n = 2;
                      return hydrateMetadataFromSimkl(torrent.id, title, metadata);
                    case 2:
                      metadata = _context7.v;
                      imageUrl = metadata && metadata.poster ? metadata.poster : ''; // Backward compatibility for older metadata rows without cached poster.
                      if (!(!imageUrl && hasMetadataReference(metadata))) {
                        _context7.n = 8;
                        break;
                      }
                      _context7.p = 3;
                      _context7.n = 4;
                      return resolvePosterByMetadata(metadata);
                    case 4:
                      resolvedPoster = _context7.v;
                      if (!resolvedPoster) {
                        _context7.n = 6;
                        break;
                      }
                      imageUrl = resolvedPoster;
                      nextMetadata = _objectSpread2(_objectSpread2({}, metadata), {}, {
                        poster: resolvedPoster,
                        updated_at: Date.now()
                      });
                      _context7.n = 5;
                      return saveMetadata(String(torrent.id), _objectSpread2({}, nextMetadata));
                    case 5:
                      metadata = nextMetadata;
                    case 6:
                      _context7.n = 8;
                      break;
                    case 7:
                      _context7.p = 7;
                      _t4 = _context7.v;
                      console.log('TDM', 'Synology poster resolve error:', _t4);
                    case 8:
                      if (!imageUrl) {
                        imageUrl = textToImage(title);
                      }
                      return _context7.a(2, {
                        name: title,
                        id: torrent.id,
                        size: progress.size,
                        state: normalizeTaskState(torrent.status, progress.completed),
                        completed: progress.completed,
                        image: imageUrl,
                        tmdb_id: metadata ? metadata.tmdb_id : null,
                        media_type: metadata ? metadata.media_type : null
                      });
                  }
                }, _callee7, null, [[3, 7]]);
              }));
              return function (_x10) {
                return _ref2.apply(this, arguments);
              };
            }())));
          case 2:
            _context8.p = 2;
            _t5 = _context8.v;
            console.error('TDM', 'GetData error:', _t5);
            throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(_t5.message || _t5));
          case 3:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 2]]);
    }));
    return _GetData.apply(this, arguments);
  }
  function normalizePath(path) {
    if (!path || typeof path !== 'string') {
      return '';
    }
    return path.startsWith('/') ? path : "/".concat(path);
  }
  function isShareMatched(sharePath, targetPath) {
    if (!sharePath || !targetPath) {
      return false;
    }
    return targetPath === sharePath || targetPath.indexOf("".concat(sharePath, "/")) === 0;
  }
  function getShareFreeSpace(share) {
    if (!share || !share.additional || !share.additional.volume_status || typeof share.additional.volume_status.freespace === 'undefined') {
      return null;
    }
    var freeSpace = Number(share.additional.volume_status.freespace);
    return Number.isNaN(freeSpace) ? null : freeSpace;
  }
  function GetInfo() {
    return _GetInfo.apply(this, arguments);
  }
  function _GetInfo() {
    _GetInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var payload, shares, moviesPath, tvPath, selectedShare, _t6;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return requestSynology('/webapi/entry.cgi', {
              version: 2,
              api: 'SYNO.FileStation.List',
              method: 'list_share',
              additional: 'volume_status'
            });
          case 1:
            payload = _context9.v;
            shares = payload && payload.data && Array.isArray(payload.data.shares) ? payload.data.shares : [];
            if (shares.length) {
              _context9.n = 2;
              break;
            }
            throw new Error('Failed to fetch volume information');
          case 2:
            moviesPath = normalizePath(Lampa.Storage.get("".concat(CONFIG_PREFIX, "PathMovies")));
            tvPath = normalizePath(Lampa.Storage.get("".concat(CONFIG_PREFIX, "PathTV")));
            selectedShare = null;
            if (moviesPath || tvPath) {
              selectedShare = shares.find(function (share) {
                var sharePath = share.path;
                return isShareMatched(sharePath, moviesPath) || isShareMatched(sharePath, tvPath);
              }) || null;
            }
            if (!selectedShare || getShareFreeSpace(selectedShare) === null) {
              selectedShare = shares.find(function (share) {
                return getShareFreeSpace(share) !== null;
              }) || null;
            }
            return _context9.a(2, {
              space: selectedShare ? getShareFreeSpace(selectedShare) : 0
            });
          case 3:
            _context9.p = 3;
            _t6 = _context9.v;
            console.error('TDM', 'Error fetching session info:', _t6);
            throw new Error("Failed to fetch session info: ".concat(_t6.message));
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 3]]);
    }));
    return _GetInfo.apply(this, arguments);
  }
  function SendCommand(_x7, _x8) {
    return _SendCommand.apply(this, arguments);
  }
  function _SendCommand() {
    _SendCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(action, torrentData) {
      var _t7;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.p = 0;
            _context0.n = 1;
            return requestSynology('/webapi/DownloadStation/task.cgi', {
              api: 'SYNO.DownloadStation.Task',
              version: 1,
              method: action.action,
              id: torrentData.id
            });
          case 1:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            });
            _context0.n = 3;
            break;
          case 2:
            _context0.p = 2;
            _t7 = _context0.v;
            console.log('TDM', 'Send action:', _t7);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            });
            throw _t7;
          case 3:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 2]]);
    }));
    return _SendCommand.apply(this, arguments);
  }
  function SendTask(_x9, _x0, _x1) {
    return _SendTask.apply(this, arguments);
  }
  function _SendTask() {
    _SendTask = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(selectedTorrent, labels, dtype) {
      var sourceUri, destination, _t8;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.p = 0;
            sourceUri = selectedTorrent && (selectedTorrent.MagnetUri || selectedTorrent.Link);
            if (sourceUri) {
              _context1.n = 1;
              break;
            }
            throw new Error('No torrent URI provided');
          case 1:
            destination = Lampa.Storage.get("".concat(CONFIG_PREFIX, "Path").concat(dtype)) || '';
            _context1.n = 2;
            return requestSynology('/webapi/DownloadStation/task.cgi', {
              api: 'SYNO.DownloadStation.Task',
              version: 1,
              method: 'create',
              uri: sourceUri,
              destination: destination || undefined
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            });
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t8 = _context1.v;
            console.log('TDM', 'Send file:', _t8);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            });
            throw _t8;
          case 4:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 3]]);
    }));
    return _SendTask.apply(this, arguments);
  }
  var Synology = {
    auth: auth,
    GetData: GetData,
    GetInfo: GetInfo,
    SendCommand: SendCommand,
    SendTask: SendTask
  };

  var MEDIA_EXTENSIONS = ["mp4", "mkv", "avi", "mov", "webm", "ts", "m4v", "mpg", "mpeg"];
  function normalizeSortName(name) {
    return String(name || "").replace(/\d+/g, function (match) {
      return match.length > 3 ? match : "000".concat(match).slice(-4);
    });
  }
  function sortFiles(files, sortType) {
    return _toConsumableArray(files).sort(function (a, b) {
      if (sortType === "name") {
        return normalizeSortName(a.name).localeCompare(normalizeSortName(b.name));
      }
      if (sortType === "size") {
        return Number(b.length || 0) - Number(a.length || 0);
      }
      if (sortType === "progress") {
        var aProgress = Number(a.bytesCompleted || 0) / Number(a.length || 1);
        var bProgress = Number(b.bytesCompleted || 0) / Number(b.length || 1);
        return bProgress - aProgress;
      }
      return 0;
    });
  }
  function buildWebdavUrl(config, dirName, filePath) {
    var webdavFilePath = "".concat(config.webdavUrl, "/").concat(dirName, "/").concat(filePath);
    var authUrl = "".concat(config.user, ":").concat(config.pass, "@").concat(webdavFilePath.replace(/^https?:\/\//, ""));
    return "https://".concat(authUrl);
  }
  function buildPlaylistItems(config, mediaFiles, dirName) {
    return mediaFiles.map(function (file) {
      return {
        url: buildWebdavUrl(config, dirName, file.name),
        title: String(file.name || "").split("/").pop(),
        timeline: false
      };
    });
  }
  function buildFileSelectItem(file) {
    var fileName = String(file.name || "").split("/").pop();
    var fileSize = file.length ? Lampa.Utils.bytesToSize(file.length) : "";
    var fileExt = String(fileName || "").split(".").pop().toLowerCase();
    var progressText = "";
    if (typeof file.bytesCompleted !== "undefined" && file.length) {
      var percent = Math.round(file.bytesCompleted / file.length * 100);
      progressText = "".concat(percent, "% \u2022 ");
    }
    var icon = "🎥";
    if (["mp4", "mov", "m4v"].indexOf(fileExt) >= 0) icon = "🎬";else if (["mkv", "avi"].indexOf(fileExt) >= 0) icon = "🎞️";else if (["ts", "mpg", "mpeg"].indexOf(fileExt) >= 0) icon = "📺";
    return {
      title: "".concat(icon, " ").concat(fileName),
      subtitle: "".concat(progressText).concat(fileSize),
      file: file,
      template: "selectbox_item",
      selected: false
    };
  }
  function handleKeeneticAction(_x) {
    return _handleKeeneticAction.apply(this, arguments);
  }
  function _handleKeeneticAction() {
    _handleKeeneticAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
      var action, torrentData, getConfig, config, mediaFiles, downloadDir, dirName, file, _openSelector;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            action = _ref.action, torrentData = _ref.torrentData, getConfig = _ref.getConfig;
            if (!(action.action !== "play")) {
              _context.n = 1;
              break;
            }
            return _context.a(2, false);
          case 1:
            if (!(!torrentData.files || torrentData.files.length === 0)) {
              _context.n = 2;
              break;
            }
            throw new Error("No files available for playback");
          case 2:
            config = getConfig();
            if (config.webdavUrl) {
              _context.n = 3;
              break;
            }
            throw new Error("WebDAV URL not configured");
          case 3:
            mediaFiles = torrentData.files.filter(function (file) {
              var ext = String(file.name || "").split(".").pop().toLowerCase();
              return MEDIA_EXTENSIONS.indexOf(ext) >= 0;
            });
            if (!(mediaFiles.length === 0)) {
              _context.n = 4;
              break;
            }
            throw new Error("No media files found in torrent");
          case 4:
            downloadDir = String(torrentData.downloadDir || "");
            dirName = downloadDir.split("/").filter(Boolean).pop() || "";
            if (!(mediaFiles.length === 1)) {
              _context.n = 5;
              break;
            }
            file = mediaFiles[0];
            Lampa.Player.play({
              url: buildWebdavUrl(config, dirName, file.name),
              title: String(file.name || "").split("/").pop(),
              timeline: false
            });
            return _context.a(2, true);
          case 5:
            _openSelector = function openSelector(sortType) {
              var sortedFiles = sortFiles(mediaFiles, sortType || "name");
              var sortButtons = [{
                title: "\uD83D\uDD24 ".concat(Lampa.Lang.translate("sort_by_name")),
                sort: "name",
                separator: true
              }, {
                title: "\uD83D\uDCCA ".concat(Lampa.Lang.translate("sort_by_size")),
                sort: "size"
              }, {
                title: "\uD83D\uDCE5 ".concat(Lampa.Lang.translate("sort_by_progress")),
                sort: "progress"
              }];
              var fileItems = sortedFiles.map(buildFileSelectItem);
              Lampa.Select.show({
                title: Lampa.Lang.translate("torrent_select_file"),
                items: [].concat(sortButtons, _toConsumableArray(fileItems)),
                onSelect: function onSelect(item) {
                  if (item.sort) {
                    _openSelector(item.sort);
                    return;
                  }
                  var selectedFile = item.file;
                  var playlist = buildPlaylistItems(config, sortedFiles, dirName);
                  var selectedIndex = sortedFiles.findIndex(function (file) {
                    return file.name === selectedFile.name;
                  });
                  if (selectedIndex >= 0) {
                    Lampa.Player.play(playlist[selectedIndex]);
                    Lampa.Player.playlist(playlist);
                  }
                },
                onBack: function onBack() {
                  Lampa.Controller.toggle("content");
                }
              });
            };
            _openSelector("name");
            return _context.a(2, true);
        }
      }, _callee);
    }));
    return _handleKeeneticAction.apply(this, arguments);
  }
  var Keenetic = createTransmissionLikeClient({
    configPrefix: "lmetorrentkeenetic",
    clientName: "Keenetic",
    extraFields: ["downloadDir", "files"],
    getExtraConfig: function getExtraConfig(configPrefix) {
      return {
        webdavUrl: Lampa.Storage.field("".concat(configPrefix, "WebdavUrl"))
      };
    },
    mapTorrentData: function mapTorrentData(torrent) {
      return {
        downloadDir: torrent.downloadDir,
        files: torrent.files
      };
    },
    handleCustomAction: handleKeeneticAction
  });

  var CLIENTS = {
    qBittorent: Qbittorent,
    qbittorent: Qbittorent,
    transmission: Transmission,
    synology: Synology,
    keenetic: Keenetic
  };
  var authInFlight = {};
  function getClient(clientName) {
    return CLIENTS[clientName] || null;
  }
  function hasClient(clientName) {
    return Boolean(getClient(clientName));
  }
  function getActiveClientName() {
    return Lampa.Storage.field("lmetorrentSelect");
  }
  function getErrorCode(error) {
    if (!error) {
      return null;
    }
    if (typeof error.code === "number" && !Number.isNaN(error.code)) {
      return error.code;
    }
    if (error.responseJSON && error.responseJSON.error && typeof error.responseJSON.error.code !== "undefined") {
      var parsed = Number(error.responseJSON.error.code);
      return Number.isNaN(parsed) ? null : parsed;
    }
    return null;
  }
  function isAuthError(clientName, error) {
    var status = Number(error && error.status);
    var code = getErrorCode(error);
    if (status === 401 || status === 403) {
      return true;
    }
    if (clientName === "synology" && code === 105) {
      return true;
    }
    return false;
  }
  function normalizeClientError(clientName, methodName, error) {
    var normalized = error instanceof Error ? error : new Error(String(error || "Client request failed"));
    if (error && typeof error.status !== "undefined") {
      normalized.status = error.status;
    }
    var code = getErrorCode(error);
    if (code !== null) {
      normalized.code = code;
    }
    normalized.client = clientName;
    normalized.method = methodName;
    normalized.isAuthError = isAuthError(clientName, error);
    return normalized;
  }
  function authenticateClient(_x) {
    return _authenticateClient.apply(this, arguments);
  }
  function _authenticateClient() {
    _authenticateClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(clientName) {
      var silent,
        client,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            silent = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            client = getClient(clientName);
            if (!(!client || typeof client.auth !== "function")) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!authInFlight[clientName]) {
              _context.n = 2;
              break;
            }
            return _context.a(2, authInFlight[clientName]);
          case 2:
            authInFlight[clientName] = Promise.resolve().then(function () {
              return client.auth(!silent);
            })["finally"](function () {
              authInFlight[clientName] = null;
            });
            return _context.a(2, authInFlight[clientName]);
        }
      }, _callee);
    }));
    return _authenticateClient.apply(this, arguments);
  }
  function executeClientMethod(_x2, _x3) {
    return _executeClientMethod.apply(this, arguments);
  }
  function _executeClientMethod() {
    _executeClientMethod = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(clientName, methodName) {
      var args,
        options,
        client,
        retryAuth,
        silentAuth,
        normalized,
        _args2 = arguments,
        _t,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            args = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
            options = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            client = getClient(clientName);
            if (client) {
              _context2.n = 1;
              break;
            }
            throw new Error("Unknown client type: ".concat(clientName));
          case 1:
            if (!(typeof client[methodName] !== "function")) {
              _context2.n = 2;
              break;
            }
            throw new Error("Unknown method '".concat(methodName, "' for client '").concat(clientName, "'"));
          case 2:
            retryAuth = options.retryAuth !== false;
            silentAuth = options.silentAuth !== false;
            _context2.p = 3;
            _context2.n = 4;
            return client[methodName].apply(client, _toConsumableArray(args));
          case 4:
            return _context2.a(2, _context2.v);
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            normalized = normalizeClientError(clientName, methodName, _t);
            if (!(retryAuth && normalized.isAuthError && typeof client.auth === "function")) {
              _context2.n = 10;
              break;
            }
            _context2.p = 6;
            _context2.n = 7;
            return authenticateClient(clientName, silentAuth);
          case 7:
            _context2.n = 8;
            return client[methodName].apply(client, _toConsumableArray(args));
          case 8:
            return _context2.a(2, _context2.v);
          case 9:
            _context2.p = 9;
            _t2 = _context2.v;
            throw normalizeClientError(clientName, methodName, _t2);
          case 10:
            throw normalized;
          case 11:
            return _context2.a(2);
        }
      }, _callee2, null, [[6, 9], [3, 5]]);
    }));
    return _executeClientMethod.apply(this, arguments);
  }

  /**
   * Оновлення метаданих для одного торента.
   * Викликається з torrent_actions.js
   *
   * @param {Object} torrent - об'єкт торента (як у твоєму списку)
   * @param {Object} client  - інформація про клієнта (тип + налаштування)
   */
  function updateMetadataForTorrent(_x, _x2) {
    return _updateMetadataForTorrent.apply(this, arguments);
  }
  /**
   * Простий TMDB-флоу для пошуку медіа інформації
   *
   * @param {Object} torrent - об'єкт торента
   * @returns {Promise<Object|null>} - нормалізований результат TMDB або null
   */
  function _updateMetadataForTorrent() {
    _updateMetadataForTorrent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent, client) {
      var mediaInfo, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return findMediaInfoViaTMDB(torrent);
          case 1:
            mediaInfo = _context.v;
            if (mediaInfo) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            _t = client.type;
            _context.n = _t === 'transmission' ? 3 : _t === 'keenetic' ? 3 : _t === 'qbittorrent' ? 5 : _t === 'synology' ? 7 : 9;
            break;
          case 3:
            _context.n = 4;
            return updateTransmissionLikeMetadata(torrent, client, mediaInfo);
          case 4:
            return _context.a(3, 10);
          case 5:
            _context.n = 6;
            return updateQbittorrentMetadata(torrent, client, mediaInfo);
          case 6:
            return _context.a(3, 10);
          case 7:
            _context.n = 8;
            return updateSynologyMetadata(torrent, client, mediaInfo);
          case 8:
            return _context.a(3, 10);
          case 9:
            console.log('TDM', 'Unknown client type for metadata:', client.type);
          case 10:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _updateMetadataForTorrent.apply(this, arguments);
  }
  function findMediaInfoViaTMDB(_x3) {
    return _findMediaInfoViaTMDB.apply(this, arguments);
  }
  /**
   * Пошук в TMDB з використанням існуючого парсера
   *
   * @param {Object} torrent - торент для пошуку 
   * @returns {Promise<Array>} - результати пошуку
   */
  function _findMediaInfoViaTMDB() {
    _findMediaInfoViaTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
      var results;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return tmdbSearch(torrent);
          case 1:
            results = _context2.v;
            if (!(!results || !results.length)) {
              _context2.n = 2;
              break;
            }
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_nothing_found') //'Нічого не знайдено для ' + torrent.name
            });
            return _context2.a(2, null);
          case 2:
            return _context2.a(2, normalizeTmdbResult(results[0]));
        }
      }, _callee2);
    }));
    return _findMediaInfoViaTMDB.apply(this, arguments);
  }
  function tmdbSearch(_x4) {
    return _tmdbSearch.apply(this, arguments);
  }
  /**
   * Показ модального вікна для вибору результату TMDB
   *
   * @param {Array} results - масив результатів пошуку
   * @returns {Promise<Object|null>} - обраний результат або null
   */
  function _tmdbSearch() {
    _tmdbSearch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
      var results, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return processTorrents([torrent]);
          case 1:
            results = _context3.v;
            return _context3.a(2, results || []);
          case 2:
            _context3.p = 2;
            _t2 = _context3.v;
            console.error('TDM', 'TMDB search error:', _t2);
            return _context3.a(2, []);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return _tmdbSearch.apply(this, arguments);
  }

  /**
   * Нормалізація результату TMDB до простого об'єкта
   *
   * @param {Object} item - результат з TMDB
   * @returns {Object} - нормалізований об'єкт
   */
  function normalizeTmdbResult(item) {
    return {
      id: item.id,
      media_type: item.media_type || 'movie',
      // або за твоїми правилами
      title: item.title || item.name,
      year: (item.release_date || item.first_air_date || '').slice(0, 4) || null
    };
  }

  /**
   * Форматування тегу для метаданих
   *
   * @param {Object} mediaInfo - інформація про медіа
   * @returns {string} - відформатований тег
   */
  function buildMetadataTag(mediaInfo) {
    // ПОВИННО відповідати поточному формату тегу в плагіні!
    // приклад, якщо так уже є:
    return mediaInfo.media_type + '/' + mediaInfo.id;
  }

  /**
   * Оновлення метаданих для Transmission/Keenetic
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function updateTransmissionLikeMetadata(_x5, _x6, _x7) {
    return _updateTransmissionLikeMetadata.apply(this, arguments);
  }
  /**
   * Оновлення метаданих для qBittorrent
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function _updateTransmissionLikeMetadata() {
    _updateTransmissionLikeMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(torrent, client, mediaInfo) {
      var label, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            label = buildMetadataTag(mediaInfo);
            _context4.p = 1;
            if (!(client.type === 'transmission')) {
              _context4.n = 3;
              break;
            }
            _context4.n = 2;
            return Transmission.setLabels(torrent.id, label);
          case 2:
            _context4.n = 4;
            break;
          case 3:
            _context4.n = 4;
            return Keenetic.setLabels(torrent.id, label);
          case 4:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t3 = _context4.v;
            console.error('TDM', 'updateTransmissionLikeMetadata error:', _t3);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 5]]);
    }));
    return _updateTransmissionLikeMetadata.apply(this, arguments);
  }
  function updateQbittorrentMetadata(_x8, _x9, _x0) {
    return _updateQbittorrentMetadata.apply(this, arguments);
  }
  /**
   * Оновлення метаданих для Synology
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function _updateQbittorrentMetadata() {
    _updateQbittorrentMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(torrent, client, mediaInfo) {
      var tagValue, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            tagValue = buildMetadataTag(mediaInfo); // той самий формат, що й при додаванні
            _context5.p = 1;
            _context5.n = 2;
            return Qbittorent.setTags(torrent.id, tagValue);
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            console.error('TDM', 'updateQbittorrentMetadata error:', _t4);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return _updateQbittorrentMetadata.apply(this, arguments);
  }
  function updateSynologyMetadata(_x1, _x10, _x11) {
    return _updateSynologyMetadata.apply(this, arguments);
  }
  /**
   * Масове оновлення метаданих для всіх торентів
   *
   * @param {Array} torrents - масив торентів
   * @param {Object} client - інформація про клієнта
   */
  function _updateSynologyMetadata() {
    _updateSynologyMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(torrent, client, mediaInfo) {
      var key, metadataTag, poster, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.p = 0;
            key = String(torrent && torrent.id || "");
            if (key) {
              _context6.n = 1;
              break;
            }
            throw new Error("Synology metadata update: empty torrent id");
          case 1:
            metadataTag = buildMetadataTag(mediaInfo);
            _context6.n = 2;
            return getPosterFromLabels(metadataTag);
          case 2:
            poster = _context6.v;
            _context6.n = 3;
            return saveMetadata(key, {
              tmdb_id: mediaInfo.id,
              media_type: mediaInfo.media_type,
              poster: poster && poster !== './img/img_load.svg' ? poster : '',
              updated_at: Date.now()
            });
          case 3:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t5 = _context6.v;
            console.error('TDM', 'updateSynologyMetadata error:', _t5);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 4]]);
    }));
    return _updateSynologyMetadata.apply(this, arguments);
  }
  function updateAllMetadata(_x12, _x13) {
    return _updateAllMetadata.apply(this, arguments);
  }
  function _updateAllMetadata() {
    _updateAllMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(torrents, client) {
      var _iterator, _step, torrent, _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _iterator = _createForOfIteratorHelper(torrents);
            _context7.p = 1;
            _iterator.s();
          case 2:
            if ((_step = _iterator.n()).done) {
              _context7.n = 5;
              break;
            }
            torrent = _step.value;
            _context7.n = 3;
            return updateMetadataForTorrent(torrent, client);
          case 3:
            _context7.n = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 500);
            });
          case 4:
            _context7.n = 2;
            break;
          case 5:
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t6 = _context7.v;
            _iterator.e(_t6);
          case 7:
            _context7.p = 7;
            _iterator.f();
            return _context7.f(7);
          case 8:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated_all') //'Оновлення метаданих завершено'
            });
          case 9:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 6, 7, 8]]);
    }));
    return _updateAllMetadata.apply(this, arguments);
  }

  var METADATA_CLIENTS = {
    qBittorent: {
      type: "qbittorrent",
      prefix: "lmetorrentqBittorent",
      withCredentials: false
    },
    transmission: {
      type: "transmission",
      prefix: "lmetorrenttransmission",
      withCredentials: true
    },
    keenetic: {
      type: "keenetic",
      prefix: "lmetorrentkeenetic",
      withCredentials: true
    },
    synology: {
      type: "synology",
      prefix: "lmetorrentsynology",
      withCredentials: true
    }
  };
  function buildMetadataClientConfig(clientName) {
    var client = METADATA_CLIENTS[clientName];
    if (!client) {
      return null;
    }
    var config = {
      type: client.type,
      url: Lampa.Storage.field("".concat(client.prefix, "Url")),
      useProxy: Lampa.Storage.field("".concat(client.prefix, "Proxy")) === true
    };
    if (client.withCredentials) {
      config.user = Lampa.Storage.field("".concat(client.prefix, "User"));
      config.pass = Lampa.Storage.field("".concat(client.prefix, "Pass"));
    }
    return config;
  }
  function isMetadataAction(actionType) {
    return actionType === "parse" || actionType === "parse-all";
  }
  function openTorrentCard(torrentData) {
    var cardInfo = null;
    if (torrentData.tmdb_id && torrentData.media_type) {
      cardInfo = {
        tID: torrentData.tmdb_id,
        method: torrentData.media_type
      };
    } else {
      cardInfo = parseLabels(torrentData.labels);
    }
    if (!cardInfo) {
      Lampa.Bell.push({
        text: "No metadata available for this torrent"
      });
      return;
    }
    Lampa.Activity.push({
      url: "",
      component: "full",
      id: cardInfo.tID,
      method: cardInfo.method,
      source: Lampa.Storage.field("source") || "tmdb"
    });
  }
  function handleMetadataAction(_x, _x2, _x3, _x4) {
    return _handleMetadataAction.apply(this, arguments);
  }
  function _handleMetadataAction() {
    _handleMetadataAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(actionType, torrentData, torrentList, clientName) {
      var clientConfig;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            clientConfig = buildMetadataClientConfig(clientName);
            if (clientConfig) {
              _context.n = 1;
              break;
            }
            Lampa.Bell.push({
              text: "Unknown client type"
            });
            return _context.a(2);
          case 1:
            if (!(actionType === "parse")) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return updateMetadataForTorrent(torrentData, clientConfig);
          case 2:
            return _context.a(2);
          case 3:
            _context.n = 4;
            return updateAllMetadata(torrentList, clientConfig);
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleMetadataAction.apply(this, arguments);
  }
  function parseLabels(labels) {
    if (!labels) {
      return null;
    }
    var labelArray = Array.isArray(labels) ? labels : labels.split(",");
    var matchedLabel = labelArray.find(function (label) {
      return /^(tv|movie)\/\d+$/.test(label);
    });
    if (!matchedLabel) {
      return null;
    }
    var _matchedLabel$split = matchedLabel.split("/"),
      _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
      method = _matchedLabel$split2[0],
      tID = _matchedLabel$split2[1];
    return {
      method: method,
      tID: tID
    };
  }
  function showTorrentMenu(torrentData) {
    var allTorrents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var client = Lampa.Storage.field("lmetorrentSelect");
    var enabled = Lampa.Controller.enabled().name;
    var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels(torrentData.labels);
    var torrentList = Array.isArray(allTorrents) ? allTorrents : [];
    var menuItems = [{
      title: Lampa.Lang.translate("resume"),
      action: "resume"
    }, {
      title: Lampa.Lang.translate("pause"),
      action: "pause"
    }, {
      title: Lampa.Lang.translate("delete"),
      action: "delete"
    }].concat(_toConsumableArray(hasMetadata ? [{
      title: Lampa.Lang.translate("openCard"),
      action: "card"
    }] : []), [{
      title: Lampa.Lang.translate("add_metadata"),
      action: "parse"
    }]);
    if (torrentList.length > 1) {
      menuItems.push({
        title: Lampa.Lang.translate("add_metadata_all"),
        action: "parse-all"
      });
    }
    if (client === "keenetic") {
      menuItems.push({
        title: "Play",
        action: "play"
      });
    }
    if (client !== "synology") {
      menuItems.push({
        title: Lampa.Lang.translate("fullDelete"),
        action: "delete",
        deleteFiles: true
      });
    }
    Lampa.Select.show({
      title: torrentData.name,
      items: menuItems,
      onBack: function onBack() {
        var currentController = Lampa.Controller.enabled();
        if (currentController && currentController.name !== enabled) {
          Lampa.Controller.toggle(enabled);
        } else {
          Lampa.Controller.toggle("menu");
        }
      },
      onSelect: function onSelect(action) {
        handleTorrentAction(action, torrentData, torrentList);
      }
    });
  }
  function handleTorrentAction(_x5, _x6) {
    return _handleTorrentAction.apply(this, arguments);
  }
  function _handleTorrentAction() {
    _handleTorrentAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(action, torrentData) {
      var allTorrents,
        client,
        torrentList,
        actionType,
        _args2 = arguments,
        _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            allTorrents = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
            client = Lampa.Storage.field("lmetorrentSelect");
            torrentList = Array.isArray(allTorrents) ? allTorrents : [];
            actionType = action && action.action;
            if (!(actionType === "card")) {
              _context2.n = 1;
              break;
            }
            openTorrentCard(torrentData);
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            if (!isMetadataAction(actionType)) {
              _context2.n = 3;
              break;
            }
            _context2.n = 2;
            return handleMetadataAction(actionType, torrentData, torrentList, client);
          case 2:
            return _context2.a(2);
          case 3:
            _context2.n = 4;
            return executeClientMethod(client, "SendCommand", [action, torrentData], {
              silentAuth: true
            });
          case 4:
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            console.error("TDM", "Error handling action:", _t);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 5]]);
    }));
    return _handleTorrentAction.apply(this, arguments);
  }

  var UPDATE_INTERVAL_MS = 15000;
  var ERROR_KIND = {
    AUTH: "auth",
    NETWORK: "network",
    SERVER: "server",
    UNKNOWN: "unknown"
  };
  function Component() {
    var self = this;
    var client = Lampa.Storage.field("lmetorrentSelect");
    var network = new Lampa.Reguest();
    var updateTick = null;
    var updateInProgress = false;
    var items = [];
    var headerItem = null;
    var torrentItemsById = {};
    var active;
    var last;
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var html = $("<div class='lmetorrent-module'></div>");
    var head = $("<div class='lmetorrent-head'></div>");
    var body = $('<div class="lmetorrent-catalog--list category-full"></div>');
    scroll.append(head);
    scroll.append(body);
    html.append(scroll.render());
    function reloadPanel() {
      Lampa.Activity.replace({
        url: "",
        title: (client || "").toUpperCase() + " Manager",
        component: "lmetorrentPanel",
        page: 1
      });
    }
    function openSettings() {
      if (Lampa.Controller) Lampa.Controller.toggle('settings');
      setTimeout(function () {
        if (Lampa.Settings && typeof Lampa.Settings.create === 'function') {
          Lampa.Settings.create('lmetorrent');
        }
      }, 10);
    }
    function stopAutoUpdate() {
      if (updateTick) {
        Lampa.Timer.remove(updateTick);
        updateTick = null;
      }
    }
    function destroyAllItems() {
      Lampa.Arrays.destroy(items);
      items = [];
      headerItem = null;
      torrentItemsById = {};
      active = null;
      last = null;
    }
    function destroyTorrentItems() {
      Object.keys(torrentItemsById).forEach(function (torrentId) {
        var item = torrentItemsById[torrentId];
        if (item && typeof item.destroy === "function") {
          item.destroy();
        }
      });
      torrentItemsById = {};
      items = headerItem ? [headerItem] : [];
    }
    function trackItemFocus(item) {
      item.render().on("hover:focus", function () {
        last = item.render()[0];
        active = items.indexOf(item);
        if (active >= 0) {
          scroll.update(items[active].render(), true);
        }
      });
    }
    function renderState(title, description) {
      var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (options.resetHeader) {
        head.empty();
        destroyAllItems();
      } else {
        destroyTorrentItems();
      }
      body.empty().removeClass("category-full").addClass("lmetorrent-catalog--state");
      var container = $('<div class="lmetorrent-state"></div>');
      container.append("<div class=\"lmetorrent-state__title\">".concat(title, "</div>"));
      if (description) {
        container.append("<div class=\"lmetorrent-state__description\">".concat(description, "</div>"));
      }
      if (actions.length) {
        var actionList = $('<div class="lmetorrent-state__actions"></div>');
        actions.forEach(function (action) {
          var button = $("<div class=\"simple-button selector\">".concat(action.title, "</div>"));
          button.on("hover:enter", action.onEnter);
          button.on("hover:focus", function () {
            last = button[0];
            scroll.update(button, true);
          });
          actionList.append(button);
        });
        container.append(actionList);
      }
      body.append(container);
    }
    function classifyError(error) {
      if (!error) {
        return ERROR_KIND.UNKNOWN;
      }
      if (error.isAuthError) {
        return ERROR_KIND.AUTH;
      }
      var status = Number(error.status);
      if (status === 401 || status === 403) {
        return ERROR_KIND.AUTH;
      }
      if (status >= 500) {
        return ERROR_KIND.SERVER;
      }
      var message = String(error.message || "").toLowerCase();
      if (status === 0 || message.indexOf("timeout") >= 0 || message.indexOf("network") >= 0 || message.indexOf("cors") >= 0) {
        return ERROR_KIND.NETWORK;
      }
      return ERROR_KIND.UNKNOWN;
    }
    function fetchClientData(_x) {
      return _fetchClientData.apply(this, arguments);
    }
    function _fetchClientData() {
      _fetchClientData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(clientType) {
        var _yield$Promise$all, _yield$Promise$all2, data, info;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (hasClient(clientType)) {
                _context2.n = 1;
                break;
              }
              throw new Error("Unknown client type");
            case 1:
              _context2.n = 2;
              return Promise.all([executeClientMethod(clientType, "GetData", [], {
                silentAuth: true
              }), executeClientMethod(clientType, "GetInfo", [], {
                silentAuth: true
              })]);
            case 2:
              _yield$Promise$all = _context2.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              data = _yield$Promise$all2[0];
              info = _yield$Promise$all2[1];
              return _context2.a(2, {
                data: data,
                info: info
              });
          }
        }, _callee2);
      }));
      return _fetchClientData.apply(this, arguments);
    }
    this.renderLoadingState = function () {
      renderState(Lampa.Lang.translate("torrentmanager_state_loading"), "", [], {
        resetHeader: true
      });
    };
    this.renderEmptyState = function () {
      renderState(Lampa.Lang.translate("torrentmanager_state_empty_title"), Lampa.Lang.translate("torrentmanager_state_empty_description"), [{
        title: Lampa.Lang.translate("torrentmanager_retry"),
        onEnter: reloadPanel
      }]);
    };
    this.renderErrorState = function (error) {
      console.error("TDM", "Panel load error:", error);
      var kind = classifyError(error);
      var actions = [{
        title: Lampa.Lang.translate("torrentmanager_retry"),
        onEnter: reloadPanel
      }, {
        title: Lampa.Lang.translate("torrentmanager_open_settings"),
        onEnter: openSettings
      }];
      if (kind === ERROR_KIND.AUTH) {
        renderState(Lampa.Lang.translate("torrentmanager_state_auth_title"), Lampa.Lang.translate("torrentmanager_state_auth_description"), actions, {
          resetHeader: true
        });
        return;
      }
      if (kind === ERROR_KIND.NETWORK) {
        renderState(Lampa.Lang.translate("torrentmanager_state_network_title"), Lampa.Lang.translate("torrentmanager_state_network_description"), actions, {
          resetHeader: true
        });
        return;
      }
      if (kind === ERROR_KIND.SERVER) {
        renderState(Lampa.Lang.translate("torrentmanager_state_server_title"), Lampa.Lang.translate("torrentmanager_state_server_description"), actions, {
          resetHeader: true
        });
        return;
      }
      renderState(Lampa.Lang.translate("somethingWentWrong"), Lampa.Lang.translate("clientNotClient"), actions, {
        resetHeader: true
      });
    };
    this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            stopAutoUpdate();
            this.activity.loader(true);
            self.renderLoadingState();
            _context.p = 1;
            _context.n = 2;
            return fetchClientData(client);
          case 2:
            result = _context.v;
            self.build(result);
            startAutoUpdate();
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            self.renderErrorState(_t);
          case 4:
            this.activity.loader(false);
            this.activity.toggle();
            return _context.a(2, this.render());
        }
      }, _callee, this, [[1, 3]]);
    }));
    this.build = function (result) {
      scroll.minus();
      body.removeClass("lmetorrent-catalog--state").addClass("category-full");
      head.empty();
      body.empty();
      destroyAllItems();
      if (result && result.info) {
        self.renderHeader(result.info);
      }
      var torrents = Array.isArray(result && result.data) ? result.data : [];
      if (!torrents.length) {
        self.renderEmptyState();
        return;
      }
      self.renderTorrentList(torrents);
    };
    this.renderHeader = function (data) {
      var item = new Header(data);
      item.render().on("hover:enter", reloadPanel);
      trackItemFocus(item);
      head.append(item.render());
      headerItem = item;
      items = [item];
    };
    this.renderTorrentList = function (torrents) {
      body.removeClass("lmetorrent-catalog--state").addClass("category-full");
      body.empty();
      destroyTorrentItems();
      torrents.forEach(function (torrentData) {
        var item = new Item(torrentData);
        trackItemFocus(item);
        item.render().on("hover:enter", function () {
          showTorrentMenu(torrentData, torrents);
        });
        body.append(item.render());
        items.push(item);
        torrentItemsById[String(torrentData.id)] = item;
      });
    };
    function refreshTorrents() {
      return _refreshTorrents.apply(this, arguments);
    }
    function _refreshTorrents() {
      _refreshTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var torrents, knownIds, nextIds, needRebuild, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!updateInProgress) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              updateInProgress = true;
              _context3.p = 2;
              _context3.n = 3;
              return executeClientMethod(client, "GetData", [], {
                silentAuth: true
              });
            case 3:
              torrents = _context3.v;
              if (Array.isArray(torrents)) {
                _context3.n = 4;
                break;
              }
              return _context3.a(2);
            case 4:
              if (torrents.length) {
                _context3.n = 5;
                break;
              }
              if (!body.hasClass("lmetorrent-catalog--state") || Object.keys(torrentItemsById).length) {
                self.renderEmptyState();
              }
              return _context3.a(2);
            case 5:
              knownIds = Object.keys(torrentItemsById);
              nextIds = torrents.map(function (torrent) {
                return String(torrent.id);
              });
              needRebuild = body.hasClass("lmetorrent-catalog--state") || knownIds.length !== nextIds.length || nextIds.some(function (torrentId) {
                return !torrentItemsById[torrentId];
              });
              if (!needRebuild) {
                _context3.n = 6;
                break;
              }
              self.renderTorrentList(torrents);
              return _context3.a(2);
            case 6:
              torrents.forEach(function (torrent) {
                var item = torrentItemsById[String(torrent.id)];
                if (item && typeof item.update === "function") {
                  item.update(torrent);
                }
              });
              _context3.n = 8;
              break;
            case 7:
              _context3.p = 7;
              _t2 = _context3.v;
              console.error("TDM", "Auto update error:", _t2);
            case 8:
              _context3.p = 8;
              updateInProgress = false;
              return _context3.f(8);
            case 9:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 7, 8, 9]]);
      }));
      return _refreshTorrents.apply(this, arguments);
    }
    function startAutoUpdate() {
      if (!hasClient(client) || updateTick) {
        return;
      }
      updateTick = refreshTorrents;
      Lampa.Timer.add(UPDATE_INTERVAL_MS, updateTick);
    }
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
    this.pause = function () {
      stopAutoUpdate();
    };
    this.stop = function () {
      stopAutoUpdate();
    };
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      stopAutoUpdate();
      network.clear();
      destroyAllItems();
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
    function hasSecretValue(value) {
      return Boolean(String(value || "").trim());
    }
    function updateSecretLabel(item, label, storageKey) {
      var status = hasSecretValue(Lampa.Storage.field(storageKey)) ? Lampa.Lang.translate('torrentmanager_secret_set') : Lampa.Lang.translate('torrentmanager_secret_not_set');
      item.find('.settings-param__name').text("".concat(label, " (").concat(status, ")"));
    }
    function openSecretEditor(storageKey, title) {
      Lampa.Input.edit({
        title: title,
        value: Lampa.Storage.field(storageKey) || "",
        free: true,
        nosave: true,
        password: true
      }, function (newValue) {
        Lampa.Storage.set(storageKey, String(newValue || ""));
        Lampa.Bell.push({
          text: Lampa.Lang.translate('torrentmanager_secret_saved')
        });
        Lampa.Settings.update();
      });
    }
    function runClientAuth(clientName, clearSession) {
      var client = null;
      var sessionKey = "";
      if (clientName === "qBittorent") {
        client = Qbittorent;
      } else if (clientName === "transmission") {
        client = Transmission;
        sessionKey = "".concat(manifest.component, "transmissionKey");
      } else if (clientName === "synology") {
        client = Synology;
        sessionKey = "".concat(manifest.component, "synologyKey");
      } else if (clientName === "keenetic") {
        client = Keenetic;
        sessionKey = "".concat(manifest.component, "keeneticKey");
      }
      if (!client || typeof client.auth !== "function") {
        return;
      }
      if (clearSession && sessionKey) {
        Lampa.Storage.set(sessionKey, "");
      }
      Promise.resolve().then(function () {
        return client.auth(true);
      })["catch"](function () {});
    }

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
          keenetic: "Keenetic Transmission",
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
    //Proxy TMDB
    // Lampa.SettingsApi.addParam({
    //     component: manifest.component,
    //     param: {
    //         name: manifest.component + 'proxyTMDB',
    //         type: 'trigger',
    //         default: 'false',
    //         values: {
    //             true: Lampa.Lang.translate('true'),
    //             false: Lampa.Lang.translate('false')
    //         },
    //     },
    //     field: {
    //         name: 'Proxy TMDB posters',
    //     },
    //     onRender: function (item) {
    //         var forbiddenValues = ["universalClient", "synology", "no_client"];
    //         var clientValue = Lampa.Storage.field(manifest.component + 'proxyTMDB');
    //         // indexOf возвращает -1, если значения нет в массиве
    //         if (forbiddenValues.indexOf(clientValue) === -1) {
    //             item.show();
    //         } else item.hide();
    //     },
    //     onChange: function () {
    //         Lampa.Settings.update();
    //     }
    // })
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
    // Lampa.SettingsApi.addParam({
    //     component: manifest.component,
    //     param: {
    //         name: manifest.component + "qBittorentApiKey",
    //         type: "button"
    //     },
    //     field: {
    //         name: Lampa.Lang.translate('torrentmanager_api_key')
    //     }, onRender: function (item) {
    //         if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
    //             updateSecretLabel(item, Lampa.Lang.translate('torrentmanager_api_key'), manifest.component + "qBittorentApiKey");
    //             item.show();
    //         } else item.hide();
    //     }, onChange: function () {
    //         openSecretEditor(manifest.component + "qBittorentApiKey", 'qBittorrent API key');
    //     },
    // });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "qBittorentTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("qBittorent", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "qBittorentReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("qBittorent", true);
      }
    });
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
        name: Lampa.Lang.translate('pathMovieQbit')
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
        name: Lampa.Lang.translate('pathTVQbit')
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
        type: "button" //доступно select,input,trigger,title,static
      },
      field: {
        name: 'Password'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          updateSecretLabel(item, 'Password', manifest.component + "transmissionPass");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "transmissionPass", 'Transmission Password');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "transmissionTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("transmission", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "transmissionReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("transmission", true);
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
        name: manifest.component + "transmissionSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: 'SequentialDownload'
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
        type: "button" //доступно select,input,trigger,title,static
      },
      field: {
        name: 'Password'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          updateSecretLabel(item, 'Password', manifest.component + "synologyPass");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "synologyPass", 'Synology Password');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "synologyTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("synology", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "synologyReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("synology", true);
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

    // Keenetic Transmission
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticUrl",
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
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
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
        name: manifest.component + "keeneticUser",
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
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
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
        name: manifest.component + "keeneticPass",
        type: "button" //доступно select,input,trigger,title,static
      },
      field: {
        name: 'Password'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          updateSecretLabel(item, 'Password', manifest.component + "keeneticPass");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "keeneticPass", 'Keenetic Password');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "keeneticTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("keenetic", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "keeneticReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("keenetic", true);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticWebdavUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: 'WebDAV URL',
        description: 'URL for WebDAV access to files'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
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
        name: manifest.component + "keeneticTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });

    // Keenetic Tweak part
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticAutostart",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": true
      },
      field: {
        name: 'Autostop'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
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
        name: manifest.component + "keeneticSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: 'SequentialDownload'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
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
        name: manifest.component + "keeneticProxy",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('LMEProxy'),
        description: Lampa.Lang.translate('LMEProxyDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
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
        name: manifest.component + "keeneticPath",
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
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
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
        name: manifest.component + "keeneticMovies",
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
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
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
        name: manifest.component + "keeneticTV",
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
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
  }

  function Main(selectedTorrent) {
    if (Lampa.Storage.field("lmetorrentUniversalAction") === "open") {
      //if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click()
      //else
      window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
    } else {
      Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('copy_secuses')
        });
      }, function () {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('copy_error')
        });
      });
    }
  }

  var DOWNLOAD_ICON = "<svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path><path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path></g></svg>";
  var CLIENT_MENU = {
    qBittorent: {
      title: "qBittorrent",
      type: "client",
      clientName: "qBittorent"
    },
    transmission: {
      title: "Transmission",
      type: "client",
      clientName: "transmission"
    },
    keenetic: {
      title: "Keenetic",
      type: "client",
      clientName: "keenetic"
    },
    synology: {
      title: "Synology",
      type: "client",
      clientName: "synology"
    },
    universalClient: {
      title: "Universal",
      type: "universal"
    }
  };
  function sendToClient(clientName, selectedTorrent, labels, dtype) {
    executeClientMethod(clientName, "SendTask", [selectedTorrent, labels, dtype], {
      silentAuth: true
    })["catch"](function () {});
  }
  function sendToUniversal(selectedTorrent) {
    Main(selectedTorrent);
  }
  function buildButtonTitle(label) {
    return "<div class=\"btnTDdownload wait\">".concat(DOWNLOAD_ICON).concat(label, "</div>");
  }
  function resolveTorrentLabels(movie) {
    var type = movie && movie.first_air_date ? "tv" : "movie";
    return "".concat(type, "/").concat(movie && movie.id);
  }
  function resolveDestinationType(movie) {
    return movie && movie.first_air_date ? "TV" : "Movies";
  }
  function Send() {
    Lampa.Listener.follow("torrent", function (e) {
      if (e.type !== "onlong") {
        return;
      }
      var selectedTorrent = e.element;
      var activeMovie = Lampa.Activity.active().movie;
      var labels = resolveTorrentLabels(activeMovie);
      var dtype = resolveDestinationType(activeMovie);
      var selectedClient = Lampa.Storage.field("lmetorrentSelect");
      var menuConfig = CLIENT_MENU[selectedClient];
      if (!menuConfig) {
        return;
      }
      e.menu.push({
        title: buildButtonTitle(menuConfig.title),
        onSelect: function onSelect() {
          if (menuConfig.type === "universal") {
            sendToUniversal(selectedTorrent);
            return;
          }
          sendToClient(menuConfig.clientName, selectedTorrent, labels, dtype);
        }
      });
    });
  }

  function startClient(_x) {
    return _startClient.apply(this, arguments);
  }
  function _startClient() {
    _startClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(client) {
      var data, info, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            if (hasClient(client)) {
              _context2.n = 1;
              break;
            }
            throw new Error('Unknown client type');
          case 1:
            _context2.n = 2;
            return executeClientMethod(client, 'GetData', [], {
              silentAuth: true
            });
          case 2:
            data = _context2.v;
            info = null;
            _context2.p = 3;
            _context2.n = 4;
            return executeClientMethod(client, 'GetInfo', [], {
              silentAuth: true
            });
          case 4:
            info = _context2.v;
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _context2.v;
            info = null;
          case 6:
            result = {
              data: data,
              info: info
            };
            console.log('TDM:', result);
            return _context2.a(2, result);
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            console.error('TDM', 'Error fetching client data:', _t2);
            throw _t2;
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5], [0, 7]]);
    }));
    return _startClient.apply(this, arguments);
  }
  function torrentInfo() {
    Lampa.Listener.follow('full', function (e) {
      if (e.type === 'complite') {
        setTimeout(function () {
          function findTorrent(data, method, id) {
            var searchLabel = "".concat(method, "/").concat(id);
            return data.find(function (item) {
              return item.labels && item.labels.includes(searchLabel);
            });
          }
          var activeClient = getActiveClientName();
          if (!hasClient(activeClient)) {
            return;
          }
          startClient(activeClient).then(function (r) {
            if (r && r.data) {
              var torrent = findTorrent(r.data, e.object.method, e.object.id);
              if (torrent) {
                // Create button element
                var $button = $("<div class=\"full-start__button selector button--lme_torrent\">\n                                <svg fill=\"currentColor\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 588.601 588.6\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <path d=\"M168.405,288.048c-3.019,0.084-4.936,0.419-5.864,0.728v20.174l5.632-0.059c6.463-0.078,10.558-4.35,10.558-10.768 C178.73,291.017,174.636,287.869,168.405,288.048z\"></path> <path d=\"M82.324,290.445c-8.177,0.227-12.49,10.278-12.49,22.491c0,12.045,4.588,21.674,12.49,21.737 c8.089,0.079,12.701-9.761,12.701-22.412C95.018,300.86,90.688,290.213,82.324,290.445z\"></path> <path d=\"M125.722,289.235c-2.813,0.082-4.617,0.396-5.484,0.696v19.515l5.276-0.059c6.03-0.074,9.858-4.203,9.858-10.404 C135.372,292.117,131.544,289.074,125.722,289.235z\"></path> <path d=\"M539.568,49.201h-178.2c-0.786,0-1.561,0.074-2.347,0.124V0L11.228,46.419v494.562L359.032,588.6v-50.814 c0.78,0.053,1.55,0.115,2.341,0.115h178.2c20.852,0,37.8-16.959,37.8-37.8v-413.1C577.368,66.161,560.425,49.201,539.568,49.201z M361.368,70.801h178.2c8.928,0,16.2,7.267,16.2,16.2v271.329c-23.272-58.704-70.2-90.393-132.864-99.347 c-18.879-2.705-21.79,0.886-19.687,19.517c1.482,13.252,11.786,9.158,18.747,10.022c56.574,7.085,103.982,49.642,115.288,104.147 c7.267,34.974-1.266,71.872-21.305,101.05h-14.08c36.64-49.116,38.834-102.389,2.964-149.575 c-33.307-43.802-99.62-61.505-145.8-42.604V71.043C359.797,70.93,360.572,70.801,361.368,70.801z M359.032,333.687 c2.226-0.891,4.25-1.703,6.265-2.479c45.752-17.649,97.817-0.606,122.096,39.946c23.757,39.726,14.223,90.034-22.892,122.565 h-14.122c3.912-2.942,7.73-6.181,11.411-9.734c26.314-25.376,35.374-56.162,24.01-90.925 c-11.527-35.258-37.446-55.244-74.007-60.592c-18.114-2.647-36.956,1.244-52.761,9.661V333.687z M359.032,378.891 c0.169-0.163,0.327-0.354,0.506-0.517c22.939-22.17,62.259-21.479,84.555,1.397c22.687,23.277,22.887,60.307-2.479,81.949 c-13.11,11.175-29.995,20.408-46.659,24.49c-11.935,2.921-23.905,4.777-35.923,6.021V378.891z M296.331,275.25l49.401-1.7v11.156 l-19.232,0.514v61.077l-11.938-0.19v-60.57l-18.236,0.493V275.25H296.331z M60.247,292.37l-12.49,0.332v49.265l-7.771-0.11v-48.953 l-11.929,0.321V284.5l32.189-1.113V292.37z M81.857,343.459c-12.677-0.211-20.545-12.983-20.545-30.26 c0-18.077,8.521-31.118,21.209-31.572c13.458-0.466,21.526,12.714,21.526,30.085C104.048,332.153,94.521,343.67,81.857,343.459z M136.836,343.343c-0.738-1.867-1.917-6.982-3.31-14.776c-1.395-8.147-3.73-10.721-8.819-10.895l-4.47,0.025v25.393l-8.701-0.138 v-60.515c3.267-0.828,8.208-1.55,13.324-1.73c7.056-0.242,11.907,1.071,15.238,4.504c2.745,2.797,4.316,7.148,4.316,12.469 c0,8.137-4.398,13.685-9.042,15.868v0.284c3.533,1.641,5.688,6.012,6.951,12.056c1.572,7.857,2.911,15.161,3.963,17.607 L136.836,343.343z M180.312,344.023c-0.788-1.935-2.059-7.229-3.554-15.298c-1.484-8.427-3.995-11.096-9.429-11.264l-4.788,0.021 v26.262l-9.305-0.143v-62.574c3.488-0.865,8.754-1.608,14.241-1.798c7.549-0.274,12.738,1.086,16.313,4.627 c2.942,2.896,4.617,7.394,4.617,12.906c0,8.412-4.704,14.16-9.682,16.428v0.295c3.783,1.688,6.096,6.207,7.446,12.477 c1.68,8.127,3.119,15.684,4.237,18.22L180.312,344.023z M231.742,344.82l-33.874-0.533v-65.646l32.598-1.118v10.083l-22.539,0.609 v17.075l21.266-0.306v9.978l-21.266,0.137v19.438l23.815,0.189V344.82z M241.052,277.151l12.234-0.422l15.515,29.141 c4.061,7.668,7.604,15.688,10.434,23.235h0.19c-0.73-9.313-1.004-18.299-1.004-28.94v-24.301l10.491-0.366v70.208l-11.675-0.18 l-15.881-30.47c-3.828-7.515-7.791-15.884-10.702-23.535l-0.264,0.105c0.43,8.812,0.517,17.819,0.517,29.072v24.421l-9.848-0.152 v-67.816H241.052z M539.568,516.301h-4.915c8.644-11.56,15.746-23.467,21.115-35.743v19.543 C555.769,509.035,548.507,516.301,539.568,516.301z\"></path> </g> </g></svg>\n                                <span>".concat(torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state, "</span>\n                            </div>"));

                // Attach event handlers
                $button.on("hover:enter", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var enabled, menu;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        enabled = Lampa.Controller.enabled().name;
                        menu = [];
                        menu.push({
                          title: Lampa.Lang.translate('resume'),
                          action: 'resume'
                        }, {
                          title: Lampa.Lang.translate('pause'),
                          action: 'pause'
                        }, {
                          title: Lampa.Lang.translate('delete'),
                          action: 'delete'
                        });

                        // Add play option for Keenetic client
                        if (activeClient === 'keenetic') {
                          menu.push({
                            title: Lampa.Lang.translate('play'),
                            action: 'play'
                          });
                        }

                        // Add full delete option for clients that support it
                        if (activeClient !== 'synology') menu.push({
                          title: Lampa.Lang.translate('fullDelete'),
                          action: 'delete',
                          deleteFiles: true
                        });

                        // Set menu
                        Lampa.Select.show({
                          title: torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state,
                          items: menu,
                          onBack: function onBack() {
                            // Повертаємось до попереднього контролера, якщо він існує
                            var currentController = Lampa.Controller.enabled();
                            if (currentController && currentController.name !== enabled) {
                              Lampa.Controller.toggle(enabled);
                            } else {
                              // Якщо контролер не змінився, просто вимикаємо меню
                              Lampa.Controller.toggle('menu');
                            }
                          },
                          onSelect: function onSelect(a) {
                            return executeClientMethod(activeClient, 'SendCommand', [a, torrent], {
                              silentAuth: true
                            });
                          }
                        });
                      case 1:
                        return _context.a(2);
                    }
                  }, _callee);
                })));

                // Append button to container
                e.object.activity.render().find('.full-start-new__buttons').append($button);
              }
            } else {
              console.error('TDM', 'Failed to get torrent client data');
            }
          });
        }, 100);
      }
    });
  }

  var TorrentStateManager = /*#__PURE__*/function () {
    function TorrentStateManager() {
      _classCallCheck(this, TorrentStateManager);
      this.torrents = [];
      this.timer = null;
      this.listener = Lampa.Listener;
    }
    return _createClass(TorrentStateManager, [{
      key: "start",
      value: function start() {
        if (this.timer) {
          return;
        }
        this.timer = this.update.bind(this);
        Lampa.Timer.add(15000, this.timer, true);
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.timer) {
          Lampa.Timer.remove(this.timer);
          this.timer = null;
        }
      }
    }, {
      key: "update",
      value: function () {
        var _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var client_name, isUniversal, new_torrents, has_active_downloads_before, has_active_downloads_after;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.p = 0;
                client_name = Lampa.Storage.get('lmetorrentSelect');
                isUniversal = client_name === 'universal' || client_name === 'universalClient';
                if (!(isUniversal || !hasClient(client_name))) {
                  _context.n = 1;
                  break;
                }
                return _context.a(2);
              case 1:
                _context.n = 2;
                return executeClientMethod(client_name, 'GetData', [], {
                  silentAuth: true
                });
              case 2:
                new_torrents = _context.v;
                if (new_torrents) {
                  has_active_downloads_before = this.hasActiveDownloads();
                  this.torrents = new_torrents;
                  has_active_downloads_after = this.hasActiveDownloads();
                  this.listener.send('torrents:updated', {
                    torrents: this.torrents
                  });
                  if (has_active_downloads_before !== has_active_downloads_after) {
                    this.listener.send('torrents:status_changed', {
                      active: has_active_downloads_after
                    });
                  }
                }
                _context.n = 4;
                break;
              case 3:
                _context.p = 3;
                _context.v;
              case 4:
                return _context.a(2);
            }
          }, _callee, this, [[0, 3]]);
        }));
        function update() {
          return _update.apply(this, arguments);
        }
        return update;
      }()
    }, {
      key: "hasActiveDownloads",
      value: function hasActiveDownloads() {
        return this.torrents.some(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          return state.indexOf('download') >= 0 || state.indexOf('check') >= 0;
        });
      }
    }, {
      key: "on",
      value: function on(event, callback) {
        this.listener.follow(event, callback);
      }
    }]);
  }();
  var TorrentStateManager$1 = new TorrentStateManager();

  /**
   * Utility functions for Torrent Manager plugin
   */

  /**
   * Create a panel navigation item for Lampa.Select.show
   * @returns {Function} Function that calls Lampa.Activity.push
   */
  function createPanelNavigationItem() {
    return function () {
      Lampa.Activity.push({
        url: '',
        title: String(Lampa.Storage.get('lmetorrentSelect') || '').toUpperCase() + " Manager",
        component: 'lmetorrentPanel',
        page: 1
      });
    };
  }

  var HeaderIconController = /*#__PURE__*/function () {
    function HeaderIconController(element) {
      _classCallCheck(this, HeaderIconController);
      this.element = $(element);
      this.bind();
      this.listen();
    }
    return _createClass(HeaderIconController, [{
      key: "bind",
      value: function bind() {
        this.element.on('hover:enter', this.showSidebar.bind(this));
      }
    }, {
      key: "listen",
      value: function listen() {
        TorrentStateManager$1.on('torrents:status_changed', this.updateColor.bind(this));
      }
    }, {
      key: "showSidebar",
      value: function showSidebar() {
        var torrents = TorrentStateManager$1.torrents.filter(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          var isCompleted = Number(torrent && torrent.completed) >= 1;
          return !isCompleted && state.indexOf('finish') < 0;
        });
        var sortedTorrents = this.sortTorrents(torrents);
        var activeDownloads = torrents.filter(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          return state.indexOf('download') >= 0 || state.indexOf('check') >= 0;
        }).length;
        // Create items for Lampa.Select.show
        var items = [
        // Panel navigation item
        //createPanelNavigationItem(),
        {
          title: String(Lampa.Storage.get('lmetorrentSelect') || '').toUpperCase() + " Manager",
          action: 'panel',
          onSelect: function onSelect() {
            createPanelNavigationItem()();
          }
        }].concat(_toConsumableArray(sortedTorrents.map(function (torrent) {
          return {
            title: "".concat(torrent.name, " (").concat(Math.round((torrent.completed || 0) * 100), "%)"),
            action: 'torrent',
            torrent: torrent
          };
        })));
        Lampa.Select.show({
          title: "Torrents (".concat(activeDownloads, "/").concat(TorrentStateManager$1.torrents.length, ")"),
          items: items,
          onBack: function onBack() {
            Lampa.Controller.toggle('content');
          },
          onSelect: function onSelect(item) {
            if (item.action === 'torrent') {
              showTorrentMenu(item.torrent, TorrentStateManager$1.torrents);
            } else if (item.action === 'panel') {
              item.onSelect();
            }
            // For summary item, we could show a general menu or just do nothing
          }
        });
      }
    }, {
      key: "sortTorrents",
      value: function sortTorrents(torrents) {
        return torrents.sort(function (a, b) {
          var aState = String(a && a.state || '').toLowerCase();
          var bState = String(b && b.state || '').toLowerCase();
          var aDownloading = aState.indexOf('download') >= 0;
          var bDownloading = bState.indexOf('download') >= 0;
          if (aDownloading && !bDownloading) return -1;
          if (!aDownloading && bDownloading) return 1;
          return String(b && b.id || '').localeCompare(String(a && a.id || ''));
        });
      }
    }, {
      key: "updateColor",
      value: function updateColor(event) {
        if (event.active) {
          this.element.css('color', 'yellow');
        } else {
          this.element.css('color', 'limegreen');
        }
      }
    }]);
  }();

  var TORRENT_ICON = "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12 4L12 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M16 10L12 14L8 10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M4 18H20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    </svg>\n";
  var DomInjector = /*#__PURE__*/function () {
    function DomInjector() {
      _classCallCheck(this, DomInjector);
    }
    return _createClass(DomInjector, [{
      key: "inject",
      value: function inject() {
        var iconElement = Lampa.Head.addIcon(TORRENT_ICON);
        iconElement.addClass('torrent-manager-icon');
        return new HeaderIconController(iconElement);
      }
    }]);
  }();
  var DomInjector$1 = new DomInjector();

  /** 
   * Plugin manifest information
   */
  var MANIFEST = {
    type: 'other',
    version: '3.0',
    author: '@lme_chat',
    name: 'Torrent Manager',
    description: 'Manager and Runner query',
    component: 'lmetorrent',
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M13.684 23.94a12.013 12.013 0 0 0 9.599-7.79c-.118.044-.26.096-.432.147c-2 .59-3.404-.466-3.687-.649c-.283-.18-.587-.48-.643-.464c-.183 1.132-1.218 2.706-3.58 3.42c-1.295.391-2.687.4-3.681-.157l.328.822c.13.328.351.866.488 1.192c0 0 .858 2.044 1.608 3.48M2.723 7.153l3.54-.66c.323-.059.68.124.794.407l2.432 6.07c.332.633.399.773.615 1.043c0 0 1.68 2.398 4.24 1.812c1.726-.394 2.532-1.69 2.587-2.612c.057-.296-.032-.669-.185-1.016L13.832 5.61c-.117-.266.022-.527.306-.581l2.953-.55a.69.69 0 0 1 .706.376l3.227 6.91c.13.276.394.712.588.966c0 0 .671.964 1.747.78c.266 0 .569-.143.569-.143c.047-.43.072-.866.072-1.31c0-6.627-5.373-12-12.002-12C5.372.06 0 5.433 0 12.06c0 5.319 3.46 9.827 8.252 11.402a24.768 24.768 0 0 1-.919-2.121L2.298 7.808c-.111-.297.083-.59.425-.654\"/></svg>"
  };
  var SELECT_KEY = "".concat(MANIFEST.component, "Select");
  var SYNOLOGY_KEY = "lmetorrentsynologyKey";

  /**
   * Register all UI templates with Lampa
   */
  function registerTemplates() {
    // CSS styles
    Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:0;padding:0 2.5%}.lmetorrent-catalog--state{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:45vh;padding:0 2%}.lmetorrent-state{max-width:46em;width:100%;text-align:center}.lmetorrent-state__title{font-size:1.35em;font-weight:600}.lmetorrent-state__description{margin-top:.8em;opacity:.85;line-height:1.4}.lmetorrent-state__actions{margin-top:1.3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:.7em}.lmetorrent-catalog--list.category-full .card.card--category .card__view{margin-bottom:.72em}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed.is-low{--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed.is-mid{--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed.is-high{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}@media screen and (max-width:900px){.lmetorrent-head{margin:0 2% 3% 2%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:.6em}.lmetorrent-header__space{margin-left:0;width:100%;font-size:.95em;opacity:.85}.lmetorrent-catalog--list.category-full{margin-left:0;padding:0 1%}}@media screen and (max-width:767px){.lmetorrent-head{margin:0 2% 2.4% 2%;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.8em}.lmetorrent-header__update{font-size:1.12em}.lmetorrent-header__space{margin-left:auto;width:auto;font-size:1.08em;opacity:.98;white-space:nowrap}.lmetorrent-catalog--list.category-full{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0}.lmetorrent-catalog--list.category-full .card.card--category{width:33.3333% !important;min-width:0;padding-left:.22em;padding-right:.22em}}@media screen and (max-width:560px){.lmetorrent-head{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.lmetorrent-catalog--list.category-full{padding:0}.lmetorrent-catalog--list.category-full .card.card--category .card__view{margin-bottom:.5em}.lmetorrent_card__size,.lmetorrent_card__state,.lmetorrent_card__completed{font-size:.68em}}@media screen and (max-width:420px){.lmetorrent-head{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:.55em}.lmetorrent-header__space{width:100%;margin-left:0}}.lmetorrent-item{margin-left:.5em;margin-right:.5em;margin-bottom:1em;width:-webkit-calc(14.2857142857% - 1em);width:calc(14.2857142857% - 1em);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}.torrent-manager-icon{--icon-status-color:limegreen;color:var(--icon-status-color)}.torrent-manager-sidebar{position:fixed;top:0;right:-350px;width:350px;height:100%;background-color:rgba(0,0,0,0.85);z-index:1000;-webkit-transition:right .3s;-o-transition:right .3s;transition:right .3s;color:white;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.torrent-manager-sidebar.visible{right:0}.torrent-manager-sidebar__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;font-weight:bold;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.torrent-manager-sidebar__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;background-color:rgba(255,255,255,0.1);-webkit-border-radius:5px;border-radius:5px;cursor:pointer;gap:10px}.torrent-manager-sidebar__item:hover{background-color:rgba(255,255,255,0.2)}.torrent-manager-sidebar__item-name{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item-percent{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}\n        </style>\n    ");

    // Header template
    Lampa.Template.add('lmetorrent_header', "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n          <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n        ");

    // List item template
    Lampa.Template.add('lmetorrent_item', "<div class=\"card selector lmetorrent-item\">\n            <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n        </div>");

    // Card item template
    Lampa.Template.add('lmetorrent_item__card', "<div class=\"card card--category selector layer--visible layer--render\">\n            <div class=\"card__view\">\n                <img src=\"{image}\" data-src=\"{image_src}\" alt=\"{title}\" class=\"card__img\">\n                <div class=\"card__icons\">\n                    <div class=\"card__icons-inner\">\n                    </div>\n                </div>\n                <div class=\"lmetorrent_card__state\">{state}</div>\n                <div class=\"lmetorrent_card__size\">{size}</div>\n                <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n            </div>\n        </div>");
  }

  /**
   * Check if a session key date is older than 5 days
   * 
   * @param {number} keyDate - Timestamp of the key creation date
   * @returns {boolean} - True if the key is old or doesn't exist
   */
  function isKeyDateOld(keyDate) {
    if (!keyDate) {
      return true;
    }
    var currentTimestamp = Math.floor(Date.now() / 1000);
    var fiveDaysInSeconds = 5 * 24 * 60 * 60;
    var timestampFiveDaysAgo = currentTimestamp - fiveDaysInSeconds;
    return keyDate < timestampFiveDaysAgo;
  }

  /**
   * Create and add menu button for the plugin
   * 
   * @returns {JQuery} - The created button element
   */
  function createMenuButton() {
    return Lampa.Menu.addButton(MANIFEST.icon, MANIFEST.name, createPanelNavigationItem());
  }

  /**
   * Initialize client authentication based on selected client
   */
  function initializeClientAuth() {
    var selectedClient = Lampa.Storage.get(SELECT_KEY);
    var clientAuthHandlers = {
      qBittorent: function qBittorent() {
        return Qbittorent.auth(false)["catch"](function () {});
      },
      transmission: function transmission() {
        return Transmission.auth();
      },
      keenetic: function keenetic() {
        return Keenetic.auth();
      },
      synology: function synology() {
        var synologyKey = Lampa.Storage.field(SYNOLOGY_KEY);
        var hasValidSynologySid = synologyKey && _typeof(synologyKey) === "object" && synologyKey.sID;
        if (!hasValidSynologySid || isKeyDateOld(synologyKey.createDate)) {
          return Synology.auth();
        }
        return Promise.resolve();
      }
    };
    var authHandler = clientAuthHandlers[selectedClient];
    if (authHandler) {
      authHandler();
    }
  }

  /**
   * Main plugin initialization function
   */
  function initializePlugin() {
    try {
      // Initialize language support
      Component$1();

      // Register UI templates
      registerTemplates();

      // Register panel component
      Lampa.Component.add('lmetorrentPanel', Component);

      // Register plugin in manifest
      Lampa.Manifest.plugins = MANIFEST;

      // Add menu button if not using universal client
      var selectedClient = Lampa.Storage.get(SELECT_KEY);
      if (selectedClient !== 'universalClient') {
        torrentInfo();
        createMenuButton();
      }

      // Add CSS styles
      $('body').append(Lampa.Template.get('lmemStyle', {}, true));

      // Initialize configuration
      Main$1(MANIFEST);

      // Initialize downloader
      Send();

      // Initialize client authentication
      initializeClientAuth();

      // Initialize new header feature
      DomInjector$1.inject();
      TorrentStateManager$1.start();
    } catch (error) {
      console.error('TDM', 'Error initializing Torrent Manager plugin:', error);
    }
  }

  /**
   * Start the plugin when Lampa is ready
   */
  function startPlugin() {
    window.plugin_lmetorrent_ready = true;
    if (window.appready) {
      initializePlugin();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
          initializePlugin();
        }
      });
    }
  }

  // Initialize the plugin if not already initialized
  if (!window.plugin_lmetorrent_ready) {
    startPlugin();
  }

})();
