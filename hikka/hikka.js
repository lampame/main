(function () {
  'use strict';

  // Styles registration module for Hikka plugin
  // [Висновок] Deepwiki: Use Lampa.Template.add with @@include to inject CSS; preserve current behavior (no direct append here)

  function registerStyles() {
    try {
      // Mirror existing implementation in [plugins/hikka/hikka.js](plugins/hikka/hikka.js:6)
      Lampa.Template.add('hikka_styles', "\n      <style>\n      @charset 'UTF-8';.card__icons .icon--ua{background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.card__quality[data-quality=ua]{display:none}.card__quality[data-quality=ua]::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.card__icons .icon--ua{background-image:url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='20' fill='%230052CC'/%3E%3Crect y='20' width='60' height='20' fill='%23FFDD00'/%3E%3C/svg%3E');background-size:contain;background-repeat:no-repeat;background-position:center}.card--tv .card__type,.card--movie .card__type,.card--ova .card__type,.card--ona .card__type,.card--special .card__type,.card--music .card__type{display:none !important;visibility:hidden !important;opacity:0 !important;position:absolute !important;left:-9999px !important;z-index:-1 !important}.hikka-custom-type-badge{position:absolute;top:8px;left:8px;background:-webkit-linear-gradient(315deg,#667eea 0,#764ba2 100%);background:-o-linear-gradient(315deg,#667eea 0,#764ba2 100%);background:linear-gradient(135deg,#667eea 0,#764ba2 100%);color:white;padding:2px 6px;-webkit-border-radius:3px;border-radius:3px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;z-index:10}.hikka-anime-card__rating,.hikka-anime-card__episodes,.hikka-anime-card__status{font-size:12px;color:rgba(255,255,255,0.8);margin-top:2px}.hikka-anime-card__rating{color:#ffd700}.hikka-anime-card__status{color:#90ee90}.hikka-custom-type.card--tv,.card--tv .hikka-custom-type{background-color:rgba(0,123,255,0.8) !important}.hikka-custom-type.card--movie,.card--movie .hikka-custom-type{background-color:rgba(220,53,69,0.8) !important}.hikka-custom-type.card--ova,.hikka-custom-type.card--ona,.hikka-custom-type.card--special,.hikka-custom-type.card--music,.card--ova .hikka-custom-type,.card--ona .hikka-custom-type,.card--special .hikka-custom-type,.card--music .hikka-custom-type{background-color:rgba(108,117,125,0.8) !important}\n      </style>\n    ");
      // [Відхилення] Не виконуємо $('body').append(...) щоб не змінити поточну поведінку
    } catch (e) {
      console.log('Hikka', ' registerStyles error:', e);
    }
  }

  // Menu registration module for Hikka plugin
  // Mirrors existing addMenuItem() from [plugins/hikka/hikka.js](plugins/hikka/hikka.js:14)
  // [Висновок] Deepwiki: Add menu item via DOM append; hook execution from bootstrap after app ready

  function addMenuItem() {
    try {
      var button = $("<li class=\"menu__item selector\" data-action=\"hikka_anime\">\n      <div class=\"menu__ico\">\n        <svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\">\n          <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n          <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n          <g id=\"SVGRepo_iconCarrier\">\n            <defs>\n              <style>.a{fill:currentColor;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;}</style>\n            </defs>\n            <rect class=\"a\" x=\"6.1336\" y=\"9.4032\" width=\"35.7327\" height=\"26.5581\" rx=\"6.7532\"></rect>\n            <line class=\"a\" x1=\"17.4835\" y1=\"4.5\" x2=\"20.4078\" y2=\"9.4032\"></line>\n            <line class=\"a\" x1=\"13.2594\" y1=\"21.6849\" x2=\"20.0829\" y2=\"18.9592\"></line>\n            <line class=\"a\" x1=\"30.5165\" y1=\"4.5\" x2=\"27.5922\" y2=\"9.4032\"></line>\n            <line class=\"a\" x1=\"34.7406\" y1=\"21.6849\" x2=\"27.9171\" y2=\"18.9592\"></line>\n            <path class=\"a\" d=\"M29.0544,24.9161c-.5827,1.4721-1.1508,2.54-2.5273,2.54-1.074,0-1.666-.4976-2.5271-1.8363-.8611,1.3387-1.4531,1.8363-2.5271,1.8363-1.3765,0-1.9446-1.0682-2.5273-2.54\"></path>\n            <path class=\"a\" d=\"M25.9676,35.9613v2.033s8.6917.2889,8.6917,5.5057H13.3407c0-5.2168,8.6917-5.5057,8.6917-5.5057v-2.033\"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"menu__text\">Hikka Anime</div>\n    </li>");
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'Hikka Anime',
          component: 'hikka_anime',
          page: 1
        });
      });
      var list = $('.menu .menu__list').eq(0);
      if (list && list.length) list.append(button);
    } catch (e) {
      console.log('Hikka', ' addMenuItem error:', e);
    }
  }

  // Interceptor: Full description chips (genres/companies) rebinding
  // [План 4.1] Винести логіку з overrideFullChipsAndDiscuss() ([plugins/hikka/hikka.js:70])
  // [Висновок] Deepwiki: Реєстрація на Lampa.Listener 'full' → type==='complite', контейнер .full-descr__tags (src/components/full/descr.js)

  function registerFullChipsInterceptor() {
    try {
      var rebindChips = function rebindChips(movie) {
        var tagsContainer = document.querySelector('.full-descr__tags');
        if (!tagsContainer || !movie) return;
        var chips = tagsContainer.querySelectorAll('.selector');
        chips.forEach(function (chip) {
          var name = (chip.textContent || '').trim();
          var matched = null;
          var type = null;
          if (Array.isArray(movie.genres)) {
            matched = movie.genres.find(function (g) {
              return (g.name || '').trim() === name;
            });
            if (matched) type = 'genre';
          }
          if (!matched && Array.isArray(movie.production_companies)) {
            matched = movie.production_companies.find(function (c) {
              return (c.name || '').trim() === name;
            });
            if (matched) type = 'company';
          }
          if (matched) {
            $(chip).off('hover:enter');
            $(chip).on('hover:enter', function () {
              var filt = type === 'genre' ? {
                genres: [matched.id]
              } : {
                studios: [matched.id]
              };
              // Навігаційний інтерцептор (activity:init) ігнорує component==='hikka_anime' — конфліктів немає
              Lampa.Activity.push({
                url: '',
                title: name,
                component: 'hikka_anime',
                page: 1,
                filters: filt
              });
              return false;
            });
          }
        });
      };
      if (window.__hikka_fullchips_initialized) return;
      window.__hikka_fullchips_initialized = true;
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite' && e.object && e.object.source === 'hikka') {
          try {
            // Позначка активного Full від Hikka для сумісності з іншими перехопленнями
            window.__hikka_full_active = true;
            var movie = e.data && e.data.movie ? e.data.movie : null;
            rebindChips(movie);

            // Спостерігач за змінами тегів, щоб перев’язувати при оновленні DOM
            var tagsContainer = document.querySelector('.full-descr__tags');
            if (tagsContainer) {
              var observer = new MutationObserver(function () {
                rebindChips(movie);
              });
              observer.observe(tagsContainer, {
                childList: true,
                subtree: true
              });
            }
          } catch (err) {
            console.error('Hikka', 'FullChips interceptor error:', err);
          }
        }
      });
    } catch (e) {
      console.error('Hikka', 'registerFullChipsInterceptor error:', e);
    }
  }

  // Interceptor: Discuss UI cleanup for Hikka Full
  // [План 4.2] Винести DOM-очистку з overrideFullChipsAndDiscuss() ([plugins/hikka/hikka.js:116])
  // [Висновок] Deepwiki: Підписка на Lampa.Listener 'full' type==='complite'; при активному source='hikka'

  function registerDiscussUIInterceptor() {
    try {
      var cleanupHikkaFullUI = function cleanupHikkaFullUI() {
        try {
          // Reactions blocks (new and legacy) та кнопки реакцій
          document.querySelectorAll('.full-start-new__reactions, .full-start__reactions, .button--reaction').forEach(function (el) {
            return el.remove();
          });

          // "Ще" (More) блок, який тригерить CUB discuss fetch
          var more = document.querySelector('.full-review-all');
          if (more) more.remove();

          // Лайки у футері кожного відгуку
          document.querySelectorAll('.full-review__footer').forEach(function (el) {
            return el.remove();
          });

          // Форма додавання коментаря
          var addReview = document.querySelector('.full-review-add.selector');
          if (addReview) addReview.remove();
        } catch (err) {
          console.error('Hikka', 'Cleanup UI error:', err);
        }
      };
      if (window.__hikka_discussui_initialized) return;
      window.__hikka_discussui_initialized = true;
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite' && e.object && e.object.source === 'hikka') {
          try {
            // Одноразове очищення + повтори після можливих асинхронних вставок
            cleanupHikkaFullUI();
            setTimeout(cleanupHikkaFullUI, 300);
            setTimeout(cleanupHikkaFullUI, 1000);
          } catch (err) {
            console.error('Hikka', 'DiscussUI interceptor error:', err);
          }
        }
      });
    } catch (e) {
      console.error('Hikka', 'registerDiscussUIInterceptor error:', e);
    }
  }

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
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
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
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
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _superPropGet(t, o, e, r) {
    var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
    return 2 & r && "function" == typeof p ? function (t) {
      return p.apply(e, t);
    } : p;
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

  // Rules for navigation redirection to Hikka catalog component
  // [План 1.3] Додати rules.js — конфіг правил редіректу
  // Deepwiki: e.object може бути змінено у фазі 'activity:init' до створення активності

  /**
   * Apply redirect/mutation rules to navigation object before activity is created
   * @param {{object: any}} e - Listener event with navigation object
   * @param {{debug?: boolean}} options
   */
  function applyRules(e) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;
    try {
      var obj = e && e.object ? e.object : null;
      if (!obj || _typeof(obj) !== 'object') return;

      /* Skip if this is already our component */
      if (obj.component === 'hikka_anime') return;
      // Skip if already normalized by push preprocess (idempotence)
      if (obj.__hikka_normalized === true) {
        if (debug) {
          try {
            console.log('Hikka', 'rules.apply skip: already normalized');
          } catch (_) {}
        }
        return;
      }

      // Context guard: work only for Hikka context
      // - when full screen from Hikka is active
      // - or when source explicitly equals 'hikka'
      var isHikkaContext = window.__hikka_full_active === true || obj.source === 'hikka';
      if (!isHikkaContext) return;

      // Only target Lampa core components triggered from full/descr chips and related flows
      var targets = ['category', 'category_full', 'company'];
      if (!targets.includes(obj.component)) return;

      // Build filters
      var filters = {};

      // Genres: may be number or array; normalize to array
      if (typeof obj.genres !== 'undefined' && obj.genres !== null) {
        if (Array.isArray(obj.genres)) filters.genres = obj.genres.slice(0);else filters.genres = [obj.genres];
      }

      // Companies: Lampa 'company' uses 'id' field; map to studios filter
      if (typeof obj.id !== 'undefined' && obj.id !== null) {
        filters.studios = [obj.id];
      }

      // If we don't have any filter signals, do nothing
      if (!filters.genres && !filters.studios) return;

      // Mutate navigation object to our catalog component
      obj.component = 'hikka_anime';
      obj.title = obj.title || 'Hikka Anime';
      obj.page = 1;
      obj.filters = filters;

      // Ensure url is set (some Lampa flows expect url string; empty is acceptable)
      if (typeof obj.url === 'undefined') obj.url = '';
      if (debug) {
        try {
          console.log('Hikka', 'rules.apply → hikka_anime', JSON.stringify({
            title: obj.title,
            component: obj.component,
            page: obj.page,
            filters: obj.filters
          }));
        } catch (_) {}
      }
    } catch (err) {
      console.error('Hikka', 'applyRules error:', err);
    }
  }

  // Navigation Activity Interceptor for Hikka
  function registerActivityRedirect() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      if (window.__hikka_activity_redirect_initialized) return;
      window.__hikka_activity_redirect_initialized = true;
      var _options$debug = options.debug,
        debug = _options$debug === void 0 ? false : _options$debug;

      // Deepwiki: слухати 'activity' і реагувати на type==='init' для безпечної мутації e.object
      Lampa.Listener.follow('activity', function (e) {
        try {
          if (!e || e.type !== 'init') return;
          // e.object — об'єкт навігації перед створенням активності
          applyRules(e, {
            debug: debug
          });
        } catch (err) {
          console.error('Hikka', 'activityRedirect handler error:', err);
        }
      });
    } catch (e) {
      console.error('Hikka', 'registerActivityRedirect error:', e);
    }
  }

  // Hikka Navigation Push Preprocess Interceptor
  // [План] див. /Task/hikka/plan_intercept-engine_push-preprocess_fix_20251025.md
  // [Deepwiki] Підтверджено патерн обгортання Lampa.Activity.push з guard-ами і маркуванням __hikka_normalized

  function registerActivityPushPreprocess() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      if (window.__hikka_push_redirect_initialized) return;
      window.__hikka_push_redirect_initialized = true;
      var _options$debug = options.debug,
        debug = _options$debug === void 0 ? false : _options$debug;
      var originalPush = Lampa.Activity.push;

      // Обгортка push: нормалізація об'єкта ДО створення активності/компонента
      Lampa.Activity.push = function (object) {
        try {
          var obj = object || {};
          if (!obj || _typeof(obj) !== 'object') {
            return originalPush.apply(this, arguments);
          }

          // Пропустити, якщо вже наш компонент або вже нормалізовано
          if (obj.component === 'hikka_anime' || obj.__hikka_normalized === true) {
            return originalPush.apply(this, arguments);
          }

          // Контекст: лише для Hikka (активний Full або явне джерело)
          var isHikkaContext = window.__hikka_full_active === true || obj.source === 'hikka';
          if (!isHikkaContext) {
            return originalPush.apply(this, arguments);
          }

          // Цільові компоненти навігації, що редіректяться
          var targets = ['category', 'category_full', 'company'];
          if (!targets.includes(obj.component)) {
            return originalPush.apply(this, arguments);
          }

          // Побудова фільтрів з вхідних полів
          var filters = {};

          // Genres: число або масив → масив
          if (typeof obj.genres !== 'undefined' && obj.genres !== null) {
            filters.genres = Array.isArray(obj.genres) ? obj.genres.slice(0) : [obj.genres];
          }

          // Companies: Lampa використовує поле id → studios
          if (typeof obj.id !== 'undefined' && obj.id !== null) {
            filters.studios = [obj.id];
          }

          // Якщо є сигнали фільтрів — переналаштувати компонент на hikka_anime
          if (filters.genres || filters.studios) {
            obj.component = 'hikka_anime';
            obj.title = obj.title || 'Hikka Anime';
            obj.page = 1;
            obj.filters = filters;

            // Деякі потоки Lampa очікують url (порожній рядок прийнятний)
            if (typeof obj.url === 'undefined') obj.url = '';

            // Маркер ідемпотентності: уникнути повторної мутації
            obj.__hikka_normalized = true;
            if (debug) {
              try {
                console.log('Hikka', 'pushPreprocess → hikka_anime', JSON.stringify({
                  title: obj.title,
                  component: obj.component,
                  page: obj.page,
                  filters: obj.filters
                }));
              } catch (_) {/* ignore logging errors */}
            }
          }
        } catch (err) {
          console.error('Hikka', 'pushPreprocess wrapper error:', err);
        }

        // Завжди викликати оригінальний push
        return originalPush.apply(this, arguments);
      };
    } catch (e) {
      console.error('Hikka', 'registerActivityPushPreprocess error:', e);
    }
  }

  // Interceptors registrar for Hikka plugin
  function registerInterceptors() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      if (window.__hikka_interceptors_initialized) return;
      window.__hikka_interceptors_initialized = true;
      var _options$enableActivi = options.enableActivityPushPatch,
        enableActivityPushPatch = _options$enableActivi === void 0 ? false : _options$enableActivi,
        _options$enableActivi2 = options.enableActivityRedirect,
        enableActivityRedirect = _options$enableActivi2 === void 0 ? true : _options$enableActivi2,
        _options$enableActivi3 = options.enableActivityPushPreprocess,
        enableActivityPushPreprocess = _options$enableActivi3 === void 0 ? true : _options$enableActivi3,
        _options$debugInterce = options.debugInterceptors,
        debugInterceptors = _options$debugInterce === void 0 ? false : _options$debugInterce;

      // [Потребує перевірки] Інтерцептори активовано після міграції логіки з hikka.js
      registerFullChipsInterceptor();
      registerDiscussUIInterceptor();
      if (enableActivityRedirect) registerActivityRedirect({
        debug: debugInterceptors
      });
      // Реєструємо push-препроцес останнім: хук на Activity.push активний для всіх подальших викликів
      if (enableActivityPushPreprocess) registerActivityPushPreprocess({
        debug: debugInterceptors
      });
    } catch (e) {
      console.error('Hikka', 'registerInterceptors error:', e);
    }
  }

  // Hikka API endpoints (migrated implementations; inert until imported)
  // [План 2.3] Перенесено HTTP-методи із ../api.js без зміни логіки та сигнатур
  // [Висновок] Deepwiki: Reguest.silent/native(url, success, error, post_data, params); JSON.stringify для тіла POST; headers у 5-му параметрі

  var network = new Lampa.Reguest();
  var proxy_url = 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/';
  var api_url = proxy_url + 'https://api.hikka.io/';

  // In-memory cache for details (сеансовий кеш)
  var __hikkaDetailsCache = new Map();

  // Функція для створення заголовків з проксі хедером
  function getProxyHeaders() {
    var additionalHeaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread2({
      'x-requested-with': 'lme-ukraine'
    }, additionalHeaders);
  }

  /**
   * getAnimeList(success, error)
   * Копія з plugins/hikka/api.js
   */
  function getAnimeList(success, error) {
    var url = api_url + 'anime';
    var postData = {
      media_type: [],
      status: [],
      season: [],
      rating: [],
      years: [],
      genres: [],
      studios: [],
      only_translated: false,
      sort: ['score:desc']
    };
    console.log('Hikka', ' Fetching anime list...');
    network["native"](url, function (data) {
      console.log('Hikka', ' Response:', data);
      if (data && data.list) {
        // normalizeAnimeData залишається у ../api.js; тут повертаємо сирі дані
        // Міграція нормалізаторів буде виконана у api/normalizers.js (план 2.2)
        // Для інертності цього модуля залишаємо як у вихідному коді, але без виклику нормалізатора
        // Щоб зберегти ідентичну поведінку при майбутньому імпорті, повторимо структуру:
        try {
          // Тимчасовий клон логіки без імпорту нормалізатора
          var MEDIA_TYPE_MAP = {
            'tv': 'ТВ Серіал',
            'movie': 'Фільм',
            'ova': 'OVA',
            'ona': 'ONA',
            'special': 'Спеціальний',
            'music': 'Музичний'
          };
          var normalizeAnimeData = function normalizeAnimeData(anime) {
            var getMediaTypeLabel = function getMediaTypeLabel(mediaType) {
              return MEDIA_TYPE_MAP[mediaType] || mediaType || 'ТВ Серіал';
            };
            var image = anime && anime.image;
            var isAbs = typeof image === 'string' && /^https?:\/\//i.test(image);
            var base = {
              id: anime.slug,
              title: anime.title_ua || anime.title_en || anime.title_ja,
              name: anime.media_type !== 'movie' ? anime.title_ua || anime.title_en || anime.title_ja : undefined,
              original_title: anime.title_en || anime.title_ja || anime.title_ua,
              original_name: anime.media_type === 'movie' ? null : anime.title_en || anime.title_ja || anime.title_ua,
              vote_average: anime.score || anime.native_score || 0,
              overview: anime.synopsis_ua || anime.synopsis_en || '',
              year: anime.year,
              release_year: anime.year || '2023',
              release_date: anime.year ? anime.year + '-01-01' : undefined,
              first_air_date: anime.media_type !== 'movie' && anime.year ? anime.year + '-01-01' : undefined,
              status: anime.status,
              media_type: anime.media_type,
              quality: getMediaTypeLabel(anime.media_type),
              has_translation: anime.translated_ua,
              translated_ua: true,
              hikka_slug: anime.slug
            };
            if (isAbs) {
              // Absolute URL → use direct fields for cards (no TMDB prefixing)
              base.img = image;
              base.poster = image;
            } else {
              // TMDB partial → use *_path fields to be resolved via Api.img/TMDB.image
              base.poster_path = image;
              base.backdrop_path = image;
            }
            return base;
          };
          var results = data.list.map(normalizeAnimeData);
          success({
            results: results,
            total_pages: data.pagination ? data.pagination.pages : 1,
            page: 1
          });
        } catch (e) {
          console.log('Hikka', ' Normalize error (list):', e);
          success({
            results: data.list || [],
            total_pages: data.pagination ? data.pagination.pages : 1,
            page: 1
          });
        }
      } else {
        console.log('Hikka', ' No data received');
        error && error();
      }
    }, function (err) {
      console.log('Hikka', ' Error:', err);
      error && error();
    }, JSON.stringify(postData), {
      method: 'POST',
      headers: getProxyHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * getAnimeListWithFilters(filters, page, success, error)
   * Копія з plugins/hikka/api.js
   */
  function getAnimeListWithFilters(filters, page, success, error) {
    var url = api_url + 'anime';

    // Add page as URL parameter, not in POST body
    if (page > 1) {
      url += '?page=' + page;
    }
    var postData = {
      media_type: filters.media_type || [],
      status: filters.status || [],
      season: filters.season || [],
      rating: filters.rating || [],
      years: [],
      genres: filters.genres || [],
      studios: filters.studios || [],
      only_translated: filters.only_translated || false,
      sort: filters.sort || ['score:desc']
    };
    console.log('Hikka', ' Fetching anime with filters:', postData, 'Page:', page);
    network["native"](url, function (data) {
      console.log('Hikka', ' Response:', data);
      if (data && data.list) {
        try {
          var MEDIA_TYPE_MAP = {
            'tv': 'ТВ Серіал',
            'movie': 'Фільм',
            'ova': 'OVA',
            'ona': 'ONA',
            'special': 'Спеціальний',
            'music': 'Музичний'
          };
          var normalizeAnimeData = function normalizeAnimeData(anime) {
            var getMediaTypeLabel = function getMediaTypeLabel(mediaType) {
              return MEDIA_TYPE_MAP[mediaType] || mediaType || 'ТВ Серіал';
            };
            var image = anime && anime.image;
            var isAbs = typeof image === 'string' && /^https?:\/\//i.test(image);
            var base = {
              id: anime.slug,
              title: anime.title_ua || anime.title_en || anime.title_ja,
              name: anime.media_type !== 'movie' ? anime.title_ua || anime.title_en || anime.title_ja : undefined,
              original_title: anime.title_en || anime.title_ja || anime.title_ua,
              original_name: anime.media_type === 'movie' ? null : anime.title_en || anime.title_ja || anime.title_ua,
              vote_average: anime.score || anime.native_score || 0,
              overview: anime.synopsis_ua || anime.synopsis_en || '',
              year: anime.year,
              release_year: anime.year || '2023',
              release_date: anime.year ? anime.year + '-01-01' : undefined,
              first_air_date: anime.media_type !== 'movie' && anime.year ? anime.year + '-01-01' : undefined,
              status: anime.status,
              media_type: anime.media_type,
              quality: getMediaTypeLabel(anime.media_type),
              has_translation: anime.translated_ua,
              translated_ua: true,
              hikka_slug: anime.slug
            };
            if (isAbs) {
              base.img = image;
              base.poster = image;
            } else {
              base.poster_path = image;
              base.backdrop_path = image;
            }
            return base;
          };
          var results = data.list.map(normalizeAnimeData);
          success({
            results: results,
            total_pages: data.pagination ? data.pagination.pages : 1,
            page: data.pagination ? data.pagination.page : 1
          });
        } catch (e) {
          console.log('Hikka', ' Normalize error (filters):', e);
          success({
            results: data.list || [],
            total_pages: data.pagination ? data.pagination.pages : 1,
            page: data.pagination ? data.pagination.page : 1
          });
        }
      } else {
        console.log('Hikka', ' No data received');
        error && error();
      }
    }, function (err) {
      console.log('Hikka', ' Error:', err);
      error && error();
    }, JSON.stringify(postData), {
      method: 'POST',
      headers: getProxyHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * getAnimeDetails(hikka_slug, success, error)
   * Копія з plugins/hikka/api.js (з кешем)
   */
  function getAnimeDetails(hikka_slug, success, error) {
    console.log('Hikka', ' Fetching anime details for:', hikka_slug);

    // Return from cache if available
    if (__hikkaDetailsCache.has(hikka_slug)) {
      var cached = __hikkaDetailsCache.get(hikka_slug);
      console.log('Hikka', ' Details from cache:', hikka_slug);
      success(cached);
      return;
    }
    var url = api_url + 'anime/' + hikka_slug;
    network.silent(url, function (data) {
      console.log('Hikka', ' Details response:', data);
      if (data) {
        // Save to cache
        __hikkaDetailsCache.set(hikka_slug, data);
        success(data);
      } else {
        console.log('Hikka', ' No details data received');
        if (error) error('No details');
      }
    }, function (err) {
      console.log('Hikka', ' Error fetching details:', err);
      if (error) error(err);
    }, false, {
      headers: getProxyHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * getGenres(success, error)
   * Копія з plugins/hikka/api.js
   */
  function getGenres(success, error) {
    console.log('Hikka', ' Fetching genres from API');
    var url = api_url + 'genres';
    network.silent(url, function (data) {
      console.log('Hikka', ' Genres response:', data);
      if (data && data.list) {
        success && success(data);
      } else {
        console.log('Hikka', ' No genres data received');
        error && error();
      }
    }, function (err) {
      console.log('Hikka', ' Error fetching genres:', err);
      error && error();
    });
  }

  /**
   * getCharacters(slug, success, error)
   * Копія з plugins/hikka/api.js
   */
  function getCharacters(slug, success, error) {
    if (!slug) {
      if (error) error('No slug');
      return;
    }
    var url = api_url + 'anime/' + slug + '/characters';
    network.silent(url, function (data) {
      success && success(data);
    }, function (err) {
      console.log('Hikka', ' Error fetching characters:', err);
      error && error(err);
    }, false, {
      headers: getProxyHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * getComments(slug, page = 1, size = 3, success, error)
   * Копія з plugins/hikka/api.js
   */
  function getComments(slug) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var success = arguments.length > 3 ? arguments[3] : undefined;
    var error = arguments.length > 4 ? arguments[4] : undefined;
    if (!slug) {
      if (error) error('No slug');
      return;
    }
    var qp = '?page=' + (page || 1) + '&size=' + (size || 3);
    var url = api_url + 'comments/anime/' + slug + '/list' + qp;
    network.silent(url, function (data) {
      success && success(data);
    }, function (err) {
      console.log('Hikka', ' Error fetching comments:', err);
      error && error(err);
    }, false, {
      headers: getProxyHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * getFranchise(slug, success, error)
   * Копія з plugins/hikka/api.js
   */
  function getFranchise(slug, success, error) {
    if (!slug) {
      if (error) error('No slug');
      return;
    }
    var url = api_url + 'related/anime/' + slug + '/franchise';
    network.silent(url, function (data) {
      success && success(data);
    }, function (err) {
      console.log('Hikka', ' Error fetching franchise:', err);
      error && error(err);
    }, false, {
      headers: getProxyHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Експортуємо Api-об’єкт зі стабільними іменами методів
  var Api$1 = {
    getAnimeList: getAnimeList,
    getAnimeListWithFilters: getAnimeListWithFilters,
    getAnimeDetails: getAnimeDetails,
    getGenres: getGenres,
    getCharacters: getCharacters,
    getComments: getComments,
    getFranchise: getFranchise,
    // Внутрішні утиліти (можуть бути корисні при налагодженні)
    __network: network,
    __getProxyHeaders: getProxyHeaders,
    __detailsCache: __hikkaDetailsCache,
    __api_url: api_url,
    __proxy_url: proxy_url
  };

  // Hikka API constants (scaffold, no behavior change)

  // Стандартизовані ключі статусів для Full (Lang.translate('tv_status_'+key))
  var STATUS_STD_MAP = {
    finished: 'ended',
    ongoing: 'returning_series',
    announced: 'planned',
    paused: 'in_production',
    discontinued: 'canceled'
  };

  // Hikka normalizers (migrated implementations; inert until imported)

  // Helper: detect absolute URLs (http/https) to avoid TMDB prefixing on non-TMDB images
  function isAbsoluteUrl(u) {
    return typeof u === 'string' && /^https?:\/\//i.test(u);
  }

  /**
   * buildFullPayloadFromDetails(details)
   * Побудова даних для нативного Full із деталей Hikka
   */
  function buildFullPayloadFromDetails$1(details) {
    var mediaType = details && details.media_type === 'movie' ? 'movie' : 'tv';
    var title_ua = details && details.title_ua;
    var title_en = details && details.title_en;
    var title_ja = details && details.title_ja;
    var year = details && details.year;
    var image = details && details.image;
    var backdrop = details && details.backdrop;
    // Для Full потрібно передавати стандартизований ключ статусу
    var statusKey = details ? STATUS_STD_MAP[details.status] || details.status : undefined;
    var card = {
      id: details && details.slug,
      title: title_ua || title_en || title_ja,
      name: mediaType !== 'movie' ? title_ua || title_en || title_ja : undefined,
      original_title: title_ja || title_en || title_ua,
      original_name: mediaType !== 'movie' ? title_en || title_ja || title_ua : null,
      // Використати title_ja як tagline для відображення оригінальної назви
      tagline: title_ja || '',
      overview: function () {
        var raw = details && (details.synopsis_ua || details.synopsis_en) || '';
        // Очистити Markdown-посилання: [текст](url) -> текст
        return raw.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      }(),
      vote_average: details && (details.score || details.native_score) || 0,
      status: statusKey,
      release_date: year ? year + '-01-01' : undefined,
      first_air_date: mediaType !== 'movie' && year ? year + '-01-01' : undefined,
      // runtime for movies (duration in minutes from Hikka)
      runtime: details && typeof details.duration === 'number' ? details.duration : undefined,
      // Ensure countries arrays to avoid join errors in Full
      production_countries: Array.isArray(details && details.countries) ? details.countries.map(function (c) {
        if (typeof c === 'string') return {
          name: c
        };
        return {
          iso_3166_1: c && c.iso_3166_1 || undefined,
          name: c && c.name || ''
        };
      }) : [],
      countries: Array.isArray(details && details.countries) ? details.countries.map(function (c) {
        return typeof c === 'string' ? c : c && c.name || '';
      }) : [],
      source: 'hikka'
    };

    // Зображення: уникаємо подвійного TMDB-префіксу
    if (isAbsoluteUrl(backdrop)) card.background_image = backdrop;else if (backdrop) card.backdrop_path = backdrop;
    if (isAbsoluteUrl(image)) card.img = image;else if (image) card.poster_path = image;

    // Жанри
    if (details && Array.isArray(details.genres)) {
      card.genres = details.genres.map(function (g, i) {
        return {
          id: g.slug || i,
          name: g.name_ua || g.name_en || g.name
        };
      });
    }

    // Кількість сезонів/епізодів
    if (details && typeof details.seasons_count === 'number') card.number_of_seasons = details.seasons_count;
    if (details && typeof details.episodes_count === 'number') card.number_of_episodes = details.episodes_count;
    // Додаткові лічильники випущених/загальних епізодів + fallback для Start
    if (typeof details.episodes_total === 'number') {
      card.episodes_total = details.episodes_total;
      if (!card.number_of_episodes) card.number_of_episodes = details.episodes_total;
    }
    if (typeof details.episodes_released === 'number') card.episodes_released = details.episodes_released;

    // Компанії виробництва (щоб Full міг відобразити без TMDB)
    if (details && Array.isArray(details.companies)) {
      card.production_companies = details.companies.map(function (c) {
        return {
          id: c && c.company && c.company.slug || undefined,
          name: c && c.company && c.company.name || ''
        };
      });
    }

    // Епізоди
    // Ensure no episodes for pure movies to avoid empty tab
    var episodes;
    if (details && Array.isArray(details.episodes) && details.episodes.length) {
      var seasonNumber = details.season || 1;
      episodes = {
        name: 'Season ' + seasonNumber,
        episodes: details.episodes.map(function (ep, idx) {
          var still = ep.still_path || null;
          var epimg = ep.image || null;
          var out = {
            id: ep.id || undefined,
            air_date: ep.air_date || (year ? year + '-01-01' : undefined),
            episode_number: ep.number || ep.episode_number || idx + 1,
            season_number: ep.season || ep.season_number || seasonNumber,
            name: ep.title_ua || ep.title_en || ep.name || 'Епізод ' + (ep.number || idx + 1),
            overview: ep.synopsis_ua || ep.synopsis_en || ep.overview || ''
          };
          if (epimg && isAbsoluteUrl(epimg)) out.img = epimg;else if (still) out.still_path = still;
          return out;
        })
      };
      if (!card.number_of_episodes) card.number_of_episodes = episodes.episodes.length;
    }
    return {
      card: card,
      episodes: episodes,
      method: mediaType,
      id: details && details.slug
    };
  }

  // Modular imports (refactor scaffolding)

  // Побудова payload для нативного Full із деталей Hikka
  function buildFullPayloadFromDetails(details) {
    // Delegated to migrated normalizer to keep single source of truth
    return buildFullPayloadFromDetails$1(details);
  }
  var Api = {
    buildFullPayloadFromDetails: buildFullPayloadFromDetails,
    getAnimeList: function getAnimeList(success, error) {
      // Delegate to migrated endpoints to keep network logic centralized
      return Api$1.getAnimeList(success, error);
    },
    getAnimeListWithFilters: function getAnimeListWithFilters(filters, page, success, error) {
      return Api$1.getAnimeListWithFilters(filters, page, success, error);
    },
    /* getTmdbId deprecated — removed after migration to provider-based Full with local Hikka data */

    getAnimeDetails: function getAnimeDetails(hikka_slug, success, error) {
      // Delegate to migrated endpoints (includes in-memory cache and headers)
      return Api$1.getAnimeDetails(hikka_slug, success, error);
    },
    getGenres: function getGenres(success, error) {
      // Delegate to migrated endpoints
      return Api$1.getGenres(success, error);
    },
    // Hikka Characters API: GET /anime/{slug}/characters
    getCharacters: function getCharacters(slug, success, error) {
      // Delegate to migrated endpoints
      return Api$1.getCharacters(slug, success, error);
    },
    // Hikka Comments API: GET /comments/anime/{slug}/list?page={page}&size={size}
    getComments: function getComments(slug) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
      var success = arguments.length > 3 ? arguments[3] : undefined;
      var error = arguments.length > 4 ? arguments[4] : undefined;
      // Delegate to migrated endpoints
      return Api$1.getComments(slug, page, size, success, error);
    },
    // Hikka Related Franchise API: GET /related/anime/{slug}/franchise
    getFranchise: function getFranchise(slug, success, error) {
      // Delegate to migrated endpoints
      return Api$1.getFranchise(slug, success, error);
    }
  };

  /**
   * Hikka Source Provider for Lampa Api.sources
   * Implements: full(params, oncomplite, onerror)
   * Returns local data to Full component to avoid any TMDB/CUB requests
   */
  var HikkaSourceProvider = {
    /**
     * Build Full data from Hikka details
     * @param {Object} params - object from Activity.push to Full (expects id=slug, method, source='hikka')
     * @param {Function} oncomplite - callback with data object: { movie, episodes?, persons?, discuss? ... }
     * @param {Function} onerror - error callback
     */
    full: function full() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var slug = params.id || params.card && (params.card.hikka_slug || params.card.id) || null;
        if (!slug) {
          console.log('Hikka', ' SourceProvider: missing slug in params', params);
          if (onerror) onerror('Hikka Source: slug is empty');
          return;
        }

        // 1) Load base details (uses in-memory cache internally)
        Api.getAnimeDetails(slug, function (details) {
          var payload = Api.buildFullPayloadFromDetails(details);
          if (!payload || !payload.card) {
            console.log('Hikka', ' SourceProvider: invalid payload after details', payload);
            if (onerror) onerror('Hikka Source: invalid payload');
            return;
          }

          // Base data object expected by Full
          var data = {
            movie: payload.card,
            episodes: payload.episodes || null,
            // Ensure countries array exists at top-level to avoid join errors in Full
            countries: Array.isArray(payload.card && payload.card.countries) ? payload.card.countries : [],
            // Sections to be filled below
            persons: {
              cast: [],
              crew: []
            },
            collection: null,
            recomend: null,
            simular: null,
            videos: null,
            reactions: null,
            discuss: null,
            comments: null
          };

          // 2) Parallel fetch: persons (characters), first page of comments, and franchise collection
          var pending = 3;
          var done = function done() {
            pending--;
            if (pending <= 0) {
              oncomplite && oncomplite(data);
            }
          };

          // 2.a) Characters -> persons.cast (Hikka schema: { pagination, list: [{ main, character: {...} }] })
          Api.getCharacters(slug, function (chars) {
            try {
              var list = Array.isArray(chars && chars.list) ? chars.list : [];
              var cast = list.map(function (item, idx) {
                var ch = item && item.character || {};
                var roleText = item && item.main ? 'Головний персонаж' : 'Персонаж';
                return {
                  id: ch.slug || 'ch_' + idx,
                  name: ch.name_ua || ch.name_en || ch.name_ja || '—',
                  character: roleText,
                  // Використовуємо прямий URL як img, щоб обійти Api.img для TMDB
                  profile_path: null,
                  img: ch.image || null
                };
              });
              data.persons = {
                cast: cast,
                crew: []
              };
            } catch (e) {
              console.log('Hikka', ' SourceProvider: map characters error', e);
              data.persons = {
                cast: [],
                crew: []
              };
            }
            done();
          }, function (err) {
            console.log('Hikka', ' SourceProvider: characters error', err);
            data.persons = {
              cast: [],
              crew: []
            };
            done();
          });

          // 2.b) Comments -> discuss (for Discuss component with lazy-load via discussGet)
          var firstPage = params && params.page || 1;
          var pageSize = 3;
          Api.getComments(slug, firstPage, pageSize, function (resp) {
            try {
              var items = resp && (resp.list || resp.result || resp.comments || resp.items) || [];
              var mapped = items.map(function (c, idx) {
                var a = c.author || c.user || {};
                return {
                  id: c.id || c.slug || 'cm_' + idx,
                  author: a.username || a.name_ua || a.name_en || a.name || c.author || 'Anonymous',
                  text: c.text || c.content || c.comment || ''
                };
              });
              var pagination = resp && (resp.pagination || resp.pager || {});
              var total_pages = pagination.pages || resp.total_pages || 1;
              var total = pagination.total || resp.total || mapped.length;

              // Use 'discuss' object to integrate with Full Discuss component
              data.discuss = {
                result: mapped,
                total: total,
                total_pages: total_pages
              };
            } catch (e) {
              console.log('Hikka', ' SourceProvider: map comments error', e);
              data.discuss = {
                result: [],
                total: 0,
                total_pages: 1
              };
            }
            done();
          }, function (err) {
            console.log('Hikka', ' SourceProvider: comments error', err);
            data.discuss = {
              result: [],
              total: 0,
              total_pages: 1
            };
            done();
          });

          // 2.c) Franchise -> collection slider
          Api.getFranchise(slug, function (rel) {
            try {
              var animeList = Array.isArray(rel && rel.anime) ? rel.anime : [];
              var results = animeList.map(function (item, idx) {
                var mediaType = item.media_type === 'movie' ? 'movie' : 'tv';
                var year = item.year;
                var startDate = item.start_date ? new Date(item.start_date * 1000).toISOString().slice(0, 10) : undefined;
                return {
                  id: item.slug || 'fr_' + idx,
                  title: item.title_ua || item.title_en || item.title_ja || '',
                  original_title: item.title_en || item.title_ja || item.title_ua || '',
                  // Для колекційних карток не використовуємо *_path, аби уникнути Api.img з TMDB
                  poster_path: null,
                  backdrop_path: null,
                  poster: item.image || null,
                  img: item.image || null,
                  vote_average: item.score || item.native_score || 0,
                  release_date: mediaType === 'movie' ? year ? year + '-01-01' : startDate : undefined,
                  first_air_date: mediaType !== 'movie' ? year ? year + '-01-01' : startDate : undefined,
                  media_type: mediaType,
                  source: 'hikka'
                };
              }).slice(0, 19);
              data.collection = {
                title: 'Франшиза',
                results: results
              };
            } catch (e) {
              console.log('Hikka', ' SourceProvider: map franchise error', e);
              data.collection = {
                title: 'Франшиза',
                results: []
              };
            }
            done();
          }, function (err) {
            console.log('Hikka', ' SourceProvider: franchise error:', err);
            data.collection = {
              title: 'Франшиза',
              results: []
            };
            done();
          });
        }, function (err) {
          console.log('Hikka', ' SourceProvider: error loading details', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('Hikka', ' SourceProvider: exception', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Lazy-load comments for Discuss component
     * Signature: discussGet(params, oncomplite, onerror)
     * params: { id|slug|object, page }
     */
    discussGet: function discussGet() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var page = params.page || 1;
        // Try to resolve slug/id from different placements
        var slug = params.id || params.slug || params.object && (params.object.id || params.object.movie && params.object.movie.id) || null;
        if (!slug) {
          if (onerror) onerror('Hikka discussGet: slug is empty');
          return;
        }
        Api.getComments(slug, page, 3, function (resp) {
          var items = resp && (resp.list || resp.result || resp.comments || resp.items) || [];
          var mapped = items.map(function (c, idx) {
            var a = c.author || c.user || {};
            return {
              id: c.id || c.slug || 'cm_' + idx,
              author: a.username || a.name_ua || a.name_en || a.name || c.author || 'Anonymous',
              text: c.text || c.content || c.comment || ''
            };
          });
          var pagination = resp && (resp.pagination || resp.pager || {});
          var total_pages = pagination.pages || resp.total_pages || 1;
          var total = pagination.total || resp.total || mapped.length;
          oncomplite && oncomplite({
            result: mapped,
            total: total,
            total_pages: total_pages
          });
        }, function (err) {
          console.log('Hikka', ' discussGet error:', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('Hikka', ' discussGet exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Open catalog by genre chip from Full Descr
     * Signature: category(params, oncomplite, onerror)
     * params: { id, page, ... }
     */
    category: function category() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var genreId = params.id || params.genres;
        var page = params.page || 1;
        if (!genreId) {
          if (onerror) onerror('Hikka category: genre id is empty');
          return;
        }
        var filters = {
          media_type: [],
          status: [],
          season: [],
          rating: [],
          genres: [genreId],
          only_translated: false,
          sort: ['score:desc']
        };
        Api.getAnimeListWithFilters(filters, page, function (data) {
          oncomplite && oncomplite(data);
        }, function (err) {
          console.log('Hikka', ' category error:', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('Hikka', ' category exception:', e);
        if (onerror) onerror(e);
      }
    },
    /**
     * Open catalog by production company chip from Full Descr
     * Signature: company(params, oncomplite, onerror)
     * params: { id, page, ... }
     */
    company: function company() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      try {
        var studioId = params.id;
        var page = params.page || 1;
        if (!studioId) {
          if (onerror) onerror('Hikka company: studio id is empty');
          return;
        }
        var filters = {
          media_type: [],
          status: [],
          season: [],
          rating: [],
          genres: [],
          studios: [studioId],
          only_translated: false,
          sort: ['score:desc']
        };
        Api.getAnimeListWithFilters(filters, page, function (data) {
          oncomplite && oncomplite(data);
        }, function (err) {
          console.log('Hikka', ' company error:', err);
          if (onerror) onerror(err);
        });
      } catch (e) {
        console.log('Hikka', ' company exception:', e);
        if (onerror) onerror(e);
      }
    }
  };

  // Providers registrar for Hikka plugin

  function registerProviders() {
    try {
      if (!Lampa || !Lampa.Api) return;
      Lampa.Api.sources = Lampa.Api.sources || {};
      if (!Lampa.Api.sources.hikka) {
        Lampa.Api.sources.hikka = HikkaSourceProvider;
        console.log('Hikka', 'Source provider registered');
      }
    } catch (e) {
      console.error('Hikka', 'registerProviders error:', e);
    }
  }

  // Функція для видалення елемента
  function remove(elem) {
    if (elem) elem.remove();
  }

  // Кастомна аніме картка з розширеними параметрами
  var AnimeCard = /*#__PURE__*/function (_Lampa$Card) {
    function AnimeCard(data) {
      var _this;
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, AnimeCard);
      _this = _callSuper(this, AnimeCard, [data, params]);
      _this.data = data;
      return _this;
    }
    _inherits(AnimeCard, _Lampa$Card);
    return _createClass(AnimeCard, [{
      key: "build",
      value: function build() {
        console.log('Hikka', 'Starting AnimeCard build for:', this.data.title || 'Unknown');

        // Спочатку викликаємо батьківський build для ініціалізації стандартної структури
        _superPropGet(AnimeCard, "build", this, 3)([]);

        // Перевіряємо чи карта була створена правильно
        if (!this.card) {
          console.error('Hikka', 'Card element not created by parent build');
          return;
        }
        console.log('Hikka', 'Parent build completed, card structure exists');

        // Створюємо кастомний бейдж типу для всіх карток
        this.createCustomTypeBadge();

        // Додаємо іконку перекладу для has_translation після створення бейджу
        if (this.data.has_translation) {
          console.log('Hikka', 'Adding translation icon');
          this.addicon('book'); // Використовуємо book як тимчасову іконку
        }
      }

      /**
       * Завантажити зображення
       */
    }, {
      key: "image",
      value: function image() {
        var _this2 = this;
        // Санітуємо помилкові *_path з абсолютними URL, щоб уникнути TMDB префіксу
        var isAbs = function isAbs(u) {
          return typeof u === 'string' && /^https?:\/\//i.test(u);
        };
        if (isAbs(this.data.poster_path)) {
          this.data.poster = this.data.poster || this.data.poster_path;
          // видаляємо *_path, щоб базові механізми Lampa не префіксували TMDB
          delete this.data.poster_path;
        }
        if (isAbs(this.data.backdrop_path)) {
          // для карток використовуємо теж прямий URL
          this.data.img = this.data.img || this.data.backdrop_path;
          delete this.data.backdrop_path;
        }

        // Перевизначаємо батьківський метод для використання правильного джерела зображення
        if (this.data.img) {
          this.img.src = this.data.img;
        } else if (this.data.poster) {
          this.img.src = this.data.poster;
        } else {
          this.img.src = './img/img_broken.svg';
        }
        this.img.onload = function () {
          _this2.card.classList.add('card--loaded');
        };
        this.img.onerror = function () {
          _this2.img.src = './img/img_broken.svg';
        };
      }

      /**
       * Створити картку
       */
    }, {
      key: "create",
      value: function create() {
        var _this3 = this;
        this.build();
        this.card.addEventListener('hover:focus', function () {
          if (_this3.onFocus) _this3.onFocus(_this3.card, _this3.data);
        });
        this.card.addEventListener('hover:touch', function () {
          if (_this3.onTouch) _this3.onTouch(_this3.card, _this3.data);
        });
        this.card.addEventListener('hover:hover', function () {
          if (_this3.onHover) _this3.onHover(_this3.card, _this3.data);
        });
        this.card.addEventListener('hover:enter', function () {
          // Запобігаємо повторним натисканням
          if (_this3.loading) return;
          _this3.loading = true;

          // Показуємо індикатор завантаження
          var loader = document.createElement('div');
          loader.innerHTML = '⏳';
          loader.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 20px; z-index: 1000;';
          _this3.card.appendChild(loader);

          // Завантажуємо деталі Hikka та відкриваємо нативний Full
          var slug = _this3.data.hikka_slug || _this3.data.id;
          Api.getAnimeDetails(slug, function (details) {
            var payload = Api.buildFullPayloadFromDetails(details);
            _this3.loading = false;
            if (loader.parentNode) loader.parentNode.removeChild(loader);
            if (payload && payload.id && payload.card) {
              console.log('Hikka', 'Navigating to Full with Hikka data:', payload.id, payload.method);
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: payload.id,
                method: payload.method === 'movie' ? 'movie' : 'tv',
                card: payload.card,
                episodes: payload.episodes,
                // активує вкладку Епізоди, якщо присутні
                // Хінти пошуку для інтеграцій торент/онлайн [Deepwiki-verified]
                search: payload.card && (payload.card.original_title || payload.card.title) || '',
                search_one: payload.card && payload.card.title || '',
                search_two: payload.card && payload.card.original_title || '',
                source: 'hikka'
              });
            } else {
              console.log('Hikka', 'Invalid payload from details, cannot open Full');
              Lampa.Noty.show('Помилка формування картки Hikka');
            }
          }, function (error) {
            _this3.loading = false;
            if (loader.parentNode) loader.parentNode.removeChild(loader);
            console.log('Hikka', 'Error loading Hikka details:', error);
            Lampa.Noty.show('Помилка завантаження деталей Hikka');
          });
        });
        this.image();
      }

      /**
       * Завантажити зображення коли картка видима
       */
    }, {
      key: "visible",
      value: function visible() {
        if (this.onVisible) this.onVisible(this.card, this.data);
      }

      /**
       * Знищити картку
       */
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.img) {
          this.img.onerror = function () {};
          this.img.onload = function () {};
          this.img.src = '';
        }
        remove(this.card);
        this.card = null;
        this.img = null;
      }

      /**
       * Створюємо кастомний бейдж типу замість стандартного
       */
    }, {
      key: "createCustomTypeBadge",
      value: function createCustomTypeBadge() {
        console.log('Hikka', 'Creating custom type badge:', this.data.quality);

        // Ховаємо стандартний бейдж типу
        this.card.classList.add('hikka-hide-type');

        // Створюємо кастомний бейдж типу
        if (this.data.quality) {
          var customBadge = document.createElement('div');
          customBadge.className = 'hikka-custom-type-badge';
          customBadge.innerText = this.data.quality;

          // Додаємо кастомний бейдж в card__view
          var viewElement = this.card.querySelector('.card__view');
          if (viewElement) {
            viewElement.appendChild(customBadge);
            console.log('Hikka', 'Custom type badge created:', this.data.quality);
          }
        }
      }

      /**
       * Рендер
       */
    }, {
      key: "render",
      value: function render(js) {
        return js ? this.card : $(this.card);
      }
    }]);
  }(Lampa.Card);

  function component(object) {
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var items = [];
    var html = document.createElement('div');
    var contentContainer = document.createElement('div');
    var active = 0;
    var last;
    var total_pages = 1;
    var current_page = 1;
    var loading = false;

    // Фільтри
    var filters = {
      media_type: [],
      status: [],
      season: [],
      rating: [],
      sort: ['score:desc'],
      genres: [],
      // Додаємо genres фільтр
      studios: [],
      // Фільтр за студіями (для чипів виробників)
      only_translated: false // Додаємо only_translated фільтр
    };

    // Кеш для жанрів
    var genresCache = null;

    // Застосувати початкові фільтри з Activity об'єкта (перед першим завантаженням)
    function __applyInitialFiltersFromObject() {
      try {
        if (!object || !object.filters) return;
        var incoming = object.filters || {};
        var toArray = function toArray(v) {
          return Array.isArray(v) ? v : v ? [v] : [];
        };
        if (incoming.media_type !== undefined) filters.media_type = toArray(incoming.media_type);
        if (incoming.status !== undefined) filters.status = toArray(incoming.status);
        if (incoming.season !== undefined) filters.season = toArray(incoming.season);
        if (incoming.rating !== undefined) filters.rating = toArray(incoming.rating);
        if (incoming.sort !== undefined) filters.sort = toArray(incoming.sort);
        if (incoming.genres !== undefined) filters.genres = toArray(incoming.genres);
        if (incoming.studios !== undefined) filters.studios = toArray(incoming.studios);
        if (typeof incoming.only_translated === 'boolean') filters.only_translated = incoming.only_translated;
      } catch (e) {
        console.log('Hikka', 'Apply initial filters error:', e);
      }
    }
    var FILTER_OPTIONS = {
      media_type: [{
        title: 'Всі типи',
        value: ''
      }, {
        title: 'ТВ Серіал',
        value: 'tv'
      }, {
        title: 'Фільм',
        value: 'movie'
      }, {
        title: 'OVA',
        value: 'ova'
      }, {
        title: 'ONA',
        value: 'ona'
      }, {
        title: 'Спеціальний',
        value: 'special'
      }, {
        title: 'Музичний',
        value: 'music'
      }],
      status: [{
        title: 'Всі статуси',
        value: ''
      }, {
        title: 'Завершено',
        value: 'finished'
      }, {
        title: 'Виходить',
        value: 'ongoing'
      }, {
        title: 'Анонсовано',
        value: 'announced'
      }, {
        title: 'Призупинено',
        value: 'paused'
      }, {
        title: 'Скасовано',
        value: 'discontinued'
      }],
      season: [{
        title: 'Всі сезони',
        value: ''
      }, {
        title: 'Зима',
        value: 'winter'
      }, {
        title: 'Весна',
        value: 'spring'
      }, {
        title: 'Літо',
        value: 'summer'
      }, {
        title: 'Осінь',
        value: 'fall'
      }],
      rating: [{
        title: 'Всі рейтинги',
        value: ''
      }, {
        title: 'G',
        value: 'g'
      }, {
        title: 'PG',
        value: 'pg'
      }, {
        title: 'PG-13',
        value: 'pg_13'
      }, {
        title: 'R',
        value: 'r'
      }, {
        title: 'R+',
        value: 'r_plus'
      }, {
        title: 'Rx',
        value: 'rx'
      }],
      sort: [{
        title: 'За рейтингом ↓',
        value: 'score:desc'
      }, {
        title: 'За рейтингом ↑',
        value: 'score:asc'
      }, {
        title: 'За датою ↓',
        value: 'start_date:desc'
      }, {
        title: 'За датою ↑',
        value: 'start_date:asc'
      }, {
        title: 'За назвою ↓',
        value: 'title:desc'
      }, {
        title: 'За назвою ↑',
        value: 'title:asc'
      }],
      genres: [{
        title: 'Всі жанри',
        value: ''
      }
      // Жанри будуть завантажені динамічно
      ]
    };
    this.create = function () {
      var _this = this;
      this.activity.loader(true);
      html.classList.add('layer--wheight');

      // Create custom filter panel
      this.buildFilters();

      // Content container for scrollable items
      contentContainer.classList.add('category-full', 'items', 'items--cards');
      scroll.append(contentContainer);
      scroll.onScroll = this.limit.bind(this);
      scroll.onWheel = function (step) {
        if (!Lampa.Controller.own(_this)) _this.start();
        if (step > 0) Navigator.move('down');else Navigator.move('up');
      };

      // Append scroll to html
      var scrollRendered = scroll.render();
      html.appendChild(scrollRendered instanceof jQuery ? scrollRendered[0] : scrollRendered);

      // Застосувати початкові фільтри (з Activity.push -> object.filters) перед першим завантаженням
      __applyInitialFiltersFromObject();
      this.load();
      return html;
    };
    this.buildFilters = function () {
      var _this2 = this;
      // Create custom filter panel
      var filterPanel = document.createElement('div');
      filterPanel.className = 'filter-panel';
      var filterScroll = new Lampa.Scroll({
        mask: false,
        over: true,
        horizontal: true
      });
      var filterBody = document.createElement('div');
      filterBody.className = 'hikka torrent-filter';

      // Media Type filter
      var mediaTypeBtn = document.createElement('div');
      mediaTypeBtn.className = 'simple-button simple-button--filter selector';
      mediaTypeBtn.innerHTML = '<span>Тип</span>';
      $(mediaTypeBtn).on('hover:enter', function () {
        _this2.showFilterSelect('media_type', FILTER_OPTIONS.media_type, mediaTypeBtn);
      });

      // Status filter
      var statusBtn = document.createElement('div');
      statusBtn.className = 'simple-button simple-button--filter selector';
      statusBtn.innerHTML = '<span>Статус</span>';
      $(statusBtn).on('hover:enter', function () {
        _this2.showFilterSelect('status', FILTER_OPTIONS.status, statusBtn);
      });

      // Season filter
      var seasonBtn = document.createElement('div');
      seasonBtn.className = 'simple-button simple-button--filter selector';
      seasonBtn.innerHTML = '<span>Сезон</span>';
      $(seasonBtn).on('hover:enter', function () {
        _this2.showFilterSelect('season', FILTER_OPTIONS.season, seasonBtn);
      });

      // Rating filter
      var ratingBtn = document.createElement('div');
      ratingBtn.className = 'simple-button simple-button--filter selector';
      ratingBtn.innerHTML = '<span>Рейтинг</span>';
      $(ratingBtn).on('hover:enter', function () {
        _this2.showFilterSelect('rating', FILTER_OPTIONS.rating, ratingBtn);
      });

      // Sort filter
      var sortBtn = document.createElement('div');
      sortBtn.className = 'simple-button simple-button--filter selector';
      sortBtn.innerHTML = '<span>Сортування</span>';
      $(sortBtn).on('hover:enter', function () {
        _this2.showFilterSelect('sort', FILTER_OPTIONS.sort.filter(function (item) {
          return !item.value.includes('title');
        }), sortBtn);
      });

      // Genre filter - новий фільтр зі спеціальною логікою
      var genreBtn = document.createElement('div');
      genreBtn.className = 'simple-button simple-button--filter selector';
      genreBtn.innerHTML = '<span>Жанр</span>';
      $(genreBtn).on('hover:enter', function () {
        // Використовуємо спеціальну функцію для жанрів замість стандартної
        _this2.showGenresSelector(genreBtn);
      });

      // Only Translated toggle filter
      var onlyTranslatedBtn = document.createElement('div');
      onlyTranslatedBtn.className = 'simple-button simple-button--filter selector';
      onlyTranslatedBtn.innerHTML = '<span>Переклад</span>';
      $(onlyTranslatedBtn).on('hover:enter', function () {
        _this2.showOnlyTranslatedToggle(onlyTranslatedBtn);
      });

      // Reset filters button
      var resetBtn = document.createElement('div');
      resetBtn.className = 'simple-button simple-button--filter selector';
      resetBtn.innerHTML = '<span>Скинути</span>';
      $(resetBtn).on('hover:enter', function () {
        _this2.resetAllFilters();
      });
      filterBody.appendChild(mediaTypeBtn);
      filterBody.appendChild(statusBtn);
      filterBody.appendChild(seasonBtn);
      filterBody.appendChild(ratingBtn);
      filterBody.appendChild(sortBtn);
      filterBody.appendChild(genreBtn); // Додаємо кнопку жанрів
      filterBody.appendChild(onlyTranslatedBtn); // Додаємо кнопку перекладу
      filterBody.appendChild(resetBtn); // Додаємо кнопку скидання

      filterScroll.append(filterBody);
      filterPanel.appendChild(filterScroll.render()[0]);
      html.appendChild(filterPanel);
    };
    this.showFilterSelect = function (filterType, options, buttonElement) {
      var _this3 = this;
      Lampa.Select.show({
        title: 'Оберіть опцію',
        items: options,
        onSelect: function onSelect(item) {
          console.log('Hikka', 'Selected:', filterType, item);

          // Update filter value
          if (filterType === 'sort') {
            filters.sort = [item.value];
          } else {
            filters[filterType] = item.value ? [item.value] : [];
          }

          // Update button text with shorter format
          var shortTitle = item.title;
          if (item.title.length > 15) {
            // Скорочуємо довгі назви
            if (item.title === 'За рейтингом ↓') shortTitle = 'Рейтинг ↓';else if (item.title === 'За рейтингом ↑') shortTitle = 'Рейтинг ↑';else if (item.title === 'За датою ↓') shortTitle = 'Дата ↓';else if (item.title === 'За датою ↑') shortTitle = 'Дата ↑';else if (item.title === 'За назвою ↓') shortTitle = 'Назва ↓';else if (item.title === 'За назвою ↑') shortTitle = 'Назва ↑';else if (item.title.startsWith('Всі')) shortTitle = 'Всі';else shortTitle = item.title.substring(0, 12) + '...';
          }
          buttonElement.querySelector('span').textContent = shortTitle;
          current_page = 1;
          _this3.clear();
          _this3.load();
        }
      });
    };
    this.load = function () {
      var _this4 = this;
      if (loading) return;
      loading = true;
      Api.getAnimeListWithFilters(filters, current_page, function (data) {
        loading = false;
        _this4.activity.loader(false);
        if (data && data.results && data.results.length) {
          total_pages = data.total_pages || 1;
          _this4.append(data.results);
          if (current_page === 1) {
            scroll.minus();
          }
          if (current_page < total_pages) {
            scroll.onEnd = function () {
              if (!loading) {
                current_page++;
                _this4.load();
              }
            };
          } else {
            scroll.onEnd = null;
          }
        } else if (current_page === 1) {
          _this4.empty();
        }
      }, function () {
        loading = false;
        _this4.activity.loader(false);
        if (current_page === 1) {
          _this4.empty();
        }
      });
    };
    this.append = function (results) {
      var _this5 = this;
      results.forEach(function (element) {
        var card = new AnimeCard(element, {
          object: object,
          card_category: true,
          card_small: false
        });
        card.create();
        card.onFocus = function (target, card_data) {
          last = target;
          active = items.indexOf(card);
          scroll.update(card.render(true));

          // Обчислюємо коректний фон без TMDB префіксу для абсолютних URL,
          // і з побудовою через Api.img для TMDB partial-путів
          var isAbs = function isAbs(u) {
            return typeof u === 'string' && /^https?:\/\//i.test(u);
          };
          var bg = null;
          if (card_data.img) bg = card_data.img;else if (card_data.poster) bg = card_data.poster;else if (card_data.backdrop_path) {
            bg = isAbs(card_data.backdrop_path) ? card_data.backdrop_path : Lampa.Api && Lampa.Api.img ? Lampa.Api.img(card_data.backdrop_path, 'w780') : null;
          } else if (card_data.poster_path) {
            bg = isAbs(card_data.poster_path) ? card_data.poster_path : Lampa.Api && Lampa.Api.img ? Lampa.Api.img(card_data.poster_path, 'w500') : null;
          }
          if (bg) Lampa.Background.change(bg);
        };
        card.onEnter = function (target, card_data) {
          console.log('Hikka', 'Clicked on card:', card_data.hikka_slug);
          _this5.activity.loader(true);
          var slug = card_data.hikka_slug || card_data.id;
          Api.getAnimeDetails(slug, function (details) {
            var payload = Api.buildFullPayloadFromDetails(details);
            if (payload && payload.id && payload.card) {
              // Переходимо до стандартного компонента full з локальними Hikka-даними
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: payload.id,
                method: payload.method === 'movie' ? 'movie' : 'tv',
                card: payload.card,
                episodes: payload.episodes,
                // активує вкладку Епізоди, якщо присутні
                // Хінти пошуку для інтеграцій торент/онлайн [Deepwiki-verified]
                search: payload.card && (payload.card.original_title || payload.card.title) || '',
                search_one: payload.card && payload.card.title || '',
                search_two: payload.card && payload.card.original_title || '',
                source: 'hikka'
              });
            } else {
              console.log('Hikka', 'Invalid payload from details, cannot open Full');
              Lampa.Noty.show('Помилка формування картки Hikka');
            }
            _this5.activity.loader(false);
          }, function (error) {
            _this5.activity.loader(false);
            console.log('Hikka', 'Error loading Hikka details:', error);
            Lampa.Noty.show('Помилка завантаження деталей Hikka');
          });
        };
        var cardElement = card.render(true);
        cardElement.classList.add('selector');
        contentContainer.appendChild(cardElement);
        items.push(card);
      });
      if (current_page === 1) {
        Lampa.Layer.update(html);
        this.activity.toggle();
        this.start();
      } else {
        results.forEach(function (element, index) {
          var cardIndex = items.length - results.length + index;
          if (items[cardIndex]) {
            Lampa.Controller.collectionAppend(items[cardIndex].render(true));
          }
        });
      }
      this.limit();
    };
    this.limit = function () {
      var limit_view = 12;
      var limit_collection = 36;
      var collection = items.slice(Math.max(0, active - limit_view), active + limit_view);
      items.forEach(function (item) {
        if (collection.indexOf(item) === -1) {
          item.render(true).classList.remove('layer--render');
        } else {
          item.render(true).classList.add('layer--render');
        }
      });
      Navigator.setCollection(items.slice(Math.max(0, active - limit_collection), active + limit_collection).map(function (c) {
        return c.render(true);
      }));
      Navigator.focused(last);
      Lampa.Layer.visible(scroll.render(true));
    };
    this.render = function () {
      return html;
    };
    this.clear = function () {
      items.forEach(function (item) {
        return item.destroy();
      });
      items = [];
      contentContainer.innerHTML = '';
      last = null;
      active = 0;
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      contentContainer.appendChild(empty.render(true));
      this.start = empty.start;
      this.activity.toggle();
    };
    this.start = function () {
      var _this6 = this;
      if (Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        link: this,
        toggle: function toggle() {
          if (_this6.activity.canRefresh()) return false;
          Lampa.Controller.collectionSet(contentContainer, scroll.render(true));
          var filterButtons = html.querySelectorAll('.simple-button--filter.selector');
          filterButtons.forEach(function (button) {
            Lampa.Controller.collectionAppend(button);
          });
          Lampa.Controller.collectionFocus(last || false, contentContainer, scroll.render(true));
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        right: function right() {
          if (Navigator.canmove('right')) Navigator.move('right');
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        down: function down() {
          if (Navigator.canmove('down')) Navigator.move('down');else if (current_page < total_pages && !loading) {
            current_page++;
            _this6.load();
          }
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
    };
    this.pause = function () {};
    this.stop = function () {};
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      contentContainer.remove();
      items = [];
    };

    // Мапа типів жанрів для локалізації
    var GENRE_TYPE_MAP = {
      'theme': 'Тематичне',
      'genre': 'Основне',
      'demographic': 'Демографічне',
      'explicit': 'Для дорослих'
    };

    // Функція для групування жанрів за типами
    this.groupGenresByType = function (genres) {
      var grouped = {};
      genres.forEach(function (genre) {
        var type = genre.type;
        if (!grouped[type]) {
          grouped[type] = [];
        }
        grouped[type].push(genre);
      });
      return grouped;
    };

    // Функція для завантаження жанрів
    this.loadGenres = function (callback) {
      if (genresCache) {
        callback(genresCache);
        return;
      }
      Api.getGenres(function (data) {
        if (data && data.list) {
          genresCache = data.list;
          callback(genresCache);
        } else {
          console.error('Hikka', 'No genres received');
          callback([]);
        }
      }, function (error) {
        console.error('Hikka', 'Error loading genres:', error);
        callback([]);
      });
    };

    // Спеціальна функція для показу селектора жанрів
    this.showGenresSelector = function (buttonElement) {
      var _this7 = this;
      this.loadGenres(function (genres) {
        if (genres.length === 0) {
          Lampa.Noty.show('Помилка завантаження жанрів');
          return;
        }
        var grouped = _this7.groupGenresByType(genres);

        // Створюємо список типів жанрів для першого кроку
        var typeItems = Object.keys(grouped).map(function (type) {
          return {
            title: GENRE_TYPE_MAP[type] || type,
            value: type,
            genres: grouped[type]
          };
        });

        // Показуємо перший рівень - типи жанрів
        Lampa.Select.show({
          title: 'Оберіть тип жанру',
          items: typeItems,
          onSelect: function onSelect(selectedType) {
            // Показуємо другий рівень - конкретні жанри
            var genreItems = selectedType.genres.map(function (genre) {
              return {
                title: genre.name_ua || genre.name_en,
                value: genre.slug,
                genre: genre
              };
            });

            // Додаємо опцію "Всі" на початок
            genreItems.unshift({
              title: 'Всі жанри цього типу',
              value: '',
              genre: null
            });
            Lampa.Select.show({
              title: selectedType.title,
              items: genreItems,
              onSelect: function onSelect(selectedGenre) {
                console.log('Hikka', ' Selected genre:', selectedGenre);

                // Оновлюємо фільтр
                if (selectedGenre.value) {
                  filters.genres = [selectedGenre.value];
                  // Скорочуємо назву жанру для кнопки
                  var shortGenreName = selectedGenre.title;
                  if (shortGenreName.length > 10) {
                    shortGenreName = shortGenreName.substring(0, 10) + '...';
                  }
                  buttonElement.querySelector('span').textContent = shortGenreName;
                } else {
                  filters.genres = [];
                  buttonElement.querySelector('span').textContent = 'Жанр';
                }

                // Перезавантажуємо дані
                current_page = 1;
                _this7.clear();
                _this7.load();
              },
              onBack: function onBack() {
                // Повертаємося до вибору типу жанру
                _this7.showGenresSelector(buttonElement);
              }
            });
          }
        });
      });
    };
    this.showOnlyTranslatedToggle = function (buttonElement) {
      filters.only_translated = !filters.only_translated;

      // Використовуємо короткі позначення
      buttonElement.querySelector('span').textContent = filters.only_translated ? 'З перекладом' : 'Переклад';
      current_page = 1;
      this.clear();
      this.load();
    };
    this.resetAllFilters = function () {
      // Скидаємо всі фільтри до значень за замовчуванням
      filters = {
        media_type: [],
        status: [],
        season: [],
        rating: [],
        sort: ['score:desc'],
        genres: [],
        only_translated: false
      };

      // Оновлюємо текст всіх кнопок фільтрів до початкових коротких назв
      var filterButtons = html.querySelectorAll('.simple-button--filter.selector span');
      filterButtons.forEach(function (span, index) {
        // Визначаємо кнопку за позицією або текстом
        if (index === 0 || span.textContent.includes('Тип') || span.textContent === 'Всі') {
          span.textContent = 'Тип';
        } else if (index === 1 || span.textContent.includes('Статус') || span.textContent.includes('Завершено')) {
          span.textContent = 'Статус';
        } else if (index === 2 || span.textContent.includes('Сезон') || span.textContent.includes('Зима')) {
          span.textContent = 'Сезон';
        } else if (index === 3 || span.textContent.includes('Рейтинг') || span.textContent === 'G') {
          span.textContent = 'Рейтинг';
        } else if (index === 4 || span.textContent.includes('Сортування') || span.textContent.includes('↓') || span.textContent.includes('↑')) {
          span.textContent = 'Сортування';
        } else if (index === 5 || span.textContent.includes('Жанр') || span.textContent.includes('...')) {
          span.textContent = 'Жанр';
        } else if (index === 6 || span.textContent.includes('Переклад') || span.textContent.includes('перекладом')) {
          span.textContent = 'Переклад';
        } else if (index === 7 || span.textContent === 'Скинути') ;
      });

      // Показуємо повідомлення про скидання
      Lampa.Noty.show('Фільтри скинуто');
      current_page = 1;
      this.clear();
      this.load();
    };
  }

  // Hikka plugin bootstrap: init styles, menu, providers, component
  function bootstrap() {
    try {
      if (window.__hikka_bootstrap_initialized) return;
      window.__hikka_bootstrap_initialized = true;

      // Стилі через Template.add (апенд до body виконується у фасаді/існуючій логіці)
      registerStyles();

      // Пункт меню
      addMenuItem();

      // Реєстрація провайдера джерела для Full (guard усередині)
      registerProviders();

      // Реєстрація компонента каталогу
      Lampa.Component.add('hikka_anime', component);

      // Інтерцептори (поки інертні; guard усередині)
      registerInterceptors();
    } catch (e) {
      console.log('Hikka', ' bootstrap init error:', e);
    }
  }

  function startPlugin() {
    // Додаємо стилі для плагіну через шаблонну систему

    // migrated: overrideFullChipsAndDiscuss() → handled by interceptors (fullChips.js, discussUI.js)

    // Додаємо стилі, пункт меню та реєструємо провайдер після завантаження додатка
    if (window.appready) {
      bootstrap();
      /* migrated: overrideFullChipsAndDiscuss() handled by interceptors */
      // Перехоплення Activity.push перенесено в interceptors/navigation/activityRedirect.js — монкіпатч видалено
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          bootstrap();
          /* migrated: overrideFullChipsAndDiscuss() handled by interceptors */
          // Перехоплення Activity.push перенесено в interceptors/navigation/activityRedirect.js — монкіпатч видалено
        }
      });
    }
  }

  // Ініціалізація плагіна
  if (!window.plugin_hikka_ready) {
    window.plugin_hikka_ready = true;
    startPlugin();
  }

})();
