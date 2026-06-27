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

	function _defineProperty(e, r, t) {
	  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
	    value: t,
	    enumerable: !0,
	    configurable: !0,
	    writable: !0
	  }) : e[r] = t, e;
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

	var esnext_globalThis = {};

	var es_globalThis = {};

	var globalThis$m = require('../internals/global-this');
	var getOwnPropertyDescriptor$2 = require('../internals/object-get-own-property-descriptor').f;
	var createNonEnumerableProperty$6 = require('../internals/create-non-enumerable-property');
	var defineBuiltIn$9 = require('../internals/define-built-in');
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
	    target = globalThis$m;
	  } else if (STATIC) {
	    target = globalThis$m[TARGET] || defineGlobalProperty$1(TARGET, {});
	  } else {
	    target = globalThis$m[TARGET] && globalThis$m[TARGET].prototype;
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
	      createNonEnumerableProperty$6(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$9(target, key, sourceProperty, options);
	  }
	};

	var _export = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$9 = /*@__PURE__*/getAugmentedNamespace(_export);

	var hasRequiredEs_globalThis;

	function requireEs_globalThis () {
		if (hasRequiredEs_globalThis) return es_globalThis;
		hasRequiredEs_globalThis = 1;

		var $ = require$$0$9;
		var globalThis = require$$0$8;

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

	var globalThis$l = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$8 = /*@__PURE__*/getAugmentedNamespace(globalThis$l);

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

		var globalThis = require$$0$8;

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
		var globalThis = require$$0$8;
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

	var fails$s;
	var hasRequiredFails;

	function requireFails () {
		if (hasRequiredFails) return fails$s;
		hasRequiredFails = 1;

		fails$s = function (exec) {
		  try {
		    return !!exec();
		  } catch (error) {
		    return true;
		  }
		};
		return fails$s;
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

	var toObject$4;
	var hasRequiredToObject;

	function requireToObject () {
		if (hasRequiredToObject) return toObject$4;
		hasRequiredToObject = 1;

		var requireObjectCoercible = requireRequireObjectCoercible();
		var $Object = Object;

		// `ToObject` abstract operation
		// https://tc39.es/ecma262/#sec-toobject
		toObject$4 = function (argument) {
		  return $Object(requireObjectCoercible(argument));
		};
		return toObject$4;
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

	var $$u = require('../internals/export');
	var exec$5 = require('../internals/regexp-exec');

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$u({
	  target: 'RegExp',
	  proto: true,
	  forced: /./.exec !== exec$5
	}, {
	  exec: exec$5
	});

	var $$t = require('../internals/export');
	var fails$r = require('../internals/fails');
	var isArray$4 = require('../internals/is-array');
	var isObject$e = require('../internals/is-object');
	var toObject$3 = require('../internals/to-object');
	var lengthOfArrayLike$6 = require('../internals/length-of-array-like');
	var doesNotExceedSafeInteger$1 = require('../internals/does-not-exceed-safe-integer');
	var createProperty$1 = require('../internals/create-property');
	var setArrayLength = require('../internals/array-set-length');
	var arraySpeciesCreate$1 = require('../internals/array-species-create');
	var arrayMethodHasSpeciesSupport$3 = require('../internals/array-method-has-species-support');
	var wellKnownSymbol$a = require('../internals/well-known-symbol');
	var V8_VERSION$2 = require('../internals/environment-v8-version');
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$a('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$2 >= 51 || !fails$r(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var isConcatSpreadable = function isConcatSpreadable(O) {
	  if (!isObject$e(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$4(O);
	};
	var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$t({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED$6
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$3(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$6(E);
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

	var apply$3 = require('../internals/function-apply');
	var call$f = require('../internals/function-call');
	var uncurryThis$o = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$3 = require('../internals/fix-regexp-well-known-symbol-logic');
	var fails$q = require('../internals/fails');
	var anObject$a = require('../internals/an-object');
	var isCallable$e = require('../internals/is-callable');
	var isObject$d = require('../internals/is-object');
	var toIntegerOrInfinity$2 = require('../internals/to-integer-or-infinity');
	var toLength$3 = require('../internals/to-length');
	var toString$a = require('../internals/to-string');
	var requireObjectCoercible$3 = require('../internals/require-object-coercible');
	var advanceStringIndex$2 = require('../internals/advance-string-index');
	var getMethod$3 = require('../internals/get-method');
	var getSubstitution = require('../internals/get-substitution');
	var getRegExpFlags$4 = require('../internals/regexp-get-flags');
	var regExpExec$3 = require('../internals/regexp-exec-abstract');
	var wellKnownSymbol$9 = require('../internals/well-known-symbol');
	var REPLACE = wellKnownSymbol$9('replace');
	var max = Math.max;
	var min$3 = Math.min;
	var concat = uncurryThis$o([].concat);
	var push$6 = uncurryThis$o([].push);
	var stringIndexOf$3 = uncurryThis$o(''.indexOf);
	var stringSlice$7 = uncurryThis$o(''.slice);
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
	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$q(function () {
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
	    var replacer = isObject$d(searchValue) ? getMethod$3(searchValue, REPLACE) : undefined;
	    return replacer ? call$f(replacer, searchValue, O, replaceValue) : call$f(nativeReplace, toString$a(O), searchValue, replaceValue);
	  },
	  // `RegExp.prototype[@@replace]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	  function (string, replaceValue) {
	    var rx = anObject$a(this);
	    var S = toString$a(string);
	    var functionalReplace = isCallable$e(replaceValue);
	    if (!functionalReplace) replaceValue = toString$a(replaceValue);
	    var flags = toString$a(getRegExpFlags$4(rx));
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
	      push$6(results, result);
	      if (!global) break;
	      var matchStr = toString$a(result[0]);
	      if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$3(rx.lastIndex), fullUnicode);
	    }
	    var accumulatedResult = '';
	    var nextSourcePosition = 0;
	    for (var i = 0; i < results.length; i++) {
	      result = results[i];
	      var matched = toString$a(result[0]);
	      var position = max(min$3(toIntegerOrInfinity$2(result.index), S.length), 0);
	      var captures = [];
	      var replacement;
	      // NOTE: This is equivalent to
	      //   captures = result.slice(1).map(maybeToString)
	      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	      for (var j = 1; j < result.length; j++) push$6(captures, maybeToString(result[j]));
	      var namedCaptures = result.groups;
	      if (functionalReplace) {
	        var replacerArgs = concat([matched], captures, position, S);
	        if (namedCaptures !== undefined) push$6(replacerArgs, namedCaptures);
	        replacement = toString$a(apply$3(replaceValue, undefined, replacerArgs));
	      } else {
	        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	      }
	      if (position >= nextSourcePosition) {
	        accumulatedResult += stringSlice$7(S, nextSourcePosition, position) + replacement;
	        nextSourcePosition = position + matched.length;
	      }
	    }
	    return accumulatedResult + stringSlice$7(S, nextSourcePosition);
	  }];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	var DESCRIPTORS$a = require('../internals/descriptors');
	var globalThis$k = require('../internals/global-this');
	var uncurryThis$n = require('../internals/function-uncurry-this');
	var isForced$2 = require('../internals/is-forced');
	var inheritIfRequired$2 = require('../internals/inherit-if-required');
	var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
	var create$2 = require('../internals/object-create');
	var getOwnPropertyNames$1 = require('../internals/object-get-own-property-names').f;
	var isPrototypeOf$5 = require('../internals/object-is-prototype-of');
	var isRegExp = require('../internals/is-regexp');
	var toString$9 = require('../internals/to-string');
	var getRegExpFlags$3 = require('../internals/regexp-get-flags');
	var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
	var proxyAccessor = require('../internals/proxy-accessor');
	var defineBuiltIn$8 = require('../internals/define-built-in');
	var fails$p = require('../internals/fails');
	var hasOwn$9 = require('../internals/has-own-property');
	var enforceInternalState$3 = require('../internals/internal-state').enforce;
	var setSpecies$2 = require('../internals/set-species');
	var wellKnownSymbol$8 = require('../internals/well-known-symbol');
	var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
	var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
	var MATCH = wellKnownSymbol$8('match');
	var NativeRegExp = globalThis$k.RegExp;
	var RegExpPrototype$1 = NativeRegExp.prototype;
	var SyntaxError = globalThis$k.SyntaxError;
	var exec$4 = uncurryThis$n(RegExpPrototype$1.exec);
	var charAt$3 = uncurryThis$n(''.charAt);
	var replace$5 = uncurryThis$n(''.replace);
	var stringIndexOf$2 = uncurryThis$n(''.indexOf);
	var stringSlice$6 = uncurryThis$n(''.slice);
	// TODO: Use only proper RegExpIdentifierName
	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;
	var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
	var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
	var BASE_FORCED = DESCRIPTORS$a && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$p(function () {
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
	    chr = charAt$3(string, index);
	    if (chr === '\\') {
	      result += chr + charAt$3(string, ++index);
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
	  var names = create$2(null);
	  var brackets = false;
	  var ncg = false;
	  var groupid = 0;
	  var groupname = '';
	  var chr;
	  for (; index < length; index++) {
	    chr = charAt$3(string, index);
	    if (chr === '\\') {
	      chr += charAt$3(string, ++index);
	      // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
	      if (!ncg && charAt$3(chr, 1) === '\\') {
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
	        if (exec$4(IS_NCG, stringSlice$6(string, index + 1))) {
	          index += 2;
	          ncg = true;
	          groupid++;
	        } else if (charAt$3(string, index + 1) !== '?') {
	          groupid++;
	        }
	        continue;
	      case chr === '>' && ncg:
	        if (groupname === '' || hasOwn$9(names, groupname)) {
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
	      result = replace$5(result, backref, numRef);
	    }
	  }
	  return [result, named];
	};

	// `RegExp` constructor
	// https://tc39.es/ecma262/#sec-regexp-constructor
	if (isForced$2('RegExp', BASE_FORCED)) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = isPrototypeOf$5(RegExpPrototype$1, this);
	    var patternIsRegExp = isRegExp(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var groups = [];
	    var rawPattern = pattern;
	    var rawFlags, dotAll, sticky, handled, result, state;
	    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
	      return pattern;
	    }
	    if (patternIsRegExp || isPrototypeOf$5(RegExpPrototype$1, pattern)) {
	      pattern = pattern.source;
	      if (flagsAreUndefined) flags = getRegExpFlags$3(rawPattern);
	    }
	    pattern = pattern === undefined ? '' : toString$9(pattern);
	    flags = flags === undefined ? '' : toString$9(flags);
	    rawPattern = pattern;
	    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
	      dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
	      if (dotAll) flags = replace$5(flags, /s/g, '');
	    }
	    rawFlags = flags;
	    if (MISSED_STICKY && 'sticky' in re1) {
	      sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
	      if (sticky && UNSUPPORTED_Y$1) flags = replace$5(flags, /y/g, '');
	    }
	    if (UNSUPPORTED_NCG) {
	      handled = handleNCG(pattern);
	      pattern = handled[0];
	      groups = handled[1];
	    }
	    result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
	    if (dotAll || sticky || groups.length) {
	      state = enforceInternalState$3(result);
	      if (dotAll) {
	        state.dotAll = true;
	        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
	      }
	      if (sticky) state.sticky = true;
	      if (groups.length) state.groups = groups;
	    }
	    if (pattern !== rawPattern) try {
	      // fails in old engines, but we have no alternatives for unsupported regex syntax
	      createNonEnumerableProperty$5(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
	    } catch (error) {/* empty */}
	    return result;
	  };
	  for (var keys = getOwnPropertyNames$1(NativeRegExp), index = 0; keys.length > index;) {
	    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
	  }
	  RegExpPrototype$1.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$1;
	  defineBuiltIn$8(globalThis$k, 'RegExp', RegExpWrapper, {
	    constructor: true
	  });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies$2('RegExp');

	var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
	var defineBuiltIn$7 = require('../internals/define-built-in');
	var anObject$9 = require('../internals/an-object');
	var $toString$3 = require('../internals/to-string');
	var fails$o = require('../internals/fails');
	var getRegExpFlags$2 = require('../internals/regexp-get-flags');
	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];
	var NOT_GENERIC = fails$o(function () {
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
	  defineBuiltIn$7(RegExpPrototype, TO_STRING, function toString() {
	    var R = anObject$9(this);
	    var pattern = $toString$3(R.source);
	    var flags = $toString$3(getRegExpFlags$2(R));
	    return '/' + pattern + '/' + flags;
	  }, {
	    unsafe: true
	  });
	}

	var uncurryThis$m = require('../internals/function-uncurry-this');
	var id$1 = 0;
	var postfix = Math.random();
	var toString$8 = uncurryThis$m(1.1.toString);
	module.exports = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id$1 + postfix, 36);
	};

	var uid$3 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$15 = /*@__PURE__*/getAugmentedNamespace(uid$3);

	var es_symbol = {};

	// `Symbol.prototype.description` getter
	var $$s = require('../internals/export');
	var DESCRIPTORS$9 = require('../internals/descriptors');
	var globalThis$j = require('../internals/global-this');
	var call$e = require('../internals/function-call');
	var uncurryThis$l = require('../internals/function-uncurry-this');
	var hasOwn$8 = require('../internals/has-own-property');
	var isCallable$d = require('../internals/is-callable');
	var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
	var toString$7 = require('../internals/to-string');
	var defineBuiltInAccessor$5 = require('../internals/define-built-in-accessor');
	var copyConstructorProperties = require('../internals/copy-constructor-properties');
	var NativeSymbol = globalThis$j.Symbol;
	var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
	if (DESCRIPTORS$9 && isCallable$d(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
	// Safari 12 bug
	NativeSymbol().description !== undefined)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function _Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$7(arguments[0]);
	    var result = isPrototypeOf$4(SymbolPrototype$1, this)
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
	      var stringKey = toString$7(key);
	      var symbol = call$e(nativeFor, this, stringKey);
	      if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
	      return symbol;
	    }
	  }['for'];
	  SymbolWrapper.prototype = SymbolPrototype$1;
	  SymbolPrototype$1.constructor = SymbolWrapper;
	  var NATIVE_SYMBOL$3 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$l(SymbolPrototype$1.valueOf);
	  var symbolDescriptiveString = uncurryThis$l(SymbolPrototype$1.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$4 = uncurryThis$l(''.replace);
	  var stringSlice$5 = uncurryThis$l(''.slice);
	  defineBuiltInAccessor$5(SymbolPrototype$1, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$8(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL$3 ? stringSlice$5(string, 7, -1) : replace$4(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });
	  $$s({
	    global: true,
	    constructor: true,
	    forced: true
	  }, {
	    Symbol: SymbolWrapper
	  });
	}

	var globalThis$i = require('../internals/global-this');
	var DOMIterables$1 = require('../internals/dom-iterables');
	var DOMTokenListPrototype$1 = require('../internals/dom-token-list-prototype');
	var forEach$1 = require('../internals/array-for-each');
	var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
	var handlePrototype$1 = function handlePrototype(CollectionPrototype) {
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach$1) try {
	    createNonEnumerableProperty$4(CollectionPrototype, 'forEach', forEach$1);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach$1;
	  }
	};
	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  if (DOMIterables$1[COLLECTION_NAME$1]) {
	    handlePrototype$1(globalThis$i[COLLECTION_NAME$1] && globalThis$i[COLLECTION_NAME$1].prototype);
	  }
	}
	handlePrototype$1(DOMTokenListPrototype$1);

	var $$r = require('../internals/export');
	var globalThis$h = require('../internals/global-this');
	var call$d = require('../internals/function-call');
	var uncurryThis$k = require('../internals/function-uncurry-this');
	var IS_PURE$3 = require('../internals/is-pure');
	var DESCRIPTORS$8 = require('../internals/descriptors');
	var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
	var fails$n = require('../internals/fails');
	var hasOwn$7 = require('../internals/has-own-property');
	var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
	var anObject$8 = require('../internals/an-object');
	var toIndexedObject$4 = require('../internals/to-indexed-object');
	var toPropertyKey$3 = require('../internals/to-property-key');
	var $toString$2 = require('../internals/to-string');
	var createPropertyDescriptor$4 = require('../internals/create-property-descriptor');
	var nativeObjectCreate = require('../internals/object-create');
	var objectKeys$1 = require('../internals/object-keys');
	var getOwnPropertyNamesModule$1 = require('../internals/object-get-own-property-names');
	var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
	var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
	var getOwnPropertyDescriptorModule$1 = require('../internals/object-get-own-property-descriptor');
	var definePropertyModule$1 = require('../internals/object-define-property');
	var definePropertiesModule = require('../internals/object-define-properties');
	var propertyIsEnumerableModule$1 = require('../internals/object-property-is-enumerable');
	var defineBuiltIn$6 = require('../internals/define-built-in');
	var defineBuiltInAccessor$4 = require('../internals/define-built-in-accessor');
	var shared = require('../internals/shared');
	var sharedKey$2 = require('../internals/shared-key');
	var hiddenKeys$2 = require('../internals/hidden-keys');
	var uid$2 = require('../internals/uid');
	var wellKnownSymbol$7 = require('../internals/well-known-symbol');
	var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
	var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
	var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
	var setToStringTag$6 = require('../internals/set-to-string-tag');
	var InternalStateModule$4 = require('../internals/internal-state');
	var $forEach$1 = require('../internals/array-iteration').forEach;
	var HIDDEN = sharedKey$2('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState$3 = InternalStateModule$4.set;
	var getInternalState$2 = InternalStateModule$4.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = globalThis$h.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var RangeError$2 = globalThis$h.RangeError;
	var TypeError$3 = globalThis$h.TypeError;
	var QObject = globalThis$h.QObject;
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty$1 = definePropertyModule$1.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$5 = uncurryThis$k([].push);
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var WellKnownSymbolsStore = shared('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var fallbackDefineProperty = function fallbackDefineProperty(O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty$1(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	  return O;
	};
	var setSymbolDescriptor = DESCRIPTORS$8 && fails$n(function () {
	  return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function get() {
	      return nativeDefineProperty$1(this, 'a', {
	        value: 7
	      }).a;
	    }
	  })).a !== 7;
	}) ? fallbackDefineProperty : nativeDefineProperty$1;
	var wrap = function wrap(tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState$3(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$8) symbol.description = description;
	  return symbol;
	};
	var $defineProperty$1 = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
	  anObject$8(O);
	  var key = toPropertyKey$3(P);
	  anObject$8(Attributes);
	  if (hasOwn$7(AllSymbols, key)) {
	    // first definition - default non-enumerable; redefinition - preserve existing state
	    if (!('enumerable' in Attributes) ? !hasOwn$7(O, key) || hasOwn$7(O, HIDDEN) && O[HIDDEN][key] : !Attributes.enumerable) {
	      if (!hasOwn$7(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$4(1, nativeObjectCreate(null)));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$7(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$4(0, false)
	      });
	    }
	    return setSymbolDescriptor(O, key, Attributes);
	  }
	  return nativeDefineProperty$1(O, key, Attributes);
	};
	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$8(O);
	  var properties = toIndexedObject$4(Properties);
	  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$8 || call$d($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
	  });
	  return O;
	};
	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$3(V);
	  var enumerable = call$d(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$1 && hasOwn$7(AllSymbols, P) && !hasOwn$7(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$7(this, P) || !hasOwn$7(AllSymbols, P) || hasOwn$7(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};
	var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$4(O);
	  var key = toPropertyKey$3(P);
	  if (it === ObjectPrototype$1 && hasOwn$7(AllSymbols, key) && !hasOwn$7(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && hasOwn$7(AllSymbols, key) && !(hasOwn$7(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$7(AllSymbols, key) && !hasOwn$7(hiddenKeys$2, key)) push$5(result, key);
	  });
	  return result;
	};
	var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$7(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$7(ObjectPrototype$1, key))) {
	      push$5(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$2) {
	  $Symbol = function _Symbol() {
	    if (isPrototypeOf$3(SymbolPrototype, this)) throw new TypeError$3('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$2(arguments[0]);
	    var tag = uid$2(description);
	    var _setter = function setter(value) {
	      var $this = this === undefined ? globalThis$h : this;
	      if ($this === ObjectPrototype$1) call$d(_setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$7($this, HIDDEN) && hasOwn$7($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor$4(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError$2)) throw error;
	        fallbackDefineProperty($this, tag, descriptor);
	      }
	    };
	    if (DESCRIPTORS$8 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
	      configurable: true,
	      set: _setter
	    });
	    return wrap(tag, description);
	  };
	  SymbolPrototype = $Symbol[PROTOTYPE];
	  defineBuiltIn$6(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });
	  defineBuiltIn$6($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$2(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$1.f = $defineProperty$1;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$7(name), name);
	  };
	  if (DESCRIPTORS$8) {
	    // https://tc39.es/ecma262/#sec-symbol.prototype.description
	    defineBuiltInAccessor$4(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$2(this).description;
	      }
	    });
	    if (!IS_PURE$3) {
	      defineBuiltIn$6(ObjectPrototype$1, 'propertyIsEnumerable', $propertyIsEnumerable, {
	        unsafe: true
	      });
	    }
	  }
	}
	$$r({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: !NATIVE_SYMBOL$2,
	  sham: !NATIVE_SYMBOL$2
	}, {
	  Symbol: $Symbol
	});
	$forEach$1(objectKeys$1(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});
	$$r({
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
	$$r({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$2,
	  sham: !DESCRIPTORS$8
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
	$$r({
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
	setToStringTag$6($Symbol, SYMBOL);
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

	var isCallable$c = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(isCallable$c);

	var getBuiltIn$5;
	var hasRequiredGetBuiltIn;

	function requireGetBuiltIn () {
		if (hasRequiredGetBuiltIn) return getBuiltIn$5;
		hasRequiredGetBuiltIn = 1;

		var globalThis = require$$0$8;
		var isCallable = require$$3$3;
		var aFunction = function aFunction(argument) {
		  return isCallable(argument) ? argument : undefined;
		};
		getBuiltIn$5 = function (namespace, method) {
		  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
		};
		return getBuiltIn$5;
	}

	var uncurryThis$j = require('../internals/function-uncurry-this');
	var toString$6 = uncurryThis$j({}.toString);
	var stringSlice$4 = uncurryThis$j(''.slice);
	module.exports = function (it) {
	  return stringSlice$4(toString$6(it), 8, -1);
	};

	var classofRaw = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$5 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

	var classof$a;
	var hasRequiredClassof;

	function requireClassof () {
		if (hasRequiredClassof) return classof$a;
		hasRequiredClassof = 1;

		var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
		var isCallable = require$$3$3;
		var classofRaw = require$$1$5;
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
		classof$a = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
		  var O, tag, result;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		  // @@toStringTag case
		  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
		  // builtinTag case
		  : CORRECT_ARGUMENTS ? classofRaw(O)
		  // ES3 arguments fallback
		  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
		};
		return classof$a;
	}

	var toString$5;
	var hasRequiredToString;

	function requireToString () {
		if (hasRequiredToString) return toString$5;
		hasRequiredToString = 1;

		var classof = requireClassof();
		var $String = String;
		toString$5 = function (argument) {
		  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
		  return $String(argument);
		};
		return toString$5;
	}

	var symbolRegistryDetection;
	var hasRequiredSymbolRegistryDetection;

	function requireSymbolRegistryDetection () {
		if (hasRequiredSymbolRegistryDetection) return symbolRegistryDetection;
		hasRequiredSymbolRegistryDetection = 1;

		var NATIVE_SYMBOL = require$$4$3;

		/* eslint-disable es/no-symbol -- safe */
		symbolRegistryDetection = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;
		return symbolRegistryDetection;
	}

	var hasRequiredEs_symbol_for;

	function requireEs_symbol_for () {
		if (hasRequiredEs_symbol_for) return es_symbol_for;
		hasRequiredEs_symbol_for = 1;

		var $ = require$$0$9;
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

	var getBuiltIn$4 = require('../internals/get-built-in');
	var isCallable$b = require('../internals/is-callable');
	var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
	var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
	var $Object$3 = Object;
	module.exports = USE_SYMBOL_AS_UID ? function (it) {
	  return _typeof(it) == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$4('Symbol');
	  return isCallable$b($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
	};

	var isSymbol$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$5 = /*@__PURE__*/getAugmentedNamespace(isSymbol$2);

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

		var $ = require$$0$9;
		var hasOwn = requireHasOwnProperty();
		var isSymbol = require$$2$5;
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

	var $$q = require('../internals/export');
	var getBuiltIn$3 = require('../internals/get-built-in');
	var apply$2 = require('../internals/function-apply');
	var call$c = require('../internals/function-call');
	var uncurryThis$i = require('../internals/function-uncurry-this');
	var fails$m = require('../internals/fails');
	var isArray$3 = require('../internals/is-array');
	var isCallable$a = require('../internals/is-callable');
	var isRawJSON = require('../internals/is-raw-json');
	var isSymbol$1 = require('../internals/is-symbol');
	var classof$9 = require('../internals/classof-raw');
	var toString$4 = require('../internals/to-string');
	var arraySlice$3 = require('../internals/array-slice');
	var parseJSONString = require('../internals/parse-json-string');
	var uid$1 = require('../internals/uid');
	var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
	var NATIVE_RAW_JSON = require('../internals/native-raw-json');
	var $String$2 = String;
	var $stringify = getBuiltIn$3('JSON', 'stringify');
	var exec$3 = uncurryThis$i(/./.exec);
	var charAt$2 = uncurryThis$i(''.charAt);
	var charCodeAt = uncurryThis$i(''.charCodeAt);
	var replace$3 = uncurryThis$i(''.replace);
	var slice$1 = uncurryThis$i(''.slice);
	var push$4 = uncurryThis$i([].push);
	var numberToString$1 = uncurryThis$i(1.1.toString);
	var surrogates = /[\uD800-\uDFFF]/g;
	var leadingSurrogates = /^[\uD800-\uDBFF]$/;
	var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
	var MARK = uid$1();
	var MARK_LENGTH = MARK.length;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$m(function () {
	  var symbol = getBuiltIn$3('Symbol')('stringify detection');
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
	var ILL_FORMED_UNICODE = fails$m(function () {
	  return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
	});
	var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
	  var args = arraySlice$3(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$a($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$a($replacer)) value = call$c($replacer, this, $String$2(key), value);
	    if (!isSymbol$1(value)) return value;
	  };
	  return apply$2($stringify, null, args);
	} : $stringify;
	var fixIllFormedJSON = function fixIllFormedJSON(match, offset, string) {
	  var prev = charAt$2(string, offset - 1);
	  var next = charAt$2(string, offset + 1);
	  if (exec$3(leadingSurrogates, match) && !exec$3(trailingSurrogates, next) || exec$3(trailingSurrogates, match) && !exec$3(leadingSurrogates, prev)) {
	    return "\\u" + numberToString$1(charCodeAt(match, 0), 16);
	  }
	  return match;
	};
	var getReplacerFunction = function getReplacerFunction(replacer) {
	  if (isCallable$a(replacer)) return replacer;
	  if (!isArray$3(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$4(keys, element);else if (typeof element == 'number' || classof$9(element) === 'Number' || classof$9(element) === 'String') push$4(keys, toString$4(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$3(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	// `JSON.stringify` method
	// https://tc39.es/ecma262/#sec-json.stringify
	// https://github.com/tc39/proposal-json-parse-with-source
	if ($stringify) $$q({
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
	      var v = isCallable$a(replacerFunction) ? call$c(replacerFunction, this, $String$2(key), value) : value;
	      return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push$4(rawStrings, v.rawJSON) - 1) : v;
	    }, space);
	    if (typeof json != 'string') return json;
	    if (ILL_FORMED_UNICODE) json = replace$3(json, surrogates, fixIllFormedJSON);
	    if (NATIVE_RAW_JSON) return json;
	    var result = '';
	    var length = json.length;
	    for (var i = 0; i < length; i++) {
	      var chr = charAt$2(json, i);
	      if (chr === '"') {
	        var end = parseJSONString(json, ++i).end - 1;
	        var string = slice$1(json, i, end);
	        result += slice$1(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice$1(string, MARK_LENGTH)] : '"' + string + '"';
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

		var $ = require$$0$9;
		var NATIVE_SYMBOL = require$$4$3;
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
	var fails$l = require('../internals/fails');
	var globalThis$g = require('../internals/global-this');
	var $String$1 = globalThis$g.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	module.exports = !!Object.getOwnPropertySymbols && !fails$l(function () {
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

	var require$$4$3 = /*@__PURE__*/getAugmentedNamespace(symbolConstructorDetection);

	var es_symbol_iterator = {};

	var path;
	var hasRequiredPath;

	function requirePath () {
		if (hasRequiredPath) return path;
		hasRequiredPath = 1;

		var globalThis = require$$0$8;
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

	var call$b = require('../internals/function-call');
	var uncurryThis$h = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$7 = require('../internals/an-object');
	var isObject$c = require('../internals/is-object');
	var requireObjectCoercible$2 = require('../internals/require-object-coercible');
	var speciesConstructor$2 = require('../internals/species-constructor');
	var advanceStringIndex$1 = require('../internals/advance-string-index');
	var toLength$2 = require('../internals/to-length');
	var toString$3 = require('../internals/to-string');
	var getMethod$2 = require('../internals/get-method');
	var getRegExpFlags$1 = require('../internals/regexp-get-flags');
	var regExpExec$2 = require('../internals/regexp-exec-abstract');
	var stickyHelpers = require('../internals/regexp-sticky-helpers');
	var fails$k = require('../internals/fails');
	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min$2 = Math.min;
	var push$3 = uncurryThis$h([].push);
	var stringSlice$3 = uncurryThis$h(''.slice);
	var stringIndexOf$1 = uncurryThis$h(''.indexOf);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$k(function () {
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
	    return separator === undefined && limit === 0 ? [] : call$b(nativeSplit, this, separator, limit);
	  } : nativeSplit;
	  return [
	  // `String.prototype.split` method
	  // https://tc39.es/ecma262/#sec-string.prototype.split
	  function split(separator, limit) {
	    var O = requireObjectCoercible$2(this);
	    var splitter = isObject$c(separator) ? getMethod$2(separator, SPLIT) : undefined;
	    return splitter ? call$b(splitter, separator, O, limit) : call$b(internalSplit, toString$3(O), separator, limit);
	  },
	  // `RegExp.prototype[@@split]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (string, limit) {
	    var rx = anObject$7(this);
	    var S = toString$3(string);
	    if (!BUGGY) {
	      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;
	    }
	    var C = speciesConstructor$2(rx, RegExp);
	    var flags = toString$3(getRegExpFlags$1(rx));
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
	      var z = regExpExec$2(splitter, UNSUPPORTED_Y ? stringSlice$3(S, q) : S);
	      var e;
	      if (z === null || (e = min$2(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
	        q = advanceStringIndex$1(S, q, unicodeMatching);
	      } else {
	        push$3(A, stringSlice$3(S, p, q));
	        if (A.length === lim) return A;
	        for (var i = 1; i <= z.length - 1; i++) {
	          push$3(A, z[i]);
	          if (A.length === lim) return A;
	        }
	        q = p = e;
	      }
	    }
	    push$3(A, stringSlice$3(S, p));
	    return A;
	  }];
	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var uncurryThis$g = require('../internals/function-uncurry-this');
	var fails$j = require('../internals/fails');
	var classof$8 = require('../internals/classof-raw');
	var $Object$2 = Object;
	var split$2 = uncurryThis$g(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	module.exports = fails$j(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$2('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$8(it) === 'String' ? split$2(it, '') : $Object$2(it);
	} : $Object$2;

	var indexedObject = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$4 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

	var toIndexedObject$3;
	var hasRequiredToIndexedObject;

	function requireToIndexedObject () {
		if (hasRequiredToIndexedObject) return toIndexedObject$3;
		hasRequiredToIndexedObject = 1;

		// toObject with fallback for non-array-like ES3 strings
		var IndexedObject = require$$2$4;
		var requireObjectCoercible = requireRequireObjectCoercible();
		toIndexedObject$3 = function (it) {
		  return IndexedObject(requireObjectCoercible(it));
		};
		return toIndexedObject$3;
	}

	var DESCRIPTORS$7 = require('../internals/descriptors');
	var call$a = require('../internals/function-call');
	var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
	var createPropertyDescriptor$3 = require('../internals/create-property-descriptor');
	var toIndexedObject$2 = require('../internals/to-indexed-object');
	var toPropertyKey$2 = require('../internals/to-property-key');
	var hasOwn$6 = require('../internals/has-own-property');
	var IE8_DOM_DEFINE$1 = require('../internals/ie8-dom-define');

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	exports.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {/* empty */}
	  if (hasOwn$6(O, P)) return createPropertyDescriptor$3(!call$a(propertyIsEnumerableModule.f, O, P), O[P]);
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

		var $ = require$$0$9;
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

	var DESCRIPTORS$6 = require('../internals/descriptors');
	var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
	var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
	var anObject$6 = require('../internals/an-object');
	var toPropertyKey$1 = require('../internals/to-property-key');
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
	exports.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$6(O);
	  P = toPropertyKey$1(P);
	  anObject$6(Attributes);
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
	  anObject$6(O);
	  P = toPropertyKey$1(P);
	  anObject$6(Attributes);
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

	var isCallable$9 = require('../internals/is-callable');
	module.exports = function (it) {
	  return _typeof(it) == 'object' ? it !== null : isCallable$9(it);
	};

	var isObject$b = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(isObject$b);

	var anObject$5;
	var hasRequiredAnObject;

	function requireAnObject () {
		if (hasRequiredAnObject) return anObject$5;
		hasRequiredAnObject = 1;

		var isObject = require$$2$3;
		var $String = String;
		var $TypeError = TypeError;

		// `Assert: Type(argument) is Object`
		anObject$5 = function (argument) {
		  if (isObject(argument)) return argument;
		  throw new $TypeError($String(argument) + ' is not an object');
		};
		return anObject$5;
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

		var $ = require$$0$9;
		var toObject = requireToObject();
		var nativeKeys = require$$5$3;
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

	var require$$5$3 = /*@__PURE__*/getAugmentedNamespace(objectKeys);

	var hasRequiredObjectDefineProperties;

	function requireObjectDefineProperties () {
		if (hasRequiredObjectDefineProperties) return objectDefineProperties;
		hasRequiredObjectDefineProperties = 1;

		var DESCRIPTORS = requireDescriptors();
		var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
		var definePropertyModule = require$$1$4;
		var anObject = requireAnObject();
		var toIndexedObject = requireToIndexedObject();
		var objectKeys = require$$5$3;

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

		var globalThis = require$$0$8;
		var isObject = require$$2$3;
		var document = globalThis.document;
		// typeof document.createElement is 'object' in old IE
		var EXISTS = isObject(document) && isObject(document.createElement);
		documentCreateElement = function (it) {
		  return EXISTS ? document.createElement(it) : {};
		};
		return documentCreateElement;
	}

	var sharedKey$1;
	var hasRequiredSharedKey;

	function requireSharedKey () {
		if (hasRequiredSharedKey) return sharedKey$1;
		hasRequiredSharedKey = 1;

		var shared = requireShared();
		var uid = require$$15;
		var keys = shared('keys');
		sharedKey$1 = function (key) {
		  return keys[key] || (keys[key] = uid(key));
		};
		return sharedKey$1;
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

	var addToUnscopables$3;
	var hasRequiredAddToUnscopables;

	function requireAddToUnscopables () {
		if (hasRequiredAddToUnscopables) return addToUnscopables$3;
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
		addToUnscopables$3 = function (key) {
		  ArrayPrototype[UNSCOPABLES][key] = true;
		};
		return addToUnscopables$3;
	}

	var iterators;
	var hasRequiredIterators;

	function requireIterators () {
		if (hasRequiredIterators) return iterators;
		hasRequiredIterators = 1;

		iterators = {};
		return iterators;
	}

	var globalThis$f = require('../internals/global-this');
	var isCallable$8 = require('../internals/is-callable');
	var WeakMap$1 = globalThis$f.WeakMap;
	module.exports = isCallable$8(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var weakMapBasicDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(weakMapBasicDetection);

	var createPropertyDescriptor$2;
	var hasRequiredCreatePropertyDescriptor;

	function requireCreatePropertyDescriptor () {
		if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor$2;
		hasRequiredCreatePropertyDescriptor = 1;

		createPropertyDescriptor$2 = function (bitmap, value) {
		  return {
		    enumerable: !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable: !(bitmap & 4),
		    value: value
		  };
		};
		return createPropertyDescriptor$2;
	}

	var createNonEnumerableProperty$3;
	var hasRequiredCreateNonEnumerableProperty;

	function requireCreateNonEnumerableProperty () {
		if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty$3;
		hasRequiredCreateNonEnumerableProperty = 1;

		var DESCRIPTORS = requireDescriptors();
		var definePropertyModule = require$$1$4;
		var createPropertyDescriptor = requireCreatePropertyDescriptor();
		createNonEnumerableProperty$3 = DESCRIPTORS ? function (object, key, value) {
		  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
		} : function (object, key, value) {
		  object[key] = value;
		  return object;
		};
		return createNonEnumerableProperty$3;
	}

	var internalState;
	var hasRequiredInternalState;

	function requireInternalState () {
		if (hasRequiredInternalState) return internalState;
		hasRequiredInternalState = 1;

		var NATIVE_WEAK_MAP = require$$0$7;
		var globalThis = require$$0$8;
		var isObject = require$$2$3;
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

	var globalThis$e = require('../internals/global-this');
	var DOMIterables = require('../internals/dom-iterables');
	var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
	var ArrayIteratorMethods = require('../modules/es.array.iterator');
	var createNonEnumerableProperty$2 = require('../internals/create-non-enumerable-property');
	var setToStringTag$5 = require('../internals/set-to-string-tag');
	var wellKnownSymbol$6 = require('../internals/well-known-symbol');
	var ITERATOR$4 = wellKnownSymbol$6('iterator');
	var ArrayValues = ArrayIteratorMethods.values;
	var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
	      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$4, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$4] = ArrayValues;
	    }
	    setToStringTag$5(CollectionPrototype, COLLECTION_NAME, true);
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	};
	for (var COLLECTION_NAME in DOMIterables) {
	  handlePrototype(globalThis$e[COLLECTION_NAME] && globalThis$e[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}
	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	var $$p = require('../internals/export');
	var call$9 = require('../internals/function-call');
	var IS_PURE$2 = require('../internals/is-pure');
	var FunctionName = require('../internals/function-name');
	var isCallable$7 = require('../internals/is-callable');
	var createIteratorConstructor$1 = require('../internals/iterator-create-constructor');
	var getPrototypeOf = require('../internals/object-get-prototype-of');
	var setPrototypeOf$1 = require('../internals/object-set-prototype-of');
	var setToStringTag$4 = require('../internals/set-to-string-tag');
	var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');
	var defineBuiltIn$5 = require('../internals/define-built-in');
	var wellKnownSymbol$5 = require('../internals/well-known-symbol');
	var Iterators = require('../internals/iterators');
	var IteratorsCore = require('../internals/iterators-core');
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol$5('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';
	var returnThis = function returnThis() {
	  return this;
	};
	module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor$1(IteratorConstructor, NAME, next);
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
	  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE$2 && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf$1) {
	          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable$7(CurrentIteratorPrototype[ITERATOR$3])) {
	          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$3, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE$2) Iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (!IS_PURE$2 && CONFIGURABLE_FUNCTION_NAME$1) {
	      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() {
	        return call$9(nativeIterator, this);
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
	        defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$p({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  // define iterator
	  if ((!IS_PURE$2 || FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    defineBuiltIn$5(IterablePrototype, ITERATOR$3, defaultIterator, {
	      name: DEFAULT
	    });
	  }
	  Iterators[NAME] = defaultIterator;
	  return methods;
	};

	var iteratorDefine = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$7$1 = /*@__PURE__*/getAugmentedNamespace(iteratorDefine);

	var createIterResultObject$1;
	var hasRequiredCreateIterResultObject;

	function requireCreateIterResultObject () {
		if (hasRequiredCreateIterResultObject) return createIterResultObject$1;
		hasRequiredCreateIterResultObject = 1;

		// `CreateIterResultObject` abstract operation
		// https://tc39.es/ecma262/#sec-createiterresultobject
		createIterResultObject$1 = function (value, done) {
		  return {
		    value: value,
		    done: done
		  };
		};
		return createIterResultObject$1;
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
		var defineIterator = require$$7$1;
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

		var $ = require$$0$9;
		var trunc = require$$0$6;

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
	var floor$1 = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	module.exports = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$1 : ceil)(n);
	};

	var mathTrunc = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(mathTrunc);

	var toIntegerOrInfinity$1;
	var hasRequiredToIntegerOrInfinity;

	function requireToIntegerOrInfinity () {
		if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity$1;
		hasRequiredToIntegerOrInfinity = 1;

		var trunc = require$$0$6;

		// `ToIntegerOrInfinity` abstract operation
		// https://tc39.es/ecma262/#sec-tointegerorinfinity
		toIntegerOrInfinity$1 = function (argument) {
		  var number = +argument;
		  // eslint-disable-next-line no-self-compare -- NaN check
		  return number !== number || number === 0 ? 0 : trunc(number);
		};
		return toIntegerOrInfinity$1;
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
		var defineIterator = require$$7$1;
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

	var require$$5$2 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

	var wellKnownSymbol$4;
	var hasRequiredWellKnownSymbol;

	function requireWellKnownSymbol () {
		if (hasRequiredWellKnownSymbol) return wellKnownSymbol$4;
		hasRequiredWellKnownSymbol = 1;

		var globalThis = require$$0$8;
		var shared = requireShared();
		var hasOwn = requireHasOwnProperty();
		var uid = require$$15;
		var NATIVE_SYMBOL = require$$4$3;
		var USE_SYMBOL_AS_UID = require$$5$2;
		var _Symbol = globalThis.Symbol;
		var WellKnownSymbolsStore = shared('wks');
		var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol['for'] || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
		wellKnownSymbol$4 = function (name) {
		  if (!hasOwn(WellKnownSymbolsStore, name)) {
		    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
		  }
		  return WellKnownSymbolsStore[name];
		};
		return wellKnownSymbol$4;
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

	var uncurryThis$f = require('../internals/function-uncurry-this');
	var fails$i = require('../internals/fails');
	var isCallable$6 = require('../internals/is-callable');
	var hasOwn$5 = require('../internals/has-own-property');
	var DESCRIPTORS$5 = require('../internals/descriptors');
	var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
	var inspectSource$2 = require('../internals/inspect-source');
	var InternalStateModule$3 = require('../internals/internal-state');
	var enforceInternalState$2 = InternalStateModule$3.enforce;
	var getInternalState$1 = InternalStateModule$3.get;
	var $String = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$1 = Object.defineProperty;
	var stringSlice$2 = uncurryThis$f(''.slice);
	var replace$2 = uncurryThis$f(''.replace);
	var join$3 = uncurryThis$f([].join);
	var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$i(function () {
	  return defineProperty$1(function () {/* empty */}, 'length', {
	    value: 8
	  }).length !== 8;
	});
	var TEMPLATE = String(String).split('String');
	var makeBuiltIn = module.exports = function (value, name, options) {
	  if (stringSlice$2($String(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$2($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$5(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
	    if (DESCRIPTORS$5) defineProperty$1(value, 'name', {
	      value: name,
	      configurable: true
	    });else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
	    defineProperty$1(value, 'length', {
	      value: options.arity
	    });
	  }
	  try {
	    if (options && hasOwn$5(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$5) defineProperty$1(value, 'prototype', {
	        writable: false
	      });
	      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) {/* empty */}
	  var state = enforceInternalState$2(value);
	  if (!hasOwn$5(state, 'source')) {
	    state.source = join$3(TEMPLATE, typeof name == 'string' ? name : '');
	  }
	  return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn(function toString() {
	  return isCallable$6(this) && getInternalState$1(this).source || inspectSource$2(this);
	}, 'toString');

	var makeBuiltIn$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

	var defineBuiltIn$4;
	var hasRequiredDefineBuiltIn;

	function requireDefineBuiltIn () {
		if (hasRequiredDefineBuiltIn) return defineBuiltIn$4;
		hasRequiredDefineBuiltIn = 1;

		var isCallable = require$$3$3;
		var definePropertyModule = require$$1$4;
		var makeBuiltIn = require$$0$5;
		var defineGlobalProperty = requireDefineGlobalProperty();
		defineBuiltIn$4 = function (O, key, value, options) {
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
		return defineBuiltIn$4;
	}

	var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
	var classof$7 = require('../internals/classof');

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
	  return '[object ' + classof$7(this) + ']';
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

	var $$o = require('../internals/export');
	var $find$1 = require('../internals/array-iteration').find;
	var addToUnscopables$2 = require('../internals/add-to-unscopables');
	var FIND = 'find';
	var SKIPS_HOLES$1 = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-find -- testing
	if (FIND in []) Array(1)[FIND](function () {
	  SKIPS_HOLES$1 = false;
	});

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$$o({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES$1
	}, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$2(FIND);

	function lang () {
	  Lampa.Lang.add({
	    // Plugin name & general
	    gramlink_title: {
	      en: 'GramLink',
	      uk: 'GramLink',
	      ru: 'GramLink'
	    },
	    gramlink_description: {
	      en: 'Telegram sync via MTProto',
	      uk: 'Синхронізація через Telegram',
	      ru: 'Синхронизация через Telegram'
	    },
	    gramlink_settings: {
	      en: 'GramLink Settings',
	      uk: 'Налаштування GramLink',
	      ru: 'Настройки GramLink'
	    },
	    // Menu
	    gramlink_menu_title: {
	      en: 'GramLink',
	      uk: 'GramLink',
	      ru: 'GramLink'
	    },
	    gramlink_hub_title: {
	      en: 'GramLink | Sync Hub',
	      uk: 'GramLink | Хаб синхронізації',
	      ru: 'GramLink | Хаб синхронизации'
	    },
	    // Settings — section titles
	    gramlink_settings_section_auth: {
	      en: 'Authorization',
	      uk: 'Авторизація',
	      ru: 'Авторизация'
	    },
	    gramlink_settings_section_connection: {
	      en: 'Connection',
	      uk: 'Підключення',
	      ru: 'Подключение'
	    },
	    gramlink_settings_section_sync: {
	      en: 'Synchronization',
	      uk: 'Синхронізація',
	      ru: 'Синхронизация'
	    },
	    gramlink_settings_section_tools: {
	      en: 'Tools',
	      uk: 'Інструменти',
	      ru: 'Инструменты'
	    },
	    gramlink_settings_section_about: {
	      en: 'About',
	      uk: 'Про плагін',
	      ru: 'О плагине'
	    },
	    // Settings — connection
	    gramlink_settings_api_id: {
	      en: 'Telegram API ID',
	      uk: 'Telegram API ID',
	      ru: 'Telegram API ID'
	    },
	    gramlink_settings_api_id_desc: {
	      en: 'Get from my.telegram.org/apps',
	      uk: 'Отримайте на my.telegram.org/apps',
	      ru: 'Получите на my.telegram.org/apps'
	    },
	    gramlink_settings_api_hash: {
	      en: 'Telegram API Hash',
	      uk: 'Telegram API Hash',
	      ru: 'Telegram API Hash'
	    },
	    gramlink_settings_api_hash_desc: {
	      en: 'Secret key from my.telegram.org',
	      uk: 'Секретний ключ з my.telegram.org',
	      ru: 'Секретный ключ с my.telegram.org'
	    },
	    // Settings — auth actions
	    gramlink_settings_login: {
	      en: 'Login to Telegram',
	      uk: 'Увійти в Telegram',
	      ru: 'Войти в Telegram'
	    },
	    gramlink_settings_login_desc: {
	      en: 'Authorize via QR code',
	      uk: 'Авторизація через QR код',
	      ru: 'Авторизация через QR код'
	    },
	    gramlink_settings_logout: {
	      en: 'Logout',
	      uk: 'Вийти',
	      ru: 'Выйти'
	    },
	    gramlink_settings_logout_desc: {
	      en: 'Clear Telegram session',
	      uk: 'Очистити сесію Telegram',
	      ru: 'Очистить сессию Telegram'
	    },
	    gramlink_settings_logout_confirm: {
	      en: 'Are you sure you want to logout?',
	      uk: 'Ви впевнені, що хочете вийти?',
	      ru: 'Вы уверены, что хотите выйти?'
	    },
	    gramlink_settings_status: {
	      en: 'Connection status',
	      uk: 'Статус підключення',
	      ru: 'Статус подключения'
	    },
	    gramlink_settings_status_desc: {
	      en: 'Current Telegram connection status',
	      uk: 'Поточний статус з\'єднання Telegram',
	      ru: 'Текущий статус соединения Telegram'
	    },
	    // Settings — sync toggles
	    gramlink_settings_sync_enabled: {
	      en: 'Enable sync',
	      uk: 'Увімкнути синхронізацію',
	      ru: 'Включить синхронизацию'
	    },
	    gramlink_settings_sync_heartbeat: {
	      en: 'Device heartbeat',
	      uk: 'Heartbeat пристрою',
	      ru: 'Heartbeat устройства'
	    },
	    gramlink_settings_sync_broadcast: {
	      en: 'Cross-device broadcast',
	      uk: 'Кросс-девайс трансляція',
	      ru: 'Кросс-девайс трансляция'
	    },
	    gramlink_settings_connection: {
	      en: 'Connection',
	      uk: 'З\'єднання',
	      ru: 'Соединение'
	    },
	    // Settings — server type
	    gramlink_settings_server_type: {
	      en: 'Server',
	      uk: 'Сервер',
	      ru: 'Сервер'
	    },
	    gramlink_settings_server_desc: {
	      en: 'Choose server type',
	      uk: 'Виберіть тип сервера',
	      ru: 'Выберите тип сервера'
	    },
	    gramlink_settings_auth: {
	      en: 'Authorization',
	      uk: 'Авторизація',
	      ru: 'Авторизация'
	    },
	    gramlink_settings_auth_login: {
	      en: 'Login to Telegram',
	      uk: 'Увійти в Telegram',
	      ru: 'Войти в Telegram'
	    },
	    gramlink_settings_auth_logout: {
	      en: 'Logout',
	      uk: 'Вийти',
	      ru: 'Выйти'
	    },
	    // Hub — status
	    gramlink_status_connecting: {
	      en: 'Connecting to Telegram...',
	      uk: 'Підключення до Telegram...',
	      ru: 'Подключение к Telegram...'
	    },
	    gramlink_status_connected: {
	      en: 'Connected to Telegram',
	      uk: 'Підключено до Telegram',
	      ru: 'Подключено к Telegram'
	    },
	    gramlink_status_disconnected: {
	      en: 'Not connected',
	      uk: 'Не підключено',
	      ru: 'Не подключено'
	    },
	    gramlink_status_error: {
	      en: 'Connection error',
	      uk: 'Помилка з\'єднання',
	      ru: 'Ошибка подключения'
	    },
	    gramlink_status_auth_needed: {
	      en: 'Authorization required',
	      uk: 'Потрібна авторизація',
	      ru: 'Требуется авторизация'
	    },
	    // Hub — general status
	    gramlink_status: {
	      en: 'Status',
	      uk: 'Статус',
	      ru: 'Статус'
	    },
	    gramlink_connecting: {
	      en: 'Connect to Telegram to see devices',
	      uk: 'Підключіться до Telegram щоб побачити пристрої',
	      ru: 'Подключитесь к Telegram чтобы увидеть устройства'
	    },
	    gramlink_connected: {
	      en: 'Connected',
	      uk: 'Підключено',
	      ru: 'Подключено'
	    },
	    gramlink_auth_required: {
	      en: 'Authorization required',
	      uk: 'Потрібна авторизація',
	      ru: 'Требуется авторизация'
	    },
	    // Hub — devices
	    gramlink_devices_title: {
	      en: 'Connected devices',
	      uk: 'Підключені пристрої',
	      ru: 'Подключенные устройства'
	    },
	    gramlink_devices_empty: {
	      en: 'No devices detected',
	      uk: 'Пристроїв не виявлено',
	      ru: 'Устройства не обнаружены'
	    },
	    gramlink_devices_online: {
	      en: 'online',
	      uk: 'онлайн',
	      ru: 'онлайн'
	    },
	    gramlink_devices_offline: {
	      en: 'offline',
	      uk: 'офлайн',
	      ru: 'офлайн'
	    },
	    gramlink_devices_this_device: {
	      en: 'This device',
	      uk: 'Цей пристрій',
	      ru: 'Это устройство'
	    },
	    // Hub — general devices
	    gramlink_devices: {
	      en: 'Devices',
	      uk: 'Пристрої',
	      ru: 'Устройства'
	    },
	    gramlink_no_devices: {
	      en: 'No devices',
	      uk: 'Пристроїв немає',
	      ru: 'Устройств нет'
	    },
	    gramlink_online: {
	      en: 'Online',
	      uk: 'Онлайн',
	      ru: 'Онлайн'
	    },
	    // Hub — sync info
	    gramlink_sync_channel: {
	      en: 'Sync channel',
	      uk: 'Канал синхронізації',
	      ru: 'Канал синхронизации'
	    },
	    gramlink_sync_channel_creating: {
	      en: 'Creating sync channel...',
	      uk: 'Створення каналу синхронізації...',
	      ru: 'Создание канала синхронизации...'
	    },
	    gramlink_sync_channel_ready: {
	      en: 'Sync channel ready',
	      uk: 'Канал синхронізації готовий',
	      ru: 'Канал синхронизации готов'
	    },
	    gramlink_sync_channel_error: {
	      en: 'Failed to create sync channel',
	      uk: 'Не вдалося створити канал синхронізації',
	      ru: 'Не удалось создать канал синхронизации'
	    },
	    gramlink_last_sync: {
	      en: 'Last sync',
	      uk: 'Остання синхронізація',
	      ru: 'Последняя синхронизация'
	    },
	    gramlink_last_sync_never: {
	      en: 'Never',
	      uk: 'Ніколи',
	      ru: 'Никогда'
	    },
	    // Auth flow — QR
	    gramlink_auth_qr_title: {
	      en: 'Telegram Authorization',
	      uk: 'Авторизація Telegram',
	      ru: 'Авторизация Telegram'
	    },
	    gramlink_auth_qr_scan: {
	      en: 'Scan the QR code with your Telegram app',
	      uk: 'Скануйте QR код у додатку Telegram',
	      ru: 'Сканируйте QR код в приложении Telegram'
	    },
	    gramlink_auth_qr_waiting: {
	      en: 'Waiting for scan...',
	      uk: 'Очікування сканування...',
	      ru: 'Ожидание сканирования...'
	    },
	    gramlink_auth_qr_confirm: {
	      en: 'Confirm login on your phone and enter 2FA password if needed',
	      uk: 'Підтвердьте вхід на телефоні та введіть пароль 2FA якщо потрібно',
	      ru: 'Подтвердите вход на телефоне и введите пароль 2FA если требуется'
	    },
	    gramlink_auth_qr_success: {
	      en: 'Authorization successful!',
	      uk: 'Авторизація успішна!',
	      ru: 'Авторизация успешна!'
	    },
	    gramlink_auth_qr_error: {
	      en: 'Authorization failed',
	      uk: 'Авторизація не вдалася',
	      ru: 'Авторизация не удалась'
	    },
	    gramlink_auth_scan_done: {
	      en: 'I scanned the QR code',
	      uk: 'Я відсканував QR',
	      ru: 'Я отсканировал QR'
	    },
	    gramlink_auth_scan_not_found: {
	      en: 'Scan not detected. Make sure you scanned from Telegram and try again.',
	      uk: 'Сканування не виявлено. Переконайтесь що сканували з Telegram і спробуйте ще раз.',
	      ru: 'Сканирование не найдено. Убедитесь что сканировали из Telegram и попробуйте снова.'
	    },
	    gramlink_auth_restart: {
	      en: 'Restart',
	      uk: 'Спочатку',
	      ru: 'Сначала'
	    },
	    gramlink_auth_qr_expired: {
	      en: 'QR code expired. Please try again.',
	      uk: 'QR код застарів. Спробуйте ще раз.',
	      ru: 'QR код устарел. Попробуйте снова.'
	    },
	    // 2FA
	    gramlink_2fa_title: {
	      en: 'Two-factor authentication',
	      uk: 'Двофакторна аутентифікація',
	      ru: 'Двухфакторная аутентификация'
	    },
	    gramlink_2fa_desc: {
	      en: 'Enter your 2FA password to complete login',
	      uk: 'Введіть пароль 2FA для завершення входу',
	      ru: 'Введите пароль 2FA для завершения входа'
	    },
	    gramlink_2fa_hint: {
	      en: 'Hint: {hint}',
	      uk: 'Підказка: {hint}',
	      ru: 'Подсказка: {hint}'
	    },
	    gramlink_2fa_placeholder: {
	      en: 'Password',
	      uk: 'Пароль',
	      ru: 'Пароль'
	    },
	    gramlink_2fa_confirm: {
	      en: 'Confirm',
	      uk: 'Підтвердити',
	      ru: 'Подтвердить'
	    },
	    gramlink_2fa_cancel: {
	      en: 'Cancel',
	      uk: 'Скасувати',
	      ru: 'Отмена'
	    },
	    gramlink_2fa_wrong: {
	      en: 'Wrong password. Try again.',
	      uk: 'Невірний пароль. Спробуйте ще раз.',
	      ru: 'Неверный пароль. Попробуйте еще раз.'
	    },
	    // Phone auth
	    gramlink_auth_phone_title: {
	      en: 'Enter phone number in international format',
	      uk: 'Введіть номер у міжнародному форматі',
	      ru: 'Введите номер в международном формате'
	    },
	    gramlink_auth_send_code: {
	      en: 'Send code',
	      uk: 'Надіслати код',
	      ru: 'Отправить код'
	    },
	    gramlink_auth_confirm: {
	      en: 'Confirm',
	      uk: 'Підтвердити',
	      ru: 'Подтвердить'
	    },
	    gramlink_auth_code_invalid: {
	      en: 'Invalid code. Try again.',
	      uk: 'Невірний код. Спробуйте ще раз.',
	      ru: 'Неверный код. Попробуйте снова.'
	    },
	    gramlink_auth_resend: {
	      en: 'Resend code',
	      uk: 'Надіслати ще раз',
	      ru: 'Отправить еще раз'
	    },
	    // Backup
	    gramlink_backup_export: {
	      en: 'Export',
	      uk: 'Експорт',
	      ru: 'Экспорт'
	    },
	    gramlink_backup_import: {
	      en: 'Import',
	      uk: 'Імпорт',
	      ru: 'Импорт'
	    },
	    gramlink_backup_uploading: {
	      en: 'Uploading backup...',
	      uk: 'Завантаження бекапу...',
	      ru: 'Загрузка бекапа...'
	    },
	    gramlink_backup_exported: {
	      en: 'Backup exported!',
	      uk: 'Бекап експортовано!',
	      ru: 'Бекап экспортирован!'
	    },
	    gramlink_backup_failed: {
	      en: 'Backup operation failed',
	      uk: 'Операція бекапу не вдалася',
	      ru: 'Операция бекапа не удалась'
	    },
	    gramlink_backup_fetching: {
	      en: 'Fetching latest backup...',
	      uk: 'Отримання останнього бекапу...',
	      ru: 'Получение последнего бекапа...'
	    },
	    gramlink_backup_no_files: {
	      en: 'No backup files found',
	      uk: 'Файлів бекапу не знайдено',
	      ru: 'Файлов бекапа не найдено'
	    },
	    gramlink_backup_invalid: {
	      en: 'Invalid backup file',
	      uk: 'Неправильний файл бекапу',
	      ru: 'Неправильный файл бекапа'
	    },
	    gramlink_backup_restore_title: {
	      en: 'Restore backup?',
	      uk: 'Відновити бекап?',
	      ru: 'Восстановить бекап?'
	    },
	    gramlink_backup_restore_confirm: {
	      en: 'This will overwrite {count} stored settings. Reload required after restore. Continue?',
	      uk: 'Буде перезаписано {count} налаштувань. Для застосування потрібне перезавантаження. Продовжити?',
	      ru: 'Будет перезаписано {count} настроек. Для применения требуется перезагрузка. Продолжить?'
	    },
	    gramlink_backup_restore_btn: {
	      en: 'Restore',
	      uk: 'Відновити',
	      ru: 'Восстановить'
	    },
	    gramlink_backup_restored: {
	      en: 'Backup restored! Reload Lampa to apply.',
	      uk: 'Бекап відновлено! Перезавантажте Lampa для застосування.',
	      ru: 'Бекап восстановлен! Перезагрузите Lampa для применения.'
	    },
	    gramlink_backup_topic_not_ready: {
	      en: 'Backup topic not ready',
	      uk: 'Топік бекапу ще не готовий',
	      ru: 'Топик бекапа еще не готов'
	    },
	    gramlink_not_connected: {
	      en: 'Not connected',
	      uk: 'Не підключено',
	      ru: 'Не подключено'
	    },
	    gramlink_cancel: {
	      en: 'Cancel',
	      uk: 'Скасувати',
	      ru: 'Отмена'
	    },
	    gramlink_settings_server_type_official: {
	      en: 'Official',
	      uk: 'Офіційний',
	      ru: 'Официальный'
	    },
	    gramlink_settings_server_type_custom: {
	      en: 'Custom',
	      uk: 'Кастомний',
	      ru: 'Кастомный'
	    },
	    gramlink_settings_server_warning_title: {
	      en: 'Warning',
	      uk: 'Увага',
	      ru: 'Внимание'
	    },
	    gramlink_settings_server_warning_desc: {
	      en: 'Changing the server type will end the current session. You will need to authorize again on the new server. Continue?',
	      uk: 'При зміні типу сервера поточну сесію буде завершено. Вам знадобиться авторизуватися знову на новому сервері. Продовжити?',
	      ru: 'При смене типа сервера текущая сессия будет завершена. Вам потребуется авторизоваться заново на новом сервере. Продолжить?'
	    },
	    gramlink_settings_server_confirm: {
	      en: 'Continue',
	      uk: 'Продовжити',
	      ru: 'Продолжить'
	    },
	    gramlink_settings_server_cancel: {
	      en: 'Cancel',
	      uk: 'Скасувати',
	      ru: 'Отменить'
	    },
	    gramlink_settings_server_custom_host: {
	      en: 'Custom server host',
	      uk: 'Хост кастомного сервера',
	      ru: 'Хост кастомного сервера'
	    },
	    gramlink_settings_server_custom_port: {
	      en: 'Custom server port',
	      uk: 'Порт кастомного сервера',
	      ru: 'Порт кастомного сервера'
	    },
	    gramlink_settings_proxy_title: {
	      en: 'MTProto proxy',
	      uk: 'MTProto проксі',
	      ru: 'MTProto прокси'
	    },
	    gramlink_settings_proxy_desc: {
	      en: 'Proxy for bypassing Telegram blocks (WSS)',
	      uk: 'Проксі для обходу блокувань Telegram (WSS)',
	      ru: 'Прокси для обхода блокировок Telegram (WSS)'
	    },
	    gramlink_settings_proxy_host: {
	      en: 'Proxy host',
	      uk: 'Хост проксі',
	      ru: 'Хост прокси'
	    },
	    gramlink_settings_proxy_port: {
	      en: 'Proxy port',
	      uk: 'Порт проксі',
	      ru: 'Порт прокси'
	    },
	    gramlink_settings_proxy_secret: {
	      en: 'Proxy secret (hex)',
	      uk: 'Секрет проксі (hex)',
	      ru: 'Секрет прокси (hex)'
	    },
	    gramlink_error_proxy_failed: {
	      en: 'Proxy connection failed. Check settings or disable it.',
	      uk: 'Помилка підключення через проксі. Перевірте параметри або спробуйте вимкнути його.',
	      ru: 'Ошибка подключения через прокси. Проверьте параметры или попробуйте выключить его.'
	    },
	    gramlink_error_session_invalid: {
	      en: 'Session invalid. Please log in again.',
	      uk: 'Сесія невалідна. Увійдіть знову.',
	      ru: 'Сессия невалидна. Войдите снова.'
	    },
	    gramlink_backup_pick_title: {
	      en: 'Select backup to restore',
	      uk: 'Виберіть бекап для відновлення',
	      ru: 'Выберите бекап для восстановления'
	    },
	    gramlink_backup_downloading: {
	      en: 'Downloading backup...',
	      uk: 'Завантаження бекапу...',
	      ru: 'Загрузка бекапа...'
	    },
	    // Profiles
	    gramlink_profile_switch: {
	      en: 'Switch profile?',
	      uk: 'Перемкнути профіль?',
	      ru: 'Переключить профиль?'
	    },
	    gramlink_profile_switch_desc: {
	      en: 'Current profile will be auto-saved before switching.',
	      uk: 'Поточний профіль буде автоматично збережено.',
	      ru: 'Текущий профиль будет автоматически сохранен.'
	    },
	    gramlink_profile_created: {
	      en: 'Profile created',
	      uk: 'Профіль створено',
	      ru: 'Профиль создан'
	    },
	    gramlink_profile_activated: {
	      en: 'Profile activated',
	      uk: 'Профіль активовано',
	      ru: 'Профиль активирован'
	    },
	    gramlink_profile_synced: {
	      en: 'Profile synced',
	      uk: 'Профіль синхронізовано',
	      ru: 'Профиль синхронизирован'
	    },
	    gramlink_profile_deleted: {
	      en: 'Profile deleted',
	      uk: 'Профіль видалено',
	      ru: 'Профиль удален'
	    },
	    gramlink_profile_not_found: {
	      en: 'Profile not found',
	      uk: 'Профіль не знайдено',
	      ru: 'Профиль не найден'
	    },
	    gramlink_profile_active: {
	      en: 'active',
	      uk: 'активний',
	      ru: 'активный'
	    },
	    gramlink_switch: {
	      en: 'Switch',
	      uk: 'Перемкнути',
	      ru: 'Переключить'
	    },
	    gramlink_profile_rename: {
	      en: 'Rename profile',
	      uk: 'Перейменувати профіль',
	      ru: 'Переименовать профиль'
	    },
	    gramlink_profile_renamed: {
	      en: 'Profile renamed',
	      uk: 'Профіль перейменовано',
	      ru: 'Профиль переименован'
	    },
	    gramlink_delete_confirm: {
	      en: 'Delete this profile?',
	      uk: 'Видалити цей профіль?',
	      ru: 'Удалить этот профиль?'
	    },
	    // Hub — profile actions
	    gramlink_no_profiles: {
	      en: 'No profiles',
	      uk: 'Профілів немає',
	      ru: 'Профилей нет'
	    },
	    gramlink_create_first: {
	      en: 'Create a profile to start syncing',
	      uk: 'Створіть профіль для початку синхронізації',
	      ru: 'Создайте профиль для начала синхронизации'
	    },
	    gramlink_create_profile: {
	      en: 'Create profile',
	      uk: 'Створити профіль',
	      ru: 'Создать профиль'
	    },
	    gramlink_this_device: {
	      en: 'This device',
	      uk: 'Цей пристрій',
	      ru: 'Это устройство'
	    },
	    gramlink_plugins: {
	      en: 'Plugins',
	      uk: 'Плагіни',
	      ru: 'Плагины'
	    },
	    gramlink_sync: {
	      en: 'Sync',
	      uk: 'Синхронізувати',
	      ru: 'Синхронизировать'
	    },
	    gramlink_delete: {
	      en: 'Delete',
	      uk: 'Видалити',
	      ru: 'Удалить'
	    },
	    gramlink_profiles: {
	      en: 'Profiles',
	      uk: 'Профілі',
	      ru: 'Профили'
	    },
	    gramlink_active: {
	      en: 'Active',
	      uk: 'Активний',
	      ru: 'Активный'
	    },
	    gramlink_switch_profile: {
	      en: 'Switch Profile?',
	      uk: 'Перемкнути профіль?',
	      ru: 'Переключить профиль?'
	    },
	    gramlink_switch_confirm: {
	      en: 'Current profile will be autosaved',
	      uk: 'Поточний профіль буде автозбережено',
	      ru: 'Текущий профиль будет автосохранен'
	    },
	    // Migration
	    gramlink_import_cub: {
	      en: 'Import from Cub',
	      uk: 'Імпорт з Cub',
	      ru: 'Импорт из Cub'
	    },
	    gramlink_import_cub_desc: {
	      en: 'Migrate Cub profiles to GramLink',
	      uk: 'Міграція профілів Cub у GramLink',
	      ru: 'Миграция профилей Cub в GramLink'
	    },
	    gramlink_migration_start: {
	      en: 'Reading Cub profiles...',
	      uk: 'Читання профілів Cub...',
	      ru: 'Чтение профилей Cub...'
	    },
	    gramlink_migration_complete: {
	      en: '{count} profiles imported successfully.',
	      uk: 'Імпортовано {count} профілів успішно.',
	      ru: 'Импортировано {count} профилей успешно.'
	    },
	    // Import analyzer
	    gramlink_import_title: {
	      en: 'Cub Import Summary',
	      uk: 'Підсумок імпорту з Cub',
	      ru: 'Итоги импорта из Cub'
	    },
	    gramlink_import_profiles: {
	      en: 'Profiles found:',
	      uk: 'Знайдено профілів:',
	      ru: 'Найдено профилей:'
	    },
	    gramlink_import_bookmarks: {
	      en: 'Favorites & history items:',
	      uk: 'Елементів обраного та історії:',
	      ru: 'Элементов избранного и истории:'
	    },
	    gramlink_import_plugins: {
	      en: 'Plugins found:',
	      uk: 'Знайдено плагінів:',
	      ru: 'Найдено плагинов:'
	    },
	    gramlink_import_proceed: {
	      en: 'Proceed with migration to GramLink?',
	      uk: 'Продовжити міграцію в GramLink?',
	      ru: 'Продолжить миграцию в GramLink?'
	    },
	    gramlink_import_start: {
	      en: 'Yes, migrate',
	      uk: 'Так, мігрувати',
	      ru: 'Да, мигрировать'
	    },
	    gramlink_migration_no_cub: {
	      en: 'Cub account not found. Log in to Cub in Lampa settings first.',
	      uk: 'Акаунт Cub не знайдено. Увійдіть в Cub в налаштуваннях Lampa.',
	      ru: 'Аккаунт Cub не найден. Войдите в Cub в настройках Lampa.'
	    },
	    gramlink_migration_no_profiles: {
	      en: 'No Cub profiles found',
	      uk: 'Профілів Cub не знайдено',
	      ru: 'Профилей Cub не найдено'
	    },
	    gramlink_reload_now: {
	      en: 'Reload now',
	      uk: 'Перезавантажити',
	      ru: 'Перезагрузить'
	    },
	    // Plugin Manager
	    gramlink_plugins_title: {
	      en: 'Plugins: "{name}"',
	      uk: 'Плагіни: "{name}"',
	      ru: 'Плагины: "{name}"'
	    },
	    gramlink_plugins_add: {
	      en: 'Add plugin',
	      uk: 'Додати плагін',
	      ru: 'Добавить плагин'
	    },
	    gramlink_plugins_add_url: {
	      en: 'Plugin URL',
	      uk: 'URL плагіна',
	      ru: 'URL плагина'
	    },
	    gramlink_plugins_name: {
	      en: 'Plugin name (optional)',
	      uk: 'Назва плагіна (необов\'язково)',
	      ru: 'Название плагина (необязательно)'
	    },
	    gramlink_plugins_empty: {
	      en: 'No plugins in this profile',
	      uk: 'Немає плагінів у цьому профілі',
	      ru: 'Нет плагинов в этом профиле'
	    },
	    gramlink_plugins_already_installed: {
	      en: 'Already installed',
	      uk: 'Вже встановлено',
	      ru: 'Уже установлен'
	    },
	    gramlink_plugins_remove: {
	      en: 'Remove',
	      uk: 'Видалити',
	      ru: 'Удалить'
	    },
	    gramlink_plugins_remove_confirm: {
	      en: 'will be removed from this profile.',
	      uk: 'буде видалено з цього профілю.',
	      ru: 'будет удалён из этого профиля.'
	    },
	    gramlink_plugins_toggle_on: {
	      en: 'Enable',
	      uk: 'Увімкнути',
	      ru: 'Включить'
	    },
	    gramlink_plugins_toggle_off: {
	      en: 'Disable',
	      uk: 'Вимкнути',
	      ru: 'Выключить'
	    },
	    gramlink_plugins_save: {
	      en: 'Save',
	      uk: 'Зберегти',
	      ru: 'Сохранить'
	    },
	    gramlink_plugins_saving: {
	      en: 'Saving profile...',
	      uk: 'Збереження профілю...',
	      ru: 'Сохранение профиля...'
	    },
	    gramlink_plugins_saved: {
	      en: 'Profile updated',
	      uk: 'Профіль оновлено',
	      ru: 'Профиль обновлён'
	    },
	    gramlink_plugins_added: {
	      en: 'Plugin added.',
	      uk: 'Плагін додано.',
	      ru: 'Плагин добавлен.'
	    },
	    gramlink_plugins_removed: {
	      en: 'Plugin removed.',
	      uk: 'Плагін видалено.',
	      ru: 'Плагин удалён.'
	    },
	    gramlink_plugins_toggled: {
	      en: 'Plugin toggled.',
	      uk: 'Плагін перемкнено.',
	      ru: 'Плагин переключён.'
	    },
	    gramlink_plugins_reload_hint: {
	      en: 'Reload required to apply.',
	      uk: 'Для застосування потрібне перезавантаження.',
	      ru: 'Для применения требуется перезагрузка.'
	    },
	    gramlink_plugins_unsaved: {
	      en: 'Unsaved changes',
	      uk: 'Незбережені зміни',
	      ru: 'Несохранённые изменения'
	    },
	    gramlink_plugins_unsaved_desc: {
	      en: 'You have unsaved changes. Save now?',
	      uk: 'У вас є незбережені зміни. Зберегти?',
	      ru: 'У вас есть несохранённые изменения. Сохранить?'
	    },
	    gramlink_plugins_manage: {
	      en: 'Manage plugins',
	      uk: 'Керування плагінами',
	      ru: 'Управление плагинами'
	    },
	    gramlink_loading: {
	      en: 'Loading…',
	      uk: 'Завантаження…',
	      ru: 'Загрузка…'
	    },
	    gramlink_tab_devices: {
	      en: 'Devices',
	      uk: 'Пристрої',
	      ru: 'Устройства'
	    },
	    gramlink_tab_profiles: {
	      en: 'Profiles',
	      uk: 'Профілі',
	      ru: 'Профили'
	    },
	    // Settings — Telegram App type
	    gramlink_settings_app: {
	      en: 'Telegram App',
	      uk: 'Telegram App',
	      ru: 'Telegram App'
	    },
	    gramlink_settings_app_lampa: {
	      en: 'Lampa',
	      uk: 'Lampa',
	      ru: 'Lampa'
	    },
	    gramlink_settings_app_custom: {
	      en: 'Custom',
	      uk: 'Кастомний',
	      ru: 'Кастомный'
	    },
	    gramlink_settings_app_desc: {
	      en: 'Which Telegram App credentials to use. "Lampa" uses the bundled app shared across all Lampa users. "Custom" uses your own credentials from my.telegram.org (more private).',
	      uk: 'Які облікові дані Telegram App використовувати. "Lampa" використовує вбудований додаток, спільний для всіх користувачів Lampa. "Кастомний" використовує ваші власні облікові дані з my.telegram.org (приватніше).',
	      ru: 'Какие учётные данные Telegram App использовать. "Lampa" использует встроенное приложение, общее для всех пользователей Lampa. "Кастомный" использует ваши собственные учётные данные с my.telegram.org (более приватно).'
	    },
	    // Settings — About
	    gramlink_settings_about: {
	      en: 'About GramLink',
	      uk: 'Про GramLink',
	      ru: 'О GramLink'
	    },
	    gramlink_settings_about_desc: {
	      en: 'Plugin version and information',
	      uk: 'Версія та інформація про плагін',
	      ru: 'Версия и информация о плагине'
	    },
	    gramlink_about_version: {
	      en: 'Version',
	      uk: 'Версія',
	      ru: 'Версия'
	    },
	    gramlink_about_author: {
	      en: 'Telegram',
	      uk: 'Telegram',
	      ru: 'Telegram'
	    },
	    gramlink_about_link_author: {
	      en: ' @lme_chat',
	      uk: ' @mmssixxx',
	      ru: ' @lme_chat'
	    },
	    gramlink_about_description: {
	      en: 'GramLink synchronizes your Lampa bookmarks, timecodes, plugins, and profiles across devices via Telegram.',
	      uk: 'GramLink синхронізує ваші закладки, таймкоди, плагіни та профілі між пристроями через Telegram.',
	      ru: 'GramLink синхронизирует ваши закладки, таймкоды, плагины и профили между устройствами через Telegram.'
	    },
	    // Settings — Sync timeout
	    gramlink_settings_timeout: {
	      en: 'Sync timeout',
	      uk: 'Таймаут синхронізації',
	      ru: 'Таймаут синхронизации'
	    },
	    gramlink_settings_timeout_desc: {
	      en: 'Maximum wait time for sync operations (seconds)',
	      uk: 'Максимальний час очікування синхронізації (секунди)',
	      ru: 'Максимальное время ожидания синхронизации (секунды)'
	    },
	    // Settings — Delta poll interval
	    gramlink_settings_poll_interval: {
	      en: 'Delta poll interval',
	      uk: 'Інтервал перевірки дельт',
	      ru: 'Интервал проверки дельт'
	    },
	    gramlink_settings_poll_interval_desc: {
	      en: 'How often to check for remote changes (seconds)',
	      uk: 'Як часто перевіряти віддалені зміни (секунди)',
	      ru: 'Как часто проверять удаленные изменения (секунды)'
	    },
	    // Profile head button
	    gramlink_profile_button: {
	      en: 'Switch profile',
	      uk: 'Перемкнути профіль',
	      ru: 'Переключить профиль'
	    },
	    gramlink_profile_active_label: {
	      en: 'Active',
	      uk: 'Активний',
	      ru: 'Активный'
	    },
	    // Plugins tab
	    gramlink_plugins_tab: {
	      en: 'Plugins',
	      uk: 'Плагіни',
	      ru: 'Плагины'
	    },
	    gramlink_no_plugins: {
	      en: 'No plugins installed',
	      uk: 'Немає встановлених плагінів',
	      ru: 'Нет установленных плагинов'
	    },
	    gramlink_plugins_edit_name: {
	      en: 'Edit name',
	      uk: 'Редагувати назву',
	      ru: 'Редактировать название'
	    },
	    gramlink_plugins_edit_url: {
	      en: 'Edit URL',
	      uk: 'Редагувати URL',
	      ru: 'Редактировать URL'
	    },
	    gramlink_plugins_manage_hint: {
	      en: 'Add plugins via URL to extend Lampa functionality',
	      uk: 'Додавайте плагіни через URL для розширення функціоналу Lampa',
	      ru: 'Добавляйте плагины через URL для расширения функционала Lampa'
	    },
	    // Device overlays
	    gramlink_device_reset: {
	      en: 'Reset device settings',
	      uk: 'Скинути налаштування пристрою',
	      ru: 'Сбросить настройки устройства'
	    },
	    gramlink_device_rename: {
	      en: 'Rename device',
	      uk: 'Перейменувати пристрій',
	      ru: 'Переименовать устройство'
	    },
	    gramlink_device_overlay_reset: {
	      en: 'Device overlays reset. Sync profile to apply.',
	      uk: 'Налаштування пристрою скинуто. Синхронізуйте профіль.',
	      ru: 'Настройки устройства сброшены. Синхронизируйте профиль.'
	    },
	    // Compat checker
	    gramlink_compat_title: {
	      en: 'Telegram Library Support',
	      uk: 'Підтримка бібліотеки Telegram',
	      ru: 'Поддержка библиотеки Telegram'
	    },
	    gramlink_compat_ok: {
	      en: 'Fully supported',
	      uk: 'Повністю підтримується',
	      ru: 'Полностью поддерживается'
	    },
	    gramlink_compat_partial: {
	      en: 'Partial — may run slower',
	      uk: 'Частково — може працювати повільніше',
	      ru: 'Частично — может работать медленнее'
	    },
	    gramlink_compat_fail: {
	      en: 'Not supported on this device',
	      uk: 'Не підтримується на цьому пристрої',
	      ru: 'Не поддерживается на этом устройстве'
	    },
	    gramlink_compat_blocked_label: {
	      en: 'Blocking issues',
	      uk: 'Блокуючі проблеми',
	      ru: 'Блокирующие проблемы'
	    },
	    gramlink_compat_warning_label: {
	      en: 'Warnings',
	      uk: 'Попередження',
	      ru: 'Предупреждения'
	    },
	    gramlink_compat_no_blockers: {
	      en: 'No blocking issues detected. Library can be loaded.',
	      uk: 'Блокуючих проблем не виявлено. Бібліотеку можна завантажити.',
	      ru: 'Блокирующих проблем не обнаружено. Библиотеку можно загрузить.'
	    },
	    gramlink_compat_hint_disclaimer: {
	      en: 'This check verifies only the runtime environment required by telegram.min.js. It does not test your network or Telegram API credentials.',
	      uk: 'Ця перевірка лише тестує середовище виконання, потрібне для telegram.min.js. Вона не перевіряє мережу чи Telegram API-креденшали.',
	      ru: 'Эта проверка только тестирует среду выполнения, необходимую для telegram.min.js. Она не проверяет сеть или Telegram API-креденшалы.'
	    },
	    gramlink_settings_avatar_style: {
	      en: 'Avatar style',
	      uk: 'Стиль аватара',
	      ru: 'Стиль аватара'
	    },
	    gramlink_settings_avatar_style_desc: {
	      en: 'Choose DiceBear avatar style for profiles',
	      uk: 'Виберіть стиль аватара DiceBear для профілів',
	      ru: 'Выберите стиль аватара DiceBear для профилей'
	    },
	    gramlink_avatar_none: {
	      en: 'Initials (default)',
	      uk: 'Ініціали (за замовчуванням)',
	      ru: 'Инициалы (по умолчанию)'
	    }
	  });
	}

	var es_array_slice = {};

	var isArray$2;
	var hasRequiredIsArray;

	function requireIsArray () {
		if (hasRequiredIsArray) return isArray$2;
		hasRequiredIsArray = 1;

		var classof = require$$1$5;

		// `IsArray` abstract operation
		// https://tc39.es/ecma262/#sec-isarray
		// eslint-disable-next-line es/no-array-isarray -- safe
		isArray$2 = Array.isArray || function isArray(argument) {
		  return classof(argument) === 'Array';
		};
		return isArray$2;
	}

	var uncurryThis$e = require('../internals/function-uncurry-this');
	var fails$h = require('../internals/fails');
	var isCallable$5 = require('../internals/is-callable');
	var classof$6 = require('../internals/classof');
	var getBuiltIn$2 = require('../internals/get-built-in');
	var inspectSource$1 = require('../internals/inspect-source');
	var noop = function noop() {/* empty */};
	var construct = getBuiltIn$2('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = uncurryThis$e(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$5(argument)) return false;
	  try {
	    construct(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$5(argument)) return false;
	  switch (classof$6(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction':
	      return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};
	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	module.exports = !construct || fails$h(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
	    called = true;
	  }) || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

	var toAbsoluteIndex$1;
	var hasRequiredToAbsoluteIndex;

	function requireToAbsoluteIndex () {
		if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex$1;
		hasRequiredToAbsoluteIndex = 1;

		var toIntegerOrInfinity = requireToIntegerOrInfinity();
		var max = Math.max;
		var min = Math.min;

		// Helper for a popular repeating case of the spec:
		// Let integer be ? ToInteger(index).
		// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
		toAbsoluteIndex$1 = function (index, length) {
		  var integer = toIntegerOrInfinity(index);
		  return integer < 0 ? max(integer + length, 0) : min(integer, length);
		};
		return toAbsoluteIndex$1;
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

	var lengthOfArrayLike$5;
	var hasRequiredLengthOfArrayLike;

	function requireLengthOfArrayLike () {
		if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike$5;
		hasRequiredLengthOfArrayLike = 1;

		var toLength = requireToLength();

		// `LengthOfArrayLike` abstract operation
		// https://tc39.es/ecma262/#sec-lengthofarraylike
		lengthOfArrayLike$5 = function (obj) {
		  return toLength(obj.length);
		};
		return lengthOfArrayLike$5;
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

	var DESCRIPTORS$4 = require('../internals/descriptors');
	var isArray$1 = require('../internals/is-array');
	var $TypeError$1 = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$4 && !function () {
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
	  if (isArray$1(O) && !getOwnPropertyDescriptor$1(O, 'length').writable) {
	    throw new $TypeError$1('Cannot set read only .length');
	  }
	  return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var arraySetLength = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

	var call$8 = require('../internals/function-call');
	var uncurryThis$d = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$4 = require('../internals/an-object');
	var isObject$a = require('../internals/is-object');
	var toLength = require('../internals/to-length');
	var toString$2 = require('../internals/to-string');
	var requireObjectCoercible$1 = require('../internals/require-object-coercible');
	var getMethod$1 = require('../internals/get-method');
	var advanceStringIndex = require('../internals/advance-string-index');
	var getRegExpFlags = require('../internals/regexp-get-flags');
	var regExpExec$1 = require('../internals/regexp-exec-abstract');
	var stringIndexOf = uncurryThis$d(''.indexOf);

	// @@match logic
	fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	  // `String.prototype.match` method
	  // https://tc39.es/ecma262/#sec-string.prototype.match
	  function match(regexp) {
	    var O = requireObjectCoercible$1(this);
	    var matcher = isObject$a(regexp) ? getMethod$1(regexp, MATCH) : undefined;
	    return matcher ? call$8(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
	  },
	  // `RegExp.prototype[@@match]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	  function (string) {
	    var rx = anObject$4(this);
	    var S = toString$2(string);
	    var res = maybeCallNative(nativeMatch, rx, S);
	    if (res.done) return res.value;
	    var flags = toString$2(getRegExpFlags(rx));
	    if (!~stringIndexOf(flags, 'g')) return regExpExec$1(rx, S);
	    var fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
	    rx.lastIndex = 0;
	    var A = [];
	    var n = 0;
	    var result;
	    while ((result = regExpExec$1(rx, S)) !== null) {
	      var matchStr = toString$2(result[0]);
	      A[n] = matchStr;
	      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      n++;
	    }
	    return n === 0 ? null : A;
	  }];
	});

	var globalThis$d = require('../internals/global-this');
	var userAgent$4 = require('../internals/environment-user-agent');
	var process = globalThis$d.process;
	var Deno$1 = globalThis$d.Deno;
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

	var require$$3 = /*@__PURE__*/getAugmentedNamespace(environmentV8Version);

	var arrayMethodHasSpeciesSupport$2;
	var hasRequiredArrayMethodHasSpeciesSupport;

	function requireArrayMethodHasSpeciesSupport () {
		if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport$2;
		hasRequiredArrayMethodHasSpeciesSupport = 1;

		var fails = requireFails();
		var wellKnownSymbol = requireWellKnownSymbol();
		var V8_VERSION = require$$3;
		var SPECIES = wellKnownSymbol('species');
		arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
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
		return arrayMethodHasSpeciesSupport$2;
	}

	var uncurryThis$c = require('../internals/function-uncurry-this');
	module.exports = uncurryThis$c([].slice);

	var arraySlice$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$4$2 = /*@__PURE__*/getAugmentedNamespace(arraySlice$2);

	var hasRequiredEs_array_slice;

	function requireEs_array_slice () {
		if (hasRequiredEs_array_slice) return es_array_slice;
		hasRequiredEs_array_slice = 1;

		var $ = require$$0$9;
		var isArray = requireIsArray();
		var isConstructor = require$$1$3;
		var isObject = require$$2$3;
		var toAbsoluteIndex = requireToAbsoluteIndex();
		var lengthOfArrayLike = requireLengthOfArrayLike();
		var toIndexedObject = requireToIndexedObject();
		var createProperty = requireCreateProperty();
		var setArrayLength = require$$5$1;
		var wellKnownSymbol = requireWellKnownSymbol();
		var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
		var nativeSlice = require$$4$2;
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

	var $$n = require('../internals/export');
	var $filter$1 = require('../internals/array-iteration').filter;
	var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$n({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1
	}, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$m = require('../internals/export');
	var uncurryThis$b = require('../internals/function-uncurry-this-clause');
	var $indexOf$1 = require('../internals/array-includes').indexOf;
	var arrayMethodIsStrict$3 = require('../internals/array-method-is-strict');
	var nativeIndexOf = uncurryThis$b([].indexOf);
	var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$5 = NEGATIVE_ZERO$1 || !arrayMethodIsStrict$3('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$m({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$5
	}, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO$1
	    // convert -0 to +0
	    ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf$1(this, searchElement, fromIndex);
	  }
	});

	var $$l = require('../internals/export');
	var $map$1 = require('../internals/array-iteration').map;
	var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$l({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$k = require('../internals/export');
	var uncurryThis$a = require('../internals/function-uncurry-this');
	var aCallable$4 = require('../internals/a-callable');
	var toObject$2 = require('../internals/to-object');
	var lengthOfArrayLike$4 = require('../internals/length-of-array-like');
	var deletePropertyOrThrow$2 = require('../internals/delete-property-or-throw');
	var toString$1 = require('../internals/to-string');
	var fails$g = require('../internals/fails');
	var internalSort$1 = require('../internals/array-sort');
	var arrayMethodIsStrict$2 = require('../internals/array-method-is-strict');
	var FF$1 = require('../internals/environment-ff-version');
	var IE_OR_EDGE$1 = require('../internals/environment-is-ie-or-edge');
	var V8$1 = require('../internals/environment-v8-version');
	var WEBKIT$1 = require('../internals/environment-webkit-version');
	var test = [];
	var nativeSort$1 = uncurryThis$a(test.sort);
	var push$2 = uncurryThis$a(test.push);

	// IE8-
	var FAILS_ON_UNDEFINED = fails$g(function () {
	  test.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails$g(function () {
	  test.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD$1 = arrayMethodIsStrict$2('sort');
	var STABLE_SORT$1 = !fails$g(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8$1) return V8$1 < 70;
	  if (FF$1 && FF$1 > 3) return;
	  if (IE_OR_EDGE$1) return true;
	  if (WEBKIT$1) return WEBKIT$1 < 603;
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
	var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT$1;
	var getSortCompare$1 = function getSortCompare(comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    var xString = toString$1(x);
	    var yString = toString$1(y);
	    return xString === yString ? 0 : xString > yString ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	$$k({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$4
	}, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable$4(comparefn);
	    var array = toObject$2(this);
	    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);
	    var items = [];
	    var arrayLength = lengthOfArrayLike$4(array);
	    var itemsLength, index;
	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) push$2(items, array[index]);
	    }
	    internalSort$1(items, getSortCompare$1(comparefn));
	    itemsLength = lengthOfArrayLike$4(items);
	    index = 0;
	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) deletePropertyOrThrow$2(array, index++);
	    return array;
	  }
	});

	var es_promise = {};

	var es_promise_constructor = {};

	var globalThis$c = require('../internals/global-this');
	var userAgent$3 = require('../internals/environment-user-agent');
	var classof$5 = require('../internals/classof-raw');
	var userAgentStartsWith = function userAgentStartsWith(string) {
	  return userAgent$3.slice(0, string.length) === string;
	};
	module.exports = function () {
	  if (userAgentStartsWith('Bun/')) return 'BUN';
	  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
	  if (userAgentStartsWith('Deno/')) return 'DENO';
	  if (userAgentStartsWith('Node.js/')) return 'NODE';
	  if (globalThis$c.Bun && typeof Bun.version == 'string') return 'BUN';
	  if (globalThis$c.Deno && _typeof(Deno.version) == 'object') return 'DENO';
	  if (classof$5(globalThis$c.process) === 'process') return 'NODE';
	  if (globalThis$c.window && globalThis$c.document) return 'BROWSER';
	  return 'REST';
	}();

	var environment = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(environment);

	var environmentIsNode;
	var hasRequiredEnvironmentIsNode;

	function requireEnvironmentIsNode () {
		if (hasRequiredEnvironmentIsNode) return environmentIsNode;
		hasRequiredEnvironmentIsNode = 1;

		var ENVIRONMENT = require$$0$4;
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

	var uncurryThis$9 = require('../internals/function-uncurry-this');
	var aCallable$3 = require('../internals/a-callable');
	module.exports = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$9(aCallable$3(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) {/* empty */}
	};

	var functionUncurryThisAccessor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(functionUncurryThisAccessor);

	var isPossiblePrototype;
	var hasRequiredIsPossiblePrototype;

	function requireIsPossiblePrototype () {
		if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
		hasRequiredIsPossiblePrototype = 1;

		var isObject = require$$2$3;
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
		var uncurryThisAccessor = require$$0$3;
		var isObject = require$$2$3;
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

	var setToStringTag$3;
	var hasRequiredSetToStringTag;

	function requireSetToStringTag () {
		if (hasRequiredSetToStringTag) return setToStringTag$3;
		hasRequiredSetToStringTag = 1;

		var defineProperty = require$$1$4.f;
		var hasOwn = requireHasOwnProperty();
		var wellKnownSymbol = requireWellKnownSymbol();
		var TO_STRING_TAG = wellKnownSymbol('toStringTag');
		setToStringTag$3 = function (target, TAG, STATIC) {
		  if (target && !STATIC) target = target.prototype;
		  if (target && !hasOwn(target, TO_STRING_TAG)) {
		    defineProperty(target, TO_STRING_TAG, {
		      configurable: true,
		      value: TAG
		    });
		  }
		};
		return setToStringTag$3;
	}

	var defineBuiltInAccessor$3;
	var hasRequiredDefineBuiltInAccessor;

	function requireDefineBuiltInAccessor () {
		if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor$3;
		hasRequiredDefineBuiltInAccessor = 1;

		var makeBuiltIn = require$$0$5;
		var defineProperty = require$$1$4;
		defineBuiltInAccessor$3 = function (target, name, descriptor) {
		  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
		    getter: true
		  });
		  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
		    setter: true
		  });
		  return defineProperty.f(target, name, descriptor);
		};
		return defineBuiltInAccessor$3;
	}

	var setSpecies$1;
	var hasRequiredSetSpecies;

	function requireSetSpecies () {
		if (hasRequiredSetSpecies) return setSpecies$1;
		hasRequiredSetSpecies = 1;

		var getBuiltIn = requireGetBuiltIn();
		var defineBuiltInAccessor = requireDefineBuiltInAccessor();
		var wellKnownSymbol = requireWellKnownSymbol();
		var DESCRIPTORS = requireDescriptors();
		var SPECIES = wellKnownSymbol('species');
		setSpecies$1 = function (CONSTRUCTOR_NAME) {
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
		return setSpecies$1;
	}

	var aCallable$2;
	var hasRequiredACallable;

	function requireACallable () {
		if (hasRequiredACallable) return aCallable$2;
		hasRequiredACallable = 1;

		var isCallable = require$$3$3;
		var tryToString = requireTryToString();
		var $TypeError = TypeError;

		// `Assert: IsCallable(argument) is true`
		aCallable$2 = function (argument) {
		  if (isCallable(argument)) return argument;
		  throw new $TypeError(tryToString(argument) + ' is not a function');
		};
		return aCallable$2;
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

	var anInstance$4;
	var hasRequiredAnInstance;

	function requireAnInstance () {
		if (hasRequiredAnInstance) return anInstance$4;
		hasRequiredAnInstance = 1;

		var isPrototypeOf = requireObjectIsPrototypeOf();
		var $TypeError = TypeError;
		anInstance$4 = function (it, Prototype) {
		  if (isPrototypeOf(Prototype, it)) return it;
		  throw new $TypeError('Incorrect invocation');
		};
		return anInstance$4;
	}

	var aConstructor;
	var hasRequiredAConstructor;

	function requireAConstructor () {
		if (hasRequiredAConstructor) return aConstructor;
		hasRequiredAConstructor = 1;

		var isConstructor = require$$1$3;
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

	var $$j = require('../internals/export');
	var functionApply$1 = require('../internals/function-apply');
	var aCallable$1 = require('../internals/a-callable');
	var anObject$3 = require('../internals/an-object');
	var fails$f = require('../internals/fails');

	// MS Edge argumentsList argument is optional
	var OPTIONAL_ARGUMENTS_LIST = !fails$f(function () {
	  // eslint-disable-next-line es/no-reflect -- required for testing
	  Reflect.apply(function () {/* empty */});
	});

	// `Reflect.apply` method
	// https://tc39.es/ecma262/#sec-reflect.apply
	$$j({
	  target: 'Reflect',
	  stat: true,
	  forced: OPTIONAL_ARGUMENTS_LIST
	}, {
	  apply: function apply(target, thisArgument, argumentsList) {
	    return functionApply$1(aCallable$1(target), thisArgument, anObject$3(argumentsList));
	  }
	});

	var NATIVE_BIND = require('../internals/function-bind-native');
	var FunctionPrototype = Function.prototype;
	var apply$1 = FunctionPrototype.apply;
	var call$7 = FunctionPrototype.call;

	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
	module.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call$7.bind(apply$1) : function () {
	  return call$7.apply(apply$1, arguments);
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

		var classofRaw = require$$1$5;
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

	var validateArgumentsLength$2;
	var hasRequiredValidateArgumentsLength;

	function requireValidateArgumentsLength () {
		if (hasRequiredValidateArgumentsLength) return validateArgumentsLength$2;
		hasRequiredValidateArgumentsLength = 1;

		var $TypeError = TypeError;
		validateArgumentsLength$2 = function (passed, required) {
		  if (passed < required) throw new $TypeError('Not enough arguments');
		  return passed;
		};
		return validateArgumentsLength$2;
	}

	var userAgent$2 = require('../internals/environment-user-agent');
	module.exports = /ipad|iphone|ipod/i.test(userAgent$2) && /applewebkit/i.test(userAgent$2);

	var environmentIsIos = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$5 = /*@__PURE__*/getAugmentedNamespace(environmentIsIos);

	var task;
	var hasRequiredTask;

	function requireTask () {
		if (hasRequiredTask) return task;
		hasRequiredTask = 1;

		var globalThis = require$$0$8;
		var apply = require$$1$2;
		var bind = requireFunctionBindContext();
		var isCallable = require$$3$3;
		var hasOwn = requireHasOwnProperty();
		var fails = requireFails();
		var html = requireHtml();
		var arraySlice = require$$4$2;
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

	var globalThis$b = require('../internals/global-this');
	var DESCRIPTORS$3 = require('../internals/descriptors');

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Avoid NodeJS experimental warning
	module.exports = function (name) {
	  if (!DESCRIPTORS$3) return globalThis$b[name];
	  var descriptor = getOwnPropertyDescriptor(globalThis$b, name);
	  return descriptor && descriptor.value;
	};

	var safeGetBuiltIn$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(safeGetBuiltIn$1);

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

	var require$$6$1 = /*@__PURE__*/getAugmentedNamespace(environmentIsIosPebble);

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

		var globalThis = require$$0$8;
		var safeGetBuiltIn = require$$1$1;
		var bind = requireFunctionBindContext();
		var macrotask = requireTask().set;
		var Queue = requireQueue();
		var IS_IOS = require$$5;
		var IS_IOS_PEBBLE = require$$6$1;
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

		var globalThis = require$$0$8;
		promiseNativeConstructor = globalThis.Promise;
		return promiseNativeConstructor;
	}

	var $$i = require('../internals/export');
	var IS_PURE$1 = require('../internals/is-pure');
	var NativePromiseConstructor$1 = require('../internals/promise-native-constructor');
	var fails$e = require('../internals/fails');
	var getBuiltIn$1 = require('../internals/get-built-in');
	var isCallable$4 = require('../internals/is-callable');
	var speciesConstructor = require('../internals/species-constructor');
	var promiseResolve$1 = require('../internals/promise-resolve');
	var defineBuiltIn$3 = require('../internals/define-built-in');
	var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!NativePromiseConstructor$1 && fails$e(function () {
	  // eslint-disable-next-line unicorn/no-thenable -- required for testing
	  NativePromisePrototype$1['finally'].call({
	    then: function then() {/* empty */}
	  }, function () {/* empty */});
	});

	// `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally
	$$i({
	  target: 'Promise',
	  proto: true,
	  real: true,
	  forced: NON_GENERIC
	}, {
	  'finally': function _finally(onFinally) {
	    var C = speciesConstructor(this, getBuiltIn$1('Promise'));
	    var isFunction = isCallable$4(onFinally);
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
	if (!IS_PURE$1 && isCallable$4(NativePromiseConstructor$1)) {
	  var method = getBuiltIn$1('Promise').prototype['finally'];
	  if (NativePromisePrototype$1['finally'] !== method) {
	    defineBuiltIn$3(NativePromisePrototype$1, 'finally', method, {
	      unsafe: true
	    });
	  }
	}

	var globalThis$a = require('../internals/global-this');
	var NativePromiseConstructor = require('../internals/promise-native-constructor');
	var isCallable$3 = require('../internals/is-callable');
	var isForced$1 = require('../internals/is-forced');
	var inspectSource = require('../internals/inspect-source');
	var wellKnownSymbol$3 = require('../internals/well-known-symbol');
	var ENVIRONMENT = require('../internals/environment');
	var IS_PURE = require('../internals/is-pure');
	var V8_VERSION = require('../internals/environment-v8-version');
	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
	var SPECIES = wellKnownSymbol$3('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT = isCallable$3(globalThis$a.PromiseRejectionEvent);
	var FORCED_PROMISE_CONSTRUCTOR = isForced$1('Promise', function () {
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

	var require$$4$1 = /*@__PURE__*/getAugmentedNamespace(promiseConstructorDetection);

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

		var $ = require$$0$9;
		var IS_PURE = requireIsPure();
		var IS_NODE = requireEnvironmentIsNode();
		var globalThis = require$$0$8;
		var path = requirePath();
		var call = requireFunctionCall();
		var defineBuiltIn = requireDefineBuiltIn();
		var setPrototypeOf = requireObjectSetPrototypeOf();
		var setToStringTag = requireSetToStringTag();
		var setSpecies = requireSetSpecies();
		var aCallable = requireACallable();
		var isCallable = require$$3$3;
		var isObject = require$$2$3;
		var anInstance = requireAnInstance();
		var speciesConstructor = requireSpeciesConstructor();
		var task = requireTask().set;
		var microtask = requireMicrotask();
		var hostReportErrors = requireHostReportErrors();
		var perform = requirePerform();
		var Queue = requireQueue();
		var InternalStateModule = requireInternalState();
		var NativePromiseConstructor = requirePromiseNativeConstructor();
		var PromiseConstructorDetection = require$$4$1;
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

	var bind$2 = require('../internals/function-bind-context');
	var call$6 = require('../internals/function-call');
	var anObject$2 = require('../internals/an-object');
	var tryToString = require('../internals/try-to-string');
	var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
	var lengthOfArrayLike$3 = require('../internals/length-of-array-like');
	var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
	var getIterator$1 = require('../internals/get-iterator');
	var getIteratorMethod$1 = require('../internals/get-iterator-method');
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
	  var fn = bind$2(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;
	  var stop = function stop(condition) {
	    var $iterator = iterator;
	    iterator = undefined;
	    if ($iterator) iteratorClose($iterator, 'normal');
	    return new Result(true, condition);
	  };
	  var callFn = function callFn(value) {
	    if (AS_ENTRIES) {
	      anObject$2(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    }
	    return INTERRUPTED ? fn(value, stop) : fn(value);
	  };
	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$1(iterable);
	    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$3(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
	      }
	      return new Result(false);
	    }
	    iterator = getIterator$1(iterable, iterFn);
	  }
	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$6(next, iterator)).done) {
	    // `IteratorValue` errors should propagate without closing the iterator
	    var value = step.value;
	    try {
	      result = callFn(value);
	    } catch (error) {
	      if (iterator) iteratorClose(iterator, 'throw', error);else throw error;
	    }
	    if (_typeof(result) == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
	  }
	  return new Result(false);
	};

	var iterate$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$6 = /*@__PURE__*/getAugmentedNamespace(iterate$1);

	var $$h = require('../internals/export');
	var from = require('../internals/array-from');
	var checkCorrectnessOfIteration$2 = require('../internals/check-correctness-of-iteration');
	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$2(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$h({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  from: from
	});

	var wellKnownSymbol$2 = require('../internals/well-known-symbol');
	var ITERATOR$2 = wellKnownSymbol$2('iterator');
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
	  iteratorWithReturn[ITERATOR$2] = function () {
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
	    object[ITERATOR$2] = function () {
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

	var checkCorrectnessOfIteration$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(checkCorrectnessOfIteration$1);

	var promiseStaticsIncorrectIteration;
	var hasRequiredPromiseStaticsIncorrectIteration;

	function requirePromiseStaticsIncorrectIteration () {
		if (hasRequiredPromiseStaticsIncorrectIteration) return promiseStaticsIncorrectIteration;
		hasRequiredPromiseStaticsIncorrectIteration = 1;

		var NativePromiseConstructor = requirePromiseNativeConstructor();
		var checkCorrectnessOfIteration = require$$1;
		var FORCED_PROMISE_CONSTRUCTOR = require$$4$1.CONSTRUCTOR;
		promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
		  NativePromiseConstructor.all(iterable).then(undefined, function () {/* empty */});
		});
		return promiseStaticsIncorrectIteration;
	}

	var hasRequiredEs_promise_all;

	function requireEs_promise_all () {
		if (hasRequiredEs_promise_all) return es_promise_all;
		hasRequiredEs_promise_all = 1;

		var $ = require$$0$9;
		var call = requireFunctionCall();
		var aCallable = requireACallable();
		var newPromiseCapabilityModule = requireNewPromiseCapability();
		var perform = requirePerform();
		var iterate = require$$6;
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

		var $ = require$$0$9;
		var IS_PURE = requireIsPure();
		var FORCED_PROMISE_CONSTRUCTOR = require$$4$1.CONSTRUCTOR;
		var NativePromiseConstructor = requirePromiseNativeConstructor();
		var getBuiltIn = requireGetBuiltIn();
		var isCallable = require$$3$3;
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

		var $ = require$$0$9;
		var call = requireFunctionCall();
		var aCallable = requireACallable();
		var newPromiseCapabilityModule = requireNewPromiseCapability();
		var perform = requirePerform();
		var iterate = require$$6;
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

		var $ = require$$0$9;
		var newPromiseCapabilityModule = requireNewPromiseCapability();
		var FORCED_PROMISE_CONSTRUCTOR = require$$4$1.CONSTRUCTOR;

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
		var isObject = require$$2$3;
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

		var $ = require$$0$9;
		var getBuiltIn = requireGetBuiltIn();
		var IS_PURE = requireIsPure();
		var NativePromiseConstructor = requirePromiseNativeConstructor();
		var FORCED_PROMISE_CONSTRUCTOR = require$$4$1.CONSTRUCTOR;
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

	var $$g = require('../internals/export');
	var $trim = require('../internals/string-trim').trim;
	var forcedStringTrimMethod = require('../internals/string-trim-forced');

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$g({
	  target: 'String',
	  proto: true,
	  forced: forcedStringTrimMethod('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	/**
	 * sdk/keys.js — Single source of storage keys and helpers for Lampa.Storage
	 *
	 * Eliminates:
	 *   D-01 — getChannelId() now one function, NaN-safe
	 *   D-02 — all STORAGE_* constants in one place
	 *   D-10 — parseInt(Lampa.Storage.get(...), 10) replaced by getInt()
	 *
	 * Usage:
	 *   import { STORAGE_KEYS, getChannelId, getInt } from '../sdk/keys'
	 */

	var STORAGE_KEYS = {
	  // Session / auth
	  DC_ID: 'gramlink_dc_id',
	  AUTH_KEY: 'gramlink_auth_key_hex',
	  DEVICE_ID: 'gramlink_device_id',
	  USER_NAME: 'gramlink_user_name',
	  // Sync channel
	  CHANNEL_ID: 'gramlink_channel_id',
	  SYNC_LOG_TOPIC: 'gramlink_sync_log_topic',
	  PROFILES_TOPIC: 'gramlink_profiles_topic',
	  PROFILES_SYNC: 'gramlink_profiles_sync_topic',
	  BACKUP_TOPIC: 'gramlink_backup_topic',
	  REMOTE_CMD_TOPIC: 'gramlink_remote_cmd_topic',
	  // Active profile
	  ACTIVE_PROFILE: 'gramlink_active_profile',
	  ACTIVE_PROFILE_TS: 'gramlink_active_profile_ts',
	  ACTIVE_PROFILE_NAME: 'gramlink_active_profile_name',
	  PROFILES_CACHE: 'gramlink_profiles_cache',
	  PLUGIN_REGISTRY: 'gramlink_plugin_registry',
	  LAST_DELTA_SEEN: 'gramlink_last_delta_seen',
	  PROFILE_PLUGIN_URLS: 'gramlink_profile_plugin_urls',
	  // Settings
	  AVATAR_STYLE: 'gramlink_avatar_style',
	  HEARTBEAT: 'gramlink_heartbeat',
	  BROADCAST: 'gramlink_broadcast',
	  SYNC_ENABLED: 'gramlink_sync_enabled',
	  POLL_INTERVAL: 'gramlink_poll_interval',
	  // Proxy
	  PROXY_ENABLED: 'gramlink_proxy_enabled',
	  PROXY_HOST: 'gramlink_proxy_host',
	  PROXY_PORT: 'gramlink_proxy_port',
	  PROXY_SECRET: 'gramlink_proxy_secret',
	  // Server
	  SERVER_TYPE: 'gramlink_server_type',
	  CUSTOM_HOST: 'gramlink_custom_host',
	  CUSTOM_PORT: 'gramlink_custom_port',
	  APP_TYPE: 'gramlink_app_type',
	  API_ID: 'gramlink_api_id',
	  API_HASH: 'gramlink_api_hash'
	};

	/**
	 * Safe channelId read from storage.
	 * Returns number or null (never NaN).
	 * Fixes auth.js:106 bug where parseInt('', 10) → NaN.
	 */
	function getChannelId() {
	  var v = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
	  var n = parseInt(v, 10);
	  // NOTE: Telegram channel peer IDs are NEGATIVE (e.g. -1001234567890).
	  // Guard against NaN/Infinity but allow negative values.
	  return Number.isFinite(n) && n !== 0 ? n : null;
	}

	/**
	 * Safe integer read from storage.
	 * Returns number; if storage is empty or NaN → returns def.
	 */
	function getInt(key, def) {
	  if (def === undefined) def = 0;
	  var v = parseInt(Lampa.Storage.get(key, String(def)), 10);
	  return Number.isFinite(v) ? v : def;
	}

	// Note (A-16): getDeviceId generates tv_xxx_timestamp as session token,
	// not a stable fingerprint. On localStorage.clear() — it changes.
	// For a stable fingerprint, hash user-agent + screen resolution.

	var STORAGE_DEVICE_ID = STORAGE_KEYS.DEVICE_ID;
	function getDeviceId() {
	  var id = Lampa.Storage.get(STORAGE_DEVICE_ID, '');
	  if (!id) {
	    id = 'tv_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
	    Lampa.Storage.set(STORAGE_DEVICE_ID, id);
	  }
	  return id;
	}
	var DEVICE_TYPES = {
	  'Amazon Fire TV': {
	    check: function check(ua) {
	      return ua.match(/Fire TV|Amazon/i);
	    },
	    name: 'Amazon Fire TV'
	  },
	  'NVIDIA Shield TV': {
	    check: function check(ua) {
	      return ua.match(/SHIELD|NVIDIA/i);
	    },
	    name: 'NVIDIA Shield TV'
	  },
	  'Roku': {
	    check: function check(ua) {
	      return ua.match(/Roku/i) && !ua.match(/TCL/i);
	    },
	    name: 'Roku'
	  },
	  'Xiaomi Mi Box': {
	    check: function check(ua) {
	      return ua.match(/MiBox|Xiaomi/i);
	    },
	    name: 'Xiaomi Mi Box'
	  },
	  'Apple TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Apple/) && ua.match(/iPad/) && !Lampa.Platform.screen('mobile');
	    },
	    name: 'Apple TV'
	  },
	  'LG WebOS TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/WebOS|LG/i);
	    },
	    name: 'LG WebOS TV'
	  },
	  'Samsung Tizen TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Samsung|Tizen/i);
	    },
	    name: 'Samsung Tizen TV'
	  },
	  'Sony Bravia TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Sony|Bravia/i);
	    },
	    name: 'Sony Bravia TV'
	  },
	  'TCL Roku TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Roku|TCL/i);
	    },
	    name: 'TCL Roku TV'
	  },
	  'Hisense VIDAA TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/VIDAA|Hisense/i);
	    },
	    name: 'Hisense VIDAA TV'
	  },
	  'Haier Smart TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Haier/i);
	    },
	    name: 'Haier Smart TV'
	  },
	  'Yandex Smart TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/YNDX|Yandex|YandexTV/i);
	    },
	    name: 'Yandex Smart TV'
	  },
	  'Android Device': {
	    check: function check(ua) {
	      return ua.match(/Android/) && !Lampa.Platform.screen('tv');
	    },
	    name: 'Android Device'
	  },
	  'Smart TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Smart-TV|Smart TV|TV/i);
	    },
	    name: 'Smart TV'
	  },
	  'Android TV': {
	    check: function check(ua) {
	      return Lampa.Platform.screen('tv') && ua.match(/Android/) && !ua.match(/MiBox|SHIELD|Yandex/i);
	    },
	    name: 'Android TV'
	  },
	  'iPhone': {
	    check: function check(ua) {
	      return ua.match(/iPhone/);
	    },
	    name: 'iPhone'
	  },
	  'iPad': {
	    check: function check(ua) {
	      return ua.match(/iPad|Macintosh/) && Lampa.Platform.screen('mobile');
	    },
	    name: 'iPad'
	  },
	  'Mac Device': {
	    check: function check(ua) {
	      return ua.match(/Macintosh|iPad/) && !Lampa.Platform.screen('mobile');
	    },
	    name: 'Mac Device'
	  },
	  'Windows PC': {
	    check: function check(ua) {
	      return ua.match(/Windows/);
	    },
	    name: 'Windows PC'
	  }
	};
	function getDeviceName() {
	  var ua = navigator.userAgent || '';
	  var name = 'Unknown Device';
	  for (var k in DEVICE_TYPES) {
	    if (DEVICE_TYPES[k].check(ua)) {
	      name = DEVICE_TYPES[k].name;
	      break;
	    }
	  }
	  var m = ua.match(/\((.*?)\)/);
	  var details = m ? m[1] : '';
	  return details ? name + ' - (' + details + ')' : name;
	}

	/**
	 * Returns API credentials for Telegram.
	 * If gramlink_app_type === 'custom' — reads from storage.
	 * Otherwise — default Lampa credentials.
	 */
	function getApiCredentials() {
	  var apiId = 24911245;
	  var apiHash = 'af35604124d731e01a113639b905e10e';
	  var appType = Lampa.Storage.get(STORAGE_KEYS.APP_TYPE, 'lampa');
	  if (appType === 'custom') {
	    apiId = parseInt(Lampa.Storage.get(STORAGE_KEYS.API_ID, ''), 10);
	    apiHash = Lampa.Storage.get(STORAGE_KEYS.API_HASH, '');
	  }
	  return {
	    apiId: apiId,
	    apiHash: apiHash
	  };
	}

	var es_typedArray_uint8Array = {};

	var $$f = require('../internals/export');
	var globalThis$9 = require('../internals/global-this');
	var call$5 = require('../internals/function-call');
	var DESCRIPTORS$2 = require('../internals/descriptors');
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
	var ArrayBufferViewCore$e = require('../internals/array-buffer-view-core');
	var ArrayBufferModule = require('../internals/array-buffer');
	var anInstance$3 = require('../internals/an-instance');
	var createPropertyDescriptor$1 = require('../internals/create-property-descriptor');
	var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
	var isIntegralNumber = require('../internals/is-integral-number');
	var toIndex = require('../internals/to-index');
	var toOffset$1 = require('../internals/to-offset');
	var toUint8Clamped = require('../internals/to-uint8-clamped');
	var toPropertyKey = require('../internals/to-property-key');
	var hasOwn$4 = require('../internals/has-own-property');
	var classof$4 = require('../internals/classof');
	var isObject$9 = require('../internals/is-object');
	var isSymbol = require('../internals/is-symbol');
	var create$1 = require('../internals/object-create');
	var isPrototypeOf = require('../internals/object-is-prototype-of');
	var setPrototypeOf = require('../internals/object-set-prototype-of');
	var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
	var typedArrayFrom = require('../internals/typed-array-from');
	var forEach = require('../internals/array-iteration').forEach;
	var setSpecies = require('../internals/set-species');
	var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor');
	var definePropertyModule = require('../internals/object-define-property');
	var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
	var arrayFromConstructorAndList = require('../internals/array-from-constructor-and-list');
	var InternalStateModule$2 = require('../internals/internal-state');
	var inheritIfRequired$1 = require('../internals/inherit-if-required');
	var getInternalState = InternalStateModule$2.get;
	var setInternalState$2 = InternalStateModule$2.set;
	var enforceInternalState$1 = InternalStateModule$2.enforce;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var RangeError$1 = globalThis$9.RangeError;
	var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
	var ArrayBufferPrototype = ArrayBuffer$1.prototype;
	var DataView$1 = ArrayBufferModule.DataView;
	var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$e.NATIVE_ARRAY_BUFFER_VIEWS;
	var TYPED_ARRAY_TAG = ArrayBufferViewCore$e.TYPED_ARRAY_TAG;
	var TypedArray = ArrayBufferViewCore$e.TypedArray;
	var TypedArrayPrototype$1 = ArrayBufferViewCore$e.TypedArrayPrototype;
	var isTypedArray = ArrayBufferViewCore$e.isTypedArray;
	var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	var WRONG_LENGTH = 'Wrong length';
	var addGetter = function addGetter(it, key) {
	  defineBuiltInAccessor$2(it, key, {
	    configurable: true,
	    get: function get() {
	      return getInternalState(this)[key];
	    }
	  });
	};
	var isArrayBuffer = function isArrayBuffer(it) {
	  var klass;
	  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$4(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
	};
	var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
	  return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
	};
	var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
	  key = toPropertyKey(key);
	  return isTypedArrayIndex(target, key) ? createPropertyDescriptor$1(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
	};
	var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
	  key = toPropertyKey(key);
	  if (isTypedArrayIndex(target, key) && isObject$9(descriptor) && hasOwn$4(descriptor, 'value') && !hasOwn$4(descriptor, 'get') && !hasOwn$4(descriptor, 'set')
	  // TODO: add validation descriptor w/o calling accessors
	  && !descriptor.configurable && (!hasOwn$4(descriptor, 'writable') || descriptor.writable) && (!hasOwn$4(descriptor, 'enumerable') || descriptor.enumerable)) {
	    target[key] = descriptor.value;
	    return target;
	  }
	  return nativeDefineProperty(target, key, descriptor);
	};
	if (DESCRIPTORS$2) {
	  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
	    definePropertyModule.f = wrappedDefineProperty;
	    addGetter(TypedArrayPrototype$1, 'buffer');
	    addGetter(TypedArrayPrototype$1, 'byteOffset');
	    addGetter(TypedArrayPrototype$1, 'byteLength');
	    addGetter(TypedArrayPrototype$1, 'length');
	  }
	  $$f({
	    target: 'Object',
	    stat: true,
	    forced: !NATIVE_ARRAY_BUFFER_VIEWS
	  }, {
	    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
	    defineProperty: wrappedDefineProperty
	  });
	  module.exports = function (TYPE, wrapper, CLAMPED) {
	    var BYTES = TYPE.match(/\d+/)[0] / 8;
	    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + TYPE;
	    var SETTER = 'set' + TYPE;
	    var NativeTypedArrayConstructor = globalThis$9[CONSTRUCTOR_NAME];
	    var TypedArrayConstructor = NativeTypedArrayConstructor;
	    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
	    var exported = {};
	    var getter = function getter(that, index) {
	      var data = getInternalState(that);
	      return data.view[GETTER](index * BYTES + data.byteOffset, true);
	    };
	    var setter = function setter(that, index, value) {
	      var data = getInternalState(that);
	      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
	    };
	    var addElement = function addElement(that, index) {
	      nativeDefineProperty(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
	        anInstance$3(that, TypedArrayConstructorPrototype);
	        var index = 0;
	        var byteOffset = 0;
	        var buffer, byteLength, length;
	        if (!isObject$9(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new ArrayBuffer$1(byteLength);
	        } else if (isArrayBuffer(data)) {
	          buffer = data;
	          byteOffset = toOffset$1(offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw new RangeError$1(WRONG_LENGTH);
	            byteLength = $len - byteOffset;
	            if (byteLength < 0) throw new RangeError$1(WRONG_LENGTH);
	          } else {
	            byteLength = toIndex($length) * BYTES;
	            if (byteLength + byteOffset > $len) throw new RangeError$1(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (isTypedArray(data)) {
	          return arrayFromConstructorAndList(TypedArrayConstructor, data);
	        } else {
	          return call$5(typedArrayFrom, TypedArrayConstructor, data);
	        }
	        setInternalState$2(that, {
	          buffer: buffer,
	          byteOffset: byteOffset,
	          byteLength: byteLength,
	          length: length,
	          view: new DataView$1(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$1(TypedArrayPrototype$1);
	    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
	      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
	        anInstance$3(dummy, TypedArrayConstructorPrototype);
	        return inheritIfRequired$1(function () {
	          if (!isObject$9(data)) return new NativeTypedArrayConstructor(toIndex(data));
	          if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
	          if (isTypedArray(data)) return arrayFromConstructorAndList(TypedArrayConstructor, data);
	          return call$5(typedArrayFrom, TypedArrayConstructor, data);
	        }(), dummy, TypedArrayConstructor);
	      });
	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
	        if (!(key in TypedArrayConstructor)) {
	          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
	        }
	      });
	      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
	    }
	    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
	      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
	    }
	    enforceInternalState$1(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;
	    if (TYPED_ARRAY_TAG) {
	      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
	    }
	    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;
	    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
	    $$f({
	      global: true,
	      constructor: true,
	      forced: FORCED,
	      sham: !NATIVE_ARRAY_BUFFER_VIEWS
	    }, exported);
	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
	      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
	    }
	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
	      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
	    }
	    setSpecies(CONSTRUCTOR_NAME);
	  };
	} else module.exports = function () {/* empty */};

	var typedArrayConstructor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(typedArrayConstructor);

	var hasRequiredEs_typedArray_uint8Array;

	function requireEs_typedArray_uint8Array () {
		if (hasRequiredEs_typedArray_uint8Array) return es_typedArray_uint8Array;
		hasRequiredEs_typedArray_uint8Array = 1;

		var createTypedArrayConstructor = require$$0$2;

		// `Uint8Array` constructor
		// https://tc39.es/ecma262/#sec-typedarray-objects
		createTypedArrayConstructor('Uint8', function (init) {
		  return function Uint8Array(data, byteOffset, length) {
		    return init(this, data, byteOffset, length);
		  };
		});
		return es_typedArray_uint8Array;
	}

	requireEs_typedArray_uint8Array();

	var es_typedArray_copyWithin = {};

	module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

	var arrayBufferBasicDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(arrayBufferBasicDetection);

	var es_object_getPrototypeOf = {};

	var fails$d = require('../internals/fails');
	module.exports = !fails$d(function () {
	  function F() {/* empty */}
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var correctPrototypeGetter = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$4 = /*@__PURE__*/getAugmentedNamespace(correctPrototypeGetter);

	var hasRequiredEs_object_getPrototypeOf;

	function requireEs_object_getPrototypeOf () {
		if (hasRequiredEs_object_getPrototypeOf) return es_object_getPrototypeOf;
		hasRequiredEs_object_getPrototypeOf = 1;

		var $ = require$$0$9;
		var fails = requireFails();
		var toObject = requireToObject();
		var nativeGetPrototypeOf = require$$12;
		var CORRECT_PROTOTYPE_GETTER = require$$4;
		var FAILS_ON_PRIMITIVES = fails(function () {
		  nativeGetPrototypeOf(1);
		});

		// `Object.getPrototypeOf` method
		// https://tc39.es/ecma262/#sec-object.getprototypeof
		$({
		  target: 'Object',
		  stat: true,
		  forced: FAILS_ON_PRIMITIVES,
		  sham: !CORRECT_PROTOTYPE_GETTER
		}, {
		  getPrototypeOf: function getPrototypeOf(it) {
		    return nativeGetPrototypeOf(toObject(it));
		  }
		});
		return es_object_getPrototypeOf;
	}

	requireEs_object_getPrototypeOf();

	var hasOwn$3 = require('../internals/has-own-property');
	var isCallable$2 = require('../internals/is-callable');
	var toObject$1 = require('../internals/to-object');
	var sharedKey = require('../internals/shared-key');
	var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object$1 = Object;
	var ObjectPrototype = $Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	module.exports = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
	  var object = toObject$1(O);
	  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$2(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  }
	  return object instanceof $Object$1 ? ObjectPrototype : null;
	};

	var objectGetPrototypeOf = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$12 = /*@__PURE__*/getAugmentedNamespace(objectGetPrototypeOf);

	var arrayBufferViewCore;
	var hasRequiredArrayBufferViewCore;

	function requireArrayBufferViewCore () {
		if (hasRequiredArrayBufferViewCore) return arrayBufferViewCore;
		hasRequiredArrayBufferViewCore = 1;

		var NATIVE_ARRAY_BUFFER = require$$0$1;
		var DESCRIPTORS = requireDescriptors();
		var globalThis = require$$0$8;
		var isCallable = require$$3$3;
		var isObject = require$$2$3;
		var hasOwn = requireHasOwnProperty();
		var classof = requireClassof();
		var tryToString = requireTryToString();
		var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
		var defineBuiltIn = requireDefineBuiltIn();
		var defineBuiltInAccessor = requireDefineBuiltInAccessor();
		var isPrototypeOf = requireObjectIsPrototypeOf();
		var getPrototypeOf = require$$12;
		var setPrototypeOf = requireObjectSetPrototypeOf();
		var wellKnownSymbol = requireWellKnownSymbol();
		var uid = require$$15;
		var InternalStateModule = requireInternalState();
		var enforceInternalState = InternalStateModule.enforce;
		var getInternalState = InternalStateModule.get;
		var Int8Array = globalThis.Int8Array;
		var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
		var Uint8ClampedArray = globalThis.Uint8ClampedArray;
		var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
		var TypedArray = Int8Array && getPrototypeOf(Int8Array);
		var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
		var ObjectPrototype = Object.prototype;
		var TypeError = globalThis.TypeError;
		var TO_STRING_TAG = wellKnownSymbol('toStringTag');
		var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
		var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
		// Fixing native typed arrays in Opera Presto crashes the browser, see #595
		var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis.opera) !== 'Opera';
		var TYPED_ARRAY_TAG_REQUIRED = false;
		var NAME, Constructor, Prototype;
		var TypedArrayConstructorsList = {
		  Int8Array: 1,
		  Uint8Array: 1,
		  Uint8ClampedArray: 1,
		  Int16Array: 2,
		  Uint16Array: 2,
		  Int32Array: 4,
		  Uint32Array: 4,
		  Float32Array: 4,
		  Float64Array: 8
		};
		var BigIntArrayConstructorsList = {
		  BigInt64Array: 8,
		  BigUint64Array: 8
		};
		var isView = function isView(it) {
		  if (!isObject(it)) return false;
		  var klass = classof(it);
		  return klass === 'DataView' || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
		};
		var _getTypedArrayConstructor = function getTypedArrayConstructor(it) {
		  var proto = getPrototypeOf(it);
		  if (!isObject(proto)) return;
		  var state = getInternalState(proto);
		  return state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : _getTypedArrayConstructor(proto);
		};
		var isTypedArray = function isTypedArray(it) {
		  if (!isObject(it)) return false;
		  var klass = classof(it);
		  return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
		};
		var aTypedArray = function aTypedArray(it) {
		  if (isTypedArray(it)) return it;
		  throw new TypeError('Target is not a typed array');
		};
		var aTypedArrayConstructor = function aTypedArrayConstructor(C) {
		  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
		  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
		};
		var exportTypedArrayMethod = function exportTypedArrayMethod(KEY, property, forced, options) {
		  if (!DESCRIPTORS) return;
		  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
		    var TypedArrayConstructor = globalThis[ARRAY];
		    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
		      delete TypedArrayConstructor.prototype[KEY];
		    } catch (error) {
		      // old WebKit bug - some methods are non-configurable
		      try {
		        TypedArrayConstructor.prototype[KEY] = property;
		      } catch (error2) {/* empty */}
		    }
		  }
		  if (!TypedArrayPrototype[KEY] || forced) {
		    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
		  }
		};
		var exportTypedArrayStaticMethod = function exportTypedArrayStaticMethod(KEY, property, forced) {
		  var ARRAY, TypedArrayConstructor;
		  if (!DESCRIPTORS) return;
		  if (setPrototypeOf) {
		    if (forced) for (ARRAY in TypedArrayConstructorsList) {
		      TypedArrayConstructor = globalThis[ARRAY];
		      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
		        delete TypedArrayConstructor[KEY];
		      } catch (error) {/* empty */}
		    }
		    if (!TypedArray[KEY] || forced) {
		      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
		      try {
		        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
		      } catch (error) {/* empty */}
		    } else return;
		  }
		  for (ARRAY in TypedArrayConstructorsList) {
		    TypedArrayConstructor = globalThis[ARRAY];
		    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
		      defineBuiltIn(TypedArrayConstructor, KEY, property);
		    }
		  }
		};
		for (NAME in TypedArrayConstructorsList) {
		  Constructor = globalThis[NAME];
		  Prototype = Constructor && Constructor.prototype;
		  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;else NATIVE_ARRAY_BUFFER_VIEWS = false;
		}
		for (NAME in BigIntArrayConstructorsList) {
		  Constructor = globalThis[NAME];
		  Prototype = Constructor && Constructor.prototype;
		  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
		}

		// WebKit bug - typed arrays constructors prototype is Object.prototype
		if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
		  // eslint-disable-next-line no-shadow -- safe
		  TypedArray = function TypedArray() {
		    throw new TypeError('Incorrect invocation');
		  };
		  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
		    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME], TypedArray);
		  }
		}
		if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
		  TypedArrayPrototype = TypedArray.prototype;
		  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
		    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME].prototype, TypedArrayPrototype);
		  }
		}

		// WebKit bug - one more object in Uint8ClampedArray prototype chain
		if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
		  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
		}
		if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
		  TYPED_ARRAY_TAG_REQUIRED = true;
		  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
		    configurable: true,
		    get: function get() {
		      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
		    }
		  });
		  for (NAME in TypedArrayConstructorsList) if (globalThis[NAME]) {
		    createNonEnumerableProperty(globalThis[NAME].prototype, TYPED_ARRAY_TAG, NAME);
		  }
		}
		arrayBufferViewCore = {
		  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
		  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
		  aTypedArray: aTypedArray,
		  aTypedArrayConstructor: aTypedArrayConstructor,
		  exportTypedArrayMethod: exportTypedArrayMethod,
		  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
		  getTypedArrayConstructor: _getTypedArrayConstructor,
		  isView: isView,
		  isTypedArray: isTypedArray,
		  TypedArray: TypedArray,
		  TypedArrayPrototype: TypedArrayPrototype
		};
		return arrayBufferViewCore;
	}

	var es_array_copyWithin = {};

	var hasRequiredEs_array_copyWithin;

	function requireEs_array_copyWithin () {
		if (hasRequiredEs_array_copyWithin) return es_array_copyWithin;
		hasRequiredEs_array_copyWithin = 1;

		var $ = require$$0$9;
		var copyWithin = require$$2$1;
		var addToUnscopables = requireAddToUnscopables();

		// `Array.prototype.copyWithin` method
		// https://tc39.es/ecma262/#sec-array.prototype.copywithin
		$({
		  target: 'Array',
		  proto: true
		}, {
		  copyWithin: copyWithin
		});

		// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
		addToUnscopables('copyWithin');
		return es_array_copyWithin;
	}

	requireEs_array_copyWithin();

	var toObject = require('../internals/to-object');
	var toAbsoluteIndex = require('../internals/to-absolute-index');
	var lengthOfArrayLike$2 = require('../internals/length-of-array-like');
	var deletePropertyOrThrow$1 = require('../internals/delete-property-or-throw');
	var min$1 = Math.min;

	// `Array.prototype.copyWithin` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.copywithin
	// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = lengthOfArrayLike$2(O);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = min$1((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else deletePropertyOrThrow$1(O, to);
	    to += inc;
	    from += inc;
	  }
	  return O;
	};

	var arrayCopyWithin = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(arrayCopyWithin);

	var hasRequiredEs_typedArray_copyWithin;

	function requireEs_typedArray_copyWithin () {
		if (hasRequiredEs_typedArray_copyWithin) return es_typedArray_copyWithin;
		hasRequiredEs_typedArray_copyWithin = 1;

		var uncurryThis = requireFunctionUncurryThis();
		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var $ArrayCopyWithin = require$$2$1;
		var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

		// `%TypedArray%.prototype.copyWithin` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
		exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
		  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
		});
		return es_typedArray_copyWithin;
	}

	requireEs_typedArray_copyWithin();

	var ArrayBufferViewCore$d = require('../internals/array-buffer-view-core');
	var $every = require('../internals/array-iteration').every;
	var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
	var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod;

	// `%TypedArray%.prototype.every` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
	exportTypedArrayMethod$e('every', function every(callbackfn /* , thisArg */) {
	  return $every(aTypedArray$d(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var es_array_fill = {};

	var arrayFill;
	var hasRequiredArrayFill;

	function requireArrayFill () {
		if (hasRequiredArrayFill) return arrayFill;
		hasRequiredArrayFill = 1;

		var toObject = requireToObject();
		var toAbsoluteIndex = requireToAbsoluteIndex();
		var lengthOfArrayLike = requireLengthOfArrayLike();

		// `Array.prototype.fill` method implementation
		// https://tc39.es/ecma262/#sec-array.prototype.fill
		arrayFill = function fill(value /* , start = 0, end = @length */) {
		  var O = toObject(this);
		  var length = lengthOfArrayLike(O);
		  var argumentsLength = arguments.length;
		  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
		  var end = argumentsLength > 2 ? arguments[2] : undefined;
		  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
		  while (endPos > index) O[index++] = value;
		  return O;
		};
		return arrayFill;
	}

	var hasRequiredEs_array_fill;

	function requireEs_array_fill () {
		if (hasRequiredEs_array_fill) return es_array_fill;
		hasRequiredEs_array_fill = 1;

		var $ = require$$0$9;
		var fill = requireArrayFill();
		var addToUnscopables = requireAddToUnscopables();

		// `Array.prototype.fill` method
		// https://tc39.es/ecma262/#sec-array.prototype.fill
		$({
		  target: 'Array',
		  proto: true
		}, {
		  fill: fill
		});

		// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
		addToUnscopables('fill');
		return es_array_fill;
	}

	requireEs_array_fill();

	var es_typedArray_int8Array = {};

	var hasRequiredEs_typedArray_int8Array;

	function requireEs_typedArray_int8Array () {
		if (hasRequiredEs_typedArray_int8Array) return es_typedArray_int8Array;
		hasRequiredEs_typedArray_int8Array = 1;

		var createTypedArrayConstructor = require$$0$2;

		// `Int8Array` constructor
		// https://tc39.es/ecma262/#sec-typedarray-objects
		createTypedArrayConstructor('Int8', function (init) {
		  return function Int8Array(data, byteOffset, length) {
		    return init(this, data, byteOffset, length);
		  };
		});
		return es_typedArray_int8Array;
	}

	requireEs_typedArray_int8Array();

	var ArrayBufferViewCore$c = require('../internals/array-buffer-view-core');
	var $filter = require('../internals/array-iteration').filter;
	var fromSameTypeAndList$1 = require('../internals/typed-array-from-same-type-and-list');
	var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
	var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;

	// `%TypedArray%.prototype.filter` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
	exportTypedArrayMethod$d('filter', function filter(callbackfn /* , thisArg */) {
	  var list = $filter(aTypedArray$c(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  return fromSameTypeAndList$1(this, list);
	});

	var ArrayBufferViewCore$b = require('../internals/array-buffer-view-core');
	var $find = require('../internals/array-iteration').find;
	var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
	var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;

	// `%TypedArray%.prototype.find` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
	exportTypedArrayMethod$c('find', function find(predicate /* , thisArg */) {
	  return $find(aTypedArray$b(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var $$e = require('../internals/export');
	var $findIndex$1 = require('../internals/array-iteration').findIndex;
	var addToUnscopables$1 = require('../internals/add-to-unscopables');
	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-findindex -- testing
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
	  SKIPS_HOLES = false;
	});

	// `Array.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-array.prototype.findindex
	$$e({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES
	}, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$1(FIND_INDEX);

	var ArrayBufferViewCore$a = require('../internals/array-buffer-view-core');
	var $findIndex = require('../internals/array-iteration').findIndex;
	var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
	var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
	exportTypedArrayMethod$b('findIndex', function findIndex(predicate /* , thisArg */) {
	  return $findIndex(aTypedArray$a(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$9 = require('../internals/array-buffer-view-core');
	var $forEach = require('../internals/array-iteration').forEach;
	var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
	var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod;

	// `%TypedArray%.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
	exportTypedArrayMethod$a('forEach', function forEach(callbackfn /* , thisArg */) {
	  $forEach(aTypedArray$9(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var es_string_includes = {};

	var isRegexp;
	var hasRequiredIsRegexp;

	function requireIsRegexp () {
		if (hasRequiredIsRegexp) return isRegexp;
		hasRequiredIsRegexp = 1;

		var isObject = require$$2$3;
		var classof = require$$1$5;
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

		var $ = require$$0$9;
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

	var $$d = require('../internals/export');
	var $includes$1 = require('../internals/array-includes').includes;
	var fails$c = require('../internals/fails');
	var addToUnscopables = require('../internals/add-to-unscopables');

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$c(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// Safari 26.4- bug
	var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails$c(function () {
	  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
	  return [, 1].includes(undefined, 1);
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$d({
	  target: 'Array',
	  proto: true,
	  forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX
	}, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');

	var ArrayBufferViewCore$8 = require('../internals/array-buffer-view-core');
	var $includes = require('../internals/array-includes').includes;
	var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
	var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;

	// `%TypedArray%.prototype.includes` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
	exportTypedArrayMethod$9('includes', function includes(searchElement /* , fromIndex */) {
	  return $includes(aTypedArray$8(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$7 = require('../internals/array-buffer-view-core');
	var $indexOf = require('../internals/array-includes').indexOf;
	var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
	var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

	// `%TypedArray%.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
	exportTypedArrayMethod$8('indexOf', function indexOf(searchElement /* , fromIndex */) {
	  return $indexOf(aTypedArray$7(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var globalThis$8 = require('../internals/global-this');
	var fails$b = require('../internals/fails');
	var uncurryThis$8 = require('../internals/function-uncurry-this');
	var ArrayBufferViewCore$6 = require('../internals/array-buffer-view-core');
	var ArrayIterators = require('../modules/es.array.iterator');
	var wellKnownSymbol$1 = require('../internals/well-known-symbol');
	var ITERATOR$1 = wellKnownSymbol$1('iterator');
	var Uint8Array$2 = globalThis$8.Uint8Array;
	var arrayValues = uncurryThis$8(ArrayIterators.values);
	var arrayKeys = uncurryThis$8(ArrayIterators.keys);
	var arrayEntries = uncurryThis$8(ArrayIterators.entries);
	var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
	var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;
	var TypedArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype;
	var GENERIC = !fails$b(function () {
	  TypedArrayPrototype[ITERATOR$1].call([1]);
	});
	var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR$1] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';
	var typedArrayValues = function values() {
	  return arrayValues(aTypedArray$6(this));
	};

	// `%TypedArray%.prototype.entries` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
	exportTypedArrayMethod$7('entries', function entries() {
	  return arrayEntries(aTypedArray$6(this));
	}, GENERIC);
	// `%TypedArray%.prototype.keys` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
	exportTypedArrayMethod$7('keys', function keys() {
	  return arrayKeys(aTypedArray$6(this));
	}, GENERIC);
	// `%TypedArray%.prototype.values` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
	exportTypedArrayMethod$7('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
	  name: 'values'
	});
	// `%TypedArray%.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
	exportTypedArrayMethod$7(ITERATOR$1, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
	  name: 'values'
	});

	var es_typedArray_join = {};

	var hasRequiredEs_typedArray_join;

	function requireEs_typedArray_join () {
		if (hasRequiredEs_typedArray_join) return es_typedArray_join;
		hasRequiredEs_typedArray_join = 1;

		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var uncurryThis = requireFunctionUncurryThis();
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
		var $join = uncurryThis([].join);

		// `%TypedArray%.prototype.join` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
		exportTypedArrayMethod('join', function join(separator) {
		  return $join(aTypedArray(this), separator);
		});
		return es_typedArray_join;
	}

	requireEs_typedArray_join();

	var es_typedArray_lastIndexOf = {};

	var $$c = require('../internals/export');
	var lastIndexOf = require('../internals/array-last-index-of');

	// `Array.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
	$$c({
	  target: 'Array',
	  proto: true,
	  forced: lastIndexOf !== [].lastIndexOf
	}, {
	  lastIndexOf: lastIndexOf
	});

	var apply = require('../internals/function-apply');
	var toIndexedObject$1 = require('../internals/to-indexed-object');
	var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
	var lengthOfArrayLike$1 = require('../internals/length-of-array-like');
	var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
	var min = Math.min;
	var $lastIndexOf = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict$1('lastIndexOf');
	var FORCED$3 = NEGATIVE_ZERO || !STRICT_METHOD;

	// `Array.prototype.lastIndexOf` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	module.exports = FORCED$3 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
	  var O = toIndexedObject$1(this);
	  var length = lengthOfArrayLike$1(O);
	  if (length === 0) return -1;
	  var index = length - 1;
	  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
	  if (index < 0) index = length + index;
	  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
	  return -1;
	} : $lastIndexOf;

	var arrayLastIndexOf = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(arrayLastIndexOf);

	var hasRequiredEs_typedArray_lastIndexOf;

	function requireEs_typedArray_lastIndexOf () {
		if (hasRequiredEs_typedArray_lastIndexOf) return es_typedArray_lastIndexOf;
		hasRequiredEs_typedArray_lastIndexOf = 1;

		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var apply = require$$1$2;
		var $lastIndexOf = require$$2;
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

		// `%TypedArray%.prototype.lastIndexOf` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
		exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
		  var length = arguments.length;
		  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
		});
		return es_typedArray_lastIndexOf;
	}

	requireEs_typedArray_lastIndexOf();

	var ArrayBufferViewCore$5 = require('../internals/array-buffer-view-core');
	var $map = require('../internals/array-iteration').map;
	var fromSameTypeAndList = require('../internals/typed-array-from-same-type-and-list');
	var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
	var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;

	// `%TypedArray%.prototype.map` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
	exportTypedArrayMethod$6('map', function map(mapfn /* , thisArg */) {
	  var list = $map(aTypedArray$5(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	  return fromSameTypeAndList(this, list);
	});

	var es_typedArray_reduce = {};

	var arrayReduce;
	var hasRequiredArrayReduce;

	function requireArrayReduce () {
		if (hasRequiredArrayReduce) return arrayReduce;
		hasRequiredArrayReduce = 1;

		var aCallable = requireACallable();
		var toObject = requireToObject();
		var IndexedObject = require$$2$4;
		var lengthOfArrayLike = requireLengthOfArrayLike();
		var $TypeError = TypeError;
		var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

		// `Array.prototype.{ reduce, reduceRight }` methods implementation
		var createMethod = function createMethod(IS_RIGHT) {
		  return function (that, callbackfn, argumentsLength, memo) {
		    var O = toObject(that);
		    var self = IndexedObject(O);
		    var length = lengthOfArrayLike(O);
		    aCallable(callbackfn);
		    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
		    var index = IS_RIGHT ? length - 1 : 0;
		    var i = IS_RIGHT ? -1 : 1;
		    if (argumentsLength < 2) while (true) {
		      if (index in self) {
		        memo = self[index];
		        index += i;
		        break;
		      }
		      index += i;
		      if (IS_RIGHT ? index < 0 : length <= index) {
		        throw new $TypeError(REDUCE_EMPTY);
		      }
		    }
		    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
		      memo = callbackfn(memo, self[index], index, O);
		    }
		    return memo;
		  };
		};
		arrayReduce = {
		  // `Array.prototype.reduce` method
		  // https://tc39.es/ecma262/#sec-array.prototype.reduce
		  left: createMethod(false),
		  // `Array.prototype.reduceRight` method
		  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
		  right: createMethod(true)
		};
		return arrayReduce;
	}

	var hasRequiredEs_typedArray_reduce;

	function requireEs_typedArray_reduce () {
		if (hasRequiredEs_typedArray_reduce) return es_typedArray_reduce;
		hasRequiredEs_typedArray_reduce = 1;

		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var $reduce = requireArrayReduce().left;
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

		// `%TypedArray%.prototype.reduce` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
		exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
		  var length = arguments.length;
		  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
		});
		return es_typedArray_reduce;
	}

	requireEs_typedArray_reduce();

	var es_typedArray_reduceRight = {};

	var hasRequiredEs_typedArray_reduceRight;

	function requireEs_typedArray_reduceRight () {
		if (hasRequiredEs_typedArray_reduceRight) return es_typedArray_reduceRight;
		hasRequiredEs_typedArray_reduceRight = 1;

		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var $reduceRight = requireArrayReduce().right;
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

		// `%TypedArray%.prototype.reduceRight` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
		exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
		  var length = arguments.length;
		  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
		});
		return es_typedArray_reduceRight;
	}

	requireEs_typedArray_reduceRight();

	var es_typedArray_reverse = {};

	var hasRequiredEs_typedArray_reverse;

	function requireEs_typedArray_reverse () {
		if (hasRequiredEs_typedArray_reverse) return es_typedArray_reverse;
		hasRequiredEs_typedArray_reverse = 1;

		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
		var floor = Math.floor;

		// `%TypedArray%.prototype.reverse` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
		exportTypedArrayMethod('reverse', function reverse() {
		  var that = this;
		  var length = aTypedArray(that).length;
		  var middle = floor(length / 2);
		  var index = 0;
		  var value;
		  while (index < middle) {
		    value = that[index];
		    that[index++] = that[--length];
		    that[length] = value;
		  }
		  return that;
		});
		return es_typedArray_reverse;
	}

	requireEs_typedArray_reverse();

	var es_typedArray_uint8ClampedArray = {};

	var hasRequiredEs_typedArray_uint8ClampedArray;

	function requireEs_typedArray_uint8ClampedArray () {
		if (hasRequiredEs_typedArray_uint8ClampedArray) return es_typedArray_uint8ClampedArray;
		hasRequiredEs_typedArray_uint8ClampedArray = 1;

		var createTypedArrayConstructor = require$$0$2;

		// `Uint8ClampedArray` constructor
		// https://tc39.es/ecma262/#sec-typedarray-objects
		createTypedArrayConstructor('Uint8', function (init) {
		  return function Uint8ClampedArray(data, byteOffset, length) {
		    return init(this, data, byteOffset, length);
		  };
		}, true);
		return es_typedArray_uint8ClampedArray;
	}

	requireEs_typedArray_uint8ClampedArray();

	var ArrayBufferViewCore$4 = require('../internals/array-buffer-view-core');
	var $some = require('../internals/array-iteration').some;
	var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
	var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;

	// `%TypedArray%.prototype.some` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
	exportTypedArrayMethod$5('some', function some(callbackfn /* , thisArg */) {
	  return $some(aTypedArray$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var globalThis$7 = require('../internals/global-this');
	var uncurryThis$7 = require('../internals/function-uncurry-this-clause');
	var fails$a = require('../internals/fails');
	var aCallable = require('../internals/a-callable');
	var internalSort = require('../internals/array-sort');
	var ArrayBufferViewCore$3 = require('../internals/array-buffer-view-core');
	var FF = require('../internals/environment-ff-version');
	var IE_OR_EDGE = require('../internals/environment-is-ie-or-edge');
	var V8 = require('../internals/environment-v8-version');
	var WEBKIT = require('../internals/environment-webkit-version');
	var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
	var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;
	var Uint16Array = globalThis$7.Uint16Array;
	var nativeSort = Uint16Array && uncurryThis$7(Uint16Array.prototype.sort);

	// WebKit
	var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$a(function () {
	  nativeSort(new Uint16Array(2), null);
	}) && fails$a(function () {
	  nativeSort(new Uint16Array(2), {});
	}));
	var STABLE_SORT = !!nativeSort && !fails$a(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8) return V8 < 74;
	  if (FF) return FF < 67;
	  if (IE_OR_EDGE) return true;
	  if (WEBKIT) return WEBKIT < 602;
	  var array = new Uint16Array(516);
	  var expected = Array(516);
	  var index, mod;
	  for (index = 0; index < 516; index++) {
	    mod = index % 4;
	    array[index] = 515 - index;
	    expected[index] = index - 2 * mod + 3;
	  }
	  nativeSort(array, function (a, b) {
	    return (a / 4 | 0) - (b / 4 | 0);
	  });
	  for (index = 0; index < 516; index++) {
	    if (array[index] !== expected[index]) return true;
	  }
	});
	var getSortCompare = function getSortCompare(comparefn) {
	  return function (x, y) {
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (y !== y) return x !== x ? 0 : -1;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (x !== x) return 1;
	    if (x === 0 && y === 0) return 1 / x > 0 ? 1 / y > 0 ? 0 : 1 : 1 / y > 0 ? -1 : 0;
	    return x > y ? 1 : x < y ? -1 : 0;
	  };
	};

	// `%TypedArray%.prototype.sort` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
	exportTypedArrayMethod$4('sort', function sort(comparefn) {
	  if (comparefn !== undefined) aCallable(comparefn);
	  if (STABLE_SORT) return nativeSort(this, comparefn);
	  return internalSort(aTypedArray$3(this), getSortCompare(comparefn));
	}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

	var es_typedArray_toLocaleString = {};

	var hasRequiredEs_typedArray_toLocaleString;

	function requireEs_typedArray_toLocaleString () {
		if (hasRequiredEs_typedArray_toLocaleString) return es_typedArray_toLocaleString;
		hasRequiredEs_typedArray_toLocaleString = 1;

		var globalThis = require$$0$8;
		var apply = require$$1$2;
		var ArrayBufferViewCore = requireArrayBufferViewCore();
		var fails = requireFails();
		var arraySlice = require$$4$2;
		var Int8Array = globalThis.Int8Array;
		var aTypedArray = ArrayBufferViewCore.aTypedArray;
		var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
		var $toLocaleString = [].toLocaleString;

		// iOS Safari 6.x fails here
		var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
		  $toLocaleString.call(new Int8Array(1));
		});
		var FORCED = fails(function () {
		  return [1, 2].toLocaleString() !== new Int8Array([1, 2]).toLocaleString();
		}) || !fails(function () {
		  Int8Array.prototype.toLocaleString.call([1, 2]);
		});

		// `%TypedArray%.prototype.toLocaleString` method
		// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
		exportTypedArrayMethod('toLocaleString', function toLocaleString() {
		  return apply($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this), arraySlice(arguments));
		}, FORCED);
		return es_typedArray_toLocaleString;
	}

	requireEs_typedArray_toLocaleString();

	var exportTypedArrayMethod$3 = require('../internals/array-buffer-view-core').exportTypedArrayMethod;
	var fails$9 = require('../internals/fails');
	var globalThis$6 = require('../internals/global-this');
	var uncurryThis$6 = require('../internals/function-uncurry-this');
	var Uint8Array$1 = globalThis$6.Uint8Array;
	var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
	var arrayToString = [].toString;
	var join$2 = uncurryThis$6([].join);
	if (fails$9(function () {
	  arrayToString.call({});
	})) {
	  arrayToString = function toString() {
	    return join$2(this);
	  };
	}
	var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

	// `%TypedArray%.prototype.toString` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
	exportTypedArrayMethod$3('toString', arrayToString, IS_NOT_ARRAY_METHOD);

	var ArrayBufferViewCore$2 = require('../internals/array-buffer-view-core');
	var fails$8 = require('../internals/fails');
	var arraySlice$1 = require('../internals/array-slice');
	var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
	var getTypedArrayConstructor = ArrayBufferViewCore$2.getTypedArrayConstructor;
	var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;
	var FORCED$2 = fails$8(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  new Int8Array(1).slice();
	});

	// `%TypedArray%.prototype.slice` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
	exportTypedArrayMethod$2('slice', function slice(start, end) {
	  var list = arraySlice$1(aTypedArray$2(this), start, end);
	  var C = getTypedArrayConstructor(this);
	  var index = 0;
	  var length = list.length;
	  var result = new C(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	}, FORCED$2);

	var globalThis$5 = require('../internals/global-this');
	var call$4 = require('../internals/function-call');
	var ArrayBufferViewCore$1 = require('../internals/array-buffer-view-core');
	var lengthOfArrayLike = require('../internals/length-of-array-like');
	var toOffset = require('../internals/to-offset');
	var toIndexedObject = require('../internals/to-object');
	var fails$7 = require('../internals/fails');
	var RangeError = globalThis$5.RangeError;
	var Int8Array$1 = globalThis$5.Int8Array;
	var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
	var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
	var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
	var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
	var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$7(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  var array = new Uint8ClampedArray(2);
	  call$4($set, array, {
	    length: 1,
	    0: 3
	  }, 1);
	  return array[1] !== 3;
	});

	// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
	var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$1.NATIVE_ARRAY_BUFFER_VIEWS && fails$7(function () {
	  var array = new Int8Array$1(2);
	  array.set(1);
	  array.set('2', 1);
	  return array[0] !== 0 || array[1] !== 2;
	});

	// `%TypedArray%.prototype.set` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
	exportTypedArrayMethod$1('set', function set(arrayLike /* , offset */) {
	  aTypedArray$1(this);
	  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
	  var src = toIndexedObject(arrayLike);
	  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$4($set, this, src, offset);
	  var length = this.length;
	  var len = lengthOfArrayLike(src);
	  var index = 0;
	  if (len + offset > length) throw new RangeError('Wrong length');
	  while (index < len) this[offset + index] = src[index++];
	}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

	var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
	var $fill = require('../internals/array-fill');
	var toBigInt = require('../internals/to-big-int');
	var classof$3 = require('../internals/classof');
	var call$3 = require('../internals/function-call');
	var uncurryThis$5 = require('../internals/function-uncurry-this');
	var fails$6 = require('../internals/fails');
	var aTypedArray = ArrayBufferViewCore.aTypedArray;
	var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
	var slice = uncurryThis$5(''.slice);

	// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
	var CONVERSION_BUG = fails$6(function () {
	  var count = 0;
	  // eslint-disable-next-line es/no-typed-arrays -- safe
	  new Int8Array(2).fill({
	    valueOf: function valueOf() {
	      return count++;
	    }
	  });
	  return count !== 1;
	});

	// `%TypedArray%.prototype.fill` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
	exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
	  var length = arguments.length;
	  aTypedArray(this);
	  var actualValue = slice(classof$3(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
	  return call$3($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
	}, CONVERSION_BUG);

	/**
	 * crypto-lite.js — Pure-JS cryptographic primitives (zero dependencies)
	 * SHA-256, HMAC-SHA256, PBKDF2-SHA256, AES-128-CTR, randomBytes
	 * For Smart TV / legacy WebView targets.
	 */

	var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
	function rrot(x, n) {
	  return x >>> n | x << 32 - n;
	}
	function sha256(data) {
	  var dataLen = data.length;
	  var bitLenHi = Math.floor(dataLen * 8 / 4294967296);
	  var bitLenLo = dataLen * 8 >>> 0;
	  var numBlocks = Math.ceil((dataLen + 9) / 64);
	  var wordLen = numBlocks << 4;
	  var w = new Array(wordLen);
	  for (var i = 0; i < wordLen; i++) w[i] = 0;
	  for (var i = 0; i < dataLen; i++) {
	    w[i >> 2] |= data[i] << 24 - i % 4 * 8;
	  }
	  w[dataLen >> 2] |= 0x80 << 24 - dataLen % 4 * 8;
	  w[wordLen - 2] = bitLenHi;
	  w[wordLen - 1] = bitLenLo;
	  var H0 = 0x6a09e667,
	    H1 = 0xbb67ae85,
	    H2 = 0x3c6ef372,
	    H3 = 0xa54ff53a;
	  var H4 = 0x510e527f,
	    H5 = 0x9b05688c,
	    H6 = 0x1f83d9ab,
	    H7 = 0x5be0cd19;
	  for (var block = 0; block < numBlocks; block++) {
	    var offset = block << 4;
	    var W = new Array(64);
	    for (var t = 0; t < 16; t++) {
	      W[t] = w[offset + t];
	    }
	    for (var t = 16; t < 64; t++) {
	      var s0 = rrot(W[t - 15], 7) ^ rrot(W[t - 15], 18) ^ W[t - 15] >>> 3;
	      var s1 = rrot(W[t - 2], 17) ^ rrot(W[t - 2], 19) ^ W[t - 2] >>> 10;
	      W[t] = W[t - 16] + s0 + W[t - 7] + s1 | 0;
	    }
	    var a = H0,
	      b = H1,
	      c = H2,
	      d = H3,
	      e = H4,
	      f = H5,
	      g = H6,
	      h = H7;
	    for (var t = 0; t < 64; t++) {
	      var S1 = rrot(e, 6) ^ rrot(e, 11) ^ rrot(e, 25);
	      var ch = e & f ^ ~e & g;
	      var temp1 = h + S1 + ch + K[t] + W[t] | 0;
	      var S0 = rrot(a, 2) ^ rrot(a, 13) ^ rrot(a, 22);
	      var maj = a & b ^ a & c ^ b & c;
	      var temp2 = S0 + maj | 0;
	      h = g;
	      g = f;
	      f = e;
	      e = d + temp1 | 0;
	      d = c;
	      c = b;
	      b = a;
	      a = temp1 + temp2 | 0;
	    }
	    H0 = H0 + a | 0;
	    H1 = H1 + b | 0;
	    H2 = H2 + c | 0;
	    H3 = H3 + d | 0;
	    H4 = H4 + e | 0;
	    H5 = H5 + f | 0;
	    H6 = H6 + g | 0;
	    H7 = H7 + h | 0;
	  }
	  var result = new Uint8Array(32);
	  var hv = [H0, H1, H2, H3, H4, H5, H6, H7];
	  for (var i = 0; i < 8; i++) {
	    result[i * 4] = hv[i] >>> 24 & 0xff;
	    result[i * 4 + 1] = hv[i] >>> 16 & 0xff;
	    result[i * 4 + 2] = hv[i] >>> 8 & 0xff;
	    result[i * 4 + 3] = hv[i] & 0xff;
	  }
	  return result;
	}
	function hmacSha256(key, data) {
	  if (key.length > 64) {
	    key = sha256(key);
	  }
	  if (key.length < 64) {
	    var padded = new Uint8Array(64);
	    padded.set(key);
	    key = padded;
	  }
	  var ipad = new Uint8Array(64);
	  var opad = new Uint8Array(64);
	  for (var i = 0; i < 64; i++) {
	    ipad[i] = key[i] ^ 0x36;
	    opad[i] = key[i] ^ 0x5c;
	  }
	  var inner = new Uint8Array(ipad.length + data.length);
	  inner.set(ipad);
	  inner.set(data, ipad.length);
	  var innerHash = sha256(inner);
	  var outer = new Uint8Array(opad.length + innerHash.length);
	  outer.set(opad);
	  outer.set(innerHash, opad.length);
	  return sha256(outer);
	}
	function pbkdf2Sha256(password, salt, iterations, keyLen) {
	  var hLen = 32;
	  var l = Math.ceil(keyLen / hLen);
	  var dk = new Uint8Array(l * hLen);
	  var buf = new ArrayBuffer(salt.length + 4);
	  var salted = new Uint8Array(buf);
	  for (var i = 1; i <= l; i++) {
	    salted.set(salt);
	    salted[salt.length] = i >>> 24 & 0xff;
	    salted[salt.length + 1] = i >>> 16 & 0xff;
	    salted[salt.length + 2] = i >>> 8 & 0xff;
	    salted[salt.length + 3] = i & 0xff;
	    var u = hmacSha256(password, salted);
	    var t = new Uint8Array(hLen);
	    t.set(u);
	    for (var j = 2; j <= iterations; j++) {
	      u = hmacSha256(password, u);
	      for (var k = 0; k < hLen; k++) {
	        t[k] ^= u[k];
	      }
	    }
	    dk.set(t, (i - 1) * hLen);
	  }
	  return dk.slice(0, keyLen);
	}
	var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
	var RCON = [0, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
	function gmul2(a) {
	  return (a << 1 ^ (a & 0x80 ? 0x1b : 0)) & 0xff;
	}
	function rotWord(word) {
	  return (word << 8 | word >>> 24 & 0xff) >>> 0;
	}
	function subWord(word) {
	  return (S[word >>> 24 & 0xff] << 24 | S[word >>> 16 & 0xff] << 16 | S[word >>> 8 & 0xff] << 8 | S[word & 0xff]) >>> 0;
	}
	function aesKeyExpansion(key) {
	  var w = new Array(44);
	  for (var i = 0; i < 4; i++) {
	    w[i] = (key[i * 4] << 24 | key[i * 4 + 1] << 16 | key[i * 4 + 2] << 8 | key[i * 4 + 3]) >>> 0;
	  }
	  for (var i = 4; i < 44; i++) {
	    var temp = w[i - 1];
	    if (i % 4 === 0) {
	      temp = subWord(rotWord(temp)) ^ RCON[i / 4] << 24;
	    }
	    w[i] = (w[i - 4] ^ temp) >>> 0;
	  }
	  return w;
	}
	function subBytes(state) {
	  for (var i = 0; i < 16; i++) {
	    state[i] = S[state[i]];
	  }
	}
	function shiftRows(state) {
	  var t = new Array(16);
	  for (var i = 0; i < 16; i++) t[i] = state[i];
	  for (var c = 0; c < 4; c++) {
	    state[4 * c] = t[4 * c];
	    state[4 * c + 1] = t[4 * (c + 1 & 3) + 1];
	    state[4 * c + 2] = t[4 * (c + 2 & 3) + 2];
	    state[4 * c + 3] = t[4 * (c + 3 & 3) + 3];
	  }
	}
	function mixColumns(state) {
	  for (var c = 0; c < 4; c++) {
	    var i = 4 * c;
	    var a0 = state[i],
	      a1 = state[i + 1],
	      a2 = state[i + 2],
	      a3 = state[i + 3];
	    state[i] = gmul2(a0) ^ (gmul2(a1) ^ a1) ^ a2 ^ a3;
	    state[i + 1] = a0 ^ gmul2(a1) ^ (gmul2(a2) ^ a2) ^ a3;
	    state[i + 2] = a0 ^ a1 ^ gmul2(a2) ^ (gmul2(a3) ^ a3);
	    state[i + 3] = gmul2(a0) ^ a0 ^ a1 ^ a2 ^ gmul2(a3);
	  }
	}
	function addRoundKey(state, w, round) {
	  var idx = round << 2;
	  for (var c = 0; c < 4; c++) {
	    var kw = w[idx + c];
	    state[4 * c] ^= kw >>> 24 & 0xff;
	    state[4 * c + 1] ^= kw >>> 16 & 0xff;
	    state[4 * c + 2] ^= kw >>> 8 & 0xff;
	    state[4 * c + 3] ^= kw & 0xff;
	  }
	}
	function aesEncryptBlock(w, block) {
	  var state = new Array(16);
	  for (var i = 0; i < 16; i++) state[i] = block[i];
	  addRoundKey(state, w, 0);
	  for (var round = 1; round <= 9; round++) {
	    subBytes(state);
	    shiftRows(state);
	    mixColumns(state);
	    addRoundKey(state, w, round);
	  }
	  subBytes(state);
	  shiftRows(state);
	  addRoundKey(state, w, 10);
	  var result = new Uint8Array(16);
	  for (var i = 0; i < 16; i++) result[i] = state[i];
	  return result;
	}
	function aesCtrCrypt(key, iv, data) {
	  var roundKeys = aesKeyExpansion(key);
	  var output = new Uint8Array(data.length);
	  var counter = new Uint8Array(16);
	  counter.set(iv);
	  var offset = 0;
	  while (offset < data.length) {
	    var keystream = aesEncryptBlock(roundKeys, counter);
	    for (var i = 0; i < 16 && offset + i < data.length; i++) {
	      output[offset + i] = data[offset + i] ^ keystream[i];
	    }
	    offset += 16;
	    for (var j = 15; j >= 0; j--) {
	      counter[j]++;
	      if (counter[j] !== 0) break;
	    }
	  }
	  return output;
	}
	function randomBytes(n) {
	  var bytes = new Uint8Array(n);
	  crypto.getRandomValues(bytes);
	  return bytes;
	}

	var PBKDF2_ITERATIONS = 100000;
	var KEY_LEN = 16;
	var IV_LEN = 16;
	var SALT_LEN = 16;
	var VAULT_VERSION = '1';
	var STORAGE_CT = 'gramlink_vault_ct';
	var STORAGE_IV = 'gramlink_vault_iv';
	var STORAGE_SALT = 'gramlink_vault_salt';
	var STORAGE_VER = 'gramlink_vault_ver';
	var OLD_AUTH_KEY = 'gramlink_auth_key_hex';

	// In-memory cache: derive key once per session, survive reconnect
	var _cache = null;
	function strToUtf8(str) {
	  if (typeof TextEncoder !== 'undefined') {
	    return new TextEncoder().encode(str);
	  }
	  var len = str.length;
	  var bytes = [];
	  for (var i = 0; i < len; i++) {
	    var code = str.charCodeAt(i);
	    if (code < 0x80) {
	      bytes.push(code);
	    } else if (code < 0x800) {
	      bytes.push(0xc0 | code >> 6, 0x80 | code & 0x3f);
	    } else if (code < 0xd800 || code >= 0xe000) {
	      bytes.push(0xe0 | code >> 12, 0x80 | code >> 6 & 0x3f, 0x80 | code & 0x3f);
	    } else {
	      i++;
	      var code2 = str.charCodeAt(i);
	      var cp = (code - 0xd800 << 10) + (code2 - 0xdc00) + 0x10000;
	      bytes.push(0xf0 | cp >> 18, 0x80 | cp >> 12 & 0x3f, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
	    }
	  }
	  return new Uint8Array(bytes);
	}
	function bytesToHex(bytes) {
	  var hex = '';
	  var table = '0123456789abcdef';
	  for (var i = 0; i < bytes.length; i++) {
	    hex += table[bytes[i] >> 4 & 0xf] + table[bytes[i] & 0xf];
	  }
	  return hex;
	}
	function hexToBytes(hex) {
	  var len = hex.length >> 1;
	  var bytes = new Uint8Array(len);
	  for (var i = 0; i < len; i++) {
	    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
	  }
	  return bytes;
	}
	function getDeviceFingerprint() {
	  var sw = typeof screen !== 'undefined' ? screen.width || 0 : 0;
	  var sh = typeof screen !== 'undefined' ? screen.height || 0 : 0;
	  var raw = (navigator.userAgent || '') + '|' + sw + 'x' + sh + '|' + (navigator.language || 'en');
	  return sha256(strToUtf8(raw));
	}

	/**
	 * Lampa Context — stable Lampa properties that don't change
	 * on update. Used as seed instead of hardcoded PLUGIN_SECRET.
	 * Uses Lampa.Utils.hash() — the only hash function from Lampa's libraries.
	 */
	function getLampaContext() {
	  var p = ['gramlink', Lampa.Storage.get('platform', 'unknown'), Lampa.Platform.tv() ? 'tv' : Lampa.Platform.screen('mobile') ? 'mobile' : 'desktop'];
	  return Lampa.Utils.hash(p.join('|'));
	}
	function _deriveKey(saltBytes) {
	  var lampaCtx = strToUtf8(String(getLampaContext()));
	  var fpBytes = getDeviceFingerprint();
	  var password = hmacSha256(lampaCtx, fpBytes);
	  return pbkdf2Sha256(password, saltBytes, PBKDF2_ITERATIONS, KEY_LEN);
	}
	var vault = {
	  seal: function seal(authKeyHex) {
	    try {
	      var authKey = hexToBytes(authKeyHex);
	      var salt = randomBytes(SALT_LEN);
	      var iv = randomBytes(IV_LEN);
	      var key = _deriveKey(salt);
	      var ciphertext = aesCtrCrypt(key, iv, authKey);
	      Lampa.Storage.set(STORAGE_CT, bytesToHex(ciphertext));
	      Lampa.Storage.set(STORAGE_IV, bytesToHex(iv));
	      Lampa.Storage.set(STORAGE_SALT, bytesToHex(salt));
	      Lampa.Storage.set(STORAGE_VER, VAULT_VERSION);
	      Lampa.Storage.set(OLD_AUTH_KEY, '');
	      return true;
	    } catch (err) {
	      console.warn('GramLink', 'Vault seal failed:', err);
	      return false;
	    }
	  },
	  unseal: function unseal() {
	    if (_cache) return _cache;
	    try {
	      var ct = Lampa.Storage.get(STORAGE_CT, '');
	      var iv = Lampa.Storage.get(STORAGE_IV, '');
	      var salt = Lampa.Storage.get(STORAGE_SALT, '');
	      if (!ct || !iv || !salt) return null;
	      var key = _deriveKey(hexToBytes(salt));
	      if (!key || key.length === 0) return null;
	      var plaintext = aesCtrCrypt(key, hexToBytes(iv), hexToBytes(ct));
	      _cache = bytesToHex(plaintext);
	      return _cache;
	    } catch (err) {
	      console.warn('GramLink', 'Vault unseal failed:', err);
	      return null;
	    }
	  },
	  hasSealed: function hasSealed() {
	    return !!(Lampa.Storage.get(STORAGE_CT, '') && Lampa.Storage.get(STORAGE_VER, ''));
	  },
	  clear: function clear() {
	    Lampa.Storage.set(STORAGE_CT, '');
	    Lampa.Storage.set(STORAGE_IV, '');
	    Lampa.Storage.set(STORAGE_SALT, '');
	    Lampa.Storage.set(STORAGE_VER, '');
	  },
	  migrateIfNeeded: function migrateIfNeeded() {
	    if (this.hasSealed()) return false;
	    var oldKey = Lampa.Storage.get(OLD_AUTH_KEY, '');
	    if (!oldKey) return false;
	    console.log('GramLink', 'Migrating plaintext auth key to vault...');
	    if (this.seal(oldKey)) {
	      return true;
	    }
	    return false;
	  }
	};

	var VERSION = '0.1.1';
	var instance = null;
	function GatewayClient() {
	  this._ws = null;
	  this._connected = false;
	  this._connecting = false;
	  this._requestId = 0;
	  this._pending = {};
	  this._listeners = {};
	  this._heartbeatTimer = null;
	  this._heartbeatMsgId = null;
	  this._reconnectTimer = null;
	  this._reconnectAttempts = 0;
	  this._wsUrl = '';
	}
	GatewayClient.getInstance = function () {
	  if (!instance) instance = new GatewayClient();
	  return instance;
	};

	// ── Credentials ────────────────────────────────

	GatewayClient.prototype.saveCredentials = function (dcId, authKeyHex) {
	  Lampa.Storage.set(STORAGE_KEYS.DC_ID, String(dcId));
	  vault.seal(authKeyHex);
	};
	GatewayClient.prototype.hasCredentials = function () {
	  var dc = Lampa.Storage.get(STORAGE_KEYS.DC_ID, '');
	  var key = vault.hasSealed();
	  return !!(dc && key);
	};
	GatewayClient.prototype.clearCredentials = function () {
	  Lampa.Storage.set(STORAGE_KEYS.DC_ID, '');
	  vault.clear();
	};

	// ── WS helpers ────────────────────────────────

	GatewayClient.prototype._sendCommand = function (cmd, params) {
	  var self = this;
	  return new Promise(function (resolve, reject) {
	    if (!self._ws || self._ws.readyState !== 1) {
	      reject(new Error('Not connected'));
	      return;
	    }
	    var id = ++self._requestId;
	    var timer = setTimeout(function () {
	      delete self._pending[id];
	      reject(new Error('Gateway timeout: ' + cmd));
	    }, 30000);
	    self._pending[id] = {
	      resolve: resolve,
	      reject: reject,
	      timer: timer
	    };
	    self._ws.send(JSON.stringify({
	      id: id,
	      cmd: cmd,
	      params: params || {}
	    }));
	  });
	};
	GatewayClient.prototype._sendApi = function (method, params) {
	  var self = this;
	  return self._sendCommand('api', {
	    method: method,
	    params: params || {}
	  }).then(function (resp) {
	    return resp.result;
	  });
	};
	GatewayClient.prototype._processGatewayMessage = function (e) {
	  var msg;
	  try {
	    msg = JSON.parse(e.data);
	  } catch (x) {
	    return;
	  }
	  var pending = msg.id && this._pending[msg.id];
	  if (pending) {
	    clearTimeout(pending.timer);
	    delete this._pending[msg.id];
	    if (msg.ok) pending.resolve(msg);else pending.reject(new Error(msg.error || 'Gateway error'));
	  }
	  if (msg.event === 'disconnected') {
	    this._connected = false;
	    this._emit('connection', {
	      state: 'disconnected'
	    });
	  }
	  if (msg.event === 'message' && msg.data) {
	    this._emit('profile_delta', msg.data);
	  }
	};

	// ── Connection ────────────────────────────────

	GatewayClient.prototype.connect = function () {
	  var self = this;
	  if (self._connecting) {
	    return new Promise(function (resolve, reject) {
	      var check = setInterval(function () {
	        if (self._connected) {
	          clearInterval(check);
	          resolve();
	        }
	        if (!self._connecting) {
	          clearInterval(check);
	          reject(new Error('Connection failed'));
	        }
	      }, 200);
	    });
	  }
	  if (self._connected) return Promise.resolve();
	  if (!self.hasCredentials()) return Promise.reject(new Error('Authorization required'));
	  self._connecting = true;
	  self._emit('connection', {
	    state: 'connecting'
	  });
	  var dcId = parseInt(Lampa.Storage.get(STORAGE_KEYS.DC_ID, ''), 10);
	  var authKeyHex = vault.unseal();
	  if (!dcId || !authKeyHex) {
	    self._connecting = false;
	    return Promise.reject(new Error('No credentials'));
	  }
	  var deviceId = getDeviceId();
	  var apiCreds = getApiCredentials();
	  var gatewayUrl = Lampa.Storage.get('gramlink_gateway_url', 'wss://mtproto-master.fly.dev');
	  self._wsUrl = gatewayUrl + '/ws?clientId=' + encodeURIComponent(deviceId);
	  return new Promise(function (resolve, reject) {
	    var ws = new WebSocket(self._wsUrl);
	    self._ws = ws;
	    ws.onopen = function () {
	      self._sendCommand('connect', {
	        dcId: dcId,
	        authKeyHex: authKeyHex,
	        apiId: apiCreds.apiId,
	        apiHash: apiCreds.apiHash
	      }).then(function (resp) {
	        if (resp.event === 'connected') {
	          self._connected = true;
	          self._connecting = false;
	          self._reconnectAttempts = 0;
	          self._emit('connection', {
	            state: 'connected'
	          });
	          var channelId = Lampa.Storage.get('gramlink_channel_id', '');
	          var syncLogId = Lampa.Storage.get('gramlink_sync_log_topic', '');
	          if (channelId && syncLogId && self.isEnabled('gramlink_heartbeat')) {
	            self.startHeartbeat(channelId, syncLogId);
	          }
	          resolve();
	        } else {
	          self._connecting = false;
	          reject(new Error(resp.error || 'Gateway connect failed'));
	        }
	      }).catch(function (err) {
	        self._connecting = false;
	        reject(err);
	      });
	    };
	    ws.onmessage = function (e) {
	      self._processGatewayMessage(e);
	    };
	    ws.onclose = function () {
	      self._connected = false;
	      self._connecting = false;
	      self._emit('connection', {
	        state: 'disconnected'
	      });
	      self._scheduleReconnect();
	    };
	    ws.onerror = function () {
	      self._connecting = false;
	      reject(new Error('WebSocket connection failed'));
	    };
	  });
	};
	GatewayClient.prototype._scheduleReconnect = function () {
	  var self = this;
	  if (self._reconnectTimer) return;
	  if (!self.hasCredentials()) return;
	  var delay = Math.min(1000 * Math.pow(2, self._reconnectAttempts), 30000);
	  self._reconnectAttempts++;
	  self._reconnectTimer = setTimeout(function () {
	    self._reconnectTimer = null;
	    self.connect().catch(function () {});
	  }, delay);
	};
	GatewayClient.prototype.disconnect = function () {
	  this.stopHeartbeat();
	  if (this._reconnectTimer) {
	    clearTimeout(this._reconnectTimer);
	    this._reconnectTimer = null;
	  }
	  if (this._ws) {
	    try {
	      this._ws.onclose = null;
	      this._ws.close();
	    } catch (e) {}
	    this._ws = null;
	  }
	  this._connected = false;
	  this._connecting = false;
	  this._emit('connection', {
	    state: 'disconnected'
	  });
	};
	GatewayClient.prototype.logout = function () {
	  this.disconnect();
	  this.clearCredentials();
	};
	GatewayClient.prototype.reconnect = function () {
	  var self = this;
	  return Promise.resolve().then(function () {
	    self.disconnect();
	  }).then(function () {
	    return self.connect();
	  });
	};

	// ── Status ────────────────────────────────────

	GatewayClient.prototype.isConnected = function () {
	  return this._connected && this._ws !== null && this._ws.readyState === 1;
	};
	GatewayClient.prototype.isConnecting = function () {
	  return this._connecting;
	};
	GatewayClient.prototype.isEnabled = function (key) {
	  var v = Lampa.Storage.get(key, false);
	  return v === true || v === 'true';
	};

	// ── Messages ──────────────────────────────────

	GatewayClient.prototype.getMessages = function (chatId, threadId, limit) {
	  if (!this._connected) return Promise.resolve([]);
	  var params = {
	    entity: chatId,
	    limit: limit || 50
	  };
	  if (threadId) params.replyTo = parseInt(threadId, 10);
	  return this._sendApi('getMessages', params).then(function (r) {
	    return r || [];
	  }).catch(function () {
	    return [];
	  });
	};
	GatewayClient.prototype.getMessagesSince = function (threadId, sinceTimestamp, limit) {
	  if (!this._connected) return Promise.resolve([]);
	  var chatId = parseInt(Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, ''), 10);
	  if (!chatId) return Promise.resolve([]);
	  return this._sendApi('getMessagesSince', {
	    entity: chatId,
	    sinceTimestamp: sinceTimestamp,
	    limit: limit || 50
	  }).then(function (r) {
	    return r || [];
	  }).catch(function () {
	    return [];
	  });
	};
	GatewayClient.prototype.deleteMessage = function (chatId, messageId) {
	  if (!this._connected) return Promise.resolve(false);
	  return this._sendApi('deleteMessages', {
	    entity: chatId,
	    ids: [messageId],
	    revoke: true
	  }).then(function () {
	    return true;
	  }).catch(function () {
	    return false;
	  });
	};
	GatewayClient.prototype.editMessage = function (chatId, messageId, newText, threadId) {
	  if (!this._connected) return Promise.resolve(false);
	  return this._sendApi('editMessage', {
	    entity: chatId,
	    messageId: messageId,
	    text: newText
	  }).then(function () {
	    return true;
	  }).catch(function () {
	    return false;
	  });
	};

	// ── Publish ────────────────────────────────────

	GatewayClient.prototype.publishRaw = function (threadId, text, silent) {
	  if (!this._connected) return Promise.resolve(false);
	  var chatId = parseInt(Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, ''), 10);
	  if (!chatId) return Promise.resolve(false);
	  return this._sendApi('sendMessage', {
	    entity: chatId,
	    message: text,
	    replyTo: threadId || 0
	  }).then(function (r) {
	    return r && r.id ? r.id : false;
	  }).catch(function () {
	    return false;
	  });
	};
	GatewayClient.prototype.publishDelta = function (profilesSyncTopicId, subtype, profileMsgId, payload) {
	  var msg = JSON.stringify({
	    meta: {
	      type: 'profile_delta',
	      subtype: subtype,
	      profile_msg_id: profileMsgId,
	      device_id: getDeviceId(),
	      timestamp: Math.floor(Date.now() / 1000)
	    },
	    payload: payload || {}
	  });
	  return this.publishRaw(profilesSyncTopicId, msg, true);
	};
	GatewayClient.prototype.publish = function (chatId, threadId, type, payload, targetDeviceId) {
	  if (!this._connected) return Promise.resolve(false);
	  var msg = JSON.stringify({
	    meta: {
	      type: type,
	      device_id: getDeviceId(),
	      target_device_id: targetDeviceId || 'all',
	      timestamp: Math.floor(Date.now() / 1000)
	    },
	    payload: payload || {}
	  });
	  return this.publishRaw(threadId, msg, true);
	};

	// ── Files ───────────────────────────────────────

	GatewayClient.prototype.sendFile = function (chatId, threadId, dataStr, fileName, caption) {
	  if (!this._connected) return Promise.resolve(null);
	  return this._sendApi('sendFile', {
	    entity: chatId,
	    fileName: fileName,
	    caption: caption || '',
	    data: window.btoa(dataStr),
	    replyTo: threadId || 0
	  }).then(function (r) {
	    return r && r.id ? r.id : null;
	  }).catch(function () {
	    return null;
	  });
	};
	GatewayClient.prototype.downloadFile = function (message) {
	  if (!this._connected || !message || !message.id) return Promise.resolve(null);
	  var chatId = parseInt(Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, ''), 10);
	  if (!chatId) return Promise.resolve(null);
	  return this._sendApi('downloadMedia', {
	    entity: chatId,
	    messageId: message.id
	  }).then(function (r) {
	    return r && r.data ? r.data : null;
	  }).catch(function () {
	    return null;
	  });
	};
	GatewayClient.prototype.downloadMessageFile = function (message) {
	  return this.downloadFile(message);
	};
	GatewayClient.prototype.getBackupFiles = function (chatId, threadId, limit) {
	  return this.getMessages(chatId, threadId, limit || 50).then(function (msgs) {
	    if (!msgs || !Array.isArray(msgs)) return [];
	    return msgs.filter(function (m) {
	      return m.text && m.text.indexOf('.json') !== -1;
	    });
	  });
	};

	// ── Channel / Topic ──────────────────────────────

	GatewayClient.prototype.findChannel = function (title) {
	  if (!this._connected) return Promise.resolve(null);
	  return this._sendApi('findChannel', {
	    title: title
	  }).then(function (r) {
	    return r && r.id ? r.id : null;
	  }).catch(function () {
	    return null;
	  });
	};
	GatewayClient.prototype.createChannel = function (title) {
	  if (!this._connected) return Promise.resolve(null);
	  return this._sendApi('createChannel', {
	    title: title,
	    about: 'GramLink: Lampa device sync channel'
	  }).then(function (r) {
	    return r && r.id ? r.id : null;
	  }).catch(function () {
	    return null;
	  });
	};
	GatewayClient.prototype.createTopic = function (channelId, topicTitle) {
	  if (!this._connected) return Promise.resolve(null);
	  return this._sendApi('createTopic', {
	    channelId: channelId,
	    title: topicTitle
	  }).then(function (r) {
	    return r && r.id ? r.id : null;
	  }).catch(function () {
	    return null;
	  });
	};
	GatewayClient.prototype.findTopic = function (channelId, topicTitle) {
	  if (!this._connected) return Promise.resolve(null);
	  return this._sendApi('findTopic', {
	    channelId: channelId,
	    title: topicTitle
	  }).then(function (r) {
	    return r && r.id ? r.id : null;
	  }).catch(function () {
	    return null;
	  });
	};

	// ── Heartbeat ────────────────────────────────────

	GatewayClient.prototype.startHeartbeat = function (chatId, threadId) {
	  this.stopHeartbeat();
	  if (!this._connected || !this.isEnabled('gramlink_heartbeat')) return;
	  var self = this;
	  var myId = getDeviceId();
	  function doBeat() {
	    if (!self._connected || !self.isEnabled('gramlink_heartbeat')) {
	      self.stopHeartbeat();
	      return;
	    }
	    var payload = JSON.stringify({
	      meta: {
	        type: 'heartbeat',
	        device_id: myId,
	        device_name: getDeviceName(),
	        timestamp: Math.floor(Date.now() / 1000),
	        schema_version: 1
	      },
	      payload: {}
	    });
	    if (self._heartbeatMsgId) {
	      self.editMessage(chatId, self._heartbeatMsgId, payload, threadId);
	    } else {
	      self._findHeartbeatMessage(chatId, threadId, myId).then(function (result) {
	        if (result && result.id) {
	          self._heartbeatMsgId = result.id;
	          self.editMessage(chatId, result.id, payload, threadId);
	        } else {
	          self.publishRaw(threadId, payload, true).then(function (msgId) {
	            if (msgId) self._heartbeatMsgId = msgId;
	          });
	        }
	      });
	    }
	  }
	  doBeat();
	  this._heartbeatTimer = setInterval(doBeat, 60000);
	};
	GatewayClient.prototype._findHeartbeatMessage = function (chatId, threadId, myDeviceId) {
	  var self = this;
	  return this.getMessages(chatId, threadId, 50).then(function (messages) {
	    var mine = [];
	    function stripCodeFence(t) {
	      if (!t) return t;
	      return t.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
	    }
	    (messages || []).forEach(function (m) {
	      try {
	        var d = JSON.parse(stripCodeFence(m.text || ''));
	        var meta = d && d.meta;
	        if (!meta || meta.type !== 'heartbeat') return;
	        if (meta.device_id === myDeviceId) mine.push({
	          id: m.id,
	          ts: meta.timestamp || 0
	        });
	      } catch (e) {}
	    });
	    if (mine.length === 0) return null;
	    mine.sort(function (a, b) {
	      return b.ts - a.ts;
	    });
	    if (mine.length > 1) {
	      var ids = mine.slice(1).map(function (m) {
	        return m.id;
	      });
	      self._sendApi('deleteMessages', {
	        entity: chatId,
	        ids: ids,
	        revoke: true
	      }).catch(function () {});
	    }
	    return mine[0];
	  }).catch(function () {
	    return null;
	  });
	};
	GatewayClient.prototype.stopHeartbeat = function () {
	  if (this._heartbeatTimer) {
	    clearInterval(this._heartbeatTimer);
	    this._heartbeatTimer = null;
	  }
	};

	// ── Online devices ──────────────────────────────

	GatewayClient.prototype.getOnlineDevices = function (chatId, threadId) {
	  return this.getMessages(chatId, threadId, 50).then(function (messages) {
	    var now = Math.floor(Date.now() / 1000);
	    var seen = {};
	    function stripCodeFence(t) {
	      if (!t) return t;
	      return t.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
	    }
	    (messages || []).forEach(function (m) {
	      try {
	        var d = JSON.parse(stripCodeFence(m.text || ''));
	        var meta = d && d.meta;
	        if (!meta || meta.type !== 'heartbeat') return;
	        if (now - meta.timestamp < 90) {
	          if (!seen[meta.device_id] || seen[meta.device_id].timestamp < meta.timestamp) {
	            seen[meta.device_id] = meta;
	          }
	        }
	      } catch (e) {}
	    });
	    var result = [];
	    for (var k in seen) result.push(seen[k]);
	    return result;
	  }).catch(function () {
	    return [];
	  });
	};

	// ── Event emitter ──────────────────────────────

	GatewayClient.prototype.on = function (event, cb) {
	  if (!this._listeners[event]) this._listeners[event] = [];
	  this._listeners[event].push(cb);
	};
	GatewayClient.prototype.off = function (event, cb) {
	  if (!this._listeners[event]) return;
	  this._listeners[event] = this._listeners[event].filter(function (f) {
	    return f !== cb;
	  });
	};
	GatewayClient.prototype._emit = function (event, data) {
	  var handlers = this._listeners[event] || [];
	  for (var i = 0; i < handlers.length; i++) {
	    try {
	      handlers[i](data);
	    } catch (e) {
	      console.error('GramLink', 'Listener error:', e);
	    }
	  }
	};

	// ─── Message parsing helpers ──────────────────────────────

	function stripCodeFence$1(text) {
	  if (!text) return text;
	  return text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
	}

	var authWs = null;
	var authCancelFlag = false;
	var authRequestId = 0;
	var authPending = {};
	function authSend(msg) {
	  return new Promise(function (resolve, reject) {
	    if (!authWs || authWs.readyState !== 1) {
	      reject(new Error('WebSocket not connected'));
	      return;
	    }
	    var id = ++authRequestId;
	    msg.id = id;
	    var timer = setTimeout(function () {
	      delete authPending[id];
	      reject(new Error('Auth timeout'));
	    }, 30000);
	    authPending[id] = {
	      resolve: resolve,
	      reject: reject,
	      timer: timer
	    };
	    authWs.send(JSON.stringify(msg));
	  });
	}
	function cancelAuth() {
	  authCancelFlag = true;
	  if (authWs) {
	    try {
	      authWs.onclose = null;
	      authWs.close();
	    } catch (e) {}
	    authWs = null;
	  }
	  for (var k in authPending) {
	    clearTimeout(authPending[k].timer);
	  }
	  authPending = {};
	}
	function startPhoneAuthViaGateway(onConnected) {
	  authCancelFlag = false;
	  var enabledCtrl = Lampa.Controller.enabled().name;
	  var defaultPhonePrefix = '';
	  var uiLang = Lampa.Storage.get('language', '');
	  if (uiLang === 'uk') defaultPhonePrefix = '+380';
	  Lampa.Input.edit({
	    title: Lampa.Lang.translate('gramlink_auth_phone_title') || 'Enter phone number (international format)',
	    value: defaultPhonePrefix,
	    free: true,
	    nosave: true
	  }, function (phone) {
	    if (!phone || !String(phone).trim()) {
	      Lampa.Controller.toggle(enabledCtrl);
	      return;
	    }
	    phone = String(phone).trim();
	    var html = $('<div class="gramlink-auth" style="padding:1em;text-align:center">' + '<div style="margin:1em 0 0.5em;font-size:1.1em;color:rgba(255,255,255,0.6)" id="gs-status"></div>' + '</div>');
	    Lampa.Modal.open({
	      title: 'Telegram Login (Gateway)',
	      html: html,
	      size: 'medium',
	      onBack: function onBack() {
	        cancelAuth();
	        Lampa.Modal.close();
	        Lampa.Controller.toggle(enabledCtrl);
	      }
	    });
	    var statusEl = html.find('#gs-status');
	    statusEl.text('Connecting to Gateway...');
	    var creds = getApiCredentials();
	    var gatewayUrl = Lampa.Storage.get('gramlink_gateway_url', 'wss://mtproto-master.fly.dev');
	    var wsUrl = gatewayUrl + '/ws?clientId=' + encodeURIComponent(getDeviceId());
	    var ws = new WebSocket(wsUrl);
	    authWs = ws;
	    ws.onopen = function () {
	      statusEl.text('Sending code...');
	      doAuthFlow(ws, phone, creds, statusEl, enabledCtrl, onConnected);
	    };
	    ws.onerror = function () {
	      statusEl.text('WebSocket connection failed');
	      Lampa.Noty.show('GramLink: Cannot connect to Gateway');
	    };
	  });
	}
	function doAuthFlow(ws, phone, creds, statusEl, enabledCtrl, onConnected) {
	  authSend({
	    cmd: 'auth_start',
	    phone: phone,
	    apiId: creds.apiId,
	    apiHash: creds.apiHash
	  }).then(function (resp) {
	    if (authCancelFlag) return;
	    if (resp.event === 'auth_code_needed') {
	      return askCode(resp.phoneCodeHash, resp.sentType === 'app' ? 'Check Telegram app' : 'Check SMS', enabledCtrl).then(function (code) {
	        if (authCancelFlag) return;
	        statusEl.text('Signing in...');
	        return authSend({
	          cmd: 'auth_code',
	          phoneCodeHash: resp.phoneCodeHash,
	          code: code
	        });
	      }).then(function (resp2) {
	        if (authCancelFlag || !resp2) return;
	        if (resp2.event === 'auth_success') return finalizeAuth(resp2, enabledCtrl, onConnected);
	        if (resp2.event === 'auth_2fa_needed') return handle2FA(enabledCtrl, onConnected);
	        throw new Error(resp2.error || 'Auth failed');
	      });
	    }
	    throw new Error(resp.error || 'Unexpected response');
	  }).catch(function (err) {
	    if (authCancelFlag) return;
	    statusEl.text('Error: ' + (err.message || 'unknown'));
	    Lampa.Noty.show('GramLink: ' + (err.message || 'Auth failed'));
	  });
	}
	function askCode(phoneCodeHash, methodLabel, enabledCtrl) {
	  return new Promise(function (resolve, reject) {
	    var ui = $('<div style="padding:1em;text-align:center">' + '<div>Code sent</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.4);margin-bottom:0.8em">' + methodLabel + '</div>' + '<div class="modal__button selector" style="margin:0.5em auto;max-width:12em">Enter code</div>' + '</div>');
	    Lampa.Modal.update(ui);
	    ui.find('.selector').on('hover:enter', function () {
	      Lampa.Modal.close();
	      Lampa.Input.edit({
	        title: 'Login code',
	        subtitle: methodLabel,
	        value: '',
	        free: true,
	        nosave: true
	      }, function (val) {
	        if (val && String(val).trim()) {
	          resolve(String(val).trim());
	        } else {
	          cancelAuth();
	          Lampa.Controller.toggle(enabledCtrl);
	          reject(new Error('AUTH_USER_CANCEL'));
	        }
	      });
	    });
	  });
	}
	function handle2FA(enabledCtrl, onConnected, statusEl) {
	  return new Promise(function (resolve, reject) {
	    Lampa.Input.edit({
	      title: '2FA Password',
	      value: '',
	      free: true,
	      nosave: true
	    }, function (val) {
	      if (val && String(val).trim()) {
	        var password = String(val).trim();
	        setTimeout(function () {
	          Lampa.Modal.open({
	            title: 'Telegram Login (Gateway)',
	            html: $('<div class="gramlink-auth" style="padding:1em;text-align:center"><div style="margin:1em 0;font-size:1.1em;color:rgba(255,255,255,0.6)">Verifying password...</div></div>'),
	            size: 'medium',
	            onBack: function onBack() {
	              cancelAuth();
	              Lampa.Modal.close();
	              Lampa.Controller.toggle(enabledCtrl);
	              reject(new Error('AUTH_USER_CANCEL'));
	            }
	          });
	        }, 200);
	        authSend({
	          cmd: 'auth_2fa',
	          password: password
	        }).then(function (resp) {
	          if (resp.event === 'auth_success') resolve(finalizeAuth(resp, enabledCtrl, onConnected));else reject(new Error(resp.error || '2FA failed'));
	        }).catch(function (err) {
	          reject(err);
	        });
	      } else {
	        cancelAuth();
	        Lampa.Controller.toggle(enabledCtrl);
	        reject(new Error('AUTH_USER_CANCEL'));
	      }
	    });
	  });
	}
	function finalizeAuth(resp, enabledCtrl, onConnected) {
	  var dcId = resp.dcId;
	  var authKeyHex = resp.authKeyHex;
	  var userName = resp.userName || 'User';
	  if (!dcId || !authKeyHex) {
	    Lampa.Noty.show('GramLink: Invalid auth response');
	    throw new Error('Missing dcId or authKey');
	  }

	  // Save credentials directly (don't import client to avoid coupling)
	  Lampa.Storage.set('gramlink_dc_id', String(dcId));
	  vault.seal(authKeyHex);
	  Lampa.Storage.set('gramlink_user_name', userName);

	  // Clear stale sync state
	  var staleKeys = ['gramlink_channel_id', 'gramlink_sync_log_topic', 'gramlink_profiles_topic', 'gramlink_profiles_sync_topic', 'gramlink_backup_topic'];
	  for (var i = 0; i < staleKeys.length; i++) {
	    Lampa.Storage.set(staleKeys[i], '');
	  }
	  cancelAuth();
	  Lampa.Modal.close();
	  Lampa.Noty.show('GramLink: Connecting to Telegram...');
	  Lampa.Settings.update();

	  // Delegate connection to caller (provides right client)
	  if (typeof onConnected === 'function') {
	    onConnected(dcId, authKeyHex);
	  }
	}

	var qrWs = null;
	var qrCancelFlag = false;
	var qrRequestId = 0;
	var qrPending = {};
	var qrPollTimer = null;
	function qrSend(msg) {
	  return new Promise(function (resolve, reject) {
	    if (!qrWs || qrWs.readyState !== 1) {
	      reject(new Error('WebSocket not connected'));
	      return;
	    }
	    var id = ++qrRequestId;
	    msg.id = id;
	    var timer = setTimeout(function () {
	      delete qrPending[id];
	      reject(new Error('QR auth timeout'));
	    }, 60000);
	    qrPending[id] = {
	      resolve: resolve,
	      reject: reject,
	      timer: timer
	    };
	    qrWs.send(JSON.stringify(msg));
	  });
	}
	function cancelQrAuth() {
	  qrCancelFlag = true;
	  if (qrPollTimer) {
	    clearTimeout(qrPollTimer);
	    qrPollTimer = null;
	  }
	  if (qrWs) {
	    try {
	      qrWs.onclose = null;
	      qrWs.close();
	    } catch (e) {}
	    qrWs = null;
	  }
	  for (var k in qrPending) {
	    clearTimeout(qrPending[k].timer);
	  }
	  qrPending = {};
	}
	function startQrAuthViaGateway(onConnected, showPhoneButton) {
	  qrCancelFlag = false;
	  var enabledCtrl = Lampa.Controller.enabled().name;
	  var statusId = 'gramlink-gateway-qr-status';
	  var html = $('<div class="gramlink-auth" style="padding:1em;text-align:center">' + '<div class="gramlink-auth__qr-placeholder" style="width:16em;height:16em;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);border-radius:1em;margin:0 auto">' + '<svg viewBox="0 0 64 64" width="48" height="48" fill="rgba(255,255,255,0.3)">' + '<rect x="4" y="4" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="36" y="4" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="4" y="36" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="44" y="44" width="8" height="8" rx="1" fill="currentColor"/>' + '<rect x="36" y="44" width="4" height="8" rx="1" fill="currentColor"/>' + '<rect x="44" y="36" width="8" height="4" rx="1" fill="currentColor"/>' + '</svg>' + '</div>' + '<div class="gramlink-auth__qr-code" style="display:none;width:16em;height:16em;margin:0 auto"></div>' + '<div style="margin:1em 0 0.5em;font-size:1.1em;color:rgba(255,255,255,0.6)" id="' + statusId + '"></div>' + (showPhoneButton ? '<div class="gramlink-auth__phone-wrap" style="margin-top:1.2em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.1)">' + '<div class="simple-button selector gramlink-auth__phone-gw-btn">Log in by phone number (Gateway)</div>' + '</div>' : '') + '</div>');
	  Lampa.Modal.open({
	    title: 'Telegram Authorization (Gateway)',
	    html: html,
	    size: 'medium',
	    onBack: function onBack() {
	      cancelQrAuth();
	      Lampa.Modal.close();
	      Lampa.Controller.toggle(enabledCtrl);
	    }
	  });
	  var qrPlaceholder = html.find('.gramlink-auth__qr-placeholder');
	  var qrEl = html.find('.gramlink-auth__qr-code');
	  var statusEl = html.find('#' + statusId);
	  statusEl.text('Connecting to Gateway...');

	  // ponytail: phone button in same modal — switches to phone auth
	  if (showPhoneButton) {
	    html.find('.gramlink-auth__phone-gw-btn').on('hover:enter hover:click hover:touch', function () {
	      cancelQrAuth();
	      Lampa.Modal.close();
	      setTimeout(function () {
	        startPhoneAuthViaGateway(onConnected);
	      }, 300);
	    });
	  }

	  // ── Open WebSocket to Gateway ──────────────────────────────
	  var creds = getApiCredentials();
	  var gatewayUrl = Lampa.Storage.get('gramlink_gateway_url', 'wss://mtproto-master.fly.dev');
	  var wsUrl = gatewayUrl + '/ws?clientId=' + encodeURIComponent(getDeviceId());
	  var ws = new WebSocket(wsUrl);
	  qrWs = ws;
	  ws.onopen = function () {
	    statusEl.text('Requesting QR code...');
	    doQrExport(creds, qrPlaceholder, qrEl, statusEl, enabledCtrl, onConnected);
	  };
	  ws.onerror = function () {
	    statusEl.text('WebSocket connection failed');
	    Lampa.Noty.show('GramLink: Cannot connect to Gateway');
	  };
	}
	function doQrExport(creds, qrPlaceholder, qrEl, statusEl, enabledCtrl, onConnected) {
	  qrSend({
	    cmd: 'auth_qr_export',
	    apiId: creds.apiId,
	    apiHash: creds.apiHash
	  }).then(function (resp) {
	    if (qrCancelFlag) return;
	    if (resp.ok && resp.event === 'qr_code') {
	      var token = resp.token;
	      qrPlaceholder.hide();
	      qrEl.show().empty();
	      var qrUrl = 'tg://login?token=' + token;
	      Lampa.Utils.qrcode(qrUrl, qrEl, function () {});
	      setTimeout(function () {
	        var s = qrEl.find('svg');
	        if (s.length) s.css({
	          width: '14em',
	          height: '14em'
	        });
	      }, 100);
	      statusEl.html('<div>Scan with Telegram</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.4)">' + 'Open Telegram → Settings → Devices → Scan QR' + '</div>');

	      // Start polling for scan
	      startPolling(creds, statusEl, enabledCtrl, onConnected);
	    } else {
	      statusEl.text('Error: ' + (resp.error || 'Unexpected response'));
	    }
	  }).catch(function (err) {
	    if (qrCancelFlag) return;
	    statusEl.text('Error: ' + (err.message || 'unknown'));
	    Lampa.Noty.show('GramLink: ' + (err.message || 'QR auth failed'));
	  });
	}
	function startPolling(creds, statusEl, enabledCtrl, onConnected) {
	  function poll() {
	    if (qrCancelFlag) return;
	    qrSend({
	      cmd: 'auth_qr_export',
	      apiId: creds.apiId,
	      apiHash: creds.apiHash
	    }).then(function (resp) {
	      if (qrCancelFlag) return;
	      if (resp.ok && resp.event === 'auth_success') {
	        finalizeQrAuth(resp, enabledCtrl, onConnected);
	      } else if (resp.ok && resp.event === 'password_needed') {
	        handleQrPassword(creds, resp.hint || '', statusEl, enabledCtrl, onConnected);
	      } else if (resp.ok && resp.event === 'qr_poll' && resp.status === 'waiting') {
	        qrPollTimer = setTimeout(poll, 3000);
	      } else if (resp.ok && resp.event === 'qr_code') {
	        qrPollTimer = setTimeout(poll, 3000);
	      } else if (resp.ok && resp.event === 'qr_migrate_done') {
	        qrPollTimer = setTimeout(poll, 3000);
	      } else {
	        statusEl.text('Error: ' + (resp.error || 'Poll failed'));
	        Lampa.Noty.show('GramLink: QR auth error');
	      }
	    }).catch(function (err) {
	      if (qrCancelFlag) return;
	      statusEl.text('Poll error: ' + (err.message || 'unknown'));
	      qrPollTimer = setTimeout(poll, 5000);
	    });
	  }
	  qrPollTimer = setTimeout(poll, 3000);
	}
	function handleQrPassword(creds, hint, statusEl, enabledCtrl, onConnected) {
	  statusEl.text('2FA password required...');
	  Lampa.Modal.close();
	  Lampa.Input.edit({
	    title: hint ? '2FA Password (hint: ' + hint + ')' : '2FA Password',
	    value: '',
	    free: true,
	    nosave: true
	  }, function (val) {
	    if (val && String(val).trim()) {
	      setTimeout(function () {
	        Lampa.Modal.open({
	          title: 'Telegram Authorization (Gateway)',
	          html: $('<div class="gramlink-auth" style="padding:1em;text-align:center"><div style="margin:1em 0;font-size:1.1em;color:rgba(255,255,255,0.6)">Verifying password...</div></div>'),
	          size: 'medium',
	          onBack: function onBack() {
	            cancelQrAuth();
	            Lampa.Modal.close();
	            Lampa.Controller.toggle(enabledCtrl);
	          }
	        });
	      }, 200);
	      qrSend({
	        cmd: 'auth_qr_password',
	        password: String(val).trim()
	      }).then(function (resp) {
	        if (qrCancelFlag) return;
	        if (resp.ok && resp.event === 'auth_success') {
	          finalizeQrAuth(resp, enabledCtrl, onConnected);
	        } else {
	          Lampa.Noty.show('GramLink: ' + (resp.error || 'Wrong password'));
	          cancelQrAuth();
	          Lampa.Modal.close();
	          Lampa.Controller.toggle(enabledCtrl);
	        }
	      }).catch(function (err) {
	        Lampa.Noty.show('GramLink: ' + (err.message || '2FA error'));
	        cancelQrAuth();
	        Lampa.Modal.close();
	        Lampa.Controller.toggle(enabledCtrl);
	      });
	    } else {
	      cancelQrAuth();
	      Lampa.Controller.toggle(enabledCtrl);
	    }
	  });
	}
	function finalizeQrAuth(resp, enabledCtrl, onConnected) {
	  var dcId = resp.dcId;
	  var authKeyHex = resp.authKeyHex;
	  var userName = resp.userName || 'User';
	  if (!dcId || !authKeyHex) {
	    Lampa.Noty.show('GramLink: Invalid auth response');
	    cancelQrAuth();
	    Lampa.Controller.toggle(enabledCtrl);
	    return;
	  }
	  Lampa.Storage.set('gramlink_dc_id', String(dcId));
	  vault.seal(authKeyHex);
	  Lampa.Storage.set('gramlink_user_name', userName);
	  var staleKeys = ['gramlink_channel_id', 'gramlink_sync_log_topic', 'gramlink_profiles_topic', 'gramlink_profiles_sync_topic', 'gramlink_backup_topic'];
	  for (var i = 0; i < staleKeys.length; i++) {
	    Lampa.Storage.set(staleKeys[i], '');
	  }
	  cancelQrAuth();
	  Lampa.Modal.close();
	  Lampa.Noty.show('GramLink: Connecting to Telegram...');
	  Lampa.Settings.update();
	  if (typeof onConnected === 'function') {
	    onConnected(dcId, authKeyHex);
	  }
	}

	// Note: for old_release build, 'utils/client' is replaced with 'utils/gateway-client'

	function onConnected(dcId, authKeyHex) {
	  GatewayClient.getInstance().connect().then(function () {
	    Lampa.Noty.show('GramLink: Connected!');
	    Lampa.Settings.update();
	  }).catch(function (err) {
	    console.error('GramLink', 'Post-auth connect failed:', err);
	    Lampa.Noty.show('GramLink: Connection failed — ' + (err.message || 'unknown'));
	  });
	}
	function startLogin() {
	  // Immediately start Gateway QR auth (shows its own modal with QR + phone button)
	  startQrAuthViaGateway(onConnected, true);
	}

	var es_array_reduce = {};

	var arrayMethodIsStrict;
	var hasRequiredArrayMethodIsStrict;

	function requireArrayMethodIsStrict () {
		if (hasRequiredArrayMethodIsStrict) return arrayMethodIsStrict;
		hasRequiredArrayMethodIsStrict = 1;

		var fails = requireFails();
		arrayMethodIsStrict = function (METHOD_NAME, argument) {
		  var method = [][METHOD_NAME];
		  return !!method && fails(function () {
		    // eslint-disable-next-line no-useless-call -- required for testing
		    method.call(null, argument || function () {
		      return 1;
		    }, 1);
		  });
		};
		return arrayMethodIsStrict;
	}

	var hasRequiredEs_array_reduce;

	function requireEs_array_reduce () {
		if (hasRequiredEs_array_reduce) return es_array_reduce;
		hasRequiredEs_array_reduce = 1;

		var $ = require$$0$9;
		var $reduce = requireArrayReduce().left;
		var arrayMethodIsStrict = requireArrayMethodIsStrict();
		var CHROME_VERSION = require$$3;
		var IS_NODE = requireEnvironmentIsNode();

		// Chrome 80-82 has a critical bug
		// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
		var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
		var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

		// `Array.prototype.reduce` method
		// https://tc39.es/ecma262/#sec-array.prototype.reduce
		$({
		  target: 'Array',
		  proto: true,
		  forced: FORCED
		}, {
		  reduce: function reduce(callbackfn /* , initialValue */) {
		    var length = arguments.length;
		    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
		  }
		});
		return es_array_reduce;
	}

	requireEs_array_reduce();

	var DICE_BEAR_BASE = 'https://api.dicebear.com/10.x/';
	var DICE_BEAR_STYLES = ['adventurer', 'adventurer-neutral', 'avataaars', 'avataaars-neutral', 'big-ears', 'big-ears-neutral', 'big-smile', 'bottts', 'bottts-neutral', 'croodles', 'croodles-neutral', 'disco', 'dylan', 'fun-emoji', 'glass', 'glyphs', 'icons', 'identicon', 'initial-face', 'initials', 'lorelei', 'lorelei-neutral', 'micah', 'miniavs', 'notionists', 'notionists-neutral', 'open-peeps', 'personas', 'pixel-art', 'pixel-art-neutral', 'rings', 'shape-grid', 'shapes', 'stripes', 'thumbs', 'toon-head', 'triangles'];
	var COLORS = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688', '#4caf50', '#ff9800', '#ff5722', '#795548'];

	/**
	 * Generates avatar URL via DiceBear or initials if style is disabled.
	 */
	function getAvatar(name) {
	  var style = Lampa.Storage.get(STORAGE_KEYS.AVATAR_STYLE, 'fun-emoji');
	  if (!style) return getInitials(name);
	  return DICE_BEAR_BASE + style + '/svg?seed=' + encodeURIComponent(name) + '&borderRadius=50';
	}

	/**
	 * Returns initials of a name:
	 *   1 word → first 2 letters
	 *   2+ words → first letter of each word
	 */
	function getInitials(name) {
	  if (!name) return '??';
	  var parts = name.trim().split(/\s+/);
	  if (parts.length >= 2) {
	    return (parts[0][0] || '') + (parts[1][0] || '');
	  }
	  return name.slice(0, 2);
	}

	/**
	 * Deterministic color based on name.
	 */
	function avatarColor(name) {
	  if (!name) return '#0088cc';
	  var hash = 0;
	  for (var i = 0; i < name.length; i++) {
	    hash = name.charCodeAt(i) + ((hash << 5) - hash);
	  }
	  return COLORS[Math.abs(hash) % COLORS.length];
	}

	/**
	 * Check if avatar is a DiceBear URL (not initials).
	 */
	function isAvatarUrl(avatar) {
	  return avatar && avatar.indexOf(DICE_BEAR_BASE) === 0;
	}

	/**
	 * Returns ready HTML for avatar.
	 * @param {string} name
	 * @param {Object} [options]
	 * @param {string} [options.className='gramlink-avatar']
	 * @param {string} [options.style] — additional CSS
	 * @returns {string} HTML string
	 */
	function renderAvatar(name, options) {
	  if (!options) options = {};
	  var url = getAvatar(name);
	  var color = avatarColor(name);
	  var isUrl = isAvatarUrl(url);
	  var clsName = options.className || 'gramlink-avatar';
	  var extraStyle = options.style || '';
	  if (isUrl) {
	    return '<img src="' + url + '" alt="" class="' + clsName + '"' + (extraStyle ? ' style="' + extraStyle + '"' : '') + '>';
	  }
	  return '<div class="' + clsName + '" style="background:' + color + ';border-radius:50%;' + 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;' + 'color:#fff;font-weight:700;' + extraStyle + '">' + url + '</div>';
	}

	/**
	 * Extracts plugin name from URL.
	 */
	function extractNameFromUrl(url) {
	  try {
	    var parts = url.split('/');
	    var fname = parts[parts.length - 1] || parts[parts.length - 2] || 'Plugin';
	    return fname.replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ');
	  } catch (e) {
	    return 'Plugin';
	  }
	}

	var es_map = {};

	var es_map_constructor = {};

	var $$b = require('../internals/export');
	var globalThis$4 = require('../internals/global-this');
	var uncurryThis$4 = require('../internals/function-uncurry-this');
	var isForced = require('../internals/is-forced');
	var defineBuiltIn$2 = require('../internals/define-built-in');
	var InternalMetadataModule$1 = require('../internals/internal-metadata');
	var iterate = require('../internals/iterate');
	var anInstance$2 = require('../internals/an-instance');
	var isCallable$1 = require('../internals/is-callable');
	var isNullOrUndefined = require('../internals/is-null-or-undefined');
	var isObject$8 = require('../internals/is-object');
	var fails$5 = require('../internals/fails');
	var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
	var setToStringTag$2 = require('../internals/set-to-string-tag');
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
	    var uncurriedNativeMethod = uncurryThis$4(NativePrototype[KEY]);
	    defineBuiltIn$2(NativePrototype, KEY, KEY === 'add' ? function add(value) {
	      uncurriedNativeMethod(this, value === 0 ? 0 : value);
	      return this;
	    } : KEY === 'delete' ? function (key) {
	      return IS_WEAK && !isObject$8(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	    } : KEY === 'get' ? function get(key) {
	      return IS_WEAK && !isObject$8(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	    } : KEY === 'has' ? function has(key) {
	      return IS_WEAK && !isObject$8(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	    } : function set(key, value) {
	      uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
	      return this;
	    });
	  };
	  var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable$1(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$5(function () {
	    new NativeConstructor().entries().next();
	  })));
	  if (REPLACE) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule$1.enable();
	  } else if (isForced(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails$5(function () {
	      instance.has(1);
	    });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new -- required for testing
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
	      new NativeConstructor(iterable);
	    });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails$5(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance$2(dummy, NativePrototype);
	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
	        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
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
	  $$b({
	    global: true,
	    constructor: true,
	    forced: Constructor !== NativeConstructor
	  }, exported);
	  setToStringTag$2(Constructor, CONSTRUCTOR_NAME);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var collection$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(collection$1);

	var defineBuiltIns$2;
	var hasRequiredDefineBuiltIns;

	function requireDefineBuiltIns () {
		if (hasRequiredDefineBuiltIns) return defineBuiltIns$2;
		hasRequiredDefineBuiltIns = 1;

		var defineBuiltIn = requireDefineBuiltIn();
		defineBuiltIns$2 = function (target, src, options) {
		  for (var key in src) defineBuiltIn(target, key, src[key], options);
		  return target;
		};
		return defineBuiltIns$2;
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
		var isConstructor = require$$1$3;
		var isObject = require$$2$3;
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

		var $ = require$$0$9;
		var toObject = requireToObject();
		var toAbsoluteIndex = requireToAbsoluteIndex();
		var toIntegerOrInfinity = requireToIntegerOrInfinity();
		var lengthOfArrayLike = requireLengthOfArrayLike();
		var setArrayLength = require$$5$1;
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

	var $$a = require('../internals/export');
	var uncurryThis$3 = require('../internals/function-uncurry-this');
	var hiddenKeys = require('../internals/hidden-keys');
	var isObject$7 = require('../internals/is-object');
	var hasOwn$2 = require('../internals/has-own-property');
	var defineProperty = require('../internals/object-define-property').f;
	var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
	var getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external');
	var isExtensible$1 = require('../internals/object-is-extensible');
	var uid = require('../internals/uid');
	var FREEZING$3 = require('../internals/freezing');
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
	  if (!isObject$7(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn$2(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	    // return object ID
	  }
	  return it[METADATA].objectID;
	};
	var getWeakData = function getWeakData(it, create) {
	  if (!hasOwn$2(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	    // return the store of weak collections IDs
	  }
	  return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze$2 = function onFreeze(it) {
	  if (FREEZING$3 && REQUIRED && isExtensible$1(it) && !hasOwn$2(it, METADATA)) setMetadata(it);
	  return it;
	};
	var enable = function enable() {
	  meta.enable = function () {/* empty */};
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = uncurryThis$3([].splice);
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
	    $$a({
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
	  onFreeze: onFreeze$2
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
		var iterate = require$$6;
		var defineIterator = require$$7$1;
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

	var hasRequiredEs_map_constructor;

	function requireEs_map_constructor () {
		if (hasRequiredEs_map_constructor) return es_map_constructor;
		hasRequiredEs_map_constructor = 1;

		var collection = require$$0;
		var collectionStrong = requireCollectionStrong();

		// `Map` constructor
		// https://tc39.es/ecma262/#sec-map-objects
		collection('Map', function (init) {
		  return function Map() {
		    return init(this, arguments.length ? arguments[0] : undefined);
		  };
		}, collectionStrong);
		return es_map_constructor;
	}

	var hasRequiredEs_map;

	function requireEs_map () {
		if (hasRequiredEs_map) return es_map;
		hasRequiredEs_map = 1;

		// TODO: Remove this module from `core-js@4` since it's replaced to module below
		requireEs_map_constructor();
		return es_map;
	}

	requireEs_map();

	var es_set = {};

	var es_set_constructor = {};

	var hasRequiredEs_set_constructor;

	function requireEs_set_constructor () {
		if (hasRequiredEs_set_constructor) return es_set_constructor;
		hasRequiredEs_set_constructor = 1;

		var collection = require$$0;
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

	/**
	 * Strips ```json ... ``` wrapping from message text.
	 */
	function stripCodeFence(text) {
	  if (!text) return text;
	  return text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
	}

	var PROFILE_META_VERSION = 3;

	// ─── Storage helpers ──────────────────────────────────────────────────

	function readJSON(key, def) {
	  try {
	    return Lampa.Storage.get(key, def);
	  } catch (e) {
	    return def;
	  }
	}
	function collectFavorite() {
	  return readJSON('favorite', {});
	}
	function collectTimeline() {
	  return readJSON('file_view', {});
	}
	function collectPlugins() {
	  return readJSON('plugins', []);
	}
	function collectSettings() {
	  return {
	    sync_enabled: Lampa.Storage.get('gramlink_sync_enabled', false),
	    heartbeat: Lampa.Storage.get('gramlink_heartbeat', false),
	    broadcast: Lampa.Storage.get('gramlink_broadcast', false)
	  };
	}

	// ─── Caption builder ─────────────────────────────────────────────────

	/**
	 * Builds JSON for profile message caption.
	 *
	 * @param {Object} profile — { name, avatar, updated? }
	 * @param {Object} [extras] — additional meta fields (source, source_id, etc.)
	 * @returns {string} JSON string
	 */
	function buildCaption(profile, extras) {
	  if (!extras) extras = {};
	  var result = JSON.stringify({
	    meta: _objectSpread2({
	      type: 'profile',
	      timestamp: Math.floor(Date.now() / 1000),
	      version: PROFILE_META_VERSION
	    }, extras),
	    payload: {
	      profile: {
	        name: profile.name,
	        avatar: profile.avatar,
	        updated: profile.updated || Math.floor(Date.now() / 1000)
	      }
	    }
	  });
	  console.log('[GramLink] buildCaption — name="' + profile.name + '" extras:', JSON.stringify(extras), 'result:', result);
	  return result;
	}

	// ─── File data builder ────────────────────────────────────────────────

	/**
	 * Builds complete fileData for a profile file.
	 *
	 * @param {Object} opts
	 * @param {string} opts.name
	 * @param {string} opts.avatar
	 * @param {Object} [opts.bookmarks]
	 * @param {Object} [opts.timeline]
	 * @param {Array} [opts.plugins]
	 * @param {Object} [opts.settings]
	 * @param {Object} [opts.device_overrides]
	 * @returns {Object} fileData for JSON.stringify
	 */
	function buildFileData(opts) {
	  var now = Math.floor(Date.now() / 1000);
	  return {
	    profile_meta: {
	      name: opts.name,
	      avatar: opts.avatar,
	      updated: now
	    },
	    bookmarks: opts.bookmarks || {
	      favorite: {}
	    },
	    timeline: opts.timeline || {},
	    plugins: opts.plugins || [],
	    settings: opts.settings || collectSettings(),
	    device_overrides: opts.device_overrides || {}
	  };
	}

	// ─── Parsers ──────────────────────────────────────────────────────────

	/**
	 * Parse a profile message caption.
	 * Returns payload.profile or null.
	 */
	function parseCaption(text) {
	  try {
	    var d = JSON.parse(stripCodeFence(text || ''));
	    return d && d.payload && d.payload.profile;
	  } catch (e) {
	    return null;
	  }
	}

	/**
	 * Check if text is a valid profile message.
	 * Returns parsed object or null.
	 */
	function parseProfileMessage(text) {
	  try {
	    var d = JSON.parse(stripCodeFence(text || ''));
	    return d && d.meta && d.meta.type === 'profile' ? d : null;
	  } catch (e) {
	    return null;
	  }
	}

	/**
	 * Find target message in array by msgId.
	 * Pattern duplicated 6 times (D-11).
	 */
	function findMessageById(messages, msgId) {
	  var target = null;
	  messages.forEach(function (m) {
	    if (String(m.id) === String(msgId)) target = m;
	  });
	  return target;
	}

	// ─── Deep clone ───────────────────────────────────────────────────────

	/**
	 * Deep clone an object.
	 * Uses structuredClone (modern browsers/Smart TV >=2020)
	 * with JSON.parse/stringify fallback.
	 */
	function deepClone(obj) {
	  if (typeof structuredClone === 'function') {
	    return structuredClone(obj);
	  }
	  return JSON.parse(JSON.stringify(obj));
	}

	// ─── File name builder ────────────────────────────────────────────────

	/**
	 * Build file name for a profile.
	 */
	function buildProfileFileName(name, now) {
	  return 'profile_' + name.replace(/[^a-zA-Z0-9]/g, '_') + '_' + now + '.json';
	}

	// ─── Delta cursor ─────────────────────────────────────────────────────

	var STORAGE_LAST_DELTA_SEEN = 'gramlink_last_delta_seen';
	function getLastDeltaSeen() {
	  return parseInt(Lampa.Storage.get(STORAGE_LAST_DELTA_SEEN, '0'), 10);
	}
	function setLastDeltaSeen(timestamp) {
	  Lampa.Storage.set(STORAGE_LAST_DELTA_SEEN, String(timestamp));
	}

	function startMigration(profilesTopicId) {
	  if (!window.lampa_settings || !window.lampa_settings.account_use) {
	    Lampa.Noty.show('Cub account not found. Log in to Cub in Lampa settings first.');
	    return;
	  }
	  if (!Lampa.Account || !Lampa.Account.Permit || !Lampa.Account.Permit.token) {
	    Lampa.Noty.show('Cub account not found. Log in to Cub in Lampa settings first.');
	    return;
	  }

	  // ── Import Analyzer: show counts before migration ───────────────
	  Lampa.Noty.show('Analyzing Cub data...');
	  console.log('[GramLink] startMigration — fetching profiles/all and plugins/all');
	  Promise.all([Lampa.Account.Api.load('profiles/all').catch(function () {
	    return {
	      profiles: []
	    };
	  }), Lampa.Account.Api.load('plugins/all').catch(function () {
	    return {
	      plugins: []
	    };
	  })]).then(function (results) {
	    var profilesResult = results[0];
	    var pluginsResult = results[1];
	    var profiles = profilesResult && profilesResult.profiles || [];
	    var allPlugins = pluginsResult && pluginsResult.secuses ? pluginsResult.plugins || [] : [];
	    var profileCount = profiles.length;
	    var pluginCount = allPlugins.length;
	    console.log('[GramLink] Cub profiles:', profileCount, JSON.stringify(profiles.map(function (p) {
	      return {
	        id: p.id,
	        name: p.name
	      };
	    })));
	    console.log('[GramLink] Cub plugins total:', pluginCount, 'has_secuses:', pluginsResult && pluginsResult.secuses);
	    if (profileCount === 0) {
	      Lampa.Noty.show('No Cub profiles found');
	      return;
	    }

	    // ── Fetch bookmarks from ALL profiles for total count ──
	    var bookmarkPromises = profiles.map(function (p) {
	      return Lampa.Account.Api.load('bookmarks/dump', {
	        headers: {
	          profile: p.id
	        },
	        dataType: 'text'
	      }).then(function (raw) {
	        try {
	          var parsed = JSON.parse(raw);
	          return parsed && parsed.bookmarks ? parsed.bookmarks.length : 0;
	        } catch (e) {
	          return 0;
	        }
	      }).catch(function () {
	        return 0;
	      });
	    });
	    Promise.all(bookmarkPromises).then(function (bookmarkCounts) {
	      var totalBookmarks = bookmarkCounts.reduce(function (a, b) {
	        return a + b;
	      }, 0);
	      var $html = $('<div style="padding:1em">' + '<div class="gramlink-import-stats">' + '<div class="gramlink-import-stat" style="display:flex;justify-content:space-between;padding:0.8em 0;border-bottom:1px solid rgba(255,255,255,0.08)">' + '<span style="opacity:0.6">' + (Lampa.Lang.translate('gramlink_import_profiles') || 'Profiles found:') + '</span>' + '<span style="font-weight:600;font-size:1.1em">' + profileCount + '</span>' + '</div>' + '<div class="gramlink-import-stat" style="display:flex;justify-content:space-between;padding:0.8em 0;border-bottom:1px solid rgba(255,255,255,0.08)">' + '<span style="opacity:0.6">' + (Lampa.Lang.translate('gramlink_import_bookmarks') || 'Favorites & history items:') + '</span>' + '<span style="font-weight:600;font-size:1.1em">' + totalBookmarks + '</span>' + '</div>' + '<div class="gramlink-import-stat" style="display:flex;justify-content:space-between;padding:0.8em 0">' + '<span style="opacity:0.6">' + (Lampa.Lang.translate('gramlink_import_plugins') || 'Plugins found:') + '</span>' + '<span style="font-weight:600;font-size:1.1em">' + pluginCount + '</span>' + '</div>' + '</div>' + '<p style="margin-top:1em;opacity:0.5;font-size:0.9em">' + (Lampa.Lang.translate('gramlink_import_proceed') || 'Proceed with migration to GramLink?') + '</p>' + '</div>');
	      var enabledCtrl = Lampa.Controller.enabled().name;
	      Lampa.Modal.open({
	        title: Lampa.Lang.translate('gramlink_import_title') || 'Cub Import Summary',
	        html: $html,
	        buttons: [{
	          name: Lampa.Lang.translate('gramlink_import_start') || 'Yes, migrate',
	          onSelect: function onSelect() {
	            Lampa.Modal.close();
	            Lampa.Controller.toggle(enabledCtrl);
	            doMigration(profilesTopicId);
	          }
	        }, {
	          name: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	          onSelect: function onSelect() {
	            Lampa.Modal.close();
	            Lampa.Controller.toggle(enabledCtrl);
	          }
	        }]
	      });
	    });
	  }).catch(function (e) {
	    console.error('GramLink', 'Import analysis error:', e);
	    Lampa.Noty.show('Failed to analyze Cub data: ' + (e.message || 'API error'));
	  });
	}

	// ─── Favourite categories (Lampa.Favorite) ──────────────────────

	var FAV_CATEGORIES = ['like', 'wath', 'book', 'history', 'look', 'viewed', 'scheduled', 'continued', 'thrown'];

	// ─── Convert Cub bookmark dump → Lampa favorite dict ─────────────

	function _emptyFav() {
	  var fav = {
	    card: []
	  };
	  FAV_CATEGORIES.forEach(function (c) {
	    fav[c] = [];
	  });
	  return fav;
	}
	function cubDumpToFavorite(rawText) {
	  var parsed;
	  try {
	    parsed = JSON.parse(rawText);
	  } catch (e) {
	    return _emptyFav();
	  }
	  var rows = parsed && parsed.bookmarks;
	  if (!rows || !rows.length) return _emptyFav();
	  var fav = {
	    card: []
	  };
	  FAV_CATEGORIES.forEach(function (c) {
	    fav[c] = [];
	  });
	  var seenCards = {};
	  rows.forEach(function (b) {
	    if (!b.type || b.card_id == null) return;
	    if (!fav[b.type]) fav[b.type] = [];

	    // Avoid duplicate card_ids in the same category
	    if (fav[b.type].indexOf(b.card_id) < 0) {
	      fav[b.type].unshift(b.card_id);
	    }

	    // Parse card data once per unique card_id
	    if (!seenCards[b.card_id] && b.data) {
	      seenCards[b.card_id] = true;
	      try {
	        var card = typeof b.data === 'string' ? JSON.parse(b.data) : b.data;
	        fav.card.push(card);
	      } catch (e) {}
	    }
	  });
	  return fav;
	}

	// ─── Convert Cub timeline dump → Lampa file_view dict ────────────

	function cubDumpToTimeline(rawText) {
	  var parsed;
	  try {
	    parsed = JSON.parse(rawText);
	  } catch (e) {
	    return {};
	  }
	  var timelines = parsed && parsed.timelines;
	  if (!timelines) return {};
	  var result = {};
	  for (var hash in timelines) {
	    if (!Object.prototype.hasOwnProperty.call(timelines, hash)) continue;
	    var t = timelines[hash];
	    if (!t) continue;
	    result[hash] = {
	      time: t.time || 0,
	      duration: t.duration || 0,
	      percent: t.percent || 0
	    };
	  }
	  return result;
	}

	// ─── Filter Cub plugins for a specific profile ───────────────────

	function filterPluginsForProfile(allPlugins, profileId) {
	  var result = [];
	  allPlugins.forEach(function (p) {
	    if (!p.url) return;
	    var profileIds = [];
	    try {
	      profileIds = JSON.parse(p.profiles);
	    } catch (e) {
	      return;
	    }

	    // Cub semantics: empty profiles array "[]" means plugin is available to ALL profiles
	    if (profileIds.length > 0 && !profileIds.some(function (id) {
	      return id == profileId;
	    })) return;
	    result.push({
	      url: p.url,
	      name: p.name || p.url.split('/').pop().replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' '),
	      status: p.status !== undefined ? p.status : 1
	    });
	  });
	  console.log('[GramLink] filterPluginsForProfile profileId=' + profileId + ' plugins=' + result.length + ' (of ' + allPlugins.length + ' total)');
	  return result;
	}

	// ─── Merge local + Cub plugins (GramLink safeguard) ──────────────

	function mergeWithLocalPlugins(cubPlugins) {
	  var localPlugins = [];
	  try {
	    localPlugins = Lampa.Storage.get('plugins', []);
	  } catch (e) {}
	  var seen = {};
	  var result = [];

	  // Keep ALL local plugins first — GramLink lives here
	  localPlugins.forEach(function (p) {
	    var url = p.url || '';
	    if (!seen[url]) {
	      result.push(p);
	      seen[url] = true;
	    }
	  });

	  // Add Cub plugins that aren't already local
	  cubPlugins.forEach(function (p) {
	    if (!seen[p.url]) {
	      result.push(p);
	      seen[p.url] = true;
	    }
	  });
	  return result;
	}

	// ─── Main migration flow ─────────────────────────────────────────

	function doMigration(profilesTopicId) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) {
	    Lampa.Noty.show('Not connected to Telegram');
	    return;
	  }
	  Lampa.Noty.show('Reading Cub profiles...');
	  console.log('[GramLink] doMigration — starting, profilesTopicId:', profilesTopicId);
	  Lampa.Account.Api.load('profiles/all').then(function (result) {
	    if (!result || !result.profiles || !result.profiles.length) {
	      Lampa.Noty.show('No Cub profiles found');
	      console.warn('[GramLink] doMigration — no profiles from API');
	      return;
	    }
	    var profiles = result.profiles;
	    var activeProfileId = Lampa.Account.Permit.account.profile.id;
	    var imported = 0;
	    var activatedId = null;
	    var activatedName = null;
	    console.log('[GramLink] doMigration — profiles loaded:', profiles.length, 'activeProfileId:', activeProfileId);
	    profiles.forEach(function (p, i) {
	      console.log('[GramLink]   profile[' + i + ']: id=' + p.id + ' name="' + (p.name || '') + '" main=' + (p.main ? 'yes' : 'no'));
	    });

	    // ── 1. Fetch ALL plugins once ──────────────────────────
	    Lampa.Account.Api.load('plugins/all').then(function (pluginResult) {
	      var allPlugins = pluginResult && pluginResult.secuses ? pluginResult.plugins || [] : [];
	      console.log('[GramLink] doMigration — plugins loaded:', allPlugins.length, 'secuses:', pluginResult && pluginResult.secuses);

	      // ── 2. Process each profile sequentially ───────────
	      function processNext(index) {
	        if (index >= profiles.length) {
	          console.log('[GramLink] doMigration — all profiles processed, imported:', imported);
	          finishMigration(imported, activatedId, activatedName);
	          return;
	        }
	        var cubProfile = profiles[index];
	        var name = cubProfile.name || 'Profile ' + (index + 1);
	        var avatar = getAvatar(name);
	        var now = Math.floor(Date.now() / 1000);

	        // Build caption with source metadata
	        var captionExtras = {
	          source: 'cub',
	          source_id: cubProfile.id
	        };
	        var caption = buildCaption({
	          name: name,
	          avatar: avatar,
	          updated: now
	        }, captionExtras);
	        console.log('[GramLink] processNext[' + index + ']: name="' + name + '" cubProfile.id=' + cubProfile.id + ' activeProfileId=' + activeProfileId);
	        console.log('[GramLink]   caption:', caption);
	        Lampa.Noty.show('Importing "' + name + '" (' + (index + 1) + '/' + profiles.length + ')…');

	        // ── 2a. Fetch this profile's Bookmarks ─────────
	        var bookmarkPromise = Lampa.Account.Api.load('bookmarks/dump', {
	          headers: {
	            profile: cubProfile.id
	          },
	          dataType: 'text'
	        }).then(function (raw) {
	          var fav = cubDumpToFavorite(raw);
	          console.log('[GramLink]   bookmarks for "' + name + '": ' + (fav && fav.card ? fav.card.length : 0) + ' cards');
	          return fav;
	        }).catch(function (err) {
	          console.warn('[GramLink]   bookmarks failed for "' + name + '":', err && err.message);
	          var f = {
	            card: []
	          };
	          FAV_CATEGORIES.forEach(function (c) {
	            f[c] = [];
	          });
	          return f;
	        });

	        // ── 2b. Fetch this profile's Timeline ──────────
	        var timelinePromise = Lampa.Account.Api.load('timeline/dump', {
	          headers: {
	            profile: cubProfile.id
	          },
	          dataType: 'text'
	        }).then(function (raw) {
	          var tl = cubDumpToTimeline(raw);
	          console.log('[GramLink]   timeline for "' + name + '": ' + Object.keys(tl).length + ' entries');
	          return tl;
	        }).catch(function (err) {
	          console.warn('[GramLink]   timeline failed for "' + name + '":', err && err.message);
	          return {};
	        });

	        // ── 2c. Wait for both, build + send file ──────
	        Promise.all([bookmarkPromise, timelinePromise]).then(function (results) {
	          var bookmarks = results[0];
	          var timeline = results[1];
	          var profilePlugins = mergeWithLocalPlugins(filterPluginsForProfile(allPlugins, cubProfile.id));
	          console.log('[GramLink]   building fileData for "' + name + '" — plugins:', profilePlugins.length);
	          var fileData = buildFileData({
	            name: name,
	            avatar: avatar,
	            bookmarks: {
	              favorite: bookmarks
	            },
	            timeline: timeline,
	            plugins: profilePlugins,
	            settings: collectSettings()
	          });
	          var fileJson = JSON.stringify(fileData, null, 2);
	          var fileName = 'profile_' + name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '_').slice(0, 64) + '_' + now + '.json';
	          var channelId = getChannelId();
	          client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
	            console.log('[GramLink]   sendFile result for "' + name + '": msgId=' + msgId);
	            if (msgId) {
	              imported++;
	              if (String(cubProfile.id) === String(activeProfileId)) {
	                activatedId = msgId;
	                activatedName = name;
	                console.log('[GramLink]   -> this profile will be activated after migration');
	              }
	            } else {
	              console.warn('[GramLink]   sendFile returned no msgId for "' + name + '"');
	            }
	            processNext(index + 1);
	          }).catch(function (err) {
	            console.error('[GramLink]   sendFile failed for "' + name + '":', err && err.message);
	            processNext(index + 1);
	          });
	        }).catch(function () {
	          console.warn('[GramLink]   bookmark+timeline both failed for "' + name + '", creating empty profile');
	          // If both bookmark+timeline fail, still create profile with empty data
	          var profilePlugins = mergeWithLocalPlugins(filterPluginsForProfile(allPlugins, cubProfile.id));
	          var fileData = buildFileData({
	            name: name,
	            avatar: avatar,
	            plugins: profilePlugins,
	            settings: collectSettings()
	          });
	          var fileJson = JSON.stringify(fileData, null, 2);
	          var fileName = 'profile_' + name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '_').slice(0, 64) + '_' + now + '.json';
	          var channelId = getChannelId();
	          client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
	            console.log('[GramLink]   sendFile (empty fallback) for "' + name + '": msgId=' + msgId);
	            if (msgId) {
	              imported++;
	              if (String(cubProfile.id) === String(activeProfileId)) {
	                activatedId = msgId;
	                activatedName = name;
	              }
	            }
	            processNext(index + 1);
	          }).catch(function (err) {
	            console.error('[GramLink]   sendFile (empty fallback) failed for "' + name + '":', err && err.message);
	            processNext(index + 1);
	          });
	        });
	      }
	      processNext(0);
	    }).catch(function (e) {
	      console.error('[GramLink] Migration fetch plugins error:', e);
	      Lampa.Noty.show('Failed to read Cub plugins');

	      // Still try to migrate profiles without plugins
	      fallbackMigration(profiles, activeProfileId, profilesTopicId);
	    });
	  }).catch(function (e) {
	    console.error('[GramLink] Migration fetch error:', e);
	    Lampa.Noty.show('Failed to read Cub profiles: ' + (e.message || 'API error'));
	  });
	}

	// ─── Fallback if plugins/all fails: migrate with local data ─────

	function fallbackMigration(profiles, activeProfileId, profilesTopicId) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  console.log('[GramLink] fallbackMigration — profiles:', profiles.length, 'activeProfileId:', activeProfileId);
	  var imported = 0;
	  var activatedId = null;
	  var activatedName = null;
	  var now = Math.floor(Date.now() / 1000);
	  function processNext(index) {
	    if (index >= profiles.length) {
	      console.log('[GramLink] fallbackMigration — done, imported:', imported);
	      finishMigration(imported, activatedId, activatedName);
	      return;
	    }
	    var cubProfile = profiles[index];
	    var name = cubProfile.name || 'Profile ' + (index + 1);
	    var avatar = getAvatar(name);
	    var ts = now + index; // unique timestamp per profile

	    var captionExtras = {
	      source: 'cub',
	      source_id: cubProfile.id
	    };
	    var caption = buildCaption({
	      name: name,
	      avatar: avatar,
	      updated: ts
	    }, captionExtras);
	    console.log('[GramLink] fallback processNext[' + index + ']: name="' + name + '" id=' + cubProfile.id + ' caption:', caption);
	    var fileData = buildFileData({
	      name: name,
	      avatar: avatar,
	      plugins: mergeWithLocalPlugins([]),
	      settings: collectSettings()
	    });
	    var fileJson = JSON.stringify(fileData, null, 2);
	    var fileName = 'profile_' + name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '_').slice(0, 64) + '_' + ts + '.json';
	    var channelId = getChannelId();
	    client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
	      if (msgId) {
	        imported++;
	        if (String(cubProfile.id) === String(activeProfileId)) {
	          activatedId = msgId;
	          activatedName = name;
	        }
	      }
	      processNext(index + 1);
	    }).catch(function () {
	      processNext(index + 1);
	    });
	  }
	  processNext(0);
	}

	// ─── Finish ──────────────────────────────────────────────────────

	function finishMigration(count, activatedId, activatedName) {
	  console.log('[GramLink] finishMigration — imported:', count, 'activatedId:', activatedId, 'activatedName:', activatedName);
	  if (activatedId) {
	    Lampa.Storage.set('gramlink_active_profile', String(activatedId));
	    Lampa.Storage.set('gramlink_active_profile_ts', String(Math.floor(Date.now() / 1000)));
	    if (activatedName) Lampa.Storage.set('gramlink_active_profile_name', activatedName);
	    console.log('[GramLink]   activated profile saved:', activatedName, 'msgId:', activatedId);
	  } else {
	    console.warn('[GramLink]   no profile activated — activeProfileId did not match any cubProfile.id');
	  }

	  // Restore gramlink_tools with correct onBack instead of Settings.update()
	  var enabledCtrl = Lampa.Controller.enabled().name;
	  Lampa.Settings.create('gramlink_tools', {
	    onBack: function onBack() {
	      Lampa.Settings.create('gramlink');
	    }
	  });
	  Lampa.Modal.open({
	    title: 'Migration complete!',
	    html: $('<div style="padding:1em">' + count + ' profiles imported successfully.</div>'),
	    buttons: [{
	      name: 'Reload now',
	      onSelect: function onSelect() {
	        Lampa.Modal.close();
	        window.location.reload();
	      }
	    }, {
	      name: 'Later',
	      onSelect: function onSelect() {
	        Lampa.Modal.close();
	        Lampa.Controller.toggle(enabledCtrl);
	      }
	    }]
	  });
	}

	var call$2 = require('../internals/function-call');
	var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$1 = require('../internals/an-object');
	var isObject$6 = require('../internals/is-object');
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
	    var searcher = isObject$6(regexp) ? getMethod(regexp, SEARCH) : undefined;
	    return searcher ? call$2(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
	  },
	  // `RegExp.prototype[@@search]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	  function (string) {
	    var rx = anObject$1(this);
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

	require('../modules/es.string.iterator');
	var $$9 = require('../internals/export');
	var DESCRIPTORS$1 = require('../internals/descriptors');
	var USE_NATIVE_URL$1 = require('../internals/url-constructor-detection');
	var globalThis$3 = require('../internals/global-this');
	var bind$1 = require('../internals/function-bind-context');
	var uncurryThis$2 = require('../internals/function-uncurry-this');
	var defineBuiltIn$1 = require('../internals/define-built-in');
	var defineBuiltInAccessor$1 = require('../internals/define-built-in-accessor');
	var anInstance$1 = require('../internals/an-instance');
	var hasOwn$1 = require('../internals/has-own-property');
	var assign$1 = require('../internals/object-assign');
	var arrayFrom = require('../internals/array-from');
	var arraySlice = require('../internals/array-slice');
	var codeAt = require('../internals/string-multibyte').codeAt;
	var toASCII = require('../internals/string-punycode-to-ascii');
	var $toString$1 = require('../internals/to-string');
	var setToStringTag$1 = require('../internals/set-to-string-tag');
	var validateArgumentsLength$1 = require('../internals/validate-arguments-length');
	var URLSearchParamsModule = require('../modules/web.url-search-params.constructor');
	var InternalStateModule$1 = require('../internals/internal-state');
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalURLState = InternalStateModule$1.getterFor('URL');
	var URLSearchParams = URLSearchParamsModule.URLSearchParams;
	var getInternalSearchParamsState = URLSearchParamsModule.getState;
	var NativeURL = globalThis$3.URL;
	var TypeError$2 = globalThis$3.TypeError;
	var encodeURIComponent$2 = globalThis$3.encodeURIComponent;
	var parseInt$1 = globalThis$3.parseInt;
	var floor = Math.floor;
	var pow = Math.pow;
	var charAt$1 = uncurryThis$2(''.charAt);
	var exec$1 = uncurryThis$2(/./.exec);
	var join$1 = uncurryThis$2([].join);
	var numberToString = uncurryThis$2(1.1.toString);
	var pop = uncurryThis$2([].pop);
	var push$1 = uncurryThis$2([].push);
	var replace$1 = uncurryThis$2(''.replace);
	var shift$1 = uncurryThis$2([].shift);
	var split$1 = uncurryThis$2(''.split);
	var stringSlice$1 = uncurryThis$2(''.slice);
	var toLowerCase = uncurryThis$2(''.toLowerCase);
	var unshift = uncurryThis$2([].unshift);
	var INVALID_AUTHORITY = 'Invalid authority';
	var INVALID_SCHEME = 'Invalid scheme';
	var INVALID_HOST = 'Invalid host';
	var INVALID_PORT = 'Invalid port';
	var ALPHA = /[a-z]/i;
	var ALPHANUMERIC_PLUS_MINUS_DOT = /[\d+\-.a-z]/i;
	var DIGIT = /\d/;
	var HEX_START = /^0x/i;
	var OCT = /^[0-7]+$/;
	var DEC = /^\d+$/;
	var HEX = /^[\da-f]+$/i;
	/* eslint-disable regexp/no-control-character -- safe */
	var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
	var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
	var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
	var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
	var TAB_AND_NEW_LINE = /[\t\n\r]/g;
	/* eslint-enable regexp/no-control-character -- safe */
	// eslint-disable-next-line no-unassigned-vars -- expected `undefined` value
	var EOF;

	// https://url.spec.whatwg.org/#ends-in-a-number-checker
	var endsInNumber = function endsInNumber(input) {
	  var parts = split$1(input, '.');
	  var last, hexPart;
	  if (parts[parts.length - 1] === '') {
	    if (parts.length === 1) return false;
	    parts.length--;
	  }
	  last = parts[parts.length - 1];
	  if (exec$1(DEC, last)) return true;
	  if (exec$1(HEX_START, last)) {
	    hexPart = stringSlice$1(last, 2);
	    return hexPart === '' || !!exec$1(HEX, hexPart);
	  }
	  return false;
	};

	// https://url.spec.whatwg.org/#concept-ipv4-parser
	var parseIPv4 = function parseIPv4(input) {
	  var parts = split$1(input, '.');
	  var partsLength, numbers, index, part, radix, number, ipv4;
	  if (parts.length && parts[parts.length - 1] === '') {
	    parts.length--;
	  }
	  partsLength = parts.length;
	  if (partsLength > 4) return null;
	  numbers = [];
	  for (index = 0; index < partsLength; index++) {
	    part = parts[index];
	    if (part === '') return null;
	    radix = 10;
	    if (part.length > 1 && charAt$1(part, 0) === '0') {
	      radix = exec$1(HEX_START, part) ? 16 : 8;
	      part = stringSlice$1(part, radix === 8 ? 1 : 2);
	    }
	    if (part === '') {
	      number = 0;
	    } else {
	      if (!exec$1(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return null;
	      number = parseInt$1(part, radix);
	    }
	    push$1(numbers, number);
	  }
	  for (index = 0; index < partsLength; index++) {
	    number = numbers[index];
	    if (index === partsLength - 1) {
	      if (number >= pow(256, 5 - partsLength)) return null;
	    } else if (number > 255) return null;
	  }
	  ipv4 = pop(numbers);
	  for (index = 0; index < numbers.length; index++) {
	    ipv4 += numbers[index] * pow(256, 3 - index);
	  }
	  return ipv4;
	};

	// https://url.spec.whatwg.org/#concept-ipv6-parser
	// eslint-disable-next-line max-statements -- TODO
	var parseIPv6 = function parseIPv6(input) {
	  var address = [0, 0, 0, 0, 0, 0, 0, 0];
	  var pieceIndex = 0;
	  var compress = null;
	  var pointer = 0;
	  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
	  var chr = function chr() {
	    return charAt$1(input, pointer);
	  };
	  if (chr() === ':') {
	    if (charAt$1(input, 1) !== ':') return;
	    pointer += 2;
	    pieceIndex++;
	    compress = pieceIndex;
	  }
	  while (chr()) {
	    if (pieceIndex === 8) return;
	    if (chr() === ':') {
	      if (compress !== null) return;
	      pointer++;
	      pieceIndex++;
	      compress = pieceIndex;
	      continue;
	    }
	    value = length = 0;
	    while (length < 4 && exec$1(HEX, chr())) {
	      value = value * 16 + parseInt$1(chr(), 16);
	      pointer++;
	      length++;
	    }
	    if (chr() === '.') {
	      if (length === 0) return;
	      pointer -= length;
	      if (pieceIndex > 6) return;
	      numbersSeen = 0;
	      while (chr()) {
	        ipv4Piece = null;
	        if (numbersSeen > 0) {
	          if (chr() === '.' && numbersSeen < 4) pointer++;else return;
	        }
	        if (!exec$1(DIGIT, chr())) return;
	        while (exec$1(DIGIT, chr())) {
	          number = parseInt$1(chr(), 10);
	          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece === 0) return;else ipv4Piece = ipv4Piece * 10 + number;
	          if (ipv4Piece > 255) return;
	          pointer++;
	        }
	        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
	        numbersSeen++;
	        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
	      }
	      if (numbersSeen !== 4) return;
	      break;
	    } else if (chr() === ':') {
	      pointer++;
	      if (!chr()) return;
	    } else if (chr()) return;
	    address[pieceIndex++] = value;
	  }
	  if (compress !== null) {
	    swaps = pieceIndex - compress;
	    pieceIndex = 7;
	    while (pieceIndex !== 0 && swaps > 0) {
	      swap = address[pieceIndex];
	      address[pieceIndex--] = address[compress + swaps - 1];
	      address[compress + --swaps] = swap;
	    }
	  } else if (pieceIndex !== 8) return;
	  return address;
	};
	var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
	  var maxIndex = null;
	  var maxLength = 1;
	  var currStart = null;
	  var currLength = 0;
	  var index = 0;
	  for (; index < 8; index++) {
	    if (ipv6[index] !== 0) {
	      if (currLength > maxLength) {
	        maxIndex = currStart;
	        maxLength = currLength;
	      }
	      currStart = null;
	      currLength = 0;
	    } else {
	      if (currStart === null) currStart = index;
	      ++currLength;
	    }
	  }
	  return currLength > maxLength ? currStart : maxIndex;
	};

	// https://url.spec.whatwg.org/#host-serializing
	var serializeHost = function serializeHost(host) {
	  var result, index, compress, ignore0;

	  // ipv4
	  if (typeof host == 'number') {
	    result = [];
	    for (index = 0; index < 4; index++) {
	      unshift(result, host % 256);
	      host = floor(host / 256);
	    }
	    return join$1(result, '.');
	  }

	  // ipv6
	  if (_typeof(host) == 'object') {
	    result = '';
	    compress = findLongestZeroSequence(host);
	    for (index = 0; index < 8; index++) {
	      if (ignore0 && host[index] === 0) continue;
	      if (ignore0) ignore0 = false;
	      if (compress === index) {
	        result += index ? ':' : '::';
	        ignore0 = true;
	      } else {
	        result += numberToString(host[index], 16);
	        if (index < 7) result += ':';
	      }
	    }
	    return '[' + result + ']';
	  }
	  return host;
	};
	var C0ControlPercentEncodeSet = {};
	var queryPercentEncodeSet = assign$1({}, C0ControlPercentEncodeSet, {
	  ' ': 1,
	  '"': 1,
	  '#': 1,
	  '<': 1,
	  '>': 1
	});
	var specialQueryPercentEncodeSet = assign$1({}, queryPercentEncodeSet, {
	  "'": 1
	});
	var fragmentPercentEncodeSet = assign$1({}, C0ControlPercentEncodeSet, {
	  ' ': 1,
	  '"': 1,
	  '<': 1,
	  '>': 1,
	  '`': 1
	});
	var pathPercentEncodeSet = assign$1({}, fragmentPercentEncodeSet, {
	  '#': 1,
	  '?': 1,
	  '{': 1,
	  '}': 1,
	  '^': 1
	});
	var userinfoPercentEncodeSet = assign$1({}, pathPercentEncodeSet, {
	  '/': 1,
	  ':': 1,
	  ';': 1,
	  '=': 1,
	  '@': 1,
	  '[': 1,
	  '\\': 1,
	  ']': 1,
	  '^': 1,
	  '|': 1
	});
	var percentEncode = function percentEncode(chr, set) {
	  var code = codeAt(chr, 0);
	  // encodeURIComponent does not encode ', which is in the special-query percent-encode set
	  return code >= 0x20 && code < 0x7F && !hasOwn$1(set, chr) ? chr : chr === "'" && hasOwn$1(set, chr) ? '%27' : encodeURIComponent$2(chr);
	};

	// https://url.spec.whatwg.org/#special-scheme
	var specialSchemes = {
	  ftp: 21,
	  file: null,
	  http: 80,
	  https: 443,
	  ws: 80,
	  wss: 443
	};

	// https://url.spec.whatwg.org/#windows-drive-letter
	var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
	  var second;
	  return string.length === 2 && exec$1(ALPHA, charAt$1(string, 0)) && ((second = charAt$1(string, 1)) === ':' || !normalized && second === '|');
	};

	// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
	var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
	  var third;
	  return string.length > 1 && isWindowsDriveLetter(stringSlice$1(string, 0, 2)) && (string.length === 2 || (third = charAt$1(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
	};

	// https://url.spec.whatwg.org/#single-dot-path-segment
	var isSingleDot = function isSingleDot(segment) {
	  return segment === '.' || toLowerCase(segment) === '%2e';
	};

	// https://url.spec.whatwg.org/#double-dot-path-segment
	var isDoubleDot = function isDoubleDot(segment) {
	  segment = toLowerCase(segment);
	  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
	};

	// States:
	var SCHEME_START = {};
	var SCHEME = {};
	var NO_SCHEME = {};
	var SPECIAL_RELATIVE_OR_AUTHORITY = {};
	var PATH_OR_AUTHORITY = {};
	var RELATIVE = {};
	var RELATIVE_SLASH = {};
	var SPECIAL_AUTHORITY_SLASHES = {};
	var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
	var AUTHORITY = {};
	var HOST = {};
	var HOSTNAME = {};
	var PORT = {};
	var FILE = {};
	var FILE_SLASH = {};
	var FILE_HOST = {};
	var PATH_START = {};
	var PATH = {};
	var CANNOT_BE_A_BASE_URL_PATH = {};
	var QUERY = {};
	var FRAGMENT = {};
	var _URLState = function URLState(url, isBase, base) {
	  var urlString = $toString$1(url);
	  var baseState, failure, searchParams;
	  if (isBase) {
	    failure = this.parse(urlString);
	    if (failure) throw new TypeError$2(failure);
	    this.searchParams = null;
	  } else {
	    if (base !== undefined) baseState = new _URLState(base, true);
	    failure = this.parse(urlString, null, baseState);
	    if (failure) throw new TypeError$2(failure);
	    searchParams = getInternalSearchParamsState(new URLSearchParams());
	    searchParams.bindURL(this);
	    this.searchParams = searchParams;
	  }
	};
	_URLState.prototype = {
	  type: 'URL',
	  // https://url.spec.whatwg.org/#url-parsing
	  // eslint-disable-next-line max-statements -- TODO
	  parse: function parse(input, stateOverride, base) {
	    var url = this;
	    var state = stateOverride || SCHEME_START;
	    var pointer = 0;
	    var buffer = '';
	    var seenAt = false;
	    var seenBracket = false;
	    var seenPasswordToken = false;
	    var codePoints, chr, bufferCodePoints, failure;
	    input = $toString$1(input);
	    if (!stateOverride) {
	      url.scheme = '';
	      url.username = '';
	      url.password = '';
	      url.host = null;
	      url.port = null;
	      url.path = [];
	      url.query = null;
	      url.fragment = null;
	      url.cannotBeABaseURL = false;
	      input = replace$1(input, LEADING_C0_CONTROL_OR_SPACE, '');
	      input = replace$1(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
	    }
	    input = replace$1(input, TAB_AND_NEW_LINE, '');
	    codePoints = arrayFrom(input);
	    while (pointer <= codePoints.length) {
	      chr = codePoints[pointer];
	      switch (state) {
	        case SCHEME_START:
	          if (chr && exec$1(ALPHA, chr)) {
	            buffer += toLowerCase(chr);
	            state = SCHEME;
	          } else if (!stateOverride) {
	            state = NO_SCHEME;
	            continue;
	          } else return INVALID_SCHEME;
	          break;
	        case SCHEME:
	          if (chr && exec$1(ALPHANUMERIC_PLUS_MINUS_DOT, chr)) {
	            buffer += toLowerCase(chr);
	          } else if (chr === ':') {
	            if (stateOverride && (url.isSpecial() !== hasOwn$1(specialSchemes, buffer) || buffer === 'file' && (url.includesCredentials() || url.port !== null) || url.scheme === 'file' && url.host === '')) return;
	            url.scheme = buffer;
	            if (stateOverride) {
	              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
	              return;
	            }
	            buffer = '';
	            if (url.scheme === 'file') {
	              state = FILE;
	            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
	              state = SPECIAL_RELATIVE_OR_AUTHORITY;
	            } else if (url.isSpecial()) {
	              state = SPECIAL_AUTHORITY_SLASHES;
	            } else if (codePoints[pointer + 1] === '/') {
	              state = PATH_OR_AUTHORITY;
	              pointer++;
	            } else {
	              url.cannotBeABaseURL = true;
	              push$1(url.path, '');
	              state = CANNOT_BE_A_BASE_URL_PATH;
	            }
	          } else if (!stateOverride) {
	            buffer = '';
	            state = NO_SCHEME;
	            pointer = 0;
	            continue;
	          } else return INVALID_SCHEME;
	          break;
	        case NO_SCHEME:
	          if (!base || base.cannotBeABaseURL && chr !== '#') return INVALID_SCHEME;
	          if (base.cannotBeABaseURL && chr === '#') {
	            url.scheme = base.scheme;
	            url.path = arraySlice(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            url.cannotBeABaseURL = true;
	            state = FRAGMENT;
	            break;
	          }
	          state = base.scheme === 'file' ? FILE : RELATIVE;
	          continue;
	        case SPECIAL_RELATIVE_OR_AUTHORITY:
	          if (chr === '/' && codePoints[pointer + 1] === '/') {
	            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	            pointer++;
	          } else {
	            state = RELATIVE;
	            continue;
	          }
	          break;
	        case PATH_OR_AUTHORITY:
	          if (chr === '/') {
	            state = AUTHORITY;
	            break;
	          } else {
	            state = PATH;
	            continue;
	          }
	        case RELATIVE:
	          url.scheme = base.scheme;
	          if (chr === EOF) {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.query = base.query;
	          } else if (chr === '/' || chr === '\\' && url.isSpecial()) {
	            state = RELATIVE_SLASH;
	          } else if (chr === '?') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            state = FRAGMENT;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            if (url.path.length) url.path.length--;
	            state = PATH;
	            continue;
	          }
	          break;
	        case RELATIVE_SLASH:
	          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
	            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          } else if (chr === '/') {
	            state = AUTHORITY;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            state = PATH;
	            continue;
	          }
	          break;
	        case SPECIAL_AUTHORITY_SLASHES:
	          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          if (chr !== '/' || codePoints[pointer + 1] !== '/') continue;
	          pointer++;
	          break;
	        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
	          if (chr !== '/' && chr !== '\\') {
	            state = AUTHORITY;
	            continue;
	          }
	          break;
	        case AUTHORITY:
	          if (chr === '@') {
	            if (seenAt) buffer = '%40' + buffer;
	            seenAt = true;
	            bufferCodePoints = arrayFrom(buffer);
	            for (var i = 0; i < bufferCodePoints.length; i++) {
	              var codePoint = bufferCodePoints[i];
	              if (codePoint === ':' && !seenPasswordToken) {
	                seenPasswordToken = true;
	                continue;
	              }
	              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
	              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
	            }
	            buffer = '';
	          } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
	            if (seenAt && buffer === '') return INVALID_AUTHORITY;
	            pointer -= arrayFrom(buffer).length + 1;
	            buffer = '';
	            state = HOST;
	          } else buffer += chr;
	          break;
	        case HOST:
	        case HOSTNAME:
	          if (stateOverride && url.scheme === 'file') {
	            state = FILE_HOST;
	            continue;
	          } else if (chr === ':' && !seenBracket) {
	            if (buffer === '') return INVALID_HOST;
	            if (stateOverride === HOSTNAME) return;
	            failure = url.parseHost(buffer);
	            if (failure) return failure;
	            buffer = '';
	            state = PORT;
	          } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
	            if (url.isSpecial() && buffer === '') return INVALID_HOST;
	            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
	            failure = url.parseHost(buffer);
	            if (failure) return failure;
	            buffer = '';
	            state = PATH_START;
	            if (stateOverride) return;
	            continue;
	          } else {
	            if (chr === '[') seenBracket = true;else if (chr === ']') seenBracket = false;
	            buffer += chr;
	          }
	          break;
	        case PORT:
	          if (exec$1(DIGIT, chr)) {
	            buffer += chr;
	          } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial() || stateOverride) {
	            if (buffer !== '') {
	              var port = parseInt$1(buffer, 10);
	              if (port > 0xFFFF) return INVALID_PORT;
	              url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
	              buffer = '';
	            }
	            if (stateOverride) return;
	            state = PATH_START;
	            continue;
	          } else return INVALID_PORT;
	          break;
	        case FILE:
	          url.scheme = 'file';
	          url.host = '';
	          if (chr === '/' || chr === '\\') state = FILE_SLASH;else if (base && base.scheme === 'file') {
	            switch (chr) {
	              case EOF:
	                url.host = base.host;
	                url.path = arraySlice(base.path);
	                url.query = base.query;
	                break;
	              case '?':
	                url.host = base.host;
	                url.path = arraySlice(base.path);
	                url.query = '';
	                state = QUERY;
	                break;
	              case '#':
	                url.host = base.host;
	                url.path = arraySlice(base.path);
	                url.query = base.query;
	                url.fragment = '';
	                state = FRAGMENT;
	                break;
	              default:
	                url.host = base.host;
	                if (!startsWithWindowsDriveLetter(join$1(arraySlice(codePoints, pointer), ''))) {
	                  url.path = arraySlice(base.path);
	                  url.shortenPath();
	                }
	                state = PATH;
	                continue;
	            }
	          } else {
	            state = PATH;
	            continue;
	          }
	          break;
	        case FILE_SLASH:
	          if (chr === '/' || chr === '\\') {
	            state = FILE_HOST;
	            break;
	          }
	          if (base && base.scheme === 'file') {
	            url.host = base.host;
	            if (!startsWithWindowsDriveLetter(join$1(arraySlice(codePoints, pointer), '')) && isWindowsDriveLetter(base.path[0], true)) push$1(url.path, base.path[0]);
	          }
	          state = PATH;
	          continue;
	        case FILE_HOST:
	          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
	            if (!stateOverride && isWindowsDriveLetter(buffer)) {
	              state = PATH;
	            } else if (buffer === '') {
	              url.host = '';
	              if (stateOverride) return;
	              state = PATH_START;
	            } else {
	              failure = url.parseHost(buffer);
	              if (failure) return failure;
	              if (url.host === 'localhost') url.host = '';
	              if (stateOverride) return;
	              buffer = '';
	              state = PATH_START;
	            }
	            continue;
	          } else buffer += chr;
	          break;
	        case PATH_START:
	          if (url.isSpecial()) {
	            state = PATH;
	            if (chr !== '/' && chr !== '\\') continue;
	          } else if (!stateOverride && chr === '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (!stateOverride && chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            state = PATH;
	            if (chr !== '/') continue;
	          }
	          break;
	        case PATH:
	          if (chr === EOF || chr === '/' || chr === '\\' && url.isSpecial() || !stateOverride && (chr === '?' || chr === '#')) {
	            if (isDoubleDot(buffer)) {
	              url.shortenPath();
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push$1(url.path, '');
	              }
	            } else if (isSingleDot(buffer)) {
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push$1(url.path, '');
	              }
	            } else {
	              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
	                if (url.host !== null && url.host !== '') url.host = '';
	                buffer = charAt$1(buffer, 0) + ':'; // normalize windows drive letter
	              }
	              push$1(url.path, buffer);
	            }
	            buffer = '';
	            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
	              while (url.path.length > 1 && url.path[0] === '') {
	                shift$1(url.path);
	              }
	            }
	            if (chr === '?') {
	              url.query = '';
	              state = QUERY;
	            } else if (chr === '#') {
	              url.fragment = '';
	              state = FRAGMENT;
	            }
	          } else {
	            buffer += percentEncode(chr, pathPercentEncodeSet);
	          }
	          break;
	        case CANNOT_BE_A_BASE_URL_PATH:
	          if (chr === '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
	          }
	          break;
	        case QUERY:
	          if (!stateOverride && chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            url.query += percentEncode(chr, url.isSpecial() ? specialQueryPercentEncodeSet : queryPercentEncodeSet);
	          }
	          break;
	        case FRAGMENT:
	          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
	          break;
	      }
	      pointer++;
	    }
	  },
	  // https://url.spec.whatwg.org/#host-parsing
	  parseHost: function parseHost(input) {
	    var result, codePoints, index;
	    if (charAt$1(input, 0) === '[') {
	      if (charAt$1(input, input.length - 1) !== ']') return INVALID_HOST;
	      result = parseIPv6(stringSlice$1(input, 1, -1));
	      if (!result) return INVALID_HOST;
	      this.host = result;
	      // opaque host
	    } else if (!this.isSpecial()) {
	      if (exec$1(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
	      result = '';
	      codePoints = arrayFrom(input);
	      for (index = 0; index < codePoints.length; index++) {
	        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
	      }
	      this.host = result;
	    } else {
	      input = toASCII(input);
	      if (exec$1(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
	      if (endsInNumber(input)) {
	        result = parseIPv4(input);
	        if (result === null) return INVALID_HOST;
	        this.host = result;
	      } else {
	        this.host = input;
	      }
	    }
	  },
	  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
	  cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
	    return this.host === null || this.host === '' || this.cannotBeABaseURL || this.scheme === 'file';
	  },
	  // https://url.spec.whatwg.org/#include-credentials
	  includesCredentials: function includesCredentials() {
	    return this.username !== '' || this.password !== '';
	  },
	  // https://url.spec.whatwg.org/#is-special
	  isSpecial: function isSpecial() {
	    return hasOwn$1(specialSchemes, this.scheme);
	  },
	  // https://url.spec.whatwg.org/#shorten-a-urls-path
	  shortenPath: function shortenPath() {
	    var path = this.path;
	    var pathSize = path.length;
	    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
	      path.length--;
	    }
	  },
	  // https://url.spec.whatwg.org/#concept-url-serializer
	  serialize: function serialize() {
	    var url = this;
	    var scheme = url.scheme;
	    var username = url.username;
	    var password = url.password;
	    var host = url.host;
	    var port = url.port;
	    var path = url.path;
	    var query = url.query;
	    var fragment = url.fragment;
	    var output = scheme + ':';
	    if (host !== null) {
	      output += '//';
	      if (url.includesCredentials()) {
	        output += username + (password ? ':' + password : '') + '@';
	      }
	      output += serializeHost(host);
	      if (port !== null) output += ':' + port;
	    } else if (scheme === 'file') output += '//';
	    if (host === null && !url.cannotBeABaseURL && path.length > 1 && path[0] === '') output += '/.';
	    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join$1(path, '/') : '';
	    if (query !== null) output += '?' + query;
	    if (fragment !== null) output += '#' + fragment;
	    return output;
	  },
	  // https://url.spec.whatwg.org/#dom-url-href
	  setHref: function setHref(href) {
	    var failure = this.parse(href);
	    if (failure) throw new TypeError$2(failure);
	    this.searchParams.update();
	  },
	  // https://url.spec.whatwg.org/#dom-url-origin
	  getOrigin: function getOrigin() {
	    var scheme = this.scheme;
	    var port = this.port;
	    if (scheme === 'blob') try {
	      return new URLConstructor(this.path[0]).origin;
	    } catch (error) {
	      return 'null';
	    }
	    if (scheme === 'file' || !this.isSpecial()) return 'null';
	    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
	  },
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  getProtocol: function getProtocol() {
	    return this.scheme + ':';
	  },
	  setProtocol: function setProtocol(protocol) {
	    this.parse($toString$1(protocol) + ':', SCHEME_START);
	  },
	  // https://url.spec.whatwg.org/#dom-url-username
	  getUsername: function getUsername() {
	    return this.username;
	  },
	  setUsername: function setUsername(username) {
	    var codePoints = arrayFrom($toString$1(username));
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    this.username = '';
	    for (var i = 0; i < codePoints.length; i++) {
	      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	    }
	  },
	  // https://url.spec.whatwg.org/#dom-url-password
	  getPassword: function getPassword() {
	    return this.password;
	  },
	  setPassword: function setPassword(password) {
	    var codePoints = arrayFrom($toString$1(password));
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    this.password = '';
	    for (var i = 0; i < codePoints.length; i++) {
	      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	    }
	  },
	  // https://url.spec.whatwg.org/#dom-url-host
	  getHost: function getHost() {
	    var host = this.host;
	    var port = this.port;
	    return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
	  },
	  setHost: function setHost(host) {
	    if (this.cannotBeABaseURL) return;
	    this.parse(host, HOST);
	  },
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  getHostname: function getHostname() {
	    var host = this.host;
	    return host === null ? '' : serializeHost(host);
	  },
	  setHostname: function setHostname(hostname) {
	    if (this.cannotBeABaseURL) return;
	    this.parse(hostname, HOSTNAME);
	  },
	  // https://url.spec.whatwg.org/#dom-url-port
	  getPort: function getPort() {
	    var port = this.port;
	    return port === null ? '' : $toString$1(port);
	  },
	  setPort: function setPort(port) {
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    port = $toString$1(port);
	    if (port === '') this.port = null;else this.parse(port, PORT);
	  },
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  getPathname: function getPathname() {
	    var path = this.path;
	    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join$1(path, '/') : '';
	  },
	  setPathname: function setPathname(pathname) {
	    if (this.cannotBeABaseURL) return;
	    this.path = [];
	    this.parse(pathname, PATH_START);
	  },
	  // https://url.spec.whatwg.org/#dom-url-search
	  getSearch: function getSearch() {
	    var query = this.query;
	    return query ? '?' + query : '';
	  },
	  setSearch: function setSearch(search) {
	    search = $toString$1(search);
	    if (search === '') {
	      this.query = null;
	    } else {
	      if (charAt$1(search, 0) === '?') search = stringSlice$1(search, 1);
	      this.query = '';
	      this.parse(search, QUERY);
	    }
	    this.searchParams.update();
	  },
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  getSearchParams: function getSearchParams() {
	    return this.searchParams.facade;
	  },
	  // https://url.spec.whatwg.org/#dom-url-hash
	  getHash: function getHash() {
	    var fragment = this.fragment;
	    return fragment ? '#' + fragment : '';
	  },
	  setHash: function setHash(hash) {
	    hash = $toString$1(hash);
	    if (hash === '') {
	      this.fragment = null;
	      return;
	    }
	    if (charAt$1(hash, 0) === '#') hash = stringSlice$1(hash, 1);
	    this.fragment = '';
	    this.parse(hash, FRAGMENT);
	  },
	  update: function update() {
	    this.query = this.searchParams.serialize() || null;
	  }
	};

	// `URL` constructor
	// https://url.spec.whatwg.org/#url-class
	var URLConstructor = function URL(url /* , base */) {
	  var that = anInstance$1(this, URLPrototype);
	  var base = validateArgumentsLength$1(arguments.length, 1) > 1 ? arguments[1] : undefined;
	  var state = setInternalState$1(that, new _URLState(url, false, base));
	  if (!DESCRIPTORS$1) {
	    that.href = state.serialize();
	    that.origin = state.getOrigin();
	    that.protocol = state.getProtocol();
	    that.username = state.getUsername();
	    that.password = state.getPassword();
	    that.host = state.getHost();
	    that.hostname = state.getHostname();
	    that.port = state.getPort();
	    that.pathname = state.getPathname();
	    that.search = state.getSearch();
	    that.searchParams = state.getSearchParams();
	    that.hash = state.getHash();
	  }
	};
	var URLPrototype = URLConstructor.prototype;
	var accessorDescriptor = function accessorDescriptor(getter, setter) {
	  return {
	    get: function get() {
	      return getInternalURLState(this)[getter]();
	    },
	    set: setter && function (value) {
	      return getInternalURLState(this)[setter](value);
	    },
	    configurable: true,
	    enumerable: true
	  };
	};
	if (DESCRIPTORS$1) {
	  // `URL.prototype.href` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-href
	  defineBuiltInAccessor$1(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
	  // `URL.prototype.origin` getter
	  // https://url.spec.whatwg.org/#dom-url-origin
	  defineBuiltInAccessor$1(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
	  // `URL.prototype.protocol` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  defineBuiltInAccessor$1(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
	  // `URL.prototype.username` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-username
	  defineBuiltInAccessor$1(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
	  // `URL.prototype.password` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-password
	  defineBuiltInAccessor$1(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
	  // `URL.prototype.host` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-host
	  defineBuiltInAccessor$1(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
	  // `URL.prototype.hostname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  defineBuiltInAccessor$1(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
	  // `URL.prototype.port` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-port
	  defineBuiltInAccessor$1(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
	  // `URL.prototype.pathname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  defineBuiltInAccessor$1(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
	  // `URL.prototype.search` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-search
	  defineBuiltInAccessor$1(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
	  // `URL.prototype.searchParams` getter
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  defineBuiltInAccessor$1(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
	  // `URL.prototype.hash` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hash
	  defineBuiltInAccessor$1(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
	}

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	defineBuiltIn$1(URLPrototype, 'toJSON', function toJSON() {
	  return getInternalURLState(this).serialize();
	}, {
	  enumerable: true
	});

	// `URL.prototype.toString` method
	// https://url.spec.whatwg.org/#URL-stringification-behavior
	defineBuiltIn$1(URLPrototype, 'toString', function toString() {
	  return getInternalURLState(this).serialize();
	}, {
	  enumerable: true
	});
	if (NativeURL) {
	  var nativeCreateObjectURL = NativeURL.createObjectURL;
	  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
	  // `URL.createObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
	  if (nativeCreateObjectURL) defineBuiltIn$1(URLConstructor, 'createObjectURL', bind$1(nativeCreateObjectURL, NativeURL));
	  // `URL.revokeObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
	  if (nativeRevokeObjectURL) defineBuiltIn$1(URLConstructor, 'revokeObjectURL', bind$1(nativeRevokeObjectURL, NativeURL));
	}
	setToStringTag$1(URLConstructor, 'URL');
	$$9({
	  global: true,
	  constructor: true,
	  forced: !USE_NATIVE_URL$1,
	  sham: !DESCRIPTORS$1
	}, {
	  URL: URLConstructor
	});

	require('../modules/es.array.iterator');
	require('../modules/es.string.from-code-point');
	var $$8 = require('../internals/export');
	var globalThis$2 = require('../internals/global-this');
	var safeGetBuiltIn = require('../internals/safe-get-built-in');
	var getBuiltIn = require('../internals/get-built-in');
	var call$1 = require('../internals/function-call');
	var uncurryThis$1 = require('../internals/function-uncurry-this');
	var DESCRIPTORS = require('../internals/descriptors');
	var USE_NATIVE_URL = require('../internals/url-constructor-detection');
	var defineBuiltIn = require('../internals/define-built-in');
	var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
	var defineBuiltIns$1 = require('../internals/define-built-ins');
	var setToStringTag = require('../internals/set-to-string-tag');
	var createIteratorConstructor = require('../internals/iterator-create-constructor');
	var InternalStateModule = require('../internals/internal-state');
	var anInstance = require('../internals/an-instance');
	var isCallable = require('../internals/is-callable');
	var hasOwn = require('../internals/has-own-property');
	var bind = require('../internals/function-bind-context');
	var classof$2 = require('../internals/classof');
	var anObject = require('../internals/an-object');
	var isObject$5 = require('../internals/is-object');
	var $toString = require('../internals/to-string');
	var create = require('../internals/object-create');
	var createPropertyDescriptor = require('../internals/create-property-descriptor');
	var getIterator = require('../internals/get-iterator');
	var getIteratorMethod = require('../internals/get-iterator-method');
	var createIterResultObject = require('../internals/create-iter-result-object');
	var validateArgumentsLength = require('../internals/validate-arguments-length');
	var wellKnownSymbol = require('../internals/well-known-symbol');
	var arraySort = require('../internals/array-sort');
	var ITERATOR = wellKnownSymbol('iterator');
	var URL_SEARCH_PARAMS = 'URLSearchParams';
	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
	var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
	var nativeFetch = safeGetBuiltIn('fetch');
	var NativeRequest = safeGetBuiltIn('Request');
	var Headers = safeGetBuiltIn('Headers');
	var RequestPrototype = NativeRequest && NativeRequest.prototype;
	var HeadersPrototype = Headers && Headers.prototype;
	var TypeError$1 = globalThis$2.TypeError;
	var encodeURIComponent$1 = globalThis$2.encodeURIComponent;
	var fromCharCode = String.fromCharCode;
	var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
	var $parseInt = parseInt;
	var charAt = uncurryThis$1(''.charAt);
	var join = uncurryThis$1([].join);
	var push = uncurryThis$1([].push);
	var replace = uncurryThis$1(''.replace);
	var shift = uncurryThis$1([].shift);
	var splice = uncurryThis$1([].splice);
	var split = uncurryThis$1(''.split);
	var stringSlice = uncurryThis$1(''.slice);
	var exec = uncurryThis$1(/./.exec);
	var plus = /\+/g;
	var FALLBACK_REPLACER = "\uFFFD";
	var VALID_HEX = /^[0-9a-f]+$/i;
	var parseHexOctet = function parseHexOctet(string, start) {
	  var substr = stringSlice(string, start, start + 2);
	  if (!exec(VALID_HEX, substr)) return NaN;
	  return $parseInt(substr, 16);
	};
	var getLeadingOnes = function getLeadingOnes(octet) {
	  var count = 0;
	  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
	    count++;
	  }
	  return count;
	};
	var utf8Decode = function utf8Decode(octets) {
	  var codePoint = null;
	  var length = octets.length;
	  switch (length) {
	    case 1:
	      codePoint = octets[0];
	      break;
	    case 2:
	      codePoint = (octets[0] & 0x1F) << 6 | octets[1] & 0x3F;
	      break;
	    case 3:
	      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | octets[2] & 0x3F;
	      break;
	    case 4:
	      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | octets[3] & 0x3F;
	      break;
	  }

	  // reject surrogates, overlong encodings, and out-of-range codepoints
	  if (codePoint === null || codePoint > 0x10FFFF || codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint < (length > 3 ? 0x10000 : length > 2 ? 0x800 : length > 1 ? 0x80 : 0)) return null;
	  return codePoint;
	};

	/* eslint-disable max-statements, max-depth -- ok */
	var decode = function decode(input) {
	  input = replace(input, plus, ' ');
	  var length = input.length;
	  var result = '';
	  var i = 0;
	  while (i < length) {
	    var decodedChar = charAt(input, i);
	    if (decodedChar === '%') {
	      if (charAt(input, i + 1) === '%' || i + 3 > length) {
	        result += '%';
	        i++;
	        continue;
	      }
	      var octet = parseHexOctet(input, i + 1);

	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (octet !== octet) {
	        result += decodedChar;
	        i++;
	        continue;
	      }
	      i += 2;
	      var byteSequenceLength = getLeadingOnes(octet);
	      if (byteSequenceLength === 0) {
	        decodedChar = fromCharCode(octet);
	      } else {
	        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
	          result += FALLBACK_REPLACER;
	          i++;
	          continue;
	        }
	        var octets = [octet];
	        var sequenceIndex = 1;
	        while (sequenceIndex < byteSequenceLength) {
	          i++;
	          if (i + 3 > length || charAt(input, i) !== '%') break;
	          var nextByte = parseHexOctet(input, i + 1);

	          // eslint-disable-next-line no-self-compare -- NaN check
	          if (nextByte !== nextByte || nextByte > 191 || nextByte < 128) break;

	          // https://encoding.spec.whatwg.org/#utf-8-decoder - position-specific byte ranges
	          if (sequenceIndex === 1) {
	            if (octet === 0xE0 && nextByte < 0xA0) break;
	            if (octet === 0xED && nextByte > 0x9F) break;
	            if (octet === 0xF0 && nextByte < 0x90) break;
	            if (octet === 0xF4 && nextByte > 0x8F) break;
	          }
	          push(octets, nextByte);
	          i += 2;
	          sequenceIndex++;
	        }
	        if (octets.length !== byteSequenceLength) {
	          result += FALLBACK_REPLACER;
	          continue;
	        }
	        var codePoint = utf8Decode(octets);
	        if (codePoint === null) {
	          for (var replacement = 0; replacement < byteSequenceLength; replacement++) result += FALLBACK_REPLACER;
	          i++;
	          continue;
	        } else {
	          decodedChar = fromCodePoint(codePoint);
	        }
	      }
	    }
	    result += decodedChar;
	    i++;
	  }
	  return result;
	};
	/* eslint-enable max-statements, max-depth -- ok */

	var find = /[!'()~]|%20/g;
	var replacements = {
	  '!': '%21',
	  "'": '%27',
	  '(': '%28',
	  ')': '%29',
	  '~': '%7E',
	  '%20': '+'
	};
	var replacer = function replacer(match) {
	  return replacements[match];
	};
	var _serialize = function serialize(it) {
	  return replace(encodeURIComponent$1(it), find, replacer);
	};
	var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
	  setInternalState(this, {
	    type: URL_SEARCH_PARAMS_ITERATOR,
	    target: getInternalParamsState(params).entries,
	    index: 0,
	    kind: kind
	  });
	}, URL_SEARCH_PARAMS, function next() {
	  var state = getInternalIteratorState(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = null;
	    return createIterResultObject(undefined, true);
	  }
	  var entry = target[index];
	  switch (state.kind) {
	    case 'keys':
	      return createIterResultObject(entry.key, false);
	    case 'values':
	      return createIterResultObject(entry.value, false);
	  }
	  return createIterResultObject([entry.key, entry.value], false);
	}, true);
	var URLSearchParamsState = function URLSearchParamsState(init) {
	  this.entries = [];
	  this.url = null;
	  if (init !== undefined) {
	    if (isObject$5(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
	  }
	};
	URLSearchParamsState.prototype = {
	  type: URL_SEARCH_PARAMS,
	  bindURL: function bindURL(url) {
	    this.url = url;
	    this.update();
	  },
	  parseObject: function parseObject(object) {
	    var entries = this.entries;
	    var iteratorMethod = getIteratorMethod(object);
	    var iterator, next, step, entryIterator, entryNext, first, second;
	    if (iteratorMethod) {
	      iterator = getIterator(object, iteratorMethod);
	      next = iterator.next;
	      while (!(step = call$1(next, iterator)).done) {
	        entryIterator = getIterator(anObject(step.value));
	        entryNext = entryIterator.next;
	        if ((first = call$1(entryNext, entryIterator)).done || (second = call$1(entryNext, entryIterator)).done || !call$1(entryNext, entryIterator).done) throw new TypeError$1('Expected sequence with length 2');
	        push(entries, {
	          key: $toString(first.value),
	          value: $toString(second.value)
	        });
	      }
	    } else for (var key in object) if (hasOwn(object, key)) {
	      push(entries, {
	        key: key,
	        value: $toString(object[key])
	      });
	    }
	  },
	  parseQuery: function parseQuery(query) {
	    if (query) {
	      var entries = this.entries;
	      var attributes = split(query, '&');
	      var index = 0;
	      var attribute, entry;
	      while (index < attributes.length) {
	        attribute = attributes[index++];
	        if (attribute.length) {
	          entry = split(attribute, '=');
	          push(entries, {
	            key: decode(shift(entry)),
	            value: decode(join(entry, '='))
	          });
	        }
	      }
	    }
	  },
	  serialize: function serialize() {
	    var entries = this.entries;
	    var result = [];
	    var index = 0;
	    var entry;
	    while (index < entries.length) {
	      entry = entries[index++];
	      push(result, _serialize(entry.key) + '=' + _serialize(entry.value));
	    }
	    return join(result, '&');
	  },
	  update: function update() {
	    this.entries.length = 0;
	    this.parseQuery(this.url.query);
	  },
	  updateURL: function updateURL() {
	    if (this.url) this.url.update();
	  }
	};

	// `URLSearchParams` constructor
	// https://url.spec.whatwg.org/#interface-urlsearchparams
	var URLSearchParamsConstructor = function URLSearchParams(/* init */
	) {
	  anInstance(this, URLSearchParamsPrototype);
	  var init = arguments.length > 0 ? arguments[0] : undefined;
	  var state = setInternalState(this, new URLSearchParamsState(init));
	  if (!DESCRIPTORS) this.size = state.entries.length;
	};
	var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
	defineBuiltIns$1(URLSearchParamsPrototype, {
	  // `URLSearchParams.prototype.append` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
	  append: function append(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength(arguments.length, 2);
	    push(state.entries, {
	      key: $toString(name),
	      value: $toString(value)
	    });
	    if (!DESCRIPTORS) this.size++;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.delete` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
	  'delete': function _delete(name /* , value */) {
	    var state = getInternalParamsState(this);
	    var length = validateArgumentsLength(arguments.length, 1);
	    var entries = state.entries;
	    var key = $toString(name);
	    var $value = length < 2 ? undefined : arguments[1];
	    var value = $value === undefined ? $value : $toString($value);
	    var index = 0;
	    while (index < entries.length) {
	      var entry = entries[index];
	      if (entry.key === key && (value === undefined || entry.value === value)) {
	        splice(entries, index, 1);
	      } else index++;
	    }
	    if (!DESCRIPTORS) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.get` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
	  get: function get(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength(arguments.length, 1);
	    var key = $toString(name);
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) return entries[index].value;
	    }
	    return null;
	  },
	  // `URLSearchParams.prototype.getAll` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
	  getAll: function getAll(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength(arguments.length, 1);
	    var key = $toString(name);
	    var result = [];
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) push(result, entries[index].value);
	    }
	    return result;
	  },
	  // `URLSearchParams.prototype.has` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
	  has: function has(name /* , value */) {
	    var entries = getInternalParamsState(this).entries;
	    var length = validateArgumentsLength(arguments.length, 1);
	    var key = $toString(name);
	    var $value = length < 2 ? undefined : arguments[1];
	    var value = $value === undefined ? $value : $toString($value);
	    var index = 0;
	    while (index < entries.length) {
	      var entry = entries[index++];
	      if (entry.key === key && (value === undefined || entry.value === value)) return true;
	    }
	    return false;
	  },
	  // `URLSearchParams.prototype.set` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
	  set: function set(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength(arguments.length, 2);
	    var entries = state.entries;
	    var found = false;
	    var key = $toString(name);
	    var val = $toString(value);
	    var index = 0;
	    var entry;
	    for (; index < entries.length; index++) {
	      entry = entries[index];
	      if (entry.key === key) {
	        if (found) splice(entries, index--, 1);else {
	          found = true;
	          entry.value = val;
	        }
	      }
	    }
	    if (!found) push(entries, {
	      key: key,
	      value: val
	    });
	    if (!DESCRIPTORS) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.sort` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
	  sort: function sort() {
	    var state = getInternalParamsState(this);
	    arraySort(state.entries, function (a, b) {
	      return a.key > b.key ? 1 : -1;
	    });
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.forEach` method
	  forEach: function forEach(callback /* , thisArg */) {
	    var entries = getInternalParamsState(this).entries;
	    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
	    var index = 0;
	    var entry;
	    while (index < entries.length) {
	      entry = entries[index++];
	      boundFunction(entry.value, entry.key, this);
	    }
	  },
	  // `URLSearchParams.prototype.keys` method
	  keys: function keys() {
	    return new URLSearchParamsIterator(this, 'keys');
	  },
	  // `URLSearchParams.prototype.values` method
	  values: function values() {
	    return new URLSearchParamsIterator(this, 'values');
	  },
	  // `URLSearchParams.prototype.entries` method
	  entries: function entries() {
	    return new URLSearchParamsIterator(this, 'entries');
	  }
	}, {
	  enumerable: true
	});

	// `URLSearchParams.prototype[@@iterator]` method
	defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
	  name: 'entries'
	});

	// `URLSearchParams.prototype.toString` method
	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
	defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
	  return getInternalParamsState(this).serialize();
	}, {
	  enumerable: true
	});

	// `URLSearchParams.prototype.size` getter
	// https://url.spec.whatwg.org/#dom-urlsearchparams-size
	if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
	  get: function size() {
	    return getInternalParamsState(this).entries.length;
	  },
	  configurable: true,
	  enumerable: true
	});
	setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
	$$8({
	  global: true,
	  constructor: true,
	  forced: !USE_NATIVE_URL
	}, {
	  URLSearchParams: URLSearchParamsConstructor
	});

	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
	if (!USE_NATIVE_URL && isCallable(Headers)) {
	  var headersHas = uncurryThis$1(HeadersPrototype.has);
	  var headersSet = uncurryThis$1(HeadersPrototype.set);
	  var wrapRequestOptions = function wrapRequestOptions(init) {
	    if (isObject$5(init)) {
	      var body = init.body;
	      var headers;
	      if (classof$2(body) === URL_SEARCH_PARAMS) {
	        headers = init.headers ? new Headers(init.headers) : new Headers();
	        if (!headersHas(headers, 'content-type')) {
	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	        return create(init, {
	          body: createPropertyDescriptor(0, $toString(body)),
	          headers: createPropertyDescriptor(0, headers)
	        });
	      }
	    }
	    return init;
	  };
	  if (isCallable(nativeFetch)) {
	    $$8({
	      global: true,
	      enumerable: true,
	      dontCallGetSet: true,
	      forced: true
	    }, {
	      fetch: function fetch(input /* , init */) {
	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	      }
	    });
	  }
	  if (isCallable(NativeRequest)) {
	    var RequestConstructor = function Request(input /* , init */) {
	      anInstance(this, RequestPrototype);
	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	    };
	    RequestPrototype.constructor = RequestConstructor;
	    RequestConstructor.prototype = RequestPrototype;
	    $$8({
	      global: true,
	      constructor: true,
	      dontCallGetSet: true,
	      forced: true
	    }, {
	      Request: RequestConstructor
	    });
	  }
	}
	module.exports = {
	  URLSearchParams: URLSearchParamsConstructor,
	  getState: getInternalParamsState
	};

	var $$7 = require('../internals/export');
	var call = require('../internals/function-call');

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	$$7({
	  target: 'URL',
	  proto: true,
	  enumerable: true
	}, {
	  toJSON: function toJSON() {
	    return call(URL.prototype.toString, this);
	  }
	});

	/**
	 * sdk/html.js — Single HTML sanitization (XSS protection)
	 *
	 * Eliminates:
	 *   D-03a — 4 copies of escHtml with different character sets
	 *   D-03b — escAttr now part of escHtml with { attr: true }
	 *
	 * Usage:
	 *   import { escHtml, escAttr } from '../sdk/html'
	 */

	var HTML_ESC_MAP = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#039;'
	};
	var HTML_ESC_RE = /[&<>"']/g;
	function escHtml(str) {
	  if (!str) return '';
	  return String(str).replace(HTML_ESC_RE, function (m) {
	    return HTML_ESC_MAP[m];
	  });
	}

	/**
	 * sdk/lampa.js — UI helpers for Lampa API
	 *
	 * Eliminates:
	 *   D-18 — softRefresh() now in SDK
	 *   A-14 — Lampa.Input.edit boilerplate centralized
	 *   A-15 — Lampa.Select.show boilerplate (prevController) centralized
	 *   A-13 — Lampa.Storage.listener.follow with auto-unsubscribe
	 *
	 * Usage:
	 *   import { softRefresh, select, input, onStorageChange } from '../sdk/lampa'
	 */

	/**
	 * "Soft" refresh of current activity without page reload.
	 */
	function softRefresh() {
	  var activity = Lampa.Activity.active();
	  if (!activity) return;
	  if (activity.page) activity.page = 1;
	  Lampa.Activity.replace(activity);
	  activity.outdated = false;
	}

	/**
	 * Wrapper for Lampa.Select.show with automatic Controller toggle.
	 * Eliminates boilerplate `var prevController = Lampa.Controller.enabled().name`.
	 *
	 * @param {Object} opts
	 * @param {string} opts.title
	 * @param {Array} opts.items
	 * @param {Function} opts.onSelect — called with item (cancel already filtered out)
	 * @param {Function} [opts.onBack]
	 * @param {Function} [opts.onFullDraw]
	 * @returns {string} previous controller name
	 */
	function select(opts) {
	  var prevController = Lampa.Controller.enabled().name;
	  var items = (opts.items || []).map(function (item) {
	    // Add cancel flag if missing
	    if (item.cancel === undefined && item.title === 'Cancel') item.cancel = true;
	    return item;
	  });
	  Lampa.Select.show({
	    title: opts.title,
	    items: items,
	    onSelect: function onSelect(item) {
	      Lampa.Controller.toggle(prevController);
	      if (item && item.cancel) {
	        if (opts.onCancel) opts.onCancel();
	        return;
	      }
	      if (opts.onSelect) opts.onSelect(item);
	    },
	    onBack: function onBack() {
	      Lampa.Controller.toggle(prevController);
	      if (opts.onBack) opts.onBack();
	    },
	    onFullDraw: opts.onFullDraw
	  });
	  return prevController;
	}

	/**
	 * Wrapper for Lampa.Input.edit with default parameters.
	 *
	 * @param {Object} opts
	 * @param {string} opts.title
	 * @param {string} [opts.value]
	 * @param {string} [opts.align='center']
	 * @param {Function} opts.onSubmit — called with input string
	 * @returns {string} previous controller name
	 */
	function input(opts) {
	  var prevController = Lampa.Controller.enabled().name;
	  Lampa.Input.edit({
	    title: opts.title,
	    value: opts.value || '',
	    align: opts.align || 'center',
	    free: true,
	    nosave: true
	  }, function (val) {
	    // If user pressed Cancel, val may be null/undefined
	    if (val === null || val === undefined) {
	      Lampa.Controller.toggle(prevController);
	      if (opts.onCancel) opts.onCancel();
	      return;
	    }
	    Lampa.Controller.toggle(prevController);
	    if (opts.onSubmit) opts.onSubmit(val);
	  });
	  return prevController;
	}

	// ponytail: counter instead of boolean — batch operations fire multiple events
	var _publishSuppressed = 0;
	var STORAGE_ACTIVE_PROFILE = STORAGE_KEYS.ACTIVE_PROFILE;
	var STORAGE_ACTIVE_PROFILE_TS = STORAGE_KEYS.ACTIVE_PROFILE_TS;
	var STORAGE_PROFILES_TOPIC$1 = STORAGE_KEYS.PROFILES_TOPIC;
	var STORAGE_PROFILES_SYNC_TOPIC$1 = STORAGE_KEYS.PROFILES_SYNC;
	var STORAGE_PROFILES_CACHE = STORAGE_KEYS.PROFILES_CACHE;
	var STORAGE_PLUGIN_REGISTRY = STORAGE_KEYS.PLUGIN_REGISTRY;
	var STORAGE_PROFILE_PLUGIN_URLS = STORAGE_KEYS.PROFILE_PLUGIN_URLS;

	// ─── Sync Key Manifest ──────────────────────────────────

	var SYNC_KEY_MANIFEST = {
	  storage: [{
	    key: 'favorite',
	    label: 'favorite'
	  }, {
	    key: 'file_view',
	    label: 'file_view'
	  }, {
	    key: 'plugins',
	    label: 'plugins'
	  }, {
	    key: 'gramlink_sync_enabled',
	    label: 'gramlink_sync_enabled'
	  }, {
	    key: 'gramlink_heartbeat',
	    label: 'gramlink_heartbeat'
	  }, {
	    key: 'gramlink_broadcast',
	    label: 'gramlink_broadcast'
	  }, {
	    key: 'gramlink_device_label',
	    label: 'device_label'
	  }],
	  timestampPrefix: 'gramlink_ts_'
	};

	// ─── Device Key Registry ──────────────────────────────────
	// ponytail: flat prefix array, not a plugin system.
	// Add new prefixes here as Lampa core adds new settings.
	var DEVICE_KEY_PREFIXES$1 = ['player', 'player_', 'subtitles_', 'video_quality_', 'navigation_', 'interface_', 'background_', 'glass_', 'card_', 'poster_', 'animation_', 'scroll_', 'request_caching', 'cache_images', 'mask', 'light_version', 'menu_always', 'black_style', 'gramlink_heartbeat', 'gramlink_broadcast'];
	function isDeviceKey(key) {
	  return DEVICE_KEY_PREFIXES$1.some(function (p) {
	    return key === p || key.indexOf(p) === 0;
	  });
	}
	function updateSyncTimestamp(label) {
	  Lampa.Storage.set(SYNC_KEY_MANIFEST.timestampPrefix + label, String(Math.floor(Date.now() / 1000)));
	}
	function getSyncTimestamp(label) {
	  return parseInt(Lampa.Storage.get(SYNC_KEY_MANIFEST.timestampPrefix + label, '0'), 10);
	}
	function clearSyncTimestamps() {
	  SYNC_KEY_MANIFEST.storage.forEach(function (s) {
	    Lampa.Storage.set(SYNC_KEY_MANIFEST.timestampPrefix + s.label, '0');
	  });
	}

	// ponytail: no need to re-upload the whole profile.
	// Just clear local device-scoped keys back to Lampa defaults.
	function resetDeviceOverlay() {
	  var deviceId = getDeviceId();

	  // Clear device-scoped keys from localStorage
	  var keysToRemove = [];
	  for (var i = 0; i < localStorage.length; i++) {
	    var key = localStorage.key(i);
	    if (key && isDeviceKey(key)) keysToRemove.push(key);
	  }
	  keysToRemove.forEach(function (k) {
	    localStorage.removeItem(k);
	  });

	  // Publish reset delta so other devices know
	  var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	  if (profilesSyncTopicId) {
	    publishDeviceDelta(profilesSyncTopicId, 'device_setting', {
	      device_id: deviceId,
	      key: '__reset_overlay__',
	      value: null
	    }, 'all');
	  }
	}
	var BACKUP_PREFIX = 'gramlink_pbak_';

	// ─── Profile cache (for sidebar) ──────────────────────────

	function saveProfilesCache(profileMessages) {
	  var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  var cacheData = profileMessages.map(function (m) {
	    try {
	      var d = parseProfileMessage(m.text);
	      if (!d) return null;
	      var p = d.payload && d.payload.profile;
	      if (!p) return null;
	      return {
	        msgId: m.id,
	        name: p.name || 'Unnamed',
	        avatar: p.avatar || getAvatar(p.name),
	        updated: p.updated || 0,
	        isActive: String(m.id) === String(activeId)
	      };
	    } catch (e) {
	      return null;
	    }
	  }).filter(Boolean);
	  Lampa.Storage.set(STORAGE_PROFILES_CACHE, cacheData);
	}
	function getCachedProfiles() {
	  try {
	    var data = Lampa.Storage.get(STORAGE_PROFILES_CACHE, []);
	    return Array.isArray(data) ? data : [];
	  } catch (e) {
	    return [];
	  }
	}

	// ─── Plugin Registry ──────────────────────────────────────

	function getPluginRegistry() {
	  try {
	    var data = Lampa.Storage.get(STORAGE_PLUGIN_REGISTRY, []);
	    return Array.isArray(data) ? data : [];
	  } catch (e) {
	    return [];
	  }
	}
	function addToPluginRegistry(url, name) {
	  if (!url) return;
	  var registry = getPluginRegistry();
	  if (!registry.some(function (p) {
	    return p.url === url;
	  })) {
	    registry.push({
	      url: url,
	      name: name || extractNameFromUrl(url)
	    });
	    Lampa.Storage.set(STORAGE_PLUGIN_REGISTRY, registry);
	  }
	}
	function removeFromPluginRegistry(url) {
	  if (!url) return;
	  var registry = getPluginRegistry().filter(function (p) {
	    return p.url !== url;
	  });
	  Lampa.Storage.set(STORAGE_PLUGIN_REGISTRY, registry);
	}

	/** Fetch profiles from Telegram and populate cache (called on startup). */
	function refreshCacheFromTelegram() {
	  var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
	  if (!profilesTopicId) return;
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    var profileMessages = msgs.filter(function (m) {
	      if (!m.text) return false;
	      return !!parseProfileMessage(m.text);
	    });
	    if (profileMessages.length > 0) {
	      saveProfilesCache(profileMessages);
	    }
	  }).catch(function () {});
	}

	// ─── Profile list rendering ─────────────────────────────

	function refreshProfiles(profilesTopicId, profilesSyncTopicId, container, onDone) {
	  if (!profilesTopicId) return;
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    container.empty();
	    var profileMessages = msgs.filter(function (m) {
	      if (!m.text) return false;
	      return !!parseProfileMessage(m.text);
	    });
	    if (profileMessages.length === 0) {
	      container.html('<div class="gramlink-devices__empty">No profiles</div>');
	      if (onDone) onDone();
	      return;
	    }
	    var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');

	    // Build grid container
	    var $grid = $('<div class="profile-grid"></div>');

	    // 1. Add-card always first
	    var $addCard = $('<div class="profile-card profile-card--add selector" data-action="add">' + '<div class="profile-card__add-icon">+</div>' + '<div>' + (Lampa.Lang.translate('gramlink_create_profile') || 'Create profile') + '</div>' + '</div>');
	    $grid.append($addCard);

	    // 2. Profile cards
	    profileMessages.forEach(function (m) {
	      var d = parseProfileMessage(m.text);
	      if (!d) return;
	      var p = d.payload && d.payload.profile;
	      if (!p) return;
	      var isActive = String(activeId) === String(m.id);
	      var avatar = getAvatar(p.name);
	      var avatarColorVal = avatarColor(p.name);
	      var isUrl = isAvatarUrl(avatar);
	      var avatarHtml = isUrl ? '<img src="' + avatar + '" alt="">' : '<div class="gramlink-avatar" style="background:' + avatarColorVal + ';border-radius:50%;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">' + avatar + '</div>';
	      var nameSafe = (p.name || 'Unnamed').replace(/"/g, '&quot;');
	      var $card = $('<div class="profile-card selector' + (isActive ? ' profile-card--active' : '') + '" ' + 'data-id="' + m.id + '" ' + 'data-name="' + nameSafe + '" ' + 'data-active="' + isActive + '">' + '<div class="profile-card__avatar-wrap">' + avatarHtml + '</div>' + '<div class="profile-card__name">' + escHtml(p.name || 'Unnamed') + (isActive ? '<div class="profile-card__active-badge">● ' + (Lampa.Lang.translate('gramlink_profile_active') || 'Active') + '</div>' : '') + '</div>' + '</div>');
	      $grid.append($card);
	    });
	    container.empty().append($grid);

	    // Card click → switch profile (immediate)
	    $grid.find('.profile-card[data-id]').on('hover:enter', function () {
	      var id = $(this).data('id');
	      var isActive = $(this).data('active') === true;
	      if (isActive) return;
	      doSwitch(id, profilesTopicId, profilesSyncTopicId);
	    });

	    // Card 3-dot context menu → long-press already handled in hub.js
	    // Add-card click → create profile
	    $addCard.on('hover:enter', function () {
	      createProfile(profilesTopicId, profilesSyncTopicId, container);
	    });

	    // Save to cache for sidebar
	    saveProfilesCache(profileMessages);
	    if (onDone) onDone();
	  }).catch(function () {
	    if (onDone) onDone();
	  });
	}
	function doSwitch(msgId, profilesTopicId, profilesSyncTopicId, container) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) {
	    Lampa.Noty.show('Not connected');
	    return;
	  }
	  var currentId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  if (currentId) {
	    autoSaveProfile(currentId, profilesTopicId);
	  }
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    var target = findMessageById(msgs, msgId);
	    if (!target) {
	      Lampa.Noty.show('Profile not found');
	      return;
	    }
	    return client.downloadMessageFile(target).then(function (fileData) {
	      if (!fileData) {
	        Lampa.Noty.show('Profile file not found');
	        return;
	      }

	      // Store profile name from caption for settings button
	      var captionProfile = parseCaption(target.text);
	      var profileName = captionProfile && captionProfile.name;
	      if (profileName) Lampa.Storage.set('gramlink_active_profile_name', profileName);
	      var profileData;
	      try {
	        profileData = JSON.parse(fileData);
	      } catch (e) {
	        Lampa.Noty.show('Invalid profile data');
	        return;
	      }
	      var fileTimestamp = target.date || 0;
	      return replayDeltas(profilesSyncTopicId, msgId, fileTimestamp, profileData).then(function (mergedData) {
	        applyProfileData(mergedData, msgId);
	        softRefresh(); // ponytail: avoid full page reload
	      });
	    });
	  }).catch(function (e) {
	    console.error('GramLink', 'Switch profile error:', e);
	    Lampa.Noty.show('Switch failed');
	  });
	}

	// ─── Delta replay ───────────────────────────────────────

	function replayDeltas(profilesSyncTopicId, profileMsgId, sinceTimestamp, snapshotData) {
	  if (!profilesSyncTopicId) return Promise.resolve(snapshotData);
	  var client = GatewayClient.getInstance();
	  return client.getMessagesSince(profilesSyncTopicId, sinceTimestamp, 50).then(function (deltas) {
	    var data = deepClone(snapshotData);
	    deltas.forEach(function (msg) {
	      var d;
	      try {
	        d = JSON.parse(stripCodeFence$1(msg.text));
	      } catch (e) {
	        return;
	      }
	      if (!d || !d.meta || d.meta.type !== 'profile_delta') return;
	      if (String(d.meta.profile_msg_id) !== String(profileMsgId)) return;
	      var sub = d.meta.subtype;
	      var payload = d.payload;
	      if (sub === 'bookmark_add') {
	        if (!data.bookmarks) data.bookmarks = {};
	        if (!data.bookmarks.favorite) data.bookmarks.favorite = {};
	        data.bookmarks.favorite[payload.card_id] = payload.card;
	      } else if (sub === 'bookmark_remove') {
	        if (data.bookmarks && data.bookmarks.favorite) {
	          delete data.bookmarks.favorite[payload.card_id];
	        }
	      } else if (sub === 'timecode_update') {
	        if (!data.timeline) data.timeline = {};
	        data.timeline[payload.hash] = {
	          time: payload.time,
	          duration: payload.duration,
	          percent: payload.percent
	        };
	      } else if (sub === 'plugin_change') {
	        if (!data.plugins) data.plugins = [];
	        if (payload.action === 'add') {
	          data.plugins.push(payload.plugin);
	        } else if (payload.action === 'remove') {
	          data.plugins = data.plugins.filter(function (p) {
	            return p.url !== payload.plugin.url;
	          });
	        } else if (payload.action === 'toggle') {
	          data.plugins.forEach(function (p) {
	            if (p.url === payload.plugin.url) p.status = payload.plugin.status;
	          });
	        }
	      } else if (sub === 'device_plugin_status') {
	        if (!data.device_overrides) data.device_overrides = {};
	        if (!data.device_overrides[payload.device_id]) data.device_overrides[payload.device_id] = {};
	        if (!data.device_overrides[payload.device_id].plugins_status) data.device_overrides[payload.device_id].plugins_status = {};
	        data.device_overrides[payload.device_id].plugins_status[payload.url] = payload.status;
	      } else if (sub === 'device_plugin_custom') {
	        if (!data.device_overrides) data.device_overrides = {};
	        if (!data.device_overrides[payload.device_id]) data.device_overrides[payload.device_id] = {};
	        if (!data.device_overrides[payload.device_id].plugins_custom) data.device_overrides[payload.device_id].plugins_custom = {};
	        data.device_overrides[payload.device_id].plugins_custom[payload.url] = payload.custom;
	      } else if (sub === 'device_setting') {
	        if (!data.device_overrides) data.device_overrides = {};
	        if (!data.device_overrides[payload.device_id]) data.device_overrides[payload.device_id] = {};
	        if (!data.device_overrides[payload.device_id].settings) data.device_overrides[payload.device_id].settings = {};
	        data.device_overrides[payload.device_id].settings[payload.key] = payload.value;
	      }
	    });
	    return data;
	  }).catch(function () {
	    return snapshotData;
	  });
	}

	// ─── Apply profile data ─────────────────────────────────

	function applyProfileData(data, msgId) {
	  var deviceId = getDeviceId();
	  var override = data.device_overrides && data.device_overrides[deviceId];

	  // ── Bookmarks (always user-layer) ──
	  if (data.bookmarks && data.bookmarks.favorite) {
	    suppressPublish();
	    Lampa.Storage.set('favorite', data.bookmarks.favorite);
	    if (Lampa.Favorite && Lampa.Favorite.read) {
	      Lampa.Favorite.read();
	    }
	    unsuppressPublish();
	  }

	  // ── Timeline (always user-layer) ──
	  if (data.timeline) {
	    Lampa.Storage.set('file_view', data.timeline);
	  }

	  // ── Plugins (smart merge: respects user removals, accepts cross-device additions) ──
	  if (data.plugins) {
	    // Build profile plugin URL list from current profile data
	    var profileUrls = [];
	    for (var pi = 0; pi < data.plugins.length; pi++) {
	      var pu = data.plugins[pi].url;
	      if (pu) profileUrls.push(pu);
	    }

	    // Read previously-saved profile plugin URLs (from last activation on this device)
	    var knownProfileUrls;
	    try {
	      knownProfileUrls = JSON.parse(Lampa.Storage.get(STORAGE_PROFILE_PLUGIN_URLS, '[]')) || [];
	    } catch (e) {
	      knownProfileUrls = [];
	    }
	    var knownMap = {};
	    for (var ki = 0; ki < knownProfileUrls.length; ki++) {
	      knownMap[knownProfileUrls[ki]] = true;
	    }

	    // Save current profile URLs for next activation
	    Lampa.Storage.set(STORAGE_PROFILE_PLUGIN_URLS, JSON.stringify(profileUrls));

	    // Start with local plugins
	    var localPlugins = collectPlugins();
	    var localByUrl = {};
	    for (var li = 0; li < localPlugins.length; li++) {
	      localByUrl[localPlugins[li].url] = localPlugins[li];
	    }

	    // Build profile URL → plugin map for fast lookup
	    var profileByUrl = {};
	    for (var pi2 = 0; pi2 < data.plugins.length; pi2++) {
	      profileByUrl[data.plugins[pi2].url] = data.plugins[pi2];
	    }

	    // Merge: keep existing locals, override if profile has it, add new profile plugins
	    var mergedPlugins = [];
	    var mergedUrls = {};

	    // 1. Process existing local plugins — apply profile overrides where URL matches
	    for (var li2 = 0; li2 < localPlugins.length; li2++) {
	      var lp = localPlugins[li2];
	      var profileMatch = profileByUrl[lp.url];
	      if (profileMatch) {
	        var ds = override && override.plugins_status && override.plugins_status[lp.url];
	        var dc = override && override.plugins_custom && override.plugins_custom[lp.url];
	        mergedPlugins.push({
	          url: lp.url,
	          name: profileMatch.name || lp.name,
	          status: ds !== undefined ? ds : profileMatch.status,
	          custom: dc !== undefined ? dc : profileMatch.custom || lp.custom
	        });
	      } else {
	        mergedPlugins.push({
	          url: lp.url,
	          name: lp.name,
	          status: lp.status !== undefined ? lp.status : 1,
	          custom: lp.custom
	        });
	      }
	      mergedUrls[lp.url] = true;
	    }

	    // 2. Add NEW profile plugins that don't exist locally (cross-device additions)
	    for (var pi3 = 0; pi3 < data.plugins.length; pi3++) {
	      var pp = data.plugins[pi3];
	      if (!pp.url) continue;
	      // Skip if already in local list (already handled above)
	      if (mergedUrls[pp.url]) continue;
	      // Skip if "known" (was in previous profile activation) but user removed locally
	      if (knownMap[pp.url] && !localByUrl[pp.url]) continue;
	      // NEW plugin from profile — add it
	      var ds2 = override && override.plugins_status && override.plugins_status[pp.url];
	      var dc2 = override && override.plugins_custom && override.plugins_custom[pp.url];
	      mergedPlugins.push({
	        url: pp.url,
	        name: pp.name,
	        status: ds2 !== undefined ? ds2 : pp.status,
	        custom: dc2 !== undefined ? dc2 : pp.custom
	      });
	      mergedUrls[pp.url] = true;
	    }

	    // 3. Safeguard: GramLink must always be present
	    // Use auto-detected URL (release or dev), check by URL pattern
	    var glTargetUrl = window.__gramlink_self_url || './plugins/GramLink.js';
	    var glPresent = false;
	    for (var _glu in mergedUrls) {
	      if (_glu.indexOf('GramLink.js') >= 0 || _glu.indexOf('gramlink') >= 0) {
	        glPresent = true;
	        break;
	      }
	    }
	    if (!glPresent) {
	      mergedPlugins.push({
	        url: glTargetUrl,
	        name: 'GramLink',
	        status: 1,
	        custom: {}
	      });
	    }
	    Lampa.Storage.set('plugins', mergedPlugins);
	  }

	  // ── Settings (user-layer defaults + device-layer override) ──
	  var userSettings = data.settings || {};
	  if (userSettings.sync_enabled !== undefined) Lampa.Storage.set('gramlink_sync_enabled', userSettings.sync_enabled);
	  if (userSettings.heartbeat !== undefined) Lampa.Storage.set('gramlink_heartbeat', userSettings.heartbeat);
	  if (userSettings.broadcast !== undefined) Lampa.Storage.set('gramlink_broadcast', userSettings.broadcast);

	  // Device-scoped settings override
	  if (override && override.settings) {
	    Object.keys(override.settings).forEach(function (key) {
	      Lampa.Storage.set(key, override.settings[key]);
	    });
	  }

	  // ── Mark active ──
	  Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(msgId));
	  Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(Math.floor(Date.now() / 1000)));
	  Lampa.Noty.show('Profile activated');
	}

	// ─── Create profile ─────────────────────────────────────

	function createProfile(profilesTopicId, profilesSyncTopicId, container) {
	  Lampa.Input.edit({
	    title: 'Profile name',
	    free: true,
	    nosave: true,
	    align: 'center'
	  }, function (name) {
	    if (!name) return;
	    var client = GatewayClient.getInstance();
	    if (!client.isConnected()) {
	      Lampa.Noty.show('Not connected');
	      return;
	    }
	    var profileName = name.trim();
	    var avatar = getAvatar(profileName);
	    var now = Math.floor(Date.now() / 1000);
	    var caption = buildCaption({
	      name: profileName,
	      avatar: avatar,
	      updated: now
	    });

	    // First profile: inherit current data. Subsequent: start empty.
	    client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	      var hasProfiles = msgs.some(function (m) {
	        if (!m.text) return false;
	        return !!parseProfileMessage(m.text);
	      });
	      var fileData = buildFileData({
	        name: profileName,
	        avatar: avatar,
	        bookmarks: hasProfiles ? {
	          favorite: {}
	        } : {
	          favorite: collectFavorite()
	        },
	        timeline: hasProfiles ? {} : collectTimeline(),
	        plugins: collectPlugins(),
	        settings: collectSettings()
	      });
	      var fileJson = JSON.stringify(fileData, null, 2);
	      var fileName = buildProfileFileName(profileName, now);
	      client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
	        if (msgId) {
	          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(msgId));
	          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(now));
	          Lampa.Storage.set('gramlink_active_profile_name', profileName);
	          refreshProfiles(profilesTopicId, profilesSyncTopicId, container);
	          Lampa.Noty.show('Profile created');
	        } else {
	          Lampa.Noty.show('Failed to create profile');
	        }
	      }).catch(function (e) {
	        console.error('GramLink', 'Profile create error:', e);
	        Lampa.Noty.show('Failed to create profile');
	      });
	    }).catch(function () {
	      Lampa.Noty.show('Failed to check existing profiles');
	    });
	  });
	}

	// ─── Sync / Auto-save ───────────────────────────────────

	function syncProfile(msgId, profilesTopicId) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) {
	    Lampa.Noty.show('Not connected');
	    return;
	  }
	  var now = Math.floor(Date.now() / 1000);
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    var target = findMessageById(msgs, msgId);
	    if (!target) {
	      Lampa.Noty.show('Profile not found');
	      return;
	    }
	    var p = parseCaption(target.text) || {};
	    var profileName = p.name || 'Unnamed';
	    var avatar = p.avatar || getAvatar(profileName);

	    // Preserve source metadata (e.g. 'cub', source_id) from original caption
	    var fullMsg = parseProfileMessage(target.text);
	    var srcMeta = {};
	    if (fullMsg && fullMsg.meta && fullMsg.meta.source) {
	      srcMeta.source = fullMsg.meta.source;
	      srcMeta.source_id = fullMsg.meta.source_id;
	    }
	    var caption = buildCaption({
	      name: profileName,
	      avatar: avatar,
	      updated: now
	    }, srcMeta);
	    var fileData = buildFileData({
	      name: profileName,
	      avatar: avatar,
	      bookmarks: {
	        favorite: collectFavorite()
	      },
	      timeline: collectTimeline(),
	      plugins: collectPlugins(),
	      settings: collectSettings()
	    });
	    var fileJson = JSON.stringify(fileData, null, 2);
	    var fileName = buildProfileFileName(profileName, now);
	    client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
	      if (newMsgId) {
	        // Delete old message to avoid duplicates
	        client.deleteMessage(getChannelId(), parseInt(msgId, 10)).catch(function () {});
	        if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
	          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
	          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(now));
	        }
	        Lampa.Noty.show('Profile synced');
	      }
	    }).catch(function (e) {
	      console.error('GramLink', 'Profile sync error:', e);
	      Lampa.Noty.show('Sync failed');
	    });
	  });
	}
	function autoSaveProfile(msgId, profilesTopicId) {
	  syncProfile(msgId, profilesTopicId);
	}

	// ─── Rename profile ─────────────────────────────────────

	function renameProfile(msgId, profilesTopicId, newName, onDone) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) {
	    Lampa.Noty.show('Not connected');
	    if (onDone) onDone();
	    return;
	  }
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    var target = findMessageById(msgs, msgId);
	    if (!target) {
	      Lampa.Noty.show('Profile not found');
	      if (onDone) onDone();
	      return;
	    }
	    return client.downloadMessageFile(target).then(function (fileData) {
	      if (!fileData) {
	        Lampa.Noty.show('Profile file not found');
	        if (onDone) onDone();
	        return;
	      }
	      var data;
	      try {
	        data = JSON.parse(fileData);
	      } catch (e) {
	        Lampa.Noty.show('Invalid profile data');
	        if (onDone) onDone();
	        return;
	      }
	      data.profile_meta.name = newName;

	      // Preserve avatar from old data or caption
	      var oldCaption = parseCaption(target.text);
	      var avatar = data.profile_meta && data.profile_meta.avatar || oldCaption && oldCaption.avatar || getAvatar(newName);
	      var now = Math.floor(Date.now() / 1000);
	      var caption = buildCaption({
	        name: newName,
	        avatar: avatar,
	        updated: now
	      });
	      var fileJson = JSON.stringify(data, null, 2);
	      var fileName = buildProfileFileName(newName, now);
	      client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
	        if (newMsgId) {
	          client.deleteMessage(getChannelId(), parseInt(msgId, 10)).catch(function () {});
	          if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
	            Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
	            Lampa.Storage.set('gramlink_active_profile_name', newName);
	          }
	          Lampa.Noty.show(Lampa.Lang.translate('gramlink_profile_renamed') || 'Profile renamed');
	        } else {
	          Lampa.Noty.show('Rename failed');
	        }
	        if (onDone) onDone(newMsgId || null);
	      }).catch(function () {
	        Lampa.Noty.show('Rename failed');
	        if (onDone) onDone();
	      });
	    });
	  }).catch(function () {
	    Lampa.Noty.show('Failed to load profile');
	    if (onDone) onDone();
	  });
	}

	// Collect all device-scoped storage keys → { key: value }
	function collectDeviceScopedSettings() {
	  var result = {};
	  for (var i = 0; i < localStorage.length; i++) {
	    var key = localStorage.key(i);
	    if (!key) continue;
	    if (key.indexOf('gramlink_') === 0 && !isDeviceKey(key)) continue;
	    if (isDeviceKey(key)) {
	      try {
	        result[key] = JSON.parse(localStorage.getItem(key));
	      } catch (e) {
	        result[key] = localStorage.getItem(key);
	      }
	    }
	  }
	  return result;
	}

	// ─── Profile compaction state ───────────────────────────
	var compactTimer = null; // debounce timer handle
	var compactLastRun = 0; // timestamp of last successful compaction
	var COMPACT_DEBOUNCE_MS = 30000; // wait 30s after last change before compact
	var COMPACT_MIN_INTERVAL = 60000; // at most once per 60s

	// ─── Delta publisher (called from outside) ──────────────

	function publishLocalDelta(profilesSyncTopicId, subtype, payload) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected() || !profilesSyncTopicId) return;
	  var activeProfileId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  if (!activeProfileId) return;
	  client.publishDelta(profilesSyncTopicId, subtype, activeProfileId, payload);
	  scheduleCompact();
	}

	// Publish a device-targeted delta (includes target_device_id for filtering)
	function publishDeviceDelta(profilesSyncTopicId, subtype, payload, targetDeviceId) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected() || !profilesSyncTopicId) return;
	  var activeProfileId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  if (!activeProfileId) return;
	  var msg = JSON.stringify({
	    meta: {
	      type: 'profile_delta',
	      subtype: subtype,
	      profile_msg_id: activeProfileId,
	      device_id: getDeviceId(),
	      target_device_id: targetDeviceId || 'all',
	      timestamp: Math.floor(Date.now() / 1000)
	    },
	    payload: payload || {}
	  });
	  client.publishRaw(profilesSyncTopicId, msg, true);
	  scheduleCompact();
	}

	// ─── Debounced full profile compaction ──────────────────
	// After each delta, wait COMPACT_DEBOUNCE_MS of silence,
	// then rewrite the profile with a fresh state snapshot.
	// A new device gets the latest profile + minimal deltas.

	function scheduleCompact() {
	  if (compactTimer) clearTimeout(compactTimer);
	  compactTimer = setTimeout(function () {
	    compactTimer = null;
	    compactProfile();
	  }, COMPACT_DEBOUNCE_MS);
	}
	function compactProfile() {
	  var now = Date.now();

	  // Rate limit: do not compact more than once per COMPACT_MIN_INTERVAL
	  if (now - compactLastRun < COMPACT_MIN_INTERVAL) {
	    var remaining = COMPACT_MIN_INTERVAL - (now - compactLastRun);
	    if (compactTimer) clearTimeout(compactTimer);
	    compactTimer = setTimeout(function () {
	      compactTimer = null;
	      compactProfile();
	    }, remaining);
	    return;
	  }
	  var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
	  var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  var channelId = getChannelId();
	  if (!profilesTopicId || !activeId || !channelId) return;
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;

	  // Get current profile message — from there name, avatar, meta
	  client.getMessages(channelId, profilesTopicId, 50).then(function (msgs) {
	    var target = findMessageById(msgs, activeId);
	    if (!target) return;
	    var captionProfile = parseCaption(target.text);
	    var profileName = captionProfile && captionProfile.name || Lampa.Storage.get(STORAGE_KEYS.ACTIVE_PROFILE_NAME, '') || 'Unnamed';
	    var profileAvatar = captionProfile && captionProfile.avatar || getAvatar(profileName);
	    var ts = Math.floor(now / 1000);

	    // Save source metadata (e.g. cub, source_id)
	    var fullMsg = parseProfileMessage(target.text);
	    var srcMeta = {};
	    if (fullMsg && fullMsg.meta && fullMsg.meta.source) {
	      srcMeta.source = fullMsg.meta.source;
	      srcMeta.source_id = fullMsg.meta.source_id;
	    }
	    var caption = buildCaption({
	      name: profileName,
	      avatar: profileAvatar,
	      updated: ts
	    }, srcMeta);
	    var fileData = buildFileData({
	      name: profileName,
	      avatar: profileAvatar,
	      bookmarks: {
	        favorite: collectFavorite()
	      },
	      timeline: collectTimeline(),
	      plugins: collectPlugins(),
	      settings: collectSettings()
	    });
	    var fileJson = JSON.stringify(fileData, null, 2);
	    var fileName = buildProfileFileName(profileName, ts);
	    client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
	      if (!newMsgId) return;

	      // Delete old profile
	      client.deleteMessage(channelId, parseInt(activeId, 10)).catch(function () {});

	      // Update active reference
	      Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
	      Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(ts));
	      compactLastRun = now;

	      // Shift delta cursor to compaction time so we don't replay
	      // deltas already accounted for in the fresh snapshot
	      var currentSeen = getLastDeltaSeen();
	      if (ts > currentSeen) setLastDeltaSeen(ts);
	    }).catch(function (err) {
	      console.warn('GramLink', 'Compact profile failed:', err && err.message);
	    });
	  }).catch(function () {});
	}

	// ─── Startup auto-activation ────────────────────────────

	function startAutoActivation(profilesTopicId, profilesSyncTopicId) {
	  var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  if (!activeId) return;
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    var target = findMessageById(msgs, activeId);
	    if (!target) {
	      Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, '');
	      return;
	    }
	    return client.downloadMessageFile(target).then(function (fileData) {
	      if (!fileData) return;
	      var data;
	      try {
	        data = JSON.parse(fileData);
	      } catch (e) {
	        return;
	      }

	      // ── Start auto-activation with device overlays ──
	      if (data.plugins) {
	        var deviceId = getDeviceId();
	        var override = data.device_overrides && data.device_overrides[deviceId];

	        // Build profile plugin URL list from current profile data
	        var profileUrls = [];
	        for (var pi = 0; pi < data.plugins.length; pi++) {
	          var pu = data.plugins[pi].url;
	          if (pu) profileUrls.push(pu);
	        }

	        // Read previously-saved profile plugin URLs
	        var knownProfileUrls;
	        try {
	          knownProfileUrls = JSON.parse(Lampa.Storage.get(STORAGE_PROFILE_PLUGIN_URLS, '[]')) || [];
	        } catch (e) {
	          knownProfileUrls = [];
	        }
	        var knownMap = {};
	        for (var ki = 0; ki < knownProfileUrls.length; ki++) {
	          knownMap[knownProfileUrls[ki]] = true;
	        }

	        // Save current profile URLs for next activation
	        Lampa.Storage.set(STORAGE_PROFILE_PLUGIN_URLS, JSON.stringify(profileUrls));

	        // Start with local plugins
	        var localPlugins = collectPlugins();
	        var localByUrl = {};
	        for (var li = 0; li < localPlugins.length; li++) {
	          localByUrl[localPlugins[li].url] = localPlugins[li];
	        }

	        // Profile URL → plugin map
	        var profileByUrl = {};
	        for (var pi2 = 0; pi2 < data.plugins.length; pi2++) {
	          profileByUrl[data.plugins[pi2].url] = data.plugins[pi2];
	        }
	        var merged = [];
	        var mergedUrls = {};

	        // 1. Existing local plugins — apply profile overrides
	        for (var li2 = 0; li2 < localPlugins.length; li2++) {
	          var lp = localPlugins[li2];
	          var profileMatch = profileByUrl[lp.url];
	          if (profileMatch) {
	            var ds = override && override.plugins_status && override.plugins_status[lp.url];
	            var dc = override && override.plugins_custom && override.plugins_custom[lp.url];
	            merged.push({
	              url: lp.url,
	              name: profileMatch.name || lp.name,
	              status: ds !== undefined ? ds : profileMatch.status,
	              custom: dc !== undefined ? dc : profileMatch.custom || lp.custom
	            });
	          } else {
	            merged.push({
	              url: lp.url,
	              name: lp.name,
	              status: lp.status !== undefined ? lp.status : 1,
	              custom: lp.custom
	            });
	          }
	          mergedUrls[lp.url] = true;
	        }

	        // 2. NEW profile plugins (cross-device additions)
	        for (var pi3 = 0; pi3 < data.plugins.length; pi3++) {
	          var pp = data.plugins[pi3];
	          if (!pp.url) continue;
	          if (mergedUrls[pp.url]) continue;
	          // Known but user removed locally → skip
	          if (knownMap[pp.url] && !localByUrl[pp.url]) continue;
	          var ds2 = override && override.plugins_status && override.plugins_status[pp.url];
	          var dc2 = override && override.plugins_custom && override.plugins_custom[pp.url];
	          merged.push({
	            url: pp.url,
	            name: pp.name,
	            status: ds2 !== undefined ? ds2 : pp.status,
	            custom: dc2 !== undefined ? dc2 : pp.custom
	          });
	          mergedUrls[pp.url] = true;
	        }

	        // 3. Safeguard: GramLink must always be present
	        // Use auto-detected URL (release or dev), check by URL pattern
	        var glTargetUrl = window.__gramlink_self_url || './plugins/GramLink.js';
	        var glPresent = false;
	        for (var _glu in mergedUrls) {
	          if (_glu.indexOf('GramLink.js') >= 0 || _glu.indexOf('gramlink') >= 0) {
	            glPresent = true;
	            break;
	          }
	        }
	        if (!glPresent) {
	          merged.push({
	            url: glTargetUrl,
	            name: 'GramLink',
	            status: 1,
	            custom: {}
	          });
	        }
	        Lampa.Storage.set('plugins', merged);
	      }
	      if (data.settings) {
	        var deviceId2 = getDeviceId();
	        var override2 = data.device_overrides && data.device_overrides[deviceId2];
	        var devSettings = override2 && override2.settings || {};
	        if (data.settings.sync_enabled !== undefined) Lampa.Storage.set('gramlink_sync_enabled', devSettings.gramlink_sync_enabled !== undefined ? devSettings.gramlink_sync_enabled : data.settings.sync_enabled);
	        if (data.settings.heartbeat !== undefined) Lampa.Storage.set('gramlink_heartbeat', devSettings.gramlink_heartbeat !== undefined ? devSettings.gramlink_heartbeat : data.settings.heartbeat);
	        if (data.settings.broadcast !== undefined) Lampa.Storage.set('gramlink_broadcast', devSettings.broadcast !== undefined ? devSettings.broadcast : data.settings.broadcast);

	        // Generic device-scoped keys from device_overrides.settings
	        Object.keys(devSettings).forEach(function (key) {
	          if (key === 'gramlink_sync_enabled' || key === 'gramlink_heartbeat' || key === 'gramlink_broadcast') return;
	          Lampa.Storage.set(key, devSettings[key]);
	        });
	      }

	      // ── Bookmarks & Timeline (never applied before) ──
	      if (data.bookmarks && data.bookmarks.favorite) {
	        suppressPublish();
	        Lampa.Storage.set('favorite', data.bookmarks.favorite);
	        if (Lampa.Favorite && Lampa.Favorite.read) {
	          Lampa.Favorite.read();
	        }
	        unsuppressPublish();
	      }
	      if (data.timeline) {
	        Lampa.Storage.set('file_view', data.timeline);
	      }

	      // ── Profile name from caption ──
	      var captionProfile = parseCaption(target.text);
	      var captionName = captionProfile && captionProfile.name;
	      if (captionName) Lampa.Storage.set('gramlink_active_profile_name', captionName);
	    });
	  }).catch(function () {});
	}

	// ─── Delta apply (called from hub.js event + GramLink.js polling) ──

	function applyDelta(data) {
	  var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  if (!data || !data.meta || String(data.meta.profile_msg_id) !== String(activeId)) return;
	  // Skip own messages to prevent feedback loop: delta → Favorite.add → listener → publishDelta → poll → delta...
	  if (data.meta.device_id === getDeviceId()) return;
	  // Device-* delta must target this device or 'all'
	  if (data.meta.subtype && data.meta.subtype.indexOf('device_') === 0) {
	    var target = data.meta.target_device_id || 'all';
	    if (target !== 'all' && target !== getDeviceId()) return;
	  }
	  var payload = data.payload;
	  var sub = data.meta.subtype;
	  if (sub === 'bookmark_add' && payload.card_id && payload.card) {
	    if (Lampa.Favorite && Lampa.Favorite.add) {
	      suppressPublish();
	      Lampa.Favorite.add(payload.type, payload.card);
	      unsuppressPublish();
	    }
	  } else if (sub === 'bookmark_remove' && payload.card_id) {
	    if (Lampa.Favorite && Lampa.Favorite.remove) {
	      suppressPublish();
	      Lampa.Favorite.remove(payload.type, {
	        id: payload.card_id
	      });
	      unsuppressPublish();
	    }
	  } else if (sub === 'timecode_update' && payload.hash) {
	    var tl = Lampa.Storage.get('file_view', {});
	    tl[payload.hash] = {
	      time: payload.time,
	      duration: payload.duration,
	      percent: payload.percent
	    };
	    Lampa.Storage.set('file_view', tl);
	  } else if (sub === 'plugin_change') {
	    var plugins = Lampa.Storage.get('plugins', []);
	    if (payload.action === 'add') plugins.push(payload.plugin);else if (payload.action === 'remove') {
	      plugins = plugins.filter(function (p) {
	        return p.url !== payload.plugin.url;
	      });
	    } else if (payload.action === 'toggle') {
	      plugins.forEach(function (p) {
	        if (p.url === payload.plugin.url) p.status = payload.plugin.status;
	      });
	    }
	    Lampa.Storage.set('plugins', plugins);
	  } else if (sub === 'device_plugin_status') {
	    var plugins2 = Lampa.Storage.get('plugins', []);
	    plugins2.forEach(function (p) {
	      if (p.url === payload.url) p.status = payload.status;
	    });
	    Lampa.Storage.set('plugins', plugins2);
	  } else if (sub === 'device_setting') {
	    if (payload.key) Lampa.Storage.set(payload.key, payload.value);
	  }
	}
	function refreshDeltas() {
	  var profilesSyncTopicId = Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC$1, '');
	  if (!profilesSyncTopicId) return;
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  var lastSeen = getLastDeltaSeen();
	  client.getMessagesSince(profilesSyncTopicId, lastSeen, 30).then(function (msgs) {
	    var newest = lastSeen;
	    msgs.forEach(function (m) {
	      if (m.date > newest) newest = m.date;
	      try {
	        var d = JSON.parse(stripCodeFence$1(m.text));
	        if (d && d.meta && d.meta.type === 'profile_delta') {
	          applyDelta(d);
	        }
	      } catch (e) {}
	    });
	    if (newest > lastSeen) {
	      setLastDeltaSeen(newest);
	    }
	  }).catch(function () {});
	}
	function isSkipPublish() {
	  return _publishSuppressed > 0;
	}
	function suppressPublish() {
	  _publishSuppressed++;
	}
	function unsuppressPublish() {
	  if (_publishSuppressed > 0) _publishSuppressed--;
	}

	// ─── Offline Profile Backup/Restore ──────────────────────

	function backupProfileOffline(profileMsgId) {
	  SYNC_KEY_MANIFEST.storage.forEach(function (s) {
	    var val = Lampa.Storage.get(s.key, '');
	    if (val !== '' && val !== null && val !== undefined) {
	      Lampa.Storage.set(BACKUP_PREFIX + profileMsgId + '_' + s.key, val);
	    }
	  });
	}
	function restoreProfileOffline(profileMsgId) {
	  SYNC_KEY_MANIFEST.storage.forEach(function (s) {
	    var backupKey = BACKUP_PREFIX + profileMsgId + '_' + s.key;
	    var val = Lampa.Storage.get(backupKey, '');
	    if (val !== '' && val !== null && val !== undefined) {
	      Lampa.Storage.set(s.key, val);
	    } else {
	      // Try JSON parse/stringify for object-type values
	      try {
	        var parsed = JSON.parse(val);
	        Lampa.Storage.set(s.key, parsed);
	      } catch (e) {}
	    }
	  });
	  // Re-read
	  suppressPublish();
	  if (Lampa.Favorite && Lampa.Favorite.read) Lampa.Favorite.read();
	  unsuppressPublish();
	}

	// ─── Quick switch (from sidebar, full reload) ──────────────

	function quickSwitchProfile(msgId) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) {
	    Lampa.Noty.show('Not connected');
	    return;
	  }
	  var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
	  var profilesSyncTopicId = Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC$1, '');
	  if (!profilesTopicId) {
	    Lampa.Noty.show('Sync not ready');
	    return;
	  }
	  if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
	    Lampa.Noty.show('Already active');
	    return;
	  }
	  Lampa.Loading.start();
	  var currentId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
	  if (currentId) {
	    autoSaveProfile(currentId, profilesTopicId);
	  }
	  client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
	    var target = findMessageById(msgs, msgId);
	    if (!target) {
	      Lampa.Loading.stop();
	      Lampa.Noty.show('Profile not found');
	      return;
	    }
	    return client.downloadMessageFile(target).then(function (fileData) {
	      if (!fileData) {
	        Lampa.Loading.stop();
	        Lampa.Noty.show('Profile not found');
	        return;
	      }
	      var profileData,
	        fileTimestamp = target.date || 0;
	      try {
	        profileData = JSON.parse(fileData);
	      } catch (e) {
	        Lampa.Loading.stop();
	        Lampa.Noty.show('Invalid data');
	        return;
	      }
	      var captionProfile = parseCaption(target.text);
	      var profileName = captionProfile && captionProfile.name;
	      if (profileName) Lampa.Storage.set('gramlink_active_profile_name', profileName);
	      return replayDeltas(profilesSyncTopicId, msgId, fileTimestamp, profileData).then(function (mergedData) {
	        applyProfileData(mergedData, msgId);
	        updateSyncTimestamp('favorite');
	        updateSyncTimestamp('file_view');
	        updateSyncTimestamp('plugins');
	        Lampa.Loading.stop();
	        softRefresh(); // ponytail: avoid full page reload
	      });
	    });
	  }).catch(function (e) {
	    Lampa.Loading.stop();
	    console.error('GramLink', 'Quick switch error:', e);
	    Lampa.Noty.show('Switch failed');
	  });
	}
	var Profiles = {
	  refreshProfiles: refreshProfiles,
	  createProfile: createProfile,
	  applyProfileData: applyProfileData,
	  getAvatar: getAvatar,
	  avatarColor: avatarColor,
	  saveProfilesCache: saveProfilesCache,
	  startAutoActivation: startAutoActivation,
	  publishLocalDelta: publishLocalDelta,
	  publishDeviceDelta: publishDeviceDelta,
	  isDeviceKey: isDeviceKey,
	  collectDeviceScopedSettings: collectDeviceScopedSettings,
	  applyDelta: applyDelta,
	  refreshDeltas: refreshDeltas,
	  softRefresh: softRefresh,
	  backupProfileOffline: backupProfileOffline,
	  restoreProfileOffline: restoreProfileOffline,
	  updateSyncTimestamp: updateSyncTimestamp,
	  getSyncTimestamp: getSyncTimestamp,
	  clearSyncTimestamps: clearSyncTimestamps,
	  resetDeviceOverlay: resetDeviceOverlay,
	  getCachedProfiles: getCachedProfiles,
	  quickSwitchProfile: quickSwitchProfile,
	  syncProfile: syncProfile,
	  renameProfile: renameProfile,
	  refreshCacheFromTelegram: refreshCacheFromTelegram,
	  getPluginRegistry: getPluginRegistry,
	  addToPluginRegistry: addToPluginRegistry,
	  removeFromPluginRegistry: removeFromPluginRegistry
	};

	/**
	 * sdk/reload-prompt.js — Native-style reload prompt after plugin changes
	 *
	 * Copies pattern from src/interaction/extensions/utils.js → showReload():
	 * modal "Reboot required" with Yes/No.
	 *
	 * Usage:
	 *   import { showReloadPrompt } from '../sdk/reload-prompt'
	 *   showReloadPrompt(function() { Lampa.Activity.backward() })
	 */

	// ponytail: exact copy of native Extensions modal for consistent UX
	function showReloadPrompt(onCancel) {
	  Lampa.Modal.open({
	    title: '',
	    align: 'center',
	    zIndex: 300,
	    html: $('<div class="about">' + (Lampa.Lang.translate('plugins_need_reload') || 'Reboot required for changes to take effect') + '</div>'),
	    buttons: [{
	      name: Lampa.Lang.translate('settings_param_no') || 'No',
	      onSelect: function onSelect() {
	        Lampa.Modal.close();
	        if (onCancel) onCancel();
	      }
	    }, {
	      name: Lampa.Lang.translate('settings_param_yes') || 'Yes',
	      onSelect: function onSelect() {
	        window.location.reload();
	      }
	    }]
	  });
	}

	function PluginManagerComponent(object) {
	  var self = this;
	  var scroll = null;
	  var last = null;
	  var plugins = object._plugins || [];
	  var isActive = object._isActive || false;
	  var profileMsgId = object._profileMsgId;
	  var profileName = object._profileName || 'Unnamed';
	  var originalData = object._originalData || null;

	  // ─── Lifecycle ──────────────────────────────────────────

	  self.create = function () {
	    scroll = new Lampa.Scroll({
	      mask: true,
	      over: true
	    });
	    self.html = $('<div class="gramlink-activity"></div>');
	    scroll.render().addClass('gramlink-scroll');
	    self.html.append(scroll.render());
	    scroll.onWheel = function (step) {
	      if (!last) return;
	      Navigator.move(step > 0 ? 'down' : 'up');
	    };
	    scroll.render().on('hover:focus', function (e) {
	      last = e.target;
	      scroll.update($(e.target), true);
	    });
	    scroll.render().on('hover:hover hover:touch', function (e) {
	      last = e.target;
	    });
	    renderPluginList();
	    return self.render();
	  };
	  self.render = function () {
	    return self.html;
	  };
	  self.start = function () {
	    Lampa.Controller.add('gramlink_plugins', {
	      // ponytail: unique controller name
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(scroll.render());
	        var focus = last && $(last).closest('body').length ? last : false;
	        Lampa.Controller.collectionFocus(focus, scroll.render());
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        Navigator.move('down');
	      },
	      left: function left() {
	        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
	      },
	      right: function right() {
	        Navigator.move('right');
	      },
	      back: function back() {
	        Lampa.Activity.backward();
	      }
	    });
	    Lampa.Controller.toggle('gramlink_plugins');
	  };
	  self.pause = function () {};
	  self.stop = function () {};
	  self.destroy = function () {
	    if (self.__destroyed) return;
	    self.__destroyed = true;
	    try {
	      $(scroll.body()).find('.gs-plugin-item, .gs-plugin-add').off();
	    } catch (e) {} // ponytail: unbind item events
	    try {
	      if (scroll) scroll.destroy();
	    } catch (e) {}
	    try {
	      self.html.remove();
	    } catch (e) {}
	    last = null; // ponytail: clear ref
	  };
	  self.back = function () {
	    Lampa.Activity.backward();
	  };

	  // ─── Render plugin list ─────────────────────────────────

	  function renderPluginList() {
	    scroll.clear();
	    if (plugins.length === 0) {
	      scroll.body().append('<div class="settings-param-title"><span>' + (Lampa.Lang.translate('gramlink_plugins_empty') || 'No plugins') + '</span></div>');
	    } else {
	      plugins.forEach(function (plugin, idx) {
	        scroll.body().append(renderPluginItem(plugin, idx));
	      });
	    }
	    scroll.body().append(renderAddButton());
	    bindItemEvents();
	  }
	  function renderPluginItem(plugin, idx) {
	    var isOn = plugin.status === 1;
	    return $('<div class="settings-folder selector gs-plugin-item" data-idx="' + idx + '">' + '<div class="settings-folder__icon">' + '<div class="gs-plugin-toggle ' + (isOn ? 'on' : 'off') + '">' + (isOn ? '●' : '○') + '</div>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + escHtml(plugin.name || 'Plugin') + '</div>' + '<div class="settings-folder__sub">' + escHtml(truncateUrl(plugin.url)) + '</div>' + '</div>' + '</div>');
	  }
	  function renderAddButton() {
	    return $('<div class="settings-folder selector gs-plugin-add">' + '<div class="settings-folder__icon">' + '<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + (Lampa.Lang.translate('gramlink_plugins_add') || 'Add plugin') + '</div>' + '</div>' + '</div>');
	  }

	  // ─── Event binding ──────────────────────────────────────

	  function bindItemEvents() {
	    scroll.render().find('.gs-plugin-item').on('hover:enter', function () {
	      var idx = parseInt($(this).data('idx'), 10);
	      if (plugins[idx]) showPluginMenu(plugins[idx], idx);
	    });
	    scroll.render().find('.gs-plugin-item').on('hover:long', function () {
	      var idx = parseInt($(this).data('idx'), 10);
	      if (plugins[idx]) doToggle(plugins[idx], idx);
	    });
	    scroll.render().find('.gs-plugin-add').on('hover:enter', function () {
	      doAddPlugin();
	    });
	  }

	  // ─── Submenu for a specific plugin ───────────────────────

	  function showPluginMenu(plugin, idx) {
	    if (!plugin) return;
	    var isOn = plugin.status === 1;
	    var prevController = Lampa.Controller.enabled().name;
	    Lampa.Select.show({
	      title: plugin.name || plugin.url,
	      items: [{
	        title: Lampa.Lang.translate(isOn ? 'gramlink_plugins_toggle_off' : 'gramlink_plugins_toggle_on') || (isOn ? 'Disable' : 'Enable'),
	        _do: 'toggle'
	      }, {
	        title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Edit name',
	        _do: 'edit_name'
	      }, {
	        title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Edit URL',
	        _do: 'edit_url'
	      }, {
	        title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
	        _do: 'remove'
	      }, {
	        title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	        _do: 'cancel'
	      }],
	      onBack: function onBack() {
	        Lampa.Controller.toggle(prevController);
	      },
	      onSelect: function onSelect(item) {
	        if (item._do === 'toggle') {
	          doToggle(plugin, idx);
	        } else if (item._do === 'edit_name') {
	          doEditPluginName(plugin, idx);
	        } else if (item._do === 'edit_url') {
	          doEditPluginUrl(plugin, idx);
	        } else if (item._do === 'remove') {
	          doRemoveConfirm(plugin, idx);
	        } else {
	          Lampa.Controller.toggle(prevController);
	        }
	      }
	    });
	  }
	  function doEditPluginName(plugin, idx) {
	    input({
	      title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Plugin name',
	      value: plugin.name || '',
	      onSubmit: function onSubmit(newName) {
	        if (!newName || !newName.trim()) return;
	        plugin.name = newName.trim();
	        plugins[idx] = plugin;
	        if (isActive) {
	          var live = collectPlugins();
	          live.forEach(function (p) {
	            if (p.url === plugin.url) p.name = plugin.name;
	          });
	          Lampa.Storage.set('plugins', live);
	          Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_edited') || 'Plugin updated');
	        }
	        if (!isActive) {
	          saveSnapshot(function () {
	            reRender();
	          });
	          return;
	        }
	        reRender();
	        showReloadPrompt();
	      }
	    });
	  }
	  function doEditPluginUrl(plugin, idx) {
	    input({
	      title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Plugin URL',
	      value: plugin.url || '',
	      onSubmit: function onSubmit(newUrl) {
	        if (!newUrl || !newUrl.trim()) return;
	        newUrl = newUrl.trim();
	        if (!newUrl.match(/^https?:\/\/.+/i)) {
	          Lampa.Noty.show('Invalid URL');
	          return;
	        }
	        var oldUrl = plugin.url;
	        plugin.url = newUrl;
	        plugins[idx] = plugin;
	        if (isActive) {
	          var live = collectPlugins();
	          // ponytail: match by old URL since live is a copy from storage
	          live.forEach(function (p) {
	            if (p.url === oldUrl) {
	              p.url = newUrl;
	              p.name = plugin.name;
	            }
	          });
	          Lampa.Storage.set('plugins', live);
	          publishDelta('toggle', {
	            url: newUrl,
	            name: plugin.name,
	            status: plugin.status
	          });
	          Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_edited') || 'Plugin updated');
	        }
	        if (!isActive) {
	          saveSnapshot(function () {
	            reRender();
	          });
	          return;
	        }
	        reRender();
	        showReloadPrompt();
	      }
	    });
	  }

	  // ─── Actions ────────────────────────────────────────────

	  function doToggle(plugin, idx) {
	    plugin.status = plugin.status === 1 ? 0 : 1;
	    plugins[idx] = plugin;
	    if (isActive) {
	      var live = collectPlugins();
	      live.forEach(function (p) {
	        if (p.url === plugin.url) p.status = plugin.status;
	      });
	      Lampa.Storage.set('plugins', live);
	      publishDelta('toggle', {
	        url: plugin.url,
	        name: plugin.name,
	        status: plugin.status
	      });
	      Lampa.Noty.show((plugin.name || 'Plugin') + ': ' + (plugin.status === 1 ? 'enabled' : 'disabled'));
	    }
	    if (!isActive) {
	      saveSnapshot(function () {
	        reRender();
	      });
	      return;
	    }
	    reRender();
	    // ponytail: reload so Plugins._loaded syncs with storage
	    showReloadPrompt();
	  }
	  function doAddPlugin() {
	    input({
	      title: Lampa.Lang.translate('gramlink_plugins_add_url') || 'Plugin URL (.js)',
	      align: 'center',
	      onCancel: function onCancel() {
	        reRender();
	      },
	      onSubmit: function onSubmit(url) {
	        if (!url) {
	          reRender();
	          return;
	        }
	        url = url.trim();
	        if (!url.match(/^https?:\/\/.+/i)) {
	          Lampa.Noty.show('Invalid URL');
	          reRender();
	          return;
	        }
	        if (plugins.some(function (p) {
	          return p.url === url;
	        })) {
	          Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_already_installed') || 'Already installed');
	          reRender();
	          return;
	        }
	        var guessedName = extractNameFromUrl(url);
	        input({
	          title: Lampa.Lang.translate('gramlink_plugins_name') || 'Plugin name',
	          align: 'center',
	          value: guessedName,
	          onSubmit: function onSubmit(name) {
	            var newPlugin = {
	              url: url,
	              name: name && name.trim() || guessedName,
	              status: 1,
	              custom: {}
	            };
	            plugins.push(newPlugin);
	            if (isActive) {
	              var live = collectPlugins();
	              live.push(newPlugin);
	              Lampa.Storage.set('plugins', live);
	              publishDelta('add', newPlugin);
	              Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_added') || 'Plugin added');
	              reRender();
	              // ponytail: reload so Plugins._loaded syncs with storage
	              showReloadPrompt();
	            } else {
	              saveSnapshot(function () {
	                reRender();
	              });
	            }
	          }
	        });
	      }
	    });
	  }
	  function doRemoveConfirm(plugin, idx) {
	    var prevController = Lampa.Controller.enabled().name;
	    Lampa.Select.show({
	      title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove plugin',
	      items: [{
	        title: '"' + (plugin.name || plugin.url) + '" — ' + (Lampa.Lang.translate('gramlink_plugins_remove_confirm') || 'remove?'),
	        noenter: true
	      }, {
	        title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
	        _do: 'remove'
	      }, {
	        title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	        _do: 'cancel'
	      }],
	      onBack: function onBack() {
	        Lampa.Controller.toggle(prevController);
	      },
	      onSelect: function onSelect(item) {
	        if (item._do === 'remove') {
	          plugins.splice(idx, 1);
	          if (isActive) {
	            var live = collectPlugins().filter(function (p) {
	              return p.url !== plugin.url;
	            });
	            Lampa.Storage.set('plugins', live);
	            publishDelta('remove', {
	              url: plugin.url,
	              name: plugin.name,
	              status: plugin.status
	            });
	            Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_removed') || 'Plugin removed');
	            reRender();
	            // ponytail: reload so Plugins._loaded syncs with storage
	            showReloadPrompt();
	          } else {
	            saveSnapshot(function () {
	              reRender();
	            });
	          }
	        } else {
	          Lampa.Controller.toggle(prevController);
	        }
	      }
	    });
	  }

	  // ─── Save snapshot for inactive profile ──────────────────

	  function saveSnapshot(onDone) {
	    var client = GatewayClient.getInstance();
	    var channelId = getChannelId();
	    var topicId = Lampa.Storage.get('gramlink_profiles_topic', '');
	    if (!client.isConnected() || !channelId || !topicId) {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected') || 'Not connected');
	      if (onDone) onDone();
	      return;
	    }
	    var now = Math.floor(Date.now() / 1000);
	    var fileData = buildFileData({
	      name: profileName,
	      plugins: deepClone(plugins),
	      bookmarks: originalData && originalData.bookmarks || undefined,
	      timeline: originalData && originalData.timeline || undefined,
	      settings: originalData && originalData.settings || undefined,
	      device_overrides: originalData && originalData.device_overrides || undefined
	    });
	    var caption = buildCaption({
	      name: profileName,
	      updated: now
	    });
	    var fileName = buildProfileFileName(profileName, now);
	    Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_saving') || 'Saving…');
	    client.sendFile(channelId, topicId, JSON.stringify(fileData, null, 2), fileName, caption).then(function (newMsgId) {
	      if (newMsgId) {
	        client.deleteMessage(channelId, profileMsgId).catch(function () {});
	        var activeId = Lampa.Storage.get('gramlink_active_profile', '');
	        if (String(activeId) === String(profileMsgId)) {
	          Lampa.Storage.set('gramlink_active_profile', String(newMsgId));
	        }
	        profileMsgId = newMsgId;
	        Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_saved') || 'Saved');
	      } else {
	        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Save failed');
	      }
	      if (onDone) onDone();
	    }).catch(function () {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Save failed');
	      if (onDone) onDone();
	    });
	  }

	  // ─── Delta publish ─────────────────────────────────────

	  function publishDelta(action, plugin) {
	    var syncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (!syncTopicId) return;
	    Profiles.publishLocalDelta(syncTopicId, 'plugin_change', {
	      action: action,
	      plugin: plugin
	    });
	  }

	  // ─── Re-render ─────────────────────────────────────────

	  function reRender() {
	    renderPluginList();
	  }
	}

	// ═══════════════════════════════════════════════════════════════════
	//  Load snapshot for inactive profile
	// ═══════════════════════════════════════════════════════════════════

	function loadSnapshotThenPush(profileMsgId, profileName) {
	  var client = GatewayClient.getInstance();
	  var channelId = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
	  var topicId = Lampa.Storage.get('gramlink_profiles_topic', '');
	  if (!channelId || !topicId) {
	    Lampa.Noty.show('Sync channel not ready');
	    return;
	  }
	  Lampa.Noty.show(Lampa.Lang.translate('gramlink_loading') || 'Loading…');
	  client.getMessages(channelId, topicId, 50).then(function (msgs) {
	    var target = null;
	    msgs.forEach(function (m) {
	      if (String(m.id) === String(profileMsgId)) target = m;
	    });
	    if (!target) {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_profile_not_found') || 'Profile not found');
	      return;
	    }
	    return client.downloadMessageFile(target).then(function (fileData) {
	      if (!fileData) {
	        Lampa.Noty.show('Could not load profile data');
	        return;
	      }
	      try {
	        var data = JSON.parse(fileData);
	        setTimeout(function () {
	          Lampa.Activity.push({
	            url: '',
	            title: Lampa.Lang.translate('gramlink_plugins_title').replace('{name}', profileName),
	            component: 'gramlink_plugin_manager',
	            page: 1,
	            _plugins: deepClone(data.plugins || []),
	            _isActive: false,
	            _profileMsgId: profileMsgId,
	            _profileName: profileName,
	            _originalData: data
	          });
	        }, 200);
	      } catch (e) {
	        Lampa.Noty.show('Invalid profile data');
	      }
	    });
	  }).catch(function () {
	    Lampa.Noty.show('Could not load profile data');
	  });
	}

	// ═══════════════════════════════════════════════════════════════════
	//  Public API
	// ═══════════════════════════════════════════════════════════════════

	var PluginManager = {
	  open: function open(profileMsgId, profileName, isActive) {
	    if (isActive) {
	      var plugins = deepClone(collectPlugins());
	      setTimeout(function () {
	        Lampa.Activity.push({
	          url: '',
	          title: Lampa.Lang.translate('gramlink_plugins_title').replace('{name}', profileName || 'Unnamed'),
	          component: 'gramlink_plugin_manager',
	          page: 1,
	          _plugins: plugins,
	          _isActive: true,
	          _profileMsgId: profileMsgId,
	          _profileName: profileName || 'Unnamed'
	        });
	      }, 200);
	    } else {
	      if (!GatewayClient.getInstance().isConnected()) {
	        Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
	        return;
	      }
	      loadSnapshotThenPush(profileMsgId, profileName || 'Unnamed');
	    }
	  }
	};

	// ═══════════════════════════════════════════════════════════════════
	//  Helpers
	// ═══════════════════════════════════════════════════════════════════

	function truncateUrl(url) {
	  if (!url) return '';
	  try {
	    var u = new URL(url);
	    var host = u.hostname;
	    var path = u.pathname.split('/').pop() || '';
	    return host + '/…/' + path;
	  } catch (e) {
	    return url.length > 50 ? url.slice(0, 47) + '…' : url;
	  }
	}

	var $$6 = require('../internals/export');
	var assign = require('../internals/object-assign');

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$6({
	  target: 'Object',
	  stat: true,
	  arity: 2,
	  forced: Object.assign !== assign
	}, {
	  assign: assign
	});

	var $$5 = require('../internals/export');
	var FREEZING$2 = require('../internals/freezing');
	var fails$4 = require('../internals/fails');
	var isObject$4 = require('../internals/is-object');
	var onFreeze$1 = require('../internals/internal-metadata').onFreeze;

	// eslint-disable-next-line es/no-object-freeze -- safe
	var $freeze = Object.freeze;
	var FAILS_ON_PRIMITIVES$1 = fails$4(function () {
	  $freeze(1);
	});

	// `Object.freeze` method
	// https://tc39.es/ecma262/#sec-object.freeze
	$$5({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1,
	  sham: !FREEZING$2
	}, {
	  freeze: function freeze(it) {
	    return $freeze && isObject$4(it) ? $freeze(onFreeze$1(it)) : it;
	  }
	});

	var $$4 = require('../internals/export');
	var $isExtensible = require('../internals/object-is-extensible');

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	// eslint-disable-next-line es/no-object-isextensible -- safe
	$$4({
	  target: 'Object',
	  stat: true,
	  forced: Object.isExtensible !== $isExtensible
	}, {
	  isExtensible: $isExtensible
	});

	var $$3 = require('../internals/export');
	var fails$3 = require('../internals/fails');
	var isObject$3 = require('../internals/is-object');
	var classof$1 = require('../internals/classof-raw');
	var ARRAY_BUFFER_NON_EXTENSIBLE$1 = require('../internals/array-buffer-non-extensible');

	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var $isFrozen = Object.isFrozen;
	var FORCED$1 = ARRAY_BUFFER_NON_EXTENSIBLE$1 || fails$3(function () {
	});

	// `Object.isFrozen` method
	// https://tc39.es/ecma262/#sec-object.isfrozen
	$$3({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$1
	}, {
	  isFrozen: function isFrozen(it) {
	    if (!isObject$3(it)) return true;
	    if (ARRAY_BUFFER_NON_EXTENSIBLE$1 && classof$1(it) === 'ArrayBuffer') return true;
	    return $isFrozen ? $isFrozen(it) : false;
	  }
	});

	var $$2 = require('../internals/export');
	var fails$2 = require('../internals/fails');
	var isObject$2 = require('../internals/is-object');
	var classof = require('../internals/classof-raw');
	var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible');

	// eslint-disable-next-line es/no-object-issealed -- safe
	var $isSealed = Object.isSealed;
	var FORCED = ARRAY_BUFFER_NON_EXTENSIBLE || fails$2(function () {
	});

	// `Object.isSealed` method
	// https://tc39.es/ecma262/#sec-object.issealed
	$$2({
	  target: 'Object',
	  stat: true,
	  forced: FORCED
	}, {
	  isSealed: function isSealed(it) {
	    if (!isObject$2(it)) return true;
	    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return true;
	    return $isSealed ? $isSealed(it) : false;
	  }
	});

	var $$1 = require('../internals/export');
	var isObject$1 = require('../internals/is-object');
	var onFreeze = require('../internals/internal-metadata').onFreeze;
	var FREEZING$1 = require('../internals/freezing');
	var fails$1 = require('../internals/fails');

	// eslint-disable-next-line es/no-object-seal -- safe
	var $seal = Object.seal;
	var FAILS_ON_PRIMITIVES = fails$1(function () {
	  $seal(1);
	});

	// `Object.seal` method
	// https://tc39.es/ecma262/#sec-object.seal
	$$1({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES,
	  sham: !FREEZING$1
	}, {
	  seal: function seal(it) {
	    return $seal && isObject$1(it) ? $seal(onFreeze(it)) : it;
	  }
	});

	var FREEZING = require('../internals/freezing');
	var globalThis$1 = require('../internals/global-this');
	var uncurryThis = require('../internals/function-uncurry-this');
	var defineBuiltIns = require('../internals/define-built-ins');
	var InternalMetadataModule = require('../internals/internal-metadata');
	var collection = require('../internals/collection');
	var collectionWeak = require('../internals/collection-weak');
	var isObject = require('../internals/is-object');
	var enforceInternalState = require('../internals/internal-state').enforce;
	var fails = require('../internals/fails');
	var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection');
	var $Object = Object;
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray = Array.isArray;
	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible = $Object.isExtensible;
	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var isFrozen = $Object.isFrozen;
	// eslint-disable-next-line es/no-object-issealed -- safe
	var isSealed = $Object.isSealed;
	// eslint-disable-next-line es/no-object-freeze -- safe
	var freeze = $Object.freeze;
	// eslint-disable-next-line es/no-object-seal -- safe
	var seal = $Object.seal;
	var IS_IE11 = !globalThis$1.ActiveXObject && 'ActiveXObject' in globalThis$1;
	var InternalWeakMap;
	var wrapper = function wrapper(init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.es/ecma262/#sec-weakmap-constructor
	var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
	var WeakMapPrototype = $WeakMap.prototype;
	var nativeSet = uncurryThis(WeakMapPrototype.set);

	// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
	var hasMSEdgeFreezingBug = function hasMSEdgeFreezingBug() {
	  return FREEZING && fails(function () {
	    var frozenArray = freeze([]);
	    nativeSet(new $WeakMap(), frozenArray, 1);
	    return !isFrozen(frozenArray);
	  });
	};

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (NATIVE_WEAK_MAP) if (IS_IE11) {
	  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.enable();
	  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
	  var nativeHas = uncurryThis(WeakMapPrototype.has);
	  var nativeGet = uncurryThis(WeakMapPrototype.get);
	  defineBuiltIns(WeakMapPrototype, {
	    'delete': function _delete(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete(this, key) || state.frozen['delete'](key);
	      }
	      return nativeDelete(this, key);
	    },
	    has: function has(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) || state.frozen.has(key);
	      }
	      return nativeHas(this, key);
	    },
	    get: function get(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
	      }
	      return nativeGet(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet(this, key, value);
	      return this;
	    }
	  });
	  // Chakra Edge frozen keys fix
	} else if (hasMSEdgeFreezingBug()) {
	  defineBuiltIns(WeakMapPrototype, {
	    set: function set(key, value) {
	      var arrayIntegrityLevel;
	      if (isArray(key)) {
	        if (isFrozen(key)) arrayIntegrityLevel = freeze;else if (isSealed(key)) arrayIntegrityLevel = seal;
	      }
	      nativeSet(this, key, value);
	      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
	      return this;
	    }
	  });
	}

	/**
	 * compat.js — GramJS compatibility checker
	 *
	 * Two groups of checks:
	 *   - Syntax (BigInt literal, async/await, generators, ?.) — NOT polyfilled,
	 *     fail at bundle parse stage with SyntaxError. Detected via new Function(snippet).
	 *   - Runtime API (WebAssembly, crypto.subtle, Map/Set, Proxy) — check typeof,
	 *     some are polyfilled, some not (BigInt64Array, Proxy).
	 *
	 * @returns {Object} { supported, blockers, warnings, details }
	 */
	function checkGramJSCompatibility() {
	  var blockers = [];
	  var warnings = [];
	  var details = {
	    syntax: {},
	    runtime: {}
	  };

	  // ── 1. Syntax probes
	  function canParse(snippet) {
	    try {
	      new Function(snippet);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	  details.syntax.arrowFn = canParse('()=>{}');
	  details.syntax.letConst = canParse('let a=1; const b=2;');
	  details.syntax.templateLit = canParse('var x=`y`; var y=`${x}`;');
	  details.syntax.classKw = canParse('class X{}');
	  details.syntax.asyncAwait = canParse('async function f(){await 1;}');
	  details.syntax.generator = canParse('function* g(){yield 1;}');
	  details.syntax.bigIntLit = canParse('1n; 2n+3n;');
	  details.syntax.optChain = canParse('({})?.x; ({})?.[0]');
	  details.syntax.exponent = canParse('2**3;');
	  details.syntax.spread = canParse('var a=[1]; var b=[...a]; function f(...c){}');
	  details.syntax.destructuring = canParse('var {a}={a:1}; var [b]=[1];');
	  details.syntax.defaultParam = canParse('function f(a=1){}');

	  // ── 2. Runtime API checks
	  details.runtime.bigInt = typeof BigInt !== 'undefined';
	  details.runtime.bigInt64Array = typeof BigInt64Array !== 'undefined';
	  details.runtime.webAssembly = typeof WebAssembly !== 'undefined' && typeof WebAssembly.instantiate === 'function';
	  details.runtime.cryptoSubtle = !!(window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === 'function');
	  details.runtime.cryptoRandom = !!(window.crypto && typeof window.crypto.getRandomValues === 'function');
	  details.runtime.textEncoder = typeof TextEncoder !== 'undefined';
	  details.runtime.textDecoder = typeof TextDecoder !== 'undefined';
	  details.runtime.promise = typeof Promise !== 'undefined';
	  details.runtime.mapSet = typeof Map !== 'undefined' && typeof Set !== 'undefined';
	  details.runtime.weakMap = typeof WeakMap !== 'undefined';
	  details.runtime.proxy = typeof Proxy !== 'undefined';
	  details.runtime.uint8Array = typeof Uint8Array !== 'undefined';
	  details.runtime.arrayFrom = typeof Array.from === 'function';
	  details.runtime.objectAssign = typeof Object.assign === 'function';

	  // ── 3. Classification: BLOCKERS vs WARNINGS
	  if (!details.syntax.bigIntLit || !details.runtime.bigInt) {
	    blockers.push('BigInt — 206× у бандлі, MTProto int128/int256, RSA, DH. Не поліфиться.');
	  }
	  if (!details.runtime.bigInt64Array) {
	    blockers.push('BigInt64Array — 6×, TDLib-подібна серіалізація. Не поліфиться.');
	  }
	  if (!details.syntax.asyncAwait) {
	    blockers.push('async/await — 64× async + 405× await. Синтаксично, не поліфиться.');
	  }
	  if (!details.syntax.generator) {
	    blockers.push('Generators (function*) — 11×, async iteration helpers. Не поліфиться.');
	  }
	  if (!details.syntax.arrowFn) {
	    blockers.push('Arrow functions — 246×, синтаксично.');
	  }
	  if (!details.syntax.optChain) {
	    blockers.push('Optional chaining (?.) — 2×, ES2020. Синтаксично.');
	  }
	  if (!details.syntax.exponent) {
	    blockers.push('Exponent operator (**) — 17×. Синтаксично.');
	  }
	  if (!details.runtime.cryptoSubtle) {
	    warnings.push('crypto.subtle — немає (HTTP-контекст). TGSBundle має pure-JS fallback для SHA-1/256/512, HMAC, PBKDF2. Повільніше, але працює.');
	  }
	  if (!details.runtime.cryptoRandom) {
	    blockers.push('crypto.getRandomValues — генератор nonces у MTProto.');
	  }
	  if (!details.runtime.textEncoder || !details.runtime.textDecoder) {
	    blockers.push('TextEncoder/TextDecoder — UTF-8 серіалізація string\'ів у MTProto.');
	  }
	  if (!details.runtime.uint8Array) {
	    blockers.push('Uint8Array — бінарні дані всюди.');
	  }
	  if (!details.runtime.webAssembly) {
	    warnings.push('WebAssembly — AES-IGE fallback на pure-JS, ~5× повільніше.');
	  }
	  if (!details.runtime.proxy) {
	    warnings.push('Proxy — 1×, може зламати окремі reactive-обгортки.');
	  }
	  if (!details.runtime.mapSet) {
	    warnings.push('Map/Set — поліфляться core-js, але без них GramJS не стартане.');
	  }
	  if (!details.runtime.promise) {
	    blockers.push('Promise — 68×, основа асинхронного потоку.');
	  }
	  return {
	    supported: blockers.length === 0,
	    blockers: blockers,
	    warnings: warnings,
	    details: details
	  };
	}
	var _gramlinkCompatReport = null;
	function getCompatReport() {
	  if (!_gramlinkCompatReport) _gramlinkCompatReport = checkGramJSCompatibility();
	  return _gramlinkCompatReport;
	}
	function showCompatReportModal() {
	  var report = getCompatReport();
	  var enabledCtrl = Lampa.Controller.enabled().name;
	  var closing = false; // re-entrance guard

	  var statusColor = report.supported ? report.warnings.length ? '#ffc107' : '#4caf50' : '#f44336';
	  var statusText = report.supported ? report.warnings.length ? Lampa.Lang.translate('gramlink_compat_partial') : Lampa.Lang.translate('gramlink_compat_ok') : Lampa.Lang.translate('gramlink_compat_fail');
	  var html = $('<div class="gramlink-compat" style="padding:1em;max-width:42em;margin:0 auto"></div>');
	  html.append('<div style="display:flex;align-items:center;gap:1em;padding:1em 1.2em;' + 'background:rgba(255,255,255,0.05);border-radius:0.6em;margin-bottom:1.5em">' + '<div style="width:1.2em;height:1.2em;border-radius:50%;flex-shrink:0;background:' + statusColor + ';box-shadow:0 0 .6em ' + statusColor + '80"></div>' + '<div style="flex:1">' + '<div style="font-size:1.2em;font-weight:600">' + statusText + '</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.5);margin-top:.2em">' + Lampa.Lang.translate('gramlink_compat_hint_disclaimer') + '</div>' + '</div></div>');
	  if (report.blockers.length > 0) {
	    html.append('<div style="font-size:1.1em;font-weight:600;margin-bottom:.8em;color:#f44336">' + Lampa.Lang.translate('gramlink_compat_blocked_label') + ' (' + report.blockers.length + ')</div>');
	    var bl = $('<ul style="list-style:none;padding:0;margin:0 0 1.5em"></ul>');
	    report.blockers.forEach(function (b) {
	      bl.append('<li style="padding:.6em .8em;margin-bottom:.4em;background:rgba(244,67,54,0.1);' + 'border-left:3px solid #f44336;border-radius:0 .4em .4em 0;font-size:.95em">' + b + '</li>');
	    });
	    html.append(bl);
	  } else {
	    html.append('<div style="padding:.8em 1em;background:rgba(76,175,80,0.1);border-left:3px solid #4caf50;' + 'border-radius:0 .4em .4em 0;font-size:.95em;margin-bottom:1.5em">' + Lampa.Lang.translate('gramlink_compat_no_blockers') + '</div>');
	  }
	  if (report.warnings.length > 0) {
	    html.append('<div style="font-size:1.1em;font-weight:600;margin-bottom:.8em;color:#ffc107">' + Lampa.Lang.translate('gramlink_compat_warning_label') + ' (' + report.warnings.length + ')</div>');
	    var wn = $('<ul style="list-style:none;padding:0;margin:0 0 1.5em"></ul>');
	    report.warnings.forEach(function (w) {
	      wn.append('<li style="padding:.6em .8em;margin-bottom:.4em;background:rgba(255,193,7,0.08);' + 'border-left:3px solid #ffc107;border-radius:0 .4em .4em 0;font-size:.95em">' + w + '</li>');
	    });
	    html.append(wn);
	  }

	  // ── Raw probe results (inline, scrollable — native Lampa pattern) ──
	  var d = report.details;
	  html.append('<div style="margin-top:1em;padding-top:0.8em;border-top:1px solid rgba(255,255,255,0.08)"></div>');
	  html.append('<div class="settings-param-title"><span>Raw probe results</span></div>');
	  html.append('<div style="display:grid;grid-template-columns:1fr 1fr;gap:1em;font-size:.85em;margin-top:.5em">' + '<div style="background:rgba(255,255,255,0.02);border-radius:.4em;padding:.5em .8em">' + '<div style="font-weight:600;margin-bottom:.4em;color:rgba(255,255,255,0.5)">Syntax</div>' + Object.keys(d.syntax).map(function (k) {
	    var v = d.syntax[k];
	    return '<div style="display:flex;justify-content:space-between;padding:.2em 0">' + '<span style="color:rgba(255,255,255,0.6)">' + k + '</span>' + '<span style="color:' + (v ? '#4caf50' : '#f44336') + '">' + (v ? "\u2713" : "\u2717") + '</span></div>';
	  }).join('') + '</div>' + '<div style="background:rgba(255,255,255,0.02);border-radius:.4em;padding:.5em .8em">' + '<div style="font-weight:600;margin-bottom:.4em;color:rgba(255,255,255,0.5)">Runtime</div>' + Object.keys(d.runtime).map(function (k) {
	    var v = d.runtime[k];
	    return '<div style="display:flex;justify-content:space-between;padding:.2em 0">' + '<span style="color:rgba(255,255,255,0.6)">' + k + '</span>' + '<span style="color:' + (v ? '#4caf50' : '#f44336') + '">' + (v ? "\u2713" : "\u2717") + '</span></div>';
	  }).join('') + '</div></div>');
	  Lampa.Modal.open({
	    title: Lampa.Lang.translate('gramlink_compat_title'),
	    html: html,
	    size: 'medium',
	    onBack: function onBack() {
	      if (closing) return;
	      closing = true;
	      Lampa.Modal.close();
	      Lampa.Controller.toggle(enabledCtrl);
	    }
	  });
	}

	function initSettings() {
	  var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
	  if (!SettingsApi || !SettingsApi.addComponent) return;

	  // ── Templates for nested components ──────────────────
	  Lampa.Template.add('settings_gramlink_server', '<div></div>');
	  Lampa.Template.add('settings_gramlink_connection', '<div></div>');
	  Lampa.Template.add('settings_gramlink_sync_page', '<div></div>');
	  Lampa.Template.add('settings_gramlink_tools', '<div></div>');
	  // ── Main component (before Interface) ─────────────────
	  SettingsApi.addComponent({
	    component: 'gramlink',
	    name: Lampa.Lang.translate('gramlink_title'),
	    before: 'interface',
	    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.587.192l-8.533 7.77h-.001l.003.003-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.22c.309-1.239-.473-1.8-1.282-1.434z" fill="currentColor"/>' + '</svg>'
	  });

	  // ══════════════════════════════════════════════════════
	  //  MAIN PAGE — section navigation
	  // ══════════════════════════════════════════════════════

	  // ── 1. Authorization ──────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink',
	    param: {
	      name: 'gramlink_open_auth',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_section_auth')
	    },
	    onRender: function onRender(item) {
	      var client = GatewayClient.getInstance();
	      if (client.hasCredentials()) {
	        var userName = Lampa.Storage.get('gramlink_user_name', '');
	        item.find('.settings-param__name').text(Lampa.Lang.translate('gramlink_settings_auth_logout') + (userName ? ': ' + userName : ''));
	      } else {
	        item.find('.settings-param__name').text(Lampa.Lang.translate('gramlink_settings_section_auth'));
	      }
	    },
	    onChange: function onChange() {
	      var client = GatewayClient.getInstance();
	      var enabledCtrl = Lampa.Controller.enabled().name;
	      if (client.hasCredentials()) {
	        Lampa.Modal.open({
	          title: Lampa.Lang.translate('gramlink_settings_logout'),
	          html: $('<div style="padding: 1em">' + Lampa.Lang.translate('gramlink_settings_logout_confirm') + '</div>'),
	          buttons: [{
	            name: Lampa.Lang.translate('gramlink_settings_logout'),
	            onSelect: function onSelect() {
	              client.logout();
	              Lampa.Storage.set('gramlink_user_name', '');
	              Lampa.Modal.close();
	              Lampa.Settings.update();
	            }
	          }, {
	            name: Lampa.Lang.translate('gramlink_title'),
	            onSelect: function onSelect() {
	              Lampa.Modal.close();
	              Lampa.Controller.toggle(enabledCtrl);
	            }
	          }]
	        });
	      } else {
	        var apiId = 24911245;
	        var apiHash = 'af35604124d731e01a113639b905e10e';
	        if (Lampa.Storage.get('gramlink_app_type', 'lampa') === 'custom') {
	          apiId = parseInt(Lampa.Storage.get('gramlink_api_id', ''), 10);
	          apiHash = Lampa.Storage.get('gramlink_api_hash', '');
	        }
	        if (!apiId || !apiHash) {
	          Lampa.Noty.show(Lampa.Lang.translate('gramlink_error_no_api'));
	          return;
	        }
	        startLogin();
	      }
	    }
	  });

	  // ── 2. Synchronization ────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink',
	    param: {
	      name: 'gramlink_open_sync',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_section_sync')
	    },
	    onChange: function onChange() {
	      Lampa.Settings.create('gramlink_sync_page', {
	        onBack: function onBack() {
	          Lampa.Settings.create('gramlink');
	        }
	      });
	    }
	  });

	  // ── 3. Tools ──────────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink',
	    param: {
	      name: 'gramlink_open_tools',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_section_tools')
	    },
	    onChange: function onChange() {
	      Lampa.Settings.create('gramlink_tools', {
	        onBack: function onBack() {
	          Lampa.Settings.create('gramlink');
	        }
	      });
	    }
	  });

	  // ── 4. About plugin (opens directly) ──────────────────
	  SettingsApi.addParam({
	    component: 'gramlink',
	    param: {
	      name: 'gramlink_open_about',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_section_about')
	    },
	    onChange: function onChange() {
	      var html = '<div style="padding:1em">' + '<p>' + Lampa.Lang.translate('gramlink_about_description') + '</p>' + '<p><span style="opacity:0.5">' + Lampa.Lang.translate('gramlink_about_version') + ':</span> ' + VERSION + '</p>' + '<p><span style="opacity:0.5">' + Lampa.Lang.translate('gramlink_about_author') + ':</span>' + Lampa.Lang.translate('gramlink_about_link_author') + '</p>' + '</div>';
	      var enabledCtrl = Lampa.Controller.enabled().name;
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('gramlink_settings_about'),
	        items: [{
	          title: html,
	          disabled: true
	        }],
	        onSelect: function onSelect() {
	          Lampa.Controller.toggle(enabledCtrl);
	        },
	        onBack: function onBack() {
	          Lampa.Controller.toggle(enabledCtrl);
	        }
	      });
	    }
	  });

	  // ── 5. Connection ─────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink',
	    param: {
	      name: 'gramlink_open_connection',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_section_connection')
	    },
	    onChange: function onChange() {
	      Lampa.Settings.create('gramlink_connection', {
	        onBack: function onBack() {
	          Lampa.Settings.create('gramlink');
	        }
	      });
	    }
	  });

	  // ── 6. (moved to Tools) ─────────────────────────────
	  // ══════════════════════════════════════════════════════
	  //  NESTED PAGE: Connection
	  // ══════════════════════════════════════════════════════

	  SettingsApi.addParam({
	    component: 'gramlink_connection',
	    param: {
	      name: 'gramlink_open_server',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_server_type')
	    },
	    onChange: function onChange() {
	      Lampa.Settings.create('gramlink_server', {
	        onBack: function onBack() {
	          Lampa.Settings.create('gramlink_connection', {
	            onBack: function onBack() {
	              Lampa.Settings.create('gramlink');
	            }
	          });
	        }
	      });
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_connection',
	    param: {
	      name: 'gramlink_compat_btn',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_compat_title')
	    },
	    onRender: function onRender(item) {
	      var report = getCompatReport();
	      var cls = 'wait';
	      if (report.supported && report.warnings.length === 0) {
	        cls = 'active';
	      } else if (!report.supported) {
	        cls = 'error';
	      }
	      if (!item.find('.settings-param__status').length) {
	        item.prepend('<div class="settings-param__status"></div>');
	      }
	      item.find('.settings-param__status').removeClass('active error wait').addClass(cls);
	    },
	    onChange: function onChange() {
	      showCompatReportModal();
	    }
	  });

	  // ══════════════════════════════════════════════════════
	  //  NESTED PAGE: Synchronization
	  // ══════════════════════════════════════════════════════

	  SettingsApi.addParam({
	    component: 'gramlink_sync_page',
	    param: {
	      name: 'gramlink_sync_enabled',
	      type: 'trigger',
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_sync_enabled')
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_sync_enabled', value);
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_sync_page',
	    param: {
	      name: 'gramlink_heartbeat',
	      type: 'trigger',
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_sync_heartbeat')
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_heartbeat', value);
	      var client = GatewayClient.getInstance();
	      if (value) {
	        var channelId = Lampa.Storage.get('gramlink_channel_id', '');
	        var syncLogTopicId = Lampa.Storage.get('gramlink_sync_log_topic', '');
	        if (channelId && syncLogTopicId && client.isConnected()) {
	          client.startHeartbeat(channelId, syncLogTopicId);
	        }
	      } else {
	        client.stopHeartbeat();
	      }
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_sync_page',
	    param: {
	      name: 'gramlink_broadcast',
	      type: 'trigger',
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_sync_broadcast')
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_broadcast', value);
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_sync_page',
	    param: {
	      name: 'gramlink_sync_timeout',
	      type: 'select',
	      values: {
	        5: '5',
	        10: '10',
	        30: '30',
	        60: '60'
	      },
	      default: '10'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_timeout'),
	      description: Lampa.Lang.translate('gramlink_settings_timeout_desc')
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_sync_timeout', value);
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_sync_page',
	    param: {
	      name: 'gramlink_poll_interval',
	      type: 'select',
	      values: {
	        5: '5',
	        10: '10',
	        30: '30'
	      },
	      default: '10'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_poll_interval'),
	      description: Lampa.Lang.translate('gramlink_settings_poll_interval_desc')
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_poll_interval', value);
	    }
	  });

	  // ══════════════════════════════════════════════════════
	  //  NESTED PAGE: Tools
	  // ══════════════════════════════════════════════════════

	  SettingsApi.addParam({
	    component: 'gramlink_tools',
	    param: {
	      name: 'gramlink_import_cub',
	      type: 'button'
	    },
	    field: {
	      name: 'Import from Cub'
	    },
	    description: 'Migrate Cub profiles to GramLink',
	    onChange: function onChange() {
	      var profilesTopicId = Lampa.Storage.get('gramlink_profiles_topic', '');
	      if (!profilesTopicId) {
	        Lampa.Noty.show('Sync channel not ready');
	        return;
	      }
	      startMigration(profilesTopicId);
	    }
	  });

	  // ponytail: avatar style moved here from main page
	  SettingsApi.addParam({
	    component: 'gramlink_tools',
	    param: {
	      name: 'gramlink_avatar_style',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_avatar_style'),
	      description: Lampa.Lang.translate('gramlink_settings_avatar_style_desc')
	    },
	    onRender: function onRender(item) {
	      var style = Lampa.Storage.get('gramlink_avatar_style', 'fun-emoji');
	      var label = style ? style.charAt(0).toUpperCase() + style.slice(1) : Lampa.Lang.translate('gramlink_avatar_none');
	      item.find('.settings-param__name').text(Lampa.Lang.translate('gramlink_settings_avatar_style'));
	      if (!item.find('.gramlink-avatar-preview').length) {
	        item.find('.settings-param__name').after('<span class="gramlink-avatar-preview" style="margin-left:0.5em;opacity:0.6"></span>');
	      }
	      item.find('.gramlink-avatar-preview').text(label);
	    },
	    onChange: function onChange() {
	      openAvatarStyleSelect();
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_tools',
	    param: {
	      name: 'gramlink_manage_plugins',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_plugins_manage')
	    },
	    onRender: function onRender(item) {
	      var activeId = Lampa.Storage.get('gramlink_active_profile', '');
	      if (!activeId) item.addClass('hide');
	    },
	    onChange: function onChange() {
	      var activeId = Lampa.Storage.get('gramlink_active_profile', '');
	      var activeName = Lampa.Storage.get('gramlink_active_profile_name', '');
	      if (!activeId) {
	        Lampa.Noty.show('No active profile');
	        return;
	      }
	      PluginManager.open(activeId, activeName || 'Active', true);
	    }
	  });

	  // ═══════════════════════════════════════════════════════
	  //  NESTED PAGE: Server Settings
	  // ═══════════════════════════════════════════════════════

	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_app_type',
	      type: 'select',
	      values: {
	        'lampa': 'gramlink_settings_app_lampa',
	        'custom': 'gramlink_settings_app_custom'
	      },
	      default: 'lampa'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_app'),
	      description: Lampa.Lang.translate('gramlink_settings_app_desc')
	    },
	    onChange: function onChange(value) {
	      var show = value === 'custom';
	      $('.scroll__body').find('[data-name="gramlink_api_id"]').toggleClass('hide', !show);
	      $('.scroll__body').find('[data-name="gramlink_api_hash"]').toggleClass('hide', !show);
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_api_id',
	      type: 'input',
	      placeholder: '12345',
	      values: '',
	      default: ''
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_api_id'),
	      description: Lampa.Lang.translate('gramlink_settings_api_id_desc')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, Lampa.Storage.get('gramlink_app_type', 'lampa') === 'custom');
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_api_id', value);
	    }
	  });
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_api_hash',
	      type: 'input',
	      placeholder: '0123456789abcdef0123456789abcdef',
	      values: '',
	      default: ''
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_api_hash'),
	      description: Lampa.Lang.translate('gramlink_settings_api_hash_desc')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, Lampa.Storage.get('gramlink_app_type', 'lampa') === 'custom');
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_api_hash', value);
	    }
	  });

	  // ── Server type: official / custom ─────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_server_type',
	      type: 'select',
	      values: {
	        'official': 'gramlink_settings_server_type_official',
	        'custom': 'gramlink_settings_server_type_custom',
	        'gateway': 'Gateway (WebSocket Proxy)'
	      },
	      default: 'official'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_server_type')
	    },
	    onChange: function onChange(value) {
	      var client = GatewayClient.getInstance();
	      var oldVal = value === 'official' ? 'custom' : 'official';
	      if (client.hasCredentials()) {
	        Lampa.Modal.open({
	          title: Lampa.Lang.translate('gramlink_settings_server_warning_title'),
	          html: $('<div style="padding:1em">' + Lampa.Lang.translate('gramlink_settings_server_warning_desc') + '</div>'),
	          buttons: [{
	            name: Lampa.Lang.translate('gramlink_settings_server_confirm'),
	            onSelect: function onSelect() {
	              client.logout();
	              Lampa.Storage.set('gramlink_user_name', '');
	              Lampa.Storage.set('gramlink_server_type', value);
	              if (value === 'custom') {
	                Lampa.Storage.set('gramlink_custom_host', Lampa.Storage.get('gramlink_custom_host', ''));
	                Lampa.Storage.set('gramlink_custom_port', Lampa.Storage.get('gramlink_custom_port', '443'));
	              }
	              $('.scroll__body').find('[data-name="gramlink_custom_host"]').toggleClass('hide', value !== 'custom');
	              $('.scroll__body').find('[data-name="gramlink_custom_port"]').toggleClass('hide', value !== 'custom');
	              $('.scroll__body').find('[data-name="gramlink_gateway_url"]').toggleClass('hide', value !== 'gateway');
	              Lampa.Modal.close();
	              Lampa.Settings.create('gramlink_server', {
	                onBack: function onBack() {
	                  Lampa.Settings.create('gramlink_connection', {
	                    onBack: function onBack() {
	                      Lampa.Settings.create('gramlink');
	                    }
	                  });
	                }
	              });
	            }
	          }, {
	            name: Lampa.Lang.translate('gramlink_settings_server_cancel'),
	            onSelect: function onSelect() {
	              Lampa.Storage.set('gramlink_server_type', oldVal);
	              Lampa.Modal.close();
	              Lampa.Settings.create('gramlink_server', {
	                onBack: function onBack() {
	                  Lampa.Settings.create('gramlink_connection', {
	                    onBack: function onBack() {
	                      Lampa.Settings.create('gramlink');
	                    }
	                  });
	                }
	              });
	            }
	          }]
	        });
	      } else {
	        Lampa.Storage.set('gramlink_server_type', value);
	        $('.scroll__body').find('[data-name="gramlink_custom_host"]').toggleClass('hide', value !== 'custom');
	        $('.scroll__body').find('[data-name="gramlink_custom_port"]').toggleClass('hide', value !== 'custom');
	        $('.scroll__body').find('[data-name="gramlink_gateway_url"]').toggleClass('hide', value !== 'gateway');
	      }
	    }
	  });

	  // ── Custom server host ─────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_custom_host',
	      type: 'input',
	      placeholder: 'custom.example.com',
	      values: '',
	      default: ''
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_server_custom_host')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, Lampa.Storage.get('gramlink_server_type', 'official') === 'custom');
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_custom_host', value);
	    }
	  });

	  // ── Custom server port ─────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_custom_port',
	      type: 'input',
	      placeholder: '443',
	      values: '',
	      default: '443'
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_server_custom_port')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, Lampa.Storage.get('gramlink_server_type', 'official') === 'custom');
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_custom_port', value);
	    }
	  });

	  // ── Proxy: enabled ─────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_proxy_enabled',
	      type: 'trigger',
	      default: false
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_proxy_title'),
	      description: Lampa.Lang.translate('gramlink_settings_proxy_desc')
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_proxy_enabled', value);
	      $('.scroll__body').find('[data-name="gramlink_proxy_host"]').toggleClass('hide', !GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
	      $('.scroll__body').find('[data-name="gramlink_proxy_port"]').toggleClass('hide', !GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
	      $('.scroll__body').find('[data-name="gramlink_proxy_secret"]').toggleClass('hide', !GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
	      GatewayClient.getInstance().reconnect();
	    }
	  });

	  // ── Proxy: host ────────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_proxy_host',
	      type: 'input',
	      placeholder: 'proxy.example.com',
	      values: '',
	      default: ''
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_proxy_host')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_proxy_host', value);
	      GatewayClient.getInstance().reconnect();
	    }
	  });

	  // ── Proxy: port ────────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_proxy_port',
	      type: 'input',
	      placeholder: '443',
	      values: '',
	      default: ''
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_proxy_port')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_proxy_port', value);
	      GatewayClient.getInstance().reconnect();
	    }
	  });

	  // ── Proxy: secret ──────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_proxy_secret',
	      type: 'input',
	      placeholder: 'ee...',
	      values: '',
	      default: ''
	    },
	    field: {
	      name: Lampa.Lang.translate('gramlink_settings_proxy_secret')
	    },
	    onRender: function onRender(item) {
	      toggleField(item, GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_proxy_secret', value);
	      GatewayClient.getInstance().reconnect();
	    }
	  });

	  // ═══════════════════════════════════════════════════
	  //  Gateway (WebSocket Proxy) Settings
	  // ═══════════════════════════════════════════════════

	  // ── Gateway URL ──────────────────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_gateway_url',
	      type: 'input',
	      placeholder: 'wss://mtproto-master.fly.dev',
	      values: '',
	      default: 'wss://mtproto-master.fly.dev'
	    },
	    field: {
	      name: 'Gateway URL',
	      description: 'WebSocket URL for MTProto Gateway (old devices)'
	    },
	    onRender: function onRender(item) {
	      toggleField(item, Lampa.Storage.get('gramlink_server_type', 'official') === 'gateway');
	    },
	    onChange: function onChange(value) {
	      if (value) Lampa.Storage.set('gramlink_gateway_url', value);
	    }
	  });

	  // ── Force Gateway mode toggle ────────────────────────
	  SettingsApi.addParam({
	    component: 'gramlink_server',
	    param: {
	      name: 'gramlink_gateway_mode',
	      type: 'trigger',
	      default: false
	    },
	    field: {
	      name: 'Force Gateway mode',
	      description: 'Use Gateway WebSocket instead of direct GramJS'
	    },
	    onChange: function onChange(value) {
	      Lampa.Storage.set('gramlink_gateway_mode', value);
	      if (value) {
	        Lampa.Storage.set('gramlink_server_type', 'gateway');
	      }
	      Lampa.Settings.update();
	    }
	  });
	}
	function toggleField(item, show) {
	  if (show) {
	    item.removeClass('hide');
	  } else {
	    item.addClass('hide');
	  }
	}
	function openAvatarStyleSelect() {
	  var current = Lampa.Storage.get('gramlink_avatar_style', 'fun-emoji');
	  var enabledCtrl = Lampa.Controller.enabled().name;
	  var items = [];
	  var hasStoredStyle = Lampa.Storage.get('gramlink_avatar_style', null) !== null;

	  // "Initials" — always opt-out option
	  items.push({
	    title: Lampa.Lang.translate('gramlink_avatar_none'),
	    selected: !hasStoredStyle
	  });
	  DICE_BEAR_STYLES.forEach(function (s) {
	    var previewUrl = DICE_BEAR_BASE + s + '/svg?seed=Lampa';
	    var iconHtml = '<img src="' + previewUrl + '" style="width:2em;height:2em;border-radius:50%;object-fit:cover;">';
	    items.push({
	      title: s,
	      template: 'selectbox_icon',
	      icon: iconHtml,
	      selected: s === current
	    });
	  });
	  Lampa.Select.show({
	    title: Lampa.Lang.translate('gramlink_settings_avatar_style'),
	    items: items,
	    onBack: function onBack() {
	      Lampa.Controller.toggle(enabledCtrl);
	    },
	    onSelect: function onSelect(item) {
	      var selectedStyle = item.title === Lampa.Lang.translate('gramlink_avatar_none') ? '' : item.title;
	      Lampa.Storage.set('gramlink_avatar_style', selectedStyle);
	      Lampa.Controller.toggle(enabledCtrl);
	      Lampa.Settings.create('gramlink_tools', {
	        onBack: function onBack() {
	          Lampa.Settings.create('gramlink');
	        }
	      });
	    }
	  });
	}

	// ─── Discovery ──────────────────────────────────────────

	function discoverDevices() {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return Promise.resolve([]);
	  var channelId = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
	  var syncLogTopicId = Lampa.Storage.get(STORAGE_KEYS.SYNC_LOG_TOPIC, '');
	  if (!channelId || !syncLogTopicId) return Promise.resolve([]);
	  return client.getOnlineDevices(channelId, syncLogTopicId);
	}

	// ─── Send remote commands ───────────────────────────────

	function sendOpenCard(deviceId, cardData) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  var channelId = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
	  var remoteCmdTopicId = Lampa.Storage.get(STORAGE_KEYS.REMOTE_CMD_TOPIC, '');
	  if (!channelId || !remoteCmdTopicId) return;
	  client.publish(channelId, remoteCmdTopicId, 'open_card', {
	    card: cardData
	  }, deviceId);
	}
	function sendPlayVideo(deviceId, mediaData) {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  var channelId = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
	  var remoteCmdTopicId = Lampa.Storage.get(STORAGE_KEYS.REMOTE_CMD_TOPIC, '');
	  if (!channelId || !remoteCmdTopicId) return;
	  client.publish(channelId, remoteCmdTopicId, 'play_video', {
	    media: mediaData
	  }, deviceId);
	}

	// ─── Device picker modal ────────────────────────────────

	function showDevicePicker(options) {
	  /**
	   * @param {Object} options
	   * @param {string} options.title - Modal title
	   * @param {string} options.prompt - Prompt text (optional)
	   * @param {function(Object)} options.onSelect - Called with device object {device_id, device_name}
	   * @param {function} [options.onCancel] - Called if user cancels
	   */

	  var enabledCtrl = Lampa.Controller.enabled().name;
	  discoverDevices().then(function (devices) {
	    var myId = getDeviceId();
	    // Filter out current device
	    devices = devices.filter(function (d) {
	      return d.device_id !== myId;
	    });
	    if (devices.length === 0) {
	      Lampa.Noty.show('No other devices online');
	      if (options.onCancel) options.onCancel();
	      return;
	    }
	    var items = devices.map(function (d) {
	      return {
	        title: d.device_name || 'Unknown',
	        _device: d
	      };
	    });
	    items.push({
	      title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	      _cancel: true
	    });
	    Lampa.Select.show({
	      title: options.title || 'Select device',
	      items: items,
	      onBack: function onBack() {
	        Lampa.Controller.toggle(enabledCtrl);
	        if (options.onCancel) options.onCancel();
	      },
	      onSelect: function onSelect(item) {
	        Lampa.Controller.toggle(enabledCtrl);
	        if (item._cancel) {
	          if (options.onCancel) options.onCancel();
	          return;
	        }
	        if (options.onSelect) options.onSelect(item._device);
	      }
	    });
	  }).catch(function () {
	    Lampa.Noty.show('Failed to discover devices');
	    if (options.onCancel) options.onCancel();
	  });
	}

	// ─── Context menu integration ───────────────────────────

	function setupContextMenu() {
	  var manifest = {
	    type: 'video',
	    version: VERSION,
	    name: 'Open on device',
	    description: 'Open this content on another device',
	    onContextMenu: function onContextMenu(object) {
	      var client = GatewayClient.getInstance();
	      if (!client.isConnected()) return null;
	      return {
	        name: 'Open on device',
	        description: ''
	      };
	    },
	    onContextLauch: function onContextLauch(data) {
	      var card = Lampa.Utils.clearCard ? Lampa.Utils.clearCard(JSON.parse(JSON.stringify(data))) : data;
	      showDevicePicker({
	        title: 'Open on device',
	        onSelect: function onSelect(device) {
	          sendOpenCard(device.device_id, card);
	          Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
	        }
	      });
	    }
	  };
	  Lampa.Manifest.plugins = manifest;
	}

	// ─── Player Panel share integration ─────────────────────

	function setupPlayerPanel() {
	  Lampa.PlayerPanel.listener.follow('share', function (e) {
	    var client = GatewayClient.getInstance();
	    if (!client.isConnected()) return;
	    showDevicePicker({
	      title: 'Play on device',
	      onSelect: function onSelect(device) {
	        var playdata = Lampa.Player.playdata();
	        if (playdata) {
	          sendPlayVideo(device.device_id, playdata);
	          Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
	        }
	      }
	    });
	  });
	}

	// ─── Broadcast head button ──────────────────────────────

	function addBroadcastButton() {
	  $('.open--broadcast').remove();
	  var $broadcastBtn = $('<div class="head__action selector open--broadcast" style="display:none">' + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M1.04272 7.22978V6.76392C1.04272 4.00249 3.2813 1.76392 6.04272 1.76392H17.7877C20.5491 1.76392 22.7877 4.00249 22.7877 6.76392V17.2999C22.7877 20.0613 20.5491 22.2999 17.7877 22.2999H15.8387" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path>' + '<circle cx="6.69829" cy="16.6443" r="5.65556" fill="currentColor"></circle>' + '</svg>' + '</div>');
	  $('.head__action.open--search').after($broadcastBtn);
	  function updateVisibility() {
	    var client = GatewayClient.getInstance();
	    var active = Lampa.Activity.active();
	    if (client.isConnected() && active && active.component === 'full') {
	      $broadcastBtn.show();
	    } else {
	      $broadcastBtn.hide();
	    }
	  }
	  updateVisibility();
	  Lampa.Listener.follow('activity', function (e) {
	    if (e.type === 'start') updateVisibility();
	  });
	  Lampa.Listener.follow('lws_connect', function (e) {
	    updateVisibility();
	  });
	  $broadcastBtn.on('hover:enter hover:click hover:touch', function () {
	    var card = Lampa.Activity.extractObject ? Lampa.Activity.extractObject(Lampa.Activity.active()) : null;
	    if (!card) {
	      Lampa.Noty.show('Nothing to share');
	      return;
	    }
	    showDevicePicker({
	      title: 'Open on device',
	      onSelect: function onSelect(device) {
	        sendOpenCard(device.device_id, card);
	        Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
	      }
	    });
	  });
	}

	// ─── Init ───────────────────────────────────────────────

	function setupBroadcast() {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) return;
	  setupContextMenu();
	  setupPlayerPanel();
	  addBroadcastButton();
	}
	var Broadcast = {
	  discoverDevices: discoverDevices,
	  showDevicePicker: showDevicePicker,
	  sendOpenCard: sendOpenCard,
	  sendPlayVideo: sendPlayVideo,
	  setupContextMenu: setupContextMenu,
	  setupPlayerPanel: setupPlayerPanel,
	  addBroadcastButton: addBroadcastButton,
	  setupBroadcast: setupBroadcast
	};

	/**
	 * sdk/topic-config.js — Channel and topic configuration
	 *
	 * Eliminates:
	 *   D-02 — CHANNEL_TITLE and TOPIC_NAMES now in one place.
	 *          auth.js had its own TOPICS array (4 items, no remote-cmd);
	 *          hub.js had TOPIC_NAMES (5 items, with remote-cmd).
	 *          Now one source of truth: 5 topics.
	 *
	 * Usage:
	 *   import { CHANNEL_TITLE, TOPIC_NAMES, TOPIC_STORAGE_KEYS } from '../sdk/topic-config'
	 */

	var CHANNEL_TITLE = "\uD83D\uDD04 Lampa Sync [DO NOT DELETE]";
	var TOPIC_NAMES = ['sync-log', 'remote-cmd', 'backup', 'profiles', 'profiles-sync'];

	/**
	 * sdk/manifest_schema.js — Backup manifest schema and key categorization
	 *
	 * Eliminates:
	 *   — categorize() centralized instead of manual localStorage filtering
	 *   — buildManifest() / validateManifest() instead of manual JSON.stringify
	 *   — DEVICE_KEY_PREFIXES defined in one place
	 *
	 * Usage:
	 *   import { categorize, buildManifest, validateManifest, DEVICE_KEY_PREFIXES } from '../sdk/manifest_schema'
	 */

	/**
	 * Key prefixes that belong to device_state (device settings).
	 * Synced with profiles.js:DEVICE_KEY_PREFIXES.
	 */
	var DEVICE_KEY_PREFIXES = ['player', 'player_', 'subtitles_', 'video_quality_', 'navigation_', 'interface_', 'background_', 'glass_', 'card_', 'poster_', 'animation_', 'scroll_', 'request_caching', 'cache_images', 'mask', 'light_version', 'menu_always', 'black_style', 'gramlink_heartbeat', 'gramlink_broadcast'];

	/**
	 * Patterns for excluding caches from backup.
	 */
	var CACHE_PATTERNS = [/_cache$/, /_line_cache/, /_ts$/, /_line$/];

	/**
	 * Specific keys to exclude (not covered by patterns).
	 */
	var EXCLUDE_KEYS_SET = {
	  'GramJs:apiCache': true
	};

	/**
	 * Categorizes a localStorage key.
	 *
	 * @param {string} key
	 * @returns {string} 'core' | 'device_state' | 'cache_exclude' | 'gramlink_meta'
	 */
	function categorize(key) {
	  // GramLink keys are not backed up (except heartbeat/broadcast — device_state)
	  if (key.indexOf('gramlink_') === 0) {
	    var isDevice = DEVICE_KEY_PREFIXES.some(function (p) {
	      return key === p || key.indexOf(p) === 0;
	    });
	    if (!isDevice) return 'gramlink_meta';
	    return 'device_state';
	  }

	  // Explicitly excluded keys
	  if (EXCLUDE_KEYS_SET[key]) return 'cache_exclude';

	  // Check cache patterns
	  for (var i = 0; i < CACHE_PATTERNS.length; i++) {
	    if (CACHE_PATTERNS[i].test(key)) return 'cache_exclude';
	  }

	  // Check device prefixes
	  for (var j = 0; j < DEVICE_KEY_PREFIXES.length; j++) {
	    var p = DEVICE_KEY_PREFIXES[j];
	    if (key === p || key.indexOf(p) === 0) return 'device_state';
	  }

	  // Everything else — core
	  return 'core';
	}

	/**
	 * Builds manifest from metadata and chunk list.
	 *
	 * @param {Object} meta
	 * @param {number} meta.created_at — Unix timestamp
	 * @param {string} meta.device_id
	 * @param {string} meta.device_name
	 * @param {Array} chunks — chunk array
	 * @param {string} chunks[].id — "chunk_000"
	 * @param {string} chunks[].category — "core" | "device_state"
	 * @param {string[]} chunks[].keys — list of keys in chunk
	 * @param {number} chunks[].raw_bytes — size before compression
	 * @param {string} chunks[].file_name — "chunk_000.json"
	 * @returns {Object} manifest
	 */
	function buildManifest(meta, chunks) {
	  var totalKeys = 0;
	  var totalBytes = 0;
	  var chunkList = (chunks || []).map(function (ch) {
	    totalKeys += (ch.keys || []).length;
	    totalBytes += ch.raw_bytes || 0;
	    return {
	      id: ch.id,
	      category: ch.category,
	      keys: ch.keys || [],
	      raw_bytes: ch.raw_bytes || 0,
	      file_name: ch.file_name,
	      telegram_msg_id: ch.telegram_msg_id || 0
	    };
	  });
	  return {
	    meta: {
	      type: 'gramlink_backup',
	      version: 1,
	      created_at: meta.created_at || Math.floor(Date.now() / 1000),
	      device_id: meta.device_id || '',
	      device_name: meta.device_name || 'Unknown'
	    },
	    totals: {
	      total_chunks: chunkList.length,
	      total_keys: totalKeys,
	      total_bytes: totalBytes
	    },
	    chunks: chunkList
	  };
	}

	/**
	 * Validates manifest structure.
	 * @param {Object} m
	 * @param {string} [context] — for error message
	 * @returns {boolean} true if valid
	 * @throws {Error} if invalid
	 */
	function validateManifest(m) {
	  if (!m || _typeof(m) !== 'object') throw new Error('Manifest is not an object');
	  if (m.meta && m.meta.type !== 'gramlink_backup') throw new Error('Not a GramLink backup manifest');
	  if (!m.meta || !m.meta.created_at || !m.meta.device_id) throw new Error('Manifest missing required meta fields');
	  if (!m.chunks || !Array.isArray(m.chunks) || !m.chunks.length) throw new Error('Manifest has no chunks');
	  if (!m.totals || typeof m.totals.total_chunks !== 'number') throw new Error('Manifest missing totals');
	  return true;
	}

	var CHUNK_SIZE = 64 * 1024; // 64 KB — safe size for older devices

	/**
	 * Iterates localStorage, groups keys by category.
	 *
	 * @returns {{ core: Object, device_state: Object, cache_exclude: number }}
	 *   core / device_state — { key: rawValueString, ... }
	 *   cache_exclude — count of excluded keys
	 */
	function collectCategorized() {
	  var core = {};
	  var deviceState = {};
	  var excludedCount = 0;
	  for (var i = 0; i < localStorage.length; i++) {
	    var key = localStorage.key(i);
	    if (!key) continue;
	    var cat = categorize(key);
	    if (cat === 'core') {
	      core[key] = localStorage.getItem(key);
	    } else if (cat === 'device_state') {
	      deviceState[key] = localStorage.getItem(key);
	    } else {
	      excludedCount++;
	    }
	  }
	  return {
	    core: core,
	    device_state: deviceState,
	    excluded: excludedCount
	  };
	}

	/**
	 * Splits collected data into chunks of CHUNK_SIZE bytes.
	 * Each chunk is an object { category, keys, raw_bytes }.
	 * Large keys (> CHUNK_SIZE) get their own chunk.
	 *
	 * @param {{ core: Object, device_state: Object }} collected
	 * @param {number} [chunkSize] — chunk size in bytes (default 64 KB)
	 * @returns {Array<{ id: string, category: string, keys: Object, raw_bytes: number, file_name: string }>}
	 */
	function buildChunks(collected, chunkSize) {
	  if (chunkSize === undefined) chunkSize = CHUNK_SIZE;
	  var chunks = [];
	  var chunkId = 0;
	  function nextChunkId() {
	    var s = String(chunkId);
	    while (s.length < 3) s = '0' + s;
	    chunkId++;
	    return 'chunk_' + s;
	  }
	  var categories = ['core', 'device_state'];
	  for (var ci = 0; ci < categories.length; ci++) {
	    var category = categories[ci];
	    var keys = collected[category];
	    if (!keys) continue;
	    var keyEntries = Object.keys(keys);
	    if (!keyEntries.length) continue;
	    var currentChunk = {
	      keys: {}
	    };
	    var currentSize = 2; // for "{}"

	    for (var ki = 0; ki < keyEntries.length; ki++) {
	      var key = keyEntries[ki];
	      var value = keys[key];

	      // Size of one entry: "key":value, + possible comma
	      var estimatedSize = JSON.stringify(key).length + 2 + value.length;
	      if (ki > 0) estimatedSize += 1; // comma before

	      // If a single key is larger than chunkSize — it gets its own chunk
	      if (estimatedSize > chunkSize) {
	        // Finalize current chunk if it has content
	        if (Object.keys(currentChunk.keys).length > 0) {
	          chunks.push(finalizeChunk(currentChunk, category, nextChunkId()));
	          currentChunk = {
	            keys: {}
	          };
	          currentSize = 2;
	        }
	        // Large key — separate chunk
	        var bigChunk = {
	          keys: {}
	        };
	        bigChunk.keys[key] = value;
	        chunks.push(finalizeChunk(bigChunk, category, nextChunkId()));
	        currentSize = 2;
	        continue;
	      }

	      // If it doesn't fit in current chunk — finalize it and start a new one
	      if (currentSize + estimatedSize > chunkSize && Object.keys(currentChunk.keys).length > 0) {
	        chunks.push(finalizeChunk(currentChunk, category, nextChunkId()));
	        currentChunk = {
	          keys: {}
	        };
	        currentSize = 2;
	      }
	      currentChunk.keys[key] = value;
	      currentSize += estimatedSize;
	    }

	    // Finalize the last chunk of the category
	    if (Object.keys(currentChunk.keys).length > 0) {
	      chunks.push(finalizeChunk(currentChunk, category, nextChunkId()));
	    }
	  }
	  return chunks;
	}
	function finalizeChunk(chunk, category, id) {
	  var data = {
	    category: category,
	    keys: chunk.keys || {}
	  };
	  return {
	    id: id,
	    category: category,
	    keys: Object.keys(data.keys),
	    keysData: data.keys,
	    // ← actual key-value pairs, for JSON.stringify in hub.js
	    raw_bytes: JSON.stringify(data).length,
	    file_name: id + '.json'
	  };
	}

	/**
	 * Builds payload for exportBackup.
	 *
	 * @param {{ core: Object, device_state: Object }} collected — from collectCategorized()
	 * @param {Object} meta — { device_id, device_name }
	 * @param {number} [chunkSize]
	 * @returns {{ chunks: Array, manifest: Object, backupName: string }}
	 */
	function buildExportPayload(collected, meta, chunkSize) {
	  var chunks = buildChunks(collected, chunkSize);
	  var now = Math.floor(Date.now() / 1000);
	  var backupName = 'backup_' + now;
	  var manifest = buildManifest({
	    created_at: now,
	    device_id: meta.device_id,
	    device_name: meta.device_name
	  }, chunks.map(function (ch) {
	    return {
	      id: ch.id,
	      category: ch.category,
	      keys: ch.keys,
	      raw_bytes: ch.raw_bytes,
	      file_name: backupName + '/' + ch.file_name
	    };
	  }));
	  return {
	    chunks: chunks,
	    manifest: manifest,
	    backupName: backupName
	  };
	}

	/**
	 * Gets list of backup sessions from the backup topic.
	 *
	 * @param {Object} c — Client.getInstance()
	 * @param {number} ch — channel ID
	 * @param {number} bt — backup topic ID
	 * @returns {Promise<Array>} array of sessions:
	 *   [{ ts, label, deviceInfo, manifestFile, sessionPrefix, files }]
	 */
	function listBackupSessions(c, ch, bt) {
	  return c.getBackupFiles(ch, bt, 50).then(function (files) {
	    var sessions = {};
	    files.forEach(function (f) {
	      var m = f.fileName.match(/^backup_(\d+)\/manifest\.json$/);
	      if (!m) return;
	      var ts = parseInt(m[1], 10);
	      var isFinal = f.fileName.indexOf('_final') >= 0;

	      // Parse device_name from caption
	      var deviceInfo = '';
	      try {
	        if (f.text) {
	          var caption = JSON.parse(f.text);
	          if (caption.device_name) deviceInfo = caption.device_name;
	        }
	      } catch (e) {}

	      // Take the newest manifest for this ts (prefer _final)
	      if (!sessions[ts] || isFinal) {
	        sessions[ts] = {
	          ts: ts,
	          label: formatTimestamp(ts),
	          deviceInfo: deviceInfo,
	          manifestFile: f,
	          files: files
	        };
	      }
	    });
	    return Object.keys(sessions).map(function (k) {
	      return sessions[k];
	    }).sort(function (a, b) {
	      return b.ts - a.ts;
	    });
	  });
	}

	/**
	 * Downloads and validates manifest.
	 *
	 * @param {Object} c — Client.getInstance()
	 * @param {Object} session — session from listBackupSessions
	 * @returns {Promise<Object>} parsed manifest
	 */
	function downloadManifest(c, session) {
	  return c.downloadFile(session.manifestFile).then(function (jsonStr) {
	    if (!jsonStr) throw new Error('Failed to download manifest');
	    var manifest = JSON.parse(jsonStr);
	    validateManifest(manifest);
	    return manifest;
	  });
	}

	/**
	 * Finds chunk files for a given session and manifest.
	 *
	 * @param {Object} session — session from listBackupSessions
	 * @param {Object} manifest — parsed manifest
	 * @returns {Array<{ file: Object, chunkMeta: Object }>}
	 */
	function findChunkFiles(session, manifest) {
	  var results = [];
	  manifest.chunks.forEach(function (ch) {
	    // ch.file_name already has prefix "backup_<ts>/" (see buildExportPayload)
	    var expectedName = ch.file_name;
	    var found = null;
	    for (var i = 0; i < session.files.length; i++) {
	      if (session.files[i].fileName === expectedName) {
	        found = session.files[i];
	        break;
	      }
	    }
	    if (found) {
	      results.push({
	        file: found,
	        chunkMeta: ch
	      });
	    } else {
	      console.warn('GramLink', 'Chunk not found:', expectedName);
	    }
	  });
	  return results;
	}

	/**
	 * Parses chunk content.
	 *
	 * @param {string} jsonStr — raw JSON (downloadFile result)
	 * @returns {Object} { category, keys }
	 */
	function parseChunk(jsonStr) {
	  var data = JSON.parse(jsonStr);
	  if (!data || !data.keys || _typeof(data.keys) !== 'object') {
	    throw new Error('Invalid chunk format');
	  }
	  return data;
	}

	// ─── Helpers ─────────────────────────────────────────────────────────

	function formatTimestamp(unixTs) {
	  try {
	    var pad = function pad(n) {
	      return n < 10 ? '0' + n : String(n);
	    };
	    var d = new Date(unixTs * 1000);
	    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
	  } catch (e) {
	    return String(unixTs);
	  }
	}

	var STORAGE_CHANNEL_ID = STORAGE_KEYS.CHANNEL_ID;
	var STORAGE_SYNC_LOG_TOPIC = STORAGE_KEYS.SYNC_LOG_TOPIC;
	var STORAGE_PROFILES_TOPIC = STORAGE_KEYS.PROFILES_TOPIC;
	var STORAGE_PROFILES_SYNC_TOPIC = STORAGE_KEYS.PROFILES_SYNC;
	var STORAGE_BACKUP_TOPIC = STORAGE_KEYS.BACKUP_TOPIC;
	function Hub () {
	  var refreshTimer = null;
	  var currentChannelId = null;
	  var currentProfilesTopicId = null;
	  var self = this;
	  var scroll = null;
	  var last = null;
	  var activeTab = 'profiles';
	  var _initializing = false; // Bug 3: guard against premature "No profiles" render
	  var TABS = ['profiles', 'devices', 'plugins'];
	  var tabIdx = 0;

	  // ─── Lifecycle — create ──────────────────────────────

	  self.create = function () {
	    scroll = new Lampa.Scroll({
	      mask: true,
	      over: true
	    });
	    scroll.render().addClass('gramlink-scroll');

	    // Native: onWheel delegates to Navigator
	    scroll.onWheel = function (step) {
	      if (!last) return;
	      Navigator.move(step > 0 ? 'down' : 'up');
	    };

	    // Container
	    self.html = $('<div class="gramlink-activity"></div>');
	    self.html.append(scroll.render());

	    // Bug 3: show loading placeholder — actual render after init() completes
	    _initializing = true;
	    var body = scroll.body(true);
	    body.innerHTML = '<div style="padding:2em;text-align:center;color:#8D8D8D">' + (Lampa.Lang.translate('gramlink_loading') || "Loading\u2026") + '</div>';
	    return self.render();
	  };
	  self.render = function () {
	    return self.html;
	  };

	  // ─── Controller — start ──────────────────────────────

	  self.start = function () {
	    if (Lampa.Activity.active() && Lampa.Activity.active().activity !== self.activity) return;
	    Lampa.Controller.add('content', {
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(scroll.render());
	        var focus = last && $(last).closest('body').length ? last : false;
	        Lampa.Controller.collectionFocus(focus, scroll.render());
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        Navigator.move('down');
	      },
	      left: function left() {
	        var $cur = $(last);
	        if ($cur.hasClass('gramlink-tab') && tabIdx > 0) {
	          tabIdx--;
	          focusTab(TABS[tabIdx]);
	        } else if ($cur.hasClass('gramlink-tab') && tabIdx === 0) {
	          Lampa.Controller.toggle('menu');
	        } else if (Navigator.canmove('left')) {
	          Navigator.move('left');
	        } else {
	          Lampa.Controller.toggle('menu');
	        }
	      },
	      right: function right() {
	        var $cur = $(last);
	        if ($cur.hasClass('gramlink-tab') && tabIdx < TABS.length - 1) {
	          tabIdx++;
	          focusTab(TABS[tabIdx]);
	        } else if (Navigator.canmove('right')) {
	          Navigator.move('right');
	        }
	      },
	      back: function back() {
	        self.back();
	      }
	    });
	    Lampa.Controller.toggle('content');
	    init();
	    // ponytail: Native→Hub — pick up changes from native Extensions/Settings
	    if (!self.__pluginStorageHandler) {
	      self.__pluginStorageHandler = function (e) {
	        if (e && e.key === 'plugins' && activeTab === 'plugins') {
	          renderPlugins();
	        }
	      };
	      Lampa.Storage.listener.follow('change', self.__pluginStorageHandler);
	    }
	    focusFirst();
	  };
	  self.pause = function () {
	    if (refreshTimer) {
	      clearInterval(refreshTimer);
	      refreshTimer = null;
	    }
	  };
	  self.stop = function () {
	    if (refreshTimer) {
	      clearInterval(refreshTimer);
	      refreshTimer = null;
	    }
	  };
	  self.back = function () {
	    Lampa.Activity.backward();
	  };
	  self.destroy = function () {
	    if (self.__destroyed) return;
	    self.__destroyed = true;
	    if (refreshTimer) {
	      clearInterval(refreshTimer);
	      refreshTimer = null;
	    }
	    try {
	      if (scroll && scroll.body) scroll.body().off();
	    } catch (e) {} // ponytail:
	    if (self._deltaHandler) {
	      GatewayClient.getInstance().off('profile_delta', self._deltaHandler);
	      self._deltaHandler = null;
	    }
	    try {
	      if (scroll) scroll.destroy();
	    } catch (e) {}
	    try {
	      self.html.remove();
	    } catch (e) {}
	  };

	  // ─── Tab switching ──────────────────────────────────

	  function switchTab(tabId) {
	    if (tabId === activeTab) return;
	    activeTab = tabId;
	    tabIdx = TABS.indexOf(tabId);
	    scroll.clear();
	    last = null; // ponytail:
	    scroll.reset();
	    if (tabId === 'profiles') renderProfiles();else if (tabId === 'devices') renderDevices();else if (tabId === 'plugins') renderPlugins();
	  }

	  // ─── Focus — native pattern ─────────────────────────
	  // Ponytail: always focus TAB BAR first, not content.
	  // Profile cards have hover:enter that triggers quickSwitchProfile → reload.
	  // Focusing tab first prevents accidental profile switches on init.

	  function focusFirst() {
	    focusTabBar();
	  }

	  // ═══════════════════════════════════════════════════════
	  //  TAB RENDERERS
	  // ═══════════════════════════════════════════════════════

	  // ─── Common: tab bar ────────────────────────────────

	  function renderTabBar() {
	    var html = '<div class="gramlink-tabs" style="display:flex;gap:0.8em;padding:0 2em 1em">';
	    TABS.forEach(function (t) {
	      var label = t === 'profiles' ? Lampa.Lang.translate('gramlink_profiles') || 'Profiles' : t === 'devices' ? Lampa.Lang.translate('gramlink_devices') || 'Devices' : Lampa.Lang.translate('gramlink_plugins') || 'Plugins';
	      html += '<div class="simple-button selector gramlink-tab' + (t === activeTab ? ' active' : '') + '" data-tab="' + t + '">' + label + '</div>';
	    });
	    html += '</div>';
	    return html;
	  }
	  function bindTabEvents() {
	    $(scroll.body()).find('.gramlink-tab').each(function () {
	      var el = this;
	      $(el).off('._gltab');
	      // Native: direct hover:focus — scroll follows
	      $(el).on('hover:focus._gltab', function () {
	        last = el;
	        scroll.update($(el), true);
	      });
	      // Native: direct hover:enter — switch tab on explicit Enter/click
	      $(el).on('hover:enter._gltab', function () {
	        if ($(el).data('tab') !== activeTab) switchTab($(el).data('tab'));
	      });
	    });
	  }

	  // Focus a tab visually without switching content (native left/right)
	  function focusTab(tabId) {
	    var tabEl = $(scroll.body()).find('.gramlink-tab[data-tab="' + tabId + '"]');
	    if (tabEl.length) {
	      last = tabEl[0];
	      Lampa.Controller.collectionSet(scroll.render());
	      Lampa.Controller.collectionFocus(tabEl[0], scroll.render());
	      scroll.update(tabEl, true);
	    }
	  }

	  // ═══════════════════════════════════════════════════════
	  //  PROFILES
	  // ═══════════════════════════════════════════════════════

	  function renderProfiles() {
	    var body = scroll.body(true);
	    body.innerHTML = '';
	    bodyPrep(body); // Native: grid layout like devices/plugins

	    body.insertAdjacentHTML('beforeend', renderTabBar());
	    bindTabEvents();

	    // Bug 3: show loading if still initializing topics
	    if (_initializing) {
	      showEmpty(body, Lampa.Lang.translate('gramlink_loading') || "Loading\u2026");
	      focusFirst();
	      return;
	    }
	    if (!currentProfilesTopicId) {
	      showEmpty(body, Lampa.Lang.translate('gramlink_no_profiles') || 'No profiles');
	      focusFirst();
	      return;
	    }
	    var client = GatewayClient.getInstance();
	    if (!client.isConnected()) {
	      showEmpty(body, Lampa.Lang.translate('gramlink_not_connected') || 'Not connected');
	      focusFirst();
	      return;
	    }
	    showEmpty(body, Lampa.Lang.translate('gramlink_loading') || "Loading\u2026");
	    client.getMessages(getChannelId(), currentProfilesTopicId, 50).then(function (msgs) {
	      // Remove loading placeholder
	      body.querySelectorAll('.gramlink-item[style]').forEach(function (el) {
	        el.remove();
	      });
	      var pms = msgs.filter(function (m) {
	        if (!m.text) return false;
	        try {
	          var d = JSON.parse(stripCodeFence$1(m.text));
	          return d && d.meta && d.meta.type === 'profile';
	        } catch (e) {
	          return false;
	        }
	      });
	      if (!pms.length) {
	        showEmpty(body, Lampa.Lang.translate('gramlink_no_profiles') || 'No profiles');
	        focusFirst();
	        return;
	      }
	      var activeId = Lampa.Storage.get('gramlink_active_profile', '');

	      // ── Native: Add button (full width) ──
	      var addEl = createItem('gs-profile-add-item', '+', Lampa.Lang.translate('gramlink_create_profile') || 'Create profile', '', null, null);
	      addEl.style.gridColumn = '1 / -1';
	      body.appendChild(addEl);

	      // ── Profile items (2-column grid) ──
	      pms.forEach(function (m) {
	        try {
	          var d = JSON.parse(stripCodeFence$1(m.text));
	        } catch (e) {
	          return;
	        }
	        var p = d.payload && d.payload.profile;
	        if (!p) return;
	        var isActive = String(activeId) === String(m.id);
	        var avatar = Profiles.getAvatar(p.name);
	        var isUrl = avatar && avatar.indexOf('https://') === 0;
	        var avatarHtml = isUrl ? '<img src="' + avatar + '" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:0.5em">' : avatar;
	        var subText = isActive ? Lampa.Lang.translate('gramlink_profile_active') || 'Active' : '';
	        var badgeCls = isActive ? 'badge--active' : null;
	        var badgeText = isActive ? Lampa.Lang.translate('gramlink_active') || 'Active' : '';
	        var el = createItem('gs-profile-item', avatarHtml, p.name || 'Unnamed', subText, badgeCls, badgeText, isUrl);
	        el.dataset.id = m.id;
	        el.dataset.name = p.name || 'Unnamed';
	        el.dataset.active = String(isActive);
	        body.appendChild(el);
	      });

	      // ── Bind profile events ──
	      bindProfileEvents();
	      Profiles.saveProfilesCache(pms);
	      focusFirst();
	    }).catch(function () {
	      showEmpty(body, Lampa.Lang.translate('title_error') || 'Error');
	      focusFirst();
	    });
	  }
	  function bindProfileEvents() {
	    // Add button
	    $(scroll.body()).find('.gs-profile-add-item').each(function () {
	      var el = this;
	      $(el).off('._gl').on('hover:enter._gl', function () {
	        createProfileHandler();
	      });
	    });

	    // Profile items
	    $(scroll.body()).find('.gs-profile-item').each(function () {
	      var el = this;
	      $(el).off('._gl').on('hover:enter._gl', function () {
	        if ($(el).data('active') !== true) Profiles.quickSwitchProfile($(el).data('id'));
	      });
	      $(el).off('hover:long._gl').on('hover:long._gl', function () {
	        profileMenu($(el));
	      });
	    });
	  }
	  function createProfileHandler() {
	    Lampa.Input.edit({
	      title: Lampa.Lang.translate('gramlink_create_profile') || 'Profile name',
	      free: true,
	      nosave: true,
	      align: 'center'
	    }, function (name) {
	      if (!name) return;
	      var client = GatewayClient.getInstance();
	      if (!client.isConnected()) {
	        Lampa.Noty.show('Not connected');
	        return;
	      }
	      var profileName = name.trim();
	      var avatar = Profiles.getAvatar(profileName);
	      var now = Math.floor(Date.now() / 1000);
	      var caption = buildCaption({
	        name: profileName,
	        avatar: avatar,
	        updated: now
	      });
	      client.getMessages(getChannelId(), currentProfilesTopicId, 50).then(function (msgs) {
	        var hasProfiles = msgs.some(function (m) {
	          if (!m.text) return false;
	          try {
	            var d = JSON.parse(stripCodeFence$1(m.text));
	            return d && d.meta && d.meta.type === 'profile';
	          } catch (e) {
	            return false;
	          }
	        });
	        var fileData = buildFileData({
	          name: profileName,
	          avatar: avatar,
	          bookmarks: hasProfiles ? {
	            favorite: {}
	          } : {
	            favorite: collectFavorite()
	          },
	          timeline: hasProfiles ? {} : collectTimeline(),
	          plugins: collectPlugins(),
	          settings: collectSettings()
	        });
	        client.sendFile(getChannelId(), currentProfilesTopicId, JSON.stringify(fileData, null, 2), buildProfileFileName(profileName, now), caption).then(function (msgId) {
	          if (msgId) {
	            Lampa.Storage.set(STORAGE_KEYS.ACTIVE_PROFILE, String(msgId));
	            Lampa.Storage.set(STORAGE_KEYS.ACTIVE_PROFILE_TS, String(now));
	            Lampa.Storage.set(STORAGE_KEYS.ACTIVE_PROFILE_NAME, profileName);
	            renderProfiles();
	            Lampa.Noty.show(Lampa.Lang.translate('gramlink_profile_created') || 'Profile created');
	          } else {
	            Lampa.Noty.show('Failed to create profile');
	          }
	        }).catch(function (e) {
	          console.error('GramLink', 'Create profile error:', e);
	          Lampa.Noty.show('Failed to create profile');
	        });
	      }).catch(function () {
	        Lampa.Noty.show('Failed to check existing profiles');
	      });
	    });
	  }

	  // ═══════════════════════════════════════════════════════
	  //  DEVICES
	  // ═══════════════════════════════════════════════════════

	  function renderDevices() {
	    var body = scroll.body(true);
	    body.innerHTML = '';
	    body.insertAdjacentHTML('beforeend', renderTabBar());
	    bindTabEvents();
	    var client = GatewayClient.getInstance();
	    var isConnected = client.isConnected();

	    // Status item (inline — needs colored dot, not createItem)
	    bodyPrep(body);
	    var sEl = document.createElement('div');
	    sEl.className = 'gramlink-item selector gs-status-item';
	    sEl.style.gridColumn = '1 / -1';
	    sEl.innerHTML = '<div class="gs-avatar" style="border-radius:50%;width:1.2em;height:1.2em;font-size:0.9em;margin-right:0.8em;background:' + (isConnected ? '#4caf50' : '#DD7337') + '"></div>' + '<div class="gs-content">' + '<div class="gs-title">' + (isConnected ? 'Connected' : Lampa.Lang.translate('gramlink_not_connected') || 'Not connected') + '</div>' + '<div class="gs-sub">' + escHtml(isConnected ? getDeviceName() : '-') + '</div>' + '</div>';
	    body.appendChild(sEl);
	    if (!isConnected) {
	      $(sEl).on('hover:enter', function () {
	        client.connect().catch(function () {});
	      });
	    } else {
	      $(sEl).addClass('gs-device-item').data('self', true).data('id', 'this').data('name', getDeviceName());
	    }
	    var chId = Lampa.Storage.get(STORAGE_CHANNEL_ID, '');
	    var slId = Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, '');
	    if (!isConnected || !chId || !slId) {
	      focusFirst();
	      return;
	    }
	    client.getOnlineDevices(chId, slId).then(function (devices) {
	      var myId = getDeviceId();
	      if (!devices.some(function (d) {
	        return d.device_id === myId;
	      })) {
	        devices.push({
	          device_id: myId,
	          device_name: getDeviceName(),
	          timestamp: Math.floor(Date.now() / 1000)
	        });
	      }
	      devices.sort(function (a, b) {
	        if (a.device_id === myId) return -1;
	        if (b.device_id === myId) return 1;
	        return (a.device_name || '').localeCompare(b.device_name || '');
	      });
	      devices.forEach(function (d) {
	        var isThis = d.device_id === myId;
	        var initial = d.device_name ? d.device_name.charAt(0).toUpperCase() : '?';
	        var rawName = d.device_name || 'Unknown';
	        // Strip "Mac Device - " default prefix, keep custom renames intact
	        var cleanName = rawName.indexOf('Mac Device - ') === 0 ? rawName.slice(13) : rawName;
	        var subText = isThis ? Lampa.Lang.translate('gramlink_this_device') || 'This device' : '';
	        var badgeText = isThis ? 'active' : 'online';
	        var el = createItem('gs-device-item', initial, cleanName, subText, 'badge--info', badgeText);
	        el.dataset.id = d.device_id;
	        el.dataset.name = rawName;
	        el.dataset.self = String(isThis);
	        body.appendChild(el);
	      });
	      bindDeviceEvents();
	      focusFirst();
	    }).catch(function () {
	      focusFirst();
	    });
	  }
	  function bindDeviceEvents() {
	    $(scroll.body()).find('.gs-device-item').each(function () {
	      var el = this;
	      $(el).off('hover:focus._gl').on('hover:focus._gl', function () {
	        last = el;
	        scroll.update($(el), true);
	      });
	      $(el).off('hover:enter._gl').on('hover:enter._gl', function () {
	        showDeviceMenu($(el).data('id'), $(el).data('name'), $(el).data('self') === true);
	      });
	      $(el).off('hover:long._gl').on('hover:long._gl', function () {
	        if ($(el).data('self') === true) exportBackup();
	      });
	    });
	  }

	  // ═══════════════════════════════════════════════════════
	  //  PLUGINS
	  // ═══════════════════════════════════════════════════════

	  function renderPlugins() {
	    var body = scroll.body(true);
	    body.innerHTML = '';
	    body.insertAdjacentHTML('beforeend', renderTabBar());
	    bindTabEvents();
	    var activeId = Lampa.Storage.get('gramlink_active_profile', '');
	    if (!activeId) {
	      showEmpty(body, Lampa.Lang.translate('gramlink_no_profiles') || 'No active profile');
	      focusFirst();
	      return;
	    }
	    var plugins;
	    try {
	      plugins = Lampa.Storage.get('plugins', []);
	    } catch (e) {
	      plugins = [];
	    }
	    bodyPrep(body);

	    // Native: Add button FIRST
	    var addEl = createItem('gs-plugin-add-item', '+', Lampa.Lang.translate('gramlink_plugins_add') || 'Add plugin', Lampa.Lang.translate('gramlink_plugins_manage_hint') || 'Add plugins via URL', null);
	    addEl.style.gridColumn = '1 / -1';
	    body.appendChild(addEl);
	    if (!plugins || !plugins.length) {
	      showEmpty(body, Lampa.Lang.translate('gramlink_no_plugins') || 'No plugins installed');
	    } else {
	      plugins.forEach(function (plugin, idx) {
	        var isOn = plugin.status === 1;
	        var name = (plugin.name || plugin.url || 'Plugin').slice(0, 60);
	        var url = (plugin.url || 'local').slice(0, 80);
	        // Native: badge only for disabled plugins. Enabled = no badge.
	        var badgeCls = isOn ? null : 'badge--inactive';
	        var badgeTxt = isOn ? '' : Lampa.Lang.translate('player_disabled') || 'disabled';
	        var el = createItem('gs-plugin-item', '', name, url, badgeCls, badgeTxt);
	        el.dataset.idx = idx;
	        body.appendChild(el);
	      });
	    }
	    bindPluginEvents();
	    focusFirst();
	  }
	  function bindPluginEvents() {
	    $(scroll.body()).find('.gs-plugin-item').each(function () {
	      var el = this;
	      $(el).off('hover:focus._gl').on('hover:focus._gl', function () {
	        last = el;
	        scroll.update($(el), true);
	      });
	      $(el).off('hover:enter._gl').on('hover:enter._gl', function () {
	        var idx = parseInt($(el).data('idx'), 10);
	        var plugins = getPlugins();
	        if (!plugins[idx]) return;
	        var p = plugins[idx];
	        select({
	          title: p.name || p.url || 'Plugin',
	          items: [{
	            title: p.status === 1 ? 'Disable' : 'Enable',
	            _do: 'toggle'
	          }, {
	            title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Edit name',
	            _do: 'edit_name'
	          }, {
	            title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Edit URL',
	            _do: 'edit_url'
	          }, {
	            title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
	            _do: 'remove'
	          }, {
	            title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	            _do: 'cancel',
	            cancel: true
	          }],
	          onSelect: function onSelect(item) {
	            if (item._do === 'toggle') doToggle(idx);else if (item._do === 'remove') doRemove(idx);else if (item._do === 'edit_name') doEditPluginName(idx);else if (item._do === 'edit_url') doEditPluginUrl(idx);
	          }
	        });
	      });
	      $(el).off('hover:long._gl').on('hover:long._gl', function () {
	        doToggle(parseInt($(el).data('idx'), 10));
	      });
	    });
	    $(scroll.body()).find('.gs-plugin-add-item').each(function () {
	      var el = this;
	      $(el).off('hover:focus._gl').on('hover:focus._gl', function () {
	        last = el;
	        scroll.update($(el), true);
	      });
	      $(el).off('hover:enter._gl').on('hover:enter._gl', function () {
	        doAddPlugin();
	      });
	    });
	  }
	  function doEditPluginName(idx) {
	    var plugins = getPlugins();
	    if (!plugins[idx]) return;
	    input({
	      title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Plugin name',
	      value: plugins[idx].name || '',
	      onSubmit: function onSubmit(newName) {
	        if (!newName || !newName.trim()) return;
	        plugins[idx].name = newName.trim();
	        savePlugins(plugins);
	        renderPlugins();
	        showReloadPrompt(function () {
	          focusFirst();
	        });
	      }
	    });
	  }
	  function doEditPluginUrl(idx) {
	    var plugins = getPlugins();
	    if (!plugins[idx]) return;
	    input({
	      title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Plugin URL',
	      value: plugins[idx].url || '',
	      onSubmit: function onSubmit(newUrl) {
	        if (!newUrl || !newUrl.trim()) return;
	        newUrl = newUrl.trim();
	        if (!newUrl.match(/^https?:\/\/.+/i)) {
	          Lampa.Noty.show('Invalid URL');
	          return;
	        }
	        plugins[idx].url = newUrl;
	        savePlugins(plugins);
	        renderPlugins();
	        showReloadPrompt(function () {
	          focusFirst();
	        });
	      }
	    });
	  }

	  // ═══════════════════════════════════════════════════════
	  //  HELPERS
	  // ═══════════════════════════════════════════════════════

	  function createItem(cls, avatar, title, sub, badgeCls, badgeText, isHtmlAvatar) {
	    var el = document.createElement('div');
	    el.className = 'gramlink-item selector ' + cls;
	    // Ponytail: skip avatar div when empty (plugins don't need checkmark icon)
	    var avatarHtml = avatar ? '<div class="gs-avatar">' + (isHtmlAvatar ? avatar : escHtml(avatar)) + '</div>' : '';
	    el.innerHTML = avatarHtml + '<div class="gs-content">' + '<div class="gs-title">' + escHtml(title) + '</div>' + '<div class="gs-sub">' + escHtml(sub) + '</div>' + '</div>' + (badgeCls ? '<div class="gs-badge ' + badgeCls + '">' + escHtml(badgeText || '') + '</div>' : '');

	    // Native: direct hover:focus listener on every item
	    $(el).on('hover:focus', function () {
	      last = el;
	      scroll.update($(el), true);
	    });
	    return el;
	  }
	  function bodyPrep(body) {
	    $(body).addClass('gramlink-body--grid').removeClass('gramlink-body--content');
	  }
	  function showEmpty(body, msg) {
	    body.insertAdjacentHTML('beforeend', '<div class="gramlink-item" style="justify-content:center;align-items:center;display:flex;padding:2em;grid-column:1/-1"><span style="color:#8D8D8D">' + escHtml(msg) + '</span></div>');
	  }
	  function focusTabBar() {
	    var firstTab = $(scroll.body()).find('.gramlink-tab').first();
	    if (firstTab.length) {
	      last = firstTab[0];
	      Lampa.Controller.collectionSet(scroll.render());
	      Lampa.Controller.collectionFocus(firstTab[0], scroll.render());
	      scroll.immediate(firstTab[0], true);
	    }
	  }

	  // ═══════════════════════════════════════════════════════
	  //  ACTIONS
	  // ═══════════════════════════════════════════════════════

	  function getPlugins() {
	    try {
	      return Lampa.Storage.get('plugins', []);
	    } catch (e) {
	      return [];
	    }
	  }
	  function savePlugins(p) {
	    Lampa.Storage.set('plugins', p);
	  }
	  function doToggle(idx) {
	    var plugins = getPlugins();
	    if (!plugins[idx]) return;
	    plugins[idx].status = plugins[idx].status === 1 ? 0 : 1;
	    savePlugins(plugins);
	    var st = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (st) Profiles.publishDeviceDelta(st, 'device_plugin_status', {
	      device_id: getDeviceId(),
	      url: plugins[idx].url,
	      status: plugins[idx].status
	    }, 'all');
	    Lampa.Noty.show((plugins[idx].name || 'Plugin') + ': ' + (plugins[idx].status === 1 ? 'on' : 'off'));
	    renderPlugins();
	    // ponytail: reload so Plugins._loaded syncs with storage
	    showReloadPrompt(function () {
	      // ponytail: after "No" — restore focus, renderPlugins() replaced DOM so old last is lost
	      focusFirst();
	    });
	  }
	  function doRemove(idx) {
	    var plugins = getPlugins();
	    var url = plugins[idx] ? plugins[idx].url : '';
	    plugins.splice(idx, 1);
	    savePlugins(plugins);
	    var st = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (st) Profiles.publishLocalDelta(st, 'plugin_change', {
	      action: 'remove',
	      plugin: {
	        url: url
	      }
	    });
	    Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_removed') || 'Plugin removed');
	    renderPlugins();
	    showReloadPrompt(function () {
	      focusFirst();
	    });
	  }
	  function doAddPlugin() {
	    input({
	      title: Lampa.Lang.translate('gramlink_plugins_add_url') || 'Plugin URL (.js)',
	      onSubmit: function onSubmit(url) {
	        if (!url) return;
	        url = url.trim();
	        if (!url.match(/^https?:\/\/.+/i)) {
	          Lampa.Noty.show('Invalid URL');
	          return;
	        }
	        var plugins = getPlugins();
	        if (plugins.some(function (p) {
	          return p.url === url;
	        })) {
	          Lampa.Noty.show('Already installed');
	          return;
	        }
	        var gn = url.split('/').pop().replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ') || 'Plugin';
	        input({
	          title: Lampa.Lang.translate('gramlink_plugins_name') || 'Plugin name',
	          value: gn,
	          onSubmit: function onSubmit(name) {
	            var np = {
	              url: url,
	              name: name && name.trim() || gn,
	              status: 1,
	              custom: {}
	            };
	            Profiles.addToPluginRegistry(url, np.name);
	            plugins.push(np);
	            savePlugins(plugins);
	            var st = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	            if (st) Profiles.publishLocalDelta(st, 'plugin_change', {
	              action: 'add',
	              plugin: np
	            });
	            Lampa.Noty.show('Plugin added');
	            renderPlugins();
	            showReloadPrompt(function () {
	              focusFirst();
	            });
	          }
	        });
	      }
	    });
	  }

	  // ─── Device actions ─────────────────────────────────

	  function showDeviceMenu(did, dname, isThis) {
	    var items = [];
	    if (!isThis) items.push({
	      title: 'Open on this device',
	      action: 'open'
	    });
	    if (isThis) items.push({
	      title: Lampa.Lang.translate('gramlink_backup_export') || 'Export Backup',
	      action: 'export'
	    });
	    items.push({
	      title: Lampa.Lang.translate('gramlink_backup_import') || 'Import Backup',
	      action: 'import'
	    });
	    if (isThis) items.push({
	      title: 'Rename device',
	      action: 'rename'
	    });
	    items.push({
	      title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	      cancel: true
	    });
	    select({
	      title: dname,
	      items: items,
	      onSelect: function onSelect(item) {
	        if (item.action === 'open') {
	          var a = Lampa.Activity.active();
	          if (a && a.card) {
	            Broadcast.sendOpenCard(did, a.card);
	            Lampa.Noty.show('Sent to ' + dname);
	          } else {
	            Lampa.Noty.show('Nothing to share');
	          }
	        } else if (item.action === 'export') exportBackup();else if (item.action === 'import') importBackup();else if (item.action === 'rename') {
	          var c = Lampa.Storage.get('gramlink_device_label', getDeviceName());
	          input({
	            title: 'Device name',
	            value: c,
	            onSubmit: function onSubmit(n) {
	              if (n && n.trim()) {
	                Lampa.Storage.set('gramlink_device_label', n.trim());
	                Lampa.Noty.show('Device renamed');
	              }
	            }
	          });
	        }
	      }
	    });
	  }

	  // ─── Backup (chunked) ──────────────────────────────

	  function exportBackup() {
	    var c = GatewayClient.getInstance(),
	      bt = Lampa.Storage.get(STORAGE_BACKUP_TOPIC, '');
	    if (!c.isConnected()) {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
	      return;
	    }
	    if (!bt) {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_topic_not_ready'));
	      return;
	    }
	    var ch = parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID, ''), 10);
	    Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_uploading'));

	    // 1. Collect & chunk
	    var collected = collectCategorized();
	    var payload = buildExportPayload(collected, {
	      device_id: getDeviceId(),
	      device_name: getDeviceName()
	    });
	    var total = payload.chunks.length;

	    // 2. Upload chunks sequentially (promise chain)
	    var seq = Promise.resolve();
	    payload.chunks.forEach(function (ch_data, idx) {
	      seq = seq.then(function () {
	        var chunkJson = JSON.stringify({
	          category: ch_data.category,
	          keys: ch_data.keysData
	        });
	        return c.sendFile(ch, bt, chunkJson, payload.backupName + '/' + ch_data.file_name, JSON.stringify({
	          type: 'gramlink_backup_chunk',
	          index: idx,
	          category: ch_data.category
	        })).then(function (msgId) {
	          if (msgId) payload.manifest.chunks[idx].telegram_msg_id = msgId;
	          Lampa.Noty.show(idx + 1 + '/' + total + ' ' + (Lampa.Lang.translate('gramlink_backup_uploading') || 'chunks'));
	        });
	      });
	    });

	    // 3. After all chunks — upload manifest
	    seq.then(function () {
	      var manifestJson = JSON.stringify(payload.manifest, null, 2);
	      return c.sendFile(ch, bt, manifestJson, payload.backupName + '/manifest.json', JSON.stringify({
	        device_id: getDeviceId(),
	        device_name: getDeviceName(),
	        timestamp: Math.floor(Date.now() / 1000)
	      }));
	    }).then(function (msgId) {
	      Lampa.Noty.show(msgId ? Lampa.Lang.translate('gramlink_backup_exported') || 'Backup saved: ' + total + ' chunks' : Lampa.Lang.translate('gramlink_backup_failed') || 'Backup failed');
	    }).catch(function () {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Backup failed');
	    });
	  }
	  function importBackup() {
	    var c = GatewayClient.getInstance(),
	      bt = Lampa.Storage.get(STORAGE_BACKUP_TOPIC, '');
	    if (!c.isConnected()) {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
	      return;
	    }
	    if (!bt) {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_topic_not_ready'));
	      return;
	    }
	    var ch = parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID, ''), 10);
	    Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_fetching'));
	    listBackupSessions(c, ch, bt).then(function (sessions) {
	      if (!sessions || !sessions.length) {
	        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_no_files') || 'No backups');
	        return;
	      }
	      select({
	        title: Lampa.Lang.translate('gramlink_backup_pick_title') || 'Select backup',
	        items: sessions.map(function (s) {
	          return {
	            title: s.label + (s.deviceInfo ? ' (' + s.deviceInfo + ')' : ''),
	            subtitle: Lampa.Lang.translate('gramlink_backup_restore_title') || 'Restore',
	            _session: s
	          };
	        }).concat([{
	          title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	          cancel: true
	        }]),
	        onSelect: function onSelect(item) {
	          if (item.cancel || !item._session) return;
	          var session = item._session;

	          // Confirmation via a second Select
	          select({
	            title: Lampa.Lang.translate('gramlink_backup_restore_title') || 'Restore backup?',
	            items: [{
	              title: session.deviceInfo || 'Device',
	              _info: true
	            }, {
	              title: session.label,
	              _info: true
	            }, {
	              title: Lampa.Lang.translate('gramlink_backup_restore_btn') || 'Restore',
	              action: 'restore'
	            }, {
	              title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	              cancel: true
	            }],
	            onSelect: function onSelect(confItem) {
	              if (confItem.action !== 'restore') return;
	              Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_downloading') || 'Restoring...');

	              // Download manifest
	              downloadManifest(c, session).then(function (manifest) {
	                // Find chunk files
	                var chunkFiles = findChunkFiles(session, manifest);
	                if (!chunkFiles.length) {
	                  Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_invalid') || 'No chunks found');
	                  return;
	                }

	                // Safety snapshot (simple: save gramlink keys)
	                // Sequential download and application of chunks
	                var restoreSeq = Promise.resolve();
	                var appliedCount = 0;
	                chunkFiles.forEach(function (cf, idx) {
	                  restoreSeq = restoreSeq.then(function () {
	                    return c.downloadFile(cf.file).then(function (jsonStr) {
	                      if (!jsonStr) return;
	                      try {
	                        var data = parseChunk(jsonStr);
	                        var keys = data.keys || {};
	                        Object.keys(keys).forEach(function (k) {
	                          Lampa.Storage.set(k, keys[k]);
	                        });
	                        appliedCount++;
	                      } catch (e) {
	                        console.warn('GramLink', 'Chunk parse error:', e);
	                      }
	                      Lampa.Noty.show(idx + 1 + '/' + chunkFiles.length + ' chunks restored');
	                    });
	                  });
	                });
	                restoreSeq.then(function () {
	                  Lampa.Noty.show((Lampa.Lang.translate('gramlink_backup_restored') || 'Restored') + ' (' + appliedCount + '/' + chunkFiles.length + ')');
	                  // Notify delta-poll about cursor change
	                  Lampa.Listener.send('gramlink_backup_restored', {
	                    restored_at: manifest.meta.created_at
	                  });
	                  // Soft refresh with small delay so Noty has time to display
	                  setTimeout(function () {
	                    softRefresh();
	                  }, 600);
	                }).catch(function (err) {
	                  console.error('GramLink', 'Restore error:', err);
	                  Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Restore failed');
	                });
	              }).catch(function (err) {
	                Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_invalid') || 'Manifest error');
	                console.error('GramLink', 'Manifest error:', err);
	              });
	            }
	          });
	        }
	      });
	    }).catch(function () {
	      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Failed to list backups');
	    });
	  }

	  // ─── Profile menu ───────────────────────────────────

	  function profileMenu($card) {
	    var id = $card.data('id'),
	      name = $card.data('name') || 'Unnamed',
	      active = $card.data('active') === true;
	    var items = [];
	    items.push({
	      title: Lampa.Lang.translate('gramlink_plugins') || 'Plugins',
	      action: 'plugins'
	    });
	    items.push({
	      title: Lampa.Lang.translate('gramlink_sync') || 'Sync',
	      action: 'sync'
	    });
	    items.push({
	      title: Lampa.Lang.translate('gramlink_profile_rename') || 'Rename',
	      action: 'rename'
	    });
	    if (!active) items.push({
	      title: Lampa.Lang.translate('gramlink_delete') || 'Delete',
	      action: 'delete'
	    });
	    items.push({
	      title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
	      cancel: true
	    });
	    select({
	      title: name,
	      items: items,
	      onSelect: function onSelect(item) {
	        if (item.action === 'plugins') PluginManager.open(id, name, active);else if (item.action === 'sync') Profiles.syncProfile(id, currentProfilesTopicId);else if (item.action === 'rename') doRenameProfile(id, name);else if (item.action === 'delete') deleteProfile(id);
	      }
	    });
	  }
	  function doRenameProfile(msgId, currentName) {
	    input({
	      title: Lampa.Lang.translate('gramlink_profile_rename') || 'Rename profile',
	      value: currentName,
	      onSubmit: function onSubmit(newName) {
	        if (!newName || !newName.trim() || newName.trim() === currentName) return;
	        Profiles.renameProfile(msgId, currentProfilesTopicId, newName.trim(), function () {
	          renderProfiles();
	        });
	      }
	    });
	  }
	  function deleteProfile(id) {
	    var ch = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
	    if (!ch) return;
	    GatewayClient.getInstance().deleteMessage(ch, parseInt(id, 10)).then(function (ok) {
	      if (ok) {
	        if (String(Lampa.Storage.get('gramlink_active_profile', '')) === String(id)) {
	          Lampa.Storage.set('gramlink_active_profile', '');
	          Lampa.Storage.set('gramlink_active_profile_ts', '');
	        }
	        renderProfiles();
	        Lampa.Noty.show('Profile deleted');
	      }
	    }).catch(function () {
	      Lampa.Noty.show('Delete failed');
	    });
	  }

	  // ═══════════════════════════════════════════════════════
	  //  INIT
	  // ═══════════════════════════════════════════════════════

	  function init() {
	    currentChannelId = Lampa.Storage.get(STORAGE_CHANNEL_ID, null);
	    Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, null);
	    currentProfilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC, null);
	    Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC, null);
	    Lampa.Storage.get(STORAGE_BACKUP_TOPIC, null);
	    var client = GatewayClient.getInstance();
	    // Bug 3: show loading while ensureSyncChannel() runs
	    _initializing = true;
	    renderProfiles(); // Shows "Loading..." because _initializing is true

	    client.connect().then(function () {
	      return ensureSyncChannel();
	    }).then(function () {
	      if (self.__destroyed) return;
	      _initializing = false;
	      var ch = Lampa.Storage.get(STORAGE_CHANNEL_ID, ''),
	        sl = Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, '');
	      if (ch && sl) client.startHeartbeat(ch, sl);
	      self._deltaHandler = function (data) {
	        Profiles.applyDelta(data);
	      };
	      client.on('profile_delta', self._deltaHandler);
	      renderProfiles();
	      if (refreshTimer) clearInterval(refreshTimer);
	      refreshTimer = setInterval(function () {
	        if (activeTab === 'profiles') renderProfiles();
	      }, 15000);
	    }).catch(function (err) {
	      if (self.__destroyed) return;
	      _initializing = false;
	      renderProfiles(); // Shows "No profiles" or loaded data based on what Storage has
	      console.warn('GramLink', 'Hub init error:', err);
	    });
	  }

	  // ═══════════════════════════════════════════════════════
	  //  CHANNEL / TOPIC MANAGEMENT
	  // ═══════════════════════════════════════════════════════

	  function ensureSyncChannel() {
	    var client = GatewayClient.getInstance();
	    if (currentChannelId) return ensureTopics();
	    return client.findChannel(CHANNEL_TITLE).then(function (id) {
	      if (id) {
	        currentChannelId = id;
	        Lampa.Storage.set(STORAGE_CHANNEL_ID, id);
	        return ensureTopics();
	      }
	      return createChannel();
	    });
	  }
	  function ensureTopics() {
	    var client = GatewayClient.getInstance(),
	      ps = [];
	    function ensure(name, storeKey, setter) {
	      var s = Lampa.Storage.get(storeKey, '');
	      if (s) {
	        setter(s);
	        return Promise.resolve();
	      }
	      return client.findTopic(currentChannelId, name).then(function (id) {
	        if (id) {
	          setter(id);
	          Lampa.Storage.set(storeKey, id);
	          return;
	        }
	        return client.createTopic(currentChannelId, name).then(function (tid) {
	          if (tid) {
	            setter(tid);
	            Lampa.Storage.set(storeKey, tid);
	          }
	        });
	      });
	    }
	    ps.push(ensure('sync-log', STORAGE_SYNC_LOG_TOPIC, function (id) {
	    }));
	    ps.push(ensure('profiles', STORAGE_PROFILES_TOPIC, function (id) {
	      currentProfilesTopicId = id;
	    }));
	    ps.push(ensure('profiles-sync', STORAGE_PROFILES_SYNC_TOPIC, function (id) {
	    }));
	    ps.push(ensure('backup', STORAGE_BACKUP_TOPIC, function (id) {
	    }));
	    return Promise.all(ps);
	  }
	  function createChannel() {
	    var client = GatewayClient.getInstance();
	    return client.createChannel(CHANNEL_TITLE).then(function (peerId) {
	      if (!peerId) throw new Error('Create channel failed');
	      currentChannelId = peerId;
	      Lampa.Storage.set(STORAGE_CHANNEL_ID, peerId);
	      var seq = Promise.resolve();
	      TOPIC_NAMES.forEach(function (name) {
	        seq = seq.then(function () {
	          return client.createTopic(peerId, name).then(function (tid) {
	            if (!tid) return;
	            var s = '';
	            if (name === 'sync-log') {
	              s = STORAGE_SYNC_LOG_TOPIC;
	            } else if (name === 'profiles') {
	              s = STORAGE_PROFILES_TOPIC;
	              currentProfilesTopicId = tid;
	            } else if (name === 'profiles-sync') {
	              s = STORAGE_PROFILES_SYNC_TOPIC;
	            } else if (name === 'backup') {
	              s = STORAGE_BACKUP_TOPIC;
	            }
	            if (s) Lampa.Storage.set(s, tid);
	          }).catch(function (e) {
	            console.warn('GramLink', 'Topic ' + name + ':', e);
	          });
	        });
	      });
	      return seq;
	    }).catch(function (err) {
	      Lampa.Noty.show('Failed to create sync channel');
	      throw err;
	    });
	  }

	  // getChannelId — imported from sdk/keys (safe version with NaN guard)
	  // ─── Misc helpers ───────────────────────────────────
	}

	function startPlugin() {
	  window.plugin_gramlink_ready = true;

	  // ── Auto-detect GramLink's own URL for safeguard ──────────
	  // Captured at script-parse time (IIFE via Rollup) so
	  // document.currentScript points to the <script> element
	  // that Lampa's putScriptAsync created.
	  try {
	    if (document.currentScript) {
	      var src = document.currentScript.src;
	      if (src) window.__gramlink_self_url = src.split('?')[0];
	    }
	  } catch (e) {}
	  if (!window.__gramlink_self_url) {
	    // ponytail: fallback for dev / module execution
	    window.__gramlink_self_url = './plugins/GramLink.js';
	  }
	  // ───────────────────────────────────────────────────────────

	  vault.migrateIfNeeded();
	  var manifest = {
	    type: 'plugin',
	    version: VERSION,
	    author: '@lme_chat',
	    name: 'GramLink',
	    description: 'Telegram sync via MTProto',
	    component: 'gramlink_hub',
	    onContextMenu: function onContextMenu(object) {
	      var client = GatewayClient.getInstance();
	      if (!client.isConnected()) return null;
	      return {
	        name: 'Open on device',
	        description: ''
	      };
	    },
	    onContextLauch: function onContextLauch(data) {
	      var card = Lampa.Utils.clearCard ? Lampa.Utils.clearCard(JSON.parse(JSON.stringify(data))) : data;
	      Broadcast.showDevicePicker({
	        title: 'Open on device',
	        onSelect: function onSelect(device) {
	          Broadcast.sendOpenCard(device.device_id, card);
	          Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
	        }
	      });
	    }
	  };
	  Lampa.Manifest.plugins = manifest;
	  Lampa.Component.add('gramlink_hub', Hub);
	  Lampa.Component.add('gramlink_plugin_manager', PluginManagerComponent);
	  lang();
	  initSettings();
	  Lampa.Template.add('gramlink_style', '<style>.gramlink-activity{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.gramlink-activity .head__title{font-size:1.4em}.gramlink-hub{padding:1em 2em;max-width:50em;margin:0 auto}.gramlink-hub__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2em;padding-bottom:1em;border-bottom:1px solid rgba(255,255,255,0.1)}.gramlink-hub__title{font-size:1.6em;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em}.gramlink-hub__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.5em}.gramlink-hub__section{margin-bottom:2em}.gramlink-hub__section-title{font-size:1.2em;font-weight:600;margin-bottom:1em;color:rgba(255,255,255,0.7)}.gramlink-status{background:rgba(255,255,255,0.05);-webkit-border-radius:.8em;border-radius:.8em;padding:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em}.gramlink-status__indicator{width:1em;height:1em;-webkit-border-radius:50%;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gramlink-status__indicator--connected{background:#4caf50;-webkit-box-shadow:0 0 .6em rgba(76,175,80,0.5);box-shadow:0 0 .6em rgba(76,175,80,0.5)}.gramlink-status__indicator--disconnected{background:#f44336}.gramlink-status__indicator--connecting{background:#ffc107;-webkit-animation:gramlink-pulse 1.5s ease-in-out infinite;animation:gramlink-pulse 1.5s ease-in-out infinite}.gramlink-status__indicator--auth_needed{background:#ff9800}.gramlink-status__indicator--error{background:#f44336}.gramlink-status__info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gramlink-status__label{font-size:1.1em;font-weight:600;margin-bottom:.2em}.gramlink-status__detail{font-size:.9em;color:rgba(255,255,255,0.5)}@-webkit-keyframes gramlink-pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes gramlink-pulse{0%,100%{opacity:1}50%{opacity:.4}}.gramlink-devices__empty{text-align:center;padding:2em;color:rgba(255,255,255,0.4);font-size:1.1em}.gramlink-device{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em;padding:1em 1.2em;background:rgba(255,255,255,0.03);-webkit-border-radius:.6em;border-radius:.6em;margin-bottom:.5em;cursor:pointer;-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s}.gramlink-device.focus,.gramlink-device.hover{background:rgba(255,255,255,0.1);outline:.2em solid #fff;outline-offset:.3em}.gramlink-device__icon{width:2.5em;height:2.5em;-webkit-border-radius:.5em;border-radius:.5em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:.9em;color:white}.gramlink-device__info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gramlink-device__name{font-size:1.1em;font-weight:600}.gramlink-device__meta{font-size:.85em;color:rgba(255,255,255,0.4)}.gramlink-device__status{font-size:.8em;padding:.3em .6em;-webkit-border-radius:.3em;border-radius:.3em;background:rgba(76,175,80,0.15);color:#4caf50}.gramlink-device--this{opacity:.6;cursor:default}.gramlink-auth{padding:1em;text-align:center}.gramlink-auth__qr-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:1.5em;min-height:18em}.gramlink-auth__qr-placeholder{width:16em;height:16em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,0.05);-webkit-border-radius:1em;border-radius:1em}.gramlink-auth__qr-img{width:16em;height:16em;-webkit-border-radius:1em;border-radius:1em;background:white;padding:.5em}.gramlink-auth__status{font-size:1.1em;color:rgba(255,255,255,0.6);line-height:1.5}.gramlink-auth__scan-hint{margin-bottom:.5em;color:rgba(255,255,255,0.8)}.gramlink-auth__confirm-hint{font-size:.85em;color:rgba(255,255,255,0.4)}.gramlink-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em;padding:.6em 1.2em;-webkit-border-radius:.5em;border-radius:.5em;font-size:.9em;font-weight:600;cursor:pointer;border:0;-webkit-transition:background .2s,opacity .2s;-o-transition:background .2s,opacity .2s;transition:background .2s,opacity .2s}.gramlink-btn.focus,.gramlink-btn.hover{outline:.2em solid #fff;outline-offset:.3em}.gramlink-btn--primary{background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);color:white}.gramlink-btn--ghost{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8)}.gramlink-btn--ghost.focus{background:rgba(255,255,255,0.15)}.gramlink-btn--small{padding:.4em .8em;font-size:.8em}@media screen and (max-width:1024px){.gramlink-hub{padding:.8em 1em}.gramlink-tabs{padding-left:1em;padding-right:1em}.gramlink-status{padding:1em}.gramlink-auth__qr-placeholder,.gramlink-auth__qr-img{width:12em;height:12em}.gramlink-auth__qr-container{min-height:14em}}@media screen and (max-width:480px){.gramlink-hub__header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.8em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}}.gramlink-2fa{padding:1em;text-align:center}.gramlink-2fa__desc{font-size:1.1em;color:rgba(255,255,255,0.8);margin-bottom:.5em;line-height:1.4}.gramlink-2fa__hint{font-size:.9em;color:rgba(255,255,255,0.5);margin-bottom:1.5em}.gramlink-2fa__input-wrap{margin-bottom:1.5em}.gramlink-2fa__input{width:100%;max-width:20em;padding:.8em 1em;border:.15em solid rgba(255,255,255,0.2);-webkit-border-radius:.5em;border-radius:.5em;background:rgba(255,255,255,0.08);color:#fff;font-size:1.1em;text-align:center;outline:0;-webkit-box-sizing:border-box;box-sizing:border-box}.gramlink-2fa__input:focus{border-color:#08c}.gramlink-2fa__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gramlink-2fa__btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.7em 1.5em;-webkit-border-radius:.5em;border-radius:.5em;font-size:1em;font-weight:600;cursor:pointer;min-width:8em;-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s}.gramlink-2fa__btn_ok{background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);color:white}.gramlink-2fa__btn_cancel{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8)}.gramlink-2fa__btn.focus,.gramlink-2fa__btn.hover{outline:.2em solid #fff;outline-offset:.3em}.gramlink-tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;padding:0 2em;margin-bottom:1em}.gramlink-tab.active{background:rgba(255,255,255,0.15) !important;border-color:rgba(255,255,255,0.3) !important;color:#fff !important}.gramlink-body--grid>.gramlink-tabs,.gramlink-tabs{grid-column:1/-1}.gramlink-device-avatar{width:2em;height:2em;-webkit-border-radius:.4em;border-radius:.4em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:600;font-size:.9em}.gramlink-avatar{-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:700;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.gramlink-avatar--head{width:24px;height:24px;font-size:11px}.gramlink-avatar--list{width:2em;height:2em;font-size:.9em}.gramlink-profile-avatar{width:2.2em;height:2.2em;-webkit-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:600;font-size:.9em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gs-plugin-toggle{width:1.2em;height:1.2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.2em}.gs-plugin-toggle.on{color:#4caf50}.gs-plugin-toggle.off{color:rgba(255,255,255,0.3)}.gs-status-item .gramlink-status__indicator{margin:auto}.gs-profile-item .gs-avatar{background:rgba(255,255,255,0.06) !important}.gs-profile-item .gs-avatar img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.5em;border-radius:.5em}.gs-profile-add-item{border:2px dashed rgba(255,215,0,0.3);background:transparent !important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:rgba(255,255,255,0.5)}.gs-profile-add-item.focus,.gs-profile-add-item.hover{border-color:rgba(255,215,0,0.7);color:rgba(255,255,255,0.8)}.gs-profile-add-item .gs-avatar{background:-webkit-linear-gradient(315deg,#d4a017 0,#ffd700 100%) !important;background:-o-linear-gradient(315deg,#d4a017 0,#ffd700 100%) !important;background:linear-gradient(135deg,#d4a017 0,#ffd700 100%) !important}.gramlink-item{background:#404040;-webkit-border-radius:1em;border-radius:1em;padding:1.2em 1.4em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.gramlink-item.focus{outline:.3em solid #fff;outline-offset:.3em;-webkit-border-radius:1.2em;border-radius:1.2em}.gramlink-body--grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1em;padding:1em 2em}@media(max-width:1024px){.gramlink-body--grid{grid-template-columns:1fr;padding-bottom:80px}}@media(max-width:480px){.gramlink-body--grid{padding-left:1em;padding-right:1em}}.gramlink-body--grid>.gramlink-item{margin:0;min-height:0}.gramlink-body--grid>.gramlink-item+.gramlink-item{margin:0}.gramlink-body--content{padding:1em 2em}.gs-avatar{width:2.5em;height:2.5em;-webkit-border-radius:.5em;border-radius:.5em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;color:#fff;font-weight:700;font-size:.9em;margin-right:1em}.gs-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gs-title{font-size:1.1em;line-height:normal;margin-bottom:.2em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.gs-sub{font-size:.84em;color:#8d8d8d;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.gs-badge{font-size:.78em;padding:.3em .5em;-webkit-border-radius:.3em;border-radius:.3em;background:rgba(0,0,0,0.18);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:auto}.gs-badge.badge--active{color:#6dce4b}.gs-badge.badge--inactive{color:#dd7337}.gs-badge.badge--info{color:#8d8d8d}.gramlink-body--grid>.gramlink-tabs,.gramlink-tabs{grid-column:1/-1}</style>');
	  $('body').append(Lampa.Template.get('gramlink_style', {}, true));
	  setupBroadcastListener();
	  setupBackupRestoredListener();
	  addMenu();
	  // ponytail: defer head button — DOM not ready during plugin init
	  Lampa.Listener.follow('app', function __glHeadBtn(e) {
	    if (e.type === 'ready') {
	      addProfileHeadButton();
	    }
	  });
	  Broadcast.setupPlayerPanel();
	  Broadcast.addBroadcastButton();
	  autoConnect();
	  autoActivateProfile();
	  setupProfileDeltaListeners();
	  setupDeviceSettingsListener();
	  startDeltaPolling();
	}

	// ─── Real-time delta sync listeners ─────────────────────

	// ─── Persistent delta polling (same-account cross-device sync) ─

	var deltaPollTimer = null;
	function startDeltaPolling() {
	  // ponytail: clear existing timer on re-entry
	  if (deltaPollTimer) {
	    clearInterval(deltaPollTimer);
	    deltaPollTimer = null;
	  }
	  // Start after connection is established
	  var client = GatewayClient.getInstance();
	  var pollInterval = getInt(STORAGE_KEYS.POLL_INTERVAL, 10) * 1000;
	  var check = setInterval(function () {
	    if (client.isConnected()) {
	      clearInterval(check);
	      // Poll immediately then every pollInterval
	      Profiles.refreshDeltas();
	      deltaPollTimer = setInterval(function () {
	        if (document.hidden) return; // ponytail: skip when tab hidden
	        Profiles.refreshDeltas();
	      }, pollInterval);
	    }
	  }, 2000);
	}
	function setupProfileDeltaListeners() {
	  if (!window.Lampa || !Lampa.Favorite || !Lampa.Favorite.listener) return;
	  Lampa.Favorite.listener.follow('add,added', function (e) {
	    if (isSkipPublish()) return;
	    var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (!profilesSyncTopicId) return;
	    Profiles.publishLocalDelta(profilesSyncTopicId, 'bookmark_add', {
	      card_id: e.card.id,
	      type: e.where,
	      card: Lampa.Utils.clearCard(JSON.parse(JSON.stringify(e.card)))
	    });
	  });
	  Lampa.Favorite.listener.follow('remove', function (e) {
	    if (e.method !== 'id') return;
	    if (isSkipPublish()) return;
	    var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (!profilesSyncTopicId) return;
	    Profiles.publishLocalDelta(profilesSyncTopicId, 'bookmark_remove', {
	      card_id: e.card.id,
	      type: e.where
	    });
	  });

	  // Timecode sync (continue watching) — publish on player stop/destroy
	  var lastTimecodePublish = 0;
	  Lampa.Listener.follow('state:changed', function (e) {
	    if (e.target !== 'timeline' || e.reason !== 'update') return;
	    var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (!profilesSyncTopicId) return;

	    // Throttle: at most once per 30s to avoid spam from periodic saves
	    var now = Date.now();
	    if (now - lastTimecodePublish < 30000) return;
	    lastTimecodePublish = now;
	    var road = e.data && e.data.road;
	    if (!road || !road.time) return;
	    Profiles.publishLocalDelta(profilesSyncTopicId, 'timecode_update', {
	      hash: e.data.hash,
	      time: road.time,
	      duration: road.duration || 0,
	      percent: road.percent || 0
	    });
	  });
	}

	// ─── Device-scoped settings sync ──────────────────────────
	// ponytail: auto-publish any device-scoped key change as device_setting delta

	function setupDeviceSettingsListener() {
	  var lastDevicePublish = {};
	  Lampa.Storage.listener.follow('change', function (e) {
	    if (!e || !e.key) return;
	    // Only sync device-scoped keys
	    if (!Profiles.isDeviceKey(e.key)) return;
	    var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	    if (!profilesSyncTopicId) return;

	    // Throttle: at most once per 5s per key to avoid spam
	    var now = Date.now();
	    if (lastDevicePublish[e.key] && now - lastDevicePublish[e.key] < 5000) return;
	    lastDevicePublish[e.key] = now;
	    var value;
	    try {
	      value = JSON.parse(localStorage.getItem(e.key));
	    } catch (x) {
	      value = localStorage.getItem(e.key);
	    }
	    Profiles.publishDeviceDelta(profilesSyncTopicId, 'device_setting', {
	      device_id: getDeviceId(),
	      key: e.key,
	      value: value
	    }, 'all');
	  });
	}

	// ─── Startup profile activation ─────────────────────────

	function autoActivateProfile() {
	  var activeId = Lampa.Storage.get('gramlink_active_profile', '');
	  if (!activeId) return;
	  var profilesTopicId = Lampa.Storage.get('gramlink_profiles_topic', '');
	  var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
	  if (!profilesTopicId) return;
	  var client = GatewayClient.getInstance();
	  var check = setInterval(function () {
	    if (document.hidden) return; // ponytail: skip when tab hidden
	    if (client.isConnected()) {
	      clearInterval(check);
	      Profiles.startAutoActivation(profilesTopicId, profilesSyncTopicId);
	    }
	  }, 2000);
	  // ponytail: 30s timeout — stop polling if client doesn't connect
	  setTimeout(function () {
	    clearInterval(check);
	  }, 30000);
	}

	// ─── Auto-connect on startup ──────────────────────────────

	function autoConnect() {
	  var client = GatewayClient.getInstance();
	  if (!client.hasCredentials()) return;

	  // Connect in background once the app is fully ready
	  function doConnect() {
	    client.connect().then(function () {
	      console.log('GramLink', 'Auto-connected to Telegram.');
	      Profiles.refreshCacheFromTelegram();
	    }).catch(function (err) {
	      console.warn('GramLink', 'Auto-connect failed:', err && err.message);
	    });
	  }
	  if (window.appready) doConnect();else {
	    Lampa.Listener.follow('app', function (e) {
	      if (e.type === 'ready') doConnect();
	    });
	  }
	}

	// ─── Cross-Device Broadcast Handler ──────────────────────

	function setupBroadcastListener() {
	  var client = GatewayClient.getInstance();
	  client.on('open_card', function (data) {
	    // Received "open on this device" command
	    Lampa.Noty.show(Lampa.Lang.translate('gramlink_noty_card_received').replace('{device}', data.meta && data.meta.device_name || ''));
	    if (data.payload && data.payload.card) {
	      Lampa.Activity.push({
	        url: '',
	        title: data.payload.card.title || '',
	        component: 'full',
	        page: 1,
	        card: data.payload.card
	      });
	    }
	  });
	  client.on('play_video', function (data) {
	    // Received "play on this device" command
	    if (data.payload && data.payload.media) {
	      Lampa.Player.play(data.payload.media);
	    }
	  });
	}

	// ─── Backup restored listener ──────────────────────────

	function setupBackupRestoredListener() {
	  Lampa.Listener.follow('gramlink_backup_restored', function (e) {
	    // After backup restore — advance delta cursor,
	    // so old deltas are not accepted as new
	    if (e && e.restored_at) {
	      Lampa.Storage.set('gramlink_last_delta_seen', String(e.restored_at));
	    }
	  });
	}

	// ─── Profile Head Button ────────────────────────────────

	function addProfileHeadButton() {
	  var $profileBtn = $('<div class="head__action selector open--gramlink-profile" ' + 'style="display:none">' + '<div class="gramlink-avatar gramlink-avatar--head">?</div>' + '</div>');

	  // ponytail: cleanup existing profile button before insert
	  $('.open--gramlink-profile').remove();
	  // ponytail: insert directly into head__actions, no dependency on .open--profile
	  var $headActions = $('.head__actions');
	  if ($headActions.length) {
	    var $fs = $headActions.find('.full--screen');
	    if ($fs.length) $fs.before($profileBtn);else $headActions.prepend($profileBtn);
	  } else {
	    $('.head__action.open--search').after($profileBtn);
	  }
	  function updateProfileButton() {
	    var client = GatewayClient.getInstance();
	    var activeId = Lampa.Storage.get('gramlink_active_profile', '');
	    var activeName = Lampa.Storage.get('gramlink_active_profile_name', '');
	    if (!client.hasCredentials() || !activeId || !activeName) {
	      $profileBtn.hide();
	      return;
	    }
	    $profileBtn.show();
	    var $av = $profileBtn.find('.gramlink-avatar');
	    var avatarHtml = renderAvatar(activeName, {
	      className: 'gramlink-avatar gramlink-avatar--head',
	      style: 'width:100%;height:100%;object-fit:cover;border-radius:50%;'
	    });
	    $av.replaceWith(avatarHtml);
	    updateConnectionIndicator();
	  }

	  // ponytail: connection state → data-state on the button wrapper
	  // connected: no attribute (clean), connecting: pulsing, disconnected: dimmed border
	  function updateConnectionIndicator() {
	    var client = GatewayClient.getInstance();
	    if (!client.hasCredentials() || $profileBtn.css('display') === 'none') {
	      $profileBtn.removeAttr('data-state');
	      return;
	    }
	    if (client.isConnected()) {
	      $profileBtn.removeAttr('data-state');
	    } else if (client.isConnecting()) {
	      $profileBtn.attr('data-state', 'connecting');
	    } else {
	      $profileBtn.attr('data-state', 'disconnected');
	    }
	  }
	  updateProfileButton();

	  // ponytail: react to connection state changes from the client
	  var connClient = GatewayClient.getInstance();
	  connClient.on('connection', function (e) {
	    updateConnectionIndicator();
	  });
	  Lampa.Storage.listener.follow('change', function (e) {
	    if (e.name === 'gramlink_active_profile' || e.name === 'gramlink_active_profile_name' || e.name === 'gramlink_avatar_style') {
	      updateProfileButton();
	    }
	  });

	  // Profile icons should be visible even when GramLink hub is active
	  Lampa.Listener.follow('activity', function (e) {
	    if ($profileBtn.css('display') === 'none') return;
	    // Keep visible unless it's the menu
	    if (e.type === 'start' && e.component === 'menu') {
	      $profileBtn.hide();
	    } else if (e.type === 'stop' && e.component === 'menu') {
	      $profileBtn.show();
	    }
	  });
	  $profileBtn.on('hover:enter hover:click hover:touch', function () {
	    showProfileSidebar();
	  });
	}

	// ─── Profile Sidebar ──────────────────────────────────────

	function showProfileSidebar() {
	  var client = GatewayClient.getInstance();
	  if (!client.isConnected()) {
	    Lampa.Noty.show('Connect to Telegram first');
	    return;
	  }
	  var cachedProfiles = Profiles.getCachedProfiles();
	  var hasCache = cachedProfiles.length > 0;
	  var enabledCtrl = Lampa.Controller.enabled().name;
	  var items = [];

	  // "Add profile" — always first (native Lampa pattern)
	  items.push({
	    title: Lampa.Lang.translate('gramlink_create_profile') || 'Create profile',
	    template: 'selectbox_icon',
	    icon: '<svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
	    _add: true
	  });
	  if (hasCache) {
	    // Profile items from cache
	    cachedProfiles.forEach(function (p) {
	      var iconHtml = renderAvatar(p.name, {
	        className: 'gramlink-avatar gramlink-avatar--list',
	        style: 'width:2em;height:2em;object-fit:cover;'
	      });
	      items.push({
	        title: p.name,
	        template: 'selectbox_icon',
	        icon: iconHtml,
	        selected: p.isActive || false,
	        subtitle: p.isActive ? Lampa.Lang.translate('gramlink_profile_active') || 'Active' : '',
	        _msgId: p.msgId,
	        _name: p.name
	      });
	    });
	  }
	  Lampa.Select.show({
	    title: Lampa.Lang.translate('account_profiles') || 'Profiles',
	    items: items,
	    onSelect: function onSelect(item) {
	      if (item._add) {
	        Lampa.Controller.toggle(enabledCtrl);
	        Profiles.createProfile(Lampa.Storage.get('gramlink_profiles_topic', ''), Lampa.Storage.get('gramlink_profiles_sync_topic', ''), $());
	      } else if (item._msgId) {
	        Profiles.quickSwitchProfile(item._msgId);
	      }
	    },
	    onBack: function onBack() {
	      Lampa.Controller.toggle(enabledCtrl); // ponytail: restore controller on back
	    },
	    onFullDraw: function onFullDraw(container) {
	      container.append($('<div class="selectbox-item selectbox-item--icon selector">' + '<div class="selectbox-item__icon">' + '<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' + '</div>' + '<div>' + '<div class="selectbox-item__title">' + (Lampa.Lang.translate('gramlink_hub_title') || 'GramLink HUB') + '</div>' + '</div>' + '</div>').on('hover:enter', function () {
	        Lampa.Activity.push({
	          url: '',
	          title: Lampa.Lang.translate('gramlink_hub_title') || 'GramLink',
	          component: 'gramlink_hub',
	          page: 1
	        });
	      }));
	    }
	  });
	}

	// ─── Menu Button ─────────────────────────────────────────

	function addMenu() {
	  function insert() {
	    var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 24 24\" fill=\"#0088cc\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.587.192l-8.533 7.77h-.001l.003.003-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.22c.309-1.239-.473-1.8-1.282-1.434z\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(Lampa.Lang.translate('gramlink_menu_title'), "</div>\n        </li>"));
	    button.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('gramlink_hub_title'),
	        component: 'gramlink_hub',
	        page: 1
	      });
	    });
	    $('.menu .menu__list').eq(0).append(button);
	  }
	  if (window.appready) insert();else {
	    Lampa.Listener.follow('app', function (e) {
	      if (e.type === 'ready') insert();
	    });
	  }
	}

	// ─── Guard ───────────────────────────────────────────────

	if (!window.plugin_gramlink_ready) startPlugin();

	return startPlugin;

})();
