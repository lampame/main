(function () {
	'use strict';

	if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

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

	var esnext_globalThis = {};

	var es_globalThis = {};

	var globalThis$d = require('../internals/global-this');
	var getOwnPropertyDescriptor$2 = require('../internals/object-get-own-property-descriptor').f;
	var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
	var defineBuiltIn$6 = require('../internals/define-built-in');
	var defineGlobalProperty$1 = require('../internals/define-global-property');
	var copyConstructorProperties$1 = require('../internals/copy-constructor-properties');
	var isForced$2 = require('../internals/is-forced');

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
	    target = globalThis$d;
	  } else if (STATIC) {
	    target = globalThis$d[TARGET] || defineGlobalProperty$1(TARGET, {});
	  } else {
	    target = globalThis$d[TARGET] && globalThis$d[TARGET].prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$2(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
	      copyConstructorProperties$1(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$6(target, key, sourceProperty, options);
	  }
	};

	var _export = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$8 = /*@__PURE__*/getAugmentedNamespace(_export);

	var hasRequiredEs_globalThis;

	function requireEs_globalThis () {
		if (hasRequiredEs_globalThis) return es_globalThis;
		hasRequiredEs_globalThis = 1;

		var $ = require$$0$8;
		var globalThis = require$$3$4;

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

	var globalThis$c = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$4 = /*@__PURE__*/getAugmentedNamespace(globalThis$c);

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

		var globalThis = require$$3$4;

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
		var globalThis = require$$3$4;
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

	var fails$e;
	var hasRequiredFails;

	function requireFails () {
		if (hasRequiredFails) return fails$e;
		hasRequiredFails = 1;

		fails$e = function (exec) {
		  try {
		    return !!exec();
		  } catch (error) {
		    return true;
		  }
		};
		return fails$e;
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

	var isNullOrUndefined;
	var hasRequiredIsNullOrUndefined;

	function requireIsNullOrUndefined () {
		if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
		hasRequiredIsNullOrUndefined = 1;

		// we can't use just `it == null` since of `document.all` special case
		// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
		isNullOrUndefined = function (it) {
		  return it === null || it === undefined;
		};
		return isNullOrUndefined;
	}

	var requireObjectCoercible$4;
	var hasRequiredRequireObjectCoercible;

	function requireRequireObjectCoercible () {
		if (hasRequiredRequireObjectCoercible) return requireObjectCoercible$4;
		hasRequiredRequireObjectCoercible = 1;

		var isNullOrUndefined = requireIsNullOrUndefined();
		var $TypeError = TypeError;

		// `RequireObjectCoercible` abstract operation
		// https://tc39.es/ecma262/#sec-requireobjectcoercible
		requireObjectCoercible$4 = function (it) {
		  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
		  return it;
		};
		return requireObjectCoercible$4;
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

	var $$f = require('../internals/export');
	var exec$3 = require('../internals/regexp-exec');

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$f({
	  target: 'RegExp',
	  proto: true,
	  forced: /./.exec !== exec$3
	}, {
	  exec: exec$3
	});

	var $$e = require('../internals/export');
	var fails$d = require('../internals/fails');
	var isArray$3 = require('../internals/is-array');
	var isObject$5 = require('../internals/is-object');
	var toObject = require('../internals/to-object');
	var lengthOfArrayLike$2 = require('../internals/length-of-array-like');
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
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$2 >= 51 || !fails$d(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var isConcatSpreadable = function isConcatSpreadable(O) {
	  if (!isObject$5(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$3(O);
	};
	var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$e({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED$1
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$2(E);
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

	var apply$2 = require('../internals/function-apply');
	var call$a = require('../internals/function-call');
	var uncurryThis$e = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$3 = require('../internals/fix-regexp-well-known-symbol-logic');
	var fails$c = require('../internals/fails');
	var anObject$9 = require('../internals/an-object');
	var isCallable$b = require('../internals/is-callable');
	var isObject$4 = require('../internals/is-object');
	var toIntegerOrInfinity$1 = require('../internals/to-integer-or-infinity');
	var toLength$3 = require('../internals/to-length');
	var toString$9 = require('../internals/to-string');
	var requireObjectCoercible$3 = require('../internals/require-object-coercible');
	var advanceStringIndex$2 = require('../internals/advance-string-index');
	var getMethod$3 = require('../internals/get-method');
	var getSubstitution = require('../internals/get-substitution');
	var getRegExpFlags$4 = require('../internals/regexp-get-flags');
	var regExpExec$3 = require('../internals/regexp-exec-abstract');
	var wellKnownSymbol$7 = require('../internals/well-known-symbol');
	var REPLACE = wellKnownSymbol$7('replace');
	var max = Math.max;
	var min$1 = Math.min;
	var concat = uncurryThis$e([].concat);
	var push$3 = uncurryThis$e([].push);
	var stringIndexOf$3 = uncurryThis$e(''.indexOf);
	var stringSlice$5 = uncurryThis$e(''.slice);
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
	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$c(function () {
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
	fixRegExpWellKnownSymbolLogic$3('replace', function (_, nativeReplace, maybeCallNative) {
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
	  return [
	  // `String.prototype.replace` method
	  // https://tc39.es/ecma262/#sec-string.prototype.replace
	  function replace(searchValue, replaceValue) {
	    var O = requireObjectCoercible$3(this);
	    var replacer = isObject$4(searchValue) ? getMethod$3(searchValue, REPLACE) : undefined;
	    return replacer ? call$a(replacer, searchValue, O, replaceValue) : call$a(nativeReplace, toString$9(O), searchValue, replaceValue);
	  },
	  // `RegExp.prototype[@@replace]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	  function (string, replaceValue) {
	    var rx = anObject$9(this);
	    var S = toString$9(string);
	    var functionalReplace = isCallable$b(replaceValue);
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
	      result = regExpExec$3(rx, S);
	      if (result === null) break;
	      push$3(results, result);
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
	      for (var j = 1; j < result.length; j++) push$3(captures, maybeToString(result[j]));
	      var namedCaptures = result.groups;
	      if (functionalReplace) {
	        var replacerArgs = concat([matched], captures, position, S);
	        if (namedCaptures !== undefined) push$3(replacerArgs, namedCaptures);
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
	var globalThis$b = require('../internals/global-this');
	var uncurryThis$d = require('../internals/function-uncurry-this');
	var isForced$1 = require('../internals/is-forced');
	var inheritIfRequired = require('../internals/inherit-if-required');
	var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
	var create = require('../internals/object-create');
	var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
	var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
	var isRegExp = require('../internals/is-regexp');
	var toString$8 = require('../internals/to-string');
	var getRegExpFlags$3 = require('../internals/regexp-get-flags');
	var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
	var proxyAccessor = require('../internals/proxy-accessor');
	var defineBuiltIn$5 = require('../internals/define-built-in');
	var fails$b = require('../internals/fails');
	var hasOwn$4 = require('../internals/has-own-property');
	var enforceInternalState$1 = require('../internals/internal-state').enforce;
	var setSpecies$1 = require('../internals/set-species');
	var wellKnownSymbol$6 = require('../internals/well-known-symbol');
	var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
	var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
	var MATCH = wellKnownSymbol$6('match');
	var NativeRegExp = globalThis$b.RegExp;
	var RegExpPrototype$1 = NativeRegExp.prototype;
	var SyntaxError = globalThis$b.SyntaxError;
	var exec$2 = uncurryThis$d(RegExpPrototype$1.exec);
	var charAt$1 = uncurryThis$d(''.charAt);
	var replace$3 = uncurryThis$d(''.replace);
	var stringIndexOf$2 = uncurryThis$d(''.indexOf);
	var stringSlice$4 = uncurryThis$d(''.slice);
	// TODO: Use only proper RegExpIdentifierName
	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;
	var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
	var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
	var BASE_FORCED = DESCRIPTORS$7 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$b(function () {
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
	        if (groupname === '' || hasOwn$4(names, groupname)) {
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
	if (isForced$1('RegExp', BASE_FORCED)) {
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
	    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
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
	  defineBuiltIn$5(globalThis$b, 'RegExp', RegExpWrapper, {
	    constructor: true
	  });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies$1('RegExp');

	var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
	var defineBuiltIn$4 = require('../internals/define-built-in');
	var anObject$8 = require('../internals/an-object');
	var $toString$1 = require('../internals/to-string');
	var fails$a = require('../internals/fails');
	var getRegExpFlags$2 = require('../internals/regexp-get-flags');
	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];
	var NOT_GENERIC = fails$a(function () {
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
	  defineBuiltIn$4(RegExpPrototype, TO_STRING, function toString() {
	    var R = anObject$8(this);
	    var pattern = $toString$1(R.source);
	    var flags = $toString$1(getRegExpFlags$2(R));
	    return '/' + pattern + '/' + flags;
	  }, {
	    unsafe: true
	  });
	}

	var uncurryThis$c = require('../internals/function-uncurry-this');
	var id = 0;
	var postfix = Math.random();
	var toString$7 = uncurryThis$c(1.1.toString);
	module.exports = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
	};

	var uid$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(uid$2);

	var es_symbol = {};

	// `Symbol.prototype.description` getter
	var $$d = require('../internals/export');
	var DESCRIPTORS$6 = require('../internals/descriptors');
	var globalThis$a = require('../internals/global-this');
	var call$9 = require('../internals/function-call');
	var uncurryThis$b = require('../internals/function-uncurry-this');
	var hasOwn$3 = require('../internals/has-own-property');
	var isCallable$a = require('../internals/is-callable');
	var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
	var toString$6 = require('../internals/to-string');
	var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor');
	var copyConstructorProperties = require('../internals/copy-constructor-properties');
	var NativeSymbol = globalThis$a.Symbol;
	var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
	if (DESCRIPTORS$6 && isCallable$a(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
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
	      var symbol = call$9(nativeFor, this, stringKey);
	      if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
	      return symbol;
	    }
	  }['for'];
	  SymbolWrapper.prototype = SymbolPrototype$1;
	  SymbolPrototype$1.constructor = SymbolWrapper;
	  var NATIVE_SYMBOL$3 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$b(SymbolPrototype$1.valueOf);
	  var symbolDescriptiveString = uncurryThis$b(SymbolPrototype$1.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$2 = uncurryThis$b(''.replace);
	  var stringSlice$3 = uncurryThis$b(''.slice);
	  defineBuiltInAccessor$2(SymbolPrototype$1, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$3(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL$3 ? stringSlice$3(string, 7, -1) : replace$2(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });
	  $$d({
	    global: true,
	    constructor: true,
	    forced: true
	  }, {
	    Symbol: SymbolWrapper
	  });
	}

	var globalThis$9 = require('../internals/global-this');
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
	    handlePrototype$1(globalThis$9[COLLECTION_NAME$1] && globalThis$9[COLLECTION_NAME$1].prototype);
	  }
	}
	handlePrototype$1(DOMTokenListPrototype$1);

	var $$c = require('../internals/export');
	var globalThis$8 = require('../internals/global-this');
	var call$8 = require('../internals/function-call');
	var uncurryThis$a = require('../internals/function-uncurry-this');
	var IS_PURE$3 = require('../internals/is-pure');
	var DESCRIPTORS$5 = require('../internals/descriptors');
	var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
	var fails$9 = require('../internals/fails');
	var hasOwn$2 = require('../internals/has-own-property');
	var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
	var anObject$7 = require('../internals/an-object');
	var toIndexedObject$2 = require('../internals/to-indexed-object');
	var toPropertyKey$2 = require('../internals/to-property-key');
	var $toString = require('../internals/to-string');
	var createPropertyDescriptor$2 = require('../internals/create-property-descriptor');
	var nativeObjectCreate = require('../internals/object-create');
	var objectKeys$1 = require('../internals/object-keys');
	var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
	var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
	var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
	var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
	var definePropertyModule = require('../internals/object-define-property');
	var definePropertiesModule = require('../internals/object-define-properties');
	var propertyIsEnumerableModule$1 = require('../internals/object-property-is-enumerable');
	var defineBuiltIn$3 = require('../internals/define-built-in');
	var defineBuiltInAccessor$1 = require('../internals/define-built-in-accessor');
	var shared = require('../internals/shared');
	var sharedKey$1 = require('../internals/shared-key');
	var hiddenKeys$1 = require('../internals/hidden-keys');
	var uid$1 = require('../internals/uid');
	var wellKnownSymbol$5 = require('../internals/well-known-symbol');
	var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
	var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
	var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
	var setToStringTag$3 = require('../internals/set-to-string-tag');
	var InternalStateModule$1 = require('../internals/internal-state');
	var $forEach = require('../internals/array-iteration').forEach;
	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = globalThis$8.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var RangeError = globalThis$8.RangeError;
	var TypeError$1 = globalThis$8.TypeError;
	var QObject = globalThis$8.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$2 = uncurryThis$a([].push);
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
	var setSymbolDescriptor = DESCRIPTORS$5 && fails$9(function () {
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
	  anObject$7(O);
	  var key = toPropertyKey$2(P);
	  anObject$7(Attributes);
	  if (hasOwn$2(AllSymbols, key)) {
	    // first definition - default non-enumerable; redefinition - preserve existing state
	    if (!('enumerable' in Attributes) ? !hasOwn$2(O, key) || hasOwn$2(O, HIDDEN) && O[HIDDEN][key] : !Attributes.enumerable) {
	      if (!hasOwn$2(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$2(1, nativeObjectCreate(null)));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$2(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$2(0, false)
	      });
	    }
	    return setSymbolDescriptor(O, key, Attributes);
	  }
	  return nativeDefineProperty(O, key, Attributes);
	};
	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$7(O);
	  var properties = toIndexedObject$2(Properties);
	  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS$5 || call$8($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
	  });
	  return O;
	};
	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$2(V);
	  var enumerable = call$8(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype && hasOwn$2(AllSymbols, P) && !hasOwn$2(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$2(this, P) || !hasOwn$2(AllSymbols, P) || hasOwn$2(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};
	var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$2(O);
	  var key = toPropertyKey$2(P);
	  if (it === ObjectPrototype && hasOwn$2(AllSymbols, key) && !hasOwn$2(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwn$2(AllSymbols, key) && !(hasOwn$2(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!hasOwn$2(AllSymbols, key) && !hasOwn$2(hiddenKeys$1, key)) push$2(result, key);
	  });
	  return result;
	};
	var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwn$2(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$2(ObjectPrototype, key))) {
	      push$2(result, AllSymbols[key]);
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
	    var tag = uid$1(description);
	    var _setter = function setter(value) {
	      var $this = this === undefined ? globalThis$8 : this;
	      if ($this === ObjectPrototype) call$8(_setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$2($this, HIDDEN) && hasOwn$2($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor$2(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError)) throw error;
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
	  defineBuiltIn$3(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });
	  defineBuiltIn$3($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$1(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty$1;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
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
	      defineBuiltIn$3(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
	        unsafe: true
	      });
	    }
	  }
	}
	$$c({
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
	$$c({
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
	$$c({
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
	$$c({
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
	setToStringTag$3($Symbol, SYMBOL);
	hiddenKeys$1[HIDDEN] = true;

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

	var isCallable$9 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$5$5 = /*@__PURE__*/getAugmentedNamespace(isCallable$9);

	var getBuiltIn$4;
	var hasRequiredGetBuiltIn;

	function requireGetBuiltIn () {
		if (hasRequiredGetBuiltIn) return getBuiltIn$4;
		hasRequiredGetBuiltIn = 1;

		var globalThis = require$$3$4;
		var isCallable = require$$5$5;
		var aFunction = function aFunction(argument) {
		  return isCallable(argument) ? argument : undefined;
		};
		getBuiltIn$4 = function (namespace, method) {
		  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
		};
		return getBuiltIn$4;
	}

	var uncurryThis$9 = require('../internals/function-uncurry-this');
	var toString$5 = uncurryThis$9({}.toString);
	var stringSlice$2 = uncurryThis$9(''.slice);
	module.exports = function (it) {
	  return stringSlice$2(toString$5(it), 8, -1);
	};

	var classofRaw = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

	var classof$5;
	var hasRequiredClassof;

	function requireClassof () {
		if (hasRequiredClassof) return classof$5;
		hasRequiredClassof = 1;

		var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
		var isCallable = require$$5$5;
		var classofRaw = require$$0$7;
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

		var $ = require$$0$8;
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
	var isCallable$8 = require('../internals/is-callable');
	var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
	var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
	var $Object$1 = Object;
	module.exports = USE_SYMBOL_AS_UID ? function (it) {
	  return _typeof(it) == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$3('Symbol');
	  return isCallable$8($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$1(it));
	};

	var isSymbol$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(isSymbol$1);

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

		var $ = require$$0$8;
		var hasOwn = requireHasOwnProperty();
		var isSymbol = require$$2$2;
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

	var $$b = require('../internals/export');
	var getBuiltIn$2 = require('../internals/get-built-in');
	var apply$1 = require('../internals/function-apply');
	var call$7 = require('../internals/function-call');
	var uncurryThis$8 = require('../internals/function-uncurry-this');
	var fails$8 = require('../internals/fails');
	var isArray$2 = require('../internals/is-array');
	var isCallable$7 = require('../internals/is-callable');
	var isRawJSON = require('../internals/is-raw-json');
	var isSymbol = require('../internals/is-symbol');
	var classof$4 = require('../internals/classof-raw');
	var toString$3 = require('../internals/to-string');
	var arraySlice$1 = require('../internals/array-slice');
	var parseJSONString = require('../internals/parse-json-string');
	var uid = require('../internals/uid');
	var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
	var NATIVE_RAW_JSON = require('../internals/native-raw-json');
	var $String$2 = String;
	var $stringify = getBuiltIn$2('JSON', 'stringify');
	var exec$1 = uncurryThis$8(/./.exec);
	var charAt = uncurryThis$8(''.charAt);
	var charCodeAt = uncurryThis$8(''.charCodeAt);
	var replace$1 = uncurryThis$8(''.replace);
	var slice = uncurryThis$8(''.slice);
	var push$1 = uncurryThis$8([].push);
	var numberToString = uncurryThis$8(1.1.toString);
	var surrogates = /[\uD800-\uDFFF]/g;
	var leadingSurrogates = /^[\uD800-\uDBFF]$/;
	var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
	var MARK = uid();
	var MARK_LENGTH = MARK.length;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$8(function () {
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
	var ILL_FORMED_UNICODE = fails$8(function () {
	  return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
	});
	var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
	  var args = arraySlice$1(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$7($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$7($replacer)) value = call$7($replacer, this, $String$2(key), value);
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
	  if (isCallable$7(replacer)) return replacer;
	  if (!isArray$2(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$1(keys, element);else if (typeof element == 'number' || classof$4(element) === 'Number' || classof$4(element) === 'String') push$1(keys, toString$3(element));
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
	if ($stringify) $$b({
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
	      var v = isCallable$7(replacerFunction) ? call$7(replacerFunction, this, $String$2(key), value) : value;
	      return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push$1(rawStrings, v.rawJSON) - 1) : v;
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

	var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertySymbols);

	var hasRequiredEs_object_getOwnPropertySymbols;

	function requireEs_object_getOwnPropertySymbols () {
		if (hasRequiredEs_object_getOwnPropertySymbols) return es_object_getOwnPropertySymbols;
		hasRequiredEs_object_getOwnPropertySymbols = 1;

		var $ = require$$0$8;
		var NATIVE_SYMBOL = require$$4$1;
		var fails = requireFails();
		var getOwnPropertySymbolsModule = require$$3$2;
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
	var fails$7 = require('../internals/fails');
	var globalThis$7 = require('../internals/global-this');
	var $String$1 = globalThis$7.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	module.exports = !!Object.getOwnPropertySymbols && !fails$7(function () {
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

		var globalThis = require$$3$4;
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

	var call$6 = require('../internals/function-call');
	var uncurryThis$7 = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$6 = require('../internals/an-object');
	var isObject$3 = require('../internals/is-object');
	var requireObjectCoercible$2 = require('../internals/require-object-coercible');
	var speciesConstructor$2 = require('../internals/species-constructor');
	var advanceStringIndex$1 = require('../internals/advance-string-index');
	var toLength$2 = require('../internals/to-length');
	var toString$2 = require('../internals/to-string');
	var getMethod$2 = require('../internals/get-method');
	var getRegExpFlags$1 = require('../internals/regexp-get-flags');
	var regExpExec$2 = require('../internals/regexp-exec-abstract');
	var stickyHelpers = require('../internals/regexp-sticky-helpers');
	var fails$6 = require('../internals/fails');
	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min = Math.min;
	var push = uncurryThis$7([].push);
	var stringSlice$1 = uncurryThis$7(''.slice);
	var stringIndexOf$1 = uncurryThis$7(''.indexOf);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$6(function () {
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
	fixRegExpWellKnownSymbolLogic$2('split', function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
	    return separator === undefined && limit === 0 ? [] : call$6(nativeSplit, this, separator, limit);
	  } : nativeSplit;
	  return [
	  // `String.prototype.split` method
	  // https://tc39.es/ecma262/#sec-string.prototype.split
	  function split(separator, limit) {
	    var O = requireObjectCoercible$2(this);
	    var splitter = isObject$3(separator) ? getMethod$2(separator, SPLIT) : undefined;
	    return splitter ? call$6(splitter, separator, O, limit) : call$6(internalSplit, toString$2(O), separator, limit);
	  },
	  // `RegExp.prototype[@@split]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (string, limit) {
	    var rx = anObject$6(this);
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
	    if (S.length === 0) return regExpExec$2(splitter, S) === null ? [S] : [];
	    var p = 0;
	    var q = 0;
	    var A = [];
	    while (q < S.length) {
	      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
	      var z = regExpExec$2(splitter, UNSUPPORTED_Y ? stringSlice$1(S, q) : S);
	      var e;
	      if (z === null || (e = min(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
	        q = advanceStringIndex$1(S, q, unicodeMatching);
	      } else {
	        push(A, stringSlice$1(S, p, q));
	        if (A.length === lim) return A;
	        for (var i = 1; i <= z.length - 1; i++) {
	          push(A, z[i]);
	          if (A.length === lim) return A;
	        }
	        q = p = e;
	      }
	    }
	    push(A, stringSlice$1(S, p));
	    return A;
	  }];
	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var uncurryThis$6 = require('../internals/function-uncurry-this');
	var fails$5 = require('../internals/fails');
	var classof$3 = require('../internals/classof-raw');
	var $Object = Object;
	var split = uncurryThis$6(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	module.exports = fails$5(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$3(it) === 'String' ? split(it, '') : $Object(it);
	} : $Object;

	var indexedObject = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

	var toIndexedObject$1;
	var hasRequiredToIndexedObject;

	function requireToIndexedObject () {
		if (hasRequiredToIndexedObject) return toIndexedObject$1;
		hasRequiredToIndexedObject = 1;

		// toObject with fallback for non-array-like ES3 strings
		var IndexedObject = require$$0$6;
		var requireObjectCoercible = requireRequireObjectCoercible();
		toIndexedObject$1 = function (it) {
		  return IndexedObject(requireObjectCoercible(it));
		};
		return toIndexedObject$1;
	}

	var DESCRIPTORS$4 = require('../internals/descriptors');
	var call$5 = require('../internals/function-call');
	var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
	var createPropertyDescriptor$1 = require('../internals/create-property-descriptor');
	var toIndexedObject = require('../internals/to-indexed-object');
	var toPropertyKey$1 = require('../internals/to-property-key');
	var hasOwn$1 = require('../internals/has-own-property');
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
	  if (hasOwn$1(O, P)) return createPropertyDescriptor$1(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertyDescriptor);

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

		var $ = require$$0$8;
		var fails = requireFails();
		var toIndexedObject = requireToIndexedObject();
		var nativeGetOwnPropertyDescriptor = require$$3$1.f;
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
	var anObject$5 = require('../internals/an-object');
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
	  anObject$5(O);
	  P = toPropertyKey(P);
	  anObject$5(Attributes);
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
	  anObject$5(O);
	  P = toPropertyKey(P);
	  anObject$5(Attributes);
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

	var require$$1$4 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

	var wellKnownSymbolDefine;
	var hasRequiredWellKnownSymbolDefine;

	function requireWellKnownSymbolDefine () {
		if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
		hasRequiredWellKnownSymbolDefine = 1;

		var path = requirePath();
		var hasOwn = requireHasOwnProperty();
		var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
		var defineProperty = require$$1$4.f;
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

	var isCallable$6 = require('../internals/is-callable');
	module.exports = function (it) {
	  return _typeof(it) == 'object' ? it !== null : isCallable$6(it);
	};

	var isObject$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(isObject$2);

	var anObject$4;
	var hasRequiredAnObject;

	function requireAnObject () {
		if (hasRequiredAnObject) return anObject$4;
		hasRequiredAnObject = 1;

		var isObject = require$$1$3;
		var $String = String;
		var $TypeError = TypeError;

		// `Assert: Type(argument) is Object`
		anObject$4 = function (argument) {
		  if (isObject(argument)) return argument;
		  throw new $TypeError($String(argument) + ' is not an object');
		};
		return anObject$4;
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

		var $ = require$$0$8;
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
		var definePropertyModule = require$$1$4;
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

	var hiddenKeys;
	var hasRequiredHiddenKeys;

	function requireHiddenKeys () {
		if (hasRequiredHiddenKeys) return hiddenKeys;
		hasRequiredHiddenKeys = 1;

		hiddenKeys = {};
		return hiddenKeys;
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

		var globalThis = require$$3$4;
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
		var uid = require$$3$3;
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
		var defineProperty = require$$1$4.f;
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

	var globalThis$6 = require('../internals/global-this');
	var isCallable$5 = require('../internals/is-callable');
	var WeakMap = globalThis$6.WeakMap;
	module.exports = isCallable$5(WeakMap) && /native code/.test(String(WeakMap));

	var weakMapBasicDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(weakMapBasicDetection);

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
		var definePropertyModule = require$$1$4;
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

		var NATIVE_WEAK_MAP = require$$0$5;
		var globalThis = require$$3$4;
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

	var globalThis$5 = require('../internals/global-this');
	var DOMIterables = require('../internals/dom-iterables');
	var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
	var ArrayIteratorMethods = require('../modules/es.array.iterator');
	var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');
	var setToStringTag$2 = require('../internals/set-to-string-tag');
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
	    setToStringTag$2(CollectionPrototype, COLLECTION_NAME, true);
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
	  handlePrototype(globalThis$5[COLLECTION_NAME] && globalThis$5[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}
	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	var $$a = require('../internals/export');
	var call$4 = require('../internals/function-call');
	var IS_PURE$2 = require('../internals/is-pure');
	var FunctionName = require('../internals/function-name');
	var isCallable$4 = require('../internals/is-callable');
	var createIteratorConstructor = require('../internals/iterator-create-constructor');
	var getPrototypeOf = require('../internals/object-get-prototype-of');
	var setPrototypeOf = require('../internals/object-set-prototype-of');
	var setToStringTag$1 = require('../internals/set-to-string-tag');
	var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
	var defineBuiltIn$2 = require('../internals/define-built-in');
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
	        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$1])) {
	          defineBuiltIn$2(CurrentIteratorPrototype, ITERATOR$1, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
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
	        return call$4(nativeIterator, this);
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
	        defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$a({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  // define iterator
	  if ((!IS_PURE$2 || FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    defineBuiltIn$2(IterablePrototype, ITERATOR$1, defaultIterator, {
	      name: DEFAULT
	    });
	  }
	  Iterators[NAME] = defaultIterator;
	  return methods;
	};

	var iteratorDefine = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3 = /*@__PURE__*/getAugmentedNamespace(iteratorDefine);

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
		var defineProperty = require$$1$4.f;
		var defineIterator = require$$3;
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

		var $ = require$$0$8;
		var trunc = require$$0$4;

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

	var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(mathTrunc);

	var toIntegerOrInfinity;
	var hasRequiredToIntegerOrInfinity;

	function requireToIntegerOrInfinity () {
		if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
		hasRequiredToIntegerOrInfinity = 1;

		var trunc = require$$0$4;

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
		var defineIterator = require$$3;
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

		var globalThis = require$$3$4;
		var shared = requireShared();
		var hasOwn = requireHasOwnProperty();
		var uid = require$$3$3;
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

	var uncurryThis$5 = require('../internals/function-uncurry-this');
	var fails$4 = require('../internals/fails');
	var isCallable$3 = require('../internals/is-callable');
	var hasOwn = require('../internals/has-own-property');
	var DESCRIPTORS$2 = require('../internals/descriptors');
	var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
	var inspectSource$2 = require('../internals/inspect-source');
	var InternalStateModule = require('../internals/internal-state');
	var enforceInternalState = InternalStateModule.enforce;
	var getInternalState = InternalStateModule.get;
	var $String = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty = Object.defineProperty;
	var stringSlice = uncurryThis$5(''.slice);
	var replace = uncurryThis$5(''.replace);
	var join = uncurryThis$5([].join);
	var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$4(function () {
	  return defineProperty(function () {/* empty */}, 'length', {
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
	  if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
	    if (DESCRIPTORS$2) defineProperty(value, 'name', {
	      value: name,
	      configurable: true
	    });else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
	    defineProperty(value, 'length', {
	      value: options.arity
	    });
	  }
	  try {
	    if (options && hasOwn(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$2) defineProperty(value, 'prototype', {
	        writable: false
	      });
	      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) {/* empty */}
	  var state = enforceInternalState(value);
	  if (!hasOwn(state, 'source')) {
	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
	  }
	  return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn(function toString() {
	  return isCallable$3(this) && getInternalState(this).source || inspectSource$2(this);
	}, 'toString');

	var makeBuiltIn$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

	var defineBuiltIn$1;
	var hasRequiredDefineBuiltIn;

	function requireDefineBuiltIn () {
		if (hasRequiredDefineBuiltIn) return defineBuiltIn$1;
		hasRequiredDefineBuiltIn = 1;

		var isCallable = require$$5$5;
		var definePropertyModule = require$$1$4;
		var makeBuiltIn = require$$0$3;
		var defineGlobalProperty = requireDefineGlobalProperty();
		defineBuiltIn$1 = function (O, key, value, options) {
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
		return defineBuiltIn$1;
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

	var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(objectToString);

	var hasRequiredEs_object_toString;

	function requireEs_object_toString () {
		if (hasRequiredEs_object_toString) return es_object_toString;
		hasRequiredEs_object_toString = 1;

		var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
		var defineBuiltIn = requireDefineBuiltIn();
		var toString = require$$2$1;

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

	var $$9 = require('../internals/export');
	var $filter = require('../internals/array-iteration').filter;
	var arrayMethodHasSpeciesSupport$2 = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$9({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1
	}, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$8 = require('../internals/export');
	var uncurryThis$4 = require('../internals/function-uncurry-this-clause');
	var $indexOf = require('../internals/array-includes').indexOf;
	var arrayMethodIsStrict = require('../internals/array-method-is-strict');
	var nativeIndexOf = uncurryThis$4([].indexOf);
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$8({
	  target: 'Array',
	  proto: true,
	  forced: FORCED
	}, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
	  }
	});

	function data() {
	  Lampa.Lang.add({
	    nc_title: {
	      ru: "Добавить категории",
	      en: "Add category",
	      uk: "Додати категорії",
	      zh: "新类别" // Chinese translation
	    },
	    nc_settings_thanks: {
	      ru: "Подяка",
	      en: "Thanks",
	      uk: "Подяка",
	      zh: "感谢"
	    },
	    nc_settings_thanks_description: {
	      ru: "Поддержка развития плагина добровольная. Спасибо за вклад.",
	      en: "Support for plugin development is voluntary. Thank you for your contribution.",
	      uk: "Підтримка розвитку плагіна добровільна. Дякуємо за внесок.",
	      zh: "对插件开发的支持是自愿的，感谢您的贡献。"
	    },
	    ncInfo: {
	      ru: "О плагине",
	      en: "About plugin",
	      uk: "Про розширення",
	      zh: "关于插件" // Chinese translation
	    },
	    ncInfoGr: {
	      ru: "Группа плагина",
	      en: "Plugin group",
	      uk: "Група плагіна",
	      zh: "Plugin group" // Chinese translation
	    },
	    ncInfoDesc: {
	      ru: "Плагин добавляет новые категории с контентом, сериалы добавляются двух категорий Топ и Новинки по стриминг сервисам. В некоторых категориях возможны дубликаты, так как сериал может выйти на нескольких стриминг сервисах.",
	      en: "The plugin adds new categories with content, series are added to two categories, Top and New, based on streaming services. In some categories, duplicates are possible, since a series can be released on several streaming services.",
	      uk: "Плагін додає нові категорії з контентом, серіали додаються до двох категорій, Топ і Новинки, на основі потокових сервісів. У деяких категоріях можливі дублікати, оскільки серіал може вийти на кількох потокових сервісах.",
	      zh: "该插件添加了带有内容的新类别，根据流媒体服务将电视剧添加到两个类别（热门和新剧）中。在某些类别中可能存在重复项，因为电视剧可以在多个流媒体服务中发布。" // Chinese translation
	    },
	    nc_choice: {
	      ru: "Выбрать раздел",
	      en: "Choice category",
	      uk: "Обрати розділ",
	      zh: "选择类别" // Chinese translation
	    },
	    nc_country: {
	      ru: "Страна",
	      en: "Country",
	      uk: "Країна",
	      zh: "国家" // Chinese translation
	    },
	    nc_subuniversal: {
	      ru: "Общие",
	      en: "General",
	      uk: "Загальні",
	      zh: "一般情况" // Chinese translation
	    },
	    nc_submovie: {
	      ru: "Кино",
	      en: "Movie",
	      uk: "Кіно",
	      zh: "Movie" // Chinese translation
	    },
	    nc_subtv: {
	      ru: "TV Топ",
	      en: "TV Тор",
	      uk: "TV Топ",
	      zh: "TV Тор" // Chinese translation
	    },
	    nc_newsubtv: {
	      ru: "TV Новинки",
	      en: "TV New",
	      uk: "TV Новинки",
	      zh: "TV New" // Chinese translation
	    },
	    nc_networksList: {
	      ru: "TV Show стриминги",
	      en: "TV Show Networks",
	      uk: "TV Show Networks",
	      zh: "TV Show Networks" // Chinese translation
	    },
	    nc_networksListGeoAdd: {
	      ru: "Страна успешно выбрана",
	      en: "The country has been successfully selected",
	      uk: "Країну успішно обрано",
	      zh: "该国已成功入选" // Chinese translation
	    },
	    nc_networksListGeoDeleted: {
	      ru: "Страна успешно удалена",
	      en: "Country successfully deleted",
	      uk: "Країну успішно видалено",
	      zh: "该国家已被成功删除" // Chinese translation
	    },
	    nc_concert: {
	      ru: "Концерты",
	      en: "Concerts",
	      uk: "Концерты",
	      zh: "音乐会" // Chinese translation
	    },
	    nc_cartoon: {
	      ru: "Мультфильмы",
	      en: "Cartoons",
	      uk: "Мультфільми",
	      zh: "漫画" // Chinese translation
	    },
	    nc_documentary: {
	      ru: "Документалки",
	      en: "Documentaries",
	      uk: "Документальні",
	      zh: "纪录片" // Chinese translation
	    },
	    nc_documentary2: {
	      ru: "Документалки 2",
	      en: "Documentaries 2",
	      uk: "Документальні 2",
	      zh: "纪录片 2" // Chinese translation
	    },
	    nc_toptv: {
	      ru: "Top",
	      en: "Top",
	      uk: "Top",
	      zh: "Top" // Chinese translation
	    },
	    nc_newtv: {
	      ru: "New",
	      en: "New",
	      uk: "New",
	      zh: "New" // Chinese translation
	    },
	    nc_topmovie: {
	      ru: " Top",
	      en: " Top",
	      uk: " Top",
	      zh: " Top" // Chinese translation
	    },
	    nc_openAction: {
	      "ru": "Открыть",
	      "en": "Open",
	      "uk": "Відкрити",
	      "zh": "开放" // Chinese translation
	    },
	    nc_networkstat: {
	      "ru": "Найдено записей",
	      "en": "Records found",
	      "uk": "Знайдено записів",
	      "zh": "已找到记录" // Chinese translation
	    },
	    nc_bookmarksstat: {
	      "ru": "Найдено записей",
	      "en": "Records found",
	      "uk": "Знайдено записів",
	      "zh": "已找到记录" // Chinese translation
	    },
	    nc_favoriteAdded: {
	      ru: "Вкладка успешно добавлена",
	      en: "Tab successfully added",
	      uk: "Вкладка успішно додана",
	      zh: "成功添加选项卡" // Chinese translation
	    },
	    nc_favoriteAdd: {
	      "ru": "Добавить в Меню - ",
	      "en": "Add to Menu - ",
	      "uk": "Додати до Меню - ",
	      "zh": "添加到收藏夹 - " // Chinese translation
	    },
	    nc_favoriteDeleted: {
	      ru: "Вкладка успешно удалена",
	      en: "The tab has been successfully deleted",
	      uk: "Вкладка успішно видалена",
	      zh: "标签已成功删除" // Chinese translation
	    },
	    nc_favoriteMigrateAlert: {
	      "ru": "Система Избранного была обновлена, удалите все текущие избранные сервисы и добавьте заново!",
	      "en": "The Favorites system has been updated, please remove all current favorite services and add them again!",
	      "uk": "Система Favorites була оновлена, видаліть усі поточні вибрані сервіси та додайте їх знову!",
	      "zh": "收藏系统已更新，请删除所有当前的收藏服务并重新添加！"
	    },
	    nc_favoriteMigrate: {
	      "ru": "Если вы видите это сообщение, значит мы удалили вкладки с сериалами стриминговых сервисов. Не беспокойтесь, в настройках вас ждет новый раздел с еще более интересными сервисами ;)",
	      "en": "If you are seeing this message, then we have removed the tabs for streaming service series. Don't worry, in the settings you will find a new section with even more exciting services ;)",
	      "uk": "Якщо ви бачите це повідомлення, це означає, що ми видалили вкладки з серіалами стрімінгових сервісів. Не хвилюйтеся, у налаштуваннях вас чекає новий розділ з ще цікавішими сервісами ;)",
	      "zh": "如果您看到此消息，则我们已删除流媒体服务系列的选项卡。不用担心，在设置中您将找到一个新部分，其中包含更多令人兴奋的服务 ;)" // Chinese translation
	    },
	    nc_bookmark: {
	      ru: "Закладки",
	      en: "Bookmarks",
	      uk: "Закладки",
	      zh: "书签" // Chinese translation
	    },
	    nc_bookmarkAdd: {
	      ru: "Добавить закладку",
	      en: "Add Bookmark",
	      uk: "Додати закладку",
	      zh: "添加书签" // Chinese translation
	    },
	    nc_bookmarkDuplicate: {
	      ru: "Закладка уже существует",
	      en: "A bookmark already exists",
	      uk: "Закладка вже існує",
	      zh: "书签已经存在" // Chinese translation
	    },
	    nc_bookmarkAdded: {
	      ru: "Закладка успешно добавлена",
	      en: "Bookmark successfully added",
	      uk: "Закладка успішно додана",
	      zh: "成功添加书签" // Chinese translation
	    },
	    nc_bookmarkDelete: {
	      ru: "Удалить закладку",
	      en: "Delete Bookmark",
	      uk: "Видалити закладку",
	      zh: "删除书签" // Chinese translation
	    },
	    nc_bookmarkDeleted: {
	      ru: "Закладка удалена",
	      en: "Bookmark removed",
	      uk: "Закладка видалена",
	      zh: "已删除书签" // Chinese translation
	    },
	    nc_bookmarkDeleteError: {
	      ru: "Ошибка удаления",
	      en: "Deletion error",
	      uk: "Помилка видалення",
	      zh: "删除错误" // Chinese translation
	    },
	    //Collections
	    lmeCollections: {
	      ru: "LME Collections",
	      en: "LME Collections",
	      uk: "LME Collections",
	      zh: "LME Collections" // Chinese translation
	    }
	  });
	}
	var lang = {
	  data: data
	};

	var $$7 = require('../internals/export');
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
	$$7({
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
		var classof = require$$0$7;
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

		var $ = require$$0$8;
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

	var $$6 = require('../internals/export');
	var $includes = require('../internals/array-includes').includes;
	var fails$3 = require('../internals/fails');
	var addToUnscopables = require('../internals/add-to-unscopables');

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$3(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// Safari 26.4- bug
	var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails$3(function () {
	  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
	  return [, 1].includes(undefined, 1);
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$6({
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

	var es_array_slice = {};

	var isArray$1;
	var hasRequiredIsArray;

	function requireIsArray () {
		if (hasRequiredIsArray) return isArray$1;
		hasRequiredIsArray = 1;

		var classof = require$$0$7;

		// `IsArray` abstract operation
		// https://tc39.es/ecma262/#sec-isarray
		// eslint-disable-next-line es/no-array-isarray -- safe
		isArray$1 = Array.isArray || function isArray(argument) {
		  return classof(argument) === 'Array';
		};
		return isArray$1;
	}

	var uncurryThis$3 = require('../internals/function-uncurry-this');
	var fails$2 = require('../internals/fails');
	var isCallable$2 = require('../internals/is-callable');
	var classof$1 = require('../internals/classof');
	var getBuiltIn$1 = require('../internals/get-built-in');
	var inspectSource$1 = require('../internals/inspect-source');
	var noop = function noop() {/* empty */};
	var construct = getBuiltIn$1('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$3(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$2(argument)) return false;
	  try {
	    construct(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$2(argument)) return false;
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
	module.exports = !construct || fails$2(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
	    called = true;
	  }) || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

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

	var lengthOfArrayLike$1;
	var hasRequiredLengthOfArrayLike;

	function requireLengthOfArrayLike () {
		if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike$1;
		hasRequiredLengthOfArrayLike = 1;

		var toLength = requireToLength();

		// `LengthOfArrayLike` abstract operation
		// https://tc39.es/ecma262/#sec-lengthofarraylike
		lengthOfArrayLike$1 = function (obj) {
		  return toLength(obj.length);
		};
		return lengthOfArrayLike$1;
	}

	var createProperty;
	var hasRequiredCreateProperty;

	function requireCreateProperty () {
		if (hasRequiredCreateProperty) return createProperty;
		hasRequiredCreateProperty = 1;

		var DESCRIPTORS = requireDescriptors();
		var definePropertyModule = require$$1$4;
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

	var call$3 = require('../internals/function-call');
	var uncurryThis$2 = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$3 = require('../internals/an-object');
	var isObject$1 = require('../internals/is-object');
	var toLength = require('../internals/to-length');
	var toString$1 = require('../internals/to-string');
	var requireObjectCoercible$1 = require('../internals/require-object-coercible');
	var getMethod$1 = require('../internals/get-method');
	var advanceStringIndex = require('../internals/advance-string-index');
	var getRegExpFlags = require('../internals/regexp-get-flags');
	var regExpExec$1 = require('../internals/regexp-exec-abstract');
	var stringIndexOf = uncurryThis$2(''.indexOf);

	// @@match logic
	fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	  // `String.prototype.match` method
	  // https://tc39.es/ecma262/#sec-string.prototype.match
	  function match(regexp) {
	    var O = requireObjectCoercible$1(this);
	    var matcher = isObject$1(regexp) ? getMethod$1(regexp, MATCH) : undefined;
	    return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
	  },
	  // `RegExp.prototype[@@match]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	  function (string) {
	    var rx = anObject$3(this);
	    var S = toString$1(string);
	    var res = maybeCallNative(nativeMatch, rx, S);
	    if (res.done) return res.value;
	    var flags = toString$1(getRegExpFlags(rx));
	    if (!~stringIndexOf(flags, 'g')) return regExpExec$1(rx, S);
	    var fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
	    rx.lastIndex = 0;
	    var A = [];
	    var n = 0;
	    var result;
	    while ((result = regExpExec$1(rx, S)) !== null) {
	      var matchStr = toString$1(result[0]);
	      A[n] = matchStr;
	      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      n++;
	    }
	    return n === 0 ? null : A;
	  }];
	});

	var globalThis$4 = require('../internals/global-this');
	var userAgent$4 = require('../internals/environment-user-agent');
	var process = globalThis$4.process;
	var Deno$1 = globalThis$4.Deno;
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
	if (!version && userAgent$4) {
	  match = userAgent$4.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$4.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}
	module.exports = version;

	var environmentV8Version = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(environmentV8Version);

	var arrayMethodHasSpeciesSupport$1;
	var hasRequiredArrayMethodHasSpeciesSupport;

	function requireArrayMethodHasSpeciesSupport () {
		if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport$1;
		hasRequiredArrayMethodHasSpeciesSupport = 1;

		var fails = requireFails();
		var wellKnownSymbol = requireWellKnownSymbol();
		var V8_VERSION = require$$2;
		var SPECIES = wellKnownSymbol('species');
		arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
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
		return arrayMethodHasSpeciesSupport$1;
	}

	var uncurryThis$1 = require('../internals/function-uncurry-this');
	module.exports = uncurryThis$1([].slice);

	var arraySlice = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$7$1 = /*@__PURE__*/getAugmentedNamespace(arraySlice);

	var hasRequiredEs_array_slice;

	function requireEs_array_slice () {
		if (hasRequiredEs_array_slice) return es_array_slice;
		hasRequiredEs_array_slice = 1;

		var $ = require$$0$8;
		var isArray = requireIsArray();
		var isConstructor = require$$0$2;
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
		var isConstructor = require$$0$2;
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

	var deletePropertyOrThrow;
	var hasRequiredDeletePropertyOrThrow;

	function requireDeletePropertyOrThrow () {
		if (hasRequiredDeletePropertyOrThrow) return deletePropertyOrThrow;
		hasRequiredDeletePropertyOrThrow = 1;

		var tryToString = requireTryToString();
		var $TypeError = TypeError;
		deletePropertyOrThrow = function (O, P) {
		  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
		};
		return deletePropertyOrThrow;
	}

	var hasRequiredEs_array_splice;

	function requireEs_array_splice () {
		if (hasRequiredEs_array_splice) return es_array_splice;
		hasRequiredEs_array_splice = 1;

		var $ = require$$0$8;
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

	var $$5 = require('../internals/export');
	var assign = require('../internals/object-assign');

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$5({
	  target: 'Object',
	  stat: true,
	  arity: 2,
	  forced: Object.assign !== assign
	}, {
	  assign: assign
	});

	var NEW_ITEM_SOURCES = ["tmdb", "cub"];
	var Episode = function Episode(data) {
	  var card = data.card || data;
	  var episode = data.next_episode_to_air || data.episode || {};
	  if (card.source == undefined) card.source = 'tmdb';
	  Lampa.Arrays.extend(card, {
	    title: card.name,
	    original_title: card.original_name,
	    release_date: card.first_air_date
	  });
	  card.release_year = ((card.release_date || '0000') + '').slice(0, 4);
	  function remove(elem) {
	    if (elem) elem.remove();
	  }
	  this.build = function () {
	    this.card = Lampa.Template.js('card_episode');
	    this.img_poster = this.card.querySelector('.card__img') || {};
	    this.img_episode = this.card.querySelector('.full-episode__img img') || {};
	    this.card.querySelector('.card__title').innerText = card.title;
	    this.card.querySelector('.full-episode__num').innerText = card.unwatched || '';
	    if (episode && episode.air_date) {
	      this.card.querySelector('.full-episode__name').innerText = 's' + (episode.season_number || '?') + 'e' + (episode.episode_number || '?') + '. ' + (episode.name || Lampa.Lang.translate('noname'));
	      this.card.querySelector('.full-episode__date').innerText = episode.air_date ? Lampa.Utils.parseTime(episode.air_date).full : '----';
	    }
	    if (card.release_year == '0000') {
	      remove(this.card.querySelector('.card__age'));
	    } else {
	      this.card.querySelector('.card__age').innerText = card.release_year;
	    }
	    this.card.addEventListener('visible', this.visible.bind(this));
	  };
	  this.image = function () {
	    var _this = this;
	    this.img_poster.onload = function () {};
	    this.img_poster.onerror = function () {
	      _this.img_poster.src = './img/img_broken.svg';
	    };
	    this.img_episode.onload = function () {
	      _this.card.querySelector('.full-episode__img').classList.add('full-episode__img--loaded');
	    };
	    this.img_episode.onerror = function () {
	      _this.img_episode.src = './img/img_broken.svg';
	    };
	  };
	  this.create = function () {
	    var _this2 = this;
	    this.build();
	    this.card.addEventListener('hover:focus', function () {
	      if (_this2.onFocus) _this2.onFocus(_this2.card, card);
	    });
	    this.card.addEventListener('hover:hover', function () {
	      if (_this2.onHover) _this2.onHover(_this2.card, card);
	    });
	    this.card.addEventListener('hover:enter', function () {
	      if (_this2.onEnter) _this2.onEnter(_this2.card, card);
	    });
	    this.image();
	  };
	  this.visible = function () {
	    if (card.poster_path) this.img_poster.src = Lampa.Api.img(card.poster_path);else if (card.profile_path) this.img_poster.src = Lampa.Api.img(card.profile_path);else if (card.poster) this.img_poster.src = card.poster;else if (card.img) this.img_poster.src = card.img;else this.img_poster.src = './img/img_broken.svg';
	    if (card.still_path) this.img_episode.src = Lampa.Api.img(episode.still_path, 'w300');else if (card.backdrop_path) this.img_episode.src = Lampa.Api.img(card.backdrop_path, 'w300');else if (episode.img) this.img_episode.src = episode.img;else if (card.img) this.img_episode.src = card.img;else this.img_episode.src = './img/img_broken.svg';
	    if (this.onVisible) this.onVisible(this.card, card);
	  };
	  this.destroy = function () {
	    this.img_poster.onerror = function () {};
	    this.img_poster.onload = function () {};
	    this.img_episode.onerror = function () {};
	    this.img_episode.onload = function () {};
	    this.img_poster.src = '';
	    this.img_episode.src = '';
	    remove(this.card);
	    this.card = null;
	    this.img_poster = null;
	    this.img_episode = null;
	  };
	  this.render = function (js) {
	    return js ? this.card : $(this.card);
	  };
	};
	var SourceTMDB = function SourceTMDB(parrent) {
	  this.network = new Lampa.Reguest();
	  this.discovery = false;
	  this.main = function () {
	    var owner = this;
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
	    var onerror = arguments.length > 2 ? arguments[2] : undefined;
	    var parts_limit = 6;
	    console.log('LMENetworks', parts_limit);
	    var parts_data = [function (call) {
	      owner.get('movie/now_playing', params, function (json) {
	        json.title = Lampa.Lang.translate('title_now_watch');
	        call(json);
	      }, call);
	    }, function (call) {
	      call({
	        source: 'tmdb',
	        results: Lampa.TimeTable.lately().slice(0, 20),
	        title: Lampa.Lang.translate('title_upcoming_episodes'),
	        nomore: true,
	        cardClass: function cardClass(_elem, _params) {
	          return new Episode(_elem);
	        }
	      });
	    }, function (call) {
	      owner.get('trending/all/day', params, function (json) {
	        json.title = Lampa.Lang.translate('title_trend_day');
	        call(json);
	      }, call);
	    }, function (call) {
	      owner.get('trending/all/week', params, function (json) {
	        json.title = Lampa.Lang.translate('title_trend_week');
	        call(json);
	      }, call);
	    }];

	    //Integrate LME_Networks
	    function addNetworkFunctions() {
	      var networkLists = Lampa.Storage.get('nc_networkLists');
	      networkLists.forEach(function (networkOne) {
	        var withNetworks = networkOne.card_data.$id;
	        var sortBy = networkOne.type === 'new' ? 'first_air_date.desc' : undefined;
	        var params = {};
	        if (sortBy) {
	          params.sort_by = sortBy;
	        }

	        // Додаємо анонімну функцію до parts_data
	        parts_data.splice(1, 0, function (call) {
	          owner.get("discover/tv?with_networks=".concat(withNetworks), params, function (json) {
	            json.title = "".concat(networkOne.type.toUpperCase(), " ").concat(networkOne.card_data.name);
	            call(json);
	            parts_limit++; // Збільшуємо parts_limit
	          }, call);
	        });
	      });
	    }

	    // Виклик функції для додавання мереж
	    addNetworkFunctions();
	    //END Integrate LME_Networks

	    Lampa.Arrays.insert(parts_data, 0, Lampa.Api.partPersons(parts_data, parts_data.length - 1, 'movie'));
	    parrent.genres.movie.forEach(function (genre) {
	      var event = function event(call) {
	        owner.get('discover/movie?with_genres=' + genre.id, params, function (json) {
	          json.title = Lampa.Lang.translate(genre.title.replace(/[^a-z_]/g, ''));
	          call(json);
	        }, call);
	      };
	      parts_data.push(event);
	    });
	    function loadPart(partLoaded, partEmpty) {
	      Lampa.Api.partNext(parts_data, parts_limit, partLoaded, partEmpty);
	    }
	    loadPart(oncomplite, onerror);
	    return loadPart;
	  };
	};
	function catSubmenu(type) {
	  if (type === 'nc_cartoon') {
	    var NEW_ITEM_TEXT = Lampa.Lang.translate('nc_cartoon');
	    var NEW_ITEM_SVG = "<svg height=\"173\" viewBox=\"0 0 180 173\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M126 3C126 18.464 109.435 31 89 31C68.5655 31 52 18.464 52 3C52 2.4505 52.0209 1.90466 52.0622 1.36298C21.3146 15.6761 0 46.8489 0 83C0 132.706 40.2944 173 90 173C139.706 173 180 132.706 180 83C180 46.0344 157.714 14.2739 125.845 0.421326C125.948 1.27051 126 2.13062 126 3ZM88.5 169C125.779 169 156 141.466 156 107.5C156 84.6425 142.314 64.6974 122 54.0966C116.6 51.2787 110.733 55.1047 104.529 59.1496C99.3914 62.4998 94.0231 66 88.5 66C82.9769 66 77.6086 62.4998 72.4707 59.1496C66.2673 55.1047 60.3995 51.2787 55 54.0966C34.6864 64.6974 21 84.6425 21 107.5C21 141.466 51.2208 169 88.5 169Z\" fill=\"currentColor\"></path><path d=\"M133 121.5C133 143.315 114.196 161 91 161C67.804 161 49 143.315 49 121.5C49 99.6848 67.804 116.5 91 116.5C114.196 116.5 133 99.6848 133 121.5Z\" fill=\"currentColor\"></path><path d=\"M72 81C72 89.8366 66.1797 97 59 97C51.8203 97 46 89.8366 46 81C46 72.1634 51.8203 65 59 65C66.1797 65 72 72.1634 72 81Z\" fill=\"currentColor\"></path><path d=\"M131 81C131 89.8366 125.18 97 118 97C110.82 97 105 89.8366 105 81C105 72.1634 110.82 65 118 65C125.18 65 131 72.1634 131 81Z\" fill=\"currentColor\"></path></svg>";
	    Lampa.Menu.addButton(NEW_ITEM_SVG, NEW_ITEM_TEXT, function () {
	      var _Lampa$Activity$activ = Lampa.Activity.active(),
	        currentSource = _Lampa$Activity$activ.source;
	      var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
	      Lampa.Activity.push({
	        url: "movie",
	        title: "".concat(NEW_ITEM_TEXT, " - ").concat(source.toUpperCase()),
	        component: "category",
	        genres: 16,
	        id: 16,
	        source: source,
	        card_type: true,
	        page: 1
	      });
	    });
	  }
	  if (type === 'nc_documentary') {
	    var _NEW_ITEM_TEXT = Lampa.Lang.translate('nc_documentary');
	    var _NEW_ITEM_SVG = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>";
	    Lampa.Menu.addButton(_NEW_ITEM_SVG, _NEW_ITEM_TEXT, function () {
	      var _Lampa$Activity$activ2 = Lampa.Activity.active(),
	        currentSource = _Lampa$Activity$activ2.source;
	      var source = NEW_ITEM_SOURCES.includes(currentSource) ? currentSource : NEW_ITEM_SOURCES[0];
	      Lampa.Activity.push({
	        url: "movie",
	        title: "".concat(_NEW_ITEM_TEXT, " - ").concat(source.toUpperCase()),
	        component: "category",
	        genres: 99,
	        id: 99,
	        source: source,
	        card_type: true,
	        page: 1
	      });
	    });
	  }
	  if (type === 'nc_documentary2') {
	    var _NEW_ITEM_TEXT2 = Lampa.Lang.translate('nc_documentary2');
	    var _NEW_ITEM_SVG2 = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g data-name=\"Layer 2\" id=\"Layer_2\"> <g data-name=\"E425, History, log, manuscript\" id=\"E425_History_log_manuscript\"> <path class=\"cls-1\" d=\"M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"31.39\"></rect> <rect class=\"cls-1\" height=\"320.87\" width=\"319.22\" x=\"96.39\" y=\"95.57\"></rect> <path class=\"cls-1\" d=\"M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z\"></path> <path class=\"cls-1\" d=\"M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z\"></path> <path class=\"cls-1\" d=\"M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 126.96) rotate(-180)\"></path> <path class=\"cls-1\" d=\"M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z\"></path> <rect class=\"cls-1\" height=\"64.17\" width=\"319.22\" x=\"96.39\" y=\"416.43\"></rect> <path class=\"cls-1\" d=\"M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z\"></path> <path class=\"cls-1\" d=\"M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z\"></path> <path class=\"cls-1\" d=\"M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z\" transform=\"translate(960.17 897.04) rotate(-180)\"></path> <line class=\"cls-1\" x1=\"143.41\" x2=\"256\" y1=\"140.11\" y2=\"140.11\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"186.47\" y2=\"186.47\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"232.82\" y2=\"232.82\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"279.18\" y2=\"279.18\"></line> <line class=\"cls-1\" x1=\"143.41\" x2=\"371.26\" y1=\"325.53\" y2=\"325.53\"></line> <line class=\"cls-1\" x1=\"256\" x2=\"371.26\" y1=\"371.89\" y2=\"371.89\"></line> </g> </g> </g></svg>";
	    Lampa.Menu.addButton(_NEW_ITEM_SVG2, _NEW_ITEM_TEXT2, function () {
	      Lampa.Activity.push({
	        url: "discover/tv",
	        title: "".concat(_NEW_ITEM_TEXT2),
	        component: "category_full",
	        networks: '2360|2382|3541|5433|65|1354|1755|3953|106|1079|3900|6903|64|2087|4353|6026|4462|2692|5470|5408|5431|4440|4741|4883|3045|4983|4987|5192|1302|4784|6966|100',
	        sort_by: 'first_air_date.desc',
	        source: 'tmdb',
	        card_type: true,
	        page: 1
	      });
	    });
	  }
	  if (type === 'nc_networksList') {
	    var _NEW_ITEM_TEXT3 = Lampa.Lang.translate('nc_networksList');
	    var _NEW_ITEM_SVG3 = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                </svg>";
	    Lampa.Menu.addButton(_NEW_ITEM_SVG3, _NEW_ITEM_TEXT3, function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_networksList'),
	        component: Lampa.Storage.get("nc_networksListHome") || 'lmeNetworks',
	        page: 1
	      });
	    });

	    // Insert Home block's - SourceTMDB integration
	    console.log('LMENetworks', 'Try inject');
	    if (Lampa.Storage.get('nc_networkLists') !== []) {
	      var lme_networks = Object.assign({}, Lampa.Api.sources.tmdb, new SourceTMDB(Lampa.Api.sources.tmdb));
	      Lampa.Api.sources.lme_networks = lme_networks;
	      Object.defineProperty(Lampa.Api.sources, 'TMDBs', {
	        get: function get() {
	          return lme_networks;
	        }
	      });
	      Lampa.Params.select('source', Object.assign({}, Lampa.Params.values['source'], {
	        'TMDBs': 'TMDB + Streaming'
	      }), 'tmdb');
	    }
	  }
	  //nc_lmeCollection
	  if (type === 'nc_lmeCollections') {
	    var _NEW_ITEM_TEXT4 = Lampa.Lang.translate('lmeCollections');
	    var _NEW_ITEM_SVG4 = "<svg width=\"191\" height=\"239\" viewBox=\"0 0 191 239\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.3438 35.3414V26.7477C35.3438 19.9156 38.0594 13.3543 42.8934 8.51604C47.7297 3.68251 54.2874 0.967027 61.125 0.966431H164.25C171.086 0.966431 177.643 3.68206 182.482 8.51604C187.315 13.3524 190.031 19.91 190.031 26.7477V186.471C190.031 189.87 189.022 193.192 187.133 196.018C185.245 198.844 182.561 201.046 179.421 202.347C176.28 203.647 172.825 203.988 169.492 203.325C166.158 202.662 163.096 201.026 160.692 198.623L155.656 193.587V220.846C155.656 224.245 154.647 227.567 152.758 230.393C150.87 233.219 148.186 235.421 145.046 236.722C141.905 238.022 138.45 238.363 135.117 237.7C131.783 237.037 128.721 235.401 126.317 232.998L78.3125 184.993L30.3078 232.998C27.9041 235.401 24.8419 237.037 21.5084 237.7C18.1748 238.363 14.7195 238.022 11.5794 236.722C8.43922 235.421 5.75517 233.219 3.86654 230.393C1.9779 227.567 0.969476 224.245 0.96875 220.846V61.1227C0.96875 54.2906 3.68437 47.7293 8.51836 42.891C13.3547 38.0575 19.9124 35.342 26.75 35.3414H35.3438ZM138.469 220.846V61.1227C138.469 58.8435 137.563 56.6576 135.952 55.046C134.34 53.4343 132.154 52.5289 129.875 52.5289H26.75C24.4708 52.5289 22.2849 53.4343 20.6733 55.046C19.0617 56.6576 18.1562 58.8435 18.1562 61.1227V220.846L66.1609 172.841C69.3841 169.619 73.755 167.809 78.3125 167.809C82.87 167.809 87.2409 169.619 90.4641 172.841L138.469 220.846ZM155.656 169.284L172.844 186.471V26.7477C172.844 24.4685 171.938 22.2826 170.327 20.671C168.715 19.0593 166.529 18.1539 164.25 18.1539H61.125C58.8458 18.1539 56.6599 19.0593 55.0483 20.671C53.4367 22.2826 52.5312 24.4685 52.5312 26.7477V35.3414H129.875C136.711 35.3414 143.268 38.0571 148.107 42.891C152.94 47.7274 155.656 54.285 155.656 61.1227V169.284Z\" fill=\"currentColor\"/>\n                </svg>";
	    Lampa.Menu.addButton(_NEW_ITEM_SVG4, _NEW_ITEM_TEXT4, function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('lmeCollections'),
	        component: Lampa.Storage.get("nc_CollectionHome") || 'lmeCollections',
	        page: 1
	      });
	    });
	  }
	  if (type === Lampa.Storage.get('nc_networkLists') && Lampa.Storage.get('nc_networkLists') !== []) {
	    Lampa.Storage.get('nc_networkLists').forEach(function (item) {
	      var NEW_ITEM_TEXT = "".concat(item.card_data.name);
	      var New = "";
	      var legacyFavorite = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	      if (item.type === "new") New = 'first_air_date.desc';

	      // Create img tag for network logo
	      var NEW_ITEM_IMG = "<img class='networkLogo' src='".concat(Lampa.TMDB.image("t/p/w200/".concat(item.card_data.poster_path)), "' alt=\"img\">");
	      Lampa.Menu.addButton(NEW_ITEM_IMG, "".concat(legacyFavorite ? "OLD " : "").concat(NEW_ITEM_TEXT), function () {
	        //Migration alert
	        if (legacyFavorite === true) {
	          Lampa.Noty.show(Lampa.Lang.translate('nc_favoriteMigrateAlert'));
	        } else {
	          Lampa.Activity.push({
	            url: 'discover/tv',
	            title: "".concat(item.type.toUpperCase(), " ").concat(NEW_ITEM_TEXT),
	            component: "category_full",
	            networks: item.card_data.$id,
	            sort_by: New,
	            source: 'tmdb',
	            card_type: true,
	            page: 1
	          });
	        }
	      });

	      // Note: Badge functionality from original code is lost in v3 API
	      // Original had: <div class="nc_badge">${Lampa.Lang.translate(item.type === 'top' ? 'nc_toptv' : 'nc_newtv')}</div>
	      // This would require custom HTML via Lampa.Menu.addaddElement if badges are critical
	    });
	  }
	}
	var insert = {
	  catSubmenu: catSubmenu
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
	    title: Lampa.Lang.translate("nc_settings_thanks"),
	    text: Lampa.Lang.translate("nc_settings_thanks_description"),
	    qr_text: "<a href=\"".concat(thanksUrl, "\">").concat(thanksUrl, "</a>")
	  });
	  var qrElement = html.find(".account-modal-split__qr-code");
	  var enabledController = Lampa.Controller.enabled().name;
	  Lampa.Utils.qrcode(thanksUrl, qrElement, function (error) {
	    console.error("NC", "Unable to generate thanks QR code", error);
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

	function setting() {
	  Lampa.SettingsApi.addComponent({
	    component: "addCategory",
	    name: Lampa.Lang.translate('nc_title'),
	    icon: '<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M66.6667 215.921C66.6667 170.027 66.6667 147.08 74.056 128.94C84.215 104.002 104.002 84.215 128.94 74.056C147.08 66.6667 170.027 66.6667 215.921 66.6667C261.814 66.6667 284.761 66.6667 302.901 74.056C327.839 84.215 347.627 104.002 357.787 128.94C365.173 147.08 365.173 170.027 365.173 215.921C365.173 261.814 365.173 284.761 357.787 302.901C347.627 327.839 327.839 347.627 302.901 357.787C284.761 365.173 261.814 365.173 215.921 365.173C170.027 365.173 147.08 365.173 128.94 357.787C104.002 347.627 84.215 327.839 74.056 302.901C66.6667 284.761 66.6667 261.814 66.6667 215.921Z" fill="white"/>\n' + '<path d="M66.6667 584.08C66.6667 538.187 66.6667 515.24 74.056 497.1C84.215 472.163 104.002 452.373 128.94 442.217C147.08 434.827 170.027 434.827 215.921 434.827C261.814 434.827 284.761 434.827 302.901 442.217C327.839 452.373 347.627 472.163 357.787 497.1C365.173 515.24 365.173 538.187 365.173 584.08C365.173 629.973 365.173 652.92 357.787 671.06C347.627 696 327.839 715.787 302.901 725.943C284.761 733.333 261.814 733.333 215.921 733.333C170.027 733.333 147.08 733.333 128.94 725.943C104.002 715.787 84.215 696 74.056 671.06C66.6667 652.92 66.6667 629.973 66.6667 584.08Z" fill="white"/>\n' + '<path d="M434.83 584.08C434.83 538.187 434.83 515.24 442.22 497.1C452.38 472.163 472.167 452.373 497.103 442.217C515.243 434.827 538.19 434.827 584.083 434.827C629.98 434.827 652.927 434.827 671.063 442.217C696.003 452.373 715.79 472.163 725.95 497.1C733.34 515.24 733.34 538.187 733.34 584.08C733.34 629.973 733.34 652.92 725.95 671.06C715.79 696 696.003 715.787 671.063 725.943C652.927 733.333 629.98 733.333 584.083 733.333C538.19 733.333 515.243 733.333 497.103 725.943C472.167 715.787 452.38 696 442.22 671.06C434.83 652.92 434.83 629.973 434.83 584.08Z" fill="white"/>\n' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M559.083 315.922C559.083 329.729 570.273 340.923 584.083 340.923C597.89 340.923 609.083 329.729 609.083 315.922V240.922H684.083C697.89 240.922 709.083 229.729 709.083 215.922C709.083 202.115 697.89 190.922 684.083 190.922H609.083V115.922C609.083 102.115 597.89 90.922 584.083 90.922C570.273 90.922 559.083 102.115 559.083 115.922V190.922H484.083C470.273 190.922 459.083 202.115 459.083 215.922C459.083 229.729 470.273 240.922 484.083 240.922H559.083V315.922Z" fill="white"/>\n' + '</svg>'
	  });
	  Lampa.SettingsApi.addParam({
	    component: "addCategory",
	    param: {
	      name: "nc_thanks",
	      type: "button"
	    },
	    field: {
	      name: Lampa.Lang.translate("nc_settings_thanks"),
	      description: Lampa.Lang.translate("nc_settings_thanks_description")
	    },
	    onChange: function onChange() {
	      openThanksModal();
	    }
	  });
	  //Info
	  Lampa.Settings.listener.follow("open", function (e) {
	    if (e.name === "addCategory") {
	      if (Lampa.Settings.main().render().find('[data-component="ncInfo"]').length === 0) {
	        Lampa.SettingsApi.addComponent({
	          component: "ncInfo",
	          name: Lampa.Lang.translate('ncInfo')
	        });
	      }
	      Lampa.Settings.main().update();
	      Lampa.Settings.main().render().find('[data-component="ncInfo"]').addClass("hide");
	    }
	  });
	  //Info
	  Lampa.SettingsApi.addParam({
	    component: 'addCategory',
	    param: {
	      name: "ncInfo",
	      type: 'static',
	      default: true
	    },
	    field: {
	      name: Lampa.Lang.translate('ncInfo')
	    },
	    onRender: function onRender(item) {
	      item.show();
	      item.on("hover:enter", function () {
	        Lampa.Settings.create("ncInfo");
	        var enabledController = Lampa.Controller.enabled();
	        enabledController.controller.back = function () {
	          Lampa.Settings.create('ncInfo');
	        };
	      });
	    }
	  });
	  Lampa.SettingsApi.addParam({
	    component: 'ncInfo',
	    param: {
	      name: "group",
	      type: "static"
	    },
	    field: {
	      name: "<img src=\"https://cdn.glitch.global/d9956867-398e-4a85-9c42-31911adc9981/groupLTD.jpg?v=1702216657917\" alt=\"GroupLTD\" width=\"100%\" height=\"auto\">",
	      description: Lampa.Lang.translate('ncInfoGr')
	    }
	  });
	  Lampa.SettingsApi.addParam({
	    component: 'ncInfo',
	    param: {
	      name: "group",
	      type: "static"
	    },
	    field: {
	      name: "<b>Info</b>",
	      description: Lampa.Lang.translate('ncInfoDesc')
	    }
	  });
	  //Stream Network
	  Lampa.SettingsApi.addParam({
	    component: "addCategory",
	    param: {
	      name: "nc_networksList",
	      type: "trigger",
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('nc_networksList'),
	      description: ""
	    },
	    onChange: function onChange(value) {
	      if (value === 'true') insert.catSubmenu('nc_networksList');else $('body').find('.menu [data-action="nc_networksList"]').remove();
	      Lampa.Settings.update();
	    }
	  });
	  // Menu 2.0
	  Lampa.SettingsApi.addParam({
	    component: "addCategory",
	    param: {
	      name: "nc_documentary",
	      type: "trigger",
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('nc_documentary'),
	      description: "TMDB/CUB"
	    },
	    onChange: function onChange(value) {
	      if (value === 'true') insert.catSubmenu('nc_documentary');else $('body').find('.menu [data-action="nc_documentary"]').remove();
	      Lampa.Settings.update();
	    }
	  });
	  Lampa.SettingsApi.addParam({
	    component: "addCategory",
	    param: {
	      name: "nc_documentary2",
	      type: "trigger",
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('nc_documentary2'),
	      description: "TMDB"
	    },
	    onChange: function onChange(value) {
	      if (value === 'true') insert.catSubmenu('nc_documentary2');else $('body').find('.menu [data-action="nc_documentary2"]').remove();
	      Lampa.Settings.update();
	    }
	  });
	  //End Universal
	}
	var config = {
	  setting: setting
	};

	var $$4 = require('../internals/export');
	var $map = require('../internals/array-iteration').map;
	var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$4({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var call$2 = require('../internals/function-call');
	var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$2 = require('../internals/an-object');
	var isObject = require('../internals/is-object');
	var requireObjectCoercible = require('../internals/require-object-coercible');
	var sameValue = require('../internals/same-value');
	var toString = require('../internals/to-string');
	var getMethod = require('../internals/get-method');
	var regExpExec = require('../internals/regexp-exec-abstract');

	// @@search logic
	fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
	  return [
	  // `String.prototype.search` method
	  // https://tc39.es/ecma262/#sec-string.prototype.search
	  function search(regexp) {
	    var O = requireObjectCoercible(this);
	    var searcher = isObject(regexp) ? getMethod(regexp, SEARCH) : undefined;
	    return searcher ? call$2(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
	  },
	  // `RegExp.prototype[@@search]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	  function (string) {
	    var rx = anObject$2(this);
	    var S = toString(string);
	    var res = maybeCallNative(nativeSearch, rx, S);
	    if (res.done) return res.value;
	    var previousLastIndex = rx.lastIndex;
	    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	    var result = regExpExec(rx, S);
	    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	    return result === null ? -1 : result.index;
	  }];
	});

	var es_promise = {};

	var es_promise_constructor = {};

	var globalThis$3 = require('../internals/global-this');
	var userAgent$3 = require('../internals/environment-user-agent');
	var classof = require('../internals/classof-raw');
	var userAgentStartsWith = function userAgentStartsWith(string) {
	  return userAgent$3.slice(0, string.length) === string;
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
	var aCallable$2 = require('../internals/a-callable');
	module.exports = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
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

		var defineProperty = require$$1$4.f;
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

	var defineBuiltInAccessor;
	var hasRequiredDefineBuiltInAccessor;

	function requireDefineBuiltInAccessor () {
		if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
		hasRequiredDefineBuiltInAccessor = 1;

		var makeBuiltIn = require$$0$3;
		var defineProperty = require$$1$4;
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

	var aCallable$1;
	var hasRequiredACallable;

	function requireACallable () {
		if (hasRequiredACallable) return aCallable$1;
		hasRequiredACallable = 1;

		var isCallable = require$$5$5;
		var tryToString = requireTryToString();
		var $TypeError = TypeError;

		// `Assert: IsCallable(argument) is true`
		aCallable$1 = function (argument) {
		  if (isCallable(argument)) return argument;
		  throw new $TypeError(tryToString(argument) + ' is not a function');
		};
		return aCallable$1;
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

	var aConstructor;
	var hasRequiredAConstructor;

	function requireAConstructor () {
		if (hasRequiredAConstructor) return aConstructor;
		hasRequiredAConstructor = 1;

		var isConstructor = require$$0$2;
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
	var anObject$1 = require('../internals/an-object');
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
	    return functionApply$1(aCallable(target), thisArgument, anObject$1(argumentsList));
	  }
	});

	var NATIVE_BIND = require('../internals/function-bind-native');
	var FunctionPrototype = Function.prototype;
	var apply = FunctionPrototype.apply;
	var call$1 = FunctionPrototype.call;

	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
	module.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call$1.bind(apply) : function () {
	  return call$1.apply(apply, arguments);
	});

	var functionApply = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(functionApply);

	var functionUncurryThisClause;
	var hasRequiredFunctionUncurryThisClause;

	function requireFunctionUncurryThisClause () {
		if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
		hasRequiredFunctionUncurryThisClause = 1;

		var classofRaw = require$$0$7;
		var uncurryThis = requireFunctionUncurryThis();
		functionUncurryThisClause = function (fn) {
		  // Nashorn bug:
		  //   https://github.com/zloirock/core-js/issues/1128
		  //   https://github.com/zloirock/core-js/issues/1130
		  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
		};
		return functionUncurryThisClause;
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

	var userAgent$2 = require('../internals/environment-user-agent');
	module.exports = /ipad|iphone|ipod/i.test(userAgent$2) && /applewebkit/i.test(userAgent$2);

	var environmentIsIos = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(environmentIsIos);

	var task;
	var hasRequiredTask;

	function requireTask () {
		if (hasRequiredTask) return task;
		hasRequiredTask = 1;

		var globalThis = require$$3$4;
		var apply = require$$1$2;
		var bind = requireFunctionBindContext();
		var isCallable = require$$5$5;
		var hasOwn = requireHasOwnProperty();
		var fails = requireFails();
		var html = requireHtml();
		var arraySlice = require$$7$1;
		var createElement = requireDocumentCreateElement();
		var validateArgumentsLength = requireValidateArgumentsLength();
		var IS_IOS = require$$5$1;
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

	var userAgent$1 = require('../internals/environment-user-agent');
	module.exports = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

	var environmentIsIosPebble = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$6 = /*@__PURE__*/getAugmentedNamespace(environmentIsIosPebble);

	var userAgent = require('../internals/environment-user-agent');
	module.exports = /web0s(?!.*chrome)/i.test(userAgent);

	var environmentIsWebosWebkit = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$7 = /*@__PURE__*/getAugmentedNamespace(environmentIsWebosWebkit);

	var microtask_1;
	var hasRequiredMicrotask;

	function requireMicrotask () {
		if (hasRequiredMicrotask) return microtask_1;
		hasRequiredMicrotask = 1;

		var globalThis = require$$3$4;
		var safeGetBuiltIn = require$$1$1;
		var bind = requireFunctionBindContext();
		var macrotask = requireTask().set;
		var Queue = requireQueue();
		var IS_IOS = require$$5$1;
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

		var globalThis = require$$3$4;
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

		var $ = require$$0$8;
		var IS_PURE = requireIsPure();
		var IS_NODE = requireEnvironmentIsNode();
		var globalThis = require$$3$4;
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

	var bind = require('../internals/function-bind-context');
	var call = require('../internals/function-call');
	var anObject = require('../internals/an-object');
	var tryToString = require('../internals/try-to-string');
	var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
	var lengthOfArrayLike = require('../internals/length-of-array-like');
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
	      anObject(value);
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
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf(ResultPrototype, result)) return result;
	      }
	      return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }
	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call(next, iterator)).done) {
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

	var require$$5 = /*@__PURE__*/getAugmentedNamespace(iterate);

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

		var $ = require$$0$8;
		var call = requireFunctionCall();
		var aCallable = requireACallable();
		var newPromiseCapabilityModule = requireNewPromiseCapability();
		var perform = requirePerform();
		var iterate = require$$5;
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

		var $ = require$$0$8;
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

		var $ = require$$0$8;
		var call = requireFunctionCall();
		var aCallable = requireACallable();
		var newPromiseCapabilityModule = requireNewPromiseCapability();
		var perform = requirePerform();
		var iterate = require$$5;
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

		var $ = require$$0$8;
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

		var $ = require$$0$8;
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

	var network = new Lampa.Reguest();
	var api_url = 'https://cloud.appwrite.io/v1/databases/65fd540d95317ea2a89f/collections/TVNetworksSource/documents?queries[0]={"method":"limit","values":[36]}&queries[]={"method":"orderDesc","values":["$createdAt"]}';
	var api_urlCollection = 'https://cloud.appwrite.io/v1/databases/65fd540d95317ea2a89f/collections/CollectionSource/documents?queries[0]={"method":"limit","values":[36]}&queries[]={"method":"orderDesc","values":["$createdAt"]}';
	var auth = {
	  headers: {
	    "X-Appwrite-Project": "65fd523956f5ca97eaff"
	  }
	};
	var allNetworks = []; // Store all networks globally

	function main$2(params, oncomplite, onerror) {
	  var trakt_headers = {
	    'Content-Type': 'application/json',
	    'trakt-api-version': '2',
	    'trakt-api-key': 'a77093dcf5db97106d9303f3ab7d46a80a93a6e0c1d7a2ff8a1aacebe0dc161b',
	    'x-requested-with': 'lme-plugins'
	  };

	  // Ensure page starts from 0
	  var page = Math.max(0, (params.page || 1) - 1);
	  network.native('https://apx.lme.isroot.in/trakt/networks', function (networks) {
	    if (params.searchQuery) {
	      console.log('Search query:', params.searchQuery);
	      networks = networks.filter(function (network) {
	        return network.name.toLowerCase().includes(params.searchQuery.toLowerCase());
	      });
	      console.log('Filtered networks by searchQuery:', networks);
	    }
	    if (!params.searchQuery && (params.geoSearchQuery || Lampa.Storage.get('nc_networksListGeo'))) {
	      var countryCode = (Lampa.Storage.get('nc_networksListGeo') || params.geoSearchQuery).toLowerCase();
	      networks = networks.filter(function (network) {
	        return network.country && network.country.toLowerCase() === countryCode;
	      });
	    }
	    allNetworks = networks;
	    processPage(page, _toConsumableArray(allNetworks), oncomplite);
	  }, function (error) {
	    onerror(error);
	  }, false, {
	    headers: trakt_headers
	  });
	}
	function processPage(page, networks, oncomplite) {
	  var itemsPerPage = 36;
	  var start = page * itemsPerPage;
	  var end = start + itemsPerPage;

	  // If no networks or start index is out of bounds
	  if (!networks.length || start >= networks.length) {
	    oncomplite({
	      collection: true,
	      total_pages: Math.max(1, Math.ceil(networks.length / itemsPerPage)),
	      total: networks.length,
	      documents: []
	    });
	    return;
	  }
	  var pageNetworks = networks.slice(start, end);
	  var promises = pageNetworks.map(function (network_item) {
	    return new Promise(function (resolve) {
	      if (network_item.ids.tmdb) {
	        var tmdbUrl = "".concat(Lampa.TMDB.api('network/' + network_item.ids.tmdb + '/images' + '?api_key=' + Lampa.TMDB.key()));
	        network.native(tmdbUrl, function (json) {
	          var _json$logos, _network_item$country;
	          resolve({
	            name: network_item.name,
	            logo_path: ((_json$logos = json.logos) === null || _json$logos === void 0 || (_json$logos = _json$logos[0]) === null || _json$logos === void 0 ? void 0 : _json$logos.file_path) || '',
	            origin_country: ((_network_item$country = network_item.country) === null || _network_item$country === void 0 ? void 0 : _network_item$country.toUpperCase()) || null,
	            $id: network_item.ids.tmdb,
	            tmdb_id: network_item.ids.tmdb
	          });
	        }, function () {
	          var _network_item$country2;
	          resolve({
	            name: network_item.name,
	            logo_path: '',
	            origin_country: ((_network_item$country2 = network_item.country) === null || _network_item$country2 === void 0 ? void 0 : _network_item$country2.toUpperCase()) || null,
	            $id: network_item.ids.tmdb,
	            tmdb_id: network_item.ids.tmdb
	          });
	        });
	      } else {
	        var _network_item$country3;
	        resolve({
	          name: network_item.name,
	          logo_path: '',
	          origin_country: ((_network_item$country3 = network_item.country) === null || _network_item$country3 === void 0 ? void 0 : _network_item$country3.toUpperCase()) || null,
	          $id: network_item.ids.tmdb,
	          tmdb_id: null
	        });
	      }
	    });
	  });
	  Promise.all(promises).then(function (documents) {
	    var data = {
	      collection: true,
	      total_pages: Math.ceil(networks.length / itemsPerPage),
	      total: networks.length,
	      documents: documents
	    };
	    data.documents.forEach(function (element) {
	      element.poster_path = element.logo_path;
	    });
	    oncomplite(data);
	  });
	}
	function full(params, oncomplite, onerror) {
	  var apiUrl = api_url;
	  if (params.searchQuery && params.searchQuery !== "") {
	    apiUrl += "&queries[]={\"method\":\"search\",\"attribute\":\"name\",\"values\":[\"".concat(params.searchQuery, "\"]}");
	  }
	  if (!params.searchQuery && (params.geoSearchQuery && params.geoSearchQuery !== "" || Lampa.Storage.get('nc_networksListGeo') && Lampa.Storage.get('nc_networksListGeo') !== "null")) {
	    apiUrl += "&queries[]={\"method\":\"equal\",\"attribute\":\"origin_country\",\"values\":[\"".concat(Lampa.Storage.get('nc_networksListGeo') || params.geoSearchQuery, "\"]}");
	  }
	  network.silent(encodeURI(apiUrl + "&queries[]={\"method\":\"offset\",\"values\":[".concat(params.page * 36, "]}")), function (data) {
	    data.collection = true;
	    data.total_pages = data.total / 36;
	    data.documents.forEach(function (element) {
	      element.poster_path = element.logo_path;
	      if (element.origin_country !== null) {
	        element.name = "".concat(element.name, " ").concat(element.origin_country);
	      }
	    });
	    oncomplite(data);
	  }, onerror, false, auth);
	}
	function bookmarkSave(data) {
	  if (data.action === 'bookmarkAdd') {
	    try {
	      var currentItems = Lampa.Storage.get('nc_bookmarks') || [];
	      var isDuplicate = currentItems.some(function (item) {
	        return item.$id === data.card_data.$id;
	      });
	      if (isDuplicate) {
	        return false;
	      }
	      Lampa.Storage.add('nc_bookmarks', data.card_data);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	}
	function bookmarkRemove(data) {
	  if (data.action === 'bookmarkRemove') {
	    try {
	      var currentItems = Lampa.Storage.get('nc_bookmarks');
	      var updatedItems = currentItems.filter(function (item) {
	        return item.$id !== data.card_data.$id;
	      });
	      if (currentItems.length === updatedItems.length) {
	        console.error('Ошибка: Запись не найдена');
	        return false;
	      }
	      Lampa.Storage.set('nc_bookmarks', JSON.stringify(updatedItems));
	      return true;
	    } catch (error) {
	      console.error('Произошла ошибка при удалении записи:', error);
	      return false;
	    }
	  }
	}
	/* Collection */
	function mainCollection(params, oncomplite, onerror) {
	  var apiUrl = api_urlCollection;
	  if (params.searchQuery && params.searchQuery !== "") {
	    // Получаем значение языка из хранилища
	    var language = Lampa.Storage.get('language');

	    // Определяем атрибут для поиска в зависимости от языка
	    var searchAttribute = language === 'uk' ? 'uk' : language === 'ru' ? 'ru' : 'name';
	    apiUrl += "&queries[]={\"method\":\"search\",\"attribute\":\"".concat(searchAttribute, "\",\"values\":[\"").concat(params.searchQuery, "\"]}");
	  }
	  network.silent(encodeURI(apiUrl), function (data) {
	    data.collection = false;
	    data.total_pages = data.total / 36;
	    data.documents.forEach(function (element) {
	      var language = Lampa.Storage.get('language');
	      if (language === 'uk') {
	        element.name = element.uk || element.name;
	      } else if (language === 'ru') {
	        element.name = element.ru || element.name;
	      } else {
	        element.name = "".concat(element.name);
	      }
	    });
	    oncomplite(data);
	  }, onerror, false, auth);
	}
	function fullCollection(params, oncomplite, onerror) {
	  var apiUrl = api_urlCollection;
	  if (params.searchQuery && params.searchQuery !== "") {
	    apiUrl += "&queries[]={\"method\":\"search\",\"attribute\":\"name\",\"values\":[\"".concat(params.searchQuery, "\"]}");
	  }
	  network.silent(encodeURI(apiUrl + "&queries[]={\"method\":\"offset\",\"values\":[".concat(params.page * 36, "]}")), function (data) {
	    data.collection = false;
	    data.total_pages = data.total / 36;
	    data.documents.forEach(function (element) {
	      var language = Lampa.Storage.get('language');
	      if (language === 'uk') {
	        element.name = element.uk || element.name;
	      } else if (language === 'ru') {
	        element.name = element.ru || element.name;
	      } else {
	        element.name = "".concat(element.name);
	      }
	    });
	    oncomplite(data);
	  }, onerror, false, auth);
	}
	function mainCollectionGet(params, oncomplite, onerror) {
	  var apiUrlTMDB = 'https://api.themoviedb.org/3/';
	  var apiUrlProxy = 'apitmdb.' + (Lampa.Manifest && Lampa.Manifest.cub_domain ? Lampa.Manifest.cub_domain : 'cub.red') + '/3/';
	  var request = "collection/".concat(params.collectionID, "?api_key=4ef0d7355d9ffb5151e987764708ce96&language=").concat(Lampa.Storage.get('language'));
	  var apiUrl = Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request;
	  network.silent(apiUrl, function (data) {
	    //data = data.contents;
	    data.results = data.parts;
	    data.total_pages = data.total / 36;
	    oncomplite(data);
	  }, onerror, false);
	}
	function collectionBookmarkSave(action, card_data) {
	  if (action === 'collectionBookmarkAdd') {
	    try {
	      var currentItems = Lampa.Storage.get('nc_collectionBookmarks') || [];
	      var isDuplicate = currentItems.some(function (item) {
	        return item.$id === card_data.$id;
	      });
	      if (isDuplicate) {
	        return false;
	      }
	      Lampa.Storage.add('nc_collectionBookmarks', card_data);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	}
	function collectionBookmarkRemove(action, card_data) {
	  if (action === 'collectionBookmarkRemove') {
	    try {
	      var currentItems = Lampa.Storage.get('nc_collectionBookmarks');
	      var updatedItems = currentItems.filter(function (item) {
	        return item.$id !== card_data.$id;
	      });
	      if (currentItems.length === updatedItems.length) {
	        console.error('Ошибка: Запись не найдена');
	        return false;
	      }
	      Lampa.Storage.set('nc_collectionBookmarks', JSON.stringify(updatedItems));
	      return true;
	    } catch (error) {
	      console.error('Произошла ошибка при удалении записи:', error);
	      return false;
	    }
	  }
	}
	function clear() {
	  network.clear();
	}
	var Api = {
	  main: main$2,
	  full: full,
	  bookmarkRemove: bookmarkRemove,
	  bookmarkSave: bookmarkSave,
	  mainCollection: mainCollection,
	  fullCollection: fullCollection,
	  mainCollectionGet: mainCollectionGet,
	  collectionBookmarkSave: collectionBookmarkSave,
	  collectionBookmarkRemove: collectionBookmarkRemove,
	  clear: clear
	};

	var Favorites$1 = /*#__PURE__*/function () {
	  function Favorites() {
	    _classCallCheck(this, Favorites);
	  }
	  return _createClass(Favorites, null, [{
	    key: "get",
	    value: function get() {
	      return Lampa.Storage.get('nc_networkLists', '[]');
	    }
	  }, {
	    key: "find",
	    value: function find(favorite) {
	      return this.get().find(function (a) {
	        return a.id === favorite.id;
	      });
	    }
	  }, {
	    key: "remove",
	    value: function remove(favorite) {
	      var list = this.get();
	      var find = this.find(favorite);
	      if (find) {
	        Lampa.Arrays.remove(list, find);
	        Lampa.Storage.set('nc_networkLists', list);
	        Lampa.Noty.show(Lampa.Lang.translate('nc_favoriteDeleted') + ' ' + find.card_data.name);
	      }
	    }
	  }, {
	    key: "add",
	    value: function add(favorite) {
	      var list = this.get();
	      var find = this.find(favorite);
	      if (!find) {
	        Lampa.Arrays.extend(favorite, {
	          //id: Lampa.Utils.uid(),
	          id: favorite.type + favorite.card_data.$id,
	          added: Date.now()
	        });
	        list.push(favorite);
	        Lampa.Storage.set('nc_networkLists', list);
	        Lampa.Noty.show("Add, need reboot");
	      }
	    }
	  }, {
	    key: "update",
	    value: function update(favorite) {
	      var list = this.get();
	      var find = this.find(favorite);
	      if (find) {
	        Lampa.Storage.set('nc_networkLists', list);
	      }
	    }
	  }, {
	    key: "toggle",
	    value: function toggle(favorite) {
	      return this.find(favorite) ? this.remove(favorite) : this.add(favorite);
	    }
	  }]);
	}();

	function list() {
	  return {
	    "results": [{
	      "iso_3166_1": "CN",
	      "english_name": "China",
	      "native_name": "China"
	    }, {
	      "iso_3166_1": "US",
	      "english_name": "United States of America",
	      "native_name": "United States"
	    }, {
	      "iso_3166_1": "FR",
	      "english_name": "France",
	      "native_name": "France"
	    }, {
	      "iso_3166_1": "GB",
	      "english_name": "United Kingdom",
	      "native_name": "United Kingdom"
	    }, {
	      "iso_3166_1": "RU",
	      "english_name": "Russia",
	      "native_name": "Russia"
	    }, {
	      "iso_3166_1": "AD",
	      "english_name": "Andorra",
	      "native_name": "Andorra"
	    }, {
	      "iso_3166_1": "AE",
	      "english_name": "United Arab Emirates",
	      "native_name": "United Arab Emirates"
	    }, {
	      "iso_3166_1": "AG",
	      "english_name": "Antigua and Barbuda",
	      "native_name": "Antigua & Barbuda"
	    }, {
	      "iso_3166_1": "AL",
	      "english_name": "Albania",
	      "native_name": "Albania"
	    }, {
	      "iso_3166_1": "AR",
	      "english_name": "Argentina",
	      "native_name": "Argentina"
	    }, {
	      "iso_3166_1": "AT",
	      "english_name": "Austria",
	      "native_name": "Austria"
	    }, {
	      "iso_3166_1": "AU",
	      "english_name": "Australia",
	      "native_name": "Australia"
	    }, {
	      "iso_3166_1": "BA",
	      "english_name": "Bosnia and Herzegovina",
	      "native_name": "Bosnia & Herzegovina"
	    }, {
	      "iso_3166_1": "BB",
	      "english_name": "Barbados",
	      "native_name": "Barbados"
	    }, {
	      "iso_3166_1": "BE",
	      "english_name": "Belgium",
	      "native_name": "Belgium"
	    }, {
	      "iso_3166_1": "BG",
	      "english_name": "Bulgaria",
	      "native_name": "Bulgaria"
	    }, {
	      "iso_3166_1": "BH",
	      "english_name": "Bahrain",
	      "native_name": "Bahrain"
	    }, {
	      "iso_3166_1": "BM",
	      "english_name": "Bermuda",
	      "native_name": "Bermuda"
	    }, {
	      "iso_3166_1": "BO",
	      "english_name": "Bolivia",
	      "native_name": "Bolivia"
	    }, {
	      "iso_3166_1": "BR",
	      "english_name": "Brazil",
	      "native_name": "Brazil"
	    }, {
	      "iso_3166_1": "BS",
	      "english_name": "Bahamas",
	      "native_name": "Bahamas"
	    }, {
	      "iso_3166_1": "CA",
	      "english_name": "Canada",
	      "native_name": "Canada"
	    }, {
	      "iso_3166_1": "CH",
	      "english_name": "Switzerland",
	      "native_name": "Switzerland"
	    }, {
	      "iso_3166_1": "CI",
	      "english_name": "Cote D'Ivoire",
	      "native_name": "Côte d’Ivoire"
	    }, {
	      "iso_3166_1": "CL",
	      "english_name": "Chile",
	      "native_name": "Chile"
	    }, {
	      "iso_3166_1": "CO",
	      "english_name": "Colombia",
	      "native_name": "Colombia"
	    }, {
	      "iso_3166_1": "CR",
	      "english_name": "Costa Rica",
	      "native_name": "Costa Rica"
	    }, {
	      "iso_3166_1": "CU",
	      "english_name": "Cuba",
	      "native_name": "Cuba"
	    }, {
	      "iso_3166_1": "CV",
	      "english_name": "Cape Verde",
	      "native_name": "Cape Verde"
	    }, {
	      "iso_3166_1": "CZ",
	      "english_name": "Czech Republic",
	      "native_name": "Czech Republic"
	    }, {
	      "iso_3166_1": "DE",
	      "english_name": "Germany",
	      "native_name": "Germany"
	    }, {
	      "iso_3166_1": "DK",
	      "english_name": "Denmark",
	      "native_name": "Denmark"
	    }, {
	      "iso_3166_1": "DO",
	      "english_name": "Dominican Republic",
	      "native_name": "Dominican Republic"
	    }, {
	      "iso_3166_1": "DZ",
	      "english_name": "Algeria",
	      "native_name": "Algeria"
	    }, {
	      "iso_3166_1": "EC",
	      "english_name": "Ecuador",
	      "native_name": "Ecuador"
	    }, {
	      "iso_3166_1": "EE",
	      "english_name": "Estonia",
	      "native_name": "Estonia"
	    }, {
	      "iso_3166_1": "EG",
	      "english_name": "Egypt",
	      "native_name": "Egypt"
	    }, {
	      "iso_3166_1": "ES",
	      "english_name": "Spain",
	      "native_name": "Spain"
	    }, {
	      "iso_3166_1": "FI",
	      "english_name": "Finland",
	      "native_name": "Finland"
	    }, {
	      "iso_3166_1": "FJ",
	      "english_name": "Fiji",
	      "native_name": "Fiji"
	    }, {
	      "iso_3166_1": "GF",
	      "english_name": "French Guiana",
	      "native_name": "French Guiana"
	    }, {
	      "iso_3166_1": "GH",
	      "english_name": "Ghana",
	      "native_name": "Ghana"
	    }, {
	      "iso_3166_1": "GI",
	      "english_name": "Gibraltar",
	      "native_name": "Gibraltar"
	    }, {
	      "iso_3166_1": "GP",
	      "english_name": "Guadaloupe",
	      "native_name": "Guadeloupe"
	    }, {
	      "iso_3166_1": "GQ",
	      "english_name": "Equatorial Guinea",
	      "native_name": "Equatorial Guinea"
	    }, {
	      "iso_3166_1": "GR",
	      "english_name": "Greece",
	      "native_name": "Greece"
	    }, {
	      "iso_3166_1": "GT",
	      "english_name": "Guatemala",
	      "native_name": "Guatemala"
	    }, {
	      "iso_3166_1": "HK",
	      "english_name": "Hong Kong",
	      "native_name": "Hong Kong SAR China"
	    }, {
	      "iso_3166_1": "HN",
	      "english_name": "Honduras",
	      "native_name": "Honduras"
	    }, {
	      "iso_3166_1": "HR",
	      "english_name": "Croatia",
	      "native_name": "Croatia"
	    }, {
	      "iso_3166_1": "HU",
	      "english_name": "Hungary",
	      "native_name": "Hungary"
	    }, {
	      "iso_3166_1": "ID",
	      "english_name": "Indonesia",
	      "native_name": "Indonesia"
	    }, {
	      "iso_3166_1": "IE",
	      "english_name": "Ireland",
	      "native_name": "Ireland"
	    }, {
	      "iso_3166_1": "IL",
	      "english_name": "Israel",
	      "native_name": "Israel"
	    }, {
	      "iso_3166_1": "IN",
	      "english_name": "India",
	      "native_name": "India"
	    }, {
	      "iso_3166_1": "IQ",
	      "english_name": "Iraq",
	      "native_name": "Iraq"
	    }, {
	      "iso_3166_1": "IS",
	      "english_name": "Iceland",
	      "native_name": "Iceland"
	    }, {
	      "iso_3166_1": "IT",
	      "english_name": "Italy",
	      "native_name": "Italy"
	    }, {
	      "iso_3166_1": "JM",
	      "english_name": "Jamaica",
	      "native_name": "Jamaica"
	    }, {
	      "iso_3166_1": "JO",
	      "english_name": "Jordan",
	      "native_name": "Jordan"
	    }, {
	      "iso_3166_1": "JP",
	      "english_name": "Japan",
	      "native_name": "Japan"
	    }, {
	      "iso_3166_1": "KE",
	      "english_name": "Kenya",
	      "native_name": "Kenya"
	    }, {
	      "iso_3166_1": "KR",
	      "english_name": "South Korea",
	      "native_name": "South Korea"
	    }, {
	      "iso_3166_1": "KW",
	      "english_name": "Kuwait",
	      "native_name": "Kuwait"
	    }, {
	      "iso_3166_1": "LB",
	      "english_name": "Lebanon",
	      "native_name": "Lebanon"
	    }, {
	      "iso_3166_1": "LC",
	      "english_name": "St. Lucia",
	      "native_name": "St. Lucia"
	    }, {
	      "iso_3166_1": "LI",
	      "english_name": "Liechtenstein",
	      "native_name": "Liechtenstein"
	    }, {
	      "iso_3166_1": "LT",
	      "english_name": "Lithuania",
	      "native_name": "Lithuania"
	    }, {
	      "iso_3166_1": "LV",
	      "english_name": "Latvia",
	      "native_name": "Latvia"
	    }, {
	      "iso_3166_1": "LY",
	      "english_name": "Libyan Arab Jamahiriya",
	      "native_name": "Libya"
	    }, {
	      "iso_3166_1": "MA",
	      "english_name": "Morocco",
	      "native_name": "Morocco"
	    }, {
	      "iso_3166_1": "MC",
	      "english_name": "Monaco",
	      "native_name": "Monaco"
	    }, {
	      "iso_3166_1": "MD",
	      "english_name": "Moldova",
	      "native_name": "Moldova"
	    }, {
	      "iso_3166_1": "MK",
	      "english_name": "Macedonia",
	      "native_name": "Macedonia"
	    }, {
	      "iso_3166_1": "MT",
	      "english_name": "Malta",
	      "native_name": "Malta"
	    }, {
	      "iso_3166_1": "MU",
	      "english_name": "Mauritius",
	      "native_name": "Mauritius"
	    }, {
	      "iso_3166_1": "MX",
	      "english_name": "Mexico",
	      "native_name": "Mexico"
	    }, {
	      "iso_3166_1": "MY",
	      "english_name": "Malaysia",
	      "native_name": "Malaysia"
	    }, {
	      "iso_3166_1": "MZ",
	      "english_name": "Mozambique",
	      "native_name": "Mozambique"
	    }, {
	      "iso_3166_1": "NE",
	      "english_name": "Niger",
	      "native_name": "Niger"
	    }, {
	      "iso_3166_1": "NG",
	      "english_name": "Nigeria",
	      "native_name": "Nigeria"
	    }, {
	      "iso_3166_1": "NL",
	      "english_name": "Netherlands",
	      "native_name": "Netherlands"
	    }, {
	      "iso_3166_1": "NO",
	      "english_name": "Norway",
	      "native_name": "Norway"
	    }, {
	      "iso_3166_1": "NZ",
	      "english_name": "New Zealand",
	      "native_name": "New Zealand"
	    }, {
	      "iso_3166_1": "OM",
	      "english_name": "Oman",
	      "native_name": "Oman"
	    }, {
	      "iso_3166_1": "PA",
	      "english_name": "Panama",
	      "native_name": "Panama"
	    }, {
	      "iso_3166_1": "PE",
	      "english_name": "Peru",
	      "native_name": "Peru"
	    }, {
	      "iso_3166_1": "PF",
	      "english_name": "French Polynesia",
	      "native_name": "French Polynesia"
	    }, {
	      "iso_3166_1": "PH",
	      "english_name": "Philippines",
	      "native_name": "Philippines"
	    }, {
	      "iso_3166_1": "PK",
	      "english_name": "Pakistan",
	      "native_name": "Pakistan"
	    }, {
	      "iso_3166_1": "PL",
	      "english_name": "Poland",
	      "native_name": "Poland"
	    }, {
	      "iso_3166_1": "PS",
	      "english_name": "Palestinian Territory",
	      "native_name": "Palestinian Territories"
	    }, {
	      "iso_3166_1": "PT",
	      "english_name": "Portugal",
	      "native_name": "Portugal"
	    }, {
	      "iso_3166_1": "PY",
	      "english_name": "Paraguay",
	      "native_name": "Paraguay"
	    }, {
	      "iso_3166_1": "QA",
	      "english_name": "Qatar",
	      "native_name": "Qatar"
	    }, {
	      "iso_3166_1": "RO",
	      "english_name": "Romania",
	      "native_name": "Romania"
	    }, {
	      "iso_3166_1": "RS",
	      "english_name": "Serbia",
	      "native_name": "Serbia"
	    }, {
	      "iso_3166_1": "SA",
	      "english_name": "Saudi Arabia",
	      "native_name": "Saudi Arabia"
	    }, {
	      "iso_3166_1": "SC",
	      "english_name": "Seychelles",
	      "native_name": "Seychelles"
	    }, {
	      "iso_3166_1": "SE",
	      "english_name": "Sweden",
	      "native_name": "Sweden"
	    }, {
	      "iso_3166_1": "SG",
	      "english_name": "Singapore",
	      "native_name": "Singapore"
	    }, {
	      "iso_3166_1": "SI",
	      "english_name": "Slovenia",
	      "native_name": "Slovenia"
	    }, {
	      "iso_3166_1": "SK",
	      "english_name": "Slovakia",
	      "native_name": "Slovakia"
	    }, {
	      "iso_3166_1": "SM",
	      "english_name": "San Marino",
	      "native_name": "San Marino"
	    }, {
	      "iso_3166_1": "SN",
	      "english_name": "Senegal",
	      "native_name": "Senegal"
	    }, {
	      "iso_3166_1": "SV",
	      "english_name": "El Salvador",
	      "native_name": "El Salvador"
	    }, {
	      "iso_3166_1": "TC",
	      "english_name": "Turks and Caicos Islands",
	      "native_name": "Turks & Caicos Islands"
	    }, {
	      "iso_3166_1": "TH",
	      "english_name": "Thailand",
	      "native_name": "Thailand"
	    }, {
	      "iso_3166_1": "TN",
	      "english_name": "Tunisia",
	      "native_name": "Tunisia"
	    }, {
	      "iso_3166_1": "TR",
	      "english_name": "Turkey",
	      "native_name": "Turkey"
	    }, {
	      "iso_3166_1": "TT",
	      "english_name": "Trinidad and Tobago",
	      "native_name": "Trinidad & Tobago"
	    }, {
	      "iso_3166_1": "TW",
	      "english_name": "Taiwan",
	      "native_name": "Taiwan"
	    }, {
	      "iso_3166_1": "TZ",
	      "english_name": "Tanzania",
	      "native_name": "Tanzania"
	    }, {
	      "iso_3166_1": "UG",
	      "english_name": "Uganda",
	      "native_name": "Uganda"
	    }, {
	      "iso_3166_1": "UY",
	      "english_name": "Uruguay",
	      "native_name": "Uruguay"
	    }, {
	      "iso_3166_1": "VA",
	      "english_name": "Holy See",
	      "native_name": "Vatican City"
	    }, {
	      "iso_3166_1": "VE",
	      "english_name": "Venezuela",
	      "native_name": "Venezuela"
	    }, {
	      "iso_3166_1": "XK",
	      "english_name": "Kosovo",
	      "native_name": "Kosovo"
	    }, {
	      "iso_3166_1": "YE",
	      "english_name": "Yemen",
	      "native_name": "Yemen"
	    }, {
	      "iso_3166_1": "ZA",
	      "english_name": "South Africa",
	      "native_name": "South Africa"
	    }, {
	      "iso_3166_1": "ZM",
	      "english_name": "Zambia",
	      "native_name": "Zambia"
	    }]
	  };
	}
	var GeoBase$1 = list();

	function setGeo(a) {
	  if (Lampa.Storage.get('nc_networksListGeo') === a.id) {
	    nullGeo();
	  } else {
	    Lampa.Storage.set('nc_networksListGeo', a.id);
	    Lampa.Noty.show(Lampa.Lang.translate('nc_networksListGeoAdd'));
	  }
	}
	function nullGeo() {
	  Lampa.Storage.set('nc_networksListGeo', null);
	  Lampa.Noty.show(Lampa.Lang.translate('nc_networksListGeoDeleted'));
	}
	function component$4(object) {
	  var network = new Lampa.Reguest();
	  var scroll = new Lampa.Scroll({
	    mask: true,
	    over: true,
	    step: 250,
	    end_ratio: 2
	  });
	  var items = [];
	  var html = document.createElement('div');
	  var header = document.createElement('div');
	  var body = document.createElement('div');
	  var total_pages = 0;
	  var last;
	  var waitload;
	  var active = 0;
	  this.create = function () {
	    Api.main(object, this.build.bind(this), this.empty.bind(this));
	  };
	  this.empty = function () {
	    header.className = 'lme-catalog lme-header lme-error';
	    //Bookmarks
	    var bookmarks = document.createElement('div');
	    bookmarks.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    bookmarks.innerHTML = "<svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill=\"currentColor\" d=\"M11.4589 57.5318L30 47.7841L48.5411 57.5318L45 36.8859L60 22.2646L39.2704 19.2526L30 0.468231L20.7293 19.2526L0 22.2646L15 36.8859L11.4589 57.5318ZM9.3698 25.3092L23.6248 23.2378L30 10.3206L36.3752 23.2378L50.6302 25.3092L40.3154 35.3639L42.7504 49.5613L30.0003 42.8582L17.2502 49.5613L19.6852 35.3639L9.3698 25.3092Z\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('nc_bookmark'), "</div>");
	    bookmarks.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_bookmark'),
	        component: 'lmeNetworksBookmarks',
	        page: 1
	      });
	    });
	    bookmarks.on('hover:long', function () {
	      Lampa.Storage.set("nc_networksListHome", 'lmeNetworksBookmarks');
	      Lampa.Noty.show('Главный раздел изменен');
	    });

	    //Favorites
	    var favorites = document.createElement('div');
	    favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    favorites.innerHTML = "<svg width=\"46\" height=\"36\" viewBox=\"0 0 46 36\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M3 3H43M3 18H43M3 33H43\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
	    favorites.on('hover:enter', function () {
	      var itemsFavs = [];
	      Favorites$1.get().forEach(function (item) {
	        var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	        itemsFavs.push({
	          title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	          id: item.id
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsFavs,
	        onSelect: function onSelect(a) {
	          Favorites$1.remove(a);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    header.appendChild(favorites);
	    //Bookmarks
	    header.appendChild(bookmarks);
	    var button = document.createElement('div');
	    button.className = 'empty simple-button simple-button--invisible selector button--clear';
	    button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
	    button.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var empty = new Lampa.Empty();
	    if (button) empty.append(button);
	    html.addClass('lmeCatalog');
	    html.appendChild(header);
	    html.appendChild(empty.render(true));
	    this.start = empty.start;
	    this.activity.loader(false);
	    this.activity.toggle();
	  };
	  this.next = function () {
	    var _this = this;
	    if (waitload) return;
	    if (object.page < total_pages) {
	      waitload = true;
	      object.page++;
	      this.nextPageReuest(object, function (result) {
	        _this.append(result, true);
	        waitload = false;
	        _this.limit();
	      }, function () {
	        waitload = false;
	      });
	    }
	  };
	  this.nextPageReuest = function (object, resolve, reject) {
	    Api.main(object, resolve.bind(this), reject.bind(this));
	  };
	  this.append = function (data, append) {
	    var _this2 = this;
	    data.documents.forEach(function (element) {
	      // Migrate to Lampa.Maker.make('Card')
	      var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
	        params: {
	          // No special params needed for default card
	        }
	      }));
	      card.create();

	      // In v3, use card.render() to get DOM element
	      var cardElement = card.render(true);
	      var _cardElement$children = _slicedToArray(cardElement.children, 2),
	        viewElement = _cardElement$children[0],
	        titleElement = _cardElement$children[1];

	      // Перевірка наявності елементів
	      if (viewElement && titleElement) {
	        var iconsContainer = viewElement.querySelector('.card__icons');
	        if (iconsContainer) {
	          titleElement.classList.add('networkTitle');
	          // Видаляємо title з попереднього місця
	          cardElement.removeChild(titleElement);
	          // Додаємо до icons
	          iconsContainer.appendChild(titleElement);

	          // Add flag image if country exists
	          if (card.data.origin_country) {
	            var flagImg = document.createElement('img');
	            flagImg.src = "https://flagsapi.com/".concat(card.data.origin_country, "/flat/64.png");
	            iconsContainer.appendChild(flagImg);
	          }
	        }
	      }

	      // Use .use() method for event handling in v3
	      card.use({
	        onFocus: function onFocus() {
	          last = this.render(true);
	          active = items.indexOf(card);
	          scroll.update(this.render(true));
	        },
	        onTouch: function onTouch() {
	          last = this.render(true);
	          active = items.indexOf(card);
	        },
	        onEnter: function onEnter() {
	          var enabled = Lampa.Controller.enabled().name;
	          var card_data = this.data;
	          var menu = [];
	          menu.push({
	            title: "".concat(Lampa.Lang.translate('nc_openAction'), " New"),
	            action: 'open',
	            sort_by: 'first_air_date.desc',
	            type: 'New',
	            card_data: card_data
	          });
	          menu.push({
	            title: "".concat(Lampa.Lang.translate('nc_openAction'), " Top"),
	            action: 'open',
	            sort_by: '',
	            type: 'Top',
	            card_data: card_data
	          });
	          menu.push({
	            title: Lampa.Lang.translate('nc_bookmarkAdd'),
	            action: 'bookmarkAdd',
	            card_data: card_data
	          });
	          menu.push({
	            title: Lampa.Lang.translate('nc_favoriteAdd') + ' New',
	            action: 'favorite',
	            card_data: card_data,
	            type: 'new'
	          });
	          menu.push({
	            title: Lampa.Lang.translate('nc_favoriteAdd') + ' Top',
	            action: 'favorite',
	            card_data: card_data,
	            type: 'top'
	          });
	          menu.push({
	            title: '-----------------'
	          });
	          menu.push({
	            title: 'Favorites',
	            favorites: true
	          });
	          menu.push({
	            title: 'Search',
	            search: true
	          });
	          menu.push({
	            title: 'Country',
	            country: true
	          });
	          menu.push({
	            title: 'Reset',
	            reset: true
	          });
	          Lampa.Select.show({
	            title: "".concat(card_data.name, " [").concat(card_data.$id, "]"),
	            items: menu,
	            onBack: function onBack() {
	              Lampa.Controller.toggle(enabled);
	            },
	            onSelect: function onSelect(a) {
	              if (a.action === 'favorite') {
	                Favorites$1.add(a);
	              }
	              if (a.action === 'bookmarkAdd') {
	                var result = Api.bookmarkSave(a);
	                if (result === true) {
	                  console.log('Запись была успешно добавлена.');
	                  Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
	                } else if (result === false) {
	                  console.error('Не удалось добавить запись.');
	                  Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
	                }
	              }
	              if (a.action === 'open') {
	                Lampa.Activity.push({
	                  url: 'discover/tv',
	                  title: "".concat(a.type, " ").concat(a.card_data.title),
	                  //a.title + " " + a.card_data.title,
	                  component: "category_full",
	                  networks: a.card_data.$id,
	                  sort_by: a.sort_by,
	                  source: 'tmdb',
	                  card_type: true,
	                  page: 1
	                });
	              }
	              if (a.favorites) {
	                var itemsFavs = [];
	                Favorites$1.get().forEach(function (item) {
	                  var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	                  itemsFavs.push({
	                    title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	                    id: item.id
	                  });
	                });
	                Lampa.Select.show({
	                  title: Lampa.Lang.translate('nc_networksList'),
	                  items: itemsFavs,
	                  onSelect: function onSelect(a) {
	                    Favorites$1.remove(a);
	                  },
	                  onBack: function onBack() {
	                    Lampa.Controller.toggle('content');
	                  }
	                });
	              }
	              if (a.search) {
	                Lampa.Input.edit({
	                  free: true,
	                  nosave: true,
	                  nomic: true,
	                  value: ''
	                }, function (val) {
	                  if (val) {
	                    //this.clearButtons(false, val)
	                    object.searchQuery = val;
	                    Lampa.Activity.replace(object);
	                  } else {
	                    Lampa.Controller.toggle('content');
	                  }
	                });
	              }
	              if (a.country) {
	                var itemsGeo = [];
	                GeoBase$1.results.forEach(function (item) {
	                  itemsGeo.push({
	                    title: item.english_name,
	                    id: item.iso_3166_1
	                  });
	                });
	                Lampa.Select.show({
	                  title: Lampa.Lang.translate('nc_networksList'),
	                  items: itemsGeo,
	                  onSelect: function onSelect(a) {
	                    object.geoSearchQuery = a.id;
	                    Lampa.Activity.replace(object);
	                  },
	                  onLong: function onLong(a) {
	                    setGeo(a);
	                  },
	                  onBack: function onBack() {
	                    Lampa.Controller.toggle('content');
	                  }
	                });
	              }
	              if (a.reset) {
	                object.searchQuery = "";
	                Lampa.Activity.replace(object);
	              }
	            }
	          });
	        }
	      });
	      body.appendChild(card.render(true));
	      items.push(card);
	      if (_this2.cardRender) _this2.cardRender(object, element, card);
	      if (append) Lampa.Controller.collectionAppend(card.render(true));
	    });
	  };
	  this.limit = function () {
	    var limit_view = 12;
	    var lilit_collection = 36;
	    var colection = items.slice(Math.max(0, active - limit_view), active + limit_view);
	    items.forEach(function (item) {
	      if (colection.indexOf(item) === -1) {
	        item.render(true).classList.remove('layer--render');
	      } else {
	        item.render(true).classList.add('layer--render');
	      }
	    });
	    Navigator.setCollection(items.slice(Math.max(0, active - lilit_collection), active + lilit_collection).map(function (c) {
	      return c.render(true);
	    }));
	    Navigator.focused(last);
	    Lampa.Layer.visible(scroll.render(true));
	  };
	  this.build = function (data) {
	    var _this3 = this;
	    header.className = 'lme-catalog lme-header';
	    //Bookmarks
	    var bookmarks = document.createElement('div');
	    bookmarks.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    bookmarks.innerHTML = "<svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill=\"currentColor\" d=\"M11.4589 57.5318L30 47.7841L48.5411 57.5318L45 36.8859L60 22.2646L39.2704 19.2526L30 0.468231L20.7293 19.2526L0 22.2646L15 36.8859L11.4589 57.5318ZM9.3698 25.3092L23.6248 23.2378L30 10.3206L36.3752 23.2378L50.6302 25.3092L40.3154 35.3639L42.7504 49.5613L30.0003 42.8582L17.2502 49.5613L19.6852 35.3639L9.3698 25.3092Z\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('nc_bookmark'), "</div>");
	    bookmarks.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_bookmark'),
	        component: 'lmeNetworksBookmarks',
	        page: 1
	      });
	    });
	    bookmarks.on('hover:long', function () {
	      Lampa.Storage.set("nc_networksListHome", 'lmeNetworksBookmarks');
	      Lampa.Noty.show('Главный раздел изменен');
	    });

	    //Favorites
	    var favorites = document.createElement('div');
	    favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    favorites.innerHTML = "<svg width=\"46\" height=\"36\" viewBox=\"0 0 46 36\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M3 3H43M3 18H43M3 33H43\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
	    favorites.on('hover:enter', function () {
	      var itemsFavs = [];
	      Favorites$1.get().forEach(function (item) {
	        var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	        itemsFavs.push({
	          title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	          id: item.id
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsFavs,
	        onSelect: function onSelect(a) {
	          Favorites$1.remove(a);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    var baseInfo = document.createElement('div');
	    baseInfo.className = 'lme-baseInfo';
	    baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_networkstat'), ": ").concat(data.total === 5000 ? '5000+' : data.total);
	    var search = document.createElement('div');
	    search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
	    search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div class=\"nc_tv\">Search</div>\n        ";
	    var clear = document.createElement('div');
	    clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div class=\"nc_tv\">Reset search</div>\n        ";
	    clear.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_networksList'),
	        component: 'lmeNetworks',
	        page: 1
	      });
	    });
	    var geo = document.createElement('div');
	    geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div class=\"nc_tv\">".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
	    geo.on('hover:enter', function () {
	      var itemsGeo = [];
	      GeoBase$1.results.forEach(function (item) {
	        itemsGeo.push({
	          title: item.english_name,
	          id: item.iso_3166_1
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsGeo,
	        onSelect: function onSelect(a) {
	          object.geoSearchQuery = a.id;
	          Lampa.Activity.replace(object);
	        },
	        onLong: function onLong(a) {
	          setGeo(a);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    geo.on('hover:long', function () {
	      nullGeo();
	    });
	    header.appendChild(search);
	    header.appendChild(clear);
	    header.appendChild(geo);
	    header.appendChild(favorites);
	    //Bookmarks
	    header.appendChild(bookmarks);
	    header.appendChild(baseInfo);
	    if (data.documents.length) {
	      total_pages = data.total_pages;
	      body.classList.add('lme-catalog', 'category-full', 'cols--6');
	      scroll.minus();
	      scroll.onEnd = this.next.bind(this);
	      scroll.onScroll = this.limit.bind(this);
	      scroll.onWheel = function (step) {
	        if (!Lampa.Controller.own(_this3)) _this3.start();
	        if (step > 0) Navigator.move('down');else Navigator.move('up');
	      };
	      this.append(data);
	      scroll.append(body);
	      html.addClass('lmeCatalog');
	      html.appendChild(header);
	      html.appendChild(scroll.render(true));
	      this.buildSearch();
	      this.limit();
	      this.activity.loader(false);
	      this.activity.toggle();
	    } else {
	      this.empty();
	    }
	  };
	  this.buildSearch = function () {
	    var btn = html.find('.button--search');
	    btn.on('hover:enter', function () {
	      Lampa.Input.edit({
	        free: true,
	        nosave: true,
	        nomic: true,
	        value: ''
	      }, function (val) {
	        if (val) {
	          //this.clearButtons(false, val)
	          object.searchQuery = val;
	          object.geoSearchQuery = "";
	          Lampa.Activity.replace(object);
	        } else {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	  };
	  this.start = function () {
	    var _this4 = this;
	    Lampa.Controller.add('content', {
	      link: this,
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(header, scroll.render(true));
	        Lampa.Controller.collectionFocus(last || false, header, scroll.render(true));
	      },
	      left: function left() {
	        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
	      },
	      right: function right() {
	        if (_this4.onRight) {
	          if (Navigator.canmove('right')) Navigator.move('right');else _this4.onRight();
	        } else Navigator.move('right');
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        if (Navigator.canmove('down')) Navigator.move('down');
	      },
	      back: function back() {
	        Lampa.Activity.backward();
	      }
	    });
	    Lampa.Controller.toggle('content');
	  };
	  this.refresh = function () {
	    this.activity.needRefresh();
	  };
	  this.pause = function () {};
	  this.stop = function () {};
	  this.render = function (js) {
	    return js ? html : $(html);
	  };
	  this.clearButtons = function (category, search) {
	    var btn_search = html.find('.button--search');
	    btn_search.find('div').addClass('hide').text('');
	    btn_search.find('div').removeClass('hide').text(search);
	  };
	  this.destroy = function () {
	    network.clear();
	    Lampa.Arrays.destroy(items);
	    scroll.destroy();
	    html.remove();
	    body.remove();
	    items = [];
	  };
	}

	function component$3(object) {
	  var network = new Lampa.Reguest();
	  var scroll = new Lampa.Scroll({
	    mask: true,
	    over: true,
	    step: 250,
	    end_ratio: 2
	  });
	  var items = [];
	  var html = document.createElement('div');
	  var header = document.createElement('div');
	  var body = document.createElement('div');
	  var total_pages = 0;
	  var last;
	  var waitload;
	  var active = 0;
	  this.create = function () {
	    //Api.bookmark(this.build.bind(this), this.empty.bind(this))
	    if (Lampa.Storage.get('nc_bookmarks')) this.build(Lampa.Storage.get('nc_bookmarks'));else this.empty(new Error("No results found"));
	  };
	  this.empty = function () {
	    var panel = document.createElement('div');
	    panel.className = 'panelNC blockNC';
	    var ncMain = document.createElement('div');
	    ncMain.className = 'nc-main simple-button simple-button--invisible simple-button--filter selector';
	    ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>All service</div>";
	    ncMain.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_networksList'),
	        component: 'lmeNetworks',
	        page: 1
	      });
	    });
	    ncMain.on('hover:long', function () {
	      Lampa.Storage.set("nc_networksListHome", 'lmeNetworks');
	      Lampa.Noty.show('Главный раздел изменен');
	    });
	    var button = document.createElement('div');
	    button.className = 'nc-empty simple-button simple-button--invisible selector button--clear';
	    button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
	    button.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var empty = new Lampa.Empty();
	    if (button) panel.append(button);
	    if (button) panel.append(ncMain);
	    empty.append(panel);
	    html.appendChild(empty.render(true));
	    this.start = empty.start;
	    this.activity.loader(false);
	    this.activity.toggle();
	  };
	  this.next = function () {
	    var _this = this;
	    if (waitload) return;
	    if (object.page < total_pages) {
	      waitload = true;
	      object.page++;
	      this.nextPageReuest(object, function (result) {
	        _this.append(result, true);
	        waitload = false;
	        _this.limit();
	      }, function () {
	        waitload = false;
	      });
	    }
	  };
	  this.nextPageReuest = function (object, resolve, reject) {
	    Api.full(object, resolve.bind(this), reject.bind(this));
	  };
	  this.append = function (data, append) {
	    var _this2 = this;
	    data.forEach(function (element) {
	      // Migrate to Lampa.Maker.make('Card')
	      var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
	        params: {
	          // No special params needed for default card
	        }
	      }));
	      card.create();

	      // Use .use() method for event handling in v3
	      card.use({
	        onFocus: function onFocus() {
	          last = this.render(true);
	          active = items.indexOf(card);
	          scroll.update(this.render(true));
	        },
	        onTouch: function onTouch() {
	          last = this.render(true);
	          active = items.indexOf(card);
	        },
	        onEnter: function onEnter() {
	          var enabled = Lampa.Controller.enabled().name;
	          var card_data = this.data;
	          var menu = [];
	          menu.push({
	            title: "".concat(Lampa.Lang.translate('nc_openAction'), " New"),
	            action: 'open',
	            sort_by: 'first_air_date.desc',
	            type: 'New',
	            card_data: card_data
	          });
	          menu.push({
	            title: "".concat(Lampa.Lang.translate('nc_openAction'), " Top"),
	            action: 'open',
	            sort_by: '',
	            type: 'Top',
	            card_data: card_data
	          });
	          menu.push({
	            title: Lampa.Lang.translate('nc_favoriteAdd') + ' New',
	            action: 'favorite',
	            card_data: card_data,
	            type: 'new'
	          });
	          menu.push({
	            title: Lampa.Lang.translate('nc_favoriteAdd') + ' Top',
	            action: 'favorite',
	            card_data: card_data,
	            type: 'top'
	          });
	          menu.push({
	            title: Lampa.Lang.translate('nc_bookmarkDelete'),
	            action: 'bookmarkRemove',
	            card_data: card_data
	          });
	          menu.push({
	            title: '-----------------'
	          });
	          menu.push({
	            title: 'Favorites',
	            favorites: true
	          });
	          Lampa.Select.show({
	            title: Lampa.Lang.translate('title_action') + ' ' + card_data.name,
	            items: menu,
	            onBack: function onBack() {
	              Lampa.Controller.toggle(enabled);
	            },
	            onSelect: function onSelect(a) {
	              if (a.action === 'favorite') {
	                Favorites$1.add(a);
	              }
	              if (a.action === 'bookmarkRemove') {
	                //Api.bookmarkRemove(a)
	                var result = Api.bookmarkRemove(a);
	                if (result === true) {
	                  console.log('Запись была успешно удалена.');
	                  Lampa.Activity.replace({
	                    url: '',
	                    title: Lampa.Lang.translate('nc_bookmark'),
	                    component: 'lmeNetworksBookmarks',
	                    page: 1
	                  });
	                  Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleted'));
	                } else if (result === false) {
	                  console.error('Не удалось удалить запись.');
	                  Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleteError'));
	                }
	              }
	              if (a.action === 'open') {
	                Lampa.Activity.push({
	                  url: 'discover/tv',
	                  title: "".concat(a.type, " ").concat(a.card_data.title),
	                  //a.title + " " + a.card_data.title,
	                  component: "category_full",
	                  networks: a.card_data.$id,
	                  sort_by: a.sort_by,
	                  source: 'tmdb',
	                  card_type: true,
	                  page: 1
	                });
	              }
	              if (a.favorites) {
	                var itemsFavs = [];
	                Favorites$1.get().forEach(function (item) {
	                  var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	                  itemsFavs.push({
	                    title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	                    id: item.id
	                  });
	                });
	                Lampa.Select.show({
	                  title: Lampa.Lang.translate('nc_networksList'),
	                  items: itemsFavs,
	                  onSelect: function onSelect(a) {
	                    Favorites$1.remove(a);
	                  },
	                  onBack: function onBack() {
	                    Lampa.Controller.toggle('content');
	                  }
	                });
	              }
	              if (a.search) {
	                Lampa.Input.edit({
	                  free: true,
	                  nosave: true,
	                  nomic: true,
	                  value: ''
	                }, function (val) {
	                  if (val) {
	                    //this.clearButtons(false, val)
	                    object.searchQuery = val;
	                    Lampa.Activity.replace(object);
	                  } else {
	                    Lampa.Controller.toggle('content');
	                  }
	                });
	              }
	              if (a.country) {
	                var itemsGeo = [];
	                GeoBase$1.results.forEach(function (item) {
	                  itemsGeo.push({
	                    title: item.english_name,
	                    id: item.iso_3166_1
	                  });
	                });
	                Lampa.Select.show({
	                  title: Lampa.Lang.translate('nc_networksList'),
	                  items: itemsGeo,
	                  onSelect: function onSelect(a) {
	                    object.geoSearchQuery = a.id;
	                    Lampa.Activity.replace(object);
	                  },
	                  onBack: function onBack() {
	                    Lampa.Controller.toggle('content');
	                  }
	                });
	              }
	              if (a.reset) {
	                object.searchQuery = "";
	                Lampa.Activity.replace(object);
	              }
	            }
	          });
	        }
	      });
	      body.appendChild(card.render(true));
	      items.push(card);
	      if (_this2.cardRender) _this2.cardRender(object, element, card);
	      if (append) Lampa.Controller.collectionAppend(card.render(true));
	    });
	  };
	  this.limit = function () {
	    var limit_view = 12;
	    var lilit_collection = 36;
	    var colection = items.slice(Math.max(0, active - limit_view), active + limit_view);
	    items.forEach(function (item) {
	      if (colection.indexOf(item) === -1) {
	        item.render(true).classList.remove('layer--render');
	      } else {
	        item.render(true).classList.add('layer--render');
	      }
	    });
	    Navigator.setCollection(items.slice(Math.max(0, active - lilit_collection), active + lilit_collection).map(function (c) {
	      return c.render(true);
	    }));
	    Navigator.focused(last);
	    Lampa.Layer.visible(scroll.render(true));
	  };
	  this.build = function (data) {
	    var _this3 = this;
	    header.className = 'lme-catalog lme-header';
	    //Main
	    var ncMain = document.createElement('div');
	    ncMain.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('nc_networksList'), "</div>");
	    ncMain.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_networksList'),
	        component: 'lmeNetworks',
	        page: 1
	      });
	    });
	    ncMain.on('hover:long', function () {
	      Lampa.Storage.set("nc_networksListHome", 'lmeNetworks');
	      Lampa.Noty.show('Главный раздел изменен');
	    });
	    var favorites = document.createElement('div');
	    favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    favorites.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n                        <path fill=\"currentColor\" d=\"M478.354,146.286H33.646c-12.12,0-21.943,9.823-21.943,21.943v321.829c0,12.12,9.823,21.943,21.943,21.943h444.709\n                            c12.12,0,21.943-9.823,21.943-21.943V168.229C500.297,156.109,490.474,146.286,478.354,146.286z M456.411,468.114H55.589V190.171\n                            h400.823V468.114z\"/>\n                        <path fill=\"currentColor\" d=\"M441.783,73.143H70.217c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h371.566\n                            c12.12,0,21.943-9.823,21.943-21.943C463.726,82.966,453.903,73.143,441.783,73.143z\"/>\n                        <path fill=\"currentColor\" d=\"M405.211,0H106.789c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h298.423\n                            c12.12,0,21.943-9.823,21.943-21.943C427.154,9.823,417.331,0,405.211,0z\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
	    favorites.on('hover:enter', function () {
	      var itemsFavs = [];
	      Favorites$1.get().forEach(function (item) {
	        var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	        itemsFavs.push({
	          title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	          id: item.id
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsFavs,
	        onSelect: function onSelect(a) {
	          Favorites$1.remove(a);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    var baseInfo = document.createElement('div');
	    baseInfo.className = 'lme-baseInfo';
	    baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_bookmarksstat'), ": ").concat(data.length);
	    var search = document.createElement('div');
	    search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
	    search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div>Search</div>\n        ";
	    var clear = document.createElement('div');
	    clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
	    clear.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var geo = document.createElement('div');
	    geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div>".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
	    geo.on('hover:enter', function () {
	      var itemsGeo = [];
	      GeoBase$1.results.forEach(function (item) {
	        itemsGeo.push({
	          title: item.english_name,
	          id: item.iso_3166_1
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsGeo,
	        onSelect: function onSelect(a) {
	          object.geoSearchQuery = a.id;
	          Lampa.Activity.replace(object);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });

	    //header.appendChild(search)
	    //header.appendChild(clear)
	    //header.appendChild(geo)
	    header.appendChild(favorites);
	    header.appendChild(ncMain);
	    header.appendChild(baseInfo);
	    if (data.length) {
	      total_pages = data.total_pages;
	      body.classList.add('lme-catalog', 'category-full');
	      scroll.minus();
	      scroll.onEnd = this.next.bind(this);
	      scroll.onScroll = this.limit.bind(this);
	      scroll.onWheel = function (step) {
	        if (!Lampa.Controller.own(_this3)) _this3.start();
	        if (step > 0) Navigator.move('down');else Navigator.move('up');
	      };
	      this.append(data);
	      scroll.append(body);
	      html.addClass('lmeCatalog');
	      html.appendChild(header);
	      html.appendChild(scroll.render(true));
	      //this.buildSearch()
	      this.limit();
	      this.activity.loader(false);
	      this.activity.toggle();
	    } else {
	      this.empty();
	    }
	  };
	  this.buildSearch = function () {
	    var btn = html.find('.button--search');
	    btn.on('hover:enter', function () {
	      Lampa.Input.edit({
	        free: true,
	        nosave: true,
	        nomic: true,
	        value: ''
	      }, function (val) {
	        if (val) {
	          //this.clearButtons(false, val)
	          object.searchQuery = val;
	          object.geoSearchQuery = "";
	          Lampa.Activity.replace(object);
	        } else {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	  };
	  this.start = function () {
	    var _this4 = this;
	    Lampa.Controller.add('content', {
	      link: this,
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(header, scroll.render(true));
	        Lampa.Controller.collectionFocus(last || false, header, scroll.render(true));
	      },
	      left: function left() {
	        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
	      },
	      right: function right() {
	        if (_this4.onRight) {
	          if (Navigator.canmove('right')) Navigator.move('right');else _this4.onRight();
	        } else Navigator.move('right');
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        if (Navigator.canmove('down')) Navigator.move('down');
	      },
	      back: function back() {
	        Lampa.Activity.backward();
	      }
	    });
	    Lampa.Controller.toggle('content');
	  };
	  this.refresh = function () {
	    this.activity.needRefresh();
	  };
	  this.pause = function () {};
	  this.stop = function () {};
	  this.render = function (js) {
	    return js ? html : $(html);
	  };
	  this.clearButtons = function (category, search) {
	    var btn_search = html.find('.button--search');
	    btn_search.find('div').addClass('hide').text('');
	    btn_search.find('div').removeClass('hide').text(search);
	  };
	  this.destroy = function () {
	    network.clear();
	    Lampa.Arrays.destroy(items);
	    scroll.destroy();
	    html.remove();
	    body.remove();
	    items = [];
	  };
	}

	function component$2(object) {
	  var network = new Lampa.Reguest();
	  var scroll = new Lampa.Scroll({
	    mask: true,
	    over: true,
	    step: 250,
	    end_ratio: 2
	  });
	  var items = [];
	  var html = document.createElement('div');
	  var header = document.createElement('div');
	  var body = document.createElement('div');
	  var total_pages = 0;
	  var last;
	  var waitload;
	  var active = 0;
	  this.create = function () {
	    Api.mainCollection(object, this.build.bind(this), this.empty.bind(this));
	  };
	  this.empty = function () {
	    var button = document.createElement('div');
	    button.className = 'empty simple-button simple-button--invisible selector button--clear';
	    button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
	    button.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var empty = new Lampa.Empty();
	    if (button) empty.append(button);
	    html.appendChild(empty.render(true));
	    this.start = empty.start;
	    this.activity.loader(false);
	    this.activity.toggle();
	  };
	  this.next = function () {
	    var _this = this;
	    if (waitload) return;
	    if (object.page < total_pages) {
	      waitload = true;
	      object.page++;
	      this.nextPageReuest(object, function (result) {
	        _this.append(result, true);
	        waitload = false;
	        _this.limit();
	      }, function () {
	        waitload = false;
	      });
	    }
	  };
	  this.nextPageReuest = function (object, resolve, reject) {
	    Api.fullCollection(object, resolve.bind(this), reject.bind(this));
	  };
	  this.append = function (data, append) {
	    var _this2 = this;
	    data.documents.forEach(function (element) {
	      // Migrate to Lampa.Maker.make('Card')
	      var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
	        params: {
	          // No special params needed for default card
	        }
	      }));
	      card.create();

	      // Use .use() method for event handling in v3
	      card.use({
	        onFocus: function onFocus() {
	          last = this.render(true);
	          active = items.indexOf(card);
	          scroll.update(this.render(true));
	        },
	        onTouch: function onTouch() {
	          last = this.render(true);
	          active = items.indexOf(card);
	        },
	        onMenu: function onMenu() {
	          var result = Api.collectionBookmarkSave('collectionBookmarkAdd', this.data);
	          if (result === true) {
	            console.log('Запись была успешно добавлена.');
	            Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
	          } else if (result === false) {
	            console.error('Не удалось добавить запись.');
	            Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
	          }
	        },
	        onEnter: function onEnter() {
	          Lampa.Activity.push({
	            url: '',
	            title: this.data.name,
	            collectionID: this.data.$id,
	            component: 'lmeCollection',
	            page: 1
	          });
	        }
	      });
	      body.appendChild(card.render(true));
	      items.push(card);
	      if (_this2.cardRender) _this2.cardRender(object, element, card);
	      if (append) Lampa.Controller.collectionAppend(card.render(true));
	    });
	  };
	  this.limit = function () {
	    var limit_view = 12;
	    var lilit_collection = 36;
	    var colection = items.slice(Math.max(0, active - limit_view), active + limit_view);
	    items.forEach(function (item) {
	      if (colection.indexOf(item) === -1) {
	        item.render(true).classList.remove('layer--render');
	      } else {
	        item.render(true).classList.add('layer--render');
	      }
	    });
	    Navigator.setCollection(items.slice(Math.max(0, active - lilit_collection), active + lilit_collection).map(function (c) {
	      return c.render(true);
	    }));
	    Navigator.focused(last);
	    Lampa.Layer.visible(scroll.render(true));
	  };
	  this.build = function (data) {
	    var _this3 = this;
	    header.className = 'lme-catalog lme-header';
	    //Bookmarks
	    var bookmarks = document.createElement('div');
	    bookmarks.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    bookmarks.innerHTML = "<svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill=\"currentColor\" d=\"M11.4589 57.5318L30 47.7841L48.5411 57.5318L45 36.8859L60 22.2646L39.2704 19.2526L30 0.468231L20.7293 19.2526L0 22.2646L15 36.8859L11.4589 57.5318ZM9.3698 25.3092L23.6248 23.2378L30 10.3206L36.3752 23.2378L50.6302 25.3092L40.3154 35.3639L42.7504 49.5613L30.0003 42.8582L17.2502 49.5613L19.6852 35.3639L9.3698 25.3092Z\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('nc_bookmark'), "</div>");
	    bookmarks.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('nc_bookmark'),
	        component: 'lmeCollectionBookmark',
	        page: 1
	      });
	    });
	    bookmarks.on('hover:long', function () {
	      Lampa.Storage.set("nc_collectionHome", 'lmeCollectionBookmark');
	      Lampa.Noty.show('Главный раздел изменен');
	    });

	    //Favorites
	    var favorites = document.createElement('div');
	    favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    favorites.innerHTML = "<svg width=\"46\" height=\"36\" viewBox=\"0 0 46 36\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M3 3H43M3 18H43M3 33H43\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div class=\"nc_tv\">".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
	    favorites.on('hover:enter', function () {
	      var itemsFavs = [];
	      Favorites$1.get().forEach(function (item) {
	        var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	        itemsFavs.push({
	          title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	          id: item.id
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsFavs,
	        onSelect: function onSelect(a) {
	          Favorites$1.remove(a);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    var baseInfo = document.createElement('div');
	    baseInfo.className = 'lme-baseInfo';
	    baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_networkstat'), ": ").concat(data.total === 5000 ? '5000+' : data.total);
	    var search = document.createElement('div');
	    search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
	    search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div class=\"nc_tv\">Search</div>\n        ";
	    var clear = document.createElement('div');
	    clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div class=\"nc_tv\">Reset search</div>\n        ";
	    clear.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var geo = document.createElement('div');
	    geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div class=\"nc_tv\">".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
	    geo.on('hover:enter', function () {
	      var itemsGeo = [];
	      GeoBase$1.results.forEach(function (item) {
	        itemsGeo.push({
	          title: item.english_name,
	          id: item.iso_3166_1
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsGeo,
	        onSelect: function onSelect(a) {
	          object.geoSearchQuery = a.id;
	          Lampa.Activity.replace(object);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    header.appendChild(search);
	    header.appendChild(clear);
	    //Bookmarks
	    header.appendChild(bookmarks);
	    header.appendChild(baseInfo);
	    if (data.documents.length) {
	      total_pages = data.total_pages;
	      body.classList.add('lme-catalog', 'category-full');
	      scroll.minus();
	      scroll.onEnd = this.next.bind(this);
	      scroll.onScroll = this.limit.bind(this);
	      scroll.onWheel = function (step) {
	        if (!Lampa.Controller.own(_this3)) _this3.start();
	        if (step > 0) Navigator.move('down');else Navigator.move('up');
	      };
	      this.append(data);
	      scroll.append(body);
	      html.addClass('lmeCatalog');
	      html.appendChild(header);
	      html.appendChild(scroll.render(true));
	      this.buildSearch();
	      this.limit();
	      this.activity.loader(false);
	      this.activity.toggle();
	    } else {
	      this.empty();
	    }
	  };
	  this.buildSearch = function () {
	    var btn = html.find('.button--search');
	    btn.on('hover:enter', function () {
	      Lampa.Input.edit({
	        free: true,
	        nosave: true,
	        nomic: true,
	        value: ''
	      }, function (val) {
	        if (val) {
	          //this.clearButtons(false, val)
	          object.searchQuery = val;
	          object.geoSearchQuery = "";
	          Lampa.Activity.replace(object);
	        } else {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	  };
	  this.start = function () {
	    var _this4 = this;
	    Lampa.Controller.add('content', {
	      link: this,
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(header, scroll.render(true));
	        Lampa.Controller.collectionFocus(last || false, header, scroll.render(true));
	      },
	      left: function left() {
	        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
	      },
	      right: function right() {
	        if (_this4.onRight) {
	          if (Navigator.canmove('right')) Navigator.move('right');else _this4.onRight();
	        } else Navigator.move('right');
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        if (Navigator.canmove('down')) Navigator.move('down');
	      },
	      back: function back() {
	        Lampa.Activity.backward();
	      }
	    });
	    Lampa.Controller.toggle('content');
	  };
	  this.refresh = function () {
	    this.activity.needRefresh();
	  };
	  this.pause = function () {};
	  this.stop = function () {};
	  this.render = function (js) {
	    return js ? html : $(html);
	  };
	  this.clearButtons = function (category, search) {
	    var btn_search = html.find('.button--search');
	    btn_search.find('div').addClass('hide').text('');
	    btn_search.find('div').removeClass('hide').text(search);
	  };
	  this.destroy = function () {
	    network.clear();
	    Lampa.Arrays.destroy(items);
	    scroll.destroy();
	    html.remove();
	    body.remove();
	    items = [];
	  };
	}

	function component$1(object) {
	  console.log('Collection', object);
	  var comp = new Lampa.InteractionCategory(object);
	  comp.create = function () {
	    Api.mainCollectionGet(object, this.build.bind(this), this.empty.bind(this));
	  };
	  return comp;
	}

	function component(object) {
	  var network = new Lampa.Reguest();
	  var scroll = new Lampa.Scroll({
	    mask: true,
	    over: true,
	    step: 250,
	    end_ratio: 2
	  });
	  var items = [];
	  var html = document.createElement('div');
	  var header = document.createElement('div');
	  var body = document.createElement('div');
	  var total_pages = 0;
	  var last;
	  var waitload;
	  var active = 0;
	  this.create = function () {
	    //Api.bookmark(this.build.bind(this), this.empty.bind(this))
	    if (Lampa.Storage.get('nc_collectionBookmarks')) this.build(Lampa.Storage.get('nc_collectionBookmarks'));else this.empty(new Error("No results found"));
	  };
	  this.empty = function () {
	    var panel = document.createElement('div');
	    panel.className = 'panelNC blockNC';
	    var ncMain = document.createElement('div');
	    ncMain.className = 'nc-main simple-button simple-button--invisible simple-button--filter selector';
	    ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>All Collections</div>";
	    ncMain.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: 'Collections',
	        component: 'lmeCollections',
	        page: 1
	      });
	    });
	    ncMain.on('hover:long', function () {
	      Lampa.Storage.set("nc_collectionHome", 'lmeCollections');
	      Lampa.Noty.show('Главный раздел изменен');
	    });
	    var button = document.createElement('div');
	    button.className = 'nc-empty simple-button simple-button--invisible selector button--clear';
	    button.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
	    button.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var empty = new Lampa.Empty();
	    if (button) panel.append(button);
	    if (button) panel.append(ncMain);
	    empty.append(panel);
	    html.appendChild(empty.render(true));
	    this.start = empty.start;
	    this.activity.loader(false);
	    this.activity.toggle();
	  };
	  this.next = function () {
	    var _this = this;
	    if (waitload) return;
	    if (object.page < total_pages) {
	      waitload = true;
	      object.page++;
	      this.nextPageReuest(object, function (result) {
	        _this.append(result, true);
	        waitload = false;
	        _this.limit();
	      }, function () {
	        waitload = false;
	      });
	    }
	  };
	  this.nextPageReuest = function (object, resolve, reject) {
	    Api.full(object, resolve.bind(this), reject.bind(this));
	  };
	  this.append = function (data, append) {
	    var _this2 = this;
	    data.forEach(function (element) {
	      // Migrate to Lampa.Maker.make('Card')
	      var card = Lampa.Maker.make('Card', _objectSpread2(_objectSpread2({}, element), {}, {
	        params: {
	          // No special params needed for default card
	        }
	      }));
	      card.create();

	      // Use .use() method for event handling in v3
	      card.use({
	        onFocus: function onFocus() {
	          last = this.render(true);
	          active = items.indexOf(card);
	          scroll.update(this.render(true));
	        },
	        onTouch: function onTouch() {
	          last = this.render(true);
	          active = items.indexOf(card);
	        },
	        onMenu: function onMenu() {
	          var result = Api.collectionBookmarkRemove('collectionBookmarkRemove', this.data);
	          if (result === true) {
	            console.log('Запись была успешно удалена.');
	            Lampa.Activity.replace({
	              url: '',
	              title: Lampa.Lang.translate('nc_bookmark'),
	              component: 'lmeCollectionBookmark',
	              page: 1
	            });
	            Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleted'));
	          } else if (result === false) {
	            console.error('Не удалось удалить запись.');
	            Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDeleteError'));
	          }
	        },
	        onEnter: function onEnter() {
	          Lampa.Activity.push({
	            url: '',
	            title: this.data.name,
	            collectionID: this.data.$id,
	            component: 'lmeCollection',
	            page: 1
	          });
	        }
	      });
	      body.appendChild(card.render(true));
	      items.push(card);
	      if (_this2.cardRender) _this2.cardRender(object, element, card);
	      if (append) Lampa.Controller.collectionAppend(card.render(true));
	    });
	  };
	  this.limit = function () {
	    var limit_view = 12;
	    var lilit_collection = 36;
	    var colection = items.slice(Math.max(0, active - limit_view), active + limit_view);
	    items.forEach(function (item) {
	      if (colection.indexOf(item) === -1) {
	        item.render(true).classList.remove('layer--render');
	      } else {
	        item.render(true).classList.add('layer--render');
	      }
	    });
	    Navigator.setCollection(items.slice(Math.max(0, active - lilit_collection), active + lilit_collection).map(function (c) {
	      return c.render(true);
	    }));
	    Navigator.focused(last);
	    Lampa.Layer.visible(scroll.render(true));
	  };
	  this.build = function (data) {
	    var _this3 = this;
	    header.className = 'lme-catalog lme-header';
	    //Main
	    var ncMain = document.createElement('div');
	    ncMain.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    ncMain.innerHTML = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M42.5 23.7505L44.146 22.9275C49.0105 20.4952 51.443 19.279 53.2215 20.3782C55 21.4773 55 24.1968 55 29.6357V30.3652C55 35.8042 55 38.5235 53.2215 39.6227C51.443 40.722 49.0105 39.5057 44.146 37.0735L42.5 36.2505V23.7505Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M5 28.75C5 20.5313 5 16.4219 7.2699 13.6561C7.68545 13.1497 8.14973 12.6854 8.65608 12.2699C11.4219 10 15.5313 10 23.75 10C31.9687 10 36.078 10 38.844 12.2699C39.3502 12.6854 39.8145 13.1497 40.23 13.6561C42.5 16.4219 42.5 20.5313 42.5 28.75V31.25C42.5 39.4687 42.5 43.578 40.23 46.344C39.8145 46.8502 39.3502 47.3145 38.844 47.73C36.078 50 31.9687 50 23.75 50C15.5313 50 11.4219 50 8.65608 47.73C8.14973 47.3145 7.68545 46.8502 7.2699 46.344C5 43.578 5 39.4687 5 31.25V28.75Z\" stroke=\"white\" stroke-width=\"3.75\"/>\n                    <path d=\"M23.75 38.75V21.25M23.75 21.25L30 28.75M23.75 21.25L17.5 28.75\" stroke=\"white\" stroke-width=\"3.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('lmeCollections'), "</div>");
	    ncMain.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('lmeCollections'),
	        component: 'lmeCollections',
	        page: 1
	      });
	    });
	    ncMain.on('hover:long', function () {
	      Lampa.Storage.set("nc_networksListHome", 'lmeCollections');
	      Lampa.Noty.show('Главный раздел изменен');
	    });
	    var favorites = document.createElement('div');
	    favorites.className = 'lme-favorites simple-button simple-button--invisible simple-button--filter selector';
	    favorites.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n                        <path fill=\"currentColor\" d=\"M478.354,146.286H33.646c-12.12,0-21.943,9.823-21.943,21.943v321.829c0,12.12,9.823,21.943,21.943,21.943h444.709\n                            c12.12,0,21.943-9.823,21.943-21.943V168.229C500.297,156.109,490.474,146.286,478.354,146.286z M456.411,468.114H55.589V190.171\n                            h400.823V468.114z\"/>\n                        <path fill=\"currentColor\" d=\"M441.783,73.143H70.217c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h371.566\n                            c12.12,0,21.943-9.823,21.943-21.943C463.726,82.966,453.903,73.143,441.783,73.143z\"/>\n                        <path fill=\"currentColor\" d=\"M405.211,0H106.789c-12.12,0-21.943,9.823-21.943,21.943c0,12.12,9.823,21.943,21.943,21.943h298.423\n                            c12.12,0,21.943-9.823,21.943-21.943C427.154,9.823,417.331,0,405.211,0z\"/>\n                    </svg>\n                    <div>".concat(Lampa.Lang.translate('settings_input_links'), "</div>");
	    favorites.on('hover:enter', function () {
	      var itemsFavs = [];
	      Favorites.get().forEach(function (item) {
	        var legacyFavorites = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(item.card_data.$id);
	        itemsFavs.push({
	          title: "".concat(legacyFavorites ? "OLD " : "").concat(item.type, " ").concat(item.card_data.name),
	          id: item.id
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsFavs,
	        onSelect: function onSelect(a) {
	          Favorites.remove(a);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	    var baseInfo = document.createElement('div');
	    baseInfo.className = 'lme-baseInfo';
	    baseInfo.innerHTML = "".concat(Lampa.Lang.translate('nc_bookmarksstat'), ": ").concat(data.length);
	    var search = document.createElement('div');
	    search.className = 'lme-search simple-button simple-button--invisible simple-button--filter selector button--search';
	    search.innerHTML = "\n                <svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">\n                    <circle cx=\"9.9964\" cy=\"9.63489\" r=\"8.43556\" stroke=\"currentColor\" stroke-width=\"2.4\"></circle>\n                    <path d=\"M20.7768 20.4334L18.2135 17.8701\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n                </svg>\n                <div>Search</div>\n        ";
	    var clear = document.createElement('div');
	    clear.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    clear.innerHTML = "\n                <svg width=\"48\" height=\"43\" viewBox=\"0 0 48 43\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.11178 23.9546L7.10608 24.9852L8.137 25.9913L9.1427 24.96L8.11178 23.9546ZM20.9815 29.7729L35.3816 15.3729L33.3449 13.3364L18.945 27.7363L20.9815 29.7729ZM18.945 15.3728L33.3449 29.7729L35.3816 27.7363L20.9815 13.3364L18.945 15.3728ZM44.9232 21.5546C44.9232 31.3632 36.9718 39.3146 27.1632 39.3146V42.1946C38.5623 42.1946 47.8032 32.9537 47.8032 21.5546H44.9232ZM9.40324 21.5546C9.40324 11.746 17.3547 3.79461 27.1632 3.79461V0.914612C15.7641 0.914612 6.52324 10.1555 6.52324 21.5546H9.40324ZM27.1632 3.79461C36.9718 3.79461 44.9232 11.746 44.9232 21.5546H47.8032C47.8032 10.1555 38.5623 0.914612 27.1632 0.914612V3.79461ZM9.54071 23.7765C9.45004 23.0491 9.40324 22.3077 9.40324 21.5546H6.52324C6.52324 22.427 6.57746 23.2877 6.68284 24.1327L9.54071 23.7765ZM27.1632 39.3146C21.0603 39.3146 15.6756 36.2376 12.4764 31.5437L10.0966 33.1656C13.8093 38.6129 20.0678 42.1946 27.1632 42.1946V39.3146ZM9.1427 24.96L14.9942 18.96L12.9323 16.9493L7.08088 22.9493L9.1427 24.96ZM9.1175 22.9241L2.96896 16.9241L0.95752 18.9852L7.10608 24.9852L9.1175 22.9241Z\"/>\n                </svg>\n                <div>Reset search</div>\n        ";
	    clear.on('hover:enter', function () {
	      object.searchQuery = "";
	      object.geoSearchQuery = "";
	      Lampa.Activity.replace(object);
	    });
	    var geo = document.createElement('div');
	    geo.className = 'lme-clear simple-button simple-button--invisible selector button--clear';
	    geo.innerHTML = "\n                <svg width=\"60\" height=\"58\" viewBox=\"0 0 60 58\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30 0.874997C22.2938 0.632341 14.8062 3.45783 9.18145 8.73105C3.55669 14.0043 0.254507 21.2942 0 29C0.254507 36.7058 3.55669 43.9957 9.18145 49.2689C14.8062 54.5422 22.2938 57.3677 30 57.125C37.7062 57.3677 45.1938 54.5422 50.8185 49.2689C56.4433 43.9957 59.7455 36.7058 60 29C59.7455 21.2942 56.4433 14.0043 50.8185 8.73105C45.1938 3.45783 37.7062 0.632341 30 0.874997ZM55.1625 26.375L50.55 25.25C49.6125 24.9875 49.5375 24.9125 49.4625 24.8C48.9 24.05 48.2625 23.0375 47.6625 22.0625C47.6625 21.725 47.175 21.2 47.0625 20.9C46.95 20.6 48.375 18.65 48.975 17.75C49.6218 17.0775 50.368 16.5084 51.1875 16.0625C53.3679 19.106 54.7361 22.6554 55.1625 26.375ZM30 5.5625L29.6625 6.2C29.629 6.07724 29.629 5.94775 29.6625 5.825C29.6625 6.05 29.1 6.3875 28.725 6.7625L27.6 7.85C27.0869 8.38489 26.7763 9.08187 26.7215 9.82104C26.6668 10.5602 26.8713 11.2953 27.3 11.9H26.85C26.2578 11.9171 25.6772 12.0676 25.1512 12.3403C24.6253 12.613 24.1677 13.0009 23.8125 13.475C23.3979 14.0464 23.1155 14.7029 22.9858 15.3968C22.8561 16.0908 22.8823 16.8049 23.0625 17.4875V17.75C22.5156 17.8475 21.9766 17.9854 21.45 18.1625L20.55 18.4625L18.15 19.25C17.4349 19.4595 16.783 19.8432 16.2528 20.3669C15.7227 20.8905 15.3308 21.5375 15.1125 22.25C14.9381 22.8479 14.9153 23.4798 15.0463 24.0886C15.1772 24.6975 15.4577 25.2642 15.8625 25.7375C17.3644 27.3608 19.1104 28.7399 21.0375 29.825C22.9237 31.0817 25.0605 31.9134 27.3 32.2625H33.6C34.3586 32.2263 35.1141 32.3826 35.796 32.717C36.478 33.0514 37.0641 33.553 37.5 34.175C37.704 34.3854 37.8546 34.6416 37.9394 34.9221C38.0242 35.2026 38.0407 35.4993 37.9875 35.7875C37.9128 36.2652 37.7194 36.7165 37.425 37.1C35.559 38.6263 34.2963 40.7662 33.8625 43.1375C33.3767 44.9001 32.7754 46.6289 32.0625 48.3125C31.6125 49.475 31.2 50.6 30.9 51.5C29.642 51.5905 28.3776 51.4894 27.15 51.2C27.4488 48.4138 26.7873 45.6091 25.275 43.25C24.0139 41.7599 23.3111 39.877 23.2875 37.925C23.5298 36.0733 23.1094 34.1955 22.1006 32.6239C21.0917 31.0523 19.5595 29.8882 17.775 29.3375C13.5767 26.7281 9.89108 23.3729 6.9 19.4375C9.0671 15.1955 12.3807 11.6465 16.4641 9.19379C20.5476 6.74106 25.2372 5.48297 30 5.5625ZM4.6875 29C4.68679 27.5383 4.83759 26.0806 5.1375 24.65C8.21591 28.3346 11.9549 31.4122 16.1625 33.725C18.4125 34.55 18.75 35.4125 18.75 37.925C18.7583 41.0595 19.9043 44.0844 21.975 46.4375C22.528 48.0641 22.7075 49.7945 22.5 51.5C17.4882 50.1965 13.038 47.2948 9.82365 43.2347C6.60934 39.1745 4.8062 34.1771 4.6875 29ZM35.8875 51.8C35.8875 51.2375 36.3375 50.6 36.5625 50C37.415 48.0606 38.1048 46.0537 38.625 44C38.9187 42.7281 39.632 41.5921 40.65 40.775C41.9623 39.4849 42.7277 37.7393 42.7875 35.9C42.8335 35.028 42.7008 34.1558 42.3978 33.3368C42.0947 32.5179 41.6276 31.7695 41.025 31.1375C40.123 30.0309 38.9756 29.1498 37.6737 28.5639C36.3719 27.9781 34.9514 27.7037 33.525 27.7625H27.5625C24.7619 27.0038 22.1879 25.5753 20.0625 23.6L21.825 23L22.8375 22.7C23.2834 22.4959 23.7731 22.4057 24.2625 22.4375L24.6 23C24.8806 23.5263 25.3472 23.9292 25.9088 24.1303C26.4703 24.3313 27.0866 24.3161 27.6375 24.0875C28.1829 23.8331 28.6149 23.3858 28.8502 22.832C29.0856 22.2781 29.1078 21.6567 28.9125 21.0875V20.4125C28.5 19.2875 28.0125 17.7125 27.7125 16.6625C28.6852 16.7033 29.6504 16.4767 30.5033 16.0073C31.3562 15.5378 32.0641 14.8436 32.55 14C32.7828 13.3716 32.843 12.6924 32.7243 12.0329C32.6056 11.3734 32.3123 10.7577 31.875 10.25C32.3163 9.85394 32.7298 9.42793 33.1125 8.975C33.4567 8.56312 33.7085 8.08215 33.8508 7.5646C33.9931 7.04704 34.0227 6.50496 33.9375 5.975C39.1791 6.74659 44.0596 9.10179 47.925 12.725C46.7901 13.418 45.7871 14.3068 44.9625 15.35C44.0691 16.6555 43.2672 18.0212 42.5625 19.4375C42.26 20.3116 42.1839 21.2481 42.3412 22.1596C42.4986 23.0712 42.8844 23.9279 43.4625 24.65C44.1375 25.8125 44.8875 26.9375 45.5625 27.875C46.4929 29.0477 47.8326 29.8247 49.3125 30.05C50.1375 30.275 53.0625 30.875 55.125 31.2875C54.4619 36.2872 52.2501 40.9539 48.7999 44.6327C45.3498 48.3115 40.8345 50.8178 35.8875 51.8Z\"/>\n                </svg>\n                <div>".concat(Lampa.Lang.translate("nc_country"), "</div>\n        ");
	    geo.on('hover:enter', function () {
	      var itemsGeo = [];
	      GeoBase.results.forEach(function (item) {
	        itemsGeo.push({
	          title: item.english_name,
	          id: item.iso_3166_1
	        });
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('nc_networksList'),
	        items: itemsGeo,
	        onSelect: function onSelect(a) {
	          object.geoSearchQuery = a.id;
	          Lampa.Activity.replace(object);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });

	    //header.appendChild(search)
	    //header.appendChild(clear)
	    //header.appendChild(geo)
	    //header.appendChild(favorites)
	    header.appendChild(ncMain);
	    header.appendChild(baseInfo);
	    if (data.length) {
	      total_pages = data.total_pages;
	      body.classList.add('lme-catalog', 'category-full');
	      scroll.minus();
	      scroll.onEnd = this.next.bind(this);
	      scroll.onScroll = this.limit.bind(this);
	      scroll.onWheel = function (step) {
	        if (!Lampa.Controller.own(_this3)) _this3.start();
	        if (step > 0) Navigator.move('down');else Navigator.move('up');
	      };
	      this.append(data);
	      scroll.append(body);
	      html.addClass('lmeCatalog');
	      html.appendChild(header);
	      html.appendChild(scroll.render(true));
	      //this.buildSearch()
	      this.limit();
	      this.activity.loader(false);
	      this.activity.toggle();
	    } else {
	      this.empty();
	    }
	  };
	  this.buildSearch = function () {
	    var btn = html.find('.button--search');
	    btn.on('hover:enter', function () {
	      Lampa.Input.edit({
	        free: true,
	        nosave: true,
	        nomic: true,
	        value: ''
	      }, function (val) {
	        if (val) {
	          //this.clearButtons(false, val)
	          object.searchQuery = val;
	          object.geoSearchQuery = "";
	          Lampa.Activity.replace(object);
	        } else {
	          Lampa.Controller.toggle('content');
	        }
	      });
	    });
	  };
	  this.start = function () {
	    var _this4 = this;
	    Lampa.Controller.add('content', {
	      link: this,
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(header, scroll.render(true));
	        Lampa.Controller.collectionFocus(last || false, header, scroll.render(true));
	      },
	      left: function left() {
	        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
	      },
	      right: function right() {
	        if (_this4.onRight) {
	          if (Navigator.canmove('right')) Navigator.move('right');else _this4.onRight();
	        } else Navigator.move('right');
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        if (Navigator.canmove('down')) Navigator.move('down');
	      },
	      back: function back() {
	        Lampa.Activity.backward();
	      }
	    });
	    Lampa.Controller.toggle('content');
	  };
	  this.refresh = function () {
	    this.activity.needRefresh();
	  };
	  this.pause = function () {};
	  this.stop = function () {};
	  this.render = function (js) {
	    return js ? html : $(html);
	  };
	  this.clearButtons = function (category, search) {
	    var btn_search = html.find('.button--search');
	    btn_search.find('div').addClass('hide').text('');
	    btn_search.find('div').removeClass('hide').text(search);
	  };
	  this.destroy = function () {
	    network.clear();
	    Lampa.Arrays.destroy(items);
	    scroll.destroy();
	    html.remove();
	    body.remove();
	    items = [];
	  };
	}

	function createCollectionButton(e) {
	  var nc_collection = "<div class=\"full-start__button selector button--nc_collection\">\n        <svg width=\"191\" height=\"239\" viewBox=\"0 0 191 239\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.3438 35.3414V26.7477C35.3438 19.9156 38.0594 13.3543 42.8934 8.51604C47.7297 3.68251 54.2874 0.967027 61.125 0.966431H164.25C171.086 0.966431 177.643 3.68206 182.482 8.51604C187.315 13.3524 190.031 19.91 190.031 26.7477V186.471C190.031 189.87 189.022 193.192 187.133 196.018C185.245 198.844 182.561 201.046 179.421 202.347C176.28 203.647 172.825 203.988 169.492 203.325C166.158 202.662 163.096 201.026 160.692 198.623L155.656 193.587V220.846C155.656 224.245 154.647 227.567 152.758 230.393C150.87 233.219 148.186 235.421 145.046 236.722C141.905 238.022 138.45 238.363 135.117 237.7C131.783 237.037 128.721 235.401 126.317 232.998L78.3125 184.993L30.3078 232.998C27.9041 235.401 24.8419 237.037 21.5084 237.7C18.1748 238.363 14.7195 238.022 11.5794 236.722C8.43922 235.421 5.75517 233.219 3.86654 230.393C1.9779 227.567 0.969476 224.245 0.96875 220.846V61.1227C0.96875 54.2906 3.68437 47.7293 8.51836 42.891C13.3547 38.0575 19.9124 35.342 26.75 35.3414H35.3438ZM138.469 220.846V61.1227C138.469 58.8435 137.563 56.6576 135.952 55.046C134.34 53.4343 132.154 52.5289 129.875 52.5289H26.75C24.4708 52.5289 22.2849 53.4343 20.6733 55.046C19.0617 56.6576 18.1562 58.8435 18.1562 61.1227V220.846L66.1609 172.841C69.3841 169.619 73.755 167.809 78.3125 167.809C82.87 167.809 87.2409 169.619 90.4641 172.841L138.469 220.846ZM155.656 169.284L172.844 186.471V26.7477C172.844 24.4685 171.938 22.2826 170.327 20.671C168.715 19.0593 166.529 18.1539 164.25 18.1539H61.125C58.8458 18.1539 56.6599 19.0593 55.0483 20.671C53.4367 22.2826 52.5312 24.4685 52.5312 26.7477V35.3414H129.875C136.711 35.3414 143.268 38.0571 148.107 42.891C152.94 47.7274 155.656 54.285 155.656 61.1227V169.284Z\" fill=\"currentColor\"/>\n        </svg>\n        <span>".concat(Lampa.Lang.translate('title_collection'), "</span>\n    </div>");
	  e.object.activity.render().find('.full-start-new__buttons').append(nc_collection);
	  return {
	    $id: e.data.movie.belongs_to_collection.id,
	    poster_path: e.data.movie.belongs_to_collection.poster_path,
	    backdrop_path: e.data.movie.belongs_to_collection.backdrop_path,
	    name: e.data.movie.belongs_to_collection.name
	  };
	}
	function handleLongHover(card_data) {
	  var result = Api.collectionBookmarkSave('collectionBookmarkAdd', card_data);
	  if (result === true) {
	    console.log('Запись была успешно добавлена.');
	    Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
	  } else if (result === false) {
	    console.error('Не удалось добавить запись.');
	    Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
	  }
	}
	function handleEnterHover(card_data) {
	  Lampa.Activity.push({
	    url: '',
	    title: card_data.name,
	    collectionID: card_data.$id,
	    component: 'lmeCollection',
	    page: 1
	  });
	}
	function setupCollectionButtonHandlers(card_data) {
	  $(".button--nc_collection").on("hover:long hover:enter", function (event) {
	    if (event.type === "hover:long") {
	      handleLongHover(card_data);
	    } else if (event.type === "hover:enter") {
	      handleEnterHover(card_data);
	    }
	  });
	}
	function createNetworkTag(name, items, call) {
	  var logo = $('<img/>').attr({
	    src: Lampa.TMDB.image("t/p/w92" + items[0].logo_path),
	    alt: items[0].name
	  })[0].outerHTML;
	  var elem = $("<div class=\"tag-count selector\">\n        <div class=\"tag-count__name\">".concat(name, "</div>\n        <div class=\"tag-count__count\">").concat(items.length > 1 ? items.length : logo, "</div>\n    </div>"));
	  var controller = Lampa.Controller.enabled().name;
	  elem.on('hover:enter', function () {
	    if (items.length > 1) {
	      var select = items.map(function (a) {
	        var img = new Image();
	        img.crossOrigin = 'Anonymous';
	        img.src = Lampa.TMDB.image("t/p/w154" + a.logo_path);
	        img.onload = function () {
	          var canvas = document.createElement('canvas');
	          var context = canvas.getContext('2d');
	          canvas.width = img.width;
	          canvas.height = img.height;
	          context.drawImage(img, 0, 0, img.width, img.height);
	          var imageData = context.getImageData(0, 0, img.width, img.height);
	          var data = imageData.data;
	          var isDark = true;
	          for (var i = 0; i < data.length; i += 4) {
	            var brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255 * 100;
	            if (brightness > 50) {
	              isDark = false;
	              break;
	            }
	          }
	          if (isDark) {
	            document.getElementById("logo-".concat(a.id)).style.filter = 'invert(1)';
	          }
	        };
	        return {
	          title: "<div style=\"display: inline-block; padding: 5px;\">\n                    <img id=\"logo-".concat(a.id, "\" src=\"").concat(img.src, "\" alt=\"").concat(a.name, "\" />\n                </div>"),
	          elem: a
	        };
	      });
	      Lampa.Select.show({
	        title: name,
	        items: select,
	        onSelect: function onSelect(a) {
	          Lampa.Controller.toggle(controller);
	          call(a.elem);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle(controller);
	        }
	      });
	    } else {
	      call(items[0]);
	    }
	  });
	  return elem;
	}
	function handleNetworkClick(network) {
	  var card_data = {
	    $id: network.id,
	    logo_path: network.logo_path,
	    poster_path: network.logo_path,
	    name: "".concat(network.name, " ").concat(network.origin_country),
	    title: "".concat(network.name, " ").concat(network.origin_country),
	    origin_country: network.origin_country
	  };
	  var enabled = Lampa.Controller.enabled().name;
	  var menu = [{
	    title: "".concat(Lampa.Lang.translate('nc_openAction'), " New"),
	    action: 'open',
	    sort_by: 'first_air_date.desc',
	    type: 'New',
	    card_data: card_data
	  }, {
	    title: "".concat(Lampa.Lang.translate('nc_openAction'), " Top"),
	    action: 'open',
	    sort_by: '',
	    type: 'Top',
	    card_data: card_data
	  }, {
	    title: Lampa.Lang.translate('nc_bookmarkAdd'),
	    action: 'bookmarkAdd',
	    card_data: card_data
	  }, {
	    title: Lampa.Lang.translate('nc_favoriteAdd') + ' New',
	    action: 'favorite',
	    card_data: card_data,
	    type: 'new'
	  }, {
	    title: Lampa.Lang.translate('nc_favoriteAdd') + ' Top',
	    action: 'favorite',
	    card_data: card_data,
	    type: 'top'
	  }];
	  Lampa.Select.show({
	    title: card_data.name,
	    items: menu,
	    onBack: function onBack() {
	      Lampa.Controller.toggle(enabled);
	    },
	    onSelect: function onSelect(a) {
	      if (a.action === 'favorite') {
	        Favorites$1.add(a);
	      }
	      if (a.action === 'bookmarkAdd') {
	        var result = Api.bookmarkSave(a);
	        if (result === true) {
	          console.log('Запись была успешно добавлена.');
	          Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkAdded'));
	        } else if (result === false) {
	          console.error('Не удалось добавить запись.');
	          Lampa.Noty.show(Lampa.Lang.translate('nc_bookmarkDuplicate'));
	        }
	      }
	      if (a.action === 'open') {
	        Lampa.Activity.push({
	          url: 'discover/tv',
	          title: "".concat(a.type, " ").concat(a.card_data.name),
	          component: "category_full",
	          networks: a.card_data.$id,
	          sort_by: a.sort_by,
	          source: 'tmdb',
	          card_type: true,
	          page: 1
	        });
	      }
	    }
	  });
	}
	function main$1() {
	  Lampa.Listener.follow('full', function (e) {
	    if (e.type === 'complite' && e.object.method === 'movie' && Lampa.Storage.field('nc_networksList') === true) {
	      if (e.data.movie.belongs_to_collection) {
	        var card_data = createCollectionButton(e);
	        setupCollectionButtonHandlers(card_data);
	      }
	    }
	    if (e.type === 'complite' && e.object.method === 'tv' && Lampa.Storage.field('nc_networksList') === true) {
	      if (e.data.movie.networks && e.data.movie.networks.length > 0) {
	        var networkTag = createNetworkTag('Networks', e.data.movie.networks, handleNetworkClick);
	        e.object.activity.render().find('.full-descr__tags').append(networkTag);
	      }
	    }
	  });
	}

	var manifest = {
	  type: "other",
	  version: "5.0.0",
	  name: "New category",
	  description: "Add new category and TV Show stream service",
	  component: "nc"
	};
	var main = function main() {
	  // Check Lampa version for v3 API compatibility
	  if (Lampa.Manifest.app_digital < 300) {
	    console.error('NC Plugin requires Lampa v3.0.0 or higher');
	    Lampa.Noty.show('NC Plugin requires Lampa v3.0.0+');
	    return;
	  }
	  if (Lampa.Storage.field('nc_anime') === true || Lampa.Storage.field('nc_cartoon') === true) {
	    localStorage.removeItem('nc_anime');
	    localStorage.removeItem('nc_cartoon');
	  }
	  if (!Lampa.Storage.get('nc_migration_lmeCollections', 'false')) {
	    if (localStorage.getItem('nc_lmeCollections') !== null) {
	      localStorage.removeItem('nc_lmeCollections');
	    }
	    Lampa.Storage.set('nc_migration_lmeCollections', true, true);
	  }
	  Lampa.Manifest.plugins = manifest;
	  Lampa.Component.add('lmeNetworks', component$4);
	  Lampa.Component.add('lmeNetworksBookmarks', component$3);
	  Lampa.Component.add('lmeCollections', component$2);
	  Lampa.Component.add('lmeCollection', component$1);
	  Lampa.Component.add('lmeCollectionBookmark', component);
	  Lampa.Template.add('ncStyle', "\n        <style>\n            @charset 'UTF-8';.panelNC.blockNC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;gap:10px;padding:10px}@media(max-width:767px){.nc_tv{display:none}}.nc-empty,.nc-main{margin:0 5px}.nc-empty svg,.nc-main svg{display:block;margin:0 auto}.nc-empty div,.nc-main div{text-align:center}div.ncSubmenu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ncSubmenu>svg.ncIcon{margin-right:5px;width:36px;height:36px}div.nc_bookmark{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}div.nc_menu{position:relative}div.nc_badge{left:100%;top:0;margin-left:.5em;margin-top:-1em;background-color:#fff;color:#000;padding:.2em .4em;font-size:.5em;-webkit-border-radius:.5em;border-radius:.5em;font-weight:700;text-transform:uppercase}.lme-catalog.lme-header.lme-error{margin-bottom:2%}.lme-catalog.lme-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.lme-baseInfo{padding:0 0 0 2%}.empty.simple-button.simple-button--invisible.selector.button--clear{margin:auto}.lme-baseInfo,.lme-favorites,.lme-search,.lme-clear,.lme-filter{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:1.5em;padding-right:1.5em;margin-left:.5em;margin-right:.5em}.lme-clear div,.lme-filter div{margin-left:1em}.lme-catalog.category-full .card__img{-o-object-fit:contain;object-fit:contain;padding:5%}.networkLogo{-o-object-fit:contain;object-fit:contain;padding:2%}.networkTitle{position:absolute;top:8px;left:8px;background-color:rgba(0,0,0,0.6);color:white;padding:4px 8px;-webkit-border-radius:4px;border-radius:4px;line-height:1.2;z-index:1}\n        </style>\n    ");
	  lang.data();
	  config.setting();
	  // Menu 2.0
	  var submenuCatalogkeys = Object.keys(localStorage).filter(function (key) {
	    return key.indexOf('nc_') === 0;
	  });
	  function addsubmenu(category) {
	    switch (category) {
	      case 'nc_cartoon':
	      case 'nc_documentary':
	      case 'nc_networksList':
	      case 'nc_documentary2':
	      case 'nc_lmeCollections':
	        // Вызываем функцию insert.catSubmenu(category)
	        if (Lampa.Storage.get(category) === true) {
	          insert.catSubmenu(category);
	        }
	        break;
	      case 'nc_networkLists':
	        if (Array.isArray(Lampa.Storage.get('nc_networkLists')) && Lampa.Storage.get('nc_networkLists').length > 0) {
	          insert.catSubmenu(Lampa.Storage.get('nc_networkLists'));
	        }
	        break;
	      default:
	        // Вызываем функцию bookmarks(info)
	        if (Lampa.Storage.get(category).available === true || Lampa.Storage.get('nc_concert') === true) {
	          if (Lampa.Storage.get(category)) {
	            localStorage.removeItem(category);
	            Lampa.Noty.show(Lampa.Lang.translate('nc_favoriteMigrate'));
	          } else {
	            console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441 \u043A\u043B\u044E\u0447\u043E\u043C ".concat(Lampa.Storage.get(category), " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 localStorage."));
	          }
	        }
	    }
	  }

	  // Menu 2.0
	  submenuCatalogkeys.forEach(addsubmenu);
	  $('body').append(Lampa.Template.get('ncStyle', {}, true));
	  //Get Stream in card
	  main$1();
	};
	if (window.appready) {
	  main();
	} else {
	  Lampa.Listener.follow("app", function (event) {
	    if (event.type === "ready") {
	      main();
	    }
	  });
	}

})();
