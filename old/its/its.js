(function () {
  'use strict';

  if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

  var $$h = require('../internals/export');
  var fails$e = require('../internals/fails');
  var isArray$3 = require('../internals/is-array');
  var isObject$6 = require('../internals/is-object');
  var toObject$2 = require('../internals/to-object');
  var lengthOfArrayLike$2 = require('../internals/length-of-array-like');
  var doesNotExceedSafeInteger$1 = require('../internals/does-not-exceed-safe-integer');
  var createProperty$1 = require('../internals/create-property');
  var setArrayLength = require('../internals/array-set-length');
  var arraySpeciesCreate$1 = require('../internals/array-species-create');
  var arrayMethodHasSpeciesSupport$3 = require('../internals/array-method-has-species-support');
  var wellKnownSymbol$7 = require('../internals/well-known-symbol');
  var V8_VERSION$1 = require('../internals/environment-v8-version');
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$e(function () {
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
  $$h({
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

  var globalThis$d = require('../internals/global-this');
  var getOwnPropertyDescriptor$2 = require('../internals/object-get-own-property-descriptor').f;
  var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
  var defineBuiltIn$7 = require('../internals/define-built-in');
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
        copyConstructorProperties$2(sourceProperty, targetProperty);
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

  var globalThis$c = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(globalThis$c);

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

  var fails$d;
  var hasRequiredFails;

  function requireFails () {
  	if (hasRequiredFails) return fails$d;
  	hasRequiredFails = 1;

  	fails$d = function (exec) {
  	  try {
  	    return !!exec();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return fails$d;
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

  var $$g = require('../internals/export');
  var exec$5 = require('../internals/regexp-exec');

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$g({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$5
  }, {
    exec: exec$5
  });

  var apply$1 = require('../internals/function-apply');
  var call$a = require('../internals/function-call');
  var uncurryThis$g = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$3 = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails$c = require('../internals/fails');
  var anObject$8 = require('../internals/an-object');
  var isCallable$a = require('../internals/is-callable');
  var isObject$5 = require('../internals/is-object');
  var toIntegerOrInfinity$1 = require('../internals/to-integer-or-infinity');
  var toLength$3 = require('../internals/to-length');
  var toString$a = require('../internals/to-string');
  var requireObjectCoercible$3 = require('../internals/require-object-coercible');
  var advanceStringIndex$2 = require('../internals/advance-string-index');
  var getMethod$3 = require('../internals/get-method');
  var getSubstitution = require('../internals/get-substitution');
  var getRegExpFlags$4 = require('../internals/regexp-get-flags');
  var regExpExec$3 = require('../internals/regexp-exec-abstract');
  var wellKnownSymbol$6 = require('../internals/well-known-symbol');
  var REPLACE = wellKnownSymbol$6('replace');
  var max = Math.max;
  var min$1 = Math.min;
  var concat = uncurryThis$g([].concat);
  var push$6 = uncurryThis$g([].push);
  var stringIndexOf$3 = uncurryThis$g(''.indexOf);
  var stringSlice$8 = uncurryThis$g(''.slice);
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
      var replacer = isObject$5(searchValue) ? getMethod$3(searchValue, REPLACE) : undefined;
      return replacer ? call$a(replacer, searchValue, O, replaceValue) : call$a(nativeReplace, toString$a(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
      var S = toString$a(string);
      var functionalReplace = isCallable$a(replaceValue);
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
        var position = max(min$1(toIntegerOrInfinity$1(result.index), S.length), 0);
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
          replacement = toString$a(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$8(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$8(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var DESCRIPTORS$9 = require('../internals/descriptors');
  var globalThis$b = require('../internals/global-this');
  var uncurryThis$f = require('../internals/function-uncurry-this');
  var isForced$1 = require('../internals/is-forced');
  var inheritIfRequired$1 = require('../internals/inherit-if-required');
  var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
  var create$1 = require('../internals/object-create');
  var getOwnPropertyNames$1 = require('../internals/object-get-own-property-names').f;
  var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
  var isRegExp = require('../internals/is-regexp');
  var toString$9 = require('../internals/to-string');
  var getRegExpFlags$3 = require('../internals/regexp-get-flags');
  var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
  var proxyAccessor = require('../internals/proxy-accessor');
  var defineBuiltIn$6 = require('../internals/define-built-in');
  var fails$b = require('../internals/fails');
  var hasOwn$7 = require('../internals/has-own-property');
  var enforceInternalState$1 = require('../internals/internal-state').enforce;
  var setSpecies = require('../internals/set-species');
  var wellKnownSymbol$5 = require('../internals/well-known-symbol');
  var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
  var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
  var MATCH = wellKnownSymbol$5('match');
  var NativeRegExp = globalThis$b.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var SyntaxError = globalThis$b.SyntaxError;
  var exec$4 = uncurryThis$f(RegExpPrototype$1.exec);
  var charAt$3 = uncurryThis$f(''.charAt);
  var replace$5 = uncurryThis$f(''.replace);
  var stringIndexOf$2 = uncurryThis$f(''.indexOf);
  var stringSlice$7 = uncurryThis$f(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$9 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$b(function () {
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
    var names = create$1(null);
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
          if (exec$4(IS_NCG, stringSlice$7(string, index + 1))) {
            index += 2;
            ncg = true;
            groupid++;
          } else if (charAt$3(string, index + 1) !== '?') {
            groupid++;
          }
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn$7(names, groupname)) {
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
    defineBuiltIn$6(globalThis$b, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
  var defineBuiltIn$5 = require('../internals/define-built-in');
  var anObject$7 = require('../internals/an-object');
  var $toString$3 = require('../internals/to-string');
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
    defineBuiltIn$5(RegExpPrototype, TO_STRING, function toString() {
      var R = anObject$7(this);
      var pattern = $toString$3(R.source);
      var flags = $toString$3(getRegExpFlags$2(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var uncurryThis$e = require('../internals/function-uncurry-this');
  var id = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$e(1.1.toString);
  module.exports = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
  };

  var uid$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(uid$2);

  var es_symbol = {};

  // `Symbol.prototype.description` getter
  var $$f = require('../internals/export');
  var DESCRIPTORS$8 = require('../internals/descriptors');
  var globalThis$a = require('../internals/global-this');
  var call$9 = require('../internals/function-call');
  var uncurryThis$d = require('../internals/function-uncurry-this');
  var hasOwn$6 = require('../internals/has-own-property');
  var isCallable$9 = require('../internals/is-callable');
  var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
  var toString$7 = require('../internals/to-string');
  var defineBuiltInAccessor$3 = require('../internals/define-built-in-accessor');
  var copyConstructorProperties$1 = require('../internals/copy-constructor-properties');
  var NativeSymbol = globalThis$a.Symbol;
  var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
  if (DESCRIPTORS$8 && isCallable$9(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
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
        var symbol = call$9(nativeFor, this, stringKey);
        if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
        return symbol;
      }
    }['for'];
    SymbolWrapper.prototype = SymbolPrototype$1;
    SymbolPrototype$1.constructor = SymbolWrapper;
    var NATIVE_SYMBOL$3 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
    var thisSymbolValue = uncurryThis$d(SymbolPrototype$1.valueOf);
    var symbolDescriptiveString = uncurryThis$d(SymbolPrototype$1.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$4 = uncurryThis$d(''.replace);
    var stringSlice$6 = uncurryThis$d(''.slice);
    defineBuiltInAccessor$3(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        var symbol = thisSymbolValue(this);
        if (hasOwn$6(EmptyStringDescriptionStore, symbol)) return '';
        var string = symbolDescriptiveString(symbol);
        var desc = NATIVE_SYMBOL$3 ? stringSlice$6(string, 7, -1) : replace$4(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$f({
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

  var $$e = require('../internals/export');
  var globalThis$8 = require('../internals/global-this');
  var call$8 = require('../internals/function-call');
  var uncurryThis$c = require('../internals/function-uncurry-this');
  var IS_PURE$2 = require('../internals/is-pure');
  var DESCRIPTORS$7 = require('../internals/descriptors');
  var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
  var fails$9 = require('../internals/fails');
  var hasOwn$5 = require('../internals/has-own-property');
  var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
  var anObject$6 = require('../internals/an-object');
  var toIndexedObject$2 = require('../internals/to-indexed-object');
  var toPropertyKey$2 = require('../internals/to-property-key');
  var $toString$2 = require('../internals/to-string');
  var createPropertyDescriptor$3 = require('../internals/create-property-descriptor');
  var nativeObjectCreate = require('../internals/object-create');
  var objectKeys$1 = require('../internals/object-keys');
  var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
  var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
  var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
  var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
  var definePropertyModule = require('../internals/object-define-property');
  var definePropertiesModule = require('../internals/object-define-properties');
  var propertyIsEnumerableModule$1 = require('../internals/object-property-is-enumerable');
  var defineBuiltIn$4 = require('../internals/define-built-in');
  var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor');
  var shared = require('../internals/shared');
  var sharedKey$1 = require('../internals/shared-key');
  var hiddenKeys$1 = require('../internals/hidden-keys');
  var uid$1 = require('../internals/uid');
  var wellKnownSymbol$4 = require('../internals/well-known-symbol');
  var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
  var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
  var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
  var setToStringTag$4 = require('../internals/set-to-string-tag');
  var InternalStateModule$3 = require('../internals/internal-state');
  var $forEach = require('../internals/array-iteration').forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var setInternalState$2 = InternalStateModule$3.set;
  var getInternalState$1 = InternalStateModule$3.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = globalThis$8.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var RangeError = globalThis$8.RangeError;
  var TypeError$4 = globalThis$8.TypeError;
  var QObject = globalThis$8.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$5 = uncurryThis$c([].push);
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
  var setSymbolDescriptor = DESCRIPTORS$7 && fails$9(function () {
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
    setInternalState$2(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$7) symbol.description = description;
    return symbol;
  };
  var $defineProperty$1 = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
    anObject$6(O);
    var key = toPropertyKey$2(P);
    anObject$6(Attributes);
    if (hasOwn$5(AllSymbols, key)) {
      // first definition - default non-enumerable; redefinition - preserve existing state
      if (!('enumerable' in Attributes) ? !hasOwn$5(O, key) || hasOwn$5(O, HIDDEN) && O[HIDDEN][key] : !Attributes.enumerable) {
        if (!hasOwn$5(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, nativeObjectCreate(null)));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$5(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor$3(0, false)
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
      if (!DESCRIPTORS$7 || call$8($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
    });
    return O;
  };
  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey$2(V);
    var enumerable = call$8(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype && hasOwn$5(AllSymbols, P) && !hasOwn$5(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$5(this, P) || !hasOwn$5(AllSymbols, P) || hasOwn$5(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };
  var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$2(O);
    var key = toPropertyKey$2(P);
    if (it === ObjectPrototype && hasOwn$5(AllSymbols, key) && !hasOwn$5(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwn$5(AllSymbols, key) && !(hasOwn$5(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
    var result = [];
    $forEach(names, function (key) {
      if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys$1, key)) push$5(result, key);
    });
    return result;
  };
  var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
    var result = [];
    $forEach(names, function (key) {
      if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype, key))) {
        push$5(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$2) {
    $Symbol = function _Symbol() {
      if (isPrototypeOf$2(SymbolPrototype, this)) throw new TypeError$4('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$2(arguments[0]);
      var tag = uid$1(description);
      var _setter = function setter(value) {
        var $this = this === undefined ? globalThis$8 : this;
        if ($this === ObjectPrototype) call$8(_setter, ObjectPrototypeSymbols, value);
        if (hasOwn$5($this, HIDDEN) && hasOwn$5($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
        var descriptor = createPropertyDescriptor$3(1, value);
        try {
          setSymbolDescriptor($this, tag, descriptor);
        } catch (error) {
          if (!(error instanceof RangeError)) throw error;
          fallbackDefineProperty($this, tag, descriptor);
        }
      };
      if (DESCRIPTORS$7 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
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
      return wrap(uid$1(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty$1;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$2;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$4(name), name);
    };
    if (DESCRIPTORS$7) {
      // https://tc39.es/ecma262/#sec-symbol.prototype.description
      defineBuiltInAccessor$2(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$1(this).description;
        }
      });
      if (!IS_PURE$2) {
        defineBuiltIn$4(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }
  $$e({
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
  $$e({
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
  $$e({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$2,
    sham: !DESCRIPTORS$7
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
  $$e({
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

  var isCallable$8 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(isCallable$8);

  var getBuiltIn$4;
  var hasRequiredGetBuiltIn;

  function requireGetBuiltIn () {
  	if (hasRequiredGetBuiltIn) return getBuiltIn$4;
  	hasRequiredGetBuiltIn = 1;

  	var globalThis = require$$0$5;
  	var isCallable = require$$0$4;
  	var aFunction = function aFunction(argument) {
  	  return isCallable(argument) ? argument : undefined;
  	};
  	getBuiltIn$4 = function (namespace, method) {
  	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  	};
  	return getBuiltIn$4;
  }

  var uncurryThis$b = require('../internals/function-uncurry-this');
  var toString$6 = uncurryThis$b({}.toString);
  var stringSlice$5 = uncurryThis$b(''.slice);
  module.exports = function (it) {
    return stringSlice$5(toString$6(it), 8, -1);
  };

  var classofRaw = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

  var classof$5;
  var hasRequiredClassof;

  function requireClassof () {
  	if (hasRequiredClassof) return classof$5;
  	hasRequiredClassof = 1;

  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var isCallable = require$$0$4;
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

  var getBuiltIn$3 = require('../internals/get-built-in');
  var isCallable$7 = require('../internals/is-callable');
  var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
  var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
  var $Object$1 = Object;
  module.exports = USE_SYMBOL_AS_UID ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$7($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$1(it));
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

  var $$d = require('../internals/export');
  var getBuiltIn$2 = require('../internals/get-built-in');
  var apply = require('../internals/function-apply');
  var call$7 = require('../internals/function-call');
  var uncurryThis$a = require('../internals/function-uncurry-this');
  var fails$8 = require('../internals/fails');
  var isArray$2 = require('../internals/is-array');
  var isCallable$6 = require('../internals/is-callable');
  var isRawJSON = require('../internals/is-raw-json');
  var isSymbol$1 = require('../internals/is-symbol');
  var classof$4 = require('../internals/classof-raw');
  var toString$4 = require('../internals/to-string');
  var arraySlice$2 = require('../internals/array-slice');
  var parseJSONString = require('../internals/parse-json-string');
  var uid = require('../internals/uid');
  var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
  var NATIVE_RAW_JSON = require('../internals/native-raw-json');
  var $String$2 = String;
  var $stringify = getBuiltIn$2('JSON', 'stringify');
  var exec$3 = uncurryThis$a(/./.exec);
  var charAt$2 = uncurryThis$a(''.charAt);
  var charCodeAt$1 = uncurryThis$a(''.charCodeAt);
  var replace$3 = uncurryThis$a(''.replace);
  var slice = uncurryThis$a(''.slice);
  var push$4 = uncurryThis$a([].push);
  var numberToString$1 = uncurryThis$a(1.1.toString);
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
    var args = arraySlice$2(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$6($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$6($replacer)) value = call$7($replacer, this, $String$2(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply($stringify, null, args);
  } : $stringify;
  var fixIllFormedJSON = function fixIllFormedJSON(match, offset, string) {
    var prev = charAt$2(string, offset - 1);
    var next = charAt$2(string, offset + 1);
    if (exec$3(leadingSurrogates, match) && !exec$3(trailingSurrogates, next) || exec$3(trailingSurrogates, match) && !exec$3(leadingSurrogates, prev)) {
      return "\\u" + numberToString$1(charCodeAt$1(match, 0), 16);
    }
    return match;
  };
  var getReplacerFunction = function getReplacerFunction(replacer) {
    if (isCallable$6(replacer)) return replacer;
    if (!isArray$2(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$4(keys, element);else if (typeof element == 'number' || classof$4(element) === 'Number' || classof$4(element) === 'String') push$4(keys, toString$4(element));
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
  if ($stringify) $$d({
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
        var v = isCallable$6(replacerFunction) ? call$7(replacerFunction, this, $String$2(key), value) : value;
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

  var call$6 = require('../internals/function-call');
  var uncurryThis$9 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$5 = require('../internals/an-object');
  var isObject$4 = require('../internals/is-object');
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
  var push$3 = uncurryThis$9([].push);
  var stringSlice$4 = uncurryThis$9(''.slice);
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
      var splitter = isObject$4(separator) ? getMethod$2(separator, SPLIT) : undefined;
      return splitter ? call$6(splitter, separator, O, limit) : call$6(internalSplit, toString$3(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$5(this);
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
        var z = regExpExec$2(splitter, UNSUPPORTED_Y ? stringSlice$4(S, q) : S);
        var e;
        if (z === null || (e = min(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          push$3(A, stringSlice$4(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$3(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$3(A, stringSlice$4(S, p));
      return A;
    }];
  }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var uncurryThis$8 = require('../internals/function-uncurry-this');
  var fails$5 = require('../internals/fails');
  var classof$3 = require('../internals/classof-raw');
  var $Object = Object;
  var split$2 = uncurryThis$8(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  module.exports = fails$5(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$3(it) === 'String' ? split$2(it, '') : $Object(it);
  } : $Object;

  var indexedObject = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

  var toIndexedObject$1;
  var hasRequiredToIndexedObject;

  function requireToIndexedObject () {
  	if (hasRequiredToIndexedObject) return toIndexedObject$1;
  	hasRequiredToIndexedObject = 1;

  	// toObject with fallback for non-array-like ES3 strings
  	var IndexedObject = require$$0$2;
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	toIndexedObject$1 = function (it) {
  	  return IndexedObject(requireObjectCoercible(it));
  	};
  	return toIndexedObject$1;
  }

  var DESCRIPTORS$6 = require('../internals/descriptors');
  var call$5 = require('../internals/function-call');
  var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
  var createPropertyDescriptor$2 = require('../internals/create-property-descriptor');
  var toIndexedObject = require('../internals/to-indexed-object');
  var toPropertyKey$1 = require('../internals/to-property-key');
  var hasOwn$4 = require('../internals/has-own-property');
  var IE8_DOM_DEFINE$1 = require('../internals/ie8-dom-define');

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  exports.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) {/* empty */}
    if (hasOwn$4(O, P)) return createPropertyDescriptor$2(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
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

  var DESCRIPTORS$5 = require('../internals/descriptors');
  var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
  var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
  var anObject$4 = require('../internals/an-object');
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
  exports.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$1('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

  var wellKnownSymbolDefine;
  var hasRequiredWellKnownSymbolDefine;

  function requireWellKnownSymbolDefine () {
  	if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
  	hasRequiredWellKnownSymbolDefine = 1;

  	var path = requirePath();
  	var hasOwn = requireHasOwnProperty();
  	var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
  	var defineProperty = require$$1$1.f;
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

  var isCallable$5 = require('../internals/is-callable');
  module.exports = function (it) {
    return _typeof(it) == 'object' ? it !== null : isCallable$5(it);
  };

  var isObject$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(isObject$3);

  var anObject$3;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject$3;
  	hasRequiredAnObject = 1;

  	var isObject = require$$2$3;
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

  	var $ = require$$0$6;
  	var toObject = requireToObject();
  	var nativeKeys = require$$5$2;
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

  var require$$5$2 = /*@__PURE__*/getAugmentedNamespace(objectKeys);

  var hasRequiredObjectDefineProperties;

  function requireObjectDefineProperties () {
  	if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  	hasRequiredObjectDefineProperties = 1;

  	var DESCRIPTORS = requireDescriptors();
  	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  	var definePropertyModule = require$$1$1;
  	var anObject = requireAnObject();
  	var toIndexedObject = requireToIndexedObject();
  	var objectKeys = require$$5$2;

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
  	var isObject = require$$2$3;
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
  	var defineProperty = require$$1$1.f;
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
  var isCallable$4 = require('../internals/is-callable');
  var WeakMap = globalThis$6.WeakMap;
  module.exports = isCallable$4(WeakMap) && /native code/.test(String(WeakMap));

  var weakMapBasicDetection = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(weakMapBasicDetection);

  var createPropertyDescriptor$1;
  var hasRequiredCreatePropertyDescriptor;

  function requireCreatePropertyDescriptor () {
  	if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor$1;
  	hasRequiredCreatePropertyDescriptor = 1;

  	createPropertyDescriptor$1 = function (bitmap, value) {
  	  return {
  	    enumerable: !(bitmap & 1),
  	    configurable: !(bitmap & 2),
  	    writable: !(bitmap & 4),
  	    value: value
  	  };
  	};
  	return createPropertyDescriptor$1;
  }

  var createNonEnumerableProperty$2;
  var hasRequiredCreateNonEnumerableProperty;

  function requireCreateNonEnumerableProperty () {
  	if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty$2;
  	hasRequiredCreateNonEnumerableProperty = 1;

  	var DESCRIPTORS = requireDescriptors();
  	var definePropertyModule = require$$1$1;
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

  var globalThis$5 = require('../internals/global-this');
  var DOMIterables = require('../internals/dom-iterables');
  var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
  var ArrayIteratorMethods = require('../modules/es.array.iterator');
  var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');
  var setToStringTag$3 = require('../internals/set-to-string-tag');
  var wellKnownSymbol$3 = require('../internals/well-known-symbol');
  var ITERATOR$2 = wellKnownSymbol$3('iterator');
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
    handlePrototype(globalThis$5[COLLECTION_NAME] && globalThis$5[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }
  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var $$c = require('../internals/export');
  var call$4 = require('../internals/function-call');
  var IS_PURE$1 = require('../internals/is-pure');
  var FunctionName = require('../internals/function-name');
  var isCallable$3 = require('../internals/is-callable');
  var createIteratorConstructor$1 = require('../internals/iterator-create-constructor');
  var getPrototypeOf = require('../internals/object-get-prototype-of');
  var setPrototypeOf = require('../internals/object-set-prototype-of');
  var setToStringTag$2 = require('../internals/set-to-string-tag');
  var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
  var defineBuiltIn$3 = require('../internals/define-built-in');
  var wellKnownSymbol$2 = require('../internals/well-known-symbol');
  var Iterators = require('../internals/iterators');
  var IteratorsCore = require('../internals/iterators-core');
  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol$2('iterator');
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
    var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
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
          } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$1])) {
            defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$1, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
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
          defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$c({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    // define iterator
    if ((!IS_PURE$1 || FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
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

  var require$$3 = /*@__PURE__*/getAugmentedNamespace(iteratorDefine);

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
  	var defineProperty = require$$1$1.f;
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

  var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

  var wellKnownSymbol$1;
  var hasRequiredWellKnownSymbol;

  function requireWellKnownSymbol () {
  	if (hasRequiredWellKnownSymbol) return wellKnownSymbol$1;
  	hasRequiredWellKnownSymbol = 1;

  	var globalThis = require$$0$5;
  	var shared = requireShared();
  	var hasOwn = requireHasOwnProperty();
  	var uid = require$$3$3;
  	var NATIVE_SYMBOL = require$$4;
  	var USE_SYMBOL_AS_UID = require$$5$1;
  	var _Symbol = globalThis.Symbol;
  	var WellKnownSymbolsStore = shared('wks');
  	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol['for'] || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
  	wellKnownSymbol$1 = function (name) {
  	  if (!hasOwn(WellKnownSymbolsStore, name)) {
  	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
  	  }
  	  return WellKnownSymbolsStore[name];
  	};
  	return wellKnownSymbol$1;
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
  var isCallable$2 = require('../internals/is-callable');
  var hasOwn$3 = require('../internals/has-own-property');
  var DESCRIPTORS$4 = require('../internals/descriptors');
  var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
  var inspectSource$1 = require('../internals/inspect-source');
  var InternalStateModule$2 = require('../internals/internal-state');
  var enforceInternalState = InternalStateModule$2.enforce;
  var getInternalState = InternalStateModule$2.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;
  var stringSlice$3 = uncurryThis$7(''.slice);
  var replace$2 = uncurryThis$7(''.replace);
  var join$2 = uncurryThis$7([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$4(function () {
    return defineProperty$1(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn = module.exports = function (value, name, options) {
    if (stringSlice$3($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$2($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$3(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS$4) defineProperty$1(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
      defineProperty$1(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn$3(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$4) defineProperty$1(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwn$3(state, 'source')) {
      state.source = join$2(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable$2(this) && getInternalState(this).source || inspectSource$1(this);
  }, 'toString');

  var makeBuiltIn$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

  var defineBuiltIn$2;
  var hasRequiredDefineBuiltIn;

  function requireDefineBuiltIn () {
  	if (hasRequiredDefineBuiltIn) return defineBuiltIn$2;
  	hasRequiredDefineBuiltIn = 1;

  	var isCallable = require$$0$4;
  	var definePropertyModule = require$$1$1;
  	var makeBuiltIn = require$$2$2;
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

  var $$b = require('../internals/export');
  var $filter = require('../internals/array-iteration').filter;
  var arrayMethodHasSpeciesSupport$2 = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$b({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$a = require('../internals/export');
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
  $$a({
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

  	var isObject = require$$2$3;
  	var classof = require$$0$3;
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

  var $$9 = require('../internals/export');
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
  $$9({
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

  var $$8 = require('../internals/export');
  var lastIndexOf = require('../internals/array-last-index-of');

  // `Array.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
  $$8({
    target: 'Array',
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
  }, {
    lastIndexOf: lastIndexOf
  });

  var $$7 = require('../internals/export');
  var $map = require('../internals/array-iteration').map;
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$7({
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

  	var classof = require$$0$3;

  	// `IsArray` abstract operation
  	// https://tc39.es/ecma262/#sec-isarray
  	// eslint-disable-next-line es/no-array-isarray -- safe
  	isArray$1 = Array.isArray || function isArray(argument) {
  	  return classof(argument) === 'Array';
  	};
  	return isArray$1;
  }

  var uncurryThis$6 = require('../internals/function-uncurry-this');
  var fails$2 = require('../internals/fails');
  var isCallable$1 = require('../internals/is-callable');
  var classof$1 = require('../internals/classof');
  var getBuiltIn$1 = require('../internals/get-built-in');
  var inspectSource = require('../internals/inspect-source');
  var noop = function noop() {/* empty */};
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$2 = uncurryThis$6(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$1(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$1(argument)) return false;
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
      return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
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

  var require$$1 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

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
  	var definePropertyModule = require$$1$1;
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	createProperty = function (object, key, value) {
  	  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
  	};
  	return createProperty;
  }

  var DESCRIPTORS$3 = require('../internals/descriptors');
  var isArray = require('../internals/is-array');
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$3 && !function () {
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

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

  var call$3 = require('../internals/function-call');
  var uncurryThis$5 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$2 = require('../internals/an-object');
  var isObject$2 = require('../internals/is-object');
  var toLength = require('../internals/to-length');
  var toString$2 = require('../internals/to-string');
  var requireObjectCoercible$1 = require('../internals/require-object-coercible');
  var getMethod$1 = require('../internals/get-method');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getRegExpFlags = require('../internals/regexp-get-flags');
  var regExpExec$1 = require('../internals/regexp-exec-abstract');
  var stringIndexOf = uncurryThis$5(''.indexOf);

  // @@match logic
  fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$1(this);
      var matcher = isObject$2(regexp) ? getMethod$1(regexp, MATCH) : undefined;
      return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$2(this);
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
  var userAgent = require('../internals/environment-user-agent');
  var process = globalThis$4.process;
  var Deno = globalThis$4.Deno;
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

  var uncurryThis$4 = require('../internals/function-uncurry-this');
  module.exports = uncurryThis$4([].slice);

  var arraySlice$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$11 = /*@__PURE__*/getAugmentedNamespace(arraySlice$1);

  var hasRequiredEs_array_slice;

  function requireEs_array_slice () {
  	if (hasRequiredEs_array_slice) return es_array_slice;
  	hasRequiredEs_array_slice = 1;

  	var $ = require$$0$6;
  	var isArray = requireIsArray();
  	var isConstructor = require$$1;
  	var isObject = require$$2$3;
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var toIndexedObject = requireToIndexedObject();
  	var createProperty = requireCreateProperty();
  	var setArrayLength = require$$5;
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

  var $$6 = require('../internals/export');
  var uncurryThis$3 = require('../internals/function-uncurry-this');
  var aCallable = require('../internals/a-callable');
  var toObject = require('../internals/to-object');
  var lengthOfArrayLike = require('../internals/length-of-array-like');
  var deletePropertyOrThrow$1 = require('../internals/delete-property-or-throw');
  var toString$1 = require('../internals/to-string');
  var fails$1 = require('../internals/fails');
  var internalSort = require('../internals/array-sort');
  var arrayMethodIsStrict = require('../internals/array-method-is-strict');
  var FF = require('../internals/environment-ff-version');
  var IE_OR_EDGE = require('../internals/environment-is-ie-or-edge');
  var V8 = require('../internals/environment-v8-version');
  var WEBKIT = require('../internals/environment-webkit-version');
  var test = [];
  var nativeSort = uncurryThis$3(test.sort);
  var push$2 = uncurryThis$3(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$1(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$1(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT = !fails$1(function () {
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
      var xString = toString$1(x);
      var yString = toString$1(y);
      return xString === yString ? 0 : xString > yString ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$6({
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
        if (index in array) push$2(items, array[index]);
      }
      internalSort(items, getSortCompare(comparefn));
      itemsLength = lengthOfArrayLike(items);
      index = 0;
      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow$1(array, index++);
      return array;
    }
  });

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

  var $$4 = require('../internals/export');
  var IS_PURE = require('../internals/is-pure');
  var DESCRIPTORS$2 = require('../internals/descriptors');
  var globalThis$3 = require('../internals/global-this');
  var path = require('../internals/path');
  var uncurryThis$2 = require('../internals/function-uncurry-this');
  var isForced = require('../internals/is-forced');
  var hasOwn$2 = require('../internals/has-own-property');
  var inheritIfRequired = require('../internals/inherit-if-required');
  var isPrototypeOf = require('../internals/object-is-prototype-of');
  var isSymbol = require('../internals/is-symbol');
  var toPrimitive = require('../internals/to-primitive');
  var fails = require('../internals/fails');
  var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
  var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
  var defineProperty = require('../internals/object-define-property').f;
  var thisNumberValue = require('../internals/this-number-value');
  var trim = require('../internals/string-trim').trim;
  var NUMBER = 'Number';
  var NativeNumber = globalThis$3[NUMBER];
  var PureNumberNamespace = path[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$3 = globalThis$3.TypeError;
  var stringSlice$2 = uncurryThis$2(''.slice);
  var charCodeAt = uncurryThis$2(''.charCodeAt);

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
    if (isSymbol(it)) throw new TypeError$3('Cannot convert a Symbol value to a number');
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
        digits = stringSlice$2(it, 2);
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
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () {
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
  $$4({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED
  }, {
    Number: NumberWrapper
  });

  // Use `internal/copy-constructor-properties` helper in `core-js@4`
  var copyConstructorProperties = function copyConstructorProperties(target, source) {
    for (var keys = DESCRIPTORS$2 ? getOwnPropertyNames(source) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
      // ESNext
      'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
      if (hasOwn$2(source, key = keys[j]) && !hasOwn$2(target, key)) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };
  if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
  if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);

  var call$2 = require('../internals/function-call');
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$1 = require('../internals/an-object');
  var isObject$1 = require('../internals/is-object');
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
      var searcher = isObject$1(regexp) ? getMethod(regexp, SEARCH) : undefined;
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
  var $$3 = require('../internals/export');
  var DESCRIPTORS$1 = require('../internals/descriptors');
  var USE_NATIVE_URL$1 = require('../internals/url-constructor-detection');
  var globalThis$2 = require('../internals/global-this');
  var bind$1 = require('../internals/function-bind-context');
  var uncurryThis$1 = require('../internals/function-uncurry-this');
  var defineBuiltIn$1 = require('../internals/define-built-in');
  var defineBuiltInAccessor$1 = require('../internals/define-built-in-accessor');
  var anInstance$1 = require('../internals/an-instance');
  var hasOwn$1 = require('../internals/has-own-property');
  var assign = require('../internals/object-assign');
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
  var NativeURL = globalThis$2.URL;
  var TypeError$2 = globalThis$2.TypeError;
  var encodeURIComponent$2 = globalThis$2.encodeURIComponent;
  var parseInt$1 = globalThis$2.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt$1 = uncurryThis$1(''.charAt);
  var exec$1 = uncurryThis$1(/./.exec);
  var join$1 = uncurryThis$1([].join);
  var numberToString = uncurryThis$1(1.1.toString);
  var pop = uncurryThis$1([].pop);
  var push$1 = uncurryThis$1([].push);
  var replace$1 = uncurryThis$1(''.replace);
  var shift$1 = uncurryThis$1([].shift);
  var split$1 = uncurryThis$1(''.split);
  var stringSlice$1 = uncurryThis$1(''.slice);
  var toLowerCase = uncurryThis$1(''.toLowerCase);
  var unshift = uncurryThis$1([].unshift);
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
  var queryPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '#': 1,
    '<': 1,
    '>': 1
  });
  var specialQueryPercentEncodeSet = assign({}, queryPercentEncodeSet, {
    "'": 1
  });
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1,
    '^': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
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
  $$3({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL$1,
    sham: !DESCRIPTORS$1
  }, {
    URL: URLConstructor
  });

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
  	var isConstructor = require$$1;
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

  	var $ = require$$0$6;
  	var toObject = requireToObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var setArrayLength = require$$5;
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

  require('../modules/es.array.iterator');
  require('../modules/es.string.from-code-point');
  var $$2 = require('../internals/export');
  var globalThis$1 = require('../internals/global-this');
  var safeGetBuiltIn = require('../internals/safe-get-built-in');
  var getBuiltIn = require('../internals/get-built-in');
  var call$1 = require('../internals/function-call');
  var uncurryThis = require('../internals/function-uncurry-this');
  var DESCRIPTORS = require('../internals/descriptors');
  var USE_NATIVE_URL = require('../internals/url-constructor-detection');
  var defineBuiltIn = require('../internals/define-built-in');
  var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
  var defineBuiltIns = require('../internals/define-built-ins');
  var setToStringTag = require('../internals/set-to-string-tag');
  var createIteratorConstructor = require('../internals/iterator-create-constructor');
  var InternalStateModule = require('../internals/internal-state');
  var anInstance = require('../internals/an-instance');
  var isCallable = require('../internals/is-callable');
  var hasOwn = require('../internals/has-own-property');
  var bind = require('../internals/function-bind-context');
  var classof = require('../internals/classof');
  var anObject = require('../internals/an-object');
  var isObject = require('../internals/is-object');
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
  var TypeError$1 = globalThis$1.TypeError;
  var encodeURIComponent$1 = globalThis$1.encodeURIComponent;
  var fromCharCode = String.fromCharCode;
  var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
  var $parseInt = parseInt;
  var charAt = uncurryThis(''.charAt);
  var join = uncurryThis([].join);
  var push = uncurryThis([].push);
  var replace = uncurryThis(''.replace);
  var shift = uncurryThis([].shift);
  var splice = uncurryThis([].splice);
  var split = uncurryThis(''.split);
  var stringSlice = uncurryThis(''.slice);
  var exec = uncurryThis(/./.exec);
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
      if (isObject(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
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
  defineBuiltIns(URLSearchParamsPrototype, {
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
  $$2({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL
  }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!USE_NATIVE_URL && isCallable(Headers)) {
    var headersHas = uncurryThis(HeadersPrototype.has);
    var headersSet = uncurryThis(HeadersPrototype.set);
    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject(init)) {
        var body = init.body;
        var headers;
        if (classof(body) === URL_SEARCH_PARAMS) {
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
      $$2({
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
      $$2({
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

  var $$1 = require('../internals/export');
  var call = require('../internals/function-call');

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  $$1({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return call(URL.prototype.toString, this);
    }
  });

  Lampa.Platform.tv();
  var INFUSE_LOGO = "<svg class=\"infuseSaverLogo\" viewBox=\"0 0 85 85\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path opacity=\"0.937\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.5 19.5C45.4453 22.2488 42.7786 26.5821 42.5 32.5C37.6434 28.9084 32.6434 25.575 27.5 22.5C27.4226 21.2502 26.756 20.4169 25.5 20C19.7659 18.3702 15.7659 20.2035 13.5 25.5C13.1667 25.5 12.8333 25.5 12.5 25.5C11.357 10.9033 18.0237 4.73664 32.5 7C38.7408 10.9426 44.7408 15.1092 50.5 19.5Z\" fill=\"#FE6700\"/>\n<path opacity=\"0.982\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.5 19.5C51.7095 19.9321 52.7095 20.5987 53.5 21.5C49.5358 24.4701 46.2025 28.1367 43.5 32.5C43.1667 32.5 42.8333 32.5 42.5 32.5C42.7786 26.5821 45.4453 22.2488 50.5 19.5Z\" fill=\"#FB5800\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.5 21.5C55.3885 22.604 57.0552 23.9373 58.5 25.5C53.8042 27.8653 50.4709 31.532 48.5 36.5C46.246 35.8763 44.5794 34.543 43.5 32.5C46.2025 28.1367 49.5358 24.4701 53.5 21.5Z\" fill=\"#F64400\"/>\n<path opacity=\"0.991\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.5 22.5C27.5 24.5 27.5 26.5 27.5 28.5C22.8333 28.5 18.1667 28.5 13.5 28.5C13.5 27.5 13.5 26.5 13.5 25.5C15.7659 20.2035 19.7659 18.3702 25.5 20C26.756 20.4169 27.4226 21.2502 27.5 22.5Z\" fill=\"#EC1B00\"/>\n<path opacity=\"0.937\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.5 25.5C63.0115 27.4975 66.8449 30.4975 70 34.5C73.0759 42.3939 71.5759 49.2272 65.5 55C61.6784 57.3301 58.0117 59.8301 54.5 62.5C53.2812 59.2737 51.6146 56.2737 49.5 53.5C48.7174 51.7118 47.3841 50.7118 45.5 50.5C48.5203 47.4838 51.8536 44.8171 55.5 42.5C58.5179 41.6466 60.3512 39.6466 61 36.5C62.0536 32.3445 61.2202 28.6779 58.5 25.5Z\" fill=\"#FE6800\"/>\n<path opacity=\"0.977\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 25.5C12.8333 25.5 13.1667 25.5 13.5 25.5C13.5 26.5 13.5 27.5 13.5 28.5C18.1667 28.5 22.8333 28.5 27.5 28.5C27.5 30.8333 27.5 33.1667 27.5 35.5C22.5 35.5 17.5 35.5 12.5 35.5C12.5 32.1667 12.5 28.8333 12.5 25.5Z\" fill=\"#F33700\"/>\n<path opacity=\"0.977\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 35.5C17.5 35.5 22.5 35.5 27.5 35.5C27.5 37.5 27.5 39.5 27.5 41.5C22.5 41.5 17.5 41.5 12.5 41.5C12.5 39.5 12.5 37.5 12.5 35.5Z\" fill=\"#FA5200\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.5 25.5C61.2202 28.6779 62.0536 32.3445 61 36.5C60.3512 39.6466 58.5179 41.6466 55.5 42.5C53.1667 40.5 50.8333 38.5 48.5 36.5C50.4709 31.532 53.8042 27.8653 58.5 25.5Z\" fill=\"#EC1E00\"/>\n<path opacity=\"0.944\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 41.5C17.5 41.5 22.5 41.5 27.5 41.5C27.6658 46.1785 27.4992 50.8452 27 55.5C22.2391 60.8119 17.5724 60.8119 13 55.5C12.5008 50.8452 12.3342 46.1785 12.5 41.5Z\" fill=\"#FE6600\"/>\n<path opacity=\"0.984\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.5 50.5C47.3841 50.7118 48.7174 51.7118 49.5 53.5C51.6146 56.2737 53.2812 59.2737 54.5 62.5C52.3428 64.4121 50.0094 66.0787 47.5 67.5C45.5873 63.7375 43.4206 60.0709 41 56.5C40.3292 55.7476 39.4959 55.4142 38.5 55.5C40.2964 53.1 42.6298 51.4333 45.5 50.5Z\" fill=\"#FF7700\"/>\n<path opacity=\"0.986\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.5 55.5C39.4959 55.4142 40.3292 55.7476 41 56.5C43.4206 60.0709 45.5873 63.7375 47.5 67.5C46.3951 68.6005 45.0618 69.2671 43.5 69.5C40.8082 65.4297 38.1415 61.4297 35.5 57.5C35.9731 56.0937 36.9731 55.427 38.5 55.5Z\" fill=\"#FE7F00\"/>\n<path opacity=\"0.997\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.5 57.5C38.1415 61.4297 40.8082 65.4297 43.5 69.5C41.7036 71.9 39.3702 73.5667 36.5 74.5C33.3119 70.7735 30.6452 66.7735 28.5 62.5C30.5496 60.4525 32.883 58.7859 35.5 57.5Z\" fill=\"#FE8900\"/>\n<path opacity=\"0.993\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.5 62.5C30.6452 66.7735 33.3119 70.7735 36.5 74.5C32.9607 79.3727 28.294 80.7061 22.5 78.5C19.1831 75.2595 18.6831 71.5929 21 67.5C23.3996 65.5854 25.8996 63.9188 28.5 62.5Z\" fill=\"#FE9500\"/>\n</svg>";
  function registerTranslations() {
    Lampa.Lang.add({
      its_save_single: {
        ru: 'Сохранить',
        en: 'Save',
        uk: 'Зберегти'
      },
      its_save_all: {
        ru: 'Сохранить все',
        en: 'Save all',
        uk: 'Зберегти все'
      },
      its_save_all_edit: {
        ru: 'Редактировать и сохранить',
        en: 'Edit & Save',
        uk: 'Редагувати та зберегти'
      },
      its_modal_title: {
        ru: 'Редактирование передачи серий',
        en: 'Edit episodes transfer',
        uk: 'Редагування передачі серій'
      },
      its_save_changes: {
        ru: 'Сохранить изменения',
        en: 'Save changes',
        uk: 'Зберегти зміни'
      },
      its_disable_all: {
        ru: 'Отключить передачу всех',
        en: 'Disable all transfer',
        uk: 'Вимкнути передачу всіх'
      },
      its_no_series_to_send: {
        ru: 'Нет серий для передачи',
        en: 'No episodes selected for transfer',
        uk: 'Немає серій для передачі'
      },
      its_file_name_title: {
        ru: 'Название файла',
        en: 'File name',
        uk: 'Назва файла'
      },
      its_edit_name: {
        ru: 'Редактировать название',
        en: 'Edit name',
        uk: 'Редагувати назву'
      },
      its_do_not_send: {
        ru: 'Не передавать',
        en: 'Do not send',
        uk: 'Не передавати'
      },
      its_send: {
        ru: 'Передавать',
        en: 'Send',
        uk: 'Передавати'
      },
      its_state_enabled: {
        ru: 'Передается',
        en: 'Enabled',
        uk: 'Передається'
      },
      its_state_disabled: {
        ru: 'Отключено',
        en: 'Disabled',
        uk: 'Вимкнено'
      },
      its_normalize_names: {
        ru: 'Нормализовать имена',
        en: 'Normalize names',
        uk: 'Нормалізувати імена'
      },
      its_sort_status: {
        ru: 'Сортировка статуса',
        en: 'Status sort',
        uk: 'Сортування статусу'
      },
      its_filter_season: {
        ru: 'Фильтр сезона',
        en: 'Season filter',
        uk: 'Фільтр сезону'
      },
      its_sort_status_title: {
        ru: 'Сортировка по статусу',
        en: 'Sort by status',
        uk: 'Сортування за статусом'
      },
      its_sort_status_none: {
        ru: 'Без сортировки',
        en: 'No sorting',
        uk: 'Без сортування'
      },
      its_sort_status_enabled_first: {
        ru: 'Сначала передаются',
        en: 'Enabled first',
        uk: 'Спочатку передаються'
      },
      its_sort_status_disabled_first: {
        ru: 'Сначала отключенные',
        en: 'Disabled first',
        uk: 'Спочатку вимкнені'
      },
      its_filter_season_title: {
        ru: 'Фильтр по сезону',
        en: 'Filter by season',
        uk: 'Фільтр за сезоном'
      },
      its_filter_season_all: {
        ru: 'Все сезоны',
        en: 'All seasons',
        uk: 'Усі сезони'
      },
      its_filter_season_none: {
        ru: 'Без сезона',
        en: 'No season',
        uk: 'Без сезону'
      },
      its_no_items_for_filter: {
        ru: 'Нет элементов по текущему фильтру',
        en: 'No items for current filter',
        uk: 'Немає елементів за поточним фільтром'
      },
      its_easter_donate_sent: {
        ru: 'Донат Андрею отправлен успешно',
        en: 'Donation to Andriy sent successfully',
        uk: 'Донат Андрію відправлено вдало'
      }
    });
  }
  function tr(key) {
    return Lampa.Lang.translate(key);
  }
  function sanitizeUrl(url) {
    return String(url || '').replace('&preload', '&play').replace(/\s/g, '%20');
  }
  function safeDecode(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
      return value;
    }
  }
  function escapeHtml(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function resolveSeasonNumber(item) {
    var raw = item && item.season !== undefined ? item.season : item ? item.season_number : undefined;
    var parsed = parseInt(raw, 10);
    return !isNaN(parsed) && parsed > 0 ? parsed : null;
  }
  function resolveSeasonKey(item) {
    var seasonNumber = resolveSeasonNumber(item);
    return seasonNumber === null ? 'none' : String(seasonNumber);
  }
  function getSeasonLabelByKey(seasonKey) {
    if (seasonKey === 'none') {
      return tr('its_filter_season_none');
    }
    return Lampa.Lang.translate('torrent_serial_season') + ' ' + seasonKey;
  }
  var FileNameNormalizer = {
    generateFilename: function generateFilename(item, movie, index) {
      var tmdbId = movie ? movie.id : '';
      var seasonNum = parseInt(item.season !== undefined ? item.season : item.season_number);
      var episodeNum = parseInt(item.episode !== undefined ? item.episode : item.episode_number);
      var filename = '';
      if (movie && tmdbId) {
        if (!isNaN(episodeNum) && episodeNum > 0 && !isNaN(seasonNum) && seasonNum >= 0) {
          var title = movie.original_name || movie.original_title || movie.name || movie.title;
          var s = seasonNum < 10 ? '0' + seasonNum : seasonNum;
          var e = episodeNum < 10 ? '0' + episodeNum : episodeNum;
          filename = title + ' S' + s + 'E' + e + ' {tmdb-' + tmdbId + '}';
        } else {
          var rawName = String(item.title || item.path_human || item.path || '').replace(/\.[a-z0-9]{1,6}$/i, '');
          if (movie.first_air_date || movie.name) {
            filename = '{tmdb-' + tmdbId + '} ' + (rawName || movie.original_name || movie.name);
          } else {
            var _title = movie.original_title || movie.title || movie.original_name || movie.name;
            var year = String(movie.release_date || '').split('-')[0];
            filename = _title + (year ? ' (' + year + ')' : '') + ' {tmdb-' + tmdbId + '}';
          }
        }
      } else {
        var meta = getFileMeta(item.originalUrl || item.url);
        filename = meta.name || 'link_' + (index + 1);
      }
      return filename;
    },
    normalizeItem: function normalizeItem(item, movie, index) {
      return this.generateFilename(item, movie, index);
    }
  };
  function getFileMeta(url) {
    var segment = '';
    try {
      var parsed = new URL(url);
      var parts = parsed.pathname.split('/');
      segment = parts[parts.length - 1] || '';
    } catch (e) {
      var withoutHash = String(url).split('#')[0];
      var beforeQuery = withoutHash.split('?')[0];
      segment = beforeQuery.split('/').pop() || '';
    }
    var decoded = safeDecode(segment);
    var dotIndex = decoded.lastIndexOf('.');
    if (dotIndex <= 0) {
      return {
        name: decoded || segment || 'file',
        extension: ''
      };
    }
    return {
      name: decoded.slice(0, dotIndex) || 'file',
      extension: decoded.slice(dotIndex)
    };
  }
  function buildInfuseFilename(editedName, extension, movie) {
    var name = String(editedName || '');
    var ext = String(extension || '');

    // TV show: Infuse не розуміє {tmdb-XXXXX} для серіалів —
    // він сприймає це як ID фільму. Використовуємо тільки SxxExx патерн.
    if (movie && (movie.first_air_date || movie.number_of_seasons)) {
      name = name.replace(/\s*\{tmdb-\d+\}\s*/g, '').trim();
      return name + ext;
    }

    // Фільм: {tmdb-XXXXX} дає точний збіг в Infuse
    if (movie && movie.id && !name.includes('{tmdb-')) {
      name = name + ' {tmdb-' + movie.id + '}';
    }
    return name + ext;
  }
  function createMenuTitle(label) {
    return "<div class=\"infuseSaver\">".concat(INFUSE_LOGO, "<span>").concat(label, "</span></div>");
  }
  function createEditableLinks(items, movie) {
    var isTvShow = movie && (movie.first_air_date || movie.name || movie.number_of_seasons);
    var hasMovieId = movie && movie.id;
    return (items || []).map(function (item, index) {
      var sourceUrl = sanitizeUrl(item.url);
      var meta = getFileMeta(sourceUrl);
      var editedName = meta.name;

      // Попередня чистка: для фільмів з TMDB ID одразу ставимо нормалізовану назву.
      if (!isTvShow && hasMovieId) {
        var normalized = FileNameNormalizer.normalizeItem({
          originalUrl: sourceUrl,
          url: sourceUrl,
          title: meta.name,
          season: item.season,
          season_number: item.season_number,
          episode: item.episode,
          episode_number: item.episode_number
        }, movie, index);
        if (normalized) {
          editedName = normalized;
        }
      }
      return {
        id: index,
        index: index + 1,
        sourceIndex: index,
        originalUrl: sourceUrl,
        editedName: editedName,
        extension: meta.extension,
        enabled: true,
        seasonKey: resolveSeasonKey(item),
        season: item.season,
        season_number: item.season_number,
        episode: item.episode,
        episode_number: item.episode_number
      };
    });
  }
  function getPreparedLinks(editableLinks, movie) {
    return editableLinks.filter(function (item) {
      return item.enabled;
    }).map(function (item) {
      return {
        url: item.originalUrl,
        filename: buildInfuseFilename(item.editedName, item.extension, movie)
      };
    });
  }
  function showBellMessage(text) {
    if (Lampa.Bell && typeof Lampa.Bell.push === 'function') {
      Lampa.Bell.push({
        text: text
      });
      return;
    }
    if (Lampa.Noty && typeof Lampa.Noty.show === 'function') {
      Lampa.Noty.show(text);
    }
  }
  function attachDonateEasterEgg(titleNode) {
    if (!titleNode || !titleNode.length) {
      return;
    }
    var tapCount = 0;
    var resetTimer = null;
    var lastTapAt = 0;
    var tapsToActivate = 5;
    var resetDelay = 1600;
    var resetCounter = function resetCounter() {
      tapCount = 0;
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }
    };
    var activate = function activate() {
      resetCounter();
      showBellMessage(tr('its_easter_donate_sent'));
    };
    var registerTap = function registerTap() {
      var now = Date.now();
      if (now - lastTapAt < 250) {
        return;
      }
      lastTapAt = now;
      tapCount += 1;
      if (resetTimer) {
        clearTimeout(resetTimer);
      }
      if (tapCount >= tapsToActivate) {
        activate();
        return;
      }
      resetTimer = setTimeout(resetCounter, resetDelay);
    };
    titleNode.on('pointerup', registerTap);
    titleNode.on('click', registerTap);
    titleNode.on('hover:long', activate);
  }
  function openFileNameEditor(item, onDone) {
    if (!Lampa.Input || typeof Lampa.Input.edit !== 'function') {
      var promptValue = window.prompt(tr('its_file_name_title'), item.editedName);
      if (promptValue !== null && String(promptValue).trim()) {
        item.editedName = String(promptValue).trim();
      }
      onDone();
      return;
    }
    var layer = $('.its-links-layer');
    layer.addClass('its-links-layer--hidden');
    Lampa.Input.edit({
      title: tr('its_file_name_title'),
      value: item.editedName,
      free: true,
      nosave: true,
      nomic: true
    }, function (value) {
      var nextValue = String(value || '').trim();
      if (nextValue) {
        item.editedName = nextValue;
      }
      layer.removeClass('its-links-layer--hidden');
      onDone();
    });
  }
  function getSortStatusLabel(sortStatus) {
    if (sortStatus === 'enabled_first') {
      return tr('its_sort_status_enabled_first');
    }
    if (sortStatus === 'disabled_first') {
      return tr('its_sort_status_disabled_first');
    }
    return tr('its_sort_status_none');
  }
  function getSeasonFilterLabel(seasonFilter) {
    if (seasonFilter === 'all') {
      return tr('its_filter_season_all');
    }
    return getSeasonLabelByKey(seasonFilter);
  }
  function getSeasonFilterItems(links) {
    var keysMap = {};
    links.forEach(function (item) {
      keysMap[item.seasonKey] = true;
    });
    var numericSeasons = Object.keys(keysMap).filter(function (key) {
      return key !== 'none';
    }).sort(function (a, b) {
      return Number(a) - Number(b);
    });
    var items = [{
      value: 'all',
      title: tr('its_filter_season_all')
    }];
    numericSeasons.forEach(function (seasonKey) {
      items.push({
        value: seasonKey,
        title: getSeasonLabelByKey(seasonKey)
      });
    });
    if (keysMap.none) {
      items.push({
        value: 'none',
        title: tr('its_filter_season_none')
      });
    }
    return items;
  }
  function getVisibleLinks(state) {
    var filtered = state.seasonFilter === 'all' ? state.links.slice() : state.links.filter(function (item) {
      return item.seasonKey === state.seasonFilter;
    });
    if (state.statusSort === 'enabled_first') {
      return filtered.sort(function (a, b) {
        if (a.enabled === b.enabled) {
          return a.sourceIndex - b.sourceIndex;
        }
        return a.enabled ? -1 : 1;
      });
    }
    if (state.statusSort === 'disabled_first') {
      return filtered.sort(function (a, b) {
        if (a.enabled === b.enabled) {
          return a.sourceIndex - b.sourceIndex;
        }
        return a.enabled ? 1 : -1;
      });
    }
    return filtered.sort(function (a, b) {
      return a.sourceIndex - b.sourceIndex;
    });
  }
  function buildLinksEditorHtml(state, actions) {
    var selectedCount = state.links.filter(function (item) {
      return item.enabled;
    }).length;
    var visibleLinks = getVisibleLinks(state);
    var sortStatusLabel = getSortStatusLabel(state.statusSort);
    var seasonFilterLabel = getSeasonFilterLabel(state.seasonFilter);
    var html = $("\n        <div class=\"its-links-editor\">\n            <div class=\"its-links-editor__toolbar\">\n                <div class=\"its-links-editor__button selector\" data-action=\"save\">".concat(tr('its_save_changes'), " (").concat(selectedCount, ")</div>\n                <div class=\"its-links-editor__button selector\" data-action=\"normalize\">").concat(tr('its_normalize_names'), "</div>\n                <div class=\"its-links-editor__button selector\" data-action=\"disable-all\">").concat(tr('its_disable_all'), "</div>\n                <div class=\"its-links-editor__button selector\" data-action=\"sort-status\">").concat(tr('its_sort_status'), ": ").concat(escapeHtml(sortStatusLabel), "</div>\n                <div class=\"its-links-editor__button selector\" data-action=\"filter-season\">").concat(tr('its_filter_season'), ": ").concat(escapeHtml(seasonFilterLabel), "</div>\n            </div>\n            <div class=\"its-links-editor__meta\">\n                <span class=\"its-links-editor__meta-item\">").concat(tr('its_sort_status_title'), ": ").concat(escapeHtml(sortStatusLabel), "</span>\n                <span class=\"its-links-editor__meta-item\">").concat(tr('its_filter_season_title'), ": ").concat(escapeHtml(seasonFilterLabel), "</span>\n            </div>\n            <div class=\"its-links-editor__list\"></div>\n        </div>\n    "));
    var list = html.find('.its-links-editor__list');
    if (!visibleLinks.length) {
      list.append("<div class=\"its-links-editor__empty\">".concat(tr('its_no_items_for_filter'), "</div>"));
    }
    visibleLinks.forEach(function (item) {
      var stateText = item.enabled ? tr('its_state_enabled') : tr('its_state_disabled');
      var stateClass = item.enabled ? 'its-links-editor__state--enabled' : 'its-links-editor__state--disabled';
      var seasonLabel = getSeasonLabelByKey(item.seasonKey);
      var row = $("\n            <div class=\"its-links-editor__item ".concat(item.enabled ? '' : 'is-disabled', "\">\n                <div class=\"its-links-editor__head\">\n                    <div class=\"its-links-editor__index\">#").concat(item.index, "</div>\n                    <div class=\"its-links-editor__season\">").concat(escapeHtml(seasonLabel), "</div>\n                    <div class=\"its-links-editor__filename\" title=\"").concat(escapeHtml(item.editedName + item.extension), "\"><span class=\"its-links-editor__name\">").concat(escapeHtml(item.editedName), "</span><span class=\"its-links-editor__ext\">").concat(escapeHtml(item.extension), "</span></div>\n                    <div class=\"its-links-editor__state ").concat(stateClass, "\">").concat(stateText, "</div>\n                </div>\n                <div class=\"its-links-editor__actions\">\n                    <div class=\"its-links-editor__action selector\" data-action=\"edit\" data-id=\"").concat(item.id, "\">").concat(tr('its_edit_name'), "</div>\n                    <div class=\"its-links-editor__action selector\" data-action=\"toggle\" data-id=\"").concat(item.id, "\">").concat(item.enabled ? tr('its_do_not_send') : tr('its_send'), "</div>\n                </div>\n            </div>\n        "));
      list.append(row);
    });
    html.find('[data-action="save"]').on('hover:enter', actions.save);
    html.find('[data-action="normalize"]').on('hover:enter', actions.normalize);
    html.find('[data-action="disable-all"]').on('hover:enter', actions.disableAll);
    html.find('[data-action="sort-status"]').on('hover:enter', actions.sortStatus);
    html.find('[data-action="filter-season"]').on('hover:enter', actions.filterSeason);
    html.find('[data-action="toggle"]').on('hover:enter', function () {
      var id = Number($(this).attr('data-id'));
      actions.toggle(id, {
        action: 'toggle',
        id: id
      });
    });
    html.find('[data-action="edit"]').on('hover:enter', function () {
      var id = Number($(this).attr('data-id'));
      actions.edit(id, {
        action: 'edit',
        id: id
      });
    });
    return html;
  }
  function openLinksEditor(config) {
    var state = {
      links: createEditableLinks(config.items, config.movie),
      movie: config.movie || null,
      statusSort: 'none',
      seasonFilter: 'all'
    };
    var returnController = Lampa.Controller.enabled().name;
    var controllerName = 'its_links_editor';
    var layer = null;
    var scrollFocusedIntoView = function scrollFocusedIntoView() {
      if (!layer) {
        return;
      }
      var panel = layer.find('.its-links-layer__panel')[0];
      var focused = layer.find('.selector.focus').first()[0];
      if (!panel || !focused) {
        return;
      }
      var panelRect = panel.getBoundingClientRect();
      var itemRect = focused.getBoundingClientRect();
      var margin = 12;
      if (itemRect.top < panelRect.top + margin) {
        panel.scrollTop -= panelRect.top + margin - itemRect.top;
      } else if (itemRect.bottom > panelRect.bottom - margin) {
        panel.scrollTop += itemRect.bottom - (panelRect.bottom - margin);
      }
    };
    var close = function close() {
      if (layer) {
        layer.remove();
        layer = null;
      }
      Lampa.Controller.toggle(returnController);
    };
    var setLayerVisible = function setLayerVisible(visible) {
      if (!layer) {
        return;
      }
      layer.toggleClass('its-links-layer--hidden', visible === false);
    };
    var ensureEditorControllerEnabled = function ensureEditorControllerEnabled() {
      var enabled = Lampa.Controller.enabled();
      if (!enabled || enabled.name !== controllerName) {
        Lampa.Controller.toggle(controllerName);
      }
    };
    var readFocusMeta = function readFocusMeta() {
      if (!layer) {
        return null;
      }
      var focused = layer.find('.selector.focus').first();
      if (!focused.length) {
        return null;
      }
      var action = focused.attr('data-action');
      if (!action) {
        return null;
      }
      var meta = {
        action: action
      };
      var idRaw = focused.attr('data-id');
      if (idRaw !== undefined) {
        var parsedId = Number(idRaw);
        if (!isNaN(parsedId)) {
          meta.id = parsedId;
        }
      }
      return meta;
    };
    var focusSelector = function focusSelector(focusMeta) {
      setTimeout(function () {
        if (!layer) {
          return;
        }
        var scope = layer;
        var target = $();
        if (focusMeta && focusMeta.action) {
          if (typeof focusMeta.id === 'number') {
            target = scope.find(".selector[data-action=\"".concat(focusMeta.action, "\"][data-id=\"").concat(focusMeta.id, "\"]")).first();
          }
          if (!target.length) {
            target = scope.find(".selector[data-action=\"".concat(focusMeta.action, "\"]")).first();
          }
          if (!target.length && typeof focusMeta.id === 'number') {
            target = scope.find(".its-links-editor__action[data-id=\"".concat(focusMeta.id, "\"][data-action=\"edit\"]")).first();
          }
        }
        if (!target.length) {
          target = scope.find('.selector').first();
        }
        if (scope.length && target.length) {
          ensureEditorControllerEnabled();
          Lampa.Controller.collectionSet(scope);
          Lampa.Controller.collectionFocus(target[0], scope);
          target.trigger('hover:focus');
          scrollFocusedIntoView();
        }
      }, 0);
    };
    var ensureController = function ensureController() {
      Lampa.Controller.add(controllerName, {
        toggle: function toggle() {
          if (!layer) {
            return;
          }
          Lampa.Controller.collectionSet(layer);
          Lampa.Controller.collectionFocus(layer.find('.selector').first()[0], layer);
        },
        up: function up() {
          Navigator.move('up');
          scrollFocusedIntoView();
        },
        down: function down() {
          Navigator.move('down');
          scrollFocusedIntoView();
        },
        left: function left() {
          Navigator.move('left');
          scrollFocusedIntoView();
        },
        right: function right() {
          Navigator.move('right');
          scrollFocusedIntoView();
        },
        back: close
      });
    };
    var openSortSelect = function openSortSelect() {
      setLayerVisible(false);
      Lampa.Select.show({
        title: tr('its_sort_status_title'),
        items: [{
          value: 'none',
          title: tr('its_sort_status_none'),
          selected: state.statusSort === 'none'
        }, {
          value: 'enabled_first',
          title: tr('its_sort_status_enabled_first'),
          selected: state.statusSort === 'enabled_first'
        }, {
          value: 'disabled_first',
          title: tr('its_sort_status_disabled_first'),
          selected: state.statusSort === 'disabled_first'
        }],
        onBack: function onBack() {
          setLayerVisible(true);
          focusSelector({
            action: 'sort-status'
          });
        },
        onSelect: function onSelect(selected) {
          state.statusSort = selected.value;
          setLayerVisible(true);
          _render({
            action: 'sort-status'
          });
        }
      });
    };
    var openSeasonFilterSelect = function openSeasonFilterSelect() {
      var items = getSeasonFilterItems(state.links).map(function (item) {
        return {
          value: item.value,
          title: item.title,
          selected: state.seasonFilter === item.value
        };
      });
      setLayerVisible(false);
      Lampa.Select.show({
        title: tr('its_filter_season_title'),
        items: items,
        onBack: function onBack() {
          setLayerVisible(true);
          focusSelector({
            action: 'filter-season'
          });
        },
        onSelect: function onSelect(selected) {
          state.seasonFilter = selected.value;
          setLayerVisible(true);
          _render({
            action: 'filter-season'
          });
        }
      });
    };
    var _render = function render(focusMeta) {
      var nextFocusMeta = focusMeta || readFocusMeta();
      var html = buildLinksEditorHtml(state, {
        save: function save() {
          var links = getPreparedLinks(state.links, state.movie);
          if (!links.length) {
            Lampa.Noty.show(tr('its_no_series_to_send'));
            return;
          }
          close();
          config.onSave(links);
        },
        normalize: function normalize() {
          state.links.forEach(function (item, index) {
            var normalized = FileNameNormalizer.normalizeItem({
              originalUrl: item.originalUrl,
              url: item.originalUrl,
              title: item.editedName,
              season: item.season,
              season_number: item.season_number,
              episode: item.episode,
              episode_number: item.episode_number
            }, state.movie, index);
            if (normalized) {
              item.editedName = normalized;
            }
          });
          _render({
            action: 'normalize'
          });
        },
        disableAll: function disableAll() {
          state.links.forEach(function (item) {
            item.enabled = false;
          });
          _render({
            action: 'disable-all'
          });
        },
        sortStatus: function sortStatus() {
          openSortSelect();
        },
        filterSeason: function filterSeason() {
          openSeasonFilterSelect();
        },
        toggle: function toggle(id, focusState) {
          var link = state.links.find(function (item) {
            return item.id === id;
          });
          if (!link) {
            return;
          }
          link.enabled = !link.enabled;
          _render(focusState);
        },
        edit: function edit(id, focusState) {
          var link = state.links.find(function (item) {
            return item.id === id;
          });
          if (!link) {
            return;
          }
          openFileNameEditor(link, function () {
            _render(focusState);
          });
        }
      });
      if (!layer) {
        ensureController();
        layer = $("\n                <div class=\"its-links-layer\">\n                    <div class=\"its-links-layer__panel\">\n                        <div class=\"its-links-layer__title\">".concat(escapeHtml(tr('its_modal_title')), "</div>\n                        <div class=\"its-links-layer__body\"></div>\n                    </div>\n                </div>\n            "));
        $('body').append(layer);
        layer.find('.its-links-layer__body').append(html);
        layer.on('hover:focus', '.selector', scrollFocusedIntoView);
        attachDonateEasterEgg(layer.find('.its-links-layer__title'));
        var touchStartedOutsidePanel = false;
        layer.on('touchstart', function (event) {
          touchStartedOutsidePanel = $(event.target).closest('.its-links-layer__panel').length === 0;
        });
        layer.on('touchend', function (event) {
          var endedOutsidePanel = $(event.target).closest('.its-links-layer__panel').length === 0;
          if (touchStartedOutsidePanel && endedOutsidePanel) {
            close();
          }
          touchStartedOutsidePanel = false;
        });
        layer.on('click', function (event) {
          var clickedOutsidePanel = $(event.target).closest('.its-links-layer__panel').length === 0;
          if (clickedOutsidePanel) {
            close();
          }
        });
        focusSelector(nextFocusMeta);
      } else {
        layer.find('.its-links-layer__body').empty().append(html);
        focusSelector(nextFocusMeta);
      }
    };
    _render({
      action: 'save'
    });
  }
  function addSingleSaveAction(data) {
    data.menu.push({
      title: createMenuTitle(tr('its_save_single')),
      onSelect: function onSelect() {
        window.location.assign('infuse://x-callback-url/save?url=' + encodeURIComponent(data.element.url));
      }
    });
  }
  function sendPreparedLinks(preparedLinks, isAppleTv) {
    if (isAppleTv) {
      var playlist = encodeURIComponent(JSON.stringify(preparedLinks.map(function (item) {
        return {
          url: item.url
        };
      })));
      window.location.assign('lampa://saveAllToInfuse?playlist=' + playlist);
      return;
    }
    var params = preparedLinks.map(function (item) {
      return 'url=' + encodeURIComponent(item.url) + '&filename=' + encodeURIComponent(item.filename);
    }).join('&');
    window.location.assign('infuse://x-callback-url/save?' + params);
  }
  function addBulkSaveAction(data) {
    var links = data.items || [];
    if (!links.length) {
      return;
    }
    var isAppleTv = Lampa.Platform.is('apple_tv') === true;
    var movie = data.params ? data.params.movie : null;
    data.menu.push({
      title: createMenuTitle(tr('its_save_all')),
      onSelect: function onSelect() {
        var preparedLinks = links.map(function (item) {
          var url = sanitizeUrl(item.url);
          var meta = getFileMeta(url);
          return {
            url: url,
            filename: buildInfuseFilename(meta.name, meta.extension, movie)
          };
        });
        sendPreparedLinks(preparedLinks, isAppleTv);
      }
    });
    data.menu.push({
      title: createMenuTitle(tr('its_save_all_edit')),
      onSelect: function onSelect() {
        setTimeout(function () {
          openLinksEditor({
            items: links,
            movie: movie,
            onSave: function onSave(preparedLinks) {
              sendPreparedLinks(preparedLinks, isAppleTv);
            }
          });
        }, 0);
      }
    });
  }
  function onTorrentFileLongPress(data) {
    if (!data || data.type !== 'onlong') {
      return;
    }
    data.element.url = sanitizeUrl(data.element.url);
    addSingleSaveAction(data);
    addBulkSaveAction(data);
  }
  function add() {
    Lampa.Listener.follow('torrent_file', onTorrentFileLongPress);
    if (Lampa.Platform.is('apple_tv') === true) {
      var icon = Lampa.Head.addIcon('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" /></svg>', function () {
        window.open('lampa://showadvancedmenu');
      });
      icon.addClass('appleTV_showadvancedmenu');
    }
  }
  function startPlugin() {
    window.plugin_its_ready = true;
    registerTranslations();
    Lampa.Manifest.plugins = {
      type: 'other',
      version: '0.6',
      name: 'AppleTV Tweaks',
      description: 'Some tweaks for Apple TV',
      component: 'its'
    };
    Lampa.Template.add('its_style', "\n        <style>\n            .infuseSaver{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.6em}.infuseSaverLogo{width:24px;height:24px;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.its-links-editor{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:1.2em}.its-links-layer{position:fixed;inset:0;z-index:65;background:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.6em}.its-links-layer__panel{width:80vw;max-width:80vw;max-height:95vh;overflow:auto;background:#232425;-webkit-border-radius:1.2em;border-radius:1.2em;padding:1.2em}.its-links-layer__title{font-size:2.1em;margin-bottom:.7em}.its-links-layer--hidden{opacity:0;pointer-events:none}body.keyboard-input--visible .settings-input{z-index:120}.its-links-editor__toolbar{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.8em}.its-links-editor__button,.its-links-editor__action{background:rgba(255,255,255,0.08);-webkit-border-radius:.6em;border-radius:.6em;border:1px solid rgba(255,255,255,0.18);padding:.7em 1em;font-size:1.1em;line-height:1.2}.its-links-editor__meta{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.6em;opacity:.82}.its-links-editor__meta-item{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);-webkit-border-radius:.5em;border-radius:.5em;padding:.35em .6em;font-size:.95em;line-height:1.2}.its-links-editor .selector.focus{border-color:#ffd27a;-webkit-box-shadow:inset 0 0 0 1px rgba(255,210,122,0.65),0 0 0 2px rgba(255,210,122,0.28);box-shadow:inset 0 0 0 1px rgba(255,210,122,0.65),0 0 0 2px rgba(255,210,122,0.28);background:rgba(255,255,255,0.18)}.its-links-editor__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.7em}.its-links-editor__item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);-webkit-border-radius:.8em;border-radius:.8em;padding:.85em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.7em}.its-links-editor__item.is-disabled{opacity:.62}.its-links-editor__head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em;font-size:1.05em;min-width:0}.its-links-editor__season{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;border:1px solid rgba(255,255,255,0.22);-webkit-border-radius:.45em;border-radius:.45em;padding:.12em .45em;font-size:.86em;opacity:.86}.its-links-editor__state{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;white-space:nowrap;color:rgba(255,255,255,0.72);margin-left:auto}.its-links-editor__state--enabled{color:#67d67a}.its-links-editor__state--disabled{color:#f0c35a}.its-links-editor__filename{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;gap:0;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;font-size:1.15em;line-height:1.2}.its-links-editor__name{min-width:0;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.its-links-editor__ext{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;white-space:nowrap;opacity:.65}.its-links-editor__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.6em}.its-links-editor__action{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.its-links-editor__empty{border:1px dashed rgba(255,255,255,0.22);-webkit-border-radius:.8em;border-radius:.8em;padding:.9em;text-align:center;opacity:.8}@media(max-width:900px){.its-links-layer{padding:.6em}.its-links-layer__panel{width:-webkit-calc(100vw - 1.2em);width:calc(100vw - 1.2em);max-height:95vh}.its-links-editor__toolbar,.its-links-editor__actions{grid-template-columns:1fr;display:grid}}\n        </style>\n    ");
    $('body').append(Lampa.Template.get('its_style', {}, true));
    if (window.appready) {
      add();
    } else {
      Lampa.Listener.follow('app', function (event) {
        if (event.type === 'ready') {
          add();
        }
      });
    }
  }
  if (!window.plugin_its_ready) {
    startPlugin();
  }

})();
