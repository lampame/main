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

	var es_array_slice = {};

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

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

	var es_object_toString = {};

	var esnext_globalThis = {};

	var es_globalThis = {};

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
	var lengthOfArrayLike$3 = require('../internals/length-of-array-like');
	var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
	var createProperty$1 = require('../internals/create-property');
	var setArrayLength = require('../internals/array-set-length');
	var arraySpeciesCreate = require('../internals/array-species-create');
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
	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$e({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED$2
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
	        len = lengthOfArrayLike$3(E);
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

	var apply$2 = require('../internals/function-apply');
	var call$a = require('../internals/function-call');
	var uncurryThis$f = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$3 = require('../internals/fix-regexp-well-known-symbol-logic');
	var fails$c = require('../internals/fails');
	var anObject$9 = require('../internals/an-object');
	var isCallable$b = require('../internals/is-callable');
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
	var wellKnownSymbol$7 = require('../internals/well-known-symbol');
	var REPLACE = wellKnownSymbol$7('replace');
	var max = Math.max;
	var min$1 = Math.min;
	var concat = uncurryThis$f([].concat);
	var push$4 = uncurryThis$f([].push);
	var stringIndexOf$3 = uncurryThis$f(''.indexOf);
	var stringSlice$5 = uncurryThis$f(''.slice);
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
	    return replacer ? call$a(replacer, searchValue, O, replaceValue) : call$a(nativeReplace, toString$a(O), searchValue, replaceValue);
	  },
	  // `RegExp.prototype[@@replace]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	  function (string, replaceValue) {
	    var rx = anObject$9(this);
	    var S = toString$a(string);
	    var functionalReplace = isCallable$b(replaceValue);
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
	        replacement = toString$a(apply$2(replaceValue, undefined, replacerArgs));
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
	var uncurryThis$e = require('../internals/function-uncurry-this');
	var isForced$1 = require('../internals/is-forced');
	var inheritIfRequired = require('../internals/inherit-if-required');
	var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
	var create = require('../internals/object-create');
	var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
	var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
	var isRegExp = require('../internals/is-regexp');
	var toString$9 = require('../internals/to-string');
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
	var exec$2 = uncurryThis$e(RegExpPrototype$1.exec);
	var charAt$1 = uncurryThis$e(''.charAt);
	var replace$3 = uncurryThis$e(''.replace);
	var stringIndexOf$2 = uncurryThis$e(''.indexOf);
	var stringSlice$4 = uncurryThis$e(''.slice);
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
	var globalThis$a = require('../internals/global-this');
	var call$9 = require('../internals/function-call');
	var uncurryThis$c = require('../internals/function-uncurry-this');
	var hasOwn$3 = require('../internals/has-own-property');
	var isCallable$a = require('../internals/is-callable');
	var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
	var toString$7 = require('../internals/to-string');
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
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$7(arguments[0]);
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
	      var stringKey = toString$7(key);
	      var symbol = call$9(nativeFor, this, stringKey);
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
	  var stringSlice$3 = uncurryThis$c(''.slice);
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
	var uncurryThis$b = require('../internals/function-uncurry-this');
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
	    if (!hasOwn$2(AllSymbols, key) && !hasOwn$2(hiddenKeys$1, key)) push$3(result, key);
	  });
	  return result;
	};
	var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwn$2(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$2(ObjectPrototype, key))) {
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

	var require$$5$4 = /*@__PURE__*/getAugmentedNamespace(isCallable$9);

	var getBuiltIn$4;
	var hasRequiredGetBuiltIn;

	function requireGetBuiltIn () {
		if (hasRequiredGetBuiltIn) return getBuiltIn$4;
		hasRequiredGetBuiltIn = 1;

		var globalThis = require$$3$4;
		var isCallable = require$$5$4;
		var aFunction = function aFunction(argument) {
		  return isCallable(argument) ? argument : undefined;
		};
		getBuiltIn$4 = function (namespace, method) {
		  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
		};
		return getBuiltIn$4;
	}

	var classof$5;
	var hasRequiredClassof;

	function requireClassof () {
		if (hasRequiredClassof) return classof$5;
		hasRequiredClassof = 1;

		var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
		var isCallable = require$$5$4;
		var classofRaw = require$$0$3;
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

	var toString$6;
	var hasRequiredToString;

	function requireToString () {
		if (hasRequiredToString) return toString$6;
		hasRequiredToString = 1;

		var classof = requireClassof();
		var $String = String;
		toString$6 = function (argument) {
		  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
		  return $String(argument);
		};
		return toString$6;
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
	var uncurryThis$a = require('../internals/function-uncurry-this');
	var fails$8 = require('../internals/fails');
	var isArray$2 = require('../internals/is-array');
	var isCallable$7 = require('../internals/is-callable');
	var isRawJSON = require('../internals/is-raw-json');
	var isSymbol = require('../internals/is-symbol');
	var classof$4 = require('../internals/classof-raw');
	var toString$5 = require('../internals/to-string');
	var arraySlice$1 = require('../internals/array-slice');
	var parseJSONString = require('../internals/parse-json-string');
	var uid = require('../internals/uid');
	var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
	var NATIVE_RAW_JSON = require('../internals/native-raw-json');
	var $String$2 = String;
	var $stringify = getBuiltIn$2('JSON', 'stringify');
	var exec$1 = uncurryThis$a(/./.exec);
	var charAt = uncurryThis$a(''.charAt);
	var charCodeAt = uncurryThis$a(''.charCodeAt);
	var replace$1 = uncurryThis$a(''.replace);
	var slice = uncurryThis$a(''.slice);
	var push$2 = uncurryThis$a([].push);
	var numberToString = uncurryThis$a(1.1.toString);
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
	    if (typeof element == 'string') push$2(keys, element);else if (typeof element == 'number' || classof$4(element) === 'Number' || classof$4(element) === 'String') push$2(keys, toString$5(element));
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
	var uncurryThis$9 = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$6 = require('../internals/an-object');
	var isObject$3 = require('../internals/is-object');
	var requireObjectCoercible$2 = require('../internals/require-object-coercible');
	var speciesConstructor$2 = require('../internals/species-constructor');
	var advanceStringIndex$1 = require('../internals/advance-string-index');
	var toLength$2 = require('../internals/to-length');
	var toString$4 = require('../internals/to-string');
	var getMethod$2 = require('../internals/get-method');
	var getRegExpFlags$1 = require('../internals/regexp-get-flags');
	var regExpExec$2 = require('../internals/regexp-exec-abstract');
	var stickyHelpers = require('../internals/regexp-sticky-helpers');
	var fails$6 = require('../internals/fails');
	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min = Math.min;
	var push$1 = uncurryThis$9([].push);
	var stringSlice$2 = uncurryThis$9(''.slice);
	var stringIndexOf$1 = uncurryThis$9(''.indexOf);

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
	    return splitter ? call$6(splitter, separator, O, limit) : call$6(internalSplit, toString$4(O), separator, limit);
	  },
	  // `RegExp.prototype[@@split]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (string, limit) {
	    var rx = anObject$6(this);
	    var S = toString$4(string);
	    if (!BUGGY) {
	      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;
	    }
	    var C = speciesConstructor$2(rx, RegExp);
	    var flags = toString$4(getRegExpFlags$1(rx));
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

	var uncurryThis$8 = require('../internals/function-uncurry-this');
	var fails$5 = require('../internals/fails');
	var classof$3 = require('../internals/classof-raw');
	var $Object = Object;
	var split = uncurryThis$8(''.split);

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

	var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

	var toIndexedObject$1;
	var hasRequiredToIndexedObject;

	function requireToIndexedObject () {
		if (hasRequiredToIndexedObject) return toIndexedObject$1;
		hasRequiredToIndexedObject = 1;

		// toObject with fallback for non-array-like ES3 strings
		var IndexedObject = require$$0$7;
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

	var addToUnscopables$1;
	var hasRequiredAddToUnscopables;

	function requireAddToUnscopables () {
		if (hasRequiredAddToUnscopables) return addToUnscopables$1;
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
		addToUnscopables$1 = function (key) {
		  ArrayPrototype[UNSCOPABLES][key] = true;
		};
		return addToUnscopables$1;
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

		var NATIVE_WEAK_MAP = require$$0$6;
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

	var require$$5$2 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

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
		var USE_SYMBOL_AS_UID = require$$5$2;
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

	var uncurryThis$7 = require('../internals/function-uncurry-this');
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
	var stringSlice$1 = uncurryThis$7(''.slice);
	var replace = uncurryThis$7(''.replace);
	var join = uncurryThis$7([].join);
	var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$4(function () {
	  return defineProperty(function () {/* empty */}, 'length', {
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

	var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

	var defineBuiltIn$1;
	var hasRequiredDefineBuiltIn;

	function requireDefineBuiltIn () {
		if (hasRequiredDefineBuiltIn) return defineBuiltIn$1;
		hasRequiredDefineBuiltIn = 1;

		var isCallable = require$$5$4;
		var definePropertyModule = require$$1$4;
		var makeBuiltIn = require$$0$4;
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

	var uncurryThis$6 = require('../internals/function-uncurry-this');
	var toString$3 = uncurryThis$6({}.toString);
	var stringSlice = uncurryThis$6(''.slice);
	module.exports = function (it) {
	  return stringSlice(toString$3(it), 8, -1);
	};

	var classofRaw = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

	var isArray$1;
	var hasRequiredIsArray;

	function requireIsArray () {
		if (hasRequiredIsArray) return isArray$1;
		hasRequiredIsArray = 1;

		var classof = require$$0$3;

		// `IsArray` abstract operation
		// https://tc39.es/ecma262/#sec-isarray
		// eslint-disable-next-line es/no-array-isarray -- safe
		isArray$1 = Array.isArray || function isArray(argument) {
		  return classof(argument) === 'Array';
		};
		return isArray$1;
	}

	var uncurryThis$5 = require('../internals/function-uncurry-this');
	var fails$3 = require('../internals/fails');
	var isCallable$2 = require('../internals/is-callable');
	var classof$1 = require('../internals/classof');
	var getBuiltIn$1 = require('../internals/get-built-in');
	var inspectSource$1 = require('../internals/inspect-source');
	var noop = function noop() {/* empty */};
	var construct = getBuiltIn$1('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$5(constructorRegExp.exec);
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
	module.exports = !construct || fails$3(function () {
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

	var require$$8 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

	var call$3 = require('../internals/function-call');
	var uncurryThis$4 = require('../internals/function-uncurry-this');
	var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject$3 = require('../internals/an-object');
	var isObject$1 = require('../internals/is-object');
	var toLength = require('../internals/to-length');
	var toString$2 = require('../internals/to-string');
	var requireObjectCoercible$1 = require('../internals/require-object-coercible');
	var getMethod$1 = require('../internals/get-method');
	var advanceStringIndex = require('../internals/advance-string-index');
	var getRegExpFlags = require('../internals/regexp-get-flags');
	var regExpExec$1 = require('../internals/regexp-exec-abstract');
	var stringIndexOf = uncurryThis$4(''.indexOf);

	// @@match logic
	fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	  // `String.prototype.match` method
	  // https://tc39.es/ecma262/#sec-string.prototype.match
	  function match(regexp) {
	    var O = requireObjectCoercible$1(this);
	    var matcher = isObject$1(regexp) ? getMethod$1(regexp, MATCH) : undefined;
	    return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
	  },
	  // `RegExp.prototype[@@match]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	  function (string) {
	    var rx = anObject$3(this);
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

	var arrayMethodHasSpeciesSupport$2;
	var hasRequiredArrayMethodHasSpeciesSupport;

	function requireArrayMethodHasSpeciesSupport () {
		if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport$2;
		hasRequiredArrayMethodHasSpeciesSupport = 1;

		var fails = requireFails();
		var wellKnownSymbol = requireWellKnownSymbol();
		var V8_VERSION = require$$2;
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

	var uncurryThis$3 = require('../internals/function-uncurry-this');
	module.exports = uncurryThis$3([].slice);

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
		var setArrayLength = require$$8;
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

	var $$9 = require('../internals/export');
	var $filter = require('../internals/array-iteration').filter;
	var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

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
	var $find = require('../internals/array-iteration').find;
	var addToUnscopables = require('../internals/add-to-unscopables');
	var FIND = 'find';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-find -- testing
	if (FIND in []) Array(1)[FIND](function () {
	  SKIPS_HOLES = false;
	});

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$$8({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES
	}, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND);

	var $$7 = require('../internals/export');
	var uncurryThis$2 = require('../internals/function-uncurry-this-clause');
	var $indexOf = require('../internals/array-includes').indexOf;
	var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
	var nativeIndexOf = uncurryThis$2([].indexOf);
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$1 = NEGATIVE_ZERO || !arrayMethodIsStrict$1('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$7({
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

	var $$6 = require('../internals/export');
	var $map = require('../internals/array-iteration').map;
	var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$6({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$5 = require('../internals/export');
	var uncurryThis$1 = require('../internals/function-uncurry-this');
	var aCallable$3 = require('../internals/a-callable');
	var toObject = require('../internals/to-object');
	var lengthOfArrayLike$1 = require('../internals/length-of-array-like');
	var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
	var toString$1 = require('../internals/to-string');
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
	    var xString = toString$1(x);
	    var yString = toString$1(y);
	    return xString === yString ? 0 : xString > yString ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	$$5({
	  target: 'Array',
	  proto: true,
	  forced: FORCED
	}, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable$3(comparefn);
	    var array = toObject(this);
	    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
	    var items = [];
	    var arrayLength = lengthOfArrayLike$1(array);
	    var itemsLength, index;
	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) push(items, array[index]);
	    }
	    internalSort(items, getSortCompare(comparefn));
	    itemsLength = lengthOfArrayLike$1(items);
	    index = 0;
	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) deletePropertyOrThrow(array, index++);
	    return array;
	  }
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

		var makeBuiltIn = require$$0$4;
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

		var isCallable = require$$5$4;
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

	var $$4 = require('../internals/export');
	var functionApply$1 = require('../internals/function-apply');
	var aCallable = require('../internals/a-callable');
	var anObject$2 = require('../internals/an-object');
	var fails$1 = require('../internals/fails');

	// MS Edge argumentsList argument is optional
	var OPTIONAL_ARGUMENTS_LIST = !fails$1(function () {
	  // eslint-disable-next-line es/no-reflect -- required for testing
	  Reflect.apply(function () {/* empty */});
	});

	// `Reflect.apply` method
	// https://tc39.es/ecma262/#sec-reflect.apply
	$$4({
	  target: 'Reflect',
	  stat: true,
	  forced: OPTIONAL_ARGUMENTS_LIST
	}, {
	  apply: function apply(target, thisArgument, argumentsList) {
	    return functionApply$1(aCallable(target), thisArgument, anObject$2(argumentsList));
	  }
	});

	var NATIVE_BIND = require('../internals/function-bind-native');
	var FunctionPrototype = Function.prototype;
	var apply = FunctionPrototype.apply;
	var call$2 = FunctionPrototype.call;

	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
	module.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call$2.bind(apply) : function () {
	  return call$2.apply(apply, arguments);
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

		var classofRaw = require$$0$3;
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
		var isCallable = require$$5$4;
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

	var $$3 = require('../internals/export');
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
	$$3({
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
		var isCallable = require$$5$4;
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
	var call$1 = require('../internals/function-call');
	var anObject$1 = require('../internals/an-object');
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
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
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

	var require$$5 = /*@__PURE__*/getAugmentedNamespace(iterate);

	var $$2 = require('../internals/export');
	var from = require('../internals/array-from');
	var checkCorrectnessOfIteration$1 = require('../internals/check-correctness-of-iteration');
	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$2({
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
		var isCallable = require$$5$4;
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

	var $$1 = require('../internals/export');
	var $trim = require('../internals/string-trim').trim;
	var forcedStringTrimMethod = require('../internals/string-trim-forced');

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$1({
	  target: 'String',
	  proto: true,
	  forced: forcedStringTrimMethod('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var SERVER = {};
	var timers = {};
	var callback;
	var callback_back;
	var autostart_timer;
	var autostart_progress;
	var formats_individual = ['vob', 'm2ts'];
	function start(element, movie) {
	  SERVER.object = element;
	  if (movie) SERVER.movie = movie;
	  if (Lampa.Platform.is('android') && !Lampa.Storage.field('internal_torrclient')) {
	    Lampa.Android.openTorrent(SERVER);
	    if (movie && movie.id) Lampa.Favorite.add('history', movie, 100);
	    if (callback) callback();
	  } else if (Lampa.Torserver.url()) {
	    loading();
	    connect();
	  } else install();
	}
	function open(hash, movie) {
	  SERVER.hash = hash;
	  if (movie) SERVER.movie = movie;
	  if (Lampa.Platform.is('android') && !Lampa.Storage.field('internal_torrclient')) {
	    Lampa.Android.playHash(SERVER);
	    if (callback) callback();
	  } else if (Lampa.Torserver.url()) {
	    loading();
	    files();
	  } else install();
	}
	function loading() {
	  Lampa.Modal.open({
	    title: '',
	    html: Lampa.Template.get('modal_loading'),
	    size: 'large',
	    mask: true,
	    onBack: function onBack() {
	      Lampa.Modal.close();
	      close();
	    }
	  });
	}
	function connect() {
	  Lampa.Torserver.connected(function () {
	    hash();
	  }, function (echo) {
	    Lampa.Torserver.error();
	  });
	}
	function hash() {
	  Lampa.Torserver.hash({
	    title: SERVER.object.title,
	    link: SERVER.object.MagnetUri || SERVER.object.Link,
	    poster: SERVER.object.poster,
	    data: {
	      lampa: true,
	      movie: SERVER.movie
	    }
	  }, function (json) {
	    SERVER.hash = json.hash;
	    files();
	  }, function (echo) {
	    //Torserver.error()

	    var jac = Lampa.Storage.field('parser_torrent_type') == 'jackett';
	    var tpl = Lampa.Template.get('torrent_nohash', {
	      title: Lampa.Lang.translate('title_error'),
	      text: Lampa.Lang.translate('torrent_parser_no_hash'),
	      url: SERVER.object.MagnetUri || SERVER.object.Link,
	      echo: echo
	    });
	    if (jac) tpl.find('.is--torlook').remove();else tpl.find('.is--jackett').remove();
	    Lampa.Modal.update(tpl);
	  });
	}
	function files() {
	  var repeat = 0;
	  timers.files = setInterval(function () {
	    repeat++;
	    Lampa.Torserver.files(SERVER.hash, function (json) {
	      if (json.file_stats) {
	        clearInterval(timers.files);
	        show(json.file_stats);
	      }
	    });
	    if (repeat >= 45) {
	      Lampa.Modal.update(Lampa.Template.get('error', {
	        title: Lampa.Lang.translate('title_error'),
	        text: Lampa.Lang.translate('torrent_parser_timeout')
	      }));
	      Lampa.Torserver.clear();
	      Lampa.Torserver.drop(SERVER.hash);
	    }
	  }, 2000);
	}
	function install() {
	  Lampa.Modal.open({
	    title: '',
	    html: Lampa.Template.get('torrent_install', {}),
	    size: 'large',
	    onBack: function onBack() {
	      Lampa.Modal.close();
	      Lampa.Controller.toggle('content');
	    }
	  });
	}
	function show(files) {
	  files.sort(function (a, b) {
	    var an = a.path.replace(/\d+/g, function (m) {
	      return m.length > 3 ? m : ('000' + m).substr(-4);
	    });
	    var bn = b.path.replace(/\d+/g, function (m) {
	      return m.length > 3 ? m : ('000' + m).substr(-4);
	    });
	    return an.localeCompare(bn);
	  });
	  var active = Lampa.Activity.active(),
	    movie = active.movie || SERVER.movie || {};
	  var plays = Lampa.Torserver.clearFileName(files);
	  var seasons = [];
	  plays.forEach(function (element) {
	    var info = Lampa.Torserver.parse({
	      movie: movie,
	      files: plays,
	      filename: element.path_human,
	      path: element.path
	    });
	    if (info.serial && info.season && seasons.indexOf(info.season) == -1) {
	      seasons.push(info.season);
	    }
	  });
	  if (seasons.length) {
	    Api.seasons(movie, seasons, function (data) {
	      list(plays, {
	        movie: movie,
	        seasons: data,
	        files: files
	      });
	    });
	  } else {
	    list(plays, {
	      movie: movie,
	      files: files
	    });
	  }
	}
	function preload(data, run) {
	  var need_preload = Lampa.Torserver.ip() && data.url.indexOf(Lampa.Torserver.ip()) > -1 && data.url.indexOf('&preload') > -1;
	  if (need_preload) {
	    var checkout;
	    var network = new Request();
	    var first = true;
	    Loading.start(function () {
	      clearInterval(checkout);
	      network.clear();
	      Loading.stop();
	    });
	    var update = function update() {
	      network.timeout(2000);
	      network.silent(first ? data.url : data.url.replace('preload', 'stat'), function (res) {
	        var pb = res.preloaded_bytes || 0,
	          ps = res.preload_size || 0,
	          sp = res.download_speed ? Utils.bytesToSize(res.download_speed * 8, true) : '0.0';
	        var progress = Math.min(100, pb * 100 / ps);
	        if (progress >= 95 || isNaN(progress)) {
	          Loading.stop();
	          clearInterval(checkout);
	          run();
	        } else {
	          Loading.setText(Math.round(progress) + '%' + ' - ' + sp);
	        }
	      });
	      first = false;
	    };
	    checkout = setInterval(update, 1000);
	    update();
	  } else run();
	}
	function list(items, params) {
	  var html = $('<div class="torrent-files"></div>');
	  var playlist = [];
	  var scroll_to_element;
	  var first_item;
	  Lampa.Listener.send('torrent_file', {
	    type: 'list_open',
	    items: items
	  });
	  var folder = '';
	  items.forEach(function (element, inx) {
	    var exe = element.path.split('.').pop().toLowerCase();
	    var info = Lampa.Torserver.parse({
	      movie: params.movie,
	      files: items,
	      filename: element.path_human,
	      path: element.path,
	      is_file: formats_individual.indexOf(exe) >= 0
	    });
	    var view = Lampa.Timeline.view(info.hash);
	    var item;
	    Lampa.Arrays.extend(element, {
	      season: info.season,
	      episode: info.episode,
	      title: element.path_human,
	      first_title: params.movie.name || params.movie.title,
	      size: Lampa.Utils.bytesToSize(element.length),
	      url: Lampa.Torserver.stream(element.path, SERVER.hash, element.id),
	      torrent_hash: SERVER.hash,
	      ffprobe: SERVER.object && SERVER.object.ffprobe ? SERVER.object.ffprobe : false,
	      timeline: view,
	      air_date: '--',
	      img: './img/img_broken.svg',
	      exe: exe
	    });
	    if (params.seasons) {
	      var episodes = params.seasons[info.season];
	      element.title = (info.episode ? info.episode + ' / ' : '') + element.path_human;
	      element.fname = element.title;
	      if (episodes) {
	        var episode = episodes.episodes.filter(function (a) {
	          return a.episode_number == info.episode;
	        })[0];
	        if (episode) {
	          element.title = info.episode + ' / ' + episode.name;
	          element.air_date = Lampa.Utils.parseTime(episode.air_date).full;
	          element.fname = episode.name;
	          if (episode.still_path) element.img = Lampa.Api.img(episode.still_path);else if (episode.img) element.img = episode.img;
	        }
	      }
	      if (info.episode) {
	        item = Lampa.Template.get('torrent_file_serial', element);
	        item.find('.torrent-serial__content').append(Lampa.Timeline.render(view));
	      } else {
	        item = Lampa.Template.get('torrent_file', element);
	        item.append(Lampa.Timeline.render(view));
	      }
	    } else if (items.length == 1 && params.movie && !params.movie.name) {
	      element.fname = params.movie.title || element.title;
	      if (params.movie.backdrop_path) element.img = Lampa.Api.img(params.movie.backdrop_path);
	      item = Lampa.Template.get('torrent_file_serial', element);
	      item.find('.torrent-serial__line').empty().text(params.movie.tagline || '');
	      item.find('.torrent-serial__episode').remove();
	      item.find('.torrent-serial__content').append(Lampa.Timeline.render(view));
	    } else {
	      item = Lampa.Template.get('torrent_file', element);
	      item.append(Lampa.Timeline.render(view));
	      if (params.movie.title) element.title = params.movie.title;
	    }
	    item[0].visibility = 'hidden';
	    if (view.percent > 0) scroll_to_element = item;

	    //element.subtitles = parseSubs(element.path, params.files);

	    element.title = (element.fname || element.title).replace(/<[^>]*>?/gm, '');
	    playlist.push(element);
	    item.on('hover:enter', function () {
	      stopAutostart();

	      //если это андроид, но не андроид, то нефиг смотреть
	      if (navigator.userAgent.toLowerCase().indexOf('android') >= 0 && !Lampa.Platform.is('android')) return Lampa.Platform.install('apk');
	      if (params.movie.id) Lampa.Favorite.add('history', params.movie, 100);
	      if ((Lampa.Platform.is('android') || Lampa.Platform.is('apple_tv')) && playlist.length > 1) {
	        var trim_playlist = [];
	        playlist.forEach(function (elem) {
	          trim_playlist.push({
	            title: elem.title,
	            url: elem.url,
	            timeline: elem.timeline
	          });
	        });
	        element.playlist = trim_playlist;
	      }
	      preload(element, function () {
	        Lampa.Player.play(element);
	        Lampa.Player.callback(function () {
	          Lampa.Controller.toggle('modal');
	        });
	        Lampa.Player.playlist(playlist);
	        Lampa.Player.stat(element.url);
	        if (callback) {
	          callback();
	          callback = false;
	        }
	        Lampa.Listener.send('torrent_file', {
	          type: 'onenter',
	          element: element,
	          item: item,
	          items: items
	        });
	      });
	    }).on('hover:long', function () {
	      stopAutostart();
	      var enabled = Lampa.Controller.enabled().name;
	      var menu = [{
	        title: Lampa.Lang.translate('time_reset'),
	        timeclear: true
	      }];
	      if (Lampa.Platform.is('webos')) {
	        menu.push({
	          title: Lampa.Lang.translate('player_lauch') + ' - WebOS',
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
	      if (!Lampa.Platform.tv()) {
	        menu.push({
	          title: Lampa.Lang.translate('copy_link'),
	          link: true
	        });
	      }
	      Lampa.Listener.send('torrent_file', {
	        type: 'onlong',
	        element: element,
	        item: item,
	        menu: menu,
	        items: items
	      });
	      Lampa.Select.show({
	        title: Lampa.Lang.translate('title_action'),
	        items: menu,
	        onBack: function onBack() {
	          Lampa.Controller.toggle(enabled);
	        },
	        onSelect: function onSelect(a) {
	          if (a.timeclear) {
	            view.percent = 0;
	            view.time = 0;
	            view.duration = 0;
	            element.timeline = view;
	            Lampa.Timeline.update(view);
	          }
	          if (a.link) {
	            Lampa.Utils.copyTextToClipboard(element.url.replace('&preload', '&play'), function () {
	              Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
	            }, function () {
	              Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
	            });
	          }
	          Lampa.Controller.toggle(enabled);
	          if (a.player) {
	            Lampa.Player.runas(a.player);
	            item.trigger('hover:enter');
	          }
	        }
	      });
	    }).on('hover:focus', function () {
	      Lampa.Listener.send('torrent_file', {
	        type: 'onfocus',
	        element: element,
	        item: item,
	        items: items
	      });
	      Lampa.Helper.show('torrents_view', Lampa.Lang.translate('helper_torrents_view'), item);
	    }).on('visible', function () {
	      var img = item.find('img');
	      img[0].onload = function () {
	        img.addClass('loaded');
	      };
	      img[0].src = img.attr('data-src');
	    });
	    if (element.folder_name && element.folder_name !== folder) {
	      html.append($('<div class="torrnet-folder-name' + (folder ? '' : ' selector') + '">' + element.folder_name + '</div>'));
	      folder = element.folder_name;
	    }
	    html.append(item);
	    if (!first_item) first_item = item;
	    Lampa.Listener.send('torrent_file', {
	      type: 'render',
	      element: element,
	      item: item,
	      items: items
	    });
	  });
	  if (items.length == 0) html = Lampa.Template.get('error', {
	    title: Lampa.Lang.translate('empty_title'),
	    text: Lampa.Lang.translate('torrent_parser_nofiles')
	  });else Lampa.Modal.title(Lampa.Lang.translate('title_files'));
	  if (playlist.length == 1) autostart(first_item);
	  Lampa.Modal.update(html);
	  if (scroll_to_element) Lampa.Controller.collectionFocus(scroll_to_element, Lampa.Modal.scroll().render());
	}
	function autostart(item) {
	  var tim = Date.now();
	  var div = $('<div class="torrent-serial__progress"></div>');
	  autostart_timer = setInterval(function () {
	    var dif = (Date.now() - tim) / 1000;
	    div.css('height', Math.round(dif / 10 * 100) + '%');
	    if (dif > 10) {
	      stopAutostart();
	      item.trigger('hover:enter');
	    }
	  }, 10);
	  Lampa.Keypad.listener.follow('keydown', listenKeydown);
	  autostart_progress = div;
	  item.prepend(div);
	}
	function listenKeydown() {
	  stopAutostart();
	  Lampa.Keypad.listener.remove('keydown', listenKeydown);
	}
	function stopAutostart() {
	  clearInterval(autostart_timer);
	  if (autostart_progress) autostart_progress.remove();
	  autostart_progress = null;
	}
	function opened(call) {
	  callback = call;
	}
	function back(call) {
	  callback_back = call;
	}
	function close() {
	  Lampa.Torserver.drop(SERVER.hash);
	  Lampa.Torserver.clear();
	  clearInterval(timers.files);
	  if (callback_back) {
	    callback_back();
	  } else {
	    Lampa.Controller.toggle('content');
	  }
	  callback_back = false;
	  SERVER = {};
	  clearInterval(autostart_timer);
	  Lampa.Listener.send('torrent_file', {
	    type: 'list_close'
	  });
	}
	var Torrent = {
	  start: start,
	  open: open,
	  opened: opened,
	  back: back
	};

	var call = require('../internals/function-call');
	var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
	var anObject = require('../internals/an-object');
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
	    return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
	  },
	  // `RegExp.prototype[@@search]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	  function (string) {
	    var rx = anObject(this);
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

	var url;
	var network = new Lampa.Reguest();
	function init() {
	  Lampa.Storage.set('parser_torrent_type', Lampa.Storage.get('parser_torrent_type') || 'jackett');
	  var source = {
	    title: Lampa.Lang.translate('title_parser'),
	    search: function search(params, oncomplite) {
	      get({
	        search: decodeURIComponent(params.query),
	        other: true,
	        from_search: true
	      }, function (json) {
	        json.title = Lampa.Lang.translate('title_parser');
	        json.results = json.Results.slice(0, 20);
	        json.Results = null;
	        json.results.forEach(function (element) {
	          element.Title = Lampa.Utils.shortText(element.Title, 110);
	        });
	        oncomplite(json.results.length ? [json] : []);
	      }, function () {
	        oncomplite([]);
	      });
	    },
	    onCancel: function onCancel() {
	      network.clear();
	    },
	    params: {
	      lazy: true,
	      align_left: true,
	      isparser: true,
	      card_events: {
	        onMenu: function onMenu() {}
	      }
	    },
	    onMore: function onMore(params, close) {
	      close();
	      Lampa.Activity.push({
	        url: '',
	        title: Lampa.Lang.translate('title_torrents'),
	        component: 'torrents',
	        search: params.query,
	        from_search: true,
	        noinfo: true,
	        movie: {
	          title: params.query,
	          original_title: '',
	          img: './img/img_broken.svg',
	          genres: []
	        },
	        page: 1
	      });
	    },
	    onSelect: function onSelect(params, close) {
	      Torrent.start(params.element, {
	        title: params.element.Title
	      });
	      Lampa.Torrent.back(params.line.toggle.bind(params.line));
	    }
	  };
	  function addSource() {
	    var reg = Lampa.Platform.is('android') ? true : Lampa.Torserver.url();
	    if (Lampa.Storage.field('parse_in_search') && reg) Lampa.Search.addSource(source);
	  }
	  Lampa.Storage.listener.follow('change', function (e) {
	    if (e.name == 'parse_in_search' || e.name == 'torrserver_url' || e.name == 'torrserver_url_two' || e.name == 'torrserver_use_link') {
	      Lampa.Search.removeSource(source);
	      addSource();
	    }
	  });
	  addSource();
	}
	function get() {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
	  var onerror = arguments.length > 2 ? arguments[2] : undefined;
	  function complite(data) {
	    oncomplite(data);
	  }
	  function error(e) {
	    onerror(e);
	  }
	  if (Lampa.Storage.field('parser_torrent_type') == 'jackett') {
	    if (Lampa.Storage.field('jackett_url')) {
	      url = Lampa.Utils.checkEmptyUrl(Lampa.Storage.field('jackett_url'));
	      var ignore = false; //params.from_search && !url.match(/\d+\.\d+\.\d+/g)

	      if (ignore) error('');else {
	        jackett(params, complite, error);
	      }
	    } else {
	      error(Lampa.Lang.translate('torrent_parser_set_link') + ': Jackett');
	    }
	  } else if (Lampa.Storage.field('parser_torrent_type') == 'prowlarr') {
	    if (Lampa.Storage.field('prowlarr_url')) {
	      url = Lampa.Utils.checkEmptyUrl(Lampa.Storage.field('prowlarr_url'));
	      prowlarr(params, complite, error);
	    } else {
	      error(Lampa.Lang.translate('torrent_parser_set_link') + ': Prowlarr');
	    }
	  } else if (Lampa.Storage.field('parser_torrent_type') == 'torrserver') {
	    if (Lampa.Storage.field(Lampa.Storage.field('torrserver_use_link') == 'two' ? 'torrserver_url_two' : 'torrserver_url')) {
	      url = Lampa.Utils.checkEmptyUrl(Lampa.Storage.field(Lampa.Storage.field('torrserver_use_link') == 'two' ? 'torrserver_url_two' : 'torrserver_url'));
	      torrserver(params, complite, error);
	    } else {
	      error(Lampa.Lang.translate('torrent_parser_set_link') + ': TorrServer');
	    }
	  }
	}
	function viewed(hash) {
	  var view = Lampa.Storage.cache('torrents_view', 5000, []);
	  return view.indexOf(hash) > -1;
	}
	function jackett() {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
	  var onerror = arguments.length > 2 ? arguments[2] : undefined;
	  network.timeout(1000 * Lampa.Storage.field('parse_timeout'));
	  //&Tracker%5B%5D=noname-clubl&Tracker%5B%5D=kinozal-magnet&Tracker%5B%5D=rutracker&Tracker%5B%5D=toloka&
	  //&Category%5B%5D=100098&Category%5B%5D=3000&Category%5B%5D=3020&Category%5B%5D=100375&Category%5B%5D=100258&Category%5B%5D=100883&Category%5B%5D=100955&Query=
	  var u = url + '/api/v2.0/indexers/' + (Lampa.Storage.field('jackett_interview') === 'healthy' ? 'status:healthy' : 'all') + '/results?apikey=' + Lampa.Storage.field('jackett_key') + '&Category%5B%5D=3020&Category%5B%5D=3040&Category%5B%5D=100375&Query=' + encodeURIComponent(params.search);
	  if (!params.from_search) {
	    var genres = params.movie.genres.map(function (a) {
	      return a.name;
	    });
	    if (!params.clarification) {
	      u = Lampa.Utils.addUrlComponent(u, 'title=' + encodeURIComponent(params.movie.title));
	      u = Lampa.Utils.addUrlComponent(u, 'title_original=' + encodeURIComponent(params.movie.original_title));
	    }
	    u = Lampa.Utils.addUrlComponent(u, 'year=' + encodeURIComponent(((params.movie.release_date || params.movie.first_air_date || '0000') + '').slice(0, 4)));
	    u = Lampa.Utils.addUrlComponent(u, 'is_serial=' + (params.movie.original_name ? '2' : params.other ? '0' : '1'));
	    u = Lampa.Utils.addUrlComponent(u, 'genres=' + encodeURIComponent(genres.join(',')));
	    u = Lampa.Utils.addUrlComponent(u, 'Category[]=' + (params.movie.number_of_seasons > 0 ? 5000 : 2000) + (params.movie.original_language == 'ja' ? ',5070' : ''));
	  }
	  network.native(u, function (json) {
	    if (json.Results) {
	      json.Results = json.Results.filter(function (element) {
	        return element.TrackerId !== "toloka";
	      });
	      json.Results.forEach(function (element) {
	        element.PublisTime = Lampa.Utils.strToTime(element.PublishDate);
	        element.hash = Lampa.Utils.hash(element.Title);
	        element.viewed = viewed(element.hash);
	        element.size = Lampa.Utils.bytesToSize(element.Size);
	      });
	      oncomplite(json);
	    } else onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
	  }, function (a, c) {
	    onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
	  });
	}

	// доки https://wiki.servarr.com/en/prowlarr/search#search-feed
	function prowlarr() {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
	  var onerror = arguments.length > 2 ? arguments[2] : undefined;
	  var q = [];
	  q.push({
	    name: 'apikey',
	    value: Lampa.Storage.field('prowlarr_key')
	  });
	  q.push({
	    name: 'query',
	    value: params.search
	  });
	  if (!params.from_search) {
	    var isSerial = !!params.movie.original_name;
	    if (params.movie.number_of_seasons > 0) {
	      q.push({
	        name: 'categories',
	        value: '5000'
	      });
	    }
	    if (params.movie.original_language == 'ja') {
	      q.push({
	        name: 'categories',
	        value: '5070'
	      });
	    }
	    q.push({
	      name: 'type',
	      value: isSerial ? 'tvsearch' : 'search'
	    });
	  }
	  var u = Lampa.Utils.buildUrl(url, '/api/v1/search', q);
	  network.timeout(1000 * Lampa.Storage.field('parse_timeout'));
	  network.native(u, function (json) {
	    if (Array.isArray(json)) {
	      oncomplite({
	        Results: json.filter(function (e) {
	          return e.protocol === 'torrent';
	        }).map(function (e) {
	          var hash = Lampa.Utils.hash(e.title);
	          return {
	            Title: e.title,
	            Tracker: e.indexer,
	            size: Lampa.Utils.bytesToSize(e.size),
	            PublishDate: Lampa.Utils.strToTime(e.publishDate),
	            Seeders: parseInt(e.seeders),
	            Peers: parseInt(e.leechers),
	            MagnetUri: e.downloadUrl,
	            viewed: viewed(hash),
	            hash: hash
	          };
	        })
	      });
	    } else {
	      onerror(Lampa.Lang.translate('torrent_parser_request_error') + ' (' + JSON.stringify(json) + ')');
	    }
	  }, function () {
	    onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
	  });
	}
	function torrserver() {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
	  var onerror = arguments.length > 2 ? arguments[2] : undefined;
	  network.timeout(1000 * Lampa.Storage.field('parse_timeout'));
	  var u = Lampa.Utils.buildUrl(url, '/search/', [{
	    name: 'query',
	    value: params.search
	  }]);
	  network.native(u, function (json) {
	    if (Array.isArray(json)) {
	      oncomplite({
	        Results: json.map(function (e) {
	          var hash = Lampa.Utils.hash(e.Title);
	          return {
	            Title: e.Title,
	            Tracker: e.Tracker,
	            size: e.Size,
	            PublishDate: Lampa.Utils.strToTime(e.CreateDate),
	            Seeders: parseInt(e.Seed),
	            Peers: parseInt(e.Peer),
	            MagnetUri: e.Magnet,
	            viewed: viewed(hash),
	            CategoryDesc: e.Categories,
	            bitrate: '-',
	            hash: hash
	          };
	        })
	      });
	    } else onerror(Lampa.Lang.translate('torrent_parser_request_error') + ' (' + JSON.stringify(json) + ')');
	  }, function (a, c) {
	    onerror(Lampa.Lang.translate('torrent_parser_no_responce') + ' (' + url + ')');
	  });
	}
	function clear() {
	  network.clear();
	}
	var Parser = {
	  init: init,
	  get: get,
	  jackett: jackett,
	  clear: clear
	};

	function component(object) {
	  console.log('object', object);
	  var network = new Lampa.Reguest();
	  var scroll = new Lampa.Scroll({
	    mask: true,
	    over: true
	  });
	  var files = new Lampa.Explorer(object);
	  var filter;
	  var results = [];
	  var filtred = [];
	  var total_pages = 1;
	  var last;
	  var initialized;
	  var filter_items = {
	    quality: [Lampa.Lang.translate('torrent_parser_any_one'), '4k', '1080p', '720p'],
	    hdr: [Lampa.Lang.translate('torrent_parser_no_choice'), Lampa.Lang.translate('torrent_parser_yes'), Lampa.Lang.translate('torrent_parser_no')],
	    dv: [Lampa.Lang.translate('torrent_parser_no_choice'), 'Dolby Vision', 'Dolby Vision TV', Lampa.Lang.translate('torrent_parser_no')],
	    sub: [Lampa.Lang.translate('torrent_parser_no_choice'), Lampa.Lang.translate('torrent_parser_yes'), Lampa.Lang.translate('torrent_parser_no')],
	    voice: [],
	    tracker: [Lampa.Lang.translate('torrent_parser_any_two')],
	    year: [Lampa.Lang.translate('torrent_parser_any_two')],
	    lang: [Lampa.Lang.translate('torrent_parser_any_two')]
	  };
	  var filter_translate = {
	    quality: Lampa.Lang.translate('torrent_parser_quality'),
	    hdr: 'HDR',
	    dv: 'Dolby Vision',
	    sub: Lampa.Lang.translate('torrent_parser_subs'),
	    voice: Lampa.Lang.translate('torrent_parser_voice'),
	    tracker: Lampa.Lang.translate('torrent_parser_tracker'),
	    year: Lampa.Lang.translate('torrent_parser_year'),
	    season: Lampa.Lang.translate('torrent_parser_season'),
	    lang: Lampa.Lang.translate('title_language_short')
	  };
	  var filter_multiple = ['quality', 'voice', 'tracker', 'season', 'lang'];
	  var sort_translate = {
	    Seeders: Lampa.Lang.translate('torrent_parser_sort_by_seeders'),
	    Size: Lampa.Lang.translate('torrent_parser_sort_by_size'),
	    Title: Lampa.Lang.translate('torrent_parser_sort_by_name'),
	    Tracker: Lampa.Lang.translate('torrent_parser_sort_by_tracker'),
	    PublisTime: Lampa.Lang.translate('torrent_parser_sort_by_date'),
	    viewed: Lampa.Lang.translate('torrent_parser_sort_by_viewed')
	  };
	  var i = 20,
	    y = new Date().getFullYear();
	  while (i--) {
	    filter_items.year.push(y - (19 - i) + '');
	  }
	  var viewed = Lampa.Storage.cache('torrents_view', 5000, []);
	  var finded_seasons = [];
	  var finded_seasons_full = [];
	  var voices = ["Laci", "Kerob", "LE-Production", "Parovoz Production", "Paradox", "Omskbird", "LostFilm", "Причудики", "BaibaKo", "NewStudio", "AlexFilm", "FocusStudio", "Gears Media", "Jaskier", "ViruseProject", "Кубик в Кубе", "IdeaFilm", "Sunshine Studio", "Ozz.tv", "Hamster Studio", "Сербин", "To4ka", "Кравец", "Victory-Films", "SNK-TV", "GladiolusTV", "Jetvis Studio", "ApofysTeam", "ColdFilm", "Agatha Studdio", "KinoView", "Jimmy J.", "Shadow Dub Project", "Amedia", "Red Media", "Selena International", "Гоблин", "Universal Russia", "Kiitos", "Paramount Comedy", "Кураж-Бамбей", "Студия Пиратского Дубляжа", "Чадов", "Карповский", "RecentFilms", "Первый канал", "Alternative Production", "NEON Studio", "Колобок", "Дольский", "Синема УС", "Гаврилов", "Живов", "SDI Media", "Алексеев", "GreenРай Studio", "Михалев", "Есарев", "Визгунов", "Либергал", "Кузнецов", "Санаев", "ДТВ", "Дохалов", "Sunshine Studio", "Горчаков", "LevshaFilm", "CasStudio", "Володарский", "ColdFilm", "Шварко", "Карцев", "ETV+", "ВГТРК", "Gravi-TV", "1001cinema", "Zone Vision Studio", "Хихикающий доктор", "Murzilka", "turok1990", "FOX", "STEPonee", "Elrom", "Колобок", "HighHopes", "SoftBox", "GreenРай Studio", "NovaFilm", "Четыре в квадрате", "Greb&Creative", "MUZOBOZ", "ZM-Show", "RecentFilms", "Kerems13", "Hamster Studio", "New Dream Media", "Игмар", "Котов", "DeadLine Studio", "Jetvis Studio", "РенТВ", "Андрей Питерский", "Fox Life", "Рыбин", "Trdlo.studio", "Studio Victory Аsia", "Ozeon", "НТВ", "CP Digital", "AniLibria", "STEPonee", "Levelin", "FanStudio", "Cmert", "Интерфильм", "SunshineStudio", "Kulzvuk Studio", "Кашкин", "Вартан Дохалов", "Немахов", "Sedorelli", "СТС", "Яроцкий", "ICG", "ТВЦ", "Штейн", "AzOnFilm", "SorzTeam", "Гаевский", "Мудров", "Воробьев Сергей", "Студия Райдо", "DeeAFilm Studio", "zamez", "ViruseProject", "Иванов", "STEPonee", "РенТВ", "СВ-Дубль", "BadBajo", "Комедия ТВ", "Мастер Тэйп", "5-й канал СПб", "SDI Media", "Гланц", "Ох! Студия", "СВ-Кадр", "2x2", "Котова", "Позитив", "RusFilm", "Назаров", "XDUB Dorama", "Реальный перевод", "Kansai", "Sound-Group", "Николай Дроздов", "ZEE TV", "Ozz.tv", "MTV", "Сыендук", "GoldTeam", "Белов", "Dream Records", "Яковлев", "Vano", "SilverSnow", "Lord32x", "Filiza Studio", "Sony Sci-Fi", "Flux-Team", "NewStation", "XDUB Dorama", "Hamster Studio", "Dream Records", "DexterTV", "ColdFilm", "Good People", "RusFilm", "Levelin", "AniDUB", "SHIZA Project", "AniLibria.TV", "StudioBand", "AniMedia", "Kansai", "Onibaku", "JWA Project", "MC Entertainment", "Oni", "Jade", "Ancord", "ANIvoice", "Nika Lenina", "Bars MacAdams", "JAM", "Anika", "Berial", "Kobayashi", "Cuba77", "RiZZ_fisher", "OSLIKt", "Lupin", "Ryc99", "Nazel & Freya", "Trina_D", "JeFerSon", "Vulpes Vulpes", "Hamster", "KinoGolos", "Fox Crime", "Денис Шадинский", "AniFilm", "Rain Death", "LostFilm", "New Records", "Ancord", "Первый ТВЧ", "RG.Paravozik", "Profix Media", "Tycoon", "RealFake", "HDrezka", "Jimmy J.", "AlexFilm", "Discovery", "Viasat History", "AniMedia", "JAM", "HiWayGrope", "Ancord", "СВ-Дубль", "Tycoon", "SHIZA Project", "GREEN TEA", "STEPonee", "AlphaProject", "AnimeReactor", "Animegroup", "Shachiburi", "Persona99", "3df voice", "CactusTeam", "AniMaunt", "AniMedia", "AnimeReactor", "ShinkaDan", "Jaskier", "ShowJet", "RAIM", "RusFilm", "Victory-Films", "АрхиТеатр", "Project Web Mania", "ko136", "КураСгречей", "AMS", "СВ-Студия", "Храм Дорам ТВ", "TurkStar", "Медведев", "Рябов", "BukeDub", "FilmGate", "FilmsClub", "Sony Turbo", "ТВЦ", "AXN Sci-Fi", "NovaFilm", "DIVA Universal", "Курдов", "Неоклассика", "fiendover", "SomeWax", "Логинофф", "Cartoon Network", "Sony Turbo", "Loginoff", "CrezaStudio", "Воротилин", "LakeFilms", "Andy", "CP Digital", "XDUB Dorama + Колобок", "SDI Media", "KosharaSerials", "Екатеринбург Арт", "Julia Prosenuk", "АРК-ТВ Studio", "Т.О Друзей", "Anifilm", "Animedub", "AlphaProject", "Paramount Channel", "Кириллица", "AniPLague", "Видеосервис", "JoyStudio", "HighHopes", "TVShows", "AniFilm", "GostFilm", "West Video", "Формат AB", "Film Prestige", "West Video", "Екатеринбург Арт", "SovetRomantica", "РуФилмс", "AveBrasil", "Greb&Creative", "BTI Studios", "Пифагор", "Eurochannel", "NewStudio", "Кармен Видео", "Кошкин", "Кравец", "Rainbow World", "Воротилин", "Варус-Видео", "ClubFATE", "HiWay Grope", "Banyan Studio", "Mallorn Studio", "Asian Miracle Group", "Эй Би Видео", "AniStar", "Korean Craze", "LakeFilms", "Невафильм", "Hallmark", "Netflix", "Mallorn Studio", "Sony Channel", "East Dream", "Bonsai Studio", "Lucky Production", "Octopus", "TUMBLER Studio", "CrazyCatStudio", "Amber", "Train Studio", "Анастасия Гайдаржи", "Мадлен Дюваль", "Fox Life", "Sound Film", "Cowabunga Studio", "Фильмэкспорт", "VO-Production", "Sound Film", "Nickelodeon", "MixFilm", "GreenРай Studio", "Sound-Group", "Back Board Cinema", "Кирилл Сагач", "Bonsai Studio", "Stevie", "OnisFilms", "MaxMeister", "Syfy Universal", "TUMBLER Studio", "NewStation", "Neo-Sound", "Муравский", "IdeaFilm", "Рутилов", "Тимофеев", "Лагута", "Дьяконов", "Zone Vision Studio", "Onibaku", "AniMaunt", "Voice Project", "AniStar", "Пифагор", "VoicePower", "StudioFilms", "Elysium", "AniStar", "BeniAffet", "Selena International", "Paul Bunyan", "CoralMedia", "Кондор", "Игмар", "ViP Premiere", "FireDub", "AveTurk", "Sony Sci-Fi", "Янкелевич", "Киреев", "Багичев", "2x2", "Лексикон", "Нота", "Arisu", "Superbit", "AveDorama", "VideoBIZ", "Киномания", "DDV", "Alternative Production", "WestFilm", "Анастасия Гайдаржи + Андрей Юрченко", "Киномания", "Agatha Studdio", "GreenРай Studio", "VSI Moscow", "Horizon Studio", "Flarrow Films", "Amazing Dubbing", "Asian Miracle Group", "Видеопродакшн", "VGM Studio", "FocusX", "CBS Drama", "NovaFilm", "Novamedia", "East Dream", "Дасевич", "Анатолий Гусев", "Twister", "Морозов", "NewComers", "kubik&ko", "DeMon", "Анатолий Ашмарин", "Inter Video", "Пронин", "AMC", "Велес", "Volume-6 Studio", "Хоррор Мэйкер", "Ghostface", "Sephiroth", "Акира", "Деваль Видео", "RussianGuy27", "neko64", "Shaman", "Franek Monk", "Ворон", "Andre1288", "Selena International", "GalVid", "Другое кино", "Студия NLS", "Sam2007", "HaseRiLLoPaW", "Севастьянов", "D.I.M.", "Марченко", "Журавлев", "Н-Кино", "Lazer Video", "SesDizi", "Red Media", "Рудой", "Товбин", "Сергей Дидок", "Хуан Рохас", "binjak", "Карусель", "Lizard Cinema", "Варус-Видео", "Акцент", "RG.Paravozik", "Max Nabokov", "Barin101", "Васька Куролесов", "Фортуна-Фильм", "Amalgama", "AnyFilm", "Студия Райдо", "Козлов", "Zoomvision Studio", "Пифагор", "Urasiko", "VIP Serial HD", "НСТ", "Кинолюкс", "Project Web Mania", "Завгородний", "AB-Video", "Twister", "Universal Channel", "Wakanim", "SnowRecords", "С.Р.И", "Старый Бильбо", "Ozz.tv", "Mystery Film", "РенТВ", "Латышев", "Ващенко", "Лайко", "Сонотек", "Psychotronic", "DIVA Universal", "Gremlin Creative Studio", "Нева-1", "Максим Жолобов", "Good People", "Мобильное телевидение", "Lazer Video", "IVI", "DoubleRec", "Milvus", "RedDiamond Studio", "Astana TV", "Никитин", "КТК", "D2Lab", "НСТ", "DoubleRec", "Black Street Records", "Останкино", "TatamiFilm", "Видеобаза", "Crunchyroll", "Novamedia", "RedRussian1337", "КонтентикOFF", "Creative Sound", "HelloMickey Production", "Пирамида", "CLS Media", "Сонькин", "Мастер Тэйп", "Garsu Pasaulis", "DDV", "IdeaFilm", "Gold Cinema", "Че!", "Нарышкин", "Intra Communications", "OnisFilms", "XDUB Dorama", "Кипарис", "Королёв", "visanti-vasaer", "Готлиб", "Paramount Channel", "СТС", "диктор CDV", "Pazl Voice", "Прямостанов", "Zerzia", "НТВ", "MGM", "Дьяков", "Вольга", "АРК-ТВ Studio", "Дубровин", "МИР", "Netflix", "Jetix", "Кипарис", "RUSCICO", "Seoul Bay", "Филонов", "Махонько", "Строев", "Саня Белый", "Говинда Рага", "Ошурков", "Horror Maker", "Хлопушка", "Хрусталев", "Антонов Николай", "Золотухин", "АрхиАзия", "Попов", "Ultradox", "Мост-Видео", "Альтера Парс", "Огородников", "Твин", "Хабар", "AimaksaLTV", "ТНТ", "FDV", "3df voice", "The Kitchen Russia", "Ульпаней Эльром", "Видеоимпульс", "GoodTime Media", "Alezan", "True Dubbing Studio", "FDV", "Карусель", "Интер", "Contentica", "Мельница", "RealFake", "ИДДК", "Инфо-фильм", "Мьюзик-трейд", "Кирдин | Stalk", "ДиоНиК", "Стасюк", "TV1000", "Hallmark", "Тоникс Медиа", "Бессонов", "Gears Media", "Бахурани", "NewDub", "Cinema Prestige", "Набиев", "New Dream Media", "ТВ3", "Малиновский Сергей", "Superbit", "Кенс Матвей", "LE-Production", "Voiz", "Светла", "Cinema Prestige", "JAM", "LDV", "Videogram", "Индия ТВ", "RedDiamond Studio", "Герусов", "Элегия фильм", "Nastia", "Семыкина Юлия", "Электричка", "Штамп Дмитрий", "Пятница", "Oneinchnales", "Gravi-TV", "D2Lab", "Кинопремьера", "Бусов Глеб", "LE-Production", "1001cinema", "Amazing Dubbing", "Emslie", "1+1", "100 ТВ", "1001 cinema", "2+2", "2х2", "3df voice", "4u2ges", "5 канал", "A. Lazarchuk", "AAA-Sound", "AB-Video", "AdiSound", "ALEKS KV", "AlexFilm", "AlphaProject", "Alternative Production", "Amalgam", "AMC", "Amedia", "AMS", "Andy", "AniLibria", "AniMedia", "Animegroup", "Animereactor", "AnimeSpace Team", "Anistar", "AniUA", "AniWayt", "Anything-group", "AOS", "Arasi project", "ARRU Workshop", "AuraFilm", "AvePremier", "AveTurk", "AXN Sci-Fi", "Azazel", "AzOnFilm", "BadBajo", "BadCatStudio", "BBC Saint-Petersburg", "BD CEE", "Black Street Records", "Bonsai Studio", "Boльгa", "Brain Production", "BraveSound", "BTI Studios", "Bubble Dubbing Company", "Byako Records", "Cactus Team", "Cartoon Network", "CBS Drama", "CDV", "Cinema Prestige", "CinemaSET GROUP", "CinemaTone", "ColdFilm", "Contentica", "CP Digital", "CPIG", "Crunchyroll", "Cuba77", "D1", "D2lab", "datynet", "DDV", "DeadLine", "DeadSno", "DeMon", "den904", "Description", "DexterTV", "Dice", "Discovery", "DniproFilm", "DoubleRec", "DreamRecords", "DVD Classic", "East Dream", "Eladiel", "Elegia", "ELEKTRI4KA", "Elrom", "ELYSIUM", "Epic Team", "eraserhead", "erogg", "Eurochannel", "Extrabit", "F-TRAIN", "Family Fan Edition", "FDV", "FiliZa Studio", "Film Prestige", "FilmGate", "FilmsClub", "FireDub", "Flarrow Films", "Flux-Team", "FocusStudio", "FOX", "Fox Crime", "Fox Russia", "FoxLife", "Foxlight", "Franek Monk", "Gala Voices", "Garsu Pasaulis", "Gears Media", "Gemini", "General Film", "GetSmart", "Gezell Studio", "Gits", "GladiolusTV", "GoldTeam", "Good People", "Goodtime Media", "GoodVideo", "GostFilm", "Gramalant", "Gravi-TV", "GREEN TEA", "GreenРай Studio", "Gremlin Creative Studio", "Hallmark", "HamsterStudio", "HiWay Grope", "Horizon Studio", "hungry_inri", "ICG", "ICTV", "IdeaFilm", "IgVin &amp; Solncekleshka", "ImageArt", "INTERFILM", "Ivnet Cinema", "IНТЕР", "Jakob Bellmann", "JAM", "Janetta", "Jaskier", "JeFerSon", "jept", "JetiX", "Jetvis", "JimmyJ", "KANSAI", "KIHO", "kiitos", "KinoGolos", "Kinomania", "KosharaSerials", "Kолобок", "L0cDoG", "LakeFilms", "LDV", "LE-Production", "LeDoyen", "LevshaFilm", "LeXiKC", "Liga HQ", "Line", "Lisitz", "Lizard Cinema Trade", "Lord32x", "lord666", "LostFilm", "Lucky Production", "Macross", "madrid", "Mallorn Studio", "Marclail", "Max Nabokov", "MC Entertainment", "MCA", "McElroy", "Mega-Anime", "Melodic Voice Studio", "metalrus", "MGM", "MifSnaiper", "Mikail", "Milirina", "MiraiDub", "MOYGOLOS", "MrRose", "MTV", "Murzilka", "MUZOBOZ", "National Geographic", "NemFilm", "Neoclassica", "NEON Studio", "New Dream Media", "NewComers", "NewStation", "NewStudio", "Nice-Media", "Nickelodeon", "No-Future", "NovaFilm", "Novamedia", "Octopus", "Oghra-Brown", "OMSKBIRD", "Onibaku", "OnisFilms", "OpenDub", "OSLIKt", "Ozz TV", "PaDet", "Paramount Comedy", "Paramount Pictures", "Parovoz Production", "PashaUp", "Paul Bunyan", "Pazl Voice", "PCB Translate", "Persona99", "PiratVoice", "Postmodern", "Profix Media", "Project Web Mania", "Prolix", "QTV", "R5", "Radamant", "RainDeath", "RATTLEBOX", "RealFake", "Reanimedia", "Rebel Voice", "RecentFilms", "Red Media", "RedDiamond Studio", "RedDog", "RedRussian1337", "Renegade Team", "RG Paravozik", "RinGo", "RoxMarty", "Rumble", "RUSCICO", "RusFilm", "RussianGuy27", "Saint Sound", "SakuraNight", "Satkur", "Sawyer888", "Sci-Fi Russia", "SDI Media", "Selena", "seqw0", "SesDizi", "SGEV", "Shachiburi", "SHIZA", "ShowJet", "Sky Voices", "SkyeFilmTV", "SmallFilm", "SmallFilm", "SNK-TV", "SnowRecords", "SOFTBOX", "SOLDLUCK2", "Solod", "SomeWax", "Sony Channel", "Sony Turbo", "Sound Film", "SpaceDust", "ssvss", "st.Elrom", "STEPonee", "SunshineStudio", "Superbit", "Suzaku", "sweet couple", "TatamiFilm", "TB5", "TF-AniGroup", "The Kitchen Russia", "The Mike Rec.", "Timecraft", "To4kaTV", "Tori", "Total DVD", "TrainStudio", "Troy", "True Dubbing Studio", "TUMBLER Studio", "turok1990", "TV 1000", "TVShows", "Twister", "Twix", "Tycoon", "Ultradox", "Universal Russia", "VashMax2", "VendettA", "VHS", "VicTeam", "VictoryFilms", "Video-BIZ", "Videogram", "ViruseProject", "visanti-vasaer", "VIZ Media", "VO-production", "Voice Project Studio", "VoicePower", "VSI Moscow", "VulpesVulpes", "Wakanim", "Wayland team", "WestFilm", "WiaDUB", "WVoice", "XL Media", "XvidClub Studio", "zamez", "ZEE TV", "Zendos", "ZM-SHOW", "Zone Studio", "Zone Vision", "Агапов", "Акопян", "Алексеев", "Артемьев", "Багичев", "Бессонов", "Васильев", "Васильцев", "Гаврилов", "Герусов", "Готлиб", "Григорьев", "Дасевич", "Дольский", "Карповский", "Кашкин", "Киреев", "Клюквин", "Костюкевич", "Матвеев", "Михалев", "Мишин", "Мудров", "Пронин", "Савченко", "Смирнов", "Тимофеев", "Толстобров", "Чуев", "Шуваев", "Яковлев", "ААА-sound", "АБыГДе", "Акалит", "Акира", "Альянс", "Амальгама", "АМС", "АнВад", "Анубис", "Anubis", "Арк-ТВ", "АРК-ТВ Studio", "Б. Федоров", "Бибиков", "Бигыч", "Бойков", "Абдулов", "Белов", "Вихров", "Воронцов", "Горчаков", "Данилов", "Дохалов", "Котов", "Кошкин", "Назаров", "Попов", "Рукин", "Рутилов", "Варус Видео", "Васька Куролесов", "Ващенко С.", "Векшин", "Велес", "Весельчак", "Видеоимпульс", "Витя «говорун»", "Войсовер", "Вольга", "Ворон", "Воротилин", "Г. Либергал", "Г. Румянцев", "Гей Кино Гид", "ГКГ", "Глуховский", "Гризли", "Гундос", "Деньщиков", "Есарев", "Нурмухаметов", "Пучков", "Стасюк", "Шадинский", "Штамп", "sf@irat", "Держиморда", "Домашний", "ДТВ", "Дьяконов", "Е. Гаевский", "Е. Гранкин", "Е. Лурье", "Е. Рудой", "Е. Хрусталёв", "ЕА Синема", "Екатеринбург Арт", "Живаго", "Жучков", "З Ранку До Ночі", "Завгородний", "Зебуро", "Зереницын", "И. Еремеев", "И. Клушин", "И. Сафронов", "И. Степанов", "ИГМ", "Игмар", "ИДДК", "Имидж-Арт", "Инис", "Ирэн", "Ист-Вест", "К. Поздняков", "К. Филонов", "К9", "Карапетян", "Кармен Видео", "Карусель", "Квадрат Малевича", "Килька", "Кипарис", "Королев", "Котова", "Кравец", "Кубик в Кубе", "Кураж-Бамбей", "Л. Володарский", "Лазер Видео", "ЛанселаП", "Лапшин", "Лексикон", "Ленфильм", "Леша Прапорщик", "Лизард", "Люсьена", "Заугаров", "Иванов", "Иванова и П. Пашут", "Латышев", "Ошурков", "Чадов", "Яроцкий", "Максим Логинофф", "Малиновский", "Марченко", "Мастер Тэйп", "Махонько", "Машинский", "Медиа-Комплекс", "Мельница", "Мика Бондарик", "Миняев", "Мительман", "Мост Видео", "Мосфильм", "Муравский", "Мьюзик-трейд", "Н-Кино", "Н. Антонов", "Н. Дроздов", "Н. Золотухин", "Н.Севастьянов seva1988", "Набиев", "Наталья Гурзо", "НЕВА 1", "Невафильм", "НеЗупиняйПродакшн", "Неоклассика", "Несмертельное оружие", "НЛО-TV", "Новий", "Новый диск", "Новый Дубляж", "Новый Канал", "Нота", "НСТ", "НТВ", "НТН", "Оверлорд", "Огородников", "Омикрон", "Гланц", "Карцев", "Морозов", "Прямостанов", "Санаев", "Парадиз", "Пепелац", "Первый канал ОРТ", "Переводман", "Перец", "Петербургский дубляж", "Петербуржец", "Пирамида", "Пифагор", "Позитив-Мультимедиа", "Прайд Продакшн", "Премьер Видео", "Премьер Мультимедиа", "Причудики", "Р. Янкелевич", "Райдо", "Ракурс", "РенТВ", "Россия", "РТР", "Русский дубляж", "Русский Репортаж", "РуФилмс", "Рыжий пес", "С. Визгунов", "С. Дьяков", "С. Казаков", "С. Кузнецов", "С. Кузьмичёв", "С. Лебедев", "С. Макашов", "С. Рябов", "С. Щегольков", "С.Р.И.", "Сolumbia Service", "Самарский", "СВ Студия", "СВ-Дубль", "Светла", "Селена Интернешнл", "Синема Трейд", "Синема УС", "Синта Рурони", "Синхрон", "Советский", "Сокуров", "Солодухин", "Сонотек", "Сонькин", "Союз Видео", "Союзмультфильм", "СПД - Сладкая парочка", "Строев", "СТС", "Студии Суверенного Лепрозория", "Студия «Стартрек»", "KOleso", "Студия Горького", "Студия Колобок", "Студия Пиратского Дубляжа", "Студия Райдо", "Студия Трёх", "Гуртом", "Супербит", "Сыендук", "Так Треба Продакшн", "ТВ XXI век", "ТВ СПб", "ТВ-3", "ТВ6", "ТВИН", "ТВЦ", "ТВЧ 1", "ТНТ", "ТО Друзей", "Толмачев", "Точка Zрения", "Трамвай-фильм", "ТРК", "Уолт Дисней Компани", "Хихидок", "Хлопушка", "Цікава Ідея", "Четыре в квадрате", "Швецов", "Штамп", "Штейн", "Ю. Живов", "Ю. Немахов", "Ю. Сербин", "Ю. Товбин", "Я. Беллманн", "Red Head Sound", "UKR"];
	  var filter_langs = [{
	    title: '#{filter_lang_ru}',
	    code: 'ru'
	  }, {
	    title: '#{filter_lang_uk}',
	    code: 'uk'
	  }, {
	    title: '#{filter_lang_en}',
	    code: 'en'
	  }, {
	    title: '#{filter_lang_be}',
	    code: 'be'
	  }, {
	    title: '#{filter_lang_zh}',
	    code: 'zh|cn'
	  }, {
	    title: '#{filter_lang_ja}',
	    code: 'ja'
	  }, {
	    title: '#{filter_lang_ko}',
	    code: 'ko'
	  }, {
	    title: '#{filter_lang_af}',
	    code: 'af'
	  }, {
	    title: '#{filter_lang_sq}',
	    code: 'sq'
	  }, {
	    title: '#{filter_lang_ar}',
	    code: 'ar'
	  }, {
	    title: '#{filter_lang_az}',
	    code: 'az'
	  }, {
	    title: '#{filter_lang_hy}',
	    code: 'hy'
	  }, {
	    title: '#{filter_lang_ba}',
	    code: 'ba'
	  }, {
	    title: '#{filter_lang_bg}',
	    code: 'bg'
	  }, {
	    title: '#{filter_lang_bn}',
	    code: 'bn'
	  }, {
	    title: '#{filter_lang_bs}',
	    code: 'bs'
	  }, {
	    title: '#{filter_lang_ca}',
	    code: 'ca'
	  }, {
	    title: '#{filter_lang_ce}',
	    code: 'ce'
	  }, {
	    title: '#{filter_lang_cs}',
	    code: 'cs'
	  }, {
	    title: '#{filter_lang_da}',
	    code: 'da'
	  }, {
	    title: '#{filter_lang_ka}',
	    code: 'ka'
	  }, {
	    title: '#{filter_lang_de}',
	    code: 'de'
	  }, {
	    title: '#{filter_lang_el}',
	    code: 'el'
	  }, {
	    title: '#{filter_lang_es}',
	    code: 'es'
	  }, {
	    title: '#{filter_lang_et}',
	    code: 'et'
	  }, {
	    title: '#{filter_lang_fa}',
	    code: 'fa'
	  }, {
	    title: '#{filter_lang_fi}',
	    code: 'fi'
	  }, {
	    title: '#{filter_lang_fr}',
	    code: 'fr'
	  }, {
	    title: '#{filter_lang_ga}',
	    code: 'ga'
	  }, {
	    title: '#{filter_lang_gl}',
	    code: 'gl'
	  }, {
	    title: '#{filter_lang_gn}',
	    code: 'gn'
	  }, {
	    title: '#{filter_lang_he}',
	    code: 'he'
	  }, {
	    title: '#{filter_lang_hi}',
	    code: 'hi'
	  }, {
	    title: '#{filter_lang_hr}',
	    code: 'hr'
	  }, {
	    title: '#{filter_lang_hu}',
	    code: 'hu'
	  }, {
	    title: '#{filter_lang_id}',
	    code: 'id'
	  }, {
	    title: '#{filter_lang_is}',
	    code: 'is'
	  }, {
	    title: '#{filter_lang_it}',
	    code: 'it'
	  }, {
	    title: '#{filter_lang_kk}',
	    code: 'kk'
	  }, {
	    title: '#{filter_lang_ks}',
	    code: 'ks'
	  }, {
	    title: '#{filter_lang_ku}',
	    code: 'ku'
	  }, {
	    title: '#{filter_lang_ky}',
	    code: 'ky'
	  }, {
	    title: '#{filter_lang_lt}',
	    code: 'lt'
	  }, {
	    title: '#{filter_lang_lv}',
	    code: 'lv'
	  }, {
	    title: '#{filter_lang_mi}',
	    code: 'mi'
	  }, {
	    title: '#{filter_lang_mk}',
	    code: 'mk'
	  }, {
	    title: '#{filter_lang_mn}',
	    code: 'mn'
	  }, {
	    title: '#{filter_lang_mo}',
	    code: 'mo'
	  }, {
	    title: '#{filter_lang_mt}',
	    code: 'mt'
	  }, {
	    title: '#{filter_lang_no}',
	    code: 'no|nb|nn'
	  }, {
	    title: '#{filter_lang_ne}',
	    code: 'ne'
	  }, {
	    title: '#{filter_lang_nl}',
	    code: 'nl'
	  }, {
	    title: '#{filter_lang_pa}',
	    code: 'pa'
	  }, {
	    title: '#{filter_lang_pl}',
	    code: 'pl'
	  }, {
	    title: '#{filter_lang_ps}',
	    code: 'ps'
	  }, {
	    title: '#{filter_lang_pt}',
	    code: 'pt'
	  }, {
	    title: '#{filter_lang_ro}',
	    code: 'ro'
	  }, {
	    title: '#{filter_lang_si}',
	    code: 'si'
	  }, {
	    title: '#{filter_lang_sk}',
	    code: 'sk'
	  }, {
	    title: '#{filter_lang_sl}',
	    code: 'sl'
	  }, {
	    title: '#{filter_lang_sm}',
	    code: 'sm'
	  }, {
	    title: '#{filter_lang_so}',
	    code: 'so'
	  }, {
	    title: '#{filter_lang_sr}',
	    code: 'sr'
	  }, {
	    title: '#{filter_lang_sv}',
	    code: 'sv'
	  }, {
	    title: '#{filter_lang_sw}',
	    code: 'sw'
	  }, {
	    title: '#{filter_lang_ta}',
	    code: 'ta'
	  }, {
	    title: '#{filter_lang_tg}',
	    code: 'tg'
	  }, {
	    title: '#{filter_lang_th}',
	    code: 'th'
	  }, {
	    title: '#{filter_lang_tk}',
	    code: 'tk'
	  }, {
	    title: '#{filter_lang_tr}',
	    code: 'tr'
	  }, {
	    title: '#{filter_lang_tt}',
	    code: 'tt'
	  }, {
	    title: '#{filter_lang_ur}',
	    code: 'ur'
	  }, {
	    title: '#{filter_lang_uz}',
	    code: 'uz'
	  }, {
	    title: '#{filter_lang_vi}',
	    code: 'vi'
	  }, {
	    title: '#{filter_lang_yi}',
	    code: 'yi'
	  }];
	  filter_items.lang = filter_items.lang.concat(filter_langs.map(function (a) {
	    return Lampa.Lang.translate(a.title);
	  }));
	  scroll.minus(files.render().find('.explorer__files-head'));
	  scroll.body().addClass('torrent-list');
	  this.create = function () {
	    return this.render();
	  };
	  this.initialize = function () {
	    var _this = this;
	    this.activity.loader(true);
	    if (object.movie.original_language === 'ja' && object.movie.genres.find(function (g) {
	      return g.id === 16;
	    }) && Lampa.Storage.field('language') !== 'en') {
	      network.silent(Lampa.TMDB.api((object.movie.name ? 'tv' : 'movie') + '/' + object.movie.id + '?api_key=' + Lampa.TMDB.key() + '&language=en'), function (result) {
	        object.search_two = result.name || result.title;
	        _this.parse();
	      }, this.parse.bind(this));
	    } else {
	      this.parse();
	    }
	    scroll.onEnd = this.next.bind(this);
	    return this.render();
	  };
	  this.parse = function () {
	    var _this2 = this;
	    filter = new Lampa.Filter(object);
	    Parser.get(object, function (data) {
	      results = data;
	      _this2.build();
	      Lampa.Layer.update(scroll.render(true));
	      _this2.activity.loader(false);
	      _this2.activity.toggle();
	    }, function (text) {
	      _this2.empty(Lampa.Lang.translate('torrent_error_connect') + ': ' + text);
	    });
	    filter.onSearch = function (value) {
	      Lampa.Activity.replace({
	        search: value,
	        clarification: true
	      });
	    };
	    filter.onBack = function () {
	      _this2.start();
	    };
	    filter.render().find('.selector').on('hover:focus', function (e) {
	      e.target;
	    });
	    filter.addButtonBack();
	    files.appendHead(filter.render());
	  };
	  this.empty = function (descr) {
	    var empty = new Lampa.Empty({
	      descr: descr
	    });
	    files.render().find('.explorer__files-head').addClass('hide');
	    files.appendFiles(empty.render(filter.empty()));
	    empty.render().find('.simple-button').on('hover:enter', function () {
	      filter.render().find('.filter--search').trigger('hover:enter');
	    });
	    this.start = empty.start;
	    this.activity.loader(false);
	    this.activity.toggle();
	  };
	  this.listEmpty = function () {
	    var em = Lampa.Template.get('empty_filter');
	    var bn = $('<div class="simple-button selector"><span>' + Lampa.Lang.translate('filter_clarify') + '</span></div>');
	    bn.on('hover:enter', function () {
	      filter.render().find('.filter--filter').trigger('hover:enter');
	    });
	    em.find('.empty-filter__title').remove();
	    em.find('.empty-filter__buttons').removeClass('hide').append(bn);
	    scroll.append(em);
	  };
	  this.buildSorted = function () {
	    var need = Lampa.Storage.get('torrents_sort', 'Seeders');
	    var select = [{
	      title: Lampa.Lang.translate('torrent_parser_sort_by_seeders'),
	      sort: 'Seeders'
	    }, {
	      title: Lampa.Lang.translate('torrent_parser_sort_by_size'),
	      sort: 'Size'
	    }, {
	      title: Lampa.Lang.translate('torrent_parser_sort_by_name'),
	      sort: 'Title'
	    }, {
	      title: Lampa.Lang.translate('torrent_parser_sort_by_tracker'),
	      sort: 'Tracker'
	    }, {
	      title: Lampa.Lang.translate('torrent_parser_sort_by_date'),
	      sort: 'PublisTime'
	    }, {
	      title: Lampa.Lang.translate('torrent_parser_sort_by_viewed'),
	      sort: 'viewed'
	    }];
	    select.forEach(function (element) {
	      if (element.sort === need) element.selected = true;
	    });
	    filter.sort(results.Results, need);
	    this.sortWithPopular();
	    filter.set('sort', select);
	    this.selectedSort();
	  };
	  this.sortWithPopular = function () {
	    var popular = [];
	    var other = [];
	    results.Results.forEach(function (a) {
	      if (a.viewing_request) popular.push(a);else other.push(a);
	    });
	    popular.sort(function (a, b) {
	      return b.viewing_average - a.viewing_average;
	    });
	    results.Results = popular.concat(other);
	  };
	  this.cardID = function () {
	    return object.movie.id + ':' + (object.movie.number_of_seasons ? 'tv' : 'movie');
	  };
	  this.getFilterData = function () {
	    var all = Lampa.Storage.cache('torrents_filter_data', 500, {});
	    var cid = this.cardID();
	    return all[cid] || Lampa.Storage.get('torrents_filter', '{}');
	  };
	  this.setFilterData = function (filter) {
	    var all = Lampa.Storage.cache('torrents_filter_data', 500, {});
	    var cid = this.cardID();
	    all[cid] = filter;
	    Lampa.Storage.set('torrents_filter_data', all);
	    Lampa.Storage.set('torrents_filter', filter);
	  };
	  this.buildFilterd = function () {
	    var need = this.getFilterData();
	    var select = [];
	    var add = function add(type, title) {
	      var items = filter_items[type];
	      var subitems = [];
	      var multiple = filter_multiple.indexOf(type) >= 0;
	      var value = need[type];
	      if (multiple) value = Lampa.Arrays.toArray(value);
	      items.forEach(function (name, i) {
	        subitems.push({
	          title: name,
	          //selected: multiple ? i === 0 : value === i,
	          checked: multiple && value.indexOf(name) >= 0,
	          checkbox: multiple && i > 0,
	          noselect: true,
	          index: i
	        });
	      });
	      select.push({
	        title: title,
	        subtitle: multiple ? value.length ? value.join(', ') : items[0] : typeof value === 'undefined' ? items[0] : items[value],
	        items: subitems,
	        noselect: true,
	        stype: type
	      });
	    };
	    filter_items.voice = [Lampa.Lang.translate('torrent_parser_any_two'), Lampa.Lang.translate('torrent_parser_voice_dubbing'), Lampa.Lang.translate('torrent_parser_voice_polyphonic'), Lampa.Lang.translate('torrent_parser_voice_two'), Lampa.Lang.translate('torrent_parser_voice_amateur')];
	    filter_items.tracker = [Lampa.Lang.translate('torrent_parser_any_two')];
	    filter_items.season = [Lampa.Lang.translate('torrent_parser_any_two')];
	    results.Results.forEach(function (element) {
	      var title = element.Title.toLowerCase(),
	        tracker = element.Tracker;
	      for (var _i = 0; _i < voices.length; _i++) {
	        var voice = voices[_i].toLowerCase();
	        if (title.indexOf(voice) >= 0) {
	          if (filter_items.voice.indexOf(voices[_i]) === -1) filter_items.voice.push(voices[_i]);
	        }
	        if (element.info && element.info.voices) {
	          if (element.info.voices.map(function (v) {
	            return v.toLowerCase();
	          }).indexOf(voice) >= 0) {
	            if (filter_items.voice.indexOf(voices[_i]) === -1) filter_items.voice.push(voices[_i]);
	          }
	        }
	      }
	      tracker.split(',').forEach(function (t) {
	        if (filter_items.tracker.indexOf(t.trim()) === -1) filter_items.tracker.push(t.trim());
	      });
	      var season = title.match(/.?s\[(\d+)-].?|.?s(\d+).?|.?\((\d+) сезон.?|.?season (\d+),.?/);
	      if (season) {
	        season = season.filter(function (c) {
	          return c;
	        });
	        if (season.length > 1) {
	          var orig = season[1];
	          var number = parseInt(orig) + '';
	          if (number && finded_seasons.indexOf(number) === -1) {
	            finded_seasons.push(number);
	            finded_seasons_full.push(orig);
	          }
	        }
	      }
	    });
	    finded_seasons_full.sort(function (a, b) {
	      var ac = parseInt(a);
	      var bc = parseInt(b);
	      if (ac > bc) return 1;else if (ac < bc) return -1;else return 0;
	    });
	    finded_seasons.sort(function (a, b) {
	      var ac = parseInt(a);
	      var bc = parseInt(b);
	      if (ac > bc) return 1;else if (ac < bc) return -1;else return 0;
	    });
	    if (finded_seasons.length) filter_items.season = filter_items.season.concat(finded_seasons);

	    //надо очистить от отсутствующих ключей
	    need.voice = Lampa.Arrays.removeNoIncludes(Lampa.Arrays.toArray(need.voice), filter_items.voice);
	    need.tracker = Lampa.Arrays.removeNoIncludes(Lampa.Arrays.toArray(need.tracker), filter_items.tracker);
	    need.season = Lampa.Arrays.removeNoIncludes(Lampa.Arrays.toArray(need.season), filter_items.season);
	    this.setFilterData(need);
	    select.push({
	      title: Lampa.Lang.translate('torrent_parser_reset'),
	      reset: true
	    });
	    add('quality', Lampa.Lang.translate('torrent_parser_quality'));
	    add('tracker', Lampa.Lang.translate('torrent_parser_tracker'));
	    add('year', Lampa.Lang.translate('torrent_parser_year'));
	    filter.set('filter', select);
	    this.selectedFilter();
	  };
	  this.selectedFilter = function () {
	    var need = this.getFilterData(),
	      select = [];
	    for (var _i2 in need) {
	      if (need[_i2]) {
	        if (Lampa.Arrays.isArray(need[_i2])) {
	          if (need[_i2].length) select.push(filter_translate[_i2] + ':' + need[_i2].join(', '));
	        } else {
	          select.push(filter_translate[_i2] + ': ' + filter_items[_i2][need[_i2]]);
	        }
	      }
	    }
	    filter.chosen('filter', select);
	  };
	  this.selectedSort = function () {
	    var select = Lampa.Storage.get('torrents_sort', 'Seeders');
	    filter.chosen('sort', [sort_translate[select]]);
	  };
	  this.build = function () {
	    var _this3 = this;
	    this.buildSorted();
	    this.buildFilterd();
	    this.filtred();
	    filter.onSelect = function (type, a, b) {
	      if (type === 'sort') {
	        Lampa.Storage.set('torrents_sort', a.sort);
	        filter.sort(results.Results, a.sort);
	        _this3.sortWithPopular();
	      } else {
	        if (a.reset) {
	          _this3.setFilterData({});
	          _this3.buildFilterd();
	        } else {
	          a.items.forEach(function (n) {
	            return n.checked = false;
	          });
	          var filter_data = _this3.getFilterData();
	          filter_data[a.stype] = filter_multiple.indexOf(a.stype) >= 0 ? [] : b.index;
	          a.subtitle = b.title;
	          _this3.setFilterData(filter_data);
	        }
	      }
	      _this3.applyFilter();
	      _this3.start();
	    };
	    filter.onCheck = function (type, a, b) {
	      var data = _this3.getFilterData(),
	        need = Lampa.Arrays.toArray(data[a.stype]);
	      if (b.checked && need.indexOf(b.title)) need.push(b.title);else if (!b.checked) Lampa.Arrays.remove(need, b.title);
	      data[a.stype] = need;
	      _this3.setFilterData(data);
	      a.subtitle = need.length ? need.join(', ') : a.items[0].title;
	      _this3.applyFilter();
	    };
	    if (results.Results.length) this.showResults();else {
	      this.empty(Lampa.Lang.translate('torrent_parser_empty'));
	    }
	  };
	  this.applyFilter = function () {
	    this.filtred();
	    this.selectedFilter();
	    this.selectedSort();
	    this.reset();
	    this.showResults();
	    last = scroll.render().find('.torrent-item:eq(0)')[0];
	    if (last) scroll.update(last);else scroll.reset();
	  };
	  this.filtred = function () {
	    var filter_data = this.getFilterData();
	    var filter_any = false;
	    for (var _i3 in filter_data) {
	      var filr = filter_data[_i3];
	      if (filr) {
	        if (Lampa.Arrays.isArray(filr)) {
	          if (filr.length) filter_any = true;
	        } else filter_any = true;
	      }
	    }
	    filtred = results.Results.filter(function (element) {
	      if (filter_any) {
	        var passed = false,
	          nopass = false,
	          title = element.Title.toLowerCase(),
	          tracker = element.Tracker;
	        var qua = Lampa.Arrays.toArray(filter_data.quality),
	          hdr = filter_data.hdr,
	          dv = filter_data.dv,
	          sub = filter_data.sub,
	          voi = Lampa.Arrays.toArray(filter_data.voice),
	          tra = Lampa.Arrays.toArray(filter_data.tracker),
	          ses = Lampa.Arrays.toArray(filter_data.season),
	          lng = Lampa.Arrays.toArray(filter_data.lang),
	          yer = filter_data.year;
	        var test = function test(search, test_index) {
	          var regex = new RegExp(search);
	          return test_index ? title.indexOf(search) >= 0 : regex.test(title);
	        };
	        var check = function check(search, invert) {
	          if (test(search)) {
	            if (invert) nopass = true;else passed = true;
	          } else {
	            if (invert) passed = true;else nopass = true;
	          }
	        };
	        var includes = function includes(type, arr) {
	          if (!arr.length) return;
	          var any = false;
	          arr.forEach(function (a) {
	            if (type === 'quality') {
	              if (a === '4k' && test('(4k|uhd)[ |\\]|,|$]|2160[pр]|ultrahd')) any = true;
	              if (a === '1080p' && test('fullhd|1080[pр]')) any = true;
	              if (a === '720p' && test('720[pр]')) any = true;
	            }
	            if (type === 'voice') {
	              var p = filter_items.voice.indexOf(a);
	              var n = element.info && element.info.voices ? element.info.voices.map(function (v) {
	                return v.toLowerCase();
	              }) : [];
	              if (p === 1) {
	                if (test('дублирован|дубляж|  apple| dub| d[,| |$]|[,|\\s]дб[,|\\s|$]')) any = true;
	              } else if (p === 2) {
	                if (test('многоголос| p[,| |$]|[,|\\s](лм|пм)[,|\\s|$]')) any = true;
	              } else if (p === 3) {
	                if (test('двухголос|двуголос| l2[,| |$]|[,|\\s](лд|пд)[,|\\s|$]')) any = true;
	              } else if (p === 4) {
	                if (test('любитель|авторский| l1[,| |$]|[,|\\s](ло|ап)[,|\\s|$]')) any = true;
	              } else if (test(a.toLowerCase(), true)) any = true;else if (n.length && n.indexOf(a.toLowerCase()) >= 0) any = true;
	            }
	            if (type === 'lang') {
	              var _p = filter_items.lang.indexOf(a);
	              var c = filter_langs[_p - 1];
	              if (element.languages) {
	                if (element.languages.find(function (l) {
	                  return l.toLowerCase().slice(0, 2) === c.code;
	                })) any = true;
	              } else if (title.indexOf(c.code) >= 0) any = true;
	            }
	            if (type === 'tracker') {
	              if (tracker.split(',').find(function (t) {
	                return t.trim().toLowerCase() === a.toLowerCase();
	              })) any = true;
	            }
	            if (type === 'season') {
	              var pad = function pad(n) {
	                return n < 10 && n !== '01' ? '0' + n : n;
	              };
	              var _i4 = finded_seasons.indexOf(a);
	              var f = finded_seasons_full[_i4];
	              var SES1 = title.match(/\[s(\d+)-(\d+)]/);
	              var SES2 = title.match(/season (\d+)-(\d+)/);
	              var SES3 = title.match(/season (\d+) - (\d+).?/);
	              var SES4 = title.match(/сезон: (\d+)-(\d+) \/.?/);
	              if (Array.isArray(SES1) && (f >= SES1[1] && f <= SES1[2] || pad(f) >= SES1[1] && pad(f) <= SES1[2] || f >= pad(SES1[1]) && f <= pad(SES1[2]))) any = true;
	              if (Array.isArray(SES2) && (f >= SES2[1] && f <= SES2[2] || pad(f) >= SES2[1] && pad(f) <= SES2[2] || f >= pad(SES2[1]) && f <= pad(SES2[2]))) any = true;
	              if (Array.isArray(SES3) && (f >= SES3[1] && f <= SES3[2] || pad(f) >= SES3[1] && pad(f) <= SES3[2] || f >= pad(SES3[1]) && f <= pad(SES3[2]))) any = true;
	              if (Array.isArray(SES4) && (f >= SES4[1] && f <= SES4[2] || pad(f) >= SES4[1] && pad(f) <= SES4[2] || f >= pad(SES4[1]) && f <= pad(SES4[2]))) any = true;
	              if (test('.?\\[0' + f + 'x0.?|.?\\[s' + f + '-.?|.?-' + f + '\\].?|.?\\[s0' + f + '\\].?|.?\\[s' + f + '\\].?|.?s' + f + 'e.?|.?s' + f + '-.?|.?сезон: ' + f + ' .?|.?сезон:' + f + '.?|сезон ' + f + ',.?|\\[' + f + ' сезон.?|.?\\(' + f + ' сезон.?|.?season ' + f + '.?')) any = true;
	            }
	          });
	          if (any) passed = true;else nopass = true;
	        };
	        includes('quality', qua);
	        includes('voice', voi);
	        includes('tracker', tra);
	        includes('season', ses);
	        includes('lang', lng);
	        if (hdr) check('[\\[| ]hdr[10| |\\]|,|$]', hdr !== 1);
	        if (dv === 0) {
	          check(filter_items.dv[dv], dv !== 1);
	        } else if (dv === 1) {
	          check('dolby vision');
	        } else if (dv === 2) {
	          check('dolby vision tv');
	        } else if (dv === 3) {
	          check('dolby vision', dv !== 0);
	        }
	        if (sub) check(' sub|[,|\\s]ст[,|\\s|$]', sub !== 1);
	        if (yer) {
	          check(filter_items.year[yer]);
	        }
	        return nopass ? false : passed;
	      } else return true;
	    });
	  };
	  this.showResults = function () {
	    total_pages = Math.ceil(filtred.length / 20);
	    if (filtred.length) {
	      this.append(filtred.slice(0, 20));
	    } else {
	      this.listEmpty();
	    }
	    files.appendFiles(scroll.render());
	  };
	  this.reset = function () {
	    last = false;
	    scroll.clear();
	  };
	  this.next = function () {
	    if (object.page < 15 && object.page < total_pages) {
	      object.page++;
	      var offset = (object.page - 1) * 20;
	      this.append(filtred.slice(offset, offset + 20), true);
	    }
	  };
	  this.loadMagnet = function (element, call) {
	    var _this4 = this;
	    Parser.marnet(element, function () {
	      Lampa.Modal.close();
	      element.poster = object.movie.img;
	      _this4.start();
	      if (call) call();else Torrent.start(element, object.movie);
	    }, function (text) {
	      Lampa.Modal.update(Lampa.Template.get('error', {
	        title: Lampa.Lang.translate('title_error'),
	        text: text
	      }));
	    });
	    Lampa.Modal.open({
	      title: '',
	      html: Lampa.Template.get('modal_pending', {
	        text: Lampa.Lang.translate('torrent_get_magnet')
	      }),
	      onBack: function onBack() {
	        Lampa.Modal.close();
	        network.clear();
	        Lampa.Controller.toggle('content');
	      }
	    });
	  };
	  this.mark = function (element, item, add) {
	    if (add) {
	      if (viewed.indexOf(element.hash) === -1) {
	        viewed.push(element.hash);
	        item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
	      }
	    } else {
	      element.viewed = true;
	      Lampa.Arrays.remove(viewed, element.hash);
	      item.find('.torrent-item__viewed').remove();
	    }
	    element.viewed = add;
	    Lampa.Storage.set('torrents_view', viewed);
	    if (!add) Lampa.Storage.remove('torrents_view', element.hash);
	  };
	  this.addToBase = function (element) {
	    Lampa.Torserver.add({
	      poster: object.movie.img,
	      title: object.movie.title + ' / ' + object.movie.original_title,
	      link: element.MagnetUri || element.Link,
	      data: {
	        lampa: true,
	        movie: object.movie
	      }
	    }, function () {
	      Lampa.Noty.show(object.movie.title + ' - ' + Lampa.Lang.translate('torrent_parser_added_to_mytorrents'));
	    });
	  };
	  this.append = function (items, append) {
	    var _this5 = this;
	    items.forEach(function (element) {
	      var date = Lampa.Utils.parseTime(element.PublishDate);
	      var bitrate = object.movie.runtime ? Lampa.Utils.calcBitrate(element.Size, object.movie.runtime) : 0;
	      Lampa.Arrays.extend(element, {
	        title: element.Title,
	        date: date.full,
	        tracker: element.Tracker,
	        bitrate: bitrate,
	        size: !isNaN(parseInt(element.Size)) ? Lampa.Utils.bytesToSize(element.Size) : element.size,
	        seeds: element.Seeders,
	        grabs: element.Peers
	      });
	      var item = Lampa.Template.get('torrent', element);
	      if (element.ffprobe) {
	        var ffprobe_elem = item.find('.torrent-item__ffprobe');
	        var ffprobe_tags = [];
	        var video = element.ffprobe.find(function (a) {
	          return a.codec_type === 'video';
	        });
	        var audio = element.ffprobe.filter(function (a) {
	          return a.codec_type === 'audio' && a.tags;
	        });
	        var subs = element.ffprobe.filter(function (a) {
	          return a.codec_type === 'subtitle' && a.tags;
	        });
	        var voice = element.info && element.info.voices ? element.info.voices : [];
	        if (video) ffprobe_tags.push({
	          media: 'video',
	          value: video.width + 'x' + video.height
	        });
	        var is_71 = element.ffprobe.find(function (a) {
	          return a.codec_type === 'audio' && a.channels === 8;
	        });
	        var is_51 = element.ffprobe.find(function (a) {
	          return a.codec_type === 'audio' && a.channels === 6;
	        });
	        if (is_71) ffprobe_tags.push({
	          media: 'channels',
	          value: '7.1'
	        });
	        if (is_51) ffprobe_tags.push({
	          media: 'channels',
	          value: '5.1'
	        });
	        audio.forEach(function (a) {
	          var line = [];
	          var lang = (a.tags.language || '').toUpperCase();
	          var name = a.tags.title || a.tags.handler_name;
	          if (lang) line.push(lang);
	          if (name && lang !== 'ENG') {
	            var translate = voice.find(function (v) {
	              return name.toLowerCase().indexOf(v.toLowerCase()) >= 0;
	            });
	            name = translate ? translate : name;
	            if (name.toLowerCase().indexOf('dub') >= 0 || name.toLowerCase() === 'd') name = Lampa.Lang.translate('torrent_parser_voice_dubbing');
	            line.push(Lampa.Utils.shortText(Lampa.Utils.capitalizeFirstLetter(name), 20));
	          }
	          if (line.length) ffprobe_tags.push({
	            media: 'audio',
	            value: line.join(' - ')
	          });
	        });
	        var find_subtitles = [];
	        subs.forEach(function (a) {
	          var lang = (a.tags.language || '').toUpperCase();
	          if (lang) find_subtitles.push(lang);
	        });
	        find_subtitles = find_subtitles.filter(function (el, pos) {
	          return find_subtitles.indexOf(el) === pos;
	        });
	        find_subtitles.slice(0, 4).forEach(function (a) {
	          ffprobe_tags.push({
	            media: 'subtitle',
	            value: a
	          });
	        });
	        if (find_subtitles.length > 4) ffprobe_tags.push({
	          media: 'subtitle',
	          value: '+' + (find_subtitles.length - 4)
	        });
	        ffprobe_tags = ffprobe_tags.filter(function (el, pos) {
	          return ffprobe_tags.map(function (a) {
	            return a.value + a.media;
	          }).indexOf(el.value + el.media) === pos;
	        });
	        ffprobe_tags.forEach(function (tag) {
	          ffprobe_elem.append('<div class="m-' + tag.media + '">' + tag.value + '</div>');
	        });
	        if (ffprobe_tags.length) ffprobe_elem.removeClass('hide');
	      }
	      if (!bitrate) item.find('.bitrate').remove();
	      if (element.viewed) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
	      if (!element.size || parseInt(element.size) === 0) item.find('.torrent-item__size').remove();
	      item.on('hover:focus', function (e) {
	        last = e.target;
	        scroll.update($(e.target), true);
	        Lampa.Helper.show('torrents', Lampa.Lang.translate('helper_torrents'), item);
	      }).on('hover:hover hover:touch', function (e) {
	        last = e.target;
	        Navigator.focused(last);
	      }).on('hover:enter', function (e) {
	        last = e.target;
	        Lampa.Torrent.opened(function () {
	          _this5.mark(element, item, true);
	        });
	        if (element.reguest && !element.MagnetUri) {
	          _this5.loadMagnet(element);
	        } else {
	          element.poster = object.movie.img;
	          _this5.start();
	          Torrent.start(element, object.movie);
	        }
	        Lampa.Listener.send('torrent', {
	          type: 'onenter',
	          element: element,
	          item: item
	        });
	      }).on('hover:long', function () {
	        var enabled = Lampa.Controller.enabled().name;
	        var menu = [{
	          title: Lampa.Lang.translate('torrent_parser_add_to_mytorrents'),
	          tomy: true
	        }, {
	          title: Lampa.Lang.translate('torrent_parser_label_title'),
	          subtitle: Lampa.Lang.translate('torrent_parser_label_descr'),
	          mark: true
	        }, {
	          title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
	          subtitle: Lampa.Lang.translate('torrent_parser_label_cancel_descr'),
	          unmark: true
	        }];
	        Lampa.Listener.send('torrent', {
	          type: 'onlong',
	          element: element,
	          item: item,
	          menu: menu
	        });
	        Lampa.Select.show({
	          title: Lampa.Lang.translate('title_action'),
	          items: menu,
	          onBack: function onBack() {
	            Lampa.Controller.toggle(enabled);
	          },
	          onSelect: function onSelect(a) {
	            if (a.tomy) {
	              if (element.reguest && !element.MagnetUri) {
	                _this5.loadMagnet(element, function () {
	                  _this5.addToBase(element);
	                });
	              } else _this5.addToBase(element);
	            } else if (a.mark) {
	              _this5.mark(element, item, true);
	            } else if (a.unmark) {
	              _this5.mark(element, item, false);
	            }
	            Lampa.Controller.toggle(enabled);
	          }
	        });
	      });
	      Lampa.Listener.send('torrent', {
	        type: 'render',
	        element: element,
	        item: item
	      });
	      scroll.append(item);
	      if (append) Lampa.Controller.collectionAppend(item);
	    });
	  };
	  this.back = function () {
	    Lampa.Activity.backward();
	  };
	  this.start = function () {
	    if (Lampa.Activity.active().activity !== this.activity) return;
	    if (!initialized) {
	      initialized = true;
	      this.initialize();
	    }
	    Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(object.movie));
	    Lampa.Controller.add('content', {
	      toggle: function toggle() {
	        Lampa.Controller.collectionSet(scroll.render(), files.render(true));
	        Lampa.Controller.collectionFocus(last || false, scroll.render(true));
	      },
	      update: function update() {},
	      up: function up() {
	        if (Navigator.canmove('up')) {
	          Navigator.move('up');
	        } else Lampa.Controller.toggle('head');
	      },
	      down: function down() {
	        Navigator.move('down');
	      },
	      right: function right() {
	        if (Navigator.canmove('right')) Navigator.move('right');else filter.render().find('.filter--filter').trigger('hover:enter');
	      },
	      left: function left() {
	        var poster = files.render().find('.explorer-card__head-img');
	        if (poster.hasClass('focus')) Lampa.Controller.toggle('menu');else if (Navigator.canmove('left')) Navigator.move('left');else Navigator.focus(poster[0]);
	      },
	      back: this.back
	    });
	    Lampa.Controller.toggle('content');
	  };
	  this.pause = function () {};
	  this.stop = function () {};
	  this.render = function () {
	    return files.render();
	  };
	  this.destroy = function () {
	    network.clear();
	    Parser.clear();
	    files.destroy();
	    scroll.destroy();
	    results = null;
	    network = null;
	  };
	}

	function startPlugin() {
	  // Функція для очищення старих запитів
	  function cleanupUserClarifys() {
	    var clarifys = Lampa.Storage.get('user_clarifys', '{}');

	    // Перевіряємо, чи є ключ 'undefined' і чи це масив
	    if (clarifys.undefined && Array.isArray(clarifys.undefined)) {
	      // Якщо в масиві більше 3 елементів, залишаємо тільки 3 останніх
	      if (clarifys.undefined.length > 3) {
	        clarifys.undefined = clarifys.undefined.slice(-3);
	      }
	    }

	    // Зберігаємо оновлений об'єкт
	    Lampa.Storage.set('user_clarifys', clarifys);
	  }

	  // Очищуємо сховище при старті плагіна
	  cleanupUserClarifys();
	  window.lmeConcertSearch_ready = true;
	  var manifest = {
	    type: 'other',
	    version: '0.1',
	    name: 'Concert Search',
	    description: '',
	    component: 'lmeConcertSearch'
	  };
	  Lampa.Manifest.plugins = manifest;
	  Lampa.Component.add('lmeConcertSearch', component);
	  function add() {
	    var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M60 30.0187C60 13.452 46.5667 0.0218048 30 0.0218048C13.4302 0.0218048 0 13.4552 0 30.0187C0 42.7886 7.99522 53.668 19.239 57.9942L13.5766 31.6757L11.9757 24.238L9.1414 11.0818L20.1204 8.71782L24.1788 27.5893C25.2751 32.6848 27.5862 35.4194 31.3922 34.5972C34.4041 33.9493 35.6811 31.4981 36.0237 29.6231C36.1763 28.913 36.0642 28.0347 35.8773 27.175L31.3829 6.29153L42.3588 3.93376L47.4855 27.7637C49.5473 37.3474 55.1287 38.8144 55.1287 38.8144C55.1287 38.8144 47.5945 40.4371 44.4363 41.113C41.2843 41.7951 39.1601 36.1576 39.1601 36.1576L38.9421 36.2043C38.0451 38.6493 37.0328 42.6204 29.2027 44.3086C28.6296 44.43 28.0689 44.5079 27.5145 44.5671L30.8285 59.9782C47.0058 59.539 60 46.305 60 30.0187Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(manifest.name, "</div>\n        </li>"));
	    button.on('hover:enter', function () {
	      Lampa.Activity.push({
	        url: '',
	        title: manifest.name,
	        component: manifest.component,
	        search: 'Metallica',
	        from_search: true,
	        noinfo: true,
	        movie: {
	          title: '',
	          original_title: '',
	          img: './img/img_broken.svg',
	          genres: []
	        },
	        page: 1
	      });
	    });
	    $('.menu .menu__list').eq(0).append(button);
	  }
	  if (window.appready) add();else {
	    Lampa.Listener.follow('app', function (e) {
	      if (e.type === 'ready') add();
	    });
	  }
	}
	if (!window.lmeConcertSearch_ready) startPlugin();

})();
