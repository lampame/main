(function () {
  'use strict';

  if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

  var $$h = require('../internals/export');
  var uncurryThis$g = require('../internals/function-uncurry-this-clause');
  var $indexOf = require('../internals/array-includes').indexOf;
  var arrayMethodIsStrict = require('../internals/array-method-is-strict');
  var nativeIndexOf = uncurryThis$g([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$1 = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$h({
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

  var require$$0$8 = /*@__PURE__*/getAugmentedNamespace(_export);

  var hasRequiredEs_globalThis;

  function requireEs_globalThis () {
  	if (hasRequiredEs_globalThis) return es_globalThis;
  	hasRequiredEs_globalThis = 1;

  	var $ = require$$0$8;
  	var globalThis = require$$3$3;

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

  var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(globalThis$d);

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

  	var globalThis = require$$3$3;

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
  	var globalThis = require$$3$3;
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

  var $$g = require('../internals/export');
  var exec$3 = require('../internals/regexp-exec');

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$g({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$3
  }, {
    exec: exec$3
  });

  var $$f = require('../internals/export');
  var fails$d = require('../internals/fails');
  var isArray$3 = require('../internals/is-array');
  var isObject$6 = require('../internals/is-object');
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
    if (!isObject$6(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$3(O);
  };
  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$f({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
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
  var call$9 = require('../internals/function-call');
  var uncurryThis$f = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails$c = require('../internals/fails');
  var anObject$8 = require('../internals/an-object');
  var isCallable$c = require('../internals/is-callable');
  var isObject$5 = require('../internals/is-object');
  var toIntegerOrInfinity$1 = require('../internals/to-integer-or-infinity');
  var toLength$3 = require('../internals/to-length');
  var toString$8 = require('../internals/to-string');
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
  var concat = uncurryThis$f([].concat);
  var push$3 = uncurryThis$f([].push);
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
  fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = isObject$5(searchValue) ? getMethod$2(searchValue, REPLACE) : undefined;
      return replacer ? call$9(replacer, searchValue, O, replaceValue) : call$9(nativeReplace, toString$8(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
      var S = toString$8(string);
      var functionalReplace = isCallable$c(replaceValue);
      if (!functionalReplace) replaceValue = toString$8(replaceValue);
      var flags = toString$8(getRegExpFlags$4(rx));
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
        push$3(results, result);
        if (!global) break;
        var matchStr = toString$8(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$3(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$8(result[0]);
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
          replacement = toString$8(apply$2(replaceValue, undefined, replacerArgs));
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
  var uncurryThis$e = require('../internals/function-uncurry-this');
  var isForced$2 = require('../internals/is-forced');
  var inheritIfRequired$1 = require('../internals/inherit-if-required');
  var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
  var create = require('../internals/object-create');
  var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
  var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
  var isRegExp = require('../internals/is-regexp');
  var toString$7 = require('../internals/to-string');
  var getRegExpFlags$3 = require('../internals/regexp-get-flags');
  var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
  var proxyAccessor = require('../internals/proxy-accessor');
  var defineBuiltIn$6 = require('../internals/define-built-in');
  var fails$b = require('../internals/fails');
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
      pattern = pattern === undefined ? '' : toString$7(pattern);
      flags = flags === undefined ? '' : toString$7(flags);
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
      var pattern = $toString$1(R.source);
      var flags = $toString$1(getRegExpFlags$2(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var uncurryThis$d = require('../internals/function-uncurry-this');
  var id$1 = 0;
  var postfix = Math.random();
  var toString$6 = uncurryThis$d(1.1.toString);
  module.exports = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id$1 + postfix, 36);
  };

  var uid$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(uid$3);

  var es_symbol = {};

  // `Symbol.prototype.description` getter
  var $$e = require('../internals/export');
  var DESCRIPTORS$6 = require('../internals/descriptors');
  var globalThis$b = require('../internals/global-this');
  var call$8 = require('../internals/function-call');
  var uncurryThis$c = require('../internals/function-uncurry-this');
  var hasOwn$4 = require('../internals/has-own-property');
  var isCallable$b = require('../internals/is-callable');
  var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
  var toString$5 = require('../internals/to-string');
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
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$5(arguments[0]);
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
        var stringKey = toString$5(key);
        var symbol = call$8(nativeFor, this, stringKey);
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
        if (hasOwn$4(EmptyStringDescriptionStore, symbol)) return '';
        var string = symbolDescriptiveString(symbol);
        var desc = NATIVE_SYMBOL$3 ? stringSlice$3(string, 7, -1) : replace$2(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$e({
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

  var $$d = require('../internals/export');
  var globalThis$9 = require('../internals/global-this');
  var call$7 = require('../internals/function-call');
  var uncurryThis$b = require('../internals/function-uncurry-this');
  var IS_PURE$3 = require('../internals/is-pure');
  var DESCRIPTORS$5 = require('../internals/descriptors');
  var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
  var fails$9 = require('../internals/fails');
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
  var RangeError = globalThis$9.RangeError;
  var TypeError$1 = globalThis$9.TypeError;
  var QObject = globalThis$9.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$2 = uncurryThis$b([].push);
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
      if (!hasOwn$3(AllSymbols, key) && !hasOwn$3(hiddenKeys$2, key)) push$2(result, key);
    });
    return result;
  };
  var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
    var result = [];
    $forEach(names, function (key) {
      if (hasOwn$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$3(ObjectPrototype, key))) {
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
      var tag = uid$2(description);
      var _setter = function setter(value) {
        var $this = this === undefined ? globalThis$9 : this;
        if ($this === ObjectPrototype) call$7(_setter, ObjectPrototypeSymbols, value);
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
  $$d({
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
  $$d({
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
  $$d({
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
  $$d({
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

  var require$$5$4 = /*@__PURE__*/getAugmentedNamespace(isCallable$a);

  var getBuiltIn$4;
  var hasRequiredGetBuiltIn;

  function requireGetBuiltIn () {
  	if (hasRequiredGetBuiltIn) return getBuiltIn$4;
  	hasRequiredGetBuiltIn = 1;

  	var globalThis = require$$3$3;
  	var isCallable = require$$5$4;
  	var aFunction = function aFunction(argument) {
  	  return isCallable(argument) ? argument : undefined;
  	};
  	getBuiltIn$4 = function (namespace, method) {
  	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  	};
  	return getBuiltIn$4;
  }

  var uncurryThis$a = require('../internals/function-uncurry-this');
  var toString$4 = uncurryThis$a({}.toString);
  var stringSlice$2 = uncurryThis$a(''.slice);
  module.exports = function (it) {
    return stringSlice$2(toString$4(it), 8, -1);
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
  	var isCallable = require$$5$4;
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

  var toString$3;
  var hasRequiredToString;

  function requireToString () {
  	if (hasRequiredToString) return toString$3;
  	hasRequiredToString = 1;

  	var classof = requireClassof();
  	var $String = String;
  	toString$3 = function (argument) {
  	  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  	  return $String(argument);
  	};
  	return toString$3;
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

  var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(isSymbol$1);

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
  	var isSymbol = require$$2$3;
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

  var $$c = require('../internals/export');
  var getBuiltIn$2 = require('../internals/get-built-in');
  var apply$1 = require('../internals/function-apply');
  var call$6 = require('../internals/function-call');
  var uncurryThis$9 = require('../internals/function-uncurry-this');
  var fails$8 = require('../internals/fails');
  var isArray$2 = require('../internals/is-array');
  var isCallable$8 = require('../internals/is-callable');
  var isRawJSON = require('../internals/is-raw-json');
  var isSymbol = require('../internals/is-symbol');
  var classof$4 = require('../internals/classof-raw');
  var toString$2 = require('../internals/to-string');
  var arraySlice$1 = require('../internals/array-slice');
  var parseJSONString = require('../internals/parse-json-string');
  var uid$1 = require('../internals/uid');
  var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
  var NATIVE_RAW_JSON = require('../internals/native-raw-json');
  var $String$2 = String;
  var $stringify = getBuiltIn$2('JSON', 'stringify');
  var exec$1 = uncurryThis$9(/./.exec);
  var charAt = uncurryThis$9(''.charAt);
  var charCodeAt = uncurryThis$9(''.charCodeAt);
  var replace$1 = uncurryThis$9(''.replace);
  var slice = uncurryThis$9(''.slice);
  var push$1 = uncurryThis$9([].push);
  var numberToString = uncurryThis$9(1.1.toString);
  var surrogates = /[\uD800-\uDFFF]/g;
  var leadingSurrogates = /^[\uD800-\uDBFF]$/;
  var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
  var MARK = uid$1();
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
      if (typeof element == 'string') push$1(keys, element);else if (typeof element == 'number' || classof$4(element) === 'Number' || classof$4(element) === 'String') push$1(keys, toString$2(element));
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
  if ($stringify) $$c({
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

  var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertySymbols);

  var hasRequiredEs_object_getOwnPropertySymbols;

  function requireEs_object_getOwnPropertySymbols () {
  	if (hasRequiredEs_object_getOwnPropertySymbols) return es_object_getOwnPropertySymbols;
  	hasRequiredEs_object_getOwnPropertySymbols = 1;

  	var $ = require$$0$8;
  	var NATIVE_SYMBOL = require$$4$1;
  	var fails = requireFails();
  	var getOwnPropertySymbolsModule = require$$3$1;
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
  var globalThis$8 = require('../internals/global-this');
  var $String$1 = globalThis$8.String;

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

  	var globalThis = require$$3$3;
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
  var uncurryThis$8 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$5 = require('../internals/an-object');
  var isObject$4 = require('../internals/is-object');
  var requireObjectCoercible$1 = require('../internals/require-object-coercible');
  var speciesConstructor$2 = require('../internals/species-constructor');
  var advanceStringIndex$1 = require('../internals/advance-string-index');
  var toLength$2 = require('../internals/to-length');
  var toString$1 = require('../internals/to-string');
  var getMethod$1 = require('../internals/get-method');
  var getRegExpFlags$1 = require('../internals/regexp-get-flags');
  var regExpExec$1 = require('../internals/regexp-exec-abstract');
  var stickyHelpers = require('../internals/regexp-sticky-helpers');
  var fails$6 = require('../internals/fails');
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min = Math.min;
  var push = uncurryThis$8([].push);
  var stringSlice$1 = uncurryThis$8(''.slice);
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
      return splitter ? call$5(splitter, separator, O, limit) : call$5(internalSplit, toString$1(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$5(this);
      var S = toString$1(string);
      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }
      var C = speciesConstructor$2(rx, RegExp);
      var flags = toString$1(getRegExpFlags$1(rx));
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

  var uncurryThis$7 = require('../internals/function-uncurry-this');
  var fails$5 = require('../internals/fails');
  var classof$3 = require('../internals/classof-raw');
  var $Object = Object;
  var split = uncurryThis$7(''.split);

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

  var require$$3 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertyDescriptor);

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
  	var nativeGetOwnPropertyDescriptor = require$$3.f;
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

  var isCallable$7 = require('../internals/is-callable');
  module.exports = function (it) {
    return _typeof(it) == 'object' ? it !== null : isCallable$7(it);
  };

  var isObject$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(isObject$3);

  var anObject$3;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject$3;
  	hasRequiredAnObject = 1;

  	var isObject = require$$2$2;
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

  	var globalThis = require$$3$3;
  	var isObject = require$$2$2;
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
  	var uid = require$$3$2;
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

  var globalThis$7 = require('../internals/global-this');
  var isCallable$6 = require('../internals/is-callable');
  var WeakMap = globalThis$7.WeakMap;
  module.exports = isCallable$6(WeakMap) && /native code/.test(String(WeakMap));

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
  	var globalThis = require$$3$3;
  	var isObject = require$$2$2;
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

  var $$b = require('../internals/export');
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
      } else $$b({
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
  	var defineProperty = require$$1$4.f;
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

  var require$$5$2 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

  var wellKnownSymbol$2;
  var hasRequiredWellKnownSymbol;

  function requireWellKnownSymbol () {
  	if (hasRequiredWellKnownSymbol) return wellKnownSymbol$2;
  	hasRequiredWellKnownSymbol = 1;

  	var globalThis = require$$3$3;
  	var shared = requireShared();
  	var hasOwn = requireHasOwnProperty();
  	var uid = require$$3$2;
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

  var uncurryThis$6 = require('../internals/function-uncurry-this');
  var fails$4 = require('../internals/fails');
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
  var stringSlice = uncurryThis$6(''.slice);
  var replace = uncurryThis$6(''.replace);
  var join = uncurryThis$6([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$4(function () {
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

  var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

  var defineBuiltIn$2;
  var hasRequiredDefineBuiltIn;

  function requireDefineBuiltIn () {
  	if (hasRequiredDefineBuiltIn) return defineBuiltIn$2;
  	hasRequiredDefineBuiltIn = 1;

  	var isCallable = require$$5$4;
  	var definePropertyModule = require$$1$4;
  	var makeBuiltIn = require$$0$3;
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

  var es_promise = {};

  var es_promise_constructor = {};

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

  var uncurryThis$5 = require('../internals/function-uncurry-this');
  var fails$3 = require('../internals/fails');
  var isCallable$3 = require('../internals/is-callable');
  var classof$1 = require('../internals/classof');
  var getBuiltIn$1 = require('../internals/get-built-in');
  var inspectSource$1 = require('../internals/inspect-source');
  var noop = function noop() {/* empty */};
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = uncurryThis$5(constructorRegExp.exec);
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
  module.exports = !construct || fails$3(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isConstructor = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

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

  var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

  var call$2 = require('../internals/function-call');
  var uncurryThis$4 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$2 = require('../internals/an-object');
  var isObject$2 = require('../internals/is-object');
  var toLength = require('../internals/to-length');
  var toString = require('../internals/to-string');
  var requireObjectCoercible = require('../internals/require-object-coercible');
  var getMethod = require('../internals/get-method');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getRegExpFlags = require('../internals/regexp-get-flags');
  var regExpExec = require('../internals/regexp-exec-abstract');
  var stringIndexOf = uncurryThis$4(''.indexOf);

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isObject$2(regexp) ? getMethod(regexp, MATCH) : undefined;
      return matcher ? call$2(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$2(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      var flags = toString(getRegExpFlags(rx));
      if (!~stringIndexOf(flags, 'g')) return regExpExec(rx, S);
      var fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });

  var globalThis$5 = require('../internals/global-this');
  var userAgent$4 = require('../internals/environment-user-agent');
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
  	var isConstructor = require$$1$3;
  	var isObject = require$$2$2;
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var toIndexedObject = requireToIndexedObject();
  	var createProperty = requireCreateProperty();
  	var setArrayLength = require$$5$1;
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

  var globalThis$4 = require('../internals/global-this');
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
    if (globalThis$4.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis$4.Deno && _typeof(Deno.version) == 'object') return 'DENO';
    if (classof(globalThis$4.process) === 'process') return 'NODE';
    if (globalThis$4.window && globalThis$4.document) return 'BROWSER';
    return 'REST';
  }();

  var environment = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(environment);

  var environmentIsNode;
  var hasRequiredEnvironmentIsNode;

  function requireEnvironmentIsNode () {
  	if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  	hasRequiredEnvironmentIsNode = 1;

  	var ENVIRONMENT = require$$0$2;
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

  var uncurryThis$2 = require('../internals/function-uncurry-this');
  var aCallable$2 = require('../internals/a-callable');
  module.exports = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$2(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {/* empty */}
  };

  var functionUncurryThisAccessor = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(functionUncurryThisAccessor);

  var isPossiblePrototype;
  var hasRequiredIsPossiblePrototype;

  function requireIsPossiblePrototype () {
  	if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  	hasRequiredIsPossiblePrototype = 1;

  	var isObject = require$$2$2;
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
  	var uncurryThisAccessor = require$$0$1;
  	var isObject = require$$2$2;
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

  var setToStringTag$1;
  var hasRequiredSetToStringTag;

  function requireSetToStringTag () {
  	if (hasRequiredSetToStringTag) return setToStringTag$1;
  	hasRequiredSetToStringTag = 1;

  	var defineProperty = require$$1$4.f;
  	var hasOwn = requireHasOwnProperty();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	setToStringTag$1 = function (target, TAG, STATIC) {
  	  if (target && !STATIC) target = target.prototype;
  	  if (target && !hasOwn(target, TO_STRING_TAG)) {
  	    defineProperty(target, TO_STRING_TAG, {
  	      configurable: true,
  	      value: TAG
  	    });
  	  }
  	};
  	return setToStringTag$1;
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

  var anInstance$1;
  var hasRequiredAnInstance;

  function requireAnInstance () {
  	if (hasRequiredAnInstance) return anInstance$1;
  	hasRequiredAnInstance = 1;

  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var $TypeError = TypeError;
  	anInstance$1 = function (it, Prototype) {
  	  if (isPrototypeOf(Prototype, it)) return it;
  	  throw new $TypeError('Incorrect invocation');
  	};
  	return anInstance$1;
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

  var $$a = require('../internals/export');
  var functionApply$1 = require('../internals/function-apply');
  var aCallable = require('../internals/a-callable');
  var anObject$1 = require('../internals/an-object');
  var fails$2 = require('../internals/fails');

  // MS Edge argumentsList argument is optional
  var OPTIONAL_ARGUMENTS_LIST = !fails$2(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.apply(function () {/* empty */});
  });

  // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply
  $$a({
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

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(environmentIsIos);

  var task;
  var hasRequiredTask;

  function requireTask () {
  	if (hasRequiredTask) return task;
  	hasRequiredTask = 1;

  	var globalThis = require$$3$3;
  	var apply = require$$1$2;
  	var bind = requireFunctionBindContext();
  	var isCallable = require$$5$4;
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

  var globalThis$3 = require('../internals/global-this');
  var DESCRIPTORS = require('../internals/descriptors');

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  module.exports = function (name) {
    if (!DESCRIPTORS) return globalThis$3[name];
    var descriptor = getOwnPropertyDescriptor(globalThis$3, name);
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

  	var globalThis = require$$3$3;
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

  	var globalThis = require$$3$3;
  	promiseNativeConstructor = globalThis.Promise;
  	return promiseNativeConstructor;
  }

  var $$9 = require('../internals/export');
  var IS_PURE$1 = require('../internals/is-pure');
  var NativePromiseConstructor$1 = require('../internals/promise-native-constructor');
  var fails$1 = require('../internals/fails');
  var getBuiltIn = require('../internals/get-built-in');
  var isCallable$2 = require('../internals/is-callable');
  var speciesConstructor = require('../internals/species-constructor');
  var promiseResolve$1 = require('../internals/promise-resolve');
  var defineBuiltIn$1 = require('../internals/define-built-in');
  var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor$1 && fails$1(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype$1['finally'].call({
      then: function then() {/* empty */}
    }, function () {/* empty */});
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$9({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor(this, getBuiltIn('Promise'));
      var isFunction = isCallable$2(onFinally);
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
  if (!IS_PURE$1 && isCallable$2(NativePromiseConstructor$1)) {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (NativePromisePrototype$1['finally'] !== method) {
      defineBuiltIn$1(NativePromisePrototype$1, 'finally', method, {
        unsafe: true
      });
    }
  }

  var globalThis$2 = require('../internals/global-this');
  var NativePromiseConstructor = require('../internals/promise-native-constructor');
  var isCallable$1 = require('../internals/is-callable');
  var isForced$1 = require('../internals/is-forced');
  var inspectSource = require('../internals/inspect-source');
  var wellKnownSymbol$1 = require('../internals/well-known-symbol');
  var ENVIRONMENT = require('../internals/environment');
  var IS_PURE = require('../internals/is-pure');
  var V8_VERSION = require('../internals/environment-v8-version');
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  var SPECIES = wellKnownSymbol$1('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT = isCallable$1(globalThis$2.PromiseRejectionEvent);
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
  	var globalThis = require$$3$3;
  	var path = requirePath();
  	var call = requireFunctionCall();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var setPrototypeOf = requireObjectSetPrototypeOf();
  	var setToStringTag = requireSetToStringTag();
  	var setSpecies = requireSetSpecies();
  	var aCallable = requireACallable();
  	var isCallable = require$$5$4;
  	var isObject = require$$2$2;
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

  var iterate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$6 = /*@__PURE__*/getAugmentedNamespace(iterate$1);

  var $$8 = require('../internals/export');
  var from = require('../internals/array-from');
  var checkCorrectnessOfIteration$2 = require('../internals/check-correctness-of-iteration');
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$2(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$8({
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
  	var isObject = require$$2$2;
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

  var manifest = {
    type: 'other',
    version: '0.3.5',
    name: 'Nightingale Notifications',
    description: 'Episode notifications channel with external subscriptions service',
    component: 'nightingale_notifications'
  };
  var SETTINGS_COMPONENT = 'nightingale_notifications';
  var NOTICE_CHANNEL = 'nightingale';
  var NOTICE_DB = 'nightingale_notifications_notice';
  var SUBSCRIBES_COMPONENT = 'nightingale_subscribes';
  var MENU_BUTTON_CLASS = 'nightingale-notifications-menu-button';
  var SERVICE_HOST = 'notifications.lme.isroot.in';
  var API_BASE = 'https://' + SERVICE_HOST;
  var STORAGE_KEYS = {
    syncUid: 'nightingale_notifications_sync_uid',
    autoImportLampa: 'nightingale_auto_import_lampa',
    autoImportTrakt: 'nightingale_auto_import_trakttv',
    integrationLastRunAt: 'nightingale_integration_last_run_at',
    traktBackoffUntil: 'nightingale_trakt_auto_backoff_until'
  };
  var WS_RECONNECT_MIN = 2000;
  var WS_RECONNECT_MAX = 60000;
  var REQUEST_TIMEOUT = 12000;
  var DETAILS_CACHE_TTL = 1000 * 60 * 60 * 6;
  var SUBSCRIPTION_STATUS_TTL = 1000 * 15;
  var HISTORY_IMPORT_DEBOUNCE = 2000;
  var TRAKT_AUTO_IMPORT_INTERVAL = 1000 * 60 * 15;
  var TRAKT_AUTO_IMPORT_BACKOFF_MIN = 1000 * 60 * 5;
  var TRAKT_AUTO_IMPORT_BACKOFF_MAX = 1000 * 60 * 60;
  var IMPORT_BATCH_SIZE = 12;
  var IMPORT_BATCH_PAUSE = 180;
  var TRAKT_IMPORT_PAGE_LIMIT = 60;
  var TRAKT_IMPORT_MAX_PAGES = 3;

  var es_map = {};

  var es_map_constructor = {};

  var $$7 = require('../internals/export');
  var globalThis$1 = require('../internals/global-this');
  var uncurryThis$1 = require('../internals/function-uncurry-this');
  var isForced = require('../internals/is-forced');
  var defineBuiltIn = require('../internals/define-built-in');
  var InternalMetadataModule = require('../internals/internal-metadata');
  var iterate = require('../internals/iterate');
  var anInstance = require('../internals/an-instance');
  var isCallable = require('../internals/is-callable');
  var isNullOrUndefined = require('../internals/is-null-or-undefined');
  var isObject$1 = require('../internals/is-object');
  var fails = require('../internals/fails');
  var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
  var setToStringTag = require('../internals/set-to-string-tag');
  var inheritIfRequired = require('../internals/inherit-if-required');
  module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = globalThis$1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = uncurryThis$1(NativePrototype[KEY]);
      defineBuiltIn(NativePrototype, KEY, KEY === 'add' ? function add(value) {
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
    var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
        new NativeConstructor(iterable);
      });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance(dummy, NativePrototype);
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
    $$7({
      global: true,
      constructor: true,
      forced: Constructor !== NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var collection = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(collection);

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
  	var isObject = require$$2$2;
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

  var $$6 = require('../internals/export');
  var uncurryThis = require('../internals/function-uncurry-this');
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
    var splice = uncurryThis([].splice);
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
  	var iterate = require$$6;
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

  var state = {
    started: false,
    menuButtonAdded: false,
    subscribesComponentRegistered: false,
    ws: null,
    wsUrl: '',
    wsTimer: null,
    wsPingTimer: null,
    wsPongTimer: null,
    wsDelay: WS_RECONNECT_MIN,
    subscriptions: new Set(),
    subscriptionsImdb: new Set(),
    subscriptionsByImdb: new Map(),
    subscriptionsLoaded: false,
    subscriptionsSyncedAt: 0,
    subscriptionsPromise: null,
    subscriptionStatusSyncedAt: new Map(),
    subscriptionStatusRequests: new Map(),
    subscriptionStatusByContentId: new Map(),
    buttonTargets: new Map(),
    pendingToggle: new Set(),
    detailsCache: new Map(),
    integrationQueue: null,
    integrationSyncInProgress: false,
    historyAutoImportTimer: null,
    traktAutoImportTimer: null,
    traktAutoFailureCount: 0,
    traktAutoBackoffUntil: 0
  };

  function injectStyles() {
    if (document.getElementById('nightingale-notifications-style')) return;
    Lampa.Template.add('nightingale_notifications_style', "<style id=\"nightingale-notifications-style\">\n        .nightingale-notifications__uid{font-family:monospace;opacity:.86}.nightingale-notifications__bell-body{fill:rgba(127,147,170,0.08);stroke:#8ea4bf;-webkit-transition:fill .2s ease,stroke .2s ease;-o-transition:fill .2s ease,stroke .2s ease;transition:fill .2s ease,stroke .2s ease}.nightingale-notifications__bell-clapper{fill:#a2b2c6;-webkit-transition:fill .2s ease,opacity .2s ease;-o-transition:fill .2s ease,opacity .2s ease;transition:fill .2s ease,opacity .2s ease}.button--nightingale-subscribe .nightingale-notifications__bell{-webkit-filter:none;filter:none;opacity:1;-webkit-transition:opacity .2s ease,-webkit-filter .2s ease;transition:opacity .2s ease,-webkit-filter .2s ease;-o-transition:filter .2s ease,opacity .2s ease;transition:filter .2s ease,opacity .2s ease;transition:filter .2s ease,opacity .2s ease,-webkit-filter .2s ease}.button--nightingale-subscribe.active .nightingale-notifications__bell{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.button--nightingale-subscribe.active .nightingale-notifications__bell-body{fill:rgba(0,91,187,0.24);stroke:#005bbb}.button--nightingale-subscribe.active .nightingale-notifications__bell-clapper{fill:#ffd500}.button--nightingale-subscribe.nightingale-notifications--unavailable{opacity:.72}.button--nightingale-subscribe.nightingale-notifications--unavailable .nightingale-notifications__bell-body{fill:rgba(127,147,170,0.04);stroke:#72849b}.button--nightingale-subscribe.nightingale-notifications--unavailable .nightingale-notifications__bell-clapper{fill:#8ea4bf}.button--nightingale-subscribe.nightingale-notifications--busy{opacity:.62;pointer-events:none}\n    </style>");
    $('body').append(Lampa.Template.get('nightingale_notifications_style', {}, true));
  }

  var $$5 = require('../internals/export');
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
  $$5({
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

  var $$4 = require('../internals/export');
  var $trim = require('../internals/string-trim').trim;
  var forcedStringTrimMethod = require('../internals/string-trim-forced');

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$4({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  function registerTranslations() {
    if (!Lampa.Lang || typeof Lampa.Lang.add !== 'function') return;
    Lampa.Lang.add({
      nn_settings_component_name: {
        en: 'Nightingale Notifications',
        uk: 'Nightingale Notifications',
        ru: 'Nightingale Notifications'
      },
      nn_settings_enable_name: {
        en: 'Enable plugin',
        uk: 'Увімкнути плагін',
        ru: 'Включить плагин'
      },
      nn_settings_enable_descr: {
        en: 'Adds a separate Nightingale bell for series subscriptions.',
        uk: 'Додає окремий дзвоник Nightingale для підписок на серіали.',
        ru: 'Добавляет отдельный колокольчик Nightingale для подписок на сериалы.'
      },
      nn_settings_sync_title: {
        en: 'User sync',
        uk: 'Синхронізація користувача',
        ru: 'Синхронизация пользователя'
      },
      nn_settings_device_uid_name: {
        en: 'Device UID',
        uk: 'UID пристрою',
        ru: 'UID устройства'
      },
      nn_settings_current_lampa_uid: {
        en: 'Current lampa_uid',
        uk: 'Поточний lampa_uid',
        ru: 'Текущий lampa_uid'
      },
      nn_settings_sync_uid: {
        en: 'Sync UID',
        uk: 'Sync UID',
        ru: 'Sync UID'
      },
      nn_settings_effective_user_id: {
        en: 'Effective user id',
        uk: 'Ефективний user id',
        ru: 'Эффективный user id'
      },
      nn_settings_sync_override_name: {
        en: 'Sync UID override',
        uk: 'Перевизначення Sync UID',
        ru: 'Переопределение Sync UID'
      },
      nn_settings_sync_override_descr: {
        en: 'If filled, this UID is used instead of local lampa_uid.',
        uk: 'Якщо заповнено, цей UID використовується замість локального lampa_uid.',
        ru: 'Если заполнено, этот UID используется вместо локального lampa_uid.'
      },
      nn_settings_sync_override_placeholder: {
        en: 'Optional lampa_uid from another device',
        uk: 'Необовʼязковий lampa_uid з іншого пристрою',
        ru: 'Необязательный lampa_uid с другого устройства'
      },
      nn_settings_sync_clear_name: {
        en: 'Clear sync UID',
        uk: 'Очистити Sync UID',
        ru: 'Очистить Sync UID'
      },
      nn_settings_health_name: {
        en: 'Health check',
        uk: 'Перевірка сервісу',
        ru: 'Проверка сервиса'
      },
      nn_settings_open_subscribes_name: {
        en: 'Open subscriptions',
        uk: 'Відкрити підписки',
        ru: 'Открыть подписки'
      },
      nn_settings_auto_import_title: {
        en: 'Import',
        uk: 'Імпорт',
        ru: 'Импорт'
      },
      nn_settings_auto_import_lampa_name: {
        en: 'Auto import Lampa',
        uk: 'Автоімпорт Лампа',
        ru: 'Автоимпорт Лампа'
      },
      nn_settings_auto_import_lampa_descr: {
        en: 'Automatically import TV series from Lampa history.',
        uk: 'Автоматично імпортувати серіали з історії Lampa.',
        ru: 'Автоматически импортировать сериалы из истории Lampa.'
      },
      nn_settings_auto_import_trakt_name: {
        en: 'Auto import TraktTV',
        uk: 'Автоімпорт TraktTV',
        ru: 'Автоимпорт TraktTV'
      },
      nn_settings_auto_import_trakt_descr: {
        en: 'Automatically import TraktTV UpNext first, then Watchlist.',
        uk: 'Автоматично імпортувати TraktTV: спочатку UpNext, потім Watchlist.',
        ru: 'Автоматически импортировать TraktTV: сначала UpNext, потом Watchlist.'
      },
      nn_settings_manual_import_lampa_name: {
        en: 'Import from Lampa history',
        uk: 'Імпорт із історії Lampa',
        ru: 'Импорт из истории Lampa'
      },
      nn_settings_manual_import_trakt_name: {
        en: 'Import from TraktTV',
        uk: 'Імпорт із TraktTV',
        ru: 'Импорт из TraktTV'
      },
      nn_menu_subscribes: {
        en: 'Nightingale',
        uk: 'Nightingale',
        ru: 'Nightingale'
      },
      nn_subscribes_title: {
        en: 'Nightingale Subscriptions',
        uk: 'Підписки Nightingale',
        ru: 'Подписки Nightingale'
      },
      nn_subscribes_empty_title: {
        en: 'No subscriptions yet',
        uk: 'Підписок поки немає',
        ru: 'Подписок пока нет'
      },
      nn_subscribes_empty_descr: {
        en: 'Subscribe to a TV series with the Nightingale bell in the card.',
        uk: 'Підпишіться на серіал через дзвоник Nightingale у картці.',
        ru: 'Подпишитесь на сериал через колокольчик Nightingale в карточке.'
      },
      nn_subscribes_disabled_title: {
        en: 'Plugin is disabled',
        uk: 'Плагін вимкнено',
        ru: 'Плагин отключен'
      },
      nn_subscribes_disabled_descr: {
        en: 'Enable Nightingale Notifications in settings.',
        uk: 'Увімкніть Nightingale Notifications у налаштуваннях.',
        ru: 'Включите Nightingale Notifications в настройках.'
      },
      nn_subscribes_uid_title: {
        en: 'Sync UID is required',
        uk: 'Потрібен Sync UID',
        ru: 'Требуется Sync UID'
      },
      nn_subscribes_uid_descr: {
        en: 'Set Sync UID or ensure local lampa_uid exists on this device.',
        uk: 'Вкажіть Sync UID або переконайтесь, що локальний lampa_uid існує на цьому пристрої.',
        ru: 'Укажите Sync UID или убедитесь, что локальный lampa_uid существует на этом устройстве.'
      },
      nn_subscribes_action_unsubscribe: {
        en: 'Unsubscribe',
        uk: 'Відписатися',
        ru: 'Отписаться'
      },
      nn_subscribes_action_unsubscribe_descr: {
        en: 'Remove this series from Nightingale',
        uk: 'Видалити цей серіал із підписок',
        ru: 'Удалить этот сериал из подписок'
      },
      nn_button_title: {
        en: 'Nightingale',
        uk: 'Nightingale',
        ru: 'Nightingale'
      },
      nn_button_state_not_subscribed: {
        en: 'Not subscribed',
        uk: 'Не підписано',
        ru: 'Не подписано'
      },
      nn_button_state_subscribed: {
        en: 'Subscribed',
        uk: 'Підписано',
        ru: 'Подписано'
      },
      nn_button_state_unavailable: {
        en: 'Unavailable',
        uk: 'Недоступно',
        ru: 'Недоступно'
      },
      nn_notice_channel_name: {
        en: 'Nightingale',
        uk: 'Nightingale',
        ru: 'Nightingale'
      },
      nn_notice_new_episode: {
        en: 'New episode is available',
        uk: 'Доступна нова серія',
        ru: 'Доступна новая серия'
      },
      nn_notice_series_update: {
        en: 'Series update is available',
        uk: 'Доступне оновлення серіалу',
        ru: 'Доступно обновление сериала'
      },
      nn_notice_translation_update: {
        en: 'Translation studios updated',
        uk: 'Оновився перелік студій перекладу',
        ru: 'Обновился список студий перевода'
      },
      nn_notice_studios_label: {
        en: 'Studios',
        uk: 'Студії',
        ru: 'Студии'
      },
      nn_notice_added_studios_label: {
        en: 'Added',
        uk: 'Додано',
        ru: 'Добавлено'
      },
      nn_series_name: {
        en: 'Series',
        uk: 'Серіал',
        ru: 'Сериал'
      },
      nn_noty_prefix: {
        en: 'Nightingale',
        uk: 'Nightingale',
        ru: 'Nightingale'
      },
      nn_noty_subscribed: {
        en: 'Subscription enabled',
        uk: 'Підписку увімкнено',
        ru: 'Подписка включена'
      },
      nn_noty_unsubscribed: {
        en: 'Subscription removed',
        uk: 'Підписку вимкнено',
        ru: 'Подписка отключена'
      },
      nn_noty_unsubscribe_by_error: {
        en: 'Subscription cancelled because series was not found in database',
        uk: 'Нажаль ваша підписка скасована, так як ми не знайшли його в базі',
        ru: 'Подписка отменена, так как сериал не найден в базе'
      },
      nn_noty_sync_uid_required: {
        en: 'Set Sync UID or ensure local lampa_uid exists.',
        uk: 'Вкажіть Sync UID або переконайтесь, що локальний lampa_uid існує.',
        ru: 'Укажите Sync UID или убедитесь, что локальный lampa_uid существует.'
      },
      nn_noty_sync_uid_cleared: {
        en: 'Sync UID is cleared',
        uk: 'Sync UID очищено',
        ru: 'Sync UID очищен'
      },
      nn_noty_request_failed: {
        en: 'Request failed',
        uk: 'Запит не виконано',
        ru: 'Запрос не выполнен'
      },
      nn_noty_series_not_releasing: {
        en: 'This series is no longer releasing',
        uk: 'Цей серіал більше не виходить',
        ru: 'Этот сериал больше не выходит'
      },
      nn_noty_no_subscription_target: {
        en: 'No available series to subscribe',
        uk: 'Немає на що підписуватись',
        ru: 'Нет доступного сериала для подписки'
      },
      nn_noty_subscribe_not_confirmed: {
        en: 'Subscription is not confirmed',
        uk: 'Підписку не підтверджено',
        ru: 'Подписка не подтверждена'
      },
      nn_noty_unsubscribe_not_confirmed: {
        en: 'Unsubscribe is not confirmed',
        uk: 'Відписку не підтверджено',
        ru: 'Отписка не подтверждена'
      },
      nn_noty_health_prefix: {
        en: 'Health',
        uk: 'Стан сервісу',
        ru: 'Состояние сервиса'
      },
      nn_noty_trakt_unavailable: {
        en: 'TraktTV plugin is unavailable',
        uk: 'Плагін TraktTV недоступний',
        ru: 'Плагин TraktTV недоступен'
      },
      nn_noty_trakt_auth_required: {
        en: 'Login to TraktTV first',
        uk: 'Спочатку увійдіть у TraktTV',
        ru: 'Сначала войдите в TraktTV'
      },
      nn_noty_import_summary_prefix: {
        en: 'Import summary',
        uk: 'Результат імпорту',
        ru: 'Результат импорта'
      },
      nn_noty_import_source_lampa: {
        en: 'Lampa',
        uk: 'Лампа',
        ru: 'Лампа'
      },
      nn_noty_import_source_trakt: {
        en: 'TraktTV',
        uk: 'TraktTV',
        ru: 'TraktTV'
      },
      nn_noty_import_added: {
        en: 'added',
        uk: 'додано',
        ru: 'добавлено'
      },
      nn_noty_import_duplicates: {
        en: 'duplicates',
        uk: 'дублікати',
        ru: 'дубликаты'
      },
      nn_noty_import_skipped: {
        en: 'skipped',
        uk: 'пропущено',
        ru: 'пропущено'
      },
      nn_noty_import_failed: {
        en: 'failed',
        uk: 'помилки',
        ru: 'ошибки'
      }
    });
  }
  function t(key) {
    if (!Lampa.Lang || typeof Lampa.Lang.translate !== 'function') return key;
    return Lampa.Lang.translate(key);
  }
  function fallbackSeriesTitle(tmdbId) {
    return t('nn_series_name') + ' #' + String(tmdbId || 0);
  }
  function withPrefix(message) {
    return t('nn_noty_prefix') + ': ' + String(message || '');
  }
  function showBell(message) {
    var text = String(message || '');
    if (typeof Lampa !== 'undefined' && Lampa.Bell && typeof Lampa.Bell.push === 'function') {
      try {
        Lampa.Bell.push({
          from: t('nn_noty_prefix'),
          text: text
        });
        return;
      } catch (error) {}
    }
    if (typeof Lampa !== 'undefined' && Lampa.Noty && typeof Lampa.Noty.show === 'function') {
      Lampa.Noty.show(withPrefix(text));
    }
  }

  function buildContentId(rawId) {
    if (rawId === null || rawId === undefined) return '';
    var str = String(rawId).trim();
    if (!str) return '';
    var tvMatch = str.match(/^tv:(\d+)$/i);
    if (tvMatch) {
      var tmdbId = parseInt(tvMatch[1], 10);
      return tmdbId > 0 ? 'tv:' + tmdbId : '';
    }
    var numericMatch = str.match(/^(\d+)$/);
    if (numericMatch) {
      var _tmdbId = parseInt(numericMatch[1], 10);
      return _tmdbId > 0 ? 'tv:' + _tmdbId : '';
    }
    return '';
  }
  function resolveSubscriptionContentId(row) {
    if (!row || _typeof(row) !== 'object') return '';
    var candidates = [row._id, row.tmdb_id, row.id, row.content_id];
    for (var i = 0; i < candidates.length; i++) {
      var contentId = buildContentId(candidates[i]);
      if (contentId) return contentId;
    }
    return '';
  }
  function parseTmdbId(contentId) {
    var match = String(contentId || '').match(/^tv:(\d+)$/);
    if (!match) return 0;
    return parseInt(match[1], 10) || 0;
  }
  function resolveTvContentIds(input) {
    var list = [];
    var cards = Array.isArray(input) ? input : [input];
    cards.forEach(function (card) {
      appendTvCardCandidates(list, card);
    });
    return list;
  }
  function appendTvCardCandidates(list, card) {
    if (!card || _typeof(card) !== 'object') return;
    var source = String(card.source || '').toLowerCase();
    var isTmdbSource = source === 'tmdb';
    var beforeStrong = list.length;
    pushContentId(list, card.nightingale_content_id);
    pushContentId(list, card.content_id);
    pushContentId(list, card.tmdb_id);
    pushContentId(list, card.tmdbId);
    if (typeof card._id === 'string' && /^tv:\d+$/i.test(card._id.trim())) {
      pushContentId(list, card._id);
    }
    if (isTmdbSource) {
      pushContentId(list, card.id);
      pushContentId(list, card._id);
      return;
    }
    if (list.length === beforeStrong) {
      var beforeFallback = list.length;
      pushContentId(list, card.id);
      if (list.length === beforeFallback) {
        pushContentId(list, card._id);
      }
    }
  }
  function pushContentId(list, rawValue) {
    var contentId = buildContentId(rawValue);
    if (!contentId) return;
    if (list.indexOf(contentId) >= 0) return;
    list.push(contentId);
  }
  function normalizeImdbId(value) {
    if (!value) return '';
    var raw = String(value).trim().toLowerCase();
    if (!raw) return '';
    if (/^tt\d+$/.test(raw)) return raw;
    var digits = raw.replace(/[^\d]/g, '');
    if (!digits) return '';
    return 'tt' + digits;
  }
  function isTvCard(event, movie) {
    if (event && event.object && event.object.method === 'tv') return true;
    if (movie && movie.number_of_seasons) return true;
    if (movie && movie.first_air_date) return true;
    return false;
  }
  function parseDetectedAt(value) {
    if (!value) return Date.now();
    var timestamp = Date.parse(String(value));
    if (isNaN(timestamp)) return Date.now();
    return timestamp;
  }
  function parsePositiveInt(value) {
    var parsed = parseInt(value, 10);
    return isNaN(parsed) || parsed < 1 ? 0 : parsed;
  }
  function resolveSeriesTitle(card, tmdbId) {
    if (!card) return fallbackSeriesTitle(tmdbId);
    if (Lampa.Lang && typeof Lampa.Lang.selected === 'function' && Lampa.Lang.selected(['ru', 'uk', 'be'])) {
      return card.name || card.title || card.original_name || card.original_title || fallbackSeriesTitle(tmdbId);
    }
    return card.original_name || card.original_title || card.name || card.title || fallbackSeriesTitle(tmdbId);
  }
  function escapeHtml(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function isPluginEnabled() {
    return true;
  }
  function getLocalLampaUid() {
    var fromStorage = String(Lampa.Storage.get('lampa_uid', '') || '').trim();
    if (fromStorage) return fromStorage;
    var fromLocalStorage = String(window.localStorage.getItem('lampa_uid') || '').trim();
    return fromLocalStorage;
  }
  function getSyncUid() {
    return String(Lampa.Storage.get(STORAGE_KEYS.syncUid, '') || '').trim();
  }
  function getEffectiveUserId() {
    return getSyncUid() || getLocalLampaUid();
  }
  function isRuntimeAvailable() {
    if (!getEffectiveUserId()) return false;
    return true;
  }

  function apiRequest(path, options) {
    var params = options || {};
    var method = params.method || 'GET';
    var timeout = params.timeout || REQUEST_TIMEOUT;
    return new Promise(function (resolve, reject) {
      var headers = {};
      if (params.auth !== false) {
        var userId = getEffectiveUserId();
        if (!userId) {
          reject(createApiError(t('nn_noty_sync_uid_required'), 0));
          return;
        }
        headers['x-user-id'] = userId;
      }
      var ajaxOptions = {
        url: API_BASE + path,
        type: method,
        timeout: timeout,
        dataType: 'json',
        headers: headers
      };
      if (typeof params.body !== 'undefined') {
        ajaxOptions.contentType = 'application/json; charset=utf-8';
        ajaxOptions.data = JSON.stringify(params.body);
        ajaxOptions.processData = false;
      }
      $.ajax(ajaxOptions).done(function (result) {
        resolve(result || {});
      }).fail(function (jqXHR, textStatus, errorThrown) {
        var payload = jqXHR && jqXHR.responseJSON ? jqXHR.responseJSON : null;
        var reason = payload && payload.error ? payload.error : errorThrown || textStatus || t('nn_noty_request_failed');
        reject(createApiError(reason, jqXHR ? jqXHR.status : 0, payload));
      });
    });
  }
  function subscribeToSeries(contentId, imdbId) {
    var body = {
      _id: contentId
    };
    if (imdbId) body.imdb_id = imdbId;
    return apiRequest('/v1/subscriptions', {
      method: 'POST',
      body: body
    });
  }
  function unsubscribeFromSeries(contentId) {
    return apiRequest('/v1/subscriptions/' + encodeURIComponent(contentId), {
      method: 'DELETE'
    });
  }
  function getSubscriptionStatus(contentId) {
    var normalizedContentId = buildContentId(contentId);
    if (!normalizedContentId) {
      return Promise.reject(createApiError(t('nn_noty_no_subscription_target'), 422));
    }
    return apiRequest('/v1/subscriptions/' + encodeURIComponent(normalizedContentId) + '/status', {
      method: 'GET'
    });
  }
  function loadSubscriptions(state, redrawAllSubscribeButtons) {
    if (state.subscriptionsPromise) return state.subscriptionsPromise;
    state.subscriptionsPromise = apiRequest('/v1/subscriptions', {
      method: 'GET'
    }).then(function (result) {
      var next = new Set();
      var nextImdb = new Set();
      var nextByImdb = new Map();
      var rows = result && Array.isArray(result.results) ? result.results : [];
      rows.forEach(function (row) {
        var contentId = resolveSubscriptionContentId(row);
        if (contentId) next.add(contentId);
        var imdbId = normalizeImdbId(row && row.imdb_id ? row.imdb_id : '');
        if (imdbId) {
          nextImdb.add(imdbId);
          if (contentId && !nextByImdb.has(imdbId)) nextByImdb.set(imdbId, contentId);
        }
      });
      state.subscriptions = next;
      state.subscriptionsImdb = nextImdb;
      state.subscriptionsByImdb = nextByImdb;
      if (state.subscriptionStatusSyncedAt && typeof state.subscriptionStatusSyncedAt.clear === 'function') {
        state.subscriptionStatusSyncedAt.clear();
      }
      state.subscriptionsLoaded = true;
      state.subscriptionsSyncedAt = Date.now();
      if (typeof redrawAllSubscribeButtons === 'function') {
        redrawAllSubscribeButtons();
      }
      return rows;
    }).catch(function (error) {
      state.subscriptionsLoaded = false;
      if (typeof redrawAllSubscribeButtons === 'function') {
        redrawAllSubscribeButtons();
      }
      throw error;
    }).finally(function () {
      state.subscriptionsPromise = null;
    });
    return state.subscriptionsPromise;
  }
  function checkHealth() {
    return apiRequest('/health', {
      method: 'GET',
      auth: false
    }).then(function (result) {
      var status = result && result.status ? String(result.status) : 'ok';
      showBell(t('nn_noty_health_prefix') + ': ' + status);
    }).catch(function (error) {
      var message = error && error.message ? error.message : t('nn_noty_request_failed');
      showBell(t('nn_noty_health_prefix') + ': ' + message);
    });
  }
  function createApiError(message, status, payload) {
    var error = new Error(String(message || t('nn_noty_request_failed')));
    error.status = status || 0;
    error.payload = payload || null;
    return error;
  }

  function registerSettings(restartRuntime, integrationsController) {
    var settingsApi = Lampa.SettingsApi || Lampa.Settings;
    if (!settingsApi || typeof settingsApi.addComponent !== 'function') return;
    settingsApi.addComponent({
      component: SETTINGS_COMPONENT,
      name: t('nn_settings_component_name'),
      icon: getSettingsIcon()
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        type: 'title'
      },
      field: {
        name: t('nn_settings_component_name')
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        type: 'title'
      },
      field: {
        name: t('nn_settings_sync_title')
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        type: 'static'
      },
      field: {
        name: t('nn_settings_device_uid_name'),
        description: ''
      },
      onRender: function onRender(item) {
        var localUid = getLocalLampaUid() || '-';
        var effectiveUid = getEffectiveUserId() || '-';
        var syncUid = getSyncUid() || '-';
        item.find('.settings-param__name').text(t('nn_settings_current_lampa_uid') + ': ' + localUid);
        item.find('.settings-param__descr').remove();
        item.append("<div class=\"settings-param__descr\">\n                ".concat(escapeHtml(t('nn_settings_sync_uid')), ": <span class=\"nightingale-notifications__uid\">").concat(escapeHtml(syncUid), "</span><br>\n                ").concat(escapeHtml(t('nn_settings_effective_user_id')), ": <span class=\"nightingale-notifications__uid\">").concat(escapeHtml(effectiveUid), "</span>\n            </div>"));
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: STORAGE_KEYS.syncUid,
        type: 'input',
        default: '',
        values: '',
        placeholder: t('nn_settings_sync_override_placeholder')
      },
      field: {
        name: t('nn_settings_sync_override_name'),
        description: t('nn_settings_sync_override_descr')
      },
      onChange: function onChange() {
        restartRuntime('settings_sync_uid');
        Lampa.Settings.update();
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: 'nightingale_notifications_sync_uid_clear',
        type: 'button'
      },
      field: {
        name: t('nn_settings_sync_clear_name')
      },
      onRender: function onRender(item) {
        item.toggleClass('hide', !Boolean(getSyncUid()));
      },
      onChange: function onChange() {
        Lampa.Storage.set(STORAGE_KEYS.syncUid, '');
        showBell(t('nn_noty_sync_uid_cleared'));
        restartRuntime('settings_clear_sync_uid');
        Lampa.Settings.update();
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: 'nightingale_notifications_open_subscribes',
        type: 'button'
      },
      field: {
        name: t('nn_settings_open_subscribes_name')
      },
      onChange: function onChange() {
        if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
        if (Lampa.Controller && typeof Lampa.Controller.toggle === 'function') {
          Lampa.Controller.toggle('settings');
        }
        setTimeout(function () {
          Lampa.Activity.push({
            url: '',
            title: t('nn_subscribes_title'),
            component: SUBSCRIBES_COMPONENT,
            page: 1
          });
        }, 0);
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        type: 'title'
      },
      field: {
        name: t('nn_settings_auto_import_title')
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: STORAGE_KEYS.autoImportLampa,
        type: 'trigger',
        default: false
      },
      field: {
        name: t('nn_settings_auto_import_lampa_name'),
        description: t('nn_settings_auto_import_lampa_descr')
      },
      onChange: function onChange() {
        if (integrationsController && typeof integrationsController.restartAutoImports === 'function') {
          integrationsController.restartAutoImports('settings_auto_import_lampa');
        }
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: STORAGE_KEYS.autoImportTrakt,
        type: 'trigger',
        default: false
      },
      field: {
        name: t('nn_settings_auto_import_trakt_name'),
        description: t('nn_settings_auto_import_trakt_descr')
      },
      onChange: function onChange() {
        if (integrationsController && typeof integrationsController.restartAutoImports === 'function') {
          integrationsController.restartAutoImports('settings_auto_import_trakt');
        }
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: 'nightingale_notifications_manual_import_lampa',
        type: 'button'
      },
      field: {
        name: t('nn_settings_manual_import_lampa_name')
      },
      onChange: function onChange() {
        if (integrationsController && typeof integrationsController.manualImportFromHistory === 'function') {
          integrationsController.manualImportFromHistory();
        }
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: 'nightingale_notifications_manual_import_trakt',
        type: 'button'
      },
      field: {
        name: t('nn_settings_manual_import_trakt_name')
      },
      onChange: function onChange() {
        if (integrationsController && typeof integrationsController.manualImportFromTrakt === 'function') {
          integrationsController.manualImportFromTrakt();
        }
      }
    });
    settingsApi.addParam({
      component: SETTINGS_COMPONENT,
      param: {
        name: 'nightingale_notifications_health_check',
        type: 'button'
      },
      field: {
        name: t('nn_settings_health_name')
      },
      onChange: function onChange() {
        checkHealth();
      }
    });
  }
  function getSettingsIcon() {
    if (Lampa.Template && typeof Lampa.Template.string === 'function') {
      try {
        var icon = Lampa.Template.string('icon_bell');
        if (icon) return icon;
      } catch (error) {}
    }
    return "<svg width=\"28\" height=\"28\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\" fill=\"currentColor\"></path>\n        <path d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke=\"currentColor\" stroke-width=\"2.6\"></path>\n    </svg>";
  }

  var $$3 = require('../internals/export');
  var $map = require('../internals/array-iteration').map;
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$3({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

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

  var noticeSelectHandlerBound = false;
  function registerNoticeChannel() {
    if (!Lampa.Notice || !Lampa.NoticeClassLampa) return;
    if (Lampa.Notice.classes && Lampa.Notice.classes[NOTICE_CHANNEL]) return;
    Lampa.Notice.addClass(NOTICE_CHANNEL, new Lampa.NoticeClassLampa({
      name: t('nn_notice_channel_name'),
      db_name: NOTICE_DB
    }));
  }
  function registerNoticeSelectOpenHandler() {
    if (noticeSelectHandlerBound) return;
    if (!Lampa.Notice || !Lampa.Notice.listener || typeof Lampa.Notice.listener.follow !== 'function') return;
    noticeSelectHandlerBound = true;
    migrateLegacyNotices();
    setTimeout(migrateLegacyNotices, 1200);
    setTimeout(migrateLegacyNotices, 3000);
    Lampa.Notice.listener.follow('select', function (event) {
      if (!event || !event.element) return;
      var element = event.element;
      if (element.from !== NOTICE_CHANNEL) return;
      var card = element.nightingaleCard;
      var cardId = card && card.id ? card.id : 0;
      if (!cardId) return;
      if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
      if (Lampa.Notice && typeof Lampa.Notice.close === 'function') {
        Lampa.Notice.close();
      }
      var source = resolvePreferredSource();
      var normalizedCard = Object.assign({}, card, {
        source: source
      });
      Lampa.Activity.push({
        url: '',
        component: 'full',
        id: cardId,
        method: 'tv',
        card: normalizedCard,
        source: source
      });
    });
  }
  function migrateLegacyNotices() {
    if (!Lampa.Notice || !Lampa.Notice.classes) return;
    var channel = Lampa.Notice.classes[NOTICE_CHANNEL];
    if (!channel || !Array.isArray(channel.notices)) return;
    var patched = [];
    channel.notices = channel.notices.map(function (notice) {
      if (!notice || _typeof(notice) !== 'object') return notice;
      if (notice.from !== NOTICE_CHANNEL) return notice;
      if (!notice.card || notice.nightingaleCard) return notice;
      var migrated = Object.assign({}, notice, {
        nightingaleCard: notice.card
      });
      delete migrated.card;
      patched.push(migrated);
      return migrated;
    });
    if (!patched.length) return;
    if (!channel.db || typeof channel.db.rewriteData !== 'function') return;
    patched.forEach(function (notice) {
      if (!notice.id) return;
      channel.db.rewriteData('all', notice.id, notice).catch(function () {});
    });
  }
  function resolvePreferredSource() {
    if (!Lampa.Storage || typeof Lampa.Storage.get !== 'function') return 'tmdb';
    var current = String(Lampa.Storage.get('source', 'tmdb') || '').trim().toLowerCase();
    return current === 'cub' ? 'cub' : 'tmdb';
  }
  function pushNotice(notice) {
    return new Promise(function (resolve) {
      if (!Lampa.Notice || typeof Lampa.Notice.pushNotice !== 'function') {
        resolve(false);
        return;
      }
      Lampa.Notice.pushNotice(NOTICE_CHANNEL, notice, function () {
        resolve(true);
      }, function () {
        resolve(false);
      });
    });
  }
  function upsertNoticeByEpisode(notice) {
    return new Promise(function (resolve) {
      if (!notice || _typeof(notice) !== 'object') {
        resolve(false);
        return;
      }
      var meta = notice.nightingaleMeta;
      var key = resolveEpisodeKey(meta);
      if (!key || !Lampa.Notice || !Lampa.Notice.classes || !Lampa.Notice.classes[NOTICE_CHANNEL]) {
        pushNotice(notice).then(resolve);
        return;
      }
      var channel = Lampa.Notice.classes[NOTICE_CHANNEL];
      if (!Array.isArray(channel.notices)) {
        pushNotice(notice).then(resolve);
        return;
      }
      var existing = channel.notices.find(function (item) {
        if (!item || item.from !== NOTICE_CHANNEL) return false;
        return resolveEpisodeKey(item.nightingaleMeta) === key;
      });
      if (!existing || !existing.id) {
        pushNotice(notice).then(resolve);
        return;
      }
      var updated = Object.assign({}, existing, {
        time: notice.time,
        title: notice.title,
        text: notice.text,
        poster: notice.poster,
        nightingaleCard: notice.nightingaleCard,
        labels: notice.labels,
        nightingaleMeta: notice.nightingaleMeta
      });
      var index = channel.notices.indexOf(existing);
      if (index >= 0) channel.notices[index] = updated;
      if (!channel.db || typeof channel.db.rewriteData !== 'function') {
        resolve(true);
        return;
      }
      channel.db.rewriteData('all', existing.id, updated).then(function () {
        if (typeof channel.update === 'function') channel.update();
        resolve(true);
      }).catch(function () {
        resolve(false);
      });
    });
  }
  function resolveEpisodeKey(meta) {
    if (!meta || _typeof(meta) !== 'object') return '';
    var contentId = String(meta.contentId || '').trim();
    var season = parseInt(meta.season, 10) || 0;
    var episode = parseInt(meta.episode, 10) || 0;
    if (!contentId || season < 1 || episode < 1) return '';
    return contentId + ':' + season + ':' + episode;
  }

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

  	var $ = require$$0$8;
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

  var BUTTON_CLASS = 'button--nightingale-subscribe';
  var TERMINAL_SERIES_STATUSES = ['ended', 'canceled', 'cancelled', 'released'];
  function createButtonsController(params) {
    var state = params.state;
    var isPluginEnabled = params.isPluginEnabled;
    var isRuntimeAvailable = params.isRuntimeAvailable;
    var subscribeToSeries = params.subscribeToSeries;
    var unsubscribeFromSeries = params.unsubscribeFromSeries;
    var getSubscriptionStatus = params.getSubscriptionStatus;
    if (!state.subscriptionStatusSyncedAt) state.subscriptionStatusSyncedAt = new Map();
    if (!state.subscriptionStatusRequests) state.subscriptionStatusRequests = new Map();
    if (!state.subscriptionStatusByContentId) state.subscriptionStatusByContentId = new Map();
    function onFullEvent(event) {
      if (!event || event.type !== 'build' || event.name !== 'start') return;
      var startItem = event.item;
      var root = startItem && startItem.html ? startItem.html : null;
      var movie = event.data && event.data.movie ? event.data.movie : null;
      if (!root || !root.length || !movie) return;
      if (!isPluginEnabled()) {
        removeNightingaleButtons(root);
        return;
      }
      if (!isTvCard(event, movie)) return;
      var button = ensureNightingaleButton(root);
      if (!button.length) return;
      button.off('hover:enter.nightingale hover:focus.nightingale');
      button.on('hover:focus.nightingale', function () {
        if (startItem) startItem.last = button[0];
      });
      var objectContentId = resolveEventObjectContentId(event);
      var contentIds = resolveTvContentIds([movie, event && event.object ? event.object.card : null, event && event.object ? event.object.movie : null, event && event.object ? {
        id: event.object.id,
        source: event.object.source
      } : null]);
      if (objectContentId && contentIds.indexOf(objectContentId) === -1) {
        contentIds.unshift(objectContentId);
      }
      var imdbId = normalizeImdbId(movie && movie.imdb_id ? movie.imdb_id : '');
      var normalizedIds = normalizeContentIds(contentIds);
      if (!normalizedIds.length) {
        setupUnavailableButton(button);
        return;
      }
      var contentId = normalizedIds[0];
      button.on('hover:enter.nightingale', function () {
        onSubscribeButtonEnter(contentId, normalizedIds, movie);
      });
      registerButtonTarget(contentId, normalizedIds, imdbId, button[0]);
      redrawSubscribeButton(contentId);
      syncSubscriptionStatus(contentId, normalizedIds, imdbId, true);
    }
    function ensureNightingaleButton(root) {
      var container = root.find('.full-start-new__buttons');
      if (!container.length) return $();
      var button = container.find('.' + BUTTON_CLASS);
      if (button.length) return button;
      button = $(createButtonTemplate());
      var optionsButton = container.find('.button--options').first();
      if (optionsButton.length) optionsButton.before(button);else container.append(button);
      return button;
    }
    function createButtonTemplate() {
      return "<div class=\"full-start__button selector ".concat(BUTTON_CLASS, "\">\n            <svg class=\"nightingale-notifications__bell\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path class=\"nightingale-notifications__bell-clapper\" d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\"></path>\n                <path class=\"nightingale-notifications__bell-body\" d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke-width=\"2.6\"></path>\n            </svg>\n            <span>").concat(escapeHtml(t('nn_button_state_not_subscribed')), "</span>\n        </div>");
    }
    function removeNightingaleButtons(root) {
      if (!root || !root.length) return;
      root.find('.' + BUTTON_CLASS).each(function () {
        unregisterButtonTarget(this);
      }).remove();
    }
    function registerButtonTarget(contentId, contentIds, imdbId, node) {
      if (!node) return;
      var resolvedIds = normalizeContentIds(contentIds && contentIds.length ? contentIds : [contentId]);
      var primaryContentId = resolvedIds.length ? resolvedIds[0] : buildContentId(contentId);
      if (!primaryContentId) return;
      unregisterButtonTarget(node);
      node.dataset.nightingaleContentId = primaryContentId;
      node.dataset.nightingaleContentIds = resolvedIds.join(',');
      node.dataset.nightingaleImdbId = imdbId || '';
      node.dataset.nightingaleSubscribed = resolveKnownSubscribedValue(primaryContentId);
      node.dataset.nightingaleUnavailable = '0';
      if (!state.buttonTargets.has(primaryContentId)) {
        state.buttonTargets.set(primaryContentId, new Set());
      }
      state.buttonTargets.get(primaryContentId).add(node);
    }
    function setupUnavailableButton(button) {
      if (!button || !button.length) return;
      var node = button[0];
      unregisterButtonTarget(node);
      node.dataset.nightingaleUnavailable = '1';
      node.dataset.nightingaleSubscribed = '0';
      var label = t('nn_button_state_unavailable');
      button.toggleClass('hide', !isPluginEnabled());
      button.removeClass('active');
      button.removeClass('nightingale-notifications--busy');
      button.addClass('nightingale-notifications--unavailable');
      button.attr('data-subtitle', label);
      button.find('span').text(label);
      applyButtonVisualState(button, false, true);
      button.on('hover:enter.nightingale', function () {
        showBell(t('nn_noty_no_subscription_target'));
      });
    }
    function unregisterButtonTarget(node) {
      if (!node || !node.dataset) return;
      var oldContentId = node.dataset.nightingaleContentId;
      delete node.dataset.nightingaleContentIds;
      delete node.dataset.nightingaleImdbId;
      delete node.dataset.nightingaleSubscribed;
      delete node.dataset.nightingaleUnavailable;
      if (!oldContentId) return;
      var targets = state.buttonTargets.get(oldContentId);
      if (!targets) return;
      targets.delete(node);
      if (!targets.size) state.buttonTargets.delete(oldContentId);
    }
    function redrawAllSubscribeButtons() {
      state.buttonTargets.forEach(function (_, contentId) {
        redrawSubscribeButton(contentId);
      });
      $('.' + BUTTON_CLASS).each(function () {
        if (this && this.dataset && this.dataset.nightingaleContentId) return;
        var button = $(this);
        var enabled = isPluginEnabled();
        button.toggleClass('hide', !enabled);
        if (!enabled) {
          button.removeClass('active');
          button.removeClass('nightingale-notifications--busy');
        }
      });
    }
    function redrawSubscribeButton(contentId) {
      var targets = state.buttonTargets.get(contentId);
      if (!targets || !targets.size) return;
      var enabled = isPluginEnabled();
      var pending = state.pendingToggle.has(contentId);
      var removed = [];
      targets.forEach(function (node) {
        if (!node || !document.body.contains(node)) {
          removed.push(node);
          return;
        }
        var button = $(node);
        var nodeContentIds = readNodeContentIds(node);
        var nodeImdbId = normalizeImdbId(node.dataset.nightingaleImdbId || '');
        var subscribedOverride = resolveSubscribedFromStatusMap(nodeContentIds, nodeImdbId);
        var subscribed = subscribedOverride === null ? isSubscribed(nodeContentIds, nodeImdbId) : subscribedOverride;
        var unavailable = String(node.dataset.nightingaleUnavailable || '') === '1';
        var label = resolveButtonLabel(subscribed, unavailable);
        button.toggleClass('hide', !enabled);
        button.toggleClass('active', subscribed);
        button.toggleClass('nightingale-notifications--busy', pending);
        button.toggleClass('nightingale-notifications--unavailable', unavailable);
        button.attr('data-subtitle', label);
        button.find('span').text(label);
        applyButtonVisualState(button, subscribed, unavailable);
        if (!enabled) {
          button.removeClass('active');
          button.removeClass('nightingale-notifications--busy');
          button.removeClass('nightingale-notifications--unavailable');
        }
      });
      removed.forEach(function (node) {
        targets.delete(node);
      });
      if (!targets.size) state.buttonTargets.delete(contentId);
    }
    function onSubscribeButtonEnter(contentId, contentIds, movie) {
      if (state.pendingToggle.has(contentId)) return;
      if (!isRuntimeAvailable()) {
        showBell(t('nn_noty_sync_uid_required'));
        return;
      }
      var normalizedIds = normalizeContentIds(contentIds && contentIds.length ? contentIds : [contentId]);
      if (!normalizedIds.length) {
        showBell(t('nn_noty_no_subscription_target'));
        return;
      }
      var primaryContentId = normalizedIds[0];
      var imdbId = normalizeImdbId(movie && movie.imdb_id ? movie.imdb_id : '');
      state.pendingToggle.add(primaryContentId);
      redrawSubscribeButton(primaryContentId);
      syncSubscriptionStatus(primaryContentId, normalizedIds, imdbId, true).catch(function () {}).finally(function () {
        var resolvedSubscribedContentId = resolveSubscribedContentId(normalizedIds, imdbId);
        var resolvedSubscribed = !!resolvedSubscribedContentId || isImdbSubscribed(imdbId);
        if (resolvedSubscribed && !resolvedSubscribedContentId) {
          state.pendingToggle.delete(primaryContentId);
          redrawSubscribeButton(primaryContentId);
          showBell(t('nn_noty_request_failed'));
          return;
        }
        var action = resolvedSubscribed ? unsubscribeFromSeries(resolvedSubscribedContentId) : subscribeToSeries(primaryContentId, imdbId);
        action.then(function (rawActionResult) {
          var requestedSubscribe = !resolvedSubscribed;
          var actionResult = normalizeStatusResponse(rawActionResult);
          var hasExplicitSubscribed = hasSubscribedField(actionResult);
          var expectedSubscribed = requestedSubscribe;
          if (hasExplicitSubscribed) {
            expectedSubscribed = parseSubscribedFlag(actionResult.subscribed);
            var updatedContentId = applySubscriptionStatus(actionResult, normalizedIds, imdbId);
            state.subscriptionStatusByContentId.set(primaryContentId, expectedSubscribed);
            setTargetsSubscribed(primaryContentId, expectedSubscribed);
            if (updatedContentId && updatedContentId !== primaryContentId) {
              state.subscriptionStatusByContentId.set(updatedContentId, expectedSubscribed);
              setTargetsSubscribed(updatedContentId, expectedSubscribed);
            }
          } else {
            if (requestedSubscribe) {
              applyLocalSubscriptionState(primaryContentId, imdbId, true);
            } else {
              applyLocalSubscriptionState(resolvedSubscribedContentId || primaryContentId, imdbId, false);
              if (resolvedSubscribedContentId && resolvedSubscribedContentId !== primaryContentId) {
                applyLocalSubscriptionState(primaryContentId, imdbId, false);
              }
            }
          }
          state.subscriptionsLoaded = true;
          state.subscriptionsSyncedAt = Date.now();
          state.subscriptionStatusSyncedAt.set(primaryContentId, Date.now());
          setTargetsUnavailable(primaryContentId, false);
          redrawSubscribeButton(primaryContentId);
          return syncSubscriptionStatus(primaryContentId, normalizedIds, imdbId, true).then(function () {
            var finalSubscribed = resolveCurrentSubscribedState(normalizedIds, imdbId);
            showToggleResultMessage(requestedSubscribe, finalSubscribed);
          }).catch(function () {
            showToggleResultMessage(requestedSubscribe, expectedSubscribed);
          });
        }).catch(function (error) {
          var message = resolveToggleErrorMessage(error);
          showBell(message);
        }).finally(function () {
          state.pendingToggle.delete(primaryContentId);
          redrawSubscribeButton(primaryContentId);
        });
      });
    }
    function syncSubscriptionStatus(contentId, contentIds, imdbId, force) {
      if (!getSubscriptionStatus || typeof getSubscriptionStatus !== 'function') return Promise.resolve(null);
      if (!isRuntimeAvailable()) return Promise.resolve(null);
      var normalizedIds = normalizeContentIds(contentIds && contentIds.length ? contentIds : [contentId]);
      if (!normalizedIds.length) return Promise.resolve(null);
      var primaryContentId = normalizedIds[0];
      if (state.subscriptionStatusRequests.has(primaryContentId)) {
        return state.subscriptionStatusRequests.get(primaryContentId);
      }
      var syncedAt = parseInt(state.subscriptionStatusSyncedAt.get(primaryContentId) || 0, 10) || 0;
      if (!force && syncedAt && Date.now() - syncedAt < SUBSCRIPTION_STATUS_TTL) {
        return Promise.resolve({
          cached: true
        });
      }
      var request = getSubscriptionStatus(primaryContentId).then(function (rawResult) {
        var result = normalizeStatusResponse(rawResult);
        var updatedContentId = applySubscriptionStatus(result, normalizedIds, imdbId);
        var statusSubscribed = parseSubscribedFlag(result && result.subscribed);
        state.subscriptionStatusSyncedAt.set(primaryContentId, Date.now());
        state.subscriptionStatusByContentId.set(primaryContentId, statusSubscribed);
        setTargetsSubscribed(primaryContentId, statusSubscribed);
        setTargetsUnavailable(primaryContentId, false);
        redrawSubscribeButton(primaryContentId);
        if (updatedContentId && updatedContentId !== primaryContentId) {
          state.subscriptionStatusByContentId.set(updatedContentId, statusSubscribed);
          setTargetsSubscribed(updatedContentId, statusSubscribed);
          setTargetsUnavailable(updatedContentId, false);
          redrawSubscribeButton(updatedContentId);
        }
        return result;
      }).catch(function (error) {
        if (error && (parseInt(error.status || 0, 10) === 404 || parseInt(error.status || 0, 10) === 422)) {
          state.subscriptionStatusByContentId.set(primaryContentId, false);
          setTargetsSubscribed(primaryContentId, false);
          setTargetsUnavailable(primaryContentId, true);
          redrawSubscribeButton(primaryContentId);
        }
        throw error;
      }).finally(function () {
        state.subscriptionStatusRequests.delete(primaryContentId);
      });
      state.subscriptionStatusRequests.set(primaryContentId, request);
      return request;
    }
    function applyLocalSubscriptionState(contentId, imdbId, subscribed) {
      var normalizedContentId = buildContentId(contentId);
      if (!normalizedContentId) return;
      if (subscribed) {
        state.subscriptions.add(normalizedContentId);
        if (imdbId) {
          state.subscriptionsImdb.add(imdbId);
          if (state.subscriptionsByImdb) state.subscriptionsByImdb.set(imdbId, normalizedContentId);
        }
      } else {
        state.subscriptions.delete(normalizedContentId);
        if (imdbId) {
          state.subscriptionsImdb.delete(imdbId);
          if (state.subscriptionsByImdb) state.subscriptionsByImdb.delete(imdbId);
        }
        pruneImdbMappingsByContentIds([normalizedContentId]);
      }
      state.subscriptionStatusByContentId.set(normalizedContentId, subscribed);
      setTargetsSubscribed(normalizedContentId, subscribed);
    }
    function resolveCurrentSubscribedState(contentIds, imdbId) {
      var fromStatusMap = resolveSubscribedFromStatusMap(contentIds, imdbId);
      if (fromStatusMap !== null) return fromStatusMap;
      return isSubscribed(contentIds, imdbId);
    }
    function showToggleResultMessage(requestedSubscribe, finalSubscribed) {
      if (requestedSubscribe) {
        showBell(finalSubscribed ? t('nn_noty_subscribed') : t('nn_noty_subscribe_not_confirmed'));
        return;
      }
      showBell(finalSubscribed ? t('nn_noty_unsubscribe_not_confirmed') : t('nn_noty_unsubscribed'));
    }
    function isSubscribed(contentIds, imdbId) {
      if (resolveSubscribedContentId(contentIds, imdbId)) return true;
      if (isImdbSubscribed(imdbId)) return true;
      return false;
    }
    function isImdbSubscribed(imdbId) {
      return !!(imdbId && state.subscriptionsImdb && state.subscriptionsImdb.has(imdbId));
    }
    function resolveSubscribedContentId(contentIds, imdbId) {
      var normalizedIds = normalizeContentIds(contentIds);
      for (var i = 0; i < normalizedIds.length; i++) {
        if (state.subscriptions.has(normalizedIds[i])) return normalizedIds[i];
      }
      if (imdbId && state.subscriptionsByImdb && state.subscriptionsByImdb.has(imdbId)) {
        var fromMap = buildContentId(state.subscriptionsByImdb.get(imdbId));
        if (fromMap && state.subscriptions.has(fromMap)) return fromMap;
      }
      return '';
    }
    function applySubscriptionStatus(result, contentIds, imdbId) {
      var normalizedIds = normalizeContentIds(contentIds);
      var resolvedContentId = buildContentId(result && (result._id || result.tmdb_id || ''));
      var resolvedImdbId = normalizeImdbId(result && result.imdb_id ? result.imdb_id : imdbId);
      var subscribed = parseSubscribedFlag(result && result.subscribed);
      if (resolvedContentId && normalizedIds.indexOf(resolvedContentId) === -1) {
        normalizedIds.unshift(resolvedContentId);
      }
      if (subscribed) {
        var actualContentId = resolvedContentId || normalizedIds[0];
        if (!actualContentId) return '';
        state.subscriptions.add(actualContentId);
        if (resolvedImdbId) {
          state.subscriptionsImdb.add(resolvedImdbId);
          if (state.subscriptionsByImdb) state.subscriptionsByImdb.set(resolvedImdbId, actualContentId);
        }
        return actualContentId;
      }
      normalizedIds.forEach(function (id) {
        state.subscriptions.delete(id);
      });
      if (resolvedImdbId) {
        state.subscriptionsImdb.delete(resolvedImdbId);
        if (state.subscriptionsByImdb) state.subscriptionsByImdb.delete(resolvedImdbId);
      }
      pruneImdbMappingsByContentIds(normalizedIds);
      return resolvedContentId || '';
    }
    function pruneImdbMappingsByContentIds(contentIds) {
      if (!state.subscriptionsByImdb || !state.subscriptionsByImdb.forEach) return;
      var normalizedIds = normalizeContentIds(contentIds);
      if (!normalizedIds.length) return;
      var keysToDelete = [];
      state.subscriptionsByImdb.forEach(function (mappedContentId, imdbId) {
        var normalizedMappedId = buildContentId(mappedContentId);
        if (normalizedMappedId && normalizedIds.indexOf(normalizedMappedId) >= 0) {
          keysToDelete.push(imdbId);
        }
      });
      keysToDelete.forEach(function (imdbId) {
        state.subscriptionsByImdb.delete(imdbId);
        state.subscriptionsImdb.delete(imdbId);
      });
    }
    function readNodeContentIds(node) {
      if (!node || !node.dataset) return [];
      var fromList = String(node.dataset.nightingaleContentIds || '').split(',').map(function (id) {
        return String(id || '').trim();
      });
      fromList.push(String(node.dataset.nightingaleContentId || '').trim());
      return normalizeContentIds(fromList);
    }
    function normalizeContentIds(values) {
      var list = Array.isArray(values) ? values : [values];
      var normalized = [];
      list.forEach(function (value) {
        var contentId = buildContentId(value);
        if (!contentId || normalized.indexOf(contentId) >= 0) return;
        normalized.push(contentId);
      });
      return normalized;
    }
    function resolveEventObjectContentId(event) {
      var object = event && event.object ? event.object : null;
      if (!object) return '';
      var method = String(object.method || '').toLowerCase();
      if (method !== 'tv') return '';
      return buildContentId(object.id);
    }
    function setTargetsUnavailable(contentId, unavailable) {
      var targets = state.buttonTargets.get(contentId);
      if (targets && targets.size) {
        targets.forEach(function (node) {
          if (!node || !node.dataset) return;
          node.dataset.nightingaleUnavailable = unavailable ? '1' : '0';
        });
      }
      var direct = findDomTargetsByContentId(contentId);
      direct.forEach(function (node) {
        if (!node || !node.dataset) return;
        node.dataset.nightingaleUnavailable = unavailable ? '1' : '0';
        renderSingleButtonNode(node);
      });
    }
    function setTargetsSubscribed(contentId, subscribed) {
      var targets = state.buttonTargets.get(contentId);
      if (targets && targets.size) {
        targets.forEach(function (node) {
          if (!node || !node.dataset) return;
          node.dataset.nightingaleSubscribed = subscribed ? '1' : '0';
        });
      }
      var direct = findDomTargetsByContentId(contentId);
      direct.forEach(function (node) {
        if (!node || !node.dataset) return;
        node.dataset.nightingaleSubscribed = subscribed ? '1' : '0';
        renderSingleButtonNode(node);
      });
    }
    function resolveSubscribedFromStatusMap(contentIds, imdbId) {
      var normalizedIds = normalizeContentIds(contentIds);
      for (var i = 0; i < normalizedIds.length; i++) {
        var contentId = normalizedIds[i];
        if (!state.subscriptionStatusByContentId.has(contentId)) continue;
        var value = state.subscriptionStatusByContentId.get(contentId);
        if (typeof value === 'boolean') return value;
      }
      if (imdbId && state.subscriptionsByImdb && state.subscriptionsByImdb.has(imdbId)) {
        var mapped = buildContentId(state.subscriptionsByImdb.get(imdbId));
        if (mapped && state.subscriptionStatusByContentId.has(mapped)) {
          var mappedValue = state.subscriptionStatusByContentId.get(mapped);
          if (typeof mappedValue === 'boolean') return mappedValue;
        }
      }
      return null;
    }
    function resolveButtonLabel(subscribed, unavailable) {
      if (unavailable) return t('nn_button_state_unavailable');
      return subscribed ? t('nn_button_state_subscribed') : t('nn_button_state_not_subscribed');
    }
    function resolveKnownSubscribedValue(contentId) {
      if (!contentId) return '';
      if (!state.subscriptionStatusByContentId || !state.subscriptionStatusByContentId.has(contentId)) return '';
      return state.subscriptionStatusByContentId.get(contentId) ? '1' : '0';
    }
    function findDomTargetsByContentId(contentId) {
      if (!contentId || typeof document === 'undefined' || !document.querySelectorAll) return [];
      var matches = document.querySelectorAll('.' + BUTTON_CLASS);
      var nodes = [];
      for (var i = 0; i < matches.length; i++) {
        var node = matches[i];
        if (!node || !node.dataset) continue;
        var nodeContentId = buildContentId(node.dataset.nightingaleContentId || '');
        if (nodeContentId !== contentId) continue;
        nodes.push(node);
      }
      return nodes;
    }
    function renderSingleButtonNode(node) {
      if (!node || !node.dataset) return;
      var button = $(node);
      var enabled = isPluginEnabled();
      var contentId = buildContentId(node.dataset.nightingaleContentId || '');
      var pending = contentId ? state.pendingToggle.has(contentId) : false;
      var nodeContentIds = readNodeContentIds(node);
      var nodeImdbId = normalizeImdbId(node.dataset.nightingaleImdbId || '');
      var subscribedOverride = resolveSubscribedFromStatusMap(nodeContentIds, nodeImdbId);
      var subscribed = subscribedOverride === null ? isSubscribed(nodeContentIds, nodeImdbId) : subscribedOverride;
      var unavailable = String(node.dataset.nightingaleUnavailable || '') === '1';
      var label = resolveButtonLabel(subscribed, unavailable);
      button.toggleClass('hide', !enabled);
      button.toggleClass('active', subscribed);
      button.toggleClass('nightingale-notifications--busy', pending);
      button.toggleClass('nightingale-notifications--unavailable', unavailable);
      button.attr('data-subtitle', label);
      button.find('span').text(label);
      applyButtonVisualState(button, subscribed, unavailable);
    }
    function applyButtonVisualState(button, subscribed, unavailable) {
      if (!button || !button.length) return;
      var node = button[0];
      if (!node || typeof node.querySelector !== 'function') return;
      var body = node.querySelector('.nightingale-notifications__bell-body');
      var clapper = node.querySelector('.nightingale-notifications__bell-clapper');
      if (!body || !clapper) return;
      if (unavailable) {
        body.style.fill = 'rgba(127, 147, 170, 0.04)';
        body.style.stroke = '#72849b';
        clapper.style.fill = '#8ea4bf';
        return;
      }
      if (subscribed) {
        body.style.fill = 'rgba(0, 91, 187, 0.24)';
        body.style.stroke = '#005BBB';
        clapper.style.fill = '#FFD500';
        return;
      }
      body.style.fill = 'rgba(127, 147, 170, 0.08)';
      body.style.stroke = '#8ea4bf';
      clapper.style.fill = '#a2b2c6';
    }
    function resolveToggleErrorMessage(error) {
      if (!error) return t('nn_noty_request_failed');
      var statusCode = parseInt(error.status || 0, 10) || 0;
      var payload = error.payload || {};
      var payloadStatus = String(payload.status || '').toLowerCase();
      var payloadError = String(payload.error || '').toLowerCase();
      if (statusCode === 404) {
        return t('nn_noty_no_subscription_target');
      }
      if (statusCode === 409 && isTerminalSeriesStatus(payloadStatus, payloadError)) {
        return t('nn_noty_series_not_releasing');
      }
      return error && error.message ? error.message : t('nn_noty_request_failed');
    }
    function isTerminalSeriesStatus(status, message) {
      if (TERMINAL_SERIES_STATUSES.indexOf(String(status || '').toLowerCase()) >= 0) return true;
      var text = String(message || '').toLowerCase();
      if (!text) return false;
      if (text.indexOf('series is not eligible for subscription') >= 0) return true;
      for (var i = 0; i < TERMINAL_SERIES_STATUSES.length; i++) {
        if (text.indexOf(TERMINAL_SERIES_STATUSES[i]) >= 0) return true;
      }
      return false;
    }
    function parseSubscribedFlag(value) {
      if (value === true || value === 1) return true;
      if (typeof value === 'string') {
        var normalized = value.trim().toLowerCase();
        return normalized === 'true' || normalized === '1' || normalized === 'yes' || normalized === 'on';
      }
      return false;
    }
    function hasSubscribedField(value) {
      if (!value || _typeof(value) !== 'object') return false;
      return Object.prototype.hasOwnProperty.call(value, 'subscribed');
    }
    function normalizeStatusResponse(raw) {
      if (!raw || _typeof(raw) !== 'object') return {};
      var fromData = raw.data && _typeof(raw.data) === 'object' ? raw.data : null;
      var fromResult = raw.result && _typeof(raw.result) === 'object' ? raw.result : null;
      if (fromData && hasStatusFields(fromData)) return fromData;
      if (fromResult && hasStatusFields(fromResult)) return fromResult;
      return raw;
    }
    function hasStatusFields(value) {
      if (!value || _typeof(value) !== 'object') return false;
      return Object.prototype.hasOwnProperty.call(value, 'subscribed') || Object.prototype.hasOwnProperty.call(value, '_id') || Object.prototype.hasOwnProperty.call(value, 'tmdb_id');
    }
    return {
      onFullEvent: onFullEvent,
      redrawAllSubscribeButtons: redrawAllSubscribeButtons,
      redrawSubscribeButton: redrawSubscribeButton
    };
  }

  var $$1 = require('../internals/export');
  var $filter = require('../internals/array-iteration').filter;
  var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$1({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var cachedCategoryClass = null;
  var LEGACY_MENU_TITLES = ['Підписки Nightingale', 'Nightingale Subscriptions', 'Подписки Nightingale'];
  function registerSubscribesFeature(params) {
    registerSubscribesComponent(params);
    registerMenuButton(params);
  }
  function registerSubscribesComponent(params) {
    var state = params.state;
    if (!state || state.subscribesComponentRegistered) return;
    if (!Lampa.Component || typeof Lampa.Component.add !== 'function') return;
    Lampa.Component.add(SUBSCRIBES_COMPONENT, function (object) {
      return createSubscribesComponent(object, params);
    });
    state.subscribesComponentRegistered = true;
  }
  function registerMenuButton(params) {
    var state = params.state;
    if (!state || state.menuButtonAdded) return;
    var addButton = function addButton() {
      if (state.menuButtonAdded) return;
      if (!Lampa.Menu || typeof Lampa.Menu.addButton !== 'function') return;
      migrateStoredMenuTitles();
      var existing = $('.' + MENU_BUTTON_CLASS);
      if (existing.length) {
        state.menuButtonAdded = true;
        return;
      }
      var button = Lampa.Menu.addButton(getMenuIcon(), t('nn_menu_subscribes'), function () {
        openSubscribesActivity();
      });
      button.addClass(MENU_BUTTON_CLASS);
      state.menuButtonAdded = true;
    };
    if (window.appready) {
      addButton();
      return;
    }
    if (!Lampa.Listener || typeof Lampa.Listener.follow !== 'function') return;
    Lampa.Listener.follow('app', function (event) {
      if (!event || event.type !== 'ready') return;
      addButton();
    });
  }
  function createSubscribesComponent(object, params) {
    var comp = createCategoryComponent(object);
    comp.use({
      onCreate: function onCreate() {
        var _this = this;
        var isPluginEnabled = params.isPluginEnabled();
        var isRuntimeAvailable = params.isRuntimeAvailable();
        if (!isPluginEnabled) {
          setEmptyState(this, 'disabled');
          this.empty();
          return;
        }
        if (!isRuntimeAvailable) {
          setEmptyState(this, 'uid');
          this.empty();
          return;
        }
        setEmptyState(this, 'empty');
        params.loadSubscriptions().then(function (rows) {
          return buildCardsFromRows(rows, params.resolveSeriesDetails);
        }).then(function (cards) {
          if (!cards.length) {
            _this.empty();
            return;
          }
          _this.build({
            results: cards
          });
        }).catch(function () {
          _this.empty();
        });
      },
      onInstance: function onInstance(item, data) {
        item.use({
          onlyEnter: function onlyEnter() {
            openFullCard(data);
          },
          onFocus: function onFocus() {
            if (!Lampa.Background || !Lampa.Utils || typeof Lampa.Utils.cardImgBackground !== 'function') return;
            Lampa.Background.change(Lampa.Utils.cardImgBackground(data));
          },
          onMenu: function onMenu(menu) {
            menu.unshift({
              title: t('nn_subscribes_action_unsubscribe'),
              subtitle: t('nn_subscribes_action_unsubscribe_descr'),
              onSelect: function onSelect() {
                unsubscribeCard(params, data);
              }
            });
          }
        });
      }
    });
    return comp;
  }
  function createCategoryComponent(object) {
    var categoryClass = resolveCategoryClass();
    if (categoryClass && Lampa.Utils && typeof Lampa.Utils.createInstance === 'function') {
      return Lampa.Utils.createInstance(categoryClass, object, {
        empty: {
          account: false
        }
      });
    }
    return createFallbackComponent(object);
  }
  function createFallbackComponent(object) {
    var comp = new Lampa.InteractionCategory(object);
    comp.create = function () {
      this.empty();
    };
    return comp;
  }
  function resolveCategoryClass() {
    if (cachedCategoryClass) return cachedCategoryClass;
    if (!Lampa.Component || typeof Lampa.Component.get !== 'function') return null;
    var subscribesFactory = Lampa.Component.get('subscribes');
    if (typeof subscribesFactory !== 'function') return null;
    try {
      var probe = new subscribesFactory({
        params: {}
      });
      if (probe && probe.constructor) {
        cachedCategoryClass = probe.constructor;
        if (typeof probe.destroy === 'function') probe.destroy();
        return cachedCategoryClass;
      }
    } catch (error) {}
    return null;
  }
  function buildCardsFromRows(rows, resolveSeriesDetails) {
    var list = Array.isArray(rows) ? rows : [];
    var refs = collectSubscriptionRefs(list);
    if (!refs.length) return Promise.resolve([]);
    var tasks = refs.map(function (ref) {
      var contentId = ref.contentId;
      var tmdbId = parseTmdbId(contentId);
      if (!tmdbId) return Promise.resolve(null);
      return resolveSeriesDetails(tmdbId).then(function (details) {
        return buildCard(details, tmdbId, contentId, ref.imdbId);
      }).catch(function () {
        return buildCard(null, tmdbId, contentId, ref.imdbId);
      });
    });
    return Promise.all(tasks).then(function (cards) {
      return cards.filter(Boolean);
    });
  }
  function collectSubscriptionRefs(rows) {
    var seen = new Set();
    var list = [];
    rows.forEach(function (row) {
      var contentId = resolveSubscriptionContentId(row);
      if (!contentId || seen.has(contentId)) return;
      seen.add(contentId);
      list.push({
        contentId: contentId,
        imdbId: normalizeImdbId(row && row.imdb_id ? row.imdb_id : '')
      });
    });
    return list;
  }
  function buildCard(details, tmdbId, contentId, imdbId) {
    var fromDetails = details && details.card ? details.card : {};
    var fallbackTitle = fallbackSeriesTitle(tmdbId);
    var title = details && details.title ? details.title : fromDetails.name || fromDetails.title || fallbackTitle;
    var resolvedContentId = buildContentId(contentId) || buildContentId(tmdbId);
    return {
      id: fromDetails.id || tmdbId,
      source: fromDetails.source || 'tmdb',
      name: fromDetails.name || title,
      title: fromDetails.title || title,
      original_name: fromDetails.original_name || '',
      original_title: fromDetails.original_title || '',
      poster_path: fromDetails.poster_path || '',
      backdrop_path: fromDetails.backdrop_path || '',
      number_of_seasons: fromDetails.number_of_seasons || 1,
      nightingale_content_id: resolvedContentId,
      nightingale_imdb_id: imdbId || ''
    };
  }
  function setEmptyState(comp, type) {
    if (!comp.params) comp.params = {};
    if (!comp.params.empty) comp.params.empty = {};
    comp.params.empty.account = false;
    comp.params.empty.icon = Lampa.Template && typeof Lampa.Template.string === 'function' ? Lampa.Template.string('icon_empty_subscribe') : '';
    if (type === 'disabled') {
      comp.params.empty.title = t('nn_subscribes_disabled_title');
      comp.params.empty.descr = t('nn_subscribes_disabled_descr');
      return;
    }
    if (type === 'uid') {
      comp.params.empty.title = t('nn_subscribes_uid_title');
      comp.params.empty.descr = t('nn_subscribes_uid_descr');
      return;
    }
    comp.params.empty.title = t('nn_subscribes_empty_title');
    comp.params.empty.descr = t('nn_subscribes_empty_descr');
  }
  function openSubscribesActivity() {
    if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
    Lampa.Activity.push({
      url: '',
      title: t('nn_subscribes_title'),
      component: SUBSCRIBES_COMPONENT,
      page: 1
    });
  }
  function openFullCard(card) {
    if (!Lampa.Activity || typeof Lampa.Activity.push !== 'function') return;
    if (!card || !card.id) return;
    Lampa.Activity.push({
      url: '',
      component: 'full',
      id: card.id,
      method: 'tv',
      card: card,
      source: card.source || 'tmdb'
    });
  }
  function getMenuIcon() {
    return "<svg class=\"nightingale-notifications__bell\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"nightingale-notifications__bell-clapper\" d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\"></path>\n        <path class=\"nightingale-notifications__bell-body\" d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke-width=\"2.6\"></path>\n    </svg>";
  }
  function unsubscribeCard(params, cardData) {
    var unsubscribe = params.unsubscribeFromSeries;
    if (typeof unsubscribe !== 'function') return;
    var contentId = getCardContentId(cardData);
    if (!contentId) return;
    if (params.state && params.state.pendingToggle && params.state.pendingToggle.has(contentId)) return;
    if (params.state && params.state.pendingToggle) {
      params.state.pendingToggle.add(contentId);
    }
    unsubscribe(contentId).then(function () {
      if (params.state && params.state.subscriptions) {
        params.state.subscriptions.delete(contentId);
        var imdbId = getCardImdbId(cardData);
        if (imdbId && params.state.subscriptionsImdb) {
          params.state.subscriptionsImdb.delete(imdbId);
          if (params.state.subscriptionsByImdb) {
            params.state.subscriptionsByImdb.delete(imdbId);
          }
        }
        params.state.subscriptionsLoaded = true;
        params.state.subscriptionsSyncedAt = Date.now();
      }
      if (typeof params.onSubscriptionsChanged === 'function') {
        params.onSubscriptionsChanged();
      }
      showBell(t('nn_noty_unsubscribed'));
      if (Lampa.Activity && typeof Lampa.Activity.replace === 'function') {
        Lampa.Activity.replace();
      }
    }).catch(function (error) {
      var message = error && error.message ? error.message : t('nn_noty_request_failed');
      showBell(message);
    }).finally(function () {
      if (params.state && params.state.pendingToggle) {
        params.state.pendingToggle.delete(contentId);
      }
    });
  }
  function migrateStoredMenuTitles() {
    if (!Lampa.Storage || typeof Lampa.Storage.get !== 'function' || typeof Lampa.Storage.set !== 'function') return;
    var nextTitle = String(t('nn_menu_subscribes') || '').trim();
    if (!nextTitle || nextTitle === 'nn_menu_subscribes') return;
    migrateStorageArray('menu_sort', nextTitle);
    migrateStorageArray('menu_hide', nextTitle);
  }
  function migrateStorageArray(key, nextTitle) {
    var current = normalizeStorageArray(Lampa.Storage.get(key, '[]'));
    if (!current.length) return;
    var changed = false;
    var migrated = current.map(function (title) {
      var value = String(title || '').trim();
      if (!value) return '';
      if (value === nextTitle) return nextTitle;
      if (LEGACY_MENU_TITLES.indexOf(value) >= 0) {
        changed = true;
        return nextTitle;
      }
      return value;
    }).filter(Boolean);
    var deduped = dedupeTitles(migrated);
    if (!changed && isSameArray(current, deduped)) return;
    Lampa.Storage.set(key, deduped, true);
  }
  function normalizeStorageArray(value) {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      try {
        var parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed;
      } catch (error) {}
    }
    return [];
  }
  function dedupeTitles(list) {
    var seen = new Set();
    var result = [];
    list.forEach(function (title) {
      if (seen.has(title)) return;
      seen.add(title);
      result.push(title);
    });
    return result;
  }
  function isSameArray(left, right) {
    if (left.length !== right.length) return false;
    for (var i = 0; i < left.length; i++) {
      if (String(left[i] || '').trim() !== String(right[i] || '').trim()) return false;
    }
    return true;
  }
  function getCardContentId(cardData) {
    if (!cardData) return '';
    var direct = buildContentId(cardData.nightingale_content_id || '');
    if (direct) return direct;
    return buildContentId(cardData.id || '');
  }
  function getCardImdbId(cardData) {
    if (!cardData) return '';
    return normalizeImdbId(cardData.nightingale_imdb_id || cardData.imdb_id || '');
  }

  var PING_INTERVAL = 1000 * 30;
  var PONG_TIMEOUT = 1000 * 8;
  function createWsController(params) {
    var state = params.state;
    var isRuntimeAvailable = params.isRuntimeAvailable;
    var getEffectiveUserId = params.getEffectiveUserId;
    var pushNotice = params.pushNotice;
    var upsertNoticeByEpisode = params.upsertNoticeByEpisode;
    var resolveSeriesDetails = params.resolveSeriesDetails;
    var redrawAllSubscribeButtons = params.redrawAllSubscribeButtons;
    function connectWebSocket() {
      if (!isRuntimeAvailable()) return;
      var wsUrl = buildWsUrl();
      if (!wsUrl) return;
      if (state.ws && (state.ws.readyState === WebSocket.OPEN || state.ws.readyState === WebSocket.CONNECTING) && state.wsUrl === wsUrl) {
        return;
      }
      stopWebSocket();
      clearTimeout(state.wsTimer);
      state.wsTimer = null;
      var ws;
      try {
        ws = new WebSocket(wsUrl);
      } catch (error) {
        scheduleReconnect();
        return;
      }
      ws.__nightingaleManualClose = false;
      ws.__nightingaleAlive = true;
      state.ws = ws;
      state.wsUrl = wsUrl;
      ws.onopen = function () {
        if (state.ws !== ws) return;
        state.wsDelay = WS_RECONNECT_MIN;
        startPingLoop(ws);
      };
      ws.onmessage = function (event) {
        if (state.ws !== ws) return;
        if (!event) return;
        if (event && event.data === 'pong') {
          markPong(ws);
          return;
        }
        var payload = parseWsJson(event.data);
        if (payload && payload.method === 'pong') {
          markPong(ws);
          return;
        }
        if (payload && payload.method === 'ping') {
          sendPong(ws, payload.data && payload.data.ts ? String(payload.data.ts) : '');
          return;
        }
        onWsPayload(payload);
      };
      ws.onerror = function () {};
      ws.onclose = function () {
        if (state.ws === ws) {
          state.ws = null;
          state.wsUrl = '';
        }
        stopPingLoop();
        if (!ws.__nightingaleManualClose) scheduleReconnect();
      };
    }
    function stopWebSocket() {
      clearTimeout(state.wsTimer);
      state.wsTimer = null;
      stopPingLoop();
      var ws = state.ws;
      state.ws = null;
      state.wsUrl = '';
      if (ws) {
        ws.__nightingaleManualClose = true;
        ws.onopen = null;
        ws.onmessage = null;
        ws.onerror = null;
        ws.onclose = null;
        try {
          ws.close();
        } catch (error) {}
      }
    }
    function buildWsUrl() {
      var userId = getEffectiveUserId();
      if (!userId) return '';
      return 'wss://' + SERVICE_HOST + '/lme/ws?user_id=' + encodeURIComponent(userId);
    }
    function scheduleReconnect() {
      if (!isRuntimeAvailable()) return;
      clearTimeout(state.wsTimer);
      var delay = state.wsDelay;
      state.wsDelay = Math.min(state.wsDelay * 2, WS_RECONNECT_MAX);
      state.wsTimer = setTimeout(function () {
        connectWebSocket();
      }, delay);
    }
    function startPingLoop(ws) {
      stopPingLoop();
      var ping = function ping() {
        if (state.ws !== ws || ws.readyState !== WebSocket.OPEN) return;
        var pingTs = new Date().toISOString();
        ws.__nightingaleAlive = false;
        ws.__nightingaleLastPingTs = pingTs;
        try {
          ws.send(JSON.stringify({
            method: 'ping',
            data: {
              ts: pingTs
            }
          }));
        } catch (error) {}
        clearTimeout(state.wsPongTimer);
        state.wsPongTimer = setTimeout(function () {
          if (state.ws !== ws) return;
          if (ws.__nightingaleAlive) return;
          try {
            ws.close();
          } catch (error) {}
        }, PONG_TIMEOUT);
      };
      ping();
      state.wsPingTimer = setInterval(ping, PING_INTERVAL);
    }
    function markPong(ws) {
      if (!ws) return;
      ws.__nightingaleAlive = true;
      clearTimeout(state.wsPongTimer);
      state.wsPongTimer = null;
    }
    function sendPong(ws, requestTs) {
      if (!ws || state.ws !== ws || ws.readyState !== WebSocket.OPEN) return;
      var payload = {
        method: 'pong',
        data: {
          ts: new Date().toISOString()
        }
      };
      if (requestTs) payload.data.request_ts = requestTs;
      try {
        ws.send(JSON.stringify(payload));
      } catch (error) {}
    }
    function parseWsJson(raw) {
      if (typeof raw !== 'string') return null;
      try {
        var parsed = JSON.parse(raw);
        return parsed && _typeof(parsed) === 'object' ? parsed : null;
      } catch (error) {
        return null;
      }
    }
    function stopPingLoop() {
      clearInterval(state.wsPingTimer);
      clearTimeout(state.wsPongTimer);
      state.wsPingTimer = null;
      state.wsPongTimer = null;
    }
    function onWsPayload(payload) {
      if (!payload || !payload.method) return;
      if (payload.method === 'lme_episode_new') {
        handleEpisodePayload(payload.data || {}, false);
        return;
      }
      if (payload.method === 'lme_episode_translation_update') {
        handleEpisodePayload(payload.data || {}, true);
        return;
      }
      if (payload.method === 'unsubscribe_by_error') {
        handleUnsubscribeByErrorPayload(payload.data || {});
      }
    }
    function handleEpisodePayload(data, isTranslationUpdate) {
      var eventId = String(data && data.event_id ? data.event_id : '').trim();
      if (!eventId) return;
      buildEpisodeNotice(data, isTranslationUpdate).then(function (notice) {
        if (!notice) return;
        var saveNotice = isTranslationUpdate && typeof upsertNoticeByEpisode === 'function' ? upsertNoticeByEpisode : pushNotice;
        saveNotice(notice).finally(function () {
          sendAck(eventId);
        });
      }).catch(function () {
        sendAck(eventId);
      });
    }
    function handleUnsubscribeByErrorPayload(data) {
      var eventId = String(data && data.event_id ? data.event_id : '').trim();
      if (!eventId) return;
      Promise.resolve().then(function () {
        processUnsubscribeByError(data);
      }).finally(function () {
        sendAck(eventId);
      });
    }
    function sendAck(eventId) {
      if (!eventId) return;
      if (!state.ws || state.ws.readyState !== 1) return;
      try {
        state.ws.send(JSON.stringify({
          method: 'lme_ask',
          data: {
            event_id: eventId
          }
        }));
      } catch (error) {}
    }
    function buildEpisodeNotice(data, isTranslationUpdate) {
      var eventId = String(data && data.event_id ? data.event_id : '').trim();
      if (!eventId) return Promise.resolve(null);
      var contentId = buildContentId(data && data._id ? data._id : '');
      var tmdbId = parseTmdbId(contentId);
      var season = parsePositiveInt(data && data.season);
      var episode = parsePositiveInt(data && data.episode);
      var detectedAt = parseDetectedAt(data && data.detected_at);
      var normalizedContentId = contentId || (tmdbId > 0 ? 'tv:' + tmdbId : '');
      return resolveSeriesDetails(tmdbId).then(function (details) {
        var labels = [];
        if (season > 0) labels.push('S - <b>' + season + '</b>');
        if (episode > 0) labels.push('E - <b>' + episode + '</b>');
        appendStudiosLabels(labels, data, isTranslationUpdate);
        var card = details.card || {
          id: tmdbId,
          source: 'tmdb',
          number_of_seasons: 1
        };
        var title = details.title || fallbackSeriesTitle(tmdbId);
        var text = season > 0 && episode > 0 ? t('nn_notice_new_episode') : t('nn_notice_series_update');
        if (isTranslationUpdate) text = t('nn_notice_translation_update');
        return {
          id: eventId,
          from: NOTICE_CHANNEL,
          time: detectedAt,
          title: title,
          text: text,
          poster: details.poster || '',
          nightingaleCard: card,
          labels: labels,
          nightingaleMeta: {
            contentId: normalizedContentId,
            season: season,
            episode: episode
          }
        };
      });
    }
    function appendStudiosLabels(labels, data, isTranslationUpdate) {
      var studios = normalizeStudioList(data && data.translation_studios);
      var addedStudios = normalizeStudioList(data && data.added_studios);
      if (studios.length) {
        labels.push(t('nn_notice_studios_label') + ': <b>' + studios.map(escapeHtml).join(', ') + '</b>');
      }
      if (isTranslationUpdate && addedStudios.length) {
        labels.push(t('nn_notice_added_studios_label') + ': <b>' + addedStudios.map(escapeHtml).join(', ') + '</b>');
      }
    }
    function normalizeStudioList(value) {
      if (!Array.isArray(value)) return [];
      var list = [];
      value.forEach(function (item) {
        var name = String(item || '').trim();
        if (!name) return;
        if (list.indexOf(name) >= 0) return;
        list.push(name);
      });
      return list;
    }
    function processUnsubscribeByError(data) {
      var contentId = buildContentId(data && data._id ? data._id : '');
      var imdbId = normalizeImdbId(data && data.imdb_id ? data.imdb_id : '');
      if (contentId) {
        state.subscriptions.delete(contentId);
        state.subscriptionStatusByContentId.set(contentId, false);
        state.subscriptionStatusSyncedAt.set(contentId, Date.now());
        pruneImdbMappingsByContentId(contentId);
      }
      if (imdbId) {
        state.subscriptionsImdb.delete(imdbId);
        state.subscriptionsByImdb.delete(imdbId);
      }
      state.subscriptionsLoaded = true;
      state.subscriptionsSyncedAt = Date.now();
      showBell(t('nn_noty_unsubscribe_by_error'));
      if (typeof redrawAllSubscribeButtons === 'function') {
        redrawAllSubscribeButtons();
      }
    }
    function pruneImdbMappingsByContentId(contentId) {
      if (!contentId) return;
      if (!state.subscriptionsByImdb || typeof state.subscriptionsByImdb.forEach !== 'function') return;
      var toDelete = [];
      state.subscriptionsByImdb.forEach(function (mappedContentId, mappedImdbId) {
        if (buildContentId(mappedContentId) === contentId) {
          toDelete.push(mappedImdbId);
        }
      });
      toDelete.forEach(function (mappedImdbId) {
        state.subscriptionsByImdb.delete(mappedImdbId);
        state.subscriptionsImdb.delete(mappedImdbId);
      });
    }
    return {
      connectWebSocket: connectWebSocket,
      stopWebSocket: stopWebSocket
    };
  }

  function resolveSeriesDetails(state, tmdbId) {
    if (!tmdbId) {
      return Promise.resolve({
        title: t('nn_series_name'),
        poster: '',
        card: null
      });
    }
    var cached = state.detailsCache.get(tmdbId);
    if (cached && Date.now() - cached.time < DETAILS_CACHE_TTL) {
      return Promise.resolve(cached.value);
    }
    var tmdbSource = Lampa.Api && Lampa.Api.sources ? Lampa.Api.sources.tmdb : null;
    if (!tmdbSource || typeof tmdbSource.get !== 'function') {
      var fallback = {
        title: fallbackSeriesTitle(tmdbId),
        poster: '',
        card: {
          id: tmdbId,
          source: 'tmdb',
          number_of_seasons: 1
        }
      };
      state.detailsCache.set(tmdbId, {
        time: Date.now(),
        value: fallback
      });
      return Promise.resolve(fallback);
    }
    return new Promise(function (resolve) {
      tmdbSource.get('tv/' + tmdbId, {}, function (card) {
        var details = {
          title: resolveSeriesTitle(card, tmdbId),
          poster: card && card.poster_path ? card.poster_path : '',
          card: {
            id: card && card.id ? card.id : tmdbId,
            source: 'tmdb',
            name: card && card.name ? card.name : '',
            original_name: card && card.original_name ? card.original_name : '',
            poster_path: card && card.poster_path ? card.poster_path : '',
            backdrop_path: card && card.backdrop_path ? card.backdrop_path : '',
            number_of_seasons: card && card.number_of_seasons ? card.number_of_seasons : 1
          }
        };
        state.detailsCache.set(tmdbId, {
          time: Date.now(),
          value: details
        });
        resolve(details);
      }, function () {
        var fallback = {
          title: fallbackSeriesTitle(tmdbId),
          poster: '',
          card: {
            id: tmdbId,
            source: 'tmdb',
            number_of_seasons: 1
          }
        };
        state.detailsCache.set(tmdbId, {
          time: Date.now(),
          value: fallback
        });
        resolve(fallback);
      }, {
        life: 60 * 24
      });
    });
  }

  function createTaskQueue() {
    var tasks = [];
    var running = false;
    function runNext() {
      if (running) return;
      var current = tasks.shift();
      if (!current) return;
      running = true;
      Promise.resolve().then(function () {
        return current.task();
      }).then(function (result) {
        current.resolve(result);
      }).catch(function (error) {
        current.reject(error);
      }).finally(function () {
        running = false;
        runNext();
      });
    }
    function push(task) {
      return new Promise(function (resolve, reject) {
        tasks.push({
          task: typeof task === 'function' ? task : function () {
            return null;
          },
          resolve: resolve,
          reject: reject
        });
        runNext();
      });
    }
    function clear() {
      tasks.length = 0;
    }
    function size() {
      return tasks.length;
    }
    return {
      push: push,
      clear: clear,
      size: size,
      isRunning: function isRunning() {
        return running;
      }
    };
  }

  var SUBSCRIPTIONS_REFRESH_TTL = 1000 * 60 * 5;
  function createIntegrationsController(params) {
    var state = params.state;
    var isRuntimeAvailable = params.isRuntimeAvailable;
    var loadSubscriptions = params.loadSubscriptions;
    var subscribeToSeries = params.subscribeToSeries;
    var redrawAllSubscribeButtons = params.redrawAllSubscribeButtons;
    var historyStateChangeListener = null;
    function init() {
      if (!state.integrationQueue) {
        state.integrationQueue = createTaskQueue();
      }
      bindHistoryAutoImportListener();
      restartAutoImports('init');
    }
    function destroy() {
      clearHistoryAutoImportTimer();
      clearTraktAutoImportTimer();
      removeHistoryAutoImportListener();
      if (state.integrationQueue && typeof state.integrationQueue.clear === 'function') {
        state.integrationQueue.clear();
      }
    }
    function restartAutoImports(reason) {
      clearHistoryAutoImportTimer();
      clearTraktAutoImportTimer();
      if (isAutoImportLampaEnabled()) {
        scheduleHistoryAutoImport(reason || 'restart');
      }
      if (isAutoImportTraktEnabled()) {
        scheduleTraktAutoImport(1200);
      }
    }
    function onStorageChange(event) {
      if (!event || !event.name) return;
      var watched = [STORAGE_KEYS.syncUid, STORAGE_KEYS.autoImportLampa, STORAGE_KEYS.autoImportTrakt, 'lampa_uid', 'trakt_token'];
      if (watched.indexOf(event.name) >= 0) {
        restartAutoImports('storage_change:' + event.name);
      }
    }
    function manualImportFromHistory() {
      return enqueueSyncTask(function () {
        return importFromHistory({
          auto: false,
          trigger: 'manual'
        });
      }).catch(function (error) {
        showBell$1(resolveErrorMessage(error));
        return createSummary();
      });
    }
    function manualImportFromTrakt() {
      return enqueueSyncTask(function () {
        return importFromTrakt({
          auto: false,
          trigger: 'manual'
        });
      }).catch(function (error) {
        showBell$1(resolveErrorMessage(error));
        return createSummary();
      });
    }
    function enqueueSyncTask(task) {
      if (!state.integrationQueue) {
        state.integrationQueue = createTaskQueue();
      }
      return state.integrationQueue.push(function () {
        state.integrationSyncInProgress = true;
        return Promise.resolve().then(function () {
          return task();
        }).finally(function () {
          state.integrationSyncInProgress = false;
        });
      });
    }
    function bindHistoryAutoImportListener() {
      if (historyStateChangeListener) return;
      if (!Lampa.Listener || typeof Lampa.Listener.follow !== 'function') return;
      historyStateChangeListener = function historyStateChangeListener(event) {
        if (!isAutoImportLampaEnabled()) return;
        if (!event || event.target !== 'favorite') return;
        var favoriteType = String(event.type || '');
        if (favoriteType && favoriteType !== 'history') return;
        scheduleHistoryAutoImport('favorite_state_changed');
      };
      Lampa.Listener.follow('state:changed', historyStateChangeListener);
    }
    function removeHistoryAutoImportListener() {
      if (!historyStateChangeListener) return;
      if (!Lampa.Listener || typeof Lampa.Listener.remove !== 'function') return;
      Lampa.Listener.remove('state:changed', historyStateChangeListener);
      historyStateChangeListener = null;
    }
    function isAutoImportLampaEnabled() {
      if (!isRuntimeAvailable()) return false;
      return Lampa.Storage.get(STORAGE_KEYS.autoImportLampa, false) === true;
    }
    function isAutoImportTraktEnabled() {
      if (!isRuntimeAvailable()) return false;
      return Lampa.Storage.get(STORAGE_KEYS.autoImportTrakt, false) === true;
    }
    function clearHistoryAutoImportTimer() {
      clearTimeout(state.historyAutoImportTimer);
      state.historyAutoImportTimer = null;
    }
    function clearTraktAutoImportTimer() {
      clearTimeout(state.traktAutoImportTimer);
      state.traktAutoImportTimer = null;
    }
    function scheduleHistoryAutoImport(reason) {
      clearHistoryAutoImportTimer();
      state.historyAutoImportTimer = setTimeout(function () {
        if (!isAutoImportLampaEnabled()) return;
        enqueueSyncTask(function () {
          return importFromHistory({
            auto: true,
            trigger: reason || 'history_auto_timer'
          });
        }).catch(function () {});
      }, HISTORY_IMPORT_DEBOUNCE);
    }
    function scheduleTraktAutoImport(delay) {
      clearTraktAutoImportTimer();
      var ms = Math.max(500, parseInt(delay || TRAKT_AUTO_IMPORT_INTERVAL, 10) || TRAKT_AUTO_IMPORT_INTERVAL);
      state.traktAutoImportTimer = setTimeout(function () {
        runTraktAutoImportCycle();
      }, ms);
    }
    function runTraktAutoImportCycle() {
      if (!isAutoImportTraktEnabled()) return;
      var backoffUntil = getTraktBackoffUntil();
      var now = Date.now();
      if (backoffUntil > now) {
        scheduleTraktAutoImport(backoffUntil - now);
        return;
      }
      enqueueSyncTask(function () {
        return importFromTrakt({
          auto: true,
          trigger: 'trakt_auto_timer'
        });
      }).then(function (summary) {
        var hasOnlyFailures = summary && summary.failed > 0 && summary.added === 0;
        if (hasOnlyFailures) applyTraktBackoff();else clearTraktBackoff();
      }).catch(function () {
        applyTraktBackoff();
      }).finally(function () {
        if (!isAutoImportTraktEnabled()) return;
        var nowTs = Date.now();
        var nextBackoff = getTraktBackoffUntil();
        var nextDelay = nextBackoff > nowTs ? nextBackoff - nowTs : TRAKT_AUTO_IMPORT_INTERVAL;
        scheduleTraktAutoImport(nextDelay);
      });
    }
    function getTraktBackoffUntil() {
      var fromStorage = parseInt(Lampa.Storage.get(STORAGE_KEYS.traktBackoffUntil, 0), 10) || 0;
      var fromState = parseInt(state.traktAutoBackoffUntil || 0, 10) || 0;
      var value = Math.max(fromStorage, fromState);
      state.traktAutoBackoffUntil = value;
      return value;
    }
    function applyTraktBackoff() {
      state.traktAutoFailureCount = Math.min((parseInt(state.traktAutoFailureCount || 0, 10) || 0) + 1, 6);
      var factor = Math.pow(2, Math.max(0, state.traktAutoFailureCount - 1));
      var delay = Math.min(TRAKT_AUTO_IMPORT_BACKOFF_MIN * factor, TRAKT_AUTO_IMPORT_BACKOFF_MAX);
      var until = Date.now() + delay;
      state.traktAutoBackoffUntil = until;
      Lampa.Storage.set(STORAGE_KEYS.traktBackoffUntil, until);
    }
    function clearTraktBackoff() {
      state.traktAutoFailureCount = 0;
      state.traktAutoBackoffUntil = 0;
      var current = parseInt(Lampa.Storage.get(STORAGE_KEYS.traktBackoffUntil, 0), 10) || 0;
      if (current) Lampa.Storage.set(STORAGE_KEYS.traktBackoffUntil, 0);
    }
    function importFromHistory(options) {
      var settings = options || {};
      if (!isRuntimeAvailable()) {
        if (!settings.auto) showBell$1(t('nn_noty_sync_uid_required'));
        return Promise.resolve(createSummary());
      }
      return ensureSubscriptionsFresh().then(function () {
        var candidates = collectHistoryCandidates();
        return importCandidates(candidates);
      }).then(function (summary) {
        handleImportSuccess('lampa', summary, settings.auto);
        return summary;
      }).catch(function (error) {
        if (!settings.auto) showBell$1(resolveErrorMessage(error));
        throw error;
      });
    }
    function importFromTrakt(options) {
      var settings = options || {};
      if (!isRuntimeAvailable()) {
        if (!settings.auto) showBell$1(t('nn_noty_sync_uid_required'));
        return Promise.resolve(createSummary());
      }
      if (!hasTraktToken()) {
        if (!settings.auto) showBell$1(t('nn_noty_trakt_auth_required'));
        return Promise.resolve(createSummary());
      }
      var traktApi = resolveTraktApi();
      if (!traktApi) {
        if (!settings.auto) showBell$1(t('nn_noty_trakt_unavailable'));
        return Promise.resolve(createSummary());
      }
      return ensureSubscriptionsFresh().then(function () {
        return collectTraktCandidates(traktApi);
      }).then(function (candidates) {
        return importCandidates(candidates);
      }).then(function (summary) {
        handleImportSuccess('trakt', summary, settings.auto);
        return summary;
      }).catch(function (error) {
        if (!settings.auto) showBell$1(resolveErrorMessage(error));
        throw error;
      });
    }
    function handleImportSuccess(source, summary, auto) {
      updateLastRunAt();
      if (typeof redrawAllSubscribeButtons === 'function') {
        redrawAllSubscribeButtons();
      }
      if (auto) {
        if ((summary.added || 0) < 1 && (summary.failed || 0) < 1) return;
      }
      showSummary(source, summary);
    }
    function updateLastRunAt() {
      var now = Date.now();
      Lampa.Storage.set(STORAGE_KEYS.integrationLastRunAt, now);
    }
    function ensureSubscriptionsFresh() {
      if (typeof loadSubscriptions !== 'function') return Promise.resolve([]);
      var syncedAt = parseInt(state.subscriptionsSyncedAt || 0, 10) || 0;
      var stale = !state.subscriptionsLoaded || !syncedAt || Date.now() - syncedAt > SUBSCRIPTIONS_REFRESH_TTL;
      if (!stale) return Promise.resolve([]);
      return loadSubscriptions().catch(function () {
        return [];
      });
    }
    function collectHistoryCandidates() {
      var rows = readFavoriteHistoryRows();
      var refs = [];
      rows.forEach(function (row) {
        if (!isHistoryTvRow(row)) return;
        var contentId = resolveHistoryContentId(row);
        if (!contentId) return;
        refs.push({
          contentId: contentId,
          imdbId: resolveCardImdbId(row),
          source: 'history'
        });
      });
      return dedupeCandidates(refs);
    }
    function readFavoriteHistoryRows() {
      if (!Lampa.Favorite || typeof Lampa.Favorite.get !== 'function') return [];
      var rows = Lampa.Favorite.get({
        type: 'history'
      });
      return Array.isArray(rows) ? rows : [];
    }
    function isHistoryTvRow(row) {
      if (!row || _typeof(row) !== 'object') return false;
      var method = String(row.method || '').toLowerCase();
      if (method === 'tv' || method === 'show') return true;
      return isTvCard(null, row);
    }
    function resolveHistoryContentId(row) {
      var ids = resolveTvContentIds([row]);
      if (ids.length) return ids[0];
      var rowIds = row && row.ids ? row.ids : null;
      var externalIds = row && row.external_ids ? row.external_ids : null;
      return resolveContentIdByCandidates([row && row.nightingale_content_id ? row.nightingale_content_id : '', row && row.tmdb_id ? row.tmdb_id : '', rowIds && rowIds.tmdb ? rowIds.tmdb : '', externalIds && externalIds.tmdb_id ? externalIds.tmdb_id : '']);
    }
    function collectTraktCandidates(traktApi) {
      var errors = [];
      return fetchTraktCandidatesBySource(traktApi, 'upnext').catch(function (error) {
        errors.push(error);
        return [];
      }).then(function (upnext) {
        return fetchTraktCandidatesBySource(traktApi, 'watchlist').catch(function (error) {
          errors.push(error);
          return [];
        }).then(function (watchlist) {
          var refs = dedupeCandidates(upnext.concat(watchlist));
          if (!refs.length && errors.length > 1) throw errors[0];
          return refs;
        });
      });
    }
    function fetchTraktCandidatesBySource(traktApi, source) {
      if (!traktApi || typeof traktApi[source] !== 'function') return Promise.resolve([]);
      var page = 1;
      var refs = [];
      function loadPage() {
        if (page > TRAKT_IMPORT_MAX_PAGES) {
          return Promise.resolve(refs);
        }
        return Promise.resolve(traktApi[source]({
          page: page,
          limit: TRAKT_IMPORT_PAGE_LIMIT
        })).then(function (response) {
          var rows = response && Array.isArray(response.results) ? response.results : [];
          var totalPages = parseInt(response && response.total_pages ? response.total_pages : 1, 10) || 1;
          rows.forEach(function (row) {
            var ref = resolveTraktCandidate(row, source);
            if (!ref) return;
            refs.push(ref);
          });
          var reachedEnd = !rows.length || page >= totalPages || page >= TRAKT_IMPORT_MAX_PAGES;
          page++;
          if (reachedEnd) return refs;
          return loadPage();
        });
      }
      return loadPage();
    }
    function resolveTraktCandidate(row, source) {
      if (!isTraktTvRow(row)) return null;
      var contentId = resolveTraktContentId(row);
      if (!contentId) return null;
      return {
        contentId: contentId,
        imdbId: resolveCardImdbId(row),
        source: source
      };
    }
    function isTraktTvRow(row) {
      if (!row || _typeof(row) !== 'object') return false;
      var method = String(row.method || row.card_type || row.type || '').toLowerCase();
      if (method === 'movie') return false;
      if (method === 'tv' || method === 'show') return true;
      return isTvCard(null, row);
    }
    function resolveTraktContentId(row) {
      var ids = row && row.ids ? row.ids : null;
      var externalIds = row && row.external_ids ? row.external_ids : null;
      var source = String(row && row.source ? row.source : '').toLowerCase();
      return resolveContentIdByCandidates([ids && ids.tmdb ? ids.tmdb : '', row && row.tmdb_id ? row.tmdb_id : '', externalIds && externalIds.tmdb_id ? externalIds.tmdb_id : '', row && row.nightingale_content_id ? row.nightingale_content_id : '', source === 'tmdb' ? row && row.id ? row.id : '' : '']);
    }
    function resolveCardImdbId(card) {
      var ids = card && card.ids ? card.ids : null;
      var externalIds = card && card.external_ids ? card.external_ids : null;
      var values = [card && card.imdb_id ? card.imdb_id : '', card && card.imdb ? card.imdb : '', ids && ids.imdb ? ids.imdb : '', externalIds && externalIds.imdb_id ? externalIds.imdb_id : ''];
      for (var i = 0; i < values.length; i++) {
        var imdbId = normalizeImdbId(values[i]);
        if (imdbId) return imdbId;
      }
      return '';
    }
    function resolveContentIdByCandidates(candidates) {
      var list = Array.isArray(candidates) ? candidates : [candidates];
      for (var i = 0; i < list.length; i++) {
        var contentId = buildContentId(list[i]);
        if (contentId) return contentId;
      }
      return '';
    }
    function dedupeCandidates(candidates) {
      var list = Array.isArray(candidates) ? candidates : [];
      var seenContent = new Set();
      var seenImdb = new Set();
      var result = [];
      list.forEach(function (item) {
        if (!item || !item.contentId) return;
        var contentId = buildContentId(item.contentId);
        var imdbId = normalizeImdbId(item.imdbId || '');
        if (!contentId) return;
        if (seenContent.has(contentId)) return;
        if (imdbId && seenImdb.has(imdbId)) return;
        seenContent.add(contentId);
        if (imdbId) seenImdb.add(imdbId);
        result.push({
          contentId: contentId,
          imdbId: imdbId,
          source: item.source || ''
        });
      });
      return result;
    }
    function importCandidates(candidates) {
      var list = Array.isArray(candidates) ? candidates : [];
      var summary = createSummary();
      summary.total = list.length;
      if (!list.length) return Promise.resolve(summary);
      var changed = false;
      function processIndex(index) {
        if (index >= list.length) {
          if (changed) {
            state.subscriptionsLoaded = true;
            state.subscriptionsSyncedAt = Date.now();
          }
          return Promise.resolve(summary);
        }
        var candidate = list[index];
        return importSingleCandidate(candidate, summary).then(function (didChange) {
          if (didChange) changed = true;
          var reachedBatchBoundary = (index + 1) % IMPORT_BATCH_SIZE === 0;
          if (index < list.length - 1 && IMPORT_BATCH_PAUSE > 0 && reachedBatchBoundary) {
            return wait(IMPORT_BATCH_PAUSE).then(function () {
              return processIndex(index + 1);
            });
          }
          return processIndex(index + 1);
        });
      }
      return processIndex(0).then(function () {
        return summary;
      });
    }
    function importSingleCandidate(candidate, summary) {
      if (!candidate || !candidate.contentId) {
        summary.skipped++;
        return Promise.resolve(false);
      }
      var contentId = buildContentId(candidate.contentId);
      var imdbId = normalizeImdbId(candidate.imdbId || '');
      if (!contentId) {
        summary.skipped++;
        return Promise.resolve(false);
      }
      if (typeof subscribeToSeries !== 'function') {
        summary.failed++;
        return Promise.resolve(false);
      }
      if (isAlreadySubscribed(contentId, imdbId)) {
        summary.duplicates++;
        return Promise.resolve(false);
      }
      if (state.pendingToggle && state.pendingToggle.has(contentId)) {
        summary.skipped++;
        return Promise.resolve(false);
      }
      state.pendingToggle.add(contentId);
      return subscribeToSeries(contentId, imdbId).then(function (result) {
        var payload = normalizeStatusPayload(result);
        var subscribed = hasSubscribedField(payload) ? parseSubscribedFlag(payload.subscribed) : true;
        if (!subscribed) {
          summary.failed++;
          return false;
        }
        var resolvedContentId = resolveContentIdByCandidates([payload && payload._id ? payload._id : '', payload && payload.tmdb_id ? payload.tmdb_id : '', payload && payload.id ? payload.id : '', payload && payload.content_id ? payload.content_id : '', contentId]);
        var resolvedImdbId = resolveCardImdbId(payload) || imdbId;
        applySubscribedState(resolvedContentId || contentId, resolvedImdbId);
        summary.added++;
        return true;
      }).catch(function (error) {
        if (isDuplicateSubscribeError(error)) {
          applySubscribedState(contentId, imdbId);
          summary.duplicates++;
          return true;
        }
        summary.failed++;
        return false;
      }).finally(function () {
        state.pendingToggle.delete(contentId);
      });
    }
    function applySubscribedState(contentId, imdbId) {
      var normalizedContentId = buildContentId(contentId);
      var normalizedImdbId = normalizeImdbId(imdbId || '');
      if (!normalizedContentId) return;
      state.subscriptions.add(normalizedContentId);
      state.subscriptionStatusByContentId.set(normalizedContentId, true);
      state.subscriptionStatusSyncedAt.set(normalizedContentId, Date.now());
      if (normalizedImdbId) {
        state.subscriptionsImdb.add(normalizedImdbId);
        state.subscriptionsByImdb.set(normalizedImdbId, normalizedContentId);
      }
    }
    function normalizeStatusPayload(raw) {
      if (!raw || _typeof(raw) !== 'object') return {};
      var data = raw.data && _typeof(raw.data) === 'object' ? raw.data : null;
      var result = raw.result && _typeof(raw.result) === 'object' ? raw.result : null;
      if (data && hasStatusFields(data)) return data;
      if (result && hasStatusFields(result)) return result;
      return raw;
    }
    function hasStatusFields(value) {
      if (!value || _typeof(value) !== 'object') return false;
      return hasSubscribedField(value) || Object.prototype.hasOwnProperty.call(value, '_id') || Object.prototype.hasOwnProperty.call(value, 'tmdb_id') || Object.prototype.hasOwnProperty.call(value, 'content_id');
    }
    function hasSubscribedField(value) {
      if (!value || _typeof(value) !== 'object') return false;
      return Object.prototype.hasOwnProperty.call(value, 'subscribed');
    }
    function parseSubscribedFlag(value) {
      if (value === true || value === 1) return true;
      if (typeof value === 'string') {
        var normalized = value.trim().toLowerCase();
        return normalized === 'true' || normalized === '1' || normalized === 'yes' || normalized === 'on';
      }
      return false;
    }
    function isDuplicateSubscribeError(error) {
      if (!error) return false;
      var status = parseInt(error.status || 0, 10) || 0;
      if (status === 409) return true;
      var payload = error.payload || {};
      var payloadStatus = String(payload.status || '').toLowerCase();
      var payloadError = String(payload.error || '').toLowerCase();
      var message = String(error.message || '').toLowerCase();
      return payloadStatus === 'already_exists' || payloadError.indexOf('already') >= 0 || message.indexOf('already') >= 0;
    }
    function isAlreadySubscribed(contentId, imdbId) {
      if (state.subscriptions && state.subscriptions.has(contentId)) return true;
      if (imdbId && state.subscriptionsImdb && state.subscriptionsImdb.has(imdbId)) return true;
      if (state.subscriptionStatusByContentId && state.subscriptionStatusByContentId.has(contentId)) {
        var value = state.subscriptionStatusByContentId.get(contentId);
        if (value === true) return true;
      }
      if (imdbId && state.subscriptionsByImdb && state.subscriptionsByImdb.has(imdbId)) {
        var mappedContentId = buildContentId(state.subscriptionsByImdb.get(imdbId));
        if (mappedContentId && state.subscriptions.has(mappedContentId)) return true;
      }
      return false;
    }
    function hasTraktToken() {
      var token = Lampa.Storage.get('trakt_token', '');
      return Boolean(String(token || '').trim());
    }
    function resolveTraktApi() {
      if (typeof window === 'undefined' || !window) return null;
      if (!window.TraktTV || !window.TraktTV.api) return null;
      var api = window.TraktTV.api;
      if (typeof api.upnext !== 'function' || typeof api.watchlist !== 'function') return null;
      return api;
    }
    function createSummary() {
      return {
        total: 0,
        added: 0,
        duplicates: 0,
        skipped: 0,
        failed: 0
      };
    }
    function showSummary(source, summary) {
      var sourceLabel = source === 'trakt' ? t('nn_noty_import_source_trakt') : t('nn_noty_import_source_lampa');
      var message = t('nn_noty_import_summary_prefix') + ' ' + sourceLabel + ': ' + t('nn_noty_import_added') + ' ' + (summary.added || 0) + ', ' + t('nn_noty_import_duplicates') + ' ' + (summary.duplicates || 0) + ', ' + t('nn_noty_import_skipped') + ' ' + (summary.skipped || 0) + ', ' + t('nn_noty_import_failed') + ' ' + (summary.failed || 0);
      showBell$1(message);
    }
    function resolveErrorMessage(error) {
      if (!error) return t('nn_noty_request_failed');
      return error && error.message ? String(error.message) : t('nn_noty_request_failed');
    }
    function showBell$1(message) {
      showBell(String(message || ''));
    }
    function wait(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, Math.max(0, parseInt(ms || 0, 10) || 0));
      });
    }
    return {
      init: init,
      destroy: destroy,
      restartAutoImports: restartAutoImports,
      onStorageChange: onStorageChange,
      manualImportFromHistory: manualImportFromHistory,
      manualImportFromTrakt: manualImportFromTrakt
    };
  }

  var buttonsController;
  var loadSubscriptionsSafe = function loadSubscriptionsSafe() {
    if (!isRuntimeAvailable()) return Promise.resolve([]);
    return loadSubscriptions(state, buttonsController ? buttonsController.redrawAllSubscribeButtons : null);
  };
  var wsController = createWsController({
    state: state,
    isRuntimeAvailable: isRuntimeAvailable,
    getEffectiveUserId: getEffectiveUserId,
    pushNotice: pushNotice,
    upsertNoticeByEpisode: upsertNoticeByEpisode,
    redrawAllSubscribeButtons: function redrawAllSubscribeButtons() {
      if (!buttonsController || typeof buttonsController.redrawAllSubscribeButtons !== 'function') return;
      buttonsController.redrawAllSubscribeButtons();
    },
    resolveSeriesDetails: function resolveSeriesDetails$1(tmdbId) {
      return resolveSeriesDetails(state, tmdbId);
    }
  });
  buttonsController = createButtonsController({
    state: state,
    isPluginEnabled: isPluginEnabled,
    isRuntimeAvailable: isRuntimeAvailable,
    subscribeToSeries: subscribeToSeries,
    unsubscribeFromSeries: unsubscribeFromSeries,
    getSubscriptionStatus: getSubscriptionStatus
  });
  var integrationsController = createIntegrationsController({
    state: state,
    isRuntimeAvailable: isRuntimeAvailable,
    loadSubscriptions: loadSubscriptionsSafe,
    subscribeToSeries: subscribeToSeries,
    redrawAllSubscribeButtons: function redrawAllSubscribeButtons() {
      if (!buttonsController || typeof buttonsController.redrawAllSubscribeButtons !== 'function') return;
      buttonsController.redrawAllSubscribeButtons();
    }
  });
  function startPlugin() {
    window.plugin_nightingale_notifications_ready = true;
    if (window.appready) init();else {
      Lampa.Listener.follow('app', function (event) {
        if (event.type === 'ready') init();
      });
    }
  }
  function init() {
    if (state.started) return;
    state.started = true;
    Lampa.Manifest.plugins = manifest;
    registerTranslations();
    injectStyles();
    registerSubscribesFeature({
      state: state,
      isPluginEnabled: isPluginEnabled,
      isRuntimeAvailable: isRuntimeAvailable,
      loadSubscriptions: loadSubscriptionsSafe,
      unsubscribeFromSeries: unsubscribeFromSeries,
      onSubscriptionsChanged: buttonsController.redrawAllSubscribeButtons,
      resolveSeriesDetails: function resolveSeriesDetails$1(tmdbId) {
        return resolveSeriesDetails(state, tmdbId);
      }
    });
    registerSettings(restartRuntime, integrationsController);
    registerNoticeChannel();
    registerNoticeSelectOpenHandler();
    Lampa.Listener.follow('full', buttonsController.onFullEvent);
    integrationsController.init();
    if (Lampa.Storage && Lampa.Storage.listener) {
      Lampa.Storage.listener.follow('change', onStorageChange);
    }
    restartRuntime('init');
  }
  function onStorageChange(event) {
    if (!event || !event.name) return;
    if (integrationsController && typeof integrationsController.onStorageChange === 'function') {
      integrationsController.onStorageChange(event);
    }
    var watched = [STORAGE_KEYS.syncUid, 'lampa_uid'];
    if (watched.indexOf(event.name) >= 0) restartRuntime('storage_change');
  }
  function restartRuntime(reason) {
    wsController.stopWebSocket();
    if (!isRuntimeAvailable()) {
      state.subscriptionsLoaded = false;
      state.subscriptionsSyncedAt = 0;
      state.subscriptions.clear();
      state.subscriptionsImdb.clear();
      state.subscriptionsByImdb.clear();
      if (state.subscriptionStatusSyncedAt) state.subscriptionStatusSyncedAt.clear();
      if (state.subscriptionStatusRequests) state.subscriptionStatusRequests.clear();
      if (state.subscriptionStatusByContentId) state.subscriptionStatusByContentId.clear();
      buttonsController.redrawAllSubscribeButtons();
      if (integrationsController && typeof integrationsController.restartAutoImports === 'function') {
        integrationsController.restartAutoImports('runtime_unavailable');
      }
      return;
    }
    wsController.connectWebSocket();
    if (integrationsController && typeof integrationsController.restartAutoImports === 'function') {
      integrationsController.restartAutoImports(reason || 'runtime_available');
    }
  }
  if (!window.plugin_nightingale_notifications_ready) startPlugin();

})();
