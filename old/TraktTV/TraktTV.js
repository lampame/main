(function () {
  'use strict';

  if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

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

  var esnext_globalThis = {};

  var es_globalThis = {};

  var globalThis$g = require('../internals/global-this');
  var getOwnPropertyDescriptor$3 = require('../internals/object-get-own-property-descriptor').f;
  var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
  var defineBuiltIn$8 = require('../internals/define-built-in');
  var defineGlobalProperty$1 = require('../internals/define-global-property');
  var copyConstructorProperties$2 = require('../internals/copy-constructor-properties');
  var isForced$4 = require('../internals/is-forced');

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
      target = globalThis$g;
    } else if (STATIC) {
      target = globalThis$g[TARGET] || defineGlobalProperty$1(TARGET, {});
    } else {
      target = globalThis$g[TARGET] && globalThis$g[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$3(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
        copyConstructorProperties$2(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$5(sourceProperty, 'sham', true);
      }
      defineBuiltIn$8(target, key, sourceProperty, options);
    }
  };

  var _export = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(_export);

  var hasRequiredEs_globalThis;

  function requireEs_globalThis () {
  	if (hasRequiredEs_globalThis) return es_globalThis;
  	hasRequiredEs_globalThis = 1;

  	var $ = require$$0$7;
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

  var globalThis$f = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(globalThis$f);

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

  var fails$h;
  var hasRequiredFails;

  function requireFails () {
  	if (hasRequiredFails) return fails$h;
  	hasRequiredFails = 1;

  	fails$h = function (exec) {
  	  try {
  	    return !!exec();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return fails$h;
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

  var $$m = require('../internals/export');
  var exec$4 = require('../internals/regexp-exec');

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$m({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$4
  }, {
    exec: exec$4
  });

  var $$l = require('../internals/export');
  var fails$g = require('../internals/fails');
  var isArray$3 = require('../internals/is-array');
  var isObject$7 = require('../internals/is-object');
  var toObject$1 = require('../internals/to-object');
  var lengthOfArrayLike$3 = require('../internals/length-of-array-like');
  var doesNotExceedSafeInteger$1 = require('../internals/does-not-exceed-safe-integer');
  var createProperty$1 = require('../internals/create-property');
  var setArrayLength = require('../internals/array-set-length');
  var arraySpeciesCreate$1 = require('../internals/array-species-create');
  var arrayMethodHasSpeciesSupport$3 = require('../internals/array-method-has-species-support');
  var wellKnownSymbol$9 = require('../internals/well-known-symbol');
  var V8_VERSION$2 = require('../internals/environment-v8-version');
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$9('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$2 >= 51 || !fails$g(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$7(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$3(O);
  };
  var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$l({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$3
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$1(this);
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

  var apply$2 = require('../internals/function-apply');
  var call$a = require('../internals/function-call');
  var uncurryThis$j = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails$f = require('../internals/fails');
  var anObject$9 = require('../internals/an-object');
  var isCallable$d = require('../internals/is-callable');
  var isObject$6 = require('../internals/is-object');
  var toIntegerOrInfinity$1 = require('../internals/to-integer-or-infinity');
  var toLength$3 = require('../internals/to-length');
  var toString$9 = require('../internals/to-string');
  var requireObjectCoercible$2 = require('../internals/require-object-coercible');
  var advanceStringIndex$2 = require('../internals/advance-string-index');
  var getMethod$2 = require('../internals/get-method');
  var getSubstitution = require('../internals/get-substitution');
  var getRegExpFlags$4 = require('../internals/regexp-get-flags');
  var regExpExec$2 = require('../internals/regexp-exec-abstract');
  var wellKnownSymbol$8 = require('../internals/well-known-symbol');
  var REPLACE = wellKnownSymbol$8('replace');
  var max = Math.max;
  var min$1 = Math.min;
  var concat = uncurryThis$j([].concat);
  var push$5 = uncurryThis$j([].push);
  var stringIndexOf$3 = uncurryThis$j(''.indexOf);
  var stringSlice$7 = uncurryThis$j(''.slice);
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
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$f(function () {
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
      var replacer = isObject$6(searchValue) ? getMethod$2(searchValue, REPLACE) : undefined;
      return replacer ? call$a(replacer, searchValue, O, replaceValue) : call$a(nativeReplace, toString$9(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$9(this);
      var S = toString$9(string);
      var functionalReplace = isCallable$d(replaceValue);
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
        push$5(results, result);
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
        for (var j = 1; j < result.length; j++) push$5(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$5(replacerArgs, namedCaptures);
          replacement = toString$9(apply$2(replaceValue, undefined, replacerArgs));
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

  var DESCRIPTORS$9 = require('../internals/descriptors');
  var globalThis$e = require('../internals/global-this');
  var uncurryThis$i = require('../internals/function-uncurry-this');
  var isForced$3 = require('../internals/is-forced');
  var inheritIfRequired$2 = require('../internals/inherit-if-required');
  var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
  var create$1 = require('../internals/object-create');
  var getOwnPropertyNames$1 = require('../internals/object-get-own-property-names').f;
  var isPrototypeOf$5 = require('../internals/object-is-prototype-of');
  var isRegExp = require('../internals/is-regexp');
  var toString$8 = require('../internals/to-string');
  var getRegExpFlags$3 = require('../internals/regexp-get-flags');
  var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
  var proxyAccessor = require('../internals/proxy-accessor');
  var defineBuiltIn$7 = require('../internals/define-built-in');
  var fails$e = require('../internals/fails');
  var hasOwn$7 = require('../internals/has-own-property');
  var enforceInternalState$1 = require('../internals/internal-state').enforce;
  var setSpecies$1 = require('../internals/set-species');
  var wellKnownSymbol$7 = require('../internals/well-known-symbol');
  var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
  var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
  var MATCH = wellKnownSymbol$7('match');
  var NativeRegExp = globalThis$e.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var SyntaxError = globalThis$e.SyntaxError;
  var exec$3 = uncurryThis$i(RegExpPrototype$1.exec);
  var charAt$2 = uncurryThis$i(''.charAt);
  var replace$4 = uncurryThis$i(''.replace);
  var stringIndexOf$2 = uncurryThis$i(''.indexOf);
  var stringSlice$6 = uncurryThis$i(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$9 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$e(function () {
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
      chr = charAt$2(string, index);
      if (chr === '\\') {
        result += chr + charAt$2(string, ++index);
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
      chr = charAt$2(string, index);
      if (chr === '\\') {
        chr += charAt$2(string, ++index);
        // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
        if (!ncg && charAt$2(chr, 1) === '\\') {
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
          if (exec$3(IS_NCG, stringSlice$6(string, index + 1))) {
            index += 2;
            ncg = true;
            groupid++;
          } else if (charAt$2(string, index + 1) !== '?') {
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
        result = replace$4(result, backref, numRef);
      }
    }
    return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced$3('RegExp', BASE_FORCED)) {
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
      pattern = pattern === undefined ? '' : toString$8(pattern);
      flags = flags === undefined ? '' : toString$8(flags);
      rawPattern = pattern;
      if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
        if (dotAll) flags = replace$4(flags, /s/g, '');
      }
      rawFlags = flags;
      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y$1) flags = replace$4(flags, /y/g, '');
      }
      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }
      result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
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
    defineBuiltIn$7(globalThis$e, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies$1('RegExp');

  var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
  var defineBuiltIn$6 = require('../internals/define-built-in');
  var anObject$8 = require('../internals/an-object');
  var $toString$2 = require('../internals/to-string');
  var fails$d = require('../internals/fails');
  var getRegExpFlags$2 = require('../internals/regexp-get-flags');
  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails$d(function () {
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
    defineBuiltIn$6(RegExpPrototype, TO_STRING, function toString() {
      var R = anObject$8(this);
      var pattern = $toString$2(R.source);
      var flags = $toString$2(getRegExpFlags$2(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var uncurryThis$h = require('../internals/function-uncurry-this');
  var id$1 = 0;
  var postfix = Math.random();
  var toString$7 = uncurryThis$h(1.1.toString);
  module.exports = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id$1 + postfix, 36);
  };

  var uid$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(uid$3);

  var es_symbol = {};

  // `Symbol.prototype.description` getter
  var $$k = require('../internals/export');
  var DESCRIPTORS$8 = require('../internals/descriptors');
  var globalThis$d = require('../internals/global-this');
  var call$9 = require('../internals/function-call');
  var uncurryThis$g = require('../internals/function-uncurry-this');
  var hasOwn$6 = require('../internals/has-own-property');
  var isCallable$c = require('../internals/is-callable');
  var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
  var toString$6 = require('../internals/to-string');
  var defineBuiltInAccessor$3 = require('../internals/define-built-in-accessor');
  var copyConstructorProperties$1 = require('../internals/copy-constructor-properties');
  var NativeSymbol = globalThis$d.Symbol;
  var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
  if (DESCRIPTORS$8 && isCallable$c(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function _Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$6(arguments[0]);
      var result = isPrototypeOf$4(SymbolPrototype$1, this)
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
        var stringKey = toString$6(key);
        var symbol = call$9(nativeFor, this, stringKey);
        if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
        return symbol;
      }
    }['for'];
    SymbolWrapper.prototype = SymbolPrototype$1;
    SymbolPrototype$1.constructor = SymbolWrapper;
    var NATIVE_SYMBOL$3 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
    var thisSymbolValue = uncurryThis$g(SymbolPrototype$1.valueOf);
    var symbolDescriptiveString = uncurryThis$g(SymbolPrototype$1.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$3 = uncurryThis$g(''.replace);
    var stringSlice$5 = uncurryThis$g(''.slice);
    defineBuiltInAccessor$3(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        var symbol = thisSymbolValue(this);
        if (hasOwn$6(EmptyStringDescriptionStore, symbol)) return '';
        var string = symbolDescriptiveString(symbol);
        var desc = NATIVE_SYMBOL$3 ? stringSlice$5(string, 7, -1) : replace$3(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$k({
      global: true,
      constructor: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  var globalThis$c = require('../internals/global-this');
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
      handlePrototype$1(globalThis$c[COLLECTION_NAME$1] && globalThis$c[COLLECTION_NAME$1].prototype);
    }
  }
  handlePrototype$1(DOMTokenListPrototype$1);

  var $$j = require('../internals/export');
  var globalThis$b = require('../internals/global-this');
  var call$8 = require('../internals/function-call');
  var uncurryThis$f = require('../internals/function-uncurry-this');
  var IS_PURE$4 = require('../internals/is-pure');
  var DESCRIPTORS$7 = require('../internals/descriptors');
  var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
  var fails$c = require('../internals/fails');
  var hasOwn$5 = require('../internals/has-own-property');
  var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
  var anObject$7 = require('../internals/an-object');
  var toIndexedObject$2 = require('../internals/to-indexed-object');
  var toPropertyKey$2 = require('../internals/to-property-key');
  var $toString$1 = require('../internals/to-string');
  var createPropertyDescriptor$3 = require('../internals/create-property-descriptor');
  var nativeObjectCreate = require('../internals/object-create');
  var objectKeys$1 = require('../internals/object-keys');
  var getOwnPropertyNamesModule$1 = require('../internals/object-get-own-property-names');
  var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
  var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
  var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
  var definePropertyModule = require('../internals/object-define-property');
  var definePropertiesModule = require('../internals/object-define-properties');
  var propertyIsEnumerableModule$1 = require('../internals/object-property-is-enumerable');
  var defineBuiltIn$5 = require('../internals/define-built-in');
  var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor');
  var shared = require('../internals/shared');
  var sharedKey$1 = require('../internals/shared-key');
  var hiddenKeys$2 = require('../internals/hidden-keys');
  var uid$2 = require('../internals/uid');
  var wellKnownSymbol$6 = require('../internals/well-known-symbol');
  var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
  var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
  var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
  var setToStringTag$5 = require('../internals/set-to-string-tag');
  var InternalStateModule$2 = require('../internals/internal-state');
  var $forEach = require('../internals/array-iteration').forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var setInternalState$1 = InternalStateModule$2.set;
  var getInternalState$1 = InternalStateModule$2.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = globalThis$b.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var RangeError$1 = globalThis$b.RangeError;
  var TypeError$3 = globalThis$b.TypeError;
  var QObject = globalThis$b.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$4 = uncurryThis$f([].push);
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
  var setSymbolDescriptor = DESCRIPTORS$7 && fails$c(function () {
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
    setInternalState$1(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$7) symbol.description = description;
    return symbol;
  };
  var $defineProperty$1 = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
    anObject$7(O);
    var key = toPropertyKey$2(P);
    anObject$7(Attributes);
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
    anObject$7(O);
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
      if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys$2, key)) push$4(result, key);
    });
    return result;
  };
  var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
    var result = [];
    $forEach(names, function (key) {
      if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype, key))) {
        push$4(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$2) {
    $Symbol = function _Symbol() {
      if (isPrototypeOf$3(SymbolPrototype, this)) throw new TypeError$3('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$1(arguments[0]);
      var tag = uid$2(description);
      var _setter = function setter(value) {
        var $this = this === undefined ? globalThis$b : this;
        if ($this === ObjectPrototype) call$8(_setter, ObjectPrototypeSymbols, value);
        if (hasOwn$5($this, HIDDEN) && hasOwn$5($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
        var descriptor = createPropertyDescriptor$3(1, value);
        try {
          setSymbolDescriptor($this, tag, descriptor);
        } catch (error) {
          if (!(error instanceof RangeError$1)) throw error;
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
    defineBuiltIn$5(SymbolPrototype, 'toString', function toString() {
      return getInternalState$1(this).tag;
    });
    defineBuiltIn$5($Symbol, 'withoutSetter', function (description) {
      return wrap(uid$2(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty$1;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$2;
    getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$6(name), name);
    };
    if (DESCRIPTORS$7) {
      // https://tc39.es/ecma262/#sec-symbol.prototype.description
      defineBuiltInAccessor$2(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$1(this).description;
        }
      });
      if (!IS_PURE$4) {
        defineBuiltIn$5(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }
  $$j({
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
  $$j({
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
  $$j({
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
  $$j({
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
  setToStringTag$5($Symbol, SYMBOL);
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

  var isCallable$b = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$5$4 = /*@__PURE__*/getAugmentedNamespace(isCallable$b);

  var getBuiltIn$5;
  var hasRequiredGetBuiltIn;

  function requireGetBuiltIn () {
  	if (hasRequiredGetBuiltIn) return getBuiltIn$5;
  	hasRequiredGetBuiltIn = 1;

  	var globalThis = require$$3$3;
  	var isCallable = require$$5$4;
  	var aFunction = function aFunction(argument) {
  	  return isCallable(argument) ? argument : undefined;
  	};
  	getBuiltIn$5 = function (namespace, method) {
  	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  	};
  	return getBuiltIn$5;
  }

  var uncurryThis$e = require('../internals/function-uncurry-this');
  var toString$5 = uncurryThis$e({}.toString);
  var stringSlice$4 = uncurryThis$e(''.slice);
  module.exports = function (it) {
    return stringSlice$4(toString$5(it), 8, -1);
  };

  var classofRaw = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$6 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

  var classof$6;
  var hasRequiredClassof;

  function requireClassof () {
  	if (hasRequiredClassof) return classof$6;
  	hasRequiredClassof = 1;

  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var isCallable = require$$5$4;
  	var classofRaw = require$$1$6;
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
  	classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  	  var O, tag, result;
  	  return it === undefined ? 'Undefined' : it === null ? 'Null'
  	  // @@toStringTag case
  	  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  	  // builtinTag case
  	  : CORRECT_ARGUMENTS ? classofRaw(O)
  	  // ES3 arguments fallback
  	  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  	};
  	return classof$6;
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

  	var $ = require$$0$7;
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
  var isCallable$a = require('../internals/is-callable');
  var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
  var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
  var $Object$1 = Object;
  module.exports = USE_SYMBOL_AS_UID ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$4('Symbol');
    return isCallable$a($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$1(it));
  };

  var isSymbol$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$4 = /*@__PURE__*/getAugmentedNamespace(isSymbol$2);

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

  	var $ = require$$0$7;
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

  var $$i = require('../internals/export');
  var getBuiltIn$3 = require('../internals/get-built-in');
  var apply$1 = require('../internals/function-apply');
  var call$7 = require('../internals/function-call');
  var uncurryThis$d = require('../internals/function-uncurry-this');
  var fails$b = require('../internals/fails');
  var isArray$2 = require('../internals/is-array');
  var isCallable$9 = require('../internals/is-callable');
  var isRawJSON = require('../internals/is-raw-json');
  var isSymbol$1 = require('../internals/is-symbol');
  var classof$5 = require('../internals/classof-raw');
  var toString$3 = require('../internals/to-string');
  var arraySlice$1 = require('../internals/array-slice');
  var parseJSONString = require('../internals/parse-json-string');
  var uid$1 = require('../internals/uid');
  var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
  var NATIVE_RAW_JSON = require('../internals/native-raw-json');
  var $String$2 = String;
  var $stringify = getBuiltIn$3('JSON', 'stringify');
  var exec$2 = uncurryThis$d(/./.exec);
  var charAt$1 = uncurryThis$d(''.charAt);
  var charCodeAt$1 = uncurryThis$d(''.charCodeAt);
  var replace$2 = uncurryThis$d(''.replace);
  var slice = uncurryThis$d(''.slice);
  var push$3 = uncurryThis$d([].push);
  var numberToString = uncurryThis$d(1.1.toString);
  var surrogates = /[\uD800-\uDFFF]/g;
  var leadingSurrogates = /^[\uD800-\uDBFF]$/;
  var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
  var MARK = uid$1();
  var MARK_LENGTH = MARK.length;
  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$b(function () {
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
  var ILL_FORMED_UNICODE = fails$b(function () {
    return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
  });
  var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
    var args = arraySlice$1(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$9($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$9($replacer)) value = call$7($replacer, this, $String$2(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$1($stringify, null, args);
  } : $stringify;
  var fixIllFormedJSON = function fixIllFormedJSON(match, offset, string) {
    var prev = charAt$1(string, offset - 1);
    var next = charAt$1(string, offset + 1);
    if (exec$2(leadingSurrogates, match) && !exec$2(trailingSurrogates, next) || exec$2(trailingSurrogates, match) && !exec$2(leadingSurrogates, prev)) {
      return "\\u" + numberToString(charCodeAt$1(match, 0), 16);
    }
    return match;
  };
  var getReplacerFunction = function getReplacerFunction(replacer) {
    if (isCallable$9(replacer)) return replacer;
    if (!isArray$2(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$3(keys, element);else if (typeof element == 'number' || classof$5(element) === 'Number' || classof$5(element) === 'String') push$3(keys, toString$3(element));
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
  if ($stringify) $$i({
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
        var v = isCallable$9(replacerFunction) ? call$7(replacerFunction, this, $String$2(key), value) : value;
        return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push$3(rawStrings, v.rawJSON) - 1) : v;
      }, space);
      if (typeof json != 'string') return json;
      if (ILL_FORMED_UNICODE) json = replace$2(json, surrogates, fixIllFormedJSON);
      if (NATIVE_RAW_JSON) return json;
      var result = '';
      var length = json.length;
      for (var i = 0; i < length; i++) {
        var chr = charAt$1(json, i);
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

  	var $ = require$$0$7;
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
  var fails$a = require('../internals/fails');
  var globalThis$a = require('../internals/global-this');
  var $String$1 = globalThis$a.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  module.exports = !!Object.getOwnPropertySymbols && !fails$a(function () {
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

  var path$1;
  var hasRequiredPath;

  function requirePath () {
  	if (hasRequiredPath) return path$1;
  	hasRequiredPath = 1;

  	var globalThis = require$$3$3;
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
  var uncurryThis$c = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$6 = require('../internals/an-object');
  var isObject$5 = require('../internals/is-object');
  var requireObjectCoercible$1 = require('../internals/require-object-coercible');
  var speciesConstructor$2 = require('../internals/species-constructor');
  var advanceStringIndex$1 = require('../internals/advance-string-index');
  var toLength$2 = require('../internals/to-length');
  var toString$2 = require('../internals/to-string');
  var getMethod$1 = require('../internals/get-method');
  var getRegExpFlags$1 = require('../internals/regexp-get-flags');
  var regExpExec$1 = require('../internals/regexp-exec-abstract');
  var stickyHelpers = require('../internals/regexp-sticky-helpers');
  var fails$9 = require('../internals/fails');
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min = Math.min;
  var push$2 = uncurryThis$c([].push);
  var stringSlice$3 = uncurryThis$c(''.slice);
  var stringIndexOf$1 = uncurryThis$c(''.indexOf);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$9(function () {
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
      return separator === undefined && limit === 0 ? [] : call$6(nativeSplit, this, separator, limit);
    } : nativeSplit;
    return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$1(this);
      var splitter = isObject$5(separator) ? getMethod$1(separator, SPLIT) : undefined;
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
      if (S.length === 0) return regExpExec$1(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec$1(splitter, UNSUPPORTED_Y ? stringSlice$3(S, q) : S);
        var e;
        if (z === null || (e = min(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          push$2(A, stringSlice$3(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$2(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$2(A, stringSlice$3(S, p));
      return A;
    }];
  }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var uncurryThis$b = require('../internals/function-uncurry-this');
  var fails$8 = require('../internals/fails');
  var classof$4 = require('../internals/classof-raw');
  var $Object = Object;
  var split$1 = uncurryThis$b(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  module.exports = fails$8(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$4(it) === 'String' ? split$1(it, '') : $Object(it);
  } : $Object;

  var indexedObject = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

  var toIndexedObject$1;
  var hasRequiredToIndexedObject;

  function requireToIndexedObject () {
  	if (hasRequiredToIndexedObject) return toIndexedObject$1;
  	hasRequiredToIndexedObject = 1;

  	// toObject with fallback for non-array-like ES3 strings
  	var IndexedObject = require$$2$3;
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

  var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertyDescriptor);

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

  	var $ = require$$0$7;
  	var fails = requireFails();
  	var toIndexedObject = requireToIndexedObject();
  	var nativeGetOwnPropertyDescriptor = require$$2$2.f;
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
  exports.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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

  var require$$1$5 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

  var wellKnownSymbolDefine;
  var hasRequiredWellKnownSymbolDefine;

  function requireWellKnownSymbolDefine () {
  	if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
  	hasRequiredWellKnownSymbolDefine = 1;

  	var path = requirePath();
  	var hasOwn = requireHasOwnProperty();
  	var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
  	var defineProperty = require$$1$5.f;
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

  var isCallable$8 = require('../internals/is-callable');
  module.exports = function (it) {
    return _typeof(it) == 'object' ? it !== null : isCallable$8(it);
  };

  var isObject$4 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(isObject$4);

  var anObject$4;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject$4;
  	hasRequiredAnObject = 1;

  	var isObject = require$$0$6;
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

  	var $ = require$$0$7;
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
  	var definePropertyModule = require$$1$5;
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
  	var isObject = require$$0$6;
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

  var addToUnscopables$2;
  var hasRequiredAddToUnscopables;

  function requireAddToUnscopables () {
  	if (hasRequiredAddToUnscopables) return addToUnscopables$2;
  	hasRequiredAddToUnscopables = 1;

  	var wellKnownSymbol = requireWellKnownSymbol();
  	var create = requireObjectCreate();
  	var defineProperty = require$$1$5.f;
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

  var globalThis$9 = require('../internals/global-this');
  var isCallable$7 = require('../internals/is-callable');
  var WeakMap = globalThis$9.WeakMap;
  module.exports = isCallable$7(WeakMap) && /native code/.test(String(WeakMap));

  var weakMapBasicDetection = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(weakMapBasicDetection);

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
  	var definePropertyModule = require$$1$5;
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
  	var isObject = require$$0$6;
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

  var globalThis$8 = require('../internals/global-this');
  var DOMIterables = require('../internals/dom-iterables');
  var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
  var ArrayIteratorMethods = require('../modules/es.array.iterator');
  var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');
  var setToStringTag$4 = require('../internals/set-to-string-tag');
  var wellKnownSymbol$5 = require('../internals/well-known-symbol');
  var ITERATOR$3 = wellKnownSymbol$5('iterator');
  var ArrayValues = ArrayIteratorMethods.values;
  var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
        createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$3, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$3] = ArrayValues;
      }
      setToStringTag$4(CollectionPrototype, COLLECTION_NAME, true);
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
    handlePrototype(globalThis$8[COLLECTION_NAME] && globalThis$8[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }
  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var $$h = require('../internals/export');
  var call$4 = require('../internals/function-call');
  var IS_PURE$3 = require('../internals/is-pure');
  var FunctionName = require('../internals/function-name');
  var isCallable$6 = require('../internals/is-callable');
  var createIteratorConstructor$1 = require('../internals/iterator-create-constructor');
  var getPrototypeOf = require('../internals/object-get-prototype-of');
  var setPrototypeOf = require('../internals/object-set-prototype-of');
  var setToStringTag$3 = require('../internals/set-to-string-tag');
  var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
  var defineBuiltIn$4 = require('../internals/define-built-in');
  var wellKnownSymbol$4 = require('../internals/well-known-symbol');
  var Iterators = require('../internals/iterators');
  var IteratorsCore = require('../internals/iterators-core');
  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$2 = wellKnownSymbol$4('iterator');
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
    var nativeIterator = IterablePrototype[ITERATOR$2] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (!IS_PURE$3 && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf) {
            setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$6(CurrentIteratorPrototype[ITERATOR$2])) {
            defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR$2, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        if (IS_PURE$3) Iterators[TO_STRING_TAG] = returnThis;
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (!IS_PURE$3 && CONFIGURABLE_FUNCTION_NAME$1) {
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
          defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$h({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    // define iterator
    if ((!IS_PURE$3 || FORCED) && IterablePrototype[ITERATOR$2] !== defaultIterator) {
      defineBuiltIn$4(IterablePrototype, ITERATOR$2, defaultIterator, {
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
  	var defineProperty = require$$1$5.f;
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

  	var $ = require$$0$7;
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

  var wellKnownSymbol$3;
  var hasRequiredWellKnownSymbol;

  function requireWellKnownSymbol () {
  	if (hasRequiredWellKnownSymbol) return wellKnownSymbol$3;
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
  	wellKnownSymbol$3 = function (name) {
  	  if (!hasOwn(WellKnownSymbolsStore, name)) {
  	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
  	  }
  	  return WellKnownSymbolsStore[name];
  	};
  	return wellKnownSymbol$3;
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

  var uncurryThis$a = require('../internals/function-uncurry-this');
  var fails$7 = require('../internals/fails');
  var isCallable$5 = require('../internals/is-callable');
  var hasOwn$3 = require('../internals/has-own-property');
  var DESCRIPTORS$4 = require('../internals/descriptors');
  var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
  var inspectSource$2 = require('../internals/inspect-source');
  var InternalStateModule$1 = require('../internals/internal-state');
  var enforceInternalState = InternalStateModule$1.enforce;
  var getInternalState = InternalStateModule$1.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;
  var stringSlice$2 = uncurryThis$a(''.slice);
  var replace$1 = uncurryThis$a(''.replace);
  var join$1 = uncurryThis$a([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$7(function () {
    return defineProperty$2(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn = module.exports = function (value, name, options) {
    if (stringSlice$2($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$1($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$3(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS$4) defineProperty$2(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
      defineProperty$2(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn$3(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$4) defineProperty$2(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwn$3(state, 'source')) {
      state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable$5(this) && getInternalState(this).source || inspectSource$2(this);
  }, 'toString');

  var makeBuiltIn$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(makeBuiltIn$1);

  var defineBuiltIn$3;
  var hasRequiredDefineBuiltIn;

  function requireDefineBuiltIn () {
  	if (hasRequiredDefineBuiltIn) return defineBuiltIn$3;
  	hasRequiredDefineBuiltIn = 1;

  	var isCallable = require$$5$4;
  	var definePropertyModule = require$$1$5;
  	var makeBuiltIn = require$$0$3;
  	var defineGlobalProperty = requireDefineGlobalProperty();
  	defineBuiltIn$3 = function (O, key, value, options) {
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
  	return defineBuiltIn$3;
  }

  var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
  var classof$3 = require('../internals/classof');

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
    return '[object ' + classof$3(this) + ']';
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

  var $$g = require('../internals/export');
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
  $$g({
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

  var $$f = require('../internals/export');
  var $filter = require('../internals/array-iteration').filter;
  var arrayMethodHasSpeciesSupport$2 = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$f({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$e = require('../internals/export');
  var uncurryThis$9 = require('../internals/function-uncurry-this-clause');
  var $indexOf = require('../internals/array-includes').indexOf;
  var arrayMethodIsStrict$2 = require('../internals/array-method-is-strict');
  var nativeIndexOf = uncurryThis$9([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$2('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$e({
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

  var $$d = require('../internals/export');
  var $map = require('../internals/array-iteration').map;
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$d({
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

  	var classof = require$$1$6;

  	// `IsArray` abstract operation
  	// https://tc39.es/ecma262/#sec-isarray
  	// eslint-disable-next-line es/no-array-isarray -- safe
  	isArray$1 = Array.isArray || function isArray(argument) {
  	  return classof(argument) === 'Array';
  	};
  	return isArray$1;
  }

  var uncurryThis$8 = require('../internals/function-uncurry-this');
  var fails$6 = require('../internals/fails');
  var isCallable$4 = require('../internals/is-callable');
  var classof$2 = require('../internals/classof');
  var getBuiltIn$2 = require('../internals/get-built-in');
  var inspectSource$1 = require('../internals/inspect-source');
  var noop = function noop() {/* empty */};
  var construct = getBuiltIn$2('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$8(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$4(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$4(argument)) return false;
    switch (classof$2(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  module.exports = !construct || fails$6(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isConstructor = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$4 = /*@__PURE__*/getAugmentedNamespace(isConstructor);

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
  	var definePropertyModule = require$$1$5;
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	createProperty = function (object, key, value) {
  	  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
  	};
  	return createProperty;
  }

  var DESCRIPTORS$3 = require('../internals/descriptors');
  var isArray = require('../internals/is-array');
  var $TypeError$1 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

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
    if (isArray(O) && !getOwnPropertyDescriptor$2(O, 'length').writable) {
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

  var call$3 = require('../internals/function-call');
  var uncurryThis$7 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$3 = require('../internals/an-object');
  var isObject$3 = require('../internals/is-object');
  var toLength = require('../internals/to-length');
  var toString$1 = require('../internals/to-string');
  var requireObjectCoercible = require('../internals/require-object-coercible');
  var getMethod = require('../internals/get-method');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getRegExpFlags = require('../internals/regexp-get-flags');
  var regExpExec = require('../internals/regexp-exec-abstract');
  var stringIndexOf = uncurryThis$7(''.indexOf);

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isObject$3(regexp) ? getMethod(regexp, MATCH) : undefined;
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

  var globalThis$7 = require('../internals/global-this');
  var userAgent$5 = require('../internals/environment-user-agent');
  var process = globalThis$7.process;
  var Deno$1 = globalThis$7.Deno;
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

  var require$$3 = /*@__PURE__*/getAugmentedNamespace(environmentV8Version);

  var arrayMethodHasSpeciesSupport;
  var hasRequiredArrayMethodHasSpeciesSupport;

  function requireArrayMethodHasSpeciesSupport () {
  	if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport;
  	hasRequiredArrayMethodHasSpeciesSupport = 1;

  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var V8_VERSION = require$$3;
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

  var uncurryThis$6 = require('../internals/function-uncurry-this');
  module.exports = uncurryThis$6([].slice);

  var arraySlice = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$7$1 = /*@__PURE__*/getAugmentedNamespace(arraySlice);

  var hasRequiredEs_array_slice;

  function requireEs_array_slice () {
  	if (hasRequiredEs_array_slice) return es_array_slice;
  	hasRequiredEs_array_slice = 1;

  	var $ = require$$0$7;
  	var isArray = requireIsArray();
  	var isConstructor = require$$1$4;
  	var isObject = require$$0$6;
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

  var $$c = require('../internals/export');
  var uncurryThis$5 = require('../internals/function-uncurry-this');
  var aCallable$3 = require('../internals/a-callable');
  var toObject = require('../internals/to-object');
  var lengthOfArrayLike$1 = require('../internals/length-of-array-like');
  var deletePropertyOrThrow$1 = require('../internals/delete-property-or-throw');
  var toString = require('../internals/to-string');
  var fails$5 = require('../internals/fails');
  var internalSort = require('../internals/array-sort');
  var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
  var FF = require('../internals/environment-ff-version');
  var IE_OR_EDGE = require('../internals/environment-is-ie-or-edge');
  var V8 = require('../internals/environment-v8-version');
  var WEBKIT = require('../internals/environment-webkit-version');
  var test = [];
  var nativeSort = uncurryThis$5(test.sort);
  var push$1 = uncurryThis$5(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$5(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$5(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict$1('sort');
  var STABLE_SORT = !fails$5(function () {
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
  $$c({
    target: 'Array',
    proto: true,
    forced: FORCED$1
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$3(comparefn);
      var array = toObject(this);
      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike$1(array);
      var itemsLength, index;
      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$1(items, array[index]);
      }
      internalSort(items, getSortCompare(comparefn));
      itemsLength = lengthOfArrayLike$1(items);
      index = 0;
      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow$1(array, index++);
      return array;
    }
  });

  var $$b = require('../internals/export');
  var $trim = require('../internals/string-trim').trim;
  var forcedStringTrimMethod = require('../internals/string-trim-forced');

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$b({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $$a = require('../internals/export');
  var IS_PURE$2 = require('../internals/is-pure');
  var DESCRIPTORS$2 = require('../internals/descriptors');
  var globalThis$6 = require('../internals/global-this');
  var path = require('../internals/path');
  var uncurryThis$4 = require('../internals/function-uncurry-this');
  var isForced$2 = require('../internals/is-forced');
  var hasOwn$2 = require('../internals/has-own-property');
  var inheritIfRequired$1 = require('../internals/inherit-if-required');
  var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
  var isSymbol = require('../internals/is-symbol');
  var toPrimitive = require('../internals/to-primitive');
  var fails$4 = require('../internals/fails');
  var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
  var getOwnPropertyDescriptor$1 = require('../internals/object-get-own-property-descriptor').f;
  var defineProperty$1 = require('../internals/object-define-property').f;
  var thisNumberValue = require('../internals/this-number-value');
  var trim = require('../internals/string-trim').trim;
  var NUMBER = 'Number';
  var NativeNumber = globalThis$6[NUMBER];
  var PureNumberNamespace = path[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$2 = globalThis$6.TypeError;
  var stringSlice$1 = uncurryThis$4(''.slice);
  var charCodeAt = uncurryThis$4(''.charCodeAt);

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
    if (isSymbol(it)) throw new TypeError$2('Cannot convert a Symbol value to a number');
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
        digits = stringSlice$1(it, 2);
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
  var FORCED = isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));
  var calledWithNew = function calledWithNew(dummy) {
    // includes check on 1..constructor(foo) case
    return isPrototypeOf$1(NumberPrototype, dummy) && fails$4(function () {
      thisNumberValue(dummy);
    });
  };

  // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    return calledWithNew(this) ? inheritIfRequired$1(Object(n), this, NumberWrapper) : n;
  };
  NumberWrapper.prototype = NumberPrototype;
  if (FORCED && !IS_PURE$2) NumberPrototype.constructor = NumberWrapper;
  $$a({
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
        defineProperty$1(target, key, getOwnPropertyDescriptor$1(source, key));
      }
    }
  };
  if (IS_PURE$2 && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
  if (FORCED || IS_PURE$2) copyConstructorProperties(path[NUMBER], NativeNumber);

  var es_promise = {};

  var es_promise_constructor = {};

  var globalThis$5 = require('../internals/global-this');
  var userAgent$4 = require('../internals/environment-user-agent');
  var classof$1 = require('../internals/classof-raw');
  var userAgentStartsWith = function userAgentStartsWith(string) {
    return userAgent$4.slice(0, string.length) === string;
  };
  module.exports = function () {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis$5.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis$5.Deno && _typeof(Deno.version) == 'object') return 'DENO';
    if (classof$1(globalThis$5.process) === 'process') return 'NODE';
    if (globalThis$5.window && globalThis$5.document) return 'BROWSER';
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

  var uncurryThis$3 = require('../internals/function-uncurry-this');
  var aCallable$2 = require('../internals/a-callable');
  module.exports = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$3(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
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

  	var isObject = require$$0$6;
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
  	var isObject = require$$0$6;
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

  var setToStringTag$2;
  var hasRequiredSetToStringTag;

  function requireSetToStringTag () {
  	if (hasRequiredSetToStringTag) return setToStringTag$2;
  	hasRequiredSetToStringTag = 1;

  	var defineProperty = require$$1$5.f;
  	var hasOwn = requireHasOwnProperty();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	setToStringTag$2 = function (target, TAG, STATIC) {
  	  if (target && !STATIC) target = target.prototype;
  	  if (target && !hasOwn(target, TO_STRING_TAG)) {
  	    defineProperty(target, TO_STRING_TAG, {
  	      configurable: true,
  	      value: TAG
  	    });
  	  }
  	};
  	return setToStringTag$2;
  }

  var defineBuiltInAccessor$1;
  var hasRequiredDefineBuiltInAccessor;

  function requireDefineBuiltInAccessor () {
  	if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor$1;
  	hasRequiredDefineBuiltInAccessor = 1;

  	var makeBuiltIn = require$$0$3;
  	var defineProperty = require$$1$5;
  	defineBuiltInAccessor$1 = function (target, name, descriptor) {
  	  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
  	    getter: true
  	  });
  	  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
  	    setter: true
  	  });
  	  return defineProperty.f(target, name, descriptor);
  	};
  	return defineBuiltInAccessor$1;
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

  var anInstance$2;
  var hasRequiredAnInstance;

  function requireAnInstance () {
  	if (hasRequiredAnInstance) return anInstance$2;
  	hasRequiredAnInstance = 1;

  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var $TypeError = TypeError;
  	anInstance$2 = function (it, Prototype) {
  	  if (isPrototypeOf(Prototype, it)) return it;
  	  throw new $TypeError('Incorrect invocation');
  	};
  	return anInstance$2;
  }

  var aConstructor;
  var hasRequiredAConstructor;

  function requireAConstructor () {
  	if (hasRequiredAConstructor) return aConstructor;
  	hasRequiredAConstructor = 1;

  	var isConstructor = require$$1$4;
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

  var $$9 = require('../internals/export');
  var functionApply$1 = require('../internals/function-apply');
  var aCallable = require('../internals/a-callable');
  var anObject$2 = require('../internals/an-object');
  var fails$3 = require('../internals/fails');

  // MS Edge argumentsList argument is optional
  var OPTIONAL_ARGUMENTS_LIST = !fails$3(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.apply(function () {/* empty */});
  });

  // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply
  $$9({
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

  var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(functionApply);

  var functionUncurryThisClause;
  var hasRequiredFunctionUncurryThisClause;

  function requireFunctionUncurryThisClause () {
  	if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  	hasRequiredFunctionUncurryThisClause = 1;

  	var classofRaw = require$$1$6;
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

  var validateArgumentsLength$1;
  var hasRequiredValidateArgumentsLength;

  function requireValidateArgumentsLength () {
  	if (hasRequiredValidateArgumentsLength) return validateArgumentsLength$1;
  	hasRequiredValidateArgumentsLength = 1;

  	var $TypeError = TypeError;
  	validateArgumentsLength$1 = function (passed, required) {
  	  if (passed < required) throw new $TypeError('Not enough arguments');
  	  return passed;
  	};
  	return validateArgumentsLength$1;
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

  	var globalThis = require$$3$3;
  	var apply = require$$1$3;
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

  var globalThis$4 = require('../internals/global-this');
  var DESCRIPTORS$1 = require('../internals/descriptors');

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  module.exports = function (name) {
    if (!DESCRIPTORS$1) return globalThis$4[name];
    var descriptor = getOwnPropertyDescriptor(globalThis$4, name);
    return descriptor && descriptor.value;
  };

  var safeGetBuiltIn$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(safeGetBuiltIn$1);

  var queue$1;
  var hasRequiredQueue;

  function requireQueue () {
  	if (hasRequiredQueue) return queue$1;
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
  	queue$1 = Queue;
  	return queue$1;
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

  	var globalThis = require$$3$3;
  	var safeGetBuiltIn = require$$1$2;
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

  	var globalThis = require$$3$3;
  	promiseNativeConstructor = globalThis.Promise;
  	return promiseNativeConstructor;
  }

  var $$8 = require('../internals/export');
  var IS_PURE$1 = require('../internals/is-pure');
  var NativePromiseConstructor$1 = require('../internals/promise-native-constructor');
  var fails$2 = require('../internals/fails');
  var getBuiltIn$1 = require('../internals/get-built-in');
  var isCallable$3 = require('../internals/is-callable');
  var speciesConstructor = require('../internals/species-constructor');
  var promiseResolve$1 = require('../internals/promise-resolve');
  var defineBuiltIn$2 = require('../internals/define-built-in');
  var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor$1 && fails$2(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype$1['finally'].call({
      then: function then() {/* empty */}
    }, function () {/* empty */});
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$8({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor(this, getBuiltIn$1('Promise'));
      var isFunction = isCallable$3(onFinally);
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
  if (!IS_PURE$1 && isCallable$3(NativePromiseConstructor$1)) {
    var method = getBuiltIn$1('Promise').prototype['finally'];
    if (NativePromisePrototype$1['finally'] !== method) {
      defineBuiltIn$2(NativePromisePrototype$1, 'finally', method, {
        unsafe: true
      });
    }
  }

  var globalThis$3 = require('../internals/global-this');
  var NativePromiseConstructor = require('../internals/promise-native-constructor');
  var isCallable$2 = require('../internals/is-callable');
  var isForced$1 = require('../internals/is-forced');
  var inspectSource = require('../internals/inspect-source');
  var wellKnownSymbol$2 = require('../internals/well-known-symbol');
  var ENVIRONMENT = require('../internals/environment');
  var IS_PURE = require('../internals/is-pure');
  var V8_VERSION = require('../internals/environment-v8-version');
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  var SPECIES = wellKnownSymbol$2('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT = isCallable$2(globalThis$3.PromiseRejectionEvent);
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

  	var $ = require$$0$7;
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
  	var isObject = require$$0$6;
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

  var bind$1 = require('../internals/function-bind-context');
  var call$1 = require('../internals/function-call');
  var anObject$1 = require('../internals/an-object');
  var tryToString = require('../internals/try-to-string');
  var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
  var lengthOfArrayLike = require('../internals/length-of-array-like');
  var isPrototypeOf = require('../internals/object-is-prototype-of');
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
    var fn = bind$1(unboundFunction, that);
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
      iterFn = getIteratorMethod$1(iterable);
      if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator$1(iterable, iterFn);
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

  var iterate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(iterate$1);

  var $$7 = require('../internals/export');
  var from = require('../internals/array-from');
  var checkCorrectnessOfIteration$2 = require('../internals/check-correctness-of-iteration');
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$2(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$7({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    from: from
  });

  var wellKnownSymbol$1 = require('../internals/well-known-symbol');
  var ITERATOR$1 = wellKnownSymbol$1('iterator');
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
    iteratorWithReturn[ITERATOR$1] = function () {
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
      object[ITERATOR$1] = function () {
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

  	var $ = require$$0$7;
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = require$$1$1;
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

  	var $ = require$$0$7;
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

  	var $ = require$$0$7;
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = require$$1$1;
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

  	var $ = require$$0$7;
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
  	var isObject = require$$0$6;
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

  	var $ = require$$0$7;
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

  var es_set = {};

  var es_set_constructor = {};

  var $$6 = require('../internals/export');
  var globalThis$2 = require('../internals/global-this');
  var uncurryThis$2 = require('../internals/function-uncurry-this');
  var isForced = require('../internals/is-forced');
  var defineBuiltIn$1 = require('../internals/define-built-in');
  var InternalMetadataModule = require('../internals/internal-metadata');
  var iterate = require('../internals/iterate');
  var anInstance$1 = require('../internals/an-instance');
  var isCallable$1 = require('../internals/is-callable');
  var isNullOrUndefined = require('../internals/is-null-or-undefined');
  var isObject$2 = require('../internals/is-object');
  var fails$1 = require('../internals/fails');
  var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
  var setToStringTag$1 = require('../internals/set-to-string-tag');
  var inheritIfRequired = require('../internals/inherit-if-required');
  module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = globalThis$2[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = uncurryThis$2(NativePrototype[KEY]);
      defineBuiltIn$1(NativePrototype, KEY, KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject$2(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject$2(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject$2(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };
    var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable$1(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$1(function () {
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
      var THROWS_ON_PRIMITIVES = fails$1(function () {
        instance.has(1);
      });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
        new NativeConstructor(iterable);
      });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$1(function () {
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
    $$6({
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

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(collection);

  var defineBuiltIns$1;
  var hasRequiredDefineBuiltIns;

  function requireDefineBuiltIns () {
  	if (hasRequiredDefineBuiltIns) return defineBuiltIns$1;
  	hasRequiredDefineBuiltIns = 1;

  	var defineBuiltIn = requireDefineBuiltIn();
  	defineBuiltIns$1 = function (target, src, options) {
  	  for (var key in src) defineBuiltIn(target, key, src[key], options);
  	  return target;
  	};
  	return defineBuiltIns$1;
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
  	var isConstructor = require$$1$4;
  	var isObject = require$$0$6;
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

  	var $ = require$$0$7;
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

  var $$5 = require('../internals/export');
  var uncurryThis$1 = require('../internals/function-uncurry-this');
  var hiddenKeys = require('../internals/hidden-keys');
  var isObject$1 = require('../internals/is-object');
  var hasOwn$1 = require('../internals/has-own-property');
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
    if (!isObject$1(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn$1(it, METADATA)) {
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
    if (!hasOwn$1(it, METADATA)) {
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
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$1(it, METADATA)) setMetadata(it);
    return it;
  };
  var enable = function enable() {
    meta.enable = function () {/* empty */};
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$1([].splice);
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
      $$5({
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
  	var iterate = require$$1$1;
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

  var es_string_includes = {};

  var isRegexp;
  var hasRequiredIsRegexp;

  function requireIsRegexp () {
  	if (hasRequiredIsRegexp) return isRegexp;
  	hasRequiredIsRegexp = 1;

  	var isObject = require$$0$6;
  	var classof = require$$1$6;
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

  	var $ = require$$0$7;
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

  var $$4 = require('../internals/export');
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
  $$4({
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

  var es_array_reduce = {};

  var arrayReduce;
  var hasRequiredArrayReduce;

  function requireArrayReduce () {
  	if (hasRequiredArrayReduce) return arrayReduce;
  	hasRequiredArrayReduce = 1;

  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var IndexedObject = require$$2$3;
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

  	var $ = require$$0$7;
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

  var es_map = {};

  var es_map_constructor = {};

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

  var $$3 = require('../internals/export');
  var assign = require('../internals/object-assign');

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$3({
    target: 'Object',
    stat: true,
    arity: 2,
    forced: Object.assign !== assign
  }, {
    assign: assign
  });

  var $$2 = require('../internals/export');
  var $values = require('../internals/object-to-array').values;

  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  $$2({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });

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

  	var $ = require$$0$7;
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

  var es_string_startsWith = {};

  var hasRequiredEs_string_startsWith;

  function requireEs_string_startsWith () {
  	if (hasRequiredEs_string_startsWith) return es_string_startsWith;
  	hasRequiredEs_string_startsWith = 1;

  	var $ = require$$0$7;
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = require$$2$2.f;
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

  var esnext_promise_allSettled = {};

  var es_promise_allSettled = {};

  var hasRequiredEs_promise_allSettled;

  function requireEs_promise_allSettled () {
  	if (hasRequiredEs_promise_allSettled) return es_promise_allSettled;
  	hasRequiredEs_promise_allSettled = 1;

  	var $ = require$$0$7;
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = require$$1$1;
  	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

  	// `Promise.allSettled` method
  	// https://tc39.es/ecma262/#sec-promise.allsettled
  	$({
  	  target: 'Promise',
  	  stat: true,
  	  forced: PROMISE_STATICS_INCORRECT_ITERATION
  	}, {
  	  allSettled: function allSettled(iterable) {
  	    var C = this;
  	    var capability = newPromiseCapabilityModule.f(C);
  	    var resolve = capability.resolve;
  	    var reject = capability.reject;
  	    var result = perform(function () {
  	      var promiseResolve = aCallable(C.resolve);
  	      var values = [];
  	      var counter = 0;
  	      var remaining = 1;
  	      iterate(iterable, function (promise) {
  	        var index = counter++;
  	        var alreadyCalled = false;
  	        remaining++;
  	        call(promiseResolve, C, promise).then(function (value) {
  	          if (alreadyCalled) return;
  	          alreadyCalled = true;
  	          values[index] = {
  	            status: 'fulfilled',
  	            value: value
  	          };
  	          --remaining || resolve(values);
  	        }, function (error) {
  	          if (alreadyCalled) return;
  	          alreadyCalled = true;
  	          values[index] = {
  	            status: 'rejected',
  	            reason: error
  	          };
  	          --remaining || resolve(values);
  	        });
  	      });
  	      --remaining || resolve(values);
  	    });
  	    if (result.error) reject(result.value);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_allSettled;
  }

  var hasRequiredEsnext_promise_allSettled;

  function requireEsnext_promise_allSettled () {
  	if (hasRequiredEsnext_promise_allSettled) return esnext_promise_allSettled;
  	hasRequiredEsnext_promise_allSettled = 1;

  	// TODO: Remove from `core-js@4`
  	requireEs_promise_allSettled();
  	return esnext_promise_allSettled;
  }

  requireEsnext_promise_allSettled();

  require('../modules/es.array.iterator');
  require('../modules/es.string.from-code-point');
  var $$1 = require('../internals/export');
  var globalThis$1 = require('../internals/global-this');
  var safeGetBuiltIn = require('../internals/safe-get-built-in');
  var getBuiltIn = require('../internals/get-built-in');
  var call = require('../internals/function-call');
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
        while (!(step = call(next, iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done) throw new TypeError$1('Expected sequence with length 2');
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
  $$1({
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
      $$1({
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
      $$1({
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
    var words = text.split(' ');
    var lines = [];
    var currentLine = words[0] || '';
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var testLine = currentLine + ' ' + word;
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > width - 40 && currentLine !== '') {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    // Відображення тексту
    var lineHeight = 58;
    var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
    lines.forEach(function (line, index) {
      context.fillText(line, width / 2, startY + index * lineHeight);
    });
    return canvas.toDataURL('image/png');
  }

  var PREFIX = 'TraktTV';
  var onceKeys = new Set();
  function isDebugEnabled() {
    try {
      return !!(typeof Lampa !== 'undefined' && Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function' && Lampa.Storage.field('trakt_enable_logging'));
    } catch (e) {
      return false;
    }
  }
  function write(level, message, meta) {
    var targetLevel = level === 'error' || level === 'warn' || level === 'log' ? level : 'log';
    var writer = typeof console !== 'undefined' && typeof console[targetLevel] === 'function' ? console[targetLevel].bind(console) : typeof console !== 'undefined' && typeof console.log === 'function' ? console.log.bind(console) : null;
    if (!writer) return;
    if (typeof meta === 'undefined') writer(PREFIX, message);else writer(PREFIX, message, meta);
  }
  function debugEnabled() {
    return isDebugEnabled();
  }
  function logWarn(message, meta) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$debugOnly = _ref2.debugOnly,
      debugOnly = _ref2$debugOnly === void 0 ? true : _ref2$debugOnly;
    if (debugOnly && !isDebugEnabled()) return;
    write('warn', message, meta);
  }
  function logError(message, meta) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$debugOnly = _ref3.debugOnly,
      debugOnly = _ref3$debugOnly === void 0 ? false : _ref3$debugOnly;
    if (debugOnly && !isDebugEnabled()) return;
    write('error', message, meta);
  }
  function logDebug(message, meta) {
    if (!isDebugEnabled()) return;
    write('log', message, meta);
  }
  function logDebugOnce(key, message, meta) {
    if (!isDebugEnabled()) return;
    if (!key) return logDebug(message, meta);
    if (onceKeys.has(key)) return;
    onceKeys.add(key);
    write('log', message, meta);
  }

  // ── Environment Detection + Request Routing + CORS Fallback ──────────────
  // Smart TV platforms (Tizen, WebOS) can call api.trakt.tv directly (no CORS).
  // Browser environments must go through a CORS proxy.
  // OAuth paths ALWAYS go through the proxy (client_secret is server-side only).
  // ──────────────────────────────────────────────────────────────────────────

  // ── Base URLs ─────────────────────────────────────────────────────────────

  var PROXY_BASE_URL = 'https://apx.lme.isroot.in/trakt';
  var DIRECT_BASE_URL = 'https://api.trakt.tv';

  // ── Client ID for Direct API Calls ────────────────────────────────────────
  // User-provided Trakt client ID, needed only when calling api.trakt.tv directly.
  // Set at runtime via setClientId() or auto-loaded from Lampa.Storage.

  var TRAKT_CLIENT_ID = '';
  function setClientId(id) {
    if (id && typeof id === 'string' && id.trim()) {
      TRAKT_CLIENT_ID = id.trim();
    }
  }

  // Auto-load from Lampa.Storage if available
  try {
    if (typeof Lampa !== 'undefined' && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
      var storedId = Lampa.Storage.field('trakt_client_id');
      if (storedId) setClientId(storedId);
    }
  } catch (e) {/* noop — runs in non-Lampa context */}

  // ── Environment Detection ─────────────────────────────────────────────────
  // Cached in module-level boolean. Never persisted to storage.

  var _corsFreeDetected = null;

  /**
   * Detect whether the current environment is CORS-free (Smart TV / local).
   * Returns the cached boolean on subsequent calls.
   * @returns {boolean}
   */
  function detectCorsFree() {
    if (_corsFreeDetected !== null) return _corsFreeDetected;
    try {
      // 1. Protocol check — file/widget/local protocols are CORS-free
      var protocol = (window.location.protocol || '').toLowerCase();
      if (protocol === 'file:' || protocol === 'widget:' || protocol === 'local:') {
        _corsFreeDetected = true;
        return true;
      }

      // 2. User-Agent check — Smart TV platforms
      var ua = navigator.userAgent || '';
      if (/LampaApp|Tizen|WebOS|SmartTV/i.test(ua)) {
        _corsFreeDetected = true;
        return true;
      }
    } catch (e) {
      // If detection fails, assume CORS-strict
    }
    _corsFreeDetected = false;
    return false;
  }

  // ── CORS-Free mode flag ───────────────────────────────────────────────────
  // Initialized from environment detection. Set to false on CORS fallback
  // for the rest of the session.

  var corsFreeMode = false;
  (function initCorsFreeMode() {
    corsFreeMode = detectCorsFree();
  })();

  // ── OAuth Path Detection ──────────────────────────────────────────────────
  // OAuth ALWAYS goes through the proxy because the proxy holds the
  // client_secret and refresh token logic server-side.

  /**
   * Check whether a path is an OAuth endpoint.
   * @param {string} path
   * @returns {boolean}
   */
  function isOAuthPath(path) {
    return typeof path === 'string' && path.indexOf('/oauth/') !== -1;
  }

  // ── Base URL Resolution ───────────────────────────────────────────────────

  /**
   * Resolve which base URL to use for a given path.
   * OAuth → proxy (always). CORS-free → direct. Otherwise → proxy.
   * @param {string} path
   * @returns {string}
   */
  function resolveBaseUrl(path) {
    if (isOAuthPath(path)) return PROXY_BASE_URL;
    if (corsFreeMode) return DIRECT_BASE_URL;
    return PROXY_BASE_URL;
  }

  // ── CORS Error Detection ──────────────────────────────────────────────────

  /**
   * Check if an error represents a CORS block or network failure.
   * jQuery ajax gives status 0 for CORS/network errors.
   * TypeError handles native fetch network errors (cross-compatibility).
   * Does NOT match 4xx/5xx — those are legitimate API responses.
   * @param {Error} error
   * @returns {boolean}
   */
  function isCorsOrNetworkError(error) {
    if (!error) return false;
    if (error.status === 0) return true;
    if (error instanceof TypeError) return true;
    return false;
  }

  // ── Response Header Parser ────────────────────────────────────────────────

  /**
   * Parse jQuery XHR response headers into a lowercase-keyed object.
   * Matches the implementation in api.js (lines 1738-1758).
   * @param {jqXHR} jqXHR
   * @returns {Object}
   */
  function parseResponseHeaders(jqXHR) {
    var headers = {};
    if (!jqXHR || typeof jqXHR.getAllResponseHeaders !== 'function') {
      return headers;
    }
    var raw = jqXHR.getAllResponseHeaders();
    if (!raw) return headers;
    raw.trim().split(/[\r\n]+/).forEach(function (line) {
      var separatorIndex = line.indexOf(':');
      if (separatorIndex <= 0) return;
      var key = line.slice(0, separatorIndex).trim().toLowerCase();
      var value = line.slice(separatorIndex + 1).trim();
      if (key) headers[key] = value;
    });
    return headers;
  }

  // ── jQuery AJAX Helper (internal, not exported) ───────────────────────────

  /**
   * Wrapper around $.ajax with the same error shape as _performRequest in api.js.
   * Always resolves with { data, status, headers }.
   * Rejects with Error objects having { status, headers, response, originalError }.
   * @param {string} method  - HTTP method (GET, POST, PUT, DELETE, etc.)
   * @param {string} url     - Full request URL
   * @param {Object} params  - Request body for POST/PUT
   * @param {Object} headers - Request headers
   * @returns {Promise<{data: *, status: number, headers: Object}>}
   */
  function doAjaxCall(method, url, params, headers) {
    return new Promise(function (resolve, reject) {
      var ajaxParams = {
        url: url,
        timeout: 15000,
        headers: _objectSpread2(_objectSpread2({}, headers || {}), {}, {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }),
        type: method,
        dataType: 'json',
        crossDomain: true
      };
      if (method === 'POST' || method === 'PUT') {
        ajaxParams.data = JSON.stringify(params || {});
        ajaxParams.contentType = 'application/json';
        ajaxParams.processData = false;
      }
      $.ajax(ajaxParams).done(function (data, _textStatus, jqXHR) {
        var status = jqXHR && typeof jqXHR.status === 'number' ? jqXHR.status : 200;
        resolve({
          data: data,
          status: status,
          headers: parseResponseHeaders(jqXHR)
        });
      }).fail(function (jqXHR) {
        var status = jqXHR && jqXHR.status ? jqXHR.status : 0;
        reject(Object.assign(new Error('TraktTV API Error'), {
          status: status,
          headers: parseResponseHeaders(jqXHR),
          response: jqXHR && (jqXHR.responseJSON || jqXHR.responseText || null),
          originalError: jqXHR || {}
        }));
      });
    });
  }

  // ── Main Request Execution ────────────────────────────────────────────────
  // Replaces _performRequest in api.js. Handles the entire request lifecycle
  // including CORS fallback: direct → proxy on CORS/network error.

  /**
   * Execute an API request with intelligent routing and CORS fallback.
   *
   * Attempt strategy:
   *   - CORS-free path: try DIRECT_BASE_URL first, fall back to PROXY_BASE_URL
   *     on CORS/network error (switches session to CORS-strict).
   *   - OAuth path: always PROXY_BASE_URL (single attempt).
   *   - CORS-strict path: always PROXY_BASE_URL (single attempt).
   *
   * Result shape (matches _performRequest):
   *   - withMeta=true:  { data, status, headers }
   *   - withMeta=false: data (response body only)
   *
   * @param {string}  method          - HTTP method
   * @param {string}  path            - API path (e.g. '/sync/history')
   * @param {Object}  [params={}]     - Request body
   * @param {Object}  [headers={}]    - Request headers
   * @param {boolean} [unauthorized]  - Reserved for caller bookkeeping
   * @param {Object}  [requestOptions={}] - Options (withMeta, etc.)
   * @returns {Promise<*>}
   */
  function executeRequest(_x, _x2, _x3, _x4, _x5) {
    return _executeRequest.apply(this, arguments);
  }
  function _executeRequest() {
    _executeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(method, path, params, headers, unauthorized) {
      var requestOptions,
        baseUrl,
        useDirect,
        withMeta,
        attempts,
        lastError,
        attempt,
        currentBase,
        currentUrl,
        requestHeaders,
        result,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            requestOptions = _args.length > 5 && _args[5] !== undefined ? _args[5] : {};
            baseUrl = resolveBaseUrl(path);
            useDirect = baseUrl === DIRECT_BASE_URL;
            withMeta = !!(requestOptions && requestOptions.withMeta);
            attempts = useDirect ? 2 : 1;
            lastError = null;
            attempt = 0;
          case 1:
            if (!(attempt < attempts)) {
              _context.n = 8;
              break;
            }
            currentBase = attempt === 0 ? baseUrl : PROXY_BASE_URL;
            currentUrl = currentBase + path;
            requestHeaders = _objectSpread2({}, headers || {}); // For direct API calls, add Trakt client ID for app identification
            if (currentBase === DIRECT_BASE_URL && TRAKT_CLIENT_ID) {
              requestHeaders['trakt-api-key'] = TRAKT_CLIENT_ID;
            }
            _context.p = 2;
            _context.n = 3;
            return doAjaxCall(method, currentUrl, params || {}, requestHeaders);
          case 3:
            result = _context.v;
            if (!withMeta) {
              _context.n = 4;
              break;
            }
            return _context.a(2, result);
          case 4:
            return _context.a(2, result.data);
          case 5:
            _context.p = 5;
            _t = _context.v;
            lastError = _t;

            // Only fallback on CORS/network error from direct attempt
            if (!(useDirect && attempt === 0 && isCorsOrNetworkError(_t))) {
              _context.n = 6;
              break;
            }
            corsFreeMode = false; // switch session to CORS-strict
            return _context.a(3, 7);
          case 6:
            throw _t;
          case 7:
            attempt++;
            _context.n = 1;
            break;
          case 8:
            throw lastError;
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[2, 5]]);
    }));
    return _executeRequest.apply(this, arguments);
  }

  var TOKEN_EXPIRY_SKEW_MS = 2 * 60 * 1000;
  var DEVICE_AUTH_STALE_MS = 20 * 60 * 1000;
  var MAX_RETRY_ATTEMPTS = 2; // 3 спроби загалом
  var RETRY_BASE_DELAY_MS = 600;
  var RETRY_MAX_DELAY_MS = 15000;
  var CACHE_TTL_FEED_MS = 5 * 60 * 1000;
  var CACHE_TTL_PROGRESS_MS = 30 * 1000;
  var CACHE_TTL_METADATA_MS = 60 * 60 * 1000;
  var MUTATION_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
  var inFlightRequests = new Map();
  var responseCache = new Map();
  var RESPONSE_CACHE_MAX = 200;
  var AUTH_BLOCK_STORAGE_KEY = 'trakt_auth_blocked';
  var AUTH_RATE_LIMIT_STORAGE_KEY = 'trakt_auth_rate_limited_until';

  // ── Global Rate Limiter ──────────────────────────────────────────────────
  // Sliding-window rate limiter that also enters global cooldown after 429.
  // Prevents runaway concurrent requests from different modules.

  var RL_MAX_REQUESTS_PER_WINDOW = 50; // max requests per window
  var RL_WINDOW_MS = 10 * 1000; // sliding window: 10 seconds
  var RL_MAX_AUTH_PER_WINDOW = 5; // auth (/oauth/*) requests per window
  var RL_DEFAULT_COOLDOWN_MS = 60 * 1000; // default cooldown after 429
  var RL_MIN_COOLDOWN_MS = 10 * 1000; // minimum cooldown
  var RL_MAX_COOLDOWN_MS = 5 * 60 * 1000; // maximum cooldown
  var RL_POLL_INTERVAL_MS = 300; // how often waitForSlot re-checks
  var AUTH_RATE_LIMIT_DEFAULT_COOLDOWN_MS = 60 * 1000;
  var AUTH_RATE_LIMIT_MAX_COOLDOWN_MS = 5 * 60 * 1000;
  var rlRequestLog = []; // { ts: number } timestamps of recent requests
  var rlAuthRequestLog = []; // timestamps of recent auth requests
  var rlCooldownUntil = 0; // 0 = no cooldown

  function rlIsAuthEndpoint(url) {
    if (!url || typeof url !== 'string') return false;
    return url.indexOf('/oauth/') !== -1;
  }
  function rlIsOnCooldown() {
    var remaining = rlCooldownUntil - Date.now();
    if (remaining <= 0) {
      rlCooldownUntil = 0;
      return false;
    }
    return true;
  }
  function rlEnterCooldown(retryAfterSeconds) {
    var durationMs = RL_DEFAULT_COOLDOWN_MS;
    if (typeof retryAfterSeconds === 'number' && Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
      durationMs = retryAfterSeconds * 1000;
    }
    durationMs = Math.max(RL_MIN_COOLDOWN_MS, Math.min(RL_MAX_COOLDOWN_MS, durationMs));
    rlCooldownUntil = Date.now() + durationMs;
  }
  function rlPruneLog(log) {
    var cutoff = Date.now() - RL_WINDOW_MS;
    while (log.length > 0 && log[0].ts < cutoff) log.shift();
  }
  function rlCanMakeRequest(url) {
    var isAuth = rlIsAuthEndpoint(url);
    var log = isAuth ? rlAuthRequestLog : rlRequestLog;
    var max = isAuth ? RL_MAX_AUTH_PER_WINDOW : RL_MAX_REQUESTS_PER_WINDOW;
    rlPruneLog(log);
    return log.length < max;
  }
  function rlRecordRequest(url, status) {
    var isAuth = rlIsAuthEndpoint(url);
    var log = isAuth ? rlAuthRequestLog : rlRequestLog;
    log.push({
      ts: Date.now()
    });
    rlPruneLog(log);
    if (status === 429) {
      rlEnterCooldown();
    }
  }
  function rlGetCooldownRemainingMs() {
    return Math.max(0, rlCooldownUntil - Date.now());
  }
  function rlWaitForSlot(_x) {
    return _rlWaitForSlot.apply(this, arguments);
  } // ── end Rate Limiter ─────────────────────────────────────────────────────
  function _rlWaitForSlot() {
    _rlWaitForSlot = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
      var isAuth;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            // Auth requests bypass cooldown but still respect sliding window
            isAuth = rlIsAuthEndpoint(url);
          case 1:
            if (!(!isAuth && rlIsOnCooldown())) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return sleep$1(RL_POLL_INTERVAL_MS);
          case 2:
            return _context.a(3, 1);
          case 3:
            if (!rlCanMakeRequest(url)) {
              _context.n = 4;
              break;
            }
            return _context.a(2);
          case 4:
            _context.n = 5;
            return sleep$1(RL_POLL_INTERVAL_MS);
          case 5:
            _context.n = 1;
            break;
          case 6:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _rlWaitForSlot.apply(this, arguments);
  }
  var authBlocked = false;
  var authBlockedReason = '';
  var authBlockedAt = 0;
  var authBlockedNotified = false;
  var authBlockedTokenFingerprint = '';
  function getAccessTokenFingerprint() {
    var token = String(Lampa.Storage.get('trakt_token') || '');
    if (!token) return '';
    return "".concat(token.length, ":").concat(token.slice(-12));
  }
  function getStorageNumber(name) {
    var value = Number(Lampa.Storage.get(name));
    return Number.isFinite(value) ? value : null;
  }
  function clearTokenExpiryMeta() {
    Lampa.Storage.set('trakt_token_created_at', null);
    Lampa.Storage.set('trakt_token_expires_in', null);
    Lampa.Storage.set('trakt_token_expires_at', null);
  }
  function clearAuthStorage() {
    Lampa.Storage.set('trakt_token', null);
    Lampa.Storage.set('trakt_refresh_token', null);
    clearTokenExpiryMeta();
    clearAuthRateLimitCooldown();
    Lampa.Storage.set('trakt_active_device_auth', false);
    Lampa.Storage.set('trakt_active_device_auth_started_at', null);
  }
  function setAuthBlocked() {
    var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reauth_required';
    authBlocked = true;
    authBlockedReason = String(reason || 'reauth_required');
    authBlockedAt = Date.now();
    authBlockedNotified = false;
    authBlockedTokenFingerprint = getAccessTokenFingerprint();
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_BLOCK_STORAGE_KEY, true);
      }
    } catch (error) {/* noop */}
  }
  function clearAuthBlocked() {
    authBlocked = false;
    authBlockedReason = '';
    authBlockedAt = 0;
    authBlockedNotified = false;
    authBlockedTokenFingerprint = '';
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_BLOCK_STORAGE_KEY, false);
      }
    } catch (error) {/* noop */}
  }
  function isAuthBlocked() {
    if (authBlocked) return true;
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        return Lampa.Storage.get(AUTH_BLOCK_STORAGE_KEY) === true;
      }
    } catch (error) {
      return authBlocked;
    }
    return authBlocked;
  }
  function buildAuthBlockedError() {
    var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reauth_required';
    return Object.assign(new Error('Trakt auth is blocked, reauthorization required'), {
      status: 401,
      code: 'reauth_required',
      reason: reason || 'reauth_required',
      blocked: true,
      blockedAt: authBlockedAt || Date.now()
    });
  }
  function clearAuthRateLimitCooldown() {
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_RATE_LIMIT_STORAGE_KEY, null);
      }
    } catch (error) {/* noop */}
  }
  function getAuthRateLimitRemainingMs() {
    var cooldownUntil = 0;
    try {
      cooldownUntil = Number(Lampa.Storage.get(AUTH_RATE_LIMIT_STORAGE_KEY) || 0);
    } catch (error) {
      cooldownUntil = 0;
    }
    if (!Number.isFinite(cooldownUntil) || cooldownUntil <= Date.now()) {
      clearAuthRateLimitCooldown();
      return 0;
    }
    return cooldownUntil - Date.now();
  }
  function buildAuthRateLimitError(error) {
    return Object.assign(new Error('Trakt auth is temporarily rate limited'), {
      status: 503,
      code: 'auth_rate_limited',
      retryAfterMs: getAuthRateLimitRemainingMs(),
      originalError: error || null
    });
  }
  function setAuthRateLimitCooldown(error) {
    var retryAfterMs = parseRetryAfterMs$1(error && error.headers ? error.headers : {});
    var cooldownMs = Math.min(AUTH_RATE_LIMIT_MAX_COOLDOWN_MS, Math.max(1000, retryAfterMs || AUTH_RATE_LIMIT_DEFAULT_COOLDOWN_MS));
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(AUTH_RATE_LIMIT_STORAGE_KEY, Date.now() + cooldownMs);
      }
    } catch (storageError) {/* noop */}
    return cooldownMs;
  }
  function isAuthRateLimitStatus(status) {
    return status === 429 || status === 503;
  }
  function notifyAuthBlockedOnce() {
    if (authBlockedNotified) return;
    authBlockedNotified = true;
    try {
      if (Lampa && Lampa.Bell && typeof Lampa.Bell.push === 'function') {
        var text = Lampa.Lang && typeof Lampa.Lang.translate === 'function' ? Lampa.Lang.translate('trakttvAuthMissed') || 'Trakt authorization required' : 'Trakt authorization required';
        Lampa.Bell.push({
          text: text
        });
      }
    } catch (error) {/* noop */}
  }
  function hasUsableAccessToken() {
    var token = String(Lampa.Storage.get('trakt_token') || '');
    return !!token;
  }
  function hasNewAccessTokenSinceBlock() {
    var current = getAccessTokenFingerprint();
    if (!current) return false;
    if (!authBlockedTokenFingerprint) return true;
    return current !== authBlockedTokenFingerprint;
  }
  function saveTokens() {
    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!response || _typeof(response) !== 'object') return;
    if (response.access_token) {
      Lampa.Storage.set('trakt_token', response.access_token);
    }
    if (response.refresh_token) {
      Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
    }
    var expiresIn = Number(response.expires_in);
    var createdAt = Number(response.created_at) || Math.floor(Date.now() / 1000);
    if (Number.isFinite(expiresIn) && expiresIn > 0) {
      var expiresAt = createdAt * 1000 + expiresIn * 1000;
      Lampa.Storage.set('trakt_token_created_at', createdAt);
      Lampa.Storage.set('trakt_token_expires_in', expiresIn);
      Lampa.Storage.set('trakt_token_expires_at', expiresAt);
    } else if (response.access_token || response.refresh_token) {
      clearTokenExpiryMeta();
    }
    if (response.access_token) {
      clearAuthBlocked();
      clearAuthRateLimitCooldown();
    }
  }
  function getTokenExpiryMeta() {
    var createdAt = getStorageNumber('trakt_token_created_at');
    var expiresIn = getStorageNumber('trakt_token_expires_in');
    var expiresAt = getStorageNumber('trakt_token_expires_at');
    if (!expiresAt && createdAt && expiresIn) {
      expiresAt = createdAt * 1000 + expiresIn * 1000;
      Lampa.Storage.set('trakt_token_expires_at', expiresAt);
    }
    return {
      createdAt: createdAt,
      expiresIn: expiresIn,
      expiresAt: expiresAt
    };
  }
  function isTokenExpiringSoon() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$skewMs = _ref.skewMs,
      skewMs = _ref$skewMs === void 0 ? TOKEN_EXPIRY_SKEW_MS : _ref$skewMs;
    var _getTokenExpiryMeta = getTokenExpiryMeta(),
      expiresAt = _getTokenExpiryMeta.expiresAt;
    if (!expiresAt || expiresAt <= 0) return true;
    return Date.now() + skewMs >= expiresAt;
  }
  function isDeviceAuthActive() {
    if (Lampa.Storage.get('trakt_active_device_auth') !== true) {
      return false;
    }
    var startedAt = getStorageNumber('trakt_active_device_auth_started_at');
    var now = Date.now();
    var isStale = !startedAt || now - startedAt > DEVICE_AUTH_STALE_MS;
    if (isStale) {
      Lampa.Storage.set('trakt_active_device_auth', false);
      Lampa.Storage.set('trakt_active_device_auth_started_at', null);
      logWarn('Device auth flag was stale and reset', undefined, {
        debugOnly: true
      });
      return false;
    }
    return true;
  }
  function readBooleanStorage$2(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parse = function parse(value) {
      if (typeof value === 'boolean') return value;
      if (value === 1 || value === '1' || value === 'true') return true;
      if (value === 0 || value === '0' || value === 'false') return false;
      return null;
    };
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var direct = parse(Lampa.Storage.get(name));
        if (direct !== null) return direct;
      }
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var fromField = parse(Lampa.Storage.field(name));
        if (fromField !== null) return fromField;
      }
    } catch (error) {
      return fallback;
    }
    return fallback;
  }
  function buildRecommendationsUrl$1(type, limit) {
    var ignoreWatchlisted = readBooleanStorage$2('trakt_source_ignore_watchlisted', false) ? 'true' : 'false';
    var query = new URLSearchParams({
      extended: 'full,images',
      limit: String(Math.max(1, parseInt(limit, 10) || 36)),
      ignore_watched: readBooleanStorage$2('trakt_source_ignore_watched', false) ? 'true' : 'false',
      ignore_watchlisted: ignoreWatchlisted,
      ignore_collected: ignoreWatchlisted
    });
    return "/recommendations/".concat(type, "?").concat(query.toString());
  }
  function getImageUrl(media) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'poster';
    var imageSet = media.images && media.images[type];
    var imageUrl = '';
    if (imageSet) {
      if (_typeof(imageSet) === 'object' && !Array.isArray(imageSet)) {
        imageUrl = imageSet.medium || imageSet.thumb || imageSet.full || '';
      } else if (Array.isArray(imageSet) && imageSet.length > 0) {
        imageUrl = imageSet[0];
      } else if (typeof imageSet === 'string') {
        imageUrl = imageSet;
      }
    }
    if (imageUrl && !imageUrl.startsWith('http')) {
      var finalUrl = 'https://' + imageUrl.replace(/^\/+/, '');
      return finalUrl;
    }
    return imageUrl;
  }
  function addToHistory$1(data) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var body = {
      movies: [],
      shows: []
    };

    // Логування для налагодження

    // Перевірка, чи data має структуру для епізодів (викликається з watching.js)
    if (data.episodes) {
      // Якщо це епізоди, додаємо їх до shows
      body.shows.push({
        ids: data.ids || {},
        // Використовуємо передані ids або порожній об'єкт
        seasons: [{
          number: data.season_number || 1,
          episodes: data.episodes.map(function (ep) {
            return {
              number: ep.number,
              watched_at: ep.watched_at || new Date().toISOString()
            };
          })
        }]
      });
      return requestApi('POST', '/sync/history', body);
    }

    // Перевірка, чи data має структуру для фільму
    if (data.method === 'movie') {
      // Перевірка наявності необхідних даних
      if (!data.id) {
        return Promise.reject(new Error(Lampa.Lang.translate('trakttv_movie_id_missed')));
      }
      body.movies.push({
        ids: {
          tmdb: data.id
        },
        watched_at: new Date().toISOString()
      });
      return requestApi('POST', '/sync/history', body);
    }
    // Перевірка, чи data має структуру для серіалу
    else if (data.method === 'show' || data.method === 'tv') {
      // Перевірка наявності необхідних даних
      if (!data.id) {
        return Promise.reject(new Error(Lampa.Lang.translate('trakttv_show_id_missed')));
      }
      if (mode === 'all') {
        // Додаємо весь серіал в історію
        body.shows.push({
          ids: data.ids || {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
        return requestApi('POST', '/sync/history', body);
      } else if (mode === 'last_season' || mode === 'last_episode') {
        var _data$ids;
        // Спочатку отримуємо історію серіалу, щоб визначити які епізоди вже переглянуті
        return getShowHistory(data.id, (_data$ids = data.ids) === null || _data$ids === void 0 ? void 0 : _data$ids.trakt).then(function (historyData) {
          var _data$ids2;
          // Отримуємо інформацію про серіал для визначення всіх сезонів та епізодів
          return getShowInfo(data.id, (_data$ids2 = data.ids) === null || _data$ids2 === void 0 ? void 0 : _data$ids2.trakt).then(function (showInfo) {
            // Отримуємо останній сезон
            var lastSeason = showInfo.last_season || data.season || 1;

            // Отримуємо список всіх переглянутих епізодів
            var watchedEpisodes = {};
            if (historyData && historyData.length > 0) {
              historyData.forEach(function (item) {
                if (item.episode) {
                  var s = item.episode.season;
                  var e = item.episode.number;
                  if (!watchedEpisodes[s]) {
                    watchedEpisodes[s] = [];
                  }
                  if (!watchedEpisodes[s].includes(e)) {
                    watchedEpisodes[s].push(e);
                  }
                }
              });
            }

            // Отримуємо інформацію про останній сезон
            var seasonUrl = Lampa.TMDB.api('tv/' + data.id + '/season/' + lastSeason + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
            return new Promise(function (resolve, reject) {
              var network = new Lampa.Reguest();
              network.silent(seasonUrl, function (seasonData) {
                if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  // Знаходимо всі епізоди сезону
                  var allEpisodes = seasonData.episodes.map(function (e) {
                    return e.episode_number;
                  }).sort(function (a, b) {
                    return a - b;
                  });

                  // Знаходимо невідмічені епізоди
                  var unwatchedEpisodes = allEpisodes.filter(function (e) {
                    return !watchedEpisodes[lastSeason] || !watchedEpisodes[lastSeason].includes(e);
                  });
                  if (mode === 'last_episode' && unwatchedEpisodes.length > 0) {
                    // Додаємо перший невідмічений епізод
                    var nextEpisode = unwatchedEpisodes[0];
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        episodes: [{
                          number: nextEpisode,
                          watched_at: new Date().toISOString()
                        }]
                      }]
                    });
                  } else if (mode === 'last_season' && unwatchedEpisodes.length > 0) {
                    // Додаємо всі невідмічені епізоди сезону
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        episodes: unwatchedEpisodes.map(function (e) {
                          return {
                            number: e,
                            watched_at: new Date().toISOString()
                          };
                        })
                      }]
                    });
                  } else {
                    // Якщо всі епізоди вже переглянуті, додаємо весь сезон
                    body.shows.push({
                      ids: data.ids || {
                        tmdb: data.id
                      },
                      seasons: [{
                        number: lastSeason,
                        watched_at: new Date().toISOString()
                      }]
                    });
                  }
                  resolve(requestApi('POST', '/sync/history', body));
                } else {
                  // Якщо не вдалося отримати дані про епізоди, додаємо весь сезон
                  body.shows.push({
                    ids: data.ids || {
                      tmdb: data.id
                    },
                    seasons: [{
                      number: lastSeason,
                      watched_at: new Date().toISOString()
                    }]
                  });
                  resolve(requestApi('POST', '/sync/history', body));
                }
              }, function () {
                // У випадку помилки додаємо весь сезон
                body.shows.push({
                  ids: data.ids || {
                    tmdb: data.id
                  },
                  seasons: [{
                    number: lastSeason,
                    watched_at: new Date().toISOString()
                  }]
                });
                resolve(requestApi('POST', '/sync/history', body));
              });
            });
          });
        }).catch(function (error) {
          var _data$ids3;
          // Fallback to original behavior if there's an error
          return getShowInfo(data.id, (_data$ids3 = data.ids) === null || _data$ids3 === void 0 ? void 0 : _data$ids3.trakt).then(function (showInfo) {
            var lastSeason = showInfo.last_season || data.season || 1;
            var lastEpisode = showInfo.last_episode || data.episode || 1;
            if (mode === 'last_season') {
              body.shows.push({
                ids: data.ids || {
                  tmdb: data.id
                },
                seasons: [{
                  number: lastSeason,
                  watched_at: new Date().toISOString()
                }]
              });
            } else if (mode === 'last_episode') {
              body.shows.push({
                ids: data.ids || {
                  tmdb: data.id
                },
                seasons: [{
                  number: lastSeason,
                  episodes: [{
                    number: lastEpisode,
                    watched_at: new Date().toISOString()
                  }]
                }]
              });
            }
            return requestApi('POST', '/sync/history', body);
          });
        });
      } else {
        // Якщо mode не вказаний або інший, додаємо весь серіал
        // Використовуємо передані ids або формуватимемо за TMDB ID
        body.shows.push({
          ids: data.ids || {
            tmdb: data.id
          },
          watched_at: new Date().toISOString()
        });
        return requestApi('POST', '/sync/history', body);
      }
    } else {
      // Якщо тип вмісту не визначено, повертаємо помилку
      return Promise.reject(new Error(Lampa.Lang.translate('trakttv_unknown_content')));
    }
  }
  function tmdbRequest(url) {
    return new Promise(function (resolve, reject) {
      try {
        var network = new Lampa.Reguest();
        network.silent(url, function (data) {
          return resolve(data);
        }, function () {
          return reject(new Error('TMDB request failed'));
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  // Функція для отримання інформації про серіал з TMDB або Trakt
  function getShowInfo(tmdbId) {
    var traktId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      // Якщо переданий Trakt ID, отримуємо інформацію з Trakt
      if (traktId) {
        requestApi('GET', "/shows/".concat(traktId, "?extended=full")).then(function (showData) {
          if (showData && showData.seasons) {
            // Знаходимо останній сезон (виключаючи спеціальні сезони з номером 0)
            var regularSeasons = showData.seasons.filter(function (s) {
              return s.number > 0;
            });
            var lastSeasonData = regularSeasons.length > 0 ? regularSeasons.reduce(function (prev, current) {
              return prev.number > current.number ? prev : current;
            }) : null;

            // Якщо знайдено останній сезон, отримуємо інформацію про його епізоди
            if (lastSeasonData) {
              requestApi('GET', "/shows/".concat(traktId, "/seasons/").concat(lastSeasonData.number, "?extended=full")).then(function (seasonData) {
                if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                  // Знаходимо останній епізод сезону
                  var lastEpisodeData = seasonData.episodes.reduce(function (prev, current) {
                    return prev.number > current.number ? prev : current;
                  });
                  resolve({
                    last_season: lastSeasonData.number,
                    last_episode: lastEpisodeData.number,
                    total_seasons: regularSeasons.length,
                    total_episodes: seasonData.episodes.length
                  });
                } else {
                  resolve({
                    last_season: lastSeasonData.number,
                    last_episode: 1
                  });
                }
              }).catch(function () {
                // Якщо не вдалося отримати дані про епізоди, повертаємо хоча б номер сезону
                resolve({
                  last_season: lastSeasonData.number,
                  last_episode: 1
                });
              });
            } else {
              resolve({
                last_season: 1,
                last_episode: 1
              });
            }
          } else {
            resolve({
              last_season: 1,
              last_episode: 1
            });
          }
        }).catch(function () {
          // У випадку помилки повертаємо значення за замовчуванням
          resolve({
            last_season: 1,
            last_episode: 1
          });
        });
        return;
      }

      // Використовуємо Lampa.TMDB для отримання інформації про серіал
      var url = Lampa.TMDB.api('tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
      tmdbRequest(url).then(function (data) {
        if (data && data.seasons) {
          // Знаходимо останній сезон (виключаючи спеціальні сезони з номером 0)
          var regularSeasons = data.seasons.filter(function (s) {
            return s.season_number > 0;
          });
          var lastSeasonData = regularSeasons.length > 0 ? regularSeasons.reduce(function (prev, current) {
            return prev.season_number > current.season_number ? prev : current;
          }) : null;

          // Якщо знайдено останній сезон, отримуємо інформацію про його епізоди
          if (lastSeasonData) {
            var seasonUrl = Lampa.TMDB.api('tv/' + tmdbId + '/season/' + lastSeasonData.season_number + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru'));
            return tmdbRequest(seasonUrl).then(function (seasonData) {
              if (seasonData && seasonData.episodes && seasonData.episodes.length > 0) {
                // Знаходимо останній епізод сезону
                var lastEpisodeData = seasonData.episodes.reduce(function (prev, current) {
                  return prev.episode_number > current.episode_number ? prev : current;
                });
                resolve({
                  last_season: lastSeasonData.season_number,
                  last_episode: lastEpisodeData.episode_number,
                  total_seasons: regularSeasons.length,
                  total_episodes: seasonData.episodes.length
                });
              } else {
                resolve({
                  last_season: lastSeasonData.season_number,
                  last_episode: 1
                });
              }
            }).catch(function () {
              // Якщо не вдалося отримати дані про епізоди, повертаємо хоча б номер сезону
              resolve({
                last_season: lastSeasonData.season_number,
                last_episode: 1
              });
            });
          } else {
            resolve({
              last_season: 1,
              last_episode: 1
            });
          }
        } else {
          resolve({
            last_season: 1,
            last_episode: 1
          });
        }
      }).catch(function () {
        // У випадку помилки повертаємо значення за замовчуванням
        resolve({
          last_season: 1,
          last_episode: 1
        });
      });
    });
  }

  /**
   * Refresh tokens using refresh_token
   * unauthorized = true
   * Note: blocked while device auth polling is active
   */
  function refreshTokens() {
    return _refreshTokens.apply(this, arguments);
  }
  function _refreshTokens() {
    _refreshTokens = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _ref16,
        redirect_uri,
        _ref16$reason,
        reason,
        refresh_token,
        logging,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref16 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, redirect_uri = _ref16.redirect_uri, _ref16$reason = _ref16.reason, reason = _ref16$reason === void 0 ? 'manual' : _ref16$reason;
            refresh_token = Lampa.Storage.get('trakt_refresh_token');
            logging = Lampa.Storage.field('trakt_enable_logging');
            if (refresh_token) {
              _context2.n = 1;
              break;
            }
            if (logging) logDebug('refreshTokens skipped: no refresh token');
            setAuthBlocked('no_refresh_token');
            return _context2.a(2, Promise.reject(Object.assign(new Error('No refresh_token'), {
              status: 0,
              code: 'no_refresh_token'
            })));
          case 1:
            if (!isDeviceAuthActive()) {
              _context2.n = 2;
              break;
            }
            if (logging) logDebug('refreshTokens skipped: device auth active', {
              reason: reason
            });
            return _context2.a(2, Promise.reject(Object.assign(new Error('Device auth is active'), {
              status: 423,
              code: 'device_auth_active'
            })));
          case 2:
            return _context2.a(2, rlWaitForSlot('/oauth/token').then(function () {
              return _performRequest('POST', '/oauth/token', {
                refresh_token: refresh_token,
                redirect_uri: redirect_uri || '',
                grant_type: 'refresh_token'
              }, true);
            }).then(function (res) {
              rlRecordRequest('/oauth/token', 200);
              if (res && res.access_token) {
                saveTokens(res);
              }
              return res;
            }).catch(function (error) {
              var status = Number(error && error.status) || 0;
              rlRecordRequest('/oauth/token', status);
              if (status === 429) {
                var retryAfterSec = parseRetryAfterMs$1(error && error.headers ? error.headers : {});
                rlEnterCooldown(retryAfterSec ? Math.round(retryAfterSec / 1000) : undefined);
                logWarn('Trakt rate limit on token refresh, global cooldown entered', {
                  cooldownMs: rlGetCooldownRemainingMs()
                }, {
                  debugOnly: true
                });
              }
              if (error && (error.status === 400 || error.status === 401)) {
                setAuthBlocked("refresh_failed_".concat(error.status));
                clearAuthStorage();
              }
              if (logging) logWarn('refreshTokens failed', {
                reason: reason,
                error: error
              }, {
                debugOnly: true
              });
              throw error;
            }));
        }
      }, _callee2);
    }));
    return _refreshTokens.apply(this, arguments);
  }
  var refreshPromise = null;
  function runRefreshFlow() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (refreshPromise) {
      return refreshPromise;
    }
    refreshPromise = refreshTokens(options).finally(function () {
      refreshPromise = null;
    });
    return refreshPromise;
  }
  function ensureValidAccessToken() {
    return _ensureValidAccessToken.apply(this, arguments);
  }
  function _ensureValidAccessToken() {
    _ensureValidAccessToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _ref17,
        _ref17$reason,
        reason,
        _ref17$force,
        force,
        _ref17$skewMs,
        skewMs,
        token,
        refreshToken,
        noAccessToken,
        shouldRefreshByExpiry,
        _args3 = arguments;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _ref17 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref17$reason = _ref17.reason, reason = _ref17$reason === void 0 ? 'preflight' : _ref17$reason, _ref17$force = _ref17.force, force = _ref17$force === void 0 ? false : _ref17$force, _ref17$skewMs = _ref17.skewMs, skewMs = _ref17$skewMs === void 0 ? TOKEN_EXPIRY_SKEW_MS : _ref17$skewMs;
            token = Lampa.Storage.get('trakt_token');
            refreshToken = Lampa.Storage.get('trakt_refresh_token');
            if (refreshToken) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, null);
          case 1:
            if (!isDeviceAuthActive()) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2, null);
          case 2:
            noAccessToken = !token;
            shouldRefreshByExpiry = force || isTokenExpiringSoon({
              skewMs: Number(skewMs) || TOKEN_EXPIRY_SKEW_MS
            });
            if (!(!noAccessToken && !shouldRefreshByExpiry)) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2, null);
          case 3:
            return _context3.a(2, runRefreshFlow({
              reason: reason
            }));
        }
      }, _callee3);
    }));
    return _ensureValidAccessToken.apply(this, arguments);
  }
  function sleep$1(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, Math.max(0, Number(ms) || 0));
    });
  }
  function sortForStableSerialize(value) {
    if (Array.isArray(value)) {
      return value.map(sortForStableSerialize);
    }
    if (value && _typeof(value) === 'object') {
      var normalized = {};
      Object.keys(value).sort().forEach(function (key) {
        if (typeof value[key] === 'undefined') return;
        normalized[key] = sortForStableSerialize(value[key]);
      });
      return normalized;
    }
    return value;
  }
  function stableSerialize(value) {
    try {
      return JSON.stringify(sortForStableSerialize(value));
    } catch (error) {
      return String(value);
    }
  }
  function normalizeQueryString() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var source = String(query || '').replace(/^\?+/, '');
    if (!source) return '';
    try {
      var parsed = new URLSearchParams(source);
      var entries = [];
      parsed.forEach(function (value, key) {
        if (!key || key === '_') return;
        entries.push([String(key), String(value)]);
      });
      entries.sort(function (left, right) {
        if (left[0] === right[0]) {
          if (left[1] === right[1]) return 0;
          return left[1] > right[1] ? 1 : -1;
        }
        return left[0] > right[0] ? 1 : -1;
      });
      var normalized = new URLSearchParams();
      entries.forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];
        return normalized.append(key, value);
      });
      return normalized.toString();
    } catch (error) {
      return source;
    }
  }
  function normalizeRequestUrl() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var source = String(url || '').trim();
    if (source.indexOf(PROXY_BASE_URL) === 0) {
      source = source.slice(PROXY_BASE_URL.length);
    }
    if (source.indexOf(DIRECT_BASE_URL) === 0) {
      source = source.slice(DIRECT_BASE_URL.length);
    }
    var queryIndex = source.indexOf('?');
    var rawPath = queryIndex >= 0 ? source.slice(0, queryIndex) : source;
    var rawQuery = queryIndex >= 0 ? source.slice(queryIndex + 1) : '';
    var path = "/".concat(String(rawPath || '').replace(/^\/+/, '')).replace(/\/{2,}/g, '/');
    var normalizedPath = path.length > 1 ? path.replace(/\/+$/, '') : path;
    var query = normalizeQueryString(rawQuery);
    var full = query ? "".concat(normalizedPath, "?").concat(query) : normalizedPath;
    return {
      path: normalizedPath,
      query: query,
      full: full
    };
  }
  function buildAuthScope() {
    var unauthorized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (unauthorized) return 'unauthorized';
    var token = String(Lampa.Storage.get('trakt_token') || '');
    if (!token) return 'anon';
    return "token:".concat(token.length, ":").concat(token.slice(-8));
  }
  function buildRequestKey(method, url, params, unauthorized) {
    var requestOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var normalizedMethod = String(method || 'GET').toUpperCase();
    var request = normalizeRequestUrl(url);
    var authScope = buildAuthScope(unauthorized);
    var mode = requestOptions && requestOptions.withMeta ? 'meta' : 'data';
    var body = normalizedMethod === 'GET' ? '' : stableSerialize(params || {});
    return [normalizedMethod, request.path, request.query, authScope, mode, body].join('|');
  }
  function buildCacheKey(method, url, unauthorized) {
    var requestOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var normalizedMethod = String(method || 'GET').toUpperCase();
    var request = normalizeRequestUrl(url);
    var authScope = buildAuthScope(unauthorized);
    var mode = requestOptions && requestOptions.withMeta ? 'meta' : 'data';
    return [normalizedMethod, request.path, request.query, authScope, mode].join('|');
  }
  function parseRetryAfterMs$1() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var value = headers && headers['retry-after'];
    if (!value) return null;
    var numeric = Number(value);
    if (Number.isFinite(numeric) && numeric >= 0) {
      return numeric * 1000;
    }
    var dateMs = Date.parse(value);
    if (Number.isFinite(dateMs)) {
      return Math.max(0, dateMs - Date.now());
    }
    return null;
  }
  function isRetryableStatus(status) {
    return status === 429 || status === 504 || status >= 500 && status <= 599;
  }
  function resolveRetryDelayMs(status, attempt) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var step = Math.max(1, Number(attempt) || 1);
    var backoff = Math.min(RETRY_MAX_DELAY_MS, RETRY_BASE_DELAY_MS * Math.pow(2, step - 1));
    var jitter = Math.floor(Math.random() * 250);
    var backoffWithJitter = backoff + jitter;
    if (status === 429) {
      var retryAfterMs = parseRetryAfterMs$1(headers);
      if (retryAfterMs !== null) {
        return Math.max(retryAfterMs, backoffWithJitter);
      }
    }
    return backoffWithJitter;
  }
  function cloneValue(value) {
    if (!value || _typeof(value) !== 'object') return value;
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (error) {
      return value;
    }
  }
  function getCacheTtlMs(method, url) {
    var requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var normalizedMethod = String(method || 'GET').toUpperCase();
    if (normalizedMethod !== 'GET') return 0;
    if (requestOptions && requestOptions.cache === false) return 0;
    var request = normalizeRequestUrl(url);
    var path = request.path || '';
    if (!path) return 0;
    if (/^\/(media|movies|shows)\/(trending|popular|anticipated)(\/|$)/.test(path)) {
      return CACHE_TTL_FEED_MS;
    }
    if (/^\/recommendations(\/|$)/.test(path) || /^\/search(\/|$)/.test(path)) {
      return CACHE_TTL_FEED_MS;
    }
    if (path === '/users/me' || /^\/users\/me\/lists(\/|$)/.test(path) || /^\/users\/me\/likes\/lists(\/|$)/.test(path)) {
      return CACHE_TTL_PROGRESS_MS;
    }
    if (/^\/networks(\/|$)/.test(path)) {
      return CACHE_TTL_METADATA_MS;
    }

    // Static metadata: show/movie descriptions, TMDB resolution — 1 hour
    if (/^\/shows\/\d+(\/|$)/.test(path)) return CACHE_TTL_METADATA_MS;
    if (/^\/movies\/\d+(\/|$)/.test(path)) return CACHE_TTL_METADATA_MS;
    if (/^\/search\/tmdb\/\d+/.test(path)) return CACHE_TTL_METADATA_MS;
    return 0;
  }
  function getCachedResponse(cacheKey) {
    var cached = responseCache.get(cacheKey);
    if (!cached) return null;
    if ((Number(cached.expiresAt) || 0) <= Date.now()) {
      responseCache.delete(cacheKey);
      return null;
    }
    return cloneValue(cached.value);
  }
  function setCachedResponse(cacheKey, value, ttlMs) {
    if (!cacheKey || !ttlMs) return;

    // Evict oldest entry if at capacity
    if (responseCache.size >= RESPONSE_CACHE_MAX && !responseCache.has(cacheKey)) {
      var oldestKey = responseCache.keys().next().value;
      if (oldestKey) responseCache.delete(oldestKey);
    }
    responseCache.set(cacheKey, {
      expiresAt: Date.now() + ttlMs,
      value: cloneValue(value)
    });
  }
  function clearResponseCache() {
    responseCache.clear();
  }
  function performRequestWithRetry(_x2, _x3) {
    return _performRequestWithRetry.apply(this, arguments);
  }
  function _performRequestWithRetry() {
    _performRequestWithRetry = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(method, url) {
      var params,
        unauthorized,
        requestOptions,
        logging,
        maxRetriesRaw,
        maxRetries,
        attempt,
        result,
        status,
        retryAfterSec,
        delay,
        _args4 = arguments,
        _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            params = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
            unauthorized = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;
            requestOptions = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : {};
            logging = Lampa.Storage.field('trakt_enable_logging');
            maxRetriesRaw = Number(requestOptions && requestOptions.maxRetries);
            maxRetries = Number.isFinite(maxRetriesRaw) ? Math.max(0, Math.min(5, maxRetriesRaw)) : MAX_RETRY_ATTEMPTS;
            attempt = 0;
          case 1:
            _context4.n = 2;
            return rlWaitForSlot(url);
          case 2:
            _context4.p = 2;
            _context4.n = 3;
            return _performRequest(method, url, params, unauthorized, requestOptions);
          case 3:
            result = _context4.v;
            // Record successful request in the rate limiter log
            rlRecordRequest(url, 200);
            return _context4.a(2, result);
          case 4:
            _context4.p = 4;
            _t = _context4.v;
            status = Number(_t && _t.status) || 0; // Record failure in rate limiter; trigger cooldown on 429
            rlRecordRequest(url, status);
            if (status === 429 && !rlIsOnCooldown()) {
              retryAfterSec = parseRetryAfterMs$1(_t && _t.headers ? _t.headers : {});
              rlEnterCooldown(retryAfterSec ? Math.round(retryAfterSec / 1000) : undefined);
              if (logging) {
                logWarn('Trakt rate limit: global cooldown entered', {
                  endpoint: normalizeRequestUrl(url).full,
                  method: String(method || 'GET').toUpperCase(),
                  cooldownMs: rlGetCooldownRemainingMs()
                }, {
                  debugOnly: true
                });
              }
            }
            if (!(!isRetryableStatus(status) || attempt >= maxRetries)) {
              _context4.n = 5;
              break;
            }
            // Propagate 403 as terminal for non-auth to avoid futile retries
            if (status === 403) {
              logWarn('Trakt request rejected with 403, not retrying', {
                endpoint: normalizeRequestUrl(url).full,
                method: String(method || 'GET').toUpperCase()
              }, {
                debugOnly: true
              });
            }
            throw _t;
          case 5:
            attempt += 1;
            delay = resolveRetryDelayMs(status, attempt, _t && _t.headers ? _t.headers : {});
            if (logging) {
              logWarn('Trakt request retry scheduled', {
                endpoint: normalizeRequestUrl(url).full,
                method: String(method || 'GET').toUpperCase(),
                status: status,
                retryReason: status === 429 ? 'rate_limit' : 'server_error',
                retryDelayMs: delay,
                attempt: attempt,
                maxRetries: maxRetries
              }, {
                debugOnly: true
              });
            }
            _context4.n = 6;
            return sleep$1(delay);
          case 6:
            _context4.n = 1;
            break;
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }));
    return _performRequestWithRetry.apply(this, arguments);
  }
  function executeRequestWithPolicy(_x4, _x5) {
    return _executeRequestWithPolicy.apply(this, arguments);
  }
  function _executeRequestWithPolicy() {
    _executeRequestWithPolicy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(method, url) {
      var params,
        unauthorized,
        requestOptions,
        normalizedMethod,
        ttlMs,
        cacheKey,
        useCache,
        cached,
        dedupEnabled,
        requestKey,
        promise,
        _args5 = arguments;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            params = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
            unauthorized = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : false;
            requestOptions = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : {};
            normalizedMethod = String(method || 'GET').toUpperCase();
            ttlMs = getCacheTtlMs(normalizedMethod, url, requestOptions);
            cacheKey = ttlMs > 0 ? buildCacheKey(normalizedMethod, url, unauthorized, requestOptions) : '';
            useCache = ttlMs > 0 && !(requestOptions && requestOptions.forceFresh);
            if (!useCache) {
              _context5.n = 1;
              break;
            }
            cached = getCachedResponse(cacheKey);
            if (!(cached !== null)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, cached);
          case 1:
            dedupEnabled = !(requestOptions && requestOptions.dedup === false);
            requestKey = dedupEnabled ? buildRequestKey(normalizedMethod, url, params, unauthorized, requestOptions) : '';
            if (!(requestKey && inFlightRequests.has(requestKey))) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, inFlightRequests.get(requestKey));
          case 2:
            promise = performRequestWithRetry(normalizedMethod, url, params, unauthorized, requestOptions).then(function (result) {
              if (useCache) {
                setCachedResponse(cacheKey, result, ttlMs);
              }
              if (MUTATION_METHODS.has(normalizedMethod)) {
                clearResponseCache();
              }
              return result;
            }).finally(function () {
              if (requestKey) inFlightRequests.delete(requestKey);
            });
            if (requestKey) {
              inFlightRequests.set(requestKey, promise);
            }
            return _context5.a(2, promise);
        }
      }, _callee5);
    }));
    return _executeRequestWithPolicy.apply(this, arguments);
  }
  function requestApi(_x6, _x7) {
    return _requestApi.apply(this, arguments);
  }
  function _requestApi() {
    _requestApi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(method, url) {
      var params,
        unauthorized,
        requestOptions,
        logging,
        normalizedMethod,
        normalizedEndpoint,
        didRefreshAfter401,
        status,
        cooldownMs,
        _cooldownMs,
        refreshStatus,
        _args6 = arguments,
        _t2,
        _t3,
        _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            params = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
            unauthorized = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
            requestOptions = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : {};
            logging = Lampa.Storage.field('trakt_enable_logging');
            normalizedMethod = String(method || 'GET').toUpperCase();
            normalizedEndpoint = normalizeRequestUrl(url).full;
            didRefreshAfter401 = false;

            // If auth is blocked due to prior terminal auth failure, stop user-scoped traffic until new token appears.
            if (!(!unauthorized && isAuthBlocked())) {
              _context6.n = 2;
              break;
            }
            if (!(hasUsableAccessToken() && hasNewAccessTokenSinceBlock())) {
              _context6.n = 1;
              break;
            }
            clearAuthBlocked();
            _context6.n = 2;
            break;
          case 1:
            if (logging) {
              logWarn('Auth blocked: user-scoped request rejected without network', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                reason: authBlockedReason || 'reauth_required'
              }, {
                debugOnly: true
              });
            }
            notifyAuthBlockedOnce();
            throw buildAuthBlockedError(authBlockedReason || 'reauth_required');
          case 2:
            if (!(!unauthorized && getAuthRateLimitRemainingMs() > 0)) {
              _context6.n = 3;
              break;
            }
            if (logging) {
              logWarn('Auth cooldown: user-scoped request rejected without network', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                retryAfterMs: getAuthRateLimitRemainingMs()
              }, {
                debugOnly: true
              });
            }
            throw buildAuthRateLimitError();
          case 3:
            if (!(!unauthorized && Lampa.Storage.get('trakt_refresh_token'))) {
              _context6.n = 9;
              break;
            }
            if (!(getAuthRateLimitRemainingMs() > 0)) {
              _context6.n = 4;
              break;
            }
            if (logging) {
              logWarn('Preflight token refresh skipped: auth cooldown active', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                retryAfterMs: getAuthRateLimitRemainingMs()
              }, {
                debugOnly: true
              });
            }
            throw buildAuthRateLimitError();
          case 4:
            _context6.p = 4;
            _context6.n = 5;
            return ensureValidAccessToken({
              reason: "preflight:".concat(normalizedMethod, ":").concat(normalizedEndpoint)
            });
          case 5:
            _context6.n = 9;
            break;
          case 6:
            _context6.p = 6;
            _t2 = _context6.v;
            status = Number(_t2 && _t2.status) || 0;
            if (!isAuthRateLimitStatus(status)) {
              _context6.n = 7;
              break;
            }
            cooldownMs = setAuthRateLimitCooldown(_t2);
            if (logging) {
              logWarn('Preflight token refresh rate limited, auth cooldown entered', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                status: status,
                cooldownMs: cooldownMs
              }, {
                debugOnly: true
              });
            }
            throw buildAuthRateLimitError(_t2);
          case 7:
            if (!(_t2 && (_t2.status === 400 || _t2.status === 401))) {
              _context6.n = 8;
              break;
            }
            setAuthBlocked("preflight_refresh_failed_".concat(_t2.status));
            notifyAuthBlockedOnce();
            throw _t2;
          case 8:
            // On 503, enter auth cooldown and continue with current token
            if (status === 503) {
              _cooldownMs = setAuthRateLimitCooldown(_t2);
              if (logging) {
                logWarn('Preflight token refresh: 503 received, auth cooldown entered, using current token', {
                  endpoint: normalizedEndpoint,
                  method: normalizedMethod,
                  cooldownMs: _cooldownMs
                }, {
                  debugOnly: true
                });
              }
            } else if (logging) {
              logWarn('Preflight token refresh failed, using current token', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod,
                status: _t2 && _t2.status
              }, {
                debugOnly: true
              });
            }
          case 9:
            _context6.p = 10;
            _context6.n = 11;
            return executeRequestWithPolicy(normalizedMethod, url, params, unauthorized, requestOptions);
          case 11:
            return _context6.a(2, _context6.v);
          case 12:
            _context6.p = 12;
            _t3 = _context6.v;
            if (!(!unauthorized && _t3 && _t3.status === 401 && !didRefreshAfter401)) {
              _context6.n = 18;
              break;
            }
            didRefreshAfter401 = true;
            if (logging) {
              logDebug('401 received, run single refresh flow', {
                endpoint: normalizedEndpoint,
                method: normalizedMethod
              });
            }
            _context6.p = 13;
            _context6.n = 14;
            return runRefreshFlow({
              reason: "401:".concat(normalizedMethod, ":").concat(normalizedEndpoint)
            });
          case 14:
            _context6.n = 17;
            break;
          case 15:
            _context6.p = 15;
            _t4 = _context6.v;
            refreshStatus = Number(_t4 && _t4.status) || 0;
            if (!isAuthRateLimitStatus(refreshStatus)) {
              _context6.n = 16;
              break;
            }
            setAuthRateLimitCooldown(_t4);
            throw buildAuthRateLimitError(_t4);
          case 16:
            throw _t4;
          case 17:
            return _context6.a(3, 9);
          case 18:
            if (!unauthorized && _t3 && _t3.status === 401) {
              setAuthBlocked('unauthorized_after_refresh');
              notifyAuthBlockedOnce();
            }
            if (!unauthorized && _t3 && _t3.status === 403 && normalizedEndpoint === '/users/me') {
              setAuthBlocked('users_me_forbidden');
              notifyAuthBlockedOnce();
            }
            throw _t3;
          case 19:
            return _context6.a(2);
        }
      }, _callee6, null, [[13, 15], [10, 12], [4, 6]]);
    }));
    return _requestApi.apply(this, arguments);
  }
  function _performRequest(method, url) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var unauthorized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var requestOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var headers = ensureHeaders({
      unauthorized: unauthorized
    });
    return executeRequest(method, url, params, headers, unauthorized, requestOptions);
  }

  /**
   * Ensure Trakt headers (canonical).
   * Always sets:
   * - 'Content-Type': 'application/json'
   * - 'trakt-api-version': '2'
   * - 'x-requested-with': 'lme-plugins'
   * When unauthorized === true, DO NOT add Authorization Bearer header.
   * When unauthorized === false and access token exists, add Bearer.
   * Signature: function ensureHeaders({ unauthorized } = { unauthorized: false })
   */
  function ensureHeaders() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        unauthorized: false
      },
      unauthorized = _ref4.unauthorized;
    var headers = {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'x-requested-with': 'lme-plugins'
    };
    if (!unauthorized) {
      var token = Lampa.Storage.get('trakt_token');
      if (token) headers['Authorization'] = "Bearer ".concat(token);
    }
    return headers;
  }
  function formatTraktResults() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return {
      results: (Array.isArray(items) ? items : []).map(function (item) {
        var media = item.movie || item.show;
        if (!media || !media.ids) return null;
        return {
          component: 'full',
          id: media.ids.tmdb || media.ids.trakt,
          ids: media.ids,
          title: media.title,
          original_title: media.title,
          release_date: media.year ? String(media.year) : '',
          vote_average: Number(media.rating || 0),
          poster: getImageUrl(media, 'poster'),
          image: getImageUrl(media, 'fanart'),
          method: item.movie ? 'movie' : 'tv',
          card_type: item.movie ? 'movie' : 'tv'
        };
      }).filter(Boolean)
    };
  }
  function mapUpNextNitroItem() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var show = item.show || {};
    var ids = show.ids || {};
    var progress = item.progress || {};
    var nextEpisode = progress.next_episode || null;
    var lastEpisode = progress.last_episode || null;
    var id = ids.tmdb || ids.trakt;
    if (!id) return null;
    var watched = toNonNegativeInt$1(progress.completed) !== null ? toNonNegativeInt$1(progress.completed) : toNonNegativeInt$1(progress && progress.stats && progress.stats.play_count) || 0;
    var aired = toNonNegativeInt$1(progress.aired) !== null ? toNonNegativeInt$1(progress.aired) : toNonNegativeInt$1(show.aired_episodes) !== null ? toNonNegativeInt$1(show.aired_episodes) : toNonNegativeInt$1(item.cached_aired_episode_count) || 0;
    var progressTotal = aired > 0 ? aired : watched;
    var releaseDate = nextEpisode && nextEpisode.first_aired ? nextEpisode.first_aired : show.first_aired || (show.year ? String(show.year) : '');
    return {
      component: 'full',
      id: id,
      ids: ids,
      title: show.title || '',
      original_title: show.original_title || show.title || '',
      original_name: show.original_title || show.title || '',
      name: show.title || '',
      release_date: releaseDate ? String(releaseDate) : '',
      vote_average: Number(show.rating || 0),
      poster: getImageUrl(show, 'poster'),
      image: getImageUrl(show, 'fanart'),
      method: 'tv',
      type: 'tv',
      card_type: 'tv',
      source: 'tmdb',
      trakt_upnext_watched: watched,
      trakt_upnext_total: progressTotal,
      trakt_upnext_progress: "".concat(watched, "/").concat(progressTotal),
      trakt_upnext_last_watched_at: progress.last_watched_at || null,
      trakt_upnext_hidden: toNonNegativeInt$1(progress.hidden) || 0,
      trakt_upnext_reset_at: progress.reset_at || null,
      trakt_upnext_next_episode: nextEpisode,
      trakt_upnext_last_episode: lastEpisode,
      total_count: toNonNegativeInt$1(item.total_count)
    };
  }

  // Функція для отримання історії серіалу за TMDB ID
  function getShowHistory(tmdbId) {
    var traktId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      // Якщо переданий Trakt ID, отримуємо інформацію з Trakt
      if (traktId) {
        requestApi('GET', "/shows/".concat(traktId, "/history")).then(function (historyData) {
          resolve(historyData);
        }).catch(function (error) {
          reject(error);
        });
        return;
      }

      // Спочатку отримуємо Trakt ID за TMDB ID
      requestApi('GET', "/search/tmdb/".concat(tmdbId, "?type=show")).then(function (response) {
        if (response && response.length > 0 && response[0].show && response[0].show.ids.trakt) {
          var foundTraktId = response[0].show.ids.trakt;

          // Отримуємо історію серіалу за Trakt ID
          requestApi('GET', "/sync/history/shows/".concat(foundTraktId)).then(function (historyData) {
            resolve(historyData);
          }).catch(function (error) {
            reject(error);
          });
        } else {
          reject(new Error('Show not found in Trakt'));
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  function resolveTraktIds() {
    var _params$external_ids, _params$external_ids2, _params$external_ids3;
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rawIds = params.ids && Object.keys(params.ids).length ? _objectSpread2({}, params.ids) : {};
    var tmdbId = params.id || params.tmdb || ((_params$external_ids = params.external_ids) === null || _params$external_ids === void 0 ? void 0 : _params$external_ids.tmdb_id);
    var traktId = (_params$external_ids2 = params.external_ids) === null || _params$external_ids2 === void 0 ? void 0 : _params$external_ids2.trakt_id;
    var imdbId = ((_params$external_ids3 = params.external_ids) === null || _params$external_ids3 === void 0 ? void 0 : _params$external_ids3.imdb_id) || params.imdb;
    if (traktId && !rawIds.trakt) rawIds.trakt = traktId;
    if (tmdbId && !rawIds.tmdb) rawIds.tmdb = tmdbId;
    if (imdbId && !rawIds.imdb) rawIds.imdb = imdbId;
    return rawIds;
  }
  function normalizeMediaType() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (params.method || params.type || '').toString().toLowerCase();
    return method === 'movie' ? 'movie' : 'show';
  }
  function buildSyncPayload() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ids = resolveTraktIds(params);
    if (!ids || !Object.keys(ids).length) {
      throw new Error('TraktTV media ids are missing');
    }
    return normalizeMediaType(params) === 'movie' ? {
      movies: [{
        ids: ids
      }],
      shows: []
    } : {
      movies: [],
      shows: [{
        ids: ids
      }]
    };
  }
  function sameAnyId() {
    var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!left || !right) return false;
    var keys = ['trakt', 'tmdb', 'imdb'];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (left[key] && right[key] && String(left[key]) === String(right[key])) {
        return true;
      }
    }
    return false;
  }
  function extractMediaFromSyncItem() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (item.movie) return {
      media: item.movie,
      type: 'movie'
    };
    if (item.show) return {
      media: item.show,
      type: 'show'
    };
    return {
      media: null,
      type: null
    };
  }
  function normalizeListCardData(item) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$likedListIds = _ref5.likedListIds,
      likedListIds = _ref5$likedListIds === void 0 ? [] : _ref5$likedListIds,
      _ref5$wide = _ref5.wide,
      wide = _ref5$wide === void 0 ? false : _ref5$wide,
      _ref5$canManage = _ref5.canManage,
      canManage = _ref5$canManage === void 0 ? false : _ref5$canManage;
    var list = item && item.list ? item.list : item;
    if (!list) return null;
    var ids = list.ids || {};
    var listId = ids.trakt || list.id;
    if (!listId) return null;
    var likedIds = Array.isArray(likedListIds) ? likedListIds : [];
    var rawTitle = list.name || list.title || '';
    var title = rawTitle.replace(/^\s*\[\d+\]\s*/, '').trim();
    var description = list.description || '';
    var poster = getImageUrl(list, 'poster') || textToImage(title || rawTitle || 'List');
    var image = getImageUrl(list, 'fanart');
    var cardTitle = wide ? '' : title;
    var card = {
      component: 'trakt_list',
      id: listId,
      list_id: listId,
      ids: ids,
      slug: ids.slug || list.slug || '',
      title: cardTitle,
      list_title: title,
      original_title: cardTitle,
      description: description,
      overview: description,
      poster: poster,
      image: image,
      cover: image || poster,
      method: 'list',
      item_count: list.item_count || 0,
      privacy: list.privacy || '',
      display_numbers: !!list.display_numbers,
      allow_comments: !!list.allow_comments,
      updated_at: list.updated_at || list.updated || '',
      can_manage: !!canManage,
      is_liked: likedIds.includes(listId)
    };
    if (wide) {
      card.params = {
        style: {
          name: 'wide'
        }
      };
    }
    return card;
  }
  function formatListCards(items) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var results = (Array.isArray(items) ? items : []).map(function (item) {
      return normalizeListCardData(item, options);
    }).filter(Boolean);
    return {
      results: results
    };
  }
  function sanitizeListPayload() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var normalized = {};
    var name = (payload.name || payload.title || '').toString().trim();
    var description = (payload.description || '').toString().trim();
    var privacy = (payload.privacy || '').toString().trim();
    if (name) normalized.name = name;
    if (description) normalized.description = description;
    if (privacy) normalized.privacy = privacy;
    if (typeof payload.display_numbers === 'boolean') normalized.display_numbers = payload.display_numbers;
    if (typeof payload.allow_comments === 'boolean') normalized.allow_comments = payload.allow_comments;
    if (typeof payload.sort_by === 'string' && payload.sort_by) normalized.sort_by = payload.sort_by;
    if (typeof payload.sort_how === 'string' && payload.sort_how) normalized.sort_how = payload.sort_how;
    return normalized;
  }
  function makePaginationMeta(items, page, limit) {
    var count = Array.isArray(items) ? items.length : 0;
    var total = (page - 1) * limit + count;
    var total_pages = count === limit ? page + 1 : page;
    return {
      total: total,
      total_pages: total_pages,
      page: page
    };
  }
  function toPositiveInt$1(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }
  function toNonNegativeInt$1(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
  }
  function resolvePaginationFromHeaders() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var fallbackPage = toPositiveInt$1(fallback.page) || 1;
    var fallbackLimit = toPositiveInt$1(fallback.limit) || 1;
    var fallbackTotal = toNonNegativeInt$1(fallback.total) || 0;
    var page = toPositiveInt$1(headers['x-pagination-page']) || fallbackPage;
    var limit = toPositiveInt$1(headers['x-pagination-limit']) || fallbackLimit;
    var total = toNonNegativeInt$1(headers['x-pagination-item-count']);
    var pageCount = toPositiveInt$1(headers['x-pagination-page-count']);
    var safeTotal = total !== null ? total : fallbackTotal;
    var safePageCount = pageCount || Math.max(1, Math.ceil(safeTotal / limit));
    return {
      page: page,
      limit: limit,
      total: safeTotal,
      total_pages: safePageCount
    };
  }
  var WATCHLIST_SORT_FIELDS = new Set(['rank', 'added', 'title', 'released', 'runtime', 'popularity', 'random', 'percentage', 'imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes', 'my_rating', 'watched', 'collected']);
  var WATCHLIST_VIP_SORT_FIELDS = new Set(['imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes']);
  function normalizeWatchlistSort(rawSort) {
    var normalized = (rawSort || 'added/desc').toString().trim().toLowerCase().replace(/^\/+/, '');
    var parts = normalized.split('/').filter(Boolean);
    var field = WATCHLIST_SORT_FIELDS.has(parts[0]) ? parts[0] : 'added';
    var order = parts[1] === 'asc' ? 'asc' : 'desc';
    return "".concat(field, "/").concat(order);
  }
  function normalizeWatchlistMediaType(rawType) {
    var value = (rawType || '').toString().trim().toLowerCase();
    if (value === 'movie' || value === 'movies') return 'movies';
    if (value === 'show' || value === 'shows' || value === 'tv' || value === 'series' || value === 'serials') return 'shows';
    if (value === 'all' || value === 'mixed' || value === 'movies,shows') return 'movies,shows';
    return 'movies,shows';
  }
  function resolveWatchlistPagination() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 36;
    var hasHeaderPagination = !!(toPositiveInt$1(headers['x-pagination-page']) || toPositiveInt$1(headers['x-pagination-limit']) || toPositiveInt$1(headers['x-pagination-page-count']) || toNonNegativeInt$1(headers['x-pagination-item-count']) !== null);
    if (hasHeaderPagination) {
      return resolvePaginationFromHeaders(headers, {
        page: page,
        limit: limit,
        total: (Math.max(1, page) - 1) * Math.max(1, limit) + (Array.isArray(items) ? items.length : 0)
      });
    }
    var fallback = makePaginationMeta(items, page, limit);
    return {
      page: page,
      limit: limit,
      total: fallback.total,
      total_pages: fallback.total_pages
    };
  }
  function buildWatchlistUrl() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$mediaType = _ref6.mediaType,
      mediaType = _ref6$mediaType === void 0 ? 'movies,shows' : _ref6$mediaType,
      _ref6$sort = _ref6.sort,
      sort = _ref6$sort === void 0 ? 'added/desc' : _ref6$sort,
      _ref6$page = _ref6.page,
      page = _ref6$page === void 0 ? 1 : _ref6$page,
      _ref6$limit = _ref6.limit,
      limit = _ref6$limit === void 0 ? 36 : _ref6$limit,
      uncollected = _ref6.uncollected;
    var query = new URLSearchParams({
      extended: 'full,images',
      page: String(page),
      limit: String(limit)
    });
    if (typeof uncollected !== 'undefined' && uncollected !== null) {
      var normalized = typeof uncollected === 'string' ? uncollected.toLowerCase().trim() : uncollected;
      if (normalized === true || normalized === 'true' || normalized === 1 || normalized === '1') {
        query.set('uncollected', 'true');
      } else if (normalized === false || normalized === 'false' || normalized === 0 || normalized === '0') {
        query.set('uncollected', 'false');
      }
    }
    return "/sync/watchlist/".concat(mediaType, "/").concat(sort, "?").concat(query.toString());
  }

  /* duplicate ensureHeaders removed */

  var api$1 = {
    addToHistory: addToHistory$1,
    watchlistSortFields: Array.from(WATCHLIST_SORT_FIELDS),
    watchlistVipSortFields: Array.from(WATCHLIST_VIP_SORT_FIELDS),
    normalizeWatchlistSort: normalizeWatchlistSort,
    isWatchlistVipSort: function isWatchlistVipSort() {
      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return WATCHLIST_VIP_SORT_FIELDS.has((field || '').toString().trim().toLowerCase());
    },
    formatListsResults: function formatListsResults(items) {
      var likedListIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      try {
        return formatListCards(items, _objectSpread2({
          likedListIds: likedListIds
        }, options));
      } catch (error) {
        return {
          results: []
        };
      }
    },
    get: function get(url) {
      var unauthorized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return requestApi('GET', url, {}, unauthorized);
    },
    // Normalize ids for watchlist/history operations.
    // Prefer params.ids when filled; fall back to tmdb_id/trakt_id when needed.
    recommendations: function recommendations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = options.limit || 36;
      var page = options.page || 1;
      var fetchLimit = limit * 5;
      var moviesRequest = requestApi('GET', buildRecommendationsUrl$1('movies', fetchLimit));
      var showsRequest = requestApi('GET', buildRecommendationsUrl$1('shows', fetchLimit));
      return Promise.allSettled([moviesRequest, showsRequest]).then(function (responses) {
        var moviesState = responses[0];
        var showsState = responses[1];
        var moviesResponse = moviesState && moviesState.status === 'fulfilled' && Array.isArray(moviesState.value) ? moviesState.value : [];
        var showsResponse = showsState && showsState.status === 'fulfilled' && Array.isArray(showsState.value) ? showsState.value : [];
        if (moviesState && moviesState.status === 'rejected') {
          logWarn('recommendations: movies request failed', moviesState.reason, {
            debugOnly: true
          });
        }
        if (showsState && showsState.status === 'rejected') {
          logWarn('recommendations: shows request failed', showsState.reason, {
            debugOnly: true
          });
        }
        var formattedMovies = moviesResponse.map(function (movie) {
          return {
            component: 'full',
            id: movie.ids.tmdb,
            ids: movie.ids,
            title: movie.title,
            original_title: movie.title,
            release_date: movie.year + '',
            vote_average: Number(movie.rating || 0),
            poster: getImageUrl(movie, 'poster'),
            method: 'movie',
            card_type: 'movie'
          };
        });
        var formattedShows = showsResponse.map(function (show) {
          return {
            component: 'full',
            id: show.ids.tmdb,
            ids: show.ids,
            title: show.title,
            original_title: show.title,
            original_name: show.original_title || show.title || '',
            release_date: show.year + '',
            vote_average: Number(show.rating || 0),
            poster: getImageUrl(show, 'poster'),
            type: 'tv',
            method: 'tv',
            card_type: 'tv'
          };
        });
        var combinedResults = [].concat(_toConsumableArray(formattedMovies), _toConsumableArray(formattedShows));
        if (!combinedResults.length) {
          if (moviesState.status === 'rejected' && showsState.status === 'rejected') {
            throw moviesState.reason || showsState.reason || new Error('Recommendations request failed');
          }
          return {
            results: [],
            total: 0,
            total_pages: 1,
            page: page
          };
        }
        for (var i = combinedResults.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var _ref7 = [combinedResults[j], combinedResults[i]];
          combinedResults[i] = _ref7[0];
          combinedResults[j] = _ref7[1];
        }
        var total = combinedResults.length;
        var total_pages = Math.max(1, Math.ceil(total / limit));
        var offset = (page - 1) * limit;
        var paginatedResults = combinedResults.slice(offset, offset + limit);
        return {
          results: paginatedResults,
          total: total,
          total_pages: total_pages,
          page: page
        };
      });
    },
    watchlist: function watchlist() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params.limit, 10) || 36);
      var sort = normalizeWatchlistSort(params.sort || params.watchlistSort);
      var mediaType = normalizeWatchlistMediaType(params.mediaType || params.watchlistType || params.type);
      var url = buildWatchlistUrl({
        mediaType: mediaType,
        sort: sort,
        page: page,
        limit: limit,
        uncollected: params.uncollected
      });
      return requestApi('GET', url, {}, false, 0, {
        withMeta: true
      }).then(function (response) {
        var payload = response && Array.isArray(response.data) ? response.data : [];
        var headers = response && response.headers ? response.headers : {};
        var formatted = formatTraktResults(payload);
        var pagination = resolveWatchlistPagination(headers, payload, page, limit);
        return {
          results: formatted.results || [],
          total: pagination.total,
          total_pages: pagination.total_pages,
          page: pagination.page,
          limit: pagination.limit
        };
      });
    },
    upnext: function upnext(params) {
      var requestedPage = Math.max(1, parseInt(params && params.page, 10) || 1);
      var requestedLimit = Math.max(1, parseInt(params && params.limit, 10) || 36);
      var query = new URLSearchParams({
        page: String(requestedPage),
        limit: String(requestedLimit)
      });
      var url = "/sync/progress/up_next_nitro?".concat(query.toString());
      return requestApi('GET', url, {}, false, 0, {
        withMeta: true
      }).then(function (response) {
        var payload = response && Array.isArray(response.data) ? response.data : [];
        var headers = response && response.headers ? response.headers : {};
        var mapped = payload.map(mapUpNextNitroItem).filter(Boolean);
        var bodyTotal = toNonNegativeInt$1(payload && payload[0] && payload[0].total_count);
        var fallbackTotal = bodyTotal !== null ? bodyTotal : (requestedPage - 1) * requestedLimit + mapped.length;
        var pagination = resolvePaginationFromHeaders(headers, {
          page: requestedPage,
          limit: requestedLimit,
          total: fallbackTotal
        });
        return {
          results: mapped,
          total: pagination.total,
          total_pages: pagination.total_pages,
          page: pagination.page,
          limit: pagination.limit
        };
      });
    },
    auth: {
      /**
       * Build Standard OAuth authorize URL
       * params: { redirect_uri, state?, signup?, prompt? }
       */
      startStandardOAuth: function startStandardOAuth() {
        var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          redirect_uri = _ref8.redirect_uri,
          state = _ref8.state,
          signup = _ref8.signup,
          prompt = _ref8.prompt;
        var base = "".concat(PROXY_BASE_URL, "/oauth/authorize");
        var qs = new URLSearchParams({
          redirect_uri: redirect_uri,
          response_type: 'code'
        });
        if (state) qs.set('state', state);
        if (typeof signup !== 'undefined') qs.set('signup', String(signup));
        if (prompt) qs.set('prompt', prompt);
        return base + '?' + qs.toString();
      },
      /**
       * Exchange authorization code for tokens
       * Body: { code, redirect_uri, grant_type: 'authorization_code' }
       * unauthorized = true
       */
      exchangeCode: function exchangeCode(_ref9) {
        var code = _ref9.code,
          redirect_uri = _ref9.redirect_uri;
        return requestApi('POST', '/oauth/token', {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        }, true).then(function (res) {
          if (res && res.access_token) {
            saveTokens(res);
          }
          return res;
        }).catch(function (error) {
          if (error && error.status === 400) {
            setAuthBlocked('oauth_exchange_failed_400');
          }
          throw error;
        });
      },
      /**
       * Refresh tokens using refresh_token
       * unauthorized = true
       */
      refresh: function refresh() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return runRefreshFlow(_objectSpread2({
          reason: 'manual-refresh'
        }, options));
      },
      ensureValid: function ensureValid() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ensureValidAccessToken(options);
      },
      storeTokens: function storeTokens() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        saveTokens(response);
        return response;
      },
      clear: function clear() {
        clearAuthBlocked();
        clearAuthStorage();
      },
      /**
       * Revoke token best-effort
       * unauthorized = true
       */
      revoke: function revoke(_ref0) {
        var token = _ref0.token;
        return requestApi('POST', '/oauth/revoke', {
          token: token
        }, true);
      },
      device: {
        /**
         * Device OAuth: start
         */
        login: function login() {
          var url = '/oauth/device/code';
          return rlWaitForSlot(url).then(function () {
            return _performRequest('POST', url, {}, true);
          }).then(function (res) {
            rlRecordRequest(url, 200);
            return res;
          }).catch(function (error) {
            rlRecordRequest(url, Number(error && error.status) || 0);
            throw error;
          });
        },
        /**
         * Device OAuth: poll token
         * unauthorized = true
         */
        poll: function poll(device_code) {
          var url = '/oauth/device/token';
          return rlWaitForSlot(url).then(function () {
            return _performRequest('POST', url, {
              code: device_code
            }, true);
          }).then(function (response) {
            rlRecordRequest(url, 200);
            if (response && response.access_token) {
              saveTokens(response);
            }
            return response;
          }).catch(function (error) {
            var status = Number(error && error.status) || 0;
            rlRecordRequest(url, status);
            if (status === 429) {
              var retryAfterSec = parseRetryAfterMs$1(error && error.headers ? error.headers : {});
              rlEnterCooldown(retryAfterSec ? Math.round(retryAfterSec / 1000) : undefined);
              logWarn('Trakt rate limit on device auth, global cooldown entered', {
                cooldownMs: rlGetCooldownRemainingMs()
              }, {
                debugOnly: true
              });
            }
            if (error && status === 400) {
              var payload = error && error.response;
              var code = payload && _typeof(payload) === 'object' ? String(payload.error || payload.error_code || '').toLowerCase() : '';
              if (code && code !== 'authorization_pending') {
                setAuthBlocked("device_poll_failed_".concat(code));
              }
            }
            throw error;
          });
        }
      },
      logout: function logout() {
        clearAuthBlocked();
        clearAuthStorage();
      }
    },
    addToWatchlist: function addToWatchlist(params) {
      return requestApi('POST', '/sync/watchlist', buildSyncPayload(params));
    },
    removeFromWatchlist: function removeFromWatchlist(params) {
      return requestApi('POST', '/sync/watchlist/remove', buildSyncPayload(params));
    },
    inWatchlist: function inWatchlist(params) {
      var type = normalizeMediaType(params) === 'movie' ? 'movies' : 'shows';
      var ids = resolveTraktIds(params);
      return requestApi('GET', "/sync/watchlist/".concat(type, "?extended=full")).then(function (response) {
        var found = (Array.isArray(response) ? response : []).find(function (item) {
          var entity = extractMediaFromSyncItem(item);
          return entity.media && sameAnyId(entity.media.ids || {}, ids);
        });
        return !!found;
      });
    },
    inHistory: function inHistory(params) {
      var type = normalizeMediaType(params) === 'movie' ? 'movies' : 'shows';
      var ids = resolveTraktIds(params);
      return requestApi('GET', "/sync/history/".concat(type, "?extended=full")).then(function (response) {
        var found = (Array.isArray(response) ? response : []).find(function (item) {
          var entity = extractMediaFromSyncItem(item);
          return entity.media && sameAnyId(entity.media.ids || {}, ids);
        });
        return !!found;
      });
    },
    // liked lists (read-only)
    likesLists: function likesLists() {
      var _this = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = params.page || 1;
      var limit = params.limit || 36;
      return requestApi('GET', "/users/me/likes/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images")).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var likedListIds = raw.map(function (item) {
          var _item$list;
          return item === null || item === void 0 || (_item$list = item.list) === null || _item$list === void 0 || (_item$list = _item$list.ids) === null || _item$list === void 0 ? void 0 : _item$list.trakt;
        }).filter(Boolean);
        var formatted = _this.formatListsResults(raw, likedListIds, {
          wide: false,
          canManage: false
        });
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    // alias for backward compatibility
    lists: function lists() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.likesLists(params);
    },
    // personal lists (CRUD enabled)
    myLists: function myLists() {
      var _this2 = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var page = params.page || 1;
      var limit = params.limit || 36;
      return requestApi('GET', "/users/me/lists?limit=".concat(limit, "&page=").concat(page, "&extended=images")).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = _this2.formatListsResults(raw, [], {
          wide: true,
          canManage: true
        });
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    myList: function myList() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.listId || params.id;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('GET', "/users/me/lists/".concat(encodeURIComponent(listId), "?extended=images")).then(function (response) {
        return normalizeListCardData(response, {
          wide: true,
          canManage: true
        });
      });
    },
    createList: function createList() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var body = sanitizeListPayload(payload);
      if (!body.name) return Promise.reject(new Error('List name is missing'));
      if (!body.privacy) body.privacy = 'private';
      return requestApi('POST', '/users/me/lists', body);
    },
    updateList: function updateList() {
      var _ref1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref1.listId,
        payload = _ref1.payload;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var body = sanitizeListPayload(payload);
      if (!body.name) return Promise.reject(new Error('List name is missing'));
      return requestApi('PUT', "/users/me/lists/".concat(encodeURIComponent(listId)), body);
    },
    deleteList: function deleteList() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref10.listId;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('DELETE', "/users/me/lists/".concat(encodeURIComponent(listId)));
    },
    addToList: function addToList() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref11.listId,
        item = _ref11.item;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('POST', "/users/me/lists/".concat(encodeURIComponent(listId), "/items"), buildSyncPayload(item || {}));
    },
    removeFromList: function removeFromList() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref12.listId,
        item = _ref12.item;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      return requestApi('POST', "/users/me/lists/".concat(encodeURIComponent(listId), "/items/remove"), buildSyncPayload(item || {}));
    },
    myListItems: function myListItems() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.listId || params.id;
      var page = params.page || 1;
      var limit = params.limit || 36;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var url = "/users/me/lists/".concat(encodeURIComponent(listId), "/items?extended=full,images&page=").concat(page, "&limit=").concat(limit);
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    inList: function inList() {
      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listId = _ref13.listId,
        item = _ref13.item,
        _ref13$limit = _ref13.limit,
        limit = _ref13$limit === void 0 ? 100 : _ref13$limit,
        _ref13$maxPages = _ref13.maxPages,
        maxPages = _ref13$maxPages === void 0 ? 10 : _ref13$maxPages;
      if (!listId) return Promise.reject(new Error('List ID is missing'));
      var ids = resolveTraktIds(item || {});
      if (!Object.keys(ids).length) return Promise.resolve(false);
      var page = 1;
      var _checkPage = function checkPage() {
        var url = "/users/me/lists/".concat(encodeURIComponent(listId), "/items?extended=images&page=").concat(page, "&limit=").concat(limit);
        return requestApi('GET', url).then(function (response) {
          var raw = Array.isArray(response) ? response : [];
          var found = raw.some(function (entry) {
            var entity = extractMediaFromSyncItem(entry);
            return entity.media && sameAnyId(entity.media.ids || {}, ids);
          });
          if (found) return true;
          if (!raw.length || raw.length < limit || page >= maxPages) return false;
          page += 1;
          return _checkPage();
        });
      };
      return _checkPage();
    },
    // public list detail (liked/shared)
    list: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listId = params.id || params.list_id || params.listId;
      var page = params.page || 1;
      var limit = params.limit || 36;
      if (!listId) {
        return Promise.reject(new Error('List ID is missing'));
      }
      var url = "/lists/".concat(encodeURIComponent(listId), "/items?extended=full,images&page=").concat(page, "&limit=").concat(limit);
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var pageMeta = makePaginationMeta(raw, page, limit);
        formatted.total = pageMeta.total;
        formatted.total_pages = pageMeta.total_pages;
        formatted.page = page;
        return formatted;
      });
    },
    // Новий метод для отримання списків, пов'язаних з медіа (фільмом або серіалом)
    getMediaLists: function getMediaLists(params) {
      return new Promise(function (resolve, reject) {
        var tmdbId = params.id;
        var mediaType = params.method; // 'movie' or 'show'

        if (!tmdbId || !mediaType) {
          reject(new Error('Media ID or type is missing'));
          return;
        }

        // Спочатку отримуємо Trakt ID за TMDB ID
        requestApi('GET', "/search/tmdb/".concat(tmdbId, "?type=").concat(mediaType)).then(function (searchResponse) {
          var traktId = null;
          if (searchResponse && searchResponse.length > 0) {
            if (mediaType === 'movie' && searchResponse[0].movie) {
              traktId = searchResponse[0].movie.ids.trakt;
            } else if (mediaType === 'show' && searchResponse[0].show) {
              traktId = searchResponse[0].show.ids.trakt;
            }
          }
          if (!traktId) {
            reject(new Error("Trakt ID not found for TMDB ID: ".concat(tmdbId)));
            return;
          }
          var url = '';
          if (mediaType === 'movie') {
            url = "/movies/".concat(traktId, "/lists");
          } else if (mediaType === 'show') {
            url = "/shows/".concat(traktId, "/lists");
          }
          requestApi('GET', url).then(function (response) {
            var formattedData = api$1.formatListsResults(response);
            resolve(formattedData.results);
          }).catch(function (error) {
            reject(error);
          });
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    dvdCalendar: function dvdCalendar() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = Math.max(1, parseInt(params.limit, 10) || 36);
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var now = new Date();
      var startDate = new Date(now);
      startDate.setDate(now.getDate() - 3);
      var yyyy = startDate.getFullYear();
      var mm = String(startDate.getMonth() + 1).padStart(2, '0');
      var dd = String(startDate.getDate()).padStart(2, '0');
      var dateString = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
      var days = 31;
      var url = "/calendars/my/dvd/".concat(dateString, "/").concat(days, "?extended=full,images");
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];
        var formatted = formatTraktResults(raw);
        var total = raw.length;
        return {
          results: formatted.results || [],
          total: total,
          total_pages: Math.max(1, Math.ceil(total / limit)),
          page: page
        };
      });
    },
    calendar: function calendar() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limit = Math.max(1, parseInt(params.limit, 10) || 36);
      var page = Math.max(1, parseInt(params.page, 10) || 1);

      // Calculate date range: 3 days ago to 3 days ahead (7 days total)
      var now = new Date();
      var startDate = new Date(now);
      startDate.setDate(now.getDate() - 3);
      var yyyy = startDate.getFullYear();
      var mm = String(startDate.getMonth() + 1).padStart(2, '0');
      var dd = String(startDate.getDate()).padStart(2, '0');
      var dateString = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
      var days = 7;
      var url = "/calendars/my/shows/".concat(dateString, "/").concat(days, "?extended=full,images");
      return requestApi('GET', url).then(function (response) {
        var raw = Array.isArray(response) ? response : [];

        // Group by show TMDB ID to deduplicate
        var showMap = {};
        raw.forEach(function (item) {
          var show = item && item.show;
          var episode = item && item.episode;
          if (!show || !show.ids) return;
          var tmdbId = show.ids.tmdb;
          if (!tmdbId) return;
          if (!showMap[tmdbId]) {
            showMap[tmdbId] = {
              show: show,
              first_aired: item.first_aired,
              episode: episode
            };
          }
        });
        var shows = Object.values(showMap);

        // Shuffle for variety
        for (var i = shows.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var _ref14 = [shows[j], shows[i]];
          shows[i] = _ref14[0];
          shows[j] = _ref14[1];
        }
        var total = shows.length;
        var offset = (page - 1) * limit;
        var paginated = shows.slice(offset, offset + limit);
        var results = paginated.map(function (_ref15) {
          var show = _ref15.show,
            first_aired = _ref15.first_aired,
            episode = _ref15.episode;
          var releaseDate = first_aired ? String(first_aired).slice(0, 10) : show.year ? String(show.year) : '';
          return {
            component: 'full',
            id: show.ids.tmdb,
            ids: show.ids,
            title: show.title,
            original_title: show.title,
            original_name: show.title,
            name: show.title,
            release_date: releaseDate,
            vote_average: Number(show.rating || 0),
            poster: getImageUrl(show, 'poster'),
            image: getImageUrl(show, 'fanart'),
            method: 'tv',
            type: 'tv',
            card_type: 'tv',
            source: 'tmdb',
            season: episode ? episode.season : null,
            episode: episode ? episode.number : null,
            episode_title: episode ? episode.title : null,
            air_date: releaseDate
          };
        });
        return {
          results: results,
          total: total,
          total_pages: Math.max(1, Math.ceil(total / limit)),
          page: page
        };
      });
    },
    scrobble: function scrobble(method, data) {
      return requestApi('POST', "/scrobble/".concat(method), data, false, 0, {
        cache: false
      });
    },
    getPlaybackProgress: function getPlaybackProgress() {
      return requestApi('GET', '/sync/playback');
    }
  };

  // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
  var Api$2 = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var API_MISSING_LOG_KEY$2 = 'component-main:api-missing';
  function logApiMissing$1() {
    logDebugOnce(API_MISSING_LOG_KEY$2, 'API bridge is unavailable in component/main');
  }

  // Version check for Lampa 3.0+ modular system
  var isLampa3 = window.Lampa && window.Lampa.Manifest && window.Lampa.Manifest.app_digital >= 300;
  var DEFAULT_WATCHLIST_SORT = 'added/desc';
  var DEFAULT_WATCHLIST_SORT_FIELDS = ['rank', 'added', 'title', 'released', 'runtime', 'popularity', 'random', 'percentage', 'imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes', 'my_rating', 'watched', 'collected'];
  var DEFAULT_WATCHLIST_QUICK_SORT_FIELDS = ['added', 'rank', 'released'];
  var DEFAULT_WATCHLIST_VIP_SORT_FIELDS = ['imdb_rating', 'tmdb_rating', 'rt_tomatometer', 'rt_audience', 'metascore', 'votes', 'imdb_votes', 'tmdb_votes'];
  var WATCHLIST_SORT_LABELS = {
    rank: {
      key: 'trakttv_watchlist_sort_rank',
      fallback: 'Rank'
    },
    added: {
      key: 'trakttv_watchlist_sort_added',
      fallback: 'Added'
    },
    title: {
      key: 'trakttv_watchlist_sort_title',
      fallback: 'Title'
    },
    released: {
      key: 'trakttv_watchlist_sort_released',
      fallback: 'Released'
    },
    runtime: {
      key: 'trakttv_watchlist_sort_runtime',
      fallback: 'Runtime'
    },
    popularity: {
      key: 'trakttv_watchlist_sort_popularity',
      fallback: 'Popularity'
    },
    random: {
      key: 'trakttv_watchlist_sort_random',
      fallback: 'Random'
    },
    percentage: {
      key: 'trakttv_watchlist_sort_percentage',
      fallback: 'Percentage'
    },
    imdb_rating: {
      key: 'trakttv_watchlist_sort_imdb_rating',
      fallback: 'IMDb rating'
    },
    tmdb_rating: {
      key: 'trakttv_watchlist_sort_tmdb_rating',
      fallback: 'TMDB rating'
    },
    rt_tomatometer: {
      key: 'trakttv_watchlist_sort_rt_tomatometer',
      fallback: 'RT Tomatometer'
    },
    rt_audience: {
      key: 'trakttv_watchlist_sort_rt_audience',
      fallback: 'RT Audience'
    },
    metascore: {
      key: 'trakttv_watchlist_sort_metascore',
      fallback: 'Metascore'
    },
    votes: {
      key: 'trakttv_watchlist_sort_votes',
      fallback: 'Votes'
    },
    imdb_votes: {
      key: 'trakttv_watchlist_sort_imdb_votes',
      fallback: 'IMDb votes'
    },
    tmdb_votes: {
      key: 'trakttv_watchlist_sort_tmdb_votes',
      fallback: 'TMDB votes'
    },
    my_rating: {
      key: 'trakttv_watchlist_sort_my_rating',
      fallback: 'My rating'
    },
    watched: {
      key: 'trakttv_watchlist_sort_watched',
      fallback: 'Watched'
    },
    collected: {
      key: 'trakttv_watchlist_sort_collected',
      fallback: 'Collected'
    }
  };
  var traktVipStatusCache = null;
  var traktVipStatusPromise = null;
  function resolveUpnextProgress$1() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var watched = Number(element.trakt_upnext_watched);
    var total = Number(element.trakt_upnext_total);
    var text = (element.trakt_upnext_progress || '').toString().trim();
    var safeWatched = Number.isFinite(watched) ? watched : 0;
    var safeTotal = Number.isFinite(total) ? total : 0;
    if (!text && safeTotal > 0) {
      text = "".concat(safeWatched, "/").concat(safeTotal);
    }
    if ((!safeWatched || !safeTotal) && text.indexOf('/') > -1) {
      var parts = text.split('/');
      var parsedWatched = Number(parts[0]);
      var parsedTotal = Number(parts[1]);
      if (Number.isFinite(parsedWatched) && parsedWatched >= 0) safeWatched = parsedWatched;
      if (Number.isFinite(parsedTotal) && parsedTotal > 0) safeTotal = parsedTotal;
    }
    if (!text) return null;
    var percent = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round(safeWatched / safeTotal * 100))) : null;
    return {
      text: text,
      percent: percent
    };
  }
  function renderUpnextCardWatched(card, element) {
    var progress = resolveUpnextProgress$1(element || {});
    if (!progress) return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView) return;
    var wrap = cardView.querySelector('.card-watched.trakt-upnext-watched');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'card-watched trakt-upnext-watched';
      wrap.innerHTML = '<div class="card-watched__inner"><div class="card-watched__body"></div></div>';
      cardView.insertBefore(wrap, cardView.firstChild);
    }
    var body = wrap.querySelector('.card-watched__body');
    if (!body) return;
    var row = body.querySelector('.card-watched__item.trakt-upnext-watched__item');
    if (!row) {
      row = document.createElement('div');
      row.className = 'card-watched__item trakt-upnext-watched__item';
      row.innerHTML = '<span></span><div class="time-line"><div></div></div>';
      body.innerHTML = '';
      body.appendChild(row);
    }
    var title = row.querySelector('span');
    if (title) title.textContent = progress.text;
    var bar = row.querySelector('.time-line > div');
    if (bar) bar.style.width = "".concat(progress.percent || 0, "%");
  }
  function renderTvTypeBadge(card, element) {
    if (!element || element.method !== 'tv' && element.type !== 'show') return;
    var cardNode = card && typeof card.render === 'function' ? card.render(true) : null;
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardNode || !cardView) return;
    cardNode.classList.add('card--tv');
    if (!cardView.querySelector('.card__type')) {
      var type = document.createElement('div');
      type.className = 'card__type';
      type.textContent = Lampa.Lang.translate('trakttv_card_type_tv');
      cardView.appendChild(type);
    }
  }
  function baseComponent(object, type) {
    var comp;
    var total_pages = 0;
    var waitload = false;

    // Use modular system for Lampa 3.0+, fallback to old system for compatibility
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          var params = _objectSpread2({}, object);
          if ((type === 'list' || type === 'myListItems') && object.id) {
            params.id = object.id;
          } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
            params.id = object.list_id;
          }
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2) {
            logApiMissing$1();
            this.empty();
            if (this.activity) this.activity.loader(false);
            return;
          }
          Api$2[type](params).then(function (data) {
            if (data && data.total_pages) {
              total_pages = data.total_pages;
            }
            _this.build(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
              results: []
            });
          }).catch(function () {
            _this.empty();
            if (_this.activity) _this.activity.loader(false);
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this2 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page <= total_pages) {
            waitload = true;
            object.page++;
            var params = _objectSpread2({}, object);
            if ((type === 'list' || type === 'myListItems') && object.id) {
              params.id = object.id;
            } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
              params.id = object.list_id;
            }
            params.limit = 36;
            if (!Api$2) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2[type](params).then(function (data) {
              if (data && data.total_pages) {
                total_pages = data.total_pages;
                _this2.total_pages = data.total_pages;
              }
              resolve.call(_this2, data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
                results: []
              });
              waitload = false;
            }).catch(function () {
              waitload = false;
              reject.call(_this2);
            });
          } else {
            reject.call(this);
          }
        },
        onController: function onController(controller) {
          if (type === 'watchlist' && object && typeof object.onHead === 'function') {
            controller.up = function () {
              if (Navigator.canmove('up')) Navigator.move('up');else object.onHead();
            };
          }
        },
        onEmpty: function onEmpty() {
          if (type !== 'watchlist' || !object || typeof object.onHead !== 'function') return;
          if (!this.empty_class || typeof this.empty_class.use !== 'function') return;
          this.empty_class.use({
            onController: function onController(controller) {
              controller.up = function () {
                if (Navigator.canmove('up')) Navigator.move('up');else object.onHead();
              };
            }
          });
        },
        onInstance: function onInstance(card, element) {
          card.use({
            onCreate: function onCreate() {
              renderTvTypeBadge(this, element);
              if (type === 'upnext') {
                renderUpnextCardWatched(this, element);
              }
            }
          });
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              Lampa.Activity.push(this.data);
            },
            onLong: function onLong() {
              if (type === 'myListItems' && object && object.can_manage && object.id) {
                openMyListItemActions(object, element);
              }
            }
          });
        }
      });
    } else {
      // Backward compatibility for Lampa < 3.0
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this3 = this;
        var params = _objectSpread2({}, object);
        if ((type === 'list' || type === 'myListItems') && object.id) {
          params.id = object.id;
        } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
          params.id = object.list_id;
        }
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2) {
          logApiMissing$1();
          return;
        }
        Api$2[type](params).then(function (data) {
          if (data && data.total_pages) {
            total_pages = data.total_pages;
          }
          _this3.build(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
            results: []
          });
          if (_this3.activity.scroll) {
            _this3.activity.scroll.onEnd = _this3.next.bind(_this3);
          }
        }).catch(function () {
          _this3.empty();
          if (_this3.activity) _this3.activity.loader(false);
        });
      };
      comp.next = function () {
        var _this4 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          if ((type === 'list' || type === 'myListItems') && object.id) {
            params.id = object.id;
          } else if ((type === 'list' || type === 'myListItems') && object.list_id) {
            params.id = object.list_id;
          }
          params.limit = 36;
          if (!Api$2) {
            logApiMissing$1();
            return;
          }
          Api$2[type](params).then(function (data) {
            if (data && data.total_pages) {
              total_pages = data.total_pages;
            }
            _this4.append(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
              results: []
            });
            waitload = false;
          }).catch(function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (_, element, card) {
        renderTvTypeBadge(card, element);
        if (type === 'upnext') {
          renderUpnextCardWatched(card, element);
        }
        card.onMenu = type === 'myListItems' && object && object.can_manage && object.id ? function () {
          return openMyListItemActions(object, element);
        } : false;
        card.onEnter = function () {
          Lampa.Activity.push(card.data);
        };
      };
    }
    return comp;
  }
  function baseRecommendations(object) {
    var comp;
    var total_pages = 0;
    var waitload = false;

    // Use modular system for Lampa 3.0+, fallback to old system for compatibility
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this5 = this;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2) {
            logApiMissing$1();
            this.empty();
            if (this.activity) this.activity.loader(false);
            return;
          }
          Api$2.recommendations(params).then(function (recommendations) {
            _this5.build(recommendations && _typeof(recommendations) === 'object' && Array.isArray(recommendations.results) ? recommendations : {
              results: []
            });
            if (recommendations && recommendations.total_pages) {
              total_pages = recommendations.total_pages;
            }
          }).catch(function () {
            _this5.empty();
            if (_this5.activity) _this5.activity.loader(false);
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this6 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page <= total_pages) {
            waitload = true;
            object.page++;
            var params = _objectSpread2({}, object);
            params.limit = 36;
            if (!Api$2) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2.recommendations(params).then(function (data) {
              if (data && data.total_pages) {
                total_pages = data.total_pages;
                _this6.total_pages = data.total_pages;
              }
              resolve.call(_this6, data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
                results: []
              });
              waitload = false;
            }).catch(function () {
              waitload = false;
              reject.call(_this6);
            });
          } else {
            reject.call(this);
          }
        },
        onInstance: function onInstance(card, element) {
          renderTvTypeBadge(card, element);
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              Lampa.Activity.push({
                url: '',
                component: 'full',
                id: element.id,
                method: element.method,
                card: this.data,
                source: 'tmdb'
              });
            }
          });
        }
      });
    } else {
      // Backward compatibility for Lampa < 3.0
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this7 = this;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2) {
          logApiMissing$1();
          return;
        }
        Api$2.recommendations(params).then(function (recommendations) {
          _this7.build(recommendations && _typeof(recommendations) === 'object' && Array.isArray(recommendations.results) ? recommendations : {
            results: []
          });
          if (recommendations && recommendations.total_pages) {
            total_pages = recommendations.total_pages;
          }
          if (_this7.activity.scroll) {
            _this7.activity.scroll.onEnd = _this7.next.bind(_this7);
          }
        }).catch(function () {
          _this7.empty();
          if (_this7.activity) _this7.activity.loader(false);
        });
      };
      comp.next = function () {
        var _this8 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          if (!Api$2) {
            logApiMissing$1();
            return;
          }
          Api$2.recommendations(params).then(function (data) {
            if (data && data.total_pages) {
              total_pages = data.total_pages;
            }
            _this8.append(data && _typeof(data) === 'object' && Array.isArray(data.results) ? data : {
              results: []
            });
            waitload = false;
          }).catch(function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (object, element, card) {
        renderTvTypeBadge(card, element);
        card.onMenu = false;
        card.onEnter = function () {
          Lampa.Activity.push({
            url: '',
            component: 'full',
            id: element.id,
            method: element.method,
            card: card,
            source: 'tmdb'
          });
        };
      };
    }
    return comp;
  }
  function t$3(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function notify$1(text) {
    Lampa.Bell.push({
      text: text
    });
  }
  function getListName() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (element.list_title || element.title || element.name || '').trim();
  }
  function restoreContentController() {
    setTimeout(function () {
      if (Lampa && Lampa.Controller) Lampa.Controller.toggle('content');
    }, 0);
  }
  function formatNamedListTitle(name, itemCount) {
    var safeName = (name || '').trim();
    var hasCount = typeof itemCount === 'number' && itemCount >= 0;
    if (safeName && hasCount) return "".concat(safeName, " (").concat(itemCount, ")");
    if (safeName) return safeName;
    return t$3('trakt_list_detail', 'List Content');
  }
  function refreshActivity(object, component) {
    if (!Lampa || !Lampa.Activity || typeof Lampa.Activity.replace !== 'function') return;
    var next = _objectSpread2(_objectSpread2({}, object), {}, {
      component: component || object.component,
      page: 1,
      refresh: Date.now()
    });
    Lampa.Activity.replace(next);
  }
  function refreshMyListsAfterCreate(activityObject, createdList) {
    var listId = createdList && createdList.ids ? createdList.ids.trakt || createdList.id : createdList && createdList.id;
    var maxAttempts = 8;
    var delayMs = 900;
    if (!Api$2 || !listId) {
      refreshActivity(activityObject, 'trakt_my_lists');
      return;
    }
    var _attempt = function attempt(index) {
      Api$2.myLists({
        page: 1,
        limit: 100
      }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        var found = results.some(function (item) {
          return String(item.id) === String(listId);
        });
        if (found || index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt(index + 1);
        }, delayMs);
      }).catch(function () {
        if (index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt(index + 1);
        }, delayMs);
      });
    };
    _attempt(1);
  }
  function refreshMyListsAfterDelete(activityObject, deletedListId) {
    var listId = deletedListId;
    var maxAttempts = 8;
    var delayMs = 900;
    if (!Api$2 || !listId) {
      refreshActivity(activityObject, 'trakt_my_lists');
      return;
    }
    var _attempt2 = function attempt(index) {
      Api$2.myLists({
        page: 1,
        limit: 100
      }).then(function (data) {
        var results = data && Array.isArray(data.results) ? data.results : [];
        var stillExists = results.some(function (item) {
          return String(item.id) === String(listId);
        });
        if (!stillExists || index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt2(index + 1);
        }, delayMs);
      }).catch(function () {
        if (index >= maxAttempts) {
          refreshActivity(activityObject, 'trakt_my_lists');
          return;
        }
        setTimeout(function () {
          return _attempt2(index + 1);
        }, delayMs);
      });
    };
    _attempt2(1);
  }
  function showApiError(error) {
    var fallbackKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trakt_list_action_error';
    var status = error && error.status;
    var message = t$3(fallbackKey, 'Trakt request failed');
    if (status === 420) message = t$3('trakt_list_limit_reached', 'List limit reached');else if (status === 409) message = t$3('trakt_list_conflict', 'Conflict while updating list');else if (status === 401 || status === 403) message = t$3('trakttvAuthMissed', 'Not logged');
    notify$1(message);
    logError('List API request failed', {
      status: status,
      error: error
    }, {
      debugOnly: true
    });
  }
  function buildCreateListCard() {
    return {
      id: '__trakt_create_list__',
      title: t$3('trakt_list_create_short', 'Create'),
      description: '',
      overview: '',
      method: 'list',
      can_manage: true,
      is_create_action: true,
      cover: './img/img_load.svg',
      poster: './img/img_load.svg',
      params: {
        style: {
          name: 'wide'
        }
      }
    };
  }
  function withCreateListAction(data, page) {
    if (page !== 1) return data;
    var normalized = data && _typeof(data) === 'object' && Array.isArray(data.results) ? _objectSpread2(_objectSpread2({}, data), {}, {
      results: data.results.slice()
    }) : {
      results: []
    };
    normalized.results.unshift(buildCreateListCard());
    return normalized;
  }
  function openListDetail(element) {
    var componentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trakt_list_detail';
    var listName = getListName(element);
    Lampa.Activity.push({
      url: '',
      title: formatNamedListTitle(listName, element.item_count),
      component: componentName,
      id: element.id,
      list_id: element.id,
      name: listName,
      description: element.description,
      privacy: element.privacy,
      can_manage: !!element.can_manage,
      page: 1,
      source: 'tmdb'
    });
  }
  function openListEditor(list, onSubmit) {
    var source = list || {};
    var defaultName = source.list_title || source.title || source.name || '';
    var defaultDescription = source.description || '';
    var defaultPrivacy = source.privacy || 'private';
    Lampa.Input.edit({
      title: t$3('trakt_list_name_input', 'List name'),
      value: defaultName,
      free: true,
      nosave: true,
      nomic: true
    }, function (nameValue) {
      restoreContentController();
      var name = (nameValue || '').trim();
      if (!name) {
        notify$1(t$3('trakt_list_name_required', 'List name is required'));
        return;
      }
      onSubmit({
        name: name,
        description: defaultDescription,
        privacy: defaultPrivacy,
        display_numbers: !!source.display_numbers,
        allow_comments: !!source.allow_comments
      });
    });
  }
  function createMyList(activityObject) {
    if (!Api$2) return;
    openListEditor({}, function (payload) {
      Api$2.createList(payload).then(function (createdList) {
        notify$1(t$3('trakt_list_created', 'List created'));
        refreshMyListsAfterCreate(activityObject, createdList);
      }).catch(function (error) {
        return showApiError(error, 'trakt_list_create_error');
      });
    });
  }
  function editMyList(activityObject, element) {
    if (!Api$2 || !element || !element.id) return;
    openListEditor(element, function (payload) {
      Api$2.updateList({
        listId: element.id,
        payload: payload
      }).then(function () {
        notify$1(t$3('trakt_list_updated', 'List updated'));
        refreshActivity(activityObject, 'trakt_my_lists');
      }).catch(function (error) {
        return showApiError(error, 'trakt_list_edit_error');
      });
    });
  }
  function deleteMyList(activityObject, element) {
    if (!Api$2 || !element || !element.id) return;
    Lampa.Select.show({
      title: t$3('trakt_list_confirm_delete', 'Delete this list?'),
      items: [{
        title: t$3('trakt_list_delete_confirm_action', 'Delete'),
        confirm: true
      }, {
        title: t$3('cancel', 'Cancel')
      }],
      onSelect: function onSelect(item) {
        if (!item.confirm) {
          Lampa.Controller.toggle('content');
          return;
        }
        Api$2.deleteList({
          listId: element.id
        }).then(function () {
          notify$1(t$3('trakt_list_deleted', 'List deleted'));
          refreshMyListsAfterDelete(activityObject, element.id);
        }).catch(function (error) {
          return showApiError(error, 'trakt_list_delete_error');
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openMyListActions(activityObject, element) {
    if (!element) return;
    if (element.is_create_action) {
      createMyList(activityObject);
      return;
    }
    Lampa.Select.show({
      title: t$3('title_action', 'Action'),
      items: [{
        title: t$3('trakt_list_open', 'Open list'),
        action: 'open'
      }, {
        title: t$3('trakt_list_edit', 'Edit list'),
        action: 'edit'
      }, {
        title: t$3('trakt_list_delete', 'Delete list'),
        action: 'delete'
      }],
      onSelect: function onSelect(item) {
        if (item.action === 'open') openListDetail(element, 'trakt_my_list_detail');
        if (item.action === 'edit') editMyList(activityObject, element);
        if (item.action === 'delete') deleteMyList(activityObject, element);
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function openMyListItemActions(object, element) {
    if (!Api$2 || !object || !object.id || !element) return;
    Lampa.Select.show({
      title: t$3('title_action', 'Action'),
      items: [{
        title: t$3('trakt_remove_from_list', 'Remove from this list'),
        action: 'remove'
      }],
      onSelect: function onSelect(item) {
        if (item.action !== 'remove') return;
        Api$2.removeFromList({
          listId: object.id,
          item: element
        }).then(function () {
          notify$1(t$3('trakt_item_removed_from_list', 'Item removed from list'));
          refreshActivity(object, 'trakt_my_list_detail');
        }).catch(function (error) {
          return showApiError(error, 'trakt_remove_from_list_error');
        });
      },
      onBack: function onBack() {
        Lampa.Controller.toggle('content');
      }
    });
  }
  function renderWideListCard(card, element) {
    var root = card.render();
    root.addClass('trakt-list-wide-card');
    var promo = root.find('.card__promo');
    if (element.is_create_action) {
      root.addClass('trakt-list-wide-card--create');
      return;
    }
    if (promo.length) {
      // For list cards without real posters use only generated cover text.
      promo.remove();
    }
  }
  function listCatalog(object, apiMethod) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread2({
      detailComponent: 'trakt_list_detail',
      manage: false,
      addCreateAction: false
    }, options);
    var comp;
    var total_pages = 0;
    var waitload = false;
    var withActions = function withActions(data, page) {
      return config.addCreateAction ? withCreateListAction(data, page) : data;
    };
    if (isLampa3 && Lampa.Maker) {
      comp = Lampa.Maker.make('Category', object);
      comp.use({
        onCreate: function onCreate() {
          var _this9 = this;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          params.page = params.page || 1;
          if (!Api$2 || !Api$2[apiMethod]) {
            this.empty();
            if (this.activity) this.activity.loader(false);
            return;
          }
          Api$2[apiMethod](params).then(function (data) {
            total_pages = data && data.total_pages ? data.total_pages : 0;
            _this9.build(withActions(data, params.page));
          }).catch(function () {
            _this9.empty();
            if (_this9.activity) _this9.activity.loader(false);
          });
        },
        onNext: function onNext(resolve, reject) {
          var _this0 = this;
          if (waitload) {
            reject.call(this);
            return;
          }
          if (object.page <= total_pages) {
            waitload = true;
            object.page++;
            var params = _objectSpread2({}, object);
            params.limit = 36;
            if (!Api$2 || !Api$2[apiMethod]) {
              waitload = false;
              reject.call(this);
              return;
            }
            Api$2[apiMethod](params).then(function (data) {
              if (data && data.total_pages) {
                total_pages = data.total_pages;
                _this0.total_pages = data.total_pages;
              }
              resolve.call(_this0, withActions(data, params.page));
              waitload = false;
            }).catch(function () {
              waitload = false;
              reject.call(_this0);
            });
          } else {
            reject.call(this);
          }
        },
        onInstance: function onInstance(card, element) {
          renderWideListCard(card, element);
          card.use({
            onlyMenu: false,
            onlyEnter: function onlyEnter() {
              if (element.is_create_action) {
                createMyList(object);
                return;
              }
              openListDetail(element, config.detailComponent);
            },
            onLong: function onLong() {
              if (config.manage) openMyListActions(object, element);
            }
          });
        }
      });
    } else {
      comp = new Lampa.InteractionCategory(object);
      comp.create = function () {
        var _this1 = this;
        var params = _objectSpread2({}, object);
        params.limit = 36;
        params.page = params.page || 1;
        if (!Api$2 || !Api$2[apiMethod]) return;
        Api$2[apiMethod](params).then(function (data) {
          total_pages = data && data.total_pages ? data.total_pages : 0;
          _this1.build(withActions(data, params.page));
          if (_this1.activity.scroll) _this1.activity.scroll.onEnd = _this1.next.bind(_this1);
        }).catch(function () {
          _this1.empty();
          if (_this1.activity) _this1.activity.loader(false);
        });
      };
      comp.next = function () {
        var _this10 = this;
        if (waitload) return;
        if (object.page < total_pages) {
          waitload = true;
          object.page++;
          var params = _objectSpread2({}, object);
          params.limit = 36;
          if (!Api$2 || !Api$2[apiMethod]) return;
          Api$2[apiMethod](params).then(function (data) {
            if (data && data.total_pages) {
              total_pages = data.total_pages;
            }
            _this10.append(withActions(data, params.page));
            waitload = false;
          }).catch(function () {
            waitload = false;
          });
        }
      };
      comp.cardRender = function (_, element, card) {
        renderWideListCard(card, element);
        card.onEnter = function () {
          if (element.is_create_action) {
            createMyList(object);
            return;
          }
          openListDetail(element, config.detailComponent);
        };
        card.onMenu = config.manage ? function () {
          return openMyListActions(object, element);
        } : false;
      };
    }
    return comp;
  }
  function getWatchlistSortFields() {
    var fields = Api$2 && Array.isArray(Api$2.watchlistSortFields) && Api$2.watchlistSortFields.length ? Api$2.watchlistSortFields : DEFAULT_WATCHLIST_SORT_FIELDS;
    return fields.slice();
  }
  function getQuickWatchlistSortFields() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWatchlistSortFields();
    var available = new Set((fields || []).map(function (field) {
      return String(field).trim().toLowerCase();
    }));
    return DEFAULT_WATCHLIST_QUICK_SORT_FIELDS.filter(function (field) {
      return available.has(field);
    });
  }
  function getHiddenWatchlistSortFields() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWatchlistSortFields();
    var quickSet = new Set(getQuickWatchlistSortFields(fields));
    return (fields || []).filter(function (field) {
      return !quickSet.has(String(field).trim().toLowerCase());
    });
  }
  function getWatchlistVipSortFieldSet() {
    var fields = Api$2 && Array.isArray(Api$2.watchlistVipSortFields) && Api$2.watchlistVipSortFields.length ? Api$2.watchlistVipSortFields : DEFAULT_WATCHLIST_VIP_SORT_FIELDS;
    return new Set(fields.map(function (field) {
      return String(field).trim().toLowerCase();
    }));
  }
  function normalizeWatchlistSortValue(rawSort) {
    if (Api$2 && typeof Api$2.normalizeWatchlistSort === 'function') {
      return Api$2.normalizeWatchlistSort(rawSort || DEFAULT_WATCHLIST_SORT);
    }
    var normalized = (rawSort || DEFAULT_WATCHLIST_SORT).toString().trim().toLowerCase().replace(/^\/+/, '');
    var parts = normalized.split('/').filter(Boolean);
    var field = getWatchlistSortFields().indexOf(parts[0]) > -1 ? parts[0] : 'added';
    var order = parts[1] === 'asc' ? 'asc' : 'desc';
    return "".concat(field, "/").concat(order);
  }
  function parseWatchlistSortValue(rawSort) {
    var normalized = normalizeWatchlistSortValue(rawSort);
    var parts = normalized.split('/');
    return {
      field: parts[0] || 'added',
      order: parts[1] === 'asc' ? 'asc' : 'desc'
    };
  }
  function buildWatchlistSortValue() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'added';
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    return normalizeWatchlistSortValue("".concat(field, "/").concat(order === 'asc' ? 'asc' : 'desc'));
  }
  function isWatchlistVipSortField() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return getWatchlistVipSortFieldSet().has((field || '').toString().trim().toLowerCase());
  }
  function readStoredTraktVipStatus() {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return null;
    var value = Lampa.Storage.get('trakt_user_vip');
    if (value === true || value === 'true' || value === 1 || value === '1') return true;
    if (value === false || value === 'false' || value === 0 || value === '0') return false;
    return null;
  }
  function writeStoredTraktVipStatus(value) {
    traktVipStatusCache = !!value;
    if (Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
      Lampa.Storage.set('trakt_user_vip', !!value);
    }
  }
  function getTraktVipStatusCached() {
    if (typeof traktVipStatusCache === 'boolean') return traktVipStatusCache;
    var stored = readStoredTraktVipStatus();
    if (typeof stored === 'boolean') {
      traktVipStatusCache = stored;
      return stored;
    }
    return false;
  }
  function loadTraktVipStatus() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$force = _ref.force,
      force = _ref$force === void 0 ? false : _ref$force;
    if (!force && typeof traktVipStatusCache === 'boolean') {
      return Promise.resolve(traktVipStatusCache);
    }
    if (!Api$2 || !Lampa || !Lampa.Storage || !Lampa.Storage.get('trakt_token')) {
      return Promise.resolve(false);
    }
    if (traktVipStatusPromise) return traktVipStatusPromise;
    traktVipStatusPromise = Api$2.get('/users/me').then(function (user) {
      var vipEnabled = !!(user && user.vip);
      writeStoredTraktVipStatus(vipEnabled);
      return vipEnabled;
    }).catch(function () {
      return getTraktVipStatusCached();
    }).finally(function () {
      traktVipStatusPromise = null;
    });
    return traktVipStatusPromise;
  }
  function sanitizeWatchlistSortForVip(rawSort) {
    var vipEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parsed = parseWatchlistSortValue(rawSort);
    if (!vipEnabled && isWatchlistVipSortField(parsed.field)) {
      return parseWatchlistSortValue(DEFAULT_WATCHLIST_SORT);
    }
    return parsed;
  }
  function formatWatchlistSortLabel() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var key = (field || '').toString().trim().toLowerCase();
    var known = WATCHLIST_SORT_LABELS[key];
    if (known) return t$3(known.key, known.fallback);
    return key.split('_').filter(Boolean).map(function (part) {
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
  }
  function formatWatchlistSortArrow() {
    var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'desc';
    return order === 'asc' ? '↑' : '↓';
  }
  function normalizeWatchlistTab(rawType) {
    var value = (rawType || '').toString().trim().toLowerCase();
    if (value === 'show' || value === 'shows' || value === 'tv' || value === 'series' || value === 'serials') {
      return 'shows';
    }
    return 'movies';
  }
  function buildWatchlistTabTitle(tabId) {
    if (tabId === 'shows') return t$3('trakttv_watchlist_tab_shows', 'Shows');
    return t$3('trakttv_watchlist_tab_movies', 'Movies');
  }
  function watchlistHub() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var activity;
    var html;
    var controls;
    var navigation;
    var sortNavigation;
    var moreSortButton;
    var body;
    var views = {};
    var lastControlsFocus = null;
    var activeTab = normalizeWatchlistTab(object.watchlistType || object.mediaType || object.type);
    var vipEnabled = Lampa && Lampa.Storage && Lampa.Storage.get('trakt_token') ? getTraktVipStatusCached() : false;
    var activeSort = sanitizeWatchlistSortForVip(object.watchlistSort || object.sort, vipEnabled);
    var activeSortField = activeSort.field;
    var activeSortOrder = activeSort.order;
    var tabs = [{
      id: 'movies'
    }, {
      id: 'shows'
    }];
    var sortFields = getWatchlistSortFields();
    var quickSortFields = getQuickWatchlistSortFields(sortFields);
    var hiddenSortFields = getHiddenWatchlistSortFields(sortFields);
    function rememberControlsFocus(element) {
      if (!element) return;
      lastControlsFocus = element && element.jquery ? element[0] : element;
    }
    function getCurrentSortValue() {
      return buildWatchlistSortValue(activeSortField, activeSortOrder);
    }
    function isHiddenSortField(field) {
      return hiddenSortFields.indexOf((field || '').toString().trim().toLowerCase()) > -1;
    }
    function restoreControls() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      setTimeout(function () {
        Lampa.Controller.toggle('trakt_watchlist_controls');
      }, delay);
    }
    function syncObjectState() {
      object.watchlistType = activeTab;
      object.mediaType = activeTab;
      object.type = activeTab;
      object.watchlistSort = getCurrentSortValue();
      object.sort = object.watchlistSort;
    }
    function buildTabs() {
      navigation = $('<div class="trakt-watchlist-hub__tabs"></div>');
      tabs.forEach(function (tab) {
        var button = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector trakt-watchlist__tab\" data-tab=\"".concat(tab.id, "\">") + "<div>".concat(buildWatchlistTabTitle(tab.id), "</div>") + "</div>");
        if (tab.id === activeTab) button.addClass('active');
        button.on('hover:focus', function () {
          rememberControlsFocus(button);
        });
        button.on('hover:enter', function () {
          rememberControlsFocus(button);
          switchTab(tab.id);
        });
        navigation.append(button);
      });
    }
    function updateTabs() {
      navigation.find('.trakt-watchlist__tab').removeClass('active');
      var activeButton = navigation.find(".trakt-watchlist__tab[data-tab=\"".concat(activeTab, "\"]"));
      if (activeButton.length) activeButton.addClass('active');
    }
    function buildSorts() {
      sortNavigation = $('<div class="trakt-watchlist-hub__sorts"></div>');
      quickSortFields.forEach(function (field) {
        var button = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector trakt-watchlist__sort\" data-sort-field=\"".concat(field, "\">") + "<div class=\"trakt-watchlist__sort-label\">".concat(formatWatchlistSortLabel(field), "</div>") + "<div class=\"trakt-watchlist__sort-state\"></div>" + "</div>");
        button.on('hover:focus', function () {
          rememberControlsFocus(button);
        });
        button.on('hover:enter', function () {
          rememberControlsFocus(button);
          switchSort(field);
        });
        sortNavigation.append(button);
      });
      if (hiddenSortFields.length) {
        moreSortButton = $("<div class=\"simple-button simple-button--filter simple-button--invisible selector trakt-watchlist__sort trakt-watchlist__sort--more\" data-sort-field=\"__more__\">" + "<div class=\"trakt-watchlist__sort-label\">".concat(t$3('trakttv_watchlist_sort_more', 'More'), "</div>") + "<div class=\"trakt-watchlist__sort-state\"></div>" + "</div>");
        moreSortButton.on('hover:focus', function () {
          rememberControlsFocus(moreSortButton);
        });
        moreSortButton.on('hover:enter', function () {
          rememberControlsFocus(moreSortButton);
          openMoreSorts();
        });
        sortNavigation.append(moreSortButton);
      }
      updateSorts();
    }
    function updateSorts() {
      if (!sortNavigation) return;
      sortNavigation.find('.trakt-watchlist__sort').each(function (index, element) {
        var button = $(element);
        var field = (button.attr('data-sort-field') || '').toString();
        var isMoreButton = field === '__more__';
        var isActive = field === activeSortField;
        var state = button.find('.trakt-watchlist__sort-state');
        var label = button.find('.trakt-watchlist__sort-label');
        button.removeClass('active trakt-watchlist__sort--active trakt-watchlist__sort--asc trakt-watchlist__sort--desc trakt-watchlist__sort--vip trakt-watchlist__sort--locked');
        if (isMoreButton) {
          var hiddenActive = isHiddenSortField(activeSortField);
          var activeHiddenVip = hiddenActive && isWatchlistVipSortField(activeSortField);
          label.text(hiddenActive ? formatWatchlistSortLabel(activeSortField) : t$3('trakttv_watchlist_sort_more', 'More'));
          if (activeHiddenVip) button.addClass('trakt-watchlist__sort--vip');
          if (hiddenActive) {
            button.addClass('active trakt-watchlist__sort--active');
            button.addClass(activeSortOrder === 'asc' ? 'trakt-watchlist__sort--asc' : 'trakt-watchlist__sort--desc');
            state.text(formatWatchlistSortArrow(activeSortOrder));
          } else {
            state.text('');
          }
          return;
        }
        label.text(formatWatchlistSortLabel(field));
        if (isActive) {
          button.addClass('active trakt-watchlist__sort--active');
          button.addClass(activeSortOrder === 'asc' ? 'trakt-watchlist__sort--asc' : 'trakt-watchlist__sort--desc');
          state.text(formatWatchlistSortArrow(activeSortOrder));
        } else {
          state.text('');
        }
      });
    }
    function buildMoreSortItems() {
      return hiddenSortFields.map(function (field) {
        var vipOnly = isWatchlistVipSortField(field);
        var isActive = field === activeSortField;
        var arrow = isActive ? " ".concat(formatWatchlistSortArrow(activeSortOrder)) : '';
        return {
          title: "".concat(formatWatchlistSortLabel(field)).concat(arrow),
          subtitle: vipOnly ? t$3('trakttv_vip_status', 'VIP') : '',
          selected: isActive,
          ghost: vipOnly && !vipEnabled,
          field: field
        };
      });
    }
    function createViewObject(tabId) {
      syncObjectState();
      return _objectSpread2(_objectSpread2({}, object), {}, {
        page: 1,
        watchlistType: tabId,
        mediaType: tabId,
        type: tabId,
        watchlistSort: getCurrentSortValue(),
        sort: getCurrentSortValue(),
        onHead: function onHead() {
          Lampa.Controller.toggle('trakt_watchlist_controls');
        }
      });
    }
    function makeTabView(tabId) {
      var viewObject = createViewObject(tabId);
      var view = new baseComponent(viewObject, 'watchlist');
      view.activity = activity;
      view.create();
      var render = view.render(true);
      render.classList.add('trakt-watchlist__view');
      render.classList.add("trakt-watchlist__view--".concat(tabId));
      if (tabId !== activeTab) render.classList.add('hide');
      body.append(render);
      views[tabId] = view;
      return view;
    }
    function getView(tabId) {
      if (views[tabId]) return views[tabId];
      return makeTabView(tabId);
    }
    function destroyView(tabId) {
      var view = views[tabId];
      if (!view) return;
      if (view.destroy) view.destroy();
      delete views[tabId];
    }
    function rebuildViews() {
      Object.keys(views).forEach(function (tabId) {
        destroyView(tabId);
      });
      if (body) body.empty();
      showView(getView(activeTab));
    }
    function hideView(view) {
      if (!view) return;
      var render = view.render(true);
      render.classList.add('hide');
      if (view.pause) view.pause();
    }
    function showView(view) {
      if (!view) return;
      var render = view.render(true);
      render.classList.remove('hide');
      if (view.start) view.start();
    }
    function switchTab(tabId) {
      if (!tabId || tabId === activeTab) {
        Lampa.Controller.toggle('content');
        return;
      }
      hideView(views[activeTab]);
      activeTab = tabId;
      syncObjectState();
      updateTabs();
      showView(getView(tabId));
    }
    function applySort(field, order) {
      activeSortField = field;
      activeSortOrder = order === 'asc' ? 'asc' : 'desc';
      syncObjectState();
      updateSorts();
      rebuildViews();
    }
    function switchSort(field) {
      var vipOnly = isWatchlistVipSortField(field);
      var nextOrder = field === activeSortField ? activeSortOrder === 'desc' ? 'asc' : 'desc' : 'desc';
      if (!vipOnly) {
        applySort(field, nextOrder);
        return Promise.resolve(true);
      }
      return loadTraktVipStatus().then(function (status) {
        vipEnabled = !!status;
        updateSorts();
        if (!vipEnabled) {
          notify$1(t$3('trakttv_watchlist_sort_vip_required', 'This sort is available only for Trakt VIP users'));
          return false;
        }
        applySort(field, nextOrder);
        return true;
      }).catch(function () {
        vipEnabled = getTraktVipStatusCached();
        updateSorts();
        notify$1(t$3('trakttv_watchlist_sort_vip_required', 'This sort is available only for Trakt VIP users'));
        return false;
      });
    }
    function openMoreSorts() {
      if (!hiddenSortFields.length) {
        restoreControls();
        return;
      }
      Lampa.Select.show({
        title: t$3('trakttv_watchlist_sort_more_title', 'More sorting'),
        items: buildMoreSortItems(),
        onSelect: function onSelect(item) {
          if (!item || !item.field) {
            restoreControls();
            return;
          }
          Promise.resolve(switchSort(item.field)).finally(function () {
            restoreControls();
          });
        },
        onBack: function onBack() {
          restoreControls();
        }
      });
    }
    function getControlsFocusTarget() {
      if (lastControlsFocus && typeof document !== 'undefined' && document.body && document.body.contains(lastControlsFocus)) {
        return lastControlsFocus;
      }
      var activeSortButton = sortNavigation ? sortNavigation.find(".trakt-watchlist__sort[data-sort-field=\"".concat(activeSortField, "\"]"))[0] : null;
      var moreButtonNode = moreSortButton ? moreSortButton[0] : null;
      var activeTabButton = navigation ? navigation.find(".trakt-watchlist__tab[data-tab=\"".concat(activeTab, "\"]"))[0] : null;
      var fallbackButton = controls ? controls.find('.selector')[0] : null;
      return activeSortButton || (isHiddenSortField(activeSortField) ? moreButtonNode : null) || activeTabButton || fallbackButton || false;
    }
    function ensureControlsController() {
      Lampa.Controller.add('trakt_watchlist_controls', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(controls);
          Lampa.Controller.collectionFocus(getControlsFocusTarget(), controls);
        },
        right: function right() {
          if (typeof Navigator !== 'undefined') Navigator.move('right');
        },
        left: function left() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');else Lampa.Controller.toggle('content');
        },
        up: function up() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
    }
    return {
      create: function create() {
        activity = this.activity;
        activity.render().addClass('trakt-watchlist-activity');
        html = $('<div class="trakt-watchlist-hub"></div>');
        controls = $('<div class="trakt-watchlist-hub__controls"></div>');
        body = $('<div class="trakt-watchlist-hub__body"></div>');
        buildTabs();
        buildSorts();
        controls.append(navigation, sortNavigation);
        html.append(controls, body);
        ensureControlsController();
        syncObjectState();
        showView(getView(activeTab));
        loadTraktVipStatus({
          force: true
        }).then(function (status) {
          vipEnabled = !!status;
          var safeSort = sanitizeWatchlistSortForVip(getCurrentSortValue(), vipEnabled);
          var hasChanged = safeSort.field !== activeSortField || safeSort.order !== activeSortOrder;
          activeSortField = safeSort.field;
          activeSortOrder = safeSort.order;
          syncObjectState();
          updateSorts();
          if (hasChanged) {
            rebuildViews();
          }
        }).catch(function () {
          vipEnabled = getTraktVipStatusCached();
          updateSorts();
        });
        return this.render();
      },
      render: function render(js) {
        return js ? html[0] : html;
      },
      start: function start() {
        var current = getView(activeTab);
        if (current && current.start) current.start();
      },
      pause: function pause() {
        var current = views[activeTab];
        if (current && current.pause) current.pause();
      },
      destroy: function destroy() {
        Object.keys(views).forEach(function (tabId) {
          destroyView(tabId);
        });
        if (html) html.remove();
        views = {};
        lastControlsFocus = null;
      }
    };
  }
  function watchlist$1(object) {
    if (!object.page) object.page = 1;
    return new watchlistHub(object);
  }
  function upnext(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'upnext');
  }
  function recommendations(object) {
    if (!object.page) object.page = 1;
    return new baseRecommendations(object);
  }
  function liked_lists(object) {
    if (!object.page) object.page = 1;
    return listCatalog(object, 'likesLists', {
      detailComponent: 'trakt_list_detail',
      manage: false,
      addCreateAction: false
    });
  }
  function lists(object) {
    return liked_lists(object);
  }
  function my_lists(object) {
    if (!object.page) object.page = 1;
    return listCatalog(object, 'myLists', {
      detailComponent: 'trakt_my_list_detail',
      manage: true,
      addCreateAction: true
    });
  }
  function list_detail(object) {
    if (!object.page) object.page = 1;
    return new baseComponent(object, 'list');
  }
  function my_list_detail(object) {
    if (!object.page) object.page = 1;
    object.can_manage = true;
    return new baseComponent(object, 'myListItems');
  }
  function trakt_list_detail(object) {
    if (!object.page) object.page = 1;
    var paramsForBaseComponent = _objectSpread2(_objectSpread2({}, object), {}, {
      id: object.id || object.list_id,
      page: object.page,
      limit: object.limit
    });
    return new baseComponent(paramsForBaseComponent, 'list');
  }
  var Catalog = {
    watchlist: watchlist$1,
    upnext: upnext,
    recommendations: recommendations,
    lists: lists,
    liked_lists: liked_lists,
    my_lists: my_lists,
    list_detail: list_detail,
    my_list_detail: my_list_detail,
    trakt_list_detail: trakt_list_detail
  };

  function Main() {
    Lampa.Lang.add({
      trakttvAuthMissed: {
        ru: "Не авторизированы",
        en: "Not logged",
        uk: "Не авторизовані",
        ro: "Neautorizat"
      },
      trakttvAuthOk: {
        ru: "Авторизированы",
        en: "Logged",
        uk: "Авторизовані",
        ro: "Autorizat"
      },
      trakttvAuthUpdated: {
        ru: "Авторизация обновлена",
        en: "Auth success updated",
        uk: "Авторизацію оновлено",
        ro: "Autorizare actualizată"
      },
      trakttvAuthError: {
        ru: "Ошибка авторизации",
        en: "Auth error",
        uk: "Помилка авторизаці",
        ro: "Eroare de autorizare"
      },
      traktLampaRestart: {
        ru: "Перезагрузите приложение",
        en: "Please restart application",
        uk: "Перезавантажте додаток",
        ro: "Vă rugăm să reporniți aplicația"
      },
      trakttvLoading: {
        ru: "Загрузка, а пока сделай кофе",
        en: "Loading and go drink coffee",
        uk: "Завантаження, а поки зроби собі кавусю",
        ro: "Se încarcă, între timp fă o cafea"
      },
      trakttv_remove_from_collection: {
        ru: "Удалить из watchlist",
        en: "Remove from watchlist",
        uk: "Видалити з watchlist",
        ro: "Elimină din watchlist"
      },
      trakttv_add_to_collection: {
        ru: "Добавить в watchlist",
        en: "Add to watchlist",
        uk: "Додати в watchlist",
        ro: "Adaugă în watchlist"
      },
      trakttv_WatchlistSort: {
        ru: "Сортировка watchlist",
        en: "Sort watchlist",
        uk: "Сортування watchlist",
        ro: "Sortare watchlist"
      },
      trakttvLogin: {
        ru: "Войти в Trakt.TV",
        en: "Login to Trakt.TV",
        uk: "Увійти в Trakt.TV",
        ro: "Autentificare pe Trakt.TV"
      },
      trakttvLogout: {
        ru: "Выйти из Trakt.TV",
        en: "Logout from Trakt.TV",
        uk: "Вийти з Trakt.TV",
        ro: "Deconectare de la Trakt.TV"
      },
      trakttvLogoutNoty: {
        ru: "Вы вышли из Trakt.TV",
        en: "You have logged out from Trakt.TV",
        uk: "Ви вийшли з Trakt.TV",
        ro: "V-ați deconectat de la Trakt.TV"
      },
      trakttvKeyCleanered: {
        ru: "Ключ очищен",
        en: "Key cleaned",
        uk: "Ключ очищено",
        ro: "Cheie ștearsă"
      },
      trakttvFullClearNoty: {
        ru: "Все очищено",
        en: "All cleared",
        uk: "Все очищено",
        ro: "Totul a fost șters"
      },
      trakttvHumorMinutes: {
        ru: "Потрачено {time} минут на просмотр! Уже почти Netflix-чемпион",
        en: "Spent {time} minutes watching! Almost a Netflix champion",
        uk: "Витрачено {time} хвилин на перегляд! Ти вже майже Netflix-чемпіон",
        ro: "Ai petrecut {time} minute vizionând! Ești aproape un campion Netflix"
      },
      trakttvStatPlays: {
        ru: "просмотров",
        en: "plays",
        uk: "переглядів",
        ro: "vizionări"
      },
      trakttvStatWatched: {
        ru: "просмотрено",
        en: "watched",
        uk: "переглянуто",
        ro: "vizionat"
      },
      trakttvStatMinutes: {
        ru: "минут",
        en: "minutes",
        uk: "хвилин",
        ro: "minute"
      },
      trakttv_no_series: {
        ru: "Нет сериалов",
        en: "No series",
        uk: "Немає серіалів",
        ro: "Niciun serial"
      },
      trakttv_episodes_on: {
        ru: "Серии на",
        en: "Episodes on",
        uk: "Серії на",
        ro: "Episoade pe"
      },
      trakttv_calendar_error: {
        ru: "Ошибка загрузки календаря Trakt",
        en: "Trakt Calendar load error",
        uk: "Помилка завантаження календаря Trakt",
        ro: "Eroare la încărcarea calendarului Trakt"
      },
      trakttv_no_upcoming: {
        ru: "Нет предстоящих эпизодов",
        en: "No upcoming episodes",
        uk: "Немає майбутніх епізодів",
        ro: "Nu există episoade viitoare"
      },
      trakttvFullClear: {
        ru: "Очистить все ключи Trakt.TV",
        en: "Clear all Trakt.TV keys",
        uk: "Очистити всі ключі Trakt.TV",
        ro: "Șterge toate cheile Trakt.TV"
      },
      trakt_componentDisable: {
        ru: "Компонент отключен",
        en: "Component disabled",
        uk: "Компонент вимкнено",
        ro: "Componentă dezactivată"
      },
      trakt_componentEnable: {
        ru: "Компонент включен",
        en: "Component enabled",
        uk: "Компонент увімкнено",
        ro: "Componentă activată"
      },
      trakt_history_added: {
        ru: "Добавлено в историю просмотров",
        en: "Added to watch history",
        uk: "Додано до історії переглядів",
        ro: "Adăugat în istoricul vizionărilor"
      },
      trakt_history_addError: {
        ru: "Ошибка добавления в историю",
        en: "Error adding to history",
        uk: "Помилка додавання до історії",
        ro: "Eroare la adăugarea în istoric"
      },
      trakt_history_all: {
        ru: "Весь сериал",
        en: "Entire series",
        uk: "Весь серіал",
        ro: "Tot serialul"
      },
      trakt_history_season: {
        ru: "Последний сезон",
        en: "Last season",
        uk: "Останній сезон",
        ro: "Ultimul sezon"
      },
      trakt_history_episodes: {
        ru: "Последний эпизод",
        en: "Last episode",
        uk: "Остання серія",
        ro: "Ultimul episod"
      },
      trakt_history_title: {
        ru: "Что отправить в историю?",
        en: "What to send to history?",
        uk: "Що відправити до історії?",
        ro: "Ce doriți să trimiteți în istoric?"
      },
      trakt_history_removed: {
        ru: "Удалено из истории просмотров",
        en: "Removed from watch history",
        uk: "Видалено з історії переглядів",
        ro: "Eliminat din istoricul vizionărilor"
      },
      trakt_history_button: {
        ru: "Добавить в историю",
        en: "Add to history",
        uk: "Додати до історії",
        ro: "Adaugă în istoric"
      },
      trakt_watchlist_button: {
        ru: "Добавить в watchlist",
        en: "Add to watchlist",
        uk: "Додати до watchlist",
        ro: "Adaugă în watchlist"
      },
      trakt_watchlist_remove: {
        ru: "Удалить из watchlist",
        en: "Remove from watchlist",
        uk: "Видалити з watchlist",
        ro: "Elimină din watchlist"
      },
      trakt_watchlist_add: {
        ru: "Добавлено в watchlist",
        en: "Added to watchlist",
        uk: "Додано до watchlist",
        ro: "Adăugat în watchlist"
      },
      trakt_history_in: {
        ru: "В истории",
        en: "In history",
        uk: "В історії",
        ro: "În istoric"
      },
      trakt_history_not_in: {
        ru: "Добавить в историю",
        en: "Add to history",
        uk: "Додати до історії",
        ro: "Adaugă în istoric"
      },
      trakttv_recommendations: {
        ru: "Рекомендации",
        en: "Recommendations",
        uk: "Рекомендації",
        ro: "Recomandări"
      },
      trakttv_watchlist: {
        ru: "Watchlist",
        en: "Watchlist",
        uk: "Watchlist",
        ro: "Watchlist"
      },
      trakttv_calendar: {
        ru: "Календарь",
        en: "Calendar",
        uk: "Календар",
        ro: "Calendar"
      },
      trakttv_menu_title: {
        ru: "TraktTV",
        en: "TraktTV",
        uk: "TraktTV",
        ro: "TraktTV"
      },
      trakttv_row_upnext: {
        ru: "TraktTV: Смотреть дальше",
        en: "TraktTV: Up Next",
        uk: "TraktTV: Дивитись далі",
        ro: "TraktTV: Progres vizionare"
      },
      trakttv_row_recommendations_main: {
        ru: "TraktTV: Рекомендации (главная)",
        en: "TraktTV: Recommendations (main)",
        uk: "TraktTV: Рекомендації (головна)",
        ro: "TraktTV: Recomandări (acasă)"
      },
      trakttv_row_recommendations_movie: {
        ru: "TraktTV: Рекомендации (фильмы)",
        en: "TraktTV: Recommendations (movies)",
        uk: "TraktTV: Рекомендації (фільми)",
        ro: "TraktTV: Recomandări (filme)"
      },
      trakttv_row_recommendations_tv: {
        ru: "TraktTV: Рекомендации (серіалы)",
        en: "TraktTV: Recommendations (tv)",
        uk: "TraktTV: Рекомендації (серіали)",
        ro: "TraktTV: Recomandări (seriale)"
      },
      trakttv_row_calendar_main: {
        ru: "TraktTV: Календарь выходов",
        en: "TraktTV: Calendar",
        uk: "TraktTV: Календар виходів",
        ro: "TraktTV: Calendar"
      },
      trakttv_row_calendar_tv: {
        ru: "TraktTV: Календарь выходов (сериалы)",
        en: "TraktTV: Calendar (shows)",
        uk: "TraktTV: Календар виходів (серіали)",
        ro: "TraktTV: Calendar (seriale)"
      },
      trakttv_row_dvd_calendar_main: {
        ru: "TraktTV: DVD Релизы",
        en: "TraktTV: DVD Releases",
        uk: "TraktTV: DVD Релізи",
        ro: "TraktTV: Lansări DVD"
      },
      trakttv_row_dvd_calendar_movies: {
        ru: "TraktTV: DVD Релизы (фильмы)",
        en: "TraktTV: DVD Releases (movies)",
        uk: "TraktTV: DVD Релізи (фільми)",
        ro: "TraktTV: Lansări DVD (filme)"
      },
      trakttv_no_recommendations: {
        ru: "Нет рекомендаций",
        en: "No recommendations",
        uk: "Немає рекомендацій",
        ro: "Nu există recomandări"
      },
      trakttv_show_recommendations: {
        ru: "Показывать рекомендации TraktTV на главной",
        en: "Show TraktTV recommendations on main page",
        uk: "Показувати рекомендації TraktTV на головній сторінці",
        ro: "Afișează recomandările TraktTV pe pagina principală"
      },
      trakttv_source_trending: {
        ru: "В тренде",
        en: "Trending",
        uk: "У тренді",
        ro: "În tendințe"
      },
      trakttv_source_anticipated: {
        ru: "Ожидаемые",
        en: "Anticipated",
        uk: "Очікувані",
        ro: "Anticipate"
      },
      trakttv_source_popular: {
        ru: "Популярные",
        en: "Popular",
        uk: "Популярні",
        ro: "Populare"
      },
      trakttv_source_recommendations_movies: {
        ru: "Рекомендации: фильмы",
        en: "Recommendations: Movies",
        uk: "Рекомендації: фільми",
        ro: "Recomandări: Filme"
      },
      trakttv_source_recommendations_shows: {
        ru: "Рекомендации: сериалы",
        en: "Recommendations: Shows",
        uk: "Рекомендації: серіали",
        ro: "Recomandări: Seriale"
      },
      trakttv_source_section: {
        ru: "Фильтры источника TraktTV",
        en: "TraktTV source filters",
        uk: "Фільтри джерела TraktTV",
        ro: "Filtre sursă TraktTV"
      },
      trakttv_source_ignore_watched: {
        ru: "Источник: скрывать просмотренное",
        en: "Source: ignore watched",
        uk: "Джерело: приховувати переглянуте",
        ro: "Sursă: ascunde vizionate"
      },
      trakttv_source_ignore_watched_descr: {
        ru: "Применяется ко всем лентам TraktTV (категории, рекомендации, поиск)",
        en: "Applies to all TraktTV source feeds (categories, recommendations, search)",
        uk: "Застосовується до всіх стрічок TraktTV (категорії, рекомендації, пошук)",
        ro: "Se aplică tuturor fluxurilor TraktTV (categorii, recomandări, căutare)"
      },
      trakttv_source_ignore_watchlisted: {
        ru: "Источник: скрывать watchlist",
        en: "Source: ignore watchlisted",
        uk: "Джерело: приховувати watchlist",
        ro: "Sursă: ascunde watchlist"
      },
      trakttv_source_ignore_watchlisted_descr: {
        ru: "Применяется ко всем лентам TraktTV (категории, рекомендации, поиск)",
        en: "Applies to all TraktTV source feeds (categories, recommendations, search)",
        uk: "Застосовується до всіх стрічок TraktTV (категорії, рекомендації, пошук)",
        ro: "Se aplică tuturor fluxurilor TraktTV (categorii, recomandări, căutare)"
      },
      trakt_source_search_lists: {
        ru: "Списки",
        en: "Lists",
        uk: "Списки",
        ro: "Liste"
      },
      trakt_source_search_lists_more_hint: {
        ru: "Открывайте списки напрямую из результатов поиска",
        en: "Open lists directly from search results",
        uk: "Відкривайте списки напряму з результатів пошуку",
        ro: "Deschideți listele direct din rezultatele căutării"
      },
      trakt_progress_section: {
        ru: "Настройки прогресса",
        en: "Progress settings",
        uk: "Налаштування прогресу",
        ro: "Setări progres"
      },
      trakttv_show_tv_progress: {
        ru: "Показывать прогресс просмотра сериалов",
        en: "Show TV progress",
        uk: "Показувати прогрес прогляду серіалів",
        ro: "Afișează progresul serialelor"
      },
      trakttv_related_lists: {
        ru: "Связанные списки",
        en: "Related lists",
        uk: "Пов'язані списки",
        ro: "Liste corelate"
      },
      trakt_list_detail: {
        ru: "Содержимое списка",
        en: "List Content",
        uk: "Вміст списку",
        ro: "Conținut listă"
      },
      trakt_my_lists: {
        ru: "Мои списки",
        en: "My Lists",
        uk: "Мої списки",
        ro: "Listele mele"
      },
      trakt_liked_lists: {
        ru: "Понравившиеся списки",
        en: "Liked Lists",
        uk: "Вподобані списки",
        ro: "Liste apreciate"
      },
      trakt_no_lists: {
        ru: "Нет списков",
        en: "No lists",
        uk: "Немає списків",
        ro: "Nicio listă"
      },
      trakt_list_items: {
        ru: "Элементы списка",
        en: "List Items",
        uk: "Елементи списку",
        ro: "Elemente listă"
      },
      trakt_list_items_short: {
        ru: "элем.",
        en: "items",
        uk: "елем.",
        ro: "elemente"
      },
      trakt_list_open: {
        ru: "Открыть список",
        en: "Open list",
        uk: "Відкрити список",
        ro: "Deschide lista"
      },
      trakt_list_create: {
        ru: "Создать список",
        en: "Create list",
        uk: "Створити список",
        ro: "Creează listă"
      },
      trakt_list_create_short: {
        ru: "Создать",
        en: "Create",
        uk: "Створити",
        ro: "Creează"
      },
      trakt_list_create_hint: {
        ru: "Создайте новый список Trakt",
        en: "Create a new Trakt list",
        uk: "Створіть новий список Trakt",
        ro: "Creează o listă nouă Trakt"
      },
      trakt_list_name_input: {
        ru: "Название списка",
        en: "List name",
        uk: "Назва списку",
        ro: "Nume listă"
      },
      trakt_list_description_input: {
        ru: "Описание списка",
        en: "List description",
        uk: "Опис списку",
        ro: "Descriere listă"
      },
      trakt_list_name_required: {
        ru: "Укажите название списка",
        en: "List name is required",
        uk: "Вкажіть назву списку",
        ro: "Numele listei este obligatoriu"
      },
      trakt_list_privacy: {
        ru: "Приватность списка",
        en: "List privacy",
        uk: "Приватність списку",
        ro: "Confidențialitate listă"
      },
      trakt_list_privacy_private: {
        ru: "Приватный",
        en: "Private",
        uk: "Приватний",
        ro: "Privat"
      },
      trakt_list_privacy_friends: {
        ru: "Для друзей",
        en: "Friends",
        uk: "Для друзів",
        ro: "Prieteni"
      },
      trakt_list_privacy_public: {
        ru: "Публичный",
        en: "Public",
        uk: "Публічний",
        ro: "Public"
      },
      trakt_list_created: {
        ru: "Список создан",
        en: "List created",
        uk: "Список створено",
        ro: "Listă creată"
      },
      trakt_list_create_error: {
        ru: "Ошибка создания списка",
        en: "Failed to create list",
        uk: "Помилка створення списку",
        ro: "Eroare la crearea listei"
      },
      trakt_list_edit: {
        ru: "Редактировать список",
        en: "Edit list",
        uk: "Редагувати список",
        ro: "Editează lista"
      },
      trakt_list_updated: {
        ru: "Список обновлен",
        en: "List updated",
        uk: "Список оновлено",
        ro: "Listă actualizată"
      },
      trakt_list_edit_error: {
        ru: "Ошибка обновления списка",
        en: "Failed to update list",
        uk: "Помилка оновлення списку",
        ro: "Eroare la actualizarea listei"
      },
      trakt_list_delete: {
        ru: "Удалить список",
        en: "Delete list",
        uk: "Видалити список",
        ro: "Șterge lista"
      },
      trakt_list_confirm_delete: {
        ru: "Удалить этот список?",
        en: "Delete this list?",
        uk: "Видалити цей список?",
        ro: "Ștergeți această listă?"
      },
      trakt_list_delete_confirm_action: {
        ru: "Удалить",
        en: "Delete",
        uk: "Видалити",
        ro: "Șterge"
      },
      trakt_list_deleted: {
        ru: "Список удален",
        en: "List deleted",
        uk: "Список видалено",
        ro: "Listă ștearsă"
      },
      trakt_list_delete_error: {
        ru: "Ошибка удаления списка",
        en: "Failed to delete list",
        uk: "Помилка видалення списку",
        ro: "Eroare la ștergerea listei"
      },
      trakt_add_to_list_action: {
        ru: "Добавить в список",
        en: "Add to list",
        uk: "Додати до списку",
        ro: "Adaugă în listă"
      },
      trakt_remove_from_list_action: {
        ru: "Удалить из списка",
        en: "Remove from list",
        uk: "Прибрати зі списку",
        ro: "Elimină din listă"
      },
      trakt_remove_from_list: {
        ru: "Удалить из этого списка",
        en: "Remove from this list",
        uk: "Прибрати з цього списку",
        ro: "Elimină din această listă"
      },
      trakt_item_added_to_list: {
        ru: "Элемент добавлен в список",
        en: "Item added to list",
        uk: "Елемент додано до списку",
        ro: "Element adăugat în listă"
      },
      trakt_item_removed_from_list: {
        ru: "Элемент удален из списка",
        en: "Item removed from list",
        uk: "Елемент прибрано зі списку",
        ro: "Element eliminat din listă"
      },
      trakt_remove_from_list_error: {
        ru: "Ошибка удаления элемента из списка",
        en: "Failed to remove item from list",
        uk: "Помилка видалення елемента зі списку",
        ro: "Eroare la eliminarea elementului"
      },
      trakt_list_action_error: {
        ru: "Ошибка операции со списком",
        en: "List action failed",
        uk: "Помилка операції зі списком",
        ro: "Eroare operațiune listă"
      },
      trakt_list_limit_reached: {
        ru: "Достигнут лимит списков Trakt",
        en: "Trakt lists limit reached",
        uk: "Досягнуто ліміт списків Trakt",
        ro: "Limita listelor Trakt a fost atinsă"
      },
      trakt_list_conflict: {
        ru: "Элемент уже есть в списке",
        en: "Item is already in this list",
        uk: "Елемент уже є у цьому списку",
        ro: "Elementul este deja în listă"
      },
      trakt_lists_button: {
        ru: "TraktTV Списки",
        en: "TraktTV lists",
        uk: "TraktTV Списки",
        ro: "TraktTV Liste"
      },
      trakt_lists_button_in_watchlist: {
        ru: "В watchlist",
        en: "In watchlist",
        uk: "У watchlist",
        ro: "În watchlist"
      },
      trakt_manage_lists_title: {
        ru: "Управление списками",
        en: "Manage lists",
        uk: "Керування списками",
        ro: "Gestionare liste"
      },
      trakt_watchlist_action_error: {
        ru: "Ошибка операции с watchlist",
        en: "Watchlist action failed",
        uk: "Помилка операції з watchlist",
        ro: "Eroare operațiune watchlist"
      },
      trakttv_user_info: {
        ru: "Пользователь Trakt.TV",
        en: "Trakt.TV User",
        uk: "Користувач Trakt.TV",
        ro: "Utilizator Trakt.TV"
      },
      trakttv_username: {
        ru: "Имя пользователя",
        en: "Username",
        uk: "Ім'я користувача",
        ro: "Nume utilizator"
      },
      trakttv_vip_status: {
        ru: "VIP",
        en: "VIP",
        uk: "VIP",
        ro: "VIP"
      },
      trakttv_vip_enabled: {
        ru: "Активирован",
        en: "Activated",
        uk: "Активовано",
        ro: "Activat"
      },
      trakttv_vip_disabled: {
        ru: "Не активирован",
        en: "Not activated",
        uk: "Не активовано",
        ro: "Neactivat"
      },
      trakttv_movies: {
        ru: "Фильмы",
        en: "Movies",
        uk: "Фільми",
        ro: "Filme"
      },
      trakttv_watchlist_tab_movies: {
        ru: "Фильмы",
        en: "Movies",
        uk: "Фільми",
        ro: "Filme"
      },
      trakttv_watchlist_tab_shows: {
        ru: "Сериалы",
        en: "Shows",
        uk: "Серіали",
        ro: "Seriale"
      },
      trakttv_watchlist_sort_more: {
        ru: "Ещё",
        en: "More",
        uk: "Ще",
        ro: "Mai mult"
      },
      trakttv_watchlist_sort_more_title: {
        ru: "Другие сортировки",
        en: "More sorting",
        uk: "Інші сортування",
        ro: "Mai multe sortări"
      },
      trakttv_watchlist_sort_rank: {
        ru: "Ранг",
        en: "Rank",
        uk: "Ранг",
        ro: "Rang"
      },
      trakttv_watchlist_sort_added: {
        ru: "Дата добавления",
        en: "Added",
        uk: "Дата додавання",
        ro: "Data adăugării"
      },
      trakttv_watchlist_sort_title: {
        ru: "Название",
        en: "Title",
        uk: "Назва",
        ro: "Titlu"
      },
      trakttv_watchlist_sort_released: {
        ru: "Релиз",
        en: "Released",
        uk: "Реліз",
        ro: "Lansare"
      },
      trakttv_watchlist_sort_runtime: {
        ru: "Длительность",
        en: "Runtime",
        uk: "Тривалість",
        ro: "Durată"
      },
      trakttv_watchlist_sort_popularity: {
        ru: "Популярность",
        en: "Popularity",
        uk: "Популярність",
        ro: "Popularitate"
      },
      trakttv_watchlist_sort_random: {
        ru: "Случайно",
        en: "Random",
        uk: "Випадково",
        ro: "Aleatoriu"
      },
      trakttv_watchlist_sort_percentage: {
        ru: "Процент",
        en: "Percentage",
        uk: "Відсоток",
        ro: "Procent"
      },
      trakttv_watchlist_sort_imdb_rating: {
        ru: "Рейтинг IMDb",
        en: "IMDb rating",
        uk: "Рейтинг IMDb",
        ro: "Rating IMDb"
      },
      trakttv_watchlist_sort_tmdb_rating: {
        ru: "Рейтинг TMDB",
        en: "TMDB rating",
        uk: "Рейтинг TMDB",
        ro: "Rating TMDB"
      },
      trakttv_watchlist_sort_rt_tomatometer: {
        ru: "RT Tomatometer",
        en: "RT Tomatometer",
        uk: "RT Tomatometer",
        ro: "RT Tomatometer"
      },
      trakttv_watchlist_sort_rt_audience: {
        ru: "RT Audience",
        en: "RT Audience",
        uk: "RT Audience",
        ro: "RT Audience"
      },
      trakttv_watchlist_sort_metascore: {
        ru: "Metascore",
        en: "Metascore",
        uk: "Metascore",
        ro: "Metascore"
      },
      trakttv_watchlist_sort_votes: {
        ru: "Голоса",
        en: "Votes",
        uk: "Голоси",
        ro: "Voturi"
      },
      trakttv_watchlist_sort_imdb_votes: {
        ru: "Голоса IMDb",
        en: "IMDb votes",
        uk: "Голоси IMDb",
        ro: "Voturi IMDb"
      },
      trakttv_watchlist_sort_tmdb_votes: {
        ru: "Голоса TMDB",
        en: "TMDB votes",
        uk: "Голоси TMDB",
        ro: "Voturi TMDB"
      },
      trakttv_watchlist_sort_my_rating: {
        ru: "Моя оценка",
        en: "My rating",
        uk: "Моя оцінка",
        ro: "Evaluarea mea"
      },
      trakttv_watchlist_sort_watched: {
        ru: "Просмотрено",
        en: "Watched",
        uk: "Переглянуто",
        ro: "Vizionat"
      },
      trakttv_watchlist_sort_collected: {
        ru: "В коллекции",
        en: "Collected",
        uk: "У колекції",
        ro: "În colecție"
      },
      trakttv_watchlist_sort_vip_required: {
        ru: "Это сортирование доступно только для Trakt VIP",
        en: "This sorting is available only for Trakt VIP users",
        uk: "Це сортування доступне лише для Trakt VIP",
        ro: "Această sortare este disponibilă doar pentru Trakt VIP"
      },
      trakttv_episodes: {
        ru: "Эпизоды",
        en: "Episodes",
        uk: "Епізоди",
        ro: "Episoade"
      },
      trakttv_code: {
        ru: "Код",
        en: "Code",
        uk: "Код",
        ro: "Cod"
      },
      trakttv_auth: {
        ru: "Авторизация Trakt",
        en: "Trakt Auth",
        uk: "Авторизація Trakt",
        ro: "Autorizare Trakt"
      },
      trakttv_enable_watching: {
        ru: "Включить отслеживание просмотра",
        en: "Enable watch tracking",
        uk: "Ввімкнути відстеження перегляду",
        ro: "Activare urmărire vizionare"
      },
      trakttv_enable_watching_descr: {
        ru: "Автоматически отмечать просмотренные эпизоды и добавлять сериалы в \"Смотрю\"",
        en: "Automatically mark watched episodes and add series to \"Watching\"",
        uk: "Автоматично позначати переглянуті епізоди та додавати серіали в \"Дивлюся\"",
        ro: "Marchează automat episoadele vizionate și adaugă serialele în „Vizionare”"
      },
      trakttv_min_progress_threshold: {
        ru: "Порог просмотра",
        en: "Viewing threshold",
        uk: "Поріг перегляду",
        ro: "Prag vizionare"
      },
      trakttv_min_progress_threshold_descr: {
        ru: "Минимальный процент просмотра для отметки эпизода на Trakt.TV",
        en: "Minimum percentage of viewing to mark an episode on Trakt.TV",
        uk: "Мінімальний відсоток перегляду для позначення епізоду на Trakt.TV",
        ro: "Procent minim de vizionare pentru a marca un episod pe Trakt.TV"
      },
      trakttv_nav_sync: {
        ru: "Синхронизация списков",
        en: "Lists sync",
        uk: "Синхронізація списків",
        ro: "Sincronizare liste"
      },
      trakttv_nav_source: {
        ru: "Настройки источника",
        en: "Source settings",
        uk: "Налаштування джерела",
        ro: "Setări sursă"
      },
      trakttv_card_type_tv: {
        ru: "TV",
        en: "TV",
        uk: "TV",
        ro: "TV"
      },
      trakt_list_title_named: {
        ru: "Список - {name}",
        en: "List - {name}",
        uk: "Список - {name}",
        ro: "Listă - {name}"
      },
      trakttv_movie_id_missed: {
        ru: "Отсутствует ID фильма",
        en: "Movie ID is missing",
        uk: "Відсутній ID фільму",
        ro: "Lipsește ID-ul filmului"
      },
      trakttv_show_id_missed: {
        ru: "Отсутствует ID сериала",
        en: "Show ID is missing",
        uk: "Відсутній ID серіалу",
        ro: "Lipsește ID-ul serialului"
      },
      trakttv_unknown_content: {
        ru: "Неизвестный тип контента",
        en: "Unknown content type",
        uk: "Невідомий тип контенту",
        ro: "Tip conținut necunoscut"
      },
      trakttv_show_not_found: {
        ru: "Сериал не найден в Trakt",
        en: "Show not found in Trakt",
        uk: "Серіал не знайдено в Trakt",
        ro: "Serialul nu a fost găsit pe Trakt"
      },
      trakttv_params_missed: {
        ru: "Отсутствуют параметры",
        en: "Params is missing",
        uk: "Відсутні параметри",
        ro: "Parametri lipsă"
      },
      trakttv_media_id_missed: {
        ru: "Отсутствует ID медиа",
        en: "Media ID is missing",
        uk: "Відсутній ID медіа",
        ro: "Lipsește ID-ul media"
      },
      trakttv_list_id_missed: {
        ru: "Отсутствует ID списка",
        en: "List ID is missing",
        uk: "Відсутній ID списку",
        ro: "Lipsește ID-ul listei"
      },
      trakttv_upnext: {
        ru: "Смотреть дальше",
        en: "Up Next",
        uk: "Дивитись далі",
        ro: "Progres vizionare"
      },
      trakttv_topshelf: {
        ru: "Top Shelf (Apple TV)",
        en: "Top Shelf (Apple TV)",
        uk: "Top Shelf (Apple TV)",
        ro: "Top Shelf (Apple TV)"
      },
      trakttv_topshelf_descr: {
        ru: "Обновлять Top Shelf на Apple TV",
        en: "Update Top Shelf on Apple TV",
        uk: "Оновлювати Top Shelf на Apple TV",
        ro: "Actualizează Top Shelf pe Apple TV"
      },
      trakt_bookmarks_sync_section: {
        ru: "Синхронизация списков Lampa",
        en: "Lampa lists sync",
        uk: "Синхронізація списків Lampa",
        ro: "Sincronizare liste Lampa"
      },
      trakt_bookmarks_mode: {
        ru: "Режим синхронизации",
        en: "Sync mode",
        uk: "Режим синхронізації",
        ro: "Mod sincronizare"
      },
      trakt_bookmarks_mode_watchlist: {
        ru: "Watchlist",
        en: "Watchlist",
        uk: "Watchlist",
        ro: "Watchlist"
      },
      trakt_bookmarks_mode_my_lists: {
        ru: "Мои списки",
        en: "My Lists",
        uk: "Мої списки",
        ro: "Listele mele"
      },
      trakt_bookmarks_local_type: {
        ru: "Локальный список Lampa",
        en: "Local Lampa list",
        uk: "Локальний список Lampa",
        ro: "Listă locală Lampa"
      },
      trakt_bookmarks_local_type_description: {
        ru: "Выберите локальный тип, который нужно импортировать или экспортировать",
        en: "Choose which local list type to import or export",
        uk: "Оберіть локальний тип, який треба імпортувати або експортувати",
        ro: "Alegeți tipul listei locale pentru import sau export"
      },
      trakt_bookmarks_import_button: {
        ru: "Импортировать выбранный список из Trakt",
        en: "Import selected list from Trakt",
        uk: "Імпортувати вибраний список з Trakt",
        ro: "Importă lista selectată din Trakt"
      },
      trakt_bookmarks_export_button: {
        ru: "Экспортировать выбранный список в Trakt",
        en: "Export selected list to Trakt",
        uk: "Експортувати вибраний список у Trakt",
        ro: "Exportă lista selectată în Trakt"
      },
      trakt_bookmarks_auth_required: {
        ru: "Сначала войдите в Trakt.TV",
        en: "Login to Trakt.TV first",
        uk: "Спочатку увійдіть у Trakt.TV",
        ro: "Mai întâi autentificați-vă pe Trakt.TV"
      },
      trakt_bookmarks_local_unavailable: {
        ru: "Локальное избранное недоступно",
        en: "Local favorites are unavailable",
        uk: "Локальне вибране недоступне",
        ro: "Favoritele locale sunt indisponibile"
      },
      trakt_bookmarks_operation_in_progress: {
        ru: "Синхронизация уже выполняется",
        en: "Sync is already running",
        uk: "Синхронізація вже виконується",
        ro: "Sincronizarea este deja în curs"
      },
      trakt_bookmarks_import_start: {
        ru: "Запуск импорта списка",
        en: "Starting list import",
        uk: "Запуск імпорту списку",
        ro: "Pornire import listă"
      },
      trakt_bookmarks_export_start: {
        ru: "Запуск экспорта списка",
        en: "Starting list export",
        uk: "Запуск експорту списку",
        ro: "Pornire export listă"
      },
      trakt_bookmarks_progress_prepare: {
        ru: "Подготовка",
        en: "Preparing",
        uk: "Підготовка",
        ro: "Pregătire"
      },
      trakt_bookmarks_progress_loading_source: {
        ru: "Загрузка источника",
        en: "Loading source",
        uk: "Завантаження джерела",
        ro: "Încărcare sursă"
      },
      trakt_bookmarks_progress_loading_target: {
        ru: "Загрузка цели",
        en: "Loading target",
        uk: "Завантаження цілі",
        ro: "Încărcare destinație"
      },
      trakt_bookmarks_progress_import: {
        ru: "Импорт элементов",
        en: "Importing items",
        uk: "Імпорт елементів",
        ro: "Importare elemente"
      },
      trakt_bookmarks_progress_export: {
        ru: "Экспорт элементов",
        en: "Exporting items",
        uk: "Експорт елементів",
        ro: "Exportare elemente"
      },
      trakt_bookmarks_import_select_list: {
        ru: "Выберите список для импорта",
        en: "Select list to import",
        uk: "Оберіть список для імпорту",
        ro: "Selectați lista pentru import"
      },
      trakt_bookmarks_export_select_list: {
        ru: "Выберите список для экспорта",
        en: "Select list to export",
        uk: "Оберіть список для експорту",
        ro: "Selectați lista pentru export"
      },
      trakt_bookmarks_no_lists: {
        ru: "Нет персональных списков",
        en: "No personal lists found",
        uk: "Немає персональних списків",
        ro: "Nicio listă personală găsită"
      },
      trakt_bookmarks_lists_load_error: {
        ru: "Не удалось загрузить персональные списки",
        en: "Failed to load personal lists",
        uk: "Не вдалося завантажити персональні списки",
        ro: "Eroare la încărcarea listelor personale"
      },
      trakt_bookmarks_added: {
        ru: "Добавлено",
        en: "Added",
        uk: "Додано",
        ro: "Adăugat"
      },
      trakt_bookmarks_duplicates: {
        ru: "Дубликаты",
        en: "Duplicates",
        uk: "Дублікати",
        ro: "Duplicate"
      },
      trakt_bookmarks_skipped_unsupported: {
        ru: "Пропущено (без TMDB)",
        en: "Skipped (no TMDB)",
        uk: "Пропущено (без TMDB)",
        ro: "Omis (fără TMDB)"
      },
      trakt_bookmarks_failed: {
        ru: "Ошибки",
        en: "Failed",
        uk: "Помилки",
        ro: "Eșuat"
      },
      trakt_bookmarks_import_done: {
        ru: "Импорт завершен",
        en: "Import completed",
        uk: "Імпорт завершено",
        ro: "Import finalizat"
      },
      trakt_bookmarks_export_done: {
        ru: "Экспорт завершен",
        en: "Export completed",
        uk: "Експорт завершено",
        ro: "Export finalizat"
      },
      trakt_bookmarks_canceled: {
        ru: "Операция отменена",
        en: "Operation canceled",
        uk: "Операцію скасовано",
        ro: "Operațiune anulată"
      },
      trakt_bookmarks_sync_failed: {
        ru: "Ошибка синхронизации списка",
        en: "List sync failed",
        uk: "Помилка синхронізації списку",
        ro: "Sincronizare listă eșuată"
      },
      trakttv_scan_qr_code: {
        ru: "Отсканируйте QR-код",
        en: "Scan QR code",
        uk: "Відскануйте QR-код",
        ro: "Scanați codul QR"
      },
      trakttv_scan_qr: {
        ru: "Отсканируйте QR-код",
        en: "Scan QR code",
        uk: "Відскануйте QR-код",
        ro: "Scanați codul QR"
      },
      trakttv_check_now: {
        ru: "Проверить",
        en: "Check now",
        uk: "Перевірити",
        ro: "Verifică"
      },
      trakttv_settings_thanks: {
        ru: "Подяка",
        en: "Thanks",
        uk: "Подяка",
        ro: "Mulțumesc"
      },
      trakttv_settings_thanks_description: {
        ru: "Поддержка развития TraktTV-плагина добровольная. Спасибо за вклад.",
        en: "Support for TraktTV plugin development is voluntary. Thank you for your contribution.",
        uk: "Підтримка розвитку плагіна TraktTV добровільна. Дякуємо за внесок.",
        ro: "Susținerea dezvoltării plugin-ului TraktTV este voluntară. Vă mulțumim pentru contribuție."
      },
      trakttv_seconds: {
        ru: "сек",
        en: "sec",
        uk: "сек",
        ro: "sec"
      },
      trakttv_scrobble_interval: {
        ru: "Интервал скробблинга",
        en: "Scrobble interval",
        uk: "Інтервал скроблінгу",
        ro: "Interval scrobble"
      },
      trakttv_scrobble_interval_descr: {
        ru: "Как часто синхронизировать прогресс во время просмотра",
        en: "How often to sync progress during playback",
        uk: "Як часто синхронізувати прогрес під час перегляду",
        ro: "Cât de des să sincronizezi progresul în timpul redării"
      },
      trakttv_scrobble_queue_enabled: {
        ru: "Офлайн-очередь",
        en: "Offline queue",
        uk: "Офлайн-черга",
        ro: "Coadă offline"
      },
      trakttv_scrobble_queue_descr: {
        ru: "Сохранять скробблинг при отсутствии сети и отправлять позже",
        en: "Save pending scrobbles when offline and send later",
        uk: "Зберігати скроблінг при відсутності мережі та надсилати пізніше",
        ro: "Salvează scrobble-urile în așteptare când ești offline și trimite mai târziu"
      },
      trakttv_scrobble_resumed: {
        ru: "Прогресс восстановлен из Trakt",
        en: "Progress restored from Trakt",
        uk: "Прогрес відновлено з Trakt",
        ro: "Progres restabilit din Trakt"
      },
      trakttv_scrobble_started: {
        ru: "Скробблинг запущен",
        en: "Scrobbling started",
        uk: "Скроблінг запущено",
        ro: "Scrobble a început"
      },
      trakttv_scrobble_queue_processed: {
        ru: "Офлайн-очередь скробблинга обработана",
        en: "Scrobble offline queue processed",
        uk: "Офлайн-чергу скроблінгу оброблено",
        ro: "Coada offline de scrobble a fost procesată"
      }
    });
  }

  var es_array_flatMap = {};

  var flattenIntoArray;
  var hasRequiredFlattenIntoArray;

  function requireFlattenIntoArray () {
  	if (hasRequiredFlattenIntoArray) return flattenIntoArray;
  	hasRequiredFlattenIntoArray = 1;

  	var isArray = requireIsArray();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var bind = requireFunctionBindContext();
  	var createProperty = requireCreateProperty();

  	// `FlattenIntoArray` abstract operation
  	// https://tc39.es/ecma262/#sec-flattenintoarray
  	var _flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  	  var targetIndex = start;
  	  var sourceIndex = 0;
  	  var mapFn = mapper ? bind(mapper, thisArg) : false;
  	  var element, elementLen;
  	  while (sourceIndex < sourceLen) {
  	    if (sourceIndex in source) {
  	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
  	      if (depth > 0 && isArray(element)) {
  	        elementLen = lengthOfArrayLike(element);
  	        targetIndex = _flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
  	      } else {
  	        doesNotExceedSafeInteger(targetIndex + 1);
  	        createProperty(target, targetIndex, element);
  	      }
  	      targetIndex++;
  	    }
  	    sourceIndex++;
  	  }
  	  return targetIndex;
  	};
  	flattenIntoArray = _flattenIntoArray;
  	return flattenIntoArray;
  }

  var hasRequiredEs_array_flatMap;

  function requireEs_array_flatMap () {
  	if (hasRequiredEs_array_flatMap) return es_array_flatMap;
  	hasRequiredEs_array_flatMap = 1;

  	var $ = require$$0$7;
  	var flattenIntoArray = requireFlattenIntoArray();
  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var arraySpeciesCreate = requireArraySpeciesCreate();

  	// `Array.prototype.flatMap` method
  	// https://tc39.es/ecma262/#sec-array.prototype.flatmap
  	$({
  	  target: 'Array',
  	  proto: true
  	}, {
  	  flatMap: function flatMap(callbackfn /* , thisArg */) {
  	    var O = toObject(this);
  	    var sourceLen = lengthOfArrayLike(O);
  	    var A;
  	    aCallable(callbackfn);
  	    A = arraySpeciesCreate(O, 0);
  	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    return A;
  	  }
  	});
  	return es_array_flatMap;
  }

  requireEs_array_flatMap();

  var es_array_unscopables_flatMap = {};

  var hasRequiredEs_array_unscopables_flatMap;

  function requireEs_array_unscopables_flatMap () {
  	if (hasRequiredEs_array_unscopables_flatMap) return es_array_unscopables_flatMap;
  	hasRequiredEs_array_unscopables_flatMap = 1;

  	// this method was added to unscopables after implementation
  	// in popular engines, so it's moved to a separate module
  	var addToUnscopables = requireAddToUnscopables();

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables('flatMap');
  	return es_array_unscopables_flatMap;
  }

  requireEs_array_unscopables_flatMap();

  /**
   * Утиліти для TraktTV timetable
   */

  /**
   * Повертає сьогоднішню дату у форматі YYYY-MM-DD
   */
  function getTodayString() {
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = String(now.getMonth() + 1).padStart(2, '0');
    var dd = String(now.getDate()).padStart(2, '0');
    return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
  }

  /**
   * Нормалізує URL постера
   * @param {Array<string>} posterArr
   * @returns {string}
   */
  function normalizePoster(posterArr) {
    if (!Array.isArray(posterArr) || !posterArr[0]) return '';
    var url = posterArr[0];
    if (url.startsWith('http')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    if (url.startsWith('walter-')) return 'https://' + url;
    return url;
  }

  function TraktTimetableAll() {
    var _this2 = this;
    var Scroll = Lampa.Scroll;
    var Activity = Lampa.Activity;
    var Modal = Lampa.Modal;
    var Template = Lampa.Template;
    var Empty = Lampa.Empty;
    this.activity = null;
    this._destroyed = false;
    var scroll = new Scroll({
      mask: true,
      over: true,
      step: 300
    });
    var html = $('<div></div>');
    var body = $('<div class="timetable"></div>');
    var last;
    var DAYS = 31;
    var episodeTypes = [{
      key: 'series_finale',
      color: '#8d6e63'
    }, {
      key: 'season_finale',
      color: '#e74c3c'
    }, {
      key: 'mid_season_finale',
      color: '#fbc02d'
    }, {
      key: 'series_premiere',
      color: '#40b3ff'
    }, {
      key: 'season_premiere',
      color: '#29b6f6'
    }, {
      key: 'mid_season_premiere',
      color: '#7e57c2'
    }, {
      key: 'standard',
      color: '#aaa'
    }];
    function groupEpisodesByDate(episodes) {
      var grouped = {};
      episodes.forEach(function (ep) {
        if (!grouped[ep.air_date]) grouped[ep.air_date] = [];
        grouped[ep.air_date].push(ep);
      });
      return grouped;
    }
    function groupEpisodesByShow(episodes) {
      var byShow = {};
      episodes.forEach(function (ep) {
        var sid = ep.card.id;
        if (!byShow[sid]) byShow[sid] = {
          card: ep.card,
          episodes: []
        };
        byShow[sid].episodes.push(ep);
      });
      return byShow;
    }
    function prepareTimetableData(traktData) {
      var shows = {};
      traktData.forEach(function (item) {
        var tmdbId = item.show.ids.tmdb;
        if (!tmdbId) return;
        var posterUrl = '';
        if (item.show.images && Array.isArray(item.show.images.poster)) {
          posterUrl = normalizePoster(item.show.images.poster);
        }
        if (!shows[tmdbId]) {
          shows[tmdbId] = {
            id: tmdbId,
            season: item.episode.season,
            episodes: [],
            card: {
              id: tmdbId,
              name: item.show.title,
              poster: posterUrl,
              source: 'tmdb'
            }
          };
        }
        shows[tmdbId].episodes.push({
          air_date: item.first_aired ? item.first_aired.slice(0, 10) : '',
          season_number: item.episode.season,
          episode_number: item.episode.number,
          episode_type: item.episode.episode_type,
          name: item.episode.title,
          still_path: '',
          card: shows[tmdbId].card
        });
      });
      return Object.values(shows).flatMap(function (show) {
        return show.episodes.map(function (ep) {
          return _objectSpread2(_objectSpread2({}, ep), {}, {
            card: show.card
          });
        });
      });
    }
    function fetchTraktCalendar() {
      return _fetchTraktCalendar.apply(this, arguments);
    }
    function _fetchTraktCalendar() {
      _fetchTraktCalendar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var dateString;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              dateString = getTodayString();
              _context2.p = 1;
              _context2.n = 2;
              return api$1.get("/calendars/my/shows/".concat(dateString, "/").concat(DAYS, "?extended=images,full"));
            case 2:
              return _context2.a(2, _context2.v);
            case 3:
              _context2.p = 3;
              _context2.v;
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakttv_calendar_error')
              });
              return _context2.a(2, []);
          }
        }, _callee2, null, [[1, 3]]);
      }));
      return _fetchTraktCalendar.apply(this, arguments);
    }
    this.create = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(activityBody) {
        var _this = this;
        var traktData, episodes, groupedByDate, startDate, dates, i, d, y, m, day, hasAny;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (this.activity) this.activity.loader(true);
              _context.n = 1;
              return fetchTraktCalendar();
            case 1:
              traktData = _context.v;
              if (!this._destroyed) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              episodes = prepareTimetableData(traktData);
              groupedByDate = groupEpisodesByDate(episodes);
              startDate = new Date();
              dates = [];
              for (i = 0; i < DAYS; i++) {
                d = new Date(startDate);
                d.setDate(startDate.getDate() + i);
                y = d.getFullYear();
                m = String(d.getMonth() + 1).padStart(2, '0');
                day = String(d.getDate()).padStart(2, '0');
                dates.push("".concat(y, "-").concat(m, "-").concat(day));
              }
              hasAny = false;
              dates.forEach(function (date) {
                if ((groupedByDate[date] || []).length) hasAny = true;
                _this.append(date, groupedByDate[date] || []);
              });
              if (!hasAny) this.empty();
              scroll.minus(); // scroll готовий до рендеру
              scroll.append(body); // додаємо body в scroll
              html.append(scroll.render()); // додаємо scroll в html

              if (this.activity) this.activity.loader(false);

              // Зберігаємо посилання для контролера
              this.body = body;
              this.scroll = scroll;
              this.html = html;

              // Відразу активуємо фокус
              if (this.activity && typeof this.activity.toggle === 'function') {
                this.activity.toggle();
              }
              if (activityBody) {
                activityBody.append(html);
              }
              return _context.a(2, this.render());
          }
        }, _callee, this);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.empty = function () {
      var empty = new Empty({
        descr: Lampa.Lang.translate('trakttv_no_upcoming')
      });
      html.append(empty.render());
      _this2.start = empty.start;
      if (_this2.activity) _this2.activity.loader(false);
    };
    this.append = function (date, eps) {
      var item = $("\n            <div class=\"timetable__item selector\">\n                <div class=\"timetable__inner\">\n                    <div class=\"timetable__date\">".concat(date, "</div>\n                    <div class=\"timetable__body\"></div>\n                </div>\n            </div>\n        "));
      if (eps.length) {
        var byShow = groupEpisodesByShow(eps);
        Object.values(byShow).forEach(function (show) {
          var card = show.card;
          var typesSet = _toConsumableArray(new Set(show.episodes.map(function (ep) {
            return ep.episode_type;
          }).filter(Boolean)));
          var foundType = episodeTypes.find(function (typeObj) {
            return typesSet.includes(typeObj.key);
          }) || episodeTypes[episodeTypes.length - 1];
          var mainTypeKey = foundType.key;
          var mainTypeColor = foundType.color;
          item.find('.timetable__body').append("\n                    <div>\n                        <span title=\"".concat(mainTypeKey, "\" style=\"display:inline-block;width:0.9em;height:0.9em;border-radius:0.2em;margin-right:0.3em;background:").concat(mainTypeColor, ";vertical-align:middle\"></span>\n                        ").concat(card.name || '', "\n                    </div>\n                "));
        });
        item.addClass('timetable__item--any');
      } else {
        item.find('.timetable__body').append("<div class=\"timetable__empty\">".concat(Lampa.Lang.translate('trakttv_no_series'), "</div>"));
      }
      item.on('hover:focus', function () {
        last = $(this)[0];
        scroll.update($(this)); // ВАЖЛИВО! Оновлення скролу
      }).on('hover:hover', function () {
        last = $(this)[0];
      }).on('hover:enter', function () {
        last = $(this)[0];
        if (eps.length) {
          var _byShow = groupEpisodesByShow(eps);
          var modal = $('<div></div>');
          Object.values(_byShow).forEach(function (show) {
            var card = show.card;
            var noty = Template.get('notice_card', {
              time: date,
              title: card.name,
              descr: show.episodes.map(function (ep) {
                return "S: <b>".concat(ep.season_number, "</b> E: <b>").concat(ep.episode_number, "</b> \u2014 ").concat(ep.name);
              }).join('<br>')
            });
            noty.find('.notice__img').remove();
            if (card.poster) {
              noty.find('.notice__left').css('margin-right', '5em');
              noty.find('.notice__left').prepend("<img src=\"".concat(card.poster, "\" style=\"max-width:120px;max-height:170px;display:block;margin-bottom:1em;\">"));
            }
            noty.on('hover:enter', function () {
              Modal.close();
              Activity.push({
                url: '',
                component: 'full',
                id: card.id,
                method: 'tv',
                card: card,
                source: card.source
              });
            });
            modal.append(noty);
          });
          Modal.open({
            title: "".concat(Lampa.Lang.translate('trakttv_episodes_on'), " ").concat(date),
            size: 'medium',
            html: modal,
            onBack: function onBack() {
              Modal.close();
              Lampa.Controller.toggle('content');
            }
          });
        }
      });
      body.append(item);
    };
    this.back = function () {
      Activity.backward();
    };
    this.start = function () {
      if (this.activity) this.activity.loader(false);
      Lampa.Controller.add('content', {
        link: this,
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          if (!last) {
            last = body.find('.timetable__item.selector').get(0);
          }
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        right: function right() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('right')) Navigator.move('right');else Navigator.move('right');
        },
        up: function up() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        down: function down() {
          if (typeof Navigator !== 'undefined' && Navigator.canmove('down')) Navigator.move('down');
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
      this._destroyed = true;
      scroll.destroy();
      html.remove();
      this.body = null;
      this.html = null;
      this.scroll = null;
      this.activity = null;
      last = null;
    };
  }

  /**
   * Файл з SVG іконками для використання в плагіні
   * Це дозволяє уникнути дублювання коду та легко змінювати іконки
   */

  // Стилі для заголовків з іконками
  var HEADER_STYLE = 'display:flex; align-items:center; gap:10px;';
  var ICON_STYLE = 'width:52px; height:52px;';
  var LINE_TITLE_STYLE = 'display:inline-flex; align-items:center; gap:.4em;';
  var LINE_ICON_STYLE = 'width:1em; height:1em; display:inline-block;';
  var TRAKT_ICON_CLASS = 'trakt-brand-icon';

  // Основна іконка Trakt.TV
  var TRAKT_ICON = "<svg class=\"".concat(TRAKT_ICON_CLASS, "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\">\n  <path fill=\"currentColor\" d=\"M47.87,9.58c-.05-.39-.13-.77-.23-1.15-.19-.74-.46-1.45-.79-2.14-.15-.3-.31-.6-.5-.88-.36-.6-.77-1.16-1.24-1.69C43.03,1.43,40.05,0,36.73,0H11.26C5.04,0,0,5.05,0,11.27v25.48C0,42.96,5.04,48,11.26,48h25.47c6.22,0,11.27-5.04,11.27-11.26V11.27c0-.57-.04-1.13-.13-1.69ZM47,36.74c0,5.66-4.61,10.25-10.26,10.25H11.26c-5.66,0-10.25-4.6-10.25-10.25V11.27C1,5.61,5.6,1,11.26,1h25.47c3.04,0,5.77,1.33,7.66,3.43l-22.85,22.86-8.62-8.62-1.46,1.46,14.4,14.4,1.46-1.47-4.31-4.31L45.61,6.14c.18.29.33.6.47.91l-21.69,21.7,3.62,3.62,1.46-1.46-2.16-2.16,19.47-19.48c.08.4.14.8.17,1.21l-18.26,18.27,1.46,1.46,16.83-16.84v23.36ZM15.77,15.82l7.93,7.93,1.46-1.48-7.93-7.92-1.46,1.46ZM13.62,17.98l7.92,7.93,1.47-1.48-7.93-7.92-1.46,1.47ZM6.67,35.12V12.88c0-3.42,2.78-6.2,6.2-6.2h20.79v-2.08H12.87c-4.56,0-8.28,3.71-8.28,8.28v22.23c0,4.57,3.72,8.29,8.28,8.29h22.24c4.57,0,8.28-3.72,8.28-8.29v-3.51h-2.08v3.51c0,3.42-2.78,6.21-6.2,6.21H12.87c-3.42,0-6.2-2.79-6.2-6.21Z\"/>\n</svg>");

  // Іконка для watchlist
  var WATCHLIST_ICON = "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>";

  // Іконка для історії (галочка)
  var HISTORY_ICON = "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>";

  // Функція для створення заголовка з іконкою
  function createHeaderWithIcon(icon, text) {
    return "<div class=\"trakt-header\" style=\"".concat(HEADER_STYLE, "\"><div class=\"trakt-icon\" style=\"").concat(ICON_STYLE, "\">").concat(icon, "</div><div class=\"trakt-title\">").concat(text, "</div></div>");
  }
  function createLineTitle(text) {
    var sizedIcon = TRAKT_ICON.replace('<svg ', "<svg style=\"width:100%; height:100%; display:block;\" ");
    var root = document.createElement('span');
    root.className = 'trakt-line-title';
    root.setAttribute('style', LINE_TITLE_STYLE);
    var iconWrap = document.createElement('span');
    iconWrap.className = 'trakt-line-title__icon';
    iconWrap.setAttribute('style', LINE_ICON_STYLE);
    iconWrap.innerHTML = sizedIcon;
    var label = document.createElement('span');
    label.textContent = text;
    root.appendChild(iconWrap);
    root.appendChild(label);
    return root;
  }

  // Експортуємо всі іконки та утиліти
  var icons = {
    TRAKT_ICON: TRAKT_ICON,
    WATCHLIST_ICON: WATCHLIST_ICON,
    HISTORY_ICON: HISTORY_ICON,
    HEADER_STYLE: HEADER_STYLE,
    ICON_STYLE: ICON_STYLE,
    createHeaderWithIcon: createHeaderWithIcon,
    createLineTitle: createLineTitle
  };

  function t$2(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function notify(text) {
    Lampa.Bell.push({
      text: text
    });
  }
  function normalizeCardParams(cardData) {
    var _cardData$movie, _cardData$data;
    var source = (cardData === null || cardData === void 0 ? void 0 : cardData.movie) || (cardData === null || cardData === void 0 ? void 0 : cardData.card) || (cardData === null || cardData === void 0 ? void 0 : cardData.data) || cardData || {};
    var method = (cardData === null || cardData === void 0 ? void 0 : cardData.method) || source.method || source.card_type || (source.first_air_date || source.name ? 'tv' : 'movie');
    var externalIds = (cardData === null || cardData === void 0 ? void 0 : cardData.external_ids) || source.external_ids || {};
    var ids = _objectSpread2(_objectSpread2({}, source.ids || {}), (cardData === null || cardData === void 0 ? void 0 : cardData.ids) || {});
    var rawId = source.id || (cardData === null || cardData === void 0 ? void 0 : cardData.id) || (cardData === null || cardData === void 0 || (_cardData$movie = cardData.movie) === null || _cardData$movie === void 0 ? void 0 : _cardData$movie.id) || (cardData === null || cardData === void 0 || (_cardData$data = cardData.data) === null || _cardData$data === void 0 ? void 0 : _cardData$data.id) || externalIds.tmdb_id;
    if (!ids.tmdb && externalIds.tmdb_id) ids.tmdb = externalIds.tmdb_id;
    if (!ids.trakt && externalIds.trakt_id) ids.trakt = externalIds.trakt_id;
    if (!ids.imdb && externalIds.imdb_id) ids.imdb = externalIds.imdb_id;
    if (!ids.tmdb && rawId) ids.tmdb = rawId;
    return _objectSpread2(_objectSpread2({}, source), {}, {
      method: method,
      ids: ids,
      id: rawId || ids.tmdb
    });
  }
  function loadMyListsMembership(params, lists) {
    var safeLists = Array.isArray(lists) ? lists : [];
    var checks = safeLists.map(function (list) {
      return api$1.inList({
        listId: list.id,
        item: params,
        limit: 100,
        maxPages: 5
      }).then(function (inList) {
        return _objectSpread2(_objectSpread2({}, list), {}, {
          inList: !!inList
        });
      }).catch(function () {
        return _objectSpread2(_objectSpread2({}, list), {}, {
          inList: false
        });
      });
    });
    return Promise.all(checks);
  }
  function buildManagerItems(watchlistState, lists) {
    var items = [];
    items.push({
      title: watchlistState ? t$2('trakt_watchlist_remove', 'Remove from watchlist') : t$2('trakt_watchlist_add', 'Add to watchlist'),
      target: 'watchlist',
      inList: !!watchlistState
    });
    (lists || []).forEach(function (list) {
      var listName = (list.list_title || list.title || '').trim();
      if (!listName) return;
      var actionTitle = list.inList ? t$2('trakt_remove_from_list_action', 'Remove from list') : t$2('trakt_add_to_list_action', 'Add to list');
      items.push({
        title: "".concat(listName, " \xB7 ").concat(actionTitle),
        target: 'list',
        listId: list.id,
        listTitle: listName,
        inList: !!list.inList
      });
    });
    return items;
  }
  function updateButtonStyle(button, textNode, isAdded) {
    if (isAdded) {
      button.classList.add('added');
      button.style.color = '#37ff54';
      if (textNode) textNode.textContent = t$2('trakt_lists_button_in_watchlist', 'In watchlist');
    } else {
      button.classList.remove('added');
      button.style.color = '';
      if (textNode) textNode.textContent = t$2('trakt_lists_button', 'Manage lists');
    }
  }
  function refreshButtonState(button, textNode, params) {
    api$1.inWatchlist(params).then(function (isAdded) {
      return updateButtonStyle(button, textNode, !!isAdded);
    }).catch(function () {
      return updateButtonStyle(button, textNode, false);
    });
  }
  function handleSelectAction(item, params, onDone) {
    if (item.target === 'watchlist') {
      var request = item.inList ? api$1.removeFromWatchlist(params) : api$1.addToWatchlist(params);
      request.then(function () {
        notify(item.inList ? t$2('trakt_watchlist_remove', 'Removed from watchlist') : t$2('trakt_watchlist_add', 'Added to watchlist'));
        if (onDone) onDone();
      }).catch(function () {
        return notify(t$2('trakt_watchlist_action_error', 'Watchlist action failed'));
      });
      return;
    }
    if (item.target === 'list' && item.listId) {
      var _request = item.inList ? api$1.removeFromList({
        listId: item.listId,
        item: params
      }) : api$1.addToList({
        listId: item.listId,
        item: params
      });
      _request.then(function () {
        notify(item.inList ? t$2('trakt_item_removed_from_list', 'Item removed from list') : t$2('trakt_item_added_to_list', 'Item added to list'));
        if (onDone) onDone();
      }).catch(function (error) {
        if (error && error.status === 409) {
          notify(t$2('trakt_list_conflict', 'Item is already in this list'));
          return;
        }
        notify(t$2('trakt_list_action_error', 'List action failed'));
      });
    }
  }
  function openListManager(params, button, textNode) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var onBack = typeof options.onBack === 'function' ? options.onBack : function () {
      Lampa.Controller.toggle('content');
    };
    Promise.all([api$1.inWatchlist(params).catch(function () {
      return false;
    }), api$1.myLists({
      page: 1,
      limit: 100
    }).catch(function () {
      return {
        results: []
      };
    })]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        watchlistState = _ref2[0],
        myListsResponse = _ref2[1];
      var lists = myListsResponse && Array.isArray(myListsResponse.results) ? myListsResponse.results : [];
      loadMyListsMembership(params, lists).then(function (withMembership) {
        Lampa.Select.show({
          title: t$2('trakt_manage_lists_title', 'Manage lists'),
          items: buildManagerItems(!!watchlistState, withMembership),
          onSelect: function onSelect(item) {
            handleSelectAction(item, params, function () {
              return refreshButtonState(button, textNode, params);
            });
          },
          onBack: onBack
        });
      });
    }).catch(function () {
      notify(t$2('trakt_list_action_error', 'List action failed'));
    });
  }
  function openManagerByCard(cardData) {
    var _params$ids, _params$ids2, _params$ids3;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!Lampa.Storage.get('trakt_token')) {
      notify(t$2('trakt_login', 'Login to Trakt.TV'));
      return false;
    }
    var params = normalizeCardParams(cardData);
    if (!params || !params.id && !(params !== null && params !== void 0 && (_params$ids = params.ids) !== null && _params$ids !== void 0 && _params$ids.tmdb) && !(params !== null && params !== void 0 && (_params$ids2 = params.ids) !== null && _params$ids2 !== void 0 && _params$ids2.trakt) && !(params !== null && params !== void 0 && (_params$ids3 = params.ids) !== null && _params$ids3 !== void 0 && _params$ids3.imdb)) {
      notify(t$2('trakt_list_action_error', 'List action failed'));
      return false;
    }
    openListManager(params, null, null, options);
    return true;
  }
  function addWatchlistButton(card) {
    var button = document.createElement('div');
    button.className = 'full-start__button selector watchlist-button trakt-list-manager-button';
    button.innerHTML = "\n        ".concat(icons.WATCHLIST_ICON, "\n        <span>").concat(t$2('trakt_lists_button', 'Manage lists'), "</span>\n    ");
    var textNode = button.querySelector('span');
    var params = normalizeCardParams(card);
    refreshButtonState(button, textNode, params);
    button.on('hover:enter', function () {
      openListManager(params, button, textNode);
    });
    return button;
  }
  var watchlist = {
    addWatchlistButton: addWatchlistButton,
    openManagerByCard: openManagerByCard
  };

  var TraktHistory = {
    // Функція для відображення прогресу перегляду серіалу
    showWatchProgress: function showWatchProgress(data, element) {
      // Перевіряємо чи це серіал
      if (data.movie && data.movie.first_air_date && element.object.method === 'tv') {
        // Отримуємо історію серіалу
        getShowHistory(data.movie.id).then(function (historyData) {
          if (historyData && historyData.length > 0) {
            // Отримуємо останній переглянутий епізод
            var lastWatched = historyData[0];
            if (lastWatched && lastWatched.episode) {
              var _Lampa;
              var season = lastWatched.episode.season;
              var episode = lastWatched.episode.number;
              var hasApplecation = Array.isArray((_Lampa = Lampa) === null || _Lampa === void 0 || (_Lampa = _Lampa.Manifest) === null || _Lampa === void 0 ? void 0 : _Lampa.plugins) && Lampa.Manifest.plugins.some(function (plugin) {
                return plugin && plugin.name === 'Applecation';
              });
              var renderRoot = element.object.activity.render();

              // Для Applecation вставляємо прогрес у блок інформації, перед бейджами якості
              if (hasApplecation) {
                var tryInsertApplecation = function tryInsertApplecation() {
                  var _rootNode$querySelect, _cardRoot$querySelect;
                  var rootNode = renderRoot && renderRoot.get ? renderRoot.get(0) : null;
                  var cardRoot = (rootNode === null || rootNode === void 0 || (_rootNode$querySelect = rootNode.querySelector) === null || _rootNode$querySelect === void 0 ? void 0 : _rootNode$querySelect.call(rootNode, '.full-start-new.applecation')) || document.querySelector('.full-start-new.applecation');
                  var applecationInfo = cardRoot === null || cardRoot === void 0 || (_cardRoot$querySelect = cardRoot.querySelector) === null || _cardRoot$querySelect === void 0 ? void 0 : _cardRoot$querySelect.call(cardRoot, '.applecation__info');
                  if (!applecationInfo) return false;
                  var existingDefault = cardRoot.querySelector('.full-start-new__details.trakt');
                  if (existingDefault) existingDefault.remove();
                  var existingApplecation = applecationInfo.querySelector('.trakt-applecation-progress');
                  if (existingApplecation) existingApplecation.remove();
                  var applecationProgress = document.createElement('span');
                  applecationProgress.className = 'trakt-applecation-progress';
                  applecationProgress.innerHTML = "\n                                        <span class=\"trakt-icon\">".concat(icons.TRAKT_ICON, "</span>\n                                        <span class=\"trakt-applecation-progress__text\">S").concat(season, " \xB7 E").concat(episode, "</span>\n                                    ");
                  var badges = applecationInfo.querySelector('.applecation__quality-badges');
                  if (badges) {
                    badges.before(applecationProgress);
                  } else {
                    applecationInfo.append(applecationProgress);
                  }
                  return true;
                };
                if (tryInsertApplecation()) return;
                var attempts = 0;
                var _retryInsert = function retryInsert() {
                  if (tryInsertApplecation()) return;
                  attempts += 1;
                  if (attempts < 10) setTimeout(_retryInsert, 200);
                };
                _retryInsert();
                return;
              }

              // Створюємо елемент для відображення прогресу
              var progressElement = document.createElement('div');
              progressElement.className = 'full-start-new__details trakt';
              progressElement.innerHTML = "\n                                <div class=\"trakt-icon\" style=\"width:48px; height:48px;\">".concat(icons.TRAKT_ICON, "</div>\n                                <span>").concat(Lampa.Lang.translate('full_season'), ": ").concat(season, "</span><span class=\"full-start-new__split\">\u25CF</span>\n                                <span>").concat(Lampa.Lang.translate('full_episode'), ": ").concat(episode, "</span>\n                            ");

              // Знаходимо елемент після якого вставити прогрес
              var taglineElement = renderRoot.find('.full-start-new__rate-line');
              if (taglineElement.length) {
                // Перевіряємо чи вже є елемент прогресу
                var existingProgress = renderRoot.find('.full-start-new__details.trakt');
                if (existingProgress.length) {
                  existingProgress.remove();
                }
                taglineElement.after(progressElement);
              }
            }
          }
        }).catch(function (error) {
          logWarn('Failed to load show history for progress badge', error, {
            debugOnly: true
          });
        });
      }
    },
    addHistoryButton: function addHistoryButton(data) {
      var button = document.createElement('div');
      button.className = 'full-start__button selector trakt_history-button';
      button.innerHTML = "\n               ".concat(icons.HISTORY_ICON, " \n                <span>").concat(Lampa.Lang.translate('trakt_history_not_in'), "</span>\n");

      // Перевіряємо чи є в історії
      inHistory(data.movie, function (isInHistory) {
        updateButtonStyle(button, isInHistory);
      }, function () {
        button.style.display = 'none';
      });
      function updateButtonStyle(button, isInHistory) {
        if (isInHistory) {
          button.classList.add('added');
          button.style.color = '#37ff54';
          button.querySelector('span').textContent = Lampa.Lang.translate('trakt_history_in');
        } else {
          button.classList.remove('added');
          button.style.color = '';
          button.querySelector('span').textContent = Lampa.Lang.translate('trakt_history_not_in');
        }
      }

      // Обробник кліку для кнопки, що працює на всіх платформах
      $(button).on('hover:enter', function () {
        var isInHistory = button.classList.contains('added');
        if (isInHistory) {
          // Вже в історії, видаляємо
          var _type = data.movie.first_air_date ? 'show' : 'movie';

          // Створюємо об'єкт для передачі в API
          var _apiData = {
            method: _type === 'movie' ? 'movie' : 'show',
            id: data.movie.id,
            season: data.movie.season_number || 1,
            episode: data.movie.episode_number || 1
          };
          if (_type === 'movie') {
            removeFromHistory(_apiData).then(function () {
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakt_history_removed')
              });
              updateButtonStyle(button, false);
            }).catch(function (err) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate('trakt_history_removeError'),
                err: err
              });
            });
          } else if (_type === 'show') {
            Lampa.Select.show({
              title: Lampa.Lang.translate('trakt_history_title'),
              items: [{
                title: Lampa.Lang.translate('trakt_history_all'),
                action: 'all'
              }, {
                title: Lampa.Lang.translate('trakt_history_season'),
                action: 'last_season'
              }, {
                title: Lampa.Lang.translate('trakt_history_episodes'),
                action: 'last_episode'
              }],
              onSelect: function onSelect(a) {
                removeFromHistory(_apiData, a.action).then(function () {
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('trakt_history_removed', {
                      type: a.title
                    })
                  });
                  updateButtonStyle(button, false);
                }).catch(function (err) {
                  Lampa.Bell.push({
                    text: Lampa.Lang.translate('trakt_history_removeError'),
                    err: err
                  });
                });
              },
              onBack: function onBack() {
                Lampa.Controller.toggle('menu');
              }
            });
          }
          return;
        }
        var type = data.movie.first_air_date ? 'show' : 'movie';

        // Створюємо об'єкт для передачі в API
        var apiData = {
          method: type === 'movie' ? 'movie' : 'show',
          id: data.movie.id,
          season: data.movie.season_number || 1,
          episode: data.movie.episode_number || 1
        };
        if (type === 'movie') {
          addToHistory(apiData).then(function () {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_history_added')
            });
            updateButtonStyle(button, true);
          }).catch(function (err) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_history_addError'),
              err: err
            });
          });
        } else if (type === 'show') {
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakt_history_title'),
            items: [{
              title: Lampa.Lang.translate('trakt_history_all'),
              action: 'all'
            }, {
              title: Lampa.Lang.translate('trakt_history_season'),
              action: 'last_season'
            }, {
              title: Lampa.Lang.translate('trakt_history_episodes'),
              action: 'last_episode'
            }],
            onSelect: function onSelect(a) {
              addToHistory(apiData, a.action).then(function () {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('trakt_history_added', {
                    type: a.title
                  })
                });
                updateButtonStyle(button, true);
              }).catch(function (err) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate('trakt_history_addError'),
                  err: err
                });
              });
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('menu');
            }
          });
        }
      });
      return button;
    }
  };

  /**
   * Модуль для роботи з меню TraktTV
   */
  var menuAdded = false;
  function addMenuItems() {
    if (menuAdded) return;
    var t = function t(key) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      try {
        return Lampa.Lang.translate(key) || fallback || key;
      } catch (e) {
        return fallback || key;
      }
    };
    var watchlistTitle = t('trakttv_watchlist', 'Watchlist');
    var upNextTitle = t('trakttv_upnext', 'Up Next');
    var calendarTitle = t('trakttv_calendar', 'Calendar');
    var recommendationsTitle = t('trakttv_recommendations', 'Recommendations');
    var menuTitle = t('trakttv_menu_title', 'TraktTV');
    var myListsTitle = t('trakt_my_lists', 'My Lists');
    var likedListsTitle = t('trakt_liked_lists', 'Liked Lists');
    var watchlist = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(watchlistTitle, "</div>\n    </li>"));
    var upnext = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(upNextTitle, "</div>\n    </li>"));
    var timetable = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">\n         <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n    </div>\n    <div class=\"menu__text\">").concat(calendarTitle, "</div>\n    </li>"));
    var myLists = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(myListsTitle, "</div>\n    </li>"));
    var likedLists = $("<li class=\"menu__item selector\">\n        <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(likedListsTitle, "</div>\n    </li>"));
    timetable.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: calendarTitle,
        component: 'trakt_timetable_all',
        id: 'trakt_timetable_all'
      });
    });
    watchlist.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: watchlistTitle,
        component: 'trakt_watchlist',
        page: 1
      });
    });
    upnext.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: upNextTitle,
        component: 'trakt_upnext',
        page: 1
      });
    });
    myLists.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: myListsTitle,
        component: 'trakt_my_lists',
        page: 1
      });
    });
    likedLists.on('hover:enter', function () {
      Lampa.Activity.push({
        url: '',
        title: likedListsTitle,
        component: 'trakt_lists',
        page: 1
      });
    });

    // Combine menu items
    var items = [{
      title: upNextTitle,
      component: 'trakt_upnext'
    }, {
      title: watchlistTitle,
      component: 'trakt_watchlist'
    }, {
      title: calendarTitle,
      component: 'trakt_timetable_all'
    }, {
      title: recommendationsTitle,
      component: 'trakttv_recommendations',
      toggleOption: 'trakttv_show_recommendations'
    }];

    // Додаємо пункти меню для списків Trakt
    items.push({
      title: myListsTitle,
      component: 'trakt_my_lists'
    });
    items.push({
      title: likedListsTitle,
      component: 'trakt_lists'
    });
    var menuList = $('.menu .menu__list').eq(0);
    var sideMenuMap = {
      trakt_watchlist: watchlist,
      trakt_upnext: upnext,
      trakt_timetable_all: timetable,
      trakt_my_lists: myLists,
      trakt_lists: likedLists
    };
    function syncSideMenuItem(key) {
      var menuItem = sideMenuMap[key];
      if (!menuItem) return;
      var shouldShow = Lampa.Storage.get(key) === true;
      var alreadyAdded = menuItem.parent().length > 0;
      if (shouldShow && !alreadyAdded) menuList.append(menuItem);
      if (!shouldShow && alreadyAdded) menuItem.remove();
    }
    var combineButton = $("<li class=\"menu__item selector\">\n    <div class=\"menu__ico\">".concat(icons.TRAKT_ICON, " </div>\n        <div class=\"menu__text\">").concat(menuTitle, "</div>\n    </li>"));
    combineButton.on('hover:enter', function () {
      Lampa.Select.show({
        title: menuTitle,
        items: items,
        onSelect: function onSelect(a) {
          Lampa.Activity.push({
            url: '',
            title: a.title,
            component: a.component,
            page: 1
          });
        },
        onLong: function onLong(a) {
          // Визначаємо ключ для перемикання
          var toggleKey = a.toggleOption || a.component;

          // Отримуємо поточне значення
          var currentValue = Lampa.Storage.field(toggleKey, true);

          // Перемикаємо значення
          if (currentValue === true) {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_componentDisable')
            });
            Lampa.Storage.set(toggleKey, false);
          } else {
            Lampa.Bell.push({
              text: Lampa.Lang.translate('trakt_componentEnable')
            });
            Lampa.Storage.set(toggleKey, true);
          }
          syncSideMenuItem(toggleKey);
        },
        onBack: function onBack() {
          Lampa.Controller.toggle('menu');
        }
      });
    });
    menuList.append(combineButton);

    // Перевіряємо кожен елемент локального сховища і додаємо відповідні пункти меню
    items.forEach(function (item) {
      var key = item.component;
      syncSideMenuItem(key);
    });
    menuAdded = true;
  }

  var es_string_repeat = {};

  var hasRequiredEs_string_repeat;

  function requireEs_string_repeat () {
  	if (hasRequiredEs_string_repeat) return es_string_repeat;
  	hasRequiredEs_string_repeat = 1;

  	var $ = require$$0$7;
  	var repeat = requireStringRepeat();

  	// `String.prototype.repeat` method
  	// https://tc39.es/ecma262/#sec-string.prototype.repeat
  	$({
  	  target: 'String',
  	  proto: true
  	}, {
  	  repeat: repeat
  	});
  	return es_string_repeat;
  }

  requireEs_string_repeat();

  var PAGE_LIMIT = 100;
  var MAX_PAGES = 100;
  var SUPPORTED_FAVORITE_TYPES = ['book', 'like', 'wath', 'look', 'viewed', 'scheduled', 'continued', 'thrown'];
  var MARK_FAVORITE_TYPES = ['look', 'viewed', 'scheduled', 'continued', 'thrown'];
  function toNumericId(value) {
    var numeric = Number(value);
    if (!Number.isFinite(numeric) || numeric <= 0) return 0;
    return numeric;
  }
  function normalizeFavoriteType(value) {
    var type = (value || 'book').toString().trim().toLowerCase();
    return SUPPORTED_FAVORITE_TYPES.indexOf(type) > -1 ? type : 'book';
  }
  function isMarkFavoriteType(type) {
    return MARK_FAVORITE_TYPES.indexOf(type) > -1;
  }
  function cancelError() {
    var error = new Error('Operation canceled');
    error.code = 'canceled';
    return error;
  }
  function isCanceled(checkCancel) {
    return typeof checkCancel === 'function' && checkCancel() === true;
  }
  function normalizeResults(response) {
    return response && Array.isArray(response.results) ? response.results : [];
  }
  function detectTraktType() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (item.method || item.type || '').toString().toLowerCase();
    return method === 'movie' ? 'movie' : 'show';
  }
  function detectLampaType() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var method = (card.method || card.type || '').toString().toLowerCase();
    if (method === 'movie') return 'movie';
    if (method === 'tv' || method === 'show') return 'show';
    if (card.first_air_date || card.name || card.original_name || card.number_of_seasons) {
      return 'show';
    }
    return 'movie';
  }
  function buildLocalDuplicateKey() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!card || typeof card.id === 'undefined' || card.id === null) return '';
    return "".concat(detectLampaType(card), ":").concat(String(card.id));
  }
  function getComparableKeys(type) {
    var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var keys = [];
    if (!ids || _typeof(ids) !== 'object') return keys;
    if (ids.tmdb) keys.push("".concat(type, ":tmdb:").concat(String(ids.tmdb)));
    if (ids.trakt) keys.push("".concat(type, ":trakt:").concat(String(ids.trakt)));
    if (ids.imdb) keys.push("".concat(type, ":imdb:").concat(String(ids.imdb).toLowerCase()));
    return keys;
  }
  function extractIdsFromLocalCard() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var sourceIds = card && card.ids && _typeof(card.ids) === 'object' ? card.ids : {};
    var ids = {};
    if (sourceIds.tmdb) ids.tmdb = sourceIds.tmdb;
    if (sourceIds.trakt) ids.trakt = sourceIds.trakt;
    if (sourceIds.imdb) ids.imdb = sourceIds.imdb;
    if (!ids.tmdb) {
      var tmdbId = toNumericId(card.id);
      if (tmdbId) ids.tmdb = tmdbId;
    }
    return ids;
  }
  function addLocalCardToTargetSet(targetSet) {
    var card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!targetSet || !card) return;
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    var duplicateKey = buildLocalDuplicateKey(card);
    getComparableKeys(type, ids).forEach(function (key) {
      return targetSet.add(key);
    });
    if (duplicateKey) targetSet.add("local:".concat(duplicateKey));
  }
  function buildLocalTargetSet() {
    var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var targetSet = new Set();
    (Array.isArray(cards) ? cards : []).forEach(function (card) {
      addLocalCardToTargetSet(targetSet, card);
    });
    return targetSet;
  }
  function isLocalDuplicate(targetSet) {
    var card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!targetSet) return false;
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    var duplicateKey = buildLocalDuplicateKey(card);
    var compareKeys = getComparableKeys(type, ids);
    if (compareKeys.some(function (key) {
      return targetSet.has(key);
    })) {
      return true;
    }
    return Boolean(duplicateKey && targetSet.has("local:".concat(duplicateKey)));
  }
  function removeConflictingMarks(_ref) {
    var favorite = _ref.favorite,
      favoriteType = _ref.favoriteType,
      card = _ref.card;
    if (!favorite || !isMarkFavoriteType(favoriteType)) return;
    if (typeof favorite.check !== 'function' || typeof favorite.remove !== 'function') return;
    var status = favorite.check(card) || {};
    MARK_FAVORITE_TYPES.forEach(function (type) {
      if (type === favoriteType) return;
      if (!status[type]) return;
      try {
        favorite.remove(type, card);
      } catch (error) {}
    });
  }
  function mapTraktToLampaCard() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ids = item && item.ids && _typeof(item.ids) === 'object' ? item.ids : {};
    var tmdbId = toNumericId(ids.tmdb);
    if (!tmdbId) return null;
    var type = detectTraktType(item);
    var title = item.title || item.name || item.original_title || item.original_name || '';
    var originalTitle = item.original_title || item.original_name || title;
    var releaseDate = item.release_date || item.first_air_date || '';
    var voteAverage = Number(item.vote_average) || 0;
    var poster = item.poster || item.img || '';
    var image = item.image || item.background_image || '';
    var normalizedIds = {
      tmdb: tmdbId
    };
    if (ids.trakt) normalizedIds.trakt = ids.trakt;
    if (ids.imdb) normalizedIds.imdb = ids.imdb;
    if (type === 'movie') {
      return {
        id: tmdbId,
        ids: normalizedIds,
        title: title,
        original_title: originalTitle,
        release_date: releaseDate,
        poster: poster,
        img: poster,
        background_image: image,
        image: image,
        vote_average: voteAverage,
        method: 'movie',
        type: 'movie',
        card_type: 'movie',
        source: 'tmdb'
      };
    }
    return {
      id: tmdbId,
      ids: normalizedIds,
      title: title,
      name: title,
      original_title: originalTitle,
      original_name: originalTitle,
      first_air_date: releaseDate,
      release_date: releaseDate,
      poster: poster,
      img: poster,
      background_image: image,
      image: image,
      vote_average: voteAverage,
      number_of_seasons: Number(item.number_of_seasons) || 0,
      method: 'tv',
      type: 'tv',
      card_type: 'tv',
      source: 'tmdb'
    };
  }
  function mapLampaToTraktItem() {
    var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = detectLampaType(card);
    var ids = extractIdsFromLocalCard(card);
    if (!Object.keys(ids).length) return null;
    return {
      type: type,
      method: type === 'movie' ? 'movie' : 'show',
      ids: ids
    };
  }
  function parseWriteStatus(response, type) {
    var section = type === 'movie' ? 'movies' : 'shows';
    var added = Number(response && response.added && response.added[section]) || 0;
    var existing = Number(response && response.existing && response.existing[section]) || 0;
    var notFoundRaw = response && response.not_found ? response.not_found[section] : null;
    var notFound = Array.isArray(notFoundRaw) ? notFoundRaw.length : Number(notFoundRaw || 0);
    if (notFound > 0) return 'failed';
    if (added > 0) return 'added';
    if (existing > 0) return 'duplicate';
    return 'added';
  }
  function loadSourceItems(_x) {
    return _loadSourceItems.apply(this, arguments);
  }
  function _loadSourceItems() {
    _loadSourceItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref2) {
      var api, source, listId, checkCancel, onProgress, items, page, response, chunk, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            api = _ref2.api, source = _ref2.source, listId = _ref2.listId, checkCancel = _ref2.checkCancel, onProgress = _ref2.onProgress;
            items = [];
            page = 1;
          case 1:
            if (!(page <= MAX_PAGES)) {
              _context.n = 9;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context.n = 2;
              break;
            }
            throw cancelError();
          case 2:
            onProgress && onProgress({
              phase: 'loading_source',
              page: page,
              processed: items.length,
              total: 0,
              percent: 0
            });
            if (!(source === 'watchlist')) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return api.watchlist({
              page: page,
              limit: PAGE_LIMIT
            });
          case 3:
            _t = _context.v;
            _context.n = 6;
            break;
          case 4:
            _context.n = 5;
            return api.myListItems({
              listId: listId,
              page: page,
              limit: PAGE_LIMIT
            });
          case 5:
            _t = _context.v;
          case 6:
            response = _t;
            chunk = normalizeResults(response);
            if (chunk.length) {
              _context.n = 7;
              break;
            }
            return _context.a(3, 9);
          case 7:
            items.push.apply(items, _toConsumableArray(chunk));
            if (!(chunk.length < PAGE_LIMIT)) {
              _context.n = 8;
              break;
            }
            return _context.a(3, 9);
          case 8:
            page += 1;
            _context.n = 1;
            break;
          case 9:
            return _context.a(2, items);
        }
      }, _callee);
    }));
    return _loadSourceItems.apply(this, arguments);
  }
  function loadTargetItems(_x2) {
    return _loadTargetItems.apply(this, arguments);
  }
  function _loadTargetItems() {
    _loadTargetItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref3) {
      var api, target, listId, checkCancel, onProgress, items, page, response, chunk, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            api = _ref3.api, target = _ref3.target, listId = _ref3.listId, checkCancel = _ref3.checkCancel, onProgress = _ref3.onProgress;
            items = [];
            page = 1;
          case 1:
            if (!(page <= MAX_PAGES)) {
              _context2.n = 9;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context2.n = 2;
              break;
            }
            throw cancelError();
          case 2:
            onProgress && onProgress({
              phase: 'loading_target',
              page: page,
              processed: items.length,
              total: 0,
              percent: 0
            });
            if (!(target === 'watchlist')) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return api.watchlist({
              page: page,
              limit: PAGE_LIMIT
            });
          case 3:
            _t2 = _context2.v;
            _context2.n = 6;
            break;
          case 4:
            _context2.n = 5;
            return api.myListItems({
              listId: listId,
              page: page,
              limit: PAGE_LIMIT
            });
          case 5:
            _t2 = _context2.v;
          case 6:
            response = _t2;
            chunk = normalizeResults(response);
            if (chunk.length) {
              _context2.n = 7;
              break;
            }
            return _context2.a(3, 9);
          case 7:
            items.push.apply(items, _toConsumableArray(chunk));
            if (!(chunk.length < PAGE_LIMIT)) {
              _context2.n = 8;
              break;
            }
            return _context2.a(3, 9);
          case 8:
            page += 1;
            _context2.n = 1;
            break;
          case 9:
            return _context2.a(2, items);
        }
      }, _callee2);
    }));
    return _loadTargetItems.apply(this, arguments);
  }
  function importBookmarks(_x3) {
    return _importBookmarks.apply(this, arguments);
  }
  function _importBookmarks() {
    _importBookmarks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref4) {
      var api, favorite, _ref4$source, source, _ref4$listId, listId, _ref4$favoriteType, favoriteType, checkCancel, onProgress, resolvedFavoriteType, items, localCards, localTargetSet, summary, index, item, mappedCard;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            api = _ref4.api, favorite = _ref4.favorite, _ref4$source = _ref4.source, source = _ref4$source === void 0 ? 'watchlist' : _ref4$source, _ref4$listId = _ref4.listId, listId = _ref4$listId === void 0 ? null : _ref4$listId, _ref4$favoriteType = _ref4.favoriteType, favoriteType = _ref4$favoriteType === void 0 ? 'book' : _ref4$favoriteType, checkCancel = _ref4.checkCancel, onProgress = _ref4.onProgress;
            if (api) {
              _context3.n = 1;
              break;
            }
            throw new Error('Trakt API is not available');
          case 1:
            if (favorite) {
              _context3.n = 2;
              break;
            }
            throw new Error('Favorite API is not available');
          case 2:
            resolvedFavoriteType = normalizeFavoriteType(favoriteType);
            _context3.n = 3;
            return loadSourceItems({
              api: api,
              source: source,
              listId: listId,
              checkCancel: checkCancel,
              onProgress: onProgress
            });
          case 3:
            items = _context3.v;
            localCards = favorite.get({
              type: resolvedFavoriteType
            }) || [];
            localTargetSet = buildLocalTargetSet(localCards);
            summary = {
              favorite_type: resolvedFavoriteType,
              total: items.length,
              processed: 0,
              added: 0,
              duplicates: 0,
              skipped_unsupported: 0,
              failed: 0
            };
            index = 0;
          case 4:
            if (!(index < items.length)) {
              _context3.n = 7;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context3.n = 5;
              break;
            }
            throw cancelError();
          case 5:
            item = items[index];
            mappedCard = mapTraktToLampaCard(item);
            summary.processed += 1;
            if (!mappedCard) {
              summary.skipped_unsupported += 1;
            } else if (isLocalDuplicate(localTargetSet, mappedCard)) {
              removeConflictingMarks({
                favorite: favorite,
                favoriteType: resolvedFavoriteType,
                card: mappedCard
              });
              summary.duplicates += 1;
            } else {
              try {
                removeConflictingMarks({
                  favorite: favorite,
                  favoriteType: resolvedFavoriteType,
                  card: mappedCard
                });
                favorite.add(resolvedFavoriteType, mappedCard);
                addLocalCardToTargetSet(localTargetSet, mappedCard);
                summary.added += 1;
              } catch (error) {
                summary.failed += 1;
              }
            }
            onProgress && onProgress({
              phase: 'processing_import',
              processed: summary.processed,
              total: summary.total,
              percent: summary.total ? Math.round(summary.processed / summary.total * 100) : 100
            });
            if (!(index % 20 === 0)) {
              _context3.n = 6;
              break;
            }
            _context3.n = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });
          case 6:
            index++;
            _context3.n = 4;
            break;
          case 7:
            return _context3.a(2, summary);
        }
      }, _callee3);
    }));
    return _importBookmarks.apply(this, arguments);
  }
  function exportBookmarks(_x4) {
    return _exportBookmarks.apply(this, arguments);
  }
  function _exportBookmarks() {
    _exportBookmarks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_ref5) {
      var api, favorite, _ref5$target, target, _ref5$listId, listId, _ref5$favoriteType, favoriteType, checkCancel, onProgress, resolvedFavoriteType, bookmarks, targetItems, targetSet, summary, index, card, mapped, compareKeys, isDuplicate, response, status, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            api = _ref5.api, favorite = _ref5.favorite, _ref5$target = _ref5.target, target = _ref5$target === void 0 ? 'watchlist' : _ref5$target, _ref5$listId = _ref5.listId, listId = _ref5$listId === void 0 ? null : _ref5$listId, _ref5$favoriteType = _ref5.favoriteType, favoriteType = _ref5$favoriteType === void 0 ? 'book' : _ref5$favoriteType, checkCancel = _ref5.checkCancel, onProgress = _ref5.onProgress;
            if (api) {
              _context4.n = 1;
              break;
            }
            throw new Error('Trakt API is not available');
          case 1:
            if (favorite) {
              _context4.n = 2;
              break;
            }
            throw new Error('Favorite API is not available');
          case 2:
            resolvedFavoriteType = normalizeFavoriteType(favoriteType);
            bookmarks = favorite.get({
              type: resolvedFavoriteType
            }) || [];
            _context4.n = 3;
            return loadTargetItems({
              api: api,
              target: target,
              listId: listId,
              checkCancel: checkCancel,
              onProgress: onProgress
            });
          case 3:
            targetItems = _context4.v;
            targetSet = new Set();
            targetItems.forEach(function (item) {
              var type = detectTraktType(item);
              var ids = item && item.ids && _typeof(item.ids) === 'object' ? item.ids : {};
              getComparableKeys(type, ids).forEach(function (key) {
                return targetSet.add(key);
              });
            });
            summary = {
              favorite_type: resolvedFavoriteType,
              total: bookmarks.length,
              processed: 0,
              added: 0,
              duplicates: 0,
              skipped_unsupported: 0,
              failed: 0
            };
            index = 0;
          case 4:
            if (!(index < bookmarks.length)) {
              _context4.n = 15;
              break;
            }
            if (!isCanceled(checkCancel)) {
              _context4.n = 5;
              break;
            }
            throw cancelError();
          case 5:
            card = bookmarks[index];
            mapped = mapLampaToTraktItem(card);
            summary.processed += 1;
            if (mapped) {
              _context4.n = 6;
              break;
            }
            summary.skipped_unsupported += 1;
            _context4.n = 13;
            break;
          case 6:
            compareKeys = getComparableKeys(mapped.type, mapped.ids);
            isDuplicate = compareKeys.some(function (key) {
              return targetSet.has(key);
            });
            if (!isDuplicate) {
              _context4.n = 7;
              break;
            }
            summary.duplicates += 1;
            _context4.n = 13;
            break;
          case 7:
            _context4.p = 7;
            if (!(target === 'watchlist')) {
              _context4.n = 9;
              break;
            }
            _context4.n = 8;
            return api.addToWatchlist({
              method: mapped.method,
              ids: mapped.ids
            });
          case 8:
            _t3 = _context4.v;
            _context4.n = 11;
            break;
          case 9:
            _context4.n = 10;
            return api.addToList({
              listId: listId,
              item: {
                method: mapped.method,
                ids: mapped.ids
              }
            });
          case 10:
            _t3 = _context4.v;
          case 11:
            response = _t3;
            status = parseWriteStatus(response, mapped.type);
            if (status === 'added') {
              summary.added += 1;
              compareKeys.forEach(function (key) {
                return targetSet.add(key);
              });
            } else if (status === 'duplicate') {
              summary.duplicates += 1;
              compareKeys.forEach(function (key) {
                return targetSet.add(key);
              });
            } else {
              summary.failed += 1;
            }
            _context4.n = 13;
            break;
          case 12:
            _context4.p = 12;
            _context4.v;
            summary.failed += 1;
          case 13:
            onProgress && onProgress({
              phase: 'processing_export',
              processed: summary.processed,
              total: summary.total,
              percent: summary.total ? Math.round(summary.processed / summary.total * 100) : 100
            });
            if (!(index % 20 === 0)) {
              _context4.n = 14;
              break;
            }
            _context4.n = 14;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });
          case 14:
            index++;
            _context4.n = 4;
            break;
          case 15:
            return _context4.a(2, summary);
        }
      }, _callee4, null, [[7, 12]]);
    }));
    return _exportBookmarks.apply(this, arguments);
  }
  var bookmarksSync = {
    importBookmarks: importBookmarks,
    exportBookmarks: exportBookmarks,
    normalizeFavoriteType: normalizeFavoriteType,
    supportedFavoriteTypes: SUPPORTED_FAVORITE_TYPES.slice()
  };

  var UKRAINIAN_THANKS_URL = 'https://lampame.donatik.me/';
  var DEFAULT_THANKS_URL = 'https://lampame.gumroad.com/coffee';
  function getCurrentLanguage() {
    return String(Lampa.Storage.get('language', 'ru') || 'ru').toLowerCase();
  }
  function getThanksUrlByLanguage() {
    return getCurrentLanguage() === 'uk' ? UKRAINIAN_THANKS_URL : DEFAULT_THANKS_URL;
  }
  function openThanksModal() {
    var thanksUrl = getThanksUrlByLanguage();
    var html = Lampa.Template.get('modal_qr', {
      title: Lampa.Lang.translate('trakttv_settings_thanks'),
      text: Lampa.Lang.translate('trakttv_settings_thanks_description'),
      qr_text: "<a href=\"".concat(thanksUrl, "\">").concat(thanksUrl, "</a>")
    });
    var qrElement = html.find('.account-modal-split__qr-code');
    var enabledController = Lampa.Controller.enabled().name;
    Lampa.Utils.qrcode(thanksUrl, qrElement, function (error) {
      console.error('TraktTV', 'Unable to generate thanks QR code', error);
      qrElement.text(thanksUrl);
    });
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

  // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
  var Api$1 = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var isBookmarksSyncRunning = false;
  var DEFAULT_BOOKMARKS_SYNC_TYPES = ['book', 'like', 'wath', 'look', 'viewed', 'scheduled', 'continued', 'thrown'];
  var API_MISSING_LOG_KEY$1 = 'config:api-missing';
  function logApiMissing() {
    logDebugOnce(API_MISSING_LOG_KEY$1, 'API bridge is unavailable in config');
  }

  // ─────────────────────────────────────────────────────
  //  MAIN — register all components and params
  // ─────────────────────────────────────────────────────

  function main() {
    // 1. Register main component in settings
    Lampa.SettingsApi.addComponent({
      component: 'trakt',
      name: 'Trakt.TV',
      icon: icons.TRAKT_ICON,
      before: 'interface'
    });

    // 2. Register sub-component templates (hidden from main menu)
    //    These are only accessible via navigation from the main 'trakt' component.
    Lampa.Template.add('settings_trakt_sync', '<div></div>');
    Lampa.Template.add('settings_trakt_progress', '<div></div>');
    Lampa.Template.add('settings_trakt_source', '<div></div>');

    // 3. Main component params
    addMainParams();

    // 4. Sub-component params
    addSyncParams();
    addProgressParams();
    addSourceParams();
  }

  // ─────────────────────────────────────────────────────
  //  MAIN COMPONENT — 'trakt'
  // ─────────────────────────────────────────────────────

  function addMainParams() {
    // ── Thanks / donation ──
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakttv_thanks',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttv_settings_thanks'),
        description: Lampa.Lang.translate('trakttv_settings_thanks_description')
      },
      onChange: function onChange() {
        openThanksModal();
      }
    });

    // ── Auth: login / logout combined ──
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_auth',
        type: 'button'
      },
      field: {
        name: ''
      },
      onRender: function onRender(item) {
        var token = Lampa.Storage.get('trakt_token');
        var nameEl = item.find('.settings-param__name');
        if (!token) {
          nameEl.html('<span class="trakt-auth-label">' + Lampa.Lang.translate('trakttvAuthMissed') + '</span>');
          return;
        }

        // Show loading while fetching user info
        nameEl.html('<span class="trakt-auth-label">' + Lampa.Lang.translate('loading') + '…</span>');
        if (!Api$1) {
          logApiMissing();
          nameEl.html('<span class="trakt-auth-label">Trakt.TV</span>');
          return;
        }
        Api$1.get('/users/me').then(function (user) {
          if (user && user.username) {
            var vipBadge = user.vip ? ' <span class="trakt-vip-badge trakt-vip-badge--enabled">' + Lampa.Lang.translate('trakttv_vip_enabled') + '</span>' : '';
            nameEl.html('<span class="trakt-auth-label trakt-auth-label--user">' + Lampa.Lang.translate('trakttv_username') + ': <b>' + user.username + '</b>' + vipBadge + '</span>');
          } else {
            nameEl.html('<span class="trakt-auth-label">Trakt.TV</span>');
          }
        }).catch(function () {
          nameEl.html('<span class="trakt-auth-label">Trakt.TV</span>');
        });
      },
      onChange: function onChange() {
        var token = Lampa.Storage.get('trakt_token');
        if (!token) {
          startDeviceAuth();
        } else {
          if (Api$1) Api$1.auth.logout();
          Lampa.Bell.push({
            text: Lampa.Lang.translate('trakttvLogoutNoty')
          });
          Lampa.Settings.update();
        }
      }
    });

    // ── Navigation: Lists sync ──
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'nav_trakt_sync',
        type: 'button'
      },
      field: {
        name: t$1('trakttv_nav_sync', 'Lists sync')
      },
      onChange: function onChange() {
        Lampa.Settings.create('trakt_sync', {
          onBack: function onBack() {
            Lampa.Settings.create('trakt');
          }
        });
      }
    });

    // ── Navigation: Progress settings ──
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'nav_trakt_progress',
        type: 'button'
      },
      field: {
        name: t$1('trakt_progress_section', 'Progress settings')
      },
      onChange: function onChange() {
        Lampa.Settings.create('trakt_progress', {
          onBack: function onBack() {
            Lampa.Settings.create('trakt');
          }
        });
      }
    });

    // ── Navigation: Source settings ──
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'nav_trakt_source',
        type: 'button'
      },
      field: {
        name: t$1('trakttv_nav_source', 'Source settings')
      },
      onChange: function onChange() {
        Lampa.Settings.create('trakt_source', {
          onBack: function onBack() {
            Lampa.Settings.create('trakt');
          }
        });
      }
    });

    // ── Top Shelf (Apple TV only) ──
    if (Lampa.Platform.is('apple_tv') === true) {
      Lampa.SettingsApi.addParam({
        component: 'trakt',
        param: {
          name: 'trakttv_topshelf',
          type: 'trigger',
          default: false
        },
        field: {
          name: Lampa.Lang.translate('trakttv_topshelf'),
          description: Lampa.Lang.translate('trakttv_topshelf_descr')
        }
      });
    }

    // ── Full clear ──
    Lampa.SettingsApi.addParam({
      component: 'trakt',
      param: {
        name: 'trakt_full_clear',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('trakttvFullClear')
      },
      onChange: function onChange() {
        Object.keys(localStorage).forEach(function (key) {
          if (key.toLowerCase().includes('trakt')) {
            localStorage.removeItem(key);
          }
        });
        if (typeof Lampa.Storage.set === 'function') {
          Lampa.Storage.set('trakt_token', null);
          Lampa.Storage.set('trakt_refresh_token', null);
          Lampa.Storage.set('trakt_token_created_at', null);
          Lampa.Storage.set('trakt_token_expires_in', null);
          Lampa.Storage.set('trakt_token_expires_at', null);
          Lampa.Storage.set('trakt_active_device_auth', false);
          Lampa.Storage.set('trakt_active_device_auth_started_at', null);
        }
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvFullClearNoty')
        });
        Lampa.Settings.update();
      }
    });
  }

  // ─────────────────────────────────────────────────────
  //  SUB-COMPONENT — 'trakt_sync'  (Lists sync)
  // ─────────────────────────────────────────────────────

  function addSyncParams() {
    Lampa.SettingsApi.addParam({
      component: 'trakt_sync',
      param: {
        name: 'trakt_bookmarks_mode',
        type: 'select',
        default: 'watchlist',
        values: {
          watchlist: t$1('trakt_bookmarks_mode_watchlist', 'Watchlist'),
          my_lists: t$1('trakt_bookmarks_mode_my_lists', 'My Lists')
        }
      },
      field: {
        name: t$1('trakt_bookmarks_mode', 'Sync mode')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_sync',
      param: {
        name: 'trakt_bookmarks_favorite_type',
        type: 'select',
        default: 'book',
        values: getBookmarksFavoriteTypeValues()
      },
      field: {
        name: t$1('trakt_bookmarks_local_type', 'Local Lampa list'),
        description: t$1('trakt_bookmarks_local_type_description', 'Choose which local Lampa list to sync')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_sync',
      param: {
        name: 'trakt_bookmarks_import',
        type: 'button'
      },
      field: {
        name: t$1('trakt_bookmarks_import_button', 'Import bookmarks from Trakt')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) item.show();else item.hide();
      },
      onChange: function onChange() {
        startBookmarksImportFlow();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_sync',
      param: {
        name: 'trakt_bookmarks_export',
        type: 'button'
      },
      field: {
        name: t$1('trakt_bookmarks_export_button', 'Export bookmarks to Trakt')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.get('trakt_token')) item.show();else item.hide();
      },
      onChange: function onChange() {
        startBookmarksExportFlow();
      }
    });
  }

  // ─────────────────────────────────────────────────────
  //  SUB-COMPONENT — 'trakt_progress'  (Progress settings)
  // ─────────────────────────────────────────────────────

  function addProgressParams() {
    Lampa.SettingsApi.addParam({
      component: 'trakt_progress',
      param: {
        name: 'trakt_enable_watching',
        type: 'trigger',
        default: false
      },
      field: {
        name: Lampa.Lang.translate('trakttv_enable_watching'),
        description: Lampa.Lang.translate('trakttv_enable_watching_descr')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_progress',
      param: {
        name: 'trakttv_show_tv_progress',
        type: 'trigger',
        default: true
      },
      field: {
        name: Lampa.Lang.translate('trakttv_show_tv_progress')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_progress',
      param: {
        name: 'trakt_min_progress',
        type: 'select',
        default: '90',
        values: {
          '50': '50%',
          '60': '60%',
          '70': '70%',
          '80': '80%',
          '85': '85%',
          '90': '90%',
          '95': '95%',
          '100': '100%'
        }
      },
      field: {
        name: Lampa.Lang.translate('trakttv_min_progress_threshold'),
        description: Lampa.Lang.translate('trakttv_min_progress_threshold_descr')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_progress',
      param: {
        name: 'trakt_scrobble_interval',
        type: 'select',
        default: '90',
        values: {
          '30': '30 ' + t$1('trakttv_seconds', 'sec'),
          '60': '60 ' + t$1('trakttv_seconds', 'sec'),
          '90': '90 ' + t$1('trakttv_seconds', 'sec'),
          '120': '120 ' + t$1('trakttv_seconds', 'sec')
        }
      },
      field: {
        name: t$1('trakttv_scrobble_interval', 'Scrobble interval'),
        description: t$1('trakttv_scrobble_interval_descr', 'How often to sync progress during playback (affects battery/data)')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_progress',
      param: {
        name: 'trakt_scrobble_queue_enabled',
        type: 'trigger',
        default: true
      },
      field: {
        name: t$1('trakttv_scrobble_queue_enabled', 'Offline queue'),
        description: t$1('trakttv_scrobble_queue_descr', 'Save pending scrobbles when offline and send later')
      }
    });
  }

  // ─────────────────────────────────────────────────────
  //  SUB-COMPONENT — 'trakt_source'  (Source filters)
  // ─────────────────────────────────────────────────────

  function addSourceParams() {
    Lampa.SettingsApi.addParam({
      component: 'trakt_source',
      param: {
        name: 'trakt_source_ignore_watched',
        type: 'trigger',
        default: false
      },
      field: {
        name: t$1('trakttv_source_ignore_watched', 'Source: ignore watched'),
        description: t$1('trakttv_source_ignore_watched_descr', 'Applies to all TraktTV source feeds (categories, recommendations, search)')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'trakt_source',
      param: {
        name: 'trakt_source_ignore_watchlisted',
        type: 'trigger',
        default: false
      },
      field: {
        name: t$1('trakttv_source_ignore_watchlisted', 'Source: ignore watchlisted'),
        description: t$1('trakttv_source_ignore_watchlisted_descr', 'Applies to all TraktTV source feeds (categories, recommendations, search)')
      }
    });
  }

  // ─────────────────────────────────────────────────────
  //  DEVICE AUTH — extracted from inline for reuse
  // ─────────────────────────────────────────────────────

  var currentPollTimeoutId = null;
  var visibilityHandler = null;
  var pollInFlight = false;
  var checkNowHandler = null;
  function startDeviceAuth() {
    if (Lampa.Storage.get('trakt_token')) return;
    if (!Api$1) {
      logApiMissing();
      return;
    }
    (Api$1 && Api$1.auth.device.login()).then(function (data) {
      if (!data || !data.user_code || !data.verification_url) {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('trakttvAuthError')
        });
        return;
      }
      var safeVerification = String(data.verification_url || '');
      var safeUserCode = String(data.user_code || '');
      var activateUrl = 'https://trakt.tv/activate/' + safeUserCode;
      var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=' + encodeURIComponent(activateUrl);
      var modal = $(['<div class="about trakt-device-auth">', '  <div class="trakt-device-auth__inner">', '    <div class="trakt-device-auth__qr-col">', '      <div class="trakt-device-auth__qr-container">', '        <a href="' + activateUrl + '" target="_blank" rel="noopener noreferrer" class="trakt-device-auth__qr-link">', '          <img src="' + qrCodeUrl + '" alt="Trakt.TV QR Code" class="trakt-device-auth__qr-image">', '        </a>', '        <div class="trakt-device-auth__qr-caption">' + Lampa.Lang.translate('trakttv_scan_qr_code') + '</div>', '      </div>', '    </div>', '    <div class="trakt-device-auth__info-col">', '      <div class="about__text trakt-device-auth__verification">' + safeVerification + '</div>', '      <div class="about__text trakt-device-auth__code">' + Lampa.Lang.translate('trakttv_code') + ': <strong>' + safeUserCode + '</strong></div>', '      <div class="modal__button selector trakt-check-btn">' + Lampa.Lang.translate('trakttv_check_now') + '</div>', '    </div>', '  </div>', '</div>'].join(''));
      modal.find('.trakt-device-auth__qr-image').on('error', function () {
        modal.find('.trakt-device-auth__qr-container').addClass('trakt-device-auth__qr-container--hidden');
      });
      Lampa.Modal.open({
        title: Lampa.Lang.translate('trakttv_auth'),
        html: modal,
        size: Lampa.Platform.screen('mobile') ? 'medium' : 'small',
        select: modal.find('.trakt-check-btn')[0],
        onSelect: function onSelect() {
          if (checkNowHandler) checkNowHandler();
        },
        scroll: {
          nopadding: true
        },
        onBack: function onBack() {
          if (currentPollTimeoutId) {
            clearTimeout(currentPollTimeoutId);
            currentPollTimeoutId = null;
          }
          Lampa.Storage.set('trakt_active_device_auth', false);
          Lampa.Storage.set('trakt_active_device_auth_started_at', null);
          Lampa.Modal.close();
          Lampa.Controller.toggle('settings_component');
        }
      });
      if (Lampa.Storage.get('trakt_active_device_auth') === true) {
        var startedAt = Number(Lampa.Storage.get('trakt_active_device_auth_started_at') || 0);
        var isStale = !startedAt || Date.now() - startedAt > 20 * 60 * 1000;
        if (isStale) {
          Lampa.Storage.set('trakt_active_device_auth', false);
          Lampa.Storage.set('trakt_active_device_auth_started_at', null);
        } else {
          logDebug('Device auth already active, skip duplicate start');
          return;
        }
      }
      Lampa.Storage.set('trakt_active_device_auth', true);
      Lampa.Storage.set('trakt_active_device_auth_started_at', Date.now());
      pollAuth(data, Lampa.Modal);
    }).catch(function (error) {
      logError('Device auth init failed', error, {
        debugOnly: true
      });
      Lampa.Bell.push({
        text: Lampa.Lang.translate('trakttvAuthError')
      });
    });
  }

  // ─────────────────────────────────────────────────────
  //  POLLING — unchanged from original
  // ─────────────────────────────────────────────────────

  function handlePollingError(modalInstance, messageKey, defaultMessage, code, stop) {
    if (stop === undefined) stop = true;
    logWarn('Device auth polling stopped', {
      code: code
    }, {
      debugOnly: true
    });
    if (stop) {
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
        currentPollTimeoutId = null;
      }
      if (visibilityHandler) {
        document.removeEventListener('visibilitychange', visibilityHandler);
        visibilityHandler = null;
      }
      pollInFlight = false;
      checkNowHandler = null;
      Lampa.Storage.set('trakt_active_device_auth', false);
      Lampa.Storage.set('trakt_active_device_auth_started_at', null);
    }
    if (modalInstance) {
      modalInstance.close();
    }
    Lampa.Bell.push({
      text: Lampa.Lang.translate(messageKey) || defaultMessage
    });
  }
  function handleAuthSuccess(modalInstance, response) {
    logDebug('Device auth succeeded');
    if (currentPollTimeoutId) {
      clearTimeout(currentPollTimeoutId);
      currentPollTimeoutId = null;
    }
    if (visibilityHandler) {
      document.removeEventListener('visibilitychange', visibilityHandler);
      visibilityHandler = null;
    }
    pollInFlight = false;
    checkNowHandler = null;
    if (Api$1 && Api$1.auth && typeof Api$1.auth.storeTokens === 'function') {
      Api$1.auth.storeTokens(response);
    } else {
      Lampa.Storage.set('trakt_token', response.access_token);
      Lampa.Storage.set('trakt_refresh_token', response.refresh_token);
    }
    Lampa.Storage.set('trakt_active_device_auth', false);
    Lampa.Storage.set('trakt_active_device_auth_started_at', null);
    if (modalInstance) {
      modalInstance.close();
    }
    Lampa.Settings.update();
    Lampa.Bell.push({
      text: Lampa.Lang.translate('trakttvAuthOk')
    });
  }
  function extractPollingErrorCode(error) {
    var payload = error && error.response;
    if (!payload) return '';
    if (_typeof(payload) === 'object') {
      return String(payload.error || payload.error_code || '').trim().toLowerCase();
    }
    if (typeof payload === 'string') {
      try {
        var decoded = JSON.parse(payload);
        if (decoded && _typeof(decoded) === 'object') {
          return String(decoded.error || decoded.error_code || '').trim().toLowerCase();
        }
      } catch (e) {
        return '';
      }
    }
    return '';
  }
  function parseRetryAfterMs(headers) {
    if (!headers) headers = {};
    var value = headers && headers['retry-after'];
    if (!value) return null;
    var numeric = Number(value);
    if (Number.isFinite(numeric) && numeric >= 0) {
      return numeric * 1000;
    }
    var dateMs = Date.parse(value);
    if (Number.isFinite(dateMs)) {
      return Math.max(0, dateMs - Date.now());
    }
    return null;
  }
  function pollAuth(data, modalInstance) {
    var originalIntervalSec = Number(data && data.interval);
    var originalIntervalMs = Number.isFinite(originalIntervalSec) && originalIntervalSec > 0 ? originalIntervalSec * 1000 : 5000;
    var currentPollingStepMs = originalIntervalMs;
    var expiresMs = Number.isFinite(Number(data && data.expires_in)) ? Number(data.expires_in) * 1000 : 600 * 1000;
    var pendingCount = 0;
    if (!data || !data.device_code) {
      handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', 'missing-device_code');
      return;
    }
    var startTime = Date.now();
    logDebug('Device auth polling started', {
      stepMs: currentPollingStepMs,
      expiresMs: expiresMs
    });
    if (currentPollTimeoutId) {
      clearTimeout(currentPollTimeoutId);
      currentPollTimeoutId = null;
    }
    var scheduleNext = function scheduleNext(delayMs) {
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
      }
      currentPollTimeoutId = setTimeout(executePoll, delayMs);
    };
    var executePoll = function executePoll() {
      currentPollTimeoutId = null;
      if (Date.now() - startTime >= expiresMs) {
        logWarn('Device auth polling timeout', {
          expiresMs: expiresMs
        }, {
          debugOnly: true
        });
        handlePollingError(modalInstance, 'trakttvExpired', 'Expired, please restart', 'timeout');
        return;
      }
      if (!Api$1) {
        logApiMissing();
        handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', 'api-missing');
        return;
      }
      pollInFlight = true;
      Api$1.auth.device.poll(data.device_code).then(function (response) {
        pollInFlight = false;
        pendingCount = 0;
        handleAuthSuccess(modalInstance, response);
      }).catch(function (error) {
        var status = error && error.status;
        var errorCode = extractPollingErrorCode(error);
        switch (status) {
          case 400:
            if (!errorCode || errorCode === 'authorization_pending') {
              pendingCount++;
              var effectiveDelay = originalIntervalMs;
              if (pendingCount > 3) {
                var multiplier = Math.min(1.5 + (pendingCount - 4) * 0.25, 4);
                effectiveDelay = Math.min(originalIntervalMs * multiplier, 45 * 1000);
                logDebug('Adaptive backoff increased delay', {
                  pendingCount: pendingCount,
                  effectiveDelay: effectiveDelay
                });
              }
              scheduleNext(effectiveDelay);
              pollInFlight = false;
              break;
            }
            logWarn('Device auth poll returned invalid 400 state', {
              status: status,
              errorCode: errorCode
            }, {
              debugOnly: true
            });
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', errorCode || status);
            break;
          case 404:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvInvalidCode', 'Invalid device code', status);
            break;
          case 409:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvAuthOk', 'Already authorized', status);
            break;
          case 410:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvExpired', 'Expired, please restart', status);
            break;
          case 418:
            pendingCount = 0;
            handlePollingError(modalInstance, 'trakttvDenied', 'Access denied', status);
            break;
          case 429:
            pendingCount = 0;
            currentPollingStepMs = Math.min(currentPollingStepMs * 2, 60 * 1000);
            var jitter = Math.random() * 1000;
            var retryAfterMs = parseRetryAfterMs(error && error.headers ? error.headers : {});
            var nextStepMs = Math.max(currentPollingStepMs + jitter, retryAfterMs || 0);
            logWarn('Device auth polling slowed down by server', {
              nextStepMs: nextStepMs
            }, {
              debugOnly: true
            });
            scheduleNext(nextStepMs);
            pollInFlight = false;
            break;
          default:
            pendingCount = 0;
            logWarn('Device auth poll returned unexpected status', {
              status: status
            }, {
              debugOnly: true
            });
            handlePollingError(modalInstance, 'trakttvAuthError', 'Authentication error', status || 'unknown-error');
            break;
        }
      });
    };
    checkNowHandler = function checkNowHandler() {
      if (pollInFlight) return;
      if (currentPollTimeoutId) {
        clearTimeout(currentPollTimeoutId);
        currentPollTimeoutId = null;
      }
      executePoll();
    };
    if (visibilityHandler) {
      document.removeEventListener('visibilitychange', visibilityHandler);
    }
    visibilityHandler = function visibilityHandler() {
      if (document.hidden) {
        if (currentPollTimeoutId) {
          clearTimeout(currentPollTimeoutId);
          currentPollTimeoutId = null;
        }
      } else {
        if (!currentPollTimeoutId && Lampa.Storage.get('trakt_active_device_auth') === true) {
          currentPollingStepMs = originalIntervalMs;
          scheduleNext(originalIntervalMs);
        }
      }
    };
    document.addEventListener('visibilitychange', visibilityHandler);
    scheduleNext(originalIntervalMs);
  }

  // ─────────────────────────────────────────────────────
  //  HELPERS — translation, bookmarks sync, etc.
  // ─────────────────────────────────────────────────────

  function t$1(key, fallback) {
    if (typeof Lampa === 'undefined' || !Lampa || !Lampa.Lang || typeof Lampa.Lang.translate !== 'function') {
      return fallback || key;
    }
    var translated = Lampa.Lang.translate(key);
    if (!translated || translated === key) {
      return fallback || translated || key;
    }
    return translated;
  }
  function ensureBookmarksSyncAvailable() {
    if (!Lampa.Storage.get('trakt_token')) {
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_auth_required', 'Login to Trakt.TV first')
      });
      return false;
    }
    if (!Api$1) {
      logApiMissing();
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_sync_failed', 'Bookmarks sync failed')
      });
      return false;
    }
    if (!Lampa.Favorite) {
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_local_unavailable', 'Local bookmarks are unavailable')
      });
      return false;
    }
    return true;
  }
  function getBookmarksSyncMode() {
    var mode = Lampa.Storage.field('trakt_bookmarks_mode');
    return mode === 'my_lists' ? 'my_lists' : 'watchlist';
  }
  function getSupportedFavoriteTypes() {
    var types = bookmarksSync && Array.isArray(bookmarksSync.supportedFavoriteTypes) ? bookmarksSync.supportedFavoriteTypes : DEFAULT_BOOKMARKS_SYNC_TYPES;
    return types.length ? types : DEFAULT_BOOKMARKS_SYNC_TYPES;
  }
  function getFavoriteTypeTitle(type) {
    if (type === undefined) type = 'book';
    return t$1('title_' + type, type);
  }
  function getBookmarksFavoriteTypeValues() {
    var values = {};
    getSupportedFavoriteTypes().forEach(function (type) {
      values[type] = getFavoriteTypeTitle(type);
    });
    return values;
  }
  function getBookmarksFavoriteType() {
    var type = (Lampa.Storage.field('trakt_bookmarks_favorite_type') || 'book').toString().trim().toLowerCase();
    var supportedTypes = getSupportedFavoriteTypes();
    return supportedTypes.indexOf(type) > -1 ? type : 'book';
  }
  function buildProgressBar(percent) {
    var total = 12;
    var safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
    var filled = Math.round(safePercent / 100 * total);
    return '[' + '#'.repeat(filled) + '-'.repeat(Math.max(0, total - filled)) + ']';
  }
  function formatSyncProgressText(operation, payload, favoriteType) {
    if (favoriteType === undefined) favoriteType = 'book';
    var percent = Math.max(0, Math.min(100, Number(payload.percent) || 0));
    var bar = buildProgressBar(percent);
    var favoriteTypeTitle = getFavoriteTypeTitle(favoriteType);
    var phaseText = '';
    switch (payload.phase) {
      case 'loading_source':
        phaseText = t$1('trakt_bookmarks_progress_loading_source', 'Loading source') + ' (p' + (payload.page || 1) + ')';
        break;
      case 'loading_target':
        phaseText = t$1('trakt_bookmarks_progress_loading_target', 'Loading target') + ' (p' + (payload.page || 1) + ')';
        break;
      case 'processing_import':
        phaseText = t$1('trakt_bookmarks_progress_import', 'Importing');
        break;
      case 'processing_export':
        phaseText = t$1('trakt_bookmarks_progress_export', 'Exporting');
        break;
      default:
        phaseText = t$1('trakt_bookmarks_progress_prepare', 'Preparing');
        break;
    }
    var counter = '';
    if (payload.total) {
      counter = ' ' + (payload.processed || 0) + '/' + payload.total;
    }
    return bar + ' ' + percent + '% ' + phaseText + counter + ' · ' + favoriteTypeTitle;
  }
  function formatSyncSummary(operation, summary, favoriteType) {
    if (favoriteType === undefined) favoriteType = 'book';
    var prefix = operation === 'import' ? t$1('trakt_bookmarks_import_done', 'Import completed') : t$1('trakt_bookmarks_export_done', 'Export completed');
    var favoriteTypeTitle = getFavoriteTypeTitle(summary.favorite_type || favoriteType);
    return prefix + ' (' + favoriteTypeTitle + '): ' + t$1('trakt_bookmarks_added', 'Added') + ' ' + (summary.added || 0) + ', ' + t$1('trakt_bookmarks_duplicates', 'Duplicates') + ' ' + (summary.duplicates || 0) + ', ' + t$1('trakt_bookmarks_skipped_unsupported', 'Skipped') + ' ' + (summary.skipped_unsupported || 0) + ', ' + t$1('trakt_bookmarks_failed', 'Failed') + ' ' + (summary.failed || 0);
  }
  function selectMyList(title, _onSelect) {
    if (!Api$1) return;
    Api$1.myLists({
      page: 1,
      limit: 100
    }).then(function (response) {
      var lists = response && Array.isArray(response.results) ? response.results.filter(function (list) {
        return !!list.id;
      }) : [];
      if (!lists.length) {
        Lampa.Bell.push({
          text: t$1('trakt_bookmarks_no_lists', 'No personal lists found')
        });
        return;
      }
      var items = lists.map(function (list) {
        var listTitle = list.list_title || list.title || list.name || String(list.id);
        var itemCount = Number(list.item_count) || 0;
        return {
          title: listTitle + ' (' + itemCount + ')',
          listId: list.id,
          listTitle: listTitle
        };
      });
      items.push({
        title: t$1('cancel', 'Cancel'),
        cancel: true
      });
      Lampa.Select.show({
        title: title,
        items: items,
        onSelect: function onSelect(item) {
          if (!item || item.cancel) {
            if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
            return;
          }
          if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
          _onSelect && _onSelect(item);
        },
        onBack: function onBack() {
          if (Lampa.Controller) Lampa.Controller.toggle('settings_component');
        }
      });
    }).catch(function () {
      Lampa.Bell.push({
        text: t$1('trakt_bookmarks_lists_load_error', 'Failed to load personal lists')
      });
    });
  }
  function runBookmarksSyncOperation(_x, _x2) {
    return _runBookmarksSyncOperation.apply(this, arguments);
  }
  function _runBookmarksSyncOperation() {
    _runBookmarksSyncOperation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(operation, opts) {
      var source, target, listId, favoriteType, resolvedFavoriteType, favoriteTypeTitle, isCanceled, startActionText, startText, summary, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (opts === undefined) opts = {};
            source = opts.source || 'watchlist';
            target = opts.target || 'watchlist';
            listId = opts.listId || null;
            favoriteType = opts.favoriteType || 'book';
            if (ensureBookmarksSyncAvailable()) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!isBookmarksSyncRunning) {
              _context.n = 2;
              break;
            }
            Lampa.Bell.push({
              text: t$1('trakt_bookmarks_operation_in_progress', 'Bookmarks sync already in progress')
            });
            return _context.a(2);
          case 2:
            resolvedFavoriteType = getSupportedFavoriteTypes().indexOf(favoriteType) > -1 ? favoriteType : getBookmarksFavoriteType();
            favoriteTypeTitle = getFavoriteTypeTitle(resolvedFavoriteType);
            isBookmarksSyncRunning = true;
            isCanceled = false;
            startActionText = operation === 'import' ? t$1('trakt_bookmarks_import_start', 'Starting import') : t$1('trakt_bookmarks_export_start', 'Starting export');
            startText = startActionText + ': ' + favoriteTypeTitle;
            Lampa.Loading.start(function () {
              isCanceled = true;
            }, startText);
            _context.p = 3;
            if (!(operation === 'import')) {
              _context.n = 5;
              break;
            }
            _context.n = 4;
            return bookmarksSync.importBookmarks({
              api: Api$1,
              favorite: Lampa.Favorite,
              source: source,
              listId: listId,
              favoriteType: resolvedFavoriteType,
              checkCancel: function checkCancel() {
                return isCanceled;
              },
              onProgress: function onProgress(payload) {
                Lampa.Loading.setText(formatSyncProgressText(operation, payload, resolvedFavoriteType));
              }
            });
          case 4:
            _t = _context.v;
            _context.n = 7;
            break;
          case 5:
            _context.n = 6;
            return bookmarksSync.exportBookmarks({
              api: Api$1,
              favorite: Lampa.Favorite,
              target: target,
              listId: listId,
              favoriteType: resolvedFavoriteType,
              checkCancel: function checkCancel() {
                return isCanceled;
              },
              onProgress: function onProgress(payload) {
                Lampa.Loading.setText(formatSyncProgressText(operation, payload, resolvedFavoriteType));
              }
            });
          case 6:
            _t = _context.v;
          case 7:
            summary = _t;
            Lampa.Bell.push({
              text: formatSyncSummary(operation, summary, resolvedFavoriteType)
            });
            logDebug('Bookmarks sync summary', {
              operation: operation,
              summary: summary
            });
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t2 = _context.v;
            if (_t2 && _t2.code === 'canceled') {
              Lampa.Bell.push({
                text: t$1('trakt_bookmarks_canceled', 'Operation canceled')
              });
            } else {
              Lampa.Bell.push({
                text: t$1('trakt_bookmarks_sync_failed', 'Bookmarks sync failed')
              });
              logError('Bookmarks sync failed', {
                operation: operation,
                error: _t2
              }, {
                debugOnly: true
              });
            }
          case 9:
            _context.p = 9;
            Lampa.Loading.stop();
            isBookmarksSyncRunning = false;
            return _context.f(9);
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[3, 8, 9, 10]]);
    }));
    return _runBookmarksSyncOperation.apply(this, arguments);
  }
  function startBookmarksImportFlow() {
    if (!ensureBookmarksSyncAvailable()) return;
    var favoriteType = getBookmarksFavoriteType();
    var favoriteTypeTitle = getFavoriteTypeTitle(favoriteType);
    if (getBookmarksSyncMode() === 'my_lists') {
      selectMyList(t$1('trakt_bookmarks_import_select_list', 'Select source list') + ': ' + favoriteTypeTitle, function (item) {
        runBookmarksSyncOperation('import', {
          source: 'my_list',
          listId: item.listId,
          favoriteType: favoriteType
        });
      });
      return;
    }
    runBookmarksSyncOperation('import', {
      source: 'watchlist',
      favoriteType: favoriteType
    });
  }
  function startBookmarksExportFlow() {
    if (!ensureBookmarksSyncAvailable()) return;
    var favoriteType = getBookmarksFavoriteType();
    var favoriteTypeTitle = getFavoriteTypeTitle(favoriteType);
    if (getBookmarksSyncMode() === 'my_lists') {
      selectMyList(t$1('trakt_bookmarks_export_select_list', 'Select target list') + ': ' + favoriteTypeTitle, function (item) {
        runBookmarksSyncOperation('export', {
          target: 'my_list',
          listId: item.listId,
          favoriteType: favoriteType
        });
      });
      return;
    }
    runBookmarksSyncOperation('export', {
      target: 'watchlist',
      favoriteType: favoriteType
    });
  }
  var config = {
    main: main
  };

  var es_object_fromEntries = {};

  var hasRequiredEs_object_fromEntries;

  function requireEs_object_fromEntries () {
  	if (hasRequiredEs_object_fromEntries) return es_object_fromEntries;
  	hasRequiredEs_object_fromEntries = 1;

  	var $ = require$$0$7;
  	var iterate = require$$1$1;
  	var createProperty = requireCreateProperty();

  	// `Object.fromEntries` method
  	// https://tc39.es/ecma262/#sec-object.fromentries
  	$({
  	  target: 'Object',
  	  stat: true
  	}, {
  	  fromEntries: function fromEntries(iterable) {
  	    var obj = {};
  	    iterate(iterable, function (k, v) {
  	      createProperty(obj, k, v);
  	    }, {
  	      AS_ENTRIES: true
  	    });
  	    return obj;
  	  }
  	});
  	return es_object_fromEntries;
  }

  requireEs_object_fromEntries();

  var STORAGE_KEY$1 = 'trakt_scrobble_queue';
  var MAX_QUEUE_SIZE = 50;
  var MAX_RETRIES = 3;
  var PROCESS_DELAY_MS = 500;
  var INIT_DELAY_MS = 2000;
  var BETWEEN_ITEMS_DELAY_MS = 200;
  var queue = [];
  var isProcessing = false;
  var processTimerId = null;
  function buildScrobbleBody$1(media, progress) {
    var isShow = media.method === 'tv' || media.method === 'show' || media.card_type === 'tv' || media.card_type === 'show' || media.original_name ? true : false;
    var safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));
    if (isShow) {
      return {
        show: {
          ids: {
            tmdb: media.id
          }
        },
        episode: {
          season: media.season_number || 1,
          number: media.episode_number || 1
        },
        progress: safeProgress
      };
    }
    return {
      movie: {
        ids: {
          tmdb: media.id
        }
      },
      progress: safeProgress
    };
  }
  function replayAction(_x) {
    return _replayAction.apply(this, arguments);
  }
  function _replayAction() {
    _replayAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(item) {
      var body, status, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            body = buildScrobbleBody$1(item.media, item.progress);
            _context.p = 1;
            _context.n = 2;
            return api$1.scrobble(item.type, body);
          case 2:
            _context.n = 5;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            status = _t && _t.status; // 409 = already processed, 422 = invalid state — treat as success
            if (!(status === 409 || status === 422)) {
              _context.n = 4;
              break;
            }
            return _context.a(2);
          case 4:
            throw _t;
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _replayAction.apply(this, arguments);
  }
  function persistQueue() {
    try {
      if (typeof Lampa !== 'undefined' && Lampa && Lampa.Storage && typeof Lampa.Storage.set === 'function') {
        Lampa.Storage.set(STORAGE_KEY$1, queue);
      }
    } catch (error) {
      if (debugEnabled()) {
        logWarn('scrobble_queue: failed to persist queue', {
          error: error && error.message
        });
      }
    }
  }
  function loadQueue() {
    try {
      if (typeof Lampa !== 'undefined' && Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var stored = Lampa.Storage.get(STORAGE_KEY$1);
        if (Array.isArray(stored)) {
          return stored;
        }
      }
    } catch (error) {
      if (debugEnabled()) {
        logWarn('scrobble_queue: failed to load queue', {
          error: error && error.message
        });
      }
    }
    return [];
  }
  function scheduleProcess(delayMs) {
    if (processTimerId !== null) {
      clearTimeout(processTimerId);
    }
    processTimerId = setTimeout(function () {
      processTimerId = null;
      processQueueImpl();
    }, delayMs);
  }
  function processQueueImpl() {
    return _processQueueImpl.apply(this, arguments);
  }
  function _processQueueImpl() {
    _processQueueImpl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var initialLength, succeeded, discarded, item, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!isProcessing) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (!(queue.length === 0)) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            isProcessing = true;
            initialLength = queue.length;
            succeeded = 0;
            discarded = 0;
          case 3:
            if (!(queue.length > 0)) {
              _context2.n = 9;
              break;
            }
            item = queue[0];
            _context2.p = 4;
            _context2.n = 5;
            return replayAction(item);
          case 5:
            queue.shift();
            succeeded++;
            persistQueue();
            if (debugEnabled()) {
              logDebug('scrobble_queue: item succeeded', {
                id: item.id,
                type: item.type
              });
            }
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            item.retries = (item.retries || 0) + 1;
            queue.shift();
            if (item.retries >= MAX_RETRIES) {
              discarded++;
              persistQueue();
              if (debugEnabled()) {
                logWarn('scrobble_queue: item discarded after max retries', {
                  id: item.id,
                  type: item.type,
                  retries: item.retries,
                  error: _t2 && _t2.message
                });
              }
            } else {
              queue.push(item);
              persistQueue();
              if (debugEnabled()) {
                logWarn('scrobble_queue: item failed, re-queued for retry', {
                  id: item.id,
                  type: item.type,
                  retries: item.retries,
                  error: _t2 && _t2.message
                });
              }
            }
          case 7:
            if (!(queue.length > 0)) {
              _context2.n = 8;
              break;
            }
            _context2.n = 8;
            return new Promise(function (resolve) {
              setTimeout(resolve, BETWEEN_ITEMS_DELAY_MS);
            });
          case 8:
            _context2.n = 3;
            break;
          case 9:
            isProcessing = false;
            if (debugEnabled()) {
              logDebug('scrobble_queue: processing complete', {
                initialLength: initialLength,
                succeeded: succeeded,
                discarded: discarded,
                remaining: queue.length
              });
            }
          case 10:
            return _context2.a(2);
        }
      }, _callee2, null, [[4, 6]]);
    }));
    return _processQueueImpl.apply(this, arguments);
  }
  var scrobbleQueue = {
    init: function init() {
      queue = loadQueue();
      if (queue.length > 0) {
        if (debugEnabled()) {
          logDebug('scrobble_queue: loaded pending items', {
            count: queue.length
          });
        }
        scheduleProcess(INIT_DELAY_MS);
      }
    },
    enqueue: function enqueue(action) {
      var item = {
        id: 'sc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
        type: action.type,
        media: action.media,
        progress: action.progress,
        created_at: action.created_at || Date.now(),
        retries: 0
      };
      queue.push(item);
      if (queue.length > MAX_QUEUE_SIZE) {
        var removed = queue.shift();
        if (debugEnabled()) {
          logDebug('scrobble_queue: queue full, dropped oldest', {
            droppedId: removed.id
          });
        }
      }
      persistQueue();
      if (!isProcessing) {
        scheduleProcess(PROCESS_DELAY_MS);
      }
    },
    processQueue: processQueueImpl,
    getQueueLength: function getQueueLength() {
      return queue.length;
    },
    destroy: function destroy() {
      if (processTimerId !== null) {
        clearTimeout(processTimerId);
        processTimerId = null;
      }
      isProcessing = false;
    }
  };

  // ── Throttle State ─────────────────────────────────────────────────────────

  var throttleState = {
    lastSendTime: 0,
    lastSentPercent: 0,
    minInterval: 90000,
    // 90 seconds min between updates
    minPercentChange: 5,
    // 5% absolute change threshold
    currentMedia: null,
    timerId: null
  };

  // ── Helpers ────────────────────────────────────────────────────────────────

  /**
   * Determine content type from media object.
   * Inline implementation — no import from watching.js to avoid circular deps.
   * @param {Object} media
   * @returns {string} 'movie' or 'show'
   */
  function getContentType$2(media) {
    if (!media) return 'movie';
    if (media.method === 'tv' || media.method === 'show') return 'show';
    if (media.card_type === 'tv' || media.card_type === 'show') return 'show';
    if (media.media_type === 'tv' || media.media_type === 'show') return 'show';
    if (media.original_name || media.name) return 'show';
    if (media.episode_run_time || media.first_air_date || media.created_by || media.number_of_seasons || media.number_of_episodes) {
      return 'show';
    }
    return 'movie';
  }

  /**
   * Build the scrobble request body for /scrobble/* endpoints.
   * @param {Object} media
   * @param {number} progress 0-100
   * @returns {Object|null} body or null if media.id missing
   */
  function buildScrobbleBody(media, progress) {
    if (!media || !media.id) {
      if (debugEnabled()) {
        logWarn('scrobble: media.id missing, skipping', {
          media: media
        });
      }
      return null;
    }
    var type = getContentType$2(media);
    var safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));
    if (type === 'movie') {
      return {
        movie: {
          ids: {
            tmdb: media.id
          }
        },
        progress: safeProgress
      };
    }
    return {
      show: {
        ids: {
          tmdb: media.id
        }
      },
      episode: {
        season: media.season_number || 1,
        number: media.episode_number || 1
      },
      progress: safeProgress
    };
  }

  /**
   * Read minInterval from Lampa.Storage with fallback.
   * @returns {number} interval in ms
   */
  function resolveMinInterval() {
    var seconds = 90;
    try {
      if (typeof Lampa !== 'undefined' && Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var stored = Lampa.Storage.field('trakt_scrobble_interval');
        if (stored !== undefined && stored !== null) {
          var parsed = Number(stored);
          if (Number.isFinite(parsed) && parsed > 0) {
            seconds = parsed;
          }
        }
      }
    } catch (e) {
      // silent fallback
    }
    return seconds * 1000;
  }

  // ── Throttle Logic ─────────────────────────────────────────────────────────

  function shouldSendProgress(percent) {
    var now = Date.now();
    var elapsed = now - throttleState.lastSendTime;
    var currentInterval = resolveMinInterval();

    // No progress sent before
    if (throttleState.lastSendTime === 0) return true;

    // Heartbeat: send even without percent change if enough time passed
    if (elapsed > currentInterval * 2) return true;

    // Normal threshold check
    if (elapsed > currentInterval && Math.abs(percent - throttleState.lastSentPercent) >= throttleState.minPercentChange) {
      return true;
    }
    return false;
  }
  function updateThrottleState(percent) {
    throttleState.lastSendTime = Date.now();
    throttleState.lastSentPercent = percent;
  }

  // ── Scrobble Actions ───────────────────────────────────────────────────────

  function performScrobble(action, media, progress) {
    var body = buildScrobbleBody(media, progress);
    if (!body) return Promise.resolve();
    return api$1.scrobble(action, body).then(function (result) {
      if (debugEnabled()) {
        logDebug("scrobble/".concat(action, " success"), {
          type: getContentType$2(media),
          id: media.id,
          progress: body.progress
        });
      }
      return result;
    }).catch(function (error) {
      var status = error && error.status;

      // 409 = already processed, 422 = invalid state (e.g. pause after completion)
      if (status === 409 || status === 422) {
        if (debugEnabled()) {
          logDebug("scrobble/".concat(action, " ").concat(status, " ignored (terminal)"), {
            id: media.id,
            progress: body.progress
          });
        }
        return;
      }
      logWarn("scrobble/".concat(action, " failed, enqueuing"), {
        error: error && error.message,
        status: status,
        media: media.id,
        progress: body.progress
      }, {
        debugOnly: true
      });
      scrobbleQueue.enqueue({
        type: action,
        media: media ? _objectSpread2({}, media) : null,
        progress: body.progress,
        created_at: Date.now()
      });
    });
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  var scrobbler = {
    init: function init(media) {
      throttleState.currentMedia = media || null;
      throttleState.lastSendTime = 0;
      throttleState.lastSentPercent = 0;
      throttleState.timerId = null;
      if (debugEnabled()) {
        logDebug('scrobbler initialized', {
          hasMedia: !!media
        });
      }
    },
    scrobbleStart: function scrobbleStart(media, progress) {
      return performScrobble('start', media, progress).then(function (result) {
        if (result) {
          updateThrottleState(Number(progress) || 0);
        }
        return result;
      });
    },
    scrobblePause: function scrobblePause(media, progress) {
      return performScrobble('pause', media, progress);
    },
    scrobbleStop: function scrobbleStop(media, progress) {
      return performScrobble('stop', media, progress);
    },
    onProgressUpdate: function onProgressUpdate(hash, percent, road, media) {
      // Ignore early or empty progress
      var safePercent = Number(percent) || 0;
      if (safePercent < 1 || !media) {
        if (debugEnabled()) {
          logDebug('scrobbler onProgressUpdate: skipped (percent < 1 or no media)', {
            percent: safePercent,
            hasMedia: !!media
          });
        }
        return;
      }

      // Store current media reference
      if (media) {
        throttleState.currentMedia = media;
      }

      // Check throttle before sending
      if (shouldSendProgress(safePercent)) {
        if (debugEnabled()) {
          logDebug('scrobbler onProgressUpdate: sending progress', {
            percent: safePercent,
            mediaId: media && media.id
          });
        }
        updateThrottleState(safePercent);

        // Trakt uses /scrobble/start for progress updates with progress > 0
        performScrobble('start', media, safePercent);
      }
    },
    getCurrentProgress: function getCurrentProgress() {
      return {
        percent: throttleState.lastSentPercent,
        time: Date.now()
      };
    },
    setCurrentMedia: function setCurrentMedia(media) {
      throttleState.currentMedia = media;
    },
    destroy: function destroy() {
      if (throttleState.timerId !== null) {
        clearTimeout(throttleState.timerId);
        throttleState.timerId = null;
      }
      throttleState.lastSendTime = 0;
      throttleState.lastSentPercent = 0;
      throttleState.currentMedia = null;
      if (debugEnabled()) {
        logDebug('scrobbler destroyed');
      }
    }
  };

  /**
   * Simple in-memory idempotency cache and per-key lock to avoid duplicate Trakt finish calls on Smart TV.
   * Persisted in Lampa.Storage session scope under 'trakt_completion_cache'.
   * Record shape: { ts:number, token:string, status:'intent'|'finishing'|'finished' }
   */

  var completionCache = new Map(); // key -> { ts, token, status }
  var lockQueues = new Map(); // key -> array of resolvers for queued locks
  var requestInProgress = {}; // Об'єкт для відстеження запитів, що виконуються
  var hashMetaCache = new Map(); // hash -> { ts, card, season, episode, ids }
  var cloudInjectInProgress = false; // Flag: suppress scrobble during cloud Timeline inject
  var HASH_META_TTL_SEC = 60 * 60 * 24 * 7; // 7 days

  function nowSec() {
    return Math.floor(Date.now() / 1000);
  }
  function sleep(ms) {
    return new Promise(function (r) {
      return setTimeout(r, ms);
    });
  }
  function getTTL() {
    // 6h default to prevent duplicate finishes from periodic timeline saves in long sessions.
    var def = 60 * 60 * 6;
    var v = Lampa.Storage.field('trakt_completion_ttl');
    var num = parseInt(v !== undefined ? v : def);
    return isNaN(num) ? def : num;
  }
  function getDebounceMs() {
    var def = 400;
    var v = Lampa.Storage.field('trakt_finish_debounce');
    var num = parseInt(v !== undefined ? v : def);
    return isNaN(num) ? def : num;
  }
  function logEnabled() {
    return Lampa.Storage.field('trakt_enable_logging');
  }
  function shouldEmitDebugLog() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var first = typeof args[0] === 'string' ? args[0] : '';
    var second = typeof args[1] === 'string' ? args[1] : '';
    if (first === 'watching.init called while already initialized, skipping') return true;
    if (first === 'Request for key is already in progress, skipping.') return true;
    if (first === 'Episode index not resolved') return true;
    if (first === 'finish error') return true;
    if (first === 'addShowToWatching called while already adding, skipping') return true;
    if (first === 'finish') {
      if (second.indexOf('retry attempt') === 0) return true;
      if (second === 'abort on client error') return true;
      if (second === '409 conflict -> treat as finished, no retries') return true;
    }
    return false;
  }
  function slog() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!logEnabled() || !shouldEmitDebugLog(args)) return;
    if (!args.length) return;
    var message = args[0];
    var rest = args.slice(1);
    if (!rest.length) logDebug(message);else if (rest.length === 1) logDebug(message, rest[0]);else logDebug(message, rest);
  }
  function normalizeCardForCache(card) {
    if (!card) return null;
    return {
      id: card.id,
      ids: card.ids,
      original_name: card.original_name,
      name: card.name,
      original_title: card.original_title,
      title: card.title,
      first_air_date: card.first_air_date,
      created_by: card.created_by,
      number_of_seasons: card.number_of_seasons,
      number_of_episodes: card.number_of_episodes,
      episode_run_time: card.episode_run_time,
      card_type: card.card_type,
      media_type: card.media_type,
      method: card.method
    };
  }
  function loadHashMetaCache() {
    var raw = Lampa.Storage.get('trakt_hash_meta_cache');
    var now = nowSec();
    hashMetaCache.clear();
    if (raw && Array.isArray(raw.entries)) {
      raw.entries.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        if (v && now - v.ts <= HASH_META_TTL_SEC) {
          hashMetaCache.set(k, v);
        }
      });
    }
    slog('hashMetaCache restored', Object.fromEntries(hashMetaCache));
  }
  function persistHashMetaCache() {
    var now = nowSec();
    var _iterator = _createForOfIteratorHelper(hashMetaCache.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];
        if (!v || now - v.ts > HASH_META_TTL_SEC) hashMetaCache.delete(k);
      }
      // keep cache small
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (hashMetaCache.size > 300) {
      var ordered = Array.from(hashMetaCache.entries()).sort(function (a, b) {
        return (a[1].ts || 0) - (b[1].ts || 0);
      });
      ordered.slice(0, hashMetaCache.size - 300).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          k = _ref4[0];
        return hashMetaCache.delete(k);
      });
    }
    var payload = {
      ts: now,
      entries: Array.from(hashMetaCache.entries())
    };
    Lampa.Storage.set('trakt_hash_meta_cache', payload);
  }
  function setHashMeta(hash, meta) {
    if (!hash || !meta) return;
    var next = {
      ts: nowSec(),
      card: normalizeCardForCache(meta.card),
      season: meta.season,
      episode: meta.episode,
      ids: meta.ids || meta.card && meta.card.ids
    };
    hashMetaCache.set(hash, next);
    persistHashMetaCache();
  }
  function getHashMeta(hash) {
    if (!hash) return null;
    var rec = hashMetaCache.get(hash);
    if (!rec) return null;
    if (nowSec() - rec.ts > HASH_META_TTL_SEC) {
      hashMetaCache.delete(hash);
      return null;
    }
    return rec;
  }
  function extractSeasonEpisode(obj) {
    if (!obj) return {};
    var season = obj.season_number || obj.season || obj.seasonNumber || obj.s;
    var episode = obj.episode_number || obj.episode || obj.episodeNumber || obj.e;
    return {
      season: season,
      episode: episode
    };
  }

  /**
   * Brute-force season/episode from timeline hash.
   * Hash formula: Lampa.Utils.hash([season, season > 10 ? ':' : '', episode, originalName].join(''))
   */
  function resolveSeasonEpisode(hash, originalName) {
    if (!hash || !originalName) return {};
    for (var s = 1; s <= 30; s++) {
      var sep = s > 10 ? ':' : '';
      for (var e = 1; e <= 60; e++) {
        var computed = Lampa.Utils.hash([s, sep, e, originalName].join(''));
        if (computed == hash) {
          return {
            season: s,
            episode: e
          };
        }
      }
    }
    return {};
  }
  function collectTitleCandidates() {
    var seen = new Set();
    var candidates = [];
    for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }
    sources.forEach(function (source) {
      if (!source || _typeof(source) !== 'object') return;
      [source.original_name, source.original_title, source.name, source.title].forEach(function (value) {
        if (typeof value !== 'string') return;
        var title = value.trim();
        if (!title || seen.has(title)) return;
        seen.add(title);
        candidates.push(title);
      });
    });
    return candidates;
  }

  /**
   * Build idempotency key for media card or episode
   * movie: 'movie:trakt:ID' | 'movie:tmdb:ID' | 'movie:hash:...'
   * episode: 'episode:trakt:showID:Sx:Ey' or fallback by hash
   */
  function getCompletionKey(media) {
    try {
      var type = getContentType$1(media) === 'show' ? 'episode' : 'movie';
      var ids = media.ids || {};
      if (type === 'movie') {
        if (ids.trakt) return "movie:trakt:".concat(ids.trakt);
        if (media.id) return "movie:tmdb:".concat(media.id);
        if (media.hash) return "movie:hash:".concat(media.hash);
      } else {
        // Prefer show trakt id + season/episode if present on card
        var showTrakt = ids && ids.trakt || media.show && media.show.ids && media.show.ids.trakt;
        var s = media.season_number || media.season || media.seasonNumber;
        var e = media.episode_number || media.episode || media.episodeNumber;
        if (showTrakt && s && e) return "episode:trakt:".concat(showTrakt, ":S").concat(s, ":E").concat(e);
        // fallback tmdb
        if (media.id && s && e) return "episode:tmdb:".concat(media.id, ":S").concat(s, ":E").concat(e);
        if (media.hash) return "episode:hash:".concat(media.hash);
      }
    } catch (e) {}
    // ultimate fallback: hashed title
    var title = media.original_title || media.original_name || media.name || media.title || 'unknown';
    return "unknown:".concat(Lampa.Utils.hash(title));
  }

  /**
   * Persist/restore cache in session storage with TTL cleanup
   */
  function loadSessionCache() {
    var raw = Lampa.Storage.get('trakt_completion_cache');
    var ttl = getTTL();
    var now = nowSec();
    completionCache.clear();
    if (raw && Array.isArray(raw.entries)) {
      raw.entries.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          k = _ref6[0],
          v = _ref6[1];
        if (v && now - v.ts <= ttl) {
          completionCache.set(k, v);
        }
      });
    }
    slog('completionCache restored', Object.fromEntries(completionCache));
  }
  function persistSessionCache() {
    var ttl = getTTL();
    var now = nowSec();
    // cleanup expired
    var _iterator2 = _createForOfIteratorHelper(completionCache.entries()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          k = _step2$value[0],
          v = _step2$value[1];
        if (!v || now - v.ts > ttl) completionCache.delete(k);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var payload = {
      ts: now,
      entries: Array.from(completionCache.entries())
    };
    Lampa.Storage.set('trakt_completion_cache', payload);
  }

  /**
   * Check if finish is allowed once within TTL for a key
   * Returns { allow:boolean, reason:string }
   */
  function canFinishOnce(key) {
    var ttl = getTTL();
    var rec = completionCache.get(key);
    var now = nowSec();
    if (!rec) return {
      allow: true,
      reason: 'no_record'
    };
    if (now - rec.ts > ttl) {
      completionCache.delete(key);
      return {
        allow: true,
        reason: 'expired'
      };
    }
    if (rec.status === 'finished') return {
      allow: false,
      reason: 'already_finished'
    };
    if (rec.status === 'finishing') return {
      allow: false,
      reason: 'already_finishing'
    };
    return {
      allow: true,
      reason: 'has_intent'
    };
  }

  /**
   * Update record and persist
   */
  function markFinished(key, token, status) {
    var rec = {
      ts: nowSec(),
      token: token,
      status: status
    };
    completionCache.set(key, rec);
    persistSessionCache();
    slog('markFinished', key, rec);
  }

  /**
   * Simple per-key mutex using a queue of Promises
   */
  function withPerKeyLock(_x, _x2) {
    return _withPerKeyLock.apply(this, arguments);
  }
  /**
   * Idempotent finisher with limited retries
   * doFinish must perform actual network call; it should throw error with {status} when HTTP error known
   */
  function _withPerKeyLock() {
    _withPerKeyLock = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key, fn) {
      var queue, release, p, prev;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            queue = lockQueues.get(key);
            if (!queue) {
              queue = [];
              lockQueues.set(key, queue);
            }
            p = new Promise(function (res) {
              return release = res;
            });
            prev = queue.length ? queue[queue.length - 1] : Promise.resolve();
            queue.push(p);
            _context.p = 1;
            _context.n = 2;
            return prev;
          case 2:
            _context.n = 3;
            return fn();
          case 3:
            return _context.a(2, _context.v);
          case 4:
            _context.p = 4;
            release(); // resolve current
            queue.shift(); // remove current
            if (!queue.length) lockQueues.delete(key);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1,, 4, 5]]);
    }));
    return _withPerKeyLock.apply(this, arguments);
  }
  function finishWithIdempotency(_x3) {
    return _finishWithIdempotency.apply(this, arguments);
  }
  /**
   * Debounced finish intent setter
   */
  function _finishWithIdempotency() {
    _finishWithIdempotency = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref7) {
      var key, token, doFinish, _ref7$logPrefix, logPrefix;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            key = _ref7.key, token = _ref7.token, doFinish = _ref7.doFinish, _ref7$logPrefix = _ref7.logPrefix, logPrefix = _ref7$logPrefix === void 0 ? 'finish' : _ref7$logPrefix;
            return _context3.a(2, withPerKeyLock(key, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var check, delays, lastErr, attempt, res, status, _t;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    check = canFinishOnce(key);
                    slog(logPrefix, 'canFinishOnce', key, check);
                    if (check.allow) {
                      _context2.n = 1;
                      break;
                    }
                    return _context2.a(2, {
                      skipped: true,
                      reason: check.reason
                    });
                  case 1:
                    // set finishing
                    markFinished(key, token, 'finishing');
                    delays = [500, 1500, 4500];
                    lastErr = null;
                    attempt = 0;
                  case 2:
                    if (!(attempt < delays.length)) {
                      _context2.n = 10;
                      break;
                    }
                    _context2.p = 3;
                    _context2.n = 4;
                    return doFinish();
                  case 4:
                    res = _context2.v;
                    // On success 2xx
                    markFinished(key, token, 'finished');
                    return _context2.a(2, {
                      ok: true,
                      status: res && res.status,
                      data: res
                    });
                  case 5:
                    _context2.p = 5;
                    _t = _context2.v;
                    status = _t && _t.status; // Treat 409 as finished without retries
                    if (!(status === 409)) {
                      _context2.n = 6;
                      break;
                    }
                    slog(logPrefix, '409 conflict -> treat as finished, no retries');
                    markFinished(key, token, 'finished');
                    return _context2.a(2, {
                      ok: true,
                      status: 409,
                      conflict: true
                    });
                  case 6:
                    if (!(!status || status >= 500 && status < 600)) {
                      _context2.n = 8;
                      break;
                    }
                    lastErr = _t;
                    slog(logPrefix, "retry attempt ".concat(attempt + 1), {
                      status: status,
                      err: _t
                    });
                    if (!(attempt < delays.length - 1)) {
                      _context2.n = 7;
                      break;
                    }
                    _context2.n = 7;
                    return sleep(delays[attempt]);
                  case 7:
                    return _context2.a(3, 9);
                  case 8:
                    // Other 4xx => no retries
                    slog(logPrefix, 'abort on client error', {
                      status: status,
                      err: _t
                    });
                    // roll back to intent so later we might attempt again if user retriggers after TTL
                    markFinished(key, token, 'intent');
                    return _context2.a(2, {
                      ok: false,
                      status: status,
                      clientError: true
                    });
                  case 9:
                    attempt++;
                    _context2.n = 2;
                    break;
                  case 10:
                    // all retries exhausted -> rollback to intent
                    markFinished(key, token, 'intent');
                    return _context2.a(2, {
                      ok: false,
                      error: lastErr
                    });
                }
              }, _callee2, null, [[3, 5]]);
            }))));
        }
      }, _callee3);
    }));
    return _finishWithIdempotency.apply(this, arguments);
  }
  var intentTimers = new Map(); // key -> timeout id
  function markFinishIntent(key) {
    var token = Lampa.Storage.get('trakt_token');
    var ttl = getTTL();
    var now = nowSec();
    var rec = completionCache.get(key);
    var isFresh = rec && now - rec.ts <= ttl;

    // Do not downgrade terminal states to intent inside TTL window.
    if (isFresh && (rec.status === 'finished' || rec.status === 'finishing')) {
      slog('markFinishIntent skipped (terminal state preserved)', key, rec);
      return {
        skipped: true,
        reason: rec.status
      };
    }
    var next = {
      ts: now,
      token: token,
      status: 'intent'
    };
    completionCache.set(key, next);
    persistSessionCache();

    // debounce persist bursts
    var wait = getDebounceMs();
    if (intentTimers.has(key)) clearTimeout(intentTimers.get(key));
    var t = setTimeout(function () {
      var cur = completionCache.get(key);
      // keep latest ts fresh only for intent state
      if (cur && cur.status === 'intent') {
        completionCache.set(key, _objectSpread2(_objectSpread2({}, cur), {}, {
          ts: nowSec()
        }));
        persistSessionCache();
        slog('markFinishIntent debounced persisted', key);
      }
    }, wait);
    intentTimers.set(key, t);
    slog('markFinishIntent', key, next);
    return {
      ok: true
    };
  }

  /**
   * Compute finish for given media via API:
   * - movie -> /sync/history
   * - show episode -> /sync/history with show/episodes derived by hash/season/episode
   * This function is the only entry point that sends final Trakt request.
   */
  function finish(_x4) {
    return _finish.apply(this, arguments);
  }
  /**
   * Визначає тип вмісту (фільм чи серіал) на основі даних картки
   * @param {Object} card - Картка вмісту
   * @returns {string} 'movie' або 'show'
   */
  function _finish() {
    _finish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(media) {
      var token, key, doFinish, result;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            token = Lampa.Storage.get('trakt_token');
            if (token) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, {
              skipped: true,
              reason: 'no_token'
            });
          case 1:
            key = getCompletionKey(media); // START -- RACE CONDITION FIX
            if (!requestInProgress[key]) {
              _context5.n = 2;
              break;
            }
            slog('Request for key is already in progress, skipping.', key);
            return _context5.a(2, {
              skipped: true,
              reason: 'in_progress'
            });
          case 2:
            requestInProgress[key] = true;
            // END -- RACE CONDITION FIX
            _context5.p = 3;
            doFinish = /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                var type, tmdbId, search, e, traktId, res, _tmdbId, _search, _e, traktShowId, season, episode, seasons, _e2, last, titleCandidates, found, _iterator5, _step5, s, _iterator6, _step6, ep, _iterator7, _step7, title, epHash, _e3, _res, _t2, _t3, _t4;
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      // replicate existing logic but only final "history" call
                      type = getContentType$1(media); // if movie -> addToHistory({method:'movie', id, ids})
                      if (!(type === 'movie')) {
                        _context4.n = 4;
                        break;
                      }
                      // look up trakt id if needed
                      tmdbId = media.id || media.ids && media.ids.tmdb;
                      _context4.n = 1;
                      return api$1.get("/search/tmdb/".concat(tmdbId, "?type=movie"));
                    case 1:
                      search = _context4.v;
                      if (!(!search || !search.length || !search[0].movie || !search[0].movie.ids)) {
                        _context4.n = 2;
                        break;
                      }
                      e = new Error('Movie not found');
                      e.status = 404;
                      throw e;
                    case 2:
                      traktId = search[0].movie.ids.trakt;
                      _context4.n = 3;
                      return api$1.addToHistory({
                        method: 'movie',
                        id: tmdbId,
                        ids: _objectSpread2(_objectSpread2({}, media.ids || {}), {}, {
                          trakt: traktId
                        })
                      });
                    case 3:
                      res = _context4.v;
                      return _context4.a(2, {
                        status: 200,
                        data: res
                      });
                    case 4:
                      // show episode
                      _tmdbId = media.id || media.ids && media.ids.tmdb;
                      _context4.n = 5;
                      return api$1.get("/search/tmdb/".concat(_tmdbId, "?type=show"));
                    case 5:
                      _search = _context4.v;
                      if (!(!_search || !_search.length || !_search[0].show || !_search[0].show.ids)) {
                        _context4.n = 6;
                        break;
                      }
                      _e = new Error('Show not found');
                      _e.status = 404;
                      throw _e;
                    case 6:
                      traktShowId = _search[0].show.ids.trakt; // Prefer season/episode from media; otherwise try to resolve by timeline hash if available
                      season = media.season_number || media.season || media.seasonNumber;
                      episode = media.episode_number || media.episode || media.episodeNumber;
                      if (!(!season || !episode)) {
                        _context4.n = 30;
                        break;
                      }
                      _context4.n = 7;
                      return api$1.get("/shows/".concat(traktShowId, "/seasons?extended=episodes"));
                    case 7:
                      seasons = _context4.v;
                      if (seasons) {
                        _context4.n = 8;
                        break;
                      }
                      _e2 = new Error('Seasons not found');
                      _e2.status = 404;
                      throw _e2;
                    case 8:
                      // Try map by timeline hash using all known title variants.
                      last = Lampa.Storage.get('trakt_last_card', media) || media;
                      titleCandidates = collectTitleCandidates(media, last);
                      _iterator5 = _createForOfIteratorHelper(seasons);
                      _context4.p = 9;
                      _iterator5.s();
                    case 10:
                      if ((_step5 = _iterator5.n()).done) {
                        _context4.n = 27;
                        break;
                      }
                      s = _step5.value;
                      if (s.episodes) {
                        _context4.n = 11;
                        break;
                      }
                      return _context4.a(3, 26);
                    case 11:
                      _iterator6 = _createForOfIteratorHelper(s.episodes);
                      _context4.p = 12;
                      _iterator6.s();
                    case 13:
                      if ((_step6 = _iterator6.n()).done) {
                        _context4.n = 22;
                        break;
                      }
                      ep = _step6.value;
                      _iterator7 = _createForOfIteratorHelper(titleCandidates);
                      _context4.p = 14;
                      _iterator7.s();
                    case 15:
                      if ((_step7 = _iterator7.n()).done) {
                        _context4.n = 17;
                        break;
                      }
                      title = _step7.value;
                      epHash = Lampa.Utils.hash([s.number, s.number > 10 ? ':' : '', ep.number, title].join(''));
                      if (!(media.hash && epHash === media.hash)) {
                        _context4.n = 16;
                        break;
                      }
                      season = s.number;
                      episode = ep.number;
                      found = true;
                      return _context4.a(3, 17);
                    case 16:
                      _context4.n = 15;
                      break;
                    case 17:
                      _context4.n = 19;
                      break;
                    case 18:
                      _context4.p = 18;
                      _t2 = _context4.v;
                      _iterator7.e(_t2);
                    case 19:
                      _context4.p = 19;
                      _iterator7.f();
                      return _context4.f(19);
                    case 20:
                      if (!found) {
                        _context4.n = 21;
                        break;
                      }
                      return _context4.a(3, 22);
                    case 21:
                      _context4.n = 13;
                      break;
                    case 22:
                      _context4.n = 24;
                      break;
                    case 23:
                      _context4.p = 23;
                      _t3 = _context4.v;
                      _iterator6.e(_t3);
                    case 24:
                      _context4.p = 24;
                      _iterator6.f();
                      return _context4.f(24);
                    case 25:
                      if (!found) {
                        _context4.n = 26;
                        break;
                      }
                      return _context4.a(3, 27);
                    case 26:
                      _context4.n = 10;
                      break;
                    case 27:
                      _context4.n = 29;
                      break;
                    case 28:
                      _context4.p = 28;
                      _t4 = _context4.v;
                      _iterator5.e(_t4);
                    case 29:
                      _context4.p = 29;
                      _iterator5.f();
                      return _context4.f(29);
                    case 30:
                      if (!(!season || !episode)) {
                        _context4.n = 31;
                        break;
                      }
                      slog('Episode index not resolved', {
                        tmdbId: _tmdbId,
                        traktShowId: traktShowId,
                        hash: media.hash,
                        mediaTitles: collectTitleCandidates(media),
                        lastCardTitles: collectTitleCandidates(Lampa.Storage.get('trakt_last_card', null)),
                        hasMediaIds: !!(media && media.ids)
                      });
                      _e3 = new Error('Episode index not resolved');
                      _e3.status = 422;
                      throw _e3;
                    case 31:
                      _context4.n = 32;
                      return api$1.addToHistory({
                        method: 'show',
                        id: _tmdbId,
                        ids: _objectSpread2(_objectSpread2({}, media.ids || {}), {}, {
                          trakt: traktShowId
                        }),
                        season_number: season,
                        episodes: [{
                          number: episode,
                          watched_at: new Date().toISOString()
                        }]
                      });
                    case 32:
                      _res = _context4.v;
                      return _context4.a(2, {
                        status: 200,
                        data: _res
                      });
                    case 33:
                      return _context4.a(2);
                  }
                }, _callee4, null, [[14, 18, 19, 20], [12, 23, 24, 25], [9, 28, 29, 30]]);
              }));
              return function doFinish() {
                return _ref9.apply(this, arguments);
              };
            }();
            _context5.n = 4;
            return finishWithIdempotency({
              key: key,
              token: token,
              doFinish: doFinish,
              logPrefix: 'finish'
            });
          case 4:
            result = _context5.v;
            slog('finish result', key, result);
            return _context5.a(2, result);
          case 5:
            _context5.p = 5;
            delete requestInProgress[key]; // Завжди знімаємо блокування
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[3,, 5, 6]]);
    }));
    return _finish.apply(this, arguments);
  }
  function getContentType$1(card) {
    if (!card) return 'movie';
    if (card.method === 'tv' || card.method === 'show') return 'show';
    if (card.card_type === 'tv' || card.card_type === 'show') return 'show';
    if (card.media_type === 'tv' || card.media_type === 'show') return 'show';
    if (card.original_name || card.name) return 'show';
    if (card.episode_run_time || card.first_air_date || card.created_by || card.number_of_seasons || card.number_of_episodes) {
      return 'show';
    }
    return 'movie';
  }
  var isAddingShowToWatching = false;
  var isInitialized$1 = false;

  /**
   * Модуль для відстеження перегляду в Trakt.TV
   */
  var watching = {
    /**
     * Перевіряє, чи увімкнено логування
     * @returns {boolean} true, якщо логування увімкнено
     */
    isLoggingEnabled: function isLoggingEnabled() {
      return Lampa.Storage.field('trakt_enable_logging');
    },
    /**
     * Ініціалізує обробники подій відстеження перегляду
     */
    init: function init() {
      if (isInitialized$1) {
        slog('watching.init called while already initialized, skipping');
        return;
      }
      isInitialized$1 = true;

      // Restore cache from session
      loadSessionCache();
      loadHashMetaCache();

      // Start scrobble queue processing
      scrobbleQueue.init();
      slog('watching.init');

      // Слідкуємо за оновленнями Timeline
      if (window.Lampa && Lampa.Timeline && Lampa.Timeline.listener) {
        this._onTimelineUpdate = this.processTimelineUpdate.bind(this);
        Lampa.Timeline.listener.follow('update', this._onTimelineUpdate);
        slog('Timeline listener attached');
      }

      // Слідкуємо за стартом програвача для збереження поточної картки
      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        this._onPlayerStart = this.onPlayerStart.bind(this);
        Lampa.Player.listener.follow('start', this._onPlayerStart);
        slog('Player listener attached');
      }
    },
    /**
     * Обробник події старту програвача
     * @param {Object} data - Дані події
     */
    onPlayerStart: function onPlayerStart(data) {
      if (this.isLoggingEnabled()) {
        slog('Player start event received', data);
      }
      var card = data.card || Lampa.Activity.active() && Lampa.Activity.active().movie;
      if (this.isLoggingEnabled()) {
        slog('Card determined in onPlayerStart', card);
      }
      if (!card) {
        if (this.isLoggingEnabled()) {
          slog('No card found in onPlayerStart');
        }
        return;
      }
      Lampa.Storage.set('trakt_last_card', card);
      if (this.isLoggingEnabled()) {
        slog('Card saved to storage', card);
      }
      var timeline = data && data.timeline;
      var hash = timeline && timeline.hash;
      if (hash) {
        var se = extractSeasonEpisode(data);
        // Fallback: brute-force season/episode from hash using original name
        if (!se.season || !se.episode) {
          var origName = card.original_name || card.original_title || card.title;
          if (origName) {
            se = resolveSeasonEpisode(hash, origName);
          }
        }
        setHashMeta(hash, {
          card: card,
          season: se.season,
          episode: se.episode,
          ids: card && card.ids
        });
        if (this.isLoggingEnabled()) {
          slog('Hash meta cached from player start', {
            hash: hash,
            season: se.season,
            episode: se.episode
          });
        }
      }

      // Scrobble: send start event to Trakt with saved progress if resuming
      if (card && Lampa.Storage.field('trakt_enable_watching')) {
        var token = Lampa.Storage.get('trakt_token');
        if (token) {
          // Build media with season/episode from hash meta
          var metaHash = hash ? getHashMeta(hash) : null;
          var mediaForStart = Object.assign({}, card);
          if (metaHash) {
            if (!card.season_number && metaHash.season) mediaForStart.season_number = metaHash.season;
            if (!card.episode_number && metaHash.episode) mediaForStart.episode_number = metaHash.episode;
          }
          scrobbler.setCurrentMedia(mediaForStart);
          var startProgress = timeline && timeline.percent || 0;
          scrobbler.scrobbleStart(mediaForStart, startProgress);
        }
      }
    },
    /**
     * Обробник оновлень Timeline
     * @param {Object} data - Дані події
     */
    processTimelineUpdate: function processTimelineUpdate(data) {
      if (this.isLoggingEnabled()) {
        slog('Timeline update received', data);
      }
      var enableWatching = Lampa.Storage.field('trakt_enable_watching');
      if (!enableWatching) {
        if (this.isLoggingEnabled()) {
          slog('Watching is disabled by settings');
        }
        return;
      }
      if (!data || !data.data || !data.data.hash || !data.data.road) {
        if (this.isLoggingEnabled()) {
          slog('Invalid data received', data);
        }
        return;
      }
      var hash = data.data.hash;
      var road = data.data.road || {};
      var percent = parseFloat(road.percent || 0);
      if (isNaN(percent)) percent = 0;
      var token = Lampa.Storage.get('trakt_token');
      var minProgress = parseInt(Lampa.Storage.field('trakt_min_progress') || config.minProgress);
      window.last_timeline_event = {
        data: {
          hash: hash,
          road: road
        },
        ts: Date.now()
      };
      if (this.isLoggingEnabled()) {
        slog('Processing timeline update', {
          hash: hash,
          percent: percent,
          token: !!token,
          minProgress: minProgress
        });
      }
      if (!token) {
        if (this.isLoggingEnabled()) {
          slog('No token found, skipping update');
        }
        return;
      }
      var card = this.getCurrentCard();
      var meta = getHashMeta(hash);
      if (!card && meta && meta.card) {
        card = meta.card;
        if (this.isLoggingEnabled()) {
          slog('Card restored from hash meta cache', card);
        }
      }
      if (card && hash) {
        var se = extractSeasonEpisode(card);
        var cachedMeta = meta || getHashMeta(hash);
        var seasonValue = se.season || cachedMeta && cachedMeta.season;
        var episodeValue = se.episode || cachedMeta && cachedMeta.episode;
        var idsValue = card.ids || cachedMeta && cachedMeta.ids;
        setHashMeta(hash, {
          card: card,
          season: seasonValue,
          episode: episodeValue,
          ids: idsValue
        });
        if (this.isLoggingEnabled() && (!se.season || !se.episode) && cachedMeta && (cachedMeta.season || cachedMeta.episode)) {
          slog('Hash meta preserved season/episode from cache', {
            hash: hash,
            season: seasonValue,
            episode: episodeValue
          });
        }
      }
      slog('Card from getCurrentCard:', card);
      if (!card) {
        if (this.isLoggingEnabled()) {
          slog('No card found, skipping update');
        }
        slog('No card found, skipping update');
        return;
      }

      // Scrobble: throttled progress update (skip if cloud timeline inject)
      if (card && percent > 0 && !cloudInjectInProgress) {
        scrobbler.onProgressUpdate(hash, percent, road, card);
      }

      // Перевіряємо, чи потрібно додати серіал в "Смотрю"
      slog('Calling checkAndAddToShow');
      this.checkAndAddToShow(card, hash, percent, token);

      // Інтеграція нового фініш-флоу: при досягненні порогу формуємо key і викликаємо finish()
      slog('Checking if should finish with idempotency, percent:', percent, 'minProgress:', minProgress);
      var watchedByPercent = (typeof percent === 'number' ? percent : 0) >= minProgress;
      var watchedByTime = road && road.time && road.duration ? road.time / road.duration * 100 >= minProgress : false;
      if (watchedByPercent || watchedByTime) {
        var media = Object.assign({}, card, {
          hash: hash
        });
        if (meta) {
          if (!media.season_number && meta.season) media.season_number = meta.season;
          if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
          if (!media.ids && meta.ids) media.ids = meta.ids;
        }
        var key = getCompletionKey(media);
        slog('Timeline threshold reached, finish intent and attempt', {
          key: key,
          percent: percent
        });
        markFinishIntent(key);
        finish(media).catch(function (e) {
          return slog('finish error', e);
        });
        // Also send scrobble stop for active watching
        scrobbler.scrobbleStop(media, percent);
      } else {
        slog('Below minProgress, no finish');
      }
    },
    /**
     * Отримує поточну картку
     * @returns {Object|null} Поточна картка
     */
    getCurrentCard: function getCurrentCard() {
      var card = Lampa.Activity && Lampa.Activity.active && Lampa.Activity.active() && (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie) || null;
      if (!card) card = Lampa.Storage.get('trakt_last_card', null);
      if (this.isLoggingEnabled()) {
        slog('Current card determined', card);
      }
      return card;
    },
    /**
     * Перевіряє, чи потрібно додати серіал в "Смотрю"
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {number} percent - Відсоток перегляду
     * @param {string} token - Токен авторизації
     */
    checkAndAddToShow: function checkAndAddToShow(card, hash, percent, token) {
      var originalName = card.original_name || card.name || card.original_title || card.title;
      var firstEpisodeHash = Lampa.Utils.hash('11' + originalName);
      if (this.isLoggingEnabled()) {
        slog('Checking if show should be added to watching', {
          card: card,
          hash: hash,
          percent: percent,
          firstEpisodeHash: firstEpisodeHash,
          shouldAdd: hash === firstEpisodeHash
        });
      }
      var shouldAdd = hash === firstEpisodeHash;
      if (shouldAdd) {
        slog('Adding show to watching');
        this.addShowToWatching(card, token);
      }
    },
    /**
     * Додає серіал в "Смотрю"
     * @param {Object} card - Картка серіалу
     * @param {string} token - Токен авторизації
     */
    addShowToWatching: function addShowToWatching(card, token) {
      var _this = this;
      if (isAddingShowToWatching) {
        slog('addShowToWatching called while already adding, skipping');
        return;
      }
      isAddingShowToWatching = true;
      if (this.isLoggingEnabled()) {
        slog('Adding show to watching', card);
      }
      var tmdbId = card.id || card.ids && card.ids.tmdb;
      if (!tmdbId) {
        slog('No tmdbId found, returning');
        isAddingShowToWatching = false;
        return;
      }
      var contentType = getContentType$1(card);
      api$1.get("/search/tmdb/".concat(tmdbId, "?type=").concat(contentType)).then(function (response) {
        if (response && response.length > 0) {
          var item = response[0];
          var traktId = item.show && item.show.ids.trakt || item.movie && item.movie.ids.trakt;
          var body = {};
          if (contentType === 'show') {
            body.shows = [{
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              watched_at: new Date().toISOString()
            }];
          } else {
            body.movies = [{
              ids: _objectSpread2({
                trakt: traktId
              }, card.ids),
              watched_at: new Date().toISOString()
            }];
          }
          if (_this.isLoggingEnabled()) {
            slog('Sending request to add content to watching', body);
          }
          return api$1.get('/sync/watchlist', body);
        } else {
          slog('No show found or no traktId in response');
        }
      }).catch(function (error) {
        logWarn('Failed to add show to watching', error, {
          debugOnly: true
        });
      }).finally(function () {
        isAddingShowToWatching = false;
      });
    },
    /**
     * Позначення наміру завершити (події onEnded/onStop/onHidden тощо)
     * Використовується замість прямих фінальних запитів.
     */
    markFinishIntent: markFinishIntent,
    /**
     * Отримати кешовані метадані за hash
     */
    getMetaByHash: getHashMeta,
    /**
     * Запам'ятати метадані за hash
     */
    rememberHashMeta: setHashMeta,
    /**
     * Публічний доступ до єдиного генератора completion key
     */
    getCompletionKey: getCompletionKey,
    /**
     * Публічний доступ до визначення типу контенту
     */
    getContentType: getContentType$1,
    /**
     * Єдиний шлях відправити фінальний запит з ідемпотентністю
     */
    finish: finish,
    /**
     * Знаходить інформацію про епізод за хешем
     * @param {Object} card - Картка серіалу
     * @param {string} hash - Хеш епізоду
     * @param {Array} seasons - Сезони серіалу
     * @returns {Object|null} Інформація про епізод
     */
    findEpisodeByHash: function findEpisodeByHash(card, hash, seasons) {
      var originalName = card.original_name || card.name || card.original_title || card.title;
      for (var i = 0; i < seasons.length; i++) {
        var season = seasons[i];
        if (!season.episodes) continue;
        for (var j = 0; j < season.episodes.length; j++) {
          var episode = season.episodes[j];
          var episodeHashStr = [season.number, season.number > 10 ? ':' : '', episode.number, originalName].join('');
          var episodeHash = Lampa.Utils.hash(episodeHashStr);
          if (episodeHash === hash && episode.ids && episode.ids.trakt) {
            var result = {
              traktId: episode.ids.trakt,
              season: season.number,
              episode: episode.number
            };
            slog('Found matching episode:', result);
            return result;
          }
        }
      }
      slog('No matching episode found');
      return null;
    },
    /**
     * Set flag to suppress scrobble during cloud timeline injection
     * @param {boolean} val
     */
    setCloudInjectInProgress: function setCloudInjectInProgress(val) {
      cloudInjectInProgress = !!val;
    },
    /**
     * Очищує ресурси модуля: зупиняє таймери, очищає кеш та знімає слухачі подій
     */
    destroy: function destroy() {
      isInitialized$1 = false;
      isAddingShowToWatching = false;

      // Clear all pending intent timers
      var _iterator3 = _createForOfIteratorHelper(intentTimers),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            timerId = _step3$value[1];
          clearTimeout(timerId);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      intentTimers.clear();

      // Clear caches
      completionCache.clear();
      hashMetaCache.clear();

      // Clear lock queues — resolve all pending locks to prevent hanging
      var _iterator4 = _createForOfIteratorHelper(lockQueues),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
            queue = _step4$value[1];
          queue.forEach(function (resolve) {
            return resolve();
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      lockQueues.clear();

      // Clear request tracking
      Object.keys(requestInProgress).forEach(function (key) {
        return delete requestInProgress[key];
      });

      // Remove Timeline listener
      if (this._onTimelineUpdate && window.Lampa && Lampa.Timeline && Lampa.Timeline.listener && Lampa.Timeline.listener.remove) {
        Lampa.Timeline.listener.remove('update', this._onTimelineUpdate);
        delete this._onTimelineUpdate;
      }

      // Remove Player listener
      if (this._onPlayerStart && window.Lampa && Lampa.Player && Lampa.Player.listener && Lampa.Player.listener.remove) {
        Lampa.Player.listener.remove('start', this._onPlayerStart);
        delete this._onPlayerStart;
      }
      scrobbler.destroy();
      scrobbleQueue.destroy();
      slog('watching.destroy');
    }
  };

  var isInitialized = false;
  var API_MISSING_LOG_KEY = 'events:api-missing';
  function resolveUpnextProgress() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var watched = Number(data.trakt_upnext_watched);
    var total = Number(data.trakt_upnext_total);
    var text = (data.trakt_upnext_progress || '').toString().trim();
    var safeWatched = Number.isFinite(watched) ? watched : 0;
    var safeTotal = Number.isFinite(total) ? total : 0;
    if (!text && safeTotal > 0) {
      text = "".concat(safeWatched, "/").concat(safeTotal);
    }
    if ((!safeWatched || !safeTotal) && text.indexOf('/') > -1) {
      var parts = text.split('/');
      var parsedWatched = Number(parts[0]);
      var parsedTotal = Number(parts[1]);
      if (Number.isFinite(parsedWatched) && parsedWatched >= 0) safeWatched = parsedWatched;
      if (Number.isFinite(parsedTotal) && parsedTotal > 0) safeTotal = parsedTotal;
    }
    if (!text) return null;
    var percent = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round(safeWatched / safeTotal * 100))) : null;
    return {
      text: text,
      percent: percent
    };
  }
  function renderUpnextProgressBadge(cardInstance) {
    if (!cardInstance || !cardInstance.data || !cardInstance.render) return;
    var progress = resolveUpnextProgress(cardInstance.data);
    if (!progress) return;
    var cardNode = cardInstance.render(true);
    var cardView = cardNode && cardNode.querySelector ? cardNode.querySelector('.card__view') : null;
    if (!cardView) return;
    var wrap = cardView.querySelector('.card-watched.trakt-upnext-watched');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'card-watched trakt-upnext-watched';
      wrap.innerHTML = '<div class="card-watched__inner"><div class="card-watched__body"></div></div>';
      cardView.insertBefore(wrap, cardView.firstChild);
    }
    var body = wrap.querySelector('.card-watched__body');
    if (!body) return;
    var row = body.querySelector('.card-watched__item.trakt-upnext-watched__item');
    if (!row) {
      row = document.createElement('div');
      row.className = 'card-watched__item trakt-upnext-watched__item';
      row.innerHTML = '<span></span><div class="time-line"><div></div></div>';
      body.innerHTML = '';
      body.appendChild(row);
    }
    var title = row.querySelector('span');
    if (title) title.textContent = progress.text;
    var bar = row.querySelector('.time-line > div');
    if (bar) bar.style.width = "".concat(progress.percent || 0, "%");
  }
  function decorateUpnextLine(event) {
    if (!event || !event.data || event.data.trakt_row !== 'upnext') return;
    if (!Array.isArray(event.items)) return;
    event.items.forEach(renderUpnextProgressBadge);
  }

  /**
   * Модуль для обробки подій плагіна
   */
  var events = {
    /**
     * Ініціалізує обробники подій
     */
    init: function init() {
      var _this = this;
      if (isInitialized) {
        logDebugOnce('events:init-repeat', 'events.init skipped: already initialized');
        return;
      }
      isInitialized = true;
      this._cleanups = [];

      // Следим за готовностью приложения
      if (window.appready) this.onAppReady();else {
        var _appHandler = function _appHandler(e) {
          if (e.type === 'ready') _this.onAppReady();
        };
        Lampa.Listener.follow('app', _appHandler);
        this._cleanups.push(function () {
          return Lampa.Listener.remove('app', _appHandler);
        });
      }

      // Додаємо кнопку watchlist на картку
      var _fullHandler = function _fullHandler(e) {
        if (e.type === 'complite' && Lampa.Storage.get('trakt_token')) {
          _this.onFullCardReady(e);
        }
      };
      Lampa.Listener.follow('full', _fullHandler);
      this._cleanups.push(function () {
        return Lampa.Listener.remove('full', _fullHandler);
      });
      var _lineHandler = function _lineHandler(e) {
        if (!e || !e.type) return;
        if (e.type === 'append' || e.type === 'visible' || e.type === 'toggle') {
          decorateUpnextLine(e);
        }
      };
      Lampa.Listener.follow('line', _lineHandler);
      this._cleanups.push(function () {
        return Lampa.Listener.remove('line', _lineHandler);
      });

      // Переадресація завершальних подій програвача на idempotent intent
      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        // onDestroy / onHidden -> markFinishIntent + scrobbleStop for the current media key
        var routeFinishIntent = function routeFinishIntent(evt) {
          try {
            if (!Lampa.Storage.field('trakt_enable_watching')) return;
            var token = Lampa.Storage.get('trakt_token');
            if (!token) return;
            var card = Lampa.Activity.active && Lampa.Activity.active() && (Lampa.Activity.active().card_data || Lampa.Activity.active().card || Lampa.Activity.active().movie) || Lampa.Storage.get('trakt_last_card');
            if (!card) return;
            // Include last known hash if available from timeline storage
            var lastTimeline = window.last_timeline_event && window.last_timeline_event.data || {};
            var media = Object.assign({}, card, {
              hash: lastTimeline.hash
            });
            var meta = watching && typeof watching.getMetaByHash === 'function' ? watching.getMetaByHash(lastTimeline.hash) : null;
            if (meta) {
              if (!media.season_number && meta.season) media.season_number = meta.season;
              if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
              if (!media.ids && meta.ids) media.ids = meta.ids;
            }
            var key = watching && typeof watching.getCompletionKey === 'function' ? watching.getCompletionKey(media) : null;
            if (key && watching && typeof watching.markFinishIntent === 'function') {
              watching.markFinishIntent(key);
            }

            // Only scrobble pause on close if below threshold (stop already sent by timeline handler)
            if (typeof scrobbler !== 'undefined' && scrobbler) {
              var currentProgress = lastTimeline.road && lastTimeline.road.percent || 0;
              var minProgress = parseInt(Lampa.Storage.field('trakt_min_progress') || 90, 10);
              if (currentProgress < minProgress && typeof scrobbler.scrobblePause === 'function') {
                scrobbler.scrobblePause(media, currentProgress);
              }
            }

            // Primary finish route is timeline update.
            // Fallback to direct finish only when "ended" happened without known timeline hash.
            var shouldFallbackFinish = !!(evt && evt.type === 'ended' && !lastTimeline.hash);
            if (shouldFallbackFinish && watching && typeof watching.finish === 'function') {
              var contentType = watching && typeof watching.getContentType === 'function' ? watching.getContentType(media) : 'movie';
              var season = media.season_number || media.season || media.seasonNumber;
              var episode = media.episode_number || media.episode || media.episodeNumber;
              var canFinishSafely = contentType === 'movie' || season && episode || media.hash;
              if (canFinishSafely) {
                watching.finish(media).catch(function (e) {
                  logWarn('Fallback finish failed', {
                    eventType: evt && evt.type,
                    error: e
                  }, {
                    debugOnly: true
                  });
                });
              }
            }
          } catch (e) {
            logWarn('Event finish route failed', e, {
              debugOnly: true
            });
          }
        };
        var _visibilityHandler = function _visibilityHandler(e) {
          if (e && e.hidden) routeFinishIntent({
            type: 'hidden'
          });
        };
        Lampa.Player.listener.follow('destroy', routeFinishIntent);
        Lampa.Player.listener.follow('visibility', _visibilityHandler);
        this._cleanups.push(function () {
          return Lampa.Player.listener.remove('destroy', routeFinishIntent);
        });
        this._cleanups.push(function () {
          return Lampa.Player.listener.remove('visibility', _visibilityHandler);
        });
      }

      // External player support: send scrobble start when external player launches
      var _externalHandler = function _externalHandler(e) {
        try {
          if (!Lampa.Storage.field('trakt_enable_watching')) return;
          if (!Lampa.Storage.get('trakt_token')) return;
          var card = e && e.data && (e.data.card || Lampa.Storage.get('trakt_last_card'));
          if (!card) return;
          var timeline = e && e.data && e.data.timeline;
          var startProgress = timeline && timeline.percent || 0;
          scrobbler.setCurrentMedia(card);
          scrobbler.scrobbleStart(card, startProgress);
        } catch (e) {
          logWarn('External player handler failed', e, {
            debugOnly: true
          });
        }
      };
      if (window.Lampa && Lampa.Player && Lampa.Player.listener) {
        Lampa.Player.listener.follow('external', _externalHandler);
        this._cleanups.push(function () {
          Lampa.Player.listener.remove('external', _externalHandler);
        });
      }

      // Pause detection: video pause event for real-time scrobble pause
      // Skips false pauses from HLS seek (when progress update was sent < 3s ago)
      var _pauseHandler = function _pauseHandler() {
        try {
          if (!Lampa.Storage.field('trakt_enable_watching')) return;
          if (!Lampa.Storage.get('trakt_token')) return;
          // Skip if a scrobbleStart/progress was sent within last 3 seconds (HLS seek)
          var lastProgress = typeof scrobbler !== 'undefined' && scrobbler && typeof scrobbler.getCurrentProgress === 'function' ? scrobbler.getCurrentProgress() : null;
          if (lastProgress && lastProgress.time && Date.now() - lastProgress.time < 3000) return;
          var lastTimeline = window.last_timeline_event && window.last_timeline_event.data;
          if (!lastTimeline || !lastTimeline.hash || !lastTimeline.road) return;
          var card = Lampa.Storage.get('trakt_last_card');
          if (!card) return;
          var media = Object.assign({}, card, {
            hash: lastTimeline.hash
          });
          var meta = watching && typeof watching.getMetaByHash === 'function' ? watching.getMetaByHash(lastTimeline.hash) : null;
          if (meta) {
            if (!media.season_number && meta.season) media.season_number = meta.season;
            if (!media.episode_number && meta.episode) media.episode_number = meta.episode;
          }
          var percent = lastTimeline.road.percent || 0;
          if (typeof scrobbler !== 'undefined' && scrobbler && typeof scrobbler.scrobblePause === 'function') {
            scrobbler.scrobblePause(media, percent);
          }
        } catch (e) {
          logWarn('Pause handler failed', e, {
            debugOnly: true
          });
        }
      };
      document.addEventListener('pause', _pauseHandler, true);
      this._cleanups.push(function () {
        document.removeEventListener('pause', _pauseHandler, true);
      });
    },
    /**
     * Видаляє всі обробники подій та скидає стан ініціалізації
     * Дозволяє clean re-init without listener duplication
     */
    destroy: function destroy() {
      if (this._cleanups && this._cleanups.length) {
        for (var i = 0; i < this._cleanups.length; i++) {
          try {
            this._cleanups[i]();
          } catch (e) {}
        }
        this._cleanups = [];
      }
      isInitialized = false;
    },
    /**
     * Обробник події готовності додатку
     */
    onAppReady: function onAppReady() {
      // Імпортуємо config динамічно, щоб уникнути циклічних залежностей
      config.main();

      // Імпортуємо addMenuItems динамічно
      addMenuItems();

      // Initialize scrobbler for queue processing
      scrobbler.init();
    },
    /**
     * Додає блок з пов'язаними списками в картку медіа
     * @param {Object} e - Об'єкт події
     */
    addRelatedListsBlock: function addRelatedListsBlock(e) {
      var _e$object;
      if (!e) return;

      // Перевірка чи вже додано (дедуплікація)
      if (e.object && e.object.activity && typeof e.object.activity.render === 'function') {
        if (e.object.activity.render().find('.tag-count.trakttv-lists').length > 0) {
          return;
        }
      }

      // Перевіряємо наявність даних картки
      var card = e.data;
      if (!card) return;

      // Визначаємо тип контенту - e.object.method є primary джерело
      var method = (_e$object = e.object) === null || _e$object === void 0 ? void 0 : _e$object.method; // 'tv' or 'movie'

      // Fallback через евристики з e.data.movie
      if (!method && e.data && e.data.movie) {
        method = e.data.movie.name || e.data.movie.first_air_date ? 'tv' : 'movie';
      }

      // Fallback через card евристики
      if (!method && card) {
        method = card.method || card.card_type || (card.first_air_date || card.name ? 'tv' : 'movie');
      }

      // Перевіряємо наявність ID
      if (!card.id && (!card.external_ids || !card.external_ids.trakt_id)) return;

      // Параметри для запиту
      // Trakt API використовує 'show' замість 'tv'
      var params = {
        id: card.id,
        method: method === 'tv' ? 'show' : 'movie'
      };

      // Додаємо trakt_id, якщо він доступний
      if (card.external_ids && card.external_ids.trakt_id) {
        params.ids = {
          trakt: card.external_ids.trakt_id
        };
      }

      // Отримуємо пов'язані списки та списки, які користувач лайкнув
      // Local safe resolver for Api to support runtime-scoped execution (e.g., dev/trakt.js)
      var Api = typeof api !== 'undefined' && api || window.TraktTV && window.TraktTV.api || null;
      if (!Api) {
        logDebugOnce(API_MISSING_LOG_KEY, 'API bridge is unavailable in events');
        return;
      }
      Promise.all([Api && Api.getMediaLists(params), Api && Api.likesLists({
        page: 1,
        limit: 1000
      }) // Отримуємо всі лайкнуті списки
      ]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          mediaListsResponse = _ref2[0],
          likedListsResponse = _ref2[1];
        var formattedMediaLists = mediaListsResponse; // getMediaLists вже повертає відформатовані дані
        var likedListIds = likedListsResponse.results.map(function (list) {
          return list.id;
        });

        // Перевіряємо наявність списків
        if (!formattedMediaLists || !Array.isArray(formattedMediaLists) || formattedMediaLists.length === 0) {
          return;
        }

        // Перевіряємо наявність activity та render
        if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') {
          return;
        }

        // Знаходимо блок з тегами
        var tagsBlock = e.object.activity.render().find('.full-descr__tags');
        if (tagsBlock.length === 0) {
          return;
        }

        // Створюємо елемент для відображення кількості списків
        var listsCountElement = $("\n                <div class=\"tag-count selector trakttv-lists\">\n                    <div class=\"tag-count__name\">".concat(Lampa.Lang.translate('trakttv_related_lists'), "</div>\n                </div>\n            "));

        // Додаємо обробник кліку для відображення списків
        listsCountElement.on('hover:enter', function () {
          var selectItems = formattedMediaLists.map(function (list) {
            return {
              title: list.title,
              item_count: list.item_count,
              id: list.id,
              component: 'trakt_list_detail',
              // Вказуємо компонент
              list_id: list.id,
              // Передаємо list_id
              page: 1,
              // Початкова сторінка
              liked: likedListIds.includes(list.id) // Додаємо статус лайку
            };
          });
          if (selectItems.length === 0) {
            Lampa.Noty.show(Lampa.Lang.translate('trakt_no_lists'));
            return;
          }
          Lampa.Select.show({
            title: Lampa.Lang.translate('trakttv_related_lists'),
            items: selectItems,
            onSelect: function onSelect(a) {
              var listTitle = typeof a.item_count === 'number' ? "".concat(a.title, " (").concat(a.item_count, ")") : a.title;
              Lampa.Activity.push({
                url: '',
                title: listTitle,
                component: a.component,
                list_id: a.list_id,
                page: a.page
              });
            },
            onRender: function onRender(item, element) {
              if (element.liked) {
                item.find('.selectbox__title').append('<span class="selectbox__lables"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 22 22" xml:space="preserve"><path fill="currentColor" d="M11,20c-0.3,0-0.5-0.1-0.7-0.3l-8.5-8.5c-0.9-0.9-1.4-2-1.4-3.3c0-2.6,2.1-4.7,4.7-4.7c1.4,0,2.7,0.6,3.6,1.5l2.3,2.3l2.3-2.3c0.9-0.9,2.2-1.5,3.6-1.5c2.6,0,4.7,2.1,4.7,4.7c0,1.3-0.5,2.4-1.4,3.3l-8.5,8.5C11.5,19.9,11.3,20,11,20z"></path></svg></span>');
              }
            },
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        });

        // Додаємо елемент в кінець блоку з тегами
        tagsBlock.append(listsCountElement);
      }).catch(function (error) {
        logWarn('Related lists loading failed', error, {
          debugOnly: true
        });
      });
    },
    /**
     * Обробник події готовності картки фільму/серіалу
     * @param {Object} e - Об'єкт події
     */
    onFullCardReady: function onFullCardReady(e) {
      // Перевіряємо наявність необхідних даних
      if (!e || !e.data) {
        return;
      }

      // Перевіряємо наявність activity
      if (!e.object || !e.object.activity || typeof e.object.activity.render !== 'function') {
        return;
      }
      var buttonsContainer = e.object.activity.render().find('.full-start-new__buttons');
      if (buttonsContainer.find('.trakt-list-manager-button').length === 0) {
        var button = watchlist.addWatchlistButton(e.data);
        buttonsContainer.append(button);
      }

      // Видалено кнопку TraktHistory.addHistoryButton згідно з завданням
      // const historyButton = TraktHistory.addHistoryButton(e.data);
      // e.object.activity.render().find('.full-start-new__buttons').append(historyButton);

      // Додаємо блок з пов'язаними списками
      // Перевіряємо наявність необхідних даних для списків
      // Виправлено: додано більше логування для налагодження

      if (!e.data.id) {
        // Спробуємо отримати ID з інших джерел

        // Перевіряємо наявність ID в різних можливих полях
        if (e.data.card && e.data.card.id) {
          e.data.id = e.data.card.id;
        } else if (e.data.data && e.data.data.id) {
          e.data.id = e.data.data.id;
        } else if (e.data.movie && e.data.movie.id) {
          e.data.id = e.data.movie.id;
        } else if (e.data.show && e.data.show.id) {
          e.data.id = e.data.show.id;
        } else if (e.data.external_ids && e.data.external_ids.tmdb_id) {
          e.data.id = e.data.external_ids.tmdb_id;
        } else {
          return;
        }
      }

      // Перевіряємо наявність external_ids
      if (!e.data.external_ids) {
        e.data.external_ids = {};
      }

      // Створюємо глибоку копію об'єкта події для передачі в addRelatedListsBlock
      var eventForLists = {
        data: JSON.parse(JSON.stringify(e.data)),
        object: {
          method: e.object.method,
          activity: e.object.activity
        }
      };

      // Додаткова перевірка копії даних
      if (!eventForLists.data.id) {
        eventForLists.data.id = e.data.id; // Явно копіюємо ID
      }
      this.addRelatedListsBlock(eventForLists);

      // Додаємо прогрес перегляду для серіалів
      if (e.object.method === 'tv') {
        // Перевіряємо налаштування trakttv_show_tv_progress
        var showProgress = Lampa.Storage.field('trakttv_show_tv_progress');
        // Показуємо прогрес, якщо налаштування не існуё true
        if (showProgress === undefined || showProgress === true) {
          TraktHistory.showWatchProgress(e.data, e);
        }
      }

      // Fetch Trakt playback progress for resume
      this.fetchAndRestorePlayback(e.data, e.object.method);
    },
    /**
     * Fetch Trakt playback progress and inject into Lampa Timeline when cloud is newer
     */
    fetchAndRestorePlayback: function fetchAndRestorePlayback(card, method) {
      if (!card || !card.id) return;
      if (!Lampa.Storage.field('trakt_enable_watching')) return;
      if (!Lampa.Storage.get('trakt_token')) return;
      var tmdbId = card.id;

      // Local safe resolver for Api to support runtime-scoped execution
      var Api = typeof api !== 'undefined' && api || window.TraktTV && window.TraktTV.api || null;
      if (!Api) return;
      Api.getPlaybackProgress().then(function (playbackItems) {
        if (!playbackItems || !Array.isArray(playbackItems) || !playbackItems.length) return;

        // Find matching item
        var matchingItem = null;
        for (var i = 0; i < playbackItems.length; i++) {
          var item = playbackItems[i];
          var media = item.movie || item.show;
          if (!media || !media.ids) continue;
          if (String(media.ids.tmdb) === String(tmdbId)) {
            matchingItem = item;
            break;
          }
        }
        if (!matchingItem) return;
        var progress = matchingItem.progress;
        if (!progress || progress <= 0) return;

        // Determine Lampa hash
        var hash = null;
        var seasonNum = null;
        var episodeNum = null;
        if (method === 'movie') {
          var showCard = card.card || card.movie || card;
          var title = showCard.original_title || showCard.title || showCard.original_name || showCard.name;
          if (title) hash = Lampa.Utils.hash(title);
        } else {
          seasonNum = matchingItem.episode ? matchingItem.episode.season : null;
          episodeNum = matchingItem.episode ? matchingItem.episode.number : null;
          var showCard = card.card || card.movie || card;
          var showName = showCard.original_name || showCard.original_title || showCard.title || showCard.name;
          if (showName && seasonNum && episodeNum) {
            hash = Lampa.Utils.hash([seasonNum, seasonNum > 10 ? ':' : '', episodeNum, showName].join(''));
          }
        }
        if (!hash) return;

        // Check local timeline
        var localProgress = Lampa.Timeline.view(hash);
        var localPercent = localProgress && localProgress.percent ? localProgress.percent : 0;

        // Write to Timeline only if cloud progress > local progress
        if (progress > localPercent) {
          var progressTimeSec = progress / 100 * (matchingItem.duration || 0);
          if (typeof watching !== 'undefined' && watching && typeof watching.setCloudInjectInProgress === 'function') {
            watching.setCloudInjectInProgress(true);
          }
          Lampa.Timeline.update({
            hash: hash,
            percent: progress,
            time: progressTimeSec || 0,
            duration: matchingItem.duration || 0,
            received: true
          });
          if (typeof watching !== 'undefined' && watching && typeof watching.setCloudInjectInProgress === 'function') {
            watching.setCloudInjectInProgress(false);
          }
        }
      }).catch(function () {
        // Silent fail — playback fetch is non-critical
      });
    }
  };

  /**
   * Helper functions for ContentRows integration (Lampa 3.0+)
   */

  /**
   * Check if user has permission to see UpNext content
   * @returns {boolean}
   */
  function checkUpNextPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Check if user has permission to see Recommendations content
   * @returns {boolean}
   */
  function checkRecommendationsPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Check if user has permission to see Calendar content
   * @returns {boolean}
   */
  function checkCalendarPermissions() {
    if (!Lampa.Storage.get('trakt_token')) return false;
    return true;
  }

  /**
   * Unified content type detection
   * @param {Object} data - Item data
   * @returns {string} - Content type: 'movie', 'tv', 'show', 'episode'
   */
  function getContentType(data) {
    if (data.method) return data.method;
    if (data.type) return data.type;
    if (data.card_type) return data.card_type;
    return data.name ? 'tv' : 'movie';
  }

  /**
   * Normalize content data for display (Lampa 3.0+)
   * Always adds params.emit for modular card system
   * @param {Array} items - Array of content items
   * @returns {Array} - Normalized items with params.emit
   */
  function normalizeContentData(items) {
    return items.map(function (item) {
      var normalized = _objectSpread2({}, item);
      var contentType = getContentType(item);
      if (contentType === 'tv' || contentType === 'show') {
        normalized.name = item.title || item.original_title;
        normalized.original_name = item.original_name || item.original_title || item.title;
        normalized.first_air_date = item.release_date;
        normalized.type = 'tv';
        normalized.card_type = 'tv';
      }
      if (contentType === 'movie') {
        delete normalized.name;
        delete normalized.original_name;
        normalized.release_date = item.release_date;
        normalized.title = item.title || item.original_title;
        normalized.type = 'movie';
        normalized.card_type = 'movie';
      }
      if (contentType === 'episode') {
        normalized.name = item.title || item.original_title;
        normalized.first_air_date = item.release_date;
        normalized.type = 'episode';
        normalized.card_type = 'episode';
      }

      // Add params.emit for Lampa 3.0+ modular system.
      // Use onlyEnter to avoid default navigation firing as well.
      // CRITICAL: Use normalized closure variables instead of this.data
      // to prevent runtime modification by Lampa.
      normalized.params = {
        emit: {
          onlyEnter: function onlyEnter() {
            var _this$data;
            // Use normalized.method (fixed at creation time) instead of getContentType(this.data)
            var fixedMethod = normalized.method || normalized.card_type || normalized.type;
            Lampa.Activity.push({
              url: ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.url) || normalized.url,
              component: 'full',
              id: normalized.id,
              // Use normalized.id (fixed)
              method: fixedMethod,
              // Use fixed method from normalized
              card: normalized,
              // Pass normalized instead of this.data
              source: normalized.source || 'tmdb',
              season: normalized.season,
              episode: normalized.episode
            });
          }
        }
      };
      return normalized;
    });
  }

  /**
   * Filter items by content type
   * @param {Array} items - Array of items to filter
   * @param {string} filterType - Type to filter: 'movie', 'tv', 'show'
   * @returns {Array} - Filtered items
   */
  function filterByContentType(items, filterType) {
    return items.filter(function (item) {
      var type = getContentType(item);
      if (filterType === 'tv') {
        return type === 'tv' || type === 'show';
      }
      return type === filterType;
    });
  }

  var STORAGE_KEY = 'appletv_topshelf';
  var CUSTOM_KEY = 'appletv_topshelf_custom';
  var SETTINGS_KEY = 'trakttv_topshelf';
  var ROW_UPNEXT = 'content_rows_TraktUpNextRow';
  var ROW_RECOMMENDATIONS = 'content_rows_TraktRecommendationsRow';
  var MAX_ITEMS = 10;
  var sectionsState = {
    upnext: null,
    recommendations: null
  };
  var listenersBound = false;
  function isEnabled() {
    if (!Lampa || !Lampa.Platform || !Lampa.Storage) return false;
    return Lampa.Platform.is('apple_tv') === true && Lampa.Storage.field(SETTINGS_KEY);
  }
  function syncCustomFlag(enabled) {
    if (typeof localStorage === 'undefined') return;
    try {
      if (enabled) localStorage.setItem(CUSTOM_KEY, 'true');else localStorage.removeItem(CUSTOM_KEY);
    } catch (error) {
      logWarn('TopShelf custom flag update failed', error, {
        debugOnly: true
      });
    }
  }
  function isRowEnabled(key) {
    var value = Lampa.Storage.get(key, 'true');
    return value === true || value === 'true';
  }
  function normalizeUrl(url) {
    if (!url) return '';
    if (String(url).startsWith('http')) return url;
    return 'https://' + String(url).replace(/^\/+/, '');
  }
  function getItemTitle(item) {
    return item.title || item.name || item.original_title || item.original_name || '';
  }
  function getItemMedia(item) {
    var type = item.method || item.card_type || item.type;
    return type === 'movie' ? 'movie' : 'tv';
  }
  function getItemImage(item, shape) {
    if (shape === 'poster') return normalizeUrl(item.poster || item.image);
    return normalizeUrl(item.image || item.poster);
  }
  function mapItems(items, shape) {
    return items.slice(0, MAX_ITEMS).map(function (item) {
      var id = item.id;
      var title = getItemTitle(item);
      var media = getItemMedia(item);
      var imageURL = getItemImage(item, shape);
      var source = item.source || 'tmdb';
      if (!id || !title || !imageURL) return null;
      return {
        id: String(id),
        title: title,
        imageURL: imageURL,
        deepLink: "lampa://topshelf?card=".concat(encodeURIComponent(id), "&media=").concat(encodeURIComponent(media), "&source=").concat(encodeURIComponent(source))
      };
    }).filter(Boolean);
  }
  function buildSections() {
    var sections = [];
    if (isRowEnabled(ROW_UPNEXT) && Array.isArray(sectionsState.upnext) && sectionsState.upnext.length) {
      sections.push({
        title: Lampa.Lang.translate('trakttv_upnext'),
        imageShape: 'poster',
        items: mapItems(sectionsState.upnext, 'poster')
      });
    }
    if (isRowEnabled(ROW_RECOMMENDATIONS) && Array.isArray(sectionsState.recommendations) && sectionsState.recommendations.length) {
      sections.push({
        title: Lampa.Lang.translate('trakttv_recommendations'),
        imageShape: 'poster',
        items: mapItems(sectionsState.recommendations, 'poster')
      });
    }
    return sections.filter(function (section) {
      return section.items && section.items.length;
    });
  }
  function writePayload() {
    if (typeof localStorage === 'undefined') return;
    var sections = buildSections();
    if (!sections.length) return;
    var payload = {
      updatedAt: Math.floor(Date.now() / 1000),
      sections: sections
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      if (typeof window !== 'undefined' && window.location && window.location.assign) {
        window.location.assign('lampa://topshelfupdate');
      }
    } catch (error) {
      logWarn('TopShelf payload update failed', error, {
        debugOnly: true
      });
    }
  }
  function bindTopshelfListeners() {
    if (listenersBound || typeof window === 'undefined') return;
    listenersBound = true;
    window.addEventListener('appletv:app-background', function () {
      if (!isEnabled()) return;
      writePayload();
    });
    window.addEventListener('appletv:app-request-topshelf-update', function () {
      if (!isEnabled()) return;
      writePayload();
    });
    if (Lampa.Storage && Lampa.Storage.listener) {
      Lampa.Storage.listener.follow('change', function (e) {
        if (e && e.name === SETTINGS_KEY) {
          syncCustomFlag(isEnabled());
        }
      });
    }
  }
  function updateTopshelf(section, items) {
    if (!isEnabled()) {
      syncCustomFlag(false);
      return;
    }
    if (!sectionsState.hasOwnProperty(section)) return;
    sectionsState[section] = Array.isArray(items) ? items : [];
    syncCustomFlag(true);
    bindTopshelfListeners();
    writePayload();
  }

  // Local safe resolver for Api
  var Api = typeof api$1 !== 'undefined' && api$1 || window.TraktTV && window.TraktTV.api || null;
  var initialized = false;
  var UI_DEADLINE_MAIN_MS = 2800;
  var UI_DEADLINE_CATEGORY_MS = 3200;
  var STALE_CACHE_TTL_MS = 1000 * 60 * 60 * 6;
  var STORAGE_CACHE_PREFIX = 'trakttv_row_cache_v1_';
  var SOURCE_FILTER_FIELDS = ['trakt_source_ignore_watched', 'trakt_source_ignore_watchlisted'];
  function getUiDeadline(screen) {
    return screen === 'main' ? UI_DEADLINE_MAIN_MS : UI_DEADLINE_CATEGORY_MS;
  }
  function getAuthFingerprint() {
    try {
      if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return 'anon';
      var accessToken = String(Lampa.Storage.get('trakt_token') || '');
      var refreshToken = String(Lampa.Storage.get('trakt_refresh_token') || '');
      var token = accessToken || refreshToken;
      if (!token) return 'anon';
      return 't' + token.length + '_' + token.slice(-8);
    } catch (error) {
      return 'anon';
    }
  }
  function parseBooleanValue(value) {
    if (typeof value === 'boolean') return value;
    if (value === 1 || value === '1' || value === 'true') return true;
    if (value === 0 || value === '0' || value === 'false') return false;
    return null;
  }
  function readBooleanStorage$1(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var direct = parseBooleanValue(Lampa.Storage.get(name));
        if (direct !== null) return direct;
      }
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var fromField = parseBooleanValue(Lampa.Storage.field(name));
        if (fromField !== null) return fromField;
      }
    } catch (error) {
      return fallback;
    }
    return fallback;
  }
  function getSourceFilterFingerprint() {
    var ignoreWatched = readBooleanStorage$1('trakt_source_ignore_watched', false) ? '1' : '0';
    var ignoreWatchlisted = readBooleanStorage$1('trakt_source_ignore_watchlisted', false) ? '1' : '0';
    return "iw:".concat(ignoreWatched, "|iwl:").concat(ignoreWatchlisted);
  }
  function buildRowCacheKey(config, params, screen) {
    var rowName = config && config.name ? config.name : 'unknown';
    var categoryContext = params && params.url ? String(params.url) : '';
    var authFingerprint = getAuthFingerprint();
    var filtersFingerprint = getSourceFilterFingerprint();
    return STORAGE_CACHE_PREFIX + [rowName, screen || 'unknown', categoryContext, authFingerprint, filtersFingerprint].join('|');
  }
  function toCacheLine(line) {
    var cached = Object.assign({}, line);
    delete cached.onMore;
    return cached;
  }
  function saveRowToCache(cacheKey, line) {
    if (!line || !Array.isArray(line.results) || !line.results.length) return;
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      Lampa.Storage.set(cacheKey, {
        time: Date.now(),
        line: toCacheLine(line)
      });
    } catch (error) {
      logWarn('Rows cache save failed', error, {
        debugOnly: true
      });
    }
  }
  function clearRowCache(cacheKey) {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      Lampa.Storage.set(cacheKey, null);
    } catch (error) {
      logWarn('Rows cache clear failed', error, {
        debugOnly: true
      });
    }
  }
  function loadRowFromCache(cacheKey) {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.get !== 'function') return null;
    try {
      var cached = Lampa.Storage.get(cacheKey);
      var time = Number(cached && cached.time || 0);
      var line = cached && cached.line;
      if (!time || !line || !Array.isArray(line.results) || !line.results.length) return null;
      if (Date.now() - time > STALE_CACHE_TTL_MS) return null;
      return line;
    } catch (error) {
      logWarn('Rows cache load failed', error, {
        debugOnly: true
      });
      return null;
    }
  }
  function clearAllRowCaches() {
    if (!Lampa || !Lampa.Storage || typeof Lampa.Storage.set !== 'function') return;
    try {
      var keys = typeof localStorage !== 'undefined' ? Object.keys(localStorage) : [];
      keys.forEach(function (key) {
        if (String(key || '').indexOf(STORAGE_CACHE_PREFIX) !== 0) return;
        Lampa.Storage.set(key, null);
      });
    } catch (error) {
      logWarn('Rows cache bulk clear failed', error, {
        debugOnly: true
      });
    }
  }
  function createOnMoreHandler(config) {
    return function () {
      Lampa.Activity.push({
        title: config.displayTitle,
        component: config.component,
        page: 1
      });
    };
  }
  function attachOnMore(line, config) {
    if (!line) return null;
    var payload = Object.assign({}, line);
    payload.onMore = createOnMoreHandler(config);
    return payload;
  }
  function createRowPayload(config, data, normalizedResults) {
    return {
      title: config.displayTitle,
      trakt_line: true,
      trakt_line_title: config.displayTitle,
      trakt_more_component: config.component,
      trakt_more_title: config.displayTitle,
      trakt_row: config.traktRow || '',
      source: 'tmdb',
      page: data && data.page ? data.page : 1,
      total_pages: data && data.total_pages ? data.total_pages : 1,
      results: normalizedResults
    };
  }

  /**
   * Initialize ContentRows for TraktTV plugin (Lampa 3.0+)
   * Registers content rows for main and category screens
   */
  function initContentRows() {
    if (initialized) return;
    if (!Lampa || !Lampa.ContentRows || typeof Lampa.ContentRows.add !== 'function') return;
    initialized = true;

    // Cleanup deprecated cache keys
    Lampa.Storage.set('trakttv_cached_upnext', null);
    Lampa.Storage.set('trakttv_cached_recommendations', null);
    clearAllRowCaches();
    registerLineTitleDecorator();
    registerSourceFiltersCacheInvalidation();
    registerRows();
    registerCalendarRows();
    registerDvdRows();
  }
  function registerSourceFiltersCacheInvalidation() {
    if (!Lampa || !Lampa.Storage || !Lampa.Storage.listener || typeof Lampa.Storage.listener.follow !== 'function') return;
    Lampa.Storage.listener.follow('change', function (event) {
      var name = event && event.name ? String(event.name) : '';
      if (!name || SOURCE_FILTER_FIELDS.indexOf(name) === -1) return;
      clearAllRowCaches();
    });
  }
  function registerLineTitleDecorator() {
    Lampa.Listener.follow('line', function (e) {
      if (!e || e.type !== 'create' || !e.data || !e.data.trakt_line) return;
      try {
        var titleNode = icons.createLineTitle(e.data.trakt_line_title || e.data.title || '');
        var container = e.line && e.line.render ? e.line.render().find('.items-line__title') : null;
        if (container && container.length) container.empty().append(titleNode);
        if (e.line && typeof e.line.use === 'function' && e.data.trakt_more_component) {
          e.line.use({
            onlyMore: function onlyMore() {
              Lampa.Activity.push({
                title: e.data.trakt_more_title || e.data.title || '',
                component: e.data.trakt_more_component,
                page: 1,
                source: e.data.source || 'tmdb'
              });
            }
          });
        }
      } catch (error) {
        logError('Line title decorate failed', error, {
          debugOnly: true
        });
      }
    });
  }
  function createRowCall(config) {
    return function (params, screen) {
      if (typeof config.visibleOn === 'function' && !config.visibleOn(params, screen)) return;
      if (typeof config.checkPermission === 'function' && !config.checkPermission()) return;
      var rowLimit = Math.max(1, parseInt(config.limit, 10) || 20);
      var rowDisplayLimit = Math.max(1, parseInt(config.displayLimit, 10) || 0);
      return function (call) {
        if (!Api || typeof Api[config.apiMethod] !== 'function') {
          logWarn('Row API method unavailable', {
            row: config.name
          }, {
            debugOnly: true
          });
          return call();
        }
        var cacheKey = buildRowCacheKey(config, params, screen);
        var staleLine = attachOnMore(loadRowFromCache(cacheKey), config);
        var deadline = getUiDeadline(screen);
        var done = false;
        var timeoutId = null;
        var finish = function finish(line) {
          if (done) return;
          done = true;
          if (timeoutId) clearTimeout(timeoutId);
          if (line && Array.isArray(line.results) && line.results.length) call(line);else call();
        };
        timeoutId = setTimeout(function () {
          finish(staleLine);
        }, deadline);
        Api[config.apiMethod]({
          limit: rowLimit,
          page: 1
        }).then(function (data) {
          var results = data && Array.isArray(data.results) ? data.results : [];
          var filtered = typeof config.filter === 'function' ? config.filter(results, params, screen) : results;
          if (!filtered || !filtered.length) {
            clearRowCache(cacheKey);
            if (!done) finish(null);
            return;
          }
          var limitedResults = rowDisplayLimit > 0 ? filtered.slice(0, rowDisplayLimit) : filtered;
          var normalizedResults = normalizeContentData(limitedResults);
          if (screen === 'main' && config.topshelf) {
            updateTopshelf(config.topshelf, filtered);
          }
          var line = createRowPayload(config, data, normalizedResults);
          saveRowToCache(cacheKey, line);
          if (!done) finish(attachOnMore(line, config));
        }).catch(function (error) {
          logWarn('Row load failed', {
            row: config.name,
            error: error
          }, {
            debugOnly: true
          });
          if (!done) finish(staleLine);
        });
      };
    };
  }
  function registerRows() {
    var rows = [{
      name: 'TraktUpNextRow',
      title: Lampa.Lang.translate('trakttv_row_upnext'),
      index: 1,
      screen: ['main', 'category'],
      displayTitle: Lampa.Lang.translate('trakttv_upnext'),
      apiMethod: 'upnext',
      component: 'trakt_upnext',
      limit: 36,
      displayLimit: 20,
      topshelf: 'upnext',
      traktRow: 'upnext',
      checkPermission: checkUpNextPermissions,
      visibleOn: function visibleOn(params, screen) {
        return screen !== 'category' || params.url === 'tv';
      }
    }, {
      name: 'TraktRecommendationsRow',
      title: Lampa.Lang.translate('trakttv_row_recommendations_main'),
      index: 2,
      screen: ['main'],
      displayTitle: Lampa.Lang.translate('trakttv_recommendations'),
      apiMethod: 'recommendations',
      component: 'trakttv_recommendations',
      limit: 36,
      displayLimit: 20,
      topshelf: 'recommendations',
      checkPermission: checkRecommendationsPermissions,
      visibleOn: function visibleOn() {
        return true;
      }
    }, {
      name: 'TraktRecommendationsRowMovie',
      title: Lampa.Lang.translate('trakttv_row_recommendations_movie'),
      index: 2,
      screen: ['category'],
      displayTitle: Lampa.Lang.translate('trakttv_recommendations'),
      apiMethod: 'recommendations',
      component: 'trakttv_recommendations',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkRecommendationsPermissions,
      visibleOn: function visibleOn(params) {
        return params.url === 'movie';
      },
      filter: function filter(results) {
        return filterByContentType(results, 'movie');
      }
    }, {
      name: 'TraktRecommendationsRowTv',
      title: Lampa.Lang.translate('trakttv_row_recommendations_tv'),
      index: 2,
      screen: ['category'],
      displayTitle: Lampa.Lang.translate('trakttv_recommendations'),
      apiMethod: 'recommendations',
      component: 'trakttv_recommendations',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkRecommendationsPermissions,
      visibleOn: function visibleOn(params) {
        return params.url === 'tv';
      },
      filter: function filter(results) {
        return filterByContentType(results, 'tv');
      }
    }];
    rows.forEach(function (row) {
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen,
        call: createRowCall(row)
      });
    });
  }

  /**
   * Register Calendar rows with Episode card format
   * (same look as title_upcoming_episodes / title_recent_episodes)
   */
  function registerCalendarRows() {
    if (!Api || typeof Api.get !== 'function') return;
    var ROW_LIMIT = 20;

    /**
     * Build a calendar API call handler for a given screen filter
     */
    function createCalendarCall(screenFilter) {
      return function (params, screen) {
        // Permission: needs Trakt auth
        if (!Lampa.Storage.get('trakt_token')) return;

        // Screen-specific visibility
        if (typeof screenFilter === 'function' && !screenFilter(params, screen)) return;
        return function (call) {
          var now = new Date();
          var startDate = new Date(now);
          startDate.setDate(now.getDate() - 3);
          var yyyy = startDate.getFullYear();
          var mm = String(startDate.getMonth() + 1).padStart(2, '0');
          var dd = String(startDate.getDate()).padStart(2, '0');
          var dateString = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
          var days = 7;
          Api.get("/calendars/my/shows/".concat(dateString, "/").concat(days, "?extended=full,images")).then(function (response) {
            var raw = Array.isArray(response) ? response : [];

            // Group by show TMDB ID (deduplicate — one card per show)
            var showMap = {};
            raw.forEach(function (item) {
              var show = item && item.show;
              var episode = item && item.episode;
              if (!show || !show.ids) return;
              var tmdbId = show.ids.tmdb;
              if (!tmdbId) return;
              if (!showMap[tmdbId]) {
                showMap[tmdbId] = {
                  show: show,
                  first_aired: item.first_aired,
                  episode: episode
                };
              }
            });
            var shows = Object.values(showMap);

            // Sort by first_aired ascending (earliest upcoming first)
            shows.sort(function (a, b) {
              return (a.first_aired || '').localeCompare(b.first_aired || '');
            });

            // Resolve Episode interaction & Module from Lampa runtime
            var EpisodeClass = Lampa.Maker && Lampa.Maker.get('Episode');
            var EpisodeModule = Lampa.Maker && Lampa.Maker.module('Episode');
            var moduleMask = EpisodeModule ? EpisodeModule.only('Card', 'Callback') : undefined;
            var selectedShows = shows.slice(0, ROW_LIMIT);

            // Build base episode-card items (still_path will be filled from TMDB)
            var baseResults = selectedShows.map(function (item) {
              var show = item.show;
              var first_aired = item.first_aired;
              var episode = item.episode;
              var airDate = first_aired ? String(first_aired).slice(0, 10) : '';
              var airTime = airDate ? Lampa.Utils.parseToDate(airDate).getTime() : Date.now();
              var card = {
                id: show.ids.tmdb,
                ids: show.ids,
                title: show.title,
                original_title: show.title,
                original_name: show.title,
                name: show.title,
                poster: getImageUrl(show, 'poster'),
                image: getImageUrl(show, 'fanart'),
                source: 'tmdb'
              };
              var epData = {
                air_date: airDate,
                season_number: episode ? episode.season : null,
                episode_number: episode ? episode.number : null,
                name: episode ? episode.title : '',
                still_path: ''
              };
              var out = {
                card: card,
                episode: epData,
                time: airTime,
                title: show.title,
                id: show.ids.tmdb,
                ids: show.ids,
                params: {}
              };

              // Copy episode fields to root
              Lampa.Arrays && Lampa.Arrays.extend ? Lampa.Arrays.extend(out, epData) : Object.keys(epData).forEach(function (k) {
                out[k] = epData[k];
              });

              // Episode interaction
              if (EpisodeClass) {
                out.params.createInstance = function (data) {
                  var merged = _typeof(data) === 'object' && data !== null ? Object.assign({}, data, data.episode || {}, {
                    card: data.card || data
                  }) : {};
                  return new EpisodeClass(merged);
                };
              }
              if (moduleMask) {
                out.params.module = moduleMask;
              }
              out.params.emit = {
                onlyEnter: function onlyEnter() {
                  Lampa.Activity.push({
                    url: '',
                    component: 'full',
                    id: card.id,
                    method: 'tv',
                    card: card,
                    source: 'tmdb'
                  });
                },
                onlyFocus: function onlyFocus() {
                  if (Lampa.Utils && Lampa.Utils.cardImgBackgroundBlur) {
                    Lampa.Background.change(Lampa.Utils.cardImgBackgroundBlur(card));
                  }
                }
              };
              return out;
            });

            // Fetch episode stills from TMDB in parallel (silent, each fails to empty string)
            var stillPromises = selectedShows.map(function (item) {
              var showTmdbId = item.show && item.show.ids && item.show.ids.tmdb;
              var seasonNum = item.episode && item.episode.season;
              var epNum = item.episode && item.episode.number;
              if (!showTmdbId || seasonNum == null || epNum == null) return Promise.resolve('');
              return new Promise(function (resolve) {
                try {
                  var url = Lampa.TMDB.api('tv/' + showTmdbId + '/season/' + seasonNum + '/episode/' + epNum + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'en'));
                  var network = new Lampa.Reguest();
                  network.silent(url, function (data) {
                    resolve(data && data.still_path ? String(data.still_path) : '');
                  }, function () {
                    resolve('');
                  });
                } catch (e) {
                  resolve('');
                }
              });
            });
            return Promise.all(stillPromises).then(function (stillPaths) {
              // Merge still_path into results
              baseResults.forEach(function (out, index) {
                var path = stillPaths[index];
                if (path) {
                  out.still_path = path;
                  out.episode.still_path = path;
                }
              });
              if (!baseResults.length) return call();
              call({
                results: baseResults,
                title: Lampa.Lang.translate('trakttv_calendar'),
                trakt_line: true,
                trakt_line_title: Lampa.Lang.translate('trakttv_calendar')
              });
            });
          }).catch(function () {
            call();
          });
        };
      };
    }

    // Row: main screen (always visible when authed)
    Lampa.ContentRows.add({
      name: 'TraktCalendarRow',
      title: Lampa.Lang.translate('trakttv_row_calendar_main'),
      index: 3,
      screen: ['main'],
      call: createCalendarCall(function () {
        return true;
      })
    });

    // Row: category / tv screen (only on tv URL)
    Lampa.ContentRows.add({
      name: 'TraktCalendarRowTv',
      title: Lampa.Lang.translate('trakttv_row_calendar_tv'),
      index: 3,
      screen: ['category'],
      call: createCalendarCall(function (params) {
        return params && params.url === 'tv';
      })
    });
  }

  /**
   * Register DVD calendar rows (standard poster cards)
   * Uses /calendars/all/dvd/{start_date}/{days} via createRowCall
   */
  function registerDvdRows() {
    var dvdRows = [{
      name: 'TraktDvdCalendarRow',
      title: Lampa.Lang.translate('trakttv_row_dvd_calendar_main'),
      index: 3,
      screen: ['main'],
      displayTitle: Lampa.Lang.translate('trakttv_calendar') + ' DVD',
      apiMethod: 'dvdCalendar',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkCalendarPermissions,
      visibleOn: function visibleOn() {
        return true;
      }
    }, {
      name: 'TraktDvdCalendarRowMovies',
      title: Lampa.Lang.translate('trakttv_row_dvd_calendar_movies'),
      index: 3,
      screen: ['category'],
      displayTitle: Lampa.Lang.translate('trakttv_calendar') + ' DVD',
      apiMethod: 'dvdCalendar',
      limit: 36,
      displayLimit: 20,
      checkPermission: checkCalendarPermissions,
      visibleOn: function visibleOn(params) {
        return params && params.url === 'movie';
      }
    }];
    dvdRows.forEach(function (row) {
      Lampa.ContentRows.add({
        name: row.name,
        title: row.title,
        index: row.index,
        screen: row.screen,
        call: createRowCall(row)
      });
    });
  }

  var SOURCE_KEY = 'trakttv';
  var DEFAULT_LIMIT = 20;
  var DEFAULT_CHUNK = 3;
  var TRAKT_TRENDING_GENRES = [{
    name: 'Action',
    slug: 'action',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Adventure',
    slug: 'adventure',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Animation',
    slug: 'animation',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Anime',
    slug: 'anime',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Biography',
    slug: 'biography',
    supported_types: ['shows']
  }, {
    name: 'Children',
    slug: 'children',
    supported_types: ['shows']
  }, {
    name: 'Comedy',
    slug: 'comedy',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Crime',
    slug: 'crime',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Documentary',
    slug: 'documentary',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Donghua',
    slug: 'donghua',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Drama',
    slug: 'drama',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Family',
    slug: 'family',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Fantasy',
    slug: 'fantasy',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Game Show',
    slug: 'game-show',
    supported_types: ['shows']
  }, {
    name: 'History',
    slug: 'history',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Holiday',
    slug: 'holiday',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Home And Garden',
    slug: 'home-and-garden',
    supported_types: ['shows']
  }, {
    name: 'Horror',
    slug: 'horror',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Mini Series',
    slug: 'mini-series',
    supported_types: ['shows']
  }, {
    name: 'Music',
    slug: 'music',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Musical',
    slug: 'musical',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Mystery',
    slug: 'mystery',
    supported_types: ['movies', 'shows']
  }, {
    name: 'News',
    slug: 'news',
    supported_types: ['shows']
  }, {
    name: 'None',
    slug: 'none',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Reality',
    slug: 'reality',
    supported_types: ['shows']
  }, {
    name: 'Romance',
    slug: 'romance',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Science Fiction',
    slug: 'science-fiction',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Short',
    slug: 'short',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Soap',
    slug: 'soap',
    supported_types: ['shows']
  }, {
    name: 'Special Interest',
    slug: 'special-interest',
    supported_types: ['shows']
  }, {
    name: 'Sporting Event',
    slug: 'sporting-event',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Superhero',
    slug: 'superhero',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Suspense',
    slug: 'suspense',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Talk Show',
    slug: 'talk-show',
    supported_types: ['shows']
  }, {
    name: 'Thriller',
    slug: 'thriller',
    supported_types: ['movies', 'shows']
  }, {
    name: 'War',
    slug: 'war',
    supported_types: ['movies', 'shows']
  }, {
    name: 'Western',
    slug: 'western',
    supported_types: ['movies', 'shows']
  }];
  var TRAKT_TRENDING_GENRE_SLUGS = new Set(TRAKT_TRENDING_GENRES.map(function (genre) {
    return String(genre && genre.slug ? genre.slug : '').trim().toLowerCase();
  }).filter(Boolean));
  function t(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    try {
      var translated = Lampa.Lang.translate(key);
      return translated || fallback || key;
    } catch (e) {
      return fallback || key;
    }
  }
  function decodeQuery(value) {
    if (value === undefined || value === null) return '';
    if (_typeof(value) === 'object') return '';
    var source = String(value || '').trim();
    if (!source) return '';
    if (source === '[object Object]') return '';
    try {
      var decoded = decodeURIComponent(source);
      var normalized = String(decoded || '').trim();
      if (!normalized || normalized === '[object Object]') return '';
      return normalized;
    } catch (e) {
      return source === '[object Object]' ? '' : source;
    }
  }
  function toPositiveInt(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }
  function toNonNegativeInt(value) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
  }
  function readBooleanStorage(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parse = function parse(value) {
      if (typeof value === 'boolean') return value;
      if (value === 1 || value === '1' || value === 'true') return true;
      if (value === 0 || value === '0' || value === 'false') return false;
      return null;
    };
    try {
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.get === 'function') {
        var direct = parse(Lampa.Storage.get(name));
        if (direct !== null) return direct;
      }
      if (Lampa && Lampa.Storage && typeof Lampa.Storage.field === 'function') {
        var fromField = parse(Lampa.Storage.field(name));
        if (fromField !== null) return fromField;
      }
    } catch (error) {
      return fallback;
    }
    return fallback;
  }
  function resolvePagination() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var fallbackPage = toPositiveInt(page) || 1;
    var fallbackLimit = toPositiveInt(limit) || DEFAULT_LIMIT;
    var safeCount = Math.max(0, parseInt(count, 10) || 0);
    var headerPage = toPositiveInt(headers['x-pagination-page']) || fallbackPage;
    var headerLimit = toPositiveInt(headers['x-pagination-limit']) || fallbackLimit;
    var headerTotal = toNonNegativeInt(headers['x-pagination-item-count']);
    var headerPageCount = toPositiveInt(headers['x-pagination-page-count']);
    var total = headerTotal !== null ? headerTotal : (Math.max(1, headerPage) - 1) * Math.max(1, headerLimit) + safeCount;
    var totalPages = headerPageCount || (safeCount >= headerLimit ? headerPage + 1 : Math.max(1, headerPage));
    return {
      page: headerPage,
      limit: headerLimit,
      total: total,
      total_pages: totalPages
    };
  }
  function normalizeSearchType() {
    var rawType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var value = String(rawType || '').trim().toLowerCase();
    if (value === 'movie' || value === 'movies') return 'movie';
    if (value === 'tv' || value === 'show' || value === 'shows' || value === 'series') return 'show';
    if (value === 'list' || value === 'lists') return 'list';
    return '';
  }
  function normalizePath() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return String(path || '').trim().replace(/^\/+/, '');
  }
  function applyQueryParams(query) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!params || _typeof(params) !== 'object') return query;
    Object.keys(params).forEach(function (key) {
      var value = params[key];
      if (value === undefined || value === null || value === '') return;
      var normalizedKey = String(key || '').trim();
      if (!normalizedKey || normalizedKey === '[object Object]') return;
      if (_typeof(value) === 'object') return;
      var normalizedValue = String(value).trim();
      if (!normalizedValue || normalizedValue === '[object Object]') return;
      query.set(normalizedKey, normalizedValue);
    });
    return query;
  }
  function applySourceFilters(query) {
    query.set('ignore_watched', readBooleanStorage('trakt_source_ignore_watched', false) ? 'true' : 'false');
    query.set('ignore_watchlisted', readBooleanStorage('trakt_source_ignore_watchlisted', false) ? 'true' : 'false');
    return query;
  }
  function buildFeedUrl(path) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var queryParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var query = applyQueryParams(applySourceFilters(new URLSearchParams({
      extended: 'full,images',
      page: String(Math.max(1, parseInt(page, 10) || 1)),
      limit: String(Math.max(1, parseInt(limit, 10) || DEFAULT_LIMIT))
    })), queryParams);
    return "/".concat(normalizePath(path), "?").concat(query.toString());
  }
  function buildRecommendationsUrl(type) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var queryParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var normalizedType = normalizePath(type).replace(/^recommendations\//, '');
    var query = applyQueryParams(applySourceFilters(new URLSearchParams({
      extended: 'full,images',
      page: String(Math.max(1, parseInt(page, 10) || 1)),
      limit: String(Math.max(1, parseInt(limit, 10) || DEFAULT_LIMIT))
    })), queryParams);
    query.set('ignore_collected', readBooleanStorage('trakt_source_ignore_watchlisted', false) ? 'true' : 'false');
    return "/recommendations/".concat(normalizedType, "?").concat(query.toString());
  }
  function buildSearchUrl(type, query) {
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LIMIT;
    var queryParams = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var normalizedQuery = decodeQuery(query);
    if (!normalizedQuery) return '';
    var finalParams = applyQueryParams(applySourceFilters(new URLSearchParams({
      query: normalizedQuery,
      extended: 'full,images',
      page: String(Math.max(1, parseInt(page, 10) || 1)),
      limit: String(Math.max(1, parseInt(limit, 10) || DEFAULT_LIMIT))
    })), queryParams);
    return "/search/".concat(normalizePath(type), "?").concat(finalParams.toString());
  }
  function normalizeTraktGenreValue(value) {
    var normalized = String(value || '').trim().toLowerCase();
    if (!normalized || normalized === '[object object]') return '';
    if (normalized === '16') return 'animation';
    if (/^\d+$/.test(normalized)) return '';
    if (TRAKT_TRENDING_GENRE_SLUGS.has(normalized)) return normalized;
    if (/^[a-z0-9-]+$/.test(normalized)) return normalized;
    return '';
  }
  function resolveTraktGenreFilter() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var raw = params ? params.genres : null;
    if (raw === undefined || raw === null || raw === '') return '';
    var values = Array.isArray(raw) ? raw : String(raw).split(',');
    var normalizedValues = values.map(function (value) {
      return normalizeTraktGenreValue(value);
    }).filter(Boolean);
    if (!normalizedValues.length) return '';
    return Array.from(new Set(normalizedValues)).join(',');
  }
  function supportsAllGenreTypes() {
    var genre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var requiredTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!Array.isArray(requiredTypes) || !requiredTypes.length) return true;
    var supportedTypes = Array.isArray(genre.supported_types) ? genre.supported_types : [];
    return requiredTypes.every(function (type) {
      return supportedTypes.indexOf(type) > -1;
    });
  }
  function buildTrendingGenreDefinitions(path, typeHint) {
    var requiredTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var trendingTitle = t('trakttv_source_trending', 'Trending');
    return TRAKT_TRENDING_GENRES.filter(function (genre) {
      return supportsAllGenreTypes(genre, requiredTypes);
    }).map(function (genre) {
      return {
        path: path,
        title: "".concat(trendingTitle, ": ").concat(genre.name),
        typeHint: typeHint,
        query: {
          genres: genre.slug
        },
        lazy: true
      };
    });
  }
  function detectMediaType(entry) {
    var typeHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var normalizedHint = String(typeHint || '').toLowerCase();
    if (normalizedHint === 'movie' || normalizedHint === 'movies') return 'movie';
    if (normalizedHint === 'show' || normalizedHint === 'shows' || normalizedHint === 'tv') return 'tv';
    if (entry && _typeof(entry) === 'object') {
      if (entry.movie) return 'movie';
      if (entry.show) return 'tv';
      if (entry.type === 'movie') return 'movie';
      if (entry.type === 'show' || entry.type === 'tv') return 'tv';
      if (entry.first_aired || entry.aired_episodes !== undefined) return 'tv';
    }
    return 'movie';
  }
  function mapMediaCard(entry) {
    var typeHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (!entry || _typeof(entry) !== 'object') return null;
    var media = entry.movie || entry.show || entry;
    if (!media || _typeof(media) !== 'object') return null;
    var ids = media.ids && _typeof(media.ids) === 'object' ? _objectSpread2({}, media.ids) : {};
    var mediaType = detectMediaType(entry, typeHint);
    var id = ids.tmdb || null;
    if (!id) return null;
    var title = media.title || media.name || media.original_title || '';
    var releaseDate = mediaType === 'movie' ? media.released || (media.year ? String(media.year) : '') : media.first_aired || (media.year ? String(media.year) : '');
    var poster = getImageUrl(media, 'poster') || getImageUrl(media, 'thumb') || getImageUrl(media, 'fanart') || textToImage(title || 'No image');
    var fanart = getImageUrl(media, 'fanart') || getImageUrl(media, 'thumb') || poster;
    var card = {
      component: 'full',
      source: 'tmdb',
      id: id,
      ids: ids,
      title: title,
      original_title: media.original_title || title,
      release_date: releaseDate ? String(releaseDate) : '',
      vote_average: Number(media.rating || 0),
      vote_count: Number(media.votes || 0),
      overview: media.overview || '',
      poster: poster,
      image: fanart,
      method: mediaType === 'movie' ? 'movie' : 'tv',
      card_type: mediaType === 'movie' ? 'movie' : 'tv'
    };
    if (mediaType === 'movie') {
      card.type = 'movie';
    } else {
      card.type = 'tv';
      card.name = title;
      card.original_name = media.original_title || title;
    }
    if (ids.imdb) card.imdb_id = ids.imdb;
    if (media.runtime) card.runtime = Number(media.runtime) || 0;
    if (media.year) card.release_year = String(media.year);
    return card;
  }
  function mapListCard(entry) {
    if (!entry || _typeof(entry) !== 'object') return null;
    var list = entry.list || entry;
    var ids = list.ids && _typeof(list.ids) === 'object' ? _objectSpread2({}, list.ids) : {};
    var listId = ids.trakt || list.id;
    if (!listId) return null;
    var title = (list.name || list.title || list.slug || "List ".concat(listId)).toString().trim();
    return {
      component: 'full',
      source: SOURCE_KEY,
      id: "trakt_list_".concat(listId),
      title: title,
      original_title: title,
      release_date: '',
      vote_average: 0,
      poster: getImageUrl(list, 'poster') || textToImage(title || 'List'),
      image: getImageUrl(list, 'fanart'),
      method: 'list',
      card_type: 'list',
      trakt_search_type: 'list',
      trakt_list_id: listId,
      list_id: listId,
      ids: ids
    };
  }
  function mapCards(items) {
    var typeHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var source = Array.isArray(items) ? items : [];
    var normalizedHint = String(typeHint || '').toLowerCase();
    if (normalizedHint === 'list') {
      return source.map(mapListCard).filter(Boolean);
    }
    return source.map(function (entry) {
      return mapMediaCard(entry, normalizedHint);
    }).filter(Boolean);
  }
  function fetchWithMeta(url) {
    return requestApi('GET', url, {}, false, 0, {
      withMeta: true
    }).then(function (response) {
      var data = response && Array.isArray(response.data) ? response.data : [];
      var headers = response && response.headers ? response.headers : {};
      return {
        data: data,
        headers: headers
      };
    });
  }
  function createLinePayload(_ref) {
    var title = _ref.title,
      path = _ref.path,
      items = _ref.items,
      headers = _ref.headers,
      page = _ref.page,
      limit = _ref.limit,
      typeHint = _ref.typeHint,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? {} : _ref$query;
    var results = mapCards(items, typeHint);
    var pagination = resolvePagination(headers, page, limit, Array.isArray(items) ? items.length : 0);
    var line = {
      title: title,
      url: normalizePath(path),
      source: SOURCE_KEY,
      page: pagination.page,
      total: pagination.total,
      total_pages: pagination.total_pages,
      results: results
    };
    var genres = query && _typeof(query) === 'object' ? String(query.genres || '').trim() : '';
    if (genres) line.genres = genres;
    return line;
  }
  function loadFeedLine(_ref2) {
    var path = _ref2.path,
      title = _ref2.title,
      _ref2$typeHint = _ref2.typeHint,
      typeHint = _ref2$typeHint === void 0 ? 'media' : _ref2$typeHint,
      _ref2$recommendations = _ref2.recommendations,
      recommendations = _ref2$recommendations === void 0 ? false : _ref2$recommendations,
      _ref2$query = _ref2.query,
      query = _ref2$query === void 0 ? {} : _ref2$query;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
    var endpoint = recommendations ? buildRecommendationsUrl(path, page, limit, query) : buildFeedUrl(path, page, limit, query);
    return fetchWithMeta(endpoint).then(function (_ref3) {
      var data = _ref3.data,
        headers = _ref3.headers;
      return createLinePayload({
        title: title,
        path: path,
        items: data,
        headers: headers,
        page: page,
        limit: limit,
        typeHint: typeHint,
        query: query
      });
    });
  }
  function loadSearchLine(type, query) {
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LIMIT;
    var extraQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var normalizedType = normalizeSearchType(type);
    var normalizedQuery = decodeQuery(query);
    if (!normalizedType || !normalizedQuery) return Promise.resolve(null);
    var endpoint = buildSearchUrl(normalizedType, normalizedQuery, page, limit, extraQuery);
    if (!endpoint) return Promise.resolve(null);
    return fetchWithMeta(endpoint).then(function (_ref4) {
      var data = _ref4.data,
        headers = _ref4.headers;
      var title = normalizedType === 'movie' ? t('menu_movies', 'Movies') : normalizedType === 'show' ? t('menu_tv', 'TV') : t('trakt_source_search_lists', 'Lists');
      var typeHint = normalizedType === 'list' ? 'list' : normalizedType === 'show' ? 'show' : 'movie';
      var line = createLinePayload({
        title: title,
        path: "search/".concat(normalizedType),
        items: data,
        headers: headers,
        page: page,
        limit: limit,
        typeHint: typeHint
      });
      line.type = normalizedType === 'show' ? 'tv' : normalizedType;
      line.search_type = normalizedType;
      line.query = normalizedQuery;
      return line;
    });
  }
  function buildMainDefinitions() {
    var defs = [{
      path: 'media/trending',
      title: t('trakttv_source_trending', 'Trending'),
      typeHint: 'media'
    }, {
      path: 'media/anticipated',
      title: t('trakttv_source_anticipated', 'Anticipated'),
      typeHint: 'media'
    }, {
      path: 'media/popular',
      title: t('trakttv_source_popular', 'Popular'),
      typeHint: 'media'
    }];
    if (Lampa.Storage.get('trakt_token')) {
      defs.push({
        path: 'recommendations/movies',
        title: t('trakttv_source_recommendations_movies', 'Recommendations: Movies'),
        typeHint: 'movie',
        recommendations: true
      });
      defs.push({
        path: 'recommendations/shows',
        title: t('trakttv_source_recommendations_shows', 'Recommendations: Shows'),
        typeHint: 'show',
        recommendations: true
      });
    }
    defs.push.apply(defs, _toConsumableArray(buildTrendingGenreDefinitions('media/trending', 'media', ['movies', 'shows'])));
    return defs;
  }
  function buildCategoryDefinitions() {
    var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'movies';
    var traktGenre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var isShows = section === 'shows';
    var useMediaForAnimation = !isShows && traktGenre === 'animation';
    var basePath = useMediaForAnimation ? 'media' : section;
    var baseTypeHint = useMediaForAnimation ? 'media' : isShows ? 'show' : 'movie';
    var query = traktGenre ? {
      genres: traktGenre
    } : {};
    var defs = [{
      path: "".concat(basePath, "/trending"),
      title: t('trakttv_source_trending', 'Trending'),
      typeHint: baseTypeHint,
      query: query
    }, {
      path: "".concat(basePath, "/anticipated"),
      title: t('trakttv_source_anticipated', 'Anticipated'),
      typeHint: baseTypeHint,
      query: query
    }, {
      path: "".concat(basePath, "/popular"),
      title: t('trakttv_source_popular', 'Popular'),
      typeHint: baseTypeHint,
      query: query
    }];
    if (Lampa.Storage.get('trakt_token')) {
      if (useMediaForAnimation) {
        defs.push({
          path: 'recommendations/movies',
          title: t('trakttv_source_recommendations_movies', 'Recommendations: Movies'),
          typeHint: 'movie',
          recommendations: true,
          query: query
        });
        defs.push({
          path: 'recommendations/shows',
          title: t('trakttv_source_recommendations_shows', 'Recommendations: Shows'),
          typeHint: 'show',
          recommendations: true,
          query: query
        });
      } else {
        defs.push({
          path: isShows ? 'recommendations/shows' : 'recommendations/movies',
          title: t('trakttv_recommendations', 'Recommendations'),
          typeHint: isShows ? 'show' : 'movie',
          recommendations: true,
          query: query
        });
      }
    }
    if (!traktGenre) {
      defs.push.apply(defs, _toConsumableArray(buildTrendingGenreDefinitions("".concat(basePath, "/trending"), baseTypeHint, isShows ? ['shows'] : ['movies'])));
    }
    return defs;
  }
  function createPart(definition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (definition.lazy) {
      return function (call) {
        var line = {
          title: definition.title,
          url: normalizePath(definition.path),
          source: SOURCE_KEY,
          results: [{
            id: 'placeholder_' + Math.random().toString(36).substr(2, 9),
            title: 'Loading...',
            card_type: 'movie',
            type: 'movie',
            poster: '',
            image: '',
            release_date: '',
            params: {
              placeholder: true
            }
          }],
          lazy_load: true,
          definition: definition
        };
        var genres = definition.query && _typeof(definition.query) === 'object' ? String(definition.query.genres || '').trim() : '';
        if (genres) line.genres = genres;
        call(line);
      };
    }
    return function (call) {
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params.limit, 10) || DEFAULT_LIMIT);
      loadFeedLine(definition, page, limit).then(function (line) {
        return call(line && line.results && line.results.length ? line : null);
      }).catch(function () {
        return call(null);
      });
    };
  }
  function nextParts() {
    var parts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CHUNK;
    var loaded = arguments.length > 2 ? arguments[2] : undefined;
    var empty = arguments.length > 3 ? arguments[3] : undefined;
    var chunk = parts.filter(Boolean).slice(0, Math.max(1, parseInt(limit, 10) || DEFAULT_CHUNK));
    if (!chunk.length) {
      if (empty) empty();
      return;
    }
    var pending = chunk.length;
    var collected = [];
    chunk.forEach(function (part) {
      if (typeof part !== 'function') {
        var index = parts.indexOf(part);
        if (index > -1) parts[index] = null;
        if (part && Array.isArray(part.results) && part.results.length) {
          collected.push(part);
        }
        pending -= 1;
        if (pending === 0) {
          if (collected.length) {
            if (loaded) loaded(collected);
          } else {
            nextParts(parts, limit, loaded, empty);
          }
        }
        return;
      }
      part(function (line) {
        var index = parts.indexOf(part);
        if (index > -1) parts[index] = null;
        if (line && Array.isArray(line.results) && line.results.length) {
          collected.push(line);
        }
        pending -= 1;
        if (pending > 0) return;
        if (collected.length) {
          if (loaded) loaded(collected);
        } else {
          nextParts(parts, limit, loaded, empty);
        }
      });
    });
  }
  function injectContentRows() {
    var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    try {
      if (Lampa.ContentRows && typeof Lampa.ContentRows.call === 'function') {
        Lampa.ContentRows.call(screen, params, parts);
      }
    } catch (error) {
      logWarn('ContentRows injection failed', error, {
        debugOnly: true
      });
    }
  }
  function createPartsLoader() {
    var definitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
    var onerror = arguments.length > 3 ? arguments[3] : undefined;
    var screen = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'main';
    var parts = definitions.map(function (definition) {
      return createPart(definition, params);
    });
    injectContentRows(screen, params, parts);
    var load = function load(resolve, reject) {
      if (Lampa.Api && typeof Lampa.Api.partNext === 'function') {
        Lampa.Api.partNext(parts, DEFAULT_CHUNK, resolve, reject);
        return;
      }
      nextParts(parts, DEFAULT_CHUNK, resolve, reject);
    };
    load(oncomplite, onerror);
    return load;
  }
  function resolveListPath() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var urlPath = normalizePath(params.url);
    var idPath = typeof params.id === 'string' ? normalizePath(params.id) : '';
    var genresPath = typeof params.genres === 'string' ? normalizePath(params.genres) : '';
    var traktGenre = resolveTraktGenreFilter(params);
    if (idPath.indexOf('/') > -1) return idPath;
    if (genresPath.indexOf('/') > -1) return genresPath;
    if (urlPath.indexOf('/') > -1) return urlPath;
    if (urlPath === 'tv' || urlPath === 'show' || urlPath === 'shows') return 'shows/popular';
    if ((urlPath === 'movie' || urlPath === 'movies') && traktGenre === 'animation') return 'media/popular';
    if (urlPath === 'movie' || urlPath === 'movies') return 'movies/popular';
    return 'media/popular';
  }
  function openSearchListDetail() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var listId = element.trakt_list_id || element.list_id;
    if (!listId) return;
    Lampa.Activity.push({
      url: '',
      title: element.title || t('trakt_list_detail', 'List Content'),
      component: 'trakt_list_detail',
      id: listId,
      list_id: listId,
      page: 1,
      source: 'tmdb'
    });
  }
  function delegateToTmdb(method, args) {
    try {
      var tmdb = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb;
      if (tmdb && typeof tmdb[method] === 'function') {
        tmdb[method].apply(tmdb, args);
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }
  var TraktSourceProvider = {
    main: function main() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      return createPartsLoader(buildMainDefinitions(), params, oncomplite, onerror, 'main');
    },
    category: function category() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      var section = (params.url || '').toString().toLowerCase() === 'tv' ? 'shows' : 'movies';
      var traktGenre = resolveTraktGenreFilter(params);
      return createPartsLoader(buildCategoryDefinitions(section, traktGenre), params, oncomplite, onerror, 'category');
    },
    list: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      var page = Math.max(1, parseInt(params.page, 10) || 1);
      var limit = Math.max(1, parseInt(params.limit, 10) || DEFAULT_LIMIT);
      var query = decodeQuery(params.query);
      var traktGenre = resolveTraktGenreFilter(params);
      var extraQuery = traktGenre ? {
        genres: traktGenre
      } : {};
      var searchType = normalizeSearchType(params.search_type || (normalizePath(params.url).startsWith('search/') ? normalizePath(params.url).split('/')[1] : ''));
      if (searchType && !query) {
        if (onerror) onerror();
        return;
      }
      if (query && searchType) {
        loadSearchLine(searchType, query, page, limit, extraQuery).then(function (line) {
          if (!line || !line.results.length) {
            if (onerror) onerror();
            return;
          }
          line.title = params.title || line.title;
          oncomplite(line);
        }).catch(function () {
          if (onerror) onerror();
        });
        return;
      }
      var path = resolveListPath(params);
      var typeHint = path.indexOf('shows/') === 0 || path === 'shows' ? 'show' : path.indexOf('movies/') === 0 || path === 'movies' ? 'movie' : path.indexOf('recommendations/shows') === 0 ? 'show' : path.indexOf('recommendations/movies') === 0 ? 'movie' : 'media';
      var recommendations = path.indexOf('recommendations/') === 0;
      loadFeedLine({
        path: path,
        title: params.title || t('title_popular', 'Popular'),
        typeHint: typeHint,
        recommendations: recommendations,
        query: extraQuery
      }, page, limit).then(function (line) {
        if (!line || !line.results.length) {
          if (onerror) onerror();
          return;
        }
        oncomplite(line);
      }).catch(function () {
        if (onerror) onerror();
      });
    },
    menu: function menu() {
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var items = [{
        title: "".concat(t('menu_movies', 'Movies'), ": ").concat(t('trakttv_source_trending', 'Trending')),
        id: 'movies/trending'
      }, {
        title: "".concat(t('menu_movies', 'Movies'), ": ").concat(t('trakttv_source_anticipated', 'Anticipated')),
        id: 'movies/anticipated'
      }, {
        title: "".concat(t('menu_movies', 'Movies'), ": ").concat(t('trakttv_source_popular', 'Popular')),
        id: 'movies/popular'
      }, {
        title: "".concat(t('menu_tv', 'TV'), ": ").concat(t('trakttv_source_trending', 'Trending')),
        id: 'shows/trending'
      }, {
        title: "".concat(t('menu_tv', 'TV'), ": ").concat(t('trakttv_source_anticipated', 'Anticipated')),
        id: 'shows/anticipated'
      }, {
        title: "".concat(t('menu_tv', 'TV'), ": ").concat(t('trakttv_source_popular', 'Popular')),
        id: 'shows/popular'
      }];
      oncomplite(items);
    },
    menuCategory: function menuCategory() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var action = (params.action || '').toString().toLowerCase();
      var section = action === 'tv' ? 'shows' : 'movies';
      var items = [{
        title: t('trakttv_source_trending', 'Trending'),
        url: "".concat(section, "/trending")
      }, {
        title: t('trakttv_source_anticipated', 'Anticipated'),
        url: "".concat(section, "/anticipated")
      }, {
        title: t('trakttv_source_popular', 'Popular'),
        url: "".concat(section, "/popular")
      }];
      if (Lampa.Storage.get('trakt_token')) {
        items.push({
          title: t('trakttv_recommendations', 'Recommendations'),
          url: "recommendations/".concat(section)
        });
      }
      oncomplite(items);
    },
    full: function full() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('full', [_objectSpread2(_objectSpread2({}, params), {}, {
        source: 'tmdb'
      }), oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    person: function person() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('person', [params, oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    company: function company() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('company', [params, oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    seasons: function seasons() {
      var tv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('seasons', [tv, from, oncomplite])) return;
      oncomplite && oncomplite({});
    },
    collections: function collections() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      var onerror = arguments.length > 2 ? arguments[2] : undefined;
      if (delegateToTmdb('collections', [params, oncomplite, onerror])) return;
      if (onerror) onerror();
    },
    discovery: function discovery() {
      return {
        title: 'TraktTV',
        params: {
          save: true
        },
        search: function search(params, oncomplite) {
          var query = decodeQuery(params && params.query).trim();
          if (!query) {
            oncomplite([]);
            return;
          }
          var endpoint = buildSearchUrl('movie,show,list', query, 1, DEFAULT_LIMIT * 3);
          fetchWithMeta(endpoint).then(function (_ref5) {
            var data = _ref5.data,
              headers = _ref5.headers;
            var items = data || [];
            var movies = items.filter(function (e) {
              return e.type === 'movie';
            });
            var shows = items.filter(function (e) {
              return e.type === 'show';
            });
            var lists = items.filter(function (e) {
              return e.type === 'list';
            });
            var rows = [];
            if (movies.length) {
              var line = createLinePayload({
                title: t('menu_movies', 'Movies'),
                path: 'search/movie',
                items: movies,
                headers: headers,
                page: 1,
                limit: DEFAULT_LIMIT,
                typeHint: 'movie'
              });
              line.type = 'movie';
              line.search_type = 'movie';
              line.query = query;
              rows.push(line);
            }
            if (shows.length) {
              var _line = createLinePayload({
                title: t('menu_tv', 'TV'),
                path: 'search/show',
                items: shows,
                headers: headers,
                page: 1,
                limit: DEFAULT_LIMIT,
                typeHint: 'show'
              });
              _line.type = 'tv';
              _line.search_type = 'show';
              _line.query = query;
              rows.push(_line);
            }
            if (lists.length) {
              var _line2 = createLinePayload({
                title: t('trakt_source_search_lists', 'Lists'),
                path: 'search/list',
                items: lists,
                headers: headers,
                page: 1,
                limit: DEFAULT_LIMIT,
                typeHint: 'list'
              });
              _line2.type = 'list';
              _line2.search_type = 'list';
              _line2.query = query;
              rows.push(_line2);
            }
            oncomplite(rows);
          }).catch(function () {
            oncomplite([]);
          });
        },
        onSelect: function onSelect(params, close) {
          var element = params && (params.element || params.item_data) ? params.element || params.item_data : {};
          var isList = element && (element.trakt_search_type === 'list' || element.method === 'list');
          close && close();
          if (isList) {
            openSearchListDetail(element);
            return;
          }
          Lampa.Activity.push(_objectSpread2(_objectSpread2({}, element), {}, {
            component: 'full',
            source: 'tmdb'
          }));
        },
        onMore: function onMore(params, close) {
          var query = decodeQuery(params && params.query).trim();
          var row = params && params.data ? params.data : {};
          var searchType = normalizeSearchType(row.search_type || row.type);
          close && close();
          if (!query || !searchType) return;
          if (searchType === 'list') {
            Lampa.Bell.push({
              text: t('trakt_source_search_lists_more_hint', 'Open lists directly from search results')
            });
            return;
          }
          Lampa.Activity.push({
            url: "search/".concat(searchType),
            title: "".concat(t('search', 'Search'), " - ").concat(query),
            component: 'category_full',
            page: 1,
            source: SOURCE_KEY,
            query: encodeURIComponent(query),
            search_type: searchType
          });
        },
        onCancel: function onCancel() {}
      };
    },
    clear: function clear() {}
  };
  function registerLazyLineLoader() {
    if (typeof Lampa === 'undefined' || !Lampa.Listener) return;
    function loadLine(e, isRetry) {
      if (e.line.destroyed) return;
      if (isRetry) {
        // Restore "Loading..." placeholder
        e.line.scroll.clear();
        if (e.line.items) {
          Lampa.Arrays.destroy(e.line.items);
          e.line.items = [];
        }
        var placeholderCard = {
          id: 'placeholder_' + Math.random().toString(36).substr(2, 9),
          title: Lampa.Lang.translate('loading') || 'Loading...',
          card_type: 'movie',
          type: 'movie',
          poster: '',
          image: '',
          release_date: '',
          params: {
            placeholder: true
          }
        };
        e.line.emit('createAndAppend', placeholderCard);
        if (e.line.items && e.line.items.length) {
          e.line.active = 0;
          e.line.last = e.line.items[0].render(true);
        }
        var isFocused = Lampa.Controller.own(e.line);
        if (isFocused) {
          Lampa.Controller.collectionSet(e.line.scroll.render(true));
          if (e.line.last) {
            Lampa.Controller.collectionFocus(e.line.last[0], e.line.scroll.render(true));
          }
        }
        Lampa.Layer.visible(e.line.scroll.render(true));
      }
      var definition = e.data.definition;
      var page = 1;
      var limit = 20;
      loadFeedLine(definition, page, limit).then(function (lineData) {
        if (e.line.destroyed) return;

        // Clear the placeholder
        e.line.scroll.clear();
        if (e.line.items) {
          Lampa.Arrays.destroy(e.line.items);
          e.line.items = [];
        }

        // Update raw results
        e.data.results = lineData.results;

        // Render new cards
        var viewSize = e.line.view || 7;
        e.data.results.slice(0, viewSize).forEach(function (card) {
          e.line.emit('createAndAppend', card);
        });
        if (e.line.items && e.line.items.length) {
          e.line.active = 0;
          e.line.last = e.line.items[0].render(true);
        }
        var isFocused = Lampa.Controller.own(e.line);
        if (isFocused) {
          Lampa.Controller.collectionSet(e.line.scroll.render(true));
          if (e.line.last) {
            Lampa.Controller.collectionFocus(e.line.last[0], e.line.scroll.render(true));
          }
        }

        // Trigger visible update in Layer
        Lampa.Layer.visible(e.line.scroll.render(true));
      }).catch(function (err) {
        if (e.line.destroyed) return;
        e.line.loading_started = false;
        console.error('[TraktTV Debug] Lazy load failed:', {
          title: definition.title,
          path: definition.path,
          status: err && err.status,
          response: err && err.response,
          responseText: err && err.originalError && err.originalError.responseText,
          error: err
        });
        logWarn('Lazy line load failed', {
          title: definition.title,
          error: err
        }, {
          debugOnly: true
        });

        // Show Error card with retry on click
        e.line.scroll.clear();
        if (e.line.items) {
          Lampa.Arrays.destroy(e.line.items);
          e.line.items = [];
        }
        var errorCard = {
          id: 'error_' + Math.random().toString(36).substr(2, 9),
          title: Lampa.Lang.translate('title_error') || 'Помилка завантаження. Натисніть для повтору',
          card_type: 'movie',
          type: 'movie',
          poster: '',
          image: '',
          release_date: '',
          params: {
            emit: {
              onEnter: function onEnter() {
                if (e.line.loading_started) return;
                e.line.loading_started = true;
                loadLine(e, true);
              }
            }
          }
        };
        e.line.emit('createAndAppend', errorCard);
        if (e.line.items && e.line.items.length) {
          e.line.active = 0;
          e.line.last = e.line.items[0].render(true);
        }
        var isFocused = Lampa.Controller.own(e.line);
        if (isFocused) {
          Lampa.Controller.collectionSet(e.line.scroll.render(true));
          if (e.line.last) {
            Lampa.Controller.collectionFocus(e.line.last[0], e.line.scroll.render(true));
          }
        }
        Lampa.Layer.visible(e.line.scroll.render(true));
      });
    }
    Lampa.Listener.follow('line', function (e) {
      if (!e || !e.data || !e.data.lazy_load) return;
      if (e.type === 'visible' || e.type === 'toggle') {
        if (e.line.loading_started) return;
        e.line.loading_started = true;
        loadLine(e, false);
      } else if (e.type === 'destroy') {
        e.line.destroyed = true;
      }
    });
  }

  // Helper getter: prefer module api, fallback to global bridge
  function getGlobalApi() {
    try {
      if (typeof api$1 !== 'undefined' && api$1) return api$1;
    } catch (e) {/* noop */}
    try {
      if (typeof window !== 'undefined' && window.TraktTV && window.TraktTV.api) {
        return window.TraktTV.api;
      }
    } catch (e) {/* noop */}
    return null;
  }
  function registerSourceSelectorOption() {
    try {
      if (!Lampa || !Lampa.Params || typeof Lampa.Params.select !== 'function') return;
      var baseValues = Lampa.Params.values && _typeof(Lampa.Params.values.source) === 'object' ? Lampa.Params.values.source : {
        tmdb: 'TMDB',
        cub: 'CUB'
      };
      var sourceValues = _objectSpread2(_objectSpread2({}, baseValues), {}, {
        trakttv: 'TraktTV'
      });
      var paramsDefault = Lampa.Params.defaults && Lampa.Params.defaults.source ? Lampa.Params.defaults.source : 'tmdb';
      var defaultValue = sourceValues[paramsDefault] ? paramsDefault : sourceValues.tmdb ? 'tmdb' : Object.keys(sourceValues)[0];
      var storedSource = Lampa.Storage && typeof Lampa.Storage.field === 'function' ? Lampa.Storage.field('source') : '';
      var safeDefault = storedSource && sourceValues[storedSource] ? storedSource : defaultValue || 'tmdb';
      Lampa.Params.select('source', sourceValues, safeDefault);
    } catch (error) {
      logError('Source selector registration failed', error);
    }
  }
  function startPlugin() {
    window.plugin_trakt_ready = true;

    // Initialize Trakt client_id for direct Smart TV API calls
    // User-provided: created a dedicated key for the plugin
    setClientId('da2f995ec6a243546438f011272eb0a6f457048473527e4ee35b633100175f35');

    // Establish global bridge only after window is available
    try {
      if (typeof window !== 'undefined') {
        window.TraktTV = window.TraktTV || {};
        var current = typeof api$1 !== 'undefined' && api$1 ? api$1 : null;
        var existing = window.TraktTV.api || null;

        // Assign if not set or differs; keep existing if current is null
        if (!existing || existing !== current) {
          window.TraktTV.api = current || existing || null;
        }
        logDebug('API bridge ready', {
          hasModuleApi: !!current,
          hadExisting: !!existing,
          finalHas: !!window.TraktTV.api
        });
      }
    } catch (e) {/* noop */}

    // Додаємо стилі
    Lampa.Template.add('trakt_style', "<style>@charset 'UTF-8';.full-start-new__details.trakt{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff}.trakt-brand-icon{width:100%;height:100%;display:block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;color:inherit}.trakt-brand-icon path{fill:currentColor}.trakt-head-action.focus .trakt-brand-icon,.trakt-head-action.hover .trakt-brand-icon,.menu__item.focus .trakt-brand-icon,.menu__item.hover .trakt-brand-icon,.menu__item.traverse .trakt-brand-icon,.settings-folder.focus .trakt-brand-icon{color:inherit}.full-start-new__details.trakt .trakt-icon{margin-right:.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.full-start-new__details.trakt .full-start-new__split{margin:0 .5em}.trakt-applecation-progress{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em;margin-right:.6em;margin-left:.6em}.trakt-applecation-progress .trakt-icon{width:18px;height:18px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.trakt-applecation-progress .trakt-icon svg{width:100%;height:100%}.trakt-applecation-progress__text{white-space:nowrap}.trakt-lists-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1em;padding:1em}.trakt-list-card{width:150px;background:rgba(255,255,255,0.1);-webkit-border-radius:.5em;border-radius:.5em;padding:.5em;cursor:pointer;-webkit-transition:background .3s ease;-o-transition:background .3s ease;transition:background .3s ease}.trakt-list-card:hover{background:rgba(255,255,255,0.2)}.trakt-list-card__poster{width:100%;height:225px;background-size:cover;background-position:center;-webkit-border-radius:.5em;border-radius:.5em;margin-bottom:.5em}.trakt-list-card__title{font-size:.9em;text-align:center;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.trakt-list-detail-header{padding:1em;background:rgba(0,0,0,0.3);margin-bottom:1em}.trakt-list-detail-title{font-size:1.5em;margin-bottom:.5em}.trakt-list-detail-description{font-size:1em;opacity:.8}.trakt-head-action{color:#ff4d4d}.trakt-head-action--ok{color:#37ff54}.trakt-head-action--error{color:#ff4d4d}.trakt-head-action svg{width:100%;height:100%;display:block}.trakt-head-icon{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.trakt-list-manager-button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em}.trakt-list-manager-button svg{width:1.2em;height:1.2em}.trakt-watchlist-hub{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.trakt-watchlist-hub__controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.55em;padding:.8em 1.5em .2em}.trakt-watchlist-hub__tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.8em}.trakt-watchlist-hub__tabs .simple-button{margin-right:0;-webkit-box-flex:1;-webkit-flex:1 1 11em;-ms-flex:1 1 11em;flex:1 1 11em;min-width:9.5em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.trakt-watchlist-hub__tabs .simple-button--filter>div{width:100%;margin-left:0;padding:0;background:transparent;text-align:center;font-weight:700}.trakt-watchlist-hub__sorts{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.55em}.trakt-watchlist__sort{margin-right:0;-webkit-box-flex:1;-webkit-flex:1 1 10em;-ms-flex:1 1 10em;flex:1 1 10em;min-width:7.6em;padding:.65em .85em;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.55em;-webkit-border-radius:.9em;border-radius:.9em}.trakt-watchlist__sort>div{margin-left:0}.trakt-watchlist__sort .trakt-watchlist__sort-label{min-width:0;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;font-weight:600;text-align:left}.trakt-watchlist__sort .trakt-watchlist__sort-state{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;min-width:1em;font-size:1.05em;line-height:1;font-weight:700;text-align:center;opacity:.88}.trakt-watchlist__sort .trakt-watchlist__sort-state:empty{display:none}.trakt-watchlist__sort--active{background:rgba(255,255,255,0.14);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16)}.trakt-watchlist__sort--more{-webkit-flex-basis:8.4em;-ms-flex-preferred-size:8.4em;flex-basis:8.4em}.trakt-watchlist__sort--desc .trakt-watchlist__sort-state,.trakt-watchlist__sort--asc .trakt-watchlist__sort-state{opacity:1}.trakt-watchlist-hub__body{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-height:0}.trakt-watchlist__view.hide{display:none}.trakt-list-wide-card__meta{margin-top:.6em;font-size:1.1em;opacity:.8}.trakt-list-wide-card:not(.trakt-list-wide-card--create) .card__promo{display:none !important}.trakt-list-wide-card--create .card__view{background:-webkit-linear-gradient(315deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));background:-o-linear-gradient(315deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));background:linear-gradient(135deg,rgba(23,129,255,0.28),rgba(53,255,145,0.22));-webkit-border-radius:1em;border-radius:1em}.trakt-list-wide-card--create .card__view::before{content:'+';position:absolute;inset:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:6em;line-height:1;color:rgba(255,255,255,0.82);font-weight:500;z-index:0}.trakt-list-wide-card--create .card__img{opacity:0}.trakt-list-wide-card--create .card__promo{z-index:2}.trakt-list-wide-card--create .card__promo-title{font-weight:700}.trakt-userinfo-name{line-height:1.35;margin-bottom:.3em}.trakt-userinfo-vip{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.35;margin-top:.1em}.trakt-userinfo-vip__label{opacity:.75}.trakt-vip-badge{display:inline-block;-webkit-border-radius:999px;border-radius:999px;padding:.2em .65em;font-size:.9em;line-height:1.25;border:1px solid transparent;vertical-align:middle}.trakt-vip-badge--enabled{color:#1be26f;border-color:rgba(27,226,111,0.45);background:rgba(27,226,111,0.14)}.trakt-vip-badge--disabled{color:#aeb5bc;border-color:rgba(174,181,188,0.45);background:rgba(174,181,188,0.12)}.trakt-device-auth{padding:.4em 1.2em 1.2em}.trakt-device-auth__inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:1.5em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.trakt-device-auth__qr-col{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:min(45%,14em)}.trakt-device-auth__info-col{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.6em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;padding-top:.4em}.trakt-device-auth__qr-container{width:100%}.trakt-device-auth__qr-container--hidden{display:none}.trakt-device-auth__qr-link{display:block}.trakt-device-auth__qr-image{display:block;width:100%;height:auto;background:#fff;border:2px solid #e3e3e3;-webkit-border-radius:.8em;border-radius:.8em;padding:.35em;-webkit-box-sizing:border-box;box-sizing:border-box}.trakt-device-auth__qr-caption{margin-top:.6em;font-size:.95em;opacity:.72;text-align:center}.trakt-device-auth__verification{font-size:1.05em;line-height:1.5;word-break:break-word;opacity:.9}.trakt-device-auth__code{margin:0}.trakt-device-auth__code strong{letter-spacing:.08em}.trakt-check-btn{cursor:pointer;margin-top:.4em}@media screen and (max-width:480px){.trakt-device-auth{padding:0 .6em -webkit-calc(0.8em + env(safe-area-inset-bottom));padding:0 .6em calc(0.8em + env(safe-area-inset-bottom))}.trakt-device-auth__inner{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.trakt-device-auth__qr-col{width:min(100%,18.5em)}.trakt-device-auth__info-col{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}}</style>");
    $('body').append(Lampa.Template.get('trakt_style', {}, true));

    // Фонова валідація токена при старті (єдиний шлях auth lifecycle).
    if (Lampa.Storage.get('trakt_refresh_token')) {
      var _getGlobalApi;
      var authApi = (_getGlobalApi = getGlobalApi()) === null || _getGlobalApi === void 0 ? void 0 : _getGlobalApi.auth;
      if (authApi && typeof authApi.ensureValid === 'function') {
        authApi.ensureValid({
          reason: 'startup'
        }).catch(function (error) {
          logError('Startup token validation failed', error, {
            debugOnly: true
          });
        });
      } else if (authApi && typeof authApi.refresh === 'function') {
        authApi.refresh({
          reason: 'startup-fallback'
        }).catch(function (error) {
          logError('Startup token refresh fallback failed', error, {
            debugOnly: true
          });
        });
      } else if (debugEnabled()) {
        logDebug('Auth API unavailable for startup token validation', {
          authApi: !!authApi
        });
      }
    }

    // Рекомендації завантажуються динамічно при потребі
    // Добавляем компоненты
    Lampa.Component.add('trakt_watchlist', function (object) {
      return new Catalog.watchlist(object);
    });

    // Реєстрація source-провайдера TraktTV для Main/Category/List/Search discovery
    try {
      if (Lampa.Api) {
        Lampa.Api.sources = Lampa.Api.sources || {};
        if (!Lampa.Api.sources.trakttv) {
          Lampa.Api.sources.trakttv = TraktSourceProvider;
        }
        if (Lampa.Api.sources.trakttv) {
          registerSourceSelectorOption();
        }
      }
    } catch (error) {
      logError('Source provider registration failed', error);
    }
    Lampa.Component.add('trakt_upnext', function (object) {
      return new Catalog.upnext(object);
    });

    // Додаємо нові компоненти
    Lampa.Component.add('trakt_timetable_all', TraktTimetableAll);
    Lampa.Component.add('trakttv_recommendations', Catalog.recommendations);
    Lampa.Component.add('trakt_list_detail', Catalog.list_detail);
    Lampa.Component.add('trakt_my_list_detail', Catalog.my_list_detail);
    Lampa.Component.add('trakt_lists', Catalog.lists);
    Lampa.Component.add('trakt_my_lists', Catalog.my_lists);

    // Додаємо переклади
    Main();
    registerContextListAction();

    // Ініціалізуємо обробники подій
    events.init();
    // Ініціалізуємо модуль відстеження перегляду
    watching.init();

    // Initialize ContentRows (Lampa 3.0+ required)
    try {
      initContentRows();
    } catch (error) {
      logError('ContentRows initialization failed', error);
    }

    // Initialize lazy loading listener for content rows
    try {
      registerLazyLineLoader();
    } catch (error) {
      logError('Lazy line loader initialization failed', error);
    }
    if (window.appready) {
      initTraktHeadButton();
    } else if (Lampa.Listener) {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') initTraktHeadButton();
      });
    }
  }
  function registerContextListAction() {
    if (typeof Lampa === 'undefined' || !Lampa.Manifest) return;
    var pluginName = Lampa.Lang.translate('trakt_manage_lists_title') || 'Trakt Lists';
    var exists = Array.isArray(Lampa.Manifest.plugins) && Lampa.Manifest.plugins.some(function (plugin) {
      return plugin && plugin.name === pluginName && plugin.component === 'trakt_context_lists';
    });
    if (exists) return;
    Lampa.Manifest.plugins = Array.isArray(Lampa.Manifest.plugins) ? Lampa.Manifest.plugins : [];
    Lampa.Manifest.plugins.push({
      type: 'video',
      version: '3.1.0',
      name: pluginName,
      component: 'trakt_context_lists',
      onContextMenu: function onContextMenu() {
        return {
          name: pluginName,
          description: ''
        };
      },
      onContextLauch: function onContextLauch(object) {
        setTimeout(function () {
          watchlist.openManagerByCard(object, {
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            }
          });
        }, 0);
      }
    });
  }
  function initTraktHeadButton() {
    if (typeof Lampa === 'undefined' || !Lampa.Head) return;
    if (window.trakt_head_button) return;
    var head = Lampa.Head.render ? Lampa.Head.render() : null;
    if (!head || !head.find) return;
    if (head.find('.trakt-head-action').length) return;
    var iconSvg = icons.TRAKT_ICON.replace('<svg ', '<svg style="width:100%; height:100%; display:block;" ');
    var button = Lampa.Head.addIcon("<span class=\"trakt-head-icon\">".concat(iconSvg, "</span>"), openTraktSettings);
    button.addClass('trakt-head-action');
    window.trakt_head_button = button;

    // Move before full--screen button in header
    var headEl = Lampa.Head.render ? Lampa.Head.render() : null;
    if (headEl && headEl.find) {
      var fs = headEl.find('.full--screen');
      if (fs.length) button.insertBefore(fs);
    }
    var scheduleUpdate = function scheduleUpdate() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (window.trakt_head_status_timer) clearTimeout(window.trakt_head_status_timer);
      window.trakt_head_status_timer = setTimeout(function () {
        updateTraktHeadStatus(button);
      }, delay);
    };
    scheduleUpdate(0);
    if (Lampa.Storage && Lampa.Storage.listener) {
      Lampa.Storage.listener.follow('change', function (e) {
        if (!e || !e.name) return;
        if (e.name === 'trakt_token' || e.name === 'trakt_refresh_token') {
          scheduleUpdate(300);
        }
      });
    }
  }
  function openTraktSettings() {
    if (typeof Lampa === 'undefined') return;
    var open = function open() {
      if (Lampa.Controller) Lampa.Controller.toggle('settings');
      var checkExist = setInterval(function () {
        var el = $('.settings').find('[data-component="trakt"]');
        if (el.length) {
          clearInterval(checkExist);
          setTimeout(function () {
            el.trigger('hover:enter');
          }, 100);
        }
      }, 50);
      setTimeout(function () {
        clearInterval(checkExist);
      }, 3000);
    };
    if (Lampa.ParentalControl && typeof Lampa.ParentalControl.personal === 'function') {
      Lampa.ParentalControl.personal('settings', open, false, true);
    } else {
      open();
    }
  }
  function updateTraktHeadStatus(button) {
    if (!button) return;
    var token = Lampa.Storage && Lampa.Storage.get ? Lampa.Storage.get('trakt_token') : null;
    if (!token) return setTraktHeadStatus(button, 'error');
    var Api = getGlobalApi();
    if (!Api || typeof Api.get !== 'function') return setTraktHeadStatus(button, 'error');
    Api.get('/users/me').then(function () {
      return setTraktHeadStatus(button, 'ok');
    }).catch(function () {
      return setTraktHeadStatus(button, 'error');
    });
  }
  function setTraktHeadStatus(button, status) {
    button.removeClass('trakt-head-action--ok trakt-head-action--error');
    if (status === 'ok') button.addClass('trakt-head-action--ok');else button.addClass('trakt-head-action--error');
  }
  if (!window.plugin_trakt_ready) {
    startPlugin();
  }

})();
