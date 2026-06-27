(function () {
  'use strict';

  if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

  var $$c = require('../internals/export');
  var uncurryThis$f = require('../internals/function-uncurry-this-clause');
  var $indexOf = require('../internals/array-includes').indexOf;
  var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
  var nativeIndexOf = uncurryThis$f([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$1('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$c({
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

  var $$b = require('../internals/export');
  var uncurryThis$e = require('../internals/function-uncurry-this');
  var aCallable$3 = require('../internals/a-callable');
  var toObject$2 = require('../internals/to-object');
  var lengthOfArrayLike$3 = require('../internals/length-of-array-like');
  var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
  var toString$9 = require('../internals/to-string');
  var fails$e = require('../internals/fails');
  var internalSort = require('../internals/array-sort');
  var arrayMethodIsStrict = require('../internals/array-method-is-strict');
  var FF = require('../internals/environment-ff-version');
  var IE_OR_EDGE = require('../internals/environment-is-ie-or-edge');
  var V8 = require('../internals/environment-v8-version');
  var WEBKIT = require('../internals/environment-webkit-version');
  var test = [];
  var nativeSort = uncurryThis$e(test.sort);
  var push$4 = uncurryThis$e(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$e(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$e(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT = !fails$e(function () {
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
      var xString = toString$9(x);
      var yString = toString$9(y);
      return xString === yString ? 0 : xString > yString ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$b({
    target: 'Array',
    proto: true,
    forced: FORCED$1
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$3(comparefn);
      var array = toObject$2(this);
      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike$3(array);
      var itemsLength, index;
      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$4(items, array[index]);
      }
      internalSort(items, getSortCompare(comparefn));
      itemsLength = lengthOfArrayLike$3(items);
      index = 0;
      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow(array, index++);
      return array;
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

  var $$a = require('../internals/export');
  var exec$3 = require('../internals/regexp-exec');

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$a({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$3
  }, {
    exec: exec$3
  });

  var $$9 = require('../internals/export');
  var fails$c = require('../internals/fails');
  var isArray$3 = require('../internals/is-array');
  var isObject$4 = require('../internals/is-object');
  var toObject = require('../internals/to-object');
  var lengthOfArrayLike$2 = require('../internals/length-of-array-like');
  var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
  var createProperty$1 = require('../internals/create-property');
  var setArrayLength = require('../internals/array-set-length');
  var arraySpeciesCreate = require('../internals/array-species-create');
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var wellKnownSymbol$8 = require('../internals/well-known-symbol');
  var V8_VERSION$2 = require('../internals/environment-v8-version');
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$8('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$2 >= 51 || !fails$c(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$4(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$3(O);
  };
  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$9({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
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

  var apply$2 = require('../internals/function-apply');
  var call$9 = require('../internals/function-call');
  var uncurryThis$d = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails$b = require('../internals/fails');
  var anObject$8 = require('../internals/an-object');
  var isCallable$b = require('../internals/is-callable');
  var isObject$3 = require('../internals/is-object');
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
  var concat = uncurryThis$d([].concat);
  var push$3 = uncurryThis$d([].push);
  var stringIndexOf$3 = uncurryThis$d(''.indexOf);
  var stringSlice$5 = uncurryThis$d(''.slice);
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
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$b(function () {
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
      var replacer = isObject$3(searchValue) ? getMethod$2(searchValue, REPLACE) : undefined;
      return replacer ? call$9(replacer, searchValue, O, replaceValue) : call$9(nativeReplace, toString$8(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
      var S = toString$8(string);
      var functionalReplace = isCallable$b(replaceValue);
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
  var globalThis$b = require('../internals/global-this');
  var uncurryThis$c = require('../internals/function-uncurry-this');
  var isForced$1 = require('../internals/is-forced');
  var inheritIfRequired = require('../internals/inherit-if-required');
  var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
  var create = require('../internals/object-create');
  var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
  var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
  var isRegExp = require('../internals/is-regexp');
  var toString$7 = require('../internals/to-string');
  var getRegExpFlags$3 = require('../internals/regexp-get-flags');
  var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
  var proxyAccessor = require('../internals/proxy-accessor');
  var defineBuiltIn$5 = require('../internals/define-built-in');
  var fails$a = require('../internals/fails');
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
  var exec$2 = uncurryThis$c(RegExpPrototype$1.exec);
  var charAt$1 = uncurryThis$c(''.charAt);
  var replace$3 = uncurryThis$c(''.replace);
  var stringIndexOf$2 = uncurryThis$c(''.indexOf);
  var stringSlice$4 = uncurryThis$c(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$7 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$a(function () {
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
  var anObject$7 = require('../internals/an-object');
  var $toString$1 = require('../internals/to-string');
  var fails$9 = require('../internals/fails');
  var getRegExpFlags$2 = require('../internals/regexp-get-flags');
  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails$9(function () {
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
      var R = anObject$7(this);
      var pattern = $toString$1(R.source);
      var flags = $toString$1(getRegExpFlags$2(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var uncurryThis$b = require('../internals/function-uncurry-this');
  var id = 0;
  var postfix = Math.random();
  var toString$6 = uncurryThis$b(1.1.toString);
  module.exports = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
  };

  var uid$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(uid$2);

  var es_symbol = {};

  // `Symbol.prototype.description` getter
  var $$8 = require('../internals/export');
  var DESCRIPTORS$6 = require('../internals/descriptors');
  var globalThis$a = require('../internals/global-this');
  var call$8 = require('../internals/function-call');
  var uncurryThis$a = require('../internals/function-uncurry-this');
  var hasOwn$3 = require('../internals/has-own-property');
  var isCallable$a = require('../internals/is-callable');
  var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
  var toString$5 = require('../internals/to-string');
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
    var thisSymbolValue = uncurryThis$a(SymbolPrototype$1.valueOf);
    var symbolDescriptiveString = uncurryThis$a(SymbolPrototype$1.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$2 = uncurryThis$a(''.replace);
    var stringSlice$3 = uncurryThis$a(''.slice);
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
    $$8({
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

  var $$7 = require('../internals/export');
  var globalThis$8 = require('../internals/global-this');
  var call$7 = require('../internals/function-call');
  var uncurryThis$9 = require('../internals/function-uncurry-this');
  var IS_PURE$3 = require('../internals/is-pure');
  var DESCRIPTORS$5 = require('../internals/descriptors');
  var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
  var fails$8 = require('../internals/fails');
  var hasOwn$2 = require('../internals/has-own-property');
  var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
  var anObject$6 = require('../internals/an-object');
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
  var push$2 = uncurryThis$9([].push);
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
  var setSymbolDescriptor = DESCRIPTORS$5 && fails$8(function () {
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
        if ($this === ObjectPrototype) call$7(_setter, ObjectPrototypeSymbols, value);
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
  $$7({
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
  $$7({
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
  $$7({
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
  $$7({
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

  var uncurryThis$8 = require('../internals/function-uncurry-this');
  var toString$4 = uncurryThis$8({}.toString);
  var stringSlice$2 = uncurryThis$8(''.slice);
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

  var $$6 = require('../internals/export');
  var getBuiltIn$2 = require('../internals/get-built-in');
  var apply$1 = require('../internals/function-apply');
  var call$6 = require('../internals/function-call');
  var uncurryThis$7 = require('../internals/function-uncurry-this');
  var fails$7 = require('../internals/fails');
  var isArray$2 = require('../internals/is-array');
  var isCallable$7 = require('../internals/is-callable');
  var isRawJSON = require('../internals/is-raw-json');
  var isSymbol = require('../internals/is-symbol');
  var classof$4 = require('../internals/classof-raw');
  var toString$2 = require('../internals/to-string');
  var arraySlice$1 = require('../internals/array-slice');
  var parseJSONString = require('../internals/parse-json-string');
  var uid = require('../internals/uid');
  var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
  var NATIVE_RAW_JSON = require('../internals/native-raw-json');
  var $String$2 = String;
  var $stringify = getBuiltIn$2('JSON', 'stringify');
  var exec$1 = uncurryThis$7(/./.exec);
  var charAt = uncurryThis$7(''.charAt);
  var charCodeAt = uncurryThis$7(''.charCodeAt);
  var replace$1 = uncurryThis$7(''.replace);
  var slice = uncurryThis$7(''.slice);
  var push$1 = uncurryThis$7([].push);
  var numberToString = uncurryThis$7(1.1.toString);
  var surrogates = /[\uD800-\uDFFF]/g;
  var leadingSurrogates = /^[\uD800-\uDBFF]$/;
  var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
  var MARK = uid();
  var MARK_LENGTH = MARK.length;
  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$7(function () {
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
  var ILL_FORMED_UNICODE = fails$7(function () {
    return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
  });
  var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
    var args = arraySlice$1(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$7($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$7($replacer)) value = call$6($replacer, this, $String$2(key), value);
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
  if ($stringify) $$6({
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
        var v = isCallable$7(replacerFunction) ? call$6(replacerFunction, this, $String$2(key), value) : value;
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
  var fails$6 = require('../internals/fails');
  var globalThis$7 = require('../internals/global-this');
  var $String$1 = globalThis$7.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  module.exports = !!Object.getOwnPropertySymbols && !fails$6(function () {
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

  var call$5 = require('../internals/function-call');
  var uncurryThis$6 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$5 = require('../internals/an-object');
  var isObject$2 = require('../internals/is-object');
  var requireObjectCoercible$1 = require('../internals/require-object-coercible');
  var speciesConstructor$2 = require('../internals/species-constructor');
  var advanceStringIndex$1 = require('../internals/advance-string-index');
  var toLength$2 = require('../internals/to-length');
  var toString$1 = require('../internals/to-string');
  var getMethod$1 = require('../internals/get-method');
  var getRegExpFlags$1 = require('../internals/regexp-get-flags');
  var regExpExec$1 = require('../internals/regexp-exec-abstract');
  var stickyHelpers = require('../internals/regexp-sticky-helpers');
  var fails$5 = require('../internals/fails');
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min = Math.min;
  var push = uncurryThis$6([].push);
  var stringSlice$1 = uncurryThis$6(''.slice);
  var stringIndexOf$1 = uncurryThis$6(''.indexOf);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$5(function () {
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
      var splitter = isObject$2(separator) ? getMethod$1(separator, SPLIT) : undefined;
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

  var uncurryThis$5 = require('../internals/function-uncurry-this');
  var fails$4 = require('../internals/fails');
  var classof$3 = require('../internals/classof-raw');
  var $Object = Object;
  var split = uncurryThis$5(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  module.exports = fails$4(function () {
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
    if (hasOwn$1(O, P)) return createPropertyDescriptor$1(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
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

  var isCallable$6 = require('../internals/is-callable');
  module.exports = function (it) {
    return _typeof(it) == 'object' ? it !== null : isCallable$6(it);
  };

  var isObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(isObject$1);

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

  var $$5 = require('../internals/export');
  var call$3 = require('../internals/function-call');
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
          defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$5({
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

  var uncurryThis$4 = require('../internals/function-uncurry-this');
  var fails$3 = require('../internals/fails');
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
  var stringSlice = uncurryThis$4(''.slice);
  var replace = uncurryThis$4(''.replace);
  var join = uncurryThis$4([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$3(function () {
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

  	var isCallable = require$$5$4;
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

  var $$4 = require('../internals/export');
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
  $$4({
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

  function item(data) {
    var item = Lampa.Template.get('lmeRadioRecord_item', {
      name: data.title
    });
    var img = item.find('img')[0];
    img.onerror = function () {
      img.src = './img/img_broken.svg';
    };
    img.src = data.icon_gray;
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      img.onerror = function () {};
      img.onload = function () {};
      img.src = '';
      item.remove();
    };
  }

  function component() {
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var player = window.radio_player;
    var items = [];
    var html = $('<div class="lmeRadioRecord"></div>');
    var body = $('<div class="lmeRadioRecordItem"></div>');
    var active = '';
    var last = '';
    this.create = function () {
      this.activity.loader(true);
      network["native"](Lampa.Platform.is('webos') || Lampa.Platform.is('tizen') ? '' : Lampa.Storage.field('proxy_other') === false ? '' : 'https://lampaplugins.github.io/store/stations.json', this.build.bind(this), function () {
        var empty = new Lampa.Empty();
        html.append(empty.render());
        this.start = empty.start;
        this.activity.loader(false);
        this.activity.toggle();
      });
      return this.render();
    };
    this.build = function (data) {
      scroll.minus();
      var stations = data.result.stations.sort(function (a, b) {
        return a.sort - b.sort;
      });
      this.append(stations);
      scroll.append(body);
      html.append(scroll.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.append = function (element) {
      element.forEach(function (el) {
        var item$1 = new item(el);
        item$1.render().on('hover:focus', function () {
          last = item$1.render()[0];
          active = items.indexOf(item$1);
          scroll.update(items[active].render(), true);
        }).on('hover:enter', function () {
          player.play(el);
        });
        body.append(item$1.render());
        items.push(item$1);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.background = function () {
      Lampa.Background.immediately('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBlZaLrsMgDENXxAf3/9XHFdXNZLm2YZHQymPk4CS0277v9+ffrut62nEcn/M8nzb69cxj6le1+75f/RqrZ9fatm3F9wwMR7yhawilNke4Gis/7j9srQbdaVFBnkcQ1WrfgmIIBcTrvgqqsKiTzvpOQbUnAykVW4VVqZXyyDllYFSKx9QaVrO7nGJIB63g+FAq/xhcHWBYdwCsmAtvFZUKE0MlVZWCT4idOlyhTp3K35R/6Nzlq0uBnsKWlEzgSh1VGJxv6rmpXMO7EK+XWUPnDFRWqitQFeY2UyZVryuWlI8ulLgGf19FooAUwC9gCWLcwzWPb7Wa60qdlZxjx6ooUuUqVQsK+y1VoAJyBeJAVsLJeYmg/RIXdG2kPhwYPBUQQyYF0XC8lwP3MTCrYAXB88556peCbUUZV7WccwkUQfCZC4PXdA5hKhSVhythZqjZM0J39w5m8BRadKAcrsIpNZsLIYdOqcZ9hExhZ1MH+QL+ciFzXzmYhZr/M6yUUwp2dp5U4naZDwAF5JRSefdScJZ3SkU0nl8xpaAy+7ml1EqvMXSs1HRrZ9bc3eZUSXmGa/mdyjbmqyX7A9RaYQa9IRJ0AAAAAElFTkSuQmCC');
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) return;
      this.background();
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        right: function right() {
          Navigator.move('right');
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        down: function down() {
          if (Navigator.canmove('down')) Navigator.move('down');
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
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      items = null;
      network = null;
    };
  }

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

  var require$$8 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

  var call$2 = require('../internals/function-call');
  var uncurryThis$2 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$2 = require('../internals/an-object');
  var isObject = require('../internals/is-object');
  var toLength = require('../internals/to-length');
  var toString = require('../internals/to-string');
  var requireObjectCoercible = require('../internals/require-object-coercible');
  var getMethod = require('../internals/get-method');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getRegExpFlags = require('../internals/regexp-get-flags');
  var regExpExec = require('../internals/regexp-exec-abstract');
  var stringIndexOf = uncurryThis$2(''.indexOf);

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isObject(regexp) ? getMethod(regexp, MATCH) : undefined;
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

  function player() {
    var html = Lampa.Template.get('lmeRadioRecord_player', {});
    var audio = new Audio();
    var url = '';
    var played = false;
    var hls = '';
    audio.addEventListener("play", function (event) {
      played = true;
      html.toggleClass('loading', false);
    });
    function prepare() {
      return _prepare.apply(this, arguments);
    }
    function _prepare() {
      _prepare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(audio.canPlayType('audio/vnd.apple.mpegurl') || url.indexOf('.aacp') > 0)) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return load();
            case 1:
              _context.n = 6;
              break;
            case 2:
              if (!(Hls.isSupported() && url.indexOf('.aacp') > 0)) {
                _context.n = 5;
                break;
              }
              _context.p = 3;
              hls = new Hls();
              hls.attachMedia(audio);
              hls.loadSource(url);
              return _context.a(2, new Promise(function (resolve, reject) {
                hls.on(Hls.Events.MANIFEST_LOADED, resolve);
                hls.on(Hls.Events.ERROR, reject);
              }));
            case 4:
              _context.p = 4;
              _context.v;
              Lampa.Noty.show('Ошибка в загрузке потока');
              _context.n = 6;
              break;
            case 5:
              _context.n = 6;
              return load();
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[3, 4]]);
      }));
      return _prepare.apply(this, arguments);
    }
    function load() {
      audio.src = url;
      audio.load();
      return new Promise(function (resolve) {
        resolve(start());
      });
    }
    function start() {
      return _start.apply(this, arguments);
    }
    function _start() {
      _start = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return audio.play();
            case 1:
              console.log('Radio', 'start playing');
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              Lampa.Noty.show("Play promise error: ".concat(_t2.message));
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      return _start.apply(this, arguments);
    }
    function play() {
      html.toggleClass('loading', true);
      html.toggleClass('stop', false);
      prepare().then(function () {
        return start();
      }).catch(function (error) {
        Lampa.Noty.show("Prepare promise error: ".concat(error.message));
      });
      return Promise.resolve(); // Возвращаем пустой промис для корректной работы цепочки промисов
    }
    function stop() {
      played = false;
      html.toggleClass('stop', true);
      html.toggleClass('loading', false);
      if (hls) {
        hls.destroy();
        hls = false;
      }
      audio.src = '';
    }
    html.on('hover:enter', function () {
      if (played) stop();else if (url) play();
    });
    this.create = function () {
      $('.head__actions .open--search').before(html);
    };
    this.play = function (data) {
      stop();
      url = data.stream_320 ? data.stream_320 : data.stream_128 ? data.stream_128 : data.stream_hls.replace('playlist.m3u8', '96/playlist.m3u8');
      html.find('.lmeRadioRecord-player__name').html("<span>".concat(data.title, " <p class=\"lmeBit\">").concat(data.stream_320 ? '320kbps' : data.stream_128 ? '128kbps' : 'HLS', "</p></span>"));
      html.toggleClass('hide', false);
      play();
    };
  }

  function startPlugin() {
    window.lmeRadio = true;
    Lampa.Component.add('lmeRadioRecord', component);
    Lampa.Template.add('lmeRadioRecord_item', "<div class=\"selector lmeRadioRecord-item\">\n        <div class=\"lmeRadioRecord-item__imgbox\">\n            <img class=\"lmeRadioRecord-item__img\" />\n        </div>\n\n        <div class=\"lmeRadioRecord-item__name\">{name}</div>\n    </div>");
    Lampa.Template.add('lmeRadioRecord_player', "<div class=\"selector lmeRadioRecord-player stop hide\">\n        <div class=\"lmeRadioRecord-player__name\">Radio Record</div>\n\n        <div class=\"lmeRadioRecord-player__button\">\n            <i></i>\n            <i></i>\n            <i></i>\n            <i></i>\n        </div>\n    </div>");
    Lampa.Template.add('lmeRadioRecord_style', "<style>@charset 'UTF-8';.lmeRadioRecordItem{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.lmeRadioRecord-item{width:8em;margin-left:1em;margin-bottom:.5em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-item__imgbox{background-color:#3e3e3e;padding-bottom:83%;position:relative;-webkit-border-radius:.3em;border-radius:.3em}.lmeRadioRecord-item__img{position:absolute;top:0;left:0;width:100%;height:100%}.lmeRadioRecord-item__name{font-size:1.1em;margin-top:.8em}.lmeRadioRecord-item.focus .lmeRadioRecord-item__imgbox:after{border:solid .26em #fff;content:'';display:block;position:absolute;left:-0.5em;top:-0.5em;right:-0.5em;bottom:-0.5em;-webkit-border-radius:.8em;border-radius:.8em}.lmeRadioRecord-item+.lmeRadioRecord-item{margin-left:1em}@-webkit-keyframes sound{0%{height:.1em}100%{height:1em}}@keyframes sound{0%{height:.1em}100%{height:1em}}@-webkit-keyframes sound-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sound-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.lmeRadioRecord-player{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;border-radius:.3em;padding:.2em .8em;background-color:#3e3e3e}.lmeRadioRecord-player__name{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:1em;white-space:nowrap;position:relative;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;max-width:8em}.lmeRadioRecord-player__name span{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;white-space:nowrap;width:-webkit-calc(1% + 50px);width:calc(1% + 50px);-webkit-animation-name:scrollingAnimation;animation-name:scrollingAnimation;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.lmeRadioRecord-player__name span p.lmeBit{background-color:#fff;margin:auto 10% auto;color:#000;padding:.2em .4em;font-size:.75em;-webkit-border-radius:.5em;border-radius:.5em;font-weight:700}@-webkit-keyframes scrollingAnimation{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out}}@keyframes scrollingAnimation{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:.5;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;transition:opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out;-o-transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear;transition:transform .5s ease-in-out,opacity .2s linear,visibility .1s linear,-webkit-transform .5s ease-in-out}}@media screen and (max-width:385px){.lmeRadioRecord-player__name{display:none}}.lmeRadioRecord-player__button{position:relative;width:1.5em;height:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player__button i{display:block;width:.2em;background-color:#fff;margin:0 .1em;-webkit-animation:sound 0ms -800ms linear infinite alternate;animation:sound 0ms -800ms linear infinite alternate;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player__button i:nth-child(1){-webkit-animation-duration:474ms;animation-duration:474ms}.lmeRadioRecord-player__button i:nth-child(2){-webkit-animation-duration:433ms;animation-duration:433ms}.lmeRadioRecord-player__button i:nth-child(3){-webkit-animation-duration:407ms;animation-duration:407ms}.lmeRadioRecord-player__button i:nth-child(4){-webkit-animation-duration:458ms;animation-duration:458ms}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button{-webkit-border-radius:100%;border-radius:100%;border:.2em solid #fff}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button i{display:none}.lmeRadioRecord-player.stop .lmeRadioRecord-player__button:after{content:'';width:.5em;height:.5em;background-color:#fff}.lmeRadioRecord-player.loading .lmeRadioRecord-player__button:before{content:'';display:block;border-top:.2em solid #fff;border-left:.2em solid transparent;border-right:.2em solid transparent;border-bottom:.2em solid transparent;-webkit-animation:sound-loading 1s linear infinite;animation:sound-loading 1s linear infinite;width:.9em;height:.9em;-webkit-border-radius:100%;border-radius:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmeRadioRecord-player.loading .lmeRadioRecord-player__button i{display:none}.lmeRadioRecord-player.focus{background-color:#fff;color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button{border-color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button i,.lmeRadioRecord-player.focus .lmeRadioRecord-player__button:after{background-color:#000}.lmeRadioRecord-player.focus .lmeRadioRecord-player__button:before{border-top-color:#000}</style>");
    window.radio_player = new player();
    Lampa.Listener.follow('app', function (e) {
      if (e.type === 'ready') {
        var lmeRadio = $("\n                    <li class=\"menu__item selector\" data-action=\"lmeRadioRecord\">\n                      <div class=\"menu__ico\">\n                        <svg width=\"61\" height=\"61\" viewBox=\"0 0 61 61\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M47.6255 10.6335H22.6255C20.3006 10.6335 19.1381 10.6335 18.1843 10.8891C15.5962 11.5826 13.5745 13.6042 12.881 16.1924C12.6255 17.1461 12.6255 18.3566 12.6255 20.6815M12.6255 20.6815C13.4112 20.6335 14.3798 20.6335 15.6255 20.6335H44.6255C47.4257 20.6335 48.826 20.6335 49.8955 21.1785C50.8362 21.6579 51.6012 22.4228 52.0805 23.3636C52.6255 24.4331 52.6255 25.8333 52.6255 28.6335V42.6335C52.6255 45.4338 52.6255 46.834 52.0805 47.9035C51.6012 48.8443 50.8362 49.6093 49.8955 50.0885C48.826 50.6335 47.4257 50.6335 44.6255 50.6335H15.6255C12.8252 50.6335 11.4251 50.6335 10.3555 50.0885C9.41471 49.6093 8.64981 48.8443 8.17046 47.9035C7.62549 46.834 7.62549 45.4338 7.62549 42.6335V28.6335C7.62549 25.8333 7.62549 24.4331 8.17046 23.3636C8.64981 22.4228 9.41471 21.6579 10.3555 21.1785C10.9493 20.876 11.645 20.7414 12.6255 20.6815ZM35.1255 30.6335H45.1255M35.1255 40.6335H45.1255M25.1255 35.6335C25.1255 38.395 22.8869 40.6335 20.1255 40.6335C17.3641 40.6335 15.1255 38.395 15.1255 35.6335C15.1255 32.872 17.3641 30.6335 20.1255 30.6335C22.8869 30.6335 25.1255 32.872 25.1255 35.6335Z\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        </svg>\n                      </div>\n                      <div class=\"menu__text\">Radio Record</div>\n                    </li>\n                ");
        lmeRadio.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: 'Radio Record',
            component: 'lmeRadioRecord',
            page: 1
          });
        });
        $('.menu .menu__list').eq(0).append(lmeRadio);
        $('body').append(Lampa.Template.get('lmeRadioRecord_style', {}, true));
        window.radio_player.create();
      }
    });
  }
  if (!window.lmeRadio) startPlugin();

})();
