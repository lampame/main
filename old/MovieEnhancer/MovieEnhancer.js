(function () {
    'use strict';

    if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

    function main$8() {
      Lampa.Lang.add({
        lme_title: {
          ru: "Movie Enhancer",
          en: "Movie Enhancer",
          uk: "Movie Enhancer",
          ro: "Movie Enhancer"
        },
        lme_wmquality_name: {
          ru: "Качество через Watchmode",
          en: "Quality by Watchmode",
          uk: "Якість через Watchmode",
          ro: "Calitate prin Watchmode"
        },
        lme_EngData_desc: {
          ru: "Добавляет английское название произведения, и заменяет описание если оно отсутсвует",
          en: "Adds the English title and replaces the description if it is missing",
          uk: "Додає англійську назву твору та замінює опис, якщо він відсутній",
          ro: "Adaugă titlul în engleză și înlocuiește descrierea dacă aceasta lipsește"
        },
        lme_endata_name: {
          ru: "Английские данные",
          en: "English data",
          uk: "Англійські дані",
          ro: "Date în engleză"
        },
        lme_quality_desc: {
          ru: "Для источников кроме Cub, добавляет лейбл с качеством. Где это возможно",
          en: "For sources other than Cub, adds a quality label where possible",
          uk: "Для джерел, окрім Cub, додає лейбл з якістю. Де це можливо",
          ro: "Pentru alte surse decât Cub, adaugă o etichetă de calitate acolo unde este posibil"
        },
        lme_wmquality_desc: {
          ru: "Ключ нужно получить на сайте api.watchmode.com",
          en: "The key must be obtained on the api.watchmode.com website",
          uk: "Ключ потрібно отримати на сайті api.watchmode.com",
          ro: "Cheia trebuie obținută de pe site-ul api.watchmode.com"
        },
        lme_averageRuntime_name: {
          ru: "Длительность серии",
          en: "Episode runtime",
          uk: "Тривалість серії",
          ro: "Durata episodului"
        },
        lme_averageRuntime_desc: {
          ru: "Добавляет среднее время серии",
          en: "Adds average episode runtime",
          uk: "Додає середній час серії",
          ro: "Adaugă durata medie a episodului"
        },
        lme_streamingdiscovery_name: {
          ru: "Рейтинги Streaming Discovery",
          en: "Streaming Discovery ratings",
          uk: "Рейтинги Streaming Discovery",
          ro: "Rating-uri Streaming Discovery"
        },
        lme_switchsource_desc: {
          ru: "Добавляет переключение источников из шапки",
          en: "Adds source switcher",
          uk: "Додає перемикач джерел у шапці",
          ro: "Adaugă comutator de surse în antet"
        },
        lme_switchsource_name: {
          ru: "Переключение источников",
          en: "Source switch",
          uk: "Перемикання джерел",
          ro: "Comutare surse"
        },
        lme_switchsource_modss_desc: {
          ru: "При наличии Modss добавляет источники Filmix и KinoPub",
          en: "If install Modss add Filmix and KinoPub",
          uk: "Якщо є Modss додає джерела Filmix та KinoPub",
          ro: "Dacă este instalat Modss, adaugă sursele Filmix și KinoPub"
        },
        lme_switchsource_modss_name: {
          ru: "Добавить источник Modss",
          en: "Add Modss source",
          uk: "Додати джерело Modss",
          ro: "Adaugă sursa Modss"
        },
        lme_switchsource_lmenc_desc: {
          ru: "При наличии NewCategory добавляет источник TMDB Streaming",
          en: "If install Modss add TMDB Streaming",
          uk: "Якщо є Modss додає джерелo TMDB Streaming",
          ro: "Dacă este instalat Modss, adaugă TMDB Streaming"
        },
        lme_switchsource_lmenc_name: {
          ru: "Добавить источник TMDBs",
          en: "Add TMDBs source",
          uk: "Додати джерело TMDBs",
          ro: "Adaugă sursa TMDBs"
        },
        lme_ratings_name: {
          ru: "Показать дополнительные рейтинги",
          en: "Show additional ratings",
          uk: "Показати додаткові рейтинги",
          ro: "Afișează rating-uri suplimentare"
        },
        lme_showbutton_desc: {
          ru: "Выводит все кнопки действий в карточке",
          en: "Show all action button in card",
          uk: "Виводить усі кнопки дій у картці",
          ro: "Afișează toate butoanele de acțiune în card"
        },
        lme_showbutton_name: {
          ru: "Все кнопки в карточке",
          en: "All buttons in card",
          uk: "Усі кнопки в картці",
          ro: "Toate butoanele în card"
        },
        lme_showbuttonwn_desc: {
          ru: "Показивать только иконки",
          en: "Show only icon",
          uk: "Відображати тільки іконки",
          ro: "Afișează doar pictogramele"
        },
        lme_showbuttonwn_name: {
          ru: "Скрыть текст",
          en: "Hide text",
          uk: "Приховати текст",
          ro: "Ascunde textul"
        },
        lme_button_editor_name: {
          ru: "Редактировать кнопки",
          en: "Edit buttons",
          uk: "Редагувати кнопки",
          ro: "Editare butoane"
        },
        lme_button_editor_desc: {
          ru: "Сортировка и скрытие кнопок карточки",
          en: "Reorder and hide card buttons",
          uk: "Сортування та приховування кнопок картки",
          ro: "Reordonarea și ascunderea butoanelor din card"
        },
        lme_ratings_desc: {
          ru: "Добавляет рейтинги от mdblist.com. Бесплатный ключ можно получить на сайте",
          en: "Adds ratings from mdblist.com. You can get a free key on the site",
          uk: "Додає рейтинги від mdblist.com. Безкоштовний ключ можна отримати на сайті",
          ro: "Adaugă rating-uri de pe mdblist.com. Puteți obține o cheie gratuită pe site"
        },
        lme_streamingdiscovery_desc: {
          ru: "Добавляет рейтинги от различных сервисов (IMDb, Metacritic, TMDB, Rotten Tomatoes и др.)",
          en: "Adds ratings from various services (IMDb, Metacritic, TMDB, Rotten Tomatoes, etc.)",
          uk: "Додає рейтинги від різних сервісів (IMDb, Metacritic, TMDB, Rotten Tomatoes тощо)",
          ro: "Adaugă rating-uri din diverse servicii (IMDb, Metacritic, TMDB, Rotten Tomatoes etc.)"
        },
        lme_settings_thanks: {
          ru: "Подяка",
          en: "Thanks",
          uk: "Подяка",
          ro: "Mulțumesc"
        },
        lme_settings_thanks_description: {
          ru: "Поддержка развития Movie Enhancer добровольная. Спасибо за вклад.",
          en: "Support for Movie Enhancer development is voluntary. Thank you for your contribution.",
          uk: "Підтримка розвитку Movie Enhancer добровільна. Дякуємо за внесок.",
          ro: "Susținerea dezvoltării Movie Enhancer este voluntară. Vă mulțumim pentru contribuție."
        }
      });
    }
    var Lang = {
      main: main$8
    };

    var $$i = require('../internals/export');
    var fails$g = require('../internals/fails');
    var isArray$3 = require('../internals/is-array');
    var isObject$6 = require('../internals/is-object');
    var toObject$2 = require('../internals/to-object');
    var lengthOfArrayLike$3 = require('../internals/length-of-array-like');
    var doesNotExceedSafeInteger$1 = require('../internals/does-not-exceed-safe-integer');
    var createProperty$1 = require('../internals/create-property');
    var setArrayLength = require('../internals/array-set-length');
    var arraySpeciesCreate$1 = require('../internals/array-species-create');
    var arrayMethodHasSpeciesSupport$3 = require('../internals/array-method-has-species-support');
    var wellKnownSymbol$8 = require('../internals/well-known-symbol');
    var V8_VERSION$2 = require('../internals/environment-v8-version');
    var IS_CONCAT_SPREADABLE = wellKnownSymbol$8('isConcatSpreadable');

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$2 >= 51 || !fails$g(function () {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return array.concat()[0] !== array;
    });
    var isConcatSpreadable = function isConcatSpreadable(O) {
      if (!isObject$6(O)) return false;
      var spreadable = O[IS_CONCAT_SPREADABLE];
      return spreadable !== undefined ? !!spreadable : isArray$3(O);
    };
    var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $$i({
      target: 'Array',
      proto: true,
      arity: 1,
      forced: FORCED$2
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat(arg) {
        var O = toObject$2(this);
        var A = arraySpeciesCreate$1(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike$3(E);
            doesNotExceedSafeInteger$1(n + len);
            for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
          } else {
            doesNotExceedSafeInteger$1(n + 1);
            createProperty$1(A, n++, E);
          }
        }
        setArrayLength(A, n);
        return A;
      }
    });

    function getAugmentedNamespace(n) {
      if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
      var f = n.default;
    	if (typeof f == "function") {
    		var a = function a () {
    			var isInstance = false;
          try {
            isInstance = this instanceof a;
          } catch (e) {}
    			if (isInstance) {
            return Reflect.construct(f, arguments, this.constructor);
    			}
    			return f.apply(this, arguments);
    		};
    		a.prototype = f.prototype;
      } else a = {};
      Object.defineProperty(a, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var es_object_toString = {};

    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }

    var esnext_globalThis = {};

    var es_globalThis = {};

    var globalThis$e = require('../internals/global-this');
    var getOwnPropertyDescriptor$2 = require('../internals/object-get-own-property-descriptor').f;
    var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
    var defineBuiltIn$7 = require('../internals/define-built-in');
    var defineGlobalProperty$1 = require('../internals/define-global-property');
    var copyConstructorProperties$1 = require('../internals/copy-constructor-properties');
    var isForced$3 = require('../internals/is-forced');

    /*
      options.target         - name of the target object
      options.global         - target is the global object
      options.stat           - export as static methods of target
      options.proto          - export as prototype methods of target
      options.real           - real prototype method for the `pure` version
      options.forced         - export even if the native feature is available
      options.bind           - bind methods to the target, required for the `pure` version
      options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe         - use the simple assignment of property instead of delete + defineProperty
      options.sham           - add a flag to not completely full polyfills
      options.enumerable     - export as enumerable property
      options.dontCallGetSet - prevent calling a getter on target
      options.name           - the .name of the function if it does not match the key
    */
    module.exports = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis$e;
      } else if (STATIC) {
        target = globalThis$e[TARGET] || defineGlobalProperty$1(TARGET, {});
      } else {
        target = globalThis$e[TARGET] && globalThis$e[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor$2(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
          copyConstructorProperties$1(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty$5(sourceProperty, 'sham', true);
        }
        defineBuiltIn$7(target, key, sourceProperty, options);
      }
    };

    var _export = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$a = /*@__PURE__*/getAugmentedNamespace(_export);

    var hasRequiredEs_globalThis;

    function requireEs_globalThis () {
    	if (hasRequiredEs_globalThis) return es_globalThis;
    	hasRequiredEs_globalThis = 1;

    	var $ = require$$0$a;
    	var globalThis = require$$3$2;

    	// `globalThis` object
    	// https://tc39.es/ecma262/#sec-globalthis
    	$({
    	  global: true,
    	  forced: globalThis.globalThis !== globalThis
    	}, {
    	  globalThis: globalThis
    	});
    	return es_globalThis;
    }

    var hasRequiredEsnext_globalThis;

    function requireEsnext_globalThis () {
    	if (hasRequiredEsnext_globalThis) return esnext_globalThis;
    	hasRequiredEsnext_globalThis = 1;

    	// TODO: Remove from `core-js@4`
    	requireEs_globalThis();
    	return esnext_globalThis;
    }

    requireEsnext_globalThis();

    var check = function check(it) {
      return it && it.Math === Math && it;
    };

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    module.exports =
    // eslint-disable-next-line es/no-global-this -- safe
    check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check((typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global) || check(_typeof(undefined) == 'object' && undefined) ||
    // eslint-disable-next-line no-new-func -- fallback
    function () {
      return this;
    }() || Function('return this')();

    var globalThis$d = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(globalThis$d);

    var sharedStore = {exports: {}};

    var isPure;
    var hasRequiredIsPure;

    function requireIsPure () {
    	if (hasRequiredIsPure) return isPure;
    	hasRequiredIsPure = 1;

    	isPure = false;
    	return isPure;
    }

    var defineGlobalProperty;
    var hasRequiredDefineGlobalProperty;

    function requireDefineGlobalProperty () {
    	if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
    	hasRequiredDefineGlobalProperty = 1;

    	var globalThis = require$$3$2;

    	// eslint-disable-next-line es/no-object-defineproperty -- safe
    	var defineProperty = Object.defineProperty;
    	defineGlobalProperty = function (key, value) {
    	  try {
    	    defineProperty(globalThis, key, {
    	      value: value,
    	      configurable: true,
    	      writable: true
    	    });
    	  } catch (error) {
    	    globalThis[key] = value;
    	  }
    	  return value;
    	};
    	return defineGlobalProperty;
    }

    var hasRequiredSharedStore;

    function requireSharedStore () {
    	if (hasRequiredSharedStore) return sharedStore.exports;
    	hasRequiredSharedStore = 1;

    	var IS_PURE = requireIsPure();
    	var globalThis = require$$3$2;
    	var defineGlobalProperty = requireDefineGlobalProperty();
    	var SHARED = '__core-js_shared__';
    	var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
    	(store.versions || (store.versions = [])).push({
    	  version: '3.49.0',
    	  mode: IS_PURE ? 'pure' : 'global',
    	  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
    	  license: 'https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE',
    	  source: 'https://github.com/zloirock/core-js'
    	});
    	return sharedStore.exports;
    }

    var shared$1;
    var hasRequiredShared;

    function requireShared () {
    	if (hasRequiredShared) return shared$1;
    	hasRequiredShared = 1;

    	var store = requireSharedStore();
    	shared$1 = function (key, value) {
    	  return store[key] || (store[key] = value || {});
    	};
    	return shared$1;
    }

    var fails$f;
    var hasRequiredFails;

    function requireFails () {
    	if (hasRequiredFails) return fails$f;
    	hasRequiredFails = 1;

    	fails$f = function (exec) {
    	  try {
    	    return !!exec();
    	  } catch (error) {
    	    return true;
    	  }
    	};
    	return fails$f;
    }

    var functionBindNative;
    var hasRequiredFunctionBindNative;

    function requireFunctionBindNative () {
    	if (hasRequiredFunctionBindNative) return functionBindNative;
    	hasRequiredFunctionBindNative = 1;

    	var fails = requireFails();
    	functionBindNative = !fails(function () {
    	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
    	  var test = function () {/* empty */}.bind();
    	  // eslint-disable-next-line no-prototype-builtins -- safe
    	  return typeof test != 'function' || test.hasOwnProperty('prototype');
    	});
    	return functionBindNative;
    }

    var functionUncurryThis;
    var hasRequiredFunctionUncurryThis;

    function requireFunctionUncurryThis () {
    	if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
    	hasRequiredFunctionUncurryThis = 1;

    	var NATIVE_BIND = requireFunctionBindNative();
    	var FunctionPrototype = Function.prototype;
    	var call = FunctionPrototype.call;
    	// eslint-disable-next-line es/no-function-prototype-bind -- safe
    	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    	functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
    	  return function () {
    	    return call.apply(fn, arguments);
    	  };
    	};
    	return functionUncurryThis;
    }

    var isNullOrUndefined$1;
    var hasRequiredIsNullOrUndefined;

    function requireIsNullOrUndefined () {
    	if (hasRequiredIsNullOrUndefined) return isNullOrUndefined$1;
    	hasRequiredIsNullOrUndefined = 1;

    	// we can't use just `it == null` since of `document.all` special case
    	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    	isNullOrUndefined$1 = function (it) {
    	  return it === null || it === undefined;
    	};
    	return isNullOrUndefined$1;
    }

    var requireObjectCoercible$3;
    var hasRequiredRequireObjectCoercible;

    function requireRequireObjectCoercible () {
    	if (hasRequiredRequireObjectCoercible) return requireObjectCoercible$3;
    	hasRequiredRequireObjectCoercible = 1;

    	var isNullOrUndefined = requireIsNullOrUndefined();
    	var $TypeError = TypeError;

    	// `RequireObjectCoercible` abstract operation
    	// https://tc39.es/ecma262/#sec-requireobjectcoercible
    	requireObjectCoercible$3 = function (it) {
    	  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    	  return it;
    	};
    	return requireObjectCoercible$3;
    }

    var toObject$1;
    var hasRequiredToObject;

    function requireToObject () {
    	if (hasRequiredToObject) return toObject$1;
    	hasRequiredToObject = 1;

    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var $Object = Object;

    	// `ToObject` abstract operation
    	// https://tc39.es/ecma262/#sec-toobject
    	toObject$1 = function (argument) {
    	  return $Object(requireObjectCoercible(argument));
    	};
    	return toObject$1;
    }

    var hasOwnProperty_1;
    var hasRequiredHasOwnProperty;

    function requireHasOwnProperty () {
    	if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
    	hasRequiredHasOwnProperty = 1;

    	var uncurryThis = requireFunctionUncurryThis();
    	var toObject = requireToObject();
    	var hasOwnProperty = uncurryThis({}.hasOwnProperty);

    	// `HasOwnProperty` abstract operation
    	// https://tc39.es/ecma262/#sec-hasownproperty
    	// eslint-disable-next-line es/no-object-hasown -- safe
    	hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    	  return hasOwnProperty(toObject(it), key);
    	};
    	return hasOwnProperty_1;
    }

    var $$h = require('../internals/export');
    var exec$3 = require('../internals/regexp-exec');

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $$h({
      target: 'RegExp',
      proto: true,
      forced: /./.exec !== exec$3
    }, {
      exec: exec$3
    });

    var apply$2 = require('../internals/function-apply');
    var call$9 = require('../internals/function-call');
    var uncurryThis$h = require('../internals/function-uncurry-this');
    var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
    var fails$e = require('../internals/fails');
    var anObject$8 = require('../internals/an-object');
    var isCallable$c = require('../internals/is-callable');
    var isObject$5 = require('../internals/is-object');
    var toIntegerOrInfinity$1 = require('../internals/to-integer-or-infinity');
    var toLength$3 = require('../internals/to-length');
    var toString$9 = require('../internals/to-string');
    var requireObjectCoercible$2 = require('../internals/require-object-coercible');
    var advanceStringIndex$2 = require('../internals/advance-string-index');
    var getMethod$2 = require('../internals/get-method');
    var getSubstitution = require('../internals/get-substitution');
    var getRegExpFlags$4 = require('../internals/regexp-get-flags');
    var regExpExec$2 = require('../internals/regexp-exec-abstract');
    var wellKnownSymbol$7 = require('../internals/well-known-symbol');
    var REPLACE = wellKnownSymbol$7('replace');
    var max = Math.max;
    var min$1 = Math.min;
    var concat = uncurryThis$h([].concat);
    var push$4 = uncurryThis$h([].push);
    var stringIndexOf$3 = uncurryThis$h(''.indexOf);
    var stringSlice$5 = uncurryThis$h(''.slice);
    var maybeToString = function maybeToString(it) {
      return it === undefined ? it : String(it);
    };

    // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
    var REPLACE_KEEPS_$0 = function () {
      // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
      return 'a'.replace(/./, '$0') === '$0';
    }();

    // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
      if (/./[REPLACE]) {
        return /./[REPLACE]('a', '$0') === '';
      }
      return false;
    }();
    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$e(function () {
      var re = /./;
      re.exec = function () {
        var result = [];
        result.groups = {
          a: '7'
        };
        return result;
      };
      // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
      return ''.replace(re, '$<a>') !== '7';
    });

    // @@replace logic
    fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
      return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$2(this);
        var replacer = isObject$5(searchValue) ? getMethod$2(searchValue, REPLACE) : undefined;
        return replacer ? call$9(replacer, searchValue, O, replaceValue) : call$9(nativeReplace, toString$9(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$8(this);
        var S = toString$9(string);
        var functionalReplace = isCallable$c(replaceValue);
        if (!functionalReplace) replaceValue = toString$9(replaceValue);
        var flags = toString$9(getRegExpFlags$4(rx));
        if (typeof replaceValue == 'string' && !~stringIndexOf$3(replaceValue, UNSAFE_SUBSTITUTE) && !~stringIndexOf$3(replaceValue, '$<') && !~stringIndexOf$3(flags, 'y')) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }
        var global = !!~stringIndexOf$3(flags, 'g');
        var fullUnicode;
        if (global) {
          fullUnicode = !!~stringIndexOf$3(flags, 'u') || !!~stringIndexOf$3(flags, 'v');
          rx.lastIndex = 0;
        }
        var results = [];
        var result;
        while (true) {
          result = regExpExec$2(rx, S);
          if (result === null) break;
          push$4(results, result);
          if (!global) break;
          var matchStr = toString$9(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$3(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = toString$9(result[0]);
          var position = max(min$1(toIntegerOrInfinity$1(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push$4(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push$4(replacerArgs, namedCaptures);
            replacement = toString$9(apply$2(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$5(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice$5(S, nextSourcePosition);
      }];
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

    var DESCRIPTORS$7 = require('../internals/descriptors');
    var globalThis$c = require('../internals/global-this');
    var uncurryThis$g = require('../internals/function-uncurry-this');
    var isForced$2 = require('../internals/is-forced');
    var inheritIfRequired$1 = require('../internals/inherit-if-required');
    var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
    var create = require('../internals/object-create');
    var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
    var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
    var isRegExp = require('../internals/is-regexp');
    var toString$8 = require('../internals/to-string');
    var getRegExpFlags$3 = require('../internals/regexp-get-flags');
    var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
    var proxyAccessor = require('../internals/proxy-accessor');
    var defineBuiltIn$6 = require('../internals/define-built-in');
    var fails$d = require('../internals/fails');
    var hasOwn$5 = require('../internals/has-own-property');
    var enforceInternalState$1 = require('../internals/internal-state').enforce;
    var setSpecies$1 = require('../internals/set-species');
    var wellKnownSymbol$6 = require('../internals/well-known-symbol');
    var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
    var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
    var MATCH = wellKnownSymbol$6('match');
    var NativeRegExp = globalThis$c.RegExp;
    var RegExpPrototype$1 = NativeRegExp.prototype;
    var SyntaxError = globalThis$c.SyntaxError;
    var exec$2 = uncurryThis$g(RegExpPrototype$1.exec);
    var charAt$1 = uncurryThis$g(''.charAt);
    var replace$3 = uncurryThis$g(''.replace);
    var stringIndexOf$2 = uncurryThis$g(''.indexOf);
    var stringSlice$4 = uncurryThis$g(''.slice);
    // TODO: Use only proper RegExpIdentifierName
    var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
    var re1 = /a/g;
    var re2 = /a/g;

    // "new" should create a new object, old webkit bug
    var CORRECT_NEW = new NativeRegExp(re1) !== re1;
    var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
    var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
    var BASE_FORCED = DESCRIPTORS$7 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$d(function () {
      re2[MATCH] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
      return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
    }));
    var handleDotAll = function handleDotAll(string) {
      var length = string.length;
      var index = 0;
      var result = '';
      var brackets = false;
      var chr;
      for (; index < length; index++) {
        chr = charAt$1(string, index);
        if (chr === '\\') {
          result += chr + charAt$1(string, ++index);
          continue;
        }
        if (!brackets && chr === '.') {
          result += '[\\s\\S]';
        } else {
          if (chr === '[') {
            brackets = true;
          } else if (chr === ']') {
            brackets = false;
          }
          result += chr;
        }
      }
      return result;
    };
    var handleNCG = function handleNCG(string) {
      var length = string.length;
      var index = 0;
      var result = '';
      var named = [];
      var names = create(null);
      var brackets = false;
      var ncg = false;
      var groupid = 0;
      var groupname = '';
      var chr;
      for (; index < length; index++) {
        chr = charAt$1(string, index);
        if (chr === '\\') {
          chr += charAt$1(string, ++index);
          // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
          if (!ncg && charAt$1(chr, 1) === '\\') {
            result += '\\x5c';
            continue;
          }
        } else if (chr === ']') {
          brackets = false;
        } else if (!brackets) switch (true) {
          case chr === '[':
            brackets = true;
            break;
          case chr === '(':
            result += chr;
            if (exec$2(IS_NCG, stringSlice$4(string, index + 1))) {
              index += 2;
              ncg = true;
              groupid++;
            } else if (charAt$1(string, index + 1) !== '?') {
              groupid++;
            }
            continue;
          case chr === '>' && ncg:
            if (groupname === '' || hasOwn$5(names, groupname)) {
              throw new SyntaxError('Invalid capture group name');
            }
            names[groupname] = true;
            named[named.length] = [groupname, groupid];
            ncg = false;
            groupname = '';
            continue;
        }
        if (ncg) groupname += chr;else result += chr;
      }
      // convert `\k<name>` backreferences to numbered backreferences
      for (var ni = 0; ni < named.length; ni++) {
        var backref = '\\k<' + named[ni][0] + '>';
        var numRef = '\\' + named[ni][1];
        while (stringIndexOf$2(result, backref) > -1) {
          result = replace$3(result, backref, numRef);
        }
      }
      return [result, named];
    };

    // `RegExp` constructor
    // https://tc39.es/ecma262/#sec-regexp-constructor
    if (isForced$2('RegExp', BASE_FORCED)) {
      var RegExpWrapper = function RegExp(pattern, flags) {
        var thisIsRegExp = isPrototypeOf$4(RegExpPrototype$1, this);
        var patternIsRegExp = isRegExp(pattern);
        var flagsAreUndefined = flags === undefined;
        var groups = [];
        var rawPattern = pattern;
        var rawFlags, dotAll, sticky, handled, result, state;
        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
          return pattern;
        }
        if (patternIsRegExp || isPrototypeOf$4(RegExpPrototype$1, pattern)) {
          pattern = pattern.source;
          if (flagsAreUndefined) flags = getRegExpFlags$3(rawPattern);
        }
        pattern = pattern === undefined ? '' : toString$8(pattern);
        flags = flags === undefined ? '' : toString$8(flags);
        rawPattern = pattern;
        if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
          dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
          if (dotAll) flags = replace$3(flags, /s/g, '');
        }
        rawFlags = flags;
        if (MISSED_STICKY && 'sticky' in re1) {
          sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
          if (sticky && UNSUPPORTED_Y$1) flags = replace$3(flags, /y/g, '');
        }
        if (UNSUPPORTED_NCG) {
          handled = handleNCG(pattern);
          pattern = handled[0];
          groups = handled[1];
        }
        result = inheritIfRequired$1(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
        if (dotAll || sticky || groups.length) {
          state = enforceInternalState$1(result);
          if (dotAll) {
            state.dotAll = true;
            state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
          }
          if (sticky) state.sticky = true;
          if (groups.length) state.groups = groups;
        }
        if (pattern !== rawPattern) try {
          // fails in old engines, but we have no alternatives for unsupported regex syntax
          createNonEnumerableProperty$4(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
        } catch (error) {/* empty */}
        return result;
      };
      for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
        proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
      }
      RegExpPrototype$1.constructor = RegExpWrapper;
      RegExpWrapper.prototype = RegExpPrototype$1;
      defineBuiltIn$6(globalThis$c, 'RegExp', RegExpWrapper, {
        constructor: true
      });
    }

    // https://tc39.es/ecma262/#sec-get-regexp-@@species
    setSpecies$1('RegExp');

    var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
    var defineBuiltIn$5 = require('../internals/define-built-in');
    var anObject$7 = require('../internals/an-object');
    var $toString$1 = require('../internals/to-string');
    var fails$c = require('../internals/fails');
    var getRegExpFlags$2 = require('../internals/regexp-get-flags');
    var TO_STRING = 'toString';
    var RegExpPrototype = RegExp.prototype;
    var nativeToString = RegExpPrototype[TO_STRING];
    var NOT_GENERIC = fails$c(function () {
      return nativeToString.call({
        source: 'a',
        flags: 'b'
      }) !== '/a/b';
    });
    // FF44- RegExp#toString has a wrong name
    var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name !== TO_STRING;

    // `RegExp.prototype.toString` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
    if (NOT_GENERIC || INCORRECT_NAME) {
      defineBuiltIn$5(RegExpPrototype, TO_STRING, function toString() {
        var R = anObject$7(this);
        var pattern = $toString$1(R.source);
        var flags = $toString$1(getRegExpFlags$2(R));
        return '/' + pattern + '/' + flags;
      }, {
        unsafe: true
      });
    }

    var uncurryThis$f = require('../internals/function-uncurry-this');
    var id$1 = 0;
    var postfix = Math.random();
    var toString$7 = uncurryThis$f(1.1.toString);
    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id$1 + postfix, 36);
    };

    var uid$3 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(uid$3);

    var es_symbol = {};

    // `Symbol.prototype.description` getter
    var $$g = require('../internals/export');
    var DESCRIPTORS$6 = require('../internals/descriptors');
    var globalThis$b = require('../internals/global-this');
    var call$8 = require('../internals/function-call');
    var uncurryThis$e = require('../internals/function-uncurry-this');
    var hasOwn$4 = require('../internals/has-own-property');
    var isCallable$b = require('../internals/is-callable');
    var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
    var toString$6 = require('../internals/to-string');
    var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor');
    var copyConstructorProperties = require('../internals/copy-constructor-properties');
    var NativeSymbol = globalThis$b.Symbol;
    var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
    if (DESCRIPTORS$6 && isCallable$b(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined)) {
      var EmptyStringDescriptionStore = {};
      // wrap Symbol constructor for correct work with undefined description
      var SymbolWrapper = function _Symbol() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$6(arguments[0]);
        var result = isPrototypeOf$3(SymbolPrototype$1, this)
        // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === '') EmptyStringDescriptionStore[result] = true;
        return result;
      };
      copyConstructorProperties(SymbolWrapper, NativeSymbol);
      // wrap Symbol.for for correct handling of empty string descriptions
      var nativeFor = SymbolWrapper['for'];
      SymbolWrapper['for'] = {
        'for': function _for(key) {
          var stringKey = toString$6(key);
          var symbol = call$8(nativeFor, this, stringKey);
          if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
          return symbol;
        }
      }['for'];
      SymbolWrapper.prototype = SymbolPrototype$1;
      SymbolPrototype$1.constructor = SymbolWrapper;
      var NATIVE_SYMBOL$3 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
      var thisSymbolValue = uncurryThis$e(SymbolPrototype$1.valueOf);
      var symbolDescriptiveString = uncurryThis$e(SymbolPrototype$1.toString);
      var regexp = /^Symbol\((.*)\)[^)]+$/;
      var replace$2 = uncurryThis$e(''.replace);
      var stringSlice$3 = uncurryThis$e(''.slice);
      defineBuiltInAccessor$2(SymbolPrototype$1, 'description', {
        configurable: true,
        get: function description() {
          var symbol = thisSymbolValue(this);
          if (hasOwn$4(EmptyStringDescriptionStore, symbol)) return '';
          var string = symbolDescriptiveString(symbol);
          var desc = NATIVE_SYMBOL$3 ? stringSlice$3(string, 7, -1) : replace$2(string, regexp, '$1');
          return desc === '' ? undefined : desc;
        }
      });
      $$g({
        global: true,
        constructor: true,
        forced: true
      }, {
        Symbol: SymbolWrapper
      });
    }

    var globalThis$a = require('../internals/global-this');
    var DOMIterables$1 = require('../internals/dom-iterables');
    var DOMTokenListPrototype$1 = require('../internals/dom-token-list-prototype');
    var forEach = require('../internals/array-for-each');
    var createNonEnumerableProperty$3 = require('../internals/create-non-enumerable-property');
    var handlePrototype$1 = function handlePrototype(CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
        createNonEnumerableProperty$3(CollectionPrototype, 'forEach', forEach);
      } catch (error) {
        CollectionPrototype.forEach = forEach;
      }
    };
    for (var COLLECTION_NAME$1 in DOMIterables$1) {
      if (DOMIterables$1[COLLECTION_NAME$1]) {
        handlePrototype$1(globalThis$a[COLLECTION_NAME$1] && globalThis$a[COLLECTION_NAME$1].prototype);
      }
    }
    handlePrototype$1(DOMTokenListPrototype$1);

    var $$f = require('../internals/export');
    var globalThis$9 = require('../internals/global-this');
    var call$7 = require('../internals/function-call');
    var uncurryThis$d = require('../internals/function-uncurry-this');
    var IS_PURE$3 = require('../internals/is-pure');
    var DESCRIPTORS$5 = require('../internals/descriptors');
    var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
    var fails$b = require('../internals/fails');
    var hasOwn$3 = require('../internals/has-own-property');
    var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
    var anObject$6 = require('../internals/an-object');
    var toIndexedObject$2 = require('../internals/to-indexed-object');
    var toPropertyKey$2 = require('../internals/to-property-key');
    var $toString = require('../internals/to-string');
    var createPropertyDescriptor$2 = require('../internals/create-property-descriptor');
    var nativeObjectCreate = require('../internals/object-create');
    var objectKeys$1 = require('../internals/object-keys');
    var getOwnPropertyNamesModule$1 = require('../internals/object-get-own-property-names');
    var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
    var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
    var definePropertyModule = require('../internals/object-define-property');
    var definePropertiesModule = require('../internals/object-define-properties');
    var propertyIsEnumerableModule$1 = require('../internals/object-property-is-enumerable');
    var defineBuiltIn$4 = require('../internals/define-built-in');
    var defineBuiltInAccessor$1 = require('../internals/define-built-in-accessor');
    var shared = require('../internals/shared');
    var sharedKey$1 = require('../internals/shared-key');
    var hiddenKeys$2 = require('../internals/hidden-keys');
    var uid$2 = require('../internals/uid');
    var wellKnownSymbol$5 = require('../internals/well-known-symbol');
    var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
    var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
    var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
    var setToStringTag$4 = require('../internals/set-to-string-tag');
    var InternalStateModule$1 = require('../internals/internal-state');
    var $forEach = require('../internals/array-iteration').forEach;
    var HIDDEN = sharedKey$1('hidden');
    var SYMBOL = 'Symbol';
    var PROTOTYPE = 'prototype';
    var setInternalState = InternalStateModule$1.set;
    var getInternalState$1 = InternalStateModule$1.getterFor(SYMBOL);
    var ObjectPrototype = Object[PROTOTYPE];
    var $Symbol = globalThis$9.Symbol;
    var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
    var RangeError$1 = globalThis$9.RangeError;
    var TypeError$1 = globalThis$9.TypeError;
    var QObject = globalThis$9.QObject;
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var nativeDefineProperty = definePropertyModule.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
    var push$3 = uncurryThis$d([].push);
    var AllSymbols = shared('symbols');
    var ObjectPrototypeSymbols = shared('op-symbols');
    var WellKnownSymbolsStore = shared('wks');

    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var fallbackDefineProperty = function fallbackDefineProperty(O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
      nativeDefineProperty(O, P, Attributes);
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
      return O;
    };
    var setSymbolDescriptor = DESCRIPTORS$5 && fails$b(function () {
      return nativeObjectCreate(nativeDefineProperty({}, 'a', {
        get: function get() {
          return nativeDefineProperty(this, 'a', {
            value: 7
          }).a;
        }
      })).a !== 7;
    }) ? fallbackDefineProperty : nativeDefineProperty;
    var wrap = function wrap(tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
      setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
      });
      if (!DESCRIPTORS$5) symbol.description = description;
      return symbol;
    };
    var $defineProperty$1 = function defineProperty(O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
      anObject$6(O);
      var key = toPropertyKey$2(P);
      anObject$6(Attributes);
      if (hasOwn$3(AllSymbols, key)) {
        // first definition - default non-enumerable; redefinition - preserve existing state
        if (!('enumerable' in Attributes) ? !hasOwn$3(O, key) || hasOwn$3(O, HIDDEN) && O[HIDDEN][key] : !Attributes.enumerable) {
          if (!hasOwn$3(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$2(1, nativeObjectCreate(null)));
          O[HIDDEN][key] = true;
        } else {
          if (hasOwn$3(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
          Attributes = nativeObjectCreate(Attributes, {
            enumerable: createPropertyDescriptor$2(0, false)
          });
        }
        return setSymbolDescriptor(O, key, Attributes);
      }
      return nativeDefineProperty(O, key, Attributes);
    };
    var $defineProperties = function defineProperties(O, Properties) {
      anObject$6(O);
      var properties = toIndexedObject$2(Properties);
      var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
      $forEach(keys, function (key) {
        if (!DESCRIPTORS$5 || call$7($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
      });
      return O;
    };
    var $create = function create(O, Properties) {
      return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(V) {
      var P = toPropertyKey$2(V);
      var enumerable = call$7(nativePropertyIsEnumerable, this, P);
      if (this === ObjectPrototype && hasOwn$3(AllSymbols, P) && !hasOwn$3(ObjectPrototypeSymbols, P)) return false;
      return enumerable || !hasOwn$3(this, P) || !hasOwn$3(AllSymbols, P) || hasOwn$3(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
    };
    var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
      var it = toIndexedObject$2(O);
      var key = toPropertyKey$2(P);
      if (it === ObjectPrototype && hasOwn$3(AllSymbols, key) && !hasOwn$3(ObjectPrototypeSymbols, key)) return;
      var descriptor = nativeGetOwnPropertyDescriptor(it, key);
      if (descriptor && hasOwn$3(AllSymbols, key) && !(hasOwn$3(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
      }
      return descriptor;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
      var result = [];
      $forEach(names, function (key) {
        if (!hasOwn$3(AllSymbols, key) && !hasOwn$3(hiddenKeys$2, key)) push$3(result, key);
      });
      return result;
    };
    var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
      var result = [];
      $forEach(names, function (key) {
        if (hasOwn$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$3(ObjectPrototype, key))) {
          push$3(result, AllSymbols[key]);
        }
      });
      return result;
    };

    // `Symbol` constructor
    // https://tc39.es/ecma262/#sec-symbol-constructor
    if (!NATIVE_SYMBOL$2) {
      $Symbol = function _Symbol() {
        if (isPrototypeOf$2(SymbolPrototype, this)) throw new TypeError$1('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
        var tag = uid$2(description);
        var _setter = function setter(value) {
          var $this = this === undefined ? globalThis$9 : this;
          if ($this === ObjectPrototype) call$7(_setter, ObjectPrototypeSymbols, value);
          if (hasOwn$3($this, HIDDEN) && hasOwn$3($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
          var descriptor = createPropertyDescriptor$2(1, value);
          try {
            setSymbolDescriptor($this, tag, descriptor);
          } catch (error) {
            if (!(error instanceof RangeError$1)) throw error;
            fallbackDefineProperty($this, tag, descriptor);
          }
        };
        if (DESCRIPTORS$5 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
          configurable: true,
          set: _setter
        });
        return wrap(tag, description);
      };
      SymbolPrototype = $Symbol[PROTOTYPE];
      defineBuiltIn$4(SymbolPrototype, 'toString', function toString() {
        return getInternalState$1(this).tag;
      });
      defineBuiltIn$4($Symbol, 'withoutSetter', function (description) {
        return wrap(uid$2(description), description);
      });
      propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
      definePropertyModule.f = $defineProperty$1;
      definePropertiesModule.f = $defineProperties;
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$2;
      getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
      wrappedWellKnownSymbolModule.f = function (name) {
        return wrap(wellKnownSymbol$5(name), name);
      };
      if (DESCRIPTORS$5) {
        // https://tc39.es/ecma262/#sec-symbol.prototype.description
        defineBuiltInAccessor$1(SymbolPrototype, 'description', {
          configurable: true,
          get: function description() {
            return getInternalState$1(this).description;
          }
        });
        if (!IS_PURE$3) {
          defineBuiltIn$4(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
            unsafe: true
          });
        }
      }
    }
    $$f({
      global: true,
      constructor: true,
      wrap: true,
      forced: !NATIVE_SYMBOL$2,
      sham: !NATIVE_SYMBOL$2
    }, {
      Symbol: $Symbol
    });
    $forEach(objectKeys$1(WellKnownSymbolsStore), function (name) {
      defineWellKnownSymbol(name);
    });
    $$f({
      target: SYMBOL,
      stat: true,
      forced: !NATIVE_SYMBOL$2
    }, {
      useSetter: function useSetter() {
        USE_SETTER = true;
      },
      useSimple: function useSimple() {
        USE_SETTER = false;
      }
    });
    $$f({
      target: 'Object',
      stat: true,
      forced: !NATIVE_SYMBOL$2,
      sham: !DESCRIPTORS$5
    }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty$1,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
    });
    $$f({
      target: 'Object',
      stat: true,
      forced: !NATIVE_SYMBOL$2
    }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames
    });

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive();

    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag$4($Symbol, SYMBOL);
    hiddenKeys$2[HIDDEN] = true;

    var es_symbol_for = {};

    var documentAll = (typeof document === "undefined" ? "undefined" : _typeof(document)) == 'object' && document.all;

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
    module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
      return typeof argument == 'function' || argument === documentAll;
    } : function (argument) {
      return typeof argument == 'function';
    };

    var isCallable$a = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$5$5 = /*@__PURE__*/getAugmentedNamespace(isCallable$a);

    var getBuiltIn$4;
    var hasRequiredGetBuiltIn;

    function requireGetBuiltIn () {
    	if (hasRequiredGetBuiltIn) return getBuiltIn$4;
    	hasRequiredGetBuiltIn = 1;

    	var globalThis = require$$3$2;
    	var isCallable = require$$5$5;
    	var aFunction = function aFunction(argument) {
    	  return isCallable(argument) ? argument : undefined;
    	};
    	getBuiltIn$4 = function (namespace, method) {
    	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
    	};
    	return getBuiltIn$4;
    }

    var uncurryThis$c = require('../internals/function-uncurry-this');
    var toString$5 = uncurryThis$c({}.toString);
    var stringSlice$2 = uncurryThis$c(''.slice);
    module.exports = function (it) {
      return stringSlice$2(toString$5(it), 8, -1);
    };

    var classofRaw = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$9 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

    var classof$5;
    var hasRequiredClassof;

    function requireClassof () {
    	if (hasRequiredClassof) return classof$5;
    	hasRequiredClassof = 1;

    	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
    	var isCallable = require$$5$5;
    	var classofRaw = require$$0$9;
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    	var $Object = Object;

    	// ES3 wrong here
    	var CORRECT_ARGUMENTS = classofRaw(function () {
    	  return arguments;
    	}()) === 'Arguments';

    	// fallback for IE11 Script Access Denied error
    	var tryGet = function tryGet(it, key) {
    	  try {
    	    return it[key];
    	  } catch (error) {/* empty */}
    	};

    	// getting tag from ES6+ `Object.prototype.toString`
    	classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
    	  var O, tag, result;
    	  return it === undefined ? 'Undefined' : it === null ? 'Null'
    	  // @@toStringTag case
    	  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    	  // builtinTag case
    	  : CORRECT_ARGUMENTS ? classofRaw(O)
    	  // ES3 arguments fallback
    	  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
    	};
    	return classof$5;
    }

    var toString$4;
    var hasRequiredToString;

    function requireToString () {
    	if (hasRequiredToString) return toString$4;
    	hasRequiredToString = 1;

    	var classof = requireClassof();
    	var $String = String;
    	toString$4 = function (argument) {
    	  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    	  return $String(argument);
    	};
    	return toString$4;
    }

    var symbolRegistryDetection;
    var hasRequiredSymbolRegistryDetection;

    function requireSymbolRegistryDetection () {
    	if (hasRequiredSymbolRegistryDetection) return symbolRegistryDetection;
    	hasRequiredSymbolRegistryDetection = 1;

    	var NATIVE_SYMBOL = require$$4$1;

    	/* eslint-disable es/no-symbol -- safe */
    	symbolRegistryDetection = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;
    	return symbolRegistryDetection;
    }

    var hasRequiredEs_symbol_for;

    function requireEs_symbol_for () {
    	if (hasRequiredEs_symbol_for) return es_symbol_for;
    	hasRequiredEs_symbol_for = 1;

    	var $ = require$$0$a;
    	var getBuiltIn = requireGetBuiltIn();
    	var hasOwn = requireHasOwnProperty();
    	var toString = requireToString();
    	var shared = requireShared();
    	var NATIVE_SYMBOL_REGISTRY = requireSymbolRegistryDetection();
    	var StringToSymbolRegistry = shared('string-to-symbol-registry');
    	var SymbolToStringRegistry = shared('symbol-to-string-registry');

    	// `Symbol.for` method
    	// https://tc39.es/ecma262/#sec-symbol.for
    	$({
    	  target: 'Symbol',
    	  stat: true,
    	  forced: !NATIVE_SYMBOL_REGISTRY
    	}, {
    	  'for': function _for(key) {
    	    var string = toString(key);
    	    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    	    var symbol = getBuiltIn('Symbol')(string);
    	    StringToSymbolRegistry[string] = symbol;
    	    SymbolToStringRegistry[symbol] = string;
    	    return symbol;
    	  }
    	});
    	return es_symbol_for;
    }

    var es_symbol_keyFor = {};

    var getBuiltIn$3 = require('../internals/get-built-in');
    var isCallable$9 = require('../internals/is-callable');
    var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
    var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
    var $Object$1 = Object;
    module.exports = USE_SYMBOL_AS_UID ? function (it) {
      return _typeof(it) == 'symbol';
    } : function (it) {
      var $Symbol = getBuiltIn$3('Symbol');
      return isCallable$9($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$1(it));
    };

    var isSymbol$1 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$2$4 = /*@__PURE__*/getAugmentedNamespace(isSymbol$1);

    var tryToString$1;
    var hasRequiredTryToString;

    function requireTryToString () {
    	if (hasRequiredTryToString) return tryToString$1;
    	hasRequiredTryToString = 1;

    	var $String = String;
    	tryToString$1 = function (argument) {
    	  try {
    	    return $String(argument);
    	  } catch (error) {
    	    return 'Object';
    	  }
    	};
    	return tryToString$1;
    }

    var hasRequiredEs_symbol_keyFor;

    function requireEs_symbol_keyFor () {
    	if (hasRequiredEs_symbol_keyFor) return es_symbol_keyFor;
    	hasRequiredEs_symbol_keyFor = 1;

    	var $ = require$$0$a;
    	var hasOwn = requireHasOwnProperty();
    	var isSymbol = require$$2$4;
    	var tryToString = requireTryToString();
    	var shared = requireShared();
    	var NATIVE_SYMBOL_REGISTRY = requireSymbolRegistryDetection();
    	var SymbolToStringRegistry = shared('symbol-to-string-registry');

    	// `Symbol.keyFor` method
    	// https://tc39.es/ecma262/#sec-symbol.keyfor
    	$({
    	  target: 'Symbol',
    	  stat: true,
    	  forced: !NATIVE_SYMBOL_REGISTRY
    	}, {
    	  keyFor: function keyFor(sym) {
    	    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    	    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    	  }
    	});
    	return es_symbol_keyFor;
    }

    var $$e = require('../internals/export');
    var getBuiltIn$2 = require('../internals/get-built-in');
    var apply$1 = require('../internals/function-apply');
    var call$6 = require('../internals/function-call');
    var uncurryThis$b = require('../internals/function-uncurry-this');
    var fails$a = require('../internals/fails');
    var isArray$2 = require('../internals/is-array');
    var isCallable$8 = require('../internals/is-callable');
    var isRawJSON = require('../internals/is-raw-json');
    var isSymbol = require('../internals/is-symbol');
    var classof$4 = require('../internals/classof-raw');
    var toString$3 = require('../internals/to-string');
    var arraySlice$1 = require('../internals/array-slice');
    var parseJSONString = require('../internals/parse-json-string');
    var uid$1 = require('../internals/uid');
    var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
    var NATIVE_RAW_JSON = require('../internals/native-raw-json');
    var $String$2 = String;
    var $stringify = getBuiltIn$2('JSON', 'stringify');
    var exec$1 = uncurryThis$b(/./.exec);
    var charAt = uncurryThis$b(''.charAt);
    var charCodeAt = uncurryThis$b(''.charCodeAt);
    var replace$1 = uncurryThis$b(''.replace);
    var slice = uncurryThis$b(''.slice);
    var push$2 = uncurryThis$b([].push);
    var numberToString = uncurryThis$b(1.1.toString);
    var surrogates = /[\uD800-\uDFFF]/g;
    var leadingSurrogates = /^[\uD800-\uDBFF]$/;
    var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
    var MARK = uid$1();
    var MARK_LENGTH = MARK.length;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$a(function () {
      var symbol = getBuiltIn$2('Symbol')('stringify detection');
      // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) !== '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({
        a: symbol
      }) !== '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) !== '{}';
    });

    // https://github.com/tc39/proposal-well-formed-stringify
    var ILL_FORMED_UNICODE = fails$a(function () {
      return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
    });
    var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
      var args = arraySlice$1(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable$8($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
      args[1] = function (key, value) {
        // some old implementations (like WebKit) could pass numbers as keys
        if (isCallable$8($replacer)) value = call$6($replacer, this, $String$2(key), value);
        if (!isSymbol(value)) return value;
      };
      return apply$1($stringify, null, args);
    } : $stringify;
    var fixIllFormedJSON = function fixIllFormedJSON(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec$1(leadingSurrogates, match) && !exec$1(trailingSurrogates, next) || exec$1(trailingSurrogates, match) && !exec$1(leadingSurrogates, prev)) {
        return "\\u" + numberToString(charCodeAt(match, 0), 16);
      }
      return match;
    };
    var getReplacerFunction = function getReplacerFunction(replacer) {
      if (isCallable$8(replacer)) return replacer;
      if (!isArray$2(replacer)) return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == 'string') push$2(keys, element);else if (typeof element == 'number' || classof$4(element) === 'Number' || classof$4(element) === 'String') push$2(keys, toString$3(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function (key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray$2(this)) return value;
        for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
      };
    };

    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-json-parse-with-source
    if ($stringify) $$e({
      target: 'JSON',
      stat: true,
      arity: 3,
      forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON
    }, {
      stringify: function stringify(text, replacer, space) {
        var replacerFunction = getReplacerFunction(replacer);
        var rawStrings = [];
        var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
          // some old implementations (like WebKit) could pass numbers as keys
          var v = isCallable$8(replacerFunction) ? call$6(replacerFunction, this, $String$2(key), value) : value;
          return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push$2(rawStrings, v.rawJSON) - 1) : v;
        }, space);
        if (typeof json != 'string') return json;
        if (ILL_FORMED_UNICODE) json = replace$1(json, surrogates, fixIllFormedJSON);
        if (NATIVE_RAW_JSON) return json;
        var result = '';
        var length = json.length;
        for (var i = 0; i < length; i++) {
          var chr = charAt(json, i);
          if (chr === '"') {
            var end = parseJSONString(json, ++i).end - 1;
            var string = slice(json, i, end);
            result += slice(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice(string, MARK_LENGTH)] : '"' + string + '"';
            i = end;
          } else result += chr;
        }
        return result;
      }
    });

    var es_object_getOwnPropertySymbols = {};

    exports.f = Object.getOwnPropertySymbols;

    var objectGetOwnPropertySymbols = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$3 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertySymbols);

    var hasRequiredEs_object_getOwnPropertySymbols;

    function requireEs_object_getOwnPropertySymbols () {
    	if (hasRequiredEs_object_getOwnPropertySymbols) return es_object_getOwnPropertySymbols;
    	hasRequiredEs_object_getOwnPropertySymbols = 1;

    	var $ = require$$0$a;
    	var NATIVE_SYMBOL = require$$4$1;
    	var fails = requireFails();
    	var getOwnPropertySymbolsModule = require$$3;
    	var toObject = requireToObject();

    	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
    	var FORCED = !NATIVE_SYMBOL || fails(function () {
    	  getOwnPropertySymbolsModule.f(1);
    	});

    	// `Object.getOwnPropertySymbols` method
    	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    	$({
    	  target: 'Object',
    	  stat: true,
    	  forced: FORCED
    	}, {
    	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
    	  }
    	});
    	return es_object_getOwnPropertySymbols;
    }

    var hasRequiredEs_symbol;

    function requireEs_symbol () {
    	if (hasRequiredEs_symbol) return es_symbol;
    	hasRequiredEs_symbol = 1;

    	// TODO: Remove this module from `core-js@4` since it's split to modules listed below

    	requireEs_symbol_for();
    	requireEs_symbol_keyFor();

    	requireEs_object_getOwnPropertySymbols();
    	return es_symbol;
    }

    requireEs_symbol();

    var V8_VERSION$1 = require('../internals/environment-v8-version');
    var fails$9 = require('../internals/fails');
    var globalThis$8 = require('../internals/global-this');
    var $String$1 = globalThis$8.String;

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    module.exports = !!Object.getOwnPropertySymbols && !fails$9(function () {
      var symbol = Symbol('symbol detection');
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
      // of course, fail.
      return !$String$1(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
    });

    var symbolConstructorDetection = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$4$1 = /*@__PURE__*/getAugmentedNamespace(symbolConstructorDetection);

    var es_symbol_iterator = {};

    var path;
    var hasRequiredPath;

    function requirePath () {
    	if (hasRequiredPath) return path;
    	hasRequiredPath = 1;

    	var globalThis = require$$3$2;
    	path = globalThis;
    	return path;
    }

    var wellKnownSymbolWrapped = {};

    var hasRequiredWellKnownSymbolWrapped;

    function requireWellKnownSymbolWrapped () {
    	if (hasRequiredWellKnownSymbolWrapped) return wellKnownSymbolWrapped;
    	hasRequiredWellKnownSymbolWrapped = 1;

    	var wellKnownSymbol = requireWellKnownSymbol();
    	wellKnownSymbolWrapped.f = wellKnownSymbol;
    	return wellKnownSymbolWrapped;
    }

    var es_object_getOwnPropertyDescriptor = {};

    var call$5 = require('../internals/function-call');
    var uncurryThis$a = require('../internals/function-uncurry-this');
    var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
    var anObject$5 = require('../internals/an-object');
    var isObject$4 = require('../internals/is-object');
    var requireObjectCoercible$1 = require('../internals/require-object-coercible');
    var speciesConstructor$2 = require('../internals/species-constructor');
    var advanceStringIndex$1 = require('../internals/advance-string-index');
    var toLength$2 = require('../internals/to-length');
    var toString$2 = require('../internals/to-string');
    var getMethod$1 = require('../internals/get-method');
    var getRegExpFlags$1 = require('../internals/regexp-get-flags');
    var regExpExec$1 = require('../internals/regexp-exec-abstract');
    var stickyHelpers = require('../internals/regexp-sticky-helpers');
    var fails$8 = require('../internals/fails');
    var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
    var MAX_UINT32 = 0xFFFFFFFF;
    var min = Math.min;
    var push$1 = uncurryThis$a([].push);
    var stringSlice$1 = uncurryThis$a(''.slice);
    var stringIndexOf$1 = uncurryThis$a(''.indexOf);

    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    // Weex JS has frozen built-in prototypes, so use try / catch wrapper
    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$8(function () {
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      var re = /(?:)/;
      var originalExec = re.exec;
      re.exec = function () {
        return originalExec.apply(this, arguments);
      };
      var result = 'ab'.split(re);
      return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
    });
    var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length !== 4 || 'ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length;

    // @@split logic
    fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
      var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$5(nativeSplit, this, separator, limit);
      } : nativeSplit;
      return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$1(this);
        var splitter = isObject$4(separator) ? getMethod$1(separator, SPLIT) : undefined;
        return splitter ? call$5(splitter, separator, O, limit) : call$5(internalSplit, toString$2(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var rx = anObject$5(this);
        var S = toString$2(string);
        if (!BUGGY) {
          var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
          if (res.done) return res.value;
        }
        var C = speciesConstructor$2(rx, RegExp);
        var flags = toString$2(getRegExpFlags$1(rx));
        var unicodeMatching = !!~stringIndexOf$1(flags, 'u') || !!~stringIndexOf$1(flags, 'v');
        if (UNSUPPORTED_Y) {
          if (!~stringIndexOf$1(flags, 'g')) flags += 'g';
        } else if (!~stringIndexOf$1(flags, 'y')) flags += 'y';
        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regExpExec$1(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
          var z = regExpExec$1(splitter, UNSUPPORTED_Y ? stringSlice$1(S, q) : S);
          var e;
          if (z === null || (e = min(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
            q = advanceStringIndex$1(S, q, unicodeMatching);
          } else {
            push$1(A, stringSlice$1(S, p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              push$1(A, z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        push$1(A, stringSlice$1(S, p));
        return A;
      }];
    }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

    var uncurryThis$9 = require('../internals/function-uncurry-this');
    var fails$7 = require('../internals/fails');
    var classof$3 = require('../internals/classof-raw');
    var $Object = Object;
    var split = uncurryThis$9(''.split);

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails$7(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !$Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classof$3(it) === 'String' ? split(it, '') : $Object(it);
    } : $Object;

    var indexedObject = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$8 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

    var toIndexedObject$1;
    var hasRequiredToIndexedObject;

    function requireToIndexedObject () {
    	if (hasRequiredToIndexedObject) return toIndexedObject$1;
    	hasRequiredToIndexedObject = 1;

    	// toObject with fallback for non-array-like ES3 strings
    	var IndexedObject = require$$0$8;
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	toIndexedObject$1 = function (it) {
    	  return IndexedObject(requireObjectCoercible(it));
    	};
    	return toIndexedObject$1;
    }

    var DESCRIPTORS$4 = require('../internals/descriptors');
    var call$4 = require('../internals/function-call');
    var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
    var createPropertyDescriptor$1 = require('../internals/create-property-descriptor');
    var toIndexedObject = require('../internals/to-indexed-object');
    var toPropertyKey$1 = require('../internals/to-property-key');
    var hasOwn$2 = require('../internals/has-own-property');
    var IE8_DOM_DEFINE$1 = require('../internals/ie8-dom-define');

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    exports.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey$1(P);
      if (IE8_DOM_DEFINE$1) try {
        return $getOwnPropertyDescriptor$1(O, P);
      } catch (error) {/* empty */}
      if (hasOwn$2(O, P)) return createPropertyDescriptor$1(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
    };

    var objectGetOwnPropertyDescriptor = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertyDescriptor);

    var descriptors;
    var hasRequiredDescriptors;

    function requireDescriptors () {
    	if (hasRequiredDescriptors) return descriptors;
    	hasRequiredDescriptors = 1;

    	var fails = requireFails();

    	// Detect IE8's incomplete defineProperty implementation
    	descriptors = !fails(function () {
    	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    	  return Object.defineProperty({}, 1, {
    	    get: function get() {
    	      return 7;
    	    }
    	  })[1] !== 7;
    	});
    	return descriptors;
    }

    var hasRequiredEs_object_getOwnPropertyDescriptor;

    function requireEs_object_getOwnPropertyDescriptor () {
    	if (hasRequiredEs_object_getOwnPropertyDescriptor) return es_object_getOwnPropertyDescriptor;
    	hasRequiredEs_object_getOwnPropertyDescriptor = 1;

    	var $ = require$$0$a;
    	var fails = requireFails();
    	var toIndexedObject = requireToIndexedObject();
    	var nativeGetOwnPropertyDescriptor = require$$2$3.f;
    	var DESCRIPTORS = requireDescriptors();
    	var FORCED = !DESCRIPTORS || fails(function () {
    	  nativeGetOwnPropertyDescriptor(1);
    	});

    	// `Object.getOwnPropertyDescriptor` method
    	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    	$({
    	  target: 'Object',
    	  stat: true,
    	  forced: FORCED,
    	  sham: !DESCRIPTORS
    	}, {
    	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    	    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
    	  }
    	});
    	return es_object_getOwnPropertyDescriptor;
    }

    requireEs_object_getOwnPropertyDescriptor();

    var DESCRIPTORS$3 = require('../internals/descriptors');
    var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
    var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
    var anObject$4 = require('../internals/an-object');
    var toPropertyKey = require('../internals/to-property-key');
    var $TypeError$2 = TypeError;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var $defineProperty = Object.defineProperty;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = 'enumerable';
    var CONFIGURABLE = 'configurable';
    var WRITABLE = 'writable';

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject$4(O);
      P = toPropertyKey(P);
      anObject$4(Attributes);
      if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject$4(O);
      P = toPropertyKey(P);
      anObject$4(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {/* empty */}
      if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$2('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var objectDefineProperty = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

    var wellKnownSymbolDefine;
    var hasRequiredWellKnownSymbolDefine;

    function requireWellKnownSymbolDefine () {
    	if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
    	hasRequiredWellKnownSymbolDefine = 1;

    	var path = requirePath();
    	var hasOwn = requireHasOwnProperty();
    	var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
    	var defineProperty = require$$0$7.f;
    	wellKnownSymbolDefine = function (NAME) {
    	  var _Symbol = path.Symbol || (path.Symbol = {});
    	  if (!hasOwn(_Symbol, NAME)) defineProperty(_Symbol, NAME, {
    	    value: wrappedWellKnownSymbolModule.f(NAME)
    	  });
    	};
    	return wellKnownSymbolDefine;
    }

    var hasRequiredEs_symbol_iterator;

    function requireEs_symbol_iterator () {
    	if (hasRequiredEs_symbol_iterator) return es_symbol_iterator;
    	hasRequiredEs_symbol_iterator = 1;

    	var defineWellKnownSymbol = requireWellKnownSymbolDefine();

    	// `Symbol.iterator` well-known symbol
    	// https://tc39.es/ecma262/#sec-symbol.iterator
    	defineWellKnownSymbol('iterator');
    	return es_symbol_iterator;
    }

    requireEs_symbol_iterator();

    var isCallable$7 = require('../internals/is-callable');
    module.exports = function (it) {
      return _typeof(it) == 'object' ? it !== null : isCallable$7(it);
    };

    var isObject$3 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(isObject$3);

    var anObject$3;
    var hasRequiredAnObject;

    function requireAnObject () {
    	if (hasRequiredAnObject) return anObject$3;
    	hasRequiredAnObject = 1;

    	var isObject = require$$1$3;
    	var $String = String;
    	var $TypeError = TypeError;

    	// `Assert: Type(argument) is Object`
    	anObject$3 = function (argument) {
    	  if (isObject(argument)) return argument;
    	  throw new $TypeError($String(argument) + ' is not an object');
    	};
    	return anObject$3;
    }

    var objectDefineProperties = {};

    var v8PrototypeDefineBug;
    var hasRequiredV8PrototypeDefineBug;

    function requireV8PrototypeDefineBug () {
    	if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
    	hasRequiredV8PrototypeDefineBug = 1;

    	var DESCRIPTORS = requireDescriptors();
    	var fails = requireFails();

    	// V8 ~ Chrome 36-
    	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
    	v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
    	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    	  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    	    value: 42,
    	    writable: false
    	  }).prototype !== 42;
    	});
    	return v8PrototypeDefineBug;
    }

    var es_object_keys = {};

    var hasRequiredEs_object_keys;

    function requireEs_object_keys () {
    	if (hasRequiredEs_object_keys) return es_object_keys;
    	hasRequiredEs_object_keys = 1;

    	var $ = require$$0$a;
    	var toObject = requireToObject();
    	var nativeKeys = require$$5$4;
    	var fails = requireFails();
    	var FAILS_ON_PRIMITIVES = fails(function () {
    	  nativeKeys(1);
    	});

    	// `Object.keys` method
    	// https://tc39.es/ecma262/#sec-object.keys
    	$({
    	  target: 'Object',
    	  stat: true,
    	  forced: FAILS_ON_PRIMITIVES
    	}, {
    	  keys: function keys(it) {
    	    return nativeKeys(toObject(it));
    	  }
    	});
    	return es_object_keys;
    }

    requireEs_object_keys();

    var internalObjectKeys = require('../internals/object-keys-internal');
    var enumBugKeys$1 = require('../internals/enum-bug-keys');

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys$1);
    };

    var objectKeys = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$5$4 = /*@__PURE__*/getAugmentedNamespace(objectKeys);

    var hasRequiredObjectDefineProperties;

    function requireObjectDefineProperties () {
    	if (hasRequiredObjectDefineProperties) return objectDefineProperties;
    	hasRequiredObjectDefineProperties = 1;

    	var DESCRIPTORS = requireDescriptors();
    	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
    	var definePropertyModule = require$$0$7;
    	var anObject = requireAnObject();
    	var toIndexedObject = requireToIndexedObject();
    	var objectKeys = require$$5$4;

    	// `Object.defineProperties` method
    	// https://tc39.es/ecma262/#sec-object.defineproperties
    	// eslint-disable-next-line es/no-object-defineproperties -- safe
    	objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    	  anObject(O);
    	  var props = toIndexedObject(Properties);
    	  var keys = objectKeys(Properties);
    	  var length = keys.length;
    	  var index = 0;
    	  var key;
    	  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    	  return O;
    	};
    	return objectDefineProperties;
    }

    var enumBugKeys;
    var hasRequiredEnumBugKeys;

    function requireEnumBugKeys () {
    	if (hasRequiredEnumBugKeys) return enumBugKeys;
    	hasRequiredEnumBugKeys = 1;

    	// IE8- don't enum bug keys
    	enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    	return enumBugKeys;
    }

    var hiddenKeys$1;
    var hasRequiredHiddenKeys;

    function requireHiddenKeys () {
    	if (hasRequiredHiddenKeys) return hiddenKeys$1;
    	hasRequiredHiddenKeys = 1;

    	hiddenKeys$1 = {};
    	return hiddenKeys$1;
    }

    var html;
    var hasRequiredHtml;

    function requireHtml () {
    	if (hasRequiredHtml) return html;
    	hasRequiredHtml = 1;

    	var getBuiltIn = requireGetBuiltIn();
    	html = getBuiltIn('document', 'documentElement');
    	return html;
    }

    var documentCreateElement;
    var hasRequiredDocumentCreateElement;

    function requireDocumentCreateElement () {
    	if (hasRequiredDocumentCreateElement) return documentCreateElement;
    	hasRequiredDocumentCreateElement = 1;

    	var globalThis = require$$3$2;
    	var isObject = require$$1$3;
    	var document = globalThis.document;
    	// typeof document.createElement is 'object' in old IE
    	var EXISTS = isObject(document) && isObject(document.createElement);
    	documentCreateElement = function (it) {
    	  return EXISTS ? document.createElement(it) : {};
    	};
    	return documentCreateElement;
    }

    var sharedKey;
    var hasRequiredSharedKey;

    function requireSharedKey () {
    	if (hasRequiredSharedKey) return sharedKey;
    	hasRequiredSharedKey = 1;

    	var shared = requireShared();
    	var uid = require$$3$1;
    	var keys = shared('keys');
    	sharedKey = function (key) {
    	  return keys[key] || (keys[key] = uid(key));
    	};
    	return sharedKey;
    }

    var objectCreate;
    var hasRequiredObjectCreate;

    function requireObjectCreate () {
    	if (hasRequiredObjectCreate) return objectCreate;
    	hasRequiredObjectCreate = 1;

    	/* global ActiveXObject -- old IE, WSH */
    	var anObject = requireAnObject();
    	var definePropertiesModule = requireObjectDefineProperties();
    	var enumBugKeys = requireEnumBugKeys();
    	var hiddenKeys = requireHiddenKeys();
    	var html = requireHtml();
    	var documentCreateElement = requireDocumentCreateElement();
    	var sharedKey = requireSharedKey();
    	var GT = '>';
    	var LT = '<';
    	var PROTOTYPE = 'prototype';
    	var SCRIPT = 'script';
    	var IE_PROTO = sharedKey('IE_PROTO');
    	var EmptyConstructor = function EmptyConstructor() {/* empty */};
    	var scriptTag = function scriptTag(content) {
    	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    	};

    	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    	var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    	  activeXDocument.write(scriptTag(''));
    	  activeXDocument.close();
    	  var temp = activeXDocument.parentWindow.Object;
    	  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    	  activeXDocument = null;
    	  return temp;
    	};

    	// Create object with fake `null` prototype: use iframe Object with cleared prototype
    	var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    	  // Thrash, waste and sodomy: IE GC bug
    	  var iframe = documentCreateElement('iframe');
    	  var JS = 'java' + SCRIPT + ':';
    	  var iframeDocument;
    	  iframe.style.display = 'none';
    	  html.appendChild(iframe);
    	  // https://github.com/zloirock/core-js/issues/475
    	  iframe.src = String(JS);
    	  iframeDocument = iframe.contentWindow.document;
    	  iframeDocument.open();
    	  iframeDocument.write(scriptTag('document.F=Object'));
    	  iframeDocument.close();
    	  return iframeDocument.F;
    	};

    	// Check for document.domain and active x support
    	// No need to use active x approach when document.domain is not set
    	// see https://github.com/es-shims/es5-shim/issues/150
    	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    	// avoid IE GC bug
    	var activeXDocument;
    	var _NullProtoObject = function NullProtoObject() {
    	  try {
    	    activeXDocument = new ActiveXObject('htmlfile');
    	  } catch (error) {/* ignore */}
    	  _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    	  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    	  var length = enumBugKeys.length;
    	  while (length--) delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    	  return _NullProtoObject();
    	};
    	hiddenKeys[IE_PROTO] = true;

    	// `Object.create` method
    	// https://tc39.es/ecma262/#sec-object.create
    	// eslint-disable-next-line es/no-object-create -- safe
    	objectCreate = Object.create || function create(O, Properties) {
    	  var result;
    	  if (O !== null) {
    	    EmptyConstructor[PROTOTYPE] = anObject(O);
    	    result = new EmptyConstructor();
    	    EmptyConstructor[PROTOTYPE] = null;
    	    // add "__proto__" for Object.getPrototypeOf polyfill
    	    result[IE_PROTO] = O;
    	  } else result = _NullProtoObject();
    	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
    	};
    	return objectCreate;
    }

    var addToUnscopables$2;
    var hasRequiredAddToUnscopables;

    function requireAddToUnscopables () {
    	if (hasRequiredAddToUnscopables) return addToUnscopables$2;
    	hasRequiredAddToUnscopables = 1;

    	var wellKnownSymbol = requireWellKnownSymbol();
    	var create = requireObjectCreate();
    	var defineProperty = require$$0$7.f;
    	var UNSCOPABLES = wellKnownSymbol('unscopables');
    	var ArrayPrototype = Array.prototype;

    	// Array.prototype[@@unscopables]
    	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    	if (ArrayPrototype[UNSCOPABLES] === undefined) {
    	  defineProperty(ArrayPrototype, UNSCOPABLES, {
    	    configurable: true,
    	    value: create(null)
    	  });
    	}

    	// add a key to Array.prototype[@@unscopables]
    	addToUnscopables$2 = function (key) {
    	  ArrayPrototype[UNSCOPABLES][key] = true;
    	};
    	return addToUnscopables$2;
    }

    var iterators;
    var hasRequiredIterators;

    function requireIterators () {
    	if (hasRequiredIterators) return iterators;
    	hasRequiredIterators = 1;

    	iterators = {};
    	return iterators;
    }

    var globalThis$7 = require('../internals/global-this');
    var isCallable$6 = require('../internals/is-callable');
    var WeakMap = globalThis$7.WeakMap;
    module.exports = isCallable$6(WeakMap) && /native code/.test(String(WeakMap));

    var weakMapBasicDetection = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(weakMapBasicDetection);

    var createPropertyDescriptor;
    var hasRequiredCreatePropertyDescriptor;

    function requireCreatePropertyDescriptor () {
    	if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
    	hasRequiredCreatePropertyDescriptor = 1;

    	createPropertyDescriptor = function (bitmap, value) {
    	  return {
    	    enumerable: !(bitmap & 1),
    	    configurable: !(bitmap & 2),
    	    writable: !(bitmap & 4),
    	    value: value
    	  };
    	};
    	return createPropertyDescriptor;
    }

    var createNonEnumerableProperty$2;
    var hasRequiredCreateNonEnumerableProperty;

    function requireCreateNonEnumerableProperty () {
    	if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty$2;
    	hasRequiredCreateNonEnumerableProperty = 1;

    	var DESCRIPTORS = requireDescriptors();
    	var definePropertyModule = require$$0$7;
    	var createPropertyDescriptor = requireCreatePropertyDescriptor();
    	createNonEnumerableProperty$2 = DESCRIPTORS ? function (object, key, value) {
    	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    	} : function (object, key, value) {
    	  object[key] = value;
    	  return object;
    	};
    	return createNonEnumerableProperty$2;
    }

    var internalState;
    var hasRequiredInternalState;

    function requireInternalState () {
    	if (hasRequiredInternalState) return internalState;
    	hasRequiredInternalState = 1;

    	var NATIVE_WEAK_MAP = require$$0$6;
    	var globalThis = require$$3$2;
    	var isObject = require$$1$3;
    	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
    	var hasOwn = requireHasOwnProperty();
    	var shared = requireSharedStore();
    	var sharedKey = requireSharedKey();
    	var hiddenKeys = requireHiddenKeys();
    	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    	var TypeError = globalThis.TypeError;
    	var WeakMap = globalThis.WeakMap;
    	var set, get, has;
    	var enforce = function enforce(it) {
    	  return has(it) ? get(it) : set(it, {});
    	};
    	var getterFor = function getterFor(TYPE) {
    	  return function (it) {
    	    var state;
    	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
    	      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    	    }
    	    return state;
    	  };
    	};
    	if (NATIVE_WEAK_MAP || shared.state) {
    	  var store = shared.state || (shared.state = new WeakMap());
    	  /* eslint-disable no-self-assign -- prototype methods protection */
    	  store.get = store.get;
    	  store.has = store.has;
    	  store.set = store.set;
    	  /* eslint-enable no-self-assign -- prototype methods protection */
    	  set = function set(it, metadata) {
    	    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    	    metadata.facade = it;
    	    store.set(it, metadata);
    	    return metadata;
    	  };
    	  get = function get(it) {
    	    return store.get(it) || {};
    	  };
    	  has = function has(it) {
    	    return store.has(it);
    	  };
    	} else {
    	  var STATE = sharedKey('state');
    	  hiddenKeys[STATE] = true;
    	  set = function set(it, metadata) {
    	    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    	    metadata.facade = it;
    	    createNonEnumerableProperty(it, STATE, metadata);
    	    return metadata;
    	  };
    	  get = function get(it) {
    	    return hasOwn(it, STATE) ? it[STATE] : {};
    	  };
    	  has = function has(it) {
    	    return hasOwn(it, STATE);
    	  };
    	}
    	internalState = {
    	  set: set,
    	  get: get,
    	  has: has,
    	  enforce: enforce,
    	  getterFor: getterFor
    	};
    	return internalState;
    }

    var globalThis$6 = require('../internals/global-this');
    var DOMIterables = require('../internals/dom-iterables');
    var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
    var ArrayIteratorMethods = require('../modules/es.array.iterator');
    var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');
    var setToStringTag$3 = require('../internals/set-to-string-tag');
    var wellKnownSymbol$4 = require('../internals/well-known-symbol');
    var ITERATOR$2 = wellKnownSymbol$4('iterator');
    var ArrayValues = ArrayIteratorMethods.values;
    var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
          createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$2, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR$2] = ArrayValues;
        }
        setToStringTag$3(CollectionPrototype, COLLECTION_NAME, true);
        if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
            createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
          }
        }
      }
    };
    for (var COLLECTION_NAME in DOMIterables) {
      handlePrototype(globalThis$6[COLLECTION_NAME] && globalThis$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
    }
    handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

    var $$d = require('../internals/export');
    var call$3 = require('../internals/function-call');
    var IS_PURE$2 = require('../internals/is-pure');
    var FunctionName = require('../internals/function-name');
    var isCallable$5 = require('../internals/is-callable');
    var createIteratorConstructor = require('../internals/iterator-create-constructor');
    var getPrototypeOf = require('../internals/object-get-prototype-of');
    var setPrototypeOf = require('../internals/object-set-prototype-of');
    var setToStringTag$2 = require('../internals/set-to-string-tag');
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
    var defineBuiltIn$3 = require('../internals/define-built-in');
    var wellKnownSymbol$3 = require('../internals/well-known-symbol');
    var Iterators = require('../internals/iterators');
    var IteratorsCore = require('../internals/iterators-core');
    var PROPER_FUNCTION_NAME = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$1 = wellKnownSymbol$3('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';
    var returnThis = function returnThis() {
      return this;
    };
    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);
      var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function () {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE$2 && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable$5(CurrentIteratorPrototype[ITERATOR$1])) {
              defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$1, returnThis);
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE$2) Iterators[TO_STRING_TAG] = returnThis;
        }
      }

      // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE$2 && CONFIGURABLE_FUNCTION_NAME$1) {
          createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() {
            return call$3(nativeIterator, this);
          };
        }
      }

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
          }
        } else $$d({
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
      }

      // define iterator
      if ((!IS_PURE$2 || FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
        defineBuiltIn$3(IterablePrototype, ITERATOR$1, defaultIterator, {
          name: DEFAULT
        });
      }
      Iterators[NAME] = defaultIterator;
      return methods;
    };

    var iteratorDefine = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$7$2 = /*@__PURE__*/getAugmentedNamespace(iteratorDefine);

    var createIterResultObject;
    var hasRequiredCreateIterResultObject;

    function requireCreateIterResultObject () {
    	if (hasRequiredCreateIterResultObject) return createIterResultObject;
    	hasRequiredCreateIterResultObject = 1;

    	// `CreateIterResultObject` abstract operation
    	// https://tc39.es/ecma262/#sec-createiterresultobject
    	createIterResultObject = function (value, done) {
    	  return {
    	    value: value,
    	    done: done
    	  };
    	};
    	return createIterResultObject;
    }

    var es_array_iterator;
    var hasRequiredEs_array_iterator;

    function requireEs_array_iterator () {
    	if (hasRequiredEs_array_iterator) return es_array_iterator;
    	hasRequiredEs_array_iterator = 1;

    	var toIndexedObject = requireToIndexedObject();
    	var addToUnscopables = requireAddToUnscopables();
    	var Iterators = requireIterators();
    	var InternalStateModule = requireInternalState();
    	var defineProperty = require$$0$7.f;
    	var defineIterator = require$$7$2;
    	var createIterResultObject = requireCreateIterResultObject();
    	var IS_PURE = requireIsPure();
    	var DESCRIPTORS = requireDescriptors();
    	var ARRAY_ITERATOR = 'Array Iterator';
    	var setInternalState = InternalStateModule.set;
    	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

    	// `Array.prototype.entries` method
    	// https://tc39.es/ecma262/#sec-array.prototype.entries
    	// `Array.prototype.keys` method
    	// https://tc39.es/ecma262/#sec-array.prototype.keys
    	// `Array.prototype.values` method
    	// https://tc39.es/ecma262/#sec-array.prototype.values
    	// `Array.prototype[@@iterator]` method
    	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    	// `CreateArrayIterator` internal method
    	// https://tc39.es/ecma262/#sec-createarrayiterator
    	es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    	  setInternalState(this, {
    	    type: ARRAY_ITERATOR,
    	    target: toIndexedObject(iterated),
    	    // target
    	    index: 0,
    	    // next index
    	    kind: kind // kind
    	  });
    	  // `%ArrayIteratorPrototype%.next` method
    	  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    	}, function () {
    	  var state = getInternalState(this);
    	  var target = state.target;
    	  var index = state.index++;
    	  if (!target || index >= target.length) {
    	    state.target = null;
    	    return createIterResultObject(undefined, true);
    	  }
    	  switch (state.kind) {
    	    case 'keys':
    	      return createIterResultObject(index, false);
    	    case 'values':
    	      return createIterResultObject(target[index], false);
    	  }
    	  return createIterResultObject([index, target[index]], false);
    	}, 'values');

    	// argumentsList[@@iterator] is %ArrayProto_values%
    	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
    	var values = Iterators.Arguments = Iterators.Array;

    	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    	addToUnscopables('keys');
    	addToUnscopables('values');
    	addToUnscopables('entries');

    	// V8 ~ Chrome 45- bug
    	if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
    	  defineProperty(values, 'name', {
    	    value: 'values'
    	  });
    	} catch (error) {/* empty */}
    	return es_array_iterator;
    }

    requireEs_array_iterator();

    var es_string_iterator = {};

    var es_math_trunc = {};

    var hasRequiredEs_math_trunc;

    function requireEs_math_trunc () {
    	if (hasRequiredEs_math_trunc) return es_math_trunc;
    	hasRequiredEs_math_trunc = 1;

    	var $ = require$$0$a;
    	var trunc = require$$0$5;

    	// `Math.trunc` method
    	// https://tc39.es/ecma262/#sec-math.trunc
    	$({
    	  target: 'Math',
    	  stat: true
    	}, {
    	  trunc: trunc
    	});
    	return es_math_trunc;
    }

    requireEs_math_trunc();

    var ceil = Math.ceil;
    var floor = Math.floor;

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    // eslint-disable-next-line es/no-math-trunc -- safe
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };

    var mathTrunc = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(mathTrunc);

    var toIntegerOrInfinity;
    var hasRequiredToIntegerOrInfinity;

    function requireToIntegerOrInfinity () {
    	if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
    	hasRequiredToIntegerOrInfinity = 1;

    	var trunc = require$$0$5;

    	// `ToIntegerOrInfinity` abstract operation
    	// https://tc39.es/ecma262/#sec-tointegerorinfinity
    	toIntegerOrInfinity = function (argument) {
    	  var number = +argument;
    	  // eslint-disable-next-line no-self-compare -- NaN check
    	  return number !== number || number === 0 ? 0 : trunc(number);
    	};
    	return toIntegerOrInfinity;
    }

    var stringMultibyte;
    var hasRequiredStringMultibyte;

    function requireStringMultibyte () {
    	if (hasRequiredStringMultibyte) return stringMultibyte;
    	hasRequiredStringMultibyte = 1;

    	var uncurryThis = requireFunctionUncurryThis();
    	var toIntegerOrInfinity = requireToIntegerOrInfinity();
    	var toString = requireToString();
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var charAt = uncurryThis(''.charAt);
    	var charCodeAt = uncurryThis(''.charCodeAt);
    	var stringSlice = uncurryThis(''.slice);
    	var createMethod = function createMethod(CONVERT_TO_STRING) {
    	  return function ($this, pos) {
    	    var S = toString(requireObjectCoercible($this));
    	    var position = toIntegerOrInfinity(pos);
    	    var size = S.length;
    	    var first, second;
    	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    	    first = charCodeAt(S, position);
    	    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    	  };
    	};
    	stringMultibyte = {
    	  // `String.prototype.codePointAt` method
    	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    	  codeAt: createMethod(false),
    	  // `String.prototype.at` method
    	  // https://github.com/mathiasbynens/String.prototype.at
    	  charAt: createMethod(true)
    	};
    	return stringMultibyte;
    }

    var hasRequiredEs_string_iterator;

    function requireEs_string_iterator () {
    	if (hasRequiredEs_string_iterator) return es_string_iterator;
    	hasRequiredEs_string_iterator = 1;

    	var charAt = requireStringMultibyte().charAt;
    	var toString = requireToString();
    	var InternalStateModule = requireInternalState();
    	var defineIterator = require$$7$2;
    	var createIterResultObject = requireCreateIterResultObject();
    	var STRING_ITERATOR = 'String Iterator';
    	var setInternalState = InternalStateModule.set;
    	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

    	// `String.prototype[@@iterator]` method
    	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    	defineIterator(String, 'String', function (iterated) {
    	  setInternalState(this, {
    	    type: STRING_ITERATOR,
    	    string: toString(iterated),
    	    index: 0
    	  });
    	  // `%StringIteratorPrototype%.next` method
    	  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    	}, function next() {
    	  var state = getInternalState(this);
    	  var string = state.string;
    	  var index = state.index;
    	  var point;
    	  if (index >= string.length) return createIterResultObject(undefined, true);
    	  point = charAt(string, index);
    	  state.index += point.length;
    	  return createIterResultObject(point, false);
    	});
    	return es_string_iterator;
    }

    requireEs_string_iterator();

    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
    module.exports = NATIVE_SYMBOL && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

    var useSymbolAsUid = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$5$3 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

    var wellKnownSymbol$2;
    var hasRequiredWellKnownSymbol;

    function requireWellKnownSymbol () {
    	if (hasRequiredWellKnownSymbol) return wellKnownSymbol$2;
    	hasRequiredWellKnownSymbol = 1;

    	var globalThis = require$$3$2;
    	var shared = requireShared();
    	var hasOwn = requireHasOwnProperty();
    	var uid = require$$3$1;
    	var NATIVE_SYMBOL = require$$4$1;
    	var USE_SYMBOL_AS_UID = require$$5$3;
    	var _Symbol = globalThis.Symbol;
    	var WellKnownSymbolsStore = shared('wks');
    	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol['for'] || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
    	wellKnownSymbol$2 = function (name) {
    	  if (!hasOwn(WellKnownSymbolsStore, name)) {
    	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    	  }
    	  return WellKnownSymbolsStore[name];
    	};
    	return wellKnownSymbol$2;
    }

    var toStringTagSupport;
    var hasRequiredToStringTagSupport;

    function requireToStringTagSupport () {
    	if (hasRequiredToStringTagSupport) return toStringTagSupport;
    	hasRequiredToStringTagSupport = 1;

    	var wellKnownSymbol = requireWellKnownSymbol();
    	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    	var test = {};
    	// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    	test[TO_STRING_TAG] = 'z';
    	toStringTagSupport = String(test) === '[object z]';
    	return toStringTagSupport;
    }

    var uncurryThis$8 = require('../internals/function-uncurry-this');
    var fails$6 = require('../internals/fails');
    var isCallable$4 = require('../internals/is-callable');
    var hasOwn$1 = require('../internals/has-own-property');
    var DESCRIPTORS$2 = require('../internals/descriptors');
    var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
    var inspectSource$2 = require('../internals/inspect-source');
    var InternalStateModule = require('../internals/internal-state');
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var defineProperty$1 = Object.defineProperty;
    var stringSlice = uncurryThis$8(''.slice);
    var replace = uncurryThis$8(''.replace);
    var join = uncurryThis$8([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$6(function () {
      return defineProperty$1(function () {/* empty */}, 'length', {
        value: 8
      }).length !== 8;
    });
    var TEMPLATE = String(String).split('String');
    var makeBuiltIn = module.exports = function (value, name, options) {
      if (stringSlice($String(name), 0, 7) === 'Symbol(') {
        name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
      }
      if (options && options.getter) name = 'get ' + name;
      if (options && options.setter) name = 'set ' + name;
      if (!hasOwn$1(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS$2) defineProperty$1(value, 'name', {
          value: name,
          configurable: true
        });else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn$1(options, 'arity') && value.length !== options.arity) {
        defineProperty$1(value, 'length', {
          value: options.arity
        });
      }
      try {
        if (options && hasOwn$1(options, 'constructor') && options.constructor) {
          if (DESCRIPTORS$2) defineProperty$1(value, 'prototype', {
            writable: false
          });
          // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
        } else if (value.prototype) value.prototype = undefined;
      } catch (error) {/* empty */}
      var state = enforceInternalState(value);
      if (!hasOwn$1(state, 'source')) {
        state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
      }
      return value;
    };

    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    // eslint-disable-next-line no-extend-native -- required
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable$4(this) && getInternalState(this).source || inspectSource$2(this);
    }, 'toString');

    var makeBuiltIn$1 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

    var defineBuiltIn$2;
    var hasRequiredDefineBuiltIn;

    function requireDefineBuiltIn () {
    	if (hasRequiredDefineBuiltIn) return defineBuiltIn$2;
    	hasRequiredDefineBuiltIn = 1;

    	var isCallable = require$$5$5;
    	var definePropertyModule = require$$0$7;
    	var makeBuiltIn = require$$0$4;
    	var defineGlobalProperty = requireDefineGlobalProperty();
    	defineBuiltIn$2 = function (O, key, value, options) {
    	  if (!options) options = {};
    	  var simple = options.enumerable;
    	  var name = options.name !== undefined ? options.name : key;
    	  if (isCallable(value)) makeBuiltIn(value, name, options);
    	  if (options.global) {
    	    if (simple) O[key] = value;else defineGlobalProperty(key, value);
    	  } else {
    	    try {
    	      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    	    } catch (error) {/* empty */}
    	    if (simple) O[key] = value;else definePropertyModule.f(O, key, {
    	      value: value,
    	      enumerable: false,
    	      configurable: !options.nonConfigurable,
    	      writable: !options.nonWritable
    	    });
    	  }
    	  return O;
    	};
    	return defineBuiltIn$2;
    }

    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
    var classof$2 = require('../internals/classof');

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return '[object ' + classof$2(this) + ']';
    };

    var objectToString = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(objectToString);

    var hasRequiredEs_object_toString;

    function requireEs_object_toString () {
    	if (hasRequiredEs_object_toString) return es_object_toString;
    	hasRequiredEs_object_toString = 1;

    	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
    	var defineBuiltIn = requireDefineBuiltIn();
    	var toString = require$$2$2;

    	// `Object.prototype.toString` method
    	// https://tc39.es/ecma262/#sec-object.prototype.tostring
    	if (!TO_STRING_TAG_SUPPORT) {
    	  defineBuiltIn(Object.prototype, 'toString', toString, {
    	    unsafe: true
    	  });
    	}
    	return es_object_toString;
    }

    requireEs_object_toString();

    var $$c = require('../internals/export');
    var $filter = require('../internals/array-iteration').filter;
    var arrayMethodHasSpeciesSupport$2 = require('../internals/array-method-has-species-support');
    var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species
    $$c({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT$1
    }, {
      filter: function filter(callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var $$b = require('../internals/export');
    var $find = require('../internals/array-iteration').find;
    var addToUnscopables$1 = require('../internals/add-to-unscopables');
    var FIND = 'find';
    var SKIPS_HOLES = true;

    // Shouldn't skip holes
    // eslint-disable-next-line es/no-array-prototype-find -- testing
    if (FIND in []) Array(1)[FIND](function () {
      SKIPS_HOLES = false;
    });

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    $$b({
      target: 'Array',
      proto: true,
      forced: SKIPS_HOLES
    }, {
      find: function find(callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables$1(FIND);

    var es_string_includes = {};

    var isRegexp;
    var hasRequiredIsRegexp;

    function requireIsRegexp () {
    	if (hasRequiredIsRegexp) return isRegexp;
    	hasRequiredIsRegexp = 1;

    	var isObject = require$$1$3;
    	var classof = require$$0$9;
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var MATCH = wellKnownSymbol('match');

    	// `IsRegExp` abstract operation
    	// https://tc39.es/ecma262/#sec-isregexp
    	isRegexp = function (it) {
    	  var isRegExp;
    	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
    	};
    	return isRegexp;
    }

    var notARegexp;
    var hasRequiredNotARegexp;

    function requireNotARegexp () {
    	if (hasRequiredNotARegexp) return notARegexp;
    	hasRequiredNotARegexp = 1;

    	var isRegExp = requireIsRegexp();
    	var $TypeError = TypeError;
    	notARegexp = function (it) {
    	  if (isRegExp(it)) {
    	    throw new $TypeError("The method doesn't accept regular expressions");
    	  }
    	  return it;
    	};
    	return notARegexp;
    }

    var correctIsRegexpLogic;
    var hasRequiredCorrectIsRegexpLogic;

    function requireCorrectIsRegexpLogic () {
    	if (hasRequiredCorrectIsRegexpLogic) return correctIsRegexpLogic;
    	hasRequiredCorrectIsRegexpLogic = 1;

    	var wellKnownSymbol = requireWellKnownSymbol();
    	var MATCH = wellKnownSymbol('match');
    	correctIsRegexpLogic = function (METHOD_NAME) {
    	  var regexp = /./;
    	  try {
    	    '/./'[METHOD_NAME](regexp);
    	  } catch (error1) {
    	    try {
    	      regexp[MATCH] = false;
    	      return '/./'[METHOD_NAME](regexp);
    	    } catch (error2) {/* empty */}
    	  }
    	  return false;
    	};
    	return correctIsRegexpLogic;
    }

    var hasRequiredEs_string_includes;

    function requireEs_string_includes () {
    	if (hasRequiredEs_string_includes) return es_string_includes;
    	hasRequiredEs_string_includes = 1;

    	var $ = require$$0$a;
    	var uncurryThis = requireFunctionUncurryThis();
    	var notARegExp = requireNotARegexp();
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var toString = requireToString();
    	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
    	var stringIndexOf = uncurryThis(''.indexOf);

    	// `String.prototype.includes` method
    	// https://tc39.es/ecma262/#sec-string.prototype.includes
    	$({
    	  target: 'String',
    	  proto: true,
    	  forced: !correctIsRegExpLogic('includes')
    	}, {
    	  includes: function includes(searchString /* , position = 0 */) {
    	    return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    	  }
    	});
    	return es_string_includes;
    }

    requireEs_string_includes();

    var $$a = require('../internals/export');
    var $includes = require('../internals/array-includes').includes;
    var fails$5 = require('../internals/fails');
    var addToUnscopables = require('../internals/add-to-unscopables');

    // FF99+ bug
    var BROKEN_ON_SPARSE = fails$5(function () {
      // eslint-disable-next-line es/no-array-prototype-includes -- detection
      return !Array(1).includes();
    });

    // Safari 26.4- bug
    var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails$5(function () {
      // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
      return [, 1].includes(undefined, 1);
    });

    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    $$a({
      target: 'Array',
      proto: true,
      forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX
    }, {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('includes');

    var $$9 = require('../internals/export');
    var $map = require('../internals/array-iteration').map;
    var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('map');

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $$9({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT
    }, {
      map: function map(callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var es_array_slice = {};

    var isArray$1;
    var hasRequiredIsArray;

    function requireIsArray () {
    	if (hasRequiredIsArray) return isArray$1;
    	hasRequiredIsArray = 1;

    	var classof = require$$0$9;

    	// `IsArray` abstract operation
    	// https://tc39.es/ecma262/#sec-isarray
    	// eslint-disable-next-line es/no-array-isarray -- safe
    	isArray$1 = Array.isArray || function isArray(argument) {
    	  return classof(argument) === 'Array';
    	};
    	return isArray$1;
    }

    var uncurryThis$7 = require('../internals/function-uncurry-this');
    var fails$4 = require('../internals/fails');
    var isCallable$3 = require('../internals/is-callable');
    var classof$1 = require('../internals/classof');
    var getBuiltIn$1 = require('../internals/get-built-in');
    var inspectSource$1 = require('../internals/inspect-source');
    var noop = function noop() {/* empty */};
    var construct = getBuiltIn$1('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis$7(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable$3(argument)) return false;
      try {
        construct(noop, [], argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable$3(argument)) return false;
      switch (classof$1(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
          return false;
      }
      try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    module.exports = !construct || fails$4(function () {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;

    var isConstructor = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

    var toAbsoluteIndex;
    var hasRequiredToAbsoluteIndex;

    function requireToAbsoluteIndex () {
    	if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
    	hasRequiredToAbsoluteIndex = 1;

    	var toIntegerOrInfinity = requireToIntegerOrInfinity();
    	var max = Math.max;
    	var min = Math.min;

    	// Helper for a popular repeating case of the spec:
    	// Let integer be ? ToInteger(index).
    	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    	toAbsoluteIndex = function (index, length) {
    	  var integer = toIntegerOrInfinity(index);
    	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
    	};
    	return toAbsoluteIndex;
    }

    var toLength$1;
    var hasRequiredToLength;

    function requireToLength () {
    	if (hasRequiredToLength) return toLength$1;
    	hasRequiredToLength = 1;

    	var toIntegerOrInfinity = requireToIntegerOrInfinity();
    	var min = Math.min;

    	// `ToLength` abstract operation
    	// https://tc39.es/ecma262/#sec-tolength
    	toLength$1 = function (argument) {
    	  var len = toIntegerOrInfinity(argument);
    	  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    	};
    	return toLength$1;
    }

    var lengthOfArrayLike$2;
    var hasRequiredLengthOfArrayLike;

    function requireLengthOfArrayLike () {
    	if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike$2;
    	hasRequiredLengthOfArrayLike = 1;

    	var toLength = requireToLength();

    	// `LengthOfArrayLike` abstract operation
    	// https://tc39.es/ecma262/#sec-lengthofarraylike
    	lengthOfArrayLike$2 = function (obj) {
    	  return toLength(obj.length);
    	};
    	return lengthOfArrayLike$2;
    }

    var createProperty;
    var hasRequiredCreateProperty;

    function requireCreateProperty () {
    	if (hasRequiredCreateProperty) return createProperty;
    	hasRequiredCreateProperty = 1;

    	var DESCRIPTORS = requireDescriptors();
    	var definePropertyModule = require$$0$7;
    	var createPropertyDescriptor = requireCreatePropertyDescriptor();
    	createProperty = function (object, key, value) {
    	  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
    	};
    	return createProperty;
    }

    var DESCRIPTORS$1 = require('../internals/descriptors');
    var isArray = require('../internals/is-array');
    var $TypeError$1 = TypeError;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // Safari < 13 does not throw an error in this case
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$1 && !function () {
      // makes no sense without proper strict mode support
      if (this !== undefined) return true;
      try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
          writable: false
        }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
    module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor$1(O, 'length').writable) {
        throw new $TypeError$1('Cannot set read only .length');
      }
      return O.length = length;
    } : function (O, length) {
      return O.length = length;
    };

    var arraySetLength = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$5$2 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

    var call$2 = require('../internals/function-call');
    var uncurryThis$6 = require('../internals/function-uncurry-this');
    var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
    var anObject$2 = require('../internals/an-object');
    var isObject$2 = require('../internals/is-object');
    var toLength = require('../internals/to-length');
    var toString$1 = require('../internals/to-string');
    var requireObjectCoercible = require('../internals/require-object-coercible');
    var getMethod = require('../internals/get-method');
    var advanceStringIndex = require('../internals/advance-string-index');
    var getRegExpFlags = require('../internals/regexp-get-flags');
    var regExpExec = require('../internals/regexp-exec-abstract');
    var stringIndexOf = uncurryThis$6(''.indexOf);

    // @@match logic
    fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
      return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = isObject$2(regexp) ? getMethod(regexp, MATCH) : undefined;
        return matcher ? call$2(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject$2(this);
        var S = toString$1(string);
        var res = maybeCallNative(nativeMatch, rx, S);
        if (res.done) return res.value;
        var flags = toString$1(getRegExpFlags(rx));
        if (!~stringIndexOf(flags, 'g')) return regExpExec(rx, S);
        var fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = toString$1(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }];
    });

    var globalThis$5 = require('../internals/global-this');
    var userAgent$5 = require('../internals/environment-user-agent');
    var process = globalThis$5.process;
    var Deno$1 = globalThis$5.Deno;
    var versions = process && process.versions || Deno$1 && Deno$1.version;
    var v8 = versions && versions.v8;
    var match, version;
    if (v8) {
      match = v8.split('.');
      // in old Chrome, versions of V8 isn't V8 = Chrome / 10
      // but their correct versions are not interesting for us
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }

    // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0
    if (!version && userAgent$5) {
      match = userAgent$5.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent$5.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module.exports = version;

    var environmentV8Version = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(environmentV8Version);

    var arrayMethodHasSpeciesSupport;
    var hasRequiredArrayMethodHasSpeciesSupport;

    function requireArrayMethodHasSpeciesSupport () {
    	if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport;
    	hasRequiredArrayMethodHasSpeciesSupport = 1;

    	var fails = requireFails();
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var V8_VERSION = require$$2$1;
    	var SPECIES = wellKnownSymbol('species');
    	arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    	  // We can't use this feature detection in V8 since it causes
    	  // deoptimization and serious performance degradation
    	  // https://github.com/zloirock/core-js/issues/677
    	  return V8_VERSION >= 51 || !fails(function () {
    	    var array = [];
    	    var constructor = array.constructor = {};
    	    constructor[SPECIES] = function () {
    	      return {
    	        foo: 1
    	      };
    	    };
    	    return array[METHOD_NAME](Boolean).foo !== 1;
    	  });
    	};
    	return arrayMethodHasSpeciesSupport;
    }

    var uncurryThis$5 = require('../internals/function-uncurry-this');
    module.exports = uncurryThis$5([].slice);

    var arraySlice = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$7$1 = /*@__PURE__*/getAugmentedNamespace(arraySlice);

    var hasRequiredEs_array_slice;

    function requireEs_array_slice () {
    	if (hasRequiredEs_array_slice) return es_array_slice;
    	hasRequiredEs_array_slice = 1;

    	var $ = require$$0$a;
    	var isArray = requireIsArray();
    	var isConstructor = require$$0$3;
    	var isObject = require$$1$3;
    	var toAbsoluteIndex = requireToAbsoluteIndex();
    	var lengthOfArrayLike = requireLengthOfArrayLike();
    	var toIndexedObject = requireToIndexedObject();
    	var createProperty = requireCreateProperty();
    	var setArrayLength = require$$5$2;
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
    	var nativeSlice = require$$7$1;
    	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
    	var SPECIES = wellKnownSymbol('species');
    	var $Array = Array;
    	var max = Math.max;

    	// `Array.prototype.slice` method
    	// https://tc39.es/ecma262/#sec-array.prototype.slice
    	// fallback for not array-like ES3 strings and DOM objects
    	$({
    	  target: 'Array',
    	  proto: true,
    	  forced: !HAS_SPECIES_SUPPORT
    	}, {
    	  slice: function slice(start, end) {
    	    var O = toIndexedObject(this);
    	    var length = lengthOfArrayLike(O);
    	    var k = toAbsoluteIndex(start, length);
    	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    	    var Constructor, result, n;
    	    if (isArray(O)) {
    	      Constructor = O.constructor;
    	      // cross-realm fallback
    	      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
    	        Constructor = undefined;
    	      } else if (isObject(Constructor)) {
    	        Constructor = Constructor[SPECIES];
    	        if (Constructor === null) Constructor = undefined;
    	      }
    	      if (Constructor === $Array || Constructor === undefined) {
    	        return nativeSlice(O, k, fin);
    	      }
    	    }
    	    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    	    setArrayLength(result, n);
    	    return result;
    	  }
    	});
    	return es_array_slice;
    }

    requireEs_array_slice();

    var es_set = {};

    var es_set_constructor = {};

    var $$8 = require('../internals/export');
    var uncurryThis$4 = require('../internals/function-uncurry-this-clause');
    var $indexOf = require('../internals/array-includes').indexOf;
    var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
    var nativeIndexOf = uncurryThis$4([].indexOf);
    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
    var FORCED$1 = NEGATIVE_ZERO || !arrayMethodIsStrict$1('indexOf');

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $$8({
      target: 'Array',
      proto: true,
      forced: FORCED$1
    }, {
      indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
        var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
        return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
      }
    });

    var $$7 = require('../internals/export');
    var globalThis$4 = require('../internals/global-this');
    var uncurryThis$3 = require('../internals/function-uncurry-this');
    var isForced$1 = require('../internals/is-forced');
    var defineBuiltIn$1 = require('../internals/define-built-in');
    var InternalMetadataModule = require('../internals/internal-metadata');
    var iterate$1 = require('../internals/iterate');
    var anInstance$1 = require('../internals/an-instance');
    var isCallable$2 = require('../internals/is-callable');
    var isNullOrUndefined = require('../internals/is-null-or-undefined');
    var isObject$1 = require('../internals/is-object');
    var fails$3 = require('../internals/fails');
    var checkCorrectnessOfIteration$2 = require('../internals/check-correctness-of-iteration');
    var setToStringTag$1 = require('../internals/set-to-string-tag');
    var inheritIfRequired = require('../internals/inherit-if-required');
    module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
      var ADDER = IS_MAP ? 'set' : 'add';
      var NativeConstructor = globalThis$4[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};
      var fixMethod = function fixMethod(KEY) {
        var uncurriedNativeMethod = uncurryThis$3(NativePrototype[KEY]);
        defineBuiltIn$1(NativePrototype, KEY, KEY === 'add' ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY === 'delete' ? function (key) {
          return IS_WEAK && !isObject$1(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY === 'get' ? function get(key) {
          return IS_WEAK && !isObject$1(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY === 'has' ? function has(key) {
          return IS_WEAK && !isObject$1(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        });
      };
      var REPLACE = isForced$1(CONSTRUCTOR_NAME, !isCallable$2(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$3(function () {
        new NativeConstructor().entries().next();
      })));
      if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.enable();
      } else if (isForced$1(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails$3(function () {
          instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) {
          new NativeConstructor(iterable);
        });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails$3(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance$1(dummy, NativePrototype);
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
            if (!isNullOrUndefined(iterable)) iterate$1(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP
            });
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
      }
      exported[CONSTRUCTOR_NAME] = Constructor;
      $$7({
        global: true,
        constructor: true,
        forced: Constructor !== NativeConstructor
      }, exported);
      setToStringTag$1(Constructor, CONSTRUCTOR_NAME);
      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
      return Constructor;
    };

    var collection = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(collection);

    var defineBuiltInAccessor;
    var hasRequiredDefineBuiltInAccessor;

    function requireDefineBuiltInAccessor () {
    	if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
    	hasRequiredDefineBuiltInAccessor = 1;

    	var makeBuiltIn = require$$0$4;
    	var defineProperty = require$$0$7;
    	defineBuiltInAccessor = function (target, name, descriptor) {
    	  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
    	    getter: true
    	  });
    	  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
    	    setter: true
    	  });
    	  return defineProperty.f(target, name, descriptor);
    	};
    	return defineBuiltInAccessor;
    }

    var defineBuiltIns;
    var hasRequiredDefineBuiltIns;

    function requireDefineBuiltIns () {
    	if (hasRequiredDefineBuiltIns) return defineBuiltIns;
    	hasRequiredDefineBuiltIns = 1;

    	var defineBuiltIn = requireDefineBuiltIn();
    	defineBuiltIns = function (target, src, options) {
    	  for (var key in src) defineBuiltIn(target, key, src[key], options);
    	  return target;
    	};
    	return defineBuiltIns;
    }

    var functionUncurryThisClause;
    var hasRequiredFunctionUncurryThisClause;

    function requireFunctionUncurryThisClause () {
    	if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
    	hasRequiredFunctionUncurryThisClause = 1;

    	var classofRaw = require$$0$9;
    	var uncurryThis = requireFunctionUncurryThis();
    	functionUncurryThisClause = function (fn) {
    	  // Nashorn bug:
    	  //   https://github.com/zloirock/core-js/issues/1128
    	  //   https://github.com/zloirock/core-js/issues/1130
    	  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
    	};
    	return functionUncurryThisClause;
    }

    var aCallable$3;
    var hasRequiredACallable;

    function requireACallable () {
    	if (hasRequiredACallable) return aCallable$3;
    	hasRequiredACallable = 1;

    	var isCallable = require$$5$5;
    	var tryToString = requireTryToString();
    	var $TypeError = TypeError;

    	// `Assert: IsCallable(argument) is true`
    	aCallable$3 = function (argument) {
    	  if (isCallable(argument)) return argument;
    	  throw new $TypeError(tryToString(argument) + ' is not a function');
    	};
    	return aCallable$3;
    }

    var functionBindContext;
    var hasRequiredFunctionBindContext;

    function requireFunctionBindContext () {
    	if (hasRequiredFunctionBindContext) return functionBindContext;
    	hasRequiredFunctionBindContext = 1;

    	var uncurryThis = requireFunctionUncurryThisClause();
    	var aCallable = requireACallable();
    	var NATIVE_BIND = requireFunctionBindNative();
    	var bind = uncurryThis(uncurryThis.bind);

    	// optional / simple context binding
    	functionBindContext = function (fn, that) {
    	  aCallable(fn);
    	  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function /* ...args */
    	  () {
    	    return fn.apply(that, arguments);
    	  };
    	};
    	return functionBindContext;
    }

    var objectIsPrototypeOf;
    var hasRequiredObjectIsPrototypeOf;

    function requireObjectIsPrototypeOf () {
    	if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
    	hasRequiredObjectIsPrototypeOf = 1;

    	var uncurryThis = requireFunctionUncurryThis();
    	objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
    	return objectIsPrototypeOf;
    }

    var anInstance;
    var hasRequiredAnInstance;

    function requireAnInstance () {
    	if (hasRequiredAnInstance) return anInstance;
    	hasRequiredAnInstance = 1;

    	var isPrototypeOf = requireObjectIsPrototypeOf();
    	var $TypeError = TypeError;
    	anInstance = function (it, Prototype) {
    	  if (isPrototypeOf(Prototype, it)) return it;
    	  throw new $TypeError('Incorrect invocation');
    	};
    	return anInstance;
    }

    var bind = require('../internals/function-bind-context');
    var call$1 = require('../internals/function-call');
    var anObject$1 = require('../internals/an-object');
    var tryToString = require('../internals/try-to-string');
    var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
    var lengthOfArrayLike$1 = require('../internals/length-of-array-like');
    var isPrototypeOf = require('../internals/object-is-prototype-of');
    var getIterator = require('../internals/get-iterator');
    var getIteratorMethod = require('../internals/get-iterator-method');
    var iteratorClose = require('../internals/iterator-close');
    var $TypeError = TypeError;
    var Result = function Result(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module.exports = function (iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function stop(condition) {
        var $iterator = iterator;
        iterator = undefined;
        if ($iterator) iteratorClose($iterator, 'normal');
        return new Result(true, condition);
      };
      var callFn = function callFn(value) {
        if (AS_ENTRIES) {
          anObject$1(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call$1(next, iterator)).done) {
        // `IteratorValue` errors should propagate without closing the iterator
        var value = step.value;
        try {
          result = callFn(value);
        } catch (error) {
          if (iterator) iteratorClose(iterator, 'throw', error);else throw error;
        }
        if (_typeof(result) == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };

    var iterate = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(iterate);

    var setSpecies;
    var hasRequiredSetSpecies;

    function requireSetSpecies () {
    	if (hasRequiredSetSpecies) return setSpecies;
    	hasRequiredSetSpecies = 1;

    	var getBuiltIn = requireGetBuiltIn();
    	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var DESCRIPTORS = requireDescriptors();
    	var SPECIES = wellKnownSymbol('species');
    	setSpecies = function (CONSTRUCTOR_NAME) {
    	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    	    defineBuiltInAccessor(Constructor, SPECIES, {
    	      configurable: true,
    	      get: function get() {
    	        return this;
    	      }
    	    });
    	  }
    	};
    	return setSpecies;
    }

    var es_array_splice = {};

    var doesNotExceedSafeInteger;
    var hasRequiredDoesNotExceedSafeInteger;

    function requireDoesNotExceedSafeInteger () {
    	if (hasRequiredDoesNotExceedSafeInteger) return doesNotExceedSafeInteger;
    	hasRequiredDoesNotExceedSafeInteger = 1;

    	var $TypeError = TypeError;
    	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

    	doesNotExceedSafeInteger = function (it) {
    	  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
    	  return it;
    	};
    	return doesNotExceedSafeInteger;
    }

    var arraySpeciesConstructor;
    var hasRequiredArraySpeciesConstructor;

    function requireArraySpeciesConstructor () {
    	if (hasRequiredArraySpeciesConstructor) return arraySpeciesConstructor;
    	hasRequiredArraySpeciesConstructor = 1;

    	var isArray = requireIsArray();
    	var isConstructor = require$$0$3;
    	var isObject = require$$1$3;
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var SPECIES = wellKnownSymbol('species');
    	var $Array = Array;

    	// a part of `ArraySpeciesCreate` abstract operation
    	// https://tc39.es/ecma262/#sec-arrayspeciescreate
    	arraySpeciesConstructor = function (originalArray) {
    	  var C;
    	  if (isArray(originalArray)) {
    	    C = originalArray.constructor;
    	    // cross-realm fallback
    	    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
    	      C = C[SPECIES];
    	      if (C === null) C = undefined;
    	    }
    	  }
    	  return C === undefined ? $Array : C;
    	};
    	return arraySpeciesConstructor;
    }

    var arraySpeciesCreate;
    var hasRequiredArraySpeciesCreate;

    function requireArraySpeciesCreate () {
    	if (hasRequiredArraySpeciesCreate) return arraySpeciesCreate;
    	hasRequiredArraySpeciesCreate = 1;

    	var arraySpeciesConstructor = requireArraySpeciesConstructor();

    	// `ArraySpeciesCreate` abstract operation
    	// https://tc39.es/ecma262/#sec-arrayspeciescreate
    	arraySpeciesCreate = function (originalArray, length) {
    	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    	};
    	return arraySpeciesCreate;
    }

    var deletePropertyOrThrow$1;
    var hasRequiredDeletePropertyOrThrow;

    function requireDeletePropertyOrThrow () {
    	if (hasRequiredDeletePropertyOrThrow) return deletePropertyOrThrow$1;
    	hasRequiredDeletePropertyOrThrow = 1;

    	var tryToString = requireTryToString();
    	var $TypeError = TypeError;
    	deletePropertyOrThrow$1 = function (O, P) {
    	  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
    	};
    	return deletePropertyOrThrow$1;
    }

    var hasRequiredEs_array_splice;

    function requireEs_array_splice () {
    	if (hasRequiredEs_array_splice) return es_array_splice;
    	hasRequiredEs_array_splice = 1;

    	var $ = require$$0$a;
    	var toObject = requireToObject();
    	var toAbsoluteIndex = requireToAbsoluteIndex();
    	var toIntegerOrInfinity = requireToIntegerOrInfinity();
    	var lengthOfArrayLike = requireLengthOfArrayLike();
    	var setArrayLength = require$$5$2;
    	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
    	var arraySpeciesCreate = requireArraySpeciesCreate();
    	var createProperty = requireCreateProperty();
    	var deletePropertyOrThrow = requireDeletePropertyOrThrow();
    	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
    	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
    	var max = Math.max;
    	var min = Math.min;

    	// `Array.prototype.splice` method
    	// https://tc39.es/ecma262/#sec-array.prototype.splice
    	// with adding support of @@species
    	$({
    	  target: 'Array',
    	  proto: true,
    	  forced: !HAS_SPECIES_SUPPORT
    	}, {
    	  splice: function splice(start, deleteCount /* , ...items */) {
    	    var O = toObject(this);
    	    var len = lengthOfArrayLike(O);
    	    var actualStart = toAbsoluteIndex(start, len);
    	    var argumentsLength = arguments.length;
    	    var insertCount, actualDeleteCount, A, k, from, to;
    	    if (argumentsLength === 0) {
    	      insertCount = actualDeleteCount = 0;
    	    } else if (argumentsLength === 1) {
    	      insertCount = 0;
    	      actualDeleteCount = len - actualStart;
    	    } else {
    	      insertCount = argumentsLength - 2;
    	      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    	    }
    	    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    	    A = arraySpeciesCreate(O, actualDeleteCount);
    	    for (k = 0; k < actualDeleteCount; k++) {
    	      from = actualStart + k;
    	      if (from in O) createProperty(A, k, O[from]);
    	    }
    	    setArrayLength(A, actualDeleteCount);
    	    if (insertCount < actualDeleteCount) {
    	      for (k = actualStart; k < len - actualDeleteCount; k++) {
    	        from = k + actualDeleteCount;
    	        to = k + insertCount;
    	        if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
    	      }
    	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    	    } else if (insertCount > actualDeleteCount) {
    	      for (k = len - actualDeleteCount; k > actualStart; k--) {
    	        from = k + actualDeleteCount - 1;
    	        to = k + insertCount - 1;
    	        if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
    	      }
    	    }
    	    for (k = 0; k < insertCount; k++) {
    	      O[k + actualStart] = arguments[k + 2];
    	    }
    	    setArrayLength(O, len - actualDeleteCount + insertCount);
    	    return A;
    	  }
    	});
    	return es_array_splice;
    }

    requireEs_array_splice();

    var $$6 = require('../internals/export');
    var uncurryThis$2 = require('../internals/function-uncurry-this');
    var hiddenKeys = require('../internals/hidden-keys');
    var isObject = require('../internals/is-object');
    var hasOwn = require('../internals/has-own-property');
    var defineProperty = require('../internals/object-define-property').f;
    var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
    var getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external');
    var isExtensible = require('../internals/object-is-extensible');
    var uid = require('../internals/uid');
    var FREEZING = require('../internals/freezing');
    var REQUIRED = false;
    var METADATA = uid('meta');
    var id = 0;
    var setMetadata = function setMetadata(it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++,
          // object ID
          weakData: {} // weak collections IDs
        }
      });
    };
    var fastKey = function fastKey(it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
        // return object ID
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function getWeakData(it, create) {
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
        // return the store of weak collections IDs
      }
      return it[METADATA].weakData;
    };

    // add metadata on freeze-family methods calling
    var onFreeze = function onFreeze(it) {
      if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
      return it;
    };
    var enable = function enable() {
      meta.enable = function () {/* empty */};
      REQUIRED = true;
      var getOwnPropertyNames = getOwnPropertyNamesModule.f;
      var splice = uncurryThis$2([].splice);
      var test = {};
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      test[METADATA] = 1;

      // prevent exposing of metadata key
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function (it) {
          var result = getOwnPropertyNames(it);
          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }
          return result;
        };
        $$6({
          target: 'Object',
          stat: true,
          forced: true
        }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        });
      }
    };
    var meta = module.exports = {
      enable: enable,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys[METADATA] = true;

    var internalMetadata = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$11 = /*@__PURE__*/getAugmentedNamespace(internalMetadata);

    var collectionStrong;
    var hasRequiredCollectionStrong;

    function requireCollectionStrong () {
    	if (hasRequiredCollectionStrong) return collectionStrong;
    	hasRequiredCollectionStrong = 1;

    	var create = requireObjectCreate();
    	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
    	var defineBuiltIns = requireDefineBuiltIns();
    	var bind = requireFunctionBindContext();
    	var anInstance = requireAnInstance();
    	var isNullOrUndefined = requireIsNullOrUndefined();
    	var iterate = require$$5$1;
    	var defineIterator = require$$7$2;
    	var createIterResultObject = requireCreateIterResultObject();
    	var setSpecies = requireSetSpecies();
    	var DESCRIPTORS = requireDescriptors();
    	var fastKey = require$$11.fastKey;
    	var InternalStateModule = requireInternalState();
    	var setInternalState = InternalStateModule.set;
    	var internalStateGetterFor = InternalStateModule.getterFor;
    	collectionStrong = {
    	  getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    	    var Constructor = wrapper(function (that, iterable) {
    	      anInstance(that, Prototype);
    	      setInternalState(that, {
    	        type: CONSTRUCTOR_NAME,
    	        index: create(null),
    	        first: null,
    	        last: null,
    	        size: 0
    	      });
    	      if (!DESCRIPTORS) that.size = 0;
    	      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
    	        that: that,
    	        AS_ENTRIES: IS_MAP
    	      });
    	    });
    	    var Prototype = Constructor.prototype;
    	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
    	    var define = function define(that, key, value) {
    	      var state = getInternalState(that);
    	      var entry = getEntry(that, key);
    	      var previous, index;
    	      // change existing entry
    	      if (entry) {
    	        entry.value = value;
    	        // create new entry
    	      } else {
    	        state.last = entry = {
    	          index: index = fastKey(key, true),
    	          key: key,
    	          value: value,
    	          previous: previous = state.last,
    	          next: null,
    	          removed: false
    	        };
    	        if (!state.first) state.first = entry;
    	        if (previous) previous.next = entry;
    	        if (DESCRIPTORS) state.size++;else that.size++;
    	        // add to index
    	        if (index !== 'F') state.index[index] = entry;
    	      }
    	      return that;
    	    };
    	    var getEntry = function getEntry(that, key) {
    	      var state = getInternalState(that);
    	      // fast case
    	      var index = fastKey(key);
    	      var entry;
    	      if (index !== 'F') return state.index[index];
    	      // frozen object case
    	      for (entry = state.first; entry; entry = entry.next) {
    	        if (entry.key === key) return entry;
    	      }
    	    };
    	    defineBuiltIns(Prototype, {
    	      // `{ Map, Set }.prototype.clear()` methods
    	      // https://tc39.es/ecma262/#sec-map.prototype.clear
    	      // https://tc39.es/ecma262/#sec-set.prototype.clear
    	      clear: function clear() {
    	        var that = this;
    	        var state = getInternalState(that);
    	        var entry = state.first;
    	        while (entry) {
    	          entry.removed = true;
    	          if (entry.previous) entry.previous = entry.previous.next = null;
    	          entry = entry.next;
    	        }
    	        state.first = state.last = null;
    	        state.index = create(null);
    	        if (DESCRIPTORS) state.size = 0;else that.size = 0;
    	      },
    	      // `{ Map, Set }.prototype.delete(key)` methods
    	      // https://tc39.es/ecma262/#sec-map.prototype.delete
    	      // https://tc39.es/ecma262/#sec-set.prototype.delete
    	      'delete': function _delete(key) {
    	        var that = this;
    	        var state = getInternalState(that);
    	        var entry = getEntry(that, key);
    	        if (entry) {
    	          var next = entry.next;
    	          var prev = entry.previous;
    	          delete state.index[entry.index];
    	          entry.removed = true;
    	          if (prev) prev.next = next;
    	          if (next) next.previous = prev;
    	          if (state.first === entry) state.first = next;
    	          if (state.last === entry) state.last = prev;
    	          if (DESCRIPTORS) state.size--;else that.size--;
    	        }
    	        return !!entry;
    	      },
    	      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
    	      // https://tc39.es/ecma262/#sec-map.prototype.foreach
    	      // https://tc39.es/ecma262/#sec-set.prototype.foreach
    	      forEach: function forEach(callbackfn /* , that = undefined */) {
    	        var state = getInternalState(this);
    	        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    	        var entry;
    	        while (entry = entry ? entry.next : state.first) {
    	          boundFunction(entry.value, entry.key, this);
    	          // revert to the last existing entry
    	          while (entry && entry.removed) entry = entry.previous;
    	        }
    	      },
    	      // `{ Map, Set}.prototype.has(key)` methods
    	      // https://tc39.es/ecma262/#sec-map.prototype.has
    	      // https://tc39.es/ecma262/#sec-set.prototype.has
    	      has: function has(key) {
    	        return !!getEntry(this, key);
    	      }
    	    });
    	    defineBuiltIns(Prototype, IS_MAP ? {
    	      // `Map.prototype.get(key)` method
    	      // https://tc39.es/ecma262/#sec-map.prototype.get
    	      get: function get(key) {
    	        var entry = getEntry(this, key);
    	        return entry && entry.value;
    	      },
    	      // `Map.prototype.set(key, value)` method
    	      // https://tc39.es/ecma262/#sec-map.prototype.set
    	      set: function set(key, value) {
    	        return define(this, key === 0 ? 0 : key, value);
    	      }
    	    } : {
    	      // `Set.prototype.add(value)` method
    	      // https://tc39.es/ecma262/#sec-set.prototype.add
    	      add: function add(value) {
    	        return define(this, value = value === 0 ? 0 : value, value);
    	      }
    	    });
    	    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
    	      configurable: true,
    	      get: function get() {
    	        return getInternalState(this).size;
    	      }
    	    });
    	    return Constructor;
    	  },
    	  setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    	    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    	    // https://tc39.es/ecma262/#sec-map.prototype.entries
    	    // https://tc39.es/ecma262/#sec-map.prototype.keys
    	    // https://tc39.es/ecma262/#sec-map.prototype.values
    	    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    	    // https://tc39.es/ecma262/#sec-set.prototype.entries
    	    // https://tc39.es/ecma262/#sec-set.prototype.keys
    	    // https://tc39.es/ecma262/#sec-set.prototype.values
    	    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    	    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
    	      setInternalState(this, {
    	        type: ITERATOR_NAME,
    	        target: iterated,
    	        state: getInternalCollectionState(iterated),
    	        kind: kind,
    	        last: null
    	      });
    	    }, function () {
    	      var state = getInternalIteratorState(this);
    	      var kind = state.kind;
    	      var entry = state.last;
    	      // revert to the last existing entry
    	      while (entry && entry.removed) entry = entry.previous;
    	      // get next entry
    	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
    	        // or finish the iteration
    	        state.target = null;
    	        return createIterResultObject(undefined, true);
    	      }
    	      // return step by kind
    	      if (kind === 'keys') return createIterResultObject(entry.key, false);
    	      if (kind === 'values') return createIterResultObject(entry.value, false);
    	      return createIterResultObject([entry.key, entry.value], false);
    	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    	    // `{ Map, Set }.prototype[@@species]` accessors
    	    // https://tc39.es/ecma262/#sec-get-map-@@species
    	    // https://tc39.es/ecma262/#sec-get-set-@@species
    	    setSpecies(CONSTRUCTOR_NAME);
    	  }
    	};
    	return collectionStrong;
    }

    var hasRequiredEs_set_constructor;

    function requireEs_set_constructor () {
    	if (hasRequiredEs_set_constructor) return es_set_constructor;
    	hasRequiredEs_set_constructor = 1;

    	var collection = require$$0$2;
    	var collectionStrong = requireCollectionStrong();

    	// `Set` constructor
    	// https://tc39.es/ecma262/#sec-set-objects
    	collection('Set', function (init) {
    	  return function Set() {
    	    return init(this, arguments.length ? arguments[0] : undefined);
    	  };
    	}, collectionStrong);
    	return es_set_constructor;
    }

    var hasRequiredEs_set;

    function requireEs_set () {
    	if (hasRequiredEs_set) return es_set;
    	hasRequiredEs_set = 1;

    	// TODO: Remove this module from `core-js@4` since it's replaced to module below
    	requireEs_set_constructor();
    	return es_set;
    }

    requireEs_set();

    var es_string_startsWith = {};

    var hasRequiredEs_string_startsWith;

    function requireEs_string_startsWith () {
    	if (hasRequiredEs_string_startsWith) return es_string_startsWith;
    	hasRequiredEs_string_startsWith = 1;

    	var $ = require$$0$a;
    	var uncurryThis = requireFunctionUncurryThisClause();
    	var getOwnPropertyDescriptor = require$$2$3.f;
    	var toLength = requireToLength();
    	var toString = requireToString();
    	var notARegExp = requireNotARegexp();
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
    	var IS_PURE = requireIsPure();
    	var stringSlice = uncurryThis(''.slice);
    	var min = Math.min;
    	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
    	// https://github.com/zloirock/core-js/pull/702
    	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
    	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    	  return descriptor && !descriptor.writable;
    	}();

    	// `String.prototype.startsWith` method
    	// https://tc39.es/ecma262/#sec-string.prototype.startswith
    	$({
    	  target: 'String',
    	  proto: true,
    	  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
    	}, {
    	  startsWith: function startsWith(searchString /* , position = 0 */) {
    	    var that = toString(requireObjectCoercible(this));
    	    notARegExp(searchString);
    	    var search = toString(searchString);
    	    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    	    return stringSlice(that, index, index + search.length) === search;
    	  }
    	});
    	return es_string_startsWith;
    }

    requireEs_string_startsWith();

    var $$5 = require('../internals/export');
    var $trim = require('../internals/string-trim').trim;
    var forcedStringTrimMethod = require('../internals/string-trim-forced');

    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    $$5({
      target: 'String',
      proto: true,
      forced: forcedStringTrimMethod('trim')
    }, {
      trim: function trim() {
        return $trim(this);
      }
    });

    var STYLE_ID = 'lme-button-style';
    var ORDER_KEY = 'lme_buttonsort';
    var HIDE_KEY = 'lme_buttonhide';
    var lastFullContainer = null;
    var lastStartInstance = null;
    var FALLBACK_TITLES = {
      'button--play': function buttonPlay() {
        return Lampa.Lang.translate('title_watch');
      },
      'button--book': function buttonBook() {
        return Lampa.Lang.translate('settings_input_links');
      },
      'button--reaction': function buttonReaction() {
        return Lampa.Lang.translate('title_reactions');
      },
      'button--subscribe': function buttonSubscribe() {
        return Lampa.Lang.translate('title_subscribe');
      },
      'button--options': function buttonOptions() {
        return Lampa.Lang.translate('more');
      },
      'view--torrent': function viewTorrent() {
        return Lampa.Lang.translate('full_torrents');
      },
      'view--trailer': function viewTrailer() {
        return Lampa.Lang.translate('full_trailers');
      }
    };
    function ensureStyles() {
      if (document.getElementById(STYLE_ID)) return;
      var style = "\n        .lme-buttons {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 10px;\n        }\n        .lme-button-hide {\n            display: none !important;\n        }\n        .lme-button-text-hidden span {\n            display: none;\n        }\n    ";
      $('head').append("<style id=\"".concat(STYLE_ID, "\">").concat(style, "</style>"));
    }
    function readArray(key) {
      var value = Lampa.Storage.get(key);
      if (Array.isArray(value)) return value.slice();
      if (typeof value === 'string') {
        try {
          var parsed = JSON.parse(value);
          return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
          return value.split(',').map(function (v) {
            return v.trim();
          }).filter(Boolean);
        }
      }
      return [];
    }
    function getFullContainer(e) {
      if (e && e.body) return e.body;
      if (e && e.link && e.link.html) return e.link.html;
      if (e && e.object && e.object.activity && typeof e.object.activity.render === 'function') return e.object.activity.render();
      return null;
    }
    function resolveActiveFullContainer() {
      var current = $('.full-start-new').first();
      if (current.length) return current;
      return null;
    }
    function getButtonId($button) {
      function findIdClass($el) {
        var className = ($el.attr('class') || '').split(/\s+/);
        return className.find(function (c) {
          return c.startsWith('button--') && c !== 'button--priority';
        }) || className.find(function (c) {
          return c.startsWith('view--');
        });
      }
      var idClass = findIdClass($button);
      if (!idClass) {
        $button.find('[class*="button--"], [class*="view--"]').each(function () {
          var found = findIdClass($(this));
          if (found && !idClass) idClass = found;
        });
      }
      if (idClass) return idClass;
      var dataId = $button.data('id') || $button.data('name') || $button.data('action') || $button.data('type') || $button.attr('data-name') || $button.attr('data-action');
      if (dataId) return "data:".concat(dataId);
      var title = $button.text().trim();
      if (title) return "text:".concat(title);
      return "html:".concat(Lampa.Utils.hash($button.clone().removeClass('focus').prop('outerHTML')));
    }
    function getButtonTitle(id, $button) {
      var label = $button.find('span').first().text().trim() || $button.text().trim();
      if (label) return label;
      var titled = $button.attr('aria-label') || $button.attr('title') || $button.data('title');
      if (titled) return titled;
      if (FALLBACK_TITLES[id]) return FALLBACK_TITLES[id]();
      return id;
    }
    function collectButtonNodes($container) {
      var results = [];
      var seen = new Set();
      function push(el) {
        if (el && !seen.has(el)) {
          seen.add(el);
          results.push(el);
        }
      }
      $container.find('.full-start__button, .full-start-new__button').each(function () {
        push(this);
      });
      $container.find('[class*="button--"], [class*="view--"]').each(function () {
        var $el = $(this);
        var closest = $el.closest('.full-start__button, .full-start-new__button, .selector, button, [role="button"]');
        push(closest.length ? closest[0] : this);
      });
      if (!results.length) {
        $container.find('.selector, button, [role="button"]').each(function () {
          var $el = $(this);
          if ($el.find('.selector').length) return;
          push(this);
        });
      }
      return $(results);
    }
    function scanButtons(fullContainer, detach, includePriority) {
      var targetContainer = fullContainer.find('.full-start-new__buttons');
      var extraContainer = fullContainer.find('.buttons--container');
      var items = [];
      var map = {};
      function makeUniqueId(id, $btn) {
        if (!map[id]) return id;
        var fingerprint = Lampa.Utils.hash($btn.clone().removeClass('focus').prop('outerHTML'));
        return "".concat(id, ":").concat(fingerprint);
      }
      function collect($buttons) {
        $buttons.each(function () {
          var $btn = $(this);
          if ($btn.hasClass('button--play')) return;
          if (!includePriority && $btn.hasClass('button--priority')) return;
          var baseId = getButtonId($btn);
          var id = baseId ? makeUniqueId(baseId, $btn) : null;
          if (!id || map[id]) return;
          map[id] = detach ? $btn.detach() : $btn;
          items.push(id);
        });
      }
      collect(collectButtonNodes(targetContainer));
      collect(collectButtonNodes(extraContainer));
      return {
        items: items,
        map: map,
        targetContainer: targetContainer,
        extraContainer: extraContainer
      };
    }
    function normalizeOrder(order, ids) {
      var result = [];
      var known = new Set(ids);
      order.forEach(function (id) {
        if (known.has(id)) result.push(id);
      });
      ids.forEach(function (id) {
        if (!result.includes(id)) result.push(id);
      });
      return result;
    }
    function applyHidden(map) {
      var hidden = new Set(readArray(HIDE_KEY));
      Object.keys(map).forEach(function (id) {
        map[id].toggleClass('lme-button-hide', hidden.has(id));
      });
    }
    function applyLayout(fullContainer) {
      if (!fullContainer || !fullContainer.length) return;
      ensureStyles();
      var priority = fullContainer.find('.full-start-new__buttons .button--priority').detach();
      fullContainer.find('.full-start-new__buttons .button--play').remove();
      var _scanButtons = scanButtons(fullContainer, true, false),
        items = _scanButtons.items,
        map = _scanButtons.map,
        targetContainer = _scanButtons.targetContainer;
      var order = normalizeOrder(readArray(ORDER_KEY), items);
      targetContainer.empty();
      if (priority.length) targetContainer.append(priority);
      order.forEach(function (id) {
        if (map[id]) targetContainer.append(map[id]);
      });
      targetContainer.toggleClass('lme-button-text-hidden', Lampa.Storage.get('lme_showbuttonwn') == true);
      targetContainer.addClass('lme-buttons');
      applyHidden(map);
      Lampa.Controller.toggle("full_start");
      if (lastStartInstance && lastStartInstance.html && fullContainer[0] === lastStartInstance.html[0]) {
        var firstButton = targetContainer.find('.full-start__button.selector').not('.hide').not('.lme-button-hide').first();
        if (firstButton.length) lastStartInstance.last = firstButton[0];
      }
    }
    function openEditor(fullContainer) {
      if (!fullContainer || !fullContainer.length) return;
      var _scanButtons2 = scanButtons(fullContainer, false, true),
        items = _scanButtons2.items,
        map = _scanButtons2.map;
      var order = normalizeOrder(readArray(ORDER_KEY), items);
      var hidden = new Set(readArray(HIDE_KEY));
      var list = $('<div class="menu-edit-list"></div>');
      order.forEach(function (id) {
        var $btn = map[id];
        if (!$btn || !$btn.length) return;
        var title = getButtonTitle(id, $btn);
        var icon = $btn.find('svg').first().prop('outerHTML') || '';
        var item = $("<div class=\"menu-edit-list__item\" data-id=\"".concat(id, "\">\n            <div class=\"menu-edit-list__icon\"></div>\n            <div class=\"menu-edit-list__title\">").concat(title, "</div>\n            <div class=\"menu-edit-list__move move-up selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 12L11 3L20 12\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__move move-down selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 2L11 11L20 2\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__toggle toggle selector\">\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"1.89111\" y=\"1.78369\" width=\"21.793\" height=\"21.793\" rx=\"3.5\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M7.44873 12.9658L10.8179 16.3349L18.1269 9.02588\" stroke=\"currentColor\" stroke-width=\"3\" class=\"dot\" opacity=\"0\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n        </div>"));
        if (icon) item.find('.menu-edit-list__icon').append(icon);
        item.toggleClass('lme-button-hidden', hidden.has(id));
        item.find('.dot').attr('opacity', hidden.has(id) ? 0 : 1);
        item.find('.move-up').on('hover:enter', function () {
          var prev = item.prev();
          if (prev.length) item.insertBefore(prev);
        });
        item.find('.move-down').on('hover:enter', function () {
          var next = item.next();
          if (next.length) item.insertAfter(next);
        });
        item.find('.toggle').on('hover:enter', function () {
          item.toggleClass('lme-button-hidden');
          item.find('.dot').attr('opacity', item.hasClass('lme-button-hidden') ? 0 : 1);
        });
        list.append(item);
      });
      Lampa.Modal.open({
        title: 'Edit buttons',
        html: list,
        size: 'small',
        scroll_to_center: true,
        onBack: function onBack() {
          var newOrder = [];
          var newHidden = [];
          list.find('.menu-edit-list__item').each(function () {
            var id = $(this).data('id');
            if (!id) return;
            newOrder.push(id);
            if ($(this).hasClass('lme-button-hidden')) newHidden.push(id);
          });
          Lampa.Storage.set(ORDER_KEY, newOrder);
          Lampa.Storage.set(HIDE_KEY, newHidden);
          Lampa.Modal.close();
          applyLayout(fullContainer);
        }
      });
    }
    function openEditorFromSettings() {
      if (!lastFullContainer || !lastFullContainer.length || !document.body.contains(lastFullContainer[0])) {
        var current = resolveActiveFullContainer();
        if (current) {
          lastFullContainer = current;
        }
      }
      if (!lastFullContainer || !lastFullContainer.length || !document.body.contains(lastFullContainer[0])) {
        Lampa.Modal.open({
          title: Lampa.Lang.translate('title_error'),
          html: Lampa.Template.get('error', {
            title: Lampa.Lang.translate('title_error'),
            text: 'Open a movie card to edit buttons'
          }),
          size: 'small',
          scroll_to_center: true,
          onBack: function onBack() {
            Lampa.Modal.close();
          }
        });
        return;
      }
      openEditor(lastFullContainer);
    }
    function main$7() {
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'build' && e.name === 'start' && e.item && e.item.html) {
          lastStartInstance = e.item;
        }
        if (e.type === 'complite') {
          var fullContainer = getFullContainer(e);
          if (!fullContainer) return;
          lastFullContainer = fullContainer;
          setTimeout(function () {
            applyLayout(fullContainer);
          }, 0);
        }
      });
    }
    var showButton = {
      main: main$7,
      openEditorFromSettings: openEditorFromSettings
    };

    var UKRAINIAN_THANKS_URL = "https://lampame.donatik.me/";
    var DEFAULT_THANKS_URL = "https://t.me/tribute/app?startapp=d5WS";
    function getCurrentLanguage() {
      return String(Lampa.Storage.get("language", "ru") || "ru").toLowerCase();
    }
    function getThanksUrlByLanguage() {
      return getCurrentLanguage() === "uk" ? UKRAINIAN_THANKS_URL : DEFAULT_THANKS_URL;
    }
    function openThanksModal() {
      var thanksUrl = getThanksUrlByLanguage();
      var html = Lampa.Template.get("modal_qr", {
        title: Lampa.Lang.translate("lme_settings_thanks"),
        text: Lampa.Lang.translate("lme_settings_thanks_description"),
        qr_text: "<a href=\"".concat(thanksUrl, "\">").concat(thanksUrl, "</a>")
      });
      var qrElement = html.find(".account-modal-split__qr-code");
      var enabledController = Lampa.Controller.enabled().name;
      Lampa.Utils.qrcode(thanksUrl, qrElement, function (error) {
        console.error("LME", "Unable to generate thanks QR code", error);
        qrElement.text(thanksUrl);
      });
      Lampa.Modal.open({
        title: "",
        html: html,
        size: "medium",
        onBack: function onBack() {
          Lampa.Modal.close();
          Lampa.Controller.toggle(enabledController);
        }
      });
    }

    function main$6() {
      Lampa.SettingsApi.addComponent({
        component: "lme",
        name: Lampa.Lang.translate('lme_title'),
        icon: '<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 431.661 431.661" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffffff;" d="M180.355,213.668l40.079,40.085L42.526,431.661L2.446,391.576L180.355,213.668z M228.877,245.316 l-40.079-40.085l68.905-68.911l40.091,40.079L228.877,245.316z"></path> <polygon style="fill:#ffffff;" points="380.066,218.525 391.999,218.519 391.999,181.309 429.215,181.309 429.215,169.376 391.999,169.376 391.999,132.166 380.066,132.166 380.066,169.376 342.862,169.376 342.862,181.309 380.066,181.309 "></polygon> <polygon style="fill:#ffffff;" points="393.282,260.424 393.282,248.49 356.073,248.49 356.073,211.281 344.145,211.281 344.145,248.49 306.93,248.49 306.93,260.424 344.145,260.424 344.145,297.633 356.073,297.633 356.073,260.424 "></polygon> <polygon style="fill:#ffffff;" points="302.956,37.209 265.741,37.209 265.741,0 253.807,0 253.807,37.209 216.603,37.209 216.603,49.143 253.807,49.143 253.807,86.353 265.741,86.353 265.741,49.143 302.956,49.143 "></polygon> <polygon style="fill:#ffffff;" points="223.853,73.148 186.638,73.148 186.638,35.932 174.71,35.932 174.71,73.148 137.495,73.148 137.495,85.076 174.71,85.076 174.71,122.291 186.638,122.291 186.638,85.076 223.853,85.076 "></polygon> </g> </g></svg>'
      });
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_thanks",
          type: "button"
        },
        field: {
          name: Lampa.Lang.translate("lme_settings_thanks"),
          description: Lampa.Lang.translate("lme_settings_thanks_description")
        },
        onChange: function onChange() {
          openThanksModal();
        }
      });
      //Quality Watchmode
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_wmquality",
          type: "input",
          placeholder: '',
          values: ''
        },
        field: {
          name: Lampa.Lang.translate('lme_wmquality_name'),
          description: Lampa.Lang.translate('lme_wmquality_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('lme_quality', false);
          Lampa.Settings.update();
        }
      });
      //English data
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_endata",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_endata_name'),
          description: Lampa.Lang.translate('lme_EngData_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //TV Show time
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_averageRuntime",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_averageRuntime_name'),
          description: Lampa.Lang.translate('lme_averageRuntime_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Streaming Discovery Ratings
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_streamingdiscovery",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_streamingdiscovery_name'),
          description: Lampa.Lang.translate('lme_streamingdiscovery_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Additional rating
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_ratings",
          type: "input",
          placeholder: '',
          values: ''
        },
        field: {
          name: Lampa.Lang.translate('lme_ratings_name'),
          description: Lampa.Lang.translate('lme_ratings_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Button in one line
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_showbutton",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_showbutton_name'),
          description: Lampa.Lang.translate('lme_showbutton_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      if (Lampa.Storage.get('lme_showbutton') == true) {
        Lampa.SettingsApi.addParam({
          component: "lme",
          param: {
            name: "lme_showbuttonwn",
            type: "trigger",
            default: false
          },
          field: {
            name: Lampa.Lang.translate('lme_showbuttonwn_name'),
            description: Lampa.Lang.translate('lme_showbuttonwn_desc')
          },
          onChange: function onChange(value) {
            Lampa.Settings.update();
          }
        });
        Lampa.SettingsApi.addParam({
          component: "lme",
          param: {
            name: "lme_button_editor",
            type: "button"
          },
          field: {
            name: Lampa.Lang.translate('lme_button_editor_name'),
            description: Lampa.Lang.translate('lme_button_editor_desc')
          },
          onChange: function onChange() {
            showButton.openEditorFromSettings();
          }
        });
      }
      //Switch Source
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_switchsource",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_switchsource_name'),
          description: Lampa.Lang.translate('lme_switchsource_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Switch Source additional
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_switchsource_modss",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_switchsource_modss_name'),
          description: Lampa.Lang.translate('lme_switchsource_modss_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //Switch Source additional №2
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_switchsource_lmenc",
          type: "trigger",
          default: false
        },
        field: {
          name: Lampa.Lang.translate('lme_switchsource_lmenc_name'),
          description: Lampa.Lang.translate('lme_switchsource_lmenc_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
    }
    var CONFIG = {
      main: main$6
    };

    var $$4 = require('../internals/export');
    var uncurryThis$1 = require('../internals/function-uncurry-this');
    var aCallable$2 = require('../internals/a-callable');
    var toObject = require('../internals/to-object');
    var lengthOfArrayLike = require('../internals/length-of-array-like');
    var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
    var toString = require('../internals/to-string');
    var fails$2 = require('../internals/fails');
    var internalSort = require('../internals/array-sort');
    var arrayMethodIsStrict = require('../internals/array-method-is-strict');
    var FF = require('../internals/environment-ff-version');
    var IE_OR_EDGE = require('../internals/environment-is-ie-or-edge');
    var V8 = require('../internals/environment-v8-version');
    var WEBKIT = require('../internals/environment-webkit-version');
    var test = [];
    var nativeSort = uncurryThis$1(test.sort);
    var push = uncurryThis$1(test.push);

    // IE8-
    var FAILS_ON_UNDEFINED = fails$2(function () {
      test.sort(undefined);
    });
    // V8 bug
    var FAILS_ON_NULL = fails$2(function () {
      test.sort(null);
    });
    // Old WebKit
    var STRICT_METHOD = arrayMethodIsStrict('sort');
    var STABLE_SORT = !fails$2(function () {
      // feature detection can be too slow, so check engines versions
      if (V8) return V8 < 70;
      if (FF && FF > 3) return;
      if (IE_OR_EDGE) return true;
      if (WEBKIT) return WEBKIT < 603;
      var result = '';
      var code, chr, value, index;

      // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
      for (code = 65; code < 76; code++) {
        chr = String.fromCharCode(code);
        switch (code) {
          case 66:
          case 69:
          case 70:
          case 72:
            value = 3;
            break;
          case 68:
          case 71:
            value = 4;
            break;
          default:
            value = 2;
        }
        for (index = 0; index < 47; index++) {
          test.push({
            k: chr + index,
            v: value
          });
        }
      }
      test.sort(function (a, b) {
        return b.v - a.v;
      });
      for (index = 0; index < test.length; index++) {
        chr = test[index].k.charAt(0);
        if (result.charAt(result.length - 1) !== chr) result += chr;
      }
      return result !== 'DGBEFHACIJK';
    });
    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
    var getSortCompare = function getSortCompare(comparefn) {
      return function (x, y) {
        if (y === undefined) return -1;
        if (x === undefined) return 1;
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        var xString = toString(x);
        var yString = toString(y);
        return xString === yString ? 0 : xString > yString ? 1 : -1;
      };
    };

    // `Array.prototype.sort` method
    // https://tc39.es/ecma262/#sec-array.prototype.sort
    $$4({
      target: 'Array',
      proto: true,
      forced: FORCED
    }, {
      sort: function sort(comparefn) {
        if (comparefn !== undefined) aCallable$2(comparefn);
        var array = toObject(this);
        if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
        var items = [];
        var arrayLength = lengthOfArrayLike(array);
        var itemsLength, index;
        for (index = 0; index < arrayLength; index++) {
          if (index in array) push(items, array[index]);
        }
        internalSort(items, getSortCompare(comparefn));
        itemsLength = lengthOfArrayLike(items);
        index = 0;
        while (index < itemsLength) array[index] = items[index++];
        while (index < arrayLength) deletePropertyOrThrow(array, index++);
        return array;
      }
    });

    var es_promise = {};

    var es_promise_constructor = {};

    var globalThis$3 = require('../internals/global-this');
    var userAgent$4 = require('../internals/environment-user-agent');
    var classof = require('../internals/classof-raw');
    var userAgentStartsWith = function userAgentStartsWith(string) {
      return userAgent$4.slice(0, string.length) === string;
    };
    module.exports = function () {
      if (userAgentStartsWith('Bun/')) return 'BUN';
      if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
      if (userAgentStartsWith('Deno/')) return 'DENO';
      if (userAgentStartsWith('Node.js/')) return 'NODE';
      if (globalThis$3.Bun && typeof Bun.version == 'string') return 'BUN';
      if (globalThis$3.Deno && _typeof(Deno.version) == 'object') return 'DENO';
      if (classof(globalThis$3.process) === 'process') return 'NODE';
      if (globalThis$3.window && globalThis$3.document) return 'BROWSER';
      return 'REST';
    }();

    var environment = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(environment);

    var environmentIsNode;
    var hasRequiredEnvironmentIsNode;

    function requireEnvironmentIsNode () {
    	if (hasRequiredEnvironmentIsNode) return environmentIsNode;
    	hasRequiredEnvironmentIsNode = 1;

    	var ENVIRONMENT = require$$0$1;
    	environmentIsNode = ENVIRONMENT === 'NODE';
    	return environmentIsNode;
    }

    var functionCall;
    var hasRequiredFunctionCall;

    function requireFunctionCall () {
    	if (hasRequiredFunctionCall) return functionCall;
    	hasRequiredFunctionCall = 1;

    	var NATIVE_BIND = requireFunctionBindNative();
    	var call = Function.prototype.call;
    	// eslint-disable-next-line es/no-function-prototype-bind -- safe
    	functionCall = NATIVE_BIND ? call.bind(call) : function () {
    	  return call.apply(call, arguments);
    	};
    	return functionCall;
    }

    var uncurryThis = require('../internals/function-uncurry-this');
    var aCallable$1 = require('../internals/a-callable');
    module.exports = function (object, key, method) {
      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return uncurryThis(aCallable$1(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {/* empty */}
    };

    var functionUncurryThisAccessor = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$0 = /*@__PURE__*/getAugmentedNamespace(functionUncurryThisAccessor);

    var isPossiblePrototype;
    var hasRequiredIsPossiblePrototype;

    function requireIsPossiblePrototype () {
    	if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
    	hasRequiredIsPossiblePrototype = 1;

    	var isObject = require$$1$3;
    	isPossiblePrototype = function (argument) {
    	  return isObject(argument) || argument === null;
    	};
    	return isPossiblePrototype;
    }

    var aPossiblePrototype;
    var hasRequiredAPossiblePrototype;

    function requireAPossiblePrototype () {
    	if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
    	hasRequiredAPossiblePrototype = 1;

    	var isPossiblePrototype = requireIsPossiblePrototype();
    	var $String = String;
    	var $TypeError = TypeError;
    	aPossiblePrototype = function (argument) {
    	  if (isPossiblePrototype(argument)) return argument;
    	  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
    	};
    	return aPossiblePrototype;
    }

    var objectSetPrototypeOf;
    var hasRequiredObjectSetPrototypeOf;

    function requireObjectSetPrototypeOf () {
    	if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
    	hasRequiredObjectSetPrototypeOf = 1;

    	/* eslint-disable no-proto -- safe */
    	var uncurryThisAccessor = require$$0;
    	var isObject = require$$1$3;
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var aPossiblePrototype = requireAPossiblePrototype();

    	// `Object.setPrototypeOf` method
    	// https://tc39.es/ecma262/#sec-object.setprototypeof
    	// Works with __proto__ only. Old v8 can't work with null proto objects.
    	// eslint-disable-next-line es/no-object-setprototypeof -- safe
    	objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    	  var CORRECT_SETTER = false;
    	  var test = {};
    	  var setter;
    	  try {
    	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    	    setter(test, []);
    	    CORRECT_SETTER = test instanceof Array;
    	  } catch (error) {/* empty */}
    	  return function setPrototypeOf(O, proto) {
    	    requireObjectCoercible(O);
    	    aPossiblePrototype(proto);
    	    if (!isObject(O)) return O;
    	    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    	    return O;
    	  };
    	}() : undefined);
    	return objectSetPrototypeOf;
    }

    var setToStringTag;
    var hasRequiredSetToStringTag;

    function requireSetToStringTag () {
    	if (hasRequiredSetToStringTag) return setToStringTag;
    	hasRequiredSetToStringTag = 1;

    	var defineProperty = require$$0$7.f;
    	var hasOwn = requireHasOwnProperty();
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    	setToStringTag = function (target, TAG, STATIC) {
    	  if (target && !STATIC) target = target.prototype;
    	  if (target && !hasOwn(target, TO_STRING_TAG)) {
    	    defineProperty(target, TO_STRING_TAG, {
    	      configurable: true,
    	      value: TAG
    	    });
    	  }
    	};
    	return setToStringTag;
    }

    var aConstructor;
    var hasRequiredAConstructor;

    function requireAConstructor () {
    	if (hasRequiredAConstructor) return aConstructor;
    	hasRequiredAConstructor = 1;

    	var isConstructor = require$$0$3;
    	var tryToString = requireTryToString();
    	var $TypeError = TypeError;

    	// `Assert: IsConstructor(argument) is true`
    	aConstructor = function (argument) {
    	  if (isConstructor(argument)) return argument;
    	  throw new $TypeError(tryToString(argument) + ' is not a constructor');
    	};
    	return aConstructor;
    }

    var speciesConstructor$1;
    var hasRequiredSpeciesConstructor;

    function requireSpeciesConstructor () {
    	if (hasRequiredSpeciesConstructor) return speciesConstructor$1;
    	hasRequiredSpeciesConstructor = 1;

    	var anObject = requireAnObject();
    	var aConstructor = requireAConstructor();
    	var isNullOrUndefined = requireIsNullOrUndefined();
    	var wellKnownSymbol = requireWellKnownSymbol();
    	var SPECIES = wellKnownSymbol('species');

    	// `SpeciesConstructor` abstract operation
    	// https://tc39.es/ecma262/#sec-speciesconstructor
    	speciesConstructor$1 = function (O, defaultConstructor) {
    	  var C = anObject(O).constructor;
    	  var S;
    	  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
    	};
    	return speciesConstructor$1;
    }

    var $$3 = require('../internals/export');
    var functionApply$1 = require('../internals/function-apply');
    var aCallable = require('../internals/a-callable');
    var anObject = require('../internals/an-object');
    var fails$1 = require('../internals/fails');

    // MS Edge argumentsList argument is optional
    var OPTIONAL_ARGUMENTS_LIST = !fails$1(function () {
      // eslint-disable-next-line es/no-reflect -- required for testing
      Reflect.apply(function () {/* empty */});
    });

    // `Reflect.apply` method
    // https://tc39.es/ecma262/#sec-reflect.apply
    $$3({
      target: 'Reflect',
      stat: true,
      forced: OPTIONAL_ARGUMENTS_LIST
    }, {
      apply: function apply(target, thisArgument, argumentsList) {
        return functionApply$1(aCallable(target), thisArgument, anObject(argumentsList));
      }
    });

    var NATIVE_BIND = require('../internals/function-bind-native');
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;

    // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
    module.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
      return call.apply(apply, arguments);
    });

    var functionApply = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(functionApply);

    var validateArgumentsLength;
    var hasRequiredValidateArgumentsLength;

    function requireValidateArgumentsLength () {
    	if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
    	hasRequiredValidateArgumentsLength = 1;

    	var $TypeError = TypeError;
    	validateArgumentsLength = function (passed, required) {
    	  if (passed < required) throw new $TypeError('Not enough arguments');
    	  return passed;
    	};
    	return validateArgumentsLength;
    }

    var userAgent$3 = require('../internals/environment-user-agent');
    module.exports = /ipad|iphone|ipod/i.test(userAgent$3) && /applewebkit/i.test(userAgent$3);

    var environmentIsIos = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$5 = /*@__PURE__*/getAugmentedNamespace(environmentIsIos);

    var task;
    var hasRequiredTask;

    function requireTask () {
    	if (hasRequiredTask) return task;
    	hasRequiredTask = 1;

    	var globalThis = require$$3$2;
    	var apply = require$$1$2;
    	var bind = requireFunctionBindContext();
    	var isCallable = require$$5$5;
    	var hasOwn = requireHasOwnProperty();
    	var fails = requireFails();
    	var html = requireHtml();
    	var arraySlice = require$$7$1;
    	var createElement = requireDocumentCreateElement();
    	var validateArgumentsLength = requireValidateArgumentsLength();
    	var IS_IOS = require$$5;
    	var IS_NODE = requireEnvironmentIsNode();
    	var set = globalThis.setImmediate;
    	var clear = globalThis.clearImmediate;
    	var process = globalThis.process;
    	var Dispatch = globalThis.Dispatch;
    	var Function = globalThis.Function;
    	var MessageChannel = globalThis.MessageChannel;
    	var String = globalThis.String;
    	var counter = 0;
    	var queue = {};
    	var ONREADYSTATECHANGE = 'onreadystatechange';
    	var $location, defer, channel, port;
    	fails(function () {
    	  // Deno throws a ReferenceError on `location` access without `--location` flag
    	  $location = globalThis.location;
    	});
    	var run = function run(id) {
    	  if (hasOwn(queue, id)) {
    	    var fn = queue[id];
    	    delete queue[id];
    	    fn();
    	  }
    	};
    	var runner = function runner(id) {
    	  return function () {
    	    run(id);
    	  };
    	};
    	var eventListener = function eventListener(event) {
    	  run(event.data);
    	};
    	var globalPostMessageDefer = function globalPostMessageDefer(id) {
    	  // old engines have not location.origin
    	  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
    	};

    	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    	if (!set || !clear) {
    	  set = function setImmediate(handler) {
    	    validateArgumentsLength(arguments.length, 1);
    	    var fn = isCallable(handler) ? handler : Function(handler);
    	    var args = arraySlice(arguments, 1);
    	    queue[++counter] = function () {
    	      apply(fn, undefined, args);
    	    };
    	    defer(counter);
    	    return counter;
    	  };
    	  clear = function clearImmediate(id) {
    	    delete queue[id];
    	  };
    	  // Node.js 0.8-
    	  if (IS_NODE) {
    	    defer = function defer(id) {
    	      process.nextTick(runner(id));
    	    };
    	    // Sphere (JS game engine) Dispatch API
    	  } else if (Dispatch && Dispatch.now) {
    	    defer = function defer(id) {
    	      Dispatch.now(runner(id));
    	    };
    	    // Browsers with MessageChannel, includes WebWorkers
    	    // except iOS - https://github.com/zloirock/core-js/issues/624
    	  } else if (MessageChannel && !IS_IOS) {
    	    channel = new MessageChannel();
    	    port = channel.port2;
    	    channel.port1.onmessage = eventListener;
    	    defer = bind(port.postMessage, port);
    	    // Browsers with postMessage, skip WebWorkers
    	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    	  } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
    	    defer = globalPostMessageDefer;
    	    globalThis.addEventListener('message', eventListener, false);
    	    // IE8-
    	  } else if (ONREADYSTATECHANGE in createElement('script')) {
    	    defer = function defer(id) {
    	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
    	        html.removeChild(this);
    	        run(id);
    	      };
    	    };
    	    // Rest old browsers
    	  } else {
    	    defer = function defer(id) {
    	      setTimeout(runner(id), 0);
    	    };
    	  }
    	}
    	task = {
    	  set: set,
    	  clear: clear
    	};
    	return task;
    }

    var globalThis$2 = require('../internals/global-this');
    var DESCRIPTORS = require('../internals/descriptors');

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // Avoid NodeJS experimental warning
    module.exports = function (name) {
      if (!DESCRIPTORS) return globalThis$2[name];
      var descriptor = getOwnPropertyDescriptor(globalThis$2, name);
      return descriptor && descriptor.value;
    };

    var safeGetBuiltIn = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(safeGetBuiltIn);

    var queue;
    var hasRequiredQueue;

    function requireQueue () {
    	if (hasRequiredQueue) return queue;
    	hasRequiredQueue = 1;

    	var Queue = function Queue() {
    	  this.head = null;
    	  this.tail = null;
    	};
    	Queue.prototype = {
    	  add: function add(item) {
    	    var entry = {
    	      item: item,
    	      next: null
    	    };
    	    var tail = this.tail;
    	    if (tail) tail.next = entry;else this.head = entry;
    	    this.tail = entry;
    	  },
    	  get: function get() {
    	    var entry = this.head;
    	    if (entry) {
    	      var next = this.head = entry.next;
    	      if (next === null) this.tail = null;
    	      return entry.item;
    	    }
    	  }
    	};
    	queue = Queue;
    	return queue;
    }

    var userAgent$2 = require('../internals/environment-user-agent');
    module.exports = /ipad|iphone|ipod/i.test(userAgent$2) && typeof Pebble != 'undefined';

    var environmentIsIosPebble = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$6 = /*@__PURE__*/getAugmentedNamespace(environmentIsIosPebble);

    var userAgent$1 = require('../internals/environment-user-agent');
    module.exports = /web0s(?!.*chrome)/i.test(userAgent$1);

    var environmentIsWebosWebkit = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$7 = /*@__PURE__*/getAugmentedNamespace(environmentIsWebosWebkit);

    var microtask_1;
    var hasRequiredMicrotask;

    function requireMicrotask () {
    	if (hasRequiredMicrotask) return microtask_1;
    	hasRequiredMicrotask = 1;

    	var globalThis = require$$3$2;
    	var safeGetBuiltIn = require$$1$1;
    	var bind = requireFunctionBindContext();
    	var macrotask = requireTask().set;
    	var Queue = requireQueue();
    	var IS_IOS = require$$5;
    	var IS_IOS_PEBBLE = require$$6;
    	var IS_WEBOS_WEBKIT = require$$7;
    	var IS_NODE = requireEnvironmentIsNode();
    	var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
    	var document = globalThis.document;
    	var process = globalThis.process;
    	var Promise = globalThis.Promise;
    	var microtask = safeGetBuiltIn('queueMicrotask');
    	var notify, toggle, node, promise, then;

    	// modern engines have queueMicrotask method
    	if (!microtask) {
    	  var queue = new Queue();
    	  var flush = function flush() {
    	    var parent, fn;
    	    if (IS_NODE && (parent = process.domain)) parent.exit();
    	    while (fn = queue.get()) try {
    	      fn();
    	    } catch (error) {
    	      if (queue.head) notify();
    	      throw error;
    	    }
    	    if (parent) parent.enter();
    	  };

    	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    	  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    	    toggle = true;
    	    node = document.createTextNode('');
    	    new MutationObserver(flush).observe(node, {
    	      characterData: true
    	    });
    	    notify = function notify() {
    	      node.data = toggle = !toggle;
    	    };
    	    // environments with maybe non-completely correct, but existent Promise
    	  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    	    // Promise.resolve without an argument throws an error in LG WebOS 2
    	    promise = Promise.resolve(undefined);
    	    // workaround of WebKit ~ iOS Safari 10.1 bug
    	    promise.constructor = Promise;
    	    then = bind(promise.then, promise);
    	    notify = function notify() {
    	      then(flush);
    	    };
    	    // Node.js without promises
    	  } else if (IS_NODE) {
    	    notify = function notify() {
    	      process.nextTick(flush);
    	    };
    	    // for other environments - macrotask based on:
    	    // - setImmediate
    	    // - MessageChannel
    	    // - window.postMessage
    	    // - onreadystatechange
    	    // - setTimeout
    	  } else {
    	    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    	    macrotask = bind(macrotask, globalThis);
    	    notify = function notify() {
    	      macrotask(flush);
    	    };
    	  }
    	  microtask = function microtask(fn) {
    	    if (!queue.head) notify();
    	    queue.add(fn);
    	  };
    	}
    	microtask_1 = microtask;
    	return microtask_1;
    }

    var hostReportErrors;
    var hasRequiredHostReportErrors;

    function requireHostReportErrors () {
    	if (hasRequiredHostReportErrors) return hostReportErrors;
    	hasRequiredHostReportErrors = 1;

    	hostReportErrors = function (a, b) {
    	  try {
    	    // eslint-disable-next-line no-console -- safe
    	    arguments.length === 1 ? console.error(a) : console.error(a, b);
    	  } catch (error) {/* empty */}
    	};
    	return hostReportErrors;
    }

    var perform;
    var hasRequiredPerform;

    function requirePerform () {
    	if (hasRequiredPerform) return perform;
    	hasRequiredPerform = 1;

    	perform = function (exec) {
    	  try {
    	    return {
    	      error: false,
    	      value: exec()
    	    };
    	  } catch (error) {
    	    return {
    	      error: true,
    	      value: error
    	    };
    	  }
    	};
    	return perform;
    }

    var promiseNativeConstructor;
    var hasRequiredPromiseNativeConstructor;

    function requirePromiseNativeConstructor () {
    	if (hasRequiredPromiseNativeConstructor) return promiseNativeConstructor;
    	hasRequiredPromiseNativeConstructor = 1;

    	var globalThis = require$$3$2;
    	promiseNativeConstructor = globalThis.Promise;
    	return promiseNativeConstructor;
    }

    var $$2 = require('../internals/export');
    var IS_PURE$1 = require('../internals/is-pure');
    var NativePromiseConstructor$1 = require('../internals/promise-native-constructor');
    var fails = require('../internals/fails');
    var getBuiltIn = require('../internals/get-built-in');
    var isCallable$1 = require('../internals/is-callable');
    var speciesConstructor = require('../internals/species-constructor');
    var promiseResolve$1 = require('../internals/promise-resolve');
    var defineBuiltIn = require('../internals/define-built-in');
    var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

    // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
    var NON_GENERIC = !!NativePromiseConstructor$1 && fails(function () {
      // eslint-disable-next-line unicorn/no-thenable -- required for testing
      NativePromisePrototype$1['finally'].call({
        then: function then() {/* empty */}
      }, function () {/* empty */});
    });

    // `Promise.prototype.finally` method
    // https://tc39.es/ecma262/#sec-promise.prototype.finally
    $$2({
      target: 'Promise',
      proto: true,
      real: true,
      forced: NON_GENERIC
    }, {
      'finally': function _finally(onFinally) {
        var C = speciesConstructor(this, getBuiltIn('Promise'));
        var isFunction = isCallable$1(onFinally);
        return this.then(isFunction ? function (x) {
          return promiseResolve$1(C, onFinally()).then(function () {
            return x;
          });
        } : onFinally, isFunction ? function (e) {
          return promiseResolve$1(C, onFinally()).then(function () {
            throw e;
          });
        } : onFinally);
      }
    });

    // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
    if (!IS_PURE$1 && isCallable$1(NativePromiseConstructor$1)) {
      var method = getBuiltIn('Promise').prototype['finally'];
      if (NativePromisePrototype$1['finally'] !== method) {
        defineBuiltIn(NativePromisePrototype$1, 'finally', method, {
          unsafe: true
        });
      }
    }

    var globalThis$1 = require('../internals/global-this');
    var NativePromiseConstructor = require('../internals/promise-native-constructor');
    var isCallable = require('../internals/is-callable');
    var isForced = require('../internals/is-forced');
    var inspectSource = require('../internals/inspect-source');
    var wellKnownSymbol$1 = require('../internals/well-known-symbol');
    var ENVIRONMENT = require('../internals/environment');
    var IS_PURE = require('../internals/is-pure');
    var V8_VERSION = require('../internals/environment-v8-version');
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var SPECIES = wellKnownSymbol$1('species');
    var SUBCLASSING = false;
    var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis$1.PromiseRejectionEvent);
    var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
      var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
      var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
      // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // We can't detect it synchronously, so just check versions
      if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
      // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
      if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
      // We can't use @@species feature detection in V8 since it causes
      // deoptimization and performance degradation
      // https://github.com/zloirock/core-js/issues/679
      if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        // Detect correctness of subclassing with @@species support
        var promise = new NativePromiseConstructor(function (resolve) {
          resolve(1);
        });
        var FakePromise = function FakePromise(exec) {
          exec(function () {/* empty */}, function () {/* empty */});
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function () {/* empty */}) instanceof FakePromise;
        if (!SUBCLASSING) return true;
        // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      }
      return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
    });
    module.exports = {
      CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
      REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
      SUBCLASSING: SUBCLASSING
    };

    var promiseConstructorDetection = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$4 = /*@__PURE__*/getAugmentedNamespace(promiseConstructorDetection);

    var newPromiseCapability = {};

    var hasRequiredNewPromiseCapability;

    function requireNewPromiseCapability () {
    	if (hasRequiredNewPromiseCapability) return newPromiseCapability;
    	hasRequiredNewPromiseCapability = 1;

    	var aCallable = requireACallable();
    	var $TypeError = TypeError;
    	var PromiseCapability = function PromiseCapability(C) {
    	  var resolve, reject;
    	  this.promise = new C(function ($$resolve, $$reject) {
    	    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    	    resolve = $$resolve;
    	    reject = $$reject;
    	  });
    	  this.resolve = aCallable(resolve);
    	  this.reject = aCallable(reject);
    	};

    	// `NewPromiseCapability` abstract operation
    	// https://tc39.es/ecma262/#sec-newpromisecapability
    	newPromiseCapability.f = function (C) {
    	  return new PromiseCapability(C);
    	};
    	return newPromiseCapability;
    }

    var hasRequiredEs_promise_constructor;

    function requireEs_promise_constructor () {
    	if (hasRequiredEs_promise_constructor) return es_promise_constructor;
    	hasRequiredEs_promise_constructor = 1;

    	var $ = require$$0$a;
    	var IS_PURE = requireIsPure();
    	var IS_NODE = requireEnvironmentIsNode();
    	var globalThis = require$$3$2;
    	var path = requirePath();
    	var call = requireFunctionCall();
    	var defineBuiltIn = requireDefineBuiltIn();
    	var setPrototypeOf = requireObjectSetPrototypeOf();
    	var setToStringTag = requireSetToStringTag();
    	var setSpecies = requireSetSpecies();
    	var aCallable = requireACallable();
    	var isCallable = require$$5$5;
    	var isObject = require$$1$3;
    	var anInstance = requireAnInstance();
    	var speciesConstructor = requireSpeciesConstructor();
    	var task = requireTask().set;
    	var microtask = requireMicrotask();
    	var hostReportErrors = requireHostReportErrors();
    	var perform = requirePerform();
    	var Queue = requireQueue();
    	var InternalStateModule = requireInternalState();
    	var NativePromiseConstructor = requirePromiseNativeConstructor();
    	var PromiseConstructorDetection = require$$4;
    	var newPromiseCapabilityModule = requireNewPromiseCapability();
    	var PROMISE = 'Promise';
    	var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
    	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
    	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
    	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
    	var setInternalState = InternalStateModule.set;
    	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    	var PromiseConstructor = NativePromiseConstructor;
    	var PromisePrototype = NativePromisePrototype;
    	var TypeError = globalThis.TypeError;
    	var document = globalThis.document;
    	var process = globalThis.process;
    	var newPromiseCapability = newPromiseCapabilityModule.f;
    	var newGenericPromiseCapability = newPromiseCapability;
    	var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
    	var UNHANDLED_REJECTION = 'unhandledrejection';
    	var REJECTION_HANDLED = 'rejectionhandled';
    	var PENDING = 0;
    	var FULFILLED = 1;
    	var REJECTED = 2;
    	var HANDLED = 1;
    	var UNHANDLED = 2;
    	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

    	// helpers
    	var isThenable = function isThenable(it) {
    	  var then;
    	  return isObject(it) && isCallable(then = it.then) ? then : false;
    	};
    	var callReaction = function callReaction(reaction, state) {
    	  var value = state.value;
    	  var ok = state.state === FULFILLED;
    	  var handler = ok ? reaction.ok : reaction.fail;
    	  var resolve = reaction.resolve;
    	  var reject = reaction.reject;
    	  var domain = reaction.domain;
    	  var result, then, exited;
    	  try {
    	    if (handler) {
    	      if (!ok) {
    	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
    	        state.rejection = HANDLED;
    	      }
    	      if (handler === true) result = value;else {
    	        if (domain) domain.enter();
    	        result = handler(value); // can throw
    	        if (domain) {
    	          domain.exit();
    	          exited = true;
    	        }
    	      }
    	      if (result === reaction.promise) {
    	        reject(new TypeError('Promise-chain cycle'));
    	      } else if (then = isThenable(result)) {
    	        call(then, result, resolve, reject);
    	      } else resolve(result);
    	    } else reject(value);
    	  } catch (error) {
    	    if (domain && !exited) domain.exit();
    	    reject(error);
    	  }
    	};
    	var notify = function notify(state, isReject) {
    	  if (state.notified) return;
    	  state.notified = true;
    	  microtask(function () {
    	    var reactions = state.reactions;
    	    var reaction;
    	    while (reaction = reactions.get()) {
    	      callReaction(reaction, state);
    	    }
    	    state.notified = false;
    	    if (isReject && !state.rejection) onUnhandled(state);
    	  });
    	};
    	var dispatchEvent = function dispatchEvent(name, promise, reason) {
    	  var event, handler;
    	  if (DISPATCH_EVENT) {
    	    event = document.createEvent('Event');
    	    event.promise = promise;
    	    event.reason = reason;
    	    event.initEvent(name, false, true);
    	    globalThis.dispatchEvent(event);
    	  } else event = {
    	    promise: promise,
    	    reason: reason
    	  };
    	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
    	};
    	var onUnhandled = function onUnhandled(state) {
    	  call(task, globalThis, function () {
    	    var promise = state.facade;
    	    var value = state.value;
    	    var IS_UNHANDLED = isUnhandled(state);
    	    var result;
    	    if (IS_UNHANDLED) {
    	      result = perform(function () {
    	        if (IS_NODE) {
    	          process.emit('unhandledRejection', value, promise);
    	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
    	      });
    	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
    	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
    	      if (result.error) throw result.value;
    	    }
    	  });
    	};
    	var isUnhandled = function isUnhandled(state) {
    	  return state.rejection !== HANDLED && !state.parent;
    	};
    	var onHandleUnhandled = function onHandleUnhandled(state) {
    	  call(task, globalThis, function () {
    	    var promise = state.facade;
    	    if (IS_NODE) {
    	      process.emit('rejectionHandled', promise);
    	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    	  });
    	};
    	var bind = function bind(fn, state, unwrap) {
    	  return function (value) {
    	    fn(state, value, unwrap);
    	  };
    	};
    	var internalReject = function internalReject(state, value, unwrap) {
    	  if (state.done) return;
    	  state.done = true;
    	  if (unwrap) state = unwrap;
    	  state.value = value;
    	  state.state = REJECTED;
    	  notify(state, true);
    	};
    	var _internalResolve = function internalResolve(state, value, unwrap) {
    	  if (state.done) return;
    	  state.done = true;
    	  if (unwrap) state = unwrap;
    	  try {
    	    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    	    var then = isThenable(value);
    	    if (then) {
    	      microtask(function () {
    	        var wrapper = {
    	          done: false
    	        };
    	        try {
    	          call(then, value, bind(_internalResolve, wrapper, state), bind(internalReject, wrapper, state));
    	        } catch (error) {
    	          internalReject(wrapper, error, state);
    	        }
    	      });
    	    } else {
    	      state.value = value;
    	      state.state = FULFILLED;
    	      notify(state, false);
    	    }
    	  } catch (error) {
    	    internalReject({
    	      done: false
    	    }, error, state);
    	  }
    	};

    	// constructor polyfill
    	if (FORCED_PROMISE_CONSTRUCTOR) {
    	  // 25.4.3.1 Promise(executor)
    	  PromiseConstructor = function Promise(executor) {
    	    anInstance(this, PromisePrototype);
    	    aCallable(executor);
    	    call(Internal, this);
    	    var state = getInternalPromiseState(this);
    	    try {
    	      executor(bind(_internalResolve, state), bind(internalReject, state));
    	    } catch (error) {
    	      internalReject(state, error);
    	    }
    	  };
    	  PromisePrototype = PromiseConstructor.prototype;

    	  // eslint-disable-next-line no-unused-vars -- required for `.length`
    	  Internal = function Promise(executor) {
    	    setInternalState(this, {
    	      type: PROMISE,
    	      done: false,
    	      notified: false,
    	      parent: false,
    	      reactions: new Queue(),
    	      rejection: false,
    	      state: PENDING,
    	      value: null
    	    });
    	  };

    	  // `Promise.prototype.then` method
    	  // https://tc39.es/ecma262/#sec-promise.prototype.then
    	  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    	    var state = getInternalPromiseState(this);
    	    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    	    state.parent = true;
    	    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    	    reaction.fail = isCallable(onRejected) && onRejected;
    	    reaction.domain = IS_NODE ? process.domain : undefined;
    	    if (state.state === PENDING) state.reactions.add(reaction);else microtask(function () {
    	      callReaction(reaction, state);
    	    });
    	    return reaction.promise;
    	  });
    	  OwnPromiseCapability = function OwnPromiseCapability() {
    	    var promise = new Internal();
    	    var state = getInternalPromiseState(promise);
    	    this.promise = promise;
    	    this.resolve = bind(_internalResolve, state);
    	    this.reject = bind(internalReject, state);
    	  };
    	  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    	    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    	  };
    	  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    	    nativeThen = NativePromisePrototype.then;
    	    if (!NATIVE_PROMISE_SUBCLASSING) {
    	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
    	      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
    	        var that = this;
    	        return new PromiseConstructor(function (resolve, reject) {
    	          call(nativeThen, that, resolve, reject);
    	        }).then(onFulfilled, onRejected);
    	        // https://github.com/zloirock/core-js/issues/640
    	      }, {
    	        unsafe: true
    	      });
    	    }

    	    // make `.constructor === Promise` work for native promise-based APIs
    	    try {
    	      delete NativePromisePrototype.constructor;
    	    } catch (error) {/* empty */}

    	    // make `instanceof Promise` work for native promise-based APIs
    	    if (setPrototypeOf) {
    	      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    	    }
    	  }
    	}

    	// `Promise` constructor
    	// https://tc39.es/ecma262/#sec-promise-executor
    	$({
    	  global: true,
    	  constructor: true,
    	  wrap: true,
    	  forced: FORCED_PROMISE_CONSTRUCTOR
    	}, {
    	  Promise: PromiseConstructor
    	});
    	PromiseWrapper = path.Promise;
    	setToStringTag(PromiseConstructor, PROMISE, false, true);
    	setSpecies(PROMISE);
    	return es_promise_constructor;
    }

    var es_promise_all = {};

    var $$1 = require('../internals/export');
    var from = require('../internals/array-from');
    var checkCorrectnessOfIteration$1 = require('../internals/check-correctness-of-iteration');
    var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
      // eslint-disable-next-line es/no-array-from -- required for testing
      Array.from(iterable);
    });

    // `Array.from` method
    // https://tc39.es/ecma262/#sec-array.from
    $$1({
      target: 'Array',
      stat: true,
      forced: INCORRECT_ITERATION
    }, {
      from: from
    });

    var wellKnownSymbol = require('../internals/well-known-symbol');
    var ITERATOR = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;
    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function next() {
          return {
            done: !!called++
          };
        },
        'return': function _return() {
          SAFE_CLOSING = true;
        }
      };
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      iteratorWithReturn[ITERATOR] = function () {
        return this;
      };
      // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
      Array.from(iteratorWithReturn, function () {
        throw 2;
      });
    } catch (error) {/* empty */}
    module.exports = function (exec, SKIP_CLOSING) {
      try {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      } catch (error) {
        return false;
      } // workaround of old WebKit + `eval` bug
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
        object[ITERATOR] = function () {
          return {
            next: function next() {
              return {
                done: ITERATION_SUPPORT = true
              };
            }
          };
        };
        exec(object);
      } catch (error) {/* empty */}
      return ITERATION_SUPPORT;
    };

    var checkCorrectnessOfIteration = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$1 = /*@__PURE__*/getAugmentedNamespace(checkCorrectnessOfIteration);

    var promiseStaticsIncorrectIteration;
    var hasRequiredPromiseStaticsIncorrectIteration;

    function requirePromiseStaticsIncorrectIteration () {
    	if (hasRequiredPromiseStaticsIncorrectIteration) return promiseStaticsIncorrectIteration;
    	hasRequiredPromiseStaticsIncorrectIteration = 1;

    	var NativePromiseConstructor = requirePromiseNativeConstructor();
    	var checkCorrectnessOfIteration = require$$1;
    	var FORCED_PROMISE_CONSTRUCTOR = require$$4.CONSTRUCTOR;
    	promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
    	  NativePromiseConstructor.all(iterable).then(undefined, function () {/* empty */});
    	});
    	return promiseStaticsIncorrectIteration;
    }

    var hasRequiredEs_promise_all;

    function requireEs_promise_all () {
    	if (hasRequiredEs_promise_all) return es_promise_all;
    	hasRequiredEs_promise_all = 1;

    	var $ = require$$0$a;
    	var call = requireFunctionCall();
    	var aCallable = requireACallable();
    	var newPromiseCapabilityModule = requireNewPromiseCapability();
    	var perform = requirePerform();
    	var iterate = require$$5$1;
    	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

    	// `Promise.all` method
    	// https://tc39.es/ecma262/#sec-promise.all
    	$({
    	  target: 'Promise',
    	  stat: true,
    	  forced: PROMISE_STATICS_INCORRECT_ITERATION
    	}, {
    	  all: function all(iterable) {
    	    var C = this;
    	    var capability = newPromiseCapabilityModule.f(C);
    	    var resolve = capability.resolve;
    	    var reject = capability.reject;
    	    var result = perform(function () {
    	      var $promiseResolve = aCallable(C.resolve);
    	      var values = [];
    	      var counter = 0;
    	      var remaining = 1;
    	      iterate(iterable, function (promise) {
    	        var index = counter++;
    	        var alreadyCalled = false;
    	        remaining++;
    	        call($promiseResolve, C, promise).then(function (value) {
    	          if (alreadyCalled) return;
    	          alreadyCalled = true;
    	          values[index] = value;
    	          --remaining || resolve(values);
    	        }, reject);
    	      });
    	      --remaining || resolve(values);
    	    });
    	    if (result.error) reject(result.value);
    	    return capability.promise;
    	  }
    	});
    	return es_promise_all;
    }

    var es_promise_catch = {};

    var hasRequiredEs_promise_catch;

    function requireEs_promise_catch () {
    	if (hasRequiredEs_promise_catch) return es_promise_catch;
    	hasRequiredEs_promise_catch = 1;

    	var $ = require$$0$a;
    	var IS_PURE = requireIsPure();
    	var FORCED_PROMISE_CONSTRUCTOR = require$$4.CONSTRUCTOR;
    	var NativePromiseConstructor = requirePromiseNativeConstructor();
    	var getBuiltIn = requireGetBuiltIn();
    	var isCallable = require$$5$5;
    	var defineBuiltIn = requireDefineBuiltIn();
    	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

    	// `Promise.prototype.catch` method
    	// https://tc39.es/ecma262/#sec-promise.prototype.catch
    	$({
    	  target: 'Promise',
    	  proto: true,
    	  forced: FORCED_PROMISE_CONSTRUCTOR,
    	  real: true
    	}, {
    	  'catch': function _catch(onRejected) {
    	    return this.then(undefined, onRejected);
    	  }
    	});

    	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
    	if (!IS_PURE && isCallable(NativePromiseConstructor)) {
    	  var method = getBuiltIn('Promise').prototype['catch'];
    	  if (NativePromisePrototype['catch'] !== method) {
    	    defineBuiltIn(NativePromisePrototype, 'catch', method, {
    	      unsafe: true
    	    });
    	  }
    	}
    	return es_promise_catch;
    }

    var es_promise_race = {};

    var hasRequiredEs_promise_race;

    function requireEs_promise_race () {
    	if (hasRequiredEs_promise_race) return es_promise_race;
    	hasRequiredEs_promise_race = 1;

    	var $ = require$$0$a;
    	var call = requireFunctionCall();
    	var aCallable = requireACallable();
    	var newPromiseCapabilityModule = requireNewPromiseCapability();
    	var perform = requirePerform();
    	var iterate = require$$5$1;
    	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

    	// `Promise.race` method
    	// https://tc39.es/ecma262/#sec-promise.race
    	$({
    	  target: 'Promise',
    	  stat: true,
    	  forced: PROMISE_STATICS_INCORRECT_ITERATION
    	}, {
    	  race: function race(iterable) {
    	    var C = this;
    	    var capability = newPromiseCapabilityModule.f(C);
    	    var reject = capability.reject;
    	    var result = perform(function () {
    	      var $promiseResolve = aCallable(C.resolve);
    	      iterate(iterable, function (promise) {
    	        call($promiseResolve, C, promise).then(capability.resolve, reject);
    	      });
    	    });
    	    if (result.error) reject(result.value);
    	    return capability.promise;
    	  }
    	});
    	return es_promise_race;
    }

    var es_promise_reject = {};

    var hasRequiredEs_promise_reject;

    function requireEs_promise_reject () {
    	if (hasRequiredEs_promise_reject) return es_promise_reject;
    	hasRequiredEs_promise_reject = 1;

    	var $ = require$$0$a;
    	var newPromiseCapabilityModule = requireNewPromiseCapability();
    	var FORCED_PROMISE_CONSTRUCTOR = require$$4.CONSTRUCTOR;

    	// `Promise.reject` method
    	// https://tc39.es/ecma262/#sec-promise.reject
    	$({
    	  target: 'Promise',
    	  stat: true,
    	  forced: FORCED_PROMISE_CONSTRUCTOR
    	}, {
    	  reject: function reject(r) {
    	    var capability = newPromiseCapabilityModule.f(this);
    	    var capabilityReject = capability.reject;
    	    capabilityReject(r);
    	    return capability.promise;
    	  }
    	});
    	return es_promise_reject;
    }

    var es_promise_resolve = {};

    var promiseResolve;
    var hasRequiredPromiseResolve;

    function requirePromiseResolve () {
    	if (hasRequiredPromiseResolve) return promiseResolve;
    	hasRequiredPromiseResolve = 1;

    	var anObject = requireAnObject();
    	var isObject = require$$1$3;
    	var newPromiseCapability = requireNewPromiseCapability();
    	promiseResolve = function (C, x) {
    	  anObject(C);
    	  if (isObject(x) && x.constructor === C) return x;
    	  var promiseCapability = newPromiseCapability.f(C);
    	  var resolve = promiseCapability.resolve;
    	  resolve(x);
    	  return promiseCapability.promise;
    	};
    	return promiseResolve;
    }

    var hasRequiredEs_promise_resolve;

    function requireEs_promise_resolve () {
    	if (hasRequiredEs_promise_resolve) return es_promise_resolve;
    	hasRequiredEs_promise_resolve = 1;

    	var $ = require$$0$a;
    	var getBuiltIn = requireGetBuiltIn();
    	var IS_PURE = requireIsPure();
    	var NativePromiseConstructor = requirePromiseNativeConstructor();
    	var FORCED_PROMISE_CONSTRUCTOR = require$$4.CONSTRUCTOR;
    	var promiseResolve = requirePromiseResolve();
    	var PromiseConstructorWrapper = getBuiltIn('Promise');
    	var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

    	// `Promise.resolve` method
    	// https://tc39.es/ecma262/#sec-promise.resolve
    	$({
    	  target: 'Promise',
    	  stat: true,
    	  forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
    	}, {
    	  resolve: function resolve(x) {
    	    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
    	  }
    	});
    	return es_promise_resolve;
    }

    var hasRequiredEs_promise;

    function requireEs_promise () {
    	if (hasRequiredEs_promise) return es_promise;
    	hasRequiredEs_promise = 1;

    	// TODO: Remove this module from `core-js@4` since it's split to modules listed below
    	requireEs_promise_constructor();
    	requireEs_promise_all();
    	requireEs_promise_catch();
    	requireEs_promise_race();
    	requireEs_promise_reject();
    	requireEs_promise_resolve();
    	return es_promise;
    }

    requireEs_promise();

    var API_BASE = "https://wm.lme.isroot.in/wm";
    var STORAGE_KEY = "lme_wm_quality_map";
    function debounce(func, wait) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          return func.apply(context, args);
        }, wait);
      };
    }
    function Cache() {
      var self = this;
      var cacheSize = 1000;
      var cacheTime = 1000 * 60 * 60 * 12; // 12h
      var storage = {};
      self.save = debounce(function () {
        Lampa.Storage.set(STORAGE_KEY, storage);
      }, 500);
      self.init = function () {
        storage = Lampa.Storage.get(STORAGE_KEY, {});
        self.init = function () {};
      };
      self.get = function (id) {
        var memory = storage[id];
        if (memory) {
          var cacheTimestamp = Date.now() - cacheTime;
          if (memory.timestamp > cacheTimestamp) return memory.value;
          for (var cacheId in storage) {
            var node = storage[cacheId];
            if (!(node && node.timestamp > cacheTimestamp)) delete storage[cacheId];
          }
        }
        return null;
      };
      self.set = function (id, value) {
        var timestamp = Date.now();
        var size = Object.keys(storage).length;
        if (size >= cacheSize) {
          var cacheTimestamp = timestamp - cacheTime;
          for (var cacheId in storage) {
            var node = storage[cacheId];
            if (!(node && node.timestamp > cacheTimestamp)) delete storage[cacheId];
          }
          size = Object.keys(storage).length;
          if (size >= cacheSize) {
            var timestamps = [];
            for (var _cacheId in storage) {
              var _node = storage[_cacheId];
              timestamps.push(_node && _node.timestamp || 0);
            }
            timestamps.sort(function (a, b) {
              return a - b;
            });
            cacheTimestamp = timestamps[Math.floor(timestamps.length / 2)];
            for (var _cacheId2 in storage) {
              var _node2 = storage[_cacheId2];
              if (!(_node2 && _node2.timestamp > cacheTimestamp)) delete storage[_cacheId2];
            }
          }
        }
        storage[id] = {
          timestamp: timestamp,
          value: value
        };
        self.save();
      };
    }
    function buildTid(object) {
      var _object$card, _object$movie, _object$data, _object$movie2, _object$data2, _object$card2, _object$movie3, _object$movie4;
      var imdbId = (object === null || object === void 0 ? void 0 : object.imdb_id) || (object === null || object === void 0 || (_object$card = object.card) === null || _object$card === void 0 ? void 0 : _object$card.imdb_id) || (object === null || object === void 0 || (_object$movie = object.movie) === null || _object$movie === void 0 ? void 0 : _object$movie.imdb_id) || (object === null || object === void 0 || (_object$data = object.data) === null || _object$data === void 0 ? void 0 : _object$data.imdb_id);
      if (imdbId) return imdbId;
      var id = (object === null || object === void 0 ? void 0 : object.id) || (object === null || object === void 0 || (_object$movie2 = object.movie) === null || _object$movie2 === void 0 ? void 0 : _object$movie2.id) || (object === null || object === void 0 || (_object$data2 = object.data) === null || _object$data2 === void 0 ? void 0 : _object$data2.id);
      if (!id) return null;
      var mediaType = (object === null || object === void 0 ? void 0 : object.media_type) || (object === null || object === void 0 || (_object$card2 = object.card) === null || _object$card2 === void 0 ? void 0 : _object$card2.media_type) || (object === null || object === void 0 || (_object$movie3 = object.movie) === null || _object$movie3 === void 0 ? void 0 : _object$movie3.media_type) || (object !== null && object !== void 0 && object.first_air_date || object !== null && object !== void 0 && object.number_of_seasons || object !== null && object !== void 0 && (_object$movie4 = object.movie) !== null && _object$movie4 !== void 0 && _object$movie4.first_air_date ? "tv" : "movie");
      return "".concat(mediaType, "-").concat(id);
    }
    function isValidApiKey(apiKey) {
      if (!apiKey) return false;
      if (typeof apiKey !== "string") return true;
      var normalized = apiKey.trim().toLowerCase();
      return normalized !== "" && normalized !== "undefined" && normalized !== "null";
    }
    function fetchBestQualityItem(object) {
      try {
        var tid = buildTid(object);
        var apiKey = Lampa.Storage.get("lme_wmquality");
        if (!tid || !isValidApiKey(apiKey)) return Promise.resolve(null);
        var url = "".concat(API_BASE, "?tid=").concat(encodeURIComponent(tid), "&apiKey=").concat(encodeURIComponent(apiKey));
        return new Promise(function (resolve) {
          Lampa.Network.silent(url, function (response) {
            return resolve(response && response.quality ? response.quality : null);
          }, function () {
            return resolve(null);
          }, null, {
            timeout: 10000
          });
        });
      } catch (error) {
        console.error("LME", error);
        return Promise.resolve(null);
      }
    }
    function renderQuality(html, quality) {
      if (!quality) return;
      var qualityContainer = $(".card__quality", html);
      if (qualityContainer.length !== 1) {
        qualityContainer = $('<div class="card__quality"><div></div></div>');
        var icons = $(".card__icons", html);
        if (icons.length) icons.after(qualityContainer);else $(".card__view", html).append(qualityContainer);
      }
      $("div", qualityContainer).text(quality);
    }
    function appendQualityElement(bestItem, selector) {
      if (!bestItem) return;
      if (Lampa.Platform.screen("mobile") !== true) {
        var container = $(selector);
        container.find(".card__quality").remove();
        var quality = $("<div>", {
          class: "card__quality",
          css: {
            zIndex: 999,
            fontSize: "75%"
          }
        });
        quality.append($("<div>", {
          text: bestItem
        }));
        $(selector).append(quality);
      }
    }
    function main$5() {
      var cache = new Cache();
      cache.init();
      var inflight = {};
      var card = Lampa.Maker.map("Card");
      var onVisible = card.Card.onVisible;
      card.Card.onVisible = function () {
        var self = this;
        onVisible.apply(self);
        if (!self.data || Lampa.Storage.field("source") === "cub") return;
        var tid = buildTid(self.data);
        if (!tid) return;
        var qualityCache = cache.get(tid);
        if (qualityCache) {
          renderQuality(self.html, qualityCache);
          return;
        }
        if (inflight[tid]) return;
        inflight[tid] = true;
        fetchBestQualityItem(self.data).then(function (bestItem) {
          if (bestItem) {
            cache.set(tid, bestItem);
            renderQuality(self.html, bestItem);
          }
        }).finally(function () {
          delete inflight[tid];
        });
      };
      Lampa.Listener.follow("full", function (e) {
        if (e.type === "complite") {
          var _e$data;
          fetchBestQualityItem(e.object || ((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.movie)).then(function (bestItem) {
            appendQualityElement(bestItem, ".full-start-new__poster");
          });
        }
      });
    }
    var StreamQuality = {
      main: main$5
    };

    function main$4() {
      Lampa.Listener.follow("full", function (cardData) {
        //if (e.type === "complite" && Lampa.Storage.field('source') !== 'cub')
        if (cardData.type === "complite" && Lampa.Storage.field('source') === 'tmdb') {
          var _cardData$object = cardData.object,
            method = _cardData$object.method,
            id = _cardData$object.id;
          var apiKey = "4ef0d7355d9ffb5151e987764708ce96";
          var apiUrlTMDB = 'https://api.themoviedb.org/3/';
          var apiUrlProxy = 'apitmdb.' + (Lampa.Storage && Lampa.Storage.get('cub_domain') ? Lampa.Storage.get('cub_domain') : 'cub.red') + '/3/';
          var request = "".concat(method, "/").concat(id, "?api_key=").concat(apiKey, "&language=en");
          var url = Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request;
          $.ajax({
            url: url,
            method: "GET",
            timeout: 0
          }).done(function (response) {
            var englishTitle = method === "movie" ? response.title : response.name || "Not found";
            var englishDesc = response.overview || "";
            /**
            $("<div>", {
                class: "english-title",
                text: englishTitle,
            }).appendTo(".full-start-new__head");
            **/
            cardData.object.activity.render().find('.full-start-new__head').append($("<div>", {
              "class": "english-title",
              text: englishTitle
            }));
            if (cardData.data.movie.overview === '') {
              $(".full-descr__text").html($("<div>", {
                class: "english-desc",
                text: englishDesc
              }));
            }
          }).fail(function () {
            /**
            $("<div>", {
                class: "english-title",
                text: "Not found",
            }).appendTo(".full-start-new__head");
            **/

            cardData.object.activity.render().find('.full-start-new__head').append($("<div>", {
              "class": "english-title",
              text: "Not found"
            }));
          });
        }
      });
    }
    var englishData = {
      main: main$4
    };

    var es_string_padStart = {};

    var stringRepeat;
    var hasRequiredStringRepeat;

    function requireStringRepeat () {
    	if (hasRequiredStringRepeat) return stringRepeat;
    	hasRequiredStringRepeat = 1;

    	var toIntegerOrInfinity = requireToIntegerOrInfinity();
    	var toString = requireToString();
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var $RangeError = RangeError;
    	var floor = Math.floor;

    	// `String.prototype.repeat` method implementation
    	// https://tc39.es/ecma262/#sec-string.prototype.repeat
    	stringRepeat = function repeat(count) {
    	  var str = toString(requireObjectCoercible(this));
    	  var result = '';
    	  var n = toIntegerOrInfinity(count);
    	  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
    	  for (; n > 0; (n = floor(n / 2)) && (str += str)) if (n % 2) result += str;
    	  return result;
    	};
    	return stringRepeat;
    }

    var stringPad;
    var hasRequiredStringPad;

    function requireStringPad () {
    	if (hasRequiredStringPad) return stringPad;
    	hasRequiredStringPad = 1;

    	var uncurryThis = requireFunctionUncurryThis();
    	var toLength = requireToLength();
    	var toString = requireToString();
    	var $repeat = requireStringRepeat();
    	var requireObjectCoercible = requireRequireObjectCoercible();
    	var repeat = uncurryThis($repeat);
    	var stringSlice = uncurryThis(''.slice);
    	var ceil = Math.ceil;

    	// `String.prototype.{ padStart, padEnd }` methods implementation
    	var createMethod = function createMethod(IS_END) {
    	  return function ($this, maxLength, fillString) {
    	    var S = toString(requireObjectCoercible($this));
    	    var intMaxLength = toLength(maxLength);
    	    var stringLength = S.length;
    	    if (intMaxLength <= stringLength) return S;
    	    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    	    var fillLen, stringFiller;
    	    if (fillStr === '') return S;
    	    fillLen = intMaxLength - stringLength;
    	    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    	    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    	    return IS_END ? S + stringFiller : stringFiller + S;
    	  };
    	};
    	stringPad = {
    	  // `String.prototype.padStart` method
    	  // https://tc39.es/ecma262/#sec-string.prototype.padstart
    	  start: createMethod(false),
    	  // `String.prototype.padEnd` method
    	  // https://tc39.es/ecma262/#sec-string.prototype.padend
    	  end: createMethod(true)
    	};
    	return stringPad;
    }

    var userAgent = require('../internals/environment-user-agent');
    module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

    var stringPadWebkitBug = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var require$$2 = /*@__PURE__*/getAugmentedNamespace(stringPadWebkitBug);

    var hasRequiredEs_string_padStart;

    function requireEs_string_padStart () {
    	if (hasRequiredEs_string_padStart) return es_string_padStart;
    	hasRequiredEs_string_padStart = 1;

    	var $ = require$$0$a;
    	var $padStart = requireStringPad().start;
    	var WEBKIT_BUG = require$$2;

    	// `String.prototype.padStart` method
    	// https://tc39.es/ecma262/#sec-string.prototype.padstart
    	$({
    	  target: 'String',
    	  proto: true,
    	  forced: WEBKIT_BUG
    	}, {
    	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    	  }
    	});
    	return es_string_padStart;
    }

    requireEs_string_padStart();

    function main$3() {
      Lampa.Listener.follow("full", function (cardData) {
        if (cardData.type === "complite" && cardData.object.method === "tv") {
          var imdbId = cardData.data.movie.imdb_id;
          if (imdbId) {
            $.ajax({
              url: "https://api.tvmaze.com/lookup/shows?imdb=".concat(imdbId),
              method: "GET",
              success: function success(response) {
                var averageRuntime = response.averageRuntime;
                var hours = Math.floor(averageRuntime / 60);
                var minutes = averageRuntime % 60;
                var formattedRuntime = "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
                var runtimeSpan = $("<span>", {
                  id: "averageRuntime",
                  text: formattedRuntime
                });
                var splitSpan = $("<span>", {
                  class: "full-start-new__split",
                  text: "●"
                });
                cardData.object.activity.render().find('.full-start-new__details').prepend(runtimeSpan, splitSpan);
              },
              error: function error(_error) {
                console.error("Error during request:", _error);
              }
            });
          } else {
            console.warn("IMDB ID is missing in movie data.");
          }
        }
      });
    }
    var averageRuntime = {
      main: main$3
    };

    function main$2() {
      var allSources = ['tmdb', 'cub']; // Усі плеери
      var logos = {
        tmdb: "<svg width=\"161\" height=\"37\" viewBox=\"0 0 161 37\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.0846 35.8986H17.8727V7.01351H27.9572V0H0V6.99324H10.0846V35.8986ZM38.1417 35.8986H45.9298V8.36149H46.0296L54.9659 35.8784H60.9568L70.1927 8.36149H70.2925V35.8784H78.0806V0H66.3485L58.1611 23.4122H58.0612L49.9237 0H38.1417V35.8986ZM89.0039 0.121622H100.686C103.406 0.125865 106.115 0.466206 108.754 1.13514C111.157 1.7138 113.421 2.77522 115.414 4.25676C117.34 5.72744 118.892 7.64602 119.937 9.85135C121.118 12.4714 121.689 15.3326 121.604 18.2128C121.658 20.8662 121.104 23.4961 119.987 25.8953C118.946 28.0542 117.453 29.9565 115.613 31.4696C113.73 33.0023 111.579 34.1611 109.273 34.8851C106.835 35.6708 104.292 36.064 101.734 36.0507H89.0039V0.121622ZM96.792 28.7027H100.786C102.466 28.7143 104.141 28.5273 105.778 28.1453C107.239 27.8443 108.621 27.2329 109.832 26.3513C110.988 25.4631 111.908 24.2961 112.508 22.9561C113.209 21.335 113.55 19.5772 113.506 17.8074C113.536 16.2216 113.194 14.6514 112.508 13.2264C111.885 11.9635 110.987 10.8612 109.882 10.0034C108.733 9.13749 107.437 8.49491 106.058 8.10811C104.537 7.67642 102.964 7.46152 101.385 7.46959H96.792V28.7027ZM132.887 0.121622H146.067C147.613 0.122387 149.158 0.234152 150.69 0.456081C152.142 0.647089 153.551 1.09291 154.853 1.77365C156.07 2.41433 157.102 3.36414 157.849 4.5304C158.677 5.95358 159.076 7.59212 158.997 9.24324C159.065 11.0819 158.473 12.883 157.329 14.3108C156.163 15.6827 154.625 16.6765 152.906 17.1689V17.2297C154.012 17.39 155.084 17.7323 156.081 18.2432C157.002 18.7125 157.831 19.3479 158.528 20.1182C159.218 20.8897 159.75 21.7922 160.095 22.7736C160.467 23.8129 160.653 24.9112 160.644 26.0169C160.704 27.6822 160.288 29.3295 159.446 30.7601C158.663 32.0054 157.603 33.0468 156.351 33.8007C155.035 34.6026 153.593 35.1683 152.087 35.473C150.535 35.8108 148.952 35.9807 147.365 35.9797H132.887V0.121622ZM140.675 14.4628H146.316C146.914 14.4661 147.511 14.3981 148.094 14.2601C148.651 14.1373 149.182 13.9142 149.661 13.6014C150.129 13.2951 150.516 12.8776 150.789 12.3851C151.082 11.8239 151.226 11.1955 151.209 10.5608C151.241 9.91579 151.088 9.27513 150.769 8.71622C150.46 8.2373 150.038 7.8438 149.541 7.57095C148.985 7.28738 148.389 7.09253 147.774 6.99324C147.165 6.87376 146.547 6.81268 145.927 6.81081H140.635L140.675 14.4628ZM140.675 29.3108H147.664C148.279 29.3125 148.892 29.2445 149.491 29.1081C150.087 28.9843 150.654 28.7433 151.159 28.3986C151.663 28.0612 152.083 27.6103 152.387 27.0811C152.715 26.4768 152.877 25.7943 152.856 25.1047C152.883 24.3773 152.664 23.6623 152.237 23.0777C151.818 22.5517 151.276 22.1405 150.66 21.8818C150.02 21.6112 149.349 21.4239 148.663 21.3243C147.985 21.2266 147.301 21.1758 146.616 21.1723H140.725L140.675 29.3108Z\" fill=\"currentColor\"/> </svg>",
        cub: "<svg width=\"110\" height=\"39\" viewBox=\"0 0 110 39\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M66.8379 22.2598H71.623C71.5592 23.6452 71.1855 24.8665 70.502 25.9238C69.8184 26.9811 68.8704 27.806 67.6582 28.3984C66.4551 28.9818 65.0332 29.2734 63.3926 29.2734C62.0618 29.2734 60.8724 29.0501 59.8242 28.6035C58.7852 28.1569 57.901 27.5143 57.1719 26.6758C56.4518 25.8372 55.9004 24.821 55.5176 23.627C55.1439 22.4329 54.957 21.0885 54.957 19.5938V18.5137C54.957 17.0189 55.153 15.6745 55.5449 14.4805C55.946 13.2773 56.5111 12.2565 57.2402 11.418C57.9785 10.5703 58.8626 9.92318 59.8926 9.47656C60.9225 9.02995 62.0664 8.80664 63.3242 8.80664C65.056 8.80664 66.5189 9.11654 67.7129 9.73633C68.9069 10.3561 69.832 11.2083 70.4883 12.293C71.1445 13.3685 71.5319 14.5944 71.6504 15.9707H66.8652C66.847 15.2233 66.7194 14.599 66.4824 14.0977C66.2454 13.5872 65.8717 13.2044 65.3613 12.9492C64.8509 12.694 64.1719 12.5664 63.3242 12.5664C62.7318 12.5664 62.2168 12.6758 61.7793 12.8945C61.3418 13.1133 60.9772 13.4596 60.6855 13.9336C60.3939 14.4076 60.1751 15.0228 60.0293 15.7793C59.8926 16.5267 59.8242 17.429 59.8242 18.4863V19.5938C59.8242 20.651 59.888 21.5534 60.0156 22.3008C60.1432 23.0482 60.3483 23.6589 60.6309 24.1328C60.9134 24.6068 61.278 24.9577 61.7246 25.1855C62.1803 25.4043 62.7363 25.5137 63.3926 25.5137C64.1217 25.5137 64.737 25.3997 65.2383 25.1719C65.7396 24.9349 66.127 24.5794 66.4004 24.1055C66.6738 23.6224 66.8197 23.0072 66.8379 22.2598ZM84.6934 9.09375H89.4922V22.0957C89.4922 23.6452 89.1686 24.9577 88.5215 26.0332C87.8743 27.0996 86.9674 27.9062 85.8008 28.4531C84.6341 29 83.2624 29.2734 81.6855 29.2734C80.127 29.2734 78.7552 29 77.5703 28.4531C76.3945 27.9062 75.474 27.0996 74.8086 26.0332C74.1523 24.9577 73.8242 23.6452 73.8242 22.0957V9.09375H78.6367V22.0957C78.6367 22.916 78.7552 23.5859 78.9922 24.1055C79.2292 24.6159 79.5755 24.9896 80.0312 25.2266C80.487 25.4635 81.0384 25.582 81.6855 25.582C82.3418 25.582 82.8932 25.4635 83.3398 25.2266C83.7865 24.9896 84.1237 24.6159 84.3516 24.1055C84.5794 23.5859 84.6934 22.916 84.6934 22.0957V9.09375ZM100.635 20.5371H95.5078L95.4805 17.3926H99.6367C100.384 17.3926 100.981 17.3105 101.428 17.1465C101.874 16.9733 102.198 16.7227 102.398 16.3945C102.608 16.0664 102.713 15.6562 102.713 15.1641C102.713 14.599 102.608 14.1432 102.398 13.7969C102.189 13.4505 101.856 13.1999 101.4 13.0449C100.954 12.8809 100.375 12.7988 99.6641 12.7988H97.3125V29H92.5137V9.09375H99.6641C100.895 9.09375 101.993 9.20768 102.959 9.43555C103.925 9.6543 104.745 9.99154 105.42 10.4473C106.104 10.903 106.623 11.4772 106.979 12.1699C107.334 12.8535 107.512 13.6602 107.512 14.5898C107.512 15.401 107.339 16.1621 106.992 16.873C106.646 17.584 106.067 18.1628 105.256 18.6094C104.454 19.0469 103.355 19.2747 101.961 19.293L100.635 20.5371ZM100.443 29H94.3457L95.9863 25.3086H100.443C101.1 25.3086 101.624 25.2083 102.016 25.0078C102.417 24.7982 102.704 24.5247 102.877 24.1875C103.059 23.8411 103.15 23.4583 103.15 23.0391C103.15 22.5286 103.064 22.0866 102.891 21.7129C102.727 21.3392 102.462 21.0521 102.098 20.8516C101.733 20.6419 101.245 20.5371 100.635 20.5371H96.6016L96.6289 17.3926H101.455L102.576 18.6504C103.907 18.5957 104.96 18.7826 105.734 19.2109C106.518 19.6393 107.079 20.2044 107.416 20.9062C107.753 21.6081 107.922 22.3418 107.922 23.1074C107.922 24.4108 107.639 25.5 107.074 26.375C106.518 27.25 105.684 27.9062 104.572 28.3438C103.46 28.7812 102.084 29 100.443 29Z\" fill=\"currentColor\"/> <path d=\"M11.1313 0H32.8687L44 18.9021H37.9656L14.0447 5.09141L11.1313 0Z\" fill=\"currentColor\"/> <path d=\"M28.7313 18.9021H21.9475L18.5055 12.887L28.7313 18.9021Z\" fill=\"currentColor\"/> <path d=\"M18.484 25.3498L21.9475 19.322H28.7313L18.484 25.3498Z\" fill=\"currentColor\"/> <path d=\"M13.9958 33.161L37.9656 19.322H44L32.9737 38.3292H11.0262L13.9958 33.161Z\" fill=\"currentColor\"/> <path d=\"M0 19.1122L10.7112 0L13.7566 5.32936V32.8387L10.6062 38.3294L0 19.1122Z\" fill=\"currentColor\"/> <path d=\"M18.3771 13.4153L21.6325 19.1122L18.3771 24.7858V13.4153Z\" fill=\"currentColor\"/> </svg>",
        TMDBs: "<svg width=\"161\" height=\"37\" viewBox=\"0 0 161 37\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.0846 35.8986H17.8727V7.01351H27.9572V0H0V6.99324H10.0846V35.8986ZM38.1417 35.8986H45.9298V8.36149H46.0296L54.9659 35.8784H60.9568L70.1927 8.36149H70.2925V35.8784H78.0806V0H66.3485L58.1611 23.4122H58.0612L49.9237 0H38.1417V35.8986ZM89.0039 0.121622H100.686C103.406 0.125865 106.115 0.466206 108.754 1.13514C111.157 1.7138 113.421 2.77522 115.414 4.25676C117.34 5.72744 118.892 7.64602 119.937 9.85135C121.118 12.4714 121.689 15.3326 121.604 18.2128C121.658 20.8662 121.104 23.4961 119.987 25.8953C118.946 28.0542 117.453 29.9565 115.613 31.4696C113.73 33.0023 111.579 34.1611 109.273 34.8851C106.835 35.6708 104.292 36.064 101.734 36.0507H89.0039V0.121622ZM96.792 28.7027H100.786C102.466 28.7143 104.141 28.5273 105.778 28.1453C107.239 27.8443 108.621 27.2329 109.832 26.3513C110.988 25.4631 111.908 24.2961 112.508 22.9561C113.209 21.335 113.55 19.5772 113.506 17.8074C113.536 16.2216 113.194 14.6514 112.508 13.2264C111.885 11.9635 110.987 10.8612 109.882 10.0034C108.733 9.13749 107.437 8.49491 106.058 8.10811C104.537 7.67642 102.964 7.46152 101.385 7.46959H96.792V28.7027ZM132.887 0.121622H146.067C147.613 0.122387 149.158 0.234152 150.69 0.456081C152.142 0.647089 153.551 1.09291 154.853 1.77365C156.07 2.41433 157.102 3.36414 157.849 4.5304C158.677 5.95358 159.076 7.59212 158.997 9.24324C159.065 11.0819 158.473 12.883 157.329 14.3108C156.163 15.6827 154.625 16.6765 152.906 17.1689V17.2297C154.012 17.39 155.084 17.7323 156.081 18.2432C157.002 18.7125 157.831 19.3479 158.528 20.1182C159.218 20.8897 159.75 21.7922 160.095 22.7736C160.467 23.8129 160.653 24.9112 160.644 26.0169C160.704 27.6822 160.288 29.3295 159.446 30.7601C158.663 32.0054 157.603 33.0468 156.351 33.8007C155.035 34.6026 153.593 35.1683 152.087 35.473C150.535 35.8108 148.952 35.9807 147.365 35.9797H132.887V0.121622ZM140.675 14.4628H146.316C146.914 14.4661 147.511 14.3981 148.094 14.2601C148.651 14.1373 149.182 13.9142 149.661 13.6014C150.129 13.2951 150.516 12.8776 150.789 12.3851C151.082 11.8239 151.226 11.1955 151.209 10.5608C151.241 9.91579 151.088 9.27513 150.769 8.71622C150.46 8.2373 150.038 7.8438 149.541 7.57095C148.985 7.28738 148.389 7.09253 147.774 6.99324C147.165 6.87376 146.547 6.81268 145.927 6.81081H140.635L140.675 14.4628ZM140.675 29.3108H147.664C148.279 29.3125 148.892 29.2445 149.491 29.1081C150.087 28.9843 150.654 28.7433 151.159 28.3986C151.663 28.0612 152.083 27.6103 152.387 27.0811C152.715 26.4768 152.877 25.7943 152.856 25.1047C152.883 24.3773 152.664 23.6623 152.237 23.0777C151.818 22.5517 151.276 22.1405 150.66 21.8818C150.02 21.6112 149.349 21.4239 148.663 21.3243C147.985 21.2266 147.301 21.1758 146.616 21.1723H140.725L140.675 29.3108Z\" fill=\"currentColor\"/> </svg>",
        pub: "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16 22.6666C19.6819 22.6666 22.6666 19.6818 22.6666 15.9999C22.6666 12.318 19.6819 9.33325 16 9.33325C12.3181 9.33325 9.33331 12.318 9.33331 15.9999C9.33331 19.6818 12.3181 22.6666 16 22.6666Z\" fill=\"currentColor\"/> <path d=\"M8.66665 9.99992C9.40303 9.99992 9.99998 9.40297 9.99998 8.66659C9.99998 7.93021 9.40303 7.33325 8.66665 7.33325C7.93027 7.33325 7.33331 7.93021 7.33331 8.66659C7.33331 9.40297 7.93027 9.99992 8.66665 9.99992Z\" fill=\"currentColor\"/> <path d=\"M9.33331 16H16L9.33331 29.3333V16Z\" fill=\"currentColor\"/> <path d=\"M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z\" fill=\"currentColor\"/> </svg>",
        filmix: "<svg width=\"160\" height=\"48\" viewBox=\"0 0 160 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g clip-path=\"url(#clip0_296_49)\"> <path d=\"M7.22157 16.4142V12.0327C7.22157 9.76567 7.71552 7.73842 8.70418 5.95095C9.69284 4.1199 11.0682 2.68117 12.8304 1.63485C14.6361 0.54495 16.7636 0 19.2141 0C20.7611 0 22.1365 0.239775 23.3403 0.719325C24.5871 1.19888 25.7687 1.89645 26.8868 2.81197L22.0507 8.82832C21.664 8.52315 21.2343 8.3052 20.7611 8.1744C20.3315 8.00002 19.8153 7.9128 19.2141 7.9128C18.0961 7.9128 17.2154 8.26155 16.5706 8.95912C15.9686 9.61305 15.6677 10.5286 15.6677 11.7057V16.4142H35.2686V48H26.8217V23.9346H15.6677V48H7.22157V23.9346H0V16.4142H7.22157Z\" fill=\"currentColor\"/> <path d=\"M42.763 47.9999V0.719238H51.2091V47.9999H42.763Z\" fill=\"currentColor\"/> <path d=\"M79.0032 48.0001V29.3625C79.0032 27.5314 78.4228 26.1146 77.2618 25.1118C76.1445 24.0655 74.7476 23.5423 73.0713 23.5423C71.9532 23.5423 70.9431 23.7822 70.041 24.2617C69.1381 24.6977 68.429 25.3516 67.9128 26.2236C67.3974 27.0955 67.1394 28.1418 67.1394 29.3625L67.1393 48.0001H58.6932V16.4143H67.1393V19.1547C67.8948 18.4066 68.7545 17.7765 69.7186 17.2644C71.5236 16.2617 73.5653 15.7603 75.8435 15.7603C77.9932 15.7603 79.9483 16.2617 81.7112 17.2644C83.1879 18.0682 84.408 19.1628 85.3717 20.5483C86.4136 19.1999 87.6861 18.127 89.19 17.3298C91.0816 16.2835 93.1876 15.7603 95.5087 15.7603C97.8299 15.7603 99.9144 16.2617 101.763 17.2644C103.611 18.2235 105.073 19.6186 106.147 21.4497C107.222 23.2808 107.759 25.4606 107.759 27.9892V48.0001H99.3125V29.3625C99.3125 27.5314 98.7328 26.1146 97.5718 25.1118C96.4545 24.0655 95.0576 23.5423 93.3813 23.5423C92.3061 23.5423 91.296 23.7822 90.351 24.2617C89.4481 24.6977 88.739 25.3516 88.2228 26.2236C87.7102 27.0908 87.4521 28.1305 87.4494 29.3428V48.0001H79.0032Z\" fill=\"currentColor\"/> <path d=\"M114.606 48.0001V16.4143H123.116V48.0001H114.606Z\" fill=\"currentColor\"/> <path d=\"M144.01 39.3188L137.949 48.0001H128.02L139.029 32.1841L128.02 16.4143H138.014L144.01 25.0286L150.006 16.4143H160L148.991 32.1841L160 48.0001H150.071L144.01 39.3188Z\" fill=\"currentColor\"/> <path d=\"M115.454 12.8891C116.363 13.7991 117.511 14.2541 118.896 14.2541C120.326 14.2541 121.473 13.7991 122.339 12.8891C123.248 11.9357 123.703 10.7657 123.703 9.37915C123.703 8.03575 123.248 6.88743 122.339 5.9341C121.473 4.98078 120.326 4.50415 118.896 4.50415C117.511 4.50415 116.363 4.98078 115.454 5.9341C114.545 6.88743 114.09 8.03575 114.09 9.37915C114.09 10.7657 114.545 11.9357 115.454 12.8891Z\" fill=\"currentColor\"/> <path d=\"M26.7188 12.8891C27.6276 13.7991 28.7752 14.2541 30.161 14.2541C31.5904 14.2541 32.7373 13.7991 33.6039 12.8891C34.5127 11.9357 34.9675 10.7657 34.9675 9.37915C34.9675 8.03575 34.5127 6.88743 33.6039 5.9341C32.7373 4.98078 31.5904 4.50415 30.161 4.50415C28.7752 4.50415 27.6276 4.98078 26.7188 5.9341C25.8093 6.88743 25.3545 8.03575 25.3545 9.37915C25.3545 10.7657 25.8093 11.9357 26.7188 12.8891Z\" fill=\"currentColor\"/> </g> <defs> <clipPath id=\"clip0_296_49\"> <rect width=\"160\" height=\"48\" fill=\"currentColor\"/> </clipPath> </defs> </svg>"
      };

      // Визначаємо джерела в залежності від умов
      var sources = allSources.slice(0, 2); // За замовчуванням беремо перші два джерела

      if (Lampa.Storage.get('lme_switchsource_modss') === true) {
        sources.push.apply(sources, ['pub', 'filmix']);
      }
      if (Lampa.Storage.get('lme_switchsource_lmenc') === true) {
        sources.push('TMDBs'); // Додаємо TMDBs, якщо умова виконується
      }

      // Отримуємо поточне джерело з Storage
      var currentSource = Lampa.Storage.get('source');
      var currentSourceIndex = sources.indexOf(currentSource);

      // Якщо поточне джерело не знайдено, встановлюємо перше джерело за замовчуванням
      if (currentSourceIndex === -1) {
        currentSourceIndex = 0;
        currentSource = sources[currentSourceIndex]; // Встановлюємо перше джерело як поточне
        Lampa.Storage.set('source', currentSource); // Зберігаємо його в Storage
      }

      // Создаем новый div элемент
      var sourceDiv = $('<div>', {
        'class': 'head__action selector sources',
        'style': 'position: relative;',
        'html': "<div class=\"source-logo\" style=\"text-align: center;\"></div>"
      });

      // Добавляем новый div как первый дочерний элемент контейнера '.head__actions'
      $('.head__actions').prepend(sourceDiv);

      // Обновляем логотип плеера під іконкою, відображаємо наступний логотип
      var nextSourceIndex = (currentSourceIndex + 1) % sources.length; // Наступний індекс
      var nextSourceLogo = logos[sources[nextSourceIndex]]; // Логотип наступного джерела
      sourceDiv.find('.source-logo').html(nextSourceLogo); // Відображаємо логотип

      // Добавляем обработчик события 'hover:enter' для переключения
      sourceDiv.on('hover:enter', function () {
        currentSourceIndex = (currentSourceIndex + 1) % sources.length; // Переключаем индекс
        var selectedSource = sources[currentSourceIndex]; // Получаем выбранный
        Lampa.Storage.set('source', selectedSource); // Сохраняем выбор в Storage

        var nextLogo = logos[sources[(currentSourceIndex + 1) % sources.length]]; // Логотип наступного джерела
        sourceDiv.find('.source-logo').html(nextLogo); // Обновляем логотип под иконкой

        Lampa.Activity.replace({
          source: selectedSource,
          title: Lampa.Lang.translate("title_main") + ' - ' + selectedSource.toUpperCase() // Название источника в верхнем регистре
        });
      });
    }
    var sourceSwitch = {
      main: main$2
    };

    function main$1() {
      // Add CSS styles first
      var styleElement = $('<style>').text("\n        .card__lmerating {\n            position: absolute;\n            right: -0.8em;\n            padding: 0.4em 0.4em;\n            background: linear-gradient(90deg, #2c2c2c, #1a1a1a);\n            color: #fff;\n            font-size: 0.8em;\n            border-radius: 0.3em;\n            text-transform: uppercase;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n        }\n\n        @media (max-width: 768px) {\n            .card__lmerating {\n                right: 0.2em;\n                font-size: 0.7em;\n            }\n        }\n\n        @media (max-width: 480px) {\n            .card__lmerating {\n                right: 0.5em;\n                font-size: 0.6em;\n            }\n        }\n    ");
      $('head').append(styleElement);

      // Add ratings listener
      Lampa.Listener.follow("full", function (e) {
        var cardData = e.object;
        if (e.type == "complite") {
          var settings = {
            url: "https://api.mdblist.com/tmdb/".concat(cardData.method == 'tv' ? 'show' : cardData.method, "/").concat(cardData.id, "?apikey=").concat(Lampa.Storage.get('lme_ratings')),
            method: "GET",
            timeout: 0
          };
          $.ajax(settings).done(function (response) {
            var ratings = response.ratings;
            var validRatings = ratings.filter(function (rating) {
              if (cardData.source === 'cub') {
                return rating.value !== null && rating.source !== 'tmdb' && rating.source !== 'imdb';
              }
              return rating.value !== null && rating.source !== 'tmdb';
            });
            var posterContainer = $('.full-start-new__poster.loaded');
            var topOffset = 1;
            var spacing = 2;
            validRatings.forEach(function (rating, index) {
              if (rating.value) {
                var topPosition = topOffset + index * spacing;
                var ratingElement = $("<div class=\"card__lmerating ".concat(rating.source, "\" style=\"top: ").concat(topPosition, "em; bottom: auto;\">").concat(rating.source, ": ").concat(rating.value, "</div>"));
                posterContainer.append(ratingElement);
              }
            });
          });
        }
      });
    }
    var ratings = {
      main: main$1
    };

    function main() {
      console.log('StreamingDiscovery: Module initialized');

      // Add CSS styles first
      var styleElement = $('<style>').text("\n        .full-start-new__streaming-ratings {\n            display: flex;\n            align-items: center;\n            margin-bottom: 1em;\n            flex-wrap: wrap;\n        }\n        \n        .streaming-rating {\n            display: flex;\n            align-items: center;\n            margin-right: 1.5em;\n            margin-bottom: 0.5em;\n        }\n        \n        .streaming-rating__icon {\n            width: 2em;\n            height: 2em;\n            margin-right: 0.5em;\n            border-radius: 0.3em;\n            object-fit: contain;\n        }\n        \n        .streaming-rating__score {\n            font-size: 1.2em;\n            font-weight: bold;\n        }\n        \n        @media (max-width: 768px) {\n            .streaming-rating__icon {\n                width: 1.8em;\n                height: 1.8em;\n            }\n            \n            .streaming-rating__score {\n                font-size: 1.1em;\n            }\n        }\n        \n        @media (max-width: 480px) {\n            .streaming-rating__icon {\n                width: 1.5em;\n                height: 1.5em;\n            }\n            \n            .streaming-rating__score {\n                font-size: 1em;\n            }\n        }\n    ");
      $('head').append(styleElement);
      console.log('StreamingDiscovery: CSS styles added');

      // Add streaming discovery listener
      Lampa.Listener.follow("full", function (e) {
        console.log('StreamingDiscovery: "full" event received', e.type);
        var cardData = e.object;
        if (e.type == "complite") {
          console.log('StreamingDiscovery: Card data loaded', cardData);

          // Get IMDB ID from card data
          var imdbId = '';
          if (cardData.card.imdb_id) {
            imdbId = cardData.card.imdb_id;
            console.log('StreamingDiscovery: Found IMDB ID in cardData.imdb_id', imdbId);
          } else if (cardData.movie && cardData.movie.imdb_id) {
            imdbId = cardData.movie.imdb_id;
            console.log('StreamingDiscovery: Found IMDB ID in cardData.movie.imdb_id', imdbId);
          } else if (cardData.external_ids && cardData.external_ids.imdb_id) {
            imdbId = cardData.external_ids.imdb_id;
            console.log('StreamingDiscovery: Found IMDB ID in cardData.external_ids.imdb_id', imdbId);
          } else {
            console.log('StreamingDiscovery: No IMDB ID found in card data', cardData.card.imdb_id);
          }

          // If IMDB ID is found, make the API request
          if (imdbId) {
            // Ensure IMDB ID has the 'tt' prefix
            if (!imdbId.startsWith('tt')) {
              imdbId = 'tt' + imdbId;
              console.log('StreamingDiscovery: Added tt prefix to IMDB ID', imdbId);
            }
            var settings = {
              url: "https://apx.lme.isroot.in/destination/https://www.streamingdiscovery.com/api/public/cache/ratings/movie?id=".concat(imdbId),
              method: "GET",
              timeout: 0
            };
            console.log('StreamingDiscovery: Making API request', settings.url);
            $.ajax(settings).done(function (response) {
              console.log('StreamingDiscovery: API response received', response);
              if (response && response.Data) {
                var data = response.Data;
                console.log('StreamingDiscovery: Data extracted from response', data);
                var ratingServices = [{
                  name: 'imdb',
                  label: 'IMDb',
                  value: data.imdb
                }, {
                  name: 'metacritic',
                  label: 'Metacritic',
                  value: data.metacritic
                }, {
                  name: 'tmdb',
                  label: 'TMDB',
                  value: data.tmdb
                }, {
                  name: 'rotten-tomatoes',
                  label: 'Rotten Tomatoes',
                  value: data.rottenTomatoes
                }, {
                  name: 'trakt',
                  label: 'Trakt',
                  value: data.trakt
                }, {
                  name: 'film-affinity',
                  label: 'FilmAffinity',
                  value: data.filmAffinity
                }];
                console.log('StreamingDiscovery: Rating services prepared', ratingServices);

                // Create container for streaming ratings
                var ratingsContainer = $('<div class="full-start-new__streaming-ratings"></div>');

                // Add each available rating
                ratingServices.forEach(function (service) {
                  if (service.value) {
                    console.log('StreamingDiscovery: Adding rating for', service.name, service.value);
                    var ratingElement = $("\n                                    <div class=\"streaming-rating streaming-rating--".concat(service.name, "\">\n                                        <img class=\"streaming-rating__icon\" style=\"filter: grayscale(100%)\" src=\"https://www.streamingdiscovery.com/logo/").concat(service.name, ".png\" alt=\"").concat(service.label, "\">\n                                        <div class=\"streaming-rating__score\">").concat(service.value, "</div>\n                                    </div>\n                                "));
                    ratingsContainer.append(ratingElement);
                  }
                });

                // Find the rate line element and insert our ratings before it
                var rateLineElement = $('.full-start-new__rate-line');
                console.log('StreamingDiscovery: Rate line element found?', rateLineElement.length > 0);
                if (rateLineElement.length) {
                  // /* if (rateLineElement.length) {
                  //     rateLineElement.before(ratingsContainer);
                  //     console.log('StreamingDiscovery: Ratings container inserted before rate line');
                  // } else {
                  //     console.log('StreamingDiscovery: Rate line element not found, trying alternative insertion');
                  //     // Try alternative insertion points
                  //     const fullInfo = $('.full-start-new__details');
                  //     if (fullInfo.length) {
                  //         fullInfo.prepend(ratingsContainer);
                  //         console.log('StreamingDiscovery: Ratings container inserted at beginning of details');
                  //     } else {
                  //         console.log('StreamingDiscovery: No suitable insertion point found');
                  //     }
                  // }*/

                  // Replace the contents of the rate line element
                  rateLineElement.html(ratingsContainer);
                  console.log('StreamingDiscovery: Ratings container replaced contents of rate line');
                } else {
                  // Fallback insertion point
                  var fullInfo = $('.full-start-new__details');
                  if (fullInfo.length) {
                    fullInfo.prepend(ratingsContainer);
                    console.log('StreamingDiscovery: Ratings container inserted at beginning of details');
                  } else {
                    console.log('StreamingDiscovery: No suitable insertion point found');
                  }
                }
              } else {
                console.log('StreamingDiscovery: No data in response or invalid response format', response);
              }
            }).fail(function (jqXHR, textStatus, errorThrown) {
              console.error("StreamingDiscovery request failed:", textStatus, errorThrown);
              console.log('StreamingDiscovery: AJAX error details', jqXHR);
            });
          } else {
            console.log('StreamingDiscovery: No valid IMDB ID found, skipping API request');
          }
        }
      });
      console.log('StreamingDiscovery: Event listener registered');
    }
    var streamingdiscovery = {
      main: main
    };

    var manifest = {
      type: "other",
      version: "0.0.5",
      author: '@lme_chat',
      name: "Lampa Movie Enhancer",
      description: "Some tweaks for movie content",
      component: "lme"
    };
    function add() {
      Lang.main();
      Lampa.Manifest.plugins = manifest;
      CONFIG.main();
      //if(Lampa.Storage.get('lme_quality')) Lampa.Storage.get('lme_quality')
      if (Lampa.Storage.get('lme_quality') == true) localStorage.removeItem('lme_quality');
      if (Lampa.Storage.get('lme_wmquality')) StreamQuality.main();
      if (Lampa.Storage.get('lme_endata') == true) englishData.main();
      if (Lampa.Storage.get('lme_averageRuntime') == true) averageRuntime.main();
      if (Lampa.Storage.get('lme_switchsource') == true) sourceSwitch.main();
      if (Lampa.Storage.get('lme_showbutton') == true) showButton.main();
      if (Lampa.Storage.get('lme_ratings') !== null && Lampa.Storage.get('lme_ratings') !== undefined && Lampa.Storage.get('lme_ratings') !== '') ratings.main();
      if (Lampa.Storage.get('lme_streamingdiscovery') == true) streamingdiscovery.main();
    }
    function startPlugin() {
      window.plugin_lme_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_lme_ready) startPlugin();

})();
