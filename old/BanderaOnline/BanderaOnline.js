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

	var globalThis$b = require('../internals/global-this');
	var getOwnPropertyDescriptor$2 = require('../internals/object-get-own-property-descriptor').f;
	var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
	var defineBuiltIn$5 = require('../internals/define-built-in');
	var defineGlobalProperty$1 = require('../internals/define-global-property');
	var copyConstructorProperties$2 = require('../internals/copy-constructor-properties');
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
	    target = globalThis$b;
	  } else if (STATIC) {
	    target = globalThis$b[TARGET] || defineGlobalProperty$1(TARGET, {});
	  } else {
	    target = globalThis$b[TARGET] && globalThis$b[TARGET].prototype;
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
	      copyConstructorProperties$2(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$5(target, key, sourceProperty, options);
	  }
	};

	var _export = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(_export);

	var hasRequiredEs_globalThis;

	function requireEs_globalThis () {
		if (hasRequiredEs_globalThis) return es_globalThis;
		hasRequiredEs_globalThis = 1;

		var $ = require$$0$6;
		var globalThis = require$$0$5;

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

	var globalThis$a = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(globalThis$a);

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

		var globalThis = require$$0$5;

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
		var globalThis = require$$0$5;
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

	var toObject$2;
	var hasRequiredToObject;

	function requireToObject () {
		if (hasRequiredToObject) return toObject$2;
		hasRequiredToObject = 1;

		var requireObjectCoercible = requireRequireObjectCoercible();
		var $Object = Object;

		// `ToObject` abstract operation
		// https://tc39.es/ecma262/#sec-toobject
		toObject$2 = function (argument) {
		  return $Object(requireObjectCoercible(argument));
		};
		return toObject$2;
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
	var toObject$1 = require('../internals/to-object');
	var lengthOfArrayLike$2 = require('../internals/length-of-array-like');
	var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
	var createProperty$1 = require('../internals/create-property');
	var setArrayLength = require('../internals/array-set-length');
	var arraySpeciesCreate = require('../internals/array-species-create');
	var arrayMethodHasSpeciesSupport$3 = require('../internals/array-method-has-species-support');
	var wellKnownSymbol$6 = require('../internals/well-known-symbol');
	var V8_VERSION$1 = require('../internals/environment-v8-version');
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$6('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$d(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var isConcatSpreadable = function isConcatSpreadable(O) {
	  if (!isObject$5(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$3(O);
	};
	var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$e({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED$3
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$1(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$2(E);
	        doesNotExceedSafeInteger(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty$1(A, n++, E);
	      }
	    }
	    setArrayLength(A, n);
	    return A;
	  }
	});

	var apply$1 = require('../internals/function-apply');
	var call$8 = require('../internals/function-call');
	var uncurryThis$f = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$3 = require('../internals/fix-regexp-well-known-symbol-logic');
	var fails$c = require('../internals/fails');
	var anObject$7 = require('../internals/an-object');
	var isCallable$9 = require('../internals/is-callable');
	var isObject$4 = require('../internals/is-object');
	var toIntegerOrInfinity$1 = require('../internals/to-integer-or-infinity');
	var toLength$3 = require('../internals/to-length');
	var toString$a = require('../internals/to-string');
	var requireObjectCoercible$3 = require('../internals/require-object-coercible');
	var advanceStringIndex$2 = require('../internals/advance-string-index');
	var getMethod$3 = require('../internals/get-method');
	var getSubstitution = require('../internals/get-substitution');
	var getRegExpFlags$4 = require('../internals/regexp-get-flags');
	var regExpExec$3 = require('../internals/regexp-exec-abstract');
	var wellKnownSymbol$5 = require('../internals/well-known-symbol');
	var REPLACE = wellKnownSymbol$5('replace');
	var max = Math.max;
	var min$1 = Math.min;
	var concat = uncurryThis$f([].concat);
	var push$4 = uncurryThis$f([].push);
	var stringIndexOf$3 = uncurryThis$f(''.indexOf);
	var stringSlice$6 = uncurryThis$f(''.slice);
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
	    return replacer ? call$8(replacer, searchValue, O, replaceValue) : call$8(nativeReplace, toString$a(O), searchValue, replaceValue);
	  },
	  // `RegExp.prototype[@@replace]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	  function (string, replaceValue) {
	    var rx = anObject$7(this);
	    var S = toString$a(string);
	    var functionalReplace = isCallable$9(replaceValue);
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
	      push$4(results, result);
	      if (!global) break;
	      var matchStr = toString$a(result[0]);
	      if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$3(rx.lastIndex), fullUnicode);
	    }
	    var accumulatedResult = '';
	    var nextSourcePosition = 0;
	    for (var i = 0; i < results.length; i++) {
	      result = results[i];
	      var matched = toString$a(result[0]);
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
	        replacement = toString$a(apply$1(replaceValue, undefined, replacerArgs));
	      } else {
	        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	      }
	      if (position >= nextSourcePosition) {
	        accumulatedResult += stringSlice$6(S, nextSourcePosition, position) + replacement;
	        nextSourcePosition = position + matched.length;
	      }
	    }
	    return accumulatedResult + stringSlice$6(S, nextSourcePosition);
	  }];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	var DESCRIPTORS$7 = require('../internals/descriptors');
	var globalThis$9 = require('../internals/global-this');
	var uncurryThis$e = require('../internals/function-uncurry-this');
	var isForced$1 = require('../internals/is-forced');
	var inheritIfRequired$1 = require('../internals/inherit-if-required');
	var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
	var create = require('../internals/object-create');
	var getOwnPropertyNames$1 = require('../internals/object-get-own-property-names').f;
	var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
	var isRegExp = require('../internals/is-regexp');
	var toString$9 = require('../internals/to-string');
	var getRegExpFlags$3 = require('../internals/regexp-get-flags');
	var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
	var proxyAccessor = require('../internals/proxy-accessor');
	var defineBuiltIn$4 = require('../internals/define-built-in');
	var fails$b = require('../internals/fails');
	var hasOwn$5 = require('../internals/has-own-property');
	var enforceInternalState$1 = require('../internals/internal-state').enforce;
	var setSpecies = require('../internals/set-species');
	var wellKnownSymbol$4 = require('../internals/well-known-symbol');
	var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
	var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
	var MATCH = wellKnownSymbol$4('match');
	var NativeRegExp = globalThis$9.RegExp;
	var RegExpPrototype$1 = NativeRegExp.prototype;
	var SyntaxError = globalThis$9.SyntaxError;
	var exec$2 = uncurryThis$e(RegExpPrototype$1.exec);
	var charAt$1 = uncurryThis$e(''.charAt);
	var replace$3 = uncurryThis$e(''.replace);
	var stringIndexOf$2 = uncurryThis$e(''.indexOf);
	var stringSlice$5 = uncurryThis$e(''.slice);
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
	        if (exec$2(IS_NCG, stringSlice$5(string, index + 1))) {
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
	    pattern = pattern === undefined ? '' : toString$9(pattern);
	    flags = flags === undefined ? '' : toString$9(flags);
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
	  for (var keys = getOwnPropertyNames$1(NativeRegExp), index = 0; keys.length > index;) {
	    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
	  }
	  RegExpPrototype$1.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$1;
	  defineBuiltIn$4(globalThis$9, 'RegExp', RegExpWrapper, {
	    constructor: true
	  });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies('RegExp');

	var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
	var defineBuiltIn$3 = require('../internals/define-built-in');
	var anObject$6 = require('../internals/an-object');
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
	  defineBuiltIn$3(RegExpPrototype, TO_STRING, function toString() {
	    var R = anObject$6(this);
	    var pattern = $toString$1(R.source);
	    var flags = $toString$1(getRegExpFlags$2(R));
	    return '/' + pattern + '/' + flags;
	  }, {
	    unsafe: true
	  });
	}

	var uncurryThis$d = require('../internals/function-uncurry-this');
	var id = 0;
	var postfix = Math.random();
	var toString$8 = uncurryThis$d(1.1.toString);
	module.exports = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
	};

	var uid$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(uid$2);

	var es_symbol = {};

	// `Symbol.prototype.description` getter
	var $$d = require('../internals/export');
	var DESCRIPTORS$6 = require('../internals/descriptors');
	var globalThis$8 = require('../internals/global-this');
	var call$7 = require('../internals/function-call');
	var uncurryThis$c = require('../internals/function-uncurry-this');
	var hasOwn$4 = require('../internals/has-own-property');
	var isCallable$8 = require('../internals/is-callable');
	var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
	var toString$7 = require('../internals/to-string');
	var defineBuiltInAccessor$1 = require('../internals/define-built-in-accessor');
	var copyConstructorProperties$1 = require('../internals/copy-constructor-properties');
	var NativeSymbol = globalThis$8.Symbol;
	var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
	if (DESCRIPTORS$6 && isCallable$8(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
	// Safari 12 bug
	NativeSymbol().description !== undefined)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function _Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$7(arguments[0]);
	    var result = isPrototypeOf$3(SymbolPrototype$1, this)
	    // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
	    ? new NativeSymbol(description)
	    // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	    : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties$1(SymbolWrapper, NativeSymbol);
	  // wrap Symbol.for for correct handling of empty string descriptions
	  var nativeFor = SymbolWrapper['for'];
	  SymbolWrapper['for'] = {
	    'for': function _for(key) {
	      var stringKey = toString$7(key);
	      var symbol = call$7(nativeFor, this, stringKey);
	      if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
	      return symbol;
	    }
	  }['for'];
	  SymbolWrapper.prototype = SymbolPrototype$1;
	  SymbolPrototype$1.constructor = SymbolWrapper;
	  var NATIVE_SYMBOL$3 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$c(SymbolPrototype$1.valueOf);
	  var symbolDescriptiveString = uncurryThis$c(SymbolPrototype$1.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$2 = uncurryThis$c(''.replace);
	  var stringSlice$4 = uncurryThis$c(''.slice);
	  defineBuiltInAccessor$1(SymbolPrototype$1, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$4(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL$3 ? stringSlice$4(string, 7, -1) : replace$2(string, regexp, '$1');
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

	var globalThis$7 = require('../internals/global-this');
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
	    handlePrototype$1(globalThis$7[COLLECTION_NAME$1] && globalThis$7[COLLECTION_NAME$1].prototype);
	  }
	}
	handlePrototype$1(DOMTokenListPrototype$1);

	var $$c = require('../internals/export');
	var globalThis$6 = require('../internals/global-this');
	var call$6 = require('../internals/function-call');
	var uncurryThis$b = require('../internals/function-uncurry-this');
	var IS_PURE$2 = require('../internals/is-pure');
	var DESCRIPTORS$5 = require('../internals/descriptors');
	var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
	var fails$9 = require('../internals/fails');
	var hasOwn$3 = require('../internals/has-own-property');
	var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
	var anObject$5 = require('../internals/an-object');
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
	var defineBuiltIn$2 = require('../internals/define-built-in');
	var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
	var shared = require('../internals/shared');
	var sharedKey$1 = require('../internals/shared-key');
	var hiddenKeys$1 = require('../internals/hidden-keys');
	var uid$1 = require('../internals/uid');
	var wellKnownSymbol$3 = require('../internals/well-known-symbol');
	var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
	var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
	var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
	var setToStringTag$2 = require('../internals/set-to-string-tag');
	var InternalStateModule$1 = require('../internals/internal-state');
	var $forEach = require('../internals/array-iteration').forEach;
	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = globalThis$6.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var RangeError = globalThis$6.RangeError;
	var TypeError$2 = globalThis$6.TypeError;
	var QObject = globalThis$6.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$3 = uncurryThis$b([].push);
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
	  anObject$5(O);
	  var key = toPropertyKey$2(P);
	  anObject$5(Attributes);
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
	  anObject$5(O);
	  var properties = toIndexedObject$2(Properties);
	  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS$5 || call$6($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
	  });
	  return O;
	};
	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$2(V);
	  var enumerable = call$6(nativePropertyIsEnumerable, this, P);
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
	    if (!hasOwn$3(AllSymbols, key) && !hasOwn$3(hiddenKeys$1, key)) push$3(result, key);
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
	    if (isPrototypeOf$2(SymbolPrototype, this)) throw new TypeError$2('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid$1(description);
	    var _setter = function setter(value) {
	      var $this = this === undefined ? globalThis$6 : this;
	      if ($this === ObjectPrototype) call$6(_setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$3($this, HIDDEN) && hasOwn$3($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
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
	  defineBuiltIn$2(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });
	  defineBuiltIn$2($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$1(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty$1;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$3(name), name);
	  };
	  if (DESCRIPTORS$5) {
	    // https://tc39.es/ecma262/#sec-symbol.prototype.description
	    defineBuiltInAccessor(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$1(this).description;
	      }
	    });
	    if (!IS_PURE$2) {
	      defineBuiltIn$2(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
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
	setToStringTag$2($Symbol, SYMBOL);
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

	var isCallable$7 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(isCallable$7);

	var getBuiltIn$3;
	var hasRequiredGetBuiltIn;

	function requireGetBuiltIn () {
		if (hasRequiredGetBuiltIn) return getBuiltIn$3;
		hasRequiredGetBuiltIn = 1;

		var globalThis = require$$0$5;
		var isCallable = require$$0$4;
		var aFunction = function aFunction(argument) {
		  return isCallable(argument) ? argument : undefined;
		};
		getBuiltIn$3 = function (namespace, method) {
		  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
		};
		return getBuiltIn$3;
	}

	var uncurryThis$a = require('../internals/function-uncurry-this');
	var toString$6 = uncurryThis$a({}.toString);
	var stringSlice$3 = uncurryThis$a(''.slice);
	module.exports = function (it) {
	  return stringSlice$3(toString$6(it), 8, -1);
	};

	var classofRaw = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

	var classof$4;
	var hasRequiredClassof;

	function requireClassof () {
		if (hasRequiredClassof) return classof$4;
		hasRequiredClassof = 1;

		var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
		var isCallable = require$$0$4;
		var classofRaw = require$$1$1;
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
		classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
		  var O, tag, result;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		  // @@toStringTag case
		  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
		  // builtinTag case
		  : CORRECT_ARGUMENTS ? classofRaw(O)
		  // ES3 arguments fallback
		  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
		};
		return classof$4;
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

		var NATIVE_SYMBOL = require$$4;

		/* eslint-disable es/no-symbol -- safe */
		symbolRegistryDetection = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;
		return symbolRegistryDetection;
	}

	var hasRequiredEs_symbol_for;

	function requireEs_symbol_for () {
		if (hasRequiredEs_symbol_for) return es_symbol_for;
		hasRequiredEs_symbol_for = 1;

		var $ = require$$0$6;
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

	var getBuiltIn$2 = require('../internals/get-built-in');
	var isCallable$6 = require('../internals/is-callable');
	var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
	var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
	var $Object$1 = Object;
	module.exports = USE_SYMBOL_AS_UID ? function (it) {
	  return _typeof(it) == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$2('Symbol');
	  return isCallable$6($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$1(it));
	};

	var isSymbol$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$4 = /*@__PURE__*/getAugmentedNamespace(isSymbol$2);

	var tryToString;
	var hasRequiredTryToString;

	function requireTryToString () {
		if (hasRequiredTryToString) return tryToString;
		hasRequiredTryToString = 1;

		var $String = String;
		tryToString = function (argument) {
		  try {
		    return $String(argument);
		  } catch (error) {
		    return 'Object';
		  }
		};
		return tryToString;
	}

	var hasRequiredEs_symbol_keyFor;

	function requireEs_symbol_keyFor () {
		if (hasRequiredEs_symbol_keyFor) return es_symbol_keyFor;
		hasRequiredEs_symbol_keyFor = 1;

		var $ = require$$0$6;
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

	var $$b = require('../internals/export');
	var getBuiltIn$1 = require('../internals/get-built-in');
	var apply = require('../internals/function-apply');
	var call$5 = require('../internals/function-call');
	var uncurryThis$9 = require('../internals/function-uncurry-this');
	var fails$8 = require('../internals/fails');
	var isArray$2 = require('../internals/is-array');
	var isCallable$5 = require('../internals/is-callable');
	var isRawJSON = require('../internals/is-raw-json');
	var isSymbol$1 = require('../internals/is-symbol');
	var classof$3 = require('../internals/classof-raw');
	var toString$4 = require('../internals/to-string');
	var arraySlice$1 = require('../internals/array-slice');
	var parseJSONString = require('../internals/parse-json-string');
	var uid = require('../internals/uid');
	var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
	var NATIVE_RAW_JSON = require('../internals/native-raw-json');
	var $String$2 = String;
	var $stringify = getBuiltIn$1('JSON', 'stringify');
	var exec$1 = uncurryThis$9(/./.exec);
	var charAt = uncurryThis$9(''.charAt);
	var charCodeAt$1 = uncurryThis$9(''.charCodeAt);
	var replace$1 = uncurryThis$9(''.replace);
	var slice = uncurryThis$9(''.slice);
	var push$2 = uncurryThis$9([].push);
	var numberToString = uncurryThis$9(1.1.toString);
	var surrogates = /[\uD800-\uDFFF]/g;
	var leadingSurrogates = /^[\uD800-\uDBFF]$/;
	var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
	var MARK = uid();
	var MARK_LENGTH = MARK.length;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$8(function () {
	  var symbol = getBuiltIn$1('Symbol')('stringify detection');
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
	  if (!isCallable$5($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$5($replacer)) value = call$5($replacer, this, $String$2(key), value);
	    if (!isSymbol$1(value)) return value;
	  };
	  return apply($stringify, null, args);
	} : $stringify;
	var fixIllFormedJSON = function fixIllFormedJSON(match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);
	  if (exec$1(leadingSurrogates, match) && !exec$1(trailingSurrogates, next) || exec$1(trailingSurrogates, match) && !exec$1(leadingSurrogates, prev)) {
	    return "\\u" + numberToString(charCodeAt$1(match, 0), 16);
	  }
	  return match;
	};
	var getReplacerFunction = function getReplacerFunction(replacer) {
	  if (isCallable$5(replacer)) return replacer;
	  if (!isArray$2(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$2(keys, element);else if (typeof element == 'number' || classof$3(element) === 'Number' || classof$3(element) === 'String') push$2(keys, toString$4(element));
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
	      var v = isCallable$5(replacerFunction) ? call$5(replacerFunction, this, $String$2(key), value) : value;
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

	var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertySymbols);

	var hasRequiredEs_object_getOwnPropertySymbols;

	function requireEs_object_getOwnPropertySymbols () {
		if (hasRequiredEs_object_getOwnPropertySymbols) return es_object_getOwnPropertySymbols;
		hasRequiredEs_object_getOwnPropertySymbols = 1;

		var $ = require$$0$6;
		var NATIVE_SYMBOL = require$$4;
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

	var V8_VERSION = require('../internals/environment-v8-version');
	var fails$7 = require('../internals/fails');
	var globalThis$5 = require('../internals/global-this');
	var $String$1 = globalThis$5.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	module.exports = !!Object.getOwnPropertySymbols && !fails$7(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$1(symbol) || !(Object(symbol) instanceof Symbol) ||
	  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	var symbolConstructorDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$4 = /*@__PURE__*/getAugmentedNamespace(symbolConstructorDetection);

	var es_symbol_iterator = {};

	var path$1;
	var hasRequiredPath;

	function requirePath () {
		if (hasRequiredPath) return path$1;
		hasRequiredPath = 1;

		var globalThis = require$$0$5;
		path$1 = globalThis;
		return path$1;
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

	var call$4 = require('../internals/function-call');
	var uncurryThis$8 = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$4 = require('../internals/an-object');
	var isObject$3 = require('../internals/is-object');
	var requireObjectCoercible$2 = require('../internals/require-object-coercible');
	var speciesConstructor = require('../internals/species-constructor');
	var advanceStringIndex$1 = require('../internals/advance-string-index');
	var toLength$2 = require('../internals/to-length');
	var toString$3 = require('../internals/to-string');
	var getMethod$2 = require('../internals/get-method');
	var getRegExpFlags$1 = require('../internals/regexp-get-flags');
	var regExpExec$2 = require('../internals/regexp-exec-abstract');
	var stickyHelpers = require('../internals/regexp-sticky-helpers');
	var fails$6 = require('../internals/fails');
	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min = Math.min;
	var push$1 = uncurryThis$8([].push);
	var stringSlice$2 = uncurryThis$8(''.slice);
	var stringIndexOf$1 = uncurryThis$8(''.indexOf);

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
	    return separator === undefined && limit === 0 ? [] : call$4(nativeSplit, this, separator, limit);
	  } : nativeSplit;
	  return [
	  // `String.prototype.split` method
	  // https://tc39.es/ecma262/#sec-string.prototype.split
	  function split(separator, limit) {
	    var O = requireObjectCoercible$2(this);
	    var splitter = isObject$3(separator) ? getMethod$2(separator, SPLIT) : undefined;
	    return splitter ? call$4(splitter, separator, O, limit) : call$4(internalSplit, toString$3(O), separator, limit);
	  },
	  // `RegExp.prototype[@@split]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (string, limit) {
	    var rx = anObject$4(this);
	    var S = toString$3(string);
	    if (!BUGGY) {
	      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;
	    }
	    var C = speciesConstructor(rx, RegExp);
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
	      var z = regExpExec$2(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
	      var e;
	      if (z === null || (e = min(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
	        q = advanceStringIndex$1(S, q, unicodeMatching);
	      } else {
	        push$1(A, stringSlice$2(S, p, q));
	        if (A.length === lim) return A;
	        for (var i = 1; i <= z.length - 1; i++) {
	          push$1(A, z[i]);
	          if (A.length === lim) return A;
	        }
	        q = p = e;
	      }
	    }
	    push$1(A, stringSlice$2(S, p));
	    return A;
	  }];
	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var uncurryThis$7 = require('../internals/function-uncurry-this');
	var fails$5 = require('../internals/fails');
	var classof$2 = require('../internals/classof-raw');
	var $Object = Object;
	var split = uncurryThis$7(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	module.exports = fails$5(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$2(it) === 'String' ? split(it, '') : $Object(it);
	} : $Object;

	var indexedObject = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

	var toIndexedObject$1;
	var hasRequiredToIndexedObject;

	function requireToIndexedObject () {
		if (hasRequiredToIndexedObject) return toIndexedObject$1;
		hasRequiredToIndexedObject = 1;

		// toObject with fallback for non-array-like ES3 strings
		var IndexedObject = require$$0$3;
		var requireObjectCoercible = requireRequireObjectCoercible();
		toIndexedObject$1 = function (it) {
		  return IndexedObject(requireObjectCoercible(it));
		};
		return toIndexedObject$1;
	}

	var DESCRIPTORS$4 = require('../internals/descriptors');
	var call$3 = require('../internals/function-call');
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
	  if (hasOwn$2(O, P)) return createPropertyDescriptor$1(!call$3(propertyIsEnumerableModule.f, O, P), O[P]);
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

		var $ = require$$0$6;
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
	var anObject$3 = require('../internals/an-object');
	var toPropertyKey = require('../internals/to-property-key');
	var $TypeError$1 = TypeError;
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
	  anObject$3(O);
	  P = toPropertyKey(P);
	  anObject$3(Attributes);
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
	  anObject$3(O);
	  P = toPropertyKey(P);
	  anObject$3(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$1('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

	var wellKnownSymbolDefine;
	var hasRequiredWellKnownSymbolDefine;

	function requireWellKnownSymbolDefine () {
		if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
		hasRequiredWellKnownSymbolDefine = 1;

		var path = requirePath();
		var hasOwn = requireHasOwnProperty();
		var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
		var defineProperty = require$$1.f;
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

	var isCallable$4 = require('../internals/is-callable');
	module.exports = function (it) {
	  return _typeof(it) == 'object' ? it !== null : isCallable$4(it);
	};

	var isObject$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(isObject$2);

	var anObject$2;
	var hasRequiredAnObject;

	function requireAnObject () {
		if (hasRequiredAnObject) return anObject$2;
		hasRequiredAnObject = 1;

		var isObject = require$$0$2;
		var $String = String;
		var $TypeError = TypeError;

		// `Assert: Type(argument) is Object`
		anObject$2 = function (argument) {
		  if (isObject(argument)) return argument;
		  throw new $TypeError($String(argument) + ' is not an object');
		};
		return anObject$2;
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

		var $ = require$$0$6;
		var toObject = requireToObject();
		var nativeKeys = require$$5$1;
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

	var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(objectKeys);

	var hasRequiredObjectDefineProperties;

	function requireObjectDefineProperties () {
		if (hasRequiredObjectDefineProperties) return objectDefineProperties;
		hasRequiredObjectDefineProperties = 1;

		var DESCRIPTORS = requireDescriptors();
		var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
		var definePropertyModule = require$$1;
		var anObject = requireAnObject();
		var toIndexedObject = requireToIndexedObject();
		var objectKeys = require$$5$1;

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

		var globalThis = require$$0$5;
		var isObject = require$$0$2;
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
		var defineProperty = require$$1.f;
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

	var globalThis$4 = require('../internals/global-this');
	var isCallable$3 = require('../internals/is-callable');
	var WeakMap = globalThis$4.WeakMap;
	module.exports = isCallable$3(WeakMap) && /native code/.test(String(WeakMap));

	var weakMapBasicDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(weakMapBasicDetection);

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
		var definePropertyModule = require$$1;
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

		var NATIVE_WEAK_MAP = require$$0$1;
		var globalThis = require$$0$5;
		var isObject = require$$0$2;
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

	var globalThis$3 = require('../internals/global-this');
	var DOMIterables = require('../internals/dom-iterables');
	var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
	var ArrayIteratorMethods = require('../modules/es.array.iterator');
	var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');
	var setToStringTag$1 = require('../internals/set-to-string-tag');
	var wellKnownSymbol$2 = require('../internals/well-known-symbol');
	var ITERATOR$1 = wellKnownSymbol$2('iterator');
	var ArrayValues = ArrayIteratorMethods.values;
	var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$1] !== ArrayValues) try {
	      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$1, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$1] = ArrayValues;
	    }
	    setToStringTag$1(CollectionPrototype, COLLECTION_NAME, true);
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
	  handlePrototype(globalThis$3[COLLECTION_NAME] && globalThis$3[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}
	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	var $$a = require('../internals/export');
	var call$2 = require('../internals/function-call');
	var IS_PURE$1 = require('../internals/is-pure');
	var FunctionName = require('../internals/function-name');
	var isCallable$2 = require('../internals/is-callable');
	var createIteratorConstructor = require('../internals/iterator-create-constructor');
	var getPrototypeOf = require('../internals/object-get-prototype-of');
	var setPrototypeOf = require('../internals/object-set-prototype-of');
	var setToStringTag = require('../internals/set-to-string-tag');
	var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
	var defineBuiltIn$1 = require('../internals/define-built-in');
	var wellKnownSymbol$1 = require('../internals/well-known-symbol');
	var Iterators = require('../internals/iterators');
	var IteratorsCore = require('../internals/iterators-core');
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol$1('iterator');
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
	  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE$1 && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable$2(CurrentIteratorPrototype[ITERATOR])) {
	          defineBuiltIn$1(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE$1) Iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (!IS_PURE$1 && CONFIGURABLE_FUNCTION_NAME$1) {
	      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() {
	        return call$2(nativeIterator, this);
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
	        defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$a({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  // define iterator
	  if ((!IS_PURE$1 || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    defineBuiltIn$1(IterablePrototype, ITERATOR, defaultIterator, {
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
		var defineProperty = require$$1.f;
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

		var $ = require$$0$6;
		var trunc = require$$0;

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

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(mathTrunc);

	var toIntegerOrInfinity;
	var hasRequiredToIntegerOrInfinity;

	function requireToIntegerOrInfinity () {
		if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
		hasRequiredToIntegerOrInfinity = 1;

		var trunc = require$$0;

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

	var require$$5 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

	var wellKnownSymbol;
	var hasRequiredWellKnownSymbol;

	function requireWellKnownSymbol () {
		if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
		hasRequiredWellKnownSymbol = 1;

		var globalThis = require$$0$5;
		var shared = requireShared();
		var hasOwn = requireHasOwnProperty();
		var uid = require$$3$3;
		var NATIVE_SYMBOL = require$$4;
		var USE_SYMBOL_AS_UID = require$$5;
		var _Symbol = globalThis.Symbol;
		var WellKnownSymbolsStore = shared('wks');
		var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol['for'] || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
		wellKnownSymbol = function (name) {
		  if (!hasOwn(WellKnownSymbolsStore, name)) {
		    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
		  }
		  return WellKnownSymbolsStore[name];
		};
		return wellKnownSymbol;
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

	var uncurryThis$6 = require('../internals/function-uncurry-this');
	var fails$4 = require('../internals/fails');
	var isCallable$1 = require('../internals/is-callable');
	var hasOwn$1 = require('../internals/has-own-property');
	var DESCRIPTORS$2 = require('../internals/descriptors');
	var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
	var inspectSource$1 = require('../internals/inspect-source');
	var InternalStateModule = require('../internals/internal-state');
	var enforceInternalState = InternalStateModule.enforce;
	var getInternalState = InternalStateModule.get;
	var $String = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$1 = Object.defineProperty;
	var stringSlice$1 = uncurryThis$6(''.slice);
	var replace = uncurryThis$6(''.replace);
	var join = uncurryThis$6([].join);
	var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$4(function () {
	  return defineProperty$1(function () {/* empty */}, 'length', {
	    value: 8
	  }).length !== 8;
	});
	var TEMPLATE = String(String).split('String');
	var makeBuiltIn = module.exports = function (value, name, options) {
	  if (stringSlice$1($String(name), 0, 7) === 'Symbol(') {
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
	  return isCallable$1(this) && getInternalState(this).source || inspectSource$1(this);
	}, 'toString');

	var makeBuiltIn$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

	var defineBuiltIn;
	var hasRequiredDefineBuiltIn;

	function requireDefineBuiltIn () {
		if (hasRequiredDefineBuiltIn) return defineBuiltIn;
		hasRequiredDefineBuiltIn = 1;

		var isCallable = require$$0$4;
		var definePropertyModule = require$$1;
		var makeBuiltIn = require$$2$3;
		var defineGlobalProperty = requireDefineGlobalProperty();
		defineBuiltIn = function (O, key, value, options) {
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
		return defineBuiltIn;
	}

	var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
	var classof$1 = require('../internals/classof');

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
	  return '[object ' + classof$1(this) + ']';
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

	var $$9 = require('../internals/export');
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
	$$9({
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

	var $$8 = require('../internals/export');
	var $trim = require('../internals/string-trim').trim;
	var forcedStringTrimMethod = require('../internals/string-trim-forced');

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$8({
	  target: 'String',
	  proto: true,
	  forced: forcedStringTrimMethod('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var $$7 = require('../internals/export');
	var $filter = require('../internals/array-iteration').filter;
	var arrayMethodHasSpeciesSupport$2 = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$7({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1
	}, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$6 = require('../internals/export');
	var uncurryThis$5 = require('../internals/function-uncurry-this-clause');
	var $indexOf = require('../internals/array-includes').indexOf;
	var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
	var nativeIndexOf = uncurryThis$5([].indexOf);
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$1('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$6({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$2
	}, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
	  }
	});

	var $$5 = require('../internals/export');
	var $map = require('../internals/array-iteration').map;
	var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$5({
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

		var classof = require$$1$1;

		// `IsArray` abstract operation
		// https://tc39.es/ecma262/#sec-isarray
		// eslint-disable-next-line es/no-array-isarray -- safe
		isArray$1 = Array.isArray || function isArray(argument) {
		  return classof(argument) === 'Array';
		};
		return isArray$1;
	}

	var uncurryThis$4 = require('../internals/function-uncurry-this');
	var fails$3 = require('../internals/fails');
	var isCallable = require('../internals/is-callable');
	var classof = require('../internals/classof');
	var getBuiltIn = require('../internals/get-built-in');
	var inspectSource = require('../internals/inspect-source');
	var noop = function noop() {/* empty */};
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$4(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  try {
	    construct(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  switch (classof(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction':
	      return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};
	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	module.exports = !construct || fails$3(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
	    called = true;
	  }) || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

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
		var definePropertyModule = require$$1;
		var createPropertyDescriptor = requireCreatePropertyDescriptor();
		createProperty = function (object, key, value) {
		  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
		};
		return createProperty;
	}

	var DESCRIPTORS$1 = require('../internals/descriptors');
	var isArray = require('../internals/is-array');
	var $TypeError = TypeError;
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
	    throw new $TypeError('Cannot set read only .length');
	  }
	  return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var arraySetLength = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$8 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

	var call$1 = require('../internals/function-call');
	var uncurryThis$3 = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$1 = require('../internals/an-object');
	var isObject$1 = require('../internals/is-object');
	var toLength = require('../internals/to-length');
	var toString$2 = require('../internals/to-string');
	var requireObjectCoercible$1 = require('../internals/require-object-coercible');
	var getMethod$1 = require('../internals/get-method');
	var advanceStringIndex = require('../internals/advance-string-index');
	var getRegExpFlags = require('../internals/regexp-get-flags');
	var regExpExec$1 = require('../internals/regexp-exec-abstract');
	var stringIndexOf = uncurryThis$3(''.indexOf);

	// @@match logic
	fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	  // `String.prototype.match` method
	  // https://tc39.es/ecma262/#sec-string.prototype.match
	  function match(regexp) {
	    var O = requireObjectCoercible$1(this);
	    var matcher = isObject$1(regexp) ? getMethod$1(regexp, MATCH) : undefined;
	    return matcher ? call$1(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
	  },
	  // `RegExp.prototype[@@match]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	  function (string) {
	    var rx = anObject$1(this);
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

	var globalThis$2 = require('../internals/global-this');
	var userAgent = require('../internals/environment-user-agent');
	var process = globalThis$2.process;
	var Deno = globalThis$2.Deno;
	var versions = process && process.versions || Deno && Deno.version;
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
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}
	module.exports = version;

	var environmentV8Version = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(environmentV8Version);

	var arrayMethodHasSpeciesSupport;
	var hasRequiredArrayMethodHasSpeciesSupport;

	function requireArrayMethodHasSpeciesSupport () {
		if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport;
		hasRequiredArrayMethodHasSpeciesSupport = 1;

		var fails = requireFails();
		var wellKnownSymbol = requireWellKnownSymbol();
		var V8_VERSION = require$$2;
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

	var uncurryThis$2 = require('../internals/function-uncurry-this');
	module.exports = uncurryThis$2([].slice);

	var arraySlice = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$11 = /*@__PURE__*/getAugmentedNamespace(arraySlice);

	var hasRequiredEs_array_slice;

	function requireEs_array_slice () {
		if (hasRequiredEs_array_slice) return es_array_slice;
		hasRequiredEs_array_slice = 1;

		var $ = require$$0$6;
		var isArray = requireIsArray();
		var isConstructor = require$$2$1;
		var isObject = require$$0$2;
		var toAbsoluteIndex = requireToAbsoluteIndex();
		var lengthOfArrayLike = requireLengthOfArrayLike();
		var toIndexedObject = requireToIndexedObject();
		var createProperty = requireCreateProperty();
		var setArrayLength = require$$8;
		var wellKnownSymbol = requireWellKnownSymbol();
		var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
		var nativeSlice = require$$11;
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

	var call = require('../internals/function-call');
	var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject = require('../internals/an-object');
	var isObject = require('../internals/is-object');
	var requireObjectCoercible = require('../internals/require-object-coercible');
	var sameValue = require('../internals/same-value');
	var toString$1 = require('../internals/to-string');
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
	    return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$1(O));
	  },
	  // `RegExp.prototype[@@search]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	  function (string) {
	    var rx = anObject(this);
	    var S = toString$1(string);
	    var res = maybeCallNative(nativeSearch, rx, S);
	    if (res.done) return res.value;
	    var previousLastIndex = rx.lastIndex;
	    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	    var result = regExpExec(rx, S);
	    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	    return result === null ? -1 : result.index;
	  }];
	});

	var $$4 = require('../internals/export');
	var uncurryThis$1 = require('../internals/function-uncurry-this');
	var aCallable = require('../internals/a-callable');
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
	var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
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
	  forced: FORCED$1
	}, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable(comparefn);
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

	var $$3 = require('../internals/export');
	var IS_PURE = require('../internals/is-pure');
	var DESCRIPTORS = require('../internals/descriptors');
	var globalThis$1 = require('../internals/global-this');
	var path = require('../internals/path');
	var uncurryThis = require('../internals/function-uncurry-this');
	var isForced = require('../internals/is-forced');
	var hasOwn = require('../internals/has-own-property');
	var inheritIfRequired = require('../internals/inherit-if-required');
	var isPrototypeOf = require('../internals/object-is-prototype-of');
	var isSymbol = require('../internals/is-symbol');
	var toPrimitive = require('../internals/to-primitive');
	var fails$1 = require('../internals/fails');
	var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
	var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
	var defineProperty = require('../internals/object-define-property').f;
	var thisNumberValue = require('../internals/this-number-value');
	var trim = require('../internals/string-trim').trim;
	var NUMBER = 'Number';
	var NativeNumber = globalThis$1[NUMBER];
	var PureNumberNamespace = path[NUMBER];
	var NumberPrototype = NativeNumber.prototype;
	var TypeError$1 = globalThis$1.TypeError;
	var stringSlice = uncurryThis(''.slice);
	var charCodeAt = uncurryThis(''.charCodeAt);

	// `ToNumeric` abstract operation
	// https://tc39.es/ecma262/#sec-tonumeric
	var toNumeric = function toNumeric(value) {
	  var primValue = toPrimitive(value, 'number');
	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
	};

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive(argument, 'number');
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (isSymbol(it)) throw new TypeError$1('Cannot convert a Symbol value to a number');
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = charCodeAt(it, 0);
	    if (first === 43 || first === 45) {
	      third = charCodeAt(it, 2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (charCodeAt(it, 1)) {
	        // fast equal of /^0b[01]+$/i
	        case 66:
	        case 98:
	          radix = 2;
	          maxCode = 49;
	          break;
	        // fast equal of /^0o[0-7]+$/i
	        case 79:
	        case 111:
	          radix = 8;
	          maxCode = 55;
	          break;
	        default:
	          return +it;
	      }
	      digits = stringSlice(it, 2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = charCodeAt(digits, index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }
	      return parseInt(digits, radix);
	    }
	  }
	  return +it;
	};
	var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));
	var calledWithNew = function calledWithNew(dummy) {
	  // includes check on 1..constructor(foo) case
	  return isPrototypeOf(NumberPrototype, dummy) && fails$1(function () {
	    thisNumberValue(dummy);
	  });
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	var NumberWrapper = function Number(value) {
	  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
	  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
	};
	NumberWrapper.prototype = NumberPrototype;
	if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;
	$$3({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: FORCED
	}, {
	  Number: NumberWrapper
	});

	// Use `internal/copy-constructor-properties` helper in `core-js@4`
	var copyConstructorProperties = function copyConstructorProperties(target, source) {
	  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
	    // ESNext
	    'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
	    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};
	if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
	if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);

	var $$2 = require('../internals/export');
	var assign = require('../internals/object-assign');

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$2({
	  target: 'Object',
	  stat: true,
	  arity: 2,
	  forced: Object.assign !== assign
	}, {
	  assign: assign
	});

	function normalizeErrorCode(json) {
	  return json && (json.error_code || json.meta && json.meta.code) || '';
	}
	function extractErrorText(json) {
	  return json && (json.error || json.message || json.error_code) || '';
	}
	var DISABLED_SOURCE_CODES = {
	  NOT_FOUND: true,
	  CONTENT_REMOVED: true,
	  UNAUTHORIZED: true,
	  INVALID_AUTH: true,
	  MISSING_IMDB_OR_TMDB: true,
	  INVALID_TMDB_ID: true,
	  INVALID_SERIAL: true,
	  NO_PLAYER_DATA: true,
	  NO_STREAM_DATA: true,
	  NO_STREAMS: true,
	  NO_STREAM: true,
	  NO_MOVIE_STREAM: true,
	  NO_MOVIE_STREAMS: true,
	  NO_EPISODES: true,
	  NO_VOICES: true,
	  NO_SERIAL_STRUCTURE: true,
	  NO_ANIME_INFO: true,
	  NO_ANIME_STRUCTURE: true,
	  VOICE_NOT_FOUND: true
	};

	function createV2(sourceKey) {
	  return function v2(component, _object) {
	    var api_client = component.api_client;
	    var object = _object;
	    var selected = null;
	    var series = null;
	    var episodes_cache = {};
	    var stream_cache = {};
	    var content_ref = null;
	    var lazy_state = createLazyState();
	    var filter_items = {
	      season: [],
	      voice: []
	    };
	    var choice = {
	      season: 0,
	      voice: 0,
	      voice_name: ''
	    };
	    this.searchByTitle = function (_object, title) {
	      object = _object;
	      search({
	        title: title
	      });
	    };
	    this.searchByImdbID = function (_object, imdb_id) {
	      object = _object;
	      search({
	        imdb_id: imdb_id
	      });
	    };
	    this.searchByKinopoisk = function (_object, kinopoisk_id) {
	      object = _object;
	      search({
	        kinopoisk_id: kinopoisk_id
	      });
	    };
	    this.searchByMalId = function (_object, mal_id) {
	      object = _object;
	      search({
	        mal_id: mal_id
	      });
	    };
	    this.search = function (_object, data) {
	      object = _object;
	      if (!data || !data.length) return component.doesNotAnswer();
	      var first = data[0] || {};
	      if (first.ref) {
	        selected = first;
	        loadContent(first.ref);
	        return;
	      }
	      search({
	        title: first.title || first.name || object.movie.title || object.movie.name,
	        original_title: first.orig_title || first.original_title || first.nameEn || object.movie.original_title || object.movie.original_name,
	        imdb_id: first.imdb_id,
	        tmdb_id: first.tmdb_id,
	        kinopoisk_id: first.kp_id || first.kinopoisk_id || first.filmId,
	        mal_id: first.mal_id || first.malId || object.movie.mal_id,
	        year: getYear(object.movie || {}),
	        serial: typeof first.serial != 'undefined' ? first.serial : getSerial(object.movie || {})
	      });
	    };
	    this.extendChoice = function (saved) {
	      Lampa.Arrays.extend(choice, saved, true);
	    };
	    this.reset = function () {
	      component.reset();
	      choice = {
	        season: 0,
	        voice: 0,
	        voice_name: ''
	      };
	      filter();
	      buildEpisodes();
	    };
	    this.filter = function (type, a, b) {
	      choice[a.stype] = b.index;
	      if (a.stype == 'voice' && filter_items.voice[b.index]) {
	        choice.voice_name = filter_items.voice[b.index];
	      }
	      component.reset();
	      filter();
	      buildEpisodes();
	    };
	    this.cancel = function () {
	      api_client.clear();
	    };
	    this.destroy = function () {
	      api_client.clear();
	      selected = null;
	      series = null;
	      episodes_cache = {};
	      content_ref = null;
	      lazy_state = createLazyState();
	    };
	    function handleSourceError(json) {
	      var code = normalizeErrorCode(json);
	      var text = extractErrorText(json) || code;
	      if (code && DISABLED_SOURCE_CODES[code]) {
	        component.disableSource(sourceKey, code);
	        component.empty();
	        return;
	      }
	      if (text) component.pushError(text);
	      component.empty();
	    }
	    function handleStreamError(json) {
	      var code = normalizeErrorCode(json);
	      var text = extractErrorText(json);
	      if (code && DISABLED_SOURCE_CODES[code]) {
	        component.disableSource(sourceKey, code);
	      }
	      if (text) component.pushError(text);
	    }
	    function getYear(movie) {
	      var date = movie.release_date || movie.first_air_date || movie.year || movie.start_date;
	      return date ? (date + '').slice(0, 4) : '';
	    }
	    function getTmdbId(movie) {
	      if (!movie) return '';
	      if (movie.tmdb_id) return movie.tmdb_id;
	      if (typeof movie.id == 'number' || typeof movie.id == 'string' && /^\d+$/.test(movie.id)) return movie.id;
	      return '';
	    }
	    function getSerial(movie) {
	      if (!movie) return '';
	      return movie.name ? 1 : 0;
	    }
	    function normalizeVoiceName(voice) {
	      return voice.display_name || voice.displayName || voice.name || voice.id || '';
	    }
	    function getSeasonNumber(value, fallback) {
	      if (typeof value == 'number') return value;
	      var match = String(value || '').match(/(\d+)/);
	      if (match) {
	        var parsed = parseInt(match[1], 10);
	        if (!isNaN(parsed)) return parsed;
	      }
	      return fallback;
	    }
	    function createLazyState() {
	      return {
	        enabled: false,
	        season_numbers: [],
	        loaded: {},
	        pending: {}
	      };
	    }
	    function isSeriesObject() {
	      return !!(object && object.movie && object.movie.name);
	    }
	    function isLazySeriesMode() {
	      return (sourceKey == 'uaflix' || sourceKey == 'aycw') && isSeriesObject();
	    }
	    function toPositiveInt(value) {
	      var parsed = parseInt(value, 10);
	      return isNaN(parsed) || parsed < 1 ? 0 : parsed;
	    }
	    function cloneRef(ref) {
	      var next = {};
	      if (ref && _typeof(ref) == 'object') Lampa.Arrays.extend(next, ref, true);
	      return next;
	    }
	    function sortSeasonNumbers(values) {
	      var map = {};
	      (values || []).forEach(function (value) {
	        var number = toPositiveInt(value);
	        if (number) map[number] = true;
	      });
	      return Object.keys(map).map(function (value) {
	        return parseInt(value, 10);
	      }).sort(function (a, b) {
	        return a - b;
	      });
	    }
	    function getRefSeasonNumber(ref) {
	      return toPositiveInt(ref && ref.season);
	    }
	    function getTmdbSeasonNumbers() {
	      var count = toPositiveInt(object && object.movie && object.movie.number_of_seasons);
	      var seasons = [];
	      for (var i = 1; i <= count; i++) {
	        seasons.push(i);
	      }
	      return seasons;
	    }
	    function collectVoiceSeasonNumbers(voice) {
	      var seasons = getVoiceSeasons(voice);
	      return sortSeasonNumbers(seasons.map(function (season, index) {
	        return getSeasonNumber(season.title || season.season || season.number, index + 1);
	      }));
	    }
	    function collectSeriesSeasonNumbers() {
	      if (!series || !Array.isArray(series.voices)) return [];
	      var seasons = [];
	      series.voices.forEach(function (voice) {
	        seasons = seasons.concat(collectVoiceSeasonNumbers(voice));
	      });
	      return sortSeasonNumbers(seasons);
	    }
	    function ensureLazySeasonNumbers(values) {
	      lazy_state.season_numbers = sortSeasonNumbers((lazy_state.season_numbers || []).concat(values || []));
	    }
	    function markLazySeasonLoaded(values) {
	      (values || []).forEach(function (value) {
	        var number = toPositiveInt(value);
	        if (number) lazy_state.loaded[number] = true;
	      });
	    }
	    function getSeasonNumbersForFilter(voice) {
	      if (lazy_state.enabled && lazy_state.season_numbers.length) return lazy_state.season_numbers.slice(0);
	      return collectVoiceSeasonNumbers(voice);
	    }
	    function getSeasonData(voice, season_number) {
	      var seasons = getVoiceSeasons(voice);
	      for (var i = 0; i < seasons.length; i++) {
	        var season = seasons[i];
	        var number = getSeasonNumber(season.title || season.season || season.number, i + 1);
	        if (number == season_number) return season;
	      }
	      return null;
	    }
	    function getSeasonEpisodes(voice, season_number) {
	      var season = getSeasonData(voice, season_number);
	      if (!season) return [];
	      return Array.isArray(season.episodes) ? season.episodes : [];
	    }
	    function findVoiceWithSeasonEpisodes(season_number) {
	      if (!series || !Array.isArray(series.voices)) return -1;
	      for (var i = 0; i < series.voices.length; i++) {
	        if (getSeasonEpisodes(series.voices[i], season_number).length) return i;
	      }
	      return -1;
	    }
	    function mergeSeriesSeasonData(next_series) {
	      if (!next_series || !Array.isArray(next_series.voices)) return;
	      if (!series || !Array.isArray(series.voices)) {
	        series = next_series;
	        return;
	      }
	      next_series.voices.forEach(function (next_voice) {
	        if (!next_voice) return;
	        var voice = series.voices.find(function (item) {
	          return item.id == next_voice.id;
	        });
	        if (!voice) {
	          series.voices.push(next_voice);
	          return;
	        }
	        if (next_voice.display_name) voice.display_name = next_voice.display_name;
	        var by_number = {};
	        getVoiceSeasons(voice).forEach(function (season, index) {
	          var number = getSeasonNumber(season.title || season.season || season.number, index + 1);
	          if (number) by_number[number] = season;
	        });
	        getVoiceSeasons(next_voice).forEach(function (season, index) {
	          var number = getSeasonNumber(season.title || season.season || season.number, index + 1);
	          if (number) by_number[number] = season;
	        });
	        voice.seasons = Object.keys(by_number).map(function (value) {
	          return parseInt(value, 10);
	        }).sort(function (a, b) {
	          return a - b;
	        }).map(function (number) {
	          return by_number[number];
	        });
	      });
	    }
	    function buildInitialLazySeasonNumbers(ref) {
	      var seasons = getTmdbSeasonNumbers();
	      var ref_season = getRefSeasonNumber(ref);
	      if (ref_season) seasons.push(ref_season);
	      return sortSeasonNumbers(seasons);
	    }
	    function initializeLazyState(ref) {
	      lazy_state = createLazyState();
	      if (!isLazySeriesMode()) return;
	      lazy_state.enabled = true;
	      var loaded_seasons = collectSeriesSeasonNumbers();
	      var initial_seasons = buildInitialLazySeasonNumbers(ref);
	      ensureLazySeasonNumbers(initial_seasons);
	      ensureLazySeasonNumbers(loaded_seasons);
	      markLazySeasonLoaded(loaded_seasons);
	      if (!lazy_state.season_numbers.length) {
	        var fallback = getRefSeasonNumber(ref);
	        if (fallback) ensureLazySeasonNumbers([fallback]);
	      }
	    }
	    function loadLazySeason(season_number, done, fail) {
	      if (!lazy_state.enabled || !season_number || !content_ref) {
	        if (fail) fail();
	        return;
	      }
	      if (lazy_state.loaded[season_number]) {
	        if (done) done();
	        return;
	      }
	      if (lazy_state.pending[season_number]) return;
	      lazy_state.pending[season_number] = true;
	      component.loading(true);
	      var ref = cloneRef(content_ref);
	      ref.season = season_number;
	      api_client.getContent(sourceKey, ref, function (json) {
	        delete lazy_state.pending[season_number];
	        if (!json || !json.ok || json.type != 'series') {
	          component.loading(false);
	          handleSourceError(json);
	          if (fail) fail(extractErrorText(json));
	          return;
	        }
	        var next_series = normalizeSeries(json);
	        mergeSeriesSeasonData(next_series);
	        var loaded_seasons = collectSeriesSeasonNumbers();
	        markLazySeasonLoaded(loaded_seasons);
	        markLazySeasonLoaded([season_number]);
	        ensureLazySeasonNumbers(loaded_seasons);
	        ensureLazySeasonNumbers([season_number]);
	        if (done) done();
	      }, function () {
	        delete lazy_state.pending[season_number];
	        component.loading(false);
	        if (fail) fail();
	      });
	    }
	    function normalizeEpisodeTitle(episode, number) {
	      return episode.title || episode.name || Lampa.Lang.translate('torrent_serial_episode') + ' ' + number;
	    }
	    function search(params) {
	      params = params || {};
	      var movie = object && object.movie || object || {};
	      if (!params.title) params.title = movie.title || movie.name || '';
	      if (!params.original_title) params.original_title = movie.original_title || movie.original_name || '';
	      if (!params.year) params.year = getYear(movie);
	      if (!params.imdb_id) params.imdb_id = movie.imdb_id || '';
	      if (!params.tmdb_id) params.tmdb_id = getTmdbId(movie);
	      if (!params.kinopoisk_id) params.kinopoisk_id = movie.kinopoisk_id || '';
	      if (!params.mal_id) params.mal_id = movie.mal_id || '';
	      if (typeof params.serial == 'undefined') params.serial = getSerial(movie);
	      component.loading(true);
	      api_client.search(params || {}, sourceKey, function (json) {
	        if (!json || !json.ok) {
	          handleSourceError(json);
	          return;
	        }
	        if (json.meta && json.meta.code == 'NO_RESULTS') {
	          component.empty();
	          return;
	        }
	        var items = json.items || [];
	        if (!items.length) {
	          component.empty();
	          return;
	        }
	        var aggregated_moonanime = sourceKey == 'moonanime' ? items.find(function (item) {
	          return item && item.ref && Array.isArray(item.ref.seasons) && item.ref.seasons.length;
	        }) : null;
	        if (aggregated_moonanime && !object.clarification) {
	          selected = aggregated_moonanime;
	          loadContent(aggregated_moonanime.ref);
	          return;
	        }
	        if (items.length > 1 && !object.clarification) {
	          component.similars(items.map(function (item) {
	            return {
	              id: item.ref && (item.ref.id || item.ref.href || item.ref.url || item.ref.play) || item.title,
	              title: item.title || item.name,
	              orig_title: item.title_en || item.original_title,
	              year: item.year,
	              imdb_id: item.imdb_id,
	              tmdb_id: item.tmdb_id,
	              kinopoisk_id: item.kinopoisk_id,
	              mal_id: item.mal_id,
	              serial: item.serial,
	              source: item.source || sourceKey,
	              poster: sourceKey == 'uaflix' ? item.poster : '',
	              ref: item.ref
	            };
	          }));
	          component.loading(false);
	          return;
	        }
	        selected = items[0];
	        loadContent(selected.ref);
	      }, function () {
	        component.doesNotAnswer();
	      });
	    }
	    function loadContent(ref) {
	      var request_ref = cloneRef(ref);
	      content_ref = cloneRef(ref);
	      if (sourceKey == 'aycw' && typeof request_ref.season !== 'undefined') {
	        request_ref.season = Number(request_ref.season);
	      }
	      if (isLazySeriesMode()) {
	        delete content_ref.season;
	        var season_numbers = buildInitialLazySeasonNumbers(ref);
	        var ref_season = getRefSeasonNumber(ref);
	        var season_number = ref_season;
	        if (!season_number) {
	          if (choice.season >= season_numbers.length) choice.season = 0;
	          season_number = season_numbers[choice.season] || season_numbers[0] || 1;
	        } else {
	          var index = season_numbers.indexOf(ref_season);
	          if (index !== -1) choice.season = index;
	        }
	        request_ref = cloneRef(content_ref);
	        request_ref.season = season_number;
	      }
	      api_client.getContent(sourceKey, request_ref, function (json) {
	        if (!json || !json.ok) {
	          handleSourceError(json);
	          return;
	        }
	        if (json.type == 'series') {
	          series = normalizeSeries(json);
	          initializeLazyState(ref);
	          filter();
	          buildEpisodes();
	        } else {
	          lazy_state = createLazyState();
	          drawMovie(json);
	        }
	      }, function () {
	        component.doesNotAnswer();
	      });
	    }
	    function normalizeSeries(json) {
	      var voices = Array.isArray(json.voices) ? json.voices : [];
	      voices = voices.map(function (voice, index) {
	        var seasons = Array.isArray(voice.seasons) ? voice.seasons : [];
	        return {
	          id: voice.id || voice.voice_id || index,
	          display_name: normalizeVoiceName(voice) || 'Voice ' + (index + 1),
	          seasons: seasons
	        };
	      });
	      return {
	        voices: voices
	      };
	    }
	    function getCurrentVoice() {
	      if (!series || !series.voices || !series.voices.length) return null;
	      return series.voices[choice.voice] || series.voices[0];
	    }
	    function getVoiceSeasons(voice) {
	      if (!voice || !Array.isArray(voice.seasons)) return [];
	      return voice.seasons;
	    }
	    function filter() {
	      filter_items = {
	        season: [],
	        voice: []
	      };
	      if (series && series.voices && series.voices.length) {
	        filter_items.voice = series.voices.map(function (voice) {
	          return voice.display_name || voice.id;
	        });
	      }
	      if (choice.voice >= filter_items.voice.length) choice.voice = 0;
	      var voice = getCurrentVoice();
	      var season_numbers = getSeasonNumbersForFilter(voice);
	      filter_items.season = season_numbers.map(function (season_num) {
	        return Lampa.Lang.translate('torrent_serial_season') + ' ' + season_num;
	      });
	      if (choice.season >= filter_items.season.length) choice.season = 0;
	      if (voice) choice.voice_name = voice.display_name || voice.id;else if (filter_items.voice[choice.voice]) choice.voice_name = filter_items.voice[choice.voice];
	      component.filter(filter_items, choice);
	    }
	    function buildEpisodes() {
	      if (!series || !series.voices || !series.voices.length) {
	        component.loading(false);
	        return component.doesNotAnswer();
	      }
	      var voice = getCurrentVoice();
	      if (!voice) {
	        component.loading(false);
	        return component.doesNotAnswer();
	      }
	      var season_numbers = getSeasonNumbersForFilter(voice);
	      if (!season_numbers.length) {
	        component.loading(false);
	        return component.doesNotAnswer();
	      }
	      var season_index = choice.season;
	      if (season_index >= season_numbers.length) season_index = 0;
	      choice.season = season_index;
	      var season_num = season_numbers[season_index];
	      var cache_key = voice.id + ':' + season_num;
	      choice.voice_name = voice.display_name || voice.id;
	      if (episodes_cache[cache_key]) {
	        renderEpisodes(episodes_cache[cache_key], season_num, voice);
	        return;
	      }
	      var episodes = getSeasonEpisodes(voice, season_num);
	      if (!episodes.length && lazy_state.enabled) {
	        if (!lazy_state.loaded[season_num]) {
	          loadLazySeason(season_num, function () {
	            filter();
	            buildEpisodes();
	          }, function () {
	            component.doesNotAnswer();
	          });
	          return;
	        }
	        var voice_index = findVoiceWithSeasonEpisodes(season_num);
	        if (voice_index !== -1 && voice_index !== choice.voice) {
	          choice.voice = voice_index;
	          filter();
	          buildEpisodes();
	          return;
	        }
	      }
	      if (!episodes.length) {
	        component.loading(false);
	        return component.doesNotAnswer();
	      }
	      episodes_cache[cache_key] = episodes;
	      renderEpisodes(episodes, season_num, voice);
	    }
	    function renderEpisodes(episodes, season, voice) {
	      var items = episodes.map(function (episode, index) {
	        var number = episode.number || episode.episode || index + 1;
	        return {
	          title: normalizeEpisodeTitle(episode, number),
	          season: season,
	          episode: number,
	          ref: episode.ref,
	          info: voice.display_name || voice.id,
	          voice_name: voice.display_name || voice.id,
	          voice_id: voice.id,
	          subtitles: mergeSubtitles(episode.subtitles, episode.ref && episode.ref.subtitles)
	        };
	      });
	      component.draw(items, {
	        onEnter: function onEnter(item) {
	          getStream(item.ref, function (streams) {
	            var prepared = prepareStreams(streams);
	            var first = prepared.first;
	            var qualitys = applyProxyToQualitys(prepared.qualitys);
	            var play_url = first ? normalizeStreamUrl(first.url) : '';
	            if (!first || !play_url) {
	              component.pushError(Lampa.Lang.translate('online_nolink'));
	              return;
	            }
	            Lampa.Player.play({
	              url: play_url,
	              timeline: item.timeline,
	              quality: qualitys,
	              title: item.title,
	              subtitles: mergeSubtitles(first.subtitles, item.subtitles)
	            });
	            var playlist = [];
	            items.forEach(function (elem) {
	              var cell = {
	                url: function url(call) {
	                  getStream(elem.ref, function (next_streams) {
	                    var prepared_next = prepareStreams(next_streams);
	                    var next_first = prepared_next.first;
	                    cell.url = next_first ? normalizeStreamUrl(next_first.url) : '';
	                    cell.quality = applyProxyToQualitys(prepared_next.qualitys);
	                    cell.subtitles = mergeSubtitles(next_first && next_first.subtitles, elem.subtitles);
	                    elem.mark();
	                    call();
	                  }, function () {
	                    cell.url = '';
	                    call();
	                  });
	                },
	                title: elem.title,
	                timeline: elem.timeline,
	                quality: {},
	                subtitles: elem.subtitles || [],
	                mark: elem.mark
	              };
	              if (elem === item) {
	                cell.url = play_url;
	                cell.quality = qualitys;
	              }
	              playlist.push(cell);
	            });
	            Lampa.Player.playlist(playlist);
	          }, function (errorText) {
	            component.pushError(errorText || Lampa.Lang.translate('online_nolink'));
	          });
	        },
	        onContextMenu: function onContextMenu(item, html, data, call) {
	          getStream(item.ref, function (streams) {
	            var prepared = prepareStreams(streams);
	            var first = prepared.first;
	            var qualitys = applyProxyToQualitys(prepared.qualitys);
	            var play_url = first ? normalizeStreamUrl(first.url) : '';
	            if (!first || !play_url) {
	              component.pushError(Lampa.Lang.translate('online_nolink'));
	              return;
	            }
	            call({
	              file: play_url,
	              quality: qualitys
	            });
	          }, function (errorText) {
	            component.pushError(errorText || Lampa.Lang.translate('online_nolink'));
	          });
	        }
	      });
	      component.loading(false);
	    }
	    function drawMovie(json) {
	      var items = buildMovieItems(json);
	      component.draw(items, {
	        onEnter: function onEnter(movie) {
	          getMovieStream(movie, function (prepared) {
	            var first = prepared.first;
	            var qualitys = applyProxyToQualitys(prepared.qualitys);
	            var play_url = first ? normalizeStreamUrl(first.url) : '';
	            if (!first || !play_url) {
	              component.pushError(Lampa.Lang.translate('online_nolink'));
	              return;
	            }
	            Lampa.Player.play({
	              url: play_url,
	              timeline: movie.timeline,
	              quality: qualitys,
	              title: movie.player_title || movie.title,
	              subtitles: mergeSubtitles(first.subtitles, movie.subtitles)
	            });
	            Lampa.Player.playlist([]);
	          }, function (errorText) {
	            component.pushError(errorText || Lampa.Lang.translate('online_nolink'));
	          });
	        },
	        onContextMenu: function onContextMenu(movie, html, data, call) {
	          getMovieStream(movie, function (prepared) {
	            var first = prepared.first;
	            var qualitys = applyProxyToQualitys(prepared.qualitys);
	            var play_url = first ? normalizeStreamUrl(first.url) : '';
	            if (!first || !play_url) {
	              component.pushError(Lampa.Lang.translate('online_nolink'));
	              return;
	            }
	            call({
	              file: play_url,
	              quality: qualitys
	            });
	          }, function (errorText) {
	            component.pushError(errorText || Lampa.Lang.translate('online_nolink'));
	          });
	        }
	      });
	      component.loading(false);
	    }
	    function getMovieTitle() {
	      return object.movie.title || object.movie.name || '';
	    }
	    function getMovieStreamLabel(stream, index) {
	      return stream.title || stream.quality || 'stream-' + (index + 1);
	    }
	    function normalizeMovieStreamTitle(stream, index) {
	      var label = getMovieStreamLabel(stream, index);
	      var title = String(stream && stream.title || '').trim();
	      if (title) {
	        var cleaned = title.replace(/^\[[^\]]+\]\s*/, '').trim();
	        if (cleaned) return cleaned;
	      }
	      return label;
	    }
	    function normalizeMovieStreamQuality(stream) {
	      return stream && stream.quality || '';
	    }
	    function buildMovieItems(json) {
	      var streams = Array.isArray(json.streams) ? json.streams : [];
	      var movie_title = getMovieTitle();
	      var items = streams.map(function (stream, index) {
	        if (!stream || !stream.url && !stream.ref) return null;
	        var label = getMovieStreamLabel(stream, index);
	        var stream_title = normalizeMovieStreamTitle(stream, index);
	        var stream_quality = normalizeMovieStreamQuality(stream);
	        return {
	          title: stream_title,
	          info: '',
	          quality: stream_quality,
	          voice_name: label,
	          file: '',
	          stream: stream,
	          streams: streams,
	          player_title: movie_title,
	          stream_ref: json.stream_ref || null,
	          subtitles: mergeSubtitles(stream.subtitles, json.subtitles)
	        };
	      }).filter(Boolean);
	      if (items.length) return items;
	      var voices = Array.isArray(json.voices) ? json.voices : [];
	      var voice_items = voices.map(function (voice, index) {
	        if (!voice) return null;
	        var label = normalizeVoiceName(voice) || 'Voice ' + (index + 1);
	        var voice_stream_ref = voice.stream_ref || voice.ref || null;
	        var voice_streams = Array.isArray(voice.streams) ? voice.streams.filter(function (stream) {
	          return stream && (stream.url || stream.ref);
	        }) : [];
	        if (!voice_stream_ref && !voice_streams.length) return null;
	        return {
	          title: label,
	          info: '',
	          quality: '',
	          voice_name: label,
	          file: '',
	          streams: voice_streams,
	          player_title: movie_title + (label ? ' / ' + label : ''),
	          stream_ref: voice_stream_ref,
	          subtitles: mergeSubtitles(voice.subtitles, json.subtitles)
	        };
	      }).filter(Boolean);
	      if (voice_items.length) return voice_items;
	      return [{
	        title: movie_title,
	        info: '',
	        quality: '',
	        voice_name: '',
	        file: '',
	        streams: streams,
	        player_title: movie_title,
	        stream_ref: json.stream_ref || null,
	        subtitles: normalizeSubtitles(json.subtitles)
	      }];
	    }
	    function parsePackedStreamUrl(value) {
	      var text = (value || '').toString().trim();
	      if (!text) return [];
	      if (text.indexOf('[') === -1 || text.indexOf(']') === -1) return [];
	      var items = [];
	      text.split(',').forEach(function (part) {
	        var match = part.match(/^\s*\[([^\]]+)\]\s*(.+)\s*$/);
	        if (!match) return;
	        var quality = (match[1] || '').toString().trim();
	        var url = (match[2] || '').toString().trim();
	        if (!url) return;
	        items.push({
	          title: quality || 'auto',
	          quality: quality || 'auto',
	          url: url
	        });
	      });
	      return items;
	    }
	    function normalizeSubtitles(subtitles) {
	      if (!Array.isArray(subtitles)) return [];
	      var index = -1;
	      return subtitles.map(function (subtitle) {
	        if (!subtitle || !subtitle.url) return null;
	        index++;
	        return {
	          index: typeof subtitle.index != 'undefined' ? subtitle.index : index,
	          label: subtitle.label || subtitle.lang || subtitle.language || Lampa.Lang.translate('player_subs') + ' ' + (index + 1),
	          language: subtitle.language || subtitle.lang || subtitle.label || '',
	          url: subtitle.url
	        };
	      }).filter(Boolean);
	    }
	    function mergeSubtitles(primary, fallback) {
	      var normalized_primary = normalizeSubtitles(primary);
	      if (normalized_primary.length) return normalized_primary;
	      return normalizeSubtitles(fallback);
	    }
	    function prepareStreams(streams) {
	      var qualitys = {};
	      var first = null;
	      if (Array.isArray(streams)) {
	        streams.forEach(function (stream, index) {
	          var variants = [];
	          if (stream && stream.url) {
	            var packed = parsePackedStreamUrl(stream.url);
	            if (packed.length) {
	              variants = packed.map(function (item) {
	                var next = {};
	                Lampa.Arrays.extend(next, stream, true);
	                next.title = item.title || stream.title || stream.quality;
	                next.quality = item.quality || stream.quality;
	                next.url = item.url;
	                return next;
	              });
	            }
	          }
	          if (!variants.length) variants = [stream];
	          variants.forEach(function (variant, variant_index) {
	            if (variant && variant.subtitles) {
	              variant.subtitles = normalizeSubtitles(variant.subtitles);
	            }
	            var label = variant.title || variant.quality || 'stream-' + (index + 1) + '-' + (variant_index + 1);
	            var url = normalizeStreamUrl(variant && variant.url);
	            if (url) qualitys[label] = url;
	            if (!first && url) first = Object.assign({}, variant, {
	              url: url
	            });
	          });
	        });
	      }
	      return {
	        first: first,
	        qualitys: qualitys
	      };
	    }
	    function normalizeStreamUrl(url) {
	      if (!url) return url;
	      if (!shouldUseStreamProxy(url)) return url;
	      return wrapStreamProxy(url);
	    }
	    function applyProxyToQualitys(qualitys) {
	      var result = {};
	      Object.keys(qualitys || {}).forEach(function (key) {
	        result[key] = normalizeStreamUrl(qualitys[key]);
	      });
	      return result;
	    }
	    function shouldUseStreamProxy(url) {
	      var player = Lampa.Storage.get('player');
	      if (player && player !== 'inner') return false;
	      return isAshdiUrl(url) || isZetvideoUrl(url);
	    }
	    function isAshdiUrl(url) {
	      return /(^|\/\/)([^\/]*\.)?ashdi\.vip(\/|$)/i.test(url || '');
	    }
	    function isZetvideoUrl(url) {
	      return /(^|\/\/)([^\/]*\.)?zetvideo\.[^\/]+(\/|$)/i.test(url || '');
	    }
	    function wrapStreamProxy(url) {
	      var base = 'https://proxy.m7-club.com/?url=';
	      if (url.indexOf(base) === 0) return url;
	      return base + url;
	    }
	    function getStream(ref, success, fail) {
	      var cache_key = Lampa.Utils.hash(JSON.stringify(ref));
	      if (stream_cache[cache_key]) {
	        return success(stream_cache[cache_key]);
	      }
	      if (!ref) {
	        if (fail) fail();
	        return;
	      }
	      api_client.getStream(sourceKey, ref, function (json) {
	        if (!json || !json.ok || !Array.isArray(json.streams)) {
	          handleStreamError(json);
	          if (fail) fail(extractErrorText(json));
	          return;
	        }
	        var stream_subtitles = normalizeSubtitles(json.subtitles);
	        var streams = json.streams.map(function (stream) {
	          if (!stream || stream.subtitles || !stream_subtitles.length) return stream;
	          var next = {};
	          Lampa.Arrays.extend(next, stream, true);
	          next.subtitles = stream_subtitles;
	          return next;
	        });
	        stream_cache[cache_key] = streams;
	        success(streams);
	      }, function () {
	        if (fail) fail();
	      });
	    }
	    function getMovieStream(movie, success, fail) {
	      if (movie.stream) {
	        if (movie.stream.url) {
	          success(prepareStreams([movie.stream]));
	          return;
	        }
	        if (movie.stream.ref) {
	          getStream(movie.stream.ref, function (streams) {
	            success(prepareStreams(streams));
	          }, function (errorText) {
	            if (fail) fail(errorText);
	          });
	          return;
	        }
	      }
	      if (movie.stream_ref) {
	        getStream(movie.stream_ref, function (streams) {
	          success(prepareStreams(streams));
	        }, function (errorText) {
	          if (fail) fail(errorText);
	        });
	        return;
	      }
	      if (movie.streams && movie.streams.length) {
	        var direct = movie.streams.filter(function (stream) {
	          return stream && stream.url;
	        });
	        if (direct.length) {
	          success(prepareStreams(direct));
	          return;
	        }
	        var ref = movie.streams[0] && movie.streams[0].ref;
	        if (ref) {
	          getStream(ref, function (streams) {
	            success(prepareStreams(streams));
	          }, function (errorText) {
	            if (fail) fail(errorText);
	          });
	          return;
	        }
	      }
	      success({
	        first: null,
	        qualitys: {}
	      });
	    }
	  };
	}

	var config = {
	  api_base: 'https://bbe.lme.isroot.in/api/v2',
	  community_watches_url: 'https://lampame.github.io/main/cw.js',
	  community_watches_name: 'CommunityWatches',
	  qr_url: 'https://lampame.donatik.me',
	  qr_poster: 'https://iili.io/fkdGkSj.png',
	  storage_prefixes: {
	    cw_autoinstall_done: 'bandera_online_cw_autoinstall_done',
	    last_balanser: 'bandera_online_last_balanser',
	    balanser: 'bandera_online_balanser',
	    watched_last: 'bandera_online_watched_last',
	    view: 'bandera_online_view'
	  }
	};

	var QR_URL = config.qr_url;
	var QR_TEXT = "<a href=\"".concat(QR_URL, "\">\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F</a>");
	var QR_BODY = 'Подяка автору плагіну BanderaOnline добровільна, на розвиток якого витрачено багато часу та сил.';
	var QR_CARD_POSTER = config.qr_poster;
	function openQrModal() {
	  var html = $('<div class="banderaonline-qr-modal">' + '<style id="banderaonline-qr-style">' + '.banderaonline-qr-modal__content{display:flex;flex-direction:row;gap:1.2em;align-items:center;text-align:center}' + '.banderaonline-qr-modal__info{max-width:28em}' + '.banderaonline-qr-modal__qr{display:flex;flex-direction:column;align-items:center}' + '@media (max-width: 600px){.banderaonline-qr-modal__content{flex-direction:column}}' + '</style>' + '<div class="banderaonline-qr-modal__content">' + '<div class="account-modal-split__info banderaonline-qr-modal__info">' + //`<div class="account-modal-split__title">${QR_TITLE}</div>` +
	  "<div class=\"account-modal-split__text\"><img src=\"".concat(QR_CARD_POSTER, "\" class=\"banderaonline-qr-modal__img\"><br />").concat(QR_BODY, "</div>") + '</div>' + '<div class="account-modal-split__qr banderaonline-qr-modal__qr">' + '<div class="account-modal-split__qr-code" style="margin-bottom:0;width: 13em;height: 13em;"></div>' + "<div class=\"account-modal-split__qr-text\">".concat(QR_TEXT, "</div>") + '</div>' + '</div>' + '</div>');

	  // Idempotent style check
	  if ($('#banderaonline-qr-style').length) {
	    html.find('#banderaonline-qr-style').remove();
	  }
	  var qrElement = html.find('.account-modal-split__qr-code');
	  var renderQr = function renderQr() {
	    if (!window.qrcode) {
	      qrElement.text('QR недоступний');
	      return;
	    }
	    Lampa.Utils.qrcode(QR_URL, qrElement, function (error) {
	      if (error) console.error(error);

	      // Fix sizing race: apply sizing AFTER rendering
	      var svg = qrElement.find('svg');
	      if (svg[0]) {
	        svg[0].style.setProperty('width', '12em', 'important');
	        svg[0].style.setProperty('height', '12em', 'important');
	      }
	    });
	  };
	  if (!window.qrcode && Lampa.Utils.putScript) {
	    var qrLib = window.location.protocol == 'file:' ? Lampa.Manifest.github_lampa + 'vender/qrcode/qrcode.js' : './vender/qrcode/qrcode.js';
	    Lampa.Utils.putScript([qrLib], renderQr, renderQr, null, false);
	  } else {
	    renderQr();
	  }
	  var enabledController = Lampa.Controller.enabled().name;
	  Lampa.Modal.open({
	    title: '',
	    html: html,
	    size: 'medium',
	    onBack: function onBack() {
	      Lampa.Modal.close();
	      Lampa.Controller.toggle(enabledController);
	    }
	  });
	}

	var AUTH_KEYS$1 = {
	  filmixToken: 'BO_FILMIX_TOKEN',
	  filmixDeviceId: 'BO_FILMIX_DEVICE_ID'
	};
	function normalize(value) {
	  return (value || '').toString().trim();
	}
	function read(key) {
	  return normalize(Lampa.Storage.get(key, ''));
	}
	function write(key, value) {
	  Lampa.Storage.set(key, normalize(value));
	}
	function getAuthKeys() {
	  return AUTH_KEYS$1;
	}
	function getFilmixToken() {
	  return read(AUTH_KEYS$1.filmixToken);
	}
	function setFilmixToken(value) {
	  write(AUTH_KEYS$1.filmixToken, value);
	}
	function getFilmixDeviceId() {
	  return read(AUTH_KEYS$1.filmixDeviceId);
	}
	function setFilmixDeviceId(value) {
	  write(AUTH_KEYS$1.filmixDeviceId, value);
	}
	function ensureFilmixDeviceId() {
	  var deviceId = getFilmixDeviceId();
	  if (!deviceId) {
	    deviceId = Lampa.Utils.uid(16);
	    setFilmixDeviceId(deviceId);
	  }
	  return deviceId;
	}

	var APIClient = /*#__PURE__*/function () {
	  function APIClient() {
	    _classCallCheck(this, APIClient);
	    this.network = new Lampa.Reguest();
	  }
	  return _createClass(APIClient, [{
	    key: "apiBase",
	    value: function apiBase() {
	      return config.api_base;
	    }
	  }, {
	    key: "getAuth",
	    value: function getAuth() {
	      var token = getFilmixToken();
	      var deviceId = getFilmixDeviceId();
	      if (token && !deviceId) {
	        deviceId = ensureFilmixDeviceId();
	      }
	      return {
	        filmix_token: token,
	        filmix_device_id: deviceId
	      };
	    }
	  }, {
	    key: "addParam",
	    value: function addParam(url, key, value) {
	      if (!value) return url;
	      return Lampa.Utils.addUrlComponent(url, key + '=' + encodeURIComponent(value));
	    }
	  }, {
	    key: "postJson",
	    value: function postJson(url, data, success, fail) {
	      this.network.silent(url, success, fail, JSON.stringify(data), {
	        dataType: 'json',
	        headers: {
	          'Content-Type': 'application/json'
	        }
	      });
	    }
	  }, {
	    key: "getJson",
	    value: function getJson(url, success, fail) {
	      this.network.silent(url, success, fail);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.network.clear();
	    }
	  }, {
	    key: "getSources",
	    value: function getSources(success, fail) {
	      this.getJson(this.apiBase() + '/sources', success, fail);
	    }
	  }, {
	    key: "search",
	    value: function search(params, sources, success, fail) {
	      var url = this.apiBase() + '/search';
	      var sourceKey = Array.isArray(sources) ? sources.join(',') : sources;
	      url = this.addParam(url, 'sources', sourceKey);
	      url = this.addParam(url, 'source', sourceKey);
	      for (var key in params) {
	        url = this.addParam(url, key, params[key]);
	      }
	      var auth = this.getAuth();
	      if (sources === 'filmix' || Array.isArray(sources) && sources.indexOf('filmix') !== -1) {
	        url = this.addParam(url, 'filmix_token', auth.filmix_token);
	        url = this.addParam(url, 'filmix_device_id', auth.filmix_device_id);
	      }
	      this.getJson(url, success, fail);
	    }
	  }, {
	    key: "getContent",
	    value: function getContent(sourceKey, ref, success, fail) {
	      var url = this.apiBase() + '/content';
	      var data = {
	        source: sourceKey,
	        ref: this.extendRefWithAuth(sourceKey, ref),
	        full: true
	      };
	      this.postJson(url, data, success, fail);
	    }
	  }, {
	    key: "getStream",
	    value: function getStream(sourceKey, ref, success, fail) {
	      var url = this.apiBase() + '/stream';
	      var data = {
	        source: sourceKey,
	        ref: this.extendRefWithAuth(sourceKey, ref)
	      };
	      this.postJson(url, data, success, fail);
	    }
	  }, {
	    key: "extendRefWithAuth",
	    value: function extendRefWithAuth(sourceKey, ref) {
	      if (!ref || _typeof(ref) !== 'object') return ref;
	      var auth = this.getAuth();
	      var next = {};
	      Lampa.Arrays.extend(next, ref, true);
	      if (sourceKey == 'filmix') {
	        if (!next.token && auth.filmix_token) next.token = auth.filmix_token;
	        if (!next.device_id && auth.filmix_device_id) next.device_id = auth.filmix_device_id;
	      }
	      return next;
	    }
	  }]);
	}();

	var SourcesStore = /*#__PURE__*/function () {
	  function SourcesStore() {
	    _classCallCheck(this, SourcesStore);
	    this.sources_key = 'BO_SOURCES';
	    this.sources_sort_key = 'BO_SOURCES_SORT';
	    this.sources_hide_key = 'BO_SOURCES_HIDE';
	    this.available_sources = Lampa.Storage.get(this.sources_key, []);
	    this.titles = {};
	    this.applyTitles(this.available_sources);
	  }
	  return _createClass(SourcesStore, [{
	    key: "normalizeName",
	    value: function normalizeName(name) {
	      return (name || '').toString().trim().toLowerCase();
	    }
	  }, {
	    key: "applyTitles",
	    value: function applyTitles(list) {
	      var _this = this;
	      if (!Array.isArray(list)) return;
	      list.forEach(function (item) {
	        if (!item) return;
	        var key = _this.normalizeName(item.key || item.name);
	        var title = item.display_name || item.displayName || item.display || item.title || item.label || item.name || '';
	        if (key && title) _this.titles[key] = title;
	      });
	    }
	  }, {
	    key: "getSorted",
	    value: function getSorted() {
	      var sorted = Lampa.Storage.get(this.sources_sort_key, []);
	      return Array.isArray(sorted) ? sorted.map(this.normalizeName).filter(Boolean) : [];
	    }
	  }, {
	    key: "getHidden",
	    value: function getHidden() {
	      var hidden = Lampa.Storage.get(this.sources_hide_key, []);
	      return Array.isArray(hidden) ? hidden.map(this.normalizeName).filter(Boolean) : [];
	    }
	  }, {
	    key: "saveAvailable",
	    value: function saveAvailable(list) {
	      this.available_sources = list;
	      this.applyTitles(list);
	      Lampa.Storage.set(this.sources_key, list);
	    }
	  }, {
	    key: "saveSorted",
	    value: function saveSorted(list) {
	      Lampa.Storage.set(this.sources_sort_key, list);
	    }
	  }, {
	    key: "saveHidden",
	    value: function saveHidden(list) {
	      Lampa.Storage.set(this.sources_hide_key, list);
	    }
	  }, {
	    key: "getEnabledKeys",
	    value: function getEnabledKeys() {
	      var _this2 = this;
	      return this.available_sources.filter(function (item) {
	        return item && item.enabled !== false;
	      }).map(function (item) {
	        return _this2.normalizeName(item.key || item.name);
	      }).filter(Boolean);
	    }
	  }, {
	    key: "applyUserFilters",
	    value: function applyUserFilters(list) {
	      var hidden = this.getHidden();
	      var sorted = this.getSorted();
	      var result = list.slice(0);
	      if (sorted.length) {
	        var ordered = [];
	        sorted.forEach(function (key) {
	          if (result.indexOf(key) !== -1) ordered.push(key);
	        });
	        result.forEach(function (key) {
	          if (ordered.indexOf(key) === -1) ordered.push(key);
	        });
	        result = ordered;
	      }
	      if (hidden.length) {
	        result = result.filter(function (name) {
	          return hidden.indexOf(name) === -1;
	        });
	      }
	      return result;
	    }
	  }, {
	    key: "getTitle",
	    value: function getTitle(key) {
	      return this.titles[this.normalizeName(key)] || key;
	    }
	  }]);
	}();
	var sourcesStore = new SourcesStore();

	function getFileId(movie) {
	  if (!movie) return '';
	  var title = movie.number_of_seasons ? movie.original_name || movie.name || movie.title : movie.original_title || movie.title || movie.name;
	  var id = movie.tmdb_id || movie.id;
	  var key = title || (id ? 'id:' + id : '') || '';
	  return Lampa.Utils.hash(key);
	}
	function getHashTimeline(movie, season, episode) {
	  var title = movie.original_title || movie.original_name || movie.name || movie.title || '';
	  return Lampa.Utils.hash(season ? [season, episode, title].join('') : title);
	}
	function getHashBehold(movie, season, episode, voice_name) {
	  var title = movie.original_title || movie.original_name || movie.name || movie.title || '';
	  var vn = voice_name || '';
	  return Lampa.Utils.hash(season ? [season, episode, title, vn].join('') : title + vn);
	}

	function component(object) {
	  var api_client = new APIClient();
	  this.api_client = api_client;
	  var scroll = new Lampa.Scroll({
	    mask: true,
	    over: true
	  });
	  var files = new Lampa.Explorer(object);
	  var filter = new Lampa.Filter(object);
	  var sources = {};
	  function ensureSource(key) {
	    if (key && !sources[key]) {
	      sources[key] = createV2(key);
	    }
	    return sources[key];
	  }
	  var last;
	  var extended;
	  var selected_id;
	  var source;
	  var balanser;
	  var initialized;
	  var balanser_timer;
	  var images = [];
	  var disabled_sources = {};
	  var filter_sources = buildFilterSources(object && object.movie);
	  var available_sources = sourcesStore.available_sources;

	  // TMDB Season Cache
	  var tmdb_season_cache = {};
	  function escapeHtml(text) {
	    if (!text) return '';
	    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
	  }
	  var filter_translate = {
	    season: Lampa.Lang.translate('torrent_serial_season'),
	    voice: Lampa.Lang.translate('torrent_parser_voice'),
	    source: Lampa.Lang.translate('settings_rest_source')
	  };
	  function isSourceDisabled(name) {
	    return !!disabled_sources[name];
	  }
	  function buildSourceSortItems() {
	    return filter_sources.map(function (key) {
	      var disabled = isSourceDisabled(key);
	      return {
	        title: sourcesStore.getTitle(key),
	        source: key,
	        selected: key == balanser,
	        ghost: disabled,
	        noenter: disabled
	      };
	    });
	  }
	  function updateSourceSort() {
	    if (!filter) return;
	    filter.set('sort', buildSourceSortItems());
	    filter.chosen('sort', [sourcesStore.getTitle(balanser)]);
	  }
	  function resolveEpisodeNumber(value, fallback) {
	    if (value === null || typeof value === 'undefined' || value === '') return fallback;
	    return value;
	  }
	  function formatEpisodeNumber(value, fallback) {
	    var episode = resolveEpisodeNumber(value, typeof fallback === 'undefined' ? 0 : fallback);
	    var text = (episode + '').trim();
	    if (!text) text = '0';
	    return text.length < 2 ? '0' + text : text;
	  }
	  function buildFilterSources(movie) {
	    var sources = getBaseSources();
	    var include_anime = shouldIncludeAnimeSources(movie);
	    var include_starlight = shouldIncludeStarlightSource(movie);
	    var include_midnight = shouldIncludeMidnightSource(movie);
	    if (include_anime) {
	      if (sources.indexOf('bambooua') === -1) sources.push('bambooua');
	      if (sources.indexOf('animeon') === -1) sources.push('animeon');
	      if (sources.indexOf('moonanime') === -1) sources.push('moonanime');
	      if (sources.indexOf('mikai') === -1) sources.push('mikai');
	    } else {
	      sources = sources.filter(function (name) {
	        return name !== 'bambooua' && name !== 'animeon' && name !== 'moonanime' && name !== 'mikai';
	      });
	    }
	    if (include_starlight) {
	      if (sources.indexOf('starlight') === -1) sources.push('starlight');
	    } else {
	      sources = sources.filter(function (name) {
	        return name !== 'starlight';
	      });
	    }
	    if (include_midnight) {
	      if (sources.indexOf('midnight') === -1) sources.push('midnight');
	    } else {
	      sources = sources.filter(function (name) {
	        return name !== 'midnight';
	      });
	    }
	    sources = filterEnabledSources(sources);
	    sources = sourcesStore.applyUserFilters(sources);
	    return sources;
	  }
	  function getBaseSources() {
	    var from_api = getEnabledSources();
	    if (from_api) {
	      return from_api;
	    }
	    var keys = Object.keys(sources);
	    return keys.length ? keys : [];
	  }
	  function filterEnabledSources(list) {
	    var enabled = getEnabledSources();
	    if (!enabled) return list;
	    return list.filter(function (name) {
	      return enabled.indexOf(name) !== -1;
	    });
	  }
	  function getEnabledSources() {
	    if (!available_sources || !available_sources.length) return null;
	    var enabled = available_sources.filter(function (item) {
	      return item && item.enabled !== false;
	    }).map(function (item) {
	      return sourcesStore.normalizeName(item.key || item.name);
	    }).filter(Boolean);
	    enabled.forEach(function (name) {
	      return ensureSource(name);
	    });
	    return enabled.length ? enabled : null;
	  }
	  function loadAvailableSources(call) {
	    var cached = Lampa.Storage.get(sourcesStore.sources_key, null);
	    api_client.getSources(function (json) {
	      if (json && json.ok && Array.isArray(json.sources)) {
	        applyAvailableSources(json.sources);
	        sourcesStore.saveAvailable(json.sources);
	      } else if (cached && Array.isArray(cached)) {
	        applyAvailableSources(cached);
	      }
	      call();
	    }, function () {
	      if (cached && Array.isArray(cached)) applyAvailableSources(cached);
	      call();
	    });
	  }
	  function applyAvailableSources(list) {
	    available_sources = list;
	    list.forEach(function (item) {
	      if (!item || !item.name && !item.key) return;
	      var display = extractSourceTitle(item);
	      var key = sourcesStore.normalizeName(item.key || item.name);
	      if (key) {
	        ensureSource(key);
	        if (display) sourcesStore.titles[key] = display;
	      }
	    });
	  }
	  function extractSourceTitle(item) {
	    if (!item) return '';
	    return item.display_name || item.displayName || item.display || item.title || item.label || item.name || '';
	  }
	  function shouldIncludeAnimeSources(movie) {
	    if (!movie) return true;
	    var lang = movie.original_language;
	    var has_lang = !!lang;
	    var is_anime_lang = lang == 'ja' || lang == 'zh';
	    var is_dorama_lang = lang == 'ko';
	    var has_anime_genre = Array.isArray(movie.genres) && movie.genres.some(function (g) {
	      return g && g.id == 16;
	    });
	    var title = movie.original_title || movie.original_name || movie.title || movie.name || '';
	    var has_japanese_title = Lampa.Utils.containsJapanese ? Lampa.Utils.containsJapanese(title) : false;
	    var is_anime = is_anime_lang && (has_anime_genre || has_japanese_title) || has_japanese_title;
	    return !has_lang || is_anime || is_dorama_lang;
	  }
	  function shouldIncludeStarlightSource(movie) {
	    if (!movie) return false;
	    return (movie.original_language || '').toLowerCase() == 'uk';
	  }
	  function shouldIncludeMidnightSource(movie) {
	    if (!movie) return false;
	    return (movie.original_language || '').toLowerCase() == 'uk';
	  }
	  function getYear(movie) {
	    var date = movie.release_date || movie.first_air_date || movie.year || movie.start_date;
	    return date ? (date + '').slice(0, 4) : '';
	  }
	  function getTmdbId(movie) {
	    if (!movie) return '';
	    if (movie.tmdb_id) return movie.tmdb_id;
	    if (typeof movie.id == 'number' || typeof movie.id == 'string' && /^\d+$/.test(movie.id)) return movie.id;
	    return '';
	  }
	  this.initialize = function () {
	    var _this = this;
	    loadAvailableSources(function () {
	      filter_sources = buildFilterSources(object && object.movie);
	      source = _this.createSource();
	      filter.onSearch = function (value) {
	        Lampa.Activity.replace({
	          search: value,
	          clarification: true
	        });
	      };
	      filter.onBack = function () {
	        _this.start();
	      };
	      filter.render().find('.selector').on('hover:enter', function () {
	        clearInterval(balanser_timer);
	      });
	      filter.onSelect = function (type, a, b) {
	        if (type == 'filter') {
	          if (a.reset) {
	            if (extended) source.reset();else _this.start();
	          } else if (a.stype == 'source') {
	            Lampa.Select.close();
	            _this.changeBalanser(b.source);
	          } else {
	            source.filter(type, a, b);
	          }
	        } else if (type == 'sort') {
	          Lampa.Select.close();
	          _this.changeBalanser(a.source);
	        }
	      };
	      if (filter.addButtonBack) filter.addButtonBack();
	      filter.render().find('.filter--sort span').text(Lampa.Lang.translate('online_balanser'));
	      var donateButton = $('<div class="simple-button simple-button--filter selector filter--donate">' + '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.730 1.108-.730 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"></path></g></svg>' + '<span>Подяка</span><div class="hide"></div>' + '</div>');
	      filter.render().find('.filter--filter').after(donateButton);
	      donateButton.on('hover:enter', function () {
	        openQrModal();
	      });
	      files.appendFiles(scroll.render());
	      files.appendHead(filter.render());
	      scroll.body().addClass('torrent-list');
	      scroll.minus(files.render().find('.explorer__files-head'));
	      _this.search();
	    });
	  };
	  this.changeBalanser = function (balanser_name) {
	    if (isSourceDisabled(balanser_name)) return;
	    var last_select_balanser = Lampa.Storage.cache('bandera_online_last_balanser', 3000, {});
	    last_select_balanser[object.movie.id] = balanser_name;
	    Lampa.Storage.set('bandera_online_last_balanser', last_select_balanser);
	    Lampa.Storage.set('bandera_online_balanser', balanser_name);
	    var to = this.getChoice(balanser_name);
	    var from = this.getChoice();
	    if (from.voice_name) to.voice_name = from.voice_name;
	    this.saveChoice(to, balanser_name);
	    this.reset();
	    source = this.createSource();
	    this.search();
	  };
	  this.createSource = function () {
	    var last_select_balanser = Lampa.Storage.cache('bandera_online_last_balanser', 3000, {});
	    if (last_select_balanser[object.movie.id]) {
	      balanser = last_select_balanser[object.movie.id];
	      Lampa.Storage.set('bandera_online_last_balanser', last_select_balanser);
	    } else {
	      balanser = Lampa.Storage.get('bandera_online_balanser', 'uatut');
	    }
	    if (!ensureSource(balanser) || filter_sources.indexOf(balanser) === -1) {
	      balanser = filter_sources[0] || '';
	    }
	    if (!ensureSource(balanser)) {
	      return null;
	    }
	    return new sources[balanser](this, object);
	  };
	  this.proxy = function (name) {
	    var prox = Lampa.Storage.get('bandera_online_proxy_all');
	    var need = Lampa.Storage.get('bandera_online_proxy_' + name);
	    if (need) prox = need;
	    if (prox && prox.slice(-1) !== '/') {
	      prox += '/';
	    }
	    return prox;
	  };

	  /**
	   * Подготовка
	   */
	  this.create = function () {
	    return this.render();
	  };

	  /**
	   * Начать поиск
	   */
	  this.search = function () {
	    this.activity.loader(true);
	    this.filter({
	      source: filter_sources
	    }, this.getChoice());
	    this.find();
	  };
	  this.find = function () {
	    if (object.movie.imdb_id && source.searchByImdbID) {
	      this.extendChoice();
	      source.searchByImdbID(object, object.movie.imdb_id);
	      return;
	    }
	    if (object.movie.kinopoisk_id && source.searchByKinopoisk) {
	      this.extendChoice();
	      source.searchByKinopoisk(object, object.movie.kinopoisk_id);
	      return;
	    }
	    if (object.movie.mal_id && source.searchByMalId) {
	      this.extendChoice();
	      source.searchByMalId(object, object.movie.mal_id);
	      return;
	    }
	    if (source.searchByTitle) {
	      this.extendChoice();
	      source.searchByTitle(object, object.movie.title || object.movie.name);
	      return;
	    }
	    if (source.search) {
	      this.extendChoice();
	      source.search(object, [{
	        title: object.movie.title || object.movie.name,
	        original_title: object.movie.original_title || object.movie.original_name,
	        imdb_id: object.movie.imdb_id,
	        tmdb_id: getTmdbId(object.movie),
	        kinopoisk_id: object.movie.kinopoisk_id,
	        mal_id: object.movie.mal_id,
	        year: getYear(object.movie)
	      }]);
	      return;
	    }
	    this.doesNotAnswer();
	  };
	  this.getChoice = function (for_balanser) {
	    var data = Lampa.Storage.cache('bandera_online_choice_' + (for_balanser || balanser), 3000, {});
	    var save = data[selected_id || object.movie.id] || {};
	    Lampa.Arrays.extend(save, {
	      season: 0,
	      voice: 0,
	      voice_name: '',
	      voice_id: 0,
	      episodes_view: {},
	      movie_view: ''
	    });
	    return save;
	  };
	  this.extendChoice = function () {
	    extended = true;
	    source.extendChoice(this.getChoice());
	  };
	  this.saveChoice = function (choice, for_balanser) {
	    var data = Lampa.Storage.cache('bandera_online_choice_' + (for_balanser || balanser), 3000, {});
	    data[selected_id || object.movie.id] = choice;
	    Lampa.Storage.set('bandera_online_choice_' + (for_balanser || balanser), data);
	  };

	  /**
	   * Есть похожие карточки
	   * @param {Object} json 
	   */
	  this.similars = function (json) {
	    var _this2 = this;
	    json.forEach(function (elem) {
	      var info = [];
	      var year = ((elem.year || elem.start_date || '') + '').slice(0, 4);
	      if (year) info.push(year);
	      if (elem.season) info.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + elem.season);
	      var name = elem.title || elem.name || '';
	      var orig = elem.title_en || elem.original_title || elem.orig_title || '';
	      elem.title = escapeHtml(name + (orig && orig !== name ? ' / ' + orig : ''));
	      elem.time = elem.time || '';
	      elem.info = info.join('<span class="online-prestige-split">●</span>');
	      var item = Lampa.Template.get('bandera_online_folder', elem);
	      if (elem.poster && (elem.source == 'uaflix' || balanser == 'uaflix')) {
	        var folder = item.find('.online-prestige__folder');
	        var poster = $('<div class="online-prestige__img online-prestige__img--loaded"><img alt="" src="' + escapeHtml(elem.poster) + '"></div>');
	        var img = poster.find('img')[0];
	        img.onerror = function () {
	          poster.replaceWith(folder);
	        };
	        folder.replaceWith(poster);
	      }
	      item.on('hover:enter', function () {
	        _this2.activity.loader(true);
	        _this2.reset();
	        object.search_date = year;
	        selected_id = elem.id;
	        _this2.extendChoice();
	        var kinopoisk_id = elem.kp_id || elem.filmId;
	        var mal_id = elem.mal_id || elem.malId;
	        var has_aggregated_ref = elem.ref && Array.isArray(elem.ref.seasons) && elem.ref.seasons.length;
	        if (has_aggregated_ref && source.search) {
	          source.search(object, [elem]);
	        } else if (kinopoisk_id && source.searchByKinopoisk) {
	          source.searchByKinopoisk(object, kinopoisk_id);
	        } else if (mal_id && source.searchByMalId) {
	          source.searchByMalId(object, mal_id);
	        } else if (source.search) {
	          source.search(object, [elem]);
	        } else {
	          _this2.doesNotAnswer();
	        }
	      }).on('hover:focus', function (e) {
	        last = e.target;
	        scroll.update($(e.target), true);
	      });
	      scroll.append(item);
	    });
	  };
	  this.clearImages = function () {
	    images.forEach(function (img) {
	      img.onerror = function () {};
	      img.onload = function () {};
	      img.src = '';
	    });
	    images = [];
	  };

	  /**
	   * Очистить список файлов
	   */
	  this.reset = function () {
	    last = false;
	    clearInterval(balanser_timer);
	    api_client.clear();
	    this.clearImages();
	    scroll.render().find('.empty').remove();
	    scroll.clear();
	  };

	  /**
	   * Загрузка
	   */
	  this.loading = function (status) {
	    if (status) this.activity.loader(true);else {
	      this.activity.loader(false);
	      this.activity.toggle();
	    }
	  };

	  /**
	   * Построить фильтр
	   */
	  this.filter = function (filter_items, choice) {
	    var _this3 = this;
	    var select = [];
	    var add = function add(type, title) {
	      var need = _this3.getChoice();
	      var items = filter_items[type];
	      var subitems = [];
	      var value = need[type];
	      items.forEach(function (name, i) {
	        subitems.push({
	          title: name,
	          selected: value == i,
	          index: i
	        });
	      });
	      select.push({
	        title: title,
	        subtitle: items[value],
	        items: subitems,
	        stype: type
	      });
	    };
	    filter_items.source = filter_sources;
	    select.push({
	      title: Lampa.Lang.translate('torrent_parser_reset'),
	      reset: true
	    });
	    if (filter_sources && filter_sources.length) {
	      var subitems = [];
	      filter_sources.forEach(function (name, i) {
	        subitems.push({
	          title: sourcesStore.getTitle(name),
	          selected: name == balanser,
	          index: i,
	          source: name
	        });
	      });
	      select.push({
	        title: Lampa.Lang.translate('online_balanser'),
	        subtitle: sourcesStore.getTitle(balanser),
	        items: subitems,
	        stype: 'source'
	      });
	    }
	    this.saveChoice(choice);
	    if (filter_items.voice && filter_items.voice.length) add('voice', Lampa.Lang.translate('torrent_parser_voice'));
	    if (filter_items.season && filter_items.season.length) add('season', Lampa.Lang.translate('torrent_serial_season'));
	    filter.set('filter', select);
	    filter.set('sort', buildSourceSortItems());
	    this.selected(filter_items);
	  };
	  this.disableSource = function (source_name, reason) {
	    var key = sourcesStore.normalizeName(source_name);
	    if (!key) return;
	    if (!disabled_sources[key]) {
	      disabled_sources[key] = {
	        reason: reason || ''
	      };
	      updateSourceSort();
	    }
	  };
	  this.pushError = function (text) {
	    if (text) Lampa.Bell.push({
	      text: text
	    });
	  };

	  /**
	   * Закрыть фильтр
	   */
	  this.closeFilter = function () {
	    if ($('body').hasClass('selectbox--open')) Lampa.Select.close();
	  };

	  /**
	   * Показать что выбрано в фильтре
	   */
	  this.selected = function (filter_items) {
	    var need = this.getChoice(),
	      select = [];
	    for (var i in need) {
	      if (filter_items[i] && filter_items[i].length) {
	        if (i == 'voice') {
	          select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
	        } else if (i !== 'source') {
	          if (filter_items.season.length >= 1) {
	            select.push(filter_translate.season + ': ' + filter_items[i][need[i]]);
	          }
	        }
	      }
	    }
	    filter.chosen('filter', select);
	    filter.chosen('sort', [sourcesStore.getTitle(balanser)]);
	  };
	  this.getEpisodes = function (season, call) {
	    var id = getTmdbId(object.movie);
	    var cache_key = id + '_' + season;
	    if (tmdb_season_cache[cache_key]) {
	      return call(tmdb_season_cache[cache_key]);
	    }
	    if (id && object.movie.name) {
	      Lampa.Api.sources.tmdb.get('tv/' + id + '/season/' + season, {}, function (data) {
	        tmdb_season_cache[cache_key] = data.episodes || [];
	        call(tmdb_season_cache[cache_key]);
	      }, function () {
	        call([]);
	      });
	    } else call([]);
	  };

	  /**
	   * Добавить элементы в список
	   */
	  this.append = function (item) {
	    item.on('hover:focus', function (e) {
	      last = e.target;
	      scroll.update($(e.target), true);
	    });
	    scroll.append(item);
	  };
	  this.watched = function (set) {
	    var file_id = getFileId(object.movie);
	    var watched = Lampa.Storage.cache('online_watched_last', 5000, {});
	    if (set) {
	      if (!watched[file_id]) watched[file_id] = {};
	      Lampa.Arrays.extend(watched[file_id], set, true);
	      Lampa.Storage.set('online_watched_last', watched);
	      this.updateWatched();
	    } else {
	      return watched[file_id];
	    }
	  };
	  this.updateWatched = function () {
	    var watched = this.watched();
	    var body = scroll.body().find('.online-prestige-watched .online-prestige-watched__body').empty();
	    if (watched) {
	      var line = [];
	      if (watched.balanser_name) line.push(watched.balanser_name);
	      if (watched.voice_name) line.push(watched.voice_name);
	      if (watched.season) line.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + watched.season);
	      if (watched.episode) line.push(Lampa.Lang.translate('torrent_serial_episode') + ' ' + watched.episode);
	      line.forEach(function (n) {
	        body.append('<span>' + n + '</span>');
	      });
	    } else body.append('<span>' + Lampa.Lang.translate('online_no_watch_history') + '</span>');
	  };

	  /**
	   * Отрисовка файлов
	   */
	  this.draw = function (items) {
	    var _this4 = this;
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (!items.length) return this.empty();
	    scroll.append(Lampa.Template.get('bandera_online_watched', {}));
	    this.updateWatched();
	    this.getEpisodes(items[0].season, function (episodes) {
	      var viewed = Lampa.Storage.cache('online_view', 5000, []);
	      var serial = object.movie.name ? true : false;
	      var choice = _this4.getChoice();
	      var fully = window.innerWidth > 480;
	      var scroll_to_element = false;
	      var scroll_to_mark = false;
	      items.forEach(function (element, index) {
	        var episode = serial && episodes.length && !params.similars ? episodes.find(function (e) {
	          return e.episode_number == element.episode;
	        }) : false;
	        var episode_num = resolveEpisodeNumber(element.episode, index + 1);
	        var episode_last = choice.episodes_view[element.season];
	        Lampa.Arrays.extend(element, {
	          info: '',
	          quality: '',
	          time: Lampa.Utils.secondsToTime((episode ? episode.runtime : object.movie.runtime) * 60, true)
	        });
	        var hash_timeline = getHashTimeline(object.movie, element.season, element.episode);
	        var hash_behold = getHashBehold(object.movie, element.season, element.episode, element.voice_name);
	        var data = {
	          hash_timeline: hash_timeline,
	          hash_behold: hash_behold
	        };
	        var info = [];
	        if (element.season) {
	          element.translate_episode_end = _this4.getLastEpisode(items);
	          element.translate_voice = element.voice_name;
	        }
	        element.timeline = Lampa.Timeline.view(hash_timeline);
	        if (episode) {
	          element.title = escapeHtml(episode.name);
	          if (element.info.length < 30 && episode.vote_average) info.push(Lampa.Template.get('bandera_online_rate', {
	            rate: parseFloat(episode.vote_average + '').toFixed(1)
	          }, true));
	          if (episode.air_date && fully) info.push(Lampa.Utils.parseTime(episode.air_date).full);
	        } else if (object.movie.release_date && fully) {
	          info.push(Lampa.Utils.parseTime(object.movie.release_date).full);
	        }
	        if (!serial && object.movie.tagline && element.info.length < 30) info.push(escapeHtml(object.movie.tagline));
	        if (element.info) info.push(element.info);
	        if (info.length) element.info = info.map(function (i) {
	          return '<span>' + i + '</span>';
	        }).join('<span class="online-prestige-split">●</span>');
	        var html = Lampa.Template.get('bandera_online_full', element);
	        var loader = html.find('.online-prestige__loader');
	        var image = html.find('.online-prestige__img');
	        if (!serial) {
	          if (choice.movie_view == hash_behold) scroll_to_element = html;
	        } else if (typeof episode_last !== 'undefined' && episode_last == episode_num) {
	          scroll_to_element = html;
	        }
	        if (serial && !episode) {
	          image.append('<div class="online-prestige__episode-number">' + formatEpisodeNumber(element.episode, index + 1) + '</div>');
	          loader.remove();
	        } else {
	          var img = html.find('img')[0];
	          img.onerror = function () {
	            img.src = './img/img_broken.svg';
	          };
	          img.onload = function () {
	            image.addClass('online-prestige__img--loaded');
	            loader.remove();
	            if (serial) image.append('<div class="online-prestige__episode-number">' + formatEpisodeNumber(element.episode, index + 1) + '</div>');
	          };
	          var path = episode ? episode.still_path : object.movie.backdrop_path;
	          if (path) img.src = Lampa.TMDB.image('t/p/w300' + path);else img.src = './img/img_broken.svg';
	          images.push(img);
	        }
	        html.find('.online-prestige__timeline').append(Lampa.Timeline.render(element.timeline));
	        if (viewed.indexOf(hash_behold) !== -1) {
	          scroll_to_mark = html;
	          html.find('.online-prestige__img').append('<div class="online-prestige__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
	        }
	        element.mark = function () {
	          viewed = Lampa.Storage.cache('online_view', 5000, []);
	          if (viewed.indexOf(hash_behold) == -1) {
	            viewed.push(hash_behold);
	            Lampa.Storage.set('online_view', viewed);
	            if (html.find('.online-prestige__viewed').length == 0) {
	              html.find('.online-prestige__img').append('<div class="online-prestige__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
	            }
	          }
	          choice = _this4.getChoice();
	          if (!serial) {
	            choice.movie_view = hash_behold;
	          } else {
	            choice.episodes_view[element.season] = episode_num;
	          }
	          _this4.saveChoice(choice);
	          _this4.watched({
	            balanser: balanser,
	            balanser_name: sourcesStore.getTitle(balanser),
	            voice_id: choice.voice_id,
	            voice_name: choice.voice_name || element.voice_name,
	            episode: element.episode,
	            season: element.season
	          });
	        };
	        element.unmark = function () {
	          viewed = Lampa.Storage.cache('online_view', 5000, []);
	          if (viewed.indexOf(hash_behold) !== -1) {
	            Lampa.Arrays.remove(viewed, hash_behold);
	            Lampa.Storage.set('online_view', viewed);
	            if (Lampa.Manifest.app_digital >= 177) Lampa.Storage.remove('online_view', hash_behold);
	            html.find('.online-prestige__viewed').remove();
	          }
	        };
	        element.timeclear = function () {
	          element.timeline.percent = 0;
	          element.timeline.time = 0;
	          element.timeline.duration = 0;
	          Lampa.Timeline.update(element.timeline);
	        };
	        html.on('hover:enter', function () {
	          if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
	          if (params.onEnter) params.onEnter(element, html, data);
	        }).on('hover:focus', function (e) {
	          last = e.target;
	          if (params.onFocus) params.onFocus(element, html, data);
	          scroll.update($(e.target), true);
	        });
	        if (params.onRender) params.onRender(element, html, data);
	        _this4.contextMenu({
	          html: html,
	          element: element,
	          onFile: function onFile(call) {
	            if (params.onContextMenu) params.onContextMenu(element, html, data, call);
	          },
	          onClearAllMark: function onClearAllMark() {
	            items.forEach(function (elem) {
	              elem.unmark();
	            });
	          },
	          onClearAllTime: function onClearAllTime() {
	            items.forEach(function (elem) {
	              elem.timeclear();
	            });
	          }
	        });
	        scroll.append(html);
	      });
	      if (serial && episodes.length > items.length && !params.similars) {
	        var left = episodes.slice(items.length);
	        left.forEach(function (episode) {
	          var info = [];
	          if (episode.vote_average) info.push(Lampa.Template.get('bandera_online_rate', {
	            rate: parseFloat(episode.vote_average + '').toFixed(1)
	          }, true));
	          if (episode.air_date) info.push(Lampa.Utils.parseTime(episode.air_date).full);
	          var air = new Date((episode.air_date + '').replace(/-/g, '/'));
	          var now = Date.now();
	          var day = Math.round((air.getTime() - now) / (24 * 60 * 60 * 1000));
	          var txt = Lampa.Lang.translate('full_episode_days_left') + ': ' + day;
	          var html = Lampa.Template.get('bandera_online_full', {
	            time: Lampa.Utils.secondsToTime((episode ? episode.runtime : object.movie.runtime) * 60, true),
	            info: info.length ? info.map(function (i) {
	              return '<span>' + i + '</span>';
	            }).join('<span class="online-prestige-split">●</span>') : '',
	            title: escapeHtml(episode.name),
	            quality: day > 0 ? txt : ''
	          });
	          var loader = html.find('.online-prestige__loader');
	          var image = html.find('.online-prestige__img');
	          var season = items[0] ? items[0].season : 1;
	          html.find('.online-prestige__timeline').append(Lampa.Timeline.render(Lampa.Timeline.view(getHashTimeline(object.movie, season, episode.episode_number))));
	          var img = html.find('img')[0];
	          if (episode.still_path) {
	            img.onerror = function () {
	              img.src = './img/img_broken.svg';
	            };
	            img.onload = function () {
	              image.addClass('online-prestige__img--loaded');
	              loader.remove();
	              image.append('<div class="online-prestige__episode-number">' + formatEpisodeNumber(episode.episode_number) + '</div>');
	            };
	            img.src = Lampa.TMDB.image('t/p/w300' + episode.still_path);
	            images.push(img);
	          } else {
	            img.src = './img/img_broken.svg';
	            loader.remove();
	            image.append('<div class="online-prestige__episode-number">' + formatEpisodeNumber(episode.episode_number) + '</div>');
	          }
	          html.on('hover:focus', function (e) {
	            last = e.target;
	            scroll.update($(e.target), true);
	          });
	          scroll.append(html);
	        });
	      }
	      if (scroll_to_element) {
	        last = scroll_to_element[0];
	      } else if (scroll_to_mark) {
	        last = scroll_to_mark[0];
	      }
	      Lampa.Controller.enable('content');
	    });
	  };

	  /**
	   * Меню
	   */
	  this.contextMenu = function (params) {
	    params.html.on('hover:long', function () {
	      function show(extra) {
	        var enabled = Lampa.Controller.enabled().name;
	        var menu = [];
	        if (Lampa.Platform.is('webos')) {
	          menu.push({
	            title: Lampa.Lang.translate('player_lauch') + ' - Webos',
	            player: 'webos'
	          });
	        }
	        if (Lampa.Platform.is('android')) {
	          menu.push({
	            title: Lampa.Lang.translate('player_lauch') + ' - Android',
	            player: 'android'
	          });
	        }
	        menu.push({
	          title: Lampa.Lang.translate('player_lauch') + ' - Lampa',
	          player: 'lampa'
	        });
	        menu.push({
	          title: Lampa.Lang.translate('online_video'),
	          separator: true
	        });
	        menu.push({
	          title: Lampa.Lang.translate('torrent_parser_label_title'),
	          mark: true
	        });
	        menu.push({
	          title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
	          unmark: true
	        });
	        menu.push({
	          title: Lampa.Lang.translate('time_reset'),
	          timeclear: true
	        });
	        if (extra) {
	          menu.push({
	            title: Lampa.Lang.translate('copy_link'),
	            copylink: true
	          });
	        }
	        menu.push({
	          title: Lampa.Lang.translate('more'),
	          separator: true
	        });
	        if (Lampa.Account.logged() && params.element && typeof params.element.season !== 'undefined' && params.element.translate_voice) {
	          menu.push({
	            title: Lampa.Lang.translate('online_voice_subscribe'),
	            subscribe: true
	          });
	        }
	        menu.push({
	          title: Lampa.Lang.translate('online_clear_all_marks'),
	          clearallmark: true
	        });
	        menu.push({
	          title: Lampa.Lang.translate('online_clear_all_timecodes'),
	          timeclearall: true
	        });
	        Lampa.Select.show({
	          title: Lampa.Lang.translate('title_action'),
	          items: menu,
	          onBack: function onBack() {
	            Lampa.Controller.toggle(enabled);
	          },
	          onSelect: function onSelect(a) {
	            if (a.mark) params.element.mark();
	            if (a.unmark) params.element.unmark();
	            if (a.timeclear) params.element.timeclear();
	            if (a.clearallmark) params.onClearAllMark();
	            if (a.timeclearall) params.onClearAllTime();
	            Lampa.Controller.toggle(enabled);
	            if (a.player) {
	              Lampa.Player.runas(a.player);
	              params.html.trigger('hover:enter');
	            }
	            if (a.copylink) {
	              if (extra.quality) {
	                var qual = [];
	                for (var i in extra.quality) {
	                  qual.push({
	                    title: i,
	                    file: extra.quality[i]
	                  });
	                }
	                Lampa.Select.show({
	                  title: Lampa.Lang.translate('settings_server_links'),
	                  items: qual,
	                  onBack: function onBack() {
	                    Lampa.Controller.toggle(enabled);
	                  },
	                  onSelect: function onSelect(b) {
	                    Lampa.Utils.copyTextToClipboard(b.file, function () {
	                      Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
	                    }, function () {
	                      Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
	                    });
	                  }
	                });
	              } else {
	                Lampa.Utils.copyTextToClipboard(extra.file, function () {
	                  Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
	                }, function () {
	                  Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
	                });
	              }
	            }
	            if (a.subscribe) {
	              Lampa.Account.subscribeToTranslation({
	                card: object.movie,
	                season: params.element.season,
	                episode: params.element.translate_episode_end,
	                voice: params.element.translate_voice
	              }, function () {
	                Lampa.Noty.show(Lampa.Lang.translate('online_voice_success'));
	              }, function () {
	                Lampa.Noty.show(Lampa.Lang.translate('online_voice_error'));
	              });
	            }
	          }
	        });
	      }
	      params.onFile(show);
	    }).on('hover:focus', function () {
	      if (Lampa.Helper) Lampa.Helper.show('online_file', Lampa.Lang.translate('helper_online_file'), params.html);
	    });
	  };

	  /**
	   * Показать пустой результат
	   */
	  this.empty = function (msg) {
	    var html = Lampa.Template.get('bandera_online_does_not_answer', {});
	    html.find('.online-empty__buttons').remove();
	    html.find('.online-empty__title').text(Lampa.Lang.translate('empty_title_two'));
	    html.find('.online-empty__time').text(Lampa.Lang.translate('empty_text'));
	    scroll.append(html);
	    this.loading(false);
	  };
	  this.doesNotAnswer = function () {
	    var _this5 = this;
	    this.reset();
	    var html = Lampa.Template.get('bandera_online_does_not_answer', {
	      balanser: sourcesStore.getTitle(balanser)
	    });
	    var tic = 10;
	    html.find('.cancel').on('hover:enter', function () {
	      clearInterval(balanser_timer);
	    });
	    html.find('.change').on('hover:enter', function () {
	      clearInterval(balanser_timer);
	      filter.render().find('.filter--sort').trigger('hover:enter');
	    });
	    html.find('.search_all').on('hover:enter', function () {
	      clearInterval(balanser_timer);
	      _this5.searchAll();
	    });
	    scroll.append(html);
	    this.loading(false);
	    balanser_timer = setInterval(function () {
	      tic--;
	      html.find('.timeout').text(tic);
	      if (tic == 0) {
	        clearInterval(balanser_timer);
	        var keys = filter_sources.slice(0);
	        if (!keys.length) keys = Lampa.Arrays.getKeys(sources);
	        var indx = keys.indexOf(balanser);
	        var next = null;
	        for (var i = 1; i <= keys.length; i++) {
	          var candidate = keys[(indx + i) % keys.length];
	          if (!isSourceDisabled(candidate)) {
	            next = candidate;
	            break;
	          }
	        }
	        if (next && next !== balanser) {
	          balanser = next;
	          if (Lampa.Activity.active().activity == _this5.activity) _this5.changeBalanser(balanser);
	        }
	      }
	    }, 1000);
	  };
	  this.searchAll = function () {
	    var _this6 = this;
	    this.reset();
	    this.loading(true);
	    var params = {
	      title: object.movie.title || object.movie.name,
	      original_title: object.movie.original_title || object.movie.original_name,
	      imdb_id: object.movie.imdb_id,
	      tmdb_id: getTmdbId(object.movie),
	      kinopoisk_id: object.movie.kinopoisk_id,
	      mal_id: object.movie.mal_id,
	      year: getYear(object.movie)
	    };
	    api_client.search(params, filter_sources, function (json) {
	      _this6.loading(false);
	      if (json && json.ok && Array.isArray(json.items) && json.items.length) {
	        _this6.similars(json.items);
	      } else {
	        _this6.empty();
	      }
	    }, function () {
	      _this6.loading(false);
	      _this6.empty();
	    });
	  };
	  this.getLastEpisode = function (items) {
	    var last_episode = 0;
	    items.forEach(function (e) {
	      if (typeof e.episode !== 'undefined') last_episode = Math.max(last_episode, parseInt(e.episode));
	    });
	    return last_episode;
	  };

	  /**
	   * Начать навигацию по файлам
	   */
	  this.start = function () {
	    if (Lampa.Activity.active().activity !== this.activity) return;
	    if (!initialized) {
	      initialized = true;
	      this.initialize();
	    }
	    Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(object.movie));
	    Lampa.Controller.add('content', {
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(scroll.render(), files.render());
	        Lampa.Controller.collectionFocus(last || false, scroll.render());
	      },
	      up: function up() {
	        if (Navigator.canmove('up')) {
	          Navigator.move('up');
	        } else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        Navigator.move('down');
	      },
	      right: function right() {
	        if (Navigator.canmove('right')) Navigator.move('right');else filter.show(Lampa.Lang.translate('title_filter'), 'filter');
	      },
	      left: function left() {
	        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
	      },
	      gone: function gone() {
	        clearInterval(balanser_timer);
	      },
	      back: this.back
	    });
	    Lampa.Controller.toggle('content');
	  };
	  this.render = function () {
	    return files.render();
	  };
	  this.back = function () {
	    Lampa.Activity.backward();
	  };
	  this.pause = function () {
	    this.stop();
	  };
	  this.stop = function () {
	    api_client.clear();
	    clearInterval(balanser_timer);
	    if (source && source.cancel) source.cancel();
	  };
	  this.destroy = function () {
	    api_client.clear();
	    this.clearImages();
	    files.destroy();
	    scroll.destroy();
	    clearInterval(balanser_timer);
	    if (source) source.destroy();
	  };
	}

	var es_string_includes = {};

	var isRegexp;
	var hasRequiredIsRegexp;

	function requireIsRegexp () {
		if (hasRequiredIsRegexp) return isRegexp;
		hasRequiredIsRegexp = 1;

		var isObject = require$$0$2;
		var classof = require$$1$1;
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

		var $ = require$$0$6;
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

	var $$1 = require('../internals/export');
	var $includes = require('../internals/array-includes').includes;
	var fails = require('../internals/fails');
	var addToUnscopables = require('../internals/add-to-unscopables');

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// Safari 26.4- bug
	var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function () {
	  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
	  return [, 1].includes(undefined, 1);
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$1({
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

	var PLUGIN_STORAGE_KEYS = ['BO_FILMIX_TOKEN', 'BO_FILMIX_DEVICE_ID', 'BO_FILMIX_MAX_QUALITY', 'BO_SOURCES', 'BO_SOURCES_SORT', 'BO_SOURCES_HIDE', 'bandera_online_cw_autoinstall_done', 'bandera_online_last_balanser', 'bandera_online_balanser', 'bandera_online_watched_last', 'bandera_online_view'];
	var FILMIX_POLL_INTERVAL = 10000;
	var FILMIX_MAX_QUALITY_KEY = 'BO_FILMIX_MAX_QUALITY';
	var AUTH_KEYS = getAuthKeys();
	var api_base = config.api_base;
	var filmixAuthTimer = null;
	var filmixHeaderLoading = false;
	function sanitizeStoredValue(key) {
	  var value = Lampa.Storage.get(key, '');
	  if (value === 'undefined' || value === 'null') {
	    Lampa.Storage.set(key, '');
	  }
	}
	function normalizeValue(value) {
	  return (value || '').toString().trim();
	}
	function isVisibleSource(key) {
	  return key && key !== 'hdrezka';
	}
	function addQuery(url, params) {
	  var next = url;
	  Object.keys(params || {}).forEach(function (key) {
	    var value = params[key];
	    if (value === null || typeof value === 'undefined' || value === '') return;
	    next = Lampa.Utils.addUrlComponent(next, key + '=' + encodeURIComponent(value));
	  });
	  return next;
	}
	function getErrorText(json) {
	  if (!json) return '';
	  return json.error || json.message || json.error_code || '';
	}
	function showApiError(json, fallback) {
	  Lampa.Noty.show(getErrorText(json) || Lampa.Lang.translate(fallback));
	}
	function normalizeMaxQuality(value) {
	  var parsed = parseInt(value, 10);
	  return isNaN(parsed) || parsed <= 0 ? 0 : parsed;
	}
	function getStoredFilmixMaxQuality() {
	  return normalizeMaxQuality(Lampa.Storage.get(FILMIX_MAX_QUALITY_KEY, 0));
	}
	function setStoredFilmixMaxQuality(value) {
	  var quality = normalizeMaxQuality(value);
	  Lampa.Storage.set(FILMIX_MAX_QUALITY_KEY, quality || '');
	  return quality;
	}
	function getFilmixTitle(quality) {
	  var base = Lampa.Lang.translate('bandera_online_settings_filmix');
	  return quality ? base + ' (' + quality + 'p)' : base;
	}
	function setFilmixTitle(item, quality) {
	  if (!item || !item.length) return;
	  var text = getFilmixTitle(quality);
	  var name = item.find('.settings-param__name');
	  if (name.length) name.text(text);else item.find('span').first().text(text);
	}
	function setFilmixTokenButtonTitle(item) {
	  if (!item || !item.length) return;
	  var status = getFilmixToken() ? Lampa.Lang.translate('bandera_online_filmix_token_state_set') : Lampa.Lang.translate('bandera_online_filmix_token_state_empty');
	  var title = Lampa.Lang.translate('bandera_online_filmix_auth_token') + ' (' + status + ')';
	  var name = item.find('.settings-param__name');
	  if (name.length) name.text(title);
	}
	function getInternalFilmixDeviceId() {
	  return normalizeValue(getFilmixDeviceId()) || normalizeValue(ensureFilmixDeviceId());
	}
	function refreshFilmixTitle(item) {
	  setFilmixTitle(item, getStoredFilmixMaxQuality());
	  var token = getFilmixToken();
	  if (!token || filmixHeaderLoading) return;
	  filmixHeaderLoading = true;
	  requestFilmixUser(token, function (json) {
	    filmixHeaderLoading = false;
	    if (!json || !json.ok || !json.authorized) {
	      return;
	    }
	    var quality = setStoredFilmixMaxQuality(json.max_quality);
	    setFilmixTitle(item, quality);
	  }, function () {
	    filmixHeaderLoading = false;
	  });
	}
	function buildSourcesList() {
	  var sources = sourcesStore.available_sources;
	  if (!sources.length) {
	    return $("<div class=\"settings-param-text\">".concat(Lampa.Lang.translate('bandera_online_sources_empty'), "</div>"));
	  }
	  var hidden = sourcesStore.getHidden();
	  var sorted = sourcesStore.getSorted();
	  var items = sources.map(function (item) {
	    var key = sourcesStore.normalizeName(item.key || item.name);
	    return {
	      key: key,
	      title: sourcesStore.getTitle(key),
	      enabled: item.enabled !== false
	    };
	  }).filter(function (item) {
	    return isVisibleSource(item.key);
	  });
	  if (sorted.length) {
	    var ordered = [];
	    sorted.forEach(function (key) {
	      var found = items.find(function (item) {
	        return item.key === key;
	      });
	      if (found) ordered.push(found);
	    });
	    items.forEach(function (item) {
	      if (!sorted.includes(item.key)) ordered.push(item);
	    });
	    items = ordered;
	  }
	  var list = $('<div class="menu-edit-list"></div>');
	  items.forEach(function (item) {
	    var status_key = item.enabled ? 'bandera_online_sources_enabled' : 'bandera_online_sources_disabled';
	    var status = Lampa.Lang.translate(status_key);
	    var row = $("<div class=\"menu-edit-list__item bandera-online-sources__item\" data-key=\"".concat(item.key, "\">\n            <div class=\"menu-edit-list__title bandera-online-sources__title selector\">\n                <span class=\"bandera-online-sources__name\">").concat(item.title || item.key, "</span>\n                <span class=\"bandera-online-sources__status ").concat(item.enabled ? 'is-enabled' : 'is-disabled', "\">").concat(status, "</span>\n            </div>\n            <div class=\"menu-edit-list__move move-up selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 12L11 3L20 12\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__move move-down selector\">\n                <svg width=\"22\" height=\"14\" viewBox=\"0 0 22 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M2 2L11 11L20 2\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n            <div class=\"menu-edit-list__toggle toggle selector\">\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"1.89111\" y=\"1.78369\" width=\"21.793\" height=\"21.793\" rx=\"3.5\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M7.44873 12.9658L10.8179 16.3349L18.1269 9.02588\" stroke=\"currentColor\" stroke-width=\"3\" class=\"dot\" opacity=\"0\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n        </div>"));
	    row.toggleClass('hidden', hidden.includes(item.key));
	    row.find('.dot').attr('opacity', row.hasClass('hidden') ? 0 : 1);
	    row.find('.move-up').on('hover:enter', function () {
	      var prev = row.prev();
	      if (prev.length) row.insertBefore(prev);
	    });
	    row.find('.move-down').on('hover:enter', function () {
	      var next = row.next();
	      if (next.length) row.insertAfter(next);
	    });
	    row.find('.toggle').on('hover:enter', function () {
	      row.toggleClass('hidden');
	      row.find('.dot').attr('opacity', row.hasClass('hidden') ? 0 : 1);
	    });
	    list.append(row);
	  });
	  return list;
	}
	function saveSourcesSettings(list) {
	  var sort = [];
	  var hide = [];
	  list.find('.bandera-online-sources__item').each(function () {
	    var key = $(this).data('key');
	    sort.push(key);
	    if ($(this).hasClass('hidden')) hide.push(key);
	  });
	  sourcesStore.saveSorted(sort);
	  sourcesStore.saveHidden(hide);
	}
	function stopFilmixPolling() {
	  if (filmixAuthTimer) {
	    clearInterval(filmixAuthTimer);
	    filmixAuthTimer = null;
	  }
	}
	function saveFilmixToken(value) {
	  var token = normalizeValue(value);
	  setFilmixToken(token);
	  setStoredFilmixMaxQuality(0);
	  if (token) {
	    getInternalFilmixDeviceId();
	    Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_token_saved'));
	  } else {
	    Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_auth_reset_done'));
	  }
	  Lampa.Settings.update();
	}
	function openFilmixTokenInput() {
	  var current = getFilmixToken();
	  if (Lampa.Input && typeof Lampa.Input.edit === 'function') {
	    Lampa.Input.edit({
	      title: Lampa.Lang.translate('bandera_online_filmix_auth_token'),
	      value: current,
	      free: true,
	      nosave: true,
	      nomic: true
	    }, function (value) {
	      saveFilmixToken(value);
	    });
	    return;
	  }
	  if (typeof window.prompt !== 'function') {
	    Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_auth_error'));
	    return;
	  }
	  var next = window.prompt(Lampa.Lang.translate('bandera_online_filmix_auth_token'), current);
	  if (next === null) return;
	  saveFilmixToken(next);
	}
	function requestFilmixUser(token, success, fail, deviceIdOverride) {
	  var authToken = normalizeValue(token);
	  var deviceId = normalizeValue(deviceIdOverride) || getInternalFilmixDeviceId();
	  if (!authToken) {
	    if (fail) fail(Lampa.Lang.translate('bandera_online_filmix_auth_required'));
	    return;
	  }
	  if (!deviceId) {
	    if (fail) fail(Lampa.Lang.translate('bandera_online_filmix_auth_error'));
	    return;
	  }
	  var network = new Lampa.Reguest();
	  var url = addQuery(api_base + '/filmix/user', {
	    token: authToken,
	    device_id: deviceId
	  });
	  network.silent(url, function (json) {
	    if (success) success(json);
	  }, function (a, c) {
	    if (fail) fail(network.errorDecode(a, c));
	  });
	}
	function openFilmixAuthModal(token, userCode, deviceId) {
	  stopFilmixPolling();
	  var code = normalizeValue(userCode);
	  var status = Lampa.Lang.translate('bandera_online_filmix_modal_wait');
	  var modal = $("\n        <div>\n            <div class=\"broadcast__text\">".concat(Lampa.Lang.translate('bandera_online_filmix_modal_text'), "</div>\n            <div class=\"broadcast__device selector\" style=\"text-align:center;background-color:darkslategrey;color:white;\">").concat(code, "</div>\n            <br>\n            <div class=\"broadcast__scan\"><div></div></div>\n            <div class=\"settings-param__descr\" style=\"margin-top:1em;\">").concat(status, "</div>\n        </div>\n    "));
	  var codeEl = modal.find('.broadcast__device');
	  var statusEl = modal.find('.settings-param__descr');
	  codeEl.on('hover:enter', function () {
	    Lampa.Utils.copyTextToClipboard(code, function () {
	      Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
	    }, function () {
	      Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
	    });
	  });
	  function closeModal() {
	    stopFilmixPolling();
	    Lampa.Modal.close();
	    Lampa.Controller.toggle('settings_component');
	  }
	  function markAuthorized(json) {
	    stopFilmixPolling();
	    setFilmixToken(token);
	    setStoredFilmixMaxQuality(json && json.max_quality);
	    var quality = json && json.max_quality ? json.max_quality + 'p' : 'auto';
	    statusEl.text(Lampa.Lang.translate('bandera_online_filmix_modal_success') + ' (' + quality + ')');
	    Lampa.Settings.update();
	    Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_modal_authorized'));
	    setTimeout(closeModal, 500);
	  }
	  filmixAuthTimer = setInterval(function () {
	    requestFilmixUser(token, function (json) {
	      if (!json || !json.ok) {
	        return;
	      }
	      if (json.authorized) {
	        markAuthorized(json);
	      }
	    }, null, deviceId);
	  }, FILMIX_POLL_INTERVAL);
	  Lampa.Modal.open({
	    title: Lampa.Lang.translate('bandera_online_filmix_modal_title'),
	    html: modal,
	    size: 'small',
	    scroll_to_center: true,
	    select: codeEl[0],
	    onBack: function onBack() {
	      closeModal();
	    }
	  });
	}
	function startFilmixAuthFlow() {
	  var deviceId = Lampa.Utils.uid(16);
	  var network = new Lampa.Reguest();
	  var url = addQuery(api_base + '/filmix/key', {
	    device_id: deviceId
	  });
	  setFilmixDeviceId(deviceId);
	  setFilmixToken('');
	  setStoredFilmixMaxQuality(0);
	  Lampa.Settings.update();
	  network.silent(url, function (json) {
	    if (!json || !json.ok) {
	      showApiError(json, 'bandera_online_filmix_auth_error');
	      return;
	    }
	    var token = normalizeValue(json.code);
	    var userCode = normalizeValue(json.user_code);
	    if (!token || !userCode) {
	      showApiError(json, 'bandera_online_filmix_auth_error');
	      return;
	    }
	    openFilmixAuthModal(token, userCode, deviceId);
	  }, function (a, c) {
	    Lampa.Noty.show(network.errorDecode(a, c));
	  });
	}
	function checkFilmixAuth() {
	  var token = getFilmixToken();
	  if (!token) {
	    Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_auth_required'));
	    return;
	  }
	  requestFilmixUser(token, function (json) {
	    if (!json || !json.ok) {
	      showApiError(json, 'bandera_online_filmix_auth_error');
	      return;
	    }
	    if (!json.authorized) {
	      Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_auth_unauthorized'));
	      return;
	    }
	    setStoredFilmixMaxQuality(json.max_quality);
	    Lampa.Settings.update();
	    var quality = json.max_quality ? json.max_quality + 'p' : 'auto';
	    Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_auth_ok') + ' (' + quality + ')');
	  }, function (text) {
	    Lampa.Noty.show(text || Lampa.Lang.translate('bandera_online_filmix_auth_error'));
	  });
	}
	function resetFilmixAuth() {
	  setFilmixToken('');
	  setStoredFilmixMaxQuality(0);
	  Lampa.Settings.update();
	  Lampa.Noty.show(Lampa.Lang.translate('bandera_online_filmix_auth_reset_done'));
	}
	function openThanksModal() {
	  openQrModal();
	}
	function resetPluginStorage() {
	  PLUGIN_STORAGE_KEYS.forEach(function (key) {
	    Lampa.Storage.set(key, '');
	  });
	  sourcesStore.available_sources = [];
	  sourcesStore.titles = {};
	  Lampa.Settings.update();
	  Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_reset_done'));
	}
	function openSourcesModal() {
	  var wrapper = $('<div class="bandera-online-sources"></div>');
	  var list = null;
	  var actions = null;
	  function buildActions() {
	    var container = $('<div class="bandera-online-sources__actions"></div>');
	    var syncBtn = $('<div class="bandera-online-sources__btn selector" data-action="sync" title="Синхронізувати"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/></svg></div>');
	    var saveBtn = $('<div class="bandera-online-sources__btn selector" data-action="save" title="Зберегти"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg></div>');
	    var resetBtn = $('<div class="bandera-online-sources__btn selector" data-action="reset" title="Скинути"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8.5 2 6 4.5 6 7.5c0 1.5.5 2.8 1.3 3.8L6 14l2.5 1.5c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2L18 14l-1.3-2.7c.8-1 1.3-2.3 1.3-3.8C18 4.5 15.5 2 12 2z"/><circle cx="9.5" cy="8" r="1.2" fill="currentColor" stroke="none"/><circle cx="14.5" cy="8" r="1.2" fill="currentColor" stroke="none"/><path d="M10 11h4v6c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-6z"/></svg></div>');
	    container.append(syncBtn).append(saveBtn).append(resetBtn);
	    return container;
	  }
	  function render(update_modal) {
	    list = buildSourcesList();
	    if (!actions) actions = buildActions();
	    wrapper.empty().append(actions).append(list);
	    if (update_modal && Lampa.Modal && Lampa.Modal.update) {
	      Lampa.Modal.update(wrapper);

	      // Restore focus to first button after update
	      setTimeout(function () {
	        var firstBtn = wrapper.find('[data-action="sync"]')[0];
	        if (firstBtn) {
	          Lampa.Controller.collectionFocus(firstBtn, wrapper[0]);
	        }
	      }, 50);
	    }
	  }
	  function sync() {
	    var network = new Lampa.Reguest();
	    network.silent(api_base + '/sources', function (json) {
	      if (json && json.ok && Array.isArray(json.sources)) {
	        sourcesStore.saveAvailable(json.sources);
	        render(true);
	        Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_sync_success'));
	      } else {
	        Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_sync_error'));
	      }
	    }, function () {
	      Lampa.Noty.show(Lampa.Lang.translate('bandera_online_sources_sync_error'));
	    });
	  }
	  function closeAndSave() {
	    if (list && list.hasClass('menu-edit-list')) saveSourcesSettings(list);
	    Lampa.Modal.close();
	    Lampa.Controller.toggle('settings_component');
	  }
	  render();
	  wrapper.on('click hover:enter', '[data-action="sync"]', sync);
	  wrapper.on('click hover:enter', '[data-action="save"]', closeAndSave);
	  wrapper.on('click hover:enter', '[data-action="reset"]', function () {
	    resetPluginStorage();
	    render(true);
	  });
	  Lampa.Modal.open({
	    title: Lampa.Lang.translate('bandera_online_settings_sources'),
	    html: wrapper,
	    size: 'medium',
	    scroll_to_center: true,
	    select: wrapper.find('[data-action="sync"]')[0],
	    onBack: function onBack() {
	      closeAndSave();
	    }
	  });
	}
	function initSettings() {
	  var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
	  if (!SettingsApi || !SettingsApi.addComponent) return;
	  sanitizeStoredValue(AUTH_KEYS.filmixToken);
	  sanitizeStoredValue(AUTH_KEYS.filmixDeviceId);
	  sanitizeStoredValue(FILMIX_MAX_QUALITY_KEY);
	  if (getFilmixToken()) {
	    getInternalFilmixDeviceId();
	  }
	  SettingsApi.addComponent({
	    component: 'bandera_online',
	    name: Lampa.Lang.translate('bandera_online_settings_title'),
	    icon: "<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"currentColor\"></rect>\n            <path d=\"M0 10.6667H28V0H0V10.6667Z\" fill=\"#156DD1\"></path>\n            <path d=\"M0 20H28V10.6667H0V20Z\" fill=\"#FFD948\"></path>\n        </svg>"
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      name: 'bandera_online_thanks',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_settings_thanks')
	    },
	    onChange: function onChange() {
	      openThanksModal();
	    }
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      name: 'bandera_online_sources',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_settings_sources')
	    },
	    onChange: function onChange() {
	      openSourcesModal();
	    }
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      type: 'title'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_settings_filmix')
	    },
	    onRender: function onRender(item) {
	      refreshFilmixTitle(item);
	    }
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      name: 'bandera_online_filmix_auth_start',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_filmix_auth_start')
	    },
	    onChange: function onChange() {
	      startFilmixAuthFlow();
	    }
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      name: 'bandera_online_filmix_auth_token',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_filmix_auth_token')
	    },
	    onRender: function onRender(item) {
	      setFilmixTokenButtonTitle(item);
	    },
	    onChange: function onChange() {
	      openFilmixTokenInput();
	    }
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      name: 'bandera_online_filmix_auth_check',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_filmix_auth_check')
	    },
	    onChange: function onChange() {
	      checkFilmixAuth();
	    }
	  });
	  SettingsApi.addParam({
	    component: 'bandera_online',
	    param: {
	      name: 'bandera_online_filmix_auth_reset',
	      type: 'button'
	    },
	    field: {
	      name: Lampa.Lang.translate('bandera_online_filmix_auth_reset')
	    },
	    onChange: function onChange() {
	      resetFilmixAuth();
	    }
	  });
	}

	var communityWatchesPlugin = {
	  url: config.community_watches_url,
	  name: config.community_watches_name,
	  status: 1
	};
	var communityWatchesAutoinstallFlag = config.storage_prefixes.cw_autoinstall_done;
	function normalizePluginUrl(url) {
	  return (url || '').toString().trim().replace(/[?#].*$/, '').replace(/\/+$/, '').replace(/^https?:\/\//i, '').toLowerCase();
	}
	function isCommunityWatchesInstalled(plugin) {
	  if (!plugin) return false;
	  if (typeof plugin === 'string') {
	    return normalizePluginUrl(plugin) === normalizePluginUrl(communityWatchesPlugin.url);
	  }
	  if (plugin.name === communityWatchesPlugin.name) return true;
	  return normalizePluginUrl(plugin.url) === normalizePluginUrl(communityWatchesPlugin.url);
	}
	function cleanupCommunityWatchesDuplicates(plugins) {
	  var hasCommunityWatches = false;
	  var duplicates = 0;
	  var uniqPlugins = [];
	  plugins.forEach(function (plugin) {
	    if (isCommunityWatchesInstalled(plugin)) {
	      if (hasCommunityWatches) duplicates++;else {
	        hasCommunityWatches = true;
	        uniqPlugins.push(plugin);
	      }
	      return;
	    }
	    uniqPlugins.push(plugin);
	  });
	  return {
	    hasCommunityWatches: hasCommunityWatches,
	    duplicates: duplicates,
	    plugins: uniqPlugins
	  };
	}
	function ensureCommunityWatchesPlugin() {
	  if (Lampa.Storage.get(communityWatchesAutoinstallFlag, false)) return;
	  var plugins = Lampa.Storage.get('plugins', []);
	  if (!Array.isArray(plugins)) plugins = [];
	  var state = cleanupCommunityWatchesDuplicates(plugins);
	  if (state.duplicates > 0) {
	    Lampa.Storage.set('plugins', state.plugins);
	  }
	  if (!state.hasCommunityWatches) {
	    Lampa.Plugins.add({
	      url: communityWatchesPlugin.url,
	      name: communityWatchesPlugin.name,
	      status: communityWatchesPlugin.status
	    });
	  }
	  Lampa.Storage.set(communityWatchesAutoinstallFlag, true);
	}
	function startPlugin() {
	  window.bandera_online = true;
	  ensureCommunityWatchesPlugin();
	  function resetTemplates() {
	    Lampa.Template.add('bandera_online_full', "<div class=\"online-prestige online-prestige--full selector\">\n            <div class=\"online-prestige__img\">\n                <img alt=\"\">\n                <div class=\"online-prestige__loader\"></div>\n            </div>\n            <div class=\"online-prestige__body\">\n                <div class=\"online-prestige__head\">\n                    <div class=\"online-prestige__title\">{title}</div>\n                    <div class=\"online-prestige__time\">{time}</div>\n                </div>\n\n                <div class=\"online-prestige__timeline\"></div>\n\n                <div class=\"online-prestige__footer\">\n                    <div class=\"online-prestige__info\">{info}</div>\n                    <div class=\"online-prestige__quality\">{quality}</div>\n                </div>\n            </div>\n        </div>");
	    Lampa.Template.add('bandera_online_does_not_answer', "<div class=\"online-empty\">\n            <div class=\"online-empty__title\">\n                #{online_balanser_dont_work}\n            </div>\n            <div class=\"online-empty__time\">\n                #{online_balanser_timeout}\n            </div>\n            <div class=\"online-empty__buttons\">\n                <div class=\"online-empty__button selector cancel\">#{cancel}</div>\n                <div class=\"online-empty__button selector change\">#{online_change_balanser}</div>\n                <div class=\"online-empty__button selector search_all\">#{bandera_online_search_all}</div>\n            </div>\n            <div class=\"online-empty__templates\">\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n            </div>\n        </div>");
	    Lampa.Template.add('bandera_online_rate', "<div class=\"online-prestige-rate\">\n            <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z\" fill=\"#fff\"></path>\n            </svg>\n            <span>{rate}</span>\n        </div>");
	    Lampa.Template.add('bandera_online_folder', "<div class=\"online-prestige online-prestige--folder selector\">\n            <div class=\"online-prestige__folder\">\n                <svg viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"></rect>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"></path>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"></rect>\n                </svg>\n            </div>\n            <div class=\"online-prestige__body\">\n                <div class=\"online-prestige__head\">\n                    <div class=\"online-prestige__title\">{title}</div>\n                    <div class=\"online-prestige__time\">{time}</div>\n                </div>\n\n                <div class=\"online-prestige__footer\">\n                    <div class=\"online-prestige__info\">{info}</div>\n                </div>\n            </div>\n        </div>");
	    Lampa.Template.add('bandera_online_watched', "<div class=\"online-prestige online-prestige-watched selector\">\n            <div class=\"online-prestige-watched__icon\">\n                <svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"10.5\" cy=\"10.5\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M14.8477 10.5628L8.20312 14.399L8.20313 6.72656L14.8477 10.5628Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"online-prestige-watched__body\">\n                \n            </div>\n        </div>");
	  }
	  var manifest = {
	    type: 'video',
	    version: '2.8.5',
	    name: '[Free] Bandera Online',
	    //description: 'Плагин для просмотра онлайн сериалов и фильмов',
	    component: 'bandera_online',
	    onContextMenu: function onContextMenu(object) {
	      return {
	        name: Lampa.Lang.translate('online_watch'),
	        description: ''
	      };
	    },
	    onContextLauch: function onContextLauch(object) {
	      resetTemplates();
	      Lampa.Component.add('bandera_online', component);
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('title_online'),
	        component: 'bandera_online',
	        search: object.title,
	        search_one: object.title,
	        search_two: object.original_title,
	        movie: object,
	        page: 1
	      });
	    }
	  };
	  Lampa.Manifest.plugins = manifest;
	  Lampa.Lang.add({
	    online_watch: {
	      ru: 'Смотреть онлайн',
	      en: 'Watch online',
	      ua: 'Дивитися онлайн',
	      zh: '在线观看'
	    },
	    online_no_watch_history: {
	      ru: 'Нет истории просмотра',
	      en: 'No browsing history',
	      ua: 'Немає історії перегляду',
	      zh: '没有浏览历史'
	    },
	    online_video: {
	      ru: 'Видео',
	      en: 'Video',
	      ua: 'Відео',
	      zh: '视频'
	    },
	    online_nolink: {
	      ru: 'Не удалось извлечь ссылку',
	      uk: 'Неможливо отримати посилання',
	      en: 'Failed to fetch link',
	      zh: '获取链接失败'
	    },
	    online_waitlink: {
	      ru: 'Работаем над извлечением ссылки, подождите...',
	      uk: 'Працюємо над отриманням посилання, зачекайте...',
	      en: 'Working on extracting the link, please wait...',
	      zh: '正在提取链接，请稍候...'
	    },
	    online_balanser: {
	      ru: 'Источник',
	      uk: 'Джерело',
	      en: 'Source',
	      zh: '来源'
	    },
	    helper_online_file: {
	      ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
	      uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
	      en: 'Hold the "OK" key to bring up the context menu',
	      zh: '按住“确定”键调出上下文菜单'
	    },
	    online_query_start: {
	      ru: 'По запросу',
	      uk: 'На запит',
	      en: 'On request',
	      zh: '根据要求'
	    },
	    online_query_end: {
	      ru: 'нет результатов',
	      uk: 'немає результатів',
	      en: 'no results',
	      zh: '没有结果'
	    },
	    title_proxy: {
	      ru: 'Прокси',
	      uk: 'Проксі',
	      en: 'Proxy',
	      zh: '代理人'
	    },
	    online_proxy_title: {
	      ru: 'Основной прокси',
	      uk: 'Основний проксі',
	      en: 'Main proxy',
	      zh: '主要代理'
	    },
	    online_proxy_descr: {
	      ru: 'Будет использоваться для всех балансеров',
	      uk: 'Використовуватиметься для всіх балансерів',
	      en: 'Will be used for all balancers',
	      zh: '将用于所有平衡器'
	    },
	    online_proxy_placeholder: {
	      ru: 'Например: http://proxy.com',
	      uk: 'Наприклад: http://proxy.com',
	      en: 'For example: http://proxy.com',
	      zh: '例如：http://proxy.com'
	    },
	    online_voice_subscribe: {
	      ru: 'Подписаться на перевод',
	      uk: 'Підписатися на переклад',
	      en: 'Subscribe to translation',
	      zh: '订阅翻译'
	    },
	    online_voice_success: {
	      ru: 'Вы успешно подписались',
	      uk: 'Ви успішно підписалися',
	      en: 'You have successfully subscribed',
	      zh: '您已成功订阅'
	    },
	    online_voice_error: {
	      ru: 'Возникла ошибка',
	      uk: 'Виникла помилка',
	      en: 'An error has occurred',
	      zh: '发生了错误'
	    },
	    online_clear_all_marks: {
	      ru: 'Очистить все метки',
	      uk: 'Очистити всі мітки',
	      en: 'Clear all labels',
	      zh: '清除所有标签'
	    },
	    online_clear_all_timecodes: {
	      ru: 'Очистить все тайм-коды',
	      uk: 'Очистити всі тайм-коди',
	      en: 'Clear all timecodes',
	      zh: '清除所有时间代码'
	    },
	    online_change_balanser: {
	      ru: 'Изменить балансер',
	      uk: 'Змінити балансер',
	      en: 'Change balancer',
	      zh: '更改平衡器'
	    },
	    online_balanser_dont_work: {
	      ru: 'Балансер ({balanser}) не отвечает на запрос.',
	      uk: 'Балансер ({balanser}) не відповідає на запит.',
	      en: 'Balancer ({balanser}) does not respond to the request.',
	      zh: '平衡器（{balanser}）未响应请求。'
	    },
	    online_balanser_timeout: {
	      ru: 'Балансер будет переключен автоматически через <span class="timeout">10</span> секунд.',
	      uk: 'Балансер буде переключено автоматично через <span class="timeout">10</span> секунд.',
	      en: 'Balancer will be switched automatically in <span class="timeout">10</span> seconds.',
	      zh: '平衡器将在<span class="timeout">10</span>秒内自动切换。'
	    },
	    bandera_online_settings_title: {
	      ru: 'Bandera Online',
	      uk: 'Bandera Online',
	      ua: 'Bandera Online',
	      en: 'Bandera Online'
	    },
	    bandera_online_settings_thanks: {
	      ru: 'Подяка',
	      uk: 'Подяка',
	      ua: 'Подяка',
	      en: 'Thanks'
	    },
	    bandera_online_settings_sources: {
	      ru: 'Джерела',
	      uk: 'Джерела',
	      ua: 'Джерела',
	      en: 'Sources'
	    },
	    bandera_online_sources_sync: {
	      ru: 'Синхронізувати джерела',
	      uk: 'Синхронізувати джерела',
	      ua: 'Синхронізувати джерела',
	      en: 'Sync sources'
	    },
	    bandera_online_sources_save: {
	      ru: 'Зберегти та закрити',
	      uk: 'Зберегти та закрити',
	      ua: 'Зберегти та закрити',
	      en: 'Save and close'
	    },
	    bandera_online_search_all: {
	      ru: 'Поиск по всем источникам',
	      uk: 'Пошук по всіх джерелах',
	      ua: 'Пошук по всіх джерелах',
	      en: 'Search all sources'
	    },
	    bandera_online_sources_empty: {
	      ru: 'Список джерел ще не синхронізований.',
	      uk: 'Список джерел ще не синхронізований.',
	      ua: 'Список джерел ще не синхронізований.',
	      en: 'Sources list has not been synced yet.'
	    },
	    bandera_online_sources_enabled: {
	      ru: 'Увімкнено',
	      uk: 'Увімкнено',
	      ua: 'Увімкнено',
	      en: 'Enabled'
	    },
	    bandera_online_sources_disabled: {
	      ru: 'Мертвий',
	      uk: 'Мертвий',
	      ua: 'Мертвий',
	      en: 'Died'
	    },
	    bandera_online_sources_sync_success: {
	      ru: 'Джерела синхронізовано',
	      uk: 'Джерела синхронізовано',
	      ua: 'Джерела синхронізовано',
	      en: 'Sources synced'
	    },
	    bandera_online_sources_sync_error: {
	      ru: 'Не вдалося синхронізувати джерела',
	      uk: 'Не вдалося синхронізувати джерела',
	      ua: 'Не вдалося синхронізувати джерела',
	      en: 'Failed to sync sources'
	    },
	    bandera_online_sources_reset: {
	      ru: 'Скинути налаштування',
	      uk: 'Скинути налаштування',
	      ua: 'Скинути налаштування',
	      en: 'Reset settings'
	    },
	    bandera_online_sources_reset_done: {
	      ru: 'Налаштування скинуто',
	      uk: 'Налаштування скинуто',
	      ua: 'Налаштування скинуто',
	      en: 'Settings reset'
	    },
	    bandera_online_settings_filmix: {
	      ru: 'Filmix',
	      uk: 'Filmix',
	      ua: 'Filmix',
	      en: 'Filmix'
	    },
	    bandera_online_filmix_device_id: {
	      ru: 'Filmix device_id',
	      uk: 'Filmix device_id',
	      ua: 'Filmix device_id',
	      en: 'Filmix device_id'
	    },
	    bandera_online_filmix_device_id_descr: {
	      ru: 'Ідентифікатор пристрою для Filmix API',
	      uk: 'Ідентифікатор пристрою для Filmix API',
	      ua: 'Ідентифікатор пристрою для Filmix API',
	      en: 'Device ID for Filmix API'
	    },
	    bandera_online_filmix_device_generate: {
	      ru: 'Згенерувати новий device_id',
	      uk: 'Згенерувати новий device_id',
	      ua: 'Згенерувати новий device_id',
	      en: 'Generate new device_id'
	    },
	    bandera_online_filmix_device_regenerated: {
	      ru: 'Новий Filmix device_id збережено',
	      uk: 'Новий Filmix device_id збережено',
	      ua: 'Новий Filmix device_id збережено',
	      en: 'New Filmix device_id saved'
	    },
	    bandera_online_filmix_token: {
	      ru: 'Filmix token',
	      uk: 'Filmix token',
	      ua: 'Filmix token',
	      en: 'Filmix token'
	    },
	    bandera_online_filmix_token_descr: {
	      ru: 'Токен авторизації Filmix (вводиться користувачем вручну)',
	      uk: 'Токен авторизації Filmix (вводиться користувачем вручну)',
	      ua: 'Токен авторизації Filmix (вводиться користувачем вручну)',
	      en: 'Filmix auth token (entered manually by user)'
	    },
	    bandera_online_filmix_auth_start: {
	      ru: 'Запустити Filmix авторизацію (код)',
	      uk: 'Запустити Filmix авторизацію (код)',
	      ua: 'Запустити Filmix авторизацію (код)',
	      en: 'Start Filmix auth (code)'
	    },
	    bandera_online_filmix_auth_token: {
	      ru: 'Ввести Filmix token',
	      uk: 'Ввести Filmix token',
	      ua: 'Ввести Filmix token',
	      en: 'Enter Filmix token'
	    },
	    bandera_online_filmix_token_state_set: {
	      ru: 'встановлено',
	      uk: 'встановлено',
	      ua: 'встановлено',
	      en: 'set'
	    },
	    bandera_online_filmix_token_state_empty: {
	      ru: 'не задано',
	      uk: 'не задано',
	      ua: 'не задано',
	      en: 'not set'
	    },
	    bandera_online_filmix_token_saved: {
	      ru: 'Filmix token збережено',
	      uk: 'Filmix token збережено',
	      ua: 'Filmix token збережено',
	      en: 'Filmix token saved'
	    },
	    bandera_online_filmix_auth_check: {
	      ru: 'Перевірити Filmix авторизацію',
	      uk: 'Перевірити Filmix авторизацію',
	      ua: 'Перевірити Filmix авторизацію',
	      en: 'Check Filmix auth'
	    },
	    bandera_online_filmix_auth_reset: {
	      ru: 'Скинути Filmix token',
	      uk: 'Скинути Filmix token',
	      ua: 'Скинути Filmix token',
	      en: 'Reset Filmix token'
	    },
	    bandera_online_filmix_auth_reset_done: {
	      ru: 'Filmix token очищено',
	      uk: 'Filmix token очищено',
	      ua: 'Filmix token очищено',
	      en: 'Filmix token cleared'
	    },
	    bandera_online_filmix_auth_required: {
	      ru: 'Для Filmix потрібен token',
	      uk: 'Для Filmix потрібен token',
	      ua: 'Для Filmix потрібен token',
	      en: 'Filmix requires token'
	    },
	    bandera_online_filmix_auth_error: {
	      ru: 'Помилка авторизації Filmix',
	      uk: 'Помилка авторизації Filmix',
	      ua: 'Помилка авторизації Filmix',
	      en: 'Filmix auth error'
	    },
	    bandera_online_filmix_auth_unauthorized: {
	      ru: 'Filmix: неавторизовано',
	      uk: 'Filmix: неавторизовано',
	      ua: 'Filmix: неавторизовано',
	      en: 'Filmix: unauthorized'
	    },
	    bandera_online_filmix_auth_ok: {
	      ru: 'Filmix: авторизація активна',
	      uk: 'Filmix: авторизація активна',
	      ua: 'Filmix: авторизація активна',
	      en: 'Filmix: authorized'
	    },
	    bandera_online_filmix_modal_title: {
	      ru: 'Filmix авторизація',
	      uk: 'Filmix авторизація',
	      ua: 'Filmix авторизація',
	      en: 'Filmix authorization'
	    },
	    bandera_online_filmix_modal_text: {
	      ru: 'Введіть код на сторінці https://filmix.my/consoles',
	      uk: 'Введіть код на сторінці https://filmix.my/consoles',
	      ua: 'Введіть код на сторінці https://filmix.my/consoles',
	      en: 'Enter code at https://filmix.my/consoles'
	    },
	    bandera_online_filmix_modal_wait: {
	      ru: 'Очікуємо підтвердження...',
	      uk: 'Очікуємо підтвердження...',
	      ua: 'Очікуємо підтвердження...',
	      en: 'Waiting for authorization...'
	    },
	    bandera_online_filmix_modal_success: {
	      ru: 'Авторизація підтверджена',
	      uk: 'Авторизація підтверджена',
	      ua: 'Авторизація підтверджена',
	      en: 'Authorization confirmed'
	    },
	    bandera_online_filmix_modal_authorized: {
	      ru: 'Filmix авторизацію збережено',
	      uk: 'Filmix авторизацію збережено',
	      ua: 'Filmix авторизацію збережено',
	      en: 'Filmix auth saved'
	    }
	  });
	  initSettings();
	  Lampa.Template.add('bandera_online_css', "\n        <style id=\"bandera_online_style\">\n        @charset 'UTF-8';.online-prestige{position:relative;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;will-change:transform}.online-prestige__body{padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}@media screen and (max-width:480px){.online-prestige__body{padding:.8em 1.2em}}.online-prestige__img{position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}.online-prestige__img>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.online-prestige__img--loaded>img{opacity:1}@media screen and (max-width:480px){.online-prestige__img{width:7em;min-height:6em}}.online-prestige__folder{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige__folder>svg{width:4.4em !important;height:4.4em !important}.online-prestige__viewed{position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}.online-prestige__viewed>svg{width:1.5em !important;height:1.5em !important}.online-prestige__episode-number{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}.online-prestige__loader{position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain}.online-prestige__head,.online-prestige__footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__timeline{margin:.8em 0}.online-prestige__timeline>.time-line{display:block !important}.online-prestige__title{font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}@media screen and (max-width:480px){.online-prestige__title{font-size:1.4em}}.online-prestige__time{padding-left:2em}.online-prestige__info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__info>*{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.online-prestige__quality{padding-left:1em;white-space:nowrap}.online-prestige__scan-file{position:absolute;bottom:0;left:0;right:0}.online-prestige__scan-file .broadcast__scan{margin:0}.online-prestige .online-prestige-split{font-size:.8em;margin:0 1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige.focus::after{content:'';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;-moz-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}.online-prestige+.online-prestige{margin-top:1.5em}.online-prestige--folder .online-prestige__footer{margin-top:.8em}.online-prestige-watched{padding:1em}.online-prestige-watched__icon>svg{width:1.5em;height:1.5em}.online-prestige-watched__body{padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.online-prestige-watched__body>span+span::before{content:' ● ';vertical-align:top;display:inline-block;margin:0 .5em}.online-prestige-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige-rate>svg{width:1.3em !important;height:1.3em !important}.online-prestige-rate>span{font-weight:600;font-size:1.1em;padding-left:.7em}.online-empty{line-height:1.4}.online-empty__title{font-size:1.8em;margin-bottom:.3em}.online-empty__time{font-size:1.2em;font-weight:300;margin-bottom:1.6em}.online-empty__buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-empty__buttons>*+*{margin-left:1em}.online-empty__button{background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;-moz-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}.online-empty__button.focus{background:#fff;color:black}.online-empty__templates .online-empty-template:nth-child(2){opacity:.5}.online-empty__templates .online-empty-template:nth-child(3){opacity:.2}.online-empty-template{background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template>*{background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template__ico{width:4em;height:4em;margin-right:2.4em}.online-empty-template__body{height:1.7em;width:70%}.online-empty-template+.online-empty-template{margin-top:1em}\n        .bandera-online-sources__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.5em;margin-bottom:.8em;padding-bottom:.6em;border-bottom:1px solid rgba(255,255,255,0.06);width:100%}.bandera-online-sources__btn{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:2.4em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:.5em;border-radius:.5em;background:rgba(255,255,255,0.06);cursor:pointer;color:rgba(255,255,255,0.5);-webkit-transition:background .15s,color .15s;-o-transition:background .15s,color .15s;transition:background .15s,color .15s}.bandera-online-sources__btn.focus,.bandera-online-sources__btn:hover{background:rgba(255,255,255,0.15);color:#fff}.bandera-online-sources__btn svg{width:1.2em;height:1.2em}.bandera-online-sources__title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.6em}.bandera-online-sources__name{font-size:1em;line-height:1.2}.bandera-online-sources__status{font-size:.7em;padding:.2em .5em;-webkit-border-radius:.3em;border-radius:.3em;color:#fff;text-transform:uppercase;line-height:1}.bandera-online-sources__status.is-enabled{background-color:#46b85a}.bandera-online-sources__status.is-disabled{background-color:#d24a4a}\n        </style>\n    ");
	  if (!$('#bandera_online_style').length) {
	    $('body').append(Lampa.Template.get('bandera_online_css', {}, true));
	  }
	  var button = "<div class=\"full-start__button selector view--online view--bandera-online\" data-subtitle=\"[Free] Bandera Online v".concat(manifest.version, "\">\n        <svg viewBox=\"0 -4 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g clip-path=\"url(#clip0_503_2809)\"> <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"white\"></rect> <mask id=\"mask0_503_2809\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"28\" height=\"20\"> <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"white\"></rect> </mask> <g mask=\"url(#mask0_503_2809)\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 10.6667H28V0H0V10.6667Z\" fill=\"#156DD1\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 20H28V10.6667H0V20Z\" fill=\"#FFD948\"></path> </g> </g> <defs> <clipPath id=\"clip0_503_2809\"> <rect width=\"28\" height=\"20\" rx=\"2\" fill=\"white\"></rect> </clipPath> </defs> </g></svg>\n        <span>\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 t.me/mmssixxx</span>\n    </div>");
	  Lampa.Component.add('bandera_online', component);
	  resetTemplates();
	  Lampa.Listener.follow('full', function (e) {
	    if (e.type == 'complite') {
	      var render = e.object.activity.render();
	      if (!render || render.find('.view--bandera-online').length) return;
	      var btn = $(Lampa.Lang.translate(button));
	      btn.on('hover:enter', function () {
	        resetTemplates();
	        Lampa.Component.add('bandera_online', component);
	        Lampa.Activity.push({
	          url: '',
	          title: "Спільнота - t.me/mmssixxx",
	          component: 'bandera_online',
	          search: e.data.movie.title,
	          search_one: e.data.movie.title,
	          search_two: e.data.movie.original_title,
	          movie: e.data.movie,
	          page: 1
	        });
	      });
	      render.find('.view--torrent').after(btn);
	    }
	  });
	}
	if (!window.bandera_online && Lampa.Manifest.app_digital >= 155) startPlugin();

})();
